var _ = _(_(), 1),
  _ = _();
function _(_, _) {
  let _ = [
      {
        href: _.Home(),
        label: _.Localize(`#Breadcrumbs_Home`),
      },
    ],
    _ = _.appid,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    );
  _ &&
    _.push({
      href: _.AppHome(_),
      label: _?.name ?? _.toString(),
    });
  let _;
  _ === 753 && _?.market_fee_app && (_ = _.market_fee_app);
  let { data: _ } = _(
    _
      ? {
          appid: _,
        }
      : void 0,
  );
  if (
    (_ &&
      _ &&
      _.push({
        href: _.Search({
          search: `appid=${_}&category_Game=app_${_}`,
        }),
        label: _?.name ?? _.toString(),
      }),
    _(_) && _?.tags)
  ) {
    let _ = _.tags.find(({ category: _ }) => _ === `Weapon`),
      _ = _.tags.find(({ category: _ }) => _ === `Type`);
    _ &&
      _ &&
      (_.push({
        href: _.Search({
          search: `appid=${_}&category_${_.category}=${_.internal_name}`,
        }),
        label: _.localized_tag_name,
        key: `${_.category}_${_.internal_name}`,
      }),
      _.push({
        href: _.Search({
          search: `appid=${_}&category_${_.category}=${_.internal_name}`,
        }),
        label: _.localized_tag_name,
        key: `${_.category}_${_.internal_name}`,
      }));
  }
  return (
    _ &&
      _.push({
        href: _.Item(_.appid, _.market_bucket_group_id || _.market_hash_name),
        label: _.market_bucket_group_name || _.market_name || _.name,
      }),
    _
  );
}
function _(_) {
  let _ = {
      color: `text-body`,
      contrast: `body`,
    },
    _ = {
      color: `text-body`,
      contrast: `note`,
    };
  return (0, _.jsx)(_, {
    ..._,
    ..._,
    children: _.breadcrumbs.map((_, _) =>
      (0, _.jsxs)(
        _.Fragment,
        {
          children: [
            (0, _.jsx)(_, {
              ..._,
              children:
                _ > 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: `\xA0>\xA0`,
                }),
            }),
            (0, _.jsx)(_, {
              ..._,
              href: _.href,
              children: _.label,
            }),
          ],
        },
        _.key || _.label,
      ),
    ),
  });
}
function _(_) {
  let { query: _, item: _ } = _;
  return (0, _.jsx)(_, {
    breadcrumbs: _(_, _),
  });
}
function _(_) {
  let { label: _ } = _;
  return (0, _.jsx)(_, {
    breadcrumbs: [
      {
        href: `${_.COMMUNITY_BASE_URL}market`,
        label: _.Localize(`#Breadcrumbs_Home`),
        key: `/`,
      },
      {
        href: ``,
        label: _,
        key: _,
      },
    ],
  });
}
export { _, _ };

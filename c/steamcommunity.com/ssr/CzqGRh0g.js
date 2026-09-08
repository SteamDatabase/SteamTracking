var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { appid: _, accessory: _ } = _,
    { data: _ } = _(_, {
      classid: _.classid,
      instanceid: _.instanceid || `0`,
    }),
    _ = _.description || _;
  if (!_) return null;
  let _ = _.parent_relationship_properties || [],
    _ = _.standalone_properties || [];
  return (0, _.jsx)(_, {
    description: _,
    children: (0, _.jsx)(`a`, {
      className: _(),
      href: _.Item(_, _.market_bucket_group_id || _.market_hash_name),
      children: (0, _.jsxs)(_, {
        align: `center`,
        gap: {
          initial: `1`,
          _: `3`,
        },
        padding: `2`,
        background: `dull-7`,
        minWidth: `0`,
        cursor: `pointer`,
        "border-radius": `2`,
        children: [
          (0, _.jsx)(_, {
            maxWidth: `48px`,
            maxHeight: `48px`,
            objectFit: `contain`,
            src: _(_),
            alt: ``,
          }),
          (0, _.jsxs)(_, {
            minWidth: `0`,
            children: [
              (0, _.jsx)(_, {
                lineClamp: 3,
                children: _.name,
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    property: _,
                  },
                  _.propertyid,
                ),
              ),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    property: _,
                  },
                  _.propertyid,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    size: {
      initial: `1`,
      _: `2`,
    },
    contrast: `note`,
  });
}
function _(_) {
  return _(_(_(), _, _.LANGUAGE));
}
function _(_, _ = _.LANGUAGE) {
  let _ = _();
  return _({
    ..._(_(), _, _, _),
    enabled: !!_,
  });
}
function _(_, _, _, _) {
  return {
    queryKey: [`AssetPropertySchemaMap`, _, _],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _)),
        _ = new Map();
      return _.property_schemas.forEach((_) => _.set(_._, _)), _;
    },
  };
}
function _(_, _, _) {
  return {
    queryKey: [`AssetPropertySchema`, _, _],
    queryFn: async () => {
      let _ = await _.GetAssetPropertySchema(_, {
        appid: _,
        language: _,
      });
      if (!_.BSuccess() && _.GetEResult() != 42)
        throw `Error loading asset properties for ${_}: ${_.GetErrorMessage()}`;
      return {
        property_schemas: _.Body().toObject().property_schemas ?? [],
      };
    },
  };
}
var _ = {};
(_.arabic = () => _(() => import(`./rN5CFTd9.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./BnIw7EYQ.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./BLnjZWm2.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./CnUgLyxJ.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./BjYYy76J.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./BFCibLhZ.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./llq_5aOJ.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./rRkzNERb.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./B6mp-Sbp.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./BP1SHjDW2.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./BuS3Shms2.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Cqu372zS2.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./Cq0QCWgt2.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./CJ3pW3d52.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./Bzxs73dJ2.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./CSjISZll2.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./DREsO53s2.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DApHeSfP2.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./BZHkgTYY2.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./Dq1nK3FB2.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./DVIQCxna2.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./imqP6pQN2.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./Dp-qZ4wI2.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./B5_7-iFs2.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./BGzs6kj92.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./BbQH-dBe2.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./DDRH7vep2.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./DkpQ016O2.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./YsxXBpmW2.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./q89L-1eW2.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./CmpCYDaI2.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./VZreZ3i72.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _.Localize,
  _ = {
    Label: _,
    Value: _,
  };
function _(_) {
  let { appid: _, property: _, ..._ } = _,
    { data: _ } = _(_),
    _ = _?.get(_.propertyid);
  return !_ || _.hide_from_description
    ? null
    : (0, _.jsx)(_, {
        _: `div`,
        ..._,
        children: _.LocalizeReact(
          `#ItemDescription_AssetPropertyLabelColonValue`,
          _.localized_label,
          (0, _.jsx)(_, {
            whiteSpace: `pre-wrap`,
            children: (0, _.jsx)(_, {
              property: _,
            }),
          }),
        ),
      });
}
var _ = Object.assign(_, _);
function _(_) {
  let { appid: _, property: _ } = _,
    { data: _ } = _(_),
    _ = _?.get(_.propertyid);
  return _ ? _.localized_label : null;
}
function _(_) {
  let { property: _ } = _;
  if (_.float_value !== void 0) {
    let _ =
        typeof _.float_value == `string`
          ? parseFloat(_.float_value)
          : _.float_value,
      _ = 9;
    return (
      _ > 0 &&
        (_ < 1e-28
          ? (_ = 47)
          : _ < 1e-18
            ? (_ = 35)
            : _ < 1e-12
              ? (_ = 21)
              : _ < 1e-5 && (_ = 15)),
      _.toLocaleString(_(), {
        maximumFractionDigits: _,
      })
    );
  } else if (_.int_value !== void 0)
    return Number(_.int_value).toLocaleString(_());
  else if (_.string_value !== void 0) return _.string_value;
  else return null;
}
var _ = _.createContext(void 0);
function _(_) {
  let {
      description: _,
      asset: _,
      bInteractable: _ = !0,
      listingID: _,
      children: _,
    } = _,
    _ = _.useMemo(
      () => ({
        description: _,
        asset: _,
        bInteractable: _,
        listingID: _,
      }),
      [_, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_).description;
}
function _() {
  return _.useContext(_).asset;
}
function _() {
  return _.useContext(_).bInteractable;
}
function _() {
  return _.useContext(_).listingID;
}
function _(_) {
  let { action: _ } = _,
    _ = _();
  if (!_) return null;
  let _ = _.link.match(
      /GetGooValue\(\s*'?[^']*'?\s*,\s*'?[^']*'?\s*,\s*'?(?<appid>[0-9]+)'?\s*,\s*'?(?<item_type>[0-9]+)'?\s*,\s*'?(?<border_color>[0-9]+)'?/,
    )?.groups,
    { contextid: _, assetid: _ } = _;
  if (!_ || !_ || _?.appid != 753 || _ != `6` || !_.appid || !_.item_type)
    return null;
  let { appid: _, item_type: _, border_color: _ } = _;
  return (0, _.jsx)(_, {
    contextid: _,
    assetid: _,
    appid: parseInt(_),
    item_type: parseInt(_),
    border_color: parseInt(_),
  });
}
function _(_) {
  let { contextid: _, assetid: _, appid: _, item_type: _, border_color: _ } = _,
    { data: _, isLoading: _ } = _(_, _, _);
  return _ === void 0 && !_
    ? null
    : (0, _.jsxs)(_, {
        background: `sky-3`,
        padding: `2`,
        gapY: `2`,
        direction: `column`,
        align: `start`,
        marginTop: `2`,
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            contrast: `body`,
            children: _.LocalizeReact(
              `#ItemDescription_ThisItemIsWorthGems`,
              (0, _.jsx)(_, {
                color: `sky-11`,
                children: _.Localize(
                  `#ItemDescription_XGems`,
                  _?.toLocaleString(_()) ?? ``,
                ),
              }),
            ),
          }),
          (0, _.jsx)(_, {
            color: `green`,
            onClick: () => window.GrindIntoGoo(_, _, _),
            size: `1`,
            children: _(`#ItemDescription_TurnIntoGemsButton`),
          }),
          (0, _.jsx)(_, {
            _: `div`,
            contrast: `body`,
            children: _(
              _(`#ItemDescription_GemDescription`),
              (0, _.jsx)(_, {
                underline: `auto`,
                color: `greyneutral-12`,
                href: `${_.COMMUNITY_BASE_URL}tradingcards/boostercreator/`,
              }),
            ),
          }),
        ],
      });
}
function _(_, _, _) {
  return _({
    queryKey: [`GetGooValue`, _, _, _],
    queryFn: async () => {
      let _ = new URLSearchParams({
          appid: _.toString(),
          item_type: _.toString(),
          border_color: _.toString(),
        }),
        _ = `${_.COMMUNITY_BASE_URL}auction/ajaxgetgoovalueforitemtype/?${_.toString()}`,
        _ = await (
          await fetch(_, {
            method: `GET`,
          })
        ).json();
      if (`goo_value` in _) return _.goo_value;
      throw `Error querying goo value`;
    },
    retry: !1,
  });
}
var _ = _.createContext({
  steamidOwner: void 0,
});
function _() {
  return _.useContext(_).steamidOwner;
}
function _() {
  let _ = _(),
    _ = _(),
    { actions: _ } = _;
  return _
    ? _ &&
        (0, _.jsx)(_, {
          actions: _,
        })
    : null;
}
function _() {
  let _ = _(),
    _ = _(),
    { owner_actions: _ } = _;
  return _
    ? _ &&
        (0, _.jsx)(_, {
          actions: _,
        })
    : null;
}
function _() {
  let _ = _(),
    _ = _(),
    { market_actions: _ } = _;
  return _
    ? _ &&
        (0, _.jsx)(_, {
          actions: _,
        })
    : null;
}
function _(_) {
  let { actions: _ } = _,
    [_, _] = _.useMemo(() => {
      let _ = [],
        _ = [];
      return (
        _.forEach((_, _) => {
          _.link?.startsWith(`javascript:GetGooValue`)
            ? _.push(
                (0, _.jsx)(
                  _,
                  {
                    action: _,
                  },
                  _,
                ),
              )
            : _.push(
                (0, _.jsx)(
                  _,
                  {
                    action: _,
                  },
                  _,
                ),
              );
        }),
        [_, _]
      );
    }, [_]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          wrap: `wrap`,
          gap: `2`,
          children: _,
        }),
      _,
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return (0, _.jsx)(_, {
    ..._,
    ownerSteamID: _,
    description: _,
    asset: _,
    listingID: _,
  });
}
function _(_) {
  let {
      action: _,
      description: _,
      asset: _,
      ownerSteamID: _,
      listingID: _,
    } = _,
    _ = _(_.link, _, _, _, _);
  if (_.startsWith(`javascript:`)) {
    let _ = _.substring(11);
    return (0, _.jsx)(_, {
      onClick: Function(_),
      size: `1`,
      color: `dull`,
      children: _.name,
    });
  } else
    return (0, _.jsx)(_, {
      href: _,
      size: `1`,
      color: `dull`,
      children: _.name,
    });
}
function _(_, _, _, _, _) {
  let _ = _.replace(/%assetid%/, _?.assetid ?? ``)
    .replace(/%contextid%/, _?.contextid ?? ``)
    .replace(/%owner_steamid%/, _ ?? ``)
    .replace(/%listingid%/, _ ?? ``);
  return (
    _?.asset_properties &&
      _.asset_properties.forEach((_) => {
        let _ = ``;
        _.float_value === void 0
          ? _.int_value === void 0
            ? _.string_value !== void 0 && (_ = _.string_value)
            : (_ = _.int_value.toString())
          : (_ = _.float_value.toString()),
          (_ = _.replace(`%propid:${_.propertyid}%`, _));
      }),
    (_ = _.replace(/%propid:[0-9]+%/, ``)),
    _
  );
}
function _(_) {
  let { description: _, asset: _, type: _ = `descriptions`, ..._ } = _,
    _ = _[_];
  if (_(_.appid) && _) {
    let _ = !1;
    _ = _.filter((_) =>
      _.name === `keychain_info` ||
      _.name === `sticker_info` ||
      (_.name === `blank` && _)
        ? !1
        : ((_ = _.name === `blank`), !0),
    );
  }
  return (0, _.jsx)(_, {
    direction: `column`,
    children: _?.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          line: _,
          description: _,
          asset: _,
          ..._,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { line: _, description: _, asset: _, ..._ } = _,
    _ = {
      _: `div`,
      ..._,
      whiteSpace: `pre-line`,
      style: {
        color: _.color ? `#${_.color}` : void 0,
      },
    },
    _ = _.value?.trim() ?? ``;
  switch (((_ ||= `\xA0`), (_ = _(_, _, _)), _.type)) {
    case `html`:
      return (0, _.jsx)(_, {
        ..._,
        children: (0, _.jsx)(`span`, {
          style: {
            display: `contents`,
          },
          dangerouslySetInnerHTML: {
            __html: _,
          },
        }),
      });
    case `bbcode`:
      return (0, _.jsx)(_, {
        ..._,
        children: (0, _.jsx)(_, {
          itemDescription: _,
          line: _,
          bbcode: _,
        }),
      });
    default:
      return (0, _.jsx)(_, {
        ..._,
        children: _,
      });
  }
}
function _(_, _) {
  return _.name_color ? `#${_.name_color}` : _;
}
function _(_, _, _) {
  let _ = typeof _?.amount == `string` ? parseInt(_.amount) : _?.amount,
    _ = _ || _.name;
  return (_ && _ > 1 ? `${_(_)} ` : ``) + _;
}
function _(_) {
  let {
      description: _,
      asset: _,
      nameOverride: _,
      colorOverride: _,
      style: _ = {},
      ..._
    } = _,
    _ = _ || _(_);
  return (0, _.jsx)(_, {
    contrast: `note`,
    ..._,
    style: {
      ...(_ ?? {}),
      color: _,
    },
    children: _(_, _, _),
  });
}
function _(_) {
  let {
      description: _,
      asset: _,
      nameOverride: _,
      colorOverride: _,
      style: _ = {},
      ..._
    } = _,
    _ = _ || _(_);
  return (0, _.jsx)(_, {
    contrast: `note`,
    underline: `hover`,
    ..._,
    style: {
      ...(_ ?? {}),
      color: _,
    },
    children: _(_, _, _),
  });
}
var _ = `DgpqGnHLncQ-`,
  _ = `Xd4rgP1GhRY-`;
function _() {
  return (0, _.jsxs)(_, {
    position: `relative`,
    title: _(`#ItemDescription_ListedItemTooltip`),
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: _(`#ItemDescription_ListedItem`),
      }),
      (0, _.jsx)(_, {
        className: _,
        alt: _(`#ItemDescription_ListedItem`),
        src: `${_.COMMUNITY_CDN_URL}public/images/economy/listed_on_market.png`,
      }),
    ],
  });
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_.country_code),
    _ = !!_.sealed && _.sealed_type == 1;
  if (!_.marketable && _.sealed_type != 1) return null;
  let _ = _.market_hash_name || _.market_name || _.name;
  return _
    ? (0, _.jsx)(_, {
        eWalletCurrency: _,
        appid: _.appid,
        hashName: _,
        bCanInteract: _,
        bItemSealed: _,
        assetid: _?.assetid,
      })
    : null;
}
function _(_) {
  let {
      eWalletCurrency: _,
      appid: _,
      hashName: _,
      bCanInteract: _,
      bItemSealed: _,
      assetid: _,
    } = _,
    { data: _, isLoading: _ } = _(_, _, _);
  return !_ && !_?.lowest_price && !_?.volume && !_
    ? null
    : _
      ? (0, _.jsx)(_, {
          background: `greyneutral-3`,
          padding: `4`,
          gapY: `3`,
          direction: `column`,
          children: (0, _.jsx)(_, {
            color: `dull`,
            href: `${_.COMMUNITY_BASE_URL}market/listings/${_}/${encodeURIComponent(_)}${_ ? `?sellorderassetid=${_}` : ``}`,
            size: `1`,
            children: _(`#SellOnMarket_ViewListing`),
          }),
        })
      : (0, _.jsxs)(_, {
          background: `greyneutral-3`,
          padding: `4`,
          gapY: `3`,
          direction: `column`,
          children: [
            (0, _.jsx)(_, {
              isLoading: _,
              priceOverview: _,
            }),
            _ &&
              (0, _.jsx)(_, {
                size: `1`,
                color: `dull`,
                href: `${_.COMMUNITY_BASE_URL}market/listings/${_}/${encodeURIComponent(_)}`,
                children: _(`#SellOnMarket_View`),
              }),
            _ && !_ && (0, _.jsx)(_, {}),
          ],
        });
}
function _(_) {
  let { isLoading: _, priceOverview: _ } = _;
  return !_ && !_?.lowest_price && !_?.volume
    ? null
    : (0, _.jsxs)(_, {
        paddingStart: `3`,
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            children: _?.lowest_price
              ? _(`#SellOnMarket_LowestPrice`, _.lowest_price)
              : `\xA0`,
          }),
          (0, _.jsx)(_, {
            _: `div`,
            children: _?.volume ? _(`#SellOnMarket_Volume`, _.volume) : `\xA0`,
          }),
        ],
      });
}
function _() {
  let _ = _();
  return !_.logged_in || !_ || _ != _.steamid
    ? null
    : (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          color: `green`,
          onClick: () => window.SellCurrentSelection(),
          size: `1`,
          children: _(`#SellOnMarket_SellThisItem`),
        }),
      });
}
function _(_, _, _) {
  return _(_(_, _, _));
}
function _(_, _, _) {
  return {
    queryKey: [`MarketPriceOverview`, _, _, _],
    queryFn: async () => {
      let _ = new URLSearchParams({
          country: _.country_code,
          currency: _.toString(),
          appid: _.toString(),
          market_hash_name: _,
        }),
        _ = `${_.COMMUNITY_BASE_URL}market/priceoverview/?${_.toString()}`;
      return await (
        await fetch(_, {
          method: `GET`,
        })
      ).json();
    },
  };
}
var _ = `rkvrDdEoIkw-`,
  _ = `_7yYPcnzhMhI-`;
function _() {
  return (0, _.jsxs)(_, {
    position: `relative`,
    title: _(`#ItemDescription_TradeProtectedTooltip`),
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: _(`#ItemDescription_TradeProtected`),
      }),
      (0, _.jsx)(_, {
        className: _,
        alt: _(`#ItemDescription_TradeProtected`),
        src: `${_.COMMUNITY_CDN_URL}public/images/economy/protected_items_badge2.png`,
      }),
    ],
  });
}
var _ = `h1EniFafzA8-`,
  _ = `o3YIdqVW6EM-`,
  _ = `Yo9m7720YUA-`,
  _ = {
    Root: _,
    Container: _,
    Content: _,
    Image: _,
    Separator: _,
    Name: _,
    FraudWarnings: _,
    GameInfo: _,
    GameName: _,
    Descriptions: _,
    Actions: _,
    OwnerDescriptions: _,
    OwnerActions: _,
    MarketActions: _,
    Tags: _,
    AssetProperties: _,
    AssetAccessories: _,
    SellOnMarket: _,
  };
function _(_) {
  let {
    description: _,
    asset: _,
    bInteractable: _ = !0,
    bIncludeMarketInfo: _ = !0,
  } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    asset: _,
    bInteractable: _,
    children: (0, _.jsxs)(_.Container, {
      children: [
        (0, _.jsxs)(_.Content, {
          children: [
            (0, _.jsx)(_.Image, {}),
            (0, _.jsx)(_.Separator, {}),
            (0, _.jsx)(_.Name, {}),
            (0, _.jsx)(_.FraudWarnings, {}),
            (0, _.jsx)(_.GameInfo, {}),
            (0, _.jsx)(_.Descriptions, {}),
            (0, _.jsx)(_.AssetAccessories, {}),
            (0, _.jsx)(_.Actions, {}),
            (0, _.jsx)(_.OwnerDescriptions, {}),
            (0, _.jsx)(_.OwnerActions, {}),
            (0, _.jsx)(_.Tags, {}),
            (0, _.jsx)(_.AssetProperties, {}),
          ],
        }),
        _ && (0, _.jsx)(_.SellOnMarket, {}),
      ],
    }),
  });
}
var _ = Object.assign(_, _);
function _() {
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      description: _(),
      asset: _(),
      contrast: `body`,
      size: `3`,
    }),
  });
}
function _() {
  return (0, _.jsx)(_, {
    description: _(),
    asset: _(),
    type: `owner_descriptions`,
    contrast: `body`,
    size: `3`,
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    direction: `column`,
    border: `2px solid ${_(_(), `#3A3A3A`)}`,
    className: _,
    ..._,
    children: _,
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    direction: `column`,
    padding: `2`,
    gapY: `2`,
    ..._,
    children: _,
  });
}
function _(_) {
  let { bAllowAnimatedIcon: _ = !0 } = _,
    _ = _();
  return (0, _.jsxs)(_, {
    height: `196px`,
    align: `center`,
    justify: `start`,
    position: `relative`,
    children: [
      (0, _.jsx)(`img`, {
        src:
          `${_.COMMUNITY_CDN_URL}economy/image/${_.icon_url_large || _.icon_url}/330x192` +
          (_ ? `?allow_animated=1` : ``),
        alt: _.name,
      }),
      !!_.sealed &&
        _.sealed_type != 1 &&
        (0, _.jsx)(_, {
          position: `absolute`,
          style: {
            left: `0`,
            bottom: `0`,
          },
          children: (0, _.jsx)(_, {}),
        }),
      !!_.sealed &&
        _.sealed_type == 1 &&
        (0, _.jsx)(_, {
          position: `absolute`,
          style: {
            left: `0`,
            bottom: `0`,
          },
          children: (0, _.jsx)(_, {}),
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    color: `dull-10`,
    size: `4`,
    marginY: `2`,
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return (0, _.jsx)(_, {
    size: `7`,
    weight: `heavy`,
    ..._,
    children: (0, _.jsx)(_, {
      description: _,
      asset: _,
    }),
  });
}
function _(_) {
  let _ = _().appid,
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    _ = _ && _.community_icon ? _(_, `community_icon`) : void 0,
    _ = _(_);
  return {
    gameURL: _ ?? (_?.visible && _?.type !== 14 ? _ : void 0),
    iconURL: _,
    strName: _?.name,
  };
}
function _(_) {
  let { gameURL: _, strName: _ } = _(_.hrefGame);
  return _
    ? (0, _.jsx)(_, {
        href: _,
        size: `3`,
        contrast: `description`,
        underline: `hover`,
        children: _,
      })
    : (0, _.jsx)(_, {
        size: `3`,
        contrast: `description`,
        children: _,
      });
}
function _(_) {
  let _ = _(),
    { gameURL: _, strName: _, iconURL: _ } = _(_.hrefGame);
  return (0, _.jsxs)(_, {
    direction: `row`,
    gapX: `2`,
    align: `center`,
    children: [
      (0, _.jsx)(_, {
        href: _,
        children: _
          ? (0, _.jsx)(_, {
              alt: _ ?? ``,
              src: _,
              className: _,
            })
          : (0, _.jsx)(_, {
              className: _,
            }),
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        children: [
          (0, _.jsx)(_, {
            ..._,
          }),
          (0, _.jsx)(_, {
            size: `3`,
            contrast: `description`,
            children: _.type,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { children: _, href: _ } = _;
  return _
    ? (0, _.jsx)(`a`, {
        href: _,
        children: _,
      })
    : _;
}
function _() {
  let { tags: _ } = _();
  return !_ || !_.length
    ? null
    : (0, _.jsxs)(_, {
        size: `3`,
        contrast: `note`,
        children: [
          _(`#ItemDescription_Tags`),
          ` `,
          ` `,
          _.map((_) => _.localized_tag_name).join(`, `),
        ],
      });
}
function _() {
  let { fraudwarnings: _ } = _();
  return !_ || _.length == 0
    ? null
    : (0, _.jsx)(_, {
        borderColor: `dull-6`,
        padding: `2`,
        background: `dull-4`,
        children: _.map((_, _) =>
          (0, _.jsxs)(
            _,
            {
              color: `red-9`,
              _: `div`,
              children: [
                (0, _.jsx)(_, {
                  style: {
                    height: `1.25em`,
                    verticalAlign: `text-bottom`,
                    marginInlineEnd: `4px`,
                  },
                }),
                _,
              ],
            },
            _,
          ),
        ),
      });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.37033 3.07108C6.74074 2.15541 8.35191 1.66666 10.0001 1.66666C11.0944 1.66666 12.1781 1.88221 13.1891 2.301C14.2002 2.71979 15.1188 3.33362 15.8926 4.10744C16.6665 4.88126 17.2803 5.79992 17.6991 6.81097C18.1179 7.82202 18.3334 8.90565 18.3334 10C18.3334 11.6482 17.8447 13.2593 16.929 14.6297C16.0133 16.0002 14.7118 17.0683 13.1891 17.699C11.6664 18.3297 9.99084 18.4948 8.37433 18.1732C6.75782 17.8517 5.27297 17.058 4.10753 15.8926C2.94209 14.7271 2.14842 13.2423 1.82687 11.6258C1.50533 10.0092 1.67036 8.33369 2.30109 6.81097C2.93182 5.28825 3.99992 3.98676 5.37033 3.07108ZM12.2223 5L11.389 10H8.61119L7.77786 5H12.2223ZM11.9445 13.0556C11.9445 14.1294 11.074 15 10.0001 15C8.92619 15 8.05564 14.1294 8.05564 13.0556C8.05564 11.9817 8.92619 11.1111 10.0001 11.1111C11.074 11.1111 11.9445 11.9817 11.9445 13.0556Z`,
    }),
  });
}
function _() {
  let _ = _();
  return !_ || !_.asset_properties || _.asset_properties.length == 0
    ? null
    : (0, _.jsx)(_, {
        direction: `column`,
        children: _.asset_properties.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              appid: _.appid,
              property: _,
              contrast: `note`,
            },
            _,
          ),
        ),
      });
}
function _() {
  let _ = _(),
    _ = _();
  return !_ || !_.asset_accessories || _.asset_accessories.length == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            size: `4`,
            children: _(`#ItemDescription_AccessoriesList_Title`),
          }),
          _.asset_accessories.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                appid: _.appid,
                accessory: _,
              },
              _,
            ),
          ),
        ],
      });
}
var _ = _(_(), 1);
function _(_, _) {
  return _(_(_(_(), _, _.LANGUAGE), _, _));
}
function _(_, _, _) {
  let _ = `${_?.classid}_${_?.instanceid}`;
  return {
    queryKey: [`AssetClassInfo`, _, _],
    queryFn: async () => _.load(_),
    enabled: !!_ && !!_.classid,
  };
}
function _(_, _, _, _ = _.GetAssetClassInfo) {
  return _(`AssetClassInfo_${_}_${_}`, () => _(_, _, _, _));
}
function _(_, _, _, _ = _.GetAssetClassInfo) {
  return new _.default(async (_) => {
    let _ = _.Init(_);
    _.Body().set_language(_),
      _.Body().set_appid(_),
      _.forEach((_) => {
        let [_, _] = _.split(`_`),
          _ = _.Body().add_classes();
        _.set_classid(_), _.set_instanceid(_);
      });
    let _ = await _(_, _);
    if (_.GetEResult() != 1)
      throw `Error loading econ items: ${_.GetErrorMessage()}`;
    return _.Body().toObject().descriptions ?? [];
  });
}
function _(_) {
  let { children: _, ..._ } = _,
    _ = _.useRef(null),
    _ = _.useCallback(() => `${_}px`, []),
    _ = _(
      `wheel`,
      _.useCallback((_) => {
        let _ = _.current;
        if (_ && _.deltaY != 0) {
          let _ = _.scrollTop;
          _.scrollBy({
            top: _.deltaY,
          }),
            _.scrollTop != _ && _.preventDefault();
        }
      }, []),
      {
        passive: !1,
      },
    ),
    [_, _] = _.useState(!1);
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    width: _,
    placement: `right`,
    interactions: {
      hover: (_) => ({
        ..._,
        delay: 250,
      }),
    },
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _.cloneElement(_, {
          ref: _,
        }),
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_, {
          marginX: `2`,
          children: (0, _.jsx)(_, {
            ..._,
            refHover: _,
          }),
        }),
      }),
    ],
  });
}
var _ = 346;
function _(_) {
  let { description: _, asset: _, bHideImage: _ = !1, refHover: _ } = _,
    _,
    _ = _?.appid;
  `identifiers` in _ && ((_ = _.identifiers), (_ = _.appid ?? _));
  let { data: _ } = _(_, _ ? void 0 : _),
    _ = _ ?? _;
  return _
    ? (0, _.jsx)(_.Root, {
        description: _,
        asset: _,
        bInteractable: !1,
        children: (0, _.jsxs)(_.Container, {
          maxHeight: `90vh`,
          overflow: `auto`,
          ref: _,
          children: [
            (0, _.jsxs)(_.Content, {
              children: [
                !_ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_.Image, {}),
                      (0, _.jsx)(_.Separator, {}),
                    ],
                  }),
                (0, _.jsx)(_.Name, {}),
                (0, _.jsx)(_.GameInfo, {}),
                (0, _.jsx)(_.Descriptions, {}),
                (0, _.jsx)(_.AssetAccessories, {}),
                (0, _.jsx)(_.OwnerDescriptions, {}),
                (0, _.jsx)(_.Tags, {}),
                (0, _.jsx)(_.AssetProperties, {}),
              ],
            }),
            (0, _.jsx)(_.SellOnMarket, {}),
          ],
        }),
      })
    : null;
}
function _(_) {
  let _ = _.context.itemDescription;
  if (!_.container_properties?.contained_items) return null;
  let _ = _.appid,
    _ = _.container_properties.contained_items;
  return (0, _.jsx)(`ul`, {
    children: _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          appid: _,
          contained_item: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let _ = _.context.itemDescription,
    _ = parseInt(_.args.index || `-1`),
    _;
  _.container_properties?.contained_items &&
    _ >= 0 &&
    _ < _.container_properties.contained_items.length &&
    (_ = _.container_properties.contained_items[_]);
  let _ = _.appid,
    _ = _.children?.toString(),
    _ = _.context.line.color && `#${_.context.line.color}`,
    { data: _ } = _(_, _);
  return _
    ? _
      ? (0, _.jsx)(
          _,
          {
            appid: _,
            description: _,
            nameOverride: _,
            colorOverride: _,
          },
          _,
        )
      : _
        ? (0, _.jsx)(_, {
            description: {},
            nameOverride: _,
            colorOverride: _,
          })
        : null
    : null;
}
function _(_) {
  let { appid: _, contained_item: _ } = _,
    { data: _ } = _(_, _);
  return _
    ? (0, _.jsx)(`li`, {
        children: (0, _.jsx)(_, {
          appid: _,
          description: _,
        }),
      })
    : null;
}
function _(_) {
  let { appid: _, description: _, nameOverride: _, colorOverride: _ } = _;
  return (0, _.jsx)(_, {
    description: _,
    children:
      _.marketable && _.market_hash_name
        ? (0, _.jsx)(_, {
            description: _,
            href: _.Item(_, _.market_bucket_group_id || _.market_hash_name),
            nameOverride: _,
            colorOverride: _,
          })
        : (0, _.jsx)(_, {
            description: _,
            nameOverride: _,
            colorOverride: _,
          }),
  });
}
function _(_) {
  let _ = parseInt(_.children?.toString() ?? `0`),
    _ = _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
    { data: _, isLoading: _ } = _(_);
  return !_ && _
    ? null
    : (0, _.jsx)(_, {
        href: _(_, _),
        "data-miniprofile": _,
        children: _ ? _.public_data.persona_name : _,
      });
}
function _(_) {
  let { itemDescription: _, line: _, bbcode: _ = `` } = _,
    _ = _.useMemo(() => {
      let _ = (_) => new _();
      return new _(
        {
          ..._,
          ..._,
          ..._,
          url: {
            Constructor: _,
          },
          container_item_list: {
            Constructor: _,
          },
          container_item: {
            Constructor: _,
          },
          persona: {
            Constructor: _,
          },
          date: {
            Constructor: _,
          },
        },
        _,
        _.LANGUAGE,
      );
    }, []),
    _ = _.useMemo(
      () => ({
        itemDescription: _,
        line: _,
      }),
      [_, _],
    );
  return _.useMemo(() => _.ParseBBCode(_, _), [_, _, _]);
}
function _(_) {
  let _ = parseInt(_.children?.toString() ?? `0`);
  return _ ? new Date(_ * 1e3).toLocaleString(_()) : null;
}
function _(_) {
  if (!_) return 0;
  let _ = parseInt(_);
  return isNaN(_) ? 0 : _ - 2e3;
}
function _(_) {
  let { rgCompactBuyOrders: _, rgCompactSellOrders: _, ..._ } = _,
    _ = (_) => {
      if (
        _.length === 0 ||
        (_(
          _.length % 2 == 0,
          `Incomplete order book data, dropping last data point`,
        ),
        _.length === 1)
      )
        return [];
      let _ = [];
      for (let _ = 1; _ < _.length; _ += 2)
        _.push({
          price: _[_ - 1],
          quantity: _[_],
        });
      return _;
    };
  return {
    ..._,
    rgBuyOrders: _(_),
    rgSellOrders: _(_),
  };
}
function _(_) {
  let { enhanced_appearances: _, description: _ } = _;
  return _?.length > 0 ? _[0].url : _(_);
}
function _(_) {
  let { icon_url: _, icon_url_large: _ } = _;
  return _(_ || _);
}
function _(_) {
  return `${_.COMMUNITY_CDN_URL}economy/image/${_}`;
}
function _(_) {
  return _(_, _.COUNTRY);
}
function _(_, _) {
  let _ = _.market_buy_country_restriction;
  return !_ || typeof _ != `string` ? !1 : _.split(`,`).includes(_);
}
function _(_) {
  return _(_, _.COUNTRY);
}
function _(_, _) {
  let _ = _.market_sell_country_restriction;
  return !_ || typeof _ != `string` ? !1 : _.split(`,`).includes(_);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _ };

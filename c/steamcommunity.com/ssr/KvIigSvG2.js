var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      value: _,
      min: _,
      max: _,
      buckets: _ = [],
      children: _,
      focusedBucket: _,
      ..._
    } = _,
    { iFocusedBucket: _, rgBucketPositions: _ } = (0, _.useMemo)(() => {
      let _ = _ ? _.indexOf(_) : -1;
      return {
        iFocusedBucket: _,
        rgBucketPositions: _.map((_) => ({
          bucket: _,
          pctStart: _(_.start ?? _, {
            min: _,
            max: _,
            buckets: _,
            iFocusedBucket: _,
          }),
          pctStop:
            1 -
            _(_.stop ?? _, {
              min: _,
              max: _,
              buckets: _,
              iFocusedBucket: _,
            }),
        })),
      };
    }, [_, _, _, _]);
  return (0, _.jsx)(_, {
    value: {
      min: _,
      max: _,
      buckets: _,
      iFocusedBucket: _,
    },
    children: (0, _.jsxs)(_, {
      paddingY: `2`,
      position: `relative`,
      ..._,
      children: [
        (0, _.jsx)(_, {
          radius: `full`,
          background: `dull-8`,
          height: `8px`,
          position: `relative`,
          overflow: `hidden`,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                bucket: _,
              },
              _,
            ),
          ),
        }),
        _ !== void 0 &&
          (0, _.jsx)(_, {
            value: _,
          }),
        _,
      ],
    }),
  });
}
function _(_) {
  let {
    bucket: { bucket: _, pctStart: _, pctStop: _ },
  } = _;
  return (0, _.jsx)(`div`, {
    style: {
      background: _.color,
      position: `absolute`,
      inset: 0,
      left: `${_ * 100}%`,
      right: `${_ * 100}%`,
      transition: `left 250ms ease-in-out, right 250ms ease-in-out`,
    },
  });
}
function _(_) {
  let { value: _, animate: _, ..._ } = _,
    { min: _, max: _, buckets: _, iFocusedBucket: _ } = _();
  return (0, _.jsx)(`div`, {
    style: {
      position: `absolute`,
      borderRadius: `2px`,
      bottom: -4,
      left: `calc( ${
        _(_, {
          min: _,
          max: _,
          buckets: _,
          iFocusedBucket: _,
        }) * 100
      }% - ${14 / 2}px )`,
      transition: _ ? `left 250ms ease-in-out` : void 0,
    },
    ..._,
    children: (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 14,
      height: `10`,
      viewBox: `0 0 14 10`,
      fill: `none`,
      children: (0, _.jsx)(`path`, {
        _: `M4.15918 8.40918C3.43712 9.19692 2.2289 9.19691 1.50684 8.40918C0.830728 7.67158 0.830851 6.51112 1.50684 5.77344L5.34082 1.59082C6.06289 0.803321 7.27018 0.803214 7.99219 1.59082L11.8262 5.77344C12.502 6.51107 12.5021 7.67162 11.8262 8.40918L11.8174 8.41895C11.1092 9.1717 9.90012 9.20981 9.16602 8.40918L6.66309 5.67871L4.15918 8.40918Z`,
        fill: `#F3F3F3`,
        stroke: `#262B34`,
        strokeWidth: `2`,
      }),
    }),
  });
}
var _ = 0.9;
function _(_, _) {
  let { min: _, max: _, buckets: _, iFocusedBucket: _ } = _,
    _ = (_, _, _) => (_(_, _, _) - _) / (_ - _);
  if (_ === -1) return _(_, _, _);
  let _ = _[_],
    _ = _ >= (_.start ?? _) && _ <= (_.stop ?? _),
    _ = _ === 0 || _ === _.length - 1 ? 1 : 2,
    _ = (1 - _) / _,
    _ = _ === 0 ? 0 : _,
    _ = _ === _.length - 1 ? 0 : _;
  if (!_) {
    let _ = _ < (_.start ?? _),
      _ = _ ? [_, _.start ?? _] : [_.stop ?? _, _],
      _ = _(_, _[0], _[1]);
    return (_ ? 0 : _ + _) + _ * (_ ? _ : _);
  }
  let _ = [_.start ?? _, _.stop ?? _];
  return _ + _(_, _[0], _[1]) * _;
}
var _ = (0, _.createContext)(null);
function _() {
  let _ = (0, _.useContext)(_);
  return _(!!_, `Must be used within a parent BucketContinuous!`), _;
}
var _ = [
  {
    stop: 0.07,
    color: `#4A7D12`,
    tag: `WearCategory0`,
  },
  {
    start: 0.07,
    stop: 0.15,
    color: `#82B461`,
    tag: `WearCategory1`,
  },
  {
    start: 0.15,
    stop: 0.38,
    color: `#DCB259`,
    tag: `WearCategory2`,
  },
  {
    start: 0.38,
    stop: 0.45,
    color: `#BB6454`,
    tag: `WearCategory3`,
  },
  {
    start: 0.45,
    color: `#84453B`,
    tag: `WearCategory4`,
  },
];
function _(_) {
  let { property: _ } = _;
  return (0, _.jsx)(_, {
    buckets: _,
    value: _.float_value,
    min: 0,
    max: 1,
  });
}
var _ = `TfblJ5tKSxE-`,
  _ = `WKTlRhRMaac-`,
  _ = `yLiBlmqdKqY-`,
  _ = `_87DKe4yICYk-`,
  _ = _(_(), 1);
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    rows: `subgrid`,
    gridRow: `span 3`,
    gap: `0`,
    cursor: `pointer`,
    padding: `3`,
    background: `dull-6`,
    radius: `sm`,
    ..._,
    className: (0, _.default)(_, _),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    flexGrow: `1`,
    className: _,
    children: (0, _.jsx)(_, {
      size: `4`,
      weight: `heavy`,
      lineClamp: 2,
      contrast: `title`,
      children: _,
    }),
  });
}
function _(_) {
  let { color: _ = `var(--color-dull-10)` } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      "--item-color": _,
    },
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `3`,
    truncate: !0,
    contrast: `description`,
    children: _.children,
  });
}
function _(_) {
  let { src: _, dim: _, size: _ } = _;
  return (0, _.jsx)(_, {
    minHeight: `160px`,
    width: `100%`,
    justify: `center`,
    align: `center`,
    children: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _ && `fzZbv9LVpWo-`),
      style: {
        "--bg-image": `url(${_})`,
        "--image-size-override": _ ? `${_}px` : void 0,
      },
    }),
  });
}
function _(_) {
  let { labelToken: _, value: _ } = _;
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    children: _.LocalizeReact(
      _,
      (0, _.jsx)(_, {
        children: _,
      }),
    ),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-8`,
    align: `center`,
    justify: `center`,
    padding: `2`,
    radius: `sm`,
    marginTop: `2`,
    children: _.children,
  });
}
function _(_) {
  let { icon: _, name: _ } = _;
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `1`,
    children: [
      (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
        style: {
          width: `18px`,
          height: `18px`,
        },
      }),
      (0, _.jsx)(_, {
        truncate: !0,
        weight: `medium`,
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
  Title: _,
  Subtitle: _,
  PrimaryImage: _,
  Attribute: _,
  Action: _,
  AppInfo: _,
  ItemColor: _,
  Header: _,
  Body: (_) =>
    (0, _.jsx)(_, {
      position: `relative`,
      ..._,
    }),
  Footer: _,
});
function _(_) {
  return (0, _.jsx)(_, {
    direction: `column`,
    justify: `end`,
    ..._,
  });
}
var _ = `tTW8H6l2CzQ-`,
  _ = `NiiZNQWFFJM-`,
  _ = `iKQ8iZU8-LI-`;
function _(_) {
  let { className: _, beforeContent: _, children: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: `pointer`,
    className: (0, _.default)(_, _),
    ..._,
    children: [
      _,
      (0, _.jsx)(_, {
        flexGrow: `1`,
        columns: `max-content 1fr max-content`,
        alignContent: `center`,
        alignItems: `center`,
        gapX: `3`,
        gapY: `0`,
        background: `dull-6`,
        radius: `sm`,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `4`,
    weight: `heavy`,
    lineClamp: 2,
    contrast: `title`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `3`,
    truncate: !0,
    contrast: `description`,
    children: _.children,
  });
}
function _(_) {
  let { src: _, dim: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _ && `LG7ujKf6P-c-`),
    style: {
      "--bg-image": `url(${_})`,
    },
  });
}
function _(_) {
  let { labelToken: _, value: _ } = _;
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    children: _.LocalizeReact(
      _,
      (0, _.jsx)(_, {
        children: _,
      }),
    ),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    color: `dull`,
    children: (0, _.jsx)(_, {
      contrast: `title`,
      children: _.children,
    }),
  });
}
function _(_) {
  let { color: _ = `var(--color-dull-10)` } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      "--item-color": _,
    },
  });
}
var _ = Object.assign(_, {
  Title: _,
  Subtitle: _,
  PrimaryImage: _,
  Attribute: _,
  Action: _,
  AppInfo: _.AppInfo,
  ItemColor: _,
  Body: (_) =>
    (0, _.jsx)(_, {
      direction: `column`,
      gap: `1`,
      flexGrow: `1`,
      minWidth: `0`,
      ..._,
    }),
});
function _(_) {
  let { color: _ = `currentColor`, warningColor: _ = `currentColor`, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: _,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M16.5074 9.71331C16.0849 10.3253 15.8234 11.0515 15.7827 11.8345L15.777 12.0501L15.7827 12.2656C15.8979 14.4811 17.7786 16.243 20.0817 16.243C21.2082 16.2429 22.2328 15.8204 23 15.1304V20H1V5H15.7999L16.5074 9.71331ZM4.78841 17.8571H17.9884L14.2931 13.7012L12.7484 15.4367L9.83724 12.1429L4.78841 17.8571ZM5.21667 7.5C4.68181 7.5 4.16902 7.7071 3.79082 8.07547C3.41262 8.44385 3.2 8.94333 3.2 9.46429C3.2 9.85274 3.31862 10.2322 3.54017 10.5552C3.76174 10.8782 4.07622 11.1306 4.44466 11.2793C4.81307 11.4279 5.21872 11.4666 5.60983 11.3909C6.00103 11.3151 6.36048 11.1278 6.64251 10.8531C6.92455 10.5784 7.11685 10.2283 7.19466 9.84724C7.2724 9.46629 7.23268 9.07118 7.08008 8.71233C6.92743 8.35346 6.66832 8.04715 6.33672 7.83133C6.0051 7.61554 5.61548 7.5 5.21667 7.5Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: _ ?? _,
        _: `M18.6944 8.77897L18 4H22L21.3294 8.77897H18.6944Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: _ ?? _,
        _: `M20.0133 14C20.954 14 21.7166 13.2324 21.7166 12.2855C21.7166 11.3387 20.954 10.5711 20.0133 10.5711C19.0726 10.5711 18.3101 11.3387 18.3101 12.2855C18.3101 13.2324 19.0726 14 20.0133 14Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    warningColor: `yellow`,
    ..._,
  });
}
function _(_) {
  let { color: _ = `currentColor`, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M15.2779 13.3334C16.3874 11.738 16.8596 9.78503 16.6013 7.85895C16.3431 5.93287 15.3732 4.17324 13.8825 2.92647C12.3919 1.6797 10.4885 1.03612 8.5471 1.12243C6.6057 1.20874 4.76694 2.01868 3.39281 3.39281C2.01868 4.76694 1.20874 6.6057 1.12243 8.5471C1.03612 10.4885 1.6797 12.3919 2.92647 13.8825C4.17324 15.3732 5.93287 16.3431 7.85895 16.6013C9.78503 16.8596 11.738 16.3874 13.3334 15.2779L16.8112 18.7612L17.0112 18.5612L18.5779 16.9945L18.7779 16.7945L15.2779 13.3334ZM8.88897 13.889C7.90006 13.889 6.93336 13.5957 6.11112 13.0463C5.28887 12.4969 4.64801 11.716 4.26957 10.8024C3.89113 9.88875 3.79212 8.88342 3.98504 7.91352C4.17797 6.94361 4.65417 6.0527 5.35343 5.35343C6.0527 4.65417 6.94361 4.17797 7.91352 3.98504C8.88342 3.79212 9.88875 3.89113 10.8024 4.26957C11.716 4.64801 12.4969 5.28887 13.0463 6.11112C13.5957 6.93336 13.889 7.90006 13.889 8.88897C13.889 10.2151 13.3622 11.4868 12.4245 12.4245C11.4868 13.3622 10.2151 13.889 8.88897 13.889V13.889Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
  });
}
var _ = (0, _.createContext)({});
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  let { focusedWear: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        focusedWear: _,
      }),
      [_],
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let {
      listing: { asset: _, description: _, enhanced_appearances: _, bMine: _ },
      expectEnhancedAppearance: _,
    } = _,
    _ = _ && _.length > 0,
    _ = _ && !_,
    { market_name: _ = ``, type: _ } = _,
    _ = _(_.listing),
    _ = _?.asset_accessories || [],
    _ = _?.asset_properties || [],
    _ = _?.amount === 0;
  return {
    color: _(_),
    rgAccessories: _,
    rgProperties: _,
    strPrimaryImageURL: _,
    bWarnMissingAppearance: _,
    strType: _,
    strName: _,
    bMine: _,
    bAvailable: !_,
  };
}
function _(_) {
  let { appid: _, properties: _ } = _;
  if ((_(), !_(_))) return null;
  let _ = _.find(({ propertyid: _ }) => _ === 2);
  return _
    ? (0, _.jsx)(_, {
        marginY: `2`,
        children: (0, _.jsx)(_, {
          buckets: _,
          value: _.float_value,
          focusedBucket: void 0,
          min: 0,
          max: 1,
        }),
      })
    : null;
}
function _(_) {
  let {
    accessory: { description: _ },
  } = _;
  if (!_) return null;
  let _ = _(_),
    _ = _.name;
  return (0, _.jsx)(_, {
    toolTipContent: (0, _.jsx)(_, {
      ..._,
    }),
    children: (0, _.jsx)(_, {
      objectFit: `contain`,
      src: _,
      alt: _,
      maxHeight: `40px`,
      maxWidth: `100%`,
    }),
  });
}
function _(_) {
  let {
      mine: _,
      available: _,
      listing: { strSubtotal: _, description: _ },
      children: _,
      ..._
    } = _,
    _ = (0, _.jsx)(_, {
      weight: `medium`,
      size: `3`,
      title: _.Localize(`#Listing_NotAvailable`),
      children: _.Localize(`#Listing_NotAvailable_Short`),
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          contrast: `title`,
          children: _,
        }),
        !_(_) &&
          !_ &&
          (0, _.jsx)(_, {
            color: `green`,
            size: `1`,
            children: _.Localize(`#Button_Buy`),
          }),
      ],
    }),
    _ = (0, _.jsx)(_, {
      color: `accent-9`,
      children: _.Localize(`#Listing_MyListing`),
    });
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsxs)(_, {
        justify: `end`,
        align: `center`,
        gap: `2`,
        ..._,
        children: [!_ && _, _ && _, _ && _],
      }),
      _,
    ],
  });
}
function _(_) {
  let { accessory: _ } = _;
  if (!_.description) return null;
  let _ = _.parent_relationship_properties || [],
    _ = _.standalone_properties || [];
  return (0, _.jsx)(_.Root, {
    description: _.description,
    bInteractable: !1,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `2`,
      children: [
        (0, _.jsx)(_, {
          lineClamp: 3,
          contrast: `note`,
          size: `4`,
          children: _.description.name,
        }),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.description.appid,
              property: _,
            },
            _.propertyid,
          ),
        ),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.description.appid,
              property: _,
            },
            _.propertyid,
          ),
        ),
      ],
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
var _ = Object.assign(_, {
  Root: _,
  Color: _.ItemColor,
  Content: _,
});
function _(_) {
  let {
      listing: { description: _ },
      expectEnhancedAppearance: _,
      ..._
    } = _,
    _ = _(_);
  return (0, _.jsxs)(_.Root, {
    ..._,
    children: [
      (0, _.jsx)(_.Color, {
        color: _,
      }),
      (0, _.jsx)(_.Content, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    gap: `3`,
    align: `center`,
    gridColumn: `2 / -1`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-6`,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let {
      listing: { asset: _ },
      children: _,
    } = _,
    {
      bWarnMissingAppearance: _,
      rgAccessories: _,
      rgProperties: _,
      strPrimaryImageURL: _,
      strType: _,
      strName: _,
      bMine: _,
      bAvailable: _,
    } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_.PrimaryImage, {
        src: _,
        dim: _,
      }),
      (0, _.jsxs)(_.Body, {
        children: [
          (0, _.jsx)(_.Title, {
            children: _,
          }),
          _ &&
            (0, _.jsx)(_.Subtitle, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        mine: _,
        available: _,
        listing: _.listing,
        gap: `3`,
        children: _,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            width: `min(80%, 260px)`,
            children: (0, _.jsx)(_, {
              appid: _.appid,
              properties: _,
            }),
          }),
          _.length > 0 &&
            (0, _.jsx)(_, {
              align: `center`,
              minHeight: `0`,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    accessory: _,
                  },
                  _,
                ),
              ),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.appid,
              property: _,
              size: `2`,
              color: `dull-11`,
              truncate: !0,
            },
            _.propertyid,
          ),
        ),
      }),
    ],
  });
}
var _ = `oEO0SxyReAE-`,
  _ = `geMNq-iFIJQ-`,
  _ = `uH-UDcHgcz8-`;
function _(_) {
  switch (_) {
    case -1:
      return _.Localize(
        `#Economy_Market_Purchase_TradableRestriction_Permanent`,
      );
    case 1:
      return _.Localize(`#Economy_Market_Purchase_TradableRestriction_1Day`);
    case 7:
      return _.Localize(`#Economy_Market_Purchase_TradableRestriction_7Days`);
    default:
      return _.Localize(
        `#Economy_Market_Purchase_TradableRestriction_NDays`,
        _,
      );
  }
}
function _(_) {
  switch (_) {
    case 0:
      return _.Localize(`#Economy_Market_Purchase_MarketableRestriction_None`);
    case 1:
      return _.Localize(`#Economy_Market_Purchase_MarketableRestriction_1Day`);
    case 7:
      return _.Localize(`#Economy_Market_Purchase_MarketableRestriction_7Days`);
    default:
      return _.Localize(
        `#Economy_Market_Purchase_MarketableRestriction_NDays`,
        _,
      );
  }
}
function _(_) {
  let { trade: _, market: _ } = _,
    _ = [];
  return (
    _ !== void 0 && _.push(_(_)),
    _ !== void 0 && _.push(_(_)),
    _.length === 0
      ? null
      : (0, _.jsxs)(_, {
          size: `3`,
          _: `div`,
          contrast: `body`,
          children: [
            _.Localize(`#Economy_Market_Purchase_Restrictions`),
            (0, _.jsx)(`ul`, {
              style: {
                margin: 0,
              },
              children: _.map((_) =>
                (0, _.jsx)(
                  `li`,
                  {
                    children: _,
                  },
                  _,
                ),
              ),
            }),
          ],
        })
  );
}
function _(_) {
  let { market_tradable_restriction: _, market_marketable_restriction: _ } = _;
  return {
    bRestricted: _ !== void 0 || _ !== void 0,
    trade: _,
    market: _,
  };
}
function _(_) {
  let { onClose: _, listing: _ } = _,
    _ = _(),
    _ = !!_.data;
  return (0, _.jsxs)(_, {
    onClose: _,
    children: [
      (0, _.jsx)(_.Heading, {
        children: _.Localize(`#PurchaseDialog_Header`),
      }),
      !_ && (0, _.jsx)(_.Loading, {}),
      _ &&
        (0, _.jsx)(_, {
          serverInfo: _.data,
          listing: _,
        }),
    ],
  });
}
function _(_) {
  let { serverInfo: _, listing: _ } = _,
    [_, _] = (0, _.useState)({});
  (0, _.useEffect)(() => {
    let {
      billing_address: {
        firstname: _,
        lastname: _,
        address1: _,
        address2: _,
        city: _,
        state: _,
        postcode: _,
      } = {},
    } = _;
    _({
      address: _,
      addressTwo: _,
      firstName: _,
      lastName: _,
      city: _,
      state: _,
      postalCode: _,
      bSaveAddress: !0,
    });
  }, [_]);
  let _ = _.wallet_info
      ? _(parseInt(_.wallet_info.wallet_balance), _.wallet_info.wallet_currency)
      : ``,
    _ = _(_, _.tax_rate),
    { mutation: _, confirmation: _ } = _(_.listingid, _, _, _),
    _ = _.isIdle || (_.isError && _.error.bFatal === !1),
    _ = _.require_billing_info && _,
    { bRestricted: _, ..._ } = _(_.description),
    _;
  return (
    _.asset?.amount === 0
      ? (_ = {
          bFatal: !0,
          message: _.Localize(`#Listing_NotAvailable_Long`),
        })
      : _.error?.bFatal === !0 && (_ = _.error),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          listing: _,
        }),
        !_ &&
          (0, _.jsx)(_, {
            listing: _,
            serverInfo: _,
            pricing: _,
          }),
        !_ &&
          _ &&
          (0, _.jsx)(_, {
            alignSelf: `end`,
            paddingX: `2`,
            children: (0, _.jsx)(_, {
              ..._,
            }),
          }),
        _ &&
          (0, _.jsx)(_.FatalError, {
            children:
              _.message || _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
          }),
        !_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              _.isSuccess && !_ && (0, _.jsx)(_, {}),
              _ &&
                (0, _.jsx)(_.ConfirmationPoller, {
                  confirmation: _,
                  onRetry: _.mutate,
                  serverInfo: _,
                }),
              _ &&
                (0, _.jsx)(_.BillingInfoSection, {
                  state: _,
                  onChange: _,
                  accountName: _.account_name,
                  walletBalance: _,
                  billingCountry: _.localized_country,
                  billingStates: _.billing_states,
                  hasFunds: _(_.wallet_info, _.unTotal),
                }),
              !_.isSuccess &&
                !_ &&
                (0, _.jsx)(_, {
                  hideSSA: !_,
                  serverInfo: _,
                  listing: _,
                  pricing: _,
                  onPurchase: _.mutate,
                  disabled: !_,
                }),
              _.error?.bFatal === !1 &&
                (0, _.jsx)(_.NonFatalError, {
                  children:
                    _.error.message ||
                    _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
                }),
            ],
          }),
      ],
    })
  );
}
function _(_) {
  let _ = new URLSearchParams(location.search);
  _.delete(`detail`), _.delete(`buy`);
  let _ = `?${_.toString()}`;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {
        background: `dull-5`,
        padding: `5`,
        children: (0, _.jsx)(_, {
          align: `center`,
          size: `4`,
          _: `div`,
          contrast: `title`,
          children: _.Localize(`#PurchaseDialog_Purchase_Successful`),
        }),
      }),
      (0, _.jsxs)(_, {
        marginTop: `2`,
        justify: `end`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            color: `dull`,
            href: _,
            children: _.Localize(`#PurchaseDialog_Close`),
          }),
          (0, _.jsx)(_, {
            color: `dull`,
            href: `${_.COMMUNITY_BASE_URL}my/inventory`,
            children: _.Localize(`#PurchaseDialog_ViewInventory`),
          }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  let [_, _] = (0, _.useState)(null);
  return {
    mutation: _({
      mutationFn: async () => {
        if (_.require_billing_info) {
          let _ = _(_, _);
          if (_)
            throw {
              bFatal: !1,
              message: _,
            };
        }
        let _ = {
            sessionid: _(),
            currency: _.wallet_info ? _.wallet_info.wallet_currency : `0`,
            subtotal: _.unSubtotal,
            fee: _.unFeeAmount,
            total: _.unTotal,
            tradefee_tax: _.unTaxAmount,
            quantity: 1,
            first_name: _.firstName ?? ``,
            last_name: _.lastName ?? ``,
            billing_address: _.address ?? ``,
            billing_address_two: _.addressTwo ?? ``,
            billing_country: _.country_code ?? ``,
            billing_city: _.city ?? ``,
            billing_state: _.state ?? ``,
            billing_postal_code: _.postalCode ?? ``,
            confirmation: _ ? _._ : `0`,
            save_my_address: _.bSaveAddress ? `1` : `0`,
          },
          _ = new FormData();
        for (let [_, _] of Object.entries(_))
          _.set(_, typeof _ == `string` ? _ : _.toString());
        let _ = await fetch(`/market/buylisting/${_}`, {
          method: `POST`,
          credentials: `include`,
          body: _,
        });
        try {
          let _ = await _.json();
          if (_._) return _ && _(null), _;
          if (_?.need_confirmation)
            _({
              _: _.confirmation.confirmation_id,
              cAttempts: _ ? _.cAttempts + 1 : 0,
            });
          else if (_)
            throw (
              (_(null),
              {
                bFatal: !0,
                message: _.Localize(`#PurchaseDialog_Error_NoConfirmation`),
              })
            );
          else
            throw _?.message
              ? {
                  bFatal: !0,
                  message: _.message,
                }
              : {
                  bFatal: !0,
                  message: _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
                };
          return _;
        } catch (_) {
          throw _?.bFatal
            ? _
            : {
                bFatal: !0,
                message: _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
              };
        }
      },
    }),
    confirmation: _,
  };
}
function _(_) {
  let { listing: _ } = _,
    _ = _(_),
    _ = (_.asset?.amount || 0) > 0,
    _ = _() === `initial` ? `3` : `4`;
  return (0, _.jsxs)(_, {
    gridColumn: `span 2`,
    background: `dull-5`,
    padding: `2`,
    align: `center`,
    gap: `2`,
    style: {
      justifySelf: `stretch`,
    },
    children: [
      (0, _.jsx)(_, {
        background: `dull-6`,
        padding: {
          initial: `1`,
          _: `2`,
        },
        children: (0, _.jsx)(_, {
          width: {
            initial: `48px`,
            _: `64px`,
          },
          height: {
            initial: `48px`,
            _: `64px`,
          },
          objectFit: `contain`,
          src: _,
          alt: ``,
        }),
      }),
      (0, _.jsx)(_, {
        flexGrow: `1`,
        minWidth: `0`,
        children: (0, _.jsx)(_, {
          contrast: `title`,
          size: _,
          lineClamp: 3,
          children: _.description.market_name,
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          size: _,
          align: `end`,
          contrast: `subtitle`,
          marginRight: `2`,
          children: _.strSubtotal,
        }),
    ],
  });
}
function _(_) {
  let {
      listing: _,
      serverInfo: _,
      pricing: {
        strSubtotal: _,
        strPublisherFee: _,
        strSteamFee: _,
        strTotal: _,
        strTaxAmount: _,
      },
    } = _,
    { data: _ } = _({
      appid: _.description.appid,
    }),
    _ = _?.name,
    _ = (_.publisherFeePct * 100).toFixed(1),
    _ = (
      (_.wallet_info ? parseFloat(_.wallet_info.wallet_fee_percent) : 0.05) *
      100
    ).toFixed(1);
  return (0, _.jsxs)(_, {
    columns: `2fr 1fr`,
    gap: `2`,
    margin: `4`,
    justifyContent: `end`,
    justifyItems: `end`,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_Subtotal_Label`),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_PublisherFee_Label_Generic`, _),
        }),
      _ &&
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_PublisherFee_Label`, _, _),
        }),
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_SteamFee_Label`, _),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(
                `#PurchaseDialog_LocalTax_Label`,
                _.billing_address?.state ?? ``,
              ),
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
          ],
        }),
      (0, _.jsx)(_, {
        gridColumn: `span 2`,
        width: `100%`,
        children: (0, _.jsx)(_, {
          size: `4`,
          color: `dull-8`,
        }),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_Total_Label`),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `2`,
    align: `end`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `2`,
    contrast: `title`,
    children: _.children,
  });
}
function _(_, _) {
  if (_.unFeePerUnit) {
    let _ = _.unPricePerUnit,
      _ = _.unFeePerUnit,
      _ = 0;
    _ > 2 &&
      _?.tradefee_addtax &&
      _?.tradefee_taxrate > 0 &&
      (_ = Math.floor((_ * _.tradefee_taxrate) / 100 + 0.5));
    let _ = _ + _ + _,
      _ = _.unPublisherFeePerUnit,
      _ = _.unSteamFeePerUnit;
    return {
      unSubtotal: _,
      unFeeAmount: _,
      unTaxAmount: _,
      unTotal: _,
      strSubtotal: _(_, _.eCurrency),
      strPublisherFee: _ ? _(_, _.eCurrency) : void 0,
      strSteamFee: _ ? _(_, _.eCurrency) : void 0,
      strTaxAmount: _ ? _(_, _.eCurrency) : void 0,
      strTotal: _(_, _.eCurrency),
    };
  }
  let _ = _(_.unPricePerUnit, _.eCurrency);
  return {
    strSubtotal: _,
    strTotal: _,
    unTotal: _.unPricePerUnit,
    unSubtotal: _.unPricePerUnit,
    unFeeAmount: 0,
    unTaxAmount: 0,
  };
}
function _(_) {
  let {
      onPurchase: _,
      listing: _,
      disabled: _,
      hideSSA: _,
      serverInfo: {
        wallet_info: _,
        ssa: { last_update: _, eu_ssa: _ },
      },
      pricing: { unTotal: _ },
    } = _,
    _ = _(_, _),
    _ = ``;
  if (!_) {
    let _ = new URL(location.href);
    _.searchParams.set(`detail`, _.listingid), _.searchParams.set(`buy`, `1`);
    let _ = _.toString();
    _ = `${_.STORE_BASE_URL}steamaccount/addfunds?marketlisting=${_.listingid}&returnurl=${encodeURIComponent(_)}`;
  }
  let _ = () => {
      _ && _();
    },
    [_, _] = (0, _.useState)(!1),
    _ = {
      variant: `vibrant`,
      color: `green`,
      width: {
        initial: `100%`,
        _: void 0,
      },
    };
  return (0, _.jsxs)(_, {
    columns: {
      initial: `1fr`,
      _: `1fr max-content`,
    },
    gap: {
      initial: `2`,
      _: void 0,
    },
    alignContent: `end`,
    justifyContent: `end`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          _ &&
            !_ &&
            (0, _.jsx)(_.SSAAgreement, {
              lastUpdate: _,
              agreed: _,
              onAgreeChange: _,
            }),
          _ && !_ && _ && (0, _.jsx)(_.EUSSAAgreement, {}),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          type: `submit`,
          ..._,
          disabled: !_ || _,
          onClick: _,
          children: _.Localize(`#PurchaseDialog_Action_Purchase`),
        }),
      !_ &&
        (0, _.jsx)(_, {
          ..._,
          href: _,
          disabled: _,
          children: _.Localize(`#PurchaseDialog_Action_AddFunds`),
        }),
    ],
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    justify: `center`,
    align: `center`,
    radius: `sm`,
    background: `yellow-6`,
    border: `2px solid var(--color-yellow-8)`,
    padding: `3`,
    ..._,
    children: (0, _.jsx)(_, {
      size: `4`,
      align: `center`,
      contrast: `title`,
      children: _.children,
    }),
  });
}
var _ = `Exterior`,
  _ = `WearCategoryNA`,
  _ = `Quality`,
  _ = [`normal`, `strange`, `tournament`],
  _ = [
    `WearCategory0`,
    `WearCategory1`,
    `WearCategory2`,
    `WearCategory3`,
    `WearCategory4`,
  ],
  _ = _.reduce(
    (_, _, _) => ({
      ..._,
      [_]: _,
    }),
    {},
  ),
  _ = _.reduce(
    (_, _, _) => ({
      ..._,
      [_]: _,
    }),
    {},
  );
function _(_) {
  return _ ? _(_) : !1;
}
function _(_) {
  return _(_.appid)
    ? !_.commodity && !!(_.tags || []).find((_) => _.category === _)
    : !1;
}
function _(_) {
  let _ = {};
  for (let _ of _) {
    let _ = {
      bucket: _,
      rgTypes: [],
      wear: null,
    };
    for (let [_, _] of _.filters || [])
      _ === _ ? _.rgTypes.push(_) : _ === _ && (_.wear = _);
    _.wear ||= _;
    for (let _ of _.rgTypes) _[_] || (_[_] = {}), (_[_][_.wear] = _);
  }
  return _;
}
function _(_) {
  if (!_.length) return null;
  let _ = _[0];
  for (let _ = 1; _ < _.length; _++) _(_, _[_]) > 0 && (_ = _[_]);
  return _;
}
function _(_, _) {
  if (!_.filters && !_.filters) return 0;
  if (_.filters && !_.filters) return -1;
  if (_.filters && !_.filters) return 1;
  let _ = (_) => {
      let _ = _.find(([_]) => _ === _),
        _ = _.find(([_]) => _ === _);
      return {
        wear: _ ? _[1] : ``,
        type: _ ? _[1] : ``,
      };
    },
    _ = _(_.filters),
    _ = _(_.filters),
    _ = (_[_.type] ?? 1 / 0) - (_[_.type] ?? 1 / 0);
  return _ === 0 ? (_[_.wear] ?? 1 / 0) - (_[_.wear] ?? 1 / 0) : _;
}
var _ = {
  WearCategory0: `#4A7D12`,
  WearCategory1: `#82B461`,
  WearCategory2: `#DCB259`,
  WearCategory3: `#BB6454`,
  WearCategory4: `#84453B`,
  WearCategoryNA: `#999999`,
};
function _(_, _) {
  let _ = _(_);
  return (0, _.useMemo)(() => {
    if (!_.data) return null;
    let _ = _(_),
      _ = _.data[_],
      _ = _.data[_];
    if (
      (_(!!_ && !!_, `Could not find expected CS facets`), !_?.tags || !_?.tags)
    )
      return null;
    let _ = (_, _) => {
        let _ = _[_] && _[_][_];
        if (!_) return;
        let _ = ``;
        return (
          _?.tags && _.tags[_] && (_ = _.tags[_].localized_name),
          {
            _: _.bucket_id,
            price: _.strPrice,
            label: _,
          }
        );
      },
      _ =
        Object.values(_)
          .map((_) => Object.keys(_))
          .flat()
          ._(0) == _,
      _ = [];
    for (let _ of Object.keys(_.tags))
      if ((_ == _) == _) {
        let _ = _.tags[_];
        _.push({
          category: _.name,
          tag: _,
          label: _.localized_name,
          color: _[_],
          normal: _(`normal`, _),
          strange: _(`strange`, _),
          tournament: _(`tournament`, _),
        });
      }
    let _ = new Intl.Collator(_(), {
      numeric: !0,
    });
    return (
      _.sort((_, _) => _.compare(_.tag, _.tag)),
      {
        rgWears: _,
        qualityFacet: _,
        bHasStatTrak: _.strange && Object.keys(_.strange).length > 0,
        bHasSouvenir: _.tournament && Object.keys(_.tournament).length > 0,
      }
    );
  }, [_, _.data, _]);
}
function _(_) {
  let _ = `normal`;
  return (
    _ &&
      _.facets[_] &&
      (_.facets[_].strange
        ? (_ = `strange`)
        : _.facets[_].tournament && (_ = `tournament`)),
    _
  );
}
function _(_) {
  if (!_ || !_.tags || !_(_.appid)) return;
  let _ = _.tags,
    _ = _.filter((_) => _.category == `Weapon`)[0];
  if (_) return _.internal_name;
  let _ = _.filter((_) => _.category == `Type`)[0];
  if (!_) return;
  let _ = _.internal_name;
  if (
    _ &&
    [`Type_CustomPlayer`, `Type_Hands`, `CSGO_Tool_Keychain`].includes(_)
  )
    return _;
}
var _ = `_5BwV17tvKAA-`,
  _ = `LE6ZFnA3GPw-`,
  _ = `EDq8Ycw7ToQ-`,
  _ = `vI-sfB4wzkY-`,
  _ = `nDMeUA3eOxM-`,
  _ = `iOVGkc-E3Mo-`,
  _ = `mADYkJ1-HeA-`,
  _ = `hZ2S-3o4LUA-`,
  _ = `_7vTFwxsCbg4-`,
  _ = `XbJYc38KiPI-`,
  _ = `Bu50n9Bb1u4-`,
  _ = `DgkXzYAdZ8I-`,
  _ = `StMclF6ZTPs-`,
  _ = `qAprmeZ3Xvg-`;
function _(_) {
  let { index: _, listings: _, onIndexChange: _, onClose: _, ..._ } = _,
    [_, _] = (0, _.useState)(!0),
    [_, _] = (0, _.useState)(0);
  _(`ArrowLeft`, () => _(!1), !0, !0),
    _(`Left`, () => _(!1), !0, !0),
    _(`ArrowRight`, () => _(!0), !0, !0),
    _(`Right`, () => _(!0), !0, !0),
    _(`Escape`, () => _(), !0, !0),
    _(`Esc`, () => _(), !0, !0);
  let _ = (0, _.useCallback)(
      (_) => {
        _(_), _(_ > _);
      },
      [_, _],
    ),
    _ = (_) => {
      let _ = _(_ + (_ ? 1 : -1), 0, _.length - 1);
      _ != _ && _(_);
    };
  (0, _.useEffect)(() => {
    _.length != _ && _(_.length);
  }, [_, _, _]);
  let {
      refContainer: _,
      bIsDragging: _,
      nDragOffset: _,
      nDragSelectedOffsetIndex: _,
      handleTouchStart: _,
      handleTouchMove: _,
      handleTouchEnd: _,
    } = _(_, _, _.length),
    _ = (_) => {
      _.target == _.currentTarget && (_?.(), _.stopPropagation());
    },
    _ = (_) => _(_ + _, _) && (_(_, -1, 1) || _);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      onClick: _,
      children: (0, _.jsx)(`div`, {
        ref: _,
        className: _,
        onTouchStart: _,
        onTouchMove: _,
        onTouchEnd: _,
        children: [-2, -1, 0, 1, 2].map((_) =>
          (0, _.jsx)(
            `div`,
            {
              className: (0, _.default)({
                [_]: !0,
                [_]: _,
                [_]: _(_),
                [_]: _ == -2,
                [_]: _ == -1,
                [_]: _ == 0,
                [_]: _ == 0 && !_,
                [_]: _ == 0 && _,
                [_]: _ == 1,
                [_]: _ == 2,
                [_]: _ + _ == 0,
              }),
              style: {
                "--dragOffsetX": `${_}px`,
              },
              children:
                _(_) &&
                (0, _.jsx)(_, {
                  index: _ + _,
                  selectedIndex: _,
                  listing: _[_ + _],
                  fnAdvance: _,
                  onClose: _,
                  ..._,
                }),
            },
            _ + _,
          ),
        ),
      }),
    }),
  });
}
function _(_, _, _) {
  let _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = (0, _.useRef)({
      _: 0,
      _: 0,
    });
  return {
    refContainer: _,
    bIsDragging: _,
    nDragOffset: _,
    nDragSelectedOffsetIndex: _,
    handleTouchStart: (_) => {
      _(!0),
        (_.current = {
          _: _.touches[0].clientX,
          _: _.touches[0].clientY,
        }),
        _(0),
        _(0);
    },
    handleTouchMove: (_) => {
      if (!_) return;
      let _ = _.touches[0].clientX - _.current._,
        _ = _.touches[0].clientY - _.current._;
      Math.abs(_) > Math.abs(_) && (_(_), _(_ > 50 ? 1 : _ < -50 ? -1 : 0));
    },
    handleTouchEnd: () => {
      _ &&
        (_(!1),
        _ > 50 ? _(Math.max(_ - 1, 0)) : _ < -50 && _(Math.min(_ + 1, _ - 1)),
        _(0),
        _(0));
    },
  };
}
function _(_) {
  let { index: _, selectedIndex: _, fnAdvance: _, ..._ } = _,
    _ = () => {
      _ != _ && _(_ > _);
    },
    _ = _ === _;
  return (0, _.jsx)(`div`, {
    onClick: _ ? void 0 : _,
    children: (0, _.jsx)(`div`, {
      inert: !_,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_, _, _, _) {
  _.useEffect(() => {
    let _ = (_) => {
      _.key === _ &&
        !_.defaultPrevented &&
        (_.preventDefault(), _.stopPropagation(), _(_));
    };
    return (
      document.addEventListener(`keydown`, _),
      () => document.removeEventListener(`keydown`, _)
    );
  }, [_, _, _, _]);
}
function _() {
  return _({
    mutationFn: async (_) =>
      _(
        `/market/actions`,
        `DeleteEnhancedAppearance`,
        _.appid,
        _.listingid,
        _.full_delete,
      ),
    onSuccess: (_, _) => {
      let _ = _.full_delete ? `deletion` : `regeneration`;
      _ == 1
        ? (alert(`Enhanced appearance ${_} succeeded. Page will refresh.`),
          location.reload())
        : alert(`Enhanced appearance ${_} failed with eresult ${_}.`);
    },
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    elevation: `3`,
    background: `dull-4`,
    height: `min( 95vh, 720px )`,
    width: `min( 95vw, 1200px )`,
    justify: `center`,
    align: `center`,
    children: (0, _.jsx)(_, {
      size: `5`,
    }),
  });
}
function _(_) {
  let [_, _] = _(),
    [_, _] = (0, _.useState)(-1),
    _ = _(),
    _ = !_().bEligible,
    _ = _() === `initial`,
    {
      onClose: _,
      listing: _,
      expectEnhancedAppearance: _,
      pinnedImageIndex: _,
      onPinnedImageIndexChange: _,
      activeBucketDescription: _,
    } = _;
  if (!_) return (0, _.jsx)(_, {});
  let { description: _, asset: _, listingid: _, enhanced_appearances: _ } = _,
    { asset_properties: _ = [], appid: _ } = _ || {},
    { bRestricted: _, ..._ } = _(_),
    _ = _(_),
    _ = _ || _,
    _ = [],
    _ = _.length > 0,
    _ = _(_ || _);
  return (
    _
      ? _.push(
          ..._.map(({ url: _ }, _) => ({
            strForegroundURL: _,
            strBackgroundURL:
              _ !== void 0 && _ !== void 0 && _ !== void 0 && _(_, _)
                ? _(_, _, _)
                : void 0,
          })),
        )
      : _.push({
          strForegroundURL: _(_),
        }),
    (0, _.jsx)(_.Root, {
      description: _,
      listingID: _,
      asset: _,
      children: (0, _.jsxs)(_, {
        RenderErrorComponent: () =>
          (0, _.jsx)(_, {
            onClose: _,
          }),
        children: [
          (0, _.jsxs)(_, {
            direction: _ ? `column` : `row`,
            elevation: `3`,
            background: `dull-6`,
            height: `min( 95vh, 684px )`,
            width: `min( 80vw, 1600px )`,
            position: `relative`,
            overflow: _ ? `auto` : void 0,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(
                    `p1A9ehO7yF0-`,
                    _ && `FJrCyKcaO4E-`,
                  ),
                  onClick: _,
                  children: (0, _.jsx)(_, {}),
                }),
              (0, _.jsx)(_, {
                images: _,
                expectEnhancedAppearance: _,
                enhancedAppearance: _,
                onImageSelected: _,
                pinnedImageIndex: _,
                onPinnedImageIndexChange: _,
              }),
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: _ ? `2` : `3`,
                flexGrow: `1`,
                padding: _ ? `4` : `5`,
                overflow: _ ? void 0 : `auto`,
                children: [
                  (0, _.jsx)(_.Name, {
                    size: {
                      initial: `4`,
                      _: `5`,
                      _: `7`,
                    },
                  }),
                  _ ? (0, _.jsx)(_.GameName, {}) : (0, _.jsx)(_.GameInfo, {}),
                  (0, _.jsx)(_, {
                    appid: _,
                    properties: _,
                  }),
                  !1,
                  (0, _.jsx)(_, {
                    size: `4`,
                    color: `dull-7`,
                  }),
                  (0, _.jsxs)(_, {
                    justify: `between`,
                    align: `center`,
                    wrap: `wrap`,
                    children: [
                      (0, _.jsx)(_.MarketActions, {}),
                      (0, _.jsx)(_, {
                        align: `center`,
                        gap: `2`,
                        children: (0, _.jsx)(_, {
                          disabled: _,
                          listing: _,
                          onBuy: () => _(!0),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    size: `4`,
                    color: `dull-7`,
                  }),
                  (0, _.jsx)(_.AssetAccessories, {}),
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      ..._,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      children: _.Localize(`#Item_CountryBuyRestricted`),
                    }),
                  (0, _.jsx)(_, {
                    size: `4`,
                    color: `dull-7`,
                  }),
                  (0, _.jsx)(_.Descriptions, {}),
                  (0, _.jsx)(_.Tags, {}),
                  _ &&
                    (0, _.jsx)(_, {
                      appid: _,
                      listingid: _,
                      expectEnhancedAppearance: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  listing: _,
                  onClose: () => _(!1),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            images: _,
            activeIndex: _,
            onIndexChange: _,
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let {
      images: _,
      enhancedAppearance: _,
      expectEnhancedAppearance: _,
      onImageSelected: _,
      pinnedImageIndex: _,
      onPinnedImageIndexChange: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? _,
    _ = _ < _.length ? _ : _.length - 1;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    flexGrow: `1`,
    flexBasis: {
      initial: void 0,
      _: `60%`,
    },
    flexShrink: `0`,
    background: `dull-3`,
    align: `center`,
    justify: `center`,
    children: [
      _.length > 0 &&
        (0, _.jsx)(_, {
          justify: `center`,
          align: `center`,
          flexGrow: `1`,
          position: `relative`,
          className: `Ek8-hvrl2D0-`,
          children: (0, _.jsx)(_, {
            src: _[_],
            index: _,
            onClick: () => _(_),
            children: (0, _.jsx)(_, {
              className: `RlFS0YD8Kcs-`,
              children: (0, _.jsx)(_, {}),
            }),
          }),
        }),
      _.length > 1 &&
        (0, _.jsx)(_, {
          justifyContent: `center`,
          alignItems: `center`,
          minHeight: `0`,
          autoColumns: `1fr`,
          autoFlow: `column`,
          paddingX: `3`,
          paddingBottom: `3`,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                outline: _ === _ ? `accent-7` : void 0,
                overflow: `hidden`,
                width: `100%`,
                height: {
                  initial: `48px`,
                  _: `120px`,
                },
                maxWidth: `200px`,
                paddingX: `1`,
                cursor: `pointer`,
                onClick: () => _(_),
                onMouseEnter: () => _(_),
                onMouseLeave: () => _(null),
                className: `r-vQtK7KwSo-`,
                children: (0, _.jsx)(_, {
                  src: _,
                  index: _,
                }),
              },
              _,
            ),
          ),
        }),
      !_ &&
        _ &&
        (0, _.jsxs)(_, {
          align: `center`,
          gap: `3`,
          paddingY: `3`,
          paddingX: {
            initial: `3`,
            _: `5`,
          },
          margin: {
            initial: `3`,
            _: `5`,
          },
          radius: `lg`,
          background: `dull-2`,
          children: [
            (0, _.jsx)(_, {
              size: {
                initial: `2`,
                _: `4`,
              },
              align: `center`,
              weight: `medium`,
              contrast: `description`,
              children: _.Localize(`#Listing_EnhancedAppearance_Missing`),
            }),
            (0, _.jsx)(_, {
              width: `32px`,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { appid: _, listingid: _, expectEnhancedAppearance: _ } = _,
    _ = _();
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        accentColor: `valveonly`,
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              color: `accent-10`,
              children: `Valve only enhanced image options:`,
            }),
            (0, _.jsxs)(_, {
              gap: `2`,
              children: [
                (0, _.jsx)(
                  _,
                  {
                    onClick: () => {
                      _.mutate({
                        appid: _,
                        listingid: _,
                        full_delete: !1,
                      });
                    },
                    children: `Regenerate`,
                  },
                  `regenerate`,
                ),
                (0, _.jsx)(
                  _,
                  {
                    onClick: () => {
                      _.mutate({
                        appid: _,
                        listingid: _,
                        full_delete: !0,
                      });
                    },
                    children: `Delete`,
                  },
                  `delete`,
                ),
              ],
            }),
          ],
        }),
      });
}
function _(_) {
  let { appid: _, properties: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        direction: `column`,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _,
              property: _,
              contrast: `title`,
              size: `3`,
              weight: `regular`,
            },
            _.propertyid,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, properties: _ } = _;
  if (!_(_)) return null;
  let _ = _.find(({ propertyid: _ }) => _ === 2);
  return _
    ? (0, _.jsx)(_, {
        property: _,
      })
    : null;
}
function _(_) {
  let {
    onBuy: _,
    listing: { asset: _, strSubtotal: _, bMine: _ },
    disabled: _,
  } = _;
  if (_?.amount === 0)
    return (0, _.jsx)(_, {
      weight: `medium`,
      size: `3`,
      title: _.Localize(`#Listing_NotAvailable`),
      children: _.Localize(`#Listing_NotAvailable_Short`),
    });
  let _ = (0, _.jsx)(_, {
    size: `3`,
    contrast: `title`,
    children: _,
  });
  if (!_.logged_in) {
    let _ = new URL(location.href);
    return (
      _.searchParams.set(`buy`, `1`),
      (0, _.jsxs)(_.Fragment, {
        children: [
          _,
          (0, _.jsx)(_, {
            disabled: _,
            color: `green`,
            href: `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`,
            children: _.Localize(`#Button_Buy`),
          }),
        ],
      })
    );
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      !_ &&
        (0, _.jsx)(_, {
          color: `green`,
          disabled: _,
          onClick: _,
          children: _.Localize(`#Button_Buy`),
        }),
      _ &&
        (0, _.jsx)(_, {
          color: `accent-9`,
          children: _.Localize(`#Listing_MyListing`),
        }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(0);
  return `listing` in _
    ? (0, _.jsx)(_, {
        ..._,
        pinnedImageIndex: _,
        onPinnedImageIndexChange: _,
      })
    : (0, _.jsx)(_, {
        ..._,
        pinnedImageIndex: _,
        onPinnedImageIndexChange: _,
      });
}
function _(_) {
  let {
      query: _,
      pageIndex: _,
      itemIndex: _,
      onIndexChange: _,
      onClose: _,
      ..._
    } = _,
    _ = (0, _.useMemo)(
      () => (_.data ? _.data.pages.flatMap((_) => (_ ? _.listings : [])) : []),
      [_.data],
    ),
    _ = (0, _.useMemo)(() => {
      if (!_.data) return 0;
      let _ = 0;
      for (let _ = 0; _ < _; _++) _ += _.data.pages[_]?.listings.length ?? 0;
      return (_ += _), _;
    }, [_.data, _, _]),
    { data: _, fetchNextPage: _, isFetchingNextPage: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(_, {
      listings: _,
      index: _,
      onIndexChange: (0, _.useCallback)(
        (_) => {
          if (_)
            for (let _ = 0; _ < _.pages.length; _++) {
              let _ = _.pages[_];
              if (_)
                if (_ < _.listings.length) {
                  if (
                    (_({
                      pageIndex: _,
                      itemIndex: _,
                    }),
                    _ === _.pages.length - 1)
                  ) {
                    let _ = Math.min(_.listings.length, 3);
                    _.more && !_ && _.listings.length - _ - 1 < _ && _();
                  }
                  return;
                } else _ -= _.listings.length;
            }
        },
        [_, _, _, _],
      ),
      onClose: _,
      ..._,
    }),
  });
}
function _(_) {
  let { onClose: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { onClose: _, children: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    onClose: _,
    ..._,
    children: (0, _.jsx)(_, {
      RenderErrorComponent: () =>
        (0, _.jsx)(_, {
          onClose: _,
        }),
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    align: `center`,
    justify: `center`,
    padding: `5`,
    radius: `sm`,
    background: `dull-6`,
    minWidth: `30ch`,
    children: [
      (0, _.jsx)(_, {
        contrast: `title`,
        size: `4`,
        children: _.Localize(`#Listing_SomethingWentWrong`),
      }),
      _.onClose &&
        (0, _.jsx)(_, {
          color: `dull`,
          onClick: _.onClose,
          children: _.Localize(`#Button_Close`),
        }),
    ],
  });
}
function _(_, _, _) {
  return `${_.MEDIA_CDN_COMMUNITY_URL}assets/market/${_}/v1/${_}/${_}.avif`;
}
function _(_, _) {
  return !!(_(_) && _ == 0);
}
function _(_) {
  let { src: _, onClick: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    onClick: _,
    maxWidth: `100%`,
    children: [
      _.strBackgroundURL &&
        (0, _.jsx)(_, {
          objectFit: `contain`,
          src: _.strBackgroundURL,
          alt: ``,
          maxWidth: `100%`,
        }),
      (0, _.jsx)(_, {
        objectFit: `contain`,
        src: _.strForegroundURL,
        alt: ``,
        maxWidth: `100%`,
      }),
      _,
    ],
  });
}
function _(_) {
  let [_, _] = _(`lightboxBackground`);
  function _(_) {
    _(_);
  }
  return (0, _.jsx)(_, {
    onChange: _,
    checked: _ !== !1,
    children: (0, _.jsx)(_, {
      size: `3`,
      children: _.Localize(`#Listing_EnhancedAppearance_ShowBackground`),
    }),
  });
}
function _(_) {
  let { src: _ } = _,
    [_] = _(`lightboxBackground`);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _ !== !1 &&
        _.strBackgroundURL &&
        (0, _.jsx)(_, {
          objectFit: `contain`,
          src: _.strBackgroundURL,
          alt: ``,
          maxWidth: `100%`,
        }),
      (0, _.jsx)(_, {
        objectFit: `contain`,
        src: _.strForegroundURL,
        alt: ``,
        maxWidth: `100%`,
      }),
      (0, _.jsx)(_, {
        style: {
          userSelect: `none`,
        },
        onClick: (_) => _.stopPropagation(),
        padding: `2`,
        justify: {
          initial: `center`,
          _: `start`,
        },
        width: `100%`,
        children: _.strBackgroundURL && (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { images: _, activeIndex: _, onIndexChange: _ } = _;
  if (_ < 0) return null;
  let _ = (_ + 1) % _.length,
    _ = (_ + _.length - 1) % _.length;
  return (0, _.jsx)(_, {
    backgroundClassName: _,
    imageTitle: ``,
    prevSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    mainSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    nextSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    onMoveNextRequest: (_) => {
      _.stopPropagation(), _.preventDefault(), _(_);
    },
    onMovePrevRequest: (_) => {
      _.stopPropagation(), _.preventDefault(), _(_);
    },
    onCloseRequest: (_) => {
      _.stopPropagation(), _.preventDefault(), _(-1);
    },
    toolbarButtons: [],
  });
}
function _(_) {
  return (
    !!_.bSearchDescriptions ||
    (!!_.accessoryFilters && Object.keys(_.accessoryFilters).length > 0)
  );
}
function _(_, _) {
  let _ = {};
  for (let _ of _) {
    let _ = _.category,
      _ = _.internal_name;
    !_ || !_ || (_[_] || (_[_] = []), _[_].push(_));
  }
  return _;
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_, _ = !0) {
  return {
    queryKey: [`market_search`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = await _(`/market/actions`, `Search`, {
        ..._,
        start: _.pageParam,
      });
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_) return null;
      let _ = _ + (_.results || []).length;
      return (_.total_count && _ >= _.total_count) || _.results?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_, _ = !0) {
  return {
    queryKey: [`market_search_descriptions`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = await _(`/market/actions`, `SearchDescriptions`, {
        ..._,
        start: _.pageParam,
      });
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  return (
    _.appid && _.set(`appid`, _.appid.toString()),
    _.strQuery && _.set(`q`, _.strQuery),
    _.strQuery && _.bSearchDescriptions && _.set(`descriptions`, `1`),
    typeof _.count == `number` &&
      _.count >= 0 &&
      _.set(`count`, _.count.toString()),
    typeof _.sort == `number` && _.set(`sort`, _.sort.toString()),
    typeof _.direction == `number` && _.set(`dir`, _.direction.toString()),
    typeof _.start == `number` && _.set(`start`, _.start.toString()),
    _.searchDescriptionSort &&
      (_.set(`descsort`, _.searchDescriptionSort.field.toString()),
      typeof _.searchDescriptionSort.direction == `number` &&
        _.set(`descdir`, _.searchDescriptionSort.direction.toString()),
      typeof _.searchDescriptionSort.assetpropertyid == `number` &&
        _.set(
          `descpropid`,
          _.searchDescriptionSort.assetpropertyid.toString(),
        )),
    _
  );
}
function _(_, _) {
  let _ = new URLSearchParams();
  if (_.price) {
    let _ = _.price.unMin ?? 0;
    _ > 0 &&
      (_.set(`price_min`, _.toString()),
      _.set(`price_currency`, _.price.eCurrency.toString()));
    let _ = _.price.unMax ?? 0;
    _ > _ &&
      _ < _ &&
      (_.set(`price_max`, _.toString()),
      _.set(`price_currency`, _.price.eCurrency.toString()));
  }
  if (_.accessoryFilters)
    for (let [_, _] of Object.entries(_.accessoryFilters))
      for (let _ of _) _.append(_, _);
  if (_.filters)
    for (let [_, _] of Object.entries(_.filters))
      for (let _ of _) _.append(`category_${_}`, _);
  return _;
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: [`market_item_search`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = await _(`/market/actions`, `QueryListingsForItem`, {
        ..._,
        start: _.pageParam,
      });
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  if (
    (_.appid && _.set(`appid`, _.appid.toString()),
    _.strQuery && _.set(`q`, _.strQuery),
    _.sort &&
      (_.set(`sort`, _.sort.field.toString()),
      _.sort.direction !== void 0 && _.set(`dir`, _.sort.direction.toString()),
      _.sort.field === 1 &&
        (_(
          typeof _.sort.assetpropertyid == `number`,
          `Property sort must include property id`,
        ),
        _.set(`propertyid`, _.sort.assetpropertyid.toString()))),
    _.propertyFilters)
  )
    for (let _ of Object.values(_.propertyFilters || {}))
      _.append(`assetproperty`, _.fromObject(_).serializeBase64String());
  return _;
}
function _(_, _, _ = !0) {
  return _(_(_, _, _));
}
function _(_, _, _ = !0) {
  return {
    queryKey: [`market`, `orderbook`, _, _],
    queryFn: async () => {
      let _ = await _(`/market/orderbook`, `Load`, _, _);
      if (!_.success || !_.data) throw Error(`Bad book response`);
      return _.data;
    },
    refetchInterval: _ ? 5e3 : void 0,
    enabled: !!_,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return {
    queryKey: [`market`, `description`, _, _],
    queryFn: () => _(`/market/actions`, `QueryDescription`, _, _),
    enabled: !!_,
    ..._,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return {
    queryKey: [`market`, `pricehistory`, _, _],
    queryFn: () => _(`/market/actions`, `QueryPriceHistory`, _, _),
    ..._,
  };
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};

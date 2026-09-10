var _ = _(_(), 1),
  _ = _(),
  _ = [
    `vimeo.com`,
    `youtu.be`,
    `youtube.com`,
    `steamcdn-a.akamaihd.net`,
    `steamusercontent.com`,
    `steamstatic.com`,
    `steamusercontent-a.akamaihd.net`,
    `steamuserimages-a.akamaihd.net`,
    `steamstore-a.akamaihd.net`,
    `steamcommunity-a.akamaihd.net`,
    `steampowered-a.akamaihd.net`,
  ];
function _(_) {
  if (!_.match(/^https?:\/\//)) return !1;
  if (!_(_)) return !0;
  let _ = _(_).toLowerCase();
  return _.some((_) => _ == _ || _.endsWith(`.` + _));
}
function _(_) {
  let _ = _.strings.strTooltip;
  return (
    _.bCanReveal && (_ += ` (Valve/Mod Only) Click to reveal link`),
    (0, _.jsx)(_, {
      strLabel: _.strings.strLabel,
      strTooltip: _,
      bCanReveal: _.bCanReveal,
      children: _.children,
    })
  );
}
function _(_, _) {
  switch (_.linkMode ?? `links`) {
    case `bewary`:
      return {
        URLConstructor: (_) => {
          let _ = _(_);
          return _ && _(_.strURL)
            ? _(_)
            : (0, _.jsx)(_, {
                strings: _,
                bCanReveal: _.bCanRevealRemovedLinks,
                children: _.children,
              });
        },
        fnRenderBodyURL: (_) =>
          _(_)
            ? (0, _.jsx)(_, {
                strURL: _,
              })
            : (0, _.jsx)(_, {
                strings: _,
                bCanReveal: _.bCanRevealRemovedLinks,
                children: _,
              }),
      };
    case `whitelist`:
      return {
        URLConstructor: (_) => {
          let _ = _(_);
          return _ && _(_.strURL)
            ? _(_)
            : (0, _.jsx)(_.Fragment, {
                children: _.children,
              });
        },
        fnRenderBodyURL: (_) =>
          _(_)
            ? (0, _.jsx)(_, {
                strURL: _,
              })
            : _,
      };
    default:
      return {
        URLConstructor: _,
        fnRenderBodyURL: void 0,
      };
  }
}
function _(_, _) {
  switch (_.linkMode ?? `links`) {
    case `bewary`:
    case `whitelist`:
      return _(_);
    default:
      return !0;
  }
}
var _ = (function (_) {
  return (
    (_[(_.k_EURLSite_None = 0)] = `k_EURLSite_None`),
    (_[(_.k_EURLSite_Store = 1)] = `k_EURLSite_Store`),
    (_[(_.k_EURLSite_Community = 2)] = `k_EURLSite_Community`),
    _
  );
})({});
function _(_, _) {
  return !!_ && (_ == _ || _.endsWith(`.` + _));
}
var _ = [`steamcommunity.com`, `my.steamchina.com`],
  _ = [`steampowered.com`, `store.steamchina.com`];
function _(_) {
  return URL.parse(_)?.hostname.toLowerCase() ?? ``;
}
function _(_, _) {
  let _ = _.hostname.toLowerCase();
  switch (_) {
    case 0:
      return !0;
    case 1:
      return [_(_.STORE_BASE_URL), ..._].some((_) => _(_, _));
    case 2:
      return [_(_.COMMUNITY_BASE_URL), ..._].some((_) => _(_, _));
  }
  return !1;
}
function _(_, _) {
  let _ = URL.parse(_.match(/^[a-z][a-z0-9+.-]*:/i) ? _ : `http://` + _);
  if (!_ || _.searchParams.get(`noPreview`)) return;
  let _ = {
      strURL: _,
      url: _,
      bNoPopup: !!_.searchParams.get(`noPopup`),
    },
    _ = _.find(
      (_) =>
        _(_, _.site) &&
        (!_.regex || _.regex.test(_.pathname)) &&
        (!_.fnMatch || _.fnMatch(_)),
    )?.component;
  return _
    ? {
        Card: _,
        match: _,
      }
    : void 0;
}
function _(_) {
  let _ = _;
  return () => (_ <= 0 ? !1 : (_--, !0));
}
var _ = new WeakMap();
function _(_, _, _) {
  if (_.has(_)) return _.get(_);
  let _ =
      !_.fnBAllowCard || _.fnBAllowCard(_) ? _(_.rgDynamicLinks, _) : void 0,
    _ = _ && (!_.fnBTake || _.fnBTake()) ? _ : void 0;
  return _.set(_, _), _;
}
function _(_, _ = _) {
  if (!_.rgDynamicLinks.length) return _;
  let _ = _.URLConstructor;
  function _(_) {
    let _ = _(_),
      _ = _ && !_.bHasCustomText ? _(_, _, _.strURL) : void 0;
    return _
      ? (0, _.jsx)(_.Card, {
          match: _.match,
          children: _.children,
        })
      : (0, _.jsx)(_, {
          ..._,
        });
  }
  function _(_) {
    let _ = _(_, _, _.strURL),
      _ = _.fnRenderBodyURL
        ? _.fnRenderBodyURL(_.strURL)
        : (0, _.jsx)(_, {
            strURL: _.strURL,
          });
    return _
      ? (0, _.jsx)(_.Card, {
          match: _.match,
          children: _,
        })
      : _;
  }
  return {
    URLConstructor: _,
    fnRenderBodyURL: (_) =>
      (0, _.jsx)(_, {
        strURL: _,
      }),
  };
}
function _(_, _, _) {
  let _ = _(_, _);
  return _
    ? _(
        {
          ..._,
          fnBAllowCard: (_) => _(_, _),
        },
        _,
      )
    : _;
}
var _ = `huRHJiZfYko-`,
  _ = `IrN0YbAnJsw-`,
  _ = `lyWzllKSmIk-`,
  _ = `UaL62AQUKkY-`,
  _ = `jpTV7MUPh78-`,
  _ = {
    table: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  };
function _(_) {
  let _ = _(_.args, `noborder`),
    _ = _(_.args, `equalcells`),
    _ = _(_.args, `colwidth`);
  return (0, _.jsxs)(`table`, {
    className: _(_, `BB_Table`, _ && `_5W82LoeXbQY-`, _ && `kzYJe9usRrQ-`),
    children: [
      _ &&
        (0, _.jsx)(`colgroup`, {
          children: _.split(`,`).map((_, _) =>
            (0, _.jsx)(
              _,
              {
                width: _,
              },
              _,
            ),
          ),
        }),
      (0, _.jsx)(`tbody`, {
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let { width: _ } = _,
    _;
  return (
    _ &&
      parseInt(_) > 0 &&
      (_ = {
        width: `${_}px`,
      }),
    (0, _.jsx)(`col`, {
      style: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(`tr`, {
    className: _(_, `BB_TableRow`),
    children: _.children,
  });
}
function _(_, _) {
  let _ = _(_.args, `width`),
    _ =
      _?.length == 0
        ? void 0
        : {
            width: _,
          },
    _ = _(_.args, `colspan`),
    _ = _(_.args, `rowspan`),
    _ = {};
  return (
    _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
    _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
    (0, _.jsx)(_, {
      className: _(_, _ == `td` && `BB_TableData`),
      ..._,
      style: _,
      children: _.children,
    })
  );
}
function _(_) {
  return _(`th`, _);
}
function _(_) {
  return _(`td`, _);
}
function _(_, _) {
  return {
    linkMode: _,
    bCanRevealRemovedLinks: !!_.bIsSupport || !!_.bIsGlobalModerator,
  };
}
function _() {
  return {
    strLabel: _.Localize(`#Community_RemoveLink_BeWary`),
    strTooltip: _.Localize(`#Community_RemoveLink_Tooltip`),
  };
}
function _(_) {
  return _(_, _(), _.dynamicLinks);
}
var _ = `SPnl2bpY6rA-`;
function _(_) {
  let _ = _(_.args) ?? _?.children?.toString();
  return _
    ? (0, _.jsx)(_, {
        className: _,
        src: _,
        alt: _,
      })
    : null;
}
function _(_) {
  return null;
}
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = _(_);
    return new _(
      {
        ..._,
        ..._,
        ..._,
        ..._,
        img: {
          Constructor: _.include_images ? _ : _,
          autocloses: !0,
        },
        ..._(_),
        spoiler: {
          Constructor: _,
        },
        clear: {
          Constructor: _,
          skipFollowingNewline: !0,
        },
      },
      _(_),
      _.LANGUAGE,
    );
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      new _(
        {
          ..._,
          ..._,
          ..._,
          ..._(_),
        },
        _(_),
        _.LANGUAGE,
      ),
    [],
  );
}
export { _, _, _, _, _, _, _, _, _, _ };

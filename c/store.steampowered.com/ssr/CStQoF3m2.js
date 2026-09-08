const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./assets/BryW0eKn.css",
      "./assets/CBgaPm1z.css",
      "./assets/BJs42CxA.css",
      "./assets/YNo6LF5Z.css",
      "./assets/CBv2tb10.css",
    ]),
) => _.map((_) => _[_]);
var _ = _(_(), 1),
  _ = _(),
  _ = _.lazy(() =>
    _(() => import(`./B9E2LIaQ.js`), __vite__mapDeps([0]), import.meta.url),
  );
function _(_) {
  return _().metrics
    ? (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
var _ = _(_(), 1);
function _() {
  return _(_) === `desktop`;
}
function _() {
  return _(_) === `touch`;
}
function _(_ = !1) {
  let _ = [];
  return (
    _() ? _.push(`force_desktop`) : _.push(`responsive`),
    (_() || _) && _.push(`touch`),
    _.join(` `)
  );
}
function _() {
  _(_, `desktop`), `location` in window && location.reload();
}
function _() {
  _() && _(_), `location` in window && location.reload();
}
function _(_) {
  let { dynamicImport: _, fallback: _, ..._ } = _,
    [_] = (0, _.useState)(() =>
      _.lazy(async () => ({
        default: await _(),
      })),
    );
  return (0, _.jsx)(_, {
    fallback: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
var _ = 1,
  _ = 2;
function _() {
  return [`CurrentUserWalletDetails`, _.accountid];
}
function _(_) {
  return {
    queryKey: _(),
    queryFn: async () => {
      if (!_.accountid) return;
      let _ = _.EREALM === _.k_ESteamRealmChina;
      return (
        await _.GetClientWalletDetails(_, {
          wallet_region: _ ? _ : _,
          include_formatted_balance: !0,
        })
      )
        .Body()
        .toObject();
    },
    staleTime: 600 * 1e3,
  };
}
function _() {
  return _(_(_()));
}
var _ = `USDyb53meAE-`,
  _ = `M6Pai7xYxtg-`,
  _ = `_84yL92kXlzo-`,
  _ = `-QcLqQWGg4g-`,
  _ = `e-j9Y1J8-N8-`;
async function _(_, _) {
  let _ = new FormData();
  _.set(`language`, _);
  let _ = await fetch(_, {
    method: `POST`,
    credentials: `same-origin`,
    body: _,
  });
  if (!_._) throw _;
}
function _(_) {
  let {
      open: _,
      menuAction: _,
      changeLanguagePath: _,
      bLoggedIn: _,
      bSkipLanguagePrefs: _,
      onDismiss: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _ ? _.current?.showModal() : _.current?.close();
  }, [_]);
  async function _(_) {
    _(!0);
    try {
      await _(_, _);
    } catch (_) {
      console.error(_), _(!1);
      return;
    }
    _ && !_
      ? (location.href = _.STORE_BASE_URL + `account/languagepreferences/`)
      : _.href
        ? (location.href = _.href)
        : location.reload();
  }
  return (0, _.jsx)(`dialog`, {
    ref: _,
    className: _,
    onMouseDown: (_) => _.target === _.current && _(),
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`hr`, {
          className: _,
        }),
        (0, _.jsxs)(`form`, {
          method: `dialog`,
          className: _,
          onSubmit: (_) => _(_.target.elements.namedItem(`language`)?.value),
          children: [
            (0, _.jsx)(`select`, {
              disabled: _,
              name: `language`,
              onChange: (_) => _(_.target.value),
              defaultValue: _().strLanguage,
              children: _.menuAction.children?.map((_) =>
                (0, _.jsx)(
                  `option`,
                  {
                    value: _.action_parameters?.language,
                    children: _.label,
                  },
                  _.label,
                ),
              ),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`input`, {
                type: `submit`,
                value: `OK`,
                className: _,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `X-UKhqf-Moc-`,
  _ = `nikULGV-7Q0-`,
  _ = `-yy5spKdnuw-`,
  _ = `YIU8yTvS858-`,
  _ = `QO6CjVPSFuI-`,
  _ = `vTro5UlZ-gU-`,
  _ = `En-WtuWIGUc-`,
  _ = `_6SYP6u3KmrY-`,
  _ = `LxGIxXUwILQ-`,
  _ = `XYfgXgWUac8-`,
  _ = `_7ykpxZ0stGM-`,
  _ = {};
(_.arabic = () => _(() => import(`./CXRh2for.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./DhfZpnGN.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Db6QlCmU2.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./CxYWAkLH2.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./D8WlaMGZ2.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./CwS32Wby2.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./Dpu__Y302.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./DLyCHUL72.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./DlB92d_O2.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./CB-Znb8_2.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./CbjTV9P92.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Xxlh2u6E2.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./nVv36xvQ2.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./CTp5PEot2.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./dmz8d30T2.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./BNgmGbLG2.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./D3FXvwLL2.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DTbQR3hC2.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./DKME1Jev2.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./DkoXIs9D2.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./CN1YlgzX2.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./DirR0TcY2.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./B6pNkZl-2.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./CldGdb6E2.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./W3xbhZ1a2.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./CK6YAZUQ2.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./CoipiwE-2.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./lCCmLfi-2.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./CtxCBZGM.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./Be-JwR2a.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./BVB0fHBN.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./CZi0kN3X.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_ = `/logout/`) {
  let _ = document.createElement(`form`);
  (_.action = _), (_.method = `POST`), document.body.appendChild(_), _.submit();
}
function _(_) {
  let { action: _ } = _,
    _ = (0, _.useContext)(_),
    _ = `span`,
    _ = {};
  return (
    _.href &&
      ((_ = _),
      (_._ = _.href),
      (_.external = !_.ssr),
      _.href.startsWith(_.STORE_BASE_URL) &&
        (_.snr = {
          feature: `globalheader`,
        })),
    _.action &&
      (_.href || (_ = `button`),
      (_.onClick = async function (_) {
        switch ((_.preventDefault(), _.action)) {
          case 1:
            _(_.logoutPath);
            return;
          case 2:
            if (_.action_parameters?.language === void 0)
              throw `Missing language`;
            try {
              await _(_.action_parameters.language, _.changeLanguagePath);
            } catch (_) {
              console.error(_);
              return;
            }
            _.userDetails
              ? (location.href =
                  _.STORE_BASE_URL + `account/languagepreferences/`)
              : _.href
                ? (location.href = _.href)
                : location.reload();
            return;
        }
      })),
    (0, _.jsx)(_, {
      menuTarget: (0, _.jsxs)(_, {
        ..._,
        tabIndex: 0,
        className: _,
        children: [
          _(
            _.label,
            (0, _.jsx)(`span`, {
              className: _,
            }),
          ),
          _.beta &&
            (0, _.jsx)(`span`, {
              className: `_7ngrCnz6jgA-`,
              children: _.Localize(`#beta_tag`),
            }),
        ],
      }),
      direction: `left`,
      className: _,
      children: _.children?.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            action: _,
          },
          _,
        ),
      ),
    })
  );
}
var _ = (0, _.createContext)({});
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.globalActions.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          direction: `down-left`,
          menuTarget: (0, _.jsx)(`button`, {
            className: _,
            children: _.label,
          }),
          className: _,
          interactionMode: 1,
          children: _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                action: _,
              },
              _,
            ),
          ),
        },
        _,
      ),
    ),
  });
}
function _() {
  let { data: _ } = _();
  return (0, _.jsx)(`div`, {
    className: _,
    children: _?.formatted_balance,
  });
}
function _(_) {
  let { userDetails: _ } = _,
    [_, _] = (0, _.useState)(void 0),
    _ = `/login/${_ ? `?redir=${encodeURIComponent(_)}` : ``}`;
  return (
    (0, _.useEffect)(() => {
      _(location.href);
    }, []),
    _
      ? (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`a`, {
              className: _,
              href: _.STORE_BASE_URL + `about/`,
              children: _.Localize(`#global_menu_install_steam`),
            }),
            _.notifications &&
              (0, _.jsx)(`div`, {
                className: `PI-IEC-WlRE-`,
                children: (0, _.jsx)(_, {
                  dynamicImport: async () =>
                    (
                      await _(
                        async () => {
                          let { GreenEnvelope: _ } = await import(
                            `./CPw6qE9A.js`
                          );
                          return {
                            GreenEnvelope: _,
                          };
                        },
                        __vite__mapDeps([1, 2, 3, 4]),
                        import.meta.url,
                      )
                    ).GreenEnvelope,
                  fallback: (0, _.jsx)(`div`, {
                    className: `FZlHN3ErsM8-`,
                  }),
                  bResponsiveHeader: !1,
                  notifications: _.notifications,
                }),
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  userDetails: _,
                  globalActions: _.globalActions,
                  changeLanguagePath: _.changeLanguagePath,
                  logoutPath: _.logoutPath,
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
            (0, _.jsx)(`a`, {
              className: _,
              href: _(_),
              children: (0, _.jsx)(_, {
                playerLinkDetails: _,
                statusPosition: `border`,
                alt: ``,
                role: `presentation`,
                size: `Small`,
              }),
            }),
          ],
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`a`, {
                className: (0, _.default)(_, _),
                href: _.STORE_BASE_URL + `about/`,
                children: _.Localize(`#global_menu_install_steam`),
              }),
              `\xA0`,
              (0, _.jsx)(`a`, {
                href: _,
                className: _,
                children: _.Localize(`#global_menu_login`),
              }),
              _.globalActions.length > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    `\xA0\xA0|\xA0\xA0`,
                    (0, _.jsx)(_, {
                      userDetails: _,
                      globalActions: _.globalActions,
                      changeLanguagePath: _.changeLanguagePath,
                      logoutPath: _.logoutPath,
                    }),
                  ],
                }),
            ],
          }),
        })
  );
}
var _ = `_7urhuKLYiUk-`,
  _ = `zugXgzI1-Ig-`,
  _ = `NGjNcNxDz0Y-`,
  _ = `iEaHFy2Quxg-`,
  _ = `LVqCHgnXxYs-`,
  _ = `r0Jn4sdskW4-`,
  _ = `_3xhf62uevQo-`,
  _ = `JHTb0KR9c-o-`,
  _ = `FAoztKwEGgQ-`,
  _ = `JGImopK-SYs-`,
  _ = `KHtcfezTz4s-`,
  _ = (0, _.forwardRef)(function (_, _) {
    let { item: _, responsive: _, className: _, ..._ } = _,
      _ = _.label;
    return (
      _ && (_ = _.label_responsive ?? _.label),
      (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          className: (0, _.default)(_, _.valveOnly && `_7WvpcB-dbNc-`),
          _: _.href,
          "aria-current": _.active ? `page` : void 0,
          external: !_.ssr,
          snr: _.href.startsWith(_.STORE_BASE_URL) && {
            feature: `globalheader`,
          },
          ref: _,
          ..._,
          children: [
            _,
            _.new &&
              (0, _.jsx)(`span`, {
                className: `jxJHmxST56Q-`,
                children: _.Localize(`#m_ext_new`),
              }),
          ],
        }),
      })
    );
  });
function _(_) {
  let { navContent: _ } = _;
  return (0, _.jsx)(_, {
    menuTarget: (0, _.jsx)(_, {
      item: _,
      className: _,
    }),
    direction: `right`,
    children: _.children?.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          navContent: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  return (0, _.jsx)(`nav`, {
    className: _,
    children: (0, _.jsx)(`ul`, {
      className: _,
      children: _.navContent.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            menuTarget: (0, _.jsx)(_, {
              item: _,
              className: (0, _.default)(_, _.userContent && `Rh10yi6-EHM-`),
            }),
            direction: `down`,
            className: _,
            children: _.children?.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  navContent: _,
                },
                _,
              ),
            ),
          },
          _,
        ),
      ),
    }),
  });
}
var _ = `data:image/png;base64,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`,
  _ = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='355.666px'%20height='89.333px'%20viewBox='0%200%20355.666%2089.333'%20enable-background='new%200%200%20355.666%2089.333'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='%23C5C3C0'%20d='M44.238,0.601C21,0.601,1.963,18.519,0.154,41.29l23.71,9.803c2.009-1.374,4.436-2.179,7.047-2.179%20c0.234,0,0.467,0.008,0.698,0.021l10.544-15.283c0-0.073-0.001-0.144-0.001-0.216c0-9.199,7.483-16.683,16.683-16.683%20c9.199,0,16.682,7.484,16.682,16.683c0,9.199-7.483,16.684-16.682,16.684c-0.127,0-0.253-0.003-0.379-0.006l-15.038,10.73%20c0.008,0.195,0.015,0.394,0.015,0.592c0,6.906-5.617,12.522-12.522,12.522c-6.061,0-11.129-4.326-12.277-10.055L1.678,56.893%20c5.25,18.568,22.309,32.181,42.56,32.181c24.432,0,44.237-19.806,44.237-44.235C88.475,20.406,68.669,0.601,44.238,0.601'/%3e%3cpath%20fill='%23C5C3C0'%20d='M27.875,67.723l-5.434-2.245c0.963,2.005,2.629,3.684,4.841,4.606c4.782,1.992,10.295-0.277,12.288-5.063%20c0.965-2.314,0.971-4.869,0.014-7.189c-0.955-2.321-2.757-4.131-5.074-5.097c-2.299-0.957-4.762-0.922-6.926-0.105l5.613,2.321%20c3.527,1.47,5.195,5.52,3.725,9.047C35.455,67.526,31.402,69.194,27.875,67.723'/%3e%3cpath%20fill='%23C5C3C0'%20d='M69.95,33.436c0-6.129-4.986-11.116-11.116-11.116c-6.129,0-11.116,4.987-11.116,11.116%20c0,6.13,4.987,11.115,11.116,11.115C64.964,44.55,69.95,39.565,69.95,33.436%20M50.502,33.417c0-4.612,3.739-8.35,8.351-8.35%20c4.612,0,8.351,3.738,8.351,8.35s-3.739,8.35-8.351,8.35C54.241,41.767,50.502,38.028,50.502,33.417'/%3e%3cpath%20fill='%23C5C3C0'%20d='M135.718,30.868l-2.964,5.21c-2.283-1.595-5.377-2.555-8.078-2.555c-3.087,0-4.997,1.278-4.997,3.567%20c0,2.781,3.393,3.428,8.436,5.238c5.421,1.917,8.537,4.17,8.537,9.135c0,6.793-5.342,10.608-13.02,10.608%20c-3.742,0-8.256-0.966-11.726-3.077l2.162-5.776c2.819,1.489,6.191,2.372,9.197,2.372c4.052,0,5.978-1.495,5.978-3.705%20c0-2.529-2.937-3.289-7.678-4.859c-5.403-1.804-9.147-4.171-9.147-9.666c0-6.197,4.963-9.756,12.104-9.756%20C129.499,27.604,133.499,29.181,135.718,30.868'/%3e%3cpolygon%20fill='%23C5C3C0'%20points='158.888,34.161%20158.888,61.5%20151.909,61.5%20151.909,34.161%20141.779,34.161%20141.779,28.175%20168.988,28.175%20168.988,34.161%20'/%3e%3cpolygon%20fill='%23C5C3C0'%20points='183.7,34.143%20183.7,41.652%20197.056,41.652%20197.056,47.638%20183.7,47.638%20183.7,55.459%20199.196,55.459%20199.196,61.5%20176.723,61.5%20176.723,28.175%20199.196,28.175%20199.196,34.143%20'/%3e%3cpath%20fill='%23C5C3C0'%20d='M214.773,55.03l-2.206,6.471h-7.316l12.495-33.325h7.025L237.619,61.5h-7.563l-2.254-6.471H214.773z%20M221.219,36.125l-4.551,13.343h9.196L221.219,36.125z'/%3e%3cpolygon%20fill='%23C5C3C0'%20points='273.436,41.056%20264.316,60.529%20260.378,60.529%20251.406,41.23%20251.406,61.5%20244.723,61.5%20244.723,28.175%20251.391,28.175%20262.591,52.231%20273.393,28.175%20280.119,28.175%20280.119,61.5%20273.437,61.5%20'/%3e%3cpath%20fill='%23C5C3C0'%20d='M293.611,32.379c0,2.864-2.146,4.649-4.609,4.649c-2.472,0-4.623-1.785-4.623-4.649%20c0-2.863,2.151-4.636,4.623-4.636C291.466,27.743,293.611,29.516,293.611,32.379%20M285.154,32.379c0,2.396,1.726,3.901,3.848,3.901%20c2.114,0,3.833-1.505,3.833-3.901c0-2.403-1.719-3.885-3.833-3.885C286.886,28.494,285.154,29.994,285.154,32.379%20M289.066,30.01%20c1.195,0,1.597,0.632,1.597,1.315c0,0.626-0.371,1.046-0.823,1.26l1.071,2.007h-0.877l-0.903-1.779H288.2v1.779h-0.73V30.01%20H289.066z%20M288.207,32.142h0.814c0.527,0,0.838-0.331,0.838-0.747c0-0.42-0.223-0.69-0.84-0.69h-0.813V32.142z'/%3e%3c/g%3e%3c/svg%3e`,
  _ = `` + new URL(`assets/mHntPfFv.svg`, import.meta.url).href,
  _ = `` + new URL(`assets/DfnAe-hE2.png`, import.meta.url).href,
  _ = `l42o7CLwn7I-`;
function _() {
  return _(`(max-width: 730px)`) || _.IN_MOBILE_WEBVIEW;
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 12 12`,
    fill: `none`,
    role: `presentation`,
    className: _.className,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.81026 6.36084L8.50899 3.66211L9.6875 4.84062L5.81026 8.71786L1.93302 4.84062L3.11153 3.66211L5.81026 6.36084Z`,
    }),
  });
}
var _ = _.createContext({
  nBackdropHeight: void 0,
  bBackdropActive: !1,
});
function _() {
  return _.useContext(_);
}
var _ = _.createContext(void 0);
function _() {}
function _(_) {
  let [_, _] = _.useState(``),
    [_, _] = _.useState(() => _),
    [_, _] = _.useState(void 0),
    [_, _, _] = _(),
    _ = `searchSuggestions_${_.useId()}`,
    _ = _ !== void 0;
  (0, _.useEffect)(() => {
    if (_ === void 0) return;
    let _ = window.setTimeout(() => _(void 0), 300 * 1e3);
    return () => window.clearTimeout(_);
  }, [_]);
  let _ = _.useMemo(
    () => ({
      term: _,
      setTerm: _,
      onInputKeyDown: _,
      setInputKeyDown: (_) => _(() => _ ?? _),
      suggestionsId: _,
      bEverActive: _,
      onActive: () => _(performance.now()),
      bSearchVisible: _,
      openSearch: _,
      closeSearch: _,
    }),
    [_, _, _, _, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_);
}
function _(_, _) {
  let _ = new URLSearchParams({
    term: _,
    snr: _,
  });
  return `${_.STORE_BASE_URL}search/?${_.toString()}`;
}
function _(_) {
  let { term: _ } = _(),
    _ = _(_);
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _ = !0) {
  (0, _.useEffect)(() => {
    let _ = _.current;
    if (!_ || !_) return;
    let _ = _(_, `y`);
    return (
      _.push(_.ownerDocument.documentElement),
      (_ = _.filter(
        (_) =>
          _.scrollHeight > _.getBoundingClientRect().height &&
          window.getComputedStyle(_).overflowY !== `visible`,
      )),
      _.forEach((_) => _.classList.add(_)),
      () => _.forEach((_) => _.classList.remove(_))
    );
  }, [_, _]);
}
var _ = `h3IhvvKqNWg-`,
  _ = `SteamBeta_VOnly_`,
  _ = {
    name: _,
    options: {
      path: `/`,
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_, _) {
  let _ = {
    ..._,
    name: _(_),
  };
  _.default === _ ? _(_) : _(_, _ ? `1` : `0`);
}
function _(_) {
  return `${_}${_.shortName}`;
}
function _(_) {
  let { rgBetas: _, buttonClassName: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    _ = _({
      open: _,
      onOpenChange: (_) => _(_),
      width: `dropdown`,
      placement: `bottom`,
      activeIndex: _,
      setActiveIndex: (_) => _(_),
      setSelectedIndex: () => _(!1),
      interactions: {
        click: !0,
      },
      role: `select`,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: (0, _.jsxs)(`button`, {
          className: (0, _.default)(_, _),
          children: [
            (0, _.jsx)(`span`, {
              children: `admin`,
            }),
            (0, _.jsx)(_, {}),
          ],
        }),
      }),
      (0, _.jsx)(_.Positioner, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              beta: _,
            },
            _.shortName,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { beta: _ } = _;
  return (0, _.jsx)(_.Item, {
    onSelect: () => {
      _(_, !(_.enabled ?? _.default)), window.location.reload();
    },
    children: (0, _.jsxs)(`div`, {
      children: [
        (_.enabled ?? _.default) ? `Exit ` : `Enter `,
        ` `,
        _.descriptiveName,
      ],
    }),
  });
}
function _(_) {
  let { rgBetas: _, buttonClassName: _ } = _;
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        rgBetas: _,
        buttonClassName: _,
      });
}
var _ = `sBhqQUbkJpI-`,
  _ = `mkVCTsyaxnE-`,
  _ = `Zmd4yCX8src-`,
  _ = () => {
    _(_), window.location.reload();
  };
function _(_) {
  return (0, _.jsxs)(`span`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: `You are spoofing another user!`,
      }),
      ` `,
      (0, _.jsx)(`span`, {
        className: _,
        onClick: _,
        children: `end spoofing`,
      }),
    ],
  });
}
function _(_) {
  let { containerClassname: _, buttonClassName: _, rgBetas: _ } = _,
    _ = _().metrics;
  return !_.spoofing && !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.spoofing && (0, _.jsx)(_, {}),
          _ &&
            (0, _.jsx)(_, {
              buttonClassName: _.buttonClassName,
            }),
          !!_ &&
            (0, _.jsx)(_, {
              rgBetas: _,
              buttonClassName: _,
            }),
        ],
      });
}
var _ = `_1hK5Pa2qbxc-`,
  _ = `Ufm0QNEexSk-`,
  _ = `t4O8ORpLDqs-`,
  _ = `sm4uEZwjNDE-`,
  _ = `_-02zffUT45Q-`,
  _ = `Pd4GU3H2CTk-`,
  _ = `xAIxVukOqMA-`,
  _ = `a-hmE9BfPIg-`,
  _ = `r0AmiKA39mc-`,
  _ = `VqZq0261-H0-`,
  _ = `rvKsosHxgAE-`,
  _ = `dF3Ge-BMhAM-`,
  _ = `blfsYIXtMMw-`,
  _ = `Fz0HDxt3lDI-`,
  _ = `azd-LnhAMYQ-`,
  _ = `DtHPAA5V4D0-`,
  _ = `h7gD6XW38FA-`,
  _ = `UvgvOr-m4ME-`,
  _ = `s4-cvghgJD8-`,
  _ = `A8krqU5RJ-0-`,
  _ = `T17Yo1S1os8-`,
  _ = `_9ZrfpmnOL3A-`,
  _ = `x6Nn1-lbN9s-`,
  _ = `JMd0Tzl8xas-`;
function _(_) {
  return _.private_data?.persona_state === 0
    ? _
    : _.private_data?.game_id === void 0
      ? _
      : _;
}
function _() {
  let { data: _ } = _();
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          snr: !0,
          external: !0,
          _: _.STORE_BASE_URL + `cart`,
          className: _,
          children: _.LocalizeReact(
            `#Cart_CountWidget`,
            (0, _.jsx)(`b`, {
              children: _(_),
            }),
          ),
        }),
      })
    : null;
}
function _() {
  let { data: _ } = _();
  return _?.formatted_balance
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          snr: !0,
          external: !0,
          _: _.STORE_BASE_URL + `account`,
          className: _,
          children: _.LocalizeReact(
            `#responsive_menu_wallet_balance`,
            (0, _.jsx)(`b`, {
              children: _.formatted_balance,
            }),
          ),
        }),
      })
    : null;
}
function _(_) {
  let { navContent: _, children: _, labelAddition: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  if (!_ && (!_.children || _.children.length === 0))
    return (0, _.jsx)(_, {
      item: _,
      className: _,
      responsive: !0,
    });
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight}px`,
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: `forwards`,
        },
      )));
  }
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
            `${_.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: `forwards`,
        },
      )),
      _.current.addEventListener(`finish`, () => {
        _.current && (_.current.open = !1);
      }));
  }
  function _() {
    _.current?.open ? _() : _.current && _();
  }
  return (0, _.jsxs)(`details`, {
    name: `responsive-menu`,
    className: _,
    ref: _,
    onToggle: _,
    children: [
      (0, _.jsxs)(`summary`, {
        className: _,
        ref: _,
        children: [
          _.label_responsive ?? _.label,
          ` `,
          _,
          ` `,
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        ref: _,
        children: [
          _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                item: _,
                className: _,
                responsive: !0,
              },
              _,
            ),
          ),
          _,
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `about`,
            children: `关于蒸汽平台`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `steam_refunds`,
            children: `退款政策`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `subscriber_agreement`,
            children: `软件许可服务协议`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `privacy_agreement`,
            children: `个人信息保护政策`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `data_outbound`,
            children: `个人信息出境告知书`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            _: `https://about.steamchina.com/content_report.html`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `不良内容举报投诉`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            _: `https://about.steamchina.com/infringement_report.html`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `侵权投诉`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            _: `https://about.steamchina.com/parentguardianship_agreement.html`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `家长监护`,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            external: !0,
            className: _,
            _: `http://qr.weibo.cn/g/7kla92`,
            target: `_blank`,
            rel: `noreferrer`,
            children: [
              (0, _.jsx)(`img`, {
                alt: `微博`,
                className: _,
                src: `${_.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, _.jsx)(`div`, {
                children: `微博`,
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            external: !0,
            className: _,
            _: `http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_`,
            target: `_blank`,
            rel: `noreferrer`,
            children: [
              (0, _.jsx)(`img`, {
                alt: `微信`,
                className: _,
                src: `${_.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, _.jsx)(`div`, {
                children: `微信`,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`hr`, {
        className: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            external: !0,
            _: `https://www.wanmei.com/`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, _.jsx)(`img`, {
              className: _,
              src: `${_.STORE_CDN_URL}/public/shared/images/footer/pw_logo.svg?v=1`,
              alt: ``,
            }),
          }),
          (0, _.jsx)(_, {
            external: !0,
            _: `https://www.valvesoftware.com`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, _.jsx)(`img`, {
              className: _,
              src: `${_.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: ``,
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              `© `,
              new Date().getFullYear(),
              ` Valve Corporation 版权所有，完美世界已获授权。`,
              (0, _.jsx)(`br`, {}),
              `所有商标均属于其在美国或其他国家的拥有者。`,
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `© 完美世界征奇(上海)多媒体科技有限公司 版权所有。`,
              (0, _.jsx)(`br`, {}),
              `增值电信业务经营许可证沪B2-20180406`,
            ],
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`img`, {
          src: `${_.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: ``,
        }),
      }),
      _.Localize(`#responsive_footer_copyright`),
      ` \xA0`,
      (0, _.jsxs)(`span`, {
        children: [
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + `privacy_agreement/`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_PrivacyPolicy`),
          }),
          `\xA0| \xA0`,
          (0, _.jsx)(_, {
            _: `http://www.valvesoftware.com/legal.htm`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_Legal`),
          }),
          `\xA0| \xA0`,
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + `subscriber_agreement/`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_SSA`),
          }),
          `\xA0| \xA0`,
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + `steam_refunds/`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_Refunds`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      userDetails: _,
      navContent: _,
      globalActions: _,
      changeLanguagePath: _,
      open: _,
      onDismiss: _,
      cartInResponsiveMenu: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    _.current &&
      (_
        ? (_.current?.showModal(),
          _.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: [`translateX(var(--closedX))`, `translateX(0)`],
            },
            {
              duration: 250,
              fill: `forwards`,
              easing: `ease-in-out`,
            },
          )))
        : _.current &&
          (_.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: [`translateX(0)`, `translateX(var(--closedX))`],
            },
            {
              duration: 250,
              fill: `forwards`,
              easing: `ease-in-out`,
            },
          )),
          _.current.addEventListener(`finish`, () => _.current?.close())));
  }, [_]);
  let _ =
    _.find((_) => _._ === `language`) ??
    _[0]?.children?.find((_) => _._ === `language`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`dialog`, {
        className: (0, _.default)(_, _(_.EREALM) && `kIikLkWFJTg-`),
        ref: _,
        onMouseDown: (_) => _.target === _.current && _(),
        onKeyDown: (_) => _.key === `Escape` && _(),
        inert: !_,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(`VqZq0261-H0-`),
                  item: {
                    href: `/login/`,
                    label: _.Localize(`#global_menu_login_caps`),
                  },
                }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: (0, _.default)(`NB0Mn5wh2Yo-`, _(_)),
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `dogwewx8C8M-`,
                      children: [
                        (0, _.jsx)(`a`, {
                          className: `Iu4lgIr2a7s-`,
                          href: _(_),
                          children: (0, _.jsx)(_, {
                            playerLinkDetails: _,
                            statusPosition: `border`,
                            alt: ``,
                            role: `presentation`,
                            size: `Small`,
                            className: `WGjJBhzsjsk-`,
                          }),
                        }),
                        `\xA0`,
                        (0, _.jsx)(`a`, {
                          className: `S6zOvIteLXo-`,
                          href: _(_),
                          children: _.public_data?.persona_name,
                        }),
                      ],
                    }),
                    _ && (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              _.notifications &&
                (0, _.jsx)(_, {
                  navContent: {
                    label: `Notifications`,
                    href: ``,
                  },
                  labelAddition: (0, _.jsxs)(`div`, {
                    className: (0, _.default)(
                      `ukx8XIbMbTo-`,
                      _.notifications?.unread_count && `YIoGgjCNvis-`,
                    ),
                    children: [
                      _.notifications.unread_count > 0 &&
                        (0, _.jsx)(`span`, {
                          className: `O4xN7EkLl8M-`,
                        }),
                      (0, _.jsx)(`span`, {
                        className: `kLME5emTJD4-`,
                        children: _(_.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, _.jsx)(_, {
                    dynamicImport: async () =>
                      (
                        await _(
                          async () => {
                            let { GreenEnvelope: _ } = await import(
                              `./CPw6qE9A.js`
                            );
                            return {
                              GreenEnvelope: _,
                            };
                          },
                          __vite__mapDeps([1, 2, 3, 4]),
                          import.meta.url,
                        )
                      ).GreenEnvelope,
                    fallback: (0, _.jsx)(`div`, {}),
                    bResponsiveHeader: !0,
                    notifications: _.notifications,
                  }),
                }),
              _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    navContent: _,
                  },
                  _,
                ),
              ),
              (0, _.jsxs)(`div`, {
                className: `minor_menu_items`,
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          className: (0, _.default)(
                            `VqZq0261-H0-`,
                            `bcVkB8xUKZk-`,
                          ),
                          item: {
                            href: _.STORE_BASE_URL + `account`,
                            label: _.Localize(`#global_menu_account_details`),
                          },
                        }),
                        (0, _.jsx)(_, {
                          className: (0, _.default)(
                            `VqZq0261-H0-`,
                            `bcVkB8xUKZk-`,
                          ),
                          item: {
                            href: _.STORE_BASE_URL + `account/preferences`,
                            label: _.Localize(
                              `#global_menu_account_preferences`,
                            ),
                          },
                        }),
                      ],
                    }),
                  !_(_.EREALM) &&
                    (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)(`button`, {
                        className: (0, _.default)(
                          `VqZq0261-H0-`,
                          `bcVkB8xUKZk-`,
                        ),
                        onClick: () => _(!0),
                        children: _.Localize(`#global_menu_change_language`),
                      }),
                    }),
                  _ &&
                    (0, _.jsx)(`button`, {
                      className: (0, _.default)(`VqZq0261-H0-`, `bcVkB8xUKZk-`),
                      onClick: () => _(_.logoutPath),
                      children: _.Localize(`#global_menu_change_user`),
                    }),
                  !_(_.EREALM) &&
                    (0, _.jsx)(_, {
                      className: (0, _.default)(`VqZq0261-H0-`, `bcVkB8xUKZk-`),
                      item: {
                        href: _.STORE_BASE_URL + `mobile`,
                        label: _.Localize(`#global_menu_getmobileapp`),
                      },
                    }),
                  !_() &&
                    (0, _.jsx)(`button`, {
                      className: (0, _.default)(`VqZq0261-H0-`, `bcVkB8xUKZk-`),
                      onClick: _,
                      children: _.Localize(`#global_menu_view_desktop_website`),
                    }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`footer`, {
            className: _,
            children: _(_.EREALM) ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          open: _,
          onDismiss: () => _(!1),
          menuAction: _,
          changeLanguagePath: _,
          bLoggedIn: _ != null,
        }),
    ],
  });
}
function _(_) {
  let { fnRenderCustomHeader: _ = (_) => _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`header`, {
        className: (0, _.default)(_, _.className),
        children: [
          (0, _.jsxs)(`div`, {
            className: (0, _.default)(_, _.bWiderHeader && `C50-GV7vFck-`),
            children: [
              (0, _.jsx)(`a`, {
                href: _.STORE_BASE_URL,
                "aria-label": _.Localize(`#Aria_Steam_Home_Link`),
                className: _,
                children: (0, _.jsx)(`img`, {
                  src: _(_(_.EREALM) ? _ : _),
                  alt: _.Localize(`#Aria_Steam_Home_Link`),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, _.jsx)(_, {
                navContent: _.navContent,
              }),
              (0, _.jsx)(_, {
                globalActions: _.globalActions,
                userDetails: _.userDetails,
                notifications: _.notifications,
                changeLanguagePath: _.changeLanguagePath,
                logoutPath: _.logoutPath,
              }),
              (0, _.jsx)(_, {
                spoofing: _.spoofing,
                containerClassname: _.internalOptionsClassname,
                buttonClassName: _.internalOptionsButtonClassname,
                rgBetas: _.rgBetas,
              }),
              _.children,
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(`nav`, {
              children: [
                (0, _.jsxs)(`button`, {
                  className: _,
                  onClick: () => _(!0),
                  "aria-expanded": _,
                  "aria-label": _.Localize(`#Aria_Navigation`),
                  children: [
                    (0, _.jsx)(`img`, {
                      src: _(_),
                      alt: ``,
                      className: _,
                    }),
                    _.notifications?.unread_count !== 0 &&
                      (0, _.jsx)(`div`, {
                        className: `Zw6-HSkC3eM-`,
                        children: (0, _.jsx)(`div`, {
                          className: (0, _.default)(`Pp8YuIWJVEI-`),
                          children: (0, _.jsx)(`span`, {
                            className: `wrP3tE9OJHE-`,
                            children: _(_.notifications?.unread_count ?? 0),
                          }),
                        }),
                      }),
                  ],
                }),
                _(
                  (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL,
                    "aria-label": _.Localize(`#Aria_Steam_Home_Link`),
                    className: _,
                    children: (0, _.jsx)(`img`, {
                      src: _(_(_.EREALM) ? _ : _),
                      alt: _.Localize(`#Aria_Steam_Home_Link`),
                      height: 36,
                    }),
                  }),
                ),
              ],
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        ..._,
        open: _,
        onDismiss: () => _(!1),
      }),
    ],
  });
}
var _ = _({
    Arrow: () => _,
    BackgroundAnimation: () => _,
    BasicContextMenuContainer: () => _,
    BasicContextMenuHeader: () => _,
    BasicContextMenuHeaderShrinkableSpacing: () => _,
    BasicContextMenuModal: () => _,
    Capitalized: () => _,
    ContextMenuSeparator: () => _,
    Destructive: () => _,
    Emphasis: () => _,
    Focused: () => _,
    "ItemFocusAnim-darkGrey": () => _,
    "ItemFocusAnim-darkGreySettings": () => _,
    "ItemFocusAnim-darkerGrey": () => _,
    "ItemFocusAnim-darkerGrey-nocolor": () => _,
    "ItemFocusAnim-green": () => _,
    "ItemFocusAnim-grey": () => _,
    "ItemFocusAnim-translucent-white-10": () => _,
    "ItemFocusAnim-translucent-white-20": () => _,
    "ItemFocusAnimBorder-darkGrey": () => _,
    Label: () => _,
    MenuSectionHeader: () => _,
    Positive: () => _,
    Selected: () => _,
    SubMenu: () => _,
    UpperCase: () => _,
    active: () => _,
    contextMenu: () => _,
    contextMenuContents: () => _,
    contextMenuFade: () => _,
    contextMenuItem: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    focusAnimation: () => _,
    hasSubMenu: () => _,
    hoverAnimation: () => _,
    slideInAnimation: () => _,
  }),
  _ = `800ms`,
  _ = `zIqKYLyjLDE-`,
  _ = `QEqisB3QH6Y-`,
  _ = `_10VZDl1S08Y-`,
  _ = `l55Qe9TRfWE-`,
  _ = `P4ZPME0FQ0Q-`,
  _ = `J49QvnbmR4o-`,
  _ = `UsMszraE8Ts-`,
  _ = `_4opXG7WIDiM-`,
  _ = `SY8HeIZAWTY-`,
  _ = `ifEDAYoKQZA-`,
  _ = `c9cBCqvRKIo-`,
  _ = `N94BC56I6uk-`,
  _ = `_4-FaJ3cVKd8-`,
  _ = `_4Z62LmEDnlc-`,
  _ = `Ot2l8QCFbYw-`,
  _ = `O10dnuCtwuk-`,
  _ = `_9kFtKJpEINs-`,
  _ = `Ajs9PcIe9Ak-`,
  _ = `fj-p9B7Ar2Q-`,
  _ = `mZXAxtt8FmM-`,
  _ = `cPv4Xc7IDnQ-`,
  _ = `InE8BB-Fxp8-`,
  _ = `xJCVpcgk4LA-`,
  _ = `m93aoWJlOCE-`,
  _ = `YvNC8luwtfc-`,
  _ = `_5A0hah79ug8-`,
  _ = `Mal6k7DjPUQ-`,
  _ = `CT39We8M7uI-`,
  _ = `bESapfyiJAQ-`,
  _ = `YeVMYyR0HhM-`,
  _ = `_3h1WS4g7IRM-`,
  _ = `UDD33NXGwZo-`,
  _ = `mMTi3RvNMbc-`,
  _ = `HPrMq1RsxVs-`,
  _ = `D0Bepl124b8-`,
  _ = {
    "duration-app-launch": `800ms`,
    BasicContextMenuModal: _,
    BasicContextMenuHeader: _,
    BasicContextMenuHeaderShrinkableSpacing: _,
    BasicContextMenuContainer: _,
    slideInAnimation: _,
    contextMenu: _,
    contextMenuContents: _,
    hasSubMenu: _,
    contextMenuFade: _,
    contextMenuItem: _,
    Destructive: _,
    Positive: _,
    Emphasis: _,
    active: _,
    Selected: _,
    Focused: _,
    Capitalized: _,
    MenuSectionHeader: _,
    UpperCase: _,
    SubMenu: _,
    ContextMenuSeparator: _,
    Label: _,
    Arrow: _,
    BackgroundAnimation: _,
    "ItemFocusAnim-darkerGrey-nocolor": `YvNC8luwtfc-`,
    "ItemFocusAnim-darkerGrey": `_5A0hah79ug8-`,
    "ItemFocusAnim-darkGreySettings": `Mal6k7DjPUQ-`,
    "ItemFocusAnim-darkGrey": `CT39We8M7uI-`,
    "ItemFocusAnim-grey": `bESapfyiJAQ-`,
    "ItemFocusAnim-translucent-white-10": `YeVMYyR0HhM-`,
    "ItemFocusAnim-translucent-white-20": `_3h1WS4g7IRM-`,
    "ItemFocusAnimBorder-darkGrey": `UDD33NXGwZo-`,
    "ItemFocusAnim-green": `mMTi3RvNMbc-`,
    focusAnimation: _,
    hoverAnimation: _,
  };
function _(_) {
  let { managerOverride: _ } = _,
    _ = _(),
    _ = _ ?? _,
    _ = _();
  return (
    _(_.OnMenusChanged, _),
    (0, _.jsx)(_, {
      active: !!_.ActiveMenu,
      children: (0, _.jsx)(_, {
        ActiveMenu: _.ActiveMenu,
      }),
    })
  );
}
function _(_) {
  let { ActiveMenu: _ } = _,
    _ = _.useCallback(() => {
      _?.OnCancel();
    }, [_]);
  _.useEffect(() => () => _?.Hide(), [_]);
  let _ = [],
    _ = null;
  _(() => {
    for (let _ = _; _ && _.visible; _ = _.submenu)
      _.push(
        (0, _.jsx)(
          _,
          {
            instance: _,
          },
          _.key,
        ),
      ),
        (_ = _.label);
  });
  let _ = _.useCallback(
    (_) => {
      _.currentTarget == _.target && _();
    },
    [_],
  );
  return (0, _.jsx)(_, {
    padding: `none`,
    children: (0, _.jsxs)(`div`, {
      onClick: _,
      className: _(`BasicUIContextMenu`, _),
      children: [
        _ &&
          (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(`div`, {
              className: `QEqisB3QH6Y-`,
              children: _,
            }),
          }),
        (0, _.jsx)(_, {
          className: _,
          onCancelButton: _,
          onClick: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { instance: _ } = _,
    _ = _(),
    _ = _.useCallback(() => {
      _ && _.PlayNavSound(_.FailedNav);
    }, [_]),
    _ = _.useMemo(
      () => ({
        instance: _,
        styles: _,
        presentation: 1,
        callbacks: {
          onDisabledItemSelected: _,
        },
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.ReactElement,
    }),
  });
}
function _() {
  return _.useMemo(() => _(), []);
}
function _() {
  return function (_) {
    let {
        refNavTree: _,
        className: _,
        active: _,
        children: _,
        modalKey: _,
      } = _,
      _ = _.useRef(void 0);
    return (
      _(_, _, !0),
      (0, _.jsx)(_, {
        className: _,
        navTreeRef: _(_, _),
        modal: !0,
        enabled: _,
        navID: `ModalDialogOverlay_${_}`,
        children: _,
      })
    );
  };
}
function _(_) {
  let {
    className: _,
    onEscKeypress: _,
    padding: _ = `standard`,
    bGamepadUIScrollWithin: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    className: _(_, _ == `standard` && `OaiXfc-WlaQ-`, _ && `dz-Wyy2Ybkc-`, _),
    onCancelButton: _,
    focusableIfEmpty: !0,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _.useMemo(
    () => ({
      ModalPosition: _,
    }),
    [],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(),
    _ = _.useMemo(
      () => ({
        DropDownMenu: _,
        Content: _,
      }),
      [],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
        bUseDialogElement: !1,
        DialogWrapper: _,
        ContextMenuComponent: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = {
      bRenderOverlayAtRoot: !0,
      bUsePopups: !1,
      ..._,
    };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

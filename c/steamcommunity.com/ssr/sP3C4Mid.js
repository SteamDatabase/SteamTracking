function _(_) {
  return _;
}
function _(_, _, _) {
  if (typeof _ != `object` || !_) return;
  let _ = _.getMutationCache(),
    _ = _.getQueryCache(),
    _ =
      _?.defaultOptions?.deserializeData ??
      _.getDefaultOptions().hydrate?.deserializeData ??
      _,
    _ = _.mutations || [],
    _ = _.queries || [];
  _.forEach(({ state: _, ..._ }) => {
    _.build(
      _,
      {
        ..._.getDefaultOptions().hydrate?.mutations,
        ..._?.defaultOptions?.mutations,
        ..._,
      },
      _,
    );
  }),
    _.forEach(
      ({ queryKey: _, state: _, queryHash: _, meta: _, promise: _ }) => {
        let _ = _.get(_),
          _ = _.data === void 0 ? _.data : _(_.data);
        if (_) {
          if (_.state.dataUpdatedAt < _.dataUpdatedAt) {
            let { fetchStatus: _, ..._ } = _;
            _.setState({
              ..._,
              data: _,
            });
          }
        } else
          _ = _.build(
            _,
            {
              ..._.getDefaultOptions().hydrate?.queries,
              ..._?.defaultOptions?.queries,
              queryKey: _,
              queryHash: _,
              meta: _,
            },
            {
              ..._,
              data: _,
              fetchStatus: `idle`,
            },
          );
        if (_) {
          let _ = Promise.resolve(_).then(_);
          _.fetch(void 0, {
            initialPromise: _,
          });
        }
      },
    );
}
var _ = _(_(), 1),
  _ = ({ children: _, options: _ = {}, state: _, queryClient: _ }) => {
    let _ = _(_),
      [_, _] = _.useState(),
      _ = _.useRef(_);
    return (
      (_.current = _),
      _.useMemo(() => {
        if (_) {
          if (typeof _ != `object`) return;
          let _ = _.getQueryCache(),
            _ = _.queries || [],
            _ = [],
            _ = [];
          for (let _ of _) {
            let _ = _.get(_.queryHash);
            if (!_) _.push(_);
            else {
              let _ = _.state.dataUpdatedAt > _.state.dataUpdatedAt,
                _ = _?.find((_) => _.queryHash === _.queryHash);
              _ &&
                (!_ || _.state.dataUpdatedAt > _.state.dataUpdatedAt) &&
                _.push(_);
            }
          }
          _.length > 0 &&
            _(
              _,
              {
                queries: _,
              },
              _.current,
            ),
            _.length > 0 && _((_) => (_ ? [..._, ..._] : _));
        }
      }, [_, _, _]),
      _.useEffect(() => {
        _ &&
          (_(
            _,
            {
              queries: _,
            },
            _.current,
          ),
          _(void 0));
      }, [_, _]),
      _
    );
  },
  _;
function _() {
  (0, _.useEffect)(() => {
    if (_) return;
    window.history.scrollRestoration = `manual`;
    async function _(_) {
      _?.abort();
      let _ = (_ = new AbortController());
      if (!_.state) return;
      let _ = _(history.state);
      if (_ && _.loaderData)
        try {
          await _(_, _.signal), _ == _ && (_ = void 0);
          return;
        } catch (_) {
          console.error(_);
        }
      let _ = new URL(location.href);
      await _(_.pathname + _.search + _.hash, _?.signal),
        _ == _ && (_ = void 0);
    }
    return (
      window.addEventListener(`popstate`, _),
      () => {
        _?.abort(), window.removeEventListener(`popstate`, _);
      }
    );
  }, []);
  let _ = (0, _.useCallback)(() => {
    _({
      ..._(),
      scrollPosition: {
        _: window.scrollX,
        _: window.scrollY,
      },
    });
  }, []);
  _(window, `scroll`, _ ? void 0 : _);
}
async function _(_) {
  if (_) {
    _(_);
    return;
  }
  _?.abort(), (_ = new AbortController());
  try {
    await _(_, _.signal);
  } catch (_) {
    console.error(_), (location.href = _);
  }
  _ = void 0;
}
var _ = _();
function _(_) {
  let { clientAssets: _, staticMode: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.preload.map((_, _) =>
        _._ === `hmr`
          ? (0, _.jsx)(
              `script`,
              {
                type: `module`,
                src: _.href,
              },
              _,
            )
          : _._ === `script`
            ? _
              ? null
              : (0, _.jsx)(
                  `link`,
                  {
                    rel: `modulepreload`,
                    href: _.href,
                    _: _._,
                    integrity: _.integrity,
                    crossOrigin: `anonymous`,
                  },
                  _,
                )
            : (0, _.jsx)(
                `link`,
                {
                  rel: `preload`,
                  href: _.href,
                  _: _._,
                  integrity: _.integrity,
                  crossOrigin: `anonymous`,
                  precedence: `1`,
                },
                _,
              ),
      ),
      _.css.map((_, _) =>
        (0, _.jsx)(
          `link`,
          {
            rel: `stylesheet`,
            href: _.href,
            integrity: _.integrity,
            crossOrigin: `anonymous`,
            precedence: `1`,
          },
          _.href,
        ),
      ),
    ],
  });
}
var _ = _.createContext(void 0);
function _({ children: _, ..._ }) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_) throw Error(`Used <Head /> outside of router context`);
  let { metadata: _, clientAssets: _, nonce: _, snr: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`meta`, {
        name: `viewport`,
        content: `width=device-width,initial-scale=1${_.IN_MOBILE_WEBVIEW ? `,user-scalable=no` : ``}`,
      }),
      (0, _.jsx)(`meta`, {
        name: `theme-color`,
        content: `#171a21`,
      }),
      (0, _.jsx)(`meta`, {
        property: `csp-nonce`,
        nonce: _ ?? document.querySelector(`meta[property=csp-nonce]`)?.nonce,
      }),
      _?.title &&
        (0, _.jsx)(`title`, {
          children: _.title,
        }),
      _?.description &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`meta`, {
              name: `description`,
              content: _.description,
            }),
            (0, _.jsx)(`meta`, {
              property: `og:description`,
              content: _.description,
            }),
          ],
        }),
      _?.canonicalURL &&
        (0, _.jsx)(`link`, {
          rel: `canonical`,
          href: _.canonicalURL,
        }),
      (0, _.jsx)(_, {
        metadata: _,
      }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `valve:snr`,
          content: _.ComputeLinkPrefix(
            _.domain,
            _.controller,
            _.method,
            _.submethod,
          ),
        }),
      (0, _.jsx)(_, {
        clientAssets: _,
        staticMode: _.static,
      }),
    ],
  });
}
function _(_) {
  let { metadata: _ } = _;
  if (!_) return null;
  let {
      shareImage: _,
      shareTitle: _,
      shareImageAlt: _,
      canonicalURL: _,
      shareCardFormat: _,
      articlePublishedTime: _,
      articleModifiedTime: _,
    } = _,
    _ = (Array.isArray(_) ? _ : [_]).filter(Boolean),
    _ = !!(_ || _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:title`,
          content: _,
        }),
      _.map((_, _) =>
        (0, _.jsx)(
          `meta`,
          {
            property: `og:image`,
            content: _,
          },
          _,
        ),
      ),
      !!_.length &&
        _ &&
        (0, _.jsx)(`meta`, {
          name: `twitter:image:alt`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:url`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          name: `twitter:card`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:type`,
          content: `article`,
        }),
      !!_ &&
        (0, _.jsx)(`meta`, {
          property: `article:published_time`,
          content: _(_),
        }),
      !!_ &&
        (0, _.jsx)(`meta`, {
          property: `article:modified_time`,
          content: _(_),
        }),
    ],
  });
}
function _(_) {
  return new Date(_ * 1e3).toISOString();
}
function _(_) {
  let {
    pageRoutes: _,
    clientAssets: _,
    metadata: _,
    loaderData: _,
    renderContext: _,
    scrollPosition: _,
    onComplete: _,
    nonce: _,
    snr: _,
  } = _;
  return (
    _(),
    _(_),
    (0, _.useLayoutEffect)(() => {
      _ && _();
    }, [_]),
    (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(_, {
        renderContext: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            queryClient: _.queryClient,
            children: (0, _.jsx)(_, {
              state:
                typeof _.queryData == `string` ? _(_.queryData) : _.queryData,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    children: (0, _.jsx)(_, {
                      metadata: _,
                      clientAssets: _,
                      nonce: _,
                      snr: _,
                      children: (0, _.jsx)(_, {
                        ..._,
                        children: (0, _.jsxs)(_.Suspense, {
                          children: [
                            !1,
                            (0, _.jsx)(_, {
                              pageRoutes: _,
                              loaderData: _,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
var _ = _.Fragment;
function _(_) {
  (0, _.useLayoutEffect)(() => {
    if (_) {
      let { _: _ = 0, _: _ = 0 } = _;
      window.scrollTo(_, _);
    }
  }, [_]);
}
function _(_) {
  let { pageRoutes: _, index: _ = 0, loaderData: _ } = _,
    [_, ..._] = _,
    [_, ..._] = _;
  return (0, _.jsx)(_, {
    loaderData: _,
    _: _,
    children: (0, _.jsx)(_.Component, {
      children:
        _.length > 0 &&
        (0, _.jsx)(_, {
          pageRoutes: _,
          loaderData: _,
          index: _ + 1,
        }),
    }),
  });
}
function _(_, _, _, _, _, _, _, _) {
  let _ = _.filter((_) => _.route?.Component).map((_) => _.route);
  if (_.length === 0) throw `no routemodule with a component, can't render`;
  (window.SSR ??= {}),
    (window.SSR.clientAssets = _),
    _.startTransition(() => {
      window.SSR?.reactRoot?.render(
        (0, _.jsx)(_, {
          pageRoutes: _,
          clientAssets: _,
          loaderData: _,
          metadata: _,
          renderContext: _,
          scrollPosition: _,
          onComplete: _,
        }),
      );
    }),
    _.forEach((_) => {
      if (`onNavigate` in _) {
        let _ = _.onNavigate;
        _(_);
      }
    });
}
async function _(_, _, _ = !1) {
  let _,
    _,
    _,
    _,
    _,
    _ = [];
  (_ &&= (clearInterval(_), void 0)), (_ &&= (clearTimeout(_), void 0));
  let _ = 0;
  _(_),
    (_ = window.setTimeout(() => {
      _ = window.setInterval(() => {
        (_ += Math.random() * 0.01), _(_);
      }, 50);
    }, 200));
  let _ = [],
    _ = 0;
  try {
    for await (let _ of _(_, _))
      if (_)
        _ === void 0
          ? (_ = JSON.parse(_))
          : _ === void 0
            ? (_ = JSON.parse(_))
            : _ === void 0
              ? (_ = JSON.parse(_))
              : (_.push(_), (_ = _.length / (_ || 1)), _(_));
      else {
        _ = JSON.parse(_);
        let _ = await _(_);
        (_ = _.cssPromises), (_ = _.routeModules), (_ = _.routeCount);
      }
    await Promise.all(_);
  } catch (_) {
    if (_ instanceof DOMException && _.name === `AbortError`) _(1);
    else throw _;
  }
  if (
    ((_ &&= (clearInterval(_), void 0)),
    (_ &&= (clearTimeout(_), void 0)),
    _?.aborted)
  )
    return;
  let _ = await Promise.all(_.map(_)),
    _ = {
      _: 0,
      _: 0,
    },
    _ = {
      assetData: _,
      metadata: _,
      snr: _,
      loaderData: _,
      renderContext: _,
      scrollPosition: _,
    };
  _ ? _(_) : _(_, _), await new Promise((_) => _(_, _, _, _, _, _, _, _));
}
async function _(_, _) {
  let { cssPromises: _, routeModules: _ } = await _(_.assetData);
  _.aborted ||
    (await Promise.all(_),
    !_.aborted &&
      (await new Promise((_) =>
        _(
          _,
          _.assetData,
          _.loaderData ?? [],
          _.metadata,
          _.snr,
          _.renderContext,
          _.scrollPosition,
          _,
        ),
      )));
}
function _(_) {
  let _ = Math.min(_, 1).toString();
  document.body.style.setProperty(`--load-percentage`, _);
}
var _, _;
async function _(_) {
  let _ = 0,
    _ = _.css.map(
      (_) =>
        new Promise((_) => {
          let _ = _.href.replace(/\\/g, `/`);
          if (
            Array.from(document.head.querySelectorAll(`link[href]`)).some(
              (_) => _.href === _,
            )
          )
            return _();
          let _ = document.createElement(`link`);
          (_.rel = `preload`),
            (_._ = `style`),
            (_.href = _),
            (_.integrity = _.integrity),
            (_.crossOrigin = `anonymous`);
          function _() {
            document.head.removeChild(_), _();
          }
          _.addEventListener(`load`, _),
            _.addEventListener(`error`, _),
            document.head.appendChild(_);
        }),
    ),
    _ = await Promise.all(
      _._.map(async (_) => {
        let _ = await _(() => import(_.href), [], import.meta.url);
        return `route` in _ && _++, _;
      }),
    );
  return (
    await _(),
    {
      cssPromises: _,
      routeModules: _,
      routeCount: _,
    }
  );
}
function _(_) {
  _ && window.navigation.addEventListener(`navigate`, (_) => _(_, _));
}
function _(_) {
  window.navigation.navigate(_, {
    info: {
      SSR: !0,
      targetRoute: _,
    },
  });
}
function _(_, _, _) {
  let _ = _?.routes.find((_) => _.pathname.match(_.regex)),
    _ = _?.routes.find((_) => _.match(_.regex));
  return !_ || !_ ? !1 : _.hash === _.hash;
}
function _() {
  _({
    _: window.scrollX,
    _: window.scrollY,
  });
}
function _(_, _) {
  let _ =
    typeof _.info == `object` && _.info && `SSR` in _.info && _.info.SSR
      ? _.info
      : void 0;
  if (_.navigationType == `push`) {
    let _ = _?.targetRoute;
    if (!_) {
      let _ = new URL(_.destination.url);
      _(_, location.pathname, _) && (_ = `${_.pathname}${_.search}`);
    }
    if (_?.bSkipFetch) {
      _(),
        _.intercept({
          scroll: `manual`,
          focusReset: `manual`,
          async handler() {},
        });
      return;
    }
    _ &&
      _.canIntercept &&
      (console.assert(
        !!window.navigation.currentEntry?.getState(),
        `Beginning navigation but missing history state`,
      ),
      _(),
      _.intercept({
        scroll: `manual`,
        focusReset: `manual`,
        async handler() {
          await _(_, _.signal, !0);
        },
      }));
  } else if (_.navigationType == `traverse`) {
    let _ = _(_.destination.getState());
    _ && _.loaderData
      ? (_(),
        _.intercept({
          scroll: `manual`,
          async handler() {
            await _(_, _.signal);
          },
        }))
      : console.assert(!1, `Traversal with no state available`);
  } else if (_.navigationType == `replace`) {
    let _ = _();
    if (_ && !_)
      _.intercept({
        async handler() {
          _((_) => ({
            ..._,
            pageRoute: _,
          }));
        },
        focusReset: `manual`,
      });
    else if (_) {
      let _ = !!_?.targetRoute;
      _.intercept({
        async handler() {
          _ && (await _(_.targetRoute, _.signal, !0));
        },
        focusReset: `manual`,
        scroll: _ ? void 0 : `manual`,
      });
    }
  } else
    _.navigationType == `reload`
      ? _()
      : _(_.navigationType, `unhandled navigation type: ${_.navigationType}`);
}
export { _, _, _, _, _ };

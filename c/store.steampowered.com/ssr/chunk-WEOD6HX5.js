import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
function _(_, _) {
  return {
    _: _._.map((_) => ({
      ..._,
      href: _ + _.href,
    })),
    css: _.css.map((_) => ({
      ..._,
      href: _ + _.href,
    })),
    preload: _.preload.map((_) => ({
      ..._,
      href: _ + _.href,
    })),
  };
}
var _ = _(_(), 1);
function _(_) {
  let { clientAssets: _, staticMode: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.preload.map((_, _) =>
        _._ === "hmr"
          ? (0, _.jsx)(
              "script",
              {
                type: "module",
                src: _.href,
              },
              _,
            )
          : _._ === "script"
            ? _
              ? null
              : (0, _.jsx)(
                  "link",
                  {
                    rel: "modulepreload",
                    href: _.href,
                    _: _._,
                    integrity: _.integrity,
                    crossOrigin: "anonymous",
                  },
                  _,
                )
            : (0, _.jsx)(
                "link",
                {
                  rel: "preload",
                  href: _.href,
                  _: _._,
                  integrity: _.integrity,
                  crossOrigin: "anonymous",
                  precedence: "1",
                },
                _,
              ),
      ),
      _.css.map((_, _) =>
        (0, _.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: _.href,
            integrity: _.integrity,
            crossOrigin: "anonymous",
            precedence: "1",
          },
          _.href,
        ),
      ),
    ],
  });
}
function _(_) {
  let _ = _().static;
  return Object.values(_.loaderDataClientReferences).map((_) =>
    (0, _.jsx)(
      _,
      {
        clientAssets: _(_.PUBLIC_PATH + "/", _),
        staticMode: _,
      },
      _._,
    ),
  );
}
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.default.createContext(void 0);
function _({ children: _, ..._ }) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_) throw new Error("Used <Head /> outside of router context");
  let { metadata: _, clientAssets: _, loaderData: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1${_.IN_MOBILE_WEBVIEW ? ",user-scalable=no" : ""}`,
      }),
      (0, _.jsx)("meta", {
        name: "theme-color",
        content: "#171a21",
      }),
      _?.title &&
        (0, _.jsx)("title", {
          children: _.title,
        }),
      _?.description &&
        (0, _.jsx)("meta", {
          property: "description",
          content: _.description,
        }),
      _?.shareTitle &&
        (0, _.jsx)("meta", {
          property: "og:title",
          content: _.shareTitle,
        }),
      _?.shareImage &&
        (0, _.jsx)("meta", {
          property: "og:image",
          content: _.shareImage,
        }),
      _?.snr &&
        (0, _.jsx)("meta", {
          property: "valve:snr",
          content: _.ComputeLinkPrefix(
            _.snr.domain,
            _.snr.controller,
            _.snr.method,
            _.snr.submethod,
          ),
        }),
      (0, _.jsx)(_, {
        clientAssets: _,
        staticMode: _.static,
      }),
    ],
  });
}
var _ = _(_(), 1);
function _(_) {
  let {
    pageRoutes: _,
    clientAssets: _,
    metadata: _,
    loaderData: _,
    renderContext: _,
    loaderDataClientReferences: _ = {},
    scrollPosition: _,
  } = _;
  return (
    _(),
    _(_),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          loaderDataClientReferences: _,
        }),
        (0, _.jsx)(_, {
          renderContext: _,
          children: (0, _.jsx)(_, {
            queryClient: _.queryClient,
            children: (0, _.jsx)(_, {
              state:
                typeof _.queryData == "string" ? _(_.queryData) : _.queryData,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  metadata: _,
                  clientAssets: _,
                  loaderData: _,
                  children: (0, _.jsx)(_, {
                    ..._?.snr,
                    children: (0, _.jsx)(_, {
                      pageRoutes: _,
                      loaderData: _,
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      ],
    })
  );
}
function _(_) {
  (0, _.useLayoutEffect)(() => {
    let { _: _ = 0, _: _ = 0 } = _ ?? {};
    window.scrollTo(_, _);
  }, [_]);
}
function _(_) {
  let { pageRoutes: _, index: _ = 0, loaderData: _ } = _,
    [_, ..._] = _,
    [_, ..._] = _,
    _;
  return (
    _.length === 0 && (_ = history.state?._),
    (0, _.jsx)(
      _,
      {
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
      },
      _,
    )
  );
}
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_, _, _, _, _, _) {
  let _ = _.filter((_) => _.route?.Component).map((_) => _.route);
  if (_.length === 0) throw "no routemodule with a component, can't render";
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
        }),
      );
    }),
    _.forEach((_) => {
      if ("onNavigate" in _) {
        let _ = _.onNavigate;
        _(_);
      }
    });
}
async function _(_, _) {
  let _,
    _,
    _,
    _,
    _ = [];
  _ && (clearInterval(_), (_ = void 0)), _ && (clearTimeout(_), (_ = void 0));
  let _ = 0;
  _(_),
    (_ = window.setTimeout(() => {
      _ = window.setInterval(() => {
        (_ += Math.random() * 0.01), _(_);
      }, 50);
    }, 200));
  let _ = [],
    _ = 0,
    _ = (history.state?._ ?? -1) + 1;
  try {
    for await (let _ of _(_, _))
      if (_)
        _ === void 0
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
    if (_ instanceof DOMException && _.name === "AbortError") _(1);
    else throw _;
  }
  if (
    (_ && (clearInterval(_), (_ = void 0)),
    _ && (clearTimeout(_), (_ = void 0)),
    _?.aborted)
  )
    return;
  let _ = await Promise.all(_.map(_)),
    _ = {
      _: 0,
      _: 0,
    };
  _(
    {
      assetData: _,
      metadata: _,
      loaderData: _,
      renderContext: _,
      _: _,
      scrollPosition: _,
    },
    _,
  ),
    _(_, _, _, _, _, _);
}
async function _(_) {
  let { cssPromises: _, routeModules: _ } = await _(_.assetData);
  await Promise.all(_),
    _(
      _,
      _.assetData,
      _.loaderData ?? [],
      _.metadata,
      _.renderContext,
      _.scrollPosition,
    );
}
function _(_) {
  let _ = Math.min(_, 1).toString();
  document.body.style.setProperty("--load-percentage", _);
}
var _, _;
async function _(_) {
  let _ = 0,
    _ = _.css.map(
      (_) =>
        new Promise((_) => {
          let _ = _.href.replace(/\\/g, "/");
          if (
            Array.from(document.head.querySelectorAll("link[href]")).some(
              (_) => _.href === _,
            )
          )
            return _();
          let _ = document.createElement("link");
          (_.rel = "preload"),
            (_._ = "style"),
            (_.href = _),
            (_.integrity = _.integrity),
            (_.crossOrigin = "anonymous");
          function _() {
            document.head.removeChild(_), _();
          }
          _.addEventListener("load", _),
            _.addEventListener("error", _),
            document.head.appendChild(_);
        }),
    ),
    _ = await Promise.all(
      _._.map(async (_) => {
        let _ = await import(_.href);
        return "route" in _ && _++, _;
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
var _ = _(_(), 1);
var _;
function _() {
  (0, _.useEffect)(() => {
    window.history.scrollRestoration = "manual";
    async function _(_) {
      if ((_?.abort(), (_ = new AbortController()), !_.state)) return;
      if (_(history.state) && history.state.loaderData)
        try {
          await _(history.state), (_ = void 0);
          return;
        } catch (_) {
          console.error(_);
        }
      let _ = new URL(location.href);
      await _(_.pathname + _.search + _.hash, _?.signal), (_ = void 0);
    }
    return (
      window.addEventListener("popstate", _),
      () => {
        _?.abort(), window.removeEventListener("popstate", _);
      }
    );
  }, []),
    _(
      window,
      "scroll",
      (0, _.useCallback)(() => {
        window.history.replaceState(
          {
            ...(window.history.state || {}),
            scrollPosition: {
              _: window.scrollX,
              _: window.scrollY,
            },
          },
          "",
        );
      }, []),
    );
}
async function _(_) {
  _?.abort(), (_ = new AbortController());
  try {
    await _(_, _.signal);
  } catch (_) {
    console.error(_), (location.href = _);
  }
  _ = void 0;
}
export { _, _, _, _ };

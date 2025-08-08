import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
var _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
  _ = document.cookie
    .split(";")
    .find((_) => _.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  _ = _ && decodeURIComponent(_);
function _() {
  document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
_();
var _ = _(_(), 1);
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.default.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return (
    _.push(_.substr(_)), _.default.createElement(_.default.Fragment, null, ..._)
  );
}
function _(_) {
  return _.toLocaleString(_());
}
var _ = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function _() {
  return _().languages[0];
}
function _(_, _, _) {
  let _;
  _ === void 0 || _ === !0 || _ === !1
    ? (_ = {
        weekday: _ ? "long" : "short",
        year: _ ? void 0 : "numeric",
      })
    : (_ = _);
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: "numeric",
      month: "short",
      day: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  let _ = new Date();
  _.setHours(15);
  let _ = _.toLocaleTimeString(_, {
      hour: "numeric",
    }),
    _ = _.toLocaleTimeString(_, {
      hour: "numeric",
      hour12: !1,
    });
  return _ == _;
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23",
    },
    _ = {
      hour: "numeric",
      minute: "2-digit",
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = (0, _.createContext)({});
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.renderContext,
    children: _.children,
  });
}
function _() {
  return (0, _.useContext)(_);
}
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
            ? _.static
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
          },
          _.href,
        ),
      ),
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
  } = _;
  return (
    _(),
    (0, _.jsx)(_, {
      renderContext: _,
      children: (0, _.jsx)(_, {
        queryClient: _.queryClient,
        children: (0, _.jsx)(_, {
          state: typeof _.queryData == "string" ? _(_.queryData) : _.queryData,
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
    })
  );
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
var _ = _(_(), 1);
function _(_) {
  return (
    _ !== null && typeof _ == "object" && "assetData" in _ && "metadata" in _
  );
}
function _(_, _) {
  history.pushState(_, "", _);
}
function _(_) {
  history.replaceState(
    {
      ...history.state,
      ..._,
    },
    "",
  );
}
function _() {
  if (_(history.state)) return history.state;
}
var _;
function _() {
  (0, _.useEffect)(() => {
    async function _(_) {
      if (
        (_?.abort(),
        (_ = new AbortController()),
        _(history.state) && history.state.loaderData)
      )
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
  }, []);
}
function _(_, _, _, _, _) {
  let _ = _.filter((_) => _.route?.Component).map((_) => _.route);
  if (_.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = _),
    (0, _.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, _.jsx)(_.StrictMode, {
          children: (0, _.jsx)(_, {
            pageRoutes: _,
            clientAssets: _,
            loaderData: _,
            metadata: _,
            renderContext: _,
          }),
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
async function _(_) {
  let { cssPromises: _, routeModules: _ } = await _(_.assetData);
  await Promise.all(_),
    _(_, _.assetData, _.loaderData ?? [], _.metadata, _.renderContext);
}
function _(_) {
  let _ = Math.min(_, 1).toString();
  document.body.style.setProperty("--load-percentage", _);
}
var _, _;
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
  let _ = await Promise.all(_.map(_));
  _(
    {
      assetData: _,
      metadata: _,
      loaderData: _,
      renderContext: _,
      _: _,
    },
    _,
  ),
    _(_, _, _, _, _);
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
var _ = _(_(), 1);
function _(_) {
  switch (_) {
    case 0:
      return Uint8Array;
    case 1:
      return Int8Array;
    case 2:
      return Uint8ClampedArray;
    case 3:
      return Int16Array;
    case 4:
      return Uint16Array;
    case 5:
      return Int32Array;
    case 6:
      return Uint32Array;
    case 7:
      return Float32Array;
    case 8:
      return Float64Array;
    case 9:
      return Set;
    case 10:
      return Map;
  }
}
function _(_) {
  return JSON.parse(_, (_, _) => {
    if (_ && typeof _ == "object" && "_t" in _) {
      let _ = _(_._);
      return _ ? new _(_._) : _;
    }
    return _;
  });
}
function _(_) {
  return _ ? _(_) : null;
}
var _ = Symbol.for("No loader context"),
  _ = (0, _.createContext)(_);
function _(_) {
  let [_, _] = (0, _.useState)(_.loaderData),
    [_, _] = (0, _.useState)(),
    _ = (0, _.useCallback)(
      async (_) => {
        let _ = new URL(location.href),
          _ = _.pathname + _.search + _.hash,
          _ = _ ? JSON.stringify(_) : "",
          _ = _ + _;
        if (_) {
          if (_.fetchKey === _) return _.promise;
          _.abortController.abort();
        }
        let _ = new AbortController(),
          _ = _(_, _._, _ ? _ : void 0, _.signal);
        _({
          promise: _,
          abortController: _,
          fetchKey: _,
        });
        try {
          let _ = await _;
          return _(_), _(void 0), _;
        } catch (_) {
          if (!_.signal.aborted) throw (_(void 0), _);
        }
        return _;
      },
      [_._, _],
    );
  return (
    (0, _.useEffect)(() => {
      _(_.loaderData);
      {
        let _ = _();
        if (_?.loaderData) {
          let _ = [..._.loaderData];
          (_[_._] = _.loaderData),
            _({
              ..._,
              loaderData: _,
            });
        }
      }
    }, [_.loaderData, _._]),
    (0, _.jsx)(_.Provider, {
      value: {
        loaderData: _,
        refetchFn: _,
        fetchState: _,
      },
      children: _.children,
    })
  );
}
function _(_) {
  let _ = (0, _.useContext)(_);
  if (_ === _) throw `Used ${_} outside of LoaderContext`;
  return _;
}
function _() {
  return _("useLoaderData").loaderData;
}
function _() {
  return _("useRefetchLoader").refetchFn;
}
var _ = "x-valve-request-type",
  _ = "x-valve-loader-index",
  _ = "x-valve-refetch-payload";
async function* _(_) {
  let _ = "";
  for (;;) {
    let { done: _, value: _ } = await _.read();
    if (_ || _ === void 0) break;
    _ += _;
    let _ = _.split(`
`);
    if (_.length !== 0) {
      _ = _.pop();
      for (let _ of _) yield _;
    }
  }
  _ !== "" && (yield _);
}
async function* _(_, _, _) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-XXXXXXXX.js"));
  let _ = new Headers(_);
  _.append(_, "routeData");
  let _ = (
    await fetch(_, {
      credentials: "same-origin",
      headers: _,
      signal: _,
    })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!_) throw "no response body reader";
  for await (let _ of _(_)) {
    if (_?.aborted) return;
    yield _;
  }
}
async function _(_, _, _, _) {
  let _ = [],
    _ = _.map((_) => [_, _.toString()]);
  _ !== void 0 && _.push([_, _]);
  for await (let _ of _(_, _, _)) _.push(_(_));
  return _;
}
async function _(_, _, _, _) {
  return (await _(_, [_], _, _))[0];
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

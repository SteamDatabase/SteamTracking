import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
var _ = "./strings_arabic-XXXXXXXX.json";
var _ = "./strings_brazilian-XXXXXXXX.json";
var _ = "./strings_bulgarian-XXXXXXXX.json";
var _ = "./strings_czech-XXXXXXXX.json";
var _ = "./strings_danish-XXXXXXXX.json";
var _ = "./strings_dutch-XXXXXXXX.json";
var _ = "./strings_english-XXXXXXXX.json";
var _ = "./strings_finnish-XXXXXXXX.json";
var _ = "./strings_french-XXXXXXXX.json";
var _ = "./strings_german-XXXXXXXX.json";
var _ = "./strings_greek-XXXXXXXX.json";
var _ = "./strings_hungarian-XXXXXXXX.json";
var _ = "./strings_indonesian-XXXXXXXX.json";
var _ = "./strings_italian-XXXXXXXX.json";
var _ = "./strings_japanese-XXXXXXXX.json";
var _ = "./strings_korean-XXXXXXXX.json";
var _ = "./strings_latam-XXXXXXXX.json";
var _ = "./strings_norwegian-XXXXXXXX.json";
var _ = "./strings_polish-XXXXXXXX.json";
var _ = "./strings_portuguese-XXXXXXXX.json";
var _ = "./strings_romanian-XXXXXXXX.json";
var _ = "./strings_russian-XXXXXXXX.json";
var _ = "./strings_sc_schinese-XXXXXXXX.json";
var _ = "./strings_schinese-XXXXXXXX.json";
var _ = "./strings_spanish-XXXXXXXX.json";
var _ = "./strings_swedish-XXXXXXXX.json";
var _ = "./strings_tchinese-XXXXXXXX.json";
var _ = "./strings_thai-XXXXXXXX.json";
var _ = "./strings_turkish-XXXXXXXX.json";
var _ = "./strings_ukrainian-XXXXXXXX.json";
var _ = "./strings_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.korean = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.sc_schinese = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
var _ = _(_(), 1),
  _ = (0, _.createContext)(-1),
  _ = class extends _.Component {
    state = {};
    static getDerivedStateFromError(_) {
      return _ instanceof Error
        ? {
            error: {
              message: _.message,
            },
          }
        : {
            error: JSON.parse(JSON.stringify(_)),
          };
    }
    static getDerivedStateFromProps(_, _) {
      return _.renderContext != _.renderContext
        ? {
            renderContext: _.renderContext,
            error: void 0,
          }
        : null;
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : (0, _.jsx)(this.props.RenderErrorComponent, {
            error: this.state.error,
            className: this.props.errorClassName,
          });
    }
  };
function _(_) {
  let _ = _(),
    _ = (0, _.useContext)(_) + 1;
  (_.deepestRenderedErrorBoundaryId ?? -1) < _ &&
    (_.deepestRenderedErrorBoundaryId = _);
  let _ = _.RenderErrorComponent ?? _;
  return _.error && _ === _.deepestRenderedErrorBoundaryId
    ? (0, _.jsx)(_, {
        error: _.error,
        className: _.errorClassName,
      })
    : (0, _.jsx)(_.Provider, {
        value: _,
        children: (0, _.jsx)(_, {
          RenderErrorComponent: _,
          errorClassName: _.errorClassName,
          renderContext: _,
          children: _.children,
        }),
      });
}
function _(_) {
  let _ = _.error;
  return typeof _ != "object" || _ === null
    ? (0, _.jsx)("div", {
        className: _.className,
        children: (0, _.jsx)(_, {
          hasDetails: !1,
        }),
      })
    : "localizedErrorMessage" in _ && typeof _.localizedErrorMessage == "string"
      ? (0, _.jsxs)("div", {
          className: _.className,
          children: [
            (0, _.jsx)(_, {
              hasDetails: !0,
            }),
            (0, _.jsx)("span", {
              children: _.localizedErrorMessage,
            }),
          ],
        })
      : "stack" in _ && typeof _.stack == "string"
        ? (0, _.jsxs)("div", {
            className: _.className,
            children: [
              (0, _.jsx)(_, {
                hasDetails: !0,
              }),
              (0, _.jsx)("pre", {
                children: _.stack,
              }),
            ],
          })
        : (0, _.jsx)("div", {
            className: _.className,
            children: (0, _.jsx)(_, {
              hasDetails: !1,
            }),
          });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("span", {
        children: _.Localize("#SomethingWentWrong_title"),
      }),
      _.hasDetails
        ? (0, _.jsx)("p", {
            children: _.Localize("#SomethingWentWrong_subtitle_withDetails"),
          })
        : (0, _.jsx)("p", {
            children: _.Localize("#SomethingWentWrong_subtitle_noDetails"),
          }),
    ],
  });
}
export { _ };

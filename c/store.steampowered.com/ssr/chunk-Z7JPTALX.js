import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_());
function _(_) {
  return function (_) {
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
      }),
    });
  };
}
var _ = class _ extends _.Component {
  state = {};
  constructor(_) {
    super(_), (this.state.lastErrorKey = _.errorKey);
  }
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(_) {
    this.sm_ErrorReportingStore = _;
  }
  componentDidCatch(_, _) {
    let _ = _.sm_ErrorReportingStore;
    _
      ? _.ReportError(_, {
          strComponentStack: _.componentStack || void 0,
        }).then(
          (_) =>
            _ &&
            this.setState({
              identifierHash: _.identifierHash,
            }),
        )
      : console.warn(
          "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
        ),
      this.setState({
        error: {
          error: _,
          info: _,
        },
        lastErrorKey: this.props.errorKey,
      });
  }
  Reset() {
    this.setState({
      error: void 0,
    });
  }
  render() {
    let { children: _, fallback: _, errorKey: _ } = this.props,
      { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
    return _ && _ == _
      ? _ !== void 0
        ? typeof _ == "function"
          ? _(_.error)
          : _
        : _.sm_ErrorReportingStore && _.sm_ErrorReportingStore.reporting_enabled
          ? (0, _.jsx)(_, {
              error: _,
              identifierHash: _,
              store: _.sm_ErrorReportingStore,
              onRefresh: this.Reset,
            })
          : (0, _.jsx)(_, {
              error: _,
              onDismiss: this.Reset,
            })
      : _ || null;
  }
};
_([_], _.prototype, "Reset", 1);
var _ = _,
  _ = ({ error: _, onDismiss: _ }) => {
    let _ = _.error ? _.error.stack : "Stack missing",
      _ = _.info ? _.info.componentStack : "",
      _ = (_.error && _.error.message) || "unknown error";
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: ['Error: "', _, '"'],
        }),
        "   ",
        (0, _.jsx)("span", {
          style: {
            textDecoration: "underline",
            cursor: "pointer",
          },
          onClick: _,
          children: "(x) Dismiss",
        }),
        (0, _.jsx)("br", {}),
        (0, _.jsx)(_, {
          children: _,
        }),
        (0, _.jsxs)(_, {
          children: ["The error occurred while rendering:", _],
        }),
      ],
    });
  },
  _ = (_) => {
    let { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
      _ = (_.error && _.error.message) || "unknown error",
      _ = `${_.product}_${_.version}_${_}`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            "Something went wrong while displaying this content. ",
            (0, _.jsx)("span", {
              style: {
                textDecoration: "underline",
                cursor: "pointer",
              },
              onClick: _,
              children: "Refresh",
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          children: ["Error Reference: ", _],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    });
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)("div", {
      style: {
        overflow: "auto",
        marginLeft: "15px",
        color: "white",
        fontSize: "16px",
        userSelect: "auto",
        backgroundColor: "black",
      },
      className: "ErrorBoundary",
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)("h1", {
      style: {
        fontSize: "20px",
        display: "inline-block",
        marginTop: "15px",
        userSelect: "auto",
      },
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)("pre", {
      style: {
        marginTop: "15px",
        opacity: 0.7,
        userSelect: "auto",
      },
      children: _,
    });
export { _, _ };

const CLSTAMP = 9763432;

import { s as f } from "./chunk-JZKXQUY5.js";
import { p as u } from "./chunk-3B5KHLRS.js";
import { a as g } from "./chunk-A7PP3V6U.js";
import { e as p, g as R } from "./chunk-HLHOAM4O.js";
var E = p(g());
var r = p(u());
function C(e) {
  return function (o) {
    return (0, r.jsx)(l, { children: (0, r.jsx)(e, { ...o }) });
  };
}
var a = class a extends E.Component {
  state = {};
  reactErrorHandler = void 0;
  constructor(t) {
    super(t), (this.state.lastErrorKey = t.errorKey);
  }
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(t) {
    this.sm_ErrorReportingStore = t;
  }
  componentDidCatch(t, o) {
    let i = a.sm_ErrorReportingStore;
    i
      ? i
          .ReportError(t)
          .then((n) => n && this.setState({ identifierHash: n.identifierHash }))
      : console.warn(
          "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
        ),
      this.setState({
        error: { error: t, info: o },
        lastErrorKey: this.props.errorKey,
      });
  }
  Reset() {
    this.setState({ error: void 0 });
  }
  render() {
    let { children: t, fallback: o, errorKey: i } = this.props,
      { error: n, identifierHash: c, lastErrorKey: d } = this.state;
    return n && i == d
      ? o !== void 0
        ? typeof o == "function"
          ? o(n.error)
          : o
        : a.sm_ErrorReportingStore && a.sm_ErrorReportingStore.reporting_enabled
          ? (0, r.jsx)(y, {
              error: n,
              identifierHash: c,
              store: a.sm_ErrorReportingStore,
              onRefresh: this.Reset,
            })
          : (0, r.jsx)(m, { error: n, onDismiss: this.Reset })
      : t || null;
  }
};
R([f], a.prototype, "Reset", 1);
var l = a,
  m = ({ error: e, onDismiss: t }) => {
    let o = e.error ? e.error.stack : "Stack missing",
      i = e.info ? e.info.componentStack : "",
      n = (e.error && e.error.message) || "unknown error";
    return (0, r.jsxs)(h, {
      children: [
        (0, r.jsxs)(S, { children: ['Error: "', n, '"'] }),
        "   ",
        (0, r.jsx)("span", {
          style: { textDecoration: "underline", cursor: "pointer" },
          onClick: t,
          children: "(x) Dismiss",
        }),
        (0, r.jsx)("br", {}),
        (0, r.jsx)(s, { children: o }),
        (0, r.jsxs)(s, {
          children: ["The error occurred while rendering:", i],
        }),
      ],
    });
  },
  y = (e) => {
    let { error: t, onRefresh: o, identifierHash: i, store: n } = e,
      c = (t.error && t.error.message) || "unknown error",
      d = `${n.product}_${n.version}_${i}`;
    return (0, r.jsxs)(h, {
      children: [
        (0, r.jsxs)(S, {
          children: [
            "Something went wrong while displaying this content. ",
            (0, r.jsx)("span", {
              style: { textDecoration: "underline", cursor: "pointer" },
              onClick: o,
              children: "Refresh",
            }),
          ],
        }),
        (0, r.jsxs)(s, { children: ["Error Reference: ", d] }),
        (0, r.jsx)(s, { children: c }),
      ],
    });
  },
  h = ({ children: e }) =>
    (0, r.jsx)("div", {
      style: {
        overflow: "auto",
        marginLeft: "15px",
        color: "white",
        fontSize: "16px",
        userSelect: "auto",
        backgroundColor: "black",
      },
      className: "ErrorBoundary",
      children: e,
    }),
  S = ({ children: e }) =>
    (0, r.jsx)("h1", {
      style: {
        fontSize: "20px",
        display: "inline-block",
        marginTop: "15px",
        userSelect: "auto",
      },
      children: e,
    }),
  s = ({ children: e }) =>
    (0, r.jsx)("pre", {
      style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" },
      children: e,
    });
export { C as a, l as b };

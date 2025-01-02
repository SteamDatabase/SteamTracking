const CLSTAMP = 9436633;

import { q as d } from "./chunk-ZMMFZQH3.js";
import { l as a, m as h } from "./chunk-6MX6RJBJ.js";
import { d as s, e as g } from "./chunk-ZNRRU3QM.js";
function k(...t) {
  return t.reduce(
    (e, r) =>
      r
        ? typeof r == "string"
          ? e
            ? `${e} ${r}`
            : r
          : typeof r == "object"
            ? e
              ? `${e} ${S(r)}`
              : S(r)
            : e
        : e,
    "",
  );
}
function S(t) {
  return Object.keys(t).reduce(
    (e, r) => (t[r] ? (e ? `${e} ${r}` : r) : e),
    "",
  );
}
var m = s(a());
var p = s(a());
var b = s(a());
var R = s(a()),
  y = s(a());
var n = s(h());
function Y(t) {
  return function (r) {
    return (0, n.jsx)(E, { children: (0, n.jsx)(t, { ...r }) });
  };
}
var c = class c extends m.Component {
  state = {};
  reactErrorHandler = void 0;
  constructor(e) {
    super(e), (this.state.lastErrorKey = e.errorKey);
  }
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(e) {
    this.sm_ErrorReportingStore = e;
  }
  componentDidCatch(e, r) {
    let i = c.sm_ErrorReportingStore;
    i
      ? i
          .ReportError(e)
          .then((o) => o && this.setState({ identifierHash: o.identifierHash }))
      : console.warn(
          "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
        ),
      this.setState({
        error: { error: e, info: r },
        lastErrorKey: this.props.errorKey,
      });
  }
  Reset() {
    this.setState({ error: void 0 });
  }
  render() {
    let { children: e, fallback: r, errorKey: i } = this.props,
      { error: o, identifierHash: f, lastErrorKey: u } = this.state;
    return o && i == u
      ? r !== void 0
        ? typeof r == "function"
          ? r(o.error)
          : r
        : c.sm_ErrorReportingStore && c.sm_ErrorReportingStore.reporting_enabled
          ? (0, n.jsx)(T, {
              error: o,
              identifierHash: f,
              store: c.sm_ErrorReportingStore,
              onRefresh: this.Reset,
            })
          : (0, n.jsx)(x, { error: o, onDismiss: this.Reset })
      : e || null;
  }
};
g([d], c.prototype, "Reset", 1);
var E = c,
  x = ({ error: t, onDismiss: e }) => {
    let r = t.error ? t.error.stack : "Stack missing",
      i = t.info ? t.info.componentStack : "",
      o = (t.error && t.error.message) || "unknown error";
    return (0, n.jsxs)(C, {
      children: [
        (0, n.jsxs)(v, { children: ['Error: "', o, '"'] }),
        "   ",
        (0, n.jsx)("span", {
          style: { textDecoration: "underline", cursor: "pointer" },
          onClick: e,
          children: "(x) Dismiss",
        }),
        (0, n.jsx)("br", {}),
        (0, n.jsx)(l, { children: r }),
        (0, n.jsxs)(l, {
          children: ["The error occurred while rendering:", i],
        }),
      ],
    });
  },
  T = (t) => {
    let { error: e, onRefresh: r, identifierHash: i, store: o } = t,
      f = (e.error && e.error.message) || "unknown error",
      u = `${o.product}_${o.version}_${i}`;
    return (0, n.jsxs)(C, {
      children: [
        (0, n.jsxs)(v, {
          children: [
            "Something went wrong while displaying this content. ",
            (0, n.jsx)("span", {
              style: { textDecoration: "underline", cursor: "pointer" },
              onClick: r,
              children: "Refresh",
            }),
          ],
        }),
        (0, n.jsxs)(l, { children: ["Error Reference: ", u] }),
        (0, n.jsx)(l, { children: f }),
      ],
    });
  },
  C = ({ children: t }) =>
    (0, n.jsx)("div", {
      style: {
        overflow: "auto",
        marginLeft: "15px",
        color: "white",
        fontSize: "16px",
        userSelect: "auto",
        backgroundColor: "black",
      },
      className: "ErrorBoundary",
      children: t,
    }),
  v = ({ children: t }) =>
    (0, n.jsx)("h1", {
      style: {
        fontSize: "20px",
        display: "inline-block",
        marginTop: "15px",
        userSelect: "auto",
      },
      children: t,
    }),
  l = ({ children: t }) =>
    (0, n.jsx)("pre", {
      style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" },
      children: t,
    });
export { k as a, Y as b, E as c };

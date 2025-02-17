const CLSTAMP = 9541513;

import { q as R } from "./chunk-E3Q3BISX.js";
import { m as u } from "./chunk-U3DDDKCE.js";
import { a as y } from "./chunk-AN2GMBNX.js";
import { d, e as E } from "./chunk-NZ23YTAN.js";
function b(...t) {
  return t.reduce(
    (r, e) =>
      e
        ? typeof e == "string"
          ? r
            ? `${r} ${e}`
            : e
          : typeof e == "object"
            ? r
              ? `${r} ${h(e)}`
              : h(e)
            : r
        : r,
    "",
  );
}
function h(t) {
  return Object.keys(t).reduce(
    (r, e) => (t[e] ? (r ? `${r} ${e}` : e) : r),
    "",
  );
}
var f = d(y());
var o = d(u());
function k(t) {
  return function (e) {
    return (0, o.jsx)(l, { children: (0, o.jsx)(t, { ...e }) });
  };
}
var s = class s extends f.Component {
  state = {};
  reactErrorHandler = void 0;
  constructor(r) {
    super(r), (this.state.lastErrorKey = r.errorKey);
  }
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(r) {
    this.sm_ErrorReportingStore = r;
  }
  componentDidCatch(r, e) {
    let i = s.sm_ErrorReportingStore;
    i
      ? i
          .ReportError(r)
          .then((n) => n && this.setState({ identifierHash: n.identifierHash }))
      : console.warn(
          "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
        ),
      this.setState({
        error: { error: r, info: e },
        lastErrorKey: this.props.errorKey,
      });
  }
  Reset() {
    this.setState({ error: void 0 });
  }
  render() {
    let { children: r, fallback: e, errorKey: i } = this.props,
      { error: n, identifierHash: c, lastErrorKey: p } = this.state;
    return n && i == p
      ? e !== void 0
        ? typeof e == "function"
          ? e(n.error)
          : e
        : s.sm_ErrorReportingStore && s.sm_ErrorReportingStore.reporting_enabled
          ? (0, o.jsx)(C, {
              error: n,
              identifierHash: c,
              store: s.sm_ErrorReportingStore,
              onRefresh: this.Reset,
            })
          : (0, o.jsx)(m, { error: n, onDismiss: this.Reset })
      : r || null;
  }
};
E([R], s.prototype, "Reset", 1);
var l = s,
  m = ({ error: t, onDismiss: r }) => {
    let e = t.error ? t.error.stack : "Stack missing",
      i = t.info ? t.info.componentStack : "",
      n = (t.error && t.error.message) || "unknown error";
    return (0, o.jsxs)(g, {
      children: [
        (0, o.jsxs)(S, { children: ['Error: "', n, '"'] }),
        "   ",
        (0, o.jsx)("span", {
          style: { textDecoration: "underline", cursor: "pointer" },
          onClick: r,
          children: "(x) Dismiss",
        }),
        (0, o.jsx)("br", {}),
        (0, o.jsx)(a, { children: e }),
        (0, o.jsxs)(a, {
          children: ["The error occurred while rendering:", i],
        }),
      ],
    });
  },
  C = (t) => {
    let { error: r, onRefresh: e, identifierHash: i, store: n } = t,
      c = (r.error && r.error.message) || "unknown error",
      p = `${n.product}_${n.version}_${i}`;
    return (0, o.jsxs)(g, {
      children: [
        (0, o.jsxs)(S, {
          children: [
            "Something went wrong while displaying this content. ",
            (0, o.jsx)("span", {
              style: { textDecoration: "underline", cursor: "pointer" },
              onClick: e,
              children: "Refresh",
            }),
          ],
        }),
        (0, o.jsxs)(a, { children: ["Error Reference: ", p] }),
        (0, o.jsx)(a, { children: c }),
      ],
    });
  },
  g = ({ children: t }) =>
    (0, o.jsx)("div", {
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
  S = ({ children: t }) =>
    (0, o.jsx)("h1", {
      style: {
        fontSize: "20px",
        display: "inline-block",
        marginTop: "15px",
        userSelect: "auto",
      },
      children: t,
    }),
  a = ({ children: t }) =>
    (0, o.jsx)("pre", {
      style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" },
      children: t,
    });
export { b as a, k as b, l as c };

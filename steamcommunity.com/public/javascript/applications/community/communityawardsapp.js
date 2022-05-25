/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "/u7D": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return a;
        });
      var s = r("q1tI"),
        o = r("tPo2");
      r("OU48");
      function a(e) {
        return s.createElement("div", null, s.createElement(o.a, null));
      }
    },
    "0OaU": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var s = r("q1tI"),
        o = r.n(s),
        a = r("6Y59"),
        n = r("2i24"),
        p = r.n(n);
      class i extends o.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(p.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(p.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(p.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(p.a.throbber_xxlarge)
            : e.push(p.a.throbber_large);
        }
        render() {
          let e = [p.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(p.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(p.a.Static);
          let t = o.a.createElement(
            "div",
            { className: e.join(" ") },
            o.a.createElement(
              "div",
              { className: p.a.Throbber },
              o.a.createElement(a.ob, { className: p.a.base }),
              o.a.createElement(a.ob, { className: p.a.blur })
            )
          );
          return o.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? p.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              o.a.createElement(
                "div",
                { className: p.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    "8OQS": function (e, t) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          s,
          o = {},
          a = Object.keys(e);
        for (s = 0; s < a.length; s++)
          (r = a[s]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    PJYZ: function (e, t) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    SksO: function (e, t) {
      function r(t, s) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          r(t, s)
        );
      }
      (e.exports = r),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    pVnL: function (e, t) {
      function r() {
        return (
          (e.exports = r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r)
                  Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
              }
              return e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          r.apply(this, arguments)
        );
      }
      (e.exports = r),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "/u7D": function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, "default", function () {
          return n;
        });
      var a = r("q1tI"),
        t = r("tPo2");
      r("OU48");
      function n(e) {
        return a.createElement("div", null, a.createElement(t.a, null));
      }
    },
    "0OaU": function (e, s, r) {
      "use strict";
      r.d(s, "a", function () {
        return p;
      });
      var a = r("q1tI"),
        t = r.n(a),
        n = r("6Y59"),
        i = r("2i24"),
        o = r.n(i);
      class p extends t.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(o.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(o.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(o.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(o.a.throbber_xxlarge)
            : e.push(o.a.throbber_large);
        }
        render() {
          let e = [o.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(o.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(o.a.Static);
          let s = t.a.createElement(
            "div",
            { className: e.join(" ") },
            t.a.createElement(
              "div",
              { className: o.a.Throbber },
              t.a.createElement(n.nb, { className: o.a.base }),
              t.a.createElement(n.nb, { className: o.a.blur })
            )
          );
          return t.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? o.a.throbber_center_wrapper
                  : "",
            },
            s,
            Boolean(this.props.string) &&
              t.a.createElement(
                "div",
                { className: o.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
  },
]);

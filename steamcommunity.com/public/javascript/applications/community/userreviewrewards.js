/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    "0OaU": function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return c;
      });
      var a = r("mrSG"),
        s = r("q1tI"),
        n = r.n(s),
        i = r("6Y59"),
        o = r("2i24"),
        p = r.n(o),
        c = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(a.d)(e, t),
            (e.prototype.AddSizeClass = function(e) {
              "small" == this.props.size
                ? e.push(p.a.throbber_small)
                : "medium" == this.props.size
                ? e.push(p.a.throbber_medium)
                : "xlarge" == this.props.size
                ? e.push(p.a.throbber_xlarge)
                : "xxlarge" == this.props.size
                ? e.push(p.a.throbber_xxlarge)
                : e.push(p.a.throbber_large);
            }),
            (e.prototype.render = function() {
              var e = [p.a.LoadingWrapper, "SteamLogoThrobber"];
              this.AddSizeClass(e),
                void 0 === this.props.string && e.push(p.a.noString),
                this.props.className && e.push(this.props.className),
                this.props.static && e.push(p.a.Static);
              var t = n.a.createElement(
                "div",
                { className: e.join(" ") },
                n.a.createElement(
                  "div",
                  { className: p.a.Throbber },
                  n.a.createElement(i.N, { className: p.a.base }),
                  n.a.createElement(i.N, { className: p.a.blur })
                )
              );
              return n.a.createElement(
                "div",
                {
                  className:
                    "center" == this.props.position
                      ? p.a.throbber_center_wrapper
                      : ""
                },
                t,
                Boolean(this.props.string) &&
                  n.a.createElement(
                    "div",
                    { className: p.a.ThrobberText },
                    this.props.string
                  )
              );
            }),
            e
          );
        })(n.a.PureComponent);
    },
    PDjT: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function() {
          return n;
        });
      var a = r("q1tI"),
        s = r("tPo2");
      function n(e) {
        return a.createElement(
          "div",
          null,
          a.createElement(s.a, { targetType: 1 })
        );
      }
    }
  }
]);

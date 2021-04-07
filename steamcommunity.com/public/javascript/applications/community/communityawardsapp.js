/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "/u7D": function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, "default", function () {
          return n;
        });
      var a = t("q1tI"),
        s = t("tPo2");
      function n(e) {
        return a.createElement("div", null, a.createElement(s.a, null));
      }
    },
    "0OaU": function (e, r, t) {
      "use strict";
      t.d(r, "a", function () {
        return l;
      });
      var a = t("mrSG"),
        s = t("q1tI"),
        n = t.n(s),
        i = t("6Y59"),
        o = t("2i24"),
        p = t.n(o),
        l = (function (r) {
          function e(e) {
            return r.call(this, e) || this;
          }
          return (
            Object(a.d)(e, r),
            (e.prototype.AddSizeClass = function (e) {
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
            (e.prototype.render = function () {
              var e = [p.a.LoadingWrapper, "SteamLogoThrobber"];
              this.AddSizeClass(e),
                void 0 === this.props.string && e.push(p.a.noString),
                this.props.className && e.push(this.props.className),
                this.props.static && e.push(p.a.Static);
              var r = n.a.createElement(
                "div",
                { className: e.join(" ") },
                n.a.createElement(
                  "div",
                  { className: p.a.Throbber },
                  n.a.createElement(i.Z, { className: p.a.base }),
                  n.a.createElement(i.Z, { className: p.a.blur })
                )
              );
              return n.a.createElement(
                "div",
                {
                  className:
                    "center" == this.props.position
                      ? p.a.throbber_center_wrapper
                      : "",
                },
                r,
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
  },
]);

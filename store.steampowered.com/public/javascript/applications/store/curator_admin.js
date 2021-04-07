/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "3rT3": function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("mrSG"),
        r = n("q1tI"),
        o = n.n(r),
        i = n("Ty5D"),
        c = n("wjMc"),
        u = n("2l+k"),
        s = n("IjL/"),
        l = n("9w6b"),
        p = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { bIsLoading: !0 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                return Object(a.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return u.a.Get(), [4, l.a.InitGlobal()];
                    case 1:
                      return t.sent(), this.setState({ bIsLoading: !1 }), [2];
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              return this.state.bIsLoading
                ? null
                : o.a.createElement(
                    s.a,
                    null,
                    o.a.createElement(
                      i.d,
                      null,
                      o.a.createElement(i.b, {
                        exact: !0,
                        path:
                          "/(curator|pub|publisher|dev|developer|franchise)/:curator_vanity/admin/manage_rss",
                        component: c.b,
                      }),
                      o.a.createElement(i.b, null, !1)
                    )
                  );
            }),
            t
          );
        })(o.a.Component);
      e.default = p;
    },
  },
]);

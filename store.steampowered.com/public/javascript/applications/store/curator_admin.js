/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "3rT3": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("mrSG"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("EC67"),
        c = (n("r64O"), n("wjMc")),
        u = n("2l+k"),
        s = n("IjL/"),
        l = n("9w6b"),
        p = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bIsLoading: !0 }), e;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.componentDidMount = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return u.a.Get(), [4, l.a.InitGlobal()];
                    case 1:
                      return t.sent(), this.setState({ bIsLoading: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.render = function () {
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
                          "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                        component: c.b,
                      }),
                      o.a.createElement(i.b, null, !1)
                    )
                  );
            }),
            e
          );
        })(o.a.Component);
      e.default = p;
    },
  },
]);

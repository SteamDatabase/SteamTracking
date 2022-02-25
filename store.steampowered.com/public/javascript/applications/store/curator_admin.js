/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "3rT3": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return d;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        o = n.n(r),
        s = n("EC67"),
        i = (n("r64O"), n("wjMc")),
        c = n("2l+k"),
        l = n("IjL/"),
        u = n("9w6b");
      class d extends o.a.Component {
        constructor() {
          super(...arguments), (this.state = { bIsLoading: !0 });
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            c.a.Get(),
              yield u.a.InitGlobal(),
              this.setState({ bIsLoading: !1 });
          });
        }
        render() {
          return this.state.bIsLoading
            ? null
            : o.a.createElement(
                l.a,
                null,
                o.a.createElement(
                  s.d,
                  null,
                  o.a.createElement(s.b, {
                    exact: !0,
                    path:
                      "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                    component: i.b,
                  }),
                  o.a.createElement(s.b, null, !1)
                )
              );
        }
      }
    },
  },
]);

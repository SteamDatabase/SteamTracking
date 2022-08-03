/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [238],
  {
    13596: (e, s, r) => {
      r.d(s, { V: () => l });
      var t = r(67294),
        a = r(95598),
        i = r(50732),
        p = r.n(i);
      class l extends t.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(p().throbber_small)
            : "medium" == this.props.size
            ? e.push(p().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(p().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(p().throbber_xxlarge)
            : e.push(p().throbber_large);
        }
        render() {
          let e = [p().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(p().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(p().Static);
          let s = t.createElement(
            "div",
            { className: e.join(" ") },
            t.createElement(
              "div",
              { className: p().Throbber },
              t.createElement(a.wUs, { className: p().base }),
              t.createElement(a.wUs, { className: p().blur })
            )
          );
          return t.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? p().throbber_center_wrapper
                  : "",
            },
            s,
            Boolean(this.props.string) &&
              t.createElement(
                "div",
                { className: p().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    21668: (e, s, r) => {
      r.r(s), r.d(s, { default: () => i });
      var t = r(67294),
        a = r(77817);
      r(14974);
      function i(e) {
        return t.createElement("div", null, t.createElement(a.ZP, null));
      }
    },
  },
]);

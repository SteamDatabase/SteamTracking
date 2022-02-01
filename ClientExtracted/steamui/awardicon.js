/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    Jbdm: function (n, t, o) {
      n.exports = {
        IconContainer: "awardicon_IconContainer__6f_B",
        ButtonContainer: "awardicon_ButtonContainer_1ShXa",
        InfoContainer: "awardicon_InfoContainer_20mER",
        IconImg: "awardicon_IconImg_RP1Up",
        ReactionCount: "awardicon_ReactionCount_18GX_",
        IconList: "awardicon_IconList_2cI0L",
      };
    },
    RsgW: function (n, t, o) {
      "use strict";
      o.r(t),
        o.d(t, "AwardIcon", function () {
          return m;
        }),
        o.d(t, "AwardIconList", function () {
          return I;
        });
      var e = o("mrSG"),
        a = o("q1tI"),
        r = o.n(a),
        c = (o("+z9g"), o("ascj")),
        i = o("5E+2"),
        s = o("Jbdm"),
        p = o.n(s),
        u = o("TLQK"),
        d = o("exH9"),
        m = (function (n) {
          function t() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            Object(e.d)(t, n),
            (t.prototype.render = function () {
              var n = Object(u.n)(
                "#RewardsReaction_Tooltip",
                this.props.reaction.count || 0,
                Object(c.a)(this.props.reaction.reaction_type)
              );
              return r.a.createElement(
                i.d,
                {
                  className: Object(d.a)(p.a.InfoContainer, p.a.IconContainer),
                  toolTipContent: n,
                },
                r.a.createElement("img", {
                  className: p.a.IconImg,
                  src: Object(c.b)(this.props.reaction.reaction_type, !1),
                }),
                this.props.reaction.count &&
                  r.a.createElement(
                    "div",
                    { className: p.a.ReactionCount },
                    this.props.reaction.count
                  )
              );
            }),
            t
          );
        })(r.a.PureComponent),
        I = (function (n) {
          function t() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            Object(e.d)(t, n),
            (t.prototype.render = function () {
              for (
                var n = [], t = 0, o = this.props.reactions;
                t < o.length;
                t++
              ) {
                var e = o[t];
                n.push(
                  r.a.createElement(m, { key: e.reaction_type, reaction: e })
                );
              }
              return r.a.createElement("div", { className: p.a.IconList }, n);
            }),
            t
          );
        })(r.a.PureComponent);
    },
  },
]);
//# sourceMappingURL=awardicon.js.map

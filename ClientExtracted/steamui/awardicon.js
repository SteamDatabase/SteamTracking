/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
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
          return u;
        }),
        o.d(t, "AwardIconList", function () {
          return I;
        });
      var e = o("q1tI"),
        a = o.n(e),
        c = (o("+z9g"), o("ascj")),
        r = o("5E+2"),
        i = o("Jbdm"),
        s = o.n(i),
        p = o("TLQK"),
        d = o("exH9");
      class u extends a.a.PureComponent {
        render() {
          const n = Object(p.o)(
            "#RewardsReaction_Tooltip",
            this.props.reaction.count || 0,
            Object(c.a)(this.props.reaction.reaction_type)
          );
          return a.a.createElement(
            r.d,
            {
              className: Object(d.a)(s.a.InfoContainer, s.a.IconContainer),
              toolTipContent: n,
            },
            a.a.createElement("img", {
              className: s.a.IconImg,
              src: Object(c.b)(this.props.reaction.reaction_type, !1),
            }),
            this.props.reaction.count &&
              a.a.createElement(
                "div",
                { className: s.a.ReactionCount },
                this.props.reaction.count
              )
          );
        }
      }
      class I extends a.a.PureComponent {
        render() {
          let n = [];
          for (const t of this.props.reactions)
            n.push(a.a.createElement(u, { key: t.reaction_type, reaction: t }));
          return a.a.createElement("div", { className: s.a.IconList }, n);
        }
      }
    },
  },
]);
//# sourceMappingURL=awardicon.js.map

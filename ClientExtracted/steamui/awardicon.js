/* Third-party software licenses can be found at licenses.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "5Css": function (n, t, o) {
      n.exports = {
        IconContainer: "awardicon_IconContainer_6TbQg",
        ButtonContainer: "awardicon_ButtonContainer_kaquA",
        InfoContainer: "awardicon_InfoContainer_2ydoR",
        IconImg: "awardicon_IconImg_2xJ_L",
        ReactionCount: "awardicon_ReactionCount_22PNg",
        IconList: "awardicon_IconList_1NEGw",
      };
    },
    BCmL: function (n, t, o) {
      "use strict";
      o.r(t),
        o.d(t, "AwardIcon", function () {
          return d;
        }),
        o.d(t, "AwardIconList", function () {
          return I;
        });
      var e = o("q1tI"),
        a = o.n(e),
        c = (o("+3M9"), o("N+Bh")),
        r = o("xoHR"),
        i = o("5Css"),
        s = o.n(i),
        p = o("GXif"),
        u = o("GbHM");
      class d extends a.a.PureComponent {
        render() {
          const n = Object(p.o)(
            "#RewardsReaction_Tooltip",
            this.props.reaction.count || 0,
            Object(c.a)(this.props.reaction.reaction_type)
          );
          return a.a.createElement(
            r.d,
            {
              className: Object(u.a)(s.a.InfoContainer, s.a.IconContainer),
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
            n.push(a.a.createElement(d, { key: t.reaction_type, reaction: t }));
          return a.a.createElement("div", { className: s.a.IconList }, n);
        }
      }
    },
  },
]);
//# sourceMappingURL=awardicon.js.map

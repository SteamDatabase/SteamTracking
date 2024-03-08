(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6109],
  {
    68277: (e) => {
      e.exports = {
        IconContainer: "_6TbQgZuwNMr5374_y7IIT",
        ButtonContainer: "kaquAx4n5hv2_VCVYmDId",
        InfoContainer: "_2ydoRKFVIxw7ZQ2k73pC27",
        IconImg: "_2xJ_LSjLIQ-XLrZqZiOK0o",
        ReactionCount: "_22PNg3cCBQ6SytI8Vz6pyT",
        IconList: "_1NEGw6cerEqhcblDvEalvd",
      };
    },
    31149: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { AwardIcon: () => u, AwardIconList: () => l });
      var o = n(27378),
        r = n(91055),
        c = n(94256),
        a = n(68277),
        s = n.n(a),
        i = n(86064),
        p = n(35484);
      class u extends o.PureComponent {
        render() {
          const e = (0, i.kb)(
            "#RewardsReaction_Tooltip",
            this.props.reaction.count || 0,
            (0, r.C)(this.props.reaction.reaction_type),
          );
          return o.createElement(
            c.HP,
            {
              className: (0, p.Z)(s().InfoContainer, s().IconContainer),
              toolTipContent: e,
            },
            o.createElement("img", {
              className: s().IconImg,
              src: (0, r.w)(this.props.reaction.reaction_type, !1),
            }),
            this.props.reaction.count &&
              o.createElement(
                "div",
                { className: s().ReactionCount },
                this.props.reaction.count,
              ),
          );
        }
      }
      class l extends o.PureComponent {
        render() {
          let e = [];
          for (const t of this.props.reactions)
            e.push(o.createElement(u, { key: t.reaction_type, reaction: t }));
          return o.createElement("div", { className: s().IconList }, e);
        }
      }
    },
  },
]);
//# sourceMappingURL=sourcemaps/awardicon.js.map

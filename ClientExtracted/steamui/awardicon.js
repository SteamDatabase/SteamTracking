/* Third-party software licenses can be found at licenses.txt */
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6109],
  {
    90529: (n) => {
      n.exports = {
        IconContainer: "awardicon_IconContainer_6TbQg",
        ButtonContainer: "awardicon_ButtonContainer_kaquA",
        InfoContainer: "awardicon_InfoContainer_2ydoR",
        IconImg: "awardicon_IconImg_2xJ_L",
        ReactionCount: "awardicon_ReactionCount_22PNg",
        IconList: "awardicon_IconList_1NEGw",
      };
    },
    77986: (n, e, t) => {
      "use strict";
      t.r(e), t.d(e, { AwardIcon: () => u, AwardIconList: () => d });
      var o = t(67294),
        a = (t(16329), t(81603)),
        r = t(22784),
        c = t(90529),
        i = t.n(c),
        s = t(27194),
        p = t(45520);
      class u extends o.PureComponent {
        render() {
          const n = (0, s.kb)(
            "#RewardsReaction_Tooltip",
            this.props.reaction.count || 0,
            (0, a.C)(this.props.reaction.reaction_type)
          );
          return o.createElement(
            r.HP,
            {
              className: (0, p.Z)(i().InfoContainer, i().IconContainer),
              toolTipContent: n,
            },
            o.createElement("img", {
              className: i().IconImg,
              src: (0, a.w)(this.props.reaction.reaction_type, !1),
            }),
            this.props.reaction.count &&
              o.createElement(
                "div",
                { className: i().ReactionCount },
                this.props.reaction.count
              )
          );
        }
      }
      class d extends o.PureComponent {
        render() {
          let n = [];
          for (const e of this.props.reactions)
            n.push(o.createElement(u, { key: e.reaction_type, reaction: e }));
          return o.createElement("div", { className: i().IconList }, n);
        }
      }
    },
  },
]);

(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [9129],
  {
    91645: (e) => {
      e.exports = {
        IconContainer: "_6f_B5nDywKxTeX2mN82H",
        ButtonContainer: "_1ShXayKQrFaUxECMORaNmM",
        InfoContainer: "_20mER4KVFt1wYBaOFlnjvL",
        IconImg: "RP1UpBcTVectpTel7p6iH",
        ReactionCount: "_18GX_0BWySenzVNaYO4IsZ",
        IconList: "_2cI0LExX5UtjoTq7F6CTwY",
      };
    },
    3909: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { AwardIcon: () => m, AwardIconList: () => l });
      var o = n(63696),
        a = n(28017),
        r = n(98995),
        c = n(91645),
        s = n.n(c),
        i = n(46108),
        p = n(90765);
      class m extends o.PureComponent {
        render() {
          const e = (0, i.Yp)(
            "#RewardsReaction_Tooltip",
            this.props.reaction.count || 0,
            (0, a.h)(this.props.reaction.reaction_type),
          );
          return o.createElement(
            r.he,
            {
              className: (0, p.A)(s().InfoContainer, s().IconContainer),
              toolTipContent: e,
            },
            o.createElement("img", {
              className: s().IconImg,
              src: (0, a.e)(this.props.reaction.reaction_type, !1),
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
            e.push(o.createElement(m, { key: t.reaction_type, reaction: t }));
          return o.createElement("div", { className: s().IconList }, e);
        }
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/awardicon.js.map

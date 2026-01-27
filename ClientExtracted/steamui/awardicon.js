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
      n.r(t), n.d(t, { AwardIcon: () => u, AwardIconList: () => m });
      var o = n(63696),
        a = n(28017),
        c = n(98995),
        r = n(91645),
        s = n.n(r),
        i = n(46108),
        l = n(90765);
      function u(e) {
        const { reaction: t } = e,
          n = (0, a.K)(t.reaction_type);
        if (!n) return null;
        const r = (0, i.Yp)(
          "#RewardsReaction_Tooltip",
          t.count || 0,
          n.localized_title,
        );
        return o.createElement(
          c.he,
          {
            className: (0, l.A)(s().InfoContainer, s().IconContainer),
            toolTipContent: r,
          },
          o.createElement("img", {
            className: s().IconImg,
            src: (0, a.e)(t.reaction_type, !1),
          }),
          t.count &&
            o.createElement("div", { className: s().ReactionCount }, t.count),
        );
      }
      class m extends o.PureComponent {
        render() {
          let e = [];
          for (const t of this.props.reactions)
            e.push(o.createElement(u, { key: t.reaction_type, reaction: t }));
          return o.createElement("div", { className: s().IconList }, e);
        }
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/awardicon.js.map

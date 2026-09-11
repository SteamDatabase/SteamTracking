(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [9129],
    {
      91645: (c) => {
        c.exports = {
          IconContainer: "_6f_B5nDywKxTeX2mN82H",
          ButtonContainer: "_1ShXayKQrFaUxECMORaNmM",
          InfoContainer: "_20mER4KVFt1wYBaOFlnjvL",
          IconImg: "RP1UpBcTVectpTel7p6iH",
          ReactionCount: "_18GX_0BWySenzVNaYO4IsZ",
          IconList: "_2cI0LExX5UtjoTq7F6CTwY",
        };
      },
      8216: (c, e, n) => {
        "use strict";
        n.r(e), n.d(e, { AwardIcon: () => i, AwardIconList: () => u });
        var s = n(62540),
          l = n(63696),
          _ = n(1276),
          E = n(47438),
          d = n(91645),
          a = n.n(d),
          I = n(7727),
          C = n(8658),
          O = "10986482";
        function i(r) {
          const { reaction: t } = r,
            o = (0, _.KL)(t.reaction_type);
          if (!o) return null;
          const M = (0, I.Yp)(
            "#RewardsReaction_Tooltip",
            t.count || 0,
            o.localized_title,
          );
          return (0, s.jsxs)(E.he, {
            className: (0, C.A)(a().InfoContainer, a().IconContainer),
            toolTipContent: M,
            children: [
              (0, s.jsx)("img", {
                className: a().IconImg,
                src: (0, _.eU)(t.reaction_type, !1),
              }),
              t.count &&
                (0, s.jsx)("div", {
                  className: a().ReactionCount,
                  children: t.count,
                }),
            ],
          });
        }
        class u extends l.PureComponent {
          render() {
            let t = [];
            for (const o of this.props.reactions)
              t.push((0, s.jsx)(i, { reaction: o }, o.reaction_type));
            return (0, s.jsx)("div", { className: a().IconList, children: t });
          }
        }
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/awardicon.js.map

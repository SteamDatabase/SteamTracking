(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [9129],
    {
      chunkid: (module) => {
        module.exports = {
          IconContainer: "_6f_B5nDywKxTeX2mN82H",
          ButtonContainer: "_1ShXayKQrFaUxECMORaNmM",
          InfoContainer: "_20mER4KVFt1wYBaOFlnjvL",
          IconImg: "RP1UpBcTVectpTel7p6iH",
          ReactionCount: "_18GX_0BWySenzVNaYO4IsZ",
          IconList: "_2cI0LExX5UtjoTq7F6CTwY",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            AwardIcon: () => _,
            AwardIconList: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = "10978408";
        function _(_) {
          const { reaction: _ } = _,
            _ = (0, _._)(_.reaction_type);
          if (!_) return null;
          const _ = (0, _._)(
            "#RewardsReaction_Tooltip",
            _.count || 0,
            _.localized_title,
          );
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().InfoContainer, _().IconContainer),
            toolTipContent: _,
            children: [
              (0, _.jsx)("img", {
                className: _().IconImg,
                src: (0, _._)(_.reaction_type, !1),
              }),
              _.count &&
                (0, _.jsx)("div", {
                  className: _().ReactionCount,
                  children: _.count,
                }),
            ],
          });
        }
        class _ extends _.PureComponent {
          render() {
            let _ = [];
            for (const _ of this.props.reactions)
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    reaction: _,
                  },
                  _.reaction_type,
                ),
              );
            return (0, _.jsx)("div", {
              className: _().IconList,
              children: _,
            });
          }
        }
      },
    },
  ]);
})();

(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [45004],
  {
    chunkid: (module) => {
      module.exports = {
        ProfileShowcaseHeaderImage: "_2tjUy9meAE2vNIP6iYBRVU",
        ShowcaseSubhead: "_2BmNvI5oqx2_EjWNkstqPt",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ProfileShowcasesPage: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
          __webpack_require__._ +
          "images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching",
        _ = (_) =>
          (0, _.jsx)(_._, {
            ..._,
            onClick: (_) =>
              (0, _._)(
                _,
                _.customization_type,
                _.current_level,
                _.desired_level,
              ),
          }),
        _ = (_) =>
          (0, _.jsx)(_._, {
            ..._,
            onClick: (_) =>
              (0, _._)(
                _,
                _.customization_type,
                _.purchased_count,
                _.current_level,
              ),
          }),
        _ = (_) =>
          (0, _.jsx)(_._, {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "small",
            className: _.PageContainer,
            children: (0, _.jsx)("img", {
              src: _,
              className: _.ProfileShowcaseHeaderImage,
            }),
          }),
        _ = (_) => {
          const {
            point_cost: _,
            upgradable_showcases: _,
            purchased_upgrades: _,
          } = _;
          let _ = new Map();
          __webpack_require__.forEach((_) => {
            _.set(_, 1);
          }),
            _ &&
              _.forEach((_) => {
                _.set(_.customization_type, _.level);
              });
          let _ = __webpack_require__.map((_) => {
            const _ = _.get(_),
              _ = _ + 1;
            return (0, _.jsx)(
              _,
              {
                point_cost: _,
                customization_type: _,
                current_level: _,
                desired_level: _,
              },
              _,
            );
          });
          return (0, _.jsx)(_._, {
            className: _.PageItemsContainer,
            itemClassName: _.PageItemsContainerChildren,
            spacing: "xlarge",
            children: (0, _.jsx)(_._, {
              title: (0, _._)("#ProfileShowcases_Upgrades_Title"),
              subtitle: (0, _._)("#ProfileShowcases_Upgrades_Subtitle"),
              children: _,
            }),
          });
        },
        _ = (_) => {
          const {
            point_cost: _,
            purchasable_showcases: _,
            purchased_showcases: _,
            purchased_upgrades: _,
          } = _;
          let _ = new Map(),
            _ = new Map();
          __webpack_require__.forEach((_) => {
            _.set(_, 0), _.set(_, 1);
          }),
            _ &&
              _.forEach((_) => {
                _.set(_.customization_type, _.count);
              }),
            _ &&
              _.forEach((_) => {
                _.set(_.customization_type, _.level);
              });
          let _ = __webpack_require__.map((_) =>
            (0, _.jsx)(
              _,
              {
                point_cost: _,
                current_level: _.get(_),
                customization_type: _,
                purchased_count: _.get(_),
              },
              _,
            ),
          );
          return (0, _.jsx)(_._, {
            className: _.PageItemsContainer,
            itemClassName: _.PageItemsContainerChildren,
            spacing: "xlarge",
            children: (0, _.jsx)(_._, {
              title: (0, _._)("#ProfileShowcases_Slots_Title"),
              subtitle: (0, _._)("#ProfileShowcases_Slots_Subtitle"),
              children: _,
            }),
          });
        };
      let _ = class extends _.Component {
        render() {
          let _ = _._.Get().GetUpgradableProfileShowcaseCost(),
            _ = _._.Get().GetUpgradableProfileShowcases(),
            _ = _._.Get().GetUpgradedProfileCustomizations(),
            _ = _._.Get().GetPurchasableProfileShowcaseSlotCost(),
            _ = _._.Get().GetPurchasableProfileShowcaseSlots(),
            _ = _._.Get().GetPurchasedProfileCustomizations();
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_._, {
              className: _.PageItemsContainer,
              itemClassName: _.PageItemsContainerChildren,
              spacing: "xlarge",
              children: [
                (0, _.jsx)("div", {
                  children: (0, _.jsx)(_._, {
                    title: (0, _._)("#ShopPageTitle_ProfileShowcases"),
                  }),
                }),
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {
                  point_cost: _,
                  upgradable_showcases: _,
                  purchased_upgrades: _,
                }),
                (0, _.jsx)(_, {
                  point_cost: _,
                  purchasable_showcases: _,
                  purchased_showcases: _,
                  purchased_upgrades: _,
                }),
                this.props.children,
              ],
            }),
          });
        }
      };
      _ = (0, _._)([_._], _);
      const _ = _;
    },
  },
]);

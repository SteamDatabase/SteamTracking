(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [70349],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid");
        function _() {
          const [_, _] = (0, _.useState)(() =>
            (0, _._)("profile-itemcollection", "itemcollection_config"),
          );
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _({
          nPercent: _,
          indeterminate: _,
          animate: _,
          className: _,
        }) {
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _.ProgressBar,
              _ && _.AnimateProgress,
              _ && _.Indeterminate,
              _,
            ),
            style: {
              "--percent": _ / 100,
            },
          });
        }
        const _ = ({ nPercent: _, size: _ = 120, strokeWidth: _ = 20 }) => {
          const _ = (_ - _) / 2,
            _ = 2 * Math._ * _,
            _ = _ - (_ / 100) * _,
            _ = _ == 100;
          return (0, _.jsx)("div", {
            className: (0, _._)({
              [_.Circular]: !0,
              [_.Full]: _,
            }),
            children: (0, _.jsxs)("svg", {
              width: _,
              height: _,
              style: {
                transform: "rotate(-90deg)",
              },
              children: [
                (0, _.jsx)("circle", {
                  _: _ / 2,
                  _: _ / 2,
                  _: _,
                  stroke: "#0c131d",
                  strokeWidth: _,
                  fill: "none",
                }),
                (0, _.jsx)("circle", {
                  _: _ / 2,
                  _: _ / 2,
                  _: _,
                  stroke: "#1a9fff",
                  strokeWidth: _,
                  fill: "none",
                  strokeDasharray: _,
                  strokeDashoffset: _,
                  style: {
                    transition: "stroke-dashoffset 0.3s ease-in-out",
                  },
                }),
              ],
            }),
          });
        };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              strProfileName: _,
              strSteamId: _,
              bViewingOwnProfile: _,
              rgCommunityItemDefs: _,
              rgUserCommunityItems: _,
              nAppID: _,
              rgRewardItems: _,
              rgUserItemRewarded: _,
              oRewardDefinition: _,
            } = _(),
            _ = (0, _.useMemo)(() => {
              const _ = new Set();
              _.forEach((_) => {
                _.add(`${_.appid}_${_.item_type}`);
              });
              const _ = new Set();
              _ == null ||
                _.forEach((_) => {
                  _.add(_.community_item_type);
                });
              const _ = new Map();
              return (
                _.filter(
                  (_) =>
                    _.active &&
                    !_.deleted &&
                    !_.has(_.item_type) &&
                    _.item_class != _._,
                )
                  .sort((_, _) => {
                    const _ = _.has(`${_.appid}_${_.item_type}`),
                      _ = _.has(`${_.appid}_${_.item_type}`);
                    return (_ && _) || (!_ && !_)
                      ? _.item_type - _.item_type
                      : _
                        ? -1
                        : 1;
                  })
                  .forEach((_) => {
                    _.has(_.item_class) || _.set(_.item_class, []),
                      _.get(_.item_class).push({
                        ..._,
                        user_has_item: _.has(`${_.appid}_${_.item_type}`),
                      });
                  }),
                _
              );
            }, [_, _, _]),
            _ = (0, _.useMemo)(() => {
              if (_.has(_._)) {
                const _ = _.get(_._).filter((_) => {
                  const _ = JSON.parse(_.item_key_values);
                  return _.item_movie_webm && _.item_movie_mp4;
                });
                if (_.length) return (0, _._)(_), _[0];
              }
              return null;
            }, [_]),
            _ = (0, _.useMemo)(() => {
              let _ = new Map();
              return (
                _.forEach((_) => {
                  _.set(_.item_type, _);
                }),
                _
              );
            }, [_]),
            _ = (0, _.useMemo)(
              () => Array.from(_.keys()).sort((_, _) => _ - _),
              [_],
            ),
            [_, _, _] = _.useMemo(() => {
              const _ =
                  _ == null
                    ? void 0
                    : _.filter((_) => {
                        const _ = _.get(_.item_type);
                        return !(
                          _ &&
                          (_.item_class == _._ || _.item_class == _._)
                        );
                      }),
                _ = _.filter((_) => _.item_class != _._ && _.item_class != _._),
                _ = _.length || 0,
                _ = _.length || 0;
              return [_ ? Math.floor((_ * 100) / _) : 0, _, _];
            }, [_, _, _]);
          return (0, _.jsx)(_._, {
            feature: "itemcollections",
            children: (0, _.jsx)(_._, {
              appID: _,
              children: (0, _.jsxs)(_._, {
                className: _().ProfileSubPageContainer,
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().PageBackground,
                      children: (0, _.jsxs)("video", {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.item_image_large}`,
                        children: [
                          (0, _.jsx)("source", {
                            src: `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.item_movie_webm}`,
                            type: "video/webm",
                          }),
                          !_._.IN_CLIENT &&
                            (0, _.jsx)("source", {
                              src: `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.item_movie_mp4}`,
                              type: "video/mp4",
                            }),
                        ],
                      }),
                    }),
                  (0, _.jsx)(_, {
                    nAppID: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().PageSection,
                    children: [
                      (0, _.jsx)("span", {
                        children: (0, _._)("#ItemCollection_Collected", _, _),
                      }),
                      (0, _.jsx)(_, {
                        className: _().ProgressBar,
                        animate: !0,
                        nPercent: _,
                        indeterminate: !1,
                      }),
                    ],
                  }),
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().PageSection,
                        _().BackgroundGradient,
                        _().Highlight,
                      ),
                      children: (0, _.jsx)(_, {
                        oRewardDefinition: _,
                        bViewingOwnProfile: _,
                        rgRewardItems: _,
                        rgUserItemRewarded: _,
                        rgCommunityItemDefs: _,
                      }),
                    }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _().PageSection,
                      _().BackgroundGradient,
                    ),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().HowToGet,
                        children: (0, _._)("#ItemCollection_ForPoints_Title"),
                      }),
                      _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            nAppID: _,
                            itemClass: _,
                            rgItems: _.get(_),
                            bViewingOwnProfile: _,
                            bHideItemStore: _ == _._,
                          },
                          "item_class_" + _,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const {
              oRewardDefinition: _,
              rgRewardItems: _,
              rgUserItemRewarded: _,
              rgCommunityItemDefs: _,
              bViewingOwnProfile: _,
            } = _,
            _ = (0, _.useMemo)(() => {
              const _ = new Set();
              _ == null ||
                _.forEach((_) => {
                  _.add(
                    `${_.item_definition.appid}_${_.item_definition.community_item_type}`,
                  );
                });
              const _ = new Set();
              _.forEach((_) => {
                _.add(`${_.appid}_${_.community_item_type}`);
              });
              const _ = new Map();
              return (
                _.filter((_) => _.active)
                  .filter((_) => _.has(`${_.appid}_${_.item_type}`))
                  .sort((_, _) => {
                    const _ = _.has(`${_.appid}_${_.item_type}`),
                      _ = _.has(`${_.appid}_${_.item_type}`);
                    return (_ && _) || (!_ && !_)
                      ? _.item_type - _.item_type
                      : _
                        ? -1
                        : 1;
                  })
                  .forEach((_) => {
                    const _ = _.has(`${_.appid}_${_.item_type}`);
                    _.has(_.item_class) || _.set(_.item_class, []),
                      _.get(_.item_class).push({
                        ..._,
                        user_has_item: _,
                      });
                  }),
                _
              );
            }, [_, _, _]);
          return (0, _.jsxs)(_._, {
            navEntryPreferPosition: _._.LAST,
            preferredFocus: !0,
            className: _().FreeQuestCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().HowToGet,
                children: (0, _._)("#ItemCollection_ForFree_Title"),
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)("div", {
                    className: _().QuestInstructions,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().QuestName,
                        children: (0, _._)("#ItemCollection_ForFree_Discovery"),
                      }),
                      (0, _.jsx)("p", {
                        children: (0, _._)(
                          _.rtime_start_time,
                          _.rtime_end_time,
                        ),
                      }),
                      (0, _.jsxs)("p", {
                        children: [
                          (0, _._)("#ItemCollection_ForFree_Discovery_desc"),
                          (0, _.jsx)("br", {}),
                          (0, _._)(
                            "#ItemCollection_ForFree_Discovery_desc2",
                            (0, _.jsx)(_._, {
                              href: `${_._.STORE_BASE_URL}explore?dq=widget`,
                            }),
                          ),
                        ],
                      }),
                    ],
                  }),
                  Array.from(_.keys()).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        bViewingOwnProfile: _,
                        nAppID: _.appid,
                        itemClass: _,
                        rgItems: _.get(_),
                        bHideItemStore: !0,
                      },
                      "free_item_class_" + _,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              rgItems: _,
              itemClass: _,
              nAppID: _,
              bViewingOwnProfile: _,
            } = _,
            _ = (0, _.useMemo)(
              () => _.filter((_) => _.user_has_item).length,
              [_],
            ),
            _ = _.length ? Math.floor((_ * 100) / _.length) : 0;
          return (0, _.jsxs)(_._, {
            navEntryPreferPosition: _._.LAST,
            preferredFocus: !0,
            className: (0, _._)(_().ItemSection),
            children: [
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsxs)(_._, {
                className: _().ItemCategoryCtn,
                children: [
                  (0, _.jsx)(_._, {
                    className: _().CategoryName,
                    children: (0, _._)("#Sale_Section_PointShop_class_" + _),
                  }),
                  (0, _.jsx)("div", {
                    className: _().SectionLine,
                  }),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                className: _().ItemCtn,
                children: [
                  (0, _.jsxs)(_._, {
                    className: _().ProgressIndicationCtn,
                    children: [
                      (0, _.jsx)(_, {
                        nPercent: _,
                      }),
                      (0, _.jsxs)("div", {
                        className: _().ProgressText,
                        children: [
                          (0, _.jsx)("div", {
                            children: (0, _._)(
                              "#ItemCollection_Collected_Item",
                              _,
                              _.length,
                            ),
                          }),
                          (0, _.jsx)("div", {
                            children: (0, _._)(
                              "#ItemCollection_Collected_Line",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        item: _,
                      },
                      "item_" + _.item_type,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { itemClass: _, nAppID: _ } = _;
          return _ !== _._
            ? null
            : (0, _.jsx)(_._, {
                className: _().HowToGet,
                children: (0, _._)("#ItemCollection_GameCards_Title"),
              });
        }
        function _(_) {
          const {
            itemClass: _,
            nAppID: _,
            bViewingOwnProfile: _,
            bHideItemStore: _,
          } = _;
          return _ == _._ && _
            ? (0, _.jsx)(_._, {
                href: `${_._.COMMUNITY_BASE_URL}my/gamecards/${_}`,
                className: _().PointShopLink,
                children: (0, _._)("#ItemCollection_Visit_Badge"),
              })
            : _
              ? null
              : (0, _.jsx)(_._, {
                  href: `${_._.STORE_BASE_URL}points/shop/app/${_}`,
                  className: _().PointShopLink,
                  children: (0, _._)("#ItemCollection_Visit"),
                });
        }
        function _(_) {
          const { item: _ } = _,
            [_, _] = (0, _._)(),
            _ = _.user_has_item || _,
            _ = !_,
            _ =
              (_ || _.item_class == _._ || _.item_class == _._) &&
              _.item_class != _._
                ? _.item_image_small
                : void 0;
          return (0, _.jsx)(_._, {
            ..._,
            onFocus: () => _.onPointerEnter(),
            onBlur: () => _.onPointerLeave(),
            focusable: !0,
            className: _().ItemBackground,
            children: (0, _.jsx)(_._, {
              appid: _.appid,
              item_image_large: _.item_image_large,
              item_image_small: _,
              item_title: _.item_title,
              item_movie_mp4: _ ? _.item_movie_mp4_small : void 0,
              item_movie_webm: _ ? _.item_movie_webm_small : void 0,
              className: (0, _._)({
                [_().ImgCtn]: !0,
                [_().ImgGrey]: _,
              }),
              videoClassName: _().ImgCtn,
            }),
          });
        }
        const _ = {
          include_assets: !0,
        };
        function _(_) {
          const { nAppID: _ } = _,
            [_] = (0, _._)(_, _);
          return _
            ? (0, _.jsx)(_._, {
                className: _().AppHeaderCtn,
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsxs)(_._, {
                      className: _().AppHeaderRow,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _().AppName,
                          children: _.GetName(),
                        }),
                        (0, _.jsx)(_._, {
                          className: _().PageName,
                          children: (0, _._)("#ItemCollection_Title"),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#ItemCollection_EventSubTitle"),
                    }),
                  ],
                }),
              })
            : null;
        }
        const _ = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "minigamev2/itemdefs",
          _ = "appid",
          _ = "editor";
        function _() {
          return (typeof self != "undefined" ? self.origin + "/" : "") ===
            _._.STORE_BASE_URL
            ? _._.STORE_BASE_URL
            : _._.COMMUNITY_BASE_URL;
        }
        async function _(_, _) {
          if (!_) return [];
          const _ = new URLSearchParams({
            [_]: String(_),
            _: _._.LANGUAGE,
          });
          _ && _.set(_, "1");
          const _ = `${_()}${_}?${_}`,
            _ = await fetch(_, {
              credentials: _ ? "include" : "same-origin",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          const _ = await _.json();
          if ((_ == null ? void 0 : _.success) == _._ && _.item_definitions)
            return _.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              _ +
              " answered " +
              (_ == null ? void 0 : _.success),
          );
        }
        function _(_, _) {
          return ["MinigameCommunityItemDefs", _, !!_];
        }
        function _(_, _) {
          return {
            queryKey: _(_, _),
            queryFn: () => _(_, _),
            enabled: !!_,
            retry: !1,
          };
        }
        function _(_, _) {
          const { data: _ } = (0, _._)(_(_, _));
          return _;
        }
        function _(_, _, _) {
          const _ = _(_, _);
          return (0, _.useMemo)(
            () =>
              _ == null
                ? void 0
                : _.find(
                    (_) => (_ || _.active) && _.appid == _ && _.item_type == _,
                  ),
            [_, _, _, _],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            appid: _,
            item_image_small: _,
            item_image_large: _,
            item_movie_mp4: _,
            item_movie_webm: _,
            item_title: _,
          } = _;
          if (_ && _) {
            const _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`,
              _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`,
              _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
            return (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: _,
                playsInline: !0,
                className: _.videoClassName,
                children: [
                  (0, _.jsx)("source", {
                    src: _,
                    type: "video/webm",
                  }),
                  !_._.IN_CLIENT &&
                    (0, _.jsx)("source", {
                      src: _,
                      type: "video/mp4",
                    }),
                ],
              }),
            });
          } else {
            const _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_ || _}`;
            return (0, _.jsx)("img", {
              className: _.className,
              src: _,
              alt: _,
            });
          }
        }
        function _(_) {
          const { appid: _, community_item_type: _, bForEdit: _ } = _,
            _ = (0, _._)(_, _, _),
            _ =
              _ && !_.active
                ? (0, _.jsx)("div", {
                    className: _.WarningStylesBackground,
                    children: (0, _._)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                  _,
                ],
              })
            : (0, _.jsx)(_._, {
                size: "small",
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          var _, _, _, _;
          const { section: _, rewardDef: _, language: _ } = _,
            _ = (0, _._)(
              (_ = _.appid) != null ? _ : 0,
              (_ = _.community_item_type) != null ? _ : 0,
            ),
            [_] = (0, _._)(() => {
              var _;
              return [!!((_ = _.rewards) != null && _.show_reward_item_name)];
            });
          let _;
          switch (_.community_class) {
            case _._:
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case _._:
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, _.jsxs)("a", {
            href: _,
            children: [
              (0, _.jsx)(_, {
                appid: (_ = _.appid) != null ? _ : 0,
                community_item_type:
                  (_ = _.community_item_type) != null ? _ : 0,
              }),
              !!_ &&
                (0, _.jsx)("span", {
                  children: _ == null ? void 0 : _.item_name,
                }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appID: _, feature: _, depth: _, children: _ } = _,
            _ = (0, _._)(_, _),
            _ = (0, _._)(),
            [_, _] = _.useState(void 0),
            _ = _.useCallback(
              (_) => {
                _.isIntersecting &&
                  _((_) =>
                    (_ == null ? void 0 : _.appID) == _ &&
                    (_ == null ? void 0 : _.snr) == _
                      ? _
                      : {
                          appID: _,
                          snr: _,
                        },
                  );
              },
              [_, _],
            );
          (0, _.useEffect)(() => {
            _ && _.appID != null && _.AddImpression(_.appID, _.snr);
          }, [_, _]);
          const _ = (0, _._)(_),
            _ = _ && (!_ || (_.appID != _ && _.snr != _)),
            _ = (0, _._)(_.props.ref, _ ? _ : void 0);
          return _.cloneElement(_, {
            ref: _,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          return jsx(_.Provider, {
            value: _.ImpressionTracker,
            children: _.children,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            (_ == null ? void 0 : _.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && _(_.GetParentAppID());
          }, [_]);
          let _ =
            _ != null && _.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ =
              _ != null && _.GetShortDescription()
                ? StripBBCodeTags(_.GetShortDescription())
                : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
        const _ = 1,
          _ = 2,
          _ = 3;
        function _(_, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)();
          _.current = _;
          const [_, _] = (0, _.useState)(void 0),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          if (
            ((0, _.useEffect)(() => {
              const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
                include_extra_details: _,
                include_optin_registration_tags: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !(_ != null && _.token.reason) &&
                        _.current === _ &&
                        _(_ == _._),
                        _();
                    })),
                () =>
                  _ == null ? void 0 : _.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
          if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
          if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
          const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
          return _ ? [_, _] : [null, _];
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          var _;
          const [_, _] = _(_, _, _);
          let _;
          (_ == null ? void 0 : _.GetStoreItemType()) == _._._ &&
            !((_ = _.GetAssets()) != null && _.GetHeaderURL()) &&
            (_ == null ? void 0 : _.GetIncludedAppIDs().length) == 1 &&
            (_ = _.GetIncludedAppIDs()[0]);
          const [_, _] = _(_, _);
          return _ && _ != null && _.BIsVisible() ? [_, _] : [_, _];
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const _ = {
                  include_assets: _,
                  include_release: _,
                  include_platforms: _,
                  include_all_purchase_options: _,
                  include_screenshots: _,
                  include_trailers: _,
                  include_ratings: _,
                  include_tag_count: _,
                  include_reviews: _,
                  include_basic_info: _,
                  include_supported_languages: _,
                  include_full_description: _,
                  include_included_items: _,
                  include_assets_without_overrides: _,
                  apply_user_filters: _,
                  include_links: _,
                  include_extra_details: _,
                  include_optin_registration_tags: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Package, _, _);
        }
        function _() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          AppHeaderCtn: "_1E99FsAAFaUjsZvZ4P5Vzl",
          AppHeaderRow: "_90TlYhcg-nmOFhraNLUeZ",
          AppName: "o1m9BbS1X5-LqjZ8B1v64",
          PageName: "_1qzjiDNpGZYKIvwBx1el1t",
          PageSubTitle: "RrvoHJVvvZtgasOhRJTbT",
          PageSection: "_2j6xq7lPsl9WaiSWYe6FXz",
          BackgroundGradient: "_2Xm3_sNhoAPpV25YOHUm8A",
          Highlight: "YkEMN4dqPVdvdufkn7yLq",
          ItemSection: "_3p4EX6xLxF9ccx1Y_jNDCa",
          HowToGet: "_3Ivasew2xNa_b5CaL7a_In",
          FreeQuestCtn: "_1deYqyFU74gu0n6WzNrTmn",
          QuestInstructions: "_1G50d530t6b5H3PiVNOPBQ",
          QuestName: "kkqhGQQsuX6fr0UUwIxXg",
          ProgressBar: "_16EW5nb2jZ7nNNJtJknVYf",
          ItemCategoryCtn: "aaosYB-OO-EJn70ocmC-J",
          CategoryName: "_1FN5OnaWAzybq4J_ozBIsY",
          SectionLine: "KJMVW9vv7xeG9RxSrn1AZ",
          PointShopLink: "v75cc6-VG2tzRr_W4eQ12",
          ItemCtn: "_1QrzyWO-Wl--rxSjTbLz5p",
          ProgressIndicationCtn: "_15b3bAwBMv-0X3I6uaac6o",
          ProgressText: "HqRb17BK0zUwRPQXbHm9x",
          ItemBackground: "_1b-IbdTr9R3ZKUWl3WIZj5",
          ImgCtn: "_3i3mybB0zixbTQe_pqH6N2",
          ImgGrey: "_3n2Ur4vZ1ojk_YPqd7iZfq",
          PageBackground: "zZIkdIHeeChogTvItWGO2",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ProfileSubPageContainer: "_1npy3GFjDHZPSB66m0_INb",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
    },
  ]);
})();

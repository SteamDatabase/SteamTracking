(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6893],
  {
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        notificationRowHeight: "72px",
        NotificationPageCtn: "_2DCeN21MQJGwVpPCXcT2QJ",
        NotificationsBody: "_35hlMprL--UdgfHJGuGnJR",
        NotificationsHeader: "_1bLYafVT6_4DisbgdimwXc",
        NotificationsHeaderTitle: "_39iFFMnPRQXd5IL6PGoOcn",
        NotificationsHeaderUnread: "_3iXuG9K_6ttnP8gOhOR7Iv",
        NotificationListCtn: "_1cj-7JmCC_IQ4ZdxxUo43Q",
        NotificationsList: "KG3qM6Y1DpK-afn15yeaT",
        AllNotificationsRowCtn: "_3Y-y3pAcXpqgpuUTLQkz86",
        NotificationFiltersCtn: "_1uSw_aqus0W7yb3vT9_-22",
        EmptyNotifications: "_3t24BJeKfB-KBIct4_UuX8",
        EmptyNotificationsTitle: "_uGFLI7t_2emsn37l93hZ",
        EmptyNotificationsBody: "_3Iomc0Ep9lyBB_QNlE8p4n",
        SettingsButtons: "_3B7mJdJw-FhqV6l5q-IFO_",
        SettingsTooltip: "_3ZlbZ5ev0L-hcx-z4JItgd",
        MarkAllReadButton: "_37UjwIEFODwKdnz3d90mdF",
        SettingsButton: "T8q00Eg6Sx2u-N2ySzMrg",
        SettingsImg: "_1XXJX0-wXgz7O3Bd0qimBX",
        SettingsFiltersTitle: "_4T-jWhXP-AWt4AatyamIk",
        SettingsFilters: "_1YDIAzUAWf7ueOLgHLbGeF",
        FilterCheckbox: "_2C4dM9ELcMmtBLz8SavLK4",
        ResetButton: "_3Z8otCycVht4XocANv_EPb",
        CommentIcon: "o_I3vYqgbLhw7c8iXVwb3",
        CommentFilterCtn: "-GWy_nsP_d9rJnCNgx8NK",
        AdvancedCommentFilters: "irq6koPKVmtQ5H7U8EAoA",
        Expanded: "_2hRRl_cNi9X4Veh7FeK-F4",
        CommentRadioGroup: "_2_xVHbSZ7fCv3LUz-THkR5",
        Expander: "MjW-ILAVK028V2xI8eCfW",
        NotificationActions: "_3R-McPl3j1ANvRa0U9reMV",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _,
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.k_All = 0)] = "k_All"),
          (_[(_.k_Owned = 1)] = "k_Owned"),
          (_[(_.k_Subscribed = 2)] = "k_Subscribed");
      })(_ || (_ = {}));
      class _ {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: _.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: 3,
                display: (0, _._)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: 8,
                display: (0, _._)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: 5,
                display: (0, _._)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, _._)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, _._)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, _._)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: 11,
                display: (0, _._)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: 9,
                display: (0, _._)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: 10,
                display: (0, _._)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: _.k_All,
                display: (0, _._)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: _.k_Owned,
                display: (0, _._)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: _.k_Subscribed,
                display: (0, _._)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]),
            (0, _._)(this);
        }
        IsCommentOwned(_, _) {
          return _.bis_owner || _.owner_steam_id.ConvertTo64BitString() == _;
        }
        IsCommentSubscribed(_, _) {
          return _.bsubscribed;
        }
        ProcessHash(_) {
          if (
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear(),
            _)
          ) {
            _.split(",").forEach((_) => {
              const _ = this.k_rgFilterCheckboxes.findIndex((_) => _.hash == _);
              -1 !== _
                ? this.rgFilterState.set(this.k_rgFilterCheckboxes[_].type, !0)
                : (0, _._)(_) &&
                  this.rgFilterState.has(3) &&
                  this.commentFilter.setItemTypes.add(parseInt(_));
            });
          }
        }
        SetFilter(_, _, _) {
          _ &&
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear()),
            _ &&
              (this.rgFilterState.set(_, _),
              3 != _ || _ || this.commentFilter.setItemTypes.clear()),
            this.UpdateLocationHash();
        }
        SetCommentFilter(_) {
          var _;
          (this.commentFilter = _),
            (this.commentFilter.fnFilter =
              null ===
                (_ = this.k_rgCommentFilters.find((_) => _.type == _.type)) ||
              void 0 === _
                ? void 0
                : _.fnFilter),
            this.UpdateLocationHash();
        }
        UpdateLocationHash() {
          let _ = "";
          this.rgFilterState.forEach((_, _) => {
            var _;
            _ &&
              (_ +=
                (_ ? "," : "") +
                (null ===
                  (_ = this.k_rgFilterCheckboxes.find((_) => _.type == _)) ||
                void 0 === _
                  ? void 0
                  : _.hash));
          }),
            this.rgFilterState.has(3) &&
              this.commentFilter.setItemTypes.forEach(
                (_) => (_ += (_ ? "," : "") + _),
              ),
            window.history.pushState(
              {},
              null,
              window.location.pathname + (_ ? "#" + _ : ""),
            );
        }
      }
      function _() {
        (0, _._)(() => [..._.rgFilterState]);
        let _ = 0;
        return (
          _.rgFilterState.forEach((_) => {
            _ += _ ? 1 : 0;
          }),
          {
            numActive: _,
            filters: _.rgFilterState,
          }
        );
      }
      function _() {
        return (0, _._)(() => _.commentFilter);
      }
      function _() {
        return _.useMemo(() => {
          const _ = new Map();
          for (const _ of _.m_rgNotificationRollups.filter(
            (_) => 3 == _.type,
          )) {
            const _ = (0, _._)(_);
            _.set(_.comment_type, 1 + (_.get(_.comment_type) || 0));
          }
          return _;
        }, []);
      }
      function _() {
        const { numActive: _, filters: _ } = _(),
          _ = _(),
          _ = (0, _._)(),
          { settings: _ } = (0, _._)(_).data,
          _ = (0, _._)();
        return (
          (0, _._)(() => (0, _._)(_.m_summary)),
          _.m_rgNotificationRollups.filter((_) => {
            if (_ && !_.get(_.type)) return !1;
            if ((0, _._)(_.type, _, _)) return !1;
            if (
              _ &&
              3 == _.type &&
              (_.type != _.k_All || _.setItemTypes.size > 0)
            ) {
              const _ = (0, _._)(_);
              let _ = !_.fnFilter || __webpack_require__.fnFilter(_, _);
              return (
                _.setItemTypes.size > 0 &&
                  !_.setItemTypes.has(_.comment_type) &&
                  (_ = !1),
                _
              );
            }
            return !0;
          })
        );
      }
      (0, _._)([_._], _.prototype, "rgFilterState", void 0),
        (0, _._)([_._], _.prototype, "commentFilter", void 0);
      const _ = new _(),
        _ = new _._();
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { hash: _ } = _;
        (0, _.useEffect)(() => {
          _.ProcessHash(_);
        }, [_]);
        const _ = (0, _._)();
        (0, _.useEffect)(() => {
          _.setTransport(_), _.m_nUnviewed > 0 && _.MarkAllItemsViewed();
        }, [_]);
        const _ = (0, _._)("notifications", "application_config");
        return (
          _.ProcessNewNotificationPayload(_),
          _.m_rgNotificationRollups.length
            ? _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  "div",
                  {
                    className: _().NotificationPageCtn,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _().NotificationsHeader,
                    },
                    _.createElement(
                      "span",
                      {
                        className: _().NotificationsHeaderTitle,
                      },
                      (0, _._)("#NotificationsList_Header"),
                    ),
                    _.createElement(_, null),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _().NotificationsBody,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().NotificationListCtn,
                      },
                      _.createElement(_, null),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().NotificationFiltersCtn,
                      },
                      _.createElement(_, null),
                      _.createElement(
                        "div",
                        {
                          className: _().NotificationActions,
                        },
                        _.createElement(
                          _._,
                          {
                            href: "/my/moderatormessages",
                          },
                          (0, _._)("#CommunityActivity"),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            : _.createElement(
                "div",
                {
                  className: _().NotificationPageCtn,
                },
                _.createElement(_, null),
              )
        );
      }
      function _() {
        const _ = (function () {
            const _ = _(),
              _ = (0, _._)();
            return (
              _.map((_) => {
                var _;
                _.item.hidden ||
                  (0, _._)(
                    _,
                    _.type,
                    null === (_ = _.rgunread) || void 0 === _
                      ? void 0
                      : _.length,
                  );
              }),
              (0, _._)(_)
            );
          })(),
          _ = (0, _._)("#NotificationsList_Unread", _);
        return _.createElement(
          "span",
          {
            className: _().NotificationsHeaderUnread,
          },
          _,
        );
      }
      function _() {
        const _ = _();
        return _.createElement(
          _._,
          {
            className: _().NotificationsList,
          },
          _.map((_, _) =>
            _.createElement(_, {
              key: _,
              rollup: _,
            }),
          ),
        );
      }
      function _() {
        return _.createElement(
          _._,
          {
            className: _().EmptyNotifications,
          },
          _.createElement(
            _._,
            {
              className: _().EmptyNotificationsTitle,
            },
            (0, _._)("#NotificationsList_EmptyTitle"),
          ),
          _.createElement(
            _._,
            {
              className: _().EmptyNotificationsBody,
            },
            (0, _._)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      function _() {
        const _ = _(),
          _ = _.useMemo(() => {
            const _ = new Map();
            for (const _ of _.m_rgNotificationRollups)
              _.set(_.type, 1 + (_.get(_.type) || 0));
            return _;
          }, []);
        return _.createElement(
          "div",
          {
            className: _().NotificationsFilterCtn,
          },
          _.createElement(
            "div",
            {
              className: _().SettingsButtons,
            },
            _.createElement(
              "div",
              {
                className: _().SettingsTooltip,
              },
              _.createElement(
                _._,
                {
                  className: _().MarkAllReadButton,
                  onClick: () => _.MarkAllItemsRead(_),
                },
                (0, _._)("#NotificationsList_MarkAllRead"),
              ),
            ),
            _.createElement(
              _._,
              {
                className: _().SettingsButton,
                onClick: () =>
                  window.location.assign(
                    `${_._.STORE_BASE_URL}account/notificationsettings`,
                  ),
              },
              _.createElement(_.wB_, {
                className: _().SettingsImg,
              }),
              (0, _._)("#NotificationsList_Settings"),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _().SettingsFiltersTitle,
            },
            (0, _._)("#NotificationsList_FilterTo"),
          ),
          _.createElement(
            "div",
            {
              className: _().SettingsFilters,
            },
            _.k_rgFilterCheckboxes
              .filter((_) => _.has(_.type))
              .map((_) =>
                _.createElement(_, {
                  key: _.type,
                  filterOptions: _,
                }),
              ),
          ),
          _.createElement(
            _._,
            {
              className: _().ResetButton,
              onClick: () => _.SetFilter(null, !1, !0),
            },
            (0, _._)("#NotificationsList_Reset"),
          ),
        );
      }
      function _(_) {
        const { filterOptions: _ } = _,
          { filters: __webpack_require__ } = _();
        return 3 == _.type
          ? _.createElement(_, {
              filterOptions: _,
              checked: __webpack_require__.get(_.type),
            })
          : _.createElement(_._, {
              className: _().FilterCheckbox,
              key: _.type,
              label: _.display,
              checked: __webpack_require__.get(_.type),
              onChange: (_) => _.SetFilter(_.type, _),
            });
      }
      function _(_) {
        const { threadType: _ } = _,
          _ = _();
        return _.createElement(_._, {
          className: _().AdvancedCommentFilterCheckbox,
          label: (0, _._)("#CommentThreadType_" + _),
          checked: _.setItemTypes.has(_),
          onChange: (_) => {
            _
              ? (_.setItemTypes.add(Number(_)),
                _.SetCommentFilter({
                  type: _.type,
                  setItemTypes: _.setItemTypes,
                }))
              : (_.setItemTypes.delete(Number(_)),
                _.SetCommentFilter({
                  type: _.type,
                  setItemTypes: _.setItemTypes,
                }));
          },
        });
      }
      function _(_) {
        const { className: _ } = _,
          _ = _();
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().AdvancedCommentFilters, _),
          },
          Array.from(__webpack_require__.keys()).map((_) =>
            _.createElement(_, {
              key: _,
              threadType: _,
            }),
          ),
        );
      }
      function _(_) {
        const { expanded: _, children: __webpack_require__ } = _,
          [_, _] = (0, _.useState)(void 0),
          _ = (0, _._)((_) => {
            const _ = _.target;
            _(_.scrollHeight);
          });
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().Expander, _().Expanded),
            style: {
              height: _ ? _ : 0,
            },
          },
          _.createElement(
            "div",
            {
              ref: _,
            },
            __webpack_require__,
          ),
        );
      }
      function _(_) {
        const { filterOptions: _, checked: __webpack_require__ } = _,
          _ = (function () {
            const _ = (0, _._)();
            return _.useMemo(() => {
              const _ = new Map();
              for (const _ of _.k_rgCommentFilters)
                for (const _ of _.m_rgNotificationRollups.filter(
                  (_) => 3 == _.type,
                )) {
                  const _ = (0, _._)(_);
                  __webpack_require__.fnFilter(_, _) &&
                    _.set(_.type, 1 + (_.get(_.type) || 0));
                }
              return _;
            }, [_]);
          })(),
          _ = _(),
          _ = _.size > 2,
          _ = _.size > 1,
          _ = _ || _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(_._, {
            className: _().FilterCheckbox,
            key: _.type,
            label: _.display,
            checked: __webpack_require__,
            onChange: (_) => {
              _.SetFilter(_.type, _);
            },
          }),
          _ &&
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _().CommentFilterCtn,
                  __webpack_require__ && _().Expanded,
                ),
              },
              _.createElement(
                _,
                {
                  expanded: __webpack_require__,
                },
                _.createElement(
                  "div",
                  {
                    className: _().CommentFilters,
                  },
                  _ &&
                    _.createElement(_, {
                      className: _().Expanded,
                    }),
                ),
              ),
            ),
        );
      }
      function _(_, _, _) {
        _.read ||
          (_ && 0 != _.button && 1 != _.button) ||
          _.MarkItemRead(_.notification_id),
          _();
      }
      function _(_) {
        const { rollup: _ } = _;
        (0, _._)(() => _.item.hidden);
        const [__webpack_require__, _] = _.useState(!1),
          _ = (0, _._)(
            (0, _.useCallback)((_) => {
              _.isIntersecting && _(!0);
            }, []),
            {
              rootMargin: "600px",
            },
          ),
          _ = (0, _.useCallback)(() => {
            _.MarkItemHidden(_.item.notification_id);
          }, [_.item.notification_id]);
        if (_.item.hidden) return null;
        if (_.item.hidden && 5 == _.type) {
          const _ = (0, _._)(_);
          if ((0, _._)(_.state) || 1 == _.state) return null;
        }
        const _ = (0, _._)(_.type);
        return _
          ? _.createElement(
              _._,
              {
                controller: "notification",
                method: (0, _._)(3),
                submethod: (0, _._)(4),
              },
              _.createElement(
                _,
                {
                  ref: _,
                },
                __webpack_require__ &&
                  _.createElement(_, {
                    rollup: _,
                    onNotificationClick: _,
                    onHide: _,
                    location: 4,
                    uimode: 3,
                  }),
              ),
            )
          : null;
      }
      const _ = _.forwardRef((_, _) =>
        _.createElement(
          "div",
          {
            className: _().AllNotificationsRowCtn,
            ref: _,
          },
          _.children,
        ),
      );
      function _(_) {
        let _ = _.location.hash;
        return (
          _ && _.startsWith("#") && (_ = _.slice(1)),
          _.createElement(_, {
            hash: _,
          })
        );
      }
    },
  },
]);

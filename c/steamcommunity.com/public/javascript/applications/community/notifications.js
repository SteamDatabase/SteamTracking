(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6893],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = ((_) => (
            (_[(_.k_All = 0)] = "k_All"),
            (_[(_.k_Owned = 1)] = "k_Owned"),
            (_[(_.k_Subscribed = 2)] = "k_Subscribed"),
            _
          ))(_ || {});
        class _ {
          constructor() {
            (0, _._)(this);
          }
          rgFilterState = new Map();
          commentFilter = {
            type: 0,
            setItemTypes: new Set([]),
            fnFilter: () => !0,
          };
          k_rgFilterCheckboxes = [
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_Comments"),
              hash: "comments",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_Wishlist"),
              hash: "wishlist",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_FriendRequest"),
              hash: "invites",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_Gifts"),
              hash: "gifts",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_Inventory"),
              hash: "inventory",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_AsyncGame"),
              hash: "asyncgame",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_HelpRequest"),
              hash: "help",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_TradeOffer"),
              hash: "trade",
            },
            {
              type: _._._,
              display: (0, _._)("#NotificationsFilters_General"),
              hash: "general",
            },
          ];
          k_rgCommentFilters = [
            {
              type: 0,
              display: (0, _._)("#NotificationsList_CommentFilters_All"),
              fnFilter: () => !0,
            },
            {
              type: 1,
              display: (0, _._)("#NotificationsList_CommentFilters_YourItems"),
              fnFilter: this.IsCommentOwned,
            },
            {
              type: 2,
              display: (0, _._)("#NotificationsList_CommentFilters_Subscribed"),
              fnFilter: this.IsCommentSubscribed,
            },
          ];
          IsCommentOwned(_, _) {
            return _.bis_owner || _.owner_steam_id.ConvertTo64BitString() == _;
          }
          IsCommentSubscribed(_, _) {
            return _.bsubscribed;
          }
          ProcessHash(_) {
            this.rgFilterState.clear(),
              this.commentFilter.setItemTypes.clear(),
              _ &&
                _.split(",").forEach((_) => {
                  const _ = this.k_rgFilterCheckboxes.findIndex(
                    (_) => _.hash == _,
                  );
                  _ !== -1
                    ? this.rgFilterState.set(
                        this.k_rgFilterCheckboxes[_].type,
                        !0,
                      )
                    : (0, _._)(_) &&
                      this.rgFilterState.has(_._._) &&
                      this.commentFilter.setItemTypes.add(parseInt(_));
                });
          }
          SetFilter(_, _, _) {
            _ &&
              (this.rgFilterState.clear(),
              this.commentFilter.setItemTypes.clear()),
              _ &&
                (this.rgFilterState.set(_, _),
                _ == _._._ && !_ && this.commentFilter.setItemTypes.clear()),
              this.UpdateLocationHash();
          }
          SetCommentFilter(_) {
            (this.commentFilter = _),
              (this.commentFilter.fnFilter = this.k_rgCommentFilters.find(
                (_) => _.type == _.type,
              )?.fnFilter),
              this.UpdateLocationHash();
          }
          UpdateLocationHash() {
            let _ = "";
            this.rgFilterState.forEach((_, _) => {
              _ &&
                (_ +=
                  (_ ? "," : "") +
                  this.k_rgFilterCheckboxes.find((_) => _.type == _)?.hash);
            }),
              this.rgFilterState.has(_._._) &&
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
        _([_._], _.prototype, "rgFilterState", 2),
          _([_._], _.prototype, "commentFilter", 2);
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
          const _ = _(),
            _ = (0, _._)();
          return (
            _.map((_) => {
              _.item.hidden || (0, _._)(_, _.type, _.rgunread?.length);
            }),
            (0, _._)(_)
          );
        }
        function _() {
          return (0, _._)(() => _.commentFilter);
        }
        function _() {
          return _.useMemo(() => {
            const _ = new Map();
            for (const _ of _.m_rgNotificationRollups)
              _.set(_.type, 1 + (_.get(_.type) || 0));
            return _;
          }, []);
        }
        function _() {
          const _ = (0, _._)();
          return _.useMemo(() => {
            const _ = new Map();
            for (const _ of _.k_rgCommentFilters)
              for (const _ of _.m_rgNotificationRollups.filter(
                (_) => _.type == _._._,
              )) {
                const _ = (0, _._)(_);
                _.fnFilter(_, _) && _.set(_.type, 1 + (_.get(_.type) || 0));
              }
            return _;
          }, [_]);
        }
        function _() {
          return _.useMemo(() => {
            const _ = new Map();
            for (const _ of _.m_rgNotificationRollups.filter(
              (_) => _.type == _._._,
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
              if ((_ && !_.get(_.type)) || (0, _._)(_.type, _, _)) return !1;
              if (
                _ &&
                _.type == _._._ &&
                (_.type != 0 || _.setItemTypes.size > 0)
              ) {
                const _ = (0, _._)(_);
                let _ = !_.fnFilter || _.fnFilter(_, _);
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
        function _() {
          return _.m_summary;
        }
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
              ? (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsxs)("div", {
                    className: _().NotificationPageCtn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().NotificationsHeader,
                        children: [
                          (0, _.jsx)("span", {
                            className: _().NotificationsHeaderTitle,
                            children: (0, _._)("#NotificationsList_Header"),
                          }),
                          (0, _.jsx)(_, {}),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().NotificationsBody,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().NotificationListCtn,
                            children: (0, _.jsx)(_, {}),
                          }),
                          (0, _.jsxs)("div", {
                            className: _().NotificationFiltersCtn,
                            children: [
                              (0, _.jsx)(_, {}),
                              (0, _.jsx)("div", {
                                className: _().NotificationActions,
                                children: (0, _.jsx)(_._, {
                                  href: "/my/moderatormessages",
                                  children: (0, _._)("#CommunityActivity"),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, _.jsx)("div", {
                  className: _().NotificationPageCtn,
                  children: (0, _.jsx)(_, {}),
                })
          );
        }
        function _() {
          const _ = _(),
            _ = (0, _._)("#NotificationsList_Unread", _);
          return (0, _.jsx)("span", {
            className: _().NotificationsHeaderUnread,
            children: _,
          });
        }
        function _() {
          const _ = _();
          return (0, _.jsx)(_._, {
            className: _().NotificationsList,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  rollup: _,
                },
                _,
              ),
            ),
          });
        }
        function _() {
          return (0, _.jsxs)(_._, {
            className: _().EmptyNotifications,
            children: [
              (0, _.jsx)(_._, {
                className: _().EmptyNotificationsTitle,
                children: (0, _._)("#NotificationsList_EmptyTitle"),
              }),
              (0, _.jsx)(_._, {
                className: _().EmptyNotificationsBody,
                children: (0, _._)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        function _() {
          const _ = _(),
            _ = _(),
            _ = () =>
              window.location.assign(
                `${_._.STORE_BASE_URL}account/notificationsettings`,
              );
          return (0, _.jsxs)("div", {
            className: _().NotificationsFilterCtn,
            children: [
              (0, _.jsxs)("div", {
                className: _().SettingsButtons,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SettingsTooltip,
                    children: (0, _.jsx)(_._, {
                      className: _().MarkAllReadButton,
                      onClick: () => _.MarkAllItemsRead(_),
                      children: (0, _._)("#NotificationsList_MarkAllRead"),
                    }),
                  }),
                  (0, _.jsxs)(_._, {
                    className: _().SettingsButton,
                    onClick: _,
                    children: [
                      (0, _.jsx)(_.wB_, {
                        className: _().SettingsImg,
                      }),
                      (0, _._)("#NotificationsList_Settings"),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _().SettingsFiltersTitle,
                children: (0, _._)("#NotificationsList_FilterTo"),
              }),
              (0, _.jsx)("div", {
                className: _().SettingsFilters,
                children: _.k_rgFilterCheckboxes
                  .filter((_) => _.has(_.type))
                  .map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        filterOptions: _,
                      },
                      _.type,
                    ),
                  ),
              }),
              (0, _.jsx)(_._, {
                className: _().ResetButton,
                onClick: () => _.SetFilter(null, !1, !0),
                children: (0, _._)("#NotificationsList_Reset"),
              }),
            ],
          });
        }
        function _(_) {
          const { filterOptions: _ } = _,
            { filters: _ } = _();
          return _.type == _._._
            ? (0, _.jsx)(_, {
                filterOptions: _,
                checked: _.get(_.type),
              })
            : (0, _.jsx)(
                _._,
                {
                  className: _().FilterCheckbox,
                  label: _.display,
                  checked: _.get(_.type),
                  onChange: (_) => _.SetFilter(_.type, _),
                },
                _.type,
              );
        }
        function _(_) {
          const { threadType: _ } = _,
            _ = _(),
            _ = (_) => {
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
            };
          return (0, _.jsx)(_._, {
            className: _().AdvancedCommentFilterCheckbox,
            label: (0, _._)("#CommentThreadType_" + _),
            checked: _.setItemTypes.has(_),
            onChange: _,
          });
        }
        function _(_) {
          const { className: _ } = _,
            _ = _();
          return (0, _.jsx)("div", {
            className: (0, _._)(_().AdvancedCommentFilters, _),
            children: Array.from(_.keys()).map((_) =>
              (0, _.jsx)(
                _,
                {
                  threadType: _,
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          const { expanded: _, children: _ } = _,
            [_, _] = (0, _.useState)(void 0),
            _ = (_) => {
              const _ = _.target;
              _(_.scrollHeight);
            },
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().Expander, _().Expanded),
            style: {
              height: _ ? _ : 0,
            },
            children: (0, _.jsx)("div", {
              ref: _,
              children: _,
            }),
          });
        }
        function _(_) {
          const { filterOptions: _, checked: _ } = _,
            _ = _(),
            _ = _(),
            _ = (_) => {
              _.SetFilter(_.type, _);
            },
            _ = !1,
            _ = _ || _.size > 2,
            _ = _ || _.size > 1,
            _ = _ || _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(
                _._,
                {
                  className: _().FilterCheckbox,
                  label: _.display,
                  checked: _,
                  onChange: _,
                },
                _.type,
              ),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(_().CommentFilterCtn, _ && _().Expanded),
                  children: (0, _.jsx)(_, {
                    expanded: _,
                    children: (0, _.jsx)("div", {
                      className: _().CommentFilters,
                      children:
                        _ &&
                        (0, _.jsx)(_, {
                          className: _().Expanded,
                        }),
                    }),
                  }),
                }),
            ],
          });
        }
        function _(_, _, _) {
          !_.read &&
            (!_ || _.button == 0 || _.button == 1) &&
            _.MarkItemRead(_.notification_id),
            _();
        }
        function _(_) {
          const { rollup: _ } = _;
          (0, _._)(() => _.item.hidden);
          const [_, _] = _.useState(!1),
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
          if (_.item.hidden && _.type == _._._) {
            const _ = (0, _._)(_);
            if ((0, _.aPS)(_.state) || _.state == _.Yjh) return null;
          }
          const _ = (0, _._)(_.type);
          return _
            ? (0, _.jsx)(_._, {
                controller: "notification",
                method: (0, _.fLp)(_.yrU),
                submethod: (0, _.ey3)(_.oYe),
                children: (0, _.jsx)(_, {
                  ref: _,
                  children:
                    _ &&
                    (0, _.jsx)(_, {
                      rollup: _,
                      onNotificationClick: _,
                      onHide: _,
                      location: _.oYe,
                      uimode: _.yrU,
                    }),
                }),
              })
            : null;
        }
        const _ = _.forwardRef((_, _) =>
          (0, _.jsx)("div", {
            className: _().AllNotificationsRowCtn,
            ref: _,
            children: _.children,
          }),
        );
        function _(_) {
          let _ = _.location.hash;
          return (
            _ && _.startsWith("#") && (_ = _.slice(1)),
            (0, _.jsx)(_, {
              hash: _,
            })
          );
        }
      },
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
    },
  ]);
})();

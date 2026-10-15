(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [20976],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "m_observer", null),
              _(this, "m_refElement", _.createRef()),
              _(this, "m_elTracked", null),
              _(this, "m_bPreviouslyIntersecting", !1),
              _(this, "HandleRef", (_) => {
                (0, _._)(this.m_refElement, _),
                  this.props.containerRef &&
                    (0, _._)(this.props.containerRef, _);
              }),
              _(this, "OnIntersection", (_) => {
                let _ = !1;
                for (const _ of _)
                  if (_.isIntersecting) {
                    _ = !0;
                    break;
                  }
                this.m_bPreviouslyIntersecting != _ &&
                  ((this.m_bPreviouslyIntersecting = _),
                  this.props.onVisibilityChange &&
                    this.props.onVisibilityChange(_),
                  _ && this.BTriggerOnce() && this.DestroyObserver());
              });
          }
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(_) {
            this.UpdateObserver(_);
          }
          UpdateObserver(_) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              _ &&
              (_.rootMargin != this.m_observer.rootMargin ||
                _.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let _ = this.m_refElement.current;
            if (
              (this.m_observer &&
                _ != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && _)
            ) {
              let _ = {
                root: this.FindScrollableAncestor(_),
              };
              this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
                this.props.thresholds && (_.threshold = this.props.thresholds),
                (this.m_observer = (0, _._)(_, this.OnIntersection, _));
            }
            this.m_observer &&
              _ &&
              _ != this.m_elTracked &&
              (this.m_observer.observe(_), (this.m_elTracked = _));
          }
          FindScrollableAncestor(_) {
            return (0, _._)(_, (_) => {
              const _ = this.props.horizontal
                ? window.getComputedStyle(_).overflowX
                : window.getComputedStyle(_).overflowY;
              return !!(
                _ == "scroll" ||
                _ == "auto" ||
                _.classList.contains(_.GetScrollableClassname())
              );
            });
          }
          render() {
            let {
              onVisibilityChange: _,
              rootMargin: _,
              trigger: _,
              horizontal: _,
              containerRef: _,
              ..._
            } = this.props;
            return (0, _.jsx)(_._, {
              ref: this.HandleRef,
              ..._,
              children: this.props.children,
            });
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            GreenEnvelope: () => _,
            default: () => _,
            useSteamNotifications: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._(),
          _ = (0, _._)(function (_) {
            const { bResponsiveHeader: _, notifications: _ } = _;
            _.useEffect(() => {
              _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
            }, [_]);
            const _ = (0, _._)();
            (0, _.useEffect)(() => {
              _.setTransport(_),
                (window.RefreshSteamNotifications = () => _(_));
            }, [_]);
            const _ = _();
            return _
              ? (0, _.jsxs)(_.Fragment, {
                  children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
                })
              : (0, _.jsx)(_, {
                  nTotalUnviewed: _.nUnviewed,
                });
          });
        function _() {
          return (0, _._)(() => ({
            notifications: _.m_rgNotificationRollups,
            summary: _.m_summary,
            loaded: _.m_bLoaded,
            nUnviewed: _.m_nUnviewed,
          }));
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(),
            _ = _ == null ? void 0 : _.settings;
          return _.notifications.filter(
            (_) => !(0, _._)(_.type, _, _) && !(0, _._)(_.item),
          );
        }
        function _(_) {
          const { nTotalUnviewed: _ } = _,
            _ = _.useRef(null),
            _ = _(),
            [_, _] = _.useState(_().AnimateBell);
          _.useEffect(() => {
            _.current ||
              ((_.current = (0, _._)(
                (0, _.jsx)(_, {
                  popupRef: _,
                }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              _.current.Hide());
            const _ = document.getElementById("header_notification_link");
            _ && (_.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => _(null), 2e3);
          }, []);
          const _ = () => {
              var _, _;
              ((_ = _.current) != null && _.visible) ||
                ((_ = _.current) == null || _.Show(),
                _.findIndex((_) => !_.item.viewed) != -1 &&
                  _.MarkAllItemsViewed());
            },
            _ = _.useCallback(
              (_) => {
                var _;
                !_ && (_ = _.current) != null && _.visible && _.current.Hide();
              },
              [_],
            );
          return (0, _.jsx)(_._, {
            trigger: "repeated",
            onVisibilityChange: _,
            children: (0, _.jsx)("button", {
              onClick: _,
              _: "green_envelope_menu_root",
              className: (0, _._)(
                _().NotificationsButton,
                _ ? _().Green : _().Grey,
                _,
              ),
              children: (0, _.jsx)(_.$0s, {
                className: _().SVGNotifications,
                "aria-label": (0, _._)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const _ = (_) => {
            var _;
            const { popupRef: _ } = _,
              _ = _.useRef(null),
              [_, _] = _.useState(!1);
            _.useEffect(() => {
              var _, _;
              _(
                _.current != null &&
                  ((_ = _.current) == null ? void 0 : _.scrollHeight) >
                    ((_ = _.current) == null ? void 0 : _.clientHeight),
              );
            }, [(_ = _.current) == null ? void 0 : _.scrollHeight, _]);
            const _ = _ ? void 0 : _().MenuScrollbarHidden;
            return (0, _.jsxs)("div", {
              className: _().NotificationsMenu,
              onClick: () => {
                var _;
                return (_ = _ == null ? void 0 : _.current) == null
                  ? void 0
                  : _.Hide();
              },
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().NotificationsMenuScrollable, _),
                  ref: _,
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              ],
            });
          },
          _ = () => {
            const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().NotificationHeader),
              children: [
                (0, _.jsx)("div", {
                  className: _().AllNotificationsTitle,
                  children: (0, _._)("#NotificationsMenu_Title"),
                }),
                (0, _.jsx)("a", {
                  href: _,
                  children: (0, _.jsx)("div", {
                    className: _().AllNotificationsButton,
                    children: (0, _._)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          _ = () => {
            const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
            return (0, _.jsx)("div", {
              className: (0, _._)(
                _().NotificationHeader,
                _().ResponsiveViewAll,
              ),
              children: (0, _.jsx)("a", {
                href: _,
                children: (0, _.jsx)("div", {
                  className: _().AllNotificationsButton,
                  children: (0, _._)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function _(_, _, _) {
          !_.read &&
            (!_ || _.button == 0 || _.button == 1) &&
            _.notification_id &&
            _.MarkItemRead(_.notification_id),
            _();
        }
        function _() {
          const _ = _();
          return _.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().NotificationsMenuEntriesContainer,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _._,
                    {
                      rollup: _,
                      onNotificationClick: _,
                      uimode: _.yrU,
                      location: _.B3I,
                    },
                    _,
                  ),
                ),
              });
        }
        const _ = [
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: _._,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewGiftsPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: _.sdo,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_FriendInvitePinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications#comments`,
            countItem: "comments",
            icon: _.MwB,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewCommentPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory`,
            countItem: "inventory_items",
            icon: _.rI_,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewItemAnnouncementPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: _.h20,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewTradeOffersPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: _.wC1,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewAsyncGamePinned_Body", _),
          },
          {
            fnUrl: () => `${_._.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: _.hJ4,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewModeratorMessagePinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () => `${_._.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: _.Cv4,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewHelpRequestRepliesPinned_Body", _),
          },
          {
            fnUrl: () =>
              `${_._.STORE_BASE_URL}account/familymanagement/join?ft=${_._.steamid}`,
            countItem: "family_invites",
            icon: _.Qte,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_FamilyInvitePinned_Body", _),
          },
        ];
        function _() {
          const _ = _();
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) =>
              (0, _.jsx)(
                _._,
                {
                  url: _.fnUrl(),
                  count: _.summary[_.countItem],
                  icon: _.icon,
                  strBody: _.fnLocalizeBody(_.summary[_.countItem]),
                  eFeature: _.feature,
                },
                _.countItem,
              ),
            ),
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _().EmptyNotificationsCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().EmptyNotificationsTitle,
                children: (0, _._)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, _.jsx)("div", {
                className: _().EmptyNotificationsBody,
                children: (0, _._)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const _ = _;
        async function _(_) {
          let _ = null;
          try {
            _ = await (0, _._)(
              _,
              _._.steamid,
              (0, _.sfN)(_._.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          _ && _.ProcessNewNotificationPayload(_);
        }
      },
      chunkid: (module) => {
        module.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
    },
  ]);
})();

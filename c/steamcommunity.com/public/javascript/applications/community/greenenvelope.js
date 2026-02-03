(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [976],
  {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._(),
        _ = (0, _._)(function (_) {
          const { bResponsiveHeader: _, notifications: __webpack_require__ } =
            _;
          _.useEffect(() => {
            __webpack_require__ &&
              !_.m_bLoaded &&
              _.ProcessNewNotificationPayload(__webpack_require__);
          }, [__webpack_require__]);
          const _ = (0, _._)();
          (0, _.useEffect)(() => {
            _.setTransport(_),
              (window.RefreshSteamNotifications = () =>
                (async function (_) {
                  let _ = null;
                  try {
                    _ = await (0, _._)(
                      _,
                      _._.steamid,
                      (0, _._)(_._.LANGUAGE),
                      void 0,
                      !1,
                      !1,
                    );
                  } catch (_) {}
                  _ && _.ProcessNewNotificationPayload(_);
                })(_));
          }, [_]);
          const _ = _();
          return _
            ? _.createElement(
                _.Fragment,
                null,
                _.createElement(_, null),
                _.createElement(_, null),
              )
            : _.createElement(_, {
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
          { data: __webpack_require__ } = (0, _._)(_),
          _ = (0, _._)(),
          _ =
            null == __webpack_require__ ? void 0 : __webpack_require__.settings;
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
              _.createElement(_, {
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
        const _ = _.useCallback(
          (_) => {
            var _;
            !_ &&
              (null === (_ = _.current) || void 0 === _ ? void 0 : _.visible) &&
              _.current.Hide();
          },
          [_],
        );
        return _.createElement(
          _._,
          {
            trigger: "repeated",
            onVisibilityChange: _,
          },
          _.createElement(
            "button",
            {
              onClick: () => {
                var _, _;
                if (
                  !(null === (_ = _.current) || void 0 === _
                    ? void 0
                    : _.visible)
                ) {
                  null === (_ = _.current) || void 0 === _ || _.Show();
                  -1 != _.findIndex((_) => !_.item.viewed) &&
                    _.MarkAllItemsViewed();
                }
              },
              _: "green_envelope_menu_root",
              className: (0, _._)(
                _().NotificationsButton,
                _ ? _().Green : _().Grey,
                _,
              ),
            },
            _.createElement(_.$0s, {
              className: _().SVGNotifications,
              "aria-label": (0, _._)("#NotificationsMenu_Title"),
            }),
          ),
        );
      }
      const _ = (_) => {
          var _;
          const { popupRef: __webpack_require__ } = _,
            _ = _.useRef(null),
            [_, _] = _.useState(!1);
          _.useEffect(() => {
            var _, _;
            _(
              null != _.current &&
                (null === (_ = _.current) || void 0 === _
                  ? void 0
                  : _.scrollHeight) >
                  (null === (_ = _.current) || void 0 === _
                    ? void 0
                    : _.clientHeight),
            );
          }, [
            null === (_ = _.current) || void 0 === _ ? void 0 : _.scrollHeight,
            _,
          ]);
          const _ = _ ? void 0 : _().MenuScrollbarHidden;
          return _.createElement(
            "div",
            {
              className: _().NotificationsMenu,
              onClick: () => {
                var _;
                return null ===
                  (_ =
                    null == __webpack_require__
                      ? void 0
                      : __webpack_require__.current) || void 0 === _
                  ? void 0
                  : _.Hide();
              },
            },
            _.createElement(_, null),
            _.createElement(
              "div",
              {
                className: (0, _._)(_().NotificationsMenuScrollable, _),
                ref: _,
              },
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
            ),
          );
        },
        _ = () => {
          const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
          return _.createElement(
            "div",
            {
              className: (0, _._)(_().NotificationHeader),
            },
            _.createElement(
              "div",
              {
                className: _().AllNotificationsTitle,
              },
              (0, _._)("#NotificationsMenu_Title"),
            ),
            _.createElement(
              "a",
              {
                href: _,
              },
              _.createElement(
                "div",
                {
                  className: _().AllNotificationsButton,
                },
                (0, _._)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        },
        _ = () => {
          const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _().NotificationHeader,
                _().ResponsiveViewAll,
              ),
            },
            _.createElement(
              "a",
              {
                href: _,
              },
              _.createElement(
                "div",
                {
                  className: _().AllNotificationsButton,
                },
                (0, _._)("#NotificationsMenu_ViewAll"),
              ),
            ),
          );
        };
      function _(_, _, _) {
        _.read ||
          (_ && 0 != _.button && 1 != _.button) ||
          !_.notification_id ||
          _.MarkItemRead(_.notification_id),
          _();
      }
      function _() {
        const _ = _();
        return 0 == _.length
          ? null
          : _.createElement(
              "div",
              {
                className: _().NotificationsMenuEntriesContainer,
              },
              _.map((_, _) =>
                _.createElement(_._, {
                  key: _,
                  rollup: _,
                  onNotificationClick: _,
                  uimode: 3,
                  location: 3,
                }),
              ),
            );
      }
      const _ = [
        {
          fnUrl: () =>
            `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: _._,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: 1,
        },
        {
          fnUrl: () =>
            `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: _.sdo,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: 4,
        },
        {
          fnUrl: () =>
            `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications#comments`,
          countItem: "comments",
          icon: _.MwB,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: 2,
        },
        {
          fnUrl: () =>
            `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory`,
          countItem: "inventory_items",
          icon: _.rI_,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: 3,
        },
        {
          fnUrl: () =>
            `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: _.h20,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: 6,
        },
        {
          fnUrl: () =>
            `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: _.wC1,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${_._.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: _.hJ4,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: 2,
        },
        {
          fnUrl: () => `${_._.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: _.Cv4,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${_._.STORE_BASE_URL}account/familymanagement/join?ft=${_._.steamid}`,
          countItem: "family_invites",
          icon: _.Qte,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function _() {
        const _ = _();
        return _.createElement(
          _.Fragment,
          null,
          _.map((_) =>
            _.createElement(_._, {
              key: _.countItem,
              url: _.fnUrl(),
              count: _.summary[_.countItem],
              icon: _.icon,
              strLocToken: _.strLocToken,
              eFeature: _.feature,
            }),
          ),
        );
      }
      function _() {
        return _.createElement(
          "div",
          {
            className: _().EmptyNotificationsCtn,
          },
          _.createElement(
            "div",
            {
              className: _().EmptyNotificationsTitle,
            },
            (0, _._)("#NotificationsList_EmptyTitle_New"),
          ),
          _.createElement(
            "div",
            {
              className: _().EmptyNotificationsBody,
            },
            (0, _._)("#NotificationsList_EmptyBody"),
          ),
        );
      }
      const _ = _;
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
      class _ extends _.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = _.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
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
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
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
          return _._(_, (_) => {
            const _ = this.props.horizontal
              ? window.getComputedStyle(_).overflowX
              : window.getComputedStyle(_).overflowY;
            return (
              "scroll" == _ ||
              "auto" == _ ||
              !!_.classList.contains(_.GetScrollableClassname())
            );
          });
        }
        OnIntersection(_, _) {
          let _ = !1;
          for (const _ of _)
            if (_.isIntersecting) {
              _ = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != _ &&
            ((this.m_bPreviouslyIntersecting = _),
            this.props.onVisibilityChange && this.props.onVisibilityChange(_),
            _ && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: _,
            rootMargin: _,
            trigger: __webpack_require__,
            horizontal: _,
            ..._
          } = this.props;
          return _.createElement(
            "div",
            {
              ref: this.m_refElement,
              ..._,
            },
            this.props.children,
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnIntersection", null);
    },
  },
]);

(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [58758],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          m_mapAppIDToPaymentPartners = new Map();
          m_mapAppIDToPromise = new Map();
          m_mapPackageIDToPaymentPartners = new Map();
          m_mapPackageIDToPromise = new Map();
          m_mapBundleIDToPaymentPartners = new Map();
          m_mapBundleIDToPromise = new Map();
          GetInfoForApp(_) {
            return this.m_mapAppIDToPaymentPartners.get(_);
          }
          BHasInfoForApp(_) {
            return this.m_mapAppIDToPaymentPartners.has(_);
          }
          GetInfoForPackage(_) {
            return this.m_mapPackageIDToPaymentPartners.get(_);
          }
          BHasInfoForPackage(_) {
            return this.m_mapPackageIDToPaymentPartners.has(_);
          }
          GetInfoForBundle(_) {
            return this.m_mapBundleIDToPaymentPartners.get(_);
          }
          BHasInfoForBundle(_) {
            return this.m_mapBundleIDToPaymentPartners.has(_);
          }
          GetInfoForStoreItem(_, _) {
            switch (_) {
              case _._._:
                return this.GetInfoForApp(_);
              case _._._:
                return this.GetInfoForPackage(_);
              case _._._:
                return this.GetInfoForBundle(_);
              default:
                return null;
            }
          }
          BHasInfoForStoreItem(_, _) {
            switch (_) {
              case _._._:
                return this.BHasInfoForApp(_);
              case _._._:
                return this.BHasInfoForPackage(_);
              case _._._:
                return this.BHasInfoForBundle(_);
              default:
                return !1;
            }
          }
          async LoadAppPartnerInfo(_) {
            return (
              this.m_mapAppIDToPromise.has(_) ||
                this.m_mapAppIDToPromise.set(
                  _,
                  this.InternalLoadAppPartnerInfo(_, null, null),
                ),
              this.m_mapAppIDToPromise.get(_)
            );
          }
          async LoadPackagePartnerInfo(_) {
            return (
              this.m_mapPackageIDToPromise.has(_) ||
                this.m_mapPackageIDToPromise.set(
                  _,
                  this.InternalLoadAppPartnerInfo(null, _, null),
                ),
              this.m_mapPackageIDToPromise.get(_)
            );
          }
          async LoadBundlePartnerInfo(_) {
            return (
              this.m_mapBundleIDToPromise.has(_) ||
                this.m_mapBundleIDToPromise.set(
                  _,
                  this.InternalLoadAppPartnerInfo(null, null, _),
                ),
              this.m_mapBundleIDToPromise.get(_)
            );
          }
          async LoadStoreItemPartnerInfo(_, _) {
            switch (_) {
              case _._._:
                return this.LoadAppPartnerInfo(_);
              case _._._:
                return this.LoadPackagePartnerInfo(_);
              case _._._:
                return this.LoadBundlePartnerInfo(_);
              default:
                return null;
            }
          }
          async InternalLoadAppPartnerInfo(_, _, _) {
            let _ = null;
            try {
              const _ = {
                  appid: _,
                  packageid: _,
                  bundleid: _,
                },
                _ =
                  _._.PARTNER_BASE_URL + "promotion/dailydeals/ajaxgetpartner",
                _ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                });
              if (_?.status == 200 && _.data?.success == _._)
                return _
                  ? (this.m_mapAppIDToPaymentPartners.set(
                      _,
                      _.data.partnerinfo,
                    ),
                    this.m_mapAppIDToPaymentPartners.get(_))
                  : _
                    ? (this.m_mapPackageIDToPaymentPartners.set(
                        _,
                        _.data.partnerinfo,
                      ),
                      this.m_mapPackageIDToPaymentPartners.get(_))
                    : (this.m_mapBundleIDToPaymentPartners.set(
                        _,
                        _.data.partnerinfo,
                      ),
                      this.m_mapBundleIDToPaymentPartners.get(_));
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CPartnerPaymentStore.LoadAppPartnerInfo failed: " +
                  _?.strErrorMsg,
                _,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {}
        }
        function _(_) {
          return _(_, _._._);
        }
        function _(_) {
          return _(_, EStoreItemType.k_EStoreItemType_Package);
        }
        function _(_) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle);
        }
        function _(_) {
          return _(_._, (0, _._)(_));
        }
        function _(_, _) {
          const [_, _] = _.useState(() => _.Get().GetInfoForStoreItem(_, _));
          return (
            _.useEffect(() => {
              _
                ? !_.Get().BHasInfoForStoreItem(_, _) || _ == null
                  ? _.Get().LoadStoreItemPartnerInfo(_, _).then(_)
                  : _.Get().BHasInfoForStoreItem(_, _) &&
                    _ != _.Get().GetInfoForStoreItem(_, _) &&
                    _(_.Get().GetInfoForStoreItem(_, _))
                : _(null);
            }, [_, _, _]),
            _
          );
        }
        function _(_) {
          const [_, _] = (0, _.useState)(null);
          return (
            (0, _.useEffect)(() => {
              if (_?.length > 0) {
                const _ = _.map((_) =>
                  _.Get().LoadStoreItemPartnerInfo(_, _._._),
                );
                Promise.all(_).then(() => {
                  const _ = new Map();
                  _.forEach((_) => {
                    _.Get().BHasInfoForApp(_) &&
                      _.set(_, _.Get().GetInfoForApp(_));
                  }),
                    _(_);
                });
              }
            }, [_]),
            _
          );
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          if (!_ || _.trim().length == 0) return null;
          try {
            return JSON.parse(_);
          } catch {
            return null;
          }
        }
        function _(_, _) {
          const _ = new Set();
          return _.filter((_) => {
            const _ = _(_);
            return _.has(_) ? !1 : (_.add(_), !0);
          });
        }
        function _(..._) {
          return [...new Set(_.flat())];
        }
        function _(_) {
          const { href: _, children: _ } = _;
          return _
            ? (0, _.jsx)("a", {
                ..._,
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _,
              });
        }
        function _(_, _) {
          const _ = {
              sText: (0, _._)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, _._)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            _ = {
              sText: (0, _._)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            _ = {
              released: {
                sText: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, _._)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let _ = _;
          return _ in _ ? (_ = _[_]) : _ || (_ = _), _;
        }
        function _(_) {
          if (_.type == "seasonalsale") {
            const _ = _.name.toLowerCase();
            if (_.includes("spring")) return "#dd71d4";
            if (_.includes("summer")) return "#29c6ec";
            if (_.includes("autumn")) return "#ac240c";
            if (_.includes("winter")) return "#01704f";
          }
        }
        function _(_) {
          let _ = 0;
          for (let _ = 0; _ < _.length; _++)
            _ = _.charCodeAt(_) + ((_ << 5) - _);
          const _ = _ % 360,
            _ = 50 + (_ % 50),
            _ = 40 + (_ % 30);
          return `hsl(${_}, ${_}%, ${_}%, 0.25)`;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const { data: _ } = (0, _._)(_, _);
          return _ ?? null;
        }
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
        function _(_) {
          const { oEditableMessage: _ } = _,
            [_] = (0, _._)(() => [_.GetStoreItemKey()]);
          return !_ || _.item_type != "app"
            ? (0, _.jsx)("div", {
                className: _.ErrorStylesWithIcon,
                children:
                  "Error: Major Update does not support anything but targeting app",
              })
            : (0, _.jsx)(_, {
                oEditableMessage: _,
                idKey: _,
              });
        }
        function _(_) {
          const { oEditableMessage: _, idKey: _ } = _,
            [_, _] = (0, _._)(() => [
              _.GetUpdateEventClanAccountID(),
              _.GetUpdateEventGID(),
            ]),
            { data: _ } = (0, _._)(
              (0, _._)({
                item_type: (0, _._)(_.item_type),
                _: _._,
              }),
            ),
            _ = (0, _.useMemo)(() => _._.InitFromClanID(_), [_]),
            _ = _?.type != _._._ ? _?.related_items?.parent_appid : void 0;
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_, {
                appid: _ || _._,
                selectedEventGID: _,
                fnSetUpdateEvent: _.SetUpdateEvent,
                label: (0, _._)("#EventDropDown_MM_FeaturedEvent"),
                tooltip: (0, _._)("#EventDropDown_MM_FeaturedEvent_ttip"),
                strUrlLearnMore:
                  "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
              }),
              !!_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("a", {
                      href: `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/edit/${_}`,
                      target: "_blank",
                      children: "open event for edit",
                    }),
                    "\xA0 \xA0",
                    (0, _.jsx)(_._, {
                      toolTipContent:
                        "Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library",
                      children: (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                        target: "_blank",
                        children: "open event moderation tool",
                      }),
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("br", {}),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const {
              appid: _,
              selectedEventGID: _,
              fnSetUpdateEvent: _,
              label: _,
              tooltip: _,
              strUrlLearnMore: _,
              bFilterOutDrafts: _,
            } = _,
            _ = (0, _._)(),
            { clanInfo: _, bLoadingClanInfo: _ } = (0, _._)(_),
            _ = _(_?.clanAccountID, _ - 720 * 60 * 60),
            _ = (0, _.useMemo)(
              () => (_ ? _?.filter((_) => !_.hidden) : _),
              [_, _],
            ),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? _.map((_) => {
                      const _ = _.hidden
                        ? _.published
                          ? "#EventDropDown_HiddenPublish"
                          : "#EventDropDown_Hidden"
                        : "#EventDropDown_Visible";
                      return {
                        label: (0, _._)(
                          _,
                          (0, _._)(_.rtime32_start_time),
                          _.event_name,
                        ),
                        data: _,
                      };
                    })
                  : [],
              [_],
            ),
            _ = _?.find((_) => _.gid === _);
          return !_ && (_ || _?.appid)
            ? (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
                size: "small",
                position: "center",
              })
            : !_ || _.length == 0
              ? (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsxs)(_._, {
                      children: [
                        _,
                        " ",
                        (0, _.jsx)(_._, {
                          tooltip: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_.ErrorStylesWithIcon, "ErrorCtn"),
                      children: (0, _._)(
                        "#EventDropDown_NoEventFound",
                        (0, _.jsx)("a", {
                          href: `${_._.COMMUNITY_BASE_URL}ogg/${_}/partnerevents`,
                          target: "_blank",
                        }),
                      ),
                    }),
                  ],
                })
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    !!_ &&
                      (0, _.jsx)("a", {
                        href: _,
                        target: "_blank",
                        style: {
                          float: "right",
                        },
                        children: (0, _._)(
                          "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                        ),
                      }),
                    (0, _.jsx)(_._, {
                      label: _,
                      tooltip: _,
                      selectedOption: _,
                      onChange: (_) => _(_.clanAccountID, _.data.gid),
                      rgOptions: _,
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
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              fnSetItemID: _,
              strLabel: _,
              itemType: _,
              fnFilterID: _,
              className: _,
              tooltip: _,
              autoFocus: _,
              bIncludeRetired: _,
              bShowDLCToggle: _,
              bOnlyDLC: _,
              bRunQueryOnLoad: _,
              rgParentAppIDs: _,
            } = _,
            [_, _] = _.useState(""),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_] = _.useState(new _._()),
            [_, _] = _.useState(new Array()),
            [_, _] = _.useState(new Array()),
            [_, _] = _.useState(new Array()),
            _ = _.createRef(),
            _ = _.createRef(),
            _ = (0, _.useCallback)(
              async (_, _) => {
                _(!0);
                let _ = {
                    json: 1,
                    term: _,
                    bexcluderetired: !_,
                  },
                  _ = `${_._.PARTNER_BASE_URL}appsearch/suggestapps`;
                switch (_) {
                  case _._._:
                    _ = `${_._.PARTNER_BASE_URL}admin/store/suggestpackage`;
                    break;
                  case _._._:
                    _ = `${_._.PARTNER_BASE_URL}bundles/suggestbundle`;
                    break;
                  default:
                    _ ? (_.includedlc = !0) : _ === !1 && (_.includedlc = !1),
                      _ &&
                        ((_.bfilterappids = !0),
                        (_.rgParentAppIds = JSON.stringify(_)));
                    break;
                }
                const _ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                });
                _?.status == 200 && _.data?.success == _._
                  ? _
                    ? (_(_.data.matches?.filter((_) => _(_._)) || []),
                      _(
                        _.data.package_matches?.filter((_) => _(_.packageid)) ||
                          [],
                      ),
                      _(
                        _.data.bundle_matches?.filter((_) => _(_.bundleid)) ||
                          [],
                      ))
                    : (_(_.data.matches || []),
                      _(_.data.package_matches || []),
                      _(_.data.bundle_matches || []))
                  : (_([]), _([]), _([])),
                  _(!1);
              },
              [_, _, _, _, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _(_), _(_.current?.value, _);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                const _ = _?.target?.value?.toLocaleLowerCase() ?? "";
                _(_);
                const _ = 1e3,
                  _ = _.current?.checked;
                _.Schedule(_, () => _(_, _));
              },
              [_, _, _],
            );
          _.useEffect(() => {
            _ && _(_);
          }, []);
          let _;
          switch (_) {
            case _._._:
              _ = (0, _._)("#StoreAdmin_Search_Placeholder_package");
              break;
            case _._._:
              _ = (0, _._)("#StoreAdmin_Search_Placeholder_bundle");
              break;
            default:
              _ = (0, _._)("#StoreAdmin_Search_Placeholder");
          }
          const _ = _ && !_ && _ == _._._;
          return (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsxs)("div", {
                className: _.AppSearchInputContainer,
                children: [
                  (0, _.jsx)(_._, {
                    type: "text",
                    ref: _,
                    className: _.SearchInput,
                    label: _,
                    tooltip: _,
                    placeholder: _,
                    onChange: _,
                    value: _,
                    bAlwaysShowClearAction: _.length > 0,
                    focusOnMount: _,
                  }),
                  _ &&
                    (0, _.jsx)(_._, {
                      ref: _,
                      checked: _,
                      onChange: _,
                      className: _.AppSearchDLCCheckbox,
                      label: (0, _._)("#StoreAdmin_Search_IncludeDLC"),
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.Results,
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.LoadingContainer,
                      children: (0, _.jsx)(_._, {
                        size: "small",
                      }),
                    }),
                  _?.length > 0 &&
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          name: _.match,
                          _: _._,
                          is_visible: !0,
                          type: _._._,
                          fnSetItemID: () => {
                            _([]), _(_._, _.itemid);
                          },
                        },
                        _._,
                      ),
                    ),
                  _?.length > 0 &&
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          name: _.name,
                          _: _.packageid,
                          type: _._._,
                          is_visible: _.is_visible,
                          fnSetItemID: () => {
                            _([]), _(_.packageid);
                          },
                        },
                        _.packageid,
                      ),
                    ),
                  _?.length > 0 &&
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          name: _.name,
                          _: _.bundleid,
                          type: _._._,
                          is_visible: _.is_visible,
                          fnSetItemID: () => {
                            _([]), _(_.bundleid);
                          },
                        },
                        _.bundleid,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { name: _, _: _, type: _, is_visible: _, fnSetItemID: _ } = _,
            [_] = (0, _._)(_, _, {
              include_assets: !0,
            });
          let _ = "#DailyDeals_HeaderArtMissing";
          switch (_) {
            case _._._:
              _ = "#DailyDeals_PackageHeaderArtMissing";
              break;
            case _._._:
              _ = "#DailyDeals_BundleHeaderArtMissing";
              break;
          }
          return (0, _.jsxs)("div", {
            className: _.ResultRow,
            onClick: () => _(),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_.AvatarImageCtn, "AvatarImageCtn"),
                children: (0, _.jsx)("img", {
                  src: _?.GetAssets()?.GetHeaderURL(),
                  className: _.AvatarImage,
                  alt: (0, _._)(_),
                }),
              }),
              (0, _.jsxs)("div", {
                className: _.GameName,
                children: [
                  !_ &&
                    (0, _.jsxs)("span", {
                      children: [(0, _._)("#Sale_FeaturingHidden"), " "],
                    }),
                  _,
                  _ == _._._ ? ` (${_})` : "",
                ],
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
          _ = __webpack_require__._(_);
        function _() {
          return _.TextEntry;
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
          _ = __webpack_require__._(_),
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
        function _(_) {
          const { extracted: _, remaining: _ } = (0, _._)(_),
            {
              value: _,
              onTextChange: _,
              onTextClear: _,
              clearable: _,
              onChange: _,
              radius: _,
              variant: _,
              size: _,
              beforeContent: _,
              afterContent: _,
              inputRef: _,
              ref: _,
              disabled: _,
              gamepadFocusable: _ = !0,
              status: _,
              ..._
            } = _,
            _ = (0, _._)(),
            _ = (_) => {
              _ || (_(_.target.value), _ && _(_));
            },
            _ = () => {
              _(""), _ && _();
            },
            _ = !!_ && _,
            _ = _
              ? (0, _.jsx)(_._, {
                  onClick: _,
                  cursor: "pointer",
                  hitSlop: !0,
                })
              : _,
            _ = (0, _._)("TextInput", _),
            _ = {
              ..._,
              variant: _,
              size: _,
              radius: _,
              status: _,
              beforeContent: _,
              afterContent: _,
              ref: _,
              disabled: _,
            },
            _ = (0, _.useRef)(null),
            _ = (_) => {
              _.current && _.target !== _.current && _.current.focus();
            },
            _ = _ && _,
            _ = _ ? _ : "input",
            _ =
              _ && _ && !_
                ? {
                    onSecondaryButton: _,
                    actionDescriptionMap: {
                      [_._.SECONDARY]: _._.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, _.jsx)(_._, {
            cursor: "text",
            ..._,
            onClick: _,
            children: (0, _.jsx)(_, {
              ref: (0, _._)(_, _),
              type: "text",
              "aria-disabled": _,
              readOnly: _,
              className: _()((0, _._)(), (0, _._)()),
              value: _ || "",
              onChange: _,
              ..._,
              ..._,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            noFocusRing: !0,
            ..._,
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
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        class _ {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(_, _) {
            _ instanceof Map
              ? (this.m_dictComponents = _)
              : (this.m_dictComponents = new Map(Object.entries(_))),
              (this.m_fnAccumulatorFactory = _);
          }
          Parse(_, _, _ = !0) {
            const _ = _(_ || "", _);
            return this.Parse_BuildElements(_, _);
          }
          Parse_BuildElements(_, _) {
            let _ = this.m_fnAccumulatorFactory(void 0);
            const _ = [],
              _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
              _ = this.m_dictComponents,
              _ = (_) => !!(_.tag && _.get(_.tag)?.autocloses);
            let _ = !1,
              _ = !0;
            const _ = (_, _) => {
              let _ = _.text.toLowerCase();
              if (_ && _.node.tag === _ && _.get(_.node.tag)) {
                const _ = _.get(_.node.tag),
                  _ = {
                    tagname: _.node.tag,
                    args: _.node.args,
                    rawargs: _.node.rawargs,
                  },
                  _ = _(_.Constructor, _, ..._.GetElements());
                (_ = _.accumulator),
                  Array.isArray(_)
                    ? _.forEach((_) => _.AppendNode(_))
                    : _.AppendNode(_),
                  (_ = !!_.skipFollowingNewline),
                  (_ = _.bWrapTextForCopying);
              } else if (_) {
                const _ = _.accumulator;
                _.AppendText("[" + _.node.text + "]", !1),
                  _.GetElements().forEach((_) => _.AppendNode(_)),
                  _.AppendText("[/" + _.text + "]", !1),
                  (_ = _),
                  (_ = _.bWrapTextForCopying);
              }
            };
            for (
              _.forEach((_, _) => {
                if (_.type == _) {
                  const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                  _.AppendText(_, _), (_ = !1);
                } else if (_.type == _) {
                  const _ = _.get(_.tag);
                  if (!_) _.AppendText("[" + _.text + "]", _.length == 0);
                  else {
                    const _ = _();
                    if (_ !== void 0) {
                      const _ = _.get(_.node.tag);
                      _ &&
                        _.autocloses &&
                        _.tag === _.node.tag &&
                        _(_.pop(), _.node);
                    }
                    _.push({
                      accumulator: _,
                      node: _,
                      bWrapTextForCopying: _,
                    }),
                      (_ = this.m_fnAccumulatorFactory(_)),
                      (_ = !!_.skipInternalNewline),
                      (_ = _.allowWrapTextForCopying ?? !1);
                  }
                } else if (_.type == _) {
                  let _ = _.text.toLowerCase();
                  for (; _() && _().node.tag !== _ && _(_().node); ) {
                    const _ = _.pop();
                    _(_, _.node);
                  }
                  if (_()?.node.tag == _) {
                    const _ = _.pop();
                    _(_, _);
                  } else _.AppendText("[/" + _.text + "]", _.length == 0);
                }
              });
              _.length > 0;
            ) {
              const _ = _.pop();
              _(_, _.node);
            }
            return _.GetElements();
          }
        }
        function _(_, _, _ = !1) {
          let _ = "[" + _;
          _?.[""] && (_ += `=${_ ? "" + _[""] : _("" + _[""])}`);
          for (const _ in _) _ !== "" && (_ += ` ${_(_)}=${_("" + _[_])}`);
          return (_ += "]"), _;
        }
        function _(_) {
          return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function _(_) {
          return _.replace(/(\\| |\])/g, "\\$1");
        }
        function _(_) {
          return `[/${_}]`;
        }
        function _(_) {
          return _.replace(/(\\|\[)/g, "\\$1");
        }
        function _(_, _, _ = _) {
          const { type: _, text: _ = "" } = _;
          if (_ == _) {
            let _ = _.indexOf("=");
            const _ = _.indexOf(" ");
            _ != -1 && (_ == -1 || _ < _) && (_ = _);
            let _,
              _,
              _ = "";
            _ > 0
              ? ((_ = _.substr(0, _).toLocaleLowerCase()),
                (_ = _.substr(_)),
                (_ = _(_)))
              : ((_ = {}), (_ = _.toLocaleLowerCase())),
              _.push({
                type: _,
                text: _,
                tag: _,
                args: _,
                rawargs: _,
              });
          } else
            _ != _ &&
              _.push({
                type: _,
                text: _,
              });
          return {
            type: _,
            text: "",
          };
        }
        function _(_) {
          let _ = "";
          return (
            _.type == _ ? (_ = "[/") : _.type == _ && (_ = "["),
            {
              type: _,
              text: _ + (_.text ?? ""),
            }
          );
        }
        function _(_, _) {
          const _ = [];
          let _ = {
              type: _,
              text: "",
            },
            _ = !1,
            _ = !1,
            _ = !1;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            switch (_.type) {
              case _:
                _ == "["
                  ? ((_.type = _), (_ = !0))
                  : ((_.type = _), _ == "\\" && _ ? (_ = !_) : (_.text += _));
                break;
              case _:
              case _:
                if (_ == "/" && _) (_.type = _), (_.text = ""), (_ = !1);
                else if (_ == "[" && !_) (_ = _(_, _(_), _)), (_ = !0);
                else if (_ == "]" && !_) {
                  const _ =
                      _.type == _ && _.text?.toLocaleLowerCase() == "noparse",
                    _ = _.type == _ && _.text?.toLocaleLowerCase() == "noparse";
                  _ || (_ && !_)
                    ? ((_ = _(_)), (_.text += _))
                    : _
                      ? (_ = !0)
                      : _ && (_ = !1),
                    (_ = _(_, _)),
                    (_ = !1);
                } else
                  _ == "\\" && _
                    ? ((_.text += _), (_ = !_), (_ = !1))
                    : ((_.text += _), (_ = !1), (_ = !1));
                break;
              case _:
                _ == "[" && !_
                  ? ((_ = _(_, _, _)), (_ = !0))
                  : _ == "\\" && _
                    ? (_ && (_.text += _), (_ = !_))
                    : ((_.text += _), (_ = !1));
                break;
            }
          }
          return (
            _.type != _ &&
              (_.type == _ || _.type == _
                ? _.push(_(_))
                : _.push({
                    type: _.type,
                    text: _.text ?? "",
                  })),
            _
          );
        }
        function _(_) {
          if (!_ || _.length < 1) return {};
          const _ = {};
          let _ = "",
            _ = "",
            _;
          ((_) => {
            (_[(_.PRE_NAME = 0)] = "PRE_NAME"),
              (_[(_.IN_NAME = 1)] = "IN_NAME"),
              (_[(_.POST_NAME = 2)] = "POST_NAME"),
              (_[(_.IN_VALUE = 3)] = "IN_VALUE"),
              (_[(_.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(_ || (_ = {}));
          let _ = 0,
            _ = 0;
          _[0] == "=" && (_ = 2);
          let _ = !1;
          for (_++; _ < _.length; _++) {
            const _ = _[_];
            let _ = !0,
              _ = !1;
            switch (_) {
              case 0:
                if (_ == "=") return {};
                if (_ == " ") continue;
                _ = 1;
                break;
              case 1:
                (_ == "=" || _ == " ") &&
                  !_ &&
                  (_ == " " ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                break;
              case 2:
                _ == " "
                  ? ((_ = 0), (_ = !1), (_ = !0))
                  : _ == '"'
                    ? ((_ = 4), (_ = !1))
                    : (_ = 3);
                break;
              case 3:
              case 4:
                ((_ == " " && _ != 4 && !_) || (_ == '"' && _ == 4 && !_)) &&
                  ((_ = 0), (_ = !1), (_ = !0));
                break;
            }
            if (_)
              if (_ == "\\" && !_) _ = !0;
              else if (((_ = !1), _ == 1)) _ += _;
              else if (_ == 3 || _ == 4) _ += _;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + _,
                );
            _ && ((_[_] = _), (_ = ""), (_ = ""));
          }
          return _ != 0 && (_[_] = _), _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          if (!_) return _;
          const _ = _.trim(),
            _ = _.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return _.startsWith("javascript:") ||
            _.startsWith("data:") ||
            _.startsWith("vbscript:")
            ? ""
            : _;
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
          _ = __webpack_require__("chunkid");
        const _ = "partnerevents/ajaxgetdraftandrecentsnippets";
        function _(_, _) {
          return (0, _._)({
            queryKey: ["eventdraftrecent", _, _],
            queryFn: () => _(_, _),
            select: _,
            enabled: !!_,
          });
        }
        function _(_, _) {
          return (0, _._)(_(_, _));
        }
        async function _(_, _) {
          const _ = new URLSearchParams({
            clan_accountid: "" + _,
          });
          _ && _.set("rtime_oldest", "" + _);
          const _ = `${_._.PARTNER_BASE_URL}${_}?${_}`,
            _ = await fetch(_, {
              credentials: "include",
            });
          if (!_._) throw new Error(`${_} answered HTTP ${_.status}`);
          const _ = await _.json();
          if (_?.success != _._)
            throw new Error(`${_} failed with result ${_?.success}`);
          return _.snippets ?? [];
        }
        function _(_) {
          return [..._].sort((_, _) =>
            _.hidden != _.hidden
              ? _.hidden
                ? -1
                : 1
              : _.hidden && _.published != _.published
                ? _.published
                  ? -1
                  : 1
                : (_.rtime32_start_time ?? 0) - (_.rtime32_start_time ?? 0),
          );
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              _: _,
              imageType: _,
              bPreferAssetWithoutOverride: _,
              strAdditionalClassName: _,
              bNoShadow: _,
            } = _,
            { storeItemAsset: _, storeItemDefaultInfo: _ } = (0, _._)(_, _, _);
          if (_ === "library" || _ == "vertical")
            return (0, _.jsx)(_._, {
              _: _,
              bPreferAssetWithoutOverride: _,
              bNoShadow: _,
            });
          let _ = "";
          if (
            (_ === "main"
              ? (_ = _().MainCapsuleImageContainer)
              : (_ = _().HeaderCapsuleImageContainer),
            _ === void 0 || !_)
          )
            return (0, _.jsx)("div", {
              className: (0, _._)(_, "CapsuleImageCtn", _),
            });
          if (_ == null) return null;
          let _ = (0, _._)(_, _ === "header");
          return (0, _.jsx)("div", {
            className: (0, _._)(_, "CapsuleImageCtn", _),
            children: (0, _.jsx)(_._, {
              lazyLoad: !0,
              srcs: _,
              className: (0, _._)(_().CapsuleImage),
              alt: _.name,
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          let _ = [];
          return _ && _(_, _, _), _.filter((_) => !!_);
        }
        function _(_, _) {
          let _ = (0, _._)(_, "hero_capsule"),
            _ = (0, _._)(_, "library_capsule");
          return {
            strStoreVerticalURL: _,
            strLibraryVerticalURL: _,
          };
        }
        function _(_, _, _) {
          const _ = (0, _._)(_, "header_2x") ?? (0, _._)(_, "header"),
            _ = (0, _._)(_, "main_capsule_2x") ?? (0, _._)(_, "main_capsule");
          _ ? _.push(_, _) : _.push(_, _);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _, _, _) {
          if (!_) return;
          if (!(0, _._)(_.item_type)) {
            (0, _._)(
              !1,
              "StoreItemWidgetSalePageAction: unexpected type: " + _.item_type,
            );
            return;
          }
          const _ = (0, _._)(`${(0, _._)(_, _)}${_ ? `?${_}` : ""}`, _);
          return {
            onClick: (_) => {
              let _ = (0, _._)(_) || window;
              _
                ? _(_)
                : _.startsWith("steam://") || (_.location.href = (0, _._)(_));
            },
            onOKActionDescription: _._.Localize("#Sale_Gamepad_Action_Select"),
          };
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              _: _,
              bPreferLibrary: _,
              bPreferAssetWithoutOverride: _,
              bNoShadow: _,
            } = _,
            _ = _ ? _().NoShadow : "",
            { storeItemDefaultInfo: _, storeItemAsset: _ } = (0, _._)(
              _,
              "vertical",
              _,
            ),
            [_, _] = _.useState(0);
          if (!_ || !_)
            return (0, _.jsx)("div", {
              className: _().HeroCapsuleImageContainer,
            });
          const { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = (0, _._)(
            _,
            _,
          );
          if (_ && (!_ || !_))
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
              children: [
                (0, _.jsx)("img", {
                  src: _,
                  className: _().CapsuleImage,
                  alt: _.name,
                }),
                _.type == _._._ &&
                  (0, _.jsx)("img", {
                    className: _().CornerSash,
                    src: `${_._.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                    alt: "DLC",
                  }),
              ],
            });
          if (_)
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().LibraryFallbackAssetImageContainer,
                _().VerticalCapsule,
                _ ? _().ForceLibrarySizing : "",
                _,
              ),
              children: [
                (0, _.jsx)("div", {
                  className: _().FallbackBackground,
                  style: {
                    backgroundImage: `url(${_})`,
                  },
                }),
                (0, _.jsx)("img", {
                  src: _,
                  className: _().CapsuleImage,
                  alt: _.name,
                }),
              ],
            });
          const _ = (0, _._)(_, !0),
            _ = _.length - 1,
            _ = (_) => {
              const _ = _.indexOf(_);
              _ >= _ && _ < _.length - 1 && _(_ + 1);
            };
          if (_ < _.length) {
            const _ = _[_];
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().LibraryFallbackAssetImageContainer, _),
              children: [
                (0, _.jsx)("div", {
                  className: _().FallbackBackground,
                  style: {
                    backgroundImage: `url(${_})`,
                  },
                }),
                (0, _.jsx)(_._, {
                  lazyLoad: !0,
                  srcs: _,
                  className: _().CapsuleImage,
                  alt: _.name,
                  onImageError: _,
                }),
              ],
            });
          }
          return (0, _.jsx)("div", {
            className: _().HeroCapsuleImageContainer,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          if (_) {
            if ("appid" in _) return "app";
            if ("bundleid" in _) return "bundle";
            if ("packageid" in _) return "sub";
          }
        }
        function _(_) {
          const {
              _: _,
              hoverClassName: _,
              fnGetIDOverride: _,
              fnHoverState: _,
              disableScreenshots: _,
              children: _,
            } = _,
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                const _ = _(_);
                _ &&
                  (_ && _(!0),
                  window.GameHover &&
                    (_.current &&
                      _ &&
                      (_.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(_ ? _() : _.current, _, "global_hover", {
                      type: _,
                      _: (0, _._)(_)._,
                      _: 1,
                    })));
              },
              [_, _, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                _(_) &&
                  (_ && _.relatedTarget && _(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      _ ? _() : _.current,
                      _,
                      "global_hover",
                    ));
              },
              [_, _, _],
            );
          return (0, _.jsx)("div", {
            ref: _,
            className: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            children: _,
          });
        }
        function _(_) {
          const {
              _: _,
              strExtraParams: _,
              fnOnClickOverride: _,
              strOverrideURL: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(
              _ ||
                (_ && "creatorid" in _
                  ? (0, _._)(
                      `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )
                  : (0, _._)(
                      `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )),
            );
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: _.className,
              href: _ ? void 0 : _,
              target: _._.IN_CLIENT || _ ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: _,
              children: _.children,
            }),
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.useMemo)(() => _(_), [_?._, _?.type]);
        }
        function _(_, _) {
          return (0, _.useMemo)(() => _(_, _), [_, _]);
        }
        function _(_, _) {
          return (0, _.useMemo)(() => _(_, _), [_, _]);
        }
        function _(_, _) {
          let _ = "app";
          return (
            _ == _._._ ? (_ = "bundle") : _ == _._._ && (_ = "sub"),
            (0, _.useMemo)(() => _(_, _), [_, _])
          );
        }
        function _(_) {
          if (!(!_ || !_._)) {
            if (!_.type)
              return {
                appid: _._,
              };
            switch (_.type) {
              case "sub":
                return {
                  packageid: _._,
                };
              case "bundle":
                return {
                  bundleid: _._,
                };
              default:
                return {
                  appid: _._,
                };
            }
          }
        }
        function _(_) {
          if ("appid" in _)
            return {
              _: _.appid,
              type: "game",
            };
          if ("packageid" in _)
            return {
              _: _.packageid,
              type: "sub",
            };
          if ("bundleid" in _)
            return {
              _: _.bundleid,
              type: "bundle",
            };
        }
        function _(_, _) {
          switch (_) {
            case "sub":
              return {
                packageid: _,
              };
            case "bundle":
              return {
                bundleid: _,
              };
            default:
              return {
                appid: _,
              };
          }
        }
        function _(_, _) {
          switch (_) {
            case "sub":
              return {
                packageid: _,
              };
            case "bundle":
              return {
                bundleid: _,
              };
            default:
              return {
                appid: _,
              };
          }
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
          _ = __webpack_require__._(_);
        function _() {
          return (0, _.jsx)("div", {
            className: _.bordered_live_stream_icon,
            children: (0, _._)("#home_page_live_broadcast"),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _() {
          let _ = (0, _._)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, _._)(_)) {
            const _ = new Set();
            return (
              _.filtered.forEach((_) => {
                _.appid && _.add(_.appid);
              }),
              Array.from(_)
            );
          }
          return [];
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _._)(_());
        }
        function _(_) {
          const { data: _ } = _(),
            _ = useStoreItemKeyFromAppID(_),
            { data: _ } = useStoreItemDefaultInfo(_);
          return !!(
            _ &&
            (_.has(_) ||
              (_?.related_items?.parent_appid &&
                _.has(_.related_items.parent_appid)))
          );
        }
        function _(_) {
          const { data: _ } = _(),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0 || !_) return _(!1);
              (async () => {
                const _ = await Promise.all(
                  _.filter((_) => !!_).map((_) =>
                    _.fetchQuery(
                      (0, _._)(_, {
                        appid: _,
                      }),
                    ),
                  ),
                );
                _(
                  _.some(
                    (_) =>
                      (_ && _.appid && _.has(_.appid)) ||
                      (_?.related_items?.parent_appid &&
                        _.has(_.related_items.parent_appid)),
                  ),
                );
              })();
            }, [_, _, _, _]),
            _
          );
        }
        function _() {
          return {
            queryKey: _(),
            queryFn: async () => {
              const _ = await _();
              return new Set(_);
            },
          };
        }
        function _() {
          return ["BroadcastApps"];
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appids: _, hide_status_banners: _, show_early_access: _ } = _,
            { data: _ } = (0, _._)(),
            { data: _ } = (0, _._)(),
            _ = _.length > 0 && _.every((_) => _ && _.has(_)),
            _ = _.length > 0 && _.every((_) => _ && _.has(_)),
            _ = _(_),
            _ = _ && !_,
            _ = _ && !_,
            _ = !_ && _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().CapsuleDecorators, "CapsuleDecorators"),
            children: [
              _ &&
                (0, _.jsxs)("span", {
                  className: (0, _._)(_().Banner, _().Blue),
                  children: [
                    (0, _.jsx)("img", {
                      src: (0, _._)(_),
                      className: _().LinesImg,
                      alt: _._.Localize("#Sale_InLibrary"),
                    }),
                    _._.Localize("#Sale_InLibrary"),
                  ],
                }),
              _ &&
                (0, _.jsxs)("span", {
                  className: _().Banner,
                  children: [
                    (0, _.jsx)(_.qnF, {
                      className: _().LinesImg,
                    }),
                    _._.Localize("#Sale_OnWishlist"),
                  ],
                }),
              _ &&
                !_ &&
                !_ &&
                (0, _.jsx)(_, {
                  appids: _,
                }),
              _ && (0, _.jsx)(_._, {}),
            ],
          });
        }
        function _(_) {
          const { appids: _ } = _;
          return _(_)
            ? (0, _.jsx)("span", {
                className: (0, _._)(_().Banner, _().EarlyAccessGradient),
                children: _._.Localize("#Sale_EarlyAccess"),
              })
            : null;
        }
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return _(!1);
              (async () => {
                const _ = await Promise.all(
                  _.map((_) =>
                    _.fetchQuery(
                      (0, _._)(_, {
                        appid: _,
                      }),
                    ),
                  ),
                );
                _(_.some((_) => _ && _.is_early_access));
              })();
            }, [_, _, _]),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, className: _, bTextMode: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return (0, _.jsx)(_, {
            appid: _,
            bIsFree: !!_?.is_free,
            bIsComingSoon: !!_?.is_coming_soon,
            bTextMode: _,
            className: _,
          });
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = (0, _._)(),
            {
              appid: _,
              bIsFree: _,
              bIsComingSoon: _,
              className: _,
              bTextMode: _,
            } = _,
            _ = (0, _._)(_),
            { bIsOwned: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            { mutateAsync: _ } = (0, _._)(_, !_, (0, _._)(_)),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = async () => {
              if (!_._.logged_in) {
                _();
                return;
              }
              _ || (_(!0), await _(), _(!1));
            };
          if (_ || (!_ && _))
            return _
              ? (0, _.jsx)(_, {
                  possibleDemoAppID: _,
                })
              : null;
          let _ = null;
          return (
            _ && !_
              ? (_ = (0, _.jsx)(_._, {
                  size: 18,
                }))
              : _
                ? _ && (_ = _ ? (0, _._)("#OnWishlist") : (0, _.jsx)(_.qnF, {}))
                : (_ = _
                    ? (0, _._)("#wishlist_add_to_wishlist")
                    : (0, _.jsx)(_.T4m, {})),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)("#AddToWishlist_ttip"),
                  children: (0, _.jsx)("div", {
                    className: (0, _._)(_().WishList, _),
                    onClick: _,
                    children: _,
                  }),
                }),
                _,
              ],
            })
          );
        }
        function _(_) {
          const { possibleDemoAppID: _, className: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return _ &&
            (_.type == _._._ || _.type == _._._) &&
            _.related_items?.parent_appid
            ? (0, _.jsx)(_, {
                parentAppID: _.related_items?.parent_appid,
                className: _,
              })
            : null;
        }
        function _(_) {
          const { parentAppID: _, className: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return !_ || !_
            ? null
            : (0, _.jsx)(_, {
                appid: _,
                bIsComingSoon: !!_.is_coming_soon,
                bIsFree: !!_.is_free,
                className: _,
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
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !1) {
          const { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_, _);
          let _;
          _ &&
            _.included_appids?.length == 1 &&
            !_(_, _) &&
            _.item_type &&
            [_._._, _._._].includes(_.item_type) &&
            (_ = {
              appid: _.included_appids[0],
            });
          const { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_, _),
            _ = _?.visible ? _ : _;
          return {
            storeItemAsset: _?.visible ? _ : _,
            storeItemDefaultInfo: _,
          };
        }
        function _(_, _) {
          if (!_) return !1;
          switch (_) {
            case "header":
              return !!_.header;
            case "main":
              return !!_.main_capsule;
            case "vertical":
            case "library":
              return !!_.hero_capsule || !!_.library_capsule;
            default:
              return (0, _._)(_, `Unhandled imageType: ${_}`), !1;
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            strTitle: _,
            strDescription: _,
            className: _,
            children: _,
            navID: _,
            ..._
          } = _;
          return (0, _.jsxs)(_._, {
            className: _()(_, _().ModalConfirmDialog),
            onClose: _.onClose,
            navID: _,
            children: [
              _ &&
                (0, _.jsxs)(_._, {
                  className: _().Header,
                  children: [
                    (0, _.jsx)("h2", {
                      children: _,
                    }),
                    (0, _.jsx)("button", {
                      onClick: _.onClose,
                      children: (0, _.jsx)(_.tmm, {}),
                    }),
                  ],
                }),
              _ &&
                (0, _.jsx)(_._, {
                  className: _().Description,
                  children: (0, _.jsx)("div", {
                    children: _,
                  }),
                }),
              _,
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_) {
          const { strOKLabel: _, strCancelLabel: _, onOK: _, onClose: _ } = _;
          return (0, _.jsxs)(_._, {
            className: _().Buttons,
            children: [
              !!_ &&
                (0, _.jsx)(_._, {
                  onClick: _ ?? _,
                  children: _,
                }),
              !!_ &&
                (0, _.jsx)(_._, {
                  onClick: _,
                  children: _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = Object.assign(_, {
          Root: _,
          Content: _,
        });
        function _(_) {
          const { children: _, className: _, ..._ } = _;
          return (0, _.jsx)(_.Root, {
            ..._,
            children: (0, _.jsx)(_.Content, {
              className: _,
              children: _,
            }),
          });
        }
        function _(_) {
          const {
              onClose: _,
              className: _,
              navID: _,
              children: _,
              allowScrollBehind: _,
              ..._
            } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ &&
                (_.showModal(),
                _.ownerDocument.defaultView &&
                  _(
                    _.ownerDocument.body.scrollHeight >
                      _.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            _ = _.useCallback(
              (_) => {
                _.target == _.currentTarget && _("backdropclick");
              },
              [_],
            );
          return (0, _.jsx)(_, {
            navID: _ ?? "ModalDialog",
            onClose: _,
            children: (0, _.jsx)("dialog", {
              ref: _,
              className: _()(_.ModalDialog, !_ && _ && _.PreventScroll, _),
              onClose: () => _("onclose"),
              onClick: _,
              ..._,
              children: (0, _.jsx)(_._, {
                children: _,
              }),
            }),
          });
        }
        function _(_) {
          const { navID: _, onClose: _, children: _ } = _,
            _ = _.useCallback(() => _("cancelbutton"), [_]),
            _ = _.useRef(void 0);
          return (
            (0, _._)(_, !0, !0),
            (0, _._)()
              ? (0, _.jsx)(_._, {
                  navID: _ ?? "ModalDialog",
                  onCancelButton: _,
                  modal: !0,
                  navTreeRef: _,
                  children: _,
                })
              : (0, _.jsx)(_.Fragment, {
                  children: _,
                })
          );
        }
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)("div", {
            className: _()(_.ModalDialogContent, _),
            onClick: (_) => _.stopPropagation(),
            children: _,
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
        function _(_, _, _, _) {
          _.useEffect(() => {
            const _ = (_) => {
              _.key === _ &&
                (_(_), _ && _.preventDefault(), _ && _.stopPropagation());
            };
            return (
              document.addEventListener("keydown", _),
              () => document.removeEventListener("keydown", _)
            );
          }, [_, _, _, _]);
        }
        function _(_, _) {
          const _ = useBrowserContext();
          React.useEffect(() => {
            const _ = (_) => {
              _.key === _ && _(_);
            };
            return (
              _.ownerWindow.addEventListener("keydown", _),
              () => _.ownerWindow.removeEventListener("keydown", _)
            );
          }, [_, _, _.ownerWindow]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _() {
          const [_, _] = _.useState(void 0),
            _ = _.useCallback(() => _(void 0), []),
            _ = (0, _.jsx)(_._, {
              active: _ !== void 0,
              children: (0, _.jsx)(_, {
                closeModal: _,
                rgImageURL: _,
              }),
            });
          return [_, _];
        }
        function _(_) {
          const { closeModal: _, rgImageURL: _ } = _,
            [_, _] = _.useState(0),
            _ = _?.length ?? 0,
            _ = _.useCallback(() => {
              _ == 0 ? _(_ - 1) : _(_ - 1);
            }, [_, _]),
            _ = _.useCallback(() => {
              _ && _ + 1 >= _ ? _(0) : _(_ + 1);
            }, [_, _, _]);
          return (0, _.jsxs)(_._, {
            title: (0, _._)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: _,
            bHideCloseIcon: !0,
            modalClassName: _().PopupScreenshotModal,
            children: [
              (0, _.jsx)(_, {
                index: _,
                numElements: _?.length || 0,
                fnForward: _,
                fnBackwards: _,
                fnClose: _,
                bCircular: !0,
              }),
              (0, _.jsx)("div", {
                className: _().PopupScreenshotContainer,
                children: (0, _.jsx)("img", {
                  className: _().PopupScreenshot,
                  src: _?.[_],
                  alt: "",
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
            index: _,
            numElements: _,
            fnForward: _,
            fnBackwards: _,
            fnClose: _,
            bCircular: _,
          } = _;
          _("ArrowLeft", () => _?.(), !0, !0),
            _("Left", () => _?.(), !0, !0),
            _("ArrowRight", () => _?.(), !0, !0),
            _("Right", () => _?.(), !0, !0),
            _("Escape", () => _ && _(), !0, !0),
            _("Esc", () => _ && _(), !0, !0);
          let _ = _ > 1;
          return (0, _.jsxs)("div", {
            className: _().ButtonCtn,
            children: [
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("button", {
                      type: "button",
                      className: (0, _._)(
                        _().ButtonIcon,
                        _ === 0 && !_ ? _().Disabled : null,
                      ),
                      onClick: _,
                      "aria-label": (0, _._)("#Carousel_Prev"),
                      children: (0, _.jsx)(_.V5W, {
                        angle: 270,
                      }),
                    }),
                    (0, _.jsx)("button", {
                      type: "button",
                      className: (0, _._)(
                        _().ButtonIcon,
                        _ === _ - 1 && !_ ? _().Disabled : null,
                      ),
                      onClick: _,
                      "aria-label": (0, _._)("#Carousel_Next"),
                      children: (0, _.jsx)(_.V5W, {
                        angle: 90,
                      }),
                    }),
                  ],
                }),
              (0, _.jsx)("button", {
                type: "button",
                className: _().ButtonIcon,
                onClick: _,
                "aria-label": (0, _._)("#Button_Close"),
                children: (0, _.jsx)(_._, {}),
              }),
            ],
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
        });
        var _ = __webpack_require__("chunkid"),
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
          };
        class _ {
          constructor() {
            (0, _._)(this);
          }
          accountid;
          steamid;
          appid;
          hub_popular;
          popular;
          relay_broadcast_id;
          rowversion;
          thumbnail_http_address;
          nAppIDVOD;
          title = void 0;
          viewer_count = void 0;
          whitelist_rank;
          gamedata_subtitle = void 0;
          store_title;
          left_panel;
          right_panel;
          snr;
          broadcast_chat_visibility;
          default_selection_priority = 0;
          current_selection_priority = 0;
        }
        _([_._], _.prototype, "title", 2),
          _([_._], _.prototype, "viewer_count", 2),
          _([_._], _.prototype, "gamedata_subtitle", 2),
          _([_._], _.prototype, "current_selection_priority", 2);
        const _ = "primary",
          _ = "featured",
          _ = "default_featured",
          _ = "general";
        var _ = ((_) => (
          (_[(_.k_ePrimary = 3)] = "k_ePrimary"),
          (_[(_.k_eFeatured = 2)] = "k_eFeatured"),
          (_[(_.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (_[(_.k_eGeneral = 0)] = "k_eGeneral"),
          _
        ))(_ || {});
        function _(_) {
          switch (_) {
            case _:
              return 3;
            case _:
              return 2;
            case _:
              return 1;
            case _:
            default:
              return 0;
          }
        }
        function _(_) {
          const _ = _;
          return _ &&
            typeof _.success == "number" &&
            _.filtered &&
            Array.isArray(_.filtered) &&
            _.broadcast_chat_visibility
            ? _.filtered.length == 0
              ? !0
              : typeof _.filtered[0].accountid == "string"
            : !1;
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
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = (0, _.LgB)(_);
          return _ ? _[_] : "";
        }
        function _(_, _, _) {
          const _ = (0, _.LgB)(_);
          return _[_] != _ ? ((_[_] = _), !0) : !1;
        }
        function _(_, _) {
          const _ = (0, _.LgB)(_);
          return !!_?.[_];
        }
        function _(_) {
          if (!_) return 0;
          let _ = 0;
          for (let _ = _.Bhc; _ < _.bP9; ++_) {
            const _ = (0, _.LgB)(_);
            _[_] && (_ += 1);
          }
          return _;
        }
        function _(_) {
          const _ = new Map();
          for (let _ = k_ELanguage_English; _ < k_ELanguage_MAX; ++_) {
            const _ = ELanguagePchLanguage(_);
            _[_] && _.set(_, _[_]);
          }
          return _;
        }
        function _(_) {
          const _ = new Array();
          for (let _ = _.Bhc; _ < _.bP9; ++_) {
            const _ = (0, _.LgB)(_);
            _[_] && _.push([_, _[_]]);
          }
          return _;
        }
        function _(_) {
          const _ = InitLocalizableString([]);
          if (!_) return _;
          for (let _ = k_ELanguage_English; _ < k_ELanguage_MAX; ++_)
            _(_, _) && (_[_] = _(_, _));
          return _;
        }
        function _(_) {
          const _ = {};
          if (!_) return _;
          for (
            let _ = k_ELanguage_English;
            _ < k_ELanguage_MAX && _ < _.length;
            ++_
          )
            _[_] && _(_, _, _[_]);
          return _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new WeakSet();
        function _(_ = _._) {
          if (typeof window > "u" || typeof document > "u" || _.has(_)) return;
          const _ = (0, _._)("groupvanityinfo", "application_config");
          (_ === void 0 && document.readyState != "complete") ||
            (_.add(_), _(_) && (0, _._)(_, _));
        }
        function _(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            typeof _[0] == "object"
            ? typeof _[0].clanAccountID == "number" &&
                (typeof _[0].appid == "number" ||
                  typeof _[0].vanity_url == "string")
            : !1;
        }
        function _(_) {
          return typeof _ == "string" ? parseInt(_) : _;
        }
        function _(_) {
          return typeof _ == "string" ? Number.parseInt(_) : _;
        }
        class _ {
          m_queryClient = _._;
          m_boxCacheVersion = _._.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            _(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((_) => {
                  (_?.type != "added" &&
                    _?.type != "updated" &&
                    _?.type != "removed") ||
                    ((0, _._)(_.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, _._)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(_) {
            this.LazyInit(), _(_) && (0, _._)(this.m_queryClient, _);
          }
          BHasClanInfoLoaded(_) {
            return (
              (0, _._)(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
              (0, _._)(
                _.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(_) {
            return !!(0, _._)(_(_), this.ReadCache());
          }
          RegisterClanData(_) {
            this.LazyInit(), (0, _._)(this.m_queryClient, _);
          }
          async LoadOGGClanInfoForAppID(_) {
            return (
              this.LazyInit(),
              (_ = _(_)),
              (0, _._)(
                _ != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              _ == 0 ? null : (0, _._)(_, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(_) {
            return this.LazyInit(), (0, _._)(_, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(_) {
            return this.LazyInit(), (0, _._)(_, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(_) {
            return this.LoadClanInfoForClanAccountID(_.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(_) {
            return this.LazyInit(), (0, _._)(_(_), this.m_queryClient);
          }
          GetOGGClanInfo(_) {
            const _ = this.ReadCache();
            return typeof _ == "string" ? (0, _._)(_, _) : (0, _._)(_, _);
          }
          GetClanSteamIDForAppID(_) {
            const _ = (0, _._)(_(_), this.ReadCache());
            return _ ? _._.InitFromClanID(_.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(_) {
            return (0, _._)(_(_), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(_) {
            return (0, _._)(_.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(_) {
            return this.BHasClanInfoLoadedByAccountID(_);
          }
          GetClanMemberCount(_) {
            return (0, _._)(_(_), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(_) {
            return (
              (0, _._)(
                !!_,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, _._)(_(_), this.ReadCache())
            );
          }
          GetCreatorStoreURL(_) {
            let _ = _._.GetCreatorHome(_);
            if (_) return _.GetCreatorHomeURL("developer");
            let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
            return (
              _._.COMMUNITY_BASE_URL +
              (_.vanity_url
                ? "groups/" + _.vanity_url
                : "gid/" + _.ConvertTo64BitString())
            );
          }
        }
        const _ = new _();
        (0, _._)("g_ClanStore", _);
        function _() {
          const _ = (0, _._)();
          return _(_), _;
        }
        function _(_) {
          _();
          const { data: _, isPending: _ } = (0, _._)(_ ? _(_) : void 0);
          return [!!_ && _, _ ?? void 0];
        }
        function _(_) {
          const _ = _();
          useEffect(() => {
            _ &&
              FetchClanInfoByAccountID(_(_), _).catch((_) =>
                console.error(`Failed to hint load clan info ${_}`, _),
              );
          }, [_, _]);
        }
        function _(_) {
          return _(), useClanInfoByVanityQuery(_).data ?? null;
        }
        function _(_) {
          _();
          const _ = _ ? _(_) : void 0,
            { data: _, isPending: _ } = (0, _._)(_);
          return {
            bLoadingClanInfo: !!_ && _,
            clanInfo: _ ?? null,
          };
        }
        function _(_, _) {
          if (_.BIsOGGEvent())
            return {
              bVisible: !1,
            };
          if (_.GetEventType() == k_EClanEventType_CreatorHome)
            return {
              bVisible: !1,
            };
          if (_.BHasSaleEnabled())
            return {
              bVisible: !0,
            };
          if (
            _.jsondata.clone_from_event_gid &&
            _.jsondata.clone_from_sale_enabled
          )
            return {
              bVisible: !0,
            };
          if (_.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return {
              bVisible: !1,
            };
          const _ = g_CreatorHomeStore.GetCreatorHome(_.clanSteamID);
          return _ &&
            _.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? {
                bVisible: !0,
              }
            : _
              ? {
                  bVisible: !0,
                  bValveOnly: !0,
                }
              : {
                  bVisible: !1,
                };
        }
        function _(_, _) {
          return _.BIsOGGEvent()
            ? _.BHasSaleEnabled()
              ? {
                  bVisible: !0,
                }
              : Config.EUNIVERSE == k_EUniversePublic
                ? {
                    bVisible: !1,
                  }
                : _
                  ? _.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? {
                        bVisible: !0,
                        bValveOnly: !0,
                      }
                    : {
                        bVisible: !1,
                      }
                  : {
                      bVisible: !1,
                    }
            : {
                bVisible: !1,
              };
        }
        function _(_) {
          return _.BIsOGGEvent()
            ? {
                bVisible: !1,
              }
            : _.GetEventType() != k_EClanEventType_CreatorHome
              ? {
                  bVisible: !1,
                }
              : _.BHasSaleEnabled()
                ? {
                    bVisible: !0,
                  }
                : _.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? {
                      bVisible: !1,
                    }
                  : {
                      bVisible: !1,
                    };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgAssetURL: _, rgLang: _, bIsImage: _ } = _,
            [_, _] = (0, _.useState)([]);
          if (
            ((0, _.useEffect)(() => {
              let _ = !1;
              const _ = _ ? _ : _;
              return (
                Promise.all(_.map((_) => _(_))).then((_) => {
                  _ || _(_);
                }),
                () => {
                  _ = !0;
                }
              );
            }, [_, _]),
            !_)
          )
            return (0, _.jsx)(_._, {
              size: "small",
              string: "Checking Assets...",
            });
          const _ = _.map((_, _) => (_ ? -1 : _)).filter((_) => _ !== -1);
          return _.length === 0
            ? (0, _.jsx)(_._, {
                bDone: !0,
                name: "Uploaded assets verified",
                tooltip:
                  "In the background we verified the assets by downloading from the CDN to verify they are present",
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    bDone: !1,
                    name: `${_.length} Asset(s) uploaded failed to fetch`,
                  }),
                  _.map((_) => ({
                    url: _[_],
                    lang: _[_],
                  })).map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        bDone: !1,
                        name: `${(0, _.LgB)(_.lang)} - Not found`,
                        tooltip: `${_.url} not downloadable from the CDN`,
                      },
                      _.url,
                    ),
                  ),
                ],
              });
        }
        function _(_) {
          return new Promise((_) => {
            const _ = new Image();
            (_.onload = () => _(!0)), (_.onerror = () => _(!1)), (_.src = _);
          });
        }
        function _(_) {
          return new Promise((_) => {
            const _ = document.createElement("video");
            (_.preload = "metadata"),
              (_.onloadedmetadata = () => _(!0)),
              (_.onerror = () => _(!1)),
              (_.src = _);
          });
        }
        function _(_) {
          const {
              rgAssetLangs: _,
              initialLang: _,
              fnGetAssetUrl: _,
              fnDeletAssetLang: _,
              imageClassname: _,
              fnDeleteAllAssets: _,
              showDeleteAll: _ = !0,
              bVerifyAssets: _,
              bVideoAsset: _,
            } = _,
            [_, _] = _.useState(_ ?? _._.Get().GetCurEditLanguage() ?? _[0]),
            [_, _] = _.useState(_(_)),
            _ = _.useMemo(() => [..._].sort(), [_]);
          _.useEffect(() => {
            const _ = _(_);
            _ ? _(_) : _.length > 0 ? _(_[0]) : _(null);
          }, [_, _, _]);
          const _ = () => {
              _ ? _() : _.forEach((_) => _(_));
            },
            _ = (0, _.useMemo)(() => _.map((_) => _(_)), [_, _]);
          return (0, _.jsxs)("div", {
            className: _().UploadedImageDisplayCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().UploaderLeftCol,
                children: (0, _.jsx)(_, {
                  curAssetURL: _,
                  imageClassname: _,
                }),
              }),
              (0, _.jsx)("div", {
                className: _().UploaderRightCol,
                children: (0, _.jsxs)("div", {
                  className: _().SectionCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().LangCountTitle,
                      children: (0, _._)("#ImageUpload_LocalizedAssets"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().LangSelectCtn,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            language: _,
                            selectedLanguage: _,
                            setSelectedLanguage: _,
                            deleteLanguage: _,
                          },
                          _,
                        ),
                      ),
                    }),
                    _ &&
                      !!_.length &&
                      (0, _.jsx)("a", {
                        href: "#",
                        className: _().DeleteAll,
                        onClick: (_) => {
                          _(), _.preventDefault();
                        },
                        children: (0, _._)("#Button_DeleteAll"),
                      }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        rgAssetURL: _,
                        rgLang: _,
                        bIsImage: !_,
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              language: _,
              selectedLanguage: _,
              setSelectedLanguage: _,
              deleteLanguage: _,
            } = _,
            _ = (0, _.LgB)(_);
          return (0, _.jsxs)(
            "div",
            {
              className: _().UploaderImgLang,
              children: [
                (0, _.jsx)("a", {
                  href: "#",
                  onClick: (_) => {
                    _.preventDefault(), _(_);
                  },
                  children:
                    _ === _
                      ? (0, _.jsx)("span", {
                          className: _().LangSelected,
                          children: "" + _,
                        })
                      : (0, _.jsx)("span", {
                          children: "" + _,
                        }),
                }),
                (0, _.jsx)("a", {
                  href: "#",
                  onClick: (_) => {
                    _.preventDefault(), _(_);
                  },
                  children: (0, _.jsx)(_._, {}),
                }),
              ],
            },
            "image" + _,
          );
        }
        function _(_) {
          const { curAssetURL: _, imageClassname: _ } = _;
          if (!_)
            return (0, _.jsx)("div", {
              className: _().ArtNoArt,
              children: (0, _._)("#ImageDisplay_NoAssetUploaded"),
            });
          const _ = (0, _._)(_);
          return _._.includes(_)
            ? (0, _.jsx)(_, {
                ..._,
              })
            : _._.includes(_)
              ? (0, _.jsx)(_, {
                  className: _ || _().ArtPreview,
                  strTextURL: _,
                })
              : (0, _.jsx)("img", {
                  className: _ || _().ArtPreview,
                  src: _,
                });
        }
        function _(_) {
          const { curAssetURL: _, imageClassname: _ } = _,
            _ = _.useRef(void 0);
          return (
            _.useEffect(() => {
              _.current && (_.current.load(), _.current.play());
            }, [_]),
            (0, _.jsx)("video", {
              ref: _,
              className: _ || _().ArtPreview,
              autoPlay: !0,
              loop: !0,
              controls: !0,
              muted: !0,
              children: (0, _.jsx)("source", {
                src: _,
              }),
            })
          );
        }
        function _(_) {
          const { strTextURL: _, className: _ } = _,
            [_, _] = _.useState("");
          return (
            _.useEffect(() => {
              _()
                .get(_)
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  console.error(_);
                });
            }, [_]),
            (0, _.jsx)("textarea", {
              className: _,
              value: _,
              readOnly: !0,
              rows: 20,
            })
          );
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bDone: _, name: _, tooltip: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().StatusLineItemCtn,
            children: [
              (0, _.jsx)("span", {
                className: (0, _._)(
                  _().StatusIcon,
                  _ ? _().StatusIconDone : _().StatusNotDone,
                ),
                children: _ ? (0, _.jsx)(_.Jlk, {}) : (0, _.jsx)(_._, {}),
              }),
              (0, _.jsx)(_._, {
                toolTipContent: _,
                children: _,
              }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { data: _, isPending: _ } = useStoreItemBasicInfo(
            _
              ? {
                  appid: _,
                }
              : void 0,
          );
          return React.useMemo(() => {
            if (!_) return [];
            if (!_) return _ ? void 0 : [];
            const _ = [],
              _ = new Set(),
              _ = [
                ["developer", GetCreatorClanAccountIDs(_.developers)],
                ["publisher", GetCreatorClanAccountIDs(_.publishers)],
                ["franchise", GetCreatorClanAccountIDs(_.franchises)],
              ];
            for (const [_, _] of _)
              for (const _ of _)
                _.has(_) ||
                  (_.add(_),
                  _.push({
                    appid: _,
                    name: "",
                    clan_account_id: _,
                    type: _,
                  }));
            return _;
          }, [_, _, _]);
        }
        function _(_) {
          const { rgCreators: _, renderCreator: _ } = _,
            [_, _] = React.useState(0);
          if (!_.length) return null;
          if (_.length == 1)
            return jsx(Fragment, {
              children: _(_[0]),
            });
          const _ = _ % _.length;
          return jsxs("div", {
            className: styles.CreatorCarouselCtn,
            children: [
              _(_[_]),
              jsx("div", {
                className: styles.CreatorCarouselCrumbs,
                children: _.map((_, _) =>
                  jsx(
                    FocusableDiv,
                    {
                      className: styles.CreatorCarouselCrumb,
                      onClick: () => _(_),
                      "aria-label": _(_.type),
                      children: jsx(CarouselBreadcrumb, {
                        bIsActive: _ == _,
                      }),
                    },
                    _.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { creatorID: _, bSmallFormat: _ } = _,
            { data: _ } = useCreatorHomeByClanAccountID(_.clan_account_id);
          return _
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(_, _.type),
                strName: _.name ?? "",
                strAvatarURL: _.avatar_url_full_size ?? "",
                nFollowers: _.followers ?? 0,
                strCreatorType: _(_.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: _.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: _,
              })
            : null;
        }
        function _(_) {
          const { appid: _, bSmallFormat: _, renderCreator: _ } = _,
            _ = _(_);
          return _
            ? jsx(_, {
                rgCreators: _,
                renderCreator:
                  _ ??
                  ((_) =>
                    jsx(_, {
                      creatorID: _,
                      bSmallFormat: _,
                    })),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function _(_) {
          switch (_) {
            case "publisher":
              return (0, _._)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, _._)("#CreatorHome_InFranchise");
          }
          return (0, _._)("#CreatorHome_DevelopedBy");
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { href: _, children: _, bAllowFocuseableAnchor: _, ..._ } = _;
          return _._.EREALM === _._.k_ESteamRealmChina
            ? (0, _.jsx)("div", {
                ..._,
                children: _,
              })
            : _
              ? (0, _.jsx)(_._, {
                  href: _,
                  ..._,
                  children: _,
                })
              : (0, _.jsx)("a", {
                  href: _,
                  ..._,
                  children: _,
                });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            strURL: _,
            strName: _,
            strAvatarURL: _,
            nFollowers: _,
            strCreatorType: _,
            strTagLine: _,
            strMemberListURL: _,
            followButton: _,
            bSmallFormat: _,
            bMinimalDisplay: _,
          } = _;
          return (0, _.jsx)(_._, {
            feature: "salecreatorhome",
            children: (0, _.jsxs)(_._, {
              className: (0, _._)(
                _().DevSummaryCtn,
                _ ? _().SmallFormat : _().LargeFormat,
                _ ? _().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!_ &&
                  (0, _.jsx)("span", {
                    className: _().Title,
                    children: _,
                  }),
                (0, _.jsxs)("div", {
                  className: _().DevSummaryWidgetCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().DevSummaryBackground,
                      style: {
                        backgroundImage: `url(${_} )`,
                      },
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(_().DevSummaryContent),
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().FlexRowContainer,
                          children: [
                            (0, _.jsx)(_, {
                              href: (0, _._)(_),
                              className: _().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, _.jsx)("img", {
                                className: (0, _._)(_().Avatar, "Avatar_Trgt"),
                                src: _,
                                alt: "",
                              }),
                            }),
                            (0, _.jsxs)("div", {
                              className: (0, _._)(
                                _().FlexColumnContainer,
                                _().CreatorDescCtn,
                              ),
                              children: [
                                (0, _.jsxs)("div", {
                                  className: (0, _._)(
                                    _().CreatorTitleCtn,
                                    _().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, _.jsx)(_, {
                                      href: (0, _._)(_),
                                      className: _().CreatorNameName,
                                      children: _,
                                    }),
                                    !!_ &&
                                      (0, _.jsx)("div", {
                                        className: (0, _._)(
                                          _().FlexColumnContainer,
                                          _().CreatorTagline,
                                        ),
                                        children: _,
                                      }),
                                  ],
                                }),
                                (0, _.jsx)("div", {
                                  className: (0, _._)({
                                    [_().FlexColumnContainer]: _,
                                    [_().FlexRowContainer]: !_,
                                    [_().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, _.jsxs)("div", {
                                    className: (0, _._)(_().FollowBtnCtn),
                                    children: [
                                      _,
                                      (0, _.jsxs)("div", {
                                        className: (0, _._)({
                                          [_().Followers]: !0,
                                        }),
                                        children: [
                                          (0, _.jsx)("span", {
                                            children: (0, _._)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, _.jsx)("span", {
                                            className: _().FollowerCount,
                                            children: (0, _._)(_),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!_ &&
                          (0, _.jsx)("a", {
                            href: _,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: _().MembersListLink,
                            children: (0, _._)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              creatorID: _,
              bShowTagline: _,
              bHideCreatorType: _,
              bSmallFormat: _,
              bHideFollowButton: _,
              bAddLinkToMemberList: _,
              bMinimalDisplay: _,
            } = _,
            { creatorHome: _, isFetching: _ } = (0, _._)(_.clan_account_id),
            [_] = (0, _._)();
          return _ || (!_ && _)
            ? (0, _.jsx)("div", {
                className: _().DevSummaryWidgetCtn,
                children: (0, _.jsx)(_._, {
                  string: (0, _._)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : _
              ? (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    strURL: _.GetCreatorHomeURL(_.type),
                    strName: _.GetName(),
                    strAvatarURL: _.GetAvatarURLFullSize(),
                    nFollowers: _.GetNumFollowers(),
                    strCreatorType: _ ? void 0 : _(_.type),
                    strTagLine: _ ? _.GetTagLine() : void 0,
                    strMemberListURL: _
                      ? _._.COMMUNITY_BASE_URL +
                        "gid/" +
                        _.GetClanSteamID().ConvertTo64BitString() +
                        "/members/"
                      : void 0,
                    followButton: _
                      ? void 0
                      : (0, _.jsx)(_._, {
                          clanAccountID: _.clan_account_id,
                          creatorID: _,
                        }),
                    bSmallFormat: _,
                    bMinimalDisplay: _,
                  }),
                })
              : null;
        }
        function _(_) {
          const { appid: _, bSmallFormat: _ } = _;
          return jsx(ErrorBoundary, {
            children: jsx(CreatorHomeCarouselForApp, {
              appid: _,
              bSmallFormat: _,
              renderCreator: (_) =>
                jsx(_, {
                  creatorID: _,
                  bSmallFormat: _,
                }),
            }),
          });
        }
        function _(_) {
          const { clanInfo: _, bAddLinkToMemberList: _ } = _;
          if (
            ((0, _._)(
              _ && _.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !_)
          )
            return null;
          const _ = {
            clan_account_id: _.clanAccountID,
            name: _.group_name,
            type: "developer",
          };
          return (0, _.jsx)("div", {
            className: _().CuratorHoverCtn,
            children: (0, _.jsx)(_, {
              creatorID: _,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: _,
            }),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return {
            width: 460,
            height: 215,
          };
        }
        function _() {
          return {
            width: 616,
            height: 353,
          };
        }
        function _() {
          return {
            width: 231,
            height: 87,
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = "0000000000000000000000000000000000000000";
          typeof _ == "string" ? (_ = _) : _ && (_ = _(_) || _);
          let _ = ".jpg";
          _ === "0000000000000000000000000000000000000000" && (_ = _),
            _.length == 44 && ((_ = _.slice(-4)), (_ = _.slice(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          switch (
            (_ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.slice(0, 2) + "/")),
            (_ += _),
            _)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              _ += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              _ += "_full";
              break;
          }
          return (_ += _), _;
        }
        function _(_) {
          return _
            ? (typeof _[Symbol.iterator] == "function"
                ? Array.from(_)
                : Object.values(_).filter((_) => typeof _ == "number")
              )
                .map((_) => _.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              _: _,
              bHidePrice: _,
              bShowInLibraryInsteadOfPrice: _,
              bHidePlatforms: _,
              strClassName: _,
              creatorAccountID: _,
              bShowName: _,
              onlyOneDiscountPct: _,
              bShowAddToCart: _,
              bShowWishlistButton: _,
            } = _,
            _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)(!1),
            { data: _ } = (0, _._)(_);
          if (
            ((0, _.useEffect)(() => {
              _.current && _(_.current.offsetWidth < 370);
            }, [_]),
            !_ || !("appid" in _ || "bundleid" in _ || "packageid" in _))
          )
            return null;
          const _ = !!(_ && _?.item_type == _._._),
            _ = !!(!_ && !_ && !_ && _ && _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsxs)("div", {
                  ref: _,
                  className: (0, _._)(
                    _().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    _,
                  ),
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        creatorAccountID: _,
                        ..._,
                      }),
                    _ &&
                      (0, _.jsx)(_._, {
                        _: _,
                        className: (0, _._)(
                          _().MaxActionButtonWidth,
                          _().AddToCartButton,
                        ),
                      }),
                    _ &&
                      "appid" in _ &&
                      (0, _.jsx)(_._, {
                        appid: _.appid,
                        className: (0, _._)(
                          _().MaxActionButtonWidth,
                          _().AddToWishlistButton,
                        ),
                      }),
                    !_ &&
                      (0, _.jsx)(_._, {
                        _: _,
                        bMinimizePlatforms: _,
                        bHideWindows: !0,
                      }),
                    !_ &&
                      (0, _.jsx)("span", {
                        className: _().BottomBarPriceInfo,
                        children: (0, _.jsx)(_._, {
                          _: _,
                          bShowInLibrary: _,
                          onlyOneDiscountPct: _,
                        }),
                      }),
                  ],
                }),
              _ &&
                (0, _.jsx)(_, {
                  _: _,
                }),
            ],
          });
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          return _?.name
            ? (0, _.jsx)("div", {
                className: _().CapsuleName,
                children: _.name,
              })
            : null;
        }
        function _(_) {
          const { creatorAccountID: _, strClassName: _ } = _,
            _ = (0, _.useMemo)(
              () => ({
                creatorid: _,
              }),
              [_],
            ),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _(_?.clan_avatar, "Medium"),
            _ = _.name || "";
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().BottomCreatorRow, _),
            children: [
              (0, _.jsx)("img", {
                className: (0, _._)(_().CreatorLogo),
                src: _,
                alt: _,
              }),
              (0, _.jsx)("span", {
                className: _().CreatorName,
                children: _,
              }),
            ],
          });
        }
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "capsule_index_";
        function _(_) {
          const {
              capsule: _,
              bShowParentApp: _,
              elElementToAppendToHover: _,
              index: _,
              navKey: _,
              bHideStoreHover: _,
              onlyOneDiscountPct: _,
              bPreferDemoStorePage: _,
              bShowEarlyAccessBanner: _,
            } = _,
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = _.useRef(!1);
          _.useEffect(() => {
            if (_ && !_.current) {
              const _ = window.setTimeout(() => {
                (_.current = !0), _(!0);
              }, 500);
              return () => window.clearTimeout(_);
            }
            return _(_ || _), () => {};
          }, [_, _]);
          const { data: _ } = (0, _._)(),
            _ = !!_?.preferences?.disable_microtrailers,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_ ? _?.related_items?.parent_appid : void 0),
            { data: _ } = (0, _._)(_);
          if (!_ || !_) return null;
          const _ = !!_ && !!_,
            _ = (0, _.jsx)(_, {
              ..._,
              strExtraParams: _.strExtraParams,
              _: _,
              bIsHovered: _ && !_,
              bHasParentAppToDisplay: _,
              onlyOneDiscountPct: _,
              bShowEarlyAccessBanner: _,
              bUsePanel: !_ && !_,
            });
          return (0, _.jsxs)(_._, {
            className: (0, _._)({
              [_().OuterCapsuleContainer]: !0,
              [_().TrailerActive]: _ && !_ && _,
              [_ + _]: _ == 0,
            }),
            navEntryPreferPosition: _._.PREFERRED_CHILD,
            navKey: _,
            onFocusWithin: _.imageType != "library" ? _ : void 0,
            children: [
              (0, _.jsxs)(_._, {
                appid: _.appid,
                children: [
                  _
                    ? (0, _.jsx)("div", {
                        onMouseEnter: () => _(!0),
                        onMouseLeave: () => _(!1),
                        children: _,
                      })
                    : (0, _.jsx)(_._, {
                        className: _().CapsuleContainer,
                        _: _,
                        elElementToAppend: _.elElementToAppendToHover,
                        bShowDemoButton: _.bShowDemoButton,
                        bPreferDemoStorePage: _.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          _.bShowDeckCompatibilityDialog,
                        eHardwareCompatibilityDisplay:
                          _.eHardwareCompatibilityDisplay,
                        bHidePrice: _.bHidePrice,
                        bUseSubscriptionLayout: _.bUseSubscriptionLayout,
                        strExtraParams: _.strExtraParams,
                        nCreatorAccountID: _.creatorAccountID,
                        nWidthMultiplier: _.nWidthMultiplier,
                        bShowIgnoreButton: _.bShowIgnoreButton,
                        bShowDescription: _.bShowDescriptionInHover,
                        children: _,
                      }),
                  !!_ &&
                    (0, _.jsx)(_.Fragment, {
                      children: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  strExtraParams: _.strExtraParams,
                  parentID: _,
                  parentStoreItemDefaultInfo: _,
                  childAppType: _.type,
                  bPreferDemoStorePage: !!_,
                }),
            ],
          });
        }
        function _(_) {
          const {
              strExtraParams: _,
              parentID: _,
              parentStoreItemDefaultInfo: _,
              childAppType: _,
              bPreferDemoStorePage: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_);
          return _
            ? (0, _.jsx)(_._, {
                className: _().CapsuleParentInfo,
                ...(0, _._)(_, _, _, _, _),
                children: (0, _.jsxs)(_._, {
                  appid: _.appid,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().ParentType,
                      children: (0, _._)(
                        _ == _._._
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, _.jsx)(_._, {
                      _: _,
                      strExtraParams: _,
                      children: (0, _.jsx)("img", {
                        loading: "lazy",
                        className: _.AppCapsuleImage,
                        alt: _.name || "",
                        src: (0, _._)(_, "small_capsule"),
                        ..._(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function _(_) {
          const {
              _: _,
              bHideStatusBanners: _,
              bUsePanel: _,
              strExtraParams: _,
              index: _,
              imageType: _,
              bHasParentAppToDisplay: _,
              bIsHovered: _,
              strDoubleCapsuleMessage: _,
              bPreferDemoStorePage: _,
              bShowEarlyAccessBanner: _,
              bPreferAssetWithoutOverride: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _
              ? void 0
              : (0, _._)(
                  (0, _._)(`${(0, _._)(_, _)}${_ ? `?${_}` : ""}`, _, _),
                ),
            _ = _ ? _._ : _._,
            _ = _ && _,
            _ = !!_;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)({
                  [_().TwoWidthCtn]: _,
                }),
                children: [
                  (0, _.jsxs)(_, {
                    href: _,
                    style: {
                      display: "block",
                      cursor: "pointer",
                      position: _ ? "relative" : void 0,
                      zIndex: _ ? 4 : void 0,
                    },
                    className: (0, _._)({
                      [_().TwoWidthCapsule]: _,
                    }),
                    preferredFocus: _,
                    focusable: !0,
                    noFocusRing: _,
                    children: [
                      (0, _.jsx)(_._, {
                        appids: _,
                        hide_status_banners: _,
                        show_early_access: _,
                      }),
                      _ != "none" &&
                        (0, _.jsx)(_._, {
                          imageType: _,
                          _: _,
                          bPreferAssetWithoutOverride: _,
                        }),
                      (0, _.jsx)(_._, {
                        _: _,
                      }),
                      (0, _.jsx)("div", {
                        className: (0, _._)({
                          [_().FadeIn]: _,
                        }),
                        children: (0, _.jsx)(_._, {
                          _: _,
                          active: _,
                          bIsHoverMode: !0,
                          eGrowOnActivate: _
                            ? _._.k_ETrailerGrowAmount_Implicit
                            : void 0,
                        }),
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      _: _,
                      strDoubleCapsuleMessage: _,
                      index: _,
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_) {
          const { _: _, strDoubleCapsuleMessage: _, index: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, _.jsx)("div", {
                className: _().Reason,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _().StoreSaleItemRelease,
                children: (0, _.jsx)("span", {
                  children: _ ? (0, _._)(_) : "",
                }),
              }),
              (0, _.jsx)(_._, {
                bHideTitle: !0,
                rgTagIDs: _?.map((_) => _.tagid) || [],
                instanceNum: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
              _: _,
              bHidePriceIfOwned: _,
              bHideStatusBanners: _,
              bUseSubscriptionLayout: _,
              elElementToAppendToHover: _,
              bHidePrice: _,
              bHidePlatforms: _,
              creatorAccountID: _,
              bIsHovered: _,
              onlyOneDiscountPct: _,
              strDoubleCapsuleMessage: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { bIsOwned: _ } = (0, _._)(_),
            _ = _ && !_;
          if (_ && _ && _.item_type == _._._ && _.appid)
            return (0, _.jsx)(_._, {
              appid: _.appid,
              bIsMuted: _,
            });
          if (_) return null;
          const _ = !!(_ && _);
          return (0, _.jsx)(_, {
            _: _,
            bHidePrice: _,
            bShowInLibraryInsteadOfPrice: _,
            bHidePlatforms: _,
            creatorAccountID: _,
            bShowName: _.bShowName,
            onlyOneDiscountPct: _,
            bShowWishlistButton: !!_,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              accountID: _,
              bHideWhenNotAvailable: _,
              bHideName: _,
              bLink: _ = !0,
            } = _,
            [_] = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`,
            _ = _ ? "a" : "span";
          return (0, _.jsx)(_.Fragment, {
            children: _
              ? (0, _.jsxs)(_, {
                  href: _ ? _ : void 0,
                  children: [
                    (0, _.jsx)("img", {
                      className: _.SmallAvatar,
                      src: _.avatar_url,
                      "data-miniprofile": "s" + _.ConvertTo64BitString(),
                    }),
                    !_ &&
                      (0, _.jsx)("span", {
                        children: _
                          ? `${_} (${_.persona_name})`
                          : _.persona_name,
                      }),
                  ],
                })
              : (0, _.jsx)(_.Fragment, {
                  children:
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _,
                    }),
                }),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { data: _ } = useStoreItemSupportedPlatforms(_._);
          return jsx(_, {
            platforms: _,
          });
        }
        function _(_) {
          const { _: _, ..._ } = _,
            { data: _ } = (0, _._)(_);
          return (0, _.jsx)(_, {
            ..._,
            platforms: _,
          });
        }
        const _ = _.memo(function (_) {
            const { platforms: _ } = _;
            if (!_) return null;
            const { windows: _, mac: _, steamos_linux: _, vr_support: _ } = _;
            return (0, _.jsxs)("span", {
              className: _().SupportedPlatforms,
              children: [
                _ && (0, _.jsx)(_, {}),
                _ && (0, _.jsx)(_, {}),
                _ && (0, _.jsx)(_, {}),
                _?.vrhmd && (0, _.jsx)(_, {}),
              ],
            });
          }),
          _ = _.memo(function (_) {
            const { platforms: _, eHWCompat: _, size: _ = "small" } = _;
            let _;
            if (_ == _._)
              return (
                (0, _._)(
                  !1,
                  "SteamHWCompatIndicator called for k_ESteamHWCompatibility_None",
                ),
                null
              );
            if (_ == _._) {
              const _ = _?.steam_os_compat_category;
              if (_ === void 0) return null;
              switch (_) {
                case _._:
                  _ = _;
                  break;
                case _._:
                  _ = _;
                  break;
                case _._:
                  _ = _;
                  break;
                default:
                  return (0, _._)(_, `Unhandled steam os category: ${_}`), null;
              }
            } else {
              let _;
              if (
                (_ == _._
                  ? (_ = _?.steam_machine_compat_category)
                  : _ == _._
                    ? (_ = _?.steam_frame_compat_category)
                    : (_ = _?.steam_deck_compat_category),
                _ === void 0)
              )
                return null;
              switch (_) {
                case _._:
                  _ = _;
                  break;
                case _._:
                  _ = _;
                  break;
                case _._:
                  _ = _;
                  break;
                case _._:
                  _ = _;
                  break;
                default:
                  return (
                    (0, _._)(_, `Unhandled deck compat category: ${_}`), null
                  );
              }
            }
            return (0, _.jsxs)("span", {
              className: _()(
                _().DeckCompat,
                _ == "small" && _().Small,
                _ == "fill" && _().Fill,
              ),
              children: [
                _ == _._ && (0, _.jsx)(_, {}),
                _ == _._ && (0, _.jsx)(_, {}),
                _ == _._ && (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {}),
              ],
            });
          });
        function _() {
          return (0, _.jsx)("span", {
            className: _()(_().PlatformIndicator, _().Windows),
            title: _._.Localize("#Platform_Windows"),
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            className: _()(_().PlatformIndicator, _().Mac),
            title: _._.Localize("#Platform_Mac"),
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            className: _()(_().PlatformIndicator, _().SteamOS),
            title: _._.Localize("#Platform_Linux"),
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            className: _().PlatformIndicator,
            title: _._.Localize("#Platform_VR"),
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsxs)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            _: "0px",
            _: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
            children: [
              (0, _.jsx)("rect", {
                fill: "currentColor",
                width: "60.834",
                height: "60.835",
              }),
              (0, _.jsx)("rect", {
                _: "67.165",
                fill: "currentColor",
                width: "60.835",
                height: "60.835",
              }),
              (0, _.jsx)("rect", {
                _: "67.164",
                fill: "currentColor",
                width: "60.834",
                height: "60.836",
              }),
              (0, _.jsx)("rect", {
                _: "67.165",
                _: "67.164",
                fill: "currentColor",
                width: "60.835",
                height: "60.836",
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("svg", {
            version: "1.1",
            _: "base",
            xmlns: "http://www.w3.org/2000/svg",
            _: "0px",
            _: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, _.jsx)("path", {
                _: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
              }),
              (0, _.jsx)("path", {
                _: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("svg", {
            version: "1.1",
            _: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#FFFFFF",
            _: "0px",
            _: "0px",
            viewBox: "0 0 256 256",
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, _.jsx)("path", {
                _: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
                fill: "currentColor",
              }),
              (0, _.jsx)("path", {
                _: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
            ),
            className: _()(_().SteamDeckCompatLogo),
            children: (0, _.jsx)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
                fill: "white",
              }),
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: _()(_().SteamDeckCompatLogo),
            children: (0, _.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, _.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z",
                  fill: "white",
                }),
                (0, _.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: _()(_().SteamDeckCompatLogo),
            children: (0, _.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, _.jsx)("path", {
                  opacity: "0.84",
                  _: "M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z",
                  fill: "white",
                }),
                (0, _.jsx)("path", {
                  opacity: "0.84",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  _: "M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize("#SteamDeckVerified_Category_Verified"),
            className: _().SteamDeckCompatIcon,
            children: (0, _.jsx)("svg", {
              className: _()(_().SteamDeckCompatVerified),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize("#SteamDeckVerified_Category_Playable"),
            className: _().SteamDeckCompatIcon,
            children: (0, _.jsx)("svg", {
              className: _()(_().SteamDeckCompatPlayable),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize("#SteamDeckVerified_Category_Unsupported"),
            className: _().SteamDeckCompatIcon,
            children: (0, _.jsx)("svg", {
              className: _()(_().SteamDeckCompatUnsupported),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize("#SteamDeckVerified_Category_Unknown"),
            className: _().SteamDeckCompatIcon,
            children: (0, _.jsx)("svg", {
              className: _()(_().SteamDeckCompatUnknown),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function _() {
          return (0, _.jsx)("span", {
            title: _._.Localize("#SteamOSCompatibility_Category_Compatible"),
            className: _().SteamDeckCompatIcon,
            children: (0, _.jsx)("svg", {
              className: _()(_().SteamOSCompatCompatible),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function _(_) {
          const { bAllowOutsideOfDeck: _ } = _;
          return !(0, _._)() && !_
            ? null
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { className: _, _: _ } = _,
            [_, _] = (0, _._)();
          let _ = _;
          if ((_ == _._ && (_ = _._), !_)) return null;
          let _;
          return (
            _ == _._ && (_ = _.CompatIconFrame),
            (0, _.jsx)("div", {
              className: (0, _._)(_.CompatIcon, _, _),
              children: (0, _.jsx)(_, {
                _: _,
                eHWCompat: _,
              }),
            })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              className: _,
              srcs: _,
              lazyLoad: _,
              width: _,
              height: _,
              alt: _,
              crossOrigin: _,
            } = _,
            [_, _] = _.useState(_.length),
            [_, _] = _.useState(0);
          _.useEffect(() => {
            _ != _.length && (_(_.length), _(0));
          }, [_, _.length]);
          const _ = _.useCallback(() => {
            _.onImageError && _.onImageError(_.srcs[_]),
              _ + 1 < _.srcs.length && _(_ + 1);
          }, [_, _]);
          return _.length == 0
            ? null
            : (0, _.jsx)("img", {
                className: _,
                src: _[_],
                crossOrigin: _,
                onError: _,
                loading: _ ? "lazy" : void 0,
                width: _,
                height: _,
                alt: _,
              });
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            {
              className: _,
              src: _,
              lazyLoad: _,
              width: _,
              height: _,
              alt: _,
              crossOrigin: _,
            } = _;
          return _
            ? (0, _.jsxs)("div", {
                className: _.ErrorDiv,
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _._)("#Image_ErrorTitle", _),
                  }),
                  (0, _.jsx)("ul", {
                    children: (0, _.jsx)("li", {
                      children: (0, _._)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                className: _,
                src: _,
                onError: () => _(!0),
                crossOrigin: _,
                loading: _ ? "lazy" : void 0,
                width: _,
                height: _,
                alt: _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 1.3,
          _ = 3,
          _ = 256;
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            _ = (0, _.useRef)(null),
            [_, _] = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              _.naturalWidth > _.displayWidth * _ &&
                _.naturalHeight > _.displayHeight * _ &&
                _.naturalWidth > _ &&
                _.naturalWidth / _.naturalHeight < _ &&
                _(!0);
            }, [_]),
            _
              ? (0, _.jsxs)("span", {
                  className: _.PreviewCtn,
                  children: [
                    _,
                    (0, _.jsx)("span", {
                      className: _.SVG,
                      children: (0, _.jsx)(_.YNO, {}),
                    }),
                    (0, _.jsx)("img", {
                      ..._,
                      className: (0, _._)({
                        ...(_.className && {
                          [_.className]: !0,
                        }),
                      }),
                      onClick: (_) => {
                        _.src && _([_.src]);
                      },
                    }),
                  ],
                })
              : (0, _.jsx)("img", {
                  ..._,
                  ref: _,
                  onLoad: (_) => {
                    if (!_.currentTarget.closest("a") && !(0, _._)()) {
                      const {
                        naturalWidth: _,
                        naturalHeight: _,
                        width: _,
                        height: _,
                      } = _.currentTarget;
                      _({
                        naturalWidth: _,
                        naturalHeight: _,
                        displayWidth: _,
                        displayHeight: _,
                      });
                    }
                  },
                })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              items: _,
              render: _,
              onDelete: _,
              onEdit: _,
              onReorder: _,
              onMove: _,
              bDisabled: _,
              rowClassName: _,
            } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(-1),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(0),
            [_, _] = _.useState(0),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(""),
            _ = _.useRef(void 0),
            _ = _.useRef([]),
            _ = _.useRef([]),
            _ = _.useMemo(() => _().CancelToken.source(), []),
            _ = () => {
              _.current?.firstElementChild &&
                (_(_.current.firstElementChild.getBoundingClientRect().height),
                _(_.current.firstElementChild.getBoundingClientRect().width));
            };
          _.useEffect(() => {
            _();
          }, []),
            _.useEffect(
              () => () => _.cancel("ReorderableList unmounting"),
              [_],
            );
          const _ = (_, _) => {
              const _ = _.current[_]?.current;
              if (!_) {
                console.error(
                  "start element grab missing element at index " + _,
                );
                return;
              }
              _(!0), _(_), _(void 0), _(_);
              const _ = _.clientX - _.getBoundingClientRect().left;
              _(_);
              const _ = _.clientY - _.getBoundingClientRect().top;
              _(_),
                (_.style.position = "fixed"),
                (_.style.left = _.clientX - _ + "px"),
                (_.style.top = _.clientY - _ + "px"),
                (_.style.zIndex = "1");
            },
            _ = _.useCallback(
              (_) => {
                const _ = _.current[_]?.current;
                if (!_) {
                  console.error("update grab element missing element");
                  return;
                }
                (_.style.left = _.clientX - _ + "px"),
                  (_.style.top = _.clientY - _ + "px");
              },
              [_, _, _],
            ),
            _ = _.useCallback(() => {
              const _ = _.current[_]?.current;
              _
                ? ((_.style.position = ""), (_.style.zIndex = ""))
                : console.error("end element drag missing element"),
                _(!1),
                _(-1),
                _(void 0),
                _(void 0);
            }, [_]),
            _ = (_, _) => {
              _.token.reason ||
                (_.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  _ !=
                    _.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  _(),
                _(_, _),
                _.preventDefault());
            },
            _ = (_, _) => {
              const _ = _._(_ > _ ? _ - 1 : _, 0, _.length - 1);
              _ != _ && (_ ? _(_, _) : (0, _._)(_, _, _), _(_), _ && _(_));
            },
            _ = (_) => {
              !_ || _.token.reason || (_(), _(_, _));
            },
            _ = _.useCallback(
              (_) => {
                if (!_ || _.token.reason) return;
                const _ = _.clientY;
                let _;
                for (let _ = 0; _ < _.current.length; _++) {
                  const _ = _.current[_].current.getBoundingClientRect().top,
                    _ = _.current[_].current.getBoundingClientRect().bottom,
                    _ = (_ + _ * 2) / 3;
                  if (_ < _) {
                    _ = _;
                    break;
                  }
                }
                _(_ ?? _.current.length), _(_);
              },
              [_, _, _],
            );
          (0, _._)(window, "mousemove", _ ? _ : void 0),
            (0, _._)(window, "mouseup", _ ? _ : void 0),
            _.useEffect(() => {
              for (let _ = _.current.length; _ < _.length; _++)
                _.current.push(_.createRef()), _.current.push(_.createRef());
            }, [_.length]);
          const _ = (_) => {
              _(void 0);
              const _ = _?.trim(),
                _ = Number.parseInt(_);
              if (_.length == 0 || isNaN(_)) return;
              const _ = _ - 1;
              _ != _ && _(_, _);
            },
            _ = (_, _) => {
              _.key === "Enter" && (_(_), _.currentTarget.blur());
            },
            [_, _] = _.useState(void 0);
          return (0, _.jsx)("div", {
            className: _().WhitelistCtn,
            ref: _,
            children: _.map((_, _) =>
              (0, _.jsxs)(
                "div",
                {
                  ref: _.current[_],
                  children: [
                    _ == _ &&
                      (0, _.jsx)(_, {
                        width: _,
                      }),
                    (0, _.jsx)("div", {
                      ref: _.current[_],
                      className: _().DragGhost,
                      children:
                        _ == _ &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)(_().WhitelistRow, _),
                          children: [
                            (0, _.jsx)("img", {
                              className: (0, _._)(
                                _().WhitelistAvatar,
                                _().Grabbing,
                              ),
                              src: _,
                            }),
                            (0, _.jsx)("input", {
                              className: (0, _._)(
                                _().WhitelistNumber,
                                _().Disabled,
                                _().Grabbing,
                              ),
                              type: "text",
                              value: (_ > _ ? _ - 1 : _) + 1,
                              disabled: !0,
                            }),
                            _(_, _),
                          ],
                        }),
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().WhitelistRow,
                        _,
                        _ && _().DragActive,
                        _ == _ && _().BeingDragged,
                        _ == _ && _().Dropped,
                      ),
                      onAnimationEnd: () => _(void 0),
                      children: [
                        (0, _.jsx)("img", {
                          className: (0, _._)(
                            _().WhitelistAvatar,
                            _().Grabbable,
                            _ && _().DisabledGrab,
                          ),
                          src: _,
                          onMouseDown: _ ? void 0 : (_) => _(_, _),
                        }),
                        (0, _.jsx)("input", {
                          className: (0, _._)(
                            _().WhitelistNumber,
                            _ && _().Disabled,
                          ),
                          type: "text",
                          value: _ == _ ? _ : _ + 1,
                          disabled: _ || _ == _,
                          onChange: (_) => _(_.target.value),
                          onKeyDown: (_) => _(_, _),
                          onFocus: (_) => {
                            _(_), _(_.target.value);
                          },
                          onBlur: () => _(_),
                        }),
                        _(_, _),
                        _ != _ &&
                          !!(_ || _) &&
                          (0, _.jsxs)("div", {
                            className: _().ButtonCtn,
                            children: [
                              !!_ &&
                                (0, _.jsx)("div", {
                                  className: _().RemoveIcon,
                                  onClick: (_) => _(_, _),
                                  children: (0, _.jsx)(_.ffu, {}),
                                }),
                              !!_ &&
                                (0, _.jsx)("img", {
                                  className: _().RemoveIcon,
                                  src: _._,
                                  onClick: (_) => _(_, _),
                                }),
                            ],
                          }),
                      ],
                    }),
                    _ == _.length &&
                      _ == _.length - 1 &&
                      (0, _.jsx)(_, {
                        width: _,
                      }),
                  ],
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          const { width: _ } = _;
          return (0, _.jsx)("div", {
            className: _().DragHighlightContainer,
            children: (0, _.jsx)("div", {
              className: _().DragHighlight,
              style: {
                width: _,
              },
            }),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { children: _, ..._ } = _,
            _ = (0, _._)(),
            _ = _.useMemo(
              () => ({
                ..._._.GetDefaultParams(),
                ..._,
                ..._,
              }),
              [
                _,
                _.domain,
                _.controller,
                _.method,
                _.submethod,
                _.feature,
                _.depth,
              ],
            );
          return (0, _.jsx)(_._, {
            ..._,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = React.useMemo(() => CStoreNavEvents.ParseSNR(Config.SNR), []);
          return jsx(NavEventContext, {
            ...CStoreLegacyNavEvents.GetDefaultParams(),
            ..._,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = React.useMemo(
              () => GetOptionalConfigJSON("rgUTMParams", "application_config"),
              [],
            );
          return jsx(_, {
            children: jsx(StoreUTMContext, {
              ...(_ || {}),
              children: _,
            }),
          });
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
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.bUseBinary1K ? 1024 : 1e3,
            _ = _ * _,
            _ = _ * _,
            _ = _ * _;
          return _ > _
            ? {
                nNum: _ / _,
                strPrefix: "Tera",
              }
            : _ > _
              ? {
                  nNum: _ / _,
                  strPrefix: "Giga",
                }
              : _ > _
                ? {
                    nNum: _ / _,
                    strPrefix: "Mega",
                  }
                : _ > _
                  ? {
                      nNum: _ / _,
                      strPrefix: "Kilo",
                    }
                  : {
                      nNum: _,
                      strPrefix: "",
                    };
        }
        function _(_, _, _, _) {
          let _ = _;
          typeof _ == "number"
            ? (_ = {
                nDigitsAfterDecimal: _,
                bUseBinary1K: _ || _ === void 0,
                bValueIsInBytes: !_,
                bValueIsRate: _,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (_ = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ..._,
              });
          const { nNum: _, strPrefix: _ } = _(_, _),
            _ = `#${_}${_.bValueIsInBytes ? "bytes" : "bits"}${_.bValueIsRate ? "_PerSecond" : ""}`;
          return _._.Localize(
            _,
            _.toLocaleString((0, _._)(), {
              minimumFractionDigits: _.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: _.nDigitsAfterDecimal,
            }),
          );
        }
        function _(_, _ = 0) {
          let _;
          return (
            _ &&
              (_ = {
                maximumFractionDigits: _,
              }),
            _ ? _.toLocaleString((0, _._)(), _) : "" + _
          );
        }
        function _(_) {
          return _ > 1e9
            ? Math.trunc(_ / 1e9).toString() + "B"
            : _ > 1e6
              ? Math.trunc(_ / 1e6).toString() + "M"
              : _ > 1e3
                ? Math.trunc(_ / 1e3).toString() + "K"
                : _.toString();
        }
      },
      chunkid: (module) => {
        module.exports = {
          Results: "_3mK1PrFPrbrn2M-BbAWsmL",
          LoadingContainer: "K7yNfrxTJs0QuoFtUfy0z",
          ResultRow: "_1QyQulOsH0dGeFUVgSa9ki",
          GameName: "_353QhAGCSYbIguu7o4DJgs",
          Label: "_3MUfh3QKRNr6qY0vEz3p04",
          AvatarImageCtn: "_3h9l9X-3dBSAhMflfovg2K",
          AvatarImage: "PBBKP18ULuCWFwYcEIOdW",
          AppSearchInputContainer: "oxxmBMFO82IJEm1H341Wd",
          AppSearchDLCCheckbox: "_1aduni8VCqZVqqDxyXb-pY",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextEntry: "_1vE-LsK6l_D_5yjbywZV1p",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          _: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CornerSash: "_1tKrXofY3mdVjHya13I1Ks",
        };
      },
      chunkid: (module) => {
        module.exports = {
          bordered_live_stream_icon: "NSb2xMcNnPEMjPi1dr8KB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PopupScreenshotModal: "_39-iZ5ATgVu0Ji6MD3vGTs",
          PopupScreenshotContainer: "_1yPgn1HBK5eQLrfrG38h1X",
          PopupScreenshot: "_173h7V5UqdDhN-J2O-AKVt",
          ButtonCtn: "_3-4JG-Z1QyDXZaEByxvMvS",
          ButtonIcon: "_15gRxd1hdAQxSunAfg1PZ8",
          Disabled: "_3Mh6I7hT8HViCO91Q5Iech",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SupportedPlatforms: "_33rQKLUJRiKbr34oQgUJSd",
          PlatformIndicator: "_1POD5IsW1vYfv9B_TuSiBd",
          Windows: "_3xTrz2wDDtzNFR58CQfSNa",
          SteamOS: "_1z6ASwnrVeCtYcPfPjiZZd",
          Mac: "_1FiaJi5I3_8ky2ppYqGqfr",
          DeckCompat: "GFz2Vhq20J9x6lqpaKy2G",
          Fill: "_39zOL0i8BdQ_RV-xE0zXDz",
          SteamDeckCompatLogo: "_2xju2qqP5744ItNt2uvbdT",
          SteamDeckCompatIcon: "_28xj3TU4bHvjyeVhlzCmRV",
          SteamDeckCompatVerified: "_3-OPVQMD-qkvAyt3Jntn9t",
          SteamDeckCompatPlayable: "_1EMxxDePjZh_-E7AH0yDym",
          SteamDeckCompatUnsupported: "_2qziiy9xhD4mLc1OgxQAAy",
          SteamDeckCompatUnknown: "I6YFAbL_5IYOTtedVwwPV",
          SteamOSCompatCompatible: "_2fVV0WviM21gsBt1Iz-Htx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ArtPreview: "_3793xvP87t1rZYbAQDC1pG",
          ArtNoArt: "_3WxfzmFYwb-rh8sn5VMFMl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StatusLineItemCtn: "V5SWm2fiBKJqCbPn7bpC0",
          StatusIcon: "_1DFlt9vB8DfZc84ZeQcrgT",
          StatusIconDone: "K_JWTc7pXC9lechbL_JMT",
          StatusNotDone: "zl6s26pUkMfMXmoMlJstY",
        };
      },
      chunkid: (module) => {
        module.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
          TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
          TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
          Reason: "_2h0GKAYcXRP10ryZHFn79d",
          StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
          FadeIn: "_1xh0S-u1cc7_ADm8OLsN-i",
          fadeIn: "cEYXuP-T4izqJqayIpH0D",
          BackgroundAnimation: "_2_vb1-Pr1-2Gblfyxj023k",
          "ItemFocusAnim-darkerGrey-nocolor": "op3gqmHyESfHpHgPheRVq",
          "ItemFocusAnim-darkerGrey": "_12l58v9-cJk-169Qesl-e5",
          "ItemFocusAnim-darkGreySettings": "_2cAK7l3w0qC8uv5uzKjusc",
          "ItemFocusAnim-darkGrey": "_2uLjKVdzQQCodi_XH5ZPfi",
          "ItemFocusAnim-grey": "_3Za5duiaOuAcNrQJeEpjxD",
          "ItemFocusAnim-translucent-white-10": "_3wyVPtc4dD1Msi7wqRvJq3",
          "ItemFocusAnim-translucent-white-20": "_2v6guEab39IMo3I1kfiwXc",
          "ItemFocusAnimBorder-darkGrey": "_3SS0MMDROpRbR_hYLVjAcl",
          "ItemFocusAnim-green": "_3qjU-9ZS6bDpjjMAOYUhGm",
          focusAnimation: "_3-bYSIZZNIWgiOR__mB2jd",
          hoverAnimation: "_39oPHCcA4NgTm53rnykAtP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
          CompatIconFrame: "_3E70dZ6hSfFCmskaIzbgJp",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ErrorDiv: "_2FXMECiK-1oag3HieTiKJW",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
    },
  ]);
})();

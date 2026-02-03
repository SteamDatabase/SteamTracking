(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [258],
  {
    chunkid: (module) => {
      module.exports = {
        SectionContainer: "_3ZElG443QUegFs_bnylS3a",
        SectionTitle: "_1-ftdQuCgy6Eu3lmIy7GzJ",
        RecordCtn: "_1gW9gaaia6sAUsiG510BdF",
        RecordInfoCtn: "_6eQgp5l-li4-ItHochfRq",
      };
    },
    chunkid: (module) => {
      module.exports = {
        MigrateToolCtn: "fGggyaprxt-kYf9Ny0qDA",
        ToolHeader: "_2cI57Kr3zPfSnarN-nYKX_",
        StatusMessage: "_1YCAUON4nfBO2D-18FMRsz",
        ClanRow: "_2PbMCRgo26ntjYzPfcjx2k",
        _: "_1YSGmj9iQytwW9hb1kHu88",
        ClanName: "_2VUhhpNIoONWpToHrRSLu9",
        Counts: "_3uIV0lew2g1pMZCH8S7HiE",
        LinkedAnnouncements: "_3u41kYYGE6rgKk4ATh3i4h",
        MigrateEventsButton: "_3-jPB4911B6r8ucMw0VJmY",
        CompleteMessage: "_3f-CwZABHOr8_h9I_ubPzG",
        LoadEventsButton: "_2qtK6EgvPizbxuOUs7kxeA",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SearchResults: "_1roMuz15pxKZcGYgASP5xg",
      };
    },
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
      const _ = (_) => {
          const {
              strLabel: _,
              strToolTip: __webpack_require__,
              fnSetCurator: _,
              bLimitToCreatorHome: _,
            } = _,
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(0),
            _ = (0, _.useRef)(void 0);
          (0, _.useEffect)(
            () => () => {
              window.clearTimeout(_.current),
                _.current && _.current("SearchForCurator: unmounting"),
                _.current && _.current.Hide();
            },
            [],
          );
          const _ = (0, _.useCallback)(
            async (_) => {
              const _ = _.target.value;
              _ &&
                0 != _.trim().length &&
                (window.clearTimeout(_.current),
                _.current && _.current("SearchForCurator: new request"),
                (_.current = window.setTimeout(async () => {
                  const _ = _().CancelToken.source();
                  _.current = _.cancel;
                  try {
                    const _ = await _._.SearchCreatorHomeStore(_, _, _);
                    if (_.token.reason) return;
                    _.current = (0, _._)(
                      _.createElement(_, {
                        list: _,
                        fnSetCurator: _,
                      }),
                      _.current.element,
                      {
                        bOverlapHorizontal: !0,
                        bMatchWidth: !0,
                        bFitToWindow: !0,
                        bDisablePopTop: !0,
                        bNoFocusWhenShown: !0,
                        bSkipFocusWhenReady: !0,
                      },
                    );
                  } catch (_) {
                    if (_.token.reason) return;
                    const _ = (0, _._)(_);
                    console.log(
                      "SearchForCurator.SearchCreatorHomeStore error " +
                        _.strErrorMsg,
                      _,
                    );
                  }
                }, 300)));
            },
            [_, _],
          );
          return _.createElement(
            _._,
            null,
            _.createElement(_._, {
              type: "text",
              label: _,
              onChange: _,
              onBlur: (_) =>
                setTimeout(() => _.current && _.current.Hide(), 200),
              ref: _,
              tooltip: __webpack_require__,
            }),
          );
        },
        _ = (_) => {
          const { list: _, fnSetCurator: __webpack_require__ } = _;
          return _.createElement(
            _._,
            {
              className: _.SearchResults,
            },
            _.map((_) =>
              _.createElement(
                _._,
                {
                  key: "curatorresult" + _.GetClanAccountID(),
                  onSelected: () => __webpack_require__(_),
                },
                _.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                    },
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.GameImageContainer,
                    },
                    _.createElement("img", {
                      src: _.GetAvatarURLFullSize(),
                      className: _.AvatarImage,
                    }),
                  ),
                  (0, _._)(_.GetName()),
                ),
              ),
            ),
          );
        };
      var _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
          const _ = (function () {
            const [_, _] = _.useState(!_.Get().BHasLoadCompleted());
            return (
              _.useEffect(() => {
                _.Get().BHasLoadCompleted() ||
                  _.Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => _(!1));
              }, []),
              _ ? void 0 : _.Get().GetMigrationRecords()
            );
          })();
          if (!_)
            return _.createElement(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
              size: "medium",
            });
          const _ = _.filter((_) => !_.gid_clan_event),
            _ = __webpack_require__.filter(
              (_) =>
                _.display_name.toLocaleLowerCase().indexOf("franchise") >= 0,
            ),
            _ = __webpack_require__.filter(
              (_) =>
                _.display_name.toLocaleLowerCase().indexOf("franchise") < 0,
            ),
            _ = _.filter((_) => Boolean(_.gid_clan_event && _.hidden)),
            _ = _.filter((_) => Boolean(_.gid_clan_event && !_.hidden));
          return _.createElement(
            "div",
            null,
            _.createElement("h1", null, "Migration Sale Tool:"),
            _.createElement(
              "p",
              null,
              "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
            ),
            _.createElement(_, {
              strName: "Unmigrated Franchises",
              records: _,
            }),
            _.createElement(_, {
              strName: "Unmigrated Generic Sale PAges",
              records: _,
              bHideByDefault: !0,
            }),
            _.createElement(_, {
              strName: "Migrated but Hidden",
              records: _,
            }),
            _.createElement(_, {
              strName: "Migrated and Visible",
              records: _,
              bHideByDefault: !0,
            }),
          );
        }),
        _ = (_) => {
          const {
              strName: _,
              records: __webpack_require__,
              bHideByDefault: _,
            } = _,
            [_, _] = (0, _.useState)(_);
          return _.createElement(
            "div",
            {
              className: _.SectionContainer,
            },
            _.createElement(
              "h2",
              {
                className: _.SectionTitle,
                onDoubleClick: () => _(!_),
              },
              _,
              " (",
              __webpack_require__.length,
              ")",
              _.createElement("span", null, " "),
              _.createElement(
                _._,
                {
                  onClick: () => _(!_),
                },
                _ ? _.createElement(_.hz4, null) : _.createElement(_.Xjb, null),
              ),
            ),
            _.createElement("hr", null),
            Boolean(_)
              ? _.createElement(
                  _._,
                  {
                    onClick: () => _(!1),
                  },
                  (0, _._)("#Sale_ShowContents"),
                )
              : _.createElement(
                  _.Fragment,
                  null,
                  __webpack_require__.map((_) =>
                    _.createElement(_, {
                      key: _.sale_page_id,
                      record: _,
                    }),
                  ),
                ),
          );
        },
        _ = (0, _._)((_) => {
          const { record: _ } = _,
            _ = (0, _._)(_.clan_account_id);
          return _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              {
                className: _.RecordCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.RecordInfoCtn,
                },
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "a",
                    {
                      href: _._.STORE_BASE_URL + "sale/" + _.vanity,
                    },
                    _.createElement(
                      "b",
                      null,
                      `${_.display_name} - (${_.vanity})`,
                    ),
                  ),
                ),
                Boolean(_) &&
                  _.createElement(
                    "div",
                    null,
                    _.createElement(
                      "a",
                      {
                        href: _.vanity_url,
                      },
                      "Sale Page part of ",
                      _.group_name,
                    ),
                  ),
                Boolean(_.gid_clan_event) &&
                  _.createElement(
                    "div",
                    null,
                    _.createElement(
                      "a",
                      {
                        href:
                          _._.COMMUNITY_BASE_URL +
                          "gid/" +
                          _._.InitFromClanID(
                            _.clan_account_id,
                          ).ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          _.gid_clan_event,
                      },
                      `Migrated: Event Editor Links: State hidden: ${_.hidden} published: ${_.published} sale/ vanity?: ${_.valve_approved_sale_vanity_id}`,
                    ),
                  ),
              ),
              Boolean(!_.gid_clan_event || (_.hidden && !_.published)) &&
                _.createElement(
                  _._,
                  {
                    onClick: (_) =>
                      (0, _._)(
                        _.createElement(_, {
                          record: _,
                        }),
                        (0, _._)(_),
                      ),
                  },
                  "Migrate Sale Page",
                ),
            ),
            _.createElement("hr", null),
          );
        }),
        _ = (_) => {
          const { record: _, closeModal: __webpack_require__ } = _,
            [_, _] = (0, _.useState)(_.clan_account_id),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(void 0),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(_.gid_clan_event),
            [_, _] = (0, _.useState)(null);
          return _.createElement(
            _._,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${_.vanity} to the below clan `,
              bOKDisabled: !_ || _,
              onOK: () => {
                _(!0),
                  _.Get()
                    .MigrateOrUpdateSalePage(
                      _.sale_page_id,
                      _,
                      _.gid_clan_event,
                    )
                    .then(([_, _, __webpack_require__]) => {
                      _(_), _(_), _(__webpack_require__);
                    });
              },
              onCancel: __webpack_require__,
            },
            Boolean(_.clan_account_id)
              ? _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    "div",
                    null,
                    "Sale page already migrated. This will update the hidden page with latest migration code",
                  ),
                  _.createElement("div", null, "ClanID = ", _.clan_account_id),
                  _.createElement("div", null, "GID = ", _.gid_clan_event),
                )
              : _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (_) => {
                      _(_.GetClanAccountID()), _(_);
                    },
                  }),
                  Boolean(_) &&
                    _.createElement(_, {
                      creatorHome: _,
                    }),
                ),
            Boolean(_ && !_) &&
              _.createElement(_._, {
                position: "center",
                size: "medium",
              }),
            Boolean(_) && _.createElement("div", null, _),
            Boolean(_) &&
              _.createElement(
                "div",
                null,
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "a",
                    {
                      href: _._.STORE_BASE_URL + "sale/" + _.vanity,
                      target: "_blank",
                    },
                    "Sale Page",
                  ),
                ),
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "a",
                    {
                      href:
                        _._.COMMUNITY_BASE_URL +
                        "gid/" +
                        _._.InitFromClanID(_).ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        _,
                      target: "_blank",
                    },
                    "New Sale Page Editor",
                  ),
                ),
              ),
          );
        },
        _ = (_) => {
          const { creatorHome: _ } = _,
            _ = _._.InitFromClanID(_.GetClanAccountID()),
            _ = _.GetClanAccountID();
          return _
            ? _.createElement(
                "div",
                null,
                _.createElement(
                  "div",
                  null,
                  "ClanID = ",
                  _,
                  " - SteamID ",
                  __webpack_require__.ConvertTo64BitString(),
                ),
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "a",
                    {
                      href:
                        "https://steamsupport.valvesoftware.com/clan/overview/" +
                        __webpack_require__.ConvertTo64BitString(),
                    },
                    "Group Support Page",
                  ),
                ),
                Boolean(!_.BIsPartnerEventEditorEnabled()) &&
                  _.createElement(
                    "div",
                    null,
                    "To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.",
                    _.createElement(
                      "a",
                      {
                        href: "https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta",
                        target: "_blank",
                      },
                      "Read more about the state here.",
                    ),
                  ),
                _.createElement(_._, {
                  creatorID: _.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                }),
              )
            : null;
        };
      class _ {
        BHasLoadCompleted() {
          return this.m_bLoadComplete;
        }
        GetMigrationRecords() {
          return this.m_listSaleState;
        }
        async MigrateOrUpdateSalePage(_, _, _) {
          var _, _;
          const _ = this.m_mapSaleIDToInfo.get(_);
          if (!_)
            return [
              "Record not found to begin the migration processing, cannot take action.: " +
                _,
              !1,
              void 0,
            ];
          if (_.gid_clan_event && (!_.hidden || _.published))
            return [
              "Sale event is already public, cannot take action.: " + _,
              !1,
              void 0,
            ];
          try {
            const _ =
              _._.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
            let _ = new URLSearchParams();
            _.append("sessionid", _._.SESSIONID),
              _.append("salePageID", _),
              _.append("clanAccountID", "" + _),
              _ && _.append("gidClanEvent", _);
            const _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (
              200 == (null == _ ? void 0 : _.status) &&
              1 ==
                (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                  ? void 0
                  : _.success) &&
              (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                ? void 0
                : _.gidClanEvent)
            )
              return (
                (0, _._)(() => {
                  _.gid_clan_event ||
                    ((_.gid_clan_event = _.data.gidClanEvent),
                    (_.clan_account_id = _),
                    (_.hidden = !0),
                    (_.published = !1),
                    (_.valve_approved_sale_vanity_id = !0));
                }),
                [_.data.msg || "Success", !0, _.data.gidClanEvent]
              );
            {
              const _ = (0, _._)(_);
              return (
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                    _.strErrorMsg,
                  _,
                ),
                [_.data.msg || "Failed", !1, void 0]
              );
            }
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with " +
                _.strErrorMsg,
              _,
            );
          }
          return ["failed", !1, void 0];
        }
        async LoadSalePageMigrationInfo() {
          return (
            this.m_stateLoadPromise ||
              (this.m_stateLoadPromise =
                this.InternalLoadSalePageMigrationInfo()),
            this.m_stateLoadPromise
          );
        }
        async InternalLoadSalePageMigrationInfo() {
          var _, _;
          try {
            const _ =
                _._.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
              _ = {
                sessionid: _._.SESSIONID,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              ((this.m_bLoadComplete = !0),
              200 == (null == _ ? void 0 : _.status) &&
                1 ==
                  (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                    ? void 0
                    : _.success) &&
                (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                  ? void 0
                  : _.data))
            )
              return (
                (0, _._)(() => {
                  _.data.data.forEach((_) => {
                    this.m_mapSaleIDToInfo.set(_.sale_page_id, _),
                      this.m_listSaleState.push(
                        this.m_mapSaleIDToInfo.get(_.sale_page_id),
                      );
                  });
                }),
                console.log(
                  "InternalLoadSalePageMigrationInfo Loaded: " +
                    this.m_listSaleState.length,
                ),
                this.m_listSaleState
              );
            {
              const _ = (0, _._)(_);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                  _.strErrorMsg,
                _,
              );
            }
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                _.strErrorMsg,
              _,
            );
          }
          return [];
        }
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (this.m_mapSaleIDToInfo = new Map()),
            (this.m_listSaleState = new Array()),
            (this.m_stateLoadPromise = null),
            (this.m_bLoadComplete = !1),
            (0, _._)(this);
        }
      }
      (0, _._)([_._], _.prototype, "m_mapSaleIDToInfo", void 0),
        (0, _._)([_._], _.prototype, "m_listSaleState", void 0);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0),
            (0, _._)(this);
        }
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore.Init()),
            _.s_globalSingletonStore
          );
        }
        Init() {}
        GetApps(_, _, _) {
          const _ = Math.max(_, this.m_nHighestAppOffsetRequested),
            _ = _ + _ - _;
          return (
            _ > 0 && (this.m_mostRecentRequest = this.FetchApps(_, _, _)),
            this.m_rgApps.slice(_, _ + _)
          );
        }
        async FetchApps(_, _, _, _) {
          var _;
          if (this.m_startAppID && this.m_startAppID != _)
            throw new Error(
              "Cannot switch starting AppID from " +
                this.m_startAppID +
                " to " +
                _,
            );
          this.m_startAppID = _;
          let _ = Math.max(_, 20);
          for (
            this.m_nHighestAppOffsetRequested = _ + _,
              await this.m_mostRecentRequest;
            _ > 0;
          ) {
            const _ = Math.min(_, 100),
              _ = {
                offset: _,
                nBatchSize: _,
                start_appid: _,
              },
              _ = _._.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
            let _ = null;
            try {
              const _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: null == _ ? void 0 : _.token,
              });
              if (
                1 ==
                  (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                    ? void 0
                    : _.success) &&
                _.data.apps
              ) {
                (0, _._)(() => {
                  if (_ > this.m_rgApps.length)
                    for (let _ = this.m_rgApps.length; _ < _; _++)
                      this.m_rgApps[_] = null;
                  for (let _ = 0; _ < _; _++)
                    this.m_rgApps[_ + _] = _.data.apps[_];
                }),
                  (_ += _),
                  (_ -= _);
                continue;
              }
              _ = (0, _._)(null == _ ? void 0 : _.data);
            } catch (_) {
              _ = (0, _._)(_);
            }
            throw new Error(
              "ajax request failed with error " +
                _.errorCode +
                ':"' +
                _.strErrorMsg +
                '"',
            );
          }
        }
        GetClanAccountIDs(_, _) {
          const _ = this.m_nHighestClanOffsetRequested,
            _ = _ + _ - _;
          return (
            _ > 0 && this.FetchClans(_, _),
            this.m_rgClanAccountIDs.slice(_, _ + _)
          );
        }
        async FetchClans(_, _, _) {
          var _;
          this.m_nHighestClanOffsetRequested = _ + _;
          const _ = {
              offset: _,
              count: _,
            },
            _ = _._.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
          let _ = null;
          try {
            const _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: null == _ ? void 0 : _.token,
            });
            if (
              1 ==
                (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                  ? void 0
                  : _.success) &&
              _.data.accountids
            )
              return void (this.m_rgClanAccountIDs =
                this.m_rgClanAccountIDs.concat(_.data.accountids.map(Number)));
            _ = (0, _._)(null == _ ? void 0 : _.data);
          } catch (_) {
            _ = (0, _._)(_);
          }
          console.error(
            "FetchClans: ajax request failed with error",
            _.strErrorMsg,
          );
        }
      }
      (0, _._)([_._.shallow], _.prototype, "m_rgApps", void 0),
        (0, _._)([_._.shallow], _.prototype, "m_rgClanAccountIDs", void 0);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = (0, _._)((_) => {
          const [_, __webpack_require__] = (0, _.useState)(!0);
          (0, _.useEffect)(() => {
            Promise.all([_._.InitGlobal(), _._.Init()]).then(() =>
              __webpack_require__(!1),
            );
          }, []);
          const [_, _] = (0, _._)("start", 0),
            [_, _] = (0, _._)("start_appid", 0),
            [_, _] = (0, _._)("count", 10),
            [_, _] = (0, _._)("autoload", !0),
            [_, _] = (0, _._)("batch_size", 1),
            [_, _] = (0, _._)("automigrate", !1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _._)("rolling", 0),
            [_, _] = (0, _.useState)(new Set()),
            _ = (0, _.useRef)(0),
            _ = _.Get().GetApps(_, _, _),
            _ = 0 == _ ? _ : _.filter((_) => !_.has(Number(_._))).slice(0, _),
            _ = (_, _) => {
              _.has(_) ||
                (console.log("completed: ", _, _),
                _.add(_),
                (_.current += _),
                _(new Set(_)));
            };
          return _.createElement(
            "div",
            {
              className: _().MigrateToolCtn,
            },
            _.createElement(
              "div",
              {
                className: _().ToolHeader,
              },
              "Partner Events Migration Tools",
            ),
            _.map((_) =>
              _.createElement(_, {
                key: _._,
                app: _,
                bAutoLoad: _,
                bAutoMigrate: _ || _,
                nMigrateBatchSize: _,
                fnOnCompletion: _,
              }),
            ),
            _ &&
              _.createElement(_._, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !_.length &&
              _.createElement(_._, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            _.createElement(
              "div",
              {
                className: _().LoadEventsButton,
                onClick: () => {
                  _(!1), _(new Set()), _(_ + _);
                },
              },
              "LOAD NEXT PAGE",
            ),
            !_ &&
              _.createElement(
                "div",
                {
                  className: _().LoadEventsButton,
                  onClick: () => _(!0),
                },
                "MIGRATE ALL ON PAGE",
              ),
            _.createElement(
              "div",
              {
                className: _().StatusMessage,
              },
              _.size +
                " OF " +
                _.length +
                " APPS COMPLETE. #EVENTS: " +
                _.current,
            ),
          );
        }),
        _ = (0, _._)((_) => {
          const _ = Number(_.app._),
            [__webpack_require__, _] = (0, _.useState)(0),
            [_, _] = (0, _.useState)([]),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(new Set()),
            _ = (0, _.useRef)(0);
          (0, _.useEffect)(() => {
            _._.LoadOGGClanInfoForAppID(_).then((_) => {
              var _;
              return console.log(
                "Loaded app",
                _,
                null == _ ? void 0 : _.group_name,
                null === (_ = null == _ ? void 0 : _.clanSteamID) ||
                  void 0 === _
                  ? void 0
                  : __webpack_require__.ConvertTo64BitString(),
              );
            });
          }, [_]);
          const _ = _._.GetOGGClanInfo(_),
            _ = _ ? _.group_name : _.app.name,
            _ = `${_._.COMMUNITY_BASE_URL}games/${_ ? _.vanity_url : _}/partnerevents/`,
            _ = _.length,
            _ = __webpack_require__ == _,
            _ = _.filter((_) => _.BIsVisibleEvent()),
            _ = _.length,
            _ = _.filter(
              (_) =>
                _.bOldAnnouncement &&
                _ &&
                _.clanAccountID != _.announcementClanSteamID.GetAccountID(),
            ).length,
            _ = _.filter(
              (_) =>
                _.bOldAnnouncement &&
                !_.current.has(_.AnnouncementGID) &&
                (!_ ||
                  _.clanAccountID == _.announcementClanSteamID.GetAccountID()),
            ),
            _ = _.length,
            _ = !_ && _ > 0 && (null == _ ? void 0 : _.clanSteamID),
            _ = async () => {
              const _ = __webpack_require__;
              _(__webpack_require__ + 50), _(!0);
              const _ = await _._.LoadPartnerEventsPageable(void 0, _, _, 50);
              _(_.concat(_)), _(!1);
            };
          (0, _.useEffect)(() => {
            _.bAutoLoad && _ && !_ && _();
          });
          const _ = (_, _) => {
              _ ? (_.current += 1) : _.current.add(_);
            },
            _ = async () => {
              _(!0),
                await (async function (_, _, _, _, _) {
                  for (const _ of _.slice(0, _)) {
                    console.log(
                      "Migrating",
                      _,
                      _.AnnouncementGID,
                      _.GetNameWithFallback(0),
                      _,
                    );
                    try {
                      const _ = await (0, _._)(_.AnnouncementGID, _, _);
                      if (_) console.warn("Already migrated to event", _);
                      else {
                        const _ = _._.GetEditModel();
                        _.AddTag("auto_migrated"),
                          _.AddTag("hide_library_overview"),
                          _.AddTag("hide_library_detail"),
                          await _._.SaveModel(_),
                          console.log("Successfully migrated the event!"),
                          (_.bOldAnnouncement = !1),
                          _(_.AnnouncementGID, !0);
                      }
                    } catch (_) {
                      const _ = (0, _._)(_);
                      console.error(
                        "MigrateEvents: " + _.strErrorMsg.slice(0, 512),
                        _,
                      ),
                        _(_.AnnouncementGID, !1);
                    }
                  }
                })(_, _.nMigrateBatchSize, _, _.clanSteamID, _),
                _(!1);
            };
          return (
            (0, _.useEffect)(() => {
              _.bAutoMigrate && _ && !_ && _();
            }),
            (0, _.useEffect)(() => {
              _ || _ || _ || _.fnOnCompletion(_, _.current);
            }),
            _.createElement(
              "div",
              {
                className: _().ClanRow,
              },
              _.createElement(
                "div",
                {
                  className: _()._,
                },
                _,
              ),
              _.createElement(
                "a",
                {
                  className: _().ClanName,
                  href: _,
                },
                _,
              ),
              _.createElement(
                "div",
                {
                  className: _().Counts,
                },
                `Loaded: ${_}\tVisible: ${_}\tOld: ${_}`,
                _ > 0 &&
                  _.createElement(
                    "span",
                    {
                      className: _().LinkedAnnouncements,
                    },
                    `Linked: ${_}`,
                  ),
              ),
              _
                ? _.createElement(
                    "div",
                    {
                      className: _().LoadEventsButton,
                      onClick: _,
                    },
                    "LOAD EVENTS",
                  )
                : _
                  ? _.createElement(_._, {
                      size: "small",
                    })
                  : _
                    ? _.createElement(
                        "div",
                        {
                          className: _().MigrateEventsButton,
                          onClick: _,
                        },
                        "MIGRATE EVENTS",
                      )
                    : _.createElement(
                        "div",
                        {
                          className: _().CompleteMessage,
                        },
                        "NOTHING TO MIGRATE",
                      ),
            )
          );
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid"));
      function _(_) {
        const [_, __webpack_require__] = _.useState(!0);
        return (
          _.useEffect(() => {
            _._.Init(), Promise.all([]).then(() => __webpack_require__(!1));
          }, []),
          _
            ? _.createElement(_._, {
                position: "center",
                size: "medium",
              })
            : _.createElement(
                _._,
                null,
                _.createElement(_._, {
                  path: _._.MigrateSaleEvents(),
                  component: _,
                }),
                _.createElement(_._, {
                  path: _._.MigrateEvents(),
                  component: _,
                }),
                _.createElement(_._, {
                  component: _._,
                }),
              )
        );
      }
    },
  },
]);

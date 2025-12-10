(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7352],
  {
    chunkid: (module) => {
      module.exports = {
        Dummy: "wW1AV4_YscO4bfrtkjtze",
        ThemeRow: "_1iI4q9Lh3S4b7MvHV8-9FH",
        ThemeSize: "w1hcRNJLqJaIKpJvsg7Ry",
        SizeColorSweet: "_1hc3z1Nc69lLtW0CcBDuKw",
        SizeColorBig: "_2wjO9uz2L07SVsQytkYTK4",
        SizeColorSmall: "_2if7kNiDu3IhmR0s4wtbL",
        ThemeDefinitionCtn: "NH6z72lFUwnDiY97gSiGV",
        ThemeRevenueCtn: "isMdaGLB3GPUYQ3vT6NhF",
        TopGamesCtn: "_1Ta3Hfqsq1RBzrU1mcMgML",
        ThemeDetails: "_2KbZZ6bPBB-Bk4MTv5bxF2",
        GamesRow: "_1uO2EvuPAL3GIaEHpPWmOA",
        GamesColumn: "_1Pdhl5fZ9jbDwMpDg_IxT4",
        GameItem: "_3Kk39B7jUhr6BVRn9v4WNF",
        GameImage: "_1KDJ1W0K9UA9kAgQCL5jfP",
        ThemeTitle: "_2iHxOX8wNwHbuhDCSU2Sfd",
        ThemeTags: "_2PNltetEpoiiz7epQREfdS",
        TagsMustTitle: "_3TtwdJ1FSNAJ0zZMo6okKJ",
        TagsOrTitle: "_2QGX0lv5drCYBScHjSBfhm",
        TagsNotTitle: "_18G4mH1Yb9Sjc8DbqBwTjj",
        ShowStatsBtn: "_3Ep6vWtYwtiBwQ3kOcZR1a",
        DashTitleBar: "_11xa2NywK-XoPRPzAprmhr",
        ButtonGroup: "_31Lp_UMwj_nvMZg4wGKeqr",
        DashDescription: "_16bPPRfJgTdFDNoMeEHx96",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_rtStartTime;
        m_rtEndTime;
        m_totalSummary;
        m_mapPackageSummary = new Map();
        m_mapAppPackageList = new Map();
        m_mapAppSaleSummary = new Map();
        m_mapAppSaleSummaryChange = new Map();
        m_mapAppToLoadPromises = new Map();
        GetRTStartTime() {
          return this.m_rtStartTime;
        }
        GetRTEndTime() {
          return this.m_rtEndTime;
        }
        GetAppSaleSummary(_) {
          return this.m_mapAppSaleSummary.get(_);
        }
        GetAppSaleSummaryChangeCallback(_) {
          return (
            this.m_mapAppSaleSummaryChange.has(_) ||
              this.m_mapAppSaleSummaryChange.set(_, new _._()),
            this.m_mapAppSaleSummaryChange.get(_)
          );
        }
        BHasAppSaleSummaryChangeCallback(_) {
          return this.m_mapAppSaleSummaryChange.has(_);
        }
        GetTotalSummary() {
          return (
            this.m_totalSummary ||
              ((this.m_totalSummary = {
                net_sales_usd: 0,
                net_units_sold: 0,
                gross_sales_usd: 0,
                gross_units_sold: 0,
              }),
              this.m_mapAppSaleSummary.forEach((_) => {
                (this.m_totalSummary.net_sales_usd += _.net_sales_usd),
                  (this.m_totalSummary.net_units_sold += _.net_units_sold),
                  (this.m_totalSummary.gross_sales_usd += _.gross_sales_usd),
                  (this.m_totalSummary.gross_units_sold += _.gross_units_sold);
              })),
            this.m_totalSummary
          );
        }
        SetAppSaleSummary(_) {
          this.m_mapAppSaleSummary.set(_.appid, _),
            this.m_mapAppSaleSummaryChange.has(_.appid) &&
              this.m_mapAppSaleSummaryChange.get(_.appid).Dispatch(_);
        }
        GetTopNApps(_) {
          const _ = Array.from(this.m_mapAppSaleSummary.values());
          return (
            _.sort((_, _) => (_.gross_sales_usd || 0) - _.gross_sales_usd),
            _.slice(0, _)
          );
        }
        async LoadApps(_) {
          let _ = [..._];
          const _ = new Array();
          let _ = new Array();
          for (; _.length > 0; ) {
            _ = _.filter(
              (_) =>
                !this.m_mapAppToLoadPromises.has(_) ||
                (__webpack_require__.push(this.m_mapAppToLoadPromises.get(_)),
                !1),
            );
            const _ = _.splice(0, 5e3),
              _ = this.InternalLoadAppBatch(_);
            __webpack_require__.push(_),
              _.push(_),
              _.length > 0 && (await Promise.all(_), (_ = new Array()));
          }
          await Promise.all(_);
        }
        async InternalLoadAppBatch(_) {
          let _;
          try {
            const _ = new FormData();
            __webpack_require__.append("sessionid", _._.SESSIONID),
              __webpack_require__.append("rgAppIDs", _.join(",")),
              __webpack_require__.append("rtimeStart", "" + this.m_rtStartTime),
              __webpack_require__.append("rtimeEnd", "" + this.m_rtEndTime);
            const _ = `${_._.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
              _ = await _().post(_, _, {
                withCredentials: !0,
              });
            if (200 == _.status && _.data?.apps_to_packages?.length > 0)
              return (
                _.data.package_summaries.forEach((_) => {
                  this.m_mapPackageSummary.set(_.packageid, _);
                }),
                _.data.apps_to_packages.forEach((_) => {
                  const _ = _.subs || [];
                  this.m_mapAppPackageList.set(_.appid, _);
                  const _ = {
                    appid: _.appid,
                    gross_sales_usd: 0,
                    gross_units_sold: 0,
                    net_sales_usd: 0,
                    net_units_sold: 0,
                  };
                  _.forEach((_) => {
                    const _ = this.m_mapPackageSummary.get(_);
                    _ &&
                      ((_.gross_sales_usd += _.gross_sales_usd),
                      (_.gross_units_sold += _.gross_units_sold),
                      (_.net_sales_usd += _.net_sales_usd),
                      (_.net_units_sold += _.net_units_sold));
                  }),
                    this.m_mapAppSaleSummary.set(_.appid, _),
                    this.BHasAppSaleSummaryChangeCallback(_.appid) &&
                      this.GetAppSaleSummaryChangeCallback(_.appid).Dispatch(_);
                }),
                !0
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleRankStore::InternalLoadAppBatch failed with " +
                _.strErrorMsg,
              _,
            ),
            !1
          );
        }
        constructor(_, _) {
          if (_) (this.m_rtStartTime = _), (this.m_rtEndTime = _);
          else {
            const _ = new Date();
            _.setUTCHours(0),
              _.setUTCMinutes(0),
              _.setUTCSeconds(0),
              _.setUTCMilliseconds(0);
            const _ = Math.floor(_.getTime() / 1e3);
            (this.m_rtEndTime = _ - 86400),
              (this.m_rtStartTime = _ - 24 * (_ + 1) * 60 * 60);
          }
          "dev" == _._.WEB_UNIVERSE &&
            console.log(
              `CAppSaleSummary initializing to ${this.m_rtStartTime} to ${this.m_rtEndTime}`,
            );
        }
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapCategories;
        m_promise;
        static s_singleton;
        constructor() {
          "dev" === _._.WEB_UNIVERSE &&
            (window.g_ContentHubCategoriesStore = this);
        }
        BIsLoaded() {
          return Boolean(this.m_mapCategories);
        }
        GetCategories() {
          return this.m_mapCategories;
        }
        async HintLoad() {
          return (
            this.m_promise || (this.m_promise = this.Load()), this.m_promise
          );
        }
        async Load() {
          const _ =
              _._.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategories",
            _ = {
              origin: self.origin,
              sessionid: _._.SESSIONID,
            };
          let _ = null;
          try {
            const _ = await _().get(_, {
              params: _,
            });
            if (200 === _.status && 1 === _.data?.success)
              return void (this.m_mapCategories = this.ParseResponse(_.data));
            (this.m_promise = null), (_ = (0, _._)(_));
          } catch (_) {
            (this.m_promise = null), (_ = (0, _._)(_));
          }
          console.error(
            "CContentHubCategoriesStore.Load failed: " + _.strErrorMsg,
            _,
          );
        }
        ParseResponse(_) {
          const _ = new Map(),
            _ = _.categories;
          for (const _ of Object.keys(_)) {
            const _ = _[_],
              _ = {
                handle: _.handle,
                loc_token: _.loc_token,
                type: _.type,
                heading: _.heading,
                _: _._ || void 0,
                exclude_from_search: _.exclude_from_search,
                search_alias: _.search_alias,
              },
              {
                must: _,
                any: _,
                mustnot: _,
                replaces_tags: _,
                content_descriptors: _,
              } = _;
            _ &&
              (Array.isArray(_)
                ? (_.must = _.map((_) => ({
                    _: _,
                  })))
                : (_.must = [
                    {
                      _: _,
                    },
                  ])),
              _ &&
                (Array.isArray(_)
                  ? (_.any = _.map((_) => ({
                      _: _,
                    })))
                  : (_.any = [
                      {
                        _: _,
                      },
                    ])),
              _ &&
                (Array.isArray(_)
                  ? (_.mustnot = _.map((_) => ({
                      _: _,
                    })))
                  : (_.mustnot = [
                      {
                        _: _,
                      },
                    ])),
              _ &&
                (Array.isArray(_)
                  ? (_.replaces_tags = _.map((_) => ({
                      _: _,
                    })))
                  : (_.replaces_tags = [
                      {
                        _: _,
                      },
                    ])),
              _ &&
                "string" == typeof _ &&
                (_.content_descriptors = _.split(",").map((_) => parseInt(_))),
              _.set(_, _);
          }
          return _;
        }
        static Get() {
          return _.s_singleton || (_.s_singleton = new _()), _.s_singleton;
        }
      }
      async function _() {
        const _ =
            _._.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
          _ = {
            origin: self.origin,
            sessionid: _._.SESSIONID,
          };
        let _ = null;
        try {
          const _ = await _().get(_, {
            params: _,
            withCredentials: !0,
          });
          if (200 === _.status && 1 === _.data?.success) {
            const _ = {
              rgCategories: [],
              bHasUnpublishedChanges: !1,
            };
            return (
              _.data.in_progress
                ? ((_.rgCategories = _(
                    JSON.parse(_.data.in_progress).categories,
                  )),
                  (_.bHasUnpublishedChanges = !0))
                : _.data.active &&
                  (_.rgCategories = _(JSON.parse(_.data.active).categories)),
              _
            );
          }
          _ = (0, _._)(_);
        } catch (_) {
          _ = (0, _._)(_);
        }
        return (
          console.error("GetCategoriesKV failed: " + _.strErrorMsg, _),
          {
            rgCategories: [],
          }
        );
      }
      function _(_) {
        const _ = [];
        for (const _ of Object.keys(_)) {
          const _ = _[_],
            _ = {
              handle: _.handle,
              type: _.type,
              loc_token: _.loc_token,
              heading: _.heading,
              _: _._ || void 0,
              exclude_from_search: Boolean(_.exclude_from_search),
              search_alias: _.search_alias,
            },
            {
              must: _,
              any: _,
              mustnot: _,
              replaces_tags: _,
              content_descriptors: _,
            } = _;
          _ &&
            (Array.isArray(_)
              ? (_.must = _.map((_) => ({
                  _: Number(_),
                })))
              : (_.must = [
                  {
                    _: Number(_),
                  },
                ])),
            _ &&
              (Array.isArray(_)
                ? (_.any = _.map((_) => ({
                    _: Number(_),
                  })))
                : (_.any = [
                    {
                      _: Number(_),
                    },
                  ])),
            _ &&
              (Array.isArray(_)
                ? (_.mustnot = _.map((_) => ({
                    _: Number(_),
                  })))
                : (_.mustnot = [
                    {
                      _: Number(_),
                    },
                  ])),
            _ &&
              (Array.isArray(_)
                ? (_.replaces_tags = _.map((_) => ({
                    _: Number(_),
                  })))
                : (_.replaces_tags = [
                    {
                      _: Number(_),
                    },
                  ])),
            _ &&
              "string" == typeof _ &&
              (_.content_descriptors = _.split(",").map((_) => parseInt(_))),
            _.push(_);
        }
        return _;
      }
      function _() {
        const [_, _] = (0, _.useState)(null);
        return (
          (0, _.useEffect)(() => {
            _().then((_) => {
              _(_.rgCategories);
            });
          }, []),
          _
        );
      }
      async function _(_) {
        const _ = {};
        for (const _ of _)
          (_[_.handle] = {
            handle: _.handle,
            type: _.type,
            loc_token: _.loc_token,
            must: _.must?.map((_) => _._) || void 0,
            any: _.any?.map((_) => _._) || void 0,
            mustnot: _.mustnot?.map((_) => _._) || void 0,
            replaces_tags: _.replaces_tags?.map((_) => _._) || void 0,
            heading: _.heading || void 0,
            _: _._,
            exclude_from_search: _.exclude_from_search,
            search_alias: _.search_alias,
            content_descriptors: _.content_descriptors?.length
              ? _.content_descriptors.join(",")
              : void 0,
          }),
            1 === _[_.handle].must?.length &&
              (_[_.handle].must = _[_.handle].must[0]),
            1 === _[_.handle].mustnot?.length &&
              (_[_.handle].mustnot = _[_.handle].mustnot[0]),
            1 === _[_.handle].replaces_tags?.length &&
              (_[_.handle].replaces_tags = _[_.handle].replaces_tags[0]);
        const _ =
            _._.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
          _ = new FormData();
        _.append("sessionid", _._.SESSIONID),
          _.append("origin", self.origin),
          _.append("json", JSON.stringify(_));
        let _ = null;
        try {
          const _ = await _().post(_, _, {
            withCredentials: !0,
          });
          if (200 === _.status && 1 === _.data?.success)
            return _.Get().ClearDirty(), null;
          _ = (0, _._)(_);
        } catch (_) {
          _ = (0, _._)(_);
        }
        return console.error("SaveCategoriesKV failed: " + _.strErrorMsg, _), _;
      }
      async function _() {
        const _ =
            _._.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
          _ = {
            origin: self.origin,
            sessionid: _._.SESSIONID,
          };
        try {
          const _ = await _().get(_, {
            params: _,
            withCredentials: !0,
          });
          if (200 !== _.status || 1 !== _.data?.success) return (0, _._)(_);
        } catch (_) {
          return (0, _._)(_);
        }
        return null;
      }
      class _ {
        constructor() {
          (0, _._)(this),
            "dev" === _._.WEB_UNIVERSE && (window.g_StoreTagStore = this);
        }
        m_rgTags;
        m_rgCategories;
        m_mapStoreTags;
        m_mapStoreCategories;
        m_promise;
        m_bDirty = !1;
        static s_singleton;
        BIsLoaded() {
          return Boolean(this.m_rgTags) && Boolean(this.m_rgCategories);
        }
        BIsDirty() {
          return this.m_bDirty;
        }
        ClearDirty() {
          this.m_bDirty = !1;
        }
        SetDirty() {
          this.m_bDirty = !0;
        }
        GetTags() {
          return this.m_rgTags;
        }
        GetCategories() {
          return this.m_rgCategories;
        }
        GetStoreTagMap() {
          return this.m_mapStoreTags;
        }
        GetStoreCategoryMap() {
          return this.m_mapStoreCategories;
        }
        async HintLoad() {
          return (
            this.m_promise || (this.m_promise = this.Load()), this.m_promise
          );
        }
        async Load() {
          const _ =
              _._.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetstoretagsandcategories",
            _ = {
              origin: self.origin,
              sessionid: _._.SESSIONID,
              _: _._.LANGUAGE,
            };
          let _ = null;
          try {
            const _ = await _().get(_, {
              params: _,
            });
            if (200 === _.status && 1 === _.data?.success)
              return (
                (this.m_rgTags = _.data.tags),
                (this.m_rgCategories = _.data.categories),
                (this.m_mapStoreTags = new Map()),
                this.m_rgTags.forEach((_) =>
                  this.m_mapStoreTags.set(_.tagid, _),
                ),
                (this.m_mapStoreCategories = new Map()),
                this.m_rgCategories.forEach((_) =>
                  this.m_mapStoreCategories.set(_.categoryid, _),
                ),
                void (
                  "dev" === _._.WEB_UNIVERSE &&
                  console.log(
                    "tags " +
                      this.m_rgTags.length +
                      ", categories " +
                      this.m_rgCategories.length,
                  )
                )
              );
            (this.m_promise = null), (_ = (0, _._)(_));
          } catch (_) {
            (this.m_promise = null), (_ = (0, _._)(_));
          }
          console.error(
            "CStoreTagsAndCategoriesStore.Load failed: " + _.strErrorMsg,
            _,
          );
        }
        static Get() {
          return _.s_singleton || (_.s_singleton = new _()), _.s_singleton;
        }
      }
      function _() {
        return _.Get().BIsDirty();
      }
      function _() {
        const [_, _] = _.useState(_.Get().GetTags()),
          [__webpack_require__, _] = _.useState(_.Get().GetCategories());
        return (
          _.useEffect(() => {
            (void 0 !== _ && void 0 !== __webpack_require__) ||
              _.Get()
                .HintLoad()
                .then(() => {
                  _(_.Get().GetTags()), _(_.Get().GetCategories());
                });
          }, [__webpack_require__, _]),
          {
            rgTags: _,
            rgCategories: __webpack_require__,
          }
        );
      }
      function _() {
        const [_, _] = _.useState(_.Get().GetStoreTagMap()),
          [__webpack_require__, _] = _.useState(_.Get().GetStoreCategoryMap());
        return (
          _.useEffect(() => {
            (void 0 !== _ && void 0 !== __webpack_require__) ||
              _.Get()
                .HintLoad()
                .then(() => {
                  _(_.Get().GetStoreTagMap()), _(_.Get().GetStoreCategoryMap());
                });
          }, [__webpack_require__, _]),
          {
            mapStoreTags: _,
            mapStoreCategories: __webpack_require__,
          }
        );
      }
      (0, _._)([_._], _.prototype, "m_bDirty", void 0),
        (0, _._)([_._], _.prototype, "SetDirty", null);
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
        _ = __webpack_require__("chunkid");
      const _ = 120,
        _ = 10;
      class _ {
        m_appAndPackagesSummuries = new _._(_);
        m_mapContentHubSummary = new Map();
        m_mapContentHubToAppCount = new Map();
        m_mapContentHubSummaryPromises = new Map();
        m_mapContentHubSummaryChange = new Map();
        m_mapContentHubTopAppSaleSummaryChange = new Map();
        m_mapContentHubTopAppSaleSummary = new Map();
        m_rgSummaries = null;
        m_summaryAnalysisChange = new _._();
        m_loadSummaryCache;
        GetSummaryAnalysis() {
          return this.m_rgSummaries;
        }
        GetSummaryAnalysisChange() {
          return this.m_summaryAnalysisChange;
        }
        GetKey(_) {
          return _.type + "_" + _.handle;
        }
        GetContentHubTopAppSaleSummaryChangeCallback(_) {
          const _ = this.GetKey(_);
          return (
            this.m_mapContentHubTopAppSaleSummaryChange.has(_) ||
              this.m_mapContentHubTopAppSaleSummaryChange.set(_, new _._()),
            this.m_mapContentHubTopAppSaleSummaryChange.get(_)
          );
        }
        GetContentHubSaleSummary(_) {
          const _ = this.GetKey(_);
          return this.m_mapContentHubSummary.get(_);
        }
        GetContentHubSummaryChangeCallback(_) {
          const _ = this.GetKey(_);
          return (
            this.m_mapContentHubSummaryChange.has(_) ||
              this.m_mapContentHubSummaryChange.set(_, new _._()),
            this.m_mapContentHubSummaryChange.get(_)
          );
        }
        GetTopAppSummary(_) {
          const _ = this.GetKey(_);
          return this.m_mapContentHubTopAppSaleSummary.get(_);
        }
        GetAppSummaryObject() {
          return this.m_appAndPackagesSummuries;
        }
        async LoadContentHubSaleSummary(_, _) {
          if (!_) return null;
          const _ = this.GetKey(_);
          return (
            this.m_mapContentHubSummaryPromises.has(_) ||
              this.m_mapContentHubSummaryPromises.set(
                _,
                this.InternalLoadContentHubSaleSummary(_, _),
              ),
            this.m_mapContentHubSummaryPromises.get(_)
          );
        }
        async InternalLoadContentHubSaleSummary(_, _) {
          const _ = this.GetKey(_);
          await this.m_appAndPackagesSummuries.LoadApps(_);
          const _ = {
              gross_sales_usd: 0,
              gross_units_sold: 0,
              net_sales_usd: 0,
              net_units_sold: 0,
            },
            _ = new Array();
          _.forEach((_) => {
            const _ = this.m_appAndPackagesSummuries.GetAppSaleSummary(_);
            _ &&
              ((_.gross_sales_usd += _.gross_sales_usd),
              (_.gross_units_sold += _.gross_units_sold),
              (_.net_sales_usd += _.net_sales_usd),
              (_.net_units_sold += _.net_units_sold)),
              _.push(_);
          }),
            _.sort((_, _) => _.gross_sales_usd - _.gross_sales_usd);
          const _ = {
            gross_sales_usd: 0,
            gross_units_sold: 0,
            net_sales_usd: 0,
            net_units_sold: 0,
          };
          return (
            _.slice(0, _).forEach((_) => {
              (_.gross_sales_usd += _.gross_sales_usd),
                (_.gross_units_sold += _.gross_units_sold),
                (_.net_sales_usd += _.net_sales_usd),
                (_.net_units_sold += _.net_units_sold);
            }),
            this.m_mapContentHubTopAppSaleSummary.set(_, _),
            this.m_mapContentHubSummary.set(_, _),
            this.m_mapContentHubToAppCount.set(_, _.length),
            this.GetContentHubTopAppSaleSummaryChangeCallback(_).Dispatch(_),
            this.GetContentHubSummaryChangeCallback(_).Dispatch(_),
            (this.m_rgSummaries = [
              ...(this.m_rgSummaries ?? []),
              this.BuildAnalysis(_),
            ]),
            this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
            this.SaveToCacheSaleSummary(_, _, _, _.slice(0, _), _.length),
            _
          );
        }
        async LoadCachedSaleSummaries() {
          return (
            this.m_loadSummaryCache ||
              (this.m_loadSummaryCache =
                this.InternalLoadCachedSaleSummaries()),
            this.m_loadSummaryCache
          );
        }
        async InternalLoadCachedSaleSummaries() {
          const _ = {
              rtStartTime: this.m_appAndPackagesSummuries.GetRTStartTime(),
              rtEndTime: this.m_appAndPackagesSummuries.GetRTEndTime(),
              sessionid: _._.SESSIONID,
            },
            _ = `${_._.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
            _ = await _().get(_, {
              params: _,
            });
          if (200 == _.status && _.data?.cache?.length > 0) {
            const _ = new Array();
            _.data.cache.forEach((_) => {
              const _ = JSON.parse(_),
                _ = {
                  handle: _.handle,
                  type: _.type,
                },
                _ = this.GetKey(_);
              this.m_mapContentHubTopAppSaleSummary.set(_, _.topAppSummary),
                this.m_mapContentHubSummary.set(_, _.hubSummary),
                this.m_mapContentHubToAppCount.set(_, _.appCount),
                _.topApps.forEach((_) =>
                  this.m_appAndPackagesSummuries.SetAppSaleSummary(_),
                ),
                this.m_mapContentHubSummaryChange.has(_) &&
                  this.m_mapContentHubSummaryChange
                    .get(_)
                    .Dispatch(_.hubSummary),
                this.m_mapContentHubTopAppSaleSummaryChange.has(_) &&
                  this.m_mapContentHubTopAppSaleSummaryChange
                    .get(_)
                    .Dispatch(_.topAppSummary),
                _.push(this.BuildAnalysis(_));
            }),
              (this.m_rgSummaries = _),
              this.m_summaryAnalysisChange.Dispatch(_);
          }
          return null;
        }
        BuildAnalysis(_) {
          const _ = this.GetKey(_),
            _ = this.m_mapContentHubSummary.get(_),
            _ = this.m_mapContentHubTopAppSaleSummary.get(_),
            _ = this.m_mapContentHubToAppCount.get(_);
          return {
            handle: _.handle,
            total_games: _,
            hub_gross_units_sold: _.gross_units_sold,
            hub_gross_sales_usd: Math.floor(_.gross_sales_usd / 100),
            hub_units_per_day: Math.floor(_.gross_units_sold / _),
            hub_sales_usd_per_day: Math.floor(_.gross_sales_usd / (100 * _)),
            top_apps_percent:
              _.gross_sales_usd > 0
                ? ((_.gross_sales_usd / _.gross_sales_usd) * 100).toFixed(2)
                : "NA",
          };
        }
        async SaveToCacheSaleSummary(_, _, _, _, _) {
          if ("category_editor" === _.type) return;
          const _ = {
              type: _.type,
              handle: _.handle,
              topAppSummary: _,
              hubSummary: _,
              topApps: _,
              appCount: _,
            },
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append(
              "rtStartTime",
              "" + this.m_appAndPackagesSummuries.GetRTStartTime(),
            ),
            _.append(
              "rtEndTime",
              "" + this.m_appAndPackagesSummuries.GetRTEndTime(),
            ),
            _.append("bClear", "false"),
            _.append("key", this.GetKey(_)),
            _.append("rgStats", JSON.stringify(_));
          const _ = `${_._.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
            _ = await _().post(_, _, {
              withCredentials: !0,
            });
          200 != _.status &&
            console.error("SaveToCacheSaleSummary failed to save " + _._, _);
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_ThemeEventStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
      }
      function _(_) {
        const {
          data: _,
          isLoading: __webpack_require__,
          isError: _,
        } = (0, _._)({
          queryKey: ["contenthubsummary", _.type, _.handle],
          queryFn: async () => {
            const _ = {
                contenthubcategorytype: _.type,
                handle: _.handle,
                sessionid: _._.SESSIONID,
              },
              _ = `${_._.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
              _ = await _().get(_, {
                params: _,
              });
            return 200 == _.status && _.data?.top_apps?.length > 0
              ? _.data
              : null;
          },
        });
        return {
          rgTopApps: __webpack_require__ || _ || !_ ? null : _?.top_apps,
          nTotalGames: __webpack_require__ || _ || !_ ? null : _?.total_games,
          isError: _,
        };
      }
      function _(_, _, _) {
        return {
          musthaveall: (_ || [])
            .filter(Boolean)
            .map((_) => _._)
            .sort()
            .join(","),
          musthaveany: (_ || [])
            .filter(Boolean)
            .map((_) => _._)
            .sort()
            .join(","),
          mustnothaveany: (_ || [])
            .filter(Boolean)
            .map((_) => _._)
            .sort()
            .join(","),
        };
      }
      (0, _._)([_._], _.prototype, "LoadCachedSaleSummaries", null);
      const _ = {
        total_games: 0,
        all_appid: [],
        top_games: [],
      };
      function _(_, _, _) {
        const {
            musthaveall: _,
            musthaveany: _,
            mustnothaveany: _,
          } = _(_, _, _),
          {
            data: _,
            isLoading: _,
            isError: _,
          } = (0, _._)({
            queryKey: ["useContentHubCategoryEditorFullAppList", _, _, _],
            queryFn: async () => {
              const _ = {
                  musthaveall: _,
                  musthaveany: _,
                  mustnothaveany: _,
                  sessionid: _._.SESSIONID,
                },
                _ = `${_._.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                _ = await _().get(_, {
                  params: _,
                });
              return 200 == _.status && _.data?.top_games?.length > 0
                ? _.data
                : null;
            },
            enabled: 0 != _.length || 0 != _.length || 0 != _.length,
          });
        return 0 == _.length && 0 == _.length && 0 == _.length ? _ : _ || null;
      }
      function _(_, _, _) {
        const _ = _(_, _, _),
          _ = (0, _.useMemo)(() => {
            const {
              musthaveall: _,
              musthaveany: _,
              mustnothaveany: _,
            } = _(_, _, _);
            return {
              type: "category_editor",
              handle: _ + "_" + _ + "_" + _,
            };
          }, [_, _, _]),
          [_, _] = (0, _.useState)(_.Get().GetContentHubSaleSummary(_));
        return (
          (0, _.useEffect)(() => {
            _?.all_appid?.length &&
              !_ &&
              _.Get().LoadContentHubSaleSummary(_, _.all_appid);
          }, [_, _, _]),
          (0, _._)(_.Get().GetContentHubSummaryChangeCallback(_), _),
          _
        );
      }
      function _(_, _, _) {
        const _ = (0, _.useMemo)(() => {
            const {
              musthaveall: _,
              musthaveany: _,
              mustnothaveany: _,
            } = _(_, _, _);
            return {
              type: "category_editor",
              handle: _ + "_" + _ + "_" + _,
            };
          }, [_, _, _]),
          [_, _] = (0, _.useState)(_.Get().GetTopAppSummary(_));
        return (
          (0, _._)(_.Get().GetContentHubTopAppSaleSummaryChangeCallback(_), _),
          _
        );
      }
      function _(_) {
        const _ = (function (_) {
            const {
              data: _,
              isLoading: __webpack_require__,
              isError: _,
            } = (0, _._)({
              queryKey: ["contenthubapplist", _.type, _.handle],
              queryFn: async () => {
                const _ = {
                    contenthubcategorytype: _.type,
                    handle: _.handle,
                    sessionid: _._.SESSIONID,
                  },
                  _ = `${_._.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                  _ = await _().get(_, {
                    params: _,
                  });
                return 200 == _.status && _.data?.apps?.length > 0
                  ? _.data
                  : null;
              },
            });
            return _?.apps || null;
          })(_),
          [__webpack_require__, _] = (0, _.useState)(
            _.Get().GetContentHubSaleSummary(_),
          );
        return (
          (0, _.useEffect)(() => {
            _?.length &&
              !__webpack_require__ &&
              _.Get().LoadContentHubSaleSummary(_, _);
          }, [_, _.type, _.handle, _, __webpack_require__]),
          (0, _._)(_.Get().GetContentHubSummaryChangeCallback(_), _),
          __webpack_require__
        );
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
          _.Get().GetAppSummaryObject().GetAppSaleSummary(_),
        );
        return (
          (0, _._)(
            _.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(_),
            __webpack_require__,
          ),
          _
        );
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
          _.Get().GetTopAppSummary(_),
        );
        return (
          (0, _._)(
            _.Get().GetContentHubTopAppSaleSummaryChangeCallback(_),
            __webpack_require__,
          ),
          _
        );
      }
      function _() {
        const [_, _] = (0, _.useState)(_.Get().GetSummaryAnalysis());
        return (
          (0, _.useEffect)(() => {
            _.Get().LoadCachedSaleSummaries();
          }, []),
          (0, _._)(_.Get().GetSummaryAnalysisChange(), _),
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
      const _ = "0px 0px 100% 0px",
        _ = 5e3,
        _ = 500;
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(!0),
          _ = (0, _._)(),
          _ = (0, _.useMemo)(
            () => (_?.length > 0 ? _.filter((_) => Boolean(_.type)) : null),
            [_],
          );
        return _ && 0 != _.length
          ? _.createElement(
              "div",
              null,
              _.createElement(
                "div",
                null,
                _.createElement(
                  "div",
                  {
                    className: _.DashTitleBar,
                  },
                  _.createElement("h1", null, "Theme Sale Planning Dashboard"),
                  _.createElement(
                    "div",
                    {
                      className: _.ButtonGroup,
                    },
                    Boolean(!_) &&
                      _.createElement(
                        _._,
                        {
                          onClick: () => __webpack_require__(!0),
                        },
                        "Load ",
                        _._,
                        " Days of Sale Summaries",
                      ),
                    _.createElement(_, null),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.DashDescription,
                  },
                  _.createElement(
                    "ul",
                    null,
                    _.createElement(
                      "li",
                      null,
                      "Themes are currently make from all of the categories that are defined on this",
                      " ",
                      _.createElement(
                        "a",
                        {
                          href: `${_._.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                        },
                        "categories editor page.",
                      ),
                    ),
                    _.createElement(
                      "li",
                      null,
                      "Hubs with more than ",
                      _,
                      " games are called out as 'too big'.",
                    ),
                    _.createElement(
                      "li",
                      null,
                      "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                    ),
                    _.createElement(
                      "li",
                      null,
                      "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                    ),
                  ),
                ),
              ),
              _.map((_, _) =>
                _.createElement(_, {
                  key: _,
                  category: _,
                  bSaleSummary: _,
                }),
              ),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { category: _, bSaleSummary: __webpack_require__ } = _;
        return _.createElement(
          _._,
          {
            placeholderHeight: 250,
            rootMargin: _,
          },
          _.createElement(_, {
            category: _,
            bSaleSummary: __webpack_require__,
          }),
        );
      }
      function _(_) {
        const { nTotalGames: _ } = _;
        let _, _;
        return (
          _ > _ && _ <= _
            ? ((_ = _.SizeColorSweet), (_ = "Good size!"))
            : _ > _
              ? ((_ = _.SizeColorBig), (_ = "Too big"))
              : ((_ = _.SizeColorSmall), (_ = "Too small")),
          _.createElement(
            "div",
            {
              className: (0, _._)(_.ThemeSize, _),
            },
            (0, _._)(_),
            " games ( ",
            _,
            ")",
          )
        );
      }
      function _(_) {
        const { category: _, bSaleSummary: __webpack_require__ } = _,
          { rgTopApps: _, nTotalGames: _ } = (0, _._)(_),
          _ = _ > 500 && _ <= _;
        return _.createElement(
          "div",
          {
            className: _.ThemeRow,
          },
          _.createElement(
            "div",
            {
              className: _.ThemeDefinitionCtn,
            },
            _.createElement(
              "a",
              {
                href: `${_._.STORE_BASE_URL}category/${_.handle}`,
                className: _.ThemeTitle,
              },
              _.loc_token ? (0, _._)(_.loc_token) : _.handle,
            ),
            _.createElement(_, {
              nTotalGames: _,
            }),
            _.createElement(
              "div",
              {
                className: _.SaleStats,
              },
              Boolean(__webpack_require__ && _) &&
                _.createElement(_, {
                  category: _,
                }),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _.TopGamesCtn,
            },
            _.createElement("div", null, "Top 10 Games non-F2P:"),
            _.createElement(
              "div",
              {
                className: _.GamesRow,
              },
              _?.slice(0, 10).map((_) =>
                _.createElement(_, {
                  key: _.appid,
                  info: _,
                  category: _,
                  bSaleSummary: __webpack_require__ && _,
                }),
              ),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _.ThemeDetails,
            },
            "handle: ",
            _.handle,
            _.createElement(_, {
              category: _,
            }),
          ),
        );
      }
      function _(_) {
        const { info: _, bSaleSummary: __webpack_require__ } = _,
          [_] = (0, _._)(_.appid, {
            include_assets: !0,
          });
        return _
          ? _.createElement(
              "div",
              {
                className: _.GameItem,
              },
              _.createElement(
                _._,
                {
                  item: {
                    type: "game",
                    _: _.appid,
                  },
                  hoverProps: {
                    direction: "overlay",
                    style: {
                      minWidth: "320px",
                      maxWidth: "320px",
                    },
                  },
                  className: _.GameImage,
                },
                _.createElement(
                  "a",
                  {
                    href: _.GetStorePageURL(),
                  },
                  _.createElement("img", {
                    src: _.GetAssets().GetHeaderURL(),
                  }),
                ),
              ),
              _.createElement("div", null, " Rank: ", _.long_term_sale_rank),
              Boolean(__webpack_require__) &&
                _.createElement(_, {
                  ..._,
                }),
            )
          : _.createElement(
              "div",
              null,
              "Loading appid: ",
              _.appid,
              " with rank: ",
              _.long_term_sale_rank,
            );
      }
      function _(_) {
        const { info: _, category: __webpack_require__ } = _,
          _ = (0, _._)(_.appid),
          _ = (0, _._)(__webpack_require__);
        return _.createElement(
          _.Fragment,
          null,
          Boolean(_) &&
            _.createElement(
              "div",
              null,
              " ",
              "$",
              Math.floor(_.gross_sales_usd / 100).toLocaleString(),
            ),
          Boolean(_ && _?.gross_sales_usd) &&
            _.createElement(
              "div",
              null,
              "( ",
              ((_.gross_sales_usd / _.gross_sales_usd) * 100).toFixed(2),
              "% of hub )",
            ),
        );
      }
      function _(_) {
        const { mapStoreTags: _, mapStoreCategories: __webpack_require__ } = (0,
          _._)(),
          { category: _ } = _;
        return _ && __webpack_require__ && (_.any || _.must || _.mustnot)
          ? _.createElement(
              "div",
              {
                className: _.ThemeTags,
              },
              Boolean(_.must) &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "span",
                    {
                      className: _.TagsMustTitle,
                    },
                    "Must:",
                  ),
                  " ",
                  _.must?.map((_) =>
                    _.createElement(_, {
                      key: _.type + "_" + _._ + "_" + _.handle,
                      type: _.type,
                      _: _._,
                    }),
                  ),
                ),
              Boolean(_.any) &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "span",
                    {
                      className: _.TagsOrTitle,
                    },
                    "Any:",
                  ),
                  " ",
                  _.any?.map((_) =>
                    _.createElement(_, {
                      key: _.type + "_" + _._ + "_" + _.handle,
                      type: _.type,
                      _: _._,
                    }),
                  ),
                ),
              Boolean(_.mustnot) &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "span",
                    {
                      className: _.TagsNotTitle,
                    },
                    "Must Not:",
                  ),
                  " ",
                  _.mustnot?.map((_) =>
                    _.createElement(_, {
                      key: _.type + "_" + _._ + "_" + _.handle,
                      type: _.type,
                      _: _._,
                    }),
                  ),
                ),
            )
          : null;
      }
      function _(_) {
        const { mapStoreTags: _, mapStoreCategories: __webpack_require__ } = (0,
          _._)(),
          { type: _, _: _ } = _;
        return "tagids" == _
          ? _.createElement(
              "span",
              null,
              _.has(_) ? _.get(_).name : "tagid: " + _,
              ", ",
            )
          : _.createElement(
              "span",
              null,
              __webpack_require__.has(_)
                ? __webpack_require__.get(_).name
                : "category id: " + _,
              ", ",
            );
      }
      function _(_) {
        const { saleSummary: _, topAppSummary: __webpack_require__ } = _;
        return _
          ? _.createElement(
              "div",
              {
                className: _.ThemeRevenueCtn,
              },
              _.createElement(
                "table",
                null,
                _.createElement(
                  "tbody",
                  null,
                  _.createElement(
                    "tr",
                    null,
                    _.createElement(
                      "td",
                      null,
                      "Total: ",
                      _.createElement("br", null),
                      "$",
                      Math.floor(_.gross_sales_usd / 100).toLocaleString(),
                    ),
                    _.createElement(
                      "td",
                      null,
                      "Per Day: ",
                      _.createElement("br", null),
                      "$",
                      Math.floor(
                        _.gross_sales_usd / (100 * _._),
                      ).toLocaleString(),
                    ),
                    _.createElement(
                      "td",
                      null,
                      "Total Units: ",
                      _.createElement("br", null),
                      _.gross_units_sold.toLocaleString(),
                    ),
                    _.createElement(
                      "td",
                      null,
                      "Units Per Day: ",
                      _.createElement("br", null),
                      Math.floor(_.gross_units_sold / _._).toLocaleString(),
                    ),
                    Boolean(_.gross_sales_usd > 0) &&
                      _.createElement(
                        _.Fragment,
                        null,
                        _.createElement(
                          "td",
                          null,
                          "Top ",
                          _._,
                          " Apps: ",
                          _.createElement("br", null),
                          _.createElement(
                            "span",
                            {
                              className:
                                (__webpack_require__.gross_sales_usd /
                                  _.gross_sales_usd) *
                                  100 >
                                90
                                  ? _.SizeColorBig
                                  : _.SizeColorSweet,
                            },
                            (
                              (__webpack_require__.gross_sales_usd /
                                _.gross_sales_usd) *
                              100
                            ).toFixed(2),
                            "%",
                          ),
                          " of revenue",
                        ),
                      ),
                  ),
                ),
              ),
            )
          : _.createElement(_._, {
              position: "center",
              string: "Loading Sale Info",
            });
      }
      function _(_) {
        const { category: _ } = _,
          _ = (0, _._)(_),
          _ = (0, _._)(_);
        return _.createElement(_, {
          saleSummary: _,
          topAppSummary: _,
        });
      }
      function _(_) {
        const _ = (0, _._)();
        return _.createElement(
          "a",
          {
            href: `data:application/octet-stream,${encodeURIComponent(
              _().unparse({
                data: _,
                fields: Object.keys(_ ? _[0] : {}),
              }),
            )}`,
            download: "theme_sale_stats.csv",
          },
          "Export CSV",
        );
      }
    },
  },
]);

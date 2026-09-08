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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
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
            __webpack_require__.append("sessionid", (0, _._)()),
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      async function _() {
        const _ =
            _._.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
          _ = {
            origin: self.origin,
            sessionid: (0, _._)(),
          };
        let _ = null;
        try {
          const _ = await _().get(_, {
            params: _,
            withCredentials: !0,
          });
          if (200 === _.status && _.data?.success === _._) {
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
              description_loc_token: _.description_loc_token,
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
            description_loc_token: _.description_loc_token,
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
        _.append("sessionid", (0, _._)()),
          _.append("origin", self.origin),
          _.append("json", JSON.stringify(_));
        let _ = null;
        try {
          const _ = await _().post(_, _, {
            withCredentials: !0,
          });
          if (200 === _.status && _.data?.success === _._)
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
            sessionid: (0, _._)(),
          };
        try {
          const _ = await _().get(_, {
            params: _,
            withCredentials: !0,
          });
          if (200 !== _.status || _.data?.success !== _._) return (0, _._)(_);
        } catch (_) {
          return (0, _._)(_);
        }
        return null;
      }
      class _ {
        constructor() {
          (0, _._)(this);
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
              sessionid: (0, _._)(),
              _: _._.LANGUAGE,
            };
          let _ = null;
          try {
            const _ = await _().get(_, {
              params: _,
            });
            if (200 === _.status && _.data?.success === _._)
              return (
                (this.m_rgTags = _.data.tags),
                (this.m_rgCategories = _.data.categories),
                (this.m_mapStoreTags = new Map()),
                this.m_rgTags.forEach((_) =>
                  this.m_mapStoreTags.set(_.tagid, _),
                ),
                (this.m_mapStoreCategories = new Map()),
                void this.m_rgCategories.forEach((_) =>
                  this.m_mapStoreCategories.set(_.categoryid, _),
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
          [_, _] = _.useState(_.Get().GetCategories());
        return (
          _.useEffect(() => {
            (void 0 !== _ && void 0 !== _) ||
              _.Get()
                .HintLoad()
                .then(() => {
                  _(_.Get().GetTags()), _(_.Get().GetCategories());
                });
          }, [_, _]),
          {
            rgTags: _,
            rgCategories: _,
          }
        );
      }
      function _() {
        const [_, _] = _.useState(_.Get().GetStoreTagMap()),
          [_, _] = _.useState(_.Get().GetStoreCategoryMap());
        return (
          _.useEffect(() => {
            (void 0 !== _ && void 0 !== _) ||
              _.Get()
                .HintLoad()
                .then(() => {
                  _(_.Get().GetStoreTagMap()), _(_.Get().GetStoreCategoryMap());
                });
          }, [_, _]),
          {
            mapStoreTags: _,
            mapStoreCategories: _,
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
              sessionid: (0, _._)(),
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
          _.append("sessionid", (0, _._)()),
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
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
      }
      function _(_) {
        const {
          data: _,
          isLoading: _,
          isError: _,
        } = (0, _._)({
          queryKey: ["contenthubsummary", _.type, _.handle],
          queryFn: async () => {
            const _ = {
                contenthubcategorytype: _.type,
                handle: _.handle,
                sessionid: (0, _._)(),
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
          rgTopApps: _ || _ || !_ ? null : _?.top_apps,
          nTotalGames: _ || _ || !_ ? null : _?.total_games,
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
                  sessionid: (0, _._)(),
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
              isLoading: _,
              isError: _,
            } = (0, _._)({
              queryKey: ["contenthubapplist", _.type, _.handle],
              queryFn: async () => {
                const _ = {
                    contenthubcategorytype: _.type,
                    handle: _.handle,
                    sessionid: (0, _._)(),
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
          [_, _] = (0, _.useState)(_.Get().GetContentHubSaleSummary(_));
        return (
          (0, _.useEffect)(() => {
            _?.length && !_ && _.Get().LoadContentHubSaleSummary(_, _);
          }, [_, _.type, _.handle, _, _]),
          (0, _._)(_.Get().GetContentHubSummaryChangeCallback(_), _),
          _
        );
      }
      function _(_) {
        const [_, _] = (0, _.useState)(
          _.Get().GetAppSummaryObject().GetAppSaleSummary(_),
        );
        return (
          (0, _._)(
            _.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(_),
            _,
          ),
          _
        );
      }
      function _(_) {
        const [_, _] = (0, _.useState)(_.Get().GetTopAppSummary(_));
        return (
          (0, _._)(_.Get().GetContentHubTopAppSaleSummaryChangeCallback(_), _),
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
        _ = __webpack_require__("chunkid");
      const _ = "0px 0px 100% 0px",
        _ = 5e3,
        _ = 500;
      function _(_) {
        const [_, _] = (0, _.useState)(!0),
          _ = (0, _._)(),
          _ = (0, _.useMemo)(
            () => (_?.length > 0 ? _.filter((_) => Boolean(_.type)) : null),
            [_],
          );
        return _ && 0 != _.length
          ? (0, _.jsxs)("div", {
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.DashTitleBar,
                      children: [
                        (0, _.jsx)("h1", {
                          children: "Theme Sale Planning Dashboard",
                        }),
                        (0, _.jsxs)("div", {
                          className: _.ButtonGroup,
                          children: [
                            Boolean(!_) &&
                              (0, _.jsxs)(_._, {
                                onClick: () => __webpack_require__(!0),
                                children: [
                                  "Load ",
                                  _._,
                                  " Days of Sale Summaries",
                                ],
                              }),
                            (0, _.jsx)(_, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _.DashDescription,
                      children: (0, _.jsxs)("ul", {
                        children: [
                          (0, _.jsxs)("li", {
                            children: [
                              "Themes are currently make from all of the categories that are defined on this",
                              " ",
                              (0, _.jsx)("a", {
                                href: `${_._.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                                children: "categories editor page.",
                              }),
                            ],
                          }),
                          (0, _.jsxs)("li", {
                            children: [
                              "Hubs with more than ",
                              _,
                              " games are called out as 'too big'.",
                            ],
                          }),
                          (0, _.jsx)("li", {
                            children:
                              "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                          }),
                          (0, _.jsx)("li", {
                            children:
                              "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      category: _,
                      bSaleSummary: _,
                    },
                    _,
                  ),
                ),
              ],
            })
          : (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { category: _, bSaleSummary: _ } = _;
        return (0, _.jsx)(_._, {
          placeholderHeight: 250,
          rootMargin: _,
          children: (0, _.jsx)(_, {
            category: _,
            bSaleSummary: _,
          }),
        });
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
          (0, _.jsxs)("div", {
            className: (0, _._)(_.ThemeSize, _),
            children: [(0, _._)(_), " games ( ", _, ")"],
          })
        );
      }
      function _(_) {
        const { category: _, bSaleSummary: _ } = _,
          { rgTopApps: _, nTotalGames: _ } = (0, _._)(_),
          _ = _ > 500 && _ <= _;
        return (0, _.jsxs)("div", {
          className: _.ThemeRow,
          children: [
            (0, _.jsxs)("div", {
              className: _.ThemeDefinitionCtn,
              children: [
                (0, _.jsx)("a", {
                  href: `${_._.STORE_BASE_URL}category/${_.handle}`,
                  className: _.ThemeTitle,
                  children: _.loc_token ? (0, _._)(_.loc_token) : _.handle,
                }),
                (0, _.jsx)(_, {
                  nTotalGames: _,
                }),
                (0, _.jsx)("div", {
                  className: _.SaleStats,
                  children:
                    Boolean(_ && _) &&
                    (0, _.jsx)(_, {
                      category: _,
                    }),
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: _.TopGamesCtn,
              children: [
                (0, _.jsx)("div", {
                  children: "Top 10 Games non-F2P:",
                }),
                (0, _.jsx)("div", {
                  className: _.GamesRow,
                  children: _?.slice(0, 10).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        info: _,
                        category: _,
                        bSaleSummary: _ && _,
                      },
                      _.appid,
                    ),
                  ),
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: _.ThemeDetails,
              children: [
                "handle: ",
                _.handle,
                (0, _.jsx)(_, {
                  category: _,
                }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const { info: _, bSaleSummary: _ } = _,
          _ = (0, _._)(_.appid),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _ && _
          ? (0, _.jsxs)("div", {
              className: _.GameItem,
              children: [
                (0, _.jsx)(_._, {
                  _: _,
                  hoverProps: {
                    direction: "overlay",
                    style: {
                      minWidth: "320px",
                      maxWidth: "320px",
                    },
                  },
                  className: _.GameImage,
                  children: (0, _.jsx)("a", {
                    href: (0, _._)(_),
                    children: (0, _.jsx)("img", {
                      src: (0, _._)(_, "header"),
                      alt: _.name,
                    }),
                  }),
                }),
                (0, _.jsxs)("div", {
                  children: [" Rank: ", _.long_term_sale_rank],
                }),
                Boolean(_) &&
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              ],
            })
          : (0, _.jsxs)("div", {
              children: [
                "Loading appid: ",
                _.appid,
                " with rank: ",
                _.long_term_sale_rank,
              ],
            });
      }
      function _(_) {
        const { info: _, category: _ } = _,
          _ = (0, _._)(_.appid),
          _ = (0, _._)(_);
        return (0, _.jsxs)(_.Fragment, {
          children: [
            Boolean(_) &&
              (0, _.jsxs)("div", {
                children: [
                  " ",
                  "$",
                  (0, _._)(Math.floor(_.gross_sales_usd / 100)),
                ],
              }),
            Boolean(_ && _?.gross_sales_usd) &&
              (0, _.jsxs)("div", {
                children: [
                  "( ",
                  ((_.gross_sales_usd / _.gross_sales_usd) * 100).toFixed(2),
                  "% of hub )",
                ],
              }),
          ],
        });
      }
      function _(_) {
        const { mapStoreTags: _, mapStoreCategories: _ } = (0, _._)(),
          { category: _ } = _;
        return _ && _ && (_.any || _.must || _.mustnot)
          ? (0, _.jsxs)("div", {
              className: _.ThemeTags,
              children: [
                Boolean(_.must) &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        className: _.TagsMustTitle,
                        children: "Must:",
                      }),
                      " ",
                      _.must?.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            type: _.type,
                            _: _._,
                          },
                          _.type + "_" + _._ + "_" + _.handle,
                        ),
                      ),
                    ],
                  }),
                Boolean(_.any) &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        className: _.TagsOrTitle,
                        children: "Any:",
                      }),
                      " ",
                      _.any?.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            type: _.type,
                            _: _._,
                          },
                          _.type + "_" + _._ + "_" + _.handle,
                        ),
                      ),
                    ],
                  }),
                Boolean(_.mustnot) &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        className: _.TagsNotTitle,
                        children: "Must Not:",
                      }),
                      " ",
                      _.mustnot?.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            type: _.type,
                            _: _._,
                          },
                          _.type + "_" + _._ + "_" + _.handle,
                        ),
                      ),
                    ],
                  }),
              ],
            })
          : null;
      }
      function _(_) {
        const { mapStoreTags: _, mapStoreCategories: _ } = (0, _._)(),
          { type: _, _: _ } = _;
        return "tagids" == _
          ? (0, _.jsxs)("span", {
              children: [_.has(_) ? _.get(_).name : "tagid: " + _, ", "],
            })
          : (0, _.jsxs)("span", {
              children: [
                __webpack_require__.has(_)
                  ? __webpack_require__.get(_).name
                  : "category id: " + _,
                ", ",
              ],
            });
      }
      function _(_) {
        const { saleSummary: _, topAppSummary: _ } = _;
        return _
          ? (0, _.jsx)("div", {
              className: _.ThemeRevenueCtn,
              children: (0, _.jsx)("table", {
                children: (0, _.jsx)("tbody", {
                  children: (0, _.jsxs)("tr", {
                    children: [
                      (0, _.jsxs)("td", {
                        children: [
                          "Total: ",
                          (0, _.jsx)("br", {}),
                          "$",
                          (0, _._)(Math.floor(_.gross_sales_usd / 100)),
                        ],
                      }),
                      (0, _.jsxs)("td", {
                        children: [
                          "Per Day: ",
                          (0, _.jsx)("br", {}),
                          "$",
                          (0, _._)(Math.floor(_.gross_sales_usd / (100 * _._))),
                        ],
                      }),
                      (0, _.jsxs)("td", {
                        children: [
                          "Total Units: ",
                          (0, _.jsx)("br", {}),
                          (0, _._)(_.gross_units_sold),
                        ],
                      }),
                      (0, _.jsxs)("td", {
                        children: [
                          "Units Per Day: ",
                          (0, _.jsx)("br", {}),
                          (0, _._)(Math.floor(_.gross_units_sold / _._)),
                        ],
                      }),
                      Boolean(_.gross_sales_usd > 0) &&
                        (0, _.jsx)(_.Fragment, {
                          children: (0, _.jsxs)("td", {
                            children: [
                              "Top ",
                              _._,
                              " Apps: ",
                              (0, _.jsx)("br", {}),
                              (0, _.jsxs)("span", {
                                className:
                                  (_.gross_sales_usd / _.gross_sales_usd) *
                                    100 >
                                  90
                                    ? _.SizeColorBig
                                    : _.SizeColorSweet,
                                children: [
                                  (
                                    (_.gross_sales_usd / _.gross_sales_usd) *
                                    100
                                  ).toFixed(2),
                                  "%",
                                ],
                              }),
                              " of revenue",
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            })
          : (0, _.jsx)(_._, {
              position: "center",
              string: "Loading Sale Info",
            });
      }
      function _(_) {
        const { category: _ } = _,
          _ = (0, _._)(_),
          _ = (0, _._)(_);
        return (0, _.jsx)(_, {
          saleSummary: _,
          topAppSummary: _,
        });
      }
      function _(_) {
        const _ = (0, _._)();
        return (0, _.jsx)("a", {
          href: `data:application/octet-stream,${encodeURIComponent(
            _().unparse({
              data: _,
              fields: Object.keys(_ ? _[0] : {}),
            }),
          )}`,
          download: "theme_sale_stats.csv",
          children: "Export CSV",
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
          _.useEffect(() => () => _.cancel("ReorderableList unmounting"), [_]);
        const _ = _.useCallback(
            (_) => {
              const _ = _.current[_]?.current;
              _
                ? ((_.style.left = _.clientX - _ + "px"),
                  (_.style.top = _.clientY - _ + "px"))
                : console.error("update grab element missing element");
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
                  _.current.firstElementChild.getBoundingClientRect().height &&
                _(),
              ((_, _) => {
                const _ = _.current[_]?.current;
                if (!_)
                  return void console.error(
                    "start element grab missing element at index " + _,
                  );
                _(!0), _(_), _(void 0), _(_);
                const _ =
                  _.clientX - __webpack_require__.getBoundingClientRect().left;
                _(_);
                const _ =
                  _.clientY - __webpack_require__.getBoundingClientRect().top;
                _(_),
                  (_.style.position = "fixed"),
                  (_.style.left = _.clientX - _ + "px"),
                  (_.style.top = _.clientY - _ + "px"),
                  (_.style.zIndex = "1");
              })(_, _),
              _.preventDefault());
          },
          _ = (_, _) => {
            const _ = _._(_ > _ ? _ - 1 : _, 0, _.length - 1);
            _ != _ && (_ ? _(_, _) : (0, _._)(_, _, _), _(_), _ && _(_));
          },
          _ = _.useCallback(
            (_) => {
              if (!_ || _.token.reason) return;
              const _ = _.clientY;
              let _;
              for (let _ = 0; _ < _.current.length; _++) {
                if (
                  _ <
                  (_.current[_].current.getBoundingClientRect().top +
                    2 * _.current[_].current.getBoundingClientRect().bottom) /
                    3
                ) {
                  _ = _;
                  break;
                }
              }
              _(_ ?? _.current.length), _(_);
            },
            [_, _, _],
          );
        (0, _._)(window, "mousemove", _ ? _ : void 0),
          (0, _._)(
            window,
            "mouseup",
            _
              ? (_) => {
                  _ && !_.token.reason && (_(), _(_, _));
                }
              : void 0,
          ),
          _.useEffect(() => {
            for (let _ = _.current.length; _ < _.length; _++)
              _.current.push(_.createRef()), _.current.push(_.createRef());
          }, [_.length]);
        const _ = (_) => {
            _(void 0);
            const _ = _?.trim(),
              _ = Number.parseInt(_);
            if (0 == _.length || isNaN(_)) return;
            const _ = _ - 1;
            _ != _ && _(_, _);
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
                          __webpack_require__(_, _),
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
                        onMouseDown: Boolean(_) ? void 0 : (_) => _(_, _),
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
                        onKeyDown: (_) =>
                          ((_, _) => {
                            "Enter" === _.key && (_(_), _.currentTarget.blur());
                          })(_, _),
                        onFocus: (_) => {
                          _(_), _(_.target.value);
                        },
                        onBlur: () => _(_),
                      }),
                      __webpack_require__(_, _),
                      Boolean(_ != _) &&
                        Boolean(_ || _) &&
                        (0, _.jsxs)("div", {
                          className: _().ButtonCtn,
                          children: [
                            Boolean(_) &&
                              (0, _.jsx)("div", {
                                className: _().RemoveIcon,
                                onClick: (_) => _(_, _),
                                children: (0, _.jsx)(_.ffu, {}),
                              }),
                            Boolean(_) &&
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
  },
]);

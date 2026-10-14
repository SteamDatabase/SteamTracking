(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23025],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            ContentHubRoutes: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (_) =>
            (0, _._)() ? (0, _._)("#Generel_Discard_Warning") : !0;
          return (0, _.jsx)(_._, {
            message: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = null;
        function _() {
          return _.includes(UserConfig.country_code);
        }
        const _ = [_._, _._, _._, _._, _._];
        function _(_) {
          let _ = [];
          switch (_) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              _.push(
                EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore,
              ),
                _.push(
                  EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
                );
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              _.push(
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
              );
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              _.push(
                EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
              );
              break;
          }
          return _;
        }
        let _ = new Map();
        _.set(_._, _._), _.set(_._, _._), _.set(_._, _._), _.set(_._, _._);
        function _(_) {
          let _ = [],
            _ = _.get(_);
          return _ && (_.push(_), _.push(..._(_))), _;
        }
        function _(_) {
          return useQuery({
            queryKey: [
              "examples_for_content_descriptor",
              _ === null ? null : _.valueOf(),
            ],
            queryFn: async () => {
              if (_ === null) return [];
              const _ = new URLSearchParams();
              return (
                _.append("filter", "examplesforcontentdescriptors"),
                _.append("ignore_preferences", "1"),
                _.append("category1", "992,994,998"),
                _.append("descids", _.valueOf().toString()),
                _.append("json", "1"),
                (
                  await axios({
                    url: `${Config.STORE_BASE_URL}search/results/?${_.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function _(_) {
          let _ = null;
          switch (_) {
            case _._:
              _ = "#ContentDescriptor_GeneralMatureContent";
              break;
            case _._:
              _ = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case _._:
              _ = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case _._:
              _ = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case _._:
              _ = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, _._)(_);
        }
        function _(_, _ = !1) {
          let _ = "";
          switch (_) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              _ += Localize(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore:
              _ += Localize(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              _ += Localize(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              _ += Localize(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent:
              _ += Localize(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            _ &&
              (_ ===
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent ||
                _ ===
                  EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent) &&
              (_ += " " + Localize("#ContentDescriptor_Affirm18YearsOld")),
            _
          );
        }
        function _() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function _() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function _(_) {
          return !UserConfig.logged_in ||
            !_ ||
            !_.content_descriptors_to_exclude
            ? _()
            : _.content_descriptors_to_exclude.map(
                (_) => _.content_descriptorid,
              );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = _.memo(function () {
          const [_, _] = _.useState(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1);
          _.useEffect(() => {
            (0, _._)().then((_) => {
              _(_.rgCategories), _(_.bHasUnpublishedChanges), _(!0);
            });
          }, []);
          const _ = _.useCallback((_) => {
            _(_), _(!0);
          }, []);
          return _
            ? (0, _.jsxs)("div", {
                className: _().AdminPageCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().PageTitle,
                    children: "Content Hub Categories",
                  }),
                  (0, _.jsx)("hr", {
                    className: _().TitleHR,
                  }),
                  (0, _.jsxs)("p", {
                    children: [
                      "This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale ",
                      (0, _.jsx)("a", {
                        href: `${_._.PARTNER_BASE_URL}promotion/planning/themes`,
                        children: "here.",
                      }),
                    ],
                  }),
                  (0, _.jsx)("a", {
                    href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                    target: "_blank",
                    children: "Content Hub Graphana Stats Page",
                  }),
                  (0, _.jsx)("div", {
                    className: _().PageSubTitle,
                    children: "Categories",
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().UnpublishedChangesNotice,
                      children:
                        "You have unpublished changes. Click Publish below to publish and make them available to users.",
                    }),
                  (0, _.jsx)(_, {
                    categories: _,
                    onUpdate: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ActionButtonCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: () =>
                          (0, _._)(
                            (0, _.jsx)(_, {
                              categories: _,
                              onSave: () => {
                                _(!1), _(!0);
                              },
                            }),
                            window,
                          ),
                        children: _
                          ? (0, _.jsx)(_.Fragment, {
                              children: "Save",
                            })
                          : (0, _.jsxs)(_.Fragment, {
                              children: [(0, _.jsx)(_.Jlk, {}), "Saved"],
                            }),
                      }),
                      (0, _.jsx)(_._, {
                        onClick: () =>
                          (0, _._)(
                            (0, _.jsx)(_, {
                              onPublish: () => _(!1),
                            }),
                            window,
                          ),
                        children: "Publish",
                      }),
                    ],
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                size: "medium",
                position: "center",
              });
        });
        function _(_) {
          const { categories: _, onUpdate: _ } = _,
            { rgTags: _ } = (0, _._)(),
            [_] = (0, _._)("edit");
          if (!_)
            return (0, _.jsx)("div", {
              children: "No categories defined.",
            });
          const _ = () => {
              _((_) => {
                let _ = 0;
                for (const _ of _) _._ && Number(_._) > _ && (_ = Number(_._));
                return [
                  ..._,
                  {
                    handle: "new_category_" + _.length,
                    _: ++_,
                  },
                ];
              });
            },
            _ = (_) => {
              _((_) => _.filter((_, _) => _ != _));
            },
            _ = (_) => {
              _((_) => _.map((_) => (_._ === _._ ? _ : _)));
            };
          return (0, _.jsxs)("div", {
            className: _().CategoriesList,
            children: [
              (0, _.jsx)(_._, {
                bDisabled: !0,
                items: _,
                onDelete: _,
                render: (_) =>
                  (0, _.jsx)(
                    _,
                    {
                      item: _,
                      rgTags: _,
                      fnSaveCategory: _,
                      bOpenEditor: _?.toLowerCase() == _.handle,
                    },
                    _._,
                  ),
              }),
              (0, _.jsx)(_._, {
                onClick: _,
                children: "Add Category",
              }),
            ],
          });
        }
        function _(_) {
          const { rgTags: _, replacesTags: _ } = _,
            _ = (0, _.useMemo)(
              () =>
                _?.map(
                  (_) =>
                    (_?.find((_) => _.tagid === _._)?.name || "Unknown tag") +
                    " (" +
                    String(_._) +
                    ")",
                ).join(", "),
              [_, _],
            );
          return _
            ? (0, _.jsx)("span", {
                children: "Replaces tags: " + _,
              })
            : (0, _.jsx)("span", {});
        }
        function _(_) {
          const { item: _, rgTags: _, fnSaveCategory: _, bOpenEditor: _ } = _,
            [_, _, _] = (0, _._)(_),
            _ = (_, _) => {
              _.preventDefault(), _.stopPropagation(), _();
            };
          return (0, _.jsx)("div", {
            className: _().CategoryCtn,
            children: (0, _.jsxs)("div", {
              className: _().Category,
              children: [
                (0, _.jsxs)("a", {
                  onClick: (_) => _(_, _),
                  children: [
                    (0, _.jsx)("b", {
                      children: _.loc_token ? (0, _._)(_.loc_token) : "",
                    }),
                    _.loc_token ? " (" + _.handle + ")" : _.handle,
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().CategoryType,
                  children:
                    _.type === "tagids"
                      ? "Tags"
                      : _.type === "category"
                        ? "Category"
                        : _.type === "contenthub"
                          ? "Hardcoded Filter"
                          : "Special",
                }),
                (0, _.jsx)("div", {
                  className: _().ExcludedFromSearch,
                  children:
                    _.exclude_from_search === !0 ? "Excluded from search" : "",
                }),
                (0, _.jsx)("div", {
                  className: _().ReplacesTags,
                  children: (0, _.jsx)(_, {
                    rgTags: _,
                    replacesTags: _.replaces_tags,
                  }),
                }),
                (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    category: _,
                    fnSaveCategory: _,
                    closeModal: _,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { fnSaveCategory: _, closeModal: _ } = _,
            [_, _] = _.useState(_.category),
            _ = _.useMemo(
              () => [
                {
                  data: "tagids",
                  label: "Tag Hub",
                },
                {
                  data: "category",
                  label: "Categories",
                },
                {
                  data: "contenthub",
                  label: "Hardcoded Filter Hub",
                },
              ],
              [],
            ),
            _ = _.useCallback(
              (_) =>
                _((_) => ({
                  ..._,
                  content_descriptors: _,
                })),
              [_],
            );
          return (0, _.jsxs)(_._, {
            title: `Edit Category (ID ${_._})`,
            bAllowFullSize: !0,
            onCancel: _,
            closeModal: _,
            children: [
              (0, _.jsx)(_._, {
                children: (0, _.jsxs)("div", {
                  className: _().CategoryEditor,
                  children: [
                    (0, _.jsx)(_._, {
                      label: "Handle",
                      tooltip:
                        "This forms the end of the URL. It must be unique",
                      value: _.handle,
                      onChange: (_) =>
                        _((_) => ({
                          ..._,
                          handle: _.target.value,
                        })),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().CategoryCtn,
                      children: [
                        (0, _.jsx)(_._, {
                          label: "Loc Token",
                          tooltip:
                            "Token only needed if we wish to expose this hub to customers",
                          value: _.loc_token,
                          onChange: (_) =>
                            _((_) => ({
                              ..._,
                              loc_token: _.target.value,
                            })),
                        }),
                        _.loc_token &&
                          (0, _.jsx)(_._, {
                            children: (0, _._)(_.loc_token),
                          }),
                        (0, _.jsx)(_._, {
                          label: "Description Loc Token",
                          tooltip:
                            "A localized token explaining this content hub to customers",
                          value: _.description_loc_token,
                          onChange: (_) =>
                            _((_) => ({
                              ..._,
                              description_loc_token: _.target.value,
                            })),
                        }),
                        _.description_loc_token &&
                          (0, _.jsx)(_._, {
                            children: (0, _._)(_.description_loc_token),
                          }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      label: "Use As A Heading ",
                      tooltip:
                        "Only used for establishing headings used on the main store drop-down menu",
                      checked: _.heading,
                      onChange: (_) =>
                        _((_) => ({
                          ..._,
                          heading: _,
                        })),
                    }),
                    (0, _.jsx)(_._, {
                      label: "Exclude from search ",
                      tooltip: "Do not show this category in store search",
                      checked: _.exclude_from_search,
                      onChange: (_) =>
                        _((_) => ({
                          ..._,
                          exclude_from_search: _,
                        })),
                    }),
                    (0, _.jsx)(_._, {
                      label: "Search aliases",
                      tooltip: "Comma separated search aliases",
                      value: _.search_alias,
                      onChange: (_) =>
                        _((_) => ({
                          ..._,
                          search_alias: _.target.value,
                        })),
                    }),
                    (0, _.jsx)(_._, {
                      label: "Type",
                      rgOptions: _,
                      selectedOption: _.type,
                      onChange: (_) =>
                        _((_) => ({
                          ..._,
                          type: _.data,
                        })),
                    }),
                    (0, _.jsx)(_, {
                      rgContentDescriptors: _.content_descriptors ?? [],
                      setContentDescriptors: _,
                    }),
                    (_.type === "tagids" ||
                      _.type === "category" ||
                      _.type == "contenthub") &&
                      (0, _.jsx)(_, {
                        category: _,
                        setCategory: _,
                      }),
                  ],
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  onCancel: _,
                  onOK: () => {
                    _(_), _();
                  },
                  strOKText: "Save",
                }),
              }),
            ],
          });
        }
        const _ = _.memo(function (_) {
          const { rgContentDescriptors: _, setContentDescriptors: _ } = _,
            _ = _.useMemo(() => [_._, _._, _._, _._], []);
          return (0, _.jsx)(_._, {
            label: "Content Descriptors",
            children: (0, _.jsx)(_._, {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              getOptionLabel: (_) => _(_),
            }),
          });
        });
        function _(_) {
          const { category: _, setCategory: _ } = _,
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(0);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (_.type == "tagids" || _.type == "category") &&
                (0, _.jsx)("div", {
                  className: _().CategoryCtn,
                  children: (0, _.jsxs)("div", {
                    className: _().Category,
                    children: [
                      (0, _.jsx)(_, {
                        category: _,
                        setCategory: _,
                        list: "must",
                        title: "Must have all of these tags",
                      }),
                      (0, _.jsx)(_, {
                        category: _,
                        setCategory: _,
                        list: "any",
                        title: "Must have one of these tags",
                      }),
                      (0, _.jsx)(_, {
                        category: _,
                        setCategory: _,
                        list: "mustnot",
                        title: "Must not have any of these tags",
                      }),
                    ],
                  }),
                }),
              (_.type == "tagids" ||
                _.type == "category" ||
                _.type == "contenthub") &&
                (0, _.jsxs)("div", {
                  className: _().CategoryCtn,
                  children: [
                    (0, _.jsx)(_, {
                      category: _,
                      setCategory: _,
                      list: "replaces_tags",
                      title:
                        "The following Tags should redirect to this category page",
                    }),
                    (0, _.jsx)("p", {
                      children:
                        'This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.',
                    }),
                  ],
                }),
              _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: () => _(_ + 1),
                        children: "Refresh Stats",
                      }),
                      (0, _.jsx)(_, {
                        category: _,
                      }),
                    ],
                  })
                : (0, _.jsx)(
                    _._,
                    {
                      checked: _,
                      onChange: (_) => _(_),
                      label: "Show Category Sale Stats",
                    },
                    "info" + _,
                  ),
            ],
          });
        }
        function _(_) {
          const { category: _ } = _,
            _ = (0, _._)(_.must, _.any, _.mustnot);
          if (!_)
            return (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
              size: "medium",
            });
          const _ = _.total_games > _._ && _.total_games <= _._;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                onClick: () => {
                  const _ = [];
                  _.push(["AppID", "Sale Rank"]),
                    _.top_games.forEach((_) => {
                      _.push(["" + _.appid, "" + _.long_term_sale_rank]);
                    });
                  const _ = (_.handle || "top100").replace(" ", "_") + ".csv";
                  _._.WriteCSVToFile(_, _);
                },
                children: "Download Top 100 Games",
              }),
              (0, _.jsx)(_._, {
                onClick: () => {
                  const _ = [];
                  _.push(["AppID"]),
                    _.all_appid.forEach((_) => {
                      _.push(["" + _]);
                    });
                  const _ = (_.handle || "allgames").replace(" ", "_") + ".csv";
                  _._.WriteCSVToFile(_, _);
                },
                children: "Download All Games",
              }),
              (0, _.jsxs)("div", {
                className: _.ThemeRow,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.ThemeDefinitionCtn,
                    children: [
                      "Summary: ",
                      (0, _.jsx)(_._, {
                        nTotalGames: _.total_games,
                      }),
                      !!_ &&
                        (0, _.jsx)(_, {
                          category: _,
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
                        className: _.GamesColumn,
                        children: _.top_games?.slice(0, 10).map((_) =>
                          (0, _.jsx)(
                            _._,
                            {
                              info: _,
                              category: _,
                              bSaleSummary: _,
                            },
                            _.appid,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { category: _ } = _,
            _ = (0, _._)(_.must, _.any, _.mustnot),
            _ = (0, _._)(_.must, _.any, _.mustnot);
          return (0, _.jsx)(_._, {
            saleSummary: _,
            topAppSummary: _,
          });
        }
        const _ = _.memo(function (_) {
          const { category: _, setCategory: _, list: _, title: _ } = _,
            { rgTags: _, rgCategories: _ } = (0, _._)(),
            _ = (_) => {
              _((_) => ({
                ..._,
                [_]: _(_[_]),
              }));
            },
            _ =
              _?.map((_) => ({
                value: _.tagid,
                label: `${_.name} (${_.tagid})`,
              })) || [],
            _ =
              _?.map((_) => ({
                value: _.categoryid,
                label: `${_.name} (${_.categoryid})`,
              })) || [];
          return (0, _.jsxs)("div", {
            className: _().TagOrCategoryList,
            children: [
              (0, _.jsx)(_._, {
                children: _,
              }),
              (0, _.jsx)(_._, {
                bDisabled: !0,
                items: _[_] ?? [],
                onDelete: (_) => _((_) => _.filter((_, _) => _ != _)),
                render: (_, _) =>
                  _.type === "tagids" || _ === "replaces_tags"
                    ? (0, _.jsxs)("div", {
                        className: _().IDSelector,
                        children: [
                          (0, _.jsx)(_._, {
                            value: _._,
                            onChange: (_) =>
                              _((_) =>
                                _.map((_, _) =>
                                  _ == _
                                    ? {
                                        ..._,
                                        _: parseInt(_.target.value),
                                      }
                                    : _,
                                ),
                              ),
                          }),
                          (0, _.jsx)(_._, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: _,
                            value: _.find((_) => _.value === _._),
                            onChange: (_) =>
                              _((_) =>
                                _.map((_, _) =>
                                  _ == _
                                    ? {
                                        ..._,
                                        _: _.value,
                                      }
                                    : _,
                                ),
                              ),
                          }),
                        ],
                      })
                    : _.type === "category"
                      ? (0, _.jsx)("div", {
                          className: _().IDSelector,
                          children: (0, _.jsx)(_._, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: _,
                            value: _.find((_) => _.value === _._),
                            onChange: (_) =>
                              _((_) =>
                                _.map((_, _) =>
                                  _ == _
                                    ? {
                                        ..._,
                                        _: _.value,
                                      }
                                    : _,
                                ),
                              ),
                          }),
                        })
                      : null,
              }),
              (0, _.jsx)(_._, {
                onClick: () =>
                  _((_) =>
                    _
                      ? [
                          ..._,
                          {
                            _: 0,
                          },
                        ]
                      : [
                          {
                            _: 0,
                          },
                        ],
                  ),
                children: "Add",
              }),
            ],
          });
        });
        function _(_) {
          const { categories: _, onSave: _, closeModal: _ } = _,
            [_, _] = _.useState();
          return (
            _.useEffect(() => {
              (0, _._)(_).then((_) => {
                _ ? _(_.strErrorMsg) : (_(), _ && _());
              });
            }, [_, _, _]),
            (0, _.jsx)(_._, {
              strTitle: "Saving",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
              closeModal: _,
              children: _
                ? (0, _.jsxs)("div", {
                    children: ["Error: ", _],
                  })
                : (0, _.jsx)(_._, {
                    size: "medium",
                    position: "center",
                  }),
            })
          );
        }
        function _(_) {
          const { onPublish: _, closeModal: _ } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState();
          return (
            _.useEffect(() => {
              _ &&
                (0, _._)().then((_) => {
                  _ ? _(_.strErrorMsg) : (_(), _(!1), _ && _());
                });
            }, [_, _, _]),
            (0, _.jsx)(_._, {
              strTitle: _ ? "Publishing" : "Really Publish?",
              strDescription:
                !_ &&
                "Publishing will make your changes immediately visible to users.",
              bAlertDialog: _,
              bDisableBackgroundDismiss: _,
              bHideCloseIcon: _,
              onOK: () => {
                _ ? _ && _() : _(!0);
              },
              onCancel: () => {
                _ && _();
              },
              children:
                _ &&
                (0, _.jsx)(_.Fragment, {
                  children: _
                    ? (0, _.jsxs)("div", {
                        children: ["Error: ", _],
                      })
                    : (0, _.jsx)(_._, {
                        size: "medium",
                        position: "center",
                      }),
                }),
            })
          );
        }
        const _ = {
          ContentHubCategories: () => "/categories/",
        };
        function _(_) {
          return (0, _.jsxs)(_._, {
            basename: (0, _._)() + "admin/store/contenthub/",
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    path: _.ContentHubCategories(),
                    component: _,
                  }),
                  (0, _.jsx)(_._, {
                    component: _._,
                  }),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              children: _,
              state: _,
              placement: _ = "bottom-end",
              popoverWidth: _ = "dropdown",
              popoverMaxHeight: _,
              popoverPresentation: _,
              popoverLabel: _,
              ..._
            } = _,
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = (0, _.useMemo)(
              () =>
                _.rgOptions.findIndex((_) =>
                  _.multiselect
                    ? _.selectedValue.includes(_)
                    : _ === _.selectedValue,
                ),
              [_.selectedValue, _.rgOptions, _.multiselect],
            ),
            _ = (0, _.useRef)(null),
            _ = {
              ..._,
              ..._,
              focusedValue: _,
              onFocusChange: _,
              refPopover: _,
              popoverLabel: _,
              setOpen: (_) => {
                _ && _(_.multiselect ? _.selectedValue[0] : _.selectedValue),
                  _.setOpen(_);
              },
              focusedIndex: _,
              onFocusedIndexChange: _,
            },
            _ = (0, _._)({
              open: _.bOpen,
              onOpenChange: _.setOpen,
              width: _,
              maxHeight: _,
              placement: _,
              presentation: _,
              selectedIndex: _,
              setSelectedIndex: (_) => _.onItemSelectionChange(_.rgOptions[_]),
              activeIndex: _,
              setActiveIndex: _,
              gutter: "4",
              interactions: {
                click: !0,
                typeahead: !0,
              },
              role: "select",
              scroll: !0,
            });
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._.Root, {
              state: _,
              children: _,
            }),
          });
        }
        function _(_) {
          const { refPopover: _, popoverLabel: _ } = _("<Select.Options>");
          return (0, _.jsx)(_._.Positioner, {
            ref: _,
            label: _,
            children: _.children,
          });
        }
        function _(_) {
          const { value: _, children: _, disabled: _, ..._ } = _,
            {
              onItemSelectionChange: _,
              multiselect: _,
              selectedValue: _,
              maxSelected: _,
            } = _("<SelectTrigger>"),
            _ = typeof _ == "string" ? _ : void 0;
          let _ = !1,
            _ = !1;
          _
            ? ((_ = Array.isArray(_) && _.includes(_)),
              (_ = !!_ && Array.isArray(_) && _.length >= _))
            : (_ = _ === _);
          const _ = _ || (_ && !_);
          return (0, _.jsxs)(_._.Item, {
            label: _,
            onSelect: () => _(_),
            selected: _,
            disabled: _,
            ..._,
            children: [
              _ &&
                (0, _.jsxs)(_._, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, _.jsx)(_._, {
                      checked: _,
                      variant: "dark",
                    }),
                    _,
                  ],
                }),
              !_ && _,
            ],
          });
        }
        function _(_) {
          const { children: _, render: _ } = _,
            {
              bOpen: _,
              setOpen: _,
              selectedValue: _,
              variant: _,
              size: _,
              radius: _,
              status: _,
              color: _,
              rgOptions: _,
              multiselect: _,
              onClear: _,
              focusedValue: _,
              onFocusChange: _,
              onSelectionChange: _,
              clearable: _,
              focusedIndex: _,
              onItemSelectionChange: _,
              onFocusedIndexChange: _,
              refPopover: _,
              popoverLabel: _,
              placeholder: _,
              maxSelected: _,
              ..._
            } = _("<SelectTrigger>"),
            _ = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => _(!_),
              children: _,
            },
            _ = _ ? Array.isArray(_) && _.length > 0 : !!_,
            _ = _ && _,
            _ = _
              ? (0, _.jsx)(_._, {
                  onClick: _,
                  cursor: "pointer",
                  hitSlop: !0,
                })
              : (0, _.jsx)(_._, {}),
            _ = _
              ? {
                  onSecondaryButton: _,
                  actionDescriptionMap: {
                    [_._.SECONDARY]: _._.Localize("#Clear"),
                  },
                }
              : void 0,
            _ = (0, _._)("Select", _),
            _ = (0, _.jsx)(_._, {
              afterContent: _,
              variant: _,
              size: _,
              radius: _,
              status: _,
              color: _,
              hasValue: _,
              tabIndex: 0,
              cursor: "pointer",
              navProps: _,
              ..._,
            }),
            _ = (0, _._)(_, _, _, void 0);
          return (0, _.jsx)(_._.Anchor, {
            children: _,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            contrast: "description",
            truncate: !0,
            children: _.children,
          });
        }
        function _(_) {
          return _(_, !1);
        }
        function _(_, _) {
          const { onSelectionChange: _, selectedValue: _, ..._ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useCallback)(
              (_) => {
                _(_), _ || _(!1);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _(_ ? [] : null), _?.stopPropagation(), _?.preventDefault();
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                if (!_) _(_);
                else {
                  const _ = _,
                    _ = _.indexOf(_);
                  if (_ === -1) _(_.concat(_));
                  else return _(_.slice(0, _).concat(_.slice(_ + 1)));
                }
              },
              [_, _, _],
            );
          return {
            onSelectionChange: _,
            onItemSelectionChange: _,
            onClear: _,
            bOpen: _,
            setOpen: _,
            multiselect: _,
            selectedValue: _,
            ..._,
          };
        }
        const _ = {
          Root: _,
          Option: _,
          Options: _,
          Trigger: _,
          Value: _,
          Placeholder: _,
        };
        function _(_) {
          return typeof _ == "string"
            ? _
            : typeof _ == "number"
              ? _.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  _,
                ),
                "");
        }
        function _(_) {
          const {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              placeholder: _,
              getOptionLabel: _ = _,
              ..._
            } = _,
            _ = _({
              onSelectionChange: _,
              selectedValue: _,
              rgOptions: _,
              placeholder: _,
            }),
            _ = _ != null,
            _ = _ ? _(_) : "";
          return (0, _.jsxs)(_.Root, {
            state: _,
            ..._,
            children: [
              (0, _.jsxs)(_.Trigger, {
                children: [
                  _ &&
                    (0, _.jsx)(_.Value, {
                      children: _,
                    }),
                  !_ &&
                    (0, _.jsx)(_.Placeholder, {
                      children: _,
                    }),
                ],
              }),
              (0, _.jsx)(_.Options, {
                children: _.rgOptions.map((_, _) =>
                  (0, _.jsx)(
                    _.Option,
                    {
                      value: _,
                      children: _(_),
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        const _ = Object.assign(_, _);
        function _(_) {
          return _(_, !0);
        }
        const _ = _;
        function _(_) {
          const {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              placeholder: _,
              getOptionLabel: _ = _,
              maxSelected: _,
              ..._
            } = _,
            _ = _({
              onSelectionChange: _,
              selectedValue: _,
              rgOptions: _,
              placeholder: _,
              maxSelected: _,
            }),
            _ = Array.isArray(_) && _.length > 0;
          let _ = "";
          if (_) {
            const _ = _.map((_) => _(_));
            "ListFormat" in Intl
              ? (_ = new Intl.ListFormat((0, _._)().strISOCode).format(_))
              : (_ = _.join(", "));
          }
          return (0, _.jsxs)(_.Root, {
            state: _,
            ..._,
            children: [
              (0, _.jsxs)(_.Trigger, {
                children: [
                  _ &&
                    (0, _.jsx)(_.Value, {
                      children: _,
                    }),
                  !_ &&
                    (0, _.jsx)(_.Placeholder, {
                      children: _,
                    }),
                ],
              }),
              (0, _.jsx)(_.Options, {
                children: _.rgOptions.map((_, _) =>
                  (0, _.jsx)(
                    _.Option,
                    {
                      value: _,
                      children: _(_),
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        const _ = Object.assign(_, _),
          _ = (0, _.createContext)(null);
        function _(_) {
          const _ = (0, _.useContext)(_);
          return _ || console.error(`${_} must be used within a <Select>!`), _;
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
          _ = __webpack_require__._(_);
        class _ {
          static ParseCSVFile(_, _) {
            return new Promise((_, _) => {
              const _ = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: _,
                error: (_) =>
                  _({
                    errors: [_],
                  }),
                transformHeader: _,
              };
              _().parse(_, _);
            });
          }
          static ReadFile(_) {
            return new Promise((_, _) => {
              const _ = new FileReader();
              (_.onload = () => _(_.result ?? "")), _.readAsText(_);
            });
          }
          static WriteFile(_, _) {
            let _ = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(_, _);
            else {
              const _ = window.URL.createObjectURL(_);
              _.href = _;
            }
            _.setAttribute("download", _), _.click();
            try {
              document.removeChild(_);
            } catch {}
          }
          static WriteCSVToFile(_, _, _, _) {
            const _ = _
                ? _().unparse(
                    {
                      fields: _,
                      data: _,
                    },
                    {
                      header: !0,
                    },
                  )
                : _().unparse(_, {
                    header: !0,
                  }),
              _ = _ == !0 ? ["\uFEFF" + _] : [_];
            _.WriteFile(
              new Blob(_, {
                type: "text/csv:charset=utf-8;",
              }),
              _,
            );
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(_, _) {
            const _ = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let _ =
              "<" +
              _() +
              'xml version="1.0" encoding="UTF-8" ' +
              _() +
              `>
`;
            (_ += new XMLSerializer().serializeToString(_)),
              _.WriteFile(
                new Blob([_], {
                  type: "application/xml:charset=utf-8;",
                }),
                _,
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
          TitleHR: "_1rdzNwXOoo1-LmnB-gVa8L",
          ActionButtonCtn: "_7a7-wklt6L9bHpSe8uw95",
          CategoriesList: "YMtVaSAftRDKdmUzno1V-",
          CategoryCtn: "_1vjux5UePGI2QR8pgGS5s9",
          Category: "_12BB3TMamY8yT5zyDnNr5Y",
          CategoryType: "_2rg93RSnGgt35AemsbS3XN",
          ExcludedFromSearch: "_1qSt9f_EVF7MmpIxINFOnq",
          ReplacesTags: "_2VMbzBly9fJ6k58VPyo5Dw",
          CategoryEditor: "hDZX9jvA2yVDsxIl25krT",
          TagOrCategoryList: "_33SvLrTusAraXr9O6rG1RK",
          IDSelector: "_1COCuEUNPkqoSthDBf5dKb",
          CategorySummary: "_1h-LQnwvNcayOGn1YjEAw8",
          Clause: "_17Lm214eZBjzdDsBlWCP0y",
          Item: "uZOnNO-9GSMjuZg73yUDz",
          UnpublishedChangesNotice: "_3IZil2pI21oJCdU0WQn6Z3",
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
      chunkid: (module) => {
        module.exports = {
          _: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [32455],
    {
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const _ = `${_._.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                _ = await _().get(_);
              return _?.status == 200 && _.data?.success == _._
                ? _.data.admins
                : (console.error("ValveAccounts:", _?.status), []);
            },
          });
          return _.isLoading ? null : _.data;
        }
        function _(_) {
          return _()?.find((_) => _._ == _);
        }
        function _(_, _) {
          return _.getQueryData(["useValveAccounts"])?.find((_) => _._ === _);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(null),
          _ = () => (0, _.useContext)(_);
        function _(_, _) {
          return _ ? _ + "?t=" + _ : null;
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
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
          };
        function _() {
          return _._.EUNIVERSE == _._ ? 12 : 1;
        }
        const _ = class _ {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(_) {
            return this.m_mapOptInToPartners.get(_);
          }
          BHasPartnerInfoLoad(_) {
            return this.m_mapOptInToPartners.has(_);
          }
          async FindPartnerByName(_) {
            return (
              this.m_mapPromises.has(_) ||
                this.m_mapPromises.set(_, this.InternalFindPartnerByName(_)),
              this.m_mapPromises.get(_)
            );
          }
          async InternalFindPartnerByName(_) {
            const _ = new Array();
            try {
              const _ = _._.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                _ = {
                  sessionid: (0, _._)(),
                  searchtext: _,
                  origin: self.origin,
                },
                _ = await _().get(_, {
                  params: _,
                });
              _?.status == 200 && _?.data?.success == _._
                ? _.data.publishers.forEach((_) => {
                    const _ = {
                      partnerid: _.publisherid,
                      name: _.publishername,
                      partner_url:
                        _._.PARTNER_BASE_URL +
                        `pub/publisher/${_.publisherid}/`,
                      contacts: _.contacts,
                    };
                    this.m_mapOptInToPartners.set(_.publisherid, _), _.push(_);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${_?.status} eresult ${_?.data?.success} and msg ${_?.data?.msg}`,
                  );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  _.strErrorMsg,
                _,
              );
            }
            return _;
          }
          async LoadPartnerInfo(_) {
            if (this.m_mapOptInToPartners.has(_))
              return this.m_mapOptInToPartners.get(_);
            const _ = await this.FindPartnerByName("" + _);
            return (
              this.BHasPartnerInfoLoad(_) ||
                this.m_mapOptInToPartners.set(_, null),
              this.m_mapOptInToPartners.get(_)
            );
          }
          async LoadMultiplePartnerInfo(_) {
            if (!_ || _.length == 0) return [];
            const _ = _.filter((_) => !this.m_mapOptInToPartners.has(_));
            return (
              _.length > 0 && (await this.FindPartnerByName("" + _.join(","))),
              _.map((_) => this.m_mapOptInToPartners.get(_)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {
            let _ = JSON.parse(
              JSON.stringify((0, _._)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(_) &&
              _.forEach((_) => this.m_mapOptInToPartners.set(_.partnerid, _));
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].partnerid == "number" &&
                  typeof _[0].name == "string"
              : !1;
          }
        };
        _([_._], _.prototype, "FindPartnerByName", 1);
        let _ = _;
        function _(_) {
          const [_, _] = (0, _.useState)(!1);
          return (
            (0, _.useEffect)(() => {
              !_ &&
                _?.length > 0 &&
                _.Get()
                  .LoadMultiplePartnerInfo(_)
                  .then(() => _(!0));
            }, [_, _]),
            _
          );
        }
        function _(_) {
          const [_, _] = _.useState(() => _.Get().GetPartnerInfo(_));
          return (
            _.useEffect(() => {
              !_.Get().BHasPartnerInfoLoad(_) && _ > 0
                ? _.Get()
                    .LoadPartnerInfo(_)
                    .then((_) => _(_))
                : _.Get().BHasPartnerInfoLoad(_) &&
                  _?.partnerid != _ &&
                  _(_.Get().GetPartnerInfo(_));
            }, [_, _]),
            [_]
          );
        }
        function _() {
          return {
            fnFindPartnerByName: _.Get().FindPartnerByName,
          };
        }
        function _(_) {
          return _.Get().GetPartnerInfo(_);
        }
        function _(_) {
          return _.Get().LoadPartnerInfo(_);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              src: _,
              inLink: _,
              setAttrs: _,
              focusView: _,
              removeNode: _,
              activeLanguage: _,
              allowAnimations: _,
              mapValues: _,
              fnUpdateDocument: _,
              selected: _,
            } = _,
            [_, _] = (0, _._)(),
            [_, _] = (0, _._)(),
            _ = (0, _._)(_ || _, 250),
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(),
            _ = _.useCallback(() => {
              _(), _();
            }, [_, _]),
            _ = _.useMemo(
              () =>
                _.find((_) => (0, _._)(_).toLowerCase() === _.toLowerCase()),
              [_, _],
            ),
            _ = _ ? (0, _._)(_) : null,
            {
              elLocalizedImageGroupDialog: _,
              elLocalizedImageGroupControl: _,
            } = _(_, _, _),
            _ = (0, _._)(),
            _ = (_) => {
              const _ = _.currentTarget;
              _.paused ? _.play() : _.pause();
            };
          let _;
          if (_) {
            const _ = (0, _._)(_, _, _);
            if (_) {
              const _ = (0, _._)(_, _),
                _ = (0, _._)(_.ExtraAssetImg, _ && _.Selected);
              _ =
                _.usage == _._
                  ? (0, _.jsx)(
                      "video",
                      {
                        className: _,
                        src: (0, _._)(_.url, _),
                        title: _,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        onClick: _,
                      },
                      _,
                    )
                  : (0, _.jsx)(
                      "img",
                      {
                        className: _,
                        src: (0, _._)(_.url, _),
                        alt: _,
                        title: _,
                      },
                      _,
                    );
            } else
              _ = (0, _.jsx)("span", {
                className: _.ExtraAssetError,
                children: (0, _._)(
                  "#StoreAdmin_GameDescription_MissingImageLanguage",
                  _,
                ),
              });
          } else
            _ = (0, _.jsx)("span", {
              className: _.ExtraAssetError,
              children: (0, _._)("#StoreAdmin_GameDescription_MissingImage", _),
            });
          const _ = (_, _) => {
              if (_) {
                const _ = new Map();
                for (const [_, _] of _) {
                  const _ = new RegExp(`${_}(?!\\w)`, "g"),
                    _ = _.Value.replace(_, `${_}`);
                  _.set(_, _);
                }
                _(_);
              } else
                _({
                  src: _,
                });
            },
            [_, _] = _.useState(0),
            [_, _] = _.useState(0),
            _ = (0, _._)((_) =>
              _(_.target.offsetLeft + _.borderBoxSize[0].inlineSize),
            ),
            _ = (0, _._)((_) => _(_.borderBoxSize[0].inlineSize)),
            _ = _ + 16 >= _,
            _ = _ ? _ : void 0;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  editAsset: _,
                  bReplace: !0,
                  onAssetSelected: _,
                  hideModal: _,
                }),
              _,
              (0, _.jsxs)("div", {
                ref: _,
                className: (0, _._)({
                  [_.ExtraAssetImgTag]: !0,
                  [_.ExtraAssetControlsContainer]: !0,
                  [_.Hovered]: _,
                  [_.InDeprecatedLink]: _,
                }),
                title: "",
                ..._,
                children: [
                  _ && (0, _.jsx)(_, {}),
                  (0, _.jsxs)("div", {
                    ref: _,
                    className: (0, _._)(
                      _.ExtraAssetControls,
                      _ && _.SmallImage,
                    ),
                    style: {
                      left: _,
                    },
                    ..._,
                    children: [
                      _,
                      (0, _.jsx)(_._, {
                        onClick: _,
                        tooltip: (0, _._)(
                          "#StoreAdmin_GameDescription_ReplaceImage",
                        ),
                        children: (0, _.jsx)(_.ffu, {}),
                      }),
                      (0, _.jsx)(_._, {
                        onClick: _,
                        tooltip: (0, _._)(
                          "#StoreAdmin_GameDescription_RemoveImage",
                        ),
                        children: (0, _.jsx)(_._, {}),
                      }),
                    ],
                  }),
                  _,
                ],
              }),
            ],
          });
        }
        function _(_, _, _) {
          const [_, _, _] = (0, _._)(),
            _ = _.useCallback(() => {
              _?.(), _();
            }, [_, _]);
          let _, _;
          return (
            (0, _._)(_)
              ? ((_ =
                  _ &&
                  (0, _.jsx)(_, {
                    selectedAsset: _,
                    hideModal: _,
                    activeLanguage: _,
                  })),
                (_ = (0, _.jsx)(_._, {
                  onClick: _,
                  tooltip: (0, _._)(
                    "#StoreAdmin_GameDescription_EditImageDetails",
                  ),
                  children: (0, _.jsx)(_.vCk, {
                    className: "SVGIcon_Button",
                  }),
                })))
              : (0, _._)(_) &&
                (_ = (0, _.jsx)(_._, {
                  onClick: () => {},
                  tooltip: (0, _._)(
                    "#StoreAdmin_GameDescription_EditImageDetails_Legacy",
                  ),
                  children: (0, _.jsx)(_.R2D, {}),
                })),
            {
              elLocalizedImageGroupDialog: _,
              elLocalizedImageGroupControl: _,
            }
          );
        }
        function _() {
          return (0, _.jsx)("span", {
            className: _.ImageLinkDisabledWarning,
            children: (0, _.jsx)("span", {
              className: _.TopBar,
              children: (0, _.jsx)(_._, {
                toolTipContent: (0, _._)(
                  "#StoreAdmin_GameDescription_ImageLinkDisabled_Description",
                ),
                children: (0, _.jsx)("span", {
                  className: _.TopBarContent,
                  children: "Disabled",
                }),
              }),
            }),
          });
        }
        function _(_) {
          const { nodeType: _ } = _,
            { view: _ } = (0, _._)(),
            [_, _, _] = (0, _._)(),
            _ = _.useCallback(() => {
              _(), _.focus();
            }, [_, _]),
            _ = _.useCallback(
              (_) => {
                _.dispatch(
                  _.state._.insert(
                    _.state.selection._,
                    _.createChecked({
                      src: _,
                    }),
                  ),
                ),
                  _();
              },
              [_, _, _],
            );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  onAssetSelected: _,
                  hideModal: _,
                }),
              (0, _.jsx)(_._, {
                onClick: _,
                toggled: _,
                tooltip: (0, _._)("#StoreAdmin_GameDescription_InsertImage"),
                children: (0, _.jsx)(_._V3, {}),
              }),
            ],
          });
        }
        function _(_) {
          const {
              editAsset: _,
              bReplace: _,
              onAssetSelected: _,
              hideModal: _,
            } = _,
            _ = (0, _._)(!0),
            [_, _] = _.useState(_),
            [_, _] = (0, _._)(_, _._),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(""),
            _ = _.useCallback(
              (_, _) => {
                _ && (_(_, _), _());
              },
              [_, _],
            );
          return (0, _.jsxs)(_._, {
            active: !0,
            children: [
              _,
              (0, _.jsx)(_._, {
                onEscKeypress: _,
                children: (0, _.jsxs)(_._, {
                  classNameContent: _.ExtraAssetDialogContent,
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)(
                        "#StoreAdmin_GameDescription_SelectImage",
                      ),
                    }),
                    (0, _.jsxs)("div", {
                      className: _.ExtraAssetsDialogDescription,
                      children: [
                        (0, _.jsx)("div", {
                          children: (0, _._)(
                            "#StoreAdmin_GameDescription_ExistingImages",
                          ),
                        }),
                        (0, _.jsxs)("div", {
                          className: _.UploadButtonContainer,
                          children: [
                            (0, _.jsx)("div", {
                              children: (0, _._)(
                                "#StoreAdmin_ExtraAssetUpload_UploadNew",
                              ),
                            }),
                            (0, _.jsx)(_._, {
                              className: _.UploadButton,
                              onClick: _,
                              children: (0, _._)(
                                "#StoreAdmin_ExtraAssetUpload_BrowseForFile",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _.ExtraAssetSearch,
                      children: (0, _.jsx)(_._, {
                        type: "text",
                        value: _,
                        bShowClearAction: !0,
                        onChange: (_) => _(_.currentTarget.value || ""),
                        placeholder: (0, _._)(
                          "#StoreAdmin_ExtraAssetUpload_SearchPlaceholder",
                        ),
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      className: _.ExtraAssetsGridDialog,
                      children: (0, _.jsx)("div", {
                        className: (0, _._)(
                          _.ExtraAssetsGrid,
                          _.ExtraAssetsChooser,
                        ),
                        children: _.filter((_) => (0, _._)(_).includes(_)).map(
                          (_) =>
                            (0, _.jsx)(
                              _,
                              {
                                extraAsset: _,
                                onSelectAsset: _,
                                onChooseAsset: (_) => _(_, _),
                                selected: (0, _._)(_) == _,
                              },
                              (0, _._)(_),
                            ),
                        ),
                      }),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        _ &&
                          (0, _.jsx)(_._, {
                            className: _.ReplaceAllCheck,
                            checked: _,
                            onChange: _,
                            label: (0, _._)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll",
                            ),
                            tooltip: (0, _._)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll_ttip",
                            ),
                          }),
                        (0, _.jsx)(_._, {
                          onCancel: _,
                          onOK: (_) => {
                            _.preventDefault(), _(_, _);
                          },
                          bOKDisabled: !_,
                          strOKText: (0, _._)(
                            "#StoreAdmin_GameDescription_UseThisImage",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              extraAsset: _,
              onSelectAsset: _,
              onChooseAsset: _,
              selected: _,
            } = _,
            _ = _.useRef(null),
            _ = (0, _._)(_);
          return (
            _.useLayoutEffect(() => {
              _ &&
                _.current?.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
            }, []),
            (0, _.jsx)("div", {
              ref: _,
              className: (0, _._)(_.ExtraAssetChoice, _ && _.Selected),
              title: _,
              onClick: (_) => _(_),
              onDoubleClick: (_) => _(_),
              children: (0, _.jsx)(_, {
                extraAsset: _,
                controls: !1,
              }),
            })
          );
        }
        function _(_) {
          const { selectedAsset: _, activeLanguage: _, hideModal: _ } = _;
          if ((_(!_, _), !!_))
            return (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                children: (0, _.jsxs)(_._, {
                  classNameContent: _.LocalizeAssetDialogContent,
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Title",
                      ),
                    }),
                    (0, _.jsx)("div", {
                      className: _.LocalizeAssetsDialogDescription,
                      children: (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Desc",
                        ),
                      }),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)(_, {
                          onlyExtraAsset: _,
                        }),
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)(_, {
                            extraAsset: _,
                            activeLanguage: _,
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              }),
            });
        }
        function _(_) {
          const { extraAsset: _, activeLanguage: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(),
            _ = _.useCallback(
              (_) => (0, _._)((0, _._)(_, !0, _)?.url, _),
              [_, _],
            ),
            [_, _] = _.useState(void 0),
            [_, _, _] = (0, _._)();
          return _
            ? (0, _.jsxs)("div", {
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      extraAsset: _,
                      deleteLang: _,
                      hideModal: _,
                    }),
                  (0, _.jsx)(_._, {
                    rgAssetLangs: _,
                    initialLang: _,
                    showDeleteAll: !1,
                    imageClassname: _.DisplayLocImage,
                    fnGetAssetUrl: _,
                    fnDeletAssetLang: (_) => {
                      _(_), _();
                    },
                    fnDeleteAllAssets: () => {
                      _(void 0), _();
                    },
                  }),
                ],
              })
            : null;
        }
        function _(_, _) {
          _.useEffect(() => {
            _ && _();
          }, [_, _]);
        }
        function _(_) {
          const { asset_mtime: _, assets_list: _ } = _,
            _ = new Map(_),
            _ = (0, _._)(!0),
            _ = _.useMemo(() => _._(_.filter(_._), _._), [_]),
            _ = _.useMemo(
              () =>
                _.filter(_._).map((_) => ({
                  key: (0, _._)(_),
                  caption: (0, _._)(_),
                  mapAltText: _.alt_text,
                })),
              [_],
            ),
            _ = (0, _._)(),
            [_, _, _] = (0, _._)(),
            { mutateAsync: _, isPending: _ } = _(),
            _ = async (_, _) =>
              (await _({
                strExtraAssetFileName: _,
                mapAltText: _,
              })) !== !1;
          return (0, _.jsxs)(_._.Provider, {
            value: _,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  entries: _,
                  isLoading: !1,
                  hideModal: _,
                  mutateAltTextAsync: _,
                  isMutatePending: _,
                  fnGetImage: (_, _) =>
                    (0, _.jsx)(_, {
                      extraAsset: _.get(_),
                      caption: !1,
                      controls: !1,
                      primaryLanguage: _,
                      mapAssetsList: _,
                    }),
                }),
              _.some(_._) &&
                (0, _.jsxs)("div", {
                  className: _.AltTextBtn,
                  children: [
                    (0, _.jsx)("p", {
                      children: (0, _._)("#StoreAdmin_CustomImages_Title"),
                    }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      children: (0, _._)("#StoreAdmin_EditAltText_Button"),
                    }),
                  ],
                }),
              (0, _.jsx)("div", {
                className: _.ExtraAssetsPageList,
                children: (0, _.jsx)("div", {
                  className: _.ExtraAssetsGrid,
                  children: [..._].map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        extraAsset: _,
                        primaryLanguage: _,
                        mapAssetsList: _,
                      },
                      (0, _._)(_),
                    ),
                  ),
                }),
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          const { onlyExtraAsset: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (_) => {
              const _ = _
                ? [..._].reverse().find((_) => _.bSuccess)?.uploadResult
                : null;
              _ && _(_);
            },
            _ = (0, _._)(),
            _ = _.useMemo(() => _.filter(_._), [_]),
            _ = _(_);
          _.useEffect(() => {
            const _ = (_) => ({
              baseFilename: (0, _._)(_),
              languages: (0, _._)(_) ? [_.Bhc] : (0, _._)(_),
            });
            _.SetExistingAssetGroups(_.map(_), _),
              _.SetOnlyAssetGroup(_ ? _(_) : null);
          }, [_, _, _, _]);
          const _ = _(_),
            { rgRealmList: _ } = (0, _._)();
          let _;
          return (
            _ && !_
              ? (_ = (0, _._)(
                  "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalNoSize",
                ))
              : _ && _
                ? (_ = (0, _._)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalWithSize",
                    _.width,
                    _.height,
                  ))
                : (_ = (0, _._)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_Base",
                  )),
            (0, _.jsx)("div", {
              children: (0, _.jsx)(_._, {
                imageUploader: _,
                rgRealmList: _,
                fnUploadComplete: _,
                elOverrideDragAndDropText: _,
                elAdditonalButtons: (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("div", {
                    className: _.InstructionsForLocAssets,
                    children: (0, _._)(
                      "#StoreAdmin_ExtraAssetUpload_Instructions_Note",
                    ),
                  }),
                }),
              }),
            })
          );
        }
        function _(_) {
          const [_, _] = _.useState(void 0),
            _ = (0, _._)();
          return (
            _.useEffect(() => {
              const _ = _.map(async (_) => {
                let _ = (0, _._)(_, !1, _.xPp);
                return (
                  _ || (_ = (0, _._)(_, !0, _.xPp)),
                  (0, _._)(await (0, _._)((0, _._)(_?.url, _), _?.usage == _._))
                );
              });
              Promise.all(_).then(_);
            }, [_, _]),
            _
          );
        }
        function _(_) {
          const _ = _.useMemo(() => (_ ? [_] : []), [_]),
            _ = _(_);
          return _?.length > 0 ? _[0] : void 0;
        }
        function _(_) {
          const {
              extraAsset: _,
              caption: _ = !0,
              controls: _ = !0,
              primaryLanguage: _,
              mapAssetsList: _,
            } = _,
            _ = _.useRef(void 0),
            _ = (0, _._)(_),
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_);
          let _;
          if ((0, _._)(_)) {
            const _ = (0, _._)(_, !1);
            _ = _ ? [_] : [];
          } else {
            const _ = _ == _.ZLm ? _.NFp : _.Bhc,
              _ = (0, _._)(_).sort((_, _) => _(_, _, _, _));
            _ = Array.from({
              length: Math.min(3, _.length),
            }).map((_, _) => (0, _._)(_, _ == 0, _[_]));
          }
          const _ = () => {
              window.open((0, _._)(_[0]?.url, _));
            },
            _ = () => (0, _._)(_),
            _ = (0, _._)(),
            {
              elLocalizedImageGroupDialog: _,
              elLocalizedImageGroupControl: _,
            } = _(_, null, null),
            _ = (_) => {
              const _ = _.currentTarget;
              _.paused ? _.play() : _.pause();
            },
            _ = _
              ? Array.from(_).reduce(
                  (_, [_, _]) => (_.includes(_) ? [..._, _] : _),
                  [],
                )
              : [],
            _ = 3,
            _ = new Intl.ListFormat(_._.GetPreferredLocales(), {
              style: "long",
              type: "conjunction",
            }),
            _ = _.map((_) => (0, _._)("#Language_" + _)),
            _ =
              _.length <= 3
                ? _.format(_)
                : _.format([
                    ..._.slice(0, _ - 1),
                    (0, _._)(
                      "#StoreAdmin_GameDescription_AssetsInUseOthers",
                      _.length - _ + 1,
                    ),
                  ]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsxs)("div", {
                ref: _,
                className: (0, _._)(
                  _.ExtraAssetStack,
                  _.ExtraAssetControlsContainer,
                  _ && _.Hovered,
                ),
                title: _,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      extraAsset: _,
                      hideModal: _,
                    }),
                  _ &&
                    (0, _.jsxs)("div", {
                      className: _.ExtraAssetControls,
                      title: "",
                      children: [
                        _,
                        (0, _.jsx)(_._, {
                          onClick: _,
                          tooltip: (0, _._)(
                            "#StoreAdmin_GameDescription_OpenInNewWindow",
                          ),
                          children: (0, _.jsx)(_.glU, {}),
                        }),
                        !_ &&
                          (0, _.jsx)(_._, {
                            onClick: _,
                            tooltip: (0, _._)(
                              "#StoreAdmin_GameDescription_CopyNameToClipboard",
                            ),
                            children: (0, _.jsx)(_.QRo, {}),
                          }),
                        _.length == 0 &&
                          (0, _.jsx)(_._, {
                            onClick: _,
                            tooltip: (0, _._)(
                              "#StoreAdmin_GameDescription_DeleteAsset",
                            ),
                            children: (0, _.jsx)(_._, {}),
                          }),
                        _.length > 0 &&
                          (0, _.jsx)(_._, {
                            onClick: () => {},
                            tooltip: (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _._)(
                                  "#StoreAdmin_GameDescription_AssetsInUse1",
                                  _,
                                ),
                                (0, _.jsx)("br", {}),
                                (0, _.jsx)("br", {}),
                                (0, _._)(
                                  "#StoreAdmin_GameDescription_AssetsInUse2",
                                ),
                              ],
                            }),
                            children: _.length,
                          }),
                      ],
                    }),
                  (0, _.jsx)("div", {
                    className: _.StackedImageCtn,
                    children: _.map((_, _) =>
                      _.usage == _._
                        ? (0, _.jsx)(
                            "video",
                            {
                              className: (0, _._)(
                                _.StackedImage,
                                _[`Image-${_}`],
                              ),
                              src: _.url + "?t=" + _,
                              onDoubleClick: _ ? _ : void 0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              autoPlay: !0,
                              onClick: _,
                            },
                            _.url + _,
                          )
                        : (0, _.jsx)(
                            "img",
                            {
                              className: (0, _._)(
                                _.StackedImage,
                                _[`Image-${_}`],
                              ),
                              src: _.url + "?t=" + _,
                              onDoubleClick: _ ? _ : void 0,
                            },
                            _.url + _,
                          ),
                    ),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.ExtraAssetName,
                      children: (0, _._)(_),
                    }),
                ],
              }),
            ],
          });
        }
        function _(_, _, _, _) {
          if (_ != null) {
            if (_ == _ && _ != _) return -1;
            if (_ != _ && _ == _) return 1;
            if (_ == _ && _ != _) return -1;
            if (_ != _ && _ == _) return 1;
          }
          return _ - _;
        }
        function _(_) {
          const { extraAsset: _, deleteLang: _, hideModal: _ } = _,
            { mutate: _, isPending: _, isSuccess: _ } = _(),
            _ = _ || _;
          return (
            _.useEffect(() => {
              _ && _();
            }, [_, _]),
            (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)(_._, {
                onOK: () =>
                  _({
                    extraAsset: _,
                    eLang: _,
                  }),
                bOKDisabled: _,
                strOKButtonText: (0, _._)(
                  "#StoreAdmin_GameDescription_DeleteAsset",
                ),
                strTitle: (0, _._)("#StoreAdmin_GameDescription_DeleteAsset"),
                strDescription: _
                  ? (0, _.jsx)(_._, {
                      position: "center",
                      size: "medium",
                    })
                  : (0, _._)("#StoreAdmin_GameDescription_DeleteAsset_Confirm"),
                onCancel: _,
              }),
            })
          );
        }
        function _() {
          const _ = (0, _._)("ajaxmodifyextraassets"),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async ({ extraAsset: _, eLang: _ }) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("action", "delete"),
                _.append("name", (0, _._)(_)),
                (0, _._)(_) &&
                  _ != null &&
                  _ != _.xPp &&
                  _.append("lang", (0, _.LgB)(_));
              const _ = await fetch(_, {
                  method: "post",
                  body: _,
                }),
                _ = await _.json();
              if (!_._) throw _.errors?.join(" ") || "Error deleting asset";
              return _;
            },
            onSuccess: (_) => {
              _(_.rgExtraAssets);
            },
            onError: (_) => {
              console.error(
                (0, _._)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof _ == "string" ? _ : _.message,
                ),
              );
            },
          });
        }
        function _() {
          const _ = (0, _._)("ajaxmodifyextraassets"),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async ({ strExtraAssetFileName: _, mapAltText: _ }) => {
              if (!_ || !_) return !1;
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("action", "alt_text"),
                _.append("name", _),
                _.append(
                  "alt_text",
                  JSON.stringify(
                    Object.entries(_).map(([_, _]) => ({
                      lang: _,
                      text: _,
                    })),
                  ),
                );
              const _ = await fetch(_, {
                  method: "post",
                  body: _,
                }),
                _ = await _.json();
              if (!_._) throw _.errors?.join(" ") || "Error deleting asset";
              return _;
            },
            onSuccess: (_) => {
              _ !== !1 && _(_.rgExtraAssets);
            },
            onError: (_) => {
              console.error(
                (0, _._)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof _ == "string" ? _ : _.message,
                ),
              );
            },
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
          };
        class _ extends _._ {
          m_bLockedToSpecificAsset;
          m_fnGetImageOptions;
          m_nMaxFileSize;
          m_rgCurrentImageOptionKey = void 0;
          constructor(_, _, _, _, _, _, _) {
            const _ = (0, _._)(_);
            super(_, _, _, _.src, _),
              (0, _._)(this),
              (this.m_bLockedToSpecificAsset = _),
              (this.m_fnGetImageOptions = _),
              (this.m_nMaxFileSize = _);
          }
          IsValidAssetType(_, _) {
            const _ = this.GetCurrentImageOption(),
              _ = _?.width ?? 0,
              _ = _?.height ?? 0,
              _ = _ && _ != this.fileType,
              _ = this.IsFileTypeSupported(this.fileType),
              _ = this.BIsVideo() ? 1 : 0,
              _ =
                _ > 0 && _ > 0
                  ? Math.abs(this.width - _) <= _ &&
                    Math.abs(this.height - _) <= _
                  : !0,
              _ = _?.bMismatchedNewSizes;
            let _ = "";
            _
              ? _
                ? (_ = (0, _._)(
                    "#ImageUpload_InvalidFormat",
                    (0, _._)(_) ?? "",
                  ))
                : _?.groupName.trim().length > 0
                  ? this.file.size > this.m_nMaxFileSize &&
                    (_ = (0, _._)(
                      "#ImageUpload_ExceedsMaxFileSize",
                      (0, _._)(this.m_nMaxFileSize),
                    ))
                  : (_ = (0, _._)("#ImageUpload_EmptyBaseName"))
              : (_ = (0, _._)("#ImageUpload_InvalidFormatSelected"));
            const _ = [],
              _ = [];
            return (
              !_ && _
                ? _.push(
                    (0, _._)("#ImageUpload_InvalidResolution", _.groupName),
                  )
                : _ &&
                  _ &&
                  _.push(
                    (0, _._)("#ImageUpload_MismatchedResolution", _.groupName),
                  ),
              (_?.rgExistingLanguages?.length ?? 0) > 1 &&
                this.language &&
                _?.rgExistingLanguages.includes(this.language) &&
                _.push(
                  (0, _._)(
                    "#ImageUpload_ReplaceLanguage",
                    (0, _._)("#Language_" + (0, _.LgB)(this.language)),
                  ),
                ),
              {
                error: _,
                messages: _,
                warnings: _,
                needsCrop: !1,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BIsOriginalMinimumDimensions(_) {
            return !0;
          }
          FileTypeMatchesImageTypes(_) {
            return !0;
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          BSupportsLanguages() {
            return !0;
          }
          GetResizeDimension() {}
          get ImageOptions() {
            const _ = this.filename.lastIndexOf("."),
              _ = _ != -1 ? this.filename.slice(0, _) : this.filename,
              _ = this.m_fnGetImageOptions();
            return (
              this.m_bLockedToSpecificAsset ||
                _.find((_) => _.groupName == _) ||
                _.push({
                  sKey: _,
                  fnGetLabelText: () => _,
                  width: this.width,
                  height: this.height,
                  bEnforceDimensions: !1,
                  groupName: _,
                  bMismatchedNewSizes: !1,
                  rgExistingLanguages: [],
                }),
              _
            );
          }
          GetCurrentImageOptionKey() {
            return this.m_rgCurrentImageOptionKey;
          }
          GetCurrentImageOption() {
            const _ = this.m_fnGetImageOptions();
            if (this.m_rgCurrentImageOptionKey)
              return _.find((_) => _.sKey == this.m_rgCurrentImageOptionKey);
            const _ = _.find(
              (_) => _.groupName == (0, _._)(this.filename, _.xPp).baseFilename,
            );
            if (_) return _;
            if (_.length == 1) return _[0];
          }
          SetCurrentImageOption(_) {
            this.m_rgCurrentImageOptionKey = _?.sKey;
          }
          GetImageOptionLabel() {
            return _.createElement(
              "span",
              null,
              (0, _._)("#ImageUpload_ImageGroup"),
              _.createElement(_._, {
                tooltip: (0, _._)("#ImageUpload_ImageGroup_ttip"),
              }),
            );
          }
          IsFileTypeSupported(_) {
            switch (_) {
              case _._._:
              case _._._:
              case _._._:
              case _._._:
              case _._._:
              case _._._:
                return !0;
              default:
                return !1;
            }
          }
        }
        _([_._], _.prototype, "m_rgCurrentImageOptionKey", 2),
          _([_._], _.prototype, "ImageOptions", 1),
          _([_._], _.prototype, "SetCurrentImageOption", 1);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
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
          };
        const _ = 100 * 1024 * 1024,
          _ = 6 * 1024 * 1024;
        class _ extends _._ {
          m_cancel = void 0;
          m_urls;
          m_regexInvalidFilenameCharacters;
          m_filesToUpload = _._.array();
          m_onlyAssetGroup = void 0;
          m_rgExistingAssetGroups = void 0;
          m_rgImageSizes = void 0;
          constructor(_, _) {
            super(),
              (0, _._)(this),
              (this.m_urls = _),
              (this.m_regexInvalidFilenameCharacters = _);
          }
          GetErrorsFromErrorResponse(_) {
            let _;
            const _ = _?.response?.data?.errors;
            return (
              _
                ? (_ = [
                    ..._.map((_, _) =>
                      _.createElement(
                        "span",
                        {
                          key: `error${_}`,
                        },
                        _,
                      ),
                    ),
                    _?.length > 0
                      ? _.createElement("br", {
                          key: "br",
                        })
                      : void 0,
                    _.createElement(
                      "a",
                      {
                        href: "https://partner.steamgames.com/doc/store/page/assets#error",
                        key: "a",
                      },
                      (0, _._)(
                        "#StoreAdmin_ExtraAssetUpload_UnknownUploadFailure",
                      ),
                    ),
                  ])
                : console.error(
                    "CExtraAssetsImageUploader.UploadSingleImage failed with unknown error",
                    _,
                  ),
              _
            );
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          ClearImages() {
            this.m_filesToUpload = _._.array();
          }
          DeleteUploadImage(_) {
            const _ = this.m_filesToUpload.findIndex(
              (_) => _.file == _.file && _.uploadTime == _.uploadTime,
            );
            _ >= 0 &&
              (this.m_filesToUpload.splice(_, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]));
          }
          SetExistingAssetGroups(_, _) {
            (this.m_rgExistingAssetGroups = _), (this.m_rgImageSizes = _);
          }
          SetOnlyAssetGroup(_) {
            this.m_onlyAssetGroup = _;
          }
          async AddImageForLanguage(_, _) {
            if ((0, _._)(_.type) || (0, _._)(_.type)) {
              const _ = await (0, _._)(_, (0, _._)(_.type));
              if (_) {
                const _ = _.name
                    .toLowerCase()
                    .replace(this.m_regexInvalidFilenameCharacters, "_"),
                  _ = new _(
                    !this.m_onlyAssetGroup,
                    () => this.GetImageOptions(),
                    _,
                    _,
                    _,
                    _,
                    _,
                  );
                return (
                  (this.m_filesToUpload = [...this.m_filesToUpload, _]), !0
                );
              }
            } else
              console.error(
                "AddImageForLanguage failed to determine file type, not image, video or subtitle",
                _,
                _.type,
              );
            return !1;
          }
          async UploadAllImages(_, _) {
            this.m_cancel = _().CancelToken.source();
            const _ = 4,
              _ = 300 * 1e3,
              _ = (0, _._)(this.GetUploadImages(), _, _),
              _ = _.map(
                (_) => _.GetCurrentImageOption()?.groupName ?? _.filename,
              );
            let _ = 0;
            const _ = new Map(),
              _ = new Map();
            let _ = 0;
            const _ = async () => {
              for (; _ < _.length; ) {
                const _ = _++,
                  _ = _[_],
                  _ = _[_];
                (_.status = "uploading"), _++;
                try {
                  const _ = await this.StartImageUpload(
                    _,
                    _,
                    this.m_cancel.token,
                  );
                  if (_.bSuccess) {
                    const _ = (0, _._)();
                    _.set(_.nRequestId, (_) => _.resolve(_));
                    const _ = new Promise((_, _) => setTimeout(() => _(), _));
                    try {
                      const _ = await Promise.race([_, _.promise]);
                      _.set(_.nRequestId, {
                        bSuccess: _ == _._,
                        uploadImage: _,
                        strGroupName: _,
                        elErrorMessage:
                          _ == _._
                            ? void 0
                            : (0, _._)("#MediaConvert_InternalError"),
                      });
                    } catch {
                      _.set(_.nRequestId, {
                        bSuccess: !1,
                        uploadImage: _,
                        strGroupName: _,
                        elErrorMessage: (0, _._)(
                          "#StoreAdmin_ExtraAssetUpload_Timeout",
                        ),
                      });
                    } finally {
                      _.delete(_.nRequestId);
                    }
                  } else
                    _.push({
                      bSuccess: !1,
                      image: _,
                      uploadResult: [],
                    }),
                      (_.status = _.bSuccess ? "success" : "failed"),
                      (_.message =
                        !_.bSuccess && _.elErrorMessage
                          ? _.elErrorMessage
                          : "");
                } finally {
                  _--;
                }
              }
            };
            Array.from(
              {
                length: Math.floor(_),
              },
              () => _(),
            );
            const _ = [];
            for (;;) {
              if (_.size > 0) {
                const _ = Array.from(_.keys()),
                  { bSuccess: _, rgStatus: _ } = await this.CheckUploadStatus(
                    _,
                    this.m_cancel.token,
                  );
                if (_) {
                  for (const [_, _] of _._(_, _))
                    if (_ != _._) {
                      const _ = _.get(_);
                      _.delete(_), _?.(_);
                    }
                }
              }
              const _ = new Map(_);
              _.clear();
              for (const [
                _,
                {
                  bSuccess: _,
                  uploadImage: _,
                  strGroupName: _,
                  elErrorMessage: _,
                },
              ] of _) {
                if (!_) {
                  (_.status = "failed"),
                    (_.message = _),
                    _.push({
                      bSuccess: !1,
                      image: _,
                      uploadResult: [],
                    });
                  continue;
                }
                const _ = await this.CompleteUpload(
                  _,
                  _,
                  _.language,
                  this.m_cancel.token,
                );
                (_.status = _.bSuccess ? "success" : "failed"),
                  (_.message = _.bSuccess ? "" : _.elErrorMessage),
                  _.push({
                    bSuccess: _.bSuccess,
                    image: _,
                    uploadResult: [],
                  });
              }
              if (_ >= _.length && _ == 0 && _.size == 0) break;
              this.m_cancel.token.throwIfRequested(), await (0, _._)(1e3);
            }
            const { rgExtraAssets: _ } = await this.GetExtraAssets(
              this.m_cancel.token,
            );
            return (
              _.filter((_) => _.bSuccess).forEach((_) => (_.uploadResult = _)),
              _
            );
          }
          async StartImageUpload(_, _, _) {
            let _;
            if (_.file.size > _) {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("name", _),
                _.append("file_size", "" + _.file.size);
              const _ = await this.MakePost(
                this.m_urls.strGetUploadUrlForAsset,
                _,
                {
                  "Content-Type": "multipart/form-data",
                },
                "GetUploadUrl",
                _,
              );
              if (!_.bSuccess) return _;
              _ = _.data;
              const _ = (0, _._)(
                {
                  "Content-Type": "application/octet-stream",
                },
                _.headers_for_upload,
              );
              if (
                !(await _()
                  .put(_.upload_url, _.file, {
                    headers: _,
                    cancelToken: _,
                  })
                  .then((_) => _.status == 200 || _.status == 201)
                  .catch(() => !1))
              )
                return (
                  console.warn(
                    "CExtraAssetsImageUploader put to CDNStorage url failed",
                    _.upload_url,
                  ),
                  {
                    bSuccess: !1,
                  }
                );
            }
            {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("asset_type", "extra_asset_v2"),
                _.append("name", _),
                _
                  ? _.append("temp_file_id", _.temp_file_id)
                  : _.append("file", _.file);
              const _ = await this.MakePost(
                this.m_urls.strBeginConvert,
                _,
                {
                  "Content-Type": "multipart/form-data",
                },
                "BeginUploadUrl",
                _,
              );
              if (!_.bSuccess) return _;
              const _ = _.data.request_id;
              return (
                (_.status = "processing"),
                {
                  bSuccess: !0,
                  nRequestId: _,
                }
              );
            }
          }
          async CheckUploadStatus(_, _) {
            const _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("request_ids", _.join(","));
            const _ = await this.MakePost(
              this.m_urls.strCheckConvertStatus,
              _,
              void 0,
              "CheckUploadStatus",
              _,
            );
            return _.bSuccess
              ? {
                  bSuccess: !0,
                  rgStatus: _.data.status,
                }
              : _;
          }
          async CompleteUpload(_, _, _, _) {
            const _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("request_id", _.toString()),
              _.append("name", _),
              _.append("asset_type", "extra_asset_v2"),
              _ != _.xPp && _.append("language", (0, _.LgB)(_));
            const _ = await this.MakePost(
              this.m_urls.strCompleteConvert,
              _,
              void 0,
              "CompleteUpload",
              _,
            );
            return _.bSuccess
              ? ((0, _._)(
                  _.data?.complete,
                  "CompleteUpload shouldn't be run until all uploads are complete",
                ),
                {
                  bSuccess: !0,
                })
              : _;
          }
          async GetExtraAssets(_) {
            const _ = new FormData();
            _.append("sessionid", (0, _._)());
            const _ = await this.MakePost(
              this.m_urls.strGetExtraAssets,
              _,
              void 0,
              "GetExtraAssets",
              _,
            );
            return _.bSuccess
              ? {
                  bSuccess: !0,
                  rgExtraAssets: _.data?.rgExtraAssets,
                }
              : _;
          }
          async MakePost(_, _, _, _, _) {
            let _;
            try {
              const _ = await _().post(_, _, {
                withCredentials: !0,
                headers: _,
                cancelToken: _,
              });
              if (_.status == 200 && typeof _.data == "object") _ = _.data;
              else
                return (
                  console.warn(`CExtraAssetsImageUploader ${_} failed`, _),
                  {
                    bSuccess: !1,
                  }
                );
            } catch (_) {
              const _ = this.GetErrorsFromErrorResponse(_);
              return (
                console.warn(`CExtraAssetsImageUploader ${_} failed`, _, _),
                {
                  bSuccess: !1,
                  elErrorMessage: _,
                }
              );
            }
            return {
              bSuccess: !0,
              data: _,
            };
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, _._)("#ImageUpload_CancelRequest"));
          }
          GetImageOptions() {
            const _ = (_, _, _, _, _, _) => ({
                baseFilename: _,
                language: _,
                bNew: _,
                size: {
                  width: _,
                  height: _,
                },
                fileSize: _,
              }),
              _ = [];
            for (const _ of this.m_filesToUpload.filter(
              (_) => _.status == "pending" || (0, _._)(_.status),
            ))
              if (this.m_onlyAssetGroup)
                _.push(
                  _(
                    this.m_onlyAssetGroup.baseFilename,
                    _.language ?? _.Bhc,
                    !0,
                    _.width,
                    _.height,
                    _.file.size,
                  ),
                );
              else {
                const _ = (0, _._)(_.filename).baseFilename,
                  _ = _.GetCurrentImageOptionKey() ?? _;
                _.push(
                  _(_, _.language ?? _.Bhc, !0, _.width, _.height, _.file.size),
                ),
                  _ != _ &&
                    _.push(_(_, _.xPp, !0, _.width, _.height, _.file.size));
              }
            const _ = (_, _) =>
              _.languages.map((_) =>
                _(_.baseFilename, _, !1, _?.width ?? 0, _?.height ?? 0, 0),
              );
            let _ = this.m_rgExistingAssetGroups ?? [],
              _ = this.m_rgImageSizes ?? [];
            if (this.m_onlyAssetGroup) {
              const _ = _.findIndex(
                (_) => _.baseFilename == this.m_onlyAssetGroup.baseFilename,
              );
              (0, _._)(
                _ != -1,
                "onlyAssetGroup isn't in the existing assets list",
              ),
                (_ = [_[_]]),
                (_ = [_[_]]);
            }
            const _ = _._(_, _).flatMap(([_, _]) => _(_, _)),
              _ = _.concat(_).reduce((_, _) => {
                const _ = _.get(_.baseFilename) ?? [];
                return _.push(_), _.set(_.baseFilename, _), _;
              }, new Map()),
              _ = [];
            for (const _ of _.keys()) {
              const _ = _.get(_).filter((_) => _.language != _.xPp),
                _ = new Set(_.map((_) => _.language)).size,
                _ =
                  _ > 1
                    ? (0, _._)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeGroup",
                        _,
                        _,
                      )
                    : _,
                _ = new Map();
              for (let _ of _.filter((_) => !_.bNew).concat(
                _.filter((_) => _.bNew),
              ))
                _.set(_.language, _);
              const _ = Array.from(_.values()).filter((_) => !_.bNew),
                _ = _.length > 0 ? _[0].size : void 0,
                _ = _.filter((_) => _.bNew)._(0)?.size,
                _ = _.filter((_) => _.bNew).some(
                  (_) => _.size.width != _.width || _.size.height != _.height,
                ),
                _ = {
                  sKey: _,
                  fnGetLabelText: () => _,
                  width: _?.width ?? 0,
                  height: _?.height ?? 0,
                  bEnforceDimensions: !1,
                  groupName: _,
                  bMismatchedNewSizes: _,
                  rgExistingLanguages: _.filter((_) => !_.bNew).map(
                    (_) => _.language,
                  ),
                };
              _.push(_);
            }
            return (
              _.sort((_, _) =>
                _.sKey < _.sKey ? -1 : _.sKey > _.sKey ? 1 : 0,
              ),
              _
            );
          }
        }
        _([_._], _.prototype, "m_filesToUpload", 2),
          _([_._], _.prototype, "m_onlyAssetGroup", 2),
          _([_._], _.prototype, "m_rgExistingAssetGroups", 2),
          _([_._], _.prototype, "m_rgImageSizes", 2),
          _([_._], _.prototype, "GetUploadImages", 1),
          _([_._], _.prototype, "ClearImages", 1),
          _([_._], _.prototype, "DeleteUploadImage", 1),
          _([_._], _.prototype, "SetExistingAssetGroups", 1),
          _([_._], _.prototype, "SetOnlyAssetGroup", 1),
          _([_._], _.prototype, "AddImageForLanguage", 1);
        function _() {
          const _ = (0, _._)("ajaxgetextraassets"),
            _ = (0, _._)("ajaxgetuploadurlforasset"),
            _ = (0, _._)("ajaxbeginconvertassetasync"),
            _ = (0, _._)("ajaxcheckconvertassetsstatus"),
            _ = (0, _._)("ajaxtrytocompleteconvertasset"),
            _ = _.useMemo(
              () => ({
                strGetExtraAssets: _,
                strGetUploadUrlForAsset: _,
                strBeginConvert: _,
                strCheckConvertStatus: _,
                strCompleteConvert: _,
              }),
              [_, _, _, _, _],
            ),
            { regexInvalidFilenameCharacters: _ } = (0, _._)();
          return _.useMemo(() => new _(_, _), [_, _]);
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
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1;
        function _(_) {
          return _ && !_(_);
        }
        function _(_) {
          return _ && "extra_asset_name" in _;
        }
        function _(_) {
          if (_) return _(_) ? _.name : _.extra_asset_name;
        }
        function _(_, _) {
          if (!_?.encodings) return null;
          if (_.encodings.some((_) => _.extension.startsWith("poster."))) {
            let _;
            if (
              (_
                ? ((_ = _.encodings.find(
                    (_) => !_.extension.startsWith("poster."),
                  )),
                  document
                    .createElement("video")
                    .canPlayType("video/webm;codecs=vp9") &&
                    (_ = _.encodings?.find((_) => _.extension === "webm") ?? _))
                : (_ = _.encodings.find((_) =>
                    _.extension.startsWith("poster."),
                  )),
              _)
            )
              return {
                url: _.url,
                usage: _(_.extension),
              };
          }
          const _ = _.encodings[0];
          return _
            ? {
                url: _.url,
                usage: _(_.extension),
              }
            : null;
        }
        function _(_) {
          switch (_) {
            case "mp4":
            case "webm":
              return _;
          }
          return _;
        }
        function _(_, _) {
          if (!_ || Object.keys(_).length == 0) return null;
          if (Object.keys(_).length == 1) return Object.values(_)._(0);
          let _ = _[(0, _.LgB)(_)];
          if (_) return _;
          const _ = _ == _.ZLm ? _.NFp : _.Bhc;
          return (_ = _[(0, _.LgB)(_)]), _ || (_ == _.xPp ? _[0] : null);
        }
        function _(_, _ = _.Bhc, _ = 0) {
          const _ = _(_, !1, _);
          return _ ? (0, _._)(_.url, _) : null;
        }
        function _(_, _, _ = _.Bhc) {
          if (!_) return;
          if (_(_))
            return {
              url: _.url,
              usage: _,
            };
          const _ = _(_.images, _);
          return _ ? _(_, _) : null;
        }
        function _(_, _ = _.Bhc) {
          return _ ? (_(_) ? _.name : _.alt_text?.[(0, _.LgB)(_)]) : void 0;
        }
        function _(_) {
          return (
            (_?.images && Object.keys(_.images).map((_) => (0, _.sfN)(_))) ?? []
          );
        }
        function _(_) {
          return _
            ? (_(_) ? _.name : _.extra_asset_name).replace(
                /^\{STEAM_APP_IMAGE\}\/extras\//,
                "",
              )
            : void 0;
        }
        function _(_) {
          return `{STEAM_APP_IMAGE}/extras/${_}`;
        }
        const _ =
          "image/png, image/jpeg, image/gif, image/webp, video/mp4, video/webm";
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
        const _ = "v_StoreAdminLanguageChange",
          _ = _.createContext(void 0);
        function _(_) {
          const [_, _] = _.useState(),
            _ = _.useMemo(
              () => ({
                strActiveLanguage: _,
                setActiveLanguage: _,
              }),
              [_],
            );
          return (
            _.useEffect(() => {
              _ &&
                window.LocChangeControlsToLanguage &&
                window.LocChangeControlsToLanguage(_);
            }, [_]),
            (0, _._)(
              window,
              _,
              _.useCallback((_) => {
                _.detail.strLanguage && _(_.detail.strLanguage);
              }, []),
            ),
            (0, _.jsx)(_.Provider, {
              value: _,
              children: _.children,
            })
          );
        }
        function _(_, _, _, _) {
          const _ = _.useMemo(() => Array.from(_.keys()), [_]),
            [_] = _.useState(() => {
              const _ = new Map(_);
              return new Map(_.map((_) => [_, (0, _._)(_.get(_) || "")]));
            }),
            _ = _.useContext(_),
            [_, _] = _.useState(() => _(_.size ? _ : _)),
            _ = _?.strActiveLanguage ?? _,
            _ = _.useCallback(
              (_) => {
                _?.setActiveLanguage(_), _(_);
              },
              [_],
            ),
            _ = (0, _.jsx)(_, {
              mapLanguages: _,
              mapValues: _,
              strActiveLanguage: _,
              setActiveLanguage: _,
            }),
            _ =
              !!(_ && _) &&
              (0, _.jsx)(_, {
                rgLanguages: _,
                mapValues: _,
                namePrefix: _,
                rgPath: _,
              });
          return {
            strActiveLanguage: _,
            mapValues: _,
            rctLanguageSelect: _,
            rgLanguages: _.map(_.sfN),
            rctHiddenInputs: _,
            setActiveLanguage: _,
          };
        }
        function _(_) {
          const {
              mapLanguages: _,
              mapValues: _,
              strActiveLanguage: _,
              setActiveLanguage: _,
            } = _,
            _ = _.useMemo(() => {
              let _ = [];
              return (
                _.forEach((_, _) => {
                  _.push({
                    data: _,
                    label: (0, _.jsx)(_, {
                      strLocLanguage: _,
                      value: _.get(_),
                    }),
                  });
                }),
                _
              );
            }, [_, _]),
            _ = _.useCallback((_) => _(_.data), [_]);
          return (0, _.jsx)(_._, {
            strClassName: _.LanguageSelect,
            onChange: _,
            selectedOption: _,
            rgOptions: _,
          });
        }
        function _(_) {
          const { strLocLanguage: _, value: _ } = _,
            [_, _] = _.useState(() => !!_?.Value?.trim()),
            _ = _.useCallback((_) => _(!!_.trim()), []);
          return (
            (0, _._)(_, _),
            _.useEffect(() => _(_.Value), [_, _]),
            (0, _.jsx)("span", {
              className: (0, _._)(_.LanguageOption, _ && _.HasValue),
              children: _,
            })
          );
        }
        function _(_) {
          const { rgLanguages: _, mapValues: _, namePrefix: _, rgPath: _ } = _;
          return _.map((_) =>
            (0, _.jsx)(
              _,
              {
                language: _,
                value: _.get(_),
                namePrefix: _,
                rgPath: _,
              },
              _,
            ),
          );
        }
        const _ = _.memo(function (_) {
          const { language: _, value: _, namePrefix: _, rgPath: _ } = _,
            _ = (0, _._)(_) || "",
            _ = _ + [..._, _].map((_) => `[${_}]`).join("");
          return (0, _.jsx)("input", {
            type: "hidden",
            name: _,
            value: _,
          });
        });
        function _(_) {
          return _.has(_._.LANGUAGE)
            ? _._.LANGUAGE
            : _.has("english")
              ? "english"
              : _.keys().next().value;
        }
        function _() {
          const _ = _.useContext(_);
          return (0, _.sfN)(_?.strActiveLanguage, _.Bhc);
        }
        function _(_) {
          const {
              strActiveLanguage: _,
              mapValues: _,
              rctLanguageSelect: _,
              setActiveLanguage: _,
            } = _(_, [], null, null),
            _ = (0, _.sfN)(_, _.Bhc);
          return (
            _.useEffect(() => {
              _._.Get().SetCurEditLanguage(_);
            }, [_]),
            (0, _._)(_._.Get().GetCallback(), (_) => _((0, _.LgB)(_))),
            {
              strActiveLanguage: _,
              eActiveLang: _,
              rctLanguageSelect: _,
              mapValues: _,
            }
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            StoreAppPageHeader: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          m_nodes = [];
          m_schema;
          m_bConvertNewlinesToBR;
          m_fnProcessText;
          constructor(_, _, _) {
            (this.m_schema = _),
              (this.m_bConvertNewlinesToBR = _?.bConvertNewlinesToBR ?? !1);
            const _ = _ && "mark" in _;
            this.m_fnProcessText = _ ? void 0 : _?.fnProcessText;
          }
          AppendText(_, _) {
            _.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(_))
                : this.m_nodes.push(...this.TextNode(_)));
          }
          AppendNode(_) {
            this.m_nodes.push(_);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(_) {
            const _ = [];
            let _ = 0;
            for (
              let _ = _.indexOf(
                `
`,
                _,
              );
              _ !== -1;
              _ = _.indexOf(
                `
`,
                _,
              )
            )
              _ != _ && _.push(...this.TextNode(_.substring(_, _))),
                _.push(this.m_schema.nodes.hard_break.createChecked()),
                (_ = _ + 1);
            return _ < _.length && _.push(...this.TextNode(_.substring(_))), _;
          }
          TextNode(_) {
            const _ = this.m_fnProcessText && this.m_fnProcessText(_);
            return _ || [this.m_schema.text(_)];
          }
        }
        function _(_) {
          return _.filter((_) => _.isText)
            .map((_) => _.text)
            .join();
        }
        function _(_) {
          let _ = "";
          return (
            _.descendants((_) => {
              _.isText && (_ += _.text);
            }),
            _
          );
        }
        class _ extends _._ {
          m_schemaConfig;
          m_mapPMBBNodes = new Map();
          m_bUseBackslashEscapes;
          constructor(_, _) {
            super(_.bbcode_dictionary, (_) => {
              const _ = _?.tag && _.bbcode_dictionary.get(_.tag);
              return new _(
                _.pm_schema,
                _,
                _ && "Constructor" in _ ? _.Constructor : void 0,
              );
            }),
              (this.m_schemaConfig = _),
              (this.m_bUseBackslashEscapes = _?.bUseBackslashEscapes ?? !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((_) => {
                "node" in _.Constructor &&
                  this.m_mapPMBBNodes.set(
                    _.Constructor.node.name,
                    _.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(_) {
            const _ = this.Parse(
              _,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(_._.fromArray(_)),
            );
          }
          TryCreateNode(_, _, _) {
            let _ = _._.from(_),
              _;
            if (
              !_.node.validContent(_) &&
              (_.node.isInline ||
                (_ = _._.from(
                  _.filter((_) =>
                    _.isText && _.text.match(/^\s*$/)
                      ? !1
                      : !(
                          _.type == this.schema.nodes.hard_break &&
                          !_.node.validContent(_._.from(_))
                        ),
                  ),
                )),
              !_.node.validContent(_))
            ) {
              const _ = _.acceptNode;
              _ = [];
              let _ = [],
                _ = !1,
                _ = !1;
              for (let _ = 0; _ < _.childCount; _++) {
                const _ = _.child(_),
                  _ = _._.from(_),
                  _ = _.node.validContent(_);
                !_ && (_ || _?.validContent(_))
                  ? (_ || (_ = !0), _.push(_))
                  : ((_ = !0), _.push(_));
              }
              if ((console.assert(!_ || !!_), _ && _)) {
                _.isBlock &&
                  _.length > 1 &&
                  _[_.length - 1].type == this.schema.nodes.hard_break &&
                  (_ = _.slice(0, -1));
                const _ = this.m_mapPMBBNodes.get(_.name);
                (0, _._)(
                  _,
                  `Indicated acceptNode type ${_.name} for ${_.node.name} missing`,
                );
                let _;
                try {
                  _
                    ? (_ = this.TryCreateNode(_, _, void 0))
                    : (_ = _.createChecked(void 0, _));
                } catch (_) {
                  console.error(_), (_ = []), (_ = [..._, ..._]);
                }
                _ = _._.from(_);
              } else _ = _._.from(_);
            }
            try {
              const _ =
                _.node.createAndFill(_, _) || _.node.createChecked(_, _);
              return _ ? [_, ..._] : _;
            } catch {
              return (
                (0, _._)(
                  !1,
                  `Invalid content for node type ${_.node.name}, removing and promoting children.`,
                ),
                _
              );
            }
          }
          BBNodeToPMNode(_, _, ..._) {
            let _ = _.BBArgsToAttrs ? _.BBArgsToAttrs(_.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in _ &&
                  _.convertContentToAttr &&
                  ((!_ || !_[_.convertContentToAttr]) &&
                    (_ = {
                      ...(_ || {}),
                      [_.convertContentToAttr]: _(_),
                    }),
                  "node" in _ && (_ = [])),
                "node" in _)
              )
                return this.TryCreateNode(_, _, _);
              {
                const _ = _.mark.create(_);
                return _.map((_) => this.RecursivelyApplyMark(_, _));
              }
            } catch (_) {
              return (
                console.error(`Error parsing [${_.tagname}] tag: ${_}`, _), []
              );
            }
          }
          RecursivelyApplyMark(_, _) {
            if (_.isText || _.type.allowsMarkType(_.type))
              return _.mark([..._.marks, _]);
            {
              const _ = [];
              return (
                _.descendants(
                  (_) => (_.push(this.RecursivelyApplyMark(_, _)), !1),
                ),
                _.type.create(_.attrs, _, _.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(_) {
            const _ = new Map(),
              _ = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((_) => {
              _.acceptNode && _.set(_.acceptNode.name, _.node);
            });
            const _ = [],
              _ = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(_, _) {
                  return (
                    this.nodeType && _ != this.nodeType && this.emit(),
                    (this.nodeType = _),
                    this.nodes.push(_),
                    !0
                  );
                },
                emit(_ = !1) {
                  const _ = this.nodeType || (_ ? _.nodes.paragraph : void 0);
                  _ && (_.push(_.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              _.forEach((_) => {
                const _ = _.type == _.nodes.hard_break,
                  _ = _._.from(_);
                if (_ || _.topNodeType.validContent(_)) {
                  const _ = _ && _.nodes.length > 0;
                  _.emit(),
                    _
                      ? _ || _.push(_.nodes.paragraph.createChecked())
                      : _.push(_);
                } else {
                  let _;
                  if (
                    (_.nodes.paragraph.validContent(_)
                      ? (_ = _.nodes.paragraph)
                      : (_ = _.get(_.type.name)),
                    _)
                  )
                    _.accumulate(_, _);
                  else {
                    (0, _._)(
                      !1,
                      `Couldn't accept ${_.type.name} at root of document, converting to paragraph`,
                    );
                    const _ = _(_);
                    _ && _.accumulate(_.nodes.paragraph, _.text(_));
                  }
                }
              }),
              (_.nodes.length || !_.length) && _.emit(!0),
              _._.from(_)
            );
          }
        }
        function _(_, _, _) {
          const _ = {
            schema: _.pm_schema,
            config: _.pm_to_bbcode_config,
            bUseBackslashEscapes: _?.bUseBackslashEscapes ?? !0,
          };
          return _(_, _, [], !1);
        }
        function _(_, _, _, _) {
          const { schema: _, config: _ } = _;
          let _ = _.marks,
            _ = "";
          const _ = _.mapNodes.get(_.type),
            { tag: _, args: _ } = _(_, _);
          _ == "emoticon"
            ? (_ += ":")
            : _ && (_ += (0, _._)(_, _, _?.bVerbatimArgs));
          const _ = _ || !!_?.bVerbatimContent;
          let _ = !1;
          return (
            _.content.forEach((_) => {
              if (
                (([_, _] = _(_, _, _.marks, _)),
                ([_, _] = _(_, _, _.marks, _)),
                _.type.isText)
              ) {
                const _ = _.text || "";
                _ += _ || !_.bUseBackslashEscapes ? _ : (0, _._)(_);
              } else if (_.type == _.nodes.hard_break)
                _ += `
`;
              else {
                const _ = _(_, _);
                _ &&
                  _ &&
                  (_ += `
`),
                  (_ += _(_, _, _, _)),
                  (_ = _);
                return;
              }
              _ = !1;
            }),
            ([_] = _(_, _, _, _)),
            _ == "emoticon" ? (_ += ":") : _ && (_ += (0, _._)(_)),
            _
          );
        }
        function _(_, _) {
          return _.type.isBlock && !_(_.mapNodes.get(_.type), _).tag;
        }
        function _(_, _, _, _) {
          const _ = [];
          for (const _ of _) _.indexOf(_) === -1 && _.push(_);
          if (!_.length) return [_, _];
          const _ = _.slice();
          for (
            ;
            _.length &&
            ((0, _._)(_.length, "no marks left to close"), !!_.length);
          ) {
            const _ = _.pop(),
              _ = _.mapMarks.get(_.type),
              { tag: _ } = _(_, _);
            _ += (0, _._)(_);
            const _ = _.indexOf(_);
            _ != -1 && _.splice(_, 1);
          }
          return [_, _];
        }
        function _(_, _, _, _) {
          let _;
          for (const _ of _)
            if (_.indexOf(_) === -1) {
              _ || (_ = _.slice());
              const _ = _.mapMarks.get(_.type);
              if (((0, _._)(_, "mark missing bbtag"), _)) {
                _.push(_);
                const { args: _, tag: _ } = _(_, _);
                _ += (0, _._)(_, _);
              }
            }
          return [_, _ ?? _];
        }
        function _(_, _) {
          if (_ && _.AttrsToBBArgs) {
            const { tag: _ = _.tag, args: _ = {} } = _.AttrsToBBArgs(
              _.attrs,
              _,
            );
            return {
              tag: _,
              args: _,
            };
          }
          return {
            tag: _?.tag,
            args: {},
          };
        }
        function _(_, _) {
          if (_ && _.AttrsToBBArgs) {
            const { tag: _ = _.tag, args: _ = {} } = _.AttrsToBBArgs(
              _.attrs,
              _,
            );
            return {
              tag: _,
              args: _,
            };
          }
          return {
            tag: _?.tag,
            args: {},
          };
        }
        const _ = new _._("CProseMirrorState - OnChange");
        class _ {
          m_bbcode;
          m_currentDoc;
          m_bHasUncomittedChanges = !1;
          m_schemaConfig;
          m_bbcodeParser;
          m_bUseBackslashEscapes;
          m_onStateChangedCallbacks = new _._();
          m_fnCommitChanges;
          m_view;
          m_state;
          constructor(_, _, _, _) {
            const { parser: _, bUseBackslashEscapes: _ = !0 } = _ ?? {};
            (this.m_schemaConfig = _),
              (this.m_bUseBackslashEscapes = _),
              (this.m_bbcodeParser = new _(_, {
                ..._,
                bUseBackslashEscapes: _,
              })),
              (this.m_bbcode = _),
              (this.m_fnCommitChanges = _),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = _(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(_) {
            const _ = _(this.m_view?.state._ || this.m_state._);
            !_ ||
              !_.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(_)
                : (this.m_state = this.m_state.apply(_)));
          }
          get state() {
            return this.m_state;
          }
          get schemaConfig() {
            return this.m_schemaConfig;
          }
          get bbcodeParser() {
            return this.m_bbcodeParser;
          }
          get OnStateChangedCallbacks() {
            return this.m_onStateChangedCallbacks;
          }
          ConstructState() {
            const _ = new _._({
                key: _,
                view: (_) => (
                  console.assert(!this.m_view),
                  (this.m_view = _),
                  {
                    update: (_, _) => this.OnStateChange(_, _.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              _ = [(0, _._)(), _];
            return _._.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: _,
            });
          }
          InstallPlugin(_) {
            const _ = this.m_view ? this.m_view.state : this.m_state;
            return (
              _.plugins.includes(_) ||
                ((this.m_state = _.reconfigure({
                  plugins: [..._.plugins, _],
                })),
                this.m_view?.updateState(this.m_state)),
              () => {
                const _ = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = _.reconfigure({
                  plugins: _.plugins.filter((_) => _ != _),
                })),
                  this.m_view?.updateState(this.m_state);
              }
            );
          }
          OnStateChange(_, _) {
            (this.m_state = _),
              _.doc &&
                _.doc != _.doc &&
                ((this.m_currentDoc = _.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  _.doc,
                ));
          }
          ReplaceDocument(_) {
            this.m_bbcode != _ &&
              this.UpdateState((_) => {
                this.m_bbcode = _;
                const _ = this.m_bbcodeParser.ParseBBCode(_);
                return (
                  (_ = this.m_state._.replaceWith(
                    0,
                    this.m_state.doc.content.size,
                    _,
                  ).scrollIntoView()),
                  _
                );
              });
          }
        }
        function _(_, _) {
          (0, _._)(_?.OnStateChangedCallbacks, _);
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          const { msAutosaveTimeout: _ = 1e3, msMaxInterval: _ = _ * 10 } =
              _ || {},
            [_, _] = _.useState(!1),
            _ = _.useRef(0);
          return (
            _(
              _,
              _.useCallback(() => {
                (_.current = performance.now()), _(!0);
              }, []),
            ),
            _.useEffect(() => {
              if (!_ || !_) return;
              const _ = performance.now(),
                _ = (_ = !1) => {
                  _ = void 0;
                  const _ = performance.now(),
                    _ = _ - _.current;
                  _ || _ >= _ || _ - _ >= _
                    ? (console.log("Committing changes"),
                      _.CommitChanges(),
                      _(!1))
                    : (_ = window.setTimeout(_, _ - _));
                };
              let _ = window.setTimeout(_, _);
              return () => {
                _ && (window.clearTimeout(_), _(!0));
              };
            }, [_, _, _, _]),
            {
              bDirty: _,
            }
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.memo(function (_) {
          const { specs: _ } = _,
            [_, _] = _.useState([]),
            _ = _.useRef(0),
            _ = _.useCallback(
              (_) => (
                _((_) => [
                  ..._,
                  {
                    _: _.current++,
                    nodeView: _,
                  },
                ]),
                () => _((_) => _.filter((_) => _.nodeView != _))
              ),
              [],
            ),
            _ = _.useMemo(() => {
              const _ = {};
              return (
                _.filter(Boolean).forEach(
                  (_) => (_[_.type.name] = (_, _, _) => new _(_, _, _, _, _)),
                ),
                new _._({
                  props: {
                    nodeViews: _,
                  },
                })
              );
            }, [_, _]);
          return (
            (0, _._)(_),
            _.map(({ _: _, nodeView: _ }) =>
              (0, _.jsx)(
                _,
                {
                  nodeView: _,
                },
                _,
              ),
            )
          );
        });
        function _(_) {
          const {
              element: _,
              spec: _,
              getProps: _,
              onPropsChanged: _,
              actions: _,
              isSelected: _,
            } = _.nodeView,
            [_, _] = _.useReducer((_) => _ + 1, 0);
          return (
            _.useEffect(() => _.Register(_).Unregister, [_, _]),
            _.createPortal(
              _.createElement(_.component, {
                ..._(),
                selected: _(),
                ..._,
              }),
              _,
            )
          );
        }
        class _ {
          dom;
          contentDOM;
          onPropsChanged;
          node;
          selected;
          reactHost;
          destroy;
          constructor(_, _, _, _, _) {
            this.node = _;
            const _ = _.dom.ownerDocument,
              _ = _.createElement(_.type.isInline ? "span" : "div");
            this.dom = _;
            let _ = _;
            _.bEditableContent &&
              ((_ = this.reactHost =
                _.createElement(_.type.isInline ? "span" : "div")),
              (_.contentEditable = "false"),
              _.appendChild(_),
              (this.contentDOM = _.createElement(
                _.type.inlineContent ? "span" : "div",
              )),
              _.appendChild(this.contentDOM));
            const { selection: _ } = _.state;
            this.selected = _() >= _.from && _() + _.nodeSize <= _._;
            const _ = (_) => {
                const _ = _(_.state._, _, _());
                _ && _.dispatch(_);
              },
              _ = {
                update: _,
                setAttrs: (_, _) => _((_, _, _) => _.setNodeMarkup(_, _, _)),
                removeNode: () => _((_, _, _) => _.delete(_, _ + _.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => _.focus(), 1);
                },
              },
              _ = new _._();
            (this.destroy = _({
              element: _,
              spec: _,
              getProps: () => _.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: _,
              actions: _,
            })),
              (this.onPropsChanged = _.Dispatch.bind(_));
          }
          update(_, _, _) {
            return _.type != this.node.type
              ? !1
              : ((this.node = _), this.onPropsChanged(), !0);
          }
          ignoreMutation(_) {
            return this.contentDOM && this.contentDOM.contains(_.target)
              ? !1
              : this.reactHost
                ? !0
                : _.type != "selection";
          }
          stopEvent(_) {
            return !!this.reactHost && this.reactHost.contains(_.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function _(_) {
          return (_, _, _) => _.replaceWith(_, _ + _.nodeSize, _);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = 0) {
          return () => [
            _,
            {
              class: _,
            },
            _,
          ];
        }
        function _(_, _, _ = 0) {
          return [
            _,
            {
              class: _,
            },
            _,
          ];
        }
        function _(_, _) {
          return () => [
            _,
            {
              class: _().PreservedUnsupportedTag,
            },
            [
              "span",
              {
                class: _().Tag,
              },
              `[${_}]`,
            ],
            ["span", 0],
            [
              "span",
              {
                class: _().Tag,
              },
              `[/${_}]`,
            ],
          ];
        }
        function _(_) {
          return {
            tag: `h${_}`,
            BBArgsToAttrs: (_) => ({
              level: _,
              align: _.align || "left",
            }),
            AttrsToBBArgs: (_) => {
              let _ = {
                tag: `h${_.level}`,
                args: {},
              };
              return (
                _.align &&
                  _.align != "left" &&
                  _.args &&
                  (_.args.align = _.align),
                _
              );
            },
          };
        }
        function _(_) {
          return {
            tag: `h${_}`,
            getAttrs(_) {
              return {
                level: _,
                align: _.style.textAlign || "left",
              };
            },
          };
        }
        const _ = {
            paragraph: {
              attrs: {
                align: {
                  default: "left",
                },
              },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs(_) {
                    return {
                      align: _.style.textAlign || "left",
                    };
                  },
                },
              ],
              toDOM(_) {
                const _ = {
                  class: (0, _._)("pm_paragraph", _().Paragraph),
                };
                return (
                  _.attrs.align &&
                    _.attrs.align != "left" &&
                    (_.style = `text-align: ${_.attrs.align}`),
                  ["p", _, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (_) => ({
                  align: _.align,
                }),
                AttrsToBBArgs: (_) => {
                  let _ = {
                    args: {},
                  };
                  return (
                    _.align && _.align != "left" && (_.args.align = _.align), _
                  );
                },
              },
            },
            heading: {
              attrs: {
                level: {
                  default: 1,
                },
                align: {
                  default: "left",
                },
              },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(_),
              toDOM(_) {
                const _ = {
                  class:
                    `BB_Header${_.attrs.level} ` +
                    _()[`Header${_.attrs.level}`],
                };
                return (
                  _.attrs.align &&
                    _.attrs.align != "left" &&
                    (_.style = `text-align: ${_.attrs.align}`),
                  ["h" + _.attrs.level, _, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(_),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: {
                  default: null,
                },
                title: {
                  default: null,
                },
                style: {
                  default: void 0,
                },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(_) {
                    return {
                      src: _.getAttribute("src"),
                      title: _.getAttribute("title"),
                      alt: _.getAttribute("alt"),
                      style: _.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(_) {
                const { src: _, alt: _, title: _, style: _ } = _.attrs;
                return [
                  "img",
                  {
                    src: (0, _._)(_),
                    alt: _,
                    title: _,
                    class: (0, _._)(_().Image, {
                      [_().Image_Inline]: _ === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (_) => ({
                  src: _.src,
                  style: _.style ?? void 0,
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    src: _.src,
                    ...(_.style
                      ? {
                          style: _.style,
                        }
                      : {}),
                  },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: {
                  default: "",
                },
                mp4: {
                  default: "",
                },
                poster: {
                  default: "",
                },
                autoplay: {
                  default: !0,
                },
                controls: {
                  default: !1,
                },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(_) {
                    if (_.tagName !== "video") return;
                    const _ = _;
                    let _ = "",
                      _ = "";
                    for (const _ of _.querySelectorAll("source"))
                      _.type == "video/mp4"
                        ? (_ = _.src)
                        : _.type == "video/webm" && (_ = _.src);
                    return {
                      mp4: _,
                      webm: _,
                      poster: _.poster || "",
                      autoplay: !!_.autoplay,
                      controls: !!_.controls,
                    };
                  },
                },
              ],
              toDOM(_) {
                const {
                    webm: _,
                    mp4: _,
                    poster: _,
                    autoplay: _,
                    controls: _,
                  } = _.attrs,
                  _ = [];
                return (
                  _ &&
                    _.push([
                      "source",
                      {
                        src: (0, _._)(_),
                        type: "video/webm",
                      },
                    ]),
                  _ &&
                    _.push([
                      "source",
                      {
                        src: (0, _._)(_),
                        type: "video/mp4",
                      },
                    ]),
                  [
                    "video",
                    {
                      poster: (0, _._)(_),
                      autoPlay: !!_,
                      controls: !!_,
                      loop: !_ && !!_,
                    },
                    ..._,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (_) => ({
                  webm: _.webm,
                  mp4: _.mp4,
                  poster: _.poster,
                  autoplay: _.autoplay == "true",
                  controls: _.controls == "true",
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    webm: _.webm || "",
                    mp4: _.mp4 || "",
                    poster: _.poster || "",
                    autoplay: _.autoplay ? "true" : "false",
                    controls: _.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ..._._,
              content: "list_item+",
              group: "block",
              toDOM: _("ul", _().List),
              bbCode: {
                tag: "list",
              },
            },
            ordered_list: {
              ..._._,
              content: "list_item+",
              group: "block",
              toDOM: _("ol", _().OrderedList),
              bbCode: {
                tag: "olist",
              },
            },
            list_item: {
              ..._._,
              content: "paragraph block*",
              toDOM: _("li", _().ListItem),
              bbCode: {
                tag: "*",
                autocloses: !0,
              },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [
                {
                  tag: "pre",
                  preserveWhitespace: "full",
                },
              ],
              toDOM() {
                return [
                  "pre",
                  {
                    class: _().CodeBlock,
                  },
                  [
                    "code",
                    {
                      class: _().Code,
                    },
                    0,
                  ],
                ];
              },
              bbCode: {
                tag: "code",
              },
            },
          },
          _ = {
            strong: {
              parseDOM: [
                {
                  tag: "strong",
                },
                {
                  tag: "b",
                  getAttrs: (_) => _.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (_) => _.type.name == "strong",
                },
                {
                  style: "font-weight",
                  getAttrs: (_) => /^(bold(er)?|[5-9]\d{2,})$/.test(_) && null,
                },
              ],
              toDOM: _("b", (0, _._)("BB_Bold", _().Bold)),
              bbCode: {
                tag: "b",
              },
            },
            italic: {
              parseDOM: [
                {
                  tag: "i",
                },
                {
                  tag: "em",
                },
                {
                  style: "font-style=italic",
                },
                {
                  style: "font-style=normal",
                  clearMark: (_) => _.type.name == "em",
                },
              ],
              toDOM: _("i", (0, _._)("BB_Italic", _().Italic)),
              bbCode: {
                tag: "i",
              },
            },
            underline: {
              parseDOM: [
                {
                  tag: "u",
                },
                {
                  style: "text-decoration=underline",
                },
              ],
              toDOM: _("u", (0, _._)("BB_Underline", _().Underline)),
              bbCode: {
                tag: "u",
              },
            },
            strike: {
              parseDOM: [
                {
                  style: "text-decoration=line-through",
                },
              ],
              toDOM: _("span", (0, _._)("BB_Strike", _().Strike)),
              bbCode: {
                tag: "strike",
              },
            },
            code: {
              parseDOM: [
                {
                  tag: "code",
                },
              ],
              toDOM: _("code", (0, _._)("BB_Code", _().Code)),
              bbCode: {
                tag: "c",
              },
            },
            link: {
              attrs: {
                href: {},
                title: {
                  default: null,
                },
              },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(_) {
                    return {
                      href: (0, _._)(_.getAttribute("href") ?? ""),
                      title: _.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(_) {
                const { href: _, title: _ } = _.attrs;
                return [
                  "a",
                  {
                    href: (0, _._)(_),
                    title: _,
                    class: "BB_Link",
                  },
                  0,
                ];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (_) => ({
                  href: _[""],
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    "": _.href,
                  },
                }),
                convertContentToAttr: "href",
              },
            },
          },
          _ = {
            nodes: _,
            marks: _,
          },
          _ = {
            node: {},
            marks: {
              color: {
                attrs: {
                  color: {},
                },
                parseDOM: [
                  {
                    style: "color",
                    getAttrs: (_) => ({
                      color: _,
                    }),
                  },
                ],
                toDOM(_) {
                  return [
                    "span",
                    {
                      style: `color: ${_.attrs.color}`,
                      class: (0, _._)("BB_Color", _().Color),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "color",
                  BBArgsToAttrs: (_) => ({
                    color: _[""],
                  }),
                  AttrsToBBArgs: (_) => ({
                    args: {
                      "": _.color,
                    },
                  }),
                },
                inclusive: !0,
                excludes: "",
              },
              bgcolor: {
                attrs: {
                  color: {},
                },
                parseDOM: [
                  {
                    style: "bgcolor",
                    getAttrs: (_) => ({
                      color: _,
                    }),
                  },
                ],
                toDOM(_) {
                  return [
                    "span",
                    {
                      style: `background-color: ${_.attrs.color}`,
                      class: (0, _._)("BB_BGColor", _().BGColor),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "bgcolor",
                  BBArgsToAttrs: (_) => ({
                    color: _[""],
                  }),
                  AttrsToBBArgs: (_) => ({
                    args: {
                      "": _.color,
                    },
                  }),
                },
                inclusive: !0,
                excludes: "",
              },
            },
          },
          _ = {
            NoBorder: "noborder",
            EqualCells: "equalcells",
          },
          _ = _._({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: _().TableCell,
                setDOMAttr: (_, _) => {
                  _.class = _;
                },
              },
            },
          }),
          _ = {
            BBArgsToAttrs: (_) => {
              const _ = {};
              return (
                _.colspan && (_.colspan = parseInt(_.colspan)),
                _.rowspan && (_.rowspan = parseInt(_.rowspan)),
                _.colwidth &&
                  (_.colwidth = _.colwidth.split(",").map((_) => parseInt(_))),
                _
              );
            },
            AttrsToBBArgs: (_) => {
              const _ = {};
              return (
                _.colspan &&
                  _.colspan != 1 &&
                  (_.colspan = _.colspan.toString()),
                _.rowspan &&
                  _.rowspan != 1 &&
                  (_.rowspan = _.rowspan.toString()),
                _.colwidth && (_.colwidth = _.colwidth.join(",")),
                {
                  args: _,
                }
              );
            },
          },
          _ = {
            table: {
              ..._.table,
              toDOM: (_) =>
                _(
                  "table",
                  (0, _._)(
                    _().Table,
                    _.attrs.noborder && _().NoBorder,
                    _.attrs.equalcells && _().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [_.NoBorder]: {
                  default: !1,
                },
                [_.EqualCells]: {
                  default: !0,
                },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (_) => ({
                  noborder: !!_.noborder,
                  equalcells: !!_.equalcells,
                }),
                AttrsToBBArgs: (_, _) => {
                  const _ = {};
                  _.noborder && (_.noborder = "1"),
                    _.equalcells && (_.equalcells = "1");
                  const _ = _.child(0);
                  if (_) {
                    let _ = [];
                    for (let _ = 0; _ < _.childCount; _++) {
                      const _ = _.child(_).attrs;
                      _.colwidth ? _.push(..._.colwidth) : _.push(void 0);
                    }
                    _.colwidth = _.join(",");
                  }
                  return {
                    args: _,
                  };
                },
              },
            },
            table_row: {
              ..._.table_row,
              toDOM: _("tr", _().TableRow),
              bbCode: {
                tag: "tr",
              },
            },
            table_cell: {
              ..._.table_cell,
              bbCode: {
                ..._,
                tag: "td",
              },
            },
            table_header: {
              ..._.table_header,
              bbCode: {
                ..._,
                tag: "th",
              },
            },
          },
          _ = _.memo(function (_) {
            const { schema: _ } = _,
              _ = !!("table" in _.nodes && _.nodes.table.spec.tableRole);
            return (
              (0, _._)(
                _.useMemo(
                  () =>
                    _
                      ? _._({
                          View: _,
                        })
                      : void 0,
                  [_],
                ),
              ),
              (0, _._)(_.useMemo(() => (_ ? _._() : void 0), [_])),
              null
            );
          });
        class _ extends _._ {
          constructor(_, _) {
            super(_, _), this.SetTableClass(_);
          }
          update(_) {
            return super.update(_) ? (this.SetTableClass(_), !0) : !1;
          }
          SetTableClass(_) {
            this.table.className = (0, _._)(
              _().Table,
              _.attrs[_.NoBorder] && _().NoBorder,
              _.attrs[_.EqualCells] && _().EqualCells,
            );
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)(function (_) {
          const {
              pmState: _,
              className: _,
              refOnUpdate: _,
              refView: _,
              bSpellcheckEnabled: _ = !0,
              bSingleLine: _,
              panelProps: _,
              children: _,
            } = _,
            [_, _] = _.useState(),
            [_, _] = _.useState();
          _.useEffect(() => {
            !_ ||
              !_ ||
              _(
                new _._(_, {
                  state: _.state,
                }),
              );
          }, [_, _]),
            _.useEffect(() => () => _?.destroy(), [_]),
            (0, _._)(_, _);
          const { refDiv: _, onActivate: _, onGamepadDirection: _ } = _(_),
            _ = (0, _._)(_, _);
          if (!_) return null;
          const { schemaConfig: _, bbcodeParser: _ } = _;
          return (0, _.jsxs)(_._, {
            view: _,
            pmState: _,
            children: [
              (0, _.jsx)(
                _._,
                {
                  className: (0, _._)({
                    ["" + _]: !!_,
                    [_.Container]: !0,
                    [_.SingleLine]: !!_,
                  }),
                  ref: _,
                  spellCheck: _,
                  focusable: !0,
                  onActivate: _,
                  onOKActionDescription: (0, _._)("#UserGameNotes_Edit"),
                  onGamepadDirection: _,
                  ..._,
                },
                `editordiv_${_}`,
              ),
              (0, _.jsx)(_._, {
                refOnUpdate: _,
                schema: _.pm_schema,
                bSingleLine: _,
              }),
              (0, _.jsx)(_, {
                parser: _,
                schema: _.pm_schema,
              }),
              (0, _.jsx)(_, {
                schema: _.pm_schema,
              }),
              _,
            ],
          });
        });
        function _(_) {
          const _ = _.useRef(null),
            _ = (0, _._)(),
            _ = _.useCallback(() => {
              if ((_.ShowVirtualKeyboard(), !_)) return;
              if (!_.hasFocus()) {
                _.focus();
                let _ = _.dom.childNodes,
                  _ = _.current?.scrollTop ?? 0;
                for (let _ = 0; _ < _.length; ++_) {
                  let _ = _[_],
                    _ = _.offsetTop;
                  if (_ !== void 0 && _ >= _) {
                    let _ = _.getBoundingClientRect();
                    (0, _._)(_, _.left, _.top);
                    break;
                  }
                }
              }
            }, [_, _]),
            _ = _.useCallback((_) => _.currentTarget == _.target, []),
            _ = (0, _._)(_, void 0, void 0, _);
          return {
            refDiv: _,
            onActivate: _,
            onGamepadDirection: _,
          };
        }
        const _ = _.memo(function (_) {
          const { parser: _, schema: _ } = _;
          return (
            (0, _._)(
              _.useMemo(
                () =>
                  new _._({
                    props: {
                      transformPasted: (_, _) => _(_, _.nodes.hard_break, _),
                    },
                  }),
                [_, _],
              ),
            ),
            null
          );
        });
        function _(_, _, _) {
          let _ = !1;
          if (
            (_.content.forEach((_) => {
              _.type == _ && (_ = !0);
            }),
            !_)
          )
            return _;
          const _ = _.ConvertLineBreaksToParagraphs(_.content);
          return _._.maxOpen(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              closeModal: _,
              strTitle: _,
              onOK: _,
              strOKText: _,
              onCancel: _,
              strCancelText: _,
              bOKDisabled: _,
              bCancelDisabled: _,
              strClassNameContent: _ = "GenericFormDialog",
              children: _,
            } = _,
            _ = _.useCallback(() => {
              _ && _(), _();
            }, [_, _]),
            _ = _ ? () => {} : _;
          return (0, _.jsx)(_._, {
            onEscKeypress: _,
            children: (0, _.jsxs)(_._, {
              onSubmit: _,
              classNameContent: _,
              children: [
                (0, _.jsx)(_._, {
                  children: _,
                }),
                _,
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    strOKText: _,
                    bOKDisabled: _,
                    onCancel: _,
                    strCancelText: _,
                    bCancelDisabled: _,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_, _) {
          const [_, _] = React.useState(void 0),
            _ = React.useCallback(
              (_) => {
                const _ = _.state.selection;
                let _ = "",
                  _ = "",
                  { from: _, _: _ } = _;
                const _ = FindMarkAtPosition(_.state, _.marks.link, _.$from),
                  _ = !!_;
                _
                  ? ((_ = _.mark.attrs.href),
                    _.empty
                      ? ((_ = _.slice.content.textBetween(
                          0,
                          _.slice.content.size,
                        )),
                        (_ = _.from),
                        (_ = _._))
                      : ((_ = Math.max(_.from, _.from)),
                        (_ = Math.min(_._, _._)),
                        (_ = _.slice.content.textBetween(
                          _ - _.from,
                          _ - _.from,
                        ))))
                  : _.state.selection.empty ||
                    ((_ = _.state.doc.cut(
                      _.state.selection.from,
                      _.state.selection._,
                    ).textContent),
                    _.match(/^https?:\/\//) && (_ = _));
                let _ = {};
                if (_)
                  for (const _ in _) {
                    const _ = _[_],
                      _ = _ ? _.fnReadValue(_.mark) : _.defaultValue;
                    _[_] = _;
                  }
                _({
                  view: _,
                  strLinkText: _,
                  strLinkHref: _,
                  bIsUpdate: _,
                  addtlAttrs: _,
                  addtlAttrsValues: _,
                  from: _,
                  _: _,
                });
              },
              [_.marks.link, _],
            ),
            _ = _?.view,
            _ = React.useCallback(() => {
              window.setTimeout(() => _.focus(), 1), _(void 0);
            }, [_]),
            _ =
              _ &&
              jsx(SimpleModal, {
                active: !0,
                children: jsx(_, {
                  schema: _,
                  closeModal: _,
                  ..._,
                }),
              });
          return [_, _];
        }
        const _ = _.memo(function (_) {
          const {
              schema: _,
              strLinkText: _,
              strLinkHref: _,
              bIsUpdate: _,
              addtlAttrs: _,
              addtlAttrsValues: _,
              closeModal: _,
              view: _,
              from: _,
              _: _,
            } = _,
            [_, _] = _.useState(_),
            [_, _] = _.useState(_),
            _ = _.useRef(null),
            _ = _.useRef(null),
            [_, _] = _.useState(_),
            _ = () => {
              let _ = _.state._;
              const _ = {
                href: _,
              };
              for (const _ in _) _[_] = _[_];
              const _ = _.marks.link?.create(_),
                _ = _.text(_ || _, [_]);
              try {
                (_ = _.replaceRangeWith(_, _, _)),
                  (_ = _.setSelection(
                    _._.create(_.doc, _ + _.nodeSize, _ + _.nodeSize),
                  )),
                  _.dispatch(_);
              } catch (_) {
                console.error("Error during link insertion", _);
              }
              _();
            };
          _.useLayoutEffect(() => {
            _.current?.value?.length
              ? _.current?.value?.length
                ? (_.current.Focus(), _.current.element.select())
                : _.current.Focus()
              : _.current?.Focus();
          }, []);
          const _ = _
              ? (0, _._)("#FormattingToolbar_EditLink")
              : (0, _._)("#FormattingToolbar_InsertLink"),
            _ = _
              ? (0, _._)("#Button_Save")
              : (0, _._)("#FormattingToolbar_InsertLink");
          return (0, _.jsxs)(_, {
            onOK: _,
            closeModal: _,
            strTitle: _,
            strOKText: _,
            bOKDisabled: _.length == 0,
            children: [
              (0, _.jsx)(_._, {
                ref: _,
                value: _,
                onChange: (_) => _(_.currentTarget.value),
                label: (0, _._)("#FormattingToolbar_LinkText"),
              }),
              (0, _.jsx)(_._, {
                ref: _,
                value: _,
                placeholder: "https://",
                onChange: (_) => _(_.currentTarget.value),
                label: (0, _._)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              _ &&
                (0, _.jsx)(_, {
                  addtlAttrs: _,
                  values: _,
                  setValues: _,
                }),
            ],
          });
        });
        function _(_) {
          const { addtlAttrs: _, values: _, setValues: _ } = _;
          return (0, _.jsx)(_.Fragment, {
            children: Object.keys(_).map((_) =>
              (0, _.jsx)(
                _,
                {
                  attrName: _,
                  fnRender: _[_].fnRenderEditor,
                  value: _[_],
                  setValues: _,
                },
                _,
              ),
            ),
          });
        }
        const _ = _.memo(function (_) {
          const { attrName: _, fnRender: _, value: _, setValues: _ } = _,
            _ = _.useCallback(
              (_) =>
                _((_) => ({
                  ..._,
                  [_]: _,
                })),
              [_, _],
            );
          return _(_, _);
        });
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { schema: _, addtlAttrs: _, children: _ } = _,
            { callbacks: _, view: _ } = useToolbarContext(),
            [_, _] = React.useState(() => IsMarkActive(_.state, _.marks.link)),
            _ = React.useCallback(
              (_) => _(IsMarkActive(_.state, _.marks.link)),
              [_],
            );
          useCallbackList(_, _);
          const [_, _] = useInsertLinkModal(_, _);
          return jsxs(Fragment, {
            children: [
              _,
              jsx(ToggleButton, {
                onClick: () => _(_),
                toggled: _,
                tooltip: Localize("#FormattingToolbar_InsertLink"),
                keyboardShortcut: "Mod-k",
                children: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const [_, _] = _.useState(void 0),
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                _.current = _;
                const { state: _ } = _,
                  _ = _.selection;
                let { from: _, _: _, empty: _ } = _;
                const _ = _ ? _.marks.color : _.marks.bgcolor;
                let _ = "",
                  _ = "";
                const _ = _ ? _.$from : _.doc.resolve(_),
                  _ = (0, _._)(_, _, _),
                  _ = !!_;
                _
                  ? ((_ = _.mark.attrs.color),
                    _
                      ? ((_ = _.slice.content.textBetween(
                          0,
                          _.slice.content.size,
                        )),
                        (_ = _.from),
                        (_ = _._))
                      : ((_ = Math.max(_.from, _)),
                        (_ = Math.min(_._, _)),
                        (_ = _.slice.content.textBetween(
                          _ - _.from,
                          _ - _.from,
                        ))))
                  : _ || (_ = _.doc.cut(_, _).textContent);
                let _ = {};
                if (_)
                  for (const _ in _) {
                    const _ = _[_],
                      _ = _ ? _.fnReadValue(_.mark) : _.defaultValue;
                    _[_] = _;
                  }
                _({
                  viewRef: _,
                  strColor: _,
                  strTargetText: _,
                  bIsUpdate: _,
                  addtlAttrs: _,
                  addtlAttrsValues: _,
                  from: _,
                  _: _,
                });
              },
              [_, _, _.marks.bgcolor, _.marks.color],
            ),
            _ = _.useCallback(() => {
              const _ = _.current;
              window.setTimeout(() => {
                _ && !_.isDestroyed && _.focus();
              }, 1),
                _(void 0);
            }, []),
            _ =
              _ &&
              (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)(_, {
                  schema: _,
                  bColor: _,
                  closeModal: _,
                  ..._,
                }),
              });
          return [_, _];
        }
        function _(_) {
          if (_.startsWith("rgb")) {
            const _ = _.match(/\d+/g);
            if (!_ || _.length < 3) return "#000000";
            const [_, _, _] = _.map(Number);
            return (
              "#" +
              [_, _, _]
                .map((_) => {
                  const _ = _.toString(16);
                  return _.length === 1 ? "0" + _ : _;
                })
                .join("")
            );
          }
          return _;
        }
        function _(_) {
          const _ = _.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (_) {
            let [, _, _, _, _] = _;
            const _ = parseInt(_, 10),
              _ = parseInt(_, 10),
              _ = parseInt(_, 10);
            return `#${((1 << 24) + (_ << 16) + (_ << 8) + _).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const _ = _.memo(function (_) {
          const {
              schema: _,
              strColor: _,
              bIsUpdate: _,
              strTargetText: _,
              bColor: _,
              addtlAttrs: _,
              addtlAttrsValues: _,
              closeModal: _,
              viewRef: _,
              from: _,
              _: _,
            } = _,
            [_, _] = _.useState(_),
            _ = _.useRef(null),
            [_, _] = _.useState(_),
            _ = _.useCallback(() => {
              try {
                const _ = _.current;
                if (!_ || _.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: _, dispatch: _ } = _,
                  _ = _ ? _.marks.color : _.marks.bgcolor;
                if (!_) {
                  console.log("debug: no markType");
                  return;
                }
                if (!_ || !/^#[0-9a-fA-F]{6}$/.test(_)) {
                  console.log("debug: invalid color text: " + _);
                  return;
                }
                const _ = Math.max(0, Math.min(_, _.doc.content.size)),
                  _ = Math.max(0, Math.min(_, _.doc.content.size));
                if (_ > _) {
                  console.error("Invalid selection range:", _, _);
                  return;
                }
                const _ = _.create({
                  color: _,
                  ..._,
                });
                let _ = _._;
                _ === _
                  ? (_ = _.addStoredMark(_))
                  : ((_ = _.removeMark(_, _, _)),
                    (_ = _.addMark(_, _, _)),
                    (_ = _.setSelection(_._.create(_.doc, _)))),
                  _(_.scrollIntoView());
              } catch (_) {
                console.error(_);
              } finally {
                requestAnimationFrame(() => _());
              }
            }, [_, _, _, _, _, _.marks.bgcolor, _.marks.color, _, _]);
          _.useLayoutEffect(() => {
            _.current?.value?.length ? _.current.focus() : _.current?.focus();
          }, []);
          const _ = (0, _._)(
              _ ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            _ = _
              ? (0, _._)("#Button_Save")
              : (0, _._)(
                  _ ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, _.jsxs)(_._, {
            onClose: _,
            strTitle: _,
            children: [
              (0, _.jsx)(_._, {
                color: _,
                disableAlpha: !0,
                onChange: (_) => _(_(_)),
              }),
              (0, _.jsx)(_._, {
                strOKLabel: _,
                strCancelLabel: (0, _._)("#Button_Cancel"),
                onOK: () => {
                  _ && _.length > 0 && _();
                },
                onClose: _,
              }),
            ],
          });
        });
        function _(_) {
          const { schema: _, bColor: _, addtlAttrs: _, children: _ } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            [_, _] = _.useState(() =>
              (0, _._)(_.state, _ ? _.marks.color : _.marks.bgcolor),
            ),
            _ = _.useCallback(
              (_) => _((0, _._)(_.state, _ ? _.marks.color : _.marks.bgcolor)),
              [_, _],
            );
          (0, _._)(_, _);
          const [_, _] = _(_, _, _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsx)(_._, {
                onClick: () => _(_),
                toggled: _,
                tooltip: _
                  ? (0, _._)("#FormattingToolbar_Color")
                  : (0, _._)("#FormattingToolbar_BgColor"),
                children: _,
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Undo"),
                keyboardShortcut: "Mod-z",
                command: _._,
                children: (0, _.jsx)(_.VnB, {}),
              }),
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Redo"),
                keyboardShortcut:
                  _._.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: _._,
                children: (0, _.jsx)(_.Bal, {}),
              }),
            ],
          });
        }
        function _(_) {
          const { schema: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Bold"),
                keyboardShortcut: "Mod-b",
                mark: _.marks.strong,
                children: (0, _.jsx)(_.l4n, {}),
              }),
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Italic"),
                keyboardShortcut: "Mod-i",
                mark: _.marks.italic,
                children: (0, _.jsx)(_.UKJ, {}),
              }),
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Underline"),
                keyboardShortcut: "Mod-u",
                mark: _.marks.underline,
                children: (0, _.jsx)(_.Gj3, {}),
              }),
              "strike" in _.marks &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_Strike"),
                  keyboardShortcut: "Mod-Shift-x",
                  mark: _.marks.strike,
                  children: (0, _.jsx)(_.tI4, {}),
                }),
              "code" in _.marks &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_InlineCode"),
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: _.marks.code,
                  children: (0, _.jsx)(_.bmT, {}),
                }),
              "color" in _.marks &&
                (0, _.jsx)(_, {
                  schema: _,
                  bColor: !0,
                  children: (0, _.jsx)(_.r7n, {}),
                }),
              "bgcolor" in _.marks &&
                (0, _.jsx)(_, {
                  schema: _,
                  bColor: !1,
                  children: (0, _.jsx)(_.FId, {}),
                }),
            ],
          });
        }
        function _(_) {
          const { schema: _ } = _;
          return (0, _.jsx)(_._, {
            tooltip: (0, _._)("#FormattingToolbar_Paragraph"),
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: _.nodes.paragraph,
            children: (0, _.jsx)(_.iYj, {}),
          });
        }
        function _(_) {
          const { nodeTypes: _, attrs: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            [_, _] = _.useState(() => (0, _._)(_.state, _, _)),
            _ = _.useCallback((_) => _((0, _._)(_.state, _, _)), [_, _]);
          (0, _._)(_, _);
          const _ = _.useMemo(() => (0, _._)(_, _ ?? {}), [_, _]),
            _ = !!_;
          return (0, _.jsx)(_._, {
            ..._,
            command: _,
            toggled: _,
            children: _,
          });
        }
        function _(_) {
          const { schema: _ } = _;
          let _ = _.nodes.paragraph,
            _ = _.nodes.heading;
          const _ = _.useMemo(() => [_, _], [_, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                tooltip: (0, _._)("#FormattingToolbar_AlignLeft"),
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: _,
                attrs: {
                  align: "left",
                },
                children: (0, _.jsx)(_.K6w, {}),
              }),
              (0, _.jsx)(_, {
                tooltip: (0, _._)("#FormattingToolbar_AlignCenter"),
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: _,
                attrs: {
                  align: "center",
                },
                children: (0, _.jsx)(_.q8c, {}),
              }),
              (0, _.jsx)(_, {
                tooltip: (0, _._)("#FormattingToolbar_AlignRight"),
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: _,
                attrs: {
                  align: "right",
                },
                children: (0, _.jsx)(_.dWO, {}),
              }),
            ],
          });
        }
        function _(_) {
          const { schema: _, maxLevel: _ = 1, levels: _ } = _,
            _ = _ + _ - 1;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ <= 1 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel1"),
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 1,
                  },
                  children: (0, _.jsx)(_.jRw, {}),
                }),
              _ <= 2 &&
                _ >= 2 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel2"),
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 2,
                  },
                  children: (0, _.jsx)(_.qOW, {}),
                }),
              _ <= 3 &&
                _ >= 3 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel3"),
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 3,
                  },
                  children: (0, _.jsx)(_.x7X, {}),
                }),
              _ <= 4 &&
                _ >= 4 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel4"),
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 4,
                  },
                  children: (0, _.jsx)(_.qzO, {}),
                }),
              _ <= 5 &&
                _ >= 5 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel5"),
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 5,
                  },
                  children: (0, _.jsx)(_.jXA, {}),
                }),
            ],
          });
        }
        function _(_) {
          const { schema: _, showIndentButtonsAsNeeded: _ = !1 } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            { bullet_list: _, ordered_list: _, list_item: _ } = _.nodes,
            _ = _.useMemo(() => _._(_), [_]),
            _ = _.useMemo(() => _._(_), [_]),
            [_, _] = _.useState(() => _(_.state) || _(_.state));
          return (
            (0, _._)(
              _,
              _.useCallback(
                (_) => {
                  _(_(_.state) || _(_.state));
                },
                [_, _],
              ),
            ),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  tooltip: (0, _._)("#FormattingToolbar_BulletedList"),
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: _,
                  list_item: _,
                  children: (0, _.jsx)(_.JPq, {}),
                }),
                _ &&
                  (0, _.jsx)(_, {
                    tooltip: (0, _._)("#FormattingToolbar_OrderedList"),
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: _,
                    list_item: _,
                    children: (0, _.jsx)(_.jE0, {}),
                  }),
                (!_ || _) &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_._, {
                        tooltip: (0, _._)("#FormattingToolbar_OutdentList"),
                        keyboardShortcut: "Mod-[",
                        command: _,
                        children: (0, _.jsx)(_.LSz, {}),
                      }),
                      (0, _.jsx)(_._, {
                        tooltip: (0, _._)("#FormattingToolbar_IndentList"),
                        keyboardShortcut: "Mod-[",
                        command: _,
                        children: (0, _.jsx)(_.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { list_type: _, list_item: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            _ = _.useCallback((_) => (0, _._)(_.state, _) !== void 0, [_]),
            [_, _] = _.useState(() => _(_)),
            _ = _.useMemo(() => _._(_), [_]),
            _ = _.useMemo(() => _._(_), [_]);
          return (
            (0, _._)(
              _,
              _.useCallback(
                (_) => {
                  _(_(_));
                },
                [_],
              ),
            ),
            (0, _.jsx)(_._, {
              ..._,
              toggled: _,
              command: _ ? _ : _,
              children: _,
            })
          );
        }
        function _(_) {
          const { schema: _, addtlAttrs: _ } = _;
          return jsx(LinkMarkButton, {
            schema: _,
            addtlAttrs: _,
            children: jsx(GamepadUISVG.TextLink, {}),
          });
        }
        function _(_) {
          const { bSpellcheckEnabled: _, setSpellcheckEnabled: _ } = _;
          return jsx(ToggleButton, {
            tooltip: _
              ? Localize("#FormattingToolbar_DisableSpellcheck")
              : Localize("#FormattingToolbar_EnableSpellcheck"),
            toggled: _,
            onClick: () => _(!_),
            children: jsx(GamepadUISVG.SpellCheck, {}),
          });
        }
        class _ {
          m_ProseMirrorSchema;
          m_mapBBCodeDictionary = new Map();
          m_PMToBBCodeConfig = {
            mapNodes: new Map(),
            mapMarks: new Map(),
          };
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(_, _) {
            const _ = this.m_PMToBBCodeConfig.mapNodes.get(_.type);
            return _ && _.AttrsToBBArgs ? _.AttrsToBBArgs(_, _).args || {} : {};
          }
          constructor(_, _) {
            const _ = {
                doc: {
                  content: "block+",
                },
                text: {
                  group: "inline",
                },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [
                    {
                      tag: "br",
                    },
                  ],
                  toDOM() {
                    return ["br"];
                  },
                },
              },
              _ = new Map(),
              _ = new Map(),
              _ = _ ? new Set(_) : void 0;
            for (const _ in _.nodes) {
              const { bbCode: _, ..._ } = _.nodes[_],
                _ = _(_, _);
              _ && ((_[_] = _), _.set(_, _));
            }
            const _ = {};
            for (const _ in _.marks) {
              const { bbCode: _, ..._ } = _.marks[_];
              (!_ || _.has(_.tag)) && ((_[_] = _), _.set(_, _));
            }
            (this.m_ProseMirrorSchema = new _._({
              nodes: _,
              marks: _,
            })),
              _.forEach((_, _) => {
                const _ = this.m_ProseMirrorSchema.nodes[_],
                  _ = _.nodes[_],
                  _ = Array.isArray(_) ? _ : [_];
                let _;
                _.content == "list_item+"
                  ? (_ = this.m_ProseMirrorSchema.nodes.list_item)
                  : _.content?.indexOf("paragraph") != -1 &&
                    (_ = this.m_ProseMirrorSchema.nodes.paragraph),
                  _.forEach(
                    ({
                      tag: _,
                      BBArgsToAttrs: _,
                      AttrsToBBArgs: _,
                      convertContentToAttr: _,
                      bVerbatimArgs: _,
                      bVerbatimContent: _,
                      ..._
                    }) => {
                      this.m_mapBBCodeDictionary.set(_, {
                        Constructor: {
                          node: _,
                          BBArgsToAttrs: _,
                          convertContentToAttr: _,
                          acceptNode: _,
                        },
                        skipFollowingNewline: !0,
                        ..._,
                      });
                    },
                  );
                const {
                  tag: _,
                  AttrsToBBArgs: _,
                  bVerbatimArgs: _,
                  bVerbatimContent: _,
                } = _[0];
                this.m_PMToBBCodeConfig.mapNodes.set(_, {
                  tag: _,
                  AttrsToBBArgs: _,
                  bVerbatimArgs: _,
                  bVerbatimContent: _,
                });
              }),
              _.forEach((_, _) => {
                const _ = this.m_ProseMirrorSchema.marks[_],
                  { tag: _, BBArgsToAttrs: _, AttrsToBBArgs: _, ..._ } = _;
                this.m_mapBBCodeDictionary.set(_, {
                  Constructor: {
                    mark: _,
                    BBArgsToAttrs: _,
                  },
                  ..._,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(_, {
                    tag: _,
                    AttrsToBBArgs: _,
                  });
              });
          }
        }
        function _(_, _) {
          if (_)
            if (Array.isArray(_)) {
              const _ = _.filter((_) => _.has(_.tag));
              return _.length > 0 ? _ : void 0;
            } else return _.has(_.tag) ? _ : void 0;
          else return _;
        }
        const {
            paragraph: _,
            heading: _,
            bullet_list: _,
            list_item: _,
            image: _,
          } = _.nodes,
          { strong: _, italic: _, underline: _, link: _, strike: _ } = _.marks;
        function _(_) {
          return new _({
            nodes: {
              paragraph: _,
              heading: {
                ..._,
                attrs: {
                  level: {
                    default: 2,
                  },
                  align: {
                    default: "left",
                  },
                },
                parseDOM: [1, 2, 3, 4, 5, 6]
                  .map((_) => ({
                    tag: `h${_}`,
                    getAttrs(_) {
                      return {
                        level: 2,
                        align: _.style.textAlign || "left",
                      };
                    },
                  }))
                  .concat(
                    [1, 2, 3, 4, 5, 6].map((_) => ({
                      tag: `span[data-ccp-parastyle="heading ${_}"]`,
                      getAttrs(_) {
                        return {
                          level: 2,
                          align: _.style.textAlign || "left",
                        };
                      },
                    })),
                  ),
                bbCode: [2].map(_),
              },
              bullet_list: _,
              list_item: _,
              image: {
                ..._,
                toDOM: (_) => [
                  "img",
                  {
                    src: _(_.attrs.src),
                  },
                ],
              },
              table: {
                content: "tr+",
                group: "block",
                toDOM: _("table", "div"),
                bbCode: {
                  tag: "table",
                },
              },
              _: {
                content: "(th | td)+",
                toDOM: _("tr", "div"),
                bbCode: {
                  tag: "tr",
                },
              },
              _: {
                content: "paragraph block*",
                toDOM: _("th", "span"),
                bbCode: {
                  tag: "th",
                },
              },
              _: {
                content: "paragraph block*",
                toDOM: _("td", "span"),
                bbCode: {
                  tag: "td",
                },
              },
            },
            marks: {
              strong: _,
              italic: _,
              underline: _,
              strike: _,
              link: {
                ..._,
                toDOM: (_, _) => [
                  "a",
                  {
                    ..._.toDOM(_, _)[1],
                    title: (0, _._)(
                      "#StoreAdmin_GameDescription_LinksDisabled",
                    ),
                  },
                  0,
                ],
                parseDOM: void 0,
              },
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._(),
          _ = {
            parser: {
              bConvertNewlinesToBR: !0,
            },
          };
        function _(_) {
          const {
              language: _,
              languages: _,
              rctToolbarControls: _,
              mapValues: _,
              editorType: _,
              rctAboveEditor: _,
            } = _,
            _ = _.get(_),
            [_, _] = _.useState(),
            _ = _.useRef(void 0),
            _ = _((0, _.sfN)(_)),
            [_] = _.useState(() => new Map()),
            _ = _.useCallback(
              (_) => {
                _.has(_) || _.set(_, new _(_, _.Value, (_) => _.Set(_), _));
              },
              [_, _],
            ),
            [_, _] = _.useState();
          _.useEffect(() => {
            _(_), _(_.get(_));
          }, [_, _, _, _]);
          const _ = (0, _._)(_);
          _.useEffect(() => {
            _.get(_).ReplaceDocument(_);
          }, [_, _, _]),
            _(_, {
              msAutosaveTimeout: 5e3,
            }),
            _.useEffect(() => {
              window.DisableTooltipMutationObserver &&
                window.DisableTooltipMutationObserver(),
                (window.PHPReactPreSubmitCallbacks = _);
            }, []),
            (0, _._)(_, () => _?.CommitChanges()),
            _.useEffect(() => {
              _.current && _.current();
            }, [_, _]);
          const _ = (0, _.sfN)(_),
            _ = _ != "awards",
            _ = _.useCallback((_) => _(_, _, _, _), [_, _, _]);
          return (0, _.jsx)(_, {
            imageNodeType: _.pm_schema.nodes.image,
            activeLanguage: _,
            languages: _,
            children: (0, _.jsx)(_, {
              editorType: _,
              view: _,
              refUpdateToolbar: _,
              rctToolbarControls: _,
              schema: _.pm_schema,
              rctAboveEditor: _,
              children: (0, _.jsx)(_, {
                panelProps: {
                  lang: (0, _._)(_),
                  onBlur: () => _?.CommitChanges(),
                },
                className: _.EditorPanel,
                pmState: _,
                refOnUpdate: _,
                refView: _,
                children: (0, _.jsx)(_, {
                  schema: _,
                  activeLanguage: _,
                  mapValues: _,
                  allowAnimations: _,
                  updateDocument: _,
                }),
              }),
            }),
          });
        }
        function _(_, _, _, _) {
          _?.CommitChanges();
          for (const [_, _] of _) {
            const _ = _.get(_);
            _ && _.Value != _ && (_(_), _.Set(_));
          }
        }
        function _(_) {
          const {
              imageNodeType: _,
              activeLanguage: _,
              languages: _,
              children: _,
            } = _,
            _ = (0, _._)(),
            _ = _.useCallback(
              (_) => {
                let _,
                  _ = new Promise((_, _) => {
                    _ = {
                      file: _,
                      onComplete: (_) => {
                        _(
                          _.createChecked({
                            src: _,
                          }),
                        );
                      },
                      onCancel: () => _(void 0),
                      activeLanguage: _,
                      languages: _,
                    };
                  });
                const _ = _(_);
                return _.finally(() => _()), _;
              },
              [_, _, _, _],
            ),
            _ = _.useCallback(async (_) => {
              const _ = new URL(`${_._.PARTNER_BASE_URL}gfxproxy/externalgfx/`);
              return (
                _.searchParams.append("url", _),
                await (
                  await fetch(_, {
                    method: "GET",
                  })
                ).blob()
              );
            }, []);
          return (0, _.jsx)(_._, {
            ProcessFileUpload: _,
            FetchImageURL: _,
            children: (0, _.jsxs)("div", {
              children: ["	", _],
            }),
          });
        }
        var _ = ((_) => (
          (_[(_.k_PreviewDesktop = 1)] = "k_PreviewDesktop"),
          (_[(_.k_PreviewMobile = 2)] = "k_PreviewMobile"),
          (_[(_.k_PreviewGamepad = 3)] = "k_PreviewGamepad"),
          _
        ))(_ || {});
        function _(_) {
          const {
              editorType: _,
              view: _,
              refUpdateToolbar: _,
              rctToolbarControls: _,
              schema: _,
              children: _,
              rctAboveEditor: _,
            } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(1),
            _ = _.useCallback(
              (_) =>
                _.borderBoxSize.length > 0 &&
                _(_.borderBoxSize[0].blockSize > 300),
              [],
            ),
            _ = (0, _._)(_),
            _ = _ === "awards" && _ === 3;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                view: _,
                refUpdateToolbar: _,
                sticky: _,
                rctToolbarControls: _,
                schema: _,
                ePreviewMode: _,
                setPreviewMode: _,
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)({
                  [_.AboutTheGameArea]: !0,
                  [_.PreviewDesktop]: _ === 1,
                  [_.PreviewMobile]: _ === 2,
                  [_.PreviewGamepad]: _ === 3,
                  [_.Awards]: _ === "awards",
                }),
                ref: _,
                children: [
                  _,
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.PreviewInfo,
                      children: (0, _._)(
                        "#StoreAdmin_GameDescription_Awards_Gamepad_Unsupported",
                      ),
                    }),
                  _,
                ],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("h2", {
            className: _.StoreAppPageHeader,
            children: [
              _.children,
              (0, _.jsx)("div", {
                className: _.GradientRule,
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useRef(_);
          _.current = _;
          const _ = _.useRef(_);
          _.current = _;
          const _ = _.useRef(void 0);
          if (!_.current) {
            const _ = (_) => {
              const _ = _.current.find((_) => (0, _._)(_) === _);
              return (0, _._)(_, !0, _.current)?.url;
            };
            _.current = _(_);
          }
          return _.current;
        }
        function _(_) {
          const {
            view: _,
            refUpdateToolbar: _,
            rctToolbarControls: _,
            schema: _,
            sticky: _,
            ePreviewMode: _,
            setPreviewMode: _,
          } = _;
          return (0, _.jsxs)(_._, {
            refUpdateToolbar: _,
            view: _,
            children: [
              (0, _.jsxs)(_._, {
                className: (0, _._)(
                  _.GameDescriptionEditorToolbar,
                  _ && _.Sticky,
                ),
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)(_, {
                    schema: _,
                  }),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)(_, {
                    schema: _,
                  }),
                  (0, _.jsx)(_, {
                    schema: _,
                    maxLevel: 2,
                    levels: 1,
                  }),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)(_, {
                    schema: _,
                    showIndentButtonsAsNeeded: !0,
                  }),
                  "image" in _.nodes &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_._, {}),
                        (0, _.jsx)(_._, {
                          nodeType: _.nodes.image,
                        }),
                      ],
                    }),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)(_, {
                    schema: _,
                  }),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)(_._, {}),
                  _,
                ],
              }),
              (0, _.jsx)(_, {
                ePreviewMode: _,
                setPreviewMode: _,
              }),
            ],
          });
        }
        function _(_) {
          const { ePreviewMode: _, setPreviewMode: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.PreviewModeCtn,
            children: [
              (0, _.jsx)("div", {
                className: _.PreviewModeTitle,
                children: (0, _._)("#StoreAdmin_GameDescription_PreviewMode"),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.PreviewItem, {
                  [_.SelectedPreview]: _ === 1,
                }),
                onClick: () => _(1),
                children: (0, _._)(
                  "#StoreAdmin_GameDescription_PreviewMode_Deskop",
                ),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.PreviewItem, {
                  [_.SelectedPreview]: _ === 2,
                }),
                onClick: () => _(2),
                children: (0, _._)(
                  "#StoreAdmin_GameDescription_PreviewMode_Mobile",
                ),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.PreviewItem, {
                  [_.SelectedPreview]: _ === 3,
                }),
                onClick: () => _(3),
                children: (0, _._)(
                  "#StoreAdmin_GameDescription_PreviewMode_Gamepad",
                ),
              }),
            ],
          });
        }
        function _(_) {
          const {
              schema: _,
              activeLanguage: _,
              mapValues: _,
              allowAnimations: _,
              updateDocument: _,
            } = _,
            _ = _.useMemo(
              () => [
                {
                  type: _.pm_schema.nodes.image,
                  component: _._,
                  readProps: (_) => ({
                    src: _.attrs.src,
                    inLink: _.marks.some(
                      (_) => _.type == _.pm_schema.marks.link,
                    ),
                    activeLanguage: _,
                    mapValues: _,
                    allowAnimations: _,
                    fnUpdateDocument: _,
                  }),
                },
              ],
              [_, _, _, _, _],
            );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                specs: _,
              }),
              (0, _.jsx)(_._, {
                nodeType: _.pm_schema.nodes.image,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              hideModal: _,
              entries: _,
              isLoading: _,
              fnRefetch: _,
              mutateAltTextAsync: _,
              isMutatePending: _,
              fnGetImage: _,
            } = _,
            { bAppHasSteamChinaToolsEnabled: _ } = (0, _._)(),
            _ = _.useMemo(() => (0, _._)(_), [_]),
            {
              strActiveLanguage: _,
              eActiveLang: _,
              rctLanguageSelect: _,
              mapValues: _,
            } = (0, _._)(_),
            [_, _] = _.useState(new Map()),
            [_, _] = _.useState(new Map());
          _.useEffect(() => {
            const _ = new Map(),
              _ = new Map();
            for (const _ of _)
              _.set(_.key, structuredClone(_)),
                _.set(_.key, structuredClone(_));
            _(_), _(_);
          }, [_]);
          const _ = _.useCallback(() => {
            for (const _ of _.keys()) {
              const _ = Array.from(_.values()).some(
                (_) => _.mapAltText && _ in _.mapAltText,
              );
              _.get(_).Set(_ ? "yes" : "");
            }
          }, [_, _, _]);
          _.useEffect(() => _(), [_]);
          const _ = (0, _._)(),
            _ = (_) => _.get(_)?.mapAltText?.[_] ?? "",
            _ = (_, _) => {
              let _ = _.get(_);
              _ || ((_ = {}), _.set(_, _)),
                _.mapAltText || (_.mapAltText = {}),
                _.trim().length > 0
                  ? (_.mapAltText[_] = _)
                  : delete _.mapAltText[_],
                _(),
                _();
            },
            _ = _._.set(),
            _ = async () => {
              try {
                _.clear();
                for (const [_, _] of _.entries()) {
                  if (_(_.mapAltText, _.get(_).mapAltText)) continue;
                  const _ = {
                    ..._.mapAltText,
                  };
                  for (const _ of Object.keys(_.get(_).mapAltText ?? {}))
                    _ in _.mapAltText || (_[_] = "");
                  (await _(_, _))
                    ? _.set(_, {
                        ..._,
                      })
                    : _.add(_);
                }
                _?.(), _.size == 0 && _();
              } catch (_) {
                console.error("Some mutations failed", _);
              }
            },
            _ = _ || _,
            _ = () => {
              _ || _();
            },
            _ = Array.from(_.values()).some((_) => _.caption != null);
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_._, {
              onEscKeypress: _,
              bDisableBackgroundDismiss: _,
              children: (0, _.jsxs)(_._, {
                classNameContent: _.AltTextDialogContent,
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _._)("#StoreAdmin_EditAltText_Title"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.AltTextDialogDescription,
                    children: [
                      (0, _.jsxs)("div", {
                        children: [
                          (0, _.jsx)("p", {
                            children: (0, _._)("#StoreAdmin_EditAltText_Desc"),
                          }),
                          (0, _.jsx)("p", {
                            children: (0, _._)("#StoreAdmin_EditAltText_Desc2"),
                          }),
                        ],
                      }),
                      _,
                    ],
                  }),
                  (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsxs)("table", {
                        className: (0, _._)(_.AltTextGrid),
                        children: [
                          (0, _.jsx)("thead", {
                            className: (0, _._)(_.AltTextHeader),
                            children: (0, _.jsxs)("tr", {
                              children: [
                                (0, _.jsx)("th", {
                                  className: (0, _._)(_.AltTextImage),
                                }),
                                _ &&
                                  (0, _.jsx)("th", {
                                    className: (0, _._)(_.AltTextName),
                                    children: (0, _._)(
                                      "#StoreAdmin_EditAltText_ColAssetName",
                                    ),
                                  }),
                                (0, _.jsx)("th", {
                                  className: (0, _._)(_.AltTextInput),
                                  children: (0, _._)(
                                    "#StoreAdmin_EditAltText_ColAltText",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)("tbody", {
                            children:
                              !_ &&
                              Array.from(_.values()).map((_) =>
                                (0, _.jsx)(
                                  _,
                                  {
                                    lang: _,
                                    caption: _.caption,
                                    image: _(_.key, _),
                                    altText: _(_.key),
                                    setAltText: (_) => _(_.key, _),
                                    failedMutate: _.has(_.key),
                                    showCaptionColumn: _,
                                  },
                                  `${_.key}-${_}`,
                                ),
                              ),
                          }),
                        ],
                      }),
                      _ && (0, _.jsx)(_._, {}),
                    ],
                  }),
                  (0, _.jsxs)(_._, {
                    children: [
                      _.size > 0 &&
                        (0, _.jsx)("div", {
                          className: _.AltTextMutateFailed,
                          children: (0, _._)(
                            "#StoreAdmin_EditAltText_MutateFailed",
                          ),
                        }),
                      (0, _.jsx)(_._, {
                        onCancel: _,
                        onOK: (_) => {
                          _.preventDefault(), _();
                        },
                        bOKDisabled: _ || _(_, _),
                        bCancelDisabled: _,
                        strOKText: (0, _._)("#StoreAdmin_EditAltText_Save"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const {
              lang: _,
              image: _,
              caption: _,
              altText: _,
              setAltText: _,
              failedMutate: _,
              showCaptionColumn: _,
            } = _,
            [_, _] = _.useState(_),
            _ = _ === "#decorative-only",
            [_, _] = _.useState(_ ? "" : _),
            _ = (_, _) => {
              _(_), _(_), _ || _(_);
            };
          return (0, _.jsxs)("tr", {
            className: _.AltTextRow,
            children: [
              (0, _.jsx)("td", {
                className: _.AltTextImage,
                children: _,
              }),
              _ &&
                (0, _.jsxs)("td", {
                  className: _.AltTextName,
                  children: [
                    _,
                    _ &&
                      (0, _.jsx)("div", {
                        className: _.AltTextFailed,
                        children: (0, _._)(
                          "#StoreAdmin_EditAltText_EntryMutateFailed",
                        ),
                      }),
                  ],
                }),
              (0, _.jsxs)("td", {
                className: _.AltTextInput,
                children: [
                  (0, _.jsx)(_._, {
                    type: "text",
                    placeholder: _
                      ? (0, _._)(
                          "#StoreAdmin_EditAltText_PlaceholderDecorative",
                        )
                      : (0, _._)(
                          "#StoreAdmin_EditAltText_Placeholder",
                          (0, _._)(`#Language_${(0, _.LgB)(_)}`),
                        ),
                    value: _ ? "" : _,
                    onChange: (_) => _(_.target.value, !1),
                    disabled: _,
                  }),
                  (0, _.jsx)(_._, {
                    checked: _,
                    onChange: (_) => _(_ ? "#decorative-only" : _, !0),
                    label: (0, _._)("#StoreAdmin_EditAltText_Presentational"),
                    tooltip: (0, _._)(
                      "#StoreAdmin_EditAltText_Presentational_ttip",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_, _) {
          const _ = _ ? Object.keys(_) : [],
            _ = _ ? Object.keys(_) : [];
          return _.length !== _.length ? !1 : _.every((_) => _[_] === _[_]);
        }
        function _(_, _) {
          if (_.size !== _.size) return !1;
          for (const [_, _] of _) {
            const _ = _.get(_);
            if (!_ || !_(_.mapAltText, _.mapAltText)) return !1;
          }
          return !0;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgUploads: _ } = _,
            _ = _.useMemo(() => new Set(), []),
            _ = _.findIndex(({ _: _ }) => !_.has(_)),
            _ = (0, _._)(),
            _ = (_) => {
              _.add(_), _();
            },
            _ = (_) => {
              _.delete(_), _();
            };
          return _.map(({ _: _, upload: _ }, _) =>
            (0, _.jsx)(
              _,
              {
                active: _ == _,
                upload: _,
                fnUploadPrepared: () => _(_),
                fnUploadComplete: () => _(_),
              },
              _,
            ),
          );
        }
        function _(_) {
          const {
              upload: _,
              active: _,
              fnUploadPrepared: _,
              fnUploadComplete: _,
            } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(void 0);
          _.useEffect(() => {
            _ &&
              (_(_.file) ||
                _(
                  (0, _._)(
                    "#StoreAdmin_UploadError_UnsupportedFileType",
                    _.file.name,
                  ),
                )),
              _(_);
          }, [_, _]);
          const [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = _(),
            _ = async (_, _) => {
              _(), _(!0);
              try {
                if (!(await _.AddImageForLanguage(_.file, _))) {
                  _((0, _._)("#StoreAdmin_UploadError_UnableToGetFileInfo"));
                  return;
                }
                const _ = (await _.UploadAllImages())[0];
                if (!_ || !_.bSuccess) {
                  _(
                    _?.image?.message
                      ? (0, _._)(
                          "#StoreAdmin_UploadError_Generic",
                          _.image.message,
                        )
                      : (0, _._)("#StoreAdmin_UploadError_Unknown"),
                  );
                  return;
                }
                _(_.uploadResult), _.onComplete((0, _._)(_));
              } finally {
                _(!1), _();
              }
            };
          return _
            ? _
              ? (0, _.jsx)(_._, {
                  active: !0,
                  children: (0, _.jsx)(_._, {
                    bAlertDialog: !0,
                    strTitle: (0, _._)("#Error_Generic"),
                    strDescription: _,
                    strOKButtonText: (0, _._)("#Button_OK"),
                    closeModal: () => _.onCancel(),
                  }),
                })
              : (0, _.jsx)(_, {
                  upload: _,
                  isUploading: _,
                  doUpload: _,
                })
            : null;
        }
        function _(_) {
          const { upload: _, isUploading: _, doUpload: _ } = _,
            { file: _, onCancel: _ } = _,
            { rgExtraAssets: _, regexInvalidFilenameCharacters: _ } = _(),
            _ = _.useCallback(
              (_) => _?.replace(_, "_").toLowerCase() ?? "",
              [_],
            ),
            { baseFilename: _, language: _ } = (0, _._)(_.name, _.xPp),
            [_, _] = _.useState(() => _(_)),
            _ = _.useMemo(() => _(_), [_, _]),
            _ = (0, _._)(_.languages),
            _ = _(
              _.map((_) => _.data),
              _,
              _.activeLanguage,
            ),
            [_, _] = _.useState(_),
            [_, _] = _.useState(void 0),
            _ = _.name;
          _.useEffect(() => {
            _(() => {
              if (!_) return;
              const { baseFilename: _ } = (0, _._)(_),
                _ = _.find((_) => (0, _._)(_) == _);
              return _ ? ((0, _._)(_) ? _ : _.images?.[(0, _.LgB)(_)]) : void 0;
            });
          }, [_, _, _, _]);
          const _ = _(_) && !_ ? () => _(_, _) : void 0,
            _ = (_) => {
              _.preventDefault(), _ && _();
            },
            _ = _.useCallback(() => {
              _.onComplete((0, _._)(_));
            }, [_, _]),
            _ = _
              ? (0, _._)("#StoreAdmin_ExtraAssetUpload_UploadAndReplace")
              : (0, _._)("#Button_Upload");
          return (0, _.jsx)(_._, {
            active: !0,
            onDismiss: _,
            className: _.UploadModal,
            children: (0, _.jsxs)(_._, {
              onSubmit: _,
              children: [
                (0, _.jsx)(_._, {
                  children: (0, _._)("#StoreAdmin_ExtraAssetUpload_UploadNew"),
                }),
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_, {
                      file: _,
                      isVideo: _(_),
                      duplicate: _,
                      bShowThrobber: _,
                      onUseDuplicate: _,
                    }),
                    (0, _.jsx)(_, {
                      name: _,
                      validatedName: _,
                      setName: _,
                      disabled: _,
                    }),
                    _.length > 1 &&
                      (0, _.jsx)(_._, {
                        rgOptions: _,
                        selectedOption: _,
                        onChange: (_) => _(_.data),
                      }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    onOK: _,
                    strOKText: _,
                    bOKDisabled: !_,
                    onCancel: _,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const {
              file: _,
              isVideo: _,
              duplicate: _,
              bShowThrobber: _,
              onUseDuplicate: _,
            } = _,
            _ = _.useMemo(() => URL.createObjectURL(_), [_]),
            _ = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _.DuplicateMessage,
                  children: (0, _._)(
                    "#StoreAdmin_ExtraAssetUpload_FileNameInuse",
                  ),
                }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_.SideBySideComparison, _ && _.Loading),
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.ThrobberContainer,
                      children: (0, _.jsx)(_._, {
                        position: "center",
                        size: "xlarge",
                      }),
                    }),
                  _ &&
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _.ImgPreviewContainer,
                        _.DuplicatePreview,
                      ),
                      children: [
                        (0, _.jsx)("div", {
                          className: _.ImageLabel,
                          children: (0, _._)(
                            "#StoreAdmin_ExtraAssetUpload_Original",
                          ),
                        }),
                        (0, _.jsx)("img", {
                          src:
                            "name" in _
                              ? (0, _._)(_, _.Bhc, _)
                              : (0, _._)((0, _._)(_, !1)?.url, _),
                          className: _.ImgPreview,
                        }),
                      ],
                    }),
                  (0, _.jsxs)("div", {
                    className: _.ImgPreviewContainer,
                    children: [
                      _ &&
                        (0, _.jsx)("div", {
                          className: _.ImageLabel,
                          children: (0, _._)(
                            "#StoreAdmin_ExtraAssetUpload_Replacement",
                          ),
                        }),
                      !_ &&
                        (0, _.jsx)("img", {
                          src: _,
                          className: _.ImgPreview,
                        }),
                      _ &&
                        (0, _.jsx)("video", {
                          src: _,
                          className: _.ImgPreview,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          autoPlay: !0,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { name: _, setName: _, validatedName: _, disabled: _ } = _,
            _ = _.useCallback((_) => _ && _.element.select(), []);
          return (0, _.jsx)("div", {
            children: (0, _.jsx)(_._, {
              value: _,
              onChange: (_) => _(_.currentTarget.value),
              label: (0, _._)("#StoreAdmin_ExtraAssetUpload_EnterAName"),
              ref: _,
              disabled: _,
              description: (0, _._)(
                "#StoreAdmin_ExtraAssetUpload_WillBeSavedAsFilename",
                (0, _.jsx)("b", {
                  children: _,
                }),
              ),
            }),
          });
        }
        function _(_) {
          return _ && _.length > 0;
        }
        function _(_) {
          switch (_.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        function _(_) {
          return _.type.startsWith("video/");
        }
        function _(_, _, _) {
          return _?.length == 1 ? _[0] : _ != _.xPp ? _ : _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { children: _ } = _,
            [_, _] = _.useState([]),
            _ = _.useRef(0),
            _ = _.useCallback(
              (_) => (
                _((_) => [
                  ..._,
                  {
                    upload: _,
                    _: _.current++,
                  },
                ]),
                () => _((_) => _.filter((_) => _.upload != _))
              ),
              [],
            );
          return (0, _.jsx)(_, {
            queueExtraAssetUpload: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_, {
                    rgUploads: _,
                  }),
                  _,
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { children: _, queueExtraAssetUpload: _ } = _,
            [_, _] = _.useState(void 0),
            [_, _] = _.useState([]),
            [_, _] = _.useState(!1);
          _.useEffect(() => {
            let _ = (0, _._)("rgGamePageConfig", "application_config");
            _ ||
              (console.error(
                "Missing config data for game edit page - some components may not work",
              ),
              (_ = {
                rgExtraAssetsData: {
                  rgExtraAssets: [],
                  rgInvalidFilenameCharacters: [],
                },
                strGameControllerURLFormat: "",
                bAppHasSteamChinaToolsEnabled: !1,
              })),
              _(_),
              _(_.rgExtraAssetsData.rgExtraAssets),
              _(_.bAppHasSteamChinaToolsEnabled);
          }, []);
          const _ = _.useMemo(() => {
              if (_)
                return (
                  _.rgExtraAssetsData.rgInvalidFilenameCharacters.forEach((_) =>
                    (0, _._)(
                      _.length == 1,
                      `Expected single-character replacements, "${_} is not`,
                    ),
                  ),
                  new RegExp(
                    `[${_.rgExtraAssetsData.rgInvalidFilenameCharacters.map((_) => `\\${_}`)}]`,
                    "g",
                  )
                );
            }, [_]),
            _ = _.useMemo(
              () => ({
                rgExtraAssetsData: {
                  rgExtraAssets: _,
                  regexInvalidFilenameCharacters: _,
                },
                strGameControllerURLFormat: _?.strGameControllerURLFormat,
                queueExtraAssetUpload: _,
                onExtraAssetsUpdated: _,
                storeItemID: _?.nStoreItemID,
                eStoreItemType: _?.eStoreItemType,
                bAppHasSteamChinaToolsEnabled: _,
              }),
              [_, _, _, _, _],
            );
          return _
            ? (0, _.jsx)(_, {
                value: _,
                children: _,
              })
            : null;
        }
        function _(_ = !1) {
          const _ = _.useContext(_).rgExtraAssetsData.rgExtraAssets;
          return _.useMemo(() => (_ ? [..._].reverse() : _), [_, _]);
        }
        function _() {
          return _.useContext(_).rgExtraAssetsData;
        }
        function _(_) {
          return _.useContext(_).strGameControllerURLFormat.replace(
            ":method:",
            _,
          );
        }
        function _() {
          const _ = React.useContext(_);
          return {
            type: _.eStoreItemType,
            _: _.storeItemID,
          };
        }
        function _() {
          return _.useContext(_).queueExtraAssetUpload;
        }
        function _() {
          return _.useContext(_).onExtraAssetsUpdated;
        }
        function _() {
          const _ = _.useContext(_),
            _ = _.useMemo(
              () =>
                _.bAppHasSteamChinaToolsEnabled
                  ? [_._.k_ESteamRealmGlobal, _._.k_ESteamRealmChina]
                  : [_._.k_ESteamRealmGlobal],
              [_.bAppHasSteamChinaToolsEnabled],
            );
          return {
            bAppHasSteamChinaToolsEnabled: _.bAppHasSteamChinaToolsEnabled,
            rgRealmList: _,
          };
        }
        function _() {
          return _.useContext(_).bUseRichEditor;
        }
        function _() {
          return _.useContext(_).setUseRichEditor;
        }
        const _ = _.createContext(void 0),
          _ = _.createContext(void 0);
        function _(_) {
          const _ = "storeEditorDisableRichEditor",
            [_, _] = _.useState(() => !localStorage.getItem(_)),
            _ = _.useCallback((_) => {
              _ ? localStorage.removeItem(_) : localStorage.setItem(_, "1"),
                _(_);
            }, []),
            _ = _.useMemo(
              () => ({
                bUseRichEditor: _,
                setUseRichEditor: _,
              }),
              [_, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _.children,
          });
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.strSecondaryCategory
              ? `${_._.STORE_BASE_URL}search/?controllersupport=${_.strCategory}%2C${_.strSecondaryCategory}`
              : `${_._.STORE_BASE_URL}search/?controllersupport=${_.strCategory}`,
            _ = (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _.ImgSection,
                    _.bHightlightRow && _.HighlightRow,
                    _.bHighlightGPRequired && _.GamepadRequired,
                  ),
                  children: _.tagImage,
                }),
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _.LocSection,
                    _.bHighlightText && _.HighlightText,
                    _.bHightlightRow && _.HighlightRow,
                    _.bHighlightGPRequired && _.GamepadRequired,
                  ),
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.LocString,
                        _.bHighlightText && _.HighlightText,
                        _.bHightlightRow && _.HighlightRow,
                        _.bHighlightGPRequired && _.GamepadRequired,
                        _.bPersonalized && _.Personalized,
                      ),
                      children: (0, _._)(_.strLocalizationToken),
                    }),
                    _.strTooltipString &&
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(_.strTooltipString),
                        className: _.ToolTipContainer,
                        children: (0, _.jsx)("span", {
                          className: _.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return _.strCategory
            ? (0, _.jsx)("a", {
                href: _,
                className: _.InfoRow,
                children: _,
              })
            : (0, _.jsx)("div", {
                className: _.InfoRow,
                children: _,
              });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.PreviewContainer,
            children: (0, _.jsx)(_, {
              bPreview: !0,
              ..._,
            }),
          });
        }
        function _(_) {
          return jsx(Fragment, {
            children:
              (_.bPartialXboxControllerSupport ||
                _.bFullXboxControllerSupport) &&
              jsx("div", {
                className: styles.StoreSidebarContainer,
                children: jsx(_, {
                  ..._,
                }),
              }),
          });
        }
        function _() {
          return (0, _.jsx)(_, {
            tagImage: (0, _.jsx)(_.Moo, {
              className: (0, _._)(_.Tilt, _.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.PurchaseNoticeContainer),
            children: [
              (0, _.jsx)(_.Kz1, {
                className: (0, _._)(_.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.PurchaseNoticeLabel),
                children: (0, _._)("#Store_ControllerSupport_GamepadPreferred"),
              }),
            ],
          });
        }
        function _(_) {
          const { bNoKeyboardSupport: _, bGamepadPreferred: _ } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.NoticeContainer),
            children: [_ && (0, _.jsx)(_, {}), _ && !_ && (0, _.jsx)(_, {})],
          });
        }
        function _(_) {
          const {
            bControllerSupportWizardComplete: _,
            bPS4ControllerSupport: _,
            bPS5ControllerSupport: _,
            bPS4ControllerBTSupport: _,
            bPS5ControllerBTSupport: _,
            bFullXboxControllerSupport: _,
            bPartialXboxControllerSupport: _,
            bSteamInputAPISupport: _,
            bHasOther: _,
            bHasPS4: _,
            bHasPS5: _,
            bHasXbox: _,
            bPreview: _,
          } = _;
          let _ = [];
          if (_ && _ && _ && _) {
            const _ = (0, _.jsx)(_.pcV, {
                className: _.SmallerSVG,
                controllerType: _._,
                partial: !_,
                role: "presentation",
              }),
              _ = _ || _;
            _.push(
              (0, _.jsx)(
                _,
                {
                  tagImage: _,
                  strLocalizationToken: _
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: _,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (_) {
              const _ = (0, _.jsx)(_.pcV, {
                className: _.SmallerSVG,
                controllerType: _._,
                partial: !_,
                role: "presentation",
              });
              _
                ? _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: _,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: _,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (_) {
              const _ = (0, _.jsx)(_.pcV, {
                className: _.SmallerSVG,
                controllerType: _._,
                partial: !_,
                role: "presentation",
              });
              _
                ? _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: _,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: _,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, _.jsx)(_.Fragment, {
            children:
              (_ || _) &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: _.ControllerSupportLevelString,
                    children: (0, _._)(
                      _
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, _.jsx)(_, {
                    tagImage: (0, _.jsx)(_.pcV, {
                      className: _.SmallerSVG,
                      controllerType: _._,
                      partial: !_,
                      role: "presentation",
                    }),
                    strLocalizationToken: _
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: _,
                    strCategory: "18",
                  }),
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      tagImage: (0, _.jsx)(_.kdM, {
                        className: _.BiggerSVG,
                        bGreyOutRightSide: !_,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!_ && !_) || (!_ && _ && !_)) &&
                    (0, _.jsx)(_, {
                      tagImage: (0, _.jsx)(_.vet, {
                        className: _.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        _ || _ || _
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: _ || _ || _,
                    }),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              }),
          });
        }
        const _ = null;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = document.getElementById(_);
          _ && _.setAttribute("value", _ ? "true" : "");
        }
        async function _(_) {
          _("gamepadsupport_input_1", _.bPartialXboxControllerSupport),
            _("gamepadsupport_input_2", _.bFullXboxControllerSupport),
            _("controllersupport_input_3", _.bPS4ControllerSupport),
            _("controllersupport_input_4", _.bPS4ControllerBTSupport),
            _("controllersupport_input_5", _.bPS5ControllerSupport),
            _("controllersupport_input_6", _.bPS5ControllerBTSupport),
            _("controllersupport_input_7", _.bSteamInputAPISupport),
            _("controllersupport_input_8", _.bNoKeyboardSupport),
            _("controllersupport_input_8_input", _.bNoKeyboardSupport),
            _("controllersupport_input_9", _.bGamepadPreferred),
            _("controllersupport_input_10", !0);
          const _ = document.getElementById("submitBtn");
          _ && _.click();
        }
        var _ = ((_) => (
          (_[(_.k_eMouseKBOnly = 0)] = "k_eMouseKBOnly"),
          (_[(_.k_eGamepadAndMouse = 1)] = "k_eGamepadAndMouse"),
          (_[(_.k_eGamepadPreferred = 2)] = "k_eGamepadPreferred"),
          (_[(_.k_eGamepadRequired = 3)] = "k_eGamepadRequired"),
          _
        ))(_ || {});
        function _(_) {
          const {
              nPageNum: _,
              currentValues: _,
              setCurrentValues: _,
              setSkipToEnd: _,
            } = _,
            _ = [
              {
                _: 0,
                locString: "#ControllerSupportModal_PgOne_MouseKBOnly",
                settings: {
                  bFullXboxControllerSupport: !1,
                  bPartialXboxControllerSupport: !1,
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                  bSteamInputAPISupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
                bSkipToEnd: !0,
              },
              {
                _: 1,
                locString: "#ControllerSupportModal_PgOne_GamepadAndMouse",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
              },
              {
                _: 2,
                locString: "#ControllerSupportModal_PgOne_GamepadPreferred",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !0,
                },
              },
              {
                _: 3,
                locString: "#ControllerSupportModal_PgOne_GamepadRequired",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !0,
                  bGamepadPreferred: !1,
                },
              },
            ],
            _ = () =>
              _.bNoKeyboardSupport
                ? 3
                : _.bGamepadPreferred
                  ? 2
                  : _.bFullXboxControllerSupport ||
                      _.bPartialXboxControllerSupport
                    ? 1
                    : 0,
            _ = _(),
            _ = (_) => {
              const _ = _.find((_) => _._ == _);
              _({
                ..._,
                ..._?.settings,
              }),
                _(_.bSkipToEnd ?? !1);
            };
          _.useEffect(() => {
            _ == 0 && _(!0);
          }, [_, _]);
          const _ = (0, _.jsx)("div", {
              children: (0, _.jsx)(_._, {
                labelId: null,
                value: _(),
                onChange: _,
                children: _.map((_) =>
                  (0, _.jsxs)(
                    _._,
                    {
                      value: _._,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _.RadioButton,
                            _ == _._ && _.Selected,
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _.OptionLabel,
                          children: (0, _._)(_.locString),
                        }),
                      ],
                    },
                    _._,
                  ),
                ),
              }),
            }),
            _ = (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgOne_Instructions",
                  ),
                }),
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgOne_Instructions_VR",
                  ),
                }),
              ],
            });
          return (0, _.jsx)(_, {
            strStepName: (0, _._)("#ControllerSupportModal_StepString", _ + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgOne_Header",
            strInstructionsToken: _,
            strQuestionToken: "#ControllerSupportModal_PgOne_Question",
            leftColumnContent: _,
          });
        }
        var _ = ((_) => (
          (_[(_.k_eFullXboxControllerSupport = 0)] =
            "k_eFullXboxControllerSupport"),
          (_[(_.k_ePartialXboxControllerSupport = 1)] =
            "k_ePartialXboxControllerSupport"),
          _
        ))(_ || {});
        function _(_) {
          const {
              nPageNum: _,
              currentValues: _,
              setCurrentValues: _,
              setSkipToEnd: _,
            } = _,
            _ = _.useMemo(
              () => [
                {
                  _: 0,
                  locString: "#ControllerSupportModal_PgTwo_FullController",
                  settings: {
                    bFullXboxControllerSupport: !0,
                    bPartialXboxControllerSupport: !1,
                  },
                  bSkipToEnd: !1,
                },
                {
                  _: 1,
                  locString: "#ControllerSupportModal_PgTwo_PartialController",
                  settings: {
                    bFullXboxControllerSupport: !1,
                    bPartialXboxControllerSupport: !0,
                  },
                },
              ],
              [],
            ),
            _ = _.useCallback(
              () => (_.bFullXboxControllerSupport ? 0 : 1),
              [_],
            ),
            _ = _.useCallback(
              (_) => {
                const _ = _.find((_) => _._ == _);
                _({
                  ..._,
                  ..._?.settings,
                }),
                  _(_.bSkipToEnd ?? !1);
              },
              [_, _, _, _],
            ),
            _ = _(),
            _ = (0, _.jsx)("div", {
              children: (0, _.jsx)(_._, {
                labelId: null,
                value: _(),
                onChange: _,
                children: _.map((_) =>
                  (0, _.jsxs)(
                    _._,
                    {
                      value: _._,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _.RadioButton,
                            _ == _._ && _.Selected,
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _.OptionLabel,
                          children: (0, _._)(_.locString),
                        }),
                      ],
                    },
                    _._,
                  ),
                ),
              }),
            }),
            _ = (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgTwo_Instructions",
                  ),
                }),
                (0, _.jsxs)("ol", {
                  children: [
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt1",
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgThree_Instructions_pt1",
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt4",
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt5",
                      ),
                    }),
                  ],
                }),
              ],
            });
          return (0, _.jsx)(_, {
            stepIMG: (0, _.jsx)(_.xIk, {
              type: "xbox",
            }),
            strStepName: (0, _._)("#ControllerSupportModal_StepString", _ + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgTwo_Header",
            strInstructionsToken: _,
            strQuestionToken: "#ControllerSupportModal_PgTwo_Question",
            leftColumnContent: _,
          });
        }
        function _(_) {
          const { nPageNum: _, currentValues: _, setCurrentValues: _ } = _,
            _ = [
              {
                _: 0,
                locString: "#ControllerSupportModal_PgThree_Ps4",
                settings: {
                  bPS4ControllerSupport: !0,
                },
                invertedSettings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                },
                bValue: _.bPS4ControllerSupport,
              },
              {
                _: 1,
                locString: "#ControllerSupportModal_PgThree_Ps4BT",
                settings: {
                  bPS4ControllerBTSupport: !0,
                  bPS4ControllerSupport: !0,
                },
                invertedSettings: {
                  bPS4ControllerBTSupport: !1,
                },
                bValue: _.bPS4ControllerBTSupport,
              },
              {
                _: 2,
                locString: "#ControllerSupportModal_PgThree_Ps5",
                settings: {
                  bPS5ControllerSupport: !0,
                },
                invertedSettings: {
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                bValue: _.bPS5ControllerSupport,
              },
              {
                _: 3,
                locString: "#ControllerSupportModal_PgThree_Ps5BT",
                settings: {
                  bPS5ControllerBTSupport: !0,
                  bPS5ControllerSupport: !0,
                },
                invertedSettings: {
                  bPS5ControllerBTSupport: !1,
                },
                bValue: _.bPS5ControllerBTSupport,
              },
              {
                _: 4,
                locString: "#ControllerSupportModal_PgThree_None",
                settings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                invertedSettings: {
                  bPS4ControllerSupport: !0,
                },
                bValue:
                  !_.bPS4ControllerSupport &&
                  !_.bPS4ControllerBTSupport &&
                  !_.bPS5ControllerSupport &&
                  !_.bPS5ControllerBTSupport,
              },
            ],
            _ = (_) => {
              _({
                ..._,
                ..._,
              });
            },
            _ = (0, _.jsx)("div", {
              children: _.map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    checked: _.bValue,
                    onChange: (_) => _(_ ? _.settings : _.invertedSettings),
                    label: (0, _._)(_.locString),
                  },
                  _._,
                ),
              ),
            }),
            _ = (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgThree_Instructions",
                  ),
                }),
                (0, _.jsx)("ol", {
                  children: (0, _.jsx)("li", {
                    children: (0, _._)(
                      "#ControllerSupportModal_PgThree_Instructions_pt1",
                    ),
                  }),
                }),
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgThree_Instructions_note",
                    (0, _.jsx)("span", {
                      style: {
                        fontWeight: "bold",
                      },
                    }),
                  ),
                }),
              ],
            });
          return (0, _.jsx)(_, {
            stepIMG: (0, _.jsx)(_.xIk, {
              type: "ps4",
            }),
            strStepName: (0, _._)("#ControllerSupportModal_StepString", _ + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgThree_Header",
            strInstructionsToken: _,
            strQuestionToken: "#ControllerSupportModal_PgThree_Question",
            leftColumnContent: _,
          });
        }
        var _ = ((_) => (
          (_[(_.k_eSteamInputAPISupport = 0)] = "k_eSteamInputAPISupport"),
          (_[(_.k_eNoSteamInputAPISupport = 1)] = "k_eNoSteamInputAPISupport"),
          _
        ))(_ || {});
        function _(_) {
          const {
              nPageNum: _,
              currentValues: _,
              setCurrentValues: _,
              setSkipToEnd: _,
            } = _,
            _ = [
              {
                _: 0,
                locString: "#ControllerSupportModal_PgFour_SIAPI",
                settings: {
                  bSteamInputAPISupport: !0,
                },
                bSkipToEnd: !1,
              },
              {
                _: 1,
                locString: "#ControllerSupportModal_PgFour_NoSIAPI",
                settings: {
                  bSteamInputAPISupport: !1,
                },
                bSkipToEnd: !1,
              },
            ],
            _ = () => (_.bSteamInputAPISupport ? 0 : 1),
            _ = (_) => {
              const _ = _.find((_) => _._ == _);
              _({
                ..._,
                ..._?.settings,
              }),
                _(_.bSkipToEnd ?? !1);
            },
            _ = _(),
            _ = (0, _.jsx)("div", {
              children: (0, _.jsx)(_._, {
                labelId: null,
                value: _,
                onChange: _,
                classNames: _.RadioGroup,
                children: _.map((_) =>
                  (0, _.jsxs)(
                    _._,
                    {
                      value: _._,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _.RadioButton,
                            _ == _._ && _.Selected,
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _.OptionLabel,
                          children: (0, _._)(_.locString),
                        }),
                      ],
                    },
                    _._,
                  ),
                ),
              }),
            }),
            _ = (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgFour_Instructions",
                  ),
                }),
                (0, _.jsxs)("ol", {
                  children: [
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgFour_Instructions_pt1",
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgFour_Instructions_pt2",
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#ControllerSupportModal_PgFour_Instructions_pt3",
                      ),
                    }),
                  ],
                }),
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#ControllerSupportModal_PgFour_Instructions_note",
                  ),
                }),
              ],
            });
          return (0, _.jsx)(_, {
            strStepName: (0, _._)("#ControllerSupportModal_StepString", _ + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFour_Header",
            strInstructionsToken: _,
            strQuestionToken: "#ControllerSupportModal_PgFour_Question",
            leftColumnContent: _,
          });
        }
        function _(_) {
          const { currentValues: _ } = _,
            _ = (0, _.jsx)("div", {
              children:
                (_.bFullXboxControllerSupport ||
                  _.bPartialXboxControllerSupport) &&
                (0, _.jsx)(_, {
                  ..._.currentValues,
                }),
            }),
            _ =
              _.bFullXboxControllerSupport || _.bPartialXboxControllerSupport
                ? "#ControllerSupportModal_PgFive_Question"
                : "#ControllerSupportModal_PgFive_QuestionNoController";
          return (0, _.jsx)(_, {
            strStepName: (0, _._)("#ControllerSupportModal_StepString", 5),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFive_Header",
            strInstructionsToken: void 0,
            strQuestionToken: _,
            leftColumnContent: _,
          });
        }
        function _(_) {
          const { appid: _, onClose: _, onCommit: _, params: _ } = _,
            [_, _] = _.useState(_),
            [_, _] = _.useState(_),
            [_, _] = _.useState(!1),
            _ = 5,
            [_, _] = _.useState(0),
            _ = _.useCallback(() => {
              _(_), _(!1);
            }, [_, _]),
            _ = () => {
              _(_);
              let _ = _ - 1;
              _ && _ == 4 && (_ = 0), _(_);
            },
            _ = () => {
              _(_), _(_ ? _ - 1 : _ + 1);
            };
          let _;
          switch (_) {
            default:
            case 0: {
              _ = (0, _.jsx)(_, {
                nPageNum: _,
                currentValues: _,
                setCurrentValues: _,
                setSkipToEnd: _,
              });
              break;
            }
            case 1:
              _ = (0, _.jsx)(_, {
                nPageNum: _,
                currentValues: _,
                setCurrentValues: _,
                setSkipToEnd: _,
              });
              break;
            case 2:
              _ = (0, _.jsx)(_, {
                nPageNum: _,
                currentValues: _,
                setCurrentValues: _,
                setSkipToEnd: _,
              });
              break;
            case 3:
              _ = (0, _.jsx)(_, {
                nPageNum: _,
                currentValues: _,
                setCurrentValues: _,
                setSkipToEnd: _,
              });
              break;
            case 4:
              _ = (0, _.jsx)(_, {
                currentValues: _,
              });
              break;
          }
          const _ = (0, _.jsx)(_, {
              nPageIdx: _,
              nPages: _,
              strHeaderText: (0, _._)("#ControllerSupportModal_Title"),
            }),
            _ = _ == _ - 1;
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_, {
              fnNext: _ ? () => _() : _,
              fnBack: _ > 0 ? _ : _,
              header: _,
              strOkButtonLabel: _ ? "Save and Exit" : "Next",
              children: _,
            }),
          });
        }
        const _ = _.createContext(null);
        function _() {
          return React.useContext(_);
        }
        function _(_) {
          const { nPages: _, nPageIdx: _, strHeaderText: _ } = _,
            _ = (100 * (_ + 1)) / (_ + 1);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.ModalHeader),
            children: [
              !1,
              (0, _.jsx)("div", {
                className: _.WizardTitle,
                children: (0, _._)(_),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _.ProgressBar,
                  _ == _ - 1 && _.ProgressBarComplete,
                ),
                children:
                  _ < _ - 1 &&
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.ProgressBarFillComponent),
                    style: {
                      width: _ + "%",
                    },
                  }),
              }),
            ],
          });
        }
        const _ = _.memo(function (_) {
          const {
            strStepName: _,
            strStepSubHeaderToken: _,
            stepIMG: _,
            strInstructionsToken: _,
            strQuestionToken: _,
            leftColumnContent: _,
            rightColumnContent: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsxs)("div", {
                className: _.StepRow,
                children: [
                  _ &&
                    (0, _.jsxs)("div", {
                      className: _.StepImgContainer,
                      children: [" ", _, " "],
                    }),
                  (0, _.jsxs)("div", {
                    className: _.StepLabel,
                    children: [
                      _,
                      (0, _.jsx)(_._, {
                        children: (0, _._)(_),
                      }),
                    ],
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _.StepInstruction,
                  children: _,
                }),
              (0, _.jsx)("div", {
                className: _.ControlsQuestion,
                children: (0, _._)(
                  _,
                  (0, _.jsx)("span", {
                    style: {
                      fontWeight: "bold",
                    },
                  }),
                ),
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    children: _,
                  }),
                  (0, _.jsx)(_._, {
                    children: _,
                  }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const {
            fnNext: _,
            fnBack: _,
            children: _,
            header: _,
            strOkButtonLabel: _,
          } = _;
          return (0, _.jsxs)(_._, {
            active: !0,
            className: _.ControllerWizardModal,
            children: [
              _,
              (0, _.jsx)(_._, {
                className: _.WizardBody,
                children: _,
              }),
              (0, _.jsx)(_._, {
                className: _.WizardButtons,
                bCancelDisabled: !_,
                onCancel: _,
                strCancelText: "Back",
                onOK: _,
                strOKText: _,
              }),
            ],
          });
        }
        function _(_) {
          const { unAppID: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _(!0), []),
            _ = _.useCallback(() => _(!1), []),
            _ =
              _.bControllerSupportWizardComplete &&
              (_.bFullXboxControllerSupport || _.bPartialXboxControllerSupport);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  appid: _,
                  onClose: _,
                  onCommit: _,
                  params: _,
                }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)("div", {
                    className: _.DescText,
                    children: (0, _._)(
                      "#App_Landing_ControllerSupport_WizardPrompt_Desc",
                    ),
                  }),
                  _.bControllerSupportWizardComplete &&
                    (0, _.jsx)("div", {
                      className: _.DescText,
                      children: (0, _._)(
                        "#App_Landing_ControllerSupport_WizardPrompt_CustomerView",
                      ),
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_.ReleaseDateInfoCtn),
                children: [
                  (0, _.jsxs)("div", {
                    className: _.ReleaseDateContent,
                    children: [
                      !_.bControllerSupportWizardComplete &&
                        (0, _.jsx)(_, {
                          onClick: _,
                        }),
                      _.bControllerSupportWizardComplete &&
                        !_ &&
                        (0, _.jsx)(_, {
                          onClick: _,
                        }),
                      _.bControllerSupportWizardComplete &&
                        _ &&
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                    ],
                  }),
                  _.bControllerSupportWizardComplete &&
                    _ &&
                    (0, _.jsxs)("div", {
                      className: _.EditButton,
                      onClick: _,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(_.Spacer, _.Top),
                        }),
                        (0, _.jsx)("div", {
                          className: _.EditButtonIcon,
                          children: (0, _.jsx)(_.ffu, {}),
                        }),
                        (0, _.jsx)("div", {
                          className: (0, _._)(_.Spacer, _.Bottom),
                        }),
                      ],
                    }),
                ],
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("div", {
                className: _.DescText,
                children: (0, _._)(
                  "#App_Landing_ControllerSupport_WizardPrompt_Upcoming",
                ),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)("div", {
                    className: _.StatusText,
                    children: (0, _._)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNotStarted",
                    ),
                  }),
                }),
                (0, _.jsxs)(_._, {
                  className: _.StartWizardButton,
                  onClick: _.onClick,
                  children: [
                    " ",
                    (0, _._)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)("div", {
                    className: _.StatusText,
                    children: (0, _._)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNoController",
                    ),
                  }),
                }),
                (0, _.jsxs)(_._, {
                  className: _.StartWizardButton,
                  onClick: _.onClick,
                  children: [
                    " ",
                    (0, _._)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { language: _, rctToolbarControls: _, mapValues: _ } = _,
            _ = _.get(_),
            _ = _.createRef();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                refTextArea: _,
                value: _,
                rctToolbarControls: _,
              }),
              (0, _.jsx)(_, {
                language: _,
                value: _,
                refTextArea: _,
              }),
            ],
          });
        }
        function _(_) {
          const { refTextArea: _, value: _, rctToolbarControls: _ } = _,
            _ = _.useCallback(
              (_, _) => {
                _(_.current, _, _, _);
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _) => {
                _(_.current, _, _, _, (_) =>
                  _.replace(
                    /(\r\n|\n|\r)/gm,
                    `\r
[*]`,
                  ),
                );
              },
              [_, _],
            );
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#FormattingToolbar_Bold"),
                start: "[b]",
                end: "[/b]",
                children: (0, _.jsx)(_.l4n, {}),
              }),
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#FormattingToolbar_Italic"),
                start: "[i]",
                end: "[/i]",
                children: (0, _.jsx)(_.UKJ, {}),
              }),
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#FormattingToolbar_Underline"),
                start: "[u]",
                end: "[/u]",
                children: (0, _.jsx)(_.Gj3, {}),
              }),
              (0, _.jsx)(_._, {}),
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#FormattingToolbar_BulletedList"),
                start: "[list][*]",
                end: "[/list]",
                children: (0, _.jsx)(_.JPq, {}),
              }),
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#FormattingToolbar_HeadingLevel2"),
                start: "[h2]",
                end: "[/h2]",
                children: (0, _.jsx)(_.qOW, {}),
              }),
              (0, _.jsx)(_._, {}),
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#FormattingToolbar_InsertLink"),
                start: "[url]",
                end: "[/url]",
                children: (0, _.jsx)(_.YqK, {}),
              }),
              (0, _.jsx)(_, {
                fnInsertText: _,
                tooltip: (0, _._)("#EventEditor_InsertImage"),
                start: "[img]",
                end: "[/img]",
                children: (0, _.jsx)(_._V3, {}),
              }),
              (0, _.jsx)(_._, {}),
              _,
            ],
          });
        }
        function _(_) {
          const {
            fnInsertText: _,
            tooltip: _,
            start: _,
            end: _,
            children: _,
          } = _;
          return (0, _.jsx)(_._, {
            onClick: () => _(_, _),
            tooltip: _,
            children: _,
          });
        }
        function _(_) {
          const { language: _, value: _, refTextArea: _ } = _,
            _ = _.useCallback((_) => _.Set(_.currentTarget.value), [_]),
            _ = (0, _._)(_),
            _ = _.useCallback(
              (_) => {
                (0, _._)(_, _?.textarea);
              },
              [_],
            );
          return (0, _.jsx)(_._, {
            className: _.TextArea,
            ref: _,
            nMinHeight: 96,
            value: _,
            onChange: _,
            lang: (0, _._)(_),
          });
        }
        function _(_, _, _, _, _) {
          if (_.selectionStart || _.selectionStart === 0) {
            const _ = _.selectionStart,
              _ = _.selectionEnd,
              _ = _.value.substring(0, _),
              _ = _.value.substring(_, _),
              _ = _.value.substring(_, _.value.length),
              _ = _ ? _(_) : _,
              _ = _.length - _.length,
              _ = _.scrollTop;
            _(_, _ + _ + _ + _ + _, () => {
              _.focus(),
                (_.selectionStart = _ + _.length),
                (_.selectionEnd = _ + _.length + _),
                (_.scrollTop = _);
            });
          } else _(_, _.value + _ + " " + _, () => _.focus());
        }
        function _(_, _, _) {
          _.Set(_), window.setTimeout(_, 1);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          switch (_) {
            case "Demo":
              return "#StoreAdmin_GameDescription_AboutThisDemo";
            case "DLC":
              return "#StoreAdmin_GameDescription_AboutThisContent";
            case "Music":
              return "#StoreAdmin_GameDescription_AboutThisSoundtrack";
            case "Application":
              return "#StoreAdmin_GameDescription_AboutThisSoftware";
            default:
              return "#StoreAdmin_GameDescription_AboutThisGame";
          }
        }
        const _ = _.lazy(() =>
          Promise.resolve().then(
            __webpack_require__.bind(__webpack_require__, "chunkid"),
          ),
        );
        function _(_) {
          const {
              rgLanguages: _,
              value: _,
              strNamePrefix: _,
              rgPath: _,
              editorType: _,
              asset_mtime: _,
              appType: _,
            } = _,
            _ = _.useMemo(() => new Map(_), [_]),
            _ = _.useMemo(() => Array.from(_.keys()).map(_.sfN), [_]),
            {
              strActiveLanguage: _,
              mapValues: _,
              rctLanguageSelect: _,
              rctHiddenInputs: _,
            } = (0, _._)(_, _, _, _),
            _ = _(),
            _ = (0, _._)(),
            _ =
              _ == "aboutthegame"
                ? (0, _.jsx)(_.StoreAppPageHeader, {
                    children: (0, _._)(_(_)),
                  })
                : void 0;
          return (0, _.jsxs)("div", {
            className: _.LocTextAreaContainer,
            children: [
              _ == "aboutthegame" && (0, _.jsx)(_, {}),
              _ == "aboutthegame" && !_ && (0, _.jsx)(_, {}),
              (0, _.jsxs)(
                _._,
                {
                  children: [
                    " ",
                    (0, _.jsx)(_.Suspense, {
                      fallback: null,
                      children: (0, _.jsx)(_._.Provider, {
                        value: _,
                        children: (0, _.jsx)(_, {
                          language: _,
                          mapValues: _,
                          languages: _,
                          rctToolbarControls: _,
                          editorType: _,
                          rctAboveEditor: _,
                        }),
                      }),
                    }),
                  ],
                },
                _ ? "richeditor" : "bbcode",
              ),
              _,
            ],
          });
        }
        function _() {
          return (0, _._)() ? _ : _;
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _.jsx)(_._, {
            style: {
              width: "fit-content",
            },
            checked: _,
            label: (0, _._)("#StoreAdmin_GameDescription_UseRichEditor"),
            onChange: _,
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            children: [
              (0, _._)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions1",
                (0, _.jsx)(_.QRo, {
                  className: "inline_svg",
                }),
              ),
              (0, _.jsx)("br", {}),
              (0, _._)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions2",
              ),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("br", {}),
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
          _ = ((_) => (
            (_[(_.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (_[(_.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            _
          ))(_ || {}),
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
          _ = __webpack_require__._(_);
        function _(_) {
          const { rgCreatorHomes: _, groupvanityinfo: _ } = _,
            [_, _] = (0, _.useState)(!0);
          return (
            (0, _.useEffect)(() => {
              _
                ? (async () => (await _._.AddGroupVanities(_), _(!1)))()
                : _(!1);
            }, [_]),
            _
              ? null
              : (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsxs)("div", {
                      className: "instructions",
                      children: [
                        (0, _.jsxs)("h2", {
                          children: [
                            (0, _._)("#Create_Home_Title"),
                            " ",
                            (0, _.jsx)("span", {
                              className: "small",
                              children: (0, _.jsx)("a", {
                                href: `${_._.STORE_BASE_URL}news/group/4145017/view/4578559379959234050`,
                                target: "_blank",
                                children: (0, _._)(
                                  "#AssetRequest_General_SeeDocs",
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, _.jsx)("hr", {}),
                        !_ || _.length == 0
                          ? (0, _.jsx)("div", {
                              className: _().PageSelect,
                              children: (0, _._)(
                                "#Create_Home_None",
                                (0, _.jsx)("a", {
                                  href: `${_._.PARTNER_BASE_URL}doc/store/creator_homepage`,
                                  target: "_blank",
                                }),
                                (0, _.jsx)("a", {
                                  href: `${_._.PARTNER_BASE_URL}doc/store/franchise_pages`,
                                  target: "_blank",
                                }),
                              ),
                            })
                          : (0, _.jsx)(_, {
                              ..._,
                              baseGameAppID: _.appid,
                            }),
                      ],
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("br", {}),
                  ],
                })
          );
        }
        function _(_, _) {
          if (_ >= _) return [];
          const _ = [];
          for (let _ = _; _ < _; _++) _.push(_);
          return _;
        }
        function _(_) {
          const {
              rgCreatorHomes: _,
              oInputFeatured: _,
              creatorNames: _,
              baseGameAppID: _,
            } = _,
            [_, _] = (0, _.useState)(() => {
              if (_) return _;
              for (const _ of _.rgFrachises) {
                const _ = _.find((_) => _.linkname == _);
                if (_)
                  return {
                    clan_account_id: new _._(_.clan_steamid).GetAccountID(),
                    sort_order: "salesrank",
                    featured_appids: void 0,
                  };
              }
              return {
                clan_account_id: 0,
              };
            }),
            _ = (0, _.useCallback)(
              (_, _) => {
                _.clan_account_id == _.k_CreatorHomeAll
                  ? _({
                      ..._,
                      featured_appids: [...(_.featured_appids || []), _],
                      featured_creator_clan_account_id: [
                        ...(_.featured_creator_clan_account_id || []),
                        _,
                      ],
                    })
                  : _({
                      ..._,
                      featured_appids: [...(_.featured_appids || []), _],
                    });
              },
              [_],
            ),
            _ = (0, _.useMemo)(() => {
              if (_.clan_account_id == _.k_CreatorHomeAll) {
                const _ = new Set();
                _.forEach((_) => _.add(new _._(_.clan_steamid).GetAccountID()));
                const _ = new Array();
                return (
                  _.forEach((_) => {
                    const _ = _._.GetClanInfoByClanAccountID(_);
                    _.push({
                      name: _?.group_name || "" + _,
                      key: "clanid" + _,
                      contents: (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_, {
                          creatorHomeClanAccountID: _,
                          fnAddAppToFeaturedAppList: _,
                          baseGameAppID: _,
                          rgFeaturedList: _.featured_appids,
                        }),
                      }),
                    });
                  }),
                  _
                );
              }
              return null;
            }, [_, _, _.clan_account_id, _.featured_appids, _]);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                children: (0, _._)("#Create_Home_Desc"),
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("div", {
                className: _.EventEditorTextTitle,
                children: (0, _._)("#Create_Home_SelectedSource"),
              }),
              (0, _.jsx)(_, {
                rgCreatorHomes: _,
                oFeatured: _,
                fnSetFeatured: _,
              }),
              (0, _.jsx)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                },
                className: _.EventDefaultRowContainer,
                children: _.clan_account_id
                  ? (0, _.jsx)(_.Fragment, {
                      children:
                        _.clan_account_id > 0
                          ? (0, _.jsx)(_, {
                              creatorHomeClanAccountID: _.clan_account_id,
                              fnAddAppToFeaturedAppList: _,
                              baseGameAppID: _,
                              rgFeaturedList: _.featured_appids,
                            })
                          : (0, _.jsx)(_._, {
                              tabs: _,
                            }),
                    })
                  : (0, _.jsx)("span", {
                      children: (0, _._)("#Create_Home_Selected_None"),
                    }),
              }),
              (0, _.jsxs)("div", {
                className: _().SelectedSource,
                children: [
                  !!(
                    _.clan_account_id ||
                    _.featured_creator_clan_account_id?.length > 0
                  ) &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          rgFeaturedList: _.featured_appids,
                          strFeaturedFirstAppToken: _.featured_first_app_token,
                          rgFeaturedClanList:
                            _.featured_creator_clan_account_id,
                          fnSetFeatureAppAndClans: (_, _, _) => {
                            _({
                              ..._,
                              featured_appids: _,
                              featured_creator_clan_account_id: _,
                              featured_first_app_token: _,
                            });
                          },
                        }),
                        (0, _.jsx)(_, {
                          oFeatured: _,
                          fnSetFeatured: _,
                        }),
                      ],
                    }),
                  (0, _.jsx)(_, {
                    oFeatured: _,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { oFeatured: _ } = _,
            [_, _] = (0, _.useState)(() => _?.featured_appids?.length || 0);
          (0, _.useEffect)(() => {
            _ < (_?.featured_appids?.length || 0) &&
              _(_.featured_appids.length);
          }, [_, _]);
          const _ = _(_?.featured_appids?.length || 0, _),
            _ =
              !_?.featured_first_app_token ||
              _?.featured_first_app_token == "#Featured_App_None";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("input", {
                type: "hidden",
                name: "app[featured_creator_home][clan_account_id]",
                value: _?.clan_account_id || 0,
              }),
              (0, _.jsx)(
                "input",
                {
                  type: "hidden",
                  name: "app[featured_creator_home][featured_first_app_token]",
                  value: _ ? void 0 : _?.featured_first_app_token,
                },
                _ ? "empty" : "feating",
              ),
              _?.clan_account_id
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("input", {
                        type: "hidden",
                        name: "app[featured_creator_home][sort_order]",
                        value: _.sort_order || "salesrank",
                      }),
                      _.featured_appids?.map((_, _) =>
                        (0, _.jsxs)(
                          _.Fragment,
                          {
                            children: [
                              (0, _.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_appids][${_}]`,
                                value: _,
                              }),
                              (0, _.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_creator_clan_account_id][${_}]`,
                                value: _.featured_creator_clan_account_id?.[_],
                              }),
                            ],
                          },
                          "app" + _,
                        ),
                      ),
                    ],
                  })
                : (0, _.jsx)("input", {
                    type: "hidden",
                    name: "app[featured_creator_home][sort_order]",
                    value: void 0,
                  }),
              _.map((_) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_appids][${_}]`,
                        value: void 0,
                      }),
                      (0, _.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_creator_clan_account_id][${_}]`,
                        value: void 0,
                      }),
                    ],
                  },
                  "nullinput" + _,
                ),
              ),
            ],
          });
        }
        const _ = {
          include_assets: !0,
          include_release: !0,
        };
        function _(_) {
          const {
              creatorHomeClanAccountID: _,
              rgFeaturedList: _,
              fnAddAppToFeaturedAppList: _,
              baseGameAppID: _,
            } = _,
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(null),
            _ = (0, _._)(_, _, !0),
            _ = (0, _._)(_, _),
            _ = (0, _.useMemo)(
              () =>
                _ != _._ && _
                  ? _.filter((_) => _ != _).map((_) => {
                      const _ = _._.Get().GetApp(_);
                      return {
                        value: _,
                        label: `${_ ? _.GetName() : ""} (Appid: ${_})`,
                      };
                    })
                  : [],
              [_, _, _],
            );
          return !_ || _ == _._
            ? (0, _.jsx)(_._, {
                size: "small",
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsxs)("div", {
                className: _().ManualFeatures,
                children: [
                  (0, _.jsx)("div", {
                    className: "DialogLabel",
                    children: (0, _._)("#Create_Home_ManuallyFeature"),
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _._)("#Create_Home_Select_App_Desc"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().FeatureSelectItemCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isSearchable: !0,
                        isMulti: !1,
                        placeholder: (0, _._)("#Create_Home_Select_App"),
                        options: _,
                        value: _.find((_) => _.value === _),
                        onChange: (_) => _(_.value),
                        controlShouldRenderValue: !!_,
                      }),
                      (0, _.jsx)(_._, {
                        disabled: !_,
                        onClick: () => {
                          (!_ || _.findIndex((_) => _ === _) == -1) && _(_, _),
                            _(null);
                        },
                        children: (0, _._)("#Create_Home_Add_App"),
                      }),
                    ],
                  }),
                ],
              });
        }
        function _(_) {
          const {
            rgFeaturedList: _,
            rgFeaturedClanList: _,
            fnSetFeatureAppAndClans: _,
            strFeaturedFirstAppToken: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: _().ManualFeatures,
            children: [
              (0, _.jsx)("div", {
                className: "DialogLabel",
                children: (0, _._)("#Create_Home_App_Featured"),
              }),
              (0, _.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                },
                className: _.EventDefaultRowContainer,
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _._)("#Create_Home_App_Featured_Desc"),
                  }),
                  !_ || _.length == 0
                    ? (0, _.jsx)("div", {
                        children: (0, _._)("#Create_Home_No_Featured"),
                      })
                    : (0, _.jsx)(_._, {
                        items: _ || [],
                        render: (_, _) =>
                          (0, _.jsx)(
                            _,
                            {
                              appid: _,
                              creatorClanID: _?.[_],
                              elEditor:
                                _ == 0
                                  ? (0, _.jsx)(_, {
                                      strFeaturedFirstAppToken: _,
                                      fnSetFeaturedFirstAppToken: (_) =>
                                        _(_, _, _),
                                    })
                                  : void 0,
                            },
                            "row" + _,
                          ),
                        onDelete: (_) => {
                          const _ = [..._];
                          _.splice(_, 1);
                          let _;
                          _ && ((_ = [..._]), _.splice(_, 1)), _(_, _, _);
                        },
                        onMove: (_, _) => {
                          const _ = [..._];
                          (0, _._)(_, _, _);
                          let _;
                          _ && ((_ = [..._]), (0, _._)(_, _, _)), _(_, _, _);
                        },
                      }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { strFeaturedFirstAppToken: _, fnSetFeaturedFirstAppToken: _ } =
              _,
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                _.push({
                  label: (0, _._)("#Featured_App_None"),
                  data: null,
                }),
                _.push({
                  label: (0, _._)("#Featured_App_Reason_Next"),
                  data: "#Featured_App_Reason_Next",
                }),
                _.push({
                  label: (0, _._)("#Featured_App_Reason_Franchise"),
                  data: "#Featured_App_Reason_Franchise",
                }),
                _.push({
                  label: (0, _._)("#Featured_App_Reason_Similar"),
                  data: "#Featured_App_Reason_Similar",
                }),
                _.push({
                  label: (0, _._)("#Featured_App_Reason_Upcoming"),
                  data: "#Featured_App_Reason_Upcoming",
                }),
                _.push({
                  label: (0, _._)("#Featured_App_Reason_YouMight"),
                  data: "#Featured_App_Reason_YouMight",
                }),
                _.push({
                  label: (0, _._)("#Featured_App_Reason_LatestEdition"),
                  data: "#Featured_App_Reason_LatestEdition",
                }),
                _
              );
            }, []);
          return (0, _.jsx)("div", {
            className: _().PageSelect,
            children: (0, _.jsx)(_._, {
              label: (0, _._)("#Featured_App_Name"),
              tooltip: (0, _._)("#Featured_App_Tooltip"),
              rgOptions: _,
              selectedOption: _ || null,
              onChange: (_) => {
                _(_.data);
              },
            }),
          });
        }
        function _(_) {
          const { appid: _, elEditor: _, creatorClanID: _ } = _,
            [_] = (0, _._)(_, _),
            _ = (0, _.useMemo)(
              () => ({
                _: _,
                type: "game",
              }),
              [_],
            ),
            _ = (0, _.useMemo)(() => _(_), [_]);
          return (0, _.jsxs)("div", {
            className: _().AppRowCtn,
            children: [
              _
                ? (0, _.jsx)("div", {
                    className: _().CapsuleCtn,
                    children: (0, _.jsx)(_._, {
                      capsule: _,
                      imageType: "header",
                      bShowParentApp: !1,
                      bHideStoreHover: !0,
                      bPreferAssetWithoutOverride: !1,
                    }),
                  })
                : (0, _.jsxs)("div", {
                    className: _().MissingCapsuleCtn,
                    children: [
                      (0, _.jsx)("div", {
                        children: (0, _._)("#Create_Home_Missing_Capsule"),
                      }),
                      (0, _.jsxs)("div", {
                        children: ["appid: (", _, ")"],
                      }),
                    ],
                  }),
              !!_ &&
                (0, _.jsxs)("div", {
                  className: _().CreatorHomeCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, _._)("#Create_Home_App_FeaturedSource"),
                    }),
                    (0, _.jsx)(_._, {
                      creatorID: _,
                      bShowTagline: !1,
                      bHideCreatorType: !0,
                      bSmallFormat: !0,
                      bHideFollowButton: !0,
                    }),
                  ],
                }),
              _,
            ],
          });
        }
        function _(_) {
          return _
            ? {
                name: _._.GetClanInfoByClanAccountID(_)?.group_name || `(${_})`,
                clan_account_id: _,
                type: "developer",
              }
            : null;
        }
        function _(_) {
          const { rgCreatorHomes: _, oFeatured: _, fnSetFeatured: _ } = _,
            _ = (0, _.useMemo)(() => {
              const _ = new Set();
              _.forEach((_) => _.add(new _._(_.clan_steamid).GetAccountID()));
              const _ = new Array();
              return (
                _.push({
                  label: (0, _._)("#Create_Home_None_Selected"),
                  data: _.k_CreatorHomeNone,
                  tooltip: (0, _._)("#Create_Home_None_Selected_ttip"),
                }),
                _.forEach((_) => {
                  const _ = _._.GetClanInfoByClanAccountID(_);
                  _.push({
                    label: _?.group_name || `(${_})`,
                    data: _,
                  });
                }),
                _.length > 2 &&
                  _.push({
                    label: (0, _._)("#Create_Home_All_Creators") + " (?)",
                    data: _.k_CreatorHomeAll,
                    tooltip: (0, _._)("#Create_Home_All_Creators_ttip"),
                  }),
                _
              );
            }, [_]);
          return (0, _.jsx)("div", {
            className: _().PageSelect,
            children: (0, _.jsx)(_._, {
              rgOptions: _,
              selectedOption: _?.clan_account_id || 0,
              onChange: (_) => {
                _.data != _?.clan_account_id &&
                  _({
                    clan_account_id: _.data,
                    featured_appids: void 0,
                    featured_creator_clan_account_id: void 0,
                    sort_order: "salesrank",
                  });
              },
            }),
          });
        }
        function _(_) {
          const { creatorHomeClanAccountID: _ } = _,
            [_, _] = (0, _.useState)(() => _(_));
          return (
            (0, _.useEffect)(() => {
              _?.clan_account_id != _ && _(_(_));
            }, [_, _?.clan_account_id]),
            (0, _.jsxs)("div", {
              className: _().SelectedSource,
              children: [
                (0, _.jsx)(_._, {
                  creatorID: _,
                  bShowTagline: !0,
                  bHideCreatorType: !0,
                  bSmallFormat: !0,
                  bHideFollowButton: !0,
                }),
                (0, _.jsx)("br", {}),
                (0, _.jsx)(_, {
                  ..._,
                }),
              ],
            })
          );
        }
        function _(_) {
          const { oFeatured: _, fnSetFeatured: _ } = _;
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)("br", {}),
              (0, _.jsx)("div", {
                className: "DialogLabel",
                children: (0, _._)("#Create_Home_SortBy"),
              }),
              (0, _.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                },
                className: _.EventDefaultRowContainer,
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _._)("#Create_Home_SortBy_Desc"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SortOptionsCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        checked: _.sort_order == "salesrank",
                        controlled: !0,
                        onChange: (_) =>
                          _ &&
                          _({
                            ..._,
                            sort_order: "salesrank",
                          }),
                        label: (0, _._)("#Create_Home_SortBy_Sales"),
                        tooltip: (0, _._)("#Create_Home_SortBy_Sales_ttip"),
                      }),
                      (0, _.jsx)(_._, {
                        checked: _.sort_order == "releasedate",
                        controlled: !0,
                        onChange: (_) =>
                          _ &&
                          _({
                            ..._,
                            sort_order: "releasedate",
                          }),
                        label: (0, _._)("#Create_Home_SortBy_Release"),
                        tooltip: (0, _._)("#Create_Home_SortBy_Release_ttip"),
                      }),
                      (0, _.jsx)(_._, {
                        checked: _.sort_order == "tags",
                        controlled: !0,
                        onChange: (_) =>
                          _ &&
                          _({
                            ..._,
                            sort_order: "tags",
                          }),
                        label: (0, _._)("#Create_Home_SortBy_Tag"),
                        tooltip: (0, _._)("#Create_Home_SortBy_Tag_ttip"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { data: _, isLoading: _ } = (0, _._)({
            queryKey: ["useAppDLCListPartnerSite", _],
            queryFn: async () => {
              const _ = `${_._.PARTNER_BASE_URL}apps/ajaxgetdlc`,
                _ = {
                  appid: _,
                  sessionid: (0, _._)(),
                },
                _ = await _().get(_, {
                  params: _,
                });
              if (_?.data?.success != _._)
                throw (
                  "Fail to load DLC list for appid " +
                  _ +
                  " with error: " +
                  _?.data?.message
                );
              return _.data.dlcids || [];
            },
            enabled: !!_,
          });
          return _ ? null : _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgDLCSettings: _, parentAppID: _, dlcAppID: _ } = _,
            [_, _] = (0, _.useState)(() => _);
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)("h2", {
                children: (0, _._)("#DLC_Dependency_Title"),
              }),
              (0, _.jsx)("hr", {}),
              (0, _.jsx)("p", {
                children: (0, _._)("#DLC_Dependency_Desc"),
              }),
              (0, _.jsx)(_, {
                parentAppID: _,
                dlcAppID: _,
                fnSelectedDLCAppID: (_) => {
                  _.findIndex((_) => _.dlc_appid == _) == -1 &&
                    _([
                      ..._,
                      {
                        dlc_appid: _,
                        config: "dlc_required",
                      },
                    ]);
                },
              }),
              (0, _.jsx)(_, {
                rgDLCInfo: _,
                fnSetDLCInfo: _,
              }),
              (0, _.jsx)(_, {
                rgDLCInfo: _,
              }),
            ],
          });
        }
        function _(_) {
          const { rgDLCInfo: _ } = _,
            [_, _] = (0, _.useState)(() => _?.length || 0);
          (0, _.useEffect)(() => {
            _?.length > _ && _(_.length);
          }, [_, _]);
          const _ = (0, _.useMemo)(() => {
            const _ = new Array();
            for (let _ = _.length || 0; _ < _; ++_)
              _.push(
                (0, _.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `app[dlc_dependency][${_}]`,
                    value: void 0,
                  },
                  "dependancy_del" + _,
                ),
              );
            return _;
          }, [_, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _?.map((_, _) =>
                (0, _.jsxs)(
                  "div",
                  {
                    children: [
                      (0, _.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${_}][dlc_appid]`,
                        value: _.dlc_appid,
                      }),
                      (0, _.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${_}][config]`,
                        value: _.config,
                      }),
                    ],
                  },
                  "dependency_input" + _.dlc_appid + "_" + _,
                ),
              ),
              _,
            ],
          });
        }
        const _ = {
          include_assets: !0,
          include_release: !0,
        };
        function _(_) {
          const { rgDLCInfo: _, fnSetDLCInfo: _ } = _;
          return (0, _.jsx)(_._, {
            items: _,
            render: (_, _) =>
              (0, _.jsx)(
                _,
                {
                  dependency: _,
                  index: _,
                  fnSetDLCInfo: (_) => {
                    const _ = [..._];
                    (0, _._)(
                      _[_].dlc_appid == _.dlc_appid,
                      "AppID don't match, what gives",
                    ),
                      console.log(),
                      (_[_].config = _.config),
                      _(_);
                  },
                },
                "row" + _.dlc_appid,
              ),
            onDelete: (_) => {
              const _ = [..._];
              _.splice(_, 1), _(_);
            },
            onReorder: (_) => _([..._]),
          });
        }
        const _ = [
          {
            label: (0, _._)("#DLC_Dependency_Require"),
            tooltip: (0, _._)("#DLC_Dependency_Require_ttip"),
            data: "dlc_required",
          },
          {
            label: (0, _._)("#DLC_Dependency_Recommended"),
            tooltip: (0, _._)("#DLC_Dependency_Recommended_ttip"),
            data: "dlc_recommended",
          },
        ];
        function _(_) {
          const { dependency: _, fnSetDLCInfo: _ } = _;
          return (0, _.jsx)(_, {
            appid: _.dlc_appid,
            elEditor: (0, _.jsx)("div", {
              className: _.RelationshipType,
              children: (0, _.jsx)(_._, {
                label: (0, _._)("#DLC_Dependency_Relationship"),
                rgOptions: _,
                selectedOption: _.config,
                onChange: (_) => {
                  if (_.config != _.data) {
                    const _ = {
                      ..._,
                    };
                    (_.config = _.data), _(_);
                  }
                },
              }),
            }),
          });
        }
        function _(_) {
          const { parentAppID: _, fnSelectedDLCAppID: _, dlcAppID: _ } = _,
            [_, _] = (0, _.useState)(null),
            _ = _(_),
            _ = (0, _._)(_, _),
            _ = (0, _.useMemo)(
              () =>
                _ != _._ && _
                  ? _.filter((_) => _ != _).map((_) => {
                      const _ = _._.Get().GetApp(_);
                      return {
                        value: _,
                        label: `${_ ? _.GetName() : ""} (Appid: ${_})`,
                      };
                    })
                  : [],
              [_, _, _],
            );
          return !_ || _ == _._
            ? (0, _.jsx)(_._, {
                size: "small",
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsxs)("div", {
                className: _.SelectorRow,
                children: [
                  (0, _.jsx)(_._, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, _._)("#Create_Home_Select_App"),
                    options: _,
                    value: _.find((_) => _.value === _),
                    onChange: (_) => _(_.value),
                  }),
                  (0, _.jsx)(_._, {
                    disabled: !_,
                    onClick: () => {
                      _(_), _(void 0);
                    },
                    children: (0, _._)("#DLC_Dependency_Select"),
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgDLC: _, parentappid: _ } = _,
            [_, _] = _.useState(_ ? [..._] : []),
            [_, _] = _.useState([]);
          _.useEffect(() => {
            _(_?.rgDLC ? [..._.rgDLC] : []);
          }, [_]);
          const _ = (_) => {
            const _ = [..._];
            (_[_].bDeleted = !0), _(_);
          };
          _.useEffect(() => {
            const _ = Array();
            let _ = 0;
            for (
              _.forEach((_) => {
                _.bDeleted ||
                  (_.push(
                    _.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${_}][appid]`,
                      value: _.appid,
                    }),
                  ),
                  _.push(
                    _.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${_}][itemid]`,
                      value: _.itemid,
                    }),
                  ),
                  _.push(
                    _.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${_}][highlight]`,
                      value: _ == 0 && _.highlight ? _.highlight : "",
                    }),
                  ),
                  _.push(
                    _.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${_}][highlight_reason]`,
                      value:
                        _ == 0 && _.highlight_reason ? _.highlight_reason : "",
                    }),
                  ),
                  _++);
              });
              _ < _.length;
            ) {
              let _ = _.createElement("input", {
                type: "hidden",
                name: `app[related_items][dlc][${_}]`,
                value: "",
              });
              _.push(_), _++;
            }
            _(_);
          }, [_.length, _]);
          const _ = (_, _) => {
              if (isNaN(_) || isNaN(_)) return;
              const _ = [..._];
              _.splice(_, 0, _.splice(_, 1)[0]), _(_);
            },
            _ = (_, _) => {
              const _ = [..._];
              (_[_].highlight = _.highlight),
                (_[_].highlight_reason = _.highlight_reason),
                _(_);
            },
            _ = (0, _.jsx)(_._, {
              className: _.AddDLCButton,
              onClick: (_) =>
                (0, _._)(
                  (0, _.jsx)(_, {
                    rgDLCItems: _,
                    parentAppID: _,
                    onSelected: (_, _, _, _) => {
                      const _ = {
                          itemid: "" + _,
                          appid: "" + _,
                          name: _,
                        },
                        _ = _ ? [_, ..._] : [..._, _];
                      _(_);
                    },
                  }),
                  (0, _._)(_),
                ),
              children: (0, _._)("#StoreAdmin_Add_DLC") + "...",
            });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsx)(_._, {
                items: _,
                onDelete: (_) => _(_),
                onMove: (_, _) => _(_, _),
                render: (_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      item: _,
                      index: _,
                      fnUpdateHighlight: _,
                    },
                    _?.itemid ?? _?.appid,
                  ),
              }),
              ..._,
            ],
          });
        }
        function _(_) {
          const {
              closeModal: _,
              rgDLCItems: _,
              onSelected: _,
              parentAppID: _,
            } = _,
            _ = _._._,
            [_, _] = _.useState(null),
            _ = (_, _) => {
              _({
                appid: _,
                itemid: _,
              });
            },
            [_] = (0, _._)(_?.appid, _, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            _ = _.useCallback(
              (_) => {
                _(_?.appid, _?.itemid, _?.GetName(), _);
              },
              [_, _, _],
            );
          return (0, _.jsxs)(_._, {
            title: (0, _._)("#StoreAdmin_Add_DLC"),
            closeModal: _,
            className: _.AddDLCDialog,
            children: [
              (0, _.jsx)(_._, {
                children: (0, _.jsxs)("div", {
                  className: _.AppSelectCtn,
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)("#StoreAdmin_Add_DLC_Desc"),
                    }),
                    (0, _.jsx)(_._, {
                      fnSetItemID: _,
                      itemType: _,
                      fnFilterID: (_) =>
                        _.findIndex((_) => parseInt(_.appid) == _) == -1,
                      bIncludeRetired: !1,
                      bOnlyDLC: !0,
                      rgParentAppIDs: [_],
                      bRunQueryOnLoad: !0,
                    }),
                    !!_?.appid &&
                      (0, _.jsxs)("div", {
                        className: _.DLCDisplayContainer,
                        children: [
                          (0, _.jsx)("div", {
                            children: _?.GetName()
                              ? _.GetName() + " (" + _.GetID() + ")"
                              : _.appid,
                          }),
                          (0, _.jsx)("img", {
                            src:
                              _?.GetAssets().GetSmallCapsuleURL() ||
                              _?.GetAssets().GetHeaderURL(),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, _.jsxs)(_._, {
                className: _.AddDLCFooter,
                children: [
                  (0, _.jsx)(_._, {
                    disabled: !_,
                    onClick: () => {
                      _(!0), _ && _();
                    },
                    children: (0, _._)("#StoreAdmin_Add_To_Top"),
                  }),
                  (0, _.jsx)(_._, {
                    disabled: !_,
                    onClick: () => {
                      _(!1), _ && _();
                    },
                    children: (0, _._)("#StoreAdmin_Add_To_Bottom"),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: () => {
                      _ && _();
                    },
                    children: (0, _._)("#Button_Cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { item: _, index: _, fnUpdateHighlight: _ } = _,
            _ = !_.bRetired && !_.bUnlisted,
            _ = _ == 0 && _,
            _ = _.useMemo(
              () => [
                {
                  label: (0, _._)("#StoreAdmin_Highlight_NoneSelected"),
                  data: "",
                },
                {
                  label: (0, _._)("#StoreAdmin_Highlight_New"),
                  data: _,
                },
                {
                  label: (0, _._)("#StoreAdmin_Highlight_ComingSoon"),
                  data: _,
                },
                {
                  label: (0, _._)("#StoreAdmin_Highlight_PlayerFavorite"),
                  data: _,
                },
                {
                  label: (0, _._)("#StoreAdmin_Highlight_Recommended"),
                  data: _,
                },
                {
                  label: (0, _._)("#StoreAdmin_Highlight_NewPlayer"),
                  data: _,
                },
              ],
              [],
            ),
            _ = () => {
              (_.highlight = !_.highlight), _(_, _);
            },
            _ = (_) => {
              (_.highlight_reason = _.data), _(_, _);
            };
          if (!_) return null;
          const _ = (0, _._)(
            _.DLCItem,
            _.bDeleted && _.DLCItemDeleted,
            !_ && _.DLCItemNotHighlightEligible,
          );
          return (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("a", {
                href: _._.PARTNER_BASE_URL + "apps/landing/" + _.appid,
                children: _.name || _.appid,
              }),
              _.bRetired &&
                (0, _.jsxs)("span", {
                  className: _.LabelNotHighlightEligible,
                  children: ["(", (0, _._)("#StoreAdmin_Retired"), ")"],
                }),
              !_.bRetired &&
                _.bUnlisted &&
                (0, _.jsxs)("span", {
                  className: _.LabelNotHighlightEligible,
                  children: ["(", (0, _._)("#StoreAdmin_Unlisted"), ")"],
                }),
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      className: _.Highlight,
                      checked: _.highlight,
                      onClick: _,
                      label: (0, _._)("#StoreAdmin_Highlight_Checkbox"),
                    }),
                    _.highlight &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("div", {
                            className: _.HighlightDropDownLabel,
                            children: (0, _._)("#StoreAdmin_Highlight_Reason"),
                          }),
                          (0, _.jsx)("div", {
                            className: _.HighlightDropDown,
                            children: (0, _.jsx)(_._, {
                              rgOptions: _,
                              onChange: _,
                              selectedOption: _.highlight_reason
                                ? parseInt("" + _.highlight_reason)
                                : "",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgPinnedBundles: _, rgEnabledBundles: _ } = _,
            [_, _] = (0, _.useState)(_),
            _ = _.filter(
              (_) => _.findIndex((_) => _.bundleid === _.bundleid) === -1,
            );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                pinnedBundles: _,
                unpinnedBundles: _,
                setPinnedBundles: _,
              }),
              (0, _.jsx)(_, {
                pinnedBundles: _,
                nInitialPinnedBundles: _.length,
              }),
            ],
          });
        }
        function _(_) {
          const { pinnedBundles: _, nInitialPinnedBundles: _ } = _;
          let _ = 0,
            _ = [];
          for (; _ < Math.max(_, _.length); ) {
            if (_ < _.length) {
              const _ = _[_];
              _.push({
                index: _,
                value: _.bundleid,
              });
            } else
              _.push({
                index: _,
                value: "",
              });
            _++;
          }
          return (0, _.jsx)("div", {
            className: _.PinnedBundlesHiddenInputs,
            children: _.map((_) =>
              (0, _.jsx)(
                "input",
                {
                  type: "hidden",
                  name: `app[pinned_bundles][${_.index}]`,
                  value: _.value,
                },
                _.index,
              ),
            ),
          });
        }
        function _(_) {
          const {
              pinnedBundles: _,
              unpinnedBundles: _,
              setPinnedBundles: _,
            } = _,
            _ = (_) => {
              const _ = [..._];
              _.splice(_, 1), _(_);
            },
            _ = (_, _) => {
              const _ = new Array(..._),
                [_] = _.splice(_, 1);
              _.splice(_, 0, _), _(_);
            },
            _ = (_) => {
              const _ = _.find((_) => _.bundleid === _.value);
              if (_ === void 0) return;
              const _ = _.concat([_]);
              _(_);
            };
          return (0, _.jsxs)("div", {
            className: _.PinnedBundlesEditor,
            children: [
              (0, _.jsx)(_, {
                unpinnedBundles: _,
                onChange: _,
              }),
              (0, _.jsx)(_, {
                pinnedBundles: _,
                onDelete: _,
                onMove: _,
              }),
            ],
          });
        }
        function _(_) {
          const { unpinnedBundles: _, onChange: _ } = _,
            _ = _.map((_) => ({
              value: _.bundleid,
              label: _.name,
            }));
          return (0, _.jsx)(_._, {
            className: "react-select-container",
            classNamePrefix: "react-select",
            isSearchable: !0,
            isMulti: !1,
            placeholder: (0, _._)("#PinnedBundles_Placeholder"),
            options: _,
            onChange: _,
            controlShouldRenderValue: !1,
            noOptionsMessage: () => (0, _._)("#PinnedBundles_NoOptions"),
          });
        }
        function _(_) {
          const { pinnedBundles: _, onDelete: _, onMove: _ } = _;
          if (_.length === 0)
            return (0, _.jsx)("div", {
              className: _.EmptyPinnedBundleList,
              children: (0, _._)("#PinnedBundles_NoPinnedBundles"),
            });
          const _ = (_, _) =>
            (0, _.jsx)("div", {
              className: _.PinnedBundleRow,
              children: (0, _.jsxs)("a", {
                href: `${_._.PARTNER_BASE_URL}bundles/view/${_.bundleid}`,
                children: [_.name, " (", _.bundleid, ")"],
              }),
            });
          return (0, _.jsx)(_._, {
            items: _,
            onDelete: _,
            onMove: _,
            render: _,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _() {
          const _ = new Map();
          return (
            (0, _._)("current_prices", "application_config").forEach((_) => {
              _.set(_.packageid, _);
            }),
            _
          );
        }
        function _() {
          const [_, _] = (0, _.useState)(() => _());
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 20,
          _ = 900 * 1e3,
          _ = "PackagePriceChanges",
          _ = new Map();
        async function _(_) {
          const _ = {
              packageids: _.join(","),
            },
            _ = await _().get(
              `${_._.PARTNER_BASE_URL}pricing/admin/packagepricechanges`,
              {
                params: _,
                withCredentials: !0,
              },
            );
          if (!_ || _.status != 200 || _.data?.success != _._)
            throw `Load package price changes failed ${((0, _._))(_).strErrorMsg}`;
          const _ = new Map();
          return (
            _.data.packages?.forEach((_) => _.set(_.packageid, _)),
            _.map(
              (_) =>
                _.get(_) || {
                  packageid: _,
                  total_changes: 0,
                  changes: [],
                },
            )
          );
        }
        const _ = new (_())((_) => _(_), {
          cache: !1,
          maxBatchSize: _,
        });
        function _(_, _) {
          const _ = new Map();
          return (
            _.forEach((_, _) => {
              _.data
                ? _.set(_.data.packageid, _.data)
                : _.isError &&
                  _.set(_[_], {
                    packageid: _[_],
                    bLoadFailed: !0,
                  });
            }),
            _.size > 0 ? _ : _
          );
        }
        function _(_) {
          const _ = (0, _.useMemo)(
              () => Array.from(new Set(_)).filter(Boolean),
              [_],
            ),
            _ = (0, _.useCallback)((_) => _(_, _), [_]);
          return (0, _._)({
            queries: _.map((_) => ({
              queryKey: [_, _],
              queryFn: () => _.load(_),
              staleTime: _,
              retry: 1,
            })),
            combine: _,
          });
        }
        class _ {
          m_mapPackageToPartners = new Map();
          GetMap() {
            return this.m_mapPackageToPartners;
          }
          static s_Singleton;
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          constructor() {}
          Init() {
            (0, _._)("package_to_paid_partners", "application_config").forEach(
              (_) => {
                this.m_mapPackageToPartners.has(_.packageid) ||
                  this.m_mapPackageToPartners.set(_.packageid, new Array()),
                  this.m_mapPackageToPartners
                    .get(_.packageid)
                    .push(_.partnerid);
              },
            );
          }
        }
        function _() {
          const [_, _] = (0, _.useState)(() => _.Get().GetMap());
          return _;
        }
        function _(_) {
          const _ = _();
          return useMemo(() => {
            if (_) {
              const _ = new Set();
              return (
                _.forEach((_) => {
                  if (_.has(_)) {
                    const _ = _.get(_);
                    _.length <= 3 && _.forEach((_) => _.add(_));
                  }
                }),
                Array.from(_.values())
              );
            }
            return [];
          }, [_, _]);
        }
        var _ = __webpack_require__("chunkid"),
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
          };
        const _ = class _ {
          m_rgMapProposal = new Map();
          m_nTotalItems = 0;
          m_proposalAddRemoveCallback = new _._();
          GetProposals() {
            return Array.from(this.m_rgMapProposal.values());
          }
          GetProposalListChange() {
            return this.m_proposalAddRemoveCallback;
          }
          async LoadMoreProposal() {
            return (
              this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()), !1
            );
          }
          async RejectProposal(_, _, _) {
            let _ = null;
            try {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("packageid", "" + _),
                _.append("json", "1"),
                _.append("reason_code", _.join(",") || ""),
                _.append("email_message", _);
              const _ = `${_._.PARTNER_BASE_URL}packages/rejectpricing`,
                _ = await _().post(_, _, {
                  withCredentials: !0,
                });
              if (_.status == 200 && _.data?.success == _._)
                return (
                  console.log(
                    `Proposal for package ${_} successfully rejected`,
                  ),
                  this.m_rgMapProposal.delete(_),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  !0
                );
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::RejectProposal failed with " +
                  _.strErrorMsg,
                _,
              ),
              !1
            );
          }
          async AcceptProposal(_, _, _) {
            let _ = null;
            try {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("packageid", "" + _),
                _.append("json", "1"),
                _.append("proposalkey", "" + _),
                _.append("partner_will_publish", _ ? "1" : "0");
              const _ = `${_._.PARTNER_BASE_URL}packages/approvepricing`,
                _ = await _().post(_, _, {
                  withCredentials: !0,
                });
              if (_.status == 200 && _.data?.success == _._)
                return (
                  console.log(
                    `Proposal for package ${_} successfully accepted`,
                    _.data.output,
                  ),
                  this.m_rgMapProposal.delete(_),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  null
                );
              if (((_ = (0, _._)(_)), _?.data?.output))
                return (
                  console.log(
                    "CPriceProposalReviewRequiredStore::AcceptProposal message information:",
                    _.data.output,
                    _.strErrorMsg,
                  ),
                  _.data.output
                );
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::AcceptProposal failed with " +
                  _.strErrorMsg,
                _,
              ),
              "generic failure"
            );
          }
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {
            const _ = (0, _._)("proposed_prices", "application_config");
            this.ValidateInputDefault(_) &&
              _.forEach((_) => this.m_rgMapProposal.set(_.packageid, _)),
              (this.m_nTotalItems = (0, _._)(
                "total_proposed_prices",
                "application_config",
              ));
          }
          ValidateInputDefault(_) {
            const _ = _;
            return _ && Array.isArray(_) && _.length > 0 && _[0].packageid > 0;
          }
        };
        _([_._], _.prototype, "LoadMoreProposal", 1),
          _([_._], _.prototype, "RejectProposal", 1),
          _([_._], _.prototype, "AcceptProposal", 1);
        let _ = _;
        function _() {
          const [_, _] = (0, _.useState)(() => _.Get().GetProposals());
          return (0, _._)(_.Get().GetProposalListChange(), _), _;
        }
        function _() {
          return {
            fnLoadMoreProposal: _.Get().LoadMoreProposal,
            fnRejectProposal: _.Get().RejectProposal,
            fnAcceptProposal: _.Get().AcceptProposal,
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          include_release: !0,
        };
        var _ = ((_) => (
          (_[(_.None = 0)] = "None"),
          (_[(_.Approved = 1)] = "Approved"),
          (_[(_.Rejected_CountryPricing = 2)] = "Rejected_CountryPricing"),
          (_[(_.Rejected_ExceedsMaxPrice = 3)] = "Rejected_ExceedsMaxPrice"),
          (_[(_.Rejected_PriceIncreaseTooHigh = 4)] =
            "Rejected_PriceIncreaseTooHigh"),
          (_[(_.Rejected_NoGuidelineMatch = 5)] = "Rejected_NoGuidelineMatch"),
          (_[(_.Rejected_MissingCurrencies = 6)] =
            "Rejected_MissingCurrencies"),
          (_[(_.Rejected_MissingRegions = 7)] = "Rejected_MissingRegions"),
          (_[(_.Failed = 8)] = "Failed"),
          _
        ))(_ || {});
        const _ = {
          0: "None",
          1: "Auto-Approvable",
          2: "Contains Country-Override Pricing",
          3: "Exceeds Max Auto-Approvable Price",
          4: "Prices Above Guidance Thresholds",
          5: "No Guideline Match",
          6: "Missing Currencies",
          7: "Missing Regions",
          8: "Auto-Approval Failed",
        };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        function _(_) {
          const _ = new Array();
          return (
            _.forEach((_) => {
              _.proposed_prices.base_amounts.some(
                (_) => _.amount.currency_code == _,
              ) || _.push((0, _._)(_));
            }),
            _.forEach((_) => {
              const _ = (0, _._)(_);
              _.proposed_prices.region_amounts.some((_) => _.name == _) ||
                _.push((0, _._)(_));
            }),
            _
          );
        }
        function _(_) {
          const _ = new Array();
          return (
            _.proposed_prices.base_amounts.forEach((_) => {
              _.includes(_.amount.currency_code) ||
                (console.log(
                  "Unexpected currency code: " + _.amount.currency_code,
                  _,
                ),
                _.push(
                  `Currency Code: "${_.amount.currency_code}" with price in cents ${_.amount.amount}`,
                ));
            }),
            _.proposed_prices.region_amounts.forEach((_) => {
              _.includes((0, _._)(_.name.toUpperCase())) ||
                (console.log(
                  `Unexpected region code: ${_.name} and currency code ${_.amount.currency_code} with price in cents ${_.amount.amount}`,
                ),
                _.push(_.name));
            }),
            _
          );
        }
        function _(_, _, _) {
          if (_) {
            const _ = (0, _._)(_);
            return _?.current_costs?.region_amounts?.find((_) => _.region == _)
              ?.amount.amount;
          }
          return _?.current_costs?.base_amounts?.find(
            (_) => _.currency_code == _,
          )?.amount;
        }
        function _(_, _, _, _, _, _) {
          _.price * _._ < _.amount.amount
            ? _.push({
                strCurrency: _ ? (0, _._)(_) : (0, _._)(_.amount.currency_code),
                nAmountCents: _.amount.amount,
                nPercent: Math.floor((_.amount.amount / _.price) * 100) - 100,
                nProposedPrice: _.amount.amount,
                nGuidancePrice: _.price,
                nOriginalPrice: _(_, _, _.amount.currency_code),
              })
            : _.price * _._ > _.amount.amount &&
              _.push({
                strCurrency: _ ? (0, _._)(_) : (0, _._)(_.amount.currency_code),
                nAmountCents: _.amount.amount,
                nPercent: 100 - Math.floor((_.amount.amount / _.price) * 100),
                nProposedPrice: _.amount.amount,
                nGuidancePrice: _.price,
                nOriginalPrice: _(_, _, _.amount.currency_code),
              });
        }
        function _(_, _, _, _) {
          const _ = new Array(),
            _ = new Array(),
            _ = _.get(_.packageid);
          return (
            _.proposed_prices.base_amounts.map((_) => {
              const _ =
                _.GetRecommendPrice(_, _.amount.currency_code) ||
                _.GetScaledRecommendedPrice(_, _.amount.currency_code);
              _(_, _, null, _, _, _);
            }),
            _.proposed_prices.region_amounts.map((_) => {
              const _ = (0, _._)(_.name),
                _ =
                  _.GetRecommendPrice(_, _._, _) ||
                  _.GetScaledRecommendedPrice(_, _._, _);
              _(_, _, _, _, _, _);
            }),
            {
              rgAboveThreshold: _.sort((_, _) => _.nPercent - _.nPercent),
              rgBelowThreshold: _.sort((_, _) => _.nPercent - _.nPercent),
            }
          );
        }
        function _(_) {
          const _ = Math.floor(Date.now() / 1e3);
          return _.BIsReleased() && _.GetReleaseDateRTime() + 720 * 60 * 60 > _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 720 * 60 * 60;
        function _(_) {
          const { packageID: _, priceChanges: _ } = _,
            _ = _?.changes?.[0];
          return (0, _.jsxs)("div", {
            className: _.PriceChangeSummary,
            children: [
              (0, _.jsx)(_, {
                priceChanges: _,
              }),
              (0, _.jsx)("a", {
                href: `${_._.PARTNER_BASE_URL}packages/pricehistory/${_}`,
                target: "_blank",
                rel: "noreferrer",
                children: "Show Package Price History",
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  priceChanges: _,
                }),
            ],
          });
        }
        function _(_) {
          const { priceChanges: _ } = _;
          if (!_)
            return (0, _.jsx)("div", {
              className: _.Pending,
              children: "Looking up published price changes...",
            });
          if (_.bLoadFailed)
            return (0, _.jsx)("div", {
              className: _.LoadFailed,
              children: "Could not load published price changes",
            });
          const _ = _.changes?.[0];
          if (!_)
            return (0, _.jsx)("div", {
              className: _.Pending,
              children: "No previously published price change",
            });
          const _ = Date.now() / 1e3 - _.time < _;
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _.jsx)(_, {
              priceChanges: _,
            }),
            direction: "right",
            nDelayShowMS: 150,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_.LastChange, _ && _.RecentChange),
              children: [
                "Price last published ",
                (0, _._)(_.time),
                " (",
                (0, _._)(_.time),
                ")",
              ],
            }),
          });
        }
        function _(_) {
          const { priceChanges: _ } = _,
            _ = _.total_changes || 0;
          return (0, _.jsxs)("div", {
            className: _.ChangeCount,
            children: [
              _,
              " published price ",
              _ == 1 ? "change" : "changes",
              " total",
            ],
          });
        }
        function _(_) {
          const { priceChanges: _ } = _,
            _ = _.changes || [];
          return (0, _.jsxs)("div", {
            className: _.PriceChangeToolTip,
            children: [
              (0, _.jsx)("div", {
                className: _.ToolTipTitle,
                children: "Recent published price changes",
              }),
              (0, _.jsxs)("table", {
                className: _.ChangeTable,
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      className: _.ChangeHeader,
                      children: [
                        (0, _.jsx)("th", {
                          children: "Published",
                        }),
                        (0, _.jsx)("th", {
                          children: "USD",
                        }),
                        (0, _.jsx)("th", {
                          children: "Change",
                        }),
                        (0, _.jsx)("th", {
                          children: "Currencies",
                        }),
                        (0, _.jsx)("th", {
                          children: "By",
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("tbody", {
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          change: _,
                        },
                        `${_.time}_${_}`,
                      ),
                    ),
                  }),
                ],
              }),
              _.total_changes > _.length &&
                (0, _.jsxs)("div", {
                  className: _.ToolTipFooter,
                  children: [
                    "Showing the last ",
                    _.length,
                    " of ",
                    _.total_changes,
                    " published changes",
                  ],
                }),
              (0, _.jsx)("div", {
                className: _.ToolTipFooter,
                children:
                  "Open the package price history for the full per-currency detail.",
              }),
            ],
          });
        }
        function _(_) {
          const { change: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("tr", {
                className: _.ChangeRow,
                children: [
                  (0, _.jsxs)("td", {
                    children: [
                      (0, _._)(_.time),
                      (0, _.jsx)("div", {
                        className: _.TimeSince,
                        children: (0, _._)(_.time),
                      }),
                    ],
                  }),
                  (0, _.jsx)("td", {
                    className: _.Price,
                    children: _.usd_amount ? (0, _._)(_.usd_amount, _._) : "--",
                  }),
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)(_, {
                      change: _,
                    }),
                  }),
                  (0, _.jsxs)("td", {
                    className: _.Currencies,
                    children: [
                      _.currency_count || 0,
                      !!_.country_count &&
                        (0, _.jsxs)("span", {
                          children: [" +", _.country_count, " country"],
                        }),
                    ],
                  }),
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)(_._, {
                      accountID: _.account,
                    }),
                  }),
                ],
              }),
              !!_.notes &&
                (0, _.jsx)("tr", {
                  className: _.ChangeRow,
                  children: (0, _.jsx)("td", {
                    className: _.Notes,
                    colSpan: 5,
                    children: _.notes,
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { change: _ } = _;
          if (!_.usd_amount)
            return (0, _.jsx)("span", {
              className: _.NoChange,
              children: "no USD price",
            });
          if (_.first_published)
            return (0, _.jsx)("span", {
              className: _.FirstPrice,
              children: "first published price",
            });
          if (!_.usd_previous)
            return (0, _.jsx)("span", {
              className: _.NoChange,
              children: "previous USD price unknown",
            });
          if (_.usd_amount == _.usd_previous)
            return (0, _.jsx)("span", {
              className: _.NoChange,
              children: "USD unchanged",
            });
          const _ = _.usd_amount > _.usd_previous,
            _ = Math.round(
              ((_.usd_amount - _.usd_previous) / _.usd_previous) * 100,
            );
          return (0, _.jsxs)("span", {
            className: _ ? _.Increase : _.Decrease,
            children: [
              _ ? "\u25B2" : "\u25BC",
              " ",
              Math.abs(_),
              "% from ",
              (0, _._)(_.usd_previous, _._),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { proposal: _, mapCurrentPrices: _, oGuideline: _ } = _,
            { fnAcceptProposal: _ } = _(),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_] = (0, _._)(_.packageid, _);
          return _
            ? (0, _.jsx)("div", {
                children: (0, _.jsx)(_._, {
                  string: "Accepting",
                  size: "small",
                  position: "center",
                }),
              })
            : (0, _.jsxs)("div", {
                className: _.ActionsCtn,
                children: [
                  (0, _.jsxs)(_._, {
                    onClick: async () => {
                      _(!0),
                        _(_.packageid, _.partner_will_publish, _.proposal_key)
                          .then(_)
                          .finally(() => _(!1));
                    },
                    children: ["Publish Proposal ", _ ? " (FORCE)" : ""],
                  }),
                  !!_ &&
                    (0, _.jsxs)("div", {
                      children: [
                        "Publish failed with: ",
                        _,
                        ", publish again to bypass check",
                      ],
                    }),
                  (0, _.jsx)(_._, {
                    onClick: (_) => {
                      const _ = new Array();
                      _(_).length > 0 && _.push("currency_missing");
                      const _ = _.proposed_prices.base_amounts.find(
                          (_) => _.amount.currency_code == _._,
                        )?.amount.amount,
                        _ = _(_, _, _, _);
                      (_.rgAboveThreshold.length > 0 ||
                        _.rgBelowThreshold.length > 0) &&
                        _.push("out_of_guideline"),
                        _ && _(_) && _.push("within_30_days"),
                        (0, _._)(
                          (0, _.jsx)(_, {
                            proposal: _,
                            errors: _,
                          }),
                          (0, _._)(_),
                        );
                    },
                    children: "Reject...",
                  }),
                ],
              });
        }
        const _ = new Map([
          ["within_30_days", "Within 30 Days of Release"],
          ["currency_missing", "Missing one or more currency"],
          ["out_of_guideline", "One or more currency out of expected range"],
        ]);
        function _(_) {
          const { proposal: _, closeModal: _, errors: _ } = _,
            [_, _] = (0, _.useState)(() => _),
            [_, _] = (0, _.useState)(""),
            { fnRejectProposal: _ } = _(),
            _ = `Reject pricing proposal for package ${_.packageid}`,
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: _,
                closeModal: _,
              })
            : (0, _.jsxs)(_._, {
                strTitle: _,
                strDescription:
                  "Select the appropriate reasons for rejecting this price proposal. Each will surface to the user in the reject email.",
                bDisableBackgroundDismiss: !0,
                onCancel: _,
                onOK: () => {
                  _.fnSetLoading(!0),
                    _(_.packageid, _, _)
                      .then((_) => {
                        _
                          ? _.fnSetSuccess(!0)
                          : (_.fnSetError(!0),
                            _.fnSetStrError(
                              "Failed to reject; check console for details",
                            ));
                      })
                      .catch((_) => {
                        _.fnSetError(!0),
                          _.fnSetStrError(
                            "Failed to reject; check console for details",
                          );
                      });
                },
                children: [
                  (0, _.jsx)(_._, {
                    children: "Rejection type:",
                  }),
                  Array.from(_.keys()).map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        checked: _.includes(_),
                        onChange: (_) => {
                          const _ = _.filter((_) => _ != _);
                          _ && _.push(_), _(_);
                        },
                        label: _.get(_),
                      },
                      "check" + _,
                    ),
                  ),
                  (0, _.jsx)("br", {}),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsx)(_._, {
                    children:
                      "Optionally include custom message text in rejection email",
                  }),
                  (0, _.jsx)("textarea", {
                    onChange: (_) => _(_.target.value),
                    value: _,
                    className: _.NotesField,
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
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
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 22,
          _ = 23,
          _ = 24,
          _ = 25,
          _ = 26,
          _ = 27,
          _ = 28,
          _ = 29,
          _ = 30,
          _ = 31,
          _ = 32,
          _ = 33,
          _ = 34,
          _ = 35,
          _ = 36,
          _ = 37,
          _ = 38,
          _ = 39,
          _ = 40,
          _ = 41,
          _ = 42,
          _ = 43,
          _ = 44,
          _ = 45,
          _ = 46,
          _ = 47,
          _ = 48,
          _ = 49,
          _ = 50,
          _ = 51,
          _ = 52,
          _ = 53,
          _ = 54,
          _ = 55,
          _ = 56,
          _ = 57,
          _ = 58,
          _ = 59,
          _ = 60,
          _ = 61,
          _ = 62,
          _ = 63,
          _ = 64,
          _ = 65,
          _ = 66,
          _ = 67,
          _ = 68,
          _ = 69,
          _ = 70,
          _ = 71,
          _ = 72,
          _ = 73,
          _ = 74,
          _ = 75,
          _ = 76,
          _ = 77,
          _ = 78,
          _ = 79,
          _ = 80,
          _ = 81,
          _ = 82,
          _ = 83,
          _ = 84,
          _ = 85,
          _ = 86,
          _ = 87,
          _ = 88,
          _ = 89,
          _ = 90,
          _ = 91,
          _ = 92,
          _ = 93,
          _ = 94,
          _ = 95,
          _ = 96,
          _ = 97,
          _ = 98,
          _ = 99,
          _ = 100,
          _ = 101,
          _ = 102,
          _ = 103,
          _ = 104,
          _ = 105,
          _ = 106,
          _ = 107,
          _ = 108,
          _ = 109,
          _ = 110,
          _ = 111,
          _ = 112,
          _ = 113,
          _ = 0,
          _ = 101,
          _ = 102,
          _ = 103,
          _ = 104,
          _ = 105,
          _ = 106,
          _ = 107,
          _ = 108,
          _ = 109,
          _ = 110,
          _ = 111,
          _ = 112,
          _ = 113,
          _ = 114,
          _ = 115,
          _ = 116,
          _ = 117,
          _ = 118,
          _ = 119,
          _ = 120,
          _ = 121,
          _ = 122,
          _ = 123,
          _ = 124,
          _ = 125,
          _ = 126,
          _ = 127,
          _ = 128,
          _ = 129,
          _ = 130,
          _ = 131,
          _ = 132,
          _ = 133,
          _ = 134,
          _ = 201,
          _ = 202,
          _ = 203,
          _ = 204,
          _ = 205,
          _ = 206,
          _ = 207,
          _ = 208,
          _ = 209,
          _ = 210,
          _ = 211,
          _ = 212,
          _ = 213,
          _ = 214,
          _ = 215,
          _ = 216,
          _ = 217,
          _ = 301,
          _ = 302,
          _ = 303,
          _ = 304,
          _ = 305,
          _ = 306,
          _ = 307,
          _ = 308,
          _ = 320,
          _ = 321,
          _ = 350,
          _ = 351,
          _ = 352,
          _ = 353,
          _ = 354,
          _ = 355,
          _ = 356,
          _ = 360,
          _ = 361,
          _ = 362,
          _ = 363,
          _ = 364,
          _ = 365,
          _ = 370,
          _ = 371,
          _ = 372,
          _ = 373,
          _ = 374,
          _ = 375,
          _ = 376,
          _ = 380,
          _ = 381,
          _ = 401,
          _ = 402,
          _ = 403,
          _ = 404,
          _ = 405,
          _ = 406,
          _ = 407,
          _ = 408,
          _ = 409,
          _ = 410,
          _ = 411,
          _ = 412,
          _ = 413,
          _ = 414,
          _ = 415,
          _ = 416,
          _ = 417,
          _ = 418,
          _ = 419,
          _ = 501,
          _ = 601,
          _ = 602,
          _ = 603,
          _ = 701,
          _ = 702,
          _ = 703,
          _ = 704,
          _ = 705,
          _ = 706,
          _ = 707,
          _ = 708,
          _ = 709,
          _ = 801,
          _ = 802,
          _ = 803,
          _ = 804,
          _ = 805,
          _ = 806,
          _ = 807,
          _ = 808,
          _ = 809,
          _ = 810,
          _ = 811,
          _ = 812,
          _ = 813,
          _ = 814,
          _ = 815,
          _ = 816,
          _ = 901,
          _ = 902,
          _ = 903,
          _ = 904,
          _ = 905,
          _ = 906,
          _ = 907,
          _ = 908,
          _ = 909,
          _ = 910,
          _ = 911,
          _ = 912,
          _ = 913,
          _ = 914,
          _ = 915,
          _ = 916,
          _ = 917,
          _ = 918,
          _ = 919,
          _ = 920,
          _ = 921,
          _ = 922,
          _ = 923,
          _ = 924,
          _ = 925,
          _ = 926,
          _ = 927,
          _ = 928,
          _ = 929,
          _ = 930,
          _ = 931,
          _ = 932,
          _ = 933,
          _ = 934,
          _ = 935,
          _ = 936,
          _ = 937,
          _ = 938,
          _ = 939,
          _ = 940,
          _ = 941,
          _ = 942,
          _ = 943,
          _ = 944,
          _ = 945,
          _ = 1001,
          _ = 1002,
          _ = 1003,
          _ = 1004,
          _ = 1005,
          _ = 1006,
          _ = 1007,
          _ = 1101,
          _ = 1201,
          _ = 1202,
          _ = 1203,
          _ = 1301,
          _ = 1500,
          _ = 1600,
          _ = 1650,
          _ = 1700,
          _ = 1701,
          _ = 1702,
          _ = 1703;
        function _(_) {
          return "unknown EHelpRequestType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestReviewState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestStatsRollupInterval ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestStatsResponderType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpIssue ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestEscalationLevel ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestMsgType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestSortOrder ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestPOPType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAnnouncementPlacement ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETickerCategoryLanguageRule ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPreapprovalResolution ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestFeedbackCategory ( " + _ + " )";
        }
        function _(_) {
          return "unknown EHelpRequestFeedbackTargetType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFeedbackState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESupportActionSource ( " + _ + " )";
        }
        function _(_) {
          return "unknown ERefundSupportAction ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6, 10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    requires_update: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    hidden: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    approved: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    help_request_types: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    content: {
                      _: 7,
                      _: _,
                    },
                    button_text: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    replacement: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    payment_methods: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    appids: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    escalation_level: {
                      _: 12,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    partner_only: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    content: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    major_revision: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    minor_revision: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    author: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_update: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    from_sql: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.quicktext || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    quicktext: {
                      _: 1,
                      _: _,
                    },
                    english_reference: {
                      _: 2,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    log_type: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    version_string: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    log_contents: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    request_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.request_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    request_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetQuickText = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UploadUserApplicationLog = _;
          function _(_, _, _) {
            return _.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetApplicationLogDemand = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return (0, _._)({
            queryKey: ["PartnerTickets", _, _, _],
            queryFn: async () => {
              const _ = {
                nPublisherId: _,
                eHelpIssue: _,
                eHelpRequestType: _,
              };
              return (
                await _().get(
                  `${_._.PARTNER_BASE_URL}admin/ajaxfetchsupportticketforpartner`,
                  {
                    params: _,
                    withCredentials: !0,
                  },
                )
              ).data.tickets;
            },
          });
        }
        function _(_, _, _, _, _) {
          const _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              _.fnSetLoading(!0);
              const _ = new FormData();
              _.append("help_issue", "" + _),
                _.append("help_request_type", "" + _),
                _.append("appid", "" + _.appid),
                _.append("initial_text", _.strRequestTitle),
                _.append("issue_text", _.strRequestBody),
                _.append("sessionid", (0, _._)()),
                _.append("steamid", _),
                _.append("publisherid_selected", "" + _);
              const _ = await _().post(
                `${_._.PARTNER_BASE_URL}admin/ajaxcreatesupportticketforrequest/`,
                _,
              );
              if (_?.data?.success != _._)
                throw (
                  (_?.data?.message && _.fnSetStrError(_?.data?.message),
                  _?.data?.message || "create ticket failed generic")
                );
            },
            onSuccess() {
              _.fnSetSuccess(!0);
            },
            onError() {
              _.fnSetError(!0);
            },
            onSettled() {
              _.invalidateQueries({
                queryKey: ["PartnerTickets", _, _, _],
              });
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { partnerID: _, setTicketCount: _ } = _,
            { data: _ } = _(_, _, _),
            [_, _] = (0, _.useState)(2);
          return (
            (0, _.useEffect)(() => {
              _?.length > 0 && _(_?.length);
            }, [_, _]),
            !_ || _.length == 0
              ? null
              : (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)("br", {}),
                    (0, _.jsxs)("h3", {
                      children: ["Tickets ", _.length, ":"],
                    }),
                    _.slice(0, _).map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          helpReq: _,
                        },
                        _.help_requestid,
                      ),
                    ),
                    _ < _.length &&
                      (0, _.jsxs)("a", {
                        href: "#",
                        onClick: () => _(_.length),
                        children: ["Show all ", _.length, " Tickets"],
                      }),
                  ],
                })
          );
        }
        function _(_) {
          return _.startsWith("HT") && _.length === 14
            ? `${_.slice(0, 2)}-${_.slice(2, 6)}-${_.slice(6, 10)}-${_.slice(10)}`
            : _;
        }
        function _(_) {
          const { helpReq: _ } = _,
            _ = (0, _._)();
          return _
            ? (0, _.jsxs)("div", {
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)({
                      [_().ValveAccountTicket]:
                        _.findIndex((_) => _._ === _.accountid) >= 0,
                    }),
                    children: [
                      _.findIndex((_) => _._ == _.assigned_agent_accountid) >= 0
                        ? (0, _.jsxs)(_.Fragment, {
                            children: [
                              "Owned By: ",
                              (0, _.jsx)(_._, {
                                accountID: _.assigned_agent_accountid,
                              }),
                              ",",
                            ],
                          })
                        : (0, _.jsxs)(_.Fragment, {
                            children: [
                              "Created by: ",
                              (0, _.jsx)(_._, {
                                accountID: _.accountid,
                              }),
                              ",",
                            ],
                          }),
                      "Created on ",
                      (0, _._)(_.time_created),
                    ],
                  }),
                  (0, _.jsx)("br", {}),
                  (0, _.jsx)("p", {
                    children: _.issue_text,
                  }),
                  (0, _.jsx)("div", {}),
                  !!(
                    _.time_last_response &&
                    _.time_last_response > _.time_created
                  ) &&
                    (0, _.jsxs)("div", {
                      children: [
                        "Last Update ",
                        (0, _._)(_.time_last_response),
                      ],
                    }),
                  (0, _.jsx)("br", {}),
                  (0, _.jsx)("a", {
                    href: `${_._.HELP_BASE_URL}en/ticketmaster/ticket/${_(_.reference_code)}`,
                    target: "_blank",
                    children: "Open Ticket",
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                size: "small",
              });
        }
        function _(_) {
          const {
              nAccountIDProposer: _,
              packageID: _,
              mapPartnerPaidByPackage: _,
            } = _,
            _ = _.get(_);
          return _
            ? (0, _.jsx)(_._, {
                onClick: (_) =>
                  (0, _._)(
                    (0, _.jsx)(_, {
                      nAccountIDProposer: _,
                      packageID: _,
                      partnerID: _[0],
                    }),
                    (0, _._)(_),
                  ),
                children: "Create Ticket",
              })
            : (0, _.jsx)("div", {
                className: _.WarningStylesBackground,
                children:
                  "Warning: Package isn't associated with a partner... Cannot create ticket",
              });
        }
        const _ = {};
        function _(_) {
          const {
              partnerID: _,
              packageID: _,
              closeModal: _,
              nAccountIDProposer: _,
            } = _,
            [_] = (0, _._)(_),
            [_] = (0, _._)(_, _),
            _ = (0, _.useMemo)(
              () => _._.InitFromAccountID(_).ConvertTo64BitString(),
              [_],
            ),
            [_, _] = (0, _.useState)(() => _?.GetAppID() || 0),
            [_] = (0, _._)(_, _),
            [_, _] = (0, _.useState)(`Question about pricing for package ${_}`),
            [_, _] = (0, _.useState)("");
          (0, _.useEffect)(() => {
            _ && _ == 0 && _(_.GetAppID());
          }, [_, _]);
          const _ = (0, _._)(),
            _ = _(_, _, _, _, _);
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: "Create Ticket for Partner",
                closeModal: _,
              })
            : (0, _.jsxs)(_._, {
                strTitle: "Create Ticket for Partner",
                strDescription: `Create a pricing ticket for partner ${_?.name} (${_}) for Package ${_}. App ${_?.GetName() || ""} with ${_}. Please update ticket title and body`,
                bOKDisabled: !_ || _.trim().length == 0 || _.trim().length == 0,
                onOK: () =>
                  _.mutate({
                    appid: _,
                    strRequestTitle: _,
                    strRequestBody: _,
                  }),
                bAllowFullSize: !0,
                onCancel: _,
                bDisableBackgroundDismiss: _.trim().length > 0,
                children: [
                  (0, _.jsx)(_._, {
                    type: "text",
                    label: "Ticket Title",
                    placeholder: "Enter Ticket Title",
                    value: _,
                    onChange: (_) => _(_.currentTarget.value || ""),
                  }),
                  (0, _.jsx)(_._, {
                    children: "Enter Ticket Body",
                  }),
                  (0, _.jsx)("textarea", {
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                    cols: 80,
                    rows: 20,
                  }),
                  (0, _.jsx)(_._, {
                    type: "number",
                    label: "AppID to Associate with Ticket",
                    value: _,
                    onChange: (_) =>
                      _(Number.parseInt(_.currentTarget.value) || 0),
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              proposal: _,
              mapPartnerPaidByPackage: _,
              mapPriceChanges: _,
            } = _,
            [_] = (0, _._)(_.packageid, _),
            [_] = (0, _._)(_?.GetIncludedAppIDsOrSelf()?.[0], _),
            _ = `${_._.PARTNER_BASE_URL}store/packagelanding/${_.packageid}`;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.PackageInfoColumn, _.PackageInfoColumn),
            children: [
              (0, _.jsxs)("div", {
                className: _.PackageName,
                children: [
                  _
                    ? (0, _.jsxs)("span", {
                        children: [
                          (0, _.jsx)("a", {
                            href: _,
                            children: _.GetName(),
                          }),
                          " ",
                          `(${_.packageid})`,
                        ],
                      })
                    : (0, _.jsx)("a", {
                        href: _,
                        children: `Package ${_.packageid}`,
                      }),
                  _?.GetAppType() == _._._ &&
                    (0, _.jsx)("span", {
                      children: " (DLC)",
                    }),
                  _?.GetAppType() == _._._ &&
                    (0, _.jsx)("span", {
                      children: " (MOD)",
                    }),
                  _?.GetAppType() == _._._ &&
                    (0, _.jsx)("span", {
                      children: " (HARDWARE)",
                    }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.ReleaseDate,
                children:
                  _ && _.BIsVisible()
                    ? "Release On: " +
                      (_.GetReleaseDateRTime()
                        ? (0, _._)(_.GetReleaseDateRTime())
                        : " No Release date")
                    : "Store Visibility: Hidden",
              }),
              (0, _.jsx)(_, {
                packageID: _.packageid,
                priceChanges: _.get(_.packageid),
              }),
              (0, _.jsx)("div", {
                className: _.SubmissionBy,
                children: (0, _.jsx)(_._, {
                  accountID: _.account,
                }),
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                nAccountIDProposer: _.account_proposer,
                packageID: _.packageid,
                mapPartnerPaidByPackage: _,
              }),
              (0, _.jsx)(_, {
                packageID: _.packageid,
                mapPartnerPaidByPackage: _,
              }),
            ],
          });
        }
        function _(_) {
          const { packageID: _, mapPartnerPaidByPackage: _ } = _,
            _ = _.get(_);
          return _
            ? (0, _.jsx)("div", {
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      partnerID: _,
                    },
                    "partner" + _,
                  ),
                ),
              })
            : null;
        }
        function _(_) {
          const { partnerID: _ } = _,
            [_] = (0, _._)(_);
          return _
            ? (0, _.jsxs)("a", {
                href: `${_._.PARTNER_BASE_URL}admin/reviewpricesubmissions/?publisherID=${_.partnerid}`,
                children: [_.name, " (", _.partnerid, ")"],
              })
            : null;
        }
        function _(_) {
          const { amountInCents: _, className: _ } = _;
          return _
            ? (0, _.jsx)("div", {
                className: _,
                children: _(_),
              })
            : (0, _.jsx)("div", {
                className: _,
              });
        }
        function _(_) {
          return _
            ? (_ / 100).toLocaleString((0, _._)(), {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "";
        }
        function _(_) {
          return (0, _.jsx)("thead", {
            children: (0, _.jsxs)("tr", {
              children: [
                _.map((_) =>
                  (0, _.jsx)(
                    "td",
                    {
                      children: (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(_),
                        children: (0, _._)(_),
                      }),
                    },
                    "header" + _,
                  ),
                ),
                _.map((_) =>
                  (0, _.jsx)(
                    "td",
                    {
                      children: (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(_),
                        children: (0, _._)(_),
                      }),
                    },
                    "header_region" + _,
                  ),
                ),
              ],
            }),
          });
        }
        function _(_) {
          const { proposal: _, oGuideline: _, mapCurrentPrices: _ } = _,
            _ = _.get(_.packageid),
            _ = _.proposed_prices.base_amounts.find(
              (_) => _.amount.currency_code == _._,
            )?.amount.amount;
          return (0, _.jsxs)("tr", {
            children: [
              _.map((_) => {
                const _ =
                  _.GetRecommendPrice(_, _) ||
                  _.GetScaledRecommendedPrice(_, _);
                return (0, _.jsx)(
                  _,
                  {
                    eCurrencyCode: _,
                    proposal: _,
                    curPrice: _,
                    guidePrice: _,
                  },
                  _.packageid + "-" + _,
                );
              }),
              _.map((_) => {
                const _ = (0, _._)(_),
                  _ =
                    _.GetRecommendPrice(_, _, _) ||
                    _.GetScaledRecommendedPrice(_, _, _);
                return (0, _.jsx)(
                  _,
                  {
                    eCurrencyCode: _,
                    eRegionCode: _,
                    proposal: _,
                    curPrice: _,
                    guidePrice: _,
                  },
                  _.packageid + "-" + _,
                );
              }),
            ],
          });
        }
        function _(_) {
          const {
              eCurrencyCode: _,
              curPrice: _,
              proposal: _,
              guidePrice: _,
            } = _,
            _ = _.proposed_prices.base_amounts.find(
              (_) => _.amount.currency_code == _,
            ),
            _ = _?.current_costs?.base_amounts.find(
              (_) => _.currency_code == _,
            );
          return (0, _.jsx)(_, {
            proposed: _,
            originalAmount: _,
            guidePrice: _,
          });
        }
        function _(_) {
          const { eRegionCode: _, curPrice: _, proposal: _, guidePrice: _ } = _,
            _ = (0, _._)(_),
            _ = _.proposed_prices.region_amounts.find((_) => _.name == _),
            _ = _?.current_costs?.region_amounts.find((_) => _.region == _);
          return (0, _.jsx)(_, {
            proposed: _,
            originalAmount: _?.amount,
            guidePrice: _,
          });
        }
        function _(_) {
          const { proposed: _, originalAmount: _, guidePrice: _ } = _;
          let _, _;
          if (_)
            if (_ && _.price > _.amount.amount) {
              _ = _.outofmatrixlower;
              const _ = _(_.price),
                _ = Math.floor(100 - (_.amount.amount / _.price) * 100);
              _ = `Suggested price ${_} - ${_}% \u25BC`;
            } else if (_ && _.price < _.amount.amount) {
              _ = _.outofmatrix;
              const _ = _(_.price),
                _ = Math.floor((_.amount.amount / _.price) * 100 - 100);
              _ = `Suggested price ${_} - ${_}% \u25B2`;
            } else
              _
                ? _.amount > _.amount.amount
                  ? (_ = _.priceChangedLower)
                  : _.amount < _.amount.amount && (_ = _.priceChangedHigher)
                : (_ = _.priceChangedNew);
          return (0, _.jsxs)("td", {
            className: _.FullCurrencyColumn,
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _,
                children: (0, _.jsx)(_, {
                  className: _,
                  amountInCents: _?.amount.amount,
                }),
              }),
              _?.amount != _?.amount.amount &&
                (0, _.jsx)(_, {
                  amountInCents: _?.amount,
                }),
              !_ &&
                (0, _.jsx)("div", {
                  children: "--",
                }),
            ],
          });
        }
        const _ = 2e4;
        function _(_) {
          const {
              rgProposals: _,
              oGuideline: _,
              mapCurrentPrices: _,
              mapPartnerPaidByPackage: _,
              mapPriceChanges: _,
            } = _,
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!0);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.PriceDeltaCtn),
            children: [
              (0, _.jsxs)(_._, {
                title: "Reasons Auto-Publish is blocked",
                children: [
                  (0, _.jsx)("p", {
                    children:
                      "This page will surface the reason why the package did not auto-publish and may require work to correct",
                  }),
                  (0, _.jsxs)("ol", {
                    className: _.Legend,
                    children: [
                      (0, _.jsx)("li", {
                        className: _.Missing,
                        children: "Missing Currencies",
                      }),
                      (0, _.jsx)("li", {
                        className: _.Outside,
                        children:
                          "Outside of acceptable threshold (more than 125% above or 50% below the guideline)",
                      }),
                      (0, _.jsx)("li", {
                        className: _.CustomUsd,
                        children:
                          "USD Price doesn't match any guideline price point",
                      }),
                      (0, _.jsx)("li", {
                        className: _.AboveAutoPublish,
                        children: "USD Price above 200$ USD",
                      }),
                      (0, _.jsx)("li", {
                        className: _.CloseToLaunch,
                        children:
                          "Raising Price during 30 days during launch window",
                      }),
                      (0, _.jsx)("li", {
                        className: _.CountrySpecific,
                        children: "Has Country specific pricing",
                      }),
                    ],
                  }),
                  (0, _.jsxs)("p", {
                    children: [
                      "You can filter the list by choosing ",
                      (0, _.jsx)("a", {
                        href: `${_._.PARTNER_BASE_URL}admin/reviewpricesubmissions/?myPartners=1`,
                        children: "my partners",
                      }),
                      " view",
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                label: "Show All Price Comparison Rows",
                tooltip:
                  "Displays the price comparison rows for all of the section below.",
                checked: _,
                onChange: _,
              }),
              (0, _.jsx)(_._, {
                label: "Show Prices with Open Tickets",
                tooltip:
                  "Displays the price comparison rows for those with open tickets against them.",
                checked: _,
                onChange: _,
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.RowCtn),
                children: (0, _.jsx)("div", {
                  className: _.PackageInfoColumn,
                  children: "Package Info",
                }),
              }),
              _.map((_) =>
                (0, _.jsx)(
                  "div",
                  {
                    children: (0, _.jsx)(_, {
                      oGuideline: _,
                      proposal: _,
                      mapCurrentPrices: _,
                      mapPartnerPaidByPackage: _,
                      mapPriceChanges: _,
                      bForceShowComparisonRows: _,
                      bShowWithOpenTickets: _,
                    }),
                  },
                  "delta_" + _.packageid,
                ),
              ),
            ],
          });
        }
        function _(_) {
          const { bShowWithOpenTickets: _ } = _,
            [_, _] = (0, _.useState)(0);
          return _ > 0 && !_
            ? null
            : (0, _.jsxs)("div", {
                className: _.ProposalCtn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.RowCtn,
                    children: [
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                      (0, _.jsx)(_, {
                        ..._,
                        setOpenTicketCount: _,
                      }),
                      (0, _.jsx)(_, {
                        ..._,
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
          const { proposal: _, setOpenTicketCount: _ } = _,
            _ = _.mapPartnerPaidByPackage.get(_.packageid)?.[0] || 0;
          return (0, _.jsxs)("div", {
            className: _.FailuresCtn,
            children: [
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)("div", {
                className: _.SectionHeader,
                children: "Web Auto-Approval Checks",
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                partnerID: _,
                setTicketCount: _,
              }),
            ],
          });
        }
        function _(_) {
          const { proposal: _ } = _,
            _ = _.auto_approval_state || _.None,
            _ = _[_] || `Unknown (${_})`;
          return (0, _.jsxs)("div", {
            className: _.AutoApprovalCtn,
            children: [
              (0, _.jsx)("div", {
                className: _.SectionHeader,
                children: "Server Auto-Approval Checks",
              }),
              (0, _.jsx)("div", {
                className: _.Title,
                children: _,
              }),
              !!_.auto_approval_notes &&
                (0, _.jsxs)("div", {
                  className: _.Notes,
                  children: ["- ", _.auto_approval_notes],
                }),
            ],
          });
        }
        function _(_) {
          const { proposal: _, mapCurrentPrices: _ } = _,
            _ = _.proposed_prices.base_amounts.find(
              (_) => _.amount.currency_code == _._,
            )?.amount.amount,
            _ = _.get(_.packageid)?.current_costs.base_amounts.find(
              (_) => _.currency_code == _._,
            )?.amount;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ > _ &&
                (0, _.jsxs)("div", {
                  className: _.AboveAutoPublish,
                  children: [
                    "USD Price $",
                    _(_),
                    " is above $200 USD Threshold",
                  ],
                }),
              !!(_ && _ > 2 * _) &&
                (0, _.jsxs)("div", {
                  className: _.AboveAutoPublish,
                  children: [
                    "USD price $",
                    _(_),
                    " is more than twice existing USD Price $",
                    _(_),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { proposal: _ } = _,
            _ = (0, _.useMemo)(() => _(_), [_]);
          return _?.length > 0
            ? (0, _.jsxs)("div", {
                className: _.MissingCurrency,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.Title,
                    children: ["Missing ", _.length, " currencies: "],
                  }),
                  _.map(_._).join(", "),
                ],
              })
            : null;
        }
        function _(_) {
          const { proposal: _ } = _,
            _ = (0, _.useMemo)(() => _(_), [_]);
          return _?.length > 0
            ? (0, _.jsxs)("div", {
                className: _.MissingCurrency,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.Title,
                    children: ["Unexpected ", _.length, " currencies: "],
                  }),
                  _.join(", "),
                ],
              })
            : null;
        }
        function _(_) {
          const { proposal: _, oGuideline: _ } = _,
            _ = _.proposed_prices.base_amounts.find(
              (_) => _.amount.currency_code == _._,
            )?.amount.amount,
            _ = _.GetRecommendPrice(_, _._);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsxs)("div", {
                  className: _.MatrixGap,
                  children: [
                    "$",
                    _(_),
                    " USD Price doesn't align with any matrix price point. Will compare proposal to scaled guideline.",
                  ],
                }),
              (0, _.jsx)(_, {
                ..._,
                USDPriceCents: _,
              }),
            ],
          });
        }
        function _(_) {
          const { thresholdData: _, strDirection: _ } = _;
          let _ = null;
          return (
            _.nOriginalPrice == _.nProposedPrice && (_ = _.EqualPrices),
            (0, _.jsxs)("tr", {
              className: _.ThresholdRow,
              children: [
                (0, _.jsx)("td", {
                  className: _.CurrencyName,
                  children: _.strCurrency,
                }),
                (0, _.jsx)("td", {
                  className: (0, _._)(_.OriginalPrice, _),
                  children: _.nOriginalPrice ? `${_(_.nOriginalPrice)}` : "--",
                }),
                (0, _.jsx)("td", {
                  className: (0, _._)(_.ProposedPrice, _),
                  children: `${_(_.nProposedPrice)}`,
                }),
                (0, _.jsx)("td", {
                  className: _.RecommendedPrice,
                  children: `${_(_.nGuidancePrice)}`,
                }),
                (0, _.jsx)("td", {
                  className: _.PercentDiff,
                  children: `${_.nPercent}% ${_}`,
                }),
              ],
            })
          );
        }
        function _(_) {
          const { strGuidanceMessage: _, strDirection: _ } = _;
          return (0, _.jsxs)("thead", {
            children: [
              (0, _.jsx)("tr", {
                children: (0, _.jsxs)("td", {
                  colSpan: 5,
                  className: (0, _._)(
                    _.WarningTitle,
                    _ == "above" ? _.WarningAbove : _.WarningBelow,
                  ),
                  children: [
                    (0, _.jsx)("b", {
                      children: _ == "above" ? "\u25B2" : "\u25BC",
                    }),
                    " ",
                    _,
                  ],
                }),
              }),
              (0, _.jsxs)("tr", {
                className: (0, _._)(_.ThresholdRow, _.ThresholdHeader),
                children: [
                  (0, _.jsx)("td", {
                    className: _.CurrencyName,
                    children: "Currency",
                  }),
                  (0, _.jsx)("td", {
                    className: _.OriginalPrice,
                    children: "Current",
                  }),
                  (0, _.jsx)("td", {
                    className: _.ProposedPrice,
                    children: "Proposed",
                  }),
                  (0, _.jsx)("td", {
                    className: _.RecommendedPrice,
                    children: "Recommended",
                  }),
                  (0, _.jsx)("td", {
                    className: _.PercentDiff,
                    children: "% diff",
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              proposal: _,
              oGuideline: _,
              USDPriceCents: _,
              mapCurrentPrices: _,
            } = _,
            { rgAboveThreshold: _, rgBelowThreshold: _ } = (0, _.useMemo)(
              () => _(_, _, _, _),
              [_, _, _, _],
            );
          if (_.length > 0 || _.length > 0) {
            const _ = _(_);
            return (0, _.jsxs)("div", {
              className: _.CurrencyWarningsCtn,
              children: [
                _.length > 0 &&
                  (0, _.jsxs)("table", {
                    className: _.ThresholdMiniTable,
                    children: [
                      (0, _.jsx)(_, {
                        strGuidanceMessage: `${_.length} currencies above guidance threshold for USD $ ${_}`,
                        strDirection: "above",
                      }),
                      (0, _.jsx)("tbody", {
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              thresholdData: _,
                              strDirection: "\u25B2",
                            },
                            _.packageid + "_" + _.strCurrency,
                          ),
                        ),
                      }),
                    ],
                  }),
                _.length > 0 &&
                  (0, _.jsxs)("table", {
                    className: _.ThresholdMiniTable,
                    children: [
                      (0, _.jsx)(_, {
                        strGuidanceMessage: `${_.length} currencies below guidance threshold for USD $ ${_}`,
                        strDirection: "below",
                      }),
                      (0, _.jsx)("tbody", {
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              thresholdData: _,
                              strDirection: "\u25BC",
                            },
                            _.packageid + "_" + _.strCurrency,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            });
          }
          return null;
        }
        function _(_) {
          const { proposal: _ } = _;
          return _.proposed_prices.country_amounts?.length > 0
            ? (0, _.jsxs)("div", {
                children: [
                  "Package has Country price overrides for Countries:",
                  _.proposed_prices.country_amounts
                    .map((_) => _.name)
                    .join(","),
                ],
              })
            : null;
        }
        function _(_) {
          const { proposal: _ } = _,
            [_] = (0, _._)(_.packageid, _);
          return _ && _(_)
            ? (0, _.jsxs)("div", {
                className: _.ReleaseDateCallout,
                children: [
                  "This game released less than 30 days ago, on ",
                  (0, _._)(_.GetReleaseDateRTime()),
                ],
              })
            : null;
        }
        function _(_) {
          const { bForceShowComparisonRows: _ } = _,
            [_, _] = (0, _.useState)(!1);
          return !_ && !_
            ? (0, _.jsx)(_._, {
                label: "Show Price Comparison Row",
                onChange: () => _(!0),
              })
            : (0, _.jsxs)("div", {
                className: (0, _._)(_.FullCurrencyTable),
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              });
        }
        function _(_) {
          const {
            rgProposals: _,
            oGuideline: _,
            mapCurrentPrices: _,
            mapPartnerPaidByPackage: _,
            mapPriceChanges: _,
          } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                oGuideline: _,
              }),
              (0, _.jsx)("hr", {}),
              (0, _.jsx)("hr", {}),
              _.map((_) =>
                (0, _.jsxs)(
                  "div",
                  {
                    children: [
                      (0, _.jsx)("hr", {}),
                      (0, _.jsx)(_, {
                        oGuideline: _,
                        proposal: _,
                        mapCurrentPrices: _,
                        mapPartnerPaidByPackage: _,
                        mapPriceChanges: _,
                      }),
                    ],
                  },
                  _.packageid,
                ),
              ),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.RowCtn, _.CurrencyHeaderRow),
            children: [
              (0, _.jsx)("div", {
                className: _.PackageInfoColumn,
                children: "Package Info",
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: _.RowCtn,
                children: [
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                  (0, _.jsx)(_, {
                    ..._,
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
          const { proposal: _ } = _,
            _ = _.proposed_prices.country_amounts;
          return _?.length > 0
            ? (0, _.jsxs)("div", {
                className: _.RowCtn,
                children: [
                  (0, _.jsx)("div", {
                    children: "^^^^",
                  }),
                  _.map((_) =>
                    (0, _.jsxs)(
                      "div",
                      {
                        children: [
                          _.name,
                          "/",
                          (0, _._)(_.amount.currency_code),
                          " @ ",
                          _(_.account),
                        ],
                      },
                      `country_${_.packageid}_${_.amount.currency_code}`,
                    ),
                  ),
                ],
              })
            : null;
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            title: "Legend",
            tooltip: "Explains the color scheme per proposed pricing color",
            bStartMinimized: !0,
            children: (0, _.jsxs)("div", {
              className: _.pricingLegend,
              children: [
                (0, _.jsx)("div", {
                  className: _.priceChangedLower,
                  children: "Price Decreases",
                }),
                (0, _.jsx)("div", {
                  className: _.priceChangedHigher,
                  children: "Price Increases",
                }),
                (0, _.jsx)("div", {
                  className: _.priceChangedNew,
                  children: "Price is New",
                }),
                (0, _.jsx)("div", {
                  className: _.outofmatrix,
                  children:
                    "Price is higher than guideline. Mouseover to see suggested price.",
                }),
                (0, _.jsx)("div", {
                  className: _.outofmatrixlower,
                  children:
                    "Price is lower than guideline. Mouseover to see suggested price.",
                }),
              ],
            }),
          });
        }
        function _(_) {
          const [_] = (0, _.useState)(
              () => (0, _._)("filter_name", "application_config") || "",
            ),
            _ = _(),
            _ = (0, _._)(),
            _ = _(),
            _ = _(),
            _ = (0, _.useMemo)(() => _.map((_) => _.packageid), [_]),
            _ = _(_),
            [_, _] = (0, _._)("tab", "delta");
          if (!_)
            return (0, _.jsx)(_._, {
              string: "Loading Pricing Guidelines",
            });
          const _ = (_) => _(_.key),
            _ = [
              {
                name: "Price Delta",
                key: "delta",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    rgProposals: _,
                    oGuideline: _,
                    mapCurrentPrices: _,
                    mapPartnerPaidByPackage: _,
                    mapPriceChanges: _,
                  }),
                }),
                onClick: _,
              },
              {
                name: "Submissions Raw Table",
                key: "raw",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    rgProposals: _,
                    oGuideline: _,
                    mapCurrentPrices: _,
                    mapPartnerPaidByPackage: _,
                    mapPriceChanges: _,
                  }),
                }),
                onClick: _,
              },
            ];
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_().AdminPageCtn, _().WidePageCtn),
                children: [
                  (0, _.jsx)("h1", {
                    children: "Package Prices Submissions Reviews",
                  }),
                  (0, _.jsx)("p", {
                    children: _,
                  }),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsx)(_._, {
                    tabs: _,
                    startingTab: _,
                  }),
                ],
              }),
            }),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { orientation: _ = "horizontal", size: _ = "1", ..._ } = _;
          return (0, _.jsx)("div", {
            role: "separator",
            "aria-orientation": _,
            ...(0, _._)(
              {
                ..._,
                size: _,
                className: _.Separator,
              },
              _,
            ),
          });
        }
        const _ = [
          ..._._,
          {
            prop: "size",
            className: (_) => _[`Size-${_}`],
            responsive: !0,
          },
          {
            prop: "color",
            cssProperty: (_) => ["--separator-color", (0, _._)(_)],
          },
        ];
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 10,
          _ = "orange-9 20%",
          _ = {
            background: "rgb( from var(--color-orange-9) r g b / 20% )",
            padding: "0 4px",
          },
          _ = 1,
          _ = 1;
        function _(_, _) {
          return `${_}|${_}`;
        }
        function _(_, _) {
          const _ = new Map(),
            _ = (_, _) => {
              const _ = _(_, _);
              let _ = _.get(_);
              return (
                _ ||
                  ((_ = {
                    eCurrencyCode: _,
                    eRegionCode: _,
                    mapAmounts: new Map(),
                  }),
                  _.set(_, _)),
                _.mapAmounts
              );
            };
          for (const _ of _) {
            if (_ !== void 0 && _.convert_method !== _) continue;
            const _ = Number(_.usd_price);
            for (const _ of _.currency_prices ?? [])
              _(_.currency_code, _._).set(_, Number(_.price));
            for (const _ of _.region_prices ?? [])
              _(_.currency_code, _.region_code).set(_, Number(_.price));
          }
          return _;
        }
        function _(_, _, _, _) {
          const _ = [],
            _ = new Set([..._.keys(), ..._.keys()]);
          for (const _ of _) {
            const _ = _.get(_),
              _ = _.get(_),
              { eCurrencyCode: _, eRegionCode: _ } = _ ?? _,
              _ = new Set([
                ...(_?.mapAmounts.keys() ?? []),
                ...(_?.mapAmounts.keys() ?? []),
              ]),
              _ = [];
            let _ = 0;
            for (const _ of [..._].sort((_, _) => _ - _)) {
              const _ = _?.mapAmounts.get(_),
                _ = _?.mapAmounts.get(_);
              if (_ === void 0 || _ === void 0 || _ === 0) {
                _++;
                continue;
              }
              _.push({
                nUSDPricepoint: _,
                nExistingAmount: _,
                nStagedAmount: _,
                flPercentDiff: ((_ - _) / _) * 100,
              });
            }
            const _ = _(_, _),
              _ = _(_, _),
              _ = _.map((_) => _(_, _, _)).filter((_) => _ !== null),
              _ = _(_, (_) => _.nExistingAmount, _),
              _ = _(_, (_) => _.nStagedAmount, _);
            _.push({
              eCurrencyCode: _,
              eRegionCode: _,
              rgPricepointDiffs: _,
              nSkippedPricepoints: _,
              flAvgPercentDiff: _.length
                ? _.reduce((_, _) => _ + _.flPercentDiff, 0) / _.length
                : null,
              flAvgPercentDiffUSD: _.length
                ? _.reduce((_, _) => _ + _, 0) / _.length
                : null,
              nPricepointsIncreasing: _.filter(
                (_) => _.nStagedAmount > _.nExistingAmount,
              ).length,
              nPricepointsDecreasing: _.filter(
                (_) => _.nStagedAmount < _.nExistingAmount,
              ).length,
              nPricepointsUnchanged: _.filter(
                (_) => _.nStagedAmount === _.nExistingAmount,
              ).length,
              flAvgUSDDiscountExisting: _,
              flAvgUSDDiscountStaged: _,
              flAvgUSDDiscountChange: _ === null || _ === null ? null : _ - _,
            });
          }
          return (
            _.sort((_, _) => {
              const _ = _(_.eRegionCode),
                _ = _(_.eRegionCode);
              return (_.eRegionCode === _._) != (_.eRegionCode === _._)
                ? _.eRegionCode === _._
                  ? -1
                  : 1
                : _.localeCompare(_) ||
                    (0, _._)(_.eCurrencyCode).localeCompare(
                      (0, _._)(_.eCurrencyCode),
                    );
            }),
            _
          );
        }
        function _(_, _, _) {
          return _ === null || _.length === 0
            ? null
            : _.reduce((_, _) => _ + _(_(_), _, _.nUSDPricepoint), 0) /
                _.length;
        }
        function _(_, _, _) {
          return (1 - (_ * _) / _) * 100;
        }
        function _(_, _, _) {
          if (_ === null || _ === null) return null;
          const _ = Math.round(_.nExistingAmount * _);
          return _ ? ((Math.round(_.nStagedAmount * _) - _) / _) * 100 : null;
        }
        function _(_) {
          return _.rgPricepointDiffs.length === 0
            ? null
            : _.nPricepointsIncreasing > _.nPricepointsDecreasing &&
                _.nPricepointsIncreasing > _.nPricepointsUnchanged
              ? "increasing"
              : _.nPricepointsDecreasing > _.nPricepointsIncreasing &&
                  _.nPricepointsDecreasing > _.nPricepointsUnchanged
                ? "decreasing"
                : "unchanged";
        }
        function _(_, _) {
          return (
            _.flAvgPercentDiff !== null && Math.abs(_.flAvgPercentDiff) > _
          );
        }
        function _(_) {
          return _ === _._ ? "None" : (0, _._)(_);
        }
        function _(_) {
          return _.eRegionCode === _._
            ? (0, _._)(_.eCurrencyCode)
            : (0, _._)(_.eRegionCode);
        }
        function _(_) {
          return _.eRegionCode === _._
            ? (0, _._)(_.eCurrencyCode)
            : (0, _._)(_.eRegionCode);
        }
        const _ = [
            {
              eColumn: "currency",
              strLabel: `Currency/Region
Abbreviation`,
              bNumeric: !1,
            },
            {
              eColumn: "name",
              strLabel: `Currency/Region
Name`,
              bNumeric: !1,
            },
            {
              eColumn: "region",
              strLabel: "Region",
              bNumeric: !1,
              strTooltip:
                "Is this a region? Regions are priced in USD, not local currency",
            },
            {
              eColumn: "movement",
              strLabel: "Movement",
              bNumeric: !1,
              strTooltip:
                "Of the supported pricepoints for this entry, which direction did the majority move in (increasing, decreasing, unchanged)",
            },
            {
              eColumn: "avgPercentDiff",
              strLabel: `Avg % Difference
(Local Pricing)`,
              bNumeric: !0,
              strTooltip: `The difference the customer will see.

 What is the average percentage change between the existing pricing guideline and the staged pricing guideline`,
            },
            {
              eColumn: "avgPercentDiffUSD",
              strLabel: `Avg % Difference USD
(Existing vs Staged Amounts)`,
              bNumeric: !0,
            },
            {
              eColumn: "increasing",
              strLabel: `Pricepoints
Increasing`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints increased with the staged amounts",
            },
            {
              eColumn: "decreasing",
              strLabel: `Pricepoints
Decreasing`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints decreased with the staged amounts",
            },
            {
              eColumn: "unchanged",
              strLabel: `Pricepoints
Unchanged`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints were unchanged with the staged amounts",
            },
            {
              eColumn: "avgDiscountExisting",
              strLabel: `Avg USD Discount
(Existing)`,
              bNumeric: !0,
            },
            {
              eColumn: "avgDiscountStaged",
              strLabel: `Avg USD Discount
(Staged)`,
              bNumeric: !0,
              strTooltip: `The average discount from the USD pricepoints for staged values.

This discount is calculated using the CURRENT fx rate 

 Eg.'How do we relate to USD if we ship the staged pricing today'`,
            },
            {
              eColumn: "avgDiscountChange",
              strLabel: `Avg USD Discount
Change`,
              bNumeric: !0,
              strTooltip: `The change from Existing to Staged USD Discounts.

Eg. "do we discount more or less from USD with the staged set of pricing". 

Positive is less discount, negative is more discount.`,
            },
          ],
          _ = new Map([
            ["increasing", 1],
            ["unchanged", 0],
            ["decreasing", -1],
          ]),
          _ = {
            fontVariantNumeric: "tabular-nums",
          },
          _ = {
            whiteSpace: "pre-line",
          },
          _ = {
            color: "#c7821a",
          },
          _ = {
            visibility: "hidden",
          },
          _ = {
            listStyleType: "disc",
          };
        function _(_, _) {
          switch (_) {
            case "currency":
              return _(_);
            case "name":
              return _(_);
            case "region":
              return _.eRegionCode === _._ ? 0 : 1;
            case "movement":
              return _.get(_(_)) ?? null;
            case "avgPercentDiff":
              return _.flAvgPercentDiff;
            case "avgPercentDiffUSD":
              return _.flAvgPercentDiffUSD;
            case "increasing":
              return _.nPricepointsIncreasing;
            case "decreasing":
              return _.nPricepointsDecreasing;
            case "unchanged":
              return _.nPricepointsUnchanged;
            case "avgDiscountExisting":
              return _.flAvgUSDDiscountExisting;
            case "avgDiscountStaged":
              return _.flAvgUSDDiscountStaged;
            case "avgDiscountChange":
              return _.flAvgUSDDiscountChange;
          }
        }
        function _(_, _, _) {
          return [..._].sort((_, _) => {
            const _ = _(_, _),
              _ = _(_, _);
            if (_ === null || _ === null)
              return (_ === null ? 1 : 0) - (_ === null ? 1 : 0);
            const _ = typeof _ == "string" ? _.localeCompare(_) : _ - _;
            return _ ? _ : -_;
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            paddingY: "1",
            paddingX: "2",
            ..._,
          });
        }
        function _(_) {
          const {
              column: _,
              eSortColumn: _,
              bAscending: _,
              OnClick: _,
              strTooltip: _,
            } = _,
            _ = _.eColumn === _;
          return (0, _.jsx)(_, {
            background: "dull-9 20%",
            textAlign: _.bNumeric ? "end" : "start",
            onClick: () => _(_.eColumn),
            style: {
              cursor: "pointer",
              userSelect: "none",
            },
            children: (0, _.jsxs)(_._, {
              direction: "column",
              justify: "between",
              height: "100%",
              children: [
                (0, _.jsxs)(_._, {
                  contrast: _ ? "title" : "subtitle",
                  whiteSpace: "pre-line",
                  children: [
                    _.strLabel,
                    _ &&
                      (0, _.jsx)(_._, {
                        direction: _ ? "up" : "down",
                        marginStart: "1",
                      }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    textAlign: "end",
                    children: (0, _.jsx)(_._, {
                      small: !0,
                      tooltip: (0, _.jsx)("span", {
                        style: _,
                        children: _,
                      }),
                    }),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { flPercent: _, strTooltip: _ } = _;
          if (_ === null)
            return (0, _.jsx)(_, {
              textAlign: "end",
              children: (0, _.jsx)(_._, {
                contrast: "note",
                children: "\u2014",
              }),
            });
          const _ = _ < 0 ? "text-error" : _ > 0 ? "text-success" : "text-body",
            _ = _ > 0 ? "+" : "";
          return (0, _.jsx)(_, {
            textAlign: "end",
            children: (0, _.jsxs)(_._, {
              color: _,
              style: _,
              children: [
                _,
                _.toFixed(1),
                "%",
                _ &&
                  (0, _.jsx)(_._, {
                    small: !0,
                    tooltip: _,
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { eMovement: _ } = _;
          return _ === "increasing"
            ? (0, _.jsx)(_, {
                textAlign: "center",
                children: (0, _.jsx)(_._, {
                  color: "text-success",
                  children: (0, _.jsx)(_._, {
                    direction: "up",
                  }),
                }),
              })
            : _ === "decreasing"
              ? (0, _.jsx)(_, {
                  textAlign: "center",
                  children: (0, _.jsx)(_._, {
                    color: "text-error",
                    children: (0, _.jsx)(_._, {
                      direction: "down",
                    }),
                  }),
                })
              : _ === "unchanged"
                ? (0, _.jsx)(_, {
                    textAlign: "center",
                    children: (0, _.jsx)(_._, {
                      color: "text-body",
                      children: "\u2013",
                    }),
                  })
                : (0, _.jsx)(_, {});
        }
        function _(_) {
          return (0, _.jsx)(_, {
            textAlign: "end",
            children: (0, _.jsx)(_._, {
              style: _,
              children: _.nCount,
            }),
          });
        }
        function _(_) {
          const { flPercent: _, bStarred: _ } = _;
          return _ === null
            ? (0, _.jsx)(_, {
                textAlign: "end",
                children: (0, _.jsx)(_._, {
                  contrast: "note",
                  children: "\u2014",
                }),
              })
            : (0, _.jsx)(_, {
                textAlign: "end",
                children: (0, _.jsxs)(_._, {
                  color: "text-body",
                  contrast: "body",
                  style: _,
                  children: [_.toFixed(1), "%", _ && "*"],
                }),
              });
        }
        function _(_, _) {
          if (_ === _._) return 1;
          const _ = _?.rates[_];
          return _ || null;
        }
        function _(_) {
          const { nAmount: _, eCurrencyCode: _, bBold: _ } = _;
          return _ === null
            ? (0, _.jsx)(_, {
                textAlign: "end",
                children: (0, _.jsx)(_._, {
                  contrast: "note",
                  children: "\u2014",
                }),
              })
            : (0, _.jsx)(_, {
                textAlign: "end",
                children: (0, _.jsx)(_._, {
                  weight: _ ? "heavy" : void 0,
                  style: _,
                  children: (0, _._)(_, _),
                }),
              });
        }
        function _(_) {
          const { nDifference: _, eCurrencyCode: _ } = _;
          if (_ === null)
            return (0, _.jsx)(_, {
              textAlign: "end",
              children: (0, _.jsx)(_._, {
                contrast: "note",
                children: "\u2014",
              }),
            });
          const _ = _ < 0 ? "text-error" : _ > 0 ? "text-success" : "text-body",
            _ = _ > 0 ? "+" : "";
          return (0, _.jsx)(_, {
            textAlign: "end",
            children: (0, _.jsxs)(_._, {
              color: _,
              style: _,
              children: [_, (0, _._)(_, _)],
            }),
          });
        }
        function _(_) {
          return new Date(_ * 1e3).toISOString().slice(0, 10);
        }
        function _(_) {
          const {
              row: _,
              bExpanded: _,
              OnToggle: _,
              launchFXRates: _,
              currentFXRates: _,
              strLaunchTooltip: _,
              flSignificantPercentDiff: _,
              bNearCNYDiscount: _,
            } = _,
            _ = _(_, _.eCurrencyCode),
            _ = _(_, _.eCurrencyCode),
            _ = _(_, _);
          let _;
          return (
            _.flAvgPercentDiff !== null &&
              _.flAvgPercentDiffUSD !== null &&
              Math.abs(_.flAvgPercentDiff) > _ &&
              Math.abs(_.flAvgPercentDiffUSD) > _ &&
              (_.flAvgPercentDiff > 0 && _.flAvgPercentDiffUSD < 0
                ? (_ =
                    "Currency FX rates decreased more than local pricing multipliers increased")
                : _.flAvgPercentDiff < 0 &&
                  _.flAvgPercentDiffUSD > 0 &&
                  (_ =
                    "Currency FX rates increased more than local pricing multipliers decreased")),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)(_._, {
                  columns: "subgrid",
                  gridColumn: "1 / -1",
                  alignItems: "center",
                  background: _ ? _ : "dull-9 10%",
                  onClick: _,
                  style: {
                    cursor: "pointer",
                  },
                  children: [
                    (0, _.jsx)(_, {
                      children: (0, _.jsxs)(_._, {
                        whiteSpace: "nowrap",
                        children: [
                          (0, _.jsx)(_._, {
                            direction: _ ? "down" : "right",
                            marginEnd: "1",
                          }),
                          _(_),
                        ],
                      }),
                    }),
                    (0, _.jsx)(_, {
                      children: (0, _.jsx)(_._, {
                        whiteSpace: "nowrap",
                        children: _(_),
                      }),
                    }),
                    (0, _.jsx)(_, {
                      textAlign: "center",
                      children:
                        _.eRegionCode !== _._ &&
                        (0, _.jsx)(_._, {
                          size: "4",
                        }),
                    }),
                    (0, _.jsx)(_, {
                      eMovement: _(_),
                    }),
                    (0, _.jsx)(_, {
                      flPercent: _.flAvgPercentDiff,
                    }),
                    (0, _.jsx)(_, {
                      flPercent: _.flAvgPercentDiffUSD,
                      strTooltip: _,
                    }),
                    (0, _.jsx)(_, {
                      nCount: _.nPricepointsIncreasing,
                    }),
                    (0, _.jsx)(_, {
                      nCount: _.nPricepointsDecreasing,
                    }),
                    (0, _.jsx)(_, {
                      nCount: _.nPricepointsUnchanged,
                    }),
                    (0, _.jsx)(_, {
                      flPercent: _.flAvgUSDDiscountExisting,
                    }),
                    (0, _.jsx)(_, {
                      flPercent: _.flAvgUSDDiscountStaged,
                      bStarred: _,
                    }),
                    (0, _.jsx)(_, {
                      flPercent: _.flAvgUSDDiscountChange,
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    gridColumn: "1 / -1",
                    paddingStart: "6",
                    paddingBottom: "2",
                    children: (0, _.jsxs)(_._, {
                      columns: "repeat( 11, max-content )",
                      gap: "1",
                      children: [
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "USD Pricepoint",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "Existing",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "Staged",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "Difference",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "% Difference",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "Existing (USD)",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "Staged (USD)",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "Difference (USD)",
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsxs)(_._, {
                            contrast: "subtitle",
                            whiteSpace: "nowrap",
                            children: [
                              "USD Discount (Existing, At Launch)",
                              _ &&
                                (0, _.jsx)(_._, {
                                  small: !0,
                                  tooltip: `USD @ ${_(_.rt_date)}`,
                                }),
                            ],
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsxs)(_._, {
                            contrast: "subtitle",
                            whiteSpace: "nowrap",
                            children: [
                              "USD Discount (Staged)",
                              _ &&
                                (0, _.jsx)(_._, {
                                  small: !0,
                                  tooltip: `USD @ ${_(_.rt_date)}`,
                                }),
                            ],
                          }),
                        }),
                        (0, _.jsx)(_, {
                          textAlign: "end",
                          children: (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: "USD Discount Change",
                          }),
                        }),
                        _.rgPricepointDiffs.map((_) => {
                          const _ =
                              _ === null
                                ? null
                                : Math.round(_.nExistingAmount * _),
                            _ =
                              _ === null
                                ? null
                                : Math.round(_.nStagedAmount * _),
                            _ = _ === null || _ === null ? null : _ - _,
                            _ =
                              _ === null
                                ? null
                                : _(_.nExistingAmount, _, _.nUSDPricepoint),
                            _ =
                              _ === null
                                ? null
                                : _(_.nStagedAmount, _, _.nUSDPricepoint);
                          return (0, _.jsxs)(
                            _._,
                            {
                              columns: "subgrid",
                              gridColumn: "1 / -1",
                              alignItems: "center",
                              background: "dull-9 10%",
                              children: [
                                (0, _.jsx)(_, {
                                  nAmount: _.nUSDPricepoint,
                                  eCurrencyCode: _._,
                                  bBold: !0,
                                }),
                                (0, _.jsx)(_, {
                                  nAmount: _.nExistingAmount,
                                  eCurrencyCode: _.eCurrencyCode,
                                }),
                                (0, _.jsx)(_, {
                                  nAmount: _.nStagedAmount,
                                  eCurrencyCode: _.eCurrencyCode,
                                }),
                                (0, _.jsx)(_, {
                                  nDifference:
                                    _.nStagedAmount - _.nExistingAmount,
                                  eCurrencyCode: _.eCurrencyCode,
                                }),
                                (0, _.jsx)(_, {
                                  flPercent: _.flPercentDiff,
                                }),
                                (0, _.jsx)(_, {
                                  nAmount: _,
                                  eCurrencyCode: _._,
                                }),
                                (0, _.jsx)(_, {
                                  nAmount: _,
                                  eCurrencyCode: _._,
                                }),
                                (0, _.jsx)(_, {
                                  nDifference: _,
                                  eCurrencyCode: _._,
                                }),
                                (0, _.jsx)(_, {
                                  flPercent: _,
                                }),
                                (0, _.jsx)(_, {
                                  flPercent: _,
                                }),
                                (0, _.jsx)(_, {
                                  flPercent:
                                    _ === null || _ === null ? null : _ - _,
                                }),
                              ],
                            },
                            _.nUSDPricepoint,
                          );
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const {
            rgRows: _,
            flSignificantPercentDiff: _,
            eTableFilter: _,
            OnToggleFilter: _,
          } = _;
          let _ = 0,
            _ = 0,
            _ = 0,
            _ = 0,
            _ = 0;
          for (const _ of _) {
            const _ = _(_);
            _ === "increasing"
              ? (_++, _(_, _) && _++)
              : _ === "decreasing"
                ? (_++, _(_, _) && _++)
                : _ === "unchanged" && _++;
          }
          const _ = [
            {
              eMovement: "increasing",
              nCount: _,
              nShaded: _,
            },
            {
              eMovement: "unchanged",
              nCount: _,
              nShaded: 0,
            },
            {
              eMovement: "decreasing",
              nCount: _,
              nShaded: _,
            },
          ];
          return (0, _.jsx)(_._, {
            columns: "max-content max-content",
            alignItems: "center",
            gapX: "2",
            gapY: "1",
            marginTop: "2",
            children: _.map((_) =>
              (0, _.jsxs)(
                _.Fragment,
                {
                  children: [
                    (0, _.jsxs)(_._, {
                      children: [
                        "Currencies/Regions ",
                        _.eMovement,
                        ": ",
                        _.nCount,
                        (0, _.jsxs)("span", {
                          style: _.nShaded > 0 ? void 0 : _,
                          children: [
                            " (",
                            (0, _.jsxs)("span", {
                              style: _,
                              children: [_.nShaded, " significantly"],
                            }),
                            ")",
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children:
                        _.nCount > 0 &&
                        (0, _.jsxs)(_._, {
                          size: "1",
                          variant: "outline",
                          onClick: () => _(_.eMovement),
                          children: [
                            _ === _.eMovement ? "Hide" : "Show",
                            " ",
                            _.eMovement,
                          ],
                        }),
                    }),
                  ],
                },
                _.eMovement,
              ),
            ),
          });
        }
        function _(_) {
          const {
              strTitle: _,
              rgRows: _,
              launchFXRates: _,
              currentFXRates: _,
              flSignificantPercentDiff: _,
              bCompareToCNY: _,
            } = _,
            _ =
              _ && _
                ? `Compares the staged pricing at current FX rates (${_(_.rt_date)}) against the existing pricing at launch FX rates (${_(_.rt_date)})`
                : void 0,
            _ = _
              ? `The average discount from the USD pricepoints for this existing values.

This is calculated using the PRIOR fx rate (${_(_.rt_date)})

Eg. 'How did we relate to USD when we shipped this pricing'`
              : void 0,
            _ = new Map([
              ["avgPercentDiffUSD", _],
              ["avgDiscountExisting", _],
            ]),
            [_, _] = (0, _.useState)("avgPercentDiff"),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _(_ === _ ? !_ : !0), _(_);
            },
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = (_) => _(_ === _ ? null : _),
            _ = _ === "all" ? _ : _.filter((_) => _(_) === _),
            _ = _.reduce((_, _) => _ + _.nSkippedPricepoints, 0),
            _ = _
              ? (_.find((_) => _.eCurrencyCode === _._ && _.eRegionCode === _._)
                  ?.flAvgUSDDiscountStaged ?? null)
              : null;
          return (0, _.jsxs)(_._, {
            marginTop: "4",
            children: [
              (0, _.jsxs)(_._, {
                align: "center",
                gap: "4",
                children: [
                  (0, _.jsx)(_._, {
                    level: "3",
                    children: _,
                  }),
                  (0, _.jsx)(_._, {
                    size: "1",
                    variant: "outline",
                    onClick: () => _("all"),
                    children: _ === "all" ? "Hide all" : "Show all",
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                rgRows: _,
                flSignificantPercentDiff: _,
                eTableFilter: _,
                OnToggleFilter: _,
              }),
              _ !== null &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("br", {}),
                    (0, _.jsxs)("ul", {
                      children: [
                        (0, _.jsxs)(_._, {
                          _: "li",
                          size: "3",
                          style: _,
                          children: [
                            (0, _.jsx)("span", {
                              style: _,
                              children: "Orange shaded rows",
                            }),
                            " flag an average movement of greater than +/-",
                            _,
                            "% in local currency amounts",
                          ],
                        }),
                        _ !== null &&
                          (0, _.jsxs)(_._, {
                            _: "li",
                            size: "3",
                            style: _,
                            children: [
                              "* - Staged USD Discount is within +/-",
                              _,
                              "% of China's discount (",
                              _.toFixed(1),
                              "%)",
                            ],
                          }),
                      ],
                    }),
                    (0, _.jsxs)(_._, {
                      columns: `repeat( ${_.length}, max-content )`,
                      gap: "1",
                      alignContent: "center",
                      marginTop: "3",
                      children: [
                        _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              column: _,
                              eSortColumn: _,
                              bAscending: _,
                              OnClick: _,
                              strTooltip: _.get(_.eColumn) ?? _.strTooltip,
                            },
                            _.eColumn,
                          ),
                        ),
                        _(_, _, _).map((_) => {
                          const _ = _(_.eCurrencyCode, _.eRegionCode),
                            _ =
                              _ !== null &&
                              _.flAvgUSDDiscountStaged !== null &&
                              _.eCurrencyCode !== _._ &&
                              Math.abs(_.flAvgUSDDiscountStaged - _) <= _;
                          return (0, _.jsx)(
                            _,
                            {
                              row: _,
                              bExpanded: _ === _,
                              OnToggle: () => _(_ === _ ? null : _),
                              launchFXRates: _,
                              currentFXRates: _,
                              strLaunchTooltip: _,
                              flSignificantPercentDiff: _,
                              bNearCNYDiscount: _,
                            },
                            _,
                          );
                        }),
                      ],
                    }),
                    (0, _.jsxs)(_._, {
                      _: "div",
                      contrast: "note",
                      marginTop: "2",
                      children: [
                        _,
                        " currency / pricepoint pairs were priced on only one side and are not included above.",
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { currentFXRates: _, latestPricingMultiplierSet: _ } = _,
            [_, _, _] = (0, _._)(),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = async () => {
              if (!_ || !_) return;
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append(
                  "pricing_multiplier_id",
                  String(_.pricing_multiplier_id),
                ),
                _.append("rt_date_fx", String(_.rt_date));
              try {
                const _ = await _().post(
                  `${_._.PARTNER_BASE_URL}admin/ajaxstagenewpricingguidelines/`,
                  _,
                );
                _.data.success === _._
                  ? (_(null), _(_.data.rows_written))
                  : _(`Staging failed, EResult ${_.data.success}`);
              } catch {
                _("Staging failed, the request did not complete");
              }
            };
          return (0, _.jsxs)(_._, {
            marginTop: "6",
            children: [
              (0, _.jsx)(_._, {
                onClick: _,
                disabled: !_ || !_,
                children: "Stage New Pricing",
              }),
              !_ &&
                (0, _.jsx)(_._, {
                  _: "div",
                  contrast: "note",
                  marginTop: "2",
                  children: "No FX rates are available to stage with",
                }),
              !_ &&
                (0, _.jsx)(_._, {
                  _: "div",
                  contrast: "note",
                  marginTop: "2",
                  children:
                    "No pricing multiplier set is available to stage with",
                }),
              _ &&
                (0, _.jsx)(_._, {
                  _: "div",
                  marginTop: "2",
                  children: _,
                }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  strTitle: "Stage New Pricing",
                  onOK: _,
                  closeModal: _,
                  strDescription:
                    "Generate new staged pricing for every pricing method using the following values?",
                  children: (0, _.jsxs)("ul", {
                    children: [
                      (0, _.jsxs)("li", {
                        style: _,
                        children: ["Exchange Rate Date: ", _ && _(_.rt_date)],
                      }),
                      (0, _.jsxs)("li", {
                        style: _,
                        children: [
                          "Pricing Multiplier ID: ",
                          _?.pricing_multiplier_id,
                        ],
                      }),
                      (0, _.jsxs)("li", {
                        style: _,
                        children: [
                          "Pricing Multiplier Date: ",
                          _ && _(_.rt_date_source),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, _.jsx)(_._, {
                active: _ !== null,
                children: (0, _.jsx)(_._, {
                  strTitle: "New Pricing Staged",
                  strDescription: `Staged ${_} rows. Reload the page to compare them.`,
                  bAlertDialog: !0,
                  bHideCloseIcon: !0,
                  bDisableBackgroundDismiss: !0,
                  strOKButtonText: "Reload Page",
                  onOK: () => window.location.reload(),
                }),
              }),
            ],
          });
        }
        const _ = {
          [_._._]: "Purchasing Power Conversion",
          [_._._]: "Exchange-rate Conversion",
          [_._._]: "Multi-variable conversion",
        };
        function _(_) {
          const _ = (0, _.useMemo)(
              () => (0, _._)("current_fx_rates", "application_config") ?? null,
              [],
            ),
            _ = (0, _.useMemo)(
              () =>
                (0, _._)(
                  "latest_pricing_multiplier_set",
                  "application_config",
                ) ?? null,
              [],
            ),
            [_, _] = (0, _.useState)(String(_)),
            _ = Number(_),
            _ = _.trim() !== "" && _ >= 0 && _ <= 100,
            _ = _ ? _ : _,
            _ = (0, _.useMemo)(() => {
              const _ =
                (0, _._)("existing_price_points", "application_config") ?? [];
              return (
                (0, _._)("pricing_methods", "application_config") ?? []
              ).map((_) => {
                const _ = _.launch_fx_rates ?? null,
                  _ = _(
                    _(_, _.convert_method),
                    _(_.staged_price_points ?? []),
                    _,
                    _,
                  ).filter(
                    (_) => !(_.eCurrencyCode === _._ && _.eRegionCode === _._),
                  );
                return {
                  eConvertMethod: _.convert_method,
                  rgRows: _,
                  launchFXRates: _,
                };
              });
            }, [_]);
          return (0, _.jsxs)("div", {
            className: _().AdminPageCtn,
            children: [
              (0, _.jsx)("br", {}),
              (0, _.jsx)("h2", {
                className: _().ValveOnlyTitle,
                children: "Package Pricing Guideline Comparison",
              }),
              (0, _.jsxs)("ul", {
                children: [
                  (0, _.jsx)(_._, {
                    _: "li",
                    size: "3",
                    style: _,
                    children:
                      "This page shows staged package pricing guidelines against the currently live package pricing guidelines, per USD pricepoint.",
                  }),
                  (0, _.jsxs)(_._, {
                    _: "li",
                    size: "3",
                    style: _,
                    children: [
                      (0, _.jsx)("span", {
                        style: _,
                        children: "Significant movement",
                      }),
                      ": Currencies or regions moving more than +/-",
                      (0, _.jsx)(_._, {
                        display: "inline-block",
                        width: "48px",
                        marginX: "1",
                        children: (0, _.jsx)(_._, {
                          size: "1",
                          variant: "underline",
                          inputMode: "decimal",
                          value: _,
                          onTextChange: _,
                          status: _ ? void 0 : "error",
                        }),
                      }),
                      "% in local currency amounts",
                    ],
                  }),
                ],
              }),
              _.map((_, _) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      _ > 0 &&
                        (0, _.jsx)(_, {
                          size: "4",
                          marginY: "6",
                        }),
                      (0, _.jsx)(_, {
                        strTitle: _[_.eConvertMethod] ?? "Unknown",
                        rgRows: _.rgRows,
                        launchFXRates: _.launchFXRates,
                        currentFXRates: _,
                        flSignificantPercentDiff: _,
                        bCompareToCNY: _.eConvertMethod === _._._,
                      }),
                    ],
                  },
                  _.eConvertMethod,
                ),
              ),
              (0, _.jsx)(_, {
                currentFXRates: _,
                latestPricingMultiplierSet: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "0",
          _ = "1",
          _ = "2",
          _ = "3",
          _ = "4";
        function _(_) {
          return (
            !!_ && Object.values(_).some((_) => _ && _.trim().length !== 0)
          );
        }
        function _(_) {
          switch (_.kind) {
            case _:
              return (0, _._)(
                "#StoreAdmin_PurchaseOptionsOrder_InvalidKindError",
              );
            case _:
              return _(_.header)
                ? null
                : (0, _._)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingHeaderError",
                  );
            case _:
              return _.package_id
                ? null
                : (0, _._)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingPackageError",
                  );
            case _:
              return _.bundle_id
                ? null
                : (0, _._)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingBundleError",
                  );
            case _:
              return _(_.dropdown_title)
                ? !_.dropdown_items || _.dropdown_items.length < 2
                  ? (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownItemsError",
                    )
                  : null
                : (0, _._)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownTitleError",
                  );
          }
        }
        const _ = (0, _.createContext)(null);
        function _(_, _) {
          if (_.length === 0) return !1;
          for (const _ of _)
            switch (_.kind) {
              case _:
                return !1;
              case _:
                continue;
              case _:
                return !1;
              case _:
                return _.includes(_.package_id);
              case _:
                return (
                  _.dropdown_items &&
                  _.dropdown_items.length > 0 &&
                  _.dropdown_items[0].kind === "package" &&
                  _.includes(_.dropdown_items[0].package_id)
                );
            }
          return !1;
        }
        function _(_) {
          const {
              appid: _,
              rgBaseGamePackageIds: _,
              rgAllBundles: _,
              rgAllPackages: _,
              rgValidLanguages: _,
            } = _,
            [_, _] = (0, _.useState)(_.bManualPurchaseOptionsOrder),
            [_, _] = (0, _.useState)(_.rgPurchaseOptionsOrder),
            [_, _] = (0, _.useMemo)(() => {
              const _ = new Set(),
                _ = new Set();
              for (const _ of _)
                switch (_.kind) {
                  case _:
                    _.add(_.package_id);
                    break;
                  case _:
                    _.add(_.bundle_id && _.bundle_id);
                    break;
                  case _:
                    for (const _ of _.dropdown_items ?? []) _.add(_.package_id);
                    break;
                }
              const _ = _.filter((_) => !_.has(_.packageid)).map((_) => ({
                  value: _.packageid,
                  label: (0, _._)(
                    "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                    _.name,
                    _.packageid,
                  ),
                })),
                _ = _.filter((_) => !_.has(_.bundleid)).map((_) => ({
                  value: _.bundleid,
                  label: (0, _._)(
                    "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                    _.name,
                    _.bundleid,
                  ),
                }));
              return [_, _];
            }, [_, _, _]),
            _ = (0, _.useMemo)(
              () =>
                _.map((_) => {
                  const _ = (0, _._)(`#Language_${_}`);
                  return {
                    value: _,
                    label: _,
                  };
                }),
              [_],
            ),
            _ = _.length === 0 || _(_, _),
            _ = _.some((_) => _(_) !== null) || !_,
            _ = {
              appid: _,
              rgUnusedBundles: _,
              rgUnusedPackages: _,
              rgValidLanguages: _,
              bHasErrors: _,
              rgAllPackages: _,
              rgAllBundles: _,
            };
          return (0, _.jsxs)("div", {
            className: _.PurchaseOptionsOrderEditor,
            children: [
              (0, _.jsx)("h2", {
                children: (0, _._)("#StoreAdmin_PurchaseOptionsOrder_Title"),
              }),
              (0, _.jsx)("p", {
                children: (0, _._)(
                  "#StoreAdmin_PurchaseOptionsOrder_Description",
                ),
              }),
              (0, _.jsxs)("div", {
                className: _.PurchaseOptionsManualToggleCtn,
                children: [
                  (0, _.jsx)(_._, {
                    value: _,
                    onChange: (_) => _(_),
                  }),
                  (0, _.jsx)("div", {
                    className: _.Label,
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_ToggleLabel",
                    ),
                  }),
                  (0, _.jsx)("input", {
                    type: "hidden",
                    name: "app[purchase_options_order][method]",
                    value: _ ? "manual" : "original",
                  }),
                ],
              }),
              (0, _.jsxs)(_.Provider, {
                value: _,
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        !_ &&
                          (0, _.jsxs)("div", {
                            className: _.PurchaseOptionError,
                            children: [
                              (0, _.jsx)(_.Q9b, {
                                className: _.Exclamation,
                              }),
                              (0, _._)(
                                "#StoreAdmin_PurchaseOptionsOrder_FirstItemMustBeBaseGame",
                              ),
                              "\xA0 ",
                              _.join(", "),
                            ],
                          }),
                        (0, _.jsx)(_, {
                          appid: _.appid,
                          items: _,
                          setItems: _,
                          component: _,
                          noItemsPlaceholder: (0, _.jsx)("p", {
                            className: _.NoPurchaseOptions,
                            children: (0, _._)(
                              "#StoreAdmin_PurchaseOptionsOrder_NoPurchaseOptionsPlaceholder",
                            ),
                          }),
                          emptyItem: () => ({
                            kind: _,
                          }),
                          addText: (0, _._)(
                            "#StoreAdmin_PurchaseOptionsOrder_Add",
                          ),
                        }),
                      ],
                    }),
                  (0, _.jsx)(_, {
                    rgOptions: _,
                    rgOriginalOptions: _.rgPurchaseOptionsOrder,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { rgOptions: _, rgOriginalOptions: _ } = _;
          if ((0, _.useContext)(_).bHasErrors) return null;
          const _ = [];
          for (let _ = 0; _ < Math.max(_.length, _.length); _++)
            _ < _.length
              ? _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      children: (0, _.jsx)(_, {
                        option: _[_],
                        originalOption: _[_] ?? null,
                        index: _,
                      }),
                    },
                    _,
                  ),
                )
              : _.push(
                  (0, _.jsx)(
                    "input",
                    {
                      type: "hidden",
                      name: `app[purchase_options_order][order][${_}]`,
                      value: "",
                    },
                    _,
                  ),
                );
          return (0, _.jsx)(_.Fragment, {
            children: _,
          });
        }
        function _(_) {
          const { option: _, originalOption: _, index: _ } = _,
            _ = `app[purchase_options_order][order][${_}]`;
          if (
            (0, _.useContext)(_).bHasErrors ||
            !_ ||
            (_.kind === _.kind && _.kind !== _ && _.kind !== _)
          )
            return null;
          if (_.kind === _ && _.kind === _) {
            let _ = [];
            if (_.dropdown_items.length < _.dropdown_items.length)
              for (
                let _ = _.dropdown_items.length;
                _ < _.dropdown_items.length;
                _++
              )
                _.push(
                  (0, _.jsx)("input", {
                    type: "hidden",
                    name: `${_}[dropdown_items][${_}]`,
                    value: "",
                  }),
                );
            for (const [_, _] of Object.entries(_.dropdown_title ?? {}))
              _.trim().length !== 0 &&
                ((_.dropdown_title && _.dropdown_title[_].trim().length > 0) ||
                  _.push(
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: `${_}[dropdown_title][${_}]`,
                      value: "",
                    }),
                  ));
            for (const [_, _] of Object.entries(_.description ?? {}))
              _.trim().length !== 0 &&
                ((_.description && _.description[_].trim().length > 0) ||
                  _.push(
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: `${_}[description][${_}]`,
                      value: "",
                    }),
                  ));
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          }
          if (_.kind === _ && _.kind === _) {
            let _ = [];
            for (const [_, _] of Object.entries(_.header ?? {}))
              _.trim().length !== 0 &&
                ((_.header && _.header[_].trim().length > 0) ||
                  _.push(
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: `${_}[header][${_}]`,
                      value: "",
                    }),
                  ));
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          }
          switch (_.kind) {
            case _:
              return (0, _.jsx)("input", {
                type: "hidden",
                name: `${_}[package_id]`,
                value: "",
              });
            case _:
              return (0, _.jsx)("input", {
                type: "hidden",
                name: `${_}[bundle_id]`,
                value: "",
              });
            case _:
              return (0, _.jsx)("input", {
                type: "hidden",
                name: `${_}[header]`,
                value: "",
              });
            case _:
              return (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("input", {
                    type: "hidden",
                    name: `${_}[dropdown_title]`,
                    value: "",
                  }),
                  (0, _.jsx)("input", {
                    type: "hidden",
                    name: `${_}[description]`,
                    value: "",
                  }),
                  _.dropdown_items?.map((_, _) =>
                    (0, _.jsx)(
                      "input",
                      {
                        type: "hidden",
                        name: `${_}[dropdown_items][${_}]`,
                        value: "",
                      },
                      _,
                    ),
                  ),
                ],
              });
            case _:
              return null;
          }
        }
        function _(_) {
          const { index: _, item: _, setItem: _, removeItem: _ } = _,
            _ = (0, _.useContext)(_),
            _ = (_) => {
              let _ = structuredClone(_);
              (_.kind = _.target.value), _(_);
            },
            _ = [
              {
                value: _,
                label: (0, _._)("#StoreAdmin_PurchaseOptionsOrder_Package"),
              },
              {
                value: _,
                label: (0, _._)("#StoreAdmin_PurchaseOptionsOrder_Bundle"),
              },
              {
                value: _,
                label: (0, _._)("#StoreAdmin_PurchaseOptionsOrder_Header"),
              },
              {
                value: _,
                label: (0, _._)("#StoreAdmin_PurchaseOptionsOrder_Dropdown"),
              },
            ];
          let _;
          switch (_.kind) {
            case _:
              _ = (0, _.jsx)(_, {
                item: _,
                index: _,
              });
              break;
            case _:
              _ = (0, _.jsx)(_, {
                item: _,
                setItem: _,
                index: _,
              });
              break;
            case _:
              _ = (0, _.jsx)(_, {
                item: _,
                setItem: _,
                index: _,
              });
              break;
            case _:
              _ = (0, _.jsx)(_, {
                item: _,
                setItem: _,
                index: _,
              });
              break;
            case _:
              _ = (0, _.jsx)(_, {
                item: _,
                setItem: _,
                index: _,
              });
              break;
          }
          return (0, _.jsxs)("div", {
            className: _.PurchaseOption,
            children: [
              !_.bHasErrors &&
                (0, _.jsx)("input", {
                  type: "hidden",
                  name: `app[purchase_options_order][order][${_}][kind]`,
                  value: _.kind,
                }),
              (0, _.jsxs)("div", {
                className: _.PurchaseOptionFirstLine,
                children: [
                  (0, _.jsxs)("select", {
                    onChange: _,
                    value: _.kind,
                    children: [
                      (0, _.jsx)("option", {
                        hidden: !0,
                        value: _,
                      }),
                      _.map((_, _) =>
                        (0, _.jsx)(
                          "option",
                          {
                            value: _.value,
                            children: _.label,
                          },
                          _,
                        ),
                      ),
                    ],
                  }),
                  (0, _.jsx)("a", {
                    className: _.RemovePurchaseOption,
                    onClick: _,
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_Remove",
                    ),
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.PurchaseOptionDetails,
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          return _.message === null
            ? null
            : (0, _.jsxs)("div", {
                className: _.PurchaseOptionError,
                children: [
                  (0, _.jsx)(_.Q9b, {
                    className: _.Exclamation,
                  }),
                  _.message,
                ],
              });
        }
        function _(_) {
          const _ = _(_.item);
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(_, {
              message: _,
            }),
          });
        }
        function _(_) {
          const { item: _, index: _, setItem: _ } = _,
            _ = (0, _.useContext)(_),
            _ = (_) => {
              const _ = structuredClone(_);
              (_.package_id = _.value), _(_);
            },
            _ = _.rgAllPackages.find((_) => _.packageid === _.package_id),
            _ = {
              value: _.package_id,
              label: _
                ? _.name
                : (0, _._)("#StoreAdmin_PurchaseOptionsOrder_Loading"),
            };
          return (0, _.jsxs)("div", {
            className: _.PackageOption,
            children: [
              (0, _.jsx)(_, {
                message: _(_),
              }),
              (0, _.jsx)(_._, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                name: _.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${_}][package_id]`,
                placeholder: (0, _._)(
                  "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                ),
                options: _.rgUnusedPackages,
                value: _,
                onChange: _,
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _.useContext)(_),
            { item: _, setItem: _, index: _ } = _,
            _ = (_) => {
              const _ = structuredClone(_);
              (_.bundle_id = _.value), _(_);
            };
          let _;
          if (_.bundle_id) {
            const _ = _.rgAllBundles.find((_) => _.bundleid === _.bundle_id);
            _ = {
              value: _.bundle_id,
              label: (0, _._)(
                "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                _.name,
                _.bundle_id,
              ),
            };
          }
          return (0, _.jsxs)("div", {
            className: _.BundleOption,
            children: [
              (0, _.jsx)(_, {
                message: _(_),
              }),
              (0, _.jsx)(_._, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                value: _,
                name: _.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${_}][bundle_id]`,
                placeholder: (0, _._)(
                  "#StoreAdmin_PurchaseOptionsOrder_BundlePlaceholder",
                ),
                options: _.rgUnusedBundles,
                onChange: _,
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _.useContext)(_),
            { index: _, item: _, setItem: _ } = _,
            [_, _] = (0, _.useState)("english"),
            _ = (_.header && _.header[_]) || "",
            _ = (_) => {
              const _ = _.target.value;
              let _ = structuredClone(_);
              _.header === void 0 && (_.header = {}), (_.header[_] = _), _(_);
            },
            _ = (_) => {
              const _ = _.target.value;
              _(_);
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                message: _(_),
              }),
              (0, _.jsxs)("div", {
                className: _.PurchaseOptionHeader,
                children: [
                  (0, _.jsx)("input", {
                    type: "hidden",
                    value: _,
                    name: `app[purchase_options_order][order][${_}][kind]`,
                  }),
                  (0, _.jsx)("input", {
                    type: "text",
                    onInput: _,
                    value: _,
                    name: `app[purchase_options_order][order][${_}][header][${_}]`,
                    className: _.HeaderText,
                    placeholder: "Header text",
                  }),
                  _.rgValidLanguages.map((_, _) =>
                    _.value === _
                      ? null
                      : _.header && _.header[_.value]
                        ? (0, _.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${_}][header][${_.value}]`,
                              value: _.header[_.value],
                            },
                            _,
                          )
                        : null,
                  ),
                  (0, _.jsx)("select", {
                    value: _,
                    onChange: _,
                    className: _.HeaderLanguage,
                    children: _.rgValidLanguages.map((_, _) =>
                      (0, _.jsx)(
                        "option",
                        {
                          value: _.value,
                          children: _.label,
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _.useContext)(_),
            { item: _, setItem: _, index: _ } = _,
            [_, _] = (0, _.useState)("english"),
            [_, _] = (0, _.useState)("english"),
            _ = (_) => {
              const _ = structuredClone(_);
              _.dropdown_title || (_.dropdown_title = {}),
                (_.dropdown_title[_] = _.target.value),
                _(_);
            },
            _ = (_) => {
              const _ = structuredClone(_);
              _.description || (_.description = {}),
                (_.description[_] = _.target.value),
                _(_);
            },
            _ = (_) => {
              const _ = structuredClone(_);
              _.dropdown_items || (_.dropdown_items = []);
              let _ = {
                kind: "package",
                package_id: _.value[1],
              };
              _.dropdown_items.push(_), _(_);
            },
            _ = _.rgUnusedPackages.map((_) => ({
              value: ["package", _.value],
              label: _.label,
            })),
            _ = (_) => {
              if (_.package_id) {
                const _ = _.rgAllPackages.find(
                  (_) => _.packageid === _.package_id,
                );
                return (0, _.jsx)("div", {
                  className: _.DropdownOptionRow,
                  children: (0, _.jsx)("a", {
                    href: `${_._.PARTNER_BASE_URL}store/packagelanding/${_.package_id}`,
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      _.name,
                      _.package_id,
                    ),
                  }),
                });
              } else if (_.bundle_id) {
                const _ = _.rgAllBundles.find(
                  (_) => _.bundleid === _.bundle_id,
                );
                return (0, _.jsx)("div", {
                  className: _.DropdownOptionRow,
                  children: (0, _.jsx)("a", {
                    href: `${_._.PARTNER_BASE_URL}bundles/view/${_.bundle_id}`,
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      _.name,
                      _.bundle_id,
                    ),
                  }),
                });
              } else return null;
            },
            _ = (_) => {
              const _ = structuredClone(_);
              _.dropdown_items || (_.dropdown_items = []),
                _.dropdown_items.splice(_, 1),
                _(_);
            },
            _ = (_, _) => {
              const _ = structuredClone(_);
              _.dropdown_items || (_.dropdown_items = []);
              const [_] = _.dropdown_items.splice(_, 1);
              _.dropdown_items.splice(_, 0, _), _(_);
            };
          return (0, _.jsxs)("div", {
            className: _.DropdownOption,
            children: [
              (0, _.jsx)(_, {
                message: _(_),
              }),
              (0, _.jsxs)("div", {
                className: _.TitleLine,
                children: [
                  (0, _.jsx)("label", {
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitleLabel",
                    ),
                  }),
                  (0, _.jsx)("input", {
                    type: "text",
                    className: _.TitleInput,
                    name: `app[purchase_options_order][order][${_}][dropdown_title][${_}]`,
                    value: (_.dropdown_title && _.dropdown_title[_]) || "",
                    placeholder: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitlePlaceholder",
                    ),
                    onChange: _,
                  }),
                  _.rgValidLanguages.map((_, _) =>
                    _.value === _
                      ? null
                      : _.dropdown_title &&
                          _.dropdown_title[_.value] &&
                          _.dropdown_title[_.value].trim().length > 0
                        ? (0, _.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${_}][dropdown_title][${_.value}]`,
                              value: _.dropdown_title[_.value],
                            },
                            _,
                          )
                        : null,
                  ),
                  (0, _.jsx)("select", {
                    value: _,
                    onChange: (_) => _(_.target.value),
                    className: _.HeaderLanguage,
                    children: _.rgValidLanguages.map((_, _) =>
                      (0, _.jsx)(
                        "option",
                        {
                          value: _.value,
                          children: _.label,
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.DescriptionLine,
                children: [
                  (0, _.jsx)("label", {
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionLabel",
                    ),
                  }),
                  (0, _.jsx)("select", {
                    value: _,
                    onChange: (_) => _(_.target.value),
                    className: _.HeaderLanguage,
                    children: _.rgValidLanguages.map((_, _) =>
                      (0, _.jsx)(
                        "option",
                        {
                          value: _.value,
                          children: _.label,
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              }),
              (0, _.jsx)("input", {
                type: "text",
                className: _.DescriptionInput,
                name: `app[purchase_options_order][order][${_}][description][${_}]`,
                value: (_.description && _.description[_]) || "",
                onChange: _,
                placeholder: (0, _._)(
                  "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionPlaceholder",
                ),
              }),
              _.rgValidLanguages.map((_, _) =>
                _.value === _
                  ? null
                  : _.description &&
                      _.description[_.value] &&
                      _.description[_.value].trim().length > 0
                    ? (0, _.jsx)(
                        "input",
                        {
                          type: "hidden",
                          name: `app[purchase_options_order][order][${_}][description][${_.value}]`,
                          value: _.description[_.value],
                        },
                        _,
                      )
                    : null,
              ),
              (0, _.jsxs)("div", {
                className: _.DropdownItemsCtn,
                children: [
                  (0, _.jsx)("label", {
                    children: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownItemsLabel",
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, _._)(
                      "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                    ),
                    options: _,
                    onChange: _,
                    controlShouldRenderValue: !1,
                  }),
                  (0, _.jsx)(_._, {
                    render: _,
                    onDelete: _,
                    onMove: _,
                    items: _.dropdown_items ?? [],
                  }),
                  (_.dropdown_items ?? []).map((_, _) =>
                    (0, _.jsxs)(
                      "div",
                      {
                        children: [
                          (0, _.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${_}][dropdown_items][${_}][kind]`,
                            value: "package",
                          }),
                          (0, _.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${_}][dropdown_items][${_}][package_id]`,
                            value: _.package_id,
                          }),
                        ],
                      },
                      _,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              items: _,
              setItems: _,
              component: _,
              emptyItem: _,
              noItemsPlaceholder: _,
              addText: _,
            } = _,
            _ = (_) => () => {
              if (_ === 0) return;
              let _ = [..._];
              const [_] = _.splice(_, 1);
              _.splice(_ - 1, 0, _), _(_);
            },
            _ = (_) => () => {
              if (_ === _.length - 1) return;
              let _ = [..._];
              const [_] = _.splice(_, 1);
              _.splice(_ + 1, 0, _), _(_);
            },
            _ = () => (_(_.concat([_()])), !1),
            _ = (_) => (_) => {
              let _ = [..._];
              (_[_] = _), _(_);
            },
            _ = (_) => () => {
              let _ = [..._];
              _.splice(_, 1), _(_);
            };
          return (0, _.jsxs)("div", {
            className: _.ReorderableListWithArrows,
            children: [
              _.length > 0 &&
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      index: _,
                      item: _,
                      setItem: _(_),
                      removeItem: _(_),
                      component: _,
                      moveUp: _(_),
                      moveDown: _(_),
                    },
                    "reorderable-" + _,
                  ),
                ),
              _.length === 0 && _,
              (0, _.jsx)("a", {
                onClick: _,
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
            index: _,
            item: _,
            setItem: _,
            moveUp: _,
            moveDown: _,
            removeItem: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: _.ReorderableListElement,
            children: [
              (0, _.jsxs)("div", {
                className: _.ReorderableListUpAndDownCtn,
                children: [
                  (0, _.jsx)("div", {
                    onClick: () => _(),
                    children: "\u25B2",
                  }),
                  (0, _.jsx)("div", {
                    onClick: () => _(),
                    children: "\u25BC",
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.ReorderableListElementContents,
                children: (0, _.jsx)(_.component, {
                  index: _,
                  item: _,
                  setItem: _,
                  removeItem: _,
                }),
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
          _ = __webpack_require__._(_);
        const _ = {
          include_assets: !0,
          include_basic_info: !0,
        };
        function _(_) {
          const { appid: _ } = _,
            [_] = (0, _._)(_, _),
            _ = (0, _._)();
          return !_ || !_
            ? null
            : (0, _.jsx)("div", {
                className: _().StoreItemCtn,
                children: (0, _.jsx)("div", {
                  className: _().StoreItemRow,
                  children: (0, _.jsxs)("a", {
                    href: (0, _._)(_.GetStorePageURL(), _),
                    children: [
                      (0, _.jsx)("img", {
                        src: _.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().StoreItemDescription,
                        children: [_.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        function _(_) {
          const {
              text: _,
              placeholderToken: _,
              kvName: _,
              onChangeText: _,
              bOnlyDisplay: _,
              rgRealms: _,
              className: _,
            } = _,
            _ = (0, _._)(),
            _ = _._.GetLanguageListForRealms(_),
            _ = new Array();
          _ &&
            _.forEach((_) => {
              _.push(
                (0, _.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `${_}[${(0, _.LgB)(_, "english")}]`,
                    value: (0, _._)(_, _),
                  },
                  _ + "_" + _,
                ),
              );
            });
          const _ = (0, _._)(_, _) || "";
          return (0, _.jsxs)("div", {
            className: _,
            children: [
              _
                ? (0, _.jsx)("div", {
                    children:
                      _ ||
                      (0, _.jsx)("i", {
                        children: _,
                      }),
                  })
                : (0, _.jsx)("input", {
                    type: "text",
                    placeholder: (0, _._)(_ || "#KVInputBox_Default"),
                    value: _,
                    onChange: (_) => _(_.currentTarget.value, _),
                  }),
              _,
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ {
          m_mapAppIDToDLCs = new Map();
          m_mapAppIDToSoundTracks = new Map();
          m_mapPromise = new Map();
          GetDLCForAppID(_) {
            return this.m_mapAppIDToDLCs.get(_);
          }
          GetSoundTracksForAppID(_) {
            return this.m_mapAppIDToSoundTracks.get(_);
          }
          async LoadDLCAndSoundTracksForAppID(_, _) {
            return (
              this.m_mapPromise.has(_) ||
                this.m_mapPromise.set(
                  _,
                  this.InternalLoadDLCAndSoundTracksForAppID(_, _),
                ),
              this.m_mapPromise.get(_)
            );
          }
          async InternalLoadDLCAndSoundTracksForAppID(_, _) {
            if (!this.m_mapAppIDToDLCs.has(_) && _ != 0)
              try {
                let _ = {
                    origin: self.origin,
                    _: _._.COUNTRY || "US",
                    _: _._.LANGUAGE,
                  },
                  _ = "";
                (0, _._)() == "partner"
                  ? (_ = `${_._.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${_}`)
                  : (_ = _._.STORE_BASE_URL + "dlc/" + _ + "/ajaxgetdlclist");
                let _ = await _().get(_, {
                    params: _,
                    cancelToken: _?.token,
                  }),
                  _ = Array();
                _.data.dlcs &&
                  _.data.dlcs.forEach((_) => {
                    _.push({
                      appid: _.appid,
                      name: _.name,
                      is_released_somewhere: !!_.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(_, _),
                  (_ = Array()),
                  _.data.soundtracks &&
                    _.data.soundtracks.forEach((_) => {
                      _.push({
                        appid: _.appid,
                        name: _.name,
                        is_released_somewhere: !!_.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(_, _);
              } catch (_) {
                const _ = (0, _._)(_);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    _ +
                    " hit: " +
                    _.strErrorMsg,
                  _,
                );
              }
            return {
              dlcs: this.m_mapAppIDToDLCs.has(_)
                ? this.m_mapAppIDToDLCs.get(_)
                : [],
              soundtracks: this.m_mapAppIDToSoundTracks.has(_)
                ? this.m_mapAppIDToSoundTracks.get(_)
                : [],
            };
          }
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {
            (0, _._)(this);
          }
        }
        function _(_) {
          const [_, _] = (0, _.useState)(_),
            [_, _] = (0, _.useState)(_.Get().GetDLCForAppID(_));
          return (
            (0, _.useEffect)(() => {
              _ &&
                (_ != _ || !_) &&
                _.Get()
                  .LoadDLCAndSoundTracksForAppID(_, null)
                  .then((_) => {
                    _(_.dlcs), _(_);
                  });
            }, [_, _, _]),
            _
          );
        }
        function _(_) {
          const [_, _] = (0, _.useState)(_),
            [_, _] = (0, _.useState)(_.Get().GetSoundTracksForAppID(_));
          return (
            (0, _.useEffect)(() => {
              _ &&
                (_ != _ || !_) &&
                _.Get()
                  .LoadDLCAndSoundTracksForAppID(_, null)
                  .then((_) => {
                    _(_.soundtracks), _(_);
                  });
            }, [_, _, _]),
            _
          );
        }
        function _(_) {
          const _ = _(_);
          return useMemo(
            () => _?.filter((_) => !!_.is_released_somewhere) || null,
            [_],
          );
        }
        function _(_) {
          const _ = _(_);
          return useMemo(
            () => _?.filter((_) => !_.is_released_somewhere) || null,
            [_],
          );
        }
        function _(_) {
          const {
              appid: _,
              setAppID: _,
              rgExcludeAppIDs: _,
              seasonPassID: _,
              bOnlyShowReleaseDLC: _,
              strLocalizedLabel: _,
              strLocalizedTooltip: _,
              fnResetAppID: _,
            } = _,
            _ = _(_.parentAppID),
            _ = _(_.parentAppID),
            _ = (0, _.useMemo)(
              () => [
                ...(_?.filter((_) => !_ || !!_.is_released_somewhere) || []),
                ...(_?.filter((_) => !_ || !!_.is_released_somewhere) || []),
              ],
              [_, _, _],
            ),
            _ = (0, _.useMemo)(
              () => _?.filter((_) => !_ || !_.includes(_.appid)),
              [_, _],
            ),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? _.map((_) => ({
                      label: (0, _.jsx)(_, {
                        appInfo: _,
                      }),
                      data: _.appid,
                    }))
                  : [],
              [_],
            );
          return _
            ? _.length == 0 && _
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_.ErrorStylesWithIcon, "ErrorCtn"),
                  children: (0, _._)("#SeasonPass_NoDLC"),
                })
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      label: _ || (0, _._)("#SeasonPass_ShipDLC"),
                      tooltip: _ || (0, _._)("#SeasonPass_ShipDLC_ttip"),
                      selectedOption: _,
                      onChange: (_) => _(_.data),
                      rgOptions: _,
                    }),
                    !!(_ && _) &&
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)(
                          "#SeasonPass_CustomerComingSoonDLC_clear",
                        ),
                      }),
                  ],
                })
            : (0, _.jsx)(_._, {
                size: "small",
                position: "center",
                string: (0, _._)("#Loading"),
              });
        }
        const _ = {
          include_release: !0,
        };
        function _(_) {
          const { appInfo: _ } = _,
            [_] = (0, _._)(_.appid, _);
          return _
            ? (0, _.jsxs)("span", {
                children: [
                  _.name,
                  " - (",
                  _.BIsComingSoon()
                    ? (0, _._)("#SeasonPass_Customer_ComingSoon_Mark")
                    : (0, _._)(_.GetReleaseDateRTime()),
                  ")",
                ],
              })
            : (0, _.jsx)("span", {
                children: _.name,
              });
        }
        function _(_) {
          const {
              mileStone: _,
              index: _,
              bCreate: _,
              bAppHasSteamChinaToolsEnabled: _,
              rgShippedMilestoneIDs: _,
            } = _,
            [_, _, _] = (0, _._)(),
            _ = _.useMemo(() => (0, _._)(_), [_]),
            _ = _.useMemo(
              () =>
                (0, _._)(
                  _?.milestone_desc || {
                    english: "",
                  },
                ),
              [_?.milestone_desc],
            ),
            _ = _.useMemo(
              () => ["seasonpass", "commitments", "" + _, "milestone_desc"],
              [_],
            ),
            _ = (0, _._)(_, _, "app", _ ? void 0 : _);
          return (
            (0, _.useEffect)(() => {
              if (_) {
                const _ = (0, _.sfN)(_.strActiveLanguage, _.Bhc);
                _._.Get().SetCurEditLanguage(_);
              }
            }, [_.strActiveLanguage, _]),
            (0, _._)(_._.Get().GetCallback(), (_) => {
              _.setActiveLanguage((0, _.LgB)(_));
            }),
            (0, _.jsxs)("div", {
              className: (0, _._)(_().EditBtn, _().BtnCtn),
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    hideModal: _,
                    bCreate: _,
                    ..._,
                    ..._,
                  }),
                !_ && _.rctHiddenInputs,
                (0, _.jsxs)(_._, {
                  onClick: _,
                  children: [
                    (0, _._)(_ ? "#SeasonPass_ItemNew" : "#Button_Edit"),
                    _ &&
                      (0, _.jsx)(_._, {
                        tooltip: (0, _._)("#SeasonPass_ItemNew_desc"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const {
              hideModal: _,
              seasonPassID: _,
              mileStone: _,
              milestoneID: _,
              onSave: _,
              strActiveLanguage: _,
              rgLanguages: _,
              rctLanguageSelect: _,
              mapValues: _,
              bAppHasSteamChinaToolsEnabled: _,
              bCreate: _,
              rgShippedMilestoneIDs: _,
            } = _,
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(_?.internal_desc || ""),
            [_, _] = (0, _.useState)(_?.expected_delivery || _ + 1440 * 60),
            [_, _] = (0, _.useState)(_?.display_format || "date_quarter"),
            [_, _] = (0, _.useState)(
              _?.localized_title || {
                english: "",
              },
            ),
            [_] = (0, _.useState)(_?.milestone_desc || {}),
            [_, _] = (0, _.useState)(_?.coming_soon_appid),
            [_, _] = (0, _.useState)(!!_?.backfilled_release),
            _ = (0, _.useRef)(void 0),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? [_._.k_ESteamRealmGlobal, _._.k_ESteamRealmChina]
                  : [_._.k_ESteamRealmGlobal],
              [_],
            ),
            _ = (0, _._)(_ ? "#SeasonPass_Update" : "#SeasonPass_Create"),
            _ = _?.includes(_);
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_._, {
              strTitle: _,
              strDescription: (0, _._)("#SeasonPass_Create_desc"),
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strOKButtonText: (0, _._)(
                _ ? "#Button_Update" : "#Button_Create",
              ),
              bOKDisabled: _.english.length < 3,
              onOK: () => {
                const _ = {};
                _.forEach((_, _) => {
                  _[_] = _.Value;
                }),
                  _({
                    milestone_id: _,
                    internal_desc: _,
                    expected_delivery: _,
                    submit_time: _,
                    submit_accountid: _._.accountid,
                    display_format: _,
                    localized_title: _,
                    milestone_desc: _,
                    milestone_image: void 0,
                    backfilled_release: _,
                    coming_soon_appid: _,
                  }),
                  _ && _.forEach((_, _) => _.get(_).Set("")),
                  _();
              },
              onCancel: () => {
                _.forEach((_, _) => {
                  _?.[_] ? _.get(_).Set(_[_]) : _.get(_).Set("");
                }),
                  _();
              },
              children: (0, _.jsxs)("div", {
                className: _().EditMilestoneDialog,
                children: [
                  (0, _.jsxs)("h3", {
                    children: [
                      (0, _._)("#SeasonPass_CustomerTitle"),
                      (0, _.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, _._)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#SeasonPass_CustomerSubtitle"),
                  }),
                  (0, _.jsx)(_, {
                    text: _,
                    className: _().MilestoneTitleField,
                    onChangeText: (_, _) => {
                      (0, _._)(_, _, _),
                        _({
                          ..._,
                        });
                    },
                    kvName: void 0,
                    rgRealms: _,
                  }),
                  (0, _.jsxs)("h3", {
                    children: [
                      (0, _._)("#SeasonPass_CustomerDescription_Title"),
                      (0, _.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, _._)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)(
                      "#SeasonPass_CustomerDescription_Subtitle",
                    ),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)(
                      "#SeasonPass_CustomerDescription_Images",
                    ),
                  }),
                  (0, _.jsx)(_.default, {
                    language: _,
                    languages: _,
                    editorType: "milestone",
                    rctToolbarControls: _,
                    mapValues: _,
                    rctAboveEditor: (0, _.jsx)(_, {
                      appid: _?.completed_appid || _,
                    }),
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      appid: _,
                      setAppID: _,
                      rgExcludeAppIDs: null,
                      seasonPassID: _,
                      strLocalizedLabel: (0, _._)(
                        "#SeasonPass_CustomerComingSoonDLC",
                      ),
                      strLocalizedTooltip: (0, _._)(
                        "#SeasonPass_CustomerComingSoonDLC_ttip",
                      ),
                    }),
                  !_ &&
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().DatePickerRow,
                          children: [
                            (0, _.jsxs)("div", {
                              children: [
                                (0, _.jsx)("h3", {
                                  children: (0, _._)(
                                    _
                                      ? "#SeasonPass_Backfill_date"
                                      : "#SeasonPass_Delivery",
                                  ),
                                }),
                                (0, _.jsx)("p", {
                                  children: (0, _._)(
                                    _
                                      ? "#SeasonPass_Backfill_date_ttip"
                                      : "#SeasonPass_Delivery_ttip",
                                  ),
                                }),
                                (0, _.jsx)(_._, {
                                  nEarliestTime: _ ? 0 : _,
                                  fnGetTimeToUpdate: () => _,
                                  fnSetTimeToUpdate: _,
                                  fnIsValidDateTime: () => (_ ? _ < _ : _ < _),
                                  strInvalidDateTimeLocalizedMsg: _
                                    ? (0, _._)(
                                        "#SeasonPass_BackFill_invalid_date",
                                      )
                                    : void 0,
                                }),
                              ],
                            }),
                            !_ &&
                              (0, _.jsxs)("div", {
                                children: [
                                  (0, _.jsx)("h3", {
                                    children: (0, _._)(
                                      "#SeasonPass_CustomerDisplay",
                                    ),
                                  }),
                                  (0, _.jsx)("p", {
                                    children: (0, _._)(
                                      "#SeasonPass_CustomerDisplay_ttip",
                                    ),
                                  }),
                                  (0, _.jsx)(_._, {
                                    value: _,
                                    onChange: _,
                                    rgComingSoonOptionOverride: _._,
                                    rtSteamReleaseDate: _,
                                    bExpandedDisplay: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, _.jsx)(_._, {
                          ref: _,
                          label: (0, _._)("#SeasonPass_Backfill_check"),
                          tooltip: (0, _._)("#SeasonPass_Backfill_check_ttip"),
                          onChange: (_) => {
                            let _ = !(!_ && _ < _);
                            _(!_), _ ? _(_) : _.current.SetChecked(!0, !1);
                          },
                          checked: _,
                        }),
                        _ &&
                          (0, _.jsx)("div", {
                            className: _.WarningStylesWithIcon,
                            children: (0, _._)("#SeasonPass_Backfill_warning"),
                          }),
                      ],
                    }),
                  (0, _.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { milestoneID: _, rgPublishedMilestoneIDs: _, onDelete: _ } = _,
            [_, _, _] = (0, _._)();
          return !_ || _?.includes(_)
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(_().EditBtn, _().BtnCtn),
                children: [
                  (0, _.jsx)(_._, {
                    active: _,
                    children: (0, _.jsx)(_._, {
                      strTitle: (0, _._)("#Button_Delete"),
                      strDescription: (0, _._)("#Dialog_AreYouSure"),
                      onOK: _,
                      bDestructiveWarning: !0,
                      bDisableBackgroundDismiss: !1,
                      closeModal: _,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: (0, _._)("#Button_Delete"),
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              hideModal: _,
              inputMilestone: _,
              setCurrentMilestone: _,
              seasonPassID: _,
              rgExcludedAppIDs: _,
            } = _,
            _ = !_.completed_appid,
            _ = !_.completed_event_gid,
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null);
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsxs)(_._, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, _._)("#SeasonPass_PostShipLink"),
              strDescription: (0, _._)("#SeasonPass_PostShipLink_Desc"),
              closeModal: _,
              bOKDisabled: !_ && !_,
              onOK: () => {
                const _ = {
                  ..._,
                };
                _ && _ && (_.completed_appid = _),
                  _ && _ && (_.completed_event_gid = _),
                  _(_);
              },
              children: [
                _ &&
                  (0, _.jsxs)("div", {
                    className: _().OptionDetails,
                    children: [
                      (0, _.jsx)(_._, {
                        children: (0, _._)("#SeasonPass_UpdateLaunch_dlc"),
                      }),
                      (0, _.jsx)(_, {
                        appid: _,
                        setAppID: _,
                        rgExcludeAppIDs: _,
                        seasonPassID: _,
                        bOnlyShowReleaseDLC: !0,
                      }),
                    ],
                  }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: _().OptionDetails,
                    children: [
                      (0, _.jsxs)(_._, {
                        children: [
                          (0, _._)("#SeasonPass_UpdateLaunch_update"),
                          (0, _.jsx)(_._, {
                            tooltip: (0, _._)("#SeasonPass_AddLaunchEvent"),
                          }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        appid: _.parentAppID,
                        selectedEventGID: _,
                        fnSetUpdateEvent: (_, _) => _(_),
                        bFilterOutDrafts: !0,
                      }),
                      !!_._.is_support &&
                        (0, _.jsx)("div", {
                          className: _().ValveOnlyBackground,
                          children: (0, _.jsxs)("div", {
                            children: ["Selected GID: ", _],
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
        const _ = {
          include_release: !0,
          include_included_items: !0,
        };
        function _(_) {
          const {
              inputMilestone: _,
              setCurrentMilestone: _,
              seasonPassID: _,
              rgAllMilestones: _,
              index: _,
              rgShippedMilestoneIDs: _,
            } = _,
            [_] = (0, _._)(_.completed_appid, _),
            [_, _, _] = (0, _._)(),
            [_, _, _] = (0, _._)(),
            _ = !!_.includes(_.milestone_id),
            _ = !!(_ && (!_.completed_appid || !_.completed_event_gid));
          return (0, _.jsxs)("div", {
            className: _().StatusRow,
            children: [
              !!_ &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("div", {
                    className: _().CheckMark,
                    children: "\u2713",
                  }),
                }),
              !!_.completed_appid &&
                (0, _.jsxs)("a", {
                  href: `${_._.STORE_BASE_URL}app/${_.completed_appid}`,
                  target: "_blank",
                  children: [_?.GetName() || "", " (", _.completed_appid, ")"],
                }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][completed_appid]`,
                value: _.completed_appid ? _.completed_appid : "",
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][completed_event_gid]`,
                value: _.completed_event_gid ? "" + _.completed_event_gid : "",
              }),
              !!_.completed_event_gid &&
                (0, _.jsx)("a", {
                  href: `${_._.STORE_BASE_URL}news/app/${_.parentAppID}/view/${_.completed_event_gid}`,
                  target: "_blank",
                  children: (0, _._)("#SeasonPass_ViewLaunchEvent"),
                }),
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        inputMilestone: _,
                        setCurrentMilestone: _,
                        rgExcludedAppIDs: _(_, _, _.milestone_id),
                        seasonPassID: _,
                        hideModal: _,
                      }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      children: (0, _._)(
                        _.completed_appid ||
                          _.completed_event_gid ||
                          _.backfilled_release
                          ? "#SeasonPass_UpdateLaunch_Edit"
                          : "#SeasonPass_UpdateLaunch",
                      ),
                    }),
                  ],
                }),
              !!_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        setCurrentMilestone: _,
                        inputMilestone: _,
                        hideModal: _,
                        rgExcludedAppIDs: _(_, _, _.milestone_id),
                        seasonPassID: _,
                      }),
                    (0, _.jsx)(_._, {
                      toolTipContent: (0, _._)(
                        "#SeasonPass_PostShipLink_Button_ttip",
                      ),
                      children: (0, _.jsxs)(_._, {
                        onClick: _,
                        children: [
                          (0, _._)("#SeasonPass_PostShipLink_Button"),
                          (0, _.jsx)(_._, {
                            tooltip: void 0,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_, _, _) {
          const _ = new Array();
          return (
            _.push(_.dlcAppID),
            _.forEach((_) => {
              _.milestone_id != _ &&
                _.completed_appid &&
                _.push(_.completed_appid);
            }),
            _
          );
        }
        function _(_) {
          const {
              hideModal: _,
              inputMilestone: _,
              setCurrentMilestone: _,
              seasonPassID: _,
              rgExcludedAppIDs: _,
            } = _,
            [_, _] = (0, _.useState)(_.completed_appid),
            [_, _] = (0, _.useState)(_.completed_event_gid),
            [_, _] = (0, _.useState)(() => !!_.completed_appid),
            [_, _] = (0, _.useState)(!!_.completed_event_gid);
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_._, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, _._)(
                "#SeasonPass_UpdateLaunch_title",
                _.localized_title?.[_._.LANGUAGE] || _.localized_title?.english,
              ),
              strDescription: (0, _._)(
                _.backfilled_release
                  ? "#SeasonPass_UpdateLaunch_desc_backfill"
                  : "#SeasonPass_UpdateLaunch_desc",
              ),
              closeModal: _,
              bOKDisabled: _ && !_,
              onOK: () => {
                _({
                  ..._,
                  completed_appid: _,
                  completed_event_gid: _,
                });
              },
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_().ShippingTheMilestone),
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().ShippingType),
                    children: (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)(_._, {
                          children: (0, _._)(
                            "#SeasonPass_UpdateLaunch_radio_label",
                          ),
                        }),
                        (0, _.jsx)(_._, {
                          checked: !_,
                          onChange: (_) => _ && _(!1),
                          label: (0, _._)(
                            "#SeasonPass_UpdateLaunch_radio_label_1",
                          ),
                        }),
                        (0, _.jsx)(_._, {
                          checked: _,
                          onChange: (_) => _ && _(!0),
                          label: (0, _._)(
                            "#SeasonPass_UpdateLaunch_radio_label_2",
                          ),
                          tooltip: (0, _._)(
                            "#SeasonPass_UpdateLaunch_radio_label_2_ttip",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsx)("br", {}),
                  !!(!_ || _) &&
                    (0, _.jsxs)("div", {
                      className: _().OptionDetails,
                      children: [
                        (0, _.jsxs)(_._, {
                          children: [
                            (0, _._)("#SeasonPass_UpdateLaunch_update"),
                            (0, _.jsx)(_._, {
                              tooltip: (0, _._)("#SeasonPass_AddLaunchEvent"),
                            }),
                          ],
                        }),
                        (0, _.jsx)(_._, {
                          appid: _.parentAppID,
                          selectedEventGID: _,
                          fnSetUpdateEvent: (_, _) => _(_),
                          bFilterOutDrafts: !0,
                        }),
                        !!_._.is_support &&
                          (0, _.jsx)("div", {
                            className: _().ValveOnlyBackground,
                            children: (0, _.jsxs)("div", {
                              children: ["Selected GID: ", _],
                            }),
                          }),
                      ],
                    }),
                  _ &&
                    (0, _.jsxs)("div", {
                      className: _().OptionDetails,
                      children: [
                        (0, _.jsx)(_._, {
                          children: (0, _._)("#SeasonPass_UpdateLaunch_dlc"),
                        }),
                        (0, _.jsx)(_, {
                          appid: _,
                          setAppID: _,
                          rgExcludeAppIDs: _,
                          seasonPassID: _,
                          bOnlyShowReleaseDLC: !0,
                          fnResetAppID: () => {
                            _(!1), _(void 0);
                          },
                        }),
                      ],
                    }),
                  _ &&
                    !_ &&
                    (0, _.jsx)("div", {
                      className: _().OptionDetails,
                      children: (0, _.jsx)(_._, {
                        label: (0, _._)("#SeaosnPass_OptionalEvents"),
                        checked: _,
                        onChange: (_) => _(_),
                      }),
                    }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const {
            seasonPassData: _,
            seasonPassID: _,
            rgPublishedMilestoneIDs: _,
            bAppHasSteamChinaToolsEnabled: _,
            fnDeleteMilestoneByID: _,
            rgShippedMilestoneIDs: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: _().MilestoneTable,
            children: [
              (0, _.jsx)(_._, {
                children: (0, _._)("#SeasonPass_Milestone_table"),
              }),
              (0, _.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {
                          children: (0, _._)("#SeasonPass_Milestone_Title"),
                        }),
                        (0, _.jsx)("th", {}),
                      ],
                    }),
                  }),
                  (0, _.jsx)("tbody", {
                    children: _?.commitments?.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          inputMilestone: _,
                          index: _,
                          seasonPassID: _,
                          rgAllMilestones: _.commitments,
                          bAppHasSteamChinaToolsEnabled: _,
                          rgPublishedMilestoneIDs: _,
                          rgShippedMilestoneIDs: _,
                          fnDeleteMilestone: () => _(_.milestone_id),
                        },
                        "row" + _.milestone_id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { milestone: _, index: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][milestone_id]`,
                value: _ ? _.milestone_id : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][internal_desc]`,
                value: _ ? _.internal_desc : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][submit_time]`,
                value: _ ? _.submit_time : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][submit_accountid]`,
                value: _ ? _.submit_accountid : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][expected_delivery]`,
                value: _ ? _.expected_delivery : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][display_format]`,
                value: _ ? _.display_format : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][backfilled_release]`,
                value: _ ? String(!!_.backfilled_release) : void 0,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${_}][coming_soon_appid]`,
                value: _ ? _.coming_soon_appid : void 0,
              }),
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${_}][localized_title]`,
                      value: void 0,
                    }),
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${_}][milestone_desc]`,
                      value: void 0,
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const {
              inputMilestone: _,
              index: _,
              seasonPassID: _,
              rgAllMilestones: _,
              bAppHasSteamChinaToolsEnabled: _,
              rgPublishedMilestoneIDs: _,
              fnDeleteMilestone: _,
              rgShippedMilestoneIDs: _,
            } = _,
            [_, _] = (0, _.useState)(_),
            _ = (0, _._)(),
            _ = !!_.includes(_.milestone_id),
            _ = !_ && _.expected_delivery < _,
            _ = (0, _.useMemo)(
              () =>
                _
                  ? [_._.k_ESteamRealmGlobal, _._.k_ESteamRealmChina]
                  : [_._.k_ESteamRealmGlobal],
              [_],
            ),
            _ = (0, _._)(),
            _ = _._.GetELanguageFallback(_);
          return (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("td", {
                children: (0, _.jsxs)("div", {
                  className: (0, _._)({
                    [_().TitlePreviewRow]: !0,
                    [_().Shipped]: _,
                  }),
                  children: [
                    (0, _.jsx)(_, {
                      milestone: _,
                      index: _,
                    }),
                    (0, _.jsx)(_, {
                      text: _.localized_title,
                      className: _().Title,
                      onChangeText: null,
                      kvName: `app[seasonpass][commitments][${_}][localized_title]`,
                      bOnlyDisplay: !0,
                      placeholderToken: (0, _._)(
                        "#SeasonPass_NoLang_Fallback",
                        (0, _._)("#Language_" + (0, _.LgB)(_)),
                        (0, _._)("#Language_" + (0, _.LgB)(_)),
                      ),
                      rgRealms: _,
                    }),
                    _
                      ? (0, _.jsx)("div", {
                          className: (0, _._)(_().Date, _().Released),
                          children: (0, _._)("#SeasonPass_Released"),
                        })
                      : (0, _.jsx)(_.Fragment, {
                          children: _?.backfilled_release
                            ? (0, _.jsx)("div", {
                                className: _().PublishReminder,
                                children: (0, _._)(
                                  "#SeasonPass_Backfill_require_publish",
                                ),
                              })
                            : (0, _.jsxs)("div", {
                                className: (0, _._)(_().Date),
                                children: [
                                  (0, _.jsxs)(_._, {
                                    toolTipContent:
                                      (0, _._)("#SeasonPass_Delivery") +
                                      ": " +
                                      (0, _._)(_.expected_delivery) +
                                      " @ " +
                                      (0, _._)(_.expected_delivery),
                                    children: [
                                      (0, _._)("#SeasonPass_Coming"),
                                      (0, _.jsx)("br", {}),
                                      (0, _._)(
                                        _.display_format,
                                        _.expected_delivery,
                                        null,
                                        !0,
                                      ),
                                    ],
                                  }),
                                  _ &&
                                    (0, _.jsx)("div", {
                                      className: (0, _._)(
                                        _ ? _().ErrorStylesWithIcon : void 0,
                                      ),
                                      children: (0, _._)(
                                        "#SeasonPass_PassDueNote",
                                      ),
                                    }),
                                ],
                              }),
                        }),
                  ],
                }),
              }),
              (0, _.jsx)("td", {
                children: (0, _.jsxs)("div", {
                  className: _().BtnCtn,
                  children: [
                    (0, _.jsx)(_, {
                      inputMilestone: _,
                      setCurrentMilestone: _,
                      seasonPassID: _,
                      rgAllMilestones: _,
                      index: _,
                      rgShippedMilestoneIDs: _,
                    }),
                    (0, _.jsx)(_, {
                      milestoneID: _.milestone_id,
                      mileStone: _,
                      onSave: _,
                      index: _,
                      bAppHasSteamChinaToolsEnabled: _,
                      rgShippedMilestoneIDs: _,
                      seasonPassID: _,
                    }),
                    (0, _.jsx)(_, {
                      milestoneID: _.milestone_id,
                      onDelete: _,
                      rgPublishedMilestoneIDs: _,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              seasonPassID: _,
              seasonPassData: _,
              rgPublishedMilestoneIDs: _,
              rgShippedMilestoneIDs: _,
            } = _,
            [_, _] = (0, _.useState)(
              _ || {
                commitments: [],
              },
            ),
            { bAppHasSteamChinaToolsEnabled: _ } = (0, _._)(),
            [_, _] = (0, _.useState)(_?.commitments?.length || 0),
            _ = (0, _.useMemo)(() => {
              let _ = 0;
              do _ = Math.floor(Math.random() * 9e4) + 1e4;
              while (
                _?.commitments?.findIndex((_) => _.milestone_id == _) >= 0
              );
              return _;
            }, [_]),
            _ = (0, _.useCallback)(
              (_) =>
                !!_.commitments?.some(
                  (_) =>
                    (0, _._)(_.localized_title, _) ||
                    (0, _._)(_.milestone_desc, _),
                ),
              [_.commitments],
            ),
            _ = [];
          if (_ > _.commitments?.length)
            for (let _ = _.commitments?.length; _ < _; _++)
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    index: _,
                    milestone: null,
                  },
                  _,
                ),
              );
          return (0, _.jsxs)("div", {
            className: _().EditorCtn,
            children: [
              (0, _.jsx)(_._, {
                fnLangHasData: _,
              }),
              (0, _.jsx)(_, {
                seasonPassID: _,
                nNextMilestoneID: _,
                index: _?.commitments?.length || 0,
                fnAppendSeasonPass: (_) => {
                  _({
                    ..._,
                    commitments: [...(_.commitments || []), _],
                  }),
                    _(
                      Math.max(_, _.commitments ? _.commitments.length + 1 : 1),
                    );
                },
                bAppHasSteamChinaToolsEnabled: _,
                rgShippedMilestoneIDs: _,
              }),
              (0, _.jsx)(_, {
                seasonPassData: _,
                rgShippedMilestoneIDs: _,
              }),
              (0, _.jsx)(_, {
                seasonPassID: _,
                seasonPassData: _,
                bAppHasSteamChinaToolsEnabled: _,
                rgPublishedMilestoneIDs: _,
                rgShippedMilestoneIDs: _,
                fnDeleteMilestoneByID: (_) => {
                  const _ = _.commitments.findIndex((_) => _.milestone_id == _);
                  _ >= 0 &&
                    (_.commitments.splice(_, 1),
                    _({
                      ..._,
                      commitments: [..._.commitments],
                    }));
                },
              }),
              _,
              !!_._.is_support &&
                (0, _.jsx)("div", {
                  className: _().ValveOnlyBackground,
                  children: (0, _.jsx)(_._, {
                    onClick: (_) =>
                      (0, _._)(
                        (0, _.jsx)(_._, {
                          strTitle: "Clear?",
                          strDescription: "Are you sure?",
                          onOK: () =>
                            _({
                              commitments: [],
                            }),
                        }),
                        (0, _._)(_),
                      ),
                    children: "(VO) Clear All Milestones (in memory)",
                  }),
                }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("br", {}),
            ],
          });
        }
        function _(_) {
          const {
            seasonPassID: _,
            fnAppendSeasonPass: _,
            nNextMilestoneID: _,
            index: _,
            bAppHasSteamChinaToolsEnabled: _,
            rgShippedMilestoneIDs: _,
          } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)("instructions"),
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)("title2"),
                    children: [
                      (0, _._)("#SeasonPass_Title"),
                      " ",
                      (0, _.jsx)("span", {
                        className: "small",
                        children: (0, _.jsx)("a", {
                          href: `${_._.PARTNER_BASE_URL}doc/store/seasonpass`,
                          target: "_blank",
                          children: (0, _._)("#AssetRequest_General_SeeDocs"),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)("br", {
                    style: {
                      clear: "left",
                    },
                  }),
                  (0, _.jsx)("div", {
                    className: "grayRule",
                    children: " ",
                  }),
                  (0, _.jsxs)("div", {
                    className: "instructions_table",
                    children: [
                      (0, _.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, _.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, _.jsx)("strong", {
                              children: (0, _._)(
                                "#Appmgmg_Generic_Title_Overview",
                              ),
                            }),
                          }),
                          (0, _.jsxs)("div", {
                            className: "instructions_table_cell",
                            children: [
                              (0, _.jsx)("p", {
                                children: (0, _._)("#SeasonPass_Desc"),
                              }),
                              (0, _.jsx)("p", {
                                children: (0, _._)("#SeasonPass_Desc2"),
                              }),
                              (0, _.jsx)("p", {
                                children: (0, _._)("#SeasonPass_Desc3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, _.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, _.jsx)("strong", {
                              children: (0, _._)(
                                "#Appmgmg_Generic_Title_Releasing",
                              ),
                            }),
                          }),
                          (0, _.jsx)("div", {
                            className: "instructions_table_cell",
                            children: (0, _.jsxs)("p", {
                              children: [
                                " ",
                                (0, _._)(
                                  "#SeasonPass_Desc_Releasing",
                                  (0, _.jsx)("a", {
                                    href: `${_._.PARTNER_BASE_URL}doc/store/seasonpass#release`,
                                    target: "_blank",
                                  }),
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().CreationButtonRow,
                children: [
                  (0, _.jsx)("span", {
                    className: _().LangBox,
                    children: (0, _.jsx)(_._, {}),
                  }),
                  (0, _.jsx)("div", {
                    className: _().MilestoneButton,
                    children: (0, _.jsx)(_, {
                      onSave: _,
                      milestoneID: _,
                      index: _,
                      bCreate: !0,
                      bAppHasSteamChinaToolsEnabled: _,
                      rgShippedMilestoneIDs: _,
                      seasonPassID: _,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { seasonPassData: _, rgShippedMilestoneIDs: _ } = _,
            _ = (0, _._)(),
            [_, _, _] = (0, _.useMemo)(() => {
              const _ =
                  _?.commitments?.filter(
                    (_) => !_.completed_time && !_.includes(_.milestone_id),
                  ) || [],
                _ = _.filter(
                  (_) =>
                    _.expected_delivery < _ + 10080 * 60 &&
                    !_.backfilled_release,
                ),
                _ = _.filter(
                  (_) => _.expected_delivery < _ && !_.backfilled_release,
                );
              return [_.length > 0, _.length > 0, _.length > 0];
            }, [_, _, _]);
          return _
            ? (0, _.jsx)(_.Fragment, {
                children:
                  _ &&
                  (0, _.jsx)("div", {
                    className: _().ErrorStylesWithIcon,
                    children: (0, _._)("#SeasonPass_PassDue"),
                  }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgSocialMedia: _ } = _,
            [_, _] = _.useState(_ ? [..._] : []),
            [_, _] = _.useState(_.length),
            _ = _.useCallback(
              (_) => {
                _.length > _ && _(_.length), _(_);
              },
              [_],
            );
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_, {
                ..._,
                rgSocialMediaItems: _,
                fnSetItems: _,
              }),
              (0, _.jsx)(_, {
                items: _,
                maxSeen: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
              rgSocialMediaItems: _,
              fnSetItems: _,
              rgSupportedSocialMediaTypes: _,
              rgValidationData: _,
            } = _,
            _ = _.useMemo(
              () =>
                _.filter(
                  (_) =>
                    _.findIndex((_) => _.type === _.type) === -1 ||
                    _.type === "qq" ||
                    _.type === "qqlink",
                )
                  .map((_) => ({
                    label: (0, _._)(`#StoreAdmin_SocialMedia_Type_${_.type}`),
                    data: _.type,
                  }))
                  .sort((_, _) => (_.label < _.label ? -1 : 1)),
              [_, _],
            ),
            _ = (_) => {
              let _ = _.slice();
              _.splice(_, 1), _(_);
            },
            _ = (_, _) => {
              let _ = _.slice();
              (0, _._)(_, _, _), _(_);
            },
            _ = (_, _) => {
              const _ = _.map((_, _) =>
                _ === _
                  ? {
                      ..._,
                      link: _,
                    }
                  : _,
              );
              _(_);
            },
            _ = (_) => {
              let _ = _.slice();
              _.push({
                type: _,
                link: "",
              }),
                _(_);
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                options: _,
                onAddLink: _,
              }),
              (0, _.jsx)(_._, {
                items: _,
                onDelete: _,
                onMove: _,
                render: (_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      item: _,
                      onUpdateLink: (_) => _(_, _),
                      validationData: _[_.type],
                    },
                    _.type,
                  ),
              }),
            ],
          });
        }
        function _(_) {
          const { options: _, onAddLink: _ } = _,
            _ = (_) => {
              const _ = _.data;
              _ && _(_);
            };
          return (0, _.jsx)("div", {
            className: _.AddLinkDropDown,
            children: (0, _.jsx)(_._, {
              strDefaultLabel: (0, _._)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: _,
              onChange: _,
              selectedOption: null,
            }),
          });
        }
        function _(_, _) {
          let _ = !0,
            _ = "";
          return (
            _.prefix
              ? (_.type === "mastodon"
                  ? (_ = (0, _._)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      _.prefix.join(", "),
                    ))
                  : (_ = (0, _._)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      _.prefix.join(", "),
                    )),
                _.link &&
                  ((_ = !1),
                  _.prefix.forEach((_) => {
                    _.link.startsWith(_) && (_ = !0);
                  })))
              : _.number
                ? ((_ = (0, _._)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  _.link && (_ = /^\d+$/.test(_.link)))
                : _.text
                  ? (_ = (0, _._)("#StoreAdmin_SocialMedia_ValidationText"))
                  : _.regex &&
                    _.type === "tumblr" &&
                    (_ = (0, _._)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            {
              bValid: _,
              strTooltip: _,
            }
          );
        }
        function _(_) {
          const { item: _, onUpdateLink: _, validationData: _ } = _;
          let _;
          _.number
            ? (_ = (0, _._)("#StoreAdmin_SocialMedia_EnterNumber"))
            : _.text
              ? (_ = (0, _._)("#StoreAdmin_SocialMedia_EnterName"))
              : (_ = (0, _._)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: _, strTooltip: _ } = _(_, _);
          return (0, _.jsxs)("div", {
            className: _.SocialMediaRow,
            children: [
              (0, _.jsx)("div", {
                className: _.SocialMediaType,
                children: (0, _._)(`#StoreAdmin_SocialMedia_Type_${_.type}`),
              }),
              (0, _.jsx)(_._, {
                className: _.SocialMediaLink,
                type: "text",
                value: _.link,
                placeholder: _,
                onChange: (_) => _(_.target.value),
              }),
              _ &&
                (0, _.jsx)(_._, {
                  className: _.SocialMediaTooltip,
                  toolTipContent: _,
                  children: "(?)",
                }),
              !_ &&
                (0, _.jsx)("div", {
                  className: _.ValidationError,
                  children: _,
                }),
            ],
          });
        }
        function _(_, _) {
          let _ = Array(),
            _ = 0;
          for (
            _.forEach((_) => {
              _.link &&
                (_.push(
                  _.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${_}][type]`,
                    value: _.type,
                  }),
                ),
                _.push(
                  _.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${_}][link]`,
                    value: _.link,
                  }),
                ),
                _++);
            });
            _ < _;
          )
            _.push(
              _.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${_}]`,
                value: "",
              }),
            ),
              _++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((_) => {
              _.push(
                _.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${_}]`,
                  value: "",
                }),
              );
            }),
            _
          );
        }
        function _(_) {
          const { items: _, maxSeen: _ } = _,
            _ = _.useMemo(() => _(_, _), [_, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [..._],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              rgAntiCheatData: _,
              rgSupportedAntiCheatOptions: _,
              rgLanguages: _,
              rgSupportedAntiCheatBootProtections: _,
            } = _,
            _ = _.useMemo(() => new Map(_), [_]),
            _ = (0, _.useMemo)(
              () =>
                Object.entries(_).map(([_, _]) => ({
                  label: (0, _._)(`#StoreAdmin_AntiCheat_Type_${_}`),
                  data: _,
                })),
              [_],
            ),
            _ = (_) => {
              _.data &&
                (_(_.data),
                _.data !== "none" &&
                  _.data !== "unspecified" &&
                  _.data !== "other" &&
                  _(_[_.data].kernel));
            },
            [_, _] = (0, _.useState)(_.type),
            [_, _] = (0, _.useState)(_.kernel),
            [_, _] = (0, _.useState)(_.uninstall),
            [_, _] = (0, _.useState)(_.bootprotect),
            _ = _ !== "none" && _ !== "unspecified";
          return (0, _.jsxs)("div", {
            className: "section",
            _: "anti_cheat",
            children: [
              (0, _.jsx)("h2", {
                children: (0, _._)("#StoreAdmin_AntiCheat_Header"),
              }),
              (0, _.jsx)("div", {
                className: "grayRule",
              }),
              (0, _.jsx)("p", {
                children: (0, _._)("#StoreAdmin_AntiCheat_Description"),
              }),
              (0, _.jsx)("p", {
                children: (0, _._)("#StoreAdmin_AntiCheat_Description2"),
              }),
              (0, _.jsx)(_, {
                label: (0, _._)("#StoreAdmin_AntiCheat_ServiceLabel"),
                children: (0, _.jsx)(_, {
                  options: _,
                  selectedOption: _,
                  onSelectionChanged: _,
                }),
              }),
              _ === "other" &&
                (0, _.jsx)(_, {
                  values: _.otherNameLoc,
                  mapLanguages: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  checked: _,
                  onChange: _,
                }),
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  checked: _,
                  onChange: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  supported: _,
                  currentValue: _,
                  onChange: _,
                }),
              (0, _.jsx)(_, {
                selectedOption: _ !== "unspecified" ? _ : "",
                kernelMode: _ ? _ : !1,
                uninstallsCompletely: _ && _ ? _ : !1,
                bootProtection: _ != "none" ? _ : "",
              }),
            ],
          });
        }
        function _(_) {
          const { label: _, children: _ } = _;
          return (0, _.jsxs)("div", {
            className: "formrow flexRow",
            children: [
              _
                ? (0, _.jsx)("div", {
                    className: "formlabel",
                    children: _,
                  })
                : (0, _.jsx)("div", {
                    className: "formlabel",
                    children: "\xA0",
                  }),
              (0, _.jsx)("div", {
                className: "formdata settingsBlock",
                children: (0, _.jsx)("div", {
                  className: "left",
                  children: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)("div", {
            className: _.FormRowIndent,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)("div", {
            className: _.FormRowHeader,
            children: _,
          });
        }
        function _(_) {
          const { options: _, selectedOption: _, onSelectionChanged: _ } = _;
          return (0, _.jsx)("div", {
            className: _.AntiCheatDropDown,
            children: (0, _.jsx)(_._, {
              controlled: !0,
              rgOptions: _,
              onChange: _,
              selectedOption: _,
            }),
          });
        }
        function _(_) {
          const { values: _, mapLanguages: _ } = _,
            {
              strActiveLanguage: _,
              mapValues: _,
              rctLanguageSelect: _,
              rctHiddenInputs: _,
            } = (0, _._)(_, _, "app", ["game", "3panticheat", "othernameloc"]),
            _ = _.get(_),
            _ = (0, _._)(_);
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)("div", {
                className: _.LanguageSelector,
                children: _,
              }),
              (0, _.jsx)(_._, {
                className: _.OtherSerivceName,
                type: "text",
                value: _,
                placeholder: "Enter the service name",
                onChange: (_) => _.Set(_.target.value),
                maxLength: 256,
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { checked: _, onChange: _ } = _;
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_._, {
                className: (0, _._)(_.KernelMode, _.CheckboxLabel),
                label: (0, _._)("#StoreAdmin_AntiCheat_KernelModeLabel"),
                checked: _,
                onChange: _,
              }),
              (0, _.jsx)("div", {
                className: _.CheckboxDescription,
                children: (0, _._)(
                  "#StoreAdmin_AntiCheat_KernelModelDescription_Other",
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { checked: _, onChange: _ } = _;
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_._, {
                className: _.CheckboxLabel,
                label: (0, _._)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyLabel",
                ),
                checked: _,
                onChange: _,
              }),
              (0, _.jsx)("div", {
                className: _.CheckboxDescription,
                children: (0, _._)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyDescription",
                ),
              }),
            ],
          });
        }
        function _(_) {
          return _ == "none"
            ? (0, _._)("#StoreAdmin_AntiCheat_BootProtection_None")
            : _ == "secureboot_tpm2"
              ? (0, _._)("#StoreAdmin_AntiCheat_BootProtection_SecureBootTPM2")
              : _;
        }
        function _(_) {
          const { supported: _, currentValue: _, onChange: _ } = _;
          if (_.length == 0) return null;
          let _ = _.map((_) => ({
              label: _(_),
              data: _,
            })),
            _ = _.find((_) => _ == _) ? _ : _[0];
          const _ = (_) => {
            _.data && _(_.data);
          };
          return (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsxs)(_, {
                  children: [
                    (0, _._)("#StoreAdmin_AntiCheat_BootProtectionLabel"),
                    " ",
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _.FormRowDescription,
                  children: (0, _._)(
                    "#StoreAdmin_AntiCheat_BootProtectionDescription",
                  ),
                }),
                (0, _.jsx)("div", {
                  className: _.AntiCheatDropDown,
                  children: (0, _.jsx)(_._, {
                    controlled: !0,
                    rgOptions: _,
                    onChange: _,
                    selectedOption: _,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_, _, _, _) {
          let _ = Array();
          return (
            _.push(
              _.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][type]",
                value: _,
              }),
            ),
            _.push(
              _.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][kernel]",
                value: _ ? "1" : "",
              }),
            ),
            _.push(
              _.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][uninst]",
                value: _ ? "1" : "",
              }),
            ),
            _.push(
              _.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][othername]",
                value: "",
              }),
            ),
            _.push(
              _.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][bootprotect]",
                value: _,
              }),
            ),
            _
          );
        }
        function _(_) {
          const {
              selectedOption: _,
              kernelMode: _,
              uninstallsCompletely: _,
              bootProtection: _,
            } = _,
            _ = _.useMemo(() => _(_, _, _, _), [_, _, _, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [..._],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = _.useState(_),
            _ = (_, _) => {
              let _ = [..._];
              (_[_] = _), _(_);
            },
            _ = (_) => {
              let _ = [..._];
              _.splice(_, 1), _(_);
            };
          return {
            items: _,
            setItem: _,
            deleteItem: _,
            appendItem: (_) => {
              _(_.concat([_]));
            },
            moveItem: (_, _) => {
              let _ = [..._],
                _ = _[_];
              _ < _
                ? (_.splice(_ + 1, 0, _), _.splice(_, 1))
                : (_.splice(_, 1), _.splice(_, 0, _)),
                _(_);
            },
            getState: (_) => ({
              item: _[_],
              setItem: (_) => _(_, _),
              deleteItem: () => _(_),
            }),
          };
        }
        function _(_) {
          const [_, _] = _.useState(!1);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                active: _,
                onDismiss: () => _(!1),
                children: (0, _.jsx)(_, {
                  originalItems: _.rgItems,
                  onDismiss: () => _(!1),
                  packageid: _.packageid,
                }),
              }),
              (0, _.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      className: "tr heading",
                      children: [
                        (0, _.jsx)("th", {
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_TableHeader_Name",
                          ),
                        }),
                        (0, _.jsx)("th", {
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_TableHeader_Visible",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsxs)("tbody", {
                    children: [
                      _.rgItems.length === 0 &&
                        (0, _.jsx)("tr", {
                          children: (0, _.jsx)("td", {
                            colSpan: 2,
                            children: (0, _._)(
                              "#StoreAdmin_NonAppContent_NoNonAppItems",
                            ),
                          }),
                        }),
                      _.rgItems.length > 0 &&
                        _.rgItems.map((_, _) =>
                          (0, _.jsx)(
                            _,
                            {
                              item: _,
                              language: _.language,
                            },
                            _,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                children: (0, _.jsx)("button", {
                  className: (0, _._)("btnv6_blue_hoverfade btn_small"),
                  onClick: () => _(!0),
                  children: (0, _.jsx)("span", {
                    children: (0, _._)("#StoreAdmin_NonAppContent_Edit"),
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { item: _, language: _ } = _;
          let _ = (0, _._)("#StoreAdmin_NonAppContent_MissingLanguage");
          _.localized_title &&
            (_ =
              _.localized_title[_] ??
              _.localized_title.english ??
              (0, _._)("#StoreAdmin_NonAppContent_MissingLanguage"));
          let _ = (0, _._)("#StoreAdmin_NonAppContent_MissingLanguage");
          return (
            _.localized_description &&
              (_ =
                _.localized_description[_] ??
                _.localized_description.english ??
                (0, _._)("#StoreAdmin_NonAppContent_MissingLanguage")),
            (0, _.jsxs)("tr", {
              className: "tr highlightHover",
              children: [
                (0, _.jsx)("td", {
                  className: "td",
                  children: _,
                }),
                (0, _.jsx)("td", {
                  className: "td",
                  children: (0, _._)(
                    _.visible === "1"
                      ? "#StoreAdmin_NonAppContent_Editor_Yes"
                      : "#StoreAdmin_NonAppContent_Editor_No",
                  ),
                }),
              ],
            })
          );
        }
        function _(_) {
          const { originalItems: _, packageid: _, onDismiss: _ } = _,
            _ = [];
          for (const _ of _)
            _.push({
              localized_title: _.localized_title ?? {},
              localized_description: _.localized_description ?? {},
              visible: _.visible,
            });
          const _ = _(_),
            [_, _] = _.useState("editor"),
            [_, _] = _.useState(null),
            _ = () => {
              _.appendItem({
                localized_title: {},
                localized_description: {},
                visible: "0",
              });
            },
            _ = _(_),
            _ = async () => {
              _("throbber"),
                await _.mutateAsync(_.items)
                  .then((_) => {
                    _.success !== 1
                      ? _(_.errors[0] || "Unknown error")
                      : _(null);
                  })
                  .catch((_) => {
                    throw (_(_.message), _);
                  })
                  .finally(() => {
                    _("message");
                  });
            },
            _ = () => {
              _("editor"), _();
            },
            _ = () => {
              window.location.reload();
            };
          return _ === "editor"
            ? (0, _.jsxs)("div", {
                className: _.NonAppContentsEditor,
                children: [
                  (0, _.jsx)("h1", {
                    children: (0, _._)(
                      "#StoreAdmin_NonAppContent_Editor_Header",
                    ),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.NonAppContentsEditorScrollArea,
                    children: [
                      _.items.length > 0 &&
                        (0, _.jsx)(_._, {
                          onMove: _.moveItem,
                          rowClassName: _.ItemEditorRow,
                          items: _.items,
                          render: (_, _) =>
                            (0, _.jsx)(_, {
                              state: _.getState(_),
                            }),
                          onDelete: _.deleteItem,
                        }),
                      _.items.length === 0 &&
                        (0, _.jsx)("div", {
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_Editor_NoNonAppItems",
                            (0, _._)(
                              "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                            ),
                          ),
                        }),
                      (0, _.jsx)("button", {
                        className: (0, _._)(
                          "btn_green_white_innerfade",
                          _.AddItemButton,
                        ),
                        onClick: _,
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                        ),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.EditorButtons,
                    children: [
                      (0, _.jsx)("button", {
                        className: "btn_green_white_innerfade",
                        onClick: _,
                        children: (0, _._)("#StoreAdmin_NonAppContent_Save"),
                      }),
                      (0, _.jsx)("button", {
                        onClick: _,
                        children: (0, _._)("#StoreAdmin_NonAppContent_Cancel"),
                      }),
                    ],
                  }),
                ],
              })
            : _ === "throbber"
              ? (0, _.jsx)(_._, {
                  size: "large",
                })
              : _ === null
                ? (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("h1", {
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Header",
                        ),
                      }),
                      (0, _.jsx)("p", {
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                        ),
                      }),
                      (0, _.jsx)("button", {
                        onClick: _,
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  })
                : (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("h1", {
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Header",
                        ),
                      }),
                      (0, _.jsx)("p", {
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Description",
                        ),
                      }),
                      (0, _.jsx)("p", {
                        children: _,
                      }),
                      (0, _.jsx)("button", {
                        onClick: _,
                        children: (0, _._)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  });
        }
        function _(_) {
          const { state: _ } = _,
            { item: _, setItem: _, deleteItem: _ } = _,
            [_, _] = _.useState("english"),
            _ = (0, _._)(!1),
            _ = (_) => {
              _(_.target.value);
            },
            _ = (_) => {
              (_.localized_title[_] = _.target.value), _(_);
            },
            _ = (_) => {
              (_.localized_description[_] = _.target.value), _(_);
            },
            _ = (_) => {
              (_.visible = _ ? "1" : "0"), _(_);
            };
          let _ = "";
          _.localized_title &&
            _.localized_title[_] &&
            (_ = _.localized_title[_]);
          let _ = "";
          return (
            _.localized_description &&
              _.localized_description[_] &&
              (_ = _.localized_description[_]),
            (0, _.jsxs)("div", {
              className: _.ItemEditorRowContents,
              children: [
                (0, _.jsxs)("div", {
                  className: _.ItemEditorRowNameAndLanguageEditor,
                  children: [
                    (0, _.jsx)("input", {
                      className: _.InputTitle,
                      type: "text",
                      placeholder: (0, _._)(
                        "#StoreAdmin_NonAppContent_Editor_TitlePlaceholder",
                      ),
                      value: _,
                      onChange: _,
                      maxLength: 120,
                    }),
                    (0, _.jsx)("select", {
                      onChange: _,
                      children: (0, _._)(_, (_, _) =>
                        (0, _.jsx)(
                          "option",
                          {
                            value: _,
                            children: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.ItemEditorRowVisibleToggle,
                  children: [
                    (0, _.jsx)(_._, {
                      value: _.visible === "1",
                      onChange: _,
                    }),
                    " ",
                    (0, _.jsx)("span", {
                      children: (0, _._)(
                        "#StoreAdmin_NonAppContent_Editor_Visible",
                      ),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.ItemEditorRowDescriptionEditor,
                  children: [
                    (0, _.jsx)("p", {
                      children: (0, _._)(
                        "#StoreAdmin_NonAppContent_Editor_Description",
                      ),
                    }),
                    (0, _.jsx)("textarea", {
                      placeholder: (0, _._)(
                        "#StoreAdmin_NonAppContent_Editor_DescriptionPlaceholder",
                      ),
                      maxLength: 300,
                      rows: 5,
                      onChange: _,
                      value: _,
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          return (0, _._)({
            mutationKey: ["save_nonapp_contents", _],
            mutationFn: async (_) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)());
              const _ = "nonapp_contents";
              for (let _ = 0; _ < _.length; _++) {
                const _ = _[_];
                for (const _ of Object.keys(_.localized_title ?? []))
                  _.append(
                    `${_}[${_}][localized_title][${_}]`,
                    _.localized_title[_],
                  );
                for (const _ of Object.keys(_.localized_description ?? []))
                  _.append(
                    `${_}[${_}][localized_description][${_}]`,
                    _.localized_description[_],
                  );
                _.append(`${_}[${_}][visible]`, _.visible);
              }
              _.length === 0 && _.append(_, "");
              const _ = `${_._.PARTNER_BASE_URL}store/ajaxpackagesave/${_}`,
                _ = await _().post(_, _);
              if (_.status !== 200) return _.data;
              if (_.data.success != 1) throw _.data;
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("changenotes", "Change non-app items in package");
              const _ = `${_._.PARTNER_BASE_URL}admin/store/packagepublish/${_}`,
                _ = await _().post(_, _);
              if (_.status !== 200) return _.data;
              if (_.data.success != 1) throw _.data;
              return {
                success: 1,
                errors: [],
              };
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { packageid: _ } = _,
            [_, _] = _.useState(_.bShowCapsuleArt),
            [_, _] = _.useState(_.bHideItemPrefixes),
            [_, _] = _.useState(null),
            _ = _(_),
            [_, _] = _.useState(null),
            _ = (_) => {
              _("edit");
            },
            _ = (_) => {
              _(_.target.checked);
            },
            _ = (_) => {
              _(_.target.checked);
            },
            _ = () => {
              _(_.bShowCapsuleArt), _(null);
            },
            _ = async () => {
              _("working"),
                await _.mutateAsync({
                  bShowCapsuleArt: _,
                  bHideItemPrefix: _,
                })
                  .then((_) => {
                    _.success !== 1
                      ? _(_.errors[0] || "Unknown error")
                      : _(null);
                  })
                  .catch((_) => {
                    throw (_(_.message), _);
                  })
                  .finally(() => {
                    _("message");
                  });
            },
            _ = () => {
              window.location.reload();
            };
          return (0, _.jsxs)("div", {
            className: _().PackagePurchaseDisplayContainer,
            children: [
              (0, _.jsxs)(_._, {
                active: _ !== null,
                onDismiss: _,
                children: [
                  _ === "edit" &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("h1", {
                          children: (0, _._)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        !_.bHideShowCapsuleCheckbox &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("p", {
                                children: (0, _._)(
                                  "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                                ),
                              }),
                              (0, _.jsxs)("label", {
                                children: [
                                  (0, _.jsx)("input", {
                                    type: "checkbox",
                                    checked: _,
                                    onChange: _,
                                  }),
                                  (0, _.jsx)("span", {
                                    className: _().checkbox_label,
                                    children: (0, _._)(
                                      "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, _.jsx)("p", {
                          children: (0, _._)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                          ),
                        }),
                        (0, _.jsxs)("label", {
                          children: [
                            (0, _.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: _,
                            }),
                            (0, _.jsx)("span", {
                              className: _().checkbox_label,
                              children: (0, _._)(
                                "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                              ),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _().PackagePurchaseDisplayButtonBar,
                          children: [
                            (0, _.jsx)("button", {
                              className: "btn_green_white_innerfade btn_medium",
                              onClick: _,
                              disabled:
                                _ === _.bShowCapsuleArt &&
                                _ === _.bHideItemPrefixes,
                              children: (0, _._)(
                                "#StoreAdmin_ShowCapsuleArt_SaveAndPublish",
                              ),
                            }),
                            (0, _.jsx)("button", {
                              className: "btnv6_blue_hoverfade btn_medium",
                              onClick: _,
                              children: (0, _._)(
                                "#StoreAdmin_ShowCapsuleArt_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  _ === "working" &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("h1", {
                          children: (0, _._)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, _.jsx)(_._, {
                          size: "large",
                        }),
                      ],
                    }),
                  _ === "message" &&
                    _ === null &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("h1", {
                          children: (0, _._)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, _.jsx)("p", {
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                          ),
                        }),
                        (0, _.jsx)("button", {
                          onClick: _,
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                  _ === "message" &&
                    _ !== null &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("h1", {
                          children: (0, _._)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, _.jsx)("p", {
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_Editor_Error_Description",
                          ),
                        }),
                        (0, _.jsx)("p", {
                          children: _,
                        }),
                        (0, _.jsx)("button", {
                          onClick: _,
                          children: (0, _._)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              !_.bHideShowCapsuleCheckbox &&
                (0, _.jsxs)("div", {
                  className: _().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, _.jsx)("input", {
                      type: "checkbox",
                      className: _().PackagePurchaseDisplayCheckbox,
                      checked: _,
                      onChange: _,
                    }),
                    (0, _.jsx)(_._, {
                      toolTipContent: (0, _._)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, _.jsxs)("div", {
                        className: _().PackagePurchaseDisplayLabel,
                        children: [
                          (0, _.jsx)("span", {
                            children: (0, _._)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                        ],
                      }),
                    }),
                  ],
                }),
              _.bHideShowCapsuleCheckbox &&
                (0, _.jsxs)("div", {
                  className: _().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, _.jsx)("input", {
                      type: "checkbox",
                      className: _().PackagePurchaseDisplayCheckbox,
                      checked: _,
                      disabled: !0,
                    }),
                    (0, _.jsx)(_._, {
                      toolTipContent: (0, _._)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, _.jsxs)("div", {
                        className: _().PackagePurchaseDisplayLabel,
                        children: [
                          (0, _.jsx)("span", {
                            children: (0, _._)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                          (0, _.jsx)("br", {}),
                          (0, _.jsx)("span", {
                            children: (0, _._)(
                              "#StoreAdmin_EditPackageDisplay_UseEditStorePackage",
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              (0, _.jsxs)("div", {
                className: _().PackagePurchaseDisplayCheckOption,
                children: [
                  (0, _.jsx)("input", {
                    type: "checkbox",
                    className: _().PackagePurchaseDisplayCheckbox,
                    checked: _,
                    onChange: _,
                  }),
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)(
                      "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                    ),
                    children: (0, _.jsxs)("div", {
                      className: _().PackagePurchaseDisplayLabel,
                      children: [
                        (0, _.jsx)("span", {
                          children: (0, _._)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                          ),
                        }),
                        " (?)",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _._)({
            mutationKey: ["save_show_capsule_art_toggle", _],
            mutationFn: async (_) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append(
                  "show_capsule_art_in_purchase_option",
                  _.bShowCapsuleArt ? "1" : "0",
                ),
                _.append(
                  "hide_shared_prefix_on_items",
                  _.bHideItemPrefix ? "1" : "0",
                );
              const _ = `${_._.PARTNER_BASE_URL}store/ajaxpackagesave/${_}`,
                _ = await _().post(_, _);
              if (_.status !== 200) return _.data;
              if (_.data.success != 1) throw _.data;
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append(
                  "changenotes",
                  "Configure package purchase display options.",
                ),
                _.append("packages[0]", "" + _);
              const _ = `${_._.PARTNER_BASE_URL}store/ajaxpublishpackages`,
                _ = await _().post(_, _);
              if (_.status !== 200) return _.data;
              if (_.data.success != 1) throw _.data;
              return {
                success: 1,
                errors: [],
              };
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)([]),
            [_, _] = (0, _.useState)(!1),
            { itemid: _, apptype: _, altasset: _, altpostfix: _ } = _;
          (0, _.useEffect)(
            () => (
              (window.ShowImageConfirmationDialog = (_) => {
                _(_), _(!0);
              }),
              () => {
                delete window.ShowImageConfirmationDialog;
              }
            ),
            [],
          );
          const _ = () => {
              _(!1);
            },
            _ = _.useCallback(() => {
              window.SubmitImageUpload(_, _, _, _, !0), _();
            }, [_, _, _, _]);
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsx)(_, {
                rgImages: _,
                fnOnSuccess: _,
                fnCloseDialog: _,
              }),
            }),
          });
        }
        function _(_) {
          let _ = [];
          switch (_) {
            case "Small Capsule":
              _ = ["LegibleLogo", "NoAdditionalText"];
              break;
            case "Main Capsule":
              _ = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Package Header":
            case "Header Capsule":
              _ = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Capsule":
            case "Vertical Capsule":
            case "Library Header":
              _ = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Hero":
              _ = ["NoLogo"];
              break;
            case "Library Logo":
              _ = ["TransparentBG", "NoAdditionalText"];
              break;
            default:
              (0, _._)(!1, `Unknown uploaded image provided: ${_}`);
          }
          return _;
        }
        function _(_) {
          const { rgImages: _, fnOnSuccess: _, fnCloseDialog: _ } = _,
            [_, _] = (0, _.useState)({}),
            _ = (0, _.useCallback)(
              (_, _, _) =>
                _({
                  ..._,
                  [_]: {
                    ..._[_],
                    [_]: _,
                  },
                }),
              [_],
            );
          let _ = !0;
          _.forEach((_) => {
            _(_.image_def.name).forEach((_) => {
              if (!_[_.image_def.name] || !_[_.image_def.name][_]) {
                _ = !1;
                return;
              }
            });
          });
          const _ = _.map((_) =>
            (0, _.jsx)(
              _,
              {
                image: _,
                onCheckboxChange: _,
              },
              _.image_def.name,
            ),
          );
          return (0, _.jsxs)(_._, {
            className: _.ImageConfirmationDialog,
            strTitle: (0, _._)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_Title",
            ),
            bOKDisabled: !_,
            closeModal: _,
            strOKButtonText: (0, _._)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_ConfirmBtn",
            ),
            onOK: _,
            bDestructiveWarning: !_,
            bDisableBackgroundDismiss: !0,
            children: [
              (0, _.jsx)("div", {
                className: _.ConfirmationDescription,
                children: (0, _._)(
                  "#StoreAdmin_GraphicalAssets_ConfirmDialog_Desc",
                  (0, _.jsx)(_._, {
                    href: `${_._.PARTNER_BASE_URL}doc/store/assets/rules`,
                  }),
                ),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { image: _, onCheckboxChange: _ } = _,
            _ = _(_.image_def.name);
          let _ = [];
          for (const _ of _)
            _.push(
              (0, _.jsx)(
                _._,
                {
                  onChange: (_) => _(_.image_def.name, _, _),
                  label: (0, _._)(
                    `#StoreAdmin_GraphicalAssets_ConfirmDialog_${_}`,
                  ),
                },
                `${_.image_def.name}_Checkbox_${_}`,
              ),
            );
          return (0, _.jsxs)("div", {
            className: _.ImageTypeConfirmationCtn,
            children: [
              (0, _.jsx)("div", {
                className: _.ImageTitle,
                children: _.image_def.name,
              }),
              (0, _.jsx)("div", {
                className: _.ImageCtn,
                children: (0, _.jsx)("img", {
                  className: _.ImageSrc,
                  src: _.image_src,
                }),
              }),
              (0, _.jsx)("div", {
                className: _.ImageCheckboxes,
                children: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "usePartnerActiveCreatorClans";
        function _(_, _) {
          return (0, _._)({
            queryKey: [_, _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_partnerid(_);
              let _;
              try {
                _ = await _._.GetDevPagesForPartner(_, _);
              } catch (_) {
                throw (
                  (console.error(
                    `usePartnerActiveCreatorClans on PartnerID ${_} request failed`,
                    _,
                  ),
                  _)
                );
              }
              if (_.GetEResult() == _._)
                return _.Body()
                  .results()
                  .map((_) => _.toObject());
              throw (
                (console.error(
                  `usePartnerActiveCreatorClans on PartnerID ${_} failed with EResult: ${_.GetEResult()}`,
                ),
                new Error(
                  `GetDevPagesForPartner answered EResult ${_.GetEResult()}`,
                ))
              );
            },
            enabled: _ > 0,
          });
        }
        function _(_) {
          const _ = usePromotionTransport(),
            _ = useQuery(_(_, _));
          return _.isLoading ? null : (_.data ?? []);
        }
        const _ = "useCreatorHomeClanLinksByApp";
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)({
              queryKey: [_, _],
              queryFn: async () => {
                const _ = _._.Init(_._);
                _.Body().set_appid(_);
                const _ = await _._.GetDevPageLinks(_, _);
                return _.GetEResult() == _._
                  ? _.Body()
                      .links()
                      .map((_) => _.toObject())
                  : (console.error(
                      `useCreatorHomeClanLinksByApp on AppID ${_} failed with ${_.GetEResult()}`,
                    ),
                    []);
              },
              enabled: _ > 0,
            });
          return _.isLoading ? null : _.data;
        }
        async function _(_) {
          const _ = `${_._.PARTNER_BASE_URL}apps/creatorhomelinkroles?clanids=${_.join(",")}`,
            _ = await fetch(_, {
              credentials: "include",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          const _ = await _.json();
          if (_.success != _._)
            throw new Error(_.msg || `EResult ${_.success}`);
          return _.verdicts ?? [];
        }
        const _ = "useCreatorHomeFranchiseVerdict";
        function _(_, _, _) {
          return (0, _._)({
            queryKey: [_, _],
            queryFn: async () =>
              (await _([_])).find((_) => _.clan_account_id === _) ?? null,
            initialData: _,
            enabled: _ && _ > 0,
            staleTime: 1 / 0,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = _();
          return (0, _._)({
            mutationFn: async ({ clanAccountID: _, bReuseExistingClan: _ }) => {
              const _ = _._.InitFromClanID(_),
                _ = {
                  appid: _,
                  remove: !1,
                  update_json_only: !1,
                  skip_clan_permissions: _,
                  partner_id: _,
                  link: {
                    appid: _,
                    clan_steamid: _.ConvertTo64BitString(),
                    relation: _._._,
                    linkname: _,
                    json: null,
                  },
                };
              return await _.mutateAsync(_);
            },
          });
        }
        function _(_, _, _) {
          const _ = _();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.InitFromClanID(_),
                _ = {
                  appid: _,
                  remove: !0,
                  update_json_only: !1,
                  link: {
                    appid: _,
                    clan_steamid: _.ConvertTo64BitString(),
                    relation: _._._,
                    linkname: _,
                    json: null,
                  },
                };
              return await _.mutateAsync(_);
            },
          });
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_appid(_.appid),
                _.Body().set_remove(_.remove),
                _.Body().set_update_json_only(_.update_json_only),
                _.Body().set_skip_clan_permissions(_.skip_clan_permissions),
                _.Body().set_partner_id(_.partner_id),
                _.Body().link().set_appid(_.link.appid),
                _.Body().link().set_clan_steamid(_.link.clan_steamid),
                _.Body().link().set_relation(_.link.relation),
                _.Body().link().set_linkname(_.link.linkname),
                _.Body().link().set_json(_.link.json);
              const _ = await _._.SetDevPageLink(_, _);
              return _.GetEResult() == _._
                ? (_._.invalidateQueries({
                    queryKey: [_, _.appid],
                  }),
                  !0)
                : (console.error(
                    `useSetDevPageLink on AppID ${_.appid} failed with ${_.GetEResult()}`,
                  ),
                  !1);
            },
          });
        }
        function _(_) {
          const [_, _, _] = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                onClick: _,
                children: (0, _._)("#Button_Unlink"),
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  ..._,
                  closeModal: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              pageLink: _,
              clanAccountID: _,
              clanName: _,
              closeModal: _,
            } = _,
            _ = _(_.appid, _, _.linkname),
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: (0, _._)("#Button_Unlink"),
                closeModal: _,
              })
            : (0, _.jsx)(_._, {
                onCancel: _,
                strTitle: (0, _._)("#Button_Unlink"),
                strDescription: (0, _._)(
                  "#AppLanding_Creator_UnlinkDesc",
                  _ || _,
                  _.linkname,
                ),
                onOK: () => {
                  _.fnSetLoading(!0),
                    _.mutateAsync()
                      .then((_) => {
                        _
                          ? (_.fnSetStrSuccess(
                              (0, _._)("#EventDisplay_Share_Success"),
                            ),
                            _.fnSetSuccess(!0))
                          : (_.fnSetStrError(
                              (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                            ),
                            _.fnSetError(!0));
                      })
                      .catch((_) => {
                        _.fnSetStrError(
                          (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                          _.fnSetError(!0),
                          console.error(
                            `unlinking failed appid ${_.appid} with error ${((0, _._))(_).strErrorMsg} `,
                          );
                      });
                },
                children: (0, _.jsx)(_._, {
                  _: "p",
                  size: "2",
                  children: (0, _._)("#Dialog_AreYouSure"),
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "useClanLinkableForMeViaCreatorHome";
        function _() {
          return (0, _._)({
            queryKey: [_, _._.accountid],
            queryFn: async () => {
              const _ = `${_._.PARTNER_BASE_URL}creatorhome/ajaxgetgroupsforuser`,
                _ = {
                  sessionid: (0, _._)(),
                };
              let _;
              try {
                _ = await _().get(_, {
                  params: _,
                });
              } catch (_) {
                const { strErrorMsg: _, errorCode: _ } = (0, _._)(_);
                throw (
                  (console.error(
                    `useClanLinkableForMeViaCreatorHome: request failed, EResult ${_}: ${_}`,
                    _,
                  ),
                  _)
                );
              }
              if (_?.status == 200 && _.data?.success == _._)
                return _.data.rgClanAccountIDs ?? [];
              throw (
                (console.error(
                  `useClanLinkableForMeViaCreatorHome: status ${_?.status}, EResult ${_?.data?.success}`,
                ),
                new Error(
                  `ajaxgetgroupsforuser answered EResult ${_?.data?.success}`,
                ))
              );
            },
            enabled: _._.logged_in,
          });
        }
        function _() {
          const _ = useQuery(_());
          return _.isLoading ? null : (_.data ?? []);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { nAppID: _, nPartnerID: _ } = _,
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                onClick: _,
                children: (0, _._)("#Button_Link"),
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  closeModal: _,
                  ..._,
                }),
              }),
            ],
          });
        }
        const _ = [],
          _ = [];
        function _(_) {
          const { nAppID: _, nPartnerID: _, linkname: _, closeModal: _ } = _,
            _ = _(_, _, _),
            [_, _] = (0, _.useState)(null),
            _ = (0, _._)(),
            _ = _ > 0,
            _ = (0, _._)(_(_, _)),
            _ = _.data ?? _,
            _ = (0, _._)(_()),
            _ = _.data ?? _;
          (0, _.useEffect)(() => {
            _ ||
              console.warn(
                `LinkDialog: no partner for app ${_} (got ${_}), offering only the groups the user owns or officers`,
              ),
              _._.logged_in ||
                console.warn(
                  "LinkDialog: UserConfig says signed out, so the groups the user owns or officers were not requested",
                );
          }, [_, _, _]);
          const { rgClanChoices: _, setExistingLinks: _ } = (0,
            _.useMemo)(() => {
              const _ = new Set(_.map((_) => _.clan_accountid)),
                _ = new Set([..._, ..._]);
              return {
                rgClanChoices: Array.from(_),
                setExistingLinks: _,
              };
            }, [_, _]),
            _ = (0, _._)({
              rgOptions: _,
              selectedValue: _,
              onSelectionChange: _,
            }),
            _ = (0, _._)();
          return _.isLoading || _.isLoading
            ? (0, _.jsx)(_._, {
                strTitle: (0, _._)("#Button_Link"),
                bAlertDialog: !0,
                closeModal: _,
                children: (0, _.jsxs)(_._, {
                  align: "center",
                  gap: "2",
                  children: [
                    (0, _.jsx)(_._, {
                      size: "1",
                    }),
                    (0, _.jsx)(_._, {
                      size: "2",
                      contrast: "description",
                      children: (0, _._)("#Loading"),
                    }),
                  ],
                }),
              })
            : _.isError || _.isError
              ? (0, _.jsx)(_._, {
                  strTitle: (0, _._)("#Button_Link"),
                  bAlertDialog: !0,
                  closeModal: _,
                  children: (0, _.jsx)(_._, {
                    _: "p",
                    size: "2",
                    color: "text-error",
                    children: (0, _._)("#AppLanding_Creator_Linking_Failed"),
                  }),
                })
              : _.bLoading
                ? (0, _.jsx)(_._, {
                    state: _,
                    strDialogTitle: (0, _._)("#Button_Link"),
                    closeModal: _,
                  })
                : (0, _.jsx)(_._, {
                    onCancel: _,
                    bAllowFullSize: !0,
                    strTitle: (0, _._)("#AppLAnding_Creator_LinkingTitle", _),
                    strDescription: (0, _._)(
                      "#AppLAnding_Creator_LinkingDesc",
                      _,
                    ),
                    bOKDisabled: !_,
                    onOK: async () => {
                      _.fnSetLoading(!0);
                      const _ = {
                        clanAccountID: _,
                        bReuseExistingClan: _.has(_),
                      };
                      await _.mutateAsync(_)
                        .then((_) => {
                          _
                            ? (_.fnSetStrSuccess(
                                (0, _._)("#EventDisplay_Share_Success"),
                              ),
                              _.fnSetSuccess(!0))
                            : (_.fnSetStrError(
                                (0, _._)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              ),
                              _.fnSetError(!0));
                        })
                        .catch((_) => {
                          _.fnSetStrError(
                            (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                          ),
                            _.fnSetError(!0),
                            console.error(
                              `linking failed appid ${_} with error ${((0, _._))(_).strErrorMsg} `,
                            );
                        });
                    },
                    children: (0, _.jsxs)(_._, {
                      direction: "column",
                      gap: "3",
                      children: [
                        (0, _.jsx)(_._, {
                          _: "p",
                          size: "2",
                          children: (0, _._)("#AppLanding_Creator_LinkingNote"),
                        }),
                        !_ &&
                          (0, _.jsx)(_._, {
                            _: "p",
                            size: "2",
                            contrast: "description",
                            children: (0, _._)(
                              "#AppLanding_Creator_Linking_NoPartner",
                            ),
                          }),
                        _.length == 0
                          ? (0, _.jsx)(_._, {
                              _: "p",
                              size: "2",
                              contrast: "description",
                              children: (0, _._)(
                                "#AppLanding_Creator_Linking_NoOptions",
                              ),
                            })
                          : (0, _.jsx)("div", {
                              className: _().DropDown,
                              children: (0, _.jsxs)(_._.Root, {
                                state: _,
                                size: "2",
                                popoverWidth: "target",
                                children: [
                                  (0, _.jsx)(_._.Trigger, {
                                    children: _
                                      ? (0, _.jsx)(_, {
                                          clanAccountID: _,
                                          bExistingLink: _.has(_),
                                        })
                                      : (0, _.jsx)(_._.Placeholder, {
                                          children: (0, _._)(
                                            "#AppLanding_Creator_Choice",
                                          ),
                                        }),
                                  }),
                                  (0, _.jsx)(_._.Options, {
                                    children: _.map((_) =>
                                      (0, _.jsx)(
                                        _._.Option,
                                        {
                                          value: _,
                                          children: (0, _.jsx)(_, {
                                            clanAccountID: _,
                                            bExistingLink: _.has(_),
                                          }),
                                        },
                                        _,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                      ],
                    }),
                  });
        }
        function _(_) {
          const { clanAccountID: _, bExistingLink: _ } = _,
            [_, _] = (0, _._)(_),
            _ = _ ? _.group_name + `(${_})` : "" + _;
          return (0, _.jsx)(_._, {
            toolTipContent: _
              ? (0, _._)("#AppLanding_Creator_Existing")
              : void 0,
            children: (0, _.jsxs)(_._, {
              align: "center",
              gap: "2",
              wrap: "nowrap",
              children: [
                (0, _.jsx)("img", {
                  className: _().Avatar,
                  src: _?.avatar_full_url,
                }),
                (0, _.jsxs)(_._, {
                  size: "2",
                  truncate: !0,
                  children: [_, " ", _ ? "*" : ""],
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              nAppID: _,
              nPrimaryPartnerID: _,
              strName: _,
              strKvTargetName: _,
              rgConflictClanAccountIDs: _,
              rgCatalogVerdicts: _,
              bCheckCatalogRoles: _,
              bCheckFranchiseMinGames: _,
              rgNameMustMatchLinks: _,
              strMatchKey: _,
            } = _,
            [_, _] = (0, _.useState)(() => _),
            _ = _(_, _),
            _ = _(_)?.find(
              (_) =>
                _.linkname.trim().toLocaleLowerCase() ==
                _.trim().toLocaleLowerCase(),
            ),
            _ = (0, _.useMemo)(
              () => (_ ? new _._(_.clan_steamid).GetAccountID() : 0),
              [_],
            ),
            { data: _ } = _(
              _,
              !!(_ || _),
              _?.find((_) => _.clan_account_id === _),
            ),
            _ = (0, _.useMemo)(() => {
              if (!_) return null;
              if (_?.includes(_))
                return {
                  strIssue: (0, _._)(
                    "#AppLanding_Creator_FranchiseSameAsDevPub",
                  ),
                };
              if (_ && _?.franchise_links_suppressed)
                return {
                  strIssue: (0, _._)(
                    "#AppLanding_Creator_FranchiseIsDevPubElsewhere",
                  ),
                  rgDevPubAppIDs: _.devpub_appids,
                  cDevPubApps: _.devpub_app_count,
                };
              if (_ && _?.franchise_too_few_games)
                return {
                  strIssue: (0, _._)(
                    "#AppLanding_Creator_FranchiseTooFewGames",
                  ),
                };
              const _ = _?.filter((_) => _.clanAccountID === _);
              return _?.length && !_.some((_) => _.strMatchKey === _)
                ? {
                    strIssue: (0, _._)(
                      "#AppLanding_Creator_DeveloperNameMismatch",
                    ),
                  }
                : null;
            }, [_, _, _, _, _, _, _, _]);
          return (0, _.jsxs)(_._, {
            align: "start",
            gap: "2",
            wrap: "nowrap",
            className: _().Ctn,
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _ && (0, _._)("#AppLanding_CreatorLocked"),
                children: (0, _.jsx)("input", {
                  type: "text",
                  size: 30,
                  value: _,
                  onChange: (_) => {
                    _ || _(_.currentTarget.value || "");
                  },
                }),
              }),
              (0, _.jsx)("input", {
                name: _,
                type: "hidden",
                value: _,
                onChange: () => {},
              }),
              !!(_ && _?.toLocaleLowerCase() === _?.toLocaleLowerCase()) &&
                (0, _.jsx)(_, {
                  pageLink: _,
                  strKvTargetName: _,
                  linkIssue: _,
                }),
              !_ &&
                _?.trim().length > 0 &&
                (0, _.jsx)(_, {
                  nPartnerID: _,
                  nAppID: _,
                  linkname: _.trim(),
                }),
              _?.toLocaleLowerCase() !== _?.toLocaleLowerCase() &&
                (0, _.jsx)(_._, {
                  size: "2",
                  contrast: "description",
                  marginTop: "2",
                  children: (0, _._)("#AppLanding_Creator_SaveRequires"),
                }),
            ],
          });
        }
        const _ = {
          direction: "right",
          style: {
            minWidth: "350px",
          },
        };
        function _(_, _) {
          const _ = (0, _.useMemo)(
              () => new _._(_.clan_steamid).GetAccountID(),
              [_],
            ),
            { creatorHome: _ } = (0, _._)(_),
            [_, _] = (0, _._)(_),
            _ = (0, _.useMemo)(() => {
              let _ = "developer";
              return (
                _.includes("[publisher")
                  ? (_ = "publisher")
                  : _.includes("[franchise") && (_ = "franchise"),
                {
                  clan_account_id: _,
                  name: _?.group_name,
                  type: _,
                }
              );
            }, [_, _, _]),
            _ = _?.GetCreatorHomeURL(_.type);
          return {
            clanAccountID: _,
            clanInfo: _,
            strURL: _,
          };
        }
        function _(_) {
          const { pageLink: _, strKvTargetName: _, linkIssue: _ } = _,
            _ = _?.strIssue,
            { clanAccountID: _, clanInfo: _, strURL: _ } = _(_, _);
          return (0, _.jsxs)(_._, {
            justify: "between",
            align: "start",
            gap: "2",
            wrap: "nowrap",
            flexGrow: "1",
            children: [
              (0, _.jsxs)(_._, {
                direction: "column",
                children: [
                  (0, _.jsxs)(_._, {
                    align: "center",
                    gap: "2",
                    wrap: "nowrap",
                    className: (0, _._)(
                      _().CreatorCtn,
                      _ && _().CreatorCtnError,
                    ),
                    children: [
                      !!_ &&
                        (0, _.jsx)(_._, {
                          color: "text-error",
                          weight: "heavy",
                          children: "\u2716",
                        }),
                      (0, _._)(
                        "#AppLanding_CreatorLinked",
                        (0, _.jsx)(_, {
                          clanAccountID: _,
                          strURL: _,
                          clanInfo: _,
                        }),
                      ),
                    ],
                  }),
                  !!_ &&
                    (0, _.jsx)(_._, {
                      toolTipContent:
                        _.rgDevPubAppIDs?.length > 0 &&
                        (0, _.jsx)(_, {
                          rgAppIDs: _.rgDevPubAppIDs,
                          cTotal: _.cDevPubApps ?? 0,
                        }),
                      children: (0, _.jsx)(_._, {
                        _: "p",
                        size: "2",
                        color: "text-error",
                        marginLeft: "3",
                        marginTop: "1",
                        children: _,
                      }),
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                pageLink: _,
                clanAccountID: _,
                clanName: _?.group_name || "" + _,
              }),
            ],
          });
        }
        function _(_) {
          const { rgAppIDs: _, cTotal: _ } = _;
          return (0, _.jsxs)(_._, {
            direction: "column",
            children: [
              (0, _.jsx)("div", {
                children: (0, _._)(
                  "#AppLanding_Creator_FranchiseIsDevPubElsewhere_Apps",
                ),
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                  },
                  _,
                ),
              ),
              _ > _.length &&
                (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#AppLanding_Creator_FranchiseIsDevPubElsewhere_More",
                    _ - _.length,
                  ),
                }),
            ],
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return (0, _.jsx)("div", {
            children: _?.visible && _.name ? `${_.name} (${_})` : _,
          });
        }
        function _(_) {
          const { clanAccountID: _, clanInfo: _, strURL: _ } = _,
            _ = _?.group_name || "" + _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                href: _,
                target: "_blank",
                children: _,
              }),
              (0, _.jsx)(_._, {
                className: _().HoverCtn,
                hoverProps: _,
                hoverContent: (0, _.jsx)(_._, {
                  clanInfo: _,
                }),
                children: (0, _.jsx)(_._, {
                  href: _,
                  target: "_blank",
                  children: (0, _.jsx)("img", {
                    className: _().Avatar,
                    src: _?.avatar_full_url,
                  }),
                }),
              }),
            ],
          });
        }
        function _(_, _) {
          const [_, _] = (0, _.useState)(() => (_ > 0 ? _ : null)),
            _ = (0, _._)(_ > 0 ? null : _);
          return (
            (0, _.useEffect)(() => {
              _ ||
                !_ ||
                (_.length > 0
                  ? _(_[0].partner_id)
                  : console.warn(
                      `Creator home linking: the page gave no primary partner (${_}) and nobody is paid for app ${_}, so creator homes linked on other games cannot be offered`,
                    ));
            }, [_, _, _, _]),
            _
          );
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _, _] = (0, _._)(),
            { rgScreenshots: _, refetch: _, isFetching: _ } = _(_),
            { mutateAsync: _, isPending: _ } = _(),
            _ = _.useMemo(
              () =>
                _?.map((_, _) => ({
                  key: _,
                  mapAltText: _.alt_text,
                })) ?? [],
              [_],
            ),
            _ = async (_, _) =>
              (await _({
                nIndex: _,
                mapAltText: _,
              })) !== !1,
            _ = (_, _) => {
              const _ = (0, _.LgB)(_),
                _ = (0, _.LgB)(_ == _.ZLm ? _.NFp : _.Bhc);
              return _ in _[_].urls
                ? _[_].urls[_]
                : _ in _[_].urls
                  ? _[_].urls[_]
                  : null;
            };
          return (0, _.jsxs)("div", {
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  entries: _,
                  isLoading: _ || _,
                  hideModal: _,
                  fnRefetch: _,
                  mutateAltTextAsync: _,
                  isMutatePending: _,
                  fnGetImage: (_, _) =>
                    (0, _.jsx)("img", {
                      src: _(_, _),
                    }),
                }),
              (0, _.jsx)(_._, {
                onClick: _,
                children: (0, _._)("#StoreAdmin_EditAltText_Button"),
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)("screenshots"),
            {
              data: _,
              refetch: _,
              isFetching: _,
            } = (0, _._)({
              queryKey: ["StoreAppScreenshots", _],
              queryFn: async () => {
                const _ = await fetch(_);
                try {
                  return await _.json();
                } catch {
                  return null;
                }
              },
              enabled: _,
              refetchOnMount: "always",
              staleTime: 0,
            });
          return {
            rgScreenshots: _,
            refetch: _,
            isFetching: _,
          };
        }
        function _() {
          const _ = (0, _._)("quickupdateajax");
          return (0, _._)({
            mutationFn: async ({ nIndex: _, mapAltText: _ }) => {
              if (_ == null || !_) return !1;
              const _ = new FormData();
              _.append("sessionid", (0, _._)());
              for (const [_, _] of Object.entries(_))
                _.append(`app[assets][screenshots][${_}][alt_text][${_}]`, _);
              const _ = await fetch(_, {
                  method: "post",
                  body: _,
                }),
                _ = await _.json();
              if (!_._) throw "Error modifying screenshot";
              return _;
            },
            onError: (_) => {
              console.error(
                (0, _._)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof _ == "string" ? _ : _.message,
                ),
              );
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              nAppID: _,
              rgAllCreatorHomeNames: _,
              nPrimaryPartnerID: _,
            } = _,
            _ = _(_),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? _.filter(
                      (_) =>
                        !_.some(
                          (_) =>
                            _.linkname.trim().toLocaleLowerCase() ==
                            _.trim().toLocaleLowerCase(),
                        ),
                    ).sort((_, _) =>
                      _.linkname.localeCompare(_.linkname, void 0, {
                        sensitivity: "base",
                      }),
                    )
                  : [],
              [_, _],
            );
          return _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("h3", {
                    children: (0, _._)("#AppLinding_Creator_Broken"),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#AppLinding_Creator_Broken_desc"),
                  }),
                  _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        pageLink: _,
                      },
                      "dp_" + _.linkname,
                    ),
                  ),
                ],
              });
        }
        function _(_) {
          const { pageLink: _ } = _,
            { clanAccountID: _, clanInfo: _, strURL: _ } = _(_, "developer");
          return (0, _.jsxs)("div", {
            className: _().CreatorNameCtn,
            children: [
              (0, _.jsx)(_, {
                pageLink: _,
                clanAccountID: _,
                clanName: _?.group_name || "" + _,
              }),
              (0, _.jsx)("div", {
                className: _().CreatorCtn,
                children: (0, _._)(
                  "#AppLanding_Creator_Broken_Link",
                  (0, _.jsx)(_.Fragment, {
                    children: _.linkname,
                  }),
                  (0, _.jsx)(_, {
                    clanAccountID: _,
                    strURL: _,
                    clanInfo: _,
                  }),
                ),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsxs)(_.Root, {
            ..._,
            children: [(0, _.jsx)(_.Track, {}), (0, _.jsx)(_.Handle, {})],
          });
        }
        function _(_) {
          const { value: _, onChange: _, size: _ = "2", color: _, ref: _ } = _,
            _ = (_) => {
              (_.key === " " || _.key === "Enter") &&
                (_(!_), _.preventDefault(), _.stopPropagation());
            };
          return (0, _.jsx)(_._, {
            ref: _,
            role: "switch",
            "aria-checked": !!_,
            onClick: () => _(!_),
            onKeyDown: _,
            tabIndex: 0,
            "data-accent-color": _,
            ...(0, _._)(
              {
                size: _,
                className: _.Root,
              },
              _,
            ),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Track,
            ..._,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Handle,
            ..._,
          });
        }
        const _ = Object.assign(_, {
            Root: _,
            Track: _,
            Handle: _,
          }),
          _ = [
            ..._._,
            {
              prop: "size",
              className: (_) => _[`Size-${_}`],
              responsive: !0,
            },
          ];
        class _ extends Error {
          eResult;
          constructor(_, _) {
            super(_), (this.eResult = _);
          }
        }
        async function _(_) {
          const _ = `${_._.PARTNER_BASE_URL}apps/creatorhomelinkhistory?appid=${_}`,
            _ = await fetch(_, {
              credentials: "include",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          const _ = await _.json();
          if (_.success != _._)
            throw new _(_.success, _.msg || `EResult ${_.success}`);
          return _.entries ?? [];
        }
        const _ = "useCreatorHomeLinkHistory";
        function _(_, _) {
          return (0, _._)({
            queryKey: [_, _],
            queryFn: () => _(_),
            enabled: _ && _ > 0,
            staleTime: 1 / 0,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { nAppID: _ } = _,
            [_, _] = (0, _.useState)(!1);
          return (0, _.jsxs)(_._, {
            marginTop: "5",
            children: [
              (0, _.jsxs)(_._, {
                align: "center",
                gap: "4",
                children: [
                  (0, _.jsx)(_._, {
                    level: "3",
                    children: (0, _._)("#AppLanding_Creator_History"),
                  }),
                  (0, _.jsx)(_._, {
                    size: "1",
                    variant: "outline",
                    onClick: () => _(!_),
                    children: (0, _._)(
                      _
                        ? "#AppLanding_Creator_History_Hide"
                        : "#AppLanding_Creator_History_Show",
                    ),
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  nAppID: _,
                }),
            ],
          });
        }
        function _(_) {
          const { nAppID: _ } = _,
            _ = _(_, !0),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useMemo)(() => [...(_.data ?? [])].reverse(), [_.data]),
            _ = (0, _.useMemo)(
              () => (_ ? _.filter((_) => !!_.is_active) : _),
              [_, _],
            );
          if (_.isLoading)
            return (0, _.jsxs)(_._, {
              align: "center",
              gap: "2",
              marginTop: "3",
              children: [
                (0, _.jsx)(_._, {
                  size: "1",
                }),
                (0, _.jsx)(_._, {
                  size: "2",
                  contrast: "description",
                  children: (0, _._)("#AppLanding_Creator_History_Loading"),
                }),
              ],
            });
          if (_.isError) {
            const _ = _.error instanceof _ && _.error.eResult == _._;
            return (0, _.jsx)(_._, {
              _: "p",
              size: "2",
              color: "text-error",
              marginTop: "3",
              children: (0, _._)(
                _
                  ? "#AppLanding_Creator_History_Denied"
                  : "#AppLanding_Creator_History_Failed",
              ),
            });
          }
          return _.length == 0
            ? (0, _.jsx)(_._, {
                _: "p",
                size: "2",
                contrast: "description",
                marginTop: "3",
                children: (0, _._)("#AppLanding_Creator_History_Empty"),
              })
            : (0, _.jsxs)(_._, {
                direction: "column",
                gap: "3",
                marginTop: "3",
                children: [
                  (0, _.jsxs)(_._, {
                    align: "center",
                    gap: "2",
                    children: [
                      (0, _.jsx)(_, {
                        size: "1",
                        value: _,
                        onChange: _,
                      }),
                      (0, _.jsx)(_._, {
                        size: "2",
                        children: (0, _._)(
                          "#AppLanding_Creator_History_HideRemoved",
                        ),
                      }),
                    ],
                  }),
                  _.length == 0
                    ? (0, _.jsx)(_._, {
                        _: "p",
                        size: "2",
                        contrast: "description",
                        children: (0, _._)(
                          "#AppLanding_Creator_History_NoneActive",
                        ),
                      })
                    : (0, _.jsxs)(_._, {
                        columns: "minmax(140px, 1fr) 2fr 2fr 2fr",
                        gapX: "4",
                        alignItems: "center",
                        className: _.HistoryGrid,
                        children: [
                          (0, _.jsx)(_, {
                            strToken: "#AppLanding_Creator_History_Name",
                          }),
                          (0, _.jsx)(_, {
                            strToken: "#AppLanding_Creator_History_CreatorHome",
                          }),
                          (0, _.jsx)(_, {
                            strToken: "#AppLanding_Creator_History_Linked",
                          }),
                          (0, _.jsx)(_, {
                            strToken: "#AppLanding_Creator_History_Status",
                          }),
                          _.map((_, _) =>
                            (0, _.jsx)(
                              _,
                              {
                                entry: _,
                              },
                              `${_.link?.clan_steamid}_${_.link?.linkname}_${_.time_created}_${_}`,
                            ),
                          ),
                        ],
                      }),
                ],
              });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            paddingY: "1",
            className: _.HeaderCell,
            children: (0, _.jsx)(_._, {
              size: "1",
              contrast: "description",
              whiteSpace: "nowrap",
              children: (0, _._)(_.strToken),
            }),
          });
        }
        function _(_) {
          const { entry: _ } = _,
            _ = _.link ?? {},
            _ =
              _.relation == _._._
                ? "game[publishers]"
                : _.relation == _._._
                  ? "game[franchises]"
                  : "game[developers]",
            { clanAccountID: _, clanInfo: _, strURL: _ } = _(_, _),
            _ = !!_.is_active,
            _ = _ ? void 0 : "description";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                paddingY: "2",
                className: _.Cell,
                children: (0, _.jsx)(_._, {
                  size: "2",
                  contrast: _,
                  whiteSpace: "nowrap",
                  className: (0, _._)(!_ && _.RemovedName),
                  children: _.linkname,
                }),
              }),
              (0, _.jsx)(_._, {
                paddingY: "2",
                className: _.Cell,
                children: (0, _.jsx)(_._, {
                  align: "center",
                  gap: "2",
                  wrap: "nowrap",
                  className: _.CreatorCtn,
                  children: (0, _.jsx)(_, {
                    clanAccountID: _,
                    strURL: _,
                    clanInfo: _,
                  }),
                }),
              }),
              (0, _.jsx)(_._, {
                paddingY: "2",
                className: _.Cell,
                children: (0, _.jsx)(_._, {
                  size: "2",
                  contrast: _,
                  children: (0, _._)(
                    "#AppLanding_Creator_History_ByOn",
                    (0, _.jsx)(_, {
                      accountID: _.created_by_accountid,
                    }),
                    (0, _.jsx)(_.Fragment, {
                      children: _(_.time_created),
                    }),
                  ),
                }),
              }),
              (0, _.jsx)(_._, {
                paddingY: "2",
                className: _.Cell,
                children: (0, _.jsx)(_._, {
                  size: "2",
                  contrast: _,
                  children: _
                    ? (0, _._)("#AppLanding_Creator_History_Active")
                    : (0, _._)(
                        "#AppLanding_Creator_History_RemovedByOn",
                        (0, _.jsx)(_, {
                          accountID: _.updated_by_accountid,
                        }),
                        (0, _.jsx)(_.Fragment, {
                          children: _(_.time_modified),
                        }),
                      ),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { accountID: _ } = _;
          return (_ ?? 0) > 0
            ? (0, _.jsx)(_._, {
                inline: !0,
                align: "center",
                className: _.AccountName,
                children: (0, _.jsx)(_._, {
                  accountID: _,
                }),
              })
            : (0, _.jsx)(_.Fragment, {
                children: (0, _._)(
                  "#AppLanding_Creator_History_UnknownAccount",
                ),
              });
        }
        function _(_) {
          return (_ ?? 0) > 0 ? (0, _._)(_) : "";
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          _ = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var _ = ((_) => (
          (_.Gameplay = "gameplay"),
          (_.Visual = "visual"),
          (_.Audio = "audio"),
          (_.Input = "input"),
          _
        ))(_ || {});
        const _ = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          _ = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function _(_) {
          return {
            bAccessibilityResizableUI: _.includes(
              k_EStoreCategoryAccessibilityResizableUI,
            ),
            bAccessibilitySubtitles: _.includes(
              k_EStoreCategoryAccessibilitySubtitles,
            ),
            bAccessibilityColorAlternatives: _.includes(
              k_EStoreCategoryAccessibilityColorAlternatives,
            ),
            bAccessibilityCameraComfort: _.includes(
              k_EStoreCategoryAccessibilityCameraComfort,
            ),
            bAccessibilityBackgroundVolumeControls: _.includes(
              k_EStoreCategoryAccessibilityBackgroundVolumeControls,
            ),
            bAccessibilityStereoSound: _.includes(
              k_EStoreCategoryAccessibilityStereoSound,
            ),
            bAccessibilitySurroundSound: _.includes(
              k_EStoreCategoryAccessibilitySurroundSound,
            ),
            bAccessibilityNarratedMenus: _.includes(
              k_EStoreCategoryAccessibilityNarratedMenus,
            ),
            bAccessibilityChatSpeechtoText: _.includes(
              k_EStoreCategoryAccessibilityChatSpeechtoText,
            ),
            bAccessibilityChatTexttoSpeech: _.includes(
              k_EStoreCategoryAccessibilityChatTexttoSpeech,
            ),
            bAccessibilityPlayableWithoutQuicktimeEvents: _.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutQuicktimeEvents,
            ),
            bAccessibilityKeyboardOnlyOption: _.includes(
              k_EStoreCategoryAccessibilityKeyboardOnlyOption,
            ),
            bAccessibilityMouseOnlyOption: _.includes(
              k_EStoreCategoryAccessibilityMouseOnlyOption,
            ),
            bAccessibilityTouchOnlyOption: _.includes(
              k_EStoreCategoryAccessibilityTouchOnlyOption,
            ),
            bAccessibilityDifficultyLevels: _.includes(
              k_EStoreCategoryAccessibilityDifficultyLevels,
            ),
            bAccessibilitySaveAnytime: _.includes(
              k_EStoreCategoryAccessibilitySaveAnytime,
            ),
            bAccessibilityPlayableAtYourOwnPace: _.includes(
              k_EStoreCategoryAccessibilityPlayableAtYourOwnPace,
            ),
            bAccessibilityPlayableWithoutVision: _.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutVision,
            ),
            bAccessibilityContrastControls: _.includes(
              k_EStoreCategoryAccessibilityContrastControls,
            ),
          };
        }
        function _(_) {
          const [_, _] = (0, _.useState)(_.initialOpen ?? !1),
            _ = _.useId(),
            _ = Object.entries(_.features)
              .filter(([_, _]) => _)
              .map(([_]) => _);
          if (_.length === 0) return null;
          const _ = {};
          _.forEach((_) => {
            const _ = _[_];
            (_[_] ??= []), _[_].push(_);
          });
          const _ = Object.keys(_).length > 1;
          return (0, _.jsxs)("details", {
            className: _().Details,
            open: _,
            onToggle: (_) => _(_.currentTarget.open),
            children: [
              (0, _.jsxs)(_._, {
                className: _().Summary,
                children: [
                  (0, _.jsx)("div", {
                    className: _().ImageContainer,
                    children: (0, _.jsx)(_, {
                      className: _().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, _.jsxs)("span", {
                    className: _().FeatureNameContainer,
                    _: _,
                    children: [
                      (0, _.jsx)("span", {
                        className: _().FeatureName,
                        children: _
                          ? (0, _._)("#AccessibilityFeatures")
                          : (0, _._)(
                              "#AccessibilityFeaturesWithCount",
                              _.length,
                            ),
                      }),
                      (0, _.jsx)("a", {
                        className: _().InfoLink,
                        href: `${_._.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)("ul", {
                className: _().FeatureList,
                "aria-labelledby": _,
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        _.gameplay &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "gameplay",
                              features: _.gameplay,
                              open: _,
                            }),
                          }),
                        _.visual &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "visual",
                              features: _.visual,
                              open: _,
                            }),
                          }),
                        _.audio &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "audio",
                              features: _.audio,
                              open: _,
                            }),
                          }),
                        _.input &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "input",
                              features: _.input,
                              open: _,
                            }),
                          }),
                      ],
                    }),
                  !_ &&
                    _.map((_) =>
                      (0, _.jsx)(
                        "li",
                        {
                          children: (0, _.jsx)(_, {
                            feature: _,
                            open: _,
                          }),
                        },
                        _,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ..._,
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function _(_) {
          const _ = _.useId();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                className: _().GroupLabel,
                _: _,
                children: (0, _._)(_[_.group]),
              }),
              (0, _.jsx)("ul", {
                className: _().FeatureGroupItems,
                "aria-labelledby": _,
                children: _.features.map((_) =>
                  (0, _.jsx)(
                    "li",
                    {
                      children: (0, _.jsx)(_, {
                        feature: _,
                        open: _.open,
                      }),
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            href: `${_._.STORE_BASE_URL}category/${_[_.feature]}`,
            className: _().InfoRow,
            focusable: _.open,
            children: (0, _.jsx)("span", {
              className: _().FeatureNameContainer,
              children: (0, _.jsx)("span", {
                className: _().FeatureName,
                children: (0, _._)(_[_.feature]),
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _() {
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay",
                ),
              }),
              (0, _.jsxs)("div", {
                className: _.Instructions,
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                    ),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Instructions",
                      (0, _.jsx)("a", {
                        href: `${_._.PARTNER_BASE_URL}doc/accessibility_features#gameplay`,
                        target: "_blank",
                      }),
                    ),
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Question",
                ),
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                ),
                _: "bAccessibilityDifficultyLevels",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                ),
                _: "bAccessibilitySaveAnytime",
              }),
            ],
          });
        }
        function _() {
          const { currentValues: _, fnSetValue: _ } = _(),
            _ = _.useId();
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Instructions",
                    (0, _.jsx)("a", {
                      href: "https://learn.microsoft.com/windows/win32/winauto/entry-uiauto-win32",
                      target: "_blank",
                    }),
                    (0, _.jsx)("a", {
                      href: `${_._.PARTNER_BASE_URL}doc/accessibility_features#narrated_menus`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                _: _,
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Question",
                ),
              }),
              (0, _.jsx)(_, {
                labelId: _,
                options: [
                  {
                    _: "yes",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Yes",
                    ),
                  },
                  {
                    _: "no",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (_.bAccessibilityNarratedMenus) return "yes";
                  if (_.bAccessibilityNarratedMenus === !1) return "no";
                },
                fnSetValues: (_) => {
                  _ === "yes" && _("bAccessibilityNarratedMenus", !0),
                    _ === "no" && _("bAccessibilityNarratedMenus", !1);
                },
              }),
            ],
          });
        }
        function _() {
          const { currentValues: _, fnSetValue: _ } = _(),
            _ = _.useId();
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Instructions",
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                _: _,
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Question",
                ),
              }),
              (0, _.jsx)(_, {
                labelId: _,
                options: [
                  {
                    _: "yes",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Yes",
                    ),
                  },
                  {
                    _: "no",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (_.bAccessibilityPlayableWithoutVision) return "yes";
                  if (_.bAccessibilityPlayableWithoutVision === !1) return "no";
                },
                fnSetValues: (_) => {
                  _ === "yes" && _("bAccessibilityPlayableWithoutVision", !0),
                    _ === "no" && _("bAccessibilityPlayableWithoutVision", !1);
                },
              }),
            ],
          });
        }
        function _() {
          const { currentValues: _, fnSetValue: _ } = _(),
            _ = _.useId();
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Instructions",
                    (0, _.jsx)("a", {
                      href: `${_._.PARTNER_BASE_URL}doc/accessibility_features#volume_controls`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                _: _,
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Question",
                ),
              }),
              (0, _.jsx)(_, {
                labelId: _,
                options: [
                  {
                    _: "yes",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Yes",
                    ),
                  },
                  {
                    _: "no",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (_.bAccessibilityBackgroundVolumeControls) return "yes";
                  if (_.bAccessibilityBackgroundVolumeControls === !1)
                    return "no";
                },
                fnSetValues: (_) => {
                  _ === "yes" &&
                    _("bAccessibilityBackgroundVolumeControls", !0),
                    _ === "no" &&
                      _("bAccessibilityBackgroundVolumeControls", !1);
                },
              }),
            ],
          });
        }
        function _() {
          const { currentValues: _, fnSetValue: _ } = _(),
            _ = _.useId();
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Instructions",
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                _: _,
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Question",
                ),
              }),
              (0, _.jsx)(_, {
                labelId: _,
                options: [
                  {
                    _: "surround",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_SurroundSound",
                    ),
                  },
                  {
                    _: "stereo",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_StereoSound",
                    ),
                  },
                  {
                    _: "none",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_None",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () =>
                  _.bAccessibilitySurroundSound
                    ? "surround"
                    : _.bAccessibilityStereoSound
                      ? "stereo"
                      : "none",
                fnSetValues: (_) => {
                  _ === "surround" &&
                    (_("bAccessibilitySurroundSound", !0),
                    _("bAccessibilityStereoSound", !0)),
                    _ === "stereo" &&
                      (_("bAccessibilitySurroundSound", !1),
                      _("bAccessibilityStereoSound", !0)),
                    _ === "none" &&
                      (_("bAccessibilitySurroundSound", !1),
                      _("bAccessibilityStereoSound", !1));
                },
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Visual_Instructions",
                    (0, _.jsx)("a", {
                      href: `${_._.PARTNER_BASE_URL}doc/accessibility_features#visual_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual_Question",
                ),
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                ),
                _: "bAccessibilityResizableUI",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                ),
                _: "bAccessibilitySubtitles",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                ),
                _: "bAccessibilityColorAlternatives",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                ),
                _: "bAccessibilityContrastControls",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                ),
                _: "bAccessibilityCameraComfort",
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Input_Instructions",
                    (0, _.jsx)("a", {
                      href: `${_._.PARTNER_BASE_URL}doc/accessibility_features#input_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input_Question",
                ),
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                ),
                _: "bAccessibilityKeyboardOnlyOption",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                ),
                _: "bAccessibilityMouseOnlyOption",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                ),
                _: "bAccessibilityTouchOnlyOption",
              }),
            ],
          });
        }
        function _() {
          const { currentValues: _, fnSetValue: _ } = _(),
            _ = _.useId();
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Instructions",
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                _: _,
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Question",
                ),
              }),
              (0, _.jsx)(_, {
                labelId: _,
                options: [
                  {
                    _: "no",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_No",
                    ),
                  },
                  {
                    _: "playable_without_quick_time_events",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoQTE",
                    ),
                  },
                  {
                    _: "playable_at_your_own_pace",
                    name: (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoTimedInput",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (_.bAccessibilityPlayableAtYourOwnPace)
                    return "playable_at_your_own_pace";
                  if (_.bAccessibilityPlayableWithoutQuicktimeEvents)
                    return "playable_without_quick_time_events";
                  if (
                    _.bAccessibilityPlayableAtYourOwnPace === !1 &&
                    _.bAccessibilityPlayableWithoutQuicktimeEvents === !1
                  )
                    return "no";
                },
                fnSetValues: (_) => {
                  _ === "playable_at_your_own_pace" &&
                    (_("bAccessibilityPlayableAtYourOwnPace", !0),
                    _("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    _ === "playable_without_quick_time_events" &&
                      (_("bAccessibilityPlayableAtYourOwnPace", !1),
                      _("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    _ === "no" &&
                      (_("bAccessibilityPlayableAtYourOwnPace", !1),
                      _("bAccessibilityPlayableWithoutQuicktimeEvents", !1));
                },
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Instructions",
                    (0, _.jsx)("a", {
                      href: `${_._.PARTNER_BASE_URL}doc/accessibility_features#tts`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                className: _.Question,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Question",
                ),
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                ),
                _: "bAccessibilityChatTexttoSpeech",
              }),
              (0, _.jsx)(_, {
                name: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                ),
                description: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                ),
                _: "bAccessibilityChatSpeechtoText",
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _.WizardContainer,
            children: [
              (0, _.jsx)(_, {
                subtitle: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Summary",
                ),
              }),
              (0, _.jsx)("div", {
                className: _.Instructions,
                children: (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Summary_Instructions",
                  ),
                }),
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                        ),
                        _: "bAccessibilityDifficultyLevels",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                        ),
                        _: "bAccessibilitySaveAnytime",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls_Desc",
                        ),
                        _: "bAccessibilityBackgroundVolumeControls",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus_Desc",
                        ),
                        _: "bAccessibilityNarratedMenus",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound_Desc",
                        ),
                        _: "bAccessibilityStereoSound",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound_Desc",
                        ),
                        _: "bAccessibilitySurroundSound",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                        ),
                        _: "bAccessibilityResizableUI",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                        ),
                        _: "bAccessibilitySubtitles",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                        ),
                        _: "bAccessibilityColorAlternatives",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                        ),
                        _: "bAccessibilityContrastControls",
                      }),
                    ],
                  }),
                  (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                        ),
                        _: "bAccessibilityCameraComfort",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision_Desc",
                        ),
                        _: "bAccessibilityPlayableWithoutVision",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                        ),
                        _: "bAccessibilityKeyboardOnlyOption",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                        ),
                        _: "bAccessibilityMouseOnlyOption",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                        ),
                        _: "bAccessibilityTouchOnlyOption",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents_Desc",
                        ),
                        _: "bAccessibilityPlayableWithoutQuicktimeEvents",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace_Desc",
                        ),
                        _: "bAccessibilityPlayableAtYourOwnPace",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                        ),
                        _: "bAccessibilityChatTexttoSpeech",
                      }),
                      (0, _.jsx)(_, {
                        name: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                        ),
                        description: (0, _._)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                        ),
                        _: "bAccessibilityChatSpeechtoText",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        const _ = {
            2: [_, _, _],
          },
          _ = 2;
        function _(_, _, _, _) {
          return (0, _.useMemo)(() => {
            if (_) return [_];
            if (!_)
              return [_, _, _, _, _, _, _, _, _ ? _ : void 0, _].filter(
                (_) => !!_,
              );
            const _ = new Set();
            for (let _ = _ + 1; _ <= _; _++)
              if (_ in _) for (const _ of _[_]) _.add(_);
            return [..._, _];
          }, [_, _, _, _]);
        }
        const _ = _.createContext(void 0);
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          const _ = _.useMemo(
            () => ({
              currentValues: _.currentValues,
              fnSetValue: _.fnSetValue,
              nPageIndex: _.nPageIndex,
              bEditMode: _.bEditMode,
            }),
            [_.currentValues, _.fnSetValue, _.nPageIndex, _.bEditMode],
          );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _.children,
          });
        }
        function _(_) {
          const {
              close: _,
              features: _,
              editMode: _,
              changedMode: _,
              isMultiplayer: _,
              nLastVersionCompleted: _,
            } = _,
            [_, _] = (0, _.useState)(0),
            _ = _(
              _,
              _ ||
                _.bAccessibilityChatSpeechtoText ||
                _.bAccessibilityChatTexttoSpeech,
              _,
              _,
            ),
            [_, _] = _.useState(_),
            _ = () => _((_) => _ - 1),
            _ = () => _((_) => _ + 1);
          let _ = _;
          _ === 0 && (_ = _);
          let _ = _,
            _ = (0, _._)("#Wizard_NextButton");
          _ === _.length - 1 &&
            ((_ = () => {
              _(_), _();
            }),
            (_ = (0, _._)("#Wizard_SaveAndExitButton")));
          const _ = (_, _) => {
              _((_) => ({
                ..._,
                [_]: _,
              }));
            },
            _ = _[_];
          return (0, _.jsxs)(_._, {
            active: !0,
            className: _.WizardModal,
            children: [
              (0, _.jsxs)(_, {
                fnSetValue: _,
                currentValues: _,
                nPageIndex: _,
                bEditMode: _,
                children: [
                  (0, _.jsx)(_, {
                    nPages: _.length,
                  }),
                  (0, _.jsx)(_._, {
                    className: _.WizardBody,
                    children: (0, _.jsx)(_, {}),
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                className: _.WizardButtons,
                onCancel: _,
                strCancelText: (0, _._)("#Wizard_BackButton"),
                onOK: _,
                strOKText: _,
              }),
            ],
          });
        }
        function _(_) {
          const { nPages: _ } = _,
            { nPageIndex: _ } = _(),
            _ = (100 * (_ + 1)) / (_ + 1);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _.WizardTitle,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Title",
                ),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _.ProgressBar,
                  _ == _ - 1 && _.ProgressBarComplete,
                ),
                children:
                  _ < _ - 1 &&
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.ProgressBarFillComponent),
                    style: {
                      width: _ + "%",
                    },
                  }),
              }),
            ],
          });
        }
        function _(_) {
          const { nPageIndex: _, bEditMode: _ } = _();
          return _
            ? null
            : (0, _.jsx)("div", {
                className: _.StepRow,
                children: (0, _.jsxs)("div", {
                  className: _.StepLabel,
                  children: [
                    (0, _._)("#Wizard_StepNumber", _ + 1),
                    _.subtitle &&
                      (0, _.jsx)(_._, {
                        children: _.subtitle,
                      }),
                  ],
                }),
              });
        }
        function _(_) {
          const { currentValues: _, fnSetValue: _ } = _();
          return (0, _.jsx)(_._, {
            label: (0, _.jsxs)("div", {
              className: _.CheckboxComplexLabel,
              children: [
                (0, _.jsxs)("span", {
                  children: [
                    _.name,
                    " ",
                    _.tooltip &&
                      (0, _.jsx)(_._, {
                        customTooltip: !0,
                        tooltip: (0, _.jsx)(_._, {
                          className: _.WizardTooltip,
                          children: _.tooltip,
                        }),
                      }),
                  ],
                }),
                (0, _.jsx)("p", {
                  children: _.description,
                }),
              ],
            }),
            checked: _[_._],
            onChange: (_) => _(_._, _),
          });
        }
        function _(_) {
          const _ = _.fnCalculateSelectedOption();
          return (0, _.jsx)(_._, {
            labelId: _.labelId,
            value: _,
            onChange: _.fnSetValues,
            children: _.options.map((_) =>
              (0, _.jsxs)(
                _._,
                {
                  value: _._,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.RadioButton,
                        _ == _._ && _.Selected,
                      ),
                    }),
                    (0, _.jsx)("div", {
                      className: _.OptionLabel,
                      children: (0, _._)(_.name),
                    }),
                  ],
                },
                _._,
              ),
            ),
          });
        }
        function _(_, _) {
          const _ = document.querySelector(
            `[name="app[classification][category][category_${_}]"]`,
          );
          (0, _._)(_, "Missing category input for", _),
            _ && _.setAttribute("value", _ ? "true" : "");
        }
        function _(_) {
          _(64, _.bAccessibilityResizableUI),
            _(65, _.bAccessibilitySubtitles),
            _(66, _.bAccessibilityColorAlternatives),
            _(67, _.bAccessibilityCameraComfort),
            _(68, _.bAccessibilityBackgroundVolumeControls),
            _(69, _.bAccessibilityStereoSound),
            _(70, _.bAccessibilitySurroundSound),
            _(71, _.bAccessibilityNarratedMenus),
            _(72, _.bAccessibilityChatSpeechtoText),
            _(73, _.bAccessibilityChatTexttoSpeech),
            _(74, _.bAccessibilityPlayableWithoutQuicktimeEvents),
            _(75, _.bAccessibilityKeyboardOnlyOption),
            _(76, _.bAccessibilityMouseOnlyOption),
            _(77, _.bAccessibilityTouchOnlyOption),
            _(78, _.bAccessibilityDifficultyLevels),
            _(79, _.bAccessibilitySaveAnytime),
            _(80, _.bAccessibilityPlayableAtYourOwnPace),
            _(81, _.bAccessibilityPlayableWithoutVision),
            _(82, _.bAccessibilityContrastControls),
            document
              .querySelector('[name="app[content][accessibilitywizard][v1]"]')
              ?.setAttribute("value", "true"),
            document
              .querySelector('[name="app[content][accessibilitywizard][v2]"]')
              ?.setAttribute("value", "true");
          const _ = document.getElementById("submitBtn");
          _ && _.click();
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_[(_.Closed = 0)] = "Closed"),
            (_[(_.Wizard = 1)] = "Wizard"),
            (_[(_.Edit = 2)] = "Edit"),
            (_[(_.Changed = 3)] = "Changed"),
            _
          ))(_ || {});
        function _(_) {
          const {
              isMultiplayer: _,
              bWizardCompleted: _,
              nLastVersionCompleted: _,
              ..._
            } = _,
            _ = Object.entries(_).some(
              ([_, _]) => _.startsWith("bAccessibility") && _,
            ),
            [_, _] = _.useState(0);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ !== 0 &&
                (0, _.jsx)(_, {
                  editMode: _ === 2,
                  changedMode: _ === 3,
                  close: () => _(0),
                  features: _,
                  isMultiplayer: _,
                  nLastVersionCompleted: _,
                }),
              (0, _.jsx)(_, {
                bWizardCompleted: _,
                nLastVersionCompleted: _,
                bHasAnyAccessibilityFeatures: _,
                setModalState: _,
                features: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
            bHasAnyAccessibilityFeatures: _,
            bWizardCompleted: _,
            nLastVersionCompleted: _,
            setModalState: _,
            features: _,
          } = _;
          return _ || _
            ? (0, _.jsx)(_, {
                bHasAnyAccessibilityFeatures: _,
                onEdit: () => _(2),
                onStart: () => _(1),
                onChanged: () => _(3),
                features: _,
                nLastVersionCompleted: _,
              })
            : (0, _.jsx)(_, {
                onStart: () => _(1),
              });
        }
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                className: _().AccessibilityFeatureDescription,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                ),
              }),
              (0, _.jsx)(_._, {
                className: _().StartWizardButton,
                onClick: _.onStart,
                children: (0, _._)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                ),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                className: _().AccessibilityFeatureDescription,
                children: _.bHasAnyAccessibilityFeatures
                  ? (0, _._)("#App_Landing_AccessibilityFeatures_Summary")
                  : (0, _._)(
                      "#App_Landing_AccessibilityFeatures_Summary_NoFeatures",
                    ),
              }),
              _.bHasAnyAccessibilityFeatures &&
                (0, _.jsx)(_, {
                  features: _.features,
                  onEdit: _.onEdit,
                }),
              (0, _.jsx)("div", {
                className: _().ButtonRow,
                children: (0, _.jsx)(_._, {
                  className: _().StartWizardButton,
                  onClick: _.onStart,
                  children: (0, _._)(
                    "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                  ),
                }),
              }),
              _ > _.nLastVersionCompleted &&
                (0, _.jsxs)("div", {
                  className: _().Updates,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().NewBugContainer,
                      children: (0, _.jsx)("span", {
                        className: _().New,
                        children: (0, _._)("#Callout_NEW"),
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("p", {
                          children: (0, _._)(
                            "#App_Landing_AccessibilityFeatures_WizardPrompt_Update_Desc",
                          ),
                        }),
                        (0, _.jsxs)("div", {
                          className: _().UpdateButtonContainer,
                          children: [
                            (0, _.jsx)(_._, {
                              className: _().UpdatesWizardButton,
                              onClick: _.onChanged,
                              children: (0, _._)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton",
                              ),
                            }),
                            (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton_Desc",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().AccessibilityFeatureInfoCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().AccessibilityFeatureContent,
                children: (0, _.jsx)("div", {
                  className: _().PreviewContainer,
                  children: (0, _.jsx)(_, {
                    features: _.features,
                    initialOpen: !0,
                  }),
                }),
              }),
              (0, _.jsxs)("div", {
                className: _().EditButton,
                onClick: _.onEdit,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().Spacer, _().Top),
                  }),
                  (0, _.jsx)("div", {
                    className: _().EditButtonIcon,
                    children: (0, _.jsx)(_.ffu, {}),
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().Spacer, _().Bottom),
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                path: _._.GameEdit(`:action(${_._.join("|")})`, ":itemid"),
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    config: {
                      "storeadmin-releasedateinfo": (_) =>
                        (0, _.jsx)(_._, {
                          bIsGameEdit: !0,
                          ..._,
                        }),
                      "storeadmin-controllersupportinfo": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-app-description-editor": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-app-extraassetslist": (_) =>
                        (0, _.jsx)(_._, {
                          ..._,
                        }),
                      "storeadmin-season-pass-survey": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-creator-home-display-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-dlc-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-dlc-dependancy-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-social-media-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-anticheat-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-graphicalassets-confirmdialog": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-pinnedbundles-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-purchaseoptionsorder-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-accessibilityfeatures": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-creator-home-edit": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-app-screenshot-alttext": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-creator-home-fixup": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-creator-home-link-history": (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      "storeadmin-editions-editor": (_) =>
                        (0, _.jsx)(_._, {
                          ..._,
                        }),
                    },
                  }),
                }),
              }),
              (0, _.jsx)(_._, {
                path: _._.PackageEdit(`:action(${_._.join("|")})`, ":itemid"),
                children: (0, _.jsx)(_._, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                  },
                }),
              }),
              (0, _.jsx)(_._, {
                path: _._.BundleEdit(`:action(${_._.join("|")})`, ":itemid"),
                children: (0, _.jsx)(_._, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                  },
                }),
              }),
              (0, _.jsx)(_._, {
                path: _._.ReviewPriceProposals(),
                component: _,
              }),
              (0, _.jsx)(_._, {
                path: _._.PackagePricingComparison(),
                component: _,
              }),
              (0, _.jsx)(_._, {
                path: _._.PackageLanding(":packageid"),
                children: (0, _.jsx)(_._, {
                  config: {
                    "packagelanding-nonappcontents-edit": (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                    "packagelanding-packagepurchasedisplay": (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                  },
                }),
              }),
              (0, _.jsx)(_._, {
                path: _._.FrontPageEdit(":clusterid"),
                children: (0, _.jsx)(_._, {
                  config: {
                    "storeadmin-colors": (_) =>
                      (0, _.jsx)(_._, {
                        ..._,
                      }),
                  },
                }),
              }),
              (0, _.jsx)(_._, {
                path: _._.FrontPageSteamChinaEdit(":clusterid"),
                children: (0, _.jsx)(_._, {
                  config: {
                    "storeadmin-colors": (_) =>
                      (0, _.jsx)(_._, {
                        ..._,
                      }),
                  },
                }),
              }),
              (0, _.jsx)(_._, {
                path: _._.ContentHubEditor(":suffix", ":clusterid"),
                children: (0, _.jsx)(_._, {
                  config: {
                    "storeadmin-colors": (_) =>
                      (0, _.jsx)(_._, {
                        ..._,
                      }),
                  },
                }),
              }),
              (0, _.jsx)(_._, {
                component: _._,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _ = "div", ref: _, focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(
              {
                ..._,
                className: _()(_.Grid, _.className),
              },
              _,
            ),
            _ = _ ?? _?.focusable ?? !!_.onClick,
            _ = (0, _.jsx)(_, {
              ref: _,
              ..._,
            });
          return _
            ? (0, _.jsx)(_._, {
                "flow-children": "grid",
                ...(_ || {}),
                focusable: _,
                children: _,
              })
            : _;
        }
        const _ = [
          ..._._,
          {
            prop: "display",
            responsive: !0,
            className: _.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: _.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: _.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: _.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: _.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: _.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: _.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: _.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: _.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: _.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: _.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: _.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: _.Gap,
            cssProperty: (_) => ["--grid-gap", `var(--spacing-${_})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: _.Gap,
            cssProperty: (_) => ["--grid-gap-x", `var(--spacing-${_})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: _.Gap,
            cssProperty: (_) => ["--grid-gap-y", `var(--spacing-${_})`],
          },
        ];
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
          const { depth: _ } = useContext(_);
          return jsx(_.Provider, {
            value: {
              depth: _ + 1,
            },
            children: jsx(Box, {
              ..._,
            }),
          });
        }
        const _ = _.createContext({
          depth: 0,
        });
        function _() {
          return (0, _.useContext)(_).depth;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { level: _ = "auto", className: _, color: _ } = _,
            _ = _(),
            _ = _(_, _);
          return (0, _.jsx)(_, {
            ...(0, _._)(
              {
                ..._,
                className: _()((0, _._)(), _.Heading, _),
              },
              _,
            ),
          });
        }
        const _ = [
          ..._._,
          ..._._,
          {
            prop: "size",
            responsive: !0,
            className: (_) => _[`HeadingSize-${_}`],
          },
        ];
        function _(_, _) {
          if (_ === "auto" && _ === 0) return "h1";
          const _ = _ === "auto" ? _.toString() : _;
          return /^[1-6]$/.test(_)
            ? "h" + _
            : _ === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${_}".`,
                ),
                "h1");
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
          const { nodes: _, marks: _ } = _,
            _ = (0, _._)(
              _._,
              (_, _) => (
                _ &&
                  _(
                    _._.replaceSelectionWith(
                      _.hard_break.createChecked(),
                    ).scrollIntoView(),
                  ),
                !0
              ),
            ),
            _ = {
              "Mod-z": _._,
              "Mod-y": _._,
              "Shift-Mod-z": _._,
              Backspace: _._,
              Escape: _._,
              "Mod-Enter": _,
              "Shift-Enter": _,
              "Mod-b": (0, _._)(_.strong),
              "Mod-i": (0, _._)(_.italic),
              "Mod-u": (0, _._)(_.underline),
              "Mod-Shift-x": (0, _._)(_.strike),
              "Ctrl-Shift-s": (0, _._)(_.strike),
              Enter: (0, _._)(_.list_item),
              "Mod-[": (0, _._)(_.list_item),
              "Mod-]": (0, _._)(_.list_item),
              "Ctrl-Shift-1": (0, _._)(_.heading, {
                level: 1,
              }),
              "Ctrl-Shift-2": (0, _._)(_.heading, {
                level: 2,
              }),
              "Ctrl-Shift-3": (0, _._)(_.heading, {
                level: 3,
              }),
              "Ctrl-Shift-4": (0, _._)(_.heading, {
                level: 4,
              }),
              "Ctrl-Shift-5": (0, _._)(_.heading, {
                level: 5,
              }),
              "Ctrl-Shift-7": (0, _._)(_.ordered_list),
              "Ctrl-Shift-8": (0, _._)(_.bullet_list),
              "Ctrl-Shift-0": (0, _._)(_.paragraph),
            };
          return (
            _.code && (_["Ctrl-Shift-c"] = (0, _._)(_.code)),
            _.code_block && (_["Alt-Ctrl-Shift-c"] = (0, _._)(_.code_block)),
            _.horizontal_rule &&
              (_["Mod-_"] = (_, _) => (
                _ &&
                  _(
                    _._.replaceSelectionWith(
                      _.horizontal_rule.create(),
                    ).scrollIntoView(),
                  ),
                !0
              )),
            (0, _._)(_)
          );
        }
        function _(_, _) {
          return new _._(_, (_, _, _, _) => _._.replaceWith(_, _, _.create()));
        }
        function _(_) {
          const { nodes: _, marks: _ } = _;
          return (0, _._)({
            rules: [
              (0, _._)(
                /^(\d+)\.\s$/,
                _.ordered_list,
                (_) => ({
                  order: parseInt(_[1]),
                }),
                (_, _) => _.childCount + _.attrs.order == parseInt(_[1]),
              ),
              (0, _._)(/^\s*([-+*])\s$/, _.bullet_list),
              (0, _._)(/(?<!\w)\*([^*]+)\*/, _.strong),
              (0, _._)(/(?<!\w)_([^_]+)_/, _.italic),
              (0, _._)(/(?<!\w)~([^~]+)~/, _.strike),
              (0, _._)(/(?<!\w)`([^`]+)`/, _.code),
              (0, _._)(/^```$/, _.code_block),
              (0, _._)(/^(#{1,5})\s$/, _.heading, (_) => ({
                level: _[1].length,
              })),
              _.horizontal_rule && _(/^(\*\*\*|---|___)$/, _.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._({
            props: {
              handlePaste(_, _, _) {
                const _ = _.clipboardData
                  ?.getData("text/plain")
                  .replace(/\n/g, " ");
                if (_) {
                  const _ = _.state._.insertText(_);
                  _.dispatch(_);
                }
                return !0;
              },
            },
          }),
          _ = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function _(_) {
          return new Plugin({
            filterTransaction(_, _) {
              return _.doc.textContent.length <= _;
            },
          });
        }
        function _(_) {
          const { nMaxChars: _ } = _;
          return (
            useInstallPlugin(useMemo(() => _(_), [_])), jsx(React.Fragment, {})
          );
        }
        const _ = _.createContext(void 0);
        function _(_) {
          const { view: _, pmState: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                view: _,
                pmState: _,
              }),
              [_, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        const _ = _.memo(function (_) {
          const { schema: _, refOnUpdate: _, bSingleLine: _ } = _;
          return (
            _(
              _.useMemo(
                () =>
                  _ &&
                  new _._({
                    view: (_) => ({
                      update: (..._) => _.current && _.current(..._),
                    }),
                  }),
                [_],
              ),
            ),
            _(_.useMemo(() => (0, _._)(_ ? _ : {}), [_])),
            _(_ ? _ : void 0),
            _(_.useMemo(() => (0, _._)(), [])),
            _(_.useMemo(() => _(_), [_])),
            _(_.useMemo(() => (0, _._)(_._), [])),
            _(_.useMemo(() => _(_), [_])),
            null
          );
        });
        function _(_) {
          const { pmState: _ } = _.useContext(_);
          _.useEffect(() => {
            if (!(!_ || !_)) return _.InstallPlugin(_);
          }, [_, _]);
        }
        function _() {
          return _.useContext(_)?.view;
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
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.state;
          if (!_.state.plugins.includes(_)) {
            const _ = [..._.state.plugins, _];
            _.updateState(
              _.reconfigure({
                plugins: _,
              }),
            );
          }
        }
        function _(_, _) {
          if (!_.isDestroyed) {
            const _ = _.state,
              _ = _.plugins.filter((_) => _ !== _);
            _.updateState(
              _.reconfigure({
                plugins: _,
              }),
            );
          }
        }
        function _(_, _) {
          const { from: _, $from: _, _: _, empty: _ } = _.selection;
          return _
            ? !!_.isInSet(_.storedMarks || _.marks())
            : _.doc.rangeHasMark(_, _, _);
        }
        function _(_, _, _) {
          const { parent: _ } = _,
            _ = _.childAfter(_.parentOffset),
            _ = _.node?.marks.find((_) => _.type == _);
          if (!_) return;
          let _ = _.index() - 1,
            _ = _.start() + _.offset;
          for (; _ >= 0 && _.isInSet(_.child(_).marks); )
            (_ -= _.child(_).nodeSize), (_ -= 1);
          let _ = _.index() + 1,
            _ = _.start() + _.offset + _.node.nodeSize;
          for (; _ < _.childCount && _.isInSet(_.child(_).marks); )
            (_ += _.child(_).nodeSize), (_ += 1);
          const _ = _.doc.slice(_, _);
          return {
            from: _,
            _: _,
            slice: _,
            mark: _,
          };
        }
        function _(_, _, _) {
          if (_.type !== _) return !1;
          if (_ === void 0) return !0;
          for (const _ in _) if (_[_] !== _.attrs[_]) return !1;
          return !0;
        }
        function _(_, _, _) {
          let { $from: _, _: _ } = _.selection;
          for (let _ = _.depth; _ > 0; _--) {
            if (_ > _.end(_)) return !1;
            const _ = _.node(_);
            if (_(_, _, _)) return !0;
          }
          return !1;
        }
        function _(_, _, _) {
          for (let _ of _) if (_(_, _, _)) return _;
          return null;
        }
        function _(_, _, _) {
          const { $from: _, _: _ } = _.selection;
          for (let _ = _.sharedDepth(_); _ > 0; _--) {
            const _ = _.node(_);
            if (_.type === _) return !!_.attrs[_];
          }
          return !1;
        }
        function _(_, _, _) {
          const { $from: _, _: _ } = _.selection;
          for (let _ = _.sharedDepth(_); _ > 0; _--) {
            const _ = _.node(_);
            if (_ === void 0 ? _.type === _ : _.hasMarkup(_, _))
              return _.before(_);
          }
        }
        function _(_, _) {
          return (_, _) => {
            const _ = _(_, _);
            if (_ === void 0) return !1;
            if (_) {
              const _ = _.doc.nodeAt(_);
              if ((console.assert(!!_), !_)) return !1;
              _(
                _._.setNodeMarkup(_, _, {
                  ..._.attrs,
                  [_]: !_.attrs[_],
                }),
              );
            }
            return !0;
          };
        }
        function _(_, _) {
          return (_, _) => {
            const { $from: _ } = _.selection;
            let _ = null,
              _ = 0;
            for (let _ = _.depth; _ > 0; _--) {
              const _ = _.node(_);
              if (_.includes(_.type)) {
                (_ = _), (_ = _.before(_));
                break;
              }
            }
            return _
              ? (_ &&
                  _(
                    _._.setNodeMarkup(_, _.type, {
                      ..._.attrs,
                      ..._,
                    }),
                  ),
                !0)
              : !1;
          };
        }
        function _(_, _, _ = {}) {
          return new _._(_, (_, _, _, _) => {
            const _ = _ instanceof Function ? _(_) : _,
              _ = _._;
            if (_[1]) {
              const _ = _ + _[0].indexOf(_[1]),
                _ = _ + _[1].length;
              _ < _ && _.delete(_, _),
                _ > _ && _.delete(_, _),
                (_ = _ + _[1].length);
            }
            return _.addMark(_, _, _.create(_)), _.removeStoredMark(_), _;
          });
        }
        function _(_, _, _) {
          const _ = {
              left: _,
              top: _,
            },
            _ = _.posAtCoords(_);
          if (_?.pos) {
            const _ = _.state.doc.resolve(_.pos);
            _.dispatch(_.state._.setSelection(_._.near(_)));
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
            onClose: _,
            className: _,
            navID: _,
            children: _,
            strTitle: _,
            wideMode: _,
            ..._
          } = _;
          return (0, _.jsx)(_._, {
            onClose: _,
            navID: _ ?? "SimpleModalDialog",
            ..._,
            children: (0, _.jsxs)("div", {
              className: _()(_, _().SimpleModalDialog, _ && _().WideMode),
              children: [
                " ",
                (0, _.jsxs)(_._, {
                  className: _().SimpleModalDialogHeader,
                  children: [
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().SimpleModalDialogTitle,
                        children: _,
                      }),
                    (0, _.jsx)("button", {
                      onClick: (_) => (_("xclick"), _.preventDefault(), !1),
                      className: _().XButton,
                      children: (0, _.jsx)(_.tmm, {}),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().SimpleModalContentCtn,
                  children: _,
                }),
              ],
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          Init() {
            const _ = (0, _._)(
              "promotion_operation_token",
              "application_config",
            );
            this.m_steamInterface = (0, _._)(new _._(_._.WEBAPI_BASE_URL, _));
          }
        }
        function _() {
          return _.Get().GetPromotionTransport().GetServiceTransport();
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
          _ = __webpack_require__._(_),
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
        const _ = "nicknames";
        function _(_) {
          const _ = (0, _._)(),
            { data: _, isLoading: _ } = (0, _._)({
              queryKey: [_],
              queryFn: async () => {
                const _ = new Map();
                if (_._.logged_in) {
                  const _ = _._.Init(_.w_T),
                    _ = (await _.xtC.GetNicknameList(_, _)).Body().toObject();
                  _?.nicknames &&
                    _.nicknames.length > 0 &&
                    _.nicknames.forEach((_) => {
                      _.accountid &&
                        _.nickname &&
                        _.set(_.accountid, _.nickname);
                    });
                }
                return _;
              },
            });
          return _ ? _.get(_) : null;
        }
        async function _(_) {
          if (!_ || _.length == 0) return [];
          const _ =
            (0, _._)() == "community"
              ? _._.COMMUNITY_BASE_URL
              : _._.STORE_BASE_URL;
          if (_.length == 1) {
            const _ = {
                accountid: _[0],
                origin: self.origin,
              },
              _ = await _().get(`${_}actions/ajaxgetavatarpersona`, {
                params: _,
              });
            if (
              !_ ||
              _.status != 200 ||
              _.data?.success != _._ ||
              !_.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
            return [_.data.userinfo];
          } else {
            const _ = {
                accountids: _.join(","),
                origin: self.origin,
              },
              _ = await _().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                params: _,
              });
            if (
              !_ ||
              _.status != 200 ||
              _.data?.success != _._ ||
              !_.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
            const _ = new Map();
            return (
              _.data.userinfos.forEach((_) =>
                _.set(new _._(_.steamid).GetAccountID(), _),
              ),
              _.map((_) => _.get(_))
            );
          }
        }
        const _ = new (_())((_) => _(_), {
            cache: !1,
          }),
          _ = "avatarandpersonas";
        function _(_) {
          const { data: _, isLoading: _ } = (0, _._)({
            queryKey: [_, _],
            queryFn: () => _.load(_),
          });
          return [_, _];
        }
        function _(_) {
          const _ = (0, _._)(),
            { data: _, isLoading: _ } = (0, _._)({
              queryKey: [_, _],
              queryFn: async () => {
                const _ = await _.loadMany(_);
                return (
                  _.forEach((_) => {
                    if (_ instanceof Error) return;
                    const _ = [_, new _._(_.steamid).GetAccountID()];
                    _.setQueryData(_, _);
                  }),
                  _
                );
              },
              enabled: _?.length > 0,
            }),
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                _?.forEach((_) => {
                  _ instanceof Error || _.push(_);
                }),
                _
              );
            }, [_]);
          return _ ? null : _;
        }
        function _(_) {
          return _._.getQueryData([_, _]);
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
          };
        let _ = class extends _.Component {
          GenerateLanguageOptions() {
            let _ = [];
            const {
              fnFilterLanguage: _,
              fnLangHasData: _,
              fnLastUpdateRTime: _,
              fnIsLangSupported: _,
            } = this.props;
            this.props.bAllowUnsetOption &&
              _.push(
                (0, _.jsx)(
                  "option",
                  {
                    value: _.xPp,
                    children: (0, _._)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let _ = new Array();
            const _ = this.props.realms || [_._.k_ESteamRealmGlobal];
            for (const _ of _._.GetLanguageListForRealms(_)) {
              if (_ && !_(_)) continue;
              const _ = (0, _.LgB)(_),
                _ = (0, _._)("#Language_" + _),
                _ = !!(_ && _(_));
              _.push({
                eLang: _,
                sLocName: _,
                bSupported: _,
              });
            }
            _.sort((_, _) =>
              _.bSupported != _.bSupported
                ? _.bSupported
                  ? -1
                  : 1
                : _.sLocName.localeCompare(_.sLocName),
            );
            let _ = !1;
            for (const _ of _) {
              _.bSupported != _ &&
                (_.push(
                  (0, _.jsx)(
                    "option",
                    {
                      className: _().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, _._)(
                        _.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    _.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (_ = _.bSupported));
              const _ = _ && _(_.eLang),
                _ = _ && _(_.eLang);
              let _ = _.sLocName;
              _ &&
                _ !== 0 &&
                ((_ += " "),
                (_ += (0, _._)(
                  "#Language_Last_Update",
                  (0, _._)(_) +
                    " @ " +
                    (0, _._)(_, {
                      bForce24HourClock: !1,
                    }),
                ))),
                _.push(
                  (0, _.jsx)(
                    "option",
                    {
                      value: _.eLang,
                      className: (0, _._)(
                        {
                          [_().LanguageWithContent]: _,
                        },
                        _.bSupported
                          ? _().SupportedLanguage
                          : _().UnsupportedLanguage,
                      ),
                      children: _,
                    },
                    "langpicker" + _.eLang + (_ ? "_hasdata" : ""),
                  ),
                );
            }
            return _;
          }
          OnLanguageChange(_) {
            const { fnOnLanguageChanged: _, selectedLang: _ } = this.props;
            let _ = Number.parseInt(_.currentTarget.value);
            _ != _ && _ && _(_);
          }
          render() {
            const { selectedLang: _, bDisabled: _, strTooltip: _ } = this.props;
            let _ = this.GenerateLanguageOptions();
            return (0, _.jsx)(_._, {
              toolTipContent: _,
              children: (0, _.jsx)("select", {
                value: _,
                onChange: this.OnLanguageChange,
                disabled: _,
                children: _,
              }),
            });
          }
        };
        _([_._], _.prototype, "OnLanguageChange", 1), (_ = _([_._], _));
        function _(_) {
          const [_, _] = (0, _._)(() => [
            _._.Get().GetHasLocalizationContext(),
            _._.Get().GetCurEditLanguage(),
          ]);
          return (0, _.jsx)(_, {
            selectedLang: _,
            fnLangHasData: _._.Get().BHasLanguageData,
            fnOnLanguageChanged: _._.Get().SetCurEditLanguage,
            bDisabled: !_,
            strTooltip: _ ? void 0 : (0, _._)("#Localization_EditorNotInFocus"),
          });
        }
        function _(_) {
          const { fnLangHasData: _ } = _;
          _.useEffect(
            () => (
              _._.Get().SetHasLocalizationContext(!0),
              () => _._.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const _ = (0, _._)(() => {
            const _ = [];
            for (let _ = _.Bhc; _ < _.bP9; ++_) _[_] = !!(_ && _(_));
            return _;
          });
          return (
            _.useEffect(() => _._.Get().SetHasLanguage(_), [_]),
            (0, _.jsx)(_.Fragment, {})
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
          _ = __webpack_require__("chunkid");
        function _(_, _ = "PlaceholderPlugin") {
          const [_, _] = _.useState([]),
            [_] = _.useState(
              () =>
                new _._({
                  key: new _._(_),
                  state: {
                    init() {
                      return _._.empty;
                    },
                    apply(_, _) {
                      _ = _.map(_.mapping, _.doc);
                      const _ = _.getMeta(this) || [];
                      for (const _ of _)
                        if (_?.add) {
                          const { _: _, data: _ } = _.add,
                            _ = (_, _) => {
                              const _ = document.createElement(_);
                              return (
                                _((_) => [
                                  ..._,
                                  {
                                    _: _,
                                    element: _,
                                    data: _,
                                  },
                                ]),
                                _
                              );
                            },
                            _ = (_) => {
                              _((_) => _.filter((_) => _.element != _));
                            },
                            _ = _._.widget(_.add.pos, _, {
                              _: _,
                              destroy: _,
                            });
                          _ = _.add(_.doc, [_]);
                        } else
                          _?.remove &&
                            (_ = _.remove(
                              _.find(void 0, void 0, (_) => _._ == _.remove._),
                            ));
                      return _;
                    },
                  },
                  props: {
                    decorations(_) {
                      return this.getState(_);
                    },
                  },
                }),
            );
          (0, _._)(_);
          const _ = (0, _._)(),
            _ = _.useRef(0),
            _ = _.useCallback(
              (_, _, _) => {
                const _ = `${_}_${_.current++}`;
                let _ = _ || _.state._;
                _ === void 0 &&
                  (_.selection.empty || _.deleteSelection(),
                  (_ = _.selection.from));
                const _ = _?.getMeta(_) || [];
                return (
                  _.setMeta(_, [
                    ..._,
                    {
                      add: {
                        _: _,
                        pos: _,
                        data: _,
                      },
                    },
                  ]),
                  _ || _.dispatch(_),
                  _
                );
              },
              [_, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                const _ = _.getState(_.state)?.find(
                  void 0,
                  void 0,
                  (_) => _._ == _,
                );
                return _?.length ? _[0].from : void 0;
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _) => {
                const _ = _(_);
                return _
                  ? (_
                      ? _.dispatch(
                          _.state._.replaceWith(_, _, _).setMeta(_, [
                            {
                              remove: {
                                _: _,
                              },
                            },
                          ]),
                        )
                      : _.dispatch(
                          _.state._.setMeta(_, [
                            {
                              remove: {
                                _: _,
                              },
                            },
                          ]),
                        ),
                    !0)
                  : !1;
              },
              [_, _, _],
            );
          return {
            placeholderElements: _,
            createPlaceholder: _,
            findPlaceholder: _,
            replacePlaceholder: _,
          };
        }
        var _ = __webpack_require__("chunkid"),
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
              ProcessFileUpload: _,
              FetchImageURL: _,
              bAllowImageHotLinking: _ = !1,
            } = _,
            [_] = _.useState(() => ({
              manager: new _(_, _, _),
            })),
            { manager: _ } = _;
          return (
            _.SetProps(_, _, _),
            (0, _.jsxs)(_.Provider, {
              value: _,
              children: [
                (0, _.jsx)(_, {
                  manager: _,
                }),
                (0, _.jsx)(_, {
                  manager: _,
                  children: _,
                }),
              ],
            })
          );
        }
        const _ = _.memo(function (_) {
          const { nodeType: _ } = _,
            _ = _(),
            {
              placeholderElements: _,
              createPlaceholder: _,
              replacePlaceholder: _,
            } = _("span", "FileUploadPlaceholder");
          _(_, _);
          const _ = (0, _._)();
          return (
            _.useEffect(() => _.RegisterEditor(_, _, _), [_, _, _, _]),
            (0, _.jsx)(_.Fragment, {
              children: _.map(({ _: _, element: _, data: _ }) =>
                (0, _.jsx)(
                  _,
                  {
                    element: _,
                    data: _,
                  },
                  _,
                ),
              ),
            })
          );
        });
        function _(_, _) {
          const _ = _(),
            _ = _.useCallback(
              (_) => {
                for (const _ of _) _.UploadFile(_);
                _ && _();
              },
              [_, _],
            );
          return (0, _._)(_, {
            multiple: !0,
            accept: _,
          });
        }
        class _ extends Error {
          constructor(_) {
            super(_);
          }
        }
        function _(_) {
          const { element: _, data: _ } = _,
            _ = "file" in _ ? _.file : void 0,
            _ = _.useMemo(() => _ && URL.createObjectURL(_), [_]),
            _ = "url" in _ ? _.url : _,
            _ = _?.type.startsWith("video/");
          return _.createPortal(
            (0, _.jsxs)("span", {
              className: _.FileUploadPlaceholder,
              children: [
                (0, _.jsx)("div", {
                  className: _.ThrobberCtn,
                  children: (0, _.jsxs)("div", {
                    className: _.ThrobberRow,
                    children: [
                      (0, _.jsx)("div", {
                        className: _.Throbber,
                        children: (0, _.jsx)(_._, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, _._)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !_ &&
                  (0, _.jsx)("img", {
                    src: _,
                    className: _.PendingImage,
                  }),
                _ &&
                  (0, _.jsx)("video", {
                    src: _,
                    className: _.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            _,
          );
        }
        class _ {
          m_fnProcessFileUpload;
          m_fnFetchImageURL;
          m_bAllowImageHotLinking;
          m_errors = (0, _._)([]);
          m_view;
          m_fnCreatePlaceholder;
          m_fnReplacePlaceholder;
          constructor(_, _, _) {
            (this.m_fnProcessFileUpload = _),
              (this.m_fnFetchImageURL = _),
              (this.m_bAllowImageHotLinking = _);
          }
          SetProps(_, _, _) {
            (this.m_fnProcessFileUpload = _),
              (this.m_fnFetchImageURL = _),
              (this.m_bAllowImageHotLinking = _),
              (0, _._)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(_, _, _) {
            return (
              (0, _._)(!this.m_view, "Duplicate registration"),
              (this.m_view = _),
              (this.m_fnCreatePlaceholder = _),
              (this.m_fnReplacePlaceholder = _),
              () => {
                this.m_view == _ &&
                  this.m_fnCreatePlaceholder == _ &&
                  this.m_fnReplacePlaceholder == _ &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(_) {
            this.m_errors.Set([...this.m_errors.Value, _]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(_, _) {
            return this.m_view?.posAtCoords({
              left: _,
              top: _,
            })?.pos;
          }
          async UploadFile(_, _) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const _ = this.m_fnCreatePlaceholder(
              {
                file: _,
              },
              _,
            );
            return this.ProcessFile(_, _);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(_, _, _) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${_} at pos ${_}`),
              _.startsWith("data:"))
            ) {
              const _ = this.m_fnCreatePlaceholder(
                {
                  url: _,
                },
                _,
                _,
              );
              return this.ProcessDataURL(_, _), !0;
            } else if (this.m_fnFetchImageURL) {
              const _ = this.m_fnCreatePlaceholder(
                {
                  url: _,
                },
                _,
                _,
              );
              return this.FetchURLAndProcess(_, _), !0;
            } else
              return (
                (0, _._)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(_, _) {
            const [_, _] = _.split(","),
              _ = _.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!_ || _.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${_}`);
              return;
            }
            const _ = _?.groups.mimetype,
              _ = _(_);
            if (!_) {
              this.AddError(`Unsupported MIME type for image: ${_}`);
              return;
            }
            const _ = atob(_),
              _ = new Uint8Array(_.length);
            for (let _ = 0; _ < _.length; _++) _[_] = _.charCodeAt(_);
            const _ = await _._(_.buffer),
              _ = new File([_], `upload_${_}.${_}`, {
                type: _,
              });
            await this.ProcessFile(_, _);
          }
          async FetchURLAndProcess(_, _) {
            try {
              const _ = new URL(_),
                _ = await this.m_fnFetchImageURL(_),
                _ = new File(
                  [_],
                  decodeURIComponent(
                    _.pathname?.replace(/^.*\//, "") || "image",
                  ),
                  {
                    type: _.type,
                  },
                );
              await this.ProcessFile(_, _);
            } catch {
              this.AddError(`Unable to process URL: ${_}`),
                this.m_fnReplacePlaceholder(_);
            }
          }
          async ProcessFile(_, _) {
            let _;
            try {
              console.log(`Processing file upload: "${_.name}"`),
                (_ = await this.m_fnProcessFileUpload(_));
            } catch (_) {
              _ instanceof _
                ? this.AddError(_.message)
                : this.AddError(`Error proccessing file upload: ${_}`);
            }
            _
              ? this.m_fnReplacePlaceholder(_, _)
              : this.m_fnReplacePlaceholder(_);
          }
        }
        function _(_) {
          switch (_) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        const _ = _.createContext(void 0);
        function _() {
          return _.useContext(_).manager;
        }
        const _ = _.memo(function (_) {
          const { manager: _ } = _,
            _ = (0, _._)(_.GetErrors());
          return _.length
            ? (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)(_._, {
                  bAlertDialog: !0,
                  strTitle: (0, _._)("#Error_Generic"),
                  strDescription: _.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        children: _,
                      },
                      _,
                    ),
                  ),
                  strOKButtonText: (0, _._)("#Button_OK"),
                  onOK: () => _.ClearErrors(),
                  onCancel: () => _.ClearErrors(),
                }),
              })
            : null;
        });
        function _(_) {
          const { manager: _, children: _ } = _,
            _ = _.useCallback(
              (_, _) => {
                for (const _ of _)
                  _.UploadFile(_, _.GetViewPosition(_.clientX, _.clientY));
              },
              [_],
            ),
            [_, _] = (0, _._)(_);
          return _.cloneElement(_, {
            ..._,
            ..._.props,
          });
        }
        function _(_, _) {
          (0, _._)(
            _.useMemo(
              () =>
                new _._({
                  props: {
                    handlePaste(_, _, _) {
                      const _ = [];
                      if (
                        (_.content.descendants((_, _) => {
                          if (_.type == _) {
                            const _ = _.attrs.src;
                            (_.startsWith("data:") ||
                              !_.BAllowImageHotLinking()) &&
                              _.push({
                                url: _,
                                pos: _,
                              });
                          }
                        }),
                        _.length)
                      ) {
                        let _ = _.state._;
                        _.selection.empty || _.deleteSelection();
                        let _ = _.selection.from,
                          _ = 0;
                        for (const _ of _) {
                          const _ = _.content.cut(_, _.pos - 1);
                          _.insert(_, _),
                            (_ += _.size),
                            _.QueueUploadFileByURL(_.url, _, _),
                            (_ = _.pos + 1);
                        }
                        return (
                          _.insert(_, _.content.cut(_)),
                          _.scrollIntoView(),
                          _.dispatch(_),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(_, _) {
                        if (_.clipboardData?.files?.length > 0) {
                          _.preventDefault();
                          for (const _ of _.clipboardData.files)
                            _.UploadFile(_);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [_, _],
            ),
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
          _ = __webpack_require__._(_);
        const _ = () => _.useContext(_);
        function _(_) {
          const { view: _, refUpdateToolbar: _, children: _ } = _,
            _ = _.useRef(void 0);
          _.current || (_.current = new _._());
          const _ = _.current;
          _.useEffect(
            () => ((0, _._)(_, () => _.Dispatch(_)), () => (0, _._)(_, void 0)),
            [_, _, _],
          );
          const _ = _.useMemo(
            () => ({
              callbacks: _,
              view: _,
            }),
            [_, _],
          );
          return _
            ? (0, _.jsx)(_.Provider, {
                value: _,
                children: _,
              })
            : null;
        }
        const _ = _.createContext(void 0);
        function _() {
          return (0, _.jsx)("div", {
            className: _.Gap,
          });
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _.Spacer,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(_.className, _.ToolbarRowOverflowContainer),
            children: (0, _.jsx)(_._, {
              className: _.ToolbarRow,
              "flow-children": "row",
              children: _.children,
            }),
          });
        }
        function _(_) {
          const { nodeType: _, attrs: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = _(),
            [_, _] = _.useState(() => (0, _._)(_.state, _, _)),
            _ = _.useCallback((_) => _((0, _._)(_.state, _, _)), [_, _]);
          (0, _._)(_, _);
          const _ = _.useMemo(() => _._(_, _), [_, _]);
          return (0, _.jsx)(_, {
            ..._,
            command: _,
            toggled: _,
            children: _,
          });
        }
        function _(_) {
          const { mark: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = _(),
            [_, _] = _.useState(() => (0, _._)(_.state, _)),
            _ = _.useCallback((_) => _((0, _._)(_.state, _)), [_]);
          (0, _._)(_, _);
          const _ = _.useMemo(() => _._(_), [_]);
          return (0, _.jsx)(_, {
            ..._,
            command: _,
            toggled: _,
            children: _,
          });
        }
        function _(_) {
          const { command: _, toggled: _, children: _, ..._ } = _,
            { view: _, callbacks: _ } = _(),
            [_, _] = _.useState(() => _(_.state));
          (0, _._)(
            _,
            _.useCallback((_) => _(_(_.state)), [_]),
          ),
            _.useEffect(() => _(_(_.state)), [_, _]);
          const _ = !_ && !_;
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: (0, _._)(_.CommandButton, _ && _.Toggled),
              onMouseDown: (_) => {
                _.preventDefault(), _(_.state, _.dispatch, _);
              },
              disabled: _,
              focusable: !_,
              children: _,
            }),
          });
        }
        function _(_) {
          const {
            onClick: _,
            toggled: _,
            disabled: _,
            children: _,
            className: _,
            ..._
          } = _;
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: (0, _._)(_.CommandButton, _ && _.Toggled, _),
              onMouseDown: (_) => {
                _.button === 0 && (_.preventDefault(), _(_));
              },
              disabled: _ === !0,
              children: _,
            }),
          });
        }
        function _(_) {
          const { tooltip: _, keyboardShortcut: _, children: _ } = _;
          if (!_) return _;
          const _ = _
            ? (0, _.jsx)(_, {
                tooltip: _,
                keyboardShortcut: _,
              })
            : _;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            direction: "bottom",
            children: _,
          });
        }
        function _(_) {
          const { tooltip: _, keyboardShortcut: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.TooltipWithShortcut,
            children: [
              (0, _.jsx)("div", {
                children: _,
              }),
              (0, _.jsx)("div", {
                children: (0, _.jsx)(_, {
                  keyboardShortcut: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { keyboardShortcut: _ } = _,
            _ = _.split("-"),
            _ = _.pop() ?? "";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _.map((_, _) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)(_, {
                        children: (0, _.jsx)(_, {
                          modifier: _,
                        }),
                      }),
                      " + ",
                    ],
                  },
                  _,
                ),
              ),
              (0, _.jsx)(_, {
                children: _.toUpperCase(),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.KeyCap,
            children: _.children,
          });
        }
        function _(_) {
          const { modifier: _ } = _;
          switch (_) {
            case "Mod":
              return _._.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return _._.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return _._.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return _._.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              title: _,
              tooltip: _,
              getMinimized: _,
              toggleMinimized: _,
              className: _,
              children: _,
              elAdditionalButtons: _,
            } = _,
            _ = (0, _._)(() => _());
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _,
                  _.SectionTitleHeader,
                  _.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [
                      _,
                      !!_ &&
                        (0, _.jsx)(_._, {
                          tooltip: _,
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.SectionTitleButtons,
                    children: [
                      _,
                      (0, _.jsx)(_, {
                        bIsMinimized: _,
                        fnToggleMinimize: _,
                      }),
                    ],
                  }),
                ],
              }),
              !_ &&
                (0, _.jsx)(_._, {
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const [_, _] = _.useState(!!_.bStartMinimized);
          return (0, _.jsx)(_, {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => _(!_),
            children: _.children,
          });
        }
        function _(_) {
          const { bIsMinimized: _, fnToggleMinimize: _ } = _,
            _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, _.jsx)(_._, {
            "data-tooltip-text": (0, _._)(_),
            onClick: _,
            children: _.bIsMinimized
              ? (0, _.jsx)(_.hz4, {})
              : (0, _.jsx)(_.Xjb, {}),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          ProgressBar: "_2H35Exdt_TEmnht61LT9o",
          ProgressBarComplete: "ch7u6iAsb2ympJBJjGMoi",
          ProgressBarFillComponent: "_3i0WE7KIdK23MdG8F-EDns",
          WizardModal: "_16ywt-UaM5pXRZAZ59hFqb",
          GameName: "_11vp-bH8bgBrQCbqtuK439",
          WizardButtons: "_3dsdpW7Qfs3LWOkzgMJJhJ",
          WizardContainer: "_2wuBak_ecUSy1__ByQUkLA",
          WizardTitle: "_1_VaMIoHomh0nkSL5a0OfP",
          StepRow: "CggdGMWnkepTgIdPa8qF0",
          StepLabel: "_2zme0St18-D_jyf9u4x71k",
          RadioButton: "_11VhNInHVvEffMe2vf2Gg9",
          Selected: "QEXaA3fx7EU29BoZu31SA",
          OptionLabel: "_3QKLY00ZQqv8hxmvbGg8-6",
          CheckboxComplexLabel: "_15L6_SM-oLsYhwZf6E6Ii9",
          Question: "_17VRokV9gQrl4MOm03kxGV",
          Instructions: "_2N-j8qfNmHJEMMz1pXbdvC",
          WizardTooltip: "_2RXE_aA8kQtPJymKYYSMAl",
          BackgroundAnimation: "C8N8hRwMeVp1tGShuVkOh",
          "ItemFocusAnim-darkerGrey-nocolor": "_3OSHg17hDa1n_a1p8YV6NJ",
          "ItemFocusAnim-darkerGrey": "_3vw4cd5iGVZPXAkYQdwc1O",
          "ItemFocusAnim-darkGreySettings": "_35jKmGtukgtSVCv-o2sAWJ",
          "ItemFocusAnim-darkGrey": "_2p57_OuvuARn5uJAZrKT9D",
          "ItemFocusAnim-grey": "_1IsFUDfyU05AFfhOv9ZaFq",
          "ItemFocusAnim-translucent-white-10": "_1-27hJIgX5EtEpiO8ruDs1",
          "ItemFocusAnim-translucent-white-20": "Hy84D3TIRbj_PA180MPvA",
          "ItemFocusAnimBorder-darkGrey": "WijGZOjm_kfdR-fupsAlg",
          "ItemFocusAnim-green": "_16nOxlLQEWjquxC-Yr4mAY",
          focusAnimation: "_1IV9IFCrYGSzJ9sS2CXScW",
          hoverAnimation: "_1UU6b6HTIjjrWrTkpCewNw",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AccessibilityFeatureDescription: "k6qQ5DLbV9P6dfFuuQpnR",
          AccessibilityFeatureInfoCtn: "Jwl4gCBBBKG2avQH1KE4f",
          GameEditCtn: "Jafw2l9EIfZgvxXAq7oSs",
          AccessibilityFeatureContent: "_2O3bOye9ePb-fkhbamPamK",
          EditButton: "_1aweU2y3d4e3510d3nNqjP",
          Spacer: "_2H1h4op2he4A9SRW-5xU9A",
          Top: "_3YANuSYfijJQ5Jq5-sUfaQ",
          Bottom: "_3U8po-ZE4D_KXUQ32LJT0c",
          EditButtonIcon: "_2t7TJZb12JsMs-PxroqLQ9",
          StartWizardButton: "_1VzLAfLRNEbppzyyYS8ueA",
          ButtonRow: "_1L2BTYNuiNzNkV3fxuFZ4A",
          PreviewContainer: "_1z9Dg4jsYlNummQKgczgWN",
          Updates: "cCbxuWUtmnc8zsLas0fCR",
          UpdateButtonContainer: "oQ2jrb8UigZeb9afK7uuf",
          NewBugContainer: "_2lvnBM3dEA_54CApZ1werw",
          New: "_2M8-7e6mSLUYg6EP9U-fr-",
          UpdatesWizardButton: "_2b8NFL_UzE4xC7a-M9SXbC",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          ControllerWizardModal: "_2M4zwA7Ac68En7AUUHEpuK",
          GameName: "_1wayRCM9VO944GbqtTisWi",
          WizardButtons: "ja88t0u0UmDMjZ2vKEXyg",
          WizardContainer: "_1j_e5epqt09WxhZOjyi9D1",
          WizardBody: "_2Agdmn90d9rLK0COHBJ9Ya",
          Column: "_35X7XjU8DZ2H27V0SBSAoo",
          ColumnLabel: "_3xAxLUcHgDWrN3L54mLJYv",
          ReleaseColumnFooter: "_3qIJUe57BhaB_-fSLUg9Hx",
          ColumnContent: "upSjacqUkxiBsrt6N42gC",
          BlueNote: "_3FlXrEk2woo6dOboR90dCn",
          PublishNowWarning: "GSVWx_w2LMo3SAhwSgY-n",
          ErrorBox: "_1h88U0C26maKtvTHQw0f4Z",
          HTMLErrorBoxAppear: "XREUsZ2A3RyF2E-vQKQwp",
          CloudConflictModalContent: "Qq753teqS-0zB67wi3MP5",
          DialogChoiceDescription: "_37mGYoLJCV-kP2sFOgvZhh",
          RadioButton: "_1Cqgv4c_2wNORC7k0gp6O0",
          Selected: "_1iGfirXEzQZDHkJVHJCe25",
          OptionLabel: "_1CKHmXyuOvgsgsfZWRwdkk",
          ProgressBar: "_2FcBzeH5LVz2CQQWk-coqU",
          ProgressBarComplete: "_231x-l7fB13puyRZJDW46L",
          ProgressBarFillComponent: "a63k2U08nK9HrNLtO-4xe",
          WizardTitle: "_3acfYDihepdLalPwwfH_1O",
          StepRow: "_4NsQgqhsg7-hwuKwFSkt1",
          StepLabel: "_3Q7KPqZcxMH4I4NbiI4ZLQ",
          StepImgContainer: "_27_A1alE6d3sduux3CAyY_",
          StepInstruction: "T9eBinyQ2hCY8oy4WO8g9",
          ControlsQuestion: "_86lVB7cXYqg7s4LChbRyM",
          BackgroundAnimation: "_25lkDWhF0bwre6OQT8g7w0",
          "ItemFocusAnim-darkerGrey-nocolor": "_2UZY54l1AJ5zxBJhmYf490",
          "ItemFocusAnim-darkerGrey": "hlnkWGoujK0WgKsCnBOcK",
          "ItemFocusAnim-darkGreySettings": "_3uPCzxcRrrgoi-gsTfxgRQ",
          "ItemFocusAnim-darkGrey": "_2u7cTUci-zR4zqevKlTsfz",
          "ItemFocusAnim-grey": "_3PcMUvLdjJe0fnIkVlDHNa",
          "ItemFocusAnim-translucent-white-10": "_1uSV29xzSfh0VWP4fBLSwy",
          "ItemFocusAnim-translucent-white-20": "_3513-n6v2aZcqIN2F_qPf_",
          "ItemFocusAnimBorder-darkGrey": "_13L0noPDezrKNjkT3uxNet",
          "ItemFocusAnim-green": "_2LoYY8XGA4qLFMRZw7KUHR",
          focusAnimation: "uwLjAG7MPbb5kNpkfltgX",
          hoverAnimation: "_25AiV9rkMnY1kH88BkJPaW",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ReleaseDateInfoCtn: "_2ocuoWlOpeAh97xq7WrkIM",
          GameEditCtn: "_2o3d5bRhxhkhFeFhW8godg",
          ReleaseDateContent: "_14jgI2A7iky0kJHGTv5bRH",
          EditButton: "_1FeuJt2eGQs_Rst-XDLFm4",
          Spacer: "_1kzzU_wSbmdyI7oLSsyg-u",
          Top: "_3M26MlsJeORKy1BwxAXZum",
          Bottom: "_1qVhcuP_Q7ETKhqOIF-6nf",
          EditButtonIcon: "_1EzMvfRFX_4r0BoWZP0nDJ",
          LabelField: "_15-FOPma_SgLfRiaMDz00K",
          Label: "TlwzuMCaMLu_NamMk-aqI",
          BigField: "_1q70c9TQOGTE8nIj0PZzFs",
          Set: "_462we5kglLCfOmKOQ-yFJ",
          DescText: "_1DrWiEkEcbt3HstR0OiF2H",
          StatusText: "_3j0F2jA1hGH2uFa5CQJUU1",
          StartWizardButton: "_3aJmqkMNOKlgJpR8MjiixB",
          ControllerSupportLevelString: "_29_hhzfHe7mcOGymGIBMk8",
          InfoRow: "_2EuSdla3Jwg3xI_Dgo_qHu",
          LocSection: "glzO-PzgvCa6Skefap3ex",
          HighlightRow: "_1o45fKVcOJe0ZqBEGcY7iq",
          HighlightRowRed: "_1hL1r05CyflWZetU6qrC1c",
          LocString: "_29T_Phs4gpEQr5w3liXu9f",
          HighlightText: "_3r2CUk5i9BqNQMQQQUrr0D",
          ImgSection: "_2iy3BWZdA1i5GxeKdEXw5h",
          ImgContainer: "_3fVMxj4lcjRb2Ig3TUcYBP",
          PreviewContainer: "_1WiJc86Iy8Vg1PQk6AofW4",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CreatorNameCtn: "_38XTY1uRQtSGN-NA3nbbGg",
          CreatorCtn: "_2Z2NpZBAp01VIPZcHEkMvW",
          HoverCtn: "-TMA8muDrEsq9vwMsGs8Z",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CapsuleCtn: "c-RZpHTXb06OJeUNz4WEW",
          MissingCapsuleCtn: "_364X0fngRQGCfxG4VyRk_D",
          AppRowCtn: "_2VXPIaz6YEo5TPJqSn_yE5",
          PageSelect: "_12MnhNSqHX_n83jqCGQrF-",
          ManualFeatures: "_1WxdPIk2Wp9e2_EPCvDXs0",
          SortOptionsCtn: "_1sM7lJwWxP9zl748WJgn_8",
          CreatorHomeCtn: "d77JrwhwWgQ2752O6hs9q",
          FeatureSelectItemCtn: "_3gmDKxSYF9DEWwP-L7l_W6",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DropDown: "_2bdfWkqeuk3tQIDuq_G7QG",
          Avatar: "-Fm68k4tG1jrT2Jfr0gbx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          HistoryGrid: "EH94izUwGG4SSkACVZ7n5",
          HeaderCell: "_1nob8WR16zyBYIFa_CPw9w",
          Cell: "_2bC2EU989i01V1yWopneL4",
          RemovedName: "_21vm-4CtlXT411r74VWNJt",
          CreatorCtn: "_1DBwksWf73G37fIH0UHspV",
          HoverCtn: "_2US6IgYcvN2X4Qs1NwBHtI",
          AccountName: "_1jlLyRHa7jxq6iv3XYaicN",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_1ZAQLoxm9d3f6xrGzbfNqv",
          CreatorCtn: "_3E1g0g32lII6LOwFavs-pL",
          HoverCtn: "_2BgPwOwyt6_vzsU2JpcvFM",
          Avatar: "_2aKMBhqBnmiLCGD_hcZSx3",
          CreatorCtnError: "tN8iKI_k1ulzwyVVkMZ_d",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SelectorRow: "_2gPHlYO9IsXSVwCXObPaQe",
          RelationshipType: "_2Rm9HP6ML30Cji08Vj2td2",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DLCItem: "_1sgY-MVMUccmrZgX7D5bAw",
          Highlight: "tsusJIGDyi0szvTLG_58g",
          DeleteDLCItem: "_3W4Twu_YWCADotnJq1XNad",
          HighlightDropDownLabel: "_1ydvIIXwFV5dgYKnwBTgR4",
          HighlightDropDown: "_1ipl4yg58fGYR0_j3G2nLH",
          DLCItemDeleted: "_3NI0dNLBy2votX-G41EHUK",
          DLCItemNotHighlightEligible: "_2tZBwJXOOBOJ0g1pDXTXcg",
          LabelNotHighlightEligible: "_1mAhoxKDY4ru5NgKwHsibi",
          AddDLCDialog: "_3QmO_KfxjsLCYJ3Km0vtXg",
          AddDLCFooter: "_20wuD-AQWC90hxbP9iGsQu",
          AppSelectCtn: "_32YZCQQ7Pe-_dwX6LIf3pl",
          DLCDisplayContainer: "_3cg2WBZbQuwOGVBJr4DDWz",
          AddDLCButton: "_2p7IttiJElSQxs_diHKzci",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ExtraAssetImgTag: "_2JQ4QGd4mIBR58A-9bDHdq",
          ExtraAssetError: "_4aB4b9buM8DFxojRymZ_5",
          ExtraAssetImg: "_1W2-3_i4cuGzBmocT-ZAk5",
          Selected: "QRTy6qng-IEOMiXMxwVtY",
          "extra-asset-blink": "_2D6wlj_wFTjjLOi2f7N1tq",
          InDeprecatedLink: "sakeS4kMEd2FGp4Da4Xrt",
          ExtraAssetControlsContainer: "_3-tWPanUj6QJND7dPTlrgc",
          ExtraAssetControls: "_3LTnCSzSad_SJbC1nruDT8",
          SmallImage: "_3AYhN4DOm37hwrJw5_EKNa",
          ImageLinkDisabledWarning: "_2oUv4hHSs2-8LXtBPcyRRy",
          TopBar: "_1WOD0JTMh8GPXMSA_p8BNb",
          TopBarContent: "_1nOxfVQISFWWwmO7v_u77O",
          Hovered: "_2h_sqCtLa_VIfPxPT1ojpD",
          ExtraAssetDialogContent: "_2zFGXU_GHLOWey5_sOi8kq",
          ExtraAssetsDialogDescription: "_11Ohp1dBE7FzghG4yzgqoA",
          UploadButtonContainer: "_31BKf0Ts8oSM_mv61BOp2G",
          UploadButton: "_35DNlmVRsyVbi56Xf_jj9A",
          StandaloneUploadButton: "NK3X0iAqHHQskiywniNiD",
          ExtraAssetsGridDialog: "aaxZ2xZ0gE7RMvrheWWmj",
          ExtraAssetSearch: "_33MsM-ZTqbPsW8e03kSUKY",
          ExtraAssetsGrid: "_2Uzyt8kZcr-0KU1aoTkiuj",
          ExtraAssetsPageList: "_39FaN2oioTXV-lkAOG0jfE",
          ExtraAssetsChooser: "_12hVxV1z_asvDHFqo9ScMk",
          ExtraAssetChoice: "_13xCWTST4J-cgOyz6kwfIJ",
          ExtraAssetStack: "doWjXy-F7LwBxlzCUBAGC",
          AltTextBtn: "_1JdiJTPLBYcAxWzLqjYV5P",
          StackedImageCtn: "_3gElE6VZJ9uU4-RaFC8Ra8",
          StackedImage: "_2hABNX3YzXj9JYRLANr-hg",
          "Image-0": "_3cPT5-4vXp4iE6v0qwHc23",
          "Image-1": "_2BP4s6zHDy_5HIqCoVQqIg",
          "Image-2": "y5NNNiOOneEJF6_a7pq8O",
          ExtraAssetName: "_1v6uTQuGLshmZKWXULJOSr",
          InstructionsForLocAssets: "_1SZZIXmXR7Rw30KxYPB-tJ",
          LocalizeAssetDialogContent: "_1yX-VOaM5vG__71wYRKXpF",
          DisplayLocImage: "_3DKy0FBx7VieVYhRL6ykCt",
          LocalizeAssetsDialogDescription: "_2AS-5DvwKtFXZy1pWhENnE",
          LocalizedAssetMain: "RzrYxmOI_AsfjKkcxy234",
          LanguageColumn: "_2TmGHFx_V1QDQrc-3q_8-f",
          LanguageWarning: "qpAjL-lahF8IHh9Nd93Ff",
          LocalizeAssetImage: "_1AS4JMOtff-hCq2TVtvwG0",
          Large: "_3CEcLwkihaLGNenomwOCbk",
          LocalizeAssetKeyImage: "_3Ec8F-CYK-STI2Vqw-I5ml",
          LocalizedAssetCtn: "_2m5BQtwFQfI-w9rxOgxzzT",
          LocalizeAssetItem: "_2Si9uGdC2JFc48CXIZ4T1N",
          img: "_2LTUOhg1K-ZG-zE8KHXEbA",
          Name: "lGJk6OffakeBbm9rvukuH",
          LocalizedAssetUploadWarning: "_26-vmpZD8b_p2ApFLrcji8",
          LocalizedAssetUploadButton: "FrlNPlPwQkjgzk604bAC4",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SideBySideComparison: "_22Yf4CsBMkYFBcTEBh4ifm",
          ThrobberContainer: "_1ohypTL81epoo-2xTCJp8M",
          Loading: "_1rTERXdhbmJz94-Cb07emK",
          ImgPreviewContainer: "_15tW0aE5WXrWrGgguKGlWn",
          ImgPreview: "xUnBDVbIvtL7vyAS4rn2t",
          DuplicatePreview: "_14-dbrekvOWYS09OPByyHh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LocTextAreaContainer: "_3oZ2A8CpTx8VWK_eJhZYh",
          LanguageSelect: "_26sgpEoBg_73b96Dm9zA__",
          LanguageOption: "_3-BbOrMwYQUVRDtsxZto7i",
          HasValue: "AX8gskcTCWl_aI-UYAJAf",
          TextArea: "_374NqqdR-vuq2spxuRXCB9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
          AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
          Awards: "_26nsky_SK1122q1xYQ0VZu",
          PreviewDesktop: "_3bpOE-B9MDag6KQR0eBkuM",
          PreviewMobile: "_2WpGoEdbqT778yiAcOF1LI",
          GradientRule: "_1dK_q5EmTZgebmJeCzHq1s",
          PreviewGamepad: "_2m49NX6vFS6SVkkvgmwGY0",
          StoreAppPageHeader: "_1aQY7Yz23XDN0N4IVctriG",
          PreviewModeCtn: "_3j8IamPUv5fQG3BCS5x5g5",
          PreviewModeTitle: "_1xyaZdEQi0iZWRnsgSmNsE",
          PreviewItem: "uX4wgaxy3MACLqRDZkAQT",
          SelectedPreview: "_3GPQSHrcPD7sKpOP2Ne8E3",
          PreviewInfo: "_2SAasZGqd4LlNB-qPiE38o",
          GameDescriptionEditorToolbar: "_14dow-GSmyLacYWBXCNV1l",
          Sticky: "_2YccUEt5UoKig0cAk4W6DK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AltTextDialogContent: "FSO6VV5iXmPANFhTj7Bzp",
          AltTextDialogDescription: "VsXbYkSe5CrbxkE5GhQfI",
          AltTextGrid: "_1DSTal-SoqU7Zf0nk0FmRl",
          AltTextHeader: "DxwrrF6sruBZ-N_Q98dP9",
          AltTextImage: "_3_3Dqx1hIyrpPPlER58SWu",
          AltTextName: "iIe8caS0kpCFy1oLCOUCE",
          AltTextInput: "_160Whafs351qmmXz5c-5_b",
          AltTextRow: "_1okAG3zavPs6wvi1wP1-tW",
          AltTextFailed: "_3Az0YOAE-dFfsOyEkDyEoR",
          AltTextMutateFailed: "tyh1ewxCBrVfWQeIlU505",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AntiCheatDropDown: "_1Ein4m5qBonpTJl1GbVcV_",
          OtherSerivceName: "_2wW0IMGaGmFIjizuMml3mB",
          KernelMode: "iAq_jMg3JrFT_qjIU6gSL",
          CheckboxLabel: "XRMda0yOh0NFnSf3EVLP1",
          CheckboxDescription: "_10omFg-YbEQjz9R0VzeuSC",
          LanguageSelector: "_2aIJUMbzwAYBpQHVa8E2Pg",
          FormRowIndent: "_2NE-O2O0DHfvjzxSZ2fmDO",
          FormRowHeader: "_2uZk1PvTdbBPuMfDFzAGNW",
          FormRowDescription: "_3pHVbh8Pxwbpxlxeej0oG3",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImageConfirmationDialog: "_2Dn55ck2zVwRbA9GNFu_yZ",
          ConfirmationDescription: "_3JFBzNNPRVAejRvp2bu5hF",
          ImageTypeConfirmationCtn: "_3C-PQ-bC6JWcozpVTRwYuU",
          ImageTitle: "_1Hb-MsBU3Ssa4GqbaZQNkc",
          ImageCtn: "kbtD90I1ou1gx_xO8tcXC",
          ImageSrc: "_1Md62ii5C2Q4QaiqWoEdhf",
          ImageCheckboxes: "_3eo-7msJ5jV20gub1qOBn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          NonAppContentsEditor: "_1WoYFMMlYaGcrH1OlNAeb6",
          AddItemButton: "_1xbvS9FSWE8T43H5V6tnLs",
          NonAppContentsEditorScrollArea: "_1dJujt1qEcM8WgH2bsRGtX",
          EditorButtons: "_1WySz_wiyGNuQgIN2UIHuR",
          ItemEditorRow: "_1xiTQEBFDACW6ssXe_rkaa",
          ItemEditorRowContents: "_2oGxJ3wpmY3NkzAlmhzPeu",
          ItemEditorRowNameAndLanguageEditor: "_2QqnI_s10DOvb-HPBd-QeA",
          ItemEditorRowVisibleToggle: "_1NH9ZOrC3ltObbXnTj7Wn0",
          ItemEditorRowDescriptionEditor: "L9MKw629aEVZfhOrL8HFX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PackagePurchaseDisplayContainer: "_1pD-mB7FB4bkfagrMUC9cD",
          PackagePurchaseDisplayButtonBar: "_1XFrrNb_d41kTB7sg9Q_EQ",
          PackagePurchaseDisplayCheckOption: "uXkDV0VRgXEoAuNG58Fzd",
          PackagePurchaseDisplayArtLabel: "_2yayatEjpsnHa5NQ9oPlic",
          checkbox_label: "_1AiEeUD__3Hwc4fhAmw9o4",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EmptyPinnedBundleList: "_1iAXEFHnXUjh793_HsWLka",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PriceChangeSummary: "_378al6U3fz_xo26XB9TSaC",
          Pending: "_9BqgpQmpdILuSOBqbvGmK",
          LoadFailed: "_34U8ZCDShWlVmzkBSW2w1J",
          LastChange: "_2l-Xyo8VbJ2d3XET3FSMDA",
          RecentChange: "_396joK-7sdGrUxSlkMFOSC",
          ChangeCount: "oj-LqimPIvXVMzu4i_Srk",
          PriceChangeToolTip: "_1ju10cCVVFddbi9j4GydW7",
          ToolTipTitle: "_3xk6dJPcAPoyNGwRBsSLYI",
          ToolTipFooter: "_2lvPhgL4d8BhTp9kzGmqJ9",
          ChangeTable: "_1KVZXL9V7gdtPB4judbmZT",
          ChangeHeader: "Tgry6kDtqoo8oLIhLwRlk",
          ChangeRow: "_1OZc-hjI5dkOl7-5ULCXgQ",
          TimeSince: "_1kFp7JsD4NPIjtLyWXzHd_",
          Price: "pCW6qPXp-OAuvel2qwIcT",
          Currencies: "_3xGwebW9ut7kgLyLjTcBpx",
          Notes: "_3SUWUxCuHwN3dYEIbtAbja",
          Increase: "_3hxpTm3SvfgEuBOwXHA3lD",
          Decrease: "wU80squkMRYFMGxr9CTrZ",
          NoChange: "yUgWUJgZHovMaAGLLtLA_",
          FirstPrice: "_24W_O9CqcOeCKh_efWoYl9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          RadioButtons: "_1o8PeYV1JEHw28jdq0-cZs",
          ActionsCtn: "_3tmYmIJendBOkxYfR5pMSJ",
          NotesField: "hmIKAOq3IUq5OZJGCGodY",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ValveAccountTicket: "_1gAPWjNZ0dtQiyMfDmxtd",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PriceDeltaCtn: "FR0Jbt4UFGpCZeakQYuXa",
          PackageInfoColumn: "_1sw3lFWbKOrwVBjyMmIVFE",
          ProposalCtn: "_2aZ0dHJvCBWY-dISFYuHx7",
          RowCtn: "_3Fj4_LN49SJ2FIDkn5Ar_x",
          InlineDiv: "_19_mEBDtOirVDKNF0sbPMT",
          FailuresCtn: "_1Z31Ten-n1dAC5fhblKIfC",
          MatrixGap: "_3vOjxVYu8bLFNAaHbstgFp",
          Legend: "_14hkGjE6JlGYtfCi24GIcv",
          Missing: "_1Prze41qAKK3Yf2ywGaP4x",
          Outside: "gYYAD-UX0KTtpP8A7wose",
          CustomUsd: "Ru7OVKpEg2-4T6i2fJPVP",
          MissingCurrency: "_1aHJaADVcfWKEoJd3rHyzS",
          Title: "_3vH34cEyQM0jTB1rtzMc19",
          SectionHeader: "_2GhfKAafoa5Z1PGwOg6ju9",
          AutoApprovalCtn: "_1-7oBBbh-eUUB7iskMHyxE",
          Notes: "_1y1kejSOqm-cFSP1HxSL_s",
          CurrencyWarningsCtn: "_2H_McBAV-1DEhfPhYqmTG8",
          AboveAutoPublish: "_18NNA8ajB8j6lCIlkk8_uk",
          ThresholdMiniTable: "_1Qz3SUdF4Z2HAIlSWPA08n",
          WarningTitle: "_1jnFS4SBVwvvKVzrE6v9ly",
          WarningAbove: "_2QdKNR-tKnTQ9LEnQ8bVV-",
          WarningBelow: "_1Yk633c4Lzb0M0bpPNgg7e",
          ThresholdRow: "_1WR81oD47ZQYIwkubRtLJ0",
          ThresholdHeader: "IROvk26OnXM-2kx4vbPtO",
          CurrencyName: "_1ErxFwG9fg34T9vaBCjMyh",
          EqualPrices: "_3tHg_ZoTA9Y-7U0t2Cxfyx",
          OriginalPrice: "_2oPTCoNk1ZzEt4AhH3P2D-",
          ProposedPrice: "mbBO-p8uSR3ZCnGWTrGpO",
          RecommendedPrice: "_30pJDSHiHiCXSW4SNk0nnP",
          PercentDiff: "_1d_jmwlFfcaSfpvHzyFrhM",
          ReleaseDateCallout: "_1Xzwu7hrwrG-4QWc1zMbsx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          RowCtn: "_2Kb5slnuUjyEZh0EM01mpa",
          CurrencyHeaderRow: "_1MTZXU0O3Ez0HuYIUZ7DRL",
          priceChangedNew: "_3omSD7bzihAQsvjW816OTH",
          priceChangedHigher: "kPaeu3zbh3qS1FSWF0PXM",
          priceChangedLower: "ExSF3NJhFrNmaalRumcyU",
          outofmatrix: "_1v_REU9nI-QU5hVkmSREZ2",
          pricingerror: "_1flav3IaDWEjl67mhiTjtL",
          outofmatrixlower: "_1yBYLNIGGvEetpwa3M9DVx",
          pricingLegend: "_31Qzh5kyW8c3aceh-aaOLD",
          PackageInfoColumn: "_1v90IxHlEuTMEzzaQS4DkY",
          PackageName: "_3Ry84c5vN70mLVtPYtg6sv",
          Column: "_3yvRGn0SGj1ZMfxDBlsunE",
          SubmissionBy: "_1OTJ0XMxu7F_2yNy3A2qKA",
          MissingReleaseDate: "_2smrPeVLLyicNuwt3hgBAd",
          FullCurrencyColumn: "_1VlWukpBKxbYmmlJrC6r5m",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ReorderableListWithArrows: "j49UFcs3c3QniMgfBfbUC",
          ReorderableListElement: "_1ziKQJEFC5xIspudN0mQWr",
          ReorderableListUpAndDownCtn: "_117rbiRaxL2gx6MMmEAfbw",
          ReorderableListElementContents: "QKoy-F4c1lg1WVGHxrLPo",
          PurchaseOption: "_2svu-POqLeuRkmBTgwfmiS",
          PurchaseOptionFirstLine: "_3tZOw-_UErk1L8tZXBjBlc",
          RemovePurchaseOption: "_2_34o9MpxAxSaACc_87Gki",
          PurchaseOptionDetails: "_1fKMWxi9ifFxXkEqUGVwzK",
          PurchaseOptionHeader: "_2YRHmK-lnhG05fMug_YyNZ",
          HeaderText: "_1kHpaHBh_NR1YhLy8EhFi7",
          PurchaseOptionsOrderEditor: "_2XMlI9jS0J1yB1LCS0c1SU",
          PurchaseOptionsManualToggleCtn: "_3_8N_22yAQCd1zvyNKqfht",
          NoPurchaseOptions: "HXFLodBVYcS6nS9eLv0HH",
          PurchaseOptionError: "_3RSMcw9mJDbrvzPfuNnhcB",
          Exclamation: "_3MdVQ7CJpuGgd3bkTFABRm",
          PackageOption: "vuttoObFteUS46kZgAGlL",
          DropdownOption: "jMf54NQ9Nyft2Si8tbZhL",
          TitleLine: "_4P8QXdBrnelSxwtLHVLOE",
          TitleInput: "_2hzGnHNQA7JBBJz0jCHV2-",
          DescriptionLine: "_3XNwKrWW3qelYLfsIgwHx1",
          DescriptionInput: "ZQb6AVSuWych63E6kWW5F",
          DropdownItemsCtn: "_1tiRg0IxiQHqYoCUkNxKWQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EditorCtn: "_3qyd9aiwL32kAuGY_Rhzm0",
          HeaderCtn: "_2SsIaBHCvUU5Hyt5uQxA_p",
          Row: "wscFtfHuH_NvN1lnfHM6i",
          MilestoneButton: "_1qXO7rz_wCXLWRo_houCbh",
          BtnCtn: "ZrIN9N9KK84LosHTnHAal",
          LangBox: "oHsool0rU2gYfVTjIVrGt",
          CreationButtonRow: "BsMGgRExOtnnHfrfRMeJ7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BtnCtn: "_15Uzhk19FXMyjsNEpD2w__",
          MilestoneTable: "_32pGw8RvFp8N1tj1ZZFD3V",
          Date: "_3eoKJfAU5YNpujekRJ29Lt",
          Released: "aiYALRtbutTsqpA3EVxIS",
          EditBtn: "_3GPoiDQhG2AWZ8zqnefzZt",
          StatusRow: "hs6Pa5T0Gbw8pd9VpJNAs",
          CheckMark: "_2gpgDFHrtGUVaBKuGQRQfZ",
          EditMilestoneDialog: "_1b7pp2idI0It1Wtbh4K5Ck",
          ShippingTheMilestone: "_1ujBS0HyFpqMeEUdjrLrMr",
          ShippingType: "pXgsjv7B10bT5brNV7MFz",
          MilestoneTitleField: "_2J6DntV8BgxcP9CSCueNZu",
          OptionDetails: "_3IQkWWzfVA9kOWtxTMekyW",
          DatePickerRow: "_3ZMVdS_YE75SaKzbxL0ifx",
          TitlePreviewRow: "_82lvRm6zNUSuia5C-0KVb",
          Shipped: "_1jDNm9kCJcNIl38lakfF51",
          PublishReminder: "_1FnrHyPuXP7yRZRvgoNvLi",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Root: "_3i_h6xYLxqWT-wquwrB4P8",
          "Size-1": "_2BS49hUFyqY2YQ3X6Am-Oe",
          "Size-2": "_3GAcWYWoOxZKAt2NY-d-M-",
          "Size-3": "q85ksguLIHUIA6Z5aWE2b",
          Track: "wCPKWvwCOuo-4mHzhEcBW",
          Handle: "_14qr0P2xMoRiEbcekixcZh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          Container: "_30v-6zb_axOypIUr5VRHE1",
          SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
          ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
          ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
          Gap: "_19z0fjj7o0n9vAjVjvYZNU",
          Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
          CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
          Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
          FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
          ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
          ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
          Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
          PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
          FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
          FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
          TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
          KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
          BackgroundAnimation: "_32I7Uh1ZWySd7VGW50f5IC",
          "ItemFocusAnim-darkerGrey-nocolor": "_3dzJEyM6opBkmIeARAGlYr",
          "ItemFocusAnim-darkerGrey": "_2dbsn-sR5AlFKEgCU0FBbT",
          "ItemFocusAnim-darkGreySettings": "_2gCU5HJBuDk1vxRMJhwFGE",
          "ItemFocusAnim-darkGrey": "_39KmlfhlZwkINJt9fdyKbw",
          "ItemFocusAnim-grey": "_1X5Siupo5N_ZVuGesoYV0t",
          "ItemFocusAnim-translucent-white-10": "_3aZcpOjRI-YzMZmhCRiFjd",
          "ItemFocusAnim-translucent-white-20": "_310j_Q-iB-at4-cmQSi1Mt",
          "ItemFocusAnimBorder-darkGrey": "_38WlDUfHs-IiaRcWKFpWyA",
          "ItemFocusAnim-green": "_3Hq7gKwAuHvmYuBWXBx8mC",
          focusAnimation: "_1k4kLxHBHs5edlnWmN-Cos",
          hoverAnimation: "_3OZh2Bm4JsNC3bNfskysCA",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();

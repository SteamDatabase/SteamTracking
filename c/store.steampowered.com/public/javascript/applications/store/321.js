(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [321],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        Picker: "tid_OE5NJWCCVJQP1PfRc",
        Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
        Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
        Focus: "_1xH5si_KorJpS4ST2Geksh",
        TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
        Active: "_1ddEQAfz6GuVRSEqk-d0r",
        Content: "dUQIH8Qg80N6kjB8UQO0P",
        ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
        Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
        SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
        SectionTitle: "_3WuFl419BivPeLqeVIC939",
        FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
        FilterInput: "_2l4z-U60lABvd9XWArGjAf",
        AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
        chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
        chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
        chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
        minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
        chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
        EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
        EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
        disabled: "jaQN2IyN4P8LZXJ6P11qy",
        Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
        AudioLines: "IWabakUFeIH_d5rhBZ6dG",
        Active: "_37tPtXtV-sv9XgDHjS2cnj",
      };
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
        _ = __webpack_require__("chunkid");
      const _ = 1576780700;
      let _ = class extends _.Component {
        OnEmoticonClick(_) {
          const {
            emoticonStore: _,
            strFlairGroupID: __webpack_require__,
            SetUIDisplayPref: _,
            contextOptions: _,
            bShowChatAddons: _,
          } = this.props;
          let _ = null;
          if (
            ((_ = _
              ? _.createElement(_._, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  onEmoticonSelected: (_) =>
                    this.props.OnEmoticonSelected(_, !1),
                  roomEffectSettings: this.props.roomEffectSettings,
                  onRoomEffectSelected: this.props.onRoomEffectSelected,
                  onStickerSelected: this.props.onStickerSelected,
                })
              : __webpack_require__ &&
                  _.flair_list &&
                  _.GetFlairListByGroupID(__webpack_require__)?.length > 0
                ? _.createElement(_._, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })
                : _.createElement(_._, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })),
            (0, _._)(
              _,
              _,
              _ || {
                bOverlapHorizontal: !0,
                bPreferPopLeft: !0,
                bPreferPopTop: !0,
              },
            ),
            this.BHaveUnseenEmoticons() && _)
          ) {
            let _ = this.GetNewestIndicatorTime();
            (!_ || _ < _) && (_ = _), _("rtLastAckedNewEmoticons", _);
          }
        }
        GetNewestIndicatorTime() {
          let _ = this.props.emoticonStore,
            _ = Number.MIN_SAFE_INTEGER,
            _ = _.GetTimeReceivedNewestEmoticon();
          _ && (_ = _);
          let _ = _.GetTimeReceivedForStickerOrEffect();
          return (_ = Math.max(_, _)), _ > Number.MIN_SAFE_INTEGER ? _ : void 0;
        }
        BHaveUnseenEmoticons() {
          const { rtLastAckedNewEmoticons: _ } = this.props;
          let _ = this.GetNewestIndicatorTime();
          return !_ || _ < _ || (_ && (!_ || _ < _));
        }
        render() {
          const {
            disabled: _,
            className: _,
            ttip: __webpack_require__,
            useImg: _,
          } = this.props;
          let _ = [_],
            _ = !1;
          return (
            _ ? _.push("disabled") : this.BHaveUnseenEmoticons() && (_ = !0),
            __webpack_require__ && _.push("ttip"),
            _
              ? _.createElement(
                  _._,
                  {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, _._)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                  },
                  _.createElement(
                    _._,
                    {
                      toolTipContent: __webpack_require__,
                    },
                    _.createElement("img", {
                      src: this.props.useImg,
                      className: (0, _._)(..._),
                      title:
                        this.props.title ||
                        (0, _._)("#ChatEntryButton_Emoticon"),
                    }),
                  ),
                )
              : (_.push(_().chatSubmitButton, _().EmoticonPickerButton),
                _.createElement(
                  _._,
                  {
                    className: (0, _._)(..._),
                    onOKActionDescription: (0, _._)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title || (0, _._)("#ChatEntryButton_Emoticon"),
                    disabled: _,
                  },
                  _.createElement(
                    _._,
                    {
                      toolTipContent: __webpack_require__,
                    },
                    this.props.buttonIcon || _.createElement(_._, null),
                    _ && _.createElement(_._, null),
                  ),
                ))
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnEmoticonClick", null),
        (_ = (0, _._)([_._], _));
      const _ = _;
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
        _ = __webpack_require__("chunkid");
      function _(_, _, __webpack_require__ = !1) {
        return `${_}economy/sticker${__webpack_require__ ? "static" : ""}/${encodeURIComponent(_)}`;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        constructor(_) {
          super(_),
            (this.state = {
              activeIndex: _.initialActiveIndex || 0,
            });
        }
        render() {
          const { config: _ } = this.props,
            { activeIndex: _ } = this.state,
            _ = _[_] && _[_].renderContent ? _[_].renderContent() : null,
            _ = _.length > 1,
            _ = _
              ? ({ detail: { button: _ } }) => {
                  _ === _._.BUMPER_LEFT
                    ? this.setState({
                        activeIndex: Math.max(0, this.state.activeIndex - 1),
                      })
                    : _ === _._.BUMPER_RIGHT &&
                      this.setState({
                        activeIndex: Math.min(
                          _.length - 1,
                          this.state.activeIndex + 1,
                        ),
                      });
                }
              : void 0;
          return _.createElement(
            _._,
            {
              className: _.Picker,
              onButtonDown: _,
            },
            _ && _.createElement(_, null, this.RenderTabs()),
            _,
          );
        }
        RenderTabs() {
          return this.props.config.map(({ renderTab: _ }, _) => {
            const _ = this.state.activeIndex === _;
            return _.createElement(
              _,
              {
                key: _,
                active: _,
                onClick: () =>
                  this.setState({
                    activeIndex: _,
                  }),
              },
              _(_),
            );
          });
        }
      }
      function _(_) {
        return _.createElement(
          _._,
          {
            className: _.Tabs,
            "flow-children": "row",
          },
          _.children,
        );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.Content,
          },
          _.children,
        );
      }
      function _(_) {
        const { active: _, children: __webpack_require__, onClick: _ } = _;
        return _.createElement(
          _._,
          {
            className: (0, _._)(_.Tab, _ && _.Active),
            focusClassName: _.Focus,
            onActivate: _,
          },
          _.createElement(
            "div",
            {
              className: (0, _._)(_.TabContent, _ && _.Active),
            },
            __webpack_require__,
          ),
        );
      }
      function _(_) {
        const {
          items: _,
          renderItem: __webpack_require__,
          onItemSelect: _,
          keyExtractor: _,
          renderEmpty: _,
        } = _;
        let _ = _.map((_, _) =>
          _.createElement(
            _._,
            {
              key: _(_),
              className: _.Item,
              onActivate: () => _(_[_]),
              autoFocus: 0 === _,
              focusClassName: _.Focus,
            },
            __webpack_require__(_[_]),
          ),
        );
        return (
          0 === _.length && _ && (_ = _()),
          _.createElement(
            _._,
            {
              "flow-children": "grid",
              className: _.ItemList,
            },
            _,
          )
        );
      }
      function _(_) {
        const {
          title: _,
          onFilterChange: __webpack_require__,
          filter: _,
          onSubmit: _,
          ..._
        } = _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _,
            null,
            _.createElement(
              _,
              {
                title: _,
              },
              _.createElement(_, {
                ..._,
              }),
            ),
          ),
          _.createElement(_, {
            value: _,
            onChange: __webpack_require__,
            onSubmit: _,
          }),
        );
      }
      function _(_) {
        const {
          onFilterChange: _,
          filter: __webpack_require__,
          sections: _,
          title: _,
        } = _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _,
            null,
            _ &&
              _.createElement(
                "div",
                {
                  className: _.SectionedPageTitle,
                },
                _,
              ),
            _.map(({ title: _, ..._ }) =>
              _.createElement(
                _,
                {
                  title: _,
                  key: _,
                },
                _.createElement(_, {
                  ..._,
                }),
              ),
            ),
          ),
          _.createElement(_, {
            value: __webpack_require__,
            onChange: _,
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.Section,
          },
          _.createElement(
            "div",
            {
              className: _.SectionTitle,
            },
            _.title,
          ),
          _.createElement(
            "div",
            {
              className: _.SectionContent,
            },
            _.children,
          ),
        );
      }
      function _(_) {
        const { value: _, onChange: __webpack_require__, onSubmit: _ } = _;
        return _.createElement(
          "div",
          {
            className: _.FilterInputContainer,
          },
          _.createElement(_._, {
            type: "text",
            placeholder: (0, _._)("#AddonPicker_Search"),
            className: _.FilterInput,
            value: _,
            onChange: (_) => __webpack_require__(_.target.value),
            onSubmit: _,
          }),
        );
      }
      function _(_) {
        const { className: _, ...__webpack_require__ } = _;
        return _.createElement("div", {
          className: (0, _._)(_, _.AddonPickerMessage),
          ...__webpack_require__,
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _.recent_emoticons;
      }
      function _(_) {
        return _.recent_stickers;
      }
      function _(_) {
        return _(_).length + _(_).length > 0;
      }
      const _ = (0, _._)((_) => {
        const {
          emoticonStore: _,
          roomEffectSettings: __webpack_require__,
          strFlairGroupID: _,
          onEmoticonSelected: _,
          onRoomEffectSelected: _,
          onStickerSelected: _,
        } = _;
        !(function (_) {
          const [_, __webpack_require__] = (0, _.useState)(_.is_initialized);
          (0, _.useEffect)(() => {
            if (!_.is_initialized) {
              _.UpdateEmoticonList();
              const _ = (0, _._)(
                () => _.is_initialized,
                () => __webpack_require__(_.is_initialized),
              );
              return () => _();
            }
            return () => {};
          }, [_]);
        })(_);
        const _ = [];
        return (
          _(_) &&
            _.push({
              renderTab: (_) =>
                _.createElement(
                  "span",
                  {
                    title: (0, _._)("#AddonPicker_RecentlyUsed"),
                    className: (0, _._)(
                      _().PickerTab,
                      _().Clock,
                      _ && _().ActiveTab,
                    ),
                  },
                  _.createElement(_, null),
                ),
              renderContent: () =>
                _.createElement(_, {
                  store: _,
                  onEmoticonSelect: (_) => _(_.name),
                  onStickerSelect: (_) => _(_.name),
                  flairGroupID: _,
                }),
            }),
          _.createElement(
            _._,
            null,
            _.createElement(_, {
              config: [
                ..._,
                {
                  renderTab: (_) =>
                    _.createElement(
                      "span",
                      {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                      },
                      _.createElement(_, null),
                    ),
                  renderContent: () =>
                    _.createElement(_, {
                      store: _,
                      onItemSelect: (_) => _(_.name),
                      flairGroupID: _,
                    }),
                },
                {
                  renderTab: (_) =>
                    _.createElement(
                      "span",
                      {
                        title: (0, _._)("#AddonPicker_Stickers"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                      },
                      _.createElement(_, null),
                    ),
                  renderContent: () =>
                    _.createElement(_, {
                      store: _,
                      onItemSelect: (_) => _(_.name),
                    }),
                },
                {
                  renderTab: (_) =>
                    _.createElement(
                      "span",
                      {
                        title: (0, _._)("#AddonPicker_RoomEffects"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                      },
                      _.createElement(_, null),
                    ),
                  renderContent: () =>
                    _.createElement(_, {
                      store: _,
                      effectSettings: __webpack_require__,
                      onItemSelect: (_) => _(_.name),
                    }),
                },
              ],
            }),
          )
        );
      });
      let _ = class extends _.Component {
        m_disposeEmoticonStore;
        constructor(_) {
          super(_),
            (this.state = {
              strSearchText: "",
            });
          let _ = this.props.emoticonStore;
          _.is_initialized ||
            (_.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, _._)(
              () => _.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          const {
              emoticonStore: _,
              onEmoticonSelected: _,
              onStickerSelected: __webpack_require__,
              strFlairGroupID: _,
            } = this.props,
            _ = [];
          return (
            _(_) &&
              _.push({
                renderTab: (_) =>
                  _.createElement(
                    "span",
                    {
                      title: (0, _._)("#AddonPicker_RecentlyUsed"),
                      className: (0, _._)(
                        _().PickerTab,
                        _().Clock,
                        _ && _().ActiveTab,
                      ),
                    },
                    _.createElement(_, null),
                  ),
                renderContent: () =>
                  _.createElement(_, {
                    store: _,
                    onEmoticonSelect: (_) => _(_.name),
                    onStickerSelect: (_) => __webpack_require__(_.name),
                    flairGroupID: _,
                  }),
              }),
            _.createElement(
              _._,
              null,
              _.createElement(_, {
                config: [
                  ..._,
                  {
                    renderTab: (_) =>
                      _.createElement(
                        "span",
                        {
                          title: (0, _._)("#AddonPicker_Emoticons"),
                          className: (0, _._)(
                            _().PickerTab,
                            _ && _().ActiveTab,
                          ),
                        },
                        _.createElement(_, null),
                      ),
                    renderContent: () =>
                      _.createElement(_, {
                        store: _,
                        onItemSelect: (_) => _(_.name),
                        flairGroupID: _,
                      }),
                  },
                  {
                    renderTab: (_) =>
                      _.createElement(
                        "span",
                        {
                          title: (0, _._)("#AddonPicker_Stickers"),
                          className: (0, _._)(
                            _().PickerTab,
                            _ && _().ActiveTab,
                          ),
                        },
                        _.createElement(_, null),
                      ),
                    renderContent: () =>
                      _.createElement(_, {
                        store: _,
                        onItemSelect: (_) => __webpack_require__(_.name),
                      }),
                  },
                ],
              }),
            )
          );
        }
      };
      _ = (0, _._)([_._], _);
      class _ extends _.Component {
        m_disposeEmoticonStore;
        constructor(_) {
          super(_),
            (this.state = {
              strSearchText: "",
            });
          let _ = this.props.emoticonStore;
          _.is_initialized ||
            (_.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, _._)(
              () => _.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return _.createElement(
            _._,
            null,
            _.createElement(_, {
              config: [
                {
                  renderTab: () =>
                    _.createElement(
                      "span",
                      {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: _().PickerTab,
                      },
                      _.createElement(_, null),
                    ),
                  renderContent: () =>
                    _.createElement(_, {
                      store: this.props.emoticonStore,
                      onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class _ extends _.Component {
        m_disposeEmoticonStore;
        constructor(_) {
          super(_),
            (this.state = {
              strSearchText: "",
            });
          let _ = this.props.emoticonStore;
          _.is_initialized ||
            (_.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, _._)(
              () => _.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return _.createElement(
            _._,
            null,
            _.createElement(_, {
              config: [
                {
                  renderTab: () =>
                    _.createElement(
                      "span",
                      {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: _().PickerTab,
                      },
                      _.createElement(_, null),
                    ),
                  renderContent: () =>
                    _.createElement(_, {
                      store: this.props.emoticonStore,
                      onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class _ extends _.Component {
        state = {
          filter: "",
        };
        render() {
          const {
              store: _,
              onEmoticonSelect: _,
              onStickerSelect: __webpack_require__,
            } = this.props,
            { filter: _ } = this.state,
            _ = [];
          return (
            _(_) &&
              _.push({
                title: (0, _._)("#AddonPicker_RecentEmoticons"),
                items: _._.FilterEmoticons(_(_), _),
                onItemSelect: _,
                renderItem: (_) =>
                  _.createElement(_, {
                    emoticon: _,
                  }),
                keyExtractor: (_) => _.name,
                renderEmpty: () =>
                  _.createElement(
                    _,
                    null,
                    _
                      ? (0, _._)("#AddonPicker_NoResults")
                      : (0, _._)(
                          "#AddonPicker_NoRecent",
                          (0, _._)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            _(_).length &&
              _.push({
                title: (0, _._)("#AddonPicker_RecentStickers"),
                items: _._.FilterStickers(_(_), _),
                onItemSelect: __webpack_require__,
                renderItem: (_) =>
                  _.createElement(_, {
                    sticker: _,
                  }),
                keyExtractor: ({ name: _ }) => _,
                renderEmpty: () =>
                  _.createElement(
                    _,
                    null,
                    _
                      ? (0, _._)("#AddonPicker_NoResults")
                      : (0, _._)(
                          "#AddonPicker_NoRecent",
                          (0, _._)("#AddonPicker_Stickers"),
                        ),
                  ),
              }),
            _.createElement(_, {
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              sections: _,
            })
          );
        }
      }
      class _ extends _.Component {
        state = {
          filter: "",
        };
        render() {
          const {
              store: _,
              onItemSelect: _,
              flairGroupID: __webpack_require__,
            } = this.props,
            { filter: _ } = this.state,
            _ =
              !_ && __webpack_require__
                ? _.GetFlairListByGroupID(__webpack_require__)
                : _.emoticon_list,
            _ = _._.FilterEmoticons(_, _).slice(0, 1e3);
          return _.createElement(_, {
            title: (0, _._)("#AddonPicker_Emoticons"),
            items: _,
            onItemSelect: _,
            renderItem: (_) =>
              _.createElement(_, {
                emoticon: _,
              }),
            keyExtractor: (_) => _.name,
            onFilterChange: (_) =>
              this.setState({
                filter: _,
              }),
            filter: _,
            onSubmit: () => _(_[0]),
            renderEmpty: () =>
              _
                ? _.createElement(_, null, (0, _._)("#AddonPicker_NoResults"))
                : _.createElement(_, null),
          });
        }
      }
      function _() {
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _,
            null,
            (0, _._)(
              "#AddonPicker_NoneOwned",
              (0, _._)("#AddonPicker_Emoticons"),
            ),
          ),
          _.createElement(
            _,
            null,
            (0, _._)(
              "#AddonPicker_AcquireAtPointsShopOrMarket",
              _.createElement(
                _._,
                {
                  href: `${_._.STORE_BASE_URL}points/shop/c/emoticons`,
                },
                (0, _._)("#AddonPicker_AcquireAtPointsShop_Link"),
              ),
              _.createElement(
                _._,
                {
                  href: `${_._.COMMUNITY_BASE_URL}market`,
                },
                (0, _._)("#AddonPicker_AcquireAtPointsShopOrMarket_Link"),
              ),
            ),
          ),
        );
      }
      class _ extends _.Component {
        state = {
          filter: "",
        };
        render() {
          const { store: _, onItemSelect: _ } = this.props,
            { filter: __webpack_require__ } = this.state,
            _ = _._.FilterStickers(_.GetStickerList(), __webpack_require__);
          return _.createElement(_, {
            title: (0, _._)("#EmoticonPicker_StickerHeading"),
            items: _,
            onItemSelect: _,
            renderItem: (_) =>
              _.createElement(_, {
                sticker: _,
              }),
            keyExtractor: ({ name: _ }) => _,
            onFilterChange: (_) =>
              this.setState({
                filter: _,
              }),
            filter: __webpack_require__,
            onSubmit: () => _(_[0]),
            renderEmpty: () =>
              __webpack_require__
                ? _.createElement(_, null, (0, _._)("#AddonPicker_NoResults"))
                : _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(
                      _,
                      null,
                      (0, _._)(
                        "#AddonPicker_NoneOwned",
                        (0, _._)("#AddonPicker_Stickers"),
                      ),
                    ),
                    _.createElement(
                      _,
                      null,
                      (0, _._)(
                        "#AddonPicker_AcquireAtPointsShop",
                        _.createElement(
                          _._,
                          {
                            href: `${_._.STORE_BASE_URL}points/shop/c/stickers`,
                          },
                          (0, _._)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      class _ extends _.Component {
        state = {
          filter: "",
        };
        render() {
          const {
              store: _,
              effectSettings: _,
              onItemSelect: __webpack_require__,
            } = this.props,
            { filter: _ } = this.state,
            _ = _.GetEffectList().filter(({ name: _ }) => _.indexOf(_) > -1);
          return _.createElement(_, {
            title: (0, _._)("#EmoticonPicker_EffectHeading"),
            items: _,
            onItemSelect: __webpack_require__,
            renderItem: (_) =>
              _.createElement(_, {
                effect: _,
                roomEffectSettings: _,
              }),
            keyExtractor: ({ name: _ }) => _,
            onFilterChange: (_) =>
              this.setState({
                filter: _,
              }),
            filter: _,
            onSubmit: () => __webpack_require__(_[0]),
            renderEmpty: () =>
              _
                ? _.createElement(_, null, (0, _._)("#AddonPicker_NoResults"))
                : _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(
                      _,
                      null,
                      (0, _._)(
                        "#AddonPicker_NoneOwned",
                        (0, _._)("#AddonPicker_RoomEffects"),
                      ),
                    ),
                    _.createElement(
                      _,
                      null,
                      (0, _._)(
                        "#AddonPicker_AcquireAtPointsShop",
                        _.createElement(
                          _._,
                          {
                            href: `${_._.STORE_BASE_URL}points/shop/c/chateffects`,
                          },
                          (0, _._)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      let _ = class extends _.Component {
        state = {
          filter: "",
        };
        render() {
          const {
              store: _,
              onItemSelect: _,
              flairGroupID: __webpack_require__,
            } = this.props,
            { filter: _ } = this.state,
            _ = [];
          return (
            _(_).length &&
              _.push({
                title: (0, _._)("#AddonPicker_RecentEmoticons"),
                items: _._.FilterEmoticons(_(_), _),
                onItemSelect: _,
                renderItem: (_) =>
                  _.createElement(_, {
                    emoticon: _,
                  }),
                keyExtractor: (_) => _.name,
                renderEmpty: () =>
                  _.createElement(
                    _,
                    null,
                    _
                      ? (0, _._)("#AddonPicker_NoResults")
                      : (0, _._)(
                          "#AddonPicker_NoRecent",
                          (0, _._)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            _.createElement(_, {
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              sections: [
                ..._,
                {
                  title: (0, _._)("#AddonPicker_AllEmoticons"),
                  items: _._.FilterStickers(_.emoticon_list, _).slice(0, 1e3),
                  onItemSelect: _,
                  renderItem: (_) =>
                    _.createElement(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    _
                      ? _.createElement(
                          _,
                          null,
                          (0, _._)("#AddonPicker_NoResults"),
                        )
                      : _.createElement(_, null),
                },
              ],
            })
          );
        }
      };
      _ = (0, _._)([_._], _);
      let _ = class extends _.Component {
        state = {
          filter: "",
        };
        render() {
          const {
              store: _,
              onItemSelect: _,
              flairGroupID: __webpack_require__,
            } = this.props,
            { filter: _ } = this.state;
          return _.createElement(_, {
            onFilterChange: (_) =>
              this.setState({
                filter: _,
              }),
            filter: _,
            sections: [
              {
                title: (0, _._)("#ChatEntryButton_Flair"),
                items: _._.FilterStickers(
                  _.GetFlairListByGroupID(__webpack_require__),
                  _,
                ),
                onItemSelect: _,
                renderItem: (_) =>
                  _.createElement(_, {
                    emoticon: _,
                  }),
                keyExtractor: (_) => _.name,
                renderEmpty: () =>
                  _
                    ? _.createElement(
                        _,
                        null,
                        (0, _._)("#AddonPicker_NoResults"),
                      )
                    : _.createElement(_, null),
              },
            ],
          });
        }
      };
      _ = (0, _._)([_._], _);
      const _ = (_) => {
        const { emoticon: _, large: __webpack_require__ } = _,
          _ = !_.last_used && _.time_received;
        return _.createElement(
          "div",
          {
            className: _().EmoticonItem,
          },
          _.createElement(_._, {
            emoticon: _.name,
            large: __webpack_require__,
          }),
          _ && _.createElement(_, null),
        );
      };
      class _ extends _.Component {
        state = {
          showHover: !1,
        };
        m_ref = _.createRef();
        render() {
          const {
              sticker: _,
              className: _,
              ...__webpack_require__
            } = this.props,
            _ = _(_._.COMMUNITY_CDN_URL, _.name);
          return _.createElement(
            "div",
            {
              ref: this.m_ref,
              className: (0, _._)(_, _().StickerButton),
              onMouseOver: () =>
                this.setState({
                  showHover: !0,
                }),
              onFocus: () =>
                this.setState({
                  showHover: !0,
                }),
              onMouseLeave: () =>
                this.setState({
                  showHover: !1,
                }),
              onBlur: () =>
                this.setState({
                  showHover: !1,
                }),
              ...__webpack_require__,
            },
            _.createElement("img", {
              style: {
                width: "100%",
              },
              src: _,
            }),
            this.state.showHover &&
              _.createElement(_, {
                target: this.m_ref.current,
                sticker: _,
              }),
          );
        }
      }
      const _ = (0, _._)((_) => {
        const {
            target: _,
            sticker: { name: __webpack_require__, appid: _ },
          } = _,
          [_] = (0, _._)(_, {});
        return _.createElement(
          _._,
          {
            target: _,
            title: __webpack_require__,
            subtitle: _?.GetName(),
          },
          _.createElement("img", {
            src: _(_._.COMMUNITY_CDN_URL, __webpack_require__),
            className: _().StickerHoverSticker,
          }),
        );
      });
      class _ extends _.Component {
        state = {
          showHover: !1,
        };
        m_ref = _.createRef();
        render() {
          const {
              effect: _,
              roomEffectSettings: _,
              className: __webpack_require__,
              ..._
            } = this.props,
            _ = _[_.name];
          return _.createElement(
            "div",
            {
              ref: this.m_ref,
              onMouseOver: () =>
                this.setState({
                  showHover: !0,
                }),
              onFocus: () =>
                this.setState({
                  showHover: !0,
                }),
              onMouseLeave: () =>
                this.setState({
                  showHover: !1,
                }),
              onBlur: () =>
                this.setState({
                  showHover: !1,
                }),
              className: (0, _._)(__webpack_require__, _().EffectButton),
              ..._,
            },
            _.renderEffectIcon(),
            this.state.showHover &&
              _.createElement(_, {
                target: this.m_ref.current,
                effect: _,
                roomEffectSettings: _,
              }),
          );
        }
      }
      const _ = (0, _._)((_) => {
        const {
            target: _,
            effect: { name: __webpack_require__, appid: _ },
            roomEffectSettings: _,
          } = _,
          _ = _[__webpack_require__],
          [_] = (0, _._)(_, {});
        return _.createElement(
          _._,
          {
            target: _,
            title: __webpack_require__,
            subtitle: _?.GetName(),
          },
          _.createElement(
            "div",
            {
              className: _().EffectHoverEffect,
            },
            _.renderEffectIcon(),
          ),
        );
      });
      function _() {
        return _.createElement(
          "div",
          {
            className: _().NewEmoticonIndicator,
          },
          _.createElement("div", {
            className: _().NewEmoticonCircle,
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            _: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M21 29H22.1875V31H19L21 29Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M29 22.1875V21L31 19V22.1875H29Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            _: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
          }),
        );
      }
      function _(_) {
        const { className: _, ...__webpack_require__ } = _;
        return _.createElement(
          "svg",
          {
            className: (0, _._)("SVGIcon_Button SVGIcon_Clock", _),
            version: "1.1",
            _: "0px",
            _: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...__webpack_require__,
          },
          _.createElement("path", {
            _: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          }),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        __webpack_require__._ +
        "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);

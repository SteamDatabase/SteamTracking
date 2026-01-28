(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
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
        bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    chunkid: (module) => {
      module.exports = {
        CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
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
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _._)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const _ = `${_._.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              _ = await _().get(_);
            return 200 == _?.status && 1 == _.data?.success
              ? _.data.admins
              : (console.error("ValveAccounts:", _?.status), []);
          },
        });
        return _.isLoading ? null : _.data;
      }
      function _(_) {
        const _ = _();
        return _?.find((_) => _._ == _);
      }
      function _(_, _) {
        const _ = _.getQueryData(["useValveAccounts"]);
        return __webpack_require__?.find((_) => _._ === _);
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return 2 == _._.EUNIVERSE ? 12 : 1;
      }
      class _ {
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
                sessionid: _._.SESSIONID,
                searchtext: _,
                origin: self.origin,
              },
              _ = await _().get(_, {
                params: _,
              });
            200 == _?.status && 1 == _?.data?.success
              ? _.data.publishers.forEach((_) => {
                  const _ = {
                    partnerid: _.publisherid,
                    name: _.publishername,
                    partner_url:
                      _._.PARTNER_BASE_URL + `pub/publisher/${_.publisherid}/`,
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
          await this.FindPartnerByName("" + _);
          return (
            this.BHasPartnerInfoLoad(_) ||
              this.m_mapOptInToPartners.set(_, null),
            this.m_mapOptInToPartners.get(_)
          );
        }
        async LoadMultiplePartnerInfo(_) {
          if (!_ || 0 == _.length) return [];
          const _ = _.filter((_) => !this.m_mapOptInToPartners.has(_));
          return (
            _.length > 0 && (await this.FindPartnerByName("" + _.join(","))),
            _.map((_) => this.m_mapOptInToPartners.get(_)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          let _ = JSON.parse(
            JSON.stringify((0, _._)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(_) &&
            (_.forEach((_) => this.m_mapOptInToPartners.set(_.partnerid, _)),
            "dev" == _._.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", _));
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].partnerid &&
            "string" == typeof _[0].name
          );
        }
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(!1);
        return (
          (0, _.useEffect)(() => {
            !_ &&
              _?.length > 0 &&
              _.Get()
                .LoadMultiplePartnerInfo(_)
                .then(() => __webpack_require__(!0));
          }, [_, _]),
          _
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(() =>
          _.Get().GetPartnerInfo(_),
        );
        return (
          _.useEffect(() => {
            !_.Get().BHasPartnerInfoLoad(_) && _ > 0
              ? _.Get()
                  .LoadPartnerInfo(_)
                  .then((_) => __webpack_require__(_))
              : _.Get().BHasPartnerInfoLoad(_) &&
                _?.partnerid != _ &&
                __webpack_require__(_.Get().GetPartnerInfo(_));
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
      (0, _._)([_._], _.prototype, "FindPartnerByName", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      class _ {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(_, _) {
          _ instanceof Map
            ? (this.m_dictComponents = _)
            : (this.m_dictComponents = new Map(Object.entries(_))),
            (this.m_fnAccumulatorFactory = _);
        }
        Parse(_, _, __webpack_require__ = !0) {
          const _ = (function (_, _) {
            const _ = [];
            let _ = {
                type: 0,
                text: "",
              },
              _ = !1,
              _ = !1,
              _ = !1;
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_];
              switch (_.type) {
                case 0:
                  "[" == _
                    ? ((_.type = 2), (_ = !0))
                    : ((_.type = 1), "\\" == _ && _ ? (_ = !_) : (_.text += _));
                  break;
                case 2:
                case 3:
                  if ("/" == _ && _) (_.type = 3), (_.text = ""), (_ = !1);
                  else if ("[" != _ || _)
                    if ("]" != _ || _)
                      "\\" == _ && _
                        ? ((_.text += _), (_ = !_), (_ = !1))
                        : ((_.text += _), (_ = !1), (_ = !1));
                    else {
                      const _ =
                          2 == _.type &&
                          "noparse" == _.text?.toLocaleLowerCase(),
                        _ =
                          3 == _.type &&
                          "noparse" == _.text?.toLocaleLowerCase();
                      _ || (_ && !_)
                        ? ((_ = _(_)), (_.text += _))
                        : _
                          ? (_ = !0)
                          : _ && (_ = !1),
                        (_ = _(_, _)),
                        (_ = !1);
                    }
                  else (_ = _(_, _(_), 2)), (_ = !0);
                  break;
                case 1:
                  "[" != _ || _
                    ? "\\" == _ && _
                      ? (_ && (_.text += _), (_ = !_))
                      : ((_.text += _), (_ = !1))
                    : ((_ = _(_, _, 2)), (_ = !0));
              }
            }
            0 != _.type &&
              (2 == _.type || 3 == _.type
                ? __webpack_require__.push(_(_))
                : __webpack_require__.push({
                    type: _.type,
                    text: _.text ?? "",
                  }));
            return _;
          })(_ || "", __webpack_require__);
          return this.Parse_BuildElements(_, _);
        }
        Parse_BuildElements(_, _) {
          let _ = this.m_fnAccumulatorFactory(void 0);
          const _ = [],
            _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
            _ = this.m_dictComponents,
            _ = (_) => !(!_.tag || !_.get(_.tag)?.autocloses);
          let _ = !1,
            _ = !0;
          const _ = (_, _) => {
            if (_ && _.node.tag === _.text && _.get(_.node.tag)) {
              const _ = _.get(_.node.tag),
                _ = {
                  tagname: _.node.tag,
                  args: _.node.args,
                  rawargs: _.node.rawargs,
                },
                _ = _(_.Constructor, _, ...__webpack_require__.GetElements());
              (_ = _.accumulator),
                Array.isArray(_)
                  ? _.forEach((_) => __webpack_require__.AppendNode(_))
                  : __webpack_require__.AppendNode(_),
                (_ = !!_.skipFollowingNewline),
                (_ = _.bWrapTextForCopying);
            } else if (_) {
              const _ = _.accumulator;
              _.AppendText("[" + _.node.text + "]", !1),
                __webpack_require__
                  .GetElements()
                  .forEach((_) => _.AppendNode(_)),
                _.AppendText("[/" + _.text + "]", !1),
                (_ = _),
                (_ = _.bWrapTextForCopying);
            }
          };
          for (
            _.forEach((_, _) => {
              if (1 == _.type) {
                const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                __webpack_require__.AppendText(_, _), (_ = !1);
              } else if (2 == _.type) {
                const _ = _.get(_.tag);
                if (_) {
                  const _ = _();
                  if (void 0 !== _) {
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
                } else
                  __webpack_require__.AppendText(
                    "[" + _.text + "]",
                    0 == _.length,
                  );
              } else if (3 == _.type) {
                for (; _() && _().node.tag !== _.text && _(_().node); ) {
                  const _ = _.pop();
                  _(_, _.node);
                }
                if (_()?.node.tag == _.text) {
                  const _ = _.pop();
                  _(_, _);
                } else
                  __webpack_require__.AppendText(
                    "[/" + _.text + "]",
                    0 == _.length,
                  );
              }
            });
            _.length > 0;
          ) {
            const _ = _.pop();
            _(_, _.node);
          }
          return __webpack_require__.GetElements();
        }
      }
      function _(_, _) {
        let _ = "[" + _;
        _?.[""] && (_ += `=${_("" + _[""])}`);
        for (const _ in _)
          "" !== _ &&
            (_ += ` ${((_ = _), _.replace(/(\\| |\])/g, "\\$1"))}=${_("" + _[_])}`);
        var _;
        return (_ += "]"), _;
      }
      function _(_) {
        return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function _(_) {
        return `[/${_}]`;
      }
      function _(_) {
        return _.replace(/(\\|\[)/g, "\\$1");
      }
      function _(_, _, __webpack_require__ = 0) {
        const { type: _, text: _ = "" } = _;
        if (2 == _) {
          let _ = _.indexOf("=");
          const _ = _.indexOf(" ");
          let _, _;
          -1 != _ && (-1 == _ || _ < _) && (_ = _);
          let _ = "";
          _ > 0
            ? ((_ = _.substr(0, _).toLocaleLowerCase()),
              (_ = _.substr(_)),
              (_ = (function (_) {
                if (!_ || _.length < 1) return {};
                const _ = {};
                let _ = "",
                  _ = "",
                  _ = 0,
                  _ = 0;
                "=" == _[0] && (_ = 2);
                let _ = !1;
                for (_++; _ < _.length; _++) {
                  const _ = _[_];
                  let _ = !0,
                    _ = !1;
                  switch (_) {
                    case 0:
                      if ("=" == _) return {};
                      if (" " == _) continue;
                      _ = 1;
                      break;
                    case 1:
                      ("=" != _ && " " != _) ||
                        _ ||
                        (" " == _ ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                      break;
                    case 2:
                      " " == _
                        ? ((_ = 0), (_ = !1), (_ = !0))
                        : '"' == _
                          ? ((_ = 4), (_ = !1))
                          : (_ = 3);
                      break;
                    case 3:
                    case 4:
                      ((" " == _ && 4 != _ && !_) ||
                        ('"' == _ && 4 == _ && !_)) &&
                        ((_ = 0), (_ = !1), (_ = !0));
                  }
                  if (_)
                    if ("\\" != _ || _)
                      if (((_ = !1), 1 == _)) _ += _;
                      else {
                        if (3 != _ && 4 != _)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + _,
                          );
                        _ += _;
                      }
                    else _ = !0;
                  _ && ((_[_] = _), (_ = ""), (_ = ""));
                }
                0 != _ && (_[_] = _);
                return _;
              })(_)))
            : ((_ = {}), (_ = _.toLocaleLowerCase())),
            _.push({
              type: _,
              text: _,
              tag: _,
              args: _,
              rawargs: _,
            });
        } else
          0 != _ &&
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
          3 == _.type ? (_ = "[/") : 2 == _.type && (_ = "["),
          {
            type: 1,
            text: _ + (_.text ?? ""),
          }
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
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (0, _._)(
          (_) => {
            if (!_) return;
            const _ = _(_.ownerDocument.defaultView, (_) => {
              _(_[0]);
            });
            return _.observe(_), () => _.unobserve(_);
          },
          [_, _],
        );
      }
      function _(_) {
        return _(
          _,
          _.useCallback(
            (_, _) =>
              _.ResizeObserver
                ? new _.ResizeObserver(_)
                : ((0, _._)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          ),
        );
      }
      function _(_, _) {
        const _ = _.useRef(void 0);
        return (function (_, _) {
          return _(
            _,
            _.useCallback((_, _) => new _.IntersectionObserver(_, _), [_]),
          );
        })((_) => {
          !_.current && _.isIntersecting && _.onEnter?.(_),
            _.current && !_.isIntersecting && _.onLeave?.(_),
            _.onIntersectionChange?.(_),
            (_.current = _.isIntersecting);
        }, _);
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
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            _: _,
            imageType: __webpack_require__,
            bPreferAssetWithoutOverride: _,
          } = _,
          { storeItemAsset: _, storeItemDefaultInfo: _ } = (0, _._)(
            _,
            __webpack_require__,
            _,
          );
        if (void 0 === _ || !_)
          return _.createElement(_._, {
            size: "small",
            position: "center",
            string: (0, _._)("#Loading"),
          });
        if (null == _) return null;
        if (
          "library" === __webpack_require__ ||
          "vertical" == __webpack_require__
        )
          return _.createElement(_._, {
            _: _,
            bPreferAssetWithoutOverride: _,
          });
        let _,
          _,
          _ = (0, _._)(_, "header" === __webpack_require__),
          _ = "";
        if ("main" === __webpack_require__)
          (_ = _().mainCapsuleImgWidth),
            (_ = _().mainCapsuleImgHeight),
            (_ = _().MainCapsuleImageContainer);
        else
          (_ = _().headerCapsuleImgWidth),
            (_ = _().headerCapsuleImgHeight),
            (_ = _().HeaderCapsuleImageContainer);
        return _.createElement(
          "div",
          {
            className: (0, _._)(_, "CapsuleImageCtn"),
          },
          _.createElement(_._, {
            lazyLoad: !0,
            srcs: _,
            className: (0, _._)(_().CapsuleImage),
            width: _,
            height: _,
            alt: _.name,
          }),
        );
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
        return (
          _ &&
            (function (_, _, _) {
              _
                ? _.push((0, _._)(_, "header"), (0, _._)(_, "main_capsule"))
                : _.push((0, _._)(_, "main_capsule"), (0, _._)(_, "header"));
            })(_, _, _),
          __webpack_require__.filter((_) => !!_)
        );
      }
      function _(_, _) {
        return {
          strStoreVerticalURL: (0, _._)(_, "hero_capsule"),
          strLibraryVerticalURL: (0, _._)(_, "library_capsule"),
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            _: _,
            bPreferLibrary: __webpack_require__,
            bPreferAssetWithoutOverride: _,
          } = _,
          { storeItemDefaultInfo: _, storeItemAsset: _ } = (0, _._)(
            _,
            "vertical",
            _,
          ),
          [_, _] = _.useState(0);
        if (!_ || !_)
          return _.createElement("div", {
            className: _().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = (0, _._)(
          _,
          _,
        );
        if (_ && (!__webpack_require__ || !_))
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
            },
            _.createElement("img", {
              src: _,
              className: _().CapsuleImage,
              alt: _.name,
            }),
            Boolean(4 == _.type) &&
              _.createElement("img", {
                className: _().CornerSash,
                src: `${_._.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                alt: "DLC",
              }),
          );
        if (_)
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _().LibraryFallbackAssetImageContainer,
                _().VerticalCapsule,
                __webpack_require__ ? _().ForceLibrarySizing : "",
              ),
            },
            _.createElement("div", {
              className: _().FallbackBackground,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
            _.createElement("img", {
              src: _,
              className: _().CapsuleImage,
              alt: _.name,
            }),
          );
        const _ = (0, _._)(_, !0),
          _ = _.length - 1,
          _ = (_) => {
            const _ = _.indexOf(_);
            _ >= _ && _ < _.length - 1 && _(_ + 1);
          };
        if (_ < _.length) {
          const _ = _[_];
          return _.createElement(
            "div",
            {
              className: _().LibraryFallbackAssetImageContainer,
            },
            _.createElement("div", {
              className: _().FallbackBackground,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
            _.createElement(_._, {
              lazyLoad: !0,
              srcs: _,
              className: _().CapsuleImage,
              alt: _.name,
              onImageError: _,
            }),
          );
        }
        return _.createElement("div", {
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
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
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
            hoverClassName: __webpack_require__,
            fnGetIDOverride: _,
            fnHoverState: _,
            children: _,
          } = _,
          _ = _.useRef(null),
          _ = _.useCallback(
            (_) => {
              const _ = _(_);
              _ &&
                (_ && _(!0),
                window.GameHover &&
                  window.GameHover(_ ? _() : _.current, _, "global_hover", {
                    type: _,
                    _: (0, _._)(_)._,
                    _: 1,
                  }));
            },
            [_, _, _],
          ),
          _ = _.useCallback(
            (_) => {
              _(_) &&
                (_ && _.relatedTarget && _(!1),
                window.HideGameHover &&
                  window.HideGameHover(_ ? _() : _.current, _, "global_hover"));
            },
            [_, _, _],
          );
        return _.createElement(
          "div",
          {
            ref: _,
            className: __webpack_require__,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
          },
          _,
        );
      }
      function _(_) {
        const {
            _: _,
            strExtraParams: __webpack_require__,
            fnOnClickOverride: _,
            strOverrideURL: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)(
            _ ||
              (_ && "creatorid" in _
                ? (0, _._)(
                    `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${__webpack_require__ ? `?${__webpack_require__}` : ""}`,
                    _,
                    _,
                  )
                : (0, _._)(
                    `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${__webpack_require__ ? `?${__webpack_require__}` : ""}`,
                    _,
                    _,
                  )),
          );
        return _.createElement(
          _,
          {
            ..._,
          },
          _.createElement(
            _._,
            {
              className: _.className,
              href: _ ? void 0 : _,
              target: _._.IN_CLIENT || _ ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: _,
            },
            _.children,
          ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, __webpack_require__ = !1) {
        const { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_, __webpack_require__);
        let _;
        _ &&
          1 == _.included_appids?.length &&
          !(function (_, _) {
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
          })(_, _) &&
          _.item_type &&
          [1, 2].includes(_.item_type) &&
          (_ = {
            appid: _.included_appids[0],
          });
        const { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_, __webpack_require__),
          _ = _?.visible ? _ : _;
        return {
          storeItemAsset: _?.visible ? _ : _,
          storeItemDefaultInfo: _,
        };
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
        default_selection_priority = _.k_eGeneral;
        current_selection_priority = _.k_eGeneral;
      }
      (0, _._)([_._], _.prototype, "title", void 0),
        (0, _._)([_._], _.prototype, "viewer_count", void 0),
        (0, _._)([_._], _.prototype, "gamedata_subtitle", void 0),
        (0, _._)([_._], _.prototype, "current_selection_priority", void 0);
      const _ = "primary",
        _ = "featured",
        _ = "default_featured";
      var _;
      function _(_) {
        switch (_) {
          case _:
            return _.k_ePrimary;
          case _:
            return _.k_eFeatured;
          case _:
            return _.k_eDefaultFeatured;
          default:
            return _.k_eGeneral;
        }
      }
      function _(_) {
        const _ = _;
        return (
          !!(
            _ &&
            "number" == typeof _.success &&
            _.filtered &&
            Array.isArray(_.filtered) &&
            _.broadcast_chat_visibility
          ) &&
          (0 == _.filtered.length || "string" == typeof _.filtered[0].accountid)
        );
      }
      !(function (_) {
        (_[(_.k_ePrimary = 3)] = "k_ePrimary"),
          (_[(_.k_eFeatured = 2)] = "k_eFeatured"),
          (_[(_.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (_[(_.k_eGeneral = 0)] = "k_eGeneral");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        if (_[_]) {
          if ("community_icon" == _) {
            const _ = _.asset_url_format
              .replace(/^steam\//, "images/")
              .replace("${FILENAME}", `${_[_]}.jpg`)
              .replace(/\?.*$/, "");
            return `${_._.MEDIA_CDN_COMMUNITY_URL}${_}`;
          }
          {
            const _ = _.asset_url_format.replace("${FILENAME}", _[_]);
            return `${_._.STORE_ITEM_BASE_URL}${_}`;
          }
        }
      }
      function _(_, _ = "full") {
        let _ = "";
        switch (_) {
          case "thumb":
            _ = ".116x65";
            break;
          case "600x338":
            _ = ".600x338";
            break;
          case "1920x1080":
            _ = ".1920x1080";
            break;
          case "full":
            _ = "";
            break;
          default:
            (0, _._)(_, `Invalid size: ${_}`);
        }
        return (
          _._.STORE_ITEM_BASE_URL + _.filename.replace(/\.[^.*]$/, `${_}$&`)
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            appID: _,
            feature: __webpack_require__,
            depth: _,
            children: _,
          } = _,
          _ = (0, _._)(__webpack_require__, _),
          _ = _.useContext(_),
          [_, _] = _.useState(void 0),
          _ = _.useCallback(
            (_) => {
              _.isIntersecting &&
                _((_) =>
                  _?.appID == _ && _?.snr == _
                    ? _
                    : {
                        appID: _,
                        snr: _,
                      },
                );
            },
            [_, _],
          );
        (0, _.useEffect)(() => {
          _ && null != _.appID && _.AddImpression(_.appID, _.snr);
        }, [_, _]);
        const _ = (0, _._)(_),
          _ = _ && (!_ || (_.appID != _ && _.snr != _)),
          _ = (0, _._)(_.props.ref, _ ? _ : void 0);
        return _.cloneElement(_, {
          ref: _,
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _ = !1) {
        if (_)
          return _ && (0, _._)(_)
            ? `${_._.STORE_BASE_URL}app/${((0, _._))(_)[0]}`
            : `${_._.STORE_BASE_URL}${_.store_url_path}`;
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
        _ = __webpack_require__("chunkid");
      class _ {
        m_eCurLang = (0, _._)(_._.LANGUAGE);
        m_rgHasData = (0, _._)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new _._();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(_) {
          return (
            this.m_eCurLang != _ &&
            ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
          );
        }
        SetHasLanguage(_) {
          _.forEach((_, _) => {
            this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
          });
        }
        BHasLanguageData(_) {
          return this.m_rgHasData[_];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(_) {
          _ != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = _);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.DUS = _.s_globalSingletonStore)),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          (0, _._)(this);
        }
      }
      function _() {
        return (0, _._)(() => _.Get().GetCurEditLanguage());
      }
      (0, _._)([_._], _.prototype, "m_eCurLang", void 0),
        (0, _._)([_._], _.prototype, "m_rgHasData", void 0),
        (0, _._)([_._], _.prototype, "m_bHasLocalizationContext", void 0),
        (0, _._)([_._], _.prototype, "GetCurEditLanguage", null),
        (0, _._)([_._], _.prototype, "SetCurEditLanguage", null),
        (0, _._)([_._.bound], _.prototype, "SetHasLanguage", null),
        (0, _._)([_._], _.prototype, "BHasLanguageData", null);
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
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        Init() {
          const _ = (0, _._)("promotion_operation_token", "application_config");
          (0, _._)(Boolean(_), "require promotion_operation_token"),
            (this.m_steamInterface = new _._(_._.WEBAPI_BASE_URL, _));
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
        _ = __webpack_require__("chunkid");
      const _ = "nicknames";
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = new Map();
              if (_._.logged_in) {
                const _ = _._.Init(_._),
                  _ = (await _._.GetNicknameList(_, _)).Body().toObject();
                _?.nicknames &&
                  _.nicknames.length > 0 &&
                  _.nicknames.forEach((_) => {
                    _.set(_.accountid, _.nickname);
                  });
              }
              return _;
            },
          });
        return __webpack_require__ ? __webpack_require__.get(_) : null;
      }
      const _ = new (_())(
          (_) =>
            (async function (_) {
              if (!_ || 0 == _.length) return [];
              const _ =
                "community" == (0, _._)()
                  ? _._.COMMUNITY_BASE_URL
                  : _._.STORE_BASE_URL;
              if (1 == _.length) {
                const _ = {
                    accountid: _[0],
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                return [_.data.userinfo];
              }
              {
                const _ = {
                    accountids: _.join(","),
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
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
            })(_),
          {
            cache: !1,
          },
        ),
        _ = "avatarandpersonas";
      function _(_) {
        const { data: _, isLoading: __webpack_require__ } = (0, _._)({
          queryKey: [_, _],
          queryFn: () => _.load(_),
        });
        return [_, __webpack_require__];
      }
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_, _],
            queryFn: async () => {
              const _ = await _.loadMany(_);
              return (
                __webpack_require__.forEach((_) => {
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
              __webpack_require__?.forEach((_) => {
                _ instanceof Error || _.push(_);
              }),
              _
            );
          }, [__webpack_require__]);
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
        _ = __webpack_require__("chunkid");
      let _ = class extends _.Component {
        GenerateLanguageOptions() {
          let _ = [];
          const {
            fnFilterLanguage: _,
            fnLangHasData: __webpack_require__,
            fnLastUpdateRTime: _,
            fnIsLangSupported: _,
          } = this.props;
          this.props.bAllowUnsetOption &&
            _.push(
              _.createElement(
                "option",
                {
                  key: "langpicker_unset",
                  value: -1,
                },
                (0, _._)("#language_selection_none"),
              ),
            );
          let _ = new Array();
          const _ = this.props.realms || [_._.k_ESteamRealmGlobal];
          for (const _ of _._.GetLanguageListForRealms(_)) {
            if (_ && !_(_)) continue;
            const _ = (0, _._)(_),
              _ = (0, _._)("#Language_" + _),
              _ = Boolean(_) && _(_);
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
                _.createElement(
                  "option",
                  {
                    key: _.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: _().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, _._)(
                    _.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (_ = _.bSupported));
            const _ = _ && __webpack_require__(_.eLang),
              _ = _ && _(_.eLang);
            let _ = _.sLocName;
            _ &&
              0 !== _ &&
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
                _.createElement(
                  "option",
                  {
                    key: "langpicker" + _.eLang + (_ ? "_hasdata" : ""),
                    value: _.eLang,
                    className: (0, _._)(
                      {
                        [_().LanguageWithContent]: _,
                      },
                      _.bSupported
                        ? _().SupportedLanguage
                        : _().UnsupportedLanguage,
                    ),
                  },
                  _,
                ),
              );
          }
          return _;
        }
        OnLanguageChange(_) {
          const { fnOnLanguageChanged: _, selectedLang: __webpack_require__ } =
            this.props;
          let _ = Number.parseInt(_.currentTarget.value);
          _ != __webpack_require__ && _ && _(_);
        }
        render() {
          const {
            selectedLang: _,
            bDisabled: _,
            strTooltip: __webpack_require__,
          } = this.props;
          let _ = this.GenerateLanguageOptions();
          return _.createElement(
            _._,
            {
              toolTipContent: __webpack_require__,
            },
            _.createElement(
              "select",
              {
                value: _,
                onChange: this.OnLanguageChange,
                disabled: _,
              },
              _,
            ),
          );
        }
      };
      function _(_) {
        const [_, __webpack_require__] = (0, _._)(() => [
          _._.Get().GetHasLocalizationContext(),
          _._.Get().GetCurEditLanguage(),
        ]);
        return _.createElement(_, {
          selectedLang: __webpack_require__,
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
          for (let _ = 0; _ < 31; ++_) _[_] = _ && _(_);
          return _;
        });
        return (
          _.useEffect(() => _._.Get().SetHasLanguage(_), [_]),
          _.createElement(_.Fragment, null)
        );
      }
      (0, _._)([_._], _.prototype, "OnLanguageChange", null),
        (_ = (0, _._)([_._], _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return _.createElement(
          "div",
          {
            className: _.bordered_live_stream_icon,
          },
          (0, _._)("#home_page_live_broadcast"),
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
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid"));
      function _() {
        return (0, _._)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const _ = await (async function () {
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
            })();
            return new Set(_);
          },
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            appids: _,
            hide_status_banners: __webpack_require__,
            show_early_access: _,
          } = _,
          { data: _ } = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = _.length > 0 && _.every((_) => _ && _.has(_)),
          _ = _.length > 0 && _.every((_) => _ && _.has(_)),
          _ = (function (_) {
            const { data: _ } = _(),
              [__webpack_require__, _] = (0, _.useState)(!1),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (!_ || 0 == _.length || !_) return _(!1);
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
                  _(
                    __webpack_require__.some(
                      (_) =>
                        (_ && _.appid && _.has(_.appid)) ||
                        (_?.related_items?.parent_appid &&
                          _.has(_.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [_, _, _, _]),
              __webpack_require__
            );
          })(_),
          _ = _ && !__webpack_require__,
          _ = _ && !__webpack_require__,
          _ = !__webpack_require__ && _;
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().CapsuleDecorators, "CapsuleDecorators"),
          },
          _ &&
            _.createElement(
              "span",
              {
                className: (0, _._)(_().Banner, _().Blue),
              },
              _.createElement("img", {
                src: (0, _._)(_),
                className: _().LinesImg,
              }),
              (0, _._)("#Sale_InLibrary"),
            ),
          _ &&
            _.createElement(
              "span",
              {
                className: _().Banner,
              },
              _.createElement(_.qnF, {
                className: _().LinesImg,
              }),
              (0, _._)("#Sale_OnWishlist"),
            ),
          _ &&
            !_ &&
            !_ &&
            _.createElement(_, {
              appids: _,
            }),
          _ && _.createElement(_._, null),
        );
      }
      function _(_) {
        const { appids: _ } = _,
          _ = (function (_) {
            const [_, _] = (0, _.useState)(!1),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (!_ || 0 == _.length) return __webpack_require__(!1);
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
                  __webpack_require__(_.some((_) => _ && _.is_early_access));
                })();
              }, [_, _, _]),
              _
            );
          })(_);
        return _
          ? _.createElement(
              "span",
              {
                className: (0, _._)(_().Banner, _().EarlyAccessGradient),
              },
              (0, _._)("#Sale_EarlyAccess"),
            )
          : null;
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
        if (!(0, _._)(_.item_type))
          return void (0, _._)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + _.item_type,
          );
        const _ = (0, _._)(`${(0, _._)(_, _)}${_ ? `?${_}` : ""}`, _);
        return {
          onClick: (_) => {
            let _ = (0, _._)(_) || window;
            _
              ? _(_)
              : _.startsWith("steam://") || (_.location.href = (0, _._)(_));
          },
          onOKActionDescription: (0, _._)("#Sale_Gamepad_Action_Select"),
        };
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        return "bundle" == _
          ? "bundle"
          : "sub" == _
            ? "sub"
            : ((0, _._)(_), "app");
      }
      function _(_) {
        return 2 == _ ? "bundle" : 1 == _ ? "sub" : "app";
      }
      const _ = (_) => {
        const { appid: _ } = _,
          _ = _.createElement(
            "div",
            {
              className: "ImpressionTrackedElement",
            },
            _.children,
          );
        return _
          ? _.createElement(
              _._,
              {
                appID: _,
              },
              _,
            )
          : _;
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _() {
        const [_, _] = _.useState(void 0),
          _ = _.useCallback(() => _(void 0), []),
          _ = _.createElement(
            _._,
            {
              active: void 0 !== _,
            },
            _.createElement(_, {
              closeModal: _,
              rgImageURL: _,
            }),
          );
        return [_, _];
      }
      function _(_) {
        const { closeModal: _, rgImageURL: __webpack_require__ } = _,
          [_, _] = _.useState(0),
          _ = __webpack_require__?.length ?? 0,
          _ = _.useCallback(() => {
            _(0 == _ ? _ - 1 : _ - 1);
          }, [_, _]),
          _ = _.useCallback(() => {
            _(__webpack_require__ && _ + 1 >= _ ? 0 : _ + 1);
          }, [_, __webpack_require__, _]);
        return _.createElement(
          _._,
          {
            title: (0, _._)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: _,
            bHideCloseIcon: !0,
            modalClassName: _().PopupScreenshotModal,
          },
          _.createElement(_, {
            index: _,
            numElements: __webpack_require__?.length || 0,
            fnForward: _,
            fnBackwards: _,
            fnClose: _,
            bCircular: !0,
          }),
          _.createElement(
            "div",
            {
              className: _().PopupScreenshotContainer,
            },
            _.createElement("img", {
              className: _().PopupScreenshot,
              src: __webpack_require__?.[_],
            }),
          ),
        );
      }
      function _(_) {
        const {
          index: _,
          numElements: __webpack_require__,
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
        let _ = __webpack_require__ > 1;
        return _.createElement(
          "div",
          {
            className: _().ButtonCtn,
          },
          _ &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().ButtonIcon,
                    0 !== _ || _ ? null : _().Disabled,
                  ),
                  onClick: _,
                },
                _.createElement(_.V5W, {
                  angle: 270,
                }),
              ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().ButtonIcon,
                    _ !== __webpack_require__ - 1 || _ ? null : _().Disabled,
                  ),
                  onClick: _,
                },
                _.createElement(_.V5W, {
                  angle: 90,
                }),
              ),
            ),
          _.createElement(
            "div",
            {
              className: _().ButtonIcon,
              onClick: _,
            },
            _.createElement(_._, null),
          ),
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { bAllowOutsideOfDeck: _ } = _;
        return (0, _._)() || _
          ? _.createElement(_, {
              ..._,
            })
          : null;
      }
      function _(_) {
        const { className: _, _: __webpack_require__ } = _,
          _ = (0, _._)(__webpack_require__),
          [_, _] = (0, _._)();
        let _ = "unknown";
        if (2 == _)
          switch (_.data?.steam_os_compat_category) {
            case 2:
              _ = "steamoscompatible";
              break;
            case 1:
              _ = "steamosunsupported";
              break;
            case 0:
              _ = "steamosunknown";
          }
        else
          switch (_.data?.steam_deck_compat_category) {
            case 3:
              _ = "verified";
              break;
            case 2:
              _ = "playable";
              break;
            case 1:
              _ = "unsupported";
          }
        return _.createElement("div", {
          className: (0, _._)(_.CompatIcon, "ds_steam_deck_compat", _, _),
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
        const {
            className: _,
            srcs: __webpack_require__,
            lazyLoad: _,
            width: _,
            height: _,
            alt: _,
            crossOrigin: _,
          } = _,
          [_, _] = _.useState(__webpack_require__.length),
          [_, _] = _.useState(0);
        _.useEffect(() => {
          _ != __webpack_require__.length &&
            (_(__webpack_require__.length), _(0));
        }, [_, __webpack_require__.length]);
        const _ = _.useCallback(() => {
          _.onImageError && _.onImageError(_.srcs[_]),
            _ + 1 < _.srcs.length && _(_ + 1);
        }, [_, _]);
        return 0 == __webpack_require__.length
          ? null
          : _.createElement("img", {
              className: _,
              src: __webpack_require__[_],
              crossOrigin: _,
              onError: _,
              loading: _ ? "lazy" : void 0,
              width: _,
              height: _,
              alt: _,
            });
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(!1),
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
          ? _.createElement(
              "div",
              {
                className: _.ErrorDiv,
              },
              _.createElement("p", null, (0, _._)("#Image_ErrorTitle", _)),
              _.createElement(
                "ul",
                null,
                _.createElement("li", null, (0, _._)("#Image_Error_msg1")),
              ),
              _.createElement("p", null, (0, _._)("#Image_Error_suggestion")),
            )
          : _.createElement(_._, {
              className: _,
              src: _,
              onError: () => __webpack_require__(!0),
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
        _ = __webpack_require__("chunkid");
      const _ = 1.3,
        _ = 3,
        _ = 256;
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(!1),
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
            if (
              _.naturalWidth > _.displayWidth * _ &&
              _.naturalHeight > _.displayHeight * _ &&
              _.naturalWidth > _
            ) {
              _.naturalWidth / _.naturalHeight < _ && __webpack_require__(!0);
            }
          }, [_]),
          _
            ? _.createElement(
                "span",
                {
                  className: _.PreviewCtn,
                },
                _,
                _.createElement(
                  "span",
                  {
                    className: _.SVG,
                  },
                  _.createElement(_.YNO, null),
                ),
                _.createElement("img", {
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
              )
            : _.createElement("img", {
                ..._,
                ref: _,
                onLoad: (_) => {
                  if (!_.currentTarget.closest("a") && !(0, _._)()) {
                    const {
                      naturalWidth: _,
                      naturalHeight: __webpack_require__,
                      width: _,
                      height: _,
                    } = _.currentTarget;
                    _({
                      naturalWidth: _,
                      naturalHeight: __webpack_require__,
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
        const {
            title: _,
            tooltip: __webpack_require__,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              _,
              Boolean(__webpack_require__) &&
                _.createElement(_._, {
                  tooltip: __webpack_require__,
                }),
            ),
            _.createElement(
              "div",
              {
                className: _.SectionTitleButtons,
              },
              _,
              _.createElement(_, {
                bIsMinimized: _,
                fnToggleMinimize: _,
              }),
            ),
          ),
          !_ && _.createElement(_._, null, _),
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(Boolean(_.bStartMinimized));
        return _.createElement(
          _,
          {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => __webpack_require__(!_),
          },
          _.children,
        );
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: __webpack_require__ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return _.createElement(
          _._,
          {
            "data-tooltip-text": (0, _._)(_),
            onClick: __webpack_require__,
          },
          _.bIsMinimized
            ? _.createElement(_.hz4, null)
            : _.createElement(_.Xjb, null),
        );
      }
    },
  },
]);

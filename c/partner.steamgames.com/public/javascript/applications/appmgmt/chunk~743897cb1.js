(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [59352],
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.getValue();
          return _?.length > 0
            ? (0, _.jsx)(_, {
                text: _,
                regExp: /\r\n|\r|\n/,
              })
            : "";
        }
        function _(_) {
          const { text: _, regExp: _ } = _;
          if (!_) return (0, _.jsx)(_.Fragment, {});
          const _ = _.split(_);
          return (0, _.jsx)("div", {
            className: _().FeedbackText,
            children: _.map((_, _) =>
              (0, _.jsxs)(
                "span",
                {
                  children: [_, _ < _.length - 1 && (0, _.jsx)("br", {})],
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          return Number.parseInt(_.getValue()) ? "yes" : "no";
        }
        function _(_) {
          const _ = Number.parseInt(_.getValue());
          return (0, _._)(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = [],
            _ = _.map((_) => _.header);
          _.push(_);
          for (const _ of _) {
            const _ = [];
            for (const _ of _) {
              const _ = _[_.accessorKey];
              _.push(_ != null ? _.toString() : "");
            }
            _.push(_);
          }
          _._.WriteCSVToFile(_, _);
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
          _ = __webpack_require__("chunkid");
        class _ {
          m_mapPartnerToContactInfo = new Map();
          m_mapPromisePartnerLoading = new Map();
          async FetchValvePartnerContacts(_) {
            const _ =
                _._.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
              _ = {
                sessionid: (0, _._)(),
                strPartnerIDs: _.join(","),
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            return _?.status == 200 && _?.data.success == _._
              ? (_.data.contacts.forEach((_) => {
                  this.m_mapPartnerToContactInfo.has(_.partnerid) ||
                    this.m_mapPartnerToContactInfo.set(_.partnerid, []),
                    this.m_mapPartnerToContactInfo.get(_.partnerid).push(_);
                }),
                _.data.contacts)
              : [];
          }
          async LoadValvePartnerContact(_) {
            return _
              ? this.m_mapPartnerToContactInfo.has(_)
                ? this.m_mapPartnerToContactInfo.get(_)
                : (this.m_mapPromisePartnerLoading.has(_) ||
                    this.m_mapPromisePartnerLoading.set(
                      _,
                      this.InternalLoadValvePartnerContact(_),
                    ),
                  this.m_mapPromisePartnerLoading.get(_))
              : [];
          }
          async InternalLoadValvePartnerContact(_) {
            return this.FetchValvePartnerContacts([_]);
          }
          async InternalLoadMultiplePartnerContact(_) {
            return this.FetchValvePartnerContacts(_);
          }
          GetPartnerContact(_) {
            return this.m_mapPartnerToContactInfo.get(_);
          }
          GetPartnerContactAccountsByFilter(_, _, _) {
            const _ = this.m_mapPartnerToContactInfo.get(_);
            if (_?.length > 0) {
              const _ = _.filter((_) => !_.appid || _.appid == _)
                .filter(
                  (_) =>
                    !_ ||
                    _ == "any" ||
                    (_ == "business" && _.is_business_contact) ||
                    (_ == "tech" && _.is_tech_contact),
                )
                .map((_) => new _._(_.steamid).GetAccountID());
              return _._(_);
            }
            return [];
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
              "partner_valve_contact_list",
              "application_config",
            );
            _ &&
              _.forEach((_) => {
                this.m_mapPartnerToContactInfo.has(_.partnerid)
                  ? this.m_mapPartnerToContactInfo.get(_.partnerid).push(_)
                  : this.m_mapPartnerToContactInfo.set(_.partnerid, [_]);
              });
          }
        }
        function _(_) {
          return ["PartnerValveContactByPartnerID", _];
        }
        function _(_) {
          const { data: _, isLoading: _ } = (0, _._)({
            queryKey: _(_),
            queryFn: async () => _.Get().LoadValvePartnerContact(_),
          });
          return _ ? null : _;
        }
        function _(_, _) {
          return _.prefetchQuery({
            queryKey: _(_),
            queryFn: async () => _.Get().LoadValvePartnerContact(_),
          });
        }
        function _(_) {
          return _.Get().GetPartnerContact(_);
        }
        function _(_, _, _) {
          return _.Get().GetPartnerContactAccountsByFilter(_, _, _);
        }
        function _(_, _, _) {
          const [_, _] = (0, _.useState)(null),
            _ = _(_);
          return (
            (0, _.useEffect)(() => {
              _ && _(_.Get().GetPartnerContactAccountsByFilter(_, _, _));
            }, [_, _, _, _]),
            _
          );
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["multiloadpartnerconatact", ...(_ || [])],
            queryFn: async () => {
              const _ = await _.Get().InternalLoadMultiplePartnerContact(_);
              return (
                _.forEach((_) => {
                  const _ = _.filter((_) => _.partnerid == _);
                  _.setQueryData(_(_), _);
                }),
                _
              );
            },
            enabled: !!(_ && _.length > 0),
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
        const _ = [
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "smalltext",
            "b",
            "u",
            "hr",
            "i",
            "emoticon",
            "dynamiclink",
            "img",
            "strike",
            "spoiler",
            "noparse",
            "url",
            "list",
            "olist",
            "*",
            "quote",
            "pullquote",
            "code",
            "table",
            "tr",
            "td",
            "th",
            "carousel",
            "previewyoutube",
            "looping_media",
            "roomeffect",
            "sticker",
            "price",
            "pricesavings",
            "trailer",
            "speaker",
            "doclink",
            "video",
            "vod",
            "youtubeorvideo",
            "giveawayeligible",
            "claimitem",
            "packagepurchaseable",
            "actiondialog",
            "uploadfilebutton",
            "docimg",
            "meetsteamsessiongroup",
            "meetsteamscheduleview",
            "center",
            "c",
            "expand",
            "remindme",
            "calendarevent",
            "color",
            "bgcolor",
            "userpolls",
          ],
          _ = [
            "h1",
            "h2",
            "h3",
            "b",
            "u",
            "i",
            "strike",
            "spoiler",
            "noparse",
            "url",
          ],
          _ = [
            "img",
            "carousel",
            "previewyoutube",
            "looping_media",
            "roomeffect",
            "video",
            "vod",
            "trailer",
            "youtubeorvideo",
            "docimg",
          ],
          _ = _.filter((_) => !_.includes(_)),
          _ = null;
        function _(_) {
          const { bIncludeMedia: _ = !1, bIncludeValveOnly: _ = !1 } = _,
            _ = new Set();
          return (
            _ || _.forEach((_) => _.add(_)),
            _ || _.forEach((_) => _.add(_)),
            _.filter((_) => !_.has(_))
          );
        }
        let _;
        function _(_) {
          return _
            ? _.map((_) => (_ == "*" ? "\\*" : _)).join("|")
            : (_ || (_ = _(_)), _);
        }
        function _(_, _ = null, _ = " ") {
          const _ = new RegExp(
            "\\[(" + _(_) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return _.replace(_, _);
        }
        function _(_, _ = null, _ = "") {
          const _ = "\\[\\/?(?:" + _(_) + "){1,}.*?]";
          return _.replace(new RegExp(_, "gi"), _);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return `${_}/${_}`;
        }
        const _ = {},
          _ = _.createContext(_);
        function _(_) {
          const { resolutions: _, children: _ } = _;
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return _.useContext(_);
        }
        const _ = new RegExp(
          `${_._.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function _(_) {
          const _ = [],
            _ = new Set();
          for (const _ of _.matchAll(_)) {
            const _ = Number.parseInt(_[1]),
              _ = _[2],
              _ = _(_, _);
            _ > 0 &&
              !_.has(_) &&
              (_.add(_),
              _.push({
                clanAccountID: _,
                hashAndExt: _,
              }));
          }
          return _;
        }
        function _(_, _, _ = 0) {
          const _ = _();
          return _(_, _, _, _);
        }
        async function _(_, _, _ = 0) {
          return _(_, _, _);
        }
        function _(_, _, _ = 0, _) {
          if (!_ || _.length == 0) return null;
          if (_?.startsWith(_._)) return _.ReplacementTokenToClanImageURL(_);
          if (_?.startsWith(_._)) {
            const _ = _.GetBaseURL(),
              _ = _.substring(_._.length + 1),
              _ = parseInt(_.substring(0, _.indexOf("/"))),
              _ = _.substring(_.indexOf("/") + 1),
              _ = _.GenerateURLFromHashAndExt(_, _);
            if (_?.[_(_, _)] === !1) return _;
            const _ = _.GetLocalizedClanImageFileNames(_, _).map(
              (_) => _ + _ + "/" + _ + "?t=" + _,
            );
            return _.push(_), _;
          }
          return _;
        }
        const _ = {
          GetBaseURL() {
            return `${_._.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${_._.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(_) {
            return (
              (_ = _.replace(_._, this.GetBaseURL())),
              _.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(_) {
            const _ =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                _,
              );
            return _?.groups
              ? [_.groups.filename, parseInt(_.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(_) {
            return (
              (_.file_type != null ? (0, _._)(_.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(_) {
            return _ ? _.image_hash + this.GetExtensionString(_) : null;
          },
          GetThumbHashAndExt(_) {
            return _ ? _.thumbnail_hash + this.GetExtensionString(_) : null;
          },
          GetHashFromHashAndExt(_) {
            let _ = _.substring(_.lastIndexOf("."));
            return _.substring(0, _.length - _.length);
          },
          GetExtStringFromHashAndExt(_) {
            return _.substring(_.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(_, _) {
            if (_ == null) return [];
            const _ = this.GetHashFromHashAndExt(_),
              _ = this.GetExtStringFromHashAndExt(_),
              _ = [_ + "/" + (0, _.LgB)(_) + _];
            return (
              _ == _.Pn1 && _.push(_ + "/" + (0, _.x6o)((0, _.LgB)(_)) + _), _
            );
          },
          GenerateURLFromHashAndExt(_, _, _ = _._.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              _,
              _,
              _,
              _.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(_, _, _ = _._.full, _, _) {
            _ instanceof _._ && (_ = _.GetAccountID());
            let _ = this.GetBaseURL();
            const _ = _ != null && _ != _.xPp;
            if (_ == _._.full && !_) return _ + _ + "/" + _;
            {
              let _ = _.substring(_.lastIndexOf(".")),
                _ = _.substring(0, _.length - _.length);
              return !_ || _ == _.Bhc || _ != "localized_image_group"
                ? _ + _ + "/" + _ + _ + _
                : _ + _ + "/" + _ + "/" + (0, _.x6o)((0, _.LgB)(_)) + _;
            }
          },
          GetHashAndExtFromURL(_) {
            let _ = this.GetBaseURL();
            return !_?.startsWith(_) ||
              ((_ = _.substring(_.length)), _.indexOf("/") == -1)
              ? null
              : ((_ = _.substring(_.indexOf("/") + 1)), _);
          },
          GenerateEditableURLFromHashAndExt(_, _, _) {
            let _ =
              _._.COMMUNITY_BASE_URL +
              "gid/" +
              _.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              _;
            return _ && (_ += "&lang=" + _), _;
          },
          GetMimeType(_) {
            return (0, _._)(_);
          },
          async AsyncGetImageResolution(_, _, _, _, _) {
            const _ =
                _ +
                this.GetExtensionString({
                  file_type: _,
                }),
              _ = this.GenerateEditableURLFromHashAndExt(_, _);
            return await this.AsyncGetImageResolutionInternal(_, _, _);
          },
          async AsyncGetImageResolutionInternal(_, _, _) {
            const _ = (0, _._)();
            let _ = new Image();
            (_.crossOrigin = "anonymous"),
              (_.onerror = (_) => {
                const _ = {
                  success: _._,
                };
                _ ||
                  ((_.err_msg =
                    "Load fail on url " +
                    _ +
                    " with error: " +
                    (0, _._)(_).strErrorMsg),
                  console.error(_.err_msg)),
                  (_.success = _._),
                  _.resolve(_);
              }),
              (_.onload = () => {
                const _ = {
                  success: _._,
                };
                if (
                  ((_.width = _.width),
                  (_.height = _.height),
                  !(_.width > 0) || !(_.height > 0))
                ) {
                  (0, _._)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + _,
                  ),
                    (_.err_msg = "No resolution reported for url " + _),
                    _.resolve(_);
                  return;
                }
                (_.success = _._), _.resolve(_);
              }),
              (_.src = _),
              _.token.promise.catch(() => {
                (_.onload = () => {}),
                  (_.onerror = () => {}),
                  _.resolve({
                    success: _._,
                  });
              });
            let _;
            const _ = new Promise((_, _) => {
              _ = setTimeout(() => _(), 1e4);
            });
            let _;
            try {
              _ = await Promise.race([_, _.promise]);
            } catch {
              _ = {
                success: _._,
                err_msg: "We timed out processing images",
              };
            } finally {
              clearTimeout(_);
            }
            return _;
          },
          BIsClanImageVideo(_) {
            return _.file_type == _._._ || _.file_type == _._._;
          },
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        class _ {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var _ = ((_) => (
          (_.full = ""),
          (_.background_main = "_960x311"),
          (_.background_mini = "_480x156"),
          (_.capsule_main = "_400x225"),
          (_.spotlight_main = "_1054x230"),
          _
        ))(_ || {});
        const _ = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
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
        const _ = 4145017,
          _ = 35143931,
          _ = 39049601,
          _ = 45479024,
          _ = 41316928,
          _ = 45784768,
          _ = 4397053,
          _ = 4,
          _ = 20,
          _ = 45559995,
          _ = 45902273,
          _ = [_, _, _, _, _];
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => _(!0));
            }, []),
            jsx(_.Provider, {
              value: _,
              children: _.children,
            })
          );
        }
        const _ = (0, _.createContext)(!1);
        function _() {
          return (0, _.useContext)(_);
        }
        const _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
          _ =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((_) => _.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          _ = _ && decodeURIComponent(_);
        function _() {
          return _() ? _ : (_ ?? _);
        }
        function _() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        _();
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return _ == _._
            ? `charts/topnewreleases/${_}`
            : _ == _._
              ? `charts/bestofyear/${_}`
              : _
                ? `sale/${_}`
                : `curator/${_}/sale/${_}`;
        }
        function _(_, _) {
          return _(_, "", _).startsWith("curator/");
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = () => (_._.EUNIVERSE === _._ ? 2581 : 45267781);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = "America/Los_Angeles";
        function _(_, _) {
          return {
            queryKey: _(_, _),
            queryFn: () => (0, _._)(_),
            enabled: (0, _._)() == _,
            staleTime: _._.PerMinute * 10,
          };
        }
        function _(_, _) {
          return (0, _._)(_(_, _));
        }
        const _ = (_, _) => ["useMeetSteamGetAvailability", _, _];
        function _(_, _, _) {
          return {
            queryKey: _(_, _, _),
            queryFn: async () => {
              const _ = await (0, _._)(_);
              return _ ? JSON.parse(_) : {};
            },
            enabled: (0, _._)() == _ && !!_,
          };
        }
        function _(_, _, _) {
          return (0, _._)(_(_, _, _));
        }
        const _ = (_, _, _) => ["useMeetSteamGetRegistrationDetails", _, _, _];
        function _(_) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", _],
            queryFn: () => (0, _._)(),
            enabled: !!_,
            staleTime: _._.PerMinute * 10,
          };
        }
        function _(_) {
          return (0, _._)(_(_));
        }
        function _(_, _) {
          return {
            queryKey: ["useMeetSteamQRCode", _, _],
            queryFn: () => (0, _._)(_, _),
            enabled: !!_ && !0,
            staleTime: _._.PerMinute * 10,
          };
        }
        function _(_, _) {
          return (0, _._)(_(_, _)).data?.qrcode;
        }
        function _(_, _ = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return _.location_type === "in_person"
            ? (_.in_person_time_zone ?? _)
            : _;
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(() => ({
            rtime_start: _.rtime_start,
            rtime_end: _.rtime_end,
            sDisplayTimeZone: _(_, _),
          }));
        }
        function _(_, _) {
          const _ = _().unix(_),
            _ = _().unix(_)._(_).utcOffset() - _.utcOffset();
          return new Date((_ + _ * 60) * 1e3);
        }
        function _(_, _) {
          const _ = _(_, _),
            _ = new Date();
          return _.getFullYear() == _.getFullYear() ? (0, _._)(_) : (0, _._)(_);
        }
        function _(_, _) {
          const _ = moment.unix(_),
            _ = moment.unix(_)._(_).utcOffset() - _.utcOffset();
          return LocalizeRTimeToHourAndMinutes(_ + _ * 60);
        }
        function _(_, _, _, _) {
          const _ = _().unix(_),
            _ = _().unix(_)._(_).utcOffset() - _.utcOffset(),
            _ = _().unix(_),
            _ = _().unix(_)._(_),
            _ = _.utcOffset() - _.utcOffset();
          return (
            (0, _._)(_ + _ * 60, _ + _ * 60, !0) +
            (_ ? "" : " " + _.format("z"))
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
        var _ = __webpack_require__("chunkid");
        const _ = "meetsteam/availability",
          _ = "meetsteam/registrations",
          _ = "meetsteam/registrationdetails",
          _ = "meetsteam/updateregistration",
          _ = "meetsteam/registrantinfo",
          _ = "meetsteam/attendance_qrcode";
        async function _(_, _) {
          const _ = new URL(_._.STORE_BASE_URL + _);
          for (const [_, _] of Object.entries(_)) _.searchParams.set(_, _);
          const _ = await fetch(_, {
            credentials: "include",
          });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          return await _.json();
        }
        async function _(_) {
          return (
            (
              await _(_, {
                gid: _,
              })
            ).availability ?? []
          );
        }
        async function _(_) {
          return (
            (
              await _(_, {
                gid: _,
              })
            ).registrations ?? []
          );
        }
        async function _(_) {
          return (
            (
              await _(_, {
                gid: _,
              })
            ).strJSONData ?? ""
          );
        }
        async function _() {
          return (
            (await _(_, {})).info ?? {
              realname: "",
              email: "",
              partners: [],
            }
          );
        }
        async function _(_, _) {
          return await _(_, {
            gid: _,
            accountid: String(_),
          });
        }
        async function _(_) {
          const _ = _._.STORE_BASE_URL + _,
            _ = new URLSearchParams({
              gid: _.gid,
              group_id: String(_.group_id),
              session_id: String(_.session_id),
              guest_count: String(_.guest_count),
              jsondata: _.jsondata,
              skip_email: _.skip_email ? "1" : "0",
            }),
            _ = await fetch(_, {
              method: "POST",
              credentials: "include",
              body: _,
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          return (await _.json()).success;
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
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
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
          _ = 130,
          _ = 131,
          _ = 132,
          _ = 133,
          _ = 134,
          _ = 135,
          _ = 136,
          _ = 137,
          _ = 138,
          _ = 139,
          _ = 140,
          _ = 150,
          _ = 151,
          _ = 152,
          _ = 153,
          _ = 154,
          _ = 155,
          _ = 156,
          _ = 157,
          _ = 158,
          _ = 159,
          _ = 160,
          _ = 161,
          _ = 162,
          _ = 163,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7;
        function _(_) {
          return "unknown ESteamAwardVoteCategoryID ( " + _ + " )";
        }
        function _(_) {
          return "unknown EVoteDefinitionFlag ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamAwardsNominationSource ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.voteid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    voteid: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    active: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    start_time: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    end_time: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app_discounts: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    grouped_vote_options: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    groups: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    internal_name: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    localization: {
                      _: 9,
                      _: _,
                    },
                    reveal_time: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    release_date_min: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    winner_appid: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    flag: {
                      _: 13,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    release_date_max: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    item_type: {
                      _: 15,
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
            return "CStore_VoteDefinition";
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
                    discount: {
                      _: 2,
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
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.groupid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    groupid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    group_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    app_discounts: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
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
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.title || _._(_._()),
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
                    title: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    title_linebreak: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    title_award: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    award_description: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CStore_VoteDefinition_Localization";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.language || _._(_._()),
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
                    language: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sale_appid: {
                      _: 2,
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
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.votes || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    votes: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    labor_of_love_winners: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
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
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.voteid || _._(_._()),
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
                    voteid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    communityitemid: {
                      _: 3,
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
            return "SteamAwardsUserVote";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sale_appid || _._(_._()),
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
                    sale_appid: {
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
            return "CStore_GetUserVotes_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.user_votes || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    user_votes: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
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
            return "CStore_GetUserVotes_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.voteid || _._(_._()),
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
                    voteid: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    sale_appid: {
                      _: 3,
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
            return "CStore_SetVote_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.user_votes || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    user_votes: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
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
            return "CStore_SetVote_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.category_id || _._(_._()),
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
                    category_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_updated: {
                      _: 3,
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
            return "CSteamAwardsNomination";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.nominations || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    nominations: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
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
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
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
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    code: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.category_id || _._(_._()),
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
                    category_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    nominated_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    source: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CSteamAwards_Nominate_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.nominations || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    nominations: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
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
            return "CSteamAwards_Nominate_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.category_id || _._(_._()),
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
                    category_id: {
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
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.played_app || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    played_app: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    suggested_events: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    suggested_apps: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    debug_query: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CSteamAwards_GetNominationRecommendations_Response";
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
                    playtime: {
                      _: 2,
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
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clanid || _._(_._()),
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
                    clanid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    event_gid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    appid: {
                      _: 3,
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
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
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
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.generate_new || _._(_._()),
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
                    generate_new: {
                      _: 1,
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
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.code || _._(_._()),
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
                    code: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetVoteDefinitions = _;
          function _(_, _, _) {
            return _.SendMsg("StoreSales.SetVote#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.SetVote = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetUserVotes = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetUserNominations = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
              },
            );
          }
          _.GetOtherUserNominations = _;
          function _(_, _, _) {
            return _.SendMsg("SteamAwards.Nominate#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          _.Nominate = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetNominationRecommendations = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetNominationShareLink = _;
        })(_ || (_ = {}));
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
        const _ = "100% 0px 100% 0px",
          _ = "SaleSection_",
          _ = "tab",
          _ = 940,
          _ = 1920;
        function _() {
          return window.innerWidth ?? _;
        }
        function _() {
          return _() >= _;
        }
        function _() {
          const _ = (0, _._)(),
            [_, _] = (0, _.useState)(() => _());
          return (
            (0, _.useEffect)(() => {
              const _ = () => {
                _(_());
              };
              return (
                _(),
                window.addEventListener("resize", _),
                () => window.removeEventListener("resize", _)
              );
            }, []),
            _
          );
        }
        function _(_ = _) {
          return _() >= _;
        }
        function _(_) {
          const _ = _(),
            _ = _ >= _,
            _ = GetSectionTypeLayoutSizes(_);
          return _
            ? {
                nMaxCapsulesPerRow: _.nMaxItemsPerRow,
                bScreenIsWide: _,
              }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(Math.floor(_ / _.nItemMinimumWidth), 1),
                  _.nMaxItemsPerRow,
                ),
                bScreenIsWide: _,
              };
        }
        function _(_) {
          const _ = GetSectionTypeLayoutSizes(_);
          return _()
            ? _.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / _.nItemMinimumWidth),
                  1,
                ),
                _.nMaxItemsPerRow,
              );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        const _ = "{STEAM_CLAN_IMAGE}",
          _ = "{STEAM_CLAN_LOC_IMAGE}",
          _ = "{STEAM_APP_IMAGE}";
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
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = null,
          _ = {
            bBroadcastEnabled: !1,
            broadcastChatSetting: "hide",
            default_broadcast_title: "#Broadcast_default_title_dev",
            localized_broadcast_title: new Array(_.bP9),
            localized_broadcast_left_image: new Array(_.bP9),
            localized_broadcast_right_image: new Array(_.bP9),
            broadcast_whitelist: [],
          };
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
        const _ = null,
          _ = {
            bScheduleEnabled: !1,
            scheduleEntries: [],
          },
          _ = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class _ {
          m_eventModel;
          constructor(_) {
            this.m_eventModel = _;
          }
          BHasScheduleEnabled() {
            return this.m_eventModel.jsondata.bScheduleEnabled;
          }
          GetScheduleEntries() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries
              : [];
          }
          GetScheduleEntriesCount() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries.length
              : 0;
          }
        }
        class _ {
          m_eventModel;
          m_entry;
          constructor(_, _) {
            (this.m_eventModel = _), (this.m_entry = _);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }
        _([_._], _.prototype, "GetEventStartTime", 1);
        const _ = 1e4,
          _ = 99999;
        function _() {
          return Math.floor(_ + Math.random() * (_ - _ + 1));
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
        const _ = [
          _._,
          _.zeJ,
          _.Fa4,
          _.Aav,
          _.SRb,
          _._,
          _._,
          _.hGl,
          _.WNR,
          _.pIh,
          _.izQ,
          _.uYK,
          _.f4X,
          _.zcX,
          _.yhO,
        ];
        function _(_) {
          return (
            _.some((_) => _ == _.GetEventType()) &&
            !_.BHasTag("steam_award_nomination_request") &&
            !_.BHasTag("curator")
          );
        }
        const _ = [_.HRy, _.LOv, _.HFK];
        function _(_) {
          return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag("curator");
        }
        const _ = [_.Fwr, _.HFK];
        function _(_) {
          return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag("curator");
        }
        const _ = [
            _.L0X,
            _.KDJ,
            _.HRy,
            _.C$4,
            _._,
            _._,
            _.hGl,
            _.pIh,
            _.izQ,
            _.I5b,
            _.LOv,
            _.WNR,
          ],
          _ = new Set(_);
        function _(_) {
          return !!_.endTime && _.has(_.type);
        }
        const _ = 593110,
          _ = 766,
          _ = 221410,
          _ = 1675200,
          _ = 4165890,
          _ = [_, _, _],
          _ = [_.Fwr, _.HFK];
        function _(_) {
          return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag("curator");
        }
        function _(_, _ = GetEventRTimeNow()) {
          const _ = 60 * Seconds.PerDay;
          return (
            _.BIsVisibleEvent(_) &&
            _.BIsOGGEvent() &&
            (_.rtime32_last_modified ?? 0) > _ - _ &&
            !_(_)
          );
        }
        function _(_) {
          return (
            _.BHasTag("mod_reviewed") && !_.BHasTag("mod_require_rereview")
          );
        }
        var _ = ((_) => (
          (_[(_.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (_[(_.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (_[(_.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (_[(_.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          _
        ))(_ || {});
        function _(_) {
          switch (_) {
            case "links":
              return {
                nMaxItemsPerRow: 5,
                nItemMinimumWidth: 200,
              };
            case "itemdef":
              return {
                nMaxItemsPerRow: 5,
                nItemMinimumWidth: 200,
              };
            case "contenthubspecials":
              return {
                nMaxItemsPerRow: 3,
                nItemMinimumWidth: 306,
              };
            default:
              return {
                nMaxItemsPerRow: 4,
                nItemMinimumWidth: 280,
              };
          }
        }
        const _ = "bordered";
        var _ = ((_) => (
            (_[(_.k_EStoreFilterClauseTypeOr = 0)] =
              "k_EStoreFilterClauseTypeOr"),
            (_[(_.k_EStoreFilterClauseTypeAnd = 1)] =
              "k_EStoreFilterClauseTypeAnd"),
            (_[(_.k_EStoreFilterClauseTypeStoreTag = 2)] =
              "k_EStoreFilterClauseTypeStoreTag"),
            (_[(_.k_EStoreFilterClauseTypeFeatureTag = 3)] =
              "k_EStoreFilterClauseTypeFeatureTag"),
            (_[(_.k_EStoreFilterClauseTypeLanguage = 4)] =
              "k_EStoreFilterClauseTypeLanguage"),
            (_[(_.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
              "k_EStoreFilterClauseTypeContentDescriptor"),
            (_[(_.k_EStoreFilterClauseTypePrice = 6)] =
              "k_EStoreFilterClauseTypePrice"),
            (_[(_.k_EStoreFilterClauseTypeAppType = 7)] =
              "k_EStoreFilterClauseTypeAppType"),
            (_[(_.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
              "k_EStoreFilterClauseTypeOptInRegistrationTag"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (_[(_.k_ELanguage = 1)] = "k_ELanguage"),
            (_[(_.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (_[(_.k_EUserPreference = 3)] = "k_EUserPreference"),
            (_[(_.k_EPrice = 4)] = "k_EPrice"),
            (_[(_.k_EAppType = 5)] = "k_EAppType"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (_[(_.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (_[(_.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (_[(_.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (_[(_.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.Steam = "Steam"),
            (_.Facebook = "Facebook"),
            (_.Twitter = "Twitter"),
            (_.Reddit = "Reddit"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.Summary = "summary"),
            (_.SummaryLargeImage = "summary_large_image"),
            _
          ))(_ || {});
        const _ = null;
        function _(_) {
          return _ && !!_.show_as_carousel && !_.enable_faceted_browsing;
        }
        function _(_) {
          return _.carousel_rows || 1;
        }
        function _(_) {
          return _.cap_item_count || 0;
        }
        function _(_) {
          return _.cap_section_row_count && _.cap_section_row_count > 0
            ? _.cap_section_row_count
            : _.section_type == "trailercarousel"
              ? 1
              : _.cap_section_content
                ? 4
                : 0;
        }
        function _(_) {
          return _?.store_filter ? JSON.stringify(_.store_filter) : void 0;
        }
        function _(_) {
          switch (_) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
              return !0;
          }
          return !1;
        }
        function _(_) {
          switch (_) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function _(_) {
          switch (_) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
            case "events":
            case "sale_events":
            case "contenthubspecials":
              return !0;
          }
          return !1;
        }
        function _(_, _ = !1) {
          return !_ || !_(_.section_type)
            ? !1
            : _
              ? _.sale_tag_filter?.clauses?.length
                ? !0
                : !!_.smart_section
              : !!_.smart_section && _.smart_section_type != null;
        }
        function _(_) {
          return _(_) ? _?.smart_section_type : void 0;
        }
        function _(_) {
          return (
            (_.jsondata.sale_ml_recommender_delay_hours &&
              (_.startTime ?? 0) +
                _.jsondata.sale_ml_recommender_delay_hours * Seconds.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        const _ = 2.5;
        function _(_, _, _) {
          return !_.BIsNextFest() || !_(_.section_type)
            ? !1
            : _ == EExplorationMode.Random
              ? !0
              : _(_) > 0;
        }
        function _(_, _, _, _) {
          if (!_.next_fest_exploration_visibility || !_.BIsNextFest())
            return !1;
          switch (_.next_fest_exploration_visibility) {
            case "show-only-personalized":
              return _ != EExplorationMode.Personalized;
            case "show-only-personalized-available":
              return !_;
            case "show-only-personalized-unavailable":
              return _;
          }
          return !1;
        }
        function _(_, _, _) {
          return !!(_.use_random_order || _(_, _, _));
        }
        const _ = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(_.bP9),
            localized_label_image: new Array(_.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          _ = {
            internal_type: "subscription_pricing",
          };
        var _ = ((_) => (
          (_[(_.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (_[(_.k_EContentHub = 1)] = "k_EContentHub"),
          _
        ))(_ || {});
        function _(_) {
          return {
            arrowFill: _?.sale_carousel_arrow_color,
            arrowStyle: _?.sale_carousel_arrow_style,
            breadcrumbActiveColor: _?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: _?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: _?.sale_carousel_breadcrumb_style,
          };
        }
        function _(_, _, _) {
          (_.library_spotlight = void 0),
            _.email_setting &&
              ((_.email_setting.locked = void 0),
              (_.email_setting.force_feature_id = void 0)),
            (_.steam_award_category_suggestion = void 0),
            (_.steam_award_category_voteids = void 0),
            (_.action_end_time = void 0),
            (_.ownership_requirement_info = void 0),
            (_.sale_use_subscription_layout = void 0),
            (_.app_right_requirement_info = void 0),
            (_.clone_from_event_gid = _),
            (_.clone_from_sale_enabled = _.bSaleEnabled),
            (_.bSaleEnabled = _ == k_EClanEventType_CreatorHome),
            (_.sale_discount_event_id = void 0),
            (_.valve_access_log = []),
            (_.bInvisibleGameOptIn = void 0),
            (_.rt_migrated_time = void 0),
            (_.optin_tagid || _.sale_opt_in_page_name) &&
              ((_.tagged_items = void 0),
              (_.tagged_item_filter = void 0),
              (_.auto_item_tags = void 0)),
            (_.optin_prune_tagid = void 0),
            (_.optin_tagid = void 0),
            (_.sale_opt_in_page_name = void 0),
            (_.prune_list_optin_name = void 0),
            (_.optin_only = void 0),
            (_.child_demo_appid_for_repost = void 0),
            (_.sale_vanity_id = void 0),
            (_.sale_update_landing_page_vanity_id = void 0),
            (_.automatically_push_updated_source = void 0),
            (_.country_restriction = void 0);
        }
        const _ = {
            localized_subtitle: new Array(_.bP9),
            localized_summary: new Array(_.bP9),
            localized_title_image: new Array(_.bP9),
            localized_capsule_image: new Array(_.bP9),
            bSaleEnabled: !1,
            sale_show_creator: !1,
            sale_sections: [],
            sale_browsemore_text: "",
            sale_browsemore_url: "",
            sale_browsemore_color: "",
            sale_browsemore_bgcolor: "",
            localized_sale_header: new Array(_.bP9),
            localized_sale_overlay: new Array(_.bP9),
            localized_sale_product_banner: new Array(_.bP9),
            localized_sale_product_mobile_banner: new Array(_.bP9),
            localized_sale_logo: new Array(_.bP9),
            sale_font: "",
            sale_background_color: "",
            sale_header_offset: 530,
            referenced_appids: [],
            ..._,
            ..._,
          },
          _ = "old_announce_",
          _ = 80,
          _ = 120,
          _ = 180,
          _ = "hide_from_events_and_discount",
          _ = [
            "workshop",
            "patchnotes",
            "contenthub",
            "skip_megaphone",
            "curator",
            "curator_group_members",
            "curator_public",
            "audience_followers",
            "enable_steam_china",
            "disable_steam_global",
            "adult_only_content",
            "stablechannel",
            "betachannel",
            "previewchannel",
          ],
          _ = null,
          _ = null,
          _ = [_.HRy, _.LOv, _.HFK],
          _ = [
            _.L0X,
            _.KDJ,
            _.HRy,
            _.C$4,
            _._,
            _._,
            _.hGl,
            _.pIh,
            _.izQ,
            _.I5b,
            _.LOv,
            _.WNR,
          ],
          _ = [_._.k_ESteamRealmGlobal],
          _ = [_._.k_ESteamRealmChina],
          _ = [_._.k_ESteamRealmGlobal, _._.k_ESteamRealmChina],
          _ = [],
          _ = class _ {
            constructor() {
              (0, _._)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new _._();
            forumTopicGID = void 0;
            clanSteamIDOriginal = void 0;
            type = _.DRF;
            appid = 0;
            name = new Map();
            description = new Map();
            timestamp_loc_updated = new Map();
            createTime = void 0;
            startTime = void 0;
            endTime = void 0;
            visibilityStartTime = void 0;
            visibilityEndTime = void 0;
            m_nBuildID = void 0;
            m_strBuildBranch = void 0;
            postTime = void 0;
            visibility_state = 0;
            broadcaster = void 0;
            jsondata = _;
            nCommentCount = 0;
            nVotesUp = 0;
            nVotesDown = 0;
            comment_type;
            gidfeature;
            gidfeature2;
            featured_app_tagid;
            bOldAnnouncement = !1;
            announcementClanSteamID = void 0;
            loadedAllLanguages = !1;
            bLoaded = !1;
            deleteInProgress = !1;
            vecTags = new Array();
            creator_steamid;
            last_update_steamid = void 0;
            rtime32_last_modified = void 0;
            rtime32_last_solr_search_col_updated = void 0;
            rtime32_last_local_modification = void 0;
            rtime32_moderator_reviewed = void 0;
            video_preview_type = void 0;
            video_preview_id = void 0;
            has_live_stream;
            live_stream_viewer_count;
            m_overrideCurrentDay = void 0;
            fnGetLocalizedGroupImages;
            BIsPartnerEvent() {
              return !this.bOldAnnouncement && !!this.GID;
            }
            static FromJSON(_) {
              let _ = new _(),
                _ = JSON.parse(_);
              return (
                Object.assign(_, _),
                (_.name = new Map(_.name)),
                (_.description = new Map(_.description)),
                (_.vecTags = [...(_.vecTags ?? _.tags ?? [])]),
                (_.clanSteamID = new _._(_.clanSteamID)),
                (0, _._)(
                  _.clanSteamID && _.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    _.clanSteamID.ConvertTo64BitString(),
                ),
                _.broadcaster &&
                  ((_.broadcaster = new _._(_.broadcaster)),
                  (0, _._)(
                    _.broadcaster && _.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      _.broadcaster.ConvertTo64BitString(),
                  )),
                _
              );
            }
            static FromCClanEventData(_, _) {
              let _ = new _();
              (_.GID = _.gid),
                (_.clanSteamID = new _._(_.clan_steamid)),
                _.name.set(_, _.event_name ?? ""),
                (_.type = _.event_type),
                (_.appid = _.appid ?? 0),
                (_.startTime = _.rtime32_start_time),
                (_.endTime = _.rtime32_end_time),
                (_.nCommentCount = _.comment_count ?? 0),
                (_.creator_steamid = _.creator_steamid),
                (_.last_update_steamid = _.last_update_steamid),
                (_.jsondata = JSON.parse(_.jsondata ?? "{}")),
                (_.rtime32_last_local_modification = _.rtime32_last_modified),
                _.published
                  ? _.hidden
                    ? (_.visibility_state = _.unlisted ? 3 : 1)
                    : (_.visibility_state = 2)
                  : (_.visibility_state = 0),
                (_.createTime = _.rtime_created),
                (_.m_nBuildID = _.build_id),
                (_.m_strBuildBranch = _.build_branch),
                (_.visibilityStartTime = _.rtime32_visibility_start),
                (_.visibilityEndTime = _.rtime32_visibility_end),
                (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
                (_.featured_app_tagid = _.featured_app_tagid),
                _.broadcaster_accountid &&
                  (_.broadcaster = _._.InitFromAccountID(
                    _.broadcaster_accountid,
                  )),
                (_.AnnouncementGID = _.announcement_body?.gid ?? "0");
              const _ = _.clan_steamid_original;
              return (
                _
                  ? (_.clanSteamIDOriginal = new _._(_))
                  : _.announcement_body?.clanid &&
                    (_.clanSteamIDOriginal = _._.InitFromClanID(
                      Number(_.announcement_body.clanid),
                    )),
                (_.postTime = _.announcement_body?.posttime),
                (_.forumTopicGID = _.forum_topic_id),
                _.name.set(_, _.announcement_body?.headline ?? ""),
                _.description.set(_, _.announcement_body?.body ?? ""),
                (_.nCommentCount = _.comment_count ?? 0),
                (_.vecTags = [...(_.announcement_body?.tags ?? [])]),
                (_.forumTopicGID = _.announcement_body?.forum_topic_id),
                (_.nVotesUp = _.announcement_body?.voteupcount ?? 0),
                (_.nVotesDown = _.announcement_body?.votedowncount ?? 0),
                _
              );
            }
            toJSON(_) {
              let _ = new Object();
              return (
                Object.assign(_, this),
                (_.name = Array.from(this.name)),
                (_.description = Array.from(this.description)),
                (_.vecTags = Array.from(this.vecTags)),
                (_.tags = _.vecTags),
                (_.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
                this.broadcaster &&
                  (_.broadcaster = this.broadcaster.ConvertTo64BitString()),
                _
              );
            }
            clone(_ = !1) {
              let _ = new _();
              if (
                ((_.GID = this.GID),
                (_.AnnouncementGID = this.AnnouncementGID),
                (_.clanSteamID = this.clanSteamID),
                (_.clanSteamIDOriginal = this.clanSteamIDOriginal),
                (_.bOldAnnouncement = this.bOldAnnouncement),
                (_.nCommentCount = this.nCommentCount),
                (_.nVotesUp = this.nVotesUp),
                (_.nVotesDown = this.nVotesDown),
                (_.forumTopicGID = this.forumTopicGID),
                (_.comment_type = this.comment_type),
                (_.gidfeature = this.gidfeature),
                (_.gidfeature2 = this.gidfeature2),
                (_.featured_app_tagid = this.featured_app_tagid),
                (_.creator_steamid = this.creator_steamid),
                (_.last_update_steamid = this.last_update_steamid),
                (_.rtime32_last_modified = this.rtime32_last_modified),
                (_.rtime32_last_solr_search_col_updated =
                  this.rtime32_last_solr_search_col_updated),
                (_.rtime32_moderator_reviewed =
                  this.rtime32_moderator_reviewed),
                (_.type = this.type),
                (_.appid = this.appid),
                (_.name = new Map()),
                this.name.forEach((_, _) => {
                  _.name.set(_, _);
                }),
                (_.description = new Map()),
                this.description.forEach((_, _) => {
                  _.description.set(_, _);
                }),
                (_.timestamp_loc_updated = new Map()),
                this.timestamp_loc_updated.forEach((_, _) => {
                  _.timestamp_loc_updated.set(_, _);
                }),
                (_.createTime = this.createTime ?? 0),
                (_.startTime = this.startTime),
                (_.endTime = this.endTime),
                (_.visibilityStartTime = this.visibilityStartTime),
                (_.visibilityEndTime = this.visibilityEndTime),
                (_.postTime = this.postTime),
                (_.visibility_state = this.visibility_state),
                (_.loadedAllLanguages = this.loadedAllLanguages),
                (_.bLoaded = this.bLoaded),
                (_.broadcaster = this.broadcaster
                  ? new _._(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (_.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (_.vecTags = new Array()),
                _
                  ? ((_.m_nBuildID = this.m_nBuildID),
                    (_.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((_) => _.vecTags.push(_)))
                  : this.vecTags.forEach((_) => {
                      _.includes(_) && _.vecTags.push(_);
                    }),
                _.jsondata.email_setting)
              ) {
                let _ = 100;
                for (let _ of _.jsondata.email_setting.sections)
                  _.unique_id || ((_.unique_id = `email_section_${_}`), _++);
              }
              return _;
            }
            GetLastReferencedSaleDayFromCapsules(_, _) {
              let _ = _;
              return (
                _?.forEach((_) => {
                  _.visibility_index !== void 0 &&
                    (_ =
                      _ === void 0
                        ? _.visibility_index
                        : Math.max(_, _.visibility_index));
                }),
                _
              );
            }
            GetLastReferencedSaleDay() {
              let _;
              for (const _ of this.GetSaleSections())
                if (_.section_type === "tabs") {
                  if ((_.tabs?.length ?? 0) > 0)
                    for (const _ of _.tabs ?? [])
                      _ = this.GetLastReferencedSaleDayFromCapsules(
                        _.capsules,
                        _,
                      );
                } else
                  _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
              return (
                (this.jsondata.sale_num_headers ?? 0) > 1 &&
                  (_ == null || _ < (this.jsondata.sale_num_headers ?? 0)) &&
                  (_ = this.jsondata.sale_num_headers),
                _
              );
            }
            GetDayIndexFromEventStart(_ = (0, _._)()) {
              let _ = 0;
              this.startTime !== void 0 &&
                _ >= this.startTime &&
                (_ = Math.floor((_ - this.startTime) / (3600 * 24))),
                this.m_overrideCurrentDay !== void 0 &&
                  this.m_overrideCurrentDay >= 0 &&
                  (_ = this.m_overrideCurrentDay);
              const _ = this.GetLastReferencedSaleDay() || 0;
              return Math.min(_, _);
            }
            GetNameWithFallback(_) {
              const _ = _._.GetELanguageFallback(_);
              return this.name.get(_) || this.name.get(_);
            }
            BInRealmGlobal() {
              return !this.BHasTag("disable_steam_global");
            }
            BInRealmChina() {
              return this.BHasTag("enable_steam_china");
            }
            BIsLanguageValidForRealms(_) {
              return !!(
                (this.BInRealmGlobal() &&
                  _._.IsELanguageValidInRealm(_, _._.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  _._.IsELanguageValidInRealm(_, _._.k_ESteamRealmChina))
              );
            }
            GetImgArray(_) {
              let _ = [];
              if (
                ((_ === "background" || _ == "localized_title_image") &&
                  (_ = this.jsondata.localized_title_image),
                _ === "capsule")
              )
                _ = this.jsondata.localized_capsule_image;
              else if (_ === "spotlight")
                _ = this.jsondata.localized_spotlight_image;
              else if (_ === "email_full" || _ === "email_centered")
                _ = this.jsondata.email_setting
                  ? this.jsondata.email_setting.sections[0].localized_image
                  : [];
              else if (_ === "broadcast_left")
                _ = this.jsondata.localized_broadcast_left_image;
              else if (_ === "broadcast_right")
                _ = this.jsondata.localized_broadcast_right_image;
              else if (_ === "sale_header")
                if ((this.jsondata.sale_num_headers ?? 0) > 1) {
                  const _ = Math.min(
                    (this.jsondata.sale_num_headers ?? 0) - 1,
                    this.GetDayIndexFromEventStart(),
                  );
                  _ = this.jsondata.localized_per_day_sales_header?.[_];
                } else _ = this.jsondata.localized_sale_header;
              else
                _ === "sale_logo"
                  ? (_ = this.jsondata.localized_sale_logo)
                  : _ === "sale_overlay"
                    ? (_ = this.jsondata.localized_sale_overlay)
                    : _._.includes(_)
                      ? (_ = this.fnGetLocalizedGroupImages?.())
                      : _ === "product_banner"
                        ? (_ = this.jsondata.localized_sale_product_banner)
                        : _ === "product_mobile_banner"
                          ? (_ =
                              this.jsondata
                                .localized_sale_product_mobile_banner)
                          : _ === "bestofyear_banner"
                            ? (_ = this.jsondata.localized_bestofyear_banner)
                            : _ === "bestofyear_banner_mobile"
                              ? (_ =
                                  this.jsondata
                                    .localized_bestofyear_banner_mobile)
                              : _ === "localized_store_app_spotlight"
                                ? (_ =
                                    this.jsondata.localized_store_app_spotlight)
                                : _ ===
                                    "localized_store_app_spotlight_mobile" &&
                                  (_ =
                                    this.jsondata
                                      .localized_store_app_spotlight_mobile);
              return _;
            }
            GetImageURL(_, _ = _.Bhc, _ = _._.full) {
              const _ = this.GetImgArray(_),
                _ = _ && _.length > _ && _[_] != null;
              return _ && _[_]?.startsWith("http")
                ? _[_]
                : _
                  ? _._.GenerateURLFromHashAndExt(
                      this.clanSteamID,
                      _[_] ?? "",
                      _,
                    )
                  : void 0;
            }
            GetImageHash(_, _ = _.Bhc) {
              let _ = this.GetImgArray(_);
              return _ && _.length > _ && _[_] != null
                ? _[_].substr(0, _[_].length - 4)
                : null;
            }
            GetImageHashAndExt(_, _ = _.Bhc) {
              let _ = this.GetImgArray(_);
              return _ && _.length > _ && _[_] != null ? _[_] : null;
            }
            BHasSomeImage(_) {
              let _ = this.GetImgArray(_);
              return !!_ && _.some((_) => _ != null && _.length > 0);
            }
            BHasImage(_, _) {
              let _ = this.GetImgArray(_);
              return !!_ && _.length > _ && _[_] != null;
            }
            BHasAnnouncementGID() {
              return (
                this.AnnouncementGID !== null &&
                this.AnnouncementGID !== void 0 &&
                this.AnnouncementGID.length > 1
              );
            }
            GetAnnouncementGID() {
              return this.AnnouncementGID;
            }
            BHasForumTopicGID() {
              return (
                this.forumTopicGID !== null &&
                this.forumTopicGID !== void 0 &&
                this.forumTopicGID.length > 1
              );
            }
            GetForumTopicURL(_) {
              return this.BHasForumTopicGID()
                ? this.appid
                  ? _._.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : _
                    ? _._.COMMUNITY_BASE_URL +
                      "groups/" +
                      _ +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : _._.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            GetDiscussionURL(_) {
              return this.BHasForumTopicGID()
                ? this.GetForumTopicURL(_)
                : this.GetLegacyAnnouncementCommentsURL();
            }
            GetLegacyAnnouncementCommentsURL() {
              const _ = this.clanSteamIDOriginal ?? this.clanSteamID;
              return !this.BHasAnnouncementGID() || !_ || !_.BIsValid()
                ? ""
                : _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.ConvertTo64BitString() +
                    "/announcements/old_detail/" +
                    this.AnnouncementGID;
            }
            BIsEventInFuture(_ = (0, _._)()) {
              return _ < (this.startTime ?? 0);
            }
            BHasEventEnded(_ = (0, _._)()) {
              return (this.endTime ?? 0) < _;
            }
            UpdateVoteCount(_, _) {
              _ == "up"
                ? (this.nVotesUp = (0, _._)(
                    this.nVotesUp + _,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : _ == "down" &&
                  (this.nVotesDown = (0, _._)(
                    this.nVotesDown + _,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ));
            }
            GetImageFromBeginningOfDescription(_, _) {
              let _ = this.GetDescriptionWithFallback(_);
              if (_) {
                let _ = _.indexOf("[img]");
                if (_ !== -1 && _ < _) {
                  _ += 5;
                  let _ = _.indexOf("[/img]", _);
                  if (_ != -1) {
                    let _ = _.substring(_, _).trim();
                    if (_.length != 0)
                      return _._.ReplacementTokenToClanImageURL(_);
                  }
                }
              }
              return null;
            }
            GetAppIDOrReferenceAppID() {
              return this.appid
                ? this.appid
                : this.jsondata?.referenced_appids?.[0];
            }
            BImageNeedScreenshotFallback(_, _) {
              let _ = this.GetImageURL(_, _);
              if (!_ || _.length == 0) {
                const _ = _._.GetELanguageFallback(_);
                _ != _ && (_ = this.GetImageURL(_, _));
              }
              return !_ || _.length == 0;
            }
            GetDescriptionWithFallback(_) {
              const _ = _._.GetELanguageFallback(_);
              return this.description.get(_) || this.description.get(_);
            }
            BIsImageSafeForAllAges(_, _, _ = {}) {
              const _ = _._.GetELanguageFallback(_);
              return (
                this.GetImageURL(_, _) != null ||
                (_ != _ && this.GetImageURL(_, _) != null) ||
                (this.appid && _.bAppHasAgeSafeScreenshots) ||
                (!this.appid &&
                  _.clanInfo &&
                  ((_.clanInfo.is_creator_home && !_.clanInfo.is_ogg) ||
                    _.clanInfo.is_curator))
              );
            }
            BIsVisibleEvent(_ = (0, _._)()) {
              let _ = Math.floor(_);
              return (
                this.visibility_state == 3 ||
                (this.visibility_state == 2 &&
                  _ > (this.visibilityStartTime ?? 0) &&
                  ((this.visibilityEndTime ?? 0) < 10 ||
                    _ < (this.visibilityEndTime ?? 0)))
              );
            }
            BIsStagedEvent() {
              return this.visibility_state == 1;
            }
            BIsUnlistedEvent() {
              return this.visibility_state == 3;
            }
            GetStartTimeAndDateUnixSeconds() {
              return this.startTime ?? 0;
            }
            GetEndTimeAndDateUnixSeconds() {
              return this.endTime ?? 0;
            }
            GetPostTimeAndDateUnixSeconds() {
              return this.postTime ?? 0;
            }
            GetVisibilityStartTimeAndDateUnixSeconds() {
              return this.visibilityStartTime ?? 0;
            }
            BIsEventActionEnabled(_ = (0, _._)()) {
              return (
                !!this.jsondata.action_end_time &&
                (this.jsondata.action_end_time > _ ||
                  (this.jsondata.action_end_time == 1575396e3 &&
                    1606845600 > _))
              );
            }
            BHasSubTitle(_) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                _ >= this.jsondata.localized_subtitle.length
              )
                return !1;
              let _ = this.jsondata.localized_subtitle[_];
              return _ != null && _ != "";
            }
            GetSubTitle(_) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                _ >= this.jsondata.localized_subtitle.length
              )
                return "";
              let _ = this.jsondata.localized_subtitle[_];
              return _ || "";
            }
            GetSubTitleWithLanguageFallback(_) {
              return this.jsondata
                ? _._.GetWithFallback(this.jsondata.localized_subtitle, _)
                : "";
            }
            GetSubTitleWithSummaryFallback(_) {
              return (
                _._.GetWithFallback(this.jsondata?.localized_subtitle, _) ||
                _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_))
              );
            }
            GetSummaryWithFallback(_, _) {
              return (
                _._.GetWithFallback(this.jsondata?.localized_summary, _) ||
                _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_), _)
              );
            }
            GetSummary(_) {
              return _._.Get(this.jsondata?.localized_summary ?? [], _);
            }
            BHasSummary(_) {
              return !!this.GetSummary(_);
            }
            static GenerateSummaryFromText(_, _) {
              return !_ || _.trim().length == 0
                ? ""
                : ((_ = (0, _._)(_, [
                    "img",
                    "h1",
                    "h2",
                    "h3",
                    "spoiler",
                    "table",
                    "previewyoutube",
                    "looping_media",
                    "roomeffect",
                    "sticker",
                  ])),
                  (_ = (0, _._)(_, ["p"], " ")),
                  (_ = (0, _._)(_)),
                  (_ = (0, _._)(_)),
                  (0, _._)(_, _ || _));
            }
            BHasTag(_) {
              return this.vecTags.indexOf(_) != -1;
            }
            BHasTagStartingWith(_) {
              return this.vecTags.some((_) => _?.startsWith(_));
            }
            BIsOGGEvent() {
              return !!this.appid && this.appid > 0;
            }
            BShowLibrarySpotlight(_) {
              if (!_) return !!this.jsondata.library_spotlight;
              if (!this.jsondata.library_spotlight || _.includes(this.type))
                return !1;
              const _ = new Date().getTime() / 1e3;
              return !(
                (_.includes(this.type) && this.endTime && _ > this.endTime) ||
                (this.startTime && _ > this.startTime + _._.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(_, _ = (0, _._)()) {
              if (this.jsondata.bSaleEnabled)
                return this.BHasBroadcastEnabled();
              const _ = this.endTime ? this.endTime : _ + 3600;
              return (
                this.BHasBroadcastEnabled() &&
                !!this.jsondata.broadcast_whitelist &&
                this.jsondata.broadcast_whitelist.length > 0 &&
                (_ || ((this.startTime ?? 0) - 600 <= _ && _ < _))
              );
            }
            BHasBroadcastForceBanner() {
              return !!this.jsondata.broadcast_force_banner;
            }
            BSaleShowBroadcastAtTopOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (_) => _.section_type == "broadcast",
                )
              );
            }
            BSaleShowCuratorRecommendationAtBottomOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (_) => _.section_type == "curator_recommendation",
                )
              );
            }
            GetBroadcastChatVisibility() {
              return this.jsondata.broadcastChatSetting || "hide";
            }
            GetBroadcastTitle(_) {
              return (
                _._.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  _,
                ) ||
                (0, _._)(
                  this.jsondata.default_broadcast_title ??
                    "#Broadcast_default_title_dev",
                )
              );
            }
            GetBroadcastWhitelist() {
              return this.jsondata.broadcast_whitelist ?? [];
            }
            GetBroadcastWhitelistAsSteamIDs() {
              return (
                this.jsondata.broadcast_whitelist?.map((_) =>
                  _._.InitFromAccountID(_).ConvertTo64BitString(),
                ) ?? []
              );
            }
            BIsBroadcastAccountIDWhiteListed(_) {
              return (this.jsondata.broadcast_whitelist || []).includes(
                Number(_),
              );
            }
            BHasSaleEnabled() {
              return !!this.jsondata.bSaleEnabled;
            }
            BHasSaleVanity() {
              return (
                !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id
              );
            }
            GetSaleVanity() {
              return this.jsondata.sale_vanity_id ?? "";
            }
            BHasSaleUpdateLandingPageVanity() {
              return (
                !!this.jsondata.bSaleEnabled &&
                !!this.jsondata.sale_update_landing_page_vanity_id
              );
            }
            GetSaleUpdateLandingPageVanity() {
              return this.jsondata.sale_update_landing_page_vanity_id ?? "";
            }
            GetSaleURL(_) {
              if (!this.jsondata.bSaleEnabled) return null;
              if (this.jsondata.sale_update_landing_page_vanity_id)
                return (
                  _._.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  _._.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const _ = this.jsondata.source_content_hub;
                return _
                  ? typeof _ == "string"
                    ? _._.STORE_BASE_URL + "category/" + _
                    : _.type == "category"
                      ? _._.STORE_BASE_URL + "category/" + _.category
                      : _.type == "tags"
                        ? _._.STORE_BASE_URL +
                          "tags/" +
                          ((0, _._)() || "en") +
                          "/" +
                          _.tagid
                        : _.type == "freetoplay"
                          ? _._.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : _.type == "earlyaccess"
                            ? _._.STORE_BASE_URL + "genre/Early%20Access/"
                            : _._.STORE_BASE_URL + _.type
                  : _._.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
              }
              const _ = this.clanSteamID.GetAccountID(),
                _ =
                  !!this.jsondata
                    .sale_vanity_id_valve_approved_for_sale_subpath,
                _ = this.GetSaleVanity();
              return _ && (0, _._)(_, _)
                ? _ + "sale/" + _
                : _._.STORE_BASE_URL + (0, _._)(_, _, _);
            }
            BHasEmailEnabled() {
              return (
                !!this.jsondata.email_setting &&
                this.jsondata.email_setting.bEnable
              );
            }
            GetSaleSections() {
              return this.jsondata.sale_sections ?? [];
            }
            GenerateDynamicSaleSections(_, _, _, _, _, _) {
              const _ = [],
                _ = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let _ = _ + 10;
              return (
                _ &&
                  _.push({
                    ..._,
                    section_type: "footer_self_creator_home",
                    unique_id: _++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                _ &&
                  _.push({
                    ..._,
                    section_type: "footer_browse_more",
                    unique_id: _++,
                  }),
                _ &&
                  _.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      _++,
                      _,
                      _,
                    ),
                  ),
                _ &&
                  _.push({
                    ..._,
                    section_type: "footer_default_social_share",
                    unique_id: _++,
                  }),
                _ &&
                  _.push({
                    ..._,
                    section_type: "nextfest_header",
                    unique_id: _++,
                  }),
                _
              );
            }
            GetSaleSectionIncludingFooterSections(_ = 0) {
              const _ = this.jsondata?.sale_show_creator,
                _ = this.jsondata.sale_browse_more_button,
                _ =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                _ = this.GetEventType() == _.ajI,
                _ = this.BShowNextFestHeader(!0);
              return _ || _ || _ || _ || _
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, _, _),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!_, !!_, _, _, !1, _),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(_, _ = 0) {
              return _ > _
                ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, _).find(
                    (_) => _.unique_id == _,
                  )
                : this.jsondata.sale_sections?.find((_) => _.unique_id == _);
            }
            GetSaleSectionCount() {
              return this.jsondata.sale_sections?.length ?? 0;
            }
            GetSaleSectionsByType(_) {
              return (
                this.jsondata.sale_sections?.filter(
                  (_) => _.section_type == _,
                ) ?? []
              );
            }
            GetLastUpdateTime() {
              return this.rtime32_last_modified ?? 0;
            }
            GetLastUpdaterSteamIDStr() {
              return this.last_update_steamid ?? "";
            }
            GetSaleSectionFirstMatchByType(_) {
              const _ = this.jsondata.sale_sections?.length ?? 0;
              if (_ != 0) {
                for (let _ = 0; _ < _; ++_)
                  if (this.jsondata.sale_sections[_].section_type === _)
                    return this.jsondata.sale_sections[_];
              }
            }
            static AccumulateCapsuleListIDs(_, _, _, _) {
              _ &&
                _.forEach((_) => {
                  _ && _.type && _.has(_.type) && (!_ || _(_._)) && _.add(_._);
                });
            }
            GetSaleItemOfType(_, _) {
              if (!this.jsondata.sale_sections) return new Set();
              const _ = new Set(_),
                _ = new Set();
              return (
                (0, _._)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((_) => {
                  _.AccumulateCapsuleListIDs([_.capsule], _, _, _);
                }),
                this.jsondata.sale_sections.forEach((_) => {
                  if (_(_.section_type))
                    _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
                  else if (_.section_type === "tabs" && _.tabs)
                    for (const _ of _.tabs)
                      _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
                }),
                _
              );
            }
            GetSaleItemCountOfType(_, _) {
              return this.GetSaleItemOfType(_, _).size;
            }
            GetSaleFeaturedAppsCount(_) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music"],
                _,
              );
            }
            GetSaleFeaturedAppsAndDemosCount(_) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                _,
              );
            }
            GetSaleFeaturedBundlesCount(_) {
              return this.GetSaleItemCountOfType(["bundle"], _);
            }
            GetSaleFeaturedPackagesCount(_) {
              return this.GetSaleItemCountOfType(["sub"], _);
            }
            GetSaleFeaturedApps(_) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music"],
                _,
              );
            }
            GetSaleFeaturedAppsAndDemos(_) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                _,
              );
            }
            GetSaleFeaturedBundles(_) {
              return this.GetSaleItemOfType(["bundle"], _);
            }
            GetSaleFeaturedPackages(_) {
              return this.GetSaleItemOfType(["sub"], _);
            }
            GetTaggedItems() {
              return this.jsondata.tagged_items || [];
            }
            BHasScheduleEnabled() {
              return this.jsondata.bScheduleEnabled;
            }
            GetEventType() {
              return this.type;
            }
            GetEventTypeAsString() {
              return (0, _._)(this.type);
            }
            GetCategoryAsString(_) {
              return this.BHasTag("steam_award_nomination_request")
                ? (0, _._)("#PartnerEvent_SteamAwardNominations")
                : this.BHasTag("steam_award_vote_request")
                  ? (0, _._)("#PartnerEvent_SteamAwardVoteRequest")
                  : this.BHasTag("steam_game_festival_artist_statement")
                    ? (0, _._)("#PartnerEvent_SteamGameFestival_ArtistState")
                    : this.BHasTag("steam_game_festival_office_hour")
                      ? (0, _._)("#PartnerEvent_SteamGameFestival_OfficeHour")
                      : this.BHasTag("steam_game_festival_broadcast") ||
                          (this.BHasTagStartingWith("sale_nextfest_") &&
                            this.type == _.KDJ)
                        ? (0, _._)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && _
                          ? (0, _._)("#PartnerEvent_MM_MajorUpdate")
                          : this.GetEventTypeAsString();
            }
            GetAllTags() {
              return this.vecTags;
            }
            BMatchesAllTags(_) {
              let _ = !0;
              return (
                _?.forEach((_) => {
                  this.vecTags.includes(_) || (_ = !1);
                }),
                _
              );
            }
            BAllowedSteamStoreSpotlight() {
              return !!this.jsondata.store_spotlight;
            }
            BHasLibaryHomeSpotlight() {
              return !!this.jsondata.library_home_spotlight;
            }
            BHasSaleProductBanners() {
              return (
                !!this.jsondata.bSaleEnabled &&
                (this.BHasSomeImage("product_banner") ||
                  this.BHasSomeImage("product_banner_override"))
              );
            }
            GetSteamAwardCategory() {
              return this.jsondata.steam_award_category_suggestion ?? _._._;
            }
            GetSteamAwardNomineeCategories() {
              return this.jsondata.steam_award_category_voteids ?? [];
            }
            BIsLockedToGameOwners() {
              return !!this.jsondata.ownership_requirement_info
                ?.bLockedToAppOwners;
            }
            GetRequiredAppIDs() {
              return this.jsondata.ownership_requirement_info
                ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
                : [];
            }
            GetRequiredPackageIDs() {
              return this.jsondata.ownership_requirement_info
                ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
                : [];
            }
            BUseSubscriptionLayout() {
              return !!this.jsondata.sale_use_subscription_layout;
            }
            BIsLockedToPartnerAppRights() {
              return !!this.jsondata.app_right_requirement_info
                ?.bLockedToPartnerAppRights;
            }
            GetRequiredPartnerAppRights() {
              return this.jsondata.app_right_requirement_info;
            }
            GetValveAccessLog() {
              return Array.isArray(this.jsondata.valve_access_log)
                ? this.jsondata.valve_access_log
                : [];
            }
            BUsesContentHubForItemSource() {
              return (
                this.jsondata.item_source_type === 1 &&
                !!this.jsondata.source_content_hub
              );
            }
            GetContentHubType() {
              if (this.BUsesContentHubForItemSource())
                return this.jsondata.source_content_hub == null
                  ? "games"
                  : typeof this.jsondata.source_content_hub == "string"
                    ? "category"
                    : this.jsondata.source_content_hub.type;
            }
            GetContentHubCategory() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? this.jsondata.source_content_hub
                  : this.jsondata.source_content_hub.category;
            }
            GetContentHubTag() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? 0
                  : this.jsondata.source_content_hub.tagid;
            }
            GetContentHub() {
              return typeof this.jsondata.source_content_hub == "string"
                ? {
                    type: "category",
                    category: this.jsondata.source_content_hub,
                  }
                : this.jsondata.source_content_hub;
            }
            BContentHubDiscountedOnly() {
              return !!this.jsondata.content_hub_discounted_only;
            }
            BIsBackgroundImageGroupingEnabled() {
              return !!this.jsondata.sale_background_img_groups?.enabled;
            }
            GetSalePageGroupDefinition() {
              return this.jsondata.sale_background_img_groups;
            }
            GetSalePageBackgroundImageGroupCount() {
              return this.jsondata.sale_background_img_groups?.enabled
                ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
                : 0;
            }
            GetAllSalePageGroups() {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups
                : [];
            }
            GetSalePageBackgroundGroup(_) {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups?.[_]
                : void 0;
            }
            GetIncludedRealmList() {
              const _ = this.BInRealmGlobal(),
                _ = this.BInRealmChina();
              return (
                (0, _._)(
                  _ || _,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                _ && _ ? _ : _ ? _ : _ ? _ : _
              );
            }
            BIsValidForRealm(_) {
              return this.GetIncludedRealmList().includes(_);
            }
            BIsNextFest(_ = !1) {
              const _ = "nextfest",
                _ = this.jsondata.sale_vanity_id?.toLowerCase(),
                _ = new _._(this.clanSteamID).GetAccountID();
              return !(
                !_ ||
                _ != _._ ||
                !_.startsWith(_) ||
                (_ && (_.endsWith("preview") || _.endsWith("press")))
              );
            }
            BShowNextFestHeader(_) {
              return _ && _._.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(_, _, _) {
              const _ = _ >= 7;
              return {
                ..._,
                section_type: "sale_item_browser",
                unique_id: _,
                item_browse_section_data: {
                  enable_search: !0,
                  tabs: [
                    "all_released",
                    "popularpurchased",
                    "all_upcoming",
                    "discounted",
                  ],
                  prefer_assets_without_overrides: !1,
                },
                prefer_assets_without_overrides: !1,
                enable_faceted_browsing: _,
                min_capsule_matches_for_facet_values: 5,
                max_facet_values_for_facet: 5,
                background_gradient_top: "#0000006b",
                background_gradient_bottom: "#0000006b",
                facet_sort_order: 1,
                cap_item_count: 24,
                show_more_count: 48,
                facet_auto_generate_options: {
                  only_facets: [
                    {
                      loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle",
                    },
                    {
                      loc_token: "#AppTypeLabelTitle",
                      only_values: [
                        "#AppTypeLabel_game",
                        "#AppTypeLabel_dlc",
                        "#AppTypeLabel_demo",
                        "#AppTypeLabel_music",
                      ],
                      initially_selected_values: ["#AppTypeLabel_game"],
                    },
                    {
                      loc_token: "#Sale_Preferences",
                    },
                  ],
                  initially_expanded_facets: [
                    "#AppTypeLabelTitle",
                    "#App_Taxonomy_Survey_QSuperGenreTitle",
                  ],
                  prioritized_facets: [
                    "#AppTypeLabelTitle",
                    "#App_Taxonomy_Survey_QSuperGenreTitle",
                  ],
                },
              };
            }
          };
        _([_._], _.prototype, "GID", 2),
          _([_._], _.prototype, "AnnouncementGID", 2),
          _([_._], _.prototype, "forumTopicGID", 2),
          _([_._], _.prototype, "type", 2),
          _([_._], _.prototype, "appid", 2),
          _([_._], _.prototype, "name", 2),
          _([_._], _.prototype, "description", 2),
          _([_._], _.prototype, "timestamp_loc_updated", 2),
          _([_._], _.prototype, "startTime", 2),
          _([_._], _.prototype, "endTime", 2),
          _([_._], _.prototype, "visibilityStartTime", 2),
          _([_._], _.prototype, "visibilityEndTime", 2),
          _([_._], _.prototype, "m_nBuildID", 2),
          _([_._], _.prototype, "m_strBuildBranch", 2),
          _([_._], _.prototype, "postTime", 2),
          _([_._], _.prototype, "visibility_state", 2),
          _([_._], _.prototype, "broadcaster", 2),
          _([_._], _.prototype, "jsondata", 2),
          _([_._], _.prototype, "nCommentCount", 2),
          _([_._], _.prototype, "nVotesUp", 2),
          _([_._], _.prototype, "nVotesDown", 2),
          _([_._], _.prototype, "bOldAnnouncement", 2),
          _([_._], _.prototype, "announcementClanSteamID", 2),
          _([_._], _.prototype, "loadedAllLanguages", 2),
          _([_._], _.prototype, "bLoaded", 2),
          _([_._], _.prototype, "deleteInProgress", 2),
          _([_._], _.prototype, "vecTags", 2),
          _([_._], _.prototype, "last_update_steamid", 2),
          _([_._], _.prototype, "rtime32_last_modified", 2),
          _([_._], _.prototype, "rtime32_last_solr_search_col_updated", 2),
          _([_._], _.prototype, "rtime32_last_local_modification", 2),
          _([_._], _.prototype, "rtime32_moderator_reviewed", 2),
          _([_._], _.prototype, "video_preview_type", 2),
          _([_._], _.prototype, "video_preview_id", 2),
          _([_._], _.prototype, "m_overrideCurrentDay", 2);
        let _ = _;
        function _(_) {
          if (_) return _?.replace(/[()]/g, "\\$&");
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return useObserver(() => [_.m_nBuildID, _.m_strBuildBranch]);
        }
        function _(_, _ = 0, _) {
          const [_, _] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(_),
            ),
            _ = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (_?.AnnouncementGID != _) {
                g_PartnerEventStore.Init();
                const _ = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _)
                  .then((_) => {
                    _ && !_.token.reason && _(_);
                  });
              }
            }, [_, _, _, _, _]),
            _
          );
        }
        function _(_) {
          const [_, _] = (0, _.useState)(() => _._.GetClanEventModel(_)),
            _ = (0, _._)("usePartnerEventByEventGID");
          return (
            (0, _.useEffect)(() => {
              _ &&
                _?.GID != _ &&
                (_._.Init(),
                _._.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [_],
                  [],
                  _,
                ).then((_) => {
                  _?.length == 1 && _[0].GID == _ && !_.token.reason && _(_[0]);
                }));
            }, [_, _, _]),
            _
          );
        }
        function _(_) {
          const _ = (0, _._)("usePreloadPartnerEventsByEventGID"),
            _ = (0, _._)({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                _._.Init(),
                _._.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  _,
                  [],
                  _,
                )
              ),
            });
          return {
            bIsLoading: _.isLoading,
            events: _.data,
          };
        }
        function _(_, _, _) {
          const [_, _] = (0, _.useState)(_ ? _._.GetClanEventModel(_) : void 0),
            [_, _] = (0, _.useState)(!!_ && !!_),
            [_, _] = (0, _.useState)(),
            [_, _] = (0, _.useState)(_._),
            _ = (0, _._)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, _.useEffect)(() => {
              (async () => {
                try {
                  if (_?.GID != _ && _ && _) {
                    _._.Init();
                    const _ = _._.InitFromClanID(_);
                    let _;
                    try {
                      _ =
                        await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          _,
                          _,
                          0,
                          _,
                        );
                    } catch (_) {
                      _(_?.response?.data?.err_msg),
                        _(_?.response?.data?.success || _._);
                    }
                    _.token.reason || _(_);
                  }
                } finally {
                  _(!1);
                }
              })();
            }, [_, _, _, _, _]),
            {
              eventModel: _,
              bLoading: _,
              sErrorMessage: _,
              eResult: _,
            }
          );
        }
        function _(_, _ = []) {
          const [_, _] = useState(void 0),
            _ = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              _ &&
                (!_ || _?.appid != _) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    _,
                    0,
                    1,
                    {
                      require_tags: ["patchnotes", ..._],
                    },
                    _,
                  )
                  .then((_) => {
                    _?.length && !_.token.reason && _(_[0]);
                  }));
            }, [_, _, _, _]),
            _
          );
        }
        function _(_, _ = []) {
          const _ = useCancelTokenSource("useLatestPatchNoteForSource"),
            _ = typeof _ == "number" ? _ : k_nAppIdInvalid,
            _ = typeof _ == "object" ? _ : void 0,
            _ = useCallback(async () => {
              if (!_?.length) return null;
              g_PartnerEventStore.Init();
              const _ = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                _,
                _,
                0,
                1,
                {
                  require_tags: ["patchnotes", ..._],
                },
                _,
              );
              return _?.length ? _[0] : null;
            }, [_, _, _, _]),
            _ = ["LatestPatchNote2", _, _, _, _];
          return useQuery({
            queryKey: _,
            queryFn: _,
          });
        }
        function _(_) {
          let _ = "" + _;
          const _ = _._.GetELanguageFallback(_);
          return _ != _ && (_ += "_" + _), _;
        }
        async function _(_, _, _, _) {
          const _ = new Array(),
            _ = {
              clan_accountid: _ ? _.GetAccountID() : void 0,
              gidevent: _,
              count_before: 0,
              count_after: _,
              lang_list: _(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            _ = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            _ = await axios.get(_, {
              params: _,
              cancelToken: _?.token,
            });
          if (_?.data?.success == k_EResultOK) {
            const _ = _ == null ? _.data.events : _.data.events.slice(1);
            for (let _ of _)
              !_.gid || !((_.jsondata?.length ?? 0) > 0) || _.push(_);
          } else {
            const _ = GetMsgAndErrorCodeFromResponse(_?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (_ ? _.GetAccountID() : 0) +
                  " " +
                  _.strErrorMsg,
                _,
              ),
              _?.data)
            );
          }
          return _;
        }
        function _(_, _, _) {
          const {
            data: _,
            error: _,
            fetchNextPage: _,
            hasNextPage: _,
            isFetching: _,
            isFetchingNextPage: _,
            status: _,
            refetch: _,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", _, _],
            queryFn: ({ pageParam: _ }) => _(_, _, _, _),
            initialPageParam: void 0,
            getNextPageParam: (_) =>
              _.length > 0 ? _[_.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: _,
            bHasNextPage: _,
            fnFetchNextPage: _,
            bIsFetching: _,
            bIsFetchingNextPage: _,
            clanEventSummaryStatus: _,
            clanEventSummaryLoadError: _,
            fnRefetch: _,
          };
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
        function _(_) {
          return (
            (_.gid == null || _.gid == null || _.gid == "0") &&
            !!_.announcement_body &&
            _.announcement_body.gid != "0"
          );
        }
        function _(_) {
          return _(_) ? _._ + _.announcement_body?.gid : _.gid;
        }
        function _(_, _) {
          let _ = new _._();
          if (
            ((_.clanSteamID = _),
            (0, _._)(
              _.clanSteamID && _.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                _.clanSteamID.ConvertTo64BitString() +
                " " +
                _._.EUNIVERSE,
            ),
            (_.GID = _(_)),
            (_.bOldAnnouncement = _(_)),
            (_.appid = _.appid ?? 0),
            (_.createTime = _.rtime_created),
            (_.startTime = _.rtime32_start_time),
            (_.endTime = _.rtime32_end_time),
            (_.visibilityStartTime = _.rtime32_visibility_start),
            (_.visibilityEndTime = _.rtime32_visibility_end),
            (_.loadedAllLanguages = !1),
            (_.type = _.event_type ?? _.DRF),
            (_.nVotesUp = _.votes_up ?? 0),
            (_.nVotesDown = _.votes_down ?? 0),
            (_.comment_type = _.comment_type),
            (_.gidfeature = _.gidfeature),
            (_.gidfeature2 = _.gidfeature2),
            (_.featured_app_tagid = _.featured_app_tagid),
            (_.vecTags = new Array()),
            (_.creator_steamid = _.creator_steamid),
            (_.last_update_steamid = _.last_update_steamid),
            (_.rtime32_last_modified = _.rtime32_last_modified),
            (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
            (_.video_preview_type = _.video_preview_type),
            (_.video_preview_id = _.video_preview_id),
            (_.has_live_stream = _.has_live_stream),
            (_.live_stream_viewer_count = _.live_stream_viewer_count),
            (_.m_nBuildID = _.build_id),
            (_.m_strBuildBranch = _.build_branch),
            _.announcement_body)
          ) {
            let _ = _.announcement_body;
            (_.AnnouncementGID = _.gid),
              _.name.set(_.language, _.headline),
              _.description.set(_.language, _.body),
              _.timestamp_loc_updated.clear(),
              (_.forumTopicGID = _.forum_topic_id),
              (_.nCommentCount = _.commentcount),
              (_.postTime = _.posttime),
              _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
              (_.announcementClanSteamID = new _._(_.clanid)),
              _.tags &&
                _.tags.length > 0 &&
                _.tags.forEach((_) => _.vecTags.push(_)),
              !_.rtime32_last_solr_search_col_updated &&
                _.rtime32_last_modified &&
                ((_.rtime32_last_solr_search_col_updated =
                  _.rtime32_last_modified),
                (_.rtime32_last_modified = _.updatetime));
          } else
            (_.AnnouncementGID = "0"),
              (_.forumTopicGID = _.forum_topic_id),
              _.name.clear(),
              _.description.clear(),
              _.timestamp_loc_updated.clear(),
              (_.postTime = _.rtime32_start_time),
              (_.nCommentCount = _.comment_count ?? 0),
              _.name.set(_.Bhc, _.event_name ?? ""),
              _.description.set(_.Bhc, _.event_notes ?? "");
          _.broadcaster_accountid &&
            (_.broadcaster = new _._(_.broadcaster_accountid));
          const _ = _._;
          try {
            _.jsondata = {
              ..._,
              ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
            };
          } catch (_) {
            const _ = (0, _._)(_);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  _.strErrorMsg,
                _,
              ),
              _)
            );
          }
          if (
            ((_.jsondata.localized_capsule_image = (0, _._)(
              _.jsondata.localized_capsule_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_title_image = (0, _._)(
              _.jsondata.localized_title_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_subtitle = (0, _._)(
              _.jsondata.localized_subtitle || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_summary = (0, _._)(
              _.jsondata.localized_summary || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_title = (0, _._)(
              _.jsondata.localized_broadcast_title || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_left_image = (0, _._)(
              _.jsondata.localized_broadcast_left_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_right_image = (0, _._)(
              _.jsondata.localized_broadcast_right_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_header = (0, _._)(
              _.jsondata.localized_sale_header || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_overlay = (0, _._)(
              _.jsondata.localized_sale_overlay || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_product_banner = (0, _._)(
              _.jsondata.localized_sale_product_banner || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_product_mobile_banner = (0, _._)(
              _.jsondata.localized_sale_product_mobile_banner || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_logo = (0, _._)(
              _.jsondata.localized_sale_logo || [],
              _.bP9,
              null,
            )),
            _.jsondata.sale_num_headers !== void 0 &&
              _.jsondata.localized_per_day_sales_header)
          )
            for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
              _.jsondata.localized_per_day_sales_header[_] = (0, _._)(
                _.jsondata.localized_per_day_sales_header[_],
                _.bP9,
                null,
              );
          return (
            _.jsondata.sale_sections &&
              _.jsondata.sale_sections.forEach((_, _) => {
                _.localized_label &&
                  (_.localized_label = (0, _._)(
                    _.localized_label,
                    _.bP9,
                    null,
                  )),
                  _.section_type === "trailercarousel" &&
                    (_.show_as_carousel = !1),
                  (_.jsondata.sale_sections[_] = {
                    ..._._,
                    ..._,
                  });
              }),
            _.jsondata.email_setting &&
              _.jsondata.email_setting.sections &&
              _.jsondata.email_setting.sections.forEach((_) => {
                _.localized_headline !== void 0 &&
                  _.localized_headline !== null &&
                  (_.localized_headline = (0, _._)(
                    _.localized_headline,
                    _.bP9,
                    null,
                  )),
                  _.localized_body !== void 0 &&
                    _.localized_body !== null &&
                    (_.localized_body = (0, _._)(
                      _.localized_body,
                      _.bP9,
                      null,
                    )),
                  _.localized_image !== void 0 &&
                    _.localized_image !== null &&
                    (_.localized_image = (0, _._)(
                      _.localized_image,
                      _.bP9,
                      null,
                    ));
              }),
            _.jsondata.localized_title_image.forEach((_, _) => {
              if (_ != null && _.substr(0, 4) == "http") {
                let _ = _.lastIndexOf("/"),
                  _ = _.substr(_ + 1);
                _.jsondata.localized_title_image[_] = _;
              }
            }),
            (_.bLoaded = !0),
            _.published
              ? _.unlisted
                ? (_.visibility_state = _._.k_EEventStateUnlisted)
                : _.hidden
                  ? (_.visibility_state = _._.k_EEventStateStaged)
                  : (_.visibility_state = _._.k_EEventStateVisible)
              : (_.visibility_state = _._.k_EEventStateUnpublished),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _._,
          _: () => _._,
        });
        var _ = __webpack_require__("chunkid");
        const _ = "exploration";
        var _ = ((_) => ((_.Random = "r"), (_.Personalized = "p"), _))(_ || {});
        function _(_) {
          switch (_) {
            case k_EControllerType_XBoxOneController:
              return k_EStoreCategoryFullController;
            case k_EControllerType_PS4Controller:
              return k_EStoreCategoryPS4Controller;
            case k_EControllerType_PS5Controller:
              return k_EStoreCategoryPS5Controller;
            case k_EControllerType_SteamController:
              return k_EStoreCategorySteamInputAPI;
            default:
              return;
          }
        }
        function _(_) {
          switch (_) {
            case k_EStoreCategoryFullController:
              return k_EControllerType_XBoxOneController;
            case k_EStoreCategoryPS4Controller:
              return k_EControllerType_PS4Controller;
            case k_EStoreCategoryPS5Controller:
              return k_EControllerType_PS5Controller;
            default:
              return;
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return window.StoreDefaults ? window.StoreDefaults[_] : void 0;
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
        const _ = null;
        class _ {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(_) {
            (0, _._)(
              typeof _.appid == "number",
              "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
            ),
              (this.appid = _.appid),
              (this.date = _.date),
              (this.can_play = _.can_play),
              (this.playtime = _.playtime),
              (this.announcementid = _.announcementid);
          }
        }
        const _ = null,
          _ = null;
        class _ {
          constructor(_ = !1) {
            (0, _._)(this), (this.m_bOnlySummary = _);
          }
          m_bOnlySummary = !1;
          m_mapExistingEvents = new Map();
          m_mapEventUpdateCallback = new Map();
          m_mapAnnouncementBodyToEvent = new Map();
          m_mapClanToGIDs = new Map();
          m_mapAppIDToGIDs = new Map();
          m_mapAdjacentAnnouncementGIDs = new Map();
          m_mapUpdatedApps = new Map();
          m_tsUpdatedAppsQueryTime = 0;
          m_rgQueuedEventsClanIDs = new Array();
          m_rgQueuedEventsUniqueIDs = new Array();
          m_rgQueuedEventsForEditFlags = new Array();
          m_QueuedEventTimeout = new _._();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let _ = _("PartnerEventStore");
              this.ValidateStoreDefault(_) &&
                _.forEach((_) => {
                  if (_) {
                    let _ = new _._(_.clan_steamid);
                    const _ = this.InsertEventModelFromClanEventData(_, _);
                    _.announcement_body &&
                      this.m_mapExistingEvents.set(
                        _._ + _.announcement_body.gid,
                        _,
                      );
                  }
                });
              let _ = (0, _._)("partnereventstore", "application_config");
              this.ValidateStoreDefault(_) &&
                _.forEach((_) => {
                  if (_) {
                    let _ = new _._(_.clan_steamid);
                    const _ = this.InsertEventModelFromClanEventData(_, _);
                    _.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        _._ + _.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        _._ + _.announcement_body.gid,
                        _,
                      );
                  }
                });
              let _ = (0, _._)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(_) &&
                _.forEach((_) => {
                  _ &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      _.announcementGID,
                      _.adjacents,
                    );
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              _[0] &&
              typeof _[0] == "object"
              ? typeof _[0].gid == "string" ||
                  (typeof _[0].announcement_body == "object" &&
                    typeof _[0].announcement_body.gid == "string")
              : !1;
          }
          ValidateAdjacentEvent(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].announcementGID == "string" &&
                  Array.isArray(_[0].adjacents) &&
                  (_[0].adjacents.length == 0 ||
                    typeof _[0].adjacents[0] == "string")
              : !1;
          }
          GetPartnerEventChangeCallback(_) {
            let _ = this.m_mapEventUpdateCallback.get(_);
            return (
              _ ||
                (this.m_mapEventUpdateCallback.set(_, new _._()),
                (_ = this.m_mapEventUpdateCallback.get(_))),
              _
            );
          }
          GetClanEventGIDs(_) {
            let _ = this.m_mapClanToGIDs.get(_.GetAccountID());
            return _ || [];
          }
          GetClanEventGIDsForApp(_) {
            let _ = this.m_mapAppIDToGIDs.get(_);
            return _ || [];
          }
          GetClanEventModel(_) {
            return this.m_mapExistingEvents.get(_);
          }
          BHasClanEventModel(_) {
            return this.m_mapExistingEvents.has(_);
          }
          BHasClanAnnouncementGID(_) {
            if (this.m_mapAnnouncementBodyToEvent.has(_)) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(_);
              return !!_ && this.BHasClanEventModel(_);
            }
            return !1;
          }
          GetClanEventGIDFromAnnouncementGID(_) {
            return this.m_mapAnnouncementBodyToEvent.get(_);
          }
          GetClanEventFromAnnouncementGID(_) {
            const _ = this.m_mapAnnouncementBodyToEvent.get(_);
            return _ ? this.m_mapExistingEvents.get(_) : void 0;
          }
          DefaultEventSortFunction(_, _) {
            return _.startTime == _.startTime
              ? (0, _._)(_.GID ?? "", _.GID ?? "")
              : (_.startTime ?? 0) - (_.startTime ?? 0);
          }
          RegisterClanEvents(_) {
            if (_)
              for (const _ of _) {
                const _ = (0, _._)(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  const _ = new _._(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
              }
          }
          GetRankedClanEvents(_, _) {
            let _ = [],
              _ = _
                ? this.GetClanEventGIDs(_)
                : _
                  ? this.GetClanEventGIDsForApp(_)
                  : void 0;
            if (!_ || _.length == 0) return _;
            for (let _ of _) {
              let _ = this.GetClanEventModel(_);
              _ && _.push(_);
            }
            return _.sort(this.DefaultEventSortFunction), _;
          }
          InsertEventModelFromClanEventData(_, _) {
            const _ = (0, _._)(_, _);
            return (
              this.InsertUniqueEventGID(_.GetAccountID(), _.appid, _.GID),
              this.m_mapExistingEvents.set(_.GID, _),
              _.AnnouncementGID &&
                _.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
              _
            );
          }
          HelperInitializeNumSalesHeaderArray(_) {
            if ((_.jsondata.sale_num_headers ?? 0) > 1) {
              _.jsondata.localized_per_day_sales_header = [];
              for (let _ = 0; _ < (_.jsondata.sale_num_headers ?? 0); ++_)
                _.jsondata.localized_per_day_sales_header.push(
                  (0, _._)([], _.bP9, null),
                );
              _.m_overrideCurrentDay = 0;
            } else _.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(_) {
            let _ = new Array();
            return (
              this.m_mapClanToGIDs.has(_.GetAccountID()) &&
                this.m_mapClanToGIDs.get(_.GetAccountID()).forEach((_) => {
                  let _ = this.m_mapExistingEvents.get(_);
                  _ && _.push(_);
                }),
              _
            );
          }
          async QueueLoadPartnerEvent(_, _, _) {
            if (this.m_mapExistingEvents.has(_)) return;
            this.m_rgQueuedEventsClanIDs.push(_),
              this.m_rgQueuedEventsUniqueIDs.push(_),
              this.m_rgQueuedEventsForEditFlags.push(!!_),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (_) => (this.m_PendingInfoResolve = _),
                ));
            const _ = this.m_PendingInfoPromise,
              _ = () => {
                const _ = this.m_PendingInfoResolve,
                  _ = this.m_rgQueuedEventsClanIDs,
                  _ = this.m_rgQueuedEventsUniqueIDs,
                  _ = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(_, _, _).then(() => _?.());
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), _())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, _),
              _
            );
          }
          async InternalLoadPartnerEventList(_, _, _) {
            let _ = _.some((_) => _);
            const _ =
                _._.STORE_BASE_URL +
                (_
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              _ = (0, _._)((0, _.sfN)(_._.LANGUAGE)),
              _ = {
                clanid_list: _.join(","),
                uniqueid_list: _.join(","),
                lang_list: _,
                origin: self.origin,
              };
            try {
              const _ = await _().get(_, {
                params: _,
                withCredentials: _,
              });
              this.RegisterClanEvents(_.data.events);
            } catch (_) {
              let _ = (0, _._)(_);
              console.error("GetEventDetails hit error " + _.strErrorMsg, _);
            }
          }
          async LoadAdjacentPartnerEvents(_, _, _, _, _, _, _) {
            return this.InternalLoadAdjacentPartnerEvents(
              _,
              void 0,
              _,
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(_, _, _, _, _, _, _) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(_, _, _, _, _, _, _) {
            const _ = _ || _.clanSteamID;
            return _.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  _.AnnouncementGID,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  _.GID,
                  _.AnnouncementGID,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                );
          }
          async InternalLoadAdjacentPartnerEvents(_, _, _, _, _, _, _, _) {
            let _ = new Array();
            if (!_ || !this.m_mapAdjacentAnnouncementGIDs.has(_)) {
              let _ =
                _._.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const _ = (0, _._)((0, _.sfN)(_._.LANGUAGE));
              _?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, _._)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (_.only_summaries = void 0));
              let _ = {
                clan_accountid: _ ? _.GetAccountID() : void 0,
                appid: _,
                count_before: _,
                count_after: _,
                gidevent: _,
                gidannouncement: _,
                lang_list: _,
                rtime_oldestevent: _ ? _.rtime_oldestevent : void 0,
                require_tags:
                  _ && _.require_tags ? _.require_tags.join(",") : void 0,
                exclude_tags:
                  _ && _.exclude_tags ? _.exclude_tags.join(",") : void 0,
                require_no_tags: _ ? _.require_no_tags : void 0,
                event_type_filter:
                  _ && _.event_type_filter
                    ? _.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  _ && _.exclude_event_types
                    ? _.exclude_event_types.join(",")
                    : void 0,
                only_summaries: _ && !!_.only_summaries,
                origin: self.origin,
              };
              try {
                let _ = await _().get(_, {
                  params: _,
                  cancelToken: _?.token,
                });
                if (_?.data?.success == _._)
                  (0, _._)(() => {
                    for (let _ of _.data.events) {
                      let _ = (0, _._)(_);
                      if (!this.m_mapExistingEvents.has(_)) {
                        let _ = new _._(_.clan_steamid);
                        this.InsertEventModelFromClanEventData(_ || _, _);
                      }
                      _.push(this.m_mapExistingEvents.get(_));
                    }
                    if (_.length == 0) {
                      if (_ && this.BHasClanEventModel(_))
                        this.m_mapExistingEvents.get(_) &&
                          _.push(this.m_mapExistingEvents.get(_));
                      else if (_ && this.BHasClanAnnouncementGID(_)) {
                        const _ = this.GetClanEventFromAnnouncementGID(_);
                        _ && _.push(_);
                      }
                    }
                  });
                else {
                  let _ = (0, _._)(_?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      _ +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      _.strErrorMsg,
                    _,
                  );
                }
              } catch (_) {
                let _ = (0, _._)(_);
                _.errorCode != _._ &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      _ +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      _.strErrorMsg,
                    _,
                  );
              }
            } else {
              let _ = this.m_mapAdjacentAnnouncementGIDs.get(_),
                _ = new Array();
              _?.forEach((_) => {
                if (this.m_mapAnnouncementBodyToEvent.has(_)) {
                  let _ = this.m_mapAnnouncementBodyToEvent.get(_);
                  _ &&
                    this.m_mapExistingEvents.get(_) &&
                    _.push(this.m_mapExistingEvents.get(_));
                } else _.push(_);
              }),
                _.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      _,
                      _,
                    )
                  ).forEach((_) => _.push(_));
            }
            return _;
          }
          async LoadPartnerEventsPageable(_, _, _ = 0, _ = 0, _) {
            let _ = new Array(),
              _ = _._.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              _ = {
                clan_accountid: _ ? _.GetAccountID() : void 0,
                appid: _,
                offset: _,
                count: _,
                _: _._.LANGUAGE,
                origin: self.origin,
                exclude_tags: _ && _.length > 0 ? _?.join(",") : void 0,
              };
            try {
              let _ = await _().get(_, {
                params: _,
              });
              (0, _._)(() => {
                for (let _ of _.data.events) {
                  let _ = (0, _._)(_);
                  if (!this.m_mapExistingEvents.has(_)) {
                    let _ = new _._(_.clan_steamid);
                    this.InsertEventModelFromClanEventData(_, _);
                  }
                  _.push(this.m_mapExistingEvents.get(_));
                }
              });
            } catch (_) {
              console.error(
                "LoadClanEventInDateRange hit error " + (0, _._)(_).strErrorMsg,
              );
            }
            return _;
          }
          async GetBestEventsForCurrentUser(_, _, _) {
            let _ = new Array(),
              _ = {
                _: _._.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: _,
                include_only_game_updates: _,
              },
              _ = _._.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
            if (!_.data?.events) {
              let _ = _.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${_})`,
              );
            }
            return (
              (0, _._)(() => {
                for (let _ of _.data.events) {
                  let _ = (0, _._)(_);
                  if (!this.m_mapExistingEvents.has(_)) {
                    let _ = new _._(_.clan_steamid);
                    this.InsertEventModelFromClanEventData(_, _);
                  }
                  let _ = {
                    nAppPriority: _.nAppPriority,
                    bPossibleTakeOver: _.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(_),
                  };
                  _.push(_);
                }
              }),
              _
            );
          }
          async LoadImportantEventsAroundToday(_, _, _, _, _, _) {
            let _ = new Array(),
              _ = new Array();
            _.push({
              priority: 0,
              appids: _,
            }),
              _ &&
                _.push({
                  priority: 1,
                  appids: _,
                }),
              _ &&
                _.push({
                  priority: 2,
                  appids: _,
                });
            let _ = {
                count: _,
                strAppIDPriority: JSON.stringify({
                  prioritized_apps: _,
                }),
                filterToEventTypes: _ ? _.toString() : "",
                _: _._.LANGUAGE,
              },
              _ = _._.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _.token,
              });
            return (
              (0, _._)(() => {
                for (let _ of _.data.events) {
                  let _ = (0, _._)(_);
                  if (!this.m_mapExistingEvents.has(_)) {
                    let _ = new _._(_.clan_steamid);
                    this.InsertEventModelFromClanEventData(_, _);
                  }
                  _.push(this.m_mapExistingEvents.get(_));
                }
              }),
              _
            );
          }
          InsertUniqueEventGID(_, _, _) {
            let _ = this.m_mapClanToGIDs.get(_);
            _ ||
              (this.m_mapClanToGIDs.set(_, new Array()),
              (_ = this.m_mapClanToGIDs.get(_)));
            let _ = this.m_mapAppIDToGIDs.get(_);
            _ ||
              (this.m_mapAppIDToGIDs.set(_, new Array()),
              (_ = this.m_mapAppIDToGIDs.get(_))),
              _.indexOf(_) == -1 && (_.push(_), _.push(_));
          }
          ResetModel() {}
          async DeleteClanEvent(_, _) {
            this.m_mapExistingEvents.has(_) &&
              (this.m_mapExistingEvents.get(_).deleteInProgress = !0);
            let _ = new URLSearchParams();
            _.append("sessionid", (0, _._)()),
              _.append("bDelete", "1"),
              _.append("gid", _);
            const _ = await _().post(
              _._.COMMUNITY_BASE_URL +
                "/gid/" +
                _.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              _,
            );
            return this.RemoveGIDFromList(_, _), _.data;
          }
          RemoveGIDFromList(_, _) {
            if (
              (this.m_mapExistingEvents.delete(_),
              this.m_mapClanToGIDs.has(_.GetAccountID()))
            ) {
              let _ = this.m_mapClanToGIDs.get(_.GetAccountID()),
                _ = _.indexOf(_);
              _ >= 0 && _.splice(_, 1);
            }
          }
          FlushEventFromCache(_, _) {
            if (
              (_ &&
                this.m_mapExistingEvents.has(_) &&
                (_ || (_ = this.m_mapExistingEvents.get(_).AnnouncementGID),
                this.m_mapExistingEvents.delete(_)),
              _ &&
                (this.m_mapExistingEvents.has(_._ + _) &&
                  this.m_mapExistingEvents.delete(_._ + _),
                this.m_mapAnnouncementBodyToEvent.has(_)))
            ) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(_);
              _ &&
                this.m_mapExistingEvents.has(_) &&
                this.m_mapExistingEvents.delete(_),
                this.m_mapAnnouncementBodyToEvent.delete(_);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            _,
            _,
            _,
            _,
            _,
            _ = !1,
          ) {
            let _ = (0, _._)(_ ? _.Bhc : (0, _.sfN)(_._.LANGUAGE)),
              _ = {
                appid: _,
                clan_accountid: _ ? _.GetAccountID() : void 0,
                announcement_gid: _,
                event_gid: _,
                lang_list: _,
                last_modified_time: _ || 0,
                origin: self.origin,
                for_edit: _,
                only_summary: this.m_bOnlySummary,
              },
              _ = null,
              _ = null;
            if (_) {
              const _ = (0, _._)();
              _ === "community"
                ? ((_ = _._.COMMUNITY_BASE_URL),
                  (_ += _ ? "gid/" + _.ConvertTo64BitString() : "ogg/" + _),
                  (_ += "/"))
                : _ === "partner"
                  ? (_ = _._.PARTNER_BASE_URL + "sales/")
                  : (_ = _._.STORE_BASE_URL + "events/"),
                (_ += "ajaxgetpartnereventforedit"),
                (_ = {
                  params: _,
                  withCredentials: !0,
                });
            } else
              (_ = _._.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (_ = {
                  params: _,
                  withCredentials: !1,
                });
            try {
              let _ = await _().get(_, _);
              if (_.data.success !== _._) return;
              let _ = _.data.event,
                _ = (0, _._)(_);
              if (
                !this.m_mapExistingEvents.has(_) ||
                (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
                  (_.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ??
                  0) < (_.rtime_mod_reviewed ?? 0)
              ) {
                (0, _._)(
                  _.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let _ = new _._(_.clan_steamid);
                this.InsertEventModelFromClanEventData(_, _);
              }
              return this.m_mapExistingEvents.get(_);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            _,
            _,
            _,
            _,
            _,
            _,
          ) {
            if (_ && this.m_mapExistingEvents.has(_))
              return this.m_mapExistingEvents.get(_);
            if (_) {
              if (this.m_mapExistingEvents.has(_._ + _))
                return this.m_mapExistingEvents.get(_._ + _);
              if (this.m_mapAnnouncementBodyToEvent.has(_)) {
                const _ = this.m_mapAnnouncementBodyToEvent.get(_);
                if (_ && this.m_mapExistingEvents.has(_))
                  return this.m_mapExistingEvents.get(_);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              _,
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              _,
              void 0,
              _,
              _,
              _,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              _,
              void 0,
              void 0,
              _,
              _,
              _,
            );
          }
          async LoadPartnerEventFromClanEventGID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              _,
              _,
              void 0,
              _,
              _,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              _,
              void 0,
              _,
              void 0,
              _,
              _,
            );
          }
          async LoadPartnerEventGeneric(_, _, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadHiddenPartnerEvent(_, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              _,
              void 0,
              _,
              void 0,
              0,
              !0,
            );
          }
          async LoadHiddenPartnerEventByAnnouncementGID(_, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              _,
              void 0,
              void 0,
              _,
              0,
              !0,
            );
          }
          async HintLoadImportantUpdates() {
            const _ = (0, _._)(36e5);
            if (_ != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = _;
              const _ = {
                  page: 1,
                  numPerPage: 500,
                  includeAnnouncements: !1,
                },
                _ = _._.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                _ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                });
              _.data.apps &&
                _.data.apps.length > 0 &&
                (0, _._)(() => {
                  const _ = new Map(
                    _.data.apps?.map((_) => [_.appid, new _(_)]),
                  );
                  this.m_mapUpdatedApps = _;
                });
            }
            return this.m_mapUpdatedApps;
          }
          GetAppImportantUpdate(_) {
            return (
              this.HintLoadImportantUpdates().catch((_) => {
                console.log("UpdatedApps failed to load: ", _.response?.data);
              }),
              this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(_)
            );
          }
          async LoadClanEventLocalizationFromAnnouncementGID(_, _) {
            let _ =
              _._.COMMUNITY_BASE_URL +
              "gid/" +
              _.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              _;
            return (await _().get(_)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, _, _) {
            const _ = new Array(),
              _ = _._.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              _ = (0, _._)((0, _.sfN)(_._.LANGUAGE));
            let _ = null,
              _ = null;
            if (_) {
              let _ = new Array();
              _.forEach((_) => {
                this.m_mapExistingEvents.has(_)
                  ? _.push(this.m_mapExistingEvents.get(_))
                  : _.push(_);
              }),
                _.sort(),
                (_ = _);
            }
            if (_) {
              let _ = new Array();
              _.forEach((_) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(_) &&
                  this.m_mapAnnouncementBodyToEvent.get(_) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(_),
                  )
                ) {
                  let _ = this.m_mapAnnouncementBodyToEvent.get(_);
                  if (_) {
                    const _ = this.m_mapExistingEvents.get(_);
                    _ && _.push(_);
                  }
                } else _.push(_);
              }),
                _.sort(),
                (_ = _);
            }
            if (!_ && !_) return _;
            const _ = new Array(),
              _ = 100;
            for (; (_?.length ?? 0) > 0 || (_?.length ?? 0) > 0; ) {
              let _ = {
                event_gids:
                  (_?.length ?? 0) > 0 ? _?.splice(0, _).join(",") : void 0,
                announcement_gids:
                  (_?.length ?? 0) > 0 ? _?.splice(0, _).join(",") : void 0,
                lang_list: _,
                origin: self.origin,
              };
              _.push(
                _().get(_, {
                  params: _,
                  cancelToken: _ ? _.token : void 0,
                }),
              );
            }
            try {
              const _ = await Promise.all([..._]);
              let _ = 0;
              (0, _._)(() =>
                _.forEach((_) => {
                  if (_ && _.data && _.data.events)
                    for (let _ of _.data.events) {
                      let _ = (0, _._)(_);
                      if (!this.m_mapExistingEvents.has(_)) {
                        let _ = new _._(_.clan_steamid);
                        this.InsertEventModelFromClanEventData(_, _);
                      }
                      _.push(this.m_mapExistingEvents.get(_));
                    }
                  else {
                    const _ = (0, _._)(_);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        _.strErrorMsg,
                      _,
                    );
                  }
                  _ += 1;
                }),
              );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  _.strErrorMsg,
                _,
              );
            }
            return _;
          }
          async SavePartnerEventSaleAssets(_, _, _, _) {
            let _ = null;
            if (!this.m_mapExistingEvents.has(_)) return !1;
            try {
              const _ = `${_._.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${_}`,
                _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gidclanevent", _),
                _.append("json", JSON.stringify(_)),
                _.append("pageStyles", JSON.stringify(_));
              const _ = await _().post(_, _, {
                withCredentials: !0,
              });
              if (_?.data?.success == _._) {
                const _ = this.m_mapExistingEvents.get(_);
                if (_ && _.jsondata) {
                  for (const _ in _)
                    if (_.hasOwnProperty(_) && _[_]) {
                      const _ = _,
                        _ = _[_];
                      _ !== void 0 && _ !== void 0 && (_.jsondata[_] = _);
                    }
                }
                return this.GetPartnerEventChangeCallback(_).Dispatch(_), !0;
              }
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  _?.strErrorMsg,
                _,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        _([_._], _.prototype, "m_mapExistingEvents", 2),
          _([_._], _.prototype, "m_mapAnnouncementBodyToEvent", 2),
          _([_._], _.prototype, "m_mapClanToGIDs", 2),
          _([_._], _.prototype, "m_mapAppIDToGIDs", 2),
          _([_._], _.prototype, "m_mapUpdatedApps", 2),
          _([_._], _.prototype, "Init", 1),
          _([_._], _.prototype, "GetPartnerEventChangeCallback", 1),
          _([_._], _.prototype, "RegisterClanEvents", 1),
          _([_._], _.prototype, "InsertEventModelFromClanEventData", 1),
          _([_._], _.prototype, "DeleteClanEvent", 1),
          _([_._], _.prototype, "RemoveGIDFromList", 1),
          _([_._], _.prototype, "FlushEventFromCache", 1),
          _([_._], _.prototype, "SavePartnerEventSaleAssets", 1);
        const _ = new _();
        (0, _._)("g_PartnerEventStore", _);
        const _ = new _(!0);
        (0, _._)("g_PartnerEventSummaryStore", _);
        function _(_, _, _ = !1) {
          const [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
            [_, _] = (0, _.useState)(!0),
            _ = (0, _.useMemo)(() => _._.InitFromClanID(_), [_]);
          return (
            (0, _.useEffect)(() => {
              !_ &&
                _ > 0 &&
                (_.Init(),
                _.LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, 0, _)
                  .then(_)
                  .finally(() => _(!1)));
            }, [_, _, _, _, _]),
            (0, _._)(_ ? _.GetPartnerEventChangeCallback(_) : void 0, _),
            {
              eventModel: _,
              bLoading: _,
            }
          );
        }
        function _() {
          return {
            fnSaveSaleAssets: _.SavePartnerEventSaleAssets,
          };
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_) {
          const _ = {
            accountid: _,
            origin: self.origin,
          };
          let _ = `${_._.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, _._)() == "partner" &&
            (_ = `${_._.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const _ = await _().get(_, {
            params: _,
            withCredentials: !0,
          });
          if (
            !_ ||
            _.status != 200 ||
            _.data?.success != _._ ||
            !_.data?.partners
          )
            throw `Load single user partner info failed ${((0, _._))(_).strErrorMsg}`;
          return _.data.partners;
        }
        function _(_) {
          const { data: _, isLoading: _ } = (0, _._)({
            queryKey: ["PartnerInfoList", _],
            queryFn: () => _(_),
          });
          return _ ? null : _;
        }
        function _(_, _) {
          return _(_)?.find((_) => _.partnerid === _);
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        function _(_) {
          const _ = new Date(_.getTime());
          return _.setHours(0, 0, 0, 0), _;
        }
        function _(_) {
          const _ = new Date(_.getTime());
          return _.setDate(1), _.setHours(0, 0, 0, 0), _;
        }
        function _(_, _) {
          const _ = new Date(_);
          return _.setDate(_.getDate() + _), _;
        }
        function _(_, _) {
          return _.reduce((_, _) => {
            const _ = _(_),
              _ = Math.floor(_.getTime() / 1e3),
              _ = _.get(_) || [];
            return _.set(_, [..._, _]), _;
          }, new Map());
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _ !== k_EClanEventType_NewsEvent;
        }
        function _(_) {
          switch (_) {
            case _.Aqr:
            case _.I5b:
            case _.jO6:
            case _.Y3j:
            case _.Bb7:
            case _.TiP:
            case _.EPt:
            case _.E3D:
            case _.L0X:
            case _.KDJ:
            case _.Fa4:
            case _.Aav:
            case _.SRb:
            case _.HRy:
            case _.C$4:
            case _._:
            case _._:
            case _.hGl:
            case _.WNR:
            case _.pIh:
            case _.izQ:
            case _.LOv:
            case _.zcX:
            case _.DRF:
            case _.HFK:
              return !0;
          }
          return !1;
        }
        function _(_, _) {
          return !(
            _ == k_EClanEventType_SmallUpdateEvent ||
            _ == k_EClanEventType_CreatorHome ||
            (_ && _.indexOf("curator") != -1)
          );
        }
        function _(_) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(_);
        }
        function _(_) {
          let _ = "#PartnerEvent_" + _,
            _ = _._.Localize(_);
          return _ != _ ? _ : _._.Localize("#PartnerEvent_Other");
        }
      },
      chunkid: (module) => {
        module.exports = {
          FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj",
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

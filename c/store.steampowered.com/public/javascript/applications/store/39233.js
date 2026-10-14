(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39233],
    {
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
          _ = __webpack_require__("chunkid");
        async function _(_, _, _) {
          if ((0, _._)(_)) {
            const _ = _._.Init(_._);
            _.Body().set_line_item_id(_);
            const _ = await _._.RemoveItemFromCart(_, _);
            return (0, _._)(), _.Body().toObject();
          } else {
            const _ = _._.Init(_._);
            _.Body().set_gidlineitems([_]), _.Body().set_gidshoppingcart(_.gid);
            const _ = await _._.RemoveLineItems(_, _);
            return (0, _._)(), _.Body().toObject();
          }
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => await _(_, _, _),
            onSuccess: (_) => {
              "cart" in _ ? (0, _._)(_, _, _.cart) : (0, _._)(_, _);
            },
          });
        }
        async function _(_, _) {
          if ((0, _._)(_)) {
            const _ = _._.Init(_._);
            return (await _._.DeleteCart(_, _)).BSuccess();
          } else {
            const _ = await (0, _._)(_, _);
            if (_ && _.line_items && _.line_items.length) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_gidlineitems(
                  _.line_items.map(({ line_item_id: _ }) => _),
                ),
                _.Body().set_gidshoppingcart(_.gid),
                (await _._.RemoveLineItems(_, _)).BSuccess()
              );
            }
            return !1;
          }
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => await _(_, _),
            onSuccess: () => (0, _._)(_, _),
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
          _ = __webpack_require__("chunkid");
        async function _(_, _, _, _, _, _) {
          if ((0, _._)(_)) {
            const _ = _._.Init(_._);
            _.Body().set_line_item_id(_),
              _.Body().set_user_country(_._.country_code),
              _ && _.Body().set_gift_info(_._.fromObject(_)),
              _ && _.Body().set_flags(_._.fromObject(_)),
              _ && _.Body().set_apply_gidcoupon(_);
            const _ = await _._.ModifyLineItem(_, _);
            return (
              _.BSuccess() ||
                console.warn(`Failed to update gift info: ${_.GetEResult()}`),
              [_.GetEResult(), _.Body().toObject()]
            );
          } else {
            const _ = _._.Init(_._);
            _.Body().set_gidlineitem(_),
              _.Body().set_gidshoppingcart(_.gid),
              _
                ? _.Body().set_gift_info(_._.fromObject(_))
                : _?.is_gift &&
                  _.Body().set_gift_info(
                    _._.fromObject({
                      accountid_giftee: 0,
                      email_giftee: "",
                    }),
                  );
            const _ = await _._.ModifyLineItem(_, _);
            return (
              _.BSuccess() ||
                console.warn(
                  `Failed to update gift info in anonymous cart: ${_.GetEResult()}`,
                ),
              _.Body().toObject()
            );
          }
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_);
          return (0, _._)({
            mutationFn: (_) =>
              _(_, _, _.lineItemID, _.lineItemFlags, _.giftInfo, _.gidCoupon),
            onMutate: async (_) => {
              await _.cancelQueries({
                queryKey: _,
              });
              const _ = _.getQueryData(_);
              return (
                _.setQueryData(_, (_) => ({
                  ...(_ ?? {}),
                  line_items:
                    _?.line_items?.map((_) =>
                      _.line_item_id !== _.lineItemID
                        ? _
                        : {
                            ..._,
                            flags: _.lineItemFlags || _.flags,
                            gift_info: _.giftInfo || _.gift_info,
                          },
                    ) ?? [],
                })),
                {
                  previousCart: _,
                }
              );
            },
            onSuccess: (_) => {
              "cart" in _ ? (0, _._)(_, _, _.cart) : (0, _._)(_, _);
            },
            onError: (_, _, _) => {
              _?.previousCart && _.setQueryData(_, _.previousCart);
            },
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
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          step: "initial",
          setStep: () => {},
        });
        function _() {
          return (0, _.useContext)(_);
        }
        function _() {
          const _ = _();
          return [_.step, _.setStep];
        }
        function _() {
          const _ = _();
          return [_.cartWideGiftInfo, _.onCartWideGiftInfoChange];
        }
        function _(_) {
          const {
              step: _,
              setStep: _,
              cartID: _,
              cartWideGiftInfo: _,
              onCartWideGiftInfoChange: _,
              children: _,
            } = _,
            _ = _.useMemo(
              () => ({
                step: _,
                setStep: _,
                cartWideGiftInfo: _,
                onCartWideGiftInfoChange: _,
              }),
              [_, _, _, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              cartID: _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.k_ECartDisplayType_Unknown = 0)] =
              "k_ECartDisplayType_Unknown"),
            (_[(_.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
            (_[(_.k_ECartDisplayType_FullPage = 2)] =
              "k_ECartDisplayType_FullPage"),
            _
          ))(_ || {});
        const _ = _.createContext({
          rgCartLevelNotices: [],
          mapValidateNoticesToFootnote: new Map(),
          eDisplayType: 0,
        });
        function _(_) {
          const { validateCart: _, eDisplayType: _, children: _ } = _,
            _ = _(_, _);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          const { rgCartLevelNotices: _ } = _.useContext(_);
          return !_ || !_.length
            ? null
            : _.length == 1
              ? (0, _.jsx)("div", {
                  className: _.HeaderNotices,
                  children: _._.Localize("#Cart_CartLevelErrorFormat", _[0]),
                })
              : (0, _.jsxs)("div", {
                  className: _.HeaderNotices,
                  children: [
                    (0, _.jsx)("div", {
                      children: _._.Localize("#Cart_CartLevelErrorMultiple"),
                    }),
                    (0, _.jsx)("ul", {
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          "li",
                          {
                            children: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                });
        }
        function _(_) {
          const { validateCart: _ } = _,
            { mapValidateNoticesToFootnote: _ } = _.useContext(_);
          if (!_ || !_.size) return null;
          const _ = (_?.cart_items || []).every((_) => !_.errors),
            _ = _
              ? _._.Localize("#Cart_FooterNoticeHeader_Warning")
              : _._.Localize("#Cart_FooterNoticeHeader_MustFix"),
            _ = _()(_.FooterNoticesHeader, !_ && _.MustFix);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _,
                children: _,
              }),
              Array.from(_).map(([_, _]) =>
                (0, _.jsx)(
                  _,
                  {
                    notice: _,
                  },
                  _.index,
                ),
              ),
            ],
          });
        }
        function _(_) {
          const { notice: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.FooterNotice,
            children: [
              (0, _.jsx)("div", {
                className: _.NoticeIndex,
                children: (0, _.jsx)("sup", {
                  children: _.index,
                }),
              }),
              (0, _.jsx)("div", {
                children: _.footnote_text,
              }),
            ],
          });
        }
        function _(_) {
          return _.useContext(_)?.mapValidateNoticesToFootnote.get(_)?.index;
        }
        function _() {
          return _.useContext(_)?.eDisplayType ?? 0;
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _();
          let _ = [],
            _ = !!_.gift_info?.accountid_giftee;
          return (
            _.errors?.duplicate_appids_in_cart?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Error_DuplicateApps_LineItem",
                    ),
                    appids: _.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  lineItem: _,
                },
                "owned_apps",
              ),
            ),
            _.errors?.unavailable_in_country &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            _.errors?.adult_content_restricted &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            _.errors?.commercial_license_restricted &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            _.errors?.gift_not_valid_for_recipient_region &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Error_GiftRecipientInvalid",
                    ),
                  },
                  "gift_recipient_invalid",
                ),
              ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  lineItem: _,
                },
                "coupon_notices",
              ),
            ),
            _.errors?.too_many_in_cart &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            _.errors?.missing_must_own_appids?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _
                      ? _._.Localize(
                          "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                        )
                      : _._.Localize("#Cart_Error_MissingMustOwnApps_LineItem"),
                    appids: _.errors.missing_must_own_appids,
                  },
                  "missing_must_own_appids",
                ),
              ),
            _.warnings?.appids_in_mastersub?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: _.warnings.appids_in_mastersub.flatMap((_) =>
                      _.cart_appid ? [_.cart_appid] : [],
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            _.warnings?.owned_appids?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: _.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            _.warnings?.owned_appids_extra_copy?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Warning_ExtraCopies_LineItem",
                    ),
                    appids: _.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            _.warnings?.price_has_changed &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Warning_PriceChange_LineItem",
                    ),
                  },
                  "price_has_changed",
                ),
              ),
            _.warnings?.non_refundable &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Warning_NoRefund_LineItem",
                    ),
                  },
                  "non_refundable",
                ),
              ),
            _.warnings?.gift_recipient_higher_price &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _._.Localize(
                      "#Cart_Warning_RecipientHigherPrice",
                    ),
                  },
                  "gift_recipient_higher_price",
                ),
              ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  lineItem: _,
                },
                "available_cheaper",
              ),
            ),
            _ &&
              _ !== 2 &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    nGifteeAccountID: _.gift_info.accountid_giftee,
                  },
                  "non_friend_gift",
                ),
              ),
            _
          );
        }
        function _(_) {
          const { purchase_state: _, notice_text: _, appids: _ } = _,
            _ = _(_),
            _ = _() === 2 && !!_;
          return (0, _.jsxs)(_._, {
            children: [
              _,
              _ &&
                (0, _.jsx)("sup", {
                  children: _,
                }),
              " ",
              (0, _.jsx)(_, {
                rgAppIDs: _ ?? [],
              }),
            ],
          });
        }
        function _(_) {
          const { errors: _, warnings: _ } = _;
          return [
            ...(_?.duplicate_appids_in_cart ?? []),
            ...(_?.missing_must_own_appids ?? []),
            ...(_?.owned_appids ?? []),
            ...(_?.appids_in_mastersub ?? []).flatMap((_) =>
              _.cart_appid ? [_.cart_appid] : [],
            ),
            ...(_?.owned_appids ?? []),
            ...(_?.owned_appids_extra_copy ?? []),
          ];
        }
        function _(_) {
          const { rgAppIDs: _ } = _;
          return !_ || _.length == 0
            ? null
            : _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    last: _ >= _.length - 1,
                  },
                  `${_}_${_}`,
                ),
              );
        }
        function _(_) {
          const { appid: _, last: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    appid: _,
                    name_override: _.name,
                  }),
                  !_ &&
                    (0, _.jsx)(_.Fragment, {
                      children: ", ",
                    }),
                ],
              })
            : null;
        }
        function _(_) {
          const { lineItem: _ } = _,
            { data: _ } = (0, _._)(_.item_id),
            { data: _ } = (0, _._)(_.item_id);
          if (
            !(!!!_.gift_info?.accountid_giftee && !!_ && !!_ && !(0, _._)(_, _))
          )
            return null;
          const _ = _.packageid
            ? {
                packageid: _.packageid,
              }
            : {
                bundleid: _.bundleid,
              };
          return (0, _.jsx)(_._, {
            children: _._.LocalizeReact(
              "#Cart_Warning_AvailableAtALowerPrice",
              (0, _.jsx)(_._, {
                ..._,
                name_override: _.purchase_option_name,
              }),
            ),
          });
        }
        function _(_) {
          const { nGifteeAccountID: _ } = _,
            _ = _._.InitFromAccountID(_, _._.EUNIVERSE).ConvertTo64BitString(),
            { data: _ } = (0, _._)();
          return _.useMemo(() => !_ || _.includes(_), [_, _]) || !_._.logged_in
            ? null
            : (0, _.jsx)(_._, {
                children: _._.Localize("#Cart_Warning_GiftToNonFriend"),
              });
        }
        function _(_) {
          const { lineItem: _ } = _;
          if (!_.errors?.owned_appids?.length) return null;
          let _ = !!_.gift_info?.accountid_giftee;
          if (_.errors?.has_existing_billing_agreement)
            return (0, _.jsx)(_, {
              purchase_state: _._._,
              notice_text: _._.Localize("#Cart_Error_ExistingBillingAgreement"),
            });
          {
            const _ = (_.store_item?.included_appids?.length ?? 0) > 1;
            let _ = _._.Localize(
              _
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              _ &&
                (_ = _._.Localize(
                  _
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, _.jsx)(_, {
                purchase_state: _._._,
                notice_text: _,
                appids: _ ? _.errors.owned_appids : void 0,
              })
            );
          }
        }
        function _(_) {
          const { lineItem: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _.errors?.coupon_exclusive_promo &&
                (0, _.jsx)(_, {
                  purchase_state: _._._,
                  notice_text: _._.Localize(
                    "#Cart_Error_CouponIsExclusivePromo",
                  ),
                }),
              _.errors?.invalid_coupon &&
                (0, _.jsx)(_, {
                  purchase_state: _._._,
                  notice_text: _._.Localize("#Cart_Error_CouponIsInvalid"),
                }),
              _.errors?.invalid_coupon_for_item &&
                (0, _.jsx)(_, {
                  purchase_state: _._._,
                  notice_text: _._.Localize(
                    "#Cart_Error_CouponIsInvalidForItem",
                  ),
                }),
            ],
          });
        }
        function _(_, _) {
          return _.useMemo(() => {
            let _ = new Map(),
              _ = new Map(),
              _ = 1;
            const _ = (_, _) => {
              _.has(_) ||
                _.set(_, {
                  index: _++,
                  footnote_text: _,
                });
            };
            let _ = !1;
            _?.cart_items?.forEach((_) => {
              let _ = !!_.gift_info?.accountid_giftee;
              _.errors && (_ = !0),
                _.errors?.duplicate_appids_in_cart?.length &&
                  _(_._._, _._.Localize("#Cart_Error_DuplicateApps_FootNote")),
                _.errors?.owned_appids?.length &&
                  (_.errors?.has_existing_billing_agreement
                    ? _(
                        _._._,
                        _._.Localize(
                          "#Cart_Error_ExistingBillingAgreement_FootNote",
                        ),
                      )
                    : _(
                        _._._,
                        _._.Localize(
                          _
                            ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                            : "#Cart_Error_AlreadyOwned_FootNote",
                        ),
                      )),
                _.errors?.unavailable_in_country &&
                  _(
                    _._._,
                    _._.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                  ),
                _.errors?.adult_content_restricted &&
                  _(
                    _._._,
                    _._.Localize("#Cart_Error_AdultContentRestricted_FootNote"),
                  ),
                _.errors?.commercial_license_restricted &&
                  _(
                    _._._,
                    _._.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_FootNote",
                    ),
                  ),
                _.errors?.missing_must_own_appids &&
                  _(
                    _._._,
                    _
                      ? _._.Localize(
                          "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                        )
                      : _._.Localize("#Cart_Error_MissingMustOwnApps_FootNote"),
                  ),
                _.warnings?.appids_in_mastersub?.length &&
                  _(
                    _._._,
                    _._.Localize("#Cart_Error_MasterSubscription_FootNote"),
                  ),
                _.warnings?.price_has_changed &&
                  _.set(
                    _._._,
                    _._.Localize("#Cart_Warning_PriceChange_FootNote"),
                  );
            });
            let _ = Array.from(_.values());
            return (
              _ && _.unshift(_._.Localize("#Cart_CartLevelErrorNotice")),
              {
                rgCartLevelNotices: _,
                mapValidateNoticesToFootnote: _,
                eDisplayType: _,
              }
            );
          }, [_, _]);
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
          _ = __webpack_require__._(_);
        const _ = {
          direction: "right",
          style: {
            width: "320px",
            height: `${320 * (125 / 184)}px`,
          },
        };
        function _(_) {
          const { name_override: _, ..._ } = _,
            { data: _ } = (0, _._)(_ ? void 0 : _),
            _ = _ ?? _?.name;
          return (0, _.jsx)(_._, {
            _: _,
            hoverProps: _,
            name: _,
            className: _().LineItemStoreHover,
            bShowWishlistButton: !1,
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
        function _(_) {
          const {
            lineItems: _,
            cartValidation: _,
            renderLineItem: _ = _,
            scrollable: _ = !1,
          } = _;
          if (!_.length) return (0, _.jsx)(_, {});
          const _ = _?.cart_items
            ? _.cart_items.reduce((_, _) => ((_[_.line_item_id] = _), _), {})
            : {};
          return (0, _.jsx)(_._, {
            scrollable: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _._.Provider,
                {
                  value: !_ && _ == 0,
                  children: _
                    ? (0, _.jsx)(_._, {
                        fallback: (_) =>
                          (0, _.jsx)(_, {
                            item: _,
                            error: _,
                          }),
                        children: (0, _.jsx)(_, {
                          item: _,
                          validatedItem: _[_.line_item_id],
                          renderLineItem: _,
                        }),
                      })
                    : (0, _.jsx)(_._, {}),
                },
                _?.line_item_id || _,
              ),
            ),
          });
        }
        function _(_) {
          const { item: _, validatedItem: _, renderLineItem: _ } = _,
            _ = _(_);
          if (!_) throw `Unknown line item type (${_.type})`;
          const { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _ ? (0, _._)(_) : _;
          return (
            (0, _._)(_),
            (0, _._)(_),
            _ && (!_.visible || _ === null)
              ? (0, _.jsx)(_, {
                  lineItemID: _.line_item_id,
                  validatedItem: _,
                  storeItem: _,
                })
              : !_ || !_ || !_ || !_
                ? (0, _.jsx)(_._, {})
                : (0, _.jsx)(_, {
                    lineItem: _,
                    validatedItem: _,
                    storeItem: _,
                    displayItem: _,
                    purchaseOption: _,
                    renderLineItem: _,
                  })
          );
        }
        function _(_) {
          const { item: _, error: _ } = _,
            _ = (0, _._)(_.line_item_id);
          return (0, _.jsxs)(_._, {
            className: _().ErrorLineItem,
            children: [
              (0, _.jsxs)("div", {
                className: _().Left,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Error,
                    children: _._.Localize("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().Muted,
                    children: _.message,
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                onActivate: () => _.mutate(),
                className: _().RemoveButton,
                children: _._.Localize("#Cart_Remove"),
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)(_._, {
            className: _().ErrorLineItem,
            children: (0, _.jsx)("div", {
              className: _().Left,
              children: (0, _.jsx)("div", {
                className: _().LineItemTitle,
                children: _._.Localize("#Cart_Empty"),
              }),
            }),
          });
        }
        function _(_) {
          const _ = _.type;
          switch (_) {
            case _._._:
              return {
                packageid: _.packageid,
              };
            case _._._:
              return {
                bundleid: _.bundleid,
              };
            case _._._:
              return;
            default:
              (0, _._)(_, `Unhandled type: ${_}`);
          }
        }
        function _(_) {
          const {
              storeItem: _,
              displayItem: _,
              lineItem: _,
              purchaseOption: _,
              validatedItem: _,
              renderLineItem: _,
            } = _,
            _ = _.line_item_id,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.isPending || _.isSuccess,
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            { data: _, isLoading: _ } = (0, _._)(),
            _ = _.useMemo(() => _.filter((_) => _?.has(_)), [_, _]),
            _ = _.useId();
          if (_) return (0, _.jsx)(_._, {});
          const _ = _.flags?.is_gift,
            _ = _.length > 0 && _.length === _.length,
            _ = !_ && _.length > 0 && !_;
          return _({
            lineItem: _,
            storeItem: _,
            validatedItem: _,
            children: (0, _.jsxs)(_.Fragment, {
              children: [
                _ && (0, _.jsx)(_._, {}),
                (0, _.jsxs)(_._, {
                  className: _()(
                    _().InnerLineItemCtn,
                    _ && _().PendingLineItem,
                  ),
                  "flow-children": "row",
                  children: [
                    (0, _.jsx)("div", {
                      className: _()(_().LineItemColumn, _().LineItemCapsule),
                      children: (0, _.jsx)(_._, {
                        storeItem: _,
                        feature: "cart-items",
                        noImpressionTracking: !0,
                        className: _().ImageLink,
                        children: (0, _.jsx)(_, {
                          storeItem: _,
                          alt: _.name,
                          blurred: !!_.errors?.adult_content_restricted,
                        }),
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().LineItemDetailsCtn,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _().LineItemDetailsRowTop,
                          children: (0, _.jsx)("div", {
                            className: _().LineItemTitle,
                            _: _,
                            children: _.name,
                          }),
                        }),
                        _?.is_coming_soon &&
                          (0, _.jsx)(_, {
                            storeItem: _,
                          }),
                        (0, _.jsxs)(_, {
                          validatedItem: _,
                          children: [
                            (0, _.jsx)(_, {
                              storeItem: _,
                              purchaseOption: _,
                            }),
                            (0, _.jsx)(_, {
                              purchaseOption: _,
                            }),
                            (0, _.jsx)(_, {
                              storeItem: _,
                              purchaseOption: _,
                            }),
                          ],
                        }),
                        (0, _.jsx)(_, {
                          validatedItem: _,
                        }),
                        _ &&
                          (0, _.jsx)(_, {
                            appids: _,
                          }),
                        (0, _.jsxs)(_._, {
                          className: _().LineItemSpaceBetween,
                          children: [
                            (0, _.jsx)("div", {
                              className: _()(
                                _().LineItemCol,
                                _().PlatformIcons,
                              ),
                              children: (0, _.jsx)(_._, {
                                _: (0, _._)(_),
                              }),
                            }),
                            (0, _.jsx)(_, {
                              purchaseOption: _,
                              validatedItem: _,
                            }),
                          ],
                        }),
                        (0, _.jsx)(_, {
                          lineItem: _,
                          purchaseOption: _,
                          validatedItem: _,
                          rgAppIDs: _,
                          bAllAppsPrivate: _,
                          fnRemoveLineItem: _.mutate,
                          accessibilityId: _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { lineItemID: _, validatedItem: _, storeItem: _ } = _,
            _ = (0, _._)(_),
            _ = _.isPending;
          return (0, _.jsxs)(_._, {
            placeholder: !0,
            children: [
              _ && (0, _.jsx)(_._, {}),
              (0, _.jsxs)(_._, {
                className: _()(_().InnerLineItemCtn, _ && _().PendingLineItem),
                "flow-children": "row",
                children: [
                  (0, _.jsx)("div", {
                    className: _()(_().LineItemColumn, _().LineItemCapsule),
                    children: (0, _.jsx)(_._, {
                      storeItem: _,
                      noImpressionTracking: !0,
                      children: (0, _.jsx)(_, {
                        storeItem: _,
                      }),
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().LineItemDetailsCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().LineItemDetailsRowTop,
                        children: (0, _.jsx)("div", {
                          className: _().LineItemTitle,
                          children: _?.name,
                        }),
                      }),
                      !!_ &&
                        (0, _.jsx)(_, {
                          validatedItem: _,
                        }),
                      (0, _.jsx)(_._, {
                        className: _().LineItemSpaceBetween,
                        children: (0, _.jsx)(_._, {
                          focusable: !0,
                          onActivate: () => _.mutate(),
                          className: _().RemoveLineItem,
                          children: _._.Localize("#Cart_Remove"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { storeItem: _, alt: _, blurred: _ } = _,
            { data: _ } = (0, _._)((0, _._)(_));
          let _ = `${_._.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          return (
            _?.header
              ? (_ =
                  _._.STORE_ITEM_BASE_URL +
                  _.asset_url_format.replace("${FILENAME}", _.header))
              : _?.small_capsule &&
                (_ =
                  _._.STORE_ITEM_BASE_URL +
                  _.asset_url_format.replace("${FILENAME}", _.small_capsule)),
            (0, _.jsx)("img", {
              alt: _ ?? _.name,
              className: _ ? _().HeaderImgBlurred : _().HeaderImg,
              src: _,
            })
          );
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              children: _.children,
            }),
          });
        }
        function _(_) {
          const { validatedItem: _, children: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().LineItemSpaceBetween,
            children: [
              (0, _.jsx)(_._, {
                lineItem: _,
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { storeItem: _ } = _,
            { data: _ } = (0, _._)((0, _._)(_)),
            _ = (0, _._)(_);
          if (!_) return null;
          let _ = _._.Localize("#Cart_ComingSoon", _);
          return (
            ["text_tba", "text_comingsoon"].includes(_.coming_soon_display) &&
              (_ = _),
            (0, _.jsx)(_._, {
              children: _,
            })
          );
        }
        function _(_) {
          const { purchaseOption: _, validatedItem: _ } = _;
          let _ = _?.formatted_original_price,
            _ = _?.formatted_final_price,
            _ = _?.discount_pct;
          const _ = _.subtotal?.amount_in_cents !== _?.final_price_in_cents;
          return (
            _.original_price &&
              _.subtotal &&
              _ &&
              ((_ = _.original_price.formatted_amount),
              (_ = _.subtotal.formatted_amount),
              (_ = (0, _._)(_))),
            (0, _.jsx)("div", {
              className: _().LineItemRightCol,
              children: (0, _.jsx)(_._, {
                className: _().PriceWidget,
                formatted_orig_price: _,
                formatted_final_price: _,
                discount_percent: _,
                bHideDiscountPercentForCompliance:
                  _.hide_discount_pct_for_compliance,
                bDiscountFromCoupon: !!_.coupon_discount?.amount_in_cents,
              }),
            })
          );
        }
        function _(_) {
          const {
              lineItem: _,
              purchaseOption: _,
              validatedItem: _,
              rgAppIDs: _,
              bAllAppsPrivate: _,
              fnRemoveLineItem: _,
              accessibilityId: _,
            } = _,
            _ = (0, _._)(),
            [_] = (0, _._)(),
            _ =
              _?.accountid_giftee ||
              (_ ? _.gift_info?.accountid_giftee : void 0),
            _ = (0, _._)(),
            _ =
              (0, _._)() && !_?.restrict_add_additional_to_cart && !(0, _._)(_),
            _ = _.errors?.adult_content_restricted,
            _ = (0, _._)(
              _.packageid,
              _.bundleid,
              _(_),
              void 0,
              "cart-add-additional",
            ),
            _ = _.useId(),
            _ = _.useId();
          return (0, _.jsxs)(_._, {
            className: _().LineItemSpaceBetween,
            children: [
              (0, _.jsx)("div", {
                className: _()(_().LineItemCol, _().PurchaseOptionPickerCtn),
                children: _
                  ? (0, _.jsx)(_, {
                      recipient: _,
                    })
                  : (0, _.jsx)(_, {
                      lineItem: _,
                      rgAppIDs: _,
                      bAllAppsPrivate: _,
                      purchaseOption: _,
                    }),
              }),
              (0, _.jsxs)("div", {
                className: _()(_().LineItemRightCol, _().AddRemoveLinks),
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_._, {
                          toolTipContent: _._.Localize(
                            "#Cart_LineItem_Add_Tooltip",
                          ),
                          usePointerEvents: !0,
                          children: (0, _.jsx)(_._, {
                            onActivate: () => !_.isPending && _.mutate(),
                            className: _().AddLineItem,
                            _: _,
                            "aria-labelledby": `${_} ${_}`,
                            children: _._.Localize("#Cart_Add"),
                          }),
                        }),
                        "|",
                      ],
                    }),
                  !_ &&
                    (0, _.jsx)(_._, {
                      onActivate: () => _(),
                      className: _().RemoveLineItem,
                      _: _,
                      "aria-labelledby": `${_} ${_}`,
                      children: _._.Localize("#Cart_Remove"),
                    }),
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        "| ",
                        (0, _.jsx)("a", {
                          href: `${_._.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                          className: _().VerifyLineItem,
                          children: _._.Localize("#Cart_Verify"),
                        }),
                        " ",
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { data: _ } = (0, _._)(_.recipient),
            _ = _?.public_data?.persona_name;
          return (0, _.jsx)("div", {
            className: _().GiftForNotice,
            children: _._.LocalizeReact(
              "#Cart_GiftForNotice",
              _
                ? (0, _.jsx)("span", {
                    className: _().Name,
                    children: _,
                  })
                : "",
            ),
          });
        }
        function _(_) {
          const { storeItem: _, purchaseOption: _ } = _,
            _ = !!_.requires_shipping && _.item_type === _._._,
            { data: _ } = (0, _._)(_ ? _._ : void 0);
          return _
            ? (0, _.jsx)(_._, {
                children: _._.Localize(
                  "#Cart_ShippingEstimate_DeliveryDate",
                  (0, _._)(_),
                ),
              })
            : null;
        }
        function _(_) {
          const { purchaseOption: _ } = _;
          if (!_.requires_shipping) return null;
          const _ = _._.country_code;
          return ["GB"].includes(_)
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)("a", {
                    className: _().ComplianceLink,
                    target: "_blank",
                    href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                    rel: "noreferrer",
                    children: _._.Localize(
                      "#Cart_LineItem_Hardware_Compliance_Label",
                    ),
                  }),
                }),
              })
            : null;
        }
        var _ = ((_) => (
            (_[(_.k_EBillingAgreementTypeInvalid = 0)] =
              "k_EBillingAgreementTypeInvalid"),
            (_[(_.k_EBillingAgreementTypeSteam = 1)] =
              "k_EBillingAgreementTypeSteam"),
            (_[(_.k_EBillingAgreementTypeGame = 2)] =
              "k_EBillingAgreementTypeGame"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_ETimeUnitNone = 0)] = "k_ETimeUnitNone"),
            (_[(_.k_ETimeUnitSecond = 1)] = "k_ETimeUnitSecond"),
            (_[(_.k_ETimeUnitMinute = 2)] = "k_ETimeUnitMinute"),
            (_[(_.k_ETimeUnitHour = 3)] = "k_ETimeUnitHour"),
            (_[(_.k_ETimeUnitDay = 4)] = "k_ETimeUnitDay"),
            (_[(_.k_ETimeUnitWeek = 5)] = "k_ETimeUnitWeek"),
            (_[(_.k_ETimeUnitMonth = 6)] = "k_ETimeUnitMonth"),
            (_[(_.k_ETimeUnitYear = 7)] = "k_ETimeUnitYear"),
            _
          ))(_ || {});
        const _ = {
          1: "Second",
          2: "Minute",
          3: "Hour",
          4: "Day",
          5: "Week",
          6: "Month",
          7: "Year",
        };
        function _(_) {
          const { storeItem: _, purchaseOption: _ } = _;
          if (_.item_type !== _._._) return null;
          const _ = _.recurrence_info;
          if (!_) return null;
          let _ = "#Package";
          _.billing_agreement_type === 2 && (_ = "#GameBillingPackage"),
            _.formatted_final_price && _.discount_pct && (_ += "WithDiscount");
          const _ = _[_.renewal_time_unit],
            _ = _ + "CostIncludesSubscriptionBy" + _;
          return (0, _.jsx)(_._, {
            children: _._.Localize(
              _,
              _.formatted_final_price,
              _.formatted_renewal_price,
              _.renewal_time_period,
              _.discount_pct,
            ),
          });
        }
        function _(_) {
          return _.user_can_purchase_as_gift;
        }
        function _(_) {
          return !_.is_commercial_license && !_.requires_shipping;
        }
        function _(_) {
          const {
              lineItem: _,
              rgAppIDs: _,
              bAllAppsPrivate: _,
              purchaseOption: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(
              _.gift_info?.accountid_giftee
                ? _.gift_info.accountid_giftee
                : null,
            ),
            _ = !_(_) || _,
            _ = !_(_);
          let _ = [
            {
              data: "myself",
              label: _._.Localize("#Cart_LineItemOptions_Myself"),
            },
          ];
          if (
            (_ ||
              _.push({
                data: "private",
                label: _._.Localize("#Cart_LineItemOptions_Privately"),
                tooltip: _._.Localize("#Cart_LineItemOptions_PrivateTooltip"),
              }),
            !_)
          ) {
            const _ = _?.public_data?.persona_name;
            _.gift_info?.accountid_giftee && _
              ? _.push({
                  data: "gift",
                  label: _._.Localize(
                    "#Cart_LineItemOptions_GiftForPersona",
                    _,
                  ),
                })
              : _.push({
                  data: "gift",
                  label: _._.Localize("#Cart_LineItemOptions_Gift"),
                });
          }
          let _ = _.flags?.is_gift ? "gift" : "myself";
          if ((_ === "myself" && _ && (_ = "private"), _.length === 1))
            return null;
          const _ = (_) => {
            if (_ === _.data) return;
            const _ = (_) =>
                _.mutate({
                  rgAppIDs: _,
                  bPrivate: _,
                }),
              _ = (_) =>
                _.mutate({
                  lineItemID: _.line_item_id,
                  lineItemFlags: {
                    ..._.flags,
                    is_gift: _,
                  },
                  giftInfo: _ ? _.gift_info : void 0,
                });
            _ === "private" ? _(!1) : _ === "gift" && _(!1),
              _.data === "private" ? _(!0) : _.data === "gift" && _(!0);
          };
          return (0, _.jsx)(_._, {
            onSelectionChange: _,
            selectedValue: _.find((_) => _.data === _) ?? null,
            options: _,
            getOptionLabel: (_) =>
              _.tooltip
                ? (0, _.jsx)(_._, {
                    toolTipContent: _.tooltip,
                    usePointerEvents: !0,
                    children: (0, _.jsx)("span", {
                      children: _.label,
                    }),
                  })
                : _.label,
            size: "1",
            placement: "bottom-start",
          });
        }
        const _ = _.memo(function (_) {
          const { validatedItem: _ } = _,
            _ = _.included_packageids ?? [],
            _ = (0, _._)(),
            _ = (0, _._)({
              queries: _.map((_) =>
                (0, _._)(_, {
                  packageid: _,
                }),
              ),
            }),
            _ = [
              ...new Set(
                _.map((_) => _.data)
                  .filter((_) => !!_)
                  .flat(),
              ),
            ];
          return !_.length || (_.length == 1 && !_.item_id?.bundleid)
            ? null
            : (0, _.jsxs)(_._, {
                text: !0,
                children: [
                  (0, _.jsxs)("span", {
                    children: [
                      _._.LocalizePlural("#Cart_IncludesItems", _.length),
                      ":",
                      " ",
                    ],
                  }),
                  _.map((_, _) =>
                    (0, _.jsxs)(
                      _.Fragment,
                      {
                        children: [
                          _ > 0 && ", ",
                          (0, _.jsx)(_._, {
                            appid: _,
                          }),
                        ],
                      },
                      _,
                    ),
                  ),
                ],
              });
        });
        function _(_) {
          const { appids: _ } = _,
            _ = _.map((_, _) =>
              (0, _.jsxs)(
                _.Fragment,
                {
                  children: [
                    _ > 0 && ", ",
                    (0, _.jsx)(_._, {
                      appid: _,
                    }),
                  ],
                },
                _,
              ),
            );
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)("span", {
                children: [
                  _._.Localize("#Cart_Notice_SomeAppsPrivate"),
                  "\xA0",
                ],
              }),
              _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { scrollable: _ = !1, children: _ } = _,
            _ = _ ? _._ : _._;
          return (0, _.jsx)(_, {
            className: _()(_().LineItemsCtn, _ && _().Scrollable),
            focusableIfEmpty: !0,
            children: _,
          });
        }
        function _(_) {
          const { text: _, children: _, className: _, noWrap: _ } = _;
          return (0, _.jsx)(_._, {
            "flow-children": "row",
            className: _()(
              _().LineItemDetailsRow,
              _ && _().Text,
              _ && _().NoWrap,
              _,
            ),
            children: _,
          });
        }
        const _ = _.createContext(!1);
        function _(_) {
          const { placeholder: _, className: _, children: _ } = _,
            _ = _.useContext(_);
          return (0, _.jsx)(_._, {
            className: _()(
              _().LineItemWrapper,
              _ && _().LineItemPlaceholder,
              _,
            ),
            fnScrollIntoViewHandler: _
              ? () => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              : void 0,
            children: _,
          });
        }
        function _() {
          return (0, _.jsx)(_, {
            placeholder: !0,
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _().LoadingThrobber,
            children: (0, _.jsx)(_._, {
              size: "medium",
              position: "center",
              msDelayAppear: 250,
            }),
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_, {
            text: !0,
            children: (0, _.jsx)("div", {
              className: _().Warning,
              children: _,
            }),
          });
        }
        function _(_) {
          if (_.coupon_applied) return _.coupon_applied.discount_pct;
          const _ = parseInt(_.original_price.amount_in_cents),
            _ = parseInt(_.subtotal.amount_in_cents);
          return Math.min(99, Math.floor(((_ - _) / _) * 100 + 0.5));
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
            include_basic_info: !0,
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
            include_included_items: !0,
          },
          _ = {
            ..._,
            include_included_items: !0,
            include_all_purchase_options: !0,
            included_item_data_request: _,
          };
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            [_] = (0, _._)(),
            { storeBrowseContext: _, cacheStoreItemData: _ } = (0, _._)();
          return (0, _._)(_(_, _, _, _, _));
        }
        function _(_, _, _, _, _) {
          return {
            queryKey: (0, _._)(_, _),
            queryFn: async () => _(_, _, _, _, _, _),
            staleTime: 1 / 0,
            enabled: _._.logged_in || !(0, _._)(_),
          };
        }
        function _(_) {
          return !_?.cart_items?.length || _.cart_items.length === 0
            ? !1
            : _.cart_items.every(
                ({ store_item: _ }) =>
                  _?.item_type == _._._ &&
                  !!(_.self_purchase_option || _.best_purchase_option)
                    ?.requires_shipping,
              );
        }
        function _(_) {
          return !_?.cart_items?.length || _.cart_items.length === 0
            ? !1
            : _.cart_items.every(
                ({ store_item: _, gift_info: _ }) =>
                  _?.item_type == _._._ &&
                  (!!_?.accountid_giftee || !!_?.email_giftee),
              );
        }
        async function _(_, _, _, _, _, _) {
          const _ = _._.Init(_._);
          (0, _._)(_) || (0, _._)(_)
            ? (_.Body().set_gidshoppingcart(_.gid),
              _ && _.Body().set_gift_info(_._.fromObject(_)))
            : (0, _._)(_) && _.Body().set_gidreplayoftransid(_.gid),
            (0, _._)(_, _),
            _ && (0, _._)(_, _);
          const _ = await _._.ValidateCart(_, _);
          if (
            (_.BSuccess() ||
              console.warn(
                `Failed to validate shopping cart: ${_.GetEResult()}`,
              ),
            _ && _)
          )
            for (const _ of _.Body().cart_items()) _(_.store_item(), _);
          return _.Body().toObject();
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
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: ["GetFriendsList", _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              return (await _._.GetFriendsList(_, _))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((_) => {
                  if (!_.ulfriendid()) return !1;
                  const _ = new _._(_.ulfriendid());
                  return (
                    (_.efriendrelationship() == _._UC ||
                      _.efriendrelationship() == _.Ec7) &&
                    _.BIsIndividualAccount()
                  );
                })
                .map((_) => _.ulfriendid());
            },
            enabled: !!_,
          };
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount();
          return useQuery(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: ["GetFriendNicknameMap", _],
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request),
                _ = await PlayerService.GetNicknameList(_, _);
              return new Map(
                _.Body()
                  .toObject()
                  ?.nicknames?.map((_) => [_.accountid, _.nickname]),
              );
            },
          };
        }
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_4SG2MjCMpIRt6W-Zj4Oxm",
          HeaderNotices: "_2BtczALVCY2zzCLnj8oga9",
          FooterNoticesHeader: "_2itvgQZbn40lY_jj5sG8it",
          MustFix: "_1SFErQFwOLmnLCBVlq9zxK",
          FooterNotice: "_1WMk6EdVNns2fKuDOCrBX3",
          NoticeIndex: "_3N9Ik0sMA90E7jGHJqycWH",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LineItemStoreHover: "_3DfrtekI1PCxuXbfj85Zwp",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1MfAwU630QwDv6FuV9c_Dr",
          LineItemsCtn: "_3ypRUtQoOfOrCsyHlzfGm4",
          StoreSalePriceBox: "_5m_q0MLlnLkt_KBd7iMbO",
          StoreSaleDiscountedPriceCtn: "_1ZzX6NkuELfMhPL0SJCQSK",
          Scrollable: "_2A58_XmT-KCSwE_kh-xntF",
          LineItemWrapper: "XjPmFc2t_i1DAuEXEbIX",
          fadeIn: "xtUORpc8Xy9Hs_tdAIitT",
          ImageLink: "fGORfr7ZEqjO3WrgO6A4t",
          LineItemCapsule: "_2Xz_WXO8PfREP4c9ZWAuNg",
          HeaderImg: "_37_1K2XQrVBwncWFXTcpMP",
          HeaderImgBlurred: "_3hT2r7Sb_Yx9PdYSB0rjpl",
          LineItemPlaceholder: "_1_mV-2sC0r25eLrKyufPRK",
          AddRemoveLinks: "_2Agry3evdkG3gKPyhNf7Hz",
          RemoveLineItem: "_3YCgcpoCojlbS6DvkNsG2J",
          AddLineItem: "_2qvlyUCwtTBUslo1Z7-RlG",
          VerifyLineItem: "_2HO_qGTXtEZz_EF60S6hfS",
          LineItemRightCol: "ysGS-IPPWEkwN-O5rr-0V",
          InnerLineItemCtn: "_3F0SnUeC_obtI4WyQtijAa",
          LineItemDetailsCtn: "_3GKl4T2MbvnGPvRzyXC5nQ",
          LineItemCol: "HhD4RK0A4phOlAwZQDckk",
          LineItemDetailsRow: "_1wLomHB2PWPNx7TsNYpdtm",
          Text: "_2aGDkEAUaGvF4KHHZRRkEj",
          NoWrap: "c0VFjXtN_fgP-PR6wQe66",
          ComplianceLink: "_1Gqg5Ajp0R5LqzbJ4Wtecz",
          LineItemDetailsRowTop: "_1aXXp4afkXP3Ez03MjTY3D",
          LineItemSpaceBetween: "_3L6hUlrzXOezye2BqWz-T7",
          LineItemTitle: "EflKs0JjldhDSxbUBaiOp",
          LineItemPricingOptions: "_2BTcfC4-tZENmEAXbVzKA7",
          PlatformIcons: "_2FgjpNRRiZkDXAB53vFFOh",
          PurchaseOptionPickerCtn: "_2iq-WR8SMiZcAwSnm-8-eE",
          AddLineItemCtn: "_3-GZz-m5p_fxd2pqPGK6u9",
          AddLineItemIcon: "_4Uz7u01J6OO_P0hhfb0Kc",
          PendingLineItem: "_3w61e3curroiu7lCOKvLN8",
          FlexRow: "_2Y0WvaYzp-79xegxjV_kQI",
          PriceWidget: "_3_q-F_MXXBH_JQPJvWznnc",
          Warning: "_1_vNtL4JTtFLtSgY25zz_5",
          LineItemNoticeAppsCtn: "_2bBPt2vaBRl7xTiWEkA-PR",
          LoadingThrobber: "_9ECtylscKVGNrQpLPlds0",
          WhiteText: "_1CYn6Bwc5kuZ25-Gyb9btE",
          ErrorLineItem: "_2Qnb-DOaU8BbFWOUBG3hs1",
          Left: "Twv2unKjIVTB3vmgieygi",
          Error: "_2LPurUnl-MyMX6q6B0uNX",
          Muted: "_3efIWtJm5nAuQLmq9N3nJd",
          GiftForNotice: "tKoWmz4HQdpU6S-Fq6IEh",
          Name: "_2BZrRaucjIMeqixZMVlakn",
          RemoveButton: "_1j8t9ZjX3tyKrSBnkY6IeG",
        };
      },
    },
  ]);
})();

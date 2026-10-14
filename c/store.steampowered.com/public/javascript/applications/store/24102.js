(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [24102],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            CartErrorModal: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "giftee-hint-2",
          _ = 600;
        function _() {
          const { data: _ } = _(),
            _ = (0, _._)(_?.nGifteeAccountID);
          if (_.isLoading || !_?.nGifteeAccountID)
            return {
              gifteeHint: _,
              gifteePlayerDetails: void 0,
            };
          if (_.data)
            return {
              gifteeHint: _,
              gifteePlayerDetails: _.data,
            };
          const _ = {
            public_data: {
              steamid: _._.InitFromAccountID(
                _.nGifteeAccountID,
                _._.EUNIVERSE,
              ).ConvertTo64BitString(),
              persona_name: _.strPersonaName,
              sha_digest_avatar: _.rgAvatarDigest
                ? new Uint8Array(_.rgAvatarDigest)
                : void 0,
            },
          };
          return {
            gifteeHint: _,
            gifteePlayerDetails: _,
          };
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = await _.GetObject(_);
              return _
                ? !_.rtCreated || _.rtCreated < Date.now() / 1e3 - _
                  ? (await _.RemoveObject(_), null)
                  : _
                : null;
            },
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              _
                ? await _.StoreObject(_, {
                    ..._,
                    rtCreated: Date.now() / 1e3,
                  })
                : await _.RemoveObject(_);
            },
            onMutate: async (_) => {
              await _.cancelQueries({
                queryKey: [_],
              }),
                _ &&
                  (_ = {
                    ..._,
                    rtCreated: Date.now() / 1e3,
                  }),
                _.setQueryData([_], _);
            },
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { closeCart: _, lineItemIDs: _, bPackagesReplaced: _ } = _,
            _ = (0, _._)(),
            { data: _ } = (0, _._)(),
            { data: _ } = (0, _._)(),
            _ = (0, _._)(_),
            _ = (0, _._)(`${_._.STORE_BASE_URL}cart/`);
          if (
            (_.useEffect(() => {
              _ && _?.length == 0 && _();
            }, [_, _]),
            !_ || !_)
          )
            return null;
          const _ = _._.Localize(
            _ ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
          );
          return (0, _.jsx)(_._, {
            validateCart: _,
            eDisplayType: _._.k_ECartDisplayType_Modal,
            children: (0, _.jsx)(_._, {
              onClose: _,
              navID: "CartModal",
              strTitle: _,
              children: (0, _.jsxs)(_._, {
                className: _.ShoppingCartModalContent,
                "flow-children": "column",
                children: [
                  (0, _.jsx)(_._, {
                    lineItems: _,
                    cartValidation: _,
                    scrollable: !0,
                  }),
                  (0, _.jsx)(_, {
                    lineItems: _,
                    cartValidation: _,
                  }),
                  (0, _.jsxs)(_._, {
                    className: _.ShoppingCartModalBtns,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: _._.Localize("#Cart_ContinueShopping"),
                      }),
                      (0, _.jsx)(_._, {
                        autoFocus: !0,
                        href: _,
                        children: _._.Localize(
                          "#Cart_ViewMyCart",
                          _?.line_items?.length ?? _.length,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { result: _, onDismiss: _ } = _;
          return (0, _._)()
            ? (0, _.jsx)(_._, {
                onClose: _,
                navID: "CartErrorModal",
                strTitle: _._.Localize("#Error_Generic"),
                children: (0, _.jsxs)("div", {
                  className: _.ErrorModalContent,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.ErrorModalMessage,
                      children: _._.Localize("#Cart_ErrorUpdating"),
                    }),
                    (0, _.jsx)("div", {
                      className: _.ErrorModalCode,
                      children: _ ? _._.Localize("#Cart_ErrorCode", _) : "",
                    }),
                    (0, _.jsx)("div", {
                      className: _.ErrorModalBottom,
                      children: (0, _.jsx)(_._, {
                        autoFocus: !0,
                        onClick: _,
                        children: _._.Localize("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function _(_) {
          const { cartValidation: _, lineItems: _ } = _,
            _ = _.useRef(!1),
            [_, _] = _.useState(!1),
            { gifteeHint: _, gifteePlayerDetails: _ } = _(),
            _ = (0, _._)(),
            _ = _(),
            _ = (0, _._)(),
            _ = _?.public_data,
            _ = _?.cart_items;
          let _ = !_ && !!_?.nGifteeAccountID && !!_ && !_ && !!_?.cart_items;
          if (_) {
            const _ = new Map(_.map((_) => [_.line_item_id, _]));
            _ = !!_.find(
              (_) =>
                !_.gift_info?.accountid_giftee &&
                !!_.get(_.line_item_id)?.can_purchase_as_gift,
            );
          }
          if (
            (_.useEffect(() => {
              _ &&
                !_.current &&
                ((0, _._)()?.AddEvent(_._._), (_.current = !0));
            }, [_]),
            !_)
          )
            return null;
          const _ = () => {
              (0, _._)()?.AddEvent(_._._), _.mutate(null);
            },
            _ = () => {
              for (const _ of _)
                _.mutate({
                  lineItemID: _.line_item_id,
                  lineItemFlags: {
                    is_gift: !0,
                  },
                  giftInfo: {
                    ..._.gift_info,
                    accountid_giftee: _.nGifteeAccountID,
                  },
                  gidCoupon: _.gidcoupon_applied,
                });
              _.mutate(_), _(!0), (0, _._)()?.AddEvent(_._._);
            },
            _ = (0, _.jsxs)("a", {
              href: (0, _._)(_),
              target: "_blank",
              rel: "noreferrer",
              children: [
                (0, _.jsx)(_._, {
                  size: "X-Small",
                  statusPosition: "right",
                  playerLinkDetails: _,
                  alt: _.persona_name ?? "",
                }),
                (0, _.jsx)("div", {
                  className: _.PersonaName,
                  children: _.persona_name,
                }),
              ],
            });
          return (0, _.jsxs)(_._, {
            className: _.GifteeHintCtn,
            align: "center",
            gap: "3",
            direction: "row",
            children: [
              (0, _.jsx)(_._, {
                _: "div",
                align: "center",
                className: _.GifteeHint,
                children: _._.LocalizeReact("#Cart_GifteeHint_Wishlist", _),
              }),
              (0, _.jsxs)(_._, {
                gap: "2",
                direction: "row",
                align: "center",
                children: [
                  (0, _.jsx)(_._, {
                    size: "1",
                    color: "dull",
                    onClick: _,
                    children: _._.Localize("#Button_No"),
                  }),
                  (0, _.jsx)(_._, {
                    size: "1",
                    onClick: _,
                    children: _._.Localize("#Button_Yes"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1HYjtPJd8D-AHSlOebB4f-",
          ShoppingCartModalContent: "_1859zsZbgy1ECsQDqMGedi",
          ShoppingCartModalBtns: "md6XqKKeYLOQhwbHaayWp",
          GifteeHintCtn: "_3aFtAPVADDqnrvZKg8_sNL",
          GifteeHint: "_3BT_cAM78V_Zp-BQSJ5VIs",
          PersonaName: "_2heOUrUMUce3PVqrccBfAS",
          ErrorModalContent: "_1lKR42gC3dveUEc7REcDQU",
          ErrorModalMessage: "AqeEBZKe681APQ3j1fRXB",
          ErrorModalBottom: "_3dX7MBqqR019JJaCTLX3ig",
          ErrorModalCode: "_290RyArlGp7DySTEwdIPmV",
        };
      },
    },
  ]);
})();

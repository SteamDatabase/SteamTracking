"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2965],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ShoppingCartErrorModal: () => _,
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
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            closeCart: _,
            lineItemIDs: __webpack_require__,
            replacedPackageIDs: _,
          } = _,
          _ = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = _.useMemo(
            () =>
              _.data && __webpack_require__ && 0 !== __webpack_require__.length
                ? _.data.line_items.filter((_) =>
                    __webpack_require__.includes(_.line_item_id),
                  )
                : null,
            [__webpack_require__, _.data],
          ),
          _ = (0, _._)(_._.STORE_BASE_URL + "cart");
        if (
          (_.useEffect(() => {
            _.isSuccess && _ && 0 === _.length && _();
          }, [_, _, _]),
          !_)
        )
          return null;
        const _ = _?.length > 0;
        return _.createElement(
          _._,
          {
            active: !0,
            className: _().ShoppingCartModal,
            onDismiss: _,
          },
          _.createElement(
            "div",
            {
              className: _().ShoppingCartHeader,
            },
            (0, _._)(_ ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart"),
          ),
          _.createElement(_._, {
            lineItems: _,
            cartValidation: _,
          }),
          _.createElement(
            _._,
            {
              className: _().ShoppingCartModalBtns,
            },
            _.createElement(
              _._,
              {
                onClick: _,
              },
              (0, _._)("#Cart_ContinueShopping"),
            ),
            _.createElement(
              _._,
              {
                className: _().OpenCartBtn,
                onClick: () => (window.location.href = _),
              },
              (0, _._)("#Cart_ViewMyCart", _.data?.line_items.length),
            ),
          ),
        );
      }
      function _(_) {
        const { active: _, result: __webpack_require__, onDismiss: _ } = _;
        return _.createElement(
          _._,
          {
            active: _,
            onDismiss: _,
          },
          _.createElement(_._, null, (0, _._)("#Error_Generic")),
          _.createElement(
            "div",
            {
              className: _().ErrorModalContent,
            },
            _.createElement(
              "div",
              {
                className: _().ErrorModalMessage,
              },
              (0, _._)("#Cart_ErrorUpdating"),
            ),
            _.createElement(
              "div",
              {
                className: _().ErrorModalCode,
              },
              __webpack_require__
                ? (0, _._)("#Cart_ErrorCode", __webpack_require__)
                : "",
            ),
            _.createElement(
              "div",
              {
                className: _().ErrorModalBottom,
              },
              _.createElement(
                _._,
                {
                  onClick: _,
                },
                (0, _._)("#Button_Close"),
              ),
            ),
          ),
        );
      }
    },
  },
]);

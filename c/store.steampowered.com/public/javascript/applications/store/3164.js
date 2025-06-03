(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3164],
  {
    chunkid: (module) => {
      module.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
        PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
        Header: "kw7cBqn_8NJ4l9R4nkZXE",
        ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
        PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
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
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          PurchaseRequestSimpleInfoPage: () => _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { familyGroupID: _ } = _,
          _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = _.data?.requests()?.length;
        if (!_) return null;
        const _ = (0, _._)("#PurchaseRequestBanner_PendingRequest", _);
        return _.createElement(
          "div",
          {
            className: _.PurchaseRequestBanner,
          },
          (0, _._)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            _.createElement(
              "a",
              {
                href:
                  _._.STORE_BASE_URL + "account/familymanagement?tab=requests",
              },
              _,
            ),
            _.createElement("span", null, _.data?.name()),
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { familyGroupID: _, requestID: __webpack_require__ } = _,
          [_, _] = _.useState(),
          _ = (0, _._)(_, __webpack_require__),
          _ = (0, _.useInitCartLocalization)(),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _.data;
        return (
          (0, _.useEffect)(() => {
            if (_) {
              const _ = {
                  type: "request",
                  gid: _.gidshoppingcart,
                  requestID: _.request_id,
                },
                _ = (0, _._)();
              _?.requestcartgid === _.gid &&
                _.requestcart &&
                (0, _._)(_, _, (0, _._)(_.requestcart)),
                _(_);
            }
          }, [_, _]),
          _.isError
            ? _.createElement(_, {
                familyGroupID: _,
              })
            : _.isLoading || !_ || (_ && !_)
              ? _.createElement(_, null)
              : _
                ? _.is_completed
                  ? _.createElement(_, {
                      familyGroupID: _,
                    })
                  : _.requester_steamid === _
                    ? _.createElement(_, {
                        familyGroupID: _,
                      })
                    : _.createElement(_, {
                        request: _,
                        cartID: _,
                      })
                : _.createElement(_, {
                    familyGroupID: _,
                  })
        );
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return _.createElement(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function _() {
        return _.createElement(
          "div",
          {
            className: _().PurchaseRequestInfoPage,
          },
          _.createElement(_._, {
            size: "medium",
            msDelayAppear: 300,
          }),
        );
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return _.createElement(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return _.createElement(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return _.createElement(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function _(_) {
        const {
            familyGroupID: _,
            headerLocToken: __webpack_require__,
            infoLocToken: _,
          } = _,
          [_, _] = _.useState(null);
        return _.createElement(
          "div",
          {
            className: _().PurchaseRequestInfoPage,
          },
          _.createElement(
            _._.Provider,
            {
              value: {
                errorMessage: _,
                setErrorMessage: _,
              },
            },
            _.createElement(
              "div",
              {
                className: _().Header,
              },
              (0, _._)(__webpack_require__),
            ),
            _.createElement(_._, null),
            _.createElement(_, {
              familyGroupID: _,
            }),
            !!_ &&
              _.createElement(
                "div",
                {
                  className: _().Info,
                },
                (0, _._)(_),
              ),
            _.createElement(
              "div",
              {
                className: _().ButtonContainer,
              },
              _.createElement(
                _._,
                {
                  className: _().PrimaryButton,
                  onClick: () => {
                    window.location.assign(_._.STORE_BASE_URL);
                  },
                },
                (0, _._)("#PurchaseRequested_ReturnToStore"),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { request: _, cartID: __webpack_require__ } = _,
          _ = new _._(_.requester_steamid).GetAccountID(),
          [_] = (0, _._)(_),
          [_, _] = _.useState({
            accountid_giftee: _,
          }),
          _ = _.useRef(() => {}).current,
          _ = (0, _._)("#Cart_PurchaseRequestTitle", _?.persona_name);
        return _.createElement(_.BaseCartPage, {
          cartID: __webpack_require__,
          step: "gifts",
          onStepChange: _,
          title: _,
          cartWideGiftInfo: _,
          onCartWideGiftInfoChange: _,
        });
      }
    },
  },
]);

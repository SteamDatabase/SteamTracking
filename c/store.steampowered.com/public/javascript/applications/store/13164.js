(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [13164],
  {
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        RoleIcon: "_1uvKF_UbD6VhnVdaRkXhbu",
        ProfileLink: "_2oSTSohQ1CZIgVn7E6_0Ft",
        MeBadge: "_2W_HQa5Rhf-hHITgV5H0bu",
        PlayerName: "AdQYbMq7HHJ3Jgljib9UX",
        RoleAndIcon: "_3VzCnvA_1SxskuCqmZkkHA",
        RoleName: "_3C9nRrwzQk9qHlJx6NaXDI",
        FamilyErrorDisplay: "egC2pffk2Ff-wvlnEHOqf",
        FamilyMemberStatus: "bMHOg1F_hCL_s5erx4pWC",
        FamilyMemberRow: "_2LyGIHuQ8SFKb5T262YUvg",
        InfoRow: "_3TgL3aJ2hUdLP2stFZ2wZv",
        InvitePending: "_1IeeH6Qo58UdaFJ3hkLMzs",
      };
    },
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
        _ =
          (__webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"));
      function _(_) {
        return (0, _.jsx)(_.d1w, {});
      }
      function _(_) {
        return (0, _.jsx)(_.Bir, {});
      }
      function _(_) {
        return (0, _.jsx)("div", {
          className: (0, _._)(_.RoleIcon, _.className),
          children: _.role == _._._ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
        });
      }
      function _(_) {
        const { steamid: _ } = _,
          _ = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _.data?.get(new _._(_).GetAccountID()),
          _ = _.data?.preferences().parenthesize_nicknames();
        return (0, _.jsxs)(_.Fragment, {
          children: [
            _.data?.m_strPlayerName || " ",
            " ",
            _ &&
              _ &&
              (0, _.jsxs)("span", {
                className: _.playerNickname,
                children: ["(", _, ")"],
              }),
          ],
        });
      }
      function _(_) {
        const { role: _, persona: _, isSelf: _ } = _;
        let _ = _.size || "Large";
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _.data?.get(__webpack_require__.GetAccountID()),
          _ = _.data?.preferences().parenthesize_nicknames();
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              className: _.ProfileLink,
              children: [
                (0, _.jsx)(_._, {
                  className: _.Avatar,
                  persona: _,
                  size: _,
                  statusPosition: "right",
                }),
                (0, _.jsx)(_._, {
                  className: _.PlayerName,
                  bIsSelf: _,
                  bHideStatus: !1,
                  bHidePersona: !1,
                  bParenthesizeNicknames: _,
                  bCompactView: !1,
                  persona: _,
                  strNickname: _,
                  eFriendRelationship: _._UC,
                  bEllipsisName: !0,
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: _.RoleAndIcon,
              children: [
                (0, _.jsx)(_, {
                  className: _.ProfileRoleIcon,
                  role: _,
                }),
                (0, _.jsx)("div", {
                  className: _.RoleName,
                  children: (0, _._)(`#FamilyManagement_Role_${_}`),
                }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const _ = (0, _.useContext)(_._);
        return _.errorMessage
          ? (0, _.jsx)("div", {
              className: _.FamilyErrorDisplay,
              children: _.errorMessage,
            })
          : null;
      }
      function _(_) {
        const { persona: _, role: _, invitePending: _ } = _,
          _ = (0, _._)() == _.GetSteamIDAsString();
        return (0, _.jsxs)("div", {
          className: _.FamilyMemberStatus,
          children: [
            (0, _.jsx)(_, {
              role: _,
              persona: _,
              isSelf: _,
            }),
            _ &&
              (0, _.jsx)("div", {
                className: _.InvitePending,
                children: (0, _._)("#FamilyManagement_InvitePending"),
              }),
            _ &&
              (0, _.jsx)("span", {
                className: _.MeBadge,
                children: (0, _._)("#FamilyManagement_Me"),
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
                    _.set(_.accountid, _.nickname);
                  });
              }
              return _;
            },
          });
        return _ ? __webpack_require__.get(_) : null;
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
                  _.data?.success != _._ ||
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
            })(_),
          {
            cache: !1,
          },
        ),
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
          }, [_]);
        return _ ? null : _;
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
      function _() {
        const _ = (0, _._)();
        return (0, _._)(
          (function (_) {
            return {
              queryKey: ["communitypreferences"],
              queryFn: async () => {
                const _ = _._.Init(_.tzK),
                  _ = await _.xtC.GetCommunityPreferences(_, _);
                if (__webpack_require__.GetEResult() != _._)
                  throw new Error(
                    `Error from GetCommunityPreferences: ${__webpack_require__.GetEResult()} ${__webpack_require__.GetErrorMessage()}`,
                  );
                return __webpack_require__.Body();
              },
              staleTime: 3e5,
            };
          })(_),
        );
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { familyGroupID: _ } = _,
          _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = _.data?.requests()?.length;
        if (!_) return null;
        const _ = (0, _._)("#PurchaseRequestBanner_PendingRequest", _);
        return (0, _.jsx)("div", {
          className: _.PurchaseRequestBanner,
          children: (0, _._)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            (0, _.jsx)("a", {
              href:
                _._.STORE_BASE_URL + "account/familymanagement?tab=requests",
              children: _,
            }),
            (0, _.jsx)("span", {
              children: _.data?.name(),
            }),
          ),
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { familyGroupID: _, requestID: _ } = _,
          [_, _] = _.useState(),
          _ = (0, _._)(_, _),
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
            ? (0, _.jsx)(_, {
                familyGroupID: _,
              })
            : _.isLoading || !_ || (_ && !_)
              ? (0, _.jsx)(_, {})
              : _
                ? _.is_completed
                  ? (0, _.jsx)(_, {
                      familyGroupID: _,
                    })
                  : _.requester_steamid === _
                    ? (0, _.jsx)(_, {
                        familyGroupID: _,
                      })
                    : (0, _.jsx)(_, {
                        request: _,
                        cartID: _,
                      })
                : (0, _.jsx)(_, {
                    familyGroupID: _,
                  })
        );
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return (0, _.jsx)(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function _() {
        return (0, _.jsx)("div", {
          className: _().PurchaseRequestInfoPage,
          children: (0, _.jsx)(_._, {
            size: "medium",
            msDelayAppear: 300,
          }),
        });
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return (0, _.jsx)(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return (0, _.jsx)(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function _(_) {
        const { familyGroupID: _ } = _;
        return (0, _.jsx)(_, {
          familyGroupID: _,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function _(_) {
        const { familyGroupID: _, headerLocToken: _, infoLocToken: _ } = _,
          [_, _] = _.useState(null);
        return (0, _.jsx)("div", {
          className: _().PurchaseRequestInfoPage,
          children: (0, _.jsxs)(_._.Provider, {
            value: {
              errorMessage: _,
              setErrorMessage: _,
            },
            children: [
              (0, _.jsx)("div", {
                className: _().Header,
                children: (0, _._)(_),
              }),
              (0, _.jsx)(_._, {}),
              (0, _.jsx)(_, {
                familyGroupID: _,
              }),
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().Info,
                  children: (0, _._)(_),
                }),
              (0, _.jsx)("div", {
                className: _().ButtonContainer,
                children: (0, _.jsx)(_._, {
                  className: _().PrimaryButton,
                  onClick: () => {
                    window.location.assign(_._.STORE_BASE_URL);
                  },
                  children: (0, _._)("#PurchaseRequested_ReturnToStore"),
                }),
              }),
            ],
          }),
        });
      }
      function _(_) {
        const { request: _, cartID: _ } = _,
          _ = new _._(_.requester_steamid).GetAccountID(),
          [_] = (0, _._)(_),
          [_, _] = _.useState({
            accountid_giftee: _,
          }),
          _ = _.useRef(() => {}).current,
          _ = (0, _._)("#Cart_PurchaseRequestTitle", _?.persona_name);
        return (0, _.jsx)(_.BaseCartPage, {
          cartID: _,
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

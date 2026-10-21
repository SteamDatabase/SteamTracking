"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [4874],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
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
        const _ = (_, _) =>
            _ === void 0
              ? ["get_family_group_for_user ", _]
              : ["get_family_group_for_user ", _, _],
          _ = (_) => ["get_family_group", _],
          _ = (_) => ["get_family_history", _],
          _ = (_) => ["get_users_sharing_device", _],
          _ = (_) => ["get_shopping_cart_contents", _],
          _ = (_) => ["recent_playtime_sessions", _],
          _ = (_) => ["get_playtime_summary", _],
          _ = (_, _) => ["get_invite_check_results", _, _];
        function _(_, _, _) {
          return _
            ? ["get_purchase_requests", _, _, _]
            : _
              ? ["get_purchase_requests", _, _]
              : ["get_purchase_requests", _];
        }
        function _(_, _) {
          if (_ != _._) throw _;
        }
        const _ = _.createContext({
          staleTimeMs: 1 / 0,
        });
        function _(_) {
          const { staleTimeMs: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                staleTimeMs: _ ?? 3e3,
              }),
              [_],
            );
          return _.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        function _(_ = !1) {
          return _((0, _._)(), _);
        }
        function _(_, _ = !1) {
          const _ = (0, _._)(),
            _ = (0, _.useContext)(_).staleTimeMs;
          return (0, _._)({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_include_family_group_response(_);
              const _ = await _._.GetFamilyGroupForUser(_, _);
              return _(_.GetEResult(), "GetFamilyGroupForUser"), _.Body();
            },
            staleTime: _,
            enabled: !!_,
            placeholderData: _ ? void 0 : new _._(),
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _.useContext)(_).staleTimeMs;
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              if (_) {
                const _ = _._.Init(_._);
                _.Body().set_family_groupid(_);
                const _ = await _._.GetFamilyGroup(_, _);
                return _(_.GetEResult(), "GetFamilyGroup"), _.Body();
              } else throw _._;
            },
            staleTime: _,
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_name(_);
              const _ = await _._.CreateFamilyGroup(_, _);
              return _(_.GetEResult(), "CreateFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.DeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "DeleteFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().set_name(_);
              const _ = await _._.ModifyFamilyGroupDetails(_, _);
              return _(_.GetEResult(), "ModifyFamilyGroupDetails"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_receiver_steamid(_),
                _.Body().set_receiver_role(_);
              const _ = await _._.InviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "InviteToFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.JoinFamilyGroup(_, _);
              return _(_.GetEResult(), "JoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_cancel(_);
              const _ = await _._.CancelFamilyGroupInvite(_, _);
              return _(_.GetEResult(), "CancelFamilyGroupInvite"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_remove(_);
              const _ = await _._.RemoveFromFamilyGroup(_, _);
              return _(_.GetEResult(), "RemoveFromFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              const _ = (0, _._)("clientsessionid"),
                _ = _ && BigInt("0x" + _).toString(),
                _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_client_instance_id(_ ?? void 0);
              const _ = await _._.GetUsersSharingDevice(_, _);
              return _(_.GetEResult(), "GetUsersSharingDevice"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = (0, _._)();
          return _(_)
            .data?.members()
            .find((_) => _.steamid() == _)
            ?.role();
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_use_account_cart(!0),
                _.Body().set_store_country_code(_);
              const _ = await _._.RequestPurchase(_, _);
              return _(_.GetEResult(), "RequestPurchase"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _ !== void 0 && _.Body().set_rt_include_completed_since(_);
              const _ = await _._.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_, _, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().add_request_ids(_);
              const _ = await _._.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
            select: (_) =>
              _.toObject().requests?.find(({ request_id: _ }) => _ === _),
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_request_id(_),
                _.Body().set_action(_);
              const _ = await _._.RespondToRequestedPurchase(_, _);
              return _(_.GetEResult(), "RespondToRequestedPurchase"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        const _ = (0, _.createContext)({
          errorMessage: null,
          setErrorMessage: (_) => {},
        });
        function _(_, _) {
          return _;
        }
        var _ = ((_) => (
          (_[(_.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (_[(_.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (_[(_.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (_[(_.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (_[(_.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (_[(_.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (_[(_.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (_[(_.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (_[(_.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (_[(_.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (_[(_.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (_[(_.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (_[(_.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (_[(_.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (_[(_.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (_[(_.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (_[(_.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          _
        ))(_ || {});
        const _ = {
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_AccessDenied",
          [_._]: "#FamilyManagement_ErrorNoMatch",
          [_._]: "#FamilyManagement_ErrorAccountDisabled",
          [_._]: "#FamilyManagement_ErrorNoActiveInvite",
          [_._]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [_._]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [_._]: "#FamilyManagement_ErrorLimitExceeded",
          [_._]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [_._]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [_._]: {
            5: "#FamilyManagement_RateLimitExceeded_CreateFamily",
          },
          [_._]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [_._]: {
            2: "#FamilyManagement_Household_JoinFamily",
          },
          [_._]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [_._]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [_._]: {
            4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
          },
        };
        function _(_, _, _, _) {
          let _ = "";
          if (_ in _) {
            const _ = _[_];
            if (typeof _ == "string") _ = (0, _._)(_, ..._);
            else {
              const _ = _;
              _ in _ && (_ = (0, _._)(_[_], ..._));
            }
          }
          return _((0, _._)(_, _), _);
        }
        function _() {
          const { setErrorMessage: _ } = (0, _.useContext)(_);
          return {
            setErrorMessage: _,
          };
        }
        function _(_, _, _) {
          const { setErrorMessage: _ } = _(),
            { isError: _, error: _ } = _,
            _ = _();
          (0, _.useEffect)(() => {
            if (_) {
              const _ = _,
                _ = [];
              if (_ === _._ || _ === _._) {
                let _;
                _.isSuccess &&
                  _.data &&
                  (_ = _.data.cooldown_seconds_remaining()),
                  _.push(_(_));
              }
              _(_(_, _, _, _));
            }
          }, [_, _, _, _, _, _.isSuccess, _.data]);
        }
        function _(_) {
          if (!_) return (0, _._)("#FamilyManagement_LoadingPlaceholder");
          const _ = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, _._)(Date.now() / 1e3 + _, _);
        }
        function _(_, _) {
          const { setErrorMessage: _ } = _();
          (0, _.useEffect)(() => {
            _.isError && _((0, _._)(_));
          }, [_, _.isError, _]);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.GetChangeLog(_, _);
              return (
                _(_.GetEResult(), "GetFamilyGroupChangeLog"), _.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              _.Body().set_gidshoppingcart(_);
              const _ = await ShoppingCartService.GetShoppingCartContents(_, _);
              return _(_.GetEResult(), "GetShoppingCartContents"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_cooldown_count(_);
              const _ =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(_, _);
              return _(_.GetEResult(), "SetFamilyCooldownOverrides"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          return `${_._.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
        }
        function _(_) {
          return `${_._.STORE_BASE_URL}cart/purchaserequested/${_}`;
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              _.Body().set_steamid(_), _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.CreateFamilyGroup(_, _);
              return (
                _(_.GetEResult(), "ForceCreateFamilyGroup"),
                _.Body().family_groupid()
              );
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_, _, _, _) {
          return [
            "get_shared_library_apps",
            _,
            _?.bIncludeOwn,
            _?.bIncludeExcluded,
            _?.bIncludeNonGames,
            _?.for_account_id,
            _,
            _,
          ];
        }
        function _(_, _) {
          const _ = (0, _._)(),
            { settings: _, mapAppsAllowed: _ } = (0, _._)(_).data,
            _ = (0, _._)(),
            _ = (0, _._)(),
            {
              bIncludeOwn: _,
              bIncludeExcluded: _,
              bIncludeNonGames: _,
              for_account_id: _,
            } = _ ?? {},
            _ = _?.enabled !== void 0 ? _.enabled : !0,
            _ = _(_, _, _, _),
            _ = (_) => !(0, _._)(_.appid(), _, _, _);
          return (0, _._)({
            queryKey: _,
            queryFn: async () => {
              const _ = _._.Init(_._);
              if (
                (_.Body().set_family_groupid(_),
                _.Body().set_include_own(_),
                _.Body().set_include_excluded(_),
                _.Body().set_language(_._.LANGUAGE),
                _.Body().set_include_non_games(_),
                _)
              ) {
                const _ = _._.InitFromAccountID(_, _._.EUNIVERSE);
                _.Body().set_steamid(_.ConvertTo64BitString());
              }
              const _ = await _._.GetSharedLibraryApps(_, _);
              return (
                _(_.GetEResult(), "GetSharedLibraryApps"),
                _.Body()
                  .apps()
                  .filter(_)
                  .map((_) => _.toObject())
              );
            },
            enabled: !!_ && _,
            placeholderData: _._,
            select: _?.select,
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            { settings: _ } = (0, _._)(_).data ?? {},
            _ = (0, _._)(),
            _ = _(_, _, _, _);
          return (0, _.useCallback)(() => {
            _.invalidateQueries({
              queryKey: _,
            });
          }, [_, _]);
        }
        function _(_, _) {
          let _ = _.sort_as || _.name,
            _ = _.sort_as || _.name;
          return (0, _._)(_, _);
        }
        function _(_, _) {
          return _.rt_time_acquired - _.rt_time_acquired || _(_, _);
        }
        function _(_, _, _) {
          if (!_ && _.length === 0) return !0;
          const _ = _.name?.toLocaleLowerCase(),
            _ = _.toLocaleLowerCase(),
            _ = _?.includes(_) || _.appid?.toString() == _;
          let _ = !0;
          if (_.content_descriptors) {
            for (const _ of _)
              if (!_.content_descriptors.includes(_)) {
                _ = !1;
                break;
              }
          }
          return _ && _;
        }
        function _(_, _, _, _ = []) {
          const _ = (0, _.useMemo)(
              () => _?.filter((_) => _(_, _, _)) || [],
              [_, _, _],
            ),
            _ = (0, _.useCallback)(
              (_, _) => {
                let _ = _;
                switch (_) {
                  case "alpha-asc":
                    _ = _;
                    break;
                  case "alpha-desc":
                    _ = (_, _) => _(_, _);
                    break;
                  case "date_acquired-asc":
                    _ = (_, _) => _(_, _);
                    break;
                  case "date_acquired-desc":
                    _ = _;
                    break;
                }
                return _(_, _);
              },
              [_],
            );
          return (0, _.useMemo)(() => _.slice().sort(_), [_, _]);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ = await _._.ConfirmJoinFamilyGroup(_, _);
              return _(_.GetEResult(), "ConfirmJoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ = await _._.ConfirmInviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "ConfirmInviteToFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  _,
                  _,
                );
              return _(_.GetEResult(), "ResendInvitationToFamilyGroup"), _;
            },
          });
        }
        function _(_) {
          let _ = [];
          _.sort((_, _) => _.time_start - _.time_start);
          let _ = new Map();
          for (const _ of _) {
            let _ = _.get(_.appid);
            _ === void 0
              ? _.set(_.appid, _)
              : _.time_start <= _.time_end
                ? (_.time_end = Math.max(_.time_end, _.time_end))
                : (_.push(_), _.set(_.appid, _));
          }
          for (const _ of _.values()) _.push(_);
          return _.sort((_, _) => _.time_start - _.time_start), _;
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              const _ = _._.Init(_.m8g);
              _.Body().set_steamid(_);
              const _ = await _.xtC.GetRecentPlaytimeSessionsForChild(_, _);
              _(_.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let _ = _.Body().toObject().sessions || [];
              return _(_);
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.GetPlaytimeSummary(_, _);
              _(_.GetEResult(), "GetPlaytimeSummary");
              let _ = _.Body().toObject().entries ?? [];
              _.sort((_, _) => _.seconds_played - _.seconds_played);
              let _ = _.Body().toObject().entries_by_owner ?? [];
              return (
                _.sort((_, _) => _.seconds_played - _.seconds_played),
                {
                  borrowed: _,
                  loaned: _,
                }
              );
            },
            enabled: _ !== "0",
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.UndeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "UndeleteFamilyGroup"), _;
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.ForceAcceptInvite(_, _);
              return _(_.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.GetInviteCheckResults(
                _,
                _,
              );
              return (
                _(_.GetEResult(), "GetInviteCheckResults"), _.Body().toObject()
              );
            },
          });
        }
        function _(_, _) {
          return _.members().find((_) => _.steamid() == _);
        }
      },
    },
  ]);
})();

(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [98620],
    {
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
          return !0;
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
            _ &&
            (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        _();
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
          const _ = _().unix(_),
            _ = _().unix(_)._(_).utcOffset() - _.utcOffset();
          return (0, _._)(_ + _ * 60);
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
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 16,
          _ = 32,
          _ = 64,
          _ = 128,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192,
          _ = 16384,
          _ = 32768,
          _ = 65536,
          _ = 1073741824,
          _ = null;
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
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = "061818254b2c99ac49e6626adb128ed1282a392f",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = 120;
        class _ {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(_) {
            this.m_unAppID = _;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, _);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == _._ || this.apptype == _._;
          }
          BuildAppURL(_, _) {
            return _
              ? _._.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  _ +
                  ".jpg"
              : (0, _._)(_);
          }
          DeserializeFromMessage(_) {
            (this.m_bInitialized = !0),
              (this.m_strName = _.name()),
              (this.m_strIconURL = _.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = _.app_type());
          }
          DeserializeFromAppOverview(_) {
            _.icon_hash() && _.app_type() != _._
              ? ((this.m_bInitialized = !0),
                (this.m_strName = _.display_name()),
                (this.m_strIconURL = _.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = _.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(_) {
            try {
              (this.m_strName = _.strName),
                (this.m_strIconURL = _.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
                (this.m_eAppType = _.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, _._)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class _ {}
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = ".jpg";
          (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
            _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          return (
            _ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.substr(0, 2) + "/")),
            (_ += _),
            _ && _ != "small" && (_ += "_" + _),
            (_ += _),
            _
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, _._)();
          }
          set nOverrideDateNow(_) {
            (0, _._)(_);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, _._)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, _._)();
          }
          BHasTimeOverride() {
            return !!(0, _._)();
          }
          ParseDevOverrides(_) {
            if (!_ || _.length == 0) return;
            new URLSearchParams(_[0] == "?" ? _.substring(1) : _).has("t");
          }
        }
        const _ = new _();
        (0, _._)("g_EventCalendarDevFeatures", _);
        function _(_ = 1) {
          const [_, _] = React.useState(() => _()),
            _ = useCancelTokenSource("useTimeNowWithOverride"),
            _ = React.useCallback(() => {
              _.token.reason || _(_());
            }, []);
          return (
            React.useEffect(() => {
              const _ = 1e3 * _,
                _ = Date.now() % _,
                _ = _ - _,
                _ = window.setTimeout(_, _);
              return () => {
                window.clearTimeout(_);
              };
            }, [_, _, _]),
            _
          );
        }
        const _ = Math.floor(new Date().getTime() / 1e3);
        function _() {
          const _ = Math.floor(Date.now() / 1e3);
          return _.nOverrideDateNow ? _.nOverrideDateNow + (_ - _) : _;
        }
        function _() {
          return _.nOverrideDateNow ?? _;
        }
        function _() {
          return _.useMemo(() => _(), []);
        }
        function _() {
          return _.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
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
          return ReactQueryClient.getQueryData([_, _]);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(() => !!_),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null);
          return {
            bLoading: _,
            bError: _,
            bSuccess: _,
            strError: _,
            strSuccess: _,
            elSuccess: _,
            elError: _,
            strThrobber: _,
            fnSetLoading: _,
            fnSetError: _,
            fnSetSuccess: _,
            fnSetStrError: _,
            fnSetStrSuccess: _,
            fnSetElSuccess: _,
            fnSetElError: _,
            fnSetThrobber: _,
          };
        }
        function _(_, _) {
          _ != k_EResultOK ? _.fnSetError(!0) : _.fnSetSuccess(!0);
        }
        function _(_) {
          const {
              strDialogTitle: _,
              state: _,
              closeModal: _,
              strThrobber: _,
            } = _,
            {
              bLoading: _,
              bError: _,
              bSuccess: _,
              strError: _,
              strSuccess: _,
              elSuccess: _,
              elError: _,
              strThrobber: _,
            } = _;
          return _ || _ || _
            ? (0, _.jsxs)(_._, {
                strTitle: _,
                bAlertDialog: !0,
                closeModal: _,
                className: _.SuccessErrorDialog,
                children: [
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _.ErrorStylesWithIcon,
                      children:
                        _ || (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!_ && _,
                ],
              })
            : _ || _ || _
              ? (0, _.jsx)(_._, {
                  strTitle: _,
                  strDescription: _ || (0, _._)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: _,
                  className: _.SuccessErrorDialog,
                  children: (0, _.jsx)(_.Fragment, {
                    children: !!_ && _,
                  }),
                })
              : (0, _.jsx)(_._, {
                  strTitle: _,
                  className: _.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, _.jsx)(_._, {
                    string: _ || _ || (0, _._)("#Loading"),
                    size: "medium",
                    position: "center",
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          let _;
          if (typeof _ == "string") _ = _;
          else if ("location" in _) _ = _.location.search;
          else if ("search" in _) _ = _.search;
          else return;
          const _ = new URLSearchParams(_.substring(1));
          if (_.has(_)) {
            const _ = _.getAll(_);
            return _[_.length - 1];
          }
        }
        function _(_, _, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          if (_ != null && _ != null) {
            if (_.get(_) == _) return;
            _.set(_, _);
          } else {
            if (!_.has(_)) return;
            _.delete(_);
          }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _, _) {
          _(_, _, _, !0);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _.useMemo)(() => {
              const _ = _(_.search, _);
              return _ != null && _ != null
                ? _ != null && _ != null
                  ? typeof _ == "boolean"
                    ? _.constructor(_ !== "false")
                    : _.constructor(_)
                  : _
                : _;
            }, [_.search, _, _]),
            _ = (0, _.useCallback)(
              (_, _ = !1) => {
                _(_, _, _ != null && _ != null ? String(_) : null, _);
              },
              [_, _],
            );
          return [_, _];
        }
        function _(_, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          for (const _ in _)
            if (_.hasOwnProperty(_)) {
              const _ = _[_];
              _.delete(_), _ != null && _ != null && _.append(_, _);
            }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _) {
          _(_, _, !0);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              accountID: _,
              bHideWhenNotAvailable: _,
              bHideName: _,
              bLink: _ = !0,
            } = _,
            [_] = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`,
            _ = _ ? "a" : "span";
          return (0, _.jsx)(_.Fragment, {
            children: _
              ? (0, _.jsxs)(_, {
                  href: _ ? _ : void 0,
                  children: [
                    (0, _.jsx)("img", {
                      className: _.SmallAvatar,
                      src: _.avatar_url,
                      "data-miniprofile": "s" + _.ConvertTo64BitString(),
                    }),
                    !_ &&
                      (0, _.jsx)("span", {
                        children: _
                          ? `${_} (${_.persona_name})`
                          : _.persona_name,
                      }),
                  ],
                })
              : (0, _.jsx)(_.Fragment, {
                  children:
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _,
                    }),
                }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _,
          _: () => _._,
          _: () => _._,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { labelledBy: _ } = _ || {},
            [_, _] = _.useState(void 0),
            _ = _.useMemo(
              () => ({
                setHeaderId: _,
              }),
              [],
            );
          return {
            headerId: _ || _,
            context: _,
          };
        }
        function _(_) {
          const {
              active: _,
              onDismiss: _,
              className: _,
              modalClassName: _,
              bGamepadUIScrollWithin: _,
              children: _,
              ..._
            } = _,
            { headerId: _, context: _ } = _({
              labelledBy: _["aria-labelledby"],
            });
          return (0, _.jsx)(_._.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                className: _,
                bGamepadUIScrollWithin: _,
                children: (0, _.jsx)(_._, {
                  role: "dialog",
                  "aria-labelledby": _,
                  className: _,
                  ..._,
                  children: _,
                }),
              }),
            }),
          });
        }
        function _(_) {
          const {
              onDismiss: _,
              className: _,
              modalClassName: _,
              bGamepadUIScrollWithin: _,
              children: _,
              ..._
            } = _,
            { headerId: _, context: _ } = _();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: _,
            children: jsx(PopupWindow, {
              ..._,
              onDismiss: _,
              children: jsx(ModalPosition, {
                onEscKeypress: _,
                className: _,
                bGamepadUIScrollWithin: _,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": _,
                  "aria-label": _.strTitle,
                  className: _,
                  children: _,
                }),
              }),
            }),
          });
        }
        const _ = (_) =>
          _({
            modal: !0,
            ..._,
          });
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)("div", {
              className: _,
              children: _,
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = React.useMemo(() => _(), []);
          return jsx(DialogOverlay, {
            ..._,
            DialogWrapper: _,
          });
        }
        function _() {
          return function (_) {
            const { className: _, active: _, children: _, modalKey: _ } = _,
              _ = React.useRef(void 0);
            return (
              useActivateNavTree(_, _, !0),
              jsx(FocusNavigationRoot, {
                className: _,
                navTreeRef: _,
                modal: !0,
                enabled: _,
                navID: `ModalDialogOverlay_${_}`,
                children: _,
              })
            );
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { popup: _, className: _, ..._ } = _,
            _ = (0, _._)(_),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              const _ = _.current;
              if (_ && (0, _._)(_, "Window.SetResizeGrip")) {
                let _ = 0,
                  _ = 0;
                const _ = _.getBoundingClientRect(),
                  _ = _.ownerDocument.defaultView;
                _ &&
                  _ &&
                  !_ &&
                  ((_ = Math.ceil(_.innerWidth - _.left)),
                  (_ = Math.ceil(_.innerHeight - _.top))),
                  _.SteamClient.Window.SetResizeGrip(_, _);
              }
              return () => {
                (0, _._)(_, "Window.SetResizeGrip") &&
                  _.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [_, _]),
            _
              ? null
              : (0, _.jsx)("div", {
                  className: (0, _._)("window_resize_grip", _),
                  ref: _,
                  ..._,
                })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_) =>
          _({
            modal: !0,
            ..._,
          });
        function _(_) {
          const _ = (0, _._)().ownerWindow,
            _ = (0, _._)(),
            [_, _] = _.useState(() =>
              _ ||
              (_.onlyPopoutIfNeeded === !0 &&
                _.popupHeight < _.innerHeight * 0.9 &&
                _.popupWidth < _.innerWidth * 0.9 &&
                _.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return _ === "inline"
            ? (0, _.jsx)(_._, {
                active: !0,
                children: _.children,
              })
            : _ === "popout"
              ? (0, _.jsx)(_, {
                  ..._,
                })
              : null;
        }
        function _(_) {
          const {
              popup: _,
              children: _,
              bFitToContent: _,
              className: _,
              ..._
            } = _,
            _ = _.useCallback(
              (_) => {
                const _ = Math.ceil(_.borderBoxSize[0].inlineSize),
                  _ = Math.ceil(_.borderBoxSize[0].blockSize);
                _?.SteamClient.Window.ResizeTo(_, _, !0);
              },
              [_],
            ),
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: (0, _._)("PopupFullWindow", _ && "FitToContent", _),
            ref: _ ? _ : void 0,
            ..._,
            children: _,
          });
        }
        function _(_) {
          const {
              strName: _,
              strTitle: _,
              popupWidth: _,
              popupHeight: _,
              browserType: _,
              onDismiss: _,
              bFitToContent: _,
              refPopup: _,
              children: _,
              titleBarClassName: _,
              saveDimensionsKey: _,
            } = _,
            _ = (0, _._)()?.ownerWindow,
            _ = (0, _._)(),
            _ = {
              ...(0, _._)(_),
              onClose: _,
            };
          let _ = 0;
          _.resizable && (_ |= _._.Resizable),
            (_.minWidth || _.minHeight) &&
              (_ |= _._.ApplyBrowserScaleToDimensions),
            _.fullscreen && (_ |= _._.FullScreen);
          const _ = "PopupWindow_" + (_ ? `${_}_` : "") + _.useId(),
            { popup: _, element: _ } = (0, _._)(
              _,
              {
                title: _,
                dimensions: {
                  width: _,
                  height: _,
                },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: _,
                minWidth: _.minWidth,
                minHeight: _.minHeight,
                replace_existing_popup: !0,
                center_on_window: _?.BCenterPopupsOnWindow() ? _ : void 0,
                eCreationFlags: _,
                target_browser: _?.GetBrowserInfo(),
              },
              _,
            );
          if (
            (_.useEffect(
              () => ((0, _._)(_, _), () => (0, _._)(_, void 0)),
              [_, _],
            ),
            _.useEffect(() => {
              _ && (_.document.title = _ ?? _);
            }, [_, _, _]),
            !_)
          )
            return null;
          const _ = _.modal ?? _.onlyPopoutIfNeeded,
            _ = !_.resizable;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  popup: _,
                }),
              _.createPortal(
                (0, _.jsx)(_._, {
                  ownerWindow: _,
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsxs)(_, {
                        popup: _,
                        bFitToContent: _,
                        onContextMenu: _._,
                        children: [
                          (0, _.jsx)(_._, {
                            className: _,
                            hideMin: _,
                            hideMax: _,
                            popup: _,
                            hideActions: !_,
                          }),
                          (0, _.jsx)(_._, {
                            bCenterPopupsOnWindow: _?.BCenterPopupsOnWindow(),
                            browserInfo: _?.GetBrowserInfo(),
                            children: _,
                          }),
                        ],
                      }),
                      _.resizable &&
                        !_ &&
                        (0, _.jsx)(_, {
                          popup: _,
                        }),
                    ],
                  }),
                }),
                _,
              ),
            ],
          });
        }
        function _(_) {
          const { popup: _ } = _,
            _ = _.useCallback(() => {
              _?.SteamClient.Window.BringToFront();
            }, [_]);
          return (
            _.useEffect(_, [_]),
            (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: _,
              }),
            })
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.useRef(_().CancelToken.source());
          return (
            _.useEffect(() => {
              const _ = _.current;
              return () => _.cancel(_ ? `${_}: unmounting` : "unmounting");
            }, [_]),
            _.current
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            MeetSteamRoutes: () => _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _) {
          return (0, _._)({
            mutationFn: async ({ bIncludeSelf: _, rgGuests: _ }) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gid", _),
                _.append("accountid", "" + _),
                _.append("meetsteam_group_id", "" + _),
                _.append("meetsteam_session_id", "" + _),
                _.append("include_self", "" + (_ ? 1 : 0)),
                _?.length && _.append("guests", _.join("|"));
              const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdateattendance`;
              return (
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              );
            },
          });
        }
        function _(_, _, _) {
          return (0, _._)({
            mutationFn: async ({ nCapacity: _ }) => {
              const _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gid", _),
                _.append("meetsteam_group_id", "" + _),
                _.append("meetsteam_session_id", "" + _),
                _.append("capacity", "" + _);
              const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`;
              return (
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              );
            },
          });
        }
        function _(_) {
          return _.reduce(
            (_, _) => (
              _[_.relativeToToday] || (_[_.relativeToToday] = []),
              _[_.relativeToToday].push(_),
              _
            ),
            {
              today: [],
              past: [],
              future: [],
            },
          );
        }
        function _(_, _, _) {
          for (const _ of _)
            if (_.group_id === _) {
              const _ = _.sessions.find((_) => _._ === _);
              if (_)
                return {
                  group: _,
                  session: _,
                };
            }
          return {
            group: null,
            session: null,
          };
        }
        function _(_, _) {
          const _ = (0, _._)(),
            [_] = (0, _.useState)(() =>
              (0, _._)("registrations", "application_config")
                .map((_) => ((_.userReg = JSON.parse(_.jsondata)), _))
                .sort((_, _) => {
                  const _ = _(
                    _.jsondata.meet_steam_groups,
                    _.group_id,
                    _.session_id,
                  );
                  return (
                    (_(_.jsondata.meet_steam_groups, _.group_id, _.session_id)
                      ?.session?.rtime_start || 0) -
                    (_?.session?.rtime_start || 0)
                  );
                })
                .map((_) => {
                  const _ = _(
                    _.jsondata.meet_steam_groups,
                    _.group_id,
                    _.session_id,
                  );
                  return (
                    (_.relativeToToday = _(_?.session, _)),
                    (_.rtSesssionTime = _?.session?.rtime_start ?? 0),
                    _
                  );
                }),
            ),
            _ = _?.trim().toLowerCase() || "";
          return (0, _.useMemo)(
            () =>
              _.filter(
                (_) =>
                  !_.length ||
                  _.userReg.name?.toLowerCase().includes(_) ||
                  _.userReg.company?.toLowerCase().includes(_) ||
                  _.userReg.guest_names?.find((_) =>
                    _.toLowerCase().includes(_),
                  ) ||
                  _.userReg.email_override?.toLowerCase().includes(_),
              ),
            [_, _],
          );
        }
        function _(_, _) {
          return (0, _.useMemo)(() => _(_), [_, _]);
        }
        function _(_, _) {
          if (!_) return "past";
          const _ = (0, _._)(_),
            _ = (0, _._)(_.rtime_start, _),
            _ = _ !== void 0 ? new Date(_ * 1e3) : new Date(),
            _ = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
            _ = new Date(_.getFullYear(), _.getMonth(), _.getDate() + 1);
          return _ >= _ && _ < _ ? "today" : _ < _ ? "past" : "future";
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_] = (0, _._)("gid"),
            _ = (0, _._)(_),
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _.useCallback)(
              () =>
                window.location.assign(
                  `${_._.STORE_BASE_URL}meetsteam/attendeelist?gid=${_}`,
                ),
              [_],
            );
          return _
            ? (0, _.jsxs)("div", {
                className: _().Ctn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EventName,
                    children: [
                      (0, _.jsx)("h2", {
                        children: _.GetNameWithFallback(_),
                      }),
                      (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().AtendeeListButtonRow,
                    children: (0, _.jsxs)(_._, {
                      onClick: _,
                      children: [
                        (0, _.jsx)(_.uMb, {
                          angle: 180,
                          className: _().BackToListIcon,
                        }),
                        "Back to full list",
                      ],
                    }),
                  }),
                  (0, _.jsx)(_, {
                    eventModel: _,
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = _(_(_)),
            [_] = (0, _._)("accountid"),
            _ = (0, _._)();
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _().User,
                children: (0, _.jsx)(_._, {
                  accountID: _,
                }),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.today,
                strTitle: "Today " + (0, _._)(_),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function _(_) {
          const {
            eventModel: _,
            rgUserRegs: _,
            bHideIfEmpty: _,
            strTitle: _,
          } = _;
          return _.length == 0 && _
            ? null
            : (0, _.jsx)(_._, {
                title: `${_} (${_.length})`,
                bStartMinimized: _,
                children:
                  !_ || _.length == 0
                    ? (0, _.jsx)("div", {
                        children: _ ? "" : "No registrations",
                      })
                    : (0, _.jsx)("div", {
                        children: _.sort(
                          (_, _) => _.rtSesssionTime - _.rtSesssionTime,
                        ).map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              eventModel: _,
                              reg: _,
                            },
                            `${_.group_id}_${_.session_id}`,
                          ),
                        ),
                      }),
              });
        }
        function _(_) {
          const { desc: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useCallback)(() => _((_) => !_), []);
          return (0, _.jsx)("div", {
            className: (0, _._)({
              [_().DescriptionWrapper]: !0,
              [_().Expanded]: _,
            }),
            onClick: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: _,
          });
        }
        function _(_) {
          const { reg: _, eventModel: _ } = _,
            _ = new _._(_.steamid).GetAccountID(),
            [_] = (0, _._)(_.userReg.accountid),
            [_, _] = (0, _.useState)(!0),
            [_, _] = (0, _.useState)([]),
            [_, _] = (0, _.useState)(!1),
            _ = _.userReg,
            { group: _, session: _ } = _(
              _.jsondata.meet_steam_groups,
              _.group_id,
              _.session_id,
            ),
            [_, _, _] = (0, _._)(),
            _ = _(_.GID, _, _.group_id, _.session_id),
            _ = new Set(
              _.guests_attendance?.length > 0
                ? _.guests_attendance.split("|")
                : [],
            ),
            _ = _.attendance_count > _.size,
            _ = (_, _, _, _) =>
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("span", {
                    className: _().GuestTitle,
                    children: [_, ":", "\xA0"],
                  }),
                  _,
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        "\xA0",
                        (0, _.jsxs)("span", {
                          className: _().GuestEmail,
                          children: ["(", _, ")"],
                        }),
                      ],
                    }),
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      "\xA0",
                      "-",
                      (0, _.jsx)("span", {
                        children: _
                          ? "\u2705 checked in"
                          : "\u2610 not checked in",
                      }),
                    ],
                  }),
                ],
              });
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_, {
                group: _,
                session: _,
              }),
              _
                ? (0, _.jsx)("div", {
                    className: _().CheckedIn,
                    children: "Attendee has been checked in",
                  })
                : (0, _.jsxs)("div", {
                    className: _().RegisteredUsers,
                    children: [
                      (0, _.jsx)(_._, {
                        label: (0, _.jsx)(_.Fragment, {
                          children: _(
                            "Attendee",
                            _.name || _.persona_name,
                            _.email_override,
                            _,
                          ),
                        }),
                        checked: _,
                        onChange: _,
                      }),
                      _.guest_names?.length > 0 &&
                        (0, _.jsx)(_.Fragment, {
                          children: _.guest_names.map((_) =>
                            (0, _.jsx)(
                              _._,
                              {
                                label: (0, _.jsx)(_.Fragment, {
                                  children: _("Guest", _, void 0, _.has(_)),
                                }),
                                checked: _.includes(_),
                                onChange: (_) => {
                                  _((_) =>
                                    _
                                      ? _.includes(_)
                                        ? _
                                        : [..._, _]
                                      : _.filter((_) => _ !== _),
                                  );
                                },
                              },
                              "" + _.group_id + "_" + _.session_id + "_" + _,
                            ),
                          ),
                        }),
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: "Check in selected people",
                      }),
                    ],
                  }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    closeModal: _,
                    bIncludeSelf: _,
                    rgGuestsAttending: _,
                    fnMarkAttendance: _,
                    fnOnSuccess: () => _(!0),
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              closeModal: _,
              bIncludeSelf: _,
              rgGuestsAttending: _,
              fnMarkAttendance: _,
              fnOnSuccess: _,
            } = _,
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: (0, _._)("#Saving"),
                closeModal: _,
              })
            : (0, _.jsx)(_._, {
                onCancel: _,
                strTitle: (0, _._)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0),
                    _.mutateAsync({
                      bIncludeSelf: _,
                      rgGuests: _,
                    })
                      .then((_) => {
                        _
                          ? (_(),
                            _.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
                          : _.fnSetStrError(
                              (0, _._)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        _.fnSetStrError(
                          (0, _._)("#Login_Error_Network_Description"),
                        ),
                      );
                },
                children: "Mark as checked in?",
              });
        }
        function _(_) {
          const { session: _, group: _ } = _,
            {
              sDisplayTimeZone: _,
              rtime_start: _,
              rtime_end: _,
            } = (0, _._)(_.session),
            _ = (0, _._)(_, _),
            _ = (0, _._)(_, _, _);
          return !_ || !_
            ? (0, _.jsx)("div", {
                children: "Session Infomrmation Missing",
              })
            : (0, _.jsxs)("div", {
                className: _().SessionInfo,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SessionName,
                    children: _.localized_session_title[_.Bhc],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SessionTime,
                    children: [
                      _,
                      " @ ",
                      (0, _.jsx)("b", {
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _.jsx)(_, {
                      desc: `Description: ${_.localized_session_description[_.Bhc] || ""}`,
                    }),
                  }),
                  !1,
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
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
        function _(_) {
          const [_] = (0, _._)("gid"),
            _ = (0, _._)(_),
            _ = (0, _.sfN)(_._.LANGUAGE),
            [_, _] = (0, _.useState)("");
          return _
            ? (0, _.jsxs)("div", {
                className: _().Ctn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EventName,
                    children: [
                      (0, _.jsx)("h1", {
                        children: _.GetNameWithFallback(_),
                      }),
                      (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    eventModel: _,
                  }),
                  (0, _.jsx)("div", {
                    className: _().AtendeeSearchRow,
                    children: (0, _.jsx)(_._, {
                      type: "text",
                      label: "Search for an attendee",
                      value: _,
                      bShowClearAction: !0,
                      onChange: (_) => _(_.currentTarget.value || ""),
                      placeholder: "Type name or partner or email address",
                    }),
                  }),
                  (0, _.jsx)(_, {
                    eventModel: _,
                    strSearch: _.toLowerCase(),
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          const { eventModel: _, strSearch: _ } = _,
            _ = _(_, _),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useMemo)(() => {
              const _ = new Map();
              return (
                _.forEach((_) => {
                  [_.userReg.name, ...(_.userReg.guest_names || [])].forEach(
                    (_) => {
                      const _ = _.toLowerCase();
                      _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
                    },
                  );
                }),
                [_, Array.from(_.keys()).sort()]
              );
            }, [_]);
          return (
            _.useEffect(() => {
              _(null);
            }, [_]),
            (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("h3", {
                  children: "Attendees",
                }),
                _
                  ? (0, _.jsx)(_, {
                      eventModel: _,
                      rgSelected: _,
                      strSearch: _,
                      onCleanSelection: () => _(null),
                    })
                  : (0, _.jsx)(_.Fragment, {
                      children: _.filter((_) => !_ || _.includes(_)).map((_) =>
                        (0, _.jsx)(
                          "div",
                          {
                            className: _().AttendeeRow,
                            children: (0, _.jsx)(_._, {
                              onClick: () => _(_.get(_.toLowerCase())),
                              children: _,
                            }),
                          },
                          _,
                        ),
                      ),
                    }),
              ],
            })
          );
        }
        function _(_) {
          const {
              eventModel: _,
              rgSelected: _,
              strSearch: _,
              onCleanSelection: _,
            } = _,
            _ = (0, _._)(),
            _ = _(_, _);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                className: _().AtendeeListButtonRow,
                children: (0, _.jsxs)(_._, {
                  onClick: _,
                  children: [
                    (0, _.jsx)(_.uMb, {
                      angle: 180,
                      className: _().BackToListIcon,
                    }),
                    "Back to full list",
                  ],
                }),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.today,
                strTitle: "Today " + (0, _._)(_),
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                rgUserRegs: _.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            { rgGroupedSessions: _, bMoreSessions: _ } = _.useMemo(() => {
              const _ = _?.jsondata?.meet_steam_groups?.flatMap((_) =>
                  _.sessions.map((_) => {
                    const _ = (0, _._)(_),
                      _ = (0, _._)(_.rtime_start, _);
                    return {
                      group: _,
                      session: _,
                      displayDate: _,
                    };
                  }),
                ),
                _ = _?.filter((_) => _ || _(_.displayDate) >= _(_)),
                _ = _ || (_ && _.length > _.length);
              return {
                rgGroupedSessions: _(_ ?? [], (_) => _(_.displayDate)),
                bMoreSessions: _,
              };
            }, [_?.jsondata?.meet_steam_groups, _, _]),
            _ = _.useMemo(() => {
              const _ = (0, _._)("registrations", "application_config");
              if (!(!_ || typeof _ != "object"))
                return _.reduce((_, _) => {
                  const _ = `${_.group_id}_${_.session_id}`,
                    _ = _.get(_) ?? [];
                  return _.push(_), _.set(_, _), _;
                }, new Map());
            }, []);
          if (!_ || (_.size == 0 && !_)) return;
          const _ =
              Array.from(_.keys()).reduce(
                (_, _) =>
                  _ == null || (_ * 1e3 > _.getTime() && _ < _) ? _ : _,
                void 0,
              ) ?? 0,
            _ = Array.from(_.keys()).some((_) =>
              (0, _._)(_, new Date(_ * 1e3)),
            );
          return (0, _.jsxs)("div", {
            className: _().DisplayAllDaysCtn,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  label: "Show past events",
                  checked: _,
                  onChange: _,
                }),
              (0, _.jsx)("div", {
                className: _().DisplayDaysCtn,
                children: Array.from(_.keys()).map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      eventModel: _,
                      date: new Date(_ * 1e3),
                      sessionsAndGroups: _.get(_),
                      rgRegistrationInfo: _,
                      isToday: (0, _._)(
                        _ ? _ : new Date(_ * 1e3),
                        new Date(_ * 1e3),
                      ),
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const {
            eventModel: _,
            date: _,
            sessionsAndGroups: _,
            rgRegistrationInfo: _,
            isToday: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().DisplayDaySessions, !_ && _().NotToday),
            children: [
              (0, _.jsx)("div", {
                className: _().DateName,
                children: (0, _._)(_),
              }),
              (0, _.jsx)("div", {
                className: _().DisplayDaySessionsRow,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      eventModel: _,
                      date: _,
                      registrations:
                        _.get(`${_.group.group_id}_${_.session._}`) ?? [],
                      group: _.group,
                      session: _.session,
                    },
                    `${_.group.group_id}_${_.session._}`,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const {
              eventModel: _,
              date: _,
              group: _,
              session: _,
              registrations: _,
            } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _._)(),
            { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(_),
            _ = (0, _._)(_, _),
            _ = _.reduce((_, _) => _ + (_.guests_registered ?? 0), 0),
            _ = _.reduce(
              (_, _) =>
                _ +
                (_.rt_attendance_marked > 0 && _.guests_registered
                  ? _.guests_registered
                  : 0),
              0,
            ),
            [_, _, _] = (0, _._)(),
            _ = _(_.GID, _.group_id, _._),
            _ = () => window.location.reload();
          return (0, _.jsxs)("div", {
            className: _().DisplaySession,
            children: [
              (0, _.jsxs)("div", {
                className: _().Header,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SessionName,
                    children:
                      _.localized_session_title[_] ??
                      _.localized_session_title[_.Bhc],
                  }),
                  (0, _.jsx)("div", {
                    className: _().SessionTime,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                title: "Registered:",
                nCount: _,
                nCapacity: _.max_capacity,
              }),
              (0, _.jsx)(_, {
                title: "Checked in:",
                nCount: _,
                nCapacity: _.max_capacity,
              }),
              _(_) >= _(_) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      className: (0, _._)(_().SetCapacityButton),
                      onClick: _,
                      children: "Update capacity...",
                    }),
                    (0, _.jsx)(_._, {
                      active: _,
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_, {
                          closeModal: _,
                          nCapacity: _.max_capacity ?? 0,
                          fnUpdateCapacity: _,
                          fnOnSuccess: () => _(),
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const {
              closeModal: _,
              nCapacity: _,
              fnUpdateCapacity: _,
              fnOnSuccess: _,
            } = _,
            [_, _] = _.useState(_.toString()),
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: (0, _._)("#Saving"),
                closeModal: _,
              })
            : (0, _.jsx)(_._, {
                onCancel: _,
                strTitle: (0, _._)("Update Capacity"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0);
                  const _ = Number.isNaN(Number.parseInt(_))
                    ? void 0
                    : Number.parseInt(_);
                  _.mutateAsync({
                    nCapacity: _,
                  })
                    .then((_) => {
                      _
                        ? (_(), _.fnSetStrSuccess("Max capacity updated."))
                        : _.fnSetStrError(
                            (0, _._)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      _.fnSetStrError(
                        (0, _._)("#Login_Error_Network_Description"),
                      ),
                    );
                },
                children: (0, _.jsx)(_._, {
                  className: _().SetCapacityInput,
                  label: "New capacity",
                  type: "text",
                  autoComplete: "off",
                  value: _,
                  onChange: (_) => _(_.currentTarget.value),
                }),
              });
        }
        function _(_) {
          const { title: _, nCount: _, nCapacity: _ } = _,
            _ = _ >= _,
            _ = Math.min((_ / _) * 100, 100),
            _ = _ > 0 ? `${_}%` : "0%";
          return (0, _.jsxs)("div", {
            className: _().CapacityCtn,
            children: [
              (0, _.jsxs)("span", {
                children: [_, " ", _, " / ", _],
              }),
              (0, _.jsx)("div", {
                className: _().CapacityBarMax,
                children: (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().CapacityBarCurrent,
                    _ ? _().Full : "",
                  ),
                  style: {
                    width: _,
                  },
                }),
              }),
            ],
          });
        }
        const _ = {
          MeetSteamAttendance: () => `${_._.MeetSteamRoute()}attendance`,
          MeetSteamAttendeeList: () => `${_._.MeetSteamRoute()}attendeelist`,
        };
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                path: _.MeetSteamAttendance(),
                render: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              (0, _.jsx)(_._, {
                path: _.MeetSteamAttendeeList(),
                render: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {}),
              }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AtendeeListButtonRow: "_1EtV67mAPZ0HqX9gDKHQk-",
          BackToListIcon: "_32U0JhithwvTeeStn41PFK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_35KiKa7cq-3mn4lChNW67c",
          EventName: "e-36dCsEtoK52wg6Qx1iq",
          AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
          AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
          DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
          DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
          DateName: "_32Ut51xzdWXCL6OOaz4vY2",
          DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
          NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
          DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
          DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
          Header: "_1jOgBHcEXg1l6kSowBxwn6",
          SessionName: "vl9qom9droT0L3xZs2JhG",
          SessionTime: "PG1xFNh9UdoEjEvvw22V5",
          CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
          CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
          CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
          Full: "_27_ZZ6xz-L8KC1u6uQmDz",
          SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
          SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_3cmUbcgdPxM7o5hl986RgB",
          User: "_3E6Usl36asxUFK3vPKa7Us",
          EventName: "_2GHTaky49GZrPLyiOgKWB7",
          SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
          SessionName: "_2uJvCA4FncHONmSI37VVyw",
          SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
          RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
          CheckedIn: "_17S0ayInAou4_ptPoMguR0",
          GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
          GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
          DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function _(_) {
          var _ = _(_);
          return __webpack_require__(_);
        }
        function _(_) {
          if (!__webpack_require__._(_, _)) {
            var _ = new Error("Cannot find module '" + _ + "'");
            throw ((_.code = "MODULE_NOT_FOUND"), _);
          }
          return _[_];
        }
        (_.keys = function () {
          return Object.keys(_);
        }),
          (_.resolve = _),
          (module.exports = _),
          (_._ = 61738);
      },
    },
  ]);
})();

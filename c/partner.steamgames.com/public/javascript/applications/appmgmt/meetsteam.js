(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    chunkid: (module) => {
      module.exports = {
        EventList: "_3iKeBOMuwqPC87BLxvCKll",
        EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
        EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
        Title: "_1bLTz07sQnRA0DjTpjXCza",
        StartDate: "_6accgtG1qR7tHFL1wnO58",
        TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
        ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_8n9wPNrWDu91tlwBW9bHt",
        Indicator: "_355XkH0xfIpJF1YsMX7I7k",
        EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
        EmailField: "_1E-g4exFlAQhvXDqspYTR0",
        RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
        RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_1olTwzPkPjzL36u0WgyDG0",
        Indicator: "_3d0cYrmQzzda_P3DQ994kX",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        const [_] = _.useState(() =>
            (0, _._)("events_list", "application_config"),
          ),
          [_] = (0, _._)("filter"),
          _ = (0, _._)(),
          [_, _] = _.useMemo(() => {
            let _ = new Array(),
              _ = new Array();
            return (
              _.forEach((_) => {
                _.endtime &&
                (function (_, _ = !1) {
                  const [_, _ = "00:00:00"] = _.trim().split(/\s+/),
                    [_, _, _] = __webpack_require__.split("-").map(Number),
                    [_, _, _] = _.split(":").map(Number),
                    _ = _
                      ? Date.UTC(_, _ - 1, _, _, _, _ ?? 0)
                      : new Date(_, _ - 1, _, _, _, _ ?? 0).getTime();
                  return Math.floor(_ / 1e3);
                })(_.endtime) < _
                  ? _.push(_)
                  : _.push(_);
              }),
              [_, _]
            );
          }, [_, _]);
        return {
          rgOldEvents: _,
          rgEvents: _,
          selectConference: (0, _.useMemo)(
            () => _.find((_) => _._ === _?.toLocaleLowerCase()),
            [_, _],
          ),
        };
      }
      function _(_) {
        return ["usePartnerRevAndBestAppSlow", _];
      }
      async function _(_) {
        const _ = `${_._.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          _ = {
            sessionid: _._.SESSIONID,
            partnerid: _,
          },
          _ = await _().get(_, {
            params: _,
          });
        return _?.data?.data;
      }
      function _(_, _) {
        return _.getQueryData(["usePartnerRevAndBestAppSlow", _]);
      }
      function _(_, _, _) {
        return (0, _._)({
          queryKey: ["useMeetSteamGetAllRegistration", _, _],
          queryFn: async () => {
            const _ = _._.Init(_._);
            __webpack_require__.Body().set_clan_event_gid(_);
            const _ = await _._.GetRegistrations(_, _);
            return _.BSuccess()
              ? _.Body()
                  .registrations()
                  .map((_) => _.toObject())
              : [];
          },
          enabled: null != _ && 0 != _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_steamInterface;
        GetSaleFeatureTransport() {
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
          const _ = (0, _._)("store_feature_token", "application_config");
          (0, _._)(Boolean(_), "require store_feature_token"),
            (this.m_steamInterface = new _._(_._.WEBAPI_BASE_URL, _));
        }
      }
      function _() {
        return _.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      function _(_) {
        const { hideModal: _, gid: __webpack_require__ } = _,
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(null),
          [_, _] = _.useState(0),
          [_, _] = _.useState(""),
          [_, _] = _.useState(""),
          [_, _] = _.useState(!1),
          _ = _(),
          _ = (0, _._)({
            queryKey: ["MeetSteamInviteDirectDialog", __webpack_require__, _],
            queryFn: async () => {
              const _ = {
                  steamid: _._.InitFromAccountID(_).ConvertTo64BitString(),
                  gid: __webpack_require__,
                  type: 6,
                },
                _ = await _._.GetUserActionData(_, _);
              return _.BSuccess() && _.Body().jsondata()
                ? JSON.parse(_.Body().jsondata())
                : {};
            },
            enabled: Boolean(__webpack_require__) && _ > 0,
          });
        _.useEffect(() => {
          _.isLoading ||
            (_.isSuccess &&
              (_(_.data.partner_id ? _.data.partner_id.toString() : ""),
              _(_.data.email_override ?? ""),
              _(_.data.allow_registration_if_full ?? !1)));
        }, [_.isLoading, _.isSuccess, _.data]);
        return _.createElement(
          _._,
          {
            strTitle: "Invite User",
            bOKDisabled: !_ || _ || _.isLoading,
            onOK: async () => {
              _(!0);
              const _ = Number.parseInt(_) > 0 ? Number.parseInt(_) : 0,
                _ = await _(
                  __webpack_require__,
                  [
                    {
                      nAccountID: _,
                      nPartnerID: _,
                      strEmailOverride: _,
                      bAllowRegistrationIfFull: _,
                    },
                  ],
                  !0,
                ),
                _ = _ && 1 == _.success;
              _ || _("We hit error during invite, check console: " + _?.msg),
                _(!1),
                _.refetch(),
                _ && _();
            },
            onCancel: _,
          },
          Boolean(_) &&
            _.createElement(
              "div",
              {
                className: _.ErrorStylesWithIcon,
              },
              _,
            ),
          !_ &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(_._, {
                type: "number",
                label: "Account ID",
                onChange: (_) => _(Number.parseInt(_.currentTarget.value)),
                value: _,
              }),
              0 != _ &&
                !_.isLoading &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_._, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (_) => _(_.currentTarget.value),
                    value: _,
                  }),
                  _.createElement(_._, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (_) => _(_.currentTarget.value.trim()),
                    value: _,
                  }),
                  _.createElement(_._, {
                    controlled: !0,
                    checked: _,
                    onChange: _,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          _ &&
            _.createElement(_._, {
              size: "small",
              position: "center",
              string: (0, _._)("#Saving"),
            }),
          _.isLoading &&
            _.createElement(_._, {
              size: "small",
              position: "center",
              string: (0, _._)("#Loading"),
            }),
        );
      }
      function _(_) {
        const { hideModal: _, gid: __webpack_require__ } = _,
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)(null);
        return _.createElement(
          _._,
          {
            strTitle: "Invite Users",
            bOKDisabled: !_ || 0 == _.length || null != _,
            strCancelButtonText: null !== _ ? "Close" : "Cancel",
            onOK: async () => {
              _(!0);
              const _ = await _(__webpack_require__, _, !1);
              1 == _?.success
                ? (_(_.rgInvitedAccounts.length), _(_.rgSkippedAccounts.length))
                : _("We hit error during invite, check console: " + _?.msg),
                _(!1);
            },
            onCancel: () => {
              _(null), _(null), _(!1), _(null), _();
            },
          },
          Boolean(_) &&
            _.createElement(
              "div",
              {
                className: _.ErrorStylesWithIcon,
              },
              _,
            ),
          null != _ &&
            _.createElement(
              "div",
              null,
              "Invited ",
              _.toLocaleString(),
              " accounts, skipped previously invited ",
              _.toLocaleString(),
            ),
          _ &&
            _.createElement(_._, {
              size: "small",
              position: "center",
              string: (0, _._)("#Saving"),
            }),
          null == _
            ? _.createElement(_, {
                setInvites: _,
              })
            : _.createElement(_, {
                rgInvites: _,
              }),
        );
      }
      function _(_) {
        const { rgInvites: _ } = _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("div", null, "Total Invites Parsed: ", _.length, " "),
          _.createElement(
            "table",
            null,
            _.createElement(
              "thead",
              null,
              _.createElement(
                "tr",
                null,
                _.createElement("th", null, "AccountID"),
                _.createElement("th", null, "PartnerID"),
                _.createElement("th", null, "Email Override"),
              ),
            ),
            _.createElement(
              "tbody",
              null,
              _.map((_, _) =>
                _.createElement(
                  "tr",
                  {
                    key: "invite" + _.nAccountID + "_" + _,
                  },
                  _.createElement("td", null, _.nAccountID),
                  _.createElement("td", null, _.nPartnerID),
                  _.createElement("td", null, _.strEmailOverride),
                ),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { setInvites: _ } = _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            null,
            "Format for CSV File, please use the template below:",
          ),
          _.createElement(
            "ul",
            null,
            _.createElement(
              "li",
              null,
              _.createElement("b", null, "nAccountID"),
              " - required, 32-bit integer value, not the 64-bit steam id",
            ),
            _.createElement(
              "li",
              null,
              _.createElement("b", null, "nPartnerID"),
              " - (preferred for biz contact)",
            ),
            _.createElement(
              "li",
              null,
              _.createElement("b", null, "strOverrideEmail"),
              " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
            ),
          ),
          _.createElement("br", null),
          _.createElement(
            "a",
            {
              href: "#",
              onClick: async (_) => {
                _.preventDefault(), _.stopPropagation();
                const _ = [];
                _.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  _.push(["388445686", "1", "adils@valvesoftware.com"]);
                _._.WriteCSVToFile(_, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          _.createElement("br", null),
          _.createElement("br", null),
          _.createElement(
            _._,
            null,
            _.createElement(
              "label",
              {
                className: _().ImportButtonLabel,
                htmlFor: "import-discount-input",
              },
              "Choose CSV File",
              _.createElement("input", {
                _: "import-discount-input",
                type: "file",
                style: {
                  display: "none",
                },
                onChange: async (_) => {
                  if (_.target.files.length >= 1) {
                    const _ = _.target.files[0],
                      _ = await _._.ParseCSVFile(_);
                    if (_?.data) {
                      const _ = new Array();
                      _.data.forEach((_) => {
                        if (_.nAccountID) {
                          const _ = {
                            nAccountID: Number.parseInt(_.nAccountID),
                          };
                          _.nPartnerID &&
                            (_.nPartnerID = Number.parseInt(_.nPartnerID)),
                            _.strEmailOverride &&
                              (_.strEmailOverride = _.strEmailOverride),
                            _.push(_);
                        }
                      }),
                        _(_);
                    }
                  }
                },
              }),
            ),
          ),
        );
      }
      async function _(_, _, _) {
        const _ = _.map((_) => _.nAccountID).join(","),
          _ = _.map((_) => _.nPartnerID).join(","),
          _ = _.map((_) => _.strEmailOverride).join(","),
          _ = _.map((_) => (_.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let _ = new FormData();
        _.append("sessionid", _._.SESSIONID),
          _.append("gid", _),
          _.append("accounts", _),
          _.append("partnerids", _),
          _.append("emailoverride", _),
          _.append("allowregistrationiffull", _),
          _.append("forceupdate", _ ? "1" : "0");
        const _ = `${_._.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const _ = await _().post(_, _, {
            withCredentials: !0,
          });
          if (1 != _?.data?.success) {
            let _ = (0, _._)(_);
            console.error("DisplayPartnerEventRow error: " + _.strErrorMsg, _);
          }
          return _?.data;
        } catch (_) {
          let _ = (0, _._)(_);
          console.error("DisplayPartnerEventRow error: " + _.strErrorMsg, _);
        }
        return null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const _ = _(),
          _ = _.useContext(_),
          _ = (0, _._)(_(_, _, _));
        return _.isLoading ? null : _.data;
      }
      function _(_) {
        const _ = _(),
          _ = _.useContext(_);
        return (0, _._)({
          queries: _.map((_) => _(_, _, _)),
        });
      }
      const _ = _.createContext({
        loadMeetSteamAllRegistration: async (_, _) =>
          await (function (_) {
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = _._.Init(_._);
                  __webpack_require__.Body().set_gids([..._]),
                    __webpack_require__.Body().set_type(6);
                  const _ = await _._.GetMultipleUserActionData(_, _);
                  if (!_.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${_.GetErrorMessage()}`;
                  const _ = new Map();
                  return (
                    _.Body()
                      .entries()
                      .forEach((_) => {
                        try {
                          const _ = JSON.parse(_.jsondata());
                          if (!("steamid" in _) || !_.steamid) {
                            _.steamid = _.steamid();
                            const _ = new _._(_.steamid);
                            _.accountid = __webpack_require__.GetAccountID();
                          }
                          const _ = _.gid();
                          return (
                            _.has(_) ? _.get(_).push(_) : _.set(_, [_]), [_]
                          );
                        } catch (_) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${_.steamid()}`;
                        }
                      }),
                    _.map((_) => _.get(_) ?? null)
                  );
                },
                {
                  maxBatchSize: 5,
                },
              ));
            return _;
          })(_).load(_),
      });
      function _(_, _, _) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", _],
          queryFn: () => _.loadMeetSteamAllRegistration(_, _),
          enabled: !!_,
        };
      }
      let _;
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        const _ = (0, _._)(),
          _ = _.useContext(_),
          _ = (0, _._)(_(_, _, _, _));
        return _.isLoading ? null : _.data;
      }
      function _(_, _) {
        return _._.getQueryData(["PartnerEmailAndName", _, _]);
      }
      const _ = _.createContext({
        loadPartnerEmailAndName: async (_, _, _) =>
          await (function (_) {
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = _._.Init(_._);
                  __webpack_require__
                    .Body()
                    .set_accountids(_.map((_) => _.accountID)),
                    __webpack_require__
                      .Body()
                      .set_partnerids(_.map((_) => _.partnerID));
                  const _ = await _._.GetBatchPartnerEmailAndName(_, _);
                  if (!_.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${_.GetErrorMessage()}`;
                  const _ = new Map();
                  return (
                    _.Body()
                      .info()
                      .forEach((_) => {
                        _.set(
                          _.accountid() + "_" + _.partnerid(),
                          _.toObject(),
                        );
                      }),
                    _.map((_) => _.get(_.accountID + "_" + _.partnerID) ?? null)
                  );
                },
                {
                  maxBatchSize: 100,
                },
              ));
            return _;
          })(_).load({
            accountID: _,
            partnerID: _,
          }),
      });
      function _(_, _, _, _) {
        return {
          queryKey: ["PartnerEmailAndName", _, _],
          queryFn: () => _.loadPartnerEmailAndName(_, _, _),
          enabled: !!_ || !!_,
        };
      }
      let _;
      function _(_) {
        const { rgEventGIDs: _ } = _,
          [__webpack_require__, _, _] = (0, _._)(),
          [_, _] = (0, _.useState)(null);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("span", null, " | "),
          _.createElement(
            "a",
            {
              href: "#",
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), _();
              },
            },
            "Analyse Top Partner Coverage",
          ),
          _.createElement(
            _._,
            {
              active: __webpack_require__,
            },
            _.createElement(
              _._,
              null,
              _.createElement(
                _._,
                {
                  closeModal: _,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == _)
                  ? _.createElement(_, {
                      rgEventGIDs: _,
                      fnSelectedEvents: _,
                    })
                  : _.createElement(
                      _.Fragment,
                      null,
                      _.createElement(_, {
                        rgGidMeetSteamEvents: _,
                      }),
                      _.createElement(
                        _._,
                        {
                          onClick: () => _(null),
                        },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const _ = (0, _._)();
      function _(_) {
        return (
          (_ = _?.filter(
            (_, _) =>
              0 == _ || !_.slice(0, _).some((_) => _.accountid == _.accountid),
          )),
          _?.map(
            (_) =>
              _.name || _(_.accountid, _.partner_id)?.realname || _.accountid,
          ).join(",") || ""
        );
      }
      function _(_) {
        return _(_.cell.getValue());
      }
      function _(_, _) {
        const _ = _(_),
          [_, _, _] = (0, _.useMemo)(() => {
            if (
              __webpack_require__.filter((_) => !_.isLoading).length != _.length
            )
              return [null, [], []];
            const _ = new Map(),
              _ = new Set(_),
              _ = new Map();
            __webpack_require__.forEach((_) =>
              _.data.forEach((_) => {
                if (
                  _.has(_.partner_id) &&
                  (_.has(_.partner_id)
                    ? _.get(_.partner_id).push(_)
                    : _.set(_.partner_id, [_]),
                  !_.name)
                ) {
                  const _ = _.accountid;
                  _.set(`${_}_${_.partner_id}`, {
                    accountID: _,
                    partnerID: _.partner_id,
                  });
                }
              }),
            );
            const _ = Array.from(_.values());
            return [_, _.map((_) => _.accountID), _.map((_) => _.partnerID)];
          }, [_, _]),
          _ = (function (_, _) {
            const _ = (0, _._)(),
              _ = _.useContext(_);
            return (0, _._)({
              queries: _.map((_, _) => _(_, _, _, _[_])),
            });
          })(_, _);
        return _.filter((_) => !_.isLoading).length == _.length ? _ : null;
      }
      function _(_) {
        const { rgGidMeetSteamEvents: _ } = _,
          _ = (function () {
            const [_] = (0, _.useState)(() =>
              (0, _._)("partners_to_verify", "application_config"),
            );
            return _;
          })(),
          _ = (0, _._)(_),
          _ = _(_, _),
          _ = (0, _.useMemo)(() => {
            if (!_ || !_) return null;
            const _ = [];
            return (
              __webpack_require__.forEach((_) => {
                const _ = _.get(_);
                _.push({
                  partner_id: _,
                  partner_name: (0, _._)(_)?.name || "Unknown",
                  invitations:
                    __webpack_require__?.filter(
                      (_) =>
                        _.invited &&
                        !Object.keys(_).some((_) =>
                          _.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    __webpack_require__?.filter((_) =>
                      Object.keys(_).some((_) =>
                        _.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              _
            );
          }, [_, _, _]),
          _ = (0, _.useMemo)(
            () => [
              _.accessor("partner_id", {
                header: "Partner ID",
                size: 100,
              }),
              _.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              _.accessor("invitations", {
                header: "Invitations",
                cell: _,
                size: 300,
              }),
              _.accessor("registrations", {
                header: "Registered to Attend",
                cell: _,
                size: 300,
              }),
            ],
            [],
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(_._, null, "Partner Analysis"),
          Boolean(_)
            ? _.createElement(
                _._,
                null,
                _.createElement(_._, {
                  columns: _,
                  data: _,
                  getRowKey: (_) => _,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: _.length,
                }),
                _.createElement("br", null),
                _.createElement(
                  _._,
                  {
                    _: "download-csv",
                    onClick: function () {
                      const _ = [],
                        _ = [];
                      for (const _ of _) _.push(_.header);
                      _.push(_);
                      for (const _ of _) {
                        const _ = [];
                        for (const _ of _) {
                          const _ = _[_.accessorKey];
                          __webpack_require__.push(
                            "invitations" == _.accessorKey ||
                              "registrations" == _.accessorKey
                              ? _(_)
                              : _.toString(),
                          );
                        }
                        _.push(_);
                      }
                      _._.WriteCSVToFile(_, "partneranalysis.csv");
                    },
                    style: {
                      width: "120px",
                    },
                  },
                  "Download CSV",
                ),
              )
            : _.createElement(_._, {
                string: (0, _._)("#Loading"),
                position: "center",
              }),
        );
      }
      function _(_) {
        const { rgEventGIDs: _, fnSelectedEvents: __webpack_require__ } = _,
          [_, _] = (0, _.useState)([]);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(_._, null, "Choose Events"),
          _.map((_) =>
            _.createElement(_, {
              key: _,
              gidClanEvent: _,
              rgSelected: _,
              fnSetSelected: _,
            }),
          ),
          _.createElement(
            _._,
            {
              disabled: 0 == _.length,
              onClick: () => __webpack_require__(_),
            },
            "Continue",
          ),
        );
      }
      function _(_) {
        const {
            gidClanEvent: _,
            rgSelected: __webpack_require__,
            fnSetSelected: _,
          } = _,
          _ = (0, _._)(_).GetNameWithFallback(0);
        return _.createElement(_._, {
          label: _,
          checked: __webpack_require__.includes(_),
          onChange: (_) => {
            const _ = __webpack_require__.indexOf(_),
              _ = Boolean(_ >= 0);
            _ && !_
              ? _([...__webpack_require__, _])
              : !_ &&
                _ &&
                _([
                  ...__webpack_require__.slice(0, _),
                  ...__webpack_require__.slice(_ + 1),
                ]);
          },
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { hideModal: _, gid: __webpack_require__ } = _,
          _ = _(__webpack_require__),
          _ = (0, _._)(),
          [_, _] = (0, _.useMemo)(
            () =>
              _
                ? [_.length, _.filter((_) => !_.invitation_emailed).length]
                : [0, 0],
            [_],
          );
        return _.createElement(
          _._,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: _,
            strDescription:
              "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
            strTitle: "Invitation And Registration Status",
          },
          !_ &&
            _.createElement(_._, {
              size: "medium",
              position: "center",
              string: (0, _._)("#Loading"),
            }),
          _ &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement("div", null, "There are ", _, " registrations."),
              _ > 0 &&
                _.createElement(
                  _._,
                  {
                    onClick: async () => {
                      await (async function (_, _) {
                        let _ = new FormData();
                        __webpack_require__.append("sessionid", _._.SESSIONID),
                          __webpack_require__.append("gid", _);
                        const _ = `${_._.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const _ = await _().post(_, _, {
                            withCredentials: !0,
                          });
                          if (1 != _?.data?.success) {
                            let _ = (0, _._)(_);
                            console.error(
                              "AsyncSendInviteEmails error: " + _.strErrorMsg,
                              _,
                            );
                          }
                          return (
                            _.invalidateQueries({
                              queryKey: [
                                "useMeetSteamAllRegistrationStatus",
                                _,
                              ],
                            }),
                            _?.data
                          );
                        } catch (_) {
                          let _ = (0, _._)(_);
                          console.error(
                            "AsyncSendInviteEmails error: " + _.strErrorMsg,
                            _,
                          );
                        }
                        return null;
                      })(_, __webpack_require__);
                    },
                  },
                  _,
                  " Invites To Sent. Send now?",
                ),
              _.createElement(
                "table",
                null,
                _.createElement(
                  "thead",
                  null,
                  _.createElement(
                    "tr",
                    null,
                    _.createElement("th", null, "SteamID"),
                    _.createElement("th", null, "Name"),
                    _.createElement("th", null, "invited"),
                    _.createElement("th", null, "Invite Emailed"),
                    _.createElement("th", null, "Partner"),
                    _.createElement("th", null, "Email Override"),
                  ),
                ),
                _.createElement(
                  "tbody",
                  null,
                  _?.map((_) =>
                    _.createElement(_, {
                      key: "regentry_" + _.steamid,
                      reg: _,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function _(_) {
        const { reg: _ } = _,
          [__webpack_require__] = (0, _._)(_.partner_id);
        return _.createElement(
          "tr",
          null,
          _.createElement("td", null, _.steamid),
          _.createElement("td", null, _.name),
          _.createElement("td", null, Boolean(_.invited) ? "YES" : ""),
          _.createElement(
            "td",
            null,
            Boolean(_.invitation_emailed) ? "YES" : "",
          ),
          _.createElement(
            "td",
            null,
            __webpack_require__?.name,
            " (",
            _.partner_id,
            ")",
          ),
          _.createElement("td", null, _.email_override),
        );
      }
      function _(_) {
        const {
            hideModal: _,
            gid: __webpack_require__,
            title: _,
            group: _,
            session: _,
          } = _,
          _ = (0, _._)(),
          _ = _(__webpack_require__),
          _ = _(_, __webpack_require__, _?.group_id),
          [_, _] = (0, _.useMemo)(() => {
            const _ = _?.data?.filter((_) => _.session_id == _._),
              _ = new Map(),
              _ = new Map();
            return (
              _?.forEach((_) => {
                const _ = new _._(_.steamid).GetAccountID();
                if ((_.set(_, _), _.jsondata)) {
                  const _ = JSON.parse(_.jsondata);
                  _.pre_event_partner_questions &&
                    __webpack_require__.set(_, _.pre_event_partner_questions);
                }
              }),
              [_, _]
            );
          }, [_, _]),
          _ = _?.filter((_) => _.has(new _._(_.steamid).GetAccountID()));
        return _.createElement(
          _._,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: _,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
          },
          _.createElement(
            "div",
            {
              className: _().ExportToCSV,
            },
            _.createElement(
              "a",
              {
                onClick: () =>
                  (function (_, _, _, _, _) {
                    const _ = [],
                      _ = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    _.ask_registration_question && _.push("Pre Reg Answer");
                    _.push(_),
                      __webpack_require__.forEach((_) => {
                        const _ = [],
                          _ = _.partner_id ? (0, _._)(_.partner_id) : void 0;
                        __webpack_require__.push("" + _.steamid),
                          __webpack_require__.push(_.name),
                          __webpack_require__.push(_.invited ? "YES" : ""),
                          __webpack_require__.push(
                            _ ? `${_?.name} (${_.partner_id})` : "",
                          ),
                          __webpack_require__.push(_.email_override),
                          __webpack_require__.push(
                            "" +
                              (_.guests_registered
                                ? _.guests_registered - 1
                                : 0),
                          );
                        const _ = new _._(_.steamid);
                        if (_.has(_.GetAccountID())) {
                          const _ = _(_.get(_.GetAccountID()), _);
                          if (_) {
                            const _ = new Date(1e3 * _)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            __webpack_require__.push(_);
                          } else __webpack_require__.push("");
                        } else __webpack_require__.push("");
                        if (_.ask_registration_question) {
                          const _ = _.get(_.GetAccountID())?.find(
                            (_) => _.group_id == _.group_id,
                          );
                          _ && __webpack_require__.push(_.question);
                        }
                        _.push(_);
                        for (let _ = 0; _ < _.guest_names?.length; _++) {
                          const _ = [];
                          __webpack_require__.push("(guest)"),
                            __webpack_require__.push(_.guest_names[_]),
                            _.push(_);
                        }
                      });
                    const _ =
                      "meetsteam_" +
                      _.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    _._.WriteCSVToFile(_, _);
                  })(_, _, _, _, _),
              },
              "Export to CSV",
            ),
          ),
          _.createElement(
            "table",
            {
              className: _().Table,
            },
            _.createElement(
              "thead",
              null,
              _.createElement(
                "tr",
                null,
                _.createElement("th", null, "SteamID"),
                _.createElement("th", null, "Name"),
                _.createElement("th", null, "Invited"),
                _.createElement("th", null, "Partner"),
                _.createElement("th", null, "Email Override"),
                _.createElement(
                  "th",
                  null,
                  "Guest Count ",
                  _.createElement(_._, {
                    tooltip:
                      "Additional guests, doesn't include main registrant",
                  }),
                ),
                _.createElement("th", null, "Reg Confirm Email Sent"),
                _.ask_registration_question &&
                  _.createElement("th", null, "Answer"),
              ),
            ),
            _.createElement(
              "tbody",
              null,
              _?.flatMap((_) => {
                const _ = new _._(_.steamid).GetAccountID(),
                  _ = [
                    _.createElement(_, {
                      key: "regrow" + _.steamid,
                      group: _,
                      regInfo: _.get(_),
                      inviteInfo: _,
                      preRegQuestions: _.get(_),
                    }),
                  ];
                for (let _ = 0; _ < _.guest_names?.length; _++)
                  __webpack_require__.push(
                    _.createElement(_, {
                      key: "regguestrow" + _.steamid + "_" + _,
                      guestName: _.guest_names[_],
                    }),
                  );
                return _;
              }),
            ),
          ),
        );
      }
      function _(_, _) {
        const _ = `registration_emailed_${_.group_id}_${_.session_id}`;
        let _ = null;
        return _ in _ && (_ = _[_]), _;
      }
      function _(_) {
        const {
            inviteInfo: _,
            regInfo: __webpack_require__,
            group: _,
            preRegQuestions: _,
          } = _,
          [_] = (0, _._)(_.partner_id),
          _ = _(__webpack_require__, _);
        return _.createElement(
          "tr",
          null,
          _.createElement("td", null, _.steamid),
          _.createElement("td", null, _.name),
          _.createElement("td", null, Boolean(_.invited) ? "YES" : ""),
          _.createElement(
            "td",
            null,
            (_?.name ?? _.game) ? `Game: ${_.game}` : "",
            " ",
            _.partner_id ? `(${_.partner_id})` : "",
          ),
          _.createElement("td", null, _.email_override),
          _.createElement(
            "td",
            null,
            __webpack_require__.guests_registered
              ? __webpack_require__.guests_registered - 1
              : 0,
          ),
          _.createElement("td", null, _ ? (0, _._)(_) : ""),
          _.ask_registration_question &&
            _.createElement(
              "td",
              null,
              _?.find((_) => _.group_id == _.group_id)?.question || "",
            ),
        );
      }
      function _(_) {
        const { guestName: _ } = _;
        return _.createElement(
          "tr",
          null,
          _.createElement("td", null, "(guest)"),
          _.createElement("td", null, _),
        );
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { rgEventGIDs: _ } = _,
          [__webpack_require__, _, _] = (0, _._)(),
          [_, _] = (0, _.useState)(null);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("span", null, " | "),
          _.createElement(
            "a",
            {
              href: "#",
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), _();
              },
            },
            "Show Registration Across Events",
          ),
          _.createElement(
            _._,
            {
              active: __webpack_require__,
            },
            _.createElement(
              _._,
              null,
              _.createElement(
                _._,
                {
                  closeModal: _,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == _)
                  ? _.createElement(_, {
                      rgEventGIDs: _,
                      fnSelectedEvents: _,
                    })
                  : _.createElement(
                      _.Fragment,
                      null,
                      _.createElement(_, {
                        rgGidMeetSteamEvents: _,
                      }),
                      _.createElement(
                        _._,
                        {
                          onClick: () => _(null),
                        },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const _ = (0, _._)();
      function _(_) {
        const { rgGidMeetSteamEvents: _ } = _,
          { rgAllRegistrations: __webpack_require__, rgPartnerIDs: _ } =
            (function (_) {
              const _ = _(_),
                [__webpack_require__, _] = (0, _.useMemo)(() => {
                  if (_.filter((_) => !_.isLoading).length != _.length)
                    return [null, null];
                  const _ = new Array(),
                    _ = new Set();
                  return (
                    _.forEach((_) => {
                      _.data.forEach((_) => {
                        _.guests_registered > 0 &&
                          (_.push(_),
                          _.partner_id &&
                            __webpack_require__.add(_.partner_id));
                      });
                    }),
                    [Array.from(_), _]
                  );
                }, [_]);
              return {
                rgAllRegistrations: _,
                rgPartnerIDs: __webpack_require__,
              };
            })(_),
          _ = (0, _._)(_),
          _ = (0, _.useMemo)(() => {
            if (!_ || !__webpack_require__) return null;
            const _ = [];
            return (
              __webpack_require__.forEach((_) => {
                (0, _._)(_.partner_id);
                _.push({
                  partner_id: _.partner_id ? "" + _.partner_id : "",
                  partner_name: (0, _._)(_.partner_id)?.name || "Unknown",
                  name: _.name,
                  accountid: _.accountid,
                  email: _.email_override,
                  guest_registrated: _.guests_registered - 1,
                  guest_names:
                    _.guest_names?.length > 0 ? _.guest_names.join(",") : "",
                });
              }),
              _
            );
          }, [_, __webpack_require__]),
          _ = (0, _.useMemo)(
            () => [
              _.accessor("name", {
                header: "Name",
                size: 200,
              }),
              _.accessor("accountid", {
                header: "Account ID",
                size: 150,
              }),
              _.accessor("email", {
                header: "Email",
                size: 150,
              }),
              _.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              _.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              _.accessor("partner_id", {
                header: "Partner ID",
                size: 100,
              }),
              _.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
            ],
            [],
          );
        return _ && _ && _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(_._, null, "Registations"),
              Boolean(_)
                ? _.createElement(
                    _._,
                    null,
                    _.createElement(_._, {
                      columns: _,
                      data: _,
                      getRowKey: (_) => _,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: _.length,
                    }),
                    _.createElement("br", null),
                    _.createElement(
                      _._,
                      {
                        _: "download-csv",
                        onClick: () =>
                          (0, _._)(
                            "registrationdump.csv",
                            _,
                            _.map((_) => ({
                              accessorKey: _.accessorKey,
                              header:
                                "string" == typeof _.header
                                  ? _.header
                                  : (_.accessorKey ?? ""),
                            })),
                          ),
                        style: {
                          width: "120px",
                        },
                      },
                      "Download CSV",
                    ),
                  )
                : _.createElement(_._, {
                    string: (0, _._)("#Loading"),
                    position: "center",
                  }),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = _();
        return _.createElement(
          "div",
          null,
          _.createElement(
            "ol",
            null,
            Array.from(_.entries()).map(([_, _]) =>
              _.createElement(
                "li",
                {
                  key: _,
                },
                _.createElement(
                  "a",
                  {
                    href: `${_._.PARTNER_BASE_URL}meetsteam/surveyresults/${_}`,
                    target: "_blank",
                  },
                  _,
                ),
              ),
            ),
          ),
        );
      }
      function _() {
        const [_] = (0, _.useState)(() => {
          const _ = (0, _._)("survey_list", "application_config") || {},
            _ = new Map();
          for (const _ of Object.keys(_)) _.set(_, _[_]);
          return _;
        });
        return _;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const _ = _._.InitFromClanID((0, _._)()),
          _ = (function () {
            const [_] = (0, _.useState)(() =>
              (0, _._)("event_gids", "application_config"),
            );
            return _;
          })(),
          [_, _] = (0, _._)("showpastevents", !1),
          { bIsLoading: _, events: _ } = (0, _._)(_),
          _ = _.useMemo(() => {
            if (!_) return null;
            const _ =
                _ && _
                  ? [..._]
                  : _?.filter((_) => _.endTime >= new Date().getTime() / 1e3),
              _ = Array.from(
                (0, _._)(_, (_) => (0, _._)(new Date(1e3 * _.startTime))),
              );
            return _?.sort((_) => -_[0]), _;
          }, [_, _]);
        return _
          ? _.createElement(_._, null)
          : _
            ? _.createElement(
                "div",
                null,
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "a",
                    {
                      href: `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/`,
                    },
                    "Open Meet Steam Event Dashboard",
                  ),
                  _.createElement(_, {
                    rgEventGIDs: _,
                  }),
                  _.createElement(_, {
                    rgEventGIDs: _,
                  }),
                ),
                _.createElement(_._, {
                  checked: _,
                  onChange: _,
                  label: "Show Past Events",
                }),
                _.createElement("hr", null),
                _.map((_) =>
                  _.createElement(_, {
                    key: _[0],
                    month: new Date(1e3 * _[0]),
                    events: _[1],
                  }),
                ),
              )
            : null;
      }
      function _(_) {
        const { month: _, events: __webpack_require__ } = _,
          _ = _.useMemo(
            () => [...__webpack_require__].sort((_) => -_.startTime),
            [__webpack_require__],
          ),
          _ = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(_);
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: _().MonthTitle,
            },
            _,
          ),
          _.createElement(
            "div",
            {
              className: _().MonthEvents,
            },
            _.map((_) =>
              _.createElement(_, {
                oEvent: _,
                key: _.GID,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { oEvent: _ } = _,
          _ = _.GID,
          _ = _._.InitFromClanID((0, _._)()),
          _ = (0, _._)(),
          _ = (0, _._)(_, (0, _._)(), _),
          _ = _.isSuccess ? _.data : null,
          _ = _.GetNameWithFallback(0),
          _ = (0, _.useMemo)(() => {
            const _ = new Array();
            return (
              _.jsondata.meet_steam_groups?.forEach((_) => {
                _.sessions.forEach((_, _) => {
                  _.push({
                    group: _,
                    session: _,
                    firstSession: 0 == _,
                  });
                });
              }),
              _
            );
          }, [_.jsondata.meet_steam_groups]);
        return _.createElement(
          "div",
          {
            className: _().EventRow,
          },
          _.createElement(
            "div",
            {
              className: _().EventMainDetails,
            },
            _.createElement(
              "div",
              {
                className: _().TitleLine,
              },
              _.createElement(
                "div",
                {
                  className: _().Title,
                },
                _,
              ),
              _.createElement(
                "div",
                {
                  className: _().StartDate,
                },
                (0, _._)(_?.startTime),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _().ActionLine,
              },
              _.createElement(
                "div",
                null,
                _.createElement(
                  "a",
                  {
                    href: `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/edit/${_}`,
                  },
                  "Edit",
                ),
              ),
              _.createElement(
                "div",
                null,
                " | ",
                _.createElement(
                  "a",
                  {
                    href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                  },
                  "View",
                ),
              ),
              Boolean(
                _.BIsUnlistedEvent() &&
                  _.jsondata.meet_steam_groups?.length > 0,
              ) &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_, {
                    gid: _,
                  }),
                  " | ",
                  _.createElement(
                    "a",
                    {
                      href: `${_._.STORE_BASE_URL}meetsteam/attendance?gid=${_}&accountid=${_._.accountid}`,
                    },
                    "QR Page",
                  ),
                  " | ",
                  _.createElement(
                    "a",
                    {
                      href: `${_._.STORE_BASE_URL}meetsteam/attendeelist?gid=${_}`,
                    },
                    "Attendance List",
                  ),
                  _.createElement(_, {
                    gid: _,
                  }),
                  _.createElement(_, {
                    gid: _,
                  }),
                  _.createElement(_, {
                    gid: _,
                  }),
                  _.createElement(_, {
                    gid: _,
                  }),
                ),
            ),
          ),
          _.createElement(
            "div",
            null,
            _.createElement(
              "table",
              {
                className: "landingTable",
              },
              _.createElement(
                "thead",
                null,
                _.createElement(
                  "tr",
                  null,
                  _.createElement("th", null, "Group"),
                  _.createElement("th", null, "Session Start"),
                  _.createElement("th", null, "Session Duration"),
                  _.createElement("th", null, "Seats"),
                  _.createElement(
                    "th",
                    {
                      style: {
                        width: "50px",
                      },
                    },
                    "Registered",
                  ),
                  _.createElement(
                    "th",
                    {
                      style: {
                        width: "50px",
                      },
                    },
                    "Guests",
                  ),
                  _.createElement(
                    "th",
                    {
                      style: {
                        width: "100px",
                      },
                    },
                    "Details",
                  ),
                ),
              ),
              _.createElement(
                "tbody",
                null,
                _.createElement(
                  "tr",
                  null,
                  Boolean(_.length > 0)
                    ? _.createElement(_, {
                        key: _[0].session._,
                        gid: _,
                        group: _[0].group,
                        session: _[0].session,
                        rgAvailability: _,
                      })
                    : _.createElement(
                        _.Fragment,
                        null,
                        _.createElement("td", null, "None"),
                        _.createElement("td", null),
                        _.createElement("td", null),
                        _.createElement("td", null),
                        _.createElement("td", null),
                        _.createElement("td", null),
                      ),
                  _.createElement(
                    "td",
                    null,
                    !Boolean(
                      _?.BIsUnlistedEvent() &&
                        _.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      _.createElement(
                        "div",
                        null,
                        "Invite Disabled. Event need to publish into Unlisted State",
                      ),
                  ),
                ),
                _.filter((_, _) => _ > 0).map((_) =>
                  _.createElement(
                    "tr",
                    {
                      key: _.session._,
                    },
                    _.createElement(_, {
                      group: _.group,
                      gid: _,
                      session: _.session,
                      rgAvailability: _,
                      firstSession: _.firstSession,
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { gid: _ } = _,
          _ = _();
        return Array.from(__webpack_require__.keys()).includes(_)
          ? _.createElement(
              _.Fragment,
              null,
              " | ",
              _.createElement(
                "a",
                {
                  href: `${_._.PARTNER_BASE_URL}meetsteam/survey/${_}`,
                },
                "Survey",
              ),
            )
          : null;
      }
      function _(_) {
        const { gid: _ } = _,
          [__webpack_require__, _, _] = (0, _._)();
        return _.createElement(
          "div",
          null,
          " | ",
          _.createElement(
            "a",
            {
              href: "#",
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), _();
              },
            },
            "Invite via CSV",
            _.createElement(_._, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          _.createElement(
            _._,
            null,
            _.createElement(
              _._,
              {
                active: __webpack_require__,
              },
              _.createElement(_, {
                hideModal: _,
                gid: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { gid: _ } = _,
          [__webpack_require__, _, _] = (0, _._)();
        return _.createElement(
          "div",
          null,
          " | ",
          _.createElement(
            "a",
            {
              href: "#",
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), _();
              },
            },
            "Invite",
          ),
          _.createElement(
            _._,
            null,
            _.createElement(
              _._,
              {
                active: __webpack_require__,
              },
              _.createElement(_, {
                hideModal: _,
                gid: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { gid: _ } = _,
          [__webpack_require__, _, _] = (0, _._)();
        return _.createElement(
          "div",
          null,
          " | ",
          _.createElement(
            "a",
            {
              href: "#",
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), _();
              },
            },
            "Show Invites",
          ),
          _.createElement(
            _._,
            null,
            _.createElement(
              _._,
              {
                active: __webpack_require__,
              },
              _.createElement(_, {
                hideModal: _,
                gid: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { gid: _ } = _,
          _ = (0, _._)(),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(null);
        return _.createElement(
          "div",
          null,
          " | ",
          _.createElement(
            "a",
            {
              href: "#",
              onClick: async (_) => {
                _.preventDefault(), _.stopPropagation(), _(!0);
                const _ = await (async function (_, _) {
                  const _ = _._.Init(_._),
                    _ = _._.InitFromClanID((0, _._)());
                  __webpack_require__.Body().set_clan_event_gid(_),
                    __webpack_require__
                      .Body()
                      .set_steamid(_.ConvertTo64BitString());
                  const _ = await _._.TestFireEmails(_, _);
                  return console.log("test fire", _), _.GetEResult();
                })(_, _);
                _(_);
              },
            },
            "Email Self",
          ),
          _.createElement(
            _._,
            {
              active: _,
            },
            _.createElement(
              _._,
              {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  _(!1), _(null);
                },
                onOK: () => {},
              },
              _.createElement(
                "div",
                null,
                "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
              ),
              Boolean(null == _) &&
                _.createElement(_._, {
                  string: (0, _._)("#Loading"),
                }),
              Boolean(1 == _) &&
                _.createElement("div", null, "Test Emails Sent"),
              Boolean(_ && 1 != _) &&
                _.createElement(
                  "div",
                  null,
                  "Email Failed to Send. Check console",
                ),
            ),
          ),
        );
      }
      function _(_) {
        const {
            gid: _,
            group: __webpack_require__,
            rgAvailability: _,
            session: _,
            firstSession: _ = !0,
          } = _,
          _ = _._.GetWithFallback(
            __webpack_require__?.localized_session_title,
            0,
          ),
          _ = _._.GetWithFallback(
            __webpack_require__?.localized_session_description,
            0,
          ),
          _ = _._.GetWithFallback(
            __webpack_require__?.localized_intended_audience,
            0,
          ),
          _ = _?.find(
            (_) =>
              _.group_id == __webpack_require__.group_id && _.session_id == _._,
          ),
          [_, _, _] = (0, _._)(),
          _ = _((0, _._)(), _, __webpack_require__?.group_id);
        let _ = Math.min((_?.guest_count / _.max_capacity) * 100, 100),
          _ = _?.guest_count > 0 ? `${_}%` : "0%",
          _ = _?.guest_count >= _.max_capacity;
        const _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
          _ =
            "in_person" === _.location_type
              ? (_.in_person_time_zone ?? _._)
              : _;
        return _.createElement(
          _.Fragment,
          null,
          _ && Boolean(__webpack_require__)
            ? _.createElement(
                "td",
                null,
                _,
                _.createElement(_._, {
                  tooltip: _,
                }),
                Boolean(_) && _.createElement("div", null, _),
              )
            : _.createElement("td", null),
          _.createElement(
            "td",
            null,
            _.createElement(
              "span",
              null,
              (function (_, _) {
                const _ = _().unix(_),
                  _ = _().unix(_)._(_),
                  _ = _.utcOffset() - __webpack_require__.utcOffset(),
                  _ = new Date(1e3 * (_ + 60 * _)),
                  _ = new Date();
                return `${_.getFullYear() == _.getFullYear() ? ((0, _._))(_, !1, !1) : ((0, _._))(_, !1, !1)} ${(0, _._)(_ + 60 * _)} ${_.format("z")}`;
              })(_.rtime_start, _),
            ),
          ),
          _.createElement("td", null, (0, _._)(_.rtime_end - _.rtime_start)),
          _.createElement(
            "td",
            null,
            _?.guest_count || 0,
            " / ",
            _.max_capacity,
            _.createElement("br", null),
            _.createElement(
              "div",
              {
                className: _().CapacityBarMax,
              },
              _.createElement("div", {
                className: (0, _._)(_().CapacityBarCurrent, _ ? _().Full : ""),
                style: {
                  width: _,
                },
              }),
            ),
          ),
          _.createElement(
            "td",
            null,
            _.isSuccess &&
              _.createElement(
                _.Fragment,
                null,
                _.data?.filter((_) => _.session_id == _._).length,
              ),
          ),
          _.createElement(
            "td",
            null,
            _.isSuccess &&
              _.createElement(
                _.Fragment,
                null,
                _.data
                  ?.filter((_) => _.session_id == _._)
                  .reduce((_, _) => _ + _.guests_registered - 1, 0),
              ),
          ),
          _.createElement(
            "td",
            null,
            _.createElement(
              _._,
              {
                onClick: _,
              },
              "Details",
            ),
            _.createElement(
              _._,
              null,
              _.createElement(
                _._,
                {
                  active: _,
                },
                _.createElement(_, {
                  gid: _,
                  title: _,
                  group: __webpack_require__,
                  session: _,
                  hideModal: _,
                }),
              ),
            ),
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { rgEvents: _ } = _(),
          _ = (function () {
            const [_] = (0, _.useState)(() =>
              (0, _._)("interest_results", "application_config"),
            );
            return (0, _.useMemo)(
              () => _.map((_) => ((_.results = JSON.parse(_.jsondata)), _)),
              [_],
            );
          })(),
          [_, _] = (0, _.useState)(""),
          _ = _._.PARTNER_BASE_URL + "meetsteam",
          _ = (0, _.useMemo)(() => {
            const _ = new Map();
            return (
              __webpack_require__.forEach((_) => {
                _.results?.attending?.forEach((_) => {
                  _.has(_) ? _.set(_, _.get(_) + 1) : _.set(_, 1);
                });
              }),
              _
            );
          }, [_]);
        return _.createElement(
          "div",
          {
            className: _().EventList,
          },
          _.createElement(_._, {
            type: "text",
            value: _,
            onChange: (_) => _(_.currentTarget.value.trim()),
            label: "Filter",
          }),
          _.createElement(
            "div",
            null,
            "Total Survey Responses: ",
            (_?.length || 0).toLocaleString(),
          ),
          _.createElement(
            "div",
            null,
            "Link to partner-facing survey: ",
            _.createElement(
              "a",
              {
                href: _,
              },
              _,
            ),
          ),
          _.filter(
            (_) => 0 == _.length || _.name.includes(_) || _._.includes(_),
          ).map((_) =>
            _.createElement(_, {
              key: _._,
              conf: _,
              nInterestCount: _.get(_._) ?? 0,
              rgSurveyInterest: _,
            }),
          ),
          _.createElement(_, {
            rgSurveyInterest: _,
          }),
        );
      }
      function _(_) {
        const {
          conf: _,
          nInterestCount: __webpack_require__,
          rgSurveyInterest: _,
        } = _;
        return _.createElement(
          _._,
          {
            title: `${_.name} in ${_.place} around ${_.time}: Interest: ${__webpack_require__.toLocaleString()}`,
            bStartMinimized: !0,
          },
          _.createElement(_, {
            conf: _,
            rgSurveyInterest: _,
          }),
        );
      }
      function _(_) {
        if ("number" == typeof _) return _;
        const _ = _.slice(-1).toUpperCase(),
          _ = parseFloat(_.slice(0, -1));
        switch (_) {
          case "K":
            return 1e3 * _;
          case "M":
            return 1e6 * _;
          case "B":
            return 1e9 * _;
          default:
            return parseFloat(_);
        }
      }
      function _(_) {
        const { conf: _, rgSurveyInterest: __webpack_require__ } = _,
          _ = (0, _.useMemo)(
            () =>
              __webpack_require__.filter((_) =>
                _.results?.attending?.includes(_._),
              ),
            [_, __webpack_require__],
          ),
          _ = (0, _._)(),
          { bComplete: _, nCount: _ } = (function (_) {
            const [_, __webpack_require__] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(0),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                (async () => {
                  let _ = 0;
                  for (const _ of _) {
                    const _ = _.results.partner_id;
                    new _._(_.steamid).GetAccountID(),
                      await Promise.all([
                        (0, _._)(_),
                        _.prefetchQuery({
                          queryKey: _(_),
                          queryFn: async () => _(_),
                        }),
                        (0, _._)(_, _),
                      ]),
                      ++_,
                      _(_);
                  }
                  __webpack_require__(!0);
                })();
              }, [_, _]),
              {
                bComplete: _,
                nCount: _,
              }
            );
          })(_);
        return _
          ? _?.length
            ? _ && 0 != _.length
              ? _.createElement(_, {
                  conf: _,
                  rgSurveyInterest: _,
                })
              : _.createElement("div", null, "No users with interest")
            : _.createElement(_._, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : _.createElement(_._, {
              position: "center",
              string: `Loading ${_} of ${_.length}`,
            });
      }
      function _(_) {
        const { conf: _, rgSurveyInterest: __webpack_require__ } = _,
          _ = (0, _._)();
        return _.createElement(
          "div",
          null,
          _.createElement(
            _._,
            {
              onClick: () => {
                const _ = [];
                _.push([
                  "AccountID",
                  "Partner ID",
                  "Valve Partner Contacts",
                  "Email Override",
                  "Account Name",
                  "Name",
                  "Have you met steam",
                  "Survey Time",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Best AppID Name",
                  "Long Term Sales Rank",
                ]),
                  __webpack_require__.forEach((_) => {
                    const _ = [],
                      _ = new _._(_.steamid);
                    __webpack_require__.push("" + _.GetAccountID());
                    const _ = (0, _._)(_.GetAccountID()),
                      _ = _.results.partner_id;
                    __webpack_require__.push("" + _);
                    const _ = (0, _._)(_).map(
                      (_) => (0, _._)(_, _)?.displayName || "" + _,
                    );
                    __webpack_require__.push(_.join("|"));
                    const _ = _.results.email_override || "";
                    __webpack_require__.push("" + _),
                      __webpack_require__.push(
                        _?.m_strPlayerName ? _.m_strPlayerName : "",
                      );
                    const _ = _(_.GetAccountID(), _);
                    if (
                      (__webpack_require__.push(_ ? _.realname : ""),
                      __webpack_require__.push(
                        _.results.have_you_met_steam ? "yes" : "no",
                      ),
                      _.results.submit_time)
                    ) {
                      const _ = _.results.submit_time,
                        _ = new Date(1e3 * _)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      __webpack_require__.push(_);
                    } else __webpack_require__.push("");
                    __webpack_require__.push("" + _.results.attending?.length),
                      __webpack_require__.push(_.results.country_code),
                      __webpack_require__.push(
                        _.results.preferred_language
                          ? (0, _._)(_.results.preferred_language)
                          : "",
                      );
                    const _ = (0, _._)(_);
                    __webpack_require__.push(_ ? _.name : "");
                    const _ = _(_, _);
                    _
                      ? (__webpack_require__.push("" + _(_.strGrossUSD)),
                        __webpack_require__.push("" + _.nBestAppID),
                        __webpack_require__.push(
                          _._.Get().GetApp(_.nBestAppID)?.GetName(),
                        ),
                        __webpack_require__.push(
                          "" + _.nBestAppLongTermSalesRank,
                        ))
                      : (__webpack_require__.push(""),
                        __webpack_require__.push(""),
                        __webpack_require__.push(""),
                        __webpack_require__.push("")),
                      _.push(_);
                  });
                const _ = _.name.replace(" ", "_") + "_conference_interest.csv";
                _._.WriteCSVToFile(_, _);
              },
            },
            "Export to CSV",
          ),
          _.createElement(
            "table",
            {
              className: "landingTable",
            },
            _.createElement(
              "thead",
              null,
              _.createElement(
                "tr",
                null,
                _.createElement("th", null, "Name and Email"),
                _.createElement("th", null, "Have you met steam?"),
                _.createElement("th", null, "Partner"),
                _.createElement("th", null, "Valve Contacts"),
                _.createElement("th", null, "Partner Revenue"),
                _.createElement("th", null, "Biggest Game"),
                _.createElement("th", null, "Long Term Sales Rank"),
                _.createElement("th", null, "Attending count?"),
                _.createElement("th", null, "Alt Language"),
                _.createElement("th", null, "Country"),
                _.createElement("th", null, "Submit Survey Time"),
              ),
            ),
            _.createElement(
              "tbody",
              null,
              __webpack_require__.map((_) =>
                _.createElement(_, {
                  key: _._ + "_" + _.steamid,
                  strsteamid: _.steamid,
                  partnerID: _.results.partner_id,
                  registration: _.results,
                }),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { partnerID: _, registration: __webpack_require__ } = _;
        return _.createElement(
          "tr",
          null,
          _.createElement(
            "td",
            null,
            _.createElement(_, {
              ..._,
            }),
          ),
          _.createElement(
            "td",
            null,
            __webpack_require__.have_you_met_steam ? "" : "NO",
          ),
          _.createElement(_, {
            nPartnerID: _,
          }),
          _.createElement("td", null, __webpack_require__.attending.length),
          _.createElement(
            "td",
            null,
            __webpack_require__.english_not_good &&
              __webpack_require__.preferred_language
              ? (0, _._)(__webpack_require__.preferred_language)
              : "",
          ),
          _.createElement("td", null, __webpack_require__.country_code),
          _.createElement(
            "td",
            null,
            (0, _._)(__webpack_require__.submit_time),
          ),
        );
      }
      function _(_) {
        const {
            strsteamid: _,
            partnerID: __webpack_require__,
            registration: _,
          } = _,
          _ = (0, _._)(_),
          _ = _(new _._(_).GetAccountID(), __webpack_require__),
          _ = _?.realname || _.data?.m_strPlayerName;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("span", null, _),
          _.createElement("br", null),
          _.createElement("span", null, _.email_override || _?.email),
        );
      }
      function _(_) {
        const { nPartnerID: _ } = _,
          [__webpack_require__] = (0, _._)(_),
          _ = (function (_) {
            const _ = (0, _._)({
              queryKey: _(_),
              queryFn: async () => _(_),
              enabled: Boolean(_),
            });
            return _.isLoading ? null : _.data;
          })(_),
          _ = (0, _._)(_),
          _ = (0, _._)();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "td",
            null,
            __webpack_require__ ? __webpack_require__?.name + ` (${_})` : _,
          ),
          _.createElement(
            "td",
            null,
            _?.map((_) => (0, _._)(_, _)?.displayName || "" + _).join(","),
          ),
          _.createElement("td", null, "$", _?.strGrossUSD),
          _.createElement(
            "td",
            null,
            _?.nBestAppID > 0
              ? _.createElement(_, {
                  appid: _?.nBestAppID,
                })
              : "N/A",
          ),
          _.createElement("td", null, _?.nBestAppLongTermSalesRank),
        );
      }
      const _ = {};
      function _(_) {
        const { appid: _ } = _,
          [__webpack_require__] = (0, _._)(_, _),
          _ = (0, _.useMemo)(
            () => ({
              _: _,
              type: "game",
            }),
            [_],
          );
        return _.createElement(
          _._,
          {
            item: _,
          },
          _.createElement("span", null, __webpack_require__?.GetName() || _),
        );
      }
      function _(_) {
        const { rgSurveyInterest: _ } = _,
          _ = (0, _._)(),
          _ =
            ((0, _._)(),
            (0, _.useMemo)(
              () =>
                _.filter((_) =>
                  Boolean(_.results?.suggestion?.trim().length > 0),
                ),
              [_],
            ));
        return _.createElement(
          _._,
          {
            title: `Alternative Suggestions (${_.length})`,
            bStartMinimized: !0,
          },
          _.createElement(
            _._,
            {
              onClick: () => {
                const _ = [];
                _.push([
                  "AccountID",
                  "Partner ID",
                  "Email Override",
                  "Account Name",
                  "name",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Long Term Sales Rank",
                  "Suggestion",
                ]),
                  _.forEach((_) => {
                    const _ = [],
                      _ = new _._(_.steamid);
                    _.push("" + _.GetAccountID());
                    const _ = (0, _._)(_.GetAccountID()),
                      _ = _.results.partner_id;
                    _.push("" + _);
                    const _ = _.results.email_override || "";
                    _.push("" + _),
                      _.push(_?.m_strPlayerName ? _.m_strPlayerName : "");
                    const _ = _(_.GetAccountID(), _);
                    _.push(_ ? _.realname : ""),
                      _.push("" + _.results.attending?.length),
                      _.push(_.results.country_code),
                      _.push(
                        _.results.preferred_language
                          ? (0, _._)(_.results.preferred_language)
                          : "",
                      );
                    const _ = (0, _._)(_);
                    _.push(_ ? _.name : "");
                    const _ = _(_, _);
                    _
                      ? (_.push("" + _(_.strGrossUSD)),
                        _.push("" + _.nBestAppID),
                        _.push("" + _.nBestAppLongTermSalesRank))
                      : (_.push(""), _.push(""), _.push("")),
                      _.push(_.results.suggestion),
                      _.push(_);
                  });
                _._.WriteCSVToFile(_, "suggestsion.csv");
              },
            },
            "Export to CSV (wait until the table populates fully)",
          ),
          _.createElement(
            "table",
            {
              className: "landingTable",
            },
            _.createElement(
              "thead",
              null,
              _.createElement(
                "tr",
                null,
                _.createElement("th", null, "Name and Email"),
                _.createElement("th", null, "Partner"),
                _.createElement("th", null, "Valve Contacts"),
                _.createElement("th", null, "Partner Revenue"),
                _.createElement("th", null, "Biggest Game"),
                _.createElement("th", null, "Long Term Sales Rank"),
                _.createElement("th", null, "Suggestions"),
              ),
            ),
            _.createElement(
              "tbody",
              null,
              _.map((_) =>
                _.createElement(_, {
                  key: "suggested" + _.steamid,
                  survey: _,
                }),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { survey: _ } = _;
        new _._(_.steamid);
        return _.createElement(
          "tr",
          null,
          _.createElement(
            "td",
            null,
            _.createElement(_, {
              strsteamid: _.steamid,
              partnerID: _.results.partner_id,
              registration: _.results,
            }),
          ),
          _.createElement(_, {
            nPartnerID: _.results.partner_id,
          }),
          _.createElement("td", null, _.results.suggestion.trim()),
        );
      }
      const _ = _.createContext({
        loadUserEmailAndLangs: async (_) =>
          await (function () {
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = `${_._.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    _ = {
                      sessionid: _._.SESSIONID,
                      strAccountIDs: _.join(","),
                    },
                    _ = await _().get(_, {
                      params: _,
                      withCredentials: !0,
                    });
                  if (!_ || 200 != _?.status || 1 != _?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, _._))(_).strErrorMsg}`;
                  const _ = new Map();
                  return (
                    _.data.users.forEach((_) => {
                      const _ = new _._(_.steamid);
                      _.set(_.GetAccountID(), _);
                    }),
                    _.map((_) => _.get(_) ?? null)
                  );
                },
                {
                  maxBatchSize: 100,
                },
              ));
            return _;
          })().load(_),
      });
      function _(_, _) {
        return {
          queryKey: ["UserEmailAndLangs", _],
          queryFn: () => _.loadUserEmailAndLangs(_),
          enabled: !!_,
        };
      }
      let _;
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (function (_) {
            const _ = (0, _._)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const _ = _._.Init(_._),
                  _ = new Date();
                __webpack_require__.setFullYear(
                  __webpack_require__.getFullYear() - 2,
                ),
                  _.Body().set_rt_oldest_date(0);
                const _ = await _._.GetSaleEventOrganizers(_, _);
                return _.BSuccess()
                  ? _.Body()
                      .info()
                      .map((_) => _.toObject())
                  : [];
              },
            });
            return _.isLoading ? null : _.data;
          })(_),
          _ = (0, _.useMemo)(() => {
            if (!_ || !_) return null;
            const _ = new Set(__webpack_require__.map((_) => _._));
            return _.filter((_) => !_.has(_.accountid)).sort(
              (_, _) => _.clan_event_gids?.length - _.clan_event_gids.length,
            );
          }, [_, _]);
        return _
          ? _.createElement(
              "div",
              null,
              _.createElement(
                _._,
                {
                  onClick: () => {
                    const _ = [];
                    _.push(["User Name", "account id", "Email", "Event Count"]),
                      _.forEach((_) => {
                        const _ = (0, _._)(_.accountid),
                          _ =
                            ((_ = _.accountid),
                            _._.getQueryData(["UserEmailAndLangs", _]));
                        var _;
                        _.push([
                          _?.m_strPlayerName || "",
                          "" + _.accountid,
                          _?.email_address || "",
                          _.clan_event_gids?.length.toLocaleString(),
                        ]);
                      });
                    _._.WriteCSVToFile(_, "sale_operators.csv");
                  },
                },
                "CSV Export",
                _.createElement(_._, {
                  tooltip: "Wait until the page finishes loading before export",
                }),
              ),
              _.createElement(
                "table",
                null,
                _.createElement(
                  "thead",
                  null,
                  _.createElement(
                    "tr",
                    null,
                    _.createElement("th", null, "User"),
                    _.createElement("th", null, "Email"),
                    _.createElement("th", null, "Events"),
                  ),
                ),
                _.createElement(
                  "tbody",
                  null,
                  _.map((_) =>
                    _.createElement(_, {
                      key: _.accountid,
                      organizer: _,
                    }),
                  ),
                ),
              ),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
              size: "medium",
            });
      }
      function _(_) {
        const { organizer: _ } = _,
          _ = (0, _.useMemo)(
            () => _._.InitFromAccountID(_.accountid).ConvertTo64BitString(),
            [_],
          ),
          _ = (0, _._)(_),
          _ = (function (_) {
            const _ = _.useContext(_);
            return (0, _._)(_(_, _));
          })(_.accountid),
          _ = _.data?.m_strPlayerName || "";
        return _.createElement(
          "tr",
          null,
          _.createElement("td", null, _, " (", _.accountid, ")"),
          _.createElement("td", null, _?.data?.email_address),
          _.createElement(
            "td",
            null,
            _.createElement(_, {
              name: _,
              rgClanEventGIDs: _.clan_event_gids,
            }),
          ),
        );
      }
      function _(_) {
        const { name: _, rgClanEventGIDs: __webpack_require__ } = _,
          [_, _, _] = (0, _._)();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _._,
            {
              onClick: _,
            },
            "See ",
            __webpack_require__.length.toLocaleString(),
            " Events",
          ),
          _.createElement(
            _._,
            {
              active: _,
            },
            _.createElement(
              _._,
              {
                bAlertDialog: !0,
                closeModal: _,
                strTitle: `${_}'s Events`,
              },
              __webpack_require__.map((_) =>
                _.createElement(_, {
                  gid: _,
                  key: _,
                }),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { gid: _ } = _,
          _ = (0, _._)(_);
        return _
          ? _.createElement(
              "a",
              {
                href: `${_._.COMMUNITY_BASE_URL}gid/${_.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${_}`,
                target: "_blank",
              },
              _.createElement(
                "div",
                null,
                __webpack_require__.GetNameWithFallback("chunkid"),
              ),
              _.createElement("img", {
                src: __webpack_require__.GetImageURL("capsule", 0),
              }),
            )
          : _.createElement("div", null, "Loading ", _);
      }
      function _(_) {
        const _ = (_) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${_.key}`),
          _ = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: _.createElement(_._, null, _.createElement(_, null)),
              onClick: _,
            },
            {
              name: "Event Management",
              key: "event",
              contents: _.createElement(_._, null, _.createElement(_, null)),
              onClick: _,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: _.createElement(_._, null, _.createElement(_, null)),
              onClick: _,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: _.createElement(_._, null, _.createElement(_, null)),
              onClick: _,
            },
          ];
        return _.createElement(
          "div",
          {
            className: _().AdminPageCtn,
          },
          _.createElement(
            "div",
            {
              className: _().PageTitle,
            },
            "Meet Steam Admin Dashboard ",
            (0, _._)("current_year", "application_config"),
          ),
          _.createElement("hr", null),
          _.createElement(_._, {
            tabs: _,
          }),
          _.createElement("div", {
            className: _().ClearThings,
          }),
          _.createElement("br", null),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const _ = (function () {
            const [_] = (0, _.useState)(() =>
              (0, _._)("registration_open", "application_config"),
            );
            return _;
          })(),
          _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("user_reg", "application_config") || {},
            );
            return _;
          })(),
          { data: _ } = (0, _._)(_._.accountid),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(() => JSON.parse(JSON.stringify(_)));
        return _
          ? !_ || _.m_bPlayerNamePending
            ? _.createElement(_._, {
                size: "medium",
                position: "center",
                string: (0, _._)("#Loading"),
              })
            : _.createElement(
                "div",
                {
                  className: (0, _._)(_().AdminPageCtn, _().Ctn),
                },
                _.createElement(
                  "div",
                  {
                    className: _().PageTitle,
                  },
                  (0, _._)("#MeetSteam_MainTitle"),
                ),
                _.createElement("hr", null),
                _.createElement(
                  "div",
                  {
                    className: _().ColumnCtn,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _().LeftCol,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().SectionCtn,
                      },
                      _.createElement(
                        "h1",
                        null,
                        " ",
                        (0, _._)(
                          "#MeetSteam_Intro",
                          _.m_strPlayerName,
                          _.createElement("br", null),
                        ),
                      ),
                      _.createElement(
                        "p",
                        {
                          className: _().IntroText,
                        },
                        (0, _._)("#MeetSteam_Desc1"),
                      ),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().SectionCtn,
                      },
                      _.createElement(_, {
                        oRegistration: _,
                        fnSetRegistration: _,
                      }),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().SectionCtn,
                      },
                      _.createElement(_, {
                        oRegistration: _,
                        fnSetRegistration: _,
                      }),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(_().SectionCtn, _().ActionBar),
                      },
                      _.createElement(
                        _._,
                        {
                          onClick: async () => {
                            _(!0), _(!1), _(!1);
                            const _ = `${_._.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              _ = new FormData();
                            _.append("sessionid", _._.SESSIONID),
                              _.append("registrationJson", JSON.stringify(_));
                            try {
                              const _ = await _().post(_, _, {
                                withCredentials: !0,
                              });
                              1 != _.data.success
                                ? (console.error(
                                    "MeetSteamLanding failed " + _.data.success,
                                  ),
                                  _(!0))
                                : _(!0);
                            } catch (_) {
                              console.error(
                                "MeetSteamLanding failed caught",
                                _,
                              );
                            }
                            _(!1);
                          },
                        },
                        (0, _._)("#Button_Submit"),
                      ),
                      _ &&
                        _.createElement(_._, {
                          size: "medium",
                          position: "center",
                          string: (0, _._)("#Saving"),
                        }),
                      _ &&
                        _.createElement("div", null, (0, _._)("#Button_Saved")),
                      _ &&
                        _.createElement(
                          "div",
                          {
                            className: _.ErrorStylesWithIcon,
                          },
                          (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : _.createElement(
              "div",
              {
                className: _().Ctn,
              },
              (0, _._)("#MeetSteam_closed"),
            );
      }
      function _(_) {
        const { oRegistration: _, fnSetRegistration: __webpack_require__ } = _,
          { rgEvents: _, rgOldEvents: _, selectConference: _ } = _();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("h1", null, (0, _._)("#MeetSteam_Events_Interest")),
          _.createElement(
            "p",
            null,
            (0, _._)(
              "#MeetSteam_Events_title",
              (0, _._)("meet_steam_year", "application_config") || "2025",
            ),
          ),
          _.createElement(
            "p",
            null,
            _.createElement(
              "span",
              {
                className: _().Indicator,
              },
              "*",
            ),
            " ",
            (0, _._)("#MeetSteam_Events_desc"),
          ),
          Boolean(_) &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement("hr", null),
              _.createElement("p", null, (0, _._)("#MeetSteam_ConferenceOrg")),
              _.createElement(_, {
                ..._,
                rgConference: [_],
              }),
              _.createElement("br", null),
              _.createElement("br", null),
              _.createElement("hr", null),
              _.createElement(
                "h2",
                null,
                (0, _._)("#MeetSteam_OtherConference"),
              ),
            ),
          _.createElement(_, {
            ..._,
            rgConference: _,
          }),
          _.createElement("br", null),
          _.createElement(_._, {
            type: "text",
            value: _.suggestion || "",
            onChange: (_) =>
              __webpack_require__({
                ..._,
                suggestion: _.currentTarget.value,
              }),
            label: (0, _._)("#MeetSteam_others"),
          }),
          Boolean(_?.length > 0) &&
            _.createElement(
              _._,
              {
                bStartMinimized: !0,
                title: (0, _._)("#MeetSteam_PastEvents", _.length),
              },
              _.createElement(_, {
                ..._,
                rgConference: _,
              }),
            ),
        );
      }
      function _(_) {
        const { rgConference: _ } = _;
        return _.createElement(
          "table",
          null,
          _.createElement(
            "thead",
            null,
            _.createElement(
              "tr",
              null,
              _.createElement("th", null),
              _.createElement("th", null),
              _.createElement("th", null),
              _.createElement("th", null),
            ),
          ),
          _.createElement(
            "tbody",
            null,
            _.map((_) =>
              _.createElement(
                "tr",
                {
                  key: _._,
                },
                _.createElement(
                  "td",
                  null,
                  _.attending
                    ? _.createElement(
                        "span",
                        {
                          className: _().Indicator,
                        },
                        "*",
                      )
                    : "",
                ),
                _.createElement(
                  "td",
                  null,
                  _.createElement("div", null, _.name),
                  _.createElement("div", null, _.place),
                ),
                _.createElement(
                  "td",
                  null,
                  _.createElement("div", null, _.time),
                ),
                _.createElement(
                  "td",
                  null,
                  _.createElement(_, {
                    ..._,
                    conf: _,
                  }),
                ),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const {
          oRegistration: _,
          fnSetRegistration: __webpack_require__,
          conf: _,
        } = _;
        return _.createElement(_._, {
          checked: _.attending?.includes(_._),
          onChange: (_) => {
            let _ = _.attending ? [..._.attending] : [];
            _ && !_.includes(_._)
              ? (_.push(_._),
                __webpack_require__({
                  ..._,
                  attending: _,
                }))
              : !_ &&
                _.includes(_._) &&
                (_.splice(_.indexOf(_._), 1),
                __webpack_require__({
                  ..._,
                  attending: _,
                }));
          },
          tooltip: (0, _._)("#MeetSteam_attend_ttip"),
        });
      }
      function _(_) {
        const { oRegistration: _, fnSetRegistration: __webpack_require__ } = _,
          _ = (0, _._)(_._.accountid),
          _ = (function (_) {
            const _ = (function () {
                const [_] = (0, _.useState)(
                  () =>
                    (0, _._)("partner_user_email", "application_config") || "",
                );
                return _;
              })(),
              _ = (function () {
                const [_] = (0, _.useState)(() =>
                  (0, _._)("primary_partner_id", "application_config"),
                );
                return _;
              })(),
              _ = _(_._.accountid, _ != _ ? _ : null);
            return _ == _ ? _ : _?.email;
          })(_?.partner_id),
          [_, _] = (0, _.useState)(() =>
            Boolean((_.email_override && _.email_override != _) || !_),
          ),
          [_, _, _] = (0, _._)(() => [
            !Boolean(_.have_you_met_steam),
            Boolean(_.english_not_good),
            _.preferred_language,
          ]);
        return _.data
          ? _.createElement(
              "div",
              null,
              _.createElement("h1", null, (0, _._)("#MeetSteam_You")),
              _.createElement("p", null, (0, _._)("#MeetSteam_You_Desc")),
              _.createElement(_, {
                nPartnerID: _.partner_id,
                label: (0, _._)("#MeetSteam_You_Company"),
                setPartnerID: (_) =>
                  __webpack_require__({
                    ..._,
                    partner_id: _,
                  }),
              }),
              _.createElement(
                "div",
                {
                  className: _().EmailInfoRow,
                },
                _.createElement(
                  "div",
                  {
                    className: _().EmailField,
                  },
                  _.createElement(_._, {
                    type: "string",
                    label: (0, _._)("#MeetSteam_You_Email"),
                    disabled: !_,
                    value: _.email_override || _ || "",
                    placeholder: (0, _._)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (_) =>
                      __webpack_require__({
                        ..._,
                        email_override: _.currentTarget.value,
                      }),
                  }),
                ),
                !_ &&
                  _.createElement(_._, {
                    checked: _,
                    onChange: _,
                    label: (0, _._)("#MeetSteam_You_Update"),
                    tooltip: (0, _._)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              _.createElement(_._, null, (0, _._)("#MeetSteam_NeverMet")),
              _.createElement(_._, {
                label: (0, _._)("#MeetSteam_NeverMetNo"),
                checked: _,
                onChange: (_) =>
                  __webpack_require__({
                    ..._,
                    have_you_met_steam: !_,
                  }),
              }),
              _.createElement(
                _._,
                null,
                (0, _._)("#MeetSteam_CapabableEnglish"),
              ),
              _.createElement(
                "div",
                {
                  className: _().RadioButtonCtn,
                },
                _.createElement(_._, {
                  className: _().RadioButtons,
                  checked: !_,
                  onChange: (_) =>
                    _ &&
                    __webpack_require__({
                      ..._,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, _._)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                _.createElement(_._, {
                  className: _().RadioButtons,
                  checked: _,
                  onChange: (_) =>
                    _ &&
                    __webpack_require__({
                      ..._,
                      english_not_good: !0,
                      preferred_language: (0, _._)(_._.LANGUAGE),
                    }),
                  label: (0, _._)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              _ &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement("br", null),
                  _.createElement(
                    _._,
                    null,
                    (0, _._)("#MeetSteam_LanguagePref"),
                  ),
                  _.createElement(_._, {
                    selectedLang: _,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, _._)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (_) =>
                      __webpack_require__({
                        ..._,
                        preferred_language: _,
                      }),
                  }),
                ),
            )
          : _.createElement(_._, {
              size: "medium",
              position: "center",
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const {
            nPartnerID: _,
            setPartnerID: __webpack_require__,
            label: _,
          } = _,
          _ = (0, _._)(_._.accountid);
        if (!_)
          return _.createElement(_._, {
            size: "small",
            position: "center",
            string: (0, _._)("#Loading"),
          });
        if (1 == _.length) return null;
        const _ = [];
        return (
          _.forEach((_) =>
            _.push({
              label: _?.partner_name,
              data: _.partnerid,
            }),
          ),
          _.createElement(_._, {
            layout: "inline",
            label: _,
            rgOptions: _,
            selectedOption: _,
            onChange: (_) => {
              __webpack_require__(_.data);
            },
          })
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { data: _ } = (0, _._)(_._.accountid),
          _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("survey_event_name", "application_config") || "",
            );
            return _;
          })(),
          _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("survey_data", "application_config") || "",
            );
            return _;
          })(),
          [_, _] = (0, _.useState)(() => _ || ""),
          { surveyGID: _ } = (0, _._)(),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1);
        return !_ || _.m_bPlayerNamePending
          ? _.createElement(_._, {
              size: "medium",
              position: "center",
              string: (0, _._)("#Loading"),
            })
          : _.createElement(
              "div",
              {
                className: (0, _._)(_().AdminPageCtn, _().Ctn),
              },
              _.createElement(
                "div",
                {
                  className: _().PageTitle,
                },
                (0, _._)("#MeetSteam_PostSurvey_Title", _),
              ),
              _.createElement("hr", null),
              _.createElement(
                "div",
                {
                  className: _().ColumnCtn,
                },
                _.createElement(
                  "div",
                  {
                    className: _().LeftCol,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _().SectionCtn,
                    },
                    _.createElement(
                      "div",
                      null,
                      (0, _._)("#MeetSteam_PostSurvey_Question"),
                    ),
                    _.createElement("textarea", {
                      rows: 10,
                      onChange: (_) => _(_.currentTarget.value),
                      value: _,
                      autoFocus: !0,
                    }),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_().SectionCtn, _().ActionBar),
                    },
                    _.createElement(
                      _._,
                      {
                        onClick: async () => {
                          _(!0), _(!1), _(!1);
                          const _ = `${_._.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${_}`,
                            _ = new FormData();
                          _.append("gid", _),
                            _.append("sessionid", _._.SESSIONID);
                          let _ = {
                            gid: _,
                            simple_response: _,
                            submit_time: Math.floor(new Date().getTime() / 1e3),
                          };
                          _.append("surveyjson", JSON.stringify(_));
                          try {
                            const _ = await _().post(_, _, {
                              withCredentials: !0,
                            });
                            1 != _.data.success
                              ? (console.error(
                                  "MeetSteamLanding failed " + _.data.success,
                                ),
                                _(!0))
                              : _(!0);
                          } catch (_) {
                            console.error("MeetSteamLanding failed caught", _);
                          }
                          _(!1);
                        },
                      },
                      (0, _._)("#Button_Submit"),
                    ),
                    _ &&
                      _.createElement(_._, {
                        size: "medium",
                        position: "center",
                        string: (0, _._)("#Saving"),
                      }),
                    _ &&
                      _.createElement("div", null, (0, _._)("#Button_Saved")),
                    _ &&
                      _.createElement(
                        "div",
                        {
                          className: _.ErrorStylesWithIcon,
                        },
                        (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("event_gids", "application_config") || [],
            );
            return _;
          })(),
          _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("survey_results", "application_config") || [],
            );
            return _;
          })(),
          _ = (function () {
            const _ = (function () {
              const [_] = (0, _.useState)(() => {
                const _ = new Map(),
                  _ =
                    (0, _._)("registration_by_gid", "application_config") || {};
                for (const _ in _) {
                  const _ = _[_];
                  _.set(_, _);
                }
                return _;
              });
              return _;
            })();
            return (0, _.useMemo)(() => {
              const _ = new Map();
              return (
                _.forEach((_, _) => {
                  _.forEach((_) => {
                    const _ = new _._(_.steamid);
                    _.has(_.GetAccountID()) || _.set(_.GetAccountID(), []),
                      (_.gidEvent = _),
                      _.get(_.GetAccountID()).push(_);
                  });
                }),
                _
              );
            }, [_]);
          })(),
          { surveyGID: _ } = (0, _._)(),
          { bIsLoading: _, events: _ } = (0, _._)(_),
          [_, _] = (0, _.useMemo)(
            () => [
              __webpack_require__
                .map((_) => {
                  const _ = new _._(_.steamid);
                  if (_.has(_.GetAccountID())) {
                    const _ = _.get(_.GetAccountID());
                    return JSON.parse(_[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              __webpack_require__.map((_) => new _._(_.steamid).GetAccountID()),
            ],
            [_, _],
          ),
          _ = (0, _._)(_),
          _ = (0, _._)(_);
        return !_ && _ && _
          ? _.createElement(_, {
              rgSurveyResults: _,
              mapAccountsToReg: _,
              meetSteamEvents: _,
            })
          : _.createElement(_._, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const _ = (0, _._)();
      function _(_) {
        const {
            rgSurveyResults: _,
            mapAccountsToReg: __webpack_require__,
            meetSteamEvents: _,
          } = _,
          _ = (0, _.useMemo)(() => {
            if (!_) return null;
            const _ = new Map();
            _.forEach((_) => _.set(_.GID, _));
            const _ = [];
            return (
              _.forEach((_) => {
                const _ = JSON.parse(_.jsondata),
                  _ = new _._(_.steamid);
                let _ = {
                  feedback: _.simple_response,
                  accountid: _.GetAccountID(),
                };
                if (__webpack_require__.has(_.GetAccountID())) {
                  const _ = __webpack_require__.get(_.GetAccountID()),
                    _ = JSON.parse(_[0].jsondata);
                  (_.partner_id = _.partner_id),
                    (_.email = _.email_override),
                    (_.name = _.name),
                    (_.registrations = "");
                  const _ = (0, _._)(_.partner_id);
                  _ && (_.partner_name = _.name),
                    _.forEach((_) => {
                      const _ = _.get(_.gidEvent);
                      if (_) {
                        const _ = _.jsondata.meet_steam_groups.find(
                          (_) => _.group_id === _.group_id,
                        ).localized_session_title[0];
                        _.registrations.length > 0 && (_.registrations += "|"),
                          (_.registrations += _);
                      }
                    });
                } else {
                  const _ = (0, _._)(_.GetAccountID());
                  _ && (_.name = _.persona_name);
                }
                _.push(_);
              }),
              _
            );
          }, [__webpack_require__, _, _]),
          _ = (0, _.useMemo)(
            () => [
              _.accessor("name", {
                header: "Name",
                size: 150,
              }),
              _.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: _._,
              }),
              _.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: _,
              }),
              _.accessor("accountid", {
                header: "Account ID",
                size: 150,
              }),
              _.accessor("email", {
                header: "Email",
                size: 150,
              }),
              _.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return _
          ? _.createElement(
              _._,
              null,
              _.createElement(
                "div",
                {
                  className: _().AdminPageCtn,
                },
                _.createElement(
                  "div",
                  {
                    className: _().PageTitle,
                  },
                  "Survey Results",
                ),
                _.createElement("hr", null),
                _.createElement(
                  _._,
                  {
                    _: "download-csv",
                    onClick: () =>
                      (0, _._)(
                        "meetsteam_survey_results.csv",
                        _,
                        _.map((_) => ({
                          accessorKey: _.accessorKey,
                          header:
                            "string" == typeof _.header
                              ? _.header
                              : (_.accessorKey ?? ""),
                        })),
                      ),
                    style: {
                      width: "120px",
                    },
                  },
                  "Download CSV",
                ),
                _.createElement("br", null),
                _.createElement(_._, {
                  columns: _,
                  data: _,
                  getRowKey: (_) => _,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: _.length,
                }),
              ),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const _ = _.getValue();
        return _?.length > 0
          ? _.createElement(_._, {
              text: _.getValue(),
              regExp: /\|/,
            })
          : "";
      }
      const _ = {
        YearlySurvery: (_ = ":year") => `/${_}`,
        PostEventSurvey: (_ = ":surveyGID") => `/survey/${_}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (_ = ":surveyGID") => `/surveyresults/${_}`,
      };
      function _(_) {
        return (
          (0, _.useEffect)(() => {
            _._.Init();
          }, []),
          _.createElement(
            _._,
            null,
            _.createElement(
              _._,
              {
                basename: (0, _._)() + "meetsteam/",
              },
              _.createElement(
                _._,
                null,
                _.createElement(_._, {
                  exact: !0,
                  path: _._.DiagData(),
                  render: (_) =>
                    _.createElement(_._, {
                      ..._,
                      strConfigID: "application_config",
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _.AdminDashboard(),
                  component: _,
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _.YearlySurvery(":year(\\d+)"),
                  component: _,
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _.PostEventSurvey(":surveyGID(\\d+)"),
                  component: _,
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _.PostEventSurveyResults(":surveyGID(\\d+)"),
                  component: _,
                }),
                _.createElement(_._, {
                  component: _._,
                }),
              ),
            ),
          )
        );
      }
    },
  },
]);

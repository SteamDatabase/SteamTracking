(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1985],
  {
    chunkid: (module) => {
      module.exports = {
        Container: "_2vGr9KsApU0s59_ZsZVxXY",
        SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
        ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
        ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
      };
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        const _ = _.createRef(),
          [__webpack_require__, _] = _.useState(""),
          _ = _.createRef();
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(_().FlexRowContainer, _().linkField),
              onClick: (_) => {
                _.current &&
                  _.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(_.current.value)
                    .then((_) => {
                      _((0, _._)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((_) => {
                      _(
                        (0, _._)("#EventDisplay_Share_FailedToCopyToClipboard"),
                      ),
                        console.error("Failed to copy link to clipboard:", _);
                    });
              },
            },
            _.createElement(
              "span",
              {
                className: _().LinkInputLabel,
              },
              (0, _._)(
                _.labelOverride ? _.labelOverride : "#EventDisplay_Share_Link",
              ),
            ),
            _.createElement("textarea", {
              className: _().LinkInput,
              ref: _,
              value: _.eventLink,
              readOnly: !0,
            }),
            document.queryCommandSupported("copy") &&
              _.createElement(
                "div",
                {
                  className: (0, _._)(_().Button, _().Icon, _().LinkButton),
                  title: (0, _._)("#ToolTip_CopyLinkToClipboard"),
                },
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#ToolTip_CopyLinkToClipboard"),
                  },
                  _.createElement("img", {
                    className: _().ClipboardIcon,
                    src: _._,
                  }),
                ),
              ),
          ),
          _.createElement(
            "div",
            {
              ref: _,
              className: _().ClipboardText,
            },
            __webpack_require__,
          ),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
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
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const { appid: _, eventLink: __webpack_require__ } = _,
          _ = _.useRef(null),
          { data: _ } = (0, _._)(_._.steamid),
          [_, _] = _.useState(""),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(""),
          [_, _] = _.useState(!1);
        _.useEffect(
          () => () =>
            _.current &&
            _.current("ShareEventOnFriendsActivityFeed: unmounting"),
          [],
        );
        const _ = _ ? _.avatar_url : null,
          _ = _._.InitFromAccountID(_._.accountid),
          _ = async () => {
            var _, _;
            _.current &&
              _.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const _ = _().CancelToken.source();
            (_.current = _.cancel), _(!0);
            let _ = _;
            0 != _.trim().length && (_ += "\n\n"), (_ += __webpack_require__);
            const _ =
              _._.COMMUNITY_BASE_URL +
              "profiles/" +
              _.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (_._.IN_STEAMUI) {
                let _ = _._.Init(_._);
                _.Body().set_appid(_), _.Body().set_status_text(_);
                let _ = await _._.PostStatusToFriends(
                  _._.CMInterface.GetServiceTransport(),
                  _,
                );
                if (1 != __webpack_require__.GetEResult()) {
                  const _ =
                    (0, _._)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    __webpack_require__.GetEResult();
                  return (
                    console.error(_, !_.token.reason),
                    void (_.token.reason || _(_))
                  );
                }
              } else {
                const _ = new FormData();
                __webpack_require__.append("appid", "" + _),
                  __webpack_require__.append("status_text", _),
                  __webpack_require__.append("sessionid", _._.SESSIONID);
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                });
                if (
                  200 != _.status ||
                  1 !=
                    (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                      ? void 0
                      : _.success)
                ) {
                  const _ =
                    (0, _._)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    (null === (_ = null == _ ? void 0 : _.data) || void 0 === _
                      ? void 0
                      : _.message);
                  return console.error(_), void (_.token.reason || _(_));
                }
              }
              _.token.reason ||
                (_(!0), _((0, _._)("#EventDisplay_Share_Success")));
            } catch (_) {
              const _ = (0, _._)(_),
                _ =
                  (0, _._)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  _.strErrorMsg;
              _.token.reason || _(_), console.error(_);
            }
          };
        return _
          ? _.createElement(
              _._,
              {
                strDescription: "",
                strTitle: (0, _._)("#Button_Share"),
                onCancel: _.closeModal,
                onOK: _.closeModal,
                bAlertDialog: !0,
              },
              _.createElement(
                "div",
                {
                  className: _().FlexColumnContainer,
                },
                _.createElement(
                  "div",
                  null,
                  (0, _._)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _().Container,
                  },
                  0 == (null == _ ? void 0 : _.length)
                    ? _.createElement(_._, {
                        position: "center",
                      })
                    : _.createElement("div", null, _),
                  Boolean(_) &&
                    _.createElement(
                      "a",
                      {
                        href:
                          _._.COMMUNITY_BASE_URL +
                          "profiles/" +
                          _.ConvertTo64BitString() +
                          "/home",
                        target: _._.IN_CLIENT ? void 0 : "_blank",
                      },
                      (0, _._)("#EventDisplay_Share_OpenActivityFeed"),
                    ),
                ),
              ),
            )
          : _.createElement(
              _._,
              {
                strDescription: "",
                strTitle: (0, _._)("#Button_Share"),
                onCancel: _.closeModal,
                onOK: _,
                strOKButtonText: (0, _._)("#Button_Post"),
              },
              _.createElement(
                "div",
                {
                  className: _().FlexColumnContainer,
                },
                _.createElement(
                  "div",
                  null,
                  (0, _._)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(_().Container, _().FlexColumnContainer),
                  },
                  _.createElement(
                    "div",
                    null,
                    _.createElement("img", {
                      className: _().SmallAvatar,
                      src: _,
                      "data-miniprofile": "s" + _._.steamid,
                    }),
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(_().FlexColumnContainer),
                      },
                      _.createElement(_._, {
                        strPlaceholder: (0, _._)(
                          "#EventDisplay_Share_OnMyStatus_Placeholder",
                        ),
                        fnGetCurText: () => _,
                        fnOnTextChange: (_) => _(_.currentTarget.value),
                        fnSetText: _,
                        emoticonStore: _.emoticonStore,
                        bSupportHTMLImport: !1,
                        showFormatHelp: "UserStatusPublished",
                        limitBBCode: _._,
                        classNameForTextArea: _().ShareDescription,
                        bEmbeddedInDialog: !0,
                      }),
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _().ShareLink,
                    },
                    _.createElement(_._, {
                      text: __webpack_require__,
                      event: null,
                      partnerEventStore: _.partnerEventStore,
                    }),
                  ),
                ),
              ),
            );
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShareOnSteamDialog: !1,
              bRequireLoginToShare: !1,
            });
        }
        ShareOnSteamActivityFeed() {
          _._.logged_in
            ? this.setState({
                bShareOnSteamDialog: !0,
              })
            : _._.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({
                  bRequireLoginToShare: !0,
                });
        }
        render() {
          const {
            eventLink: _,
            sharePageUrls: _,
            appid: __webpack_require__,
            closeModal: _,
            emoticonStore: _,
            partnerEventStore: _,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? _.createElement(_._, {
                strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, _._)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, _._)(),
              })
            : this.state.bShareOnSteamDialog
              ? _.createElement(_, {
                  eventLink: _,
                  appid: __webpack_require__,
                  emoticonStore: _,
                  partnerEventStore: _,
                  closeModal: _,
                })
              : _.createElement(
                  _._,
                  {
                    strDescription: "",
                    strTitle: (0, _._)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                  },
                  _.createElement(_, {
                    eventLink: _,
                    sharePageUrls: _,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                );
        }
      }
      (0, _._)([_._], _.prototype, "ShareOnSteamActivityFeed", null);
      const _ = (_) => {
        const {
            eventLink: _,
            sharePageUrls: __webpack_require__,
            fnShareOnSteamActivityFeed: _,
          } = _,
          _ = (0, _._)(),
          [_, _] = (0, _.useState)((0, _._)(_._.LANGUAGE)),
          _ = (0, _.useMemo)(() => {
            const _ = new URL(_);
            return _.searchParams.set("l", (0, _._)(_)), _.href;
          }, [_, _]);
        return _.createElement(
          "div",
          {
            className: (0, _._)(
              _().FlexColumnContainer,
              _().share_controls_ctn,
            ),
          },
          !_ &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: _().ShareLanguagePicker,
                },
                _.createElement(
                  _._,
                  {
                    className: _().LanguageLabel,
                  },
                  (0, _._)("#EventDisplay_Share_LanguageLabel"),
                ),
                _.createElement(
                  "div",
                  null,
                  _.createElement(_._, {
                    selectedLang: _,
                    fnOnLanguageChanged: _,
                  }),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().FlexRowContainer,
                    _().ShareButtonContainer,
                  ),
                  style: {
                    flexWrap: "wrap",
                  },
                },
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#EventDisplay_Share_OnSteam"),
                  },
                  _.createElement(
                    "div",
                    {
                      onClick: _,
                      className: (0, _._)(
                        _().Button,
                        _().ShareBtn,
                        _().ShareSteamBtn,
                      ),
                    },
                    _.createElement("img", {
                      className: _().SteamIcon,
                      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                    }),
                    _.createElement(
                      "span",
                      {
                        style: {
                          whiteSpace: "nowrap",
                        },
                      },
                      (0, _._)("#EventDisplay_Share_OnMyStatus"),
                    ),
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#EventDisplay_Share_OnFaceBook"),
                  },
                  _.createElement(
                    _._,
                    {
                      href: __webpack_require__.strFacebookUrl,
                      className: _().ShareBtn,
                    },
                    _.createElement("img", {
                      className: (0, _._)(_().Button),
                      src: _._,
                    }),
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#EventDisplay_Share_OnTwitter"),
                  },
                  _.createElement(
                    _._,
                    {
                      href: __webpack_require__.strTwitterUrl,
                      className: _().ShareBtn,
                    },
                    _.createElement("img", {
                      className: (0, _._)(_().Button),
                      src: _._,
                    }),
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#EventDisplay_Share_OnReddit"),
                  },
                  _.createElement(
                    _._,
                    {
                      href: __webpack_require__.strRedditUrl,
                      className: _().ShareBtn,
                    },
                    _.createElement("img", {
                      className: (0, _._)(_().Button),
                      src: _._,
                    }),
                  ),
                ),
              ),
              _.createElement("div", {
                className: _().Divider,
              }),
            ),
          _.createElement(_._, {
            eventLink: _,
          }),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        __webpack_require__._ +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);

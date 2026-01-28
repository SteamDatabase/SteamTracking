(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [721],
  {
    chunkid: (module) => {
      module.exports = {
        MoreDots: "_2YpW8SafRsHDfQIUT2DzUP",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO",
      };
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
      const _ = new _._("price-grid-cell-popout-elements");
      function _(_) {
        let { hoverKey: _, className: __webpack_require__, renderHover: _ } = _,
          _ = (0, _._)(_().MoreDots, __webpack_require__),
          _ = _.useRef(void 0),
          _ = _.useCallback(() => {
            _.HideElement(_.current.ownerDocument, _);
          }, [_]);
        return _.createElement(
          "div",
          {
            ref: _,
            tabIndex: -1,
            className: _,
            onFocus: (_) => {
              _.target.focus();
              let _ = _.createElement(
                _._,
                {
                  target: _.current,
                  direction: "top",
                  bEnablePointerEvents: !0,
                  nBodyDistance: 0,
                  onClick: _,
                },
                _(),
              );
              _.ShowElement(_.current.ownerDocument, _, _);
            },
            onBlur: () => {
              _.HideElement(_.current.ownerDocument, _, 100);
            },
          },
          _.createElement(_.faJ, null),
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = {
          [_._.k_ECurrencyCodeInvalid]: {},
          [_._.k_ECurrencyCodeUSD]: {
            strSymbol: "$",
          },
          [_._.k_ECurrencyCodeGBP]: {
            strSymbol: "£",
          },
          [_._.k_ECurrencyCodeEUR]: {
            strSymbol: "€",
          },
          [_._.k_ECurrencyCodeCHF]: {
            strSymbol: "CHF",
          },
          [_._.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [_._.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeMYR]: {
            strSymbol: "RM",
          },
          [_._.k_ECurrencyCodePHP]: {
            strSymbol: "P",
          },
          [_._.k_ECurrencyCodeSGD]: {
            strSymbol: "S$",
          },
          [_._.k_ECurrencyCodeTHB]: {
            strSymbol: "฿",
          },
          [_._.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeMXN]: {
            strSymbol: "Mex$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCAD]: {
            strSymbol: "CDN$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeAUD]: {
            strSymbol: "A$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeNZD]: {
            strSymbol: "NZ$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCNY]: {
            strSymbol: "¥",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [_._.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodePEN]: {
            strSymbol: "S/.",
          },
          [_._.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeHKD]: {
            strSymbol: "HK$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [_._.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeILS]: {
            strSymbol: "₪",
          },
          [_._.k_ECurrencyCodeBYN]: {
            strSymbol: "Br",
          },
          [_._.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeMax]: {},
        },
        _ = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: _._.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function _(_, _) {
        const _ = (function (_) {
            return {
              ..._,
              ..._[_],
              eCurrency: _,
            };
          })(_),
          {
            strSymbol: _,
            bSuffixSymbol: _,
            bSpaceForSymbol: _,
            bWholeUnitsOnly: _,
            strDecimalSymbol: _,
            strThousandsSeparator: _,
          } = _,
          _ = _ < 0,
          _ = _ && _ % 100 == 0;
        _ && (_ = -_);
        const _ = [];
        for (let _ = 0; _ < 2; _++)
          _ || _.push(_ % 10), (_ = Math.floor(_ / 10));
        !_ && _ && _.push(_);
        let _ = 0;
        do {
          _++ % 3 == 0 && _ > 2 && _ && _.push(_),
            _.push(_ % 10),
            (_ = Math.floor(_ / 10));
        } while (_ > 0);
        const _ = _.reverse().join(""),
          _ = _ ? " " : "",
          _ = _ ? "-" : "";
        return _ ? `${_}${_}${_}${_}` : `${_}${_}${_}${_}`;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            direction: _,
            ignoreHorizontal: __webpack_require__,
            ignoreVertical: _,
            dismissOnClick: _,
            interactionMode: _ = 0,
          } = _,
          _ = (0, _.useRef)(null),
          _ = (0, _.useRef)(!1),
          _ = (0, _.useRef)(!1),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useMemo)(
            () =>
              (function (_) {
                const [_, __webpack_require__] = (0, _._)(_, "-");
                return "left" === _ || "right" === _
                  ? [void 0, _]
                  : [_, __webpack_require__];
              })(_),
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            if (!_.current || !_.current) return;
            const _ = _.current.getBoundingClientRect();
            let _ = _;
            const _ = _.current.matches(":dir(rtl)");
            _ && ("left" === _ ? (_ = "right") : "right" === _ && (_ = "left")),
              _.current.style.setProperty("--parentWidth", `${_.width}px`),
              _.current.style.setProperty("--parentHeight", `${_.height}px`),
              __webpack_require__ ||
                ("left" === _
                  ? _
                    ? ((_.current.style.left = "unset"),
                      (_.current.style.right =
                        document.documentElement.clientWidth - _.right + "px"))
                    : ((_.current.style.left = "unset"),
                      (_.current.style.right =
                        document.documentElement.clientWidth - _.left + "px"))
                  : "right" === _
                    ? _
                      ? ((_.current.style.left = `${_.left}px`),
                        (_.current.style.right = "unset"))
                      : ((_.current.style.left = `${_.right}px`),
                        (_.current.style.right = "unset"))
                    : void 0 === _ &&
                      (_
                        ? ((_.current.style.left = "unset"),
                          (_.current.style.right =
                            document.documentElement.clientWidth -
                            _.right +
                            "px"))
                        : ((_.current.style.left = `${_.left}px`),
                          (_.current.style.right = "unset")))),
              _ ||
                ("down" === _
                  ? ((_.current.style.top = `${_.bottom}px`),
                    (_.current.style.bottom = "unset"),
                    _.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - _.bottom + "px",
                    ))
                  : "up" === _
                    ? ((_.current.style.top = "unset"),
                      (_.current.style.bottom =
                        document.documentElement.clientHeight - _.top + "px"),
                      _.current.style.setProperty(
                        "--availableHeight",
                        `${_.top}px`,
                      ))
                    : void 0 === _ &&
                      ((_.current.style.top = `${_.top}px`),
                      (_.current.style.bottom = "unset"),
                      _.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - _.top + "px",
                      )));
          }, [_, __webpack_require__, _, _]),
          _ = (0, _.useMemo)(() => {
            if (_.current) return (0, _._)(_.current);
          }, [_.current]);
        (0, _.useEffect)(
          () =>
            _
              ? (_.current?.showPopover(),
                _?.addEventListener("scroll", _),
                () => _?.removeEventListener("scroll", _))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  _.current?.hidePopover(),
                () => {}),
          [_, _, _],
        );
        const _ = (0, _.useCallback)(() => {
            _(), _(!0), (_.current = !0);
          }, [_]),
          _ = (0, _.useCallback)(() => {
            (_.current = !1), _.current || _(!1);
          }, []),
          _ = (0, _.useCallback)(() => {
            (_.current = !0), _(!0);
          }, []),
          _ = (0, _.useCallback)(() => {
            (_.current = !1), _.current || _(!1);
          }, []),
          _ = (0, _.useCallback)(() => {
            _(), _();
          }, [_, _]),
          _ = (0, _.useCallback)(
            (_) => {
              "Enter" === _.key && (_.preventDefault(), _ ? _() : _());
            },
            [_, _, _],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _.currentTarget.contains(_.relatedTarget) ||
                _.current?.contains(_.relatedTarget) ||
                _();
            },
            [_],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              const _ =
                  _.relatedTarget && !_.currentTarget.contains(_.relatedTarget),
                _ = !_.relatedTarget && !_.current;
              (_ || _) && (_(), _(!1));
            },
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            _ && _ ? _() : _();
          }, [_, _, _, _]),
          _ = (0, _.useCallback)(
            (_) => {
              "Enter" === _.key && _ && _ ? _() : _(),
                "Escape" === _.key && _ && (_(), _.stopPropagation());
            },
            [_, _, _, _],
          ),
          _ = 0 === _;
        let _;
        _ && !_
          ? (_ = (_) => {
              _.preventDefault(), _();
            })
          : _ || (_ = _ ? _ : _);
        const _ = {
            "aria-expanded": _,
            role: "button",
            onMouseEnter: _ ? _ : void 0,
            onMouseLeave: _ ? _ : void 0,
            onClick: _,
            ref: _,
            onKeyDown: _,
            onBlur: _,
          },
          _ = {
            popover: "manual",
            ref: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            onClick: _,
            onKeyDown: _,
            className: _.PopoverMenu,
          };
        return {
          isShowingMenu: _,
          triggerProps: _,
          menuProps: _,
          closeMenu: _,
        };
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (
            await __webpack_require__
              ._("chunkid")
              .then(__webpack_require__.bind(__webpack_require__, "chunkid"))
          ).apply();
        }
      })();
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (_) => {
          _?.(_), _?.(_);
        };
      }
      function _(_) {
        const {
            direction: _,
            interactionMode: __webpack_require__ = 0,
            ignoreHorizontal: _,
            ignoreVertical: _,
            dismissOnClick: _,
            menuTarget: _,
            className: _,
            children: _,
            renderWhenClosed: _ = !0,
            ..._
          } = _,
          {
            isShowingMenu: _,
            triggerProps: _,
            menuProps: _,
            closeMenu: _,
          } = _(_),
          _ = _.useRef(null),
          _ = _.useRef(null);
        return (
          _.useEffect(() => {
            _
              ? _.current?.TakeFocus()
              : _.current?.BFocusWithin() && _.current?.TakeFocus();
          }, [_]),
          _.createElement(
            _.Fragment,
            null,
            _.cloneElement(_, {
              ..._,
              onMouseEnter: _(_.props.onMouseEnter, _.onMouseEnter),
              onMouseLeave: _(_.props.onMouseLeave, _.onMouseLeave),
              navRef: _,
            }),
            _.createElement(
              _._,
              {
                ..._,
                ..._,
                className: _()(_.className, _),
                navRef: _,
                onCancel: _,
                onFocusWithin: (_) => !_ && _(),
                childFocusDisabled: !_,
              },
              _.createElement(_._, null, (_ || _) && _),
            ),
          )
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = {};
      (_.arabic = () =>
        __webpack_require__
          ._("chunkid")
          .then(__webpack_require__._.bind(__webpack_require__, 88650, 19))),
        (_.brazilian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 25980, 19))),
        (_.bulgarian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 78539, 19))),
        (_.czech = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 75369, 19))),
        (_.danish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 76235, 19))),
        (_.dutch = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 7956, 19))),
        (_.english = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 92962, 19))),
        (_.finnish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 88777, 19))),
        (_.french = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 37970, 19))),
        (_.german = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 63612, 19))),
        (_.greek = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 48846, 19))),
        (_.hungarian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 19812, 19))),
        (_.indonesian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 42334, 19))),
        (_.italian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 50874, 19))),
        (_.japanese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 30853, 19))),
        (_.koreana = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 6309, 19))),
        (_.latam = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 61805, 19))),
        (_.norwegian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 27406, 19))),
        (_.polish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 91259, 19))),
        (_.portuguese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 66551, 19))),
        (_.romanian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 1317, 19))),
        (_.russian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 23471, 19))),
        (_.schinese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 67350, 19))),
        (_.spanish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 91594, 19))),
        (_.swedish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 47491, 19))),
        (_.tchinese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 75965, 19))),
        (_.thai = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 2912, 19))),
        (_.turkish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 4546, 19))),
        (_.ukrainian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 73444, 19))),
        (_.vietnamese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 72469, 19)));
      const _ = (0, _._)(async function (_) {
        if (_[_]) return _[_]();
      });
      function _(_) {
        const _ = _.createElement(
          "button",
          {
            className: _().PriceGuidelinesPicker,
          },
          _.createElement(_.GB9, null),
        );
        return _.createElement(
          _,
          {
            menuTarget: _,
            direction: "down",
            interactionMode: 1,
            dismissOnClick: !0,
          },
          _.createElement(_, {
            ..._,
          }),
        );
      }
      function _(_) {
        const {
            fnGetUSDPriceInCents: _,
            fnOnUpdate: __webpack_require__,
            strDescription: _,
          } = _,
          _ = (0, _._)(),
          _ = _();
        if (!_) return null;
        const _ = _.GetUSDPricePointsInCents();
        return _.createElement(
          "div",
          {
            className: _().GuidelinesPanel,
          },
          _.createElement(
            "div",
            {
              className: _().GuidelinesDescription,
            },
            _ || _.Localize("#PricingGuideline_Default"),
          ),
          _.createElement(
            "div",
            {
              className: _().GuidelinesGrid,
            },
            _.map((_) =>
              _.createElement(
                "button",
                {
                  key: _,
                  onClick: () => __webpack_require__(_),
                  className: (0, _._)(
                    _().GridElement,
                    _ == _ && _().CurrentPrice,
                  ),
                },
                _(_, _._.k_ECurrencyCodeUSD),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { cell: _, row: __webpack_require__ } = _,
          _ = __webpack_require__.original.packageID,
          _ = _.getValue(),
          {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            fnSetPrice: _,
          } = (0, _._)(_, _),
          [_, _, _] = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = _.useRef(void 0),
          _ = _ + _,
          { strClassName: _ } = _(_, _),
          _ = "USD" == _,
          _ = _ ?? _,
          _ = _ != _;
        return _.createElement(
          "div",
          {
            ref: _,
            onKeyDown: _._,
            className: _,
          },
          _ &&
            _.createElement(_, {
              nPriceInCents: _,
              nSavedPriceInCents: _,
            }),
          _ &&
            _.createElement(
              "div",
              {
                className: _().PricePrefix,
              },
              _,
            ),
          _.createElement(
            "div",
            {
              className: _().EditablePrice,
            },
            _.createElement(_._, {
              value: _,
              className: _().PriceInput,
              onChange: (_) => {
                const _ = _.target.value.replace(/[^0-9]/g, "");
                let _ = Number(_ || 0);
                if (Number.isNaN(_)) return;
                _.bWholeUnitsOnly && (_ *= 100);
                const _ = 2147483647;
                _ > _ && (_ = _), _(_);
              },
              onFocus: (_) => {
                _.target.select(),
                  _._.ShowElement(
                    _.current.ownerDocument,
                    _.createElement(
                      _._,
                      {
                        target: _.current,
                        direction: "top",
                        bEnablePointerEvents: !0,
                        nBodyDistance: 0,
                      },
                      _.createElement(_, {
                        key: _,
                        packageID: _,
                        strPriceKey: _,
                      }),
                    ),
                    _,
                  );
              },
              onBlur: () => {
                window.setTimeout(
                  () =>
                    _.current && _._.HideElement(_.current.ownerDocument, _),
                  500,
                );
              },
            }),
          ),
          _ &&
            _.createElement(
              "div",
              {
                className: _().PriceSuffix,
              },
              _,
            ),
          _ &&
            _.createElement(_, {
              packageID: _,
            }),
          _.createElement(_, {
            packageID: _,
            strPriceKey: _,
          }),
        );
      }
      function _(_) {
        const { packageID: _ } = _,
          { fnApplyGuidelines: __webpack_require__ } = (0, _._)();
        return _.createElement(_, {
          fnGetUSDPriceInCents: () => (0, _._)(_, "USD"),
          fnOnUpdate: (_) => {
            __webpack_require__(_, _);
          },
          strDescription: (0, _._)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
        });
      }
      function _(_) {
        const { packageID: _, strPriceKey: __webpack_require__ } = _,
          {
            strPriceWarning: _,
            bBadPrice: _,
            bShowWarningIcon: _,
          } = _(_, __webpack_require__);
        return _
          ? _.createElement(
              _._,
              {
                className: _().PriceAlert,
                strTooltipClassname: _().HoverToolTip,
                toolTipContent: _,
                direction: "top",
              },
              _.createElement(_.eTF, {
                color: _ ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            )
          : null;
      }
      const _ = 2;
      function _(_, _) {
        const {
            nPriceInCents: __webpack_require__,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            nMinPriceInCents: _,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: _,
          } = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = "USD" == _,
          _ = __webpack_require__ != (_ ?? _),
          _ = __webpack_require__ < _,
          _ = !!_ && __webpack_require__ > _,
          _ = !!_ && __webpack_require__ > _ * _,
          _ = !!_ && __webpack_require__ < _ / _,
          _ = !!_ && __webpack_require__ < _ && !!_,
          _ =
            (_ && (0, _._)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceTooLow",
                (0, _._)(_, _).join(""),
              )) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, _._)(_, _).join(""),
              )) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, _._)(_, _).join(""),
              )) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                _,
              )),
          _ = _ || _,
          _ = _ || _,
          _ = _ || _ || _,
          _ = !(_ || !_ || (_ && _ == _)),
          _ = 4 == _?.eState,
          _ = (0, _._)(
            _().PriceCell,
            _ && _().USD,
            _ && _().ChangedLocally,
            _ && _().ProposedPrice,
            _ && _().ApprovedCanPublish,
            _ && _().WarningPrice,
            _ && _().SevereWarningPrice,
            _ && _().BadPrice,
          );
        return _.useMemo(
          () => ({
            strPriceWarning: _,
            strClassName: _,
            bBadPrice: _,
            bShowSevereWarning: _,
            bShowWarningIcon: _,
          }),
          [_, _, _, _, _],
        );
      }
      function _(_) {
        const { nPriceInCents: _, nSavedPriceInCents: __webpack_require__ } = _;
        let _ = null,
          _ = null,
          _ = null,
          _ = null;
        if (__webpack_require__) {
          const _ = Math.ceil(
              (100 * (_ - __webpack_require__)) / __webpack_require__,
            ),
            _ = _ > __webpack_require__;
          (_ = _
            ? (0, _._)("#PricingDashboard_PriceIncreaseBy", _ + "%")
            : (0, _._)("#PricingDashboard_PriceLowerBy", _ + "%")),
            (_ = (0, _._)(_().PriceChange, _ && _().PriceIncrease)),
            (_ = _.createElement(
              "div",
              {
                className: _().PriceChangeArrow,
              },
              _.createElement(_.i3G, {
                angle: _ ? 0 : 180,
              }),
            )),
            (_ = _ + "%");
        } else
          (_ = (0, _._)("#PricingDashboard_PriceIsNew_Short")),
            (_ = (0, _._)(_().NewPrice));
        return _.createElement(
          _._,
          {
            className: _,
            strTooltipClassname: _().HoverToolTip,
            toolTipContent: _,
            direction: "top",
          },
          _,
          _,
        );
      }
      function _(_) {
        return new Date(1e3 * _).toLocaleString(_._.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
      function _(_) {
        const { packageID: _, strPriceKey: __webpack_require__ } = _,
          {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            nSuggestedPriceInCents: _,
            fnSetPrice: _,
          } = (0, _._)(_, __webpack_require__),
          { nPriceInCents: _ } = (0, _._)(_, "USD"),
          _ = !(!_ || (_ && _ == _)),
          _ = (0, _._)(_),
          _ = _ && _(_.rtSubmitted),
          _ = (0, _._)(_?.submitterID),
          _ = _ ? _.m_strPlayerName : _?.submitterID;
        return _.createElement(
          "div",
          {
            className: _().PricePopout,
          },
          !!_ &&
            _.createElement(
              _._,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, _._)(
                  "#PricingDashboard_CurrentPriceOnStore_ttip",
                ),
              },
              _.createElement(
                "div",
                {
                  className: _().DetailLabel,
                },
                (0, _._)("#PricingDashboard_CurrentPriceOnStore"),
              ),
              _.createElement(
                "div",
                {
                  className: _().DetailPrice,
                },
                (0, _._)(_, __webpack_require__).join(""),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().DetailButton, _ == _ && _().Disabled),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: (0, _._)(
                    "#PricingDashboard_UseThisOldPrice_ttip",
                  ),
                },
                (0, _._)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          _ &&
            _.createElement(
              _._,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, _._)(
                  "#PricingDashboard_ProposedPrice_ttip",
                  _,
                  _,
                ),
              },
              _.createElement(
                "div",
                {
                  className: _().DetailLabel,
                },
                (0, _._)("#PricingDashboard_ProposedPrice"),
              ),
              _.createElement(
                "div",
                {
                  className: _().DetailPrice,
                },
                (0, _._)(_, __webpack_require__).join(""),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().DetailButton, _ == _ && _().Disabled),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: (0, _._)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, _._)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          !!_ &&
            _.createElement(
              _._,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, _._)(
                  "#PricingDashboard_SuggestedPrice_ttip",
                  (0, _._)(_, "USD").join(""),
                ),
              },
              _.createElement(
                "div",
                {
                  className: _().DetailLabel,
                },
                (0, _._)("#PricingDashboard_SuggestedPrice"),
              ),
              _.createElement(
                "div",
                {
                  className: _().DetailPrice,
                },
                (0, _._)(_, __webpack_require__).join(""),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().DetailButton, _ == _ && _().Disabled),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: (0, _._)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, _._)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _;
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      }),
        (function (_) {
          (_[(_.k_ECurrencyCodeInvalid = 0)] = "k_ECurrencyCodeInvalid"),
            (_[(_.k_ECurrencyCodeUSD = 1)] = "k_ECurrencyCodeUSD"),
            (_[(_.k_ECurrencyCodeGBP = 2)] = "k_ECurrencyCodeGBP"),
            (_[(_.k_ECurrencyCodeEUR = 3)] = "k_ECurrencyCodeEUR"),
            (_[(_.k_ECurrencyCodeCHF = 4)] = "k_ECurrencyCodeCHF"),
            (_[(_.k_ECurrencyCodeRUB = 5)] = "k_ECurrencyCodeRUB"),
            (_[(_.k_ECurrencyCodePLN = 6)] = "k_ECurrencyCodePLN"),
            (_[(_.k_ECurrencyCodeBRL = 7)] = "k_ECurrencyCodeBRL"),
            (_[(_.k_ECurrencyCodeJPY = 8)] = "k_ECurrencyCodeJPY"),
            (_[(_.k_ECurrencyCodeNOK = 9)] = "k_ECurrencyCodeNOK"),
            (_[(_.k_ECurrencyCodeIDR = 10)] = "k_ECurrencyCodeIDR"),
            (_[(_.k_ECurrencyCodeMYR = 11)] = "k_ECurrencyCodeMYR"),
            (_[(_.k_ECurrencyCodePHP = 12)] = "k_ECurrencyCodePHP"),
            (_[(_.k_ECurrencyCodeSGD = 13)] = "k_ECurrencyCodeSGD"),
            (_[(_.k_ECurrencyCodeTHB = 14)] = "k_ECurrencyCodeTHB"),
            (_[(_.k_ECurrencyCodeVND = 15)] = "k_ECurrencyCodeVND"),
            (_[(_.k_ECurrencyCodeKRW = 16)] = "k_ECurrencyCodeKRW"),
            (_[(_.k_ECurrencyCodeTRY = 17)] = "k_ECurrencyCodeTRY"),
            (_[(_.k_ECurrencyCodeUAH = 18)] = "k_ECurrencyCodeUAH"),
            (_[(_.k_ECurrencyCodeMXN = 19)] = "k_ECurrencyCodeMXN"),
            (_[(_.k_ECurrencyCodeCAD = 20)] = "k_ECurrencyCodeCAD"),
            (_[(_.k_ECurrencyCodeAUD = 21)] = "k_ECurrencyCodeAUD"),
            (_[(_.k_ECurrencyCodeNZD = 22)] = "k_ECurrencyCodeNZD"),
            (_[(_.k_ECurrencyCodeCNY = 23)] = "k_ECurrencyCodeCNY"),
            (_[(_.k_ECurrencyCodeINR = 24)] = "k_ECurrencyCodeINR"),
            (_[(_.k_ECurrencyCodeCLP = 25)] = "k_ECurrencyCodeCLP"),
            (_[(_.k_ECurrencyCodePEN = 26)] = "k_ECurrencyCodePEN"),
            (_[(_.k_ECurrencyCodeCOP = 27)] = "k_ECurrencyCodeCOP"),
            (_[(_.k_ECurrencyCodeZAR = 28)] = "k_ECurrencyCodeZAR"),
            (_[(_.k_ECurrencyCodeHKD = 29)] = "k_ECurrencyCodeHKD"),
            (_[(_.k_ECurrencyCodeTWD = 30)] = "k_ECurrencyCodeTWD"),
            (_[(_.k_ECurrencyCodeSAR = 31)] = "k_ECurrencyCodeSAR"),
            (_[(_.k_ECurrencyCodeAED = 32)] = "k_ECurrencyCodeAED"),
            (_[(_.k_ECurrencyCodeSEK = 33)] = "k_ECurrencyCodeSEK"),
            (_[(_.k_ECurrencyCodeARS = 34)] = "k_ECurrencyCodeARS"),
            (_[(_.k_ECurrencyCodeILS = 35)] = "k_ECurrencyCodeILS"),
            (_[(_.k_ECurrencyCodeBYN = 36)] = "k_ECurrencyCodeBYN"),
            (_[(_.k_ECurrencyCodeKZT = 37)] = "k_ECurrencyCodeKZT"),
            (_[(_.k_ECurrencyCodeKWD = 38)] = "k_ECurrencyCodeKWD"),
            (_[(_.k_ECurrencyCodeQAR = 39)] = "k_ECurrencyCodeQAR"),
            (_[(_.k_ECurrencyCodeCRC = 40)] = "k_ECurrencyCodeCRC"),
            (_[(_.k_ECurrencyCodeUYU = 41)] = "k_ECurrencyCodeUYU"),
            (_[(_.k_ECurrencyCodeBGN = 42)] = "k_ECurrencyCodeBGN"),
            (_[(_.k_ECurrencyCodeHRK = 43)] = "k_ECurrencyCodeHRK"),
            (_[(_.k_ECurrencyCodeCZK = 44)] = "k_ECurrencyCodeCZK"),
            (_[(_.k_ECurrencyCodeDKK = 45)] = "k_ECurrencyCodeDKK"),
            (_[(_.k_ECurrencyCodeHUF = 46)] = "k_ECurrencyCodeHUF"),
            (_[(_.k_ECurrencyCodeRON = 47)] = "k_ECurrencyCodeRON"),
            (_[(_.k_ECurrencyCodeMax = 48)] = "k_ECurrencyCodeMax");
        })(_ || (_ = {}));
      const _ = [_.k_ECurrencyCodeTRY, _.k_ECurrencyCodeARS];
      function _() {
        return [
          _.k_ECurrencyCodeUSD,
          _.k_ECurrencyCodeGBP,
          _.k_ECurrencyCodeEUR,
          _.k_ECurrencyCodeCHF,
          _.k_ECurrencyCodeRUB,
          _.k_ECurrencyCodePLN,
          _.k_ECurrencyCodeBRL,
          _.k_ECurrencyCodeJPY,
          _.k_ECurrencyCodeNOK,
          _.k_ECurrencyCodeIDR,
          _.k_ECurrencyCodeMYR,
          _.k_ECurrencyCodePHP,
          _.k_ECurrencyCodeSGD,
          _.k_ECurrencyCodeTHB,
          _.k_ECurrencyCodeVND,
          _.k_ECurrencyCodeKRW,
          _.k_ECurrencyCodeUAH,
          _.k_ECurrencyCodeMXN,
          _.k_ECurrencyCodeCAD,
          _.k_ECurrencyCodeAUD,
          _.k_ECurrencyCodeNZD,
          _.k_ECurrencyCodeCNY,
          _.k_ECurrencyCodeINR,
          _.k_ECurrencyCodeCLP,
          _.k_ECurrencyCodePEN,
          _.k_ECurrencyCodeCOP,
          _.k_ECurrencyCodeZAR,
          _.k_ECurrencyCodeHKD,
          _.k_ECurrencyCodeTWD,
          _.k_ECurrencyCodeSAR,
          _.k_ECurrencyCodeAED,
          _.k_ECurrencyCodeILS,
          _.k_ECurrencyCodeKZT,
          _.k_ECurrencyCodeKWD,
          _.k_ECurrencyCodeQAR,
          _.k_ECurrencyCodeCRC,
          _.k_ECurrencyCodeUYU,
        ];
      }
      function _() {
        return [
          ..._(),
          ..._,
          _.k_ECurrencyCodeSEK,
          _.k_ECurrencyCodeBGN,
          _.k_ECurrencyCodeHRK,
          _.k_ECurrencyCodeCZK,
          _.k_ECurrencyCodeDKK,
          _.k_ECurrencyCodeHUF,
          _.k_ECurrencyCodeRON,
        ];
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      class _ {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        GetKey(_, _, _, _ = 1) {
          return `${_}_${_}_${_ || _._.k_ERegionCodeInvalid}_${_}`;
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
        }
        GetRecommendPrice(_, _, _, _ = 1) {
          const _ = this.GetKey(_, _, _, _);
          return this.m_mapKeyToGuidePrice.get(_);
        }
        GetScaledRecommendedPrice(_, _, _, _ = 1) {
          let _ = -1,
            _ = -1;
          for (const _ of this.m_mapUSDPrice.get(_).keys()) {
            const _ = Math.abs(_ - _);
            (-1 == _ || _ < _) && ((_ = _), (_ = _));
          }
          const _ = this.m_mapUSDPrice.get(_).get(_),
            _ = _
              ? _.region_prices.find((_) => _.region_code == _)
              : _.currency_prices.find((_) => _.currency_code == _),
            _ = _ / _;
          return {
            currency_code: _?.currency_code,
            region_code: _?.region_code,
            price: Math.ceil((_?.price || 0) * _),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(_) {
          let _ = new Set();
          _.forEach((_) => {
            const _ = _.conversion_method ?? 1;
            this.m_mapUSDPrice.has(_) || this.m_mapUSDPrice.set(_, new Map());
            this.m_mapUSDPrice.get(_).set(_.usd_price, _),
              _.add(_.usd_price),
              _.currency_prices.forEach((_) => {
                const _ = this.GetKey(
                  _.usd_price,
                  _.currency_code,
                  _._.k_ERegionCodeInvalid,
                  _.conversion_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(_, _);
              }),
              _.region_prices.forEach((_) => {
                const _ = this.GetKey(
                  _.usd_price,
                  _.currency_code,
                  _.region_code,
                  _.conversion_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(_, _);
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _._)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let _ = (0, _._)("pricing_guideline", "application_config");
              if (_) return Promise.resolve(_);
              {
                const _ = _._.getQueryData(["PricingGuideline"]);
                return Promise.resolve(_ ?? null);
              }
            })(),
        });
        return _.data ? new _(_.data) : null;
      }
      function _() {
        return ["PricingGuideline"];
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _._,
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
      var _,
        _ = __webpack_require__("chunkid");
      function _(_) {
        switch (_) {
          case _._.k_ECurrencyCodeGBP:
            return "GBP";
          case _._.k_ECurrencyCodeEUR:
            return "EUR";
          case _._.k_ECurrencyCodeCHF:
            return "CHF";
          case _._.k_ECurrencyCodeRUB:
            return "RUB";
          case _._.k_ECurrencyCodePLN:
            return "PLN";
          case _._.k_ECurrencyCodeBRL:
            return "BRL";
          case _._.k_ECurrencyCodeJPY:
            return "JPY";
          case _._.k_ECurrencyCodeNOK:
            return "NOK";
          case _._.k_ECurrencyCodeIDR:
            return "IDR";
          case _._.k_ECurrencyCodeMYR:
            return "MYR";
          case _._.k_ECurrencyCodePHP:
            return "PHP";
          case _._.k_ECurrencyCodeSGD:
            return "SGD";
          case _._.k_ECurrencyCodeTHB:
            return "THB";
          case _._.k_ECurrencyCodeVND:
            return "VND";
          case _._.k_ECurrencyCodeKRW:
            return "KRW";
          case _._.k_ECurrencyCodeTRY:
            return "TRY";
          case _._.k_ECurrencyCodeUAH:
            return "UAH";
          case _._.k_ECurrencyCodeMXN:
            return "MXN";
          case _._.k_ECurrencyCodeCAD:
            return "CAD";
          case _._.k_ECurrencyCodeAUD:
            return "AUD";
          case _._.k_ECurrencyCodeNZD:
            return "NZD";
          case _._.k_ECurrencyCodeCNY:
            return "CNY";
          case _._.k_ECurrencyCodeINR:
            return "INR";
          case _._.k_ECurrencyCodeCLP:
            return "CLP";
          case _._.k_ECurrencyCodePEN:
            return "PEN";
          case _._.k_ECurrencyCodeCOP:
            return "COP";
          case _._.k_ECurrencyCodeZAR:
            return "ZAR";
          case _._.k_ECurrencyCodeHKD:
            return "HKD";
          case _._.k_ECurrencyCodeTWD:
            return "TWD";
          case _._.k_ECurrencyCodeSAR:
            return "SAR";
          case _._.k_ECurrencyCodeAED:
            return "AED";
          case _._.k_ECurrencyCodeSEK:
            return "SEK";
          case _._.k_ECurrencyCodeARS:
            return "ARS";
          case _._.k_ECurrencyCodeILS:
            return "ILS";
          case _._.k_ECurrencyCodeBYN:
            return "BYN";
          case _._.k_ECurrencyCodeKZT:
            return "KZT";
          case _._.k_ECurrencyCodeKWD:
            return "KWD";
          case _._.k_ECurrencyCodeQAR:
            return "QAR";
          case _._.k_ECurrencyCodeCRC:
            return "CRC";
          case _._.k_ECurrencyCodeUYU:
            return "UYU";
          case _._.k_ECurrencyCodeBGN:
            return "BGN";
          case _._.k_ECurrencyCodeHRK:
            return "HRK";
          case _._.k_ECurrencyCodeCZK:
            return "CZK";
          case _._.k_ECurrencyCodeDKK:
            return "DKK";
          case _._.k_ECurrencyCodeHUF:
            return "HUF";
          case _._.k_ECurrencyCodeRON:
            return "RON";
          default:
            return "USD";
        }
      }
      function _(_) {
        switch (_) {
          case _._.k_ECurrencyCodeUSD:
            return "US Dollar";
          case _._.k_ECurrencyCodeGBP:
            return "GB Pounds";
          case _._.k_ECurrencyCodeEUR:
            return "Euros";
          case _._.k_ECurrencyCodeCHF:
            return "Swiss Francs";
          case _._.k_ECurrencyCodeRUB:
            return "Russian Rubles";
          case _._.k_ECurrencyCodePLN:
            return "Polish zloty";
          case _._.k_ECurrencyCodeBRL:
            return "Brazilian Reals";
          case _._.k_ECurrencyCodeJPY:
            return "Japanese Yen";
          case _._.k_ECurrencyCodeNOK:
            return "Norwegian Krone";
          case _._.k_ECurrencyCodeIDR:
            return "Indonesian Rupiah";
          case _._.k_ECurrencyCodeMYR:
            return "Malaysian Ringgit";
          case _._.k_ECurrencyCodePHP:
            return "Philippine Peso";
          case _._.k_ECurrencyCodeSGD:
            return "Singapore Dollar";
          case _._.k_ECurrencyCodeTHB:
            return "Thai Baht";
          case _._.k_ECurrencyCodeVND:
            return "Vietnamese Dong";
          case _._.k_ECurrencyCodeKRW:
            return "Korean Won";
          case _._.k_ECurrencyCodeTRY:
            return "Turkish Lira";
          case _._.k_ECurrencyCodeUAH:
            return "Ukrainian Hryvnia";
          case _._.k_ECurrencyCodeMXN:
            return "Mexican Peso";
          case _._.k_ECurrencyCodeCAD:
            return "Canadian Dollar";
          case _._.k_ECurrencyCodeAUD:
            return "Australian Dollar";
          case _._.k_ECurrencyCodeNZD:
            return "New Zealand Dollar";
          case _._.k_ECurrencyCodeCNY:
            return "Chinese Yuan";
          case _._.k_ECurrencyCodeINR:
            return "Indian Rupee";
          case _._.k_ECurrencyCodeCLP:
            return "Chilean Peso";
          case _._.k_ECurrencyCodePEN:
            return "Peruvian Sol";
          case _._.k_ECurrencyCodeCOP:
            return "Colombian Peso";
          case _._.k_ECurrencyCodeZAR:
            return "South African Rand";
          case _._.k_ECurrencyCodeHKD:
            return "Hong Kong Dollar";
          case _._.k_ECurrencyCodeTWD:
            return "Taiwanese Dollar";
          case _._.k_ECurrencyCodeSAR:
            return "Saudi Arabian Riyal";
          case _._.k_ECurrencyCodeAED:
            return "Emirati Dirham";
          case _._.k_ECurrencyCodeSEK:
            return "Swedish Krona";
          case _._.k_ECurrencyCodeARS:
            return "Argentine Peso";
          case _._.k_ECurrencyCodeILS:
            return "Israeli New Shequel";
          case _._.k_ECurrencyCodeBYN:
            return "Belarusian Ruble";
          case _._.k_ECurrencyCodeKZT:
            return "Kazakhstani Tenge";
          case _._.k_ECurrencyCodeKWD:
            return "Kuwaiti Dinar";
          case _._.k_ECurrencyCodeQAR:
            return "Qatari Rial";
          case _._.k_ECurrencyCodeCRC:
            return "Costa Rican Colon";
          case _._.k_ECurrencyCodeUYU:
            return "Uruguayan Peso";
          case _._.k_ECurrencyCodeBGN:
            return "Bulgarian lev";
          case _._.k_ECurrencyCodeHRK:
            return "Croatian kuna";
          case _._.k_ECurrencyCodeCZK:
            return "Czech koruna";
          case _._.k_ECurrencyCodeDKK:
            return "Danish krone";
          case _._.k_ECurrencyCodeHUF:
            return "Hungarian forint";
          case _._.k_ECurrencyCodeRON:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function _(_, _ = _.k_ERegionCodeInvalid) {
        switch (_) {
          case _._.k_ECurrencyCodeGBP:
            return "gbp";
          case _._.k_ECurrencyCodeEUR:
            return "eur";
          case _._.k_ECurrencyCodeCHF:
            return "chf";
          case _._.k_ECurrencyCodeRUB:
            return "rub";
          case _._.k_ECurrencyCodePLN:
            return "pln";
          case _._.k_ECurrencyCodeBRL:
            return "brl";
          case _._.k_ECurrencyCodeJPY:
            return "jpy";
          case _._.k_ECurrencyCodeNOK:
            return "nok";
          case _._.k_ECurrencyCodeIDR:
            return "idr";
          case _._.k_ECurrencyCodeMYR:
            return "myr";
          case _._.k_ECurrencyCodePHP:
            return "php";
          case _._.k_ECurrencyCodeSGD:
            return "sgd";
          case _._.k_ECurrencyCodeTHB:
            return "thb";
          case _._.k_ECurrencyCodeVND:
            return "vnd";
          case _._.k_ECurrencyCodeKRW:
            return "krw";
          case _._.k_ECurrencyCodeTRY:
            return "try";
          case _._.k_ECurrencyCodeUAH:
            return "uah";
          case _._.k_ECurrencyCodeMXN:
            return "mxn";
          case _._.k_ECurrencyCodeCAD:
            return "cad";
          case _._.k_ECurrencyCodeAUD:
            return "aud";
          case _._.k_ECurrencyCodeNZD:
            return "nzd";
          case _._.k_ECurrencyCodeCNY:
            return "cny";
          case _._.k_ECurrencyCodeINR:
            return "inr";
          case _._.k_ECurrencyCodeCLP:
            return "clp";
          case _._.k_ECurrencyCodePEN:
            return "pen";
          case _._.k_ECurrencyCodeCOP:
            return "cop";
          case _._.k_ECurrencyCodeZAR:
            return "zar";
          case _._.k_ECurrencyCodeHKD:
            return "hkd";
          case _._.k_ECurrencyCodeTWD:
            return "twd";
          case _._.k_ECurrencyCodeSAR:
            return "sar";
          case _._.k_ECurrencyCodeAED:
            return "aed";
          case _._.k_ECurrencyCodeSEK:
            return "sek";
          case _._.k_ECurrencyCodeARS:
            return "ars";
          case _._.k_ECurrencyCodeILS:
            return "ils";
          case _._.k_ECurrencyCodeBYN:
            return "byn";
          case _._.k_ECurrencyCodeKZT:
            return "kzt";
          case _._.k_ECurrencyCodeKWD:
            return "kwd";
          case _._.k_ECurrencyCodeQAR:
            return "qar";
          case _._.k_ECurrencyCodeCRC:
            return "crc";
          case _._.k_ECurrencyCodeUYU:
            return "uyu";
          case _._.k_ECurrencyCodeBGN:
            return "bgn";
          case _._.k_ECurrencyCodeHRK:
            return "hrk";
          case _._.k_ECurrencyCodeCZK:
            return "czk";
          case _._.k_ECurrencyCodeDKK:
            return "dkk";
          case _._.k_ECurrencyCodeHUF:
            return "huf";
          case _._.k_ECurrencyCodeRON:
            return "ron";
          default:
            return _ == _.k_ERegionCodeCIS
              ? "usd_cis"
              : _ == _.k_ERegionCodeSAsia
                ? "usd_sasia"
                : _ == _.k_ERegionCodeLATAM
                  ? "usd_latam"
                  : _ == _.k_ERegionCodeMENA
                    ? "usd_mena"
                    : "usd";
        }
      }
      function _(_) {
        return `${_(
          (function (_) {
            switch (_) {
              case "USD":
                return _._.k_ECurrencyCodeUSD;
              case "GBP":
                return _._.k_ECurrencyCodeGBP;
              case "EUR":
                return _._.k_ECurrencyCodeEUR;
              case "CHF":
                return _._.k_ECurrencyCodeCHF;
              case "RUB":
                return _._.k_ECurrencyCodeRUB;
              case "PLN":
                return _._.k_ECurrencyCodePLN;
              case "BRL":
                return _._.k_ECurrencyCodeBRL;
              case "JPY":
                return _._.k_ECurrencyCodeJPY;
              case "NOK":
                return _._.k_ECurrencyCodeNOK;
              case "IDR":
                return _._.k_ECurrencyCodeIDR;
              case "MYR":
                return _._.k_ECurrencyCodeMYR;
              case "PHP":
                return _._.k_ECurrencyCodePHP;
              case "SGD":
                return _._.k_ECurrencyCodeSGD;
              case "THB":
                return _._.k_ECurrencyCodeTHB;
              case "VND":
                return _._.k_ECurrencyCodeVND;
              case "KRW":
                return _._.k_ECurrencyCodeKRW;
              case "TRY":
                return _._.k_ECurrencyCodeTRY;
              case "UAH":
                return _._.k_ECurrencyCodeUAH;
              case "MXN":
                return _._.k_ECurrencyCodeMXN;
              case "CAD":
                return _._.k_ECurrencyCodeCAD;
              case "AUD":
                return _._.k_ECurrencyCodeAUD;
              case "NZD":
                return _._.k_ECurrencyCodeNZD;
              case "CNY":
                return _._.k_ECurrencyCodeCNY;
              case "INR":
                return _._.k_ECurrencyCodeINR;
              case "CLP":
                return _._.k_ECurrencyCodeCLP;
              case "PEN":
                return _._.k_ECurrencyCodePEN;
              case "COP":
                return _._.k_ECurrencyCodeCOP;
              case "ZAR":
                return _._.k_ECurrencyCodeZAR;
              case "HKD":
                return _._.k_ECurrencyCodeHKD;
              case "TWD":
                return _._.k_ECurrencyCodeTWD;
              case "SAR":
                return _._.k_ECurrencyCodeSAR;
              case "AED":
                return _._.k_ECurrencyCodeAED;
              case "SEK":
                return _._.k_ECurrencyCodeSEK;
              case "ARS":
                return _._.k_ECurrencyCodeARS;
              case "ILS":
                return _._.k_ECurrencyCodeILS;
              case "BYN":
                return _._.k_ECurrencyCodeBYN;
              case "KZT":
                return _._.k_ECurrencyCodeKZT;
              case "KWD":
                return _._.k_ECurrencyCodeKWD;
              case "QAR":
                return _._.k_ECurrencyCodeQAR;
              case "CRC":
                return _._.k_ECurrencyCodeCRC;
              case "UYU":
                return _._.k_ECurrencyCodeUYU;
              case "BGN":
                return _._.k_ECurrencyCodeBGN;
              case "HRK":
                return _._.k_ECurrencyCodeHRK;
              case "CZK":
                return _._.k_ECurrencyCodeCZK;
              case "DKK":
                return _._.k_ECurrencyCodeDKK;
              case "HUF":
                return _._.k_ECurrencyCodeHUF;
              case "RON":
                return _._.k_ECurrencyCodeRON;
              default:
                return _._.k_ECurrencyCodeInvalid;
            }
          })(_.toUpperCase()),
        )} (${_})`;
      }
      function _(_) {
        return _._.k_ECurrencyCodeUSD;
      }
      function _(_) {
        switch (_) {
          case _.k_ERegionCodeCIS:
            return "usd_cis";
          case _.k_ERegionCodeSAsia:
            return "usd_sasia";
          case _.k_ERegionCodeLATAM:
            return "usd_latam";
          case _.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function _(_) {
        switch (_) {
          case _.k_ERegionCodeCIS:
            return "CIS";
          case _.k_ERegionCodeSAsia:
            return "SASIA";
          case _.k_ERegionCodeLATAM:
            return "LATAM";
          case _.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function _(_) {
        switch (_) {
          case "CIS":
            return _.k_ERegionCodeCIS;
          case "SASIA":
            return _.k_ERegionCodeSAsia;
          case "LATAM":
            return _.k_ERegionCodeLATAM;
          case "MENA":
            return _.k_ERegionCodeMENA;
          default:
            return _.k_ERegionCodeInvalid;
        }
      }
      function _(_) {
        switch (_) {
          case _.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case _.k_ERegionCodeSAsia:
            return "South Asia";
          case _.k_ERegionCodeLATAM:
            return "Latin America";
          case _.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      !(function (_) {
        (_[(_.k_ERegionCodeInvalid = 0)] = "k_ERegionCodeInvalid"),
          (_[(_.k_ERegionCodeCIS = 1)] = "k_ERegionCodeCIS"),
          (_[(_.k_ERegionCodeSAsia = 2)] = "k_ERegionCodeSAsia"),
          (_[(_.k_ERegionCodeLATAM = 3)] = "k_ERegionCodeLATAM"),
          (_[(_.k_ERegionCodeMENA = 4)] = "k_ERegionCodeMENA"),
          (_[(_.k_ERegionCodeMax = 5)] = "k_ERegionCodeMax");
      })(_ || (_ = {}));
      const _ = (0, _._)(),
        _ =
          ((0, _._)(),
          [
            _.k_ERegionCodeCIS,
            _.k_ERegionCodeSAsia,
            _.k_ERegionCodeLATAM,
            _.k_ERegionCodeMENA,
          ]);
    },
  },
]);

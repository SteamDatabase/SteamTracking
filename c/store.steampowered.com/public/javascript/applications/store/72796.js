(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [72796],
  {
    chunkid: (module) => {
      module.exports = {
        LearnMoreLink: "_39Z_xV6srt_o-RoCqEbes3",
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
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            hardwareDetail: _,
            reservationAdvancedSettings: _,
            reservedHardwareDetail: _,
          } = _,
          [_] = (0, _._)(() => [_?.waiting_learn_more_url]);
        return (0, _.jsxs)(_.Fragment, {
          children: [
            _._.logged_in
              ? (0, _.jsx)(_, {
                  hardwareDetail: _,
                  reservedHardwareDetail: _,
                })
              : (0, _.jsx)("div", {
                  className: (0, _._)(_.reserverow),
                  children: (0, _.jsx)(_._, {
                    label: _._.Localize("#Reservation_Waitlist_NotSignedIn"),
                    strDialogDesc: _._.Localize(
                      "#Reservation_Waitlist_NotSignedIn_Desc",
                    ),
                  }),
                }),
            (0, _.jsx)("div", {
              className: (0, _._)(_.expecteddate_str),
              children: (0, _._)(_.reservation_state)
                ? _._.LocalizeReact("#Reservation_In_Waitlist_Message")
                : _._.LocalizeReact("#Reservation_In_Waitlist_Message_NotJoin"),
            }),
            _ &&
              (0, _.jsx)("a", {
                className: _().LearnMoreLink,
                href: _,
                children: _._.Localize("#Button_Learn"),
              }),
          ],
        });
      }
      function _(_) {
        const { hardwareDetail: _, reservedHardwareDetail: _ } = _;
        switch (_.reservation_state) {
          case _._.k_EPurchaseReservationState_NotReserved:
          case _._.k_EPurchaseReservationState_Consumed:
          case _._.k_EPurchaseReservationState_Cancelled:
            return _
              ? (0, _.jsx)(_._, {
                  hardwareDetail: _,
                  reservedHardwareDetail: _,
                })
              : (0, _.jsx)(_._, {
                  packageid: _.packageid,
                  label: _._.Localize("#Reservation_JoinWaitList"),
                });
          case _._.k_EPurchaseReservationState_Reserved:
          case _._.k_EPurchaseReservationState_Allocated:
          default:
            return (0, _.jsx)(_._, {
              packageid: _.packageid,
              strAction: _._.Localize("#Reservation_Cancel_Waitlist"),
              strDesc: _._.Localize("#Reservation_Cancel_Waitlist_Desc"),
            });
          case _._.k_EPurchaseReservationState_UnavailableRegion:
            return (0, _.jsx)(_._, {});
        }
      }
    },
  },
]);

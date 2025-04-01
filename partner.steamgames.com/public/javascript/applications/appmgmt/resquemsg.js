/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4985],
  {
    65285: (e) => {
      e.exports = {
        Dummy: "_33nIbw5FB3FiuhUid6pNCS",
        ItemTable: "dhnmdtQCg9NlRTlO2CiRm",
        ItemSelect: "_2B82L-Dg0mrzOe1OkzCeN8",
        NewEntryCtn: "_1n-Sq-XrzUPQrrWRQVdhtq",
        DatePreview: "_2p-FIFIwIlMJ256q0Zj7lo",
      };
    },
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    92825: (e) => {
      e.exports = { Ctn: "_3gnQfZ3NUW9NFF3WllsQ6b" };
    },
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    43709: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => $ });
      var r = n(90626),
        a = n(24484);
      const s = (0, a.Tc)("physical_goods", "application_config");
      var i = n(34629),
        o = n(56545),
        l = n(75487),
        c = n(96059),
        u = n(44332),
        d = n(68797),
        m = n(6144),
        g = n(73745),
        p = n(30470);
      class _ {
        m_mapProductPositionMsgList = new Map();
        m_productListChangeCallback = new m.lu();
        m_messageListChangeCallback = new Map();
        m_steamInterface = null;
        GetKey(e) {
          return `${e.edistributor}_${e.product_identifier}`;
        }
        SortList(e) {
          e.sort((e, t) => e.start_queue_position - t.start_queue_position);
        }
        GetProductListChangeCallback() {
          return this.m_productListChangeCallback;
        }
        GetPositionListChangeCallback(e) {
          const t = this.GetKey(e);
          return this.GetPositionListViaKeyChangeCallback(t);
        }
        GetPositionListViaKeyChangeCallback(e) {
          return (
            this.m_messageListChangeCallback.has(e) ||
              this.m_messageListChangeCallback.set(e, new m.lu()),
            this.m_messageListChangeCallback.get(e)
          );
        }
        GetAllProducts() {
          return Array.from(this.m_mapProductPositionMsgList.keys()).map(
            (e) => {
              const t = e.split("_");
              return {
                edistributor: Number.parseInt(t[0]),
                product_identifier: t[1],
              };
            },
          );
        }
        GetPositionMessagingForProduct(e) {
          const t = this.GetKey(e);
          return this.m_mapProductPositionMsgList.get(t);
        }
        AddProductID(e) {
          const t = this.GetKey(e);
          this.m_mapProductPositionMsgList.has(t) ||
            (this.m_mapProductPositionMsgList.set(t, []),
            this.GetProductListChangeCallback().Dispatch(
              this.GetAllProducts(),
            ));
        }
        async SetPositionMessages(e) {
          const t = o.w.Init(l.ku);
          if (0 == e.length)
            return (
              console.log(
                "CReservationMessagingStore.SetPositionMessages - empty list",
              ),
              !1
            );
          e.forEach((e) => {
            let n = t.Body().add_settings();
            n.set_edistributor(e.edistributor),
              n.set_product_identifier(e.product_identifier),
              n.set_start_queue_position(e.start_queue_position),
              n.set_rtime_estimated_notification(
                e.rtime_estimated_notification,
              ),
              n.set_localization_token(e.localization_token);
          });
          let n = null;
          try {
            const r = await l.nd.SetReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == r.GetEResult()) {
              const t = new Set(),
                n = Math.floor(Date.now() / 1e3);
              return (
                e.forEach((e) => {
                  (e.accountid = p.iA.accountid), (e.rtime_created = n);
                  const r = this.GetKey(e);
                  let a = this.m_mapProductPositionMsgList.get(r);
                  const s = a.findIndex(
                    (t) => t.start_queue_position == e.start_queue_position,
                  );
                  let i = [...a];
                  s >= 0 ? (i[s] = e) : (i.push(e), this.SortList(i)),
                    this.m_mapProductPositionMsgList.set(r, i),
                    t.add(this.GetKey(e));
                }),
                Array.from(t).forEach((e) => {
                  this.GetPositionListViaKeyChangeCallback(e).Dispatch(
                    this.m_mapProductPositionMsgList.get(e),
                  );
                }),
                !0
              );
            }
            n = (0, d.H)(r);
          } catch (e) {
            n = (0, d.H)(e);
          }
          return (
            console.error(
              "CReservationMessagingStore.SetPositionMessages failed: " +
                n?.strErrorMsg,
              n,
            ),
            !1
          );
        }
        async DeletePositionMessage(e) {
          const t = o.w.Init(l.$J);
          t.Body().set_edistributor(e.edistributor),
            t.Body().set_product_identifier(e.product_identifier),
            t.Body().set_start_queue_position(e.start_queue_position);
          let n = null;
          try {
            const r = await l.nd.DeleteReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == r.GetEResult()) {
              const t = this.GetKey(e);
              let n = this.m_mapProductPositionMsgList.get(t);
              const r = n.findIndex(
                  (t) => t.start_queue_position == e.start_queue_position,
                ),
                a = [...n];
              return (
                a.splice(r, 1),
                this.m_mapProductPositionMsgList.set(t, a),
                this.GetPositionListChangeCallback(e).Dispatch(a),
                !0
              );
            }
            n = (0, d.H)(r);
          } catch (e) {
            n = (0, d.H)(e);
          }
          return (
            console.error(
              "CReservationMessagingStore.SetPositionMessages failed: " +
                n?.strErrorMsg,
              n,
            ),
            !1
          );
        }
        async ReloadReservationPositionMessages() {
          const e = o.w.Init(l.jd);
          return await l.nd.ReloadAllReservationPositionMessages(
            this.m_steamInterface.GetServiceTransport(),
            e,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == p.TS.WEB_UNIVERSE &&
                (window.g_ReservationMessagingStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, a.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, u.w)(Boolean(e), "require promotion_operation_token"),
            "dev" == p.TS.WEB_UNIVERSE &&
              console.log(
                "DEV_DEBUG Initializing CReservationMessagingStore with access token ",
                e,
              ),
            (this.m_steamInterface = new c.D(p.TS.WEBAPI_BASE_URL, e));
          const t = (0, a.Tc)(
            "reservation_queue_position_messages",
            "application_config",
          );
          this.ValidateInputDefault(t) &&
            (t.map((e) => {
              const t = this.GetKey(e);
              this.m_mapProductPositionMsgList.has(t) ||
                this.m_mapProductPositionMsgList.set(t, []),
                this.m_mapProductPositionMsgList.get(t).push(e);
            }),
            this.m_mapProductPositionMsgList.forEach((e) => this.SortList(e)));
        }
        GetSteamInterface() {
          return this.m_steamInterface;
        }
        ValidateInputDefault(e) {
          const t = e;
          return (
            t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "number" == typeof t[0].edistributor &&
            "string" == typeof t[0].product_identifier
          );
        }
      }
      function f() {
        const [e, t] = (0, r.useState)(() => _.Get().GetAllProducts());
        return (0, g.hL)(_.Get().GetProductListChangeCallback(), t), e;
      }
      function h() {
        const e = _.Get();
        return {
          fnAddProductID: e.AddProductID,
          fnSetPositionMessages: e.SetPositionMessages,
          fnDeletePositionMessage: e.DeletePositionMessage,
          fnReloadReservationPositionMessages:
            e.ReloadReservationPositionMessages,
        };
      }
      (0, i.Cg)([g.oI], _.prototype, "AddProductID", null),
        (0, i.Cg)([g.oI], _.prototype, "SetPositionMessages", null),
        (0, i.Cg)([g.oI], _.prototype, "DeletePositionMessage", null),
        (0, i.Cg)(
          [g.oI],
          _.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var E = n(82359),
        v = n(65285),
        S = n(16676);
      function M(e) {
        const [t, n] = (0, r.useState)(null),
          { fnAddProductID: a } = h();
        return r.createElement(
          "div",
          null,
          r.createElement(S.JU, null, "Add Product SKU:"),
          r.createElement(
            "p",
            null,
            "Select an item for which we want to communicate a reservation status.",
          ),
          r.createElement(T, { selected: t, setSelected: n }),
          r.createElement(
            S.$n,
            {
              disabled: !t,
              onClick: () => {
                a(t), n(null);
              },
            },
            "Add ",
            t?.product_description,
            " To List",
          ),
        );
      }
      function T(e) {
        const { selected: t, setSelected: n } = e,
          a = (0, r.useRef)(void 0),
          i = (function () {
            const [e] = (0, r.useState)(() => s);
            return e;
          })(),
          o = f(),
          l = (0, r.useMemo)(
            () =>
              i && o
                ? i
                    .filter(
                      (e) =>
                        -1 ==
                        o.findIndex(
                          (t) =>
                            t.edistributor == e.edistributor &&
                            t.product_identifier == e.product_identifier,
                        ),
                    )
                    .map((e) => ({
                      value: e,
                      label: `${e.product_description} @ ${e.distributor} - product id: ${e.product_identifier}, part number ${e.part_number} `,
                    }))
                : [],
            [i, o],
          );
        (0, r.useEffect)(() => {
          a?.current && a.current.clearValue();
        }, [o]);
        const c = l?.find(
          (e) =>
            t &&
            t.edistributor == e.value.edistributor &&
            t.product_identifier == e.value.product_identifier,
        );
        return r.createElement(E.Ay, {
          isSearchable: !0,
          ref: a,
          isMulti: !1,
          isClearable: !0,
          className: v.ItemSelect,
          options: l,
          value: c,
          onChange: (e) => {
            e && n(e);
          },
        });
      }
      var C = n(71298),
        b = n(99637),
        w = n(8905),
        y = n(9154),
        P = n(738),
        A = n(48479),
        D = n(56011),
        R = n(61859),
        k = n(95695),
        I = n(92825),
        L = n.n(I),
        N = n(44165);
      function G(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function B(e) {
        const { strToken: t, rtEstimatedNotifcationDate: n } = e,
          a = new Date(1e3 * n),
          s = a.getMonth() + 1;
        let i = "",
          o = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            i = "" + a.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (i = (0, R.we)("#Sale_Reservation_MonthNoun_" + s)),
              (o = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (i = (0, R.we)("#Sale_Reservation_MonthNoun_" + G(s, 1))),
              (o = (0, R.we)("#Sale_Reservation_MonthNoun_" + s)),
              (l = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (i = (0, R.we)("#Sale_Reservation_MonthNoun_" + G(s, 2))),
              (o = (0, R.we)("#Sale_Reservation_MonthNoun_" + s)),
              (l = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (i = (0, R.we)("#Sale_Reservation_MonthNoun_" + G(s, 3))),
              (o = (0, R.we)("#Sale_Reservation_MonthNoun_" + s)),
              (l = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((s - 1) / 3) + 1)),
              (i = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((s - 1) / 3) + 1)),
              (i = (0, R.we)("#Sale_Reservation_MonthNoun_" + s)),
              (o = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = N.HD.GetTimeNowWithOverride(),
                t = Math.floor((n - e) / 86400);
              t < 7 ||
                (t < 28
                  ? ((c = "#Sale_Reservation_RelativeWeekly_Plural"),
                    (i = "" + Math.floor(t / 7 + 1)))
                  : ((c = "#Sale_Reservation_RelativeMonthly"),
                    (i = "" + Math.floor(t / 28 + 1))));
            }
            break;
          default:
            c = "#Sale_Reservation_Fallback";
        }
        return r.createElement(
          "div",
          { className: L().Ctn },
          (0, R.we)(c, i, o, l, ""),
        );
      }
      function x(e) {
        const t = f();
        return t && 0 != t.length
          ? r.createElement(
              "div",
              null,
              t.map((e) =>
                r.createElement(Y, {
                  key: `${e.edistributor}_${e.product_identifier}`,
                  productID: e,
                }),
              ),
            )
          : r.createElement(
              "div",
              null,
              "No products with reservation position messages exists.",
            );
      }
      function F(e) {
        return r.createElement(
          "div",
          null,
          r.createElement(S.JU, null, "instructions:"),
          r.createElement(
            "p",
            null,
            "Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.",
          ),
          r.createElement(
            "p",
            null,
            "Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.",
          ),
        );
      }
      function U(e) {
        f();
        return r.createElement(
          "div",
          null,
          r.createElement(S.JU, null, "Force update:"),
          r.createElement(
            "p",
            null,
            "By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.",
          ),
          r.createElement(
            "p",
            null,
            "We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.",
          ),
          r.createElement(
            S.$n,
            {
              onClick: (e) => (0, P.pg)(r.createElement(V, null), (0, D.uX)(e)),
            },
            "Force Reload Definitions on Steam Servers",
          ),
        );
      }
      function Y(e) {
        const { productID: t } = e,
          n = (function (e) {
            return s.find(
              (t) =>
                t.edistributor == e.edistributor &&
                t.product_identifier == e.product_identifier,
            );
          })(t),
          a = n.product_description + " " + n.distributor,
          i = (function (e) {
            const [t, n] = (0, r.useState)(() =>
              _.Get().GetPositionMessagingForProduct(e),
            );
            return (0, g.hL)(_.Get().GetPositionListChangeCallback(e), n), t;
          })(t);
        return r.createElement(
          A.qx,
          {
            bStartMinimized: !1,
            title: a,
            tooltip: `distributor enum: ${n.edistributor}, part number: ${n.part_number}, product identifier: ${n.product_identifier}`,
          },
          r.createElement(
            S.$n,
            {
              onClick: (e) =>
                (0, P.pg)(r.createElement(O, { productID: t }), (0, D.uX)(e)),
            },
            "Add new start position",
          ),
          r.createElement(
            "table",
            { className: v.ItemTable },
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "Starting Queue Position"),
                r.createElement("th", null, "Estimate Date Receive Invite"),
                r.createElement("th", null, "Localized Date"),
                r.createElement("th", null, "Entry Created By"),
                r.createElement("th", null),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              i.map((e) =>
                r.createElement(q, {
                  key: a + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function q(e) {
        const { positionMsg: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.start_queue_position.toLocaleString()),
          r.createElement(
            "td",
            null,
            (0, R.TW)(t.rtime_estimated_notification),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(B, {
              rtEstimatedNotifcationDate: t.rtime_estimated_notification,
              strToken: t.localization_token,
            }),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(
              "div",
              null,
              r.createElement(w.p, { accountID: t.accountid }),
            ),
            r.createElement("br", null),
            "On: ",
            (0, R.TW)(t.rtime_created),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(
              S.$n,
              {
                onClick: (e) =>
                  (0, P.pg)(
                    r.createElement(O, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, D.uX)(e),
                  ),
              },
              "Update",
            ),
            r.createElement(
              S.$n,
              {
                onClick: (e) =>
                  (0, P.pg)(
                    r.createElement(z, { positionMsg: t }),
                    (0, D.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function O(e) {
        const { productID: t, existingPositionMsg: n, closeModal: a } = e,
          { fnSetPositionMessages: s } = h(),
          i = Math.floor(Date.now() / 1e3),
          [o, l] = (0, r.useState)(n?.start_queue_position || 0),
          [c, u] = (0, r.useState)(
            n?.rtime_estimated_notification || i + 86400,
          ),
          [d, m] = (0, r.useState)(
            n?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          g = n ? "Update Queue Range" : "Create Queue Range",
          p = (0, C.vs)();
        return p.bLoading
          ? r.createElement(C.Hh, {
              state: p,
              strDialogTitle: g,
              closeModal: a,
            })
          : r.createElement(
              y.o0,
              {
                bDisableBackgroundDismiss: !0,
                strTitle: g,
                onCancel: a,
                onOK: () => {
                  p.fnSetLoading(!0);
                  const e = {
                    ...t,
                    start_queue_position: o,
                    rtime_estimated_notification: c,
                    localization_token: d,
                  };
                  s([e]).then((e) => {
                    e
                      ? (p.fnSetSuccess(!0),
                        p.fnSetStrSuccess("Successfully created position"))
                      : (p.fnSetSuccess(!1),
                        p.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
                },
              },
              r.createElement(
                "div",
                { className: v.NewEntryCtn },
                r.createElement(
                  "p",
                  null,
                  "When we get to accepting reservation number ",
                  r.createElement("i", null, "n"),
                  ", show those users a date they can anticipate to recieve an invite to purchase.",
                ),
                r.createElement(S.pd, {
                  type: "number",
                  min: "0",
                  value: o,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                r.createElement(b.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: i,
                  fnGetTimeToUpdate: () => c,
                  fnSetTimeToUpdate: u,
                }),
                r.createElement("br", null),
                r.createElement(Q, {
                  strToken: d,
                  fnSetToken: m,
                  rtEstimateDate: c,
                }),
              ),
            );
      }
      function z(e) {
        const { positionMsg: t, closeModal: n } = e,
          { fnDeletePositionMessage: a } = h(),
          s = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          i = (0, C.vs)();
        return i.bLoading
          ? r.createElement(C.Hh, {
              state: i,
              strDialogTitle: s,
              closeModal: n,
            })
          : r.createElement(y.o0, {
              strTitle: s,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: n,
              onOK: () => {
                i.fnSetLoading(!0),
                  a(t).then((e) => {
                    e
                      ? (i.fnSetSuccess(!0),
                        i.fnSetStrSuccess("Successfully delete position"))
                      : (i.fnSetSuccess(!1),
                        i.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
              },
            });
      }
      function V(e) {
        const { closeModal: t } = e,
          { fnReloadReservationPositionMessages: n } = h(),
          [a, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            n().then(() => s(!0));
          }, [n]),
          r.createElement(y.o0, {
            bAlertDialog: !0,
            strTitle: "Reload Definition",
            strDescription: a
              ? "Reloading..."
              : "Reload send to server, safe to close dialog",
            closeModal: t,
          })
        );
      }
      const W = [
        "#Sale_Reservation_MonthYear",
        "#Sale_Reservation_TwoMonthRangeYear",
        "#Sale_Reservation_ThreeMonthRangeYear",
        "#Sale_Reservation_FourMonthRangeYear",
        "#Sale_Reservation_Quarter_ThreeMonths",
        "#Sale_Reservation_AfterYear",
        "#Sale_Reservation_AfterMonthYear",
        "#Sale_Reservation_Year",
        "#Sale_Reservation_AfterQuarter_ThreeMonths",
        "#Sale_Reservation_RelativeWeekly",
      ];
      function Q(e) {
        const { strToken: t, fnSetToken: n, rtEstimateDate: a } = e,
          s = (0, r.useMemo)(
            () =>
              W.map((e) => ({
                label: r.createElement(B, {
                  strToken: e,
                  rtEstimatedNotifcationDate: a,
                }),
                data: e,
              })),
            [a],
          );
        return r.createElement(
          "div",
          null,
          r.createElement(S.m, {
            strDropDownClassName: k.DropDownScroll,
            label: "Date Format",
            rgOptions: s,
            selectedOption: t,
            onChange: (e) => n(e.data),
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          r.createElement(
            "div",
            null,
            r.createElement("h3", null, "This will display to users as: "),
            r.createElement(
              "div",
              { className: v.DatePreview },
              r.createElement(
                "div",
                null,
                (0, R.we)("#Sale_Reservation_ExpectedDate"),
              ),
              r.createElement(B, {
                rtEstimatedNotifcationDate: a,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var K = n(52038),
        H = n(45737),
        j = n.n(H);
      function $(e) {
        return r.createElement(
          "div",
          { className: (0, K.A)(v.ctn, j().AdminPageCtn) },
          r.createElement(
            "h1",
            { className: j().PageTitle },
            "Reservation Queue - Messaging Tools",
          ),
          r.createElement("hr", { className: "VO" }),
          r.createElement(
            "div",
            { className: j().ColumnCtn },
            r.createElement(
              "div",
              { className: j().LeftCol },
              r.createElement(
                "div",
                { className: j().SectionCtn },
                r.createElement(M, null),
              ),
              r.createElement(
                "div",
                { className: j().SectionCtn },
                r.createElement(x, null),
              ),
            ),
            r.createElement(
              "div",
              { className: j().RightCol },
              r.createElement(
                "div",
                { className: j().SectionCtn },
                r.createElement(F, null),
              ),
              r.createElement(
                "div",
                { className: j().SectionCtn },
                r.createElement(U, null),
              ),
              r.createElement(
                "div",
                { className: j().SectionCtn },
                r.createElement(S.JU, null, "Useful Links:"),
                r.createElement(
                  "ul",
                  null,
                  r.createElement(
                    "li",
                    null,
                    r.createElement(
                      "a",
                      {
                        href: `${p.TS.STATS_BASE_URL}steamdeck/reservations/`,
                        target: "_blank",
                      },
                      "Steam Deck reservation stats page",
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => T, CF: () => C, KM: () => E, KT: () => M });
      var r = n(41735),
        a = n.n(r),
        s = n(58632),
        i = n.n(s),
        o = n(90626),
        l = n(20194),
        c = n(75233),
        u = n(17720),
        d = n(68797),
        m = n(78327),
        g = n(56545),
        p = n(37735),
        _ = n(23809),
        f = n(7860);
      const h = "nicknames";
      function E(e) {
        const t = (0, _.KV)(),
          { data: n, isLoading: r } = (0, l.I)({
            queryKey: [h],
            queryFn: async () => {
              const e = new Map();
              if (m.iA.logged_in) {
                const n = g.w.Init(p.dN),
                  r = (await p.xt.GetNicknameList(t, n)).Body().toObject();
                r?.nicknames &&
                  r.nicknames.length > 0 &&
                  r.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const v = new (i())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, m.yK)()
                  ? m.TS.COMMUNITY_BASE_URL
                  : m.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  r = await a().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !r ||
                  200 != r.status ||
                  1 != r.data?.success ||
                  !r.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(r).strErrorMsg}`;
                return [r.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  r = await a().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !r ||
                  200 != r.status ||
                  1 != r.data?.success ||
                  !r.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(r).strErrorMsg}`;
                const s = new Map();
                return (
                  r.data.userinfos.forEach((e) =>
                    s.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        S = "avatarandpersonas";
      function M(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: [S, e],
          queryFn: () => v.load(e),
        });
        return [t, n];
      }
      function T(e) {
        const t = (0, c.jE)(),
          { data: n, isLoading: r } = (0, l.I)({
            queryKey: [S, e],
            queryFn: async () => {
              const n = await v.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [S, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          a = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return r ? null : a;
      }
      function C(e) {
        return f.L.getQueryData([S, e]);
      }
    },
    99637: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => v });
      var r = n(90626),
        a = n(92298),
        s = n.n(a),
        i = n(44894),
        o = n(44165),
        l = n(95695),
        c = n.n(l),
        u = n(52038),
        d = n(61859),
        m = n(32754),
        g = n(12916),
        p = n.n(g),
        _ = n(87937),
        f = n.n(_);
      const h = "hh:mm a",
        E = "HH:mm";
      function v(e) {
        const {
          nLatestTime: t,
          nEarliestTime: n,
          fnGetTimeToUpdate: a,
          onError: l,
          strAlsoShowTimeZone: g,
          disabled: _,
          bNoDefaultDate: v,
          className: C,
          strDescToolTip: b,
          strDescription: w,
          bShowTimeZone: y,
          strInvalidDateTimeLocalizedMsg: P,
          fnIsValidDateTime: A,
          bWeekdaysOnly: D,
          fnSetTimeToUpdate: R,
        } = e;
        let k = (function () {
          const e = f()("2025-01-14T13:00:00");
          return e.format("LT").toLowerCase().includes("13");
        })()
          ? E
          : h;
        const I = a(),
          [L, N] = r.useState(I > 0 ? f()(1e3 * I) : null),
          [G, B] = r.useState(),
          [x, F] = r.useState(),
          U = (function (e, t, n, a, s) {
            const i = a && a(),
              o = t && !M(t).isValid(),
              l = e && !T(e).isValid();
            let c = null;
            (l || o || "string" == typeof i || !1 === i) &&
              ((c = (0, d.we)(
                n || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              l
                ? (c = (0, d.we)("#DateTimePicker_Time_CannotParse"))
                : o
                  ? (c = (0, d.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof i && (c = i));
            return (
              r.useEffect(() => {
                s && s(c);
              }, [c, s]),
              c
            );
          })(G, x, P, A, l),
          Y = !l && U;
        let q, O;
        if (t && n && t == n && n > o.HD.GetTimeNowWithOverride()) {
          const e = f().unix(n);
          (q = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (k = E);
        }
        I || !n || v || (O = f().unix(n));
        const z = f().tz.guess(),
          V = f().unix(I).tz(z),
          W = !!g && z != g && f().unix(I).tz(g),
          {
            fnOnInput: Q,
            fnOnInputBlur: K,
            fnOnChange: H,
          } = S(
            M,
            (e) => {
              if (_) return;
              F(null);
              const t = a(),
                n = f().unix(t || o.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(n.hour()),
                e.minute(n.minute()),
                e.second(0),
                R(e.unix()),
                N(e);
            },
            F,
          ),
          {
            fnOnInput: j,
            fnOnInputBlur: $,
            fnOnChange: Z,
          } = S(
            T,
            (e) => {
              if (_) return;
              B(null);
              let t = a(),
                r = 0;
              if (t) {
                const n = f().unix(t);
                (e = e.clone()).year(n.year()),
                  e.month(n.month()),
                  e.date(n.date()),
                  (r = e.unix());
              } else {
                r =
                  f().unix(n).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              R(r), N(f().unix(r));
            },
            B,
          );
        return r.createElement(
          "div",
          { className: (0, u.A)(p().EventTimeSection, C) },
          r.createElement(
            "div",
            { className: (0, u.A)(p().EventTimeTitle, "DialogLabel") },
            r.createElement(
              m.he,
              { toolTipContent: b, direction: "top" },
              Boolean(w) && r.createElement("span", null, w),
            ),
            Y &&
              r.createElement(
                "span",
                { className: p().DateErrorCtn },
                r.createElement("img", { src: i.A }),
                Y,
              ),
          ),
          r.createElement(
            "div",
            { className: c().FlexRowContainer },
            r.createElement(
              "div",
              { className: (0, u.A)(c().InputBorder, p().TimeBlock) },
              r.createElement(s(), {
                onChange: H,
                timeFormat: !1,
                value: null != x ? x : L,
                isValidDate: (e) =>
                  !_ &&
                  (function (e, t, n, r) {
                    const a = f().unix(e).hour(0).seconds(0).minute(0);
                    let s = r.unix() >= a.unix();
                    if (s && t && t >= e) {
                      const e = f().unix(t).hour(23).minute(59).seconds(59);
                      s = r.unix() <= e.unix();
                    }
                    s &&
                      n &&
                      ((0 != r.weekday() && 6 != r.weekday()) || (s = !1));
                    return s;
                  })(n, t, D, e),
                initialValue: O,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Date"),
                  className: (0, u.A)(
                    p().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: _,
                  onChange: (e) => Q(e.currentTarget.value),
                  onBlur: (e) => K(e.currentTarget.value),
                },
              }),
              !!W &&
                r.createElement(
                  "div",
                  { className: p().PacificTimeHint },
                  W.format("L"),
                ),
            ),
            r.createElement(
              "div",
              { className: (0, u.A)(c().InputBorder, p().TimeBlock) },
              r.createElement(s(), {
                onChange: Z,
                dateFormat: !1,
                timeFormat: k,
                timeConstraints: q,
                value: null != G ? G : L,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Time"),
                  className: (0, u.A)(
                    p().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: _,
                  onChange: (e) => j(e.currentTarget.value),
                  onBlur: (e) => $(e.currentTarget.value),
                },
              }),
              !!W &&
                r.createElement(
                  "div",
                  { className: p().PacificTimeHint },
                  W.format("LT"),
                ),
            ),
            y &&
              r.createElement(
                "div",
                null,
                r.createElement(
                  "div",
                  { className: p().TimeZone },
                  V.zoneAbbr(),
                ),
                !!W &&
                  r.createElement(
                    "div",
                    { className: p().TimeZone },
                    W.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(q) &&
            r.createElement(
              "div",
              null,
              (0, d.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function S(e, t, n) {
        const [a, s] = r.useState(!1);
        return {
          fnOnInput: (e) => {
            n(e), s(!0);
          },
          fnOnInputBlur: (n) => {
            if (a) {
              const r = e(n);
              r.isValid() && t(r);
            }
            s(!1);
          },
          fnOnChange: (n) => {
            if (!a)
              if ("string" == typeof n) {
                const r = e(n);
                r.isValid() && t(r);
              } else t(n);
          },
        };
      }
      function M(e) {
        return f()(
          e,
          (function () {
            const e = f()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function T(e) {
        return f()(e, [h, E], !1);
      }
    },
    8905: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var r = n(90626),
        a = n(17720),
        s = n(27144),
        i = n(15736),
        o = n(78327);
      function l(e) {
        const { accountID: t, bHideWhenNotAvailable: n, bHideName: l } = e,
          [c] = (0, s.KT)(t),
          u = (0, s.KM)(t),
          d = r.useMemo(() => a.b.InitFromAccountID(t), [t]),
          m = `${o.TS.COMMUNITY_BASE_URL}profiles/${d.ConvertTo64BitString()}`;
        return r.createElement(
          r.Fragment,
          null,
          Boolean(!c)
            ? r.createElement(
                r.Fragment,
                null,
                Boolean(!n) && r.createElement("span", null, t),
              )
            : r.createElement(
                "a",
                { href: m },
                r.createElement("img", {
                  className: i.SmallAvatar,
                  src: c.avatar_url,
                  "data-miniprofile": "s" + d.ConvertTo64BitString(),
                }),
                Boolean(!l) &&
                  r.createElement(
                    "span",
                    null,
                    u ? `${u} (${c.persona_name})` : c.persona_name,
                  ),
              ),
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => g, qx: () => p });
      var r = n(16676),
        a = n(61859),
        s = n(12155),
        i = n(90626),
        o = n(52038),
        l = n(95695),
        c = n(84811),
        u = n(64734),
        d = n(65946),
        m = n(26408);
      function g(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: r,
            toggleMinimized: a,
            className: s,
            children: g,
          } = e,
          p = (0, d.q3)(() => r());
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: (0, o.A)(
                s,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            i.createElement(
              "div",
              {
                className: (0, o.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && i.createElement(m.o, { tooltip: n }),
            ),
            i.createElement(_, { bIsMinimized: p, fnToggleMinimize: a }),
          ),
          !p && i.createElement(c.tH, null, g),
        );
      }
      function p(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return i.createElement(
          g,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          r.$n,
          { "data-tooltip-text": (0, a.we)(o), onClick: n },
          e.bIsMinimized
            ? i.createElement(s.hz4, null)
            : i.createElement(s.Xjb, null),
        );
      }
    },
    4434: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => i });
      var r = n(41735),
        a = n.n(r),
        s = n(90626);
      function i(e) {
        const t = s.useRef(a().CancelToken.source());
        return (
          s.useEffect(() => {
            const n = t.current;
            return () => n.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    68797: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => i });
      var r = n(41735),
        a = n.n(r),
        s = n(56545);
      function i(e) {
        if (a().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof s.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    44894: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

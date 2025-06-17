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
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    43709: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => $ });
      var i = n(90626),
        a = n(24484);
      const o = (0, a.Tc)("physical_goods", "application_config");
      var s = n(34629),
        r = n(56545),
        l = n(75487),
        c = n(96059),
        u = n(81393),
        m = n(68797),
        d = n(6144),
        _ = n(73745),
        g = n(30470);
      class p {
        m_mapProductPositionMsgList = new Map();
        m_productListChangeCallback = new d.lu();
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
              this.m_messageListChangeCallback.set(e, new d.lu()),
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
          const t = r.w.Init(l.ku);
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
            const i = await l.nd.SetReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == i.GetEResult()) {
              const t = new Set(),
                n = Math.floor(Date.now() / 1e3);
              return (
                e.forEach((e) => {
                  (e.accountid = g.iA.accountid), (e.rtime_created = n);
                  const i = this.GetKey(e);
                  let a = this.m_mapProductPositionMsgList.get(i);
                  const o = a.findIndex(
                    (t) => t.start_queue_position == e.start_queue_position,
                  );
                  let s = [...a];
                  o >= 0 ? (s[o] = e) : (s.push(e), this.SortList(s)),
                    this.m_mapProductPositionMsgList.set(i, s),
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
            n = (0, m.H)(i);
          } catch (e) {
            n = (0, m.H)(e);
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
          const t = r.w.Init(l.$J);
          t.Body().set_edistributor(e.edistributor),
            t.Body().set_product_identifier(e.product_identifier),
            t.Body().set_start_queue_position(e.start_queue_position);
          let n = null;
          try {
            const i = await l.nd.DeleteReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == i.GetEResult()) {
              const t = this.GetKey(e);
              let n = this.m_mapProductPositionMsgList.get(t);
              const i = n.findIndex(
                  (t) => t.start_queue_position == e.start_queue_position,
                ),
                a = [...n];
              return (
                a.splice(i, 1),
                this.m_mapProductPositionMsgList.set(t, a),
                this.GetPositionListChangeCallback(e).Dispatch(a),
                !0
              );
            }
            n = (0, m.H)(i);
          } catch (e) {
            n = (0, m.H)(e);
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
          const e = r.w.Init(l.jd);
          return await l.nd.ReloadAllReservationPositionMessages(
            this.m_steamInterface.GetServiceTransport(),
            e,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == g.TS.WEB_UNIVERSE &&
                (window.g_ReservationMessagingStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, a.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, u.wT)(Boolean(e), "require promotion_operation_token"),
            "dev" == g.TS.WEB_UNIVERSE &&
              console.log(
                "DEV_DEBUG Initializing CReservationMessagingStore with access token ",
                e,
              ),
            (this.m_steamInterface = new c.D(g.TS.WEBAPI_BASE_URL, e));
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
      function h() {
        const [e, t] = (0, i.useState)(() => p.Get().GetAllProducts());
        return (0, _.hL)(p.Get().GetProductListChangeCallback(), t), e;
      }
      function f() {
        const e = p.Get();
        return {
          fnAddProductID: e.AddProductID,
          fnSetPositionMessages: e.SetPositionMessages,
          fnDeletePositionMessage: e.DeletePositionMessage,
          fnReloadReservationPositionMessages:
            e.ReloadReservationPositionMessages,
        };
      }
      (0, s.Cg)([_.oI], p.prototype, "AddProductID", null),
        (0, s.Cg)([_.oI], p.prototype, "SetPositionMessages", null),
        (0, s.Cg)([_.oI], p.prototype, "DeletePositionMessage", null),
        (0, s.Cg)(
          [_.oI],
          p.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var E = n(82359),
        S = n(65285),
        v = n(16676);
      function M(e) {
        const [t, n] = (0, i.useState)(null),
          { fnAddProductID: a } = f();
        return i.createElement(
          "div",
          null,
          i.createElement(v.JU, null, "Add Product SKU:"),
          i.createElement(
            "p",
            null,
            "Select an item for which we want to communicate a reservation status.",
          ),
          i.createElement(T, { selected: t, setSelected: n }),
          i.createElement(
            v.$n,
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
          a = (0, i.useRef)(void 0),
          s = (function () {
            const [e] = (0, i.useState)(() => o);
            return e;
          })(),
          r = h(),
          l = (0, i.useMemo)(
            () =>
              s && r
                ? s
                    .filter(
                      (e) =>
                        -1 ==
                        r.findIndex(
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
            [s, r],
          );
        (0, i.useEffect)(() => {
          a?.current && a.current.clearValue();
        }, [r]);
        const c = l?.find(
          (e) =>
            t &&
            t.edistributor == e.value.edistributor &&
            t.product_identifier == e.value.product_identifier,
        );
        return i.createElement(E.Ay, {
          isSearchable: !0,
          ref: a,
          isMulti: !1,
          isClearable: !0,
          className: S.ItemSelect,
          options: l,
          value: c,
          onChange: (e) => {
            e && n(e);
          },
        });
      }
      var b = n(71298),
        w = n(99637),
        P = n(8905),
        y = n(9154),
        C = n(738),
        D = n(48479),
        A = n(56011),
        R = n(61859),
        k = n(95695),
        I = n(92825),
        N = n.n(I),
        L = n(44165);
      function G(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function B(e) {
        const { strToken: t, rtEstimatedNotifcationDate: n } = e,
          a = new Date(1e3 * n),
          o = a.getMonth() + 1;
        let s = "",
          r = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            s = "" + a.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (s = (0, R.we)("#Sale_Reservation_MonthNoun_" + o)),
              (r = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (s = (0, R.we)("#Sale_Reservation_MonthNoun_" + G(o, 1))),
              (r = (0, R.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (s = (0, R.we)("#Sale_Reservation_MonthNoun_" + G(o, 2))),
              (r = (0, R.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (s = (0, R.we)("#Sale_Reservation_MonthNoun_" + G(o, 3))),
              (r = (0, R.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((o - 1) / 3) + 1)),
              (s = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((o - 1) / 3) + 1)),
              (s = (0, R.we)("#Sale_Reservation_MonthNoun_" + o)),
              (r = "" + a.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = L.HD.GetTimeNowWithOverride(),
                t = Math.floor((n - e) / 86400);
              t < 7 ||
                (t < 28
                  ? ((c = "#Sale_Reservation_RelativeWeekly_Plural"),
                    (s = "" + Math.floor(t / 7 + 1)))
                  : ((c = "#Sale_Reservation_RelativeMonthly"),
                    (s = "" + Math.floor(t / 28 + 1))));
            }
            break;
          default:
            c = "#Sale_Reservation_Fallback";
        }
        return i.createElement(
          "div",
          { className: N().Ctn },
          (0, R.we)(c, s, r, l, ""),
        );
      }
      function x(e) {
        const t = h();
        return t && 0 != t.length
          ? i.createElement(
              "div",
              null,
              t.map((e) =>
                i.createElement(q, {
                  key: `${e.edistributor}_${e.product_identifier}`,
                  productID: e,
                }),
              ),
            )
          : i.createElement(
              "div",
              null,
              "No products with reservation position messages exists.",
            );
      }
      function F(e) {
        return i.createElement(
          "div",
          null,
          i.createElement(v.JU, null, "instructions:"),
          i.createElement(
            "p",
            null,
            "Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.",
          ),
          i.createElement(
            "p",
            null,
            "Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.",
          ),
        );
      }
      function Y(e) {
        h();
        return i.createElement(
          "div",
          null,
          i.createElement(v.JU, null, "Force update:"),
          i.createElement(
            "p",
            null,
            "By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.",
          ),
          i.createElement(
            "p",
            null,
            "We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.",
          ),
          i.createElement(
            v.$n,
            {
              onClick: (e) => (0, C.pg)(i.createElement(V, null), (0, A.uX)(e)),
            },
            "Force Reload Definitions on Steam Servers",
          ),
        );
      }
      function q(e) {
        const { productID: t } = e,
          n = (function (e) {
            return o.find(
              (t) =>
                t.edistributor == e.edistributor &&
                t.product_identifier == e.product_identifier,
            );
          })(t),
          a = n.product_description + " " + n.distributor,
          s = (function (e) {
            const [t, n] = (0, i.useState)(() =>
              p.Get().GetPositionMessagingForProduct(e),
            );
            return (0, _.hL)(p.Get().GetPositionListChangeCallback(e), n), t;
          })(t);
        return i.createElement(
          D.qx,
          {
            bStartMinimized: !1,
            title: a,
            tooltip: `distributor enum: ${n.edistributor}, part number: ${n.part_number}, product identifier: ${n.product_identifier}`,
          },
          i.createElement(
            v.$n,
            {
              onClick: (e) =>
                (0, C.pg)(i.createElement(z, { productID: t }), (0, A.uX)(e)),
            },
            "Add new start position",
          ),
          i.createElement(
            "table",
            { className: S.ItemTable },
            i.createElement(
              "thead",
              null,
              i.createElement(
                "tr",
                null,
                i.createElement("th", null, "Starting Queue Position"),
                i.createElement("th", null, "Estimate Date Receive Invite"),
                i.createElement("th", null, "Localized Date"),
                i.createElement("th", null, "Entry Created By"),
                i.createElement("th", null),
              ),
            ),
            i.createElement(
              "tbody",
              null,
              s.map((e) =>
                i.createElement(U, {
                  key: a + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function U(e) {
        const { positionMsg: t } = e;
        return i.createElement(
          "tr",
          null,
          i.createElement("td", null, t.start_queue_position.toLocaleString()),
          i.createElement(
            "td",
            null,
            (0, R.TW)(t.rtime_estimated_notification),
          ),
          i.createElement(
            "td",
            null,
            i.createElement(B, {
              rtEstimatedNotifcationDate: t.rtime_estimated_notification,
              strToken: t.localization_token,
            }),
          ),
          i.createElement(
            "td",
            null,
            i.createElement(
              "div",
              null,
              i.createElement(P.p, { accountID: t.accountid }),
            ),
            i.createElement("br", null),
            "On: ",
            (0, R.TW)(t.rtime_created),
          ),
          i.createElement(
            "td",
            null,
            i.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, C.pg)(
                    i.createElement(z, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, A.uX)(e),
                  ),
              },
              "Update",
            ),
            i.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, C.pg)(
                    i.createElement(O, { positionMsg: t }),
                    (0, A.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function z(e) {
        const { productID: t, existingPositionMsg: n, closeModal: a } = e,
          { fnSetPositionMessages: o } = f(),
          s = Math.floor(Date.now() / 1e3),
          [r, l] = (0, i.useState)(n?.start_queue_position || 0),
          [c, u] = (0, i.useState)(
            n?.rtime_estimated_notification || s + 86400,
          ),
          [m, d] = (0, i.useState)(
            n?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          _ = n ? "Update Queue Range" : "Create Queue Range",
          g = (0, b.vs)();
        return g.bLoading
          ? i.createElement(b.Hh, {
              state: g,
              strDialogTitle: _,
              closeModal: a,
            })
          : i.createElement(
              y.o0,
              {
                bDisableBackgroundDismiss: !0,
                strTitle: _,
                onCancel: a,
                onOK: () => {
                  g.fnSetLoading(!0);
                  const e = {
                    ...t,
                    start_queue_position: r,
                    rtime_estimated_notification: c,
                    localization_token: m,
                  };
                  o([e]).then((e) => {
                    e
                      ? (g.fnSetSuccess(!0),
                        g.fnSetStrSuccess("Successfully created position"))
                      : (g.fnSetSuccess(!1),
                        g.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
                },
              },
              i.createElement(
                "div",
                { className: S.NewEntryCtn },
                i.createElement(
                  "p",
                  null,
                  "When we get to accepting reservation number ",
                  i.createElement("i", null, "n"),
                  ", show those users a date they can anticipate to recieve an invite to purchase.",
                ),
                i.createElement(v.pd, {
                  type: "number",
                  min: "0",
                  value: r,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                i.createElement(w.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: s,
                  fnGetTimeToUpdate: () => c,
                  fnSetTimeToUpdate: u,
                }),
                i.createElement("br", null),
                i.createElement(K, {
                  strToken: m,
                  fnSetToken: d,
                  rtEstimateDate: c,
                }),
              ),
            );
      }
      function O(e) {
        const { positionMsg: t, closeModal: n } = e,
          { fnDeletePositionMessage: a } = f(),
          o = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          s = (0, b.vs)();
        return s.bLoading
          ? i.createElement(b.Hh, {
              state: s,
              strDialogTitle: o,
              closeModal: n,
            })
          : i.createElement(y.o0, {
              strTitle: o,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: n,
              onOK: () => {
                s.fnSetLoading(!0),
                  a(t).then((e) => {
                    e
                      ? (s.fnSetSuccess(!0),
                        s.fnSetStrSuccess("Successfully delete position"))
                      : (s.fnSetSuccess(!1),
                        s.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
              },
            });
      }
      function V(e) {
        const { closeModal: t } = e,
          { fnReloadReservationPositionMessages: n } = f(),
          [a, o] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            n().then(() => o(!0));
          }, [n]),
          i.createElement(y.o0, {
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
      function K(e) {
        const { strToken: t, fnSetToken: n, rtEstimateDate: a } = e,
          o = (0, i.useMemo)(
            () =>
              W.map((e) => ({
                label: i.createElement(B, {
                  strToken: e,
                  rtEstimatedNotifcationDate: a,
                }),
                data: e,
              })),
            [a],
          );
        return i.createElement(
          "div",
          null,
          i.createElement(v.m, {
            strDropDownClassName: k.DropDownScroll,
            label: "Date Format",
            rgOptions: o,
            selectedOption: t,
            onChange: (e) => n(e.data),
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          i.createElement(
            "div",
            null,
            i.createElement("h3", null, "This will display to users as: "),
            i.createElement(
              "div",
              { className: S.DatePreview },
              i.createElement(
                "div",
                null,
                (0, R.we)("#Sale_Reservation_ExpectedDate"),
              ),
              i.createElement(B, {
                rtEstimatedNotifcationDate: a,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var Q = n(52038),
        H = n(45737),
        Z = n.n(H);
      function $(e) {
        return i.createElement(
          "div",
          { className: (0, Q.A)(S.ctn, Z().AdminPageCtn) },
          i.createElement(
            "h1",
            { className: Z().PageTitle },
            "Reservation Queue - Messaging Tools",
          ),
          i.createElement("hr", { className: "VO" }),
          i.createElement(
            "div",
            { className: Z().ColumnCtn },
            i.createElement(
              "div",
              { className: Z().LeftCol },
              i.createElement(
                "div",
                { className: Z().SectionCtn },
                i.createElement(M, null),
              ),
              i.createElement(
                "div",
                { className: Z().SectionCtn },
                i.createElement(x, null),
              ),
            ),
            i.createElement(
              "div",
              { className: Z().RightCol },
              i.createElement(
                "div",
                { className: Z().SectionCtn },
                i.createElement(F, null),
              ),
              i.createElement(
                "div",
                { className: Z().SectionCtn },
                i.createElement(Y, null),
              ),
              i.createElement(
                "div",
                { className: Z().SectionCtn },
                i.createElement(v.JU, null, "Useful Links:"),
                i.createElement(
                  "ul",
                  null,
                  i.createElement(
                    "li",
                    null,
                    i.createElement(
                      "a",
                      {
                        href: `${g.TS.STATS_BASE_URL}steamdeck/reservations/`,
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
      n.d(t, { B3: () => T, CF: () => b, KM: () => E, KT: () => M });
      var i = n(41735),
        a = n.n(i),
        o = n(58632),
        s = n.n(o),
        r = n(90626),
        l = n(20194),
        c = n(75233),
        u = n(17720),
        m = n(68797),
        d = n(78327),
        _ = n(56545),
        g = n(37735),
        p = n(23809),
        h = n(7860);
      const f = "nicknames";
      function E(e) {
        const t = (0, p.KV)(),
          { data: n, isLoading: i } = (0, l.I)({
            queryKey: [f],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const n = _.w.Init(g.dN),
                  i = (await g.xt.GetNicknameList(t, n)).Body().toObject();
                i?.nicknames &&
                  i.nicknames.length > 0 &&
                  i.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const S = new (s())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, d.yK)()
                  ? d.TS.COMMUNITY_BASE_URL
                  : d.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  i = await a().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !i ||
                  200 != i.status ||
                  1 != i.data?.success ||
                  !i.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(i).strErrorMsg}`;
                return [i.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  i = await a().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !i ||
                  200 != i.status ||
                  1 != i.data?.success ||
                  !i.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(i).strErrorMsg}`;
                const o = new Map();
                return (
                  i.data.userinfos.forEach((e) =>
                    o.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => o.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        v = "avatarandpersonas";
      function M(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: [v, e],
          queryFn: () => S.load(e),
        });
        return [t, n];
      }
      function T(e) {
        const t = (0, c.jE)(),
          { data: n, isLoading: i } = (0, l.I)({
            queryKey: [v, e],
            queryFn: async () => {
              const n = await S.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [v, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          a = (0, r.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return i ? null : a;
      }
      function b(e) {
        return h.L.getQueryData([v, e]);
      }
    },
    99637: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => S });
      var i = n(90626),
        a = n(92298),
        o = n.n(a),
        s = n(44894),
        r = n(44165),
        l = n(95695),
        c = n.n(l),
        u = n(52038),
        m = n(61859),
        d = n(32754),
        _ = n(12916),
        g = n.n(_),
        p = n(87937),
        h = n.n(p);
      const f = "hh:mm a",
        E = "HH:mm";
      function S(e) {
        const {
          nLatestTime: t,
          nEarliestTime: n,
          fnGetTimeToUpdate: a,
          onError: l,
          strAlsoShowTimeZone: _,
          disabled: p,
          bNoDefaultDate: S,
          className: b,
          strDescToolTip: w,
          strDescription: P,
          bShowTimeZone: y,
          strInvalidDateTimeLocalizedMsg: C,
          fnIsValidDateTime: D,
          bWeekdaysOnly: A,
          fnSetTimeToUpdate: R,
          bForce24HourFormat: k,
        } = e;
        let I =
          (function () {
            const e = h()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || k
            ? E
            : f;
        const N = a(),
          [L, G] = i.useState(N > 0 ? h()(1e3 * N) : null),
          [B, x] = i.useState(),
          [F, Y] = i.useState(),
          q = (function (e, t, n, a, o) {
            const s = a && a(),
              r = t && !M(t).isValid(),
              l = e && !T(e).isValid();
            let c = null;
            (l || r || "string" == typeof s || !1 === s) &&
              ((c = (0, m.we)(
                n || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              l
                ? (c = (0, m.we)("#DateTimePicker_Time_CannotParse"))
                : r
                  ? (c = (0, m.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof s && (c = s));
            return (
              i.useEffect(() => {
                o && o(c);
              }, [c, o]),
              c
            );
          })(B, F, C, D, l),
          U = !l && q;
        let z, O;
        if (t && n && t == n && n > r.HD.GetTimeNowWithOverride()) {
          const e = h().unix(n);
          (z = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (I = E);
        }
        N || !n || S || (O = h().unix(n));
        const V = h().tz.guess(),
          W = h().unix(N).tz(V),
          K = !!_ && V != _ && h().unix(N).tz(_),
          {
            fnOnInput: Q,
            fnOnInputBlur: H,
            fnOnChange: Z,
          } = v(
            M,
            (e) => {
              if (p) return;
              Y(null);
              const t = a(),
                n = h().unix(t || r.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(n.hour()),
                e.minute(n.minute()),
                e.second(0),
                R(e.unix()),
                G(e);
            },
            Y,
          ),
          {
            fnOnInput: $,
            fnOnInputBlur: j,
            fnOnChange: J,
          } = v(
            T,
            (e) => {
              if (p) return;
              x(null);
              let t = a(),
                i = 0;
              if (t) {
                const n = h().unix(t);
                (e = e.clone()).year(n.year()),
                  e.month(n.month()),
                  e.date(n.date()),
                  (i = e.unix());
              } else {
                i =
                  h().unix(n).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              R(i), G(h().unix(i));
            },
            x,
          );
        return i.createElement(
          "div",
          { className: (0, u.A)(g().EventTimeSection, b) },
          i.createElement(
            "div",
            { className: (0, u.A)(g().EventTimeTitle, "DialogLabel") },
            i.createElement(
              d.he,
              { toolTipContent: w, direction: "top" },
              Boolean(P) && i.createElement("span", null, P),
            ),
            U &&
              i.createElement(
                "span",
                { className: g().DateErrorCtn },
                i.createElement("img", { src: s.A }),
                U,
              ),
          ),
          i.createElement(
            "div",
            { className: c().FlexRowContainer },
            i.createElement(
              "div",
              { className: (0, u.A)(c().InputBorder, g().TimeBlock) },
              i.createElement(o(), {
                onChange: Z,
                timeFormat: !1,
                value: null != F ? F : L,
                isValidDate: (e) =>
                  !p &&
                  (function (e, t, n, i) {
                    const a = h().unix(e).hour(0).seconds(0).minute(0);
                    let o = i.unix() >= a.unix();
                    if (o && t && t >= e) {
                      const e = h().unix(t).hour(23).minute(59).seconds(59);
                      o = i.unix() <= e.unix();
                    }
                    o &&
                      n &&
                      ((0 != i.weekday() && 6 != i.weekday()) || (o = !1));
                    return o;
                  })(n, t, A, e),
                initialValue: O,
                inputProps: {
                  placeholder: (0, m.we)("#DateTimePicker_Enter_Date"),
                  className: (0, u.A)(
                    g().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: p,
                  onChange: (e) => Q(e.currentTarget.value),
                  onBlur: (e) => H(e.currentTarget.value),
                },
              }),
              !!K &&
                i.createElement(
                  "div",
                  { className: g().PacificTimeHint },
                  K.format("L"),
                ),
            ),
            i.createElement(
              "div",
              { className: (0, u.A)(c().InputBorder, g().TimeBlock) },
              i.createElement(o(), {
                onChange: J,
                dateFormat: !1,
                timeFormat: I,
                timeConstraints: z,
                value: null != B ? B : L,
                inputProps: {
                  placeholder: (0, m.we)("#DateTimePicker_Enter_Time"),
                  className: (0, u.A)(
                    g().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: p,
                  onChange: (e) => $(e.currentTarget.value),
                  onBlur: (e) => j(e.currentTarget.value),
                },
              }),
              !!K &&
                i.createElement(
                  "div",
                  { className: g().PacificTimeHint },
                  K.format("LT"),
                ),
            ),
            y &&
              i.createElement(
                "div",
                null,
                i.createElement(
                  "div",
                  { className: g().TimeZone },
                  W.zoneAbbr(),
                ),
                !!K &&
                  i.createElement(
                    "div",
                    { className: g().TimeZone },
                    K.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(z) &&
            i.createElement(
              "div",
              null,
              (0, m.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function v(e, t, n) {
        const [a, o] = i.useState(!1);
        return {
          fnOnInput: (e) => {
            n(e), o(!0);
          },
          fnOnInputBlur: (n) => {
            if (a) {
              const i = e(n);
              i.isValid() && t(i);
            }
            o(!1);
          },
          fnOnChange: (n) => {
            if (!a)
              if ("string" == typeof n) {
                const i = e(n);
                i.isValid() && t(i);
              } else t(n);
          },
        };
      }
      function M(e) {
        return h()(
          e,
          (function () {
            const e = h()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function T(e) {
        return h()(e, [f, E], !1);
      }
    },
    8905: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var i = n(90626),
        a = n(17720),
        o = n(27144),
        s = n(15736),
        r = n(78327);
      function l(e) {
        const { accountID: t, bHideWhenNotAvailable: n, bHideName: l } = e,
          [c] = (0, o.KT)(t),
          u = (0, o.KM)(t),
          m = i.useMemo(() => a.b.InitFromAccountID(t), [t]),
          d = `${r.TS.COMMUNITY_BASE_URL}profiles/${m.ConvertTo64BitString()}`;
        return i.createElement(
          i.Fragment,
          null,
          Boolean(!c)
            ? i.createElement(
                i.Fragment,
                null,
                Boolean(!n) && i.createElement("span", null, t),
              )
            : i.createElement(
                "a",
                { href: d },
                i.createElement("img", {
                  className: s.SmallAvatar,
                  src: c.avatar_url,
                  "data-miniprofile": "s" + m.ConvertTo64BitString(),
                }),
                Boolean(!l) &&
                  i.createElement(
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
      n.d(t, { AQ: () => _, pn: () => p, qx: () => g });
      var i = n(16676),
        a = n(61859),
        o = n(12155),
        s = n(90626),
        r = n(52038),
        l = n(95695),
        c = n(84811),
        u = n(64734),
        m = n(65946),
        d = n(26408);
      function _(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: i,
            toggleMinimized: a,
            className: o,
            children: _,
            elAdditionalButtons: g,
          } = e,
          h = (0, m.q3)(() => i());
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, r.A)(
                o,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            s.createElement(
              "div",
              {
                className: (0, r.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && s.createElement(d.o, { tooltip: n }),
            ),
            s.createElement(
              "div",
              { className: u.SectionTitleButtons },
              g,
              s.createElement(p, { bIsMinimized: h, fnToggleMinimize: a }),
            ),
          ),
          !h && s.createElement(c.tH, null, _),
        );
      }
      function g(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          _,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          r = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          i.$n,
          { "data-tooltip-text": (0, a.we)(r), onClick: n },
          e.bIsMinimized
            ? s.createElement(o.hz4, null)
            : s.createElement(o.Xjb, null),
        );
      }
    },
    44894: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

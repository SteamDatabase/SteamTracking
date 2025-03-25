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
    92825: (e) => {
      e.exports = { Ctn: "_3gnQfZ3NUW9NFF3WllsQ6b" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    43709: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => j });
      var r = n(90626),
        s = n(24484);
      const o = (0, s.Tc)("physical_goods", "application_config");
      var i = n(34629),
        a = n(56545),
        l = n(75487),
        c = n(96059),
        u = n(44332),
        d = n(68797),
        m = n(6144),
        _ = n(73745),
        g = n(30470);
      class p {
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
          const t = a.w.Init(l.ku);
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
                  (e.accountid = g.iA.accountid), (e.rtime_created = n);
                  const r = this.GetKey(e);
                  let s = this.m_mapProductPositionMsgList.get(r);
                  const o = s.findIndex(
                    (t) => t.start_queue_position == e.start_queue_position,
                  );
                  let i = [...s];
                  o >= 0 ? (i[o] = e) : (i.push(e), this.SortList(i)),
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
          const t = a.w.Init(l.$J);
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
                s = [...n];
              return (
                s.splice(r, 1),
                this.m_mapProductPositionMsgList.set(t, s),
                this.GetPositionListChangeCallback(e).Dispatch(s),
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
          const e = a.w.Init(l.jd);
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
          const e = (0, s.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, u.w)(Boolean(e), "require promotion_operation_token"),
            "dev" == g.TS.WEB_UNIVERSE &&
              console.log(
                "DEV_DEBUG Initializing CReservationMessagingStore with access token ",
                e,
              ),
            (this.m_steamInterface = new c.D(g.TS.WEBAPI_BASE_URL, e));
          const t = (0, s.Tc)(
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
        const [e, t] = (0, r.useState)(() => p.Get().GetAllProducts());
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
      (0, i.Cg)([_.oI], p.prototype, "AddProductID", null),
        (0, i.Cg)([_.oI], p.prototype, "SetPositionMessages", null),
        (0, i.Cg)([_.oI], p.prototype, "DeletePositionMessage", null),
        (0, i.Cg)(
          [_.oI],
          p.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var E = n(82359),
        S = n(65285),
        v = n(16676);
      function M(e) {
        const [t, n] = (0, r.useState)(null),
          { fnAddProductID: s } = f();
        return r.createElement(
          "div",
          null,
          r.createElement(v.JU, null, "Add Product SKU:"),
          r.createElement(
            "p",
            null,
            "Select an item for which we want to communicate a reservation status.",
          ),
          r.createElement(b, { selected: t, setSelected: n }),
          r.createElement(
            v.$n,
            {
              disabled: !t,
              onClick: () => {
                s(t), n(null);
              },
            },
            "Add ",
            t?.product_description,
            " To List",
          ),
        );
      }
      function b(e) {
        const { selected: t, setSelected: n } = e,
          s = (0, r.useRef)(void 0),
          i = (function () {
            const [e] = (0, r.useState)(() => o);
            return e;
          })(),
          a = h(),
          l = (0, r.useMemo)(
            () =>
              i && a
                ? i
                    .filter(
                      (e) =>
                        -1 ==
                        a.findIndex(
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
            [i, a],
          );
        (0, r.useEffect)(() => {
          s?.current && s.current.clearValue();
        }, [a]);
        const c = l?.find(
          (e) =>
            t &&
            t.edistributor == e.value.edistributor &&
            t.product_identifier == e.value.product_identifier,
        );
        return r.createElement(E.Ay, {
          isSearchable: !0,
          ref: s,
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
      var C = n(71298),
        R = n(99637),
        P = n(8905),
        w = n(9154),
        k = n(738),
        y = n(48479),
        D = n(56011),
        T = n(61859),
        L = n(95695),
        I = n(92825),
        N = n.n(I),
        A = n(44165);
      function G(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function q(e) {
        const { strToken: t, rtEstimatedNotifcationDate: n } = e,
          s = new Date(1e3 * n),
          o = s.getMonth() + 1;
        let i = "",
          a = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            i = "" + s.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (a = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + G(o, 1))),
              (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + G(o, 2))),
              (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + G(o, 3))),
              (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((o - 1) / 3) + 1)),
              (i = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((o - 1) / 3) + 1)),
              (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (a = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = A.HD.GetTimeNowWithOverride(),
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
          { className: N().Ctn },
          (0, T.we)(c, i, a, l, ""),
        );
      }
      function F(e) {
        const t = h();
        return t && 0 != t.length
          ? r.createElement(
              "div",
              null,
              t.map((e) =>
                r.createElement(U, {
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
      function z(e) {
        return r.createElement(
          "div",
          null,
          r.createElement(v.JU, null, "instructions:"),
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
      function Y(e) {
        h();
        return r.createElement(
          "div",
          null,
          r.createElement(v.JU, null, "Force update:"),
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
            v.$n,
            {
              onClick: (e) => (0, k.pg)(r.createElement(B, null), (0, D.uX)(e)),
            },
            "Force Reload Definitions on Steam Servers",
          ),
        );
      }
      function U(e) {
        const { productID: t } = e,
          n = (function (e) {
            return o.find(
              (t) =>
                t.edistributor == e.edistributor &&
                t.product_identifier == e.product_identifier,
            );
          })(t),
          s = n.product_description + " " + n.distributor,
          i = (function (e) {
            const [t, n] = (0, r.useState)(() =>
              p.Get().GetPositionMessagingForProduct(e),
            );
            return (0, _.hL)(p.Get().GetPositionListChangeCallback(e), n), t;
          })(t);
        return r.createElement(
          y.qx,
          {
            bStartMinimized: !1,
            title: s,
            tooltip: `distributor enum: ${n.edistributor}, part number: ${n.part_number}, product identifier: ${n.product_identifier}`,
          },
          r.createElement(
            v.$n,
            {
              onClick: (e) =>
                (0, k.pg)(r.createElement(Q, { productID: t }), (0, D.uX)(e)),
            },
            "Add new start position",
          ),
          r.createElement(
            "table",
            { className: S.ItemTable },
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
                r.createElement($, {
                  key: s + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function $(e) {
        const { positionMsg: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.start_queue_position.toLocaleString()),
          r.createElement(
            "td",
            null,
            (0, T.TW)(t.rtime_estimated_notification),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(q, {
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
              r.createElement(P.p, { accountID: t.accountid }),
            ),
            r.createElement("br", null),
            "On: ",
            (0, T.TW)(t.rtime_created),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, k.pg)(
                    r.createElement(Q, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, D.uX)(e),
                  ),
              },
              "Update",
            ),
            r.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, k.pg)(
                    r.createElement(x, { positionMsg: t }),
                    (0, D.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function Q(e) {
        const { productID: t, existingPositionMsg: n, closeModal: s } = e,
          { fnSetPositionMessages: o } = f(),
          i = Math.floor(Date.now() / 1e3),
          [a, l] = (0, r.useState)(n?.start_queue_position || 0),
          [c, u] = (0, r.useState)(
            n?.rtime_estimated_notification || i + 86400,
          ),
          [d, m] = (0, r.useState)(
            n?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          _ = n ? "Update Queue Range" : "Create Queue Range",
          g = (0, C.vs)();
        return g.bLoading
          ? r.createElement(C.Hh, {
              state: g,
              strDialogTitle: _,
              closeModal: s,
            })
          : r.createElement(
              w.o0,
              {
                bDisableBackgroundDismiss: !0,
                strTitle: _,
                onCancel: s,
                onOK: () => {
                  g.fnSetLoading(!0);
                  const e = {
                    ...t,
                    start_queue_position: a,
                    rtime_estimated_notification: c,
                    localization_token: d,
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
              r.createElement(
                "div",
                { className: S.NewEntryCtn },
                r.createElement(
                  "p",
                  null,
                  "When we get to accepting reservation number ",
                  r.createElement("i", null, "n"),
                  ", show those users a date they can anticipate to recieve an invite to purchase.",
                ),
                r.createElement(v.pd, {
                  type: "number",
                  min: "0",
                  value: a,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                r.createElement(R.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: i,
                  fnGetTimeToUpdate: () => c,
                  fnSetTimeToUpdate: u,
                }),
                r.createElement("br", null),
                r.createElement(O, {
                  strToken: d,
                  fnSetToken: m,
                  rtEstimateDate: c,
                }),
              ),
            );
      }
      function x(e) {
        const { positionMsg: t, closeModal: n } = e,
          { fnDeletePositionMessage: s } = f(),
          o = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          i = (0, C.vs)();
        return i.bLoading
          ? r.createElement(C.Hh, {
              state: i,
              strDialogTitle: o,
              closeModal: n,
            })
          : r.createElement(w.o0, {
              strTitle: o,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: n,
              onOK: () => {
                i.fnSetLoading(!0),
                  s(t).then((e) => {
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
      function B(e) {
        const { closeModal: t } = e,
          { fnReloadReservationPositionMessages: n } = f(),
          [s, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            n().then(() => o(!0));
          }, [n]),
          r.createElement(w.o0, {
            bAlertDialog: !0,
            strTitle: "Reload Definition",
            strDescription: s
              ? "Reloading..."
              : "Reload send to server, safe to close dialog",
            closeModal: t,
          })
        );
      }
      const K = [
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
      function O(e) {
        const { strToken: t, fnSetToken: n, rtEstimateDate: s } = e,
          o = (0, r.useMemo)(
            () =>
              K.map((e) => ({
                label: r.createElement(q, {
                  strToken: e,
                  rtEstimatedNotifcationDate: s,
                }),
                data: e,
              })),
            [s],
          );
        return r.createElement(
          "div",
          null,
          r.createElement(v.m, {
            strDropDownClassName: L.DropDownScroll,
            label: "Date Format",
            rgOptions: o,
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
              { className: S.DatePreview },
              r.createElement(
                "div",
                null,
                (0, T.we)("#Sale_Reservation_ExpectedDate"),
              ),
              r.createElement(q, {
                rtEstimatedNotifcationDate: s,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var W = n(52038),
        H = n(45737),
        V = n.n(H);
      function j(e) {
        return r.createElement(
          "div",
          { className: (0, W.A)(S.ctn, V().AdminPageCtn) },
          r.createElement(
            "h1",
            { className: V().PageTitle },
            "Reservation Queue - Messaging Tools",
          ),
          r.createElement("hr", { className: "VO" }),
          r.createElement(
            "div",
            { className: V().ColumnCtn },
            r.createElement(
              "div",
              { className: V().LeftCol },
              r.createElement(
                "div",
                { className: V().SectionCtn },
                r.createElement(M, null),
              ),
              r.createElement(
                "div",
                { className: V().SectionCtn },
                r.createElement(F, null),
              ),
            ),
            r.createElement(
              "div",
              { className: V().RightCol },
              r.createElement(
                "div",
                { className: V().SectionCtn },
                r.createElement(z, null),
              ),
              r.createElement(
                "div",
                { className: V().SectionCtn },
                r.createElement(Y, null),
              ),
              r.createElement(
                "div",
                { className: V().SectionCtn },
                r.createElement(v.JU, null, "Useful Links:"),
                r.createElement(
                  "ul",
                  null,
                  r.createElement(
                    "li",
                    null,
                    r.createElement(
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
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => _, qx: () => g });
      var r = n(16676),
        s = n(61859),
        o = n(12155),
        i = n(90626),
        a = n(52038),
        l = n(95695),
        c = n(84811),
        u = n(64734),
        d = n(65946),
        m = n(26408);
      function _(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: r,
            toggleMinimized: s,
            className: o,
            children: _,
          } = e,
          g = (0, d.q3)(() => r());
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: (0, a.A)(
                o,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            i.createElement(
              "div",
              {
                className: (0, a.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && i.createElement(m.o, { tooltip: n }),
            ),
            i.createElement(p, { bIsMinimized: g, fnToggleMinimize: s }),
          ),
          !g && i.createElement(c.tH, null, _),
        );
      }
      function g(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return i.createElement(
          _,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          a = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          r.$n,
          { "data-tooltip-text": (0, s.we)(a), onClick: n },
          e.bIsMinimized
            ? i.createElement(o.hz4, null)
            : i.createElement(o.Xjb, null),
        );
      }
    },
    4434: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => i });
      var r = n(41735),
        s = n.n(r),
        o = n(90626);
      function i(e) {
        const t = o.useRef(s().CancelToken.source());
        return (
          o.useEffect(() => {
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
        s = n.n(r),
        o = n(56545);
      function i(e) {
        if (s().isCancel(e))
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
            if ("object" == typeof e && e instanceof o.w)
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
  },
]);

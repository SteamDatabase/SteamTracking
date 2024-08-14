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
    43709: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => H });
      var s = r(90626),
        i = r(24484);
      const n = (0, i.Tc)("physical_goods", "application_config");
      var a = r(34629),
        o = r(56545),
        l = r(75487),
        c = r(96059),
        u = r(44332),
        d = r(68797),
        m = r(6144),
        _ = r(56093),
        g = r(30470);
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
          const t = o.w.Init(l.ku);
          if (0 == e.length)
            return (
              console.log(
                "CReservationMessagingStore.SetPositionMessages - empty list",
              ),
              !1
            );
          e.forEach((e) => {
            let r = t.Body().add_settings();
            r.set_edistributor(e.edistributor),
              r.set_product_identifier(e.product_identifier),
              r.set_start_queue_position(e.start_queue_position),
              r.set_rtime_estimated_notification(
                e.rtime_estimated_notification,
              ),
              r.set_localization_token(e.localization_token);
          });
          let r = null;
          try {
            const s = await l.nd.SetReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == s.GetEResult()) {
              const t = new Set(),
                r = Math.floor(Date.now() / 1e3);
              return (
                e.forEach((e) => {
                  (e.accountid = g.iA.accountid), (e.rtime_created = r);
                  const s = this.GetKey(e);
                  let i = this.m_mapProductPositionMsgList.get(s);
                  const n = i.findIndex(
                    (t) => t.start_queue_position == e.start_queue_position,
                  );
                  let a = [...i];
                  n >= 0 ? (a[n] = e) : (a.push(e), this.SortList(a)),
                    this.m_mapProductPositionMsgList.set(s, a),
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
            r = (0, d.H)(s);
          } catch (e) {
            r = (0, d.H)(e);
          }
          return (
            console.error(
              "CReservationMessagingStore.SetPositionMessages failed: " +
                r?.strErrorMsg,
              r,
            ),
            !1
          );
        }
        async DeletePositionMessage(e) {
          const t = o.w.Init(l.$J);
          t.Body().set_edistributor(e.edistributor),
            t.Body().set_product_identifier(e.product_identifier),
            t.Body().set_start_queue_position(e.start_queue_position);
          let r = null;
          try {
            const s = await l.nd.DeleteReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == s.GetEResult()) {
              const t = this.GetKey(e);
              let r = this.m_mapProductPositionMsgList.get(t);
              const s = r.findIndex(
                  (t) => t.start_queue_position == e.start_queue_position,
                ),
                i = [...r];
              return (
                i.splice(s, 1),
                this.m_mapProductPositionMsgList.set(t, i),
                this.GetPositionListChangeCallback(e).Dispatch(i),
                !0
              );
            }
            r = (0, d.H)(s);
          } catch (e) {
            r = (0, d.H)(e);
          }
          return (
            console.error(
              "CReservationMessagingStore.SetPositionMessages failed: " +
                r?.strErrorMsg,
              r,
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
          const e = (0, i.Tc)(
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
          const t = (0, i.Tc)(
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
        const [e, t] = (0, s.useState)(() => p.Get().GetAllProducts());
        return (0, _.hL)(p.Get().GetProductListChangeCallback(), t), e;
      }
      function h() {
        const e = p.Get();
        return {
          fnAddProductID: e.AddProductID,
          fnSetPositionMessages: e.SetPositionMessages,
          fnDeletePositionMessage: e.DeletePositionMessage,
          fnReloadReservationPositionMessages:
            e.ReloadReservationPositionMessages,
        };
      }
      (0, a.Cg)([_.oI], p.prototype, "AddProductID", null),
        (0, a.Cg)([_.oI], p.prototype, "SetPositionMessages", null),
        (0, a.Cg)([_.oI], p.prototype, "DeletePositionMessage", null),
        (0, a.Cg)(
          [_.oI],
          p.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var S = r(33793),
        M = r(65285),
        b = r(7068);
      function E(e) {
        const [t, r] = (0, s.useState)(null),
          { fnAddProductID: i } = h();
        return s.createElement(
          "div",
          null,
          s.createElement(b.JU, null, "Add Product SKU:"),
          s.createElement(
            "p",
            null,
            "Select an item for which we want to communicate a reservation status.",
          ),
          s.createElement(v, { selected: t, setSelected: r }),
          s.createElement(
            b.$n,
            {
              disabled: !t,
              onClick: () => {
                i(t), r(null);
              },
            },
            "Add ",
            t?.product_description,
            " To List",
          ),
        );
      }
      function v(e) {
        const { selected: t, setSelected: r } = e,
          i = (0, s.useRef)(),
          a = (function () {
            const [e] = (0, s.useState)(() => n);
            return e;
          })(),
          o = f(),
          l = (0, s.useMemo)(
            () =>
              a && o
                ? a
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
            [a, o],
          );
        (0, s.useEffect)(() => {
          i?.current && i.current.clearValue();
        }, [o]);
        const c = l?.find(
          (e) =>
            t &&
            t.edistributor == e.value.edistributor &&
            t.product_identifier == e.value.product_identifier,
        );
        return s.createElement(S.Ay, {
          isSearchable: !0,
          ref: i,
          isMulti: !1,
          isClearable: !0,
          className: M.ItemSelect,
          options: l,
          value: c,
          onChange: (e) => {
            e && r(e);
          },
        });
      }
      var y = r(71298),
        w = r(99637),
        R = r(8905),
        C = r(30708),
        B = r(738),
        P = r(48479),
        T = r(56011),
        k = r(61859),
        D = r(95695),
        z = r(92825),
        I = r.n(z),
        F = r(44165);
      function L(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function N(e) {
        const { strToken: t, rtEstimatedNotifcationDate: r } = e,
          i = new Date(1e3 * r),
          n = i.getMonth() + 1;
        let a = "",
          o = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            a = "" + i.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (a = (0, k.we)("#Sale_Reservation_MonthNoun_" + n)),
              (o = "" + i.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (a = (0, k.we)("#Sale_Reservation_MonthNoun_" + L(n, 1))),
              (o = (0, k.we)("#Sale_Reservation_MonthNoun_" + n)),
              (l = "" + i.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (a = (0, k.we)("#Sale_Reservation_MonthNoun_" + L(n, 2))),
              (o = (0, k.we)("#Sale_Reservation_MonthNoun_" + n)),
              (l = "" + i.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (a = (0, k.we)("#Sale_Reservation_MonthNoun_" + L(n, 3))),
              (o = (0, k.we)("#Sale_Reservation_MonthNoun_" + n)),
              (l = "" + i.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((n - 1) / 3) + 1)),
              (a = "" + i.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((n - 1) / 3) + 1)),
              (a = (0, k.we)("#Sale_Reservation_MonthNoun_" + n)),
              (o = "" + i.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = F.HD.GetTimeNowWithOverride(),
                t = Math.floor((r - e) / 86400);
              t < 7 ||
                (t < 28
                  ? ((c = "#Sale_Reservation_RelativeWeekly_Plural"),
                    (a = "" + Math.floor(t / 7 + 1)))
                  : ((c = "#Sale_Reservation_RelativeMonthly"),
                    (a = "" + Math.floor(t / 28 + 1))));
            }
            break;
          default:
            c = "#Sale_Reservation_Fallback";
        }
        return s.createElement(
          "div",
          { className: I().Ctn },
          (0, k.we)(c, a, o, l, ""),
        );
      }
      function G(e) {
        const t = f();
        return t && 0 != t.length
          ? s.createElement(
              "div",
              null,
              t.map((e) =>
                s.createElement(A, {
                  key: `${e.edistributor}_${e.product_identifier}`,
                  productID: e,
                }),
              ),
            )
          : s.createElement(
              "div",
              null,
              "No products with reservation position messages exists.",
            );
      }
      function q(e) {
        return s.createElement(
          "div",
          null,
          s.createElement(b.JU, null, "instructions:"),
          s.createElement(
            "p",
            null,
            "Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.",
          ),
          s.createElement(
            "p",
            null,
            "Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.",
          ),
        );
      }
      function W(e) {
        f();
        return s.createElement(
          "div",
          null,
          s.createElement(b.JU, null, "Force update:"),
          s.createElement(
            "p",
            null,
            "By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.",
          ),
          s.createElement(
            "p",
            null,
            "We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.",
          ),
          s.createElement(
            b.$n,
            {
              onClick: (e) => (0, B.pg)(s.createElement(Y, null), (0, T.uX)(e)),
            },
            "Force Reload Definitions on Steam Servers",
          ),
        );
      }
      function A(e) {
        const { productID: t } = e,
          r = (function (e) {
            return n.find(
              (t) =>
                t.edistributor == e.edistributor &&
                t.product_identifier == e.product_identifier,
            );
          })(t),
          i = r.product_description + " " + r.distributor,
          a = (function (e) {
            const [t, r] = (0, s.useState)(() =>
              p.Get().GetPositionMessagingForProduct(e),
            );
            return (0, _.hL)(p.Get().GetPositionListChangeCallback(e), r), t;
          })(t);
        return s.createElement(
          P.qx,
          {
            bStartMinimized: !1,
            title: i,
            tooltip: `distributor enum: ${r.edistributor}, part number: ${r.part_number}, product identifier: ${r.product_identifier}`,
          },
          s.createElement(
            b.$n,
            {
              onClick: (e) =>
                (0, B.pg)(s.createElement(U, { productID: t }), (0, T.uX)(e)),
            },
            "Add new start position",
          ),
          s.createElement(
            "table",
            { className: M.ItemTable },
            s.createElement(
              "thead",
              null,
              s.createElement(
                "tr",
                null,
                s.createElement("th", null, "Starting Queue Position"),
                s.createElement("th", null, "Estimate Date Receive Invite"),
                s.createElement("th", null, "Localized Date"),
                s.createElement("th", null, "Entry Created By"),
                s.createElement("th", null),
              ),
            ),
            s.createElement(
              "tbody",
              null,
              a.map((e) =>
                s.createElement(O, {
                  key: i + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function O(e) {
        const { positionMsg: t } = e;
        return s.createElement(
          "tr",
          null,
          s.createElement("td", null, t.start_queue_position.toLocaleString()),
          s.createElement(
            "td",
            null,
            (0, k.TW)(t.rtime_estimated_notification),
          ),
          s.createElement(
            "td",
            null,
            s.createElement(N, {
              rtEstimatedNotifcationDate: t.rtime_estimated_notification,
              strToken: t.localization_token,
            }),
          ),
          s.createElement(
            "td",
            null,
            s.createElement(
              "div",
              null,
              s.createElement(R.p, { accountID: t.accountid }),
            ),
            s.createElement("br", null),
            "On: ",
            (0, k.TW)(t.rtime_created),
          ),
          s.createElement(
            "td",
            null,
            s.createElement(
              b.$n,
              {
                onClick: (e) =>
                  (0, B.pg)(
                    s.createElement(U, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, T.uX)(e),
                  ),
              },
              "Update",
            ),
            s.createElement(
              b.$n,
              {
                onClick: (e) =>
                  (0, B.pg)(
                    s.createElement(j, { positionMsg: t }),
                    (0, T.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function U(e) {
        const { productID: t, existingPositionMsg: r, closeModal: i } = e,
          { fnSetPositionMessages: n } = h(),
          a = Math.floor(Date.now() / 1e3),
          [o, l] = (0, s.useState)(r?.start_queue_position || 0),
          [c, u] = (0, s.useState)(
            r?.rtime_estimated_notification || a + 86400,
          ),
          [d, m] = (0, s.useState)(
            r?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          _ = r ? "Update Queue Range" : "Create Queue Range",
          g = (0, y.vs)();
        return g.bLoading
          ? s.createElement(y.Hh, {
              state: g,
              strDialogTitle: _,
              closeModal: i,
            })
          : s.createElement(
              C.o0,
              {
                bDisableBackgroundDismiss: !0,
                strTitle: _,
                onCancel: i,
                onOK: () => {
                  g.fnSetLoading(!0);
                  const e = {
                    ...t,
                    start_queue_position: o,
                    rtime_estimated_notification: c,
                    localization_token: d,
                  };
                  n([e]).then((e) => {
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
              s.createElement(
                "div",
                { className: M.NewEntryCtn },
                s.createElement(
                  "p",
                  null,
                  "When we get to accepting reservation number ",
                  s.createElement("i", null, "n"),
                  ", show those users a date they can anticipate to recieve an invite to purchase.",
                ),
                s.createElement(b.pd, {
                  type: "number",
                  min: "0",
                  value: o,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                s.createElement(w.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: a,
                  fnGetTimeToUpdate: () => c,
                  fnSetTimeToUpdate: u,
                }),
                s.createElement("br", null),
                s.createElement(Q, {
                  strToken: d,
                  fnSetToken: m,
                  rtEstimateDate: c,
                }),
              ),
            );
      }
      function j(e) {
        const { positionMsg: t, closeModal: r } = e,
          { fnDeletePositionMessage: i } = h(),
          n = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          a = (0, y.vs)();
        return a.bLoading
          ? s.createElement(y.Hh, {
              state: a,
              strDialogTitle: n,
              closeModal: r,
            })
          : s.createElement(C.o0, {
              strTitle: n,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: r,
              onOK: () => {
                a.fnSetLoading(!0),
                  i(t).then((e) => {
                    e
                      ? (a.fnSetSuccess(!0),
                        a.fnSetStrSuccess("Successfully delete position"))
                      : (a.fnSetSuccess(!1),
                        a.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
              },
            });
      }
      function Y(e) {
        const { closeModal: t } = e,
          { fnReloadReservationPositionMessages: r } = h(),
          [i, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            r().then(() => n(!0));
          }, [r]),
          s.createElement(C.o0, {
            bAlertDialog: !0,
            strTitle: "Reload Definition",
            strDescription: i
              ? "Reloading..."
              : "Reload send to server, safe to close dialog",
            closeModal: t,
          })
        );
      }
      const $ = [
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
        const { strToken: t, fnSetToken: r, rtEstimateDate: i } = e,
          n = (0, s.useMemo)(
            () =>
              $.map((e) => ({
                label: s.createElement(N, {
                  strToken: e,
                  rtEstimatedNotifcationDate: i,
                }),
                data: e,
              })),
            [i],
          );
        return s.createElement(
          "div",
          null,
          s.createElement(b.m, {
            strDropDownClassName: D.DropDownScroll,
            label: "Date Format",
            rgOptions: n,
            selectedOption: t,
            onChange: (e) => r(e.data),
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          s.createElement(
            "div",
            null,
            s.createElement("h3", null, "This will display to users as: "),
            s.createElement(
              "div",
              { className: M.DatePreview },
              s.createElement(
                "div",
                null,
                (0, k.we)("#Sale_Reservation_ExpectedDate"),
              ),
              s.createElement(N, {
                rtEstimatedNotifcationDate: i,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var x = r(52038),
        K = r(45737),
        V = r.n(K);
      function H(e) {
        return s.createElement(
          "div",
          { className: (0, x.A)(M.ctn, V().AdminPageCtn) },
          s.createElement(
            "h1",
            { className: V().PageTitle },
            "Reservation Queue - Messaging Tools",
          ),
          s.createElement("hr", { className: "VO" }),
          s.createElement(
            "div",
            { className: V().ColumnCtn },
            s.createElement(
              "div",
              { className: V().LeftCol },
              s.createElement(
                "div",
                { className: V().SectionCtn },
                s.createElement(E, null),
              ),
              s.createElement(
                "div",
                { className: V().SectionCtn },
                s.createElement(G, null),
              ),
            ),
            s.createElement(
              "div",
              { className: V().RightCol },
              s.createElement(
                "div",
                { className: V().SectionCtn },
                s.createElement(q, null),
              ),
              s.createElement(
                "div",
                { className: V().SectionCtn },
                s.createElement(W, null),
              ),
              s.createElement(
                "div",
                { className: V().SectionCtn },
                s.createElement(b.JU, null, "Useful Links:"),
                s.createElement(
                  "ul",
                  null,
                  s.createElement(
                    "li",
                    null,
                    s.createElement(
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
    8114: (e, t, r) => {
      "use strict";
      r.d(t, { Q7: () => c, S7: () => a, hw: () => o, rd: () => l });
      var s = r(80613),
        i = r(89068);
      const n = s.Message;
      class a extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            a.prototype.sale_filter || i.Sg(a.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  sale_filter: { n: 1, c: o },
                  content_hub_filter: { n: 2, c: l },
                  store_filters: { n: 3, c: u, r: !0, q: !0 },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(a.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class o extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.sale_tagid || i.Sg(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  sale_tagid: {
                    n: 1,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class l extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.hub_type || i.Sg(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  hub_category: {
                    n: 2,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: i.qM.readEnum,
                    bw: i.gp.writeEnum,
                  },
                  optin: { n: 5, c },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class c extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.name || i.Sg(c.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  optin_tagid: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  optin_only: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class u extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.filter_json || i.Sg(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  filter_json: {
                    n: 1,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    4434: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => a });
      var s = r(41735),
        i = r.n(s),
        n = r(90626);
      function a(e) {
        const t = n.useRef(i().CancelToken.source());
        return (
          n.useEffect(() => {
            const r = t.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    68797: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => a });
      var s = r(41735),
        i = r.n(s),
        n = r(56545);
      function a(e) {
        if (i().isCancel(e))
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
            if ("object" == typeof e && e instanceof n.w)
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

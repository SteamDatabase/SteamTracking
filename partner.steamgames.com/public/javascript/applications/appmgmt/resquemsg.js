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
      r.r(t), r.d(t, { default: () => j });
      var s = r(90626),
        n = r(24484);
      const o = (0, n.Tc)("physical_goods", "application_config");
      var a = r(34629),
        i = r(56545),
        l = r(75487),
        c = r(96059),
        u = r(44332),
        d = r(68797),
        m = r(51240),
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
          const t = i.w.Init(l.ku);
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
                  let n = this.m_mapProductPositionMsgList.get(s);
                  const o = n.findIndex(
                    (t) => t.start_queue_position == e.start_queue_position,
                  );
                  let a = [...n];
                  o >= 0 ? (a[o] = e) : (a.push(e), this.SortList(a)),
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
          const t = i.w.Init(l.$J);
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
                n = [...r];
              return (
                n.splice(s, 1),
                this.m_mapProductPositionMsgList.set(t, n),
                this.GetPositionListChangeCallback(e).Dispatch(n),
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
          const e = i.w.Init(l.jd);
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
          const e = (0, n.Tc)(
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
          const t = (0, n.Tc)(
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
        const [e, t] = (0, s.useState)(() => p.Get().GetAllProducts());
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
      (0, a.Cg)([_.oI], p.prototype, "AddProductID", null),
        (0, a.Cg)([_.oI], p.prototype, "SetPositionMessages", null),
        (0, a.Cg)([_.oI], p.prototype, "DeletePositionMessage", null),
        (0, a.Cg)(
          [_.oI],
          p.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var E = r(33793),
        S = r(65285),
        v = r(7068);
      function M(e) {
        const [t, r] = (0, s.useState)(null),
          { fnAddProductID: n } = f();
        return s.createElement(
          "div",
          null,
          s.createElement(v.JU, null, "Add Product SKU:"),
          s.createElement(
            "p",
            null,
            "Select an item for which we want to communicate a reservation status.",
          ),
          s.createElement(C, { selected: t, setSelected: r }),
          s.createElement(
            v.$n,
            {
              disabled: !t,
              onClick: () => {
                n(t), r(null);
              },
            },
            "Add ",
            t?.product_description,
            " To List",
          ),
        );
      }
      function C(e) {
        const { selected: t, setSelected: r } = e,
          n = (0, s.useRef)(),
          a = (function () {
            const [e] = (0, s.useState)(() => o);
            return e;
          })(),
          i = h(),
          l = (0, s.useMemo)(
            () =>
              a && i
                ? a
                    .filter(
                      (e) =>
                        -1 ==
                        i.findIndex(
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
            [a, i],
          );
        (0, s.useEffect)(() => {
          n?.current && n.current.clearValue();
        }, [i]);
        const c = l?.find(
          (e) =>
            t &&
            t.edistributor == e.value.edistributor &&
            t.product_identifier == e.value.product_identifier,
        );
        return s.createElement(E.Ay, {
          isSearchable: !0,
          ref: n,
          isMulti: !1,
          isClearable: !0,
          className: S.ItemSelect,
          options: l,
          value: c,
          onChange: (e) => {
            e && r(e);
          },
        });
      }
      var b = r(71298),
        R = r(99637),
        P = r(8905),
        w = r(20929),
        y = r(738),
        k = r(48479),
        D = r(56011),
        T = r(61859),
        L = r(95695),
        I = r(92825),
        N = r.n(I),
        G = r(44165);
      function A(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function F(e) {
        const { strToken: t, rtEstimatedNotifcationDate: r } = e,
          n = new Date(1e3 * r),
          o = n.getMonth() + 1;
        let a = "",
          i = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            a = "" + n.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (i = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + A(o, 1))),
              (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + A(o, 2))),
              (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + A(o, 3))),
              (i = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((o - 1) / 3) + 1)),
              (a = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((o - 1) / 3) + 1)),
              (a = (0, T.we)("#Sale_Reservation_MonthNoun_" + o)),
              (i = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = G.HD.GetTimeNowWithOverride(),
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
          { className: N().Ctn },
          (0, T.we)(c, a, i, l, ""),
        );
      }
      function q(e) {
        const t = h();
        return t && 0 != t.length
          ? s.createElement(
              "div",
              null,
              t.map((e) =>
                s.createElement($, {
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
      function Y(e) {
        return s.createElement(
          "div",
          null,
          s.createElement(v.JU, null, "instructions:"),
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
      function U(e) {
        h();
        return s.createElement(
          "div",
          null,
          s.createElement(v.JU, null, "Force update:"),
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
            v.$n,
            {
              onClick: (e) => (0, y.pg)(s.createElement(O, null), (0, D.uX)(e)),
            },
            "Force Reload Definitions on Steam Servers",
          ),
        );
      }
      function $(e) {
        const { productID: t } = e,
          r = (function (e) {
            return o.find(
              (t) =>
                t.edistributor == e.edistributor &&
                t.product_identifier == e.product_identifier,
            );
          })(t),
          n = r.product_description + " " + r.distributor,
          a = (function (e) {
            const [t, r] = (0, s.useState)(() =>
              p.Get().GetPositionMessagingForProduct(e),
            );
            return (0, _.hL)(p.Get().GetPositionListChangeCallback(e), r), t;
          })(t);
        return s.createElement(
          k.qx,
          {
            bStartMinimized: !1,
            title: n,
            tooltip: `distributor enum: ${r.edistributor}, part number: ${r.part_number}, product identifier: ${r.product_identifier}`,
          },
          s.createElement(
            v.$n,
            {
              onClick: (e) =>
                (0, y.pg)(s.createElement(B, { productID: t }), (0, D.uX)(e)),
            },
            "Add new start position",
          ),
          s.createElement(
            "table",
            { className: S.ItemTable },
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
                s.createElement(Q, {
                  key: n + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function Q(e) {
        const { positionMsg: t } = e;
        return s.createElement(
          "tr",
          null,
          s.createElement("td", null, t.start_queue_position.toLocaleString()),
          s.createElement(
            "td",
            null,
            (0, T.TW)(t.rtime_estimated_notification),
          ),
          s.createElement(
            "td",
            null,
            s.createElement(F, {
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
              s.createElement(P.p, { accountID: t.accountid }),
            ),
            s.createElement("br", null),
            "On: ",
            (0, T.TW)(t.rtime_created),
          ),
          s.createElement(
            "td",
            null,
            s.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, y.pg)(
                    s.createElement(B, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, D.uX)(e),
                  ),
              },
              "Update",
            ),
            s.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, y.pg)(
                    s.createElement(K, { positionMsg: t }),
                    (0, D.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function B(e) {
        const { productID: t, existingPositionMsg: r, closeModal: n } = e,
          { fnSetPositionMessages: o } = f(),
          a = Math.floor(Date.now() / 1e3),
          [i, l] = (0, s.useState)(r?.start_queue_position || 0),
          [c, u] = (0, s.useState)(
            r?.rtime_estimated_notification || a + 86400,
          ),
          [d, m] = (0, s.useState)(
            r?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          _ = r ? "Update Queue Range" : "Create Queue Range",
          g = (0, b.vs)();
        return g.bLoading
          ? s.createElement(b.Hh, {
              state: g,
              strDialogTitle: _,
              closeModal: n,
            })
          : s.createElement(
              w.o0,
              {
                bDisableBackgroundDismiss: !0,
                strTitle: _,
                onCancel: n,
                onOK: () => {
                  g.fnSetLoading(!0);
                  const e = {
                    ...t,
                    start_queue_position: i,
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
              s.createElement(
                "div",
                { className: S.NewEntryCtn },
                s.createElement(
                  "p",
                  null,
                  "When we get to accepting reservation number ",
                  s.createElement("i", null, "n"),
                  ", show those users a date they can anticipate to recieve an invite to purchase.",
                ),
                s.createElement(v.pd, {
                  type: "number",
                  min: "0",
                  value: i,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                s.createElement(R.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: a,
                  fnGetTimeToUpdate: () => c,
                  fnSetTimeToUpdate: u,
                }),
                s.createElement("br", null),
                s.createElement(x, {
                  strToken: d,
                  fnSetToken: m,
                  rtEstimateDate: c,
                }),
              ),
            );
      }
      function K(e) {
        const { positionMsg: t, closeModal: r } = e,
          { fnDeletePositionMessage: n } = f(),
          o = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          a = (0, b.vs)();
        return a.bLoading
          ? s.createElement(b.Hh, {
              state: a,
              strDialogTitle: o,
              closeModal: r,
            })
          : s.createElement(w.o0, {
              strTitle: o,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: r,
              onOK: () => {
                a.fnSetLoading(!0),
                  n(t).then((e) => {
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
      function O(e) {
        const { closeModal: t } = e,
          { fnReloadReservationPositionMessages: r } = f(),
          [n, o] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            r().then(() => o(!0));
          }, [r]),
          s.createElement(w.o0, {
            bAlertDialog: !0,
            strTitle: "Reload Definition",
            strDescription: n
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
      function x(e) {
        const { strToken: t, fnSetToken: r, rtEstimateDate: n } = e,
          o = (0, s.useMemo)(
            () =>
              W.map((e) => ({
                label: s.createElement(F, {
                  strToken: e,
                  rtEstimatedNotifcationDate: n,
                }),
                data: e,
              })),
            [n],
          );
        return s.createElement(
          "div",
          null,
          s.createElement(v.m, {
            strDropDownClassName: L.DropDownScroll,
            label: "Date Format",
            rgOptions: o,
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
              { className: S.DatePreview },
              s.createElement(
                "div",
                null,
                (0, T.we)("#Sale_Reservation_ExpectedDate"),
              ),
              s.createElement(F, {
                rtEstimatedNotifcationDate: n,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var z = r(52038),
        V = r(45737),
        H = r.n(V);
      function j(e) {
        return s.createElement(
          "div",
          { className: (0, z.A)(S.ctn, H().AdminPageCtn) },
          s.createElement(
            "h1",
            { className: H().PageTitle },
            "Reservation Queue - Messaging Tools",
          ),
          s.createElement("hr", { className: "VO" }),
          s.createElement(
            "div",
            { className: H().ColumnCtn },
            s.createElement(
              "div",
              { className: H().LeftCol },
              s.createElement(
                "div",
                { className: H().SectionCtn },
                s.createElement(M, null),
              ),
              s.createElement(
                "div",
                { className: H().SectionCtn },
                s.createElement(q, null),
              ),
            ),
            s.createElement(
              "div",
              { className: H().RightCol },
              s.createElement(
                "div",
                { className: H().SectionCtn },
                s.createElement(Y, null),
              ),
              s.createElement(
                "div",
                { className: H().SectionCtn },
                s.createElement(U, null),
              ),
              s.createElement(
                "div",
                { className: H().SectionCtn },
                s.createElement(v.JU, null, "Useful Links:"),
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
    4434: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => a });
      var s = r(41735),
        n = r.n(s),
        o = r(90626);
      function a(e) {
        const t = o.useRef(n().CancelToken.source());
        return (
          o.useEffect(() => {
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
        n = r.n(s),
        o = r(56545);
      function a(e) {
        if (n().isCancel(e))
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

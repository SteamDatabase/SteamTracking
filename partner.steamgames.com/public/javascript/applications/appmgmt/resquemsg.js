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
    43709: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => V });
      var r = i(90626),
        n = i(24484);
      const a = (0, n.Tc)("physical_goods", "application_config");
      var s = i(34629),
        o = i(56545),
        l = i(75487),
        c = i(96059),
        u = i(44332),
        m = i(68797),
        d = i(6144),
        _ = i(56093),
        g = i(30470);
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
          const t = o.w.Init(l.ku);
          if (0 == e.length)
            return (
              console.log(
                "CReservationMessagingStore.SetPositionMessages - empty list",
              ),
              !1
            );
          e.forEach((e) => {
            let i = t.Body().add_settings();
            i.set_edistributor(e.edistributor),
              i.set_product_identifier(e.product_identifier),
              i.set_start_queue_position(e.start_queue_position),
              i.set_rtime_estimated_notification(
                e.rtime_estimated_notification,
              ),
              i.set_localization_token(e.localization_token);
          });
          let i = null;
          try {
            const r = await l.nd.SetReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == r.GetEResult()) {
              const t = new Set(),
                i = Math.floor(Date.now() / 1e3);
              return (
                e.forEach((e) => {
                  (e.accountid = g.iA.accountid), (e.rtime_created = i);
                  const r = this.GetKey(e);
                  let n = this.m_mapProductPositionMsgList.get(r);
                  const a = n.findIndex(
                    (t) => t.start_queue_position == e.start_queue_position,
                  );
                  let s = [...n];
                  a >= 0 ? (s[a] = e) : (s.push(e), this.SortList(s)),
                    this.m_mapProductPositionMsgList.set(r, s),
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
            i = (0, m.H)(r);
          } catch (e) {
            i = (0, m.H)(e);
          }
          return (
            console.error(
              "CReservationMessagingStore.SetPositionMessages failed: " +
                i?.strErrorMsg,
              i,
            ),
            !1
          );
        }
        async DeletePositionMessage(e) {
          const t = o.w.Init(l.$J);
          t.Body().set_edistributor(e.edistributor),
            t.Body().set_product_identifier(e.product_identifier),
            t.Body().set_start_queue_position(e.start_queue_position);
          let i = null;
          try {
            const r = await l.nd.DeleteReservationPositionMessage(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (1 == r.GetEResult()) {
              const t = this.GetKey(e);
              let i = this.m_mapProductPositionMsgList.get(t);
              const r = i.findIndex(
                  (t) => t.start_queue_position == e.start_queue_position,
                ),
                n = [...i];
              return (
                n.splice(r, 1),
                this.m_mapProductPositionMsgList.set(t, n),
                this.GetPositionListChangeCallback(e).Dispatch(n),
                !0
              );
            }
            i = (0, m.H)(r);
          } catch (e) {
            i = (0, m.H)(e);
          }
          return (
            console.error(
              "CReservationMessagingStore.SetPositionMessages failed: " +
                i?.strErrorMsg,
              i,
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
      (0, s.Cg)([_.oI], p.prototype, "AddProductID", null),
        (0, s.Cg)([_.oI], p.prototype, "SetPositionMessages", null),
        (0, s.Cg)([_.oI], p.prototype, "DeletePositionMessage", null),
        (0, s.Cg)(
          [_.oI],
          p.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var S = i(33793),
        b = i(65285),
        M = i(7068);
      function v(e) {
        const [t, i] = (0, r.useState)(null),
          { fnAddProductID: n } = f();
        return r.createElement(
          "div",
          null,
          r.createElement(M.JU, null, "Add Product SKU:"),
          r.createElement(
            "p",
            null,
            "Select an item for which we want to communicate a reservation status.",
          ),
          r.createElement(E, { selected: t, setSelected: i }),
          r.createElement(
            M.$n,
            {
              disabled: !t,
              onClick: () => {
                n(t), i(null);
              },
            },
            "Add ",
            t?.product_description,
            " To List",
          ),
        );
      }
      function E(e) {
        const { selected: t, setSelected: i } = e,
          n = (0, r.useRef)(),
          s = (function () {
            const [e] = (0, r.useState)(() => a);
            return e;
          })(),
          o = h(),
          l = (0, r.useMemo)(
            () =>
              s && o
                ? s
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
            [s, o],
          );
        (0, r.useEffect)(() => {
          n?.current && n.current.clearValue();
        }, [o]);
        const c = l?.find(
          (e) =>
            t &&
            t.edistributor == e.value.edistributor &&
            t.product_identifier == e.value.product_identifier,
        );
        return r.createElement(S.Ay, {
          isSearchable: !0,
          ref: n,
          isMulti: !1,
          isClearable: !0,
          className: b.ItemSelect,
          options: l,
          value: c,
          onChange: (e) => {
            e && i(e);
          },
        });
      }
      var y = i(71298),
        w = i(99637),
        R = i(8905),
        B = i(30708),
        P = i(738),
        C = i(48479),
        T = i(56011),
        z = i(61859),
        k = i(95695),
        D = i(92825),
        I = i.n(D),
        F = i(44165);
      function L(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function N(e) {
        const { strToken: t, rtEstimatedNotifcationDate: i } = e,
          n = new Date(1e3 * i),
          a = n.getMonth() + 1;
        let s = "",
          o = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            s = "" + n.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (s = (0, z.we)("#Sale_Reservation_MonthNoun_" + a)),
              (o = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (s = (0, z.we)("#Sale_Reservation_MonthNoun_" + L(a, 1))),
              (o = (0, z.we)("#Sale_Reservation_MonthNoun_" + a)),
              (l = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (s = (0, z.we)("#Sale_Reservation_MonthNoun_" + L(a, 2))),
              (o = (0, z.we)("#Sale_Reservation_MonthNoun_" + a)),
              (l = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (s = (0, z.we)("#Sale_Reservation_MonthNoun_" + L(a, 3))),
              (o = (0, z.we)("#Sale_Reservation_MonthNoun_" + a)),
              (l = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((a - 1) / 3) + 1)),
              (s = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((a - 1) / 3) + 1)),
              (s = (0, z.we)("#Sale_Reservation_MonthNoun_" + a)),
              (o = "" + n.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = F.HD.GetTimeNowWithOverride(),
                t = Math.floor((i - e) / 86400);
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
        return r.createElement(
          "div",
          { className: I().Ctn },
          (0, z.we)(c, s, o, l, ""),
        );
      }
      function q(e) {
        const t = h();
        return t && 0 != t.length
          ? r.createElement(
              "div",
              null,
              t.map((e) =>
                r.createElement(G, {
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
      function W(e) {
        return r.createElement(
          "div",
          null,
          r.createElement(M.JU, null, "instructions:"),
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
      function A(e) {
        h();
        return r.createElement(
          "div",
          null,
          r.createElement(M.JU, null, "Force update:"),
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
            M.$n,
            {
              onClick: (e) => (0, P.pg)(r.createElement(x, null), (0, T.uX)(e)),
            },
            "Force Reload Definitions on Steam Servers",
          ),
        );
      }
      function G(e) {
        const { productID: t } = e,
          i = (function (e) {
            return a.find(
              (t) =>
                t.edistributor == e.edistributor &&
                t.product_identifier == e.product_identifier,
            );
          })(t),
          n = i.product_description + " " + i.distributor,
          s = (function (e) {
            const [t, i] = (0, r.useState)(() =>
              p.Get().GetPositionMessagingForProduct(e),
            );
            return (0, _.hL)(p.Get().GetPositionListChangeCallback(e), i), t;
          })(t);
        return r.createElement(
          C.qx,
          {
            bStartMinimized: !1,
            title: n,
            tooltip: `distributor enum: ${i.edistributor}, part number: ${i.part_number}, product identifier: ${i.product_identifier}`,
          },
          r.createElement(
            M.$n,
            {
              onClick: (e) =>
                (0, P.pg)(r.createElement(U, { productID: t }), (0, T.uX)(e)),
            },
            "Add new start position",
          ),
          r.createElement(
            "table",
            { className: b.ItemTable },
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
              s.map((e) =>
                r.createElement(O, {
                  key: n + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function O(e) {
        const { positionMsg: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.start_queue_position.toLocaleString()),
          r.createElement(
            "td",
            null,
            (0, z.TW)(t.rtime_estimated_notification),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(N, {
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
              r.createElement(R.p, { accountID: t.accountid }),
            ),
            r.createElement("br", null),
            "On: ",
            (0, z.TW)(t.rtime_created),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(
              M.$n,
              {
                onClick: (e) =>
                  (0, P.pg)(
                    r.createElement(U, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, T.uX)(e),
                  ),
              },
              "Update",
            ),
            r.createElement(
              M.$n,
              {
                onClick: (e) =>
                  (0, P.pg)(
                    r.createElement(j, { positionMsg: t }),
                    (0, T.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function U(e) {
        const { productID: t, existingPositionMsg: i, closeModal: n } = e,
          { fnSetPositionMessages: a } = f(),
          s = Math.floor(Date.now() / 1e3),
          [o, l] = (0, r.useState)(i?.start_queue_position || 0),
          [c, u] = (0, r.useState)(
            i?.rtime_estimated_notification || s + 86400,
          ),
          [m, d] = (0, r.useState)(
            i?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          _ = i ? "Update Queue Range" : "Create Queue Range",
          g = (0, y.vs)();
        return g.bLoading
          ? r.createElement(y.Hh, {
              state: g,
              strDialogTitle: _,
              closeModal: n,
            })
          : r.createElement(
              B.o0,
              {
                bDisableBackgroundDismiss: !0,
                strTitle: _,
                onCancel: n,
                onOK: () => {
                  g.fnSetLoading(!0);
                  const e = {
                    ...t,
                    start_queue_position: o,
                    rtime_estimated_notification: c,
                    localization_token: m,
                  };
                  a([e]).then((e) => {
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
                { className: b.NewEntryCtn },
                r.createElement(
                  "p",
                  null,
                  "When we get to accepting reservation number ",
                  r.createElement("i", null, "n"),
                  ", show those users a date they can anticipate to recieve an invite to purchase.",
                ),
                r.createElement(M.pd, {
                  type: "number",
                  min: "0",
                  value: o,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                r.createElement(w.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: s,
                  fnGetTimeToUpdate: () => c,
                  fnSetTimeToUpdate: u,
                }),
                r.createElement("br", null),
                r.createElement(Q, {
                  strToken: m,
                  fnSetToken: d,
                  rtEstimateDate: c,
                }),
              ),
            );
      }
      function j(e) {
        const { positionMsg: t, closeModal: i } = e,
          { fnDeletePositionMessage: n } = f(),
          a = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          s = (0, y.vs)();
        return s.bLoading
          ? r.createElement(y.Hh, {
              state: s,
              strDialogTitle: a,
              closeModal: i,
            })
          : r.createElement(B.o0, {
              strTitle: a,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: i,
              onOK: () => {
                s.fnSetLoading(!0),
                  n(t).then((e) => {
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
      function x(e) {
        const { closeModal: t } = e,
          { fnReloadReservationPositionMessages: i } = f(),
          [n, a] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            i().then(() => a(!0));
          }, [i]),
          r.createElement(B.o0, {
            bAlertDialog: !0,
            strTitle: "Reload Definition",
            strDescription: n
              ? "Reloading..."
              : "Reload send to server, safe to close dialog",
            closeModal: t,
          })
        );
      }
      const Y = [
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
        const { strToken: t, fnSetToken: i, rtEstimateDate: n } = e,
          a = (0, r.useMemo)(
            () =>
              Y.map((e) => ({
                label: r.createElement(N, {
                  strToken: e,
                  rtEstimatedNotifcationDate: n,
                }),
                data: e,
              })),
            [n],
          );
        return r.createElement(
          "div",
          null,
          r.createElement(M.m, {
            strDropDownClassName: k.DropDownScroll,
            label: "Date Format",
            rgOptions: a,
            selectedOption: t,
            onChange: (e) => i(e.data),
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          r.createElement(
            "div",
            null,
            r.createElement("h3", null, "This will display to users as: "),
            r.createElement(
              "div",
              { className: b.DatePreview },
              r.createElement(
                "div",
                null,
                (0, z.we)("#Sale_Reservation_ExpectedDate"),
              ),
              r.createElement(N, {
                rtEstimatedNotifcationDate: n,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var $ = i(52038),
        K = i(45737),
        H = i.n(K);
      function V(e) {
        return r.createElement(
          "div",
          { className: (0, $.A)(b.ctn, H().AdminPageCtn) },
          r.createElement(
            "h1",
            { className: H().PageTitle },
            "Reservation Queue - Messaging Tools",
          ),
          r.createElement("hr", { className: "VO" }),
          r.createElement(
            "div",
            { className: H().ColumnCtn },
            r.createElement(
              "div",
              { className: H().LeftCol },
              r.createElement(
                "div",
                { className: H().SectionCtn },
                r.createElement(v, null),
              ),
              r.createElement(
                "div",
                { className: H().SectionCtn },
                r.createElement(q, null),
              ),
            ),
            r.createElement(
              "div",
              { className: H().RightCol },
              r.createElement(
                "div",
                { className: H().SectionCtn },
                r.createElement(W, null),
              ),
              r.createElement(
                "div",
                { className: H().SectionCtn },
                r.createElement(A, null),
              ),
              r.createElement(
                "div",
                { className: H().SectionCtn },
                r.createElement(M.JU, null, "Useful Links:"),
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
    8114: (e, t, i) => {
      "use strict";
      i.d(t, { Q7: () => c, S7: () => s, hw: () => o, rd: () => l });
      var r = i(80613),
        n = i(89068);
      const a = r.Message;
      class s extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.sale_filter || n.Sg(s.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  sale_filter: { n: 1, c: o },
                  content_hub_filter: { n: 2, c: l },
                  store_filters: { n: 3, c: u, r: !0, q: !0 },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = n.w0(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(s.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new s();
          return s.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class o extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.sale_tagid || n.Sg(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
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
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new o();
          return o.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class l extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.hub_type || n.Sg(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  hub_category: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  optin: { n: 5, c },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new l();
          return l.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class c extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.name || n.Sg(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  optin_tagid: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  optin_only: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new c();
          return c.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class u extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.filter_json || n.Sg(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
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
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    48479: (e, t, i) => {
      "use strict";
      i.d(t, { AQ: () => _, qx: () => g });
      var r = i(7068),
        n = i(61859),
        a = i(12155),
        s = i(90626),
        o = i(52038),
        l = i(95695),
        c = i(84811),
        u = i(64734),
        m = i(65946),
        d = i(26408);
      function _(e) {
        const {
            title: t,
            tooltip: i,
            getMinimized: r,
            toggleMinimized: n,
            className: a,
            children: _,
          } = e,
          g = (0, m.q3)(() => r());
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, o.A)(
                a,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            s.createElement(
              "div",
              {
                className: (0, o.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(i) && s.createElement(d.o, { tooltip: i }),
            ),
            s.createElement(p, { bIsMinimized: g, fnToggleMinimize: n }),
          ),
          !g && s.createElement(c.tH, null, _),
        );
      }
      function g(e) {
        const [t, i] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          _,
          { ...e, getMinimized: () => t, toggleMinimized: () => i(!t) },
          e.children,
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: i } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          r.$n,
          { "data-tooltip-text": (0, n.we)(o), onClick: i },
          e.bIsMinimized
            ? s.createElement(a.hz4, null)
            : s.createElement(a.Xjb, null),
        );
      }
    },
  },
]);

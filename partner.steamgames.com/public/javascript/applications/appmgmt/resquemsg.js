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
    45737: (e) => {
      e.exports = {
        AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
        WidePageCtn: "uHgjQHyNygSKukDngfNQO",
        PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
        PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
        Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
        PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
        ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
        ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
        ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
        LeftCol: "_1AqrivbzwCs57BXiugqpeA",
        ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
        Blue: "J7iYYml2Jf_PcaACW1hEr",
        ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
        SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
        Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
        ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
        SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
        warning: "_2HiNh3o5cgMEbzFKYBUjAy",
        IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
        RightCol: "_3kaQhRnhNh_awrnNX90rui",
        NoSticky: "JQNb8bHftBTAYpCXTx52v",
        SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
        Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
        TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
        DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
        Indent: "_7PV326-4cpZdmTCEdgC2l",
        DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
        FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
        MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
        StatusLineItemCtn: "_2h8s6LCid-ECW3NhDIBaFX",
        StatusIcon: "_3dYtRWTacFdf4BVwqGSgcd",
        StatusIconDone: "_1tiAc3o7NUJsBdgLS6vCl_",
        UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
        UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
        MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
        BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
        UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
        LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
        LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
        UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
        LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
        DeleteAll: "rYuknI3K1VFknv90GNUTc",
        EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
        StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
        HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
        StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
        Stat: "_3OYQbVCq1yBuEx1XcDzG06",
        BigStat: "lYYwDDss378Sm0FKPBxPh",
        IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
      };
    },
    92825: (e) => {
      e.exports = { Ctn: "_3gnQfZ3NUW9NFF3WllsQ6b" };
    },
    43709: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => X });
      var r = n(90626),
        s = n(24484);
      const o = (0, s.Tc)("physical_goods", "application_config");
      var a = n(34629),
        i = n(56545),
        l = n(75487),
        c = n(96059),
        u = n(44332),
        d = n(68797),
        m = n(6144),
        _ = n(375),
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
          const t = i.w.Init(l.ku);
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
                  let a = [...s];
                  o >= 0 ? (a[o] = e) : (a.push(e), this.SortList(a)),
                    this.m_mapProductPositionMsgList.set(r, a),
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
          const t = i.w.Init(l.$J);
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
      (0, a.Cg)([_.oI], p.prototype, "AddProductID", null),
        (0, a.Cg)([_.oI], p.prototype, "SetPositionMessages", null),
        (0, a.Cg)([_.oI], p.prototype, "DeletePositionMessage", null),
        (0, a.Cg)(
          [_.oI],
          p.prototype,
          "ReloadReservationPositionMessages",
          null,
        );
      var E = n(33793),
        S = n(65285),
        v = n(71541);
      function C(e) {
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
          r.createElement(M, { selected: t, setSelected: n }),
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
      function M(e) {
        const { selected: t, setSelected: n } = e,
          s = (0, r.useRef)(),
          a = (function () {
            const [e] = (0, r.useState)(() => o);
            return e;
          })(),
          i = h(),
          l = (0, r.useMemo)(
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
        (0, r.useEffect)(() => {
          s?.current && s.current.clearValue();
        }, [i]);
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
      var b = n(71298),
        R = n(99637),
        P = n(8905),
        w = n(9154),
        k = n(738),
        y = n(48479),
        T = n(56011),
        D = n(61859),
        I = n(95695),
        L = n(92825),
        N = n.n(L),
        A = n(44165);
      function G(e, t) {
        return e > t + 1 ? e - t : e + 12 - t;
      }
      function B(e) {
        const { strToken: t, rtEstimatedNotifcationDate: n } = e,
          s = new Date(1e3 * n),
          o = s.getMonth() + 1;
        let a = "",
          i = "",
          l = "",
          c = t;
        switch (t) {
          case "#Sale_Reservation_Year":
          case "#Sale_Reservation_AfterYear":
            a = "" + s.getFullYear();
            break;
          case "#Sale_Reservation_MonthYear":
          case "#Sale_Reservation_AfterMonthYear":
            (a = (0, D.we)("#Sale_Reservation_MonthNoun_" + o)),
              (i = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_TwoMonthRangeYear":
            (a = (0, D.we)("#Sale_Reservation_MonthNoun_" + G(o, 1))),
              (i = (0, D.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_ThreeMonthRangeYear":
            (a = (0, D.we)("#Sale_Reservation_MonthNoun_" + G(o, 2))),
              (i = (0, D.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_FourMonthRangeYear":
            (a = (0, D.we)("#Sale_Reservation_MonthNoun_" + G(o, 3))),
              (i = (0, D.we)("#Sale_Reservation_MonthNoun_" + o)),
              (l = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_Quarter_ThreeMonths":
            (c = "#Sale_Reservation_Quarter" + (Math.floor((o - 1) / 3) + 1)),
              (a = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_AfterQuarter_ThreeMonths":
            (c =
              "#Sale_Reservation_AfterQuarter" + (Math.floor((o - 1) / 3) + 1)),
              (a = (0, D.we)("#Sale_Reservation_MonthNoun_" + o)),
              (i = "" + s.getFullYear());
            break;
          case "#Sale_Reservation_RelativeWeekly":
            {
              const e = A.HD.GetTimeNowWithOverride(),
                t = Math.floor((n - e) / 86400);
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
        return r.createElement(
          "div",
          { className: N().Ctn },
          (0, D.we)(c, a, i, l, ""),
        );
      }
      function F(e) {
        const t = h();
        return t && 0 != t.length
          ? r.createElement(
              "div",
              null,
              t.map((e) =>
                r.createElement(q, {
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
      function Y(e) {
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
      function U(e) {
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
              onClick: (e) => (0, k.pg)(r.createElement(K, null), (0, T.uX)(e)),
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
          s = n.product_description + " " + n.distributor,
          a = (function (e) {
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
                (0, k.pg)(r.createElement(x, { productID: t }), (0, T.uX)(e)),
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
              a.map((e) =>
                r.createElement(Q, {
                  key: s + e.start_queue_position,
                  positionMsg: e,
                }),
              ),
            ),
          ),
        );
      }
      function Q(e) {
        const { positionMsg: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.start_queue_position.toLocaleString()),
          r.createElement(
            "td",
            null,
            (0, D.TW)(t.rtime_estimated_notification),
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
              r.createElement(P.p, { accountID: t.accountid }),
            ),
            r.createElement("br", null),
            "On: ",
            (0, D.TW)(t.rtime_created),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, k.pg)(
                    r.createElement(x, {
                      productID: t,
                      existingPositionMsg: t,
                    }),
                    (0, T.uX)(e),
                  ),
              },
              "Update",
            ),
            r.createElement(
              v.$n,
              {
                onClick: (e) =>
                  (0, k.pg)(
                    r.createElement(W, { positionMsg: t }),
                    (0, T.uX)(e),
                  ),
              },
              "Delete",
            ),
          ),
        );
      }
      function x(e) {
        const { productID: t, existingPositionMsg: n, closeModal: s } = e,
          { fnSetPositionMessages: o } = f(),
          a = Math.floor(Date.now() / 1e3),
          [i, l] = (0, r.useState)(n?.start_queue_position || 0),
          [c, u] = (0, r.useState)(
            n?.rtime_estimated_notification || a + 86400,
          ),
          [d, m] = (0, r.useState)(
            n?.localization_token || "#Sale_Reservation_MonthYear",
          ),
          _ = n ? "Update Queue Range" : "Create Queue Range",
          g = (0, b.vs)();
        return g.bLoading
          ? r.createElement(b.Hh, {
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
                  value: i,
                  label: "Starting Queue Position",
                  onChange: (e) =>
                    l(Number.parseInt(e?.currentTarget?.value || "0")),
                }),
                r.createElement(R.K, {
                  bShowTimeZone: !0,
                  strDescription: "Estimated Time Users will receive invite",
                  strDescToolTip:
                    "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                  nEarliestTime: a,
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
      function W(e) {
        const { positionMsg: t, closeModal: n } = e,
          { fnDeletePositionMessage: s } = f(),
          o = `Delete Queue Position ${t.start_queue_position.toLocaleString()}`,
          a = (0, b.vs)();
        return a.bLoading
          ? r.createElement(b.Hh, {
              state: a,
              strDialogTitle: o,
              closeModal: n,
            })
          : r.createElement(w.o0, {
              strTitle: o,
              strDescription: "Are you sure, this action is no undo'able?",
              onCancel: n,
              onOK: () => {
                a.fnSetLoading(!0),
                  s(t).then((e) => {
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
      function K(e) {
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
      const H = [
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
              H.map((e) => ({
                label: r.createElement(B, {
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
            strDropDownClassName: I.DropDownScroll,
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
                (0, D.we)("#Sale_Reservation_ExpectedDate"),
              ),
              r.createElement(B, {
                rtEstimatedNotifcationDate: s,
                strToken: t,
              }),
            ),
          ),
        );
      }
      var z = n(52038),
        J = n(45737),
        V = n.n(J);
      function X(e) {
        return r.createElement(
          "div",
          { className: (0, z.A)(S.ctn, V().AdminPageCtn) },
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
                r.createElement(C, null),
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
                r.createElement(Y, null),
              ),
              r.createElement(
                "div",
                { className: V().SectionCtn },
                r.createElement(U, null),
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
    4434: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => a });
      var r = n(41735),
        s = n.n(r),
        o = n(90626);
      function a(e) {
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
      n.d(t, { H: () => a });
      var r = n(41735),
        s = n.n(r),
        o = n(56545);
      function a(e) {
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

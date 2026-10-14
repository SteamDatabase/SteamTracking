/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [74985],
    {
      95383: (C, y, e) => {
        "use strict";
        e.r(y), e.d(y, { default: () => Ie });
        var t = e(7850),
          i = e(90626),
          I = e(67705);
        const f = (0, I.Tc)("physical_goods", "application_config");
        function B() {
          const [l] = (0, i.useState)(() => f);
          return l;
        }
        function K(l) {
          return f.find(
            (s) =>
              s.edistributor == l.edistributor &&
              s.product_identifier == l.product_identifier,
          );
        }
        var T = e(72604),
          U = e(35038),
          p = e(32288),
          A = e(77008),
          w = e(60298),
          H = e(34592),
          r = e(8323),
          M = e(54963),
          g = e(98609),
          d = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          a = (l, s, o, h) => {
            for (
              var n = h > 1 ? void 0 : h ? c(s, o) : s, u = l.length - 1, S;
              u >= 0;
              u--
            )
              (S = l[u]) && (n = (h ? S(s, o, n) : S(n)) || n);
            return h && n && d(s, o, n), n;
          };
        const m = class le {
          m_mapProductPositionMsgList = new Map();
          m_productListChangeCallback = new r.lu();
          m_messageListChangeCallback = new Map();
          m_steamInterface = null;
          GetKey(s) {
            return `${s.edistributor}_${s.product_identifier}`;
          }
          SortList(s) {
            s.sort((o, h) => o.start_queue_position - h.start_queue_position);
          }
          GetProductListChangeCallback() {
            return this.m_productListChangeCallback;
          }
          GetPositionListChangeCallback(s) {
            const o = this.GetKey(s);
            return this.GetPositionListViaKeyChangeCallback(o);
          }
          GetPositionListViaKeyChangeCallback(s) {
            return (
              this.m_messageListChangeCallback.has(s) ||
                this.m_messageListChangeCallback.set(s, new r.lu()),
              this.m_messageListChangeCallback.get(s)
            );
          }
          GetAllProducts() {
            return Array.from(this.m_mapProductPositionMsgList.keys()).map(
              (s) => {
                const o = s.split("_");
                return {
                  edistributor: Number.parseInt(o[0]),
                  product_identifier: o[1],
                };
              },
            );
          }
          GetPositionMessagingForProduct(s) {
            const o = this.GetKey(s);
            return this.m_mapProductPositionMsgList.get(o);
          }
          AddProductID(s) {
            const o = this.GetKey(s);
            this.m_mapProductPositionMsgList.has(o) ||
              (this.m_mapProductPositionMsgList.set(o, []),
              this.GetProductListChangeCallback().Dispatch(
                this.GetAllProducts(),
              ));
          }
          async SetPositionMessages(s) {
            const o = U.w.Init(p.ku);
            if (s.length == 0)
              return (
                console.log(
                  "CReservationMessagingStore.SetPositionMessages - empty list",
                ),
                !1
              );
            s.forEach((n) => {
              let u = o.Body().add_settings();
              u.set_edistributor(n.edistributor),
                u.set_product_identifier(n.product_identifier),
                u.set_start_queue_position(n.start_queue_position),
                u.set_rtime_estimated_notification(
                  n.rtime_estimated_notification,
                ),
                u.set_localization_token(n.localization_token);
            });
            let h = null;
            try {
              const n = await p.nd.SetReservationPositionMessage(
                this.m_steamInterface.GetServiceTransport(),
                o,
              );
              if (n.GetEResult() == T.R) {
                const u = new Set(),
                  S = Math.floor(Date.now() / 1e3);
                return (
                  s.forEach((D) => {
                    (D.accountid = g.iA.accountid), (D.rtime_created = S);
                    const E = this.GetKey(D);
                    let J = this.m_mapProductPositionMsgList.get(E);
                    const L = J.findIndex(
                      (z) => z.start_queue_position == D.start_queue_position,
                    );
                    let F = [...J];
                    L >= 0 ? (F[L] = D) : (F.push(D), this.SortList(F)),
                      this.m_mapProductPositionMsgList.set(E, F),
                      u.add(this.GetKey(D));
                  }),
                  Array.from(u).forEach((D) => {
                    this.GetPositionListViaKeyChangeCallback(D).Dispatch(
                      this.m_mapProductPositionMsgList.get(D),
                    );
                  }),
                  !0
                );
              }
              h = (0, H.H)(n);
            } catch (n) {
              h = (0, H.H)(n);
            }
            return (
              console.error(
                "CReservationMessagingStore.SetPositionMessages failed: " +
                  h?.strErrorMsg,
                h,
              ),
              !1
            );
          }
          async DeletePositionMessage(s) {
            const o = U.w.Init(p.$J);
            o.Body().set_edistributor(s.edistributor),
              o.Body().set_product_identifier(s.product_identifier),
              o.Body().set_start_queue_position(s.start_queue_position);
            let h = null;
            try {
              const n = await p.nd.DeleteReservationPositionMessage(
                this.m_steamInterface.GetServiceTransport(),
                o,
              );
              if (n.GetEResult() == T.R) {
                const u = this.GetKey(s);
                let S = this.m_mapProductPositionMsgList.get(u);
                const D = S.findIndex(
                    (J) => J.start_queue_position == s.start_queue_position,
                  ),
                  E = [...S];
                return (
                  E.splice(D, 1),
                  this.m_mapProductPositionMsgList.set(u, E),
                  this.GetPositionListChangeCallback(s).Dispatch(E),
                  !0
                );
              }
              h = (0, H.H)(n);
            } catch (n) {
              h = (0, H.H)(n);
            }
            return (
              console.error(
                "CReservationMessagingStore.SetPositionMessages failed: " +
                  h?.strErrorMsg,
                h,
              ),
              !1
            );
          }
          async ReloadReservationPositionMessages() {
            const s = U.w.Init(p.jd);
            return await p.nd.ReloadAllReservationPositionMessages(
              this.m_steamInterface.GetServiceTransport(),
              s,
            );
          }
          static s_Singleton;
          static Get() {
            return (
              le.s_Singleton ||
                ((le.s_Singleton = new le()), le.s_Singleton.Init()),
              le.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_steamInterface = (0, w.p)(new A.D(g.TS.WEBAPI_BASE_URL));
            const s = (0, I.Tc)(
              "reservation_queue_position_messages",
              "application_config",
            );
            this.ValidateInputDefault(s) &&
              (s.map((o) => {
                const h = this.GetKey(o);
                this.m_mapProductPositionMsgList.has(h) ||
                  this.m_mapProductPositionMsgList.set(h, []),
                  this.m_mapProductPositionMsgList.get(h).push(o);
              }),
              this.m_mapProductPositionMsgList.forEach((o) =>
                this.SortList(o),
              ));
          }
          GetSteamInterface() {
            return this.m_steamInterface;
          }
          ValidateInputDefault(s) {
            const o = s;
            return (
              o &&
              Array.isArray(o) &&
              o.length > 0 &&
              typeof o[0].edistributor == "number" &&
              typeof o[0].product_identifier == "string"
            );
          }
        };
        a([M.oI], m.prototype, "AddProductID", 1),
          a([M.oI], m.prototype, "SetPositionMessages", 1),
          a([M.oI], m.prototype, "DeletePositionMessage", 1),
          a([M.oI], m.prototype, "ReloadReservationPositionMessages", 1);
        let P = m;
        function x() {
          const [l, s] = (0, i.useState)(() => P.Get().GetAllProducts());
          return (0, M.hL)(P.Get().GetProductListChangeCallback(), s), l;
        }
        function N(l) {
          const [s, o] = (0, i.useState)(() =>
            P.Get().GetPositionMessagingForProduct(l),
          );
          return (0, M.hL)(P.Get().GetPositionListChangeCallback(l), o), s;
        }
        function Q() {
          const l = P.Get();
          return {
            fnAddProductID: l.AddProductID,
            fnSetPositionMessages: l.SetPositionMessages,
            fnDeletePositionMessage: l.DeletePositionMessage,
            fnReloadReservationPositionMessages:
              l.ReloadReservationPositionMessages,
          };
        }
        var O = e(77411),
          G = e(65285),
          v = e(58534);
        function j(l) {
          const [s, o] = (0, i.useState)(null),
            { fnAddProductID: h } = Q();
          return (
            console.log("AddProductToReservationPositionMessage selected: ", s),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(v.JU, { children: "Add Product SKU:" }),
                (0, t.jsx)("p", {
                  children:
                    "Select an item for which we want to communicate a reservation status.",
                }),
                (0, t.jsx)(_, { selected: s, setSelected: o }),
                (0, t.jsxs)(v.$n, {
                  disabled: !s,
                  onClick: () => {
                    h(s), o(null);
                  },
                  children: [
                    "Add '",
                    s?.product_description ?? s?.product_identifier,
                    "' To List",
                  ],
                }),
              ],
            })
          );
        }
        function _(l) {
          const { selected: s, setSelected: o } = l,
            h = (0, i.useRef)(void 0),
            n = B(),
            u = x(),
            S = (0, i.useMemo)(
              () =>
                !n || !u
                  ? []
                  : n
                      .filter(
                        (E) =>
                          u.findIndex(
                            (J) =>
                              J.edistributor == E.edistributor &&
                              J.product_identifier == E.product_identifier,
                          ) == -1,
                      )
                      .map((E) => ({
                        value: E,
                        label: `${E.product_description} @ ${E.distributor} - product id: ${E.product_identifier}, part number ${E.part_number} `,
                      })),
              [n, u],
            );
          (0, i.useEffect)(() => {
            h?.current && h.current.clearValue();
          }, [u]);
          const D = S?.find(
            (E) =>
              s &&
              s.edistributor == E.value.edistributor &&
              s.product_identifier == E.value.product_identifier,
          );
          return (0, t.jsx)(O.Ay, {
            isSearchable: !0,
            ref: h,
            isMulti: !1,
            isClearable: !0,
            className: G.ItemSelect,
            options: S,
            value: D,
            onChange: (E) => {
              E && o(E.value);
            },
          });
        }
        var R = e(73191),
          Y = e(43308),
          W = e(59490),
          b = e(2801),
          q = e(88003),
          X = e(12932),
          k = e(82734),
          V = e(18210),
          Ee = e(95695),
          Re = e(74107),
          ye = e(72609),
          de = e(39905),
          ce = e(86722),
          Be = e(78603),
          Te = e(12842),
          ve = e.n(Te);
        function ne(l, s, o, h, n, u, S) {
          let D = null,
            E = !1,
            J;
          if (o == EHardwareDetailLoadState.k_LoadFailure || !n)
            D = SharedLocalization.Localize("#Sale_Reservations_BusyServer");
          else if (BShouldDisplayKomodoMessage(h, l))
            (E = !0),
              l === k_nSteamDeckAppid
                ? (D = LocalizeInlineReact(
                    "#Sale_Reservation_Komodo",
                    jsx("a", {
                      className: reservestyles.Link,
                      href: "https://steamdeck.komodo.jp",
                    }),
                  ))
                : l == k_nSteamMachineAppid || l == k_nSteamFrameAppid
                  ? (D = LocalizeReact(
                      "#Sale_Reservation_Komodo_Generic_NoSk",
                      s ??
                        SharedLocalization.Localize("#AppTypeLabel_hardware"),
                      jsx("a", {
                        className: reservestyles.Link,
                        href: "https://komodostation.com/",
                        children: "komodostation.com",
                      }),
                    ))
                  : (D = LocalizeReact(
                      "#Sale_Reservation_Komodo_Generic",
                      s ??
                        SharedLocalization.Localize("#AppTypeLabel_hardware"),
                      jsx("a", {
                        className: reservestyles.Link,
                        href: "https://komodostation.com/",
                        children: "komodostation.com",
                      }),
                    ));
          else if (n && n.some((L) => !L.allow_purchase_in_country))
            (E = !0),
              (D = SharedLocalization.Localize(
                "#Sale_Reservation_NotAvailableCountry",
              ));
          else if (n && n.some((L) => L.account_restricted_from_purchasing)) {
            if (UserConfig.logged_in) {
              const L = n.some((z) => z.requires_reservation),
                F = n.find(
                  (z) =>
                    z.account_first_date_purchase_requirement &&
                    z.account_first_date_purchase_requirement > 0,
                )?.account_first_date_purchase_requirement;
              L
                ? (D = F
                    ? SharedLocalization.Localize(
                        "#Sale_Reservation_NotAvailale_PreDate",
                        LocalizeDateHumanReadable(F),
                      )
                    : SharedLocalization.Localize(
                        "#Sale_Reservation_NotAllowedAccount",
                      ))
                : (D = SharedLocalization.Localize(
                    "#Sale_Purchase_NotAllowedAccount",
                  )),
                (J = styles.UserTooNew),
                (D = jsx(ie, {
                  elReservationMessage: D,
                  strUrlLearnMoreLink: S,
                }));
            }
          } else
            n &&
              n.some(
                (L) =>
                  L.requires_reservation &&
                  L.appid_ownership_not_allowed_to_reserve &&
                  (L.not_allowed_to_reserved_because_already_owned ||
                    u.has(L.appid_ownership_not_allowed_to_reserve)),
              ) &&
              UserConfig.logged_in &&
              ((D = jsx(ie, {
                elReservationMessage: s
                  ? SharedLocalization.Localize(
                      "#Sale_Reservation_CannotReserveDueToOwnership_Specific",
                      s,
                    )
                  : SharedLocalization.Localize(
                      "#Sale_Reservation_CannotReserveDueToOwnership_Generic",
                    ),
                strUrlLearnMoreLink: S,
              })),
              (J = styles.AlreadyBought));
          return {
            elReservationSystemMessage: D,
            bHidePackageDisplay: E,
            messageDisplayClassNameOverride: J,
          };
        }
        function ie(l) {
          const { elReservationMessage: s, strUrlLearnMoreLink: o } = l;
          return o
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  s,
                  (0, t.jsx)(ce.d$, {
                    url: o,
                    className: ve().Link,
                    children: de.Z.Localize("#Button_Learn"),
                  }),
                ],
              })
            : s;
        }
        var ue = e(7582),
          ge = e(92825),
          Pe = e.n(ge);
        function oe(l, s) {
          return l > s + 1 ? l - s : l + 12 - s;
        }
        function ae(l) {
          const {
            strToken: s,
            rtEstimatedNotifcationDate: o,
            strUrlLearnMoreLink: h,
            bInReservationQueue: n,
            bWaitlistIsActive: u,
            reservedHardwareDetail: S,
            bHideLabel: D,
          } = l;
          let E = de.Z.Localize("#Sale_Reservation_Fallback_V2"),
            J = !1;
          if (
            (n
              ? (E = de.Z.Localize("#Sale_Reservation_Fallback_user_V2"))
              : u &&
                S &&
                !S.position_is_waitlist &&
                ((E = Re.F5.Localize(
                  "#Reservation_Join_Waitlist_Cancel_Reservation",
                )),
                (J = !0)),
            !s || !o || J)
          )
            return (0, t.jsx)("div", {
              className: Pe().Ctn,
              children: (0, t.jsx)(ie, {
                elReservationMessage: E,
                strUrlLearnMoreLink: h,
              }),
            });
          const L = new Date(o * 1e3),
            F = L.getMonth() + 1;
          let z = "",
            Z = "",
            ee = "",
            pe = "",
            te = s;
          switch (s) {
            case "#Sale_Reservation_Year":
            case "#Sale_Reservation_AfterYear":
              z = "" + L.getFullYear();
              break;
            case "#Sale_Reservation_MonthYear":
            case "#Sale_Reservation_AfterMonthYear":
              (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (Z = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_TwoMonthRangeYear":
              (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + oe(F, 1))),
                (Z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (ee = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_ThreeMonthRangeYear":
              (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + oe(F, 2))),
                (Z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (ee = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_FourMonthRangeYear":
              (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + oe(F, 3))),
                (Z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (ee = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_Quarter_ThreeMonths":
              (te =
                "#Sale_Reservation_Quarter" + (Math.floor((F - 1) / 3) + 1)),
                (z = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_AfterQuarter_ThreeMonths":
              (te =
                "#Sale_Reservation_AfterQuarter" +
                (Math.floor((F - 1) / 3) + 1)),
                (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (Z = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_ByYear":
              z = "" + L.getFullYear();
              break;
            case "#Sale_Reservation_ByMonthYear":
              (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (Z = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_BetweenNowAndLastDay":
              (z = (0, V.we)("#Sale_Reservation_MonthNoun_" + F)),
                (Z = "" + new Date(L.getFullYear(), L.getMonth(), 0).getDate()),
                (ee = "" + L.getFullYear());
              break;
            case "#Sale_Reservation_RelativeWeekly":
              {
                const _e = ue.HD.GetTimeNowWithOverride(),
                  De = Math.floor((o - _e) / (1440 * 60));
                De < 7 ||
                  (De < 28
                    ? ((te = "#Sale_Reservation_RelativeWeekly_Plural"),
                      (z = "" + Math.floor(De / 7 + 1)))
                    : ((te = "#Sale_Reservation_RelativeMonthly"),
                      (z = "" + Math.floor(De / 28 + 1))));
              }
              break;
            case "#Sale_Reservation_AvailabilityUnknown":
              te = void 0;
              break;
            default:
              te = "#Sale_Reservation_Fallback";
          }
          return (0, t.jsxs)("div", {
            className: Pe().Ctn,
            children: [
              (0, t.jsx)("div", {
                children:
                  !D &&
                  !!te &&
                  (0, V.we)(
                    n
                      ? "#Sale_Reservation_YourExpectedDate"
                      : "#Sale_Reservation_ExpectedDate",
                  ),
              }),
              (0, t.jsx)(ie, {
                elReservationMessage: te ? (0, V.we)(te, z, Z, ee, pe) : E,
                strUrlLearnMoreLink: h,
              }),
            ],
          });
        }
        var re = e(24642);
        function me(l) {
          const s = x();
          return !s || s.length == 0
            ? (0, t.jsx)("div", {
                children:
                  "No products with reservation position messages exists.",
              })
            : (0, t.jsx)("div", {
                children: s.map((o) =>
                  (0, t.jsx)(
                    he,
                    { productID: o },
                    `${o.edistributor}_${o.product_identifier}`,
                  ),
                ),
              });
        }
        function Se(l) {
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(v.JU, { children: "instructions:" }),
              (0, t.jsx)("p", {
                children:
                  "Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.",
              }),
              (0, t.jsx)("p", {
                children:
                  "Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.",
              }),
              (0, t.jsx)("p", {
                children:
                  "Queue positions are fixed for each user who enters the queue and only go up with new users entering the queue.  Their position doesn't decrease when previous users cancel or purchase the item.",
              }),
            ],
          });
        }
        function je(l) {
          const s = x();
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(v.JU, { children: "Force update:" }),
              (0, t.jsx)("p", {
                children:
                  "By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.",
              }),
              (0, t.jsx)("p", {
                children:
                  "We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.",
              }),
              (0, t.jsx)(v.$n, {
                onClick: (o) => (0, q.pg)((0, t.jsx)(se, {}), (0, k.uX)(o)),
                children: "Force Reload Definitions on Steam Servers",
              }),
            ],
          });
        }
        function he(l) {
          const { productID: s } = l,
            o = K(s),
            h = o?.product_description + " " + o?.distributor,
            n = N(s);
          return o
            ? (0, t.jsxs)(X.qx, {
                bStartMinimized: !1,
                title: h,
                tooltip: `distributor enum: ${o.edistributor}, part number: ${o.part_number}, product identifier: ${o.product_identifier}`,
                children: [
                  (0, t.jsx)(v.$n, {
                    onClick: (u) =>
                      (0, q.pg)((0, t.jsx)(fe, { productID: s }), (0, k.uX)(u)),
                    children: "Add new start position",
                  }),
                  (0, t.jsxs)("table", {
                    className: G.ItemTable,
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", {
                              children: "Starting Queue Position",
                            }),
                            (0, t.jsx)("th", {
                              children: "Estimate Date Receive Invite",
                            }),
                            (0, t.jsx)("th", { children: "Localized Date" }),
                            (0, t.jsx)("th", { children: "Entry Created By" }),
                            (0, t.jsx)("th", {}),
                          ],
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: n.map((u) =>
                          (0, t.jsx)(
                            Me,
                            { positionMsg: u },
                            h + u.start_queue_position,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, t.jsxs)("div", {
                children: [
                  "Unexpected: Could not find ProductID: ",
                  s.edistributor,
                  " : ",
                  s.product_identifier,
                ],
              });
        }
        function Me(l) {
          const { positionMsg: s } = l;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: (0, re.D)(s.start_queue_position) }),
              (0, t.jsx)("td", {
                children: (0, V.TW)(s.rtime_estimated_notification),
              }),
              (0, t.jsx)("td", {
                children: (0, t.jsx)(ae, {
                  strUrlLearnMoreLink: void 0,
                  rtEstimatedNotifcationDate: s.rtime_estimated_notification,
                  strToken: s.localization_token,
                  bInReservationQueue: !0,
                  bHideLabel: !0,
                }),
              }),
              (0, t.jsxs)("td", {
                children: [
                  (0, t.jsx)("div", {
                    children: (0, t.jsx)(W.p, { accountID: s.accountid }),
                  }),
                  (0, t.jsx)("br", {}),
                  "On: ",
                  (0, V.TW)(s.rtime_created),
                ],
              }),
              (0, t.jsxs)("td", {
                children: [
                  (0, t.jsx)(v.$n, {
                    onClick: (o) =>
                      (0, q.pg)(
                        (0, t.jsx)(fe, {
                          productID: s,
                          existingPositionMsg: s,
                        }),
                        (0, k.uX)(o),
                      ),
                    children: "Update",
                  }),
                  (0, t.jsx)(v.$n, {
                    onClick: (o) =>
                      (0, q.pg)(
                        (0, t.jsx)(Le, { positionMsg: s }),
                        (0, k.uX)(o),
                      ),
                    children: "Delete",
                  }),
                ],
              }),
            ],
          });
        }
        function fe(l) {
          const { productID: s, existingPositionMsg: o, closeModal: h } = l,
            { fnSetPositionMessages: n } = Q(),
            u = Math.floor(Date.now() / 1e3),
            [S, D] = (0, i.useState)(o?.start_queue_position || 0),
            [E, J] = (0, i.useState)(
              o?.rtime_estimated_notification || u + 1440 * 60,
            ),
            [L, F] = (0, i.useState)(
              o?.localization_token || "#Sale_Reservation_MonthYear",
            ),
            z = o ? "Update Queue Range" : "Create Queue Range",
            Z = (0, R.vs)();
          return Z.bLoading
            ? (0, t.jsx)(R.Hh, { state: Z, strDialogTitle: z, closeModal: h })
            : (0, t.jsx)(b.o0, {
                bDisableBackgroundDismiss: !0,
                strTitle: z,
                onCancel: h,
                onOK: () => {
                  Z.fnSetLoading(!0);
                  const ee = {
                    ...s,
                    start_queue_position: S,
                    rtime_estimated_notification: E,
                    localization_token: L,
                  };
                  n([ee]).then((pe) => {
                    pe
                      ? (Z.fnSetSuccess(!0),
                        Z.fnSetStrSuccess("Successfully created position"))
                      : (Z.fnSetSuccess(!1),
                        Z.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
                },
                children: (0, t.jsxs)("div", {
                  className: G.NewEntryCtn,
                  children: [
                    (0, t.jsxs)("p", {
                      children: [
                        "When we get to accepting reservation number ",
                        (0, t.jsx)("i", { children: "n" }),
                        ", show those users a date they can anticipate to recieve an invite to purchase. If we are choosing a display that shows the day, please account for the date is being shown to each user in their local time.",
                      ],
                    }),
                    (0, t.jsx)(v.pd, {
                      type: "number",
                      min: "0",
                      value: S,
                      label: "Starting Queue Position",
                      onChange: (ee) =>
                        D(Number.parseInt(ee?.currentTarget?.value || "0")),
                    }),
                    (0, t.jsx)(Y.K, {
                      bShowTimeZone: !0,
                      strDescription:
                        "Estimated Time Users will receive invite",
                      strDescToolTip:
                        "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                      nEarliestTime: u,
                      fnGetTimeToUpdate: () => E,
                      fnSetTimeToUpdate: J,
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)(Ae, {
                      strToken: L,
                      fnSetToken: F,
                      rtEstimateDate: E,
                    }),
                  ],
                }),
              });
        }
        function Le(l) {
          const { positionMsg: s, closeModal: o } = l,
            { fnDeletePositionMessage: h } = Q(),
            n = `Delete Queue Position ${(0, re.D)(s.start_queue_position)}`,
            u = (0, R.vs)();
          return u.bLoading
            ? (0, t.jsx)(R.Hh, { state: u, strDialogTitle: n, closeModal: o })
            : (0, t.jsx)(b.o0, {
                strTitle: n,
                strDescription: "Are you sure, this action is no undo'able?",
                onCancel: o,
                onOK: () => {
                  u.fnSetLoading(!0),
                    h(s).then((S) => {
                      S
                        ? (u.fnSetSuccess(!0),
                          u.fnSetStrSuccess("Successfully delete position"))
                        : (u.fnSetSuccess(!1),
                          u.fnSetStrError(
                            "Failed, please check console logs and/or try again",
                          ));
                    });
                },
              });
        }
        function se(l) {
          const { closeModal: s } = l,
            { fnReloadReservationPositionMessages: o } = Q(),
            [h, n] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              o().then(() => n(!0));
            }, [o]),
            (0, t.jsx)(b.o0, {
              bAlertDialog: !0,
              strTitle: "Reload Definition",
              strDescription: h
                ? "Reload sent to server! Now safe to close dialog"
                : "Reloading In Progress...",
              closeModal: s,
            })
          );
        }
        const Ce = [
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
          "#Sale_Reservation_ByYear",
          "#Sale_Reservation_ByMonthYear",
          "#Sale_Reservation_BetweenNowAndLastDay",
          "#Sale_Reservation_AvailabilityUnknown",
        ];
        function Ae(l) {
          const { strToken: s, fnSetToken: o, rtEstimateDate: h } = l,
            n = (0, i.useMemo)(
              () =>
                Ce.map((u) => ({
                  label: (0, t.jsx)(ae, {
                    strToken: u,
                    rtEstimatedNotifcationDate: h,
                    strUrlLearnMoreLink: void 0,
                    bInReservationQueue: !0,
                  }),
                  data: u,
                })),
              [h],
            );
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(v.m, {
                strDropDownClassName: Ee.DropDownScroll,
                label: "Date Format",
                rgOptions: n,
                selectedOption: s,
                onChange: (u) => o(u.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h3", {
                    children: "This will display to users as: ",
                  }),
                  (0, t.jsxs)("div", {
                    className: G.DatePreview,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, V.we)("#Sale_Reservation_ExpectedDate"),
                      }),
                      (0, t.jsx)(ae, {
                        strUrlLearnMoreLink: void 0,
                        rtEstimatedNotifcationDate: h,
                        strToken: s,
                        bInReservationQueue: !0,
                        bHideLabel: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var xe = e(36707),
          Oe = e(45737),
          $ = e.n(Oe);
        function Ie(l) {
          return (0, t.jsxs)("div", {
            className: (0, xe.A)(G.ctn, $().AdminPageCtn),
            children: [
              (0, t.jsx)("h1", {
                className: $().PageTitle,
                children:
                  "Lawrence's Reservation Queue Position Messaging Tools",
              }),
              (0, t.jsx)("hr", { className: "VO" }),
              (0, t.jsxs)("div", {
                className: $().ColumnCtn,
                children: [
                  (0, t.jsxs)("div", {
                    className: $().LeftCol,
                    children: [
                      (0, t.jsx)("div", {
                        className: $().SectionCtn,
                        children: (0, t.jsx)(j, {}),
                      }),
                      (0, t.jsx)("div", {
                        className: $().SectionCtn,
                        children: (0, t.jsx)(me, {}),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: $().RightCol,
                    children: [
                      (0, t.jsx)("div", {
                        className: $().SectionCtn,
                        children: (0, t.jsx)(Se, {}),
                      }),
                      (0, t.jsx)("div", {
                        className: $().SectionCtn,
                        children: (0, t.jsx)(je, {}),
                      }),
                      (0, t.jsxs)("div", {
                        className: $().SectionCtn,
                        children: [
                          (0, t.jsx)(v.JU, { children: "Useful Links:" }),
                          (0, t.jsx)("ul", {
                            children: (0, t.jsx)("li", {
                              children: (0, t.jsx)("a", {
                                href: `${g.TS.STATS_BASE_URL}steamdeck/reservations/`,
                                target: "_blank",
                                children:
                                  "Steam Hardware reservation stats page",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      86722: (C, y, e) => {
        "use strict";
        e.d(y, { Pm: () => w, d$: () => H, tB: () => A });
        var t = e(7850),
          i = e(24660),
          I = e(72609),
          f = e(43434),
          B = e(83482),
          K = e(71421),
          T = e(53113);
        function U(r) {
          const M = r?.jsondata?.read_more_link;
          if (!M) return;
          const g = (0, T.wm)(M).toLocaleLowerCase();
          return g ? [g] : void 0;
        }
        function p(r, M) {
          return (0, f.p)(r, U(M));
        }
        function A(r, M) {
          if (!r) return "";
          if (!(0, f.p)(r)) return (0, T.NT)(r);
          const g = p(r, M) ? (0, f.E)(r) : r;
          return (I.TS.IN_CLIENT ? "steam://openurl_external/" : "") + g;
        }
        function w(r, M, g) {
          const d = r.toLowerCase().startsWith("http") ? r : "http://" + r;
          return (0, t.jsx)(H, { url: d, event: M, children: g || r });
        }
        const H = (r) => {
          const { url: M, event: g, className: d, style: c } = r;
          let a = (0, B.OZ)(M);
          a = A(a, g);
          const m = (0, f.p)(a) ? "noopener nofollow" : void 0,
            P =
              typeof r.children == "string" &&
              r.children.length > 0 &&
              M &&
              !M.startsWith("steam://")
                ? (0, T.Qz)(M)
                : void 0;
          return (0, t.jsx)(K.Gq, {
            toolTipContent: P,
            direction: "top",
            children: (0, t.jsx)(i.Ii, {
              className: d,
              href: a,
              rel: m,
              id: r.id,
              style: c,
              children: r.children,
            }),
          });
        };
      },
      59432: (C, y, e) => {
        "use strict";
        e.d(y, { Gw: () => B, Lk: () => K, ai: () => f, mm: () => I });
        var t = e(14947);
        const i = t.sH.box(void 0);
        function I() {
          return i.get();
        }
        function f(T) {
          (0, t.h5)(() => i.set(T));
        }
        function B() {
          const T = i.get();
          return T || Math.floor(Date.now() / 1e3);
        }
        function K() {
          const T = i.get();
          return T ? new Date(T * 1e3) : new Date();
        }
      },
      74107: (C, y, e) => {
        "use strict";
        e.d(y, { F5: () => f });
        var t = e(37901);
        const i = {};
        (i.arabic = () => e.e(22940).then(e.t.bind(e, 22940, 19))),
          (i.brazilian = () => e.e(59990).then(e.t.bind(e, 59990, 19))),
          (i.bulgarian = () => e.e(38573).then(e.t.bind(e, 38573, 19))),
          (i.czech = () => e.e(40975).then(e.t.bind(e, 40975, 19))),
          (i.danish = () => e.e(38721).then(e.t.bind(e, 38721, 19))),
          (i.dutch = () => e.e(354).then(e.t.bind(e, 354, 19))),
          (i.english = () => e.e(49768).then(e.t.bind(e, 49768, 19))),
          (i.finnish = () => e.e(12931).then(e.t.bind(e, 12931, 19))),
          (i.french = () => e.e(6064).then(e.t.bind(e, 6064, 19))),
          (i.german = () => e.e(62942).then(e.t.bind(e, 62942, 19))),
          (i.greek = () => e.e(13924).then(e.t.bind(e, 13924, 19))),
          (i.hungarian = () => e.e(21822).then(e.t.bind(e, 99441, 19))),
          (i.indonesian = () => e.e(42584).then(e.t.bind(e, 42584, 19))),
          (i.italian = () => e.e(97688).then(e.t.bind(e, 97688, 19))),
          (i.japanese = () => e.e(5407).then(e.t.bind(e, 5407, 19))),
          (i.koreana = () => e.e(65815).then(e.t.bind(e, 65815, 19))),
          (i.latam = () => e.e(44287).then(e.t.bind(e, 44287, 19))),
          (i.malay = () => e.e(58160).then(e.t.bind(e, 58160, 19))),
          (i.norwegian = () => e.e(33648).then(e.t.bind(e, 33648, 19))),
          (i.polish = () => e.e(22649).then(e.t.bind(e, 22649, 19))),
          (i.portuguese = () => e.e(23629).then(e.t.bind(e, 23629, 19))),
          (i.romanian = () => e.e(81555).then(e.t.bind(e, 81555, 19))),
          (i.russian = () => e.e(11809).then(e.t.bind(e, 11809, 19))),
          (i.sc_schinese = () => e.e(98347).then(e.t.bind(e, 98347, 19))),
          (i.schinese = () => e.e(79004).then(e.t.bind(e, 79004, 19))),
          (i.spanish = () => e.e(97760).then(e.t.bind(e, 97760, 19))),
          (i.swedish = () => e.e(86881).then(e.t.bind(e, 86881, 19))),
          (i.tchinese = () => e.e(28183).then(e.t.bind(e, 28183, 19))),
          (i.thai = () => e.e(10950).then(e.t.bind(e, 10950, 19))),
          (i.turkish = () => e.e(22568).then(e.t.bind(e, 22568, 19))),
          (i.ukrainian = () => e.e(17038).then(e.t.bind(e, 17038, 19))),
          (i.vietnamese = () => e.e(62327).then(e.t.bind(e, 62327, 19)));
        async function I(T) {
          if (i[T]) return i[T]();
        }
        const f = (0, t.l)(I);
        async function B() {
          return Promise.all([f.Ready()]);
        }
        function K() {
          return useLocalizationReady(f);
        }
      },
      83482: (C, y, e) => {
        "use strict";
        e.d(y, {
          Ay: () => d,
          It: () => H,
          L3: () => r,
          OZ: () => A,
          k2: () => p,
          wJ: () => w,
        });
        var t = e(72865),
          i = e(25294),
          I = e(71742),
          f = e(53113),
          B = e(98609),
          K = e(72609),
          T = e(90626),
          U = e(39414);
        function p(c, a = "", m = null) {
          return d.InstrumentLink(c, a, m);
        }
        function A(c, a, m) {
          const P = (0, t.n9)();
          return T.useMemo(() => {
            const x = (0, f.wm)(c).toLowerCase(),
              N = (0, f.wm)(K.TS.COMMUNITY_BASE_URL).toLowerCase(),
              Q = (0, f.wm)(K.TS.STORE_BASE_URL).toLowerCase();
            return x === N || x === Q ? (0, t.bV)(P, c, a, m) : c;
          }, [P, c, a, m]);
        }
        function w(c, a, m = null) {
          const P = r(a, m),
            x = a ? i.A.GetCuratorClanIDParam(a) : null;
          return i.A.AddNavParamToURL(c, P, x);
        }
        function H(c, a, m, P = null) {
          const x = w(c, a, P);
          if (m && Object.keys(m).length > 0)
            try {
              const N = new URL((0, U.S)(x)),
                Q = new URLSearchParams(N.search);
              return (
                Object.entries(m).forEach(([O, G]) => {
                  Q.set(O, encodeURIComponent(G ?? ""));
                }),
                N.origin + N.pathname + "?" + Q.toString() + N.hash
              );
            } catch {}
          return x;
        }
        function r(c, a = null) {
          return c?.domain ? d.GetLinkParam(c, a) : B.TS.SNR;
        }
        function M(c, a = "", m = null) {
          const P = `${Config.STORE_BASE_URL}app/${c}`;
          return p(P, a, m);
        }
        function g(c, a = "") {
          const m = `${Config.STORE_BASE_URL}dlc/${c}`;
          return p(m, a);
        }
        class d {
          static sm_strDomain;
          static sm_strController;
          static sm_strMethod;
          static sm_strSubmethod;
          static sm_strComputedLinkPrefix;
          static SetNavEventParams(a, m, P = null, x = null) {
            (d.sm_strDomain = a),
              (d.sm_strController = m),
              (d.sm_strMethod = P),
              (d.sm_strSubmethod = x),
              (d.sm_strComputedLinkPrefix = null);
          }
          static GetDefaultParams() {
            let a = { domain: d.sm_strDomain, controller: d.sm_strController };
            return (
              d.sm_strMethod && (a.method = d.sm_strMethod),
              d.sm_strSubmethod && (a.submethod = d.sm_strSubmethod),
              a
            );
          }
          static InstrumentLink(a, m, P = null) {
            const x = d.GetLinkParam(m, P),
              N = typeof m != "string" ? i.A.GetCuratorClanIDParam(m) : null;
            return i.A.AddNavParamToURL(a, x, N);
          }
          static GetLinkParam(a, m = null) {
            let P;
            if (typeof a != "string") {
              if (a.domain) return i.A.GetSNRLinkParam(a, m);
              P = a.feature || "";
            }
            let x;
            if (!d.sm_strComputedLinkPrefix && !d.ComputeStaticLinkPrefix())
              return null;
            x = d.sm_strComputedLinkPrefix;
            let N = i.A.EncodeEventComponent(P);
            return N && ((x += "_" + N), m && (x += "_" + m)), x;
          }
          static ComputeStaticLinkPrefix() {
            return d.sm_strDomain
              ? ((d.sm_strComputedLinkPrefix = i.A.ComputeLinkPrefix(
                  d.sm_strDomain,
                  d.sm_strController,
                  d.sm_strMethod,
                  d.sm_strSubmethod,
                )),
                !0)
              : ((0, I.wT)(
                  !1,
                  "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
                ),
                !1);
          }
        }
      },
      7582: (C, y, e) => {
        "use strict";
        e.d(y, { HD: () => U, P_: () => p, f1: () => M, sB: () => r });
        var t = e(19367),
          i = e.n(t),
          I = e(90626),
          f = e(59432),
          B = e(47689),
          K = e(77291);
        class T {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, f.mm)();
          }
          set nOverrideDateNow(c) {
            (0, f.ai)(c);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, f.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, f.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, f.mm)();
          }
          ParseDevOverrides(c) {
            if (!c || c.length == 0) return;
            new URLSearchParams(c[0] == "?" ? c.substring(1) : c).has("t");
          }
        }
        const U = new T();
        (0, K.V)("g_EventCalendarDevFeatures", U);
        function p(d = 1) {
          const [c, a] = I.useState(() => H()),
            m = (0, B.m)("useTimeNowWithOverride"),
            P = I.useCallback(() => {
              m.token.reason || a(H());
            }, []);
          return (
            I.useEffect(() => {
              const x = 1e3 * d,
                N = Date.now() % x,
                Q = x - N,
                O = window.setTimeout(P, Q);
              return () => {
                window.clearTimeout(O);
              };
            }, [c, d, P]),
            c
          );
        }
        const w = Math.floor(new Date().getTime() / 1e3);
        function H() {
          const d = Math.floor(Date.now() / 1e3);
          return U.nOverrideDateNow ? U.nOverrideDateNow + (d - w) : d;
        }
        function r() {
          return U.nOverrideDateNow ?? w;
        }
        function M() {
          return I.useMemo(() => r(), []);
        }
        function g() {
          return React.useMemo(() => U.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      54407: (C, y, e) => {
        "use strict";
        e.d(y, { B3: () => N, CF: () => Q, KM: () => c, KT: () => x });
        var t = e(41735),
          i = e.n(t),
          I = e(58632),
          f = e.n(I),
          B = e(90626),
          K = e(20194),
          T = e(75233),
          U = e(72604),
          p = e(76559),
          A = e(34592),
          w = e(3166),
          H = e(35038),
          r = e(27386),
          M = e(68312),
          g = e(40497);
        const d = "nicknames";
        function c(O) {
          const G = (0, M.KV)(),
            { data: v, isLoading: j } = (0, K.I)({
              queryKey: [d],
              queryFn: async () => {
                const _ = new Map();
                if (w.iA.logged_in) {
                  const R = H.w.Init(r.w_T),
                    W = (await r.xtC.GetNicknameList(G, R)).Body().toObject();
                  W?.nicknames &&
                    W.nicknames.length > 0 &&
                    W.nicknames.forEach((b) => {
                      b.accountid &&
                        b.nickname &&
                        _.set(b.accountid, b.nickname);
                    });
                }
                return _;
              },
            });
          return v ? v.get(O) : null;
        }
        async function a(O) {
          if (!O || O.length == 0) return [];
          const G =
            (0, w.yK)() == "community"
              ? w.TS.COMMUNITY_BASE_URL
              : w.TS.STORE_BASE_URL;
          if (O.length == 1) {
            const v = { accountid: O[0], origin: self.origin },
              j = await i().get(`${G}actions/ajaxgetavatarpersona`, {
                params: v,
              });
            if (
              !j ||
              j.status != 200 ||
              j.data?.success != U.R ||
              !j.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, A.H))(j).strErrorMsg}`;
            return [j.data.userinfo];
          } else {
            const v = { accountids: O.join(","), origin: self.origin },
              j = await i().get(`${G}actions/ajaxgetmultiavatarpersona`, {
                params: v,
              });
            if (
              !j ||
              j.status != 200 ||
              j.data?.success != U.R ||
              !j.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, A.H))(j).strErrorMsg}`;
            const _ = new Map();
            return (
              j.data.userinfos.forEach((R) =>
                _.set(new p.b(R.steamid).GetAccountID(), R),
              ),
              O.map((R) => _.get(R))
            );
          }
        }
        const m = new (f())((O) => a(O), { cache: !1 }),
          P = "avatarandpersonas";
        function x(O) {
          const { data: G, isLoading: v } = (0, K.I)({
            queryKey: [P, O],
            queryFn: () => m.load(O),
          });
          return [G, v];
        }
        function N(O) {
          const G = (0, T.jE)(),
            { data: v, isLoading: j } = (0, K.I)({
              queryKey: [P, O],
              queryFn: async () => {
                const R = await m.loadMany(O);
                return (
                  R.forEach((Y) => {
                    if (Y instanceof Error) return;
                    const W = [P, new p.b(Y.steamid).GetAccountID()];
                    G.setQueryData(W, Y);
                  }),
                  R
                );
              },
              enabled: O?.length > 0,
            }),
            _ = (0, B.useMemo)(() => {
              const R = new Array();
              return (
                v?.forEach((Y) => {
                  Y instanceof Error || R.push(Y);
                }),
                R
              );
            }, [v]);
          return j ? null : _;
        }
        function Q(O) {
          return g.L.getQueryData([P, O]);
        }
      },
      43308: (C, y, e) => {
        "use strict";
        e.d(y, { K: () => a });
        var t = e(7850),
          i = e(90626),
          I = e(92298),
          f = e.n(I),
          B = e(44894),
          K = e(7582),
          T = e(95695),
          U = e.n(T),
          p = e(36707),
          A = e(18210),
          w = e(71421),
          H = e(12916),
          r = e.n(H),
          M = e(87937),
          g = e.n(M);
        const d = "hh:mm a",
          c = "HH:mm";
        function a(v) {
          const {
            nLatestTime: j,
            nEarliestTime: _,
            fnGetTimeToUpdate: R,
            onError: Y,
            strAlsoShowTimeZone: W,
            disabled: b,
            bNoDefaultDate: q,
            className: X,
            strDescToolTip: k,
            strDescription: V,
            bShowTimeZone: Ee,
            strInvalidDateTimeLocalizedMsg: Re,
            fnIsValidDateTime: ye,
            bWeekdaysOnly: de,
            fnSetTimeToUpdate: ce,
            bForce24HourFormat: Be,
            bAllowClear: Te,
          } = v;
          let ve = x() || Be ? c : d;
          const ne = R(),
            [ie, ue] = i.useState(ne > 0 ? g()(ne * 1e3) : null),
            [ge, Pe] = i.useState(0),
            [oe, ae] = i.useState(),
            [re, me] = i.useState(),
            Se = G(oe, re, Re, ye, Y),
            je = !Y && Se;
          let he;
          if (j && _ && j == _ && _ > K.HD.GetTimeNowWithOverride()) {
            const n = g().unix(_);
            (he = {
              hours: { max: n.hour(), min: n.hour(), step: 0 },
              minutes: { max: n.minute(), min: n.minute(), step: 0 },
              seconds: { max: n.seconds(), min: n.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (ve = c);
          }
          let Me;
          !ne && _ && !q && (Me = g().unix(_));
          const fe = g().tz.guess(),
            Le = g().unix(ne).tz(fe),
            se = !!W && fe != W && g().unix(ne).tz(W),
            Ce = (n) => {
              if (b) return;
              me(null);
              const u = R(),
                S = g().unix(u || K.HD.GetTimeNowWithOverride());
              (n = n.clone()),
                n.hour(S.hour()),
                n.minute(S.minute()),
                n.second(0),
                ce(n.unix()),
                ue(n);
            },
            { fnOnInput: Ae, fnOnInputBlur: xe, fnOnChange: Oe } = m(N, Ce, me),
            $ = (n) => {
              if (b) return;
              ae(null);
              let u = R(),
                S = 0;
              if (!u)
                S =
                  g().unix(_).hour(0).second(0).minutes(0).unix() +
                  3600 * n.hour() +
                  60 * n.minutes();
              else {
                const D = g().unix(u);
                (n = n.clone()),
                  n.year(D.year()),
                  n.month(D.month()),
                  n.date(D.date()),
                  (S = n.unix());
              }
              ce(S), ue(g().unix(S));
            },
            { fnOnInput: Ie, fnOnInputBlur: l, fnOnChange: s } = m(Q, $, ae),
            o = () => {
              b || (ce(0), ue(null), me(null), ae(null), Pe((n) => n + 1));
            },
            h = Te && !b && ne > 0;
          return (0, t.jsxs)("div", {
            className: (0, p.A)(r().EventTimeSection, X),
            children: [
              (0, t.jsxs)("div", {
                className: (0, p.A)(r().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, t.jsx)(w.he, {
                    toolTipContent: k,
                    direction: "top",
                    children: !!V && (0, t.jsx)("span", { children: V }),
                  }),
                  je &&
                    (0, t.jsxs)("span", {
                      className: r().DateErrorCtn,
                      children: [(0, t.jsx)("img", { src: B.A }), je],
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: U().FlexRowContainer,
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, p.A)(U().InputBorder, r().TimeBlock),
                    children: [
                      (0, t.jsx)(
                        f(),
                        {
                          onChange: Oe,
                          timeFormat: !1,
                          value: re ?? ie,
                          isValidDate: (n) => !b && O(_, j, de, n),
                          initialValue: Me,
                          inputProps: {
                            placeholder: (0, A.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, p.A)(
                              r().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: b,
                            onChange: (n) => Ae(n.currentTarget.value),
                            onBlur: (n) => xe(n.currentTarget.value),
                          },
                        },
                        "date" + ge,
                      ),
                      !!se &&
                        (0, t.jsx)("div", {
                          className: r().PacificTimeHint,
                          children: se.format("L"),
                        }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, p.A)(U().InputBorder, r().TimeBlock),
                    children: [
                      (0, t.jsx)(
                        f(),
                        {
                          onChange: s,
                          dateFormat: !1,
                          timeFormat: ve,
                          timeConstraints: he,
                          value: oe ?? ie,
                          inputProps: {
                            placeholder: (0, A.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, p.A)(
                              r().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: b,
                            onChange: (n) => Ie(n.currentTarget.value),
                            onBlur: (n) => l(n.currentTarget.value),
                          },
                        },
                        "time" + ge,
                      ),
                      !!se &&
                        (0, t.jsx)("div", {
                          className: r().PacificTimeHint,
                          children: se.format("LT"),
                        }),
                    ],
                  }),
                  Ee &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: r().TimeZone,
                          children: Le.zoneAbbr(),
                        }),
                        !!se &&
                          (0, t.jsx)("div", {
                            className: r().TimeZone,
                            children: se.zoneAbbr(),
                          }),
                      ],
                    }),
                  h &&
                    (0, t.jsx)("button", {
                      type: "button",
                      className: r().ClearButton,
                      onClick: o,
                      children: (0, A.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!he &&
                (0, t.jsx)("div", {
                  children: (0, A.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function m(v, j, _) {
          const [R, Y] = i.useState(!1);
          return {
            fnOnInput: (X) => {
              _(X), Y(!0);
            },
            fnOnInputBlur: (X) => {
              if (R) {
                const k = v(X);
                k.isValid() && j(k);
              }
              Y(!1);
            },
            fnOnChange: (X) => {
              if (!R)
                if (typeof X == "string") {
                  const k = v(X);
                  k.isValid() && j(k);
                } else j(X);
            },
          };
        }
        function P() {
          const j = g()("2025-01-14").format("L").split(/[-/.]/),
            _ = j.indexOf("14");
          return j.indexOf("01") < _;
        }
        function x() {
          return g()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function N(v) {
          return g()(v, P() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function Q(v) {
          return g()(v, [d, c], !1);
        }
        function O(v, j, _, R) {
          const Y = g().unix(v).hour(0).seconds(0).minute(0);
          let W = R.unix() >= Y.unix();
          if (W && j && j >= v) {
            const b = g().unix(j).hour(23).minute(59).seconds(59);
            W = R.unix() <= b.unix();
          }
          return (
            W && _ && (R.weekday() == 0 || R.weekday() == 6) && (W = !1), W
          );
        }
        function G(v, j, _, R, Y) {
          const W = R && R(),
            b = j && !N(j).isValid(),
            q = v && !Q(v).isValid(),
            X = q || b || typeof W == "string" || W === !1;
          let k = null;
          return (
            X &&
              ((k = (0, A.we)(
                _ || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              q
                ? (k = (0, A.we)("#DateTimePicker_Time_CannotParse"))
                : b
                  ? (k = (0, A.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof W == "string" && (k = W)),
            i.useEffect(() => {
              Y && Y(k);
            }, [k, Y]),
            k
          );
        }
      },
      59490: (C, y, e) => {
        "use strict";
        e.d(y, { p: () => U });
        var t = e(7850),
          i = e(90626),
          I = e(76559),
          f = e(54407),
          B = e(15736),
          K = e.n(B),
          T = e(3166);
        function U(p) {
          const {
              accountID: A,
              bHideWhenNotAvailable: w,
              bHideName: H,
              bLink: r = !0,
            } = p,
            [M] = (0, f.KT)(A),
            g = (0, f.KM)(A),
            d = i.useMemo(() => I.b.InitFromAccountID(A), [A]),
            c = `${T.TS.COMMUNITY_BASE_URL}profiles/${d.ConvertTo64BitString()}`,
            a = r ? "a" : "span";
          return (0, t.jsx)(t.Fragment, {
            children: M
              ? (0, t.jsxs)(a, {
                  href: r ? c : void 0,
                  children: [
                    (0, t.jsx)("img", {
                      className: B.SmallAvatar,
                      src: M.avatar_url,
                      "data-miniprofile": "s" + d.ConvertTo64BitString(),
                    }),
                    !H &&
                      (0, t.jsx)("span", {
                        children: g
                          ? `${g} (${M.persona_name})`
                          : M.persona_name,
                      }),
                  ],
                })
              : (0, t.jsx)(t.Fragment, {
                  children: !w && (0, t.jsx)("span", { children: A }),
                }),
          });
        }
      },
      12932: (C, y, e) => {
        "use strict";
        e.d(y, { AQ: () => M, pn: () => d, qx: () => g });
        var t = e(7850),
          i = e(58534),
          I = e(18210),
          f = e(36118),
          B = e(90626),
          K = e(36707),
          T = e(95695),
          U = e.n(T),
          p = e(25792),
          A = e(64734),
          w = e.n(A),
          H = e(65946),
          r = e(11243);
        function M(c) {
          const {
              title: a,
              tooltip: m,
              getMinimized: P,
              toggleMinimized: x,
              className: N,
              children: Q,
              elAdditionalButtons: O,
            } = c,
            G = (0, H.q3)(() => P());
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, K.A)(
                  N,
                  A.SectionTitleHeader,
                  A.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, K.A)(
                      T.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [a, !!m && (0, t.jsx)(r.o, { tooltip: m })],
                  }),
                  (0, t.jsxs)("div", {
                    className: A.SectionTitleButtons,
                    children: [
                      O,
                      (0, t.jsx)(d, { bIsMinimized: G, fnToggleMinimize: x }),
                    ],
                  }),
                ],
              }),
              !G && (0, t.jsx)(p.tH, { children: Q }),
            ],
          });
        }
        function g(c) {
          const [a, m] = B.useState(!!c.bStartMinimized);
          return (0, t.jsx)(M, {
            ...c,
            getMinimized: () => a,
            toggleMinimized: () => m(!a),
            children: c.children,
          });
        }
        function d(c) {
          const { bIsMinimized: a, fnToggleMinimize: m } = c,
            P = a ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, t.jsx)(i.$n, {
            "data-tooltip-text": (0, I.we)(P),
            onClick: m,
            children: c.bIsMinimized
              ? (0, t.jsx)(f.hz4, {})
              : (0, t.jsx)(f.Xjb, {}),
          });
        }
      },
      77291: (C, y, e) => {
        "use strict";
        e.d(y, { V: () => t });
        function t(i, I) {
          typeof window > "u" || (window[i] = I);
        }
      },
      65285: (C) => {
        C.exports = {
          Dummy: "_33nIbw5FB3FiuhUid6pNCS",
          ItemTable: "dhnmdtQCg9NlRTlO2CiRm",
          ItemSelect: "_2B82L-Dg0mrzOe1OkzCeN8",
          NewEntryCtn: "_1n-Sq-XrzUPQrrWRQVdhtq",
          DatePreview: "_2p-FIFIwIlMJ256q0Zj7lo",
        };
      },
      45737: (C) => {
        C.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
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
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      12916: (C) => {
        C.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
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
      78603: (C) => {
        C.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          description: "_1oXNiM3xAFJRy_Ze38gkG3",
          description2: "_1KF2MlJ6F5jUyxes4dS-I8",
          reservation_ctn: "_1GzH4ChDWcNv3vCKTlSIfb",
          reservation_horizontal_ctn: "keZ2uzYaV6t4dSmdSpPpP",
          options: "_1ShICbWRa-d4k2sWXSBRU5",
          options_list: "_2HdrY_BfMJtBgnkQG9Yy1N",
          price: "_K9GwdoULB7fidQYauP4H",
          CommunityPreviewReservationWidgetControl: "k82adLwDVk_0_Qpi4uKHS",
          reservecopy: "_2mg-ayeqtfvSlVBeUNudsd",
          reserverow: "_1DB5FQ_X8YXXb9MTrWamkY",
          purchaseaction: "_10a9BMKHCowrtgelPrWPvh",
          reserverowReserved: "_27GR40w6gCHGSSzOvM-6f6",
          reservebutton: "_3I2SPz9E3c4Z9kizQ8Si8",
          noreserve: "UsTrTU7oUGQiO_uLnTTBQ",
          cancelreservation: "_2PaJLP896niw_vwPf8Ul5p",
          alreadyreserved: "_2jeg5CIDxIsUEOFM4IOyKE",
          expecteddate: "_1-QAWjJQ51fHnsPzqCzc6T",
          expecteddate_str: "_1Thj5rQmTc3_SU05H6yiSY",
          Link: "_1vJHwybFjHBbNcBpxq2vJO",
          ReservationPSULessAddToCart: "_2HaOvkwPHDjo-tw2MojOhW",
          ReservationPSULessOutOfStock: "Cnrm19fZ6RQr1qL0tAjK9",
          BackgroundAnimation: "_1xm0qUdmOPB5fFuOJowf-6",
          "ItemFocusAnim-darkerGrey-nocolor": "_1B7CatJQljUauJ8s1n-ljZ",
          "ItemFocusAnim-darkerGrey": "_6ssa6UMKDgZzlmkNC_YVR",
          "ItemFocusAnim-darkGreySettings": "_3zdVJjpFzFXizWMqJTanXL",
          "ItemFocusAnim-darkGrey": "_30_M6ppan1_ulIlPEXgIJl",
          "ItemFocusAnim-grey": "_3GYj5W9eacowkuiHIeomMp",
          "ItemFocusAnim-translucent-white-10": "_3hWi_Bpp8nC9QUW0w7vdoF",
          "ItemFocusAnim-translucent-white-20": "_2tLGUDqcBXOft1XNfwfowc",
          "ItemFocusAnimBorder-darkGrey": "_3lwkegIBcstdeNMYHVQcIL",
          "ItemFocusAnim-green": "iNSUXIvhm2XWFZAz-czyp",
          focusAnimation: "sCYIjlY_RF-rJsQ-OC8Vo",
          hoverAnimation: "_3fUy8YNvjnAprZfdUIuwu5",
        };
      },
      12842: (C) => {
        C.exports = {
          Link: "_1K4QC6vZ61M5lcIvcCWMEP",
          UserTooNew: "_20i0fZO4jaOWCaVeAoB6KJ",
          AlreadyBought: "g1ayBmJ07JAYzenoRRpu5",
        };
      },
      92825: (C) => {
        C.exports = { Ctn: "_3gnQfZ3NUW9NFF3WllsQ6b" };
      },
      15736: (C) => {
        C.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      64734: (C) => {
        C.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      61738: (C, y, e) => {
        var t = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function i(f) {
          var B = I(f);
          return e(B);
        }
        function I(f) {
          if (!e.o(t, f)) {
            var B = new Error("Cannot find module '" + f + "'");
            throw ((B.code = "MODULE_NOT_FOUND"), B);
          }
          return t[f];
        }
        (i.keys = function () {
          return Object.keys(t);
        }),
          (i.resolve = I),
          (C.exports = i),
          (i.id = 61738);
      },
      44894: (C, y, e) => {
        "use strict";
        e.d(y, { A: () => t });
        const t =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

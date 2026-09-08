/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [48312],
  {
    21895: (e) => {
      e.exports = {
        Root: "_1kIuUssJvopWbHik1IKMG6",
        "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
        "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
        "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
        Disabled: "kLcGKsNxkoEqxgok6YzML",
        Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
        Icon: "cngAYeP7ZvFo2pT_v3-xO",
      };
    },
    16619: (e) => {
      e.exports = {
        Color: "_2Vc3a-PM4tOhJcD72NEq1U",
        IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
        "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
        "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
        "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
        "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
        "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
        "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
        "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
        "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
        "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
        HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
      };
    },
    15843: (e) => {
      e.exports = {
        TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
        LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
        Terms: "_2oU42aqXAKCuhoH2GmPkWD",
      };
    },
    57757: (e, o, a) => {
      "use strict";
      a.d(o, { S: () => _ });
      var n = a(7850),
        s = a(83392),
        r = a(40704);
      function t(e) {
        return (0, n.jsx)(r.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, n.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var i = a(21895),
        c = a(64238),
        l = a.n(c),
        d = a(66922);
      function _(e) {
        const {
            checked: o,
            onChange: a,
            disabled: r,
            children: c,
            ref: _,
            variant: v,
            color: p,
            align: k = "center",
            ...x
          } = e,
          f = "indeterminate" === o,
          m = f ? h : t,
          L = () => {
            r || (a && a(!!f || !o));
          },
          S = (0, d.f)("Checkbox", v);
        return (0, n.jsxs)(s.s, {
          align: k,
          ref: _,
          role: "checkbox",
          "aria-checked": f ? "mixed" : o,
          "data-state": u(o),
          className: l()(i.Root, i[`Variant-${S}`], r && i.Disabled),
          onClick: L,
          tabIndex: 0,
          onKeyDown: (e) => {
            r ||
              (" " === e.key && (L(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": r,
          "data-accent-color": p,
          ...x,
          children: [
            (0, n.jsx)("div", {
              className: i.Checkbox,
              children: o && (0, n.jsx)(m, { className: i.Icon }),
            }),
            c,
          ],
        });
      }
      function u(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function h(e) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
            fill: "currentColor",
          }),
        });
      }
    },
    40704: (e, o, a) => {
      "use strict";
      a.d(o, { I: () => i });
      var n = a(7850),
        s = a(11526),
        r = a(75659),
        t = a(16619);
      function i(e) {
        const { viewBoxSize: o = 20, ...a } = e,
          r = a.size ? void 0 : t.IconSizeDefault;
        return (0, n.jsx)("svg", {
          viewBox: `0 0 ${o} ${o}`,
          ...(0, s.mz)({ className: r, ...a }, c),
        });
      }
      const c = [
        ...r.L,
        { prop: "size", responsive: !0, className: (e) => t[`IconSize-${e}`] },
        {
          prop: "color",
          className: t.Color,
          cssProperty: (e) => ["--icon-color", (0, s.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: t.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        r.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    48312: (e, o, a) => {
      "use strict";
      a.r(o), a.d(o, { ShuffleActions: () => b, default: () => I });
      var n = a(7850),
        s = a(57757),
        r = a(66418),
        t = a(78686),
        i = a(5309),
        c = a(65946),
        l = a(90626),
        d = a(78603),
        _ = a(32754),
        u = a(52038),
        h = a(61859),
        v = a(67936),
        p = a(53807),
        k = a(34121);
      a(26408);
      function x(e) {
        const { rtime: o } = e;
        return o ? (0, n.jsx)(k.K4, { dateAndTime: o, bSingleLine: !0 }) : null;
      }
      var f = a(84547),
        m = a(23601),
        L = a(18899),
        S = a(52865),
        z = a(15843),
        g = a.n(z);
      function I(e) {
        const {
            hardwareDetail: o,
            reservationAdvancedSettings: a,
            storeItemReleaseInfo: _,
            bShuffleInProgress: k,
            bHasSomeReservation: m,
          } = e,
          [L, S] = (0, c.q3)(() => [
            a?.collection_rtime_end,
            a?.collection_time_learn_more_url,
          ]),
          [z, I] = (0, l.useState)({}),
          j = (0, l.useCallback)(
            (e) => {
              I((a) => ({ ...a, [o.packageid]: e }));
            },
            [o],
          ),
          R = (0, i.VM)(_);
        if (k)
          return (0, n.jsxs)("div", {
            className: (0, u.A)(d.expecteddate_str),
            children: [
              v.F5.Localize(
                m
                  ? "#Reservation_Pool_InProgress_Joined"
                  : "#Reservation_Pool_InProgress_NotJoined",
              ),
              S &&
                (0, n.jsx)("a", {
                  className: g().LearnMoreLink,
                  href: S,
                  children: t.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        const P = (0, p.k)(o.reservation_state),
          C = !!a && !!a.collection_time_term_and_conditions_url,
          w = z[o.packageid] ?? !C;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, u.A)(d.expecteddate_str),
              children: [
                v.F5.LocalizeReact(
                  "#Reservation_InPool_Message",
                  L ? (0, n.jsx)(x, { rtime: L }) : R,
                ),
                S &&
                  (0, n.jsx)("a", {
                    className: g().LearnMoreLink,
                    href: S,
                    children: t.Z.Localize("#Button_Learn"),
                  }),
              ],
            }),
            C &&
              (0, n.jsx)(
                s.S,
                {
                  checked: w || P,
                  onChange: j,
                  "data-checkbox": "",
                  disabled: P,
                  children: (0, n.jsxs)("div", {
                    className: g().Terms,
                    children: [
                      " ",
                      (0, h.oW)(
                        v.F5.Localize("#Reservation_JoinPool_Terms"),
                        (0, n.jsx)("a", {
                          href: a.collection_time_term_and_conditions_url,
                          className: g().TOCLink,
                          onClick: (e) => e.stopPropagation(),
                        }),
                      ),
                    ],
                  }),
                },
                o.packageid,
              ),
            r.iA.logged_in
              ? (0, n.jsx)(b, {
                  hardwareDetail: o,
                  bUserAcceptedTerms: !C || w,
                  onLeaveShuffleList: () => j(!1),
                })
              : (0, n.jsx)("div", {
                  className: (0, u.A)(d.reserverow),
                  children: (0, n.jsx)(f.v, {
                    label: v.F5.Localize("#Reservation_Pool_NotSignedIn"),
                    strDialogDesc: v.F5.Localize(
                      "#Reservation_Pool_NotSignedIn_Desc",
                    ),
                  }),
                }),
          ],
        });
      }
      function b(e) {
        const {
          hardwareDetail: o,
          bUserAcceptedTerms: a,
          onLeaveShuffleList: s,
        } = e;
        switch (o.reservation_state) {
          case p.G.k_EPurchaseReservationState_NotReserved:
          case p.G.k_EPurchaseReservationState_Consumed:
          case p.G.k_EPurchaseReservationState_Cancelled:
            return (0, n.jsx)(_.Gq, {
              toolTipContent: a
                ? void 0
                : v.F5.Localize("#Reservation_JoinPool_ClickTerms"),
              children: (0, n.jsx)(m.R, {
                bInputDisabled: !a,
                packageid: o.packageid,
                label: v.F5.Localize("#Reservation_JoinPool"),
              }),
            });
          case p.G.k_EPurchaseReservationState_Reserved:
          case p.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, n.jsx)(L.p, {
              packageid: o.packageid,
              strAction: v.F5.Localize("#Reservation_Cancel_Pool"),
              strDesc: v.F5.Localize("#Reservation_Cancel_Pool_Desc"),
              onCancelSucceeded: s,
            });
          case p.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, n.jsx)(S.b, {});
        }
      }
    },
  },
]);

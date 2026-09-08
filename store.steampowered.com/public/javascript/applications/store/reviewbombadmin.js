/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [54372],
  {
    68414: (e) => {
      e.exports = {
        ReviewBombAdminDialog: "_2lQDxwhbNHmjH31B0a0KoB",
        Body: "XKjt8Kz4bhyBqZxrpK6Af",
        LoadError: "_1ogvTDnbFU4B1hC_s3YUO4",
        Periods: "D82hqMsJhf-6K4RjqShxR",
        Comment: "_3CGYGrKOKn3bIhllSfG4Jq",
        Actions: "npmKyDMK0Cpqi24QIg-gm",
        AddPeriod: "_2o1AY27gzyCbobL2jKfptD",
        ReviewBombPeriodDialog: "_3lipsNsbncd2aIAQ_4CTQR",
        TextArea: "_286KkCsK27JmtcD6E1MF4w",
      };
    },
    61332: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { ReviewBombAdminDialog: () => K });
      var a = t(7850),
        r = t(90626),
        o = t(53965),
        s = t(45699),
        i = t(23649),
        l = t(74568),
        d = t(22797),
        c = t(82227),
        m = t(27197),
        u = t(66418),
        h = t(80902),
        x = t(75233),
        j = t(51614),
        v = t(22932),
        b = t(78327),
        p = t(59391);
      const C = [
        { eType: m.mJ.r5, strLabel: "Off-topic" },
        { eType: m.mJ._Q, strLabel: "Pending Internal Valve Review" },
        { eType: m.mJ.FB, strLabel: "Testing Only" },
      ];
      function D(e) {
        return e
          ? v.fE.Instant.fromEpochMilliseconds(1e3 * e)
              .toZonedDateTimeISO("UTC")
              .toPlainDate()
          : null;
      }
      function y(e) {
        return ["reviewbombperiods", e];
      }
      var g = t(56283),
        T = t(68414),
        S = t.n(T);
      const w = "YYYY-MM-DD",
        f = "Internal Comment";
      function R(e) {
        try {
          return v.fE.PlainDate.from(e), !0;
        } catch {
          return !1;
        }
      }
      function E(e) {
        return e ? (D(e)?.toString() ?? "") : "";
      }
      function A(e) {
        const { period: n, onSubmit: t, onClose: o } = e,
          [s, i] = r.useState(() => E(n?.nStartDate)),
          [d, c] = r.useState(() => E(n?.nEndDate)),
          [m, u] = r.useState(n?.strInternalComment ?? ""),
          [h, x] = r.useState(n?.eType ?? C[0].eType),
          j = r.useMemo(
            () => C.map((e) => ({ label: e.strLabel, data: e.eType })),
            [],
          ),
          v = R(s),
          b = !d || R(d),
          p = v && b && m.trim().length > 0,
          D = r.useCallback((e) => i(e.target.value), []),
          y = r.useCallback((e) => c(e.target.value), []),
          T = r.useCallback((e) => u(e.target.value), []),
          A = r.useCallback((e) => x(e.data), []),
          I = r.useCallback(() => {
            p &&
              (t({
                strStartDate: s,
                strEndDate: d,
                strInternalComment: m,
                eType: h,
              }),
              o());
          }, [p, s, d, m, h, t, o]),
          N = r.useId(),
          P = g.Dm(N, { label: f });
        return (0, a.jsxs)(l.o0, {
          className: S().ReviewBombPeriodDialog,
          strTitle: n
            ? "Update Review Anomaly Period"
            : "Add New Review Anomaly Period",
          strOKButtonText: n ? "Update" : "Add",
          bOKDisabled: !p,
          onOK: I,
          onCancel: o,
          closeModal: o,
          children: [
            (0, a.jsx)(g.FO, {
              label: "Start Date (UTC)",
              description: w,
              value: s,
              onChange: D,
            }),
            (0, a.jsx)(g.FO, {
              label: "End Date (UTC)",
              description: `${w}, or empty for no end`,
              value: d,
              onChange: y,
            }),
            (0, a.jsx)(g.m, {
              label: "Type",
              "aria-label": "Type",
              controlled: !0,
              rgOptions: j,
              selectedOption: h,
              onChange: A,
            }),
            (0, a.jsx)(g.D0, {
              accessibilityId: N,
              label: f,
              childrenLayout: "below",
              childrenContainerWidth: "max",
              children: (0, a.jsx)(g.Cl, {
                className: S().TextArea,
                ...P,
                value: m,
                onChange: T,
                nMinHeight: 100,
              }),
            }),
          ],
        });
      }
      function I(e, n = "") {
        return D(e)?.toString() ?? n;
      }
      function N(e) {
        const { nTotal: n, nFromNonSteamPurchase: t } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, c.Dq)(n - t), " [", (0, c.Dq)(n), "]"],
        });
      }
      function P(e) {
        const { period: n } = e;
        return n.strPersonaName
          ? n.strProfileURL
            ? (0, a.jsx)(s.Ii, {
                href: n.strProfileURL,
                children: n.strPersonaName,
              })
            : (0, a.jsx)(a.Fragment, { children: n.strPersonaName })
          : (0, a.jsx)(a.Fragment, { children: "Automated" });
      }
      function k(e) {
        const { period: n, onEdit: t, onRemove: s } = e,
          l = r.useCallback(() => t(n), [t, n]),
          d = r.useCallback(() => s(n), [s, n]);
        return (0, a.jsxs)("tr", {
          children: [
            (0, a.jsx)("td", { children: n.strID }),
            (0, a.jsx)("td", { children: I(n.nStartDate) }),
            (0, a.jsx)("td", { children: I(n.nEndDate, "No End Set") }),
            (0, a.jsx)("td", {
              children:
                ((c = n.eType),
                C.find((e) => e.eType == c)?.strLabel ?? `Type ${c}`),
            }),
            (0, a.jsx)("td", {
              className: S().Comment,
              children: (0, a.jsx)(i.h, { text: n.strInternalComment }),
            }),
            (0, a.jsx)("td", { children: (0, a.jsx)(P, { period: n }) }),
            (0, a.jsx)("td", {
              children: (0, a.jsx)(N, {
                nTotal: n.nRecommendationsUp,
                nFromNonSteamPurchase: n.nRecommendationsUpFromNonSteamPurchase,
              }),
            }),
            (0, a.jsx)("td", {
              children: (0, a.jsx)(N, {
                nTotal: n.nRecommendationsDown,
                nFromNonSteamPurchase:
                  n.nRecommendationsDownFromNonSteamPurchase,
              }),
            }),
            (0, a.jsx)("td", {
              children: (0, a.jsxs)("div", {
                className: S().Actions,
                children: [
                  (0, a.jsx)(o.$, { size: "1", onClick: l, children: "Edit" }),
                  (0, a.jsx)(o.$, {
                    size: "1",
                    color: "error",
                    onClick: d,
                    children: "Remove",
                  }),
                ],
              }),
            }),
          ],
        });
        var c;
      }
      function K(e) {
        const { appid: n, onClose: t } = e,
          s = (function (e) {
            return (0, h.I)({
              queryKey: y(e),
              queryFn: () =>
                (0, p.$f)(
                  `${u.TS.STORE_BASE_URL}ajaxmanagereviewanomalies/${e}/`,
                  "ajaxmanagereviewanomalies",
                  { sessionid: (0, b.KC)() },
                ),
              enabled: !!e,
            });
          })(n),
          i = (function (e) {
            const n = (0, x.jE)();
            return (0, j.n)({
              mutationFn: async (n) => {
                const t = { sessionid: (0, b.KC)(), action: n.action };
                "add" != n.action && (t.id = n.strID),
                  "remove" != n.action &&
                    ((t.start_date = n.strStartDate),
                    (t.end_date = n.strEndDate),
                    (t.internal_comment = n.strInternalComment),
                    (t.type = n.eType)),
                  await (0, p.$f)(
                    `${u.TS.STORE_BASE_URL}handlereviewanomaly/${e}/`,
                    "handlereviewanomaly",
                    t,
                  );
              },
              onSuccess: () => {
                n.invalidateQueries({ queryKey: y(e) });
              },
            });
          })(n),
          [c, m] = r.useState(void 0),
          [v, C] = r.useState(void 0),
          [D, g] = r.useState(""),
          T = r.useCallback(() => m(null), []),
          w = r.useCallback((e) => m(e), []),
          f = r.useCallback((e) => C(e), []),
          R = r.useCallback(() => m(void 0), []),
          E = r.useCallback(() => C(void 0), []),
          I = r.useCallback(() => g(""), []),
          N = r.useCallback((e, n) => {
            g(
              `Failed to ${e} the review anomaly period. ${n instanceof Error ? n.message : String(n)}`,
            );
          }, []),
          P = r.useCallback(
            (e) => {
              const n = c,
                t = n
                  ? { action: "update", strID: n.strID, ...e }
                  : { action: "add", ...e };
              i.mutate(t, { onError: (e) => N(n ? "update" : "add", e) });
            },
            [c, i, N],
          ),
          K = r.useCallback(() => {
            v &&
              (i.mutate(
                { action: "remove", strID: v.strID },
                { onError: (e) => N("remove", e) },
              ),
              C(void 0));
          }, [v, i, N]),
          F = s.data?.rgPeriods;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l.o0, {
              bAlertDialog: !0,
              bAllowFullSize: !0,
              className: S().ReviewBombAdminDialog,
              strTitle: "Manage Review Anomalies",
              closeModal: t,
              onOK: t,
              onCancel: t,
              children: [
                s.isPending && (0, a.jsx)(d.t, {}),
                s.isError &&
                  (0, a.jsx)("div", {
                    className: S().LoadError,
                    children:
                      "Could not load this app's review anomaly periods.",
                  }),
                F &&
                  (0, a.jsxs)("div", {
                    className: S().Body,
                    children: [
                      (0, a.jsxs)("table", {
                        className: S().Periods,
                        children: [
                          (0, a.jsx)("thead", {
                            children: (0, a.jsxs)("tr", {
                              children: [
                                (0, a.jsx)("th", { children: "ID" }),
                                (0, a.jsx)("th", { children: "Start" }),
                                (0, a.jsx)("th", { children: "End" }),
                                (0, a.jsx)("th", { children: "Type" }),
                                (0, a.jsx)("th", {
                                  children: "Internal Comment",
                                }),
                                (0, a.jsx)("th", { children: "Account" }),
                                (0, a.jsx)("th", {
                                  children: "Positive Reviews",
                                }),
                                (0, a.jsx)("th", {
                                  children: "Negative Reviews",
                                }),
                                (0, a.jsx)("th", { children: " " }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("tbody", {
                            children: F.map((e) =>
                              (0, a.jsx)(
                                k,
                                { period: e, onEdit: w, onRemove: f },
                                e.strID,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: S().AddPeriod,
                        children: (0, a.jsx)(o.$, {
                          variant: "vibrant",
                          onClick: T,
                          children: "Add New Review Bomb Period",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            (0, a.jsx)(l.EN, {
              active: void 0 !== c,
              children: (0, a.jsx)(A, {
                period: c ?? void 0,
                onSubmit: P,
                onClose: R,
              }),
            }),
            (0, a.jsx)(l.EN, {
              active: !!v,
              children: (0, a.jsx)(l.o0, {
                bDestructiveWarning: !0,
                strTitle: "Remove Review Anomaly Period?",
                strDescription: `Are you sure you want to remove this review anomaly period? ID: ${v?.strID ?? ""}`,
                strOKButtonText: "Remove",
                closeModal: E,
                onOK: K,
                onCancel: E,
              }),
            }),
            (0, a.jsx)(l.EN, {
              active: !!D,
              children: (0, a.jsx)(l.KG, {
                strTitle: "Error",
                strDescription: D,
                closeModal: I,
                onOK: I,
              }),
            }),
          ],
        });
      }
    },
  },
]);

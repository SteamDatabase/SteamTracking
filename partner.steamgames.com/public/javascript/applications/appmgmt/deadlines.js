/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [13350],
    {
      91916: (q, V, i) => {
        "use strict";
        i.d(V, {
          MY: () => P,
          UA: () => ue,
          Yd: () => ie,
          qG: () => re,
          rN: () => J,
          vh: () => ne,
        });
        var e = i(41735),
          y = i.n(e),
          f = i(90626),
          te = i(99412),
          k = i(72604),
          w = i(34592),
          t = i(3166),
          oe = i(27066),
          s = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          o = (N, l, a, d) => {
            for (
              var c = d > 1 ? void 0 : d ? b(l, a) : l, x = N.length - 1, C;
              x >= 0;
              x--
            )
              (C = N[x]) && (c = (d ? C(l, a, c) : C(c)) || c);
            return d && c && s(l, a, c), c;
          };
        function P() {
          return t.TS.EUNIVERSE == te.Rv ? 12 : 1;
        }
        const X = class xe {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(l) {
            return this.m_mapOptInToPartners.get(l);
          }
          BHasPartnerInfoLoad(l) {
            return this.m_mapOptInToPartners.has(l);
          }
          async FindPartnerByName(l) {
            return (
              this.m_mapPromises.has(l) ||
                this.m_mapPromises.set(l, this.InternalFindPartnerByName(l)),
              this.m_mapPromises.get(l)
            );
          }
          async InternalFindPartnerByName(l) {
            const a = new Array();
            try {
              const d = t.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                c = {
                  sessionid: (0, t.KC)(),
                  searchtext: l,
                  origin: self.origin,
                },
                x = await y().get(d, { params: c });
              x?.status == 200 && x?.data?.success == k.R
                ? x.data.publishers.forEach((C) => {
                    const T = {
                      partnerid: C.publisherid,
                      name: C.publishername,
                      partner_url:
                        t.TS.PARTNER_BASE_URL +
                        `pub/publisher/${C.publisherid}/`,
                      contacts: C.contacts,
                    };
                    this.m_mapOptInToPartners.set(C.publisherid, T), a.push(T);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${x?.status} eresult ${x?.data?.success} and msg ${x?.data?.msg}`,
                  );
            } catch (d) {
              const c = (0, w.H)(d);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  c.strErrorMsg,
                c,
              );
            }
            return a;
          }
          async LoadPartnerInfo(l) {
            if (this.m_mapOptInToPartners.has(l))
              return this.m_mapOptInToPartners.get(l);
            const a = await this.FindPartnerByName("" + l);
            return (
              this.BHasPartnerInfoLoad(l) ||
                this.m_mapOptInToPartners.set(l, null),
              this.m_mapOptInToPartners.get(l)
            );
          }
          async LoadMultiplePartnerInfo(l) {
            if (!l || l.length == 0) return [];
            const a = l.filter((d) => !this.m_mapOptInToPartners.has(d));
            return (
              a.length > 0 && (await this.FindPartnerByName("" + a.join(","))),
              l.map((d) => this.m_mapOptInToPartners.get(d)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              xe.s_Singleton || (xe.s_Singleton = new xe()), xe.s_Singleton
            );
          }
          constructor() {
            let l = JSON.parse(
              JSON.stringify((0, t.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(l) &&
              l.forEach((a) => this.m_mapOptInToPartners.set(a.partnerid, a));
          }
          ValidateStoreDefault(l) {
            const a = l;
            return a &&
              Array.isArray(a) &&
              a.length > 0 &&
              typeof a[0] == "object"
              ? typeof a[0].partnerid == "number" &&
                  typeof a[0].name == "string"
              : !1;
          }
        };
        o([oe.o], X.prototype, "FindPartnerByName", 1);
        let R = X;
        function ne(N) {
          const [l, a] = (0, f.useState)(!1);
          return (
            (0, f.useEffect)(() => {
              !l &&
                N?.length > 0 &&
                R.Get()
                  .LoadMultiplePartnerInfo(N)
                  .then(() => a(!0));
            }, [N, l]),
            l
          );
        }
        function ue(N) {
          const [l, a] = f.useState(() => R.Get().GetPartnerInfo(N));
          return (
            f.useEffect(() => {
              !R.Get().BHasPartnerInfoLoad(N) && N > 0
                ? R.Get()
                    .LoadPartnerInfo(N)
                    .then((d) => a(d))
                : R.Get().BHasPartnerInfoLoad(N) &&
                  l?.partnerid != N &&
                  a(R.Get().GetPartnerInfo(N));
            }, [N, l]),
            [l]
          );
        }
        function J() {
          return { fnFindPartnerByName: R.Get().FindPartnerByName };
        }
        function ie(N) {
          return R.Get().GetPartnerInfo(N);
        }
        function re(N) {
          return R.Get().LoadPartnerInfo(N);
        }
      },
      79327: (q, V, i) => {
        "use strict";
        i.r(V), i.d(V, { default: () => U, usePartnerDeadlines: () => Y });
        var e = i(7850),
          y = i(78653),
          f = i(90626),
          te = i(25792),
          k = i(2341),
          w = i.n(k),
          t = i(58534),
          oe = i(20194),
          s = i(41735),
          b = i.n(s),
          o = i(3166),
          P = i(99412),
          X = i(72609),
          R = i(33255),
          ne = i(91916),
          ue = i(10142),
          J = i(84676),
          ie = i(179),
          re = i(95695),
          N = i.n(re),
          l = i(53107),
          a = i(11243),
          d = i(36707),
          c = i(18210),
          x = i(92264);
        const C = { include_assets: !0, include_release: !0 };
        function T() {
          const p = Y(y.Qo.Jg),
            h =
              "https://confluence.valve.org/display/~adils/Steam+Season+Passes",
            [m, S] = (0, ie.QD)("query", ""),
            D = (0, f.useMemo)(
              () =>
                Array.from(
                  new Set(p?.map((v) => v.data.store_item_id).filter(Boolean)),
                ),
              [p],
            ),
            I = (0, f.useMemo)(
              () =>
                Array.from(
                  new Set(p?.map((v) => v.data.partnerid).filter(Boolean)),
                ),
              [p],
            ),
            g = (0, J.zX)(D, C),
            O = (0, ne.vh)(I),
            [E, L] = (0, ie.QD)("internaldate", !1),
            A = (0, f.useMemo)(() => {
              const v = m.trim().toLocaleLowerCase();
              return p
                ?.filter(
                  (G) =>
                    v.length == 0 ||
                    g == J.Sq ||
                    !O ||
                    ue.A.Get()
                      .GetApp(G.data.store_item_id)
                      ?.GetName()
                      .toLocaleLowerCase()
                      .includes(v) ||
                    (0, ne.Yd)(G.data.partnerid)
                      ?.name.toLocaleLowerCase()
                      .includes(v),
                )
                .sort((G, $) => $.data.due_date - G.data.due_date);
            }, [m, p, g, O]);
          return p
            ? (0, e.jsxs)(te.tH, {
                children: [
                  (0, e.jsxs)("h3", {
                    children: [
                      "Season Passes ",
                      (0, e.jsx)("button", {
                        className: (0, d.A)(N().Button),
                        style: { float: "right", marginRight: "16px" },
                        onClick: (v) => (0, l.EP)(v, h),
                        children: "Help",
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children:
                      "This dashboard surfaces any important deadlines that a partner has missed. Currently, the only ones we are tracking are related to customer commitments with Season Pass DLC.",
                  }),
                  (0, e.jsx)(t.pd, {
                    type: "string",
                    value: m,
                    onChange: (v) =>
                      S(v.currentTarget.value.toLocaleLowerCase()),
                    label: "Filter",
                    tooltip:
                      "Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name",
                    placeholder: "type here...",
                  }),
                  (0, e.jsx)(t.Yh, {
                    label: "Show those missing their internal deadline date",
                    checked: E,
                    tooltip:
                      "Partner can set for themselves an internal date when they project the milestone is done, this is separate from the date we show customers as it has a range component.",
                    onChange: L,
                  }),
                  (0, e.jsxs)("table", {
                    children: [
                      (0, e.jsx)("thead", {
                        children: (0, e.jsxs)("tr", {
                          children: [
                            (0, e.jsx)("th", { children: "Deadline ID" }),
                            (0, e.jsxs)("th", {
                              children: [
                                "Milestone ID ",
                                (0, e.jsx)(a.o, {
                                  tooltip:
                                    "This is only unique within a DLC Season Pass",
                                }),
                              ],
                            }),
                            (0, e.jsx)("th", { children: "Season Pass DLC" }),
                            (0, e.jsx)("th", { children: "Partner" }),
                            (0, e.jsx)("th", {
                              children: "Season Pass Release Date",
                            }),
                            (0, e.jsxs)("th", {
                              children: [
                                "Deadline Date ",
                                (0, e.jsx)(a.o, {
                                  tooltip:
                                    "This account for what the customrs see on the store, not their specific data",
                                }),
                              ],
                            }),
                            (0, e.jsx)("th", { children: "Milestone Name" }),
                            (0, e.jsx)("th", { children: "Ticket?" }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("tbody", {
                        children: A.map((v) =>
                          (0, e.jsx)(W, { deadline: v }, "" + v.deadlineid),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function W(p) {
          const { deadline: h } = p,
            [m] = (0, J.t7)(h.data.store_item_id, C),
            [S] = (0, ne.UA)(h.data.partnerid),
            I = (0, R.u)(h.data.store_item_id)?.find(
              (g) => g.milestone_id == Number.parseInt(h.data.gid),
            );
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: h.deadlineid }),
              (0, e.jsx)("td", { children: h.data.gid }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)("a", {
                    href: m?.GetStorePageURL(),
                    target: "_blank",
                    children: m?.GetName() || "unknown",
                  }),
                  "(",
                  (0, e.jsxs)("a", {
                    href: `${X.TS.PARTNER_BASE_URL}admin/game/editbyappid/${h.data.store_item_id}`,
                    target: "_blank",
                    children: [h.data.store_item_id, ")"],
                  }),
                ],
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("a", {
                  href: `${X.TS}pub/companydetails/${h.data.partnerid}`,
                  target: "_blank",
                  children: [S?.name || "unknown", " (", h.data.partnerid, ")"],
                }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, c.TW)(m?.GetReleaseDateRTime()),
                  (0, e.jsx)("span", { children: " - " }),
                  (0, x.KC)(m?.GetReleaseDateRTime(), {
                    bForce24HourClock: !1,
                  }),
                ],
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, c.TW)(h.data.due_date),
                  (0, e.jsx)("span", { children: " - " }),
                  (0, x.KC)(h.data.due_date, { bForce24HourClock: !1 }),
                ],
              }),
              (0, e.jsx)("td", {
                children: I?.title.find((g) => g.language == P.Bhc)
                  ?.localized_string,
              }),
              (0, e.jsx)("td", { children: "TODO" }),
            ],
          });
        }
        var M = i(85705);
        function z() {
          const [p, h] = f.useState(0),
            m = Y(y.Qo.RO, p),
            S = f.useRef(0);
          f.useEffect(() => () => window.clearTimeout(S.current), []);
          const D = (g) => {
              const O = Number(g.currentTarget.value);
              window.clearTimeout(S.current),
                (S.current = window.setTimeout(() => h(O), 1e3));
            },
            I = f.useMemo(() => {
              const g = new Map();
              return (
                m
                  ?.sort((E, L) => {
                    const A = JSON.parse(E.data.description_jsondata),
                      v = JSON.parse(L.data.description_jsondata),
                      G = new Date(A?.CreatedOn);
                    return new Date(v?.CreatedOn).getTime() - G.getTime();
                  })
                  ?.forEach((E) => {
                    let L;
                    g.has(E.data.gid)
                      ? (L = g.get(E.data.gid))
                      : ((L = new Array()), g.set(E.data.gid, L)),
                      L.push(E.data);
                  }),
                g
              );
            }, [m]);
          return (0, e.jsxs)("div", {
            className: w().TaxRequirementResultsContainer,
            children: [
              (0, e.jsx)("h3", { children: "Tax Requirement Deadlines" }),
              (0, e.jsx)("div", {
                className: w().TaxRequirementFilters,
                children: (0, e.jsxs)("div", {
                  className: w().TaxRequirementFilterRow,
                  children: [
                    "PartnerID: ",
                    (0, e.jsx)("textarea", { cols: 30, rows: 1, onChange: D }),
                  ],
                }),
              }),
              (0, e.jsxs)("div", {
                className: w().TaxRequirementTable,
                children: [
                  (0, e.jsxs)("table", {
                    children: [
                      (0, e.jsx)("thead", {
                        children: (0, e.jsxs)("tr", {
                          children: [
                            (0, e.jsx)("th", {
                              className: w().ActionID,
                              children: "Action ID",
                            }),
                            (0, e.jsx)("th", {
                              className: w().Status,
                              children: "Status",
                            }),
                            (0, e.jsx)("th", { children: "Template" }),
                            (0, e.jsx)("th", {
                              className: w().CreatedOn,
                              children: "Created On",
                            }),
                            (0, e.jsx)("th", { children: "Dropbox URL" }),
                            (0, e.jsx)("th", { children: "Freeform Message" }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("tbody", {
                        children:
                          I?.size > 0 &&
                          Array.from(I?.values()).map((g, O) =>
                            g.length > 0
                              ? (0, e.jsx)(
                                  K,
                                  { actionID: g[0].gid, rgDeadlines: g },
                                  "aid_" + O,
                                )
                              : null,
                          ),
                      }),
                    ],
                  }),
                  !m && p > 0 && (0, e.jsx)(M.k, { size: "small" }),
                  m?.length == 0 &&
                    p > 0 &&
                    (0, e.jsxs)("div", {
                      className: w().EmptyNotifications,
                      children: ["No tax notifications for partner ", p],
                    }),
                ],
              }),
            ],
          });
        }
        function K(p) {
          const { actionID: h, rgDeadlines: m } = p;
          return m.length
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("tr", {
                    children: (0, e.jsx)("td", { children: h }),
                  }),
                  m.map((S, D) =>
                    (0, e.jsx)(Z, { deadline: S }, S.gid + "_" + D),
                  ),
                ],
              })
            : null;
        }
        function Z(p) {
          const { deadline: h } = p,
            m = JSON.parse(h.description_jsondata),
            D = new Date(m.CreatedOn).toUTCString();
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {}),
              (0, e.jsx)("td", { children: h.status ? "Complete" : "Active" }),
              (0, e.jsx)("td", { children: m.TemplateName }),
              (0, e.jsx)("td", { children: D }),
              (0, e.jsx)("td", {
                children: m.Parameters?.Dropbox_FileRequest_Url,
              }),
              (0, e.jsx)("td", { children: m.Parameters?.CustomMessageBody }),
            ],
          });
        }
        function U(p) {
          const [h, m] = f.useState(y.Qo.Jg.toString()),
            S = [
              { label: "Season Pass Milestone", data: y.Qo.Jg.toString() },
              { label: "Tax Requirement", data: y.Qo.RO.toString() },
            ],
            D = (g) => {
              m(g.data);
            };
          let I = null;
          switch (h) {
            case y.Qo.RO.toString():
              I = (0, e.jsx)(z, {});
              break;
            case y.Qo.Jg.toString():
              I = (0, e.jsx)(T, {});
              break;
            default:
              console.error(
                "results component not implemented for this deadline type",
              );
              break;
          }
          return (0, e.jsx)(te.tH, {
            children: (0, e.jsxs)("div", {
              className: w().DashboardCtn,
              children: [
                (0, e.jsx)("h1", { children: "Deadlines Dashboard" }),
                (0, e.jsx)("hr", {}),
                (0, e.jsxs)("div", {
                  className: w().DashboardFilters,
                  children: [
                    "Type: ",
                    (0, e.jsx)(t.ZU, {
                      rgOptions: S,
                      selectedOption: h,
                      strDropDownClassName: w().Test,
                      onChange: D,
                      contextMenuPositionOptions: { bMatchWidth: !1 },
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: w().DashboardResults,
                  children: I,
                }),
              ],
            }),
          });
        }
        function Y(p, h) {
          const m = (0, oe.I)({
            queryKey: ["partnerDeadlines", p, h],
            queryFn: async () => {
              if (h && h < 0) return;
              const S = new FormData();
              S.append("type", p.toString()),
                S.append("sessionid", (0, o.KC)()),
                h && S.append("partnerid", h.toString());
              const D = `${o.TS.PARTNER_BASE_URL}deadlines/ajaxgetdeadlines`,
                I = await b().post(D, S, { withCredentials: !0 });
              if (I?.status == 200) return I.data;
            },
            staleTime: 12e4,
          });
          return m.isLoading ? null : m.data?.deadlines;
        }
      },
      79322: (q, V, i) => {
        "use strict";
        i.r(V),
          i.d(V, { default: () => we, k_rgTemplateNameOptionsList: () => Se });
        var e = i(7850),
          y = i(90626),
          f = i(67705),
          te = i(25792),
          k = i(78653),
          w = i(54292),
          t = i.n(w),
          oe = i(45737),
          s = i.n(oe),
          b = i(18210),
          o = i(36707),
          P = i(58534),
          X = i(36174),
          R = i(3166),
          ne = i(41735),
          ue = i.n(ne),
          J = i(72604),
          ie = i(34592);
        function re(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(A, {}),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "To comply with those regulations, we have reviewed the information that you submitted via the online interview. This notification is being sent to you because additional documents are necessary to complete your KYC verification.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What do I do next?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "If the additional documents noted below have not been provided by the date indicated, per US KYC requirements, the KYC and tax form you completed for Valve will be invalidated and you will need to retake the full interview. ",
                  de(n),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Required documents",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsxs)("ul", {
                  className: t().SectionList,
                  children: [
                    (0, e.jsxs)("li", {
                      children: [
                        (0, e.jsx)("span", {
                          className: t().ListItem,
                          children: "Companies:",
                        }),
                        " Certificate of Incorporation or Registration details from Governing Authority which provides a summary of company registration, registered address and or members. For all companies registered over 12 months ago, also provide a Certificate of Good Standing. A Certificate of Good Standing should be attainable through your country\u2019s registrar or equivalent. This document serves as proof that your company is still operating and in good standing with the regulating body for the current year. Note: screenshots of business portals are not acceptable.",
                      ],
                    }),
                    (0, e.jsxs)("li", {
                      children: [
                        (0, e.jsx)("span", {
                          className: t().ListItem,
                          children: "Partnerships:",
                        }),
                        " Partnership Agreement and registration with local authority. A document providing Name, Address and list of partner(s).",
                      ],
                    }),
                    (0, e.jsxs)("li", {
                      children: [
                        (0, e.jsx)("span", {
                          className: t().ListItem,
                          children: "Trusts:",
                        }),
                        " Document providing Name, Address and list of beneficial owner(s).",
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function N(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(A, {}),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "As per the orginal notification sent to you, please provide images of your Identification document. This is in addition to the selfie you have already sent. If the Identification document is a Government issued ID card or Drivers License, we require both sides of the card.",
                  (0, e.jsx)("p", {}),
                  "Please ensure that the images are high quality, in color and are clear and in focus with no information cropped out or blocked.",
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function l(n) {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
                children: [
                  (0, e.jsx)(A, {}),
                  (0, e.jsx)("div", {
                    className: t().SectionTitle,
                    children: "Why is this important?",
                  }),
                  (0, e.jsx)("div", {
                    className: t().SectionBody,
                    children:
                      "To comply with those regulations, we have reviewed the information that you submitted via the online interview. This notification is being sent to you because additional documents are necessary to complete your KYC verification.",
                  }),
                  (0, e.jsx)("div", {
                    className: t().SectionTitle,
                    children: "What do I do next?",
                  }),
                  (0, e.jsxs)("div", {
                    className: t().SectionBody,
                    children: [
                      "If the additional documents noted below have not been provided by the date indicated, per US KYC requirements, the KYC and tax form you completed for Valve will be invalidated and you will need to retake the full interview. ",
                      de(n),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
                children: [
                  (0, e.jsx)("h1", { children: "Required Documents" }),
                  (0, e.jsx)("p", {
                    children:
                      "We need the following documents as described below, as well as a selfie of you holding the official document",
                  }),
                  (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsxs)("li", {
                        children: [
                          (0, e.jsx)("div", {
                            className: t().SectionTitle,
                            children: "Identification document",
                          }),
                          (0, e.jsxs)("div", {
                            className: t().SectionBody,
                            children: [
                              "Please provide one of the following, issued within the last 10 years:",
                              (0, e.jsxs)("div", {
                                className: t().RequiredDocumentList,
                                children: [
                                  (0, e.jsxs)("ul", {
                                    children: [
                                      (0, e.jsx)("li", {
                                        children: "International Passport",
                                      }),
                                      (0, e.jsx)("li", {
                                        children: "Driver's License",
                                      }),
                                      (0, e.jsx)("li", {
                                        children:
                                          "Government issued identification documentation either by a Federal, State / Provisional Government Authority",
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)("div", {
                                    children: (0, e.jsx)("i", {
                                      children:
                                        "Note, we are unable to validate the following documents:",
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: t().RequiredDocumentList,
                                    children: (0, e.jsxs)("ul", {
                                      children: [
                                        (0, e.jsx)("li", {
                                          children: "Citizen Card",
                                        }),
                                        (0, e.jsx)("li", {
                                          children: "Government Health Cards",
                                        }),
                                        (0, e.jsx)("li", {
                                          children: "Military ID's",
                                        }),
                                        (0, e.jsx)("li", {
                                          children: "Post office card",
                                        }),
                                        (0, e.jsx)("li", {
                                          children: "Paper Documents",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                children:
                                  "A high-quality photo of the original, physical document, ensuring that the image is in focus, no external light impacts quality and that all watermarks, imprints, features and color are clearly visible. Do not Crop the images of your ID document - the corners and edges must be clearly visible. Ensure you do not deprecate any aspect of the image, otherwise we will not proceed with your verification.",
                              }),
                              (0, e.jsx)("br", {}),
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("b", {
                                    children: "Specifically:",
                                  }),
                                  (0, e.jsxs)("ul", {
                                    children: [
                                      (0, e.jsx)("li", {
                                        children:
                                          "International Passport - Color Photograph and identity page",
                                      }),
                                      (0, e.jsx)("li", {
                                        children:
                                          "Foreign Driver's License - Color Photograph and identity information - if a card style, front and rear of card",
                                      }),
                                      (0, e.jsx)("li", {
                                        children:
                                          "Government issued Identification - Color Photograph and identity information - if a card style, front and rear of card",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsx)("br", {}),
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("b", {
                                    children: "Accepted file types",
                                  }),
                                  (0, e.jsxs)("ul", {
                                    children: [
                                      (0, e.jsx)("li", { children: "PDF" }),
                                      (0, e.jsx)("li", {
                                        children: "JPEG / Image files",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("li", {
                        children: [
                          (0, e.jsx)("div", {
                            className: t().SectionTitle,
                            children: "Selfie Holding ID",
                          }),
                          (0, e.jsxs)("div", {
                            className: t().SectionBody,
                            children: [
                              (0, e.jsx)("div", {
                                children:
                                  "We also require all payees to provide a selfie of themselves holding the same document they are providing",
                              }),
                              (0, e.jsx)("div", {
                                className: t().SectionTitle,
                                children: "Selfie requirements",
                              }),
                              (0, e.jsx)("div", {
                                className: t().RequiredDocumentList,
                                children: (0, e.jsxs)("ol", {
                                  children: [
                                    (0, e.jsx)("li", {
                                      children:
                                        "Show your full face, and you holding the same Identification document - note, this is not a substitute for supplying a photo of the original document as described above",
                                    }),
                                    (0, e.jsx)("li", {
                                      children:
                                        "Please remove all hats, glasses, and other facial obstructions",
                                    }),
                                    (0, e.jsx)("li", {
                                      children:
                                        "The ID itself must be clear and legible and all four corners and edges must be visible",
                                    }),
                                    (0, e.jsx)("li", {
                                      children:
                                        "Please send the images as a JPEG / Image file",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)(_, { ...n }),
                ],
              }),
            ],
          });
        }
        function a(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", { children: "Tax Information Has Expired" }),
                  (0, e.jsx)("div", {
                    className: t().MessageSubject,
                    children:
                      "Our records indicate that you have not completed our recent request to update and/or provide additional tax information.",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "As per United States IRS requirements, developers are given 30 days to correct tax form issues before the initial tax form expires. This period has passed for your account. ",
                  de(n),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What do I do next?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "When you have all necessary tax information prepared, you may retake the full tax interview by clicking the button below.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function d(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", { children: "Tax Information Has Expired" }),
                  (0, e.jsx)("div", {
                    className: t().MessageSubject,
                    children:
                      "Our records indicate that you have not completed our recent request to update and/or provide additional Know Your Customer (KYC) and Tax information.",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "As per United States IRS requirements, developers are given 30 days to correct tax form issues before the initial tax form expires. This period has passed for your account. ",
                  de(n),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What do I do next?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "When you have all necessary KYC and tax information prepared, you may retake the full interview by clicking the button below.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function c(n) {
          const { requirement: r } = n,
            j =
              JSON.parse(r.deadline.data.description_jsondata).Parameters
                ?.CustomMessageBody ?? "Message not available";
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", { className: t().Freeform, children: j }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function x(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", {
                    children: "We are unable to validate your Steam account",
                  }),
                  (0, e.jsxs)("div", {
                    className: t().MessageSubject,
                    children: [
                      "The permanent and/or mailing address you entered in the tax interview cannot be verified. This may include not providing a postcode / zip - if this applies to you, please correct - ",
                      (0, e.jsx)("b", {
                        children:
                          "you MUST supply a postcode / zip if your country uses them",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Your Steam account will not be validated until we can verify the address.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What do I do next?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Please provide one of the following documents, showing the same address as you have entered it in the tax interview.  For prompt verification, please circle the address on the documentation provided (below) and ensure it is an exact match to the address entered in the interview, otherwise your account verification will be delayed:",
                  (0, e.jsx)("div", {
                    className: t().RequiredDocumentList,
                    children: (0, e.jsxs)("ul", {
                      children: [
                        (0, e.jsx)("li", {
                          children:
                            "Recent utility bill (if it shows your address)",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "Recent bank statement (if it shows your address)",
                        }),
                        (0, e.jsx)("li", {
                          children: "Tenant Lease (if it shows your address)",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "OR for a company / business you can provide a company registration certificate (if it shows your address)",
                        }),
                      ],
                    }),
                  }),
                  "Please do not give us the address of your bank or utility company.",
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function C(n) {
          const { requirement: r } = n,
            u = (0, b.$z)(r.deadline.data.due_date);
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", {
                    children: "Tax Information Is About To Expire",
                  }),
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      t().SectionBody,
                      t().DocumentProcessingNotice,
                    ),
                    children:
                      "If you are not currently receiving payments or expecting to receive payments in the near future, you can dismiss this notification and ignore this request.",
                  }),
                  (0, e.jsx)("div", {
                    className: t().MessageSubject,
                    children:
                      "Our records show that the US tax form W-8BEN we have on file for you is due to expire on " +
                      u +
                      ".",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "It's important to renew this information, otherwise we will be unable to make monthly royalty payments to you after " +
                  u +
                  ".",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What do I do next?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You need to review and submit our online tax interview. Following the link below will start a short tax interview which should take less than 10 minutes to complete.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Required permissions",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Tax information, including this required tax interview will need to be completed by a Steamworks user with Actual Authority rights.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children:
                  "What will happen if I choose not to complete the tax interview?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "On " +
                  u +
                  " , your tax information will be changed to an invalid status. In order for us to pay monthly royalties, we must have valid tax and banking information on file. Therefore, please retake the tax interview as soon as possible to avoid interruptions in payments.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function T(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", {
                    children: "Tax Information Is Out Of Date",
                  }),
                  (0, e.jsx)("div", {
                    className: t().MessageSubject,
                    children:
                      "We are required to obtain updated tax information from Steamworks partners every three years. Our records show that the US tax form W-8BEN we have on file for you has expired.",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "It's important to renew this information, otherwise we will be unable to make monthly royalty payments.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What do I do next?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You need to review and submit our online tax interview. Following the link below will start a short tax interview which should take less than 10 minutes to complete.  Please note once you have completed the tax interview, you may also need to provide KYC (know your customer) documentation.  If this is the case, we'll send you another email notification, but you can also check your Steamworks dashboard a day or two after you complete the tax interview to see if there is an action item requesting documents.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Required permissions",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Tax information, including this required tax interview will need to be completed by a Steamworks user with Actual Authority rights.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children:
                  "What will happen if I choose not to complete the tax interview?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "In order for us to pay monthly royalties, we must have valid tax and banking information on file. Therefore, please retake the tax interview as soon as possible to avoid interruptions in payments.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function W(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "Please retake the tax interview and enter your full address consistent with the document you previously provided.",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Your account will not be validated until we can make an exact match of the address you entered.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Address Requirements",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "The address must be in English and include any Building / Apartment numbers.",
                  (0, e.jsx)("br", {}),
                  "The address must also include the correct postcode / zip if your country uses them.",
                ],
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function M(n) {
          const { requirement: r } = n,
            u = r.onboarded
              ? "Until your tax information has been verified, you will not be able to receive any further payments."
              : "Until your tax information has been verified, you will not be able to release games on Steam.";
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "A recent audit found that you have provided us with invalid tax information",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Your tax status has been changed to 'Deactivated'. ",
                  u,
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "You must to correct your tax information and provide us with correct details about yourself in order for us to verify and validate your tax information. Please click the button below to restart the tax information interview.",
                  }),
                  (0, e.jsx)(H, { ...n }),
                ],
              }),
            ],
          });
        }
        function z(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "As described in a prior notification, the tax identification information you submitted for your Steamworks partner account does not match US IRS records.",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Since you did not provide a valid taxpayer identification number, per US IRS requirements, your tax form is invalid. ",
                  de(n),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "When you have all necessary tax information prepared, you may retake the full tax interview by clicking the button below.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function K(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "A recent audit found that you have provided us with invalid tax information",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Until your tax information has been verified, you will not be able to receive any further payments. Your tax status has been changed to 'Deactivated' status.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "You must correct your tax information and provide us with correct details about yourself in order for us to verify and validate your tax information. Please click the button below to restart the tax information interview.",
                  (0, e.jsx)(H, { ...n }),
                ],
              }),
            ],
          });
        }
        function Z(n) {
          const { requirement: r } = n,
            u = (0, e.jsx)(e.Fragment, {
              children: (0, e.jsxs)("ol", {
                children: [
                  (0, e.jsxs)("li", {
                    children: [
                      "If you need to change your Steamworks partner legal name, please open a Steamworks support ticket to make that change.",
                      (0, e.jsx)(P.jn, {
                        onClick: () =>
                          window.open(
                            R.TS.HELP_BASE_URL +
                              "wizard/HelpWithPublishing?issueid=904",
                            "_blank",
                          ),
                        className: t().NotificationButton,
                        children: "Visit Steamworks Support",
                      }),
                    ],
                  }),
                  (0, e.jsx)("li", {
                    children:
                      "If your Steamworks partner legal name is correct, please retake the tax interview by clicking the button below, and then provide the requested documents in the same name that you used to sign up for your Steamworks partner account (Your current partner name is shown above in the blue bar).",
                  }),
                  (0, e.jsx)(H, { ...n }),
                ],
              }),
            }),
            j = (0, e.jsx)(e.Fragment, {
              children: (0, e.jsxs)("ol", {
                children: [
                  (0, e.jsxs)("li", {
                    children: [
                      "If you need to change your Steamworks partner legal name, please return to the payment information page using the button below and click 'start over' to start the process again to correct your Steamworks partner legal name (note: you will not lose your Steam Direct app credit).",
                      (0, e.jsx)(P.jn, {
                        onClick: () =>
                          window.open(
                            R.TS.PARTNER_BASE_URL + "newpartner",
                            "_blank",
                          ),
                        className: t().NotificationButton,
                        children: "Payment Information Page",
                      }),
                    ],
                  }),
                  (0, e.jsxs)("li", {
                    children: [
                      "If your Steamworks partner legal name is correct, please retake the tax interview by clicking the button below, and then provide the requested documents in the same name that you used to sign up for your Steamworks partner account (Your current partner name is shown above in the blue bar).",
                      (0, e.jsx)(H, { ...n }),
                    ],
                  }),
                ],
              }),
            });
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "A recent audit found that your Steamworks partner legal name and the identification that you have provided in the tax interview / identity verification do not match.",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Your Steamworks partner legal name and the legal name used for tax purposes need to match (unless you are a US single member LLC).",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsxs)("div", {
                className: (0, o.A)(t().SectionBody, t().RequiredDocumentList),
                children: [r.onboarded && u, !r.onboarded && j],
              }),
            ],
          });
        }
        function U(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "We've received notification that the taxpayer identification number included on the tax form you have submitted does not match US IRS records.",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "If you do not provide a valid taxpayer identification number, per US IRS requirements, your tax form is invalid. ",
                  de(n),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You will need to retake the tax interview using your valid taxpayer identification number.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function Y(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "We've received notification that the taxpayer identification number included on the tax form you have submitted does not match US IRS records.",
                }),
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  `As you have completed the tax interview as a single member LLC, you are required to provide either your SSN or EIN assigned to your own name and not that of the LLC's. Per IRS regulations: "For federal income tax purposes, a single-member LLC classified as a disregarded entity generally must use the owner's social security number (SSN) or EIN for all information returns and reporting related to income tax. For example, if a disregarded entity LLC that is owned by an individual is required to provide a Form W-9, Request for Taxpayer Identification Number and Certification, the W-9 should provide the owner's SSN or EIN, not the LLC's EIN.\u201D`,
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("a", {
                    href: "https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies",
                    children: "Single Member LLC Companies Documentation",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "If you do not provide a valid taxpayer identification number, per US IRS requirements, your tax form is invalid. ",
                  de(n),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You will need to retake the tax interview using your valid taxpayer identification number.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function p(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children:
                    "A recent audit found that the name and/or tax number we have on file for you, does not match the United States IRS database.",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You will need to take a tax interview which should take less than 10 minutes to complete.  Note this interview will need to be completed by a Steamworks user with Actual Authority rights.",
              }),
              (0, e.jsx)(H, { ...n }),
            ],
          });
        }
        function h(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children: "You may be eligible to claim tax treaty benefits.",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "This is an automated notification that is being sent to you because you may be eligible to claim tax treaty benefits which may reduce your tax withholding on royalty payments from the standard withholding tax rate of 30% to a reduced rate in accordance with US Tax treaty and your country of tax residence. In order to be eligible for treaty benefits, you are required to provide either a US Tax Identification Number (TIN) or your country of tax residency Foreign TIN. If you believe you are eligible for treaty benefits / reduced rate of tax withholding, please complete the tax interview and provide either your US TIN or Foreign TIN. In the meantime, we are required to begin deducting the maximum amount of US tax from your royalty payments.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "What can I do?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "To correct your information, you will need to retake the tax interview using your valid taxpayer identification number. If your identity verification is pending, you will need to wait until that is complete.",
              }),
            ],
          });
        }
        function m(n) {
          const { requirement: r } = n,
            u = (0, b.$z)(r.deadline.data.due_date);
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(A, {}),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: `If the additional documents noted below have not been provided by ${u}, per US KYC requirements, the KYC and
				tax form you completed for Valve will be invalidated and you will need to retake the full interview.`,
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Validation Type",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Certification of Good Standing (",
                  (0, e.jsx)("b", { children: "Current Year" }),
                  ") for your Company.",
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Verification Required",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "For all companies established over 12 months ago, provide a Certificate of Good Standing. A Certificate of Good Standing should be attainable through your country's registrar or equivalent. This document serves as proof that your company is still operating and in good standing with the regulating body for the current year. ",
                  (0, e.jsx)("u", {
                    children:
                      "Note: screenshots of business portals are not acceptable.",
                  }),
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function S(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", {
                    children: "Identity verification required",
                  }),
                  (0, e.jsx)("div", {
                    className: t().MessageSubject,
                    children:
                      "Please provide both a selfie of yourself holding your photo identification and a separate, clear image of the same identification document (front and back if the identification is a card style ID). Both images must show the exact same, valid (unexpired) photo ID, issued within the past 10 years.",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Selfie requirements",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)("div", {
                  className: t().RequiredDocumentList,
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children:
                          "Show your full face, and you holding the same Identification document that you have previously provided",
                      }),
                      (0, e.jsx)("li", {
                        children:
                          "Please remove all hats, glasses, and other facial obstructions",
                      }),
                      (0, e.jsx)("li", {
                        children:
                          "The ID itself must be clear and legible and all four corners and edges must be visible",
                      }),
                      (0, e.jsx)("li", {
                        children:
                          "Please send the images as a JPEG / Image file",
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function D(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(pe, { ...n }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Validation Type",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You have made a claim for a reduced withholding tax rate under tax treaty and you have provided a Permanent address in a non tax treaty country.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Verification Required",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Documentary evidence of foreign status  - the following documents are required:",
                  (0, e.jsx)("br", {}),
                  "Certification of tax Residency for Tax Treaty Purposes",
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function I(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(pe, { ...n }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Validation Type",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You have provided a W-8BEN form with a US mailing address and claim a reduced rate of withholding tax under tax treaty.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Verification Required",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Documentary evidence of foreign status - the following documents are required:",
                  (0, e.jsx)("div", {
                    className: t().RequiredDocumentList,
                    children: (0, e.jsxs)("ol", {
                      children: [
                        (0, e.jsx)("li", {
                          children:
                            "Foreign Passport (Photograph and identity page only) OR Foreign Drivers License",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "Certification of tax Residency for Tax Treaty Purposes",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function g(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(pe, { ...n }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Validation Type",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You have provided a W-8BEN form with a US mailing address.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Verification Required",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Documentary evidence of foreign status - the following document is required:",
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    className: t().RequiredDocumentList,
                    children: (0, e.jsx)("ul", {
                      children: (0, e.jsx)("li", {
                        children:
                          "Foreign Passport (Photograph and identity page only) OR Foreign Drivers License",
                      }),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function O(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)(pe, { ...n }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Validation Type",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "You have indicated that one or both of your parents are born in the United States and you are claiming Foreign person status.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Verification Required",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Documentary evidence of foreign status - the following documents are required:",
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    className: t().RequiredDocumentList,
                    children: (0, e.jsxs)("ol", {
                      children: [
                        (0, e.jsx)("li", { children: "Birth Extract" }),
                        (0, e.jsx)("li", {
                          children:
                            "Foreign Passport (Photograph and identity page only)",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "Certification of tax Residency for Tax Treaty Purposes",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function E(n) {
          const { requirement: r } = n,
            u = `${R.TS.PARTNER_BASE_URL}pub/companydetails/${r.deadline.data.partnerid}`,
            j = JSON.parse(r.deadline.data.description_jsondata),
            B = r.bTestDisplay
              ? new Date().getFullYear() - 1
              : j?.Parameters?.TaxYear,
            le = `Our records show that you consented to electronic delivery of your tax documents.  ${
              B
                ? `You can find your 1042-S tax statement for ${B} available for download 
	underneath your tax information in Steamworks. We are required by the Internal Revenue Service (the U.S. taxing authority) to prepare and provide you with a 
	Form 1042-S, "Foreign Person's U.S. Source Income Subject to Withholding" on an annual basis. The Form reflects the amount of Steam revenue share payments on 
	US sales we paid to you in ${B} and related withholding taxes, if applicable.`
                : `You can find a new 1042-S tax statement available for download 
	underneath your tax information in Steamworks. We are required by the Internal Revenue Service (the U.S. taxing authority) to prepare and provide you with a 
	Form 1042-S, "Foreign Person's U.S. Source Income Subject to Withholding" on an annual basis.`
            }  This Form is prepared on a cash-basis for each calendar year. Receiving this 
	Form does not require you to file a U.S. tax return but there may be other circumstances that may require you to file a U.S. tax return. Generally, this form is 
	for informational purposes to you but you may want to consult with your tax advisors for additional guidance.`;
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children: "New tax form available for download",
                }),
              }),
              (0, e.jsx)("div", { className: t().SectionBody, children: le }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "We plan to file these forms with the taxing authorities by March 17 of this year. Please review this form carefully. There is no need to send anything back to us but if you have any questions, please let us know as soon as possible.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)(P.jn, {
                  onClick: () => window.open(u, "_blank"),
                  className: t().NotificationButton,
                  children: "View Tax Documents",
                }),
              }),
            ],
          });
        }
        function L(n) {
          const { requirement: r } = n,
            u = `${R.TS.PARTNER_BASE_URL}pub/companydetails/${r.deadline.data.partnerid}`,
            j = JSON.parse(r.deadline.data.description_jsondata),
            B = r.bTestDisplay
              ? new Date().getFullYear() - 1
              : j?.Parameters?.TaxYear,
            Q = B
              ? `Our records show that you consented to electronic delivery of your tax documents. You can find your 1099Misc tax statement for ${B} available
		for download underneath your tax information in Steamworks. The form reflects the amount of Steam revenue payments we paid to you in ${B}.
		This form is prepared on a cash-basis for each calendar year.`
              : `Our records show that you consented to electronic delivery of your tax documents. You can find a new 1099Misc tax statement available for download
		underneath your tax information in Steamworks. This form is prepared on a cash-basis for each calendar year`;
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("div", {
                  className: t().MessageSubject,
                  children: "New tax form available for download",
                }),
              }),
              (0, e.jsx)("div", { className: t().SectionBody, children: Q }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "We plan to file this form with the taxing authorities by January 31 of this year. Please review this form carefully. There is no need to send anything back to us but if you have any questions, please let us know as soon as possible.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)(P.jn, {
                  onClick: () => window.open(u, "_blank"),
                  className: t().NotificationButton,
                  children: "View Tax Documents",
                }),
              }),
            ],
          });
        }
        function A() {
          return (0, e.jsxs)("div", {
            className: t().MessageHeader,
            children: [
              (0, e.jsx)("h1", { children: "Identity verification required" }),
              (0, e.jsx)("div", {
                className: t().MessageSubject,
                children:
                  "Know Your Customer (KYC) regulations require Valve to verify the identity credentials of its payees.",
              }),
            ],
          });
        }
        function v(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              A(),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Please provide a valid form of photo identification that has been issued within the past 10 years (front and back if the identification is a card style ID).",
                  (0, e.jsx)("p", {}),
                  "Note: while we understand your ID may be valid beyond 10 years, our requirement is that the ID is issued within the last 10 years.",
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Image Requirements",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)("div", {
                  className: t().RequiredDocumentList,
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children:
                          "Please ensure the images are high quality, in color and are clear and in focus. Do not crop the images. The four corners and edges of the card must be clearly visible.",
                      }),
                      (0, e.jsx)("li", {
                        children:
                          "Please send the images as a JPEG / Image file",
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function G(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              A(),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Please provide an image of both the front and back of your photo identification document so that we can validate your account.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Image Requirements",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)("div", {
                  className: t().RequiredDocumentList,
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children:
                          "Please ensure the images are high quality, in color and are clear and in focus. Do not crop the images. The four corners and edges of the card must be clearly visible.",
                      }),
                      (0, e.jsx)("li", {
                        children:
                          "Please send the images as a JPEG / Image file",
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function $(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              A(),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Please provide a document that shows your full legal name in English such as an international passport.  You may also provide a picture of a bank card or credit card (with the numbers masked) that presents your name in English.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "When we translate the legal name on the document you provided, it does not match the name you provided when you signed up for an account with Steam. We are unable to validate your account until we can confirm the legal name in English.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Image Requirements",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)("div", {
                  className: t().RequiredDocumentList,
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children:
                          "Please ensure the images are high quality, in color and are clear and in focus. Do not crop the images. The four corners and edges of the card must be clearly visible.",
                      }),
                      (0, e.jsx)("li", {
                        children:
                          "Please send the images as a JPEG / Image file",
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function he(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              A(),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "In order for us to validate your account, we need to verify the company is not only legally registered but also in good operational standing. Please provide us with a copy of the following from the NECIPS platform:",
                  (0, e.jsx)("div", {
                    className: t().RequiredDocumentList,
                    children: (0, e.jsxs)("ol", {
                      children: [
                        (0, e.jsx)("li", {
                          children:
                            "Business License (\u8425\u4E1A\u6267\u7167)",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "Articles of Association (\u516C\u53F8\u7AE0\u7A0B)",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "Operational Continuity (\u7ECF\u8425\u72B6\u6001)",
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("b", {
                    children:
                      "We are unable to validate your account without each of these required documents.",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Please send documents as pdf files. Do not send screenshots of these documents. We require the full pdf document.",
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function ae(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("h1", {
                  children: "Address verification required",
                }),
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "At this time, we are unable to validate your Steam account. This is because the permanent and / or mailing address you entered in the tax interview cannot be verified.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children: (0, e.jsx)("b", {
                  children:
                    "Please upload a proof of address document (such as a bank statement or utility bill) that clearly shows both your name and the same mailing and permanent address you entered in your tax interview.",
                }),
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  (0, e.jsx)("div", {
                    className: t().SectionTitle,
                    children: "Document Requirements",
                  }),
                  (0, e.jsx)("div", {
                    className: t().RequiredDocumentList,
                    children: (0, e.jsxs)("ul", {
                      children: [
                        (0, e.jsx)("li", {
                          children:
                            "Please highlight or indicate where the address appears on the document so it can be easily identified during review.",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "The address must be translated into English and include any Building / Apartment numbers.",
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "The address must also include the correct postcode / zip if your country uses them.",
                        }),
                        (0, e.jsxs)("li", {
                          children: [
                            "Please ",
                            (0, e.jsx)("b", { children: "do not" }),
                            " give us the address of your bank or utility company.",
                          ],
                        }),
                        (0, e.jsx)("li", {
                          children:
                            "Your account will not be validated until we can make an exact match of the address you entered.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function me(n) {
          const { requirement: r } = n,
            u = JSON.parse(r.deadline.data.description_jsondata),
            j = r.bTestDisplay ? "Sweden" : u?.Parameters?.TaxTreatyCountry;
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              (0, e.jsx)("div", {
                className: t().MessageHeader,
                children: (0, e.jsx)("h1", {
                  children: "Tax verification required",
                }),
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Please provide a copy of your tax residency certificate for ",
                  j,
                  " so we can validate your account.",
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Please send the document as a pdf file. Do not send a screenshot of the document. We require the full pdf document.",
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        function ye(n) {
          return (0, e.jsxs)("div", {
            className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
            children: [
              A(),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Please provide an extract from Turkiye Ticaret Sicili Gazetesi showing your entity's legal name.",
              }),
              (0, e.jsx)("div", {
                className: t().SectionBody,
                children:
                  "Please send the document as a pdf file. Do not send a screenshot of the document. We require the full pdf document.",
              }),
              (0, e.jsx)(_, { ...n }),
            ],
          });
        }
        let ge = -1,
          je = -1;
        function H(n) {
          const { requirement: r } = n,
            [u, j] = (0, y.useState)(""),
            [B, Q] = (0, y.useState)(!1),
            le = (0, y.useCallback)(async () => {
              if ((j(""), !r.deadline?.data?.partnerid)) {
                j("An error occurred.  Missing partner id");
                return;
              }
              const fe = r.onboarded ? "pub" : "newpartner",
                ce = `${R.TS.PARTNER_BASE_URL}${fe}/ajaxstarttaxidentityworkflow/${r.deadline.data.partnerid}`,
                ee = new FormData();
              ee.append("sessionid", (0, R.KC)()), Q(!0);
              try {
                const F = await ue().post(ce, ee, { withCredentials: !0 });
                F?.status == 200 && F.data?.success == J.R && F.data.url
                  ? window.open(F.data.url, "_blank")
                  : j("An error occurred. " + (0, ie.H)(F)?.strErrorMsg);
              } catch (F) {
                j("An error occurred. " + (0, ie.H)(F)?.strErrorMsg);
              }
              Q(!1);
            }, [r]);
          if (ge == -1) ge = r.index;
          else if (ge != r.index) return null;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !!u &&
                (0, e.jsx)("div", {
                  className: t().InterviewError,
                  children: u,
                }),
              (0, e.jsx)(P.jn, {
                disabled: B,
                onClick: () => le(),
                className: t().NotificationButton,
                children: B ? "Opening Tax Interview" : "Begin Tax Interview",
              }),
            ],
          });
        }
        function _(n) {
          const { requirement: r } = n,
            j = JSON.parse(r.deadline.data.description_jsondata).Parameters
              ?.Dropbox_FileRequest_Url;
          if (!j) return null;
          if (je == -1) je = r.index;
          else if (je != r.index) return null;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Providing documents",
              }),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "The quickest way to provide the required documentation is by securely uploading to this personalized Dropbox\u2122 File Request. This needs to be completed within 30 days after which time the link will be disabled.",
                  (0, e.jsx)("p", {}),
                  (0, e.jsx)("span", {
                    className: t().DocumentProcessingNotice,
                    children:
                      "Please note that this action item will remain active and on your dashboard until our tax vendor has reviewed and approved your documents. The document approval process takes 10 to 15 business days.",
                  }),
                ],
              }),
              (0, e.jsx)(P.jn, {
                onClick: () => window.open(j, "_blank"),
                className: t().NotificationButton,
                children: "Open Dropbox\u2122 File Request",
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsxs)("div", {
                className: t().SectionBody,
                children: [
                  "Alternatively, you can mail to:",
                  (0, e.jsxs)("div", {
                    className: t().MailingAddress,
                    children: [
                      "Tax Identity Solutions / Valve Tax Certification",
                      (0, e.jsx)("br", {}),
                      "3020 Issaquah Pine Lake Road, PMB 321",
                      (0, e.jsx)("br", {}),
                      "Sammamish, WA, 98075-7253",
                      (0, e.jsx)("br", {}),
                      "USA",
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function pe(n) {
          const { requirement: r } = n,
            u = (0, b.$z)(r.deadline.data.due_date),
            j = r.onboarded
              ? `If the additional documents noted below have not been provided by ${u}, per US IRS requirements, the
				tax form you completed for Valve is invalid and you will need to retake the full tax interview. Until your tax information has been verified, you will not be able to receive any further payments.`
              : `If the additional documents noted below have not been provided by ${u}, per US IRS requirements, the
				tax form you completed for Valve is invalid and you will need to retake the full tax interview. You will be unable to distribute your product via Steam
				until we receive a valid tax form from you.`;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: t().MessageHeader,
                children: [
                  (0, e.jsx)("h1", {
                    children: "Additional documents required",
                  }),
                  (0, e.jsx)("div", {
                    className: t().MessageSubject,
                    children:
                      "IRS regulations require Valve to file Form 1099Misc and/or 1042-S for developers earning royalty income in a calendar year. To comply with those regulations, we have reviewed the information that you submitted via the online tax interview. This notification is being sent to you because additional documents are necessary to complete your tax documentation.",
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: t().SectionTitle,
                children: "Why is this important?",
              }),
              (0, e.jsx)("div", { className: t().SectionBody, children: j }),
            ],
          });
        }
        function de(n) {
          const { requirement: r } = n;
          return r.onboarded
            ? "Until your tax information has been verified, you will not be able to receive any further payments."
            : "You will be unable to distribute your product via Steam until we receive valid KYC and tax information from you.";
        }
        const Se = [
            "AddressCorrection",
            "DocReq-KYC-Docs",
            "DocReq-KYC-Entity-FR",
            "DocReq-KYC-Entity-FR-CERT",
            "DocReq-KYC-FR",
            "DocReq-Selfie-FR",
            "DocReq-TreatyClaimOthCty-FR",
            "DocReq-TreatyClaimUSAddress-FR",
            "DocReq-W8USAddress-FR",
            "DocReq-W8USParent-FR",
            "F1099MISC-ConsentYes",
            "F1042-Consent",
            "FailureToComply",
            "FailureToComply-KYC",
            "Freeform",
            "Freeform-FR",
            "DocReq-InvalidAddress-FR",
            "InvalidTaxInfo-Partner",
            "InvalidTIN",
            "InvalidTINAudit-Partner",
            "NameMismatch-Partner",
            "Notify-FailedTIN",
            "Notify-FailedTIN-SingLLC",
            "Notify-Mismatch",
            "Notify-NoTINTreaty-Partner",
            "Renewal-W8-Initial",
            "Renewal-W8-Partner-Urgent",
            "DocReq-PhotoId-10Years",
            "DocReq-PhotoId-FrontBack",
            "DocRec-NameTranslation",
            "DocReq-Entity-CN-NECIPS",
            "DocReq-ProofOfAddress",
            "DocReq-TaxResidency",
            "DocReq-Entity-TR-Gazetesi",
          ],
          Ne = {
            AddressCorrection: { component: W },
            "DocReq-KYC-Docs": { component: N },
            "DocReq-KYC-Entity-FR": { component: re },
            "DocReq-KYC-Entity-FR-CERT": { component: m },
            "DocReq-KYC-FR": { component: l },
            "DocReq-Selfie-FR": { component: S },
            "DocReq-TreatyClaimOthCty-FR": { component: D },
            "DocReq-TreatyClaimUSAddress-FR": { component: I },
            "DocReq-W8USAddress-FR": { component: g },
            "DocReq-W8USParent-FR": { component: O },
            "F1099MISC-ConsentYes": { component: L },
            "F1042-Consent": { component: E },
            FailureToComply: { component: a },
            "FailureToComply-KYC": { component: d },
            Freeform: { component: c },
            "Freeform-FR": { component: c },
            "DocReq-InvalidAddress-FR": { component: x },
            "InvalidTaxInfo-Partner": { component: M },
            InvalidTIN: { component: z },
            "InvalidTINAudit-Partner": { component: K },
            "NameMismatch-Partner": { component: Z },
            "Notify-FailedTIN": { component: U },
            "Notify-FailedTIN-SingLLC": { component: Y },
            "Notify-Mismatch": { component: p },
            "Notify-NoTINTreaty-Partner": { component: h },
            "Renewal-W8-Initial": { component: C },
            "Renewal-W8-Partner-Urgent": { component: T },
            "DocReq-PhotoId-10Years": { component: v },
            "DocReq-PhotoId-FrontBack": { component: G },
            "DocRec-NameTranslation": { component: $ },
            "DocReq-Entity-CN-NECIPS": { component: he },
            "DocReq-ProofOfAddress": { component: ae },
            "DocReq-TaxResidency": { component: me },
            "DocReq-Entity-TR-Gazetesi": { component: ye },
          };
        function Te() {
          const [n] = (0, y.useState)(
              (0, f.Tc)("testpage", "application_config"),
            ),
            [r] = (0, y.useState)(
              (0, f.Tc)("testtemplate", "application_config"),
            );
          return [n, r];
        }
        function be() {
          const [n] = (0, y.useState)(
              (0, f.Tc)("deadlines", "application_config"),
            ),
            [r] = (0, y.useState)(
              parseInt((0, f.Tc)("action_id", "application_config")),
            ),
            [u] = (0, y.useState)(
              parseInt((0, f.Tc)("publisher_id", "application_config")),
            ),
            [j] = (0, y.useState)(
              (0, f.Tc)("publisher_name", "application_config"),
            ),
            [B] = (0, y.useState)(
              parseInt((0, f.Tc)("publisher_onboarded", "application_config")),
            );
          return [n, j, r, u, B];
        }
        function we(n) {
          const [r, u, j, B, Q] = be(),
            [le, fe] = Te(),
            [ce, ee] = y.useMemo(() => {
              const F = [...r];
              F.sort((ve, Re) => {
                const De = new Date(
                    JSON.parse(ve.data.description_jsondata)?.CreatedOn,
                  ),
                  Be = new Date(
                    JSON.parse(Re.data.description_jsondata)?.CreatedOn,
                  );
                return De.getTime() > Be.getTime() ? -1 : 1;
              });
              const se =
                F.length > 0
                  ? !!F.find((ve) => ve.data.status == k._8.G || Pe(ve))
                  : !1;
              return [F, se];
            }, [r]);
          return (0, e.jsx)(te.tH, {
            children: (0, e.jsx)("div", {
              className: s().AdminPageCtn,
              children: (0, e.jsxs)("div", {
                className: s().ColumnCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: s().LeftCol,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().ColHeader, s().Blue),
                        children: [
                          "Steamworks Document Communication",
                          (0, e.jsx)("div", {
                            className: t().PartnerName,
                            children: u,
                          }),
                        ],
                      }),
                      !ee &&
                        (0, e.jsx)("div", {
                          className: t().TaskCompleted,
                          children: "This tax requirement is closed",
                        }),
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          le && (0, e.jsx)(Ie, { strTemplate: fe }),
                          ee &&
                            ce.length > 0 &&
                            ce.map((F, se) =>
                              (0, e.jsx)(
                                Ce,
                                {
                                  requirement: {
                                    deadline: F,
                                    index: se,
                                    onboarded: Q != 0,
                                  },
                                },
                                "update_" + se,
                              ),
                            ),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().RightCol,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, o.A)(s().ColHeader, s().Blue),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().SectionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().TitleSmall,
                            children: "Important Notice",
                          }),
                          (0, e.jsx)("div", {
                            className: t().Body,
                            children:
                              "Information in this document does not constitute tax, legal, or other professional advice. If you have other questions, please contact your tax, legal, or other professional advisor.",
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: s().SectionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().TitleSmall,
                            children: "Third-party tax vendor",
                          }),
                          (0, e.jsx)("div", {
                            className: t().Body,
                            children:
                              "Valve uses a service called TaxIdentity provided by a third-party company called Lilaham for many services related to tax information collection, verification, and end-of-year statements.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function Ie(n) {
          const { strTemplate: r } = n,
            [u, j] = y.useState(r || "Renewal-W8-Initial"),
            [B, Q] = y.useState(!0),
            le = (se) => {
              j(se.data);
            },
            fe = Se.map((se) => ({ label: se, data: se })),
            ce = Date.now(),
            ee = {},
            F = new Intl.DateTimeFormat(navigator.language).format(ce);
          return (
            (ee.data = {}),
            (ee.data.due_date = ce / 1e3 + X.Kp.PerDay * 14),
            (ee.data.description_jsondata = `{ "TemplateName": "${u}", "CreatedOn": "${F}" }`),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsxs)("div", {
                  style: { display: "flex", alignItems: "center" },
                  children: [
                    (0, e.jsx)(P.ZU, {
                      rgOptions: fe,
                      selectedOption: u,
                      onChange: le,
                    }),
                    (0, e.jsx)(P.Yh, {
                      checked: B,
                      style: { marginLeft: "10px", marginRight: "10px" },
                      onClick: () => Q(!B),
                    }),
                    (0, e.jsx)("div", {
                      style: { width: "200px" },
                      children: "Partner Active",
                    }),
                  ],
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)(Ce, {
                  requirement: {
                    deadline: ee,
                    index: 0,
                    onboarded: B,
                    bTestDisplay: !0,
                  },
                }),
              ],
            })
          );
        }
        function Pe(n) {
          const r = JSON.parse(n.data.description_jsondata);
          return (
            r.TemplateName == "F1099MISC-ConsentYes" ||
            r.TemplateName == "F1042-Consent"
          );
        }
        function Ce(n) {
          const { requirement: r } = n,
            u = JSON.parse(r.deadline.data.description_jsondata),
            [, j] = be(),
            B = new Date(u?.CreatedOn);
          if (u.TemplateName == "ActionComplete") return null;
          if (!Ne[u.TemplateName])
            return (0, e.jsxs)("div", {
              className: (0, o.A)(t().NotificationContainer, s().SectionCtn),
              children: [
                (0, e.jsx)("div", {
                  className: t().MessageDate,
                  children: (0, b.$z)(B.getTime() / 1e3),
                }),
                (0, e.jsx)("div", { children: "Message Not Available" }),
              ],
            });
          const Q = Ne[u.TemplateName].component;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: t().MessageDate,
                children: (0, b.$z)(B.getTime() / 1e3),
              }),
              (0, e.jsx)(Q, { requirement: r }),
            ],
          });
        }
        function _e(n) {
          const { deadline: r } = n,
            u = JSON.parse(r.data.description_jsondata),
            j = new Date(u?.CreatedOn);
          return jsx("div", {
            className: classnames(
              styles.NotificationContainer,
              styles.NotificationUpdate,
              adminstyles.SectionCtn,
            ),
            children: jsxs(
              "div",
              {
                children: [
                  jsx("div", {
                    className: styles.MessageDate,
                    children: LocalizeRtime32ToShortDate(j.getTime() / 1e3),
                  }),
                  jsx("div", {
                    className: styles.MessageSource,
                    children: "Message from TaxIdentity",
                  }),
                  jsx("div", {
                    className: styles.MessageBody,
                    children: u.Subject,
                  }),
                ],
              },
              u.NotificationID,
            ),
          });
        }
      },
      84676: (q, V, i) => {
        "use strict";
        i.d(V, {
          G6: () => P,
          Gg: () => ne,
          MS: () => re,
          Ow: () => R,
          Sq: () => s,
          eR: () => b,
          gF: () => N,
          ik: () => o,
          t7: () => X,
          zX: () => ie,
        });
        var e = i(41735),
          y = i.n(e),
          f = i(90626),
          te = i(72604),
          k = i(3367),
          w = i(54963),
          t = i(10142);
        function oe(a, d, c = !0) {
          const x = c
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            C = c || CStoreItemCache.Get().BHasStoreItem(a, d, x) ? a : null,
            [T, W] = P(C, d, x),
            [M, z] = useState(null),
            [K, Z] = P(M, d, x);
          useEffect(() => {
            T?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              z(T.GetParentAppID());
          }, [T]);
          let U = T?.GetShortDescription()
            ? StripBBCodeTags(T.GetShortDescription())
            : "";
          (!U || U.length === 0) &&
            K &&
            (U = K?.GetShortDescription()
              ? StripBBCodeTags(K.GetShortDescription())
              : "");
          const Y = W == o && (!M || Z == o);
          return [U, Y];
        }
        const s = 1,
          b = 2,
          o = 3;
        function P(a, d, c, x) {
          const C = (0, f.useRef)(void 0),
            T = (0, f.useRef)(void 0),
            W = (0, w.CH)();
          C.current = a;
          const [M, z] = (0, f.useState)(void 0),
            {
              include_assets: K,
              include_release: Z,
              include_platforms: U,
              include_all_purchase_options: Y,
              include_screenshots: p,
              include_trailers: h,
              include_ratings: m,
              include_tag_count: S,
              include_reviews: D,
              include_basic_info: I,
              include_supported_languages: g,
              include_full_description: O,
              include_included_items: E,
              include_assets_without_overrides: L,
              apply_user_filters: A,
              include_links: v,
              include_extra_details: G,
              include_optin_registration_tags: $,
            } = c;
          if (
            ((0, f.useEffect)(() => {
              const ae = {
                include_assets: K,
                include_release: Z,
                include_platforms: U,
                include_all_purchase_options: Y,
                include_screenshots: p,
                include_trailers: h,
                include_ratings: m,
                include_tag_count: S,
                include_reviews: D,
                include_basic_info: I,
                include_supported_languages: g,
                include_full_description: O,
                include_included_items: E,
                include_assets_without_overrides: L,
                apply_user_filters: A,
                include_links: v,
                include_extra_details: G,
                include_optin_registration_tags: $,
              };
              let me = null;
              return (
                !a ||
                  a < 0 ||
                  t.A.Get().BHasStoreItem(a, d, ae) ||
                  (M !== void 0 && x && x == T.current) ||
                  (x !== T.current && (z(void 0), (T.current = x)),
                  (me = y().CancelToken.source()),
                  t.A.Get()
                    .QueueStoreItemRequest(a, d, ae)
                    .then((ye) => {
                      !me?.token.reason && C.current === a && z(ye == te.R),
                        W();
                    })),
                () => me?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              a,
              d,
              x,
              M,
              K,
              Z,
              U,
              Y,
              p,
              h,
              m,
              S,
              D,
              I,
              g,
              O,
              E,
              L,
              A,
              v,
              G,
              $,
              W,
            ]),
            !a)
          )
            return [null, b];
          if (M === !1) return [void 0, b];
          if (t.A.Get().BIsStoreItemMissing(a, d)) return [void 0, b];
          if (!t.A.Get().BHasStoreItem(a, d, c)) return [void 0, s];
          const he = t.A.Get().GetStoreItemWithLegacyVisibilityCheck(a, d);
          return he ? [he, o] : [null, b];
        }
        function X(a, d, c) {
          return P(a, k.c6.qI, d, c);
        }
        function R(a, d, c) {
          return P(a, k.c6.xO, d, c);
        }
        function ne(a, d, c) {
          return P(a, k.c6.RD, d, c);
        }
        function ue(a, d, c) {
          const [x, C] = P(a, d, c);
          let T;
          x?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !x.GetAssets()?.GetHeaderURL() &&
            x?.GetIncludedAppIDs().length == 1 &&
            (T = x.GetIncludedAppIDs()[0]);
          const [W, M] = X(T, c);
          return T && W?.BIsVisible() ? [W, M] : [x, C];
        }
        function J(a, d, c, x) {
          const C = (0, w.CH)(),
            {
              include_assets: T,
              include_release: W,
              include_platforms: M,
              include_all_purchase_options: z,
              include_screenshots: K,
              include_trailers: Z,
              include_ratings: U,
              include_tag_count: Y,
              include_reviews: p,
              include_basic_info: h,
              include_supported_languages: m,
              include_full_description: S,
              include_included_items: D,
              include_assets_without_overrides: I,
              apply_user_filters: g,
              include_links: O,
              include_extra_details: E,
              include_optin_registration_tags: L,
            } = c;
          return (
            (0, f.useEffect)(() => {
              if (!a || a.length == 0) return;
              const v = {
                  include_assets: T,
                  include_release: W,
                  include_platforms: M,
                  include_all_purchase_options: z,
                  include_screenshots: K,
                  include_trailers: Z,
                  include_ratings: U,
                  include_tag_count: Y,
                  include_reviews: p,
                  include_basic_info: h,
                  include_supported_languages: m,
                  include_full_description: S,
                  include_included_items: D,
                  include_assets_without_overrides: I,
                  apply_user_filters: g,
                  include_links: O,
                  include_extra_details: E,
                  include_optin_registration_tags: L,
                },
                G = a.filter(
                  (ae) =>
                    !(
                      t.A.Get().BHasStoreItem(ae, d, v) ||
                      t.A.Get().BIsStoreItemMissing(ae, d)
                    ),
                );
              if (G.length == 0) return;
              const $ = y().CancelToken.source(),
                he = G.map((ae) => t.A.Get().QueueStoreItemRequest(ae, d, v));
              return (
                Promise.all(he).then(() => {
                  $.token.reason || C();
                }),
                () => $.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              a,
              d,
              x,
              C,
              T,
              W,
              M,
              z,
              K,
              Z,
              U,
              Y,
              p,
              h,
              m,
              S,
              D,
              I,
              g,
              O,
              E,
              L,
            ]),
            a
              ? a.every(
                  (v) =>
                    t.A.Get().BHasStoreItem(v, d, c) ||
                    t.A.Get().BIsStoreItemMissing(v, d),
                )
                ? a.every((v) =>
                    t.A.Get().GetStoreItemWithLegacyVisibilityCheck(v, d),
                  )
                  ? o
                  : b
                : s
              : b
          );
        }
        function ie(a, d, c) {
          return J(a, k.c6.qI, d, c);
        }
        function re(a, d, c) {
          return J(a, k.c6.xO, d, c);
        }
        function N(a, d, c) {
          return J(a, k.c6.RD, d, c);
        }
        function l() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      85705: (q, V, i) => {
        "use strict";
        i.d(V, { k: () => k });
        var e = i(7850),
          y = i(36707),
          f = i(37999),
          te = i.n(f);
        function k(w) {
          const { size: t, color: oe, trackColor: s } = w,
            b = { borderColor: s, borderLeftColor: oe };
          if (typeof t == "number") {
            const o = `${t}px`;
            (b.width = o),
              (b.height = o),
              (b.minHeight = o),
              (b.minWidth = o),
              (b.borderWidth = `${t / 10}px`);
          }
          return (0, e.jsx)("div", {
            className: (0, y.A)(
              f.Loading,
              t == "small" && f.Small,
              (t == "medium" || !t) && f.Medium,
              t == "large" && f.Large,
            ),
            style: b,
          });
        }
      },
      2341: (q) => {
        q.exports = {
          DashboardCtn: "_1_hOYVlP7oAcGzMRqRHq_p",
          DashboardFilters: "_3FyleqzPJd8DHbxjl4y9F3",
          TaxRequirementResultsContainer: "_1qWALk5nCmq5k9L83nsTxt",
          TaxRequirementFilters: "_3cFbkh1j0JJXVXBjJFnxdz",
          TaxRequirementFilterRow: "_3a7_xRkLXFkxUoWZSqyVcJ",
          EmptyNotifications: "_6epyMHoLUeMwgaxAABPk9",
          TaxRequirementTable: "_1QERjK04vLK1z0MWL5yn81",
          ActionID: "B58x_VqxTzgU8vlzTwJFC",
          Status: "_3tFjoS3ygfhuPvoh8ow2Of",
          CreatedOn: "phqo4zDzqftYUoAI6wSzt",
        };
      },
      54292: (q) => {
        q.exports = {
          NotificationContainer: "mXFFZGFLLywwiNBr7ouAn",
          header_container: "_1sufRvqysxjE-xyRrrKL5U",
          header_label: "_36r9iRM8nCGkZBkqJOFd7G",
          MessageDate: "_3o-Tl2KWzVGK4YHEgfwWLP",
          TaskCompleted: "_3h_ArCyEssKna4ulmgRnLu",
          DocumentProcessingNotice: "_1g1PXMANzYwlWDNpKVMpgk",
          MessageHeader: "_1HU84kVIdNVKbbByTWyyBG",
          MessageSource: "_3PZihnKXFSjpftsqE-Q2V5",
          MessageTitle: "_3BTOSqg9pBNBk8tvXHu0PF",
          MessageSubject: "_3cgDsv4Dvsp7KBgPxHunOe",
          PartnerName: "q7s_DHsFdDJff_LlGxC28",
          SectionTitle: "_1txsId4Y8YWZlYs_fDsspE",
          SectionBody: "mL02bhGYdClHKqzfITR6-",
          SectionList: "_35PLZbKMt7K8FRHaavOsa9",
          ListItem: "_3N8ZtUMOp9ag0G28WBzOOg",
          NotificationButton: "_1ZCVYK700rSky9gR7H9vNv",
          Freeform: "_3u0tm6rp89JYbrevwLvGk1",
          NotificationUpdate: "_39cJ7AQw3tqr75MieK0VHr",
          RequiredDocumentList: "_1hLKyqNiw3mmMbZf-ERCbA",
          MailingAddress: "_3Va0U3hw10-sJGSnBDs18Y",
          InterviewError: "_2j2NP-v2-OxDvT0FXzQELS",
        };
      },
      45737: (q) => {
        q.exports = {
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
      95695: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      37999: (q) => {
        q.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [58758],
    {
      39376: (O, T, e) => {
        "use strict";
        e.d(T, { Dn: () => E, O4: () => i, Ut: () => h, p0: () => f });
        var t = e(41735),
          u = e.n(t),
          D = e(90626),
          p = e(72604),
          M = e(3367),
          g = e(34592),
          v = e(3166),
          A = e(10349);
        class m {
          m_mapAppIDToPaymentPartners = new Map();
          m_mapAppIDToPromise = new Map();
          m_mapPackageIDToPaymentPartners = new Map();
          m_mapPackageIDToPromise = new Map();
          m_mapBundleIDToPaymentPartners = new Map();
          m_mapBundleIDToPromise = new Map();
          GetInfoForApp(r) {
            return this.m_mapAppIDToPaymentPartners.get(r);
          }
          BHasInfoForApp(r) {
            return this.m_mapAppIDToPaymentPartners.has(r);
          }
          GetInfoForPackage(r) {
            return this.m_mapPackageIDToPaymentPartners.get(r);
          }
          BHasInfoForPackage(r) {
            return this.m_mapPackageIDToPaymentPartners.has(r);
          }
          GetInfoForBundle(r) {
            return this.m_mapBundleIDToPaymentPartners.get(r);
          }
          BHasInfoForBundle(r) {
            return this.m_mapBundleIDToPaymentPartners.has(r);
          }
          GetInfoForStoreItem(r, n) {
            switch (n) {
              case M.c6.qI:
                return this.GetInfoForApp(r);
              case M.c6.RD:
                return this.GetInfoForPackage(r);
              case M.c6.xO:
                return this.GetInfoForBundle(r);
              default:
                return null;
            }
          }
          BHasInfoForStoreItem(r, n) {
            switch (n) {
              case M.c6.qI:
                return this.BHasInfoForApp(r);
              case M.c6.RD:
                return this.BHasInfoForPackage(r);
              case M.c6.xO:
                return this.BHasInfoForBundle(r);
              default:
                return !1;
            }
          }
          async LoadAppPartnerInfo(r) {
            return (
              this.m_mapAppIDToPromise.has(r) ||
                this.m_mapAppIDToPromise.set(
                  r,
                  this.InternalLoadAppPartnerInfo(r, null, null),
                ),
              this.m_mapAppIDToPromise.get(r)
            );
          }
          async LoadPackagePartnerInfo(r) {
            return (
              this.m_mapPackageIDToPromise.has(r) ||
                this.m_mapPackageIDToPromise.set(
                  r,
                  this.InternalLoadAppPartnerInfo(null, r, null),
                ),
              this.m_mapPackageIDToPromise.get(r)
            );
          }
          async LoadBundlePartnerInfo(r) {
            return (
              this.m_mapBundleIDToPromise.has(r) ||
                this.m_mapBundleIDToPromise.set(
                  r,
                  this.InternalLoadAppPartnerInfo(null, null, r),
                ),
              this.m_mapBundleIDToPromise.get(r)
            );
          }
          async LoadStoreItemPartnerInfo(r, n) {
            switch (n) {
              case M.c6.qI:
                return this.LoadAppPartnerInfo(r);
              case M.c6.RD:
                return this.LoadPackagePartnerInfo(r);
              case M.c6.xO:
                return this.LoadBundlePartnerInfo(r);
              default:
                return null;
            }
          }
          async InternalLoadAppPartnerInfo(r, n, c) {
            let _ = null;
            try {
              const y = { appid: r, packageid: n, bundleid: c },
                S =
                  v.TS.PARTNER_BASE_URL + "promotion/dailydeals/ajaxgetpartner",
                I = await u().get(S, { params: y, withCredentials: !0 });
              if (I?.status == 200 && I.data?.success == p.R)
                return r
                  ? (this.m_mapAppIDToPaymentPartners.set(
                      r,
                      I.data.partnerinfo,
                    ),
                    this.m_mapAppIDToPaymentPartners.get(r))
                  : n
                    ? (this.m_mapPackageIDToPaymentPartners.set(
                        n,
                        I.data.partnerinfo,
                      ),
                      this.m_mapPackageIDToPaymentPartners.get(n))
                    : (this.m_mapBundleIDToPaymentPartners.set(
                        c,
                        I.data.partnerinfo,
                      ),
                      this.m_mapBundleIDToPaymentPartners.get(c));
              _ = (0, g.H)(I);
            } catch (y) {
              _ = (0, g.H)(y);
            }
            return (
              console.error(
                "CPartnerPaymentStore.LoadAppPartnerInfo failed: " +
                  _?.strErrorMsg,
                _,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
          }
          constructor() {}
        }
        function i(a) {
          return E(a, M.c6.qI);
        }
        function s(a) {
          return E(a, EStoreItemType.k_EStoreItemType_Package);
        }
        function o(a) {
          return E(a, EStoreItemType.k_EStoreItemType_Bundle);
        }
        function h(a) {
          return E(a.id, (0, A.gy)(a));
        }
        function E(a, r) {
          const [n, c] = D.useState(() => m.Get().GetInfoForStoreItem(a, r));
          return (
            D.useEffect(() => {
              a
                ? !m.Get().BHasInfoForStoreItem(a, r) || n == null
                  ? m.Get().LoadStoreItemPartnerInfo(a, r).then(c)
                  : m.Get().BHasInfoForStoreItem(a, r) &&
                    n != m.Get().GetInfoForStoreItem(a, r) &&
                    c(m.Get().GetInfoForStoreItem(a, r))
                : c(null);
            }, [a, r, n]),
            n
          );
        }
        function f(a) {
          const [r, n] = (0, D.useState)(null);
          return (
            (0, D.useEffect)(() => {
              if (a?.length > 0) {
                const c = a.map((_) =>
                  m.Get().LoadStoreItemPartnerInfo(_, M.c6.qI),
                );
                Promise.all(c).then(() => {
                  const _ = new Map();
                  a.forEach((y) => {
                    m.Get().BHasInfoForApp(y) &&
                      _.set(y, m.Get().GetInfoForApp(y));
                  }),
                    n(_);
                });
              }
            }, [a]),
            r
          );
        }
      },
      33654: (O, T, e) => {
        "use strict";
        e.d(T, {
          Gx: () => M,
          _w: () => m,
          ap: () => D,
          cG: () => A,
          iN: () => g,
          pc: () => v,
          sq: () => p,
        });
        var t = e(7850),
          u = e(18210);
        function D(i) {
          if (!i || i.trim().length == 0) return null;
          try {
            return JSON.parse(i);
          } catch {
            return null;
          }
        }
        function p(i, s) {
          const o = new Set();
          return i.filter((h) => {
            const E = s(h);
            return o.has(E) ? !1 : (o.add(E), !0);
          });
        }
        function M(...i) {
          return [...new Set(i.flat())];
        }
        function g(i) {
          const { href: s, children: o } = i;
          return s
            ? (0, t.jsx)("a", { ...i, children: o })
            : (0, t.jsx)(t.Fragment, { children: o });
        }
        function v(i, s) {
          const o = {
              sText: (0, u.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, u.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            h = {
              sText: (0, u.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            E = {
              released: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let f = o;
          return i in E ? (f = E[i]) : s || (f = h), f;
        }
        function A(i) {
          if (i.type == "seasonalsale") {
            const s = i.name.toLowerCase();
            if (s.includes("spring")) return "#dd71d4";
            if (s.includes("summer")) return "#29c6ec";
            if (s.includes("autumn")) return "#ac240c";
            if (s.includes("winter")) return "#01704f";
          }
        }
        function m(i) {
          let s = 0;
          for (let f = 0; f < i.length; f++)
            s = i.charCodeAt(f) + ((s << 5) - s);
          const o = s % 360,
            h = 50 + (s % 50),
            E = 40 + (s % 30);
          return `hsl(${o}, ${h}%, ${E}%, 0.25)`;
        }
      },
      42415: (O, T, e) => {
        "use strict";
        e.d(T, { i: () => y, q: () => I });
        var t = e(7850),
          u = e(3367),
          D = e(65946),
          p = e(90626),
          M = e(76559),
          g = e(813),
          v = e(27862);
        function A(B, x) {
          const { data: d } = (0, v.lT)(B, x);
          return d ?? null;
        }
        var m = e(7582),
          i = e(10349),
          s = e(40358),
          o = e(68094),
          h = e(36707),
          E = e(58534),
          f = e(56330),
          a = e(85599),
          r = e(18210),
          n = e(98609),
          c = e(11243),
          _ = e(71421);
        function y(B) {
          const { oEditableMessage: x } = B,
            [d] = (0, D.q3)(() => [x.GetStoreItemKey()]);
          return !d || d.item_type != "app"
            ? (0, t.jsx)("div", {
                className: f.ErrorStylesWithIcon,
                children:
                  "Error: Major Update does not support anything but targeting app",
              })
            : (0, t.jsx)(S, { oEditableMessage: x, idKey: d });
        }
        function S(B) {
          const { oEditableMessage: x, idKey: d } = B,
            [C, l] = (0, D.q3)(() => [
              x.GetUpdateEventClanAccountID(),
              x.GetUpdateEventGID(),
            ]),
            { data: P } = (0, s.J$)(
              (0, o.Jz)({ item_type: (0, i.JK)(d.item_type), id: d.id }),
            ),
            L = (0, p.useMemo)(() => M.b.InitFromClanID(C), [C]),
            K = P?.type != u.uE.Vi ? P?.related_items?.parent_appid : void 0;
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(I, {
                appid: K || d.id,
                selectedEventGID: l,
                fnSetUpdateEvent: x.SetUpdateEvent,
                label: (0, r.we)("#EventDropDown_MM_FeaturedEvent"),
                tooltip: (0, r.we)("#EventDropDown_MM_FeaturedEvent_ttip"),
                strUrlLearnMore:
                  "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
              }),
              !!C &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("a", {
                      href: `${n.TS.COMMUNITY_BASE_URL}gid/${L.ConvertTo64BitString()}/partnerevents/edit/${l}`,
                      target: "_blank",
                      children: "open event for edit",
                    }),
                    "\xA0 \xA0",
                    (0, t.jsx)(_.Gq, {
                      toolTipContent:
                        "Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library",
                      children: (0, t.jsx)("a", {
                        href: `${n.TS.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                        target: "_blank",
                        children: "open event moderation tool",
                      }),
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("br", {}),
                  ],
                }),
            ],
          });
        }
        function I(B) {
          const {
              appid: x,
              selectedEventGID: d,
              fnSetUpdateEvent: C,
              label: l,
              tooltip: P,
              strUrlLearnMore: L,
              bFilterOutDrafts: K,
            } = B,
            H = (0, m.f1)(),
            { clanInfo: j, bLoadingClanInfo: R } = (0, g.vF)(x),
            N = A(j?.clanAccountID, H - 720 * 60 * 60),
            U = (0, p.useMemo)(
              () => (K ? N?.filter((G) => !G.hidden) : N),
              [N, K],
            ),
            J = (0, p.useMemo)(
              () =>
                U
                  ? U.map((G) => {
                      const V = G.hidden
                        ? G.published
                          ? "#EventDropDown_HiddenPublish"
                          : "#EventDropDown_Hidden"
                        : "#EventDropDown_Visible";
                      return {
                        label: (0, r.we)(
                          V,
                          (0, r.TW)(G.rtime32_start_time),
                          G.event_name,
                        ),
                        data: G,
                      };
                    })
                  : [],
              [U],
            ),
            X = U?.find((G) => G.gid === d);
          return !U && (R || j?.appid)
            ? (0, t.jsx)(a.t, {
                string: (0, r.we)("#Loading"),
                size: "small",
                position: "center",
              })
            : !U || U.length == 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(E.JU, {
                      children: [l, " ", (0, t.jsx)(c.o, { tooltip: P })],
                    }),
                    (0, t.jsx)("div", {
                      className: (0, h.A)(f.ErrorStylesWithIcon, "ErrorCtn"),
                      children: (0, r.oW)(
                        "#EventDropDown_NoEventFound",
                        (0, t.jsx)("a", {
                          href: `${n.TS.COMMUNITY_BASE_URL}ogg/${x}/partnerevents`,
                          target: "_blank",
                        }),
                      ),
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    !!L &&
                      (0, t.jsx)("a", {
                        href: L,
                        target: "_blank",
                        style: { float: "right" },
                        children: (0, r.we)(
                          "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                        ),
                      }),
                    (0, t.jsx)(E.m, {
                      label: l,
                      tooltip: P,
                      selectedOption: X,
                      onChange: (G) => C(j.clanAccountID, G.data.gid),
                      rgOptions: J,
                    }),
                  ],
                });
        }
      },
      16119: (O, T, e) => {
        "use strict";
        e.d(T, { h: () => a });
        var t = e(7850),
          u = e(41735),
          D = e.n(u),
          p = e(90626),
          M = e(72604),
          g = e(3367),
          v = e(84676),
          A = e(58534),
          m = e(8323),
          i = e(36707),
          s = e(18210),
          o = e(3166),
          h = e(52249),
          E = e.n(h),
          f = e(85705);
        function a(n) {
          const {
              fnSetItemID: c,
              strLabel: _,
              itemType: y,
              fnFilterID: S,
              className: I,
              tooltip: B,
              autoFocus: x,
              bIncludeRetired: d,
              bShowDLCToggle: C,
              bOnlyDLC: l,
              bRunQueryOnLoad: P,
              rgParentAppIDs: L,
            } = n,
            [K, H] = p.useState(""),
            [j, R] = p.useState(!1),
            [N, U] = p.useState(!1),
            [J] = p.useState(new m.LU()),
            [X, G] = p.useState(new Array()),
            [V, Z] = p.useState(new Array()),
            [z, ee] = p.useState(new Array()),
            q = p.createRef(),
            $ = p.createRef(),
            ne = (0, p.useCallback)(
              async (k, Ee) => {
                U(!0);
                let ce = { json: 1, term: k, bexcluderetired: !d },
                  he = `${o.TS.PARTNER_BASE_URL}appsearch/suggestapps`;
                switch (y) {
                  case g.c6.RD:
                    he = `${o.TS.PARTNER_BASE_URL}admin/store/suggestpackage`;
                    break;
                  case g.c6.xO:
                    he = `${o.TS.PARTNER_BASE_URL}bundles/suggestbundle`;
                    break;
                  default:
                    l
                      ? (ce.includedlc = !0)
                      : Ee === !1 && (ce.includedlc = !1),
                      L &&
                        ((ce.bfilterappids = !0),
                        (ce.rgParentAppIds = JSON.stringify(L)));
                    break;
                }
                const le = await D().get(he, {
                  params: ce,
                  withCredentials: !0,
                });
                le?.status == 200 && le.data?.success == M.R
                  ? S
                    ? (G(le.data.matches?.filter((ge) => S(ge.id)) || []),
                      Z(
                        le.data.package_matches?.filter((ge) =>
                          S(ge.packageid),
                        ) || [],
                      ),
                      ee(
                        le.data.bundle_matches?.filter((ge) =>
                          S(ge.bundleid),
                        ) || [],
                      ))
                    : (G(le.data.matches || []),
                      Z(le.data.package_matches || []),
                      ee(le.data.bundle_matches || []))
                  : (G([]), Z([]), ee([])),
                  U(!1);
              },
              [S, y, d, l, L],
            ),
            oe = (0, p.useCallback)(
              (k) => {
                R(k), ne(q.current?.value, k);
              },
              [ne, q],
            ),
            ae = (0, p.useCallback)(
              (k) => {
                const Ee = k?.target?.value?.toLocaleLowerCase() ?? "";
                H(Ee);
                const ce = 1e3,
                  he = $.current?.checked;
                J.Schedule(ce, () => ne(Ee, he));
              },
              [ne, J, $],
            );
          p.useEffect(() => {
            P && ne(K);
          }, []);
          let ie;
          switch (y) {
            case g.c6.RD:
              ie = (0, s.we)("#StoreAdmin_Search_Placeholder_package");
              break;
            case g.c6.xO:
              ie = (0, s.we)("#StoreAdmin_Search_Placeholder_bundle");
              break;
            default:
              ie = (0, s.we)("#StoreAdmin_Search_Placeholder");
          }
          const fe = C && !l && y == g.c6.qI;
          return (0, t.jsxs)("div", {
            className: I,
            children: [
              (0, t.jsxs)("div", {
                className: h.AppSearchInputContainer,
                children: [
                  (0, t.jsx)(A.pd, {
                    type: "text",
                    ref: q,
                    className: h.SearchInput,
                    label: _,
                    tooltip: B,
                    placeholder: ie,
                    onChange: ae,
                    value: K,
                    bAlwaysShowClearAction: K.length > 0,
                    focusOnMount: x,
                  }),
                  fe &&
                    (0, t.jsx)(A.Yh, {
                      ref: $,
                      checked: j,
                      onChange: oe,
                      className: h.AppSearchDLCCheckbox,
                      label: (0, s.we)("#StoreAdmin_Search_IncludeDLC"),
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: h.Results,
                children: [
                  N &&
                    (0, t.jsx)("div", {
                      className: h.LoadingContainer,
                      children: (0, t.jsx)(f.k, { size: "small" }),
                    }),
                  X?.length > 0 &&
                    X.map((k) =>
                      (0, t.jsx)(
                        r,
                        {
                          name: k.match,
                          id: k.id,
                          is_visible: !0,
                          type: g.c6.qI,
                          fnSetItemID: () => {
                            G([]), c(k.id, k.itemid);
                          },
                        },
                        k.id,
                      ),
                    ),
                  V?.length > 0 &&
                    V.map((k) =>
                      (0, t.jsx)(
                        r,
                        {
                          name: k.name,
                          id: k.packageid,
                          type: g.c6.RD,
                          is_visible: k.is_visible,
                          fnSetItemID: () => {
                            Z([]), c(k.packageid);
                          },
                        },
                        k.packageid,
                      ),
                    ),
                  z?.length > 0 &&
                    z.map((k) =>
                      (0, t.jsx)(
                        r,
                        {
                          name: k.name,
                          id: k.bundleid,
                          type: g.c6.xO,
                          is_visible: k.is_visible,
                          fnSetItemID: () => {
                            ee([]), c(k.bundleid);
                          },
                        },
                        k.bundleid,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function r(n) {
          const { name: c, id: _, type: y, is_visible: S, fnSetItemID: I } = n,
            [B] = (0, v.G6)(_, y, { include_assets: !0 });
          let x = "#DailyDeals_HeaderArtMissing";
          switch (y) {
            case g.c6.RD:
              x = "#DailyDeals_PackageHeaderArtMissing";
              break;
            case g.c6.xO:
              x = "#DailyDeals_BundleHeaderArtMissing";
              break;
          }
          return (0, t.jsxs)("div", {
            className: h.ResultRow,
            onClick: () => I(),
            children: [
              (0, t.jsx)("div", {
                className: (0, i.A)(h.AvatarImageCtn, "AvatarImageCtn"),
                children: (0, t.jsx)("img", {
                  src: B?.GetAssets()?.GetHeaderURL(),
                  className: h.AvatarImage,
                  alt: (0, s.we)(x),
                }),
              }),
              (0, t.jsxs)("div", {
                className: h.GameName,
                children: [
                  !S &&
                    (0, t.jsxs)("span", {
                      children: [(0, s.we)("#Sale_FeaturingHidden"), " "],
                    }),
                  c,
                  y == g.c6.RD ? ` (${_})` : "",
                ],
              }),
            ],
          });
        }
      },
      98929: (O, T, e) => {
        "use strict";
        e.d(T, { F: () => D });
        var t = e(24089),
          u = e.n(t);
        function D() {
          return t.TextEntry;
        }
      },
      7125: (O, T, e) => {
        "use strict";
        e.d(T, { k: () => a });
        var t = e(7850),
          u = e(90626),
          D = e(64238),
          p = e.n(D),
          M = e(3877),
          g = e(98929),
          v = e(60351),
          A = e(86946),
          m = e(63029),
          i = e(18938),
          s = e(24660),
          o = e(80549),
          h = e(3166),
          E = e(58017),
          f = e(64415);
        function a(n) {
          const { extracted: c, remaining: _ } = (0, v.A4)(n),
            {
              value: y,
              onTextChange: S,
              onTextClear: I,
              clearable: B,
              onChange: x,
              radius: d,
              variant: C,
              size: l,
              beforeContent: P,
              afterContent: L,
              inputRef: K,
              ref: H,
              disabled: j,
              gamepadFocusable: R = !0,
              status: N,
              ...U
            } = _,
            J = (0, h.Qn)(),
            X = (fe) => {
              j || (S(fe.target.value), x && x(fe));
            },
            G = () => {
              S(""), I && I();
            },
            V = !!y && B,
            Z = V
              ? (0, t.jsx)(m.g, { onClick: G, cursor: "pointer", hitSlop: !0 })
              : L,
            z = (0, o.f)("TextInput", C),
            ee = {
              ...c,
              variant: z,
              size: l,
              radius: d,
              status: N,
              beforeContent: P,
              afterContent: Z,
              ref: H,
              disabled: j,
            },
            q = (0, u.useRef)(null),
            $ = (fe) => {
              q.current && fe.target !== q.current && q.current.focus();
            },
            ne = R && J,
            oe = ne ? r : "input",
            ie =
              ne && V && !j
                ? {
                    onSecondaryButton: G,
                    actionDescriptionMap: {
                      [f.pR.SECONDARY]: E.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, t.jsx)(A.j, {
            cursor: "text",
            ...ee,
            onClick: $,
            children: (0, t.jsx)(oe, {
              ref: (0, i.Ue)(K, q),
              type: "text",
              "aria-disabled": j,
              readOnly: j,
              className: p()((0, M.T)(), (0, g.F)()),
              value: y || "",
              onChange: X,
              ...ie,
              ...U,
            }),
          });
        }
        function r(n) {
          return (0, t.jsx)(s.BA, { noFocusRing: !0, ...n });
        }
      },
      8145: (O, T, e) => {
        "use strict";
        e.d(T, { op: () => m, CS: () => g, vE: () => i, Al: () => M });
        const t = 0,
          u = 1,
          D = 2,
          p = 3;
        class M {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(a, r) {
            a instanceof Map
              ? (this.m_dictComponents = a)
              : (this.m_dictComponents = new Map(Object.entries(a))),
              (this.m_fnAccumulatorFactory = r);
          }
          Parse(a, r, n = !0) {
            const c = h(a || "", n);
            return this.Parse_BuildElements(c, r);
          }
          Parse_BuildElements(a, r) {
            let n = this.m_fnAccumulatorFactory(void 0);
            const c = [],
              _ = () => (c.length < 1 ? void 0 : c[c.length - 1]),
              y = this.m_dictComponents,
              S = (d) => !!(d.tag && y.get(d.tag)?.autocloses);
            let I = !1,
              B = !0;
            const x = (d, C) => {
              let l = C.text.toLowerCase();
              if (d && d.node.tag === l && y.get(d.node.tag)) {
                const P = y.get(d.node.tag),
                  L = {
                    tagname: d.node.tag,
                    args: d.node.args,
                    rawargs: d.node.rawargs,
                  },
                  K = r(P.Constructor, L, ...n.GetElements());
                (n = d.accumulator),
                  Array.isArray(K)
                    ? K.forEach((H) => n.AppendNode(H))
                    : n.AppendNode(K),
                  (I = !!P.skipFollowingNewline),
                  (B = d.bWrapTextForCopying);
              } else if (d) {
                const P = d.accumulator;
                P.AppendText("[" + d.node.text + "]", !1),
                  n.GetElements().forEach((L) => P.AppendNode(L)),
                  P.AppendText("[/" + C.text + "]", !1),
                  (n = P),
                  (B = d.bWrapTextForCopying);
              }
            };
            for (
              a.forEach((d, C) => {
                if (d.type == u) {
                  const l = I ? d.text.replace(/^[\t\r ]*\n/g, "") : d.text;
                  n.AppendText(l, B), (I = !1);
                } else if (d.type == D) {
                  const l = y.get(d.tag);
                  if (!l) n.AppendText("[" + d.text + "]", c.length == 0);
                  else {
                    const P = _();
                    if (P !== void 0) {
                      const L = y.get(P.node.tag);
                      L &&
                        L.autocloses &&
                        d.tag === P.node.tag &&
                        x(c.pop(), P.node);
                    }
                    c.push({ accumulator: n, node: d, bWrapTextForCopying: B }),
                      (n = this.m_fnAccumulatorFactory(d)),
                      (I = !!l.skipInternalNewline),
                      (B = l.allowWrapTextForCopying ?? !1);
                  }
                } else if (d.type == p) {
                  let l = d.text.toLowerCase();
                  for (; _() && _().node.tag !== l && S(_().node); ) {
                    const P = c.pop();
                    x(P, P.node);
                  }
                  if (_()?.node.tag == l) {
                    const P = c.pop();
                    x(P, d);
                  } else n.AppendText("[/" + d.text + "]", c.length == 0);
                }
              });
              c.length > 0;
            ) {
              const d = c.pop();
              x(d, d.node);
            }
            return n.GetElements();
          }
        }
        function g(f, a, r = !1) {
          let n = "[" + f;
          a?.[""] && (n += `=${r ? "" + a[""] : v("" + a[""])}`);
          for (const c in a) c !== "" && (n += ` ${A(c)}=${v("" + a[c])}`);
          return (n += "]"), n;
        }
        function v(f) {
          return `"${f.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function A(f) {
          return f.replace(/(\\| |\])/g, "\\$1");
        }
        function m(f) {
          return `[/${f}]`;
        }
        function i(f) {
          return f.replace(/(\\|\[)/g, "\\$1");
        }
        function s(f, a, r = t) {
          const { type: n, text: c = "" } = a;
          if (n == D) {
            let _ = c.indexOf("=");
            const y = c.indexOf(" ");
            y != -1 && (_ == -1 || y < _) && (_ = y);
            let S,
              I,
              B = "";
            _ > 0
              ? ((S = c.substr(0, _).toLocaleLowerCase()),
                (B = c.substr(_)),
                (I = E(B)))
              : ((I = {}), (S = c.toLocaleLowerCase())),
              f.push({ type: n, text: c, tag: S, args: I, rawargs: B });
          } else n != t && f.push({ type: n, text: c });
          return { type: r, text: "" };
        }
        function o(f) {
          let a = "";
          return (
            f.type == p ? (a = "[/") : f.type == D && (a = "["),
            { type: u, text: a + (f.text ?? "") }
          );
        }
        function h(f, a) {
          const r = [];
          let n = { type: t, text: "" },
            c = !1,
            _ = !1,
            y = !1;
          for (let S = 0; S < f.length; S++) {
            const I = f[S];
            switch (n.type) {
              case t:
                I == "["
                  ? ((n.type = D), (_ = !0))
                  : ((n.type = u), I == "\\" && a ? (c = !c) : (n.text += I));
                break;
              case D:
              case p:
                if (I == "/" && _) (n.type = p), (n.text = ""), (_ = !1);
                else if (I == "[" && !c) (n = s(r, o(n), D)), (_ = !0);
                else if (I == "]" && !c) {
                  const B =
                      n.type == D && n.text?.toLocaleLowerCase() == "noparse",
                    x = n.type == p && n.text?.toLocaleLowerCase() == "noparse";
                  _ || (y && !x)
                    ? ((n = o(n)), (n.text += I))
                    : B
                      ? (y = !0)
                      : x && (y = !1),
                    (n = s(r, n)),
                    (_ = !1);
                } else
                  I == "\\" && a
                    ? ((n.text += I), (c = !c), (_ = !1))
                    : ((n.text += I), (c = !1), (_ = !1));
                break;
              case u:
                I == "[" && !c
                  ? ((n = s(r, n, D)), (_ = !0))
                  : I == "\\" && a
                    ? (c && (n.text += I), (c = !c))
                    : ((n.text += I), (c = !1));
                break;
            }
          }
          return (
            n.type != t &&
              (n.type == D || n.type == p
                ? r.push(o(n))
                : r.push({ type: n.type, text: n.text ?? "" })),
            r
          );
        }
        function E(f) {
          if (!f || f.length < 1) return {};
          const a = {};
          let r = "",
            n = "",
            c;
          ((I) => {
            (I[(I.PRE_NAME = 0)] = "PRE_NAME"),
              (I[(I.IN_NAME = 1)] = "IN_NAME"),
              (I[(I.POST_NAME = 2)] = "POST_NAME"),
              (I[(I.IN_VALUE = 3)] = "IN_VALUE"),
              (I[(I.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(c || (c = {}));
          let _ = 0,
            y = 0;
          f[0] == "=" && (_ = 2);
          let S = !1;
          for (y++; y < f.length; y++) {
            const I = f[y];
            let B = !0,
              x = !1;
            switch (_) {
              case 0:
                if (I == "=") return {};
                if (I == " ") continue;
                _ = 1;
                break;
              case 1:
                (I == "=" || I == " ") &&
                  !S &&
                  (I == " " ? ((_ = 0), (x = !0)) : (_ = 2), (B = !1));
                break;
              case 2:
                I == " "
                  ? ((_ = 0), (B = !1), (x = !0))
                  : I == '"'
                    ? ((_ = 4), (B = !1))
                    : (_ = 3);
                break;
              case 3:
              case 4:
                ((I == " " && _ != 4 && !S) || (I == '"' && _ == 4 && !S)) &&
                  ((_ = 0), (B = !1), (x = !0));
                break;
            }
            if (B)
              if (I == "\\" && !S) S = !0;
              else if (((S = !1), _ == 1)) r += I;
              else if (_ == 3 || _ == 4) n += I;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + _,
                );
            x && ((a[r] = n), (r = ""), (n = ""));
          }
          return _ != 0 && (a[r] = n), a;
        }
      },
      29950: (O, T, e) => {
        "use strict";
        e.d(T, { J: () => t });
        function t(u) {
          if (!u) return u;
          const D = u.trim(),
            p = D.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return p.startsWith("javascript:") ||
            p.startsWith("data:") ||
            p.startsWith("vbscript:")
            ? ""
            : D;
        }
      },
      27862: (O, T, e) => {
        "use strict";
        e.d(T, { lT: () => v });
        var t = e(72604),
          u = e(72609),
          D = e(92441),
          p = e(20194);
        const M = "partnerevents/ajaxgetdraftandrecentsnippets";
        function g(i, s) {
          return (0, D.j)({
            queryKey: ["eventdraftrecent", i, s],
            queryFn: () => A(i, s),
            select: m,
            enabled: !!i,
          });
        }
        function v(i, s) {
          return (0, p.I)(g(i, s));
        }
        async function A(i, s) {
          const o = new URLSearchParams({ clan_accountid: "" + i });
          s && o.set("rtime_oldest", "" + s);
          const h = `${u.TS.PARTNER_BASE_URL}${M}?${o}`,
            E = await fetch(h, { credentials: "include" });
          if (!E.ok) throw new Error(`${M} answered HTTP ${E.status}`);
          const f = await E.json();
          if (f?.success != t.R)
            throw new Error(`${M} failed with result ${f?.success}`);
          return f.snippets ?? [];
        }
        function m(i) {
          return [...i].sort((s, o) =>
            s.hidden != o.hidden
              ? s.hidden
                ? -1
                : 1
              : s.hidden && s.published != o.published
                ? s.published
                  ? -1
                  : 1
                : (o.rtime32_start_time ?? 0) - (s.rtime32_start_time ?? 0),
          );
        }
      },
      84607: (O, T, e) => {
        "use strict";
        e.d(T, { a: () => m });
        var t = e(7850),
          u = e(89667),
          D = e(72838),
          p = e(42240),
          M = e(39239),
          g = e(36707),
          v = e(76532),
          A = e.n(v);
        function m(i) {
          const {
              id: s,
              imageType: o,
              bPreferAssetWithoutOverride: h,
              strAdditionalClassName: E,
              bNoShadow: f,
            } = i,
            { storeItemAsset: a, storeItemDefaultInfo: r } = (0, u.q)(s, o, h);
          if (o === "library" || o == "vertical")
            return (0, t.jsx)(D.G, {
              id: s,
              bPreferAssetWithoutOverride: h,
              bNoShadow: f,
            });
          let n = "";
          if (
            (o === "main"
              ? (n = A().MainCapsuleImageContainer)
              : (n = A().HeaderCapsuleImageContainer),
            a === void 0 || !r)
          )
            return (0, t.jsx)("div", {
              className: (0, g.A)(n, "CapsuleImageCtn", E),
            });
          if (a == null) return null;
          let c = (0, p.N)(a, o === "header");
          return (0, t.jsx)("div", {
            className: (0, g.A)(n, "CapsuleImageCtn", E),
            children: (0, t.jsx)(M.o, {
              lazyLoad: !0,
              srcs: c,
              className: (0, g.A)(A().CapsuleImage),
              alt: r.name,
            }),
          });
        }
      },
      42240: (O, T, e) => {
        "use strict";
        e.d(T, { M: () => D, N: () => u });
        var t = e(21721);
        function u(M, g) {
          let v = [];
          return M && p(v, M, g), v.filter((A) => !!A);
        }
        function D(M, g) {
          let v = (0, t.b0)(M, "hero_capsule"),
            A = (0, t.b0)(M, "library_capsule");
          return { strStoreVerticalURL: v, strLibraryVerticalURL: A };
        }
        function p(M, g, v) {
          const A = (0, t.b0)(g, "header_2x") ?? (0, t.b0)(g, "header"),
            m = (0, t.b0)(g, "main_capsule_2x") ?? (0, t.b0)(g, "main_capsule");
          v ? M.push(A, m) : M.push(m, A);
        }
      },
      86298: (O, T, e) => {
        "use strict";
        e.d(T, { S: () => A });
        var t = e(39905),
          u = e(47875),
          D = e(83482),
          p = e(71742),
          M = e(82734),
          g = e(53113),
          v = e(98735);
        function A(m, i, s, o, h, E) {
          if (!s) return;
          if (!(0, v.nz)(m.item_type)) {
            (0, p.wT)(
              !1,
              "StoreItemWidgetSalePageAction: unexpected type: " + m.item_type,
            );
            return;
          }
          const a = (0, D.wJ)(`${(0, u._)(m, o)}${h ? `?${h}` : ""}`, i);
          return {
            onClick: (n) => {
              let c = (0, M.uX)(n) || window;
              E
                ? E(n)
                : a.startsWith("steam://") || (c.location.href = (0, g.NT)(a));
            },
            onOKActionDescription: t.Z.Localize("#Sale_Gamepad_Action_Select"),
          };
        }
      },
      72838: (O, T, e) => {
        "use strict";
        e.d(T, { G: () => h });
        var t = e(7850),
          u = e(72609),
          D = e(3367),
          p = e(89667),
          M = e(90626),
          g = e(76532),
          v = e.n(g),
          A = e(39239),
          m = e(36707),
          i = e(42240),
          s = e(83164),
          o = e.n(s);
        function h(E) {
          const {
              id: f,
              bPreferLibrary: a,
              bPreferAssetWithoutOverride: r,
              bNoShadow: n,
            } = E,
            c = n ? v().NoShadow : "",
            { storeItemDefaultInfo: _, storeItemAsset: y } = (0, p.q)(
              f,
              "vertical",
              r,
            ),
            [S, I] = M.useState(0);
          if (!_ || !y)
            return (0, t.jsx)("div", {
              className: v().HeroCapsuleImageContainer,
            });
          const { strStoreVerticalURL: B, strLibraryVerticalURL: x } = (0, i.M)(
            y,
            _,
          );
          if (B && (!a || !x))
            return (0, t.jsxs)("div", {
              className: (0, m.A)(
                v().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
              children: [
                (0, t.jsx)("img", {
                  src: B,
                  className: v().CapsuleImage,
                  alt: _.name,
                }),
                _.type == D.uE._i &&
                  (0, t.jsx)("img", {
                    className: o().CornerSash,
                    src: `${u.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                    alt: "DLC",
                  }),
              ],
            });
          if (x)
            return (0, t.jsxs)("div", {
              className: (0, m.A)(
                v().LibraryFallbackAssetImageContainer,
                v().VerticalCapsule,
                a ? v().ForceLibrarySizing : "",
                c,
              ),
              children: [
                (0, t.jsx)("div", {
                  className: v().FallbackBackground,
                  style: { backgroundImage: `url(${x})` },
                }),
                (0, t.jsx)("img", {
                  src: x,
                  className: v().CapsuleImage,
                  alt: _.name,
                }),
              ],
            });
          const d = (0, i.N)(y, !0),
            C = d.length - 1,
            l = (P) => {
              const L = d.indexOf(P);
              L >= C && L < d.length - 1 && I(L + 1);
            };
          if (S < d.length) {
            const P = d[S];
            return (0, t.jsxs)("div", {
              className: (0, m.A)(v().LibraryFallbackAssetImageContainer, c),
              children: [
                (0, t.jsx)("div", {
                  className: v().FallbackBackground,
                  style: { backgroundImage: `url(${P})` },
                }),
                (0, t.jsx)(A.o, {
                  lazyLoad: !0,
                  srcs: d,
                  className: v().CapsuleImage,
                  alt: _.name,
                  onImageError: l,
                }),
              ],
            });
          }
          return (0, t.jsx)("div", {
            className: v().HeroCapsuleImageContainer,
          });
        }
      },
      95414: (O, T, e) => {
        "use strict";
        e.d(T, { j: () => o, u: () => h });
        var t = e(7850),
          u = e(90626),
          D = e(24660),
          p = e(83482),
          M = e(72865),
          g = e(77200),
          v = e(53113),
          A = e(68094),
          m = e(72609),
          i = e(3166);
        function s(E) {
          if (E) {
            if ("appid" in E) return "app";
            if ("bundleid" in E) return "bundle";
            if ("packageid" in E) return "sub";
          }
        }
        function o(E) {
          const {
              id: f,
              hoverClassName: a,
              fnGetIDOverride: r,
              fnHoverState: n,
              disableScreenshots: c,
              children: _,
            } = E,
            y = u.useRef(null),
            S = u.useCallback(
              (B) => {
                const x = s(f);
                x &&
                  (n && n(!0),
                  window.GameHover &&
                    (y.current &&
                      c &&
                      (y.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(r ? r() : y.current, B, "global_hover", {
                      type: x,
                      id: (0, A.G$)(f).id,
                      v6: 1,
                    })));
              },
              [n, r, c, f],
            ),
            I = u.useCallback(
              (B) => {
                s(f) &&
                  (n && B.relatedTarget && n(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      r ? r() : y.current,
                      B,
                      "global_hover",
                    ));
              },
              [f, n, r],
            );
          return (0, t.jsx)("div", {
            ref: y,
            className: a,
            onMouseEnter: S,
            onMouseLeave: I,
            onFocus: S,
            onBlur: I,
            children: _,
          });
        }
        function h(E) {
          const {
              id: f,
              strExtraParams: a,
              fnOnClickOverride: r,
              strOverrideURL: n,
            } = E,
            c = (0, M.n9)(),
            _ = (0, g.w)(),
            y = (0, v.NT)(
              n ||
                (f && "creatorid" in f
                  ? (0, p.It)(
                      `${m.TS.STORE_BASE_URL}curator/${((0, A.G$))(f).id}${a ? `?${a}` : ""}`,
                      c,
                      _,
                    )
                  : (0, p.It)(
                      `${m.TS.STORE_BASE_URL}${s(f)}/${((0, A.G$))(f).id}${a ? `?${a}` : ""}`,
                      c,
                      _,
                    )),
            );
          return (0, t.jsx)(o, {
            ...E,
            children: (0, t.jsx)(D.Ii, {
              className: E.className,
              href: r ? void 0 : y,
              target: m.TS.IN_CLIENT || r ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: r,
              children: E.children,
            }),
          });
        }
      },
      88743: (O, T, e) => {
        "use strict";
        e.d(T, { K7: () => g, dE: () => M, rt: () => D, zl: () => p });
        var t = e(90626),
          u = e(3367);
        function D(s) {
          return (0, t.useMemo)(() => v(s), [s?.id, s?.type]);
        }
        function p(s, o) {
          return (0, t.useMemo)(() => i(s, o), [s, o]);
        }
        function M(s, o) {
          return (0, t.useMemo)(() => m(s, o), [s, o]);
        }
        function g(s, o) {
          let h = "app";
          return (
            o == u.c6.xO ? (h = "bundle") : o == u.c6.RD && (h = "sub"),
            (0, t.useMemo)(() => m(s, h), [s, h])
          );
        }
        function v(s) {
          if (!(!s || !s.id)) {
            if (!s.type) return { appid: s.id };
            switch (s.type) {
              case "sub":
                return { packageid: s.id };
              case "bundle":
                return { bundleid: s.id };
              default:
                return { appid: s.id };
            }
          }
        }
        function A(s) {
          if ("appid" in s) return { id: s.appid, type: "game" };
          if ("packageid" in s) return { id: s.packageid, type: "sub" };
          if ("bundleid" in s) return { id: s.bundleid, type: "bundle" };
        }
        function m(s, o) {
          switch (o) {
            case "sub":
              return { packageid: s };
            case "bundle":
              return { bundleid: s };
            default:
              return { appid: s };
          }
        }
        function i(s, o) {
          switch (o) {
            case "sub":
              return { packageid: s };
            case "bundle":
              return { bundleid: s };
            default:
              return { appid: s };
          }
        }
      },
      23627: (O, T, e) => {
        "use strict";
        e.d(T, { K: () => M });
        var t = e(7850),
          u = e(18210),
          D = e(66901),
          p = e.n(D);
        function M() {
          return (0, t.jsx)("div", {
            className: D.bordered_live_stream_icon,
            children: (0, u.we)("#home_page_live_broadcast"),
          });
        }
      },
      46727: (O, T, e) => {
        "use strict";
        e.d(T, { V: () => x });
        var t = e(7850),
          u = e(72609),
          D = e(39905),
          p = e(20194),
          M = e(75233),
          g = e(67705),
          v = e(34032);
        async function A() {
          let l = (0, g.Fd)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, v.h7)(l)) {
            const P = new Set();
            return (
              l.filtered.forEach((L) => {
                L.appid && P.add(L.appid);
              }),
              Array.from(P)
            );
          }
          return [];
        }
        var m = e(14616),
          i = e(40358),
          s = e(90626);
        function o() {
          return (0, p.I)(f());
        }
        function h(l) {
          const { data: P } = o(),
            L = useStoreItemKeyFromAppID(l),
            { data: K } = useStoreItemDefaultInfo(L);
          return !!(
            P &&
            (P.has(l) ||
              (K?.related_items?.parent_appid &&
                P.has(K.related_items.parent_appid)))
          );
        }
        function E(l) {
          const { data: P } = o(),
            [L, K] = (0, s.useState)(!1),
            H = (0, M.jE)(),
            j = (0, m.eG)();
          return (
            (0, s.useEffect)(() => {
              if (!l || l.length == 0 || !P) return K(!1);
              (async () => {
                const N = await Promise.all(
                  l
                    .filter((U) => !!U)
                    .map((U) => H.fetchQuery((0, i.us)(j, { appid: U }))),
                );
                K(
                  N.some(
                    (U) =>
                      (U && U.appid && P.has(U.appid)) ||
                      (U?.related_items?.parent_appid &&
                        P.has(U.related_items.parent_appid)),
                  ),
                );
              })();
            }, [l, j, H, P]),
            L
          );
        }
        function f() {
          return {
            queryKey: a(),
            queryFn: async () => {
              const l = await A();
              return new Set(l);
            },
          };
        }
        function a() {
          return ["BroadcastApps"];
        }
        var r = e(24179),
          n = e(54528);
        const c =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
        var _ = e(76532),
          y = e.n(_),
          S = e(36118),
          I = e(36707),
          B = e(23627);
        function x(l) {
          const { appids: P, hide_status_banners: L, show_early_access: K } = l,
            { data: H } = (0, r.$Y)(),
            { data: j } = (0, n.F0)(),
            R = P.length > 0 && P.every((V) => H && H.has(V)),
            N = P.length > 0 && P.every((V) => j && j.has(V)),
            U = E(P),
            J = R && !L,
            X = N && !L,
            G = !L && K;
          return (0, t.jsxs)("div", {
            className: (0, I.A)(y().CapsuleDecorators, "CapsuleDecorators"),
            children: [
              J &&
                (0, t.jsxs)("span", {
                  className: (0, I.A)(y().Banner, y().Blue),
                  children: [
                    (0, t.jsx)("img", {
                      src: (0, u.YJ)(c),
                      className: y().LinesImg,
                      alt: D.Z.Localize("#Sale_InLibrary"),
                    }),
                    D.Z.Localize("#Sale_InLibrary"),
                  ],
                }),
              X &&
                (0, t.jsxs)("span", {
                  className: y().Banner,
                  children: [
                    (0, t.jsx)(S.qnF, { className: y().LinesImg }),
                    D.Z.Localize("#Sale_OnWishlist"),
                  ],
                }),
              G && !J && !X && (0, t.jsx)(d, { appids: P }),
              U && (0, t.jsx)(B.K, {}),
            ],
          });
        }
        function d(l) {
          const { appids: P } = l;
          return C(P)
            ? (0, t.jsx)("span", {
                className: (0, I.A)(y().Banner, y().EarlyAccessGradient),
                children: D.Z.Localize("#Sale_EarlyAccess"),
              })
            : null;
        }
        function C(l) {
          const [P, L] = (0, s.useState)(!1),
            K = (0, M.jE)(),
            H = (0, m.eG)();
          return (
            (0, s.useEffect)(() => {
              if (!l || l.length == 0) return L(!1);
              (async () => {
                const R = await Promise.all(
                  l.map((N) => K.fetchQuery((0, i.us)(H, { appid: N }))),
                );
                L(R.some((N) => N && N.is_early_access));
              })();
            }, [l, H, K]),
            P
          );
        }
      },
      64774: (O, T, e) => {
        "use strict";
        e.d(T, { _: () => y, r: () => _ });
        var t = e(7850),
          u = e(3367),
          D = e(29522),
          p = e(40358),
          M = e(72865),
          g = e(24179),
          v = e(54528),
          A = e(96362),
          m = e(90626),
          i = e(83482),
          s = e(76532),
          o = e.n(s),
          h = e(85705),
          E = e(36118),
          f = e(71421),
          a = e(36707),
          r = e(18210),
          n = e(3166),
          c = e(89926);
        function _(B) {
          const { appid: x, className: d, bTextMode: C } = B,
            l = (0, D.$5)(x),
            { data: P } = (0, p.J$)(l),
            { data: L } = (0, p.by)(l);
          return (0, t.jsx)(y, {
            appid: x,
            bIsFree: !!P?.is_free,
            bIsComingSoon: !!L?.is_coming_soon,
            bTextMode: C,
            className: d,
          });
        }
        function y(B) {
          const [x, d] = m.useState(!1),
            C = (0, M.n9)(),
            {
              appid: l,
              bIsFree: P,
              bIsComingSoon: L,
              className: K,
              bTextMode: H,
            } = B,
            j = (0, D.$5)(l),
            { bIsOwned: R } = (0, g.ZJ)(j),
            N = (0, v.bB)(l),
            { mutateAsync: U } = (0, A.s)(l, !N, (0, i.L3)(C)),
            { elDialogElement: J, fnShowLogonDialog: X } = (0, c.l)(),
            G = async () => {
              if (!n.iA.logged_in) {
                X();
                return;
              }
              x || (d(!0), await U(), d(!1));
            };
          if (R || (!L && P))
            return P ? (0, t.jsx)(S, { possibleDemoAppID: l }) : null;
          let V = null;
          return (
            x && !H
              ? (V = (0, t.jsx)(h.k, { size: 18 }))
              : N
                ? N &&
                  (V = H ? (0, r.we)("#OnWishlist") : (0, t.jsx)(E.qnF, {}))
                : (V = H
                    ? (0, r.we)("#wishlist_add_to_wishlist")
                    : (0, t.jsx)(E.T4m, {})),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(f.he, {
                  toolTipContent: (0, r.we)("#AddToWishlist_ttip"),
                  children: (0, t.jsx)("div", {
                    className: (0, a.A)(o().WishList, K),
                    onClick: G,
                    children: V,
                  }),
                }),
                J,
              ],
            })
          );
        }
        function S(B) {
          const { possibleDemoAppID: x, className: d } = B,
            C = (0, D.$5)(x),
            { data: l } = (0, p.J$)(C);
          return l &&
            (l.type == u.uE.ue || l.type == u.uE.Vi) &&
            l.related_items?.parent_appid
            ? (0, t.jsx)(I, {
                parentAppID: l.related_items?.parent_appid,
                className: d,
              })
            : null;
        }
        function I(B) {
          const { parentAppID: x, className: d } = B,
            C = (0, D.$5)(x),
            { data: l } = (0, p.J$)(C),
            { data: P } = (0, p.by)(C);
          return !l || !P
            ? null
            : (0, t.jsx)(y, {
                appid: x,
                bIsComingSoon: !!P.is_coming_soon,
                bIsFree: !!l.is_free,
                className: d,
              });
        }
      },
      89667: (O, T, e) => {
        "use strict";
        e.d(T, { q: () => p });
        var t = e(71742),
          u = e(3367),
          D = e(40358);
        function p(g, v, A = !1) {
          const { data: m } = (0, D.J$)(g),
            { data: i } = (0, D.lv)(g, A);
          let s;
          m &&
            m.included_appids?.length == 1 &&
            !M(i, v) &&
            m.item_type &&
            [u.c6.RD, u.c6.xO].includes(m.item_type) &&
            (s = { appid: m.included_appids[0] });
          const { data: o } = (0, D.J$)(s),
            { data: h } = (0, D.lv)(s, A),
            E = o?.visible ? o : m;
          return {
            storeItemAsset: o?.visible ? h : i,
            storeItemDefaultInfo: E,
          };
        }
        function M(g, v) {
          if (!g) return !1;
          switch (v) {
            case "header":
              return !!g.header;
            case "main":
              return !!g.main_capsule;
            case "vertical":
            case "library":
              return !!g.hero_capsule || !!g.library_capsule;
            default:
              return (0, t.z_)(v, `Unhandled imageType: ${v}`), !1;
          }
        }
      },
      61024: (O, T, e) => {
        "use strict";
        e.d(T, { C: () => i, M: () => s });
        var t = e(7850),
          u = e(19298),
          D = e(64238),
          p = e.n(D),
          M = e(88376),
          g = e.n(M),
          v = e(76962),
          A = e(66243),
          m = e(36118);
        function i(o) {
          const {
            strTitle: h,
            strDescription: E,
            className: f,
            children: a,
            navID: r,
            ...n
          } = o;
          return (0, t.jsxs)(v.y, {
            className: p()(f, g().ModalConfirmDialog),
            onClose: n.onClose,
            navID: r,
            children: [
              h &&
                (0, t.jsxs)(u.Z, {
                  className: g().Header,
                  children: [
                    (0, t.jsx)("h2", { children: h }),
                    (0, t.jsx)("button", {
                      onClick: n.onClose,
                      children: (0, t.jsx)(m.tmm, {}),
                    }),
                  ],
                }),
              E &&
                (0, t.jsx)(u.Z, {
                  className: g().Description,
                  children: (0, t.jsx)("div", { children: E }),
                }),
              a,
              (0, t.jsx)(s, { ...n }),
            ],
          });
        }
        function s(o) {
          const { strOKLabel: h, strCancelLabel: E, onOK: f, onClose: a } = o;
          return (0, t.jsxs)(u.Z, {
            className: g().Buttons,
            children: [
              !!h && (0, t.jsx)(A.n9, { onClick: f ?? a, children: h }),
              !!E && (0, t.jsx)(A.Oh, { onClick: a, children: E }),
            ],
          });
        }
      },
      76962: (O, T, e) => {
        "use strict";
        e.d(T, { y: () => s });
        var t = e(7850),
          u = e(24660),
          D = e(38566),
          p = e(54130),
          M = e(64238),
          g = e.n(M),
          v = e(90626),
          A = e(3166),
          m = e(88208),
          i = e.n(m);
        const s = Object.assign(o, { Root: h, Content: f });
        function o(a) {
          const { children: r, className: n, ...c } = a;
          return (0, t.jsx)(s.Root, {
            ...c,
            children: (0, t.jsx)(s.Content, { className: n, children: r }),
          });
        }
        function h(a) {
          const {
              onClose: r,
              className: n,
              navID: c,
              children: _,
              allowScrollBehind: y,
              ...S
            } = a,
            [I, B] = v.useState(!1),
            x = v.useCallback((C) => {
              C &&
                (C.showModal(),
                C.ownerDocument.defaultView &&
                  B(
                    C.ownerDocument.body.scrollHeight >
                      C.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            d = v.useCallback(
              (C) => {
                C.target == C.currentTarget && r("backdropclick");
              },
              [r],
            );
          return (0, t.jsx)(E, {
            navID: c ?? "ModalDialog",
            onClose: r,
            children: (0, t.jsx)("dialog", {
              ref: x,
              className: g()(m.ModalDialog, !y && I && m.PreventScroll, n),
              onClose: () => r("onclose"),
              onClick: d,
              ...S,
              children: (0, t.jsx)(p.q, { children: _ }),
            }),
          });
        }
        function E(a) {
          const { navID: r, onClose: n, children: c } = a,
            _ = v.useCallback(() => n("cancelbutton"), [n]),
            y = v.useRef(void 0);
          return (
            (0, u.O7)(y, !0, !0),
            (0, A.Qn)()
              ? (0, t.jsx)(D.D6, {
                  navID: r ?? "ModalDialog",
                  onCancelButton: _,
                  modal: !0,
                  navTreeRef: y,
                  children: c,
                })
              : (0, t.jsx)(t.Fragment, { children: c })
          );
        }
        function f(a) {
          const { className: r, children: n } = a;
          return (0, t.jsx)("div", {
            className: g()(m.ModalDialogContent, r),
            onClick: (c) => c.stopPropagation(),
            children: n,
          });
        }
      },
      60399: (O, T, e) => {
        "use strict";
        e.d(T, { XC: () => o });
        var t = e(7850),
          u = e(90626),
          D = e(36118),
          p = e(36707),
          M = e(71568);
        function g(f, a, r, n) {
          u.useEffect(() => {
            const c = (_) => {
              _.key === f &&
                (a(_), r && _.preventDefault(), n && _.stopPropagation());
            };
            return (
              document.addEventListener("keydown", c),
              () => document.removeEventListener("keydown", c)
            );
          }, [f, a, r, n]);
        }
        function v(f, a) {
          const r = useBrowserContext();
          React.useEffect(() => {
            const n = (c) => {
              c.key === f && a(c);
            };
            return (
              r.ownerWindow.addEventListener("keydown", n),
              () => r.ownerWindow.removeEventListener("keydown", n)
            );
          }, [f, a, r.ownerWindow]);
        }
        var A = e(2801),
          m = e(75358),
          i = e.n(m),
          s = e(18210);
        function o() {
          const [f, a] = u.useState(void 0),
            r = u.useCallback(() => a(void 0), []),
            n = (0, t.jsx)(A.EN, {
              active: f !== void 0,
              children: (0, t.jsx)(h, { closeModal: r, rgImageURL: f }),
            });
          return [a, n];
        }
        function h(f) {
          const { closeModal: a, rgImageURL: r } = f,
            [n, c] = u.useState(0),
            _ = r?.length ?? 0,
            y = u.useCallback(() => {
              n == 0 ? c(_ - 1) : c(n - 1);
            }, [n, _]),
            S = u.useCallback(() => {
              r && n + 1 >= _ ? c(0) : c(n + 1);
            }, [n, r, _]);
          return (0, t.jsxs)(A.eV, {
            title: (0, s.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: a,
            bHideCloseIcon: !0,
            modalClassName: i().PopupScreenshotModal,
            children: [
              (0, t.jsx)(E, {
                index: n,
                numElements: r?.length || 0,
                fnForward: S,
                fnBackwards: y,
                fnClose: a,
                bCircular: !0,
              }),
              (0, t.jsx)("div", {
                className: i().PopupScreenshotContainer,
                children: (0, t.jsx)("img", {
                  className: i().PopupScreenshot,
                  src: r?.[n],
                  alt: "",
                }),
              }),
            ],
          });
        }
        function E(f) {
          const {
            index: a,
            numElements: r,
            fnForward: n,
            fnBackwards: c,
            fnClose: _,
            bCircular: y,
          } = f;
          g("ArrowLeft", () => c?.(), !0, !0),
            g("Left", () => c?.(), !0, !0),
            g("ArrowRight", () => n?.(), !0, !0),
            g("Right", () => n?.(), !0, !0),
            g("Escape", () => _ && _(), !0, !0),
            g("Esc", () => _ && _(), !0, !0);
          let S = r > 1;
          return (0, t.jsxs)("div", {
            className: i().ButtonCtn,
            children: [
              S &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className: (0, p.A)(
                        i().ButtonIcon,
                        a === 0 && !y ? i().Disabled : null,
                      ),
                      onClick: c,
                      "aria-label": (0, s.we)("#Carousel_Prev"),
                      children: (0, t.jsx)(D.V5W, { angle: 270 }),
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      className: (0, p.A)(
                        i().ButtonIcon,
                        a === r - 1 && !y ? i().Disabled : null,
                      ),
                      onClick: n,
                      "aria-label": (0, s.we)("#Carousel_Next"),
                      children: (0, t.jsx)(D.V5W, { angle: 90 }),
                    }),
                  ],
                }),
              (0, t.jsx)("button", {
                type: "button",
                className: i().ButtonIcon,
                onClick: _,
                "aria-label": (0, s.we)("#Button_Close"),
                children: (0, t.jsx)(D.X, {}),
              }),
            ],
          });
        }
      },
      34032: (O, T, e) => {
        "use strict";
        e.d(T, { PH: () => s, TT: () => M, h7: () => o, mY: () => i });
        var t = e(14947),
          u = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          p = (h, E, f, a) => {
            for (
              var r = a > 1 ? void 0 : a ? D(E, f) : E, n = h.length - 1, c;
              n >= 0;
              n--
            )
              (c = h[n]) && (r = (a ? c(E, f, r) : c(r)) || r);
            return a && r && u(E, f, r), r;
          };
        class M {
          constructor() {
            (0, t.Gn)(this);
          }
          accountid;
          steamid;
          appid;
          hub_popular;
          popular;
          relay_broadcast_id;
          rowversion;
          thumbnail_http_address;
          nAppIDVOD;
          title = void 0;
          viewer_count = void 0;
          whitelist_rank;
          gamedata_subtitle = void 0;
          store_title;
          left_panel;
          right_panel;
          snr;
          broadcast_chat_visibility;
          default_selection_priority = 0;
          current_selection_priority = 0;
        }
        p([t.sH], M.prototype, "title", 2),
          p([t.sH], M.prototype, "viewer_count", 2),
          p([t.sH], M.prototype, "gamedata_subtitle", 2),
          p([t.sH], M.prototype, "current_selection_priority", 2);
        const g = "primary",
          v = "featured",
          A = "default_featured",
          m = "general";
        var i = ((h) => (
          (h[(h.k_ePrimary = 3)] = "k_ePrimary"),
          (h[(h.k_eFeatured = 2)] = "k_eFeatured"),
          (h[(h.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (h[(h.k_eGeneral = 0)] = "k_eGeneral"),
          h
        ))(i || {});
        function s(h) {
          switch (h) {
            case g:
              return 3;
            case v:
              return 2;
            case A:
              return 1;
            case m:
            default:
              return 0;
          }
        }
        function o(h) {
          const E = h;
          return E &&
            typeof E.success == "number" &&
            E.filtered &&
            Array.isArray(E.filtered) &&
            E.broadcast_chat_visibility
            ? E.filtered.length == 0
              ? !0
              : typeof E.filtered[0].accountid == "string"
            : !1;
        }
      },
      78699: (O, T, e) => {
        "use strict";
        e.d(T, {
          Uh: () => M,
          VX: () => u,
          mn: () => v,
          nU: () => p,
          pV: () => D,
        });
        var t = e(99412);
        function u(i, s) {
          const o = (0, t.LgB)(s);
          return i ? i[o] : "";
        }
        function D(i, s, o) {
          const h = (0, t.LgB)(s);
          return i[h] != o ? ((i[h] = o), !0) : !1;
        }
        function p(i, s) {
          const o = (0, t.LgB)(s);
          return !!i?.[o];
        }
        function M(i) {
          if (!i) return 0;
          let s = 0;
          for (let o = t.Bhc; o < t.bP9; ++o) {
            const h = (0, t.LgB)(o);
            i[h] && (s += 1);
          }
          return s;
        }
        function g(i) {
          const s = new Map();
          for (let o = k_ELanguage_English; o < k_ELanguage_MAX; ++o) {
            const h = ELanguagePchLanguage(o);
            i[h] && s.set(h, i[h]);
          }
          return s;
        }
        function v(i) {
          const s = new Array();
          for (let o = t.Bhc; o < t.bP9; ++o) {
            const h = (0, t.LgB)(o);
            i[h] && s.push([h, i[h]]);
          }
          return s;
        }
        function A(i) {
          const s = InitLocalizableString([]);
          if (!i) return s;
          for (let o = k_ELanguage_English; o < k_ELanguage_MAX; ++o)
            p(i, o) && (s[o] = u(i, o));
          return s;
        }
        function m(i) {
          const s = {};
          if (!i) return s;
          for (
            let o = k_ELanguage_English;
            o < k_ELanguage_MAX && o < i.length;
            ++o
          )
            i[o] && D(s, o, i[o]);
          return s;
        }
      },
      813: (O, T, e) => {
        "use strict";
        e.d(T, { TB: () => _, ac: () => n, vF: () => I });
        var t = e(40497),
          u = e(75233),
          D = e(14947),
          p = e(90626),
          M = e(76559),
          g = e(71742),
          v = e(3166),
          A = e(16512),
          m = e(33512),
          i = e(55483),
          s = e(77291);
        const o = new WeakSet();
        function h(C = t.L) {
          if (typeof window > "u" || typeof document > "u" || o.has(C)) return;
          const l = (0, v.Fd)("groupvanityinfo", "application_config");
          (l === void 0 && document.readyState != "complete") ||
            (o.add(C), E(l) && (0, i.aA)(C, l));
        }
        function E(C) {
          const l = C;
          return l &&
            Array.isArray(l) &&
            l.length > 0 &&
            typeof l[0] == "object"
            ? typeof l[0].clanAccountID == "number" &&
                (typeof l[0].appid == "number" ||
                  typeof l[0].vanity_url == "string")
            : !1;
        }
        function f(C) {
          return typeof C == "string" ? parseInt(C) : C;
        }
        function a(C) {
          return typeof C == "string" ? Number.parseInt(C) : C;
        }
        class r {
          m_queryClient = t.L;
          m_boxCacheVersion = D.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            h(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((l) => {
                  (l?.type != "added" &&
                    l?.type != "updated" &&
                    l?.type != "removed") ||
                    ((0, i.yT)(l.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, D.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(l) {
            this.LazyInit(), E(l) && (0, i.aA)(this.m_queryClient, l);
          }
          BHasClanInfoLoaded(l) {
            return (
              (0, g.wT)(
                l.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, g.wT)(
                l.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(l.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(l) {
            return !!(0, i.Gt)(a(l), this.ReadCache());
          }
          RegisterClanData(l) {
            this.LazyInit(), (0, i.aA)(this.m_queryClient, l);
          }
          async LoadOGGClanInfoForAppID(l) {
            return (
              this.LazyInit(),
              (l = f(l)),
              (0, g.wT)(
                l != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              l == 0 ? null : (0, i.AB)(l, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(l) {
            return this.LazyInit(), (0, i.Rc)(l, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(l) {
            return this.LazyInit(), (0, i.Rc)(l, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(l) {
            return this.LoadClanInfoForClanAccountID(l.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(l) {
            return this.LazyInit(), (0, i.MR)(a(l), this.m_queryClient);
          }
          GetOGGClanInfo(l) {
            const P = this.ReadCache();
            return typeof l == "string" ? (0, i.fy)(l, P) : (0, i.ko)(l, P);
          }
          GetClanSteamIDForAppID(l) {
            const P = (0, i.ko)(f(l), this.ReadCache());
            return P ? M.b.InitFromClanID(P.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(l) {
            return (0, i.ko)(f(l), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(l) {
            return (0, i.Gt)(l.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(l) {
            return this.BHasClanInfoLoadedByAccountID(l);
          }
          GetClanMemberCount(l) {
            return (0, i.ko)(f(l), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(l) {
            return (
              (0, g.wT)(
                !!l,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, i.Gt)(a(l), this.ReadCache())
            );
          }
          GetCreatorStoreURL(l) {
            let P = A.pF.GetCreatorHome(l);
            if (P) return P.GetCreatorHomeURL("developer");
            let L = this.GetClanInfoByClanAccountID(l.GetAccountID());
            return (
              v.TS.COMMUNITY_BASE_URL +
              (L.vanity_url
                ? "groups/" + L.vanity_url
                : "gid/" + l.ConvertTo64BitString())
            );
          }
        }
        const n = new r();
        (0, s.V)("g_ClanStore", n);
        function c() {
          const C = (0, u.jE)();
          return h(C), C;
        }
        function _(C) {
          c();
          const { data: l, isPending: P } = (0, i.TB)(C ? a(C) : void 0);
          return [!!C && P, l ?? void 0];
        }
        function y(C) {
          const l = c();
          useEffect(() => {
            C &&
              FetchClanInfoByAccountID(a(C), l).catch((P) =>
                console.error(`Failed to hint load clan info ${C}`, P),
              );
          }, [C, l]);
        }
        function S(C) {
          return c(), useClanInfoByVanityQuery(C).data ?? null;
        }
        function I(C) {
          c();
          const l = C ? f(C) : void 0,
            { data: P, isPending: L } = (0, i.vF)(l);
          return { bLoadingClanInfo: !!l && L, clanInfo: P ?? null };
        }
        function B(C, l) {
          if (C.BIsOGGEvent()) return { bVisible: !1 };
          if (C.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (C.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            C.jsondata.clone_from_event_gid &&
            C.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (C.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const L = g_CreatorHomeStore.GetCreatorHome(C.clanSteamID);
          return L &&
            L.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : l
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function x(C, l) {
          return C.BIsOGGEvent()
            ? C.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : l
                  ? C.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function d(C) {
          return C.BIsOGGEvent()
            ? { bVisible: !1 }
            : C.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : C.BHasSaleEnabled()
                ? { bVisible: !0 }
                : C.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      75806: (O, T, e) => {
        "use strict";
        e.d(T, { z: () => _ });
        var t = e(7850),
          u = e(41735),
          D = e.n(u),
          p = e(90626),
          M = e(99412),
          g = e(25279),
          v = e(6658),
          A = e(50109),
          m = e(45737),
          i = e.n(m),
          s = e(36118),
          o = e(18210),
          h = e(8743),
          E = e.n(h),
          f = e(85599),
          a = e(11952);
        function r(x) {
          const { rgAssetURL: d, rgLang: C, bIsImage: l } = x,
            [P, L] = (0, p.useState)([]);
          if (
            ((0, p.useEffect)(() => {
              let H = !1;
              const j = l ? n : c;
              return (
                Promise.all(d.map((R) => j(R))).then((R) => {
                  H || L(R);
                }),
                () => {
                  H = !0;
                }
              );
            }, [d, l]),
            !P)
          )
            return (0, t.jsx)(f.t, {
              size: "small",
              string: "Checking Assets...",
            });
          const K = P.map((H, j) => (H ? -1 : j)).filter((H) => H !== -1);
          return K.length === 0
            ? (0, t.jsx)(a._, {
                bDone: !0,
                name: "Uploaded assets verified",
                tooltip:
                  "In the background we verified the assets by downloading from the CDN to verify they are present",
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(a._, {
                    bDone: !1,
                    name: `${K.length} Asset(s) uploaded failed to fetch`,
                  }),
                  K.map((H) => ({ url: d[H], lang: C[H] })).map((H) =>
                    (0, t.jsx)(
                      a._,
                      {
                        bDone: !1,
                        name: `${(0, M.LgB)(H.lang)} - Not found`,
                        tooltip: `${H.url} not downloadable from the CDN`,
                      },
                      H.url,
                    ),
                  ),
                ],
              });
        }
        function n(x) {
          return new Promise((d) => {
            const C = new Image();
            (C.onload = () => d(!0)), (C.onerror = () => d(!1)), (C.src = x);
          });
        }
        function c(x) {
          return new Promise((d) => {
            const C = document.createElement("video");
            (C.preload = "metadata"),
              (C.onloadedmetadata = () => d(!0)),
              (C.onerror = () => d(!1)),
              (C.src = x);
          });
        }
        function _(x) {
          const {
              rgAssetLangs: d,
              initialLang: C,
              fnGetAssetUrl: l,
              fnDeletAssetLang: P,
              imageClassname: L,
              fnDeleteAllAssets: K,
              showDeleteAll: H = !0,
              bVerifyAssets: j,
              bVideoAsset: R,
            } = x,
            [N, U] = p.useState(C ?? A.O.Get().GetCurEditLanguage() ?? d[0]),
            [J, X] = p.useState(l(N)),
            G = p.useMemo(() => [...d].sort(), [d]);
          p.useEffect(() => {
            const z = l(N);
            z ? X(z) : G.length > 0 ? U(G[0]) : X(null);
          }, [N, l, G]);
          const V = () => {
              K ? K() : G.forEach((z) => P(z));
            },
            Z = (0, p.useMemo)(() => d.map((z) => l(z)), [l, d]);
          return (0, t.jsxs)("div", {
            className: i().UploadedImageDisplayCtn,
            children: [
              (0, t.jsx)("div", {
                className: i().UploaderLeftCol,
                children: (0, t.jsx)(S, { curAssetURL: J, imageClassname: L }),
              }),
              (0, t.jsx)("div", {
                className: i().UploaderRightCol,
                children: (0, t.jsxs)("div", {
                  className: i().SectionCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: i().LangCountTitle,
                      children: (0, o.we)("#ImageUpload_LocalizedAssets"),
                    }),
                    (0, t.jsx)("div", {
                      className: i().LangSelectCtn,
                      children: G.map((z) =>
                        (0, t.jsx)(
                          y,
                          {
                            language: z,
                            selectedLanguage: N,
                            setSelectedLanguage: U,
                            deleteLanguage: P,
                          },
                          z,
                        ),
                      ),
                    }),
                    H &&
                      !!G.length &&
                      (0, t.jsx)("a", {
                        href: "#",
                        className: i().DeleteAll,
                        onClick: (z) => {
                          V(), z.preventDefault();
                        },
                        children: (0, o.we)("#Button_DeleteAll"),
                      }),
                    !!j &&
                      (0, t.jsx)(r, { rgAssetURL: Z, rgLang: d, bIsImage: !R }),
                  ],
                }),
              }),
            ],
          });
        }
        function y(x) {
          const {
              language: d,
              selectedLanguage: C,
              setSelectedLanguage: l,
              deleteLanguage: P,
            } = x,
            L = (0, M.LgB)(d);
          return (0, t.jsxs)(
            "div",
            {
              className: i().UploaderImgLang,
              children: [
                (0, t.jsx)("a", {
                  href: "#",
                  onClick: (K) => {
                    K.preventDefault(), l(d);
                  },
                  children:
                    d === C
                      ? (0, t.jsx)("span", {
                          className: i().LangSelected,
                          children: "" + L,
                        })
                      : (0, t.jsx)("span", { children: "" + L }),
                }),
                (0, t.jsx)("a", {
                  href: "#",
                  onClick: (K) => {
                    K.preventDefault(), P(d);
                  },
                  children: (0, t.jsx)(s.X, {}),
                }),
              ],
            },
            "image" + L,
          );
        }
        function S(x) {
          const { curAssetURL: d, imageClassname: C } = x;
          if (!d)
            return (0, t.jsx)("div", {
              className: E().ArtNoArt,
              children: (0, o.we)("#ImageDisplay_NoAssetUploaded"),
            });
          const l = (0, v.yh)(d);
          return g.Ho.includes(l)
            ? (0, t.jsx)(I, { ...x })
            : g.x.includes(l)
              ? (0, t.jsx)(B, { className: C || E().ArtPreview, strTextURL: d })
              : (0, t.jsx)("img", { className: C || E().ArtPreview, src: d });
        }
        function I(x) {
          const { curAssetURL: d, imageClassname: C } = x,
            l = p.useRef(void 0);
          return (
            p.useEffect(() => {
              l.current && (l.current.load(), l.current.play());
            }, [d]),
            (0, t.jsx)("video", {
              ref: l,
              className: C || E().ArtPreview,
              autoPlay: !0,
              loop: !0,
              controls: !0,
              muted: !0,
              children: (0, t.jsx)("source", { src: d }),
            })
          );
        }
        function B(x) {
          const { strTextURL: d, className: C } = x,
            [l, P] = p.useState("");
          return (
            p.useEffect(() => {
              D()
                .get(d)
                .then((L) => {
                  P(L.data);
                })
                .catch((L) => {
                  console.error(L);
                });
            }, [d]),
            (0, t.jsx)("textarea", {
              className: C,
              value: l,
              readOnly: !0,
              rows: 20,
            })
          );
        }
      },
      11952: (O, T, e) => {
        "use strict";
        e.d(T, { _: () => v });
        var t = e(7850),
          u = e(71421),
          D = e(48576),
          p = e.n(D),
          M = e(36707),
          g = e(36118);
        function v(A) {
          const { bDone: m, name: i, tooltip: s } = A;
          return (0, t.jsxs)("div", {
            className: p().StatusLineItemCtn,
            children: [
              (0, t.jsx)("span", {
                className: (0, M.A)(
                  p().StatusIcon,
                  m ? p().StatusIconDone : p().StatusNotDone,
                ),
                children: m ? (0, t.jsx)(g.Jlk, {}) : (0, t.jsx)(g.X, {}),
              }),
              (0, t.jsx)(u.he, { toolTipContent: s, children: i }),
            ],
          });
        }
      },
      31172: (O, T, e) => {
        "use strict";
        e.d(T, { hA: () => L, ux: () => H });
        var t = e(7850),
          u = e(90626),
          D = e(85599),
          p = e(18210);
        function M(j) {
          const { data: R, isPending: N } = useStoreItemBasicInfo(
            j ? { appid: j } : void 0,
          );
          return React.useMemo(() => {
            if (!j) return [];
            if (!R) return N ? void 0 : [];
            const U = [],
              J = new Set(),
              X = [
                ["developer", GetCreatorClanAccountIDs(R.developers)],
                ["publisher", GetCreatorClanAccountIDs(R.publishers)],
                ["franchise", GetCreatorClanAccountIDs(R.franchises)],
              ];
            for (const [G, V] of X)
              for (const Z of V)
                J.has(Z) ||
                  (J.add(Z),
                  U.push({ appid: j, name: "", clan_account_id: Z, type: G }));
            return U;
          }, [j, R, N]);
        }
        function g(j) {
          const { rgCreators: R, renderCreator: N } = j,
            [U, J] = React.useState(0);
          if (!R.length) return null;
          if (R.length == 1) return jsx(Fragment, { children: N(R[0]) });
          const X = U % R.length;
          return jsxs("div", {
            className: styles.CreatorCarouselCtn,
            children: [
              N(R[X]),
              jsx("div", {
                className: styles.CreatorCarouselCrumbs,
                children: R.map((G, V) =>
                  jsx(
                    FocusableDiv,
                    {
                      className: styles.CreatorCarouselCrumb,
                      onClick: () => J(V),
                      "aria-label": m(G.type),
                      children: jsx(CarouselBreadcrumb, { bIsActive: V == X }),
                    },
                    G.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function v(j) {
          const { creatorID: R, bSmallFormat: N } = j,
            { data: U } = useCreatorHomeByClanAccountID(R.clan_account_id);
          return U
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(U, R.type),
                strName: U.name ?? "",
                strAvatarURL: U.avatar_url_full_size ?? "",
                nFollowers: U.followers ?? 0,
                strCreatorType: m(R.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: R.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: N,
              })
            : null;
        }
        function A(j) {
          const { appid: R, bSmallFormat: N, renderCreator: U } = j,
            J = M(R);
          return J
            ? jsx(g, {
                rgCreators: J,
                renderCreator:
                  U ?? ((X) => jsx(v, { creatorID: X, bSmallFormat: N })),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function m(j) {
          switch (j) {
            case "publisher":
              return (0, p.we)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, p.we)("#CreatorHome_InFranchise");
          }
          return (0, p.we)("#CreatorHome_DevelopedBy");
        }
        var i = e(16512),
          s = e(19619),
          o = e(71742),
          h = e(3166),
          E = e(25792),
          f = e(99371),
          a = e.n(f),
          r = e(19298),
          n = e(95695),
          c = e.n(n),
          _ = e(51079),
          y = e(24660),
          S = e(72609),
          I = e(32093);
        function B(j) {
          const { href: R, children: N, bAllowFocuseableAnchor: U, ...J } = j;
          return S.TS.EREALM === I.TU.k_ESteamRealmChina
            ? (0, t.jsx)("div", { ...J, children: N })
            : U
              ? (0, t.jsx)(y.Ii, { href: R, ...J, children: N })
              : (0, t.jsx)("a", { href: R, ...J, children: N });
        }
        var x = e(36707),
          d = e(19730),
          C = e(53113);
        function l(j) {
          const {
            strURL: R,
            strName: N,
            strAvatarURL: U,
            nFollowers: J,
            strCreatorType: X,
            strTagLine: G,
            strMemberListURL: V,
            followButton: Z,
            bSmallFormat: z,
            bMinimalDisplay: ee,
          } = j;
          return (0, t.jsx)(_.Ay, {
            feature: "salecreatorhome",
            children: (0, t.jsxs)(r.Z, {
              className: (0, x.A)(
                a().DevSummaryCtn,
                z ? a().SmallFormat : a().LargeFormat,
                ee ? a().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!X &&
                  (0, t.jsx)("span", { className: a().Title, children: X }),
                (0, t.jsxs)("div", {
                  className: a().DevSummaryWidgetCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: a().DevSummaryBackground,
                      style: { backgroundImage: `url(${U} )` },
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, x.A)(a().DevSummaryContent),
                      children: [
                        (0, t.jsxs)("div", {
                          className: c().FlexRowContainer,
                          children: [
                            (0, t.jsx)(B, {
                              href: (0, C.k2)(R),
                              className: a().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, t.jsx)("img", {
                                className: (0, x.A)(a().Avatar, "Avatar_Trgt"),
                                src: U,
                                alt: "",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, x.A)(
                                c().FlexColumnContainer,
                                a().CreatorDescCtn,
                              ),
                              children: [
                                (0, t.jsxs)("div", {
                                  className: (0, x.A)(
                                    a().CreatorTitleCtn,
                                    c().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, t.jsx)(B, {
                                      href: (0, C.k2)(R),
                                      className: a().CreatorNameName,
                                      children: N,
                                    }),
                                    !!G &&
                                      (0, t.jsx)("div", {
                                        className: (0, x.A)(
                                          c().FlexColumnContainer,
                                          a().CreatorTagline,
                                        ),
                                        children: G,
                                      }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: (0, x.A)({
                                    [c().FlexColumnContainer]: z,
                                    [c().FlexRowContainer]: !z,
                                    [a().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, t.jsxs)("div", {
                                    className: (0, x.A)(a().FollowBtnCtn),
                                    children: [
                                      Z,
                                      (0, t.jsxs)("div", {
                                        className: (0, x.A)({
                                          [a().Followers]: !0,
                                        }),
                                        children: [
                                          (0, t.jsx)("span", {
                                            children: (0, p.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, t.jsx)("span", {
                                            className: a().FollowerCount,
                                            children: (0, d.Dq)(J),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!V &&
                          (0, t.jsx)("a", {
                            href: V,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: a().MembersListLink,
                            children: (0, p.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var P = e(1e3);
        function L(j) {
          const {
              creatorID: R,
              bShowTagline: N,
              bHideCreatorType: U,
              bSmallFormat: J,
              bHideFollowButton: X,
              bAddLinkToMemberList: G,
              bMinimalDisplay: V,
            } = j,
            { creatorHome: Z, isFetching: z } = (0, i.FV)(R.clan_account_id),
            [ee] = (0, s.L2)();
          return ee || (!Z && z)
            ? (0, t.jsx)("div", {
                className: a().DevSummaryWidgetCtn,
                children: (0, t.jsx)(D.t, {
                  string: (0, p.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : Z
              ? (0, t.jsx)(E.tH, {
                  children: (0, t.jsx)(l, {
                    strURL: Z.GetCreatorHomeURL(R.type),
                    strName: Z.GetName(),
                    strAvatarURL: Z.GetAvatarURLFullSize(),
                    nFollowers: Z.GetNumFollowers(),
                    strCreatorType: U ? void 0 : m(R.type),
                    strTagLine: N ? Z.GetTagLine() : void 0,
                    strMemberListURL: G
                      ? h.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        Z.GetClanSteamID().ConvertTo64BitString() +
                        "/members/"
                      : void 0,
                    followButton: X
                      ? void 0
                      : (0, t.jsx)(P.of, {
                          clanAccountID: R.clan_account_id,
                          creatorID: R,
                        }),
                    bSmallFormat: J,
                    bMinimalDisplay: V,
                  }),
                })
              : null;
        }
        function K(j) {
          const { appid: R, bSmallFormat: N } = j;
          return jsx(ErrorBoundary, {
            children: jsx(CreatorHomeCarouselForApp, {
              appid: R,
              bSmallFormat: N,
              renderCreator: (U) => jsx(L, { creatorID: U, bSmallFormat: N }),
            }),
          });
        }
        function H(j) {
          const { clanInfo: R, bAddLinkToMemberList: N } = j;
          if (
            ((0, o.wT)(
              R && R.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !R)
          )
            return null;
          const U = {
            clan_account_id: R.clanAccountID,
            name: R.group_name,
            type: "developer",
          };
          return (0, t.jsx)("div", {
            className: a().CuratorHoverCtn,
            children: (0, t.jsx)(L, {
              creatorID: U,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: N,
            }),
          });
        }
      },
      45247: (O, T, e) => {
        "use strict";
        e.d(T, { W: () => Ee });
        var t = e(7850),
          u = e(24660),
          D = e(19298),
          p = e(20169),
          M = e(3367),
          g = e(88743),
          v = e(98735),
          A = e(24237),
          m = e(86298),
          i = e(95414);
        function s() {
          return { width: 460, height: 215 };
        }
        function o() {
          return { width: 616, height: 353 };
        }
        function h() {
          return { width: 231, height: 87 };
        }
        var E = e(46727),
          f = e(84607),
          a = e(41188),
          r = e(77459),
          n = e(72609);
        const c = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(F, Y) {
          let Q = "0000000000000000000000000000000000000000";
          typeof F == "string" ? (Q = F) : F && (Q = y(F) || Q);
          let te = ".jpg";
          Q === "0000000000000000000000000000000000000000" && (Q = c),
            Q.length == 44 && ((te = Q.slice(-4)), (Q = Q.slice(0, 40)));
          let b = n.TS.AVATAR_BASE_URL;
          switch (
            (b ||
              ((b = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (b += Q.slice(0, 2) + "/")),
            (b += Q),
            Y)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              b += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              b += "_full";
              break;
          }
          return (b += te), b;
        }
        function y(F) {
          return F
            ? (typeof F[Symbol.iterator] == "function"
                ? Array.from(F)
                : Object.values(F).filter((Q) => typeof Q == "number")
              )
                .map((Q) => Q.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
        var S = e(40358),
          I = e(90626),
          B = e(26591),
          x = e(76532),
          d = e.n(x),
          C = e(29245),
          l = e(48357),
          P = e(64774),
          L = e(36707);
        function K(F) {
          const {
              id: Y,
              bHidePrice: Q,
              bShowInLibraryInsteadOfPrice: te,
              bHidePlatforms: b,
              strClassName: W,
              creatorAccountID: w,
              bShowName: se,
              onlyOneDiscountPct: re,
              bShowAddToCart: ue,
              bShowWishlistButton: Ce,
            } = F,
            de = (0, I.useRef)(null),
            [me, pe] = (0, I.useState)(!1),
            { data: Ie } = (0, S.J$)(Y);
          if (
            ((0, I.useEffect)(() => {
              de.current && pe(de.current.offsetWidth < 370);
            }, [de]),
            !Y || !("appid" in Y || "bundleid" in Y || "packageid" in Y))
          )
            return null;
          const ve = !!(Ce && Ie?.item_type == M.c6.qI),
            Ae = !!(!w && !ue && !ve && b && Q);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !Ae &&
                (0, t.jsxs)("div", {
                  ref: de,
                  className: (0, L.A)(
                    d().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    W,
                  ),
                  children: [
                    w && (0, t.jsx)(j, { creatorAccountID: w, ...F }),
                    ue &&
                      (0, t.jsx)(B.h, {
                        id: Y,
                        className: (0, L.A)(
                          d().MaxActionButtonWidth,
                          d().AddToCartButton,
                        ),
                      }),
                    ve &&
                      "appid" in Y &&
                      (0, t.jsx)(P.r, {
                        appid: Y.appid,
                        className: (0, L.A)(
                          d().MaxActionButtonWidth,
                          d().AddToWishlistButton,
                        ),
                      }),
                    !b &&
                      (0, t.jsx)(C.Q, {
                        id: Y,
                        bMinimizePlatforms: me,
                        bHideWindows: !0,
                      }),
                    !Q &&
                      (0, t.jsx)("span", {
                        className: d().BottomBarPriceInfo,
                        children: (0, t.jsx)(l.NF, {
                          id: Y,
                          bShowInLibrary: te,
                          onlyOneDiscountPct: re,
                        }),
                      }),
                  ],
                }),
              se && (0, t.jsx)(H, { id: Y }),
            ],
          });
        }
        function H(F) {
          const { id: Y } = F,
            { data: Q } = (0, S.J$)(Y);
          return Q?.name
            ? (0, t.jsx)("div", {
                className: d().CapsuleName,
                children: Q.name,
              })
            : null;
        }
        function j(F) {
          const { creatorAccountID: Y, strClassName: Q } = F,
            te = (0, I.useMemo)(() => ({ creatorid: Y }), [Y]),
            { data: b } = (0, S.J$)(te),
            { data: W } = (0, S.lv)(te);
          if (!b) return null;
          const w = _(W?.clan_avatar, "Medium"),
            se = b.name || "";
          return (0, t.jsxs)("div", {
            className: (0, L.A)(d().BottomCreatorRow, Q),
            children: [
              (0, t.jsx)("img", {
                className: (0, L.A)(d().CreatorLogo),
                src: w,
                alt: se,
              }),
              (0, t.jsx)("span", { className: d().CreatorName, children: se }),
            ],
          });
        }
        var R = e(21721),
          N = e(87249),
          U = e(29522),
          J = e(72865),
          X = e(24179),
          G = e(32994),
          V = e(83482),
          Z = e(33924),
          z = e(21770),
          ee = e(77200),
          q = e(18210),
          $ = e(53113),
          ne = e(3166),
          oe = e(91291),
          ae = e.n(oe),
          ie = e(3348),
          fe = e(47875);
        const k = "capsule_index_";
        function Ee(F) {
          const {
              capsule: Y,
              bShowParentApp: Q,
              elElementToAppendToHover: te,
              index: b,
              navKey: W,
              bHideStoreHover: w,
              onlyOneDiscountPct: se,
              bPreferDemoStorePage: re,
              bShowEarlyAccessBanner: ue,
            } = F,
            Ce = (0, ne.Qn)(),
            [de, me] = I.useState(!1),
            [pe, Ie] = I.useState(!1),
            [ve, Ae] = I.useState(!1),
            Pe = I.useRef(!1);
          I.useEffect(() => {
            if (pe && !Pe.current) {
              const Te = window.setTimeout(() => {
                (Pe.current = !0), Ae(!0);
              }, 500);
              return () => window.clearTimeout(Te);
            }
            return Ae(pe || de), () => {};
          }, [pe, de]);
          const { data: Me } = (0, G.lI)(),
            xe = !!Me?.preferences?.disable_microtrailers,
            _e = (0, g.rt)(Y),
            { data: De } = (0, S.J$)(_e),
            ye = (0, U.$5)(Q ? De?.related_items?.parent_appid : void 0),
            { data: Le } = (0, S.J$)(ye);
          if (!De || !_e) return null;
          const Se = !!Le && !!ye,
            Oe = (0, t.jsx)(he, {
              ...F,
              strExtraParams: F.strExtraParams,
              id: _e,
              bIsHovered: ve && !xe,
              bHasParentAppToDisplay: Se,
              onlyOneDiscountPct: se,
              bShowEarlyAccessBanner: ue,
              bUsePanel: !w && !Ce,
            });
          return (0, t.jsxs)(D.Z, {
            className: (0, L.A)({
              [d().OuterCapsuleContainer]: !0,
              [d().TrailerActive]: ve && !xe && Ce,
              [k + b]: b == 0,
            }),
            navEntryPreferPosition: p.iU.PREFERRED_CHILD,
            navKey: W,
            onFocusWithin: F.imageType != "library" ? Ie : void 0,
            children: [
              (0, t.jsxs)(v.oj, {
                appid: De.appid,
                children: [
                  w
                    ? (0, t.jsx)("div", {
                        onMouseEnter: () => me(!0),
                        onMouseLeave: () => me(!1),
                        children: Oe,
                      })
                    : (0, t.jsx)(A.Q, {
                        className: d().CapsuleContainer,
                        id: _e,
                        elElementToAppend: F.elElementToAppendToHover,
                        bShowDemoButton: F.bShowDemoButton,
                        bPreferDemoStorePage: F.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          F.bShowDeckCompatibilityDialog,
                        eHardwareCompatibilityDisplay:
                          F.eHardwareCompatibilityDisplay,
                        bHidePrice: F.bHidePrice,
                        bUseSubscriptionLayout: F.bUseSubscriptionLayout,
                        strExtraParams: F.strExtraParams,
                        nCreatorAccountID: F.creatorAccountID,
                        nWidthMultiplier: F.nWidthMultiplier,
                        bShowIgnoreButton: F.bShowIgnoreButton,
                        bShowDescription: F.bShowDescriptionInHover,
                        children: Oe,
                      }),
                  !!te && (0, t.jsx)(t.Fragment, { children: te }),
                ],
              }),
              Se &&
                (0, t.jsx)(ce, {
                  strExtraParams: F.strExtraParams,
                  parentID: ye,
                  parentStoreItemDefaultInfo: Le,
                  childAppType: De.type,
                  bPreferDemoStorePage: !!re,
                }),
            ],
          });
        }
        function ce(F) {
          const {
              strExtraParams: Y,
              parentID: Q,
              parentStoreItemDefaultInfo: te,
              childAppType: b,
              bPreferDemoStorePage: W,
            } = F,
            w = (0, J.n9)(),
            se = (0, ne.Qn)(),
            { data: re } = (0, S.lv)(Q);
          return re
            ? (0, t.jsx)(u.ml, {
                className: d().CapsuleParentInfo,
                ...(0, m.S)(te, w, se, W, Y),
                children: (0, t.jsxs)(v.oj, {
                  appid: te.appid,
                  children: [
                    (0, t.jsx)("div", {
                      className: d().ParentType,
                      children: (0, q.we)(
                        b == M.uE.Ov
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, t.jsx)(i.u, {
                      id: Q,
                      strExtraParams: Y,
                      children: (0, t.jsx)("img", {
                        loading: "lazy",
                        className: Z.AppCapsuleImage,
                        alt: te.name || "",
                        src: (0, R.b0)(re, "small_capsule"),
                        ...h(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function he(F) {
          const {
              id: Y,
              bHideStatusBanners: Q,
              bUsePanel: te,
              strExtraParams: b,
              index: W,
              imageType: w,
              bHasParentAppToDisplay: se,
              bIsHovered: re,
              strDoubleCapsuleMessage: ue,
              bPreferDemoStorePage: Ce,
              bShowEarlyAccessBanner: de,
              bPreferAssetWithoutOverride: me,
            } = F,
            pe = (0, J.n9)(),
            Ie = (0, ee.w)(),
            ve = (0, ne.Qn)(),
            Ae = (0, U._Z)(Y),
            { data: Pe } = (0, S.J$)(Y);
          if (!Pe) return null;
          const Me = te
              ? void 0
              : (0, $.NT)(
                  (0, V.It)(`${(0, fe._)(Pe, Ce)}${b ? `?${b}` : ""}`, pe, Ie),
                ),
            xe = te ? D.Z : u.Ii,
            _e = re && ve,
            De = !!ue;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, L.A)({ [ae().TwoWidthCtn]: De }),
                children: [
                  (0, t.jsxs)(xe, {
                    href: Me,
                    style: {
                      display: "block",
                      cursor: "pointer",
                      position: ve ? "relative" : void 0,
                      zIndex: _e ? 4 : void 0,
                    },
                    className: (0, L.A)({ [ae().TwoWidthCapsule]: De }),
                    preferredFocus: se,
                    focusable: !0,
                    noFocusRing: _e,
                    children: [
                      (0, t.jsx)(E.V, {
                        appids: Ae,
                        hide_status_banners: Q,
                        show_early_access: de,
                      }),
                      w != "none" &&
                        (0, t.jsx)(f.a, {
                          imageType: w,
                          id: Y,
                          bPreferAssetWithoutOverride: me,
                        }),
                      (0, t.jsx)(z.J, { id: Y }),
                      (0, t.jsx)("div", {
                        className: (0, L.A)({ [ae().FadeIn]: _e }),
                        children: (0, t.jsx)(N.mj, {
                          id: Y,
                          active: re,
                          bIsHoverMode: !0,
                          eGrowOnActivate: _e
                            ? N.C0.k_ETrailerGrowAmount_Implicit
                            : void 0,
                        }),
                      }),
                    ],
                  }),
                  De &&
                    (0, t.jsx)(le, {
                      id: Y,
                      strDoubleCapsuleMessage: ue,
                      index: W,
                    }),
                ],
              }),
              (0, t.jsx)(ge, { ...F }),
            ],
          });
        }
        function le(F) {
          const { id: Y, strDoubleCapsuleMessage: Q, index: te } = F,
            { data: b } = (0, S.by)(Y),
            { data: W } = (0, S.xz)(Y);
          return (0, t.jsxs)("div", {
            className: (0, L.A)(ae().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, t.jsx)("div", { className: ae().Reason, children: Q }),
              (0, t.jsx)("div", {
                className: ae().StoreSaleItemRelease,
                children: (0, t.jsx)("span", {
                  children: b ? (0, ie.CC)(b) : "",
                }),
              }),
              (0, t.jsx)(a.n, {
                bHideTitle: !0,
                rgTagIDs: W?.map((w) => w.tagid) || [],
                instanceNum: te,
              }),
            ],
          });
        }
        function ge(F) {
          const {
              id: Y,
              bHidePriceIfOwned: Q,
              bHideStatusBanners: te,
              bUseSubscriptionLayout: b,
              elElementToAppendToHover: W,
              bHidePrice: w,
              bHidePlatforms: se,
              creatorAccountID: re,
              bIsHovered: ue,
              onlyOneDiscountPct: Ce,
              strDoubleCapsuleMessage: de,
            } = F,
            { data: me } = (0, S.J$)(Y),
            { bIsOwned: pe } = (0, X.ZJ)(Y),
            Ie = pe && !te;
          if (b && me && me.item_type == M.c6.qI && me.appid)
            return (0, t.jsx)(r.E, { appid: me.appid, bIsMuted: ue });
          if (W) return null;
          const ve = !!(pe && Q);
          return (0, t.jsx)(K, {
            id: Y,
            bHidePrice: w,
            bShowInLibraryInsteadOfPrice: ve,
            bHidePlatforms: se,
            creatorAccountID: re,
            bShowName: F.bShowName,
            onlyOneDiscountPct: Ce,
            bShowWishlistButton: !!de,
          });
        }
      },
      59490: (O, T, e) => {
        "use strict";
        e.d(T, { p: () => A });
        var t = e(7850),
          u = e(90626),
          D = e(76559),
          p = e(54407),
          M = e(15736),
          g = e.n(M),
          v = e(3166);
        function A(m) {
          const {
              accountID: i,
              bHideWhenNotAvailable: s,
              bHideName: o,
              bLink: h = !0,
            } = m,
            [E] = (0, p.KT)(i),
            f = (0, p.KM)(i),
            a = u.useMemo(() => D.b.InitFromAccountID(i), [i]),
            r = `${v.TS.COMMUNITY_BASE_URL}profiles/${a.ConvertTo64BitString()}`,
            n = h ? "a" : "span";
          return (0, t.jsx)(t.Fragment, {
            children: E
              ? (0, t.jsxs)(n, {
                  href: h ? r : void 0,
                  children: [
                    (0, t.jsx)("img", {
                      className: M.SmallAvatar,
                      src: E.avatar_url,
                      "data-miniprofile": "s" + a.ConvertTo64BitString(),
                    }),
                    !o &&
                      (0, t.jsx)("span", {
                        children: f
                          ? `${f} (${E.persona_name})`
                          : E.persona_name,
                      }),
                  ],
                })
              : (0, t.jsx)(t.Fragment, {
                  children: !s && (0, t.jsx)("span", { children: i }),
                }),
          });
        }
      },
      21770: (O, T, e) => {
        "use strict";
        e.d(T, { J: () => J });
        var t = e(7850),
          u = e(21690),
          D = e(36707),
          p = e(3166),
          M = e(58855),
          g = e(39905),
          v = e(40358),
          A = e(64238),
          m = e.n(A),
          i = e(90626),
          s = e(34713),
          o = e.n(s),
          h = e(55546),
          E = e(75779),
          f = e(71742),
          a = e(26356);
        function r(G) {
          const { data: V } = useStoreItemSupportedPlatforms(G.id);
          return jsx(c, { platforms: V });
        }
        function n(G) {
          const { id: V, ...Z } = G,
            { data: z } = (0, v.qI)(V);
          return (0, t.jsx)(_, { ...Z, platforms: z });
        }
        const c = i.memo(function (V) {
            const { platforms: Z } = V;
            if (!Z) return null;
            const { windows: z, mac: ee, steamos_linux: q, vr_support: $ } = Z;
            return (0, t.jsxs)("span", {
              className: o().SupportedPlatforms,
              children: [
                z && (0, t.jsx)(y, {}),
                ee && (0, t.jsx)(S, {}),
                q && (0, t.jsx)(I, {}),
                $?.vrhmd && (0, t.jsx)(B, {}),
              ],
            });
          }),
          _ = i.memo(function (V) {
            const { platforms: Z, eHWCompat: z, size: ee = "small" } = V;
            let q;
            if (z == a.iA)
              return (
                (0, f.wT)(
                  !1,
                  "SteamHWCompatIndicator called for k_ESteamHWCompatibility_None",
                ),
                null
              );
            if (z == a.c9) {
              const $ = Z?.steam_os_compat_category;
              if ($ === void 0) return null;
              switch ($) {
                case h.Hi:
                  q = U;
                  break;
                case h.u_:
                  q = R;
                  break;
                case h.xs:
                  q = N;
                  break;
                default:
                  return (
                    (0, f.z_)($, `Unhandled steam os category: ${$}`), null
                  );
              }
            } else {
              let $;
              if (
                (z == a.JR
                  ? ($ = Z?.steam_machine_compat_category)
                  : z == a.bY
                    ? ($ = Z?.steam_frame_compat_category)
                    : ($ = Z?.steam_deck_compat_category),
                $ === void 0)
              )
                return null;
              switch ($) {
                case E.I2:
                  q = H;
                  break;
                case E.sd:
                  q = j;
                  break;
                case E.V8:
                  q = R;
                  break;
                case E.YX:
                  q = N;
                  break;
                default:
                  return (
                    (0, f.z_)($, `Unhandled deck compat category: ${$}`), null
                  );
              }
            }
            return (0, t.jsxs)("span", {
              className: m()(
                o().DeckCompat,
                ee == "small" && o().Small,
                ee == "fill" && o().Fill,
              ),
              children: [
                z == a.ZJ && (0, t.jsx)(P, {}),
                z == a.JR && (0, t.jsx)(L, {}),
                z == a.bY && (0, t.jsx)(K, {}),
                (0, t.jsx)(q, {}),
              ],
            });
          });
        function y() {
          return (0, t.jsx)("span", {
            className: m()(o().PlatformIndicator, o().Windows),
            title: g.Z.Localize("#Platform_Windows"),
            children: (0, t.jsx)(x, {}),
          });
        }
        function S() {
          return (0, t.jsx)("span", {
            className: m()(o().PlatformIndicator, o().Mac),
            title: g.Z.Localize("#Platform_Mac"),
            children: (0, t.jsx)(d, {}),
          });
        }
        function I() {
          return (0, t.jsx)("span", {
            className: m()(o().PlatformIndicator, o().SteamOS),
            title: g.Z.Localize("#Platform_Linux"),
            children: (0, t.jsx)(C, {}),
          });
        }
        function B() {
          return (0, t.jsx)("span", {
            className: o().PlatformIndicator,
            title: g.Z.Localize("#Platform_VR"),
            children: (0, t.jsx)(l, {}),
          });
        }
        function x() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
            children: [
              (0, t.jsx)("rect", {
                fill: "currentColor",
                width: "60.834",
                height: "60.835",
              }),
              (0, t.jsx)("rect", {
                x: "67.165",
                fill: "currentColor",
                width: "60.835",
                height: "60.835",
              }),
              (0, t.jsx)("rect", {
                y: "67.164",
                fill: "currentColor",
                width: "60.834",
                height: "60.836",
              }),
              (0, t.jsx)("rect", {
                x: "67.165",
                y: "67.164",
                fill: "currentColor",
                width: "60.835",
                height: "60.836",
              }),
            ],
          });
        }
        function d() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsx)("path", {
                d: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
              }),
              (0, t.jsx)("path", {
                d: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
              }),
            ],
          });
        }
        function C() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#FFFFFF",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
              }),
            ],
          });
        }
        function l() {
          return (0, t.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, t.jsx)("path", {
                d: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
                fill: "currentColor",
              }),
              (0, t.jsx)("path", {
                d: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function P() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
            ),
            className: m()(o().SteamDeckCompatLogo),
            children: (0, t.jsx)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
                fill: "white",
              }),
            }),
          });
        }
        function L() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: m()(o().SteamDeckCompatLogo),
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function K() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: m()(o().SteamDeckCompatLogo),
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  d: "M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function H() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize("#SteamDeckVerified_Category_Verified"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: m()(o().SteamDeckCompatVerified),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function j() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize("#SteamDeckVerified_Category_Playable"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: m()(o().SteamDeckCompatPlayable),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function R() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize("#SteamDeckVerified_Category_Unsupported"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: m()(o().SteamDeckCompatUnsupported),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function N() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize("#SteamDeckVerified_Category_Unknown"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: m()(o().SteamDeckCompatUnknown),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function U() {
          return (0, t.jsx)("span", {
            title: g.Z.Localize("#SteamOSCompatibility_Category_Compatible"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: m()(o().SteamOSCompatCompatible),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function J(G) {
          const { bAllowOutsideOfDeck: V } = G;
          return !(0, p.Qn)() && !V ? null : (0, t.jsx)(X, { ...G });
        }
        function X(G) {
          const { className: V, id: Z } = G,
            [z, ee] = (0, u.FD)();
          let q = ee;
          if ((ee == a.iA && (q = a.ZJ), !Z)) return null;
          let $;
          return (
            ee == a.bY && ($ = M.CompatIconFrame),
            (0, t.jsx)("div", {
              className: (0, D.A)(M.CompatIcon, $, V),
              children: (0, t.jsx)(n, { id: Z, eHWCompat: q }),
            })
          );
        }
      },
      39239: (O, T, e) => {
        "use strict";
        e.d(T, { i: () => A, o: () => v });
        var t = e(7850),
          u = e(90626),
          D = e(18210),
          p = e(67523),
          M = e.n(p),
          g = e(80150);
        function v(m) {
          const {
              className: i,
              srcs: s,
              lazyLoad: o,
              width: h,
              height: E,
              alt: f,
              crossOrigin: a,
            } = m,
            [r, n] = u.useState(s.length),
            [c, _] = u.useState(0);
          u.useEffect(() => {
            r != s.length && (n(s.length), _(0));
          }, [r, s.length]);
          const y = u.useCallback(() => {
            m.onImageError && m.onImageError(m.srcs[c]),
              c + 1 < m.srcs.length && _(c + 1);
          }, [c, m]);
          return s.length == 0
            ? null
            : (0, t.jsx)("img", {
                className: i,
                src: s[c],
                crossOrigin: a,
                onError: y,
                loading: o ? "lazy" : void 0,
                width: h,
                height: E,
                alt: f,
              });
        }
        function A(m) {
          const [i, s] = u.useState(!1),
            {
              className: o,
              src: h,
              lazyLoad: E,
              width: f,
              height: a,
              alt: r,
              crossOrigin: n,
            } = m;
          return i
            ? (0, t.jsxs)("div", {
                className: p.ErrorDiv,
                children: [
                  (0, t.jsx)("p", {
                    children: (0, D.we)("#Image_ErrorTitle", h),
                  }),
                  (0, t.jsx)("ul", {
                    children: (0, t.jsx)("li", {
                      children: (0, D.we)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, D.we)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, t.jsx)(g.o, {
                className: o,
                src: h,
                onError: () => s(!0),
                crossOrigin: n,
                loading: E ? "lazy" : void 0,
                width: f,
                height: a,
                alt: r,
              });
        }
      },
      80150: (O, T, e) => {
        "use strict";
        e.d(T, { o: () => o });
        var t = e(7850),
          u = e(90626),
          D = e(36118),
          p = e(36707),
          M = e(60399),
          g = e(21659),
          v = e(21038),
          A = e.n(v);
        const m = 1.3,
          i = 3,
          s = 256;
        function o(h) {
          const [E, f] = (0, u.useState)(!1),
            [a, r] = (0, u.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            n = (0, u.useRef)(null),
            [c, _] = (0, M.XC)();
          return (
            (0, u.useEffect)(() => {
              a.naturalWidth > a.displayWidth * m &&
                a.naturalHeight > a.displayHeight * m &&
                a.naturalWidth > s &&
                a.naturalWidth / a.naturalHeight < i &&
                f(!0);
            }, [a]),
            E
              ? (0, t.jsxs)("span", {
                  className: v.PreviewCtn,
                  children: [
                    _,
                    (0, t.jsx)("span", {
                      className: v.SVG,
                      children: (0, t.jsx)(D.YNO, {}),
                    }),
                    (0, t.jsx)("img", {
                      ...h,
                      className: (0, p.A)({
                        ...(h.className && { [h.className]: !0 }),
                      }),
                      onClick: (y) => {
                        h.src && c([h.src]);
                      },
                    }),
                  ],
                })
              : (0, t.jsx)("img", {
                  ...h,
                  ref: n,
                  onLoad: (y) => {
                    if (!y.currentTarget.closest("a") && !(0, g.c5)()) {
                      const {
                        naturalWidth: S,
                        naturalHeight: I,
                        width: B,
                        height: x,
                      } = y.currentTarget;
                      r({
                        naturalWidth: S,
                        naturalHeight: I,
                        displayWidth: B,
                        displayHeight: x,
                      });
                    }
                  },
                })
          );
        }
      },
      91512: (O, T, e) => {
        "use strict";
        e.d(T, { A: () => a });
        var t = e(7850),
          u = e(90626),
          D = e(54963);
        const p =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var M = e(44894),
          g = e(41635),
          v = e(41609),
          A = e.n(v),
          m = e(64641),
          i = e.n(m),
          s = e(36118),
          o = e(41735),
          h = e.n(o),
          E = e(13854),
          f = e(36707);
        function a(n) {
          const {
              items: c,
              render: _,
              onDelete: y,
              onEdit: S,
              onReorder: I,
              onMove: B,
              bDisabled: x,
              rowClassName: d,
            } = n,
            [C, l] = u.useState(!1),
            [P, L] = u.useState(void 0),
            [K, H] = u.useState(void 0),
            [j, R] = u.useState(-1),
            [N, U] = u.useState(void 0),
            [J, X] = u.useState(0),
            [G, V] = u.useState(0),
            [Z, z] = u.useState(void 0),
            [ee, q] = u.useState(""),
            $ = u.useRef(void 0),
            ne = u.useRef([]),
            oe = u.useRef([]),
            ae = u.useMemo(() => h().CancelToken.source(), []),
            ie = () => {
              $.current?.firstElementChild &&
                (X($.current.firstElementChild.getBoundingClientRect().height),
                V($.current.firstElementChild.getBoundingClientRect().width));
            };
          u.useEffect(() => {
            ie();
          }, []),
            u.useEffect(
              () => () => ae.cancel("ReorderableList unmounting"),
              [ae],
            );
          const fe = (b, W) => {
              const w = ne.current[b]?.current;
              if (!w) {
                console.error(
                  "start element grab missing element at index " + b,
                );
                return;
              }
              l(!0), R(b), z(void 0), U(b);
              const se = W.clientX - w.getBoundingClientRect().left;
              L(se);
              const re = W.clientY - w.getBoundingClientRect().top;
              H(re),
                (w.style.position = "fixed"),
                (w.style.left = W.clientX - se + "px"),
                (w.style.top = W.clientY - re + "px"),
                (w.style.zIndex = "1");
            },
            k = u.useCallback(
              (b) => {
                const W = ne.current[j]?.current;
                if (!W) {
                  console.error("update grab element missing element");
                  return;
                }
                (W.style.left = b.clientX - P + "px"),
                  (W.style.top = b.clientY - K + "px");
              },
              [j, P, K],
            ),
            Ee = u.useCallback(() => {
              const b = ne.current[j]?.current;
              b
                ? ((b.style.position = ""), (b.style.zIndex = ""))
                : console.error("end element drag missing element"),
                l(!1),
                R(-1),
                z(void 0),
                U(void 0);
            }, [j]),
            ce = (b, W) => {
              ae.token.reason ||
                ($.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  J !=
                    $.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  ie(),
                fe(W, b),
                b.preventDefault());
            },
            he = (b, W) => {
              const w = E.OQ(W > b ? W - 1 : W, 0, c.length - 1);
              b != w && (B ? B(b, w) : (0, g.yY)(c, b, w), te(w), I && I(c));
            },
            le = (b) => {
              !C || ae.token.reason || (Ee(), he(j, N));
            },
            ge = u.useCallback(
              (b) => {
                if (!C || ae.token.reason) return;
                const W = b.clientY;
                let w;
                for (let se = 0; se < oe.current.length; se++) {
                  const re = oe.current[se].current.getBoundingClientRect().top,
                    ue = oe.current[se].current.getBoundingClientRect().bottom,
                    Ce = (re + ue * 2) / 3;
                  if (W < Ce) {
                    w = se;
                    break;
                  }
                }
                U(w ?? oe.current.length), k(b);
              },
              [C, ae, k],
            );
          (0, D.l6)(window, "mousemove", C ? ge : void 0),
            (0, D.l6)(window, "mouseup", C ? le : void 0),
            u.useEffect(() => {
              for (let b = ne.current.length; b < c.length; b++)
                ne.current.push(u.createRef()), oe.current.push(u.createRef());
            }, [c.length]);
          const F = (b) => {
              z(void 0);
              const W = ee?.trim(),
                w = Number.parseInt(W);
              if (W.length == 0 || isNaN(w)) return;
              const se = w - 1;
              b != se && he(b, se);
            },
            Y = (b, W) => {
              b.key === "Enter" && (F(W), b.currentTarget.blur());
            },
            [Q, te] = u.useState(void 0);
          return (0, t.jsx)("div", {
            className: A().WhitelistCtn,
            ref: $,
            children: c.map((b, W) =>
              (0, t.jsxs)(
                "div",
                {
                  ref: oe.current[W],
                  children: [
                    W == N && (0, t.jsx)(r, { width: G }),
                    (0, t.jsx)("div", {
                      ref: ne.current[W],
                      className: A().DragGhost,
                      children:
                        W == j &&
                        (0, t.jsxs)("div", {
                          className: (0, f.A)(A().WhitelistRow, d),
                          children: [
                            (0, t.jsx)("img", {
                              className: (0, f.A)(
                                A().WhitelistAvatar,
                                A().Grabbing,
                              ),
                              src: p,
                            }),
                            (0, t.jsx)("input", {
                              className: (0, f.A)(
                                A().WhitelistNumber,
                                A().Disabled,
                                A().Grabbing,
                              ),
                              type: "text",
                              value: (N > W ? N - 1 : N) + 1,
                              disabled: !0,
                            }),
                            _(b, W),
                          ],
                        }),
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, f.A)(
                        A().WhitelistRow,
                        d,
                        C && A().DragActive,
                        W == j && A().BeingDragged,
                        Q == W && A().Dropped,
                      ),
                      onAnimationEnd: () => te(void 0),
                      children: [
                        (0, t.jsx)("img", {
                          className: (0, f.A)(
                            A().WhitelistAvatar,
                            A().Grabbable,
                            x && A().DisabledGrab,
                          ),
                          src: p,
                          onMouseDown: x ? void 0 : (w) => ce(w, W),
                        }),
                        (0, t.jsx)("input", {
                          className: (0, f.A)(
                            A().WhitelistNumber,
                            x && A().Disabled,
                          ),
                          type: "text",
                          value: Z == W ? ee : W + 1,
                          disabled: x || W == j,
                          onChange: (w) => q(w.target.value),
                          onKeyDown: (w) => Y(w, W),
                          onFocus: (w) => {
                            z(W), q(w.target.value);
                          },
                          onBlur: () => F(W),
                        }),
                        _(b, W),
                        W != j &&
                          !!(S || y) &&
                          (0, t.jsxs)("div", {
                            className: A().ButtonCtn,
                            children: [
                              !!S &&
                                (0, t.jsx)("div", {
                                  className: i().RemoveIcon,
                                  onClick: (w) => S(W, w),
                                  children: (0, t.jsx)(s.ffu, {}),
                                }),
                              !!y &&
                                (0, t.jsx)("img", {
                                  className: i().RemoveIcon,
                                  src: M.A,
                                  onClick: (w) => y(W, w),
                                }),
                            ],
                          }),
                      ],
                    }),
                    N == c.length &&
                      W == c.length - 1 &&
                      (0, t.jsx)(r, { width: G }),
                  ],
                },
                W,
              ),
            ),
          });
        }
        function r(n) {
          const { width: c } = n;
          return (0, t.jsx)("div", {
            className: A().DragHighlightContainer,
            children: (0, t.jsx)("div", {
              className: A().DragHighlight,
              style: { width: c },
            }),
          });
        }
      },
      51079: (O, T, e) => {
        "use strict";
        e.d(T, { Ay: () => v });
        var t = e(7850),
          u = e(90626),
          D = e(83482),
          p = e(3166),
          M = e(72865),
          g = e(77200);
        function v(i) {
          const { children: s, ...o } = i,
            h = (0, M.n9)(),
            E = u.useMemo(
              () => ({ ...D.Ay.GetDefaultParams(), ...h, ...o }),
              [
                h,
                o.domain,
                o.controller,
                o.method,
                o.submethod,
                o.feature,
                o.depth,
              ],
            );
          return (0, t.jsx)(M.nn, { ...E, children: s });
        }
        function A(i) {
          const { children: s } = i,
            o = React.useMemo(() => CStoreNavEvents.ParseSNR(Config.SNR), []);
          return jsx(NavEventContext, {
            ...CStoreLegacyNavEvents.GetDefaultParams(),
            ...o,
            children: s,
          });
        }
        function m(i) {
          const { children: s } = i,
            o = React.useMemo(
              () => GetOptionalConfigJSON("rgUTMParams", "application_config"),
              [],
            );
          return jsx(A, {
            children: jsx(StoreUTMContext, { ...(o || {}), children: s }),
          });
        }
      },
      19730: (O, T, e) => {
        "use strict";
        e.d(T, { Dq: () => M, NO: () => g, dm: () => p });
        var t = e(84346),
          u = e(39905);
        function D(v, A) {
          const m = A.bUseBinary1K ? 1024 : 1e3,
            i = m * m,
            s = i * m,
            o = s * m;
          return v > o
            ? { nNum: v / o, strPrefix: "Tera" }
            : v > s
              ? { nNum: v / s, strPrefix: "Giga" }
              : v > i
                ? { nNum: v / i, strPrefix: "Mega" }
                : v > m
                  ? { nNum: v / m, strPrefix: "Kilo" }
                  : { nNum: v, strPrefix: "" };
        }
        function p(v, A, m, i) {
          let s = A;
          typeof s == "number"
            ? (s = {
                nDigitsAfterDecimal: A,
                bUseBinary1K: m || m === void 0,
                bValueIsInBytes: !i,
                bValueIsRate: i,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (s = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...s,
              });
          const { nNum: o, strPrefix: h } = D(v, s),
            E = `#${h}${s.bValueIsInBytes ? "bytes" : "bits"}${s.bValueIsRate ? "_PerSecond" : ""}`;
          return u.Z.Localize(
            E,
            o.toLocaleString((0, t.J)(), {
              minimumFractionDigits: s.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: s.nDigitsAfterDecimal,
            }),
          );
        }
        function M(v, A = 0) {
          let m;
          return (
            A && (m = { maximumFractionDigits: A }),
            v ? v.toLocaleString((0, t.J)(), m) : "" + v
          );
        }
        function g(v) {
          return v > 1e9
            ? Math.trunc(v / 1e9).toString() + "B"
            : v > 1e6
              ? Math.trunc(v / 1e6).toString() + "M"
              : v > 1e3
                ? Math.trunc(v / 1e3).toString() + "K"
                : v.toString();
        }
      },
      52249: (O) => {
        O.exports = {
          Results: "_3mK1PrFPrbrn2M-BbAWsmL",
          LoadingContainer: "K7yNfrxTJs0QuoFtUfy0z",
          ResultRow: "_1QyQulOsH0dGeFUVgSa9ki",
          GameName: "_353QhAGCSYbIguu7o4DJgs",
          Label: "_3MUfh3QKRNr6qY0vEz3p04",
          AvatarImageCtn: "_3h9l9X-3dBSAhMflfovg2K",
          AvatarImage: "PBBKP18ULuCWFwYcEIOdW",
          AppSearchInputContainer: "oxxmBMFO82IJEm1H341Wd",
          AppSearchDLCCheckbox: "_1aduni8VCqZVqqDxyXb-pY",
        };
      },
      24089: (O) => {
        O.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      33645: (O) => {
        O.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          HR: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      83164: (O) => {
        O.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
      },
      66901: (O) => {
        O.exports = { bordered_live_stream_icon: "NSb2xMcNnPEMjPi1dr8KB" };
      },
      88376: (O) => {
        O.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      88208: (O) => {
        O.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      75358: (O) => {
        O.exports = {
          PopupScreenshotModal: "_39-iZ5ATgVu0Ji6MD3vGTs",
          PopupScreenshotContainer: "_1yPgn1HBK5eQLrfrG38h1X",
          PopupScreenshot: "_173h7V5UqdDhN-J2O-AKVt",
          ButtonCtn: "_3-4JG-Z1QyDXZaEByxvMvS",
          ButtonIcon: "_15gRxd1hdAQxSunAfg1PZ8",
          Disabled: "_3Mh6I7hT8HViCO91Q5Iech",
        };
      },
      34713: (O) => {
        O.exports = {
          SupportedPlatforms: "_33rQKLUJRiKbr34oQgUJSd",
          PlatformIndicator: "_1POD5IsW1vYfv9B_TuSiBd",
          Windows: "_3xTrz2wDDtzNFR58CQfSNa",
          SteamOS: "_1z6ASwnrVeCtYcPfPjiZZd",
          Mac: "_1FiaJi5I3_8ky2ppYqGqfr",
          DeckCompat: "GFz2Vhq20J9x6lqpaKy2G",
          Fill: "_39zOL0i8BdQ_RV-xE0zXDz",
          SteamDeckCompatLogo: "_2xju2qqP5744ItNt2uvbdT",
          SteamDeckCompatIcon: "_28xj3TU4bHvjyeVhlzCmRV",
          SteamDeckCompatVerified: "_3-OPVQMD-qkvAyt3Jntn9t",
          SteamDeckCompatPlayable: "_1EMxxDePjZh_-E7AH0yDym",
          SteamDeckCompatUnsupported: "_2qziiy9xhD4mLc1OgxQAAy",
          SteamDeckCompatUnknown: "I6YFAbL_5IYOTtedVwwPV",
          SteamOSCompatCompatible: "_2fVV0WviM21gsBt1Iz-Htx",
        };
      },
      8743: (O) => {
        O.exports = {
          ArtPreview: "_3793xvP87t1rZYbAQDC1pG",
          ArtNoArt: "_3WxfzmFYwb-rh8sn5VMFMl",
        };
      },
      48576: (O) => {
        O.exports = {
          StatusLineItemCtn: "V5SWm2fiBKJqCbPn7bpC0",
          StatusIcon: "_1DFlt9vB8DfZc84ZeQcrgT",
          StatusIconDone: "K_JWTc7pXC9lechbL_JMT",
          StatusNotDone: "zl6s26pUkMfMXmoMlJstY",
        };
      },
      33924: (O) => {
        O.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      91291: (O) => {
        O.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
          TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
          TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
          Reason: "_2h0GKAYcXRP10ryZHFn79d",
          StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
          FadeIn: "_1xh0S-u1cc7_ADm8OLsN-i",
          fadeIn: "cEYXuP-T4izqJqayIpH0D",
          BackgroundAnimation: "_2_vb1-Pr1-2Gblfyxj023k",
          "ItemFocusAnim-darkerGrey-nocolor": "op3gqmHyESfHpHgPheRVq",
          "ItemFocusAnim-darkerGrey": "_12l58v9-cJk-169Qesl-e5",
          "ItemFocusAnim-darkGreySettings": "_2cAK7l3w0qC8uv5uzKjusc",
          "ItemFocusAnim-darkGrey": "_2uLjKVdzQQCodi_XH5ZPfi",
          "ItemFocusAnim-grey": "_3Za5duiaOuAcNrQJeEpjxD",
          "ItemFocusAnim-translucent-white-10": "_3wyVPtc4dD1Msi7wqRvJq3",
          "ItemFocusAnim-translucent-white-20": "_2v6guEab39IMo3I1kfiwXc",
          "ItemFocusAnimBorder-darkGrey": "_3SS0MMDROpRbR_hYLVjAcl",
          "ItemFocusAnim-green": "_3qjU-9ZS6bDpjjMAOYUhGm",
          focusAnimation: "_3-bYSIZZNIWgiOR__mB2jd",
          hoverAnimation: "_39oPHCcA4NgTm53rnykAtP",
        };
      },
      15736: (O) => {
        O.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      58855: (O) => {
        O.exports = {
          CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
          CompatIconFrame: "_3E70dZ6hSfFCmskaIzbgJp",
        };
      },
      67523: (O) => {
        O.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
      },
      21038: (O) => {
        O.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      41609: (O) => {
        O.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7331],
    {
      38805: (r0, t0, n) => {
        "use strict";
        n.r(t0), n.d(t0, { default: () => L2 });
        var c = n(7850),
          o = n(68031),
          x = n(60351),
          V = n(75083),
          u = n(90626);
        const K = u.createContext({ steamidOwner: void 0 });
        function L() {
          return u.useContext(K).steamidOwner;
        }
        function c0(t) {
          const { steamidOwner: l, children: e } = t,
            a = u.useMemo(() => ({ steamidOwner: l }), [l]);
          return (0, c.jsx)(K.Provider, { value: a, children: e });
        }
        var W = n(3877),
          f = n(71989),
          p = n(15252),
          g = n(17508),
          y = n(72609);
        function G(t) {
          if (!t) return k_ECurrencyCodeInvalid;
          const l = parseInt(t);
          return isNaN(l) ? k_ECurrencyCodeInvalid : l - 2e3;
        }
        function J(t, l) {
          const {
              asset_description: e,
              hash_name: a,
              sell_listings: v,
              buy_listings: T,
              sell_ecurrency: R = 0,
              sell_price: F,
              buy_price: v0,
              filter_for_result: K0,
              publisher_fee: v1,
              steam_fee: i1,
            } = t,
            T2 = e != null && e.appid ? l[e.appid] : void 0;
          return T2
            ? {
                strHash: a,
                cSellOrders: v || 0,
                cBuyOrders: T || 0,
                unSteamFee: i1 ? parseInt(i1) : void 0,
                unPublisherFee: v1 ? parseInt(v1) : void 0,
                eCurrency: R,
                strMinSellSubtotal: l0(parseInt(F || "0"), R),
                asset_description: e,
                app: T2,
              }
            : null;
        }
        function l0(t, l) {
          return Intl.NumberFormat(GetDisplayLanguage().strISOCode, {
            style: "currency",
            currency: ECurrencyCodeToASCIICurrencyCode(l),
          }).format(t / 100);
        }
        function I0(t) {
          const { rgCompactBuyOrders: l, rgCompactSellOrders: e, ...a } = t,
            v = (T) => {
              if (T.length === 0) return [];
              if (
                (AssertMsg(
                  T.length % 2 === 0,
                  "Incomplete order book data, dropping last data point",
                ),
                T.length === 1)
              )
                return [];
              const R = [];
              for (let F = 1; F < T.length; F += 2)
                R.push({ price: T[F - 1], quantity: T[F] });
              return R;
            };
          return { ...a, rgBuyOrders: v(l), rgSellOrders: v(e) };
        }
        function h(t) {
          const { enhanced_appearances: l, description: e } = t;
          return (l == null ? void 0 : l.length) > 0 ? l[0].url : Q(e);
        }
        function Q(t) {
          const { icon_url: l, icon_url_large: e } = t;
          return B(e || l);
        }
        function B(t) {
          return `${y.TS.COMMUNITY_CDN_URL}economy/image/${t}`;
        }
        function A(t) {
          return P(t, Config.COUNTRY);
        }
        function P(t, l) {
          const e = t.market_buy_country_restriction;
          return !e || typeof e != "string" ? !1 : e.split(",").includes(l);
        }
        function S(t) {
          return m(t, Config.COUNTRY);
        }
        function m(t, l) {
          const e = t.market_sell_country_restriction;
          return !e || typeof e != "string" ? !1 : e.split(",").includes(l);
        }
        var N = n(72604),
          z = n(35038),
          U = n(38636),
          h0 = n(68312),
          H = n(76617),
          L0 = n(88942),
          z0 = n(58632),
          M0 = n.n(z0);
        function w0(t, l) {
          const e = (0, h0.KV)(),
            a = D0(e, t, y.TS.LANGUAGE);
          return (0, L0.I)(H0(a, t, l));
        }
        function H0(t, l, e) {
          const a = `${e == null ? void 0 : e.classid}_${e == null ? void 0 : e.instanceid}`;
          return {
            queryKey: ["AssetClassInfo", l, a],
            queryFn: async () => t.load(a),
            enabled: !!e && !!e.classid,
          };
        }
        function D0(t, l, e, a = U.tB.GetAssetClassInfo) {
          return (0, H.V)(`AssetClassInfo_${l}_${e}`, () => O0(t, l, e, a));
        }
        function O0(t, l, e, a = U.tB.GetAssetClassInfo) {
          return new (M0())(async (v) => {
            var T;
            let R = z.w.Init(U.qp);
            R.Body().set_language(e),
              R.Body().set_appid(l),
              v.forEach((v0) => {
                const [K0, v1] = v0.split("_"),
                  i1 = R.Body().add_classes();
                i1.set_classid(K0), i1.set_instanceid(v1);
              });
            const F = await a(t, R);
            if (F.GetEResult() != N.R)
              throw `Error loading econ items: ${F.GetErrorMessage()}`;
            return (T = F.Body().toObject().descriptions) != null ? T : [];
          });
        }
        var d0 = n(84909),
          X0 = n(86048);
        function J0(t) {
          const { children: l, ...e } = t,
            a = u.useRef(null),
            v = u.useCallback(() => `${N0}px`, []),
            T = u.useCallback((K0) => {
              const v1 = a.current;
              if (v1 && K0.deltaY != 0) {
                const i1 = v1.scrollTop;
                v1.scrollBy({ top: K0.deltaY }),
                  v1.scrollTop != i1 && K0.preventDefault();
              }
            }, []),
            R = (0, X0.xA)("wheel", T, { passive: !1 }),
            [F, v0] = u.useState(!1);
          return (0, c.jsxs)(d0.AM.Root, {
            open: F,
            onOpenChange: v0,
            width: v,
            placement: "right",
            presentation: "anchor",
            interactions: { hover: (K0) => ({ ...K0, delay: 250 }) },
            children: [
              (0, c.jsx)(d0.AM.Anchor, {
                children: u.cloneElement(l, { ref: R }),
              }),
              (0, c.jsx)(d0.AM.Positioner, {
                children: (0, c.jsx)(x.az, {
                  marginX: "2",
                  children: (0, c.jsx)(Z0, { ...e, refHover: a }),
                }),
              }),
            ],
          });
        }
        const N0 = 346;
        function Z0(t) {
          var l;
          const {
            description: e,
            asset: a,
            bHideImage: v = !1,
            refHover: T,
          } = t;
          let R,
            F = e == null ? void 0 : e.appid;
          "identifiers" in t &&
            ((R = t.identifiers), (F = (l = R.appid) != null ? l : F));
          const { data: v0 } = w0(F, e ? void 0 : R),
            K0 = e != null ? e : v0;
          return K0
            ? (0, c.jsx)(I.Root, {
                description: K0,
                asset: a,
                bInteractable: !1,
                children: (0, c.jsxs)(I.Container, {
                  maxHeight: "90vh",
                  overflow: "auto",
                  ref: T,
                  children: [
                    (0, c.jsxs)(I.Content, {
                      children: [
                        !v &&
                          (0, c.jsxs)(c.Fragment, {
                            children: [
                              (0, c.jsx)(I.Image, {}),
                              (0, c.jsx)(I.Separator, {}),
                            ],
                          }),
                        (0, c.jsx)(I.Name, {}),
                        (0, c.jsx)(I.GameInfo, {}),
                        (0, c.jsx)(I.Descriptions, {}),
                        (0, c.jsx)(I.AssetAccessories, {}),
                        (0, c.jsx)(I.OwnerDescriptions, {}),
                        (0, c.jsx)(I.Tags, {}),
                        (0, c.jsx)(I.AssetProperties, {}),
                      ],
                    }),
                    (0, c.jsx)(I.SellOnMarket, {}),
                  ],
                }),
              })
            : null;
        }
        var s1 = n(29385);
        function q0(t) {
          const l = useActiveServiceTransport();
          return useQuery(r1(l, t, Config.LANGUAGE));
        }
        function o1(t, l = y.TS.LANGUAGE) {
          const e = (0, h0.KV)(),
            a = (0, s1.jE)();
          return (0, L0.I)({ ...V1(a, e, t, l), enabled: !!t });
        }
        function V1(t, l, e, a) {
          return {
            queryKey: ["AssetPropertySchemaMap", e, a],
            queryFn: async () => {
              const v = await t.fetchQuery(r1(l, e, a)),
                T = new Map();
              return v.property_schemas.forEach((R) => T.set(R.id, R)), T;
            },
          };
        }
        function r1(t, l, e) {
          return {
            queryKey: ["AssetPropertySchema", l, e],
            queryFn: async () => {
              var a;
              const v = await U.tB.GetAssetPropertySchema(t, {
                appid: l,
                language: e,
              });
              if (!v.BSuccess() && v.GetEResult() != N.p)
                throw `Error loading asset properties for ${l}: ${v.GetErrorMessage()}`;
              return {
                property_schemas:
                  (a = v.Body().toObject().property_schemas) != null ? a : [],
              };
            },
          };
        }
        var S1 = n(37901);
        const C0 = {};
        (C0.arabic = () => n.e(9611).then(n.t.bind(n, 11992, 19))),
          (C0.brazilian = () => n.e(2087).then(n.t.bind(n, 92087, 19))),
          (C0.bulgarian = () => n.e(1472).then(n.t.bind(n, 41472, 19))),
          (C0.czech = () => n.e(7430).then(n.t.bind(n, 17430, 19))),
          (C0.danish = () => n.e(7498).then(n.t.bind(n, 37498, 19))),
          (C0.dutch = () => n.e(6847).then(n.t.bind(n, 16847, 19))),
          (C0.english = () => n.e(9474).then(n.t.bind(n, 87093, 19))),
          (C0.finnish = () => n.e(610).then(n.t.bind(n, 610, 19))),
          (C0.french = () => n.e(4731).then(n.t.bind(n, 84731, 19))),
          (C0.german = () => n.e(3385).then(n.t.bind(n, 3385, 19))),
          (C0.greek = () => n.e(6389).then(n.t.bind(n, 6389, 19))),
          (C0.hungarian = () => n.e(4100).then(n.t.bind(n, 34100, 19))),
          (C0.indonesian = () => n.e(1559).then(n.t.bind(n, 21559, 19))),
          (C0.italian = () => n.e(2965).then(n.t.bind(n, 22965, 19))),
          (C0.japanese = () => n.e(9732).then(n.t.bind(n, 19732, 19))),
          (C0.koreana = () => n.e(6766).then(n.t.bind(n, 76766, 19))),
          (C0.latam = () => n.e(182).then(n.t.bind(n, 40182, 19))),
          (C0.malay = () => n.e(8597).then(n.t.bind(n, 88597, 19))),
          (C0.norwegian = () => n.e(5353).then(n.t.bind(n, 5353, 19))),
          (C0.polish = () => n.e(8926).then(n.t.bind(n, 58926, 19))),
          (C0.portuguese = () => n.e(8374).then(n.t.bind(n, 8374, 19))),
          (C0.romanian = () => n.e(7752).then(n.t.bind(n, 77752, 19))),
          (C0.russian = () => n.e(8128).then(n.t.bind(n, 28128, 19))),
          (C0.sc_schinese = () => n.e(5610).then(n.t.bind(n, 55610, 19))),
          (C0.schinese = () => n.e(2787).then(n.t.bind(n, 62787, 19))),
          (C0.spanish = () => n.e(8549).then(n.t.bind(n, 28549, 19))),
          (C0.swedish = () => n.e(6052).then(n.t.bind(n, 56052, 19))),
          (C0.tchinese = () => n.e(2352).then(n.t.bind(n, 2352, 19))),
          (C0.thai = () => n.e(9365).then(n.t.bind(n, 19365, 19))),
          (C0.turkish = () => n.e(125).then(n.t.bind(n, 90125, 19))),
          (C0.ukrainian = () => n.e(1071).then(n.t.bind(n, 61071, 19))),
          (C0.vietnamese = () => n.e(1716).then(n.t.bind(n, 61716, 19)));
        async function M1(t) {
          if (C0[t]) return C0[t]();
        }
        const w = (0, S1.l)(M1),
          j = w.Localize;
        var Y = n(84346);
        const $ = { Label: o0, Value: j0 };
        function i0(t) {
          const { appid: l, property: e, ...a } = t,
            { data: v } = o1(l),
            T = v == null ? void 0 : v.get(e.propertyid);
          return !T || T.hide_from_description
            ? null
            : (0, c.jsx)(p.EY, {
                as: "div",
                ...a,
                children: w.LocalizeReact(
                  "#ItemDescription_AssetPropertyLabelColonValue",
                  T.localized_label,
                  (0, c.jsx)(p.EY, {
                    whiteSpace: "pre-wrap",
                    children: (0, c.jsx)(j0, { property: e }),
                  }),
                ),
              });
        }
        const m0 = Object.assign(i0, $);
        function o0(t) {
          const { appid: l, property: e } = t,
            { data: a } = o1(l),
            v = a == null ? void 0 : a.get(e.propertyid);
          return v ? v.localized_label : null;
        }
        function j0(t) {
          const { property: l } = t;
          if (l.float_value !== void 0) {
            const e =
              typeof l.float_value == "string"
                ? parseFloat(l.float_value)
                : l.float_value;
            let a = 9;
            return (
              e > 0 &&
                (e < 1e-28
                  ? (a = 47)
                  : e < 1e-18
                    ? (a = 35)
                    : e < 1e-12
                      ? (a = 21)
                      : e < 1e-5 && (a = 15)),
              e.toLocaleString((0, Y.J)(), { maximumFractionDigits: a })
            );
          } else
            return l.int_value !== void 0
              ? Number(l.int_value).toLocaleString((0, Y.J)())
              : l.string_value !== void 0
                ? l.string_value
                : null;
        }
        function X(t) {
          const { appid: l, accessory: e } = t,
            { data: a } = w0(l, {
              classid: e.classid,
              instanceid: e.instanceid || "0",
            }),
            v = e.description || a;
          if (!v) return null;
          const T = e.parent_relationship_properties || [],
            R = e.standalone_properties || [];
          return (0, c.jsx)(J0, {
            description: v,
            children: (0, c.jsx)("a", {
              className: (0, W.T)(),
              href: g.N.Item(l, v.market_bucket_group_id || v.market_hash_name),
              children: (0, c.jsxs)(o.s, {
                align: "center",
                gap: { initial: "1", sm: "3" },
                padding: "2",
                background: "dull-7",
                minWidth: "0",
                cursor: "pointer",
                "border-radius": "2",
                children: [
                  (0, c.jsx)(f._, {
                    maxWidth: "48px",
                    maxHeight: "48px",
                    objectFit: "contain",
                    src: Q(v),
                    alt: "",
                  }),
                  (0, c.jsxs)(x.az, {
                    minWidth: "0",
                    children: [
                      (0, c.jsx)(p.EY, { lineClamp: 3, children: v.name }),
                      T.map((F) =>
                        (0, c.jsx)(O, { appid: l, property: F }, F.propertyid),
                      ),
                      R.map((F) =>
                        (0, c.jsx)(O, { appid: l, property: F }, F.propertyid),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function O(t) {
          return (0, c.jsx)(m0, {
            ...t,
            size: { initial: "1", sm: "2" },
            contrast: "note",
          });
        }
        var G0 = n(86336),
          U0 = n(24642);
        function e1(t, l) {
          return t.name_color ? `#${t.name_color}` : l;
        }
        function C1(t, l, e) {
          const a =
              typeof (l == null ? void 0 : l.amount) == "string"
                ? parseInt(l.amount)
                : l == null
                  ? void 0
                  : l.amount,
            v = e || t.name;
          return (a && a > 1 ? `${(0, U0.D)(a)} ` : "") + v;
        }
        function T1(t) {
          const {
              description: l,
              asset: e,
              nameOverride: a,
              colorOverride: v,
              style: T = {},
              ...R
            } = t,
            F = v || e1(l);
          return (0, c.jsx)(p.EY, {
            contrast: "note",
            ...R,
            style: { ...(T != null ? T : {}), color: F },
            children: C1(l, e, a),
          });
        }
        function u1(t) {
          const {
              description: l,
              asset: e,
              nameOverride: a,
              colorOverride: v,
              style: T = {},
              ...R
            } = t,
            F = v || e1(l);
          return (0, c.jsx)(G0.Y, {
            contrast: "note",
            underline: "hover",
            ...R,
            style: { ...(T != null ? T : {}), color: F },
            children: C1(l, e, a),
          });
        }
        function Q0(t) {
          var l;
          const e = t.context.itemDescription;
          if (!((l = e.container_properties) != null && l.contained_items))
            return null;
          const a = e.appid,
            v = e.container_properties.contained_items;
          return (0, c.jsx)("ul", {
            children: v.map((T, R) =>
              (0, c.jsx)($0, { appid: a, contained_item: T }, R),
            ),
          });
        }
        function A0(t) {
          var l, e;
          const a = t.context.itemDescription,
            v = parseInt(t.args.index || "-1");
          let T;
          (l = a.container_properties) != null &&
            l.contained_items &&
            v >= 0 &&
            v < a.container_properties.contained_items.length &&
            (T = a.container_properties.contained_items[v]);
          const R = a.appid,
            F = (e = t.children) == null ? void 0 : e.toString(),
            v0 = t.context.line.color && `#${t.context.line.color}`,
            { data: K0 } = w0(R, T);
          return T
            ? K0
              ? (0, c.jsx)(
                  _0,
                  {
                    appid: R,
                    description: K0,
                    nameOverride: F,
                    colorOverride: v0,
                  },
                  v,
                )
              : F
                ? (0, c.jsx)(T1, {
                    description: {},
                    nameOverride: F,
                    colorOverride: v0,
                  })
                : null
            : null;
        }
        function $0(t) {
          const { appid: l, contained_item: e } = t,
            { data: a } = w0(l, e);
          return a
            ? (0, c.jsx)("li", {
                children: (0, c.jsx)(_0, { appid: l, description: a }),
              })
            : null;
        }
        function _0(t) {
          const {
            appid: l,
            description: e,
            nameOverride: a,
            colorOverride: v,
          } = t;
          return (0, c.jsx)(J0, {
            description: e,
            children:
              e.marketable && e.market_hash_name
                ? (0, c.jsx)(u1, {
                    description: e,
                    href: g.N.Item(
                      l,
                      e.market_bucket_group_id || e.market_hash_name,
                    ),
                    nameOverride: a,
                    colorOverride: v,
                  })
                : (0, c.jsx)(T1, {
                    description: e,
                    nameOverride: a,
                    colorOverride: v,
                  }),
          });
        }
        function p1(t, l) {
          var e, a;
          return (e = t == null ? void 0 : t.public_data) != null &&
            e.profile_url
            ? `${y.TS.COMMUNITY_BASE_URL}id/${t.public_data.profile_url}`
            : l2(
                ((a = t == null ? void 0 : t.public_data) == null
                  ? void 0
                  : a.steamid) || l,
              );
        }
        function l2(t) {
          return t ? `${y.TS.COMMUNITY_BASE_URL}profiles/${t}` : "";
        }
        var E1 = n(20117),
          o2 = n(85978);
        function V2(t) {
          var l, e;
          const a = parseInt(
              (e = (l = t.children) == null ? void 0 : l.toString()) != null
                ? e
                : "0",
            ),
            v = E1.b2
              .InitFromAccountID(a, y.TS.EUNIVERSE)
              .ConvertTo64BitString(),
            { data: T, isLoading: R } = (0, o2.jn)(v);
          if (!T && R) return null;
          const F = p1(T, v);
          return (0, c.jsx)(G0.Y, {
            href: F,
            "data-miniprofile": a,
            children: T ? T.public_data.persona_name : a,
          });
        }
        var g1 = n(96232),
          U1 = n(7487),
          a2 = n(52574),
          S2 = n(91937),
          M2 = n(59443),
          W1 = n(49144);
        function z1(t) {
          const { itemDescription: l, line: e, bbcode: a = "" } = t,
            v = u.useMemo(() => {
              const R = (v0) => new U1.R8(),
                F = {
                  ...a2.L,
                  ...W1.I,
                  ...S2.F,
                  url: { Constructor: M2._r },
                  container_item_list: { Constructor: Q0 },
                  container_item: { Constructor: A0 },
                  persona: { Constructor: V2 },
                  date: { Constructor: h1 },
                };
              return new g1.B(F, R, y.TS.LANGUAGE);
            }, []),
            T = u.useMemo(() => ({ itemDescription: l, line: e }), [l, e]);
          return u.useMemo(() => v.ParseBBCode(a, T), [v, a, T]);
        }
        function h1(t) {
          var l, e;
          const a = parseInt(
            (e = (l = t.children) == null ? void 0 : l.toString()) != null
              ? e
              : "0",
          );
          return a ? new Date(a * 1e3).toLocaleString((0, Y.J)()) : null;
        }
        var Y1 = n(41773);
        const y1 = u.createContext(void 0);
        function r2(t) {
          const {
              description: l,
              asset: e,
              bInteractable: a = !0,
              listingID: v,
              children: T,
            } = t,
            R = u.useMemo(
              () => ({
                description: l,
                asset: e,
                bInteractable: a,
                listingID: v,
              }),
              [l, e, a, v],
            );
          return (0, c.jsx)(y1.Provider, { value: R, children: T });
        }
        function c1() {
          return u.useContext(y1).description;
        }
        function d1() {
          return u.useContext(y1).asset;
        }
        function I1() {
          return u.useContext(y1).bInteractable;
        }
        function L1() {
          return u.useContext(y1).listingID;
        }
        var $1 = n(64868);
        function i2(t) {
          const { action: l } = t,
            e = d1();
          if (!e) return null;
          const a = l.link.match(
              /GetGooValue\(\s*'?[^']*'?\s*,\s*'?[^']*'?\s*,\s*'?(?<appid>[0-9]+)'?\s*,\s*'?(?<item_type>[0-9]+)'?\s*,\s*'?(?<border_color>[0-9]+)'?/,
            ),
            v = a == null ? void 0 : a.groups,
            { contextid: T, assetid: R } = e;
          if (
            !v ||
            !R ||
            (e == null ? void 0 : e.appid) != 753 ||
            T != "6" ||
            !v.appid ||
            !v.item_type
          )
            return null;
          const { appid: F, item_type: v0, border_color: K0 } = v;
          return (0, c.jsx)(K1, {
            contextid: T,
            assetid: R,
            appid: parseInt(F),
            item_type: parseInt(v0),
            border_color: parseInt(K0),
          });
        }
        function K1(t) {
          var l;
          const {
              contextid: e,
              assetid: a,
              appid: v,
              item_type: T,
              border_color: R,
            } = t,
            { data: F, isLoading: v0 } = v2(v, T, R);
          return F === void 0 && !v0
            ? null
            : (0, c.jsxs)(o.s, {
                background: "sky-3",
                padding: "2",
                gapY: "2",
                direction: "column",
                align: "start",
                marginTop: "2",
                children: [
                  (0, c.jsx)(p.EY, {
                    as: "div",
                    contrast: "body",
                    children: w.LocalizeReact(
                      "#ItemDescription_ThisItemIsWorthGems",
                      (0, c.jsx)(p.EY, {
                        color: "sky-11",
                        children: w.Localize(
                          "#ItemDescription_XGems",
                          (l =
                            F == null
                              ? void 0
                              : F.toLocaleString((0, Y.J)())) != null
                            ? l
                            : "",
                        ),
                      }),
                    ),
                  }),
                  (0, c.jsx)(V.$, {
                    color: "green",
                    onClick: () => window.GrindIntoGoo(v, e, a),
                    size: "1",
                    children: j("#ItemDescription_TurnIntoGemsButton"),
                  }),
                  (0, c.jsx)(p.EY, {
                    as: "div",
                    contrast: "body",
                    children: (0, $1.xh)(
                      j("#ItemDescription_GemDescription"),
                      (0, c.jsx)(G0.Y, {
                        underline: "auto",
                        color: "greyneutral-12",
                        href: `${y.TS.COMMUNITY_BASE_URL}tradingcards/boostercreator/`,
                      }),
                    ),
                  }),
                ],
              });
        }
        function v2(t, l, e) {
          return (0, L0.I)({
            queryKey: ["GetGooValue", t, l, e],
            queryFn: async () => {
              const a = new URLSearchParams({
                  appid: t.toString(),
                  item_type: l.toString(),
                  border_color: e.toString(),
                }),
                v = `${y.TS.COMMUNITY_BASE_URL}auction/ajaxgetgoovalueforitemtype/?${a.toString()}`,
                R = await (await fetch(v, { method: "GET" })).json();
              if ("goo_value" in R) return R.goo_value;
              throw "Error querying goo value";
            },
            retry: !1,
          });
        }
        function h2() {
          const t = c1(),
            l = I1(),
            { actions: e } = t;
          return l ? e && (0, c.jsx)(P1, { actions: e }) : null;
        }
        function d2() {
          const t = c1(),
            l = I1(),
            { owner_actions: e } = t;
          return l ? e && (0, c.jsx)(P1, { actions: e }) : null;
        }
        function u2() {
          const t = c1(),
            l = I1(),
            { market_actions: e } = t;
          return l ? e && (0, c.jsx)(P1, { actions: e }) : null;
        }
        function P1(t) {
          const { actions: l } = t,
            [e, a] = u.useMemo(() => {
              let v = [],
                T = [];
              return (
                l.forEach((R, F) => {
                  var v0;
                  (v0 = R.link) != null &&
                  v0.startsWith("javascript:GetGooValue")
                    ? T.push((0, c.jsx)(i2, { action: R }, F))
                    : v.push((0, c.jsx)(w1, { action: R }, F));
                }),
                [v, T]
              );
            }, [l]);
          return (0, c.jsxs)(c.Fragment, {
            children: [
              e && (0, c.jsx)(o.s, { wrap: "wrap", gap: "2", children: e }),
              a,
            ],
          });
        }
        function w1(t) {
          const l = L(),
            e = c1(),
            a = d1(),
            v = L1();
          return (0, c.jsx)(f2, {
            ...t,
            ownerSteamID: l,
            description: e,
            asset: a,
            listingID: v,
          });
        }
        function f2(t) {
          const {
              action: l,
              description: e,
              asset: a,
              ownerSteamID: v,
              listingID: T,
            } = t,
            R = J1(l.link, e, a, v, T);
          if (R.startsWith("javascript:")) {
            const F = R.substring(11),
              v0 = new Function(F);
            return (0, c.jsx)(V.$, {
              onClick: v0,
              size: "1",
              color: "dull",
              children: l.name,
            });
          } else
            return (0, c.jsx)(V.v, {
              href: R,
              size: "1",
              color: "dull",
              children: l.name,
            });
        }
        function J1(t, l, e, a, v) {
          var T, R;
          let F = t
            .replace(
              /%assetid%/,
              (T = e == null ? void 0 : e.assetid) != null ? T : "",
            )
            .replace(
              /%contextid%/,
              (R = e == null ? void 0 : e.contextid) != null ? R : "",
            )
            .replace(/%owner_steamid%/, a != null ? a : "")
            .replace(/%listingid%/, v != null ? v : "");
          return (
            e != null &&
              e.asset_properties &&
              e.asset_properties.forEach((v0) => {
                let K0 = "";
                v0.float_value !== void 0
                  ? (K0 = v0.float_value.toString())
                  : v0.int_value !== void 0
                    ? (K0 = v0.int_value.toString())
                    : v0.string_value !== void 0 && (K0 = v0.string_value),
                  (F = F.replace(`%propid:${v0.propertyid}%`, K0));
              }),
            (F = F.replace(/%propid:[0-9]+%/, "")),
            F
          );
        }
        function k1(t) {
          const {
            description: l,
            asset: e,
            type: a = "descriptions",
            ...v
          } = t;
          let T = l[a];
          if ((0, Y1.PC)(l.appid) && T) {
            let R = !1;
            T = T.filter((F) =>
              F.name === "keychain_info" ||
              F.name === "sticker_info" ||
              (F.name === "blank" && R)
                ? !1
                : ((R = F.name === "blank"), !0),
            );
          }
          return (0, c.jsx)(o.s, {
            direction: "column",
            children:
              T == null
                ? void 0
                : T.map((R, F) =>
                    (0, c.jsx)(
                      p2,
                      { line: R, description: l, asset: e, ...v },
                      F,
                    ),
                  ),
          });
        }
        function p2(t) {
          var l, e;
          const { line: a, description: v, asset: T, ...R } = t,
            F = {
              as: "div",
              ...R,
              whiteSpace: "pre-line",
              style: { color: a.color ? `#${a.color}` : void 0 },
            };
          let v0 =
            (e = (l = a.value) == null ? void 0 : l.trim()) != null ? e : "";
          switch ((v0 || (v0 = "\xA0"), (v0 = J1(v0, v, T)), a.type)) {
            case "html":
              return (0, c.jsx)(p.EY, {
                ...F,
                children: (0, c.jsx)("span", {
                  style: { display: "contents" },
                  dangerouslySetInnerHTML: { __html: v0 },
                }),
              });
            case "bbcode":
              return (0, c.jsx)(p.EY, {
                ...F,
                children: (0, c.jsx)(z1, {
                  itemDescription: v,
                  line: a,
                  bbcode: v0,
                }),
              });
            default:
              return (0, c.jsx)(p.EY, { ...F, children: v0 });
          }
        }
        var Z1 = n(43694);
        function Q1() {
          return (0, c.jsxs)(x.az, {
            position: "relative",
            title: j("#ItemDescription_ListedItemTooltip"),
            children: [
              (0, c.jsx)(x.az, {
                className: Z1.ListedItemLabel,
                children: j("#ItemDescription_ListedItem"),
              }),
              (0, c.jsx)(f._, {
                className: Z1.ListedItemIcon,
                alt: j("#ItemDescription_ListedItem"),
                src: `${y.TS.COMMUNITY_CDN_URL}public/images/economy/listed_on_market.png`,
              }),
            ],
          });
        }
        var X1 = n(33220);
        function q1() {
          const t = c1(),
            l = d1(),
            e = I1(),
            a = (0, X1.rt)(y.iA.country_code),
            v = !!t.sealed && t.sealed_type == 1;
          if (!t.marketable && t.sealed_type != 1) return null;
          const T = t.market_hash_name || t.market_name || t.name;
          return T
            ? (0, c.jsx)(_1, {
                eWalletCurrency: a,
                appid: t.appid,
                hashName: T,
                bCanInteract: e,
                bItemSealed: v,
                assetid: l == null ? void 0 : l.assetid,
              })
            : null;
        }
        function _1(t) {
          const {
              eWalletCurrency: l,
              appid: e,
              hashName: a,
              bCanInteract: v,
              bItemSealed: T,
              assetid: R,
            } = t,
            { data: F, isLoading: v0 } = i(l, e, a);
          return !v &&
            !(F != null && F.lowest_price) &&
            !(F != null && F.volume) &&
            !v0
            ? null
            : T
              ? (0, c.jsx)(o.s, {
                  background: "greyneutral-3",
                  padding: "4",
                  gapY: "3",
                  direction: "column",
                  children: (0, c.jsx)(V.v, {
                    color: "dull",
                    href: `${y.TS.COMMUNITY_BASE_URL}market/listings/${e}/${encodeURIComponent(a)}${R ? `?sellorderassetid=${R}` : ""}`,
                    size: "1",
                    children: j("#SellOnMarket_ViewListing"),
                  }),
                })
              : (0, c.jsxs)(o.s, {
                  background: "greyneutral-3",
                  padding: "4",
                  gapY: "3",
                  direction: "column",
                  children: [
                    (0, c.jsx)(g2, { isLoading: v0, priceOverview: F }),
                    v &&
                      (0, c.jsx)(V.v, {
                        size: "1",
                        color: "dull",
                        href: `${y.TS.COMMUNITY_BASE_URL}market/listings/${e}/${encodeURIComponent(a)}`,
                        children: j("#SellOnMarket_View"),
                      }),
                    v && !T && (0, c.jsx)(c2, {}),
                  ],
                });
        }
        function g2(t) {
          const { isLoading: l, priceOverview: e } = t;
          return !l &&
            !(e != null && e.lowest_price) &&
            !(e != null && e.volume)
            ? null
            : (0, c.jsxs)(x.az, {
                paddingStart: "3",
                children: [
                  (0, c.jsx)(p.EY, {
                    as: "div",
                    children:
                      e != null && e.lowest_price
                        ? j("#SellOnMarket_LowestPrice", e.lowest_price)
                        : "\xA0",
                  }),
                  (0, c.jsx)(p.EY, {
                    as: "div",
                    children:
                      e != null && e.volume
                        ? j("#SellOnMarket_Volume", e.volume)
                        : "\xA0",
                  }),
                ],
              });
        }
        function c2() {
          const t = L();
          return !y.iA.logged_in || !t || t != y.iA.steamid
            ? null
            : (0, c.jsx)(x.az, {
                children: (0, c.jsx)(V.$, {
                  color: "green",
                  onClick: () => window.SellCurrentSelection(),
                  size: "1",
                  children: j("#SellOnMarket_SellThisItem"),
                }),
              });
        }
        function i(t, l, e) {
          return (0, L0.I)(r(t, l, e));
        }
        function r(t, l, e) {
          return {
            queryKey: ["MarketPriceOverview", t, l, e],
            queryFn: async () => {
              const a = new URLSearchParams({
                  country: y.iA.country_code,
                  currency: t.toString(),
                  appid: l.toString(),
                  market_hash_name: e,
                }),
                v = `${y.TS.COMMUNITY_BASE_URL}market/priceoverview/?${a.toString()}`;
              return await (await fetch(v, { method: "GET" })).json();
            },
          };
        }
        var d = n(11685);
        function C() {
          return (0, c.jsxs)(x.az, {
            position: "relative",
            title: j("#ItemDescription_TradeProtectedTooltip"),
            children: [
              (0, c.jsx)(x.az, {
                className: d.TradeProtectionLabel,
                children: j("#ItemDescription_TradeProtected"),
              }),
              (0, c.jsx)(f._, {
                className: d.TradeProtectionIcon,
                alt: j("#ItemDescription_TradeProtected"),
                src: `${y.TS.COMMUNITY_CDN_URL}public/images/economy/protected_items_badge2.png`,
              }),
            ],
          });
        }
        var M = n(17171),
          E = n(34771),
          Z = n(3367),
          n0 = n(21721),
          a0 = n(27894),
          k = n(40358),
          e0 = n(45179);
        const b0 = {
          Root: r2,
          Container: f1,
          Content: D1,
          Image: H1,
          Separator: m2,
          Name: n2,
          FraudWarnings: m1,
          GameInfo: x2,
          GameName: e2,
          Descriptions: g0,
          Actions: h2,
          OwnerDescriptions: E0,
          OwnerActions: d2,
          MarketActions: u2,
          Tags: B0,
          AssetProperties: F1,
          AssetAccessories: t2,
          SellOnMarket: q1,
        };
        function k0(t) {
          const {
            description: l,
            asset: e,
            bInteractable: a = !0,
            bIncludeMarketInfo: v = !0,
          } = t;
          return (0, c.jsx)(I.Root, {
            description: l,
            asset: e,
            bInteractable: a,
            children: (0, c.jsxs)(I.Container, {
              children: [
                (0, c.jsxs)(I.Content, {
                  children: [
                    (0, c.jsx)(I.Image, {}),
                    (0, c.jsx)(I.Separator, {}),
                    (0, c.jsx)(I.Name, {}),
                    (0, c.jsx)(I.FraudWarnings, {}),
                    (0, c.jsx)(I.GameInfo, {}),
                    (0, c.jsx)(I.Descriptions, {}),
                    (0, c.jsx)(I.AssetAccessories, {}),
                    (0, c.jsx)(I.Actions, {}),
                    (0, c.jsx)(I.OwnerDescriptions, {}),
                    (0, c.jsx)(I.OwnerActions, {}),
                    (0, c.jsx)(I.Tags, {}),
                    (0, c.jsx)(I.AssetProperties, {}),
                  ],
                }),
                v && (0, c.jsx)(I.SellOnMarket, {}),
              ],
            }),
          });
        }
        const I = Object.assign(k0, b0);
        function g0() {
          const t = c1(),
            l = d1();
          return (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)(k1, {
              description: t,
              asset: l,
              contrast: "body",
              size: "3",
            }),
          });
        }
        function E0() {
          const t = c1(),
            l = d1();
          return (0, c.jsx)(k1, {
            description: t,
            asset: l,
            type: "owner_descriptions",
            contrast: "body",
            size: "3",
          });
        }
        function f1(t) {
          const { children: l, ...e } = t,
            a = c1();
          return (0, c.jsx)(o.s, {
            direction: "column",
            border: `2px solid ${e1(a, "#3A3A3A")}`,
            className: e0.ItemDescription,
            ...e,
            children: l,
          });
        }
        function D1(t) {
          const { children: l, ...e } = t;
          return (0, c.jsx)(o.s, {
            direction: "column",
            padding: "2",
            gapY: "2",
            ...e,
            children: l,
          });
        }
        const j1 = { row: "330x192", fit: "512x512" };
        function H1(t) {
          const { bAllowAnimatedIcon: l = !0, size: e = "row" } = t,
            a = c1(),
            v = e == "fit",
            T =
              `${y.TS.COMMUNITY_CDN_URL}economy/image/${a.icon_url_large || a.icon_url}/${j1[e]}` +
              (l ? "?allow_animated=1" : "");
          return (0, c.jsxs)(o.s, {
            height: v ? "100%" : "196px",
            width: v ? "100%" : void 0,
            minHeight: "0",
            align: "center",
            justify: v ? "center" : "start",
            position: "relative",
            children: [
              (0, c.jsx)("img", {
                className: v ? e0.ItemImageFit : void 0,
                src: T,
                alt: a.name,
              }),
              !!a.sealed &&
                a.sealed_type != 1 &&
                (0, c.jsx)(x.az, {
                  position: "absolute",
                  style: { left: "0", bottom: "0" },
                  children: (0, c.jsx)(C, {}),
                }),
              !!a.sealed &&
                a.sealed_type == 1 &&
                (0, c.jsx)(x.az, {
                  position: "absolute",
                  style: { left: "0", bottom: "0" },
                  children: (0, c.jsx)(Q1, {}),
                }),
            ],
          });
        }
        function m2() {
          return (0, c.jsx)(M.w, { color: "dull-10", size: "4", marginY: "2" });
        }
        function n2(t) {
          const l = c1(),
            e = d1();
          return (0, c.jsx)(E.D, {
            size: "7",
            weight: "heavy",
            ...t,
            children: (0, c.jsx)(T1, { description: l, asset: e }),
          });
        }
        function R1(t) {
          const e = c1().appid,
            { data: a } = (0, k.lv)({ appid: e }),
            { data: v } = (0, k.J$)({ appid: e }),
            T =
              a && a.community_icon ? (0, n0.b0)(a, "community_icon") : void 0,
            R = (0, a0.n)(v);
          return {
            gameURL:
              t != null
                ? t
                : v != null &&
                    v.visible &&
                    (v == null ? void 0 : v.type) !== Z.uE.pl
                  ? R
                  : void 0,
            iconURL: T,
            strName: v == null ? void 0 : v.name,
          };
        }
        function e2(t) {
          const { gameURL: l, strName: e } = R1(t.hrefGame);
          return l
            ? (0, c.jsx)(G0.Y, {
                href: l,
                size: "3",
                contrast: "description",
                underline: "hover",
                children: e,
              })
            : (0, c.jsx)(p.EY, {
                size: "3",
                contrast: "description",
                children: e,
              });
        }
        function x2(t) {
          const l = c1(),
            { gameURL: e, strName: a, iconURL: v } = R1(t.hrefGame);
          return (0, c.jsxs)(o.s, {
            direction: "row",
            gapX: "2",
            align: "center",
            children: [
              (0, c.jsx)(C2, {
                href: e,
                children: v
                  ? (0, c.jsx)(f._, {
                      alt: a != null ? a : "",
                      src: v,
                      className: e0.GameImage,
                    })
                  : (0, c.jsx)(x.az, { className: e0.GameImagePlaceholder }),
              }),
              (0, c.jsxs)(o.s, {
                direction: "column",
                children: [
                  (0, c.jsx)(e2, { ...t }),
                  (0, c.jsx)(p.EY, {
                    size: "3",
                    contrast: "description",
                    children: l.type,
                  }),
                ],
              }),
            ],
          });
        }
        function C2(t) {
          const { children: l, href: e } = t;
          return e ? (0, c.jsx)("a", { href: e, children: l }) : l;
        }
        function B0() {
          const t = c1(),
            { tags: l } = t;
          return !l || !l.length
            ? null
            : (0, c.jsxs)(p.EY, {
                size: "3",
                contrast: "note",
                children: [
                  j("#ItemDescription_Tags"),
                  " ",
                  " ",
                  l.map((e) => e.localized_tag_name).join(", "),
                ],
              });
        }
        function m1() {
          const { fraudwarnings: t } = c1();
          return !t || t.length == 0
            ? null
            : (0, c.jsx)(x.az, {
                borderColor: "dull-6",
                padding: "2",
                background: "dull-4",
                children: t.map((l, e) =>
                  (0, c.jsxs)(
                    p.EY,
                    {
                      color: "red-9",
                      as: "div",
                      children: [
                        (0, c.jsx)(A1, {
                          style: {
                            height: "1.25em",
                            verticalAlign: "text-bottom",
                            marginInlineEnd: "4px",
                          },
                        }),
                        l,
                      ],
                    },
                    e,
                  ),
                ),
              });
        }
        function A1(t) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "none",
            ...t,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.37033 3.07108C6.74074 2.15541 8.35191 1.66666 10.0001 1.66666C11.0944 1.66666 12.1781 1.88221 13.1891 2.301C14.2002 2.71979 15.1188 3.33362 15.8926 4.10744C16.6665 4.88126 17.2803 5.79992 17.6991 6.81097C18.1179 7.82202 18.3334 8.90565 18.3334 10C18.3334 11.6482 17.8447 13.2593 16.929 14.6297C16.0133 16.0002 14.7118 17.0683 13.1891 17.699C11.6664 18.3297 9.99084 18.4948 8.37433 18.1732C6.75782 17.8517 5.27297 17.058 4.10753 15.8926C2.94209 14.7271 2.14842 13.2423 1.82687 11.6258C1.50533 10.0092 1.67036 8.33369 2.30109 6.81097C2.93182 5.28825 3.99992 3.98676 5.37033 3.07108ZM12.2223 5L11.389 10H8.61119L7.77786 5H12.2223ZM11.9445 13.0556C11.9445 14.1294 11.074 15 10.0001 15C8.92619 15 8.05564 14.1294 8.05564 13.0556C8.05564 11.9817 8.92619 11.1111 10.0001 11.1111C11.074 11.1111 11.9445 11.9817 11.9445 13.0556Z",
            }),
          });
        }
        function F1() {
          const t = d1();
          return !t || !t.asset_properties || t.asset_properties.length == 0
            ? null
            : (0, c.jsx)(o.s, {
                direction: "column",
                children: t.asset_properties.map((l, e) =>
                  (0, c.jsx)(
                    m0,
                    { appid: t.appid, property: l, contrast: "note" },
                    e,
                  ),
                ),
              });
        }
        function t2() {
          const t = d1(),
            l = c1();
          return !t || !t.asset_accessories || t.asset_accessories.length == 0
            ? null
            : (0, c.jsxs)(o.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, c.jsx)(p.EY, {
                    as: "div",
                    size: "4",
                    children: j("#ItemDescription_AccessoriesList_Title"),
                  }),
                  t.asset_accessories.map((e, a) =>
                    (0, c.jsx)(X, { appid: l.appid, accessory: e }, a),
                  ),
                ],
              });
        }
        var x1 = n(71742),
          B1 = n(25792);
        function L2(t) {
          const {
              name: l,
              bIsMarket: e,
              bInteractable: a = !0,
              bIncludeMarketInfo: v = !0,
              bHideActionsForUnique: T = !1,
              steamidOwner: R,
              strSelectItemAction: F,
            } = t,
            [v0, K0] = u.useState();
          return (
            (0, u.useEffect)(
              () => N1(l, (v1, i1) => K0(v1 && { description: v1, asset: i1 })),
              [l],
            ),
            v0
              ? (0, c.jsx)(c0, {
                  steamidOwner: R,
                  children: (0, c.jsx)(B1.tH, {
                    children: e
                      ? (0, c.jsx)(O2, {
                          description: v0.description,
                          asset: v0.asset,
                          bHideActionsForUnique: T,
                        })
                      : (0, c.jsx)(A2, {
                          description: v0.description,
                          asset: v0.asset,
                          bInteractable: a,
                          bIncludeMarketInfo: v,
                          strSelectItemAction: F,
                        }),
                  }),
                })
              : null
          );
        }
        function A2(t) {
          const {
            description: l,
            asset: e,
            bInteractable: a,
            bIncludeMarketInfo: v,
            strSelectItemAction: T,
          } = t;
          return (0, c.jsx)(I.Root, {
            description: l,
            asset: e,
            bInteractable: a,
            children: (0, c.jsxs)(I.Container, {
              children: [
                (0, c.jsxs)(I.Content, {
                  children: [
                    (0, c.jsx)(I.Image, {}),
                    (0, c.jsx)(I.Separator, {}),
                    (0, c.jsx)(I.Name, {}),
                    (0, c.jsx)(I.FraudWarnings, {}),
                    (0, c.jsx)(I.GameInfo, {}),
                    (0, c.jsx)(I.Descriptions, {}),
                    (0, c.jsx)(I.AssetAccessories, {}),
                    (0, c.jsx)(I.Actions, {}),
                    (0, c.jsx)(I.OwnerDescriptions, {}),
                    (0, c.jsx)(I.OwnerActions, {}),
                    (0, c.jsx)(I.Tags, {}),
                    (0, c.jsx)(I.AssetProperties, {}),
                  ],
                }),
                v && !T && (0, c.jsx)(I.SellOnMarket, {}),
                !!T && (0, c.jsx)(b2, { strLabel: T }),
              ],
            }),
          });
        }
        function b2(t) {
          const { strLabel: l } = t;
          return (0, c.jsx)(o.s, {
            background: "greyneutral-3",
            padding: "4",
            gapY: "3",
            direction: "column",
            children: (0, c.jsx)(x.az, {
              children: (0, c.jsx)(V.$, {
                color: "green",
                onClick: () => window.SelectItemDialogOnSelect(),
                size: "1",
                children: l,
              }),
            }),
          });
        }
        function O2(t) {
          var l;
          const { description: e, asset: a, bHideActionsForUnique: v } = t,
            R = !(v && !e.commodity);
          return (0, c.jsx)(I.Root, {
            description: e,
            asset: a,
            children: (0, c.jsxs)(o.s, {
              direction: "row",
              align: "start",
              gap: "4",
              children: [
                (0, c.jsx)(o.s, {
                  flexGrow: "1",
                  flexShrink: "1",
                  flexBasis: "0%",
                  style: {
                    boxShadow: "0 0 14px #030303 inset",
                    background: "#071215",
                  },
                  radius: "sm",
                  direction: "column",
                  align: "center",
                  minHeight: "360px",
                  justify: "center",
                  children: (0, c.jsx)(I.Image, {}),
                }),
                (0, c.jsxs)(o.s, {
                  flexGrow: "1",
                  flexShrink: "1",
                  flexBasis: "0%",
                  direction: "column",
                  gapY: "2",
                  minWidth: "0",
                  children: [
                    (0, c.jsx)(I.Name, {}),
                    (0, c.jsx)(I.GameInfo, {
                      hrefGame: `${y.TS.COMMUNITY_BASE_URL}market/search?appid=${((l = e.appid)) != null ? l : 0}`,
                    }),
                    (0, c.jsx)(I.Descriptions, {}),
                    (0, c.jsx)(I.AssetAccessories, {}),
                    R && (0, c.jsx)(I.MarketActions, {}),
                  ],
                }),
              ],
            }),
          });
        }
        const y2 = new Map();
        function N1(t, l) {
          var e;
          const a = window;
          if (
            (a.UpdateReactItemInfo ||
              (a.UpdateReactItemInfo = (v, T, R) => {
                const F = y2.get(v);
                F ? F(T, R) : (0, x1.wT)(!1, `Updater not registered: ${v}`);
              }),
            (e = a.g_mapPendingItemInfo) != null && e.has(t))
          ) {
            const { description: v, asset: T } = a.g_mapPendingItemInfo.get(t);
            l(v, T), a.g_mapPendingItemInfo.delete(t);
          }
          return (
            y2.set(t, l),
            () => {
              y2.delete(t);
            }
          );
        }
      },
      87880: (r0, t0, n) => {
        "use strict";
        n.r(t0), n.d(t0, { MarketBaseUIRoot: () => G, default: () => f });
        var c = n(7850),
          o = n(90626),
          x = n(69168),
          V = n(60146),
          u = n(1418),
          K = n(88003),
          L = n(29757),
          c0 = n(3166),
          W = n(51278);
        function f(J) {
          const { rgApps: l0, rgAppData: I0, ...h } = J,
            Q = (0, o.useMemo)(
              () =>
                (0, W.Z)(l0 || [], (B) => {
                  var A;
                  return (A = (I0 || {})[B]) == null ? void 0 : A.name;
                }),
              [l0, I0],
            );
          return (0, c.jsx)(p, { ...h, rgApps: Q, rgAppData: I0 });
        }
        function p(J) {
          var l0;
          const [I0, h] = (0, o.useState)(
            !!((l0 = history.state) != null && l0.bAdvancedSearch),
          );
          return (
            (0, o.useEffect)(
              () => (
                (window.g_fnShowMarketSearch = () => h(!0)),
                (window.g_fnHideMarketSearch = () => h(!1)),
                () => {
                  delete window.g_fnShowMarketSearch,
                    delete window.g_fnHideMarketSearch;
                }
              ),
              [],
            ),
            (0, o.useEffect)(() => {
              const Q =
                typeof history.state == "object" && history.state
                  ? history.state
                  : {};
              history.replaceState({ ...Q, bAdvancedSearch: I0 }, "");
            }, [I0]),
            (0, c.jsx)(g, { active: I0, onRequestClose: () => h(!1), ...J })
          );
        }
        function g(J) {
          const { active: l0, onRequestClose: I0, ...h } = J,
            [Q, B] = (0, o.useState)(() => (0, V.D)(J)),
            A = (0, o.useCallback)((S) => B((m) => ({ ...m, state: S })), []),
            P = (S, m) => {
              window.location.href = (0, V.Tx)(S, m);
            };
          return (0, c.jsx)(x.E, {
            active: l0,
            children: (0, c.jsx)(y, {
              onRequestClose: I0,
              children: (0, c.jsx)(G, {
                zoo: !0,
                children: (0, c.jsx)(V.nk, {
                  ...h,
                  filter: Q.state,
                  config: Q.config,
                  onFilterChange: A,
                  onSearch: P,
                }),
              }),
            }),
          });
        }
        function y(J) {
          const { onRequestClose: l0, children: I0 } = J,
            h = (0, c0.Qn)();
          return (0, c.jsx)(K.x_, {
            onEscKeypress: l0,
            children: (0, c.jsx)(L.UC, {
              bCenterVertically: !h,
              className: "DialogContentFullSize noOpinionatedGlobalStyles",
              children: I0,
            }),
          });
        }
        function G(J) {
          return (0, c.jsx)(u.Y, { ...J });
        }
      },
      84140: (r0, t0, n) => {
        "use strict";
        n.r(t0), n.d(t0, { default: () => c0 });
        var c = n(7850),
          o = n(51296),
          x = n(60146),
          V = n(93338),
          u = n(90626),
          K = n(87880),
          L = n(60351);
        function c0(f) {
          const { app: p, initialValue: g, debugMode: y } = f,
            [G, J] = (0, u.useState)(g),
            l0 = (0, u.useRef)(null),
            [I0, h] = (0, u.useState)(!0);
          return (0, c.jsx)(o.u.Provider, {
            value: y,
            children: (0, c.jsx)(K.MarketBaseUIRoot, {
              children: (0, c.jsx)(L.az, {
                width: "259px",
                ref: l0,
                position: "relative",
                style: { zIndex: 402 },
                children: (0, c.jsx)(u.Suspense, {
                  fallback: null,
                  children: (0, c.jsx)(W, {
                    children: (0, c.jsx)(x.xs, {
                      value: G,
                      onTextChange: J,
                      app: I0 ? p : void 0,
                      onClearApp: () => h(!1),
                      radius: "none",
                      name: "q",
                      autoComplete: "off",
                      popoverWidth: (Q) =>
                        `clamp( ${Q.unTargetWidth}px, 440px, 95vw )`,
                    }),
                  }),
                }),
              }),
            }),
          });
        }
        function W(f) {
          return u.use(V.K.Ready()), f.children;
        }
      },
      71989: (r0, t0, n) => {
        "use strict";
        n.d(t0, { _: () => K });
        var c = n(7850),
          o = n(8928),
          x = n(69289),
          V = n(89611),
          u = n.n(V);
        function K(c0) {
          const W = (0, x.mz)({ ...c0, className: c0.className }, L);
          return (0, c.jsx)("img", { ...W });
        }
        const L = [
          ...o.h,
          {
            prop: "objectFit",
            className: V.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: V.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
      },
      82130: (r0, t0, n) => {
        "use strict";
        n.d(t0, { O: () => u });
        var c = n(7850),
          o = n(60351),
          x = n(81122),
          V = n.n(x);
        function u(K) {
          return (0, c.jsx)(o.az, { ...K, className: x.Skeleton });
        }
      },
      17171: (r0, t0, n) => {
        "use strict";
        n.d(t0, { w: () => K });
        var c = n(7850),
          o = n(8928),
          x = n(69289),
          V = n(8833),
          u = n.n(V);
        function K(c0) {
          const { orientation: W = "horizontal", size: f = "1", ...p } = c0;
          return (0, c.jsx)("div", {
            role: "separator",
            "aria-orientation": W,
            ...(0, x.mz)({ ...p, size: f, className: V.Separator }, L),
          });
        }
        const L = [
          ...o.L,
          { prop: "size", className: (c0) => V[`Size-${c0}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (c0) => ["--separator-color", (0, x.w7)(c0)],
          },
        ];
      },
      87275: (r0, t0, n) => {
        "use strict";
        n.d(t0, { F: () => f });
        var c = n(7850),
          o = n(90626),
          x = n(71742),
          V = n(13854),
          u = n(75),
          K = n.n(u),
          L = n(76854);
        const c0 = Object.assign(W, {
          Root: g,
          Track: G,
          Range: J,
          Handle: l0,
        });
        function W(B) {
          const {
              value: A,
              onValueChange: P,
              onValueSettled: S,
              min: m,
              ...N
            } = B,
            z = [A],
            U = (0, o.useCallback)((H) => P(H[0]), [P]),
            h0 = (0, o.useCallback)((H) => (S == null ? void 0 : S(H[0])), [S]);
          return (0, c.jsxs)(g, {
            ...N,
            min: m,
            onValueChange: U,
            onValueSettled: h0,
            value: z,
            children: [
              (0, c.jsx)(G, { children: (0, c.jsx)(J, { start: m, end: A }) }),
              (0, c.jsx)(l0, {}),
            ],
          });
        }
        function f(B) {
          const { value: A } = B;
          return (0, c.jsxs)(g, {
            ...B,
            children: [
              (0, c.jsx)(G, {
                children: (0, c.jsx)(J, { start: A[0], end: A[1] }),
              }),
              (0, c.jsx)(l0, {}),
              (0, c.jsx)(l0, {}),
            ],
          });
        }
        const p = (0, o.createContext)(null);
        function g(B) {
          const { children: A, color: P, ...S } = B,
            {
              min: m,
              max: N,
              onValueChange: z,
              value: U,
              step: h0 = 1,
              onValueSettled: H,
            } = B,
            L0 = (0, o.useRef)(null),
            z0 = (0, o.useRef)(null),
            [M0] = (0, o.useState)(() => new Set()),
            [w0, H0] = (0, o.useState)(!1);
          return (0, c.jsx)(p.Provider, {
            value: { ...S, handles: M0, bDragActive: w0 },
            children: (0, c.jsx)("div", {
              className: u.SliderRoot,
              "data-accent-color": P,
              ref: L0,
              onPointerDown: (D0) => {
                if (L0.current) {
                  if (
                    (D0.target.setPointerCapture(D0.pointerId),
                    typeof U != "number")
                  ) {
                    const O0 = L0.current.getBoundingClientRect(),
                      d0 = I0(D0.clientX - O0.left, [0, O0.width], [m, N]);
                    z0.current = { activeValueIndex: y(U, d0), bMoved: !1 };
                  } else z0.current = { activeValueIndex: 0, bMoved: !1 };
                  H0(!0);
                }
              },
              onPointerUp: (D0) => {
                var O0;
                const d0 = D0.target;
                d0.hasPointerCapture(D0.pointerId) &&
                  (d0.releasePointerCapture(D0.pointerId),
                  H && (O0 = z0.current) != null && O0.bMoved && H(U),
                  H0(!1));
              },
              onPointerMove: (D0) => {
                if (
                  D0.target.hasPointerCapture(D0.pointerId) &&
                  L0.current &&
                  z0.current
                ) {
                  const d0 = L0.current.getBoundingClientRect(),
                    X0 = I0(D0.clientX - d0.left, [0, d0.width], [m, N]),
                    J0 = h({ value: X0, min: m, max: N, step: h0 }),
                    N0 = [...U];
                  (N0[z0.current.activeValueIndex] = J0),
                    N0.sort((Z0, s1) => Z0 - s1),
                    (z0.current.activeValueIndex = N0.indexOf(J0)),
                    (z0.current.bMoved = !0),
                    z(N0);
                }
              },
              onClick: (D0) => {
                var O0;
                if (!L0.current || ((O0 = z0.current) != null && O0.bMoved))
                  return;
                const d0 = L0.current.getBoundingClientRect(),
                  X0 = I0(D0.clientX - d0.left, [0, d0.width], [m, N]),
                  J0 = h({ value: X0, min: m, max: N, step: h0 }),
                  N0 = y(U, X0),
                  Z0 = [...U];
                (Z0[N0] = J0), z(Z0), H && H(Z0);
              },
              children: (0, c.jsx)("div", { className: u.Inner, children: A }),
            }),
          });
        }
        function y(B, A) {
          if (B.length <= 1) return B.length - 1;
          let P = 0,
            S = Math.abs(A - B[0]);
          for (let m = 1; m < B.length; m++) {
            const N = Math.abs(B[m] - A);
            N < S && ((P = m), (S = N));
          }
          return P;
        }
        function G(B) {
          const { render: A, ...P } = B;
          return (0, L.Q)(
            A,
            (0, c.jsx)("div", { className: u.SliderTrack }),
            P,
            void 0,
          );
        }
        function J(B) {
          const { start: A, end: P, render: S } = B,
            m = (0, o.useContext)(p);
          (0, x.wT)(m, "SliderRange must be used within a SliderRoot!");
          const { min: N, max: z } = m,
            U = Q(A, N, z),
            h0 = 100 - Q(P, N, z);
          return (0, L.Q)(
            S,
            (0, c.jsx)("div", {
              className: u.SliderRange,
              style: { "--pct-left": `${U}%`, "--pct-right": `${h0}%` },
            }),
            {},
            void 0,
          );
        }
        function l0(B) {
          const { render: A } = B,
            P = (0, o.useContext)(p);
          (0, x.wT)(P, "SliderHandle must be used within a SliderRoot!");
          const {
              min: S,
              max: m,
              handles: N,
              value: z,
              step: U = 1,
              onValueChange: h0,
              onValueSettled: H,
            } = P,
            [L0, z0] = (0, o.useState)(null),
            [M0, w0] = (0, o.useState)(-1);
          (0, o.useEffect)(
            () =>
              L0 ? (N.add(L0), w0(N.size - 1), () => N.delete(L0)) : () => {},
            [L0, N],
          );
          const H0 = M0 > -1,
            O0 = { "--handle-pct": `${Q(H0 ? z[M0] : S, S, m)}%` },
            d0 = (J0) => {
              switch (J0.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const N0 = J0.key === "ArrowRight" || J0.key === "ArrowUp",
                    Z0 = U * (N0 ? 1 : -1),
                    s1 = h({ value: z[M0] + Z0, min: S, max: m, step: U }),
                    q0 = [...z];
                  (q0[M0] = s1),
                    h0(q0),
                    H && H(q0),
                    J0.preventDefault(),
                    J0.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const N0 = J0.key === "PageUp",
                    Z0 = Math.round((m - S) / 10) * (N0 ? 1 : -1),
                    s1 = h({ value: z[M0] + Z0, min: S, max: m, step: U }),
                    q0 = [...z];
                  (q0[M0] = s1),
                    h0(q0),
                    H && H(q0),
                    J0.preventDefault(),
                    J0.stopPropagation();
                  break;
                }
              }
            };
          H0 || (O0.display = "none");
          const X0 = {
            ref: z0,
            role: "slider",
            "aria-valuenow": z[M0],
            "aria-valuemin": S,
            "aria-valuemax": m,
            tabIndex: 0,
            onKeyDown: d0,
          };
          return (0, L.Q)(
            A,
            (0, c.jsx)("span", { className: u.SliderHandle, style: O0 }),
            X0,
            { value: z[M0], bDragActive: P.bDragActive },
          );
        }
        function I0(B, A, P) {
          if (A[0] === A[1] || P[0] === P[1]) return P[0];
          const m = ((P[1] - P[0]) / (A[1] - A[0])) * (B - A[0]) + P[0];
          return V.OQ(m, P[0], P[1]);
        }
        function h(B) {
          const { value: A, min: P, max: S, step: m } = B,
            z = Math.round((A - P) / m) / (1 / m);
          return V.OQ(z + P, P, S);
        }
        function Q(B, A, P) {
          return ((B - A) / (P - A)) * 100;
        }
      },
      93340: (r0, t0, n) => {
        "use strict";
        n.d(t0, { q: () => c });
        function c(o) {
          const { bActive: x, onActiveChange: V, ...u } = o;
          return {
            role: "button",
            tabIndex: 0,
            onClick: () => V(!x),
            onKeyDown: (L) => {
              (L.key === " " || L.key === "Enter") &&
                (V(!x), L.preventDefault(), L.stopPropagation());
            },
            "aria-pressed": x,
            ...u,
          };
        }
      },
      95994: (r0, t0, n) => {
        "use strict";
        n.d(t0, { x: () => f });
        var c = n(7850),
          o = n(70182),
          x = n(64238),
          V = n.n(x),
          u = n(8928),
          K = n(69289),
          L = n(75180),
          c0 = n.n(L),
          W = n(3166);
        function f(g) {
          var y;
          const {
              as: G = "div",
              ref: J,
              focusable: l0,
              navProps: I0,
              ...h
            } = g,
            Q = (0, W.Qn)(),
            B = (0, K.mz)({ ...h, className: V()(L.Grid, g.className) }, p),
            A =
              (y = l0 != null ? l0 : I0 == null ? void 0 : I0.focusable) != null
                ? y
                : !!h.onClick,
            P = (0, c.jsx)(G, { ref: J, ...B });
          return Q
            ? (0, c.jsx)(o.J, {
                "flow-children": "grid",
                ...(I0 || {}),
                focusable: A,
                children: P,
              })
            : P;
        }
        const p = [
          ...u.h,
          {
            prop: "display",
            responsive: !0,
            className: L.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: L.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: L.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: L.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: L.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: L.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: L.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: L.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: L.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: L.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: L.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: L.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: L.Gap,
            cssProperty: (g) => ["--grid-gap", `var(--spacing-${g})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: L.Gap,
            cssProperty: (g) => ["--grid-gap-x", `var(--spacing-${g})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: L.Gap,
            cssProperty: (g) => ["--grid-gap-y", `var(--spacing-${g})`],
          },
        ];
      },
      7487: (r0, t0, n) => {
        "use strict";
        n.d(t0, { K0: () => L, OJ: () => c0, R8: () => K });
        var c = n(71742),
          o = n(90626),
          x = Object.defineProperty,
          V = (W, f, p) =>
            f in W
              ? x(W, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (W[f] = p),
          u = (W, f, p) => V(W, typeof f != "symbol" ? f + "" : f, p);
        class K {
          constructor() {
            u(this, "reactNodes", []);
          }
          AppendText(f, p = !1) {
            f.length &&
              (p
                ? this.reactNodes.push(
                    o.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": f,
                      },
                      f,
                    ),
                  )
                : this.reactNodes.push(f));
          }
          AppendNode(f) {
            this.reactNodes.push(f);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class L {
          constructor(f) {
            u(this, "m_decoratedAccumulator"),
              (0, c.wT)(f, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = f);
          }
          AppendText(f, p = !1) {
            this.m_decoratedAccumulator.AppendText(f, p);
          }
          AppendNode(f) {
            this.m_decoratedAccumulator.AppendNode(f);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class c0 extends L {
          constructor(f) {
            super(f);
          }
          AppendText(f) {
            let p = f;
            const g = [];
            for (
              let y = p.indexOf(`
`);
              y !== -1;
              y = p.indexOf(`
`)
            )
              g.push(p.substr(0, y)),
                g.push(o.createElement("br")),
                (p = p.substr(y + 1));
            p.length && g.push(p),
              g.forEach((y) => {
                super.AppendNode(y);
              });
          }
        }
      },
      8145: (r0, t0, n) => {
        "use strict";
        n.d(t0, { op: () => g, CS: () => W, vE: () => y, Al: () => c0 });
        const c = 0,
          o = 1,
          x = 2,
          V = 3;
        var u = Object.defineProperty,
          K = (h, Q, B) =>
            Q in h
              ? u(h, Q, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: B,
                })
              : (h[Q] = B),
          L = (h, Q, B) => K(h, typeof Q != "symbol" ? Q + "" : Q, B);
        class c0 {
          constructor(Q, B) {
            L(this, "m_fnAccumulatorFactory"),
              L(this, "m_dictComponents"),
              Q instanceof Map
                ? (this.m_dictComponents = Q)
                : (this.m_dictComponents = new Map(Object.entries(Q))),
              (this.m_fnAccumulatorFactory = B);
          }
          Parse(Q, B, A = !0) {
            const P = l0(Q || "", A);
            return this.Parse_BuildElements(P, B);
          }
          Parse_BuildElements(Q, B) {
            let A = this.m_fnAccumulatorFactory(void 0);
            const P = [],
              S = () => (P.length < 1 ? void 0 : P[P.length - 1]),
              m = this.m_dictComponents,
              N = (H) => {
                var L0;
                return !!(
                  H.tag &&
                  (L0 = m.get(H.tag)) != null &&
                  L0.autocloses
                );
              };
            let z = !1,
              U = !0;
            const h0 = (H, L0) => {
              let z0 = L0.text.toLowerCase();
              if (H && H.node.tag === z0 && m.get(H.node.tag)) {
                const M0 = m.get(H.node.tag),
                  w0 = {
                    tagname: H.node.tag,
                    args: H.node.args,
                    rawargs: H.node.rawargs,
                  },
                  H0 = B(M0.Constructor, w0, ...A.GetElements());
                (A = H.accumulator),
                  Array.isArray(H0)
                    ? H0.forEach((D0) => A.AppendNode(D0))
                    : A.AppendNode(H0),
                  (z = !!M0.skipFollowingNewline),
                  (U = H.bWrapTextForCopying);
              } else if (H) {
                const M0 = H.accumulator;
                M0.AppendText("[" + H.node.text + "]", !1),
                  A.GetElements().forEach((w0) => M0.AppendNode(w0)),
                  M0.AppendText("[/" + L0.text + "]", !1),
                  (A = M0),
                  (U = H.bWrapTextForCopying);
              }
            };
            for (
              Q.forEach((H, L0) => {
                var z0, M0;
                if (H.type == o) {
                  const w0 = z ? H.text.replace(/^[\t\r ]*\n/g, "") : H.text;
                  A.AppendText(w0, U), (z = !1);
                } else if (H.type == x) {
                  const w0 = m.get(H.tag);
                  if (!w0) A.AppendText("[" + H.text + "]", P.length == 0);
                  else {
                    const H0 = S();
                    if (H0 !== void 0) {
                      const D0 = m.get(H0.node.tag);
                      D0 &&
                        D0.autocloses &&
                        H.tag === H0.node.tag &&
                        h0(P.pop(), H0.node);
                    }
                    P.push({ accumulator: A, node: H, bWrapTextForCopying: U }),
                      (A = this.m_fnAccumulatorFactory(H)),
                      (z = !!w0.skipInternalNewline),
                      (U = (z0 = w0.allowWrapTextForCopying) != null ? z0 : !1);
                  }
                } else if (H.type == V) {
                  let w0 = H.text.toLowerCase();
                  for (; S() && S().node.tag !== w0 && N(S().node); ) {
                    const H0 = P.pop();
                    h0(H0, H0.node);
                  }
                  if (((M0 = S()) == null ? void 0 : M0.node.tag) == w0) {
                    const H0 = P.pop();
                    h0(H0, H);
                  } else A.AppendText("[/" + H.text + "]", P.length == 0);
                }
              });
              P.length > 0;
            ) {
              const H = P.pop();
              h0(H, H.node);
            }
            return A.GetElements();
          }
        }
        function W(h, Q, B = !1) {
          let A = "[" + h;
          Q != null && Q[""] && (A += `=${B ? "" + Q[""] : f("" + Q[""])}`);
          for (const P in Q) P !== "" && (A += ` ${p(P)}=${f("" + Q[P])}`);
          return (A += "]"), A;
        }
        function f(h) {
          return `"${h.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function p(h) {
          return h.replace(/(\\| |\])/g, "\\$1");
        }
        function g(h) {
          return `[/${h}]`;
        }
        function y(h) {
          return h.replace(/(\\|\[)/g, "\\$1");
        }
        function G(h, Q, B = c) {
          const { type: A, text: P = "" } = Q;
          if (A == x) {
            let S = P.indexOf("=");
            const m = P.indexOf(" ");
            m != -1 && (S == -1 || m < S) && (S = m);
            let N,
              z,
              U = "";
            S > 0
              ? ((N = P.substr(0, S).toLocaleLowerCase()),
                (U = P.substr(S)),
                (z = I0(U)))
              : ((z = {}), (N = P.toLocaleLowerCase())),
              h.push({ type: A, text: P, tag: N, args: z, rawargs: U });
          } else A != c && h.push({ type: A, text: P });
          return { type: B, text: "" };
        }
        function J(h) {
          var Q;
          let B = "";
          return (
            h.type == V ? (B = "[/") : h.type == x && (B = "["),
            { type: o, text: B + ((Q = h.text) != null ? Q : "") }
          );
        }
        function l0(h, Q) {
          var B, A, P;
          const S = [];
          let m = { type: c, text: "" },
            N = !1,
            z = !1,
            U = !1;
          for (let h0 = 0; h0 < h.length; h0++) {
            const H = h[h0];
            switch (m.type) {
              case c:
                H == "["
                  ? ((m.type = x), (z = !0))
                  : ((m.type = o), H == "\\" && Q ? (N = !N) : (m.text += H));
                break;
              case x:
              case V:
                if (H == "/" && z) (m.type = V), (m.text = ""), (z = !1);
                else if (H == "[" && !N) (m = G(S, J(m), x)), (z = !0);
                else if (H == "]" && !N) {
                  const L0 =
                      m.type == x &&
                      ((B = m.text) == null ? void 0 : B.toLocaleLowerCase()) ==
                        "noparse",
                    z0 =
                      m.type == V &&
                      ((A = m.text) == null ? void 0 : A.toLocaleLowerCase()) ==
                        "noparse";
                  z || (U && !z0)
                    ? ((m = J(m)), (m.text += H))
                    : L0
                      ? (U = !0)
                      : z0 && (U = !1),
                    (m = G(S, m)),
                    (z = !1);
                } else
                  H == "\\" && Q
                    ? ((m.text += H), (N = !N), (z = !1))
                    : ((m.text += H), (N = !1), (z = !1));
                break;
              case o:
                H == "[" && !N
                  ? ((m = G(S, m, x)), (z = !0))
                  : H == "\\" && Q
                    ? (N && (m.text += H), (N = !N))
                    : ((m.text += H), (N = !1));
                break;
            }
          }
          return (
            m.type != c &&
              (m.type == x || m.type == V
                ? S.push(J(m))
                : S.push({
                    type: m.type,
                    text: (P = m.text) != null ? P : "",
                  })),
            S
          );
        }
        function I0(h) {
          if (!h || h.length < 1) return {};
          const Q = {};
          let B = "",
            A = "",
            P;
          ((z) => {
            (z[(z.PRE_NAME = 0)] = "PRE_NAME"),
              (z[(z.IN_NAME = 1)] = "IN_NAME"),
              (z[(z.POST_NAME = 2)] = "POST_NAME"),
              (z[(z.IN_VALUE = 3)] = "IN_VALUE"),
              (z[(z.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(P || (P = {}));
          let S = 0,
            m = 0;
          h[0] == "=" && (S = 2);
          let N = !1;
          for (m++; m < h.length; m++) {
            const z = h[m];
            let U = !0,
              h0 = !1;
            switch (S) {
              case 0:
                if (z == "=") return {};
                if (z == " ") continue;
                S = 1;
                break;
              case 1:
                (z == "=" || z == " ") &&
                  !N &&
                  (z == " " ? ((S = 0), (h0 = !0)) : (S = 2), (U = !1));
                break;
              case 2:
                z == " "
                  ? ((S = 0), (U = !1), (h0 = !0))
                  : z == '"'
                    ? ((S = 4), (U = !1))
                    : (S = 3);
                break;
              case 3:
              case 4:
                ((z == " " && S != 4 && !N) || (z == '"' && S == 4 && !N)) &&
                  ((S = 0), (U = !1), (h0 = !0));
                break;
            }
            if (U)
              if (z == "\\" && !N) N = !0;
              else if (((N = !1), S == 1)) B += z;
              else if (S == 3 || S == 4) A += z;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + S,
                );
            h0 && ((Q[B] = A), (B = ""), (A = ""));
          }
          return S != 0 && (Q[B] = A), Q;
        }
      },
      96232: (r0, t0, n) => {
        "use strict";
        n.d(t0, { B: () => c0 });
        var c = n(99412),
          o = n(90626),
          x = n(7487),
          V = n(8145),
          u = Object.defineProperty,
          K = (W, f, p) =>
            f in W
              ? u(W, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (W[f] = p),
          L = (W, f, p) => K(W, typeof f != "symbol" ? f + "" : f, p);
        class c0 extends V.Al {
          constructor(f, p, g) {
            super(f, p != null ? p : () => new x.R8()),
              L(this, "m_renderingLanguage"),
              (this.m_renderingLanguage =
                typeof g == "string" ? (0, c.sfN)(g) : g);
          }
          UpdateOverrideLanguage(f) {
            this.m_renderingLanguage = f;
          }
          ParseBBCode(f, p, g = !0) {
            let y = 0;
            const G = this.Parse(
              f,
              (J, l0, ...I0) =>
                o.createElement(
                  J,
                  {
                    ...l0,
                    context: p,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${y++}`,
                  },
                  ...I0,
                ),
              g,
            );
            return G.length > 1
              ? o.createElement(o.Fragment, null, ...G)
              : G.length == 1
                ? G[0]
                : null;
          }
        }
      },
      15860: (r0, t0, n) => {
        "use strict";
        n.d(t0, { L: () => K, c: () => u });
        var c = n(75916),
          o = n(76617),
          x = n(58632),
          V = n.n(x);
        function u(L, c0) {
          return new (V())(
            async (W) => {
              const f = [...W],
                p = await c.xtC.GetPlayerLinkDetails(L, { steamids: f }),
                g = new Map();
              return (
                p
                  .Body()
                  .accounts()
                  .forEach((y) => {
                    const G = y.toObject();
                    g.set(G.public_data.steamid, G);
                  }),
                f.map((y) => {
                  var G;
                  return (G = g.get(y)) != null ? G : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...c0 },
          );
        }
        function K(L) {
          return (0, o.V)("PlayerLinkDetails", () => u(L));
        }
      },
      85978: (r0, t0, n) => {
        "use strict";
        n.d(t0, { jn: () => f });
        var c = n(72609),
          o = n(68312),
          x = n(20117),
          V = n(88942),
          u = n(15860),
          K = n(99412);
        function L(g) {
          var y, G, J, l0, I0;
          return (
            (y = g == null ? void 0 : g.private_data) == null ||
              delete y.account_name,
            (G = g == null ? void 0 : g.public_data) == null ||
              delete G.account_flags,
            (J = g == null ? void 0 : g.public_data) == null ||
              delete J.ban_expires_time,
            (l0 = g == null ? void 0 : g.public_data) == null ||
              delete l0.privacy_state,
            ((I0 = g == null ? void 0 : g.public_data) == null
              ? void 0
              : I0.profile_state) !== K.IiA &&
              (g == null || delete g.private_data),
            g
          );
        }
        function c0(g) {
          return ["PlayerLinkDetails", g];
        }
        function W(g, y) {
          const G =
            typeof y == "number"
              ? x.b2.InitFromAccountID(y, c.TS.EUNIVERSE).ConvertTo64BitString()
              : y;
          return {
            queryKey: c0(G),
            queryFn: async () => {
              if (G) {
                const J = await g.load(G);
                return L(J);
              }
              return null;
            },
            enabled: !!G,
          };
        }
        function f(g) {
          const y = (0, o.KV)(),
            G = (0, u.L)(y);
          return (0, V.I)(W(G, g));
        }
        function p(g, y) {
          y.forEach((G) => {
            var J;
            (J = G == null ? void 0 : G.public_data) != null &&
              J.steamid &&
              g.setQueryData(c0(G.public_data.steamid), G);
          });
        }
      },
      24642: (r0, t0, n) => {
        "use strict";
        n.d(t0, { D: () => o });
        var c = n(84346);
        function o(x) {
          return x.toLocaleString((0, c.J)());
        }
      },
      84346: (r0, t0, n) => {
        "use strict";
        n.d(t0, { J: () => x });
        var c = n(72609),
          o = n(37901);
        function x() {
          return (0, o.A)().languages.map((u) => V(u.strISOCode));
        }
        function V(u) {
          return u.length == 2 && c.TS.COUNTRY ? `${u}-${c.TS.COUNTRY}` : u;
        }
      },
      51278: (r0, t0, n) => {
        "use strict";
        n.d(t0, { Z: () => V });
        var c = n(84346),
          o = n(37901);
        function x(K, L) {
          let c0 = K.toLowerCase().replace(/[^\p{L}\p{N}\p{Z}]/gu, "");
          const W = u[L];
          return W && (c0 = c0.replace(W, "")), c0.trim();
        }
        function V(K, L) {
          const W = (0, o.A)().languages[0].strLanguage,
            f = K.map((g) => ({ item: g, strSort: x(L ? L(g) : g, W) })),
            p = new Intl.Collator((0, c.J)(), { numeric: !0 });
          return (
            f.sort((g, y) => p.compare(g.strSort, y.strSort)),
            f.map(({ item: g }) => g)
          );
        }
        const u = {
          english: /^(the |a |an )/,
          brazilian: /^(o |os |a |as |um |uns |uma |umas )/,
          danish: /^(en |et |den |det |de )/,
          dutch: /^(de |het |een )/,
          french: /^(le |la |l'|les |un |une |des )/,
          german: /^(der |die |das |ein |eine )/,
          greek: /^(ο |η |το |οι |τα |ένας |μια |μία |ένα )/,
          hungarian: /^(a |az |egy )/,
          italian: /^(il |lo |la |l'|i |gli |le |un |uno |una |un')/,
          portuguese: /^(o |a |os |as |um |uma |uns |umas )/,
          romanian: /^(un |o |unii |unele )/,
          spanish: /^(el |la |los |las |un |una |unos |unas )/,
          latam: /^(el |la |los |las |un |una |unos |unas )/,
        };
      },
      60146: (r0, t0, n) => {
        "use strict";
        n.d(t0, { nk: () => a2, Tx: () => P1, D: () => h2, xs: () => Y1 });
        var c = n(7850),
          o = n(90626),
          x = n(72609),
          V = n(88942),
          u = n(60351),
          K = n(34771),
          L = n(68031),
          c0 = n(17171),
          W = n(85367),
          f = n(15252),
          p = n(75083),
          g = n(7125),
          y = n(71742),
          G = n(185);
        function J(i) {
          const {
              suggestions: r,
              onTextChange: d,
              onSuggestionSelected: C,
              ...M
            } = i,
            E = l0({
              onTextChange: d,
              suggestions: r,
              onSuggestionSelected: C,
            });
          return (0, c.jsxs)(A.Root, {
            state: E,
            children: [
              (0, c.jsx)(A.TextInput, { ...M }),
              (0, c.jsx)(A.Suggestions, {
                children: r.map((Z, n0) =>
                  (0, c.jsx)(A.Suggestion, { value: Z, children: Z }, Z + n0),
                ),
              }),
            ],
          });
        }
        function l0(i) {
          const {
              onTextChange: r,
              suggestions: d,
              onSuggestionSelected: C,
            } = i,
            [M, E] = (0, o.useState)(null),
            [Z, n0] = (0, o.useState)(!1),
            a0 = (0, o.useCallback)(
              (k) => {
                k ? (n0(!0), E(null)) : n0(!1), r(k);
              },
              [r],
            );
          return {
            activeIndex: M,
            setActiveIndex: E,
            open: Z,
            onOpenChange: n0,
            onTextChange: a0,
            suggestions: d,
            onSuggestionSelected: C,
          };
        }
        function I0(i) {
          const {
              children: r,
              placement: d = "bottom-end",
              popoverWidth: C = "dropdown",
              ...M
            } = i,
            E = (0, G.T)({
              ...M.state,
              width: C,
              placement: d,
              presentation: "anchor",
              gutter: "4",
              interactions: { virtualItemFocus: !0, focus: !0 },
              role: "combobox",
              scroll: !0,
            });
          return (0, c.jsx)(P.Provider, {
            value: M,
            children: (0, c.jsx)(G.k.Root, { state: E, children: r }),
          });
        }
        function h(i) {
          const {
              state: {
                onTextChange: r,
                activeIndex: d,
                onOpenChange: C,
                setActiveIndex: M,
                suggestions: E,
                onSuggestionSelected: Z,
              },
            } = S("<Autocomplete.TextInput>"),
            n0 = (e0) => {
              e0.key === "Enter" &&
                d !== null &&
                E[d] &&
                (Z && Z(E[d], e0),
                e0.defaultPrevented || r(E[d]),
                M(null),
                C(!1),
                e0.preventDefault(),
                e0.stopPropagation());
            },
            a0 = (e0) => {
              (e0.key === "Home" || e0.key === "End") && e0.stopPropagation();
            },
            k = (0, o.useRef)(null);
          return (0, c.jsx)(G.k.Anchor, {
            children: (0, c.jsx)(g.k, {
              ...i,
              inputRef: k,
              onTextChange: r,
              "aria-autocomplete": "list",
              onKeyDown: n0,
              onKeyDownCapture: a0,
              role: "combobox",
            }),
          });
        }
        function Q(i) {
          return o.Children.toArray(i.children).length === 0
            ? null
            : (0, c.jsx)(G.k.Positioner, { ...i, returnFocus: !1 });
        }
        function B(i) {
          const { value: r, children: d, ...C } = i,
            {
              state: {
                onTextChange: M,
                onOpenChange: E,
                setActiveIndex: Z,
                onSuggestionSelected: n0,
              },
            } = S("<Autocomplete.TextInput>"),
            a0 = (k) => {
              n0 && n0(r, k), k.defaultPrevented || M(r), Z(null), E(!1);
            };
          return (0, c.jsx)(G.k.Item, { onSelect: a0, ...C, children: d });
        }
        const A = Object.assign(J, {
            Root: I0,
            TextInput: h,
            Suggestions: Q,
            Suggestion: B,
          }),
          P = (0, o.createContext)(null);
        function S(i) {
          const r = (0, o.useContext)(P);
          return (0, y.wT)(r, `${i} must be used within an <Autocomplete>!`), r;
        }
        var m = n(71989),
          N = n(63029),
          z = n(82130),
          U = n(74769),
          h0 = n(1039),
          H = n(86668),
          L0 = n(41773),
          z0 = n(44773),
          M0 = n(51296),
          w0 = n(77343),
          H0 = n(99412),
          D0 = n(36707),
          O0 = n(17508),
          d0 = n(93338),
          X0 = n(21663);
        function J0(i) {
          const { showSteamItems: r, onShowSteamItemsChange: d } = i;
          return (0, c.jsxs)(X0.I.Root, {
            value: r ? "on" : "off",
            onValueChange: (C) => d(C === "on"),
            variant: "inset",
            radius: "full",
            children: [
              (0, c.jsx)(X0.I.Item, {
                value: "off",
                children: d0.K.Localize("#AdvancedSearch_TypeSwitch_InGame"),
              }),
              (0, c.jsx)(X0.I.Item, {
                value: "on",
                children: d0.K.Localize(
                  "#AdvancedSearch_TypeSwitch_SteamItems",
                ),
              }),
            ],
          });
        }
        var N0 = n(15353),
          Z0 = n(95994),
          s1 = n(4709);
        const q0 = 2;
        function o1(i, r, d, C) {
          return (0, o.useMemo)(() => {
            if (!r) return [];
            const M = r1[i];
            return M ? M(r, d, C) : S1(r, void 0, d, C);
          }, [r, d, C, i]);
        }
        const r1 = { 753: (i, r, d) => S1(i, 3, r, d) };
        function S1(i, r, d, C) {
          const M = typeof r == "number" ? r : q0,
            E = [],
            Z = [];
          if (!i) return [];
          for (const n0 of Object.keys(i)) {
            const a0 = i[n0];
            if (!a0.tags) continue;
            const k = Object.keys(a0.tags).length < M,
              e0 = (0, N0.cR)(a0, k ? "checkbox" : "select", !0, void 0, d, C);
            e0 && (k ? Z.push(e0) : E.push(e0));
          }
          return [E, Z].filter((n0) => n0.length > 0);
        }
        function C0(i) {
          const { facets: r, state: d, onStateChange: C } = i;
          return (0, c.jsx)(c.Fragment, {
            children: r.flatMap((M, E) => [
              (0, c.jsxs)(
                N0.lA,
                {
                  children: [
                    M.map((Z) =>
                      (0, c.jsx)(
                        N0.SW,
                        { facet: Z, state: d, onStateChange: C },
                        Z.strLabel,
                      ),
                    ),
                    E === r.length - 1 &&
                      (0, c.jsx)(s1.$, { state: d, onStateChange: C }),
                  ],
                },
                `facets_${E}`,
              ),
              E < r.length - 1
                ? (0, c.jsx)(
                    c0.w,
                    { color: "dull-9", size: "4", marginTop: "4" },
                    `sep_${E}`,
                  )
                : null,
            ]),
          });
        }
        const M1 = 753,
          w = "item_class",
          j = "Event";
        function Y(i) {
          const {
              facets: r,
              state: d,
              onStateChange: C,
              facetingInfo: M,
              ...E
            } = i,
            Z = { ...r },
            n0 = Z[w];
          delete Z[w], !d.app || delete Z[j];
          const k = o1(M1, Z, M);
          return (0, c.jsxs)(u.az, {
            ...E,
            children: [
              n0 && (0, c.jsx)(m0, { facet: n0, state: d, onStateChange: C }),
              (0, c.jsx)(C0, { facets: k, state: d, onStateChange: C }),
            ],
          });
        }
        const $ = ["item_class_10", "item_class_6"],
          i0 = {
            item_class_2: o0,
            item_class_3: G0,
            item_class_4: O,
            item_class_5: X,
            item_class_10: j0,
          };
        function m0(i) {
          const {
              facet: { localized_name: r, name: d, tags: C = {} },
              state: M,
              onStateChange: E,
            } = i,
            Z = Object.keys(C).filter((k) => $.indexOf(k) < 1),
            n0 = (k, e0) => {
              if ($.includes(k)) {
                let b0 = M;
                for (const k0 of $) b0 = (0, N0.d5)(b0, d, k0, e0);
                E(b0, !0);
              } else E((0, N0.d5)(M, d, k, e0), !0);
            },
            a0 = M.facets[d] || {};
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(f.EY, {
                weight: "medium",
                size: "3",
                contrast: "title",
                children: d0.K.Localize("#AdvancedSearch_SteamItems_TypeLabel"),
              }),
              (0, c.jsx)(Z0.x, {
                columns: "repeat( auto-fit, minmax( 230px, 1fr ) )",
                gap: "2",
                marginTop: "2",
                children: Z.map((k) =>
                  (0, c.jsx)(
                    N0.UZ,
                    {
                      active: a0[k],
                      onActiveChange: (e0) => n0(k, e0),
                      label: C[k].localized_name,
                      icon: i0[k],
                    },
                    k,
                  ),
                ),
              }),
            ],
          });
        }
        function o0(i) {
          return (0, c.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...i,
            children: [
              (0, c.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24 31H3V5H24V31ZM6 8H21V24H6V8Z",
              }),
              (0, c.jsx)("path", {
                fill: "currentColor",
                d: "M33 27H28V22H31V11H28V9H33V27Z",
              }),
            ],
          });
        }
        function j0(i) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...i,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13 7H34V29H13V25H10V29H2V21C3.65685 21 5 19.6569 5 18C5 16.3431 3.65685 15 2 15V7H10V11H13V7ZM13 23H10V19H13V23ZM10 17H13V13H10V17ZM21 15C21 15.5523 20.5523 16 20 16C19.4477 16 19 15.5523 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15ZM23 15C23 16.6569 21.6569 18 20 18C18.3431 18 17 16.6569 17 15C17 13.3431 18.3431 12 20 12C21.6569 12 23 13.3431 23 15ZM28 23C28.5523 23 29 22.5523 29 22C29 21.4477 28.5523 21 28 21C27.4477 21 27 21.4477 27 22C27 22.5523 27.4477 23 28 23ZM28 25C29.6569 25 31 23.6569 31 22C31 20.3431 29.6569 19 28 19C26.3431 19 25 20.3431 25 22C25 23.6569 26.3431 25 28 25ZM27.1679 11.9453L19.1679 23.9453L20.832 25.0547L28.832 13.0547L27.1679 11.9453Z",
            }),
          });
        }
        function X(i) {
          return (0, c.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...i,
            children: [
              (0, c.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M29 31H6V5H29V31ZM9 8H26V24H9V8Z",
              }),
              (0, c.jsx)("path", {
                fill: "currentColor",
                d: "M14.7451 16.9935L12 14.19L15.7965 14.125L17.5 10L19.2035 14.125L23 14.19L20.2549 16.9935L20.8973 20.9694L17.5 19.1242L14.1027 21L14.7451 16.9935Z",
              }),
            ],
          });
        }
        function O(i) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...i,
            children: (0, c.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.66645 5.52796C12.1332 3.87973 15.0333 3 18 3C19.9698 3 21.9204 3.38799 23.7403 4.14181C25.5601 4.89563 27.2137 6.00052 28.6066 7.3934C29.9995 8.78628 31.1044 10.4399 31.8582 12.2597C32.612 14.0796 33 16.0302 33 18C33 20.9667 32.1203 23.8668 30.472 26.3336C28.8238 28.8003 26.4811 30.7229 23.7403 31.8582C20.9994 32.9935 17.9834 33.2906 15.0737 32.7118C12.1639 32.133 9.49119 30.7044 7.3934 28.6066C5.29562 26.5088 3.86701 23.8361 3.28823 20.9264C2.70945 18.0166 3.0065 15.0006 4.14181 12.2597C5.27713 9.51886 7.19972 7.17618 9.66645 5.52796ZM9.5056 13.3333C9.17595 13.8266 9.00001 14.4067 9.00001 15C9.00001 15.7956 9.31608 16.5587 9.87869 17.1213C10.4413 17.6839 11.2044 18 12 18C12.5934 18 13.1734 17.8241 13.6667 17.4944C14.1601 17.1648 14.5446 16.6962 14.7716 16.1481C14.9987 15.5999 15.0581 14.9967 14.9424 14.4147C14.8266 13.8328 14.5409 13.2982 14.1213 12.8787C13.7018 12.4591 13.1672 12.1734 12.5853 12.0576C12.0033 11.9419 11.4001 12.0013 10.852 12.2284C10.3038 12.4554 9.83524 12.8399 9.5056 13.3333ZM22.3333 17.4944C22.8266 17.8241 23.4067 18 24 18C24.7957 18 25.5587 17.6839 26.1213 17.1213C26.6839 16.5587 27 15.7956 27 15C27 14.4067 26.8241 13.8266 26.4944 13.3333C26.1648 12.8399 25.6962 12.4554 25.1481 12.2284C24.5999 12.0013 23.9967 11.9419 23.4147 12.0576C22.8328 12.1734 22.2982 12.4591 21.8787 12.8787C21.4591 13.2982 21.1734 13.8328 21.0576 14.4147C20.9419 14.9967 21.0013 15.5999 21.2284 16.1481C21.4554 16.6962 21.8399 17.1648 22.3333 17.4944ZM23 22C23 23.3261 22.4732 24.5979 21.5355 25.5355C20.5979 26.4732 19.3261 27 18 27C16.6739 27 15.4021 26.4732 14.4645 25.5355C13.5268 24.5979 13 23.3261 13 22H23Z",
              fill: "currentColor",
            }),
          });
        }
        function G0(i) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...i,
            children: (0, c.jsx)("path", {
              d: "M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z",
              fill: "currentColor",
            }),
          });
        }
        var U0 = n(44688),
          e1 = n(2259),
          C1 = n(51278);
        function T1(i) {
          return (0, V.I)(u1(i));
        }
        function u1(i) {
          return {
            queryKey: ["market", "app_facets", i],
            enabled: !!i,
            queryFn: async () => Q0(i),
          };
        }
        async function Q0(i) {
          const r = await fetch(
            `${x.TS.COMMUNITY_BASE_URL}market/appfacets/${i}`,
          );
          if (!r || !r.ok)
            throw new Error(`Failed to load market filters for app ${i}`);
          const d = await r.json();
          if (!d.success || !d.facets)
            throw new Error(`Loaded malformed market filters for app ${i}`);
          return d.facets;
        }
        const A0 = 753,
          $0 = "Game";
        function _0() {
          return (0, V.I)(p1(Q0));
        }
        function p1(i) {
          return {
            queryKey: ["marketfilters", A0],
            queryFn: async () => {
              const r = await i(A0);
              if (!r)
                throw new Error(
                  "Failed to load market facets for Steam Inventory items",
                );
              const d = r[$0];
              if ((delete r[$0], !d.tags))
                return { rgApps: [], facets: {}, mapAppIDs: {} };
              const C = {},
                M = [];
              for (const Z of Object.keys(d.tags)) {
                const n0 = d.tags[Z],
                  a0 = parseInt(Z.slice(Z.indexOf("_") + 1));
                isNaN(a0) ||
                  ((C[a0] = !0),
                  M.push({
                    appid: a0,
                    name: n0.localized_name,
                    icon: `${x.TS.COMMUNITY_BASE_URL}market/steamitemfiltersicon/${a0}`,
                  }));
              }
              return {
                rgApps: (0, C1.Z)(M, (Z) => Z.name),
                mapAppIDs: C,
                facets: r,
              };
            },
          };
        }
        var l2 = n(52438);
        const E1 = {
          name: "bMarketOptOut",
          preferenceControls: { isTechnicallyNecessary: !0 },
          options: {
            path: "/market",
            maxAge: 720 * 60 * 60 * 1e3,
            httpOnly: !1,
          },
        };
        function o2() {
          return (0, l2.j_)(E1) === "1";
        }
        function V2(i) {
          i ? WriteCookie(E1, "1") : ClearCookie(E1);
        }
        const g1 = "4",
          U1 = (0, o.createContext)({});
        function a2(i) {
          const {
              filter: r,
              onFilterChange: d,
              config: C,
              preload: M = {},
              debugMode: E,
              onSearch: Z,
              ...n0
            } = i,
            a0 = r.bSteamItems,
            k = (g0) => d({ ...r, bSteamItems: g0 }),
            e0 = (g0) => {
              g0.preventDefault(), g0.stopPropagation();
            },
            b0 = (0, w0.LT)("sm"),
            k0 = a0 ? n0.rgAppData && n0.rgAppData[L1] : r.filterInGame.app,
            I = W1(k0);
          return (0, c.jsx)(M0.u.Provider, {
            value: !!E,
            children: (0, c.jsx)(z0.AL.Provider, {
              value: C,
              children: (0, c.jsx)(U1.Provider, {
                value: M,
                children: (0, c.jsx)(u.az, {
                  minWidth: { initial: void 0, sm: "min( 75vw, 800px )" },
                  children: (0, c.jsxs)("form", {
                    onSubmit: e0,
                    children: [
                      !C.bNewMarket &&
                        (0, c.jsx)(K.D, {
                          size: "7",
                          weight: "heavy",
                          children: d0.K.Localize("#AdvancedSearch_Heading"),
                        }),
                      (0, c.jsxs)(L.s, {
                        gap: "2",
                        align: { initial: "stretch", sm: "start" },
                        marginY: g1,
                        direction: { initial: "column", sm: "row" },
                        children: [
                          (0, c.jsx)(u.az, {
                            flexGrow: "0",
                            children: (0, c.jsx)(J0, {
                              showSteamItems: a0,
                              onShowSteamItemsChange: k,
                            }),
                          }),
                          b0 &&
                            (0, c.jsx)(u.az, {
                              style: { marginTop: "10px" },
                              children: (0, c.jsx)(c0.w, {
                                size: "1",
                                orientation: "vertical",
                                color: "dull-9",
                              }),
                            }),
                          (0, c.jsxs)(L.s, {
                            direction: "column",
                            flexGrow: "1",
                            gap: "2",
                            children: [
                              (0, c.jsx)(h1, {
                                app: k0 || void 0,
                                value: r.strSearch || "",
                                onTextChange: (g0) =>
                                  d({ ...r, strSearch: g0 }),
                              }),
                              I &&
                                (0, c.jsx)(W.S, {
                                  marginLeft: "4",
                                  checked: !!r.bSearchDescriptions,
                                  onChange: (g0) =>
                                    d({ ...r, bSearchDescriptions: g0 }),
                                  title: d0.K.Localize(
                                    "#AdvancedSearch_IncludeDescriptions_Tooltip",
                                  ),
                                  children: (0, c.jsx)(f.EY, {
                                    contrast: "description",
                                    children: d0.K.Localize(
                                      "#AdvancedSearch_IncludeDescriptions",
                                    ),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, c.jsxs)(v2, {
                        children: [
                          !a0 &&
                            (0, c.jsx)(I1, {
                              ...n0,
                              filter: r.filterInGame,
                              onFilterChange: (g0) =>
                                d({ ...r, filterInGame: g0 }),
                              suggestedInitialApp: r.filterSteam.app,
                            }),
                          a0 &&
                            (0, c.jsx)(i2, {
                              ...n0,
                              filter: r.filterSteam,
                              onFilterChange: (g0) =>
                                d({ ...r, filterSteam: g0 }),
                              suggestedInitialApp: r.filterInGame.app,
                            }),
                        ],
                      }),
                      (0, c.jsx)(z1, {
                        filter: r,
                        onFilterChange: d,
                        config: C,
                        onSearch: Z,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }
        const S2 = 440,
          M2 = 570;
        function W1(i) {
          return !!i;
        }
        function z1(i) {
          const { filter: r, onFilterChange: d, config: C, onSearch: M } = i,
            E = r.bSteamItems,
            [Z, n0] = (0, o.useState)(!1),
            a0 = () => {
              d(
                E
                  ? {
                      ...r,
                      strSearch: "",
                      filterSteam: {
                        ...r.filterSteam,
                        facets: {},
                        price: [0, C.maxPrice],
                      },
                    }
                  : {
                      ...r,
                      strSearch: "",
                      filterInGame: {
                        ...r.filterInGame,
                        facets: {},
                        price: [0, C.maxPrice],
                      },
                    },
              );
            },
            k = E ? r.filterSteam : r.filterInGame,
            e0 =
              k.price[0] !== 0 ||
              k.price[1] !== C.maxPrice ||
              Object.keys(k.facets).length > 0,
            b0 =
              !r.strSearch &&
              !k.app &&
              !Object.keys(k.facets).length &&
              k.price[0] === 0 &&
              k.price[1] === C.maxPrice,
            k0 = () => {
              n0(!0), M(r, C);
            },
            I = (0, w0.LT)("sm"),
            g0 = (0, c.jsx)(p.$, {
              type: "submit",
              onClick: k0,
              disabled: Z || b0,
              children: d0.K.Localize("#AdvancedSearch_Search"),
            });
          return (0, c.jsxs)(L.s, {
            justify: I ? "between" : void 0,
            marginTop: g1,
            direction: I ? "row" : "column",
            gap: "2",
            children: [
              C.bNewMarket
                ? (0, c.jsx)("div", {})
                : (0, c.jsx)(L.s, {
                    gap: "2",
                    align: "center",
                    justify: "between",
                    children: (0, c.jsx)("a", {
                      href: `${x.TS.COMMUNITY_BASE_URL}groups/community_market/discussions/`,
                      className: U0.BetaLink,
                      children: d0.K.Localize("#AdvancedSearch_BetaTag"),
                    }),
                  }),
              I &&
                (0, c.jsxs)(L.s, {
                  gap: g1,
                  justify: "end",
                  children: [
                    I &&
                      (0, c.jsx)(p.$, {
                        color: "dull",
                        variant: "ghost",
                        onClick: a0,
                        disabled: !e0,
                        children: d0.K.Localize("#AdvancedSearch_Reset"),
                      }),
                    g0,
                  ],
                }),
              !I && g0,
            ],
          });
        }
        function h1(i) {
          const { value: r, onTextChange: d, app: C } = i,
            [M, E] = (0, o.useState)(!0);
          return (0, c.jsx)(Y1, {
            radius: "full",
            variant: "inset",
            app: M ? C : void 0,
            onClearApp: () => E(!1),
            value: r,
            onTextChange: d,
          });
        }
        function Y1(i) {
          var r, d;
          const {
              value: C,
              onTextChange: M,
              app: E,
              onClearApp: Z,
              popoverWidth: n0,
              ...a0
            } = i,
            k = (0, M0.b)(),
            e0 = E == null ? void 0 : E.appid,
            b0 = !!C && C.length > 2,
            k0 = (0, V.I)({
              queryKey: ["market_search_suggestions", C, e0],
              queryFn: async () =>
                await (
                  await fetch(
                    `/market/searchsuggestionsresults?q=${C}${e0 ? `&appid=${e0}` : ""}${k ? "&debug=1" : ""}`,
                  )
                ).json(),
              placeholderData: (B0) => B0,
              enabled: b0,
              staleTime: k ? 0 : 1 / 0,
            }),
            I = ((r = k0.data) == null ? void 0 : r.apps) || [],
            g0 = (((d = k0.data) == null ? void 0 : d.results) || []).slice(
              0,
              10,
            ),
            E0 = I.map((B0) => `app|${B0.appid}`).concat(
              g0.map((B0) => `item|${B0.market_hash_name}`),
            ),
            D1 = l0({
              onTextChange: M,
              suggestions: E0,
              onSuggestionSelected: (B0, m1) => {
                m1.preventDefault();
                const A1 = B0.indexOf("|");
                if (A1 === -1) return;
                const F1 = B0.slice(0, A1),
                  t2 = B0.slice(A1 + 1);
                if (F1 === "item") {
                  const x1 = g0.find((B1) => B1.market_hash_name === t2);
                  x1 &&
                    (window.location.href = O0.N.Item(
                      x1.app_id,
                      x1.market_hash_name,
                    ));
                } else if (F1 === "app") {
                  const x1 = I.find((B1) => B1.appid === Number(t2));
                  x1 &&
                    (window.location.href = O0.N.Search({
                      search: `appid=${x1.appid}`,
                    }));
                }
              },
            }),
            [j1, H1] = (0, o.useState)(!1),
            [m2, n2] = (0, o.useState)(!1),
            R1 = j1 || !m2,
            e2 = (0, e1.wY)(
              (0, o.useCallback)((B0) => {
                const m1 = B0.contentRect.width < 300;
                H1(m1);
              }, []),
            ),
            x2 = E
              ? (0, c.jsxs)(L.s, {
                  cursor: "pointer",
                  radius: a0.radius || "sm",
                  background: "dull-6",
                  paddingY: "1",
                  paddingX: "2",
                  align: "center",
                  gap: "1",
                  role: "button",
                  maxWidth: "24ch",
                  onMouseDown: Z,
                  children: [
                    (0, c.jsx)(m._, {
                      height: "20px",
                      objectFit: "contain",
                      src: E.icon,
                      alt: "",
                    }),
                    (0, c.jsx)(y1, { visible: !R1, children: E.name }),
                    (0, c.jsx)(N.g, {}),
                  ],
                })
              : null,
            C2 =
              E && !R1
                ? d0.K.Localize(
                    "#AdvancedSearch_TextSearch_PlaceholderWithApp",
                    E.name,
                  )
                : d0.K.Localize("#AdvancedSearch_TextSearch_Placeholder");
          return (0, c.jsxs)(A.Root, {
            state: D1,
            popoverWidth: n0,
            children: [
              (0, c.jsx)(A.TextInput, {
                value: C,
                placeholder: C2,
                ...a0,
                title: d0.K.Localize("#AdvancedSearch_TextSearch_Tooltip"),
                beforeContent: x2,
                ref: e2,
                onFocus: () => n2(!0),
                onBlur: () => n2(!1),
                maxLength: 90,
                clearable: !0,
              }),
              (0, c.jsxs)(A.Suggestions, {
                children: [
                  b0 && I.map((B0) => (0, c.jsx)(c1, { ...B0 }, B0.appid)),
                  b0 &&
                    g0.map((B0, m1) =>
                      (0, c.jsx)(
                        r2,
                        {
                          name: B0.market_name,
                          hashName: B0.market_hash_name,
                          appName: B0.app_name,
                          appid: B0.app_id,
                          img: B0.icon_url,
                          searchScore: B0.search_score,
                        },
                        B0.market_hash_name + m1,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function y1(i) {
          const { visible: r, children: d } = i;
          return (0, c.jsx)(u.az, {
            className: U0.Collapse,
            "data-visible": !!r,
            children: (0, c.jsx)(f.EY, { truncate: !0, children: d }),
          });
        }
        function r2(i) {
          const {
              name: r,
              hashName: d,
              img: C,
              appName: M,
              searchScore: E,
              appid: Z,
            } = i,
            n0 = (0, M0.b)();
          return (0, c.jsxs)(A.Suggestion, {
            value: `item|${d}`,
            render: (a0, k) =>
              (0, c.jsx)(d1, {
                focused: k.focused,
                link: O0.N.Item(Z, d),
                ...a0,
              }),
            children: [
              (0, c.jsx)("img", {
                style: {
                  margin: "8px",
                  height: "60px",
                  width: "60px",
                  objectFit: "contain",
                  filter: "drop-shadow( 0 0 1px rgba( 0, 0, 0, .5) )",
                },
                src: C,
                alt: "",
              }),
              (0, c.jsxs)(L.s, {
                direction: "column",
                gap: "1",
                minWidth: "0",
                children: [
                  (0, c.jsx)(f.EY, {
                    size: "3",
                    weight: "medium",
                    truncate: !0,
                    contrast: "title",
                    children: r,
                  }),
                  (0, c.jsx)(f.EY, { size: "1", truncate: !0, children: M }),
                ],
              }),
              n0 &&
                (0, c.jsx)(c.Fragment, {
                  children:
                    E > 0 ? (0, c.jsx)(f.EY, { size: "1", children: E }) : null,
                }),
            ],
          });
        }
        function c1(i) {
          const { name: r, icon: d, appid: C } = i;
          return (0, c.jsxs)(A.Suggestion, {
            value: `app|${C}`,
            render: (M, E) =>
              (0, c.jsx)(d1, {
                focused: E.focused,
                link: O0.N.Search({ search: `appid=${C}` }),
                ...M,
              }),
            children: [
              (0, c.jsx)("img", {
                style: {
                  margin: "8px",
                  height: "24px",
                  width: "24px",
                  objectFit: "contain",
                  filter: "drop-shadow( 0 0 1px rgba( 0, 0, 0, .5) )",
                },
                src: d,
                alt: "",
              }),
              (0, c.jsx)(L.s, {
                direction: "column",
                gap: "1",
                minWidth: "0",
                children: (0, c.jsx)(f.EY, {
                  size: "2",
                  weight: "medium",
                  truncate: !0,
                  contrast: "title",
                  children: r,
                }),
              }),
            ],
          });
        }
        function d1(i) {
          const { focused: r, link: d, ...C } = i;
          return (0, c.jsx)("a", {
            href: d,
            className: U0.UndecoratedLink,
            children: (0, c.jsx)(L.s, {
              align: "center",
              gap: "2",
              className: U0.SearchSuggestion,
              radius: "sm",
              margin: "2",
              "data-focused": r,
              paddingLeft: "2",
              ...C,
            }),
          });
        }
        function I1(i) {
          var r;
          const {
              rgApps: d = [],
              rgAppData: C = {},
              filter: M,
              onFilterChange: E,
              suggestedInitialApp: Z,
            } = i,
            [n0, a0] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            n0 || (a0(!0), Z && C[Z.appid] && E({ ...M, app: C[Z.appid] }));
          }, [E, M, Z, C, n0]);
          const k = !M.app && n0,
            e0 = Q1(k),
            b0 = (I) => E({ ...M, app: C[I] || null, facets: {} }),
            k0 = (0, o.useMemo)(
              () => d.filter((I) => I !== L1 && C[I]).map((I) => C[I]),
              [d, C],
            );
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(X1, {
                apps: k0,
                selectedApp: M.app,
                onSelectionChange: (I) => E({ ...M, app: I, facets: {} }),
              }),
              k &&
                (0, c.jsx)(K1, {
                  loading: e0.isLoading,
                  apps: (r = e0.data) == null ? void 0 : r.rgInGame,
                  filterBy: d,
                  onSelect: b0,
                }),
              !!M.app &&
                (0, c.jsx)(f2, {
                  appid: M.app.appid,
                  state: M,
                  onStateChange: E,
                }),
            ],
          });
        }
        const L1 = 753,
          $1 = "Game";
        function i2(i) {
          var r, d, C;
          const { filter: M, onFilterChange: E, suggestedInitialApp: Z } = i,
            [n0, a0] = (0, o.useState)(!1),
            k = !M.app && n0,
            e0 = Q1(k),
            b0 = _0(),
            { facets: k0 = {}, rgApps: I, mapAppIDs: g0 } = b0.data || {},
            E0 = !M.facets.Event || Object.keys(M.facets).length === 0;
          if (
            ((0, o.useEffect)(() => {
              !n0 && g0 && (a0(!0), Z && g0[Z.appid] && E({ ...M, app: Z }));
            }, [n0, Z, g0, E, M]),
            b0.isLoading)
          )
            return (0, c.jsx)(c2, {});
          if (b0.isError || !b0.data || !I || !k0)
            return (0, c.jsx)(w1, {
              children: (0, c.jsx)(f.EY, {
                size: "4",
                children: d0.K.Localize("#AdvancedSearch_FacetLoadError"),
              }),
            });
          const f1 = (j1) =>
              E({
                ...M,
                app: I.find((H1) => H1.appid === j1) || null,
                facets: {},
              }),
            D1 =
              (r = e0.data) != null && r.rgPlaytime.length
                ? (d = e0.data) == null
                  ? void 0
                  : d.rgPlaytime
                : (C = e0.data) == null
                  ? void 0
                  : C.rgInGame;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              E0 &&
                (0, c.jsx)(X1, {
                  apps: I,
                  selectedApp: M.app,
                  onSelectionChange: (j1) => E({ ...M, app: j1, facets: {} }),
                }),
              E0 &&
                k &&
                (0, c.jsx)(K1, {
                  loading: e0.isLoading,
                  apps: D1,
                  filterBy: g0,
                  onSelect: f1,
                }),
              (0, c.jsx)(Y, {
                marginTop: "3",
                facets: k0,
                state: M,
                onStateChange: E,
              }),
            ],
          });
        }
        function K1(i) {
          const { apps: r = [], filterBy: d = {}, onSelect: C, loading: M } = i,
            E = !(0, w0.LT)("sm"),
            Z = (0, o.useMemo)(
              () =>
                Array.isArray(d)
                  ? d.reduce((E0, f1) => ({ ...E0, [f1]: !0 }), {})
                  : d,
              [d],
            ),
            n0 = r.filter(({ appid: E0 }) => Z[E0]).slice(0, 8),
            a0 = (E0, f1) => {
              (E0 === " " || E0 === "Enter") && C(f1);
            };
          let k = [];
          if (M)
            for (let E0 = 0; E0 < 20; E0++)
              k.push((0, c.jsx)(z.O, { width: "92px", height: "138px" }, E0));
          const e0 = x.iA.logged_in,
            [b0, k0] = (0, o.useState)(null),
            I = (0, e1.wY)(k0);
          let g0 = n0;
          if (!E) {
            const E0 = b0 ? Math.floor((b0.contentRect.width - 10) / 104) : 0;
            (g0 = g0.slice(0, E0)), (k = k.slice(0, E0));
          }
          return (0, c.jsxs)(L.s, {
            direction: "column",
            marginTop: "3",
            marginBottom: "2",
            children: [
              (0, c.jsx)(f.EY, {
                weight: "medium",
                size: "3",
                contrast: "title",
                children: e0
                  ? d0.K.Localize("#AdvancedSearch_AppSelect_YourGames")
                  : d0.K.Localize("#AdvancedSearch_AppSelect_PopularGames"),
              }),
              (0, c.jsxs)("div", {
                className: (0, D0.A)(U0.TruncatingPortraitRow, E && U0.Compact),
                ref: I,
                children: [
                  !M &&
                    g0.map((E0) =>
                      (0, c.jsx)(
                        u.az,
                        {
                          onClick: () => C(E0.appid),
                          tabIndex: 0,
                          onKeyDown: (f1) => a0(f1.key, E0.appid),
                          role: "button",
                          width: "92px",
                          height: "138px",
                          flexGrow: "1",
                          flexBasis: "92px",
                          children: (0, c.jsx)("img", {
                            src: E0.img,
                            alt: E0.name,
                            style: { width: "92px" },
                          }),
                        },
                        E0.appid,
                      ),
                    ),
                  M && k,
                ],
              }),
            ],
          });
        }
        function v2(i) {
          return (0, c.jsx)(L.s, {
            minHeight: "min(400px, 30vh)",
            direction: "column",
            children: i.children,
          });
        }
        function h2(i) {
          const r = {
            strSearch: "",
            bSearchDescriptions: i.bSearchDescriptions,
            filterInGame: {
              app: null,
              facets: {},
              accessories: {},
              properties: {},
              price: [0, i.config.maxPrice],
            },
            filterSteam: {
              app: null,
              facets: {},
              accessories: {},
              properties: {},
              price: [0, i.config.maxPrice],
            },
            bSteamItems: !1,
          };
          let d = r.filterInGame;
          const {
            strQuery: C,
            unFilterApp: M,
            rgFilterData: E,
            rgAppData: Z = {},
          } = i;
          typeof M == "number" &&
            Z[M] &&
            (M === L1
              ? ((r.bSteamItems = !0), (d = r.filterSteam))
              : (d.app = Z[M])),
            typeof C == "string" && (r.strSearch = C);
          const n0 = d2(E);
          if (
            (n0 && (d.facets = n0),
            typeof i.unFilterMinPrice == "number" &&
              i.unFilterMinPrice > 0 &&
              (d.price[0] = i.unFilterMinPrice),
            typeof i.unFilterMaxPrice == "number" &&
              i.unFilterMaxPrice < i.config.maxPrice &&
              (d.price[1] = i.unFilterMaxPrice),
            r.bSteamItems && E && E[$1] && d.facets.Game)
          ) {
            const a0 = Object.keys(d.facets.Game)[0],
              k = E[$1].tags;
            if (k && a0) {
              const e0 = k[a0];
              if (e0) {
                const b0 = parseInt(a0.slice(a0.indexOf("_") + 1));
                isNaN(b0) ||
                  ((d.app = { appid: b0, name: e0.localized_name, icon: "" }),
                  delete d.facets.Game);
              }
            }
          }
          return { state: r, config: i.config };
        }
        function d2(i) {
          if (!i || typeof i != "object") return null;
          const r = {};
          for (const d of Object.keys(i)) {
            const C = i[d];
            if (!(!C || typeof C != "object"))
              for (const M of Object.keys(C.tags)) {
                const E = C.tags[M];
                !E ||
                  typeof E != "object" ||
                  (E.selected === !0 &&
                    (r[C.name] || (r[C.name] = {}), (r[C.name][M] = !0)));
              }
          }
          return r;
        }
        function u2(i) {
          let r = { ...i, facets: { ...i.facets } };
          return (
            i.app && (r.facets.Game = { [`app_${i.app.appid}`]: !0 }),
            (r.app = { appid: L1, name: "", icon: "" }),
            r
          );
        }
        function P1(i, r) {
          const {
              strSearch: d,
              bSearchDescriptions: C,
              bSteamItems: M,
              filterInGame: E,
              filterSteam: Z,
            } = i,
            n0 = M ? u2(Z) : E,
            {
              app: a0,
              facets: k,
              accessories: e0,
              price: [b0, k0],
            } = n0,
            I = new FormData();
          a0 && I.set("appid", a0.appid.toString()),
            d && I.set("q", d),
            d && C && W1(n0.app) && I.set("descriptions", "1");
          for (const g0 of Object.keys(k))
            if (k[g0])
              for (const E0 of Object.keys(k[g0]))
                k[g0][E0] &&
                  (o2()
                    ? I.append(`category_${a0.appid}_${g0}[]`, `tag_${E0}`)
                    : I.append(`category_${g0}[]`, E0));
          for (const g0 of Object.keys(e0))
            if (e0[g0])
              for (const E0 of Object.keys(e0[g0]))
                e0[g0][E0] && I.append(`accessory_${g0}[]`, E0);
          return (
            b0 > 0 && I.append("price_min", b0.toString()),
            k0 > b0 && k0 < r.maxPrice && I.append("price_max", k0.toString()),
            O0.N.Search({ search: new URLSearchParams(I) })
          );
        }
        function w1(i) {
          return (0, c.jsx)(L.s, {
            flexGrow: "1",
            radius: "sm",
            direction: "column",
            align: "center",
            justify: "center",
            marginTop: "2",
            className: U0.NoFilters,
            children: (0, c.jsx)(f.EY, {
              align: "center",
              as: "div",
              marginTop: g1,
              children: i.children,
            }),
          });
        }
        function f2(i) {
          const { appid: r, ...d } = i,
            C = T1(r),
            M = Z1(r);
          if (C.isLoading || M.isLoading) return (0, c.jsx)(c2, {});
          if (C.isError || !C.data || M.isError || !M.data)
            return (0, c.jsx)(w1, {
              children: (0, c.jsx)(f.EY, {
                size: "4",
                children: d0.K.Localize("#AdvancedSearch_FacetLoadError"),
              }),
            });
          const E = J1(r);
          return (0, c.jsx)(E, {
            appid: r,
            facets: C.data,
            accessories: M.data,
            ...d,
          });
        }
        function J1(i) {
          return (0, L0.PC)(i) && x.TS.EUNIVERSE === H0.wLO ? L0.J8 : k1;
        }
        function k1(i) {
          const { appid: r, facets: d, ...C } = i,
            M = o1(r, d);
          return M.length === 0
            ? (0, c.jsx)(c.Fragment, {
                children: (0, c.jsxs)(w1, {
                  children: [
                    (0, c.jsx)(f.EY, {
                      align: "center",
                      as: "div",
                      marginTop: g1,
                      size: "7",
                      weight: "heavy",
                      children: d0.K.Localize("#AdvancedSearch_NoFacetsSearch"),
                    }),
                    (0, c.jsx)(f.EY, {
                      align: "center",
                      as: "div",
                      marginTop: g1,
                      size: "4",
                      children: d0.K.Localize("#AdvancedSearch_NoFacets"),
                    }),
                  ],
                }),
              })
            : (0, c.jsx)(C0, { facets: M, ...C });
        }
        function p2(i) {
          return {
            queryKey: ["marketaccessories", i],
            queryFn: async () => {
              const r = await fetch(
                `${x.TS.COMMUNITY_BASE_URL}market/appaccessories/${i}`,
              );
              if (!r || !r.ok)
                throw new Error(`Failed to load market filters for app ${i}`);
              const d = await r.json();
              if (!d.success || !d.facets)
                throw new Error(`Loaded malformed market filters for app ${i}`);
              return d.facets.map((C) => ({
                facets: [],
                internal_type: "",
                localized_type: "",
                ...C,
              }));
            },
            enabled: !!i,
          };
        }
        function Z1(i) {
          return (0, V.I)(p2(i));
        }
        function Q1(i = !0) {
          const { suggestedApps: r } = (0, o.useContext)(U1);
          return (0, V.I)({
            queryKey: ["marketsuggestedapps"],
            queryFn: async () => {
              const d = await fetch(
                `${x.TS.COMMUNITY_BASE_URL}market/suggestedapps`,
              );
              if (!d || !d.ok)
                throw new Error("Failed to load suggseted market apps");
              return await d.json();
            },
            retry: !1,
            enabled: i,
            initialData: r,
          });
        }
        function X1(i) {
          const {
              selectedApp: r,
              apps: d,
              onSelectionChange: C,
              size: M = "3",
              clearable: E = !0,
              triggerRender: Z,
              triggerContent: n0,
              popoverWidth: a0,
            } = i,
            k = (0, U.Bp)({
              rgOptions: d,
              selectedValue: r || null,
              onSelectionChange: C,
              filter: (e0, b0) =>
                b0 &&
                b0.name.toLocaleLowerCase().includes(e0.toLocaleLowerCase()),
              filterPlaceholder: d0.K.Localize(
                "#AdvancedSearch_AppSelect_FilterPlaceholder",
              ),
            });
          return (0, c.jsxs)(U.G3.Root, {
            state: k,
            size: M,
            radius: "sm",
            marginBottom: "2",
            clearable: E,
            popoverWidth: a0,
            children: [
              Z && (0, c.jsx)(U.G3.Trigger, { render: Z, children: n0 }),
              !Z &&
                (0, c.jsxs)(U.G3.Trigger, {
                  children: [
                    r && (0, c.jsx)(q1, { app: r, size: M }),
                    !r &&
                      (0, c.jsx)(U.G3.Placeholder, {
                        weight: "medium",
                        contrast: "title",
                        children: d0.K.Localize(
                          "#AdvancedSearch_AppSelect_Placeholder",
                        ),
                      }),
                  ],
                }),
              (0, c.jsx)(U.G3.VirtualizedOptions, {
                estimateSize: () => 48,
                items: k.rgFilteredOptions,
                renderItem: (e0, b0) =>
                  (0, c.jsx)(
                    U.G3.VirtualizedOption,
                    {
                      value: e0,
                      virtualItem: b0,
                      children: (0, c.jsx)(q1, {
                        app: e0,
                        active: e0 === r,
                        size: M,
                      }),
                    },
                    e0.appid,
                  ),
              }),
            ],
          });
        }
        function q1(i) {
          const {
            app: { icon: r, name: d },
            active: C,
            size: M,
          } = i;
          return (0, c.jsxs)(L.s, {
            align: "center",
            gap: "2",
            children: [
              r && (0, c.jsx)(g2, { icon: r, size: M }),
              (0, c.jsx)(f.EY, {
                color: C ? "accent-8" : void 0,
                contrast: C ? void 0 : "title",
                children: d,
              }),
            ],
          });
        }
        const _1 = {};
        function g2(i) {
          const { icon: r, size: d } = i,
            [C, M] = (0, o.useState)(!!_1[r]);
          (0, o.useEffect)(() => {
            let a0 = !0;
            return (
              setTimeout(() => {
                a0 && M(!0);
              }, 100),
              () => {
                a0 = !1;
              }
            );
          }, []),
            C && (_1[r] = !0);
          const E = (0, h0.n)(d),
            n0 = `var(--spacing-${parseInt(E) + 3})`;
          return C
            ? (0, c.jsx)("img", {
                src: r,
                style: {
                  width: n0,
                  height: n0,
                  visibility: C ? void 0 : "hidden",
                },
                alt: "",
              })
            : (0, c.jsx)(u.az, {
                width: n0,
                height: n0,
                background: "dull-10",
              });
        }
        function c2() {
          return (0, c.jsx)(L.s, {
            justify: "center",
            align: "center",
            marginTop: "6",
            children: (0, c.jsx)(H.k, { size: "4" }),
          });
        }
      },
      41773: (r0, t0, n) => {
        "use strict";
        n.d(t0, { PC: () => y2, J8: () => N2 });
        var c = n(7850),
          o = n(99483),
          x = n(90626),
          V = n(71742),
          u = n(15353),
          K = n(95994),
          L = n(17171),
          c0 = n(68031),
          W = n(93340),
          f = n(15252),
          p = n(60351),
          g = n(63029),
          y = n(12204),
          G = n(71989),
          J = n(58952),
          l0 = n(74769),
          I0 = n(4709),
          h = n(72609);
        const Q =
            n.p +
            "images/applications/community/knife.png?v=valveisgoodatcaching",
          B =
            n.p + "images/applications/community/mg.png?v=valveisgoodatcaching",
          A =
            n.p +
            "images/applications/community/pistol.png?v=valveisgoodatcaching",
          P =
            n.p +
            "images/applications/community/rifle.png?v=valveisgoodatcaching",
          S =
            n.p +
            "images/applications/community/shotgun.png?v=valveisgoodatcaching",
          m =
            n.p +
            "images/applications/community/smg.png?v=valveisgoodatcaching",
          N =
            n.p +
            "images/applications/community/sniper.png?v=valveisgoodatcaching",
          z =
            n.p +
            "images/applications/community/aug.png?v=valveisgoodatcaching",
          U =
            n.p +
            "images/applications/community/ak47.png?v=valveisgoodatcaching",
          h0 =
            n.p +
            "images/applications/community/sg556.png?v=valveisgoodatcaching",
          H =
            n.p +
            "images/applications/community/m4a1_silencer.png?v=valveisgoodatcaching",
          L0 =
            n.p +
            "images/applications/community/galilar.png?v=valveisgoodatcaching",
          z0 =
            n.p +
            "images/applications/community/famas.png?v=valveisgoodatcaching",
          M0 =
            n.p +
            "images/applications/community/m4a1.png?v=valveisgoodatcaching",
          w0 =
            n.p +
            "images/applications/community/bizon.png?v=valveisgoodatcaching",
          H0 =
            n.p +
            "images/applications/community/mac10.png?v=valveisgoodatcaching",
          D0 =
            n.p +
            "images/applications/community/mp7.png?v=valveisgoodatcaching",
          O0 =
            n.p +
            "images/applications/community/ump45.png?v=valveisgoodatcaching",
          d0 =
            n.p +
            "images/applications/community/mp9.png?v=valveisgoodatcaching",
          X0 =
            n.p +
            "images/applications/community/mp5sd.png?v=valveisgoodatcaching",
          J0 =
            n.p +
            "images/applications/community/p90.png?v=valveisgoodatcaching",
          N0 =
            n.p +
            "images/applications/community/p250.png?v=valveisgoodatcaching",
          Z0 =
            n.p +
            "images/applications/community/tec9.png?v=valveisgoodatcaching",
          s1 =
            n.p +
            "images/applications/community/fiveseven.png?v=valveisgoodatcaching",
          q0 =
            n.p +
            "images/applications/community/revolver.png?v=valveisgoodatcaching",
          o1 =
            n.p +
            "images/applications/community/deagle.png?v=valveisgoodatcaching",
          V1 =
            n.p +
            "images/applications/community/glock.png?v=valveisgoodatcaching",
          r1 =
            n.p +
            "images/applications/community/usp_silencer.png?v=valveisgoodatcaching",
          S1 =
            n.p +
            "images/applications/community/elite.png?v=valveisgoodatcaching",
          C0 =
            n.p +
            "images/applications/community/hkp2000.png?v=valveisgoodatcaching",
          M1 =
            n.p +
            "images/applications/community/cz75a.png?v=valveisgoodatcaching",
          w =
            n.p +
            "images/applications/community/ssg08.png?v=valveisgoodatcaching",
          j =
            n.p +
            "images/applications/community/scar20.png?v=valveisgoodatcaching",
          Y =
            n.p +
            "images/applications/community/g3sg1.png?v=valveisgoodatcaching",
          $ =
            n.p +
            "images/applications/community/awp.png?v=valveisgoodatcaching",
          i0 =
            n.p +
            "images/applications/community/mag7.png?v=valveisgoodatcaching",
          m0 =
            n.p +
            "images/applications/community/nova.png?v=valveisgoodatcaching",
          o0 =
            n.p +
            "images/applications/community/sawedoff.png?v=valveisgoodatcaching",
          j0 =
            n.p +
            "images/applications/community/xm1014.png?v=valveisgoodatcaching",
          X =
            n.p +
            "images/applications/community/negev.png?v=valveisgoodatcaching",
          O =
            n.p +
            "images/applications/community/m249.png?v=valveisgoodatcaching",
          G0 =
            n.p +
            "images/applications/community/knife_push.png?v=valveisgoodatcaching",
          U0 =
            n.p +
            "images/applications/community/knife_survival_bowie.png?v=valveisgoodatcaching",
          e1 =
            n.p +
            "images/applications/community/knife_gypsy_jackknife.png?v=valveisgoodatcaching",
          C1 =
            n.p +
            "images/applications/community/knife_falchion.png?v=valveisgoodatcaching",
          T1 =
            n.p +
            "images/applications/community/knife_tactical.png?v=valveisgoodatcaching",
          u1 =
            n.p +
            "images/applications/community/knife_gut.png?v=valveisgoodatcaching",
          Q0 =
            n.p +
            "images/applications/community/knife_kukri.png?v=valveisgoodatcaching",
          A0 =
            n.p +
            "images/applications/community/knife_canis.png?v=valveisgoodatcaching",
          $0 =
            n.p +
            "images/applications/community/knife_cord.png?v=valveisgoodatcaching",
          _0 =
            n.p +
            "images/applications/community/knife_ursus.png?v=valveisgoodatcaching",
          p1 =
            n.p +
            "images/applications/community/knife_flip.png?v=valveisgoodatcaching",
          l2 =
            n.p +
            "images/applications/community/knife_outdoor.png?v=valveisgoodatcaching",
          E1 =
            n.p +
            "images/applications/community/knife_css.png?v=valveisgoodatcaching",
          o2 =
            n.p +
            "images/applications/community/knife_skeleton.png?v=valveisgoodatcaching",
          V2 =
            n.p +
            "images/applications/community/knife_stiletto.png?v=valveisgoodatcaching",
          g1 =
            n.p +
            "images/applications/community/knife_widowmaker.png?v=valveisgoodatcaching",
          U1 =
            n.p +
            "images/applications/community/knife_butterfly.png?v=valveisgoodatcaching",
          a2 =
            n.p +
            "images/applications/community/knife_m9_bayonet.png?v=valveisgoodatcaching",
          S2 =
            n.p +
            "images/applications/community/knife_karambit.png?v=valveisgoodatcaching",
          M2 =
            n.p +
            "images/applications/community/bayonet.png?v=valveisgoodatcaching";
        function W1() {
          return {
            Knife: (0, h.YJ)(Q),
            MG: (0, h.YJ)(B),
            Pistol: (0, h.YJ)(A),
            Rifle: (0, h.YJ)(P),
            Shotgun: (0, h.YJ)(S),
            SMG: (0, h.YJ)(m),
            Sniper: (0, h.YJ)(N),
          };
        }
        function z1() {
          return {
            aug: (0, h.YJ)(z),
            ak47: (0, h.YJ)(U),
            sg556: (0, h.YJ)(h0),
            m4a1_silencer: (0, h.YJ)(H),
            galilar: (0, h.YJ)(L0),
            famas: (0, h.YJ)(z0),
            m4a1: (0, h.YJ)(M0),
            bizon: (0, h.YJ)(w0),
            mac10: (0, h.YJ)(H0),
            mp7: (0, h.YJ)(D0),
            ump45: (0, h.YJ)(O0),
            mp9: (0, h.YJ)(d0),
            mp5sd: (0, h.YJ)(X0),
            p90: (0, h.YJ)(J0),
            p250: (0, h.YJ)(N0),
            tec9: (0, h.YJ)(Z0),
            fiveseven: (0, h.YJ)(s1),
            revolver: (0, h.YJ)(q0),
            deagle: (0, h.YJ)(o1),
            glock: (0, h.YJ)(V1),
            usp_silencer: (0, h.YJ)(r1),
            elite: (0, h.YJ)(S1),
            hkp2000: (0, h.YJ)(C0),
            cz75a: (0, h.YJ)(M1),
            ssg08: (0, h.YJ)(w),
            scar20: (0, h.YJ)(j),
            g3sg1: (0, h.YJ)(Y),
            awp: (0, h.YJ)($),
            mag7: (0, h.YJ)(i0),
            nova: (0, h.YJ)(m0),
            sawedoff: (0, h.YJ)(o0),
            xm1014: (0, h.YJ)(j0),
            negev: (0, h.YJ)(X),
            m249: (0, h.YJ)(O),
            knife_push: (0, h.YJ)(G0),
            knife_survival_bowie: (0, h.YJ)(U0),
            knife_gypsy_jackknife: (0, h.YJ)(e1),
            knife_falchion: (0, h.YJ)(C1),
            knife_tactical: (0, h.YJ)(T1),
            knife_gut: (0, h.YJ)(u1),
            knife_kukri: (0, h.YJ)(Q0),
            knife_canis: (0, h.YJ)(A0),
            knife_cord: (0, h.YJ)($0),
            knife_ursus: (0, h.YJ)(_0),
            knife_flip: (0, h.YJ)(p1),
            knife_outdoor: (0, h.YJ)(l2),
            knife_css: (0, h.YJ)(E1),
            knife_skeleton: (0, h.YJ)(o2),
            knife_stiletto: (0, h.YJ)(V2),
            knife_widowmaker: (0, h.YJ)(g1),
            knife_butterfly: (0, h.YJ)(U1),
            knife_m9_bayonet: (0, h.YJ)(a2),
            knife_karambit: (0, h.YJ)(S2),
            bayonet: (0, h.YJ)(M2),
          };
        }
        var h1 = n(93338);
        function Y1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 88.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M86.469,4.433V8.46l1.417,0.149
				c0.099,0.199,0.186,0.399,0.261,0.597c0.099,0.151,0.162,0.298,0.187,0.448c0,0.123-0.063,0.248-0.187,0.374
				c-0.149,0.148-0.361,0.223-0.635,0.223c-0.125,0-0.261-0.038-0.41-0.111h-0.448l-0.634,1.118l-1.194-0.485H74.791l-0.521,0.635
				l-0.598-0.448H66.51l-0.112,0.635H55.132l-1.342,0.708c-0.323,0.199-0.647,0.372-0.97,0.522
				c-0.348,0.099-0.584,0.149-0.709,0.149c-0.249,0-0.485-0.037-0.708-0.113c-0.15-0.023-0.25-0.085-0.298-0.187l-0.523-0.334h-5.11
				c0,1.267,0.286,2.573,0.858,3.918c0.497,1.167,1.281,2.46,2.35,3.877c1.095,1.444,2.661,2.886,4.7,4.328
				c-0.049,0-0.273,0.287-0.67,0.858c-0.324,0.597-0.735,1.244-1.231,1.94c-0.448,0.795-1.008,1.704-1.679,2.723
				c-1.493-1.02-2.91-2.237-4.254-3.656c-1.168-1.219-2.375-2.749-3.618-4.588c-1.243-1.792-2.274-3.93-3.096-6.417
				c-0.099-0.099-0.236-0.086-0.411,0.038c-0.125,0.075-0.224,0.162-0.299,0.261l-1.118-0.186c-0.572,0.323-1.169,0.547-1.791,0.671
				c-0.498,0.151-1.083,0.186-1.753,0.112c-0.696-0.075-1.368-0.374-2.015-0.896c-0.05,0-0.285,0.188-0.709,0.56
				c-0.422,0.375-0.882,0.859-1.379,1.454c-0.521,0.623-1.007,1.32-1.455,2.09c-0.473,0.72-0.797,1.454-0.97,2.201
				c0,0.05-0.224,0.148-0.671,0.297c-0.422,0.174-0.921,0.287-1.493,0.335c-0.546,0.026-1.069-0.098-1.565-0.374
				c-0.474-0.296-0.771-0.894-0.897-1.789c0.025-0.1,0.212-0.497,0.561-1.193c0.298-0.647,0.659-1.33,1.083-2.053
				c0.397-0.746,0.771-1.43,1.119-2.051c0.373-0.597,0.597-0.896,0.671-0.896c-0.074,0-0.286-0.147-0.633-0.447
				c-0.299-0.298-0.623-0.411-0.972-0.335c-0.073,0.025-0.322,0.111-0.745,0.26c-0.448,0.125-1.007,0.312-1.679,0.561
				c-0.673,0.249-1.417,0.522-2.238,0.82c-0.847,0.299-1.691,0.597-2.538,0.896c-1.989,0.721-4.215,1.542-6.677,2.462l-8.84,2.91
				L0.667,10.476c0.398-0.299,0.858-0.523,1.38-0.672c0.474-0.175,1.021-0.311,1.642-0.41C4.262,9.269,4.896,9.281,5.592,9.43
				c0,0.05,0.547,0.037,1.64-0.037c1.095-0.125,2.313-0.224,3.657-0.298l5.409-0.336c0.348,0.101,0.696,0.211,1.044,0.336
				c0.622,0.223,1.144,0.335,1.566,0.335c0.149,0,0.461-0.073,0.934-0.224c0.521-0.1,1.056-0.236,1.604-0.41
				c0.621-0.15,1.317-0.36,2.088-0.633l3.395-2.911l0.298,0.299h20.741c0-0.049,0.076-0.111,0.225-0.185
				c0.074-0.076,0.211-0.139,0.41-0.188c0.198-0.049,0.496-0.076,0.894-0.076l15.967,0.149c0.297,0.075,0.598,0.175,0.896,0.299
				c0.225,0.075,0.473,0.149,0.746,0.224c0.249,0.125,0.473,0.199,0.672,0.224h6.677c0.348,0.448,0.685,0.858,1.007,1.232
				c0.273,0.298,0.573,0.609,0.895,0.933c0.273,0.273,0.51,0.423,0.708,0.446h5.857l0.448-0.149c0.298-0.521,0.51-0.994,0.634-1.417
				c0.174-0.349,0.336-0.709,0.485-1.082c0.124-0.375,0.236-0.609,0.335-0.71c0.075-0.348,0.112-0.534,0.112-0.56v-0.26H86.469z
				 M35.473,12.789l-2.015,0.037c-0.398-0.025-0.746,0.085-1.044,0.335c-0.248,0.274-0.374,0.61-0.374,1.008
				c0,0.322,0.126,0.609,0.374,0.857c0.298,0.249,0.646,0.375,1.044,0.375h2.015c0.373,0,0.671-0.126,0.896-0.375
				c0.224-0.248,0.334-0.535,0.334-0.857c0-0.398-0.111-0.734-0.334-1.008C36.144,12.911,35.846,12.789,35.473,12.789z`,
            }),
          });
        }
        function y1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 75.833 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M37.072,14.253c-0.076,0.051-0.15,0.112-0.226,0.188
				c-0.174,0.2-0.262,0.45-0.262,0.75c0,0.126,0.024,0.375,0.074,0.75c0.025,0.123-0.025,0.199-0.149,0.225
				c-0.149,0.051-0.399,0.062-0.75,0.037l-0.487-0.037c-0.024,0.299-0.087,0.449-0.188,0.449h-0.9c-0.124,0-0.211,0.026-0.26,0.076
				c-0.077,0.099-0.15,0.174-0.227,0.226c-0.174,0.174-0.787,1.298-1.835,3.372c-0.252,0.475-0.277,0.888-0.076,1.239
				c0.15,0.274,0.35,0.449,0.601,0.523c0.5,0.075,1.35,0.075,2.548,0c0.925-0.099,1.638-0.336,2.137-0.711
				c0.349-0.3,1.574-2.174,3.673-5.624c0.125-0.226-0.037-0.712-0.488-1.462H37.072z M72.271,8.256
				c0.075,0.025,0.225,0.037,0.45,0.037c0.149,0,0.325-0.075,0.524-0.225h1.837l0.188,0.336c0.101,0.276,0.15,0.563,0.15,0.863
				c0,0.325-0.049,0.613-0.15,0.863c-0.099,0.225-0.188,0.337-0.262,0.337h-1.65c-0.049-0.024-0.162-0.062-0.338-0.112
				c-0.074-0.026-0.187-0.038-0.336-0.038c-0.15,0-0.3,0.024-0.45,0.076l-0.225,0.075h-1.048l-0.151-0.112H69.16l-0.15-0.15h-0.788
				c-0.05,0.176-0.163,0.263-0.336,0.263h-1.538c-0.1,0-0.2-0.037-0.3-0.112l-0.113-0.075l-10.832,0.262l-0.602,0.637H54.24
				l-0.188-0.225h-0.262l-0.15,0.225h-2.249l-0.301,2.288c-0.024,0.25-0.188,0.425-0.486,0.523l0.261,0.263l0.6,0.075
				c0.4,0.076,0.587,0.238,0.563,0.488c-0.151,0.824-0.188,1.437-0.114,1.837c0.051,0.249,0.064,0.824,0.039,1.724
				c0,1.049,0,1.699,0,1.949c0.049,0.775,0.336,1.6,0.861,2.475c0.1,0.175-0.075,0.35-0.525,0.526
				c-0.45,0.174-0.925,0.261-1.424,0.261c-0.424,0-0.974-0.1-1.649-0.299l-0.937-0.263c-0.026-1.1,0.036-2.112,0.187-3.037
				c0.051-0.349,0.225-0.962,0.526-1.836c0.199-0.599,0.262-1.036,0.187-1.313c-0.05-0.3-0.138-0.612-0.261-0.937
				c-0.151-0.326-0.251-0.551-0.301-0.674c-0.074-0.2,0.112-0.426,0.562-0.677c0.225-0.124,0.449-0.237,0.675-0.336
				c-0.9-0.05-1.836-0.1-2.813-0.149c-1.924-0.051-3.01,0-3.26,0.149c-0.726,0.475-1.675,1.538-2.848,3.186
				c-0.275,0.35-1.075,1.55-2.399,3.6c-0.549,0.799-1.074,1.324-1.575,1.574c-0.374,0.176-1.086,0.299-2.137,0.375
				c-0.849,0.049-2.086,0.112-3.71,0.187c-1.4,0.025-2.274,0.038-2.625,0.038c-0.249,0-0.413-0.075-0.488-0.225
				c-0.074-0.15-0.098-0.412-0.074-0.787c0.05-1.075,0.188-1.849,0.412-2.325c0.1-0.226,0.338-0.662,0.712-1.312
				c0.376-0.675,0.638-1.075,0.788-1.2c0.075-0.099,0.325-0.324,0.75-0.674c0.375-0.451,0.563-1,0.563-1.65
				c0-0.724-0.313-1.149-0.938-1.275c-0.273-0.048-0.974-0.024-2.098,0.075c-1.074,0.05-1.837,0.102-2.286,0.15
				c-0.75,0.051-1.174,0.175-1.274,0.375c-0.2,0.3-0.55,0.539-1.051,0.712l-0.075,1.351c0.125,1.374,0.513,3.186,1.163,5.435
				c1,3.549,1.913,5.86,2.737,6.934c0.349,0.45,0.311,0.787-0.113,1.013c-0.25,0.1-1.162,0.424-2.737,0.974
				c-1.599,0.574-2.523,0.9-2.773,0.975c-0.3,0.075-0.425-0.376-0.375-1.351c-0.224-0.424-0.511-1.036-0.86-1.836
				c-0.625-1.65-1.176-3.437-1.65-5.36c-0.45-1.925-0.775-3.774-0.975-5.548l-0.149-2.062c-0.55-0.199-0.924-0.213-1.126-0.038
				l-1.686,1.351c-0.074,0.074-0.2,0-0.375-0.225c-0.175-0.2-0.287-0.289-0.337-0.262c-0.6,0.224-1.5,0.737-2.699,1.537
				c-1.375,0.975-2.137,1.724-2.288,2.249L8.92,21.075l0.413,0.451c0.274,0.323,0.413,0.538,0.413,0.637
				c0,0.324-0.101,0.576-0.301,0.75c-0.174,0.175-0.425,0.262-0.749,0.262H4.31c-0.276,0-0.55-0.113-0.824-0.337
				c-0.325-0.3-0.575-0.7-0.75-1.2c-0.2-0.649-0.587-2.262-1.163-4.835c-0.574-2.699-0.875-4.348-0.898-4.949
				c-0.025-0.625,0.012-1.074,0.112-1.349c0.075-0.199,0.238-0.437,0.488-0.711c0.25-0.275,0.649-0.6,1.199-0.975
				c0.601-0.401,1.063-0.6,1.386-0.6l23.579-0.487V7.468l0.601-0.45c0.424-0.3,0.725-0.5,0.899-0.599
				c0.274-0.125,0.624-0.188,1.05-0.188l1.423,0.037V4.358h-0.562c0.025,0.274-0.163,0.411-0.562,0.411
				c-0.226,0-0.375-0.062-0.45-0.187l-0.075-0.224h-1.312l-0.188,0.187h-0.449c-0.226-0.325-0.337-0.874-0.337-1.649
				c0-0.751,0.1-1.162,0.299-1.238h0.337l0.225,0.15l1.275-0.037l0.074-0.263c0.075-0.149,0.25-0.225,0.524-0.225
				c0.327,0,0.487,0.15,0.487,0.451l0.375-0.039V1.059l0.712-0.113c0.225,0,0.488,0.025,0.788,0.076V1.47l2.961-0.411
				c2.049-0.274,3.237-0.412,3.56-0.412h1.163l0.524,0.412h0.526V0.833h0.412v0.151h0.75v3.674l-0.75,0.037v0.151h-0.375V4.619
				H39.47l0.3,0.45h0.487c0.35,0.051,0.537,0.138,0.562,0.261l0.15,0.713h1.237v-0.15h0.563v0.15h1.275v-0.15h0.562v0.15h1.274
				v-0.15h0.526v0.15h1.311v-0.15h0.525v0.15h1.312v-0.15h0.524v0.15h1.012l2.662,1.312v0.863l0.675,0.374h11.621l0.188-0.112
				c0.125-0.125,0.224-0.188,0.301-0.188h1.386l0.337,0.299h0.674l0.337-0.188c0.278-0.024,0.764,0,1.463,0.076l0.038-0.148
				c0.075-0.101,0.176-0.151,0.3-0.151h0.937C72.108,8.181,72.196,8.206,72.271,8.256z`,
            }),
          });
        }
        function r2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 109.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M109.289,11.317c0.052,0.129,0.104,0.256,0.155,0.385
				c0.077,0.18,0.116,0.348,0.116,0.503c0,0.256-0.154,0.617-0.464,1.08l-0.115,0.193H67.997v0.695h3.01v2.624l0.424,0.425
				c0.231,0.18,0.347,0.488,0.347,0.925c0,0.155-0.025,0.257-0.077,0.309c-0.052,0-0.078,0.039-0.078,0.116v0.116
				c0,0.309-0.064,0.462-0.192,0.462c-0.077,0-0.193,0-0.347,0c-0.18,0-0.785,0-1.814,0c-0.977,0-2.521,0-4.631,0
				c-2.11,0-5.119,0-9.03,0c-0.129,0.078-0.193,0.206-0.193,0.387c0.051,0,0.116,0.038,0.193,0.115l0.27,0.271l-0.193,0.579h-1.543
				l-0.193-0.193c-0.077-0.128-0.244-0.515-0.501-1.158c-0.257-0.591-0.283-1.08-0.078-1.466c0-0.309,0.155-0.462,0.464-0.462h0.116
				c0.644,0,1.042,0.09,1.197,0.27c0.36,0,0.785-0.103,1.273-0.308l-7.487-0.079c-0.051,0-0.372,0.091-0.964,0.271
				c-0.514,0.128-1.105,0.297-1.774,0.501c-0.644,0.181-1.262,0.349-1.853,0.501c-0.541,0.129-0.836,0.232-0.888,0.31v2.701
				l-8.836,0.926v-2.778c-0.463,0-0.746,0.063-0.849,0.192c-0.078,0.128-0.284,0.296-0.617,0.502
				c-0.31,0.308-0.695,0.514-1.158,0.617c-0.515,0.18-1.107,0.232-1.775,0.154c-0.668-0.051-1.428-0.334-2.277-0.849
				c-0.052,0-0.104,0.025-0.154,0.078c-0.077,0-0.18,0-0.309,0c0,0.333-0.013,0.732-0.038,1.196
				c-0.051,0.514-0.142,1.029-0.27,1.543c-0.078,0.514-0.232,1.004-0.463,1.467c-0.154,0.411-0.334,0.668-0.54,0.771
				c-0.361,0.207-0.966,0.271-1.815,0.193c-0.849-0.052-1.749-0.168-2.701-0.347c-0.951-0.129-1.827-0.271-2.624-0.425
				c-0.796-0.232-1.286-0.398-1.466-0.501c-0.18-0.128-0.541-0.514-1.08-1.159c-0.386-0.308-0.773-0.656-1.159-1.042
				c-0.385-0.334-0.629-0.514-0.732-0.54H9.532c-0.206,1.39-0.334,2.212-0.385,2.469c-0.026,0.206-0.104,0.309-0.232,0.309
				c-0.076,0.18-0.231,0.271-0.463,0.271c-0.206,0-0.644-0.091-1.313-0.271c-0.514,0-1.029,0-1.542,0
				c-0.541-0.026-0.876-0.026-1.003,0c-0.232,0-0.491,0.038-0.772,0.117c-0.335,0.102-0.733,0.167-1.197,0.193
				c-0.361,0.127-0.771,0.218-1.236,0.269c-0.514,0.077-0.822,0.143-0.925,0.193H0.193c-0.077,0-0.115-0.039-0.115-0.116
				C0.025,24.721,0,24.502,0,24.167c0-0.283,0-0.771,0-1.466c0-0.72,0-1.711,0-2.972c0.128-1.184,0.193-2.328,0.193-3.435
				c0-1.183,0-2.032,0-2.547c0-0.205,0.258-0.424,0.772-0.654c0.463-0.207,1.607-0.285,3.435-0.233h1.003l0.077-0.077l0.117-0.077
				c0.051,0,0.114-0.039,0.193-0.117c0.076-0.051,0.179-0.128,0.308-0.231h9.185c0.206,0.026,0.411,0.142,0.617,0.348
				c0.464,0.308,0.811,0.655,1.042,1.041h10.419c0.078-0.205,0.18-0.527,0.309-0.964c0.129-0.386,0.193-0.708,0.193-0.964v-0.231
				h0.078c0.283-0.103,0.785-0.193,1.504-0.27c0.694-0.025,1.107-0.104,1.235-0.232c0.128,0,0.258-0.026,0.386-0.077
				c0.025-0.077,0.103-0.142,0.231-0.193h3.242V9.85h-1.196c-0.128,0-0.451,0.052-0.964,0.155c-0.515,0.077-1.133,0.153-1.853,0.231
				c-0.668,0.076-1.39,0.142-2.161,0.193c-0.722,0-1.351-0.038-1.892-0.117l-0.077-0.192v-0.115
				c-0.077-0.721-0.116-1.274-0.116-1.66c0-0.437,0-0.786,0-1.042c0-0.206,0.039-0.347,0.116-0.424l0.077-0.078h0.192l0.811-0.077
				c0.566-0.026,1.184-0.064,1.853-0.116c0.72-0.077,1.441-0.115,2.161-0.115c0.668,0,1.183,0.038,1.542,0.115
				c0.463,0,0.965,0,1.506,0c0.592,0,1.208,0,1.852,0c0.591,0,1.145-0.013,1.659-0.039c0.464-0.051,0.823-0.076,1.081-0.076V5.837
				c-0.052-0.026-0.077-0.09-0.077-0.193V5.027l3.203-0.193h0.039l0.385,1.08c0,0.052-0.039,0.09-0.115,0.116
				c-0.052,0.103-0.142,0.154-0.271,0.154v0.193h5.596c0.438-0.103,1.054-0.193,1.853-0.271c0.848-0.077,1.684-0.167,2.508-0.27
				c0.848-0.077,1.633-0.141,2.354-0.193c0.669-0.026,1.092,0.026,1.273,0.155l0.154,0.115l0.077,4.399h-0.231
				c-4.682,0-7.19-0.154-7.525-0.463v0.155c-0.18-0.104-0.541-0.167-1.081-0.193c-0.541-0.052-1.158-0.04-1.852,0.038v0.888h63.673
				v0.154C109.148,11.021,109.212,11.162,109.289,11.317z M31.876,17.684h-2.161c-0.592,0-0.887,0.27-0.887,0.811
				c0,0.644,0.295,0.965,0.887,0.965h2.161c0.591,0,0.888-0.321,0.888-0.965C32.765,17.954,32.468,17.684,31.876,17.684z
				 M19.257,21.428c0.36,0.747,0.926,1.158,1.698,1.235c0.643,0.18,1.403,0.078,2.277-0.309c0.438-0.232,0.913-0.644,1.428-1.234
				c0.179-0.334,0.308-0.721,0.386-1.158c0.077-0.515,0.026-0.914-0.155-1.197c-0.128-0.488-0.604-0.811-1.427-0.965
				c-1.055-0.206-1.904-0.167-2.546,0.116c-0.438,0.231-0.746,0.424-0.927,0.579c-0.206,0.154-0.399,0.411-0.579,0.772
				C19,19.936,18.948,20.655,19.257,21.428z`,
            }),
          });
        }
        function c1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M78.551,15.482l-0.1-0.065l-1.901,0.032
				c-0.089,0.068-0.178,0.169-0.267,0.3c-0.177,0.202-0.256,0.412-0.234,0.634c0,0.222,0.102,0.446,0.302,0.668
				c0.089,0.088,0.178,0.168,0.265,0.233h2.102c0.067-0.065,0.134-0.146,0.2-0.233c0.113-0.244,0.169-0.502,0.169-0.767
				c0-0.267-0.112-0.489-0.336-0.666C78.685,15.572,78.617,15.526,78.551,15.482z M90.458,17.284
				c-1.49,1.135-3.202,2.046-5.138,2.734c-1.89,0.689-4.447,1.167-7.671,1.435c-1,0.089-2.001,0.156-3,0.2L36.062,21.72
				l-0.035,4.103h-1.333v-4.97h-4.305c-0.043-0.045-0.109-0.1-0.198-0.168c-0.156-0.109-0.334-0.166-0.533-0.166
				c-0.201,0.021-0.379,0.09-0.535,0.201c-0.065,0.045-0.112,0.099-0.134,0.166h-3.101c-0.045-0.067-0.101-0.121-0.166-0.166
				c-0.158-0.135-0.347-0.201-0.568-0.201c-0.2,0-0.366,0.066-0.502,0.201c-0.065,0.045-0.108,0.099-0.131,0.166h-3.07
				c-0.021-0.067-0.064-0.121-0.132-0.166c-0.112-0.135-0.256-0.201-0.432-0.201c-0.201,0-0.369,0.066-0.502,0.201
				c-0.067,0.045-0.112,0.099-0.134,0.166h-3.068c-0.045-0.067-0.101-0.133-0.166-0.201c-0.112-0.131-0.258-0.198-0.435-0.198
				s-0.322,0.067-0.435,0.198c-0.065,0.068-0.121,0.134-0.166,0.201h-3.234c-0.021-0.067-0.065-0.121-0.134-0.166
				c-0.111-0.135-0.256-0.201-0.432-0.201c-0.158,0-0.302,0.044-0.435,0.134c-0.046,0.046-0.079,0.077-0.101,0.101H9.945
				l-1.302,0.532H1.107c-0.135-0.177-0.258-0.389-0.367-0.633c-0.268-0.488-0.422-0.822-0.469-1.001
				c-0.044-0.198-0.044-1.123,0-2.767l0.068-2.401c0-0.066,0.011-0.158,0.033-0.268c0.021-0.224,0.088-0.399,0.201-0.534
				c0.132-0.11,0.311-0.233,0.533-0.364l0.3-0.137l6.97,0.035l1.469,0.533l1.635-0.034l0.198,0.2
				c0.112,0.112,0.244,0.167,0.401,0.167c0.132,0,0.301-0.077,0.5-0.234l0.267-0.198h3.004l0.197,0.198
				c0.156,0.136,0.347,0.201,0.566,0.201c0.201,0.022,0.369-0.035,0.502-0.167c0.045-0.044,0.077-0.101,0.099-0.167l0.068-0.065
				l2.867,0.032l0.167,0.2c0.156,0.153,0.333,0.225,0.533,0.2c0.156,0,0.322-0.068,0.501-0.2l0.167-0.2h3.067l0.167,0.2
				c0.113,0.132,0.256,0.2,0.434,0.2c0.18,0.024,0.355-0.047,0.535-0.2l0.199-0.2h3.067l0.169,0.233
				c0.177,0.156,0.343,0.234,0.5,0.234c0.243,0,0.434-0.078,0.566-0.234c0.043-0.046,0.077-0.099,0.101-0.166l0.032-0.067h4.303
				V6.177h1.402v7.07h3.567c0.153-0.021,0.289-0.053,0.4-0.099c0.156-0.112,0.332-0.223,0.534-0.333l32.918,0.133l18.577,2.868
				C91.725,16.241,91.192,16.728,90.458,17.284z`,
            }),
          });
        }
        function d1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 90 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M81.771,2.073c0.307-0.028,0.625-0.041,0.96-0.041
				c0.029-0.027,0.043-0.055,0.043-0.084c0.055,0,0.097,0,0.124,0c0.195,0,0.403,0,0.626,0c0.028,0,0.068,0.015,0.126,0.042
				l0.04,0.042c0,0.028,0.015,0.041,0.043,0.041c0.028,0,0.069,0,0.125,0c0.028,0.028,0.069,0.042,0.125,0.042
				c0.028,0.027,0.055,0.057,0.083,0.083c0.03,0.028,0.042,0.056,0.042,0.084c0,0.028,0.015,0.055,0.042,0.083
				c0,0.028,0,0.057,0,0.084c0,0.028,0,0.056,0,0.083v0.042c0,0.03,0,0.056,0,0.083c0,0.027,0.014,0.056,0.041,0.083
				c0.029,0.028,0.042,0.056,0.042,0.083c0.027,0.028,0.042,0.055,0.042,0.085c0,0.027,0,0.056,0,0.083c0,0.028,0,0.055,0,0.083
				c0,0.029,0,0.057,0,0.084v0.042c0,0.028,0,0.055,0,0.083c0,0.027,0,0.055,0,0.083c0,0.028,0,0.056,0,0.085
				c0,0.027,0,0.056,0,0.083s0,0.055,0,0.083c0,0.027,0,0.055,0,0.083v0.083c0,0.028,0.013,0.042,0.042,0.042
				c0,0.027,0.014,0.056,0.042,0.083c0,0.028,0,0.056,0,0.083c-0.028,0.028-0.042,0.056-0.042,0.084c0,0.028,0,0.055,0,0.084
				c-0.029,0.026-0.057,0.04-0.083,0.04c0,0.028,0,0.056,0,0.084c-0.013,0.013-0.028,0.028-0.042,0.041V4.37
				c0,0.028,0,0.057,0,0.083c0,0.029,0,0.057,0,0.084s0,0.056,0,0.083c0,0.027,0,0.056,0,0.084c0,0.027,0,0.055,0,0.083v0.041
				c0,0.029,0,0.057,0,0.084c0,0.027,0,0.055,0,0.084c0,0.026,0,0.055,0,0.083c0,0.027,0,0.055,0,0.083s0,0.056,0,0.084
				c0,0.028,0,0.056,0,0.083l0.042,0.042c0,0.027,0.014,0.041,0.042,0.041c0.028,0.029,0.056,0.058,0.083,0.084
				c0,0.029,0,0.055,0,0.083s0,0.057,0,0.084c0,0.027,0,0.057,0,0.083c0,0.028,0,0.056,0,0.084
				c-0.028,0.028-0.042,0.056-0.042,0.084c0,0.028-0.014,0.054-0.042,0.083v0.042c0,0.027,0,0.056,0,0.083c0,0.028,0,0.056,0,0.083
				c0,0.029,0,0.058,0,0.084c0,0.028,0,0.056,0,0.083c0,0.029,0,0.056,0,0.083c0,0.029,0,0.056,0,0.083c0,0.029,0,0.057,0,0.084
				v0.041c0,0.029,0,0.055,0,0.083c0,0.03,0,0.058,0,0.084c0,0.029,0,0.057,0,0.084c0,0.026,0,0.054,0,0.083
				c0,0.027,0,0.055,0,0.084c0,0.027,0,0.055,0,0.081c0,0.03,0,0.057,0,0.084v0.042c0,0.027,0,0.055,0,0.083
				c0,0.028,0,0.056,0,0.083c0,0.027,0,0.055,0,0.083c0,0.029,0,0.057,0,0.084s0,0.056,0,0.083c0,0.028,0,0.057,0,0.084
				c0,0.029,0,0.056,0,0.083V7.92c0,0.028,0,0.056,0,0.083c0,0.027,0,0.056,0,0.083s0,0.056,0,0.083c0,0.027,0,0.056,0,0.083
				s0,0.056,0,0.085c0,0.026,0,0.054,0,0.081c0,0.029,0,0.057,0,0.084v0.042c1.559,0,3.132,0,4.718,0
				c0.058,0.027,0.112,0.056,0.168,0.083l0.041,0.042c0.028,0,0.057,0,0.084,0V8.63c0.055,0.028,0.11,0.056,0.167,0.083
				c0,0.029,0.014,0.043,0.042,0.043c0.028,0.028,0.056,0.056,0.083,0.083c0,0.029,0,0.056,0,0.083c0,0.027,0,0.056,0,0.083
				s0,0.057,0,0.083c0,0.028,0,0.056,0,0.083s0,0.056,0,0.083s0,0.056,0,0.083v0.042c0,0.027,0,0.054,0,0.083
				c0,0.028,0,0.056,0,0.084c0,0.028,0,0.055,0,0.083c0,0.027,0,0.056,0,0.084c0,0.027,0,0.055,0,0.083s0,0.056,0,0.083
				c0,0.029,0,0.058,0,0.085v0.042c0,0.027,0,0.055,0,0.083s0,0.058,0,0.083c0,0.03,0,0.058,0,0.084c0,0.028,0,0.058,0,0.083
				c0,0.028,0,0.056,0,0.084c0,0.028,0,0.055,0,0.084c0,0.028,0,0.054,0,0.083v0.041c0,0.028,0,0.056,0,0.083
				c0,0.029,0,0.056,0,0.083s0,0.056,0,0.084c0,0.027,0,0.056,0,0.084c0,0.026,0,0.054,0,0.082c0,0.029,0,0.057,0,0.084
				c0,0.027,0,0.057,0,0.082v0.045c0,0.028,0,0.056,0,0.083c0,0.027,0,0.055,0,0.082c0,0.028,0,0.058,0,0.085
				c0,0.026,0,0.055,0,0.083s0,0.055,0,0.084c0,0.028,0,0.054,0,0.083c-0.028,0.029-0.043,0.056-0.043,0.084l-0.041,0.042
				c0,0.027,0,0.056,0,0.082c0,0.03,0,0.056,0,0.084c0,0.028-0.015,0.056-0.042,0.083c0,0.028,0,0.058,0,0.085
				c-0.029,0.028-0.057,0.042-0.084,0.042c0,0.028-0.013,0.042-0.041,0.042c-0.056,0-0.099,0-0.126,0c-1.369,0-2.735,0-4.092,0
				c-0.058,0.001-0.1,0.016-0.125,0.041c-0.056,0-0.11,0-0.165,0c-0.034,0.016-0.061,0.029-0.085,0.042
				c0.019,0.008,0.046,0.023,0.085,0.042v-0.042c0.055,0.028,0.109,0.056,0.165,0.083c0.028,0.028,0.055,0.041,0.083,0.041
				c0,0.029,0.014,0.057,0.043,0.085c0,0.028,0,0.056,0,0.082c0.028,0.028,0.042,0.057,0.042,0.084c0,0.029,0.015,0.057,0.042,0.084
				c0,0.028,0,0.056,0,0.083c0,0.029,0,0.056,0,0.084c0,0.026,0,0.056,0,0.083v0.042c0,0.028,0,0.056,0,0.083
				c0,0.029,0,0.057,0,0.084s0,0.057,0,0.083s-0.015,0.056-0.042,0.083c0,0.029-0.014,0.057-0.042,0.085L85.068,13.6v0.041
				c0,0.028,0.014,0.055,0.043,0.084l-0.043,0.083c0.027,0,0.071,0.014,0.127,0.042c0.027,0.028,0.055,0.055,0.082,0.083
				c0,0.028,0.015,0.042,0.042,0.042c0,0.028,0,0.055,0,0.083c0,0.029,0,0.057,0,0.084s0,0.056,0,0.084
				c0.028,0,0.055,0.013,0.083,0.041c0.028,0.027,0.057,0.056,0.083,0.083c0,0.028,0.013,0.042,0.042,0.042c0,0.028,0,0.055,0,0.083
				c0,0.028,0,0.056,0,0.083s0,0.056,0,0.083s0,0.057,0,0.084c0,0.027,0,0.055,0,0.083c-0.029,0.027-0.042,0.057-0.042,0.084
				s-0.014,0.056-0.042,0.083c0,0.028-0.014,0.042-0.042,0.042c0,0.026,0,0.056,0,0.083c0,0.029,0,0.057,0,0.086
				c0,0.026,0,0.056,0,0.082c0,0.028,0,0.056,0,0.084c0,0.028,0,0.055,0,0.083c0,0.029,0,0.056,0,0.083c0,0.028,0,0.056,0,0.083
				v0.042c0,0.028,0,0.055,0,0.083c0,0.028,0,0.055,0,0.083s0,0.057,0,0.083c0,0.028,0,0.057,0,0.083c0,0.028,0,0.057,0,0.084
				c0,0.027,0,0.056,0,0.083c0,0.028,0,0.057,0,0.084v0.042c0,0.026,0,0.055,0,0.083s0,0.057,0,0.084c0,0.026,0,0.056,0,0.083
				c0,0.028,0,0.055,0,0.083c0,0.029,0,0.057,0,0.085s0,0.055,0,0.083c0,0.027,0,0.055,0,0.084v0.041c0,0.028,0,0.055,0,0.083
				c0,0.029,0,0.057,0,0.084c0,0.027,0,0.056,0,0.083c0,0.029,0,0.058,0,0.085c0,0.027,0,0.055,0,0.083s0,0.055,0,0.083
				c0,0.028,0,0.056,0,0.083v0.042c0,0.027,0,0.056,0,0.082c0,0.029,0,0.057,0,0.084c0,0.028,0,0.056,0,0.084
				c0,0.028,0,0.056,0,0.083s0,0.055,0,0.083c0,0.027,0,0.057,0,0.084s0,0.056,0,0.083v0.042c0,0.029,0,0.056,0,0.083
				c0,0.03,0,0.056,0,0.083c0,0.027,0,0.057,0,0.083c0,0.028,0,0.058,0,0.085c0,0.025,0,0.054,0,0.082s0,0.056,0,0.083
				s0,0.056,0,0.083v0.042c0,0.028,0,0.056,0,0.083c0,0.029,0,0.057,0,0.084s0,0.056,0,0.083s0,0.055,0,0.083s0,0.056,0,0.083
				s0,0.056,0,0.083s0,0.057,0,0.084v0.041c0,0.027,0,0.055,0,0.083s0,0.056,0,0.084c0,0.028,0,0.057,0,0.084
				c0,0.026-0.013,0.054-0.04,0.083c0,0.028-0.016,0.056-0.043,0.084l-0.083,0.082c-0.056,0-0.097,0-0.125,0h-0.043v0.043
				c-0.028,0.027-0.055,0.041-0.083,0.041c0,0.027-0.013,0.041-0.042,0.041c-0.057,0-0.099,0-0.124,0c-0.642,0-1.269,0-1.881,0
				c-0.057,0-0.097,0-0.125,0c-0.084,0-0.153,0-0.209,0c-0.055,0-0.125-0.014-0.21-0.041c-0.026-0.029-0.041-0.056-0.041-0.084
				c-0.027-0.026-0.055-0.054-0.083-0.082v-0.042c0-0.029,0-0.056,0-0.085c-0.029-0.027-0.057-0.055-0.084-0.083v-0.042
				c0-0.029,0-0.057,0-0.084s0-0.056,0-0.083c0-0.028,0-0.056,0-0.084c0-0.028,0-0.056,0-0.083v-0.041c-9.021,0-18.041,0-27.063,0
				c-0.028,0.028-0.054,0.056-0.082,0.083c0,0.028,0,0.057,0,0.084c0,0.027,0,0.055,0,0.083c0,0.027,0,0.055,0,0.083
				c0.028,0.029,0.041,0.056,0.041,0.083c0.027,0.028,0.041,0.056,0.041,0.083c0,0.03,0,0.057,0,0.085v0.042
				c-0.028,0.028-0.054,0.056-0.082,0.082C55.015,19.934,55,19.96,55,19.989v0.041c-0.026,0-0.054,0.014-0.083,0.042l-0.041,0.043
				c-0.056,0-0.098,0-0.125,0c-0.335,0-0.657,0-0.962,0c-0.057,0-0.126-0.016-0.21-0.043c-0.027-0.028-0.042-0.056-0.042-0.083
				c-0.028-0.029-0.054-0.056-0.083-0.084c0-0.026,0-0.054,0-0.082v-0.042c0,0.027-0.015,0.042-0.041,0.042
				c-0.057,0-0.099,0-0.125,0c-0.057,0-0.113-0.015-0.169-0.042c-0.028-0.029-0.056-0.056-0.083-0.085
				c-0.027-0.027-0.056-0.055-0.082-0.083c-0.03,0-0.056-0.014-0.084-0.042c0-0.029-0.013-0.057-0.043-0.084
				c0-0.028,0-0.056,0-0.083c0-0.028,0-0.056,0-0.084c0-0.028,0-0.056,0-0.083c0-0.027,0-0.055,0-0.083c0-0.029,0-0.057,0-0.084
				s0-0.056,0-0.083v-0.041c0-0.028,0-0.056,0-0.084c0-0.027,0-0.055,0-0.083s0-0.057,0-0.083c0-0.028,0-0.056,0-0.083
				s0-0.056,0-0.084c0-0.028,0-0.055,0-0.083s0-0.056,0-0.083v-0.042c0-0.028,0-0.054,0-0.083c0-0.028,0-0.055,0-0.083
				s0-0.056,0-0.083v-0.041c-0.001-0.029-0.014-0.057-0.042-0.084c0-0.028-0.014-0.055-0.041-0.083c0-0.028-0.015-0.056-0.042-0.083
				c-0.027,0-0.055-0.015-0.083-0.042c0-0.028,0-0.054,0-0.083c-0.028-0.028-0.042-0.056-0.042-0.083
				c0-0.029-0.015-0.056-0.04-0.083c0-0.028-0.015-0.056-0.044-0.083c-0.028-0.029-0.041-0.056-0.041-0.083
				c-0.028-0.028-0.043-0.056-0.043-0.083c-0.027-0.028-0.042-0.057-0.042-0.085l-0.04-0.041c0-0.027,0-0.056,0-0.083v-0.043
				c-0.058-0.028-0.098-0.055-0.128-0.083c-0.055-0.027-0.097-0.056-0.125-0.083s-0.069-0.042-0.123-0.042
				c-0.03,0.027-0.044,0.055-0.044,0.084c-0.029,0-0.041,0.014-0.041,0.041h-0.043c0,0.028-0.014,0.055-0.042,0.083
				c0,0.029,0,0.057,0,0.084c0,0.027,0,0.056,0,0.083c0,0.029,0,0.058,0,0.085c0,0.027,0,0.055,0,0.083s0,0.055,0,0.083
				c0,0.028,0,0.056,0,0.083v0.042c0,0.027,0,0.056,0,0.082c0,0.029,0,0.057,0,0.084c0,0.028,0,0.056,0,0.084
				c0,0.028,0,0.056,0,0.083s0,0.055,0,0.083c0,0.027,0,0.057,0,0.084s0,0.056,0,0.083v0.042c0,0.029,0,0.056,0,0.083
				c0,0.03,0,0.056,0,0.083c0,0.027,0,0.057,0,0.083c0,0.028,0,0.058,0,0.085c0,0.025,0,0.054,0,0.082s0,0.056,0,0.083
				c-0.028,0.028-0.042,0.056-0.042,0.083l-0.042,0.042c-0.028,0.028-0.042,0.056-0.042,0.083c-0.014,0.014-0.028,0.029-0.042,0.042
				c0,0.028,0,0.056,0,0.083v0.042c0,0.028,0,0.055,0,0.083s0,0.056,0,0.083s0,0.056,0,0.083s0,0.057,0,0.084
				c0,0.027,0,0.055,0,0.083c-0.029,0.027-0.044,0.055-0.044,0.083c-0.026,0.029-0.04,0.056-0.04,0.083l-0.042,0.043
				c-0.028,0.026-0.056,0.054-0.083,0.083v0.042c0,0.027,0,0.055,0,0.083c0,0.027,0,0.056,0,0.084c0,0.027,0,0.055,0,0.082
				c0,0.029-0.014,0.057-0.042,0.085c0,0.028-0.013,0.056-0.042,0.083l-0.042,0.043c0,0.028,0,0.054,0,0.083
				c-0.028,0.027-0.042,0.055-0.042,0.082c0,0.028,0,0.058,0,0.083c-0.028,0.029-0.056,0.057-0.083,0.084
				c-0.056,0.029-0.097,0.055-0.125,0.084c0,0.028-0.014,0.055-0.042,0.083c-0.057,0-0.097,0.015-0.125,0.042
				c-0.139,0-0.279,0-0.418,0c-0.055-0.027-0.098-0.042-0.125-0.042c-0.029,0-0.056,0-0.083,0c-0.058,0-0.126-0.014-0.208-0.041
				c-0.028-0.029-0.042-0.057-0.042-0.083c-0.029-0.028-0.057-0.057-0.084-0.083c-0.029-0.029-0.055-0.043-0.082-0.043
				c-0.029-0.026-0.043-0.056-0.043-0.083c-0.028-0.027-0.055-0.055-0.084-0.082c0-0.03,0-0.056,0-0.083v-0.043
				c0-0.027,0-0.055,0-0.083c0-0.029,0-0.057,0-0.085c0-0.027,0-0.055,0-0.082c0-0.029,0-0.058,0-0.084c0-0.028,0-0.056,0-0.083
				c0-0.029,0-0.056,0-0.085c0-0.027,0-0.055,0-0.083c0.03,0,0.057-0.014,0.084-0.042c0-0.029,0.015-0.057,0.043-0.084
				c0-0.028,0-0.056,0-0.083c0-0.028,0-0.056,0-0.084c0-0.02,0-0.041,0-0.063c-0.028-0.006-0.058-0.013-0.086-0.021
				c-0.056,0-0.109,0-0.166,0c-0.053-0.026-0.108-0.04-0.166-0.041c-0.029,0-0.056,0-0.083,0s-0.058,0-0.083,0
				c-0.058,0.028-0.112,0.056-0.167,0.083c-0.028,0.028-0.056,0.057-0.084,0.084c-0.028,0.027-0.056,0.041-0.084,0.041
				c-0.054,0.027-0.111,0.055-0.166,0.083c-0.027,0.028-0.057,0.056-0.083,0.084c-0.057,0.028-0.098,0.057-0.127,0.084
				c-0.083,0.026-0.152,0.054-0.209,0.083c-0.028,0.028-0.054,0.042-0.083,0.042c0,0.027-0.013,0.042-0.041,0.042
				c-0.057,0-0.099,0-0.126,0c-0.083,0.028-0.167,0.041-0.25,0.041l-0.041,0.041c-0.057,0-0.097,0-0.125,0
				c-0.113,0.029-0.224,0.056-0.336,0.084c-0.028,0-0.056,0.014-0.083,0.041c-0.055,0-0.097,0-0.125,0c-0.027,0-0.057,0-0.083,0
				c-0.057,0-0.111-0.014-0.166-0.041c-0.031,0-0.059-0.014-0.085-0.041c-0.196,0-0.39-0.015-0.584-0.043c-0.056,0-0.098,0-0.125,0
				l-0.042-0.041c-1.474,0-2.95-0.013-4.426-0.041c-0.056,0-0.109-0.015-0.168-0.042c-0.027-0.029-0.055-0.056-0.083-0.085
				c-0.029-0.027-0.055-0.055-0.083-0.083v-0.042c0-0.029,0-0.057,0-0.084s-0.015-0.056-0.043-0.083
				c-0.026-0.028-0.054-0.056-0.081-0.084c0-0.028-0.015-0.056-0.042-0.083c-0.028-0.027-0.042-0.055-0.042-0.083
				c-0.028-0.029-0.043-0.057-0.043-0.084c-0.028-0.028-0.056-0.056-0.084-0.083l-0.041-0.041v-0.042c-0.028,0-0.057,0-0.083,0
				l-0.042,0.042c-0.058,0-0.097,0-0.125,0c-0.112,0.028-0.225,0.056-0.335,0.083v0.041c-0.028,0.028-0.043,0.056-0.043,0.084
				c-0.027,0.028-0.055,0.056-0.083,0.083c-0.027,0.028-0.055,0.056-0.083,0.083c0,0.029,0,0.057,0,0.084c0,0.027,0,0.055,0,0.083
				s-0.015,0.056-0.043,0.084c0,0.028-0.013,0.057-0.041,0.084c0,0.026-0.013,0.04-0.042,0.04c0,0.03,0,0.057,0,0.085
				c-0.027,0.027-0.055,0.055-0.082,0.083c0,0.027,0,0.056,0,0.084c0,0.027,0,0.055,0,0.082c0,0.029,0,0.057,0,0.085
				c0,0.028-0.016,0.056-0.044,0.083c0,0.028-0.014,0.056-0.042,0.083c0,0.028-0.013,0.043-0.042,0.043c0,0.027,0,0.055,0,0.082
				c-0.026,0.028-0.054,0.058-0.083,0.083c0,0.029,0,0.057,0,0.084c0,0.029-0.015,0.055-0.042,0.084c0,0.028,0,0.055,0,0.083
				c-0.026,0.029-0.056,0.057-0.083,0.083c-0.028,0.028-0.041,0.056-0.041,0.085c0,0.027-0.014,0.042-0.043,0.042
				c0,0.028,0,0.055,0,0.083c0,0.027,0,0.057,0,0.084s0,0.056,0,0.083c0,0.027-0.014,0.055-0.042,0.083c0,0.027,0,0.056,0,0.083
				c-0.027,0.027-0.056,0.055-0.083,0.083c-0.028,0.029-0.04,0.056-0.04,0.083c0,0.029-0.015,0.043-0.044,0.043
				c0,0.028,0,0.056,0,0.083c0,0.027,0,0.056,0,0.083c0,0.029-0.014,0.057-0.042,0.084c0,0.028,0,0.055,0,0.083
				c-0.027,0.028-0.056,0.056-0.083,0.082c0,0.028,0,0.058,0,0.085c-0.028,0.027-0.043,0.056-0.043,0.084
				c0,0.027-0.012,0.04-0.042,0.04c0,0.028,0,0.057,0,0.084c0,0.027,0,0.056,0,0.083c0,0.027,0,0.056,0,0.083
				s-0.014,0.056-0.041,0.083c0,0.028,0,0.056,0,0.083c-0.029,0.03-0.057,0.056-0.084,0.085c-0.028,0.027-0.042,0.057-0.042,0.082
				c0,0.029-0.013,0.041-0.041,0.041c0,0.03,0,0.057,0,0.085c0,0.028,0,0.057,0,0.083c0,0.028,0,0.056,0,0.083
				s-0.015,0.056-0.042,0.084c0,0.028,0,0.055,0,0.083c-0.028,0.028-0.057,0.056-0.085,0.084c-0.027,0.027-0.041,0.055-0.041,0.083
				s-0.014,0.042-0.04,0.042c0,0.029,0,0.056,0,0.083s0,0.056,0,0.084c0,0.027-0.015,0.056-0.044,0.084c0,0.026,0,0.054,0,0.081
				c-0.026,0.03-0.054,0.058-0.083,0.084c0,0.028,0,0.056,0,0.083c-0.028,0.027-0.042,0.057-0.042,0.084s-0.014,0.041-0.043,0.041
				c0,0.029,0,0.057,0,0.083c0,0.028,0,0.058,0,0.083c0,0.028-0.012,0.057-0.04,0.084c0,0.028,0,0.055,0,0.083
				c-0.028,0.03-0.056,0.056-0.084,0.084c0,0.029,0,0.056,0,0.084c0,0.026,0,0.054,0,0.082v0.042
				c-0.028,0.03-0.056,0.058-0.083,0.084c0,0.028,0,0.056,0,0.084c0,0.026-0.014,0.054-0.042,0.082c0,0.029,0,0.057,0,0.085
				c-0.028,0.028-0.055,0.054-0.083,0.082c0,0.028,0,0.057,0,0.084s0,0.055,0,0.083v0.042c-0.027,0.03-0.055,0.058-0.084,0.083
				c0,0.028,0,0.056,0,0.084c0,0.027,0,0.057,0,0.084s-0.013,0.054-0.041,0.083c0,0.028,0,0.056,0,0.084
				c-0.027,0.026-0.057,0.054-0.083,0.083c0,0.027,0,0.055,0,0.082v0.042c0,0.028,0,0.056,0,0.084
				c-0.028,0.026-0.056,0.056-0.083,0.083c0,0.028,0,0.055,0,0.083c0,0.026-0.014,0.056-0.042,0.083c0,0.028,0,0.056,0,0.083
				c-0.028,0.028-0.056,0.055-0.083,0.083c-0.028,0.03-0.042,0.059-0.042,0.085c0,0.028-0.015,0.042-0.042,0.042
				c0,0.026,0,0.056,0,0.083c0,0.028,0,0.057,0,0.084s-0.013,0.056-0.041,0.083c0,0.027,0,0.055,0,0.083
				c-0.029,0.026-0.058,0.056-0.084,0.082c-0.028,0.03-0.043,0.057-0.043,0.085l-0.041,0.042c0.028,0.027,0.056,0.042,0.083,0.042
				c0.027,0.028,0.056,0.042,0.084,0.042c0,0.028,0.013,0.054,0.041,0.083c0,0.027,0,0.056,0,0.083
				c0.027,0.029,0.042,0.057,0.042,0.084c0.028,0.028,0.069,0.056,0.125,0.083c0,0.027,0,0.054,0,0.083
				c0.028,0.028,0.042,0.057,0.042,0.083c0,0.028,0,0.055,0,0.083c0.028,0.026,0.056,0.041,0.083,0.041c0,0.029,0,0.057,0,0.084
				c0,0.028,0,0.056,0,0.083s0,0.055,0,0.083c0,0.028,0,0.056,0,0.083c0,0.027,0,0.056,0,0.083s0,0.056,0,0.083
				c0,0.026,0,0.056,0,0.083v0.042c0,0.029,0,0.056,0,0.083c-0.028,0.028-0.056,0.057-0.083,0.083c0,0.028-0.014,0.056-0.042,0.083
				c0,0.029,0,0.057,0,0.084c-0.056,0.028-0.097,0.056-0.125,0.083c-0.027,0.029-0.042,0.057-0.042,0.085
				c0,0.028-0.013,0.056-0.041,0.083c0,0.028-0.015,0.042-0.043,0.042c-0.028,0.028-0.055,0.057-0.084,0.083
				c-0.027,0-0.069,0-0.124,0h-0.043c-0.027,0.029-0.056,0.057-0.083,0.084c-0.027,0-0.055,0.014-0.082,0.042
				c-0.058,0-0.098,0-0.128,0c-0.222,0.028-0.444,0.042-0.667,0.042l-0.041,0.042c-0.056,0-0.098,0-0.126,0c-0.39,0-0.767,0-1.128,0
				c-0.056,0-0.095,0-0.123,0l-0.043-0.042c-0.195,0-0.391-0.014-0.584-0.042c-0.057,0-0.124-0.013-0.209-0.042l-0.042-0.041
				c-0.083,0-0.167-0.015-0.25-0.043c-0.055,0-0.097,0-0.124,0l-0.043-0.041c-0.056,0-0.11-0.014-0.167-0.042
				c-0.056,0-0.124-0.014-0.208-0.042l-0.083-0.083c-0.057,0-0.111-0.015-0.167-0.042c-0.084-0.028-0.152-0.056-0.209-0.084
				c-0.057-0.028-0.097-0.057-0.125-0.083c-0.058-0.028-0.111-0.055-0.169-0.083c-0.026,0-0.056-0.014-0.082-0.042
				c-0.028-0.027-0.055-0.056-0.084-0.083c-0.028-0.028-0.042-0.055-0.042-0.083c-0.055-0.027-0.096-0.058-0.124-0.083
				c-0.057-0.029-0.113-0.056-0.169-0.083c0-0.028-0.014-0.056-0.042-0.083c-0.028-0.027-0.055-0.056-0.083-0.083
				c-0.028-0.027-0.056-0.056-0.084-0.083c-0.026,0-0.056-0.014-0.083-0.042c0-0.028-0.014-0.055-0.042-0.083
				c0-0.027-0.013-0.056-0.041-0.084c-0.028-0.028-0.056-0.057-0.084-0.083c0-0.028-0.013-0.056-0.041-0.083
				c0-0.028-0.015-0.056-0.042-0.085v-0.081l-0.042-0.042c-0.013-0.014-0.026-0.028-0.042-0.042c-0.028,0-0.055-0.013-0.083-0.042
				c0-0.027-0.015-0.056-0.042-0.083c0-0.03,0-0.056,0-0.083c0-0.029,0-0.057,0-0.083c0-0.03,0-0.056,0-0.083
				c0-0.027,0-0.057,0-0.083c-0.026-0.028-0.056-0.058-0.083-0.085c0-0.026,0-0.054,0-0.083v-0.041c0-0.028,0-0.057,0-0.084
				c0-0.027,0-0.057,0-0.083c0-0.028,0-0.055,0-0.083c0-0.029,0-0.057,0-0.083c0-0.028,0-0.056,0-0.083c0-0.029,0-0.057,0-0.085
				c0-0.029,0-0.055,0-0.083v-0.042c0.028-0.028,0.042-0.058,0.042-0.083c0-0.029,0.015-0.057,0.041-0.084c0-0.029,0-0.055,0-0.083
				s0-0.057,0-0.084s0-0.057,0-0.084c0-0.026,0-0.054,0-0.082c0-0.029,0-0.057,0-0.083v-0.042c0-0.029,0-0.057,0-0.084
				c0.028-0.026,0.042-0.054,0.042-0.083c0.028-0.027,0.042-0.055,0.042-0.082c0.027-0.03,0.041-0.056,0.041-0.083
				c0.028-0.029,0.042-0.058,0.042-0.084c0.03-0.029,0.042-0.055,0.042-0.083c0-0.03,0-0.057,0-0.085v-0.04
				c0.027-0.029,0.042-0.057,0.042-0.084c0.028-0.027,0.041-0.055,0.041-0.084c0.028-0.028,0.042-0.055,0.042-0.083
				c0.03-0.028,0.042-0.057,0.042-0.084c0.028-0.026,0.041-0.056,0.041-0.083c0-0.027,0-0.056,0-0.084c0-0.027,0-0.055,0-0.081
				c0.029,0,0.057-0.016,0.084-0.043c0-0.026,0.015-0.056,0.041-0.083c0-0.027,0.016-0.055,0.043-0.083
				c0-0.026,0.013-0.056,0.041-0.083c0-0.028,0-0.056,0-0.083c0.028-0.028,0.042-0.056,0.042-0.083
				c0.028-0.028,0.057-0.055,0.083-0.083c0-0.027,0-0.056,0-0.083c0.028,0,0.042-0.014,0.042-0.041c0-0.029,0.013-0.057,0.042-0.084
				c0-0.028,0.014-0.055,0.042-0.083c0.027-0.028,0.043-0.056,0.043-0.084c0.028-0.028,0.041-0.055,0.041-0.083
				c0.028-0.027,0.043-0.055,0.043-0.083c0.027-0.028,0.04-0.056,0.04-0.083c0.028-0.027,0.057-0.056,0.085-0.083l0.042-0.042
				c0-0.027,0.014-0.056,0.041-0.083c0-0.029,0.015-0.056,0.041-0.085c0-0.026,0-0.054,0-0.081c0.029-0.029,0.042-0.057,0.042-0.084
				c0.029-0.028,0.056-0.056,0.084-0.083c0-0.027,0-0.056,0-0.084c0.03-0.027,0.056-0.055,0.083-0.084v-0.04
				c0-0.028,0-0.057,0-0.083c0.028-0.028,0.043-0.057,0.043-0.084c0.028-0.027,0.042-0.055,0.042-0.082
				c0.027-0.029,0.04-0.056,0.04-0.085c0.03-0.027,0.042-0.056,0.042-0.083c0.028-0.028,0.042-0.057,0.042-0.083
				c0-0.029,0-0.057,0-0.084c0.029,0,0.057-0.013,0.084-0.042c0-0.027,0.013-0.056,0.041-0.083c0-0.028,0-0.056,0-0.083
				c0-0.029,0-0.057,0-0.084c0-0.027,0-0.057,0-0.083c0.028-0.028,0.041-0.056,0.041-0.084c0.029-0.028,0.042-0.057,0.042-0.083
				c0-0.03,0-0.056,0-0.084v-0.041c0.029-0.028,0.043-0.058,0.043-0.084c0.028-0.028,0.042-0.055,0.042-0.083
				c0.029-0.028,0.041-0.056,0.041-0.084s0-0.055,0-0.083c0.028-0.027,0.042-0.056,0.042-0.083c0.027-0.029,0.043-0.057,0.043-0.083
				c0-0.028,0-0.057,0-0.083v-0.043c0.028-0.026,0.041-0.056,0.041-0.083c0.028-0.027,0.043-0.055,0.043-0.082
				c0.028-0.03,0.041-0.056,0.041-0.083s0-0.058,0-0.084c0-0.028,0-0.057,0-0.084s0-0.056,0-0.083
				c0.028-0.029,0.057-0.056,0.083-0.084v-0.041c0.028-0.028,0.043-0.056,0.043-0.083c0.026-0.029,0.041-0.056,0.041-0.085
				c0.03-0.027,0.043-0.055,0.043-0.083s0-0.055,0-0.083c0.027-0.029,0.042-0.057,0.042-0.083c0.028-0.028,0.043-0.056,0.043-0.083
				c0-0.028,0-0.057,0-0.084v-0.042c0-0.027,0-0.055,0-0.083c0.027-0.029,0.04-0.057,0.04-0.084c0.03-0.028,0.043-0.056,0.043-0.083
				c0.027-0.028,0.041-0.056,0.041-0.083s0-0.054,0-0.083c0-0.028,0-0.056,0-0.084c0-0.028,0-0.056,0-0.083v-0.041
				c0.03-0.028,0.043-0.056,0.043-0.084c0-0.028,0.014-0.055,0.042-0.083c0-0.028,0-0.056,0-0.083c0-0.029,0-0.057,0-0.083
				c0-0.028,0-0.057,0-0.086c0-0.025,0-0.055,0-0.083c0.027-0.027,0.055-0.055,0.083-0.083l0.042-0.042c0-0.029,0-0.058,0-0.085
				c0.029-0.027,0.042-0.055,0.042-0.083c0-0.027,0.016-0.056,0.044-0.083c0-0.028,0-0.054,0-0.083c0-0.028,0-0.056,0-0.083
				c0-0.029,0-0.056,0-0.083s0-0.056,0-0.083l-0.044-0.042v-0.292c-0.027,0-0.042-0.015-0.042-0.041v-0.043l-0.042-0.042v-0.041
				h-0.041v-0.125h-0.042v-0.083c-0.028,0-0.042-0.015-0.042-0.042l-0.043-0.043v-0.042c-0.028,0-0.041-0.013-0.041-0.041
				l-0.043-0.041c0-0.029-0.013-0.042-0.04-0.042v-0.044h-0.043v-0.04l-0.042-0.042v-0.041h-0.043l-0.041-0.042
				c0-0.028-0.015-0.042-0.043-0.042l-0.042-0.042h-0.042c0-0.027-0.013-0.042-0.041-0.042c-0.028-0.028-0.056-0.041-0.083-0.041
				h-0.043l-0.042-0.042c-0.027,0-0.041-0.014-0.041-0.042c-0.028,0-0.056,0-0.085,0c0-0.027-0.013-0.041-0.042-0.041
				c-0.026-0.029-0.056-0.042-0.082-0.042h-0.043c-0.028-0.027-0.056-0.042-0.083-0.042l-0.042-0.042h-0.04l-0.042-0.041
				c-0.029-0.028-0.056-0.042-0.083-0.042h-0.043l-0.042-0.041c-0.026,0-0.055,0-0.083,0h-0.082l-0.042-0.042
				c-0.028,0-0.057,0-0.085,0H32.2l-0.043-0.042c-0.028,0-0.056,0-0.083,0c-0.028,0-0.056,0-0.083,0h-0.042l-0.042-0.042
				c-0.028,0-0.055,0-0.083,0h-0.084l-0.041-0.042c-0.028,0-0.056,0-0.084,0s-0.057,0-0.083,0c-0.028-0.028-0.055-0.042-0.083-0.042
				h-0.042l-0.042-0.042H31.28l-0.042-0.042c-0.028,0-0.056,0-0.083,0c-0.15,0-0.302,0-0.459,0c-0.028,0-0.057,0-0.084,0h-0.375
				c-0.043,0-0.084,0-0.125,0h-0.042c-0.028,0-0.056,0.014-0.083,0.042h-0.042c-0.097,0-0.195,0-0.292,0h-0.042
				c-0.028,0-0.056,0.015-0.083,0.042h-0.042c-0.028,0-0.043,0.014-0.043,0.042c-0.029,0-0.057,0-0.083,0
				c0,0.028-0.014,0.042-0.042,0.042h-0.083c-0.027,0-0.056,0.015-0.084,0.042h-0.041c-0.029,0-0.057,0-0.083,0h-0.042
				c-0.028,0-0.056,0.013-0.083,0.042h-0.126c-0.027,0-0.055,0.013-0.083,0.042h-0.126c-0.027,0-0.055,0.012-0.083,0.041H28.44
				c-0.028,0-0.043,0.014-0.043,0.042h-0.04c-0.028,0.027-0.057,0.041-0.084,0.041c-0.027,0-0.055,0.014-0.083,0.042h-0.083
				c-0.029,0-0.057,0.015-0.083,0.042h-0.083c-0.029,0-0.057,0.013-0.084,0.042h-0.041c-0.028,0-0.057,0.014-0.083,0.041h-0.043
				c-0.028,0-0.055,0.014-0.083,0.042H27.52c-0.027,0.028-0.055,0.042-0.082,0.042c-0.028,0-0.055,0.013-0.083,0.041l-0.043,0.042
				h-0.083c-0.028,0-0.056,0.015-0.084,0.042h-0.041c-0.028,0-0.057,0.014-0.084,0.042h-0.083c0,0.028-0.013,0.042-0.041,0.042
				s-0.057,0.013-0.083,0.041h-0.085c0,0.027-0.014,0.042-0.041,0.042c-0.029,0-0.055,0.013-0.084,0.04h-0.042
				c-0.027,0-0.055,0.017-0.081,0.044h-0.042c-0.028,0-0.056,0.013-0.084,0.042h-0.041c-0.03,0-0.057,0.014-0.083,0.041h-0.085
				c0,0.028-0.013,0.041-0.041,0.041c-0.029,0-0.055,0.014-0.084,0.042h-0.083c0,0.029-0.015,0.043-0.041,0.043
				c-0.029,0-0.056,0.014-0.084,0.042h-0.042c-0.028,0-0.056,0.013-0.084,0.041h-0.042c-0.026,0-0.04,0.014-0.04,0.042
				c-0.029,0-0.058,0-0.084,0h-0.042c-0.027,0-0.055,0.014-0.083,0.042H25.35c-0.027,0-0.057,0.013-0.084,0.042h-0.041
				c-0.029,0-0.058,0.014-0.084,0.041h-0.042c-0.028,0-0.056,0.014-0.082,0.041h-0.084c0,0.028-0.015,0.042-0.042,0.042
				c-0.028,0-0.056,0.016-0.084,0.043l-0.041,0.041h-0.084c-0.028,0-0.056,0.015-0.083,0.042h-0.042
				c-0.028,0-0.055,0.014-0.083,0.041h-0.084c-0.028,0.029-0.056,0.043-0.083,0.043c-0.027,0-0.056,0.014-0.084,0.042H24.18
				c-0.028,0-0.042,0.014-0.042,0.04h-0.042c-0.029,0.029-0.056,0.042-0.083,0.042c-0.027,0-0.042,0.014-0.042,0.042
				c-0.028,0-0.056,0-0.083,0c-0.028,0.029-0.056,0.042-0.083,0.042c-0.029,0-0.056,0.015-0.083,0.042h-0.042
				c-0.03,0-0.056,0.013-0.083,0.041h-0.042c-0.028,0-0.056,0.014-0.084,0.042h-0.041c-0.027,0-0.056,0.012-0.083,0.041h-0.041
				c-0.029,0-0.057,0.015-0.084,0.041h-0.044c-0.027,0-0.04,0.015-0.04,0.042h-0.042l-0.042,0.042c-0.027,0-0.041,0.014-0.041,0.042
				H22.97c-0.028,0-0.055,0.014-0.083,0.042h-0.043c-0.028,0-0.056,0.014-0.084,0.041h-0.041c-0.028,0-0.058,0.015-0.084,0.042
				h-0.041c-0.029,0-0.057,0.013-0.083,0.04h-0.083c-0.028,0-0.056,0.015-0.084,0.042h-0.041c-0.029,0-0.057,0.014-0.083,0.043
				h-0.043c-0.028,0-0.056,0.014-0.084,0.042H22.05c-0.028,0-0.055,0.014-0.083,0.041h-0.084c-0.028,0-0.056,0.015-0.083,0.042
				h-0.083c-0.029,0-0.057,0.013-0.085,0.042h-0.041c-0.028,0-0.041,0.016-0.041,0.041h-0.044c-0.028,0.029-0.054,0.042-0.083,0.042
				h-0.082c-0.03,0-0.058,0.016-0.086,0.043h-0.082c-0.028,0-0.055,0.012-0.084,0.04h-0.041c-0.056,0-0.098,0.014-0.126,0.042
				h-0.041c-0.028,0-0.058,0.014-0.083,0.041h-0.084c-0.027,0-0.055,0.015-0.082,0.042h-0.043c-0.029,0-0.042,0.015-0.042,0.043
				c-0.028,0-0.057,0-0.083,0h-0.042c-0.027,0-0.056,0.012-0.084,0.04h-0.083c-0.027,0-0.055,0.014-0.083,0.042h-0.084
				c-0.028,0-0.056,0.015-0.083,0.042h-0.042c-0.028,0-0.057,0.013-0.083,0.041h-0.126c-0.028,0-0.056,0.015-0.083,0.042h-0.124
				c-0.029,0-0.056,0.013-0.083,0.041h-0.126c-0.028,0-0.054,0.015-0.083,0.042h-0.124c-0.028,0-0.056,0.014-0.083,0.042h-0.044
				c-0.028,0-0.042,0.014-0.042,0.041h-0.042c-0.028,0.029-0.055,0.042-0.083,0.042s-0.057,0-0.084,0h-0.042
				c-0.027,0-0.055,0.015-0.082,0.042H18.5c-0.028,0-0.056,0.013-0.083,0.041h-0.125c-0.028,0-0.056,0.015-0.083,0.042h-0.043
				c-0.028,0-0.042,0.013-0.042,0.041h-0.042l-0.041,0.042c-0.028,0-0.057,0.013-0.084,0.042h-0.042
				c-0.028,0-0.041,0.014-0.041,0.042c-0.03,0-0.058,0-0.084,0h-0.042c-0.028,0-0.056,0.014-0.083,0.041h-0.041
				c-0.03,0-0.057,0.015-0.084,0.042l-0.042,0.041h-0.041l-0.043,0.043c-0.028,0-0.056,0.013-0.083,0.041h-0.041
				c-0.028,0-0.056,0.014-0.085,0.042h-0.083c-0.028,0-0.054,0.013-0.082,0.041h-0.084c0,0.028-0.014,0.042-0.042,0.042
				c-0.028,0-0.056,0.013-0.084,0.042h-0.042c-0.027,0-0.056,0.014-0.082,0.042H16.58c-0.027,0-0.055,0.015-0.083,0.043h-0.083
				c-0.028,0-0.056,0.013-0.084,0.04h-0.043c-0.027,0-0.055,0.014-0.083,0.043h-0.041c-0.028,0-0.056,0.014-0.084,0.042h-0.125
				c-0.026,0-0.057,0.013-0.083,0.042h-0.083c0,0.028-0.014,0.041-0.041,0.041c-0.028,0-0.056,0.015-0.084,0.041H15.62
				c-0.028,0-0.057,0.015-0.085,0.043l-0.059,0.063c-0.026,0.007-0.046,0.014-0.065,0.019h-0.043c-0.027,0-0.056,0.014-0.083,0.042
				h-0.083c0,0.028-0.014,0.043-0.041,0.043c-0.028,0-0.056,0.013-0.084,0.041h-0.083c-0.028,0-0.056,0.015-0.083,0.042h-0.041
				c-0.029,0-0.057,0.015-0.085,0.043h-0.083c-0.028,0-0.055,0.013-0.083,0.041h-0.042c-0.028,0-0.056,0.013-0.084,0.043h-0.125
				c-0.028,0-0.058,0.014-0.085,0.042h-0.04c-0.028,0-0.056,0.013-0.083,0.04l-0.042,0.042c-0.028,0-0.056,0-0.083,0h-0.042
				c-0.028,0-0.056,0.015-0.084,0.041h-0.125c-0.027,0-0.055,0.015-0.083,0.043h-0.042c-0.056,0-0.098,0.013-0.127,0.041h-0.04
				c-0.028,0-0.058,0.015-0.085,0.042h-0.041c-0.029,0-0.057,0.012-0.083,0.042L13.24,20.7c-0.028,0-0.056,0-0.083,0h-0.042
				c-0.028,0-0.056,0.013-0.084,0.041h-0.125c-0.028,0-0.057,0.015-0.084,0.042h-0.041c-0.029,0-0.057,0.015-0.083,0.041h-0.042
				c-0.03,0-0.058,0-0.083,0h-0.041c-0.029,0-0.059,0.014-0.086,0.042h-0.042c-0.026,0-0.055,0.013-0.083,0.043h-0.041
				c-0.029,0-0.058,0.014-0.084,0.042H12.11c0,0.028-0.013,0.042-0.04,0.042c-0.028,0-0.058,0.013-0.085,0.041h-0.042
				c-0.026,0-0.069,0-0.125,0h-0.04c-0.028,0-0.056,0.013-0.085,0.041H11.61c-0.029,0-0.055,0.016-0.083,0.043h-0.125
				c-0.03,0-0.057,0.014-0.084,0.041h-0.043c-0.027,0-0.055,0-0.083,0H11.15c-0.027,0-0.056,0.015-0.083,0.042h-0.125
				c-0.028,0-0.056,0.012-0.083,0.042h-0.124c-0.03,0-0.057,0.013-0.084,0.042h-0.124c-0.03,0-0.058,0.013-0.087,0.041h-0.04
				c-0.027,0-0.056,0.015-0.084,0.042l-0.041,0.042h-0.042c-0.027,0.026-0.055,0.041-0.083,0.041c-0.029,0-0.043,0.015-0.043,0.042
				c-0.027,0-0.055,0-0.084,0c0,0.028-0.014,0.042-0.041,0.042c-0.028,0-0.057,0.014-0.084,0.043h-0.04
				c-0.029,0-0.058,0.013-0.084,0.042H9.731c-0.028,0-0.042,0.014-0.042,0.042h-0.04c-0.029,0.027-0.058,0.042-0.084,0.042
				c-0.058,0-0.099,0.014-0.127,0.041H9.397c-0.028,0-0.056,0.015-0.084,0.042H9.271c-0.028,0-0.056,0.015-0.083,0.043l-0.042,0.042
				c-0.027,0.027-0.056,0.042-0.083,0.042c-0.028,0-0.056,0.014-0.083,0.042l-0.042,0.04c-0.056,0-0.098,0-0.125,0H8.771
				c-0.028,0-0.056,0.016-0.083,0.042H8.646c-0.027,0-0.043,0.015-0.043,0.043c-0.027,0-0.057,0-0.083,0
				c0,0.027-0.015,0.042-0.042,0.042c-0.027,0-0.055,0.013-0.083,0.042l-0.042,0.04H8.311c-0.027,0.028-0.055,0.043-0.083,0.043
				H8.145c-0.029,0-0.056,0.014-0.083,0.042H7.936c-0.03,0-0.056,0.014-0.083,0.042H7.769c0,0.028-0.015,0.042-0.042,0.042
				s-0.055,0.012-0.083,0.04H7.559c-0.028,0-0.056,0.016-0.083,0.043H7.392c-0.027,0-0.056,0.014-0.083,0.041H7.226
				c-0.029,0-0.057,0.015-0.083,0.042H7.015c-0.028,0-0.056,0.015-0.083,0.042H6.808c-0.029,0-0.056,0.014-0.083,0.041H6.682
				c-0.028,0-0.041,0.015-0.041,0.043c-0.029,0-0.058,0-0.085,0c0,0.028-0.012,0.042-0.041,0.042c-0.028,0-0.056,0.013-0.084,0.042
				H6.39c-0.028,0-0.056,0-0.083,0H6.266c-0.03,0-0.058,0.015-0.083,0.04H6.14c-0.028,0-0.055,0.015-0.084,0.041H5.972
				c-0.027,0.03-0.055,0.043-0.082,0.043c-0.028,0-0.057,0.013-0.084,0.042H5.765c-0.03,0-0.042,0.014-0.042,0.042H5.68
				c-0.029,0.027-0.057,0.042-0.084,0.042s-0.056,0.013-0.083,0.042H5.471c-0.028,0-0.056,0.013-0.083,0.041H5.346
				c-0.029,0-0.043,0.015-0.043,0.042c-0.027,0-0.055,0-0.083,0H5.178c-0.027,0-0.056,0.014-0.083,0.043H5.011
				c0,0.028-0.014,0.041-0.041,0.041c-0.028,0-0.056,0.014-0.084,0.042H4.803c-0.027,0-0.055,0.015-0.082,0.042H4.677
				c-0.028,0-0.056,0.014-0.083,0.043H4.553c-0.028,0-0.057,0.012-0.084,0.04H4.384c0,0.029-0.013,0.043-0.041,0.043
				c-0.027,0-0.056,0.014-0.083,0.042H4.218c-0.027,0-0.055,0.014-0.084,0.041H4.009c-0.028,0-0.056,0.015-0.083,0.042H3.884
				c-0.028,0-0.055,0-0.084,0H3.759c-0.028,0-0.056,0.014-0.083,0.042H3.634c-0.027,0-0.055,0-0.083,0H3.508
				c-0.028,0-0.055,0.014-0.083,0.042H3.341c-0.028,0-0.056,0.013-0.084,0.041H3.175c-0.029,0-0.057,0.015-0.085,0.043H3.049
				c-0.029,0-0.057,0-0.083,0H2.922c-0.027,0-0.055,0.013-0.082,0.04H2.8c-0.03,0-0.058,0-0.085,0H2.673
				c-0.028,0-0.056,0.014-0.083,0.041H2.547c-0.028,0-0.042,0.015-0.042,0.043H2.465l-0.042,0.042c-0.028,0-0.056,0.014-0.084,0.042
				H2.297c-0.027,0-0.056,0.014-0.082,0.042H2.088c-0.028,0-0.056,0.014-0.083,0.042H1.963c-0.028,0-0.055,0.015-0.083,0.042
				c-0.029,0-0.057,0.015-0.084,0.041c-0.027,0-0.056,0-0.083,0c0,0.029-0.015,0.042-0.042,0.042s-0.055,0.015-0.083,0.042H1.545
				c-0.028,0-0.042,0.013-0.042,0.042c-0.027,0-0.056,0-0.083,0c0,0.028-0.014,0.041-0.041,0.041c-0.029,0-0.057,0.015-0.083,0.043
				H1.211c0,0.026-0.015,0.041-0.042,0.041c-0.029,0-0.056,0.013-0.083,0.04H1.002c-0.028,0-0.056,0.015-0.083,0.043H0.877
				c-0.028,0-0.057,0.015-0.083,0.042H0.752c-0.028,0-0.056,0.014-0.083,0.043c-0.031-0.015-0.058-0.03-0.083-0.043
				c-0.029-0.027-0.057-0.056-0.083-0.084c-0.028-0.027-0.056-0.055-0.083-0.081v-0.043c0-0.026,0-0.056,0-0.083
				c-0.056,0-0.126-0.014-0.209-0.042c0-0.028-0.015-0.055-0.042-0.083c-0.013-0.015-0.027-0.028-0.042-0.042v-4.113l0.042-0.021
				c0-0.028,0.013-0.041,0.042-0.041c0.028,0,0.07-0.015,0.125-0.042c0.055,0,0.111,0,0.167,0v-0.042c0-0.029,0-0.057,0-0.083
				c0-0.028,0-0.057,0-0.084c0-0.029,0-0.057,0-0.084v-0.041c0-0.028,0-0.056,0-0.083c0-0.028,0-0.057,0-0.084s0-0.056,0-0.083
				s0-0.055,0-0.083s0-0.056,0-0.083s0-0.056,0-0.083s0-0.056,0-0.084V18.82c0-0.028,0-0.056,0-0.084c0-0.028,0-0.056,0-0.083
				s0-0.056,0-0.083s0-0.057,0-0.082c0-0.028,0-0.058,0-0.085c0-0.027,0-0.057,0-0.083c0-0.028,0-0.054,0-0.083v-0.042
				c0-0.025,0-0.055,0-0.083c0-0.027,0-0.055,0-0.083s0-0.057,0-0.084c0-0.028,0-0.055,0-0.083s0-0.056,0-0.083
				c0-0.029,0-0.057,0-0.084c0-0.027,0-0.055,0-0.084v-0.041c0-0.029,0-0.056,0-0.083s0-0.056,0-0.083c0-0.029,0-0.056,0-0.083
				s0-0.056,0-0.083c0-0.028,0-0.057,0-0.085c0-0.027,0-0.056,0-0.083c0-0.028,0-0.056,0-0.084V16.94c0-0.027,0-0.056,0-0.082
				c0-0.029,0-0.057,0-0.084c0-0.028,0-0.055,0-0.083s0-0.056,0-0.085c0-0.028,0-0.055,0-0.083c0-0.027,0-0.056,0-0.083
				c0-0.028,0-0.057,0-0.084v-0.042c0-0.028,0-0.056,0-0.083s0-0.057,0-0.084c0-0.027,0-0.056,0-0.083c0-0.028,0-0.057,0-0.084
				c0-0.027,0-0.056,0-0.083c0-0.027,0-0.056,0-0.083s0-0.055,0-0.083v-0.041c0-0.029,0-0.057,0-0.085c0-0.027,0-0.055,0-0.083
				c-0.002-0.029-0.015-0.07-0.043-0.125c0-0.027-0.013-0.069-0.04-0.125c0-0.026,0-0.07,0-0.125c0-0.029,0-0.07,0-0.126
				c0-0.028,0-0.069,0-0.125c0-0.028,0-0.07,0-0.125c0-0.028,0-0.069,0-0.126c0-0.021,0-0.048,0-0.083c-0.023,0-0.052,0-0.084,0
				c-0.056,0-0.112-0.014-0.168-0.042c-0.027-0.027-0.055-0.055-0.083-0.082C0.057,14.408,0.028,14.38,0,14.352
				c0-0.028,0-0.057,0-0.083v-0.041c0-0.029,0-0.057,0-0.084s0-0.056,0-0.084c0-0.028,0-0.055,0-0.083s0-0.056,0-0.083
				c0-0.03,0-0.057,0-0.084c0-0.027,0-0.056,0-0.083c0-0.03,0-0.057,0-0.084V13.6c0-0.028,0-0.057,0-0.084c0-0.029,0-0.055,0-0.083
				s0-0.056,0-0.083s0-0.056,0-0.083s0-0.056,0-0.083c0-0.029,0-0.057,0-0.083c0-0.028,0-0.058,0-0.083v-0.044
				c0-0.026,0-0.054,0-0.083c0-0.027,0-0.055,0-0.083s0-0.056,0-0.083c0-0.029,0-0.056,0-0.083s0-0.056,0-0.085
				c0-0.028,0-0.055,0-0.083c0-0.027,0-0.055,0-0.083v-0.042c0-0.029,0-0.055,0-0.083s0-0.057,0-0.084s0-0.057,0-0.083
				c0-0.028,0-0.056,0-0.085c0-0.026,0-0.055,0-0.083c0-0.026,0-0.056,0-0.082c0-0.029,0-0.056,0-0.084V11.72
				c0-0.028,0-0.056,0-0.084c0-0.028,0-0.056,0-0.082c0-0.029,0-0.056,0-0.083c0-0.03,0-0.058,0-0.085
				c0.028-0.026,0.042-0.055,0.042-0.082c0.027-0.028,0.042-0.058,0.042-0.086c0.028-0.025,0.056-0.055,0.083-0.082
				c0.028,0,0.042-0.015,0.042-0.042c0-0.026,0-0.055,0-0.083c0.028-0.027,0.042-0.057,0.042-0.084
				c0.028-0.026,0.042-0.054,0.042-0.083c0.056-0.028,0.097-0.056,0.126-0.084c0.027-0.028,0.069-0.056,0.125-0.083
				c0.028,0,0.054-0.014,0.083-0.042c0.028-0.028,0.055-0.041,0.084-0.041c0.027-0.029,0.055-0.055,0.083-0.083
				c0.027-0.03,0.07-0.057,0.125-0.084c0.027-0.029,0.055-0.041,0.083-0.041c0-0.029,0.015-0.043,0.042-0.043
				c0.029,0,0.071,0,0.126,0v-0.041c0.056,0.028,0.097,0.041,0.126,0.041c0.027,0,0.04,0.015,0.04,0.043c0.057,0,0.098,0,0.126,0
				c0.056,0.026,0.109,0.056,0.167,0.082c0.028,0,0.042,0.014,0.042,0.044c0.529,0,1.058,0,1.586,0L3.3,10.551l0.042-0.041
				c2.005,0,4.024,0,6.056,0c0.056,0,0.125,0,0.208,0c0.194,0,0.403,0,0.626,0c0.028,0.028,0.07,0.041,0.125,0.041
				c0.027,0,0.042,0.013,0.042,0.042c1.114-0.029,2.213-0.042,3.3-0.042v-0.041c0.028,0,0.056-0.015,0.083-0.044v-0.041
				c0.058,0,0.112-0.015,0.168-0.041c0.055,0,0.111-0.016,0.167-0.043c0.028-0.026,0.07-0.041,0.125-0.041
				c0.055-0.029,0.097-0.058,0.125-0.084c0.027-0.028,0.057-0.055,0.083-0.083c0.028-0.029,0.054-0.057,0.083-0.084
				c0.056-0.028,0.112-0.056,0.167-0.083c0.027-0.028,0.042-0.057,0.042-0.085c0.028,0,0.056-0.013,0.083-0.04V9.799
				c0.056,0,0.112-0.014,0.168-0.042c0.056,0,0.111,0,0.167,0V9.716c0.027,0,0.07,0,0.125,0c0.056,0.027,0.098,0.041,0.125,0.041
				c0.028,0.028,0.042,0.056,0.042,0.084c0.027,0.027,0.042,0.057,0.042,0.084s-0.015,0.054-0.042,0.083
				c0,0.027-0.015,0.055-0.042,0.083c-0.056,0.028-0.125,0.058-0.209,0.083v0.042c0.029,0,0.069,0.015,0.125,0.042
				c0.02,0,0.04,0.007,0.062,0.022l0.021-0.022v-0.042l0.042-0.042c0.027-0.025,0.055-0.04,0.082-0.04
				c0.032-0.001,0.073-0.015,0.126-0.042h0.062c0.045-0.002,0.096-0.016,0.146-0.042c0.083,0,0.168,0,0.25,0v-0.041
				c0.153,0,0.307,0,0.459,0c0.03-0.001,0.072-0.015,0.127-0.042c0.139,0,0.277,0,0.416,0c0.029,0.013,0.057,0.027,0.083,0.042
				c0.14,0,0.28,0,0.419,0c0.029-0.001,0.069-0.015,0.124-0.042c0.946,0,1.894,0,2.84,0c0.028,0.013,0.057,0.027,0.083,0.042
				c0.097,0,0.195,0,0.294,0c0.029-0.001,0.069-0.015,0.123-0.042c1.002,0,2.02,0,3.05,0c0.027,0.013,0.056,0.027,0.083,0.042
				c0.35,0,0.697,0,1.044,0c0.03-0.001,0.072-0.015,0.125-0.042c0.668,0,1.322,0,1.964,0c0.029-0.028,0.056-0.041,0.083-0.041
				c0.027,0,0.07-0.016,0.125-0.045c0.39,0,0.779-0.013,1.17-0.04c0.028,0,0.055-0.015,0.083-0.043c0.028,0,0.068,0,0.125,0V9.757
				c0.196,0,0.404,0,0.626,0c0.028-0.028,0.042-0.056,0.042-0.083c0.027-0.03,0.07-0.056,0.126-0.084
				c0.026-0.027,0.069-0.055,0.125-0.081c0.029-0.029,0.07-0.057,0.126-0.084c0.027-0.029,0.055-0.057,0.083-0.084
				c0.028-0.028,0.056-0.056,0.083-0.083c0.028,0,0.056-0.014,0.084-0.042c0.056-0.027,0.11-0.057,0.167-0.083
				c0.028-0.029,0.041-0.056,0.041-0.083c0.03-0.028,0.071-0.056,0.127-0.083c0.028-0.029,0.069-0.057,0.125-0.084
				c0.027-0.026,0.057-0.056,0.083-0.082c0-0.031,0-0.058,0-0.086c0.028-0.027,0.056-0.055,0.084-0.083
				c0.028,0,0.041-0.014,0.041-0.042c0.056-0.029,0.112-0.058,0.167-0.083c0.028-0.028,0.069-0.056,0.125-0.084
				c0.028-0.027,0.057-0.04,0.084-0.04c0-0.029,0.013-0.041,0.041-0.041c0.028,0,0.071-0.017,0.126-0.045
				c0.223,0,0.458-0.013,0.709-0.041c0.028-0.028,0.07-0.057,0.125-0.083c0.03-0.028,0.057-0.056,0.084-0.083
				c0.026-0.028,0.056-0.057,0.082-0.083c0.029,0,0.058-0.014,0.083-0.042c0.028-0.029,0.042-0.057,0.042-0.083
				c0.03-0.028,0.056-0.055,0.083-0.083c0.028-0.028,0.057-0.057,0.085-0.084c0.027-0.027,0.057-0.055,0.083-0.083
				c0.028-0.028,0.055-0.056,0.083-0.084c0.028,0,0.056-0.015,0.083-0.041c0.028-0.028,0.055-0.042,0.083-0.042
				c0.029-0.028,0.043-0.056,0.043-0.083c0.028-0.029,0.042-0.057,0.042-0.083c0.029-0.029,0.069-0.057,0.125-0.083
				c0.028-0.028,0.068-0.058,0.124-0.084c0.028-0.028,0.057-0.055,0.083-0.083c0.028-0.026,0.056-0.055,0.083-0.083l0.043-0.041
				c0-0.028,0.013-0.056,0.042-0.084c0.028-0.027,0.043-0.055,0.043-0.084c0.027-0.028,0.055-0.041,0.083-0.041
				c0-0.027,0.012-0.042,0.041-0.042c0.03-0.028,0.072-0.041,0.126-0.041c0.028-0.028,0.041-0.056,0.041-0.084
				c0.027-0.028,0.057-0.055,0.083-0.083c0.029-0.028,0.057-0.055,0.085-0.083c0.026-0.028,0.054-0.056,0.083-0.083
				c0.028-0.027,0.056-0.056,0.083-0.084c0.027-0.027,0.055-0.055,0.083-0.083c0.027,0,0.043-0.013,0.043-0.042
				C34.483,6.055,34.511,6.027,34.538,6c0.028-0.03,0.056-0.056,0.083-0.083c0.03-0.029,0.057-0.057,0.085-0.084
				c0.027-0.029,0.055-0.057,0.083-0.084c0.028-0.026,0.056-0.056,0.084-0.083c0.028-0.028,0.055-0.057,0.083-0.084
				c0.026-0.028,0.055-0.054,0.083-0.083c0.028,0,0.042-0.014,0.042-0.041c0.057-0.028,0.112-0.058,0.168-0.084
				c0.055-0.028,0.109-0.042,0.166-0.042V5.289h0.043l0.041-0.042c0.029-0.029,0.055-0.043,0.083-0.043c0.029,0,0.072,0,0.127,0
				V5.163c5.43,0,10.857,0,16.286,0V5.122c0.028-0.027,0.042-0.056,0.042-0.084c0.028-0.027,0.042-0.055,0.042-0.083
				c0.028-0.027,0.057-0.055,0.084-0.083l0.04-0.042c0-0.026,0.015-0.056,0.044-0.083c0.026-0.028,0.04-0.056,0.04-0.083
				c0.03-0.028,0.056-0.056,0.083-0.083l0.042-0.041c0.028-0.028,0.056-0.042,0.083-0.042c0.029,0,0.056,0,0.083,0V4.453
				l0.042-0.042c0.029-0.028,0.057-0.042,0.083-0.042c0.028,0,0.069-0.014,0.125-0.042c0.14,0,0.279,0,0.419,0V4.287
				c0-0.029,0-0.057,0-0.084c0.026-0.028,0.055-0.056,0.083-0.083c0.028-0.028,0.07-0.057,0.125-0.084
				c0.029,0,0.055-0.014,0.083-0.042s0.057-0.056,0.084-0.083l0.041-0.042V3.827c0.029,0,0.057,0,0.084,0
				c0-0.028,0.013-0.056,0.042-0.083c0.028,0,0.057-0.013,0.083-0.041c0.03-0.029,0.058-0.057,0.083-0.083c0.029,0,0.056,0,0.084,0
				c0-0.029,0.015-0.042,0.042-0.042c0.028-0.028,0.056-0.056,0.083-0.083c0.028-0.028,0.058-0.056,0.085-0.082l0.042-0.044
				c0-0.028,0-0.056,0-0.083c0.026-0.028,0.054-0.056,0.083-0.083c0.027-0.027,0.056-0.055,0.084-0.082
				c0.028-0.03,0.056-0.058,0.083-0.085c0-0.028,0.014-0.055,0.04-0.083c0-0.028,0-0.057,0-0.084c0-0.028,0-0.055,0-0.084V2.742
				C54.64,2.714,54.68,2.7,54.709,2.7V2.658L54.752,2.7V2.616c0.027,0,0.055,0,0.083,0c0.027,0,0.054-0.012,0.083-0.042
				C54.946,2.604,54.974,2.63,55,2.658c0.057,0,0.111,0,0.169,0c0.029,0,0.07,0,0.125,0c0.028-0.028,0.04-0.054,0.04-0.083
				c0.058,0,0.1,0,0.127,0c0.083,0,0.18,0,0.292,0c0.029,0,0.07,0.015,0.125,0.042c0.028,0.028,0.055,0.055,0.083,0.083
				c0.029,0.029,0.057,0.055,0.084,0.083c0.026,0.029,0.056,0.056,0.083,0.084c0,0.027,0.014,0.057,0.042,0.084
				c0.03,0.028,0.055,0.041,0.083,0.041c0.028,0.028,0.057,0.055,0.083,0.083c0.028,0.029,0.056,0.057,0.083,0.084
				c0.027,0.028,0.055,0.056,0.084,0.083c0.027,0.027,0.055,0.056,0.083,0.083s0.056,0.056,0.083,0.085
				c0.03,0.026,0.058,0.054,0.084,0.082l0.042,0.042c0.029,0.028,0.071,0.041,0.125,0.041c0.028,0.028,0.069,0.055,0.125,0.083
				c0.028,0.029,0.042,0.056,0.042,0.083c0.012,0.015,0.027,0.028,0.041,0.042c0.014,0.014,0.028,0.028,0.043,0.042
				c0.03,0.03,0.07,0.057,0.124,0.083c0,0.028,0,0.056,0,0.083c0.056,0.028,0.097,0.042,0.125,0.042
				c0.028,0.028,0.056,0.057,0.083,0.084c0,0.026,0.014,0.055,0.042,0.083c0.028,0.028,0.041,0.056,0.041,0.084l0.043,0.041
				c0.473,0,0.96,0,1.461,0V4.287c0-0.029,0-0.057,0-0.084s0-0.056,0-0.083c0.03,0,0.056-0.014,0.083-0.042V4.036
				c0.058,0,0.112-0.014,0.167-0.042c0.056,0,0.112-0.013,0.167-0.041c0.056-0.027,0.113-0.042,0.169-0.042
				c0.028-0.028,0.041-0.057,0.041-0.083c0.056,0,0.111-0.014,0.167-0.042c0-0.027,0.015-0.055,0.041-0.083
				c0.03,0,0.056-0.014,0.084-0.042V3.619c0.056,0,0.11-0.015,0.168-0.042c0.055-0.028,0.109-0.056,0.165-0.083
				c0.03-0.028,0.058-0.056,0.085-0.082c0.027,0,0.056-0.016,0.082-0.044h0.042c0.056-0.028,0.112-0.056,0.167-0.083l0.043-0.042
				V3.201c0.056,0,0.111-0.014,0.165-0.042c0.03-0.028,0.042-0.056,0.042-0.084c0.03,0,0.056-0.013,0.083-0.041V2.992
				c0.057,0,0.097,0,0.126,0c0.028,0,0.068,0.014,0.124,0.042c0.029,0.028,0.043,0.056,0.043,0.085c0,0.027,0.013,0.055,0.041,0.082
				c0,0.028,0,0.055,0,0.083c0,0.027,0,0.055,0,0.083v0.044c0,0.026,0,0.054,0,0.082s0,0.056,0,0.083s0.015,0.055,0.042,0.083
				c0.029,0.029,0.042,0.056,0.042,0.083c0.029,0.028,0.044,0.056,0.044,0.083c0,0.027,0.012,0.056,0.04,0.083
				c0,0.028,0,0.056,0,0.083l0.042,0.042c0.029,0.028,0.057,0.057,0.084,0.084c0,0.026,0.014,0.055,0.042,0.083
				c0.027,0.028,0.042,0.056,0.042,0.084l0.041,0.041c0.612,0,1.226,0,1.838,0c0-0.028,0.014-0.041,0.042-0.041
				c0.029,0,0.068,0,0.125,0V4.244c0.055,0,0.126,0,0.211,0c0.055,0.03,0.109,0.057,0.166,0.084
				c0.028,0.028,0.055,0.056,0.083,0.083c0,0.028,0.014,0.042,0.04,0.042c0,0.029,0,0.057,0,0.084v0.041
				c0.028,0,0.058,0.015,0.084,0.042c0.028,0.027,0.056,0.041,0.084,0.041c0,0.028,0.013,0.056,0.041,0.083c0,0.028,0,0.058,0,0.083
				c0.017,0.018,0.031,0.03,0.042,0.042c0.028,0.028,0.055,0.056,0.083,0.083c0.028,0.029,0.056,0.057,0.083,0.083
				c0,0.029,0.013,0.058,0.042,0.084c0,0.028,0.014,0.055,0.042,0.083c0.027,0,0.07,0,0.125,0V5.163c5.235,0,10.456,0,15.66,0
				c0.029-0.028,0.057-0.056,0.084-0.083c0.03,0,0.056-0.014,0.085-0.043c0.027-0.027,0.055-0.055,0.083-0.083
				c0.027-0.027,0.04-0.055,0.04-0.083c0.03-0.029,0.043-0.057,0.043-0.083c0.028-0.028,0.042-0.056,0.042-0.083
				c0-0.029,0.012-0.058,0.041-0.084c0-0.028,0-0.056,0-0.083c0.028-0.028,0.057-0.056,0.083-0.084c0.028,0,0.042-0.014,0.042-0.042
				c0.027-0.028,0.042-0.056,0.042-0.083s0.013-0.055,0.041-0.084c0-0.027,0-0.055,0-0.081c0-0.03,0-0.057,0-0.084
				c0-0.029,0-0.057,0-0.084s0-0.056,0-0.083c-0.028-0.028-0.041-0.057-0.041-0.083c-0.029,0-0.042-0.014-0.042-0.042
				c0-0.027,0-0.055,0-0.083c0-0.029,0-0.057,0-0.083c0-0.029,0-0.056,0-0.083s0-0.057,0-0.083c0-0.029,0-0.057,0-0.085
				c0-0.028,0-0.056,0-0.083c0-0.028,0-0.056,0-0.083V3.159c0-0.028,0-0.056,0-0.084c0-0.028,0-0.055,0-0.083
				c0-0.027,0-0.056,0-0.083c0-0.031,0-0.058,0-0.085c0-0.027,0-0.055,0-0.083s0-0.057,0-0.083c0-0.028,0-0.054,0-0.083V2.532
				c0-0.027,0-0.055,0-0.083c0-0.027,0-0.056,0-0.084s0-0.055,0-0.083c0.027-0.028,0.055-0.056,0.083-0.084
				c0.03-0.026,0.072-0.041,0.125-0.041c0.083,0,0.169-0.015,0.251-0.042C81.659,2.115,81.716,2.101,81.771,2.073z M82.835,2.552
				l0.021-0.02c0.014-0.013,0.035-0.027,0.063-0.041h-0.022c-0.04,0-0.083,0-0.124,0c0.014,0.014,0.027,0.029,0.042,0.041
				L82.835,2.552z M80.268,10.97c-0.058,0.026-0.112,0.054-0.168,0.082c0.083,0,0.168,0,0.25,0l0.021-0.041
				c-0.019-0.016-0.04-0.029-0.062-0.041l-0.022-0.021L80.268,10.97z M55.605,3.056c0.038,0.013,0.074,0.026,0.106,0.04V3.075
				l-0.083-0.041L55.605,3.056z M41.887,16.021c-0.028,0.028-0.041,0.056-0.041,0.083c-0.029,0.028-0.056,0.056-0.084,0.084
				c0.029,0.029,0.041,0.057,0.041,0.084c0,0.026,0,0.055,0,0.083s0,0.057,0,0.084c0,0.026,0,0.056,0,0.083c0,0.028,0,0.055,0,0.083
				c0,0.029,0,0.057,0,0.085v0.041c0,0.027,0,0.056,0,0.083s0,0.057,0,0.083c0,0.028,0,0.055,0,0.083c0,0.029,0,0.057,0,0.084
				c-0.026,0.027-0.041,0.056-0.041,0.083c-0.028,0.029-0.04,0.058-0.04,0.085c-0.028,0.027-0.042,0.055-0.042,0.083l-0.042,0.042
				c0,0.029-0.014,0.057-0.042,0.084v0.292c0,0.028,0,0.057,0,0.083c0,0.028,0,0.056,0,0.083v0.042c0,0.027,0,0.057,0,0.084
				s0,0.056,0,0.083c0,0.028,0,0.058,0,0.083c0,0.029,0,0.058,0,0.086c0,0.026,0,0.054,0,0.083c0,0.028,0,0.056,0,0.083v0.043
				c0,0.025,0.013,0.054,0.042,0.082c0,0.028,0,0.056,0,0.083s0,0.056,0,0.083c0,0.029,0.013,0.057,0.042,0.084
				c0,0.029,0.014,0.055,0.042,0.083c0.027,0.028,0.069,0.056,0.125,0.083c0,0.028,0,0.056,0,0.083
				c0.026,0.028,0.041,0.056,0.041,0.084v0.042c1.393,0,2.784,0,4.176,0c0.028,0.028,0.07,0.041,0.125,0.041
				c0.029,0,0.042,0.015,0.042,0.042c0.278,0,0.543,0,0.794,0c0.056,0,0.124,0,0.208,0c0.111,0,0.21,0,0.292,0
				c0.028-0.028,0.057-0.042,0.084-0.042s0.07-0.013,0.124-0.041c0.028,0,0.071-0.014,0.126-0.042c0.028,0,0.055-0.013,0.084-0.042
				c0.028,0,0.067-0.015,0.123-0.042c0.055,0,0.112-0.013,0.167-0.041c0.03-0.028,0.07-0.056,0.127-0.083
				c0.027-0.028,0.056-0.056,0.083-0.084c0.055-0.027,0.111-0.055,0.167-0.083c0.028,0,0.056,0,0.083,0c0-0.028,0-0.057,0-0.083
				c0-0.028,0-0.056,0-0.083s0-0.056,0-0.084c0-0.028,0-0.055,0-0.083s0-0.056,0-0.083v-0.042c0-0.028,0-0.054,0-0.083
				c0-0.028,0-0.055,0-0.083s0-0.056,0-0.083c0-0.027,0-0.055,0-0.083c0-0.029,0-0.058,0-0.085c0-0.027,0-0.055,0-0.083
				c0-0.027,0-0.056,0-0.083v-0.042c0-0.027,0-0.055,0-0.084c0-0.026,0-0.055,0-0.082c0-0.029,0-0.056,0-0.083s0-0.056,0-0.084
				c0-0.028,0-0.055,0-0.084c0-0.026,0-0.054,0-0.082c0-0.029,0-0.057,0-0.084v-0.042c0-0.028,0-0.056,0-0.084
				c0-0.028,0-0.055,0-0.083c0-0.027,0-0.056,0-0.083s0-0.057,0-0.083c0-0.028,0-0.056,0-0.083c0-0.029,0-0.058,0-0.085
				c0-0.027,0-0.056,0-0.082V16.44c0-0.028,0-0.057,0-0.084s0-0.056,0-0.083c0-0.028,0-0.056,0-0.084c0-0.028,0-0.056,0-0.084
				v-0.292c0-0.028,0-0.055,0-0.083v-0.041c-1.513,0-3.024,0-4.531,0l-0.02,0.041c-0.028,0.028-0.042,0.055-0.042,0.083
				s0,0.057,0,0.083c0,0.028,0,0.057,0,0.083c0,0.028,0,0.057,0,0.084c0,0.027,0,0.056,0,0.083c0,0.028,0,0.057,0,0.084v0.042
				c0,0.026,0.015,0.055,0.042,0.083c0,0.028,0.014,0.057,0.042,0.084c0,0.026,0,0.056,0,0.083c0,0.028,0,0.055,0,0.083
				c0,0.029,0,0.057,0,0.085c0.028,0.028,0.055,0.055,0.083,0.083c0,0.027,0,0.055,0,0.084l0.042,0.041
				c0,0.028,0.014,0.055,0.042,0.083c0.028,0.029,0.056,0.057,0.083,0.084c0.027,0.027,0.042,0.056,0.042,0.083
				c0.028,0.029,0.043,0.058,0.043,0.085c0.027,0.027,0.04,0.055,0.04,0.083c0.028,0.028,0.07,0.055,0.125,0.083
				c0,0.028,0,0.056,0,0.083l0.042,0.042c0,0.027,0.014,0.056,0.041,0.082c0.028,0.029,0.056,0.057,0.083,0.084
				c0.03,0.028,0.056,0.056,0.084,0.084c0.029,0.028,0.041,0.056,0.041,0.083c0.028,0.028,0.056,0.04,0.084,0.04
				c0.028,0.028,0.056,0.042,0.083,0.042s0.069,0.014,0.125,0.043c0.03,0.028,0.042,0.056,0.042,0.083
				c0.028,0.028,0.042,0.055,0.042,0.083s0,0.056,0,0.083c0,0.03,0,0.056,0,0.083l-0.042,0.042
				c-0.027,0.028-0.042,0.056-0.042,0.083h-0.041c0,0.028,0,0.055,0,0.083l-0.042,0.042c-0.028,0.028-0.042,0.056-0.042,0.083
				h-0.042c-0.026,0.028-0.054,0.042-0.083,0.042c-0.112,0-0.209,0-0.292,0c-0.056-0.028-0.097-0.042-0.124-0.042
				c-0.029-0.028-0.043-0.056-0.043-0.083h-0.04c-0.058-0.028-0.112-0.042-0.168-0.042c-0.057-0.028-0.112-0.055-0.167-0.083
				c-0.028-0.028-0.042-0.056-0.042-0.083h-0.042c-0.056-0.029-0.097-0.042-0.125-0.042c-0.056-0.028-0.098-0.054-0.126-0.083
				c-0.027-0.028-0.056-0.055-0.083-0.083c-0.058-0.029-0.098-0.042-0.127-0.042c-0.027-0.027-0.055-0.055-0.082-0.083
				c-0.028-0.028-0.056-0.057-0.085-0.084c-0.027-0.028-0.056-0.055-0.083-0.083c-0.028-0.028-0.056-0.056-0.083-0.083
				c-0.027-0.029-0.056-0.057-0.084-0.084c-0.028-0.027-0.055-0.055-0.083-0.084c-0.028-0.026-0.042-0.055-0.042-0.082
				c-0.028,0-0.042-0.015-0.042-0.042c-0.027-0.028-0.041-0.056-0.041-0.083c-0.03-0.029-0.057-0.056-0.085-0.083
				c0-0.028,0-0.056,0-0.083c0-0.028,0-0.057,0-0.085c-0.028-0.027-0.042-0.056-0.042-0.083c0-0.028,0-0.056,0-0.084
				c-0.027-0.028-0.041-0.055-0.041-0.083v-0.041c0-0.029,0-0.057,0-0.084c0-0.028-0.014-0.055-0.042-0.083
				c0-0.028-0.015-0.056-0.042-0.085c-0.028-0.028-0.042-0.055-0.042-0.083c0-0.027,0-0.056,0-0.083c0-0.028,0-0.057,0-0.084
				s0-0.056,0-0.083v-0.042c-0.029-0.028-0.042-0.057-0.042-0.084c0-0.027-0.014-0.056-0.042-0.083c0-0.028,0-0.057,0-0.084
				c0-0.027,0-0.056,0-0.083c0-0.027,0-0.056,0-0.083s0-0.055,0-0.083v-0.041c-0.056,0-0.111,0-0.167,0
				c-0.028,0.026-0.056,0.041-0.085,0.041c-0.056,0.028-0.109,0.055-0.165,0.083c-0.055,0.028-0.112,0.042-0.167,0.042
				c-0.029,0.029-0.056,0.055-0.083,0.084C41.944,15.966,41.915,15.994,41.887,16.021z M44.54,18.047l-0.02,0.021l0.04,0.042v-0.042
				L44.54,18.047z M23.052,14.895h0.021c0.076-0.003,0.153-0.017,0.231-0.041c0.055,0,0.109-0.017,0.165-0.043
				c0.029,0,0.057-0.013,0.084-0.041c0.056,0,0.111-0.015,0.167-0.042c0.139-0.028,0.265-0.057,0.375-0.084
				c0.111-0.028,0.209-0.069,0.292-0.126c0.056-0.027,0.112-0.055,0.167-0.082c0.055,0,0.111-0.015,0.167-0.042
				c0.112-0.028,0.209-0.056,0.294-0.083c0.025-0.014,0.045-0.027,0.061-0.042c0.027-0.027,0.048-0.054,0.063-0.083
				c0.056-0.029,0.111-0.07,0.167-0.127c0.056-0.028,0.112-0.055,0.167-0.083c-7.517,0-15.02,0-22.508,0
				c0,0.028-0.015,0.055-0.044,0.083v0.022c-0.012,0-0.027,0.006-0.04,0.021H2.84c-0.028,0-0.056,0.014-0.083,0.042l-0.083,0.084
				v0.041c-0.028,0-0.042,0.015-0.042,0.042v0.042c-0.028,0-0.041,0.014-0.041,0.042v0.669c0,0.028,0.013,0.04,0.041,0.04v3.049
				c-0.028,0-0.041,0.016-0.041,0.041v0.586c-0.028,0-0.042,0.014-0.042,0.042v1.377c0,0.028,0.015,0.043,0.042,0.043v0.083h0.041
				v0.124c0,0.028,0.015,0.041,0.042,0.041v0.084h0.041v0.042l0.042,0.042V20.7H2.8c0.026,0.027,0.055,0.041,0.083,0.041
				s0.04,0.015,0.04,0.042c0.029,0,0.057,0,0.085,0H3.09v0.041c0,0.056-0.013,0.099-0.041,0.127c0,0.032-0.007,0.059-0.021,0.083
				c0.022,0,0.043,0,0.063,0c0.028,0.027,0.042,0.057,0.042,0.084l0.043,0.041v0.042c0,0.027-0.014,0.055-0.043,0.083
				c0,0.027-0.014,0.056-0.042,0.083c-0.028,0-0.07,0.014-0.124,0.042c-0.049,0-0.092,0-0.126,0c-0.016,0.016-0.03,0.03-0.041,0.041
				c0,0.024,0,0.047,0,0.063c0.037-0.001,0.08-0.009,0.123-0.021c0.029,0,0.057-0.013,0.085-0.042c0.055,0,0.111-0.015,0.168-0.041
				c0.082,0,0.166-0.015,0.25-0.042c0.055,0,0.11-0.014,0.167-0.042c0.027,0,0.056-0.014,0.083-0.041
				c0.056,0,0.111-0.016,0.167-0.042c0.084-0.03,0.167-0.056,0.25-0.084c0.084-0.027,0.167-0.069,0.251-0.125
				c0.056-0.028,0.111-0.055,0.167-0.083c0.056,0,0.111-0.015,0.167-0.042c0.083,0,0.167-0.014,0.251-0.043
				c0.055,0,0.11-0.015,0.166-0.042c0.028,0,0.057-0.012,0.083-0.041c0.056,0,0.112-0.013,0.168-0.042
				c0.083-0.028,0.166-0.055,0.25-0.083c0.112-0.03,0.223-0.07,0.334-0.125c0.083-0.029,0.168-0.057,0.252-0.084
				c0.054,0,0.11-0.015,0.165-0.042c0.083-0.027,0.168-0.055,0.25-0.082c0.084-0.03,0.167-0.056,0.252-0.083
				c0.082-0.028,0.165-0.058,0.25-0.084c0.084-0.028,0.167-0.057,0.251-0.084c0.083-0.028,0.165-0.056,0.25-0.083
				c0.083-0.029,0.167-0.056,0.25-0.084c0.083-0.026,0.166-0.054,0.25-0.082c0.083-0.029,0.166-0.057,0.25-0.084
				c0.083-0.029,0.167-0.057,0.25-0.083c0.084-0.028,0.168-0.057,0.25-0.084c0.084,0,0.167-0.013,0.251-0.042
				c0.111,0,0.223-0.015,0.333-0.042c0.029,0,0.057-0.014,0.084-0.041c0.056,0,0.111-0.015,0.167-0.042
				c0.083,0,0.168-0.014,0.252-0.041c0.081-0.028,0.165-0.057,0.248-0.084c0.084-0.028,0.168-0.069,0.25-0.125
				c0.087-0.029,0.168-0.057,0.252-0.084c0.083-0.028,0.167-0.056,0.25-0.083c0.084-0.028,0.169-0.069,0.25-0.125
				c0.057-0.027,0.111-0.055,0.167-0.083c0.084-0.028,0.154-0.057,0.21-0.083c0.083-0.028,0.154-0.07,0.209-0.126
				c0.055-0.028,0.111-0.057,0.165-0.082c0.028,0,0.056-0.015,0.084-0.043c0.055,0,0.112-0.015,0.167-0.042
				c0.084,0,0.168-0.013,0.25-0.041c0.196-0.029,0.391-0.057,0.585-0.083c0.084-0.028,0.167-0.071,0.251-0.127
				c0.083-0.029,0.167-0.056,0.249-0.083c0.084-0.027,0.169-0.055,0.251-0.083c0.084-0.029,0.168-0.058,0.252-0.085
				c0.083,0,0.165-0.012,0.248-0.04c0.058,0,0.112-0.015,0.169-0.042c0.028,0,0.054-0.013,0.083-0.041
				c0.056,0,0.112-0.015,0.167-0.042c0.083-0.028,0.168-0.054,0.25-0.083c0.083-0.028,0.166-0.056,0.25-0.083
				c0.083-0.029,0.166-0.056,0.251-0.083c0.082-0.028,0.167-0.056,0.25-0.083c0.083,0,0.167-0.013,0.25-0.042
				c0.084-0.028,0.167-0.055,0.25-0.084c0.083-0.026,0.168-0.068,0.252-0.125c0.082-0.027,0.166-0.056,0.25-0.083
				c0.082,0,0.165-0.015,0.25-0.041c0.138-0.028,0.263-0.057,0.375-0.085c0.111-0.027,0.209-0.068,0.293-0.125
				c0.082-0.028,0.166-0.057,0.25-0.083c0.083-0.028,0.167-0.056,0.25-0.083c0.084-0.029,0.168-0.058,0.25-0.085
				c0.084-0.027,0.168-0.056,0.252-0.082c0.082-0.029,0.166-0.056,0.25-0.086c0.083-0.027,0.168-0.055,0.25-0.082
				c0.056-0.028,0.111-0.069,0.167-0.125c0.056-0.028,0.111-0.069,0.167-0.125c0.029-0.016,0.057-0.028,0.083-0.042
				c0.029-0.015,0.058-0.028,0.083-0.042c0.026,0,0.055-0.013,0.083-0.041c0.057,0,0.112-0.015,0.168-0.042c0.023,0,0.042,0,0.063,0
				c0.063-0.007,0.125-0.021,0.187-0.042c0.112,0,0.225-0.014,0.335-0.042c0.027,0,0.056-0.014,0.083-0.041
				c0.057,0,0.111-0.014,0.166-0.042c0.084-0.029,0.168-0.056,0.252-0.083c0.11-0.03,0.222-0.07,0.333-0.126
				c0.112-0.028,0.224-0.069,0.333-0.125c0.057-0.027,0.113-0.055,0.168-0.083l0.063-0.021l0.021-0.022c0.02,0,0.041,0,0.064,0
				l0.855-0.292C22.887,14.951,22.97,14.923,23.052,14.895z M31.551,14.874c-0.11,0.021-0.229,0.042-0.355,0.063
				c-0.056,0.056-0.125,0.096-0.208,0.126c-0.083,0.028-0.167,0.055-0.25,0.083c0.043,0,0.084,0,0.126,0c0.199,0,0.394,0,0.584,0
				c0.028,0,0.069,0,0.125,0c0.028,0,0.056,0,0.083,0l0.042,0.042c0.046,0,0.088,0,0.125,0c-0.056-0.057-0.11-0.113-0.167-0.168
				c-0.017-0.034-0.037-0.067-0.063-0.104C31.579,14.902,31.567,14.888,31.551,14.874z`,
            }),
          });
        }
        function I1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 47.875 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M8.387,1.282v0.192l0.384,0.039v0.422l27.197-0.077V1.625
				l0.23-0.152l0.806,0.039l0.461,0.269v0.153h0.192v0.422l0.346,0.268h0.537l0.077,0.079c0.08,0.051,0.129,0.102,0.156,0.154
				c0.025,0.051,0.038,0.114,0.038,0.189c0,0.026,0,0.052,0,0.077h8.528l0.077,0.079c0.025,0.05,0.051,0.125,0.076,0.229
				c0.128,0.258,0.194,0.565,0.194,0.923c0,0.356-0.038,0.704-0.117,1.037c-0.052,0.178-0.102,0.307-0.153,0.384l-8.683,0.038
				l-0.153,0.346h-0.767v1.497c-0.051,0.154-0.103,0.257-0.154,0.307c-0.052,0.078-0.102,0.129-0.153,0.154l-0.076,0.039h-5.765
				l-0.191,0.423h0.538c0.436,0.051,0.822,0.153,1.152,0.309c0.334,0.152,0.628,0.319,0.885,0.499
				c0.126,0.101,0.217,0.177,0.267,0.229L34.163,9.81h-3.266l5.454,18.859l-0.306,0.153l0.077,0.04
				c0.077,0.024,0.151,0.05,0.229,0.076c0.104,0.051,0.207,0.128,0.308,0.231v0.459c-0.025,0.026-0.062,0.065-0.113,0.117
				c-0.128,0.076-0.296,0.153-0.5,0.231c-0.179,0.101-0.356,0.176-0.537,0.229l-0.193,0.039h-0.538l-0.079,0.229h-1.305v0.422
				h-2.881v-0.383L24.674,9.886l-0.346-0.232l-0.537,0.999l-0.038,0.883h0.114l0.039,0.153l0.152,0.041v2.458l-0.152,0.039v0.153
				l-1.459,0.5c-0.436,0.154-0.947,0.308-1.537,0.461c-1.154,0.307-2.101,0.422-2.843,0.347c-0.665-0.077-1.344-0.23-2.037-0.463
				c-0.205-0.051-0.408-0.113-0.614-0.191l-0.191-0.116l-0.424,0.347l-0.654,0.193l-0.153,0.267l-1.383,3.303
				c-0.974,2.408-1.625,4.034-1.958,4.88c-0.053,0.128-0.077,0.244-0.077,0.346c-0.026,0.155-0.026,0.333,0,0.536
				c0.024,0.335,0.087,0.769,0.191,1.307l0.729,0.039c0.128,0.026,0.219,0.05,0.268,0.076c0.077,0.029,0.152,0.079,0.232,0.156
				c0.026,0.051,0.049,0.089,0.077,0.114l-0.039,0.076l-0.422,0.384c-0.36,0.282-0.706,0.487-1.037,0.615
				c-0.36,0.129-0.833,0.242-1.421,0.348l-0.77,0.113l-6.683,0.077l-0.231-0.266l-0.077-0.77l-0.537-0.116
				c-0.153,0-0.257-0.025-0.309-0.077c-0.05,0-0.088-0.024-0.114-0.076L0.397,26.71c0-0.128-0.013-0.282-0.038-0.463
				c-0.051-0.126-0.089-0.243-0.113-0.345c-0.029-0.18-0.039-0.446-0.039-0.806c0-0.359,0.039-0.704,0.113-1.037l3.419-9.181
				c0.18-0.229,0.358-0.487,0.538-0.768c0.384-0.564,0.602-0.922,0.654-1.074c0.077-0.258,0.127-0.464,0.152-0.617
				c0.052-0.23,0.038-0.46-0.038-0.691c-0.077-0.282-0.206-0.575-0.385-0.883c-0.153-0.281-0.346-0.551-0.576-0.808
				C3.906,9.859,3.611,9.616,3.202,9.31L2.666,8.888V8.233c0.127,0,0.28-0.05,0.46-0.153C3.51,7.9,3.854,7.631,4.161,7.272
				C4.47,6.888,4.686,6.478,4.814,6.045C4.84,5.915,4.866,5.788,4.892,5.66V5.505C4.866,5.481,4.84,5.441,4.814,5.391
				C4.738,5.288,4.648,5.199,4.546,5.123c-0.103-0.076-0.23-0.129-0.385-0.155L3.97,4.891C3.868,4.915,3.766,4.929,3.663,4.929
				c-0.257-0.024-0.447-0.09-0.576-0.192C2.908,4.635,2.792,4.495,2.741,4.316c-0.101-0.232-0.101-0.487,0-0.77
				c0.103-0.307,0.295-0.5,0.577-0.576c0.179-0.051,0.371-0.051,0.575,0c0.078,0,0.231,0.127,0.463,0.384
				C4.482,3.482,4.599,3.611,4.698,3.74v0.422l0.194,0.23l0.04-0.462c0.025-0.127,0.052-0.256,0.077-0.384
				c0.076-0.282,0.19-0.511,0.345-0.689c0.128-0.182,0.345-0.347,0.652-0.5C6.16,2.28,6.301,2.229,6.429,2.204v-0.27h1.228V1.282
				H8.387z M18.182,9.962c-0.204,0.024-0.434,0.088-0.691,0.19c-0.537,0.23-0.984,0.565-1.343,1.001
				c-0.361,0.433-0.588,0.919-0.692,1.46c-0.077,0.281-0.116,0.508-0.116,0.69l0.039,0.152c0.05,0.128,0.115,0.258,0.191,0.386
				c0.23,0.409,0.615,0.754,1.153,1.036c0.333,0.18,0.794,0.294,1.382,0.345c0.64,0.079,1.204,0.066,1.69-0.037
				c1.076-0.256,1.984-0.653,2.728-1.189c0.179-0.154,0.331-0.332,0.459-0.54c0.077-0.128,0.142-0.282,0.192-0.46
				c0.028-0.101,0.038-0.434,0.038-1c0-0.562-0.024-0.96-0.077-1.189c-0.023-0.155-0.178-0.424-0.46-0.808
				c-0.281-0.356-0.512-0.588-0.69-0.69c-0.231-0.128-0.447-0.179-0.653-0.153c-0.155,0-0.345,0.037-0.578,0.113
				c-0.153,0.053-0.283,0.155-0.382,0.308l-0.117,0.193l0.193,0.039l-0.038,0.384c-0.026,0.024-0.052,0.061-0.078,0.113
				c-0.077,0.128-0.14,0.245-0.191,0.346c-0.18,0.384-0.27,0.745-0.27,1.076c0,0.359,0.041,0.666,0.118,0.921
				c0.049,0.154,0.166,0.387,0.344,0.693c0.103,0.178,0.332,0.371,0.693,0.575c0.176,0.102,0.356,0.18,0.537,0.231v0.19
				c-0.23,0.026-0.5-0.011-0.808-0.114c-0.589-0.18-1.05-0.499-1.382-0.959c-0.177-0.281-0.308-0.704-0.383-1.27
				c-0.026-0.178-0.051-0.37-0.078-0.574v-0.231c-0.025-0.103-0.05-0.23-0.077-0.384c-0.077-0.256-0.127-0.398-0.154-0.424
				c-0.05-0.05-0.152-0.14-0.307-0.268L18.182,9.962z`,
            }),
          });
        }
        function L1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 50.75 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M50.312,3.257c0.056,0.029,0.14,0.042,0.253,0.042l-0.041,1.014
				l0.169,1.397c-0.059,0.282-0.142,0.577-0.253,0.887c-0.057,0.283-0.142,0.549-0.256,0.803c-0.083,0.367-0.168,0.677-0.251,0.931
				c-0.17,0.704-0.339,1.24-0.508,1.608c-0.142,0.366-0.24,0.634-0.297,0.803c-0.083,0.14-0.155,0.225-0.211,0.253
				c-0.029,0.057-0.07,0.086-0.126,0.086H29.296c-0.028,0-0.225,0.042-0.592,0.126c-0.396,0.169-0.831,0.482-1.312,0.929
				c-0.422,0.424-0.817,1.045-1.184,1.861c-0.422,0.79-0.635,1.889-0.635,3.299v0.465H25.49c-0.028,0.026-0.308,0.098-0.845,0.209
				c-0.507,0.114-1.126,0.199-1.86,0.256c-0.707,0.085-1.48,0.125-2.327,0.125c-0.846-0.027-1.577-0.154-2.199-0.382
				c-0.198,0.059-0.451,0.243-0.761,0.553c-0.339,0.364-0.522,0.76-0.549,1.181c-0.03,0.255-0.112,0.777-0.256,1.566
				c-0.14,0.817-0.308,1.677-0.506,2.579c-0.169,0.902-0.311,1.733-0.421,2.496c-0.172,0.733-0.268,1.156-0.296,1.268l0.676,1.903
				h-0.128c-1.326,0.167-2.678,0.324-4.06,0.465c-1.181,0.083-2.464,0.155-3.847,0.212c-1.382,0.026-2.722-0.042-4.017-0.212
				c-0.084,0-0.183-0.013-0.297-0.044c-0.226-0.083-0.394-0.224-0.505-0.421c-0.171-0.282-0.255-0.789-0.255-1.522
				c0-0.451,0.042-1.029,0.126-1.736c0.113-0.675,0.323-1.465,0.634-2.366c0.254-0.931,0.62-2.015,1.101-3.257
				c0.478-1.24,1.084-2.665,1.818-4.271v-0.167c0-0.085,0.013-0.185,0.041-0.297c0.029-0.17,0.044-0.354,0.044-0.551
				c0-0.563-0.128-1.138-0.382-1.734c-0.225-0.563-0.803-0.93-1.733-1.098c-0.056,0-0.296-0.012-0.718-0.042
				c-0.452,0-0.946-0.029-1.478-0.083c-0.511,0-1.003-0.015-1.482-0.044c-0.45,0-0.692,0-0.72,0l-0.126-0.125v-0.129
				c0-0.138,0.042-0.237,0.126-0.294c0.084-0.31,0.381-0.62,0.89-0.931c0.478-0.31,1.353-0.62,2.62-0.929
				c0.029-0.029,0.128-0.198,0.297-0.508c0.168-0.31,0.255-0.677,0.255-1.1c0-0.168-0.015-0.309-0.044-0.423
				C4.279,7.767,4.207,7.585,4.095,7.359C4.011,7.3,3.913,7.19,3.798,7.021C3.657,6.795,3.447,6.386,3.165,5.792v-0.8l0.804-0.213
				C4.052,4.835,4.124,4.877,4.18,4.906c0.113,0.114,0.197,0.17,0.253,0.17h1.438c0-0.056,0.059-0.17,0.169-0.338
				c0.029-0.113,0.084-0.211,0.168-0.295L7.48,3.299c0.054-0.028,0.138-0.056,0.251-0.083c0.113-0.056,0.213-0.113,0.298-0.17V2.411
				c0-0.139,0.014-0.324,0.04-0.549h1.565l1.099,1.1l1.861-0.042l0.634-0.339l7.653-0.042c0.085,0.114,0.155,0.209,0.212,0.294
				c0.14,0.142,0.24,0.212,0.295,0.212l9.938,0.17l0.126,0.083c0.028,0.056,0.085,0.083,0.169,0.083h0.549
				c0.03-0.056,0.043-0.096,0.043-0.125c0-0.055,0.014-0.098,0.042-0.128c0.056-0.056,0.112-0.11,0.168-0.167l11.164,0.083
				c0,0.083,0.015,0.157,0.042,0.212c0,0.084,0.014,0.154,0.042,0.212c0,0.056,0,0.097,0,0.126h0.591
				c0-0.029,0.029-0.126,0.084-0.296c0.027-0.056,0.084-0.112,0.168-0.17h2.199c0.059-0.026,0.183-0.097,0.381-0.209
				c0.197-0.143,0.395-0.267,0.594-0.381c0.195-0.142,0.406-0.24,0.632-0.296c0.199-0.086,0.354-0.128,0.466-0.128
				c0.169,0,0.283,0.113,0.337,0.339c0.085,0.254,0.128,0.421,0.128,0.508c0.111,0.083,0.267,0.141,0.464,0.167
				c0.083,0.031,0.196,0.059,0.338,0.087c0,0.027,0.028,0.042,0.085,0.042H50.312z M20.037,11.713c-0.282,0-0.521,0.085-0.721,0.255
				c-0.167,0.196-0.251,0.438-0.251,0.718v3.088c0,0.253,0.085,0.491,0.251,0.719c0.199,0.169,0.438,0.252,0.721,0.252h3.298
				c0.282,0,0.521-0.083,0.718-0.252c0.225-0.228,0.339-0.466,0.339-0.719v-3.088c0-0.28-0.114-0.521-0.339-0.718
				c-0.197-0.169-0.436-0.255-0.718-0.255H20.037z`,
            }),
          });
        }
        function $1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 68.25 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M67.858,6.396c0.128,0.28,0.191,0.572,0.191,0.877
				c0,0.202,0,0.368,0,0.496c-0.026,0.127-0.038,0.266-0.038,0.419c0,0.025-0.012,0.049-0.037,0.076
				c-0.053,0-0.076,0.025-0.076,0.075c0,0.026-0.012,0.206-0.04,0.535c0,0.304-0.012,0.621-0.039,0.953
				c-0.023,0.355-0.037,0.685-0.037,0.992c-0.026,0.329-0.039,0.532-0.039,0.607v0.268h-2.362c0,0.025-0.038,0.114-0.114,0.267
				c-0.025,0-0.064,0.011-0.113,0.036c-0.053,0-0.203,0.014-0.459,0.04c-0.228,0.024-0.583,0.038-1.066,0.038s-1.156,0-2.019,0
				c-0.458,0-0.89-0.014-1.296-0.038c-0.381-0.026-0.747-0.04-1.105-0.04H58.22c-0.205,0-0.394,0.026-0.573,0.078
				c-0.354,0.05-0.71,0.204-1.065,0.456c-0.407,0.305-0.749,0.61-1.027,0.915c-0.256,0.331-0.396,0.583-0.42,0.761
				c-0.052,0.281-0.078,0.547-0.078,0.802c0,0.227,0,0.379,0,0.456c0.179,0.28,0.203,0.47,0.078,0.571
				c-0.101,0.128-0.191,0.229-0.267,0.306v0.114c-0.076,0.078-0.268,0.153-0.572,0.229c-0.28,0.053-0.61,0.141-0.99,0.268
				c-0.383,0.127-0.839,0.254-1.373,0.38c-0.33,0.076-0.787,0.103-1.372,0.076c-0.583,0-1.397-0.101-2.438-0.305
				c-0.534-0.075-0.927-0.075-1.181,0c-0.304,0.077-0.546,0.179-0.725,0.305c-0.176,0.128-0.292,0.268-0.342,0.419l-1.523,5.26
				c0,0.025-0.013,0.049-0.038,0.076v0.15c0,0.153,0.014,0.37,0.038,0.648c0.051,0.304,0.115,0.738,0.19,1.296v0.608
				c0,0.635-0.127,1.131-0.381,1.486c-0.128,0.102-0.253,0.166-0.382,0.192c-0.126,0.025-0.202,0.037-0.228,0.037h-5.335
				l-0.038-0.076c-0.049,0-0.114-0.012-0.189-0.038c-0.051,0-0.103-0.013-0.152-0.039c-0.077,0-0.167-0.026-0.267-0.077
				c-0.305-0.176-0.458-0.557-0.458-1.142c0-0.101,0.026-0.19,0.076-0.265c0.027-0.079,0.041-0.154,0.041-0.23
				c-0.765-0.027-1.272-0.088-1.525-0.19c-0.255-0.076-0.42-0.166-0.495-0.267v-0.152c-0.052-0.025-0.076-0.077-0.076-0.153
				c0-0.076,0-0.128,0-0.151c-0.026-0.052-0.041-0.115-0.041-0.19c-0.051-0.128-0.075-0.292-0.075-0.497v-0.381
				c0-0.508,0.063-1.029,0.191-1.561c0.15-0.533,0.227-0.813,0.227-0.838h0.039v-0.039c0.051-0.076,0.216-0.469,0.495-1.18
				c0.278-0.687,0.61-1.449,0.989-2.287c0.358-0.837,0.699-1.611,1.03-2.322c0.305-0.711,0.495-1.132,0.57-1.259
				c0.052-0.203,0.078-0.38,0.078-0.533c0-0.304-0.115-0.647-0.343-1.027c-0.152-0.305-0.432-0.495-0.836-0.574
				c-0.358-0.074-0.688-0.15-0.993-0.228c-0.305,0-0.52-0.024-0.646-0.076c-0.18-0.127-0.269-0.317-0.269-0.572v-0.076
				c0-0.227,0.065-0.405,0.191-0.534c0.154-0.127,0.332-0.19,0.534-0.19c0.076-0.101,0.153-0.154,0.229-0.154
				c0.051,0,0.115-0.009,0.19-0.036c0.151-0.078,0.368-0.281,0.648-0.61l0.152-0.152c0.202-0.229,0.368-0.521,0.495-0.876
				c0.126-0.381,0.189-0.66,0.189-0.838c0-0.024-0.037-0.23-0.114-0.61c-0.076-0.355-0.115-0.61-0.115-0.763V6.284
				c0.078-0.255,0.192-0.394,0.344-0.421c0.126-0.126,0.304-0.153,0.533-0.075c0.129,0.05,0.292,0.102,0.494,0.152
				c0.205,0.05,0.345,0.077,0.422,0.077c0.1-0.051,0.189-0.077,0.265-0.077c0.101-0.026,0.203-0.077,0.306-0.152
				c0.153-0.026,0.292-0.064,0.418-0.115c0.102-0.024,0.203-0.062,0.306-0.114c0.101-0.052,0.203-0.075,0.304-0.075h0.114V4.758
				h0.231c0.609,0.026,0.976,0.063,1.104,0.115c0.102,0.049,0.164,0.125,0.19,0.227c0.051,0.076,0.076,0.154,0.076,0.229
				c0,0.101,0.012,0.229,0.038,0.38h1.829c0.432,0,0.938-0.011,1.524-0.038c0.915,0,1.626,0,2.132,0c0.535,0,0.915,0,1.144,0
				c0.229,0.026,0.381,0.038,0.459,0.038h0.075c0.178,0.101,0.266,0.203,0.266,0.307h14.745V5.978c0-0.079,0.025-0.128,0.076-0.152
				c0.051-0.051,0.103-0.089,0.154-0.116c0.074-0.023,0.113-0.049,0.113-0.076c0.026-0.023,0.077-0.1,0.151-0.229
				c0.206-0.177,0.484-0.239,0.839-0.19c0.304,0.026,0.495,0.051,0.573,0.077l0.151,0.078l0.114,0.114
				c0.177,0.075,0.279,0.215,0.305,0.416C67.77,6.105,67.807,6.271,67.858,6.396z M48.847,12.53
				c-0.279,0.026-0.432,0.039-0.458,0.039c-0.05,0-0.076,0.013-0.076,0.037h-0.114c-0.176,0.079-0.407,0.19-0.685,0.343
				c-0.253,0.153-0.42,0.356-0.495,0.611c-0.077,0.278-0.115,0.494-0.115,0.646c0,0.382,0.049,0.624,0.153,0.724v0.038h0.076
				c0.024,0.102,0.216,0.292,0.572,0.573l0.114,0.038c0.254,0.177,0.685,0.342,1.295,0.496c0.583,0.154,1.246,0.177,1.982,0.075
				c1.751-0.229,2.679-0.672,2.781-1.333c0.075-0.151,0.114-0.329,0.114-0.534c0-0.303-0.089-0.609-0.266-0.913
				c-0.179-0.33-0.508-0.61-0.992-0.839c-0.482,0-0.978,0-1.485,0c-0.482,0-0.927,0-1.334,0C49.506,12.53,49.152,12.53,48.847,12.53
				z M32.627,5.404c0.204,0.026,0.33,0.141,0.381,0.345c0.05,0.229,0.075,0.406,0.075,0.535c0.178,0.304,0.267,0.608,0.267,0.914
				c0,0.178-0.024,0.328-0.075,0.456c-0.026,0.128-0.051,0.268-0.076,0.418v0.154c0,0.025-0.014,0.19-0.039,0.496
				c-0.024,0.33-0.05,0.66-0.077,0.99c0,0.381-0.025,0.712-0.075,0.99c-0.025,0.306-0.039,0.497-0.039,0.574v0.266h-2.286
				c-0.052,0.049-0.076,0.103-0.076,0.152c0,0.025-0.038,0.076-0.114,0.151l-0.076,0.038c-0.078,0-0.23,0.013-0.458,0.039
				c-0.23,0.026-0.584,0.039-1.066,0.039c-0.458,0-1.131,0-2.018,0c-0.434,0-0.852-0.013-1.26-0.039
				c-0.406-0.026-0.776-0.039-1.104-0.039h-1.106c-0.151,0-0.316,0.026-0.495,0.078c-0.406,0.076-0.788,0.23-1.144,0.456
				c-0.406,0.305-0.735,0.61-0.989,0.915c-0.255,0.33-0.394,0.583-0.42,0.762c-0.05,0.278-0.076,0.545-0.076,0.799
				c0,0.229,0.025,0.381,0.076,0.458c0.103,0.278,0.116,0.482,0.04,0.609c-0.102,0.128-0.192,0.215-0.268,0.269v0.074
				c-0.075,0.076-0.266,0.152-0.571,0.23c-0.305,0.099-0.635,0.204-0.991,0.302c-0.356,0.102-0.687,0.193-0.991,0.268l-0.42,0.114
				c-0.329,0.077-0.787,0.102-1.37,0.077c-0.584-0.052-1.423-0.165-2.514-0.342c-0.508-0.078-0.901-0.078-1.182,0
				c-0.279,0.101-0.494,0.215-0.648,0.342c-0.126,0.126-0.228,0.268-0.303,0.419L9.578,22.97v0.229c0,0.152,0,0.367,0,0.647
				c0,0.305,0.036,0.736,0.113,1.294c0.077,0.153,0.115,0.371,0.115,0.649c0,0.659-0.139,1.13-0.419,1.409
				c-0.152,0.151-0.279,0.228-0.381,0.228c-0.077,0.025-0.139,0.039-0.19,0.039H3.444c0-0.025-0.205-0.115-0.611-0.267
				c-0.177-0.076-0.292-0.215-0.342-0.419c-0.051-0.228-0.077-0.456-0.077-0.685v-0.496c-0.66-0.026-1.118-0.076-1.372-0.152
				c-0.024-0.025-0.051-0.038-0.075-0.038c-0.254-0.101-0.418-0.189-0.497-0.269c-0.024-0.023-0.037-0.074-0.037-0.152
				c-0.051-0.026-0.076-0.075-0.076-0.151v-0.304c-0.024-0.152-0.038-0.331-0.038-0.534c0-0.077-0.013-0.14-0.039-0.19
				c-0.025-0.078-0.037-0.154-0.037-0.23c0-0.507,0.063-1.015,0.189-1.522c0.127-0.509,0.191-0.801,0.191-0.878v-0.077
				c0.052-0.023,0.191-0.304,0.418-0.836c0.026-0.076,0.064-0.166,0.116-0.268c0.305-0.709,0.646-1.484,1.028-2.322
				c0.355-0.84,0.699-1.626,1.027-2.362c0.305-0.711,0.495-1.107,0.573-1.182c0.05-0.279,0.076-0.458,0.076-0.535
				c0-0.329-0.102-0.672-0.305-1.027c-0.153-0.306-0.419-0.495-0.8-0.573c-0.38-0.075-0.737-0.138-1.066-0.189
				c-0.254,0-0.459-0.038-0.612-0.114l-0.038-0.038c-0.152-0.178-0.228-0.357-0.228-0.534v-0.038c0-0.253,0.052-0.431,0.152-0.533
				c0.024-0.026,0.051-0.052,0.075-0.078c0.153-0.125,0.333-0.19,0.536-0.19c0.076-0.049,0.138-0.075,0.189-0.075
				c0.076,0,0.138-0.014,0.19-0.039c0.152-0.076,0.368-0.278,0.647-0.609l0.114-0.189c0.203-0.204,0.371-0.496,0.495-0.877
				c0.128-0.354,0.204-0.624,0.231-0.799c0-0.103-0.041-0.307-0.117-0.61C3.278,6.729,3.252,6.474,3.252,6.322V6.168
				c0.052-0.229,0.14-0.368,0.266-0.419C3.694,5.648,3.875,5.634,4.052,5.71C4.18,5.736,4.356,5.788,4.586,5.863
				c0.228,0.05,0.38,0.077,0.455,0.077L5.576,5.71c0.128-0.023,0.255-0.076,0.381-0.151C6.059,5.506,6.173,5.47,6.301,5.444
				c0.075-0.025,0.189-0.04,0.343-0.04h0.037V4.646h0.266c0.586,0.025,0.94,0.062,1.068,0.113c0.127,0.026,0.19,0.076,0.19,0.152
				c0.077,0.23,0.116,0.458,0.116,0.687c0.101,0,0.342,0,0.723,0c0.356,0,0.737-0.013,1.142-0.039c0.433,0,0.94-0.025,1.524-0.075
				c0.915,0,1.625,0.012,2.134,0.036c0.507,0.026,0.876,0.04,1.104,0.04c0.23,0,0.37,0,0.421,0c0.051,0.026,0.1,0.039,0.152,0.039
				c0.076,0.075,0.15,0.19,0.229,0.342H30.57V5.863c0-0.075,0.051-0.164,0.15-0.265c0.026-0.079,0.064-0.114,0.114-0.114
				c0.079-0.025,0.141-0.09,0.191-0.192c0.18-0.202,0.445-0.279,0.802-0.229c0.355,0.05,0.57,0.102,0.646,0.151l0.076,0.04
				L32.627,5.404z M16.471,12.379c-0.482,0-0.927,0-1.331,0c-0.406,0-0.763,0.011-1.068,0.037c-0.279,0-0.433,0-0.458,0l-0.19,0.076
				c-0.177,0.078-0.404,0.179-0.686,0.305c-0.252,0.179-0.418,0.383-0.495,0.611c-0.075,0.153-0.113,0.369-0.113,0.647
				c0,0.381,0.051,0.623,0.151,0.724l0.077,0.077c0.052,0.075,0.114,0.14,0.189,0.189c0.077,0.052,0.205,0.179,0.382,0.38
				l0.153,0.04c0.228,0.153,0.649,0.305,1.255,0.456c0.61,0.154,1.259,0.18,1.944,0.078c1.754-0.281,2.705-0.71,2.859-1.295
				c0.051-0.127,0.074-0.318,0.074-0.572c0-0.279-0.088-0.571-0.266-0.875c-0.177-0.331-0.508-0.624-0.99-0.876
				C17.477,12.379,16.98,12.379,16.471,12.379z`,
            }),
          });
        }
        function i2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 77.833 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M77.171,11.729c0.052,0.398-0.026,0.848-0.238,1.352V13.2h-0.12
				c-0.053,0-0.304,0.026-0.755,0.081c-0.478,0.026-1.02,0.053-1.63,0.079c-0.583,0.026-1.127,0.04-1.63,0.04
				c-0.53,0-0.875-0.066-1.033-0.2c-0.08,0-0.134-0.027-0.16-0.079c-0.053,0-0.093-0.012-0.119-0.04h-6.48
				c-0.158,0.079-0.357,0.145-0.596,0.199c-0.265,0.026-0.451,0.091-0.557,0.198c-0.106,0.106-0.317,0.185-0.636,0.238
				c-0.371,0.026-0.596,0.04-0.676,0.04c-0.054,0-0.172-0.093-0.358-0.278h-0.159c-0.028,0.026-0.04,0.092-0.04,0.199
				c-0.053,0.053-0.08,0.186-0.08,0.397v0.039c-0.025,0.161-0.066,0.358-0.12,0.597c-0.079,0.265-0.198,0.517-0.357,0.754
				c-0.133,0.24-0.291,0.464-0.475,0.676c-0.268,0.186-0.545,0.278-0.837,0.278H44.216c-0.187,0-0.398,0.066-0.637,0.2v1.073
				c0,0.345-0.013,0.703-0.04,1.074c-0.026,0.344-0.159,0.688-0.397,1.034c-0.292,0.185-0.688,0.278-1.191,0.278
				C41.526,20.024,41.074,20,40.597,20c-0.53-0.054-1.033-0.107-1.51-0.16c-0.504-0.106-0.927-0.173-1.273-0.2
				c-0.344-0.052-0.57-0.118-0.676-0.198c-0.185,0.106-0.423,0.266-0.715,0.477c-0.319,0.238-0.477,0.651-0.477,1.232v0.835
				l-0.158,0.08c-0.054,0.079-0.2,0.252-0.438,0.517c-0.212,0.264-0.318,0.49-0.318,0.676c0,0.159,0.013,0.306,0.041,0.437
				c0,0.08,0.012,0.16,0.04,0.238l0.238,0.319h-0.238c-0.054,0.027-0.199,0.212-0.438,0.556c-0.265,0.344-0.396,0.822-0.396,1.431
				v0.398l0.158,0.238h-0.438c-0.158-0.053-0.45-0.131-0.874-0.238c-0.477-0.027-0.954-0.119-1.431-0.277
				c-0.53-0.133-1.008-0.305-1.432-0.519c-0.397-0.184-0.622-0.409-0.674-0.676l-0.16-0.118c0.105-1.432,0.291-2.823,0.556-4.174
				c0.319-1.352,1.034-2.533,2.147-3.538c0.026-0.107,0.066-0.239,0.119-0.398c0.026-0.159,0.041-0.305,0.041-0.437
				c0-0.239-0.212-0.478-0.637-0.717c-0.238-0.131-0.622-0.2-1.153-0.2c-0.583,0-1.257,0.147-2.027,0.439
				c-1.697,0.609-2.862,1.868-3.498,3.776l-0.08,0.04c-0.529,0.371-0.927,0.556-1.192,0.556v0.08c0,0.264,0.013,0.688,0.04,1.272
				c0.054,0.583,0.092,1.231,0.118,1.947c0,0.69,0.027,1.406,0.081,2.146c0.054,0.769,0.106,1.473,0.16,2.108v0.198
				c-0.054,0-0.2,0.107-0.438,0.319c-0.292,0.186-0.689,0.396-1.193,0.635c-0.529,0.213-1.179,0.438-1.948,0.676
				c-0.741,0.16-1.615,0.213-2.623,0.16h-0.12c-0.158-2.2-0.265-4.174-0.317-5.923c-0.107-1.51-0.173-2.902-0.2-4.174
				s-0.04-1.988-0.04-2.147c-1.032,0.16-1.96,0.319-2.782,0.477c-0.848,0.159-1.365,0.293-1.551,0.399
				c0,0.026-0.013,0.092-0.04,0.198c-0.054,0.132-0.08,0.225-0.08,0.278c0,0.504-0.12,0.756-0.357,0.756
				c-0.079,0.027-0.357,0.092-0.835,0.2c-0.477,0.051-0.821,0.145-1.034,0.277h-0.119c-0.106-0.132-0.185-0.252-0.239-0.358
				c-0.106-0.079-0.198-0.171-0.278-0.278c-0.027-0.132-0.053-0.25-0.08-0.356c-0.212,0.185-0.569,0.37-1.073,0.556
				C8.197,20,7.576,20.184,6.886,20.396c-0.742,0.159-1.497,0.278-2.266,0.358c-0.821,0.185-1.643,0.226-2.465,0.12l-0.119-0.12
				l-0.159-0.08c-0.61-1.908-1.034-3.551-1.272-4.93c-0.186-1.377-0.278-2.531-0.278-3.458c0-1.748,0.211-2.901,0.636-3.458
				c0.397-0.583,0.689-0.928,0.874-1.033c0.027,0,0.159-0.212,0.398-0.636C2.526,6.733,2.792,6.35,3.029,6.005V5.807h7.514v0.198
				c0.159,0.292,0.411,0.65,0.755,1.073c0.318,0.372,0.557,0.61,0.716,0.717c0.132,0,0.477-0.16,1.034-0.478
				c0.529-0.319,1.02-0.716,1.47-1.193h0.16c1.218,0.107,2.49,0.173,3.816,0.199c1.298,0.053,2.478,0.094,3.537,0.12
				c1.086,0,1.988,0,2.704,0c0.796-0.026,1.272-0.08,1.432-0.159c0.053-0.132,0.131-0.358,0.238-0.676
				c0.106-0.344,0.198-0.675,0.279-0.993c0.078-0.293,0.146-0.597,0.198-0.914c0.08-0.293,0.146-0.478,0.199-0.557v-0.12
				c0.025-0.08,0.092-0.147,0.199-0.199c0.079-0.132,0.264-0.225,0.556-0.278c0.212-0.08,0.597-0.16,1.152-0.239
				c0.53-0.053,1.233-0.119,2.109-0.198c3.789-0.185,10.003,0.014,18.645,0.597c2.543,0.079,4.584,0.132,6.122,0.158
				c1.51,0.026,2.664,0.039,3.458,0.039c0.794,0.026,1.312,0.067,1.55,0.121c0.239,0,0.383,0,0.438,0c0.026,0,0.159,0,0.397,0
				c0.212-0.053,0.41,0.092,0.597,0.437c0.504,0.557,0.754,1.512,0.754,2.862c0,0.452,0,0.928,0,1.432
				c-0.026,0.529-0.091,1.099-0.198,1.709c-0.08,0.16-0.12,0.292-0.12,0.398c-0.054,0.213-0.08,0.437-0.08,0.677
				c0.134,0,0.252,0,0.358,0c0.132,0.026,0.225,0.039,0.279,0.039c0.158,0.026,0.291,0.04,0.397,0.04l1.073,0.237
				c0,0.027,0.013,0.054,0.041,0.081c0,0.052,0.013,0.106,0.04,0.16v0.079h5.644c0.106-0.054,0.239-0.079,0.399-0.079
				c0.185-0.054,0.331-0.107,0.436-0.16l0.32-0.081c0.131-0.079,0.449-0.131,0.953-0.159c0.452,0,0.956-0.014,1.511-0.04
				c0.557-0.025,1.1-0.025,1.63,0c0.504,0.026,0.809,0.04,0.914,0.04l0.279,0.159v0.16C77.038,11.147,77.119,11.385,77.171,11.729z
				 M57.731,5.488H32.17c-0.875,0-1.312,0.464-1.312,1.392v1.273c0,0.899,0.438,1.351,1.312,1.351h25.562
				c0.425,0,0.742-0.133,0.954-0.398c0.265-0.212,0.397-0.53,0.397-0.953V6.88c0-0.424-0.132-0.757-0.397-0.994
				C58.474,5.62,58.156,5.488,57.731,5.488z`,
            }),
          });
        }
        function K1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 39 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M38.436,3.573c0.106,0.213,0.16,0.492,0.16,0.837
				c0.026,0.294,0.04,0.627,0.04,1c0,0.614-0.014,1.239-0.04,1.878c-0.054,0.613-0.08,1.025-0.08,1.238l-0.08,0.159l-0.24,0.202
				c-0.026,0.08-0.041,0.239-0.041,0.479v0.199l-0.118,0.321l-0.32-0.12c-0.053,0-0.186,0-0.399,0c-0.213-0.027-0.72-0.027-1.518,0
				c-0.026,0.345-0.122,0.664-0.283,0.958c-0.131,0.24-0.224,0.386-0.275,0.441l-0.041,0.158h-8.991l-0.438,0.163
				c-0.187,0.105-0.428,0.224-0.72,0.357c-0.292,0.134-0.574,0.28-0.84,0.44c-0.238,0.16-0.399,0.252-0.479,0.278
				c0.081,0.267,0.121,0.64,0.121,1.119c0,0.241,0,0.545,0,0.92c0,0.374-0.04,0.787-0.121,1.239
				c-0.106,0.639-0.373,1.105-0.798,1.398c-0.371,0.292-0.853,0.493-1.439,0.598c-0.53,0.081-1.131,0.107-1.796,0.081
				c-0.666-0.029-1.293-0.055-1.878-0.081c-0.479-0.026-0.907-0.053-1.278-0.079c-0.401-0.053-0.733-0.041-1,0.041h-0.079
				c-0.878-0.108-1.439-0.108-1.677,0c-0.267,0.106-0.44,0.238-0.521,0.399l-0.159,0.078c-0.213,0.213-0.32,0.722-0.32,1.52v0.322
				c0,0.425-0.041,0.784-0.122,1.077c-0.106,0.347-0.237,0.666-0.399,0.958l-0.038,0.241c-0.107,0.213-0.216,0.6-0.32,1.158
				c-0.135,0.533-0.283,1.105-0.441,1.718c-0.186,0.743-0.305,1.266-0.359,1.558c-0.106,0.373-0.188,0.626-0.239,0.759l0.159,0.159
				c0.106,0.081,0.188,0.173,0.239,0.28c0.082,0.106,0.121,0.227,0.121,0.359l-0.08,0.122c-0.026,0.237-0.16,0.425-0.399,0.558
				c-0.212,0.105-0.414,0.213-0.601,0.32h-0.119c-0.055,0-0.456,0.011-1.198,0.039c-0.775,0-1.574,0.039-2.397,0.12
				c-2.557,0.132-3.984,0.2-4.273,0.2c-0.508,0-1.042-0.536-1.599-1.598H0.679v-0.64c0-0.879,0.119-1.944,0.358-3.196
				c0.216-1.226,0.494-2.451,0.841-3.677c0.37-1.253,0.73-2.424,1.08-3.517c0.372-1.118,0.691-2.036,0.956-2.755v-0.2
				c0.055-0.24,0.081-0.427,0.081-0.561c0-0.105,0-0.171,0-0.198c-0.026,0-0.04-0.029-0.04-0.081
				c-0.027-0.027-0.041-0.065-0.041-0.12H3.836v-0.08c-0.028-0.161-0.135-0.282-0.321-0.361c-0.08-0.054-0.145-0.078-0.2-0.078
				c-0.16-0.026-0.332-0.081-0.519-0.162c-0.399-0.132-0.946-0.424-1.638-0.879c-0.454-0.266-0.746-0.559-0.88-0.878
				C0.092,10.39,0,10.044,0,9.724c0-0.371,0.013-0.599,0.04-0.679c0.052-0.106,0.185-0.574,0.398-1.397
				C0.625,6.769,0.824,5.903,1.037,5.05c0.187-0.719,0.455-1.212,0.8-1.478c0.346-0.295,0.626-0.506,0.838-0.642V2.294l0.161-0.081
				C3.608,2,4.381,2.067,5.154,2.412C5.9,2.758,6.337,2.999,6.471,3.133H25.69c0.053,0,0.106,0.024,0.16,0.08l0.159,0.16H36.12
				l0.118-0.122c0.161-0.13,0.348-0.426,0.559-0.877v-0.16h0.12c0.027,0,0.096-0.013,0.203-0.039c0.104,0,0.251,0.01,0.438,0.039
				C37.877,2.265,38.17,2.721,38.436,3.573z M21.736,12.24h-7.034c-0.373,0-0.557,0.202-0.557,0.599v2.52
				c0,0.372,0.185,0.558,0.557,0.558h7.034c0.345,0,0.519-0.186,0.519-0.558v-2.52C22.255,12.442,22.081,12.24,21.736,12.24z`,
            }),
          });
        }
        function v2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 93.25 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M92.744,12.856c0.05,0.352,0.1,0.764,0.15,1.24
				c0.025,0.501-0.125,0.789-0.452,0.865c-0.175,0.025-0.463,0.062-0.865,0.112c-0.401,0.026-0.864,0.038-1.391,0.038
				c-0.501,0-1.002-0.012-1.502-0.038c-0.527-0.05-0.941-0.087-1.242-0.112l-0.338-0.15h-5.263c0,0.024-0.075,0.087-0.226,0.188
				c-0.025,0.074-0.05,0.112-0.075,0.112L80.826,15.3l-0.375-0.188h-0.752L79.548,15.3c-0.101,0.075-0.149,0.163-0.149,0.262v0.151
				l-0.301,0.565h-0.676v1.278l-0.338,0.149c-0.1,0.05-0.228,0.075-0.376,0.075c-0.276,0-0.477-0.024-0.601-0.075l-0.979-0.149
				h-2.895v0.488h-0.301c-0.701,0-1.103-0.024-1.204-0.075c-0.125-0.05-0.224-0.088-0.3-0.113c0-0.1,0-0.163,0-0.188
				c-0.05,0-0.075-0.037-0.075-0.112h0.075v-0.152H58.909c-0.35,0.05-0.765,0.101-1.24,0.152c-0.476,0.024-0.915,0.062-1.314,0.112
				c-0.453,0.025-0.829,0.063-1.13,0.112c-0.25,0.051-0.413,0.076-0.488,0.076c-0.226,0.125-0.438,0.125-0.639,0
				c-0.075-0.05-0.138-0.1-0.188-0.15l-0.187-0.149v-0.301h-4.964c0.052,0.851,0.127,1.803,0.226,2.856
				c0.101,1.028,0.188,2.006,0.263,2.933c0.102,0.902,0.176,1.693,0.226,2.368c0.076,0.602,0.114,0.991,0.114,1.166
				c-0.025,0.05-0.088,0.163-0.188,0.338c-0.1,0.1-0.501,0.201-1.203,0.3c-0.752,0.126-1.492,0.275-2.22,0.452
				c-0.801,0.125-1.427,0.213-1.878,0.263c-0.452,0.075-0.79,0.138-1.015,0.188c-0.201,0.025-0.352,0.025-0.451,0
				c-0.051-0.05-0.101-0.1-0.151-0.149c0-0.025-0.013-0.101-0.036-0.227c0-0.075-0.039-0.4-0.114-0.978
				c-0.05-0.576-0.139-1.39-0.262-2.443c-0.076-1.152-0.201-2.719-0.377-4.699h-0.639l-0.375,0.64h-0.301l0.301-0.64h-0.791v0.188
				c-0.174,0.652-0.375,1.229-0.6,1.729c-0.226,0.477-0.488,0.814-0.79,1.015c-0.476,0.2-1.115,0.326-1.917,0.376
				c-0.853,0.025-1.454-0.05-1.804-0.226l-0.527-0.339c-0.2-0.074-0.389-0.162-0.564-0.262c-0.176-0.101-0.312-0.176-0.414-0.227
				l-0.188,0.188c-0.074,0.075-0.174,0.275-0.301,0.602c-0.124,0.326-0.275,0.639-0.45,0.939c-0.351,0.877-0.664,1.58-0.94,2.106
				c-0.275,0.5-0.488,0.889-0.639,1.165c-0.175,0.301-0.313,0.476-0.413,0.526c-0.126,0.074-0.226,0.114-0.301,0.114
				c-0.201,0-0.715-0.252-1.542-0.753c-0.801-0.501-1.566-1.051-2.293-1.654l-0.3-0.188l0.111-0.151
				c0.025-0.049,0.113-0.226,0.264-0.526c0.1-0.25,0.25-0.552,0.451-0.902c0.176-0.326,0.351-0.64,0.527-0.94
				c0.174-0.3,0.375-0.526,0.601-0.676l0.15-0.188c0.226-0.225,0.465-0.476,0.715-0.752c0.275-0.275,0.463-0.602,0.563-0.978
				c0.101-0.501,0.05-0.914-0.15-1.241c-0.226-0.275-0.451-0.451-0.677-0.526H22.63c-0.024,0-0.101,0.013-0.225,0.038
				c-0.1,0.05-0.238,0.075-0.415,0.075c-0.2,0.05-0.412,0.113-0.639,0.188c-0.15,0.05-0.663,0.226-1.54,0.527
				c-0.878,0.326-1.918,0.701-3.122,1.127c-1.127,0.452-2.369,0.928-3.721,1.43c-1.279,0.45-2.495,0.889-3.647,1.315
				c-1.077,0.376-1.992,0.701-2.744,0.977c-0.727,0.302-1.129,0.451-1.203,0.451c-0.251,0.051-0.564,0.1-0.941,0.151
				c-0.426,0.05-0.828,0.1-1.203,0.149c-0.401,0.051-0.776,0.076-1.127,0.076c-0.301,0.05-0.551,0.025-0.752-0.076
				c-0.301-0.149-0.488-0.375-0.563-0.676c-0.026-0.25-0.038-0.564-0.038-0.94c0-0.175,0-0.363,0-0.563
				c0.025-0.226,0.088-0.414,0.188-0.564c0.075-0.25,0.113-0.488,0.113-0.715c0-0.226,0-0.513,0-0.865
				c0.1-0.2,0.163-0.375,0.188-0.526c0.024-0.175,0.038-0.375,0.038-0.601c0-0.652-0.025-1.291-0.076-1.918
				c-0.1-0.626-0.15-1.027-0.15-1.203H0.938c-0.1-0.225-0.163-0.425-0.188-0.601c0-0.2,0-0.363,0-0.488v-0.49
				c0.101-0.1,0.163-0.175,0.188-0.225c0-0.05,0.113-0.075,0.339-0.075c0.05-0.05,0.25-0.101,0.601-0.15
				c0.352-0.025,0.739-0.063,1.166-0.113c0.476,0,0.927,0,1.353,0c0.401-0.025,0.727-0.038,0.979-0.038
				c0.1-0.251,0.212-0.526,0.338-0.827c0.075-0.251,0.289-0.426,0.638-0.526c0.227-0.077,0.902-0.113,2.03-0.113
				c1.104-0.025,2.318-0.05,3.647-0.075c1.303-0.051,2.556-0.076,3.76-0.076c1.177-0.024,1.916-0.038,2.218-0.038h0.188
				c0.099,0.201,0.225,0.364,0.375,0.49c0.075,0.201,0.163,0.375,0.263,0.526c0.1,0.177,0.201,0.275,0.301,0.3
				c0.151,0,0.351-0.012,0.602-0.037c0.225,0,0.375-0.051,0.451-0.15c0.275-0.125,0.726-0.351,1.353-0.677
				c0.627-0.376,1.053-0.639,1.279-0.79c0.326-0.225,0.602-0.376,0.827-0.451c0.225-0.151,0.538-0.225,0.939-0.225
				c0.377,0,0.916,0,1.618,0c0.727,0,1.277-0.026,1.653-0.075c0.026-0.05,0.063-0.101,0.113-0.15
				c0.025-0.076,0.087-0.151,0.188-0.227c0.074-0.1,0.137-0.213,0.188-0.338l0.79-0.452l0.601-0.15
				c0.126,0.1,0.239,0.175,0.338,0.225c0.276,0.051,0.452,0.076,0.527,0.076l0.602,0.15l0.526,0.639V10.9l-0.226,0.151h0.339V10.45
				l-0.301-0.226c-0.075-0.076-0.125-0.163-0.15-0.263L31.088,9.36l-0.187-0.715v-0.15c-0.452,0.1-0.94,0.175-1.467,0.227
				c-0.577,0.05-1.053,0.125-1.429,0.225c-0.2,0-0.638-0.012-1.315-0.037c-0.677,0-1.378,0-2.106,0
				c-0.751,0-1.416-0.013-1.992-0.038c-0.602-0.049-0.953-0.074-1.053-0.074c-0.075,0-0.15,0.025-0.226,0.074
				c-0.075,0.025-0.163,0.038-0.263,0.038c-0.151,0.025-0.276,0.037-0.375,0.037l-2.181-0.149V8.495
				c0-0.025-0.025-0.162-0.075-0.414c-0.05-0.3-0.088-0.626-0.113-0.977c0-0.325-0.025-0.652-0.075-0.977
				c-0.024-0.375,0-0.665,0.075-0.864c0.025-0.175,0.063-0.326,0.113-0.451c0.05-0.075,0.1-0.164,0.15-0.263
				c0.025-0.076,0.038-0.151,0.038-0.226l0.225-0.114h1.843c0.099,0,0.388,0,0.864,0c0.401,0,0.928,0.038,1.58,0.114
				c0.676,0,1.403,0.013,2.18,0.038c0.752,0,1.479,0.024,2.18,0.074c0.678,0,1.278,0.013,1.805,0.038
				C29.81,4.498,30.198,4.51,30.45,4.51l0.94,0.113c0.326,0.076,0.602,0.125,0.828,0.151c0.224,0.025,0.413,0.037,0.563,0.037
				c0.177-0.05,0.565-0.075,1.167-0.075c0.626-0.026,1.278-0.051,1.955-0.076c0.652-0.025,1.265-0.038,1.842-0.038
				c0.527,0,0.815,0,0.865,0c0.225,0,0.388-0.024,0.489-0.074c0.125,0,0.225-0.013,0.3-0.039l0.15-0.187
				c0-0.176,0.176-0.313,0.527-0.414c0.476-0.226,0.965-0.226,1.466,0h0.15c0.225,0,0.389,0.024,0.488,0.075
				c0.101,0.05,0.201,0.163,0.301,0.339c0.1,0.125,0.25,0.187,0.451,0.187l0.301,0.113c0.476,0,1.14,0.038,1.992,0.114
				c0.903,0.075,1.655,0.038,2.256-0.114c0.376-0.074,0.926-0.137,1.653-0.188c0.677-0.074,1.379-0.137,2.106-0.188
				c0.777-0.025,1.491-0.038,2.143-0.038c0.676,0,1.127,0.038,1.354,0.114h0.15c0.326,0.075,0.54,0.187,0.64,0.337
				c0.15,0.126,0.25,0.489,0.301,1.091c0.099,0.626,0.05,1.19-0.151,1.691c-0.201,0.551-0.414,0.902-0.639,1.052
				c-0.1,0.076-0.451,0.113-1.053,0.113c-0.602,0-1.266,0-1.992,0c-0.702,0-1.404-0.037-2.104-0.113
				c-0.703-0.025-1.204-0.087-1.504-0.188c-0.326-0.075-0.602-0.113-0.827-0.113c-0.201,0-0.4,0.038-0.602,0.113H45.6
				c0,0.226-0.174,0.515-0.525,0.865h-0.188c-0.828,0.426-1.379,0.726-1.655,0.902c-0.276,0.125-0.414,0.25-0.414,0.376
				c-0.075,0-0.138,0.05-0.188,0.15c0,0.151-0.051,0.3-0.151,0.452h20.94c0.05-0.026,0.201-0.038,0.451-0.038
				c0.275-0.024,0.564-0.063,0.865-0.114c0.301-0.05,0.601-0.074,0.901-0.074c0.302-0.05,0.514-0.076,0.64-0.076
				c0.3,0,0.589-0.013,0.865-0.038c0.25-0.075,0.451-0.113,0.601-0.113l0.302-0.301c0.099-0.05,0.174-0.1,0.226-0.15h1.429
				c0.099,0.076,0.174,0.175,0.225,0.301c0.176,0.25,0.3,0.425,0.375,0.526h7.631c-0.1-0.251-0.175-0.526-0.225-0.828
				c-0.051-0.25-0.075-0.477-0.075-0.677c0-0.2,0.013-0.313,0.037-0.339l0.113-0.111c0.174-0.25,0.363-0.427,0.563-0.527
				c0.176-0.125,0.326-0.188,0.451-0.188l0.751,0.188l0.301,0.865l0.3,1.692v1.014c0.101,0,0.201,0.063,0.301,0.188
				c0,0.1,0,0.2,0,0.301l-0.114,0.15h0.114c0.15,0,0.251-0.012,0.301-0.038l0.075-0.112h0.79l0.112,0.112
				c0.075,0.025,0.138,0.038,0.188,0.038h10.676L92.744,12.856z M33.833,19.698c-0.076,0.101-0.138,0.188-0.188,0.263l0.488,0.489
				c0.175,0.075,0.326,0.162,0.452,0.264c0.125,0.05,0.225,0.074,0.3,0.074c0.276,0.05,0.54,0.075,0.791,0.075
				c0.249,0,0.425,0,0.526,0c0.15,0,0.375,0,0.677,0c0.275,0,0.476-0.025,0.601-0.075c0.175,0,0.275-0.074,0.301-0.225
				c0-0.1,0.075-0.238,0.225-0.414c0.202-0.551,0.301-0.865,0.301-0.939v-0.112c0-0.05-0.05-0.075-0.151-0.075
				c-0.075,0-0.213,0.025-0.414,0.075c-0.201,0.075-0.388,0.15-0.563,0.226h-0.978c-0.176,0-0.514,0.025-1.016,0.074
				c-0.501,0.076-0.852,0.15-1.053,0.226C34.059,19.623,33.958,19.648,33.833,19.698z`,
            }),
          });
        }
        function h2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 44.875 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M43.566,10.77c-0.084,0.055-0.22,0.083-0.412,0.083
				c-0.381,0.082-0.997,0.137-1.844,0.165c-0.875,0.025-1.82,0.052-2.831,0.079c-1.013,0.085-2.01,0.126-2.997,0.126
				c-0.981,0.025-1.789,0.039-2.422,0.039c-0.709,0-1.282,0.04-1.721,0.125c-0.437,0.08-0.778,0.148-1.024,0.205
				c-0.217,0.137-0.356,0.275-0.412,0.41c-0.054,0.135-0.081,0.315-0.081,0.534v0.33c0,0.246,0.014,0.545,0.043,0.9
				c0.027,0.327,0.067,0.643,0.123,0.942c0.078,0.383,0.162,0.753,0.244,1.109v0.123l-0.574,0.656v0.124
				c-0.191,0.109-0.685,0.164-1.479,0.164c-1.584,0.082-2.922,0.105-4.018,0.082c-1.039,0-1.929-0.028-2.667-0.082
				c-0.655-0.083-1.176-0.164-1.558-0.246c-0.329-0.112-0.56-0.207-0.697-0.288c-0.219,0-0.44,0.042-0.658,0.125
				c-0.216,0.164-0.477,0.438-0.779,0.82c-0.354,0.41-0.766,1.039-1.23,1.887c-0.439,0.903-0.945,2.107-1.517,3.609
				c-0.602,1.475-1.272,3.336-2.01,5.577l-0.083,0.084c0,0.656-0.179,1.065-0.533,1.231c-0.191,0.189-0.344,0.231-0.452,0.123H2.79
				c0-0.136,0.016-0.262,0.042-0.369c0.106-0.275,0.166-0.493,0.166-0.657H2.339c-0.11,0-0.22-0.012-0.327-0.041
				c-0.631-0.055-1.122-0.342-1.477-0.859c-0.193-0.305-0.288-0.686-0.288-1.15c0-0.573,0.08-1.067,0.245-1.477
				c0.138-0.466,0.205-0.726,0.205-0.779v0.082c0.028-0.028,0.205-0.26,0.534-0.698c0.274-0.438,0.629-0.984,1.067-1.642
				c0.466-0.681,0.943-1.409,1.437-2.172c0.574-0.767,1.106-1.518,1.599-2.258c0.545-1.039,0.972-1.968,1.27-2.788
				c0.277-0.822,0.411-1.544,0.411-2.176c0-0.409-0.067-0.819-0.202-1.229c-0.249-0.521-0.591-0.931-1.026-1.23
				C5.376,10.115,4.95,9.882,4.514,9.663C4.13,9.583,3.871,9.405,3.735,9.13C3.623,8.83,3.57,8.5,3.57,8.146
				c0-0.134,0.016-0.274,0.041-0.41c0-0.081,0-0.178,0-0.288L3.57,7.367V5.191c0-0.356,0-0.654,0-0.903
				c0-0.246-0.041-0.408-0.124-0.492H3.405c-0.027,0-0.04-0.041-0.04-0.12c0-0.03,0.013-0.07,0.04-0.124l0.041-0.085
				c0.028-0.053,0.152-0.133,0.37-0.243c0.193-0.082,0.781-0.151,1.763-0.207c0.056-0.082,0.084-0.164,0.084-0.247
				c0-0.055,0.041-0.108,0.125-0.163c0.053-0.11,0.105-0.205,0.163-0.289l0.121-0.121L7.26,2.239l0.126,0.287
				C7.438,2.58,7.466,2.662,7.466,2.771c0.028,0.083,0.042,0.166,0.042,0.247h33.884l0.081-0.164
				c0.054-0.055,0.096-0.083,0.124-0.083l0.779-0.245c0.028,0.054,0.083,0.11,0.165,0.164l0.204,0.202h1.477l0.288,4.475
				C44.508,9.25,44.195,10.387,43.566,10.77z M27.361,11.592h-5.827c-0.079,0-0.177,0.066-0.284,0.204
				c-0.139,0.138-0.206,0.328-0.206,0.577v1.968c0,0.301,0.067,0.504,0.206,0.613c0.106,0.137,0.205,0.208,0.284,0.208h5.827
				c0.139,0,0.249-0.071,0.328-0.208c0.137-0.109,0.208-0.313,0.208-0.613v-1.968c0-0.249-0.071-0.438-0.208-0.577
				C27.61,11.658,27.5,11.592,27.361,11.592z`,
            }),
          });
        }
        function d2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 37.875 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M37.225,10.695c-0.12,0.239-0.314,0.372-0.581,0.402
				c-0.446,0.029-3.495,0.073-9.136,0.135c-0.179,0-0.372,0.043-0.582,0.132c-0.36,0.121-0.598,0.329-0.717,0.629
				c-0.089,0.239-0.104,0.714-0.046,1.433c0.03,0.356,0.091,0.894,0.18,1.611c0.031,0.359,0.09,0.731,0.179,1.123
				c0,0.207-0.165,0.327-0.494,0.355c-0.685,0.149-1.312,0.255-1.88,0.315c-1.014,0.147-2.104,0.238-3.268,0.268
				c-1.822,0.029-3.851-0.03-6.092-0.179c-1.939,5.166-2.91,7.911-2.91,8.239c0,0.359,0.077,1.508,0.224,3.45
				c0.448,0.326,0.807,0.552,1.075,0.67c0.209,0.092,0.297,0.208,0.269,0.36c0,0.088-0.03,0.147-0.09,0.177l-0.312,0.179
				c-0.33,0.089-0.688,0.105-1.077,0.046c-0.568-0.09-4.374-0.85-11.419-2.284c-0.357-0.061-0.357-1.043,0-2.957
				c0.149-0.805,0.493-1.971,1.03-3.492c0.567-1.554,1.09-2.777,1.568-3.671c0.506-0.928,0.91-1.925,1.208-3
				c0.358-1.076,0.507-1.838,0.449-2.285c-0.061-0.327-0.479-0.716-1.254-1.165c-0.597-0.298-1.163-0.521-1.701-0.672
				c-0.3-0.03-0.539-0.178-0.718-0.447c-0.12-0.12-0.253-0.285-0.404-0.493C0.637,9.454,0.592,9.143,0.592,8.634
				c0-0.24,0-0.611,0-1.12c0-0.775,0.061-1.253,0.18-1.433C1.34,5.097,1.77,4.364,2.068,3.888C2.337,3.5,2.592,3.2,2.832,2.991
				C3.1,2.723,3.338,2.603,3.548,2.632c0.208,0.03,0.448,0.03,0.717,0l0.447-0.044c0.149-0.269,0.284-0.464,0.404-0.582
				c0.12-0.118,0.565-0.074,1.344,0.134l0.179,0.492h12.314v0.404h5.331V2.632l12.27-0.044l0.403,0.223
				c0.238,0.149,0.358,0.329,0.358,0.537c0.061,1.167,0.118,2.256,0.179,3.271c0.06,2.001,0.044,3.103-0.046,3.314
				C37.298,10.41,37.225,10.665,37.225,10.695z M24.371,11.814c-0.148-0.061-0.268-0.092-0.356-0.092v0.092l-3.985-0.044
				c-0.152,0.566-0.091,1.043,0.176,1.433c0.361,0.565,0.658,0.97,0.899,1.209c0.239,0.208,0.521,0.341,0.85,0.4
				c0.297,0.03,0.434,0.106,0.403,0.225c-0.029,0.149-0.148,0.226-0.359,0.226c-0.118,0-0.312,0-0.579,0
				c-0.329-0.061-0.69-0.269-1.077-0.627c-0.626-0.538-1.03-0.987-1.211-1.343c-0.117-0.39-0.178-0.898-0.178-1.522l-0.805-0.047
				c-0.479,0-0.896,0.194-1.254,0.584c-0.298,0.357-0.448,0.778-0.448,1.253c0,0.298,0,0.7,0,1.208
				c0.061,0.36,0.361,0.644,0.897,0.852c0.775,0.299,1.523,0.418,2.238,0.36c0.837-0.122,1.493-0.196,1.972-0.226
				c0.238-0.03,0.67-0.014,1.297,0.045c0.628,0.059,1.061,0.089,1.298,0.089c0.39,0,0.643-0.03,0.761-0.089
				c0.061-0.06,0.181-0.179,0.361-0.357c0.118-0.18,0.148-0.659,0.087-1.435c-0.03-0.748-0.148-1.3-0.357-1.657
				C24.88,12.083,24.669,11.902,24.371,11.814z`,
            }),
          });
        }
        function u2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 79.833 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M16.598,10.484c1.581-0.238,2.805-0.404,3.67-0.504
				c0.71-0.08,1.956-0.148,3.729-0.205c1.815-0.041,3.166-0.041,4.053,0c0.751,0.019,1.569,0.107,2.456,0.265
				c0.437,0.08,0.8,0.149,1.096,0.206c1.047,0.575,2.169,0.89,3.374,0.948c0.253,0.021,0.609,0.021,1.063,0
				c0.296,0,0.462,0.011,0.504,0.032c0.08,0.099,0.426,0.058,1.034-0.122c0.515-0.139,1.035-0.313,1.57-0.529
				c0.473-0.181,0.798-0.279,0.974-0.296c0.219-0.041,0.493,0,0.831,0.115c0.315,0.101,0.579,0.267,0.798,0.504
				c0.08,0.101,0.168,0.219,0.265,0.354c0.061,0.08,0.141,0.198,0.239,0.354c0.138,0.199,0.493,0.251,1.065,0.15
				c0.295-0.04,0.571-0.1,0.825-0.178c0.298,0,0.622-0.167,0.976-0.501c0.159-0.159,0.299-0.316,0.419-0.477
				c0.036,0,0.292,0.059,0.767,0.181c0.612,0.115,1.242,0.234,1.894,0.353c0.216,0.04,0.445,0.08,0.68,0.117
				c1.854,0.314,3.71,0.513,5.564,0.593c2.093,0.098,4.358-0.048,6.806-0.443c1.24-0.197,2.267-0.403,3.074-0.619l0.238,0.147
				c0.279,0.156,0.681,0.402,1.212,0.736c1.244,0.732,2.495,1.253,3.76,1.57c0.669,0.16,1.459,0.274,2.364,0.354
				c0.376,0.021,0.781,0.038,1.216,0.058c1.023,0.041,2.386-0.077,4.084-0.354c0.845-0.118,1.593-0.245,2.247-0.385
				c-0.216,0.279-0.474,0.613-0.771,1.007c-0.632,0.768-1.193,1.419-1.687,1.951c-0.532,0.593-1.39,1.164-2.573,1.719
				c-0.869,0.412-1.706,0.728-2.517,0.944c-0.098,0.021-0.195,0.041-0.296,0.06c-0.667,0.177-1.753,0.229-3.255,0.148
				c-1.222-0.057-2.365-0.167-3.432-0.326c-0.709-0.118-3.433-0.455-8.163-1.005l-6.897-0.828l-0.114,0.382l-1.866,0.147
				c-0.099-0.114-0.197-0.226-0.296-0.321c-0.08-0.08-0.228-0.148-0.444-0.208c-0.198-0.042-0.363-0.042-0.502,0
				c-0.1,0.038-0.217,0.098-0.354,0.177l-0.149,0.119l0.029-0.178c0.041-0.16-0.107-0.278-0.442-0.354
				c-0.101-0.021-0.267,0.028-0.502,0.148c-0.24,0.136-0.366,0.236-0.384,0.296c-0.022,0.058-0.03,0.167-0.03,0.321
				c-0.042,0.182-0.136,0.367-0.296,0.563c-0.16,0.219-0.426,0.416-0.802,0.594c-0.354,0.158-0.661,0.245-0.917,0.266
				c-0.216,0-0.404-0.038-0.561-0.118c-0.039-0.018-0.08-0.042-0.119-0.059l-0.029-0.03l0.12,0.267
				c0.059,0.157,0.096,0.334,0.116,0.532c0.02,0.217,0.012,0.481-0.031,0.799c-0.019,0.296-0.137,0.622-0.353,0.979
				c-0.159,0.274-0.328,0.501-0.503,0.681c-0.098,0.116-0.25,0.224-0.442,0.322c-0.199,0.104-0.327,0.122-0.387,0.06
				c-0.059-0.06-0.077-0.119-0.059-0.177c0.021-0.022,0.109-0.137,0.267-0.353c0.136-0.16,0.256-0.486,0.352-0.977
				c0.1-0.476,0.14-0.869,0.123-1.186c-0.023-0.275-0.146-0.632-0.39-1.066c-0.097-0.177-0.184-0.336-0.264-0.473
				c-0.08-0.116-0.136-0.176-0.177-0.176c-0.079,0-0.287,0-0.623,0c-0.433-0.021-0.777-0.041-1.033-0.062
				c-0.238,0-1.295-0.119-3.167-0.354c-1.991-0.258-3.137-0.405-3.433-0.443c-0.493-0.039-2.446,0.048-5.857,0.264
				c-3.394,0.24-5.454,0.414-6.185,0.533c-0.63,0.121-1.795,0.425-3.489,0.918c-1.263,0.376-2.376,0.719-3.345,1.037
				c-0.613,0.176-1.655,0.59-3.138,1.24c-1.437,0.633-2.335,1.057-2.691,1.272c-0.353,0.217-0.611,0.385-0.768,0.503
				c-0.178,0.139-0.296,0.266-0.355,0.386c-0.06,0.139-0.1,0.237-0.12,0.296c-0.02,0.039-0.059,0.106-0.116,0.207
				c-0.06,0.078-0.198,0.098-0.414,0.06c-0.198-0.042-0.405-0.109-0.622-0.207c-0.196-0.08-0.623-0.501-1.271-1.272
				c-0.258-0.317-0.476-0.603-0.65-0.859c-0.2-0.255-0.287-0.4-0.267-0.444c0-0.099,0.12-0.235,0.354-0.413
				c0.217-0.139,0.728-0.472,1.537-1.006c0.613-0.415,1.53-0.897,2.754-1.448c0.253-0.1,0.68-0.275,1.271-0.535
				c0.416-0.196,0.68-0.324,0.797-0.383c0.456-0.218,0.981-0.446,1.567-0.682c0.91-0.336,2.032-0.7,3.376-1.096
				c1.301-0.354,3.095-0.7,5.386-1.032c0.787-0.1,1.547-0.187,2.279-0.267c0.609-0.08,0.994-0.121,1.153-0.121
				c0.414-0.02,1.174-0.036,2.274-0.058c1.383-0.02,2.24-0.02,2.575,0c0.889,0.058,1.895,0.136,3.021,0.237
				c1.615,0.138,2.474,0.226,2.572,0.265c0.06,0.023,0.307,0.14,0.739,0.355c0.434,0.197,0.799,0.347,1.095,0.446
				c0.296,0.078,0.562,0.146,0.797,0.204c0.12,0.021,0.209,0.03,0.269,0.03l-0.239-0.326c-0.097-0.157-0.176-0.364-0.233-0.621
				c-0.039-0.157-0.06-0.314-0.06-0.475c0-0.078-0.011-0.128-0.029-0.146h-0.062c-0.53,0-1.042-0.038-1.537-0.118
				c-0.297-0.042-1.232-0.098-2.811-0.178c-1.616-0.1-2.674-0.148-3.165-0.148c-0.512,0-1.144,0.018-1.896,0.06
				c-0.728,0.038-1.766,0.106-3.105,0.205c-1.244,0.08-2.804,0.296-4.675,0.654c-1.735,0.313-3.275,0.641-4.616,0.977
				c-1.063,0.276-2.534,0.798-4.41,1.567c-1.005,0.432-2.107,0.915-3.312,1.448c-0.475,0.216-1.106,0.583-1.896,1.095
				c-0.293,0.199-0.709,0.481-1.242,0.858c-0.097,0.059-0.227,0.049-0.384-0.03c-0.059-0.02-0.106-0.05-0.146-0.088l-0.061-0.029
				c-0.16-0.061-0.443-0.326-0.858-0.799c-0.473-0.535-0.776-0.871-0.918-1.007c-0.217-0.237-0.362-0.412-0.441-0.533
				c-0.08-0.138-0.08-0.247,0-0.324c0.058-0.038,0.185-0.188,0.384-0.442c0.236-0.3,0.415-0.516,0.532-0.652
				c0.157-0.159,0.74-0.542,1.746-1.155c0.493-0.293,0.976-0.571,1.449-0.828c0.632-0.374,2.041-0.927,4.23-1.655
				c1.716-0.593,3.078-1.025,4.083-1.303C13.604,10.978,14.786,10.762,16.598,10.484z M26.126,10.517
				c-0.195,0-0.364,0.066-0.501,0.205c-0.142,0.136-0.208,0.305-0.208,0.504c0,0.194,0.066,0.364,0.208,0.501
				c0.137,0.139,0.306,0.208,0.501,0.208c0.197,0,0.365-0.069,0.504-0.208c0.139-0.137,0.206-0.307,0.206-0.501
				c0-0.199-0.067-0.368-0.206-0.504C26.492,10.583,26.324,10.517,26.126,10.517z M28.376,10.93
				c-0.139,0.116-0.206,0.274-0.206,0.472c0,0.196,0.067,0.363,0.206,0.504c0.138,0.139,0.306,0.205,0.504,0.205
				c0.195,0,0.362-0.066,0.499-0.205c0.141-0.141,0.21-0.308,0.21-0.504c0-0.197-0.069-0.355-0.21-0.472
				c-0.137-0.14-0.304-0.208-0.499-0.208C28.682,10.722,28.514,10.791,28.376,10.93z M66.249,13.562l-14.561-0.355l0.563,0.296
				l14.41,0.384L66.249,13.562z M32.042,15.189c0-0.176-0.066-0.336-0.205-0.474c-0.139-0.118-0.296-0.179-0.475-0.179
				c-0.194,0-0.362,0.061-0.501,0.179c-0.141,0.138-0.208,0.298-0.208,0.474c0,0.181,0.067,0.335,0.208,0.474
				c0.139,0.139,0.307,0.206,0.501,0.206c0.179,0,0.336-0.067,0.475-0.206S32.042,15.37,32.042,15.189z M33.32,14.981
				c-0.142,0.118-0.208,0.278-0.208,0.474c0,0.199,0.066,0.356,0.208,0.478c0.136,0.136,0.304,0.201,0.501,0.201
				c0.179,0,0.333-0.065,0.475-0.201c0.138-0.121,0.205-0.278,0.205-0.478c0-0.195-0.067-0.355-0.205-0.474
				c-0.142-0.137-0.296-0.207-0.475-0.207C33.624,14.774,33.456,14.844,33.32,14.981z M10.506,17.883
				c-0.159,0.136-0.237,0.296-0.237,0.472c0,0.197,0.078,0.362,0.237,0.503c0.136,0.139,0.307,0.206,0.504,0.206
				s0.364-0.067,0.501-0.206c0.159-0.141,0.235-0.306,0.235-0.503c0-0.176-0.076-0.336-0.235-0.472
				c-0.137-0.141-0.304-0.211-0.501-0.211S10.642,17.743,10.506,17.883z M3.583,17.672c0.175,0,0.332-0.068,0.472-0.206
				c0.138-0.138,0.207-0.295,0.207-0.471c0-0.199-0.069-0.355-0.207-0.478c-0.14-0.136-0.297-0.205-0.472-0.205
				c-0.198,0-0.366,0.069-0.505,0.205c-0.118,0.122-0.176,0.278-0.176,0.478c0,0.176,0.058,0.333,0.176,0.471
				C3.217,17.604,3.385,17.672,3.583,17.672z M5.624,15.988c0,0.196,0.071,0.364,0.208,0.505c0.136,0.136,0.296,0.206,0.473,0.206
				c0.198,0,0.366-0.07,0.503-0.206c0.136-0.141,0.208-0.309,0.208-0.505c0-0.177-0.072-0.334-0.208-0.473
				c-0.137-0.138-0.305-0.207-0.503-0.207c-0.177,0-0.337,0.069-0.473,0.207C5.695,15.654,5.624,15.811,5.624,15.988z M8.287,18.828
				c-0.14,0.137-0.207,0.296-0.207,0.474c0,0.196,0.067,0.367,0.207,0.503c0.138,0.14,0.306,0.208,0.503,0.208
				s0.365-0.068,0.504-0.208c0.138-0.136,0.205-0.307,0.205-0.503c0-0.178-0.067-0.337-0.205-0.474
				c-0.139-0.137-0.307-0.207-0.504-0.207S8.424,18.691,8.287,18.828z`,
            }),
          });
        }
        function P1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92.059 31.75",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M4.341,19.058c0.28,0.257,0.614,0.387,1.001,0.387
				c0.388,0,0.71-0.13,0.969-0.387c0.28-0.282,0.419-0.615,0.419-1.002c0-0.389-0.14-0.71-0.419-0.97
				c-0.259-0.28-0.582-0.418-0.969-0.418c-0.387,0-0.721,0.138-1.001,0.418c-0.258,0.26-0.388,0.581-0.388,0.97
				C3.954,18.443,4.083,18.776,4.341,19.058z M1.822,15.051c-0.085-0.106-0.204-0.161-0.355-0.161c-0.15,0-0.279,0.055-0.388,0.161
				c-0.107,0.109-0.162,0.239-0.162,0.39s0.054,0.277,0.162,0.387c0.108,0.107,0.237,0.162,0.388,0.162
				c0.151,0,0.27-0.055,0.355-0.162c0.108-0.109,0.162-0.236,0.162-0.387S1.93,15.161,1.822,15.051z M36.121,15.311
				c-0.28-0.279-0.615-0.421-1.001-0.421c-0.388,0-0.711,0.142-0.969,0.421c-0.279,0.257-0.419,0.582-0.419,0.97
				s0.14,0.72,0.419,1.002c0.258,0.257,0.582,0.385,0.969,0.385c0.387,0,0.722-0.128,1.001-0.385
				c0.257-0.282,0.387-0.614,0.387-1.002S36.378,15.568,36.121,15.311z M67.996,14.988c0.108-0.13,0.161-0.269,0.161-0.421
				c0-0.171-0.053-0.323-0.161-0.451c-0.129-0.106-0.269-0.173-0.421-0.193l-16.631-0.517c-0.28,0.021-0.529,0.139-0.743,0.354
				c-0.258,0.237-0.388,0.526-0.388,0.872c0,0.323,0.129,0.604,0.388,0.839c0.214,0.215,0.463,0.334,0.743,0.356l16.631-0.646
				C67.727,15.161,67.867,15.097,67.996,14.988z M90.344,12.017l-8.364,8.332c-7.277,2.714-14.974,3.466-23.092,2.26
				c-0.065-0.063-0.14-0.129-0.226-0.193c-0.172-0.15-0.333-0.237-0.484-0.257c-0.172,0-0.334,0.041-0.484,0.129
				c-0.086,0.041-0.162,0.085-0.227,0.128c-0.021-0.063-0.064-0.115-0.129-0.161c-0.129-0.131-0.258-0.194-0.387-0.194
				c-0.108,0-0.195,0.044-0.259,0.128c-0.021,0.043-0.042,0.086-0.063,0.132c-0.022-0.065-0.055-0.12-0.098-0.161
				c-0.085-0.13-0.193-0.194-0.322-0.194c-0.108,0-0.194,0.044-0.259,0.128c-0.043,0.044-0.064,0.086-0.064,0.13
				c-0.065-0.063-0.152-0.13-0.259-0.193c-0.215-0.15-0.409-0.226-0.582-0.226c-0.172,0-0.301,0.052-0.387,0.161
				c-0.065,0.044-0.097,0.096-0.097,0.159c-0.043-0.042-0.096-0.095-0.162-0.159c-0.108-0.109-0.226-0.161-0.355-0.161
				c-0.107,0-0.183,0.052-0.226,0.161c-0.021,0.064-0.032,0.117-0.032,0.159c-0.022-0.042-0.055-0.095-0.098-0.159
				c-0.085-0.109-0.183-0.161-0.291-0.161s-0.182,0.052-0.225,0.161c-0.044,0.064-0.065,0.117-0.065,0.159
				c-0.043-0.042-0.097-0.086-0.162-0.127c-0.171-0.109-0.354-0.161-0.548-0.161c-0.194,0.02-0.345,0.096-0.453,0.225
				c-0.064,0.063-0.107,0.128-0.129,0.194c-0.021-0.044-0.053-0.087-0.096-0.131c-0.108-0.086-0.216-0.115-0.323-0.095
				c-0.108,0.021-0.173,0.095-0.195,0.226c-0.021,0.065-0.032,0.129-0.032,0.192c-0.043-0.042-0.086-0.083-0.129-0.127
				c-0.129-0.046-0.237-0.055-0.324-0.032c-0.085,0.041-0.14,0.128-0.161,0.258c0,0.063,0,0.129,0,0.193
				c-0.064-0.043-0.151-0.075-0.259-0.098c-0.194-0.041-0.387-0.021-0.582,0.065c-0.171,0.085-0.278,0.215-0.322,0.388
				c-0.043,0.109-0.053,0.193-0.032,0.26l-0.291,0.161c-0.215-0.282-0.462-0.551-0.743-0.809c-0.581-0.539-1.065-0.721-1.453-0.548
				c-0.409,0.15-0.7,0.548-0.872,1.195c-0.087,0.32-0.129,0.632-0.129,0.936h-1.292c-0.108-0.711-0.398-0.853-0.872-0.42
				l-0.485-0.195c-0.043-0.71-0.355-0.86-0.937-0.451l-0.419-0.195c-0.086-0.664-0.398-0.806-0.937-0.419l-0.485-0.129
				c-0.043-0.645-0.355-0.784-0.936-0.42c-0.539-0.236-1.184-0.474-1.938-0.71c-1.529-0.453-2.82-0.646-3.876-0.582
				c-1.098,0.065-2.421,0.368-3.971,0.905c-1.357,0.537-2.11,0.807-2.261,0.807c-0.302,0.021-0.797-0.075-1.486-0.292
				c-1.378-0.428-2.163-0.667-2.357-0.711c-2.454-0.667-4.952-0.881-7.493-0.644c-1.615,0.13-4.124,0.644-7.525,1.55
				c-3.166,0.884-4.845,1.334-5.039,1.357c-0.259,0.043-0.56,0.063-0.903,0.063L2.21,23.772l-0.776-1.163l-0.193-3.294
				c-0.172-0.321-0.344-0.71-0.516-1.16c-0.345-0.906-0.496-1.683-0.452-2.327c0.021-0.754,0.495-1.303,1.421-1.648
				c0.452-0.17,0.904-0.279,1.356-0.323c0-0.063,0.076-0.182,0.226-0.355c0.216-0.279,1.356-0.654,3.423-1.128
				c2.37-0.56,5.006-1.003,7.913-1.325c2.647-0.323,5.457-0.493,8.428-0.517c1.486-0.021,2.712-0.012,3.682,0.032
				c1.399,0.065,2.681,0.236,3.843,0.519c0.581,0.128,1.012,0.257,1.291,0.387l1.809,0.128l0.097,0.259
				c0.108,0.172,0.258,0.271,0.453,0.292c0.192,0,0.332-0.087,0.42-0.26l0.064-0.226l0.613,0.064l0.13,0.225
				c0.085,0.15,0.215,0.226,0.386,0.226c0.173,0,0.302-0.063,0.389-0.193l0.065-0.225h0.613l0.162,0.225
				c0.151,0.153,0.313,0.217,0.484,0.193c0.151-0.021,0.27-0.107,0.355-0.257l0.064-0.258l0.582-0.098l0.226,0.162
				c0.151,0.106,0.302,0.141,0.452,0.098c0.129-0.046,0.216-0.173,0.258-0.387v-0.26l0.453-0.162l0.259,0.13
				c0.215,0.064,0.376,0.075,0.485,0.032c0.107-0.066,0.17-0.194,0.192-0.387l-0.032-0.26l0.452-0.258l0.291,0.064
				c0.215,0.043,0.376,0.031,0.484-0.032c0.107-0.065,0.15-0.193,0.129-0.389l-0.064-0.289l1.066-0.549l0.162,0.354
				c0.193,0.28,0.419,0.505,0.677,0.679c0.281,0.171,0.615,0.301,1.001,0.388c0.195,0.042,0.367,0.063,0.517,0.063l19.087-0.419
				l1.615,0.903c1.271,0.667,2.368,1.195,3.294,1.582c1.851,0.733,3.003,0.667,3.455-0.191c0.151-0.262-0.042-0.701-0.581-1.327
				l-0.872-0.871C77.813,10.413,84.079,11.004,90.344,12.017z`,
            }),
          });
        }
        function w1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 91.436 33.02",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M64.413,15.165c0.021,0,0.042,0,0.063,0
				c0.167-0.021,0.301-0.082,0.407-0.188c0.124-0.124,0.187-0.271,0.187-0.438s-0.063-0.313-0.187-0.438
				c-0.105-0.105-0.24-0.156-0.407-0.156c-0.021,0-0.042,0-0.063,0H42.11c-0.146,0-0.271,0.051-0.375,0.156
				c-0.125,0.124-0.188,0.271-0.188,0.438s0.063,0.313,0.188,0.438c0.104,0.105,0.23,0.167,0.375,0.188H64.413z M75.736,21.265
				H36.104l-0.563-1.596h-2.096v2.034l-0.125,0.155h-0.844l-0.313-0.499v-0.845l-0.188-0.313c0,0.146-0.052,0.281-0.156,0.406
				c-0.125,0.125-0.271,0.188-0.438,0.188c-0.167,0-0.313-0.063-0.438-0.188c-0.105-0.125-0.157-0.26-0.157-0.406
				c-0.021,0.146-0.083,0.281-0.188,0.406c-0.125,0.125-0.271,0.188-0.439,0.188c-0.166,0-0.312-0.063-0.438-0.188
				c-0.104-0.125-0.156-0.26-0.156-0.406c-0.021,0.146-0.083,0.281-0.187,0.406c-0.125,0.125-0.271,0.188-0.438,0.188
				s-0.313-0.063-0.438-0.188c-0.102-0.123-0.155-0.258-0.156-0.406c-0.002,0.148-0.064,0.283-0.188,0.406
				c-0.125,0.125-0.271,0.188-0.438,0.188c-0.168,0-0.313-0.063-0.438-0.188c-0.103-0.123-0.155-0.258-0.157-0.406
				c-0.001,0.148-0.064,0.283-0.188,0.406c-0.125,0.125-0.271,0.188-0.438,0.188s-0.303-0.063-0.407-0.188
				c-0.123-0.123-0.186-0.258-0.189-0.406c-0.001,0.148-0.063,0.283-0.187,0.406c-0.104,0.125-0.24,0.188-0.407,0.188
				c-0.188,0-0.333-0.063-0.438-0.188c-0.123-0.123-0.186-0.258-0.187-0.406c-0.002,0.148-0.065,0.283-0.188,0.406
				c-0.104,0.125-0.24,0.188-0.407,0.188c-0.167,0-0.313-0.063-0.438-0.188c-0.124-0.123-0.186-0.258-0.188-0.406
				c-0.001,0.148-0.064,0.283-0.188,0.406c-0.104,0.125-0.24,0.188-0.407,0.188s-0.313-0.063-0.438-0.188
				c-0.104-0.125-0.167-0.26-0.188-0.406c0,0.146-0.052,0.281-0.156,0.406c-0.125,0.125-0.271,0.188-0.438,0.188
				c-0.166,0-0.313-0.063-0.438-0.188c-0.104-0.125-0.167-0.26-0.187-0.406c0,0.146-0.053,0.281-0.157,0.406
				c-0.125,0.125-0.271,0.188-0.438,0.188c-0.167,0-0.313-0.063-0.438-0.188c-0.104-0.125-0.157-0.26-0.157-0.406
				c-0.021,0.146-0.083,0.281-0.187,0.406c-0.125,0.125-0.271,0.188-0.438,0.188c-0.167,0-0.313-0.063-0.438-0.188
				c-0.104-0.125-0.156-0.26-0.156-0.406c-0.021,0.146-0.083,0.281-0.187,0.406c-0.125,0.125-0.271,0.188-0.438,0.188
				c-0.167,0-0.313-0.063-0.438-0.188c-0.103-0.123-0.156-0.258-0.157-0.406c-0.002,0.148-0.065,0.283-0.188,0.406
				c-0.125,0.125-0.271,0.188-0.438,0.188c-0.167,0-0.313-0.063-0.438-0.188c-0.104-0.123-0.156-0.258-0.156-0.406
				c-0.002,0.148-0.065,0.283-0.188,0.406c-0.125,0.125-0.271,0.188-0.438,0.188c-0.167,0-0.303-0.063-0.406-0.188
				c-0.124-0.123-0.186-0.258-0.188-0.406c-0.001,0.148-0.064,0.283-0.188,0.406c-0.104,0.125-0.24,0.188-0.407,0.188
				c-0.188,0-0.333-0.063-0.438-0.188c-0.123-0.123-0.186-0.258-0.188-0.406c-0.002,0.148-0.064,0.283-0.188,0.406
				c-0.104,0.125-0.24,0.188-0.407,0.188c-0.166,0-0.313-0.063-0.438-0.188c-0.123-0.123-0.186-0.258-0.188-0.406
				c-0.002,0.148-0.064,0.283-0.188,0.406c-0.104,0.125-0.24,0.188-0.406,0.188c-0.168,0-0.313-0.063-0.439-0.188
				c-0.104-0.125-0.167-0.26-0.188-0.406c0,0.146-0.052,0.281-0.156,0.406c-0.126,0.125-0.271,0.188-0.438,0.188
				s-0.313-0.063-0.438-0.188c-0.104-0.125-0.167-0.26-0.188-0.406c0,0.146-0.052,0.281-0.156,0.406
				c-0.125,0.125-0.271,0.188-0.438,0.188c-0.166,0-0.312-0.063-0.437-0.188c-0.104-0.125-0.156-0.26-0.156-0.406
				c-0.021,0.146-0.084,0.281-0.189,0.406c-0.125,0.125-0.271,0.188-0.437,0.188c-0.167,0-0.313-0.063-0.438-0.188
				c-0.104-0.125-0.156-0.26-0.156-0.406c-0.021,0.146-0.083,0.281-0.188,0.406c-0.125,0.125-0.271,0.188-0.438,0.188
				c-0.167,0-0.313-0.063-0.438-0.188c-0.103-0.123-0.155-0.258-0.156-0.406c-0.002,0.148-0.065,0.283-0.188,0.406
				c-0.125,0.125-0.27,0.188-0.438,0.188c-0.167,0-0.313-0.063-0.438-0.188c-0.103-0.123-0.155-0.258-0.156-0.406
				c-0.001,0.148-0.065,0.283-0.187,0.406c-0.126,0.125-0.272,0.188-0.439,0.188c-0.167,0-0.302-0.063-0.407-0.188
				c-0.125-0.125-0.187-0.26-0.187-0.406l-0.344-0.876L0.851,17.23v-2.409l3.253-2.034l0.25-0.437c0-0.167,0.052-0.303,0.157-0.407
				c0.125-0.125,0.27-0.188,0.438-0.188s0.313,0.063,0.438,0.188c0.104,0.104,0.167,0.24,0.188,0.407
				c0-0.167,0.053-0.303,0.157-0.407c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.313,0.063,0.438,0.188
				c0.104,0.104,0.157,0.24,0.157,0.407c0.021-0.167,0.083-0.303,0.187-0.407c0.125-0.125,0.272-0.188,0.439-0.188
				c0.166,0,0.312,0.063,0.437,0.188c0.104,0.104,0.156,0.24,0.156,0.407c0.021-0.167,0.083-0.303,0.188-0.407
				c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.303,0.063,0.407,0.188c0.124,0.103,0.186,0.238,0.188,0.407
				c0.001-0.169,0.064-0.305,0.188-0.407c0.125-0.125,0.271-0.188,0.437-0.188c0.167,0,0.303,0.063,0.407,0.188
				c0.123,0.103,0.186,0.238,0.188,0.407c0.002-0.169,0.064-0.305,0.187-0.407c0.105-0.125,0.251-0.188,0.438-0.188
				c0.167,0,0.303,0.063,0.408,0.188c0.123,0.103,0.186,0.238,0.187,0.407c0.001-0.169,0.065-0.305,0.188-0.407
				c0.104-0.125,0.24-0.188,0.407-0.188c0.167,0,0.313,0.063,0.438,0.188c0.123,0.103,0.185,0.238,0.188,0.407
				c0.001-0.169,0.054-0.305,0.157-0.407c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.313,0.063,0.438,0.188
				c0.124,0.103,0.187,0.238,0.188,0.407c0.002-0.169,0.054-0.305,0.156-0.407c0.125-0.125,0.271-0.188,0.438-0.188
				s0.313,0.063,0.438,0.188c0.104,0.104,0.167,0.24,0.188,0.407c0-0.167,0.051-0.303,0.156-0.407
				c0.125-0.125,0.272-0.188,0.438-0.188c0.167,0,0.313,0.063,0.438,0.188c0.104,0.104,0.166,0.24,0.187,0.407
				c0-0.167,0.053-0.303,0.157-0.407c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.313,0.063,0.438,0.188
				c0.104,0.104,0.157,0.24,0.157,0.407c0.021-0.167,0.083-0.303,0.187-0.407c0.125-0.125,0.271-0.188,0.438-0.188
				c0.167,0,0.312,0.063,0.437,0.188c0.105,0.104,0.157,0.24,0.157,0.407c0.021-0.167,0.083-0.303,0.188-0.407
				c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.302,0.063,0.407,0.188c0.123,0.103,0.185,0.238,0.188,0.407
				c0.002-0.169,0.065-0.305,0.188-0.407c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.302,0.063,0.406,0.188
				c0.124,0.103,0.186,0.238,0.188,0.407c0.002-0.169,0.065-0.305,0.188-0.407c0.104-0.125,0.25-0.188,0.438-0.188
				c0.167,0,0.302,0.063,0.407,0.188c0.124,0.103,0.186,0.238,0.188,0.407c0.002-0.169,0.064-0.305,0.188-0.407
				c0.104-0.125,0.24-0.188,0.407-0.188c0.188,0,0.333,0.063,0.438,0.188c0.123,0.103,0.186,0.238,0.188,0.407
				c0.001-0.169,0.054-0.305,0.157-0.407c0.124-0.125,0.27-0.188,0.437-0.188c0.167,0,0.313,0.063,0.438,0.188
				c0.123,0.103,0.185,0.238,0.187,0.407c0.003-0.169,0.055-0.305,0.157-0.407c0.125-0.125,0.271-0.188,0.438-0.188
				s0.313,0.063,0.437,0.188c0.106,0.104,0.168,0.24,0.189,0.407c0-0.167,0.052-0.303,0.156-0.407
				c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.313,0.063,0.438,0.188c0.104,0.104,0.167,0.24,0.188,0.407
				c0-0.167,0.052-0.303,0.156-0.407c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.313,0.063,0.438,0.188
				c0.104,0.104,0.155,0.24,0.155,0.407c0.021-0.167,0.084-0.303,0.189-0.407c0.125-0.125,0.271-0.188,0.438-0.188
				c0.167,0,0.313,0.063,0.438,0.188c0.104,0.104,0.157,0.24,0.157,0.407c0.021-0.167,0.083-0.303,0.188-0.407
				c0.125-0.125,0.271-0.188,0.438-0.188c0.167,0,0.302,0.063,0.407,0.188c0.123,0.103,0.186,0.238,0.188,0.407
				c0.001-0.169,0.064-0.305,0.187-0.407c0.126-0.125,0.272-0.188,0.439-0.188c0.166,0,0.302,0.063,0.406,0.188
				c0.125,0.104,0.187,0.24,0.187,0.407l0.251,0.25l2.877-1.439h12.637l2.846,1.346h17.423l21.553,1.938L75.736,21.265z
				 M36.323,11.756h-0.031c-0.167,0-0.313,0.063-0.438,0.188c-0.104,0.125-0.157,0.271-0.157,0.438c0,0.166,0.052,0.303,0.157,0.405
				c0.125,0.125,0.271,0.188,0.438,0.188h0.031c0.146,0,0.282-0.063,0.407-0.188c0.125-0.103,0.188-0.239,0.188-0.405
				c0-0.168-0.063-0.313-0.188-0.438C36.605,11.818,36.469,11.756,36.323,11.756z M45.864,12.382c0-0.168-0.062-0.313-0.188-0.438
				c-0.104-0.125-0.24-0.188-0.407-0.188h-6.413c-0.146,0.021-0.271,0.083-0.375,0.188c-0.125,0.125-0.187,0.271-0.187,0.438
				c0,0.166,0.063,0.303,0.187,0.405c0.105,0.125,0.229,0.188,0.375,0.188h6.413c0.167,0,0.302-0.063,0.407-0.188
				C45.802,12.685,45.864,12.548,45.864,12.382z M47.083,12.976c0.167,0,0.303-0.063,0.406-0.188
				c0.125-0.103,0.189-0.239,0.189-0.405c0-0.168-0.063-0.313-0.189-0.438c-0.104-0.125-0.239-0.188-0.406-0.188
				c-0.167,0-0.313,0.063-0.438,0.188c-0.125,0.125-0.188,0.271-0.188,0.438c0,0.166,0.063,0.303,0.188,0.405
				C46.771,12.912,46.916,12.976,47.083,12.976z`,
            }),
          });
        }
        function f2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92.059 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M72.948,12.353c-11.712-2.169-28.352-1.323-28.352-1.323s-0.106,0.382-0.364,0.382
	c-0.258,0-0.374-0.382-0.374-0.382l-0.444,0.018c0,0-0.116,0.391-0.382,0.391s-0.354-0.337-0.354-0.337l-0.471,0.009
	c0,0-0.125,0.364-0.382,0.373c-0.257,0.009-0.337-0.355-0.337-0.355l-0.479,0.009c0,0-0.035,0.355-0.355,0.364
	c-0.32,0.009-0.355-0.346-0.355-0.346l-0.506,0.009c0,0-0.063,0.337-0.355,0.346s-0.329-0.355-0.329-0.355l-0.489,0.018
	c0,0-0.124,0.391-0.408,0.391s-0.364-0.4-0.364-0.4l-4.682,0.098l0.675-2.248V8.755l-0.941-0.693l-0.249,0.125l-0.79,1.999
	l-0.782,0.675l-0.897,0.364l-1.679,0.089l-0.213,0.337l-0.364,0.213v-0.213l-0.178-0.257L6.639,11.9l-0.595,0.586v0.506H5.706
	l-0.399,0.391v0.417H4.916l-0.417,0.391v0.444H4.099l-0.373,0.346v0.436l-0.32-0.036l-0.427,0.364v0.409H2.58l-0.453,0.56
	l1.108,2.805l5.07-0.764l16.332-1.82c0,0,1.82-0.049,1.934-0.082c0.114-0.031,0.219-0.39,0.382-0.39s0.317,0.293,0.317,0.293
	s1.567,0.258,1.917,1.796c0.268,1.178-0.26,2.624-0.26,2.624l0.91,0.552c0,0,0.357-0.617,0.715-1.332
	c0.357-0.715,0.455-1.332,0.455-1.332s1.584-1.748,3.9-0.943c2.56,0.89,2.535,3.607,2.535,3.607s4.063-2.015,11.277-2.242
	s10.4,0.846,19.533,0.813c9.133-0.032,15.34-4.858,15.34-4.858S81.504,13.937,72.948,12.353z M4.49,18.422
	c-0.492,0-0.89-0.42-0.89-0.938s0.398-0.938,0.89-0.938c0.491,0,0.89,0.42,0.89,0.938S4.981,18.422,4.49,18.422z`,
            }),
          });
        }
        function J1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 89 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M81.346,17.205c-1.482,0.773-2.792,1.278-3.926,1.513
				c-1.825,0.388-3.217,0.665-4.184,0.837c-1.631,0.235-3.153,0.374-4.57,0.418c-1.785,0.046-2.964,0.078-3.538,0.097
				c-0.211,0-0.339,0-0.385,0c-1.16,0.021-2.24-0.012-3.25-0.097c-1.05-0.087-2.82-0.376-5.31-0.868
				c-2.274-0.472-3.561-0.775-3.86-0.903c-0.083-0.042-0.15-0.062-0.193-0.064l-4.698-0.063l-0.322-0.451
				c-0.15,0.086-0.365,0.203-0.643,0.354c-0.45,0.236-1.352,0.568-2.704,0.998c-1.587,0.58-2.444,0.804-2.572,0.676
				c-0.152-0.151-0.27-0.324-0.354-0.515c-0.108-0.17-0.193-0.387-0.258-0.643c-0.085-0.323-0.312-0.902-0.676-1.739
				c-0.449-0.965-0.815-1.619-1.095-1.961c-0.321-0.387-0.686-0.709-1.092-0.966c-0.452-0.255-0.869-0.385-1.255-0.385
				c-0.515-0.022-1.008,0.02-1.479,0.13c-0.643,0.17-1.105,0.458-1.383,0.866c-0.215,0.323-0.441,0.687-0.677,1.093
				c-0.129,0.324-0.226,0.516-0.291,0.579c-0.085,0.063-0.236,0.097-0.45,0.097c-0.149,0-0.374-0.021-0.674-0.063
				c-0.903-0.172-1.739-0.323-2.511-0.45c-1.457-0.258-2.541-0.354-3.25-0.29c-0.877,0.021-1.469,0.032-1.771,0.032
				c-0.405,0.02-0.931,0.107-1.573,0.258c-0.13,0.021-0.667,0.138-1.61,0.353c-0.409,0.106-0.697,0.16-0.868,0.16
				c-0.214,0-0.355-0.011-0.42-0.034c-0.105-0.02-0.32-0.104-0.643-0.256c-0.386-0.193-0.74-0.312-1.063-0.352
				c-0.405-0.065-0.761-0.012-1.06,0.159c-0.428,0.258-0.773,0.496-1.03,0.71c-0.365,0.32-0.642,0.707-0.835,1.156
				c-0.066,0.086-0.257,0.547-0.58,1.384c-0.173,0.472-0.333,0.751-0.484,0.837c-0.212,0.087-0.45,0.138-0.707,0.161
				c-0.277,0.043-0.495,0-0.643-0.128c-0.322-0.365-0.602-0.665-0.837-0.902c-0.429-0.472-0.761-0.729-0.998-0.772
				c-0.386-0.106-0.676-0.138-0.869-0.096c-0.43,0.021-0.913,0.214-1.448,0.58c-0.516,0.34-1.341,1.157-2.478,2.443
				c-0.023,0.021-0.688,0.807-1.995,2.349c-0.622,0.73-1.125,1.309-1.513,1.737c-0.729,0.772-1.178,1.16-1.351,1.16
				c-0.299,0-0.524-0.503-0.674-1.513c-0.043-0.257-0.033-0.824,0.032-1.704c0.108-1.01,0.257-1.835,0.45-2.478
				c0.365-1.137,0.729-2.049,1.094-2.734c0.622-1.245,1.426-2.36,2.412-3.347c1.096-1.051,2.393-2.07,3.893-3.057
				c1.352-0.9,2.521-1.534,3.507-1.899c1.459-0.535,3.271-1.028,5.439-1.479c1.479-0.321,2.723-0.548,3.729-0.675
				c4.721-0.537,7.23-0.805,7.529-0.805c0.215,0,0.388,0.033,0.515,0.096c0.065,0.045,0.129,0.087,0.193,0.13
				c0.042,0,1.04,0.033,2.992,0.095c0.987,0.044,1.962,0.086,2.927,0.128l0.258-0.19h2.059l10.458,0.804l0.291,0.161
				c0.191,0.13,0.309,0.277,0.354,0.45c0,0.15,0.021,0.182,0.063,0.097c0-0.022,0.01-0.053,0.034-0.097l-0.096-0.514l3.506,0.033
				v0.546h-1.03l0.225,0.481c0.216,0.323,0.431,0.517,0.646,0.58c0.235,0.063,1.597,0.031,4.086-0.097
				c1.242-0.064,2.455-0.139,3.632-0.225l1.417-0.193l2.993,0.965c0.417,0.129,0.825,0.247,1.222,0.353
				c1.8,0.517,3.376,0.871,4.729,1.063c5.253,0.708,8.634,1.019,10.135,0.934c0.601-0.021,2.038-0.087,4.313-0.194
				c2.1-0.105,3.472-0.247,4.117-0.419l-0.097,0.227c-0.43,0.472-0.9,0.964-1.416,1.479c-1.095,1.072-1.932,1.781-2.51,2.123
				C82.941,16.325,81.922,16.906,81.346,17.205z M52.228,18.138c-0.065-0.022-0.108-0.042-0.129-0.063
				c-0.042,0-0.032,0.021,0.033,0.063H52.228z`,
            }),
          });
        }
        function k1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 79.167 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M32.168,14.728l-0.087-0.291l0.029-0.289h-2.433v0.607
				L32.168,14.728z M75.94,11.108c-2.26,1.756-3.803,2.886-4.634,3.388c-1.234,0.751-2.557,1.477-3.964,2.172
				c-1.854,0.888-3.589,1.571-5.211,2.056c-1.602,0.462-3.609,0.905-6.023,1.331c-0.771,0.114-1.523,0.231-2.256,0.349l-0.899,0.144
				c-0.075-0.096-0.184-0.185-0.316-0.261c-0.253-0.173-0.493-0.251-0.726-0.231c-0.231,0.037-0.49,0.164-0.78,0.376l-0.405,0.317
				c-0.097-0.077-0.214-0.145-0.348-0.201c-0.29-0.137-0.541-0.185-0.754-0.144c-0.229,0.038-0.49,0.144-0.778,0.315l-0.379,0.261
				c-0.096-0.058-0.202-0.125-0.317-0.201c-0.271-0.115-0.503-0.166-0.694-0.146c-0.193,0-0.425,0.086-0.695,0.259l-0.349,0.263
				c-0.096-0.076-0.221-0.156-0.376-0.232c-0.308-0.136-0.57-0.192-0.781-0.174c-0.134,0.018-0.339,0.106-0.607,0.262l-0.291,0.231
				c-0.096-0.059-0.211-0.126-0.348-0.202c-0.271-0.155-0.511-0.232-0.724-0.232c-0.229,0-0.482,0.085-0.752,0.262
				c-0.077,0.038-0.154,0.086-0.232,0.144l-0.085,0.059c-0.136-0.078-0.29-0.155-0.464-0.231c-0.349-0.174-0.626-0.261-0.84-0.261
				c-0.173,0-0.397,0.097-0.666,0.29l-0.347,0.288h-2.896l-0.289-1.158l-1.592,1.593c-0.021,0.02-0.078,0.028-0.175,0.028
				c-0.153,0.02-0.337,0.02-0.549,0c-0.212-0.019-0.389-0.057-0.522-0.114l-0.114-0.06c-0.192-0.404-0.463-0.829-0.811-1.273
				c-0.677-0.849-1.381-1.342-2.115-1.478c-0.887-0.114-1.775,0.029-2.663,0.436c-0.27,0.136-0.512,0.28-0.723,0.435l-0.29,0.232
				l-0.404,0.029c-0.289-0.193-0.655-0.367-1.1-0.523c-0.928-0.327-1.805-0.435-2.635-0.317c-0.831,0.114-1.649,0.405-2.46,0.869
				c-0.405,0.231-0.725,0.452-0.955,0.664l-0.407,0.06c-0.56-0.231-1.256-0.454-2.085-0.665c-1.698-0.427-3.29-0.59-4.774-0.493
				c-0.696,0.057-1.197,0.115-1.506,0.174c-0.561,0.098-1.14,0.279-1.737,0.55c-0.617,0.269-1.391,0.763-2.315,1.476
				c-0.464,0.35-0.87,0.667-1.216,0.958l-1.68,0.577c-0.096,0-0.212-0.01-0.349-0.029c-0.248-0.019-0.491-0.049-0.724-0.087
				c-0.212-0.059-0.435-0.144-0.666-0.261l-0.288-0.144l-0.202-0.9l-0.984-0.491C0.595,21.386,0.529,21.33,0.47,21.27
				c-0.154-0.155-0.232-0.317-0.232-0.492c0-0.136,0.011-0.271,0.028-0.406l0.03-0.146c0.211-0.346,0.491-0.761,0.84-1.243
				c0.675-0.966,1.359-1.766,2.053-2.404c0.773-0.695,1.439-1.206,2-1.533c0.424-0.29,0.936-0.529,1.533-0.723
				c1.893-0.715,3.562-1.247,5.009-1.595c1.157-0.25,2.373-0.444,3.647-0.579c1.2-0.131,2.907-0.239,5.123-0.317
				c0.03,0,0.06,0,0.088,0c1.468-0.039,2.886-0.077,4.255-0.115c0.271,0,0.521,0,0.752,0c1.587-0.017,2.929-0.025,4.024-0.028
				c1.638-0.011,2.728-0.011,3.271,0c0.06,0,0.106,0,0.145,0c0.774,0.02,1.447,0.152,2.028,0.404
				c0.307,0.115,0.539,0.241,0.693,0.376l0.232-0.29l0.231,0.232l0.202-0.232l0.29,0.203l0.144-0.144l0.232,0.087l0.088-0.232
				l0.26,0.146l0.144-0.203l0.262,0.173l0.117-0.259l0.346,0.115l0.057-0.262l0.32,0.146v-0.348l0.347,0.115v-0.26l0.376,0.027
				l0.552-0.406l0.52,0.147c0.444,0.095,0.956,0.212,1.536,0.348c1.755,0.346,3.655,0.616,5.699,0.809
				c2.047,0.155,3.872,0.232,5.474,0.232c0.578,0,1.253-0.019,2.026-0.057c0.426,0,1.101-0.032,2.026-0.089
				c1.447-0.058,3.193-0.185,5.238-0.376c2.048-0.212,3.86-0.444,5.444-0.696c1.68-0.248,4.041-0.79,7.091-1.619
				c1.525-0.405,2.877-0.781,4.053-1.13C78.102,9.419,77.057,10.241,75.94,11.108z`,
            }),
          });
        }
        function p2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 90.25 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M88.842,8.021c0.247,0,0.37,0.11,0.37,0.334v2.447h-3.931
				c-0.123,0-0.766,0-1.927,0c-1.139,0.023-2.411,0.062-3.82,0.111c-1.384,0-2.769,0.013-4.153,0.038
				c-1.286,0.025-2.151,0.037-2.595,0.037c0,0.321-0.1,0.581-0.298,0.778c-0.519,0.521-1.001,0.778-1.446,0.778
				c-0.198,0-0.457-0.135-0.778-0.408c-0.322-0.32-0.569-0.543-0.743-0.667c-0.098,0-0.234-0.025-0.406-0.075
				c-0.124-0.024-0.284-0.087-0.482-0.185l-0.705-0.223c-0.099-0.049-0.322-0.074-0.668-0.074c-0.372-0.049-0.829-0.074-1.372-0.074
				c-0.52,0-1.138,0.025-1.854,0.074c-0.643,0-1.297,0.025-1.966,0.074c0,0.1-0.024,0.223-0.073,0.371
				c-0.075,0.173-0.111,0.31-0.111,0.407l-0.26,0.112c-0.099,0.025-0.223,0.038-0.37,0.038c0,0.073-0.014,0.197-0.038,0.371
				c-0.024,0.098-0.037,0.247-0.037,0.445c-0.05,0.196-0.073,0.443-0.073,0.741h-0.298c-1.014,0-2.126,0.012-3.336,0.037
				c-1.187,0-2.325,0.012-3.411,0.037c-1.063,0.05-1.966,0.074-2.708,0.074c-0.741,0.025-1.187,0.037-1.335,0.037
				c-0.098,0.025-0.271,0.049-0.519,0.074c-0.223,0.025-0.482,0.049-0.779,0.074c-0.321,0.073-0.643,0.124-0.964,0.149
				c-0.296,0.074-0.531,0.124-0.705,0.148h-0.111l-0.186-0.446c-0.049-0.272-0.074-0.556-0.074-0.853
				c-0.048-0.247-0.074-0.469-0.074-0.668c0-0.221,0-0.396,0-0.518c-0.148,0.075-0.421,0.136-0.815,0.185
				c-0.421,0.049-0.866,0.124-1.335,0.222c-0.445,0.076-0.877,0.161-1.298,0.262c-0.42,0.048-0.68,0.073-0.778,0.073
				c0,0.148-0.013,0.296-0.038,0.444c-0.075,0.149-0.111,0.26-0.111,0.334c0,1.26,0.197,2.682,0.594,4.265
				c0.396,1.507,0.829,2.942,1.297,4.302c0.495,1.309,0.927,2.409,1.3,3.299c0.395,0.866,0.592,1.31,0.592,1.335l0.148,0.26
				l-0.296,0.111c-0.124,0.074-0.396,0.198-0.816,0.372c-0.371,0.198-0.877,0.444-1.52,0.742c-0.668,0.272-1.57,0.715-2.707,1.334
				h-0.26c-0.419-0.545-0.865-1.483-1.335-2.819c-0.47-1.335-0.914-2.731-1.333-4.19c-0.421-1.434-0.768-2.794-1.04-4.079
				c-0.296-1.311-0.519-2.165-0.667-2.559c-0.222,0.123-0.544,0.271-0.964,0.443c-0.099,0-0.16,0.038-0.185,0.111
				c0,0.026-0.038,0.038-0.111,0.038c-0.125,0.223-0.334,0.334-0.63,0.334c-1.21,0.297-2.176,0.309-2.894,0.038
				c-0.691-0.271-1.149-0.495-1.371-0.668c-0.05,0.075-0.111,0.124-0.186,0.147l-0.668,0.335c-0.766,1.73-1.223,3.151-1.371,4.265
				c-0.124,1.112-0.186,1.928-0.186,2.447v0.593c0,0.1-0.024,0.162-0.074,0.186c-0.05,0-0.075,0.037-0.075,0.112
				c-0.419,0-1.816-0.631-4.19-1.892l-0.222-0.111v-0.112c0.296-0.668,0.605-1.372,0.927-2.113c0.273-0.767,0.544-1.471,0.816-2.115
				c0.247-0.642,0.445-1.223,0.593-1.742c0.148-0.444,0.234-0.717,0.26-0.815c0-0.098-0.038-0.197-0.111-0.297
				c-0.049-0.098-0.074-0.197-0.074-0.296c-0.075-0.049-0.161-0.148-0.259-0.296c-0.1-0.099-0.199-0.2-0.298-0.297
				c-0.123-0.1-0.211-0.209-0.26-0.333c-0.148-0.073-0.494-0.112-1.038-0.112c-0.618,0-1.311,0.013-2.077,0.039
				c-0.791,0.049-1.669,0.085-2.633,0.11c-0.913,0.075-1.767,0.125-2.558,0.148l-3.115,0.111c-1.953,0-4.918,1.768-8.899,5.303
				l-0.297,0.296c-0.173,0.248-0.419,0.458-0.741,0.63c-0.346,0.42-0.569,0.679-0.667,0.779c-0.125,0.099-0.223,0.15-0.298,0.15
				c-0.196,0-0.383-0.15-0.555-0.448c-0.149-0.395-0.224-0.702-0.224-0.927c0-0.123-0.012-0.505-0.037-1.149
				c-0.023-0.619-0.086-1.348-0.185-2.188c-0.073-0.816-0.148-1.657-0.223-2.521c-0.098-0.841-0.198-1.535-0.295-2.077
				c-0.272-0.544-0.224-1.087,0.147-1.632c0.247-0.273,0.569-0.409,0.964-0.409c0.42,0,0.68,0,0.779,0h17.243
				c0.125,0,0.273,0,0.445,0c0.149,0,0.26-0.049,0.334-0.148V9.281c0.099-0.074,0.162-0.147,0.187-0.223
				c0.024-0.074,0.073-0.173,0.147-0.297c0.173-0.123,0.433-0.185,0.778-0.185c0.372,0,0.631-0.05,0.779-0.147
				c0.149-0.051,0.297-0.074,0.446-0.074c0.172,0,0.321-0.05,0.445-0.149c0.37-0.098,0.678-0.209,0.926-0.333
				c0.296-0.124,0.506-0.297,0.63-0.519c0.197-0.124,0.309-0.321,0.333-0.593c0.049-0.249,0.1-0.618,0.148-1.114V5.314
				c0-0.445,0.111-0.755,0.334-0.929c0.198-0.099,0.469-0.148,0.815-0.148h0.296l0.111,0.148l0.817,0.78
				c0,0.173,0.309,0.135,0.926-0.111h0.482c0.148,0.073,0.271,0.272,0.37,0.592c0.075,0.322,0.149,0.656,0.224,1.001
				C30.659,6.55,31.462,6.5,32.328,6.5c0.841,0,1.335,0.05,1.483,0.148c0.099,0.025,0.186,0.038,0.26,0.038
				c0.098,0.05,0.235,0.075,0.408,0.075h9.457c0-0.249-0.038-0.458-0.111-0.631l-0.112-0.295h1.669v0.295
				c0,0.125,0.025,0.198,0.074,0.223c0,0.023,0.025,0.037,0.073,0.037H68.41c0-0.048-0.012-0.135-0.037-0.26
				c0-0.098,0-0.259,0-0.482c-0.075-0.148-0.111-0.346-0.111-0.592L68.78,4.09l1.558-0.148h0.148v2.707l-0.112,0.038
				c-0.024,0.05-0.06,0.075-0.11,0.075c-0.025,0.023-0.05,0.061-0.075,0.111c0.198,0.223,0.581,0.507,1.15,0.852
				c0.593,0.322,1.249,0.482,1.966,0.482c0.271,0.026,0.765,0.05,1.482,0.075c0.717,0.05,1.508,0.075,2.374,0.075
				s1.743-0.025,2.633-0.075c0.964-0.024,1.817-0.038,2.559-0.038c0.792,0,1.458-0.011,2.002-0.037c0.494,0,0.803,0,0.926,0
				c0.099,0,0.334-0.036,0.706-0.111c0.272-0.048,0.593-0.111,0.965-0.184c0.418-0.025,0.802-0.051,1.149-0.076
				C88.472,7.785,88.72,7.847,88.842,8.021z M31.438,13.027c-0.199,0-0.396,0.086-0.594,0.26c-0.173,0.222-0.259,0.494-0.259,0.816
				c0,0.321,0.086,0.592,0.259,0.815c0.198,0.198,0.395,0.297,0.594,0.297h2.706c0.223,0,0.445-0.099,0.668-0.297
				c0.173-0.223,0.259-0.494,0.259-0.815c0-0.322-0.086-0.594-0.259-0.816c-0.224-0.173-0.445-0.26-0.668-0.26H31.438z
				 M2.735,12.953c0.075,0.495,0.148,1.001,0.222,1.521c0.076,0.593,0.125,1.162,0.149,1.706c0.075,0.47,0.136,0.89,0.186,1.26
				c0.223-0.222,0.532-0.494,0.927-0.816c0.445-0.346,0.889-0.717,1.334-1.111c0.99-0.717,1.941-1.434,2.856-2.152
				c0.939-0.668,1.78-1.273,2.521-1.816H2.55C2.574,11.938,2.636,12.408,2.735,12.953z`,
            }),
          });
        }
        function Z1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 72 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M2.485,19.214c-0.226-0.169-0.479-0.254-0.761-0.254
				c-0.263,0.02-0.479,0.084-0.648,0.198c-0.114,0.093-0.228,0.244-0.338,0.452c-0.094,0.167-0.131,0.355-0.113,0.563
				c0,0.17,0.036,0.331,0.113,0.479c0.037,0.15,0.159,0.292,0.365,0.424c0.188,0.113,0.367,0.179,0.537,0.198
				c0.205,0.018,0.403-0.039,0.591-0.17c0.149-0.056,0.3-0.168,0.45-0.338c0.113-0.132,0.191-0.311,0.227-0.536
				c0.018-0.208-0.008-0.386-0.085-0.535C2.749,19.505,2.636,19.345,2.485,19.214z M71.227,14.506
				c-0.527,0.603-1.24,1.26-2.143,1.973c-1.787,1.466-3.524,2.547-5.217,3.242c-1.953,0.827-3.861,1.458-5.722,1.891
				c-1.655,0.395-3.525,0.676-5.61,0.846c-1.656,0.131-4.598,0.216-8.826,0.252h-5.837v-0.534l-0.395-0.509l-0.478-0.027
				l-0.284,0.367l-0.507-0.141c-0.037-0.432-0.131-0.903-0.282-1.411c-0.319-1.013-0.751-1.701-1.298-2.057
				c-0.713-0.453-1.362-0.771-1.946-0.959c-0.638-0.206-1.334-0.29-2.084-0.253c-0.734,0.055-1.373,0.196-1.918,0.421
				c-0.49,0.189-1.006,0.509-1.551,0.959c-0.469,0.357-0.78,0.564-0.93,0.62c-0.057,0.036-0.132,0.056-0.227,0.056
				c-0.15,0-0.263,0.009-0.337,0.029c-0.227,0.02-0.499-0.103-0.819-0.368c-0.169-0.15-0.291-0.252-0.365-0.309
				c-0.134-0.113-0.228-0.18-0.283-0.196c-0.131-0.056-0.912-0.056-2.34,0c-1.071,0.037-2.049,0.094-2.934,0.168
				c-2.931,0.208-4.971,0.387-6.118,0.537c-1.033,0.131-2.021,0.271-2.961,0.422c-1.165,0.189-1.832,0.31-2.001,0.366
				c-0.132,0.038-0.799,0.338-2.003,0.902c-1.258,0.583-2,0.913-2.226,0.987c-0.415,0.169-0.725,0.272-0.933,0.311
				c-0.355,0.093-0.674,0.093-0.958,0c-0.3-0.075-0.573-0.197-0.818-0.368c-0.225-0.131-0.366-0.262-0.422-0.393
				c-0.15-0.188-0.255-0.378-0.312-0.565c-0.111-0.283-0.159-0.573-0.139-0.875c0.018-0.358,0.028-0.574,0.028-0.649
				c0.017-0.112,0.084-0.329,0.196-0.648c0.133-0.357,0.62-1.335,1.466-2.932c0.865-1.617,1.374-2.501,1.524-2.651
				C3.387,12.824,3.5,12.72,3.557,12.7c0.075-0.057,0.169-0.085,0.282-0.085c0.018,0,0.168,0.02,0.451,0.057
				c0.207,0.038,0.366,0.028,0.48-0.028c0.112-0.055,0.187-0.15,0.226-0.281v-0.196l0.535,0.167l0.48-0.337l1.494-0.254
				c0.677-0.169,1.409-0.339,2.198-0.507c2.576-0.526,5.292-0.958,8.149-1.297c2.857-0.338,6.503-0.546,10.94-0.621
				c2.199-0.037,4.126-0.037,5.779,0l0.481,0.453l0.649-0.339l0.646,0.394l0.481-0.394l0.535,0.451l0.677-0.338l0.563,0.48
				l0.591-0.338l0.622,0.366l0.535-0.282L41,10.163l0.593-0.281l0.45,0.422l0.592-0.281l0.51,0.478l0.733-0.283l0.563,0.424
				l0.731-0.283l0.481,0.453l0.62-0.283l1.606,0.283c1.26,0.206,2.397,0.433,3.414,0.676c1.033,0.226,2.78,0.743,5.243,1.551
				c1.259,0.396,2.407,0.78,3.441,1.156l0.195,0.057c0.152,0.057,0.302,0.103,0.453,0.142c0.49,0.075,0.874,0.018,1.156-0.17
				c0.281-0.206,0.422-0.441,0.422-0.703c0.02-0.151-0.019-0.36-0.114-0.623c-0.056-0.131-0.329-0.355-0.816-0.675
				c-0.509-0.282-0.996-0.509-1.468-0.678c-0.148-0.037-0.45-0.142-0.902-0.31c-0.15-0.018-0.245-0.065-0.281-0.142
				c-0.039-0.095-0.039-0.179,0-0.253c0.019-0.132,0.113-0.217,0.281-0.253c0.132-0.057,0.236-0.085,0.311-0.085
				c0.076,0,0.216,0.02,0.424,0.056c0.225,0.058,1.062,0.283,2.509,0.677c1.597,0.471,2.856,0.865,3.778,1.184
				c0.882,0.263,2.03,0.694,3.441,1.297C70.08,14.018,70.7,14.28,71.227,14.506z`,
            }),
          });
        }
        function Q1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 91.917 31.583",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M32.893,10.707v0.225h0.274v-0.22l9.901-0.274l1.03-0.604
		l0.282,0.253l1.118-0.683l0.354,0.219l1.106-0.613l0.356,0.204c1.006-0.794,1.811-1.141,2.412-1.042
		c0.22,0.034,0.34,0.121,0.362,0.264c0.023,0.142-0.064,0.27-0.26,0.38c-0.325,0.185-0.544,0.401-0.661,0.649
		c-0.104,0.219-0.114,0.438-0.034,0.656c0.077,0.206,0.213,0.368,0.41,0.492c0.206,0.125,0.428,0.174,0.668,0.148v0.795h0.215v-0.57
		l3.089,0.376v0.567h0.225v-0.671c5.453,0.518,10.45,0.33,15-0.568l14.679,5.917c-0.907,0.704-2.414,1.6-4.518,2.69
		c-2.105,1.09-4.401,1.697-6.887,1.822c-2.487,0.124-4.617-0.062-6.388-0.551c-1.772-0.489-4.205-1.121-7.292-1.898
		c-3.09-0.78-5.804-1.183-8.139-1.213c-0.01-0.077-0.042-0.165-0.09-0.262c-0.098-0.197-0.243-0.347-0.425-0.451
		c-0.186-0.103-0.383-0.157-0.59-0.171h-0.144c-0.17,1.248-0.504,2.195-1.001,2.843c-4.658-1-9.536-1.547-14.627-1.639V17.59
		l-0.291-0.008v0.213c-10.026-0.095-16.556,0.37-19.596,1.398c-3.457,1.063-7.002,2.866-10.634,5.413
		c-1.738,0.187-1.931-1.318-0.581-4.522c1.674-2.315,4.385-4.312,8.134-5.992C14.099,12.405,21.613,11.276,32.893,10.707z`,
            }),
          });
        }
        function X1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 66 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M6.958,18.46c-0.298,0.022-0.644,0.161-1.032,0.413
				c-0.367,0.229-0.733,0.528-1.1,0.894c-0.321,0.32-0.549,0.652-0.689,0.997c-0.089,0.252-0.192,0.699-0.307,1.341
				c-0.093,0.526-0.093,0.984,0,1.374c0.045,0.23,0.183,0.619,0.414,1.168c0.181,0.481,0.558,0.928,1.132,1.342
				c0.598,0.434,1.216,0.72,1.857,0.86c0.619,0.113,1.248,0.056,1.889-0.174c0.598-0.229,1.1-0.551,1.513-0.964
				c0.46-0.456,0.78-0.916,0.962-1.372c0.16-0.482,0.239-1.079,0.239-1.789c0-0.709-0.192-1.374-0.583-1.994
				c-0.344-0.595-0.835-1.121-1.479-1.58c-0.457-0.32-0.984-0.503-1.58-0.55C7.965,18.403,7.554,18.415,6.958,18.46z M64.805,21.21
				c0.503,1.259,0.8,2.29,0.891,3.095c-0.594-0.941-1.453-1.982-2.578-3.129c-2.29-2.269-4.789-3.93-7.491-4.984
				c-2.476-0.94-4.491-1.535-6.05-1.788c-0.618-0.09-1.26-0.147-1.925-0.171c-0.298,0-0.883,0-1.752,0
				c-2.086,0.047-4.194,0.356-6.326,0.929c-0.686,0.183-1.328,0.377-1.922,0.584l-0.69,0.275l0.07,0.241
				c0.022,0.161-0.01,0.285-0.104,0.378c-0.138,0.09-0.47,0.251-0.998,0.479c-0.527,0.207-0.856,0.31-0.995,0.31
				c-0.138-0.023-0.253-0.137-0.343-0.344c-0.025-0.045-0.104-0.241-0.242-0.585c-0.184-0.549-0.527-1.12-1.032-1.717
				c-0.802-0.962-1.696-1.5-2.68-1.614c-1.375-0.184-2.578,0.264-3.609,1.339c-0.322,0.321-0.607,0.688-0.858,1.099l-0.276,0.552
				c-0.297-0.183-0.697-0.31-1.203-0.378c-1.009-0.162-1.994-0.024-2.958,0.412c-0.8,0.366-1.5,0.951-2.093,1.752
				c-0.209,0.251-0.379,0.507-0.516,0.757l-0.174,0.308c-0.367-0.045-0.778-0.079-1.236-0.103c-0.917-0.021-1.604,0.103-2.063,0.378
				c-0.459,0.276-0.882,0.721-1.271,1.341c-0.116,0.183-0.242,0.4-0.38,0.653c-0.09,0.206-0.148,0.342-0.171,0.412
				c-0.09,0.138-0.171,0.195-0.239,0.172l-0.103-0.068v0.55c0,0.435-0.037,0.825-0.104,1.168c-0.091,0.414-0.356,0.976-0.79,1.686
				c-0.414,0.685-0.747,1.145-0.999,1.374c-0.365,0.366-0.859,0.688-1.478,0.962c-0.848,0.414-1.684,0.608-2.509,0.584
				c-0.758-0.021-1.787-0.376-3.094-1.065c-0.389-0.23-0.792-0.469-1.203-0.72l-0.482-0.344l-2.129-0.482l-0.139-0.345
				C0.77,24.866,1,24.5,1.252,24.063c0.503-0.869,0.823-1.604,0.961-2.2c0.16-0.572,0.38-1.33,0.655-2.268l0.345-1.203l0.72-0.38
				l-0.378-0.409c0.069-0.278,0.148-0.552,0.242-0.827c0.228-0.528,0.411-0.814,0.549-0.86c0.113-0.021,0.262-0.021,0.445,0
				c0.16,0,0.288-0.034,0.38-0.102c0.228-0.116,0.342-0.242,0.342-0.38c-0.047-0.137-0.058-0.228-0.034-0.273
				C5.548,15,5.674,14.918,5.858,14.918c0.022,0,0.149,0.034,0.377,0.107c0.183,0.067,0.296,0.055,0.342-0.037
				c0.048-0.045,0.103-0.218,0.173-0.516c0.07-0.253,0.161-0.414,0.275-0.482c0.183-0.138,0.401-0.138,0.652,0
				c0.114,0.092,0.208,0.138,0.276,0.138c0.09,0.022,0.184,0,0.276-0.07c0.138-0.113,0.206-0.285,0.206-0.513
				c-0.025-0.185,0.068-0.344,0.274-0.482c0.208-0.115,0.402-0.137,0.585-0.069c0.023,0,0.091,0.023,0.207,0.069
				c0.045,0.045,0.081,0.057,0.103,0.034c0.091-0.045,0.136-0.149,0.136-0.31c-0.021-0.185,0-0.321,0.071-0.412
				c0.228-0.23,0.448-0.332,0.653-0.31c0.138,0,0.217,0,0.239,0c0.093,0,0.184-0.034,0.276-0.104c0.069-0.091,0.15-0.194,0.24-0.309
				c0.022-0.046,0.068-0.115,0.137-0.204c0.023-0.046,0.184-0.14,0.479-0.277c0.141-0.068,0.277-0.137,0.414-0.205l0.068-0.242
				l1.617-0.893c1.285-0.71,2.508-1.306,3.679-1.787c1.145-0.482,2.728-0.985,4.742-1.514c1.008-0.274,1.915-0.494,2.715-0.652
				l1.031,0.481l0.48-0.138l0.482,0.034c0.391,0.045,0.779,0.079,1.168,0.104c1.261,0.045,2.326-0.025,3.2-0.208
				c1.35-0.297,2.462-0.745,3.332-1.338c0.436-0.299,0.746-0.575,0.93-0.827l2.13-0.275l0.378,0.482l0.034,0.377l4.88,0.379
				c1.766,0.251,3.221,0.539,4.367,0.86c1.306,0.388,2.701,0.916,4.193,1.581c1.375,0.616,2.462,1.214,3.264,1.786
				c0.872,0.596,1.765,1.271,2.684,2.027c1.052,0.917,1.934,1.787,2.643,2.612C62.283,16.203,63.795,18.668,64.805,21.21z`,
            }),
          });
        }
        function q1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92.059 31.75",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M35.679,8.482c0.671-0.123,1.207-0.293,1.608-0.513
	c0.455-0.247,0.874-0.417,1.261-0.513c0.43-0.107,0.862-0.132,1.296-0.075c0.38,0.05,0.625,0.114,0.735,0.192
	c0.056,0.039,0.074,0.072,0.053,0.102l0.664-0.445l3.021-0.071l0.12,0.437c0.14,0.291,0.349,0.434,0.628,0.427
	c0.279-0.006,0.494-0.152,0.646-0.44c0.078-0.143,0.125-0.285,0.143-0.428l0.721-0.018l0.081,0.512c0.11,0.345,0.3,0.527,0.57,0.548
	c0.271,0.02,0.493-0.137,0.668-0.472c0.089-0.167,0.149-0.335,0.183-0.508l0.744,0.031l0.08,0.494c0.106,0.333,0.297,0.51,0.57,0.53
	c0.276,0.024,0.504-0.125,0.681-0.445c0.09-0.16,0.152-0.323,0.188-0.486l0.712-0.017l0.111,0.556
	c0.132,0.375,0.333,0.572,0.605,0.592c0.273,0.021,0.495-0.135,0.664-0.467c0.083-0.167,0.14-0.334,0.17-0.503
	c16.556,1.43,29.404,5.79,38.545,13.079c-9.246,2.754-18.309,2.983-27.186,0.687c-4.219-4.158-9.479-6.108-15.783-5.85v2.899
	l-2.014-1.201c-0.085-0.455-0.29-0.899-0.61-1.336c-0.645-0.871-1.556-1.257-2.735-1.159c-0.992,0.086-1.74,0.531-2.245,1.336
	c-0.157,0.252-0.28,0.524-0.37,0.815c-0.044,0.149-0.074,0.271-0.089,0.365L39.6,19.939h-1.817l-0.37-0.343
	c0.044-0.434-0.036-0.898-0.241-1.396c-0.416-0.988-1.253-1.637-2.512-1.946c-1.229-0.299-2.288-0.034-3.176,0.798
	c-0.203,0.184-0.479,0.496-0.829,0.936c-0.252,0.315-0.434,0.482-0.543,0.504c-0.303,0.058-0.634,0.052-0.994-0.02
	c-0.351-0.071-0.658-0.187-0.922-0.351c-0.101-0.063-0.216-0.165-0.347-0.308c-0.187-0.203-0.304-0.325-0.352-0.369
	c-0.317-0.298-0.716-0.457-1.194-0.477c-0.787-0.033-1.996,0.074-3.625,0.324c-1.972,0.301-3.533,0.691-4.682,1.172
	c-1.42,0.594-2.564,1.134-3.435,1.617c-1.013,0.561-1.605,1.021-1.777,1.38c-0.152,0.313-0.247,0.619-0.285,0.918
	c-0.024,0.169-0.052,0.414-0.085,0.73c-0.057,0.304-0.104,0.493-0.143,0.57c-0.065,0.131-0.199,0.252-0.401,0.366
	c-0.419,0.23-0.655,0.358-0.708,0.383c-0.294,0.134-0.573,0.195-0.837,0.182c-0.324-0.014-1.113-0.337-2.37-0.966
	c-1.295-0.651-2.226-1.206-2.793-1.667c-0.897-0.727-1.79-1.556-2.677-2.484c-1.173-1.229-1.69-2.023-1.551-2.379
	c0.14-0.354,1.167-1.135,3.083-2.343c1.752-1.102,2.822-1.723,3.211-1.863c0.169-0.059,0.391-0.078,0.664-0.058
	c0.342,0.027,0.637,0.021,0.887-0.018C8.93,12.81,9.251,12.713,9.74,12.54c0.912-0.324,1.5-0.529,1.764-0.615
	c1.972-0.662,4.054-1.219,6.245-1.671c2.112-0.437,4.435-0.819,6.972-1.148c2.067-0.271,3.151-0.428,3.251-0.472
	c0.081-0.036,0.228-0.125,0.441-0.268c0.098-0.068,0.263-0.102,0.495-0.102c0.199,0,0.486-0.002,0.864-0.005
	c0.315,0.016,0.567,0.075,0.757,0.178c0.285,0.158,0.578,0.26,0.877,0.308c0.458,0.077,1.099,0.082,1.924,0.013
	C34.354,8.675,35.136,8.583,35.679,8.482z M5.594,17.641c0-0.288-0.101-0.533-0.303-0.734c-0.202-0.203-0.447-0.303-0.735-0.303
	c-0.288,0-0.533,0.1-0.735,0.303c-0.202,0.201-0.303,0.446-0.303,0.734s0.102,0.533,0.303,0.736c0.202,0.2,0.447,0.302,0.735,0.302
	c0.288,0,0.533-0.102,0.735-0.302C5.492,18.174,5.594,17.929,5.594,17.641z M43.68,9.115c0-0.3-0.105-0.555-0.316-0.766
	s-0.466-0.316-0.766-0.316s-0.555,0.105-0.766,0.316s-0.316,0.466-0.316,0.766c0,0.299,0.105,0.555,0.316,0.766
	c0.211,0.211,0.466,0.316,0.766,0.316s0.555-0.105,0.766-0.316C43.574,9.669,43.68,9.414,43.68,9.115z`,
            }),
          });
        }
        function _1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 87.167 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M67.82,18.114c0.12,0.104,0.253,0.173,0.396,0.216h2.052
				l0.094-0.063c0.101-0.04,0.184-0.102,0.245-0.184c0.224-0.225,0.338-0.51,0.338-0.857c-0.021-0.347-0.124-0.612-0.308-0.796
				c-0.062-0.042-0.123-0.082-0.184-0.123l-0.092-0.029h-2.237c-0.123,0.06-0.244,0.152-0.367,0.275
				c-0.226,0.243-0.337,0.521-0.337,0.826S67.553,17.931,67.82,18.114z M86.937,17.685c-0.653,0.43-1.419,0.898-2.297,1.411
				c-1.758,1.041-3.227,1.766-4.412,2.174c-2.124,0.757-4.188,1.267-6.189,1.532c-0.611,0.062-1.185,0.103-1.715,0.123L41.53,23.078
				c-0.021-0.061-0.062-0.112-0.123-0.153c-0.123-0.123-0.266-0.215-0.428-0.276c-0.144-0.08-0.356-0.144-0.644-0.183l-0.368-0.063
				l-5.851,0.031l-0.031,4.688l-0.214,0.123c-0.165,0.08-0.328,0.121-0.493,0.121c-0.142,0-0.294-0.041-0.457-0.121l-0.246-0.095
				l-0.06-4.84l-0.276-0.061l-0.062-0.83l-0.184,0.37L27.989,21.7l-0.153-0.397l-0.4-0.033l-0.152,0.459l-3.31,0.124l-0.214-0.397
				l-0.459-0.034l-0.214,0.432h-3.432l-0.245-0.46h-0.276l-0.244,0.398l-3.218,0.062l-0.275-0.397h-0.308l-0.214,0.428l-3.4-0.123
				l-0.307-0.457h-0.459l-0.216,0.183l-0.732,0.367c-0.636,0.041-1.33,0.082-2.085,0.122c-1.513,0.082-2.594,0.111-3.248,0.092
				c-0.756-0.021-1.288-0.04-1.592-0.06c-0.267-0.021-0.451-0.053-0.554-0.093c-0.062-0.042-0.123-0.093-0.185-0.154l-0.06-0.092
				l-1.38,0.123c-0.082-0.063-0.131-0.132-0.152-0.215c-0.021-0.041-0.042-0.081-0.062-0.121l-0.03-1.503L0.231,19.37
				c-0.021-0.204-0.042-0.438-0.063-0.704c-0.021-0.552-0.021-0.99,0-1.318c0.021-0.327,0.063-0.673,0.124-1.041l0.121-0.429v-1.623
				c0-0.041,0-0.082,0-0.123c0.021-0.122,0.05-0.215,0.092-0.276c0.063-0.06,0.123-0.093,0.185-0.093
				c0.021-0.021,0.041-0.021,0.062,0h1.502l0.335-0.061c0.286-0.041,0.542-0.071,0.766-0.091c0.227-0.021,1.328,0,3.31,0.062
				c1,0.02,1.972,0.041,2.911,0.062l0.95,0.397l0.121,0.123l0.521-0.032l0.307-0.427l3.339-0.123l0.275,0.397h0.276l0.338-0.397
				h3.094l0.275,0.427l0.308,0.032l0.245-0.459l3.43-0.032l0.215,0.43l0.462-0.03l0.242-0.429l3.218,0.123l0.153,0.397l0.429,0.029
				l0.183-0.427l4.107-0.123l0.153,0.398l0.062-0.858l0.276-0.031V4.878l0.151-0.122c0.123-0.082,0.267-0.124,0.432-0.124
				c0.183,0,0.377,0.042,0.58,0.124c0.123,0.04,0.215,0.082,0.276,0.122l0.092,7.876h4.963l0.583,0.549l0.581,1.259l0.214,0.029
				c0.184,0.021,0.328-0.021,0.43-0.123c0.227-0.184,0.235-0.469,0.029-0.856c-0.059-0.123-0.142-0.246-0.244-0.368l-0.121-0.153
				l2.971,0.123l0.583,1.133l0.091,0.062c0.062,0.061,0.134,0.102,0.216,0.122c0.223,0.103,0.419,0.062,0.582-0.122
				c0.142-0.163,0.132-0.408-0.032-0.734c-0.041-0.123-0.101-0.235-0.183-0.339l-0.093-0.121l1.899,0.183l0.582,1.104l0.063,0.062
				c0.082,0.019,0.152,0.041,0.216,0.06c0.223,0.041,0.397-0.041,0.519-0.244c0.122-0.184,0.114-0.408-0.029-0.675
				c-0.042-0.082-0.092-0.162-0.153-0.245l-0.063-0.092h1.84l0.52,1.073l0.062,0.062c0.062,0.038,0.133,0.07,0.216,0.091
				c0.204,0.062,0.408-0.021,0.611-0.245c0.123-0.144,0.102-0.357-0.062-0.644c-0.042-0.082-0.091-0.162-0.152-0.245l-0.093-0.123
				h1.901l0.489,1.012l0.091,0.093c0.083,0.062,0.165,0.1,0.245,0.123c0.245,0.101,0.45,0.009,0.614-0.277
				c0.08-0.144,0.062-0.347-0.062-0.611c-0.041-0.062-0.094-0.133-0.153-0.216l-0.092-0.092l1.623-0.063l0.43,1.043l0.093,0.062
				c0.102,0.041,0.192,0.082,0.274,0.122c0.307,0.082,0.531,0.032,0.673-0.152c0.123-0.143,0.103-0.367-0.06-0.675
				c-0.041-0.103-0.103-0.203-0.183-0.307l-0.094-0.121l1.685,0.06l0.583,1.043l0.062,0.091c0.083,0.041,0.152,0.07,0.214,0.094
				c0.225,0.06,0.409-0.012,0.551-0.216c0.144-0.205,0.134-0.429-0.029-0.673c-0.063-0.062-0.133-0.133-0.214-0.216l-0.093-0.062
				l1.868,0.031l0.46,0.888l0.092,0.031c0.062,0.02,0.124,0.041,0.186,0.062c0.202,0,0.346-0.082,0.427-0.246
				c0.103-0.183,0.103-0.378,0-0.583c-0.04-0.079-0.092-0.151-0.153-0.213l-0.059-0.063l2.022-0.028l17.095,3.063L86.937,17.685z`,
            }),
          });
        }
        function g2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92 31.75",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M22.304,9.901c4.72,0.455,9.859,0.124,15.423-0.999
		c1.121,0.093,2.207,0.042,3.251-0.144l0.457,0.888c0.027,0.004,0.058,0.007,0.088,0.007c0.207,0,0.376-0.047,0.514-0.14
		c0.142-0.087,0.214-0.198,0.214-0.322c0-0.03-0.004-0.058-0.01-0.085l0.555-0.081c0.014,0.099,0.06,0.184,0.136,0.259
		c0.096,0.089,0.207,0.137,0.341,0.137s0.248-0.048,0.341-0.137c0.089-0.089,0.138-0.198,0.138-0.325
		c0-0.036-0.002-0.071-0.013-0.107l0.5-0.079c0.019,0.093,0.061,0.168,0.135,0.233c0.092,0.092,0.202,0.138,0.339,0.138
		c0.131,0,0.243-0.046,0.337-0.138c0.093-0.089,0.14-0.193,0.14-0.322c0-0.037-0.008-0.076-0.017-0.114l0.548-0.11
		c0.024,0.075,0.063,0.142,0.123,0.201c0.096,0.088,0.209,0.137,0.34,0.137c0.135,0,0.248-0.049,0.341-0.137
		c0.093-0.09,0.136-0.196,0.136-0.32c0-0.054-0.003-0.102-0.022-0.146l0.63-0.169l2.188,0.745c1.712,0.526,3.2,0.87,4.462,1.031
		c1.202,0.155,2.979,0.272,5.339,0.357c3.757,0.137,5.828,0.213,6.215,0.233c4.278,0.242,9.238,0.966,14.88,2.178
		c2.82,0.605,5.214,1.189,7.181,1.747c-1.263,0.902-2.804,1.847-4.63,2.828c-3.651,1.962-6.879,3.13-9.691,3.502
		c-2.84,0.378-6.376,0.508-10.613,0.388c-1.357-0.04-3.012-0.111-4.969-0.219c-2.326-0.128-3.691-0.199-4.103-0.215
		c-1.951-0.083-3.646-0.074-5.094,0.017l-1.579,0.155c-0.427-0.256-0.778-0.333-1.052-0.231c-0.252,0.096-0.486,0.358-0.708,0.793
		c-0.138,0.274-0.355,0.816-0.645,1.63c-0.352,0.964-0.647,1.731-0.893,2.304c-0.167,0.381-0.366,0.625-0.601,0.734
		c-0.233,0.105-0.471,0.065-0.714-0.123c-0.559-0.428-0.973-1.419-1.236-2.969c-0.205,0.06-0.397,0.046-0.57-0.049
		c-0.181-0.093-0.338-0.266-0.464-0.516c-0.538-1.042-1.362-1.922-2.475-2.638c-1.069-0.687-2.243-1.124-3.528-1.319
		c-1.314-0.202-2.541-0.109-3.669,0.276c-1.228,0.42-2.198,1.143-2.913,2.163c-0.104,0.153-0.239,0.231-0.407,0.231
		c-0.174,0-0.366-0.076-0.575-0.231c-0.794-0.634-1.678-1.113-2.659-1.44c-0.929-0.309-1.884-0.461-2.867-0.455
		c-0.964,0.014-1.877,0.176-2.743,0.491c-0.882,0.317-1.64,0.772-2.278,1.363c-0.434,0.402-0.901,0.461-1.396,0.18
		c-1.872-0.786-3.822-1-5.84-0.628c-2.104,0.379-3.919,1.333-5.441,2.857c-0.739-0.107-1.293-1.365-1.662-3.765
		c-2.274-2.26-2.006-4.018,0.822-5.271C8.792,10.623,15.448,9.205,22.304,9.901z M1.574,17.81l0.432-2.184
		C0.738,16.216,0.593,16.944,1.574,17.81z`,
            }),
          });
        }
        function c2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 82.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M35.559,17.937c-2.777,1.284-5.455,2.143-8.031,2.573
					c-2.224,0.379-4.532,0.67-6.933,0.871c-1.995,0.153-3.095,0.253-3.3,0.303c-0.274,0.053-0.54,0.09-0.793,0.114l-0.3,0.038
					c-0.457,0.103-0.723,0.203-0.797,0.303c0,0.153-0.078,0.379-0.229,0.682c-0.151,0.355-0.279,0.569-0.38,0.645l-0.304,0.19
					c-0.049,0-0.124-0.09-0.225-0.266c-0.053-0.152-0.127-0.518-0.229-1.098c-0.077-0.708-0.125-1.164-0.152-1.365
					c-0.127-0.43-0.505-0.974-1.135-1.627c-0.708-0.783-1.402-1.229-2.085-1.327c-0.783-0.103-1.503,0.023-2.159,0.377
					c-0.655,0.329-1.036,0.784-1.136,1.364c-0.152,0.706-0.203,1.313-0.152,1.82c0.103,0.808,0.442,1.741,1.024,2.803
					c0.125,0.302,0.011,0.783-0.341,1.441c-0.254,0.403-0.633,0.855-1.139,1.359c-0.757,0.709-1.352,0.961-1.78,0.759
					c-0.429-0.227-1.085-1.198-1.969-2.914c-0.455-0.888-0.949-1.857-1.479-2.918c-0.279-0.556-0.491-1.68-0.645-3.373
					c-0.049-0.833-0.088-1.629-0.113-2.385v-1.744c0.052-1.338,0.178-2.426,0.38-3.259c0.201-0.961,0.781-2.347,1.741-4.169
					c0.886-1.716,1.491-2.713,1.819-2.991C4.975,3.918,5.466,4.08,6.199,4.636c0.732,0.53,1.327,1.177,1.779,1.933
					c0.203,0.305,0.304,0.492,0.304,0.566c0.05,0.154,0,0.419-0.152,0.798C7.828,8.537,7.601,9.031,7.449,9.411
					c-0.304,0.681-0.456,1.246-0.456,1.702c0.026,0.685,0.054,1.161,0.078,1.44c0.1,0.43,0.253,0.77,0.455,1.024
					c0.452,0.454,0.972,0.781,1.551,0.984c0.455,0.15,0.847,0.203,1.174,0.15c0.456-0.052,0.974-0.251,1.555-0.604
					c0.835-0.508,1.441-1.163,1.818-1.972c0.152-0.302,0.292-0.858,0.417-1.669l0.303-1.511c0.052-0.203,0.102-0.317,0.15-0.343
					c0.053-0.025,0.114-0.037,0.19-0.037c0.025,0.024,0.178,0.252,0.457,0.682c0.277,0.479,0.44,0.77,0.491,0.87
					c0.076,0.076,0.238,0.139,0.49,0.189c0.129,0,0.241,0,0.345,0c0.199,0,0.301,0.052,0.301,0.149l4.281,0.269
					c3.082,0.151,5.076,0.354,5.987,0.605c0.275,0.076,0.945,0.216,2.006,0.418c0.962,0.202,1.769,0.377,2.425,0.531
					c1.517,0.402,2.881,0.944,4.092,1.628c0.48,0.251,0.936,0.52,1.362,0.794c0.557,0.354,0.999,0.621,1.327,0.797
					c0.53,0.378,0.796,0.594,0.796,0.644C37.884,16.809,36.719,17.403,35.559,17.937z M6.275,22.366
					c-0.05-0.074-0.089-0.162-0.115-0.264c-0.05-0.078-0.15-0.114-0.303-0.114c-0.201-0.05-0.605,0.114-1.211,0.493
					c-0.379,0.251-0.733,0.491-1.062,0.719c-0.101,0.075-0.14,0.202-0.115,0.379l0.076,0.227c0.229,0.381,0.444,0.758,0.645,1.135
					c0.507,0.759,0.834,1.165,0.986,1.214c0.175,0.052,0.492-0.113,0.946-0.492c0.403-0.303,0.632-0.518,0.681-0.646
					c0.053-0.076-0.013-0.491-0.189-1.249C6.463,22.985,6.349,22.518,6.275,22.366z M2.978,11.685
					c-0.202,0.024-0.403,0.126-0.604,0.302c-0.306,0.275-0.493,1.073-0.57,2.386l-0.037,1.857c0,0.505,0.037,1.035,0.114,1.591
					c0.102,1.087,0.263,1.819,0.493,2.197c0.177,0.279,0.402,0.454,0.682,0.529C3.308,20.6,3.56,20.59,3.811,20.51
					c0.253-0.074,1.049-0.771,2.388-2.084c1.337-1.314,1.995-2.057,1.97-2.234c0-0.177-0.72-0.921-2.159-2.234
					c-1.363-1.264-2.185-1.971-2.464-2.122C3.37,11.733,3.179,11.685,2.978,11.685z M6.463,6.795
					c-0.177-0.227-0.429-0.44-0.757-0.643C5.378,5.975,5.098,5.886,4.873,5.886c-0.176,0-0.519,0.481-1.022,1.439
					C3.345,8.287,3.104,8.829,3.129,8.957c0,0.074,0.05,0.162,0.15,0.262c0.102,0.13,0.204,0.203,0.305,0.229l1.779,0.909
					c0.078,0.077,0.165,0.11,0.267,0.11c0.251,0.079,0.404-0.022,0.454-0.3c0.051-0.227,0.178-0.819,0.379-1.78
					C6.59,7.528,6.59,6.998,6.463,6.795z`,
            }),
          });
        }
        function i(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92.059 31.75",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M5.04,14.941c-0.285,0.287-0.427,0.632-0.427,1.034
	c0,0.402,0.143,0.744,0.427,1.029c0.286,0.287,0.631,0.43,1.033,0.43s0.745-0.143,1.03-0.43c0.286-0.285,0.43-0.627,0.43-1.029
	c0-0.402-0.144-0.747-0.43-1.034c-0.285-0.284-0.628-0.426-1.03-0.426S5.326,14.657,5.04,14.941z M49.132,15.079
	c-0.239-0.239-0.526-0.358-0.861-0.358c-0.336,0-0.623,0.119-0.862,0.358c-0.236,0.238-0.357,0.525-0.357,0.861
	c0,0.336,0.121,0.623,0.357,0.861c0.239,0.238,0.526,0.357,0.862,0.357c0.335,0,0.622-0.119,0.861-0.357
	c0.238-0.238,0.356-0.525,0.356-0.861C49.489,15.604,49.37,15.317,49.132,15.079z M52.684,15.875c0-0.249-0.089-0.463-0.267-0.641
	c-0.176-0.175-0.388-0.263-0.638-0.263s-0.464,0.088-0.642,0.263c-0.176,0.178-0.263,0.393-0.263,0.641
	c0,0.25,0.087,0.463,0.263,0.637c0.178,0.179,0.392,0.27,0.642,0.27s0.462-0.091,0.638-0.27
	C52.595,16.338,52.684,16.125,52.684,15.875z M55.805,16.001c0-0.201-0.071-0.374-0.215-0.518c-0.144-0.144-0.315-0.215-0.517-0.215
	c-0.2,0-0.373,0.071-0.517,0.215c-0.144,0.144-0.215,0.316-0.215,0.518c0,0.201,0.071,0.372,0.215,0.517
	c0.144,0.143,0.316,0.215,0.517,0.215c0.201,0,0.373-0.072,0.517-0.215C55.734,16.373,55.805,16.202,55.805,16.001z M58.539,15.988
	c0-0.155-0.056-0.289-0.168-0.401c-0.108-0.109-0.241-0.164-0.396-0.164c-0.155,0-0.288,0.055-0.401,0.164
	c-0.108,0.112-0.162,0.246-0.162,0.401c0,0.155,0.054,0.287,0.162,0.397c0.113,0.11,0.246,0.166,0.401,0.166
	c0.154,0,0.287-0.056,0.396-0.166C58.484,16.275,58.539,16.143,58.539,15.988z M33.82,11.703c1.719-0.212,3.441-0.89,5.163-2.032
	c0.864-0.571,1.554-1.121,2.071-1.649c1.289,1.375,2.659,1.937,4.111,1.684c0.322,0.394,0.984,0.589,1.985,0.589
	c18.566-0.497,32.612,1.364,42.137,5.58c-9.524,4.217-23.57,6.078-42.137,5.58c-1.001,0-1.663,0.197-1.985,0.592
	c-1.452-0.254-2.823,0.309-4.111,1.682c-0.518-0.527-1.208-1.078-2.071-1.648c-1.722-1.143-3.444-1.82-5.163-2.033
	c-0.938-0.113-2.117-0.137-3.535-0.066c-1.036,0.053-2.44,0.174-4.211,0.359c-2.831,0.301-4.354,0.459-4.573,0.479
	c-1.783,0.17-3.324,0.27-4.625,0.297c-1.527,0.037-3.126-0.078-4.797-0.348c-1.633-0.268-3.145-0.648-4.534-1.146
	c-1.433-0.514-2.564-1.092-3.397-1.73c-0.814-0.627-1.272-1.268-1.369-1.916c-0.009-0.069-0.009-0.133,0-0.193
	c0.097-0.652,0.554-1.292,1.369-1.921c0.833-0.64,1.965-1.216,3.397-1.731c1.39-0.497,2.901-0.878,4.534-1.145
	c1.671-0.27,3.27-0.386,4.797-0.35c1.3,0.029,2.842,0.128,4.625,0.298c0.219,0.02,1.742,0.179,4.573,0.478
	c1.771,0.187,3.175,0.307,4.211,0.362C31.703,11.841,32.881,11.818,33.82,11.703z M40.012,11.402c-1.292,0-2.394,0.456-3.308,1.369
	c-0.912,0.914-1.37,2.016-1.37,3.307s0.458,2.395,1.37,3.307c0.914,0.912,2.016,1.371,3.308,1.371c0.341,0,0.668-0.033,0.982-0.096
	c0.287-0.059,0.564-0.143,0.831-0.254c0.545-0.23,1.043-0.57,1.495-1.021c0.912-0.912,1.369-2.016,1.369-3.307
	s-0.457-2.394-1.369-3.307C42.406,11.858,41.303,11.402,40.012,11.402z`,
            }),
          });
        }
        function r(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92 31.5",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M53.805,16.461c0-0.224-0.079-0.415-0.237-0.572
		c-0.155-0.155-0.344-0.232-0.568-0.232c-0.224,0-0.415,0.077-0.573,0.232c-0.155,0.157-0.232,0.349-0.232,0.572
		s0.077,0.413,0.232,0.568c0.158,0.158,0.349,0.236,0.573,0.236c0.224,0,0.413-0.078,0.568-0.236
		C53.726,16.874,53.805,16.685,53.805,16.461z M2.377,11.257c2.377,0.732,4.884,1.029,7.52,0.889
		c11.378-0.462,22.542-0.521,33.489-0.178c0.61-0.641,0.582-1.409-0.084-2.306c1.559-0.418,2.602,0.387,3.131,2.415h2.34
		l0.435,0.543c18.559-0.04,32.681,0.977,42.367,3.047c-5.398,1.266-17.763,1.899-37.093,1.9l-0.271,0.281h-4.987l-0.45,0.212H46.27
		c-0.528,0.489-0.372,1.214,0.469,2.179c-1.571,0.877-2.725,0.204-3.461-2.021c-10.783,0.404-21.969,0.404-33.558,0
		c-2.601-0.089-5.066,0.293-7.396,1.146C0.528,16.593,0.546,13.89,2.377,11.257z`,
            }),
          });
        }
        function d(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M99.288,15.852c-0.725,0.562-1.461,1.105-2.205,1.628
				c-0.081,0.06-0.17,0.121-0.272,0.181c-2.734,1.792-5.181,2.958-7.334,3.501c-2.638,0.685-5.292,1.068-7.969,1.148
				c-2.778,0.101-5.462-0.122-8.058-0.665c-1.025-0.221-2.103-0.475-3.231-0.755c-1.285-0.322-2.063-0.501-2.322-0.543
				c-1.49-0.343-3.25-0.563-5.284-0.664c-2.072-0.119-5.061-0.129-8.963-0.029l-5.223,0.149l-0.33,0.728l-3.141-0.063
				c-0.039-0.099-0.121-0.222-0.239-0.363c-0.242-0.262-0.553-0.493-0.937-0.694c-0.383-0.181-0.793-0.323-1.238-0.423l-0.543-0.089
				l-0.18,2.595l-0.727,0.694c-0.543,0.545-0.937,1.038-1.175,1.478c-0.243,0.424-0.483,1.049-0.727,1.872
				c-0.141,0.402-0.249,0.755-0.331,1.058h-1.69c0-0.245,0.022-0.523,0.062-0.846c0.079-0.667,0.211-1.229,0.39-1.692
				c0.204-0.461,0.424-0.915,0.664-1.357l0.335-0.543c-0.141-0.264-0.323-0.553-0.546-0.874c-0.422-0.625-0.804-1.077-1.147-1.359
				c-0.362-0.261-0.713-0.614-1.053-1.055l-0.396-0.575c-0.361-0.202-0.783-0.383-1.266-0.543c-1.007-0.283-1.892-0.272-2.657,0.031
				c-0.16,0.06-0.975,0.44-2.443,1.145c-0.967,0.464-1.923,0.798-2.869,0.998c-1.064,0.241-2.583,0.274-4.559,0.089
				c-1.648-0.161-3.329-0.421-5.039-0.784c-1.792-0.441-3.047-0.735-3.774-0.876c-1.185-0.26-2.153-0.41-2.895-0.453
				c-0.725-0.019-1.53,0.022-2.416,0.123c-0.442,0.037-0.816,0.091-1.115,0.151l-1.121,0.907l-0.239,1.085
				c-0.182,0.745-0.361,1.166-0.543,1.267C4.282,21.616,3.92,21.838,3.457,22.1l-0.783-0.062c-0.183-0.101-0.383-0.251-0.604-0.455
				c-0.421-0.38-0.727-0.804-0.905-1.266c-0.203-0.464-0.271-1.197-0.213-2.203l0.153-1.39l-0.878-0.572v-1.388l0.667-0.332
				c0-0.344,0.017-0.725,0.058-1.148c0.081-0.844,0.213-1.438,0.391-1.781c0.223-0.403,0.465-0.672,0.727-0.815
				c0.201-0.121,0.531-0.22,0.996-0.302c0.321-0.06,0.575,0.011,0.754,0.213c0.082,0.099,0.131,0.199,0.149,0.302
				c1.893-0.122,3.995-0.245,6.311-0.365c4.668-0.26,8.119-0.373,10.351-0.331c1.993,0.02,4.929,0.169,8.813,0.451
				c3.562,0.285,5.554,0.413,5.975,0.396c0.664-0.042,1.259-0.143,1.783-0.304c0.302-0.079,0.704-0.222,1.208-0.422
				c0.342-0.101,0.594-0.091,0.754,0.032c0.099,0.058,0.162,0.138,0.182,0.241c0.201-0.183,0.442-0.403,0.723-0.667
				c0.522-0.503,0.905-0.956,1.147-1.356c0.261-0.426,0.472-0.906,0.634-1.449l0.151-0.726h1.449v0.756
				c-0.061,0.583-0.172,1.096-0.334,1.537c-0.162,0.445-0.4,0.887-0.723,1.331c-0.162,0.239-0.311,0.434-0.454,0.575l8.511,0.119
				l-0.542-0.845l1.994,0.845l1.417,0.062l-0.666-0.966l2.235,0.966h1.389l-0.666-0.966l2.235,1.025h1.299L58.48,9.996l2.172,0.907
				l1.359,0.089l-0.574-0.996l2.084,0.996l1.447,0.061l-0.605-0.999l2.084,0.999l1.508,0.06l-0.723-0.968l1.9,0.968l1.571-0.121
				l-0.514-0.785l2.083,0.906l1.115,0.03c1.008,0,2.113-0.052,3.321-0.151c1.972-0.183,3.831-0.382,5.583-0.604l0.604,0.453
				c0.503,0.34,1.035,0.672,1.601,0.996c1.791,1.046,3.489,1.761,5.099,2.144c1.609,0.383,3.873,0.685,6.792,0.904
				c0.242,0.022,0.473,0.041,0.693,0.061c1.167,0.08,2.223,0.132,3.169,0.153L99.288,15.852z`,
            }),
          });
        }
        function C(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 95.833 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M88.067,18.142c-1.037,0.352-2.262,0.727-3.669,1.127
				c-2.823,0.799-5.164,1.352-7.022,1.656c-1.833,0.284-4.18,0.494-7.05,0.634c-0.916,0.048-1.824,0.086-2.714,0.108h-1.06
				c-0.023-0.117-0.082-0.283-0.176-0.496c-0.213-0.398-0.544-0.763-0.988-1.093c-0.399-0.329-0.905-0.564-1.516-0.704
				c-0.165-0.047-0.34-0.068-0.531-0.068l-19.816-0.11c-0.095,0.029-0.201,0.072-0.317,0.143c-0.048,0.024-0.095,0.083-0.142,0.174
				l-0.037,0.105l-0.458,2.19c-0.332,1.549-0.576,2.608-0.742,3.173c-0.024,0.071-0.059,0.165-0.106,0.279
				c-0.071,0.117-0.125,0.201-0.176,0.249c-0.117,0.095-0.339,0.166-0.671,0.209l-0.493,0.074c-0.306-0.024-0.634-0.035-0.989-0.035
				c-0.705-0.028-1.173-0.06-1.409-0.107c-0.095-0.022-0.174-0.072-0.248-0.141c-0.095-0.072-0.154-0.153-0.175-0.249
				c0-0.184,0.127-0.454,0.388-0.809c0.023-0.023,0.199-0.222,0.528-0.598c0.238-0.306,0.458-0.602,0.667-0.885
				c0.379-0.542,0.589-0.951,0.635-1.233c0.024-0.187,0.024-0.507,0-0.955l-0.033-0.631c-0.095,0.021-0.165,0.021-0.212,0
				c-0.143-0.19-0.305-0.39-0.491-0.603c-0.328-0.422-0.624-0.739-0.882-0.948c-0.378-0.309-0.746-0.542-1.098-0.708
				c-0.632-0.285-1.326-0.413-2.077-0.387c-0.726,0.048-1.391,0.292-1.972,0.738c-0.636,0.444-1.106,1.061-1.415,1.833
				c-0.257,0.682-0.458,1.188-0.6,1.52c-0.09,0.161-0.153,0.27-0.177,0.313c-0.023,0.049-0.065,0.085-0.139,0.107
				c-0.117,0.095-0.226,0.13-0.313,0.108c-0.119,0-0.27-0.099-0.464-0.283c-0.234-0.262-0.456-0.589-0.667-0.987
				c-0.167-0.284-0.284-0.497-0.354-0.638c-0.143-0.258-0.27-0.484-0.387-0.671c-0.354-0.469-0.813-0.86-1.377-1.164
				c-0.634-0.327-1.222-0.527-1.762-0.596c-0.682-0.073-1.292,0.08-1.833,0.456c-0.378,0.235-0.85,0.564-1.411,0.99
				c-0.4,0.304-0.659,0.481-0.775,0.526c-0.165,0.047-0.34,0.057-0.53,0.035c-0.115-0.024-0.316-0.104-0.599-0.248
				c-0.354-0.138-0.728-0.257-1.128-0.353c-0.608-0.139-1.199-0.185-1.765-0.139c-0.563,0.069-1.047,0.19-1.444,0.354
				c-0.377,0.164-0.751,0.397-1.129,0.704c-0.233,0.21-0.504,0.448-0.813,0.707c-0.21,0.165-0.41,0.278-0.599,0.35
				c-0.419,0.166-0.772,0.271-1.057,0.318c-0.304,0.025-0.576,0.069-0.81,0.143c-0.493,0.093-0.931,0.235-1.304,0.423
				c-0.399,0.211-0.821,0.552-1.271,1.02c-0.163,0.165-0.479,0.565-0.951,1.203c-0.378,0.469-0.787,1.011-1.237,1.62L5.613,26.32
				l-0.634-0.139c-1.95-3.175-3.069-4.962-3.352-5.359c-0.047-0.073-0.361-0.47-0.951-1.203c-0.422-0.539-0.646-0.878-0.668-1.018
				c-0.023-0.19,0.012-0.426,0.104-0.708c0.095-0.235,0.213-0.471,0.356-0.708c0.095-0.117,0.317-0.374,0.671-0.772
				c0.398-0.401,0.689-0.733,0.879-0.989c0.117-0.162,0.329-0.495,0.634-0.988c0.209-0.401,0.4-0.686,0.561-0.847
				c0.216-0.188,0.402-0.316,0.569-0.388c0.068-0.022,0.21-0.044,0.42-0.071c0.095-0.021,0.353-0.046,0.777-0.068
				c0.517-0.047,1.059-0.142,1.621-0.286c0.708-0.162,1.245-0.305,1.621-0.422c0.38-0.139,1.06-0.423,2.045-0.847
				c1.155-0.518,2.07-0.916,2.752-1.195c0.916-0.358,1.776-0.66,2.579-0.919c1.029-0.331,1.738-0.543,2.113-0.634
				c0.612-0.12,1.362-0.215,2.256-0.283c0.874-0.072,1.717-0.083,2.54-0.035c0.542,0.047,1.247,0.14,2.114,0.283
				c0.708,0.093,1.401,0.165,2.082,0.21c0.566,0.025,1.352,0.034,2.362,0.034c0.73,0,1.445-0.034,2.153-0.101
				c0.355-0.027,0.638-0.05,0.847-0.075l0.034-0.211l0.213-0.037l0.105,0.215l0.354-0.036V8.509l0.283-0.067l0.071,0.249l0.35-0.039
				V8.406l0.279-0.032l0.038,0.244l0.353-0.035V8.301h0.247l0.035,0.177l0.317-0.035V8.158l0.283-0.036l0.034,0.251l0.283-0.039
				V7.983l0.248-0.037l0.069,0.285l0.282-0.073V7.809h0.248l0.067,0.244h0.217l0.033-0.316l0.281-0.037l0.038,0.283l0.21-0.069
				V7.669l0.249-0.036l0.07,0.176l0.353-0.108c0.26-0.092,0.438-0.174,0.529-0.247c0.094-0.042,0.2-0.118,0.321-0.211
				c0.091-0.116,0.174-0.189,0.244-0.211c0.092-0.046,0.209-0.069,0.349-0.069c0.143,0.023,0.227,0.033,0.248,0.033
				c0.095-0.046,0.26-0.142,0.494-0.284c0.189-0.139,0.355-0.22,0.495-0.24c0.165-0.051,0.34-0.063,0.529-0.039
				c0.095,0.025,0.234,0.06,0.422,0.107c0.026,0.02,0.19,0.104,0.494,0.246c0.257,0.138,0.492,0.225,0.708,0.247
				c0.233,0.047,0.41,0.047,0.528,0c0.164-0.046,0.271-0.069,0.316-0.069c0.143,0,0.399,0.129,0.778,0.386
				c0.209,0.142,0.4,0.284,0.561,0.425l2.79,0.527c2.042,0.399,3.463,0.668,4.262,0.811c1.015,0.14,2.259,0.261,3.742,0.353
				c1.29,0.048,2.351,0.06,3.174,0.038c1.714-0.05,3.137-0.318,4.263-0.812c0.284-0.118,0.803-0.38,1.552-0.777
				c0.732-0.378,1.154-0.587,1.271-0.633c0.163-0.072,0.375-0.106,0.634-0.106c0.262,0,0.438,0.034,0.53,0.106
				c0.05,0.046,0.107,0.141,0.177,0.28c0.05,0.091,0.13,0.26,0.248,0.492c0.209,0.448,0.411,0.708,0.596,0.777
				c0.214,0.069,0.413,0.06,0.603-0.037c0.165-0.094,0.269-0.248,0.317-0.458c0.022-0.188,0.022-0.377,0-0.561l-0.069-0.212h0.351
				l0.14,0.281c0.139,0.236,0.25,0.423,0.318,0.563c0.094,0.212,0.2,0.399,0.318,0.563c0.162,0.166,0.317,0.262,0.458,0.283
				c0.282,0.026,0.492,0.012,0.634-0.032c0.26-0.073,0.387-0.238,0.387-0.495c0-0.26-0.026-0.503-0.069-0.742l-0.109-0.246
				l0.426,0.072l0.177,0.281c0.14,0.211,0.26,0.388,0.353,0.528c0.117,0.282,0.212,0.46,0.281,0.53
				c0.118,0.165,0.274,0.273,0.461,0.317c0.188,0.048,0.365,0.038,0.528-0.033c0.163-0.048,0.268-0.167,0.316-0.354
				c0.047-0.165,0.022-0.378-0.068-0.635L73.536,8.09l0.351,0.033l0.175,0.251c0.117,0.164,0.2,0.301,0.249,0.419
				c0.094,0.215,0.164,0.366,0.211,0.458c0.121,0.168,0.256,0.284,0.425,0.352c0.467,0.189,0.831,0.168,1.091-0.067
				c0.095-0.072,0.155-0.187,0.175-0.352c0-0.142-0.011-0.285-0.033-0.423c-0.023-0.12-0.083-0.251-0.176-0.387l-0.143-0.143
				l0.493,0.034l0.178,0.317c0.117,0.235,0.212,0.434,0.28,0.602c0.071,0.166,0.161,0.305,0.281,0.419
				c0.047,0.051,0.166,0.121,0.351,0.216c0.146,0.093,0.286,0.137,0.425,0.137c0.144,0.027,0.273-0.011,0.389-0.102
				c0.19-0.143,0.272-0.352,0.248-0.634c-0.021-0.099-0.084-0.238-0.176-0.427l-0.14-0.248l0.384,0.037l0.179,0.286
				c0.142,0.209,0.223,0.352,0.245,0.418c0.047,0.119,0.118,0.25,0.213,0.391c0.12,0.165,0.222,0.279,0.313,0.353
				c0.168,0.096,0.342,0.153,0.532,0.177c0.235,0.045,0.423,0.024,0.566-0.071c0.234-0.162,0.317-0.458,0.247-0.883
				c0-0.092-0.038-0.209-0.108-0.353l-0.105-0.174l0.493,0.105l0.106,0.139c0.097,0.166,0.19,0.356,0.284,0.567
				c0.068,0.119,0.139,0.224,0.212,0.318c0.094,0.139,0.247,0.292,0.458,0.46c0.139,0.116,0.304,0.173,0.493,0.173
				c0.164,0,0.305-0.057,0.423-0.173c0.091-0.099,0.152-0.226,0.178-0.39c0.022-0.117,0.008-0.248-0.036-0.388
				c-0.051-0.095-0.118-0.211-0.213-0.352l-0.142-0.176l0.425,0.104l0.174,0.213c0.117,0.164,0.189,0.292,0.216,0.387
				c0.021,0.119,0.089,0.244,0.21,0.387c0.095,0.165,0.211,0.284,0.351,0.355c0.188,0.117,0.331,0.188,0.426,0.212
				c0.187,0.023,0.352-0.036,0.494-0.178c0.117-0.116,0.172-0.247,0.172-0.389c0-0.091-0.023-0.234-0.072-0.422
				c-0.043-0.093-0.1-0.188-0.173-0.282l-0.14-0.109l10.296,1.308L88.067,18.142z M40.102,23.501c-0.256,0-0.471,0.079-0.634,0.247
				c-0.165,0.188-0.246,0.4-0.246,0.634c0,0.235,0.082,0.438,0.246,0.6c0.164,0.165,0.378,0.244,0.634,0.244
				c0.236,0,0.448-0.079,0.634-0.244c0.166-0.162,0.248-0.365,0.248-0.6c0-0.234-0.082-0.447-0.248-0.634
				C40.549,23.581,40.337,23.501,40.102,23.501z`,
            }),
          });
        }
        function M(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92.059 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M1.984,14.83c-0.151,0.151-0.226,0.331-0.226,0.538
				c0,0.189,0.075,0.36,0.226,0.51c0.132,0.134,0.303,0.199,0.511,0.199c0.207,0,0.376-0.065,0.51-0.199
				c0.151-0.149,0.227-0.32,0.227-0.51c0-0.207-0.076-0.387-0.227-0.538c-0.133-0.133-0.303-0.198-0.51-0.198
				C2.287,14.632,2.117,14.697,1.984,14.83z M72.412,13.3c1.719,0.284,3.118,0.548,4.194,0.793l-8.333,6.378l-13.49-0.114
				c-0.169-0.416-0.463-0.529-0.878-0.341c-0.113-0.075-0.189-0.132-0.227-0.17c-0.076-0.055-0.16-0.084-0.255-0.084
				c-0.094,0-0.179,0.029-0.255,0.084c-0.038,0.038-0.066,0.076-0.085,0.114c-0.037-0.038-0.113-0.076-0.226-0.114
				c-0.171-0.055-0.379-0.084-0.624-0.084c-0.227,0-0.426,0.029-0.595,0.084c-0.114,0.038-0.189,0.076-0.227,0.114
				c-0.019-0.038-0.047-0.076-0.085-0.114c-0.075-0.055-0.16-0.084-0.255-0.084c-0.095,0-0.179,0.029-0.255,0.084
				c-0.039,0.038-0.066,0.076-0.085,0.114c-0.019-0.038-0.047-0.076-0.085-0.114c-0.076-0.055-0.161-0.084-0.255-0.084
				s-0.179,0.029-0.255,0.084c-0.057,0.038-0.085,0.076-0.085,0.114c-0.056-0.038-0.132-0.076-0.227-0.114
				c-0.17-0.055-0.377-0.084-0.623-0.084c-0.246,0-0.454,0.029-0.623,0.084c-0.096,0.038-0.162,0.076-0.199,0.114
				c-0.02-0.038-0.057-0.076-0.114-0.114c-0.056-0.055-0.131-0.084-0.226-0.084c-0.113,0-0.198,0.029-0.255,0.084
				c-0.057,0.038-0.095,0.076-0.114,0.114c-0.019-0.038-0.047-0.076-0.085-0.114c-0.075-0.055-0.161-0.084-0.255-0.084
				s-0.18,0.029-0.255,0.084c-0.038,0.038-0.066,0.076-0.084,0.114c-0.038-0.038-0.114-0.076-0.227-0.114
				c-0.17-0.055-0.369-0.084-0.596-0.084c-0.245,0-0.454,0.029-0.623,0.084c-0.115,0.038-0.19,0.076-0.228,0.114
				c-0.019-0.038-0.047-0.076-0.085-0.114c-0.075-0.055-0.161-0.084-0.255-0.084c-0.095,0-0.18,0.029-0.256,0.084
				c-0.038,0.038-0.065,0.076-0.084,0.114c-0.02-0.038-0.048-0.076-0.085-0.114c-0.076-0.055-0.161-0.084-0.255-0.084
				c-0.094,0-0.18,0.029-0.255,0.084c-0.037,0.038-0.066,0.076-0.084,0.114c-0.038-0.038-0.114-0.076-0.228-0.114
				c-0.169-0.055-0.377-0.084-0.623-0.084c-0.226,0-0.435,0.029-0.624,0.084c-0.094,0.038-0.161,0.076-0.198,0.114
				c-0.02-0.038-0.057-0.076-0.114-0.114c-0.057-0.055-0.132-0.084-0.227-0.084c-0.113,0-0.198,0.029-0.255,0.084
				c-0.056,0.038-0.085,0.076-0.085,0.114c-0.378-0.228-0.69-0.057-0.935,0.511h-3.259l-0.057,0.34
				c-0.057,0.283-0.123,0.548-0.198,0.793c-0.264,0.736-0.633,1.124-1.105,1.162c-0.265,0.019-0.481-0.029-0.652-0.143
				c-0.132-0.094-0.273-0.244-0.425-0.451c-0.17-0.284-0.321-0.502-0.453-0.653c-0.208-0.283-0.444-0.529-0.709-0.737
				c-0.661-0.51-1.492-0.812-2.494-0.907c-0.832-0.094-2.381-0.056-4.647,0.114c-1.588,0.113-3.798,0.17-6.632,0.17
				c-3.042-0.057-5.102-0.084-6.179-0.084c0-0.077-0.028-0.142-0.084-0.2c-0.056-0.056-0.132-0.083-0.227-0.083
				c-0.076,0-0.142,0.027-0.199,0.083c-0.056,0.059-0.084,0.123-0.084,0.2c-0.132,0-0.245,0-0.34,0
				c-0.114,0.019-0.227,0.027-0.34,0.027c0-0.076-0.028-0.142-0.085-0.198c-0.057-0.058-0.123-0.085-0.199-0.085
				c-0.075,0-0.142,0.027-0.198,0.085c-0.076,0.057-0.113,0.122-0.113,0.198v0.028c-0.189,0-0.378,0.009-0.567,0.028
				c0-0.075-0.028-0.133-0.085-0.17c-0.057-0.056-0.123-0.085-0.198-0.085c-0.076,0-0.151,0.029-0.227,0.085
				c-0.057,0.057-0.085,0.123-0.085,0.198c0,0.019,0.01,0.037,0.028,0.056c-0.189,0.021-0.368,0.039-0.539,0.058
				c0-0.037-0.028-0.085-0.084-0.142c-0.058-0.057-0.124-0.084-0.199-0.084s-0.151,0.027-0.227,0.084
				c-0.057,0.057-0.085,0.133-0.085,0.227c0,0.02,0.01,0.038,0.029,0.057c-0.17,0.039-0.331,0.084-0.482,0.143
				c-0.019-0.039-0.038-0.067-0.056-0.086c-0.057-0.057-0.132-0.084-0.227-0.084c-0.075,0-0.142,0.027-0.198,0.084
				c-0.057,0.057-0.085,0.123-0.085,0.199c0,0.037,0.01,0.074,0.028,0.113c-0.075,0.037-0.159,0.084-0.255,0.142
				c-0.075,0.037-0.142,0.084-0.197,0.142c-0.058-0.038-0.114-0.058-0.171-0.058c-0.094,0-0.169,0.029-0.227,0.085
				c-0.057,0.058-0.085,0.133-0.085,0.228c0,0.075,0.028,0.142,0.085,0.198c0.02,0.019,0.048,0.038,0.085,0.057
				c-0.019,0-0.028,0.01-0.028,0.028c-0.19,0.34-0.435,0.548-0.738,0.624c-0.377,0.113-0.746,0.094-1.105-0.058
				c-0.282-0.132-0.595-0.368-0.935-0.708c-0.264-0.283-0.765-0.878-1.502-1.784c-0.718-0.89-1.171-1.485-1.36-1.787
				c-0.114-0.17-0.161-0.339-0.142-0.51l0.085-0.17l-0.538,0.027l-1.474-1.699l1.474-1.928l0.34-0.028
				c0-0.094,0.018-0.198,0.056-0.312c0.095-0.227,0.236-0.397,0.425-0.511c0.152-0.075,0.643-0.17,1.475-0.283
				c0.018,0.094,0.056,0.17,0.112,0.228c0.095,0.095,0.199,0.142,0.312,0.142c0.114,0,0.208-0.047,0.283-0.142
				c0.076-0.076,0.114-0.171,0.114-0.284c0-0.019,0-0.037,0-0.057c0.17-0.02,0.35-0.038,0.539-0.057
				c0,0.113,0.038,0.198,0.114,0.255c0.075,0.095,0.169,0.143,0.283,0.143s0.217-0.048,0.312-0.143
				c0.076-0.075,0.113-0.17,0.113-0.282v-0.03c0.151-0.019,0.321-0.037,0.51-0.056c0,0.095,0.038,0.18,0.113,0.255
				c0.076,0.076,0.17,0.113,0.284,0.113c0.113,0,0.217-0.037,0.312-0.113c0.076-0.075,0.114-0.169,0.114-0.283
				c0-0.02,0-0.038,0-0.057c0.208-0.019,0.416-0.038,0.624-0.057c0,0.113,0.038,0.197,0.113,0.255
				c0.076,0.095,0.17,0.142,0.283,0.142c0.114,0,0.208-0.047,0.284-0.142c0.095-0.076,0.142-0.169,0.142-0.283v-0.027
				c0.169-0.021,0.34-0.029,0.51-0.029c0,0.094,0.038,0.179,0.113,0.254c0.095,0.078,0.198,0.114,0.313,0.114
				c0.113,0,0.208-0.036,0.282-0.114c0.077-0.075,0.114-0.169,0.114-0.283V11.94c0.188-0.021,0.368-0.029,0.538-0.029
				c0,0.094,0.038,0.179,0.114,0.256c0.075,0.074,0.179,0.111,0.312,0.111c0.113,0,0.208-0.037,0.283-0.111
				c0.076-0.077,0.114-0.171,0.114-0.284v-0.029c1.738-0.095,3.485-0.16,5.242-0.197c2.74-0.038,5.753,0.047,9.042,0.255
				c0.737,0.037,1.644,0.094,2.72,0.17v0.027c0,0.114,0.038,0.22,0.114,0.313c0.075,0.075,0.169,0.113,0.283,0.113
				c0.114,0,0.218-0.038,0.312-0.113c0.076-0.075,0.114-0.171,0.114-0.283c0.246,0.019,0.462,0.029,0.651,0.029
				c0,0.093,0.038,0.188,0.114,0.282c0.095,0.076,0.198,0.113,0.313,0.113c0.113,0,0.208-0.037,0.283-0.113
				c0.076-0.095,0.114-0.199,0.114-0.312v-0.029c0.245-0.019,0.48-0.047,0.708-0.083c0,0.094,0.037,0.178,0.112,0.253
				c0.076,0.076,0.171,0.114,0.284,0.114c0.114,0,0.208-0.038,0.283-0.114c0.094-0.093,0.142-0.197,0.142-0.312
				c0-0.019,0-0.036,0-0.056c0.227-0.058,0.426-0.104,0.596-0.142c0.019,0.037,0.056,0.075,0.113,0.113
				c0.075,0.095,0.17,0.143,0.283,0.143s0.208-0.048,0.283-0.143c0.094-0.076,0.143-0.17,0.143-0.284
				c0-0.075-0.019-0.141-0.058-0.197c0.227-0.151,0.426-0.322,0.596-0.511c0.056,0.038,0.132,0.057,0.226,0.057
				c0.114,0,0.208-0.037,0.284-0.113c0.075-0.075,0.114-0.171,0.114-0.284s-0.039-0.217-0.114-0.311
				c-0.019-0.02-0.047-0.038-0.085-0.058c0.265-0.435,0.539-0.717,0.822-0.85c0.189-0.095,0.387-0.123,0.596-0.086
				c0.396,0.076,0.708,0.511,0.935,1.304c0.113,0.379,0.189,0.756,0.226,1.135l9.778,0.085c7.124,0.095,12.244,0.227,15.361,0.397
				C65.695,12.354,68.973,12.733,72.412,13.3z`,
            }),
          });
        }
        function E(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92 32.5",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M9.736,26.29c0.816-0.815,1.224-1.8,1.224-2.954
		s-0.407-2.139-1.224-2.955c-0.816-0.816-1.801-1.225-2.955-1.225s-2.139,0.408-2.955,1.225c-0.816,0.816-1.224,1.801-1.224,2.955
		s0.408,2.139,1.224,2.954c0.816,0.816,1.801,1.225,2.955,1.225S8.92,27.106,9.736,26.29z M54.573,8.704
		c-0.245,0-0.454,0.087-0.626,0.26c-0.172,0.172-0.259,0.381-0.259,0.625c0,0.245,0.086,0.454,0.259,0.627
		c0.172,0.172,0.381,0.259,0.626,0.259c0.245,0,0.454-0.087,0.626-0.259c0.172-0.173,0.259-0.382,0.259-0.627
		c0-0.244-0.086-0.453-0.259-0.625C55.026,8.791,54.817,8.704,54.573,8.704z M51.765,7.642c-0.287,0-0.533,0.102-0.737,0.305
		c-0.203,0.204-0.305,0.45-0.305,0.737s0.102,0.531,0.305,0.735c0.205,0.204,0.451,0.307,0.737,0.307s0.531-0.103,0.734-0.307
		c0.205-0.204,0.308-0.448,0.308-0.735s-0.103-0.533-0.308-0.737C52.296,7.743,52.051,7.642,51.765,7.642z M48.638,6.634
		c-0.359,0-0.666,0.128-0.919,0.382c-0.254,0.254-0.381,0.561-0.381,0.919c0,0.359,0.127,0.667,0.381,0.921
		c0.253,0.253,0.56,0.381,0.919,0.381c0.359,0,0.666-0.128,0.92-0.381c0.254-0.254,0.381-0.562,0.381-0.921
		c0-0.358-0.127-0.665-0.381-0.919C49.304,6.762,48.998,6.634,48.638,6.634z M22.398,8.593c0.962-0.229,2.037-0.401,3.224-0.518
		c0.697-0.07,1.758-0.142,3.182-0.213c1.392-0.072,2.446-0.145,3.162-0.217c1.168-0.118,2.221-0.297,3.161-0.535
		c1.833-0.457,3.434-1.033,4.805-1.731c0.445-0.226,1.021-0.545,1.727-0.958c0.844-0.494,1.445-0.838,1.804-1.031l2.546,1.86
		c0.269-0.131,0.354-0.355,0.251-0.672l-0.91-1.16l2.728,0.377l0.839,1.23c0.172,0.19,0.345,0.257,0.518,0.196l0.168-1.245
		l1.888,1.749l0.154-1.217l1.762,1.776V5.096l1.917,1.818V5.823c11.872,4.56,18.456,11.684,19.75,21.373
		c-9.496-8.46-19.287-12.824-29.374-13.093L45.4,14.46l-1.846,0.231c-1.986,2.1-3.982,3.158-5.987,3.175
		c-0.256-0.498-0.467-0.873-0.633-1.122c-0.266-0.403-0.556-0.734-0.871-0.993c-0.792-0.657-1.898-0.982-3.314-0.976
		c-1.912,0.012-4.094,0.69-6.546,2.039c-1.226,0.673-2.261,1.345-3.105,2.018c-0.919-0.102-1.99-0.086-3.214,0.042
		c-2.448,0.259-4.437,0.964-5.966,2.114c-0.324,0.246-0.571,0.619-0.741,1.124c-0.082,0.252-0.196,0.768-0.342,1.549
		c-0.136,0.723-0.285,1.296-0.448,1.721c-0.25,0.645-0.602,1.196-1.058,1.651c-0.076,0.078-0.187,0.198-0.334,0.358
		c-1.145,1.145-2.525,1.718-4.144,1.718c-1.618,0-2.999-0.573-4.144-1.718C1.563,26.25,0.99,24.869,0.99,23.248
		c0-0.704,0.169-1.458,0.507-2.262c0.364-0.868,0.869-1.651,1.515-2.351c2.203-2.356,4.805-4.327,7.805-5.913
		C13.994,11.044,17.854,9.668,22.398,8.593z`,
            }),
          });
        }
        function Z(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 96.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M96.477,9.111v3.665l-0.116,0.193l-17.674-0.038l-0.039-0.695
				l0.348-0.038l0.039-0.271l-5.672-0.076v-0.155l-2.354,0.039l-0.463,0.153l-4.09-0.038l0.81,0.155V12.7l-0.193,0.232l-0.887-0.039
				v0.309h-0.657v-1.158h0.155v-0.156l-2.509-0.076l-0.077,0.232l-0.078,0.578c-0.025,0.051-0.051,0.09-0.077,0.116
				c-0.051,0.051-0.116,0.077-0.193,0.077c-0.051-0.025-0.116-0.064-0.193-0.115l-0.154-0.078l0.038-0.541l-0.077-0.231h-0.501
				l-0.04,0.849c-0.025,0.076-0.076,0.128-0.153,0.154l-0.155,0.116h-0.27l-0.231,0.502l-14.24,0.115l-0.27-0.153l-0.348-0.078
				l-0.733,0.27l-0.077-0.965L44.65,12.7l0.038,0.617l-0.038,0.078c-0.026,0.077-0.064,0.141-0.116,0.192
				c-0.052,0.026-0.129,0.052-0.232,0.078l-0.116,0.039c-0.025-0.026-0.065-0.039-0.116-0.039c-0.103,0-0.179,0.051-0.232,0.155
				c-0.052,0.077-0.103,0.154-0.154,0.231l-0.077,0.154v3.28l0.23,0.078l0.039,0.27l-0.502,0.193v1.196
				c0.052,0.927,0.168,1.788,0.348,2.585c0.181,0.798,0.463,1.802,0.849,3.011c0.181,0.618,0.348,1.145,0.502,1.581l0.153,0.194
				l-5.826,1.621h-0.154v-0.155c-0.18-0.617-0.386-1.299-0.618-2.045c-0.438-1.543-0.733-2.688-0.888-3.434
				c-0.153-0.746-0.258-1.518-0.309-2.315l-0.077-1.003l-0.425,0.077l-0.54-0.077h-3.627l-1.196,0.115c-0.052,0-0.116,0-0.192,0
				c-0.181,0-0.323,0.038-0.425,0.116c-0.077,0.077-0.155,0.155-0.232,0.232l-0.848,1.621l0.423,0.502l-0.115,0.076
				c-0.155,0.052-0.335,0.129-0.542,0.231c-0.102,0.052-0.192,0.128-0.269,0.232l-0.078,0.116l-1.66,3.242
				c-0.051,0.102-0.063,0.205-0.038,0.308c0.025,0.077,0.09,0.18,0.193,0.308c0.051,0.051,0.102,0.09,0.154,0.117l-0.154,0.346
				l-5.441-1.273l4.901-8.49c0.051-0.103,0.089-0.218,0.116-0.348c0.103-0.231,0.129-0.462,0.077-0.694
				c-0.077-0.282-0.166-0.514-0.27-0.693c-0.128-0.18-0.27-0.335-0.424-0.463c-0.155-0.103-0.309-0.18-0.463-0.232l-1.235-0.039
				v0.155l-0.348,0.038l-0.038-2.123l-0.965-0.038l-0.039-0.348h-3.897l-0.926,0.695l-3.667,0.078v0.348l-3.203,0.039l0.039,2.006
				H9.763v0.811h-1.08v-0.771l-3.628,2.277v-1.853l-4.592,2.084l-0.038,0.771l-0.039,0.116c-0.052,0.103-0.117,0.154-0.193,0.154
				s-0.128-0.051-0.154-0.154L0,18.758L0.078,8.494h4.09C4.245,8.519,4.296,8.57,4.322,8.648c0.051,0.103,0.09,0.283,0.117,0.54
				l10.535,0.117c0.052,0.026,0.09,0.051,0.115,0.076c0.051,0.052,0.077,0.116,0.077,0.192l8.529,0.04l-0.039-0.348h1.003v-0.27
				l0.347-0.038l0.039,0.269l1.002-0.038V8.725h1.004l0.078,0.078l2.585-4.13l0.115-0.153c0.104-0.129,0.206-0.206,0.31-0.231
				c0.102-0.078,0.232-0.129,0.385-0.155c0.078,0,0.155,0,0.232,0l12.851,1.389l0.385,0.077c0.309,0.103,0.527,0.232,0.656,0.386
				c0.128,0.181,0.257,0.399,0.385,0.656c0.052,0.128,0.104,0.244,0.154,0.348l-0.076,2.508l0.27-0.039l0.038-1.12l0.811,0.155
				V8.223l0.27-0.039c0-0.025,0-0.051,0-0.076c0.026-0.052,0.052-0.091,0.077-0.117c0.051-0.026,0.117-0.051,0.193-0.077
				l14.279,0.231l0.155,0.31V8.84l0.386,0.04l0.077,0.038c0.077,0.051,0.115,0.103,0.115,0.154c0.025,0.103,0.052,0.412,0.078,0.926
				h0.501l0.039-1.504l2.354-3.319l0.231-0.193c0.154-0.129,0.309-0.18,0.463-0.154c0.386,0.051,0.669,0.192,0.849,0.424
				c0.077,0.077,0.115,0.167,0.115,0.27c0,0.051-0.013,0.09-0.038,0.116l0.038,4.36h4.092l0.54,0.193l2.316-0.038V9.998h5.672V8.957
				h17.288L96.477,9.111z M65.566,7.721c-0.077-0.051-0.141-0.115-0.192-0.193c-0.026-0.077-0.078-0.244-0.155-0.501L65.18,6.641
				l-0.888-0.077l-1.389,2.16l0.194,0.155h2.624l0.192-0.232V7.721H65.566z M63.135,9.998h2.469l0.116-0.385h-2.585V9.998z
				 M43.685,6.139H32.879c-0.077,0-0.167,0-0.269,0c-0.181,0.052-0.322,0.116-0.425,0.193c-0.103,0.078-0.219,0.193-0.347,0.347
				l-0.155,0.193l-0.617,1.506l0.231,0.231l12.311-0.078l0.153-0.038c0.104-0.026,0.206-0.078,0.309-0.155
				c0.309-0.206,0.463-0.541,0.463-1.004c0-0.386-0.142-0.694-0.425-0.925c-0.103-0.078-0.206-0.142-0.308-0.193L43.685,6.139z
				 M3.705,13.395L3.55,13.356H0.695l-0.154,0.039c-0.078,0.077-0.116,0.154-0.116,0.231s0.051,0.141,0.154,0.193
				c0.025,0.026,0.064,0.051,0.116,0.077h2.895c0.052-0.026,0.09-0.064,0.116-0.116c0.077-0.077,0.116-0.141,0.116-0.193
				C3.821,13.51,3.782,13.447,3.705,13.395z M0.425,8.84v0.425h3.666c0-0.077-0.013-0.167-0.039-0.27
				c0-0.077-0.039-0.128-0.116-0.155L3.782,8.802L0.425,8.84z M35.89,16.211c-0.103-0.052-0.206-0.089-0.309-0.115h-1.466
				c-0.103,0.076-0.219,0.192-0.348,0.346c-0.206,0.335-0.321,0.643-0.348,0.926c-0.025,0.283,0.066,0.566,0.271,0.849
				c0.103,0.129,0.218,0.233,0.348,0.309l-0.155,0.116c-0.154-0.078-0.321-0.206-0.502-0.386c-0.333-0.309-0.514-0.643-0.54-1.003
				c-0.025-0.231,0.026-0.501,0.155-0.811l0.154-0.346c-0.232,0.025-0.451,0.102-0.657,0.23c-0.462,0.309-0.667,0.759-0.616,1.351
				c0.026,0.335,0.193,0.644,0.501,0.927c0.154,0.154,0.309,0.27,0.463,0.348h3.473v-0.463c0.129-0.103,0.231-0.257,0.309-0.463
				c0.128-0.361,0.103-0.759-0.078-1.196C36.417,16.572,36.199,16.366,35.89,16.211z`,
            }),
          });
        }
        function n0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 78.604 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M39.088,16.865c0-0.337-0.091-0.609-0.273-0.817
				c-0.181-0.208-0.402-0.312-0.661-0.312h-1.869c-0.026-0.026-0.039-0.013-0.039,0.039c-0.052,0.052-0.105,0.206-0.156,0.468
				c-0.025,0.207,0.051,0.505,0.233,0.895c0.129,0.312,0.169,0.493,0.117,0.544c-0.155,0.104-0.454-0.142-0.896-0.739
				c-0.129-0.155-0.22-0.401-0.272-0.739l-0.039-0.467c-0.156,0.077-0.312,0.181-0.468,0.312c-0.285,0.26-0.428,0.531-0.428,0.817
				c0.027,0.363,0.143,0.701,0.35,1.012c0.235,0.313,0.521,0.468,0.857,0.468h2.375c0.467,0,0.792-0.169,0.973-0.507
				C39.022,17.604,39.088,17.28,39.088,16.865z M68.948,6.51c-0.13,0.26-0.207,0.428-0.233,0.505
				c-0.026,0.079-0.014,0.234,0.038,0.469l0.234,0.506h1.752l0.117-2.298h-1.479L68.948,6.51z M73.035,11.025
				c-0.077,0-0.142-0.039-0.193-0.116l-0.078-0.117h-1.208c-0.155,0.441-0.325,0.662-0.505,0.662h-0.585
				c-0.078,0-0.155-0.065-0.233-0.194l-0.117-0.156h-2.414v0.622c0,0.155-0.104,0.312-0.312,0.468
				c-0.207,0.181-0.427,0.272-0.661,0.272H47.924c-0.129,0-0.258-0.117-0.39-0.35l-0.154-0.351l-0.429,0.7h-0.272v4.477l0.311,0.39
				c-0.025,0.104-0.129,0.208-0.311,0.312c-0.13,0.053-0.168,0.325-0.118,0.818c0.078,0.882,0.118,1.4,0.118,1.557
				c0,0.52,0.026,0.986,0.078,1.401c0.077,0.312,0.194,0.753,0.35,1.324c0.181,0.675,0.532,1.868,1.052,3.581l0.194,0.116
				c0.078,0.104,0.039,0.196-0.116,0.273c-3.868,1.246-5.917,1.895-6.152,1.946c-0.155,0-0.272-0.064-0.349-0.194
				c-0.053-0.13-0.053-0.247,0-0.351c0.026-0.053-0.092-0.532-0.352-1.439c-0.363-1.194-0.635-2.323-0.817-3.389
				c-0.207-1.167-0.325-2.219-0.351-3.153l0.039-1.051l-0.507-0.155v-0.428c-0.233,0.336-0.402,0.506-0.505,0.506h-4.438
				c-0.157,0.285-0.299,0.428-0.429,0.428c-0.079,0-0.182-0.078-0.312-0.233l-0.117-0.194c-0.104-0.053-0.208-0.078-0.312-0.078
				c-0.208,0-0.364,0.116-0.467,0.351c-0.104,0.232-0.221,0.415-0.35,0.545c-0.156,0.181-0.259,0.311-0.312,0.39
				c-0.052,0.13-0.012,0.298,0.118,0.506c0.155,0.232,0.219,0.39,0.194,0.468c-0.026,0.051-0.208,0.142-0.546,0.271
				c-0.337,0.104-0.544,0.26-0.622,0.467c-0.025,0.052-0.298,0.558-0.817,1.519c-0.441,0.805-0.663,1.272-0.663,1.401
				c0,0.053,0.091,0.221,0.273,0.506c0.155,0.208,0.169,0.402,0.039,0.585c-0.286,0.363-1.44,0.402-3.465,0.116
				c-0.778-0.104-1.377-0.285-1.791-0.545c-0.467-0.259-0.624-0.545-0.467-0.856c0.233-0.415,1.882-3.258,4.943-8.525
				c0.157-0.286,0.157-0.688,0-1.208c-0.155-0.544-0.402-0.83-0.739-0.856c-0.233,0-0.454,0.014-0.662,0.04
				c-0.155,0.026-0.298,0.013-0.429-0.04c-0.285-0.129-0.429-0.323-0.429-0.583c-0.024-0.338-0.039-0.637-0.039-0.896
				c-0.026-0.493-0.013-0.856,0.039-1.089h-0.194l-0.506-0.195v-0.194h-5.996l-0.078,0.428c-0.131,0.338-0.363,0.637-0.701,0.896
				c-0.363,0.259-0.675,0.519-0.934,0.778l-0.312,0.272l-0.701,1.284h-0.933l-0.625,1.091h-2.296v-0.585h-1.363
				c-1.998,1.532-3.101,2.362-3.308,2.492c-0.208,0.129-0.364,0.208-0.468,0.234c-0.13,0.025-0.221-0.053-0.272-0.234l-0.039-0.39
				l-6.229,4.011l-0.118,0.467c-0.129,0.312-0.272,0.479-0.427,0.506c-0.209,0.052-0.441,0.039-0.701-0.039
				c-0.285-0.052-0.506-0.143-0.662-0.272c-0.259-0.208-0.389-0.324-0.389-0.35C0.065,21.563,0,21.355,0,21.069V9.156
				C0,8.845,0.117,8.572,0.352,8.34c0.258-0.26,0.621-0.391,1.09-0.391h19.387c0.104,0,0.183,0.104,0.234,0.312
				c0.027,0.105,0.053,0.208,0.078,0.312h5.606V8.34l0.506-0.195h0.973V7.288l0.195-0.194c0.208-0.13,0.558-0.194,1.051-0.194h2.335
				l0.819-1.169l-0.078-0.389c-0.157-0.053-0.313-0.13-0.467-0.233c-0.312-0.234-0.468-0.546-0.468-0.935
				c0-0.26,0.104-0.494,0.311-0.701c0.234-0.233,0.493-0.351,0.779-0.351c0.338,0,0.624,0.117,0.857,0.351
				c0.207,0.207,0.311,0.454,0.311,0.74v2.335h0.467V5.926h1.441v0.816h10.979c0.156,0,0.297,0.078,0.428,0.234
				c0.104,0.13,0.182,0.246,0.234,0.351c0.025,0.13,0.194,0.052,0.505-0.233h1.169c0-0.079,0.013-0.144,0.039-0.194
				c0.052-0.13,0.156-0.195,0.312-0.195h17.362c0.157,0,0.298,0.077,0.43,0.233c0.051,0.077,0.103,0.144,0.154,0.195l0.818-1.129
				c0.572-0.805,0.948-1.285,1.129-1.441l0.194-0.193c0.233-0.131,0.558-0.195,0.974-0.195h0.972v4.982h1.168l0.156-0.194
				c0.104-0.104,0.208-0.155,0.311-0.155h4.671c0.208,0,0.377,0.077,0.507,0.233c0.208,0.182,0.312,0.441,0.312,0.778v0.391
				c0,0.258-0.091,0.467-0.273,0.621c-0.156,0.131-0.324,0.195-0.505,0.195H73.035z`,
            }),
          });
        }
        function a0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 96.583 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M55.016,3.717h0.91l0.436,0.145
				c0.073,0.145,0.183,0.231,0.328,0.255c0.121,0,0.23,0,0.327,0l0.072,0.146c0.121,0,0.206,0.013,0.254,0.036
				c0.098,0.048,0.182,0.036,0.256-0.036c0.096,0,0.242,0.013,0.436,0.036c0.169,0.048,0.339,0.122,0.508,0.218
				c0.194,0.072,0.353,0.157,0.473,0.254c0.146,0.073,0.231,0.122,0.255,0.146c0.072,0.025,0.146,0.037,0.217,0.037
				c0.099,0.073,0.183,0.109,0.255,0.109h0.328c0.048,0,0.133,0.012,0.254,0.036c0.146,0.048,0.292,0.122,0.437,0.218
				c0.169,0.049,0.314,0.097,0.436,0.146l0.182,0.108h0.109c0.072,0.194,0.133,0.375,0.182,0.546
				c0.072,0.168,0.133,0.363,0.181,0.581c0.049,0.218,0.073,0.424,0.073,0.618c0,0.17-0.012,0.34-0.038,0.509
				c0,0.17-0.036,0.34-0.108,0.508c-0.195,0.631-0.388,1.031-0.583,1.201c-0.194,0.194-0.291,0.351-0.291,0.473
				c-0.072,0.048-0.121,0.072-0.145,0.072c-0.07,0.024-0.13,0.037-0.182,0.038h9.673c0.048,0.097,0.085,0.181,0.109,0.254
				c0.073,0.17,0.146,0.279,0.218,0.328c0.461,0.073,0.97,0.17,1.528,0.291c0.533,0.146,1.065,0.278,1.6,0.4
				c0.533,0.098,0.981,0.182,1.345,0.254c0.412,0.098,0.667,0.133,0.764,0.109c0.218,0,0.352-0.206,0.4-0.618
				c0.048-0.121,0.072-0.291,0.072-0.51l0.727-1.454c0-0.024,0-0.133,0-0.327c0-0.17,0.012-0.365,0.037-0.583
				c0.024-0.266,0.061-0.534,0.109-0.799h1.164v3.999l-0.038,0.291v0.073c0,0.072,0.098,0.108,0.291,0.108
				c0.073,0.073,0.51,0.11,1.31,0.11c0.824,0,1.818-0.013,2.981-0.037c1.188,0,2.461-0.012,3.818-0.037
				c1.333-0.024,2.594-0.036,3.782-0.036c0.388-0.024,0.776-0.036,1.164-0.036c0.314,0,0.63,0,0.945,0
				c0.291,0,0.521,0.012,0.691,0.036c0.266,0,0.534,0,0.799,0c0.292,0,0.57-0.036,0.837-0.108c0.534,0,0.897,0,1.09,0
				c0.17,0,0.255,0.036,0.255,0.108c0.243,0.897,0.352,1.467,0.327,1.71c-0.049,0.194-0.158,0.291-0.327,0.291
				c-0.073,0.072-0.375,0.109-0.909,0.109c-0.557,0-1.151-0.024-1.782-0.073c-0.581-0.025-1.15-0.049-1.708-0.073
				c-0.559,0-0.874-0.024-0.945-0.072H78.762c0,0.072-0.146,0.109-0.436,0.109v0.509h1.636l0.582,0.619v1.709H79.78
				c-0.097-0.024-0.194-0.073-0.291-0.146c-0.073-0.023-0.121-0.059-0.146-0.108c-0.073-0.025-0.121-0.037-0.146-0.037
				c-0.073,0-0.158,0.012-0.254,0.037c-0.098,0-0.23,0-0.4,0c-0.169,0.049-0.363,0.072-0.581,0.072l-5.6,0.182
				c-0.776,0.073-1.492,0.132-2.146,0.181c-0.654,0.025-0.994,0.037-1.018,0.037c-0.098,0.169-0.254,0.401-0.473,0.691
				c-0.218,0.314-0.545,0.473-0.981,0.473c-0.389,0-0.837-0.304-1.347-0.909c-0.168,0-0.314-0.036-0.435-0.11
				c-0.146-0.096-0.255-0.145-0.328-0.145c0.073,0.388,0.109,0.691,0.109,0.909c0,0.219,0,0.449,0,0.692
				c0,0.339-0.012,0.593-0.036,0.763c-0.049,0.146-0.109,0.267-0.182,0.364c-0.17,0.024-0.364,0.024-0.583,0
				c-0.169-0.049-0.364-0.122-0.581-0.218c-0.097-0.024-0.521-0.036-1.272-0.036c-0.8,0-1.734,0-2.8,0
				c-1.091,0-2.243,0.012-3.456,0.036c-0.851,0-1.663,0-2.436,0c0.037,0.129,0.074,0.263,0.109,0.4
				c0.291,1.114,0.436,1.999,0.436,2.653v6.837c0,0.582-0.06,0.897-0.182,0.945c-0.169-0.048-0.338-0.072-0.509-0.072h-7.891
				c-0.363,0-0.594-0.036-0.691-0.108c-0.145-0.073-0.218-0.267-0.218-0.583L45.38,17.861c0.049-0.097,0.073-0.194,0.073-0.291
				c-0.041-0.165-0.205-0.268-0.49-0.309c-0.03,0.005-0.059,0.01-0.092,0.018c-0.072,0.024-0.157,0.121-0.254,0.291
				c-0.097,0-0.146,0.085-0.146,0.255s0.012,0.328,0.035,0.472c0,0.122,0.037,0.219,0.11,0.292
				c-0.024,0.072-0.073,0.157-0.146,0.253c-0.098,0.074-0.182,0.109-0.255,0.109c0.073,0.17,0.109,0.327,0.109,0.473
				c0.024,0.146,0.037,0.328,0.037,0.545c0,0.388-0.048,0.74-0.146,1.056c-0.146,0.314-0.412,0.521-0.8,0.617
				c-0.315,0.17-0.704,0.279-1.164,0.328c-0.437,0.048-0.848,0.048-1.236,0c-0.413-0.049-0.752-0.097-1.019-0.146
				c-0.267-0.048-0.399-0.109-0.399-0.182c-0.097-0.024-0.195-0.048-0.292-0.072c-0.194-0.048-0.316-0.108-0.364-0.183
				c-0.023,0.074-0.12,0.364-0.29,0.873c-0.194,0.485-0.412,1.031-0.655,1.637c-0.242,0.582-0.449,1.127-0.618,1.635
				c-0.17,0.461-0.255,0.716-0.255,0.765c0.049,0.072,0.122,0.206,0.219,0.399c0.025,0.17,0.037,0.292,0.037,0.364
				c0,0.097-0.061,0.206-0.182,0.327c-0.049,0.17-0.182,0.376-0.4,0.619c-0.266,0.217-0.775,0.217-1.527,0
				c-0.387-0.097-0.8-0.219-1.236-0.364c-0.437-0.17-0.836-0.328-1.201-0.473c-0.412-0.146-0.848-0.316-1.308-0.509h-0.256
				l0.146-0.219c0.291-0.509,0.631-1.09,1.019-1.746c0.412-0.654,0.788-1.272,1.127-1.854c0.363-0.583,0.654-1.08,0.872-1.492
				c0.243-0.411,0.364-0.654,0.364-0.727c0.073-0.169,0.061-0.412-0.036-0.727c-0.122-0.339-0.303-0.57-0.545-0.692l-0.474-0.254
				c-0.129-0.065-0.257-0.126-0.382-0.181l-7.181-0.51h-6.146c-1.309,0-2.654,0.133-4.036,0.4c-1.551,0.291-2.4,0.642-2.545,1.055
				c-0.097,0.218-0.122,0.545-0.073,0.981c0.073,0.533,0.254,0.994,0.545,1.382c0.29,0.364,0.375,0.618,0.255,0.764
				c-0.049,0.073-0.134,0.108-0.255,0.108L1.164,23.534c-0.34,0-0.619-0.169-0.837-0.509C0.108,22.686,0,22.273,0,21.789V11.243
				c0.121-0.17,0.314-0.303,0.581-0.399c0.559-0.243,1.2-0.219,1.927,0.073c0.51,0.194,2.873,0.521,7.092,0.981
				c0.412,0.024,0.884,0.351,1.418,0.982c0.533,0.605,1.067,0.945,1.601,1.018c0.508,0.048,1.236,0.024,2.181-0.072
				c0.825-0.073,1.576-0.182,2.255-0.328c1.552-0.291,2.91-0.654,4.073-1.092c0.703-0.266,1.685-0.69,2.946-1.271
				c1.567-0.669,3.275-1.02,5.127-1.056c0.153-0.024,0.311-0.048,0.472-0.072c0.679-0.096,1.358-0.194,2.036-0.292
				c0.655-0.071,1.164-0.096,1.528-0.071V9.353c0.146-0.339,0.267-0.667,0.364-0.981c0.073-0.268,0.182-0.486,0.327-0.655
				c0.169-0.194,0.388-0.339,0.655-0.436c0.242-0.073,0.583-0.098,1.019-0.073c0.363,0.073,0.751,0.158,1.163,0.255
				c0.413,0.072,0.788,0.157,1.128,0.254l1.053,0.363c0.074,0.024,0.146,0.11,0.219,0.254c0.073,0.025,0.132,0.122,0.182,0.292
				c0.048,0.145,0.072,0.327,0.072,0.545v0.473h5.854V9.171h3.091v0.473c0.242,0,0.545,0.012,0.909,0.036c0.413,0,0.823,0,1.236,0
				c0.412,0,0.788,0.012,1.127,0.035c0.291,0.049,0.473,0.074,0.546,0.074c0.072,0,0.375-0.024,0.908-0.074
				c0.534-0.023,1.176-0.06,1.927-0.108c0.752-0.024,1.528-0.084,2.327-0.182c0.849-0.048,1.613-0.133,2.292-0.254
				c0.072-0.024,0.181-0.121,0.327-0.291c0.121-0.073,0.242-0.193,0.363-0.363c0.098-0.194,0.207-0.473,0.327-0.837
				c-0.291-0.242-0.509-0.387-0.654-0.436c-0.121-0.048-0.242-0.109-0.363-0.182c-0.243,0-0.388-0.06-0.437-0.182
				c-0.242-0.098-0.522-0.182-0.836-0.254c-0.339-0.073-0.631-0.133-0.873-0.182h-0.146c-0.169-0.121-0.46-0.182-0.872-0.182
				L55.78,6.117c-0.292-0.074-0.484-0.135-0.583-0.183c-0.072-0.048-0.194-0.17-0.364-0.364V5.534h-0.763
				c-0.266,0-0.472,0.013-0.619,0.037c-0.12,0-0.242-0.012-0.363-0.037c-0.217-0.266-0.351-0.557-0.399-0.873
				c-0.073-0.29,0.134-0.836,0.618-1.636V2.917h0.073c0.63,0.169,1.031,0.303,1.199,0.399C54.774,3.462,54.92,3.595,55.016,3.717z
				 M43.071,19.098c-0.414,0.056-1.256,0.068-2.527,0.036c-0.146,0.194-0.219,0.388-0.219,0.583c0,0.315,0.11,0.57,0.328,0.763
				c0.194,0.194,0.46,0.291,0.8,0.291h0.946c0.194,0,0.388-0.097,0.582-0.291c0.194-0.193,0.29-0.448,0.29-0.763
				C43.271,19.512,43.205,19.305,43.071,19.098z`,
            }),
          });
        }
        function k(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 44.625 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M44.465,6.059V7.5l-0.559,0.606h-2.282
				C41.563,8.168,41.502,8.2,41.439,8.2c-0.063,0.031-0.124,0.047-0.185,0.047v2.421h-6.051c0,0.125,0,0.248,0,0.372
				s0.032,0.25,0.093,0.371c0,0.127,0.015,0.267,0.047,0.42c-0.032,0.031-0.094,0.079-0.188,0.141
				c-0.09,0.031-0.185,0.108-0.278,0.234c0.032,0.061,0.079,0.278,0.14,0.649c0.061,0.188,0.093,0.359,0.093,0.513H33.9
				c-0.746,0-1.211-0.015-1.399-0.046c-0.092,0.125-0.216,0.356-0.372,0.7c-0.124,0.339-0.325,0.698-0.604,1.068
				c-0.249,0.372-0.542,0.714-0.884,1.024c-0.341,0.278-0.729,0.451-1.164,0.512c-0.683,0.094-1.473,0.108-2.375,0.047
				c-0.93-0.03-1.66-0.249-2.188-0.652c-0.184,0-0.275-0.06-0.278-0.186v8.38c-0.156,0.03-0.264,0.06-0.328,0.092
				c-0.123,0.061-0.262,0.093-0.418,0.093v7.215h-5.446v-7.029c-0.031-0.031-0.062-0.062-0.093-0.092
				c-0.032,0-0.078-0.016-0.14-0.047c-0.031-0.031-0.061-0.047-0.092-0.047h-3.119l-0.652-0.883c0.372-1.738,0.73-3.321,1.072-4.748
				c0.278-1.21,0.527-2.311,0.744-3.306l0.371-1.535c-0.341-0.622-0.634-1.164-0.881-1.63c-0.311-0.496-0.561-0.774-0.747-0.836
				c-0.187-0.095-0.622-0.141-1.302-0.141c-0.652,0-1.273,0.046-1.863,0.141c-0.031,0.028-0.076,0.077-0.139,0.138
				c-0.094,0.063-0.169,0.124-0.233,0.186l-0.279,0.279l-0.698-0.092c0-0.062-0.03-0.126-0.094-0.187
				c0-0.028-0.015-0.062-0.044-0.093c-0.033-0.062-0.063-0.108-0.094-0.14H5.738v3.445H5.506c-0.062,0.062-0.279,0.154-0.652,0.278
				c-0.373,0.062-0.729,0.062-1.069,0c-0.218-0.061-0.406-0.124-0.559-0.185c-0.156-0.063-0.265-0.093-0.326-0.093
				c-0.032,0-0.094,0-0.188,0c-0.155,0-0.309-0.015-0.465-0.046c-0.155,0-0.341-0.017-0.559-0.048c-0.062,0-0.171-0.062-0.326-0.184
				c-0.187-0.157-0.372-0.39-0.56-0.698c-0.091-0.095-0.139-0.219-0.139-0.374c0-0.186,0-0.296,0-0.327
				c0-0.496,0.109-1.009,0.327-1.536c0-0.062,0.03-0.405,0.092-1.023c0-0.59,0-1.147,0-1.676l0.373-6.981L2.572,0.66V0.52
				l2.374,0.14c0.531,0.063,1.135,0.125,1.816,0.187c0.622,0.062,1.227,0.091,1.816,0.091C9.138,1,9.616,1.048,10.021,1.079
				c0.372,0.062,0.62,0.092,0.746,0.092c0.061,0,0.34,0.017,0.836,0.048c0.495,0.093,1.04,0.169,1.628,0.232
				c0.559,0.063,1.086,0.14,1.583,0.232c0.495,0.063,0.792,0.094,0.884,0.094h0.139v0.14c0.093,0,0.156,0.063,0.188,0.186
				c0.092,0.125,0.092,0.279,0,0.466c-0.095,0.155-0.312,0.294-0.651,0.417c-0.249,0.062-0.56,0.11-0.932,0.14
				c-0.434,0-0.837,0-1.211,0c-0.403,0-0.759,0-1.069,0c-0.312-0.03-0.481-0.047-0.513-0.047L7.274,2.753H7.181
				c-0.029,0-0.044-0.03-0.047-0.091V3.08c0.186,0,0.465,0.017,0.838,0.047c0.401,0,0.807,0.032,1.21,0.095
				c0.433,0.03,0.822,0.076,1.163,0.138c0.374,0,0.622,0.016,0.746,0.047c0.093,0,0.728,0,1.909,0c1.21,0,2.654,0,4.328,0
				c1.739,0,3.601,0,5.587,0c1.955,0,3.799,0,5.538,0c0-0.031,0-0.155,0-0.373c0-0.186,0.029-0.371,0.093-0.558
				c0.03-0.248,0.062-0.496,0.092-0.747h0.095c0.155-0.029,0.418-0.06,0.791-0.09c0.311,0,0.621,0,0.933,0c0.309,0,0.588,0,0.835,0
				c0.282,0.03,0.45,0.074,0.514,0.139c0.093,0.093,0.217,0.264,0.373,0.512c0.122,0.28,0.232,0.512,0.324,0.697h4.701
				c0-0.091,0-0.171,0-0.233c0-0.124,0.032-0.248,0.093-0.372c0-0.124,0.016-0.248,0.047-0.372h0.095
				c0.154-0.063,0.387-0.154,0.698-0.282c0.247-0.124,0.544-0.231,0.885-0.322c0.247-0.125,0.509-0.203,0.791-0.236
				c0.279-0.061,0.481-0.061,0.605,0c0.31,0.127,0.497,0.28,0.559,0.468c0.091,0.185,0.139,0.309,0.139,0.372v3.119l0.466,0.418
				h2.562L44.465,6.059z M26.125,15.183h3.537c0.312,0,0.56-0.094,0.747-0.281c0.216-0.184,0.324-0.431,0.324-0.745v-0.559
				c0-0.311-0.108-0.558-0.324-0.745c-0.187-0.185-0.435-0.278-0.747-0.278h-3.537c-0.311,0-0.573,0.093-0.792,0.278
				c-0.249,0.188-0.373,0.435-0.373,0.745v0.559c0,0.313,0.124,0.561,0.373,0.745C25.553,15.089,25.814,15.183,26.125,15.183z
				 M3.784,3.221c-0.248,0-0.436,0-0.559,0C3.163,3.313,3.133,3.454,3.133,3.638c0,0.217,0,0.436,0,0.651
				c0,0.373,0.013,0.793,0.044,1.257c0.032,0.466,0.078,1.009,0.14,1.629c0.124-0.807,0.31-1.582,0.56-2.327
				c0.217-0.712,0.371-1.211,0.464-1.49C4.157,3.267,3.969,3.221,3.784,3.221z`,
            }),
          });
        }
        function e0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 67.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M2.081,4.085c0.026,0,0.064,0,0.115,0V4.047h0.039
				c0.025,0,0.052,0,0.077,0c4.986,0,9.974,0,14.96,0c0.334-0.024,0.656-0.038,0.965-0.038c0.025-0.026,0.051-0.051,0.075-0.077
				c0.052,0,0.091,0,0.117,0c0.026,0,0.051,0,0.076,0c0.051,0,0.103,0.013,0.155,0.039c0.026,0.024,0.051,0.052,0.077,0.076
				c11.849,0,23.687,0,35.51,0c0.052,0,0.09,0,0.115,0c0.052,0,0.091,0,0.118,0c0.05,0,0.101,0.013,0.152,0.039
				c0.026,0.026,0.053,0.052,0.078,0.077c0.025,0.026,0.051,0.053,0.076,0.078c0.026,0.025,0.04,0.052,0.04,0.077
				c0.025,0.025,0.039,0.05,0.039,0.077c0.024,0,0.039,0.013,0.039,0.038c0.127,0,0.257,0,0.385,0c0,0.025,0,0.052,0,0.076
				c0,0.026,0,0.052,0,0.078c0,0.025,0,0.052,0,0.077c0,0.026,0,0.052,0,0.077c0,0.026,0,0.052,0,0.077c0,0.025,0,0.051,0,0.076
				c0,0.026,0,0.053,0,0.078v0.039c0,0.025,0,0.052,0,0.077s0,0.053,0,0.078s0,0.051,0,0.076c0,0.026,0,0.051,0,0.077v0.04
				l0.039,0.038c0,0.025,0,0.051,0,0.077c0,0.025,0,0.051,0,0.076c-0.026,0.026-0.038,0.052-0.039,0.078v0.039
				c0,0.025,0,0.052,0,0.076c0,0.026,0,0.052,0,0.078c0,0.025,0,0.052,0,0.077v0.076c-0.052,0-0.103,0-0.154,0
				c0,0.026,0,0.053,0,0.078c0.026,0,0.064,0,0.115,0c0.052,0,0.103,0.012,0.154,0.039l0.038,0.04
				c0.026-0.026,0.052-0.053,0.077-0.078c0.027,0,0.064,0,0.117,0c0.153,0,0.321,0,0.501,0c0.026,0,0.051,0.012,0.077,0.039V6.053
				c0.052,0,0.102,0.012,0.154,0.039c0.025,0.025,0.051,0.052,0.077,0.077c0,0.025,0.013,0.052,0.039,0.077
				c0,0.025,0.013,0.051,0.038,0.078V6.36c0,0.026,0,0.053,0,0.078c0,0.026,0,0.052,0,0.078c0,0.024,0,0.051,0,0.076
				c0,0.026,0,0.052,0,0.077c0,0.025,0,0.052,0,0.077c0,0.026,0,0.051,0,0.077s0,0.052,0,0.078V6.94c0,0.025,0,0.051,0,0.076
				c3.316,0,6.619,0,9.91,0c0.05,0,0.103,0.013,0.153,0.04c0.025,0.025,0.053,0.05,0.078,0.077c0.025,0,0.064,0.012,0.115,0.037
				c0.026,0.025,0.051,0.052,0.078,0.078c0,0.025,0.012,0.052,0.039,0.077c0,0.025,0.014,0.052,0.039,0.077c0,0.025,0,0.052,0,0.077
				v0.039c0,0.024,0,0.052,0,0.077c0,0.025,0,0.051,0,0.077c0,0.025,0,0.051,0,0.076c0,0.027,0,0.053,0,0.078s0,0.053,0,0.078
				c0,0.024,0,0.051,0,0.077c0,0.024,0,0.051,0,0.076v0.039c0,0.026,0,0.052,0,0.077s0,0.051,0,0.077s0,0.052,0,0.078
				c0,0.025,0,0.051,0,0.076c0,0.026,0,0.052,0,0.078c0,0.025,0,0.052,0,0.077c0,0.025,0,0.05,0,0.077v0.038
				c0,0.025,0,0.053,0,0.078s0,0.051,0,0.077c0,0.025,0,0.052,0,0.077c0,0.025,0,0.05,0,0.077c0,0.025,0,0.052,0,0.077
				c-0.025,0.025-0.039,0.051-0.039,0.077c0,0.025,0.014,0.051,0.039,0.077v0.039c-0.025,0.026-0.051,0.051-0.077,0.078
				c0,0.024,0,0.051,0,0.076v0.039c-0.026,0.025-0.052,0.051-0.078,0.077c0,0.026,0,0.052,0,0.077L66.74,9.638
				c-0.026,0.025-0.052,0.039-0.077,0.039c-0.024,0-0.064,0.012-0.115,0.039c-1.583,0-3.175,0-4.782,0c0,0.026,0,0.052,0,0.078
				v0.037c0,0.025,0,0.052,0,0.077c0,0.026,0,0.053,0,0.078s0,0.05,0,0.076v0.077h-0.038v0.04c-0.025,0-0.052,0.013-0.078,0.039
				c0,0.024,0,0.05,0,0.077c-0.025,0.025-0.052,0.05-0.078,0.077h-0.038c-0.025,0-0.064,0.012-0.115,0.038
				c-0.052-0.025-0.104-0.038-0.155-0.038c-0.026,0-0.063,0.012-0.116,0.038c-1.413,0-2.827,0-4.241,0
				c-0.027,0.025-0.052,0.039-0.078,0.039c-0.025,0-0.064,0.013-0.116,0.039c-0.025,0-0.051,0-0.077,0
				c-0.025,0.026-0.051,0.052-0.077,0.078l0.039,0.039c0,0.025,0.012,0.052,0.038,0.077c0,0.026,0,0.052,0,0.077
				c-0.025,0.025-0.051,0.038-0.077,0.038c0,0.027,0,0.053,0,0.078c-0.026,0.025-0.039,0.052-0.039,0.077c-0.025,0-0.051,0-0.077,0
				c-0.025,0.025-0.064,0.039-0.116,0.039c-0.025,0-0.063,0-0.115,0c-0.026,0-0.051,0-0.077,0c-0.052,0-0.103,0-0.155,0v0.116
				c-0.452,0-0.901,0-1.35,0v0.039c0,0.026,0,0.051,0,0.078c0,0.024,0,0.05,0,0.076s0,0.052,0,0.078c0,0.025,0,0.051,0,0.077
				c0,0.025,0,0.051,0,0.076v0.04c0,0.025,0,0.05,0,0.077c0,0.025,0,0.05,0,0.077c0,0.025,0,0.051,0,0.076v0.078
				c-0.103,0.025-0.218,0.039-0.346,0.039v0.039c0,0.025-0.013,0.051-0.04,0.077c0,0.025-0.013,0.05-0.038,0.077
				c0,0.025-0.013,0.038-0.038,0.038c0,0.025-0.014,0.051-0.04,0.077c0,0.025,0,0.052,0,0.077c-0.025,0.025-0.051,0.051-0.078,0.077
				c0,0.026,0,0.052,0,0.077c-0.025,0.026-0.05,0.052-0.076,0.077c0,0.025,0,0.051,0,0.077c-0.026,0.025-0.039,0.052-0.039,0.077
				l-0.039,0.039c-0.025,0.025-0.039,0.052-0.039,0.077c-0.026,0.026-0.039,0.052-0.039,0.077c-0.025,0.026-0.039,0.052-0.039,0.077
				c-0.025,0.025-0.051,0.051-0.077,0.077c0,0.026-0.014,0.052-0.04,0.078v0.039c0,0.025-0.012,0.051-0.038,0.076
				c-0.013,0.012-0.026,0.026-0.039,0.04c-0.013,0.016-0.027,0.027-0.038,0.039c-0.026,0.026-0.039,0.052-0.039,0.077
				c-0.026,0.024-0.039,0.049-0.039,0.077c0,0.025-0.013,0.037-0.038,0.037c-0.027,0.028-0.053,0.053-0.078,0.078
				s-0.038,0.051-0.038,0.077c-0.026,0.026-0.052,0.052-0.078,0.077c-0.024,0.025-0.052,0.052-0.078,0.077l-0.076,0.077
				c-0.03,0-0.063,0.006-0.097,0.02c-0.013,0.017-0.019,0.035-0.019,0.057c-0.026,0.025-0.052,0.051-0.077,0.077H52.86
				c-0.021,0.01-0.04,0.018-0.059,0.019l-0.019,0.02c-0.026,0.025-0.038,0.052-0.038,0.077c0,0.026-0.013,0.052-0.04,0.077
				c0,0.026-0.013,0.039-0.038,0.039c-0.025,0.025-0.051,0.052-0.077,0.077c-0.076,0.027-0.154,0.052-0.231,0.079
				c-0.076,0.024-0.142,0.05-0.193,0.076v0.039l-0.038,0.04c-0.153,0-0.308,0-0.462,0c0,0.025-0.014,0.039-0.039,0.039
				c-0.051,0.025-0.103,0.038-0.155,0.038c-0.515,0-1.029,0-1.542,0c-0.051-0.025-0.103-0.038-0.154-0.038
				c-0.026-0.026-0.04-0.052-0.04-0.078c-0.025,0-0.05,0-0.076,0c-0.104,0-0.208,0-0.31,0c-0.024-0.025-0.063-0.039-0.115-0.039
				l-0.039-0.039c-0.026,0-0.051,0-0.078,0c-0.078-0.025-0.141-0.037-0.191-0.037c-0.026-0.027-0.052-0.052-0.078-0.079
				c0-0.025-0.013-0.052-0.039-0.077h-0.038c-0.051-0.025-0.103-0.039-0.155-0.039c-0.025-0.025-0.051-0.051-0.076-0.077
				c0-0.025-0.012-0.052-0.039-0.077c-0.026-0.026-0.064-0.052-0.115-0.078v-0.038c-1.414,0-2.814,0.013-4.204,0.038
				c-0.025,0-0.037,0.013-0.037,0.04h-0.04c-0.052,0.026-0.103,0.039-0.154,0.039c-0.153,0-0.309,0-0.462,0l-0.04,0.039
				c-0.05,0-0.09,0.013-0.115,0.039c-0.052,0-0.104,0.013-0.155,0.039c-0.025,0.025-0.038,0.052-0.038,0.077
				c-0.052,0.025-0.103,0.052-0.155,0.077c-0.025,0.027-0.064,0.052-0.115,0.079c-0.026,0.024-0.053,0.037-0.078,0.037
				c0,0.025-0.013,0.052-0.038,0.077c0,0.026-0.013,0.052-0.038,0.078h-0.039c-0.078,0.025-0.141,0.038-0.193,0.038
				c-0.026,0.026-0.064,0.052-0.116,0.078c-0.025,0.025-0.052,0.052-0.077,0.077c-0.026,0.024-0.05,0.05-0.077,0.076
				c0,0.026,0,0.052,0,0.077c-0.025,0.025-0.038,0.052-0.038,0.077c-0.053,0.026-0.104,0.052-0.154,0.078
				c-0.026,0.025-0.064,0.052-0.117,0.076c-0.025,0.028-0.051,0.04-0.076,0.04c0,0.025-0.013,0.05-0.04,0.077
				c-0.024,0.027-0.05,0.051-0.076,0.076c0,0.026,0,0.052,0,0.078c-0.025,0.025-0.052,0.052-0.077,0.077
				c-0.026,0.025-0.039,0.052-0.039,0.078c-0.026,0.025-0.052,0.051-0.078,0.076c0,0.025-0.012,0.052-0.038,0.077v0.039
				c-0.026,0.025-0.04,0.052-0.04,0.077c-0.025,0.025-0.039,0.051-0.039,0.078c-0.026,0.025-0.052,0.051-0.076,0.076
				c0,0.026,0,0.052,0,0.077c-0.025,0.025-0.038,0.053-0.038,0.079c0,0.025-0.013,0.05-0.04,0.077c0,0.024-0.013,0.051-0.039,0.076
				c0,0.026-0.012,0.039-0.039,0.039c-0.025,0.026-0.039,0.052-0.039,0.078c-0.025,0.025-0.038,0.051-0.038,0.077
				c0,0.025-0.013,0.05-0.039,0.077c0,0.025,0,0.052,0,0.077c-0.025,0.025-0.039,0.051-0.039,0.077
				c-0.052,0.025-0.09,0.051-0.115,0.076c-0.025,0.026-0.038,0.053-0.038,0.078c-0.026,0.025-0.064,0.039-0.115,0.039
				c0,0.025-0.014,0.052-0.04,0.077c-0.025,0.025-0.051,0.052-0.077,0.077c0,0.025-0.013,0.038-0.038,0.038l-0.039,0.04
				c-0.052,0-0.09,0.013-0.116,0.039c-0.05,0-0.102,0.013-0.153,0.039l-0.039,0.039c-0.051,0.025-0.103,0.039-0.155,0.039
				c-0.077,0-0.167,0-0.269,0l-0.039,0.039c-0.051,0-0.09,0.014-0.116,0.039c-0.128,0-0.244,0-0.347,0
				c-0.025-0.024-0.065-0.039-0.116-0.039l-0.039-0.039c-0.024,0-0.05,0-0.076,0c-0.078-0.025-0.142-0.039-0.193-0.039
				c0-0.026-0.013-0.052-0.04-0.077c-0.025,0-0.063,0-0.116,0c-0.051-0.025-0.103-0.052-0.153-0.078
				c-0.025,0-0.051-0.012-0.078-0.038c-0.022-0.023-0.042-0.042-0.057-0.057c-0.087-0.01-0.171-0.017-0.251-0.02
				c-0.025-0.025-0.051-0.052-0.077-0.077c-0.025,0-0.038-0.013-0.038-0.039c-0.026-0.025-0.039-0.052-0.039-0.078
				c0-0.025-0.013-0.051-0.039-0.076c-0.025-0.026-0.051-0.052-0.077-0.077c0-0.025,0-0.052,0-0.077
				c-0.026-0.027-0.038-0.052-0.038-0.077c0-0.026-0.013-0.052-0.039-0.077c0-0.026,0-0.052,0-0.078v-0.039c0-0.025,0-0.052,0-0.076
				c0-0.026-0.013-0.052-0.039-0.077c-0.025-0.025-0.052-0.053-0.077-0.079c0-0.025,0-0.05,0-0.077c0-0.025,0-0.051,0-0.076
				c0-0.027,0-0.053,0-0.078s0-0.052,0-0.077v-0.078c-0.025-0.024-0.038-0.051-0.038-0.076c0-0.025,0-0.052,0-0.077s0-0.051,0-0.077
				c0-0.025,0-0.052,0-0.077v-0.04c0-0.025,0-0.049,0-0.076c0-0.026,0-0.052,0-0.077c0-0.026,0-0.053,0-0.077
				c0-0.025,0-0.052,0-0.077c0-0.026,0-0.052,0-0.078c0-0.024-0.013-0.051-0.04-0.076c0-0.025,0-0.052,0-0.078
				c-0.025,0-0.038-0.013-0.038-0.037c0-0.025,0-0.052,0-0.077c-1.954,0-3.921,0.012-5.9,0.039c0,0.025-0.013,0.039-0.038,0.039
				c-0.051,0.024-0.104,0.037-0.155,0.037c-0.026,0-0.063,0-0.117,0c-0.024,0-0.05,0-0.076,0c0,0.026,0,0.053,0,0.078
				s-0.014,0.052-0.039,0.076c0,0.027,0,0.053,0,0.078c-0.025,0.025-0.051,0.052-0.078,0.077c-0.009,0.011-0.021,0.023-0.038,0.037
				l-0.039,0.021v0.019l-0.077,0.077c-0.026,0.027-0.04,0.051-0.04,0.076c-0.051,0.026-0.088,0.04-0.113,0.04
				c0,0.025-0.013,0.052-0.039,0.077c0,0.026-0.013,0.052-0.039,0.077c0,0.025,0,0.052,0,0.077
				c-0.025,0.025-0.052,0.052-0.077,0.076c-0.026,0.028-0.064,0.053-0.116,0.078c0,0.025-0.013,0.052-0.038,0.077
				c-0.027,0.025-0.053,0.051-0.079,0.078c-0.024,0.025-0.051,0.039-0.076,0.039c-0.026,0.024-0.038,0.052-0.038,0.076
				c-0.026,0.025-0.052,0.05-0.078,0.078c-0.025,0.025-0.051,0.05-0.077,0.076c0,0.026,0,0.052,0,0.077
				c-0.025,0.025-0.051,0.053-0.077,0.077c-0.026,0.026-0.052,0.052-0.078,0.078c-0.025,0.025-0.039,0.051-0.039,0.077
				c-0.05,0.025-0.089,0.039-0.115,0.039c0,0.025-0.013,0.05-0.038,0.076c-0.025,0.026-0.051,0.052-0.078,0.078
				c-0.025,0.025-0.052,0.051-0.078,0.077c-0.025,0.025-0.05,0.051-0.076,0.077c-0.027,0.026-0.052,0.052-0.077,0.077
				c-0.027,0.025-0.065,0.052-0.116,0.077c-0.051,0.025-0.09,0.052-0.117,0.077c-0.024,0.025-0.051,0.038-0.076,0.038
				c0,0.026-0.013,0.053-0.038,0.078c-0.027,0.025-0.04,0.051-0.04,0.077h-0.039c-0.051,0.025-0.102,0.039-0.153,0.039
				c-0.026,0.025-0.039,0.053-0.039,0.077c-0.025,0.026-0.038,0.052-0.038,0.078l-0.04,0.037c-0.025,0.025-0.051,0.039-0.076,0.039
				c-0.025,0-0.065,0.013-0.117,0.04c-0.05-0.026-0.089-0.04-0.114-0.04c-0.026,0-0.039,0.013-0.039,0.04
				c-0.026,0.025-0.039,0.051-0.039,0.076c-0.025,0-0.052,0-0.077,0c-0.026,0.026-0.065,0.039-0.117,0.039c-1.696,0-3.393,0-5.089,0
				c-0.026,0-0.064,0-0.117,0c-0.025,0-0.05,0-0.076,0c-0.052-0.025-0.103-0.039-0.155-0.039c-0.025-0.025-0.052-0.051-0.077-0.076
				c0-0.026-0.013-0.053-0.039-0.078c0-0.025,0-0.052,0-0.076c0-0.026,0-0.052,0-0.078l0.019-0.039c-0.044,0-0.09,0-0.135,0
				c0,0.025,0,0.053,0,0.077c-0.025,0-0.039,0.013-0.039,0.04c0,0.024,0,0.05,0,0.076c-0.026,0-0.039,0.013-0.039,0.039
				c0,0.028-0.013,0.052-0.039,0.078v0.038c-0.026,0.026-0.039,0.052-0.039,0.077c-0.025,0-0.051,0.013-0.078,0.041
				c0,0.024,0,0.05,0,0.076v0.039c0,0.025,0,0.05,0,0.076c-0.025,0-0.051,0.013-0.076,0.039c0,0.026,0,0.052,0,0.077v0.04
				c0,0.025,0,0.051,0,0.076v0.04c0,0.026-0.013,0.051-0.039,0.077v0.039c-0.025,0.025-0.038,0.05-0.038,0.078v0.037
				c-0.026,0.025-0.04,0.052-0.04,0.076c-0.025,0-0.038,0.013-0.038,0.039c-0.025,0.026-0.039,0.053-0.039,0.078
				c-0.026,0-0.039,0.013-0.039,0.039c0,0.026,0,0.05,0,0.077v0.04c0,0.025,0,0.05,0,0.076c-0.026,0-0.052,0.013-0.078,0.039
				c-0.024,0.025-0.037,0.051-0.037,0.078c-0.026,0-0.04,0.012-0.04,0.038c0,0.026,0,0.052,0,0.077V19.2
				c-0.026,0.025-0.038,0.052-0.038,0.077c-0.027,0-0.052,0.013-0.077,0.04c0,0.025-0.013,0.05-0.038,0.077v0.038
				c0,0.026,0,0.052,0,0.078c-0.025,0-0.039,0.012-0.039,0.039c0,0.025,0,0.052,0,0.077c-0.026,0-0.039,0.012-0.039,0.039
				c0,0.025-0.012,0.052-0.038,0.077v0.037c-0.026,0.028-0.039,0.053-0.039,0.078c-0.025,0-0.05,0.012-0.077,0.038
				c0,0.026,0,0.052,0,0.077c-0.025,0-0.039,0.013-0.039,0.039c0,0.026,0,0.052,0,0.078c-0.025,0-0.038,0.013-0.038,0.04
				c-0.027,0.025-0.04,0.049-0.04,0.076c-0.025,0-0.037,0.013-0.037,0.038c0,0.025,0,0.052,0,0.077v0.039
				c-0.025,0.025-0.039,0.052-0.039,0.076c-0.026,0-0.051,0.013-0.077,0.039c0,0.027-0.013,0.053-0.039,0.079v0.038
				c-0.026,0.025-0.039,0.05-0.039,0.077c-0.026,0-0.039,0.014-0.039,0.039c0,0.025,0,0.052,0,0.078
				c-0.025,0-0.039,0.012-0.039,0.038c0,0.024-0.013,0.05-0.038,0.077c-0.026,0.025-0.038,0.052-0.038,0.078
				c-0.027,0-0.039,0.013-0.039,0.039c-0.027,0.025-0.04,0.052-0.04,0.076c-0.025,0-0.038,0.014-0.038,0.04
				c-0.026,0.025-0.038,0.05-0.038,0.077c-0.026,0-0.052,0.013-0.078,0.039c-0.025,0.024-0.039,0.051-0.039,0.077
				c-0.025,0-0.038,0.012-0.038,0.039c0,0.025,0,0.053,0,0.077c-0.025,0-0.039,0.012-0.039,0.038c0,0.026-0.013,0.052-0.039,0.078
				l-0.039,0.037c0,0.026-0.013,0.052-0.038,0.077v0.04c-0.026,0.025-0.039,0.052-0.039,0.077c-0.026,0-0.039,0.012-0.039,0.039
				v0.039l-0.039,0.078c-0.026,0-0.039,0.012-0.039,0.038v0.077h-0.019l-0.02,0.039c0,0.025,0,0.052,0,0.077
				c-0.014,0-0.028,0.007-0.039,0.02c-0.015,0.002-0.029,0.007-0.038,0.019v0.077l-0.039,0.04l-0.04,0.076
				c-0.025,0-0.051,0.013-0.077,0.04c-0.026,0.025-0.039,0.05-0.039,0.076c-0.026,0-0.051,0.013-0.077,0.039
				c-0.026,0.026-0.039,0.052-0.039,0.078c-0.026,0-0.051,0.012-0.077,0.038v0.077c0.045,0,0.09,0,0.135,0
				c0.044,0.001,0.089,0.001,0.135,0c0,0.026,0,0.053,0,0.078c-0.026,0-0.051,0.012-0.078,0.037c0,0.027,0,0.052,0,0.077
				l-0.039,0.04c0,0.025-0.012,0.051-0.038,0.076v0.04c0,0.025,0,0.051,0,0.076v0.04c0,0.025,0,0.051,0,0.077
				c-0.026,0-0.052,0.013-0.078,0.039c0,0.025,0,0.052,0,0.078l-0.039,0.037c0,0.025-0.013,0.052-0.038,0.077v0.039
				c0,0.024,0,0.052,0,0.077v0.039c0,0.026,0,0.052,0,0.077v0.039c0,0.026,0,0.051,0,0.077v0.077c0,0.013-0.007,0.026-0.018,0.039
				c-0.018,0.004-0.037,0.017-0.059,0.04c-0.025,0.025-0.04,0.051-0.04,0.076c-0.025,0-0.038,0.012-0.038,0.039s0,0.052,0,0.078
				v0.154c-0.026,0-0.052,0.013-0.078,0.039c0,0.025,0,0.052,0,0.076l-0.037,0.039c0,0.026-0.014,0.052-0.039,0.078v0.039
				c-0.026,0.025-0.039,0.05-0.039,0.077c-0.026,0-0.039,0.013-0.039,0.039v0.038c-0.051,0.025-0.09,0.038-0.116,0.038
				c-0.025,0-0.064,0.014-0.114,0.04c-0.025,0-0.066,0-0.118,0c-0.025,0-0.063,0.012-0.116,0.039c-0.02,0-0.039,0-0.057,0
				c-0.034,0.01-0.066,0.023-0.097,0.039c-0.025,0-0.039,0.013-0.039,0.039c-0.025,0.024-0.039,0.051-0.039,0.078
				c-0.025,0-0.052,0.012-0.077,0.039c0,0.025-0.014,0.052-0.039,0.076v0.037c0,0.026,0,0.053,0,0.079
				c-0.026,0-0.051,0.012-0.077,0.038c-0.025,0.025-0.052,0.052-0.078,0.077v0.039c-0.026,0.026-0.039,0.052-0.039,0.077
				c-0.025,0-0.039,0.013-0.039,0.039c0,0.026,0,0.052,0,0.077v0.04c0,0.025,0,0.05,0,0.076v0.04c0,0.025,0,0.051,0,0.076
				c-0.025,0-0.05,0.013-0.076,0.039c0,0.026,0,0.052,0,0.079v0.038c0,0.025,0,0.05,0,0.077v0.038c0,0.025,0,0.051,0,0.077
				l-0.039,0.038c0,0.026-0.012,0.053-0.04,0.078v0.039c0,0.026,0,0.052,0,0.077v0.039c-0.025,0.026-0.039,0.052-0.039,0.078
				c0.052,0.025,0.091,0.049,0.117,0.076c0.026,0,0.051,0.013,0.076,0.039c0,0.025,0,0.052,0,0.077s0,0.051,0,0.077
				c-0.025,0.026-0.05,0.052-0.076,0.077c-0.026,0.026-0.065,0.04-0.117,0.04c-0.05,0-0.102,0-0.153,0
				c-0.025,0.024-0.04,0.051-0.04,0.076c-0.025,0-0.051,0.015-0.076,0.039c0,0.026-0.013,0.052-0.039,0.078l-0.039,0.038
				c0,0.025-0.013,0.053-0.038,0.078l-0.039,0.039c0,0.024-0.014,0.052-0.04,0.077v0.037c-0.024,0.027-0.038,0.052-0.038,0.078
				c-0.026,0-0.039,0.012-0.039,0.038h-0.038c-0.103,0-0.206,0-0.31,0v0.077c0,0.026,0,0.052,0,0.077v0.039c0,0.027,0,0.053,0,0.078
				c0.026,0.025,0.053,0.051,0.078,0.076l0.039,0.04v0.039c0.026,0.027,0.039,0.052,0.039,0.077s0,0.051,0,0.077
				c-0.025,0.025-0.039,0.051-0.039,0.076c-0.021,0-0.034,0.007-0.039,0.021v0.02c-0.024,0.025-0.037,0.049-0.037,0.077h-0.041
				c-0.05,0.025-0.102,0.037-0.153,0.037c-2.492,0-4.974,0.014-7.441,0.039c-0.025,0-0.051,0-0.076,0
				c-0.027,0-0.065,0.013-0.117,0.039c-0.051-0.025-0.103-0.039-0.154-0.039c-0.052-0.025-0.103-0.039-0.155-0.039
				c-0.026,0-0.051,0-0.077,0s-0.051,0-0.076,0c-0.052-0.025-0.103-0.037-0.156-0.037c-0.024-0.028-0.051-0.052-0.076-0.077
				c-0.025-0.025-0.052-0.053-0.078-0.078c-0.024-0.025-0.05-0.052-0.076-0.077c-0.026-0.026-0.051-0.052-0.078-0.077
				c0-0.025-0.012-0.052-0.039-0.077c-0.025-0.025-0.05-0.051-0.076-0.077c-0.027-0.025-0.052-0.039-0.078-0.039
				c-0.026-0.025-0.052-0.051-0.077-0.078c-0.025-0.025-0.052-0.052-0.078-0.076c-0.025-0.026-0.038-0.052-0.038-0.077
				s0-0.053,0-0.077c0-0.026,0-0.051,0-0.078c0-0.025,0-0.05,0-0.076c0-0.026,0-0.052,0-0.077v-0.04
				c0.025-0.025,0.05-0.051,0.078-0.076c0.025-0.026,0.051-0.052,0.076-0.078c0.052,0,0.09,0,0.117,0c0.025,0,0.051,0,0.076,0
				c0.052,0,0.103,0.013,0.155,0.039c0.025,0.025,0.05,0.052,0.077,0.077c0,0.025,0.014,0.053,0.039,0.078v-0.078
				c0-0.025,0-0.052,0-0.077v-0.077c-0.025-0.025-0.052-0.052-0.078-0.076c0-0.026-0.013-0.052-0.038-0.078
				c0-0.024-0.013-0.039-0.039-0.039v-0.077c0.026-0.025,0.039-0.052,0.039-0.077l0.077-0.077h0.039c0-0.025,0-0.05,0-0.077v-0.039
				c0-0.026,0-0.052,0-0.078c0-0.024,0.013-0.038,0.039-0.038c0-0.025,0.013-0.052,0.037-0.078c0.012-0.01,0.025-0.018,0.04-0.019
				c0.011-0.014,0.024-0.02,0.039-0.02c0.025-0.025,0.052-0.05,0.078-0.076c0.025-0.025,0.05-0.039,0.076-0.039
				c0-0.025,0-0.05,0-0.078c0.026-0.024,0.051-0.037,0.077-0.037c0-0.025,0.014-0.053,0.039-0.077l0.038-0.04
				c0-0.025,0-0.052,0-0.076c0.025-0.025,0.053-0.039,0.078-0.039c0-0.027,0-0.052,0-0.078c0-0.024,0.013-0.037,0.038-0.037
				c0-0.027,0.013-0.052,0.039-0.077v-0.04c0-0.025,0-0.051,0-0.076v-0.04c0-0.025,0-0.051,0-0.077
				c0.025-0.025,0.051-0.039,0.077-0.039c0-0.025,0-0.051,0-0.077s0.014-0.04,0.039-0.04c0-0.024,0.013-0.049,0.038-0.076
				c0.026-0.025,0.052-0.038,0.079-0.038c0-0.026,0-0.052,0-0.079v-0.038c0-0.025,0-0.051,0-0.077
				c0.025-0.026,0.05-0.039,0.076-0.039c0-0.025,0-0.052,0-0.077c0-0.026,0.013-0.038,0.039-0.038c0-0.025,0-0.052,0-0.077
				s0.012-0.039,0.039-0.039c0-0.026,0.014-0.052,0.039-0.078v-0.039c0.025-0.025,0.038-0.051,0.038-0.076v-0.039
				c0.026-0.025,0.039-0.052,0.039-0.078c0.026-0.025,0.051-0.037,0.077-0.037c0-0.027,0.013-0.052,0.039-0.077v-0.039
				c0-0.025,0-0.052,0-0.078c0-0.025,0.012-0.038,0.039-0.038c0-0.027,0-0.052,0-0.078c0.026-0.025,0.05-0.039,0.076-0.039
				c0.025-0.025,0.039-0.051,0.039-0.077l0.039-0.039c0-0.025,0.013-0.051,0.038-0.077v-0.038c0-0.025,0-0.053,0-0.078
				s0.014-0.039,0.039-0.039c0-0.026,0.012-0.052,0.039-0.077V23.48c0.025-0.025,0.038-0.05,0.038-0.076l0.039-0.041
				c0.025-0.025,0.039-0.05,0.039-0.076c0-0.026,0.013-0.039,0.038-0.039c0-0.026,0-0.052,0-0.078c0-0.025,0.014-0.039,0.039-0.039
				c0-0.025,0.013-0.051,0.04-0.077v-0.038c0.025-0.025,0.039-0.052,0.039-0.078c0.025-0.025,0.051-0.037,0.077-0.037
				c0-0.026,0.013-0.052,0.038-0.077c0-0.025,0.013-0.039,0.039-0.039c0-0.025,0-0.053,0-0.077c0-0.026,0.014-0.04,0.04-0.04
				c0-0.025,0-0.051,0-0.077v-0.039c0.025-0.025,0.038-0.052,0.038-0.077l0.04-0.037c0-0.026,0-0.053,0-0.078
				c0.025-0.025,0.051-0.038,0.076-0.038c0-0.026,0.013-0.053,0.039-0.078v-0.039c0.025-0.026,0.038-0.051,0.038-0.077v-0.039
				c0.026-0.025,0.04-0.05,0.04-0.077l0.038-0.038c0-0.025,0-0.052,0-0.077c0.051-0.025,0.09-0.039,0.115-0.039
				c0.027-0.026,0.038-0.052,0.038-0.077s0.014-0.038,0.04-0.038c0-0.026,0.012-0.053,0.038-0.079v-0.038c0-0.025,0-0.052,0-0.077
				c0-0.026,0.013-0.039,0.037-0.039c0-0.025,0.013-0.052,0.039-0.077v-0.039c0-0.026,0.014-0.052,0.039-0.077v-0.04
				c0.025-0.025,0.04-0.051,0.04-0.076v-0.04c0.025-0.025,0.038-0.05,0.038-0.077l0.038-0.037c0.026-0.026,0.039-0.052,0.039-0.077
				c0-0.026,0.013-0.04,0.039-0.04c0-0.025,0.013-0.051,0.038-0.076l0.038-0.04v-0.077c0.027,0,0.052-0.013,0.078-0.039v-0.039
				c0-0.026,0-0.052,0-0.077v-0.038c0-0.026,0.012-0.052,0.038-0.079v-0.039l0.02-0.018l0.02-0.04v-0.019l0.038-0.039
				c0.026-0.025,0.039-0.052,0.039-0.077l0.039-0.038c0-0.027,0.012-0.051,0.039-0.076v-0.04c0.026-0.026,0.039-0.052,0.039-0.078
				c0.025-0.025,0.051-0.039,0.077-0.039c0-0.025,0.013-0.051,0.038-0.077v-0.038c0.026-0.025,0.039-0.05,0.039-0.078l0.038-0.037
				c0.026-0.025,0.04-0.052,0.04-0.077c0-0.026,0.012-0.039,0.039-0.039c0-0.025,0-0.052,0-0.077c0-0.026,0.013-0.039,0.038-0.039
				c0-0.026,0-0.052,0-0.078c0-0.025,0.013-0.038,0.039-0.038c0-0.026,0-0.052,0-0.077v-0.04h0.02
				c0.019-0.002,0.051-0.016,0.096-0.039V19.2c0.026-0.025,0.039-0.051,0.039-0.077l0.039-0.039
				c0.026-0.025,0.038-0.052,0.038-0.077l0.04-0.039c0-0.025,0.013-0.05,0.038-0.077v-0.037c0-0.028,0-0.053,0-0.078v-0.039
				c0-0.019,0-0.038,0-0.059v-0.058c0-0.025,0-0.051,0-0.077v-0.038c0-0.025,0-0.052,0-0.078v-0.037c0-0.025,0-0.053,0-0.078v-0.038
				c0-0.025,0-0.053,0-0.077V18.16c0-0.026,0-0.052,0-0.077v-0.04c0-0.025,0-0.051,0-0.076v-0.039c0-0.026,0-0.053,0-0.077v-0.038
				c0-0.027,0-0.053,0-0.079c0.026-0.025,0.051-0.039,0.078-0.039c0-0.025,0.012-0.051,0.037-0.076c0-0.026,0.014-0.04,0.039-0.04
				c0-0.025,0-0.05,0-0.076l0.038-0.039c0.026-0.026,0.04-0.052,0.04-0.078l0.039-0.039c0-0.025,0.012-0.051,0.038-0.077
				c0-0.025,0.013-0.039,0.04-0.039c0-0.025,0-0.052,0-0.078v-0.038c0-0.025,0.013-0.052,0.038-0.077v-0.039
				c0-0.025,0.013-0.052,0.039-0.077v-0.039c0.026-0.026,0.039-0.052,0.039-0.077c0-0.026,0.012-0.039,0.037-0.039
				c0-0.026,0.014-0.052,0.041-0.077c0-0.025,0.013-0.04,0.038-0.04c0-0.025,0.013-0.05,0.038-0.076
				c0.026-0.026,0.052-0.039,0.077-0.039c0-0.026,0.013-0.052,0.039-0.077v-0.039c0.026-0.026,0.039-0.052,0.039-0.078
				c0-0.025,0.013-0.039,0.038-0.039c0-0.025,0.014-0.051,0.039-0.077v-0.037c0-0.025,0.013-0.053,0.039-0.079v-0.038
				c0-0.024,0.013-0.052,0.038-0.076c0-0.025,0.013-0.039,0.04-0.039c0-0.027,0.012-0.053,0.039-0.078
				c0-0.025,0.012-0.039,0.038-0.039c0-0.025,0.013-0.052,0.039-0.077c0-0.025,0.013-0.04,0.039-0.04
				c0.025-0.024,0.038-0.051,0.038-0.076l0.04-0.038c0.025-0.026,0.038-0.053,0.038-0.078l0.039-0.039
				c0.025-0.024,0.038-0.051,0.039-0.077c-0.025-0.026-0.051-0.04-0.077-0.04c-0.025-0.025-0.038-0.049-0.038-0.076
				c-0.078,0-0.142,0-0.192,0c-0.027-0.026-0.066-0.039-0.117-0.039c-0.026,0-0.039-0.013-0.039-0.038c-0.103,0-0.206,0-0.307,0
				c-0.053-0.026-0.104-0.04-0.156-0.04c-0.025-0.024-0.038-0.05-0.038-0.076c-0.18,0-0.347,0-0.502,0
				c-0.025-0.026-0.064-0.039-0.116-0.039c-0.026,0-0.039-0.013-0.039-0.04c-0.129,0-0.27,0-0.424,0
				c-0.051-0.025-0.103-0.039-0.155-0.039c-0.026-0.024-0.038-0.051-0.038-0.076c-0.129,0-0.257,0-0.386,0
				c-0.026-0.025-0.063-0.04-0.114-0.04c-0.026,0-0.04-0.012-0.04-0.039c-0.102,0-0.205,0-0.308,0
				c-0.051-0.025-0.102-0.037-0.153-0.037c-0.025-0.025-0.04-0.052-0.04-0.077c-0.102,0-0.204,0-0.308,0
				c-0.026-0.026-0.064-0.04-0.115-0.04c-0.027,0-0.039-0.012-0.039-0.039c-0.155,0-0.322,0-0.501,0
				c-0.051-0.025-0.103-0.038-0.153-0.038c-0.027-0.026-0.039-0.052-0.039-0.078c-0.129,0-0.258,0-0.386,0
				c-0.025-0.025-0.065-0.039-0.116-0.039l-0.04-0.039c-0.076,0-0.153,0-0.229,0c-0.052-0.025-0.104-0.037-0.154-0.037
				c-0.026-0.027-0.039-0.052-0.039-0.079c-0.051,0-0.117,0-0.192,0c-0.027-0.025-0.065-0.038-0.117-0.038l-0.039-0.039
				c-0.078,0-0.153,0-0.231,0c-0.052-0.025-0.103-0.039-0.154-0.039c-0.026-0.025-0.04-0.051-0.04-0.077c-0.051,0-0.089,0-0.114,0
				c-0.026-0.025-0.065-0.039-0.116-0.039c-0.025,0-0.039-0.013-0.039-0.039c-0.026,0-0.064,0-0.116,0
				c-0.051-0.026-0.102-0.039-0.154-0.039c-0.026-0.026-0.038-0.052-0.038-0.077c-0.051,0-0.115,0-0.192,0
				c-0.026-0.026-0.064-0.039-0.116-0.039L7.094,13.88c-0.051,0-0.104,0-0.156,0c-0.05-0.025-0.102-0.039-0.153-0.039
				c-0.025-0.025-0.039-0.052-0.039-0.077c-0.026,0-0.051,0-0.077,0c-0.025-0.026-0.063-0.039-0.117-0.039l-0.039-0.039
				c-0.05,0-0.101,0-0.154,0c-0.05-0.026-0.102-0.039-0.152-0.039c-0.027-0.026-0.041-0.052-0.041-0.077c-0.024,0-0.05,0-0.077,0
				c-0.025-0.025-0.063-0.04-0.115-0.04l-0.038-0.039c-0.052,0-0.104,0-0.154,0c-0.052-0.024-0.102-0.037-0.155-0.037
				c-0.024-0.028-0.063-0.053-0.115-0.077c-0.025-0.025-0.051-0.051-0.077-0.077H5.397c-0.052-0.025-0.104-0.039-0.155-0.039
				c-0.025-0.027-0.064-0.053-0.116-0.078c-0.026-0.025-0.051-0.051-0.076-0.076H5.011c-0.051-0.026-0.103-0.04-0.153-0.04
				c-0.027-0.025-0.065-0.05-0.117-0.077c-0.026-0.025-0.052-0.05-0.077-0.076c-0.026,0-0.064,0-0.115,0
				c-0.052-0.026-0.103-0.04-0.155-0.04c-0.024-0.025-0.05-0.051-0.076-0.077c-0.027-0.025-0.04-0.052-0.04-0.077H4.24
				c-0.052-0.025-0.103-0.039-0.155-0.039c-0.025-0.025-0.038-0.052-0.038-0.077c-0.026,0-0.05,0-0.078,0
				c-0.051-0.025-0.103-0.052-0.153-0.077c-0.052,0-0.091-0.014-0.117-0.039c-0.026-0.025-0.051-0.052-0.077-0.077
				s-0.039-0.052-0.039-0.078c-0.052-0.025-0.09-0.051-0.114-0.076c-0.027-0.026-0.065-0.052-0.117-0.078
				c-0.026-0.025-0.051-0.051-0.077-0.076c-0.027-0.027-0.053-0.052-0.078-0.077c-0.052-0.026-0.103-0.052-0.154-0.077
				c-0.052,0-0.089-0.013-0.116-0.039c-0.025-0.026-0.051-0.052-0.077-0.078c-0.026-0.025-0.039-0.052-0.039-0.076
				c-0.051-0.026-0.09-0.052-0.116-0.078c-0.026-0.025-0.051-0.05-0.077-0.077c0-0.025-0.013-0.05-0.039-0.077
				c-0.025-0.025-0.051-0.051-0.078-0.076c-0.051-0.026-0.102-0.052-0.153-0.077c-0.026,0-0.052-0.014-0.077-0.041
				c-0.026-0.024-0.065-0.051-0.116-0.076c-0.026-0.025-0.065-0.05-0.117-0.076c-0.051-0.026-0.089-0.053-0.115-0.078
				c-0.012-0.013-0.025-0.025-0.039-0.038c-0.089,0-0.179,0-0.269,0c0-0.026,0-0.052,0-0.078s0-0.064,0-0.116
				c-0.028-0.025-0.052-0.051-0.078-0.078c-0.025-0.025-0.051-0.051-0.077-0.076c-0.026-0.027-0.064-0.052-0.116-0.077
				c-0.025-0.025-0.064-0.052-0.116-0.077c-0.025-0.026-0.05-0.052-0.076-0.078c-0.027-0.025-0.051-0.052-0.077-0.077l-0.04-0.038
				c-0.025-0.026-0.038-0.052-0.038-0.077v-0.04c-0.026,0-0.052-0.013-0.078-0.037c-0.025-0.025-0.051-0.039-0.077-0.039
				c-0.026-0.025-0.039-0.052-0.039-0.077s0-0.053,0-0.078C0.783,9.998,0.771,9.973,0.771,9.946
				C0.744,9.921,0.719,9.896,0.693,9.869c0-0.026,0-0.05,0-0.076C0.667,9.767,0.641,9.742,0.616,9.715
				c0-0.026-0.013-0.052-0.039-0.077c0-0.025-0.013-0.039-0.039-0.039C0.513,9.574,0.5,9.549,0.5,9.522s0-0.052,0-0.077
				s0-0.052,0-0.077c0-0.025,0-0.05,0-0.077c0-0.025,0-0.051,0-0.077s0-0.052,0-0.077c0-0.026,0-0.052,0-0.077v-0.04
				c0-0.025,0-0.051,0-0.077c0-0.025,0-0.05,0-0.076c0-0.026,0-0.052,0-0.077s0-0.051,0-0.076c0-0.027,0-0.054,0-0.078
				c0-0.027,0-0.052,0-0.077c0-0.025,0-0.052,0-0.077v-0.04c0-0.025,0-0.052,0-0.077c0-0.025,0.013-0.051,0.038-0.076
				c0.026-0.026,0.039-0.053,0.039-0.078S0.589,8.16,0.616,8.134c0-0.025,0-0.051,0-0.077c0-0.025,0-0.052,0-0.076
				c0-0.026,0-0.053,0-0.077v-0.04c0-0.026,0-0.051,0-0.076c0-0.027,0-0.053,0-0.078s0-0.051,0-0.077s0-0.052,0-0.078
				c0-0.024,0-0.05,0-0.076c0.025-0.025,0.039-0.052,0.039-0.077s0.013-0.052,0.039-0.077V7.287c0.026-0.025,0.05-0.052,0.077-0.078
				c0.025-0.025,0.05-0.051,0.076-0.076c0-0.027,0.014-0.052,0.039-0.077c0-0.026,0-0.053,0-0.078
				c0.026-0.025,0.051-0.051,0.077-0.076C0.988,6.875,1.014,6.85,1.039,6.823c0.026-0.026,0.04-0.051,0.04-0.077
				c0.025-0.025,0.05-0.039,0.077-0.039c0-0.025,0.014-0.05,0.039-0.076c0-0.026,0.012-0.052,0.038-0.078
				c0-0.025,0.013-0.052,0.041-0.077c0-0.025,0-0.051,0-0.077c0-0.025,0-0.052,0-0.076c0.024-0.027,0.05-0.053,0.075-0.078
				c0-0.025,0.014-0.052,0.039-0.077V6.131c0-0.026,0-0.053,0-0.078s0-0.052,0-0.078c0-0.025,0-0.051,0-0.076s0-0.052,0-0.077
				C1.413,5.795,1.425,5.77,1.425,5.743c0-0.024,0.013-0.05,0.039-0.076c0-0.025,0-0.052,0-0.077v-0.04c0-0.025,0-0.051,0-0.076
				c0-0.026,0-0.052,0-0.077c0-0.026,0-0.053,0-0.078s0-0.05,0-0.077c0-0.025,0-0.051,0-0.076s0-0.053,0-0.078s0-0.052,0-0.077
				V4.973C1.49,4.947,1.515,4.921,1.541,4.895c0-0.024,0.013-0.051,0.038-0.076c0-0.025,0-0.051,0-0.077c0-0.025,0-0.051,0-0.077
				c0.027-0.025,0.04-0.052,0.04-0.077c0-0.026,0.013-0.052,0.039-0.078c0-0.024,0-0.051,0-0.076
				c0.025-0.025,0.051-0.038,0.076-0.038C1.759,4.368,1.798,4.343,1.85,4.318c0-0.025,0.013-0.052,0.038-0.077
				c0.026-0.025,0.052-0.052,0.078-0.078C1.991,4.137,2.028,4.112,2.081,4.085z M29.032,14.149
				c-1.184,0.026-2.378,0.039-3.586,0.039v0.039c0,0.026,0,0.052,0,0.077c0,0.026,0,0.052,0,0.077c0,0.025,0,0.052,0,0.077
				s0,0.052,0,0.077c0,0.026,0,0.052,0,0.078v0.038c0,0.026,0,0.052,0,0.078c0,0.025,0,0.052,0,0.077c0,0.024,0,0.05,0,0.076
				c0.026,0.026,0.039,0.052,0.039,0.077c0.025,0.025,0.038,0.052,0.038,0.077c0.025,0.026,0.04,0.052,0.04,0.078
				c0,0.025,0,0.052,0,0.076v0.04c0.025,0.025,0.051,0.05,0.076,0.077c0.026,0.027,0.052,0.051,0.078,0.076l0.078,0.078h0.038
				l0.039,0.039v0.039c0.026,0,0.039,0.013,0.039,0.039l0.038,0.04v0.076c0.05,0.025,0.102,0.052,0.155,0.077
				c0.462,0,0.926,0,1.387,0c0.078,0,0.141,0,0.193,0c0.025,0,0.052,0,0.078,0l0.038-0.04c0.051-0.024,0.09-0.038,0.116-0.038
				c0.025-0.025,0.039-0.05,0.039-0.076h0.039c0.026,0,0.051-0.014,0.077-0.04c0.077,0,0.142-0.013,0.193-0.039
				c0.025-0.025,0.051-0.052,0.076-0.077c0.026-0.026,0.052-0.052,0.078-0.078c0.025-0.025,0.039-0.049,0.039-0.076
				c0.025-0.026,0.051-0.052,0.077-0.077v-0.04c0.025-0.024,0.039-0.05,0.039-0.076c0.025-0.026,0.052-0.052,0.077-0.078
				c0.025-0.025,0.05-0.052,0.076-0.077c0-0.025,0-0.051,0-0.077c0.027-0.025,0.052-0.052,0.079-0.076
				c0-0.025,0.014-0.052,0.039-0.077c0-0.026,0-0.052,0-0.078v-0.038c0.025-0.026,0.038-0.052,0.038-0.078
				c0.026-0.025,0.051-0.052,0.078-0.077l0.077-0.077c0.026,0,0.051,0,0.076,0v-0.039c0-0.025-0.013-0.052-0.038-0.077
				c0-0.025-0.013-0.052-0.039-0.077V14.149z M24.211,14.843c0-0.024,0-0.05,0-0.076c0,0.025-0.013,0.052-0.038,0.076
				c-0.025,0.026-0.051,0.053-0.078,0.078c-0.025,0.025-0.051,0.052-0.077,0.076v0.039h-0.039v0.04l-0.039,0.039v0.039h-0.038v0.037
				c-0.014,0.014-0.026,0.028-0.04,0.04v0.038h-0.038c-0.026,0.027-0.04,0.052-0.04,0.077c-0.013,0.012-0.025,0.025-0.038,0.038
				c-0.012,0.013-0.025,0.026-0.038,0.04c0,0.025-0.013,0.052-0.039,0.077v0.039h-0.019c0,0.013-0.007,0.026-0.02,0.039v0.04
				c-0.025,0.025-0.038,0.052-0.038,0.076c0,0.025,0,0.052,0,0.077c0.309,0,0.603,0,0.887,0c0-0.025,0-0.052,0-0.077
				c0-0.025,0-0.05,0-0.076c-0.025,0-0.051-0.014-0.078-0.04c-0.025-0.025-0.051-0.051-0.077-0.077c0-0.025-0.013-0.052-0.039-0.077
				c0-0.026,0-0.052,0-0.077s0-0.052,0-0.077c-0.025-0.025-0.051-0.05-0.078-0.078c0-0.024,0-0.05,0-0.076c0-0.026,0-0.052,0-0.078
				v-0.039c0-0.024,0-0.051,0-0.076S24.211,14.869,24.211,14.843z M1.619,10.083c0-0.037,0-0.069,0-0.097c0-0.02,0-0.039,0-0.058
				c-0.02,0-0.04,0-0.059,0l0.019,0.019c0,0.026,0,0.052,0,0.077v0.039L1.619,10.083z M6.303,11.083
				c0.045,0.013,0.089,0.02,0.135,0.02v-0.02C6.392,11.083,6.348,11.083,6.303,11.083z`,
            }),
          });
        }
        function b0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 92.592 39.134",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M90.855,10.174c0,0.566-0.084,1.216-0.25,1.95
	c-0.066,0.367-0.15,0.684-0.25,0.95H63.255v0.8l-0.3,0.4h-24.65v-1.1h-1c-0.167,0.1-0.184,0.367-0.05,0.8l0.7,2.15h0.35l0.1,0.35
	l-0.6,0.25l0.15,0.55c0.167,0.434,0.35,0.934,0.55,1.5c0.667,1.733,1.534,3.616,2.6,5.65c1.033,2.033,2.483,4.417,4.35,7.149
	c0.9,1.334,1.717,2.484,2.45,3.45l-3.7,2.851c-0.7-0.9-1.517-2.018-2.45-3.351c-1.833-2.733-3.316-5.216-4.45-7.45
	c-1.133-2.266-2.117-4.383-2.95-6.35l-0.95-2.3l-0.35,0.1h-1.35l-0.4,2.1h-0.3l0.3-2h-1.45l-0.35,0.35l-1.75,3.5
	c-0.1,0.267-0.316,0.416-0.65,0.45h-5.5c-0.467-0.034-0.867-0.15-1.2-0.351l-0.2,0.15c-0.133,0.166-0.233,0.334-0.3,0.5
	c-0.067,0.133-0.117,0.35-0.15,0.65c-0.033,0.3-0.1,0.533-0.2,0.699c-0.033,0.101-0.133,0.283-0.3,0.551
	c-0.2,0.232-0.35,0.482-0.45,0.75c-0.1,0.3-0.167,0.583-0.2,0.85c0,0.334-0.033,0.566-0.1,0.7c-0.033,0.167-0.167,0.417-0.4,0.75
	c-0.2,0.333-0.35,0.634-0.45,0.899c-0.067,0.2-0.117,0.5-0.15,0.9c-0.033,0.3-0.083,0.533-0.15,0.7c-0.1,0.233-0.267,0.466-0.5,0.7
	c-0.167,0.133-0.3,0.232-0.4,0.3l-5.95-3.25c0.034-0.3,0.133-0.7,0.3-1.2c0.333-1,0.733-2.017,1.2-3.05
	c0.434-0.866,0.967-1.733,1.6-2.601c0.3-0.399,0.5-0.667,0.6-0.8c0.133-0.267,0.25-0.5,0.35-0.7c0.2-0.6,0.316-1.117,0.35-1.55
	c0.066-0.566-0.017-1.033-0.25-1.4c-0.2-0.333-0.483-0.6-0.85-0.8c-0.2-0.067-0.35-0.133-0.45-0.2
	c-0.133-0.033-0.217-0.083-0.25-0.15c-0.1-0.1-0.167-0.2-0.2-0.3h-3.8c-0.333,0-0.6-0.25-0.8-0.75l-0.6-2.9l-0.25-0.05l-0.1,0.35
	l0.65,2.15l-0.3,0.55h-1.55l-0.35-0.65l1-2l-0.05-0.45l-0.4,0.2c-0.3,0.267-0.533,0.567-0.7,0.9c-0.2,0.367-0.35,0.733-0.45,1.1
	c-0.067,0.167-0.1,0.3-0.1,0.4l-0.55,3.4c-0.367,2.233-0.617,3.417-0.75,3.55c-0.133,0.1-0.267,0.217-0.4,0.35
	c-0.067,0.066-0.167,0.101-0.3,0.101c-0.233,0.033-0.5,0.033-0.8,0c-0.4-0.067-0.667-0.184-0.8-0.351
	c-0.167-0.167-0.267-0.316-0.3-0.45c-0.033-0.066-0.017-0.233,0.05-0.5c0-0.033,0.117-0.783,0.35-2.25
	c0.233-1.367,0.383-2.4,0.45-3.1c0.033-0.433,0.05-1.75,0.05-3.95v-2.7c-0.033-0.5,0-0.85,0.1-1.05c0.167-0.167,0.367-0.25,0.6-0.25
	c0.267-0.033,0.933,0.033,2,0.2c0.533,0.133,1.05,0.25,1.55,0.35h1.35l0.05-0.8c0.1-0.333,0.2-0.684,0.3-1.05
	c0.267-0.7,0.45-1.133,0.55-1.3c0.133-0.133,0.267-0.217,0.4-0.25c0.067,0,0.117,0,0.15,0h3.65l0.35,0.15h1.75l0.05-1.4
	c0.1-0.333,0.25-0.567,0.45-0.7c0.2-0.133,0.4-0.183,0.6-0.15c0.2,0,0.367,0,0.5,0l0.2,0.75l0.4-1l2.1,0.9l-0.45,0.8l0.45,0.75h18.9
	l0.4,0.05h22.75v-0.5h-0.3v-2.4l0.2-0.25h0.85l0.7,1.95v1.2h0.45l0.35,0.5v1.7h-0.3v0.55h27.25l0.2,0.9
	C90.789,8.974,90.855,9.607,90.855,10.174z M28.305,18.974l-0.35-0.35h-4.05l-0.2,0.4c-0.133,0.267-0.233,0.534-0.3,0.8
	c-0.034,0.233,0,0.533,0.1,0.9c0.067,0.333,0.133,0.583,0.2,0.75l0.05,0.5l-0.4-0.2c-0.3-0.433-0.5-0.867-0.6-1.3
	c-0.066-0.4-0.117-0.833-0.15-1.3v-0.55h-1l-0.45,1.05c-0.267,0.7-0.417,1.1-0.45,1.2c-0.033,0.233-0.033,0.533,0,0.9
	c0.267,0.267,0.617,0.45,1.05,0.55h5.05c0.2-0.033,0.35-0.166,0.45-0.399L28.305,18.974z`,
            }),
          });
        }
        function k0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 49.125 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M28.065,10.277c0-0.029,0-0.058,0-0.086
				c-1.154,0-2.293,0-3.418,0v0.086c0,0.03,0,0.058,0,0.087v0.086c0.03,0.029,0.044,0.057,0.044,0.085v0.045l0.044,0.042v0.042
				c0.056,0.03,0.114,0.058,0.171,0.086c0.028,0.029,0.057,0.059,0.088,0.088c0.027,0.028,0.043,0.055,0.043,0.083v0.043
				c0.028,0.029,0.057,0.045,0.085,0.045c0,0.028,0.015,0.056,0.044,0.085c0,0.03,0.013,0.059,0.042,0.086
				c0,0.03,0.014,0.044,0.044,0.044c0.027,0.028,0.043,0.055,0.043,0.086c0.028,0.028,0.042,0.058,0.042,0.087
				c0,0.027,0,0.057,0,0.085l0.043,0.043v0.044c0.029,0.028,0.057,0.057,0.086,0.085c0,0.03,0.016,0.058,0.044,0.087
				c0.029,0.029,0.058,0.058,0.087,0.086v0.044h0.042v0.045c0.029,0.027,0.059,0.056,0.086,0.085c0,0.028,0,0.056,0,0.085
				l0.043,0.045v0.042c0.028,0,0.057,0.015,0.085,0.044c0,0.029,0.015,0.058,0.043,0.087c0.376,0,0.765,0,1.17,0
				c0.028,0,0.044-0.016,0.044-0.044c0.027,0,0.056-0.014,0.083-0.043V12.18c0.032,0,0.059,0,0.087,0c0-0.028,0-0.057,0-0.087
				c0.029-0.029,0.058-0.057,0.087-0.085c0.057,0,0.101-0.017,0.129-0.044c0-0.029,0.013-0.058,0.043-0.086v-0.044
				c0-0.028,0-0.057,0-0.086s0.015-0.057,0.043-0.087c0-0.029,0-0.057,0-0.085v-0.044c0.028,0,0.044-0.015,0.044-0.043
				c0.028-0.029,0.042-0.058,0.042-0.085c0.028-0.029,0.056-0.059,0.087-0.087c0-0.031,0.014-0.058,0.042-0.086v-0.044
				c0.029-0.028,0.044-0.057,0.044-0.086c0-0.029,0.014-0.058,0.043-0.085c0.028,0,0.057-0.016,0.086-0.045
				c0.028-0.027,0.058-0.043,0.087-0.043v-0.083c0-0.029,0-0.06,0-0.088c0-0.028,0-0.057,0-0.086c0-0.028,0-0.057,0-0.085v-0.045
				c0-0.028,0.015-0.056,0.043-0.085c0-0.029-0.016-0.057-0.043-0.086C28.065,10.335,28.065,10.307,28.065,10.277z M44.15,6.385
				c0.028,0.03,0.044,0.059,0.044,0.086c0,0.032,0.013,0.044,0.042,0.044c0.202,0,0.405,0,0.607,0v0.044h3.936l0.214,0.217v2.333
				l-0.257,0.26h-3.633v0.088c-0.173,0-0.363,0.012-0.563,0.042l-0.044,0.044c-0.029,0.027-0.07,0.071-0.129,0.129
				c-0.028,0-0.059,0.015-0.088,0.042c0.029,0.032,0.045,0.06,0.045,0.088c0.028,0.028,0.043,0.059,0.043,0.087
				c0,0.028,0.013,0.058,0.042,0.085v0.043c0,0.03,0,0.059,0,0.086c0,0.031,0,0.06,0,0.088c0,0.028,0,0.057,0,0.086
				c0,0.03,0,0.058,0,0.087c-0.03,0.03-0.042,0.058-0.042,0.086c-0.028,0.029-0.059,0.057-0.088,0.085v0.045
				c0,0.028,0,0.057,0,0.085c0,0.03,0,0.058,0,0.086c0,0.029,0,0.059,0,0.088v0.042l-0.043,0.042
				c-0.029,0.032-0.042,0.058-0.042,0.089c-0.059,0.028-0.114,0.041-0.172,0.041c-0.058,0-0.116-0.013-0.173-0.041
				c-0.03-0.031-0.044-0.057-0.044-0.089c-0.03,0-0.059-0.013-0.086-0.042l-0.043-0.042c0-0.029-0.015-0.06-0.044-0.088
				c0-0.028-0.013-0.057-0.043-0.086c0-0.028-0.013-0.057-0.042-0.085l-0.043-0.045c-0.027-0.028-0.056-0.056-0.086-0.085
				c-0.029-0.029-0.057-0.057-0.086-0.086c-0.029-0.029-0.043-0.057-0.043-0.087c-0.029,0-0.057,0-0.087,0
				c-0.029-0.029-0.057-0.058-0.086-0.086c-0.027-0.028-0.057-0.057-0.085-0.088c0-0.027-0.016-0.057-0.043-0.086
				c0-0.028-0.028-0.043-0.086-0.043c-0.029-0.028-0.044-0.058-0.044-0.085c-0.028-0.028-0.058-0.059-0.086-0.087
				s-0.057-0.056-0.085-0.088l-0.088-0.085c0-0.028-0.014-0.059-0.042-0.086h-0.044c-0.057,0-0.115-0.015-0.173-0.044l-0.042-0.042
				c-0.058,0-0.102,0-0.13,0c-0.029,0.057-0.058,0.099-0.087,0.128c-0.028,0.057-0.043,0.101-0.043,0.128
				c-0.028,0.032-0.072,0.073-0.128,0.131c-0.059,0.057-0.117,0.101-0.173,0.129c-0.059,0.029-0.13,0.073-0.216,0.129
				c-0.059,0-0.102,0.016-0.13,0.045h-0.043v0.043c0,0.028-0.015,0.057-0.043,0.086c-0.059,0-0.102,0-0.13,0
				c-0.058,0.03-0.1,0.058-0.129,0.087c0,0.03-0.016,0.058-0.043,0.086c0,0.029,0,0.057,0,0.085c0,0.031-0.016,0.045-0.042,0.045
				c0,0.028,0,0.057,0,0.085c-0.031,0-0.06,0.016-0.087,0.044v0.042c0,0.029,0,0.059,0,0.088v0.083c0,0.032,0,0.058,0,0.089
				c0,0.028,0,0.056,0,0.085c0,0.03,0,0.059,0,0.086v0.044c0,0.028,0,0.055,0,0.086c0,0.028,0,0.058,0,0.087v0.042
				c0,0.031,0,0.058,0,0.087v0.044c0,0.028,0,0.057,0,0.085c0,0.03,0,0.058,0,0.087s0,0.058,0,0.086v0.044c0,0.028,0,0.058,0,0.086
				v0.044c0,0.028,0,0.056,0,0.085c0,0.03,0,0.059,0,0.087v0.044c0,0.029,0,0.058,0,0.087c0,0.027,0,0.055,0,0.084
				c0,0.029,0,0.06,0,0.087v0.087c0,0.027,0,0.056,0,0.087c0,0.029,0,0.057,0,0.085v0.043c0,0.027,0,0.057,0,0.086
				c0,0.027,0,0.057,0,0.086c0,0.03,0,0.059,0,0.087c0,0.028,0,0.058,0,0.086c0,0.028,0,0.06,0,0.087c0,0.027,0,0.058,0,0.086
				s0,0.058,0,0.086v0.042c0,0.03,0,0.06,0,0.087c0,0.029,0,0.057,0,0.086c0,0.03,0,0.06,0,0.086v0.087c0,0.03,0,0.059,0,0.088
				c0,0.027,0,0.057,0,0.086c0,0.029,0,0.058,0,0.086v0.045c0,0.027,0,0.056,0,0.086c0,0.028,0,0.056,0,0.083V14.3
				c0,0.029,0,0.057,0,0.086v0.042c0,0.03,0,0.059,0,0.087c0,0.03,0,0.057,0,0.087c0,0.029,0,0.058,0,0.086v0.045
				c0,0.027,0,0.056,0,0.086v0.042c0,0.03,0,0.059,0,0.087v0.042c0,0.03,0,0.058,0,0.088c0,0.028,0,0.057,0,0.086
				c0,0.028,0,0.058,0,0.087c0,0.027,0,0.056,0,0.087v0.084c0,0.029,0,0.059,0,0.085c0,0.029,0,0.06,0,0.086v0.044
				c0,0.027,0,0.056,0,0.088c0,0.028,0,0.056,0,0.085c0,0.028,0,0.057,0,0.087v0.086c0,0.029,0,0.057,0,0.087
				c0,0.027,0,0.055,0,0.086c0,0.027,0,0.057,0,0.084v0.045c0,0.028,0,0.058,0,0.086c0,0.03,0,0.06,0,0.087c0,0.029,0,0.059,0,0.087
				v0.086c0,0.028,0,0.057,0,0.086c0,0.028,0,0.06,0,0.086c0,0.028,0,0.058,0,0.088v0.041c0,0.031,0,0.06,0,0.087
				c0,0.029,0,0.06,0,0.089v0.085c0,0.028,0,0.057,0,0.086c0,0.029,0,0.058,0,0.087s0,0.057,0,0.086c0,0.029,0,0.06,0,0.086v0.044
				c0,0.029,0,0.057,0,0.085v0.044c0,0.027,0,0.057,0,0.087v0.043c0,0.028,0,0.058,0,0.085c0,0.03,0,0.058,0,0.086
				c0,0.031,0,0.06,0,0.087v0.044c0,0.028,0,0.057,0,0.086v0.043c0,0.029,0,0.059,0,0.087c0,0.028,0,0.058,0,0.086v0.043
				c0,0.029,0,0.059,0,0.087c0,0.028,0,0.057,0,0.085c0,0.029,0,0.059,0,0.087v0.085c0,0.03,0,0.059,0,0.089
				c0,0.028,0,0.057,0,0.085c0,0.031,0,0.058,0,0.086v0.044c0,0.027,0,0.056,0,0.087c0,0.029,0,0.056,0,0.086
				c0,0.027,0,0.057,0,0.087c0,0.029,0,0.057,0,0.084c0,0.029,0,0.059,0,0.09c0,0.027,0,0.056,0,0.083c0,0.032,0,0.059,0,0.087
				v0.045c0,0.029,0,0.056,0,0.085s0,0.06,0,0.087v0.086c0,0.029,0,0.056,0,0.086c0,0.028,0,0.058,0,0.087c0,0.029,0,0.057,0,0.087
				v0.043c0,0.028,0,0.058,0,0.087c0,0.027,0,0.057,0,0.084v0.043c0,0.031,0,0.059,0,0.087v0.042c0,0.029,0,0.06,0,0.087
				c0,0.029,0,0.059,0,0.086c0,0.029,0,0.059,0,0.086v0.042c0,0.031,0,0.058,0,0.088v0.043c0,0.029,0,0.057,0,0.087
				c0,0.028,0,0.056,0,0.086v0.043c0,0.028,0,0.058,0,0.086c0,0.028,0,0.058,0,0.085c0,0.03,0,0.058,0,0.088v0.084
				c0,0.03,0,0.06,0,0.087c0,0.029,0,0.059,0,0.086c0,0.029-0.016,0.059-0.043,0.087l-0.043,0.043v0.086
				c-0.03,0-0.059,0.013-0.088,0.042l-0.042,0.044c-0.059,0-0.101,0-0.13,0c-0.028,0-0.057,0-0.086,0c-0.058,0-0.101,0-0.129,0
				c-0.029-0.029-0.058-0.044-0.087-0.044c-0.145,0-0.289-0.014-0.432-0.042c-0.059,0-0.114-0.015-0.174-0.042
				c-0.056-0.03-0.085-0.059-0.085-0.087c-0.029,0-0.057,0-0.086,0c-0.03,0-0.045-0.015-0.045-0.043
				c-0.056,0-0.114-0.014-0.172-0.043c-0.029,0-0.044-0.013-0.044-0.042c-0.056,0-0.115-0.015-0.172-0.044c-0.057,0-0.1,0-0.13,0
				v-0.045c-0.057,0-0.114-0.013-0.172-0.042c-0.059,0-0.116-0.014-0.171-0.041l-0.044-0.043c-0.06,0-0.115,0-0.172,0
				c-0.03,0-0.058,0-0.088,0c-0.03-0.03-0.058-0.045-0.086-0.045c-0.031,0-0.058-0.013-0.087-0.043c-0.059,0-0.101-0.014-0.13-0.042
				c-0.057-0.03-0.102-0.057-0.13-0.086c-0.056-0.03-0.115-0.058-0.173-0.087h-0.043c-0.058-0.03-0.101-0.058-0.13-0.086
				c-0.056-0.031-0.099-0.058-0.128-0.087c0-0.03-0.015-0.058-0.044-0.086c-0.029-0.03-0.059-0.044-0.087-0.044
				c-0.029-0.027-0.043-0.057-0.043-0.085c-0.029-0.028-0.056-0.058-0.085-0.086c-0.031-0.03-0.044-0.057-0.044-0.089
				c-0.029,0-0.057-0.013-0.087-0.042c-0.028,0-0.057-0.014-0.085-0.042c0-0.028-0.014-0.056-0.043-0.087
				c0-0.027-0.015-0.056-0.042-0.088c0-0.027-0.015-0.055-0.044-0.083c0-0.029-0.014-0.043-0.043-0.043c0-0.028,0-0.059,0-0.088
				c0-0.027-0.015-0.055-0.045-0.086v-0.043c-0.028-0.03-0.056-0.057-0.085-0.086l-0.043-0.044c0-0.028,0-0.057,0-0.087
				c-0.029-0.027-0.042-0.056-0.042-0.085c0-0.028-0.015-0.058-0.043-0.088v-0.042c0-0.028,0-0.058,0-0.086v-0.042
				c0-0.031,0-0.061,0-0.09c0-0.027,0-0.055,0-0.084V19.23c0-0.031,0-0.06,0-0.087v-0.044c0-0.028,0-0.055,0-0.086
				c0-0.029,0-0.058,0-0.085c0-0.03,0-0.059,0-0.089v-0.085c0-0.028,0-0.058,0-0.087c0-0.028,0-0.057,0-0.085
				c0-0.029,0-0.059,0-0.087v-0.043c0-0.028,0-0.058,0-0.086c0-0.028,0-0.058,0-0.087v-0.043c0-0.029,0-0.058,0-0.086v-0.044
				c0-0.028,0-0.057,0-0.087c0-0.028,0-0.056,0-0.086c0-0.028,0-0.057,0-0.085v-0.043c0-0.031,0-0.06,0-0.087v-0.044
				c0-0.029,0-0.057,0-0.085v-0.044c0-0.026,0-0.057,0-0.086c0.029-0.029,0.043-0.057,0.043-0.086
				c0.028-0.029,0.042-0.058,0.042-0.087c0-0.029,0-0.058,0-0.086v-0.085c0-0.029,0-0.06,0-0.089c0-0.028,0-0.057,0-0.087v-0.041
				c0-0.03,0-0.06,0-0.088c0-0.026,0-0.059,0-0.086c0-0.029,0-0.059,0-0.086v-0.086c0.03-0.028,0.043-0.058,0.043-0.087
				c0.029-0.027,0.043-0.057,0.043-0.087c0.028-0.028,0.042-0.058,0.042-0.086v-0.045c0-0.027,0-0.057,0-0.084
				c0-0.031,0-0.059,0-0.086c0-0.03,0-0.058,0-0.087v-0.086c0-0.031,0-0.06,0-0.087c0-0.029,0-0.057,0-0.085
				c0-0.032,0-0.061,0-0.088v-0.044c0-0.027,0-0.057,0-0.086c0-0.027,0-0.057,0-0.085v-0.084c0-0.031,0-0.06,0-0.087
				c0-0.03,0-0.06,0-0.087c0-0.029,0-0.059,0-0.086c0-0.03,0-0.058,0-0.088v-0.042c0-0.028,0-0.057,0-0.087V14.82
				c0-0.031,0-0.059,0-0.086v-0.045c0-0.028,0-0.058,0-0.086c0-0.03,0-0.057,0-0.087c0-0.028,0-0.057,0-0.087v-0.042
				c0-0.029,0-0.057,0-0.086v-0.045c0-0.028,0-0.056,0-0.083c0-0.031,0-0.059,0-0.086V14.04c0-0.028,0-0.058,0-0.086
				c0-0.029,0-0.059,0-0.086c0-0.029,0-0.058,0-0.088v-0.087c0-0.026,0-0.056,0-0.086c0-0.029,0-0.057,0-0.086
				c0-0.027,0-0.057,0-0.087v-0.042c0-0.028,0-0.058,0-0.086s0-0.059,0-0.086c0-0.028,0-0.059,0-0.087c0-0.029,0-0.059,0-0.086
				c0-0.028,0-0.057,0-0.087c0-0.029,0-0.059,0-0.086c0-0.029,0-0.059,0-0.086v-0.043c0-0.029,0-0.057,0-0.085
				c0-0.031,0-0.06,0-0.087v-0.087c0-0.028,0-0.058,0-0.087c0-0.029,0-0.057,0-0.084c0-0.03,0-0.058,0-0.087V12.18
				c0-0.028,0-0.057,0-0.087c0-0.029,0-0.057,0-0.085v-0.044c0-0.029,0-0.058,0-0.086v-0.044c0-0.028,0-0.057,0-0.086
				s0-0.057,0-0.087c0-0.029,0-0.057,0-0.085v-0.044c0-0.03,0-0.057,0-0.087v-0.042c0-0.029,0-0.059,0-0.087
				c0-0.031,0-0.058,0-0.086v-0.044c0-0.028,0-0.057,0-0.086c0-0.029,0-0.058,0-0.085c0-0.031,0-0.057,0-0.089v-0.083
				c0-0.029,0-0.06,0-0.088c0-0.028,0-0.057,0-0.086c0-0.028,0-0.057,0-0.085v-0.045c0-0.028,0-0.056,0-0.085
				c0-0.029,0-0.057,0-0.086c0-0.029,0-0.057,0-0.087v-0.042c-0.056-0.028-0.099-0.044-0.128-0.044c-2.218,0-4.453,0-6.703,0
				c0,0.028-0.015,0.044-0.043,0.044l0.043,0.042c0.029,0.03,0.043,0.058,0.043,0.087c0,0.03,0,0.058,0,0.086v0.043
				c0,0.029,0,0.057,0,0.088v0.042c0,0.027,0,0.058,0,0.086c0,0.03,0,0.057,0,0.086c0,0.028,0,0.058,0,0.086v0.042
				c0,0.032,0,0.058,0,0.089v0.041c-0.029,0.03-0.058,0.059-0.086,0.089c0,0.029,0,0.058,0,0.087v0.042c0,0.03,0,0.058,0,0.087
				c0,0.029,0,0.059,0,0.085c-0.058,0.031-0.116,0.058-0.173,0.087c-0.028,0-0.058,0.013-0.087,0.044
				c-0.027,0.028-0.056,0.043-0.086,0.043c-0.029,0.029-0.044,0.057-0.044,0.086c-0.027,0.03-0.057,0.058-0.085,0.086
				c-0.057,0.027-0.102,0.057-0.13,0.086v0.045c-0.027,0.027-0.043,0.056-0.043,0.085c0,0.028,0,0.056,0,0.085
				c0,0.03,0,0.059,0,0.087c-0.029,0.029-0.059,0.059-0.086,0.087c0,0.028,0,0.059,0,0.086c0,0.029,0,0.059,0,0.086v0.043
				c0,0.028,0,0.06,0,0.087c0,0.027,0,0.056,0,0.087c0,0.029,0,0.057,0,0.085v0.043c-0.03,0-0.044,0.014-0.044,0.044
				c-0.028,0.028-0.057,0.055-0.086,0.087c0,0.027,0,0.057,0,0.084c0,0.028-0.014,0.057-0.043,0.088
				c0,0.027-0.014,0.042-0.043,0.042c0,0.028,0,0.06,0,0.087c0,0.027,0,0.058,0,0.086s-0.015,0.042-0.043,0.042
				c-0.028,0.031-0.072,0.06-0.129,0.087l-0.043,0.044c-0.029,0.028-0.059,0.059-0.087,0.086c-0.03,0.029-0.073,0.042-0.13,0.042
				c-0.116,0.03-0.245,0.06-0.389,0.086c-0.03,0-0.059,0.015-0.086,0.045c-0.029,0-0.058,0-0.087,0c-0.432,0-0.864,0-1.297,0
				l-0.043,0.042c-0.058,0-0.101,0-0.129,0c-1.038,0.03-2.076,0.059-3.114,0.088c-0.029,0-0.058,0.014-0.087,0.043
				c-0.028,0-0.057,0-0.085,0c-0.087,0-0.159,0-0.216,0c0,0.028-0.015,0.042-0.043,0.042c-0.028,0.029-0.057,0.058-0.084,0.086
				l-0.046,0.045h-0.042c0,0.027,0,0.056,0,0.086c0,0.028,0,0.056,0,0.083c0,0.03,0,0.06,0,0.087v0.044c0,0.03,0,0.058,0,0.086
				c0,0.03,0,0.056,0,0.087c0,0.028,0,0.058,0,0.086v0.088c0,0.027,0,0.056,0,0.086c0,0.027,0,0.056,0,0.085
				c0,0.029,0,0.057,0,0.085v0.044c0,0.027,0,0.058,0,0.087c0,0.029,0,0.056,0,0.085v0.045c0,0.027,0,0.056,0,0.087v0.041
				c0,0.028,0,0.058,0,0.087s0,0.058,0,0.087c0,0.027,0,0.056,0,0.085c-0.028,0-0.044,0.015-0.044,0.043s-0.012,0.058-0.042,0.087
				v0.043c0,0.028,0,0.057,0,0.087v0.042c0,0.029,0,0.058,0,0.085c0,0.028,0,0.058,0,0.088c0,0.027,0,0.059,0,0.085
				c0,0.03,0,0.06,0,0.088v0.086c0,0.03,0,0.06,0,0.087c0,0.029,0,0.059,0,0.087v0.042c0,0.03,0,0.058,0,0.086
				c0,0.029,0,0.059,0,0.087c0,0.032,0,0.059,0,0.086v0.085c0,0.031,0,0.06,0,0.087c0,0.029,0,0.06,0,0.089c0,0.027,0,0.056,0,0.085
				v0.043c0,0.028,0,0.058,0,0.087c0,0.028,0,0.056,0,0.087c0,0.027,0,0.056,0,0.084v0.087c0,0.029,0,0.057,0,0.085
				c0.029,0.03,0.042,0.059,0.042,0.086c0,0.031,0.016,0.06,0.044,0.088v0.043c0,0.028,0,0.057,0,0.087c0,0.029,0,0.056,0,0.086
				v0.087c0,0.028,0,0.057,0,0.086c0,0.028,0,0.058,0,0.087c0,0.03,0,0.058,0,0.088c0,0.027,0,0.055,0,0.083v0.044
				c0,0.028,0,0.057,0,0.087v0.042c0.029,0.029,0.042,0.059,0.042,0.087l0.046,0.044c0,0.029,0.014,0.057,0.042,0.086
				c0,0.029,0,0.057,0,0.087c0,0.027,0,0.057,0,0.085v0.042c0,0.028,0,0.058,0,0.087v0.044c0,0.029,0,0.056,0,0.086
				c0.028,0.027,0.042,0.057,0.042,0.087l0.043,0.042c0,0.029,0,0.058,0,0.086s0,0.057,0,0.086c0,0.028,0,0.058,0,0.086v0.088
				c0,0.029,0,0.056,0,0.085s0,0.06,0,0.087c0,0.029,0,0.057,0,0.086v0.043c0,0.027,0.014,0.058,0.042,0.085
				c0,0.031,0,0.059,0,0.086c0.03,0.029,0.045,0.06,0.045,0.088s0,0.058,0,0.087c0,0.027,0,0.057,0,0.084c0,0.028,0,0.059,0,0.088
				c0,0.028,0,0.057,0,0.084v0.042c0,0.032,0,0.059,0,0.089c0,0.028,0,0.058,0,0.086v0.043l-0.045,0.042
				c-0.028,0.031-0.042,0.058-0.042,0.088c-0.029,0.029-0.058,0.043-0.085,0.043c0,0.029,0,0.057,0,0.087c0,0.028,0,0.056,0,0.086
				l-0.042,0.043c0,0.028,0,0.058,0,0.086c-0.03,0.028-0.06,0.058-0.088,0.085c0,0.03,0,0.058,0,0.088v0.084c0,0.03,0,0.06,0,0.087
				c0,0.029,0,0.059,0,0.086c0,0.029,0,0.059,0,0.087v0.043c0,0.029,0,0.058,0,0.086c0,0.029,0,0.058,0,0.087
				c0,0.028,0,0.057,0,0.087c0.029,0,0.058,0,0.088,0c0,0.027,0.014,0.057,0.042,0.086c0,0.027,0,0.058,0,0.086
				c0,0.027,0,0.057,0,0.085v0.044c0,0.029,0,0.057,0,0.087c0,0.028,0,0.056,0,0.085c0,0.029,0,0.058,0,0.087v0.086
				c0,0.03,0,0.059,0,0.088c0,0.028,0,0.056,0,0.085c0,0.03,0,0.057,0,0.086l0.042,0.045c0.029,0.028,0.043,0.055,0.043,0.084
				c0,0.03,0,0.06,0,0.087v0.043c0,0.028,0,0.058,0,0.087v0.042c0,0.029,0,0.06,0,0.087c0,0.029,0,0.057,0,0.085
				c0,0.029,0,0.06,0,0.086v0.044c0,0.028,0.014,0.058,0.042,0.085c0,0.029,0.016,0.043,0.045,0.043c0,0.03,0,0.059,0,0.087
				c0,0.03,0,0.059,0,0.086v0.043c0,0.029,0,0.057,0,0.087c0,0.029,0,0.057,0,0.088c0,0.028,0,0.056,0,0.085v0.042
				c0.029,0.03,0.058,0.044,0.087,0.044c0,0.03,0,0.059,0,0.088c0,0.027,0,0.055,0,0.083v0.044c0,0.03,0,0.059,0,0.088
				c0,0.027,0,0.057,0,0.086s0,0.058,0,0.087c0.028,0.027,0.056,0.057,0.085,0.085h0.042c0,0.027,0,0.058,0,0.087
				c0,0.028,0,0.057,0,0.085c0,0.028,0,0.057,0,0.086v0.044c0,0.029,0,0.057,0,0.086c0,0.03,0,0.058,0,0.087
				c0,0.027,0,0.057,0,0.086c0,0.028,0.016,0.043,0.044,0.043v0.043c0,0.027,0,0.057,0,0.086c0,0.028,0,0.058,0,0.087
				c0,0.028,0,0.058,0,0.086v0.042c0,0.03,0,0.058,0,0.086c0,0.03,0,0.06,0,0.087c0.03,0.028,0.059,0.043,0.087,0.043
				c0,0.028,0.013,0.056,0.043,0.085v0.045c0,0.029,0,0.057,0,0.086c0,0.03,0,0.058,0,0.086c0,0.028,0,0.059,0,0.086v0.046
				c0,0.027,0,0.056,0,0.083v0.045c0.03,0.028,0.057,0.057,0.085,0.087v0.044c0,0.028,0,0.057,0,0.084c0,0.029,0,0.057,0,0.085
				c0,0.031,0,0.06,0,0.086c0,0.03,0,0.057,0,0.088v0.043l0.044,0.042c0,0.031,0.013,0.057,0.043,0.087c0,0.03,0,0.059,0,0.086
				v0.044c0,0.028,0,0.057,0,0.087c0,0.028,0,0.055,0,0.085c0.029,0.03,0.045,0.058,0.045,0.085l0.041,0.045v0.042
				c0,0.031,0,0.06,0,0.089c0.031,0.027,0.043,0.057,0.043,0.084c0.031,0.03,0.045,0.056,0.045,0.086l0.042,0.044
				c0,0.027,0,0.058,0,0.087c0,0.028,0,0.056,0,0.086c0,0.027,0,0.056,0,0.087c0.028,0.03,0.057,0.042,0.085,0.042v0.045
				c0.029,0.026,0.043,0.056,0.043,0.085c0,0.028,0.015,0.057,0.043,0.085c0,0.029,0,0.056,0,0.088v0.042
				c0.029,0.029,0.044,0.059,0.044,0.087c0.029,0.028,0.044,0.058,0.044,0.086c0.029,0.029,0.057,0.043,0.087,0.043
				c0,0.029,0.012,0.044,0.043,0.044c0,0.028,0,0.058,0,0.086c0,0.027,0,0.056,0,0.086c0,0.028,0.013,0.057,0.042,0.087
				c0,0.028,0,0.06,0,0.086h0.043c0.058,0,0.116,0.015,0.174,0.042c0.028,0.029,0.042,0.057,0.042,0.085s0.014,0.046,0.044,0.046
				c0,0.026,0,0.055,0,0.085v0.042c0,0.028,0,0.059,0,0.087c0,0.028,0,0.06,0,0.087c0,0.029,0,0.057,0,0.086v0.045
				c0,0.027,0,0.056,0,0.084v0.043c0,0.03,0,0.059,0,0.088c0,0.027,0,0.058,0,0.086v0.042c0,0.031,0,0.06,0,0.088
				c0,0.029,0,0.059,0,0.086c0.029,0.03,0.043,0.058,0.043,0.086l0.044,0.044v0.042c0,0.031,0,0.057,0,0.086
				c-0.03,0.03-0.059,0.059-0.088,0.087c-0.03,0.03-0.044,0.059-0.044,0.087c-0.029,0-0.071,0-0.129,0c-0.488,0-0.981,0-1.471,0
				c-0.028,0-0.071,0.015-0.13,0.044h-0.042c-0.085,0.028-0.159,0.043-0.217,0.043c-0.028,0.029-0.071,0.056-0.128,0.085h-0.043
				c-0.028,0.029-0.072,0.043-0.13,0.043c-0.578,0-1.153,0-1.731,0c-0.055-0.029-0.127-0.043-0.216-0.043
				c-0.056-0.029-0.114-0.056-0.171-0.085v-0.043c-0.059-0.03-0.117-0.044-0.175-0.044c-0.23,0-0.46,0-0.692,0
				c-0.028,0-0.057,0-0.085,0c-0.028,0-0.058,0-0.087,0c-0.057,0-0.131,0-0.217,0v-0.042H18.68c-0.06,0-0.116-0.015-0.173-0.044
				c-0.029-0.028-0.058-0.057-0.086-0.087c0-0.029-0.016-0.055-0.044-0.086v-0.042c-0.029,0-0.057-0.016-0.086-0.044
				c0-0.028-0.015-0.057-0.043-0.086c0-0.027,0-0.057,0-0.086c0-0.028,0-0.057,0-0.088V30.43c-0.029-0.028-0.058-0.059-0.087-0.086
				c0-0.029,0-0.058,0-0.088v-0.043c-0.029-0.028-0.057-0.057-0.086-0.084v-0.045c0-0.029,0-0.057,0-0.086c0-0.027,0-0.059,0-0.087
				c0-0.029,0-0.059,0-0.087v-0.042c-0.03-0.03-0.059-0.059-0.087-0.085V29.65c0-0.028,0-0.056,0-0.085
				c0-0.028-0.015-0.042-0.042-0.042c0-0.027-0.015-0.059-0.045-0.086c0-0.03-0.014-0.059-0.044-0.087c0-0.03,0-0.059,0-0.086
				c0-0.029,0-0.059,0-0.086v-0.044l-0.043-0.043c0-0.028-0.014-0.058-0.042-0.086c0-0.028,0-0.058,0-0.087v-0.042
				c0-0.032,0-0.059,0-0.088c0-0.029,0-0.058,0-0.085c-0.029-0.029-0.057-0.059-0.087-0.085v-0.087c0-0.031,0-0.06,0-0.087
				c0-0.03,0-0.058,0-0.086c-0.028-0.029-0.041-0.06-0.041-0.087c0-0.029-0.016-0.044-0.044-0.044c0-0.03,0-0.056,0-0.086
				c0-0.028,0-0.057,0-0.084c0-0.03,0-0.059,0-0.089c-0.029,0-0.059-0.014-0.087-0.042l-0.043-0.045c0-0.027,0-0.056,0-0.085
				c0-0.03,0-0.057,0-0.085c0-0.03,0-0.059,0-0.087v-0.044c0-0.027-0.014-0.057-0.042-0.086c0-0.03,0-0.056,0-0.087v-0.086
				c0-0.031-0.015-0.058-0.043-0.088c0-0.027-0.013-0.056-0.044-0.086c0-0.028-0.014-0.056-0.042-0.085c0-0.027,0-0.057,0-0.084
				v-0.044c0-0.03,0-0.059,0-0.087v-0.045c0-0.027,0-0.056,0-0.083v-0.046c-0.029-0.027-0.043-0.058-0.043-0.086
				c0-0.028-0.014-0.057-0.043-0.086c0-0.029,0-0.057,0-0.086v-0.045c0-0.029,0-0.057,0-0.085v-0.043c0-0.028,0-0.057,0-0.087
				c0-0.029,0-0.056,0-0.086V26.02c0-0.029,0-0.058,0-0.086c-0.03-0.03-0.043-0.06-0.043-0.087c0-0.029-0.015-0.059-0.043-0.086
				v-0.086c0-0.029,0-0.06,0-0.086c0-0.029,0-0.057,0-0.087c0-0.029,0-0.057,0-0.086c-0.029,0-0.044-0.016-0.044-0.044
				c0-0.029-0.013-0.058-0.042-0.086c0-0.029,0-0.058,0-0.085c0-0.029,0-0.06,0-0.087c0-0.029,0-0.059,0-0.085
				c0-0.03,0-0.059,0-0.087s-0.015-0.059-0.043-0.086c0-0.029-0.016-0.059-0.044-0.088l-0.043-0.044c0-0.028,0-0.056,0-0.083
				c0-0.029,0-0.059,0-0.088l-0.043-0.044c0-0.028-0.015-0.042-0.044-0.042c0-0.029,0-0.057,0-0.085c0-0.031,0-0.059,0-0.088
				c0-0.03,0-0.058,0-0.087v-0.043c0-0.027,0-0.056,0-0.086c0-0.028,0-0.057,0-0.087v-0.043c0-0.028,0-0.058,0-0.085v-0.044
				c0-0.026-0.014-0.057-0.043-0.086c0-0.028-0.014-0.056-0.042-0.085c0-0.027,0-0.058,0-0.087v-0.042c0-0.029,0-0.059,0-0.087
				v-0.043c0-0.027,0-0.057,0-0.087c0-0.029,0-0.057,0-0.084v-0.045c0-0.029,0-0.057,0-0.086c0-0.029,0-0.057,0-0.085
				c0-0.03,0-0.058,0-0.088v-0.086c0-0.029,0-0.058,0-0.087c0-0.029,0-0.057,0-0.085c0-0.031,0-0.059,0-0.087v-0.044
				c0-0.028,0-0.058,0-0.085c0-0.029,0-0.059,0-0.086c0-0.03,0-0.06,0-0.086c0-0.03,0-0.059,0-0.087c0-0.029,0-0.058,0-0.087
				c0-0.028,0-0.057,0-0.086v-0.043c0-0.028,0-0.058,0-0.087c0-0.027,0-0.057,0-0.086c0-0.028,0-0.058,0-0.087v-0.084
				c0-0.03,0-0.058,0-0.088c0-0.028,0-0.058,0-0.085c0-0.028,0-0.059,0-0.086v-0.043h-0.172c-0.029,0-0.071,0-0.129,0
				c-0.029,0-0.058-0.016-0.087-0.045c-0.028,0-0.058-0.013-0.086-0.041h-0.042c-0.06,0-0.115-0.015-0.174-0.045
				c-0.028-0.028-0.058-0.056-0.086-0.085c-0.027-0.03-0.056-0.057-0.085-0.088v-0.085c0-0.028,0-0.058,0-0.086
				c0-0.03,0-0.057,0-0.089v-0.042c0-0.027-0.016-0.056-0.045-0.084c0-0.029-0.013-0.06-0.042-0.088c0-0.027,0-0.058,0-0.084
				c0-0.029,0-0.059,0-0.087s0-0.059,0-0.088c0-0.027,0-0.055,0-0.086c0-0.028,0-0.059,0-0.085v-0.043c0-0.029,0-0.057,0-0.086
				c-0.028-0.028-0.058-0.058-0.087-0.087c0-0.029,0-0.057,0-0.085v-0.088c0-0.028,0-0.058,0-0.086c0-0.029,0-0.058,0-0.086
				s0-0.057,0-0.086v-0.042c0-0.03,0-0.06,0-0.087c0-0.03,0-0.057,0-0.086v-0.044c0-0.029,0-0.059,0-0.087v-0.042
				c0-0.029,0-0.058,0-0.085c0-0.031,0-0.059,0-0.087c0-0.03,0-0.058,0-0.086v-0.044c0-0.028,0-0.058,0-0.087v-0.042
				c0-0.03,0-0.059,0-0.087v-0.044c0-0.028,0-0.057,0-0.083c0-0.031,0-0.059,0-0.088c0-0.029,0-0.059,0-0.087
				c0-0.029,0-0.058,0-0.086v-0.087c0-0.03,0-0.057,0-0.086c0-0.03,0-0.059,0-0.087v-0.043c0-0.029,0-0.058,0-0.088
				c0-0.027,0-0.056,0-0.086c0-0.029,0-0.057,0-0.085v-0.087c0-0.028,0-0.058,0-0.084c0-0.031,0-0.059,0-0.087
				c0-0.029,0-0.059,0-0.087v-0.043c0-0.029,0-0.058,0-0.085c0-0.029,0-0.06,0-0.089c0-0.028,0-0.057,0-0.087v-0.085
				c0-0.027,0-0.055,0-0.086c0-0.028,0-0.058,0-0.087c0-0.028,0-0.057,0-0.086c0.029,0,0.044-0.013,0.044-0.042
				c0.029-0.028,0.043-0.058,0.043-0.087c0-0.027,0-0.057,0-0.087v-0.086c0-0.028,0-0.058,0-0.088c0-0.026,0-0.058,0-0.085
				c0-0.03,0-0.06,0-0.088c0-0.027,0-0.056,0-0.085v-0.042c0-0.031,0-0.06,0-0.087h0.042c0-0.029,0-0.057,0-0.085
				c0.029-0.032,0.045-0.061,0.045-0.088v-0.085c0-0.029,0-0.058,0-0.087s0-0.059,0-0.087v-0.041c0-0.031,0-0.06,0-0.087
				c0.029,0,0.058-0.016,0.085-0.045v-0.085c0-0.03,0-0.06,0-0.087v-0.044c0.029-0.029,0.044-0.057,0.044-0.085
				c0.029-0.029,0.057-0.059,0.086-0.085c0-0.031,0-0.059,0-0.086v-0.045c0.029,0,0.058-0.015,0.086-0.043c0-0.028,0-0.058,0-0.086
				c0-0.031,0-0.057,0-0.087c0-0.029,0-0.057,0-0.086v-0.044c0.03-0.028,0.044-0.058,0.044-0.087c0-0.028,0.013-0.056,0.042-0.083
				c0-0.031,0-0.059,0-0.086c0.028,0,0.059,0,0.086,0c0-0.031,0-0.06,0-0.089c0-0.027,0-0.057,0-0.085c0-0.029,0-0.059,0-0.087
				c0.029-0.029,0.043-0.057,0.043-0.086c0.03,0,0.056-0.014,0.086-0.045c0-0.026,0-0.056,0-0.086c0-0.029,0-0.057,0-0.086v-0.043
				l0.044-0.044c0-0.028,0-0.057,0-0.087c0-0.026,0-0.056,0-0.085s0-0.057,0-0.087v-0.042c0-0.029,0-0.059,0-0.086
				c0-0.028,0-0.057,0-0.087v-0.041c0-0.033,0-0.06,0-0.087v-0.044c0-0.027,0-0.057,0-0.086c0-0.03,0-0.058,0-0.087
				c0-0.029,0-0.056,0-0.085v-0.044c0.028-0.028,0.057-0.058,0.085-0.087l0.043-0.042c0-0.028,0-0.058,0-0.086
				c0-0.028,0-0.058,0-0.087v-0.042c0-0.03,0-0.061,0-0.088s0-0.059,0-0.086c-0.028-0.029-0.043-0.058-0.043-0.086
				c-0.028,0-0.057-0.016-0.085-0.044v-0.042c0-0.029,0-0.057,0-0.086c0-0.029,0-0.057,0-0.086c0-0.029,0-0.057,0-0.087v-0.043
				c-0.028-0.029-0.044-0.058-0.044-0.085c-0.03-0.029-0.057-0.059-0.086-0.087c-0.029-0.031-0.059-0.044-0.086-0.044l-0.043,0.044
				c0,0.028,0,0.058,0,0.087c0,0.027-0.016,0.057-0.042,0.085v0.043c-0.029,0.03-0.06,0.058-0.088,0.087
				c-0.027,0-0.057,0.014-0.086,0.042l-0.042,0.044c-0.059,0-0.1,0-0.129,0c-0.03,0-0.087-0.014-0.174-0.044
				c-0.027-0.029-0.073-0.042-0.13-0.042c-0.026,0-0.07,0-0.128,0c-0.952,0.029-1.931,0.057-2.941,0.086
				c-0.029,0.03-0.043,0.058-0.043,0.086c-0.028,0-0.043,0.015-0.043,0.042c-0.058,0-0.101,0-0.128,0
				c-0.059,0-0.118-0.015-0.173-0.042c0-0.029-0.016-0.057-0.043-0.086c-0.03-0.029-0.057-0.057-0.086-0.086l-0.042-0.043
				c0-0.031-0.016-0.044-0.043-0.044c0-0.03-0.014-0.057-0.046-0.087v-0.042l-0.043-0.044c-0.026,0-0.056-0.015-0.085-0.043
				c-0.058,0-0.1,0-0.131,0h-0.041c-0.03,0-0.059,0-0.087,0c-0.086,0-0.159,0-0.216,0c-0.03,0-0.059,0-0.085,0h-0.089
				c-0.058,0-0.101,0-0.128,0c-0.031,0-0.059,0-0.087,0c-1.586,0-3.156,0-4.714,0c-0.058,0-0.116-0.015-0.173-0.044
				c-0.029-0.029-0.058-0.042-0.086-0.042c-0.029-0.029-0.058-0.058-0.086-0.087c0-0.03,0-0.059,0-0.089v-0.041
				c0-0.031,0-0.057,0-0.089c-0.028,0-0.056-0.013-0.087-0.042c-0.029,0-0.059-0.014-0.087-0.042
				c-0.028-0.029-0.058-0.06-0.086-0.088c0-0.028-0.013-0.057-0.044-0.086c0-0.028,0-0.057,0-0.085v-0.045
				c0-0.028-0.014-0.056-0.041-0.085c0-0.029,0-0.057,0-0.086c0-0.029,0-0.057,0-0.087c-0.031,0-0.06,0-0.088,0
				c-0.027,0-0.043,0.016-0.043,0.043c0,0.029,0,0.06,0,0.088c0,0.027,0,0.055,0,0.085c-0.027,0.029-0.043,0.057-0.043,0.088v0.042
				c0,0.027-0.015,0.058-0.041,0.086v0.042c0,0.029,0,0.059,0,0.088c0,0.028-0.015,0.055-0.046,0.083v0.043c0,0.029,0,0.059,0,0.086
				c-0.027,0.03-0.043,0.059-0.043,0.089c0,0.029,0,0.058,0,0.087c-0.028,0-0.042,0.013-0.042,0.042v0.044c0,0.028,0,0.058,0,0.087
				c0,0.027,0,0.057,0,0.085v0.043c0,0.03,0,0.058,0,0.087c0,0.029,0,0.057,0,0.086c0,0.03-0.014,0.058-0.043,0.086
				c0,0.027,0,0.057,0,0.086H5.014c0,0.028-0.015,0.058-0.043,0.086c0,0.027,0,0.058,0,0.086s0,0.059,0,0.088v0.042
				c0,0.029-0.013,0.059-0.042,0.087c0,0.028,0,0.059,0,0.086c0,0.029,0,0.059,0,0.086v0.087c-0.029,0.029-0.059,0.057-0.086,0.085
				c-0.059,0.058-0.116,0.117-0.174,0.174c-0.029,0-0.043,0.027-0.043,0.086c-0.03,0.057-0.044,0.116-0.044,0.173
				c0,0.058-0.015,0.101-0.043,0.128c-0.029,0.058-0.043,0.117-0.043,0.173c-0.029,0.031-0.042,0.06-0.042,0.087
				c-0.06,0.06-0.102,0.116-0.131,0.173c0,0.06,0,0.101,0,0.131c-0.029,0.057-0.044,0.114-0.044,0.173c0,0.028,0,0.071,0,0.129
				c-0.058,0.027-0.101,0.072-0.128,0.131c-0.03,0.056-0.045,0.113-0.045,0.171c-0.028,0.03-0.072,0.074-0.129,0.13
				c0,0.03,0,0.072,0,0.129c-0.028,0.058-0.057,0.101-0.085,0.131c-0.03,0.056-0.057,0.113-0.087,0.172
				c0,0.057-0.015,0.102-0.043,0.129c0,0.027,0,0.058,0,0.087c0,0.029,0,0.056,0,0.085l-0.042,0.045
				c-0.03,0.027-0.043,0.056-0.043,0.087c-0.03,0.027-0.044,0.069-0.044,0.128c-0.029,0.058-0.057,0.114-0.086,0.173
				c-0.029,0-0.057,0.015-0.086,0.043l-0.043,0.044v0.042c-0.03,0.029-0.058,0.058-0.086,0.085c0,0.028,0,0.059,0,0.088
				l-0.044,0.043c0,0.029,0,0.057,0,0.087c0,0.027-0.013,0.055-0.042,0.086c0,0.027-0.015,0.042-0.043,0.042
				c-0.03,0.03-0.044,0.06-0.044,0.088c-0.03,0-0.058,0.014-0.086,0.044c0,0.027,0,0.056,0,0.084c0,0.031-0.013,0.06-0.043,0.086
				c0,0.03,0,0.06,0,0.087c-0.028,0-0.058,0.014-0.087,0.044c-0.029,0.028-0.043,0.057-0.043,0.086
				c-0.028,0-0.057,0.015-0.085,0.043c-0.057,0-0.086,0.017-0.086,0.043c-0.029,0.028-0.044,0.058-0.044,0.088
				c-0.028,0-0.057,0-0.086,0c0,0.027-0.015,0.041-0.043,0.041c-0.028,0-0.072,0-0.13,0c-0.057,0-0.114,0-0.173,0
				c-0.058,0-0.101,0-0.13,0c-0.027,0-0.07,0.016-0.13,0.046c-0.113,0-0.216,0.014-0.301,0.042c-0.058,0-0.13,0-0.217,0
				c-0.144-0.028-0.273-0.057-0.39-0.087c-0.086-0.026-0.156-0.041-0.215-0.041c-0.087-0.03-0.172-0.045-0.259-0.045
				c-0.059,0-0.115-0.015-0.174-0.043c0-0.026-0.013-0.059-0.042-0.086c-0.029-0.029-0.059-0.059-0.086-0.086v-0.086
				c0-0.028,0-0.058,0-0.087c0-0.027,0-0.057,0-0.087c0-0.028,0-0.058,0-0.086v-0.045c0-0.027,0-0.057,0-0.084
				c0-0.031,0-0.059,0-0.086c0-0.03,0-0.058,0-0.087v-0.086c0-0.031,0-0.06,0-0.087c0-0.029,0-0.057,0-0.085
				c0-0.032,0-0.061,0-0.088v-0.044c0-0.027,0-0.057,0-0.086c0-0.027,0-0.057,0-0.085v-0.084c0-0.031,0-0.06,0-0.087
				c0-0.03,0-0.06,0-0.087c0-0.029,0-0.059,0-0.086c0-0.03,0-0.058,0-0.088v-0.042c0-0.028,0-0.057,0-0.087V14.82
				c0-0.031,0-0.059,0-0.086v-0.045c0-0.028,0-0.058,0-0.086c0-0.03,0-0.057,0-0.087c0-0.028,0-0.057,0-0.087v-0.042
				c0-0.029,0-0.057,0-0.086v-0.045c0-0.028,0-0.056,0-0.083c0-0.031,0-0.059,0-0.086V14.04c0-0.028,0-0.058,0-0.086
				c0-0.029,0-0.059,0-0.086c0-0.029,0-0.058,0-0.088v-0.087c0-0.026,0-0.056,0-0.086c0-0.029,0-0.057,0-0.086
				c0-0.027,0-0.057,0-0.087v-0.042c0-0.028,0-0.058,0-0.086s0-0.059,0-0.086c0-0.028,0-0.059,0-0.087c0-0.029,0-0.059,0-0.086
				c0-0.028,0-0.057,0-0.087c0-0.029,0-0.059,0-0.086c0-0.029,0-0.059,0-0.086v-0.043c0-0.029,0-0.057,0-0.085
				c0-0.031,0-0.06,0-0.087v-0.087c0-0.028,0-0.058,0-0.087c0-0.029,0-0.057,0-0.084c0-0.03,0-0.058,0-0.087V12.18
				c0-0.028,0-0.057,0-0.087c0-0.029,0-0.057,0-0.085v-0.044c0-0.029,0-0.058,0-0.086v-0.044c0-0.028,0-0.057,0-0.086
				s0-0.057,0-0.087c0-0.029,0-0.057,0-0.085v-0.044c0-0.03,0-0.057,0-0.087v-0.042c0-0.029,0-0.059,0-0.087
				c0-0.031,0-0.058,0-0.086v-0.044c0-0.028,0-0.057,0-0.086c0-0.029,0-0.058,0-0.085c0-0.031,0-0.057,0-0.089v-0.083
				c0-0.029,0-0.06,0-0.088c0-0.028,0-0.057,0-0.086c0-0.028,0-0.057,0-0.085v-0.045c0-0.028,0-0.056,0-0.085
				c0-0.029,0-0.057,0-0.086c0-0.029,0-0.057,0-0.087c0-0.029,0-0.058,0-0.086c0-0.028,0-0.057,0-0.088c0-0.027,0-0.057,0-0.086
				V9.974c0-0.028,0-0.058,0-0.085c0-0.028,0-0.059,0-0.087s0-0.056,0-0.088V9.629c0-0.028,0-0.059,0-0.086c0-0.029,0-0.06,0-0.085
				c0-0.03,0-0.06,0-0.088V9.328c0-0.029,0-0.06,0-0.086c0-0.029,0-0.06,0-0.089V9.109c0-0.029,0-0.057,0-0.086V8.98
				c0-0.028,0-0.059,0-0.087s0-0.058,0-0.084c0-0.029,0-0.061,0-0.089V8.679c0-0.031,0-0.058,0-0.087V8.548c0-0.029,0-0.06,0-0.086
				c0-0.03,0-0.058,0-0.086V8.333c0-0.032,0-0.059,0-0.088c0-0.028,0-0.058,0-0.087c0-0.028,0-0.058,0-0.087V7.985
				c0-0.028,0-0.057,0-0.085c0-0.029,0-0.059,0-0.087V7.77c0-0.03,0-0.057,0-0.087s0-0.057,0-0.084c0-0.032,0-0.061,0-0.088V7.423
				c0-0.027,0-0.057,0-0.086s0-0.057,0-0.086c0-0.03,0-0.057,0-0.087V7.121c0-0.028,0-0.058,0-0.087c0-0.028,0-0.058,0-0.086
				c0-0.028,0-0.057,0-0.088V6.776c0-0.029,0-0.058,0-0.087s0-0.057,0-0.086c0-0.03,0-0.06,0-0.087V6.471c0-0.027,0-0.056,0-0.086
				c0-0.028,0-0.057,0-0.085V6.256c0-0.029,0-0.057,0-0.086V6.125c0-0.027,0-0.057,0-0.085c0-0.029,0-0.057,0-0.088
				c0-0.028,0-0.057,0-0.086v-0.04c0-0.031,0-0.059,0-0.087V5.692c0-0.028,0-0.055,0-0.084V5.565c0-0.029,0-0.06,0-0.088
				c0-0.03,0-0.056,0-0.086h0.042L0.301,5.348c0-0.029,0-0.058,0-0.086V5.218C0.328,5.19,0.344,5.16,0.344,5.132
				C0.372,5.104,0.4,5.074,0.43,5.043c0.029-0.027,0.059-0.056,0.087-0.085l0.086-0.085c0-0.03,0.015-0.058,0.043-0.087
				C0.675,4.756,0.691,4.727,0.691,4.7c0.028-0.03,0.041-0.059,0.041-0.086c0.029,0,0.06-0.016,0.086-0.043l0.044-0.047
				c0.059-0.028,0.1-0.041,0.129-0.041c0.086-0.029,0.146-0.059,0.174-0.087c0.057,0,0.128-0.013,0.216-0.042
				c0.028,0,0.043-0.017,0.043-0.045c0.057,0,0.102,0,0.129,0C1.642,4.28,1.713,4.267,1.77,4.267V4.222h0.086
				C1.916,4.253,1.973,4.28,2.029,4.31c0.031,0,0.044,0.014,0.044,0.045c0,0.029,0.016,0.042,0.042,0.042c0,0.029,0,0.058,0,0.087
				c0.775,0,1.555,0,2.338,0C4.437,4.469,4.423,4.454,4.409,4.439c0-0.029-0.015-0.056-0.043-0.085V4.31
				C4.338,4.28,4.309,4.253,4.278,4.222V4.18c0-0.029,0-0.057,0-0.085V3.876c0-0.028,0-0.057,0-0.085V3.704
				c0.03-0.028,0.06-0.043,0.087-0.043V3.616C4.394,3.589,4.409,3.56,4.409,3.533c0.028-0.03,0.045-0.06,0.045-0.087
				C4.48,3.416,4.495,3.387,4.495,3.359c0.029,0,0.043-0.016,0.043-0.045c0-0.026,0.015-0.057,0.043-0.086
				c0.028,0,0.058-0.015,0.087-0.042c0.028,0,0.072-0.015,0.129-0.045c0.029,0,0.059-0.014,0.087-0.043V3.057
				c0-0.029,0-0.059,0-0.088c0-0.028,0-0.058,0-0.088V2.84c0-0.029,0-0.06,0-0.086V2.709c0.028-0.029,0.043-0.057,0.043-0.087
				c0.057-0.028,0.1-0.057,0.128-0.084c0.029-0.029,0.073-0.06,0.129-0.089l0.046-0.042c0.026,0,0.071,0,0.127,0
				c0.116,0,0.245,0,0.39,0c0.029,0,0.072,0.014,0.13,0.042c0.028,0.029,0.057,0.045,0.086,0.045
				c0.058,0.029,0.115,0.059,0.173,0.087c0,0.028,0.014,0.058,0.042,0.085c0.031,0.029,0.074,0.043,0.13,0.043
				c0.057,0,0.103,0,0.129,0v0.044c0.087-0.028,0.16-0.044,0.217-0.044c0.03,0,0.059-0.014,0.088-0.043
				c0.026,0,0.056-0.014,0.085-0.043c0.028,0,0.072-0.013,0.128-0.042c0.029,0,0.074,0,0.13,0c0,0.028,0.031,0.058,0.086,0.085
				c0-0.027,0.015-0.057,0.045-0.085c0-0.028,0-0.058,0-0.087c0.029,0,0.057-0.016,0.085-0.045l0.043-0.042
				c0.03-0.028,0.059-0.058,0.088-0.086C7.466,2.293,7.48,2.262,7.48,2.234c0.028-0.028,0.057-0.057,0.085-0.086l0.043-0.042
				c0-0.03,0-0.06,0-0.087c0-0.029,0-0.057,0-0.086c0.029,0,0.057-0.016,0.088-0.044c0-0.028,0-0.057,0-0.086
				c0.028-0.028,0.056-0.043,0.084-0.043C7.81,1.73,7.84,1.714,7.869,1.714c0-0.027,0.014-0.042,0.044-0.042
				c0.057-0.03,0.101-0.045,0.127-0.045C8.099,1.6,8.156,1.585,8.215,1.585V1.544h0.043c0.029,0,0.043-0.018,0.043-0.045
				c0.028,0,0.042-0.015,0.042-0.042c0.031,0,0.073,0,0.132,0c0.057,0,0.113,0,0.172,0c10.118,0,20.238,0,30.357,0h0.043
				c0-0.031,0.014-0.045,0.044-0.045c0.029,0,0.057,0,0.085,0V1.371c0.031,0,0.061,0,0.089,0c0.058,0.028,0.115,0.056,0.173,0.086
				c0.057,0,0.116,0.013,0.171,0.042c0.029,0.027,0.06,0.045,0.088,0.045c0.057,0.028,0.099,0.056,0.127,0.083
				c0.03,0.03,0.074,0.06,0.131,0.086L40,1.758c0.029,0.03,0.058,0.056,0.086,0.086c0.03,0.029,0.056,0.06,0.087,0.087
				c0,0.029,0,0.057,0,0.086c0.029,0.028,0.043,0.058,0.043,0.087c0.058,0.027,0.101,0.056,0.13,0.086
				c0.028,0.029,0.043,0.057,0.043,0.086c0.029,0.028,0.058,0.057,0.086,0.086c0,0.028,0.029,0.043,0.087,0.043
				c0,0.028,0.012,0.042,0.042,0.042v0.045c0.059,0,0.101,0,0.131,0c0.029,0.029,0.056,0.044,0.087,0.044
				c0.028,0,0.043,0.015,0.043,0.043c0.202,0,0.417,0,0.649,0c0-0.028,0.014-0.043,0.043-0.043c0.028,0,0.072-0.015,0.128-0.044
				c0.029,0,0.089,0,0.174,0c0.028,0.029,0.071,0.044,0.129,0.044c0.029,0,0.043,0.015,0.043,0.043c0.03,0,0.059,0,0.087,0
				c0.058,0.028,0.116,0.058,0.174,0.085l0.042,0.043c0.058,0,0.101,0.016,0.13,0.044h0.042c0.058,0.026,0.116,0.057,0.174,0.086
				v0.041c0.057,0.03,0.114,0.06,0.172,0.088c0,0.029,0.015,0.059,0.044,0.088c0.029,0,0.058,0,0.086,0c0,0.028,0,0.057,0,0.085
				c0,0.03,0,0.059,0,0.086c0,0.029,0,0.06,0,0.086v0.045c0,0.057,0,0.101,0,0.128c0.028,0.058,0.071,0.116,0.128,0.173l0.045,0.087
				c0,0.058,0.012,0.116,0.041,0.173c0,0.029,0,0.073,0,0.129c0,0.059,0,0.117,0,0.172C43.17,4.253,43.158,4.28,43.158,4.31
				c0.055,0,0.099,0,0.128,0s0.073,0.014,0.13,0.045c0,0.029,0.016,0.042,0.044,0.042c0.028,0.029,0.057,0.058,0.086,0.087
				c0.03,0.028,0.042,0.058,0.042,0.087c0,0.028,0.015,0.043,0.043,0.043v0.041c0,0.03,0,0.059,0,0.087
				c0,0.029-0.013,0.059-0.043,0.086c0,0.03,0,0.059,0,0.088l-0.042,0.042c0,0.029,0,0.059,0,0.085c0,0.031,0,0.06,0,0.089v0.042
				c0,0.03,0,0.057,0,0.087c0,0.028,0.015,0.071,0.042,0.128c0,0.056,0.03,0.115,0.088,0.174l0.043,0.085
				c0,0.058,0.014,0.116,0.043,0.175c0,0.027,0,0.069,0,0.126c0,0.059,0,0.117,0,0.173l-0.043,0.044h0.043
				c0.058,0.029,0.115,0.057,0.173,0.086c0,0.029,0.015,0.043,0.044,0.043C44.035,6.328,44.093,6.357,44.15,6.385z M23.48,11.619
				c-0.03-0.029-0.043-0.057-0.043-0.087c-0.03,0-0.059-0.015-0.088-0.043c-0.027-0.029-0.042-0.058-0.042-0.085
				c0-0.029,0-0.059,0-0.087c-0.03-0.029-0.043-0.058-0.043-0.086c0,0.028-0.015,0.057-0.044,0.086c0,0.028,0,0.058,0,0.087
				c0,0.027,0,0.057,0,0.085v0.043c0,0.03,0,0.058,0,0.087c0,0.029,0.016,0.057,0.044,0.086c0,0.03,0,0.058,0,0.086
				c0,0.027,0.013,0.042,0.043,0.042v0.044c0,0.028,0,0.058,0,0.086c0,0.027,0,0.058,0,0.086s0,0.059,0,0.088v0.042
				c0.03,0.029,0.057,0.059,0.085,0.087v0.044c0.202,0,0.418,0,0.651,0c-0.032-0.001-0.06-0.016-0.087-0.044
				c-0.03-0.028-0.059-0.058-0.088-0.087c-0.028,0-0.043-0.015-0.043-0.042c-0.029-0.03-0.055-0.061-0.085-0.088
				s-0.043-0.059-0.043-0.086c0-0.029,0-0.058,0-0.086c-0.031,0-0.042-0.016-0.042-0.044c-0.031,0-0.058-0.015-0.089-0.042
				c-0.027-0.029-0.056-0.057-0.085-0.086C23.48,11.676,23.48,11.648,23.48,11.619z M0.863,7.121c0,0.029,0,0.059,0,0.085
				c0,0.03,0,0.06,0,0.086c0,0.031,0,0.061,0,0.088c0,0.031,0,0.057,0,0.085V7.51c0,0.027,0,0.056,0,0.088v0.041
				c0,0.029,0,0.059,0,0.086V7.77c0,0.029,0,0.056,0,0.085c0,0.031,0,0.058,0,0.085c0,0.03,0,0.06,0,0.089v0.042
				c0,0.029,0,0.059,0,0.087v0.043c0,0.03,0,0.056,0,0.086c0,0.03,0,0.058,0,0.088v0.086c0.028-0.03,0.043-0.058,0.043-0.086
				c0-0.03,0-0.074,0-0.13c0-0.058,0-0.115,0-0.174c0-0.031,0-0.071,0-0.131c0-0.055,0-0.099,0-0.127c0-0.029,0-0.074,0-0.13
				c0-0.057,0-0.117,0-0.173c0-0.03,0-0.073,0-0.13c0-0.058,0-0.101,0-0.129c0-0.057,0-0.102,0-0.13c0-0.058,0-0.115,0-0.173
				c0-0.057,0-0.101,0-0.128c0-0.06,0-0.102,0-0.131S0.891,6.631,0.863,6.603v0.042c0,0.029,0,0.059,0,0.086
				c0,0.029,0,0.059,0,0.088v0.04c0,0.032,0,0.06,0,0.088c0,0.028,0,0.058,0,0.086V7.121z`,
            }),
          });
        }
        function I(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 73.625 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M32.092,2.094c0.028-0.028,0.069-0.056,0.125-0.083
				c0-0.029,0-0.056,0-0.084V1.841c0-0.028,0-0.056,0-0.083V1.673c0.169,0.029,0.337,0.042,0.505,0.042c0,0.028,0,0.055,0,0.083
				c0.167,0,0.335,0.015,0.502,0.042v0.084c0.029,0,0.071,0.014,0.128,0.041c0,0.029,0,0.057,0,0.084
				c0.056,0,0.099,0.015,0.126,0.043c0,0.027,0,0.068,0,0.127c0.028,0,0.056,0.028,0.083,0.083c0.028,0.028,0.056,0.056,0.083,0.082
				c0.057,0.028,0.098,0.059,0.127,0.086c0.055,0.028,0.098,0.069,0.125,0.125l0.042,0.042c0.113,0.027,0.225,0.058,0.336,0.084
				v0.083c0.028,0.028,0.07,0.042,0.126,0.042c0,0.028,0,0.055,0,0.084c10.363,0,20.74,0,31.131,0
				c0.056,0.028,0.125,0.055,0.21,0.083c0.026,0.028,0.057,0.057,0.082,0.083c0.029,0.029,0.072,0.057,0.127,0.085l0.042,0.084
				c0.028,0.028,0.042,0.069,0.042,0.126c0.026,0.029,0.042,0.057,0.042,0.084v0.042h0.043c0.026,0.056,0.055,0.096,0.083,0.124
				c0.027,0.028,0.168,0.521,0.42,1.472c0.279,0.98,0.532,1.47,0.756,1.47h1.303l0.25-0.083h0.253V6.462h1.218l0.293,0.042
				l0.253,0.083h1.805l0.17,0.084l0.083,0.126l0.462,0.042l-0.042,4.032l-0.043,0.083l-0.042,0.129l-0.167,0.167h-0.168L72.8,11.208
				v0.044h-3.698l1.639,3.695c0,0.056,0,0.099,0,0.127c0,0.029,0,0.057,0,0.084s0.014,0.068,0.043,0.125v0.042
				c0,0.056,0,0.097,0,0.126c0,0.029,0,0.055,0,0.085c0,0.028,0,0.068,0,0.124v0.798c0,0.028-0.561,0.043-1.682,0.043
				c-0.054-0.028-0.6-1.021-1.638-2.983c-0.446,0.029-0.896,0.057-1.342,0.084c-0.085,0-0.156,0.013-0.211,0.041
				c-0.086,0-0.154,0-0.209,0h-0.084c0,0.028-0.013,0.055-0.042,0.084c0,0.059-0.015,0.084-0.042,0.084c0,0.056,0,0.099,0,0.125
				c0,0.031,0,0.06,0,0.087s-0.014,0.056-0.044,0.083c0,0.056-0.013,0.098-0.041,0.124c0,0.028,0,0.059,0,0.086s0,0.069,0,0.125
				v0.041c0,0.058,0,0.099,0,0.128c0,0.026,0,0.056,0,0.083c0,0.029,0,0.071,0,0.126c0,0.028,0,0.056,0,0.083s0,0.056,0,0.086v0.083
				c0,0.029,0,0.07,0,0.125c0,0.027,0,0.056,0,0.084c0,0.028,0,0.057,0,0.084c0,0.054,0,0.096,0,0.125v0.084
				c0,0.028,0,0.071,0,0.125v0.042c0,0.057,0,0.099,0,0.127s0,0.056,0,0.083s0,0.072,0,0.128v0.041c0,0.056,0,0.098,0,0.125
				c0,0.029,0,0.057,0,0.084s0,0.07,0,0.125v0.043c0,0.056,0,0.097,0,0.126v0.042c0,0.028,0,0.069,0,0.125c0,0.028,0,0.056,0,0.083
				c0.028,0.029,0.056,0.057,0.084,0.084c0,0.058,0,0.098,0,0.126v0.083c0,0.029,0,0.07,0,0.127v0.042c0,0.056,0,0.097,0,0.125
				c0,0.029,0,0.056,0,0.084c0,0.028,0,0.071,0,0.127v0.041c0,0.058,0,0.1,0,0.126v0.083c0,0.028,0,0.07,0,0.127
				c0.028,0.029,0.042,0.055,0.042,0.084c0.029,0.026,0.055,0.055,0.083,0.083c0,0.059,0.015,0.099,0.044,0.127v0.083
				c0,0.029,0,0.057,0,0.084c0,0.029,0,0.057,0,0.084c0,0.055,0,0.098,0,0.125v0.084c0,0.028,0,0.07,0,0.126v0.041
				c0,0.056,0,0.1,0,0.127s0,0.056,0,0.084c0,0.028,0,0.068,0,0.125c0,0.029,0.012,0.041,0.042,0.041c0,0.057,0.014,0.1,0.041,0.127
				c0,0.029,0.016,0.056,0.041,0.085c0,0.027,0,0.068,0,0.124c0,0.028,0,0.056,0,0.084s0.016,0.057,0.044,0.084
				c0,0.056,0.013,0.098,0.042,0.125v0.086c0,0.027,0,0.055,0,0.083c0.028,0.028,0.041,0.056,0.041,0.083
				c0.028,0.056,0.042,0.099,0.042,0.126c0.028,0.028,0.042,0.058,0.042,0.084c0.026,0.027,0.042,0.056,0.042,0.083v0.084
				c0.029,0.056,0.057,0.096,0.084,0.125c0,0.028,0.014,0.059,0.042,0.086c0,0.028,0,0.069,0,0.125c0,0.028,0,0.055,0,0.084
				c0,0.029,0.012,0.058,0.042,0.084c0,0.027,0,0.07,0,0.125c0.028,0,0.041,0.028,0.041,0.084c0.029,0.028,0.044,0.056,0.044,0.084
				c0.029,0.028,0.042,0.056,0.042,0.083c0.028,0.056,0.041,0.099,0.041,0.127c0.028,0,0.042,0.028,0.042,0.083
				c0,0.028,0,0.055,0,0.084c0.028,0.026,0.057,0.057,0.084,0.085c0,0.056,0.015,0.096,0.041,0.124c0,0.028,0,0.056,0,0.085
				c0,0.028,0,0.055,0,0.083v0.082c0,0.057,0,0.101,0,0.128c0.028,0.028,0.057,0.056,0.085,0.083c0,0.028,0,0.069,0,0.126
				c0,0.028,0,0.056,0,0.083c0,0.029,0,0.057,0,0.084c0.028,0.028,0.056,0.071,0.083,0.126c0.028,0,0.042,0.03,0.042,0.084
				c0.028,0.028,0.042,0.056,0.042,0.083c0,0.029,0,0.057,0,0.084s0,0.07,0,0.125c0.028,0.028,0.043,0.056,0.043,0.084
				c0,0.028,0.014,0.056,0.042,0.084c0.029,0.056,0.057,0.083,0.083,0.083c0,0.056,0,0.1,0,0.127c0,0.027,0,0.057,0,0.084
				c0,0.027,0,0.055,0,0.083c0.03,0.057,0.058,0.1,0.085,0.127c0,0.028,0,0.056,0,0.083c0,0.028,0,0.071,0,0.127v0.042
				c0,0.056,0.014,0.098,0.043,0.126c0.028,0.029,0.056,0.057,0.083,0.084c0,0.028,0,0.069,0,0.125v0.085c0,0.027,0,0.056,0,0.083
				c0.028,0.028,0.042,0.054,0.042,0.083c0.028,0.027,0.056,0.069,0.083,0.127c0,0.028,0.014,0.055,0.042,0.083
				c0,0.029,0,0.057,0,0.084v0.084c0,0.028,0.013,0.068,0.041,0.126c0,0.027,0.015,0.055,0.042,0.084c0,0.027,0,0.056,0,0.083
				c0,0.056,0,0.097,0,0.125c0,0.029,0,0.057,0,0.086c0,0.027,0,0.068,0,0.124l0.043,0.043c0.027,0.057,0.055,0.099,0.083,0.126
				s0.042,0.056,0.042,0.084c0,0.028,0,0.07,0,0.126v0.042c0,0.056,0,0.097,0,0.125v0.087c0,0.027,0,0.068,0,0.122
				c0,0.029,0,0.057,0,0.087c0,0.026,0,0.056,0,0.082c0,0.056,0,0.098,0,0.127v0.084c0,0.028,0,0.055,0,0.083s0,0.056,0,0.083
				c0,0.056,0,0.1,0,0.128v0.082c0,0.031,0,0.072,0,0.129v0.04c0,0.057,0,0.099,0,0.127c0,0.029,0,0.057,0,0.084s0,0.069,0,0.125
				v0.041c0,0.059,0,0.1,0,0.128v0.083c0,0.028,0,0.071,0,0.126c0,0.029,0,0.056,0,0.083s0,0.057,0,0.084
				c0,0.057-0.015,0.097-0.042,0.126v0.042c0.028,0.027,0.042,0.07,0.042,0.126v0.042c-0.028,0.057-0.057,0.098-0.084,0.125
				c0,0.056-0.014,0.085-0.041,0.085c-0.029,0.028-0.043,0.056-0.043,0.083c-0.027,0-0.042,0.014-0.042,0.041
				c-0.111,0.028-0.196,0.057-0.25,0.084c-0.085,0-0.154,0.016-0.21,0.042c-0.057,0.028-0.1,0.056-0.127,0.084
				c-0.028,0.028-0.083,0.042-0.167,0.042c-0.057,0.029-0.126,0.042-0.21,0.042c-0.028,0.028-0.056,0.055-0.083,0.084
				c-0.057,0-0.111,0.015-0.168,0.04c-0.142,0-0.281,0.016-0.421,0.043c-0.027,0-0.057,0-0.083,0
				c-0.057,0.028-0.113,0.043-0.169,0.043c-0.196,0-0.378,0.013-0.547,0.041c-0.056,0.028-0.125,0.056-0.209,0.084
				c-0.477,0.028-0.953,0.042-1.428,0.042c-0.029,0.028-0.057,0.056-0.084,0.084c-0.056,0-0.111,0.015-0.168,0.042
				c-0.28,0.029-0.56,0.058-0.84,0.085c-0.028,0-0.057,0.013-0.084,0.041c-0.083,0.028-0.154,0.056-0.209,0.083
				c-0.084-0.028-0.154-0.056-0.21-0.083s-0.098-0.041-0.126-0.041h-0.042c-0.084,0-0.155-0.015-0.211-0.043
				c-0.083-0.057-0.139-0.098-0.169-0.125c-0.026-0.03-0.067-0.058-0.124-0.085c-0.028-0.029-0.058-0.07-0.084-0.125v-0.043
				c-0.028-0.056-0.042-0.097-0.042-0.126c0-0.028,0-0.056,0-0.084c-0.028-0.028-0.041-0.07-0.041-0.126
				c-0.03-0.026-0.056-0.042-0.086-0.042c0-0.057,0-0.097,0-0.125v-0.083c-0.028-0.03-0.056-0.072-0.083-0.128
				c-0.029-0.026-0.058-0.054-0.084-0.083c0-0.03-0.014-0.056-0.042-0.086c0-0.056,0-0.097,0-0.125l-0.044-0.083
				c0-0.028,0-0.071,0-0.128v-0.043c-0.027-0.055-0.056-0.096-0.083-0.125c-0.028-0.028-0.054-0.056-0.083-0.083
				c0-0.027,0-0.07,0-0.125v-0.044c0-0.056-0.015-0.097-0.041-0.125c-0.03-0.056-0.058-0.083-0.085-0.083
				c0-0.028-0.013-0.071-0.041-0.128c0-0.028,0-0.056,0-0.083c0-0.029,0-0.057,0-0.085c0-0.056-0.015-0.099-0.042-0.125v-0.083
				c0-0.028,0-0.057,0-0.085c0-0.028,0-0.056,0-0.083c0-0.056,0-0.098,0-0.126v-0.084c-0.028-0.028-0.056-0.069-0.083-0.125
				c-0.029,0-0.058-0.015-0.085-0.043C60,26.53,59.986,26.488,59.986,26.46c-0.028-0.028-0.057-0.056-0.084-0.083
				c0-0.03-0.013-0.072-0.042-0.128v-0.041c0-0.056,0-0.097,0-0.126v-0.084c0-0.028,0-0.069,0-0.124
				c0-0.028-0.013-0.059-0.041-0.087c0-0.027-0.014-0.056-0.042-0.082c0-0.056,0-0.099,0-0.128v-0.083c0-0.028,0-0.056,0-0.084
				c0-0.027,0-0.055,0-0.084c0-0.055,0-0.099,0-0.126c-0.029-0.028-0.057-0.056-0.086-0.082c-0.028-0.031-0.041-0.071-0.041-0.128
				v-0.043c0-0.054,0-0.098,0-0.125c0-0.029,0-0.057,0-0.084c0-0.027,0-0.069,0-0.125c0-0.028,0-0.057,0-0.085
				c0-0.027,0-0.057,0-0.084c0-0.027,0-0.069,0-0.125v-0.083c-0.028-0.028-0.041-0.057-0.041-0.084
				c-0.03-0.027-0.042-0.056-0.042-0.085c0-0.056-0.015-0.097-0.043-0.125v-0.084c0-0.029,0-0.057,0-0.084s0-0.056,0-0.083
				c0-0.057,0-0.097,0-0.126c0-0.028,0-0.056,0-0.083s0-0.056,0-0.084v-0.085c0-0.056,0-0.097,0-0.125s0-0.056,0-0.084
				c0-0.03,0-0.071,0-0.126c0-0.027,0-0.055,0-0.084c0-0.027,0-0.055,0-0.084c0-0.027,0-0.069,0-0.126v-0.083
				c0-0.029-0.013-0.057-0.041-0.084c-0.03-0.028-0.058-0.056-0.084-0.083c-0.029-0.028-0.043-0.07-0.043-0.128
				c0-0.027,0-0.056,0-0.083c0-0.028,0-0.057,0-0.084v-0.085c0-0.054,0-0.097,0-0.125s0-0.057,0-0.084c0-0.028,0-0.056,0-0.084
				c0-0.056,0-0.098,0-0.125s0-0.056,0-0.084c0-0.028,0-0.069,0-0.125v-0.043c0-0.058,0-0.098,0-0.126s0-0.056,0-0.084
				c0-0.027,0-0.068,0-0.125v-0.084c0-0.028,0-0.056,0-0.083s0-0.056,0-0.084c-0.027-0.028-0.056-0.072-0.083-0.127
				c0-0.026,0-0.054,0-0.083c0-0.027,0-0.057,0-0.084v-0.083c0-0.028,0-0.069,0-0.128c0-0.028,0-0.056,0-0.083
				c0-0.027,0-0.055,0-0.083c0-0.056,0-0.1,0-0.127c0-0.028,0-0.057,0-0.084s0-0.069,0-0.125v-0.043c0-0.054,0-0.097,0-0.123
				c0-0.03,0-0.057,0-0.087c0-0.027,0-0.068,0-0.125v-0.043c0-0.057,0-0.098,0-0.125v-0.085c0-0.028,0-0.068,0-0.125
				c0-0.028,0-0.056,0-0.083c0-0.029,0-0.057,0-0.084c-0.028-0.056-0.042-0.098-0.042-0.126c-0.028,0-0.057-0.028-0.084-0.083
				c0-0.028,0-0.056,0-0.083s0-0.058,0-0.084c0-0.058,0-0.099,0-0.126v-0.084c0-0.028,0-0.07,0-0.125v-0.042
				c0-0.057,0-0.099,0-0.127s0-0.056,0-0.083s0-0.069,0-0.127v-0.042c0-0.055,0-0.097,0-0.125v-0.084c0-0.028,0-0.071,0-0.125
				c0-0.029,0-0.057,0-0.084c0-0.029,0-0.057,0-0.084c0-0.056,0-0.099,0-0.126v-0.084c0-0.028,0-0.069,0-0.126V16.84
				c0-0.056-0.013-0.099-0.041-0.127s-0.072-0.041-0.127-0.041c0-0.029-0.013-0.071-0.042-0.127v-0.042c0-0.057,0-0.098,0-0.127
				v-0.125c-0.056-0.028-0.097-0.07-0.125-0.125c-0.029-0.028-0.058-0.041-0.085-0.041c0-0.057,0-0.101,0-0.128s0-0.056,0-0.083
				s0-0.07,0-0.127c0-0.028-0.013-0.042-0.041-0.042c-0.028-0.028-0.056-0.055-0.085-0.083l-0.083-0.043
				c-0.111-0.028-0.195-0.058-0.252-0.084c-0.026,0-0.068-0.029-0.124-0.084V15.37c-0.029-0.028-0.057-0.043-0.084-0.043
				c-0.085,0-0.169-0.014-0.252-0.042h-0.083c-0.028,0-0.07,0-0.126,0s-0.142,0-0.253,0c-0.057,0-0.139,0-0.252,0
				c-0.056,0-0.126,0.015-0.209,0.042c0,0.056-0.013,0.097-0.041,0.126c-0.085,0.029-0.141,0.055-0.169,0.085
				c-0.057,0.028-0.112,0.068-0.169,0.124c0,0.029-0.013,0.042-0.041,0.042c0,0.056,0,0.098,0,0.126
				c-0.056,0.057-0.099,0.084-0.126,0.084c-0.027,0.027-0.056,0.069-0.084,0.126c-0.056,0.028-0.099,0.057-0.126,0.084
				c-0.057,0.027-0.083,0.056-0.083,0.082l-0.042,0.087c-0.056,0.027-0.097,0.069-0.126,0.125c-0.028,0.028-0.069,0.057-0.126,0.084
				c-0.028,0.028-0.055,0.056-0.083,0.083l-0.044,0.085c-0.056,0-0.125,0.028-0.208,0.082c-0.029,0.03-0.07,0.071-0.126,0.127
				c-0.028,0-0.056,0.016-0.083,0.043c0,0.055-0.015,0.099-0.045,0.126c-0.054,0.028-0.096,0.056-0.124,0.083
				s-0.056,0.069-0.084,0.125c-0.027,0.029-0.055,0.042-0.084,0.042c-0.055,0.055-0.125,0.098-0.208,0.124
				c-0.029,0.059-0.057,0.086-0.085,0.086c-0.028,0.029-0.071,0.069-0.126,0.125c-0.056,0.03-0.098,0.057-0.124,0.084
				c-0.028,0.028-0.058,0.058-0.085,0.085c-0.028,0.056-0.056,0.097-0.083,0.125l-0.083,0.083c-0.029,0.029-0.058,0.059-0.085,0.086
				c-0.083,0.027-0.167,0.042-0.25,0.042c-0.057,0.026-0.112,0.055-0.17,0.083c-0.027,0.059-0.056,0.099-0.083,0.127
				c-0.028,0-0.068,0.028-0.126,0.083c-0.084,0.029-0.167,0.057-0.251,0.084c-0.112,0.029-0.209,0.057-0.295,0.084
				c-0.083,0.055-0.14,0.098-0.169,0.125c-0.054,0-0.109,0.028-0.167,0.084c-0.056,0.028-0.111,0.056-0.167,0.083
				c-0.111,0-0.21,0.015-0.294,0.043c-0.029,0-0.056,0-0.083,0c-0.058,0-0.113,0-0.169,0c-0.224,0.028-0.463,0.056-0.715,0.083
				c-0.083,0.029-0.153,0.057-0.209,0.084c-0.587,0-1.176,0-1.765,0c-0.055-0.028-0.139-0.056-0.251-0.084
				c-0.14-0.028-0.295-0.056-0.462-0.083c-0.055,0-0.125,0-0.21,0c0-0.057-0.028-0.099-0.084-0.126
				c-0.028-0.056-0.071-0.084-0.126-0.084c0-0.028-0.015-0.071-0.042-0.125c-0.056-0.028-0.097-0.056-0.125-0.084
				c-0.058-0.028-0.142-0.056-0.252-0.084c0-0.056-0.028-0.083-0.085-0.083c-0.056-0.028-0.097-0.068-0.125-0.127
				c-0.029-0.028-0.071-0.057-0.127-0.083c0,0.026-0.015,0.055-0.043,0.083c-0.027,0.059-0.041,0.099-0.041,0.127
				c-0.029,0-0.058,0.028-0.085,0.083c0,0.029,0,0.057,0,0.084c-0.026,0.029-0.041,0.057-0.041,0.084
				c-0.029,0.055-0.042,0.098-0.042,0.125c-0.027,0-0.056,0.028-0.083,0.084c0,0.028-0.015,0.07-0.043,0.126
				c-0.028,0-0.056,0.014-0.083,0.041c0,0.056,0,0.1,0,0.127s0,0.056,0,0.084c-0.028,0.028-0.042,0.068-0.042,0.125l-0.042,0.041
				c-0.028,0.057-0.043,0.1-0.043,0.127c-0.027,0.029-0.056,0.056-0.083,0.085c0,0.027,0,0.068,0,0.124c0,0.028,0,0.056,0,0.084
				s0,0.057,0,0.084c0,0.056-0.014,0.098-0.042,0.125l-0.044,0.086c-0.027,0.027-0.055,0.055-0.083,0.083c0,0.028,0,0.056,0,0.083
				c0,0.056,0,0.099,0,0.126c0,0.028,0,0.058,0,0.084c-0.029,0.027-0.042,0.056-0.042,0.083c0,0.057-0.014,0.084-0.043,0.084
				c-0.029,0.056-0.041,0.096-0.041,0.125c-0.029,0.028-0.043,0.059-0.043,0.086c-0.029,0.028-0.056,0.069-0.085,0.125
				c0,0.028,0,0.055,0,0.084c0,0.029,0,0.058,0,0.084s-0.013,0.07-0.041,0.125c-0.028,0-0.056,0.028-0.083,0.084
				c0,0.028-0.015,0.056-0.042,0.084c0,0.028,0,0.056,0,0.083c-0.028,0.056-0.042,0.099-0.042,0.127v0.083c0,0.028,0,0.055,0,0.084
				c0,0.026,0,0.057,0,0.085c0,0.056,0,0.096,0,0.124s0,0.056,0,0.085c0,0.028,0,0.055,0,0.083l-0.042,0.082
				c-0.028,0.057-0.041,0.101-0.041,0.128c-0.03,0.028-0.058,0.056-0.086,0.083c0,0.028,0,0.069,0,0.126c0,0.028,0,0.056,0,0.083
				c0,0.029,0,0.057,0,0.084s0,0.071,0,0.126v0.084c0,0.028,0,0.056,0,0.083c-0.028,0.029-0.042,0.057-0.042,0.084
				s-0.014,0.07-0.042,0.125c-0.028,0.028-0.057,0.056-0.083,0.084c0,0.028,0,0.056,0,0.084v0.083c0,0.056,0,0.1,0,0.127
				c0,0.027,0,0.057,0,0.084c0,0.027,0,0.055,0,0.083c0,0.057,0,0.1,0,0.127c-0.028,0.028-0.042,0.056-0.042,0.083
				c-0.029,0.028-0.042,0.071-0.042,0.127v0.042c0,0.056,0,0.098,0,0.126c0,0.029,0,0.057,0,0.084s0,0.069,0,0.125v0.085
				c0,0.027,0,0.056,0,0.083s0,0.054,0,0.083c0,0.027,0,0.069,0,0.127c0,0.028,0,0.055,0,0.083c0,0.029,0,0.057,0,0.084v0.084
				c0,0.028,0,0.068,0,0.126c0,0.027,0,0.055,0,0.084c0,0.027,0,0.056,0,0.083c0,0.056,0,0.097,0,0.125c0,0.029,0,0.057,0,0.086
				c0,0.027,0,0.068,0,0.124v0.043c0,0.057,0,0.099,0,0.126s0,0.056,0,0.084c0,0.028,0,0.07,0,0.126v0.042c0,0.056,0,0.097,0,0.125
				v0.087c0,0.027,0,0.068,0,0.122c0,0.029,0,0.057,0,0.087c0,0.026,0,0.056,0,0.082c0,0.056,0,0.098,0,0.127v0.084
				c0,0.028,0,0.055,0,0.083s0,0.056,0,0.083c0,0.056,0,0.1,0,0.128v0.082c0,0.031,0,0.072,0,0.129v0.04c0,0.057,0,0.099,0,0.127
				c0,0.029,0,0.057,0,0.084s0,0.069,0,0.125v0.041c0,0.059,0,0.1,0,0.128v0.083c0,0.028,0,0.071,0,0.126c0,0.029,0,0.056,0,0.083
				s0,0.057,0,0.084c0,0.057,0,0.097,0,0.126v0.083c0,0.028,0,0.071,0,0.127v0.042c0,0.056,0,0.097,0,0.125c0,0.029,0,0.059,0,0.086
				c0,0.026,0,0.069,0,0.123v0.043c0,0.057,0,0.098,0,0.126c0,0.028,0,0.056,0,0.084c0,0.028,0,0.071,0,0.125
				c0,0.031,0,0.059,0,0.086s0,0.055,0,0.083l-0.044,0.084c-0.026,0.028-0.054,0.07-0.082,0.126
				c-0.027,0.029-0.058,0.058-0.085,0.085c-0.056,0-0.111,0-0.169,0v0.041c0,0.056,0,0.098,0,0.125s0,0.056,0,0.084
				c0,0.028,0,0.071,0,0.127v0.041c0,0.056,0,0.099,0,0.126c0,0.03,0,0.058,0,0.084s0,0.07,0,0.126c0,0.029,0,0.057,0,0.084
				c-2.435,0-4.871,0-7.31,0v-0.042c0-0.028,0-0.056,0-0.084v-0.083c0-0.027,0-0.069,0-0.126c0-0.029,0-0.057,0-0.084
				s0-0.056,0-0.083c0-0.057,0-0.1,0-0.126V30.03c0-0.028,0-0.068,0-0.124v-0.043c-0.278,0-0.559,0-0.839,0
				c-0.028,0-0.056,0.016-0.083,0.043c-0.056,0-0.113,0-0.168,0c-0.084,0-0.154,0-0.211,0c-0.055,0-0.099,0-0.126,0
				c-0.057,0-0.111,0-0.168,0c-0.083,0-0.152,0-0.208,0c-0.086,0-0.155-0.015-0.211-0.043c-0.056-0.057-0.098-0.098-0.125-0.125
				c-0.03-0.03-0.057-0.058-0.085-0.085c0-0.029,0-0.07,0-0.125v-0.043c0-0.056,0-0.097,0-0.126
				c-0.028-0.028-0.057-0.056-0.083-0.084c-0.028-0.028-0.057-0.07-0.086-0.126v-0.042c0-0.057,0-0.097,0-0.125v-0.083
				c0-0.03,0-0.072,0-0.128c0-0.026,0-0.054,0-0.083c0-0.03,0-0.056,0-0.086c0-0.056,0-0.097,0-0.125v-0.083
				c0-0.028,0-0.071,0-0.128v-0.043c0-0.055,0-0.096,0-0.125c0-0.028,0-0.056,0-0.083c-0.027-0.027-0.041-0.07-0.041-0.125v-0.044
				c0-0.056,0-0.097,0-0.125v-0.083c0-0.028,0-0.071,0-0.128c0-0.028,0-0.056,0-0.083c0-0.029,0-0.057,0-0.085
				c0-0.056,0-0.099,0-0.125v-0.083c0-0.028,0-0.057,0-0.085c0-0.028,0-0.056,0-0.083c0-0.056,0-0.098,0-0.126v-0.084
				c0-0.028,0-0.069,0-0.125v-0.043c0-0.056,0-0.098,0-0.125s0-0.056,0-0.083c0-0.03,0-0.072,0-0.128v-0.041
				c0-0.056,0-0.097,0-0.126v-0.084c0-0.028,0-0.069,0-0.124c0.028-0.028,0.041-0.059,0.041-0.087c0-0.027,0-0.056,0-0.082
				c0-0.056,0-0.099,0-0.128v-0.083c0-0.028,0-0.056,0-0.084c0-0.027,0-0.055,0-0.084c0-0.055,0-0.099,0-0.126s0-0.056,0-0.082
				c0-0.031,0-0.071,0-0.128v-0.043c0-0.054,0-0.098,0-0.125c0-0.029,0-0.057,0-0.084c0-0.027,0-0.069,0-0.125
				c0-0.028,0-0.057,0-0.085c0-0.027,0-0.057,0-0.084c0-0.027,0-0.069,0-0.125v-0.083c0-0.028,0-0.057,0-0.084
				c0-0.027,0-0.056,0-0.085c0-0.056,0-0.097,0-0.125v-0.084c0-0.029,0-0.057,0-0.084c0.03-0.028,0.043-0.056,0.043-0.083
				c0.057-0.057,0.098-0.097,0.126-0.126c0-0.028,0-0.056,0-0.083s0-0.056,0-0.084v-0.085c0-0.056,0-0.097,0-0.125s0-0.056,0-0.084
				c0-0.03,0-0.071,0-0.126c0-0.027,0.014-0.055,0.043-0.084c0.026-0.027,0.056-0.055,0.083-0.084c0-0.027,0.014-0.069,0.041-0.126
				v-0.083c0-0.029,0-0.057,0-0.084s0.015-0.056,0.043-0.083c0-0.028,0-0.07,0-0.128c0-0.027,0-0.056,0-0.083
				c0-0.028,0-0.057,0-0.084v-0.085c0-0.054,0-0.097,0-0.125s0-0.057,0-0.084c0.028-0.028,0.042-0.056,0.042-0.084
				c0.057-0.056,0.098-0.098,0.125-0.125c0.028-0.028,0.044-0.056,0.044-0.084c0.026-0.028,0.057-0.069,0.084-0.125l0.041-0.043
				c0-0.058,0-0.098,0-0.126s0.013-0.056,0.043-0.084c0-0.027,0.013-0.068,0.041-0.125v-0.084c0-0.028,0-0.056,0-0.083
				c0.028-0.028,0.043-0.056,0.043-0.084c0.028-0.028,0.042-0.072,0.042-0.127c0.026-0.026,0.041-0.054,0.041-0.083
				c0-0.027,0-0.057,0-0.084l0.042-0.083c0-0.028,0.014-0.069,0.042-0.128c0.029-0.028,0.071-0.056,0.127-0.083
				c0.028-0.027,0.056-0.055,0.083-0.083c0-0.056,0-0.1,0-0.127c0.028-0.028,0.041-0.057,0.041-0.084
				c0.029-0.028,0.044-0.069,0.044-0.125v-0.043c0-0.054,0-0.097,0-0.123c0.027-0.03,0.055-0.057,0.084-0.087
				c0-0.027,0.015-0.068,0.041-0.125c0.03-0.028,0.056-0.043,0.085-0.043c0.028-0.057,0.056-0.098,0.083-0.125v-0.085
				c0-0.028,0.014-0.068,0.041-0.125c0.028-0.028,0.043-0.056,0.043-0.083c0-0.029,0-0.057,0-0.084c0-0.056,0-0.098,0-0.126
				c0.027,0,0.056-0.028,0.084-0.083c0.028-0.028,0.042-0.056,0.042-0.083s0.014-0.058,0.041-0.084
				c0.028-0.058,0.055-0.099,0.083-0.126c0.03,0,0.058-0.028,0.086-0.084c0-0.028,0.014-0.07,0.042-0.125v-0.042
				c0-0.057,0-0.099,0-0.127c0.027-0.028,0.056-0.056,0.082-0.083c0.03-0.028,0.058-0.069,0.085-0.127v-0.042
				c0-0.055,0-0.097,0-0.125v-0.084c0-0.028,0.015-0.071,0.043-0.125c0.028-0.029,0.056-0.057,0.083-0.084
				c0-0.029,0.013-0.057,0.041-0.084c0-0.056,0-0.099,0-0.126v-0.084c0-0.028,0-0.069,0-0.126V16.84
				c0-0.056,0.015-0.099,0.043-0.127v-0.041c0-0.029,0-0.071,0-0.127v-0.042c0-0.057,0-0.098,0-0.127v-0.082c0-0.03,0-0.071,0-0.128
				c0-0.026,0-0.056,0-0.082c-0.028-0.029-0.043-0.057-0.043-0.085v-0.084c0-0.028,0-0.07,0-0.126
				c-0.028-0.029-0.041-0.057-0.041-0.084c-0.028-0.028-0.056-0.055-0.083-0.083c-0.028-0.056-0.043-0.101-0.043-0.127l-0.085-0.084
				c-0.026-0.028-0.055-0.068-0.082-0.125v-0.043c-0.029-0.054-0.042-0.097-0.042-0.125c-0.029-0.028-0.057-0.056-0.086-0.084
				c-0.028-0.029-0.055-0.07-0.083-0.126l-0.041-0.041c0-0.056-0.014-0.098-0.042-0.128c-0.029-0.027-0.072-0.056-0.128-0.083
				c-0.027-0.029-0.041-0.071-0.041-0.126c0-0.027,0-0.057,0-0.084c-0.028-0.028-0.07-0.056-0.126-0.083
				c-0.056-0.056-0.083-0.1-0.083-0.128l-6.891,0.044c-1.597,0.028-3.194,0.042-4.788,0.042c-0.029,0.028-0.057,0.069-0.086,0.125
				c-0.027,0-0.056,0.013-0.084,0.041c-0.055,0-0.097,0-0.125,0c-0.056,0-0.112,0-0.169,0c-0.055,0-0.125-0.013-0.21-0.041
				c-0.056-0.028-0.109-0.056-0.167-0.083c-0.028-0.056-0.057-0.1-0.085-0.128c-0.026,0-0.054-0.026-0.083-0.083
				c0-0.028,0-0.056,0-0.083v-0.041c-0.028-0.028-0.057-0.044-0.084-0.044c-0.029-0.057-0.041-0.099-0.041-0.127
				c-0.029-0.027-0.058-0.055-0.086-0.082c0-0.03,0-0.058,0-0.085v-0.083c0-0.056,0-0.098,0-0.126c0-0.03,0-0.058,0-0.084
				c0-0.028,0-0.071,0-0.126c0-0.026,0-0.058,0-0.083c0-0.028,0-0.059,0-0.086s0-0.054,0-0.083c0-0.029,0-0.071,0-0.127
				c0-0.028,0-0.056,0-0.084c0-0.026,0-0.054,0-0.084c0-0.026,0-0.067,0-0.124v-0.084c0-0.029,0-0.056,0-0.083
				c0-0.03,0-0.059,0-0.086c0-0.056,0-0.097,0-0.125c0-0.028,0-0.056,0-0.085c0-0.027,0-0.055,0-0.083v-0.085
				c0-0.056,0-0.097,0-0.125c0-0.029,0-0.056,0-0.084c0-0.026,0-0.057,0-0.083c0-0.057,0-0.097,0-0.126c0-0.028,0-0.056,0-0.084
				c0-0.028,0-0.071,0-0.127v-0.082c0-0.029,0-0.057,0-0.085s0-0.056,0-0.083c0-0.029,0-0.073,0-0.129c0-0.028,0-0.056,0-0.083
				s0-0.056,0-0.083v-0.084c0-0.028,0-0.07,0-0.125c0-0.03,0-0.057,0-0.084v-0.043c-0.167,0-0.349,0-0.545,0
				c-0.083,0-0.152,0-0.21,0c-0.083-0.027-0.167-0.056-0.25-0.083c-0.028-0.028-0.056-0.056-0.083-0.083
				c-0.03,0-0.058,0.015-0.085,0.042c-0.083-0.028-0.154-0.056-0.21-0.084c-0.029-0.027-0.056-0.071-0.085-0.127
				c-0.028,0-0.055-0.026-0.083-0.083c0-0.028,0-0.056,0-0.084V9.907H2.894v0.756l-0.041,0.084L2.808,10.79v0.504h0.044l0.041,0.041
				l-0.041,0.084l-0.759,8.235l-0.041,0.041v0.084l-0.042,0.043l-0.379,1.261l-1.345,0.126V7.386h0.086L0.54,7.345V7.304h0.084
				L0.75,7.386l0.083,0.084v0.084H3.02l0.125,0.042l0.043,0.041l0.083,0.042h19.283c0.252,0,0.49,0,0.715,0
				c0.7,0,1.4-0.014,2.099-0.042c0.029,0,0.058,0,0.085,0c0.057,0,0.112,0,0.168,0V7.598c0-0.028,0-0.056,0-0.086V7.427
				c0-0.027,0-0.069,0-0.124c0-0.028,0-0.058,0-0.083c0-0.028,0-0.057,0-0.085c0-0.057,0-0.098,0-0.126V6.923
				c0-0.028,0-0.068,0-0.124V6.757c0-0.059,0-0.098,0-0.127c0-0.028,0-0.056,0-0.083c0-0.027,0-0.071,0-0.126V6.377
				c0-0.054,0-0.097,0-0.125V6.168c0-0.028,0-0.07,0-0.126c0-0.027,0-0.056,0-0.083c0-0.029,0-0.057,0-0.084
				c0-0.057,0-0.097,0-0.125V5.665c0-0.028,0-0.071,0-0.127V5.497c0-0.056,0-0.098,0-0.126c0-0.03,0-0.057,0-0.083
				c0-0.028,0-0.07,0-0.127V5.118c0-0.056,0-0.098,0-0.125s0-0.056,0-0.084s0-0.07,0-0.127V4.74c0-0.056,0-0.099,0-0.126V4.53
				c0-0.027,0-0.07,0-0.127c0-0.028,0-0.056,0-0.083s0-0.055,0-0.083c0-0.056,0-0.1,0-0.127V4.025c0-0.028,0-0.056,0-0.083
				c0-0.029,0-0.057,0-0.084c0-0.055,0-0.098,0-0.126c0-0.027,0-0.057,0-0.084s0-0.068,0-0.124V3.48c0-0.056,0-0.099,0-0.127
				s0.014-0.056,0.042-0.083c0.056-0.028,0.097-0.07,0.125-0.126c0.03,0,0.085,0,0.169,0C25.985,3.115,26,3.088,26,3.06l0.042-0.043
				c0.027-0.028,0.056-0.042,0.083-0.042c0.056,0,0.111,0,0.169,0V2.934c1.819,0,3.626,0,5.417,0c0-0.03,0-0.057,0-0.084
				s0-0.07,0-0.126c0-0.027,0-0.058,0-0.084c0-0.029,0-0.057,0-0.084c0-0.027,0-0.055,0-0.083V2.43c0.059,0,0.126-0.016,0.21-0.044
				c0-0.026,0-0.054,0-0.082V2.221C31.979,2.162,32.035,2.121,32.092,2.094z M49.945,16.881c-0.7-0.7-1.091-1.511-1.175-2.437
				c-0.112,0.084-0.211,0.169-0.294,0.252c-0.364,0.365-0.645,0.769-0.841,1.218c0.028,0.027,0.07,0.069,0.128,0.126
				c0.754,0.728,1.624,1.134,2.604,1.218C50.227,17.147,50.084,17.023,49.945,16.881z M54.566,14.866
				c-0.056-0.056-0.111-0.114-0.167-0.169c-0.814-0.813-1.794-1.218-2.942-1.218c-0.446,0-0.868,0.07-1.26,0.209
				c-0.057,0.25-0.085,0.532-0.085,0.84c0,1.038,0.337,1.947,1.01,2.73c0.979-0.084,1.833-0.491,2.563-1.218
				C54.049,15.677,54.342,15.285,54.566,14.866z M36.208,28.77c0-0.026,0-0.054,0-0.083h-0.043c0,0.057,0.015,0.098,0.043,0.125
				V28.77z`,
            }),
          });
        }
        function g0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 81.466 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M80.762,7.29c0.032,0.032,0.063,0.079,0.094,0.141
				c0.063,0.063,0.125,0.11,0.188,0.142c0,0.062,0,0.125,0,0.187c0.032,0.031,0.078,0.078,0.142,0.141
				c0,0.032,0.016,0.047,0.046,0.047c0.032,0,0.063,0.016,0.095,0.049c0,0.03,0.015,0.062,0.047,0.09
				c0.03,0.033,0.063,0.048,0.093,0.048v0.048c0,0.032,0,0.063,0,0.093c0,0.032,0,0.062,0,0.095v0.048c0,0.031,0,0.062,0,0.092
				c0,0.032,0,0.063,0,0.094L81.42,8.653c0,0.03,0.016,0.046,0.046,0.046c0,0.031,0,0.062,0,0.093s0,0.063,0,0.094
				c0,0.032-0.016,0.063-0.046,0.094c0,0.032-0.017,0.063-0.047,0.093l-0.094,0.048c-0.031,0-0.063,0-0.094,0h-0.047l0.047,0.046
				c0,0.032,0,0.063,0,0.095c0,0.03,0,0.063,0,0.093c-0.032,0-0.047,0.016-0.047,0.047c0,0.031-0.017,0.047-0.048,0.047
				c-0.031,0.031-0.047,0.063-0.047,0.094c-0.031,0-0.063,0-0.093,0v0.047c-0.032,0-0.063,0-0.094,0
				c0,0.032-0.014,0.047-0.046,0.047h-0.047c-0.846,0.031-1.674,0.047-2.488,0.047l-0.046,0.047c-0.063,0-0.111,0-0.143,0h-0.046
				c-0.031,0-0.063,0-0.094,0s-0.063,0-0.095,0c-6.573,0.03-13.116,0.063-19.626,0.094c-0.031,0-0.063,0-0.094,0v0.046
				c0,0.032,0,0.063,0,0.094v0.094c0,0.032,0,0.063,0,0.095s0,0.062,0,0.092v0.049c0,0.03-0.015,0.062-0.046,0.092
				c0,0.033-0.016,0.063-0.047,0.094v0.283c0,0.031,0,0.062,0,0.093v0.047c0,0.031,0,0.063,0,0.094c0,0.032,0,0.063,0,0.094v0.094
				c0,0.033,0,0.064,0,0.095v0.14c0.031,0,0.064,0,0.094,0c0.032,0,0.063,0.017,0.094,0.048h0.046
				c0.031,0.03,0.08,0.046,0.142,0.046c0.03,0,0.062,0.014,0.093,0.046c0.03,0.03,0.047,0.063,0.047,0.094H58.6
				c0,0.032,0,0.063,0,0.094v0.047c0.031,0,0.063,0,0.093,0v0.047c0,0.03,0,0.063,0,0.095c0,0.03,0.017,0.062,0.047,0.093v0.046
				l0.047,0.047c-0.063,0.032-0.094,0.063-0.094,0.094v0.094c0,0.031,0,0.063,0,0.093c0,0.033,0,0.063,0,0.096v0.093
				c0,0.031,0,0.062,0,0.094v0.093c0,0.032,0,0.064,0,0.095c0,0.032,0,0.063,0,0.096v0.045c0,0.032,0,0.063,0,0.093
				c0,0.033,0,0.063,0,0.095v0.046c0,0.031,0,0.063,0,0.095v0.047c0,0.031,0,0.063,0,0.093c0,0.031,0,0.063,0,0.096
				c0,0.031,0,0.063,0,0.093v0.045c0,0.032,0,0.064,0,0.095c0,0.031,0,0.062,0,0.093c0,0.033,0,0.063,0,0.095
				c0,0.032,0,0.063,0,0.094v0.046c0,0.032,0,0.063,0,0.094c0,0.032,0,0.063,0,0.094v0.14c0,0.034,0,0.065,0,0.096v0.046
				c0,0.031,0,0.063,0,0.093c0,0.034,0,0.063,0,0.095v0.046c0,0.031,0,0.062,0,0.093c0,0.033,0,0.063,0,0.095
				c0,0.033,0,0.063,0,0.094s0,0.063,0,0.094v0.047l-0.045,0.046v0.047c-0.063,0-0.112,0.016-0.143,0.048c-0.093,0-0.188,0-0.281,0
				c-0.031,0-0.078-0.016-0.141-0.048h-0.047v0.048c0,0.031,0,0.063,0,0.094v0.047c0,0.03,0,0.063,0,0.093c0,0.032,0,0.065,0,0.095
				v0.046c0,0.031,0,0.063,0,0.093c0,0.032,0,0.064,0,0.095s0,0.062,0,0.093c0,0.031,0,0.063,0,0.094v0.094c0,0.031,0,0.062,0,0.093
				v0.047c0,0.032,0,0.063,0,0.094v0.046c0,0.032,0,0.063,0,0.095v0.046c0,0.033,0,0.063,0,0.094c0,0.031,0,0.063,0,0.095v0.047
				c0,0.03,0,0.063,0,0.093c0,0.031,0,0.063,0,0.095c0,0.03,0,0.062,0,0.093v0.095c0,0.032,0,0.063,0,0.094c0,0.031,0,0.062,0,0.093
				v0.048c0,0.032,0,0.063,0,0.093v0.048c-0.031,0.031-0.048,0.063-0.048,0.094v0.047h0.142l0.047,0.046
				c0.032,0,0.062,0.016,0.093,0.048c0,0.031,0,0.063,0,0.094l0.046,0.046c0,0.033,0.017,0.063,0.048,0.095v0.045
				c0,0.033,0.016,0.048,0.047,0.048h0.045c0.031,0.031,0.047,0.062,0.047,0.095c0,0.032,0,0.062,0,0.093v0.048
				c0,0.03-0.016,0.062-0.047,0.094l-0.045,0.046c0,0.032,0,0.063,0,0.094v0.048c0,0.031,0,0.062,0,0.093c0,0.032,0,0.063,0,0.094
				v0.095c0,0.03,0,0.062,0,0.093c0,0.031,0,0.063,0,0.094c0,0.033,0,0.063,0,0.095v0.046c0,0.03,0,0.063,0,0.094
				c0,0.032,0,0.063,0,0.095v0.046c0,0.03,0,0.063,0,0.094v0.047c0,0.032,0,0.063,0,0.093v0.046c0,0.033,0,0.063,0,0.095v0.095
				c0,0.031,0,0.063,0,0.094c0,0.031,0,0.062,0,0.093v0.093c0,0.033,0,0.064,0,0.095c0,0.031,0,0.062,0,0.093v0.048
				c0,0.033,0,0.064,0,0.095c0,0.032,0,0.063,0,0.094v0.186c0,0.033,0,0.063,0,0.095c0,0.032,0,0.064,0,0.095v0.047
				c0,0.03,0,0.063,0,0.095c0,0.031,0,0.063,0,0.093v0.093c0,0.032,0,0.063,0,0.094c0,0.032,0,0.062,0,0.093v0.047
				c0,0.032,0,0.064,0,0.096v0.139c0,0.031,0,0.062,0,0.095c0,0.03,0,0.063,0,0.093v0.046c0,0.031,0,0.063,0,0.095
				c0,0.031,0,0.062,0,0.094v0.046c0,0.031,0,0.063,0,0.094v0.094c0,0.031,0,0.061,0,0.093v0.096c0,0.03,0,0.062,0,0.092
				c0,0.031,0,0.063,0,0.094v0.095c0,0.03,0,0.061,0,0.093c0,0.031,0,0.063,0,0.095v0.045c0,0.032,0,0.063,0,0.095s0,0.063,0,0.093
				v0.047c0,0.032,0,0.063,0,0.094v0.048c0,0.03,0,0.062,0,0.093c0,0.032,0,0.063,0,0.095v0.047c0,0.031,0,0.063,0,0.093
				c0,0.032,0,0.063,0,0.094v0.094c0,0.032,0,0.063,0,0.095c0,0.03,0,0.063,0,0.093v0.046c0,0.033,0,0.064,0,0.096v0.093
				c0,0.031,0,0.062,0,0.094v0.047c0,0.03,0,0.063,0,0.093v0.047c0,0.031,0,0.063,0,0.093c0,0.032,0,0.064,0,0.095v0.047
				c0,0.032,0,0.062,0,0.093s0,0.063,0,0.095c0,0.031,0,0.063,0,0.093s0,0.061,0,0.093c0,0.032,0,0.065,0,0.096
				c0,0.031,0,0.062,0,0.093v0.046c0,0.033,0,0.064,0,0.095v0.045c0,0.032,0,0.062,0,0.095v0.047c0,0.032,0,0.063,0,0.094
				c0,0.031,0,0.062,0,0.094v0.047c0,0.032,0,0.062,0,0.093c0,0.031,0,0.063,0,0.094v0.047c0,0.031,0,0.061,0,0.093
				c0,0.03,0,0.063,0,0.094v0.047c0,0.032,0,0.063,0,0.094s0,0.063,0,0.094v0.093c0,0.032,0,0.064,0,0.095v0.047
				c0,0.032,0,0.063,0,0.094s0,0.063,0,0.093c0,0.032,0,0.064,0,0.095c0,0.031,0,0.063,0,0.094v0.095c0,0.031,0,0.063,0,0.093
				c0,0.032,0,0.063,0,0.094v0.047c0,0.032,0,0.063,0,0.095c0,0.031,0,0.062,0,0.094v0.094c0,0.032,0,0.063,0,0.094v0.094
				c0,0.033,0,0.063,0,0.095v0.046c0,0.031,0,0.062,0,0.094c0,0.033,0,0.063,0,0.095v0.091c0,0.032,0,0.063,0,0.097
				c0,0.031,0,0.062,0,0.091v0.048c-0.032,0.031-0.047,0.063-0.047,0.095c0.031,0,0.063,0.015,0.093,0.046
				c0.031,0.031,0.047,0.062,0.047,0.094c0,0.031,0,0.062,0,0.094c0,0.03-0.016,0.062-0.047,0.094c-0.062,0-0.108,0-0.141,0
				c-0.124,0-0.25,0-0.375,0c-0.031,0.032-0.048,0.063-0.048,0.093c-0.031,0.033-0.062,0.063-0.093,0.094v0.047
				c0,0.031,0,0.062,0,0.093c0,0.032,0,0.063,0,0.094v0.048c0,0.031,0,0.062,0,0.093v0.048c0,0.031,0,0.063,0,0.094
				c0,0.03,0,0.062,0,0.093s0,0.063,0,0.094v0.048c0,0.03,0,0.062,0,0.092c0,0.032,0,0.065,0,0.096c0,0.032,0,0.063,0,0.094
				c0,0.032,0,0.063,0,0.094v0.047c0,0.031,0,0.063,0,0.093c0,0.032,0,0.063,0,0.095c0,0.031,0,0.062,0,0.093v0.047
				c0,0.031,0,0.063,0,0.095v0.047c0,0.031,0,0.062,0,0.093c0,0.031,0,0.063,0,0.094v0.047c0,0.032,0,0.062,0,0.093v0.048
				c0.031,0.033,0.077,0.047,0.141,0.047l0.046,0.047c0,0.031,0.017,0.063,0.048,0.093c-0.031,0.032-0.048,0.065-0.048,0.095
				c0,0.031-0.015,0.047-0.046,0.047c-0.063,0-0.11,0.014-0.141,0.046c-0.377,0-0.752,0-1.127,0
				c-0.063-0.033-0.11-0.046-0.143-0.046c-0.03,0-0.062-0.016-0.092-0.047c0-0.03,0-0.063,0-0.095c0-0.03,0-0.062,0-0.093
				c0.03,0,0.062-0.015,0.092-0.047c0.033,0,0.079-0.015,0.143-0.047h0.046c0-0.031,0-0.063,0-0.094v-0.047c0-0.03,0-0.063,0-0.093
				c0-0.031,0-0.063,0-0.094V31.19c0-0.031,0-0.064,0-0.095v-0.094c0-0.031,0-0.063,0-0.094c0-0.033,0-0.063,0-0.094V30.72
				c0-0.031,0-0.062,0-0.094c0-0.031,0-0.062,0-0.094v-0.047c0-0.032,0-0.062,0-0.094c0-0.031,0-0.062,0-0.094V30.25
				c0-0.031,0-0.063,0-0.093V30.11c0-0.031,0-0.063,0-0.094c0-0.031,0-0.063,0-0.095v-0.046c0-0.032,0-0.063,0-0.094
				c0-0.03,0-0.064,0-0.094V29.64h-0.046c0-0.031,0-0.063,0-0.093c-0.063-0.031-0.11-0.049-0.143-0.049
				c-0.03-0.03-0.045-0.061-0.045-0.093H56.44c-0.032,0-0.063,0-0.095,0c-0.062-0.032-0.11-0.064-0.141-0.094
				c0-0.032-0.016-0.063-0.048-0.094v-0.094l-0.046-0.046c0-0.033-0.016-0.064-0.047-0.095l-0.046-0.048c0-0.03,0-0.061,0-0.091
				c0-0.034-0.017-0.065-0.048-0.097v-0.091c0-0.032,0-0.063,0-0.095c0-0.032,0-0.063,0-0.094V28.42c0-0.032,0-0.063,0-0.095v-0.094
				c0-0.031,0-0.062,0-0.094v-0.094c0-0.032,0-0.063,0-0.094c0-0.031,0-0.063,0-0.095v-0.047c0-0.031,0-0.062,0-0.094
				c0-0.031,0-0.063,0-0.093v-0.095c0-0.031,0-0.063,0-0.094c0-0.03,0-0.063,0-0.095c0-0.03,0-0.062,0-0.093s0-0.062,0-0.094v-0.047
				c0-0.03,0-0.063,0-0.095v-0.093c0-0.03,0-0.063,0-0.094s0-0.062,0-0.094v-0.047c0-0.03,0-0.063,0-0.094c0-0.032,0-0.062,0-0.093
				v-0.047c0-0.031,0-0.063,0-0.094c0-0.031,0-0.062,0-0.093v-0.047c0-0.032,0-0.063,0-0.094c0-0.031,0-0.062,0-0.094v-0.047
				c0-0.033,0-0.063,0-0.095v-0.045c0-0.031,0-0.063,0-0.095v-0.046c0-0.031,0-0.062,0-0.093c0-0.03,0-0.063,0-0.096
				c0-0.032,0-0.062,0-0.093s0-0.063,0-0.093c0-0.032,0-0.064,0-0.095s0-0.061,0-0.093v-0.047c0-0.031,0-0.063,0-0.095
				c0-0.031,0-0.062,0-0.093v-0.047c0-0.031,0-0.063,0-0.093V24.71c0-0.032,0-0.063,0-0.094v-0.093c0-0.032,0-0.063,0-0.096v-0.046
				c0-0.031,0-0.063,0-0.093c0-0.033,0-0.063,0-0.095v-0.094c0-0.031,0-0.062,0-0.094c0-0.031,0-0.062,0-0.093v-0.047
				c0-0.032,0-0.063,0-0.095c0-0.031,0-0.063,0-0.093V23.63c0-0.031,0-0.063,0-0.094v-0.047c0-0.03,0-0.062,0-0.093s0-0.063,0-0.095
				v-0.045c0-0.033,0-0.064,0-0.095c0-0.032,0-0.063,0-0.093v-0.095c0-0.031,0-0.063,0-0.094c0-0.03,0-0.062,0-0.092V22.69
				c0-0.032,0-0.062,0-0.093v-0.094c0-0.031,0-0.063,0-0.094v-0.046c0-0.032,0-0.063,0-0.094c0-0.032,0-0.064,0-0.095v-0.046
				c0-0.031,0-0.063,0-0.093c0-0.033,0-0.064,0-0.095V21.8c0-0.032,0-0.064,0-0.096v-0.047c0-0.032,0-0.062,0-0.093
				c0-0.031,0-0.062,0-0.094v-0.093c0-0.031,0-0.062,0-0.093c0-0.032,0-0.065,0-0.095v-0.047c0-0.031,0-0.063,0-0.095
				c0-0.031,0-0.062,0-0.095v-0.186c0-0.031,0-0.062,0-0.094c0-0.03,0-0.062,0-0.095V20.53c0-0.031,0-0.062,0-0.093
				c0-0.031,0-0.062,0-0.095V20.25c0-0.031,0-0.063,0-0.093c0-0.031,0-0.063,0-0.094v-0.095c0-0.032,0-0.062,0-0.095v-0.046
				c0-0.031,0-0.062,0-0.093v-0.047c0-0.031,0-0.064,0-0.094v-0.046c0-0.031,0-0.063,0-0.095c0-0.031,0-0.064,0-0.094v-0.046
				c0-0.032,0-0.062,0-0.095c0-0.03,0-0.063,0-0.094c0-0.032,0-0.063,0-0.093v-0.095c0-0.031,0-0.063,0-0.094
				c0-0.031,0-0.062,0-0.093V18.7c0-0.031,0-0.062,0-0.094V18.56c0-0.033,0-0.064,0-0.094v-0.048c0-0.031,0-0.062,0-0.093
				c0-0.033,0-0.063,0-0.095s0-0.063,0-0.093V18.09c0-0.031,0.016-0.048,0.048-0.048c0.031,0,0.078,0,0.139,0v-0.046
				c0-0.031,0-0.063,0-0.094c0.032-0.032,0.048-0.063,0.048-0.094c0.03,0,0.062-0.016,0.093-0.047l0.048-0.047v-0.094
				c0-0.03,0-0.061,0-0.093v-0.094c0-0.032,0-0.063,0-0.093v-0.048c0-0.031,0-0.063,0-0.095v-0.093c0-0.032,0-0.064,0-0.095
				c0-0.03,0-0.063,0-0.093v-0.095c0-0.031,0-0.062,0-0.093s0-0.063,0-0.094v-0.048c0-0.031,0-0.063,0-0.094
				c0-0.031,0-0.062,0-0.094v-0.187c0-0.032,0-0.063,0-0.096c0-0.03,0-0.063,0-0.093v-0.047c0-0.031,0-0.063,0-0.095
				c0-0.031,0-0.062,0-0.093v-0.093c0-0.032,0-0.063,0-0.094c0-0.032,0-0.062,0-0.094V15.46c0-0.032,0-0.063,0-0.095
				c-0.031,0-0.062,0-0.093,0s-0.063,0-0.095,0c-0.062,0-0.124,0-0.187,0c-0.031,0-0.063,0-0.094,0v0.048l-0.094-0.095v-0.046
				c0-0.032,0-0.063,0-0.094c0-0.032,0-0.063,0-0.094v-0.047c0-0.032,0-0.062,0-0.095c0-0.031,0-0.062,0-0.093v-0.093
				c0.032-0.03,0.048-0.064,0.048-0.094c0-0.031,0.016-0.047,0.046-0.047c-0.03-0.031-0.063-0.046-0.094-0.046
				c0-0.03,0-0.062,0-0.096V14.38c0.032,0,0.048-0.017,0.048-0.047c0-0.03,0.016-0.062,0.046-0.094c0-0.031,0-0.062,0-0.094v-0.046
				c0-0.031,0-0.062,0-0.094c0-0.031,0-0.062,0-0.095c0-0.031-0.016-0.062-0.046-0.093c0-0.031-0.016-0.063-0.048-0.095v-0.045
				c0-0.031,0-0.063,0-0.093c0-0.032,0-0.064,0-0.096c0-0.03,0-0.062,0-0.093c0.032,0,0.064,0,0.094,0
				c-0.03-0.032-0.063-0.047-0.094-0.047l-0.047-0.095c-0.062,0-0.124-0.016-0.187-0.046L55.5,13.16
				c-0.03-0.032-0.062-0.063-0.092-0.095c0-0.03,0-0.063,0-0.092c0-0.033,0-0.064,0-0.096c0-0.03-0.016-0.063-0.047-0.095
				c0-0.03-0.015-0.045-0.048-0.045c0-0.032,0-0.063,0-0.096v-0.093l-0.094-0.094c-0.031,0.032-0.078,0.048-0.141,0.048v0.093
				c0,0.031,0,0.062,0,0.094v0.093c0,0.032-0.015,0.064-0.047,0.095c0,0.032-0.016,0.063-0.046,0.096l-0.046,0.045
				c-0.063,0.032-0.11,0.047-0.141,0.047c-0.125,0.032-0.234,0.063-0.328,0.095c-0.032,0.031-0.064,0.046-0.095,0.046v0.046
				c0,0.031,0,0.063,0,0.095c0,0.031,0,0.063,0,0.094s-0.015,0.045-0.045,0.045l-0.048,0.047c0,0.032-0.015,0.063-0.047,0.095
				c0,0.03-0.015,0.046-0.046,0.046c-0.032,0-0.048,0.015-0.048,0.045h-0.094c-0.063,0.032-0.141,0.048-0.235,0.048l-0.047,0.047
				c-0.031,0-0.063,0-0.092,0c-0.063,0-0.126-0.016-0.189-0.047v-0.048c-0.062,0-0.125,0-0.188,0c-0.032,0-0.047,0.016-0.047,0.048
				L53.2,13.817h-0.093c-0.031,0-0.063,0-0.095,0c-0.094,0-0.156,0-0.188,0c-0.156,0-0.296,0-0.423,0c-0.03,0-0.062,0-0.092,0
				c-0.126,0.031-0.267,0.062-0.423,0.093c-0.031,0-0.063,0-0.095,0c-0.062,0-0.11,0-0.14,0h-0.047c-0.063,0-0.125,0-0.187,0
				c0-0.031-0.017-0.062-0.049-0.093c-0.031,0-0.063,0-0.093,0c-0.032,0-0.079-0.016-0.142-0.047
				c-0.031-0.032-0.047-0.062-0.047-0.093c-0.031,0-0.062-0.017-0.093-0.046c0-0.032,0-0.063,0-0.095v-0.047c0-0.03,0-0.062,0-0.093
				c0-0.032,0-0.063,0-0.096c0-0.03,0-0.062,0-0.093V13.16c0-0.032,0-0.063,0-0.095c0-0.03,0-0.063,0-0.092c0-0.033,0-0.064,0-0.096
				c-0.063,0-0.141,0-0.236,0c-0.032,0-0.078,0-0.14,0h-9.956c0,0.032,0,0.063,0,0.096c0,0.029,0,0.062,0,0.092
				c0,0.032,0,0.063,0,0.095v0.046c0,0.031,0,0.063,0,0.093c0,0.033,0,0.064,0,0.096c0,0.031,0,0.063,0,0.093v0.047
				c0,0.032,0,0.063,0,0.095v0.092c0.032,0,0.062,0,0.095,0c0.03,0,0.063,0,0.093,0c0.062,0.032,0.111,0.064,0.142,0.095
				c0,0.031,0.016,0.062,0.047,0.093h0.047c0,0.033,0,0.063,0,0.095c0,0.032,0,0.063,0,0.094v0.095c0,0.03,0,0.063,0,0.093
				c0,0.031,0,0.063,0,0.093v0.093c0,0.034,0,0.065,0,0.096v0.14c0.03,0.063,0.077,0.11,0.141,0.142
				c0,0.062,0.016,0.125,0.046,0.188c0.032,0.033,0.062,0.079,0.093,0.142c0.032,0.031,0.064,0.047,0.096,0.047
				c0.031,0.031,0.062,0.047,0.094,0.047h0.046c0.032,0,0.079,0.016,0.141,0.046c0,0.032,0.016,0.047,0.048,0.047
				c0.03,0.032,0.062,0.048,0.093,0.048c0,0.031,0,0.063,0,0.094v0.047c0,0.03,0,0.063,0,0.093c0,0.032,0,0.065,0,0.095v0.046
				c0,0.031,0,0.063,0,0.093c0,0.032,0,0.064,0,0.095s0,0.062,0,0.093c0,0.031,0,0.063,0,0.094v0.094c0,0.031,0,0.062,0,0.093v0.047
				c0,0.032,0,0.063,0,0.094v0.046c0,0.032,0,0.063,0,0.095v0.046c0,0.033,0,0.063,0,0.094c0,0.031,0,0.063,0,0.095v0.047
				c0,0.03,0,0.063,0,0.093c0,0.031,0,0.063,0,0.095c0,0.03,0,0.062,0,0.093v0.095c0,0.032,0,0.063,0,0.094c0,0.031,0,0.062,0,0.093
				v0.048c0,0.032,0,0.063,0,0.093v0.048c0,0.031,0,0.063,0,0.094v0.047c0,0.032,0,0.063,0,0.094c0,0.031,0,0.063,0,0.094v0.046
				c0,0.033,0,0.063,0,0.095v0.142c0,0.03,0,0.062,0,0.093s0,0.063,0,0.095v0.047c0,0.032,0,0.063,0,0.093c0,0.032,0,0.063,0,0.094
				v0.094c0,0.031,0,0.062,0,0.093v0.047c0,0.032,0,0.063,0,0.095v0.093c0,0.031,0,0.063,0,0.094c0,0.033,0,0.063,0,0.095v0.091
				c0,0.033,0,0.065,0,0.096c0,0.032,0,0.063,0,0.094v0.046c0,0.032,0,0.063,0,0.095c0,0.032,0,0.063,0,0.093v0.141
				c0,0.031,0,0.064,0,0.095v0.046c0,0.032,0,0.063,0,0.095c0,0.031,0,0.063,0,0.093v0.046c0,0.033,0,0.064,0,0.095v0.093
				c0,0.033,0,0.065,0,0.096c0,0.03,0,0.062,0,0.092v0.048c0,0.031,0,0.063,0,0.094v0.141c0,0.031,0,0.063,0,0.093
				c0,0.032,0,0.063,0,0.094v0.047c0,0.032,0,0.062,0,0.094c0,0.031,0,0.062,0,0.093v0.047c0,0.032,0,0.063,0,0.094v0.093
				c0,0.032,0,0.064,0,0.095v0.094c0,0.031,0,0.063,0,0.093s0,0.062,0,0.095c0,0.03,0,0.063,0,0.093c0,0.032,0,0.062,0,0.094
				c0,0.031,0,0.063,0,0.094v0.047c0,0.031,0,0.062,0,0.093c0,0.032,0,0.064,0,0.095v0.047c0,0.031,0,0.061,0,0.093v0.143
				c0,0.03,0,0.062,0,0.092c0,0.033,0,0.064,0,0.096v0.047c0,0.03,0,0.061,0,0.093c0,0.031,0,0.063,0,0.095c0,0.03,0,0.062,0,0.093
				c0,0.031,0,0.063,0,0.094v0.046c0,0.031,0,0.063,0,0.094c0,0.031,0,0.063,0,0.095c0,0.03,0,0.062,0,0.093v0.046
				c0,0.033,0,0.065,0,0.095v0.047c0,0.031,0,0.062,0,0.094s0,0.063,0,0.095v0.045c0,0.032,0,0.063,0,0.095c0,0.03,0,0.063,0,0.093
				v0.094c0,0.031,0,0.063,0,0.093v0.093c0,0.033,0,0.063,0,0.096c0,0.03,0,0.063,0,0.093v0.093c0,0.032,0,0.063,0,0.093v0.049
				c0,0.03,0,0.062,0,0.093c0,0.03,0,0.062,0,0.093v0.049c0,0.031,0,0.063,0,0.093s0,0.061,0,0.093v0.049c0,0.031,0,0.063,0,0.093
				s0,0.062,0,0.093v0.048c0,0.031,0,0.062,0,0.092c0,0.032,0,0.062,0,0.095v0.094c0,0.032,0,0.063,0,0.094v0.047
				c0,0.031,0,0.063,0,0.094v0.235c0,0.031,0,0.063,0,0.094v0.046c0,0.033,0,0.063,0,0.094v0.047
				c-0.031,0.031-0.063,0.063-0.093,0.094v0.047c0,0.031,0,0.062,0,0.095c0,0.031,0,0.062,0,0.093v0.047c0,0.03,0,0.062,0,0.095
				v0.045c0,0.032,0,0.064,0,0.095c-0.032,0.031-0.048,0.063-0.048,0.094c-0.031,0.033-0.062,0.046-0.093,0.046
				c-0.031,0.032-0.079,0.048-0.141,0.048c-2.786,0-5.556,0-8.311,0c-0.031,0-0.077,0-0.142,0h-0.046c-0.031,0-0.062,0-0.093,0
				c-0.063,0-0.11,0-0.141,0c-0.032,0-0.078-0.017-0.141-0.048c-0.063,0-0.126-0.014-0.188-0.046c0-0.031-0.016-0.063-0.047-0.094
				c-0.03-0.03-0.062-0.063-0.093-0.095h-0.141c-0.062,0-0.111,0-0.141,0c-0.031,0-0.063-0.013-0.094-0.045
				c-0.03-0.033-0.046-0.064-0.046-0.095v-0.094c0-0.03,0-0.063,0-0.095c0-0.03,0-0.061,0-0.093V26.87c0-0.031,0-0.063,0-0.094
				c0-0.031,0-0.062,0-0.094v-0.094c0-0.032,0-0.062,0-0.093V26.4c0-0.031,0-0.062,0-0.093c0-0.031,0-0.063,0-0.094v-0.047
				c0-0.032,0-0.063,0-0.094v-0.094c0-0.033,0-0.063,0-0.095c0-0.03,0-0.062,0-0.092v-0.048c0-0.031,0-0.063,0-0.093
				s0-0.062,0-0.093v-0.049c0-0.032,0-0.062,0-0.093s0-0.063,0-0.093v-0.049c0-0.031,0-0.063,0-0.093c0-0.031,0-0.063,0-0.093
				v-0.049c0-0.03,0-0.061,0-0.093v-0.093c0-0.031,0-0.063,0-0.093c0-0.032,0-0.063,0-0.096v-0.093c0-0.03,0-0.063,0-0.093v-0.094
				c0-0.031,0-0.063,0-0.093c0-0.033,0-0.063,0-0.095v-0.045c0-0.032,0-0.063,0-0.095s0-0.063,0-0.094v-0.047
				c0-0.03,0-0.063,0-0.095v-0.046c0-0.031,0-0.063,0-0.093c0-0.031,0-0.063,0-0.095c0-0.032,0-0.063,0-0.094v-0.046
				c0-0.032,0-0.063,0-0.094c0-0.031,0-0.063,0-0.093c0-0.033,0-0.064,0-0.095c0-0.032,0-0.063,0-0.093v-0.047
				c0-0.032,0-0.063,0-0.096c0-0.03,0-0.062,0-0.092V22.69c0-0.032,0-0.062,0-0.093V22.55c0-0.03,0-0.063,0-0.095
				c0-0.031,0-0.062,0-0.093v-0.047c0-0.031,0-0.063,0-0.094c0-0.032,0-0.063,0-0.094c0-0.031,0-0.063,0-0.093
				c0-0.033,0-0.064,0-0.095s0-0.062,0-0.093v-0.094c0-0.031,0-0.063,0-0.095v-0.093c0-0.031,0-0.062,0-0.094v-0.047
				c0-0.032,0-0.063,0-0.093c0-0.032,0-0.062,0-0.094v-0.047c0-0.031,0-0.063,0-0.094c0-0.03,0-0.063,0-0.093V20.86
				c0-0.031,0-0.063,0-0.094v-0.048c0-0.031,0-0.062,0-0.092c0-0.031,0-0.063,0-0.096v-0.093c0-0.031,0-0.062,0-0.095v-0.046
				c0-0.03,0-0.062,0-0.093c0-0.032,0-0.063,0-0.095v-0.046c0-0.031,0-0.063,0-0.095v-0.141c0-0.031,0-0.062,0-0.093
				c0-0.033,0-0.063,0-0.095v-0.046c0-0.031,0-0.062,0-0.094c0-0.031,0-0.063,0-0.096v-0.091c0-0.032,0-0.062,0-0.095
				c0-0.03,0-0.063,0-0.094v-0.093c0-0.031,0-0.063,0-0.095v-0.047c0-0.032,0-0.063,0-0.093V18.7c0-0.031,0-0.062,0-0.094
				c0-0.03,0-0.062,0-0.093v-0.047c0-0.032,0-0.063,0-0.095s0-0.063,0-0.093v-0.142c0-0.032,0-0.062,0-0.095v-0.046
				c0-0.031,0-0.063,0-0.094c0-0.032,0-0.063,0-0.094v-0.047c0-0.031,0-0.063,0-0.094v-0.048c0-0.03,0-0.061,0-0.093v-0.048
				c0-0.031,0-0.062,0-0.093c0-0.032,0-0.063,0-0.094v-0.095c0-0.031,0-0.063,0-0.093c0-0.032,0-0.064,0-0.095
				c0-0.03,0-0.063,0-0.093v-0.047c0-0.031,0-0.063,0-0.095c0-0.031,0-0.062,0-0.094v-0.046c0-0.032,0-0.063,0-0.095v-0.046
				c0-0.031,0-0.062,0-0.094v-0.047c0-0.032,0-0.063,0-0.093v-0.046c-0.032,0-0.048-0.017-0.048-0.048
				c0-0.032-0.016-0.063-0.047-0.094c0-0.032,0-0.062,0-0.093s0-0.063,0-0.095c0-0.031,0-0.062,0-0.093v-0.093
				c0-0.032,0-0.063,0-0.094c0-0.032,0-0.062,0-0.094V15.46c0-0.032,0-0.063,0-0.095v-0.14c0-0.031,0-0.063,0-0.094s0-0.062,0-0.094
				v-0.046c0-0.031,0-0.063,0-0.095c0.032-0.03,0.047-0.062,0.047-0.093l0.048-0.047h0.046c-0.03-0.03-0.046-0.064-0.046-0.094
				v-0.094c0-0.03,0-0.062,0-0.096l0.092-0.093c0.033-0.031,0.048-0.062,0.048-0.093c0.03,0,0.063-0.016,0.095-0.048
				c0.031-0.031,0.077-0.045,0.141-0.045v-0.049c0-0.03,0.015-0.061,0.046-0.092c0-0.031,0-0.063,0-0.094l0.046-0.048
				c0.032-0.029,0.063-0.045,0.094-0.046c-0.564,0-1.127,0.016-1.69,0.046c-0.031,0-0.063,0-0.094,0v0.048c0,0.063,0,0.126,0,0.187
				c0,0.032,0,0.079,0,0.142c0,0.063,0,0.107,0,0.14v0.095c0,0.031,0,0.077,0,0.14c-0.03,0.064-0.046,0.109-0.046,0.141
				c0,0.031,0.016,0.063,0.046,0.093c0,0.032,0.016,0.064,0.047,0.095l0.047,0.046c0.032,0.033,0.063,0.063,0.094,0.094
				c0.03,0.031,0.062,0.063,0.093,0.094v0.14c0,0.032,0.016,0.063,0.048,0.095v0.046c0,0.032,0,0.062,0,0.094
				c-0.032,0.031-0.048,0.063-0.048,0.094l-0.046,0.093H30.85v0.047c0,0.032-0.017,0.063-0.047,0.094
				c0,0.032-0.016,0.048-0.047,0.048l-0.094,0.093c-0.03,0-0.062,0-0.093,0c-0.156,0.031-0.313,0.063-0.47,0.094
				c-0.032,0-0.063,0.016-0.094,0.048h-0.047c-0.062,0-0.11,0-0.142,0H29.77c-0.189,0-0.375,0-0.563,0l-0.047,0.046h-0.047
				c0,0.031,0,0.062,0,0.093v0.047c0,0.032,0,0.063,0,0.094v0.046c-0.031,0.032-0.046,0.063-0.046,0.095
				c-0.033,0-0.063,0.016-0.094,0.046c0,0.033,0,0.063,0,0.094c0,0.031-0.016,0.063-0.048,0.095l-0.046,0.047
				c0,0.03,0,0.063,0,0.093c0,0.031,0,0.063,0,0.095c0,0.03,0,0.062,0,0.093c-0.031,0-0.063,0.016-0.094,0.047v0.047
				c0,0.032-0.016,0.063-0.047,0.094c0,0.031-0.017,0.062-0.048,0.093v0.048c0,0.032,0,0.063,0,0.093v0.048c0,0.031,0,0.063,0,0.094
				l-0.046,0.047c0,0.032-0.016,0.063-0.046,0.094c0,0.031,0,0.063,0,0.094v0.046c-0.032,0.033-0.047,0.063-0.047,0.095
				l-0.048,0.045v0.096c-0.031,0.03-0.046,0.062-0.046,0.093c-0.031,0.031-0.063,0.063-0.094,0.095v0.047c0,0.032,0,0.063,0,0.093
				c0,0.032,0,0.063,0,0.094v0.048c0,0.031-0.016,0.046-0.047,0.046c0,0.031,0,0.062,0,0.093v0.047c0,0.032,0,0.063,0,0.095
				l-0.047,0.046v0.047c-0.031,0.031-0.063,0.063-0.093,0.094c0,0.033,0,0.063,0,0.095v0.091c0,0.033,0,0.065,0,0.096
				c0,0.032-0.016,0.063-0.047,0.094v0.046c-0.031,0.032-0.063,0.063-0.094,0.095c0,0.032,0,0.063,0,0.093v0.141
				c-0.03,0.031-0.063,0.064-0.093,0.095v0.046c0,0.032,0,0.063,0,0.095c0,0.031,0,0.063,0,0.093v0.046c0,0.033,0,0.064,0,0.095
				v0.093c0,0.033,0,0.065,0,0.096c0,0.03,0,0.062,0,0.092v0.048c0,0.031,0,0.063,0,0.094c-0.032,0.031-0.062,0.046-0.095,0.046
				v0.095c0,0.031,0,0.063,0,0.093c-0.031,0.032-0.063,0.063-0.094,0.094v0.047c0,0.032,0,0.062,0,0.094c0,0.031,0,0.062,0,0.093
				l-0.046,0.047c0,0.032,0,0.063,0,0.094c-0.032,0-0.063,0.016-0.095,0.047c-0.03,0-0.077,0-0.141,0l-0.047,0.046
				c-0.031,0.032-0.046,0.064-0.046,0.095c-0.031,0-0.062,0.017-0.094,0.048h-0.047c-0.063,0-0.124-0.016-0.188-0.048l-0.047-0.047
				c-0.031,0.032-0.063,0.047-0.093,0.047c0,0.032-0.016,0.048-0.047,0.048c-0.031,0-0.063,0-0.094,0c-0.594,0-1.188,0-1.784,0
				c-0.062,0-0.141-0.016-0.235-0.048v-0.047c-0.094,0-0.173-0.016-0.234-0.047c-0.032,0-0.064,0-0.095,0h-0.046
				c-0.033,0-0.079-0.015-0.143-0.046c-0.061,0-0.124-0.016-0.186-0.047l-0.095-0.094c-0.063,0-0.109-0.016-0.141-0.047
				c-0.033,0-0.063-0.016-0.096-0.046c-0.03-0.031-0.063-0.062-0.093-0.093v-0.095c-0.031,0-0.078,0-0.142,0
				c0-0.031-0.015-0.063-0.046-0.094c-0.032-0.03-0.047-0.063-0.047-0.093V20.86c0-0.031,0-0.063,0-0.094
				c-0.032-0.031-0.063-0.062-0.094-0.094v-0.046c0-0.031,0-0.063,0-0.096v-0.045c0-0.032,0-0.063,0-0.094
				c0.031-0.031,0.047-0.063,0.047-0.095c0.031,0,0.047-0.016,0.047-0.046c0-0.031,0-0.063,0-0.093c0-0.031,0-0.063,0-0.094
				c0-0.031,0-0.063,0-0.095c0.031,0,0.047-0.016,0.047-0.047c0.031-0.03,0.046-0.063,0.046-0.093c0.032,0,0.048-0.016,0.048-0.047
				c0.032-0.031,0.047-0.063,0.047-0.093c0-0.031,0-0.064,0-0.094v-0.094c0-0.031,0.015-0.063,0.046-0.096v-0.045
				c0-0.032,0-0.063,0-0.094c0.03-0.03,0.047-0.063,0.047-0.096l0.045-0.045c0-0.032,0-0.063,0-0.093v-0.047
				c0.032,0,0.063-0.016,0.096-0.048v-0.047c0-0.032,0-0.063,0-0.093c0-0.031,0-0.062,0-0.094c0.032,0,0.046-0.016,0.046-0.047
				c0.032-0.031,0.047-0.063,0.047-0.093c0-0.033,0-0.064,0-0.094v-0.048c0.031,0,0.062-0.016,0.092-0.047
				c0-0.031,0.016-0.063,0.049-0.093V18.23c0-0.031,0-0.063,0-0.093V18.09l0.046-0.048c0-0.03,0-0.063,0-0.094
				c0-0.032,0-0.063,0-0.094v-0.046c0.031,0,0.047-0.016,0.047-0.047c0.032-0.031,0.047-0.063,0.047-0.094
				c0.03-0.032,0.046-0.062,0.046-0.094v-0.046c0-0.032,0-0.062,0-0.094s0-0.063,0-0.093c0.032-0.032,0.064-0.048,0.095-0.048
				v-0.095c0.031-0.031,0.048-0.063,0.048-0.093c0.031,0,0.046-0.016,0.046-0.048c0-0.03,0-0.062,0-0.093
				c0.031-0.031,0.047-0.063,0.047-0.093v-0.048c0-0.031,0-0.062,0-0.093v-0.094c0.031-0.032,0.048-0.063,0.048-0.095
				c0-0.029,0-0.062,0-0.092l0.046-0.048c0-0.031,0-0.063,0-0.093v-0.093c0.031,0,0.063-0.017,0.094-0.048c0-0.032,0-0.063,0-0.094
				c0-0.032,0-0.062,0-0.093v-0.048c0.031-0.031,0.047-0.062,0.047-0.094c0.032-0.031,0.047-0.062,0.047-0.093v-0.047
				c0-0.032,0-0.063,0-0.094v-0.047l0.046-0.047c0-0.031,0.016-0.063,0.048-0.094v-0.048l-0.048-0.047
				c0-0.03-0.015-0.046-0.046-0.046c0-0.032,0-0.063,0-0.094c0-0.032-0.015-0.063-0.047-0.094c0-0.031-0.016-0.047-0.047-0.047
				c0-0.032,0-0.062,0-0.095c-0.031-0.031-0.063-0.062-0.094-0.093c-0.031,0-0.046-0.015-0.046-0.046l-0.048-0.047
				c0-0.03,0-0.064,0-0.094c-0.031-0.031-0.062-0.063-0.093-0.094l-0.048-0.046c0-0.031-0.031-0.064-0.095-0.095
				c-0.03,0-0.061-0.016-0.093-0.047c-0.031,0-0.062,0-0.093,0v-0.047c-0.064,0-0.142-0.015-0.235-0.046l-0.049-0.093
				c-0.062,0-0.123-0.017-0.186-0.049c-0.032,0-0.078-0.016-0.141-0.046c-0.032-0.031-0.047-0.062-0.047-0.094
				c-0.032,0-0.063-0.015-0.094-0.046V13.91c-0.063,0-0.127,0-0.189,0c-0.031-0.031-0.063-0.062-0.093-0.093
				c-0.063-0.031-0.094-0.063-0.094-0.095c-0.031,0-0.063-0.014-0.094-0.045c-0.031,0-0.046-0.017-0.046-0.046
				c-0.063-0.032-0.095-0.063-0.095-0.095c0-0.031-0.016-0.047-0.048-0.047v-0.045c-0.029-0.031-0.062-0.063-0.092-0.094
				c0-0.033-0.017-0.064-0.049-0.095c0-0.03-0.015-0.046-0.046-0.046l-0.046-0.046c0-0.032-0.015-0.063-0.046-0.095
				c0-0.03,0-0.063,0-0.092v-0.048c0-0.032,0-0.063,0-0.094c-0.033-0.032-0.047-0.063-0.047-0.094c-0.03,0-0.048-0.016-0.048-0.048
				c0-0.032,0-0.063,0-0.094H22.21c0-0.031-0.016-0.047-0.047-0.047c0-0.031,0-0.062,0-0.094c0-0.03,0-0.063,0-0.094v-0.093
				c-0.031,0-0.063,0-0.094,0s-0.063,0-0.095,0s-0.061,0-0.093,0c-0.062,0-0.11,0-0.14,0c-0.031,0-0.079-0.016-0.141-0.048
				c-0.032-0.03-0.048-0.062-0.048-0.094c-0.063-0.032-0.109-0.047-0.142-0.047c-0.03,0-0.062-0.015-0.093-0.046
				c0-0.031,0-0.063,0-0.093c0-0.032,0-0.065,0-0.095V11.75c-1.691,0-3.411,0-5.165,0c-0.032,0-0.079-0.015-0.141-0.046v-0.048
				c-0.063,0-0.126,0-0.188,0l-0.046-0.047c-0.032-0.031-0.063-0.063-0.095-0.093l-0.047-0.046c0-0.031-0.015-0.048-0.046-0.048
				c-0.031-0.031-0.063-0.063-0.095-0.094v-0.045c0-0.031,0-0.062,0-0.095v-0.048c0-0.031,0-0.062,0-0.093c0-0.03,0-0.062,0-0.095
				v-0.046c0-0.032,0-0.062,0-0.094c0-0.031,0-0.063,0-0.095v-0.046c0-0.03,0-0.063,0-0.094c-0.75,0-1.487,0-2.207,0
				c-0.125-0.032-0.22-0.047-0.281-0.047c-0.095-0.032-0.157-0.048-0.188-0.048c-0.032,0.031-0.079,0.079-0.142,0.141
				c-0.063,0.062-0.142,0.094-0.234,0.094h-0.188c-0.032,0-0.078,0-0.141,0v0.095c-0.031,0.094-0.079,0.188-0.142,0.281
				l-6.526,5.071c-0.062,0.063-0.157,0.079-0.282,0.048c-0.031,0-0.063,0-0.094,0c-0.063,0-0.109,0.016-0.142,0.046
				c-0.062,0.031-0.126,0.062-0.188,0.093c0.032,0.063,0.032,0.141,0,0.234c-0.031,0.094-0.078,0.188-0.141,0.283l-0.187,0.14
				c-0.063,0.031-0.126,0.047-0.188,0.047c0,0.033-0.016,0.048-0.047,0.048H4.134c-0.033,0.03-0.064,0.062-0.095,0.093l-0.046,0.047
				c0,0.031-0.015,0.047-0.047,0.047c-0.063,0.032-0.11,0.063-0.142,0.094l-0.046,0.046c0,0.032-0.015,0.046-0.047,0.046
				c-0.03,0-0.063,0.016-0.093,0.048c-0.033,0-0.063,0-0.094,0c-0.032,0.032-0.063,0.063-0.094,0.093H3.382
				c-0.032,0.032-0.064,0.048-0.095,0.048H2.865c-0.063,0-0.126-0.016-0.189-0.048c-0.03,0-0.046-0.014-0.046-0.046
				c-0.031,0-0.063-0.015-0.093-0.046c-0.063,0-0.124,0-0.188,0c-0.032-0.032-0.095-0.062-0.188-0.094
				c0-0.032-0.015-0.063-0.046-0.093c-0.063-0.032-0.11-0.048-0.142-0.048c-0.03,0-0.046-0.017-0.046-0.047
				c-0.032-0.031-0.062-0.047-0.095-0.047C1.8,17.166,1.77,17.134,1.738,17.104c-0.031,0-0.047-0.016-0.047-0.048
				c0-0.03-0.016-0.062-0.047-0.093c-0.03-0.031-0.046-0.063-0.046-0.093c-0.033,0-0.047-0.015-0.047-0.048
				c-0.032-0.031-0.063-0.062-0.095-0.093v-0.094c0-0.032,0-0.063,0-0.095c0-0.029,0-0.062,0-0.092c0-0.032-0.015-0.048-0.047-0.048
				c0-0.031,0-0.063,0-0.093v-0.093l-0.046-0.048c0-0.032-0.016-0.063-0.047-0.094c0-0.032,0-0.062,0-0.093v-0.048
				c-0.032-0.031-0.046-0.062-0.046-0.094c0-0.031,0-0.062,0-0.093v-0.047c0-0.032,0-0.063,0-0.094
				c-0.032,0-0.062-0.017-0.095-0.047c0-0.031-0.017-0.047-0.047-0.047c0-0.031,0-0.063,0-0.094v-0.048c0-0.03,0-0.062,0-0.093
				v-0.047c-0.032-0.031-0.063-0.063-0.094-0.094c0-0.031,0-0.062,0-0.094c0-0.032,0-0.062,0-0.095c0-0.031,0-0.062,0-0.093v-0.046
				c0-0.032-0.016-0.062-0.046-0.095c0-0.031-0.016-0.062-0.047-0.093v-0.046c0-0.03,0-0.062,0-0.096v-0.046l-0.094-0.094
				c0-0.03,0-0.062,0-0.094c0-0.031,0-0.062,0-0.094v-0.046c0-0.031,0-0.062,0-0.094c0-0.031,0-0.062,0-0.095
				c-0.032-0.031-0.047-0.062-0.047-0.093c0-0.031-0.015-0.063-0.046-0.095v-0.045c0-0.031,0-0.063,0-0.093c0-0.032,0-0.064,0-0.096
				c-0.031-0.03-0.063-0.062-0.093-0.093v-0.047c0-0.033,0-0.064,0-0.095c0-0.03-0.017-0.046-0.049-0.046
				c0-0.032-0.015-0.062-0.046-0.095c0-0.03,0-0.062,0-0.093v-0.045c0-0.033,0-0.064,0-0.096c0-0.03,0-0.063,0-0.095v-0.045
				l-0.047-0.048c0-0.032-0.015-0.063-0.046-0.094v-0.093c0-0.032,0-0.063,0-0.096c0-0.03,0-0.062,0-0.093v-0.046L0.424,12.22
				c0-0.03-0.016-0.062-0.047-0.094v-0.047c0-0.031,0-0.062,0-0.093c0-0.03,0-0.062,0-0.093v-0.048c0-0.031,0-0.063,0-0.094
				s-0.015-0.062-0.047-0.094v-0.047c0-0.031,0-0.063,0-0.093c0-0.031-0.017-0.062-0.048-0.094l-0.046-0.047
				c0-0.031-0.016-0.062-0.046-0.092c0-0.031,0-0.062,0-0.095v-0.094c0-0.031,0-0.062,0-0.094c0-0.031,0-0.063,0-0.094v-0.047
				c0-0.031,0-0.062,0-0.093v-0.048c-0.031,0-0.047-0.015-0.047-0.046c0-0.03,0-0.063,0-0.094v-0.095c0-0.031,0-0.062,0-0.094
				c0-0.03,0-0.063,0-0.092v-0.049c-0.031-0.03-0.046-0.061-0.046-0.092C0.064,10.124,0.032,10.092,0,10.06V9.966
				c0-0.03,0-0.062,0-0.094V9.778c0-0.031,0-0.062,0-0.093c0-0.031,0-0.063,0-0.094V9.544C0,9.513,0,9.48,0,9.45V9.355
				c0-0.03,0-0.063,0-0.093C0,9.23,0,9.199,0,9.167V9.122c0-0.031,0-0.063,0-0.094c0-0.031,0-0.063,0-0.093V8.886
				c0-0.031,0-0.063,0-0.094s0-0.063,0-0.093V8.653C0,8.62,0,8.589,0,8.557c0-0.031,0-0.063,0-0.091V8.418
				c0.032-0.032,0.064-0.065,0.096-0.097l0.046-0.046c0-0.03,0-0.061,0-0.093l0.047-0.048c0-0.031,0-0.063,0-0.092
				c0.03-0.032,0.046-0.063,0.046-0.095c0.031,0,0.063,0,0.094,0c0-0.03,0-0.062,0-0.095c0.032-0.03,0.047-0.062,0.047-0.093
				c0.032,0,0.062,0,0.094,0c0-0.032,0-0.063,0-0.095c0.031-0.031,0.063-0.062,0.094-0.092c0-0.032,0.016-0.048,0.046-0.048h0.049
				c0.062-0.03,0.109-0.046,0.14-0.046c0.063-0.03,0.125-0.047,0.188-0.047V7.384c0.031,0,0.093,0,0.188,0l0.046,0.047V7.384
				c0.033,0,0.049-0.015,0.049-0.046c0.031,0,0.062,0,0.093,0L1.409,7.29c0.032,0,0.078,0,0.142,0c0.063,0,0.109,0,0.14,0
				c0.031,0.032,0.079,0.048,0.14,0.048c0.033,0,0.063,0.015,0.095,0.046C1.957,7.322,2.035,7.29,2.161,7.29h9.389
				c0.127,0,0.205,0.016,0.236,0.048c0.064-0.033,0.127-0.063,0.188-0.095c0.063-0.031,0.125-0.063,0.188-0.093
				c0.032-0.032,0.063-0.049,0.095-0.049c0.063-0.031,0.125-0.046,0.188-0.046c0.063,0,0.14,0,0.234,0c1.847,0,3.709,0,5.587,0
				V7.009c0.032-0.032,0.047-0.063,0.047-0.094V6.82c0.031-0.03,0.046-0.062,0.046-0.094c0-0.031,0-0.062,0-0.093
				c0.032-0.032,0.063-0.048,0.094-0.048h0.047c0-0.031,0-0.062,0-0.094c0-0.03,0-0.063,0-0.092V6.352
				c0.032-0.032,0.063-0.062,0.094-0.095V6.21c0.063-0.032,0.125-0.063,0.187-0.094c0.032,0,0.063,0,0.095,0
				c0.031-0.031,0.046-0.062,0.046-0.095l0.094-0.093c0.031,0,0.079,0,0.139,0c0.096,0,0.205,0,0.331,0c0.031,0,0.063,0,0.093,0
				c0.031,0,0.046,0.016,0.046,0.047l0.094-0.047V5.881c0-0.031,0-0.063,0-0.094c0-0.031,0-0.062,0-0.094c0.033,0,0.064,0,0.095,0
				c0-0.03,0-0.062,0-0.093c0-0.031,0-0.063,0-0.094V5.459c0.031-0.031,0.046-0.062,0.046-0.093c0-0.033-0.015-0.064-0.046-0.095
				V5.224c-0.031-0.03-0.063-0.046-0.095-0.046l-0.045-0.046c0-0.033-0.018-0.065-0.049-0.096V4.989c0-0.03,0-0.062,0-0.093
				c0-0.032,0-0.063,0-0.095V4.754c0-0.031,0-0.063,0-0.093c0-0.031,0-0.063,0-0.094c0.031-0.033,0.049-0.065,0.049-0.095
				c0.03-0.031,0.045-0.062,0.045-0.095V4.333c0.033-0.033,0.064-0.047,0.095-0.047c0.031,0,0.062,0,0.093,0h0.046V4.237
				c0.033-0.03,0.064-0.046,0.095-0.046c0-0.03,0.015-0.047,0.046-0.047s0.063-0.015,0.094-0.046c0.032,0,0.063,0,0.095,0
				c0.031,0,0.063,0,0.093,0s0.061-0.016,0.093-0.047c0.032,0,0.08-0.016,0.142-0.046c0.031-0.032,0.046-0.064,0.046-0.095V3.862
				c0-0.032,0-0.063,0-0.094c0.031-0.031,0.047-0.063,0.047-0.093c0.03-0.032,0.063-0.048,0.094-0.048
				c0-0.031,0.016-0.063,0.048-0.093c0-0.031,0.015-0.063,0.046-0.094c0.031,0,0.063-0.016,0.093-0.048c0.063,0,0.11,0,0.142,0
				V3.345c0.188,0,0.376,0,0.564,0c0.031,0.033,0.077,0.046,0.141,0.046c0.031,0.032,0.063,0.048,0.094,0.048
				c0,0.031,0.015,0.063,0.046,0.094c0.031,0.03,0.064,0.062,0.095,0.093c0.031,0,0.047,0.016,0.047,0.048
				c0.032,0.03,0.047,0.062,0.047,0.093c0.031,0.031,0.047,0.062,0.047,0.094c0.031,0,0.08,0,0.142,0c0.124,0,0.234,0,0.327,0
				c0.063,0,0.126,0.016,0.188,0.047c0.032,0.031,0.063,0.063,0.095,0.095c0.031,0.03,0.063,0.046,0.093,0.046
				c0,0.031,0.016,0.047,0.047,0.047c0,0.031,0,0.063,0,0.093c0,0.033,0,0.063,0,0.095h0.048c0,0.031,0.031,0.062,0.094,0.092
				c0.063,0,0.109,0.018,0.141,0.048c0.031,0,0.047,0.016,0.047,0.047c0.063,0,0.109,0,0.141,0c0.532,0,1.048,0,1.549,0
				c0.219,0,0.469,0,0.751,0c0.031-0.031,0.062-0.047,0.094-0.047s0.078,0,0.141,0V4.378h0.094c0.062,0.033,0.108,0.063,0.14,0.095
				V4.426h0.096V4.378c0.062,0.033,0.107,0.063,0.139,0.095c0.033,0.03,0.048,0.062,0.048,0.095c0.032,0,0.062,0,0.094,0
				c0,0.03,0.016,0.063,0.046,0.094c0.031,0.03,0.046,0.062,0.046,0.093v0.093c0.033-0.031,0.063-0.046,0.095-0.046
				c0.03,0,0.078,0,0.141,0c0.032,0,0.079,0.016,0.141,0.046c0.031,0.033,0.046,0.063,0.046,0.095v0.093c0,0.031,0,0.063,0,0.096
				v0.093c0,0.03,0,0.062,0,0.093c0,0.031,0,0.064,0,0.095l0.047,0.046c0,0.031,0.016,0.047,0.048,0.047c0,0.03,0,0.063,0,0.094
				c0,0.032,0,0.063,0,0.093c0.03,0,0.046,0.016,0.046,0.048v0.046l0.046,0.048c0,0.031,0,0.062,0,0.093v0.047
				c0,0.031,0,0.064,0,0.095v0.046h0.141c1.157,0,2.333-0.016,3.521-0.046V6.021l0.049-0.046c0-0.031,0.015-0.047,0.046-0.047
				s0.078,0,0.14,0c0.033,0,0.095-0.014,0.188-0.046c0-0.031,0-0.063,0-0.094c0.033-0.031,0.063-0.062,0.095-0.094h0.047
				c0.031-0.03,0.062-0.062,0.094-0.093c0.032-0.031,0.046-0.063,0.046-0.094l0.095-0.093c0-0.031,0.016-0.046,0.046-0.046
				c0.031,0,0.063,0,0.094,0V5.317c0.063,0,0.141,0,0.236,0c0.03,0.031,0.077,0.064,0.139,0.095l0.094,0.093c0,0.03,0,0.063,0,0.094
				c0.063-0.063,0.142-0.11,0.235-0.141c0.063,0,0.142-0.031,0.235-0.093c0.093,0,0.188,0,0.283,0V5.317
				c0.124,0.031,0.233,0.049,0.327,0.049c0.032,0.031,0.063,0.062,0.095,0.093c0.03-0.062,0.046-0.11,0.046-0.142
				c0.095-0.063,0.189-0.093,0.283-0.093h2.3c0.096,0,0.174,0.03,0.236,0.093c0.03,0.064,0.062,0.126,0.094,0.188
				c0.155,0,0.298-0.016,0.422-0.047c0.063,0,0.126,0,0.188,0c0.032,0,0.078-0.015,0.141-0.046c1.001,0,1.987,0,2.958,0
				c0.063,0.031,0.111,0.046,0.142,0.046c0.062,0,0.109,0,0.14,0c0.063,0.031,0.108,0.062,0.142,0.093
				c0.03,0.032,0.078,0.063,0.14,0.095l0.047,0.046c0.031,0,0.047-0.014,0.047-0.046c0.031-0.031,0.063-0.063,0.094-0.095
				c0-0.031,0.014-0.062,0.045-0.093h0.048c0.031,0,0.078,0,0.141,0V5.413c0.031,0.031,0.078,0.046,0.141,0.046
				c0.031,0.031,0.062,0.047,0.094,0.047c0,0.03,0.015,0.063,0.046,0.094c0,0.032,0,0.063,0,0.093v0.048h0.047
				c0.031,0,0.079-0.016,0.141-0.048c0.062,0,0.124,0,0.187,0c0.032,0.032,0.063,0.048,0.094,0.048v0.046
				c0.596-0.031,1.206-0.046,1.832-0.046V5.693c0.03-0.03,0.063-0.062,0.095-0.093c0.032-0.031,0.062-0.063,0.094-0.094
				c0.03,0,0.045-0.016,0.045-0.047c0.063,0,0.127-0.015,0.19-0.046c0.218,0,0.438-0.016,0.656-0.046
				c0.031-0.033,0.048-0.064,0.048-0.095c0.031-0.031,0.062-0.047,0.093-0.047c0.032-0.03,0.063-0.046,0.094-0.046
				c0.032,0,0.048-0.016,0.048-0.046c0.063-0.033,0.125-0.065,0.187-0.096c0.063,0,0.157,0,0.282,0h0.047
				c0.032,0,0.047-0.016,0.047-0.047l0.094-0.093c0.063-0.032,0.109-0.049,0.141-0.049c0.094-0.031,0.156-0.046,0.188-0.046
				c0.03,0,0.062,0,0.093,0h0.047l0.046-0.046h0.049c0.029-0.031,0.062-0.046,0.093-0.046c0.062,0,0.094-0.016,0.094-0.046h0.047
				c0.03,0,0.063,0,0.093,0V4.568c0-0.033,0-0.065,0-0.095c0-0.031,0-0.062,0-0.095c-0.031,0-0.063-0.015-0.093-0.045
				c0-0.033-0.016-0.047-0.047-0.047V4.237L43.011,2.97c-0.063-0.032-0.125-0.094-0.188-0.188c-0.03-0.063-0.046-0.125-0.046-0.186
				h-0.047c-0.032-0.032-0.063-0.048-0.095-0.048c-0.031,0-0.061-0.014-0.093-0.047h-0.095c-0.062,0-0.107,0-0.14,0
				c-0.125-0.031-0.219-0.063-0.281-0.093c-0.031,0-0.079,0-0.142,0h-0.047c-0.031,0-0.062-0.016-0.094-0.047
				c-0.062,0-0.108,0-0.141,0c-0.063-0.032-0.125-0.047-0.188-0.047c-0.03-0.032-0.063-0.048-0.093-0.048
				c-0.032-0.032-0.063-0.062-0.094-0.093c-0.031-0.031-0.063-0.063-0.095-0.094C41.101,2.047,41.07,2.03,41.04,2.03
				c-0.063,0-0.11-0.015-0.142-0.046c-0.063,0-0.11-0.015-0.14-0.046c-0.033-0.031-0.048-0.063-0.048-0.093
				c-0.031-0.033-0.063-0.049-0.094-0.049c-0.031-0.031-0.047-0.063-0.047-0.094l-0.046-0.047h-0.046V1.609l-0.048-0.048
				c-0.031-0.032-0.062-0.047-0.094-0.047c-0.032-0.031-0.063-0.062-0.094-0.092l-0.046-0.096c0-0.03,0-0.063,0-0.094
				c-0.031-0.031-0.048-0.062-0.048-0.093L40.1,1.092c0-0.031,0-0.063,0-0.094c0-0.031,0-0.062,0-0.093V0.857
				c0.031,0,0.046-0.015,0.046-0.046c0-0.032,0.017-0.062,0.048-0.094V0.669c0-0.031,0-0.063,0-0.094V0.528l0.046-0.046
				c0.031-0.032,0.062-0.063,0.094-0.094c0.032,0,0.063,0,0.094,0V0.341c0.032-0.095,0.095-0.171,0.188-0.236
				c0.063-0.094,0.157-0.124,0.282-0.094l0.282,0.094c0.125,0.031,0.219,0.096,0.282,0.188c0.062,0.095,0.078,0.189,0.046,0.283
				c0.031,0,0.063,0,0.094,0h0.094c0.032,0.031,0.078,0.046,0.14,0.046c0.032,0.032,0.063,0.048,0.095,0.048c0.063,0,0.109,0,0.14,0
				l0.048,0.047c0.03,0,0.062,0,0.093,0c0.063,0.032,0.11,0.046,0.141,0.046l0.046,0.048c0-0.062,0.032-0.109,0.094-0.142
				c0.064-0.063,0.157-0.094,0.283-0.094c0.062,0,0.125,0.015,0.188,0.046l4.883,1.316c0.093,0,0.17,0.046,0.234,0.141
				c0,0.031,0.016,0.063,0.048,0.094c0.031,0.032,0.063,0.047,0.093,0.047c0.032,0.03,0.079,0.046,0.141,0.046
				c0.062,0,0.109,0.017,0.141,0.048c0,0.031,0,0.063,0,0.094c0.031,0,0.063,0.015,0.094,0.046C48.63,2.484,48.661,2.5,48.692,2.5
				c0,0.033,0.015,0.063,0.047,0.095c0.031-0.032,0.063-0.048,0.094-0.048V2.5h0.047c0.063-0.031,0.125-0.047,0.188-0.047V2.407
				c0.063,0.031,0.109,0.062,0.14,0.093h0.049c0.032,0.033,0.062,0.063,0.093,0.095c0,0.03,0,0.062,0,0.092v0.047
				c0,0.032,0,0.063,0,0.095s0,0.063,0,0.094V2.97c0,0.032,0,0.063,0,0.093v0.049c0,0.03,0,0.061,0,0.093v0.047
				c0,0.031,0,0.063,0,0.093V3.44c0,0.031,0,0.063,0,0.094c0,0.03,0,0.062,0,0.093c0,0.032,0,0.063,0,0.095c0,0.031,0,0.062,0,0.093
				v0.047c0,0.03,0,0.063,0,0.095s0,0.062,0,0.093v0.047c0,0.031,0,0.063,0,0.093v0.142c0,0.031,0,0.063,0,0.093
				c0,0.031,0,0.063,0,0.093v0.049c0,0.03,0,0.063,0,0.094c0,0.03,0,0.062,0,0.093v0.093c0,0.033,0,0.063,0,0.095
				c0,0.031,0,0.063,0,0.093v0.047c0,0.034,0,0.064,0,0.095v0.14c0,0.031,0,0.064,0,0.095v0.046c0,0.031,0,0.062,0,0.093
				c0,0.032,0,0.063,0,0.095v0.046c0,0.032,0,0.063,0,0.094c0,0.031,0,0.063,0,0.094v0.046c-0.031,0-0.061,0.016-0.093,0.047
				c-0.032,0.031-0.049,0.064-0.049,0.095c-0.031,0.03-0.078,0.046-0.14,0.046c-0.031,0-0.063,0-0.094,0h-0.046L48.88,6.163
				c0,0.031-0.015,0.048-0.047,0.048c0,0.031-0.015,0.046-0.046,0.046h-0.094c-0.5,0-1.002,0-1.504,0
				c0,0.034-0.016,0.048-0.045,0.048v0.047l-0.047,0.047c0,0.03-0.017,0.046-0.047,0.046c-0.063,0-0.11,0-0.141,0
				c-0.064,0.032-0.141,0.063-0.234,0.094v0.094c0,0.031,0,0.063,0,0.093c0,0.032,0,0.064,0,0.094v0.094c2.285,0,4.602,0,6.949,0
				V6.868c0-0.033,0-0.063,0-0.095s0-0.063,0-0.094V6.539c0.032-0.031,0.047-0.062,0.047-0.094c0.029-0.031,0.046-0.063,0.046-0.093
				c0.031-0.032,0.062-0.047,0.093-0.047c0.032,0,0.08-0.015,0.141-0.048c0.031,0,0.078-0.015,0.142-0.046
				c0.031-0.032,0.046-0.063,0.046-0.094c0.031,0,0.064,0,0.094,0L54.28,6.07V6.021c0-0.03,0-0.063,0-0.093V5.881
				c0-0.031,0-0.063,0-0.094c0-0.031,0-0.062,0-0.094c0-0.03,0-0.062,0-0.093c0-0.031,0-0.063,0-0.094V5.459
				c0-0.031,0-0.062,0-0.093c0-0.033,0-0.064,0-0.095l-0.047-0.047c-0.03-0.03-0.063-0.046-0.094-0.046V5.131
				c0-0.033,0-0.065,0-0.096c0.031,0,0.048-0.016,0.048-0.047c0.031-0.03,0.046-0.062,0.046-0.093
				c0.032-0.032,0.063-0.063,0.095-0.095c0.03,0,0.045-0.016,0.045-0.046c0.031,0,0.063-0.016,0.095-0.046
				c0.031-0.032,0.077-0.046,0.14-0.046c0-0.031,0-0.063,0-0.094c0.031,0,0.063-0.018,0.095-0.049
				c0.031-0.031,0.047-0.063,0.047-0.093c0.03-0.03,0.047-0.063,0.047-0.093l0.047-0.047V4.237c0.031,0,0.063,0,0.094,0
				c0-0.03,0-0.061,0-0.093l0.046-0.046h0.046c0.033,0,0.063-0.016,0.096-0.047c0.187,0,0.389-0.016,0.609-0.046
				c0.032,0,0.047-0.016,0.047-0.047c0.032,0,0.064,0,0.094,0V3.909c0.063,0,0.125,0,0.188,0c0.063,0.031,0.11,0.063,0.141,0.095
				l0.047,0.046c0.031,0,0.045-0.016,0.045-0.046c0.064-0.032,0.111-0.047,0.143-0.047V3.909c0.062,0.031,0.125,0.063,0.188,0.095
				l0.047,0.046c0,0.031,0.016,0.047,0.046,0.047c0,0.031,0,0.063,0,0.093c0,0.033,0,0.063,0,0.095c0,0.031,0,0.062,0,0.092
				c0,0.033,0,0.063,0,0.095c0,0.03,0,0.062,0,0.095c0,0.03,0,0.063,0,0.094c0,0.03,0,0.062,0,0.093v0.046h0.047
				c0.03,0,0.047,0.016,0.047,0.046h0.047c0.063,0.033,0.125,0.063,0.188,0.095c0,0.031,0.017,0.046,0.047,0.046
				c0,0.031,0.016,0.047,0.046,0.047c0,0.031,0,0.063,0,0.096c0.031,0.031,0.062,0.046,0.095,0.046l0.046,0.046v0.047
				c0,0.031,0,0.063,0,0.095c0,0.031,0,0.062,0,0.093v0.047c0,0.03,0,0.063,0,0.094c0,0.032,0,0.063,0,0.093
				c0,0.032,0,0.063,0,0.094c0,0.031,0,0.063,0,0.094v0.046c0,0.031,0,0.063,0,0.093c0,0.033,0,0.064,0,0.095s0,0.063,0,0.094v0.046
				c0,0.034,0,0.063,0,0.095v0.187l0.095,0.046c0.03,0.032,0.061,0.048,0.095,0.048c0.062,0.031,0.108,0.063,0.14,0.093
				c0,0.032,0.015,0.064,0.046,0.094c0.031,0.031,0.063,0.048,0.094,0.048v0.046c0,0.031,0,0.063,0,0.094v0.046
				c7.387,0,14.775,0,22.162,0c0.125,0,0.236,0,0.329,0c0.094,0.032,0.187,0.063,0.282,0.095C80.59,7.212,80.668,7.259,80.762,7.29z
				 M58.317,15.037c0-0.031,0-0.062,0-0.095c0,0.033-0.017,0.064-0.046,0.095H58.317z M56.675,5.459c0,0.031,0,0.062,0,0.093
				c0,0.032,0,0.063,0,0.095v0.046c0.03,0.03,0.046,0.062,0.046,0.094V5.693c0-0.03,0-0.062,0-0.093c0-0.031,0-0.063,0-0.094V5.459
				H56.675z M54.703,6.539l-0.047,0.046h0.047V6.539z M54.515,6.726c0.063-0.031,0.093-0.062,0.093-0.093
				c-0.063,0.031-0.126,0.063-0.188,0.093v0.047C54.453,6.742,54.482,6.726,54.515,6.726z M47.377,4.378c0,0.033,0,0.063,0,0.095
				l0.047,0.046V4.473c0-0.031,0-0.062,0-0.095c0-0.031,0-0.062,0-0.092h-0.047V4.378z M44.842,6.021
				c-0.095,0.001-0.205,0.018-0.329,0.049c0.093,0,0.188,0,0.282,0C44.795,6.039,44.811,6.023,44.842,6.021z M56.44,14.991
				l-0.047-0.049v0.049H56.44z M22.022,11.609v-0.093h-0.048c0,0.03,0,0.062,0,0.093H22.022z M25.027,14.427
				c0.032,0.031,0.063,0.046,0.095,0.046v-0.046C25.085,14.427,25.053,14.427,25.027,14.427z M30.24,15.365
				c-0.032,0.063-0.063,0.111-0.094,0.142c0.032,0,0.077,0,0.14,0c0-0.031-0.016-0.063-0.046-0.094V15.365z M11.082,9.591H3.241
				c0,0.032,0,0.063,0,0.094c0.031,0.062,0.046,0.11,0.046,0.141c0,0.03,0,0.078,0,0.14c0,0.032,0.016,0.079,0.048,0.142
				c0,0.032,0,0.079,0,0.14c0.032,0.032,0.047,0.079,0.047,0.141c0.031,0.063,0.063,0.11,0.093,0.142
				c0,0.062,0.016,0.125,0.047,0.187v0.048c0,0.062,0,0.108,0,0.14c0,0.063,0,0.125,0,0.188c0.031,0.062,0.079,0.11,0.141,0.142
				c0,0.032,0.016,0.078,0.046,0.14v0.047c0.063,0,0.141,0,0.235,0c0.063,0.063,0.125,0.14,0.188,0.234l0.703,2.065l1.221-0.89
				c0.094-0.063,0.189-0.094,0.281-0.094c0.095,0.03,0.157,0.077,0.188,0.14c0.032-0.03,0.063-0.063,0.094-0.095l0.095-0.093
				c0.03-0.032,0.046-0.063,0.046-0.094l0.047-0.047c0.032,0,0.063-0.015,0.095-0.046c0.03-0.032,0.047-0.063,0.047-0.096
				c0.093-0.03,0.172-0.062,0.234-0.093l0.047-0.046c0.032,0,0.062-0.016,0.094-0.048c0.032-0.03,0.063-0.062,0.093-0.094
				c0.032-0.032,0.063-0.047,0.094-0.047c0.03-0.031,0.079-0.046,0.141-0.046c0-0.031,0.031-0.063,0.094-0.093
				c0.032-0.032,0.063-0.065,0.093-0.095c0.032-0.031,0.064-0.063,0.095-0.094c0.063-0.031,0.109-0.062,0.14-0.094H8.17
				c0.033,0,0.079-0.015,0.141-0.047c0-0.031,0.015-0.063,0.048-0.093c0.031,0,0.063-0.016,0.093-0.046
				c0.031-0.031,0.062-0.048,0.094-0.048c0-0.031,0.016-0.063,0.047-0.094c0.063-0.031,0.109-0.061,0.141-0.093l0.047-0.048
				c0.031-0.032,0.078-0.064,0.142-0.094C8.985,11.062,9.016,11.031,9.016,11c0.063-0.031,0.109-0.063,0.142-0.094h0.046
				c0.032-0.032,0.048-0.062,0.048-0.094c0.031-0.031,0.062-0.063,0.093-0.095c0.031,0,0.063,0,0.093,0
				c0.033-0.032,0.08-0.062,0.143-0.094c0.03-0.031,0.045-0.063,0.045-0.093c0.032-0.032,0.064-0.048,0.097-0.048
				c0-0.031,0.014-0.062,0.045-0.094c0.062,0,0.108-0.013,0.14-0.046C9.94,10.31,9.97,10.279,10,10.247
				c0.032,0,0.065-0.014,0.095-0.046c0.032-0.03,0.063-0.062,0.095-0.094c0.03-0.032,0.077-0.063,0.141-0.095
				c0.031,0,0.063-0.015,0.093-0.046c0.063-0.03,0.11-0.062,0.142-0.094c0.031-0.031,0.077-0.046,0.14-0.046h0.047
				C10.784,9.795,10.8,9.763,10.8,9.732c0.063-0.031,0.108-0.063,0.141-0.094C10.97,9.608,11.018,9.593,11.082,9.591z`,
            }),
          });
        }
        function E0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100.25 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M97.74,7.175c0,0.047,0.012,0.096,0.035,0.143
				c0,0.048,0,0.096,0,0.145c0,0.022,0,0.06,0,0.106c0,0.049,0,0.096,0,0.145v0.323c0.551,0,1.1,0,1.651,0
				c0.072,0,0.131,0.011,0.178,0.035c0.026,0,0.048,0.012,0.073,0.036h0.036V8.072c0.024,0,0.047,0,0.072,0
				c0.047,0.023,0.108,0.049,0.18,0.07c0.023,0.024,0.047,0.062,0.07,0.109c0.025,0,0.038,0.023,0.038,0.07
				c0.024,0.024,0.035,0.049,0.035,0.073v0.071c-0.024,0.048-0.035,0.083-0.035,0.107c-0.018,0.017-0.029,0.042-0.038,0.073
				c0.026,0,0.049,0,0.073,0c0,0.047,0,0.094,0,0.143c0,0.048,0,0.096,0,0.144s0,0.096,0,0.144c0,0.023,0,0.06,0,0.107
				c0,0.03,0,0.06,0,0.09c0.012,0.013,0.024,0.029,0.036,0.054c0.024,0.024,0.037,0.06,0.037,0.107l0.035,0.037
				c0,0.047,0,0.084,0,0.107s0,0.06,0,0.107v0.071c0,0.024-0.011,0.047-0.035,0.072c-0.023,0.022-0.048,0.047-0.072,0.07
				c0,0.037,0,0.072,0,0.109c0,0.046,0,0.095,0,0.143c0,0.024,0,0.06,0,0.107s0,0.097,0,0.145c0,0.047,0,0.096,0,0.143
				c0,0.048,0,0.095,0,0.144c0,0.024,0,0.048,0,0.072c-0.175,0-0.348,0-0.52,0l0.016,0.035c0,0.024,0.013,0.049,0.038,0.072
				c0.022,0.024,0.047,0.048,0.071,0.072c0,0.048,0,0.084,0,0.106l-0.019,0.018c-3.121-0.011-6.238-0.017-9.347-0.018
				c-0.047,0.025-0.083,0.049-0.107,0.073c-0.144,0.006-0.288,0.012-0.431,0.017c0,0.03,0,0.061,0,0.09h-0.034v-0.035
				c0-0.02,0-0.036,0-0.055c-0.396,0.022-0.792,0.046-1.185,0.072v0.018c-0.048,0-0.096,0-0.144,0c0,0.024,0,0.05,0,0.072
				c-0.175-0.006-0.347-0.013-0.521-0.019c-0.018,0.02-0.035,0.037-0.053,0.055c-0.024,0.047-0.036,0.095-0.036,0.143
				c-0.035,0.007-0.072,0.015-0.107,0.02c0,0.044,0,0.085,0,0.124c0,0.049,0,0.097,0,0.145c0,0.023,0,0.06,0,0.107s0,0.097,0,0.144
				v0.019c0.061,0.004,0.121,0.009,0.178,0.018c0,0.048,0,0.096,0,0.144s0,0.096,0,0.144c0,0.047,0,0.096,0,0.144
				c0,0.023,0,0.059,0,0.106c0,0.049,0,0.097,0,0.144c0,0.049,0,0.098,0,0.145c0,0.048,0,0.096,0,0.144c0,0.023,0,0.061,0,0.106
				c0,0.05,0,0.096,0,0.145s0,0.096,0,0.145c0,0.047,0,0.094,0,0.142c0,0.024,0,0.061,0,0.108s0,0.097,0,0.145s0,0.094,0,0.143
				c0,0.048,0,0.096,0,0.144c0,0.023,0,0.048,0,0.072c-0.118-0.003-0.238-0.003-0.358,0c0,0.033,0,0.068,0,0.107
				c0,0.023,0,0.048,0,0.072c-0.119,0-0.24,0-0.358,0c-0.204,0-0.407,0-0.61,0v0.035c0,0.023,0,0.049,0,0.072
				s-0.013,0.048-0.037,0.071c-0.023,0.025-0.036,0.061-0.036,0.108c-0.023,0.024-0.047,0.035-0.07,0.035
				c-0.025,0-0.049,0.013-0.074,0.037c-0.023,0.022-0.047,0.035-0.07,0.035l-0.036,0.035c-0.048,0.024-0.096,0.035-0.145,0.035
				c-0.072,0-0.143,0-0.215,0c-0.048,0-0.095,0-0.143,0v0.036c-0.24,0.049-0.479,0.098-0.718,0.145c0,0.023,0,0.048,0,0.071
				c-0.215,0.024-0.418,0.061-0.61,0.108c-0.048,0.023-0.084,0.048-0.108,0.07c-0.622,0.024-1.244,0.062-1.865,0.108
				c-0.048,0.023-0.085,0.049-0.108,0.072c-0.492-0.013-0.981-0.026-1.472-0.035c-0.024,0.023-0.048,0.047-0.072,0.071h-0.037
				c-0.047,0.025-0.108,0.036-0.179,0.036c-3.366,0-6.732,0-10.101,0c-0.111,0.011-0.225,0.022-0.341,0.036c0,0.023,0,0.047,0,0.07
				c-0.526,0.024-1.065,0.061-1.616,0.108c0,0.023,0,0.048,0,0.071c-0.573,0.023-1.136,0.06-1.686,0.107
				c-0.047,0.024-0.083,0.048-0.107,0.073c-0.455,0.023-0.898,0.059-1.328,0.106c-0.048,0.024-0.084,0.048-0.108,0.072
				c-0.406,0.023-0.825,0.06-1.255,0.108c0,0.023,0,0.047,0,0.071c-0.479,0.023-0.958,0.06-1.437,0.107c0,0.023,0,0.048,0,0.071
				c-0.454,0.024-0.897,0.06-1.328,0.107c-0.047,0.023-0.083,0.049-0.107,0.072c-0.575,0.024-1.137,0.061-1.687,0.106
				c-0.047,0.024-0.084,0.049-0.108,0.072c-0.741-0.023-1.471-0.035-2.189-0.035c-0.023-0.024-0.059-0.06-0.107-0.107
				c-0.383-0.024-0.765-0.048-1.148-0.072c-0.024-0.024-0.06-0.061-0.107-0.108c-0.12-0.023-0.25-0.047-0.395-0.071
				c0-0.024,0-0.06,0-0.108c-0.12-0.021-0.239-0.046-0.359-0.069c0-0.024,0-0.062,0-0.109c-0.048-0.022-0.107-0.047-0.178-0.071
				c0-0.023,0-0.06,0-0.107c-0.12-0.023-0.24-0.048-0.359-0.072c0-0.023,0-0.06,0-0.107c-0.048-0.024-0.108-0.048-0.18-0.072
				c-0.024-0.048-0.037-0.096-0.037-0.144c-0.023-0.047-0.059-0.094-0.105-0.143c-0.048-0.048-0.085-0.085-0.109-0.108
				c-0.094-0.047-0.192-0.096-0.287-0.144c-0.023-0.048-0.036-0.095-0.036-0.144c-0.025-0.048-0.061-0.095-0.108-0.145
				c-2.52,0.021-5.042,0.045-7.572,0.073c0,0.023,0,0.048,0,0.071c-0.79-0.023-1.58-0.036-2.368-0.036
				c-0.024-0.023-0.061-0.059-0.108-0.108c-0.12-0.022-0.251-0.047-0.395-0.071c0-0.027,0-0.058,0-0.088
				c-0.021,0.011-0.044,0.017-0.072,0.017c0,0.024-0.011,0.035-0.035,0.035l-0.107,0.107c-0.024,0.026-0.048,0.037-0.073,0.037
				c0,0.024-0.012,0.036-0.036,0.036c0,0.023-0.012,0.035-0.036,0.035l-0.035,0.036c-0.025,0-0.05,0.013-0.073,0.036h-0.035
				c-0.048,0.024-0.083,0.037-0.108,0.037l-0.035,0.035h-0.036v0.035l-0.072,0.035l-0.036,0.036h-0.019
				c-0.016,0.005-0.034,0.017-0.052,0.037h-0.038c-0.048,0.023-0.083,0.035-0.107,0.035c0,0.023-0.011,0.037-0.036,0.037
				c-0.023,0-0.036,0.012-0.036,0.035c-0.023,0-0.036,0.012-0.036,0.036c-0.024,0-0.036,0.012-0.036,0.036
				c-0.023,0-0.037,0.013-0.037,0.036c-0.023,0-0.047,0.011-0.07,0.036c-0.024,0-0.036,0.011-0.036,0.034
				c-0.025,0-0.048,0.012-0.072,0.036H41.83c0,0.024-0.012,0.036-0.035,0.036c-0.023,0.023-0.047,0.036-0.071,0.036
				c0,0.023-0.012,0.035-0.037,0.035v0.036c-0.121,0.023-0.24,0.036-0.359,0.036l-0.036,0.035c-0.025,0.024-0.049,0.036-0.073,0.036
				l-0.071,0.073v0.035l-0.036,0.035v0.036c-0.048,0.024-0.084,0.036-0.107,0.036l-0.036,0.036v0.035h-0.035
				c-0.024,0.024-0.048,0.036-0.072,0.036l-0.108,0.108v0.07c-0.048,0.025-0.083,0.037-0.108,0.037l-0.072,0.071v0.072
				c-0.048,0.022-0.084,0.035-0.108,0.035c-0.023,0.023-0.047,0.036-0.072,0.036v0.072c-0.046,0-0.083,0-0.108,0v0.036
				c-0.023,0.023-0.047,0.034-0.071,0.034c0,0.024-0.011,0.037-0.035,0.037s-0.035,0.012-0.035,0.035L40.107,16.9v0.07
				c-0.067,0-0.139,0-0.213,0c0,0.024-0.013,0.037-0.037,0.037v0.07c-0.024,0-0.06,0-0.107,0c-0.024,0.025-0.048,0.038-0.072,0.038
				c-0.071,0.023-0.155,0.035-0.25,0.035c-0.073,0.023-0.155,0.035-0.252,0.035v0.072c-0.071,0-0.143,0-0.215,0
				c-0.047,0.023-0.095,0.036-0.143,0.036c-0.288,0.023-0.574,0.035-0.861,0.035c-0.286,0-0.562,0-0.826,0
				c-0.047,0-0.097-0.012-0.145-0.035c-0.047,0-0.083-0.013-0.106-0.036c-0.025,0-0.048-0.012-0.073-0.036v-0.036
				c-0.045-0.022-0.093-0.035-0.143-0.035c0.024,0,0.036,0.013,0.036,0.035v0.287c0.012,0.013,0.024,0.024,0.037,0.036l0.036,0.036
				v0.036c0,0.048,0,0.083,0,0.107c-0.013,0.012-0.024,0.024-0.036,0.036c-0.013-0.012-0.024-0.024-0.037-0.036
				c-0.191,0-0.394,0-0.611,0c-0.024,0-0.06-0.012-0.108-0.036l-0.07-0.071v-0.072c-0.048-0.023-0.085-0.036-0.108-0.036v-0.036
				l-0.035-0.035v-0.036c-0.025,0-0.037-0.012-0.037-0.036l-0.036-0.035c-0.024,0-0.049-0.013-0.072-0.036
				c0-0.025-0.011-0.036-0.036-0.036v-0.071l-0.036-0.035v-0.038l-0.216-0.215v-0.035c-0.024,0-0.035-0.013-0.035-0.037l-0.073-0.07
				v-0.036c0-0.023-0.012-0.036-0.036-0.036v-0.071c-0.023-0.023-0.047-0.037-0.07-0.037l-0.036-0.035
				c0-0.023-0.012-0.036-0.037-0.036v-0.035c-0.022,0-0.035-0.012-0.035-0.037V16.36l-0.036-0.034v-0.035
				c-0.024,0-0.035-0.013-0.035-0.036l-0.038-0.037v-0.036h-0.036v-0.035c0-0.024-0.012-0.036-0.036-0.036
				c0-0.023-0.012-0.036-0.036-0.036l-0.072-0.071v-0.035c0-0.025-0.013-0.037-0.036-0.037v-0.036l-0.036-0.036v-0.215h-0.036
				c0-0.024-0.011-0.036-0.036-0.036v-0.034l-0.036-0.036V15.5H34.51c-0.061-0.005-0.12-0.017-0.179-0.036c-0.432,0-0.85,0-1.257,0
				c-0.233,0.018-0.46,0.029-0.683,0.036v0.036c-0.047,0-0.094,0-0.143,0c-0.072,0.023-0.143,0.047-0.215,0.07
				c-0.263,0.024-0.539,0.048-0.826,0.072c-0.024,0-0.06,0.012-0.108,0.036c-0.048,0-0.083,0.012-0.107,0.035
				c-0.072,0-0.119,0.013-0.144,0.036c-0.024,0-0.048,0.012-0.071,0.036c-0.073,0-0.121,0.013-0.144,0.035
				c-0.048,0.024-0.084,0.036-0.108,0.036c-0.047,0.024-0.096,0.036-0.143,0.036c-0.071,0.024-0.12,0.049-0.143,0.072
				c-0.073,0.023-0.144,0.048-0.216,0.071c0,0.024-0.023,0.048-0.071,0.072c-0.048,0-0.084,0.013-0.108,0.035
				c-0.047,0.024-0.083,0.048-0.107,0.073c-0.048,0.023-0.096,0.036-0.143,0.036v0.035c-0.014,0.008-0.032,0.013-0.054,0.019
				c-0.002,0.018-0.01,0.035-0.018,0.052c-0.024,0.025-0.048,0.048-0.072,0.072l-0.036,0.036h-0.037v0.035
				c-0.047,0.048-0.095,0.096-0.142,0.145c-0.049,0.048-0.096,0.096-0.144,0.144c-0.072,0.048-0.144,0.097-0.216,0.143
				c0,0.024,0,0.062,0,0.107c0,0.049,0,0.085,0,0.108v0.036c-0.047,0.024-0.106,0.06-0.18,0.107c0,0.024,0,0.048,0,0.072
				c-0.047,0.023-0.107,0.06-0.18,0.107c0,0.024,0,0.06,0,0.108c0,0.047,0,0.083,0,0.107v0.035
				c-0.047,0.024-0.106,0.061-0.179,0.108c0,0.023,0,0.06,0,0.107c0,0.049,0,0.084,0,0.107v0.035
				c-0.046,0.024-0.107,0.061-0.18,0.108c0,0.024,0,0.06,0,0.107s0,0.096,0,0.145c0,0.047,0,0.096,0,0.144s0,0.095,0,0.143
				c0,0.024,0,0.061,0,0.107c0,0.048,0,0.096,0,0.144s0,0.096,0,0.145c0,0.047,0,0.096,0,0.143c0,0.024,0,0.061,0,0.108
				s0,0.096,0,0.142c0,0.05,0,0.098,0,0.145c0,0.048,0,0.097,0,0.144c-0.023,0.023-0.035,0.061-0.035,0.108
				c-0.023,0.048-0.06,0.084-0.108,0.107l-0.035,0.036c-0.06-0.002-0.12-0.002-0.18,0c-0.024,0.023-0.037,0.049-0.037,0.071
				c-0.024,0.049-0.047,0.085-0.072,0.108l-0.071,0.035c-0.049,0-0.108,0.013-0.179,0.036h-0.073
				c-0.071-0.023-0.144-0.036-0.215-0.036c-0.022-0.048-0.047-0.084-0.071-0.106c-0.024-0.024-0.036-0.06-0.036-0.108v-0.017
				c-0.167-0.008-0.334-0.013-0.502-0.02v0.036c-0.049,0.023-0.108,0.061-0.18,0.108c0,0.022,0,0.048,0,0.071
				c-0.06,0.012-0.119,0.028-0.179,0.053c0,0.026,0,0.058,0,0.091c0,0.049,0,0.096,0,0.144c0,0.023,0,0.047,0,0.071
				c-0.048,0.024-0.108,0.06-0.18,0.107c0,0.023,0,0.048,0,0.071c-0.28-0.008-0.563-0.014-0.843-0.017
				c-0.389-0.012-0.777-0.017-1.166-0.019c0,0.024,0,0.047,0,0.071c0.022,0.023,0.048,0.048,0.071,0.072
				c0.024,0.024,0.06,0.061,0.107,0.107c0.024,0.024,0.035,0.048,0.035,0.071v0.038l0.037,0.034c0,0.049,0,0.084,0,0.107
				c-0.024,0.025-0.037,0.049-0.037,0.073c-0.023,0.022-0.035,0.059-0.035,0.106c-0.023,0.024-0.047,0.035-0.072,0.035
				c-0.024,0-0.048,0-0.072,0c-0.024,0.024-0.06,0.037-0.108,0.037c-0.072,0-0.12,0-0.143,0c-0.073-0.024-0.144-0.037-0.215-0.037
				c-0.025-0.023-0.06-0.047-0.108-0.07c-0.024-0.049-0.048-0.084-0.072-0.107c-0.024,0-0.048-0.025-0.072-0.072
				c0-0.023,0-0.061,0-0.106v-0.038c0-0.047,0-0.083,0-0.106c0-0.048,0-0.084,0-0.107c-0.023,0-0.048-0.025-0.071-0.073
				c0-0.023-0.013-0.048-0.036-0.071c0-0.024,0-0.048,0-0.071c-0.047-0.048-0.084-0.084-0.108-0.107
				c-0.048-0.024-0.071-0.048-0.071-0.072c0-0.022-0.012-0.048-0.036-0.071c-0.025-0.048-0.049-0.084-0.072-0.108
				c-0.024-0.023-0.048-0.048-0.072-0.071c-0.023-0.023-0.035-0.06-0.035-0.108c-0.024-0.023-0.037-0.047-0.037-0.071v-0.036
				c-0.071-0.023-0.144-0.048-0.215-0.071c-0.025-0.048-0.048-0.072-0.072-0.072c-0.023-0.023-0.047-0.059-0.071-0.106
				c-0.072-0.025-0.132-0.049-0.179-0.073c-0.073,0-0.145,0-0.215,0c-0.049,0-0.108,0.012-0.18,0.036
				c-0.048-0.024-0.107-0.036-0.179-0.036c-0.024-0.023-0.047-0.047-0.072-0.07c-0.023-0.049-0.047-0.085-0.072-0.108
				c0-0.024,0-0.049,0-0.072c0-0.022,0-0.047,0-0.071v-0.072c0-0.047,0-0.083,0-0.107c0-0.018,0-0.042,0-0.071
				c-0.096,0.023-0.18,0.059-0.251,0.107c-0.096,0.048-0.191,0.096-0.287,0.144c0,0.049,0,0.095,0,0.144
				c-0.096,0.048-0.18,0.097-0.251,0.145c-0.096,0.022-0.192,0.046-0.289,0.07c-0.118,0.023-0.237,0.061-0.357,0.107
				c-0.048,0.023-0.107,0.048-0.18,0.072c-0.095,0.023-0.179,0.06-0.25,0.107c-0.047,0.024-0.084,0.048-0.107,0.072
				c-0.119,0.023-0.24,0.061-0.359,0.108c0,0.022,0,0.048,0,0.071c-0.119,0.023-0.24,0.06-0.359,0.107c0,0.022,0,0.048,0,0.071
				c-0.12,0.025-0.239,0.061-0.358,0.108c0,0.023,0,0.047,0,0.071c-0.144,0.024-0.287,0.06-0.432,0.107
				c-0.047,0.023-0.083,0.048-0.107,0.071c-0.048,0.024-0.106,0.06-0.18,0.108c0,0.024,0,0.049,0,0.072
				c-0.143,0.023-0.286,0.06-0.43,0.106c-0.047,0.024-0.083,0.049-0.108,0.072c-0.119,0.024-0.239,0.06-0.357,0.107
				c0,0.025,0,0.049,0,0.073c-0.121,0.022-0.239,0.059-0.359,0.106c0,0.024,0,0.048,0,0.072c-0.144,0.022-0.288,0.06-0.43,0.107
				c-0.048,0.023-0.084,0.048-0.109,0.071c-0.118,0.024-0.239,0.061-0.357,0.109c0,0.022,0,0.046,0,0.07
				c-0.048,0.024-0.109,0.06-0.181,0.108v0.071c-0.094,0.024-0.179,0.06-0.251,0.107c-0.046,0.024-0.084,0.048-0.108,0.072
				c-0.119,0.023-0.239,0.061-0.358,0.107c0,0.023,0,0.047,0,0.071c-0.121,0.023-0.239,0.061-0.359,0.107c0,0.023,0,0.049,0,0.072
				c-0.096,0.023-0.179,0.061-0.252,0.107c-0.048,0.024-0.083,0.049-0.106,0.072c-0.097,0.023-0.18,0.06-0.253,0.107
				c-0.047,0.024-0.083,0.049-0.107,0.072c-0.095,0.024-0.179,0.06-0.251,0.107c-0.047,0.023-0.084,0.048-0.108,0.072
				c-0.048,0.022-0.107,0.06-0.179,0.107c0,0.023,0,0.047,0,0.07c-0.12,0.024-0.238,0.061-0.358,0.109c0,0.024,0,0.048,0,0.07
				c-0.12,0.025-0.239,0.061-0.36,0.109c0,0.023,0,0.047,0,0.071c-0.119,0.022-0.24,0.06-0.357,0.107c0,0.023,0,0.048,0,0.071
				c-0.168,0.023-0.348,0.06-0.539,0.107c0,0.024,0,0.048,0,0.072c-0.096,0.023-0.18,0.061-0.252,0.107
				c-0.048,0.023-0.083,0.049-0.106,0.072c-0.12,0.024-0.24,0.06-0.359,0.107c0,0.023,0,0.048,0,0.072
				c-0.12,0.023-0.24,0.061-0.36,0.107c0,0.023,0,0.047,0,0.071c-0.119,0.024-0.239,0.061-0.358,0.107c0,0.023,0,0.049,0,0.071
				c-0.168,0.025-0.347,0.061-0.538,0.108c0,0.023,0,0.048,0,0.072c-0.12,0.023-0.241,0.06-0.359,0.106c0,0.025,0,0.049,0,0.073
				c-0.12,0.023-0.239,0.06-0.36,0.107c0,0.023,0,0.048,0,0.071c-0.119,0.023-0.238,0.06-0.358,0.108c0,0.023,0,0.047,0,0.071
				c-0.12,0.022-0.239,0.06-0.359,0.108c0,0.023,0,0.047,0,0.071c-0.095,0.023-0.18,0.059-0.251,0.107
				c-0.047,0.023-0.084,0.048-0.107,0.071c-0.12,0.024-0.241,0.061-0.36,0.109c0,0.022,0,0.047,0,0.07
				c-0.119,0.024-0.239,0.061-0.358,0.108c0,0.023,0,0.047,0,0.071c-0.167,0.023-0.347,0.061-0.539,0.107c0,0.023,0,0.048,0,0.072
				c-0.144,0.022-0.287,0.06-0.43,0.106c-0.048,0.024-0.085,0.049-0.108,0.072c-0.144,0.023-0.287,0.061-0.43,0.106
				c-0.048,0.024-0.085,0.05-0.108,0.073c-0.119,0.023-0.24,0.061-0.358,0.107c0,0.023,0,0.049,0,0.072
				c-0.097-0.003-0.192-0.003-0.288,0c0,0.024,0,0.06,0,0.107c0,0.023,0,0.06,0,0.107v0.035c-0.024,0.049-0.048,0.084-0.072,0.108
				l-0.036,0.036c-0.023,0-0.037,0.012-0.037,0.035c-0.023,0-0.059,0.012-0.106,0.036c-0.048,0-0.084,0-0.107,0
				c-0.048-0.024-0.096-0.048-0.144-0.071H4.188c-0.023,0-0.061,0-0.108,0c-0.047,0.023-0.095,0.047-0.143,0.071
				c-0.047,0-0.095,0-0.144,0c-0.046-0.024-0.107-0.048-0.179-0.071c-0.024,0-0.047-0.023-0.07-0.072v-0.035
				c-0.025-0.025-0.049-0.049-0.073-0.072c0,0.023,0,0.047,0,0.072v0.035c-0.024,0.024-0.047,0.049-0.072,0.072l-0.036,0.071
				c0,0.024-0.012,0.061-0.036,0.107c-0.049,0.023-0.096,0.037-0.144,0.037c-0.048,0.022-0.107,0.048-0.179,0.07
				c-0.095,0-0.204,0-0.323,0c-0.072-0.022-0.13-0.048-0.18-0.07c-0.024,0-0.048,0-0.072,0c-0.047-0.025-0.096-0.049-0.144-0.073
				c-0.024-0.023-0.048-0.047-0.07-0.071c-0.049-0.024-0.109-0.048-0.18-0.071c-0.048,0-0.072-0.013-0.072-0.036
				c-0.095-0.024-0.167-0.049-0.215-0.071C1.7,27.173,1.651,27.15,1.604,27.126c-0.024-0.023-0.049-0.048-0.072-0.071
				c-0.048-0.049-0.084-0.084-0.108-0.107C1.4,26.923,1.389,26.9,1.389,26.876c0-0.026-0.013-0.061-0.037-0.108
				c0-0.023-0.012-0.048-0.035-0.072c0-0.025-0.013-0.048-0.037-0.071c0-0.024-0.012-0.06-0.035-0.107v-0.072
				c0-0.023,0-0.049,0-0.071v-0.072c0-0.023,0-0.059,0-0.107c0-0.024,0-0.048,0-0.071c0-0.024,0-0.048,0-0.072
				c0-0.048,0-0.084,0-0.106c0-0.025,0-0.049,0-0.074c0-0.023,0-0.059,0-0.106c0-0.023-0.011-0.049-0.035-0.072
				c-0.025-0.024-0.037-0.048-0.037-0.071c-0.023-0.047-0.036-0.084-0.036-0.109v-0.07c0-0.023,0-0.048,0-0.071v-0.072
				c0-0.048,0-0.083,0-0.107c0-0.023,0-0.048,0-0.071c0-0.024,0-0.061,0-0.108c0-0.022,0-0.048,0-0.071
				c-0.024-0.024-0.036-0.049-0.036-0.072c-0.023-0.024-0.047-0.06-0.071-0.108c0-0.022-0.012-0.048-0.037-0.071
				c0-0.025,0-0.047,0-0.07c0-0.049,0-0.085,0-0.108v-0.072c0-0.023,0-0.06,0-0.107v-0.036c0-0.047,0-0.084,0-0.108v-0.07
				c0-0.024,0-0.06,0-0.107c0-0.025,0-0.049,0-0.072c0-0.024,0-0.049,0-0.072c0-0.048,0-0.083,0-0.107
				c0-0.023-0.012-0.049-0.036-0.071c0-0.024,0-0.048,0-0.071c0-0.049-0.011-0.084-0.036-0.109c0-0.022,0-0.046,0-0.07
				s0-0.061,0-0.109c0-0.023,0-0.047,0-0.07c0-0.025,0-0.048,0-0.072v-0.071c0-0.025,0-0.06,0-0.107c0-0.024,0-0.06,0-0.108v-0.035
				c0-0.049,0-0.084,0-0.108c0-0.023,0-0.048,0-0.071c0-0.024,0-0.06,0-0.107c0-0.025,0-0.048,0-0.072c0-0.023,0-0.049,0-0.072
				c0-0.048,0-0.084,0-0.107v-0.071c0-0.024-0.012-0.048-0.036-0.072c0-0.048-0.011-0.071-0.036-0.071
				c-0.024-0.049-0.049-0.085-0.073-0.107c0-0.024,0-0.06,0-0.108v-0.07c0-0.024,0-0.049,0-0.073c0-0.023,0-0.048,0-0.072
				c0-0.023,0-0.059,0-0.107c0-0.023,0-0.048,0-0.072c0-0.023,0-0.047,0-0.07c0-0.049,0-0.084,0-0.107v-0.072
				c0-0.023,0-0.061,0-0.106v-0.038c0-0.047,0-0.083,0-0.106c0-0.048,0-0.084,0-0.107V20.81c0-0.023,0-0.048,0-0.071
				c0-0.024,0-0.048,0-0.071c0-0.048,0-0.084,0-0.107c0-0.024,0-0.048,0-0.072c0-0.022,0-0.048,0-0.071c0-0.048,0-0.084,0-0.108
				c-0.023-0.023-0.047-0.048-0.071-0.071c0-0.023-0.012-0.06-0.035-0.108c0-0.023,0-0.047,0-0.071c0-0.023,0-0.047,0-0.071
				c0-0.049,0-0.084,0-0.108v-0.071c0-0.024,0-0.061,0-0.108v-0.034c0-0.048,0-0.085,0-0.11c0-0.023,0-0.046,0-0.07
				c0-0.023,0-0.059,0-0.107c0-0.023,0-0.048,0-0.072c0-0.023,0-0.047,0-0.071c0-0.049,0-0.084,0-0.107c0-0.025,0-0.047,0-0.072
				c0-0.023,0-0.048,0-0.071v-0.072c0-0.049,0-0.083,0-0.107c-0.024-0.024-0.048-0.06-0.072-0.107c-0.024,0-0.035-0.012-0.035-0.035
				c0-0.049,0-0.084,0-0.108v-0.071c0-0.023,0-0.061,0-0.108c0-0.023,0-0.048,0-0.072c0-0.023,0-0.047,0-0.071
				c0-0.048,0-0.084,0-0.108c0-0.022,0-0.047,0-0.07s0-0.06,0-0.108v-0.036c0-0.048,0-0.083,0-0.107c0-0.023,0-0.06,0-0.107v-0.071
				c-0.024-0.024-0.049-0.049-0.072-0.072l-0.036-0.072c0-0.048,0-0.084,0-0.107c0-0.024,0-0.048,0-0.071s0-0.048,0-0.072
				c0-0.048,0-0.083,0-0.106c0-0.024,0-0.049,0-0.073c0-0.023,0-0.06,0-0.106V16.9c0-0.049,0-0.085,0-0.109c0-0.046,0-0.082,0-0.106
				v-0.072c0-0.024,0-0.059,0-0.107v-0.036c-0.023-0.047-0.047-0.083-0.071-0.108c0-0.021-0.011-0.046-0.038-0.069
				c0-0.024,0-0.062,0-0.109c0-0.022,0-0.047,0-0.071c0-0.023,0-0.048,0-0.072c0-0.047,0-0.083,0-0.107c0-0.023,0-0.048,0-0.072
				c0-0.022,0-0.048,0-0.071c0-0.048,0-0.084,0-0.107c0-0.024,0-0.048,0-0.072c0-0.023-0.012-0.06-0.035-0.106
				c-0.024,0-0.047-0.011-0.072-0.036c0-0.048-0.011-0.085-0.036-0.108v-0.072c0-0.023,0-0.059,0-0.106c0-0.023,0-0.06,0-0.108
				v-0.036c0-0.047,0-0.082,0-0.108c0-0.022,0-0.047,0-0.071c0-0.023,0-0.059,0-0.106c0-0.024,0-0.049,0-0.072
				c0.025-0.023,0.036-0.046,0.036-0.07c0.024-0.024,0.048-0.062,0.072-0.109c0.023,0,0.048-0.012,0.073-0.035l0.036-0.035h0.035
				c0-0.025,0-0.049,0-0.072V14.28c0-0.048,0-0.083,0-0.107s0.012-0.061,0.036-0.108c0.023,0,0.048-0.012,0.072-0.036
				c0.023-0.047,0.059-0.083,0.107-0.107c0.023-0.024,0.047-0.047,0.072-0.071c0.023-0.023,0.048-0.059,0.072-0.107
				c0.024-0.024,0.048-0.048,0.071-0.072c0.047,0,0.072-0.012,0.072-0.035c0.072-0.024,0.131-0.049,0.18-0.073
				c0.024-0.024,0.048-0.048,0.073-0.071c0.048,0,0.094,0,0.142,0c0.072-0.023,0.144-0.048,0.215-0.07
				c0.097-0.024,0.168-0.061,0.215-0.108c0.024,0,0.061-0.012,0.108-0.036c0.048,0,0.084,0,0.109,0c0.094,0,0.179,0,0.25,0
				c0.048,0,0.097,0.012,0.144,0.036c0.047,0,0.083,0.013,0.107,0.036c0.024,0,0.049,0,0.073,0c0.047,0.023,0.106,0.048,0.179,0.072
				c0.023,0.047,0.047,0.07,0.072,0.07c0.024,0.023,0.047,0.06,0.07,0.109c0.039,0,0.075,0,0.109,0
				c0.144-0.025,0.287-0.05,0.43-0.073c0.023-0.022,0.036-0.048,0.036-0.071h0.036c0.024,0,0.048,0,0.072,0c0.358,0,0.717,0,1.075,0
				l0.018,0.018c0.49,0.012,0.976,0.018,1.454,0.018c0.034,0.035,0.058,0.06,0.071,0.071l0.018,0.019
				c0.143,0.007,0.279,0.012,0.413,0.02c0.192,0.022,0.371,0.035,0.539,0.035c0.024,0.023,0.047,0.048,0.071,0.071
				c0.239,0,0.478,0,0.718,0c0.023-0.023,0.047-0.048,0.072-0.071h0.035c0.622,0,1.245-0.013,1.867-0.035c0.047,0,0.083,0,0.107,0
				c0.048-0.025,0.083-0.038,0.107-0.038c0.059-0.005,0.119-0.012,0.18-0.018V13.13c0.143,0,0.274,0,0.394,0
				c0.023,0,0.048,0,0.071,0c0.073-0.023,0.145-0.035,0.217-0.035c0-0.023,0.011-0.035,0.036-0.035v-0.036c0.072,0,0.156,0,0.25,0
				h0.035c0.025,0,0.037-0.012,0.037-0.035c0.144,0,0.287,0,0.432,0h0.035c0.024,0,0.036-0.013,0.036-0.037c0.071,0,0.144,0,0.214,0
				c0.024,0,0.048,0,0.072,0c0.025,0,0.049,0,0.072,0c0.12-0.023,0.251-0.035,0.395-0.035c0.024-0.023,0.049-0.036,0.072-0.036
				c0.023,0,0.047-0.013,0.072-0.036c0.071,0,0.142,0,0.214,0c0.024,0,0.048,0,0.072,0s0.048-0.011,0.071-0.036h0.036
				c0.024,0,0.048,0,0.072,0c0.023,0,0.046-0.012,0.071-0.036c0.12,0,0.252,0,0.396,0c0.143-0.023,0.288-0.036,0.43-0.036
				c0.023-0.022,0.048-0.035,0.072-0.035c0.022,0,0.035-0.012,0.035-0.035c0.145,0,0.287,0,0.431,0c0.024,0,0.048,0,0.072,0v-0.036
				c0.272,0.02,0.535,0.031,0.79,0.036c0.048,0,0.096,0,0.144,0c0.012-0.004,0.024-0.01,0.036-0.019
				c0.182-0.001,0.362-0.007,0.539-0.018c0.024,0,0.048,0,0.071,0h0.037l0.035-0.037c0.024,0,0.05,0,0.073,0h0.071
				c0.144-0.023,0.275-0.035,0.396-0.035c0.047,0,0.095,0,0.142,0c0.048,0,0.096,0,0.144,0c0.025-0.023,0.062-0.035,0.108-0.035
				c0.048,0,0.096,0,0.144,0c0.047,0,0.095,0,0.143,0c0.024,0,0.06-0.013,0.108-0.036c0.048,0,0.096,0,0.142,0
				c0.048,0,0.084,0,0.108,0c0.216,0,0.42-0.012,0.612-0.035c0.023,0,0.047,0,0.072,0c0.023,0,0.047,0,0.071,0
				s0.036-0.013,0.036-0.037c0.023,0,0.048,0,0.071,0c0.024,0,0.048,0,0.071,0c0.024,0,0.048,0,0.073,0
				c0-0.024,0.012-0.036,0.036-0.036c0.047,0,0.107,0,0.179,0c0.047,0,0.095,0,0.143,0c0.048-0.023,0.097-0.035,0.143-0.035
				c0.073,0,0.133,0,0.18,0c0.047,0,0.108,0,0.18,0c0.047,0,0.095-0.013,0.143-0.036c0.047,0,0.096,0,0.143,0
				c0.048,0,0.096,0,0.144,0c0.048,0,0.095-0.012,0.143-0.036c0.024,0,0.047,0,0.072,0c0.025,0,0.048,0,0.071,0
				c0.024,0,0.049-0.012,0.073-0.034c0.023,0,0.048,0,0.072,0c0.024,0,0.047,0,0.072,0c0.024,0,0.047,0,0.071,0
				c0.024-0.025,0.049-0.037,0.072-0.037c0.048,0,0.096,0,0.145,0c0.047,0,0.095,0,0.143,0c0.048-0.024,0.095-0.035,0.143-0.035
				c0.049,0,0.109,0,0.18,0c0.049,0,0.097,0,0.144,0s0.096-0.013,0.143-0.036c0.049,0,0.096,0,0.144,0s0.096,0,0.143,0
				c0.192,0,0.384-0.013,0.575-0.036c0.024,0,0.048,0,0.072,0h0.035c0.024,0,0.048-0.012,0.072-0.036h0.036c0.023,0,0.048,0,0.072,0
				h0.037l0.036-0.036c0.047,0,0.095,0,0.144,0c0.024,0,0.059,0,0.107,0c0.047-0.024,0.083-0.036,0.107-0.036
				c0.048,0,0.084,0,0.107,0c0.024,0,0.062,0,0.107,0c0.107,0,0.216-0.011,0.323-0.036v0.036c0.048,0,0.095,0,0.144,0v0.181
				l0.036,0.035v0.037l0.037,0.034v0.036c0.047,0,0.083,0.012,0.107,0.036c0.071,0,0.131,0.012,0.179,0.035
				c0.024,0.024,0.048,0.036,0.072,0.036v0.037c0.072,0,0.143,0.012,0.216,0.035c0.096,0,0.179,0.012,0.25,0.036
				c0.144,0,0.275,0,0.395,0c0.072-0.024,0.132-0.036,0.18-0.036c0.024-0.023,0.048-0.035,0.072-0.035l0.036-0.037
				c0.049,0,0.096-0.012,0.145-0.036c0.023,0,0.047-0.013,0.072-0.035c0.047,0,0.095,0,0.143,0c0.022-0.024,0.059-0.036,0.108-0.036
				c0.048-0.024,0.095-0.036,0.144-0.036v-0.034c0.047,0,0.083-0.014,0.107-0.037c0.023,0,0.035-0.012,0.035-0.035
				c0.05,0,0.096,0,0.145,0c0.024-0.024,0.06-0.036,0.108-0.036c0.023,0,0.047,0,0.072,0h0.036c0-0.024,0.011-0.036,0.035-0.036
				v-0.036c0.048,0,0.084-0.012,0.107-0.036c0.024,0,0.037-0.012,0.037-0.036c0.047,0,0.095,0,0.143,0
				c0.024-0.023,0.06-0.036,0.107-0.036c0.049-0.023,0.095-0.036,0.143-0.036v-0.035c0.048,0,0.097-0.013,0.145-0.035v-0.037
				c0.024,0,0.048,0,0.071,0c0.072-0.023,0.132-0.035,0.179-0.035c0.023-0.023,0.061-0.036,0.108-0.036v-0.036
				c0.024,0,0.048-0.012,0.072-0.035v-0.037c0.072,0,0.131,0,0.18,0c0.047-0.024,0.083-0.036,0.107-0.036
				c0.048-0.023,0.083-0.034,0.108-0.034l0.035-0.037c0.024,0,0.061-0.012,0.108-0.036v-0.035c0.071,0,0.132,0,0.179,0
				c0.048-0.024,0.083-0.036,0.108-0.036c0.024-0.024,0.049-0.035,0.072-0.035v-0.036c0.047,0,0.083-0.012,0.106-0.036
				c0.025,0,0.037-0.011,0.037-0.036c0.048,0,0.084,0,0.108,0c0.024-0.024,0.048-0.036,0.073-0.036
				c0.024-0.023,0.046-0.035,0.071-0.035l0.036-0.036c0.047,0,0.095-0.013,0.142-0.035c0.025,0,0.048-0.013,0.073-0.036h0.035
				c0.024-0.025,0.06-0.037,0.108-0.037c0.024-0.022,0.047-0.035,0.071-0.035l0.036-0.036c0.025,0,0.06-0.012,0.108-0.035v-0.036
				c0.047,0,0.096,0,0.144,0c0.024-0.023,0.048-0.036,0.071-0.036c0.047-0.023,0.096-0.035,0.143-0.035l0.036-0.037
				c0.023,0,0.047-0.012,0.072-0.035c0.024,0,0.048-0.013,0.072-0.036h0.036c0.047-0.024,0.096-0.036,0.143-0.036
				c0.024-0.023,0.049-0.036,0.072-0.036v-0.036c0.024,0,0.06-0.011,0.107-0.034v-0.037c0.024,0,0.049,0,0.073,0
				c0.023,0,0.047,0,0.071,0l0.036-0.034h0.035c0.048-0.025,0.096-0.037,0.144-0.037v-0.035c0.024,0,0.047-0.013,0.071-0.036v-0.037
				c0.048,0,0.084,0,0.108,0c0.024-0.022,0.048-0.034,0.072-0.034c0.047-0.025,0.096-0.036,0.144-0.036V10.26
				c0.023,0,0.047-0.012,0.071-0.036c0.023,0,0.048-0.012,0.071-0.035c0.025,0,0.049,0,0.073,0c0.048-0.023,0.083-0.036,0.107-0.036
				c0.024-0.023,0.047-0.035,0.072-0.035V10.08c0.047,0,0.095-0.011,0.143-0.034V10.01c0.048,0,0.096,0,0.144,0
				c0.023-0.024,0.048-0.037,0.071-0.037c0.048-0.023,0.097-0.035,0.144-0.035V9.901c0.048,0,0.097-0.012,0.144-0.036V9.831
				c0.024,0,0.048,0,0.072,0c0.048-0.025,0.096-0.037,0.143-0.037c0.023-0.022,0.047-0.035,0.072-0.035l0.036-0.037
				c0.023,0,0.049-0.01,0.071-0.034V9.652c0.024,0,0.06,0,0.108,0c0.024-0.025,0.048-0.037,0.071-0.037
				C33.123,9.59,33.17,9.58,33.217,9.58V9.542c0.026,0,0.049-0.011,0.073-0.035V9.472c0.048,0,0.083,0,0.107,0
				c0.049-0.024,0.096-0.037,0.144-0.037C33.565,9.411,33.588,9.4,33.612,9.4V9.364c0.024,0,0.048-0.012,0.072-0.036
				c0.024,0,0.048-0.012,0.072-0.035c0.024,0,0.048,0,0.073,0c0.047-0.025,0.095-0.037,0.143-0.037
				c0.024-0.023,0.048-0.036,0.072-0.036l0.035-0.035c0.024,0,0.061-0.012,0.108-0.036V9.112c0.049,0,0.083,0,0.108,0
				c0.024-0.023,0.047-0.035,0.071-0.035c0.048-0.024,0.095-0.036,0.144-0.036V9.004c0.023,0,0.036-0.013,0.036-0.035V8.933
				c0.048,0,0.084,0,0.107,0c0.024-0.024,0.047-0.036,0.072-0.036c0.049-0.023,0.083-0.035,0.107-0.035V8.825
				c0.024,0,0.048-0.011,0.072-0.035V8.753c0.048,0,0.096,0,0.144,0l0.037-0.036c0.047-0.023,0.094-0.035,0.142-0.035V8.647
				c0.025,0,0.049-0.013,0.073-0.037c0.023,0,0.048-0.012,0.072-0.036V8.539c0.023,0,0.047,0,0.071,0
				c0.047-0.024,0.096-0.036,0.144-0.036V8.466c0.024,0,0.047-0.013,0.071-0.036c0.024,0,0.048-0.012,0.072-0.035h0.037
				c0.023-0.024,0.058-0.037,0.106-0.037c0.025-0.022,0.049-0.036,0.074-0.036V8.288c0.046,0,0.095-0.013,0.142-0.036V8.215
				c0.025,0,0.048,0,0.072,0c0.048-0.023,0.084-0.037,0.108-0.037l0.037-0.036V8.108c0.024,0,0.047-0.013,0.071-0.036
				c0.024,0,0.047-0.012,0.071-0.035h0.036L36.52,8c0.048-0.024,0.084-0.037,0.108-0.037V7.929c0.024,0,0.048-0.013,0.071-0.037
				V7.857c0.048,0,0.084,0,0.106,0l0.037-0.035c0.023-0.025,0.047-0.038,0.072-0.038l0.035-0.035c0.024,0,0.048-0.013,0.071-0.035
				V7.676c0.025,0,0.062,0,0.108,0c0-0.023,0.011-0.035,0.036-0.035c0-0.023,0.012-0.036,0.036-0.036V7.569
				c0.023,0,0.036-0.012,0.036-0.035V7.498c0.024,0,0.06,0,0.107,0V7.462c0.024,0,0.049,0,0.072,0V6.959
				c0.121,0.004,0.239,0.01,0.359,0.018V6.6c0.395,0.018,0.788,0.029,1.184,0.036V6.6c0.188,0.021,0.369,0.033,0.539,0.036
				c0.024,0,0.047,0,0.072,0v0.359c0.095,0,0.192,0,0.287,0v0.035c0.134,0,0.265,0,0.396,0v0.037c0.023,0,0.034,0.012,0.034,0.035
				v0.359c2.179,0.007,4.355,0.012,6.532,0.018c0,0.018,0,0.035,0,0.054c0.071,0,0.143,0,0.215,0
				c-0.023-0.023-0.048-0.036-0.071-0.036V7.48c0.144,0,0.287,0,0.43,0v0.018l-0.036,0.036c0.742,0,1.471,0,2.189,0V7.498
				c0.156-0.002,0.312-0.002,0.467,0v0.036c0.047,0,0.083,0,0.107,0V7.498c0.144,0,0.287,0,0.431,0v0.036c0.096,0,0.18,0,0.251,0
				V7.498c0.143,0,0.287,0,0.431,0v0.036c0.429,0,0.849,0,1.256,0V7.498c0.142,0,0.285,0,0.43,0v0.036c0.119,0,0.228,0,0.323,0
				V7.498c0.299-0.002,0.599-0.002,0.898,0v0.036c0.131,0,0.262,0,0.395,0c0.023,0.023,0.035,0.06,0.035,0.107
				c0.024,0.023,0.048,0.061,0.072,0.107c0.415,0,0.835,0,1.256,0c0.023,0.048,0.035,0.084,0.035,0.108v0.072
				c0.024,0,0.048,0,0.071,0c0.025,0.023,0.062,0.059,0.108,0.107v0.035l0.036-0.035c0.048,0,0.096,0,0.144,0
				c12.464,0,24.928,0,37.392,0c-0.024-0.023-0.047-0.049-0.072-0.073c0-0.047,0-0.083,0-0.106V7.822
				c0.298,0.015,0.597,0.026,0.898,0.035c0.024,0.023,0.047,0.047,0.072,0.072c0.167,0.002,0.334,0.01,0.501,0.017
				c0-0.021,0-0.039,0-0.054c0-0.096,0-0.179,0-0.251c0-0.048,0-0.096,0-0.144s0-0.096,0-0.144c0-0.049,0-0.095,0-0.144
				c0.072-0.048,0.131-0.083,0.18-0.107c0-0.023,0-0.047,0-0.072V6.996c0.79,0.022,1.579,0.035,2.368,0.035
				C97.68,7.08,97.715,7.127,97.74,7.175z M35.085,14.172c-0.039,0.006-0.075,0.011-0.107,0.019c0.027-0.001,0.056-0.001,0.089,0
				L35.085,14.172z M36.663,15.321c-0.023,0.023-0.047,0.035-0.071,0.035c0,0.023,0.012,0.037,0.036,0.037v0.681
				c0.024,0,0.048,0,0.071,0v0.144c0.024,0.025,0.048,0.037,0.072,0.037c0,0.023,0.012,0.036,0.034,0.036v0.035
				c0,0.023,0.014,0.034,0.037,0.034v0.036c0.023,0,0.036,0.013,0.036,0.037c0.023,0,0.059,0.011,0.106,0.035v0.071h0.036
				c0.019,0,0.037,0.007,0.054,0.02c0.031,0.005,0.06,0.012,0.09,0.018v0.018c0.015,0.003,0.026,0.008,0.036,0.018
				c0.048,0,0.096,0.012,0.143,0.036v0.036c0.024,0.024,0.049,0.036,0.072,0.036c0.025,0,0.061,0.012,0.108,0.036
				c0.049,0,0.107,0,0.178,0c0.241-0.024,0.48-0.036,0.72-0.036c0.07-0.024,0.142-0.036,0.214-0.036v-0.072c0.047,0,0.096,0,0.145,0
				c0.119-0.024,0.239-0.035,0.357-0.035c0.025-0.023,0.049-0.037,0.073-0.037c0.048-0.023,0.084-0.035,0.107-0.035v-0.036
				c0.023,0,0.035-0.012,0.035-0.035v-0.037c0.048,0,0.096,0,0.144,0v-1.363c-0.945-0.018-1.89-0.029-2.835-0.035V15.321z
				 M40.107,14.477c-0.284,0.003-0.573,0.01-0.859,0.018c0.287-0.001,0.574-0.001,0.859,0V14.477z M0.958,14.747
				c0,0.023-0.011,0.035-0.036,0.035l-0.036,0.035c0,0.024,0,0.048,0,0.072v0.035c0.024-0.047,0.061-0.083,0.107-0.107
				c0.025-0.047,0.049-0.095,0.073-0.143v-0.035c-0.001,0.024-0.013,0.048-0.037,0.072C1.006,14.734,0.981,14.747,0.958,14.747z
				 M1.173,14.495c0.024-0.012,0.049-0.023,0.072-0.035c0-0.027,0-0.053,0-0.072c-0.023,0.023-0.048,0.049-0.072,0.072V14.495z
				 M1.532,14.245c0-0.018,0.005-0.035,0.018-0.054l-0.018,0.018c-0.073,0.023-0.132,0.048-0.18,0.071
				c-0.017,0.019-0.04,0.041-0.072,0.072c0.048,0.001,0.096,0.001,0.144,0V14.28C1.448,14.256,1.484,14.245,1.532,14.245z
				 M1.21,17.437c0.008,0.01,0.02,0.021,0.035,0.036v-0.036H1.21z M3.362,26.948c0.024,0.023,0.047,0.059,0.071,0.107
				c0.023,0.023,0.035,0.047,0.036,0.071v-0.035c0-0.049,0-0.085,0-0.107c0.024-0.024,0.036-0.048,0.036-0.072
				c0.009-0.01,0.021-0.021,0.037-0.035c-0.075,0.001-0.148,0.001-0.216,0C3.35,26.9,3.362,26.923,3.362,26.948z`,
            }),
          });
        }
        function f1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 68.375 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M46.44,18.814c-0.434,0.165-0.746,0.353-0.937,0.571
				c-0.163,0.243-0.242,0.596-0.242,1.058c0,0.653,0.012,1.221,0.04,1.709h1.628v0.814l0.285,0.082
				c0.216,0.083,0.34,0.148,0.367,0.204c0.162,0.216,0.407,0.366,0.732,0.446c0.543,0.163,1.126,0.015,1.75-0.446
				c0.677-0.488,0.881-1.139,0.61-1.954c-0.245-0.707-0.693-1.208-1.343-1.507c-0.163-0.082-0.354-0.299-0.569-0.652l-0.286-0.486
				c-0.189-0.028-0.408-0.042-0.649-0.042C47.282,18.583,46.82,18.653,46.44,18.814z M35.369,21.989
				c0.434-0.407,0.652-0.855,0.652-1.343c0-0.462-0.122-0.936-0.367-1.424l-0.327-0.568h-5.574c-0.706,0.678-1.248,1.193-1.63,1.545
				c-0.188,0.163-0.27,0.393-0.242,0.692c0,0.162,0.026,0.446,0.081,0.854c0,0.924,0.258,1.588,0.773,1.995
				c0.624,0.515,1.206,0.747,1.75,0.694c0.244-0.059,0.828-0.274,1.75-0.652c0.813-0.38,1.451-0.694,1.913-0.936
				C34.719,22.519,35.125,22.234,35.369,21.989z M55.476,10.511c0.055-0.081-0.054-0.244-0.325-0.489c-3.122,0-5.156,0-6.106,0
				C48.42,9.996,47.35,9.941,45.83,9.86l-2.159-0.123v1.224h11.642c0.027-0.055,0.041-0.11,0.041-0.164
				C55.41,10.661,55.448,10.565,55.476,10.511z M56.9,9.86c-0.082-0.027-0.216-0.027-0.408,0H56.25v0.772l0.326,0.044
				c0.216,0.082,0.325,0.23,0.325,0.446c0,0.19-0.067,0.368-0.204,0.529l-0.204,0.204l0.165,1.994h0.488V10.39
				c0-0.163-0.012-0.272-0.04-0.326C57.077,9.956,57.008,9.885,56.9,9.86z M67.767,16.901c-0.107,0.219-0.298,0.325-0.569,0.325
				h-5.617l-0.203-0.243c-0.055,0.026-0.121,0.067-0.204,0.122c-0.135,0.081-0.204,0.136-0.204,0.163s0.177,0.231,0.529,0.611
				c0.327,0.432,0.477,0.774,0.449,1.017c-0.054,0.326-0.162,1.194-0.326,2.605c-0.134,1.409-0.202,2.225-0.202,2.441
				c0,0.164-0.056,0.272-0.162,0.326c-0.056,0.053-0.192,0.081-0.408,0.081h-2.36c-0.108,0-0.204-0.096-0.287-0.285
				c-0.107-0.218-0.162-0.501-0.162-0.854c0-0.461-0.014-0.91-0.041-1.344c-0.056-0.487-0.122-0.77-0.204-0.854
				c-0.055-0.082-0.462-0.162-1.22-0.245c-0.734-0.054-1.154-0.026-1.263,0.083c-0.162,0.162-0.298,0.298-0.406,0.407
				c-0.191,0.189-0.285,0.366-0.285,0.528c-0.028,0.108-0.095,0.842-0.204,2.198c-0.299,1.467-0.869,2.618-1.709,3.46
				c-0.868,0.895-2.227,1.521-4.069,1.873c-1.414,0.27-2.566,0.338-3.461,0.203c-0.543-0.082-0.869-0.176-0.977-0.286
				c-0.055-0.028-0.055-0.148,0-0.366c0.651-2.251,0.95-3.487,0.896-3.703c-0.055-0.19-0.108-0.329-0.164-0.407
				c-0.107-0.137-0.256-0.204-0.446-0.204c-0.163-0.028-0.612-0.041-1.344-0.041c-0.378-0.027-0.774-0.04-1.18-0.04
				c-0.081,0-0.163,0.066-0.244,0.203c-0.083,0.161-0.165,0.285-0.245,0.365c-0.082,0.109-0.407,0.382-0.976,0.815
				c-0.706,0.569-1.44,1.086-2.197,1.547c-2.308,1.438-4.262,2.156-5.863,2.156c-1.544,0-3.201-0.054-4.965-0.164l-2.158-0.203
				l-0.039-1.343c-3.31-1.355-5.197-2.061-5.656-2.115c-0.275-0.028-0.573-0.042-0.896-0.042l-0.408-0.042l-0.325,0.571
				c-0.244,0.354-0.476,0.529-0.694,0.529H1.465c-0.244,0-0.46-0.175-0.65-0.529c-0.136-0.298-0.204-0.623-0.204-0.976V18.45
				c0-1.411-0.026-2.974-0.082-4.683c-0.054-1.358-0.082-2.062-0.082-2.117c0.082-0.515,0.204-0.772,0.368-0.772h20.552
				c0.138,0,0.517-0.068,1.141-0.202c0.597-0.111,1.02-0.165,1.262-0.165h14.653l0.042-1.749c0-0.109,0.216-0.626,0.648-1.547
				c0.436-0.952,0.653-1.52,0.653-1.71c0.027-0.164,0.203-0.34,0.529-0.53c0.163-0.081,0.325-0.149,0.49-0.204
				c0-0.243,0.026-0.487,0.081-0.732c0.08-0.488,0.148-0.774,0.202-0.854c0.354-0.517,0.652-0.775,0.896-0.775
				c0.271,0,0.474,0.148,0.611,0.446c0.055,0.165,0.108,0.395,0.163,0.694c0.054,0.19,0.054,0.597,0,1.22
				c-0.027,0-0.069,0.015-0.122,0.042c-0.055,0.054-0.083,0.149-0.083,0.285v0.893h11.559l1.465-0.854
				c0.272,0,0.408-0.093,0.408-0.284v-0.65H55.72V3.186l0.204-0.205l0.448-0.284l0.937-0.082c0.053,0,0.108,0.068,0.162,0.204
				c0.028,0.107,0.042,0.23,0.042,0.367v1.79l0.163,0.608c0.134,0.383,0.232,0.586,0.284,0.612c0.11,0.027,0.476,0.027,1.101,0
				c1.627,1.764,2.482,2.687,2.563,2.769c0.191,0.244,0.286,0.501,0.286,0.772v4.397h5.576l0.244,0.244
				c0.189,0.245,0.286,0.625,0.286,1.139C68.013,16.196,67.93,16.658,67.767,16.901z`,
            }),
          });
        }
        function D1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 37.75 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M37.073,2.483v0.083c0,0.029,0,0.056,0,0.083
				c0,0.056,0,0.099,0,0.125c0,0.029,0,0.054,0,0.083c0.137,0,0.278,0,0.418,0c0,0.026,0,0.055,0,0.084c0,0.167,0,0.319,0,0.458
				c0,0.138,0,0.278,0,0.416c0,0.168,0,0.321,0,0.46c0,0.14,0,0.276,0,0.417c0,0.168,0,0.319,0,0.46c0,0.138,0,0.277,0,0.416
				c0,0.167,0,0.32,0,0.457c0,0.141,0,0.279,0,0.417c0,0.167,0,0.323,0,0.461c0,0.14,0,0.278,0,0.416c0,0.168,0,0.323,0,0.46
				s0,0.279,0,0.416c0,0.168,0,0.32,0,0.46s0,0.277,0,0.417c0,0.166,0,0.307,0,0.418c0,0.138,0,0.249,0,0.332
				c0,0.056,0,0.099,0,0.125c0,0.026,0,0.069,0,0.125v0.292c0,0.056,0,0.099,0,0.125c0,0.056,0,0.097,0,0.125v0.083
				c0,0.028,0,0.069,0,0.125c0,0.028,0,0.07,0,0.126v0.081c0,0.031,0,0.056,0,0.087v0.04c0,0.028,0,0.056,0,0.083
				c-3.368,0-6.746,0-10.139,0l-0.041,0.044v0.042c0,0.024,0,0.056,0,0.081c-0.028,0.029-0.057,0.042-0.084,0.042
				c-0.054,0.028-0.097,0.054-0.124,0.083l-0.043,0.041v0.042c-0.025,0-0.068,0.014-0.124,0.044c0,0.026-0.014,0.053-0.042,0.082
				h-0.041c-0.027,0.029-0.056,0.056-0.083,0.083c-0.028,0-0.043,0.015-0.043,0.044v0.041c-0.027,0-0.056,0.015-0.083,0.042
				c-0.027,0-0.055,0-0.083,0c0,0.056,0,0.111,0,0.166c0,0.113,0,0.237,0,0.375c0,0.112,0,0.237,0,0.377c0,0.139,0,0.263,0,0.375
				c0,0.138,0,0.262,0,0.374c0,0.143,0,0.265,0,0.376c0,0.14,0,0.266,0,0.375c0,0.141,0,0.279,0,0.419c0,0.111,0,0.234,0,0.376
				c0,0.111,0,0.234,0,0.375c0,0.112,0,0.234,0,0.375c0,0.029,0,0.056,0,0.083c0.083,0,0.153,0,0.209,0c0,0.029,0,0.056,0,0.085
				v0.082c0,0.03,0,0.057,0,0.085c0,0.027,0,0.056,0,0.083v0.04c0,0.03,0,0.058,0,0.084v0.083c0,0.028,0,0.056,0,0.085v0.085h-0.043
				v0.04c0,0.026,0,0.056,0,0.084v0.083c0,0.027,0,0.056,0,0.083v0.041c0,0.03,0,0.054,0,0.085c0,0.026,0,0.056,0,0.082
				c-4.116,0-8.245,0-12.388,0c0,0.056,0,0.097,0,0.125c0,0.058,0,0.097,0,0.124c-0.03,0.029-0.043,0.056-0.043,0.085
				c-0.028,0.056-0.055,0.099-0.083,0.127c0,0.026,0,0.067,0,0.123c0,0.029,0,0.071,0,0.125v0.085c0,0.027,0,0.056,0,0.083
				c0,0.057,0,0.098,0,0.124c0,0.056,0,0.099,0,0.126c-0.027,0.028-0.04,0.056-0.04,0.084c-0.057,0.027-0.097,0.069-0.127,0.125
				c0,0.027,0,0.07,0,0.125c0,0.028,0,0.056,0,0.084c0,0.026,0,0.07,0,0.123c0,0.028,0,0.056,0,0.084c0,0.056,0,0.097,0,0.126
				c-0.026,0.056-0.042,0.097-0.042,0.125c-0.054,0.028-0.082,0.054-0.082,0.083c0,0.026,0,0.07,0,0.126c0,0.025,0,0.068,0,0.124
				c0,0.028,0,0.056,0,0.083s0,0.054,0,0.082c0,0.058,0,0.098,0,0.127c0,0.055,0,0.096,0,0.124c-0.055,0.028-0.112,0.07-0.167,0.126
				c0,0.028,0,0.056,0,0.083s0,0.069,0,0.125c0,0.027,0,0.069,0,0.125c0,0.027,0,0.055,0,0.083s0,0.058,0,0.085
				c-0.028,0-0.07,0.026-0.125,0.082c0,0.028,0,0.056,0,0.084c0,0.028,0,0.07,0,0.126c0,0.027,0,0.068,0,0.124
				c0,0.028,0,0.056,0,0.085c-0.026,0.027-0.041,0.055-0.041,0.081c-0.029,0.056-0.07,0.097-0.126,0.128c0,0.056,0,0.096,0,0.122
				c0,0.029,0,0.07,0,0.126c-0.026,0-0.041,0.028-0.041,0.084c-0.028,0.028-0.055,0.069-0.084,0.125c0,0.028,0,0.056,0,0.083
				c0,0.056,0,0.098,0,0.124c-0.027,0.028-0.042,0.058-0.042,0.085c-0.026,0.056-0.07,0.097-0.125,0.125c0,0.056,0,0.098,0,0.125
				s0,0.069,0,0.125c-0.027,0-0.04,0.029-0.04,0.085c-0.028,0.026-0.057,0.068-0.084,0.124c0,0.029,0,0.056,0,0.085
				c0,0.054,0,0.096,0,0.124c0,0.028,0,0.056,0,0.083c-0.056,0-0.111,0.026-0.166,0.083c-0.029,0-0.042,0.028-0.042,0.084
				c-0.028,0.028-0.054,0.068-0.085,0.124c0,0.029,0,0.056,0,0.085c0,0.054,0,0.095,0,0.125c0,0.027,0,0.056,0,0.083v0.126
				c-0.054,0.027-0.11,0.055-0.166,0.083c0,0.028,0,0.056,0,0.083c0,0.056,0,0.098,0,0.125c0,0.028,0,0.069,0,0.125
				c-0.026,0.029-0.07,0.07-0.126,0.125v0.083c0,0.028,0,0.056,0,0.084c0,0.056,0,0.097,0,0.124
				c-0.054,0.057-0.109,0.099-0.165,0.125c0,0.03,0,0.058,0,0.085c0,0.056,0,0.097,0,0.124c0,0.029,0,0.069,0,0.126
				c-0.028,0.027-0.042,0.069-0.042,0.123c-0.056,0-0.083,0.029-0.083,0.084c0,0.029,0,0.056,0,0.086c0,0.053,0,0.095,0,0.123
				c0,0.056,0,0.097,0,0.125v0.042c-0.057,0.029-0.112,0.071-0.167,0.125v0.083c0,0.027,0,0.056,0,0.083c0,0.056,0,0.099,0,0.125
				c0,0.056,0,0.1,0,0.125v0.042c-0.029,0.03-0.07,0.056-0.127,0.084c0,0.027,0,0.07,0,0.126c0,0.026,0,0.053,0,0.081
				c0,0.056,0,0.1,0,0.127c0,0.056,0,0.096,0,0.123c0,0.029,0,0.056,0,0.087c0,0.025,0,0.054,0,0.081v0.042
				c-0.056,0.029-0.111,0.056-0.167,0.084c0,0.029,0,0.056,0,0.083c0,0.029,0,0.071,0,0.126c0,0.028,0,0.069,0,0.126
				c0,0.025,0,0.055,0,0.082c0,0.028,0,0.056,0,0.084c0,0.056,0,0.097,0,0.124c0,0.056,0,0.099,0,0.126s0,0.067,0,0.125
				c0,0.028,0,0.056,0,0.083c0,0.03,0,0.071,0,0.127c0,0.028,0,0.069,0,0.124c0,0.027,0,0.056,0,0.083c0,0.03,0,0.058,0,0.085v0.125
				h0.045c0.026,0,0.041,0.013,0.041,0.04v0.21l0.041,0.042v0.125c0.028,0,0.04,0.012,0.04,0.041v0.042
				c0,0.029,0.017,0.041,0.045,0.041v0.044c0,0.026,0.012,0.041,0.042,0.041v0.042l0.04,0.042v0.167c0.027,0,0.056,0.014,0.083,0.04
				v0.043l0.043,0.043v0.04h0.042v0.042c0,0.029,0.013,0.041,0.042,0.041h0.041V29.6c0.029,0,0.042,0.012,0.042,0.041v0.042
				c0.028,0,0.056,0,0.083,0v0.041c0.028,0.028,0.056,0.043,0.082,0.043c0.03,0,0.056,0,0.086,0v0.041
				c0,0.028,0.014,0.043,0.04,0.043h0.085c0.055,0,0.095,0,0.123,0v0.041h0.043v0.043c0.056,0,0.097,0,0.125,0v0.041
				c0.028,0,0.055,0,0.083,0c0,0.027,0.015,0.043,0.043,0.043v0.333c-0.196,0-0.378,0-0.543,0c-0.086,0-0.167,0-0.251,0v-0.04
				c-0.028,0-0.059,0-0.083,0l-0.042,0.04c-0.167,0-0.319,0-0.461,0c-0.107,0-0.206,0.016-0.29,0.042c-0.333,0-0.683,0-1.042,0
				c-0.087-0.026-0.154-0.042-0.208-0.042v-0.127h-0.042c-0.112,0-0.209,0-0.293,0c-0.056-0.025-0.112-0.041-0.167-0.041v-0.165
				c-0.11,0-0.234,0-0.375,0c-0.139-0.028-0.276-0.043-0.416-0.043V29.89C8.76,29.864,8.636,29.85,8.497,29.85
				c-0.139,0-0.278-0.015-0.417-0.043v-0.041H8.038c-0.057,0-0.097,0-0.125,0H7.83c-0.333-0.028-0.68-0.043-1.042-0.043
				c0-0.028,0-0.056,0-0.083c-0.336-0.029-0.64-0.057-0.919-0.084c-0.026,0-0.056-0.027-0.082-0.083c-0.166,0-0.333-0.013-0.5-0.04
				c-0.029-0.03-0.057-0.056-0.084-0.087c-0.167-0.026-0.335-0.056-0.502-0.081c-0.024,0-0.053-0.029-0.081-0.085
				c-0.167,0-0.335-0.014-0.499-0.042c-0.029-0.026-0.059-0.056-0.085-0.083c-0.167-0.029-0.32-0.056-0.46-0.085V28.89
				c-0.112,0-0.223-0.014-0.332-0.041c-0.028-0.03-0.056-0.056-0.085-0.085c-0.055-0.026-0.125-0.056-0.208-0.082
				c-0.084,0-0.166,0-0.251,0c0-0.029,0-0.055,0-0.083c0-0.057,0-0.099,0-0.128c0-0.027,0-0.056,0-0.083c0-0.056,0-0.096,0-0.124
				c0-0.028,0-0.07,0-0.126v-0.083c-0.778,0-1.555,0-2.333,0v-0.04c0-0.03,0-0.056,0-0.086v-0.082c-0.031,0-0.086,0-0.167,0
				c0-0.056,0-0.099,0-0.125c0-0.056,0-0.097,0-0.124c0-0.029,0-0.056,0-0.085c0-0.056,0-0.097,0-0.126c0-0.025,0-0.068,0-0.123
				c0-0.03,0-0.07,0-0.126c0-0.028,0-0.056,0-0.082c0-0.029,0-0.058,0-0.085c0-0.056,0-0.097,0-0.126c0-0.054,0-0.097,0-0.122
				c0-0.031,0-0.058,0-0.087c0-0.027,0-0.067,0-0.123c0-0.028,0-0.071,0-0.127c0-0.028,0-0.055,0-0.081c0-0.056,0-0.099,0-0.126
				c0-0.028,0-0.055,0-0.084c0-0.056,0-0.097,0-0.125c0-0.056,0-0.098,0-0.125c0-0.029,0-0.056,0-0.085c0-0.025,0-0.068,0-0.124
				c0-0.028,0-0.069,0-0.125c0-0.026,0-0.056,0-0.083v-0.085c0-0.056,0-0.097,0-0.123c0-0.03,0-0.057,0-0.086v-0.041
				c0.081-0.028,0.137-0.043,0.167-0.043c0-0.053,0-0.096,0-0.123c0-0.058,0-0.097,0-0.126c0-0.026,0-0.068,0-0.124
				c0-0.028,0-0.056,0-0.085c0-0.026,0-0.069,0-0.125c0-0.027,0-0.068,0-0.124c0-0.028,0-0.056,0-0.084
				c0.025-0.056,0.054-0.083,0.081-0.083c0.027-0.054,0.042-0.095,0.042-0.125c0-0.056,0-0.098,0-0.125c0-0.026,0-0.069,0-0.125
				c0-0.028,0-0.056,0-0.083c0-0.028,0-0.056,0-0.083c0.085-0.029,0.141-0.04,0.167-0.04c0-0.057,0-0.101,0-0.128
				c0-0.054,0-0.099,0-0.125s0-0.069,0-0.125c0-0.026,0-0.056,0-0.082c0-0.03,0-0.07,0-0.125c0-0.028,0-0.057,0-0.083
				c0-0.056,0-0.097,0-0.126c0.056-0.056,0.097-0.081,0.126-0.081c0-0.056,0-0.1,0-0.126c0-0.029,0-0.069,0-0.126
				c0-0.027,0-0.068,0-0.124c0-0.028,0-0.056,0-0.085c0-0.027,0-0.055,0-0.083c0.082-0.028,0.138-0.042,0.167-0.042
				c0-0.056,0-0.096,0-0.125c0-0.028,0-0.069,0-0.125c0-0.029,0-0.069,0-0.125c0-0.028,0-0.056,0-0.083c0-0.025,0-0.055,0-0.081
				c0.056-0.03,0.096-0.044,0.122-0.044c0-0.056,0-0.097,0-0.126c0-0.026,0-0.066,0-0.122c0-0.031,0-0.072,0-0.128
				c0.085-0.026,0.141-0.054,0.168-0.081c0-0.029,0-0.057,0-0.085c0-0.056,0-0.097,0-0.124c0-0.056,0-0.098,0-0.126
				c0.056-0.028,0.098-0.056,0.125-0.084c0-0.056,0-0.097,0-0.125c0-0.029,0-0.07,0-0.125c0.059-0.026,0.098-0.07,0.126-0.125
				c0-0.028,0.015-0.056,0.042-0.084c0-0.027,0-0.056,0-0.083c0.055,0,0.097-0.013,0.125-0.041c0-0.056,0-0.099,0-0.126
				s0-0.069,0-0.124c0.056-0.029,0.096-0.069,0.124-0.127c0-0.028,0.013-0.054,0.043-0.082c0-0.028,0-0.056,0-0.083s0-0.056,0-0.086
				v-0.038c0.056-0.029,0.096-0.056,0.124-0.084c0-0.027,0-0.056,0-0.083c0-0.059,0-0.099,0-0.127c0-0.056,0-0.096,0-0.124
				c0.056-0.028,0.112-0.056,0.167-0.083c0-0.029,0-0.072,0-0.127c0-0.026,0-0.068,0-0.125c0.028-0.026,0.069-0.056,0.125-0.083
				c0-0.056,0-0.098,0-0.125c0.026-0.028,0.042-0.054,0.042-0.083c0.028-0.056,0.056-0.099,0.083-0.125
				c0-0.054,0.013-0.099,0.042-0.125c0.027-0.029,0.055-0.056,0.083-0.085c0.029-0.026,0.044-0.067,0.044-0.125
				c0-0.026,0-0.069,0-0.125c0-0.026,0-0.056,0-0.082c0.054-0.057,0.111-0.085,0.164-0.085c0-0.056,0-0.097,0-0.122
				c0-0.056,0-0.102,0-0.128c0.029-0.027,0.07-0.069,0.126-0.125c0-0.026,0-0.056,0-0.083c0-0.026,0-0.072,0-0.126
				c0-0.027,0-0.067,0-0.124c0.056-0.028,0.098-0.056,0.125-0.083c0-0.058,0.014-0.084,0.042-0.084v-0.082
				c0.056-0.028,0.097-0.056,0.126-0.085c0-0.029,0-0.069,0-0.126v-0.084c0.053-0.025,0.111-0.053,0.166-0.081
				c0-0.028,0-0.07,0-0.126c0.056-0.026,0.098-0.056,0.127-0.082c0-0.056,0-0.099,0-0.126c0.029-0.056,0.053-0.081,0.083-0.081
				c0.026-0.057,0.056-0.102,0.082-0.126c0-0.056,0-0.097,0-0.128c0-0.025,0-0.066,0-0.123c0-0.029,0.028-0.056,0.083-0.084
				c0.027-0.027,0.044-0.066,0.044-0.123c0-0.029,0-0.056,0-0.086c0.053-0.056,0.096-0.096,0.124-0.125
				c0-0.057,0.015-0.083,0.042-0.083c0-0.055,0-0.097,0-0.125c0.056-0.028,0.095-0.069,0.125-0.125c0-0.028,0-0.07,0-0.126
				c0-0.028,0-0.056,0-0.083c0-0.026,0-0.056,0-0.083c0.055-0.028,0.111-0.04,0.167-0.04c0-0.056,0-0.1,0-0.126
				c0-0.026,0-0.07,0-0.125c0-0.027,0-0.068,0-0.125c0.057-0.028,0.096-0.056,0.124-0.083c0-0.028,0-0.07,0-0.125
				c0-0.027,0-0.054,0-0.083c0-0.056,0-0.097,0-0.126c0-0.025,0-0.056,0-0.081c0-0.056,0-0.099,0-0.127s0-0.056,0-0.083v-0.041
				c0.056,0,0.112-0.015,0.168-0.043c0-0.057,0-0.098,0-0.125c0-0.029,0-0.07,0-0.126v-0.125c-0.056,0-0.112-0.012-0.168-0.042
				c0-0.027,0-0.069,0-0.126v-0.041c0-0.027,0-0.056,0-0.083c-0.056,0-0.11-0.016-0.164-0.043c-0.029-0.029-0.072-0.068-0.126-0.124
				c0-0.029,0-0.07,0-0.124c0-0.028-0.014-0.056-0.043-0.087c-0.082-0.027-0.165-0.056-0.248-0.083c0-0.029,0-0.054,0-0.085
				c-0.057-0.025-0.112-0.053-0.168-0.081c-0.028-0.027-0.071-0.071-0.125-0.127v-0.083c-0.058-0.029-0.111-0.056-0.167-0.082
				c-0.028-0.03-0.056-0.059-0.085-0.085c-0.055-0.029-0.11-0.041-0.166-0.041c0-0.029,0-0.056,0-0.083
				c-0.057-0.028-0.111-0.056-0.167-0.083c0-0.029,0-0.057,0-0.082c-0.083-0.031-0.178-0.044-0.29-0.044c0-0.028,0-0.056,0-0.083
				c-0.056-0.028-0.113-0.055-0.168-0.083c-0.028-0.027-0.055-0.055-0.083-0.083c-0.057-0.028-0.111-0.041-0.167-0.041
				c0-0.029,0-0.056,0-0.083c-0.167-0.029-0.321-0.057-0.458-0.084c-0.028-0.028-0.057-0.057-0.085-0.084
				c-0.055-0.028-0.124-0.041-0.209-0.041c0-0.029,0-0.057,0-0.083c-0.192-0.029-0.388-0.056-0.582-0.085c0-0.026,0-0.069,0-0.125
				c0-0.026,0-0.056,0-0.082c0-0.029,0-0.057,0-0.085c-0.112,0-0.25,0-0.416,0c0-0.026,0-0.068,0-0.125c0-0.028,0-0.056,0-0.083
				V9.909c0-0.056,0-0.097,0-0.126c0-0.056,0-0.097,0-0.125c0-0.027,0-0.068,0-0.124c0-0.03,0-0.056,0-0.085
				c0-0.026,0-0.068,0-0.124c0-0.029,0-0.07,0-0.126c0-0.028,0-0.056,0-0.083V9.032c0-0.056,0-0.098,0-0.125
				c0-0.056,0-0.096,0-0.122c0-0.03,0-0.072,0-0.127C0.418,8.628,0.46,8.602,0.486,8.575c0-0.03,0-0.071,0-0.127
				c0-0.028,0-0.054,0-0.083c0-0.056,0-0.098,0-0.127V8.157c0-0.056,0-0.097,0-0.126c0-0.056,0-0.097,0-0.124
				c0-0.028,0-0.07,0-0.126c0-0.026,0-0.056,0-0.083c0-0.029,0-0.054,0-0.084c0.167-0.027,0.32-0.041,0.461-0.041
				c0-0.056,0-0.097,0-0.125c0-0.026,0-0.071,0-0.126c0-0.026,0-0.068,0-0.124c0-0.029,0-0.056,0-0.084c0-0.028,0-0.068,0-0.124
				c0-0.029,0-0.056,0-0.084c0-0.056,0-0.098,0-0.126V6.696c0-0.054,0-0.097,0-0.125s0-0.07,0-0.127c0-0.026,0-0.067,0-0.123
				c0.056-0.026,0.096-0.057,0.122-0.085c0-0.026,0-0.056,0-0.082c0-0.056,0-0.097,0-0.126c0.059-0.056,0.1-0.095,0.128-0.124
				c0-0.028,0.013-0.056,0.04-0.085c0-0.054,0-0.096,0-0.122c0-0.029,0-0.059,0-0.086V5.57c0.056,0,0.098-0.015,0.125-0.042
				c0-0.056,0-0.098,0-0.125c0-0.03,0-0.07,0-0.127c0-0.028,0-0.07,0-0.123c0.085-0.029,0.141-0.056,0.169-0.085
				c0-0.026,0-0.056,0-0.083c0-0.028,0-0.071,0-0.125c0.055-0.029,0.097-0.056,0.125-0.085c0-0.026,0-0.056,0-0.083
				c0-0.029,0-0.054,0-0.085V4.568c0.056-0.027,0.111-0.055,0.167-0.083c0-0.029,0-0.056,0-0.084c0.056,0,0.096-0.014,0.124-0.042
				c0-0.028,0-0.07,0-0.127c0-0.025,0-0.054,0-0.081V4.111c0.056,0,0.112-0.014,0.167-0.044c0-0.026,0-0.053,0-0.082
				C2.17,3.956,2.21,3.929,2.239,3.902c0-0.028,0-0.059,0-0.085s0-0.056,0-0.082V3.692C2.295,3.664,2.351,3.636,2.407,3.61
				c0-0.026,0-0.057,0-0.083c0.055,0,0.097-0.015,0.126-0.044c0-0.026,0-0.054,0-0.082c0.054-0.029,0.111-0.056,0.164-0.085
				c0-0.027,0-0.055,0-0.083c0.056,0,0.099-0.013,0.126-0.042c0-0.026,0-0.056,0-0.082C2.879,3.081,2.934,3.067,2.99,3.067
				c0-0.029,0-0.056,0-0.083V2.9c0-0.029,0-0.071,0-0.125V2.65c0.389,0,0.779,0.014,1.168,0.043c0-0.029,0-0.056,0-0.086
				c0-0.026,0-0.068,0-0.124c0-0.028,0-0.07,0-0.125c0-0.026,0-0.057,0-0.085V2.19c0-0.056,0-0.096,0-0.125c0-0.027,0-0.056,0-0.083
				V1.941c4.756,0.025,9.51,0.041,14.267,0.041c0,0.027,0,0.056,0,0.083c0,0.056,0,0.098,0,0.125c0,0.056,0,0.097,0,0.126
				c0,0.027,0,0.056,0,0.083c0.194,0,0.388,0,0.583,0v0.084c0.056,0.027,0.097,0.056,0.127,0.083c0,0.029,0,0.056,0,0.083
				c0,0.056,0,0.099,0,0.125c0,0.054,0,0.096,0,0.125c0,0.026,0,0.056,0,0.085c0,0.054,0,0.096,0,0.125c0,0.026,0,0.069,0,0.124
				v0.042c1.749,0,3.502,0,5.255,0V3.234c0-0.03,0-0.055,0-0.084V3.067c0-0.056,0-0.097,0-0.125c0-0.058,0-0.1,0-0.128
				c0-0.026,0-0.066,0-0.122c0-0.029,0-0.056,0-0.086c0-0.026,0-0.068,0-0.124c0-0.028,0-0.07,0-0.125c0-0.026,0-0.057,0-0.085V2.19
				c0-0.056,0-0.096,0-0.125c0-0.027,0-0.056,0-0.083V1.941c3.56,0.025,7.103,0.041,10.636,0.041V1.941
				c0.335,0.025,0.653,0.041,0.961,0.041h0.331c0.196,0,0.39,0,0.586,0c0,0.027,0,0.056,0,0.083c0.056,0,0.111,0.013,0.167,0.044
				c0,0.054,0,0.096,0,0.122c0,0.029,0,0.07,0,0.126C37.073,2.387,37.073,2.428,37.073,2.483z M17.55,11.704
				c-0.085,0.026-0.155,0.056-0.208,0.082c-0.028,0.029-0.071,0.056-0.126,0.085c-0.029,0.026-0.069,0.067-0.125,0.123
				c0,0.029,0,0.072,0,0.126c-0.028,0.027-0.067,0.056-0.124,0.083c0,0.031,0,0.059,0,0.087c0,0.054,0,0.095,0,0.124
				c-0.056,0.027-0.111,0.056-0.167,0.081c0,0.029,0,0.056,0,0.085c0,0.056,0,0.096,0,0.124c-0.028,0.028-0.069,0.057-0.127,0.083
				c0,0.029,0,0.058,0,0.084c0,0.054,0,0.097,0,0.125c0,0.056,0,0.097,0,0.126c-0.028,0.027-0.056,0.068-0.083,0.125
				c-0.027,0.028-0.056,0.055-0.083,0.083c0,0.027,0,0.067,0,0.123c0,0.031,0,0.071,0,0.127c0,0.028-0.014,0.055-0.042,0.082
				c-0.026,0.029-0.057,0.058-0.083,0.084c0,0.056,0,0.098,0,0.127c0,0.054,0,0.097,0,0.124c-0.029,0.029-0.042,0.071-0.042,0.126
				l0.042,0.085c0,0.026,0,0.066,0,0.123c0,0.028,0,0.056,0,0.084c0.026,0.056,0.057,0.097,0.083,0.124
				c0.028,0.028,0.042,0.056,0.042,0.083c0,0.057,0,0.099,0,0.126c0.056,0.056,0.097,0.097,0.125,0.125
				c0,0.028,0.013,0.069,0.041,0.125c0.028,0,0.041,0.026,0.041,0.083c0.03,0.028,0.058,0.068,0.086,0.125c0,0.031,0,0.058,0,0.086
				c0,0.056,0,0.096,0,0.123c0,0.029,0,0.056,0,0.084c0,0.056,0,0.098,0,0.123c0,0.031,0,0.072,0,0.128c0,0.025,0,0.07,0,0.126
				v0.081c0,0.028,0,0.071,0,0.126c0,0.026,0,0.056,0,0.082c0,0.057,0,0.099,0,0.126s0,0.056,0,0.081c0,0.058,0,0.1,0,0.127
				c2.779,0,5.546,0,8.301,0v-0.127c0-0.025,0-0.053,0-0.081V16.25c0-0.029,0-0.056,0-0.085v-0.208c0.221,0,0.443,0.015,0.665,0.042
				v-0.042c0-0.026,0-0.056,0-0.081v-0.043c0.03,0,0.058-0.014,0.085-0.044v-0.04c0-0.112,0-0.224,0-0.335c0-0.11,0-0.209,0-0.29
				c0-0.143,0-0.251,0-0.335c0-0.111,0-0.237,0-0.375c0-0.084,0-0.181,0-0.292c0-0.112,0-0.224,0-0.335c0-0.112,0-0.224,0-0.335
				c0-0.107,0-0.219,0-0.331c0-0.085,0-0.196,0-0.335c0-0.111,0-0.207,0-0.292c0-0.138,0-0.248,0-0.333c0-0.026,0-0.07,0-0.126
				c-0.11,0-0.235,0-0.377,0v-0.041c0-0.027,0-0.055,0-0.082c-0.025,0-0.054-0.015-0.082-0.041v-0.044h-0.083
				c0-0.027-0.013-0.053-0.042-0.083v-0.041c0-0.029-0.012-0.042-0.042-0.042v-0.044c-0.028,0-0.067,0-0.124,0v-0.083h-0.084
				c0-0.029-0.015-0.056-0.042-0.083l-0.083-0.042c-0.028-0.025-0.057-0.041-0.084-0.041c-0.054-0.029-0.095-0.04-0.124-0.04v-0.085
				h-0.042c-1.5,0-2.989,0-4.464,0c0,0.029,0,0.056,0,0.085v0.04c0,0.028,0,0.056,0,0.083s0,0.054,0,0.083v0.126
				c-0.056,0.026-0.112,0.053-0.167,0.082c0,0.056,0,0.097,0,0.126c0,0.026,0,0.067,0,0.123c0,0.029,0,0.072,0,0.126
				c0,0.027,0,0.056,0,0.083c0,0.031,0,0.059,0,0.087c0,0.054,0,0.095,0,0.124c0,0.056,0,0.095,0,0.124c0,0.057,0,0.112,0,0.167
				v0.043c0,0.027,0,0.069,0,0.125c0,0.028,0,0.069,0,0.125c0,0.028,0,0.056,0,0.083c0,0.029,0,0.056,0,0.085
				c0,0.056,0,0.097,0,0.126c0,0.056,0,0.095,0,0.123s0,0.055,0,0.084v0.083c0.028,0.028,0.043,0.055,0.043,0.082
				c0.026,0,0.04,0.015,0.04,0.045c0,0.026,0.013,0.04,0.043,0.04c0,0.03,0.013,0.042,0.041,0.042c0,0.031,0.014,0.042,0.043,0.042
				c0,0.028,0,0.056,0,0.084c0.026,0.027,0.053,0.041,0.081,0.041c0.028,0.028,0.058,0.056,0.084,0.083v0.042
				c0,0.028,0.014,0.043,0.042,0.043c0.027,0.028,0.042,0.056,0.042,0.085l0.042,0.04c0.028,0,0.056,0,0.084,0
				c0,0.027,0,0.056,0,0.083c0.027,0,0.056,0.016,0.083,0.04l0.042,0.044c0.028,0,0.054,0.012,0.083,0.04v0.083
				c0.026,0,0.056,0,0.081,0c0.031,0.028,0.056,0.056,0.086,0.083v0.042c0.025,0,0.056,0.015,0.081,0.043
				c0.056,0,0.113,0.014,0.167,0.042v0.083c0.083,0,0.142,0,0.168,0c0.056,0.028,0.096,0.055,0.125,0.082v0.044
				c0.083,0,0.153,0.011,0.208,0.04c0.054,0,0.126,0.016,0.209,0.042v0.085c0.194,0,0.389,0,0.583,0c0,0.025,0,0.056,0,0.081v0.086
				c0,0.025,0,0.056,0,0.081c0,0.026,0,0.056,0,0.082v0.044c0,0.027,0,0.056,0,0.083v0.084c0,0.027,0,0.055,0,0.083v0.083
				c-0.445,0-0.889,0-1.334,0v-0.044c-0.056-0.025-0.112-0.04-0.167-0.04c-0.056-0.028-0.126-0.056-0.208-0.083v-0.045
				c-0.029-0.025-0.07-0.04-0.126-0.04c-0.056,0-0.112-0.015-0.167-0.042v-0.041c-0.027-0.029-0.069-0.044-0.125-0.044
				c-0.057-0.026-0.112-0.056-0.165-0.082v-0.041l-0.043-0.04c-0.028-0.029-0.056-0.044-0.084-0.044v-0.042
				c-0.055-0.025-0.097-0.056-0.125-0.081c-0.028,0-0.056-0.015-0.086-0.043c0-0.027,0-0.057,0-0.083
				c-0.025-0.029-0.053-0.04-0.081-0.04c-0.028-0.03-0.056-0.044-0.084-0.044c-0.028-0.026-0.04-0.054-0.04-0.082l-0.043-0.042
				c0-0.028-0.012-0.056-0.041-0.083c-0.027-0.028-0.057-0.043-0.084-0.043v-0.042c-0.027-0.028-0.052-0.056-0.083-0.083v-0.042
				c-0.027-0.026-0.055-0.055-0.082-0.082l-0.043-0.044v-0.04c-0.026,0-0.053-0.016-0.082-0.042v-0.041
				c-0.029-0.029-0.056-0.056-0.083-0.084v-0.04c0-0.028-0.03-0.043-0.085-0.043v-0.042c0-0.028,0-0.056,0-0.083
				c-0.056,0-0.125,0-0.207,0c0-0.028,0-0.056,0-0.082c0-0.029-0.014-0.043-0.043-0.043c0-0.027-0.015-0.054-0.04-0.083V13.58
				c0-0.028,0-0.057,0-0.083v-0.044c0-0.025,0-0.056,0-0.081v-0.082c0-0.029,0-0.056,0-0.085v-0.126c0-0.027,0-0.055,0-0.083
				c0.053,0,0.083-0.013,0.083-0.041c0-0.029,0-0.056,0-0.083c0-0.055,0-0.098,0-0.125c0-0.058,0-0.111,0-0.167
				c0-0.056,0-0.111,0-0.167c0-0.057,0-0.113,0-0.167c0-0.056,0-0.112,0-0.167c0-0.056,0-0.112,0-0.167c0-0.057,0-0.112,0-0.167
				s0-0.112,0-0.167s0-0.097,0-0.125c0-0.083,0-0.153,0-0.209c-0.252,0-0.489,0-0.71,0v0.044c0,0.025,0,0.053,0,0.082v0.041
				c-0.141,0.029-0.292,0.057-0.46,0.084v0.042c-0.028,0.026-0.069,0.056-0.124,0.083C17.55,11.648,17.55,11.674,17.55,11.704z
				 M7.161,29.6c0.085,0,0.156,0.012,0.212,0.041V29.6c-0.087-0.029-0.183-0.044-0.294-0.044L7.161,29.6z`,
            }),
          });
        }
        function j1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M52.271,6.917l-0.543,1.315v2.45h-2.541v-0.318h-0.589v0.364
				h-3.857v-0.408l-3.901-0.046l-0.682,0.273h-5.851c-0.182,0-0.392,0.03-0.636,0.091c-0.454,0.089-0.801,0.227-1.043,0.407
				l-0.046,0.047c-0.362,0.302-0.573,0.483-0.635,0.543c-0.21,0.271-0.332,0.575-0.363,0.907c-0.029,0.332-0.043,0.848-0.043,1.542
				c0,0.333,0,0.652,0,0.953c-0.426-0.03-0.862-0.047-1.316-0.047h-0.047c-0.423,0-0.801,0-1.133,0
				c-0.333,0-0.592,0.033-0.772,0.093c-0.392,0.089-0.68,0.211-0.861,0.362c-0.12,0.091-0.241,0.257-0.364,0.5
				c-0.058,0.061-0.107,0.122-0.136,0.181c-0.121,0.243-0.21,0.574-0.27,0.998c-0.063,0.484-0.137,0.785-0.228,0.906
				c-0.211,0.425-0.425,0.756-0.635,1.001c-0.484,0.482-1.09,0.862-1.816,1.133c-0.058,0.031-0.122,0.059-0.181,0.092
				c-0.757,0.211-1.481,0.377-2.177,0.498c-0.665,0.06-1.271,0.077-1.814,0.045c-0.122,0-0.256-0.029-0.409-0.089
				c-0.272-0.091-0.56-0.259-0.862-0.5c-0.122-0.122-0.242-0.242-0.362-0.363l-0.181-0.181l-0.272,0.271
				c-0.152-0.029-0.302-0.06-0.455-0.09c-0.213-0.032-0.408-0.06-0.589-0.092c-0.182,0-0.348-0.014-0.499-0.045
				c-0.365-0.06-0.68-0.104-0.954-0.136c-0.575-0.061-0.983-0.044-1.225,0.045c-0.392,0.181-0.71,0.392-0.952,0.636
				c-0.272,0.271-0.423,0.574-0.453,0.907c-0.03,0.454,0.09,0.861,0.363,1.225c0.06,0.121,0.15,0.258,0.272,0.407
				c0.06,0.122,0.075,0.228,0.045,0.319c0,0.06-0.06,0.152-0.182,0.271c-0.06,0.06-0.181,0.153-0.364,0.272
				c-0.332,0.303-0.515,0.636-0.544,0.998c-0.089,0.485,0,0.923,0.272,1.317l0.227,0.407c0.061,0.123,0.075,0.242,0.044,0.363
				c-0.03,0.092-0.09,0.181-0.182,0.273c-0.09,0.061-0.241,0.135-0.452,0.227c-0.425,0.21-0.713,0.422-0.863,0.633
				c-0.15,0.213-0.272,0.485-0.361,0.819c-0.064,0.301-0.183,0.528-0.365,0.679c-0.271,0.212-0.984,0.422-2.131,0.636
				c-1.182,0.181-2.195,0.255-3.042,0.227c-1.208-0.062-2.206-0.182-2.994-0.363c-1.179-0.302-1.828-0.726-1.95-1.271
				c-0.059-0.212,0-0.5,0.182-0.861c0.06-0.063,0.105-0.137,0.133-0.229c0.153-0.302,0.275-0.544,0.365-0.724
				c0.151-0.302,0.287-0.59,0.407-0.864c0.122-0.271,0.273-0.694,0.455-1.27c0.272-0.725,0.482-1.299,0.635-1.723
				c0.543-1.513,1.012-2.647,1.405-3.402c0.424-0.757,1.12-1.876,2.087-3.358c1.029-1.542,1.68-2.541,1.951-2.995
				c0.244-0.332,0.394-0.665,0.454-0.998c0.03-0.242,0.03-0.544,0-0.907c0-0.425,0-0.682,0-0.772c0-0.272,0.059-0.53,0.181-0.772
				c0.182-0.301,0.666-0.527,1.453-0.68c0.272-0.061,0.561-0.105,0.862-0.135h0.317c0.121-0.122,0.259-0.243,0.411-0.362
				c0.33-0.244,0.633-0.41,0.907-0.501c0.241-0.089,0.529-0.196,0.861-0.317l0.454-0.091l-0.273-0.68
				c-0.241-0.423-0.496-0.727-0.77-0.908c-0.271-0.151-0.652-0.256-1.135-0.317c-0.061-0.031-0.136-0.044-0.227-0.044
				c-0.302-0.032-0.576-0.047-0.816-0.047l-0.043-0.228c0.27-0.029,0.558-0.045,0.86-0.045c0.666-0.061,1.134-0.061,1.408,0
				c0.242,0.061,0.543,0.227,0.907,0.5c0.03,0.029,0.059,0.046,0.09,0.046c0.272,0.209,0.469,0.316,0.59,0.316
				c0.151,0,0.392-0.227,0.726-0.681c0.152-0.182,0.302-0.377,0.454-0.589l1.043,0.044l0.409-0.952l-0.091-0.046
				c-0.062-0.031-0.105-0.075-0.135-0.136c-0.152-0.181-0.183-0.394-0.093-0.635c0.063-0.151,0.153-0.259,0.272-0.319
				c0.031-0.029,0.061-0.043,0.091-0.043c0.09-0.031,0.151-0.031,0.183,0l0.089-0.455l0.545,0.091L17.93,2.924h1.587l0.5,0.319
				h2.449V2.607l0.635-0.59l0.907,0.047v0.453h0.816V2.064h0.954v0.453h0.816v-0.5h0.953v0.5h0.862v-0.5h0.817v0.5h0.952V2.064
				h0.817v0.453h0.907v-0.5h0.861v0.5h0.908v-0.5h0.908v0.5h0.863v-0.5h0.814v0.5h0.908V2.064h0.816v0.408h0.908V2.064h0.636
				L39.977,2.2c0.334,0.121,0.62,0.226,0.863,0.317c0.393,0.151,0.937,0.424,1.633,0.817h5.307V2.517h2.587l0.182,0.044
				c0.149,0.032,0.271,0.107,0.361,0.228c0.062,0.121,0.108,0.257,0.137,0.408l-0.045,0.227l1.268,1.044V6.917z M22.467,14.583
				l0.271,0.229c-0.122,0.304-0.242,0.544-0.364,0.726c-0.06,0.121-0.163,0.287-0.316,0.498c-0.031,0-0.061,0.017-0.091,0.045
				c-0.211,0.242-0.363,0.455-0.454,0.636c-0.062,0.333-0.062,0.635,0,0.908c0.06,0.271,0.243,0.543,0.545,0.817
				c0.242,0.241,0.558,0.483,0.953,0.725c0.181,0.12,0.347,0.212,0.5,0.272l-0.138,0.272c-0.211-0.06-0.468-0.149-0.771-0.272
				c-0.543-0.241-1.012-0.545-1.405-0.907c-0.242-0.273-0.437-0.65-0.59-1.134l-0.182-0.728l0.228-0.179l0.045-0.545
				c-0.119,0-0.257-0.017-0.406-0.044c-0.365-0.032-0.636-0.077-0.818-0.137c-0.182-0.061-0.346-0.183-0.499-0.364l-0.182-0.227
				l-0.181,0.138c-0.12,0.119-0.227,0.27-0.317,0.453c-0.333,0.453-0.499,0.892-0.499,1.315c0,0.061,0,0.122,0,0.181
				c0.029,0.424,0.107,0.817,0.226,1.181c0.123,0.452,0.273,0.785,0.455,0.997c0.212,0.212,0.467,0.392,0.77,0.545
				c0.364,0.152,0.833,0.24,1.408,0.272c0.544,0.029,1.166-0.017,1.861-0.138c0.392-0.091,0.726-0.167,0.998-0.225
				c0.149-0.064,0.271-0.106,0.363-0.139c0.149-0.059,0.302-0.135,0.454-0.225c0.181-0.092,0.392-0.228,0.636-0.41
				c0.512-0.362,0.815-0.665,0.904-0.906c0.154-0.273,0.243-0.561,0.275-0.863c0.06-0.302,0.06-0.682,0-1.134v-0.045
				c-0.032-0.363-0.228-0.68-0.592-0.954c-0.241-0.211-0.573-0.437-0.997-0.679c-0.303-0.152-0.756-0.228-1.362-0.228H22.42
				L22.467,14.583z`,
            }),
          });
        }
        function H1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 84.75 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M20.6,7.498c4.583,0,9.146,0,13.686,0
				c0.086,0.021,0.151,0.043,0.195,0.066c0.064,0.043,0.107,0.086,0.129,0.128l0.033,0.033h0.032
				c0.022,0.021,0.065,0.054,0.131,0.097c0.021,0.044,0.042,0.088,0.063,0.13c0,0.021,0.011,0.044,0.032,0.064
				c0,0.022,0,0.055,0,0.099c0.022,0,0.055,0,0.099,0V8.051c0.087,0,0.182,0,0.292,0c0.042,0.042,0.107,0.074,0.193,0.097
				c0.043,0.021,0.087,0.044,0.13,0.064c16.173,0,32.356,0.012,48.551,0.033c0.085,0.043,0.161,0.075,0.226,0.096
				c0.023,0.021,0.055,0.044,0.099,0.066c0.022,0.043,0.043,0.086,0.064,0.13c0.021,0.042,0.033,0.075,0.033,0.097s0,0.064,0,0.128
				c0,0.023-0.011,0.035-0.033,0.035c0.021,0.021,0.033,0.042,0.033,0.063c0,0.065,0,0.109,0,0.132c0,0.041,0,0.074,0,0.097
				c0,0.043,0,0.086,0,0.13c0,0.022,0,0.043,0,0.065c0,0.063,0,0.107,0,0.128c0,0.044,0,0.076,0,0.098c0,0.043,0,0.088,0,0.131
				c0,0.021,0,0.042,0,0.064c0,0.063,0,0.107,0,0.13c0,0.043,0,0.074,0,0.096c0,0.044,0,0.088,0,0.131c0,0.022,0,0.065,0,0.13
				c0,0.021,0,0.043,0,0.064c0,0.043,0,0.076,0,0.097c0,0.045,0,0.088,0,0.131c0,0.021,0,0.064,0,0.129c0,0.022,0,0.043,0,0.065
				c0,0.043,0,0.076,0,0.099c0,0.042,0,0.085,0,0.129c0,0.021,0,0.065,0,0.129c-0.022,0-0.054,0.011-0.097,0.033
				c-0.044,0.043-0.088,0.076-0.13,0.097c-0.022,0.064-0.044,0.107-0.066,0.129c-0.064,0.022-0.108,0.055-0.129,0.099
				c-0.022,0.043-0.033,0.075-0.033,0.099c-0.087-0.023-0.152-0.056-0.195-0.099l-0.032-0.033c-0.562,0-1.125,0-1.686,0
				c0,0.021,0,0.054,0,0.097c0,0.022,0,0.044,0,0.066c0,0.021,0,0.042,0,0.063c0,0.022,0,0.054,0,0.099v0.032
				c0,0.021,0,0.042,0,0.064c0,0.021,0,0.056,0,0.098v0.032c0,0.022,0.01,0.044,0.032,0.066l0.033,0.031
				c0.173,0,0.336,0.011,0.487,0.031v-0.031c0-0.044,0-0.075,0-0.098c0.518,0,1.038,0,1.556,0c0,0.022,0,0.044,0,0.066
				c0,0.042,0,0.095,0,0.161c0,0.043,0,0.097,0,0.161c0,0.043,0,0.088,0,0.131c0,0.021,0,0.063,0,0.13c0,0.043,0,0.097,0,0.161
				c0,0.043,0,0.086,0,0.13c0,0.065,0,0.119,0,0.162c0,0.021,0,0.066,0,0.129c0,0.044,0,0.088,0,0.131c0,0.064,0,0.12,0,0.162
				c0,0.044,0,0.097,0,0.162v0.031c0,0.022,0,0.045,0,0.065v0.098c0,0.022,0,0.043,0,0.065v0.065c0,0.042,0,0.075,0,0.097v0.064
				c0,0.022,0,0.054,0,0.097v0.098c0,0.022,0,0.044,0,0.065v0.097c0,0.022,0,0.044,0,0.065v0.097c0,0.023,0,0.044,0,0.065v0.194
				c0,0.021,0,0.044,0,0.065v0.162c0,0.021,0,0.043,0,0.065c0,0.021,0,0.064,0,0.129c-0.497,0-0.983-0.011-1.458-0.032v0.032
				c-0.13,0-0.26,0-0.39,0c-0.022,0-0.034,0.012-0.034,0.032c-0.021,0.021-0.053,0.032-0.097,0.032
				c-0.021,0.021-0.043,0.055-0.064,0.098c0,0.022,0,0.043,0,0.064c-0.021,0.022-0.033,0.043-0.033,0.065
				c-0.022,0.021-0.032,0.054-0.032,0.098c0,0.021-0.011,0.044-0.033,0.063c0,0.022-0.022,0.045-0.064,0.065
				c-0.022,0.044-0.043,0.076-0.065,0.099c0,0.021-0.012,0.031-0.033,0.031c0,0.022,0,0.043,0,0.065
				c-0.064,0.021-0.108,0.055-0.129,0.098c-0.021,0.021-0.042,0.043-0.065,0.064c0,0.021-0.011,0.043-0.031,0.064
				c-0.022,0.043-0.056,0.075-0.098,0.097c-0.021,0.021-0.034,0.043-0.034,0.065c-0.021,0.021-0.032,0.054-0.032,0.097v0.033
				c-0.042,0-0.085,0.011-0.129,0.032v0.064c-0.043,0.022-0.098,0.033-0.162,0.033c-0.043,0.043-0.075,0.076-0.097,0.098v0.064
				c-0.151,0-0.313,0-0.487,0v0.033c0,0.043,0,0.075,0,0.098v0.063c-6.984,0.022-13.957,0.032-20.918,0.032c0,0.022,0,0.054,0,0.098
				c0,0.021,0,0.043,0,0.063v0.066c-0.541,0-1.083-0.011-1.623-0.032c0-0.021,0-0.044,0-0.066c0-0.021,0-0.054,0-0.097v-0.032
				c0-0.021,0-0.043,0-0.064s0-0.044,0-0.064c-0.064-0.044-0.141-0.064-0.228-0.064c-0.086-0.022-0.172-0.044-0.259-0.067V16.71
				c-0.086,0-0.151-0.022-0.194-0.065c-0.065-0.022-0.13-0.044-0.196-0.065v-0.064c-0.107,0-0.205-0.011-0.291-0.033
				c-0.109-0.043-0.206-0.075-0.293-0.097c0-0.022,0-0.044,0-0.065c-3.459,0-6.939,0-10.442,0c-0.087-0.021-0.174-0.054-0.26-0.097
				c-0.044-0.021-0.076-0.044-0.097-0.064c-0.043-0.021-0.098-0.044-0.162-0.064c-0.021-0.043-0.054-0.087-0.098-0.132
				c-0.043-0.021-0.075-0.042-0.097-0.063c0-0.064,0-0.11,0-0.131s0-0.053,0-0.097s0-0.087,0-0.13c-0.821,0-1.632,0-2.432,0
				c0,0.021,0,0.043,0,0.064c0,0.042,0,0.077,0,0.098v0.031c0,0.022,0,0.045,0,0.065c0,0.044,0,0.076,0,0.099
				c0,0.021,0,0.042,0,0.063v0.065c-0.237,0-0.465,0-0.682,0v0.066c0,0.021,0,0.043,0,0.064c0,0.021,0,0.043,0,0.064
				c0,0.043,0,0.075,0,0.097s0,0.043,0,0.065v0.031c-0.498,0-1.016-0.01-1.557-0.031c-0.021-0.022-0.043-0.044-0.064-0.065v-0.032
				c0-0.042,0-0.076,0-0.097c0-0.021,0-0.043,0-0.065c0-0.021,0-0.054,0-0.098c-2.617,0-5.233,0-7.849,0H32.99
				c-0.022,0-0.055,0.023-0.097,0.066c-0.043,0-0.076,0-0.098,0c-0.021,0.021-0.055,0.031-0.098,0.031
				c-0.065,0.022-0.108,0.044-0.129,0.065c-0.044,0.021-0.098,0.055-0.162,0.097c-0.022,0-0.054,0-0.097,0
				c-0.065,0.022-0.108,0.032-0.131,0.032c-0.042,0.021-0.086,0.043-0.129,0.065c0,0.021-0.022,0.054-0.065,0.097
				c-0.042,0.022-0.086,0.044-0.13,0.065c0,0.021-0.022,0.032-0.064,0.032c0,0.021-0.012,0.032-0.034,0.032
				c-0.042,0.022-0.075,0.033-0.096,0.033c-0.043,0.043-0.077,0.076-0.098,0.098v0.064c-0.042,0.021-0.077,0.033-0.097,0.033
				c0,0.043,0,0.075,0,0.098v0.063c-0.022,0-0.055,0-0.098,0h-0.063v0.161c-0.152,0-0.304,0.012-0.455,0.032h-0.032
				c-0.109,0-0.205,0.013-0.293,0.034h-0.032c-0.043,0-0.075,0.01-0.097,0.032H30.33c-0.087,0-0.185,0.021-0.292,0.064h-0.032
				c-0.086,0-0.173,0.012-0.259,0.032h-0.066c-0.021,0-0.053,0.011-0.097,0.033h-0.032c-0.043,0-0.076,0.012-0.097,0.031h-0.032
				c-0.023,0-0.043,0.012-0.064,0.034h-0.033c-0.066,0-0.109,0.009-0.131,0.031h-0.032c-0.022,0-0.033,0.022-0.033,0.065h-0.065
				c-0.043,0-0.076,0.011-0.098,0.032h-0.033c-0.064,0-0.107,0.011-0.129,0.032h-0.032c-0.043,0-0.097,0.012-0.163,0.032h-0.031
				c-0.022,0-0.043,0.011-0.064,0.033h-0.067c-0.021,0-0.032,0.022-0.032,0.064h-0.033c-0.021,0-0.043,0.011-0.064,0.033h-0.033
				c-0.043,0-0.076,0.01-0.098,0.031h-0.032c0,0.021-0.011,0.032-0.033,0.032s-0.054,0.013-0.097,0.032h-0.033
				c-0.021,0-0.042,0.012-0.064,0.032h-0.032c-0.022,0-0.055,0.022-0.098,0.065h-0.032c-0.022,0-0.043,0.013-0.066,0.033h-0.032
				l-0.064,0.032h-0.032c-0.022,0-0.043,0.011-0.065,0.032h-0.033c-0.022,0-0.032,0.01-0.032,0.034h-0.066
				c-0.021,0-0.042,0.021-0.064,0.063h-0.033c0,0.022-0.011,0.032-0.032,0.032c-0.044,0-0.076,0.011-0.097,0.033h-0.032
				c-0.022,0-0.032,0.011-0.032,0.033h-0.034c-0.021,0-0.032,0.011-0.032,0.032h-0.064c-0.021,0-0.033,0.01-0.033,0.031h-0.032
				c-0.023,0-0.044,0.021-0.066,0.066c-0.042,0-0.075,0.009-0.096,0.032h-0.034c-0.02,0-0.032,0.011-0.032,0.032h-0.032
				c0,0.021-0.011,0.032-0.031,0.032c-0.044,0-0.076,0.011-0.099,0.033c-0.021,0-0.032,0.021-0.032,0.063h-0.032
				c0,0.022-0.011,0.032-0.033,0.032c-0.065,0-0.107,0.011-0.13,0.034h-0.032l-0.065,0.063v0.033h-0.064
				c-0.021,0-0.033,0.021-0.033,0.063h-0.032c0,0.022-0.011,0.033-0.033,0.033c-0.021,0-0.053,0.011-0.097,0.033h-0.031
				c0,0.021-0.012,0.031-0.035,0.031c-0.021,0-0.042,0.012-0.064,0.034h-0.033c0,0.042-0.021,0.064-0.065,0.064
				c-0.022,0-0.043,0.01-0.064,0.032h-0.032c-0.022,0-0.033,0.009-0.033,0.031h-0.064c-0.022,0-0.034,0.011-0.034,0.033h-0.031
				c-0.022,0-0.032,0.011-0.032,0.033h-0.034c-0.021,0-0.032,0.011-0.032,0.032H25.27c0,0.042-0.011,0.064-0.032,0.064
				c-0.021,0-0.032,0.011-0.032,0.033h-0.033c-0.022,0-0.032,0.01-0.032,0.031h-0.066l-0.064,0.065
				c-0.021,0-0.033,0.021-0.033,0.063h-0.032c-0.043,0-0.065,0.011-0.065,0.032h-0.032c0,0.023-0.011,0.034-0.032,0.034
				c-0.022,0-0.033,0.011-0.033,0.032h-0.032c0,0.021-0.011,0.032-0.032,0.032c-0.043,0-0.064,0.021-0.064,0.065h-0.035
				c0,0.021-0.011,0.031-0.031,0.031c-0.022,0-0.033,0.01-0.033,0.032h-0.033c-0.042,0-0.063,0.011-0.063,0.033h-0.033
				c-0.021,0-0.033,0.011-0.033,0.031h-0.032v0.034c-0.021,0-0.032,0.02-0.032,0.064h-0.032c-0.044,0-0.067,0.011-0.067,0.033H24.2
				c-0.021,0-0.032,0.009-0.032,0.031h-0.033l-0.097,0.065c-0.022,0-0.043,0.021-0.064,0.063c0,0.021-0.01,0.035-0.032,0.035
				c-0.022,0-0.033,0.009-0.033,0.031h-0.032l-0.129,0.097c-0.022,0-0.032,0.022-0.032,0.065h-0.032l-0.131,0.098
				c-0.021,0-0.032,0.01-0.032,0.031h-0.032c-0.022,0-0.031,0.021-0.031,0.065h-0.066c-0.021,0-0.032,0.011-0.032,0.032h-0.032
				c-0.021,0-0.043,0.012-0.064,0.032c-0.044,0-0.076,0.011-0.097,0.032c-0.022,0-0.043,0.011-0.065,0.032h-0.033
				c-0.022,0-0.054,0.011-0.097,0.032c-0.021,0-0.044,0.022-0.065,0.066H22.87c-0.022,0-0.054,0.01-0.098,0.032
				c-0.021,0-0.043,0.011-0.065,0.031h-0.032c-0.021,0-0.032,0.012-0.032,0.033h-0.031c-0.066,0-0.109,0.012-0.13,0.032h-0.033
				c-0.022,0-0.032,0.021-0.032,0.064h-0.066c-0.021,0-0.042,0.012-0.065,0.034h-0.031c-0.021,0-0.044,0.009-0.065,0.031h-0.065
				c-0.043,0-0.075,0.011-0.097,0.031h-0.034c-0.042,0-0.085,0.013-0.129,0.034c-0.108,0-0.194,0.011-0.259,0.032h-0.033
				c-0.065,0-0.107,0.021-0.129,0.065h-0.033c-0.064,0-0.119,0.011-0.162,0.031h-0.034c-0.107,0-0.214,0.012-0.324,0.033H20.86
				c-0.369,0-0.746,0-1.136,0l-0.032-0.033c-0.065,0-0.12,0-0.163,0v-0.031c-0.044,0-0.086,0-0.13,0l-0.032-0.065
				c-0.043,0-0.097,0-0.164,0l-0.032-0.032c-0.064,0-0.14,0-0.227,0l-0.032-0.034c-0.022,0-0.044,0-0.066,0v-0.031
				c-0.063,0-0.107,0-0.129,0l-0.032-0.031c-0.021,0-0.054,0-0.097,0l-0.033-0.034c-0.022,0-0.054,0-0.098,0l-0.031-0.064
				c-0.045,0-0.077,0-0.098,0v-0.032c-0.042,0-0.076,0-0.097,0l-0.065-0.033h-0.032l-0.034-0.031c-0.02,0-0.042,0-0.063,0
				l-0.033-0.032H17.94l-0.032-0.066c-0.021,0-0.043,0-0.064,0v-0.032c-0.022,0-0.055,0-0.098,0l-0.033-0.032
				c-0.021,0-0.043,0-0.063,0l-0.033-0.032c-0.021,0-0.055,0-0.097,0v-0.032h-0.034l-0.064-0.098h-0.033v-0.031
				c-0.043,0-0.076,0-0.096,0v-0.033h-0.034v-0.033h-0.032v-0.031h-0.032v-0.065h-0.033v-0.033h-0.065v-0.032l-0.032-0.031h-0.032
				l-0.131-0.13v-0.032H16.87V19.92l-0.063-0.064v-0.064h-0.034v-0.034h-0.032v-0.031l-0.098-0.065v-0.031l-0.066-0.098v-0.032
				h-0.031v-0.034l-0.064-0.032v-0.063l-0.032-0.033h-0.034v-0.032l-0.032-0.031v-0.033l-0.032-0.064v-0.032
				c-0.022-0.022-0.054-0.033-0.098-0.033v-0.033l-0.064-0.063v-0.064l-0.034-0.034c0-0.021-0.009-0.031-0.031-0.031v-0.066
				l-0.098-0.097v-0.031l-0.032-0.032v-0.034l-0.065-0.096v-0.033l-0.032-0.032h-0.065v-0.064L15.8,18.33v-0.031l-0.033-0.032
				v-0.033l-0.065-0.065v-0.063l-0.162-0.132v-0.065l-0.032-0.032v-0.032c-0.044,0-0.065-0.011-0.065-0.032l-0.292-0.324v-0.031
				h-0.032v-0.065c-0.021,0-0.033-0.011-0.033-0.033h-0.065l-0.098-0.129c0-0.021-0.01-0.034-0.032-0.034v-0.032l-0.195-0.193
				c-0.174,0-0.368,0-0.583,0c-0.023,0.021-0.043,0.032-0.064,0.032c-0.218,0.022-0.412,0.064-0.584,0.13
				c-0.043,0.021-0.086,0.043-0.129,0.063c-0.022,0-0.055,0.013-0.099,0.034c0-0.021,0-0.044,0-0.066c0-0.063,0-0.106,0-0.129
				c0-0.021,0-0.054,0-0.096h-0.032v0.031l-0.032,0.032c-0.065,0.022-0.12,0.032-0.163,0.032c-0.064,0.022-0.119,0.054-0.162,0.098
				c-0.021,0.021-0.043,0.043-0.065,0.063c-0.022,0.023-0.054,0.034-0.098,0.034l-0.031,0.032c-0.043,0-0.075,0.021-0.098,0.064
				c-0.043,0.021-0.077,0.043-0.097,0.065l-0.066,0.065c-0.043,0-0.097,0.009-0.162,0.031c-0.021,0.043-0.042,0.076-0.063,0.098
				c0,0.021-0.011,0.032-0.033,0.032l-0.065,0.032c-0.042,0-0.076,0.011-0.097,0.033c-0.021,0.043-0.055,0.064-0.097,0.064v0.033
				c-0.044,0.021-0.097,0.031-0.163,0.031c-0.044,0.021-0.077,0.045-0.097,0.064v0.098c-0.042,0.022-0.098,0.033-0.164,0.033
				c-0.064,0.021-0.119,0.043-0.162,0.064c-0.043,0.022-0.076,0.055-0.097,0.097c0,0.022-0.011,0.032-0.033,0.032l-0.031,0.033
				c-0.065,0-0.109,0.011-0.13,0.033c-0.021,0.021-0.042,0.042-0.064,0.063l-0.065,0.099c-0.064,0-0.12,0.011-0.162,0.032v0.032
				l-0.032,0.033c-0.065,0.043-0.119,0.063-0.163,0.063c-0.021,0.022-0.043,0.043-0.065,0.066c-0.043,0.021-0.063,0.041-0.063,0.063
				c0,0.065,0,0.109,0,0.13c-0.023,0-0.044,0.011-0.066,0.033c-0.022,0.021-0.043,0.043-0.065,0.065
				c-0.063,0.064-0.118,0.118-0.161,0.161c-0.086,0.021-0.162,0.065-0.228,0.13l-0.032,0.033c0,0.021,0,0.043,0,0.063
				c-0.043,0-0.075,0-0.097,0c-0.022,0.022-0.044,0.033-0.065,0.033c-0.021,0.043-0.042,0.074-0.064,0.096
				c0,0.023-0.021,0.045-0.064,0.066c-0.021,0.021-0.043,0.054-0.064,0.098c-0.043,0.021-0.087,0.041-0.13,0.063
				c-0.021,0.021-0.044,0.044-0.065,0.064c0,0.022-0.011,0.054-0.032,0.099c-0.022,0.021-0.044,0.042-0.064,0.064
				c-0.043,0.022-0.078,0.033-0.098,0.033c-0.023,0.021-0.043,0.053-0.064,0.096C9,20.07,8.967,20.093,8.924,20.115
				c-0.022,0.021-0.032,0.043-0.032,0.063c-0.021,0.022-0.043,0.056-0.064,0.099v0.064c-0.065,0-0.108,0.011-0.129,0.033
				c-0.022,0.021-0.044,0.053-0.065,0.097v0.064c-0.044,0-0.087,0.011-0.131,0.032c-0.021,0.021-0.043,0.043-0.064,0.064
				c-0.022,0.045-0.043,0.076-0.064,0.099c-0.043,0.021-0.076,0.043-0.097,0.064c-0.023,0.021-0.034,0.054-0.034,0.097
				c0,0.022-0.011,0.034-0.033,0.034c0,0.02-0.011,0.042-0.032,0.063c-0.021,0.022-0.064,0.045-0.129,0.066
				c0,0.043-0.011,0.076-0.033,0.097c-0.021,0.021-0.043,0.043-0.064,0.065c-0.043,0.021-0.076,0.054-0.099,0.097
				c-0.02,0.021-0.031,0.043-0.031,0.064c-0.021,0.022-0.042,0.044-0.065,0.064c-0.021,0.022-0.053,0.032-0.097,0.032
				c0,0.045,0,0.076,0,0.099c-0.022,0.021-0.044,0.043-0.065,0.064c-0.021,0.021-0.032,0.054-0.032,0.097
				c-0.021,0.022-0.055,0.045-0.099,0.066c-0.021,0.021-0.042,0.041-0.063,0.064c-0.021,0.021-0.045,0.054-0.066,0.098
				c-0.021,0.021-0.032,0.043-0.032,0.064c0,0.022-0.022,0.032-0.065,0.032c0,0.021-0.011,0.054-0.032,0.098
				c-0.022,0.022-0.054,0.043-0.097,0.063c0,0.022,0,0.044,0,0.066s-0.023,0.054-0.065,0.097c0,0.021-0.011,0.043-0.033,0.064
				c0,0.023,0,0.045,0,0.065v0.064c-0.043,0.022-0.074,0.032-0.096,0.032c-0.021,0.022-0.033,0.045-0.033,0.065
				c-0.042,0.021-0.064,0.044-0.064,0.065c0,0.042-0.011,0.076-0.032,0.096c0,0.022-0.011,0.044-0.033,0.065
				c-0.021,0.023-0.033,0.055-0.033,0.098c0,0.022-0.01,0.033-0.032,0.033c0,0.021-0.021,0.042-0.064,0.064c0,0.021,0,0.054,0,0.097
				c0,0.022,0,0.043,0,0.065v0.064c-0.042,0.022-0.076,0.034-0.097,0.034c-0.023,0.042-0.032,0.073-0.032,0.095
				c-0.023,0.021-0.033,0.045-0.033,0.066v0.097c-0.065,0-0.108,0.011-0.13,0.032c0,0.021-0.011,0.045-0.032,0.066
				c0,0.021-0.011,0.042-0.033,0.064c0,0.042,0,0.074,0,0.097C6.222,23.898,6.2,23.919,6.2,23.941
				c-0.021,0.021-0.042,0.032-0.065,0.032c0,0.042,0,0.076,0,0.098c-0.021,0.021-0.043,0.043-0.064,0.065c0,0.021,0,0.042,0,0.065
				c0,0.042,0,0.075,0,0.097c0,0.02,0,0.042,0,0.064s0,0.054,0,0.097c0,0.022,0,0.043,0,0.066v0.032c-0.065,0-0.108,0-0.13,0
				c0,0.021,0,0.042,0,0.064c0,0.044,0,0.074,0,0.097v0.033c-0.542,0-1.082-0.012-1.622-0.033c-0.065-0.022-0.119-0.053-0.162-0.097
				v-0.064c-0.065,0-0.109-0.012-0.131-0.032c-0.086-0.023-0.15-0.044-0.194-0.066c0-0.043-0.011-0.074-0.032-0.097L3.768,24.33
				c-0.087-0.021-0.151-0.041-0.195-0.063v-0.099c-0.064,0-0.119-0.011-0.162-0.031c-0.021-0.022-0.043-0.044-0.065-0.065
				l-0.097-0.098c-0.023,0-0.044-0.011-0.066-0.032c-0.043-0.022-0.097-0.043-0.162-0.064c0-0.022-0.01-0.055-0.032-0.097
				c-0.021,0-0.054-0.011-0.098-0.033c0-0.021,0-0.043,0-0.063c-0.042-0.023-0.075-0.044-0.097-0.066
				c-0.042-0.043-0.075-0.074-0.097-0.097c-0.044-0.021-0.065-0.045-0.065-0.066c-0.022-0.021-0.043-0.053-0.064-0.095
				c-0.043-0.023-0.087-0.045-0.131-0.067c0-0.021-0.01-0.042-0.032-0.063c-0.02,0-0.053-0.011-0.097-0.033
				c0-0.043-0.011-0.075-0.032-0.097c-0.043-0.022-0.064-0.043-0.064-0.064v-0.033c-0.043-0.043-0.087-0.074-0.129-0.098
				c0-0.021-0.022-0.043-0.066-0.065c-0.021,0-0.053-0.01-0.097-0.031c0-0.043,0-0.075,0-0.098
				c-0.021-0.021-0.042-0.042-0.065-0.064c-0.064-0.021-0.108-0.043-0.129-0.065c-0.022-0.042-0.034-0.075-0.034-0.097
				c-0.021-0.021-0.053-0.044-0.097-0.065C1.573,22.396,1.55,22.363,1.53,22.32c0-0.022-0.01-0.043-0.032-0.065l-0.032-0.033
				c-0.066-0.021-0.109-0.041-0.13-0.063c0-0.044-0.011-0.076-0.034-0.098L1.27,22.028c-0.065-0.021-0.107-0.044-0.129-0.064
				c0-0.044,0-0.076,0-0.098c-0.021,0-0.033-0.011-0.033-0.032c-0.021-0.022-0.032-0.043-0.032-0.064s0-0.055,0-0.098
				c-0.042,0-0.087-0.013-0.131-0.033c0-0.021-0.01-0.043-0.031-0.064c0-0.022-0.011-0.054-0.032-0.099v-0.032
				c-0.043-0.021-0.087-0.042-0.13-0.064c0-0.021,0-0.043,0-0.064v-0.065c-0.021-0.021-0.032-0.043-0.032-0.063
				c-0.021-0.021-0.032-0.044-0.032-0.064c0-0.044,0-0.076,0-0.098s0-0.043,0-0.065s0-0.043,0-0.065c0-0.043,0-0.076,0-0.097
				c0-0.021,0-0.044,0-0.064v-0.032c0-0.044,0-0.076,0-0.099c0-0.021,0-0.044,0-0.064s0-0.043,0-0.064c0-0.065,0-0.119,0-0.163
				c0-0.021,0-0.053,0-0.097c0-0.022,0-0.043,0-0.065v-0.031c0-0.022,0-0.045,0-0.066c0-0.043,0-0.075,0-0.096
				c0-0.021,0-0.044,0-0.064c0-0.022,0-0.056,0-0.098c0-0.045,0-0.088,0-0.131c0-0.021,0-0.054,0-0.097
				c0.021,0,0.044-0.011,0.064-0.032v-0.032c0-0.13,0-0.271,0-0.423c0-0.128,0-0.27,0-0.42c0-0.152,0-0.293,0-0.423
				c0-0.152,0-0.291,0-0.422c0-0.151,0-0.302,0-0.454c0-0.129,0-0.271,0-0.42c0-0.153,0-0.293,0-0.423c0-0.152,0-0.292,0-0.421
				c0-0.152,0-0.313,0-0.487c0-0.108,0-0.248,0-0.422c0-0.15,0-0.292,0-0.423c0-0.021,0-0.041,0-0.063
				c-0.021-0.021-0.043-0.032-0.064-0.032c0-0.021,0-0.042,0-0.065v-0.064c0-0.021,0-0.043,0-0.064c0-0.022,0-0.044,0-0.064
				c0-0.044,0-0.076,0-0.097c0-0.022,0-0.044,0-0.066c0-0.021,0-0.043,0-0.065c0-0.043,0-0.074,0-0.097s0-0.043,0-0.064v-0.034
				c0-0.042,0-0.074,0-0.097c0-0.021,0-0.043,0-0.063c0-0.024,0-0.045,0-0.066c0-0.044,0-0.076,0-0.097c0-0.021,0-0.043,0-0.065
				c0-0.021,0-0.054,0-0.098c0-0.021,0-0.043,0-0.064v-0.032c0-0.023,0-0.043,0-0.065c0-0.043,0-0.076,0-0.097
				c0-0.022,0-0.044,0-0.066c0-0.063,0-0.106,0-0.129c0.54,0,1.08,0,1.621,0c0,0.022,0,0.055,0,0.097
				c0.021,0.022,0.055,0.044,0.097,0.065c0.022,0.022,0.055,0.033,0.098,0.033c0,0.021,0,0.054,0,0.097
				c0.044,0.022,0.087,0.042,0.13,0.065c0.065,0.022,0.119,0.032,0.162,0.032c0,0.021,0.011,0.044,0.033,0.064
				c0,0.044,0.021,0.076,0.063,0.098c0.044,0.022,0.098,0.031,0.164,0.031c0,0.022,0,0.045,0,0.065
				c0.064,0.043,0.128,0.077,0.195,0.098c0.065,0.022,0.129,0.034,0.194,0.034c0,0.02,0,0.041,0,0.063
				c0.086,0.022,0.152,0.055,0.194,0.097c0.13,0.024,0.26,0.034,0.389,0.034c0,0.021,0,0.042,0,0.064
				c0.11,0.022,0.206,0.054,0.293,0.097c0.368,0,0.746,0,1.135,0c0.087-0.043,0.195-0.074,0.324-0.097
				c0.044-0.022,0.066-0.043,0.066-0.064h0.032c0.13-0.021,0.26-0.034,0.389-0.034c0.088-0.042,0.185-0.074,0.293-0.097
				c0.022-0.021,0.031-0.043,0.031-0.063h0.033C6.751,13.8,6.88,13.79,7.01,13.79c0.131-0.021,0.26-0.055,0.391-0.098
				c0-0.021,0-0.043,0-0.065c0.13-0.021,0.259-0.031,0.389-0.031c0.063-0.021,0.14-0.054,0.227-0.098c0-0.021,0-0.043,0-0.064h0.033
				c0.064-0.021,0.118-0.032,0.161-0.032c0.109-0.023,0.195-0.043,0.26-0.065c0.021-0.043,0.032-0.076,0.032-0.097h0.065
				c0.043-0.022,0.087-0.033,0.131-0.033c0.106-0.021,0.226-0.043,0.355-0.065c0.022-0.042,0.034-0.074,0.034-0.097h0.032
				c0.065-0.021,0.129-0.032,0.195-0.032c0.086-0.021,0.183-0.043,0.291-0.064c0-0.044,0-0.075,0-0.098
				c0.064-0.021,0.152-0.033,0.259-0.033c0.066-0.021,0.142-0.042,0.228-0.063c0-0.021,0-0.054,0-0.098
				c0.043-0.022,0.107-0.032,0.194-0.032c0.043-0.021,0.107-0.044,0.194-0.064c0-0.022,0-0.056,0-0.097
				c0.065-0.022,0.151-0.033,0.258-0.033c0.046-0.022,0.098-0.043,0.164-0.063c0-0.024,0-0.044,0-0.067h0.033
				c0.022-0.042,0.054-0.064,0.097-0.064c0.064-0.021,0.107-0.043,0.129-0.066c0.022-0.021,0.044-0.042,0.065-0.063
				c0.043-0.043,0.075-0.065,0.097-0.065v-0.031c0.065-0.021,0.141-0.031,0.228-0.031c0.023-0.022,0.044-0.044,0.065-0.066
				l0.097-0.097c0.043-0.022,0.097-0.033,0.163-0.033c0-0.022,0-0.043,0-0.064c0.042-0.021,0.086-0.032,0.129-0.032
				c0.043-0.045,0.085-0.076,0.129-0.099c0.022-0.021,0.033-0.043,0.033-0.063h0.031c0.043-0.022,0.098-0.031,0.163-0.031
				c0.044-0.023,0.085-0.056,0.129-0.099c0.044-0.021,0.077-0.044,0.098-0.066c0.022-0.021,0.043-0.032,0.065-0.032v-0.031
				c0.065-0.043,0.118-0.065,0.162-0.065c0-0.021,0-0.044,0-0.064h0.032c0.022-0.021,0.064-0.033,0.129-0.033
				c0.065-0.021,0.141-0.043,0.228-0.064c0-0.043,0-0.076,0-0.097h0.032c0.043-0.022,0.099-0.032,0.162-0.032
				c0.023-0.021,0.044-0.044,0.066-0.065c0.021-0.043,0.043-0.075,0.064-0.097c0.043-0.022,0.076-0.034,0.098-0.034v-0.031
				c0.044-0.022,0.087-0.033,0.129-0.033c0-0.021,0-0.054,0-0.097h0.065c0.022-0.022,0.055-0.032,0.098-0.032
				c0.064-0.021,0.108-0.043,0.131-0.065c0.021-0.02,0.031-0.053,0.031-0.098h0.034c0.042-0.021,0.107-0.031,0.194-0.031
				c0.021-0.022,0.044-0.044,0.065-0.065c0-0.021,0-0.043,0-0.064c0.064-0.044,0.128-0.064,0.193-0.064
				c0.065-0.022,0.119-0.043,0.162-0.065c0-0.021,0-0.043,0-0.064h0.034c0.021-0.045,0.063-0.066,0.129-0.066
				C14.935,9.908,15,9.889,15.086,9.865c0-0.02,0-0.043,0-0.063c0.065-0.045,0.141-0.065,0.226-0.065
				c0.044-0.022,0.11-0.044,0.196-0.066c0-0.021,0-0.043,0-0.065h0.032c0.044-0.021,0.098-0.03,0.162-0.03
				c0.044-0.045,0.087-0.077,0.131-0.099c0-0.021,0-0.043,0-0.065c0.086-0.021,0.162-0.031,0.226-0.031
				c0.065-0.044,0.131-0.076,0.195-0.097c0-0.022,0-0.043,0-0.065h0.065c0.043-0.021,0.097-0.033,0.163-0.033
				c0.064-0.021,0.129-0.054,0.195-0.097c0-0.022,0-0.042,0-0.064c0.13-0.022,0.248-0.032,0.357-0.032
				c0.043-0.022,0.107-0.054,0.193-0.098c0-0.021,0-0.044,0-0.065h0.032c0.043-0.022,0.098-0.031,0.163-0.031
				c0.042-0.022,0.109-0.045,0.195-0.065c0-0.044,0-0.076,0-0.098h0.033c0.021-0.021,0.053-0.032,0.097-0.032
				c0.064-0.022,0.108-0.044,0.129-0.064c0.022-0.044,0.033-0.076,0.033-0.099h0.032c0.087-0.021,0.161-0.031,0.227-0.031h0.065
				c0-0.022,0-0.045,0-0.066c0-0.021,0-0.053,0-0.096c0.064-0.021,0.15-0.033,0.26-0.033c0.042-0.021,0.097-0.033,0.162-0.033
				c0.021-0.021,0.043-0.031,0.064-0.031c0.022-0.022,0.043-0.032,0.066-0.032V8.051h0.063c0.022-0.022,0.043-0.044,0.066-0.066
				c0.151-0.021,0.314-0.042,0.486-0.065c0.043-0.064,0.076-0.106,0.097-0.128c0.216-0.022,0.442-0.044,0.682-0.065
				c0.021-0.064,0.043-0.109,0.064-0.131c0.108-0.021,0.217-0.043,0.325-0.063C20.568,7.51,20.579,7.498,20.6,7.498z M19.757,17.065
				v0.065l-0.033,0.031v0.032c-0.021,0-0.032,0.013-0.032,0.034v0.032h-0.065v0.064c-0.022,0-0.033,0.012-0.033,0.032v0.033
				l-0.033,0.031v0.065l-0.032,0.065v0.064h-0.033v0.032c-0.021,0-0.032,0.011-0.032,0.033v0.064L19.4,17.78v0.063h-0.032v0.13
				h-0.032V18.2h-0.033v0.066c-0.022,0-0.032,0.011-0.032,0.032v0.162c-0.043,0-0.066,0.012-0.066,0.032v0.163h-0.032v0.356
				l0.032,0.032v0.647c-0.193,0-0.399,0-0.615,0V19.66h-0.033v-0.097l-0.032-0.032v-0.066h-0.032v-0.032l-0.034-0.063v-0.065h-0.031
				v-0.064l-0.066-0.064v-0.065l-0.032-0.033v-0.162l-0.033-0.031v-0.194l-0.032-0.032v-0.034c0-0.064,0-0.108,0-0.129
				c0-0.042,0-0.076,0-0.097c0-0.066,0-0.109,0-0.13c0-0.044,0-0.076,0-0.099c0-0.063,0-0.107,0-0.129s0-0.043,0-0.065
				c0-0.043,0-0.075,0-0.098c0-0.02,0-0.043,0-0.064s0-0.044,0-0.064c0-0.064,0-0.107,0-0.13c0-0.021,0-0.044,0-0.064
				c0-0.043,0-0.075,0-0.097c0-0.022,0-0.045,0-0.065v-0.033h-0.032l-0.065,0.033c0,0.021-0.012,0.031-0.032,0.031l-0.13,0.163
				v0.032l-0.162,0.163v0.031l-0.033,0.032v0.064l-0.064,0.065v0.033l-0.033,0.032v0.066l-0.031,0.063v0.162l-0.032,0.066v0.26
				l0.032,0.032v0.194l0.031,0.031v0.131l0.033,0.031v0.066l0.064,0.032v0.064l0.033,0.033v0.031l0.064,0.065v0.063h0.032
				l0.13,0.099v0.032h0.031l0.131,0.129h0.032v0.033h0.032l0.033,0.031h0.032l0.066,0.034h0.031v0.064h0.034l0.032,0.033h0.032
				l0.033,0.031c0.043,0,0.076,0,0.097,0v0.033c0.021,0,0.043,0,0.065,0v0.032h0.033l0.063,0.063h0.034c0.064,0,0.129,0,0.194,0
				v0.035h0.032v0.031h0.032v0.031h0.033v0.032h0.032v0.033c0.066,0,0.121,0,0.164,0l0.032,0.065c0.043,0,0.076,0,0.097,0
				l0.033,0.031c0.022,0,0.054,0,0.098,0v0.033c0.043,0,0.075,0,0.097,0l0.033,0.033h0.032l0.033,0.031c0.193,0,0.378,0,0.551,0
				v0.065c0.13,0,0.259,0,0.389,0v-0.065c0.021,0,0.054,0,0.099,0v-0.031c0.107,0,0.226,0,0.355,0v-0.033c0.022,0,0.055,0,0.098,0
				v-0.033c0.044,0,0.086,0,0.13,0v-0.031c0.022,0,0.064,0,0.129,0v-0.065c0.022,0,0.055,0,0.098,0v-0.033h0.032v-0.032
				c0.023,0,0.054,0,0.097,0l0.032-0.031c0.023,0,0.044,0,0.066,0v-0.031c0.022,0,0.064,0,0.13,0v-0.035c0.044,0,0.076,0,0.097,0
				l0.065-0.063c0.021,0,0.044,0,0.065,0v-0.032c0.02,0,0.042,0,0.065,0l0.031-0.033c0.044,0,0.076,0,0.098,0v-0.031l0.065-0.098
				c0.022,0,0.055,0,0.098,0l0.096-0.099h0.034c0-0.022,0.01-0.032,0.031-0.032l0.064-0.031c0.022,0,0.044,0,0.066,0v-0.065
				c0.021,0,0.032-0.011,0.032-0.032c0.021,0,0.065,0,0.129,0v-0.032l0.065-0.066c0.021,0,0.042,0,0.064,0
				c0-0.042,0.021-0.063,0.065-0.063c0-0.022,0.012-0.033,0.032-0.033l0.032-0.032h0.032l0.032-0.031h0.066l0.031-0.033v-0.064
				c0-0.021,0.012-0.032,0.032-0.032v-0.033h0.032v-0.033c0-0.022,0.012-0.031,0.034-0.031v-0.162h0.032V18.85l0.065-0.033v-0.063
				h0.032V18.72c0-0.022,0.01-0.031,0.032-0.031v-0.032c0-0.023,0.011-0.034,0.032-0.034V18.59l0.033-0.063
				c0-0.022,0.021-0.033,0.064-0.033v-0.064h0.032V18.2c0-0.021-0.01-0.032-0.032-0.032v-0.097l-0.064-0.032v-0.065
				c0-0.043-0.011-0.065-0.033-0.065v-0.064l-0.032-0.032V17.78l-0.032-0.033v-0.064l-0.032-0.033v-0.032l-0.065-0.032v-0.032
				l-0.161-0.195v-0.032l-0.066-0.064h-0.032l-0.032-0.032v-0.034h-0.032l-0.098-0.063c-0.022,0-0.043,0-0.064,0l-0.065-0.098
				c-0.022-0.021-0.054-0.032-0.097-0.032c-1.038,0-2.086,0-3.146,0c-0.021,0-0.033,0.011-0.033,0.032
				C19.789,17.056,19.778,17.065,19.757,17.065z M19.076,19.953c0-0.021,0.012-0.044,0.032-0.064c0.043,0,0.096,0,0.163,0
				C19.183,19.909,19.119,19.932,19.076,19.953z M2.308,19.369c0.001-0.022,0.012-0.044,0.032-0.065
				c0.023-0.021,0.033-0.044,0.033-0.064c-0.021,0-0.044,0-0.065,0v0.033C2.308,19.294,2.308,19.325,2.308,19.369z`,
            }),
          });
        }
        function m2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 98 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M96.885,14.225c0,0.025,0,0.062,0,0.111v0.037
				c0,0.026,0,0.063,0,0.112c0,0.025,0,0.049,0,0.075c0,0.024,0,0.049,0,0.075c0,0.049,0,0.086,0,0.111v0.037
				c0,0.025,0,0.062,0,0.112c0,0.024,0,0.049,0,0.074s0,0.05,0,0.074c0,0.025,0,0.05,0,0.075c0,0.024,0,0.049,0,0.074v0.148
				c-0.075,0-0.149,0-0.223,0c-1.19,0-2.368,0-3.533,0v0.113c-0.149,0-0.298,0-0.446,0v-0.113c-1.661,0-3.322,0-4.983,0
				c0,0.026,0,0.05,0,0.075c0,0.026,0,0.062,0,0.112c0,0.024,0,0.063,0,0.112v0.037c-0.074,0-0.136,0-0.186,0v-0.074
				c-0.05,0-0.1,0-0.149,0v-0.037c0-0.024,0-0.05,0-0.075v-0.036c0-0.025,0-0.063,0-0.113c-0.149,0-0.322,0-0.52,0v0.113
				c-0.05,0-0.111,0-0.186,0v-0.113c-0.149,0-0.323,0-0.52,0c0,0.026,0,0.05,0,0.075v0.112c0,0.049,0,0.1,0,0.149
				c-0.05,0-0.113,0-0.187,0c-0.049,0-0.1,0-0.148,0v0.037c-0.05,0-0.112,0-0.186,0v-0.037c0-0.049,0-0.1,0-0.149
				c0-0.05,0-0.086,0-0.112c0-0.049,0-0.099,0-0.148c0-0.025,0-0.05,0-0.075c-2.951,0-5.889,0-8.814,0
				c-0.024,0-0.037-0.012-0.037-0.037c-0.024,0-0.037-0.013-0.037-0.037c-0.024,0-0.049,0-0.074,0h-0.111v0.26
				c-0.124,0-0.236,0-0.335,0c-4.462,0-8.925-0.012-13.387-0.038v0.41c-0.024,0-0.049,0.012-0.074,0.037v0.596
				c0.049,0,0.087,0,0.111,0v0.333c-0.024,0-0.062,0-0.111,0l-0.037,0.038h-0.038c0,0.024-0.012,0.037-0.038,0.037v-0.037
				c0.025,0,0.038-0.013,0.038-0.038c-0.124,0-0.272,0-0.446,0v0.075c-0.124,0-0.248,0-0.372,0v-0.335c-0.249,0-0.483,0-0.706,0
				v0.298c-0.1,0-0.21,0-0.334,0v-0.298c-0.149,0-0.31,0-0.483,0v0.26c-0.149,0-0.273,0-0.372,0v-0.26c-0.174,0-0.36,0-0.559,0v0.26
				c-0.148,0-0.272,0-0.371,0v-0.26c-0.174,0-0.335,0-0.483,0v0.26c-0.15,0-0.273,0-0.372,0v-0.26c-0.174,0-0.36,0-0.559,0v0.26
				c-0.099,0-0.209,0-0.333,0v-0.26h-0.15c-0.098,0-0.197,0-0.296,0v0.335c-0.124,0-0.236,0-0.334,0v-0.335c-0.174,0-0.36,0-0.559,0
				v0.26c-0.098,0-0.21,0-0.333,0v-0.26c-0.15,0-0.311,0-0.483,0v0.26c-0.149,0-0.286,0-0.41,0v-0.26c-0.174,0-0.347,0-0.521,0v0.26
				c-0.125,0-0.26,0-0.409,0v-0.26c-0.174,0-0.348,0-0.521,0v0.223c-0.125,0-0.235,0-0.333,0v-0.223c-0.15,0-0.324,0-0.522,0v0.26
				c-0.099,0-0.21,0-0.334,0v-0.26c-0.149,0-0.311,0-0.483,0v0.26c-0.125,0-0.236,0-0.335,0v-0.26c-0.198,0-0.384,0-0.558,0v0.223
				c-0.124,0-0.261,0-0.409,0v-0.223c-0.149,0-0.31,0-0.483,0v0.26c-0.125,0-0.236,0-0.334,0v-0.26c-0.198,0-0.41,0-0.633,0v0.26
				c-0.396,0-0.781,0-1.152,0v-0.26c-0.149,0-0.285,0-0.41,0v0.112l-0.037,0.037v0.037l-0.038,0.037v0.075
				c0,0.024-0.012,0.037-0.038,0.037c-0.025,0-0.037,0.012-0.037,0.037h-0.037c-0.099,0-0.198,0-0.297,0
				c-0.075,0.025-0.149,0.038-0.223,0.038c-0.025,0.024-0.063,0.037-0.112,0.037l-0.037,0.037c-0.024,0.025-0.061,0.037-0.112,0.037
				l-0.037,0.038h-0.037c-0.074,0.024-0.148,0.037-0.223,0.037c-0.05,0-0.1,0.012-0.149,0.036l-0.037,0.037v0.037
				c-0.025,0-0.05,0.013-0.074,0.039l-0.075,0.037c0,0.024-0.012,0.037-0.037,0.037l-0.074,0.074h-0.037
				c0,0.024-0.013,0.037-0.038,0.037v0.074l-0.037,0.037H45.42v0.037c0,0.025,0,0.05,0,0.074v0.038c0,0.025,0,0.049,0,0.074v0.52
				c0,0.026,0,0.05,0,0.074c0,0.05,0,0.1,0,0.149c0,0.05,0,0.088,0,0.112v0.148c0,0.05,0,0.1,0,0.149c0,0.05,0,0.087,0,0.112
				c0,0.05,0,0.1,0,0.148s0,0.099,0,0.149c0,0.025,0,0.05,0,0.075v0.037l0.112,0.11h0.037c0.024,0,0.049,0.014,0.074,0.039
				c0.024,0,0.037,0.012,0.037,0.037l0.038,0.037c0.024,0,0.037,0.012,0.037,0.037v0.706h-0.037c0,0.024-0.013,0.038-0.038,0.038
				v0.037h-0.037c-0.074,0-0.162,0-0.26,0v0.111c-0.024,0-0.075,0-0.149,0c-0.024,0-0.049,0-0.074,0v0.038c0,0.075,0,0.148,0,0.223
				c0,0.074,0,0.148,0,0.223c0,0.049,0,0.112,0,0.187c0,0.099,0,0.174,0,0.223c0,0.074,0,0.149,0,0.224c0,0.073,0,0.148,0,0.222
				c0,0.074,0,0.15,0,0.224s0,0.148,0,0.223c0,0.074,0,0.136,0,0.187c0,0.074,0,0.161,0,0.259c0,0.05,0,0.112,0,0.186
				c0,0.075,0,0.148,0,0.224c0,0.074,0,0.148,0,0.222s0,0.149,0,0.223c0,0.075,0,0.149,0,0.224c0,0.049,0,0.11,0,0.186
				c0,0.098,0,0.174,0,0.223c0,0.073,0,0.149,0,0.223c0,0.074,0,0.149,0,0.223c0,0.075,0,0.149,0,0.223c0,0.049,0,0.124,0,0.223
				c0,0.074,0,0.138,0,0.186c0,0.074,0,0.162,0,0.261c0,0.05,0,0.111,0,0.186c0,0.074,0,0.149,0,0.224c0,0.074,0,0.148,0,0.223
				c0,0.074,0,0.136,0,0.186c0,0.099,0,0.186,0,0.26c0,0.049,0,0.112,0,0.187c0,0.098,0,0.172,0,0.222c0,0.075,0,0.149,0,0.223
				c0,0.049,0,0.124,0,0.223c0,0.075,0,0.137,0,0.187c0,0.049,0,0.099,0,0.148v0.112c0,0.073,0,0.136,0,0.186v0.148
				c0,0.025,0,0.062,0,0.111c0,0.026,0,0.05,0,0.075c0.025,0,0.05,0,0.074,0v0.223c-2.157,0-4.314,0-6.47,0c-0.05,0-0.099,0-0.148,0
				c-0.025,0-0.062,0-0.113,0v-0.074c0-0.025,0-0.049,0-0.074s0-0.05,0-0.075v-0.075c0-0.024,0-0.049,0-0.074v-0.037
				c0-0.025,0-0.049,0-0.075v-0.036c0-0.025,0-0.05,0-0.075h-0.036v-0.038c-0.1,0-0.199,0-0.297,0v-0.446
				c0.024,0,0.049-0.013,0.074-0.038c0-0.099,0-0.173,0-0.223c0-0.075,0-0.149,0-0.223c0-0.075,0-0.149,0-0.224
				c0-0.073,0-0.147,0-0.223c0-0.05,0-0.124,0-0.222c0-0.074,0-0.137,0-0.186c0-0.074,0-0.161,0-0.261c0-0.049,0-0.111,0-0.186
				c0-0.074,0-0.149,0-0.223s0-0.149,0-0.224c0-0.074,0-0.135,0-0.186c0-0.098,0-0.185,0-0.26c0-0.049,0-0.111,0-0.185
				c0-0.1,0-0.174,0-0.224c0-0.074,0-0.148,0-0.224c0-0.073,0-0.147,0-0.222c0-0.074,0-0.149,0-0.222c0-0.05,0-0.125,0-0.225
				c0-0.074,0-0.135,0-0.186c0-0.074,0-0.162,0-0.26c0-0.05,0-0.112,0-0.186c0-0.075,0-0.148,0-0.223c0-0.074,0-0.149,0-0.223
				c0-0.074,0-0.137,0-0.187c0-0.099,0-0.186,0-0.261c0-0.049,0-0.11,0-0.186c0-0.074,0-0.135,0-0.186c-0.05,0-0.099,0-0.149,0
				c-0.1,0-0.186,0-0.261,0h-0.036c-0.025,0-0.05,0.013-0.075,0.038c-0.025,0-0.038,0.013-0.038,0.038h-0.037
				c-0.024,0-0.061,0.012-0.111,0.036c-0.05,0-0.1,0.012-0.148,0.038v0.148c-1.587,0.025-3.173,0.038-4.76,0.038
				c-0.149,0-0.273,0-0.373,0v0.186l-0.074,0.074v0.038l-0.038,0.037v0.038h-0.037l-0.036,0.038v0.074h-0.038
				c0,0.024-0.012,0.037-0.037,0.037v0.074c-0.024,0-0.038,0.012-0.038,0.038v0.074h-0.037l-0.075,0.075v0.037
				c-0.024,0-0.036,0.012-0.036,0.037V23h-0.038v0.075h-0.037v0.036c-0.024,0-0.037,0.013-0.037,0.037v0.039h-0.075v0.074h0.037
				v0.111l0.038,0.037v0.038c0.024,0,0.037,0.012,0.037,0.036v0.038h0.037v0.037c0.025,0,0.038,0.012,0.038,0.037v0.446
				c-0.025,0.025-0.049,0.037-0.075,0.037c-0.173,0-0.36,0-0.557,0l-0.038,0.037v0.075c-0.024,0-0.037,0.013-0.037,0.038v0.037
				c0,0.024-0.012,0.037-0.037,0.037l-0.037,0.036v0.039h-0.038v0.038c0,0.024-0.012,0.037-0.037,0.037v0.037l-0.037,0.036v0.038
				h-0.037V24.6h-0.037v0.073l-0.037,0.038v0.037H30.77v0.038c0,0.025-0.013,0.036-0.037,0.036v0.038h-0.038v0.037
				c0,0.025-0.012,0.038-0.038,0.038c0,0.024-0.012,0.037-0.037,0.037v0.076h-0.038v0.185c0,0.025-0.012,0.038-0.037,0.038
				c0,0.026-0.013,0.038-0.038,0.038v0.037c-0.024,0.024-0.049,0.037-0.074,0.037v0.074h-0.037v0.075l-0.037,0.038v0.037
				c0,0.025-0.013,0.037-0.038,0.037v0.037c0,0.024-0.012,0.037-0.037,0.037v0.039l-0.037,0.036c0,0.025-0.012,0.038-0.037,0.038
				v0.111c0,0.025-0.013,0.038-0.037,0.038l-0.039,0.037c0,0.024-0.011,0.037-0.036,0.037v0.037l-0.038,0.038v0.037h-0.036v0.038
				c-0.026,0.024-0.051,0.038-0.076,0.038v0.037l-0.037,0.038c0,0.024-0.013,0.037-0.037,0.037v0.038
				c0,0.024-0.012,0.037-0.037,0.037v0.037c0,0.024-0.012,0.037-0.038,0.037v0.111c-0.024,0-0.037,0.012-0.037,0.037v0.038h-0.038
				l0.038,0.036v0.037c0.024,0,0.037,0.013,0.037,0.039v0.037h0.038v0.483l-0.038,0.038c0,0.024-0.013,0.037-0.037,0.037v0.037
				h-0.038V27.5l-0.038,0.037v0.075l-0.037,0.038c-0.024,0-0.05,0-0.074,0v0.037c-0.174,0-0.36,0-0.559,0
				c-0.023-0.024-0.061-0.037-0.111-0.037c-0.025,0-0.05-0.013-0.075-0.038c-0.024-0.025-0.049-0.038-0.073-0.038
				c-0.025-0.025-0.063-0.037-0.112-0.037c-0.074-0.024-0.137-0.037-0.186-0.037v-0.037c-0.075-0.024-0.149-0.037-0.223-0.037
				c-0.074-0.025-0.137-0.037-0.186-0.037s-0.099,0-0.148,0c-0.05-0.026-0.087-0.037-0.111-0.037
				c-0.075-0.025-0.15-0.038-0.224-0.038c-0.024-0.025-0.062-0.038-0.111-0.038c-0.025,0-0.062-0.011-0.112-0.037
				c-0.05-0.024-0.086-0.038-0.11-0.038c-0.051-0.024-0.101-0.037-0.149-0.037c-0.025,0-0.051-0.013-0.075-0.039
				c-0.075-0.024-0.137-0.036-0.186-0.036c-0.049-0.025-0.099-0.038-0.148-0.038c-0.025,0-0.063,0-0.112,0v-0.037
				c-0.05-0.025-0.1-0.037-0.148-0.037c-0.05-0.024-0.087-0.038-0.113-0.038c-0.049,0-0.098-0.012-0.148-0.037
				c-0.049-0.024-0.1-0.036-0.149-0.036c-0.024-0.026-0.062-0.038-0.111-0.038c-0.049-0.025-0.1-0.037-0.15-0.037
				c-0.074,0-0.124-0.012-0.148-0.039c-0.024-0.024-0.049-0.037-0.074-0.037c-0.049-0.024-0.087-0.036-0.111-0.036
				c-0.05,0-0.1,0-0.15,0c-0.073-0.026-0.135-0.038-0.186-0.038l-0.036-0.037v-0.447h0.036v-0.148c0.025,0,0.038-0.012,0.038-0.037
				h0.038c0-0.025,0.012-0.038,0.038-0.038V25.9l0.037-0.037v-0.037c0.024-0.025,0.049-0.038,0.074-0.038v-0.111h0.037v-0.037
				c0.025,0,0.051,0,0.075,0v-0.074h0.037v-0.038c0.025-0.024,0.05-0.038,0.074-0.038v-0.075h0.037c0.025,0,0.037-0.012,0.037-0.037
				v-0.037h0.038v-0.074h0.037v-0.074c0.024,0,0.037-0.013,0.037-0.038v-0.036h0.037v-0.038c0.025-0.025,0.05-0.037,0.075-0.037
				v-0.076h0.038c0-0.024,0.012-0.037,0.037-0.037l0.037-0.038V24.86l0.038-0.038c0-0.024,0.013-0.036,0.037-0.036v-0.149
				c0.025,0,0.037-0.012,0.037-0.037v-0.038h0.075v-0.074l0.074-0.074v-0.076c0.026,0,0.037-0.011,0.037-0.036
				c0.025,0,0.038-0.013,0.038-0.037h0.036c0-0.024,0.013-0.037,0.038-0.037v-0.112l0.075-0.074v-0.037l0.074-0.074
				c0.025,0,0.037-0.013,0.037-0.037v-0.038h0.076v-0.075l0.037-0.037v-0.076l0.038-0.037v-0.074h0.037v-0.037h0.038l0.074-0.038
				v-0.074l0.037-0.037v-0.074h0.037v-0.037c0.025,0,0.037-0.012,0.037-0.037v-0.037h0.037l0.038-0.039v-0.073h0.037v-0.15h0.038
				l0.037-0.037v-0.075c0.025,0,0.05,0,0.074,0h0.039v-0.112h0.036c0-0.024,0.013-0.037,0.037-0.037v-0.111h0.037v-0.037
				l0.037-0.038h0.038v-0.075c0-0.024,0.012-0.038,0.037-0.038v-0.111l0.036-0.037c0-0.024,0.014-0.037,0.039-0.037v-0.074h0.075
				v-0.074c0.024,0,0.049,0,0.073,0c0-0.024,0.013-0.038,0.038-0.038v-0.038c0.024,0,0.037-0.012,0.037-0.037v-0.111l0.038-0.038
				h0.036l0.075-0.074v-0.074c0.024,0,0.05,0,0.075,0c0-0.025,0.012-0.038,0.037-0.038v-0.075h0.037v-0.036l0.037-0.038v-0.037
				h0.037c0.025,0,0.038-0.012,0.038-0.037v-0.038l0.037-0.036c0-0.026,0.013-0.038,0.038-0.038v-0.073h0.038v-0.037l0.036-0.037
				c0.025,0,0.037-0.014,0.037-0.039h0.038v-0.037l0.038-0.037v-0.075h0.037V20.77h0.037v-0.038l0.037-0.037
				c0.025,0,0.038-0.013,0.038-0.037h0.037l0.074-0.075v-0.038c0.025,0,0.038-0.013,0.038-0.037v-0.037h0.038v-0.075
				c0.024,0,0.037-0.013,0.037-0.038l0.037-0.037v-0.037l0.039-0.038v-0.037h0.037l0.037-0.039c0-0.024,0.013-0.037,0.037-0.037
				l0.037-0.037v-0.038c0.025-0.024,0.049-0.036,0.075-0.036v-0.038h0.074v-0.112h0.038v-0.112l0.037-0.037v-0.074h0.037
				c0-0.025,0.013-0.037,0.037-0.037v-0.298h0.038V19.17l-0.038-0.038v-0.148c-0.024-0.025-0.05-0.037-0.074-0.037V18.91
				c0-0.025-0.012-0.037-0.037-0.037v-0.037l-0.038-0.038c0-0.024-0.012-0.038-0.037-0.038v-0.037l-0.038-0.037h-0.037l-0.112-0.074
				v-0.038H28.91c-0.025-0.024-0.05-0.037-0.075-0.037l-0.037-0.037v-0.075c-0.025-0.024-0.062-0.036-0.112-0.036l-0.037-0.038
				c0-0.025-0.013-0.038-0.038-0.038c-0.024-0.024-0.049-0.037-0.075-0.037c0-0.024-0.012-0.037-0.037-0.037h-0.037v-0.036
				c0-0.026-0.013-0.038-0.037-0.038c-0.026,0-0.038-0.012-0.038-0.037c-0.025-0.024-0.049-0.037-0.075-0.037
				c-1.189-0.025-2.367-0.038-3.532-0.038v-0.037c-0.025,0-0.038-0.013-0.038-0.038v-0.037c0-0.024-0.013-0.037-0.037-0.037
				l-0.148-0.148c-0.024,0-0.049-0.013-0.074-0.038h-0.038c-0.025,0-0.05,0-0.074,0c0-0.025-0.012-0.038-0.037-0.038
				c-0.049,0-0.087,0-0.112,0v0.038c-0.024,0-0.049,0-0.074,0h-0.074c-0.348,0-0.67,0-0.968,0v-0.074
				c-0.769,0-1.537,0.013-2.305,0.037c-0.025,0.025-0.05,0.038-0.075,0.038c-0.199,0-0.384,0-0.557,0h-0.038l-0.074,0.074
				c-0.024,0-0.038,0.013-0.038,0.038c-0.024,0-0.036,0.012-0.036,0.036h-0.038c0,0.025-0.012,0.038-0.037,0.038h-0.037v0.037
				l-0.038,0.037c0,0.025-0.012,0.038-0.036,0.038c0,0.025-0.013,0.037-0.039,0.037v0.038l-0.036,0.037
				c0,0.025-0.012,0.037-0.038,0.037v0.074c-0.025,0-0.049,0-0.074,0l-0.039,0.037H19.54v0.037l-0.038,0.038
				c-0.024,0-0.037,0.012-0.037,0.038c-0.025,0-0.037,0.012-0.037,0.036h-0.037c-0.025,0.025-0.05,0.037-0.075,0.037v0.038
				c-0.024,0-0.037,0.012-0.037,0.037h-0.036v0.037c-0.026,0.026-0.05,0.038-0.076,0.038c-0.024,0-0.049,0-0.074,0
				c-0.025,0-0.037,0.012-0.037,0.037h-0.037v0.074l-0.037,0.037v0.038c0,0.025-0.013,0.038-0.038,0.038v0.037
				c-0.025,0-0.037,0.012-0.037,0.037c-0.025,0-0.038,0.013-0.038,0.038h-0.037c0,0.024-0.013,0.037-0.037,0.037v0.037
				c-0.026,0-0.038,0.013-0.038,0.038H18.72v0.074c-0.024,0-0.036,0.013-0.036,0.038l-0.075,0.074v0.037
				c0,0.025-0.012,0.037-0.038,0.037h-0.037c-0.024,0-0.037,0.013-0.037,0.038h-0.037c0,0.024-0.013,0.037-0.037,0.037v0.037
				c-0.025,0-0.038,0.012-0.038,0.038c-0.024,0-0.037,0.011-0.037,0.035h-0.037v0.039l-0.037,0.037v0.037
				c-0.025,0-0.038,0.012-0.038,0.037h-0.074v0.036c-0.025,0-0.037,0.014-0.037,0.038v0.037h-0.038v0.039h-0.037
				c0,0.023-0.012,0.037-0.038,0.037c-0.024,0-0.049,0.012-0.074,0.037h-0.038v0.037c0,0.025-0.013,0.037-0.037,0.037v0.038h-0.038
				v0.038l-0.036,0.036V20.1l-0.039,0.037c0,0.025,0.013,0.05,0.039,0.075v0.037c-0.025,0.025-0.039,0.05-0.039,0.075
				s0.013,0.037,0.039,0.037c0,0.024,0,0.05,0,0.075c0,0.024,0,0.05,0,0.074c0,0.024,0,0.049,0,0.075c0,0.025,0,0.049,0,0.075v0.074
				c0,0.025,0,0.049,0,0.075c0,0.025,0,0.049,0,0.074s0,0.05,0,0.074c0,0.025,0,0.05,0,0.074v0.037c0,0.025,0,0.051,0,0.076
				c0,0.024,0,0.049,0,0.074v0.036c-0.025,0.025-0.051,0.05-0.075,0.074c0,0.025,0,0.05,0,0.075c-0.024,0-0.05,0-0.074,0
				c0,0.024,0,0.049,0,0.075c-0.025,0.024-0.049,0.049-0.074,0.074c-0.025,0.025-0.05,0.037-0.074,0.037
				c0,0.025-0.013,0.038-0.038,0.038s-0.062,0.012-0.111,0.037c-0.025,0-0.05,0-0.075,0c-0.024-0.025-0.049-0.037-0.074-0.037
				c-0.024,0-0.037-0.013-0.037-0.038c-2.207,0-4.413,0-6.62,0c-0.769,0-1.548,0-2.343,0c-0.694,0-1.388,0-2.083,0V21.55
				c-0.025,0-0.049,0-0.074,0v-0.074H6.004c0-0.026-0.013-0.038-0.038-0.038V21.29c-0.024,0-0.062,0-0.11,0v-0.038
				c0-0.073,0-0.135,0-0.186v-0.037c-0.084-0.024-0.159-0.037-0.224-0.037c0-0.025,0-0.05,0-0.075v-0.037c0-0.025,0-0.049,0-0.074
				V20.77c0-0.025,0-0.05,0-0.074c-0.716,0-1.422,0-2.119,0c0,0.049,0,0.099,0,0.148c0,0.074,0,0.149,0,0.222
				c0,0.076,0,0.15,0,0.224s0,0.136,0,0.186c0,0.074,0,0.161,0,0.259c0,0.05,0,0.113,0,0.187c0,0.075,0,0.148,0,0.223
				c0,0.075,0,0.149,0,0.223c0,0.075,0,0.15,0,0.224c0,0.074,0,0.149,0,0.223c0,0.05,0,0.111,0,0.186c0,0.025,0,0.05,0,0.075v0.408
				c-0.125,0-0.248,0-0.372,0v-0.036c-0.322-0.025-0.669-0.038-1.042-0.038v0.26c-0.025,0.026-0.049,0.038-0.075,0.038v0.372H1.988
				c-0.025,0-0.05,0-0.075,0c-0.147,0-0.31,0-0.482,0c0.024,0.001,0.036,0.013,0.036,0.037l0.037,0.037H1.467
				c-0.049,0-0.086,0-0.111,0L1.318,24.19c-0.024,0-0.049,0-0.074,0c-0.1,0-0.174,0-0.224,0c-0.123,0-0.235,0-0.334,0v-0.038
				c0-0.024,0-0.062,0-0.111c0-0.025,0-0.062,0-0.111v-0.075c0-0.05,0-0.1,0-0.149c0-0.025,0-0.063,0-0.111c0-0.025,0-0.049,0-0.074
				c0-0.05,0-0.086,0-0.112c0-0.049,0-0.087,0-0.111c0-0.049,0-0.086,0-0.111c0-0.026,0-0.063,0-0.111c0-0.05,0-0.087,0-0.113
				c0-0.049,0-0.086,0-0.111c0-0.024,0-0.062,0-0.111c0-0.026,0-0.062,0-0.112c0-0.025,0-0.062,0-0.111c0-0.025,0-0.05,0-0.075
				c0-0.05,0-0.099,0-0.148c0-0.025,0-0.063,0-0.111c0.049,0,0.111,0,0.186,0v-0.298c0-0.024,0.013-0.036,0.037-0.036v-0.038
				c0-0.05,0-0.124,0-0.223c0-0.075,0-0.137,0-0.186c0-0.075,0-0.149,0-0.223c0-0.074,0-0.149,0-0.224s0-0.148,0-0.223
				c0-0.074,0-0.148,0-0.223c0-0.074,0-0.136,0-0.186c0-0.075,0-0.162,0-0.261c0-0.049,0-0.111,0-0.186c0-0.073,0-0.149,0-0.223
				c0-0.074,0-0.15,0-0.223c0-0.074,0-0.149,0-0.224c0-0.074,0-0.148,0-0.223c0-0.049,0-0.112,0-0.186c0-0.099,0-0.173,0-0.223
				c0-0.074,0-0.149,0-0.223c0-0.075,0-0.148,0-0.223c0-0.074,0-0.149,0-0.223c0-0.074,0-0.148,0-0.224c0-0.075,0-0.137,0-0.186
				c0-0.075,0-0.161,0-0.26c0-0.049,0-0.112,0-0.186c0-0.075,0-0.149,0-0.224s0-0.149,0-0.223c0-0.074,0-0.136,0-0.186
				c0-0.099,0-0.186,0-0.261c0-0.05,0-0.111,0-0.186c0-0.099,0-0.172,0-0.223c0-0.074,0-0.148,0-0.223c0-0.073,0-0.148,0-0.224
				c0-0.074,0-0.148,0-0.222H0.872v-0.038l-0.038-0.037c-0.025-0.024-0.037-0.05-0.037-0.074c0-0.025,0-0.049,0-0.075
				c0-0.024,0-0.048,0-0.074v-0.037c0-0.025,0-0.05,0-0.075c0-0.023,0-0.048,0-0.073c0-0.026,0-0.051,0-0.076v-0.037
				c0-0.024,0-0.049,0-0.074v-0.039c0-0.025,0-0.049,0-0.073c0-0.025,0-0.049,0-0.075c0-0.024,0-0.049,0-0.075
				c0-0.024,0-0.049,0-0.074v-0.074c0-0.025,0-0.049,0-0.074c0-0.026,0-0.05,0-0.075c0-0.025,0-0.05,0-0.075s0-0.05,0-0.075v-0.037
				c0-0.025,0-0.049,0-0.074s0-0.049,0-0.075v-0.074H0.723c-0.025,0-0.037-0.013-0.037-0.038v-0.186c0-0.025,0-0.051,0-0.075v-0.26
				c-0.05,0-0.112,0-0.187,0v-0.335c0.272,0,0.546,0,0.818,0v0.037c0.273,0,0.534,0,0.781,0v0.335c-0.025,0-0.062,0-0.111,0
				l0.036,0.037c0.472,0,0.931,0,1.377,0v0.261c0.049,0,0.086,0,0.111,0v0.038c0,0.05,0,0.111,0,0.186c0,0.099,0,0.173,0,0.223
				c0,0.075,0,0.149,0,0.223c0,0.075,0,0.149,0,0.225c0,0.074,0,0.148,0,0.222c0,0.05,0,0.125,0,0.224c0,0.075,0,0.136,0,0.186
				c0,0.074,0,0.16,0,0.26c0,0.05,0,0.112,0,0.186c0,0.075,0,0.148,0,0.223s0,0.149,0,0.224c0,0.074,0,0.135,0,0.186
				c0,0.099,0,0.187,0,0.26c0,0.049,0,0.112,0,0.186c0.768,0,1.549,0,2.343,0c0-0.074,0-0.148,0-0.223c0-0.075,0-0.148,0-0.223
				c0-0.051,0-0.125,0-0.223c0-0.05,0-0.099,0-0.148c0.049,0,0.086,0,0.11,0c0.075,0,0.149,0,0.224,0c1.115,0,2.219,0,3.309,0
				c0-0.051,0-0.101,0-0.15c0-0.049,0-0.099,0-0.148s0-0.086,0-0.112c0-0.049,0-0.099,0-0.148c0-0.051,0-0.1,0-0.149
				c0-0.025,0-0.063,0-0.111c0-0.05,0-0.101,0-0.149v-0.037c-0.942,0-1.884,0-2.826,0v-0.075c-0.125,0-0.248,0-0.372,0v-0.445
				c-0.025,0-0.037-0.013-0.037-0.039v-0.297H6.228v-0.037c0-0.049,0-0.111,0-0.186c0-0.025,0-0.061,0-0.111
				c0-0.076,0-0.137,0-0.187c0-0.074,0-0.125,0-0.148c0-0.049,0-0.112,0-0.187c0-0.05,0-0.099,0-0.148c0-0.05,0-0.111,0-0.186
				c0-0.05,0-0.088,0-0.112c0-0.074,0-0.136,0-0.185c0-0.075,0-0.137,0-0.187c0-0.049,0-0.1,0-0.149c0-0.049,0-0.11,0-0.186
				c0-0.024,0-0.074,0-0.148c0-0.05,0-0.099,0-0.149c0-0.049,0-0.098,0-0.149c0-0.074,0-0.136,0-0.187c0-0.049,0-0.098,0-0.147
				c0-0.05,0-0.111,0-0.186c-0.025,0-0.038-0.013-0.038-0.038v-0.334c0-0.024,0.012-0.037,0.038-0.037V10.06
				c0.049,0,0.099,0,0.147,0V9.911c0.05,0,0.1-0.013,0.149-0.038V9.8c0.075,0,0.149-0.012,0.223-0.038
				c0.025,0,0.038-0.013,0.038-0.038c0.124,0,0.248,0,0.373,0c3.147,0,6.284,0,9.406,0c0.1,0,0.187,0,0.261,0
				c0.446-0.025,0.893-0.037,1.339-0.037H18.2V9.651c0.248,0.025,0.508,0.037,0.782,0.037c0.222,0.024,0.433,0.037,0.632,0.037
				h0.222c0.372,0,0.746,0,1.116,0v0.038c0.075,0,0.174,0,0.299,0L21.287,9.8h0.037l0.038,0.038c0,0.024,0.013,0.036,0.037,0.036
				v0.484c-0.024,0-0.037,0.012-0.037,0.037h-0.038v0.075l-0.037,0.037v0.074c-0.024,0-0.036,0.012-0.036,0.038l-0.037,0.037
				c0,0.024-0.013,0.038-0.039,0.038c0,0.024-0.012,0.036-0.037,0.036l-0.073,0.075v0.037l-0.076,0.073v0.037l-0.149,0.149h-0.037
				v0.076l-0.075,0.036v0.038l-0.074,0.111h-0.037v0.037l-0.074,0.075v0.037l-0.112,0.074v0.039c-0.025,0-0.037,0.012-0.037,0.037
				v0.036c0,0.025-0.013,0.038-0.037,0.038v0.075c-0.025,0-0.051,0-0.076,0c0,0.023-0.013,0.037-0.036,0.037
				c0,0.024-0.012,0.037-0.038,0.037l-0.036,0.037c-0.025,0-0.05,0-0.075,0v0.075c-0.025,0-0.037,0.013-0.037,0.037v0.037h-0.038
				v0.112c-0.024,0-0.036,0.013-0.036,0.037l-0.075,0.074h-0.037v0.038c-0.025,0-0.038,0.012-0.038,0.038L19.8,12.403
				c0,0.025-0.013,0.037-0.039,0.037v0.037c-0.024,0-0.036,0.013-0.036,0.037l-0.075,0.111h-0.036v0.038l-0.075,0.074v0.037h-0.038
				v0.075c-0.024,0-0.037,0.013-0.037,0.038v0.037h-0.037c0,0.024-0.013,0.037-0.037,0.037h-0.038c-0.025,0-0.037,0.012-0.037,0.038
				l-0.037,0.037v0.037h-0.036l-0.039,0.037v0.037h-0.038c0,0.024-0.012,0.037-0.037,0.037l-0.074,0.076h-0.037v0.037l-0.037,0.036
				v0.038h-0.038v0.037l-0.037,0.038v0.038l-0.074,0.074h-0.037l-0.076,0.074c-0.024,0-0.036,0.012-0.036,0.037H18.61l-0.112,0.149
				h-0.037v0.038c-0.025,0-0.037,0.012-0.037,0.036v0.039c-0.049,0-0.087,0-0.112,0l-0.037,0.036c0,0.025-0.013,0.038-0.038,0.038
				L18.2,14.038c-0.024,0-0.05,0-0.074,0c0,0.025-0.013,0.038-0.038,0.038c-0.025,0.025-0.048,0.038-0.074,0.038l-0.036,0.036v0.038
				h-0.076c0,0.025-0.013,0.037-0.037,0.037l-0.074,0.075h-0.039v0.036c-0.025,0.025-0.049,0.037-0.074,0.037h-0.037
				c-0.049,0-0.086,0-0.112,0v0.039c-0.049,0-0.087,0-0.111,0c-1.314,0-2.628,0-3.942,0v0.11l-0.037,0.038v0.111l-0.112,0.075
				c0,0.023,0,0.049,0,0.074s0,0.05,0,0.075v0.037c0,0.024,0,0.05,0,0.074v0.075c0,0.024,0,0.049,0,0.074v0.037
				c0,0.025,0,0.05,0,0.075c0,0.024,0,0.049,0,0.073v0.038c0,0.024,0,0.05,0,0.075c0.942,0,1.859,0,2.752,0c0.62,0,1.228,0,1.821,0
				h0.038c0-0.025,0.012-0.039,0.038-0.039v-0.037c0.024,0,0.036-0.012,0.036-0.038h0.038c0.024,0,0.049-0.012,0.074-0.037
				c0.024,0,0.037-0.012,0.037-0.036H18.2c0-0.025,0.013-0.038,0.037-0.038v-0.037c0.025,0,0.038-0.012,0.038-0.037
				c0.024,0,0.037-0.013,0.037-0.037h0.037c0-0.025,0.013-0.037,0.037-0.037h0.038l0.074-0.075h0.037
				c0-0.024,0.012-0.037,0.037-0.037v-0.074c0.025,0,0.038-0.013,0.038-0.039v-0.037c0-0.024,0.012-0.037,0.037-0.037v-0.037h0.038
				c0.024,0,0.036-0.013,0.036-0.038l0.038-0.038v-0.073c0.025,0,0.038-0.014,0.038-0.038h0.037
				c0.025-0.026,0.049-0.038,0.074-0.038v-0.037c0.024,0,0.049-0.013,0.075-0.037v-0.037c0-0.026,0.013-0.039,0.037-0.039v-0.037
				l0.037-0.036h0.037c0-0.025,0.012-0.037,0.037-0.037v-0.075c0.025,0,0.037-0.012,0.037-0.038h0.038v-0.074
				c0.025,0,0.039-0.012,0.039-0.038h0.036l0.037-0.037v-0.038c0-0.024,0.012-0.036,0.037-0.036v-0.075h0.038l0.037-0.038
				c0.024-0.024,0.049-0.037,0.073-0.037v-0.037l0.038-0.038h0.036c0-0.023,0.013-0.037,0.039-0.037h0.036
				c0.025,0,0.038-0.013,0.038-0.037s0.013-0.037,0.038-0.037v-0.037h0.036c0-0.025,0.013-0.038,0.039-0.038v-0.074
				c0.024,0,0.036-0.013,0.036-0.038c0.026,0,0.038-0.012,0.038-0.037l0.037-0.038c0.024,0,0.05,0,0.075,0v-0.036l0.036-0.037
				v-0.076c0.025,0,0.038-0.013,0.038-0.037c0.024,0,0.037-0.013,0.037-0.037v-0.111h0.037l0.038-0.038
				c0-0.025,0.012-0.037,0.036-0.037v-0.037c0.026,0,0.038-0.012,0.038-0.038h0.036v-0.037l0.037-0.038v-0.037
				c0.025,0,0.039-0.012,0.039-0.037l0.037-0.037h0.037v-0.038h0.037c0.025,0,0.037-0.012,0.037-0.037l0.077-0.074v-0.037
				c0.024,0,0.036-0.013,0.036-0.037c0.024,0,0.037-0.012,0.037-0.037h0.037c0-0.025,0.013-0.037,0.038-0.037v-0.075h0.038
				c0-0.025,0.012-0.038,0.037-0.038c0-0.024,0.013-0.037,0.037-0.037c0.025,0,0.038-0.012,0.038-0.037
				c0.024,0,0.037-0.012,0.037-0.037h0.037c0-0.025,0.012-0.037,0.038-0.037v-0.075c0.025,0,0.038-0.013,0.038-0.037
				c0.025,0,0.038-0.013,0.038-0.038v-0.037c0.023,0,0.036-0.012,0.036-0.037c0.024,0,0.037-0.012,0.037-0.037h0.037
				c0.025-0.026,0.05-0.037,0.076-0.037V11.77l0.036-0.036v-0.038h0.037c0-0.024,0.012-0.036,0.038-0.036
				c0-0.025,0.013-0.037,0.037-0.037v-0.039h0.038v-0.11c0.024,0,0.037-0.013,0.037-0.038h0.038c0.075,0,0.136,0,0.186,0v-0.038
				c0.224,0,0.446,0,0.669,0h0.038c0.099,0,0.211,0,0.334,0c0.05,0,0.087,0,0.112,0c0.049,0,0.099,0,0.148,0
				c0.074,0,0.136,0,0.186,0h0.037c0.273,0,0.545,0,0.817,0h0.298v-0.037h0.037v-0.038l0.037-0.037V11.25l0.038-0.038h0.075v-0.036
				c0-0.025,0.013-0.051,0.037-0.076c0-0.024,0.012-0.05,0.037-0.073c0-0.025,0-0.05,0-0.076c0-0.023,0-0.049,0-0.074v-0.073
				c0-0.025,0-0.05,0-0.075c0-0.024,0-0.05,0-0.074c0-0.025,0-0.05,0-0.075c0.025-0.025,0.05-0.049,0.075-0.074
				c0.025,0,0.05,0,0.074,0h0.038V10.32c0.025,0,0.038-0.012,0.038-0.037c0.049-0.025,0.086-0.038,0.111-0.038
				c0.571,0,1.14,0,1.711,0V9.8c-0.42,0-0.855,0-1.302,0c-0.075,0-0.161,0-0.261,0c-0.024,0-0.048,0-0.073,0V9.093
				c0.073,0,0.148,0,0.223,0c0.694,0,1.387,0,2.082,0c0-0.025,0.012-0.037,0.037-0.037l0.037-0.037c0.025,0,0.038-0.013,0.038-0.038
				V8.944h0.037c0.023-0.024,0.062-0.038,0.111-0.038l0.038-0.036h0.036c0-0.025,0.013-0.039,0.037-0.039h0.038
				c0.173,0,0.347,0,0.521,0c0.024,0,0.049,0.013,0.074,0.039h0.037c0.025,0.024,0.05,0.036,0.076,0.036v0.038h0.037l0.037,0.075
				c0,0.024,0.012,0.037,0.037,0.037v0.334c0.819,0,1.625,0,2.417,0v0.074c0.025,0,0.05,0,0.075,0v0.074c0,0.025,0,0.051,0,0.075
				v0.038c0,0.025,0,0.049,0,0.074c0,0.024,0,0.051,0,0.075c0,0.025,0,0.049,0,0.074c0,0.025,0,0.049,0,0.075v0.037
				c0,0.024,0,0.05,0,0.074v0.037c0,0.025,0,0.05,0,0.075v0.038c1.14,0,2.293,0,3.458,0c0-0.05,0-0.1,0-0.149
				c0-0.074,0-0.148,0-0.222c0-0.075,0-0.15,0-0.224c0-0.075,0-0.136,0-0.186c0-0.074,0-0.162,0-0.261c0-0.048,0-0.111,0-0.186
				c0-0.074,0-0.149,0-0.223c0-0.074,0-0.148,0-0.223c0-0.074,0-0.136,0-0.187c0-0.098,0-0.187,0-0.259c0-0.05,0-0.113,0-0.186
				c0-0.1,0-0.174,0-0.224c0-0.074,0-0.148,0-0.222c-0.248,0-0.496,0-0.745,0c0,0.024-0.012,0.036-0.037,0.036L33.67,7.532h-0.037
				c-0.049,0.024-0.101,0.037-0.149,0.037h-0.037c0,0.024-0.013,0.037-0.037,0.037c-0.024,0-0.038,0.013-0.038,0.038V7.68h-0.037
				v0.038c-0.025,0-0.037,0.012-0.037,0.037c-0.024,0.024-0.05,0.036-0.075,0.036l-0.037,0.038c-0.026,0-0.037,0.012-0.037,0.037
				c-0.05,0-0.087,0-0.112,0L33,7.904c-0.049,0-0.099,0-0.148,0c-2.157-0.026-4.314-0.039-6.47-0.039v0.039
				c-0.076-0.026-0.161-0.039-0.261-0.039h-0.075c0-0.075,0-0.124,0-0.147V7.494c0-0.049,0-0.099,0-0.148V7.308
				c0-0.074,0-0.148,0-0.223c0-0.05,0-0.112,0-0.185c0-0.075,0-0.137,0-0.187c0-0.05,0-0.112,0-0.187c0-0.074,0-0.148,0-0.222
				c0-0.049,0-0.099,0-0.149c0-0.074,0-0.148,0-0.222c0-0.05,0-0.111,0-0.187c0-0.049,0-0.099,0-0.148c0-0.075,0-0.148,0-0.223
				c0-0.075,0-0.136,0-0.187c0-0.049,0-0.111,0-0.186c0-0.073,0-0.136,0-0.186s0-0.111,0-0.186c0.149,0,0.297,0,0.446,0l0.037,0.037
				c2.207,0,4.389,0.013,6.544,0.037v0.074c0.05,0,0.113,0,0.187,0v0.037h0.075l0.037,0.037c0.025,0.025,0.062,0.037,0.112,0.037
				l0.074,0.039h0.037c0.05,0.024,0.099,0.037,0.148,0.037V5.04c0.026,0,0.05,0,0.076,0c0,0.025,0.012,0.038,0.037,0.038
				s0.037,0.011,0.037,0.037c0.024,0,0.037,0.013,0.037,0.038h0.038c0.174,0,0.347,0,0.521,0c0-0.025,0-0.051,0-0.075
				c0-0.099,0-0.175,0-0.224c0-0.074,0-0.148,0-0.223c0-0.05,0-0.124,0-0.224c0.1,0,0.187,0,0.26,0c0.025,0,0.049,0,0.075,0
				c0.793,0,1.587,0,2.379,0v0.372h-0.038c0,0.074,0,0.136,0,0.187c0,0.049,0,0.099,0,0.148c0.645,0,1.289,0,1.935,0V4.779
				c0.024,0,0.049,0,0.074,0V4.668c0.174,0,0.346,0,0.52,0V4.631c-0.024,0-0.049-0.012-0.073-0.037V4.111l0.036-0.038V4.036
				l0.037-0.037V3.85c0.1,0.025,0.199,0.037,0.299,0.037V3.85c0-0.049,0-0.086,0-0.11c0-0.025,0-0.051,0-0.075
				c0-0.025,0-0.062,0-0.111c0-0.025,0-0.051,0-0.075V3.403l0.036-0.037V3.069c0.496,0,0.992,0,1.488,0v0.187
				c0.074,0,0.137,0,0.186,0v0.52c-0.025,0-0.037,0.013-0.037,0.038v0.073c0,0.025,0,0.05,0,0.075v0.038c0.099,0,0.173,0,0.223,0
				v0.669c0.198,0,0.384,0,0.559,0v0.223h0.036v0.039h0.037v0.037l0.038,0.037V5.04l0.037,0.038v0.037c0.421,0,0.867,0,1.339,0
				c0-0.075,0-0.148,0-0.224c0-0.024,0-0.061,0-0.111h-0.038V4.445c0.77,0,1.537,0,2.306,0c0.124,0,0.247,0,0.373,0v0.223
				c0,0.049,0,0.099,0,0.148v0.074c0,0.075,0,0.137,0,0.187c0.693,0,1.388,0,2.082,0h0.037c0-0.024,0.013-0.038,0.039-0.038
				c0.024,0,0.062-0.012,0.111-0.037V4.966c0.025-0.025,0.049-0.037,0.074-0.037c0.025,0,0.038-0.014,0.038-0.039
				c0.049,0,0.086,0,0.111,0c0.025,0,0.063,0,0.112,0c0.024-0.024,0.061-0.037,0.111-0.037c0.05-0.024,0.1-0.037,0.149-0.037h0.075
				c0.024,0,0.05-0.012,0.074-0.037h0.037l0.038-0.037c0.024,0,0.048,0,0.074,0c0.026-0.025,0.05-0.037,0.075-0.037l0.037-0.037
				c0.049,0,0.112,0,0.186,0c0.025,0,0.062-0.013,0.112-0.037c0.049-0.024,0.086-0.037,0.111-0.037h0.038
				c0-0.025,0.012-0.038,0.037-0.038c0.049,0,0.111,0,0.186,0V4.52h0.038c0.024-0.024,0.049-0.037,0.074-0.037l0.037-0.037
				c0.025,0,0.062,0,0.112,0c0.049,0,0.098-0.012,0.148-0.038h0.038c0.049-0.025,0.11-0.038,0.187-0.038h0.037
				c0.024-0.024,0.062-0.037,0.111-0.037c0.025,0,0.062-0.012,0.112-0.037h0.037c0.024-0.025,0.062-0.038,0.111-0.038
				c0.075-0.024,0.125-0.037,0.149-0.037l0.037-0.038c0.05,0,0.1,0,0.149,0c0.075,0,0.136,0,0.186,0h0.037
				c0.026-0.024,0.062-0.037,0.111-0.037h0.038c0.049-0.024,0.087-0.036,0.111-0.036c0.074,0,0.149-0.013,0.224-0.038V4.036h0.037
				c0.024-0.024,0.049-0.037,0.074-0.037V3.961c0.075,0,0.161,0,0.261,0c0.074,0,0.136-0.012,0.186-0.037h0.037
				c0.048-0.024,0.111-0.038,0.186-0.038h0.037c0.024-0.024,0.074-0.037,0.149-0.037c0.049,0,0.098,0,0.148,0
				c0.075-0.024,0.148-0.036,0.223-0.036c0.074-0.025,0.136-0.038,0.185-0.038l0.037-0.036c0.025,0,0.05,0,0.075,0h0.038
				c0.049,0,0.087,0,0.111,0c0.025,0,0.037-0.013,0.037-0.039l0.037-0.037V3.589h0.037V3.553c0.124,0,0.236,0,0.334,0v0.148
				c1.884-0.024,3.781-0.037,5.689-0.037h0.037c0.049,0,0.099,0,0.148,0c0.126,0,0.249,0,0.373,0v0.222c0,0.025,0,0.063,0,0.112
				c0,0.049,0,0.099,0,0.148c0,0.05,0,0.112,0,0.186s0,0.149,0,0.223c0,0.075,0,0.149,0,0.223s0,0.136,0,0.187
				c0,0.099,0,0.186,0,0.26c0,0.049,0,0.111,0,0.187c0,0.099,0,0.173,0,0.223c0,0.074,0,0.147,0,0.223c0,0.049,0,0.123,0,0.223
				c0,0.074,0,0.148,0,0.223c0,0.049,0,0.124,0,0.222c0,0.075,0,0.137,0,0.187c0,0.074,0,0.148,0,0.223s0,0.149,0,0.223
				c0,0.075,0,0.136,0,0.186c0,0.099,0,0.187,0,0.26c0,0.074,0,0.136,0,0.185c0,0.1,0,0.186,0,0.261c0,0.051,0,0.11,0,0.186
				c0,0.074,0,0.149,0,0.223s0,0.149,0,0.223c0,0.049,0,0.123,0,0.223c-0.124,0-0.247,0-0.373,0V8.871c-1.907,0-3.816,0-5.726,0
				H54.94c-0.174,0-0.36,0-0.558,0c-0.075-0.025-0.149-0.039-0.224-0.039c-0.024,0-0.037-0.012-0.037-0.037
				c-0.049-0.024-0.111-0.037-0.185-0.037c-0.025,0-0.05,0-0.075,0c-0.073,0-0.136-0.013-0.187-0.038V8.684
				c-0.024-0.025-0.061-0.038-0.11-0.038c-0.05-0.024-0.099-0.036-0.149-0.036l-0.037-0.038c-0.075-0.025-0.148-0.037-0.223-0.037
				l-0.074-0.038c-0.026,0-0.05-0.012-0.074-0.037c-0.051-0.024-0.1-0.037-0.15-0.037c-0.049,0-0.098,0-0.149,0
				c-0.024-0.025-0.061-0.038-0.11-0.038c-0.025,0-0.062-0.013-0.112-0.038c-0.05-0.025-0.086-0.037-0.111-0.037
				c-0.049-0.025-0.1-0.037-0.149-0.037s-0.098-0.012-0.148-0.037V8.201c-0.05-0.025-0.087-0.039-0.111-0.039
				c-0.05-0.024-0.112-0.036-0.186-0.036c-0.049,0-0.099-0.013-0.148-0.037c-0.051-0.025-0.087-0.038-0.112-0.038
				c-0.074,0-0.136,0-0.185,0c-0.026,0-0.076-0.012-0.149-0.037c-0.076-0.025-0.149-0.039-0.223-0.039
				C50.937,7.952,50.898,7.94,50.85,7.94c-0.05-0.024-0.099-0.036-0.149-0.036c-0.051,0-0.086-0.014-0.112-0.039
				c-0.049-0.024-0.086-0.037-0.111-0.037H50.44c-0.049-0.025-0.098-0.038-0.148-0.038V7.755c-0.025,0-0.05,0-0.076,0V7.718
				c-0.024,0-0.049,0-0.073,0c-0.05-0.025-0.087-0.038-0.112-0.038c-0.049,0-0.085-0.012-0.111-0.037
				c-0.05-0.024-0.099-0.038-0.149-0.038c-0.05-0.025-0.099-0.037-0.148-0.037c-0.049-0.026-0.111-0.037-0.186-0.037
				c-0.918,0-1.835,0-2.752,0v0.037c-0.049,0-0.099,0-0.147,0c0,0.074,0,0.124,0,0.149c0,0.073,0,0.147,0,0.222
				c0.024,0.075,0.037,0.149,0.037,0.222c0,0.076,0,0.15,0,0.225c0,0.05,0,0.124,0,0.224c0,0.074,0,0.135,0,0.185
				c0,0.075,0,0.162,0,0.261c0,0.05,0,0.111,0,0.186c0,0.074,0,0.149,0,0.223c0,0.074,0,0.148,0,0.223
				c0,0.075-0.013,0.137-0.037,0.186c0,0.1,0,0.186,0,0.26c0,0.025,0,0.05,0,0.075c4.908,0,9.816,0,14.725,0v-0.038
				c0-0.025,0-0.05,0-0.075s0-0.049,0-0.074V9.985c0-0.025,0-0.05,0-0.074V9.874c0-0.024,0-0.049,0-0.074V9.725
				c0-0.025,0-0.049,0-0.074V9.613c0-0.024,0-0.05,0-0.075s0-0.049,0-0.074c0-0.024,0-0.049,0-0.074l-0.037-0.037V8.758
				c0.074,0,0.137,0,0.186,0V8.684c0.868,0,1.723,0,2.565,0V8.72c0.099,0,0.198,0,0.298,0c0.025,0,0.049,0.013,0.075,0.038h0.037
				v0.037l0.037,0.037c0.025,0,0.05,0.013,0.073,0.039v0.036h0.039l0.038,0.038c0.049,0,0.074,0.013,0.074,0.037v0.038h0.036
				c0,0.024,0.013,0.037,0.039,0.037c0.024,0,0.062,0.012,0.111,0.037V8.72c0.024,0,0.05,0,0.074,0V8.684c0.298,0,0.596,0,0.893,0
				h0.037l0.037,0.036v0.038c0.025,0,0.05,0,0.074,0v0.148h0.039v0.038l0.036,0.037c0.025,0,0.037,0.012,0.037,0.038v0.074h0.037
				v0.074h0.037v0.075c0.025,0,0.039,0.012,0.039,0.037v0.075h0.036v0.037c0,0.025,0.013,0.037,0.037,0.037v0.037h0.037v0.112
				c0.025,0,0.038,0.013,0.038,0.037v0.149L66.356,9.8v0.409c0.992,0,1.996,0,3.012,0c0.024-0.025,0.049-0.038,0.075-0.038
				c0.024,0,0.061,0.012,0.111,0.038h0.037c2.182,0,4.375,0,6.583,0v0.26c0.173,0.024,0.334,0.037,0.483,0.037v0.335
				c-0.124,0-0.261,0-0.41,0v0.223c0,0.025,0.013,0.037,0.038,0.037c0.074,0,0.161,0,0.26,0v0.112h0.036v0.371
				c-0.024,0-0.049,0-0.073,0c0,0.025,0,0.051,0,0.076c0,0.049,0,0.11,0,0.186c0,0.049,0,0.086,0,0.111c0,0.05,0,0.111,0,0.186
				c0,0.05,0,0.1,0,0.148c0,0.05,0,0.1,0,0.149c0,0.074,0,0.136,0,0.186c0,0.05,0,0.099,0,0.148c0,0.051,0,0.113,0,0.187
				c0,0.025,0,0.075,0,0.149c0,0.05,0,0.112,0,0.187c0,0.024,0,0.062,0,0.111c0,0.075,0,0.137,0,0.186c0,0.049,0,0.088,0,0.111
				c3.049,0,6.086,0,9.111,0c0-0.023,0-0.05,0-0.074c0-0.049,0-0.099,0-0.148c0-0.05,0-0.1,0-0.15c0.023,0,0.049,0,0.074,0
				c0.148,0,0.297,0,0.447,0v0.186c0,0.05,0,0.087,0,0.112c0.024,0,0.062,0,0.111,0h0.038c0.198,0,0.396,0,0.593,0v-0.298
				c0.075,0,0.149,0,0.224,0v0.075l0.037,0.075v0.036l0.111,0.112c0.025,0,0.038,0.012,0.038,0.037c0.024-0.025,0.049-0.025,0.074,0
				c0-0.049,0-0.086,0-0.111c0-0.049,0-0.111,0-0.186c0-0.025,0-0.049,0-0.074c0.075,0,0.137,0,0.187,0v0.036
				c0.049,0,0.098,0,0.148,0v0.075c0.024,0,0.037,0.013,0.037,0.038v0.223c1.612,0,3.212,0,4.797,0v-0.223c0.149,0,0.285,0,0.409,0
				v0.223c1.314,0,2.627,0,3.942,0v0.187c0,0.025,0,0.049,0,0.075c0,0.024,0,0.049,0,0.074v0.037c0,0.05,0,0.087,0,0.111
				C96.885,14.176,96.885,14.201,96.885,14.225z M63.306,10.209c0.496,0,1.004,0,1.525,0V9.985c-0.521,0-1.03,0-1.525,0V10.209z
				 M43.895,5.486l0.038,0.037V5.486H43.895z M39.992,7.755c-0.274,0-0.558,0-0.856,0V7.494c-0.621,0-1.253,0-1.896,0v0.038h-0.076
				v0.037c0,0.074,0,0.149,0,0.222c0,0.075,0,0.149,0,0.225c0,0.049,0,0.123,0,0.223c0,0.074,0.013,0.136,0.038,0.187
				c0,0.073,0,0.148,0,0.222c-0.024,0.074-0.038,0.149-0.038,0.224c0,0.074,0,0.148,0,0.223c0.026,0,0.051,0,0.076,0
				c2.229,0.025,4.461,0.037,6.693,0.037c0-0.024,0-0.05,0-0.074c0-0.099,0-0.186,0-0.261c0-0.05,0-0.111,0-0.185
				c0-0.1,0-0.174,0-0.224c0-0.075,0-0.149,0-0.225c0-0.073,0-0.147,0-0.222c0-0.075,0-0.149,0-0.222c0-0.05,0-0.112,0-0.186
				c-0.297-0.025-0.595-0.038-0.893-0.038h-0.111c-0.148,0-0.297,0-0.447,0v0.261c-0.322,0-0.657,0-1.004,0v0.297
				c-0.471-0.025-0.967-0.037-1.486-0.037V7.755z M33.372,19.021v0.149h-0.037v0.26c-0.025,0.025-0.05,0.038-0.075,0.038
				c0,0.023-0.012,0.035-0.037,0.035v0.039c0,0.024,0,0.062,0,0.111c0,0.024,0,0.05,0,0.074c0,0.05,0,0.088,0,0.112
				c0,0.05,0,0.099,0,0.148c0,0.024,0,0.062,0,0.111c0,0.025,0,0.062,0,0.112c0,0.025,0,0.062,0,0.111c0,0.024,0,0.049,0,0.074
				c0,0.05,0,0.099,0,0.148c0,0.025,0,0.063,0,0.113c0,0.024,0,0.049,0,0.074c0,0.049,0,0.087,0,0.112c0,0.024,0,0.049,0,0.074
				h0.037c0,0.024,0.014,0.037,0.038,0.037v0.111l0.074,0.076v0.074l0.038,0.036c0.024,0,0.037,0.012,0.037,0.038
				c0.025,0,0.037,0.012,0.037,0.036l0.036,0.038c0.025,0.025,0.051,0.037,0.075,0.037h0.038v0.037l0.037,0.038
				c0.024,0,0.049,0.013,0.073,0.036c0.026,0.026,0.05,0.038,0.076,0.038c0.024,0.025,0.049,0.037,0.074,0.037
				c0.05,0,0.099,0.013,0.148,0.038c1.017,0,2.057,0,3.124,0c0.026-0.025,0.051-0.038,0.076-0.038c0.049,0,0.098-0.012,0.148-0.037
				c0.024-0.025,0.061-0.038,0.111-0.038v-0.074c0.025-0.025,0.05-0.037,0.075-0.037h0.038V21.29h0.036v-0.038l0.075-0.073v-0.037
				c0.025-0.025,0.05-0.037,0.075-0.037v-0.039h0.036c0-0.024,0-0.049,0-0.073c0-0.025,0-0.05,0-0.075c0-0.025,0-0.062,0-0.111
				c0-0.025,0-0.05,0-0.075v-0.037c0-0.05,0-0.087,0-0.112c0-0.025,0-0.051,0-0.075c0-0.05,0-0.086,0-0.111V20.36
				c0-0.024,0-0.061,0-0.111c0-0.024,0-0.05,0-0.075c0-0.024,0-0.049,0-0.074c0-0.049,0-0.087,0-0.111v-0.038
				c0-0.025,0-0.061,0-0.111c0-0.024,0-0.049,0-0.076c0-0.025,0-0.061,0-0.11l-0.036-0.037v-0.298c-0.025,0-0.037-0.012-0.037-0.037
				c-0.025,0-0.038-0.012-0.038-0.037h-0.038l-0.037-0.038v-0.074c0-0.025-0.013-0.037-0.036-0.037v-0.075l-0.075-0.074H37.5
				c-0.024,0-0.05,0-0.074,0h-0.037c-0.497,0-1.004,0-1.525,0h-0.038v0.037c-0.024,0-0.037,0.012-0.037,0.037h-0.038l-0.036,0.038
				c-0.025,0-0.038,0.012-0.038,0.037c-0.024,0-0.037,0.012-0.037,0.037h-0.037c-0.026,0-0.05,0.013-0.075,0.038
				c-0.025,0-0.038,0.011-0.038,0.037c-0.024,0.024-0.049,0.038-0.073,0.038l-0.039,0.037c-0.024,0-0.037,0.012-0.037,0.037h-0.038
				v0.038c-0.024,0-0.037,0.012-0.037,0.037h-0.037v0.037l-0.073,0.112c-0.026,0-0.039,0.012-0.039,0.037h-0.036l-0.074,0.074
				c-0.024,0-0.049,0.011-0.075,0.036v0.038l-0.038,0.037v0.039l-0.037,0.037v0.037l-0.074,0.074v0.038l-0.037,0.038V20.1
				l-0.038,0.037v0.037l-0.036,0.039v0.111c-0.025,0.024-0.051,0.037-0.075,0.037v0.149c0.024,0,0.037,0.013,0.037,0.037
				c0.024,0,0.038,0.013,0.038,0.038v0.223l0.036,0.037v0.222h0.038v0.076c0.025,0,0.037,0.012,0.037,0.037v0.037
				c0,0.024,0.012,0.036,0.038,0.036c0.024,0,0.037,0.012,0.037,0.038v0.186c-0.049,0-0.086,0-0.111,0c-0.025,0-0.062,0-0.111,0
				c-0.025,0-0.062,0-0.111,0l-0.038-0.038v-0.037h-0.111v-0.037h-0.038l-0.074-0.074v-0.074l-0.038-0.037v-0.074H34.19v-0.039
				c-0.023,0-0.037-0.012-0.037-0.037v-0.074l-0.037-0.037V20.77h-0.038v-0.261l-0.037-0.037V20.36h-0.037v-0.037
				c0-0.024,0-0.049,0-0.075v-0.037c0-0.025,0-0.05,0-0.075v-0.223c0-0.024,0-0.049,0-0.074v-0.037c0-0.026,0-0.051,0-0.076v-0.074
				c0-0.025,0-0.05,0-0.074v-0.076c0-0.024,0-0.048,0-0.073v-0.037c0-0.025,0-0.05,0-0.075v-0.074l0.037-0.038v-0.26
				c-0.099,0-0.198,0-0.298,0v0.037c-0.073,0-0.172,0-0.296,0H33.41v0.037H33.372z M22.142,11.808c0-0.026,0.014-0.039,0.039-0.039
				v-0.036h-0.039V11.808z M3.512,17.161c0,0.052,0,0.125,0,0.224c0,0.074,0,0.136,0,0.186c0,0.075,0,0.149,0,0.223
				c0,0.074,0,0.149,0,0.224s0,0.148,0,0.223s0,0.15,0,0.223c0,0.075,0,0.138,0,0.187c0,0.098,0,0.186,0,0.26
				c0,0.05,0,0.112,0,0.187c0,0.074,0,0.148,0,0.223c0,0.075,0,0.15,0,0.224c0,0.074,0,0.147,0,0.222c0,0.076,0,0.149,0,0.224
				c0,0.024,0,0.062,0,0.111c0.697,0,1.403,0,2.119,0c0-0.025,0-0.049,0-0.074v-0.038c0-0.025,0-0.05,0-0.075v-0.037
				c0.076,0,0.149,0,0.224,0V19.84H5.818v-0.707c0-0.025,0.012-0.037,0.038-0.037c0-0.075,0-0.149,0-0.224c0-0.074,0-0.149,0-0.223
				v-0.149c0-0.024,0-0.049,0-0.075c0-0.074,0-0.136,0-0.186c0-0.074,0-0.161,0-0.261c0-0.049,0-0.111,0-0.186
				c0-0.074,0-0.148,0-0.223s0-0.149,0-0.223c0-0.074,0-0.135,0-0.187c0-0.049,0-0.098,0-0.147c-0.299,0-0.608,0-0.93,0
				c-0.049,0-0.124,0-0.223,0c-0.397,0-0.793,0-1.19,0C3.512,17.063,3.512,17.112,3.512,17.161z M14.705,19.84
				c0.024,0,0.049,0,0.074,0c0-0.024-0.012-0.037-0.038-0.037L14.705,19.84z`,
            }),
          });
        }
        function n2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 89.667 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M26.496,2.11h0.044c0-0.03,0.015-0.045,0.046-0.045V2.021
				c0.029,0,0.06,0,0.089,0V1.932h0.045l0.044-0.045V1.708l0.046-0.045V1.08c0-0.03,0-0.061,0-0.09V0.81c0.178,0,0.329,0,0.449,0
				c0-0.03,0-0.074,0-0.135c0.209,0,0.418,0,0.627,0V0.72c0,0.06,0,0.135,0,0.224c0,0.06,0,0.121,0,0.18c0,0.09,0,0.165,0,0.224
				c0,0.06,0,0.12,0,0.18c0,0.089,0,0.164,0,0.225c0,0.06,0,0.119,0,0.179c0,0.089,0,0.164,0,0.224c0,0.059,0,0.134,0,0.225
				c0,0.059,0,0.104,0,0.134c0.15,0,0.3,0,0.448,0c0.21,0,0.419,0,0.629,0V2.201c0.209,0,0.419,0,0.627,0v0.18l0.045,0.045v0.134
				c0.12-0.03,0.225-0.03,0.315,0V2.514c0-0.029,0-0.06,0-0.089c0-0.03,0-0.06,0-0.09s0-0.06,0-0.09c0-0.03,0-0.059,0-0.089
				s0-0.06,0-0.09c0-0.029,0-0.06,0-0.089v-0.09h0.089V1.841c0.269,0,0.554,0,0.853,0V1.796c0.209,0,0.419,0,0.628,0
				c0,0.06,0,0.105,0,0.135v0.224c0,0.03,0,0.059,0,0.089v0.09c0,0.03,0,0.06,0,0.09c0,0.029,0,0.06,0,0.089v0.045
				c1.525,0,3.065,0,4.62,0V2.11h0.044c1.018,0,2.019,0,3.006,0v-0.09c0-0.03,0-0.059,0-0.089V1.886c0-0.03,0-0.06,0-0.09
				c0-0.03,0-0.059,0-0.089V1.617c0-0.029,0-0.06,0-0.089V1.483c0.209,0,0.419,0,0.628,0v0.494c0,0.029,0.016,0.044,0.045,0.044
				v0.18c0.149,0,0.299,0,0.448,0v0.807c-0.029,0-0.06,0.015-0.09,0.045v0.089h-0.044v0.18c-0.03,0-0.045,0.014-0.045,0.044v0.045
				c-0.03,0-0.045,0.015-0.045,0.045v0.09h-0.044V3.59l-0.046,0.045v0.09l-0.044,0.045v0.044L39.907,3.86v0.09h-0.045v0.045
				l-0.045,0.044l-0.045,0.089c0,0.032-0.014,0.046-0.044,0.046c0,0.029-0.015,0.045-0.045,0.045v0.135l-0.045,0.045v0.045h-0.045
				v0.133h-0.045v0.091h-0.044v0.089c-0.03,0-0.045,0.015-0.045,0.044v0.045h-0.045v0.046l-0.045,0.044v0.135h-0.045v0.046
				c0,0.029-0.014,0.044-0.044,0.044v0.134c-0.03,0-0.045,0.016-0.045,0.046v0.044h-0.045v0.089h-0.044v0.091h-0.046v0.044
				c-0.029,0-0.044,0.015-0.044,0.045v0.134H39.01v0.045h-0.045v0.089l-0.045,0.045h-0.045v0.135H38.83v0.089h-0.045v0.18H38.74
				c0,0.03-0.015,0.045-0.044,0.045v0.045L38.65,6.506l-0.044,0.089c-0.03,0-0.045,0.015-0.045,0.045v0.045
				c-0.03,0-0.045,0.015-0.045,0.045v0.045h-0.044V6.91c0.494,0,1.002,0,1.524,0v0.404c1.107,0,2.213,0,3.32,0
				c0.928,0,1.854,0,2.781,0v0.404c8.761,0,17.522,0,26.284,0v0.224c0.119,0,0.239,0,0.358,0V7.673c0.091,0,0.194,0,0.315,0
				c0-0.061,0-0.121,0-0.181c0-0.09,0-0.179,0-0.268c0-0.09,0-0.18,0-0.27c0-0.09,0-0.179,0-0.27c0-0.06,0-0.134,0-0.224
				c0-0.121,0-0.209,0-0.27c0-0.089,0-0.179,0-0.269c0-0.089,0-0.179,0-0.269s0-0.18,0-0.27c0-0.09,0-0.179,0-0.268
				c0-0.091,0-0.181,0-0.271c0-0.059,0-0.134,0-0.223c0-0.121,0-0.209,0-0.269c0-0.091,0-0.18,0-0.27c0-0.089,0-0.179,0-0.269
				c0-0.089,0-0.179,0-0.269c0-0.06,0-0.15,0-0.269c0-0.09,0-0.166,0-0.224c0-0.061,0-0.105,0-0.136c0.089,0,0.179,0,0.269,0
				c0.119,0,0.24,0,0.359,0c0.089,0,0.179,0,0.269,0h0.045v0.045c0.06,0,0.104,0,0.135,0l0.044,0.045v0.314c0.09,0,0.18,0,0.269,0
				h0.045c0.031,0.029,0.06,0.044,0.09,0.044V3.86c0,0.09,0,0.179,0,0.268v0.046c0,0.059,0,0.119,0,0.18c0.089,0,0.194,0,0.313,0
				v0.358h0.09v0.045c0,0.061,0,0.149,0,0.269c0,0.091,0,0.165,0,0.224c0,0.091,0,0.194,0,0.315c0,0.089,0,0.164,0,0.224
				c0,0.09,0,0.179,0,0.269c0,0.089,0,0.179,0,0.27c0,0.089,0,0.179,0,0.268c0,0.09,0,0.18,0,0.269c0,0.09,0,0.165,0,0.225
				c0,0.089,0,0.164,0,0.224c0.12,0,0.24,0,0.358,0c0.12,0.03,0.225,0.045,0.315,0.045H75.7c0.03,0,0.059,0,0.089,0v0.044
				c0,0.06,0,0.121,0,0.18c0,0.06,0,0.104,0,0.135c0,0.06,0,0.12,0,0.18c0,0.089,0,0.164,0,0.224c0,0.059,0,0.104,0,0.134v0.091
				c0.09,0,0.166,0,0.224,0v0.089c0.599,0,1.211,0,1.84,0v0.179c0.03,0,0.06,0,0.089,0v0.628c-0.269,0-0.568,0-0.896,0v0.269
				l-0.09,0.045v0.045c0.299,0,0.598,0,0.897,0v0.627c-0.688,0-1.375,0-2.064,0v0.135c2.901,0,5.786,0,8.657,0V10.05
				c1.465,0,2.93,0,4.395,0c0.03,0,0.06,0,0.091,0v0.807c0,0.059,0,0.104,0,0.134s0,0.06,0,0.09v0.493c0,0.03,0,0.059,0,0.09
				c0,0.03,0,0.075,0,0.135v0.045c0,0.029,0,0.061,0,0.089c0,0.03,0,0.06,0,0.09v0.134c0.029,0,0.059,0,0.089,0v0.628
				c-0.12,0-0.224,0-0.313,0c-0.121,0-0.24,0-0.36,0c-1.585,0-3.154,0-4.709,0v0.045c-0.208,0-0.418,0-0.627,0
				c0-0.03-0.015-0.045-0.045-0.045H82.92v-0.403c-2.571,0-5.143,0-7.714,0v0.448c-0.061,0-0.105,0-0.135,0v0.269
				c-0.12,0-0.239,0-0.359,0v0.046c-0.03,0-0.06,0.014-0.09,0.045c0,0.029,0,0.059,0,0.089s0,0.074,0,0.135c0,0.029,0,0.059,0,0.089
				c0,0.06,0,0.104,0,0.136c0,0.027,0,0.059,0,0.089c0,0.06,0,0.104,0,0.135c0,0.028,0,0.059,0,0.089c0,0.06,0,0.104,0,0.135
				c0,0.028,0,0.059,0,0.089c0,0.03,0,0.074,0,0.135c0,0.029,0,0.075,0,0.134c0,0.03,0,0.06,0,0.09c0,0.029,0,0.06,0,0.09
				c0,0.059,0,0.104,0,0.134c0,0.06,0,0.104,0,0.134c0,0.03,0,0.075,0,0.136v0.089c0,0.03,0,0.075,0,0.134c0,0.031,0,0.06,0,0.09
				c-0.209,0-0.418,0-0.628,0v-0.044h-0.089c-0.179-0.03-0.374-0.046-0.583-0.046h-0.179l-0.089-0.044V14.49
				c0.03,0,0.06-0.015,0.089-0.045c0-0.03,0-0.074,0-0.134c0-0.031,0-0.061,0-0.091c0-0.059,0-0.104,0-0.133
				c0-0.031,0-0.075,0-0.135c0-0.03,0-0.061,0-0.089c0-0.031,0-0.075,0-0.135c0-0.03,0-0.062,0-0.089c0-0.062,0-0.105,0-0.136
				c0-0.03,0-0.06,0-0.089c0-0.062,0-0.105,0-0.135c0-0.06,0-0.105,0-0.134c-0.089,0-0.18,0-0.269,0
				c-0.03-0.03-0.074-0.046-0.135-0.046v-0.269c-0.119,0-0.239,0-0.358,0h-0.044c0,0.03-0.017,0.044-0.046,0.044v0.225
				c0,0.03,0,0.06,0,0.091v0.044c0,0.03,0,0.059,0,0.089v0.091c0,0.029,0,0.059,0,0.089v0.044c0,0.03,0,0.06,0,0.092v0.089
				c0,0.03,0,0.06,0,0.089v0.135c0,0.03,0,0.06,0,0.089v0.09c0,0.03,0,0.059,0,0.089v0.045h-0.044v0.135c-0.209,0-0.403,0-0.583,0
				v0.044h-0.045v0.09h-0.045v0.09l-0.089,0.089v0.045c-0.03,0-0.044,0.015-0.044,0.045v0.045c0,0.03,0,0.059,0,0.089v0.09
				c0,0.03,0,0.075,0,0.134c0,0.03,0,0.061,0,0.089c0,0.06,0,0.105,0,0.135c0,0.031,0,0.061,0,0.089v0.135c-0.15,0-0.314,0-0.494,0
				L70.9,15.657h-0.045v0.09h-0.044v0.224c-0.27,0-0.524,0-0.763,0l-0.045-0.046c-6.16-0.029-12.334-0.044-18.524-0.044v0.179
				c-0.24,0-0.479,0-0.718,0v-0.089h-0.045v-0.09c-0.029,0-0.044-0.015-0.044-0.045l-0.045-0.045v-0.044h-0.044v-0.09
				c0-0.03-0.016-0.045-0.045-0.045c-2.213-0.03-4.425-0.045-6.638-0.045h-0.044l-0.045,0.045c-0.031,0-0.045,0.015-0.045,0.045
				c-0.031,0-0.06,0-0.09,0l-0.044,0.044c-0.03,0-0.06,0.016-0.09,0.046c-0.03,0-0.06,0-0.09,0c0,0.029-0.015,0.044-0.044,0.044
				l-0.045,0.045h-0.044c-0.03,0.03-0.06,0.045-0.09,0.045c0,0.029-0.015,0.044-0.044,0.044l-0.045,0.046c-0.03,0-0.06,0-0.089,0
				v0.044c-0.03,0-0.06,0.015-0.089,0.045c-0.031,0-0.061,0.016-0.091,0.045l-0.045,0.044c-0.03,0-0.06,0.016-0.089,0.046
				l-0.046,0.044h-0.044c-0.03,0.03-0.06,0.045-0.09,0.045c0,0.03-0.015,0.045-0.044,0.045l-0.046,0.044h-0.044
				c0,0.031-0.015,0.046-0.045,0.046l-0.045,0.044h-0.044c-0.031,0-0.046,0.015-0.046,0.045l-0.044,0.045h-0.045
				c-0.03,0-0.045,0.015-0.045,0.044l-0.044,0.046v0.044c0,0.061,0,0.12,0,0.18c0,0.059,0,0.12,0,0.179c0,0.06,0,0.105,0,0.135
				c0,0.06,0,0.12,0,0.179c0,0.09,0,0.166,0,0.225c0,0.03,0,0.075,0,0.134c0,0.06,0,0.12,0,0.18v0.09c0.119,0,0.239,0,0.358,0v0.627
				c-0.209,0-0.434,0.016-0.672,0.046h-0.045v1.255h0.045v0.405h0.044v0.403l0.046,0.045v0.313c0,0.03,0.015,0.045,0.044,0.045
				v0.314h0.045v0.493l0.045,0.045c0,0.03,0.015,0.044,0.044,0.044v0.449c0,0.031,0.015,0.045,0.046,0.045v0.045l0.044,0.045v0.224
				l0.045,0.045v0.134l0.045,0.045v0.045l0.044,0.044v0.224l0.046,0.045c0,0.03,0.014,0.045,0.044,0.045v0.225h0.045v0.045
				c0,0.029,0.015,0.044,0.045,0.044v0.135l0.044,0.045v0.044l0.046,0.045v0.045h0.044v0.314l0.09,0.044v0.18
				c0,0.029,0.015,0.044,0.044,0.044v0.135h0.046v0.089l0.044,0.09v0.045h0.045v0.179h0.045v0.09l0.091,0.089v0.179
				c0,0.031,0.014,0.045,0.044,0.045c0,0.03,0.015,0.045,0.045,0.045v0.134l0.045,0.045v0.09h0.044v0.224h0.045v0.09l0.044,0.09
				v0.09l0.045,0.044v0.09c0,0.03,0.015,0.045,0.045,0.045v0.045h0.044v0.134c0.03,0,0.045,0.015,0.045,0.045l0.044,0.045v0.134
				c0,0.03,0.015,0.045,0.045,0.045v0.089c0,0.03,0.015,0.045,0.045,0.045l0.045,0.09v0.089c0.03,0,0.045,0.015,0.045,0.045v0.045
				l0.044,0.045v0.089c0,0.03,0.015,0.045,0.045,0.045v0.045h0.045v0.179l0.045,0.045v0.089c0,0.031,0.015,0.045,0.045,0.045v0.045
				c0,0.029,0.015,0.045,0.044,0.045v0.045h0.045v0.179l0.089,0.045v0.044l0.045,0.045v0.135c0.03,0,0.044,0.014,0.044,0.044v0.045
				c0.03,0,0.045,0.015,0.045,0.045v0.045h0.045c0,0.03,0.015,0.045,0.045,0.045v0.044c0.03,0,0.06,0.015,0.09,0.045l0.045,0.045
				v0.628h-0.045v0.089c-0.06,0-0.135,0-0.225,0v0.09c-0.09,0-0.179,0.015-0.269,0.045h-0.045c-0.031,0.03-0.06,0.045-0.09,0.045
				c-0.03,0-0.075,0.015-0.135,0.044H43.54c-0.03,0-0.06,0.015-0.09,0.045l-0.044,0.045c-0.03,0-0.075,0-0.135,0
				c-0.03,0-0.074,0.015-0.135,0.045c-0.03,0-0.06,0.015-0.089,0.045h-0.045l-0.09,0.089c-0.029,0-0.059,0-0.089,0h-0.045
				c-0.029,0-0.075,0.015-0.134,0.045v0.045c-0.03,0-0.06,0.015-0.09,0.045h-0.09l-0.044,0.044h-0.045
				c-0.03,0-0.06,0.015-0.089,0.045h-0.046c-0.029,0-0.059,0.015-0.089,0.045c-0.03,0-0.059,0.015-0.089,0.045h-0.046
				c-0.029,0-0.06,0-0.089,0s-0.06,0.015-0.089,0.045l-0.046,0.044c-0.03,0-0.06,0-0.089,0c-0.06,0.03-0.105,0.045-0.135,0.045
				c-0.029,0-0.074,0.016-0.134,0.045c-0.029,0-0.075,0.015-0.134,0.045h-0.045c-0.029,0-0.06,0.015-0.089,0.045h-0.046
				c-0.03,0.029-0.06,0.044-0.089,0.044h-0.045c-0.06,0-0.09,0.015-0.09,0.045c-0.029,0-0.059,0.015-0.089,0.045h-0.089
				c-0.031,0.029-0.06,0.045-0.09,0.045s-0.075,0.015-0.134,0.045c-0.031,0-0.06,0-0.09,0c-0.03,0-0.045,0.014-0.045,0.044
				c-0.03,0-0.06,0.015-0.09,0.045H40.22l-0.044,0.045c-0.06,0-0.104,0-0.134,0c-0.09,0-0.18,0.015-0.27,0.045v0.045
				c-0.03,0-0.059,0-0.089,0v0.044c-0.061,0.03-0.12,0.045-0.18,0.045c-0.03,0-0.075,0-0.135,0v0.045
				c-0.03,0-0.06,0.015-0.089,0.045l-0.09,0.045c-0.061,0-0.104,0-0.134,0c-0.03,0-0.06,0.014-0.09,0.044v0.045
				c-0.03,0-0.06,0-0.09,0c-0.029,0.03-0.059,0.045-0.089,0.045c-0.06,0-0.105,0.015-0.135,0.045c-0.089,0-0.178,0-0.268,0v0.045
				c-0.06,0-0.105,0.014-0.135,0.044h-0.045c-0.029,0-0.059,0-0.089,0c-0.239,0-0.494,0-0.762,0V31.4h-0.045
				c0-0.03-0.015-0.045-0.044-0.045v-0.179c-0.03,0-0.045-0.016-0.045-0.045l-0.045-0.045v-0.179c-0.03,0-0.044-0.015-0.044-0.045
				v-0.179h-0.045v-0.179h-0.044v-0.314h-0.091v-0.27h-0.044v-0.134h-0.045v-0.09l-0.044-0.044v-0.045
				c-0.03,0-0.045-0.015-0.045-0.045v-0.09h-0.046v-0.179l-0.089-0.09v-0.224h-0.044v-0.09c0-0.031-0.016-0.044-0.045-0.044v-0.09
				c-0.03,0-0.046-0.015-0.046-0.045v-0.089c-0.029,0-0.044-0.015-0.044-0.045v-0.09l-0.045-0.045v-0.268c-0.03,0-0.06,0-0.089,0
				v-0.314l-0.046-0.045v-0.089l-0.044-0.045v-0.179c0-0.031-0.015-0.045-0.045-0.045v-0.09h-0.044v-0.27l-0.045-0.044v-0.09h-0.046
				c0-0.03-0.015-0.045-0.044-0.045v-0.18h-0.045v-0.134l-0.044-0.045v-0.179l-0.045-0.045v-0.045c-0.031,0-0.045-0.014-0.045-0.045
				v-0.18c0-0.03-0.016-0.045-0.045-0.045v-0.089l-0.045-0.045v-0.09c-0.03,0-0.044-0.015-0.044-0.044v-0.09l-0.045-0.045v-0.135
				l-0.045-0.045v-0.09L35.556,25.3v-0.09H35.51v-0.179l-0.044-0.045v-0.134l-0.045-0.045v-0.09h-0.045v-0.089l-0.045-0.045v-0.135
				l-0.045-0.044v-0.09c0-0.03-0.014-0.045-0.044-0.045v-0.18h-0.045v-0.314c0-0.029-0.015-0.044-0.045-0.044v-0.135l-0.045-0.044
				v-0.09c-0.03,0-0.045-0.015-0.045-0.045v-0.134h-0.044v-0.359c-0.03,0-0.046-0.014-0.046-0.044h-0.044v-0.27
				c-0.029,0-0.044-0.015-0.044-0.045v-0.358l-0.046-0.045v-0.224l-0.044-0.045v-0.223h-0.045v-0.181l-0.045-0.044v-0.404
				c0-0.03-0.016-0.044-0.044-0.044V20.95h-0.045v-0.404h-0.044v-0.314h-0.045v-0.134c0-0.03-0.014-0.045-0.044-0.045v-0.224
				c-0.03,0-0.044-0.016-0.044-0.045v-0.134c-0.031,0-0.045-0.015-0.045-0.045c-2.243,0-4.485,0-6.729,0c-0.089,0-0.178,0-0.268,0
				v0.224l-0.045,0.045v0.044c-0.03,0-0.06,0-0.089,0v0.09l-0.046,0.045v0.089l-0.044,0.045c0,0.03-0.015,0.045-0.045,0.045
				c0,0.03-0.015,0.045-0.044,0.045v0.224c-0.03,0-0.045,0.015-0.045,0.045h-0.09v0.134l-0.045,0.045v0.045l-0.089,0.089v0.091
				c-0.03,0-0.046,0.015-0.046,0.045v0.134H26.72v0.044l-0.045,0.046v0.044l-0.044,0.045v0.045c-0.029,0-0.045,0.016-0.045,0.044
				v0.046H26.54v0.044c0,0.03-0.014,0.045-0.044,0.045l-0.045,0.045v0.134L26.362,21.8v0.045h-0.047v0.09
				c-0.028,0-0.044,0.015-0.044,0.045v0.044l-0.134,0.09v0.09l-0.09,0.044v0.135h-0.045v0.045h-0.044v0.044
				c0,0.031-0.016,0.045-0.044,0.045c0,0.03-0.016,0.045-0.046,0.045v0.09l-0.044,0.044v0.045l-0.045,0.045
				c-0.03,0-0.044,0.015-0.044,0.045v0.045h-0.044l-0.046,0.044v0.09c0,0.03-0.015,0.045-0.045,0.045
				c0,0.029-0.015,0.045-0.045,0.045l-0.044,0.089v0.045c-0.029,0-0.044,0.015-0.044,0.045v0.045l-0.045,0.044h-0.045v0.045
				l-0.045,0.045v0.135c-0.03,0-0.06,0-0.089,0v0.09c-0.031,0-0.045,0.015-0.045,0.045v0.044l-0.045,0.045v0.09h-0.045v0.045
				l-0.044,0.044h-0.044v0.18c-0.031,0-0.046,0.015-0.046,0.044c-0.029,0-0.045,0.016-0.045,0.045v0.09l-0.045,0.045v0.044
				c0,0.031-0.014,0.045-0.044,0.045v0.09l-0.045,0.045v0.089c-0.03,0-0.045,0.015-0.045,0.045v0.134
				c0,0.031-0.015,0.045-0.044,0.045v0.179c-0.03,0-0.06,0.015-0.09,0.045v0.314l-0.044,0.045v0.089h-0.045v0.583
				c0,0.029-0.015,0.044-0.044,0.044v0.045c-0.24,0-0.464,0-0.673,0v-0.045c0-0.029-0.016-0.044-0.045-0.044l-0.045-0.045
				c-0.029,0-0.06,0-0.09,0c-0.029-0.03-0.06-0.045-0.09-0.045v-0.045H23.49v-0.045c-0.06,0-0.104,0-0.134,0
				c-0.03-0.029-0.06-0.044-0.09-0.044c-0.03-0.03-0.06-0.045-0.089-0.045h-0.089v-0.045c-0.03-0.03-0.061-0.045-0.09-0.045
				s-0.059,0-0.089,0c-0.03-0.03-0.06-0.045-0.089-0.045v-0.044c-0.03,0-0.075,0-0.135,0v-0.045c-0.03,0-0.06,0-0.089,0
				c0-0.03-0.016-0.045-0.045-0.045c-0.03-0.03-0.06-0.045-0.089-0.045H22.37c-0.031-0.031-0.061-0.045-0.091-0.045v-0.044
				c-0.059,0-0.104,0-0.134,0c-0.03-0.03-0.075-0.045-0.134-0.045l-0.089-0.09c-0.031,0-0.076,0-0.135,0l-0.045-0.045h-0.045
				c-0.03,0-0.044-0.015-0.044-0.044l-0.09-0.045l-0.045-0.045h-0.045c-0.03-0.03-0.06-0.045-0.089-0.045
				c-0.029-0.03-0.075-0.045-0.135-0.045c-0.03-0.029-0.06-0.044-0.089-0.044l-0.045-0.045h-0.09c-0.03,0-0.044-0.015-0.044-0.045
				l-0.045-0.045h-0.045v-0.045h-0.134c-0.03,0-0.06-0.015-0.09-0.044l-0.09-0.045c-0.03,0-0.044-0.015-0.044-0.045
				c-0.06,0-0.104,0-0.135,0l-0.045-0.045c-0.03,0-0.059,0-0.089,0v-0.045c-0.029,0-0.074,0-0.135,0v-0.044h-0.044
				c-0.06-0.03-0.104-0.045-0.134-0.045c-0.031-0.03-0.061-0.045-0.09-0.045v-0.045c-0.031,0-0.06,0-0.089,0h-0.044
				c0-0.029-0.016-0.045-0.046-0.045c-0.029-0.029-0.059-0.044-0.089-0.044c-0.029,0-0.074,0-0.135,0v-0.045
				c-0.029,0-0.06-0.015-0.089-0.045h-0.044c-0.061-0.03-0.12-0.045-0.18-0.045c0-0.029-0.015-0.045-0.044-0.045
				c-0.03,0-0.061-0.015-0.091-0.044v-0.045c-0.029,0-0.059,0-0.089,0c-0.029-0.03-0.059-0.045-0.089-0.045h-0.09v-0.045h-0.045
				l-0.044-0.045v-0.044c-0.031,0-0.076,0-0.135,0v-0.135h-0.045v-0.717h0.045v-0.135c0-0.031,0.015-0.045,0.045-0.045v-0.134h0.045
				v-0.179c0.03,0,0.044-0.015,0.044-0.045h0.044c0.03,0,0.045-0.015,0.045-0.045v-0.089l0.045-0.045v-0.045l0.045-0.045
				c0-0.031,0.015-0.045,0.044-0.045v-0.044l0.044-0.045v-0.09h0.045v-0.045h0.044V21.98l0.046-0.045v-0.09h0.045V21.8l0.044-0.044
				v-0.045l0.135-0.134v-0.045h0.044v-0.089l0.089-0.09h0.044c0-0.03,0.015-0.045,0.046-0.045v-0.045l0.089-0.09
				c0.03,0,0.045-0.014,0.045-0.044v-0.045c0-0.03,0.015-0.045,0.044-0.045c0.03,0,0.046-0.014,0.046-0.044
				c0.029,0,0.044-0.016,0.044-0.045l0.089-0.045v-0.045l0.044-0.045c0-0.03,0.015-0.044,0.046-0.044v-0.045
				c0-0.03,0.015-0.045,0.044-0.045v-0.045h0.044V20.59c0.03,0,0.06-0.014,0.089-0.044v-0.045c0.031,0,0.046-0.015,0.046-0.045
				h0.044l0.044-0.09c0-0.03,0.015-0.044,0.045-0.044l0.044-0.045c0-0.031,0.015-0.045,0.045-0.045v-0.045
				c0.031,0,0.046-0.015,0.046-0.045l0.044-0.044c0.03,0,0.045-0.015,0.045-0.045c0.029,0,0.044-0.015,0.044-0.045v-0.045
				c0.03-0.03,0.061-0.045,0.09-0.045v-0.044c0-0.03,0.016-0.045,0.045-0.045l0.045-0.045v-0.045h0.044v-0.089
				c0.031,0,0.045-0.015,0.045-0.045h0.045v-0.045l0.045-0.045h0.045c0-0.03,0.015-0.045,0.044-0.045v-0.044l0.135-0.135v-0.045
				c0.029,0,0.045-0.014,0.045-0.044l0.044-0.045c0.03,0,0.045-0.016,0.045-0.045h0.045l0.09-0.09c0.029,0,0.044-0.014,0.044-0.044
				v-0.045l0.045-0.045c0.031,0,0.045-0.015,0.045-0.045v-0.045h0.044v-0.044h0.045v-0.045l0.044-0.044
				c0-0.03,0.015-0.046,0.045-0.046l0.045-0.045v-0.044c0.03,0,0.044-0.015,0.044-0.045c0.03,0,0.045-0.015,0.045-0.044v-0.09
				l0.045-0.045h0.044v-0.089h0.045v-0.09l0.044-0.045c0.03,0,0.045-0.015,0.045-0.045v-0.09l0.044-0.044
				c0.031,0,0.045-0.015,0.045-0.045v-0.179c0.031-0.03,0.061-0.045,0.089-0.045v-0.225c0.03,0,0.045-0.015,0.045-0.045v-0.403
				h-0.045v-0.225c-0.029-0.03-0.059-0.045-0.089-0.045v-0.134h-0.045v-0.045L22.1,16.463v-0.044h-0.045l-0.179-0.18
				c0-0.03-0.016-0.044-0.045-0.044l-0.044-0.046v-0.044h-0.045c-0.03-0.03-0.061-0.045-0.09-0.045h-0.045
				c-0.029-0.03-0.059-0.045-0.089-0.045c0-0.03-0.014-0.044-0.045-0.044h-0.044c-0.03-0.03-0.074-0.046-0.135-0.046
				c-0.031-0.029-0.06-0.044-0.089-0.044c-0.09-0.03-0.18-0.045-0.27-0.045h-0.045v-0.045c-0.029,0-0.059,0-0.09,0
				c-0.06-0.03-0.104-0.044-0.134-0.044c-0.029,0-0.06,0-0.09,0c-0.03-0.03-0.06-0.046-0.089-0.046v-0.044h-0.044
				c-0.061,0-0.105,0-0.135,0c-0.06-0.03-0.119-0.045-0.18-0.045c-0.06-0.03-0.104-0.045-0.134-0.045c-0.12,0-0.239,0-0.359,0
				v-0.179c-0.06,0-0.134,0-0.224,0v-0.045c0-0.03,0-0.059,0-0.09c0-0.029,0-0.059,0-0.089c0-0.059,0-0.104,0-0.134
				c0-0.03,0-0.061,0-0.09c0-0.059,0-0.104,0-0.134c0-0.06,0-0.105,0-0.135c0-0.03,0-0.059,0-0.089v-0.045c0-0.061,0-0.104,0-0.134
				c0-0.061,0-0.105,0-0.135c0-0.029,0-0.075,0-0.134c0-0.03,0-0.06,0-0.09c0-0.029,0-0.075,0-0.134c0-0.03,0-0.061,0-0.09
				c0-0.059,0-0.104,0-0.134c0-0.03,0-0.061,0-0.09v-0.045c-0.15,0-0.313,0-0.494,0v0.092c-0.089,0-0.194,0-0.313,0
				c0,0.027,0,0.059,0,0.089c0,0.06,0,0.119,0,0.179c0,0.03,0,0.075,0,0.134c0,0.061,0,0.105,0,0.135c0,0.06,0,0.104,0,0.135
				c0,0.06,0,0.12,0,0.179c0,0.03,0,0.074,0,0.135c0,0.059,0,0.104,0,0.134c0,0.06,0,0.12,0,0.179c0,0.03,0,0.06,0,0.09
				c0,0.059,0,0.104,0,0.134l0.044,0.045v0.627c-0.061,0-0.135,0-0.224,0v0.135c-0.958,0-1.944,0-2.961,0v0.897
				c-0.029,0-0.06,0-0.089,0v0.269c-0.209,0-0.419,0-0.628,0v-0.044h-0.089v0.044c-0.06,0-0.134,0.015-0.224,0.045
				c-0.12,0-0.24,0-0.359,0c-0.18,0-0.374,0-0.583,0v0.045l-0.045,0.044v0.405c-0.029,0-0.06,0-0.088,0v0.268l-0.045,0.046v0.134
				c-0.12,0-0.254,0.015-0.403,0.044c-0.359,0-0.734,0-1.121,0v-0.089c0-0.03,0-0.06,0-0.089v-0.09c0-0.03,0-0.06,0-0.09v-0.044
				c0-0.03,0-0.061,0-0.09h-0.046c-0.029,0-0.044,0.015-0.044,0.044c-0.03,0.031-0.06,0.06-0.09,0.09l-0.044,0.045
				c-0.031,0-0.046,0.015-0.046,0.045c-0.06,0-0.119,0-0.178,0c-0.032,0.029-0.046,0.06-0.046,0.09c-0.06,0-0.089,0.014-0.089,0.044
				c-0.06,0.031-0.104,0.045-0.135,0.045c-0.029,0.03-0.044,0.06-0.044,0.089c-0.03,0-0.045,0.016-0.045,0.046
				c-0.059,0-0.12,0-0.179,0c-0.03,0.029-0.06,0.059-0.089,0.089c-0.03,0-0.044,0.015-0.044,0.045
				c-0.031,0.029-0.061,0.044-0.09,0.044c0,0.03,0,0.06,0,0.09c-0.06,0-0.089,0.015-0.089,0.045c-0.061,0-0.105,0.015-0.135,0.044
				c-0.03,0.03-0.06,0.045-0.089,0.045c0,0.03,0,0.06,0,0.09c-0.061,0-0.105,0.016-0.135,0.045l-0.044,0.044
				c-0.06,0.03-0.089,0.061-0.089,0.09c-0.031,0-0.046,0.015-0.046,0.045c-0.059,0.03-0.089,0.06-0.089,0.089
				c-0.06,0-0.105,0-0.136,0c-0.029,0.03-0.044,0.061-0.044,0.09l-0.044,0.045c-0.06,0.03-0.105,0.045-0.135,0.045
				c-0.029,0.03-0.044,0.059-0.044,0.089l-0.089,0.045c-0.03,0.03-0.045,0.061-0.045,0.09c-0.031,0-0.045,0.014-0.045,0.044
				c-0.059,0-0.104,0.015-0.134,0.045v0.045c-0.031,0.03-0.061,0.045-0.09,0.045c-0.029,0.03-0.059,0.059-0.089,0.089v0.045
				c-0.03,0.03-0.06,0.06-0.089,0.09v0.045l-0.135,0.134c0,0.031,0,0.061,0,0.09c-0.418,0-0.837,0-1.256,0c0-0.03,0-0.06,0-0.09
				V19.11c0-0.029,0-0.06,0-0.09v-0.225c0-0.029,0-0.059,0-0.089c0-0.03,0-0.06,0-0.09v-0.045c0-0.059,0-0.104,0-0.133
				c-0.029,0-0.06,0-0.089,0l-0.045,0.044c-0.06,0.03-0.119,0.045-0.179,0.045c0,0.03,0,0.059,0,0.089v0.046
				c-0.06,0.029-0.121,0.044-0.18,0.044c-0.03,0-0.06,0.016-0.09,0.045c0,0.03-0.015,0.044-0.044,0.044
				c-0.031,0.03-0.075,0.045-0.135,0.045c-0.029,0.03-0.06,0.045-0.089,0.045v0.09c-0.061,0.03-0.105,0.044-0.135,0.044
				c-0.06,0-0.09,0.015-0.09,0.045c0,0.03-0.015,0.045-0.045,0.045c0,0.03-0.015,0.045-0.044,0.045V19.2c-0.03,0-0.06,0-0.09,0
				c0,0.03,0,0.059,0,0.089s-0.015,0.045-0.044,0.045c-0.061,0-0.104,0.015-0.135,0.045l-0.045,0.045
				c-0.03,0.03-0.06,0.059-0.09,0.089l-0.044,0.045v0.045c-0.03,0-0.06,0-0.09,0c-0.03,0.03-0.044,0.059-0.044,0.089v0.045H5.683
				c-0.029,0.03-0.059,0.045-0.089,0.045c0,0.03-0.014,0.045-0.045,0.045c0,0.03-0.015,0.059-0.044,0.089l-0.09,0.09
				c-0.03,0.031-0.045,0.061-0.045,0.09c-0.06,0-0.089,0.014-0.089,0.044l-0.045,0.045c-0.029,0.03-0.059,0.045-0.09,0.045
				c0,0.03-0.014,0.06-0.045,0.09l-0.044,0.044c-0.03,0.03-0.061,0.061-0.09,0.09v0.045l-0.09,0.089c0,0.03-0.015,0.045-0.044,0.045
				c-0.03,0.03-0.045,0.06-0.045,0.09c-0.029,0-0.045,0.015-0.045,0.045c-0.03,0.029-0.045,0.059-0.045,0.089
				c-0.03,0-0.06,0.015-0.088,0.045v0.045c-0.031,0.029-0.045,0.059-0.045,0.089c-0.03,0-0.06,0-0.09,0c0,0.03,0,0.06,0,0.09
				c-0.03,0-0.059,0.015-0.089,0.044c0,0.03-0.016,0.061-0.045,0.09c-0.029,0-0.045,0.015-0.045,0.045
				c0,0.03-0.014,0.045-0.045,0.045c0,0.031,0,0.061,0,0.09H4.203c-0.03,0.029-0.074,0.044-0.134,0.044v0.045
				c0,0.03-0.015,0.061-0.045,0.09c0,0.03-0.015,0.046-0.044,0.046c0,0.029,0,0.059,0,0.089V21.8c-0.06,0-0.105,0.015-0.133,0.045
				v0.045c-0.031,0.03-0.061,0.06-0.091,0.09v0.044c0,0.032-0.014,0.045-0.044,0.045c0,0.03-0.015,0.06-0.045,0.09v0.089
				c-0.059,0-0.09,0.015-0.09,0.045c0,0.03,0,0.06,0,0.09c-0.029,0-0.044,0.015-0.044,0.045l-0.044,0.044
				c-0.03,0.031-0.045,0.062-0.045,0.09l-0.044,0.045v0.045c-0.03,0.031-0.046,0.06-0.046,0.089v0.09
				c0,0.029-0.029,0.045-0.088,0.045c0,0.03,0,0.059,0,0.089v0.045c0,0.03-0.016,0.06-0.045,0.09v0.134
				c-0.03,0-0.06,0.015-0.09,0.045v0.089c0,0.031,0,0.061,0,0.09v0.09c-0.119,0-0.224,0-0.313,0
				c-0.329-0.03-0.644-0.045-0.942-0.045c-0.12,0-0.239,0-0.359,0c-0.06,0-0.09-0.015-0.09-0.045c0-0.03,0-0.06,0-0.09
				c-0.029-0.029-0.044-0.06-0.044-0.089c-0.031,0-0.046-0.015-0.046-0.045v-0.045c0-0.03,0-0.059,0-0.089v-0.045
				c0-0.03,0-0.06,0-0.09v-0.135c-0.03-0.03-0.06-0.045-0.089-0.045c0-0.03,0-0.059,0-0.09v-0.044c0-0.03,0-0.06,0-0.09v-0.09
				l-0.045-0.044v-0.045c0-0.03,0-0.06,0-0.09v-0.045c0-0.029,0-0.06,0-0.089v-0.045l-0.09-0.045c0-0.03,0-0.059,0-0.089
				c0-0.03,0-0.06,0-0.09v-0.045c0-0.03,0-0.06,0-0.089v-0.045c0-0.03-0.014-0.044-0.044-0.044c0-0.03-0.015-0.06-0.044-0.09v-0.134
				c0-0.03,0-0.06,0-0.09c-0.03,0-0.06,0-0.089,0c0-0.03,0-0.06,0-0.09v-0.134c0-0.03,0-0.06,0-0.09V20.95c0-0.03,0-0.061,0-0.091
				v-0.045c0-0.03-0.015-0.06-0.046-0.089c0-0.03,0-0.06,0-0.09v-0.089c0-0.03,0-0.06,0-0.09v-0.045c0-0.03-0.015-0.059-0.044-0.089
				c-0.03,0-0.044-0.015-0.044-0.045v-0.136c0-0.03,0-0.059,0-0.089v-0.045c0-0.029,0-0.06,0-0.09L0.75,19.873v-0.045l-0.044-0.045
				v-0.045c0-0.03,0-0.059,0-0.089v-0.045c0-0.031,0-0.061,0-0.091v-0.089c0-0.03,0-0.06,0-0.09c0-0.029,0-0.06,0-0.09V19.2
				c0-0.03,0-0.061,0-0.09v-0.09c0-0.029,0-0.059,0-0.089v-0.045c0-0.029-0.031-0.045-0.09-0.045v-0.045c0-0.029,0-0.059,0-0.089
				v-0.09c0-0.03,0-0.059,0-0.089v-0.045c0-0.03,0-0.06,0-0.09c0-0.03,0-0.059,0-0.089c-0.03,0-0.044-0.015-0.044-0.045v-0.044
				c0-0.03,0-0.061,0-0.09v-0.045c0-0.03,0-0.06,0-0.089v-0.18c0-0.03,0-0.059,0-0.09v-0.044c0-0.03-0.016-0.061-0.045-0.09v-0.044
				l-0.045-0.046v-0.044c0-0.03,0-0.06,0-0.09v-0.09c0-0.029,0-0.059,0-0.089v-0.089c0-0.03,0-0.061,0-0.09
				c0-0.03-0.015-0.045-0.046-0.045v-0.045l-0.044-0.044c0-0.03,0-0.061,0-0.09v-0.09c0-0.03,0-0.059,0-0.09v-0.134
				c0-0.03,0-0.059,0-0.09V16.33c0-0.03,0-0.061,0-0.09v-0.09c0-0.029,0-0.059,0-0.089H0.301c0-0.03,0-0.06,0-0.089v-0.046
				c0-0.029,0-0.059,0-0.089v-0.089c0-0.03,0-0.061,0-0.09v-0.135c0-0.03,0-0.061,0-0.09v-0.09c-0.029-0.03-0.045-0.059-0.045-0.09
				v-0.134c0-0.03,0-0.059,0-0.089v-0.09c0-0.03,0-0.059,0-0.089v-0.045c0-0.03,0-0.06,0-0.09v-0.179c0-0.03,0-0.061,0-0.09v-0.044
				c0-0.03,0-0.061,0-0.09v-0.18c0-0.03,0-0.06,0-0.09v-0.045c0-0.059,0-0.105,0-0.133v-0.046c0-0.029,0-0.059,0-0.089
				c-0.029-0.03-0.045-0.062-0.045-0.089l-0.044-0.046c0-0.029,0-0.059,0-0.089c0-0.03,0-0.06,0-0.089c0-0.062,0-0.105,0-0.135
				s0-0.06,0-0.089c0-0.062,0-0.105,0-0.135c0-0.03,0-0.075,0-0.134c0-0.03,0-0.075,0-0.135v-0.089c0-0.03,0-0.06,0-0.09
				c0-0.06,0-0.104,0-0.134c0-0.06,0-0.105,0-0.135c0-0.031,0-0.076,0-0.135c0-0.06,0-0.104,0-0.134c0-0.062,0-0.105,0-0.135
				c0-0.029,0-0.061,0-0.089c0-0.031,0-0.075,0-0.135c0-0.029,0-0.076,0-0.135c0-0.03,0-0.06,0-0.09v-0.089c0-0.06,0-0.105,0-0.135
				c0-0.061,0-0.104,0-0.134c0-0.03,0-0.075,0-0.135c0-0.03,0-0.059,0-0.089c0-0.03,0-0.075,0-0.135c0.03,0,0.044-0.015,0.044-0.044
				l0.045-0.045c0-0.03,0-0.06,0-0.09v-0.045c0-0.03,0-0.059,0-0.089c0-0.03,0-0.06,0-0.09v-0.089c0-0.03,0-0.06,0-0.09v-0.045
				c0-0.029,0-0.06,0-0.089V9.87c0-0.03,0-0.059,0-0.089V9.736c0-0.03,0.016-0.059,0.045-0.09V9.511c0-0.03,0-0.059,0-0.09V9.332
				c0-0.03,0-0.06,0-0.09V9.153c0-0.03,0-0.06,0-0.09V8.929c0.03,0,0.06-0.015,0.089-0.045V8.838c0.449,0,0.897,0.015,1.346,0.045
				v0.089c0.03,0,0.06,0,0.091,0v0.045l0.044,0.045v0.673c6.161,0,12.334,0,18.524,0c0.031,0,0.046-0.015,0.046-0.045l0.044-0.045
				h0.045c0.029,0,0.044-0.015,0.044-0.044V9.556h0.09V9.511l0.045-0.09h0.045l0.044-0.089h0.045l0.045-0.045l0.09-0.045V9.197
				c0.03,0,0.059-0.014,0.09-0.044l0.045-0.045h0.045V9.063c0-0.03,0.014-0.045,0.045-0.045h0.044V8.973l0.09-0.089
				c0.03,0,0.045-0.015,0.045-0.045c0.029,0,0.045-0.015,0.045-0.045c0.029,0,0.044-0.014,0.044-0.045l0.09-0.089
				c0.03,0,0.044-0.015,0.044-0.045h0.045c0-0.03,0.015-0.045,0.044-0.045V8.524l0.09-0.044c0-0.03,0.015-0.045,0.044-0.045h0.045
				L22.1,8.21V8.166h0.044l0.045-0.044h0.045c0-0.03,0.016-0.046,0.044-0.046V8.031c0.03-0.03,0.06-0.045,0.091-0.045
				c0.03-0.03,0.059-0.045,0.089-0.045c0.03,0,0.059-0.015,0.089-0.044l0.09-0.09c0.06,0,0.104,0,0.134,0V7.402
				c0.029,0,0.06-0.014,0.09-0.044V7.225c0.209,0,0.419,0,0.628,0v0.089c2.183,0,4.365,0,6.548,0V6.91
				c0-0.03-0.015-0.045-0.044-0.045V6.82L29.95,6.776V6.103c-0.09,0-0.195,0-0.315,0v0.449c-0.029,0-0.045,0.014-0.045,0.044
				c-0.208,0-0.418,0-0.627,0V6.417l-0.045-0.045V6.103c-0.598,0-1.195,0-1.793,0v0.404h-0.044v0.089c-0.21,0-0.419,0-0.628,0V6.282
				c-0.03,0-0.06,0-0.089,0V6.237c0-0.09,0-0.164,0-0.224s0-0.12,0-0.179c0-0.09,0-0.166,0-0.225c0-0.06,0-0.135,0-0.224
				c0-0.06,0-0.119,0-0.179c0-0.06,0-0.135,0-0.224c0-0.06,0-0.119,0-0.181c0-0.089,0-0.163,0-0.224c0-0.059,0-0.119,0-0.178
				c0-0.09,0-0.166,0-0.225c0-0.06,0-0.135,0-0.224c0-0.061,0-0.121,0-0.179c0-0.06,0-0.135,0-0.225c0-0.06,0-0.12,0-0.18
				c0-0.059,0-0.134,0-0.224c0-0.059,0-0.12,0-0.18c0-0.089,0-0.164,0-0.224c0-0.06,0-0.119,0-0.179c0-0.06,0-0.12,0-0.179
				c0.029,0,0.059,0,0.089,0v-0.18l0.045-0.045V2.11z M42.06,15.611l0.044-0.045H42.06V15.611z M33.178,16.419
				c-0.927,0-1.868,0-2.826,0v0.044l-0.044,0.09h-0.045v0.134c-0.03,0-0.044,0.015-0.044,0.045v0.18l-0.044,0.045v0.135h-0.046
				v0.178c0,0.031-0.014,0.046-0.044,0.046v0.673h0.044v0.089l0.046,0.045v0.09h0.044v0.178h0.044v0.584c0.867,0,1.72,0,2.557,0
				v-0.27h0.045v-0.044c0.03,0,0.044-0.016,0.044-0.046h0.044l0.09-0.089h0.045v-0.045l0.089-0.044c0-0.03,0.016-0.046,0.046-0.046
				l0.089-0.089h0.134l0.044-0.045c0-0.03,0.015-0.044,0.045-0.044l0.089-0.09c0.031,0,0.046-0.015,0.046-0.045
				c0.03,0,0.059-0.015,0.09-0.045v-0.044c0.029,0,0.059,0,0.089,0v-0.046c0.03,0,0.045-0.015,0.045-0.044h0.09
				c0-0.06,0-0.105,0-0.134c0-0.061,0-0.105,0-0.135c0-0.031,0-0.076,0-0.136c0-0.029,0-0.059,0-0.089s0-0.075,0-0.135
				c0-0.029,0-0.059,0-0.089c0-0.03,0-0.061,0-0.089l-0.045-0.046c0-0.029-0.015-0.044-0.044-0.044c0-0.03-0.015-0.045-0.045-0.045
				l-0.089-0.045c-0.031,0-0.06-0.015-0.09-0.044v-0.046c-0.03,0-0.046-0.015-0.046-0.044h-0.044c-0.029-0.03-0.06-0.045-0.09-0.045
				v-0.089c-0.029,0-0.059-0.015-0.09-0.046c-0.03,0-0.044-0.015-0.044-0.044l-0.044-0.045h-0.045l-0.044-0.045
				C33.224,16.433,33.208,16.419,33.178,16.419z M28.469,17.092c-0.03,0-0.044-0.015-0.044-0.046c-0.03,0-0.044-0.015-0.044-0.044
				v-0.045c-0.09,0-0.195,0-0.314,0c0,0.06,0,0.104,0,0.135c0,0.059,0,0.119,0,0.178c0,0.031,0,0.075,0,0.135s0,0.105,0,0.135
				c0,0.059,0,0.104,0,0.134c0,0.06,0,0.119,0,0.179c0,0.03,0,0.074,0,0.135c0,0.059,0,0.104,0,0.134c0,0.06,0,0.119,0,0.18
				l0.044,0.045c0.031,0,0.046,0.014,0.046,0.044H28.2v0.09h0.045v0.045l0.045,0.044v0.045h0.09v0.046l0.089,0.044h0.045v0.045
				c0.029,0.03,0.06,0.044,0.09,0.044h0.044v0.045h0.044l0.089,0.045v0.09c0.21,0,0.419,0,0.628,0v-0.09c-0.029,0-0.06,0-0.089,0
				v-0.09c-0.029,0-0.044-0.014-0.044-0.044v-0.045h-0.046v-0.044c-0.03,0-0.044-0.016-0.044-0.046h-0.045v-0.089l-0.044-0.045
				v-0.09c-0.03,0-0.06-0.015-0.09-0.044v-0.134h-0.045v-0.135l-0.045-0.045v-0.09l-0.089-0.089v-0.045h-0.046v-0.044
				c0-0.03-0.014-0.046-0.044-0.046c0-0.029-0.016-0.044-0.045-0.044v-0.09l-0.044-0.044v-0.046h-0.044v-0.089l-0.046-0.045v-0.09
				h-0.044v-0.044c-0.03,0-0.045-0.015-0.045-0.045V17.092z`,
            }),
          });
        }
        function R1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 99.75 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M37.502,4.18c0.024-0.024,0.037-0.048,0.037-0.074
				c0.024-0.025,0.038-0.05,0.038-0.075c0.024-0.026,0.037-0.051,0.037-0.075c0.025,0,0.05,0,0.075,0s0.061,0,0.111,0V3.919
				c0.646,0,1.282,0,1.904,0c0.05,0,0.086,0,0.111,0c0.1,0,0.212,0,0.336,0c0.05,0.024,0.087,0.037,0.112,0.037
				c0.025,0.024,0.049,0.062,0.074,0.112l0.038,0.038c0.025,0.026,0.037,0.049,0.037,0.074c0,0.025,0,0.05,0,0.075
				c0,0.025,0,0.049,0,0.074c-0.024,0.025-0.037,0.051-0.037,0.075c-0.026,0.025-0.038,0.05-0.038,0.076
				c-0.025,0-0.037,0.012-0.037,0.037v0.037c0,0.025,0,0.049,0,0.075s0,0.05,0,0.075c0,0.024,0,0.05,0,0.074v0.037
				c0,0.025,0,0.05,0,0.075c0,0.026,0,0.05,0,0.075c0,0.025,0,0.062,0,0.112c0,0.025,0,0.049,0,0.074v0.037c0,0.025,0,0.05,0,0.075
				s0,0.05,0,0.075c0,0.024,0,0.049,0,0.074c0,0.025,0,0.05,0,0.075h0.037c0.025,0,0.038,0.012,0.038,0.037
				c0.025,0.049,0.037,0.087,0.037,0.112s-0.012,0.05-0.037,0.074c0,0.025-0.013,0.049-0.038,0.075l-0.037,0.038
				c0,0.024,0,0.049,0,0.074c0,0.025,0,0.049,0,0.075c0,0.024,0,0.05,0,0.074c0,0.05,0,0.086,0,0.111v0.038c0,0.025,0,0.05,0,0.076
				c0,0.023,0,0.048,0,0.073s0,0.05,0,0.074c0,0.026,0,0.051,0,0.076v0.038c0,0.049,0,0.086,0,0.111c0,0.026,0,0.051,0,0.076
				c0,0.025,0,0.05,0,0.075V6.83c-0.025,0.024-0.037,0.049-0.037,0.075v0.036c2.538,0,5.1,0,7.687,0c0.025,0,0.05,0.013,0.076,0.038
				c0-0.025,0.012-0.038,0.037-0.038c0.124-0.025,0.223-0.048,0.299-0.074c0.049-0.026,0.11-0.038,0.186-0.038
				c0.099-0.025,0.174-0.05,0.223-0.075c0.075-0.024,0.138-0.049,0.187-0.074c0.075-0.025,0.162-0.05,0.261-0.075
				c0.05-0.025,0.112-0.049,0.187-0.074c0.05-0.025,0.125-0.05,0.224-0.075c0.076-0.025,0.125-0.05,0.15-0.075
				c0.074-0.025,0.15-0.038,0.224-0.038c0-0.025,0.012-0.05,0.037-0.073c0.025-0.026,0.051-0.051,0.077-0.076
				c0.049-0.025,0.086-0.038,0.111-0.038c0.025-0.025,0.05-0.062,0.076-0.111c0.074,0,0.123-0.013,0.147-0.037
				c0.05-0.025,0.112-0.038,0.188-0.038c0.049-0.026,0.099-0.062,0.148-0.112c0.025-0.024,0.05-0.037,0.075-0.037
				c0.024,0,0.05-0.013,0.074-0.038h0.038c0-0.026,0-0.05,0-0.075c0.025-0.024,0.048-0.049,0.074-0.074l0.075-0.075
				c0.025,0,0.062,0,0.112,0V5.523c0.571,0,1.12,0,1.641,0V5.487c0.175,0,0.361,0,0.561,0v0.037c0.124,0,0.236,0,0.335,0
				c0.024,0,0.037-0.012,0.037-0.037c0.199,0,0.374,0,0.523,0l0.037,0.037c0.622,0,1.245,0,1.866,0c0.025,0,0.05,0,0.076,0
				c0.049,0,0.099,0.013,0.148,0.038l0.037,0.075c0.05,0.025,0.1,0.05,0.149,0.074c0.025,0.025,0.05,0.049,0.075,0.075l0.037,0.038
				c0.025,0.024,0.038,0.049,0.038,0.074c0,0.025,0,0.049,0,0.075c0,0.024-0.013,0.05-0.038,0.074c0,0.025-0.012,0.05-0.037,0.075
				v0.037c-0.025,0-0.05,0.013-0.075,0.038c0,0.05-0.013,0.087-0.037,0.112c0,0.024,0,0.049,0,0.074s0,0.049,0,0.075v0.037
				c0,0.024,0,0.05,0,0.075v0.149c0,0.025,0,0.05,0,0.075c0,0.025,0,0.049,0,0.075c0,0.025,0,0.062,0,0.112c0,0.024,0,0.062,0,0.112
				c0,0.025,0,0.05,0,0.075c0,0.049,0,0.087,0,0.111c0,0.05,0,0.086,0,0.112c0,0.049,0,0.087,0,0.111c0,0.026,0,0.063,0,0.113
				c0,0.023,0,0.062,0,0.11c0,0.027,0,0.063,0,0.112v0.075c0,0.025,0,0.062,0,0.112c0,0.05,0,0.088,0,0.113c0,0.024,0,0.049,0,0.074
				c0,0.049,0,0.087,0,0.112c0,0.049,0,0.086,0,0.112V8.51c0,0.049,0,0.098,0,0.147c0,0.025,0,0.063,0,0.113
				c0,0.024,0,0.048,0,0.073c0,0.026,0,0.063,0,0.113c0,0.024,0,0.062,0,0.112s0,0.087,0,0.111c0,0.025,0,0.05,0,0.075
				c0,0.051,0,0.087,0,0.112c0,0.049,0,0.087,0,0.112s0,0.062,0,0.111c0,0.025,0,0.063,0,0.112c0,0.026,0,0.063,0,0.112
				c0,0.025,0,0.05,0,0.075c0,0.024,0,0.062,0,0.112c0,0.024,0,0.062,0,0.112v0.075c0,0.048,0,0.088,0,0.112c0,0.05,0,0.086,0,0.111
				c0,0.05,0,0.087,0,0.112s0,0.062,0,0.112c0,0.025,0,0.051,0,0.075c12.389,0,24.766,0,37.128,0c1.767,0,3.521,0,5.262,0
				c0.074,0.024,0.149,0.049,0.224,0.074c0.05,0.024,0.087,0.049,0.112,0.075v0.037c0.049,0.024,0.087,0.061,0.112,0.112
				c0.025,0.024,0.05,0.063,0.075,0.112l0.036,0.075c0,0.05,0,0.086,0,0.111c0,0.05,0,0.087,0,0.111c0,0.05,0,0.088,0,0.114
				c0,0.023-0.012,0.061-0.036,0.111c0,0.025-0.013,0.063-0.038,0.112c-0.024,0.024-0.05,0.062-0.074,0.113v0.074
				c0,0.025,0,0.062,0,0.113c0,0.049,0,0.086,0,0.11c0,0.025,0,0.05,0,0.076c0,0.049,0,0.086,0,0.112c0,0.05,0,0.086,0,0.111v0.076
				c0,0.025,0,0.05,0,0.075c0,0.024,0,0.049,0,0.075v0.037c0,0.024,0,0.062,0,0.112c0,0.025-0.013,0.05-0.038,0.075
				c-0.025,0.025-0.037,0.062-0.037,0.112c-0.025,0.024-0.062,0.062-0.112,0.11c-0.075,0.025-0.15,0.05-0.224,0.076
				c-0.074,0-0.161,0-0.261,0c-0.075,0-0.137,0-0.187,0c-0.074-0.025-0.162-0.051-0.261-0.076
				c-7.986-0.024-15.971-0.049-23.957-0.074c0,0.025,0,0.05,0,0.074c0,0.025,0,0.05,0,0.076c0,0.025,0,0.05,0,0.075
				c0,0.049,0,0.087,0,0.112c0,0.023,0,0.049,0,0.074l0.037,0.037c0,0.05,0,0.087,0,0.112c0,0.024,0,0.063,0,0.112
				c0,0.025,0,0.062,0,0.112c0,0.024,0,0.05,0,0.075c0,0.025,0,0.063,0,0.112v0.113c0,0.049,0,0.086,0,0.111
				c0,0.025,0,0.051,0,0.076v0.111c0,0.049,0,0.086,0,0.111v0.113c0,0.024,0,0.062,0,0.111c0,0.026,0,0.063,0,0.113
				c0,0.024,0,0.049,0,0.075c0,0.024,0,0.063,0,0.111v0.299c0,0.05,0,0.087,0,0.113c0,0.049,0,0.086,0,0.111v0.112
				c0,0.025,0,0.063,0,0.112c0,0.024,0,0.063,0,0.112v0.075c0,0.024,0,0.062,0,0.112v0.112c0,0.024,0,0.049,0,0.075v0.708
				c-0.024,0-0.049,0.012-0.074,0.037h-0.038c0,0.026,0,0.063,0,0.112c0,0.05,0,0.087,0,0.113c0,0.025,0,0.049,0,0.074
				c0,0.05,0,0.087,0,0.112c0,0.05,0,0.087,0,0.112c0,0.025,0,0.063,0,0.112c0,0.025,0,0.062,0,0.112c0,0.024,0,0.063,0,0.112
				c0,0.025,0,0.049,0,0.074c0,0.025,0,0.063,0,0.114c0,0.024,0,0.061,0,0.11v0.075c0,0.049,0,0.086,0,0.111
				c-0.026,0.049-0.05,0.087-0.076,0.112c0,0.051-0.013,0.087-0.037,0.113c-0.025,0-0.049,0.024-0.075,0.073
				c-0.024,0-0.037,0.013-0.037,0.038c0,0.026,0.013,0.051,0.037,0.075c0.026,0.025,0.039,0.062,0.039,0.112
				c0,0.025-0.013,0.05-0.039,0.075c0,0.025-0.012,0.05-0.037,0.075c0,0.1,0,0.186,0,0.261c0,0.1,0,0.187,0,0.261
				c0,0.074,0,0.161,0,0.261c0,0.075,0,0.15,0,0.225c0,0.1,0,0.187,0,0.262c0,0.099,0,0.186,0,0.26s0,0.163,0,0.262
				c0,0.1,0,0.174,0,0.223c0,0.101,0,0.187,0,0.262c0,0.099,0,0.186,0,0.262c0,0.075,0,0.162,0,0.261c0,0.1,0,0.174,0,0.224v0.037
				c0.05,0,0.087,0.013,0.112,0.037c0.024,0.05,0.05,0.087,0.074,0.112l0.039,0.074c0,0.025,0,0.05,0,0.074h0.038
				c0.024,0.05,0.049,0.088,0.074,0.113c0,0.05,0,0.086,0,0.11c0,0.026,0,0.063,0,0.114c-0.024,0.024-0.049,0.061-0.074,0.11v0.038
				c0,0.026,0,0.05,0,0.074v0.075c0,0.025,0,0.05,0,0.075s0,0.049,0,0.074c0,0.025,0,0.049,0,0.074c0,0.025,0,0.05,0,0.075v0.038
				c0,0.025,0,0.05,0,0.074v0.039h-0.038v0.037h0.038c0,0.024,0.012,0.037,0.037,0.037h0.037c0.026,0.025,0.075,0.05,0.148,0.075
				c0.025,0.024,0.05,0.037,0.076,0.037c0,0.025,0.012,0.05,0.037,0.074c0.025,0.026,0.038,0.05,0.038,0.075c0,0.024,0,0.05,0,0.075
				c0,0.025,0.012,0.062,0.037,0.11v0.039c0,0.025,0.012,0.05,0.038,0.075c0,0.025,0,0.049,0,0.074c0,0.024,0.013,0.051,0.038,0.075
				c0.024,0.025,0.037,0.05,0.037,0.075c0.024,0,0.037,0.011,0.037,0.036c0.025,0.025,0.037,0.063,0.037,0.113
				c0.025,0.024,0.038,0.049,0.038,0.073c0.025,0.026,0.05,0.051,0.074,0.076c0,0.025,0.014,0.037,0.038,0.037
				c0,0.025,0,0.05,0,0.075s0.013,0.049,0.037,0.076c0,0.024,0,0.049,0,0.073c0.025,0.025,0.039,0.063,0.039,0.113
				c0.024,0,0.038,0.012,0.038,0.036c0,0.026,0.012,0.051,0.037,0.076c0,0.024,0,0.049,0,0.073c0.025,0.026,0.037,0.051,0.037,0.076
				s0.012,0.05,0.038,0.075l0.037,0.037c0.024,0.025,0.037,0.063,0.037,0.113c0,0.024,0.013,0.05,0.038,0.074
				c0,0.025,0,0.049,0,0.075c0,0.024,0.013,0.038,0.038,0.038c0,0.025,0,0.049,0,0.074c0.024,0.023,0.037,0.05,0.037,0.074
				c0.025,0.024,0.038,0.049,0.038,0.074c0,0.026,0.012,0.063,0.037,0.113l0.038,0.037c0,0.025,0.013,0.05,0.038,0.075
				c0,0.024,0.013,0.051,0.037,0.075c0.024,0.025,0.038,0.049,0.038,0.074c0.024,0.025,0.037,0.05,0.037,0.075v0.038
				c0,0.024,0,0.048,0,0.075c0.025,0.049,0.037,0.086,0.037,0.111c0.05,0.025,0.087,0.05,0.111,0.076
				c0.024,0.024,0.049,0.037,0.075,0.037c0,0.025,0,0.049,0,0.074c0.026,0.025,0.051,0.051,0.075,0.075c0,0.026,0,0.051,0,0.075
				c0.026,0.024,0.062,0.05,0.111,0.074c0.026,0.025,0.052,0.038,0.076,0.038c0.024,0.025,0.049,0.05,0.074,0.075
				c0,0.024,0.012,0.05,0.037,0.074c0.026,0.025,0.051,0.05,0.076,0.075c0,0.024,0,0.05,0,0.075s0,0.05,0,0.075
				c0,0.025,0,0.049,0,0.074c0,0.025,0,0.05,0,0.075c0,0.025,0,0.05,0,0.075s0,0.049,0,0.075c-0.025,0-0.039,0.012-0.039,0.038
				c-0.024,0.024-0.037,0.049-0.037,0.074c0.026,0,0.051,0,0.076,0c0,0.05,0.011,0.087,0.037,0.112c0,0.025,0.013,0.05,0.038,0.075
				l0.037,0.036c0,0.026,0,0.052,0,0.076c-0.024,0.025-0.05,0.051-0.074,0.075c0,0.025,0,0.05,0,0.075
				c-0.025,0.025-0.037,0.049-0.037,0.074c0,0.025-0.013,0.049-0.039,0.074c-0.024,0.025-0.049,0.049-0.074,0.074
				c0,0.026,0,0.05,0,0.075c-0.025,0.025-0.049,0.051-0.074,0.075c0,0.025-0.012,0.049-0.037,0.075
				c-0.025,0-0.051,0.012-0.076,0.038c0,0.024,0,0.05,0,0.073c0,0.05,0,0.088,0,0.113c-0.025,0.024-0.038,0.049-0.038,0.075v0.037
				c0,0.025-0.011,0.05-0.037,0.075c-0.024,0.025-0.049,0.037-0.075,0.037c-0.05,0.025-0.099,0.037-0.149,0.037
				c-0.024,0-0.049,0-0.074,0c-0.05,0-0.088,0-0.112,0c-0.598,0-1.206,0-1.829,0c-0.05-0.024-0.099-0.037-0.148-0.037
				c-0.026-0.024-0.05-0.049-0.076-0.075c-0.024-0.025-0.038-0.05-0.038-0.074c0-0.025,0-0.051,0-0.075c0-0.025,0-0.05,0-0.076
				c0-0.024,0-0.049,0-0.074v-0.037c0-0.026,0-0.051,0-0.076c0-0.024,0-0.049,0-0.074c0-0.024,0-0.049,0-0.074
				c0-0.026,0-0.051,0-0.075c0-0.025,0-0.05,0-0.075v-0.037c0-0.025,0-0.049,0-0.074c0-0.025,0-0.063,0-0.112
				c0-0.025,0-0.051,0-0.075v-0.039c0-0.024,0-0.048,0-0.073s0-0.049,0-0.074s0-0.05,0-0.075c0-0.024,0-0.05,0-0.074
				c0-0.025,0-0.05,0-0.076c0-0.024,0-0.049,0-0.073c0-0.026,0-0.05,0-0.076c0-0.024,0-0.051,0-0.074c0-0.025,0-0.05,0-0.075v-0.037
				c0-0.025,0.013-0.051,0.038-0.075c0.026-0.025,0.05-0.062,0.076-0.112c0-0.026,0-0.05,0-0.075c0-0.025,0-0.049,0-0.075
				c0.023-0.024,0.036-0.05,0.036-0.074l0.037-0.037c0.025,0,0.05-0.012,0.075-0.038c0.025,0,0.063-0.013,0.112-0.038
				c0.049,0,0.087-0.012,0.112-0.037h0.037l-0.037-0.037v-0.037c0-0.025,0-0.051,0-0.075s0-0.049,0-0.075
				c-0.025-0.024-0.037-0.049-0.037-0.073c-0.025-0.027-0.037-0.051-0.037-0.075c0-0.024,0-0.051,0-0.075
				c-0.025-0.024-0.038-0.05-0.038-0.075c-0.025-0.024-0.049-0.048-0.075-0.074c0-0.025-0.012-0.05-0.038-0.074
				c0-0.025-0.012-0.05-0.038-0.075c-0.024,0-0.049-0.012-0.074-0.038c0-0.024,0-0.049,0-0.075c0-0.025,0-0.05,0-0.074
				c0-0.051,0-0.086,0-0.113l-0.036-0.036c-0.026-0.025-0.039-0.05-0.039-0.075c-0.024-0.026-0.049-0.051-0.075-0.075
				c0-0.024,0-0.05,0-0.075c0-0.025,0-0.049,0-0.074l-0.037-0.037c-0.025-0.05-0.036-0.087-0.036-0.113
				c-0.026-0.024-0.038-0.049-0.038-0.074c-0.025-0.025-0.037-0.049-0.037-0.074c0-0.026-0.014-0.051-0.039-0.075v-0.038
				c0-0.025-0.013-0.05-0.037-0.075c0-0.024-0.012-0.049-0.037-0.073c-0.025-0.051-0.038-0.088-0.038-0.113l-0.037-0.037
				c-0.025-0.025-0.037-0.049-0.037-0.075c0-0.025,0-0.049,0-0.075c0-0.024-0.013-0.049-0.038-0.074c0-0.024-0.012-0.05-0.037-0.076
				c-0.025-0.024-0.052-0.036-0.075-0.036c0-0.05,0-0.087,0-0.113c0-0.025,0-0.05,0-0.075c0.023-0.024,0.037-0.049,0.037-0.074
				l0.038-0.038c-0.598,0-1.207,0.012-1.83,0.038c-0.049,0.024-0.112,0.05-0.186,0.074c-0.075,0-0.162,0-0.262,0
				c-0.049-0.024-0.087-0.037-0.112-0.037h-0.037c-0.026,0-0.062,0.013-0.112,0.037c-0.075-0.024-0.149-0.049-0.225-0.074
				c0-0.052-0.025-0.077-0.075-0.077c0-0.048,0-0.085,0-0.11c0-0.051,0-0.087,0-0.112c0-0.05,0-0.087,0-0.112
				c0-0.026,0-0.063,0-0.112c0-0.024,0-0.062,0-0.112c0-0.024,0-0.062,0-0.111v-0.075c0-0.025,0-0.062,0-0.112
				c0-0.049,0-0.087,0-0.112c0-0.025,0-0.05,0-0.075c0-0.048,0-0.086,0-0.112c0-0.05,0-0.086,0-0.11
				c0.024-0.051,0.037-0.088,0.037-0.114c0-0.024-0.013-0.061-0.037-0.11c0-0.025,0-0.063,0-0.113
				c0.024-0.024,0.05-0.049,0.075-0.074c0-0.025,0.013-0.049,0.039-0.074c0.049-0.025,0.098-0.062,0.148-0.112
				c0.05-0.024,0.1-0.049,0.149-0.074c0.199,0,0.386-0.013,0.56-0.038v-0.036c0-0.027,0-0.051,0-0.076c0-0.05,0-0.087,0-0.113
				c0-0.049,0-0.085,0-0.111c0-0.026,0-0.062,0-0.112c0-0.024,0-0.063,0-0.113c0.024-0.025,0.036-0.062,0.036-0.111
				c-0.175,0-0.372,0-0.596,0c-0.049-0.025-0.1-0.038-0.149-0.038c-0.05-0.024-0.1-0.063-0.148-0.111
				c0-0.025-0.014-0.037-0.039-0.037c0-0.05-0.025-0.089-0.075-0.114v-0.074c0-0.049,0-0.087,0-0.111c0-0.05,0-0.087,0-0.113
				c0-0.049,0-0.1,0-0.149v-0.075c0-0.024,0-0.062,0-0.111c0-0.025,0-0.062,0-0.112c0.024-0.025,0.05-0.05,0.075-0.075v-0.039
				c0-0.049-0.025-0.087-0.075-0.112c0-0.05,0-0.086,0-0.111c0-0.024,0-0.05,0-0.075c0-0.049,0-0.086,0-0.112
				c0.024-0.05,0.05-0.086,0.075-0.111c0-0.051,0.013-0.075,0.039-0.075c0.073,0,0.135,0,0.186,0v-0.038c0.074,0,0.161,0,0.26,0
				c0.1,0,0.187,0,0.262,0l-0.037-0.037c0-0.025,0-0.062,0-0.112c0-0.024,0-0.062,0-0.112c0-0.024,0-0.05,0-0.075
				c0-0.025,0-0.063,0-0.112c0-0.05,0-0.087,0-0.112v-0.075c0-0.049,0-0.087,0-0.111c0-0.051,0-0.086,0-0.112
				c0-0.049,0-0.086,0-0.111c0-0.026,0-0.062,0-0.113c0-0.024,0-0.063,0-0.112c0-0.025,0-0.062,0-0.111V18.21c0-0.05,0-0.086,0-0.11
				c0-0.051,0-0.089,0-0.114c0-0.024,0-0.049,0-0.074c0-0.049,0-0.088,0-0.112c0-0.05,0-0.087,0-0.112c0-0.049,0-0.087,0-0.112
				c0-0.025,0-0.062,0-0.112c0-0.024,0-0.062,0-0.112c0-0.025,0-0.049,0-0.074c0-0.025,0-0.05,0-0.075
				c-0.026,0.025-0.051,0.037-0.075,0.037c-0.1-0.024-0.187-0.05-0.262-0.075c-0.025-0.05-0.05-0.086-0.074-0.112v-0.037h-0.037
				c-0.05-0.05-0.088-0.074-0.112-0.074c-0.024-0.05-0.062-0.088-0.111-0.113c0-0.049,0-0.086,0-0.111c0-0.024,0-0.063,0-0.112
				h-0.039v-0.074c0-0.024,0-0.05,0-0.076c0-0.024,0-0.05,0-0.074c0-0.025,0-0.049,0-0.074v-0.075c0-0.024,0-0.05,0-0.074
				c0-0.025,0-0.05,0-0.076c0-0.024,0-0.05,0-0.074v-0.187c-0.025-0.049-0.05-0.087-0.075-0.112c0-0.024,0-0.05,0-0.075v-0.037
				c-7.787,0-15.573-0.012-23.359-0.038c-0.05-0.024-0.1-0.036-0.149-0.036l-0.037,0.036c0,0.026-0.013,0.063-0.039,0.112
				c-0.023,0.024-0.048,0.062-0.074,0.112c-0.049,0.025-0.086,0.061-0.111,0.111c-0.05,0.026-0.088,0.052-0.113,0.076
				c-0.024,0.024-0.049,0.061-0.074,0.11c-0.025,0.026-0.05,0.063-0.074,0.112c-0.025,0.05-0.05,0.075-0.076,0.075
				c-0.024,0.051-0.05,0.087-0.075,0.112c-0.025,0.05-0.048,0.086-0.074,0.112c-0.025,0.049-0.062,0.087-0.113,0.111
				c-0.023,0.024-0.061,0.062-0.111,0.112c0,0.025-0.012,0.063-0.038,0.111c-0.024,0.025-0.038,0.063-0.038,0.113
				c-0.024,0-0.049,0.024-0.074,0.074c-0.049,0.025-0.087,0.063-0.112,0.112c-0.05,0.049-0.087,0.087-0.112,0.111
				c-0.024,0.025-0.05,0.05-0.074,0.075c-0.024,0.05-0.051,0.087-0.075,0.112c-0.025,0.05-0.049,0.087-0.075,0.112l-0.036,0.074
				c-0.05,0.051-0.087,0.101-0.112,0.151c-0.025,0.024-0.05,0.061-0.074,0.111c-0.025,0.026-0.05,0.051-0.076,0.075
				c0,0.024-0.012,0.062-0.038,0.111c-0.024,0.026-0.063,0.063-0.111,0.112c-0.025,0.05-0.038,0.087-0.038,0.113
				c-0.024,0.025-0.049,0.049-0.075,0.075c-0.024,0.049-0.037,0.086-0.037,0.111c-0.049,0.051-0.087,0.088-0.111,0.112
				c-0.051,0.024-0.087,0.063-0.113,0.111c-0.024,0.025-0.049,0.063-0.075,0.112c-0.025,0.025-0.038,0.062-0.038,0.112
				c-0.025,0.025-0.05,0.05-0.074,0.075c-0.025,0.025-0.037,0.062-0.037,0.112c-0.05,0.024-0.087,0.062-0.113,0.111v0.075
				c-0.024,0.05-0.063,0.087-0.111,0.113c-0.024,0.049-0.051,0.087-0.076,0.111c-0.024,0.05-0.049,0.088-0.075,0.112
				c0,0.024-0.011,0.063-0.036,0.112c-0.025,0.024-0.05,0.062-0.075,0.111c-0.025,0.025-0.05,0.063-0.075,0.113
				c-0.024,0-0.049,0.026-0.075,0.075c-0.025,0.024-0.037,0.049-0.037,0.074c-0.523,0-1.056,0-1.604,0v0.038
				c-4.254,0-8.495,0-12.725,0c-0.101-0.025-0.199-0.05-0.298-0.075v0.075c-0.025,0-0.037,0.012-0.037,0.038V20.3h-0.038v0.076
				l-0.036,0.037v0.038c-0.025,0.024-0.063,0.036-0.114,0.036v0.038c0,0.025-0.012,0.037-0.037,0.037v0.112
				c-0.025,0-0.037,0.013-0.037,0.039v0.037c-0.025,0-0.039,0.013-0.039,0.037v0.113c0,0.024-0.011,0.037-0.037,0.037
				c0,0.025-0.013,0.038-0.038,0.038v0.037H28.36v0.15c-0.025,0-0.037,0.013-0.037,0.038v0.037c-0.025,0-0.038,0.012-0.038,0.036
				c-0.025,0-0.038,0.013-0.038,0.039v0.037h-0.037v0.038l-0.038,0.037v0.037c0,0.024-0.013,0.037-0.038,0.037v0.075
				c0,0.025-0.012,0.038-0.037,0.038l-0.038,0.037v0.075l-0.036,0.038h-0.039c0,0.048-0.012,0.099-0.036,0.148l-0.485,1.046
				l0.261,2.388c0.024,0.074,0,0.161-0.075,0.26c-0.075,0.075-0.149,0.113-0.225,0.113c-0.073,0-0.149-0.013-0.224-0.038
				c-0.024,0.024-0.049,0.049-0.075,0.073c-0.024,0.076-0.087,0.125-0.186,0.15l-1.717,0.261c-0.075,0.024-0.138,0.024-0.187,0
				l-2.536-1.006c-0.077-0.05-0.125-0.112-0.151-0.188c-0.024-0.025-0.048-0.049-0.073-0.075c-0.076-0.099-0.113-0.186-0.113-0.261
				l0.113-0.672c0-0.1,0.037-0.173,0.11-0.223c0.051-0.025,0.101-0.05,0.15-0.075v-0.785c0.025,0,0.037-0.012,0.037-0.037v-0.521
				c0.025,0,0.037-0.012,0.037-0.038v-0.038l0.039-0.037v-0.112c0.023-0.025,0.049-0.038,0.074-0.038v-0.036h0.037v-0.076
				l0.112-0.113v-0.073c0.025,0,0.038-0.012,0.038-0.038c0.025,0,0.037-0.013,0.037-0.037h0.075v-0.038l0.038-0.037v-0.076
				l0.037-0.037V21.42c0.024,0,0.05-0.013,0.075-0.037l0.036-0.038v-0.037c0.025,0,0.039-0.013,0.039-0.039l0.037-0.036v-0.037
				l0.037-0.038h0.038c0-0.025,0.012-0.038,0.036-0.038v-0.149l0.039-0.038v-0.037l0.037-0.038v-0.038
				c0.025,0,0.038-0.012,0.038-0.038l0.037-0.037v-0.037c0.024,0,0.037-0.012,0.037-0.039c0.024,0,0.051-0.012,0.075-0.037
				l0.075-0.075v-0.037l0.037-0.038v-0.074c0.025,0,0.051-0.012,0.077-0.037l0.036-0.038V20.3c0.025,0,0.038-0.012,0.038-0.037
				l0.037-0.039v-0.074c0-0.025,0.013-0.038,0.038-0.038l0.074-0.074v-0.113c0.024,0,0.038-0.011,0.038-0.037l0.037-0.038v-0.037
				c0.024,0,0.037-0.012,0.037-0.037l0.037-0.038v-0.037l0.039-0.038v-0.037h0.037v-0.075c0-0.025,0.013-0.038,0.037-0.038
				c0-0.024,0.013-0.037,0.037-0.037v-0.038l0.038-0.036v-0.113c0.024,0,0.037-0.013,0.037-0.038V19.18l0.038-0.037v-0.037
				c0.024-0.025,0.049-0.038,0.075-0.038l0.037-0.038v-0.037l0.038-0.038V18.92l0.037-0.038v-0.074c0.026,0,0.038-0.013,0.038-0.037
				l0.038-0.038v-0.261l-0.076-0.075v-0.149c-0.024,0-0.037-0.013-0.037-0.038V18.1l-0.038-0.039v-0.038l-0.037-0.037v-0.112
				L24.479,17.8V17.39l-0.038-0.037c-0.05,0-0.099,0-0.149,0c-0.472,0-0.946,0-1.418,0c0-0.025-0.012-0.037-0.038-0.037v-0.037
				c-0.074,0-0.162,0-0.261,0c-0.073-0.025-0.137-0.038-0.188-0.038v-0.187h-0.037v-0.335h-0.036c0,0.049,0,0.099,0,0.148
				c0,0.026,0,0.051,0,0.076v0.037c0,0.024,0,0.062,0,0.112c0,0.049,0,0.086,0,0.112v0.037c-0.199,0-0.398,0-0.597,0v0.038h-0.037
				v0.037h-0.037l-0.038,0.037c-0.024,0-0.038,0.013-0.038,0.037h-0.037c-0.024,0.025-0.05,0.038-0.074,0.038v0.037l-0.038,0.038
				c0,0.024-0.013,0.037-0.037,0.037v0.074h-0.038c0,0.026-0.013,0.039-0.037,0.039v0.037c-0.025,0.05-0.05,0.099-0.075,0.148
				l-0.037,0.038v0.038c-0.025,0-0.05,0-0.075,0v0.074c0,0.025,0,0.063,0,0.114c0,0.049,0,0.086,0,0.11v0.038
				c-0.024,0-0.05,0-0.075,0v0.038c0.025,0.1,0.025,0.199,0,0.298l-0.447,0.596c-0.075,0.075-0.149,0.113-0.224,0.113
				c-0.101,0.025-0.187,0.025-0.262,0c-0.074-0.075-0.111-0.149-0.111-0.224l-1.231,0.074c-0.075,0-0.149-0.024-0.224-0.074
				c-0.125,0.024-0.236,0.062-0.336,0.111c-0.05,0.026-0.086,0.05-0.111,0.075c-0.026,0-0.05,0-0.076,0c0,0.025,0,0.063,0,0.111
				c-0.025,0.1-0.086,0.163-0.185,0.188l-9.329,3.917c-0.101,0.051-0.188,0.051-0.263,0c-0.05-0.024-0.086-0.049-0.111-0.074
				c-0.125,0-0.237,0-0.337,0s-0.186,0-0.262,0c0,0.05,0,0.1,0,0.149c0,0.024,0,0.062,0,0.112c0,0.024,0,0.062,0,0.111
				c0,0.05,0,0.099,0,0.15c0,0.05,0,0.086,0,0.11c0,0.025,0,0.063,0,0.113c0,0.049,0,0.098,0,0.149c0,0.05,0,0.086,0,0.111
				c0,0.051,0,0.101,0,0.15c0,0.025,0,0.063,0,0.112c0,0.025,0,0.062,0,0.112c0,0.049,0,0.1,0,0.149c0,0.05,0,0.087,0,0.113v0.036
				c0.052,0,0.113,0.039,0.188,0.112c0.074,0.074,0.112,0.15,0.112,0.224v0.374c0,0.099-0.038,0.187-0.112,0.261
				C7.65,26.097,7.576,26.122,7.5,26.122l-0.039,0.037c-0.073,0.075-0.161,0.112-0.26,0.112H5.448c-0.074,0-0.138-0.024-0.187-0.074
				c-0.025,0.026-0.05,0.038-0.075,0.038c-0.024,0-0.074,0.012-0.148,0.037c-0.05,0-0.1,0-0.149,0
				c-0.074-0.024-0.15-0.048-0.225-0.074c-0.049-0.05-0.1-0.087-0.149-0.112c0-0.023-0.013-0.048-0.038-0.075
				c0-0.049,0-0.087,0-0.111c0-0.05,0-0.088,0-0.112c0-0.025,0-0.049,0-0.074c-1.121,0-2.251,0.025-3.395,0.074
				c-0.076,0.023-0.15,0.05-0.225,0.074c-0.075,0-0.162,0-0.261,0c-0.075-0.024-0.162-0.051-0.262-0.074
				c-0.025-0.049-0.063-0.087-0.112-0.112c-0.024-0.026-0.049-0.063-0.075-0.112c0-0.024,0-0.05,0-0.075
				c0-0.025-0.025-0.063-0.075-0.111c-0.024,0-0.049-0.025-0.074-0.075c0-0.05,0-0.087,0-0.112c0-0.049,0-0.086,0-0.112
				c0-0.024,0-0.05,0-0.074c0-0.05,0-0.086,0-0.112c0-0.049,0-0.086,0-0.111c0-0.05,0-0.087,0-0.112s0-0.063,0-0.112
				c0-0.024,0-0.062,0-0.112c0-0.025,0-0.05,0-0.074c0-0.025,0-0.063,0-0.113c0-0.05,0-0.087,0-0.112c0-0.05,0-0.088,0-0.113
				c0-0.024,0-0.048,0-0.074c0-0.049,0-0.088,0-0.112c0-0.049,0-0.087,0-0.111c0-0.025,0-0.063,0-0.113c0-0.024,0-0.062,0-0.111
				c0-0.025,0-0.063,0-0.112c0-0.025,0-0.05,0-0.075c0-0.024,0-0.063,0-0.112s0-0.086,0-0.111v-0.075c0-0.05,0-0.086,0-0.112
				c0-0.05,0-0.088,0-0.112c0-0.05,0-0.088,0-0.113c0-0.024,0-0.061,0-0.11c0-0.026,0-0.063,0-0.113c0-0.025,0-0.062,0-0.112v-0.074
				c0-0.025,0-0.062,0-0.112c0-0.049,0-0.087,0-0.112c0-0.024,0-0.05,0-0.075c0-0.049,0-0.087,0-0.111c0-0.049,0-0.087,0-0.111
				c0-0.051,0-0.088,0-0.113s0-0.061,0-0.113c0-0.024,0-0.062,0-0.111c0-0.024,0-0.05,0-0.075c0-0.024,0-0.063,0-0.111
				c0-0.05,0-0.087,0-0.112c0-0.05,0-0.087,0-0.113c0-0.024,0-0.049,0-0.074c0-0.049,0-0.087,0-0.112c0-0.05,0-0.087,0-0.111
				c0-0.05,0-0.088,0-0.113c0-0.025,0-0.062,0-0.112c0-0.024,0-0.061,0-0.11c0-0.026,0-0.051,0-0.076c0-0.025,0-0.062,0-0.111
				c0-0.051,0-0.088,0-0.112c0-0.049,0-0.086,0-0.112c0-0.025,0-0.049,0-0.075c0-0.049,0-0.087,0-0.112c0-0.05,0-0.099,0-0.149
				v-0.075c0-0.025,0-0.062,0-0.112c0-0.024,0-0.062,0-0.112c0-0.024,0-0.05,0-0.075c0-0.025,0-0.063,0-0.112
				c0-0.05,0-0.087,0-0.112v-0.075c0-0.049,0-0.087,0-0.111c0-0.051,0-0.086,0-0.112c0-0.049,0-0.086,0-0.111
				c0-0.026,0-0.062,0-0.113c0-0.024,0-0.063,0-0.112c0-0.025,0-0.062,0-0.111V18.21c0-0.05,0-0.086,0-0.11c0-0.051,0-0.089,0-0.114
				c0-0.024,0-0.049,0-0.074c0-0.049,0-0.088,0-0.112c0-0.05,0-0.087,0-0.112c0-0.049,0-0.087,0-0.112c0-0.025,0-0.062,0-0.112
				c0-0.024,0-0.062,0-0.112c0-0.025,0-0.049,0-0.074c0-0.025,0-0.063,0-0.113c0-0.05,0-0.086,0-0.112c0-0.049,0-0.086,0-0.11
				c0-0.025,0-0.05,0-0.076c0-0.05,0-0.086,0-0.111c0-0.049,0-0.1,0-0.149v-0.074c0-0.024,0-0.064,0-0.113c0-0.025,0-0.062,0-0.111
				c0-0.026,0-0.051,0-0.075s0-0.062,0-0.112c0-0.05,0-0.088,0-0.112v-0.075c0-0.049,0-0.087,0-0.112c0-0.049,0-0.087,0-0.112
				c0-0.05,0-0.087,0-0.112s0-0.062,0-0.111c0-0.026,0-0.063,0-0.113c0-0.024,0-0.062,0-0.112v-0.074c0-0.024,0-0.062,0-0.113
				c0-0.048,0-0.087,0-0.111c0-0.026,0-0.051,0-0.075c0-0.05,0-0.087,0-0.113c0-0.049,0-0.087,0-0.111c0-0.05,0-0.087,0-0.113
				c0-0.025,0-0.062,0-0.111c0-0.025,0-0.062,0-0.111c0-0.024,0-0.05,0-0.076c0-0.024,0-0.062,0-0.111c0-0.05,0-0.089,0-0.113
				c0.025-0.049,0.049-0.086,0.074-0.112c0.05-0.024,0.075-0.05,0.075-0.075c0.1-0.025,0.187-0.037,0.261-0.037v-0.037
				c0.05,0.024,0.125,0.049,0.225,0.074c0.025-0.025,0.05-0.037,0.074-0.037c0.049,0,0.099,0,0.149,0v-0.037c1.168,0,2.324,0,3.47,0
				c0.025,0,0.062,0.012,0.112,0.037c0.024-0.049,0.049-0.087,0.075-0.112c0.075-0.026,0.162-0.038,0.261-0.038v-0.037
				c0.05,0.024,0.113,0.048,0.187,0.075c0.598,0.025,1.181,0.05,1.754,0.075c0-0.024,0-0.05,0-0.075v-0.038
				c-0.025-0.025-0.063-0.049-0.112-0.074c-0.025-0.025-0.05-0.063-0.074-0.112c-0.025-0.024-0.063-0.062-0.112-0.112
				c-0.025-0.024-0.063-0.062-0.112-0.111l-0.037-0.075c0-0.025,0-0.062,0-0.112s0-0.087,0-0.112s0-0.05,0-0.074
				c0-0.05,0-0.087,0-0.112c0-0.05,0-0.087,0-0.113c0.024-0.049,0.049-0.086,0.074-0.111c0.025-0.025,0.05-0.062,0.075-0.112
				c0-0.024,0-0.063,0-0.112c0-0.025,0-0.062,0-0.112v-0.074c0-0.05,0-0.087,0-0.113c0-0.049,0-0.087,0-0.111
				c0-0.025,0-0.05,0-0.076c0.025-0.05,0.05-0.087,0.074-0.111c0.025-0.05,0.05-0.087,0.075-0.112h0.038
				c0.024-0.05,0.049-0.074,0.074-0.074c0.025-0.025,0.05-0.051,0.075-0.076c0.024,0,0.05-0.012,0.074-0.038
				c0.025,0,0.075,0,0.148,0v-0.037c3.782,0,7.576,0,11.382,0c0.074,0.025,0.149,0.05,0.224,0.074
				c0.049,0.051,0.086,0.076,0.111,0.076c0,0.048,0.013,0.099,0.037,0.149c0.025,0.025,0.05,0.061,0.075,0.11l0.038,0.038
				c0,0.026,0.012,0.05,0.037,0.076c0.025,0.024,0.049,0.062,0.075,0.111c0,0.025,0,0.063,0,0.113l-0.038,0.074
				c-0.025,0.051-0.049,0.087-0.074,0.112c0,0.025,0,0.049,0,0.075s0,0.063,0,0.112v0.037c0,0.05,0,0.086,0,0.111
				c0,0.05,0,0.088,0,0.113s0,0.063,0,0.112c0,0.024,0,0.049,0,0.074s0,0.049,0,0.075c0,0.049,0,0.086,0,0.11
				c0,0.05,0,0.088,0,0.113s0,0.049,0,0.075c0,0.024,0,0.062,0,0.112c0,0.025,0,0.062,0,0.112v0.038c0,0.049,0,0.085,0,0.112
				c0,0.05,0,0.087,0,0.112c0,0.024,0,0.062,0,0.112h-0.038v0.038c-0.05,0.025-0.087,0.062-0.112,0.111c0,0.052,0,0.088,0,0.113
				c-0.025,0.049-0.062,0.074-0.111,0.074c-0.025,0.025-0.051,0.051-0.075,0.076v0.037c0,0.049,0,0.086,0,0.111l0.038,0.037v0.038
				c0.622,0,1.23,0.014,1.829,0.038v-0.038c0.024,0,0.049,0,0.075,0v-0.038c0.099-0.024,0.187-0.048,0.261-0.074
				c0.075,0.025,0.15,0.049,0.225,0.074c0.098,0,0.21,0,0.334,0c0.175-0.024,0.35-0.037,0.523-0.037
				c0.125,0,0.236-0.012,0.336-0.037c0.024,0,0.049,0,0.074,0c0.05,0,0.087-0.013,0.113-0.037c0.024,0,0.036-0.012,0.036-0.037
				c0.05,0,0.113,0,0.188,0c0-0.026,0.012-0.037,0.037-0.037c0.025-0.024,0.063-0.038,0.112-0.038c0.025,0,0.037-0.012,0.037-0.038
				c0.024,0,0.062,0,0.111,0c0.026,0,0.038-0.012,0.038-0.037c0.05,0,0.087,0,0.113,0c0-0.024,0.013-0.037,0.037-0.037
				c0.024,0,0.05-0.012,0.075-0.037c0.024,0,0.05,0,0.075,0h0.036c0.025,0,0.039-0.013,0.039-0.038c0.025,0,0.049,0,0.074,0
				s0.038-0.012,0.038-0.038h0.036v-0.037c0.026,0,0.051,0,0.076,0c0-0.025,0.013-0.038,0.038-0.038
				c0.025-0.024,0.062-0.037,0.112-0.037c0.05,0,0.087-0.012,0.112-0.038h0.037l0.038-0.037c0.025,0,0.039-0.014,0.039-0.038h0.036
				c0.049-0.025,0.087-0.037,0.112-0.037c0.024,0,0.05-0.013,0.074-0.037h0.038l0.037-0.038h0.037c0.025,0,0.037-0.012,0.037-0.037
				c0.026,0,0.051,0,0.076,0v-0.038c0.025-0.025,0.05-0.037,0.074-0.037c0.025,0,0.038-0.013,0.038-0.037h0.037
				c0.025,0,0.05-0.013,0.075-0.038h0.038c0-0.025,0.012-0.038,0.037-0.038c0.051-0.024,0.101-0.037,0.15-0.037l0.037-0.037h0.075
				c0.025-0.024,0.062-0.037,0.111-0.037L25,13.359h0.039l0.038-0.037c0.024-0.025,0.049-0.037,0.074-0.037
				c0.05,0,0.088-0.013,0.113-0.038c0.023,0,0.062,0,0.112,0c0.025,0,0.038-0.013,0.038-0.038l0.036-0.038
				c0-0.025,0.013-0.038,0.038-0.038c0.05,0,0.088-0.011,0.113-0.036c0.024,0,0.048-0.013,0.074-0.038
				c0.025,0,0.037-0.012,0.037-0.037c0.025,0,0.051,0,0.075,0v-0.037c0.025-0.025,0.05-0.038,0.075-0.038s0.038-0.012,0.038-0.037
				c0.05,0,0.087,0,0.111,0c0.026,0,0.038-0.013,0.038-0.038l0.075-0.075c0.049,0,0.099-0.012,0.149-0.037
				c0.024,0,0.049-0.013,0.073-0.037c0.025,0,0.039-0.013,0.039-0.037h0.038c0-0.026,0.012-0.039,0.038-0.039
				c0-0.024,0.012-0.036,0.036-0.036c0.025,0,0.05-0.013,0.075-0.038c0.05,0,0.1-0.012,0.149-0.037h0.075v-0.037l0.037-0.039
				c0.051,0,0.088-0.011,0.113-0.036c0.024,0,0.049-0.012,0.074-0.038c0.025,0,0.037-0.013,0.037-0.037h0.039
				c0-0.025,0.012-0.038,0.036-0.038v-0.038c0.025,0,0.038-0.012,0.038-0.036c0.025,0,0.049-0.013,0.075-0.038h0.037
				c0.026,0,0.037-0.012,0.037-0.038c0.025,0,0.039-0.012,0.039-0.036c0.024,0,0.049-0.013,0.073-0.038h0.039
				c0-0.024,0.012-0.037,0.037-0.037s0.038-0.013,0.038-0.039l0.037-0.038v-0.037h0.037l0.038-0.037c0.025,0,0.049,0,0.075,0
				c0-0.025,0.012-0.037,0.037-0.037c0-0.025,0.012-0.039,0.037-0.039c0-0.024,0.014-0.038,0.038-0.038
				c0.025,0,0.049-0.012,0.075-0.037c0.024,0,0.049-0.013,0.073-0.037l0.039-0.037c0.024,0,0.049,0,0.074,0l0.037-0.038
				c0-0.025,0.025-0.063,0.075-0.111c0.024,0,0.049,0,0.074,0c0.026,0,0.063-0.013,0.111-0.038c0.024-0.026,0.05-0.063,0.075-0.113
				c0-0.024,0.013-0.049,0.039-0.075c0.024,0,0.049-0.012,0.073-0.037c0.025,0,0.05,0,0.076,0v-0.038h0.038c0.023,0,0.048,0,0.074,0
				v-0.037h0.037v-0.038h0.037c0.026-0.024,0.05-0.037,0.074-0.037c0.026,0,0.051-0.012,0.076-0.037h0.037c0.05,0,0.101,0,0.149,0
				c0.025,0,0.051-0.013,0.075-0.037c0.124-0.051,0.224-0.089,0.299-0.113c0.049-0.024,0.1-0.049,0.149-0.074
				c0.074,0,0.123,0,0.149,0c0.597-0.026,1.169-0.05,1.717-0.075c0.075-0.025,0.148-0.038,0.224-0.038
				c0-0.024,0.012-0.049,0.038-0.074c0-0.051,0-0.101,0-0.149c-1.568,0-3.148,0-4.739,0v-0.037c-0.026,0-0.051-0.012-0.076-0.038
				c-0.024,0-0.049,0-0.074,0c-0.225,0-0.437,0-0.635,0c-0.373,0-0.771,0-1.193,0v-0.037c-0.026,0-0.05-0.013-0.075-0.037v-0.038
				c-0.05,0-0.113-0.012-0.186-0.037c-0.025-0.024-0.05-0.051-0.075-0.075v-0.038c0-0.025,0-0.062,0-0.112c0-0.026,0-0.05,0-0.075
				c0-0.025,0-0.05,0-0.074c0-0.026,0-0.05,0-0.076V9.814c0-0.024,0-0.049,0-0.074c0-0.025,0-0.051,0-0.075c0-0.025,0-0.063,0-0.112
				V9.517c0-0.025,0-0.051,0-0.075c0-0.025,0-0.05,0-0.074c0-0.025,0-0.049,0-0.074c0-0.026,0-0.052,0-0.076V9.18
				c0-0.024,0-0.061,0-0.111c0-0.025,0-0.05,0-0.075c0-0.024,0-0.049,0-0.074c0-0.025,0-0.05,0-0.076V8.808c0-0.025,0-0.051,0-0.075
				c0-0.025,0-0.05,0-0.076c0-0.024,0-0.061,0-0.112V8.51c0-0.025,0-0.051,0-0.075c0-0.026,0-0.051,0-0.076c0-0.024,0-0.049,0-0.075
				c0-0.025-0.014-0.049-0.037-0.074V7.799c0.023,0,0.037-0.012,0.037-0.037c0-0.05,0-0.087,0-0.112c0-0.049,0-0.1,0-0.15V7.427
				c0-0.025,0.012-0.063,0.036-0.113c0.051-0.025,0.087-0.05,0.112-0.075c0.05,0,0.101,0,0.151,0V7.202c0.024,0,0.049,0,0.074,0
				V7.166h0.036c0-0.025,0.014-0.05,0.039-0.075c0.025-0.025,0.05-0.05,0.074-0.075c0-0.024,0.013-0.037,0.038-0.037
				c0.049,0,0.086,0,0.111,0V6.941c0.92,0,1.842,0,2.763,0V6.905c0-0.026,0-0.051,0-0.075V6.792c0-0.024,0-0.05,0-0.075
				c0-0.024,0-0.049,0-0.076c0-0.024,0-0.062,0-0.111V6.494c0-0.024,0-0.049,0-0.076c0-0.023,0-0.049,0-0.074s0-0.05,0-0.073
				c0-0.026,0-0.051,0-0.076V6.157c0-0.025,0-0.062,0-0.111c0-0.024,0-0.05,0-0.074c0-0.026,0-0.05,0-0.075
				c-0.026-0.024-0.038-0.05-0.038-0.074c-0.025,0-0.038-0.013-0.038-0.038c0-0.026,0-0.05,0-0.075c0-0.024,0-0.049,0-0.074
				s0-0.063,0-0.112V5.487c0-0.025,0-0.05,0-0.075c0-0.025,0-0.05,0-0.074c0-0.025,0.012-0.05,0.038-0.075
				c0.024-0.025,0.038-0.05,0.038-0.075V5.15c0.024-0.025,0.049-0.049,0.074-0.074l0.038-0.038C28.348,5.014,28.373,5,28.396,5
				c0.024,0,0.05,0,0.075,0V4.964c0.721,0,1.431,0,2.127,0C30.624,4.989,30.648,5,30.673,5h0.038V4.964
				c0.049,0.025,0.086,0.05,0.112,0.074c0.025,0.026,0.049,0.05,0.074,0.075c0.025,0.025,0.049,0.038,0.074,0.038
				c0,0.025,0.012,0.049,0.037,0.074c0,0.025,0,0.05,0,0.076c0,0.024,0,0.05,0,0.074c0,0.05,0,0.087,0,0.113v0.037
				c0,0.025,0,0.049,0,0.075c0,0.025,0,0.049,0,0.074s0,0.05,0,0.075c0,0.024,0,0.05,0,0.075v0.037c0,0.05,0,0.086,0,0.112
				c0,0.024,0,0.05,0,0.074c0,0.025,0,0.05,0,0.075v0.037c0,0.025,0,0.051,0,0.076s0,0.05,0,0.075c0,0.024,0,0.049,0,0.074
				c0,0.049,0,0.087,0,0.112v0.038c0,0.025,0,0.049,0,0.074c0,0.025,0,0.05,0,0.075s0,0.05,0,0.074s0,0.05,0,0.075v0.038
				c0,0.025,0,0.048,0,0.074c2.141,0,4.255,0,6.345,0V6.905c0-0.026,0-0.051,0-0.075V6.792c0-0.024,0-0.05,0-0.075
				c0-0.024,0-0.049,0-0.076c0-0.024,0-0.062,0-0.111V6.494c0-0.024,0-0.049,0-0.076c0-0.023,0-0.049,0-0.074s0-0.05,0-0.073
				c0-0.026,0-0.051,0-0.076V6.157c0-0.025,0-0.062,0-0.111c0-0.024,0-0.05,0-0.074c0-0.026,0-0.05,0-0.075c0-0.024,0-0.05,0-0.074
				V5.785c0-0.026,0-0.05,0-0.075c0-0.024,0-0.049,0-0.074s0-0.063,0-0.112V5.487c0-0.025,0-0.05,0-0.075c0-0.025,0-0.05,0-0.074
				c0-0.025,0-0.05,0-0.075s0-0.05,0-0.075V5.15c0-0.025,0-0.049,0-0.074c0-0.051,0-0.087,0-0.112c0-0.024,0-0.049,0-0.075
				c0-0.025,0-0.05,0-0.075V4.777c0-0.024,0-0.05,0-0.074c0-0.024,0-0.049,0-0.075s0-0.049,0-0.075V4.479c0-0.025,0-0.05,0-0.076
				c0-0.024,0.012-0.05,0.037-0.075c0.024-0.025,0.049-0.049,0.075-0.074C37.465,4.229,37.478,4.205,37.502,4.18z M71.646,18.1
				c0-0.027,0-0.051,0-0.077c0-0.024-0.012-0.05-0.038-0.074c0,0.024,0,0.05,0,0.074c0,0.025,0,0.063,0,0.113L71.646,18.1z
				 M31.046,17.576c0,0.025,0,0.063,0,0.112c0,0.025,0,0.062,0,0.112c0,0.024,0,0.063,0,0.112c0,0.025,0,0.049,0,0.074
				c0,0.025,0,0.063,0,0.114c0,0.024,0,0.049,0,0.073v0.038c0.05,0.024,0.1,0.05,0.149,0.075c0.025,0.025,0.05,0.049,0.076,0.075
				c0,0.049,0.012,0.086,0.037,0.111c0,0.024,0,0.063,0,0.112c0.123-0.024,0.236-0.037,0.335-0.037c0.073,0,0.136-0.013,0.187-0.038
				v-0.037c0.049,0,0.111,0,0.186,0c0.074-0.025,0.149-0.05,0.224-0.075c0.075-0.025,0.149-0.062,0.225-0.111
				c0.025,0,0.05-0.025,0.074-0.075c0.025-0.024,0.051-0.05,0.076-0.074l0.037-0.036c0.05-0.027,0.1-0.051,0.149-0.077
				c0.025-0.05,0.05-0.074,0.074-0.074c0.025-0.049,0.062-0.086,0.113-0.113c0.024-0.049,0.063-0.086,0.111-0.111
				c0-0.05,0.012-0.087,0.038-0.113c0-0.025,0.013-0.062,0.038-0.11c0.024-0.025,0.037-0.063,0.037-0.113
				c0-0.024,0.012-0.062,0.037-0.111v-0.075c0-0.05,0.012-0.088,0.037-0.112c-0.747,0.024-1.48,0.037-2.201,0.037l-0.038,0.037
				c0,0.05,0,0.087,0,0.113c0,0.025,0,0.049,0,0.074c0,0.05,0,0.087,0,0.112C31.046,17.515,31.046,17.551,31.046,17.576z
				 M29.927,18.584c-0.075-0.024-0.125-0.062-0.15-0.112c-0.024-0.025-0.061-0.063-0.111-0.111c-0.026-0.025-0.05-0.05-0.075-0.075
				c0-0.025,0-0.063,0-0.113c0-0.049,0-0.086,0-0.112c0-0.05,0-0.087,0-0.111c0-0.024,0-0.049,0-0.075c0-0.05,0-0.087,0-0.111
				c0-0.05,0-0.1,0-0.151v-0.074c0-0.024,0-0.062,0-0.112c0-0.025,0-0.062,0-0.112c0-0.025,0-0.05,0-0.075
				c-0.025,0-0.062,0.013-0.111,0.038c0,0.025-0.014,0.049-0.039,0.074c0,0.025-0.012,0.05-0.037,0.075l-0.037,0.037
				c-0.025,0.025-0.062,0.038-0.112,0.038l-0.037,0.037c-0.05,0.049-0.075,0.087-0.075,0.112c-0.049,0.024-0.087,0.062-0.112,0.112
				c0,0.048,0,0.1,0,0.149c0,0.025,0,0.061,0,0.111s0,0.101,0,0.149c0,0.026,0,0.05,0,0.075c0.05,0,0.087,0.012,0.112,0.038
				c0.025,0.025,0.062,0.049,0.112,0.075c0.025,0.049,0.05,0.086,0.075,0.111c0,0.051,0.012,0.088,0.037,0.112v0.038
				c0.199,0,0.386,0,0.56,0V18.584z M23.919,16.905c0.099,0,0.211,0,0.336,0c0.024,0,0.062,0,0.111,0v-0.039
				c-0.074,0-0.137,0-0.187,0c-0.074,0-0.161,0-0.26,0V16.905z M25,17.353v-0.037c-0.049,0-0.085,0-0.11,0v0.037
				C24.939,17.353,24.976,17.353,25,17.353z M9.142,19.33c0,0.024-0.012,0.037-0.037,0.037c0,0.025-0.012,0.039-0.037,0.039v0.074
				c0,0.025,0,0.049,0,0.074v0.075c0,0.024,0,0.05,0,0.075v0.075c0,0.024,0,0.05,0,0.074c0,0.025,0,0.05,0,0.075v0.075
				c0,0.025,0,0.05,0,0.075c0,0.024,0,0.05,0,0.075v0.038c0,0.024,0,0.049,0,0.075V20.3c0,0.025,0,0.05,0,0.076v0.037
				c0.049,0,0.099,0,0.149,0c0.05,0.025,0.099,0.049,0.15,0.074c0.174,0.025,0.36,0.051,0.559,0.075
				c0.024,0.025,0.075,0.051,0.148,0.075l0.037-0.075h0.038c0.024,0,0.05-0.012,0.076-0.037h0.037c0-0.025,0.013-0.038,0.037-0.038
				c0.025-0.024,0.05-0.036,0.074-0.036c0-0.025,0.013-0.038,0.038-0.038v-0.037c0.024,0,0.037-0.013,0.037-0.038
				c0.049,0,0.099-0.013,0.148-0.038h0.039c0-0.025,0.012-0.037,0.037-0.037h0.038c0.024,0,0.049,0,0.074,0l0.039-0.039h0.036
				c0.026,0,0.038-0.012,0.038-0.036c0.025,0,0.037-0.013,0.037-0.038v-0.038h0.037c0-0.025,0.013-0.037,0.038-0.037h0.038
				c0.025,0,0.05,0,0.075,0c0.025-0.025,0.062-0.037,0.112-0.037c0.026,0,0.049-0.012,0.075-0.038c0.048,0,0.1-0.011,0.148-0.037
				h0.037c0.024-0.025,0.05-0.038,0.075-0.038c0.026,0,0.039-0.011,0.039-0.037c0.048,0,0.086,0,0.109,0c0-0.025,0-0.049,0-0.075
				c0.026-0.05,0.052-0.086,0.077-0.111c0.024-0.051,0.049-0.087,0.074-0.112c0-0.024,0-0.062,0-0.111c0-0.025,0-0.063,0-0.113
				c0-0.024,0-0.049,0-0.074v-0.038c-0.896,0-1.792,0-2.688,0v0.038C9.179,19.318,9.167,19.33,9.142,19.33z M5.448,25.599
				c-0.049,0-0.088,0-0.112,0l0.038,0.038C5.398,25.611,5.422,25.6,5.448,25.599z M22.874,24.554h0.038l-0.038-0.037V24.554z`,
            }),
          });
        }
        function e2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 41.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M18.693,11.759h-3.017c-0.397,0-0.596,0.199-0.596,0.595v1.702
				c0,0.425,0.199,0.636,0.596,0.636h1.615c0.567,0,1.047-0.169,1.445-0.509c0.368-0.34,0.551-0.694,0.551-1.063v-0.468
				c0-0.199-0.056-0.382-0.169-0.552C19.005,11.873,18.863,11.759,18.693,11.759z M40.97,5.127c0.168,0.03,0.269,0.071,0.298,0.128
				c0,0.03-0.015,0.185-0.044,0.468l-0.806,5.868c-0.113,0.481-0.553,0.849-1.318,1.104l-2.934,0.808
				c-0.538,0.142-0.835,0.212-0.892,0.212L30.469,13.8c-0.425,0-0.638,0.113-0.638,0.34v1.871c0,0.567-0.197,0.836-0.595,0.807
				c-0.283-0.084-0.524-0.127-0.723-0.127h-6.631c-0.539,0.141-0.907,0.213-1.106,0.213c-0.114,0-0.212-0.113-0.299-0.342
				l-0.041-0.382c-0.425,0.679-0.851,1.021-1.277,1.021h-4.208c-0.509,0-0.793,0.34-0.849,1.02c-0.03,0.085-0.201,0.439-0.512,1.062
				c-0.311,0.625-0.522,1.163-0.638,1.617c-0.822,3.173-1.289,5.271-1.401,6.292c-0.058,0.765,0.013,1.913,0.211,3.443
				c0,0.481-0.34,0.58-1.021,0.297c-0.312,0.227-0.721,0.282-1.231,0.171c-0.68-0.114-1.9-0.369-3.656-0.766
				c-2.184-0.481-3.573-0.835-4.167-1.063c-0.68-0.256-1.091-0.652-1.233-1.19c-0.171-0.538-0.128-1.375,0.127-2.508
				C0.809,24.5,1.292,22.5,2.03,19.582c0.706-2.806,1.09-4.322,1.147-4.549c0.169-0.369,0.311-0.708,0.424-1.02
				c0.198-0.596,0.312-1.106,0.34-1.531c0.029-0.426-0.212-0.921-0.723-1.489c-0.084-0.056-0.467-0.396-1.148-1.02
				C1.789,9.718,1.646,9.364,1.646,8.911V4.576c0-0.624,0.128-1.105,0.384-1.446C2.171,2.96,2.454,2.676,2.878,2.279
				c0.425-0.339,0.708-0.567,0.851-0.68c0.113-0.056,0.793,0.044,2.041,0.298c0.169,0.029,0.297,0.1,0.382,0.212
				c0.084,0.085,0.142,0.129,0.169,0.129c0.198-0.058,0.879,0.056,2.04,0.34c0.256,0.056,1.263,0.085,3.019,0.085
				c1.021,0,1.615,0.085,1.786,0.254c0.142,0.141,0.212,0.312,0.212,0.509l0.298-0.127c0.226-0.084,0.426-0.127,0.595-0.127h7.907
				c0.312,0,0.652,0.085,1.021,0.254c-0.057-0.112-0.071-0.254-0.043-0.425c0.029-0.198,0.269-0.338,0.722-0.424
				c0.17-0.03,0.412,0.013,0.725,0.127l0.426-0.426c0.026-0.029,0.055-0.141,0.083-0.339c0-0.199,0.085-0.326,0.254-0.382
				c0.625-0.228,1.077-0.256,1.361-0.085c0.17,0.085,0.61,0.254,1.317,0.509c0.68,0.257,1.12,0.398,1.319,0.426
				c0.112,0,0.297-0.057,0.552-0.169c0.226-0.087,0.441-0.1,0.637-0.043c0.368,0.084,1.545,0.326,3.53,0.723
				c0.282,0.113,0.636,0.312,1.061,0.595c0.113,0.058,0.354,0.071,0.724,0.043c0.368,0,0.61,0.014,0.723,0.042
				c0.14,0.057,0.211,0.128,0.211,0.212c0,0.114,0.014,0.186,0.043,0.212c0.142,0.085,0.764,0.256,1.87,0.511
				c0.169,0.056,0.325,0.155,0.468,0.296c0.142,0.114,0.239,0.172,0.297,0.172s0.157-0.03,0.298-0.085
				c0.113-0.086,0.227-0.113,0.339-0.086L40.97,5.127z`,
            }),
          });
        }
        function x2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52.375 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M24.563,1.998c0-0.029,0.014-0.045,0.044-0.045
				c0.058-0.028,0.116-0.042,0.176-0.042l0.042-0.043c0.029-0.03,0.058-0.047,0.085-0.047l0.046-0.042
				c0.028-0.03,0.059-0.044,0.087-0.044c0-0.029,0.015-0.043,0.043-0.043h0.043V1.647c0.031,0,0.059-0.013,0.09-0.044l0.086-0.087
				c0.028,0,0.043-0.015,0.043-0.043c0.029,0,0.045-0.013,0.045-0.043c0.058,0,0.1-0.015,0.128-0.044
				c0.031-0.03,0.059-0.044,0.088-0.044c0.088,0,0.19,0,0.306,0c0-0.028,0-0.059,0-0.087h0.045V1.21
				c0.174,0,0.349,0.015,0.522,0.044v0.042c0.03,0.03,0.059,0.045,0.088,0.045v0.044c0.029,0,0.058,0.015,0.088,0.044l0.042,0.043
				c0.029,0,0.059,0.014,0.088,0.043v0.046c0.029,0,0.043,0.013,0.043,0.041c0.058,0,0.086,0.017,0.086,0.044
				c0.03,0.029,0.058,0.044,0.089,0.044c0.029,0,0.043,0.014,0.043,0.043c0.03,0,0.058,0.014,0.088,0.044
				c0,0.028,0.015,0.042,0.044,0.042h0.087l0.043,0.047c0.03,0.027,0.06,0.043,0.087,0.043l0.046,0.087l0.084,0.042
				c0.062,0,0.104,0.017,0.132,0.045c0.031,0.028,0.059,0.058,0.087,0.087V2.26c0,0.028,0,0.072,0,0.13v0.131
				c0,0.06,0,0.103,0,0.133V2.87c0,0.059,0,0.103,0,0.133c0,0.028,0,0.058,0,0.086v0.132c0,0.058,0,0.101,0,0.13
				c6.266,0,12.527,0,18.79,0V3.306c0-0.028,0-0.056,0-0.085c0-0.029,0-0.059,0-0.088c0-0.028,0-0.059,0-0.086
				c0-0.031,0-0.06,0-0.088c0-0.029,0-0.06,0-0.088h0.044c0.028,0,0.058,0,0.087,0c0-0.029,0.014-0.056,0.042-0.087
				c0.03,0,0.043-0.015,0.043-0.043h0.043c0-0.028,0.015-0.058,0.044-0.086h0.045c0-0.03,0-0.059,0-0.088
				c0.029,0,0.058-0.015,0.086-0.044h0.043c0-0.029,0.016-0.058,0.044-0.086c0.029,0,0.044-0.015,0.044-0.044
				c0.029,0,0.043-0.013,0.043-0.044V2.302c0-0.029,0.013-0.042,0.044-0.042l0.043-0.044V2.171c0.408,0,0.832,0,1.267,0v0.044
				l0.088,0.086c0,0.029,0.015,0.043,0.043,0.043c0,0.031,0.015,0.044,0.044,0.044v0.044c0.029,0.029,0.043,0.057,0.043,0.086h0.045
				l0.044,0.044c0.028,0.029,0.058,0.059,0.086,0.088c0,0.028,0,0.058,0,0.086c0.03,0,0.058,0,0.087,0
				c0,0.029,0.014,0.043,0.043,0.043c0,0.031,0.015,0.059,0.045,0.087c0.027,0,0.058,0,0.086,0c0,0.059,0,0.103,0,0.133
				c0,0.028,0,0.058,0,0.086v0.132c0,0.03,0,0.058,0,0.085c0.03,0.031,0.06,0.044,0.088,0.044c0,0.03,0,0.073,0,0.132
				c0.088,0,0.176,0,0.262,0c0,0.06,0,0.101,0,0.13v0.09C49.542,3.73,49.571,3.759,49.6,3.79c0.029,0.027,0.074,0.042,0.132,0.042
				c0,0.029,0.014,0.059,0.043,0.088h0.044c0.028,0.029,0.087,0.043,0.174,0.043v0.087c0,0.058,0,0.102,0,0.13v0.218
				c0,0.06,0,0.104,0,0.132v0.088c0,0.027,0,0.059,0,0.087S50.022,4.75,50.08,4.75c0,0.06,0,0.102,0,0.133v0.086
				c0.031,0.028,0.075,0.043,0.132,0.043c0,0.03,0,0.059,0,0.087c0,0.029,0,0.059,0,0.089c0,0.028,0,0.056,0,0.085
				c0,0.03,0,0.058,0,0.088c0,0.028,0,0.06,0,0.088v0.044c0.06,0,0.133,0,0.218,0v0.085c0,0.03,0,0.074,0,0.133
				c0.468,0,0.935,0,1.399,0c0,0.028,0,0.07,0,0.13c0.087,0,0.173,0,0.263,0c0,0.029,0,0.059,0,0.089c0,0.028,0,0.057,0,0.086
				s0,0.059,0,0.087c0,0.027,0,0.059,0,0.087c0,0.031,0,0.059,0,0.086c0,0.031,0,0.06,0,0.088c0,0.03,0,0.058,0,0.089
				c0,0.028,0,0.057,0,0.087c0,0.028,0,0.058,0,0.086c0,0.03,0,0.06,0,0.088c0,0.03,0,0.06,0,0.087c0,0.03,0,0.059,0,0.089
				c0,0.027,0,0.057,0,0.087c0,0.029,0,0.057,0,0.088c0,0.028,0,0.058,0,0.086c0,0.029,0,0.059,0,0.087c0,0.03,0,0.059,0,0.087
				s0,0.059,0,0.086c0,0.03,0,0.058,0,0.091c0,0.027,0,0.058,0,0.086c0,0.029,0,0.057,0,0.086c0,0.028,0,0.058,0,0.086v0.088
				c0,0.03,0,0.058,0,0.088c0,0.029,0,0.057,0,0.088v0.043c-0.058,0-0.103,0-0.132,0c-0.525-0.03-1.062-0.043-1.616-0.043v0.043
				c-0.059,0-0.104,0-0.133,0c0,0.059,0,0.102,0,0.131c0,0.03,0,0.058,0,0.087V8.42c-0.057,0-0.101,0-0.132,0
				c0,0.059,0,0.102,0,0.13c0,0.029,0,0.061,0,0.089c0,0.029,0,0.06,0,0.087v0.044c-0.027,0.058-0.058,0.102-0.086,0.129
				c0,0.03-0.014,0.058-0.042,0.088c-0.031,0.029-0.061,0.058-0.088,0.088c0,0.028,0,0.059,0,0.087v0.044
				c-0.059,0.027-0.118,0.043-0.176,0.043c0,0.059,0,0.104,0,0.132v0.042c0,0.029-0.013,0.045-0.043,0.045
				c0,0.03-0.015,0.044-0.044,0.044c0,0.027,0,0.059,0,0.086l-0.042,0.043c0,0.03-0.016,0.045-0.045,0.045v0.044L49.47,9.774v0.088
				c-0.029,0-0.043,0.015-0.043,0.044c-0.031,0-0.088,0-0.176,0V9.95c0,0.058,0,0.1,0,0.13v0.089l-0.044,0.042v0.044
				c-0.204,0-0.421,0-0.655,0v-0.044c-4.194-0.029-8.39-0.058-12.583-0.086v0.044c-0.264,0-0.509,0-0.745,0c0,0.029,0,0.058,0,0.086
				V10.3c0,0.058,0,0.102,0,0.13c0,0.029,0,0.058,0,0.087c0,0.03,0,0.059,0,0.088s0,0.058,0,0.088c0,0.028,0,0.058,0,0.086
				c0,0.03,0,0.061,0,0.088c0,0.03,0,0.058,0,0.088c0,0.027,0,0.058,0,0.086c0,0.03,0,0.06,0,0.087c0,0.03,0,0.059,0,0.087
				c0,0.031,0,0.06,0,0.089c0,0.028,0,0.06,0,0.088c0,0.027,0,0.058,0,0.086c0,0.029,0,0.059,0,0.086c0,0.03,0,0.059,0,0.09
				c0,0.029,0,0.057,0,0.087c0,0.027,0,0.057,0,0.086c0,0.028,0,0.059,0,0.087c0,0.029,0,0.058,0,0.086s0,0.059,0,0.089
				c0,0.028,0,0.058,0,0.088c0,0.028,0,0.058,0,0.086c0,0.029,0,0.06,0,0.087c0,0.028,0,0.059,0,0.088c0,0.028,0,0.059,0,0.087
				c0,0.03,0,0.059,0,0.087c0,0.03,0,0.059,0,0.088s0,0.057,0,0.087c0,0.028,0,0.057,0,0.088c-0.057,0-0.116,0-0.173,0v0.086
				c-0.322,0.03-0.642,0.058-0.961,0.087v0.044c-0.263,0-0.523-0.014-0.787-0.044c-0.06,0-0.102,0-0.131,0c-0.058,0-0.116,0-0.176,0
				v0.087c-0.027,0-0.057,0-0.085,0c-0.03,0.029-0.059,0.045-0.088,0.045c0,0.027,0,0.058,0,0.086c-0.028,0-0.058,0-0.085,0
				c0,0.029,0,0.059,0,0.087v0.044h-0.045c-0.03,0.029-0.045,0.059-0.045,0.087h-0.043c0,0.031,0,0.058,0,0.088l-0.044,0.045h-0.042
				c-0.029,0.027-0.044,0.058-0.044,0.085v0.045h-0.045c-0.028,0.03-0.042,0.06-0.042,0.088l-0.131,0.132c0,0.027,0,0.057,0,0.086
				c-0.029,0-0.046,0.015-0.046,0.043h-0.042c-0.027,0.03-0.044,0.059-0.044,0.088v0.087c-0.029,0-0.057,0.014-0.086,0.044H31.99
				c0,0.029,0,0.059,0,0.089c-0.027,0-0.041,0.013-0.041,0.041c-0.029,0-0.044,0.015-0.044,0.044v0.043
				c-0.029,0.03-0.057,0.044-0.087,0.044l-0.044,0.042v0.046h-0.044c0,0.028,0,0.058,0,0.088c-0.028,0-0.059,0.013-0.087,0.042
				v0.043c-0.029,0-0.044,0.013-0.044,0.044c-0.058,0-0.116,0.014-0.174,0.042l-0.044,0.088v0.042l-0.088,0.087v0.176
				c0,0.028,0,0.059,0,0.088v0.131c0,0.028,0,0.059,0,0.086v0.043c0,0.031,0,0.059,0,0.089v0.041c0,0.03,0,0.06,0,0.088
				c0,0.03,0,0.06,0,0.088v0.173c0,0.03,0,0.059,0,0.088c0,0.03,0,0.058,0,0.088v0.262c0,0.029,0,0.056,0,0.088v0.26
				c0,0.031,0,0.059,0,0.088v0.262c0,0.028,0,0.059,0,0.087v0.263c0,0.028,0,0.058,0,0.086v0.264c0,0.028,0,0.058,0,0.085
				c0.088,0,0.206,0,0.351,0c0.029,0.03,0.073,0.06,0.131,0.088c0,0.058,0.016,0.088,0.044,0.088c0,0.027,0.014,0.058,0.043,0.085
				c0,0.033,0,0.073,0,0.133v0.131c0,0.028,0,0.059,0,0.086c0,0.03,0,0.074,0,0.132v0.13c0,0.029,0,0.073,0,0.131l0.044,0.044v0.352
				c0,0.028-0.016,0.042-0.044,0.042v0.044l-0.043,0.042v0.306l-0.044,0.044V20c-0.029,0-0.044,0.014-0.044,0.043
				c0,0.03-0.014,0.044-0.044,0.044v0.043c-0.028,0-0.043,0.013-0.043,0.044c0,0.027,0,0.059,0,0.086v0.088
				c-0.059,0-0.103,0-0.131,0c-0.029,0-0.058,0.013-0.088,0.044c0,0.029-0.013,0.044-0.044,0.044
				c-0.029,0.029-0.059,0.043-0.088,0.043v0.044h-0.044c-0.028,0-0.057,0.014-0.087,0.042c-0.028,0-0.056,0.013-0.087,0.044
				c-0.027,0-0.06,0-0.087,0c0,0.03-0.015,0.044-0.044,0.044v0.044c0,0.029,0,0.059,0,0.086v0.044c-0.028,0-0.058,0.014-0.086,0.044
				c0,0.028,0,0.058,0,0.088v0.042c0,0.029,0,0.06,0,0.087c0,0.03-0.016,0.059-0.043,0.089l-0.047,0.042v0.045
				c0,0.027,0,0.057,0,0.086c0,0.03,0,0.06,0,0.088c0,0.029,0,0.058,0,0.086c0,0.031,0,0.06,0,0.087c0,0.03,0,0.061,0,0.09
				c0,0.027,0,0.056,0,0.086s0,0.058,0,0.088c0,0.028,0,0.058,0,0.087c0,0.028,0,0.059,0,0.087c0,0.03,0,0.059,0,0.087
				c0,0.03,0,0.059,0,0.089c0,0.029,0,0.057,0,0.086c0,0.029,0,0.057,0,0.088c0,0.027,0,0.059,0,0.087c0,0.03,0,0.059,0,0.086
				c0,0.031,0,0.059,0,0.088s0,0.058,0,0.088c0,0.028,0,0.058,0,0.087c0,0.028,0,0.06,0,0.087c0,0.03,0,0.059,0,0.089v0.086
				c0,0.028,0,0.058,0,0.085c0,0.03,0,0.061,0,0.09s0,0.057,0,0.086v0.088c0,0.028,0,0.058,0,0.085c0,0.031,0,0.074,0,0.133v0.131
				c0,0.028,0,0.058,0,0.088c0,0.027,0,0.072,0,0.13v0.131c0,0.029,0,0.072,0,0.131V24.5c0,0.058,0,0.101,0,0.13v0.219
				c0,0.059,0,0.101,0,0.132v0.217c0,0.058,0,0.103,0,0.131v0.087c0,0.03,0,0.059,0,0.089v0.043c0,0.059,0,0.103,0,0.132v0.086
				c0,0.029,0,0.058,0,0.088v0.043c0,0.059,0,0.102,0,0.132v0.086c0,0.029,0,0.059,0,0.086c0,0.028,0,0.06,0,0.09
				c0,0.029,0,0.058,0,0.085c0,0.031,0,0.059,0,0.087v1.486c0,0.03,0,0.059,0,0.089v0.524c0,0.028,0,0.06,0,0.087
				c0,0.03,0,0.059,0,0.088v0.174c0,0.029,0,0.058,0,0.086c0,0.03,0,0.061,0,0.089v0.043c0,0.03,0,0.058,0,0.086v0.131
				c0,0.03,0,0.06,0,0.088v0.176c0,0.028,0,0.058,0,0.087v0.261c0,0.029,0,0.059,0,0.089c0,0.027,0,0.059,0,0.088v0.174
				c0,0.03,0,0.059,0,0.087s0,0.059,0,0.086v0.264c0,0.027,0,0.058,0,0.086v0.174c-2.342,0-4.69,0-7.033,0v-0.174
				c0-0.028,0-0.059,0-0.086v-0.611c0-0.029,0-0.061,0-0.088c0-0.03,0-0.06,0-0.089v-0.175c0-0.027,0-0.058,0-0.085
				c0-0.029,0-0.059,0-0.087v-0.176c0-0.028,0-0.058,0-0.088c0-0.027,0-0.058,0-0.086v-0.175c0-0.029,0-0.059,0-0.089
				c0-0.028,0-0.057,0-0.086v-0.174c0-0.029,0-0.059,0-0.088c0-0.027,0-0.059,0-0.087v-0.175c0-0.028,0-0.058,0-0.088
				c0-0.028,0-0.058,0-0.086V28.04c0-0.03,0-0.059,0-0.089v-1.486c0-0.028,0-0.057,0-0.087c0-0.027,0-0.056,0-0.085
				c0-0.03,0-0.062,0-0.09c0-0.027,0-0.057,0-0.086V26.03c0-0.03,0-0.074,0-0.132v-0.043c0-0.03,0-0.06,0-0.088V25.68
				c0-0.029,0-0.073,0-0.132v-0.043c0-0.03,0-0.059,0-0.089v-0.087c0-0.028,0-0.073,0-0.131v-0.217c0-0.031,0-0.073,0-0.132V24.63
				c0-0.029,0-0.072,0-0.13v-0.219c0-0.059,0-0.102,0-0.131V24.02c0-0.059,0-0.103,0-0.13c0-0.031,0-0.06,0-0.088V23.67
				c0-0.059,0-0.102,0-0.133c0-0.027,0-0.057,0-0.085v-0.088c0-0.03,0-0.057,0-0.086s0-0.06,0-0.09c0-0.028,0-0.057,0-0.085v-0.086
				c0-0.03,0-0.06,0-0.089c0-0.027,0-0.059,0-0.087c0-0.029,0-0.059,0-0.087c0-0.03,0-0.059,0-0.088s0-0.057,0-0.088
				c0-0.027,0-0.057,0-0.086c0-0.028,0-0.06,0-0.087c0-0.031,0-0.06,0-0.088c0-0.029,0-0.058,0-0.086c0-0.03,0-0.059,0-0.089
				c0-0.028,0-0.057,0-0.087c0-0.028,0-0.059,0-0.087c0-0.029,0-0.059,0-0.087c0-0.03,0-0.058,0-0.088s0-0.059,0-0.086
				c0-0.03,0-0.06,0-0.09c0-0.027,0-0.056,0-0.087c0-0.028,0-0.057,0-0.086c0-0.028,0-0.058,0-0.088c0-0.029,0-0.059,0-0.086
				c0-0.031,0-0.06,0-0.087c0-0.03,0-0.06,0-0.089c0-0.028,0-0.058,0-0.087c0-0.027,0-0.058,0-0.086v-0.088h-0.044
				c-0.028,0-0.042,0.014-0.042,0.044c0,0.028,0,0.058,0,0.088c-0.03,0.027-0.06,0.056-0.091,0.086
				c-0.027,0.03-0.042,0.058-0.042,0.089v0.044c-0.03,0.027-0.074,0.057-0.132,0.087c-0.03,0.027-0.044,0.057-0.044,0.086
				c-0.029,0.03-0.042,0.06-0.042,0.088c-0.351,0-0.715,0-1.094,0c0-0.028,0-0.058,0-0.088c-0.117-0.029-0.233-0.045-0.349-0.045
				c-0.028-0.028-0.043-0.058-0.043-0.086c-0.118-0.029-0.219-0.042-0.307-0.042c0-0.03,0-0.06,0-0.089v-0.043
				c-0.029,0-0.058,0-0.088,0c0-0.03,0-0.059,0-0.086c0-0.03,0-0.06,0-0.088c0-0.03,0-0.058,0-0.089c0-0.028,0-0.057,0-0.086
				c0-0.028,0-0.058,0-0.088c0-0.031,0-0.058,0-0.085c0-0.031,0-0.059,0-0.087c0-0.03,0-0.059,0-0.089c0-0.03,0-0.059,0-0.088
				c0-0.027,0-0.059,0-0.086c0-0.031,0-0.059,0-0.087c0-0.03,0-0.058,0-0.087c0-0.03,0-0.058,0-0.088c0-0.027,0-0.057,0-0.088
				c0-0.028,0-0.059,0-0.087c0-0.029,0-0.057,0-0.087c0-0.03,0-0.058,0-0.087s0-0.058,0-0.086c0-0.03,0-0.061,0-0.089
				c0-0.029,0-0.058,0-0.087c0-0.029,0-0.074,0-0.132v-0.043c0-0.027,0-0.057,0-0.085c0-0.03,0-0.061,0-0.09c0-0.029,0-0.07,0-0.13
				v-0.132c0-0.027,0-0.058,0-0.086c-1.718,0-3.437,0-5.156,0c0,0.028,0,0.059,0,0.086c0,0.03,0,0.074,0,0.132v0.13
				c0,0.029,0,0.073,0,0.131V19.3c0,0.058,0,0.104,0,0.132v0.131c-0.99-0.029-1.981-0.044-2.971-0.044v0.044l-0.042,0.087
				c-0.03,0.058-0.044,0.102-0.044,0.133c-0.028,0-0.058,0.027-0.086,0.085l-0.044,0.043c0,0.058-0.014,0.088-0.044,0.088
				c-0.03,0.058-0.059,0.102-0.086,0.131v0.088c-0.03,0.028-0.044,0.056-0.044,0.085l-0.044,0.044c0,0.059,0,0.103,0,0.132v0.174
				c-0.061,0.029-0.104,0.044-0.131,0.044c0,0.029,0,0.059,0,0.086c0,0.031-0.015,0.059-0.043,0.089
				c-0.029,0.028-0.06,0.058-0.089,0.088c0,0.027-0.013,0.056-0.044,0.086c0,0.03-0.015,0.058-0.043,0.089c0,0.029,0,0.057,0,0.086
				c0,0.028,0,0.058,0,0.086c0,0.029,0,0.075,0,0.133c-0.03,0-0.057,0.014-0.088,0.044c-0.028,0.029-0.042,0.057-0.042,0.088
				c0,0.028-0.016,0.056-0.045,0.087c-0.028,0.028-0.057,0.072-0.088,0.13l-0.044,0.043c0,0.031,0,0.06,0,0.088
				c0,0.029,0,0.059,0,0.089c-0.027,0.027-0.042,0.072-0.042,0.129v0.043l-0.043,0.089l-0.088,0.085c0,0.03,0,0.073,0,0.133
				c-0.028,0-0.058,0.015-0.086,0.043c0,0.058-0.029,0.088-0.087,0.088v0.087c0,0.028,0,0.072,0,0.131l-0.046,0.043v0.086
				c0,0.06,0,0.104,0,0.133v0.13c-0.06,0.029-0.101,0.045-0.131,0.045c0,0.029,0,0.057,0,0.086l-0.042,0.088
				c-0.06,0.028-0.102,0.058-0.131,0.085c0,0.031,0,0.074,0,0.133v0.044l-0.043,0.086c0,0.028,0,0.058,0,0.088
				c0,0.027,0,0.072,0,0.13c-0.059,0-0.104,0.014-0.132,0.043v0.088c-0.027,0.029-0.044,0.072-0.044,0.131
				c-0.028,0-0.058,0.028-0.086,0.086l-0.045,0.044V24.5c0,0.03,0,0.058,0,0.086v0.044c-0.028,0-0.056,0.016-0.088,0.046
				c0,0.027,0,0.056,0,0.086c-0.028,0.027-0.042,0.058-0.042,0.087c-0.029,0.028-0.044,0.059-0.044,0.086c0,0.03,0,0.061,0,0.089
				c0,0.029,0,0.059,0,0.087c-0.058,0-0.103,0.016-0.131,0.043c0,0.027,0,0.06,0,0.088v0.086c0,0.03,0,0.074,0,0.132
				c-0.058,0-0.102,0.014-0.13,0.044c0,0.03,0,0.057,0,0.086c-0.03,0.06-0.061,0.088-0.089,0.088c0,0.028,0,0.072,0,0.131v0.043
				c0,0.03,0,0.058,0,0.087l-0.043,0.088c-0.059,0.029-0.088,0.072-0.088,0.13v0.133c0,0.058-0.013,0.085-0.043,0.085
				c-0.06,0.031-0.089,0.074-0.089,0.132v0.131c0.029,0.06,0.073,0.088,0.132,0.088c0,0.028,0,0.059,0,0.086
				c0.029,0.03,0.073,0.046,0.131,0.046c0,0.027,0,0.071,0,0.128l0.044,0.045c0,0.03,0.014,0.058,0.044,0.087
				c0,0.029,0,0.058,0,0.089c0.028,0.028,0.057,0.071,0.087,0.129c0.027,0,0.042,0.014,0.042,0.044v0.173c0,0.029,0,0.074,0,0.132
				v0.218c0,0.03,0,0.073,0,0.132v0.132c0,0.057,0,0.101,0,0.129v0.088c-0.058,0-0.102,0.013-0.13,0.044c0,0.027,0,0.059,0,0.088
				c0,0.027,0,0.058,0,0.085c0,0.03,0,0.06,0,0.088c-0.061,0.03-0.118,0.058-0.176,0.088c-0.028,0.029-0.043,0.061-0.043,0.088
				c-0.321-0.027-0.625-0.044-0.919-0.044H9.533c0-0.027,0-0.059,0-0.087c-0.379,0-0.773-0.015-1.181-0.045V28.65
				c-0.554-0.027-1.12-0.059-1.703-0.087c0-0.03-0.015-0.043-0.043-0.043c-0.614-0.029-1.225-0.044-1.837-0.044
				c0-0.03,0-0.058,0-0.088c-0.204,0-0.377-0.015-0.522-0.043l-0.044-0.044c-0.497,0-0.991,0-1.486,0
				c-0.059,0-0.102-0.014-0.131-0.042c-0.087-0.03-0.175-0.044-0.261-0.044c0-0.031-0.031-0.042-0.088-0.042
				c-0.351-0.03-0.714-0.059-1.092-0.089c-0.03-0.027-0.06-0.043-0.088-0.043c0-0.059,0-0.102,0-0.132v-0.13
				c-0.173,0-0.335-0.014-0.481-0.043c-0.028-0.028-0.057-0.044-0.086-0.044c0-0.058,0-0.104,0-0.132
				c-0.029,0-0.06-0.028-0.088-0.085c-0.029,0-0.059-0.029-0.087-0.088v-0.044c0-0.058,0-0.101,0-0.129c0-0.031,0-0.06,0-0.089
				c0-0.029,0-0.057,0-0.087v-0.045c0-0.057,0-0.101,0-0.128c0-0.031,0-0.061,0-0.092c0-0.027,0-0.057,0-0.085v-0.044
				c0-0.058,0-0.101,0-0.131c0-0.029,0-0.058,0-0.088c0-0.027,0-0.058,0-0.086c0-0.03,0-0.06,0-0.087c0-0.031,0-0.059,0-0.089
				c0-0.028,0-0.058,0-0.086c0-0.03,0-0.057,0-0.088c0-0.029,0-0.06,0-0.088c0-0.027,0-0.058,0-0.086
				c0.028-0.029,0.058-0.06,0.087-0.087c0.028-0.031,0.059-0.06,0.088-0.09c0-0.027,0-0.059,0-0.086c0-0.029,0-0.059,0-0.087
				c0.029-0.028,0.058-0.058,0.086-0.087c0-0.029,0.017-0.058,0.045-0.087c0-0.03,0-0.058,0-0.088c0-0.029,0-0.058,0-0.087
				c0-0.028,0-0.058,0-0.087c0-0.028,0-0.059,0-0.089c0-0.027,0.014-0.058,0.044-0.086c0.028-0.03,0.042-0.06,0.042-0.087
				c0-0.03,0-0.059,0-0.086c0-0.03,0-0.06,0-0.09c0-0.028,0-0.056,0-0.086c0-0.029,0-0.059,0-0.088v-0.044c0.031,0,0.059,0,0.088,0
				v-0.086c0-0.059,0-0.102,0-0.131v-0.088c0.028-0.029,0.058-0.043,0.088-0.043c0.027-0.059,0.042-0.103,0.042-0.13
				c0-0.031,0.014-0.06,0.044-0.088v-0.086c0.028-0.03,0.057-0.044,0.086-0.044c0-0.059,0-0.102,0-0.133c0-0.027,0-0.057,0-0.085
				v-0.133c0.028-0.029,0.058-0.042,0.088-0.042v-0.09c0-0.028,0-0.057,0-0.085c0.058-0.029,0.116-0.058,0.172-0.086
				c0-0.03,0-0.06,0-0.089c0-0.027,0-0.059,0-0.087c0-0.029,0-0.059,0-0.087c0.059-0.03,0.09-0.059,0.09-0.088s0-0.057,0-0.088
				c0-0.027,0-0.057,0-0.086c0.028-0.028,0.058-0.06,0.087-0.087c0.029-0.031,0.059-0.06,0.088-0.088
				c0.028-0.029,0.058-0.058,0.086-0.086c0-0.03,0-0.059,0-0.089c0.059,0,0.104,0,0.131,0c0-0.057,0-0.102,0-0.129
				c0-0.031,0-0.06,0-0.089c0.028-0.028,0.059-0.057,0.087-0.088c0-0.027,0.015-0.043,0.046-0.043
				c0.026-0.059,0.041-0.103,0.041-0.13c0-0.031,0.016-0.059,0.047-0.087c0.055-0.031,0.1-0.059,0.13-0.088v-0.044
				c0-0.058,0-0.104,0-0.133c0.028-0.028,0.042-0.058,0.042-0.086c0.028-0.029,0.045-0.058,0.045-0.086v-0.045
				c0.057-0.028,0.101-0.043,0.129-0.043c0-0.059,0.017-0.086,0.045-0.086c0.029-0.06,0.042-0.103,0.042-0.132l0.045-0.087
				c0-0.03,0.014-0.044,0.045-0.044c0-0.058,0.015-0.088,0.042-0.088c0-0.058,0-0.103,0-0.13v-0.087
				c0.058-0.031,0.103-0.06,0.131-0.089V20.26c0-0.059,0-0.102,0-0.13c0.029,0,0.059-0.029,0.087-0.088
				c0-0.029,0.016-0.058,0.044-0.087c0.028-0.028,0.058-0.059,0.086-0.087c0-0.028,0-0.058,0-0.085
				c0.028-0.031,0.073-0.061,0.133-0.09c0-0.029,0-0.058,0-0.087c0.028-0.027,0.042-0.057,0.042-0.087
				c0.03-0.028,0.044-0.056,0.044-0.086c0-0.028,0.016-0.059,0.045-0.086c0.029-0.031,0.057-0.06,0.087-0.089
				c0-0.03,0-0.058,0-0.088c0.028-0.028,0.058-0.058,0.087-0.087c0.028-0.027,0.044-0.059,0.044-0.086
				c0.027-0.029,0.072-0.058,0.13-0.088c0-0.027,0-0.058,0-0.087h0.088c0-0.058,0-0.103,0-0.132
				c0.029-0.027,0.042-0.058,0.042-0.086c0.028,0,0.06-0.03,0.087-0.088c0.059-0.029,0.103-0.043,0.131-0.043c0-0.06,0-0.1,0-0.133
				v-0.085c0.06,0,0.102-0.016,0.131-0.043c0-0.031,0-0.059,0-0.088c0.028-0.028,0.058-0.058,0.089-0.088c0-0.028,0-0.059,0-0.086
				c0.058-0.028,0.102-0.059,0.132-0.087c0-0.028,0-0.059,0-0.088c0-0.03,0-0.058,0-0.088c0.056,0,0.1-0.014,0.129-0.042
				c0-0.028,0-0.059,0-0.087c0.031-0.03,0.059-0.061,0.088-0.088c0-0.03,0-0.058,0-0.088c0.058-0.028,0.102-0.059,0.13-0.087
				c0-0.028,0-0.058,0-0.086c0.031-0.028,0.074-0.058,0.132-0.087c0-0.031,0-0.06,0-0.089c0.03-0.03,0.059-0.057,0.087-0.088
				c0-0.027,0-0.057,0-0.085c0-0.029,0-0.057,0-0.087c0.059-0.029,0.103-0.059,0.132-0.087c0-0.032,0-0.06,0-0.088v-0.087
				c0.057-0.03,0.1-0.044,0.13-0.044c0-0.029,0.014-0.073,0.043-0.131l0.044-0.088v-0.045c0-0.057,0.014-0.087,0.044-0.087
				c0.058-0.056,0.087-0.1,0.087-0.129v-0.131c0.059-0.059,0.101-0.086,0.131-0.086c0-0.059,0-0.104,0-0.133l0.043-0.086
				l0.044-0.045v-0.086c0-0.06,0-0.102,0-0.132c0.028,0,0.059-0.028,0.087-0.088c0.029-0.027,0.042-0.058,0.042-0.087v-0.044
				c0-0.028,0-0.056,0-0.086c0.03-0.028,0.073-0.044,0.133-0.044c0-0.028,0-0.073,0-0.13v-0.219c-0.06-0.03-0.103-0.073-0.133-0.132
				v-0.13c-0.058-0.03-0.101-0.057-0.129-0.088c0-0.028,0-0.058,0-0.087c0-0.028,0-0.058,0-0.087
				c-0.031-0.029-0.06-0.059-0.087-0.086c-0.031,0-0.073-0.017-0.131-0.047c0-0.028,0-0.058,0-0.085c0-0.029,0-0.059,0-0.088
				c-0.029-0.028-0.073-0.072-0.131-0.13v-0.133c-0.029-0.028-0.058-0.058-0.087-0.087c-0.03-0.027-0.074-0.073-0.13-0.131
				c-0.029,0-0.073-0.015-0.132-0.043v-0.176c-0.029-0.029-0.057-0.072-0.087-0.129V12.79c0-0.058,0-0.101,0-0.132V12.44
				c0-0.029,0-0.06,0-0.088c-0.729,0-1.441,0-2.141,0c0-0.027,0-0.058,0-0.087c-0.087-0.028-0.16-0.043-0.22-0.043v-0.042
				c-0.028-0.03-0.072-0.044-0.129-0.044c-0.03-0.029-0.059-0.06-0.087-0.088C2.118,11.99,2.09,11.96,2.06,11.96
				c-0.058-0.03-0.103-0.058-0.129-0.089c-0.031-0.03-0.046-0.072-0.046-0.129c-0.028,0-0.059-0.017-0.087-0.044
				c0-0.03,0-0.058,0-0.088c-0.027-0.027-0.072-0.057-0.131-0.087v-0.043c-0.028-0.028-0.073-0.059-0.13-0.086
				c-0.029,0-0.073-0.015-0.131-0.042v-0.089c0-0.03,0-0.074,0-0.133l-0.09-0.087c-0.057,0-0.115-0.015-0.172-0.043
				c0-0.03,0-0.057,0-0.086c-0.03-0.031-0.06-0.059-0.088-0.088c0-0.028,0-0.058,0-0.087c0-0.028,0-0.059,0-0.087H0.969v-0.088
				c0-0.058,0-0.102,0-0.131v-0.219c0-0.058,0-0.101,0-0.131V9.992c0-0.028,0-0.058,0-0.086V9.862c0-0.058,0-0.101,0-0.13V9.643
				c0-0.028,0-0.058,0-0.086c0-0.03,0-0.058,0-0.088c0-0.029,0-0.06,0-0.087V9.294c0-0.029,0-0.06,0-0.087c0-0.03,0-0.059,0-0.088
				s0-0.058,0-0.087c0-0.029,0-0.057,0-0.087c0-0.027,0-0.058,0-0.088c0-0.027,0-0.058,0-0.085c0-0.03,0-0.059,0-0.088
				c0-0.028,0-0.058,0-0.088c0-0.028,0-0.056,0-0.087c0-0.028,0-0.059,0-0.087c0-0.029,0-0.059,0-0.087c0-0.03,0-0.058,0-0.086
				c0-0.031,0-0.059,0-0.089c0-0.027,0-0.057,0-0.086c0-0.03,0-0.061,0-0.089c0-0.029,0-0.057,0-0.086c0-0.028,0-0.058,0-0.087
				s0-0.058,0-0.086c0-0.029,0-0.06,0-0.087c0-0.03,0-0.06,0-0.089V7.458c0-0.028,0-0.058,0-0.088c0-0.027,0-0.056,0-0.085
				c0-0.031,0-0.059,0-0.088V7.108c0-0.028,0-0.057,0-0.087c0-0.027,0-0.06,0-0.087c0-0.028,0-0.059,0-0.086V6.759
				c0-0.029,0-0.058,0-0.085c0-0.03,0-0.074,0-0.132V6.41c0-0.028,0-0.072,0-0.132V6.149c0-0.031,0-0.06,0-0.089h0.086V6.017
				c0-0.029,0-0.058,0-0.086c0-0.03,0-0.06,0-0.089s0-0.06,0-0.087c0-0.029,0-0.059,0-0.087s0-0.058,0-0.088
				c0-0.029,0-0.057,0-0.085V5.449c0.028,0,0.058,0,0.088,0c0-0.029,0-0.06,0-0.088c0.087-0.03,0.172-0.058,0.262-0.088
				c0.028-0.03,0.042-0.057,0.042-0.085c0.031-0.03,0.045-0.06,0.045-0.089h0.044c0.057,0,0.13-0.015,0.217-0.043
				c0-0.03,0.017-0.059,0.044-0.087V4.882C1.826,4.852,1.856,4.809,1.885,4.75c0.059,0,0.134-0.016,0.219-0.044
				c0.029-0.028,0.058-0.06,0.087-0.087C2.219,4.59,2.236,4.56,2.236,4.531c0.057-0.029,0.129-0.057,0.216-0.085
				c0-0.031,0.031-0.06,0.09-0.089V4.313l0.042-0.044c0.058,0,0.103-0.014,0.131-0.042V4.181c0.059-0.028,0.117-0.058,0.176-0.087
				l0.042-0.043c0.06-0.029,0.102-0.058,0.133-0.087C3.124,3.934,3.181,3.92,3.24,3.92c0-0.03,0.014-0.059,0.044-0.088
				C3.342,3.803,3.4,3.774,3.459,3.744C3.488,3.715,3.532,3.686,3.59,3.658C3.618,3.628,3.634,3.6,3.634,3.57
				c0.086,0,0.173,0,0.261,0c0-0.027,0-0.058,0-0.087c0.06-0.029,0.102-0.059,0.131-0.086V3.351
				c0.058-0.029,0.133-0.059,0.221-0.086c0.056-0.03,0.1-0.044,0.129-0.044c0-0.029,0-0.059,0-0.088V3.089
				c0.059,0,0.103-0.015,0.131-0.042H4.55V3.003h0.044V2.958c0-0.029,0-0.06,0-0.088V2.739c0.146,0,0.263,0.014,0.351,0.043
				c0-0.029,0-0.059,0-0.087c0-0.029,0-0.058,0-0.086c0-0.029,0-0.06,0-0.089s0-0.058,0-0.086V2.39h0.043
				c0.029-0.027,0.057-0.044,0.087-0.044c0-0.028,0-0.058,0-0.086h0.043c0.03-0.03,0.044-0.058,0.044-0.088
				c0-0.029,0.014-0.044,0.044-0.044c0-0.028,0-0.057,0-0.088c0.289,0,0.597,0.017,0.916,0.045v0.043
				c0.116,0.031,0.234,0.044,0.35,0.044V2.26c0,0.028,0,0.072,0,0.13v0.088c0,0.03,0.015,0.043,0.044,0.043
				c0,0.06,0.014,0.103,0.043,0.133l0.046,0.086V2.87c0,0.059,0,0.103,0,0.133c0,0.028,0,0.058,0,0.086
				c5.94,0,11.884,0.016,17.827,0.044V3.089c0-0.028,0-0.058,0-0.086c0-0.03,0-0.074,0-0.133V2.653c0-0.03,0-0.073,0-0.133V2.39
				c0-0.058,0-0.102,0-0.13V2.04h0.042C24.504,2.04,24.533,2.026,24.563,1.998z M21.94,14.8c-0.029-0.029-0.057-0.059-0.086-0.086
				c0-0.031,0-0.06,0-0.091c0-0.027,0-0.056,0-0.086c-0.028-0.029-0.06-0.059-0.087-0.088c0-0.028,0-0.058,0-0.085
				c0-0.031,0-0.06,0-0.088v-0.087c-0.03-0.03-0.074-0.058-0.132-0.088v-0.129c-0.029,0-0.074-0.017-0.131-0.047
				c0-0.028,0-0.058,0-0.085c-0.029-0.029-0.058-0.059-0.088-0.088c-0.028-0.028-0.058-0.059-0.086-0.089
				c-0.204,0-0.41-0.014-0.613-0.041c-0.785,0-1.572,0-2.36,0l0.046,0.041c0,0.03,0,0.061,0,0.089v0.043c0,0.03,0,0.059,0,0.089
				h0.044v0.041l0.042,0.047c0,0.027,0.015,0.041,0.043,0.041c0,0.029,0,0.06,0,0.088l0.043,0.044
				c0.031,0.029,0.044,0.059,0.044,0.087h0.043c0,0.031,0.016,0.059,0.045,0.088h0.043c0,0.029,0.014,0.044,0.043,0.044
				c0.027,0.027,0.057,0.057,0.087,0.085v0.044c0.029,0.029,0.044,0.057,0.044,0.087h0.088c0,0.027,0,0.059,0,0.088
				c0.027,0,0.058,0,0.085,0l0.046,0.045c0.028,0.027,0.044,0.057,0.044,0.086h0.041v0.087c0.029,0.029,0.06,0.042,0.088,0.042
				c0.03,0,0.044,0.016,0.044,0.044l0.043,0.044v0.042h0.044l0.044,0.044c0.028,0.029,0.058,0.043,0.087,0.043v0.044
				c0,0.029,0.015,0.044,0.043,0.044h0.044c0.029,0.03,0.059,0.043,0.087,0.043s0.058,0.017,0.088,0.044
				c0.028,0,0.058,0.014,0.088,0.043v0.086l0.042,0.045h0.088c0.03,0.03,0.058,0.06,0.087,0.088l0.044,0.043
				c0,0.028,0,0.058,0,0.088l-0.044,0.044c-0.029,0.027-0.044,0.059-0.044,0.086l-0.043,0.043v0.088h-0.044c0,0.029,0,0.058,0,0.087
				c-0.029,0-0.044,0.014-0.044,0.042c-0.028,0-0.042,0.017-0.042,0.044h-0.046l-0.042,0.043h-0.043c-0.146,0-0.263,0-0.35,0
				c-0.058,0-0.102-0.013-0.132-0.043c-0.059,0-0.102,0-0.129,0c-0.03-0.027-0.061-0.044-0.091-0.044c-0.028,0-0.058,0-0.085,0
				c-0.029-0.028-0.059-0.042-0.088-0.042l-0.044-0.044v-0.043c-0.03,0-0.074,0-0.13,0h-0.089c-0.029-0.028-0.073-0.043-0.13-0.043
				c0-0.031-0.015-0.045-0.043-0.045l-0.042-0.043c-0.031,0-0.044-0.015-0.044-0.045c-0.029,0-0.046-0.014-0.046-0.041
				c-0.028,0-0.073,0-0.131,0l-0.043-0.044v-0.045c0-0.029-0.013-0.043-0.043-0.043l-0.042-0.043
				c-0.03-0.028-0.06-0.043-0.087-0.043c0-0.029-0.017-0.045-0.044-0.045c-0.03,0-0.045-0.014-0.045-0.045
				c0-0.027-0.016-0.041-0.044-0.041l-0.044-0.045v-0.043c0-0.027-0.014-0.044-0.043-0.044l-0.043-0.043
				c-0.029-0.028-0.059-0.044-0.088-0.044c0-0.027-0.014-0.044-0.042-0.044c-0.03,0-0.042-0.014-0.042-0.043
				s-0.015-0.044-0.044-0.044l-0.044-0.042v-0.044c0-0.028-0.016-0.044-0.046-0.044c-0.027,0-0.043-0.013-0.043-0.042l-0.042-0.044
				c-0.03-0.028-0.059-0.043-0.087-0.043c0-0.029-0.017-0.042-0.046-0.042c0-0.03-0.015-0.06-0.043-0.088h-0.043v-0.088
				l-0.044-0.044v-0.043c-0.028-0.03-0.058-0.044-0.088-0.044v-0.041c0-0.03-0.014-0.06-0.042-0.089c0-0.03-0.016-0.044-0.044-0.044
				c0-0.029-0.016-0.044-0.046-0.044v-0.042c0-0.03,0-0.058,0-0.088l-0.042-0.043c0-0.029,0-0.059,0-0.086v-0.088l-0.044-0.044
				c0-0.029-0.014-0.059-0.043-0.088v-0.045c0-0.027,0-0.058,0-0.085c-0.03,0-0.059,0-0.089,0l-0.042,0.041
				c-0.06,0.03-0.104,0.061-0.131,0.089v0.043c-0.028,0.03-0.059,0.059-0.088,0.089l-0.045,0.041
				c-0.028,0.03-0.043,0.059-0.043,0.087c-0.029,0.06-0.071,0.104-0.13,0.132c0,0.059,0,0.102,0,0.131
				c0,0.029-0.015,0.073-0.044,0.133c-0.057,0.027-0.087,0.056-0.087,0.085c0,0.057,0,0.102,0,0.129c0,0.031,0,0.074,0,0.134
				c-0.029,0.028-0.059,0.071-0.088,0.13c-0.028,0.029-0.057,0.059-0.086,0.087c-0.03,0.059-0.044,0.102-0.044,0.131
				s-0.03,0.073-0.088,0.132c0,0.03-0.015,0.073-0.042,0.13c0,0.029,0,0.059,0,0.086c0,0.031,0,0.075,0,0.133
				c-0.029,0.029-0.075,0.072-0.13,0.132c0,0.03,0,0.072,0,0.13c-0.031,0.029-0.047,0.057-0.047,0.088
				c-0.027,0.028-0.071,0.073-0.13,0.131c0,0.028,0,0.073,0,0.129c0,0.031,0,0.075,0,0.133c-0.029,0-0.044,0.029-0.044,0.086
				c-0.029,0.029-0.073,0.075-0.131,0.131c0,0.031,0,0.073,0,0.133c2.156,0.028,4.297,0.058,6.424,0.087c0-0.029,0-0.059,0-0.087
				c0-0.032,0-0.06,0-0.088c0-0.029,0-0.059,0-0.087c0-0.03,0-0.059,0-0.088c0.058-0.028,0.102-0.057,0.132-0.086
				c0.027-0.03,0.059-0.058,0.087-0.088v-0.088c0.029-0.027,0.057-0.044,0.086-0.044c0-0.056,0-0.1,0-0.129v-0.088
				c0.059,0,0.117-0.014,0.175-0.043c0-0.027,0-0.059,0-0.086c0-0.03,0-0.059,0-0.089c0-0.029,0-0.058,0-0.087
				c0.029-0.028,0.06-0.058,0.088-0.088c0-0.028-0.015-0.058-0.044-0.086c-0.028-0.029-0.043-0.06-0.043-0.088
				c0-0.027,0-0.058,0-0.087c0-0.028,0-0.059,0-0.089c-0.029-0.028-0.044-0.058-0.044-0.087c-0.027-0.028-0.073-0.056-0.131-0.086
				c0-0.028,0-0.058,0-0.087C21.94,14.856,21.94,14.828,21.94,14.8z M6.343,15.936v-0.045H6.299v0.045H6.343z`,
            }),
          });
        }
        function C2(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 83.5 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M78.091,3.545c0,0.085,0.072,0.199,0.216,0.342
				c0.113,0.314,0.242,0.728,0.384,1.241c0.085,0.542,0.2,1.068,0.342,1.583v1.368c0.114,0.086,0.186,0.2,0.213,0.341
				c0.03,0.172,0.087,0.343,0.171,0.515h0.257c0.172,0,0.314-0.015,0.427-0.042c0.059,0,0.144,0,0.258,0l2.352,0.042l0.085,0.17
				c0,0.142,0.043,0.284,0.128,0.427c0.084,0.199,0.156,0.415,0.214,0.643c0.057,0.256,0.057,0.485,0,0.684
				c-0.058,0.229-0.2,0.384-0.428,0.47c-0.257,0.113-0.569,0.186-0.941,0.213c-0.313,0.058-0.555,0.086-0.727,0.086
				c-0.028,0-0.171,0.043-0.428,0.128c-0.17,0.029-0.314,0.071-0.427,0.128h-0.255c-0.145,0-0.315-0.044-0.515-0.128
				c0,0.257-0.042,0.485-0.126,0.685c-0.059,0.255-0.244,0.427-0.557,0.513c-0.115,0-0.199,0.014-0.256,0.042
				c-0.029,0.057-0.058,0.086-0.087,0.086l-0.083,0.043v0.726l-0.216,0.685h-0.126c-0.285,0-0.714,0-1.285,0
				c-0.627,0.029-1.054-0.072-1.283-0.299c-0.113,0-0.213,0.058-0.298,0.171l-0.13,0.128h-0.085
				c-0.256,0.029-0.513,0.129-0.77,0.299c-0.228,0.172-0.37,0.341-0.428,0.513c0,0.085,0,0.3,0,0.642
				c0,0.312,0.029,0.698,0.086,1.154c0,0.483,0,1.068,0,1.753c0,0.741,0,1.439,0,2.094c0,0.657,0,1.283,0,1.882
				c-0.029,0.599-0.058,1.099-0.086,1.498c-0.084,0.571-0.155,1.025-0.214,1.367c-0.113,0.313-0.199,0.571-0.256,0.771
				c-0.084,0.17-0.127,0.327-0.127,0.471l-0.128,0.213H72.79c-0.228,0.057-0.613,0.099-1.154,0.129
				c-0.542,0-0.928-0.115-1.155-0.342v-0.086c-0.085-0.114-0.199-0.243-0.342-0.385c-0.143-0.115-0.214-0.329-0.214-0.643
				c-0.057-0.398-0.086-0.655-0.086-0.77v-0.17l-0.171-0.128c0.144-1.767,0.244-3.236,0.299-4.404
				c0.087-1.113,0.143-1.995,0.172-2.652c0.057-0.655,0.128-1.154,0.214-1.497c0.057-0.314,0.099-0.526,0.128-0.641
				c-0.085,0-0.185-0.042-0.3-0.128c-0.056-0.086-0.142-0.186-0.256-0.3L69.71,14.92c-0.057-0.028-0.113-0.058-0.17-0.085
				c-0.028-0.056-0.085-0.086-0.172-0.086c0-0.113-0.084-0.213-0.256-0.3c-0.199-0.142-0.328-0.212-0.385-0.212
				c-0.142,0-0.241-0.029-0.299-0.086c-0.086,0-0.128-0.014-0.128-0.043c-0.029,0-0.057,0-0.085,0l-0.642,0.129
				c-0.027,0-0.086-0.029-0.171-0.086c-0.084,0-0.142-0.014-0.171-0.043c-0.084,0-0.156,0-0.213,0c-0.028,0-0.099,0-0.213,0
				c-0.114,0.03-0.201,0.043-0.257,0.043c-0.144,0.057-0.285,0.086-0.427,0.086h-2.607c0-0.086,0.013-0.215,0.042-0.386
				c0-0.114,0.014-0.257,0.042-0.427c0-0.114,0-0.214,0-0.299c-0.256,0.114-0.641,0.34-1.154,0.684
				c-0.541,0.285-0.898,0.428-1.069,0.428h-1.754c0.058,0.227,0.128,0.542,0.214,0.939c0.086,0.401,0.171,0.826,0.257,1.283
				c0.057,0.514,0.142,1.084,0.256,1.712c-0.114,0-0.199,0.012-0.256,0.042l-0.471,0.257c0,0.086,0.073,0.414,0.214,0.984
				c0.171,0.598,0.357,1.368,0.556,2.308c0.172,0.94,0.385,1.981,0.643,3.122c0.228,1.197,0.499,2.38,0.813,3.549
				c0.131,0.598,0.267,1.211,0.406,1.839c0.021,0.102,0.042,0.201,0.063,0.299c-0.071,0.004-0.141,0.018-0.213,0.043
				c-0.114,0-0.213,0.014-0.3,0.042c-0.114,0.028-0.213,0.043-0.3,0.043c-0.057,0.027-0.127,0.055-0.213,0.084
				c-0.228,0-0.456,0.013-0.684,0.043c-0.114,0-0.215,0.013-0.299,0.043c-0.114,0.028-0.214,0.042-0.3,0.042
				c-0.058,0.03-0.127,0.059-0.213,0.086c-0.428,0-0.87,0.015-1.326,0.043c-0.113,0-0.214,0.016-0.298,0.042
				c-0.115,0.028-0.215,0.043-0.3,0.043c-0.058,0.028-0.129,0.057-0.215,0.084c-0.242,0-0.484,0-0.726,0l-0.213-0.897
				c-0.004-0.014-0.004-0.027,0-0.042c-0.288-1.353-0.589-2.65-0.899-3.891c-0.284-1.313-0.569-2.494-0.854-3.55
				c-0.201-1.055-0.385-1.894-0.557-2.522c-0.172-0.626-0.257-0.955-0.257-0.984h-1.154c-0.342,0.029-0.641,0.042-0.897,0.042
				c-0.229,0.028-0.444,0.043-0.643,0.043c-0.256,0-0.441,0.058-0.556,0.172c-0.256,0.113-0.441,0.255-0.556,0.427
				c-0.143,0.198-0.256,0.37-0.342,0.512c-0.059,0.143-0.142,0.271-0.257,0.384c-0.114,0.116-0.228,0.217-0.342,0.3
				c-0.144,0.086-0.484,0.157-1.026,0.215c-0.627,0.086-1.253,0.128-1.883,0.128c-0.739,0-1.438,0-2.095,0
				c-0.625,0-1.041-0.072-1.239-0.213c-0.342-0.087-0.727-0.229-1.155-0.43c-0.457-0.227-0.783-0.412-0.982-0.553
				c-0.57,0.796-0.855,1.34-0.855,1.625c0.113,0.254,0.199,0.44,0.256,0.554c0.058,0.115,0.086,0.216,0.086,0.3h0.129l-0.471,0.471
				c-0.029-0.029-0.073-0.043-0.129-0.043c-0.143,0-0.227,0.014-0.256,0.043c-0.115,0.084-0.241,0.298-0.385,0.641
				c-0.199,0.342-0.441,0.728-0.726,1.153c-0.229,0.457-0.415,0.885-0.557,1.284c-0.172,0.341-0.256,0.584-0.256,0.726v0.941
				c0.084,0.086,0.057,0.228-0.087,0.429c-0.227,0.17-0.555,0.228-0.981,0.17c-0.172-0.083-0.515-0.241-1.028-0.469
				c-0.483-0.287-1.026-0.6-1.625-0.941c-0.569-0.315-1.082-0.614-1.539-0.899c-0.512-0.372-0.784-0.626-0.813-0.77
				c0-0.113,0.043-0.271,0.129-0.471c0.057-0.141,0.242-0.484,0.555-1.025c0.257-0.542,0.671-1.325,1.24-2.353
				c0.6-0.998,1.384-2.352,2.353-4.063c0-0.255-0.099-0.712-0.3-1.367c-0.142-0.656-0.626-1.113-1.453-1.369l-1.797-0.684
				c-0.369-0.086-0.684-0.143-0.94-0.171c-0.256-0.057-0.527-0.085-0.813-0.085c-0.257-0.058-0.57-0.1-0.941-0.129
				c-0.427-0.083-0.869-0.127-1.326-0.127c-0.484-0.03-0.913-0.03-1.282,0c-0.428,0-0.727,0.044-0.897,0.127L4.201,21.675H4.117
				c-0.058,0-0.215,0.017-0.47,0.043c-0.315,0.057-0.657,0.1-1.028,0.128c-0.314,0-0.669-0.014-1.068-0.042
				c-0.399-0.058-0.685-0.144-0.855-0.257c-0.172-0.199-0.257-0.384-0.257-0.557v-2.993c0-0.712,0-1.453,0-2.224
				c0-0.741-0.072-1.296-0.213-1.668v-2.051c0-0.286-0.014-0.571-0.043-0.855c-0.058-0.286-0.085-0.558-0.085-0.813
				c-0.085-0.371-0.114-0.726-0.085-1.069c0-0.342,0.186-0.585,0.555-0.727c0.029-0.028,0.315-0.07,0.854-0.128
				c0.515,0,1.099-0.015,1.754-0.043c0.685,0,1.411-0.013,2.181-0.042c0.711,0,1.325,0,1.838,0h15.565
				c0.199-0.086,0.5-0.17,0.898-0.256c0.399-0.142,0.784-0.243,1.155-0.299c0.426-0.143,0.827-0.256,1.197-0.342
				c0.286-0.114,0.47-0.199,0.556-0.256l0.898-0.642c0.199-0.086,0.371-0.186,0.514-0.3c0.169-0.029,0.298-0.071,0.382-0.128
				c0.171-0.143,0.728-0.285,1.669-0.428c0.284,0,0.457-0.028,0.514-0.085c0.142,0,0.242-0.028,0.299-0.084
				c0.142-0.086,0.498-0.429,1.069-1.028c0.513-0.569,1.012-1.097,1.496-1.582c0.284-0.2,0.713-0.256,1.283-0.171
				c0.57,0.058,0.998,0.114,1.283,0.171c0.085,0,0.172-0.014,0.256-0.043c0.057,0,0.101-0.014,0.127-0.043
				c0.086,0,0.144,0.015,0.172,0.043c0.199,0.115,0.342,0.186,0.429,0.214h1.024L38.24,3.63v1.797h0.17V4.358h2.224V3.802h1.196
				v0.557h0.813V3.802h1.111v0.557h0.771V3.802h1.154v0.557h0.941V3.802h1.112v0.557h0.94V3.802h1.155v0.557h0.941V3.802h1.155
				v0.557h0.726V3.802h1.282v0.557h0.685V3.802h1.155v0.557h1.197v1.068h15.694c0.284-0.228,0.641-0.541,1.068-0.941
				c0.457-0.399,0.757-0.711,0.898-0.941c0-0.256,0.014-0.455,0.042-0.598c0.029-0.113,0.042-0.229,0.042-0.342
				c0.114-0.285,0.2-0.528,0.256-0.727c0.144-0.228,0.343-0.371,0.599-0.426h0.344c0.255-0.116,0.511-0.186,0.768-0.216
				c0.229,0,0.443,0.172,0.642,0.514c0.314,0.399,0.527,0.798,0.643,1.197C78.049,3.204,78.091,3.403,78.091,3.545z M56.326,4.957
				H39.095v0.47h17.231V4.957z M42.558,19.026c0.229,0.199,0.499,0.298,0.813,0.298h3.975c0.256,0,0.543-0.1,0.855-0.298
				c0.199-0.199,0.301-0.414,0.301-0.643c0-0.427-0.102-0.756-0.301-0.982c-0.313-0.17-0.599-0.256-0.855-0.256h-3.975
				c-0.314,0-0.584,0.086-0.813,0.256c-0.285,0.227-0.428,0.556-0.428,0.982C42.13,18.612,42.272,18.827,42.558,19.026z
				 M20.194,12.824c0-0.713-0.342-1.069-1.027-1.069h-1.88c-0.257,0-0.471,0.084-0.642,0.257c-0.2,0.201-0.298,0.471-0.298,0.812
				c0,0.228,0.098,0.415,0.298,0.557c0.171,0.198,0.385,0.3,0.642,0.3h1.88c0.314,0,0.57-0.102,0.77-0.3
				C20.108,13.239,20.194,13.052,20.194,12.824z M5.868,10.985c-0.484-0.085-0.939-0.141-1.367-0.169c-0.457,0-0.8-0.03-1.027-0.086
				c0,0.398,0.015,0.913,0.042,1.538c0.086,0.657,0.143,1.326,0.171,2.01c0,0.685,0.028,1.34,0.085,1.967
				c0.029,0.6,0.045,0.985,0.045,1.155c0.141,0.143,0.441,0.299,0.896,0.471c0.513,0.17,0.998,0.256,1.455,0.256
				C6.511,18.1,6.98,17.985,7.58,17.785c0.542-0.171,1.111-0.371,1.71-0.599c0.57-0.256,1.14-0.513,1.711-0.769
				c0.513-0.257,0.911-0.47,1.196-0.643c0.199-0.229,0.298-0.485,0.298-0.769c0-0.315-0.084-0.755-0.255-1.326
				c-0.172-0.514-0.329-0.971-0.47-1.369c-0.229,0-0.628-0.056-1.198-0.169c-0.513-0.146-1.154-0.316-1.924-0.515
				c-0.341-0.113-0.769-0.229-1.282-0.342C6.909,11.114,6.411,11.014,5.868,10.985z`,
            }),
          });
        }
        function B0(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 69.25 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M68.96,6.573c0,0.714-0.042,1.294-0.133,1.739
				c-0.031,0.298-0.12,0.61-0.269,0.937c-0.057,0.149-0.116,0.281-0.177,0.4h-13.87l-0.179-0.133l-0.269,0.089h-10.66l-0.267,0.18
				l-0.401-0.136h-4.504V8.847h-1.516V8.18h-0.937v1.56l0.225,0.179v0.758l-0.225,0.179l-0.089,1.516H25.565
				c-0.06,0-0.119,0.028-0.179,0.089c-0.149,0.119-0.266,0.281-0.358,0.492c-0.118,0.325-0.712,1.783-1.781,4.37
				c-0.151,0.267-0.298,0.43-0.448,0.489c-0.088,0.06-0.327,0.104-0.713,0.134l-4.638,0.178c-0.178-0.089-0.4-0.178-0.67-0.266
				c-0.475-0.209-0.862-0.329-1.16-0.356c-0.326-0.06-0.55-0.091-0.668-0.091c-0.12,0.031-0.341,0.074-0.667,0.135
				c-0.271,0.088-0.536,0.12-0.805,0.088l-0.313-0.088l-2.275,9.633l-0.089,1.069l0.491,0.714l-9.588-0.089
				c0-0.564,0.03-1.292,0.09-2.184c0.179-1.786,0.46-3.479,0.847-5.086c0.415-1.635,0.951-3.167,1.605-4.594
				c0.029-0.087,0.238-0.522,0.625-1.293c0.178-0.386,0.283-0.655,0.311-0.802c0.091-0.356,0.015-0.641-0.223-0.848
				c-0.179-0.179-0.563-0.372-1.159-0.579c-0.597-0.209-0.982-0.341-1.16-0.401c-0.238-0.09-0.358-0.208-0.358-0.357
				c-0.029-0.208-0.014-0.551,0.046-1.026l0.089-0.668l-1.651-0.178c-0.119,0-0.224-0.031-0.312-0.091
				c-0.208-0.148-0.298-0.34-0.269-0.578c0.06-0.299,0.255-0.447,0.581-0.447c0.179-0.031,0.342-0.015,0.49,0.046L1.48,8.624
				l1.339,0.848l0.58-2.899l0.937-1.784V4.03l0.714,0.402l2.854,0.045l0.269,0.221h9.722v0.18h5.44V4.743h9.368V3.538h2.229
				l0.267,0.315v0.803l0.312-0.044l0.313,0.399v0.716h0.893V5.102h1.338V3.806h4.639l0.311-0.177l0.401,0.177h10.66l0.311,0.046
				l0.314-0.132h13.693l0.223,0.266c0.119,0.268,0.209,0.581,0.268,0.936C68.901,5.368,68.932,5.918,68.96,6.573z M22.978,12.46
				l-5.083,0.045c-0.506,0.504-0.864,0.877-1.07,1.115c-0.327,0.416-0.506,0.653-0.536,0.714c-0.208,0.327-0.327,0.698-0.354,1.114
				c-0.033,0.208,0,0.505,0.087,0.892c0.059,0.178,0.118,0.33,0.178,0.446l-0.312,0.223c-0.148-0.207-0.268-0.46-0.356-0.759
				c-0.237-0.534-0.342-0.981-0.313-1.336c0.06-0.594,0.283-1.146,0.67-1.65c0.149-0.239,0.312-0.433,0.491-0.581
				c-0.208,0.029-0.444,0.089-0.715,0.178c-0.534,0.179-0.921,0.386-1.159,0.625c-0.327,0.355-0.534,0.743-0.624,1.159
				c-0.119,0.446-0.09,0.862,0.09,1.248c0.177,0.356,0.431,0.656,0.757,0.893c0.327,0.239,0.713,0.4,1.16,0.491
				c0.268,0.028,0.7,0.045,1.293,0.045c0.505-0.031,0.833,0,0.98,0.088c0.209,0.06,0.938,0.091,2.187,0.091
				c1.189-0.031,1.843-0.077,1.962-0.135c0.147-0.088,0.446-0.756,0.892-2.005l0.67-1.875c0-0.089,0-0.181,0-0.269
				c0-0.178-0.031-0.327-0.09-0.446c-0.12-0.119-0.284-0.207-0.491-0.267L22.978,12.46z`,
            }),
          });
        }
        function m1(s) {
          return (0, c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 97.875 32",
            ...s,
            children: (0, c.jsx)("path", {
              fill: "currentColor",
              d: `M97.598,8.701c0,0.274-0.012,0.548-0.035,0.824
				c-0.046,0.365-0.114,0.641-0.206,0.822c-0.16,0.161-0.526,0.263-1.097,0.309c-0.596,0.023-1.179,0.034-1.75,0.034v0.344h0.103
				c0.092,0,0.138,0.057,0.138,0.172c0.206,0,0.49-0.024,0.856-0.07c0.457-0.045,0.812,0.034,1.063,0.24
				c0.206,0.069,0.367,0.32,0.481,0.755c0.137,0.389,0.17,0.778,0.103,1.166c-0.183,0.549-0.571,0.915-1.166,1.097H71.673
				c-0.138,0-0.538,0.127-1.201,0.379c-0.708,0.227-1.727,0.343-3.053,0.343h-0.411c-0.686,0-1.657,0-2.914,0
				c-1.212,0-2.562,0-4.048,0c-1.463,0.045-2.972,0.067-4.527,0.067c-1.509,0-2.925,0-4.251,0c-1.281,0-2.355,0-3.224,0
				c-0.892,0-1.383-0.022-1.476-0.067c-0.273-0.116-0.536-0.195-0.788-0.241c-0.252,0-0.526,0-0.824,0h-1.234
				c-0.16-0.067-0.434-0.102-0.823-0.102c-0.411-0.023-0.835-0.047-1.269-0.068c-0.411,0-0.789,0-1.132,0
				c-0.32,0-0.536,0.01-0.651,0.033c-0.16,0-0.354,0.114-0.583,0.343c-0.571,0.389-0.982,0.582-1.235,0.582
				c-0.091,0-0.251-0.067-0.479-0.205c-0.229-0.068-0.538-0.148-0.926-0.239c-0.342-0.093-0.731-0.172-1.167-0.241
				c-0.433-0.067-0.696-0.103-0.789-0.103c-0.229,0-0.651,0-1.268,0c-0.617,0.046-1.018,0.16-1.2,0.344
				c-0.138,0-0.321,0.193-0.549,0.582c-0.251,0.253-0.549,0.561-0.891,0.928c-0.321,0.342-0.664,0.56-1.029,0.65h-0.583
				c-0.183,0.115-0.32,0.172-0.412,0.172c-0.068,0.021-0.149,0.033-0.24,0.033c-0.206,0-0.548,0.012-1.029,0.034
				c-0.456,0-0.937,0.023-1.439,0.069c-0.549,0.022-1.029,0.068-1.44,0.138c-0.434,0.067-0.697,0.158-0.789,0.275
				c-0.068,0.044-0.184,0.272-0.343,0.684c-0.184,0.413-0.401,0.915-0.653,1.51c-0.296,0.595-0.604,1.234-0.924,1.921
				c-0.322,0.639-0.63,1.233-0.926,1.782c0,0.481,0.034,0.802,0.103,0.961c0.045,0.183,0.092,0.332,0.137,0.445l0.172,0.172
				c0.046,0.114,0.148,0.217,0.309,0.308c0.137,0.092,0.206,0.229,0.206,0.411L21.741,26.5c-0.091,0.092-0.25,0.136-0.48,0.136
				c-0.251,0.047-0.491,0.069-0.72,0.069c-0.274,0-0.583-0.022-0.926-0.069c-0.389-0.09-0.857-0.204-1.405-0.343
				c-0.571-0.091-1.121-0.193-1.647-0.308c-0.48-0.16-0.902-0.309-1.269-0.446c-0.435-0.091-0.663-0.194-0.686-0.309l-0.103-0.136
				v-0.035h-0.034c-0.138-0.092-0.206-0.253-0.206-0.479v-0.241c0.023-0.092,0.218-0.435,0.584-1.028
				c0.342-0.595,0.708-1.269,1.097-2.022c0.389-0.732,0.766-1.418,1.13-2.058c0.32-0.617,0.504-0.994,0.549-1.131
				c0-0.184-0.011-0.425-0.034-0.722c-0.022-0.251-0.115-0.469-0.274-0.65c-0.297-0.115-0.652-0.195-1.063-0.241
				c-0.434-0.069-0.754-0.069-0.96,0c-0.457,0-0.686-0.034-0.686-0.103h-0.137c0-0.093,0.012-0.193,0.034-0.309
				c0-0.093,0.012-0.172,0.036-0.241c0.044-0.045,0.067-0.09,0.067-0.136c-0.091,0-0.514,0.079-1.269,0.238
				c-0.754,0.139-1.555,0.32-2.4,0.55c-0.845,0.183-1.612,0.377-2.298,0.583c-0.709,0.16-1.085,0.239-1.131,0.239
				c-0.092,0.046-0.205,0.149-0.343,0.309c-0.091,0.16-0.274,0.389-0.548,0.687c-0.161,0.205-0.309,0.446-0.446,0.721
				c-0.138,0.297-0.263,0.604-0.377,0.925c-0.137,0.299-0.252,0.55-0.343,0.755c-0.091,0.229-0.161,0.377-0.207,0.446
				c-0.068,0.022-0.24,0.149-0.514,0.377c-0.229,0.137-0.628,0.331-1.2,0.584c-0.594,0.297-1.406,0.64-2.435,1.027H0.926
				l-0.722-0.239L0,9.971l5.35-0.79C5.532,9.16,5.681,9.113,5.795,9.043c0.09-0.068,0.172-0.147,0.24-0.239
				c0.091-0.092,0.171-0.182,0.24-0.273l17.524-1.613v0.206c0.091,0.184,0.194,0.344,0.309,0.481
				c0.091,0.136,0.182,0.205,0.273,0.205c0.046,0.068,0.091,0.103,0.138,0.103c0.068,0,0.137-0.034,0.206-0.103l0.205-0.205V7.124
				h0.138c0.501-0.761,0.867-1.286,1.097-1.577V5.477h0.053c0.03-0.039,0.059-0.074,0.086-0.103
				c0.007-0.012,0.019-0.022,0.033-0.033c0.351,0,0.699,0,1.046,0c0.048,0.04,0.088,0.085,0.12,0.136h0.206v0.291
				c0.188,0.172,0.381,0.259,0.583,0.259l0.343,0.171h1.098c0.365,0,0.651,0.022,0.858,0.068c0.228,0.023,0.343,0.114,0.343,0.275
				c0.136,0,0.205,0.192,0.205,0.582v0.344c0.022,0,0.069,0.011,0.138,0.033c0.044,0.046,0.079,0.07,0.103,0.07l0.103,0.034V6.542
				h12.242V5.854h0.721v0.688h1.782v0.24c0,0.228,0.036,0.457,0.104,0.686c0.091,0.228,0.171,0.343,0.239,0.343h44.959
				c0.091-0.069,0.251-0.218,0.48-0.446c0.159-0.229,0.24-0.422,0.24-0.582l0.138-0.412c0-0.161,0.044-0.389,0.137-0.687
				c0.114-0.251,0.251-0.377,0.411-0.377c0.114,0,0.365,0.091,0.754,0.274c0.319,0.184,0.674,0.39,1.063,0.617
				c0.363,0.229,0.708,0.468,1.028,0.72c0.273,0.298,0.457,0.526,0.548,0.688c0.116,0.09,0.183,0.159,0.206,0.205
				c0.068,0,0.115,0.033,0.137,0.103c0.069,0.023,0.126,0.034,0.172,0.034h0.172l0.583,0.238V8.701z M92.042,10.69h-1.063
				l-0.171-0.24H71.673c-0.252,0.229-0.378,0.423-0.378,0.584v0.172c0.251,0.045,1.086,0.067,2.504,0.067c1.438,0,3.166,0,5.179,0
				c2.057-0.046,4.229-0.092,6.515-0.138c2.354-0.045,4.493-0.079,6.413-0.102h0.48C92.271,10.805,92.156,10.69,92.042,10.69z
				 M28.189,5.923c0.022,0,0.045,0.012,0.068,0.035c0.023,0,0.046,0,0.068,0c0,0.022,0.013,0.032,0.035,0.033h-0.171V5.923z
				 M29.492,15.457c0-0.388-0.08-0.697-0.24-0.925c-0.159-0.207-0.411-0.309-0.754-0.309h-2.503c-0.297,0-0.56,0.102-0.789,0.309
				c-0.183,0.228-0.275,0.537-0.275,0.925c0,0.253,0.092,0.479,0.275,0.687c0.229,0.229,0.492,0.343,0.789,0.343h2.503
				c0.344,0,0.595-0.114,0.754-0.343C29.412,15.936,29.492,15.709,29.492,15.457z M25.582,5.992
				c0.024-0.001,0.048-0.011,0.069-0.033h0.035v0.033H25.582z`,
            }),
          });
        }
        const A1 = {
          ak47: Y1,
          aug: y1,
          awp: r2,
          bayonet: c1,
          bizon: d1,
          cz75a: I1,
          deagle: L1,
          elite: $1,
          famas: i2,
          fiveseven: K1,
          galilar: p2,
          g3sg1: v2,
          glock: h2,
          hkp2000: d2,
          knife_butterfly: u2,
          knife_canis: P1,
          knife_cord: w1,
          knife_css: f2,
          knife_falchion: J1,
          knife_flip: k1,
          knife_gut: Z1,
          knife_gypsy_jackknife: Q1,
          knife_karambit: X1,
          knife_kukri: q1,
          knife_m9_bayonet: _1,
          knife_outdoor: g2,
          knife_push: c2,
          knife_skeleton: i,
          knife_stiletto: r,
          knife_survival_bowie: d,
          knife_tactical: C,
          knife_ursus: M,
          knife_widowmaker: E,
          m4a1_silencer: Z,
          m4a1: n0,
          m249: a0,
          mac10: k,
          mag7: e0,
          mp5sd: b0,
          mp7: k0,
          mp9: I,
          negev: g0,
          nova: E0,
          p90: f1,
          p250: D1,
          revolver: j1,
          sawedoff: H1,
          scar20: m2,
          sg556: n2,
          ssg08: R1,
          taser: e2,
          tec9: x2,
          ump45: C2,
          usp_silencer: B0,
          xm1014: m1,
        };
        var F1 = n(39790);
        const t2 = "$any$",
          x1 = "$none$";
        function B1(s) {
          return s.map((D) => D.localized_facet).join(", ");
        }
        function L2(s) {
          const { matches: D, children: q } = s;
          return (0, c.jsx)(c0.s, {
            gap: "2",
            align: "center",
            children: (0, c.jsxs)(f.EY, {
              children: [
                q,
                " ",
                D !== void 0 && D >= 1
                  ? (0, c.jsxs)(f.EY, {
                      contrast: "description",
                      children: ["(", Intl.NumberFormat().format(D), ")"],
                    })
                  : void 0,
              ],
            }),
          });
        }
        function A2(s) {
          const {
              facets: D,
              localized_type: q,
              internal_type: u0,
              value: f0 = {},
              onChange: F0,
            } = s,
            s0 = (0, x.useMemo)(
              () => D.filter((b) => f0[u0] && f0[u0][b.internal_facet]),
              [u0, D, f0],
            ),
            R0 = s0.some((b) => b.is_artificial),
            W0 = (0, l0.EC)({
              rgOptions: D,
              selectedValue: s0,
              onSelectionChange: (b) => F0(s0, b),
              filter: (b, y0) =>
                y0 &&
                y0.localized_facet
                  .toLocaleLowerCase()
                  .includes(b.toLocaleLowerCase()),
              filterPlaceholder: h1.K.Localize(
                "#AdvancedSearch_FilterGeneric_Placeholder",
              ),
            }),
            p0 = s0.length > 0;
          return (0, c.jsxs)(l0.PT.Root, {
            state: W0,
            status: p0 ? "highlight" : void 0,
            radius: "sm",
            clearable: !0,
            popoverMaxHeight: 500,
            children: [
              (0, c.jsxs)(l0.PT.Trigger, {
                children: [
                  !p0 &&
                    (0, c.jsx)(l0.PT.Value, {
                      children: h1.K.Localize(
                        "#AccessorySearch_AttachedAccessoryType",
                        q,
                      ),
                    }),
                  p0 &&
                    (0, c.jsxs)(l0.PT.Value, {
                      children: [
                        h1.K.Localize(
                          "#AccessorySearch_AttachedAccessoryType",
                          q,
                        ),
                        ": ",
                        (0, c.jsx)(f.EY, {
                          color: "accent-8",
                          children: B1(s0),
                        }),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(l0.PT.VirtualizedOptions, {
                estimateSize: () => 36,
                items: W0.rgFilteredOptions,
                renderItem: (b, y0) =>
                  (0, c.jsxs)(
                    x.Fragment,
                    {
                      children: [
                        !b.is_separator &&
                          (0, c.jsx)(l0.PT.VirtualizedOption, {
                            value: b,
                            virtualItem: y0,
                            disabled:
                              R0 &&
                              !s0.some(
                                (P0) => P0.internal_facet === b.internal_facet,
                              ),
                            children: (0, c.jsx)(L2, {
                              matches: void 0,
                              children: b.localized_facet,
                            }),
                          }),
                        b.is_separator &&
                          (0, c.jsx)(l0.PT.VirtualizedContent, {
                            virtualItem: y0,
                            children: (0, c.jsx)(L.w, { size: "4" }),
                          }),
                      ],
                    },
                    b.localized_facet,
                  ),
              }),
            ],
          });
        }
        function b2(s) {
          const { facet: D, state: q, onStateChange: u0 } = s,
            f0 = (0, x.useMemo)(() => {
              const s0 = [
                {
                  localized_facet: h1.K.Localize("#Accessories_AnyFilter"),
                  internal_facet: t2,
                  matches: 0,
                  is_artificial: !0,
                },
                {
                  localized_facet: h1.K.Localize("#Accessories_NoneFilter"),
                  internal_facet: x1,
                  matches: 0,
                  is_artificial: !0,
                },
                {
                  localized_facet: "separator",
                  internal_facet: "$sep$",
                  matches: 0,
                  is_artificial: !0,
                  is_separator: !0,
                },
              ];
              return {
                ...D,
                facets: s0.concat(
                  D.facets.map((R0) => ({
                    internal_facet: R0.localized_facet,
                    ...R0,
                  })),
                ),
              };
            }, [D]),
            F0 = (s0 = [], R0 = []) => {
              let W0 = { ...q.accessories };
              if (R0.length > 0) {
                let b = R0.some((y0) => y0.is_artificial);
                (W0[D.internal_type] = {}),
                  R0.forEach((y0) => {
                    (!b || y0.is_artificial) &&
                      (W0[D.internal_type][y0.internal_facet] = !0);
                  });
              } else delete W0[D.internal_type];
              const p0 = { ...q, accessories: W0 };
              u0(p0, !0);
            };
          return (0, c.jsx)(A2, { ...f0, value: q.accessories, onChange: F0 });
        }
        var O2 = n(99412);
        function y2(s) {
          return h.TS.EUNIVERSE === O2.Rv ? s === 710 : s === 730;
        }
        const N1 = [
            "weapon_knife_push",
            "weapon_knife_survival_bowie",
            "weapon_knife_gypsy_jackknife",
            "weapon_knife_falchion",
            "weapon_knife_tactical",
            "weapon_knife_gut",
            "weapon_knife_kukri",
            "weapon_knife_canis",
            "weapon_knife_cord",
            "weapon_knife_ursus",
            "weapon_knife_flip",
            "weapon_knife_outdoor",
            "weapon_knife_css",
            "weapon_knife_skeleton",
            "weapon_knife_stiletto",
            "weapon_knife_widowmaker",
            "weapon_knife_butterfly",
            "weapon_knife_m9_bayonet",
            "weapon_knife_karambit",
            "weapon_bayonet",
          ],
          t = [
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_Pistol" },
              img: "Pistol",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_Pistol",
                },
                { facet: "Weapon", tag: "weapon_p250" },
                { facet: "Weapon", tag: "weapon_tec9" },
                { facet: "Weapon", tag: "weapon_fiveseven" },
                { facet: "Weapon", tag: "weapon_revolver" },
                { facet: "Weapon", tag: "weapon_deagle" },
                { facet: "Weapon", tag: "weapon_glock" },
                { facet: "Weapon", tag: "weapon_usp_silencer" },
                { facet: "Weapon", tag: "weapon_elite" },
                { facet: "Weapon", tag: "weapon_hkp2000" },
                { facet: "Weapon", tag: "weapon_cz75a" },
              ],
            },
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_SMG" },
              img: "SMG",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_SMG",
                },
                { facet: "Weapon", tag: "weapon_bizon" },
                { facet: "Weapon", tag: "weapon_mac10" },
                { facet: "Weapon", tag: "weapon_mp7" },
                { facet: "Weapon", tag: "weapon_ump45" },
                { facet: "Weapon", tag: "weapon_mp9" },
                { facet: "Weapon", tag: "weapon_mp5sd" },
                { facet: "Weapon", tag: "weapon_p90" },
              ],
            },
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_Rifle" },
              img: "Rifle",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_Rifle",
                },
                { facet: "Weapon", tag: "weapon_aug" },
                { facet: "Weapon", tag: "weapon_ak47" },
                { facet: "Weapon", tag: "weapon_sg556" },
                { facet: "Weapon", tag: "weapon_m4a1_silencer" },
                { facet: "Weapon", tag: "weapon_galilar" },
                { facet: "Weapon", tag: "weapon_famas" },
                { facet: "Weapon", tag: "weapon_m4a1" },
              ],
            },
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_SniperRifle" },
              img: "Sniper",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_SniperRifle",
                },
                { facet: "Weapon", tag: "weapon_ssg08" },
                { facet: "Weapon", tag: "weapon_scar20" },
                { facet: "Weapon", tag: "weapon_g3sg1" },
                { facet: "Weapon", tag: "weapon_awp" },
              ],
            },
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_Shotgun" },
              img: "Shotgun",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_Shotgun",
                },
                { facet: "Weapon", tag: "weapon_mag7" },
                { facet: "Weapon", tag: "weapon_nova" },
                { facet: "Weapon", tag: "weapon_sawedoff" },
                { facet: "Weapon", tag: "weapon_xm1014" },
              ],
            },
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_Machinegun" },
              img: "MG",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_Machinegun",
                },
                { facet: "Weapon", tag: "weapon_negev" },
                { facet: "Weapon", tag: "weapon_m249" },
              ],
            },
            {
              type: "select",
              label: { facet: "Type", tag: "CSGO_Type_Knife" },
              img: "Knife",
              options: [
                {
                  label: "#AdvancedSearch_CustomFilter_All",
                  facet: "Type",
                  tag: "CSGO_Type_Knife",
                },
                ...N1.map((s) => ({ facet: "Weapon", tag: s })),
              ],
            },
            { type: "facet", facet: "ItemSet" },
          ],
          l = [
            { facet: "Type", tag: "CSGO_Type_WeaponCase" },
            { facet: "Type", tag: "CSGO_Tool_Sticker" },
            { facet: "Type", tag: "Type_Hands" },
          ],
          e = [
            "CSGO_Type_Machinegun",
            "CSGO_Type_Pistol",
            "CSGO_Type_Rifle",
            "CSGO_Type_SMG",
            "CSGO_Type_Shotgun",
            "CSGO_Type_SniperRifle",
          ],
          a = ["CSGO_Type_Knife", ...e],
          v = [
            {
              facet: "Exterior",
              trigger: [
                { facet: "Weapon" },
                { facet: "Type", tag: [...a, "Type_Hands"] },
                { facet: "ItemSet" },
              ],
            },
            {
              facet: "KeychainCapsule",
              trigger: { facet: "Type", tag: "CSGO_Tool_Keychain" },
            },
            {
              facet: "PatchCapsule",
              trigger: { facet: "Type", tag: "CSGO_Tool_Patch" },
            },
            {
              facet: "PatchCategory",
              trigger: { facet: "Type", tag: "CSGO_Tool_Patch" },
            },
            {
              facet: "SprayCapsule",
              trigger: { facet: "Type", tag: "CSGO_Type_Spray" },
            },
            {
              facet: "SprayCategory",
              trigger: { facet: "Type", tag: "CSGO_Type_Spray" },
            },
            {
              facet: "SprayColorCategory",
              trigger: { facet: "Type", tag: "CSGO_Type_Spray" },
            },
            {
              facet: "StickerCapsule",
              trigger: { facet: "Type", tag: "CSGO_Tool_Sticker" },
            },
            {
              facet: "StickerCategory",
              trigger: { facet: "Type", tag: "CSGO_Tool_Sticker" },
            },
            {
              facet: "TournamentTeam",
              trigger: { facet: "Type", tag: "CSGO_Tool_Sticker" },
            },
            {
              facet: "Rarity",
              trigger: [
                { facet: "Weapon" },
                {
                  facet: "Type",
                  tag: [
                    ...a,
                    "CSGO_Tool_Keychain",
                    "CSGO_Tool_Sticker",
                    "Type_CustomPlayer",
                  ],
                },
                { facet: "ItemSet" },
              ],
            },
            {
              facet: "Quality",
              trigger: [
                { facet: "Weapon" },
                { facet: "Type", tag: [...a, "CSGO_Type_MusicKit"] },
                { facet: "ItemSet" },
              ],
            },
            {
              facet: "Tournament",
              trigger: { facet: "Type", tag: "CSGO_Type_WeaponCase" },
            },
          ];
        function T() {
          return v.map(({ facet: s }) => s);
        }
        const R = {
            facet: "",
            trigger: [
              { facet: "Weapon", exclude: N1 },
              { facet: "Type", tag: e },
              { facet: "ItemSet" },
            ],
          },
          F = {
            facet: "",
            trigger: [
              { facet: "Weapon", exclude: N1 },
              { facet: "Type", tag: e },
            ],
          },
          v0 = {
            Exterior: [
              "WearCategory0",
              "WearCategory1",
              "WearCategory2",
              "WearCategory3",
              "WearCategory4",
              "WearCategoryNA",
            ],
          },
          K0 = [
            {
              items: [
                { facet: "Weapon", exclude: N1 },
                { facet: "Type", tag: e },
              ],
              rarities: [
                "Rarity_Common_Weapon",
                "Rarity_Uncommon_Weapon",
                "Rarity_Rare_Weapon",
                "Rarity_Mythical_Weapon",
                "Rarity_Legendary_Weapon",
                "Rarity_Ancient_Weapon",
                "Rarity_Contraband",
              ],
            },
            {
              items: [{ facet: "Type", tag: "CSGO_Tool_Keychain" }],
              rarities: [
                "Rarity_Rare",
                "Rarity_Mythical",
                "Rarity_Legendary",
                "Rarity_Ancient",
              ],
            },
            {
              items: [{ facet: "Type", tag: "CSGO_Tool_Sticker" }],
              rarities: [
                "Rarity_Rare",
                "Rarity_Mythical",
                "Rarity_Legendary",
                "Rarity_Ancient",
                "Rarity_Contraband",
              ],
            },
            {
              items: [{ facet: "Type", tag: "Type_CustomPlayer" }],
              rarities: [
                "Rarity_Rare_Character",
                "Rarity_Mythical_Character",
                "Rarity_Legendary_Character",
                "Rarity_Ancient_Character",
              ],
            },
            {
              items: [{ facet: "ItemSet" }],
              rarities: [
                "Rarity_Common_Weapon",
                "Rarity_Uncommon_Weapon",
                "Rarity_Rare_Weapon",
                "Rarity_Mythical_Weapon",
                "Rarity_Legendary_Weapon",
                "Rarity_Ancient_Weapon",
                "Rarity_Contraband",
                "Rarity_Common",
                "Rarity_Rare",
                "Rarity_Mythical",
                "Rarity_Legendary",
                "Rarity_Ancient",
                "Rarity_Rare_Character",
                "Rarity_Mythical_Character",
                "Rarity_Legendary_Character",
                "Rarity_Ancient_Character",
              ],
            },
          ];
        function v1(s) {
          const D = {},
            q = (p0, b) => {
              D[p0] || (D[p0] = []), D[p0].push(b);
            },
            u0 = W1(),
            f0 = [];
          for (const p0 of t)
            if (p0.type === "select") {
              const b = {
                  fieldType: "select",
                  strLabel: E2(p0.label, s),
                  rgOptions: p0.options.map(
                    ({ facet: V0, tag: Y0, label: S0 }) => (
                      q(V0, Y0),
                      {
                        facet: V0,
                        tag: Y0,
                        strLabel: E2(S0 || { facet: V0, tag: Y0 }, s),
                      }
                    ),
                  ),
                },
                y0 = new Intl.Collator();
              b.rgOptions.sort((V0, Y0) =>
                V0.facet === "Type"
                  ? -1
                  : Y0.facet === "Type"
                    ? 1
                    : y0.compare(V0.strLabel, Y0.strLabel),
              );
              const P0 = b.rgOptions.find((V0) => V0.facet === "Type"),
                n1 = P0 ? { facet: P0.facet, tag: P0.tag } : void 0;
              f0.push({ facet: b, img: u0[p0.img], toggle: n1 });
            } else {
              const b = s[p0.facet],
                y0 = (0, u.cR)(b, "select", !1);
              (0, V.wT)(
                y0.rgOptions.every((P0) => typeof P0.tag == "string"),
                `Expected CS facets to never duplicate tag labels. Filter UI will not handle properly. See "${y0.strLabel}" facet.`,
              ),
                f0.push({ facet: y0, img: "" });
              for (const P0 of Object.keys(b.tags || {})) q(b.name, P0);
            }
          const F0 = [];
          for (const p0 of l) {
            const { facet: b, tag: y0 } = p0;
            q(b, y0),
              F0.push({
                fieldType: "togglebutton",
                facet: b,
                tag: y0,
                strLabel: E2({ facet: b, tag: y0 }, s),
              });
          }
          const s0 = {
              fieldType: "select",
              rgOptions: [],
              strLabel: h1.K.Localize("#AdvancedSearch_CustomFilter_Other"),
            },
            R0 = { ...s };
          for (const [p0, b] of Object.entries(D)) {
            const y0 = s[p0];
            for (const [P0, n1] of Object.entries(y0.tags || []))
              b.includes(P0) ||
                (p0 === "Type" && P0 === "CSGO_Type_Equipment") ||
                s0.rgOptions.push({
                  strLabel: n1.localized_name,
                  facet: p0,
                  tag: P0,
                });
            delete R0[p0];
          }
          const W0 = v
            .flatMap((p0) => {
              const b = R0[p0.facet];
              if (!b) return [];
              if (b.name === "Quality") {
                const V0 = i1(p0.trigger);
                return { facet: J2(b, !0), condition: V0 };
              }
              if (b.name === "Rarity" && b.tags) {
                const V0 = [];
                for (const Y0 of K0) {
                  const S0 = i1(Y0.items),
                    _ = [];
                  for (const t1 of Y0.rarities) {
                    const H2 = b.tags[t1];
                    if (!H2) continue;
                    const s2 = (0, u.RU)(b.name, t1, H2);
                    (0, V.wT)(
                      typeof s2.tag == "string",
                      `Expected CS facets to never duplicate tag labels. Filter UI will not handle properly. See "${b.name}" facet.`,
                    ),
                      _.push(s2);
                  }
                  V0.push({
                    facet: {
                      fieldType: "select",
                      strLabel: b.localized_name,
                      rgOptions: _,
                    },
                    condition: S0,
                  });
                }
                return V0;
              }
              let y0;
              if (v0[b.name]) {
                const V0 = v0[b.name].reduce(
                  (Y0, S0, _) => ((Y0[S0] = _), Y0),
                  {},
                );
                y0 = (Y0, S0) => {
                  (0, V.wT)(
                    typeof Y0.tag == "string" && typeof S0.tag == "string",
                    `Expected CS facets to never duplicate tag labels. Filter UI will not handle properly. See "${b.name}" facet.`,
                  );
                  const _ = V0[Y0.tag],
                    t1 = V0[S0.tag];
                  return _ === void 0 && t1 === void 0
                    ? new Intl.Collator().compare(Y0.strLabel, S0.strLabel)
                    : _ === void 0
                      ? 1
                      : t1 === void 0
                        ? -1
                        : _ - t1;
                };
              }
              const P0 = (0, u.cR)(b, "select", !1, y0);
              return P0 ? { facet: P0, condition: i1(p0.trigger) } : null;
            })
            .filter((p0) => !!p0);
          return {
            rgGroups: f0,
            rgToggles: F0,
            rgConditional: W0,
            otherFacet: s0,
            rgFacetsWithCustomDisplay: Object.keys(D),
          };
        }
        function i1(s) {
          const D = Array.isArray(s) ? s : [s];
          return (q) => D.some((u0) => T2(u0, q));
        }
        function T2(s, D) {
          const q = D.facets[s.facet];
          return q ? F2(s, q) : !1;
        }
        function Z2(s) {
          const D = Array.isArray(s) ? s : [s];
          return (q) => D.some((u0) => B2(u0, q));
        }
        function B2(s, D) {
          const q = useMemo(() => {
            const u0 = {};
            return (
              D == null ||
                D.forEach((f0) => {
                  s.facet === f0.category &&
                    f0.internal_name &&
                    (u0[f0.internal_name] = !0);
                }),
              u0
            );
          }, [D, s]);
          return Object.keys(q).length === 0 ? !1 : F2(s, q);
        }
        function F2(s, D) {
          for (const [q, u0] of Object.entries(D))
            if (u0) {
              if ("exclude" in s)
                return !(
                  (!(typeof s.exclude != "string") && s.exclude === q) ||
                  s.exclude.includes(q)
                );
              {
                if (!s.tag) return !0;
                const f0 = typeof s.tag != "string";
                if ((!f0 && s.tag === q) || (f0 && s.tag.includes(q)))
                  return !0;
              }
            }
          return !1;
        }
        function E2(s, D) {
          if (typeof s == "string") return h1.K.Localize(s);
          const q = D[s.facet];
          return !q || !q.tags || !q.tags[s.tag]
            ? (console.error("Could not find tag for label!", s), s.tag)
            : q.tags[s.tag].localized_name;
        }
        function N2(s) {
          const {
              facets: D,
              accessories: q,
              minWidth: u0,
              mini: f0,
              ...F0
            } = s,
            { state: s0, onStateChange: R0 } = F0,
            {
              rgGroups: W0,
              rgToggles: p0,
              rgConditional: b,
              otherFacet: y0,
              rgFacetsWithCustomDisplay: P0,
            } = (0, x.useMemo)(() => v1(s.facets), [s.facets]),
            [n1, V0] = (0, x.useState)(() =>
              b.filter((T0) => T0.condition(s0)),
            ),
            Y0 = (0, x.useMemo)(() => i1(R.trigger), []);
          (0, x.useEffect)(() => {
            let T0 = null;
            const a1 = b.filter((x0) => x0.condition(s0)),
              l1 = new Map(),
              b1 = [];
            for (const x0 of a1) {
              const O1 = x0.facet;
              l1.has(O1) || b1.push(x0), l1.set(O1, !0);
            }
            const I2 = () =>
              [
                ...W0.map((x0) => x0.facet),
                ...p0,
                y0,
                ...b1.map((x0) => x0.facet),
              ].reduce((x0, O1) => {
                const R2 = K2(O1);
                for (const [j2, k2] of R2)
                  x0[j2] || (x0[j2] = {}), (x0[j2][k2] = !0);
                return x0;
              }, {});
            let G1 = null;
            for (const x0 of Object.keys(s0.facets))
              for (const O1 of Object.keys(s0.facets[x0]))
                G1 || (G1 = I2()),
                  (!G1[x0] || !G1[x0][O1]) &&
                    (T0 || (T0 = { ...s0, facets: { ...s0.facets } }),
                    (T0 = (0, u.d5)(T0, x0, O1, !1)));
            V0(b1), T0 && R0(T0, !0);
          }, [b, s0, R0, W0, p0, y0]);
          const S0 = (T0 = [], a1 = []) => {
              const l1 = { ...s0, facets: { ...s0.facets } };
              let b1 = !0;
              const I2 = Object.keys(s0.facets.Type || {}),
                G1 = a1.filter(({ facet: x0 }) => x0 === "Type");
              if (
                ((T0.length > 0 && a1.length === 0) ||
                a1.some(({ facet: x0 }) => x0 === "ItemSet")
                  ? (b1 = !1)
                  : I2.length > 0 &&
                    G1.length > 0 &&
                    (b1 =
                      I2.some((x0) => !a.includes(x0)) ||
                      G1.some(({ tag: x0 }) => !a.includes(x0))),
                b1)
              )
                P0.forEach((x0) => delete l1.facets[x0]);
              else
                for (const x0 of T0)
                  !a1.find(
                    ({ facet: R2, tag: j2 }) =>
                      x0.facet === R2 && x0.tag === j2,
                  ) &&
                    l1.facets[x0.facet] &&
                    l1.facets[x0.facet][x0.tag] &&
                    delete l1.facets[x0.facet][x0.tag];
              for (const x0 of a1)
                l1.facets[x0.facet] || (l1.facets[x0.facet] = {}),
                  (l1.facets[x0.facet] = {
                    ...l1.facets[x0.facet],
                    [x0.tag]: !0,
                  });
              R0(l1, !0);
            },
            _ = (T0, a1) => S0(T0, a1),
            t1 = (T0, a1, l1) =>
              S0(
                l1 ? void 0 : [{ facet: T0, tag: a1 }],
                l1 ? [{ facet: T0, tag: a1 }] : void 0,
              ),
            s2 = [
              ...Object.values(s0.facets.Type || {}),
              ...Object.values(s0.facets.Weapon || {}),
              ...Object.values(s0.facets.ItemSet || {}),
            ].some((T0) => T0);
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(u.lA, {
                minWidth: u0,
                children: W0.map(({ facet: T0, img: a1, toggle: l1 }) =>
                  (0, c.jsx)(
                    U2,
                    {
                      ...T0,
                      onChange: _,
                      value: s0.facets,
                      img: a1,
                      toggle: l1,
                      hasTypeSelected: s2,
                      mini: f0,
                    },
                    T0.strLabel,
                  ),
                ),
              }),
              (0, c.jsxs)(K.x, {
                gap: "2",
                marginTop: "2",
                columns: f0
                  ? "1fr 1fr"
                  : { initial: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
                children: [
                  p0.map((T0) =>
                    (0, c.jsx)(
                      G2,
                      {
                        active:
                          s0.facets[T0.facet] && s0.facets[T0.facet][T0.tag],
                        onActiveChange: (a1) => t1(T0.facet, T0.tag, a1),
                        muted:
                          s2 &&
                          !(s0.facets[T0.facet] && s0.facets[T0.facet][T0.tag]),
                        title:
                          T0.tag === "CSGO_Type_WeaponCase"
                            ? h1.K.Localize(
                                "#AdvancedSearch_CSContainers_Tooltip",
                              )
                            : void 0,
                        mini: f0,
                        children: T0.strLabel,
                      },
                      T0.strLabel,
                    ),
                  ),
                  (0, c.jsx)(Y2, {
                    ...y0,
                    onChange: _,
                    value: s0.facets,
                    hasTypeSelected: s2,
                    mini: f0,
                  }),
                ],
              }),
              (0, c.jsx)(L.w, { size: "4", color: "dull-9", marginTop: "4" }),
              (0, c.jsxs)(u.lA, {
                minHeight: "88px",
                minWidth: u0,
                children: [
                  (0, c.jsx)(I0.$, { ...F0 }),
                  (0, c.jsxs)(c0.s, {
                    gap: "2",
                    direction: "column",
                    children: [
                      n1.map((T0) =>
                        (0, c.jsx)(
                          u.SW,
                          { facet: T0.facet, ...F0 },
                          T0.facet.strLabel,
                        ),
                      ),
                      Y0(s0) &&
                        q.map((T0) =>
                          (0, c.jsx)(
                            b2,
                            { facet: T0, ...F0 },
                            T0.internal_type,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function G2(s) {
          const {
              active: D,
              muted: q,
              onActiveChange: u0,
              children: f0,
              title: F0,
              mini: s0,
            } = s,
            R0 = (0, W.q)({ bActive: D, onActiveChange: u0, title: F0 });
          return (0, c.jsx)(c0.s, {
            flexGrow: "1",
            background: "dull-8 50%",
            radius: "sm",
            paddingY: s0 ? "2" : "5",
            justify: "center",
            ...R0,
            "data-active": !!D,
            "data-muted": !!q,
            className: o.ToggleButton,
            children: (0, c.jsx)(f.EY, {
              weight: "medium",
              color: D ? "accent-8" : void 0,
              contrast: "title",
              children: f0,
            }),
          });
        }
        const z2 = x.forwardRef(function (D, q) {
          const {
              img: u0,
              active: f0,
              children: F0,
              muted: s0,
              onToggle: R0,
              onClear: W0,
              mini: p0,
              ...b
            } = D,
            y0 = R0
              ? (V0) => {
                  V0.stopPropagation(), V0.preventDefault(), R0();
                }
              : void 0;
          let P0 = (0, c.jsxs)(c0.s, {
            background: "dull-8 50%",
            flexGrow: "1",
            align: "center",
            paddingX: "3",
            paddingY: "2",
            gap: "2",
            className: o.NoToggleTrigger,
            overflow: "hidden",
            children: [
              (0, c.jsx)(p.az, { flexGrow: "1", minWidth: "0", children: F0 }),
              f0 && W0
                ? (0, c.jsx)(c0.s, {
                    align: "center",
                    justify: "center",
                    children: (0, c.jsx)(g.g, { onClick: W0 }),
                  })
                : (0, c.jsx)(y.V, {}),
            ],
          });
          const n1 = p0 ? "50px" : "70px";
          return (
            y0 &&
              (P0 = (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsxs)(c0.s, {
                    align: "center",
                    background: "dull-8 50%",
                    gap: "2",
                    paddingY: p0 ? "0" : "1",
                    paddingX: "3",
                    flexGrow: "1",
                    className: o.TriggerToggle,
                    onClick: y0,
                    position: "relative",
                    "data-active": !!f0,
                    "data-muted": !!s0,
                    overflow: "hidden",
                    minWidth: "0",
                    children: [
                      (0, c.jsx)(p.az, {
                        overflow: "hidden",
                        position: "absolute",
                        inset: "0",
                        children:
                          u0 &&
                          (0, c.jsx)("div", {
                            className: o.ImgBlur,
                            style: {
                              backgroundImage: `url("${u0}")`,
                              pointerEvents: "none",
                            },
                          }),
                      }),
                      u0 &&
                        (0, c.jsx)(G._, {
                          src: u0,
                          width: n1,
                          height: n1,
                          objectFit: "contain",
                          zIndex: "1",
                          alt: "",
                        }),
                      (0, c.jsx)(p.az, {
                        flexGrow: "1",
                        zIndex: "1",
                        overflow: "hidden",
                        children: F0,
                      }),
                    ],
                  }),
                  (0, c.jsx)(c0.s, {
                    background: "dull-8 50%",
                    align: "center",
                    justify: "center",
                    padding: "5",
                    "data-active": !!f0,
                    "data-muted": !!s0,
                    className: o.TriggerSelect,
                    children: (0, c.jsx)(y.V, {}),
                  }),
                ],
              })),
            (0, c.jsx)(c0.s, {
              ...b,
              gap: "1",
              flexGrow: "1",
              ref: q,
              radius: "md",
              className: o.Trigger,
              position: "relative",
              "data-active": !!f0,
              "data-muted": !!s0,
              children: P0,
            })
          );
        });
        function U2(s) {
          const { toggle: D, onChange: q, ...u0 } = s,
            f0 = (F0, s0) => {
              if (s0 && D && s0.length > 1) {
                const R0 = s0.findIndex(
                  (W0) => W0.facet === D.facet && W0.tag === D.tag,
                );
                if (R0 > -1)
                  if (
                    !F0 ||
                    !F0.some((p0) => p0.facet === D.facet && p0.tag === D.tag)
                  ) {
                    q(F0, [D]);
                    return;
                  } else {
                    q(F0, s0.slice(0, R0).concat(s0.slice(R0 + 1)));
                    return;
                  }
              }
              q(F0, s0);
            };
          return s.rgOptions.length > 15
            ? (0, c.jsx)($2, { toggle: D, onChange: f0, ...u0 })
            : (0, c.jsx)(W2, { toggle: D, onChange: f0, ...u0 });
        }
        function W2(s) {
          const {
              rgOptions: D,
              strLabel: q,
              value: u0 = {},
              onChange: f0,
              img: F0,
              toggle: s0,
              hasTypeSelected: R0,
              mini: W0,
            } = s,
            p0 = (_) => (_ ? `${_.facet}_${_.tag}` : "clear"),
            b = (0, x.useMemo)(
              () => D.filter((_) => u0[_.facet] && u0[_.facet][_.tag]),
              [D, u0],
            );
          let y0 = F0;
          const P0 = b[0];
          if (P0 != null && P0.tag && P0.tag.startsWith("weapon_")) {
            const _ = P0.tag.slice(7),
              t1 = z1();
            _ in t1 && (y0 = t1[_]);
          }
          const n1 = (0, J.DL)({
              rgOptions: D,
              selectedValue: b,
              onSelectionChange: (_) => f0(b, _),
            }),
            V0 = b.length > 0,
            Y0 = s0 ? () => f0(b, V0 ? [] : [s0]) : void 0;
          let S0 = "";
          if (V0) {
            const _ = b.map((t1) => t1.strLabel);
            "ListFormat" in Intl
              ? (S0 = new Intl.ListFormat((0, F1.ZO)().strISOCode).format(_))
              : (S0 = _.join(", "));
          }
          return (0, c.jsxs)(J.uh.Root, {
            state: n1,
            status: V0 ? "highlight" : void 0,
            radius: "sm",
            clearable: !0,
            children: [
              (0, c.jsxs)(J.uh.Trigger, {
                render: (0, c.jsx)(z2, {
                  img: y0,
                  active: V0,
                  muted: R0 && !V0,
                  onToggle: Y0,
                  onClear: n1.onClear,
                  mini: W0,
                }),
                children: [
                  !V0 && (0, c.jsx)(J.uh.Value, { children: q }),
                  V0 &&
                    (0, c.jsxs)(c0.s, {
                      align: "center",
                      gap: "2",
                      children: [
                        (0, c.jsxs)(J.uh.Value, {
                          children: [
                            q,
                            ": ",
                            (0, c.jsx)(f.EY, {
                              color: "accent-8",
                              children: S0,
                            }),
                          ],
                        }),
                        Y0 &&
                          (0, c.jsx)(c0.s, {
                            align: "center",
                            justify: "center",
                            children: (0, c.jsx)(g.g, {}),
                          }),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(J.uh.Options, {
                children: D.map((_) =>
                  (0, c.jsx)(
                    J.uh.Option,
                    {
                      value: _,
                      children: _
                        ? (0, c.jsx)(D2, { label: _.strLabel, icon: P2(_) })
                        : (0, c.jsx)(w2, {}),
                    },
                    p0(_),
                  ),
                ),
              }),
            ],
          });
        }
        function Y2(s) {
          const {
              rgOptions: D,
              strLabel: q,
              value: u0 = {},
              onChange: f0,
              img: F0,
              toggle: s0,
              hasTypeSelected: R0,
              mini: W0,
            } = s,
            p0 = (S0) => (S0 ? `${S0.facet}_${S0.tag}` : "clear"),
            b = (0, x.useMemo)(() => {
              const S0 = D.find((_) => u0[_.facet] && u0[_.facet][_.tag]);
              if (S0) return S0;
            }, [D, u0]);
          let y0 = F0;
          const P0 = b ? [void 0, ...D] : D;
          if (b != null && b.tag && b.tag.startsWith("weapon_")) {
            const S0 = b.tag.slice(7),
              _ = z1();
            S0 in _ && (y0 = _[S0]);
          }
          const n1 = (0, J.WM)({
              rgOptions: P0,
              selectedValue: b,
              onSelectionChange: (S0) => f0(b ? [b] : [], S0 ? [S0] : []),
            }),
            V0 = s0
              ? () => {
                  f0(b ? [b] : [], b ? [] : [s0]);
                }
              : void 0,
            Y0 = () => n1.onSelectionChange(void 0);
          return (0, c.jsxs)(J.l6.Root, {
            state: n1,
            status: b ? "highlight" : void 0,
            radius: "sm",
            clearable: !0,
            children: [
              (0, c.jsxs)(J.l6.Trigger, {
                render: (0, c.jsx)(z2, {
                  img: y0,
                  active: !!b,
                  muted: R0 && !b,
                  onToggle: V0,
                  onClear: Y0,
                  mini: W0,
                }),
                children: [
                  !b && (0, c.jsx)(J.l6.Value, { children: q }),
                  !!b &&
                    (0, c.jsxs)(J.l6.Value, {
                      children: [
                        q,
                        ": ",
                        (0, c.jsx)(f.EY, {
                          color: "accent-8",
                          children: (0, c.jsxs)(c0.s, {
                            inline: !0,
                            align: "center",
                            gap: "2",
                            children: [b.strLabel, V0 && (0, c.jsx)(g.g, {})],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(J.l6.Options, {
                children: P0.map((S0) =>
                  (0, c.jsx)(
                    J.l6.Option,
                    {
                      value: S0,
                      children: S0
                        ? (0, c.jsx)(D2, { label: S0.strLabel, icon: P2(S0) })
                        : (0, c.jsx)(w2, {}),
                    },
                    p0(S0),
                  ),
                ),
              }),
            ],
          });
        }
        function P2(s) {
          if (!s.tag || !s.tag.startsWith("weapon_")) return;
          const D = s.tag.slice(7);
          if (D in A1) return A1[D];
        }
        function w2() {
          return (0, c.jsxs)(c0.s, {
            align: "center",
            gap: "1",
            children: [
              (0, c.jsx)(g.g, {}),
              h1.K.Localize("#AdvancedSearch_AppSelect_Clear"),
            ],
          });
        }
        function D2(s) {
          const { label: D, icon: q } = s;
          return (0, c.jsxs)(c0.s, {
            align: "center",
            gap: "2",
            justify: "between",
            children: [D, q && (0, c.jsx)(q, { height: "14px" })],
          });
        }
        function $2(s) {
          const {
              rgOptions: D,
              strLabel: q,
              value: u0 = {},
              onChange: f0,
              img: F0,
              toggle: s0,
              hasTypeSelected: R0,
              mini: W0,
            } = s,
            p0 = (_) => (_ ? `${_.facet}_${_.tag}` : "clear"),
            b = (0, x.useMemo)(
              () => D.filter((_) => u0[_.facet] && u0[_.facet][_.tag]),
              [D, u0],
            );
          let y0 = F0;
          const P0 = b[0];
          if (P0 != null && P0.tag && P0.tag.startsWith("weapon_")) {
            const _ = P0.tag.slice(7),
              t1 = z1();
            _ in t1 && (y0 = t1[_]);
          }
          const n1 = (0, l0.EC)({
              rgOptions: D,
              selectedValue: b,
              onSelectionChange: (_) => f0(b, _),
              filterPlaceholder: "Filter...",
            }),
            V0 = b.length > 0,
            Y0 = s0 ? () => f0(b, V0 ? [] : [s0]) : void 0;
          let S0 = "";
          if (V0) {
            const _ = b.map((t1) => t1.strLabel);
            "ListFormat" in Intl
              ? (S0 = new Intl.ListFormat((0, F1.ZO)().strISOCode).format(_))
              : (S0 = _.join(", "));
          }
          return (0, c.jsxs)(l0.PT.Root, {
            state: n1,
            status: V0 ? "highlight" : void 0,
            radius: "sm",
            clearable: !0,
            children: [
              (0, c.jsxs)(l0.PT.Trigger, {
                render: (0, c.jsx)(z2, {
                  img: y0,
                  active: V0,
                  muted: R0 && !V0,
                  onToggle: Y0,
                  onClear: n1.onClear,
                  mini: W0,
                }),
                children: [
                  !V0 && (0, c.jsx)(l0.PT.Value, { children: q }),
                  V0 &&
                    (0, c.jsxs)(c0.s, {
                      align: "center",
                      gap: "2",
                      children: [
                        (0, c.jsxs)(J.uh.Value, {
                          children: [
                            q,
                            ": ",
                            (0, c.jsx)(f.EY, {
                              color: "accent-8",
                              children: S0,
                            }),
                          ],
                        }),
                        Y0 &&
                          (0, c.jsx)(c0.s, {
                            align: "center",
                            justify: "center",
                            children: (0, c.jsx)(g.g, {}),
                          }),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(l0.PT.Options, {
                children: n1.rgFilteredOptions.map((_) =>
                  (0, c.jsx)(
                    l0.PT.Option,
                    {
                      value: _,
                      children: _
                        ? (0, c.jsx)(D2, { label: _.strLabel, icon: P2(_) })
                        : (0, c.jsx)(w2, {}),
                    },
                    p0(_),
                  ),
                ),
              }),
            ],
          });
        }
        function K2(s) {
          switch (s.fieldType) {
            case "checkbox":
            case "select":
              return s.rgOptions.map(
                ({ facet: D, tag: q }) => (
                  (0, V.wT)(
                    typeof q == "string",
                    `Expected CS facets to never duplicate tag labels. Filter UI will not handle properly. See "${s.strLabel}" facet.`,
                  ),
                  [D, q]
                ),
              );
            case "toggle":
            case "togglebutton":
              return [[s.facet, s.tag]];
            case "togglegroup":
            case "togglegrid":
              return s.rgToggles.map(({ facet: D, tag: q }) => [D, q]);
            default:
              return (0, V.z_)(s, "Unhandled facet type"), [];
          }
        }
        function J2(s, D = !1) {
          const q = s.tags && s.tags.strange,
            u0 = s.tags && s.tags.tournament,
            f0 = s.tags && s.tags.normal;
          return (
            (0, V.wT)(q && u0 && f0, "Could not find expected toggle tags"),
            {
              strLabel: s.localized_name,
              fieldType: "togglegrid",
              rgToggles: [
                { facet: s.name, tag: "normal", strLabel: f0.localized_name },
                { facet: s.name, tag: "strange", strLabel: q.localized_name },
                {
                  facet: s.name,
                  tag: "tournament",
                  strLabel: u0.localized_name,
                  condition: D
                    ? i1([
                        { facet: "Type", tag: e },
                        { facet: "Weapon", exclude: N1 },
                        { facet: "ItemSet" },
                      ])
                    : void 0,
                },
              ],
            }
          );
        }
      },
      15353: (r0, t0, n) => {
        "use strict";
        n.d(t0, {
          d5: () => r1,
          SW: () => S1,
          UZ: () => Z0,
          lA: () => V1,
          cR: () => C0,
          RU: () => M1,
        });
        var c = n(7850),
          o = n(90626),
          x = n(58952),
          V = n(15252),
          u = n(74769),
          K = n(68031),
          L = n(60351),
          c0 = n(85367);
        function W(w) {
          const {
              selected: j,
              onSelectedChange: Y = () => {},
              onItemChange: $ = () => {},
              disabled: i0,
              direction: m0 = "column",
              ...o0
            } = w,
            j0 = (G0, U0) => {
              if (($(G0, U0), U0)) Y(j.concat(G0));
              else {
                const e1 = j.indexOf(G0);
                Y(j.slice(0, e1).concat(j.slice(e1 + 1)));
              }
            },
            X = {
              selected: j.reduce((G0, U0) => ({ ...G0, [U0]: !0 }), {}),
              onChange: j0,
              disabled: i0,
            },
            O = m0 === "row";
          return (0, c.jsx)(p.Provider, {
            value: X,
            children: (0, c.jsx)(K.s, {
              direction: m0,
              wrap: O ? "wrap" : void 0,
              gap: m0 === "column" ? "1" : "4",
              role: "group",
              ...o0,
            }),
          });
        }
        function f(w) {
          const { value: j, children: Y } = w,
            $ = (0, o.useContext)(p);
          if (!$)
            return (
              console.error(
                "<CheckboxGroup.Item> must be used within a <CheckboxGroup>",
              ),
              null
            );
          const { selected: i0, onChange: m0, disabled: o0 } = $;
          return (0, c.jsx)(c0.S, {
            checked: !!i0[j],
            disabled: o0,
            onChange: (j0) => m0(j, j0),
            children: !!Y && (0, c.jsx)(V.EY, { children: Y }),
          });
        }
        const p = (0, o.createContext)(null),
          g = Object.assign(W, { Item: f });
        var y = n(69289),
          G = n(8928),
          J = n(60394);
        function l0(w) {
          return (0, c.jsxs)(B.Root, {
            ...w,
            children: [(0, c.jsx)(B.Track, {}), (0, c.jsx)(B.Handle, {})],
          });
        }
        function I0(w) {
          const {
              value: j,
              onChange: Y,
              size: $ = "2",
              color: i0,
              ref: m0,
            } = w,
            o0 = (j0) => {
              (j0.key === " " || j0.key === "Enter") &&
                (Y(!j), j0.preventDefault(), j0.stopPropagation());
            };
          return (0, c.jsx)(L.az, {
            ref: m0,
            role: "switch",
            "aria-checked": !!j,
            onClick: () => Y(!j),
            onKeyDown: o0,
            tabIndex: 0,
            "data-accent-color": i0,
            ...(0, y.mz)({ size: $, className: J.Root }, A),
            children: w.children,
          });
        }
        function h(w) {
          return (0, c.jsx)("div", { className: J.Track, ...w });
        }
        function Q(w) {
          return (0, c.jsx)("div", { className: J.Handle, ...w });
        }
        const B = Object.assign(l0, { Root: I0, Track: h, Handle: Q }),
          A = [
            ...G.L,
            { prop: "size", className: (w) => J[`Size-${w}`], responsive: !0 },
          ];
        var P = n(93340),
          S = n(63029),
          m = n(95994),
          N = n(75083),
          z = n(71742),
          U = n(51278),
          h0 = n(93338),
          H = n(44688);
        const L0 = 10;
        function z0(w) {
          return w.rgOptions.length >= L0
            ? (0, c.jsx)(H0, { ...w })
            : (0, c.jsx)(w0, { ...w });
        }
        function M0(w, j) {
          return j[w.facet]
            ? typeof w.tag == "string"
              ? j[w.facet][w.tag]
              : w.tag.every((Y) => j[w.facet][Y])
            : !1;
        }
        function w0(w) {
          const { rgOptions: j, strLabel: Y, value: $ = {}, onChange: i0 } = w,
            m0 = (O) => `${O.facet}_${O.tag}`,
            o0 = (0, o.useMemo)(() => j.filter((O) => M0(O, $)), [j, $]),
            j0 = (0, x.DL)({
              rgOptions: j,
              selectedValue: o0,
              onSelectionChange: (O) => i0(o0, O),
            }),
            X = o0.length > 0;
          return (0, c.jsxs)(x.uh.Root, {
            state: j0,
            status: X ? "highlight" : void 0,
            radius: "sm",
            clearable: !0,
            children: [
              (0, c.jsxs)(x.uh.Trigger, {
                children: [
                  !X && (0, c.jsx)(x.uh.Value, { children: Y }),
                  X &&
                    (0, c.jsxs)(x.uh.Value, {
                      children: [
                        Y,
                        ": ",
                        (0, c.jsx)(V.EY, {
                          color: "accent-8",
                          children: O0(o0),
                        }),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(x.uh.Options, {
                children: j.map((O) =>
                  (0, c.jsx)(
                    x.uh.Option,
                    {
                      value: O,
                      disabled: !X && O.matches === 0,
                      children: (0, c.jsx)(D0, {
                        color: O.color,
                        matches: O.matches,
                        children: O.strLabel,
                      }),
                    },
                    m0(O),
                  ),
                ),
              }),
            ],
          });
        }
        function H0(w) {
          const { rgOptions: j, strLabel: Y, value: $ = {}, onChange: i0 } = w,
            m0 = (O) => `${O.facet}_${O.tag}`,
            o0 = (0, o.useMemo)(() => j.filter((O) => M0(O, $)), [j, $]),
            j0 = (0, u.EC)({
              rgOptions: j,
              selectedValue: o0,
              onSelectionChange: (O) => i0(o0, O),
              filterPlaceholder: h0.K.Localize(
                "#AdvancedSearch_FilterGeneric_Placeholder",
              ),
            }),
            X = o0.length > 0;
          return (0, c.jsxs)(u.PT.Root, {
            state: j0,
            status: X ? "highlight" : void 0,
            radius: "sm",
            clearable: !0,
            children: [
              (0, c.jsxs)(u.PT.Trigger, {
                children: [
                  !X && (0, c.jsx)(u.PT.Value, { children: Y }),
                  X &&
                    (0, c.jsxs)(u.PT.Value, {
                      children: [
                        Y,
                        ": ",
                        (0, c.jsx)(V.EY, {
                          color: "accent-8",
                          children: O0(o0),
                        }),
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(u.PT.Options, {
                children: j0.rgFilteredOptions.map((O) =>
                  (0, c.jsx)(
                    u.PT.Option,
                    {
                      value: O,
                      disabled: !X && O.matches === 0,
                      children: (0, c.jsx)(D0, {
                        color: O.color,
                        matches: O.matches,
                        children: O.strLabel,
                      }),
                    },
                    m0(O),
                  ),
                ),
              }),
            ],
          });
        }
        function D0(w) {
          const { color: j, matches: Y, children: $ } = w;
          return (0, c.jsxs)(K.s, {
            gap: "2",
            align: "center",
            children: [
              j && (0, c.jsx)(d0, { color: j }),
              (0, c.jsxs)(V.EY, {
                children: [
                  $,
                  " ",
                  Y !== void 0 && Y >= 1
                    ? (0, c.jsxs)(V.EY, {
                        contrast: "description",
                        children: ["(", Intl.NumberFormat().format(Y), ")"],
                      })
                    : void 0,
                ],
              }),
            ],
          });
        }
        function O0(w) {
          return w.map((j) => j.strLabel).join(", ");
        }
        function d0(w) {
          const { color: j } = w;
          return (0, c.jsx)(L.az, {
            width: "6px",
            height: "6px",
            radius: "full",
            style: { backgroundColor: j },
          });
        }
        function X0(w) {
          const { rgOptions: j, strLabel: Y, value: $ = {}, onChange: i0 } = w,
            m0 = (X) => `${X.facet}_${X.tag}`,
            o0 = j.filter((X) => M0(X, $)).map(m0),
            j0 = (X, O) => {
              const G0 = j.find((U0) => m0(U0) === X);
              G0 && i0(G0.facet, G0.tag, O);
            };
          return (0, c.jsxs)(L.az, {
            marginBottom: "4",
            children: [
              (0, c.jsx)(V.EY, {
                weight: "medium",
                contrast: "title",
                children: Y,
              }),
              (0, c.jsx)(g, {
                marginTop: "2",
                selected: o0,
                onItemChange: j0,
                direction: "row",
                children: j.map((X) =>
                  (0, c.jsx)(
                    J0,
                    { value: m0(X), checked: M0(X, $), children: X.strLabel },
                    m0(X),
                  ),
                ),
              }),
            ],
          });
        }
        function J0(w) {
          const { value: j, checked: Y, children: $ } = w;
          return (0, c.jsx)(g.Item, {
            value: j,
            children: (0, c.jsx)(V.EY, {
              color: Y ? "accent-11" : void 0,
              contrast: Y ? void 0 : "title",
              children: $,
            }),
          });
        }
        function N0(w) {
          const { label: j, active: Y, onActiveChange: $ } = w;
          return (0, c.jsxs)(K.s, {
            gap: "4",
            align: "center",
            paddingX: "2",
            paddingY: "2",
            children: [
              (0, c.jsx)(V.EY, { weight: "medium", children: j }),
              (0, c.jsx)(B, { value: Y, onChange: $ }),
            ],
          });
        }
        function Z0(w) {
          const { label: j, icon: Y, active: $, onActiveChange: i0 } = w,
            m0 = (0, P.q)({ bActive: $, onActiveChange: i0 });
          return (0, c.jsxs)(K.s, {
            gap: "2",
            radius: "sm",
            paddingX: "5",
            paddingY: "4",
            align: "center",
            className: H.TagButton,
            ...m0,
            children: [
              Y && (0, c.jsx)(Y, { className: H.Icon }),
              (0, c.jsx)(L.az, {
                flexGrow: "1",
                children: (0, c.jsx)(V.EY, {
                  weight: "medium",
                  contrast: "title",
                  children: j,
                }),
              }),
              $ && (0, c.jsx)(S.g, {}),
            ],
          });
        }
        function s1(w) {
          const {
              rgToggles: j,
              onChange: Y,
              state: $,
              computeNext: i0 = (o0, j0) => j0,
            } = w,
            m0 = (o0, j0, X) => {
              const O = r1($, o0, j0, X);
              Y({ ...$, facets: i0($.facets, O.facets) }, !0);
            };
          return (0, c.jsx)(K.s, {
            gap: "4",
            align: "center",
            children: j
              .filter((o0) => !o0.condition || o0.condition($))
              .map((o0) =>
                (0, c.jsx)(
                  N0,
                  {
                    active: $.facets[o0.facet] && $.facets[o0.facet][o0.tag],
                    onActiveChange: (j0) => m0(o0.facet, o0.tag, j0),
                    label: o0.strLabel,
                  },
                  `${o0.facet}_${o0.tag}`,
                ),
              ),
          });
        }
        function q0(w) {
          const {
              rgToggles: j,
              onChange: Y,
              state: $,
              computeNext: i0 = (X, O) => O,
            } = w,
            m0 = (X, O, G0) => {
              const U0 = r1($, X, O, G0);
              Y({ ...$, facets: i0($.facets, U0.facets) }, !0);
            },
            o0 = j.every(
              ({ facet: X, tag: O }) => !$.facets[X] || !$.facets[X][O],
            ),
            j0 = () => {
              let X = { ...$, facets: { ...$.facets } };
              for (const O of j) X = r1(X, O.facet, O.tag, !1);
              Y({ ...$, facets: i0($.facets, X.facets) }, !0);
            };
          return (0, c.jsxs)(m.x, {
            columns: "1fr 1fr",
            gap: "1",
            padding: "1",
            background: "dull-6",
            children: [
              (0, c.jsx)(N.$, {
                color: o0 ? "accent" : "dull",
                onClick: j0,
                children: "All",
              }),
              j
                .filter((X) => !X.condition || X.condition($))
                .map((X) =>
                  (0, c.jsx)(
                    o1,
                    {
                      active: $.facets[X.facet] && $.facets[X.facet][X.tag],
                      onActiveChange: (O) => m0(X.facet, X.tag, O),
                      label: X.strLabel,
                    },
                    `${X.facet}_${X.tag}`,
                  ),
                ),
            ],
          });
        }
        function o1(w) {
          const { label: j, active: Y, onActiveChange: $ } = w;
          return (0, c.jsx)(N.$, {
            color: Y ? "accent" : "dull",
            onClick: () => $(!Y),
            children: j,
          });
        }
        function V1(w) {
          return (0, c.jsx)(m.x, {
            gapY: "2",
            gapX: "2",
            marginTop: "4",
            columns: {
              initial: "1fr",
              sm: `repeat( auto-fit, minmax( ${w.minWidth || "300px"}, 1fr ) )`,
            },
            ...w,
          });
        }
        function r1(w, j, Y, $) {
          const i0 = { ...w, facets: { ...w.facets, [j]: { ...w.facets[j] } } },
            m0 = typeof Y == "string" ? [Y] : Y;
          for (const o0 of m0) i0.facets[j][o0] = !0;
          if (!$)
            if (Object.keys(i0.facets[j]).length === 1) delete i0.facets[j];
            else for (const o0 of m0) delete i0.facets[j][o0];
          return i0;
        }
        function S1(w) {
          const { facet: j, state: Y, onStateChange: $ } = w;
          switch (j.fieldType) {
            case "checkbox": {
              const i0 = (m0, o0, j0) => $(r1(Y, m0, o0, j0), !0);
              return (0, c.jsx)(X0, { ...j, value: Y.facets, onChange: i0 });
            }
            case "select": {
              const i0 = (m0 = [], o0 = []) => {
                const j0 = {};
                let X = { ...Y, facets: { ...Y.facets } };
                for (const O of m0) {
                  const G0 = typeof O.tag == "string" ? [O.tag] : O.tag;
                  for (const U0 of G0)
                    j0[`${O.facet}_${U0}`] = { facet: O.facet, tag: U0 };
                }
                for (const O of o0)
                  j0[`${O.facet}_${O.tag}`] || (X = r1(X, O.facet, O.tag, !0)),
                    delete j0[`${O.facet}_${O.tag}`];
                for (const O of Object.values(j0))
                  X = r1(X, O.facet, O.tag, !1);
                $(X, !0);
              };
              return (0, c.jsx)(z0, { ...j, value: Y.facets, onChange: i0 });
            }
            case "toggle":
            case "togglebutton": {
              const i0 = (o0) => $(r1(Y, j.facet, j.tag, o0), !0),
                m0 = Y.facets[j.facet] && Y.facets[j.facet][j.tag];
              return j.fieldType === "toggle"
                ? (0, c.jsx)(N0, {
                    active: m0,
                    onActiveChange: i0,
                    label: j.strLabel,
                  })
                : (0, c.jsx)(Z0, {
                    active: m0,
                    onActiveChange: i0,
                    label: j.strLabel,
                  });
            }
            case "togglegroup":
              return (0, c.jsx)(s1, { ...j, onChange: $, state: Y });
            case "togglegrid":
              return (0, c.jsx)(q0, { ...j, onChange: $, state: Y });
            default:
              return (
                (0, z.z_)(j, `Unhandled facet field type: "${j.fieldType}"`),
                null
              );
          }
        }
        function C0(w, j, Y, $, i0, m0) {
          var o0, j0, X;
          let O = [],
            G0 = 0,
            U0 = 2;
          const e1 = {},
            C1 = w.tags || {};
          for (const u1 of Object.keys(C1)) {
            let Q0;
            i0 &&
              (Q0 =
                (o0 = i0.counts[w.name] && i0.counts[w.name][u1]) != null
                  ? o0
                  : 0),
              (G0 += Q0 != null ? Q0 : 0);
            const A0 = M1(w.name, u1, C1[u1], Q0);
            if (A0)
              if (!e1[A0.strLabel]) O.push(A0), (e1[A0.strLabel] = A0);
              else if (Y) {
                const $0 = e1[A0.strLabel],
                  _0 = typeof $0.tag == "string" ? [$0.tag] : $0.tag,
                  p1 = typeof A0.tag == "string" ? [A0.tag] : A0.tag;
                ($0.tag = _0.concat(...p1)),
                  $0.matches !== void 0 &&
                    A0.matches !== void 0 &&
                    ($0.matches =
                      ((j0 = $0.matches) != null ? j0 : 0) +
                      ((X = A0.matches) != null ? X : 0)),
                  $0.color === void 0 && A0.color && ($0.color = A0.color);
              } else {
                let $0;
                do ($0 = `${A0.strLabel} (?${U0}?)`), U0++;
                while (e1[$0]);
                (0, z.wT)(
                  !1,
                  "Forced to assign a unique label to option",
                  $0,
                  A0,
                  e1[A0.strLabel],
                );
                const _0 = { ...A0, strLabel: $0 };
                O.push(_0), (e1[_0.strLabel] = _0);
              }
          }
          if ($) O.sort($);
          else if (!(j === "select")) O = (0, U.Z)(O, (Q0) => Q0.strLabel);
          else {
            O.sort((A0, $0) => {
              var _0, p1;
              return (
                ((_0 = $0.matches) != null ? _0 : 0) -
                ((p1 = A0.matches) != null ? p1 : 0)
              );
            });
            let Q0 = -1;
            for (let A0 = O.length - 1; A0 >= 0 && O[A0].matches === 0; A0--)
              Q0 = A0;
            if (Q0 === -1) O = (0, U.Z)(O, (A0) => A0.strLabel);
            else {
              const A0 = (0, U.Z)(O.slice(0, Q0), (_0) => _0.strLabel),
                $0 = (0, U.Z)(O.slice(Q0), (_0) => _0.strLabel);
              O = [...A0, ...$0];
            }
          }
          if (i0 && G0 === 0) return null;
          if (i0) {
            const u1 = i0.total === G0,
              Q0 = Object.keys(i0.counts[w.name]).length === 1,
              A0 = m0 && !!m0[w.name];
            if (u1 && Q0 && !A0) return null;
          }
          return { strLabel: w.localized_name, rgOptions: O, fieldType: j };
        }
        function M1(w, j, Y, $) {
          const i0 = {
            facet: w,
            tag: j,
            strLabel: Y.localized_name,
            matches: $,
          };
          return Y.color && (i0.color = `#${Y.color}`), i0;
        }
      },
      44773: (r0, t0, n) => {
        "use strict";
        n.d(t0, { AL: () => x, GG: () => V });
        var c = n(71742),
          o = n(90626);
        const x = (0, o.createContext)(null);
        function V() {
          const K = (0, o.useContext)(x);
          return (0, c.wT)(K, "No filter config provider found!"), K;
        }
        function u(K, L) {
          return K.bSteamItems
            ? [K.filterSteam, (W, f) => L({ ...K, filterSteam: W }, f), !0]
            : [K.filterInGame, (W, f) => L({ ...K, filterInGame: W }, f), !1];
        }
      },
      4709: (r0, t0, n) => {
        "use strict";
        n.d(t0, { $: () => J });
        var c = n(7850),
          o = n(90626),
          x = n(68031),
          V = n(15252),
          u = n(87275),
          K = n(60351),
          L = n(99631);
        function c0(S) {
          const { defaultValue: m = 0, currency: N, ...z } = S;
          return (0, c.jsx)(L.I, {
            valueToString: (U) => f(U, N.bWholeUnitsOnly),
            valueFromString: (U) => p(U, m, N.bWholeUnitsOnly),
            checkValidText: (U, h0) => !U || (h0 !== L.C && !isNaN(h0)),
            beforeContent: N.bSuffixSymbol ? void 0 : N.strSymbol,
            afterContent: N.bSuffixSymbol ? N.strSymbol : void 0,
            ...z,
          });
        }
        const W = "\u221E";
        function f(S, m) {
          return S === void 0
            ? ""
            : S === 1 / 0
              ? W
              : m
                ? Math.round(S / 100).toString()
                : (S / 100).toFixed(2);
        }
        function p(S, m, N) {
          return S === W
            ? 1 / 0
            : S === ""
              ? m
              : N
                ? parseInt(S) * 100
                : Math.round(parseFloat(S) * 100);
        }
        var g = n(44773),
          y = n(13854),
          G = n(93338);
        function J(S) {
          const { state: m, onStateChange: N } = S,
            z = (h0) => N({ ...m, price: h0 }, !1),
            U = (h0) => N({ ...m, price: h0 }, !0);
          return (0, c.jsx)(l0, {
            price: m.price,
            onPriceChange: z,
            onPriceSettled: U,
          });
        }
        function l0(S) {
          const { price: m, onPriceChange: N, onPriceSettled: z } = S,
            { maxPrice: U, currency: h0 } = (0, g.GG)(),
            [H, L0] = (0, o.useState)(!1),
            z0 = [0, U],
            M0 = (s1) => (q0) => {
              const o1 = [...m];
              (o1[s1] = y.OQ(q0, z0[0], z0[1])), N(o1), z && z(o1), L0(!0);
            },
            w0 = (s1) => {
              L0(!0);
              const [q0, o1] = s1,
                V1 = [H0(q0) ? 0 : q0, D0(o1) ? U : o1];
              N(V1);
            },
            {
              checkMin: H0,
              checkMax: D0,
              props: O0,
            } = h({
              value: [m[0], m[1]],
              min: z0[0],
              max: z0[1],
              onValueChange: w0,
              onValueSettled: z,
            }),
            d0 = H0(m[0]),
            X0 = D0(m[1]),
            J0 = d0 && X0 && !H,
            N0 = d0 && !H ? void 0 : m[0];
          let Z0 = m[1];
          return (
            X0 && (Z0 = H ? 1 / 0 : void 0),
            U <= 0
              ? null
              : (0, c.jsxs)(x.s, {
                  direction: "column",
                  gap: "2",
                  paddingBottom: "2",
                  children: [
                    (0, c.jsxs)(x.s, {
                      gap: "2",
                      align: "center",
                      children: [
                        (0, c.jsx)(I0, {
                          currency: h0,
                          value: N0,
                          onValueChange: M0(0),
                          placeholder: G.K.Localize(
                            "#AdvancedSearch_MinPricePlaceholder",
                          ),
                        }),
                        (0, c.jsx)(V.EY, {
                          size: "4",
                          weight: "medium",
                          children: "-",
                        }),
                        (0, c.jsx)(I0, {
                          currency: h0,
                          value: Z0,
                          onValueChange: M0(1),
                          placeholder: G.K.Localize(
                            "#AdvancedSearch_MaxPricePlaceholder",
                          ),
                          defaultValue: z0[1],
                        }),
                      ],
                    }),
                    (0, c.jsx)(u.F, { ...O0, color: J0 ? "dull" : void 0 }),
                  ],
                })
          );
        }
        function I0(S) {
          return (0, c.jsx)(K.az, {
            flexGrow: "1",
            children: (0, c.jsx)(c0, { variant: "inset-focus", ...S }),
          });
        }
        function h(S) {
          const {
              value: m,
              onValueChange: N,
              onValueSettled: z,
              max: U,
              min: h0,
              step: H = 1,
              ...L0
            } = S,
            z0 = Math.floor(A(U) * 100) / 100,
            M0 = Math.floor(A(h0) * 100) / 100,
            w0 = B(m, A),
            H0 = (0, o.useCallback)((O0) => N(B(O0, P)), [N]),
            D0 = (0, o.useCallback)((O0) => z && z(B(O0, P)), [z]);
          return {
            checkMax: (O0) => Math.abs(O0 - U) < 100,
            checkMin: (O0) => Math.abs(O0 - h0) < 1,
            props: {
              value: w0,
              onValueChange: H0,
              onValueSettled: D0,
              max: z0,
              min: M0,
              step: 0.01,
              ...L0,
            },
          };
        }
        const Q = 3;
        function B(S, m) {
          return S.map(m);
        }
        function A(S) {
          return Math.pow(S, 1 / Q);
        }
        function P(S) {
          return Math.round(Math.pow(S, Q));
        }
      },
      93338: (r0, t0, n) => {
        "use strict";
        n.d(t0, { K: () => V });
        var c = n(37901);
        const o = {};
        (o.arabic = () => n.e(4519).then(n.t.bind(n, 94519, 19))),
          (o.brazilian = () => n.e(1163).then(n.t.bind(n, 61163, 19))),
          (o.bulgarian = () => n.e(9620).then(n.t.bind(n, 59620, 19))),
          (o.czech = () => n.e(3394).then(n.t.bind(n, 23394, 19))),
          (o.danish = () => n.e(6998).then(n.t.bind(n, 46998, 19))),
          (o.dutch = () => n.e(8187).then(n.t.bind(n, 58187, 19))),
          (o.english = () => n.e(3145).then(n.t.bind(n, 23145, 19))),
          (o.finnish = () => n.e(2286).then(n.t.bind(n, 62286, 19))),
          (o.french = () => n.e(2111).then(n.t.bind(n, 52111, 19))),
          (o.german = () => n.e(1397).then(n.t.bind(n, 51397, 19))),
          (o.greek = () => n.e(1697).then(n.t.bind(n, 31697, 19))),
          (o.hungarian = () => n.e(6424).then(n.t.bind(n, 26424, 19))),
          (o.indonesian = () => n.e(4275).then(n.t.bind(n, 14275, 19))),
          (o.italian = () => n.e(5953).then(n.t.bind(n, 68334, 19))),
          (o.japanese = () => n.e(4648).then(n.t.bind(n, 44648, 19))),
          (o.koreana = () => n.e(5914).then(n.t.bind(n, 55914, 19))),
          (o.latam = () => n.e(8546).then(n.t.bind(n, 8546, 19))),
          (o.malay = () => n.e(9993).then(n.t.bind(n, 39993, 19))),
          (o.norwegian = () => n.e(7949).then(n.t.bind(n, 7949, 19))),
          (o.polish = () => n.e(762).then(n.t.bind(n, 50762, 19))),
          (o.portuguese = () => n.e(442).then(n.t.bind(n, 10442, 19))),
          (o.romanian = () => n.e(1892).then(n.t.bind(n, 81892, 19))),
          (o.russian = () => n.e(9556).then(n.t.bind(n, 19556, 19))),
          (o.sc_schinese = () => n.e(8366).then(n.t.bind(n, 18366, 19))),
          (o.schinese = () => n.e(3783).then(n.t.bind(n, 13783, 19))),
          (o.spanish = () => n.e(7873).then(n.t.bind(n, 57873, 19))),
          (o.swedish = () => n.e(1792).then(n.t.bind(n, 79411, 19))),
          (o.tchinese = () => n.e(6812).then(n.t.bind(n, 46812, 19))),
          (o.thai = () => n.e(3369).then(n.t.bind(n, 3369, 19))),
          (o.turkish = () => n.e(7505).then(n.t.bind(n, 47505, 19))),
          (o.ukrainian = () => n.e(4075).then(n.t.bind(n, 94075, 19))),
          (o.vietnamese = () => n.e(4024).then(n.t.bind(n, 24024, 19)));
        async function x(u) {
          if (o[u]) return o[u]();
        }
        const V = (0, c.l)(x);
      },
      17508: (r0, t0, n) => {
        "use strict";
        n.d(t0, { N: () => o });
        var c = n(72609);
        const o = {
          Home: (V) => x("", V),
          AppHome: (V, u) => o.Search({ ...u, search: `appid=${V}` }),
          AdvancedSearch: (V = {}) => x("advancedsearch", V),
          Search: (V = {}) => x("search", V),
          Item: (V, u, K = {}) =>
            x(
              `listings/${V}/${encodeURIComponent(u)}${K.bucket ? `/${encodeURIComponent(K.bucket)}` : ""}`,
              K,
            ),
        };
        function x(V, u = {}) {
          let K = "";
          return (
            u != null &&
              u.search &&
              (typeof u.search == "string"
                ? (K = u.search)
                : (K = u.search.toString())),
            `${c.TS.COMMUNITY_BASE_URL}market/${V}${K ? "?" + K : ""}`
          );
        }
      },
      51296: (r0, t0, n) => {
        "use strict";
        n.d(t0, { b: () => x, u: () => o });
        var c = n(90626);
        const o = (0, c.createContext)(!1);
        function x() {
          return (0, c.useContext)(o);
        }
      },
      76617: (r0, t0, n) => {
        "use strict";
        n.d(t0, { V: () => c0 });
        function c(W) {
          return Object.prototype.toString.call(W) === "[object Object]";
        }
        function o(W) {
          if (!c(W)) return !1;
          const f = W.constructor;
          if (typeof f == "undefined") return !0;
          const p = f.prototype;
          return !(
            !c(p) || !Object.prototype.hasOwnProperty.call(p, "isPrototypeOf")
          );
        }
        function x(...W) {
          return JSON.stringify(W, (f, p) => {
            if (o(p)) {
              const g = {};
              return (
                Object.keys(p)
                  .sort()
                  .forEach((y) => {
                    g[y] = p[y];
                  }),
                g
              );
            }
            return p;
          });
        }
        var V = n(90626),
          u = n(7850);
        const K = (0, V.createContext)({ instances: {}, factories: {} });
        function L(W) {
          const { name: f, fnFactory: p, children: g } = W,
            y = React.useContext(K),
            [G] = useState({}),
            J = useMemo(
              () => ({
                instances: G,
                factories: { ...y.factories, [f]: p },
                parent: y,
              }),
              [G, f, y],
            );
          return jsx(K.Provider, { value: J, children: g });
        }
        function c0(W, f) {
          var p;
          const g = (0, V.useContext)(K),
            y = typeof W == "string" ? W : x(...W);
          let G = g;
          for (; G; ) {
            if (y in G.instances) return G.instances[y];
            if (y in G.factories) break;
            G = G.parent;
          }
          const l0 = (
            (p = G == null ? void 0 : G.factories[y]) != null ? p : f
          )();
          return ((G != null ? G : g).instances[y] = l0), l0;
        }
      },
      21721: (r0, t0, n) => {
        "use strict";
        n.d(t0, {
          DT: () => L,
          ZD: () => W,
          b0: () => u,
          bu: () => K,
          pd: () => c0,
        });
        var c = n(72609),
          o = n(40358),
          x = n(71742),
          V = n(41032);
        function u(p, g) {
          if (p[g]) {
            if (g == "community_icon") {
              const y = p.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${p[g]}.jpg`)
                .replace(/\?.*$/, "");
              return `${c.TS.MEDIA_CDN_COMMUNITY_URL}${y}`;
            } else if (typeof p[g] == "string") {
              const y = p.asset_url_format.replace("${FILENAME}", p[g]);
              return `${c.TS.STORE_ITEM_BASE_URL}${y}`;
            }
          }
        }
        function K(p, g = "full") {
          let y = "";
          switch (g) {
            case "thumb":
              y = ".116x65";
              break;
            case "600x338":
              y = ".600x338";
              break;
            case "1920x1080":
              y = ".1920x1080";
              break;
            case "full":
              y = "";
              break;
            default:
              (0, x.z_)(g, `Invalid size: ${g}`);
              break;
          }
          return (
            c.TS.STORE_ITEM_BASE_URL +
            p.filename.replace(/\.([^.]+)(\?.*)?$/, `${y}.$1$2`)
          );
        }
        function L(p) {
          const { data: g } = (0, o.j4)(p),
            y = (0, V.dy)();
          if (g)
            return [
              ...(g.all_ages_screenshots || []),
              ...(!y && g.mature_content_screenshots
                ? g.mature_content_screenshots
                : []),
            ].sort((G, J) => G.ordinal - J.ordinal);
        }
        function c0(p, g = !1) {
          const { data: y } = (0, o.lv)({ appid: p });
          if (y !== void 0)
            return y === null
              ? null
              : g && y.library_capsule_2x
                ? u(y, "library_capsule_2x")
                : y.library_capsule
                  ? u(y, "library_capsule")
                  : `${c.TS.STORE_ITEM_BASE_URL}steam/apps/${p}/portrait.png`;
        }
        function W(p, ...g) {
          const { data: y } = (0, o.lv)(p);
          return f(y, ...g);
        }
        function f(p, ...g) {
          if (!(p != null && p.asset_url_format)) return;
          const y = g.find((G) => {
            const J = p[G];
            return typeof J == "string" && J.trim() !== "";
          });
          return y && u(p, y);
        }
      },
      89611: (r0) => {
        r0.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      81122: (r0) => {
        r0.exports = {
          Skeleton: "_3mh9mimYdqEileUp-cYkQh",
          skeleton: "_12eclucgixaW8U7dizVBcD",
        };
      },
      8833: (r0) => {
        r0.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      75: (r0) => {
        r0.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      60394: (r0) => {
        r0.exports = {
          Root: "_3i_h6xYLxqWT-wquwrB4P8",
          "Size-1": "_2BS49hUFyqY2YQ3X6Am-Oe",
          "Size-2": "_3GAcWYWoOxZKAt2NY-d-M-",
          "Size-3": "q85ksguLIHUIA6Z5aWE2b",
          Track: "wCPKWvwCOuo-4mHzhEcBW",
          Handle: "_14qr0P2xMoRiEbcekixcZh",
        };
      },
      75180: (r0) => {
        r0.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      45179: (r0) => {
        r0.exports = {
          ItemDescription: "_2MixhMbHTxS0qJ2uAefnVy",
          ItemImageFit: "_2VE_UZqsGp6cddlis2pNxV",
          GameImage: "_3LTPlbh1oIRZyLjujpw83H",
          GameImagePlaceholder: "_27u72fjp-gJgeD5k7NQ1Vf",
        };
      },
      43694: (r0) => {
        r0.exports = {
          ListedItemIcon: "CsBvls5vHRsxv-ZseyEhc",
          ListedItemLabel: "_2qj5isrN95ajQb8c2nAuMs",
        };
      },
      11685: (r0) => {
        r0.exports = {
          TradeProtectionIcon: "_2EE-ZampXjpepog8RdkfIJ",
          TradeProtectionLabel: "_2rGNh4nOuEfSbNbyXrEMEz",
        };
      },
      44688: (r0) => {
        r0.exports = {
          TagButton: "Fjfz2cC73ckcYluf8xJXh",
          Icon: "_1t5uZMQ4sN1vXrw3I6-KY6",
          BetaLink: "_3PoANvDgGaHNvlIXvT7cEA",
          TruncatingPortraitRow: "_1nAGBiWu7n1ggCy-E5i035",
          Compact: "_2-ehABIcetU1glyLdFi0tY",
          NoFilters: "_3g3vv3kHTPCWqMi7peBikQ",
          SearchSuggestion: "_2gmdvGWIS321h7LVeTHB4w",
          Collapse: "_3mYz6ZF851JdnrGU3Lo-8",
          UndecoratedLink: "_3WQHXUuRRrVY0Xkb98Oafq",
        };
      },
      99483: (r0) => {
        r0.exports = {
          ImgBlur: "_2XJ9_vd4z2Vp9NFllH7sfv",
          Trigger: "_2lzAMSOlpWNjJRcqFGwxpR",
          ToggleButton: "_3V5IjC_ZPSm6AYNrG_TxIH",
          TriggerToggle: "_3vaVGwEWyzdBk2qShNHAXp",
          TriggerSelect: "_1yO0Yb-sqZJEjjMYT3Cd_v",
          NoToggleTrigger: "_3xdjQos6PV3wwD8xfObB_T",
          Silhouette: "NLSqZ9dW14eyrJHMGtMXq",
        };
      },
    },
  ]);
})();

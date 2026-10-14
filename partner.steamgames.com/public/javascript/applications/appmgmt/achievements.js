/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [99539],
    {
      30541: (pe, Ne, n) => {
        "use strict";
        n.a(
          pe,
          async (d, H) => {
            try {
              n.d(Ne, {
                A$I: () => k.A$I,
                Ikc: () => k.Ikc,
                Whr: () => k.Whr,
                YOg: () => k.YOg,
                YjP: () => k.YjP,
                ZSL: () => k.ZSL,
                aig: () => k.aig,
                auy: () => k.auy,
                euz: () => k.euz,
                k5n: () => k.k5n,
                rLB: () => k.rLB,
                uEf: () => k.uEf,
              });
              var e = n(18210),
                X = n(10410),
                y = n(62617),
                k = n(68980);
              const J = {
                "es-419": "es",
                "pt-br": "pt",
                "zh-cn": "zhCN",
                "zh-tw": "zhTW",
              };
              async function V() {
                const _ = (0, e.l4)(),
                  j = _ in J ? J[_] : _,
                  b = X[j];
                y.$W(b());
              }
              await V(), H();
            } catch (J) {
              H(J);
            }
          },
          1,
        );
      },
      3959: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let m = function (c) {
                return `${c.statID}.${c.bitID}`;
              },
              P = function (c) {
                return c[1].type === "ACHIEVEMENTS";
              },
              v = function (c) {
                return c[1].type !== "ACHIEVEMENTS";
              },
              z = function () {
                return (0, j.useContext)(l);
              },
              ve = function (c, U = !1) {
                return (0, X.I)({
                  queryKey: [D, C, c, U],
                  queryFn: async () => {
                    let ne = U ? { version: "live" } : {};
                    const oe = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetstatsschema/${c}`,
                      he = await V().get(oe, {
                        params: ne,
                        withCredentials: !0,
                      });
                    if (he?.data?.success == e.R) return he.data;
                    throw new Error(
                      `failed to load ${U ? "live" : "draft"} stat schema for app id ${c}`,
                    );
                  },
                });
              },
              T = function (c, U = !1) {
                const ne = ve(c, U);
                return ne.isLoading ? null : ne.data?.schema;
              },
              ge = function (c) {
                const U = ve(c);
                return U.isLoading ? void 0 : U.data?.limits;
              },
              Ge = function (c) {
                const U = L(c);
                return Object.keys(U ?? {}).length + 1;
              },
              ae = function (c) {
                const U = ge(c),
                  ne = Ge(c);
                return !U || ne < U.max_groups;
              },
              L = function (c, U = !1) {
                return T(c, U)?.groups;
              },
              fe = function (c, U, ne = !1) {
                return L(c, ne)?.[U];
              },
              le = function (c) {
                const U = L(c);
                return U
                  ? Object.keys(U)
                      .map((oe) => ({
                        groupid: oe,
                        sortid: g.auy.number().default(0).parse(U[oe].order),
                        ...U[oe],
                      }))
                      .sort((oe, he) => oe.sortid - he.sortid)
                      .map((oe) => oe)
                  : [];
              },
              ie = function (c, U = !1) {
                const ne = T(c, U);
                return ne?.stats
                  ? Object.entries(ne.stats)
                      .filter(v)
                      .map(([oe, he]) => ({ ...he, statID: oe }))
                  : void 0;
              },
              u = function (c, U = !1) {
                const ne = T(c, U);
                return ne?.stats
                  ? Object.entries(ne.stats)
                      .filter(P)
                      .flatMap(([oe, he]) =>
                        Object.entries(he.bits).map(([xe, we]) => ({
                          ...we,
                          statID: oe,
                          bitID: xe,
                        })),
                      )
                  : void 0;
              },
              w = function (c, U, ne = !1) {
                const oe = T(c, ne);
                return oe?.stats
                  ? Object.entries(oe.stats)
                      .filter(P)
                      .flatMap(([he, xe]) =>
                        Object.entries(xe.bits)
                          .filter(
                            ([we, me]) =>
                              (!U && !me.groupid) || U === me.groupid,
                          )
                          .map(([we, me]) => ({
                            ...me,
                            statID: he,
                            bitID: we,
                          })),
                      )
                  : void 0;
              },
              te = function (c) {
                const U = (0, X.I)({
                  queryKey: [D, Y, c],
                  queryFn: async () => {
                    const ne = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetlanguagelist/${c}`,
                      oe = await V().get(ne, { withCredentials: !0 });
                    if (oe?.data?.success == e.R)
                      return oe.data.languages.sort((he, xe) =>
                        he.localeCompare(xe),
                      );
                    throw new Error(
                      `failed to load language list for app id ${c}`,
                    );
                  },
                });
                return U.isLoading ? ["english"] : U.data;
              },
              Q = function (c) {
                const U = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (oe) => await I(c, oe),
                  onSuccess: async () => {
                    await U.invalidateQueries({ queryKey: [D, Y, c] });
                  },
                });
              },
              ce = function (c) {
                const U = (0, X.I)({
                  queryKey: [D, A, c],
                  queryFn: async () => {
                    const ne = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetlanguageoptionslist/${c}`,
                      oe = await V().get(ne, { withCredentials: !0 });
                    if (oe?.data?.success == e.R)
                      return oe.data.languages.sort((he, xe) =>
                        he.localeCompare(xe),
                      );
                    throw new Error(
                      `failed to load language options list for app id ${c}`,
                    );
                  },
                });
                return U.isLoading ? ["english"] : U.data;
              },
              B = function (c) {
                const U = ee(c);
                return U.isLoading ? [] : U.data;
              },
              ee = function (c) {
                return (0, X.I)({
                  queryKey: [D, ue, c],
                  queryFn: async () => {
                    const U = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetdlc/${c}`,
                      ne = await V().get(U, { withCredentials: !0 });
                    if (ne?.data?.success == e.R) return ne.data.dlc;
                    throw new Error(`failed to load dlc for app id ${c}`);
                  },
                });
              },
              de = function (c) {
                const U = (0, X.I)({
                  queryKey: [D, ye, c],
                  queryFn: async () => {
                    const ne = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetappinfo/${c}`,
                      oe = await V().get(ne, { withCredentials: !0 });
                    if (oe?.data?.success == e.R) return oe.data.app;
                    if (oe?.data?.success == e.Qo)
                      return {
                        appid: c.toString(),
                        type: "Game",
                        releasestate: "unavailable",
                        name: "",
                        is_public: !1,
                        is_released_somewhere: !1,
                        image: "",
                      };
                    throw new Error(`failed to load app info for app id ${c}`);
                  },
                });
                return U.isLoading ? null : U.data;
              },
              W = function (c, U) {
                const { strErrorMsg: ne, errorCode: oe } = (0, b.H)(U);
                console.error(`${c} failed: `, oe, ne, U);
                const he = U,
                  xe = he?.response?.data?.error ?? he?.data?.error;
                return oe == e.TE && xe
                  ? new Error(xe)
                  : oe == e.VB
                    ? new Error(
                        (0, G.we)(
                          "#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate",
                        ),
                      )
                    : new Error(
                        (0, G.we)("#AchievementEditor_Error_RequestFailed"),
                      );
              },
              r = function (c, U) {
                const ne = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (he) => await o(c, U, he),
                  onSuccess: async () => {
                    await ne.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              h = function (c) {
                const U = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (oe) => {
                    const { groups: he, onProgress: xe } = oe;
                    for (let we = 0; we < he.length; we++) {
                      const me = he[we];
                      xe?.({
                        step: "group",
                        name: me.groupid,
                        completed: we,
                        total: he.length,
                      }),
                        await o(c, me.groupid, me.group);
                    }
                    return !0;
                  },
                  onSuccess: async () => {
                    await U.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              x = function (c, U) {
                const ne = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async () => {
                    const he = `${a.TS.PARTNER_BASE_URL}achievements/ajaxdeletegroup/${c}`,
                      xe = new FormData();
                    return (
                      xe.append("appid", c.toString()),
                      xe.append("groupid", U),
                      await N("deleteStatGroup", he, xe),
                      !0
                    );
                  },
                  onSuccess: async () => {
                    await ne.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              E = function (c) {
                const U = L(c),
                  ne = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (he) => await $(c, he),
                  onSuccess: async () => {
                    await ne.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              i = function (c) {
                const U = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (oe) => {
                    const { groupid: he, api_names: xe } = oe;
                    return await K(c, he, xe);
                  },
                  onSuccess: async () => {
                    await U.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              s = function (c) {
                return !!c && c.startsWith("data:");
              },
              S = function (c) {
                return (
                  (c.achievement ? 1 : 0) +
                  (s(c.icon) ? 1 : 0) +
                  (s(c.icon_gray) ? 1 : 0)
                );
              },
              R = function (c, U, ne) {
                const oe = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (xe) =>
                    await F(c, { statID: U, bitID: ne, ...xe }),
                  onSuccess: async () => {
                    await oe.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              re = function (c, U, ne) {
                const oe = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async () => await O(c, { statID: U, bitID: ne }),
                  onSuccess: async () => {
                    await oe.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              },
              Se = function (c) {
                return (
                  (c.addOrUpdate ?? []).reduce((U, ne) => U + S(ne), 0) +
                  (c.delete ?? []).length
                );
              },
              Ve = function (c) {
                const U = (0, y.jE)();
                return (0, k.n)({
                  mutationFn: async (oe) => {
                    const he = Se(oe);
                    let xe = 0;
                    const we = (me, Fe) => {
                      oe.onProgress?.({
                        step: me,
                        name: Fe,
                        completed: xe,
                        total: he,
                      }),
                        xe++;
                    };
                    for (const me of oe.addOrUpdate ?? []) {
                      const Fe = me.achievement?.name ?? me.name ?? "";
                      await F(c, me, (be) => we(be, Fe));
                    }
                    for (const me of oe.delete ?? [])
                      we("delete", me.name ?? ""), await O(c, me);
                    return !0;
                  },
                  onSuccess: async () => {
                    await U.invalidateQueries({ queryKey: [D, C, c, !1] });
                  },
                });
              };
            n.d(Ne, {
              $j: () => fe,
              Bx: () => re,
              Er: () => h,
              F0: () => x,
              FK: () => w,
              FM: () => le,
              GV: () => Ge,
              J3: () => ie,
              JI: () => ae,
              L3: () => z,
              Q4: () => L,
              Rz: () => ge,
              SN: () => Ve,
              Wu: () => ee,
              Xe: () => de,
              aR: () => l,
              iF: () => E,
              kb: () => u,
              kk: () => Q,
              l7: () => q,
              mb: () => r,
              nf: () => m,
              q4: () => R,
              re: () => Se,
              sJ: () => B,
              ts: () => te,
              vd: () => ce,
              yu: () => M,
              zG: () => i,
            });
            var e = n(72604),
              X = n(20194),
              y = n(75233),
              k = n(51614),
              J = n(41735),
              V = n.n(J),
              _ = n(74761),
              j = n(90626),
              b = n(34592),
              G = n(18210),
              a = n(3166),
              g = n(30541),
              p = d([g]);
            g = (p.then ? (await p)() : p)[0];
            var M = ((c) => (
              (c[(c.Client = 0)] = "Client"),
              (c[(c.GameServer = 1)] = "GameServer"),
              (c[(c.OfficialGameServer = 2)] = "OfficialGameServer"),
              c
            ))(M || {});
            const q = ["Client", "GameServer", "OfficialGameServer"],
              l = (0, j.createContext)(null),
              D = "Stats",
              C = "StatSchema",
              Y = "AppLanguageList";
            async function I(c, U) {
              const ne = `${a.TS.PARTNER_BASE_URL}achievements/ajaxsetlanguagelist/${c}`,
                oe = new FormData();
              return (
                oe.append("languages", JSON.stringify(U)),
                await N("updateLanguageList", ne, oe),
                !0
              );
            }
            const A = "AppLanguageOptionsList",
              ue = "AppDLCList",
              ye = "AppInfo";
            async function N(c, U, ne) {
              let oe;
              try {
                oe = await V().post(U, ne, { withCredentials: !0 });
              } catch (he) {
                throw W(c, he);
              }
              if (oe?.data?.success != e.R) throw W(c, oe);
              return oe.data;
            }
            const se = "StatGroupMutator";
            async function o(c, U, ne) {
              const oe = `${a.TS.PARTNER_BASE_URL}achievements/ajaxcreateorupdategroup/${c}`,
                he = new FormData();
              return (
                he.append("groupid", U),
                he.append("name", JSON.stringify(ne.name)),
                ne.dlcappid && he.append("requiredappid", ne.dlcappid),
                he.append("isarchived", ne.archived == "1" ? "true" : "false"),
                he.append(
                  "isdeveloperonly",
                  ne.developeronly == "1" ? "true" : "false",
                ),
                he.append("order", ne.order ?? "-1"),
                (await N("addOrUpdateStatGroup", oe, he)).groupid
              );
            }
            async function $(c, U) {
              const ne = new FormData();
              ne.append("appid", c.toString()),
                ne.append("groupids", JSON.stringify(U));
              const oe = `${a.TS.PARTNER_BASE_URL}achievements/ajaxreordergroups/${c}`;
              return await N("reorderGroups", oe, ne), !0;
            }
            async function K(c, U, ne) {
              const oe = new FormData();
              oe.append("appid", c.toString()),
                oe.append("groupid", (U ?? 0).toString()),
                oe.append("names", JSON.stringify(ne));
              const he = `${a.TS.PARTNER_BASE_URL}achievements/ajaxmoveachievements/${c}`;
              return await N("moveAchievementsGroup", he, oe), !0;
            }
            var Z = ((c) => (
              (c.Achieved = "achievement"),
              (c.Unachieved = "achievement_gray"),
              c
            ))(Z || {});
            async function t(c, U, ne, oe, he) {
              const [xe, we, me] = he.match(/data:(image\/\w+);base64,(.*)/),
                Fe = _.hp.from(me, "base64"),
                be = we === "image/png" ? "png" : "jpg",
                Qe = `${c.toString()}_${U}_${ne}_${oe == "achievement" ? "a" : "g"}.${be}`,
                Je = new File([Fe], Qe, { type: we }),
                Ye = new FormData();
              Ye.append("appID", c.toString()),
                Ye.append("statID", U),
                Ye.append("bit", ne),
                Ye.append("requestType", oe.toString()),
                Ye.append("image", Je);
              const Ze = `${a.TS.PARTNER_BASE_URL}images/uploadachievement`;
              await N("AchievementImageUpload", Ze, Ye);
            }
            async function f(c, U, ne, oe, he, xe) {
              s(oe) && (xe?.("icon"), await t(c, U, ne, "achievement", oe)),
                s(he) &&
                  (xe?.("icon_gray"),
                  await t(c, U, ne, "achievement_gray", he));
            }
            async function F(c, U, ne) {
              const {
                statID: oe,
                bitID: he,
                achievement: xe,
                icon: we,
                icon_gray: me,
              } = U;
              if (!xe && oe && he)
                return (
                  await f(c, oe, he, we, me, ne),
                  { success: e.R, statid: oe, bitid: he }
                );
              const Fe = new FormData();
              oe && Fe.append("statid", oe),
                he && Fe.append("bitid", he),
                xe.groupid && Fe.append("groupid", xe.groupid),
                Fe.append("name", xe.name),
                xe.progress &&
                  (Fe.append("progressstat", xe.progress.value.operand1),
                  Fe.append("progressmin", xe.progress.min_val),
                  Fe.append("progressmax", xe.progress.max_val)),
                xe.permission && Fe.append("setby", xe.permission.toString()),
                xe.archived == "1" && Fe.append("isarchived", "true"),
                xe.display &&
                  (xe.display.hidden == "1" && Fe.append("hidden", "true"),
                  xe.display.name &&
                    Fe.append("displayname", JSON.stringify(xe.display.name)),
                  xe.display.desc &&
                    Fe.append("displaydesc", JSON.stringify(xe.display.desc)));
              const be = `${a.TS.PARTNER_BASE_URL}achievements/ajaxcreateorupdateachievement/${c}`;
              ne?.("achievement");
              const Qe = await N("addOrUpdateAchievement", be, Fe);
              return await f(c, Qe.statid, Qe.bitid, we, me, ne), Qe;
            }
            async function O(c, U) {
              const { statID: ne, bitID: oe } = U,
                he = `${a.TS.PARTNER_BASE_URL}achievements/ajaxdeleteachievement/${c}`,
                xe = new FormData();
              return (
                xe.append("appid", c.toString()),
                xe.append("statid", ne),
                xe.append("bitid", oe),
                await N("deleteAchievement", he, xe),
                !0
              );
            }
            H();
          } catch (q) {
            H(q);
          }
        });
      },
      45037: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let ge = function (t, s, f, S, F) {
                return (S && t in S) || (f && t in f && le(s[t], f[t], F));
              },
              Ge = function () {
                const {
                    generateUnachievedImages: t,
                    setGenerateUnachievedImages: s,
                  } = (0, P.Mt)(),
                  { appID: f } = (0, _.L3)(),
                  S = (0, _.kb)(f),
                  F = (0, _.FM)(f),
                  R = (0, _.ts)(f),
                  [O, re] = (0, j.useState)(!1),
                  Se = "dull-7",
                  Ve = "blue-8";
                return (0, e.jsxs)(X.s, {
                  direction: "column",
                  gap: "3",
                  children: [
                    (0, e.jsxs)(X.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      marginTop: "3",
                      background: Se,
                      children: [
                        (0, e.jsx)(y.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Definitions_Title",
                          ),
                        }),
                        (0, e.jsx)(y.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Definitions_Description",
                          ),
                        }),
                        (0, e.jsxs)(X.s, {
                          direction: "row",
                          align: "center",
                          gap: "2",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(k.$, {
                              color: "dull",
                              onClick: () => {
                                (0, Z.le)(f, S);
                              },
                              children: [
                                (0, e.jsx)(o, {}),
                                "\xA0",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_Export_Definitions",
                                ),
                              ],
                            }),
                            (0, e.jsxs)(y.EY, {
                              color: Ve,
                              children: [
                                "(",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_N_Achievements",
                                  S.length,
                                ),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(X.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: Se,
                      children: [
                        (0, e.jsx)(y.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Localization_Title",
                          ),
                        }),
                        (0, e.jsx)(y.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Localization_Description",
                          ),
                        }),
                        (0, e.jsxs)(X.s, {
                          direction: "row",
                          align: "center",
                          gap: "3",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(X.s, {
                              direction: "row",
                              align: "center",
                              gap: "2",
                              children: [
                                (0, e.jsxs)(k.$, {
                                  color: "dull",
                                  onClick: () => {
                                    re(!0);
                                  },
                                  children: [
                                    (0, e.jsx)(r, {}),
                                    "\xA0",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_Localization_Languages_Button",
                                    ),
                                  ],
                                }),
                                (0, e.jsxs)(y.EY, {
                                  color: Ve,
                                  children: [
                                    "(",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_N_Languages",
                                      R.length,
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, e.jsxs)(X.s, {
                              direction: "row",
                              align: "center",
                              gap: "2",
                              children: [
                                (0, e.jsxs)(k.$, {
                                  color: "dull",
                                  onClick: () => {
                                    (0, Z.CD)(f, S, R);
                                  },
                                  children: [
                                    (0, e.jsx)(o, {}),
                                    "\xA0",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_Export_Localization",
                                    ),
                                  ],
                                }),
                                (0, e.jsxs)(y.EY, {
                                  color: Ve,
                                  children: [
                                    "(",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_N_Achievements",
                                      S.length,
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(y.EY, {
                          contrast: "description",
                          children: (0, g.oW)(
                            "#AchievementEditor_Bulk_Localization_Tip",
                            (0, e.jsx)(y.EY, { contrast: "subtitle" }),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)(X.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: Se,
                      children: [
                        (0, e.jsx)(y.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_GroupLocalization_Title",
                          ),
                        }),
                        (0, e.jsx)(y.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_GroupLocalization_Description",
                          ),
                        }),
                        (0, e.jsxs)(X.s, {
                          direction: "row",
                          align: "center",
                          gap: "2",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(k.$, {
                              color: "dull",
                              onClick: () => {
                                (0, Z.jF)(f, F, R);
                              },
                              children: [
                                (0, e.jsx)(o, {}),
                                "\xA0",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_Export_GroupLocalization",
                                ),
                              ],
                            }),
                            (0, e.jsxs)(y.EY, {
                              color: Ve,
                              children: [
                                "(",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_N_Groups",
                                  F.length,
                                ),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(X.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: Se,
                      children: [
                        (0, e.jsx)(y.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Icons_Title",
                          ),
                        }),
                        (0, e.jsx)(y.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Icons_Description",
                          ),
                        }),
                        (0, e.jsx)(X.s, {
                          direction: "row",
                          align: "center",
                          gap: "3",
                          marginTop: "2",
                          marginBottom: "2",
                          children: (0, e.jsx)(J.S, {
                            checked: t,
                            onChange: (c) => s(c),
                            children: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_Options_GenerateIcons",
                                ),
                                (0, e.jsx)("span", {
                                  children: (0, g.we)(
                                    "#AchievementEditor_Bulk_Options_GenerateIcons_Description",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    O && (0, e.jsx)(m.Jt, { onClose: () => re(!1) }),
                  ],
                });
              },
              ae = function (t) {
                const { onClose: s, setHasChanges: f } = t;
                return (0, e.jsx)(P.FU, {
                  onClose: s,
                  setHasChanges: f,
                  children: (0, e.jsx)(fe, {}),
                });
              },
              L = function (t) {
                const { title: s, description: f, children: S } = t;
                return (0, e.jsxs)("div", {
                  className: p.BulkEditSection,
                  children: [
                    (0, e.jsx)("h2", { children: s }),
                    (0, e.jsx)("p", { children: f }),
                    S,
                  ],
                });
              },
              fe = function () {
                const {
                    files: t,
                    hasData: s,
                    acceptedTypes: f,
                    fileInputRef: S,
                    uploadFiles: F,
                    openFilePicker: R,
                    save: O,
                    isSaving: re,
                    saveProgress: Se,
                    saveError: Ve,
                    saveSucceeded: c,
                    onClose: U,
                  } = (0, P.Mt)(),
                  [ne, oe] = (0, j.useState)(void 0);
                return (0, e.jsxs)("div", {
                  className: (0, a.A)(p.Takeover, p.BulkEdit),
                  children: [
                    c &&
                      (0, e.jsx)(v.TM, {
                        hideCancelButton: !0,
                        onOk: U,
                        children: (0, g.we)(
                          "#AchievementEditor_Bulk_Save_Confirm",
                        ),
                      }),
                    (0, e.jsx)(Ge, {}),
                    (0, e.jsxs)("div", {
                      className: p.TakeoverBody,
                      children: [
                        (0, e.jsx)(l.z, {
                          className: p.BulkUploadFileDropBox,
                          accept: f,
                          multiple: !0,
                          fileInputRef: S,
                          onUpload: F,
                          onError: oe,
                          children: (0, e.jsx)("div", {
                            className: p.UploadPlaceholder,
                            children: (0, g.we)(
                              "#AchievementEditor_Bulk_UploadBox",
                            ),
                          }),
                        }),
                        !!ne && (0, e.jsx)(v.r3, { text: ne }),
                        (0, e.jsx)("div", {
                          className: p.ButtonContainer,
                          children: (0, e.jsx)(k.$, {
                            color: "dull",
                            onClick: R,
                            children: (0, g.we)(
                              "#AchievementEditor_Bulk_Upload_SelectFiles",
                            ),
                          }),
                        }),
                        t.length > 0 &&
                          (0, e.jsx)(L, {
                            title: (0, g.we)(
                              "#AchievementEditor_Bulk_Files_Title",
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Files_Description",
                            ),
                            children: (0, e.jsx)(ye, {}),
                          }),
                        s &&
                          (0, e.jsxs)(L, {
                            title: (0, g.we)(
                              "#AchievementEditor_Bulk_Pending_Title",
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Pending_Description",
                            ),
                            children: [
                              (0, e.jsx)(V.az, {
                                className: p.LanguageSelect,
                                background: "dull-7",
                                padding: "2",
                                children: (0, e.jsx)(m.Mq, {}),
                              }),
                              (0, e.jsx)(Y, {}),
                              (0, e.jsx)(u, {}),
                            ],
                          }),
                      ],
                    }),
                    s &&
                      (0, e.jsx)(v.Aj, {
                        pending: re,
                        progress: Se,
                        error: Ve,
                        hideCancel: !0,
                        onSave: O,
                      }),
                  ],
                });
              },
              le = function (t, s, f) {
                if (!t) return !0;
                const S = (re, Se) => (re < Se ? -1 : re > Se ? 1 : 0),
                  F = (0, Z.pC)(t, f).sort((re, Se) => S(re.field, Se.field)),
                  R = ie(s, f).sort((re, Se) => S(re.field, Se.field));
                return !D()(F, R);
              },
              ie = function (t, s) {
                const f = s.reduce((S, F) => ((S[F] = ""), S), {});
                return t.map((S) => ({ ...f, ...S }));
              },
              u = function () {
                const {
                    definitions: t,
                    localization: s,
                    images: f,
                    confirmDelete: S,
                    setConfirmDelete: F,
                  } = (0, P.Mt)(),
                  {
                    csv: R,
                    achievements: O,
                    added: re,
                    modified: Se,
                    unmodified: Ve,
                    deleted: c,
                  } = t,
                  { localization: U } = s ?? {},
                  { appID: ne } = (0, _.L3)(),
                  oe = (0, _.ts)(ne),
                  he = (me) => ge(me, O, U, f, oe),
                  xe = [...Se, ...Ve.filter(he)],
                  we = Ve.filter((me) => !he(me));
                return (0, e.jsxs)("div", {
                  className: p.ResultsContainer,
                  children: [
                    (0, e.jsx)("h3", {
                      children: (0, g.we)(
                        "#AchievementEditor_Bulk_Pending_Achievements",
                      ),
                    }),
                    (0, e.jsx)(w, {}),
                    (0, e.jsxs)("div", {
                      className: p.ImportedAchievements,
                      children: [
                        re &&
                          !!re.length &&
                          (0, e.jsx)(Q, {
                            className: (0, a.A)(p.ChangeBorder, p.Added),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Added_Title",
                              re.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Added_Description",
                            ),
                            children: re.map((me, Fe) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  data: R[me],
                                  localization: U?.[me],
                                  images: f?.[me],
                                },
                                Fe,
                              ),
                            ),
                          }),
                        xe &&
                          !!xe.length &&
                          (0, e.jsx)(Q, {
                            className: (0, a.A)(p.ChangeBorder, p.Modified),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Title",
                              xe.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Description",
                            ),
                            children: xe.map((me, Fe) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  achievement: O[me],
                                  data: R?.[me] || (0, Z.oK)(O[me]),
                                  localization: U?.[me],
                                  images: f?.[me],
                                },
                                Fe,
                              ),
                            ),
                          }),
                        c &&
                          !!c.length &&
                          (0, e.jsx)(Q, {
                            className: (0, a.A)(p.ChangeBorder, p.Deleted),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Removed_Title",
                              c.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Removed_Description",
                            ),
                            headerChildren: (0, e.jsx)(C.j, {
                              cursor: "pointer",
                              maxWidth: "max-content",
                              onClick: () => F(!S),
                              children: (0, e.jsx)(J.S, {
                                variant: "dark",
                                color: "red",
                                checked: S,
                                onChange: (me) => F(me),
                                children: (0, g.we)(
                                  "#AchievementEditor_AchievementCsvImport_Removed_Confirm",
                                ),
                              }),
                            }),
                            children: c.map((me, Fe) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  achievement: O[me],
                                  data: (0, Z.oK)(O[me]),
                                  localization: U?.[me],
                                  images: f?.[me],
                                },
                                Fe,
                              ),
                            ),
                          }),
                        we &&
                          !!we.length &&
                          (0, e.jsx)(A, {
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Title",
                              we.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Description",
                            ),
                            children: we.map((me, Fe) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  achievement: O[me],
                                  data: (0, Z.oK)(O[me]),
                                  localization: U?.[me],
                                  images: f?.[me],
                                },
                                Fe,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                });
              },
              w = function () {
                return (0, e.jsxs)("div", {
                  className: p.LegendContainer,
                  children: [
                    (0, e.jsx)("div", { className: p.LegendChangeIcon }),
                    (0, e.jsx)("p", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementCsvImport_Pending_Legend",
                      ),
                    }),
                  ],
                });
              },
              Y = function () {
                const { groupLocalization: t } = (0, P.Mt)(),
                  { currentLanguage: s } = (0, _.L3)().localization,
                  { csv: f, groups: S, modified: F, unmodified: R } = t ?? {};
                if (!f) return null;
                const O = (re) =>
                  (0, e.jsxs)("div", {
                    className: p.ImportedGroups,
                    children: [
                      (0, e.jsxs)("div", {
                        className: p.TableHeader,
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, g.we)(
                              "#AchievementEditor_GroupCsvImport_Header_GroupID",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, g.we)(
                              "#AchievementEditor_Group_Field_Name",
                            ),
                          }),
                        ],
                      }),
                      re.map((Se) => {
                        const Ve = (0, Z.NJ)(f[Se], S[Se]),
                          c = (0, m.ZM)(S[Se]?.name, s) != (0, m.ZM)(Ve, s);
                        return (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)("div", { children: Se }),
                              (0, e.jsx)("div", {
                                className: (0, a.A)(c && p.ModifiedField),
                                children: (0, e.jsx)(m.VU, { text: Ve }),
                              }),
                            ],
                          },
                          Se,
                        );
                      }),
                    ],
                  });
                return (0, e.jsxs)("div", {
                  className: p.ResultsContainer,
                  children: [
                    (0, e.jsx)("h3", {
                      children: (0, g.we)(
                        "#AchievementEditor_Bulk_Pending_Groups",
                      ),
                    }),
                    (0, e.jsx)(w, {}),
                    (0, e.jsxs)(X.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        !!F?.length &&
                          (0, e.jsx)(ee, {
                            className: (0, a.A)(p.ChangeBorder, p.Modified),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Title",
                              F.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_GroupCsvImport_Modified_Description",
                            ),
                            children: O(F),
                          }),
                        !!R?.length &&
                          (0, e.jsx)(ee, {
                            collapsible: !0,
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Title",
                              R.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_GroupCsvImport_Unmodified_Description",
                            ),
                            children: O(R),
                          }),
                      ],
                    }),
                  ],
                });
              },
              te = function (t) {
                const { title: s, description: f, headerChildren: S } = t;
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(y.EY, {
                      size: "4",
                      contrast: "title",
                      children: s,
                    }),
                    (0, e.jsx)(y.EY, { children: f }),
                    S,
                  ],
                });
              },
              I = function (t) {
                const { className: s, children: f } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.ImportedAchievementsTableContainer, s),
                  children: f,
                });
              },
              Q = function (t) {
                const { children: s, className: f, ...S } = t;
                return (0, e.jsxs)(I, {
                  ...t,
                  children: [
                    (0, e.jsx)("div", {
                      className: p.ImportedAchievementsTableHeader,
                      children: (0, e.jsx)(te, { ...S }),
                    }),
                    (0, e.jsxs)("div", {
                      className: p.ImportedAchievementsTable,
                      children: [(0, e.jsx)(ce, {}), s],
                    }),
                  ],
                });
              },
              A = function (t) {
                const { children: s, className: f, ...S } = t,
                  [F, R] = (0, j.useState)(!0);
                return (0, e.jsxs)(I, {
                  ...t,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, a.A)(
                        p.ImportedAchievementsTableHeader,
                        p.CollapsibleAchievementsTableHeader,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(te, { ...S }),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("div", {
                            className: p.ExpandButton,
                            onClick: () => R(!F),
                            children: (0, e.jsx)(G.DK4, { angle: F ? 90 : 0 }),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, a.A)(
                        p.ImportedAchievementsTable,
                        F && p.Collapsed,
                      ),
                      children: [(0, e.jsx)(ce, {}), s],
                    }),
                  ],
                });
              },
              ce = function () {
                return (0, e.jsxs)("div", {
                  className: p.TableHeader,
                  children: [
                    (0, e.jsx)("div", {}),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_NameDescription",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_ApiName",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_Group",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_SetBy",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_Availability",
                      ),
                    }),
                  ],
                });
              },
              ue = function (t) {
                const {
                    achievement: s,
                    data: f,
                    localization: S,
                    images: F,
                  } = t,
                  {
                    api_name: R,
                    setid: O,
                    archived: re,
                    spoiler: Se,
                    permission: Ve,
                    progress_stat_name: c,
                    progress_stat_min: U,
                    progress_stat_max: ne,
                  } = f ?? {},
                  oe = (0, Z.B6)(
                    s?.display?.name?.token,
                    S?.find((Ye) => Ye.field == "name"),
                  ),
                  he = (0, Z.B6)(
                    s?.display?.desc?.token,
                    S?.find((Ye) => Ye.field == "description"),
                  ),
                  { localization: xe } = (0, _.L3)(),
                  { currentLanguage: we } = xe;
                function me(Ye, Ze, $e) {
                  return (0, a.A)(
                    $e,
                    Ye == Ze && s !== void 0 ? void 0 : p.ModifiedField,
                  );
                }
                const Fe = s?.display?.hidden == "1",
                  be = s?.archived == "1",
                  Qe = me(
                    (0, m.ZM)(s?.display?.name, we),
                    (0, m.ZM)(S ? oe : s?.display?.name, we),
                  ),
                  Je = me(
                    (0, m.ZM)(s?.display?.desc, we),
                    (0, m.ZM)(S ? he : s?.display?.desc, we),
                  );
                return (0, e.jsxs)("div", {
                  className: p.CompactAchievementRow,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        F?.achieved?.image
                          ? (0, e.jsx)(q.O, {
                              image: F?.achieved?.image,
                              size: 32,
                              className: p.ModifiedIcon,
                            })
                          : (0, e.jsx)(q.T, {
                              achievement: s,
                              size: 32,
                              className: p.UnmodifiedIcon,
                            }),
                        F?.unachieved?.image
                          ? (0, e.jsx)(q.O, {
                              image: F?.unachieved?.image,
                              size: 32,
                              className: p.ModifiedIcon,
                            })
                          : (0, e.jsx)(q.T, {
                              achievement: s,
                              achieved: !1,
                              size: 32,
                              className: p.UnmodifiedIcon,
                            }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: p.NameColumn,
                      children: [
                        (0, e.jsx)("div", {
                          className: Qe,
                          children: (0, e.jsx)(m.VU, {
                            text: S ? oe : s?.display?.name,
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: Je,
                          children: (0, e.jsx)(m.VU, {
                            text: S ? he : s?.display?.desc,
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: p.ApiColumn,
                      children: [
                        (0, e.jsx)("div", {
                          className: me(R, s?.name),
                          children: R,
                        }),
                        c &&
                          (0, e.jsxs)("div", {
                            className: p.ProgressColumn,
                            children: [
                              (0, e.jsx)("span", {
                                className: me(c, s?.progress?.value?.operand1),
                                children: c,
                              }),
                              ": ",
                              (0, e.jsx)("span", {
                                className: me(
                                  U.toString(),
                                  s?.progress?.min_val,
                                ),
                                children: U,
                              }),
                              " - ",
                              (0, e.jsx)("span", {
                                className: me(
                                  ne.toString(),
                                  s?.progress?.max_val,
                                ),
                                children: ne,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: me(O, s?.groupid ?? ""),
                      children: (0, e.jsx)(B, {
                        groupid: O,
                        oldgroupid: s?.groupid,
                        isnew: !s,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: me(Ve, s?.permission ?? _.yu.Client),
                      children: _.yu[Ve],
                    }),
                    (0, e.jsxs)("div", {
                      className: p.VisibilityColumn,
                      children: [
                        (Se || Fe) &&
                          (0, e.jsx)("div", {
                            className: me(Se, Fe),
                            children: Se
                              ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(h, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Spoiler",
                                    ),
                                  ],
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(x, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Visible",
                                    ),
                                  ],
                                }),
                          }),
                        (re || be) &&
                          (0, e.jsx)("div", {
                            className: me(re, be),
                            children: re
                              ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)($, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Archived",
                                    ),
                                  ],
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(E, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Dearchived",
                                    ),
                                    " ",
                                  ],
                                }),
                          }),
                      ],
                    }),
                  ],
                });
              },
              B = function (t) {
                const { groupid: s, oldgroupid: f, isnew: S } = t,
                  { appID: F } = (0, _.L3)(),
                  R = (0, _.Q4)(F),
                  O = !s || s == "" ? v.z0 : s,
                  re = (0, v.fw)(O, R?.[O]),
                  Se = (0, v.fw)(f, R?.[f]),
                  Ve =
                    O == v.z0
                      ? (0, g.we)(
                          "#AchievementEditor_Group_CoreGameAchievements_Heading",
                        )
                      : (0, e.jsx)(m.VU, { text: R?.[O]?.name });
                if (re.visible) {
                  if ((S || O != f) && re.hasprogress)
                    return (0, e.jsxs)(ve.he, {
                      className: p.Warning,
                      toolTipContent: (0, g.we)(
                        "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                      ),
                      style: { alignItems: "baseline" },
                      children: [
                        (0, e.jsx)(v.BA, { className: p.WarningGlobeIcon }),
                        Ve,
                      ],
                    });
                } else
                  return Se?.visible
                    ? (0, e.jsxs)(ve.he, {
                        className: p.Warning,
                        toolTipContent: (0, g.we)(
                          "#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement",
                        ),
                        style: { alignItems: "baseline" },
                        children: [(0, e.jsx)(h, { hideTitle: !0 }), Ve],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(h, { className: p.UnreleasedText }),
                          Ve,
                        ],
                      });
                return (0, e.jsx)(e.Fragment, { children: Ve });
              },
              ee = function (t) {
                const {
                    title: s,
                    description: f,
                    icon: S,
                    collapsible: F = !1,
                    className: R,
                    children: O,
                  } = t,
                  [re, Se] = (0, j.useState)(F);
                return (0, e.jsxs)("div", {
                  className: (0, a.A)(p.ResultsSection, R),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, a.A)(
                        p.ResultsSectionHeader,
                        F && p.CollapsibleResultsSectionHeader,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)(X.s, {
                              direction: "row",
                              gap: "1",
                              align: "center",
                              children: [
                                S,
                                (0, e.jsx)(y.EY, {
                                  size: "4",
                                  contrast: "title",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, e.jsx)(y.EY, { children: f }),
                          ],
                        }),
                        F &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("div", {
                              className: p.ExpandButton,
                              onClick: () => Se(!re),
                              children: (0, e.jsx)(G.DK4, {
                                angle: re ? 90 : 0,
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, a.A)(
                        p.ResultsSectionBody,
                        re && p.Collapsed,
                      ),
                      children: O,
                    }),
                  ],
                });
              },
              ye = function () {
                const { errors: t, successes: s } = (0, P.Mt)();
                return t.length == 0 && s.length == 0
                  ? null
                  : (0, e.jsxs)(X.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        t.length > 0 &&
                          (0, e.jsx)(ee, {
                            icon: (0, e.jsx)(K, {}),
                            title: (0, g.Yp)(
                              "#AchievementEditor_Bulk_Errors_Count_Title",
                              t.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Errors_Description",
                            ),
                            children: t.map((f) =>
                              (0, e.jsx)(N, { result: f }, f.filename),
                            ),
                          }),
                        s.length > 0 &&
                          (0, e.jsx)(ee, {
                            collapsible: !0,
                            title: (0, g.Yp)(
                              "#AchievementEditor_Bulk_Successes_Count_Title",
                              s.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Successes_Description",
                            ),
                            children: s.map((f) =>
                              (0, e.jsx)(
                                "div",
                                {
                                  className: p.FileSuccessRow,
                                  children: (0, e.jsx)(de, { result: f }),
                                },
                                f.filename,
                              ),
                            ),
                          }),
                      ],
                    });
              },
              de = function (t) {
                const { result: s } = t,
                  { filename: f, imageErrors: S } = s,
                  { removeFile: F } = (0, P.Mt)(),
                  R = s.image?.result?.image ?? S?.[0]?.image,
                  O = R
                    ? (0, e.jsx)("div", {
                        className: p.FileImage,
                        children: (0, e.jsx)("img", {
                          src: R.image,
                          alt: R.filenameWithoutExtension,
                        }),
                      })
                    : (0, e.jsx)(V.az, {
                        height: "24px",
                        aspectRatio: "1/1",
                        children: (0, e.jsx)(G.ZHH, {}),
                      });
                return (0, e.jsxs)(X.s, {
                  direction: "row",
                  gap: "1",
                  padding: "1",
                  justify: "between",
                  align: "center",
                  background: "dull-8",
                  children: [
                    (0, e.jsxs)(X.s, {
                      direction: "row",
                      gap: "2",
                      justify: "start",
                      align: "center",
                      children: [
                        O,
                        (0, e.jsx)(y.EY, {
                          weight: "heavy",
                          size: "4",
                          contrast: "title",
                          whiteSpace: "pre-wrap",
                          children: f,
                        }),
                      ],
                    }),
                    (0, e.jsx)(v.et, { onClick: () => F(f) }),
                  ],
                });
              },
              W = function (t) {
                const {
                  kind: s,
                  errors: f,
                  csvErrors: S,
                  imageErrors: F,
                } = t.result;
                if (S) {
                  const R =
                    s == "grouplocalization"
                      ? (0, g.we)(
                          "#AchievementEditor_GroupCsvImport_Header_GroupID",
                        )
                      : (0, g.we)(
                          "#AchievementEditor_Achievement_Edit_ApiName",
                        );
                  return (0, e.jsx)(se, {
                    keyHeader: R,
                    errorStrings: f,
                    csvErrors: S,
                  });
                }
                return F
                  ? (0, e.jsxs)("div", {
                      children: [
                        f &&
                          f.map((R, O) =>
                            (0, e.jsx)(
                              "div",
                              { className: p.FileError, children: R },
                              O,
                            ),
                          ),
                        F.map((R, O) =>
                          (0, e.jsx)(
                            "div",
                            { className: p.FileError, children: R.error },
                            O,
                          ),
                        ),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      children:
                        f &&
                        f.map((R, O) =>
                          (0, e.jsx)(
                            "div",
                            { className: p.FileError, children: R },
                            O,
                          ),
                        ),
                    });
              },
              N = function (t) {
                const { result: s } = t;
                return (0, e.jsxs)("div", {
                  className: p.FileErrorList,
                  children: [
                    (0, e.jsx)(de, { result: s }),
                    (0, e.jsx)(W, { result: s }),
                  ],
                });
              },
              se = function (t) {
                const { keyHeader: s, errorStrings: f, csvErrors: S } = t;
                return (0, e.jsxs)("div", {
                  className: p.CsvErrorsTable,
                  children: [
                    (0, e.jsxs)("div", {
                      className: p.TableHeader,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Line",
                          ),
                        }),
                        (0, e.jsx)("div", { children: s }),
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Field",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Input",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Error",
                          ),
                        }),
                      ],
                    }),
                    f &&
                      f.map((F, R) =>
                        (0, e.jsx)(
                          "div",
                          { className: p.FileError, children: F },
                          R,
                        ),
                      ),
                    S.sort(i).map((F, R) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          children: [
                            (0, e.jsx)("div", { children: F.line }),
                            (0, e.jsx)("div", { children: F.key }),
                            (0, e.jsx)("div", { children: F.field }),
                            (0, e.jsx)("div", { children: F.input }),
                            (0, e.jsx)("div", { children: F.message }),
                          ],
                        },
                        `${F.key}.${F.field}.${R}`,
                      ),
                    ),
                  ],
                });
              },
              o = function (t) {
                const { className: s } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  children: (0, e.jsx)(G.MwB, {}),
                });
              },
              r = function (t) {
                const { className: s } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  children: (0, e.jsx)(G.f5X, {}),
                });
              },
              h = function (t) {
                const { className: s, hideTitle: f = !1 } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  title: f
                    ? void 0
                    : (0, g.we)("#AchievementEditor_Achievement_Edit_Hidden"),
                  children: (0, e.jsx)(b.ZyV, {}),
                });
              },
              x = function (t) {
                const { className: s, hideTitle: f = !1 } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  title: f
                    ? void 0
                    : (0, g.we)("#AchievementEditor_Achievement_Edit_Visible"),
                  children: (0, e.jsx)(b.rxV, {}),
                });
              },
              $ = function (t) {
                const { className: s, hideTitle: f = !1 } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  title: f
                    ? void 0
                    : (0, g.we)("#AchievementEditor_Achievement_Edit_Archived"),
                  children: (0, e.jsx)(G.c_I, {}),
                });
              },
              E = function (t) {
                const { className: s } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  children: (0, e.jsx)(G.$VH, {}),
                });
              },
              K = function (t) {
                const { className: s } = t;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(p.AchievementDetailIcon, s),
                  children: (0, e.jsx)(G.eTF, { color: "var(--color-error)" }),
                });
              },
              i = function (t, s) {
                let f = (t.line ?? 0) - (s.line ?? 0);
                return (
                  f != 0 ||
                    ((f = t.key.localeCompare(s.key)), f != 0) ||
                    (f = t.field.localeCompare(s.field)),
                  f
                );
              };
            n.d(Ne, { V: () => ae });
            var e = n(7850),
              X = n(68031),
              y = n(15252),
              k = n(75083),
              J = n(85367),
              V = n(60351),
              _ = n(3959),
              j = n(90626),
              b = n(249),
              G = n(36118),
              a = n(36707),
              g = n(18210),
              p = n(70427),
              M = n.n(p),
              Z = n(12157),
              q = n(65678),
              m = n(1421),
              P = n(77437),
              v = n(82006),
              l = n(91988),
              z = n(33551),
              D = n.n(z),
              C = n(86946),
              ve = n(71421),
              T = d([_, Z, q, m, P, v]);
            ([_, Z, q, m, P, v] = T.then ? (await T)() : T), H();
          } catch (ge) {
            H(ge);
          }
        });
      },
      77437: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let j = function (u) {
                return u.errors?.length > 0 || u.fieldErrors?.length > 0;
              },
              g = function (u) {
                const w = u.toUpperCase(),
                  Y = [a, G].find((I) => w.endsWith(I));
                return {
                  apiName: Y ? u.substring(0, u.length - Y.length) : u,
                  isAchieved: Y != a,
                };
              },
              m = function (u, w) {
                return w.reduce((Y, te) => {
                  const I = q.includes(te.kind);
                  return [
                    ...Y.filter(
                      (A) =>
                        A.filename != te.filename && !(I && A.kind == te.kind),
                    ),
                    te,
                  ];
                }, u);
              },
              P = function (u) {
                return {
                  csv: {},
                  achievements: (0, J.K1)(u),
                  added: [],
                  modified: [],
                  deleted: [],
                  unmodified: u.map((w) => w.name),
                };
              },
              v = function (u, w) {
                const Y = u.find(
                  (te) => te.success && te.definitions,
                )?.definitions;
                return Y
                  ? {
                      csv: Y.csv ?? {},
                      achievements: Y.achievements ?? (0, J.K1)(w),
                      added: Y.added ?? [],
                      modified: Y.modified ?? [],
                      deleted: Y.deleted ?? [],
                      unmodified: Y.unmodified ?? [],
                    }
                  : P(w);
              },
              l = function (u, w) {
                const Y = u.find(
                  (I) => I.success && I.localization,
                )?.localization;
                if (!Y) return;
                const te = Object.keys(Y.localization ?? {})
                  .filter((I) => !z(I, w))
                  .reduce((I, Q) => ((I[Q] = Y.localization[Q]), I), {});
                return { ...Y, localization: te };
              },
              z = function (u, w) {
                if (!(u in w.achievements) && !(u in w.csv))
                  return (0, k.we)(
                    "#AchievementEditor_Localization_Error_NoAchievement",
                  );
                if (w.deleted.includes(u))
                  return (0, k.we)(
                    "#AchievementEditor_Localization_Error_MissingFromDefinitions",
                  );
              },
              D = function (u, w) {
                return !u.success || !u.localization
                  ? []
                  : Object.keys(u.localization.localization ?? {})
                      .map((Y) => ({ apiName: Y, message: z(Y, w) }))
                      .filter((Y) => !!Y.message)
                      .map((Y) => ({
                        key: Y.apiName,
                        field: "api_name",
                        message: Y.message,
                      }));
              },
              C = function (u) {
                return u.find((w) => w.success && w.groupLocalization)
                  ?.groupLocalization;
              },
              ve = function (u, w) {
                if (u in w.achievements || u in w.csv) return u;
                const Y = u.toUpperCase();
                return (
                  [...Object.keys(w.achievements), ...Object.keys(w.csv)].find(
                    (I) => I.toUpperCase() == Y,
                  ) ?? u
                );
              },
              T = function (u, w) {
                if (!u.success || !u.image) return;
                const Y = ve(u.image.apiName, w);
                if (!(Y in w.achievements) && !(Y in w.csv))
                  return (0, k.we)(
                    "#AchievementEditor_Image_Error_NoAchievement",
                    u.image.apiName,
                  );
                if (w.deleted.includes(Y))
                  return (0, k.we)(
                    "#AchievementEditor_Image_Error_AchievementMissingFromCsv",
                    Y,
                  );
              },
              ge = function (u, w, Y) {
                const te = u
                    .filter((Q) => Q.success && Q.image && !T(Q, w))
                    .map((Q) => ({
                      ...Q.image,
                      apiName: ve(Q.image.apiName, w),
                    })),
                  I = new Set(te.map((Q) => Q.apiName));
                return Array.from(I).reduce((Q, A) => {
                  const ce = te.filter((ye) => ye.apiName == A),
                    ue = ce.filter((ye) => ye.isAchieved).pop(),
                    B = ce.filter((ye) => !ye.isAchieved).pop(),
                    ee = Y ? ue?.generatedUnachieved : void 0;
                  return (
                    (Q[A] = {
                      achieved: ue?.result,
                      unachieved:
                        B?.result ??
                        (ee
                          ? { success: !0, filename: "GENERATED", image: ee }
                          : void 0),
                    }),
                    Q
                  );
                }, {});
              },
              Ge = function (u, w) {
                const Y = (Q) => T(Q, w),
                  te = (Q) => D(Q, w),
                  I = (Q) => !!Y(Q) || te(Q).length > 0;
                return {
                  errors: [
                    ...u.filter((Q) => !Q.success),
                    ...u.filter(I).map((Q) => {
                      const A = Y(Q);
                      return {
                        ...Q,
                        success: !1,
                        imageErrors: A
                          ? [{ ...Q.image.result, success: !1, error: A }]
                          : void 0,
                        csvErrors: A ? void 0 : te(Q),
                      };
                    }),
                  ],
                  successes: u.filter((Q) => Q.success && !I(Q)),
                };
              },
              ae = function (u, w, Y, te) {
                const I = (ee) => ({
                    icon: Y[ee]?.achieved?.image?.image,
                    icon_gray: Y[ee]?.unachieved?.image?.image,
                  }),
                  Q = (ee) => {
                    const { statID: ye, bitID: de } = u.achievements[ee];
                    return { statID: ye, bitID: de };
                  },
                  A = u.added.map((ee) => ({
                    achievement: (0, J.f4)(u.csv[ee], w?.localization?.[ee]),
                    ...I(ee),
                  })),
                  ue = Array.from(
                    new Set([
                      ...u.modified,
                      ...Object.keys(w?.localization ?? {}).filter(
                        (ee) => !u.added.includes(ee) && ee in u.achievements,
                      ),
                    ]),
                  ).map((ee) => {
                    const ye = u.achievements[ee];
                    return {
                      ...Q(ee),
                      achievement: (0, J.f4)(
                        u.csv[ee] ?? (0, J.oK)(ye),
                        w?.localization?.[ee],
                        ye,
                      ),
                      ...I(ee),
                    };
                  }),
                  B = Object.keys(Y)
                    .filter((ee) => u.unmodified.includes(ee))
                    .map((ee) => ({ ...Q(ee), ...I(ee), name: ee }));
                return {
                  addOrUpdate: [...A, ...ue, ...B],
                  delete: te
                    ? u.deleted.map((ee) => ({ ...Q(ee), name: ee }))
                    : [],
                };
              },
              L = function (u) {
                return (u?.modified ?? []).map((w) => {
                  const Y = u.groups[w];
                  return {
                    groupid: w,
                    group: { ...Y, name: (0, J.NJ)(u.csv[w], Y) },
                  };
                });
              },
              le = function () {
                return (0, y.useContext)(fe);
              },
              ie = function (u) {
                const { onClose: w, setHasChanges: Y, children: te } = u,
                  { appID: I } = (0, X.L3)(),
                  Q = (0, X.kb)(I),
                  A = (0, y.useMemo)(() => Q ?? [], [Q]),
                  ce = (0, X.FM)(I),
                  ue = (0, X.J3)(I),
                  B = (0, X.vd)(I),
                  ee = (0, X.SN)(I),
                  ye = (0, X.Er)(I),
                  [de, W] = (0, y.useState)([]),
                  [N, se] = (0, y.useState)(!0),
                  [o, r] = (0, y.useState)(!1),
                  [h, x] = (0, y.useState)(!1),
                  [$, E] = (0, y.useState)(void 0),
                  K = (0, y.useRef)(void 0),
                  i = (0, y.useMemo)(() => v(de, A), [de, A]),
                  t = (0, y.useMemo)(() => l(de, i), [de, i]),
                  s = (0, y.useMemo)(() => C(de), [de]),
                  f = (0, y.useMemo)(() => ge(de, i, N), [de, i, N]),
                  { errors: S, successes: F } = (0, y.useMemo)(
                    () => Ge(de, i),
                    [de, i],
                  ),
                  R = de.some((c) => c.success);
                (0, y.useEffect)(() => {
                  Y(R);
                }, [R, Y]);
                const Ve = {
                  files: de,
                  definitions: i,
                  localization: t,
                  groupLocalization: s,
                  images: f,
                  errors: S,
                  successes: F,
                  hasData: R,
                  generateUnachievedImages: N,
                  setGenerateUnachievedImages: se,
                  confirmDelete: o,
                  setConfirmDelete: r,
                  uploadFiles: async (c) => {
                    const U = [];
                    for (const ne of c) {
                      const oe = M.find((he) => he.accept.includes(ne.type));
                      if (!oe) {
                        U.push({
                          filename: ne.name,
                          success: !1,
                          errors: [
                            (0, k.we)(
                              "#AchievementEditor_Image_Error_UnknownContentType",
                            ),
                          ],
                        });
                        continue;
                      }
                      U.push(
                        await oe.process(ne, {
                          groups: ce,
                          stats: ue,
                          achievements: A,
                          validLanguages: B,
                        }),
                      );
                    }
                    W((ne) => m(ne, U)), K.current && (K.current.value = "");
                  },
                  removeFile: (c) =>
                    W((U) => U.filter((ne) => ne.filename != c)),
                  openFilePicker: () => K.current?.click(),
                  fileInputRef: K,
                  acceptedTypes: Z,
                  save: async () => {
                    const c = L(s),
                      U = ae(i, t, f, o),
                      ne = c.length,
                      oe = ne + (0, X.re)(U);
                    E(void 0);
                    try {
                      await ye.mutateAsync({
                        groups: c,
                        onProgress: (he) => E({ ...he, total: oe }),
                      }),
                        await ee.mutateAsync({
                          ...U,
                          onProgress: (he) =>
                            E({
                              ...he,
                              completed: ne + he.completed,
                              total: oe,
                            }),
                        }),
                        x(!0);
                    } catch {}
                  },
                  isSaving: ee.isPending || ye.isPending,
                  saveProgress: $,
                  saveError: ye.error?.message ?? ee.error?.message,
                  saveSucceeded: h,
                  onClose: w,
                };
                return (0, e.jsx)(fe, { value: Ve, children: te });
              };
            n.d(Ne, { FU: () => ie, Mt: () => le });
            var e = n(7850),
              X = n(3959),
              y = n(90626),
              k = n(18210),
              J = n(12157),
              V = n(50233),
              _ = d([X, J]);
            [X, J] = _.then ? (await _)() : _;
            async function b(u, w) {
              const Y = await (0, J.Wk)(u);
              if (Y.errors)
                return { filename: u.name, success: !1, errors: Y.errors };
              if ((0, J.Yc)(Y)) {
                const { groups: te, stats: I, achievements: Q } = w,
                  A = (0, J.Rr)(Y, te, I, Q),
                  ce = j(A);
                return {
                  filename: u.name,
                  kind: "definitions",
                  success: !ce,
                  errors: A.errors,
                  csvErrors: A.fieldErrors,
                  definitions: ce ? void 0 : A,
                };
              }
              if ((0, J.Lq)(Y)) {
                const te = (0, J.EO)(Y),
                  I = j(te);
                return {
                  filename: u.name,
                  kind: "localization",
                  success: !I,
                  errors: te.errors,
                  csvErrors: te.fieldErrors,
                  localization: I ? void 0 : te,
                };
              }
              if ((0, J.JP)(Y)) {
                const { groups: te, validLanguages: I } = w,
                  Q = (0, J.OB)(Y, te, I),
                  A = j(Q);
                return {
                  filename: u.name,
                  kind: "grouplocalization",
                  success: !A,
                  errors: Q.errors,
                  csvErrors: Q.fieldErrors,
                  groupLocalization: A ? void 0 : Q,
                };
              }
              return {
                filename: u.name,
                success: !1,
                errors: [
                  (0, k.we)("#AchievementEditor_Bulk_CsvHandlerNotFound"),
                ],
              };
            }
            const G = "_ACHIEVED",
              a = "_UNACHIEVED";
            async function p(u) {
              const Y = (await (0, V.Tc)({ files: [u], forceSquare: !0 }))[0];
              if (!Y.success)
                return {
                  filename: u.name,
                  kind: "image",
                  success: !1,
                  imageErrors: [Y],
                };
              const { apiName: te, isAchieved: I } = g(
                  Y.image.filenameWithoutExtension,
                ),
                Q = I
                  ? {
                      image: await (0, V.I7)(Y.image.image),
                      imageType: V.bi,
                      filenameWithoutExtension: "GENERATED",
                    }
                  : void 0;
              return {
                filename: u.name,
                kind: "image",
                success: !0,
                image: {
                  apiName: te,
                  isAchieved: I,
                  result: Y,
                  generatedUnachieved: Q,
                },
              };
            }
            const M = [
                { accept: ["text/csv"], process: b },
                { accept: ["image/png", "image/jpeg"], process: p },
              ],
              Z = Array.from(new Set(M.flatMap((u) => u.accept))),
              q = ["definitions", "localization", "grouplocalization"],
              fe = (0, y.createContext)(null);
            H();
          } catch (j) {
            H(j);
          }
        });
      },
      12157: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let p = function (i) {
                return i.reduce((t, s) => ((t[s.name] = s), t), {});
              },
              M = function (i) {
                const { groups: t, stats: s, achievements: f } = i,
                  S = new Set(t.map((F) => F.groupid));
                return G.superRefine((F, R) => {
                  if (
                    (F.setid &&
                      !S.has(F.setid) &&
                      O(
                        "setid",
                        (0, V.we)(
                          "#AchievementEditor_Validator_Error_GroupDoesNotExist",
                        ),
                      ),
                    F.progress_stat_name === void 0 ||
                      F.progress_stat_name == "")
                  )
                    return;
                  function O(Se, Ve) {
                    R.addIssue({
                      code: "custom",
                      path: [Se],
                      input: F[Se],
                      message: Ve,
                    });
                  }
                  const re = s.find((Se) => Se.name == F.progress_stat_name);
                  if (re === void 0) {
                    O(
                      "progress_stat_name",
                      (0, V.we)(
                        "#AchievementEditor_Validator_Error_StatDoesNotExist",
                      ),
                    );
                    return;
                  }
                  F.permission != (re.permission ?? k.yu.Client) &&
                    O(
                      "permission",
                      (0, V.we)(
                        "#AchievementEditor_Validator_Error_AchievementStatDifferentPermissions",
                      ),
                    ),
                    re.type == "INT" &&
                      (y.Whr().safeParse(F.progress_stat_min).success ||
                        O(
                          "progress_stat_min",
                          (0, V.we)(
                            "#AchievementEditor_Validator_Error_MinMaxMustBeInteger",
                          ),
                        ),
                      y.Whr().safeParse(F.progress_stat_max).success ||
                        O(
                          "progress_stat_max",
                          (0, V.we)(
                            "#AchievementEditor_Validator_Error_MinMaxMustBeInteger",
                          ),
                        ));
                  {
                    const Se =
                        re.type == "INT" ? y.ZSL.zH.int32 : y.ZSL.zH.float32,
                      Ve = [
                        y.auy.number().default(Se[0]).parse(re.min),
                        y.auy.number().default(Se[1]).parse(re.max),
                      ],
                      c = [
                        y.aig().parse(F.progress_stat_min),
                        y.aig().parse(F.progress_stat_max),
                      ];
                    c[0] < Ve[0] &&
                      O(
                        "progress_stat_min",
                        (0, V.we)(
                          "#AchievementEditor_Validator_Error_MinLessThanStatMin",
                        ),
                      ),
                      c[1] > Ve[1] &&
                        O(
                          "progress_stat_max",
                          (0, V.we)(
                            "#AchievementEditor_Validator_Error_MaxGreaterThanStatMax",
                          ),
                        ),
                      c[0] >= c[1] &&
                        O(
                          "progress_stat_max",
                          (0, V.we)(
                            "#AchievementEditor_Validator_Error_MinGreaterThanMax",
                          ),
                        );
                  }
                });
              },
              Z = function (i, t, s, f) {
                const S = i.reduce((F, R) => {
                  const O = String(R[s]);
                  return (F[O] = (F[O] ?? 0) + 1), F;
                }, {});
                i.forEach((F, R) => {
                  S[String(F[s])] > 1 &&
                    t.addIssue({
                      code: "custom",
                      path: [R, s],
                      input: F[s],
                      message: f,
                    });
                });
              },
              q = function (i) {
                const { stats: t, achievements: s } = i;
                return y
                  .YOg(M(i))
                  .superRefine((f, S) =>
                    Z(
                      f,
                      S,
                      "api_name",
                      (0, V.we)(
                        "#AchievementEditor_AchievementCsvImport_Error_DuplicateApiName",
                      ),
                    ),
                  )
                  .transform((f) => {
                    const S = f.map((re) => re.api_name),
                      F = f.reduce(
                        (re, Se) => ((re[Se.api_name] = Se), re),
                        {},
                      ),
                      R = p(s);
                    let O = {
                      csv: F,
                      achievements: R,
                      added: S.filter((re) => !s.some((Se) => Se.name == re)),
                      deleted: s
                        .map((re) => re.name)
                        .filter((re) => !S.includes(re)),
                      modified: [],
                      unmodified: [],
                    };
                    return S.filter(
                      (re) => !O.added.includes(re) && !O.deleted.includes(re),
                    ).reduce(
                      (re, Se) => (
                        C(F[Se], R[Se])
                          ? re.unmodified.push(Se)
                          : re.modified.push(Se),
                        re
                      ),
                      O,
                    );
                  });
              },
              m = function (i) {
                return {
                  api_name: i.name,
                  setid: i.groupid ?? "",
                  permission: i.permission ?? k.yu.Client,
                  spoiler: i.display?.hidden == "1",
                  archived: i.archived == "1",
                  progress_stat_name: i.progress?.value?.operand1 ?? "",
                  progress_stat_min: parseFloat(i.progress?.min_val ?? "0"),
                  progress_stat_max: parseFloat(i.progress?.max_val ?? "0"),
                };
              },
              P = function (i, t) {
                if (!i) return {};
                const s = (0, j.II)(i, t),
                  { token: f, ...S } = s;
                return S;
              },
              v = function (i, t) {
                const { api_name: s, field: f, ...S } = t ?? {};
                return { token: i, ...S };
              },
              l = function (i) {
                return i.reduce((t, s) => ((t[s] = ""), t), {});
              },
              z = function (i, t) {
                const s = l(t);
                return [
                  {
                    api_name: i.name,
                    field: "name",
                    ...s,
                    ...P(i.display?.name, t),
                  },
                  {
                    api_name: i.name,
                    field: "description",
                    ...s,
                    ...P(i.display?.desc, t),
                  },
                ];
              },
              C = function (i, t) {
                return X()(i, m(t));
              },
              ve = function () {
                return {
                  api_name: (0, V.we)("#AchievementEditor_Csv_Hint_ApiName"),
                  setid: (0, V.we)("#AchievementEditor_Csv_Hint_GroupID"),
                  permission: (0, V.we)(
                    "#AchievementEditor_Csv_Hint_Permission",
                    k.l7.join(", "),
                  ),
                  spoiler: (0, V.we)("#AchievementEditor_Csv_Hint_Bool"),
                  archived: (0, V.we)("#AchievementEditor_Csv_Hint_Bool"),
                  progress_stat_name: (0, V.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatName",
                  ),
                  progress_stat_min: (0, V.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatMin",
                  ),
                  progress_stat_max: (0, V.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatMax",
                  ),
                };
              },
              T = function () {
                return {
                  api_name: (0, V.we)("#AchievementEditor_Csv_Hint_LocApiName"),
                  field: (0, V.we)("#AchievementEditor_Csv_Hint_LocField"),
                  setid: (0, V.we)("#AchievementEditor_Csv_Hint_LocGroupID"),
                };
              },
              ge = function (i, t, s) {
                const f = t.reduce(
                  (S, F) => ((S[F] = s[F] ? `${F} (${s[F]})` : F), S),
                  {},
                );
                return {
                  fields: t.map((S) => f[S]),
                  rows: i.map((S) =>
                    Object.keys(S).reduce(
                      (F, R) => ((F[f[R] ?? R] = S[R]), F),
                      {},
                    ),
                  ),
                };
              },
              Ge = function (i) {
                return i.replace(/\s*\(.*$/, "").trim();
              },
              fe = function () {
                return [
                  {
                    api_name: L[0],
                    setid: "",
                    permission: k.yu.Client,
                    spoiler: !1,
                    archived: !1,
                    progress_stat_name: "",
                    progress_stat_min: 0,
                    progress_stat_max: 0,
                  },
                  {
                    api_name: L[1],
                    setid: "",
                    permission: k.yu.Client,
                    spoiler: !0,
                    archived: !1,
                    progress_stat_name: "",
                    progress_stat_min: 0,
                    progress_stat_max: 0,
                  },
                ];
              },
              le = function (i) {
                const t = l(i),
                  s = [
                    {
                      name: "First Victory",
                      description: "Win your first match.",
                    },
                    {
                      name: "100 Wins",
                      description: "Win 100 different matches.",
                    },
                  ];
                return L.map((f, S) => [
                  { api_name: f, field: "name", ...t, english: s[S].name },
                  {
                    api_name: f,
                    field: "description",
                    ...t,
                    english: s[S].description,
                  },
                ]);
              },
              ie = function (i, t) {
                const s = `${i}-achievements-definitions.csv`,
                  f = (t.length > 0 ? t.map(m) : fe()).map((R) => ({
                    ...R,
                    permission: k.yu[R.permission ?? k.yu.Client],
                  })),
                  { fields: S, rows: F } = ge(f, Object.keys(G.shape), ve());
                J.g.WriteCSVToFile(F, s, !0, S);
              },
              u = function (i, t, s) {
                const f = `${i}-achievements-localization.csv`,
                  S = (t.length > 0 ? t.map((O) => z(O, s)) : le(s)).reduce(
                    (O, re) => (O.push(...re), O),
                    [],
                  ),
                  { fields: F, rows: R } = ge(
                    S,
                    [...Object.keys(a.shape), ...s],
                    T(),
                  );
                J.g.WriteCSVToFile(R, f, !0, F);
              },
              w = function (i, t, s) {
                if (!t) return {};
                const f = t.find((O) => O.field == "name"),
                  S = t.find((O) => O.field == "description"),
                  F = (0, _.EV)(
                    s?.display?.name?.token,
                    s?.name,
                    "name",
                    i ?? s?.name,
                  ),
                  R = (0, _.EV)(
                    s?.display?.desc?.token,
                    s?.name,
                    "desc",
                    i ?? s?.name,
                  );
                return {
                  name: f ? v(F, f) : void 0,
                  desc: S ? v(R, S) : void 0,
                };
              },
              Y = function (i, t, s) {
                return {
                  name: i.api_name,
                  groupid: i.setid,
                  permission: i.permission,
                  archived: i.archived ? "1" : "0",
                  display: {
                    hidden: i.spoiler ? "1" : "0",
                    name: void 0,
                    desc: void 0,
                    icon: void 0,
                    icon_gray: void 0,
                    ...w(i?.api_name, t, s),
                  },
                  progress: i.progress_stat_name
                    ? {
                        value: {
                          operation: "",
                          operand1: i.progress_stat_name,
                        },
                        min_val: i.progress_stat_min.toString(),
                        max_val: i.progress_stat_max.toString(),
                      }
                    : void 0,
                };
              },
              te = function (i, t) {
                const s = y.auy.number().safeParse(t.path[0])?.data;
                return s !== void 0 &&
                  Number.isInteger(s) &&
                  s >= 0 &&
                  s < i.data.length
                  ? s
                  : void 0;
              },
              I = function (i, t, s) {
                const f = te(i, t),
                  S = i.data[f],
                  F = t.path.length > 1 ? t.path[1] : s;
                return {
                  line: f + 2,
                  key: S[s],
                  field: F,
                  input: F in S ? S[F] : "",
                  message: t.message,
                };
              },
              Q = function (i, t, s) {
                const f = (S) => S.path.length > 1 && te(i, S) !== void 0;
                return {
                  errors: t?.filter((S) => !f(S)).map((S) => S.message),
                  fieldErrors: t?.filter(f).map((S) => I(i, S, s)),
                };
              },
              A = function (i) {
                const t = new Set(i.fields);
                return Object.keys(G.shape).every((s) => t.has(s));
              },
              ce = function (i, t, s, f) {
                const F = q({ groups: t, stats: s, achievements: f }).safeParse(
                  i.data,
                );
                return { ...F.data, ...Q(i, F.error?.issues, "api_name") };
              },
              ue = function (i) {
                const t = new Set(i.fields);
                return Object.keys(a.shape).every((s) => t.has(s));
              },
              B = function (i) {
                const s = y.YOg(g).safeParse(i.data);
                return {
                  localization:
                    s.data?.reduce(
                      (f, S) => (
                        S.api_name in f || (f[S.api_name] = []),
                        f[S.api_name].push(S),
                        f
                      ),
                      {},
                    ) ?? {},
                  ...Q(i, s.error?.issues, "api_name"),
                };
              },
              de = function (i) {
                return i.reduce((t, s) => ((t[s.groupid] = s), t), {});
              },
              W = function (i) {
                const t = i?.name;
                return typeof t == "string" ? { english: t } : (t ?? {});
              },
              N = function (i) {
                return Object.keys(i)
                  .filter((t) => t == "token" || !!i[t])
                  .reduce((t, s) => ((t[s] = i[s]), t), {});
              },
              se = function (i, t) {
                return { setid: i.groupid, ...l(t), ...P(i.name, t) };
              },
              o = function (i, t) {
                const { setid: s, ...f } = i;
                return N({ ...W(t), ...f });
              },
              r = function (i, t) {
                return X()(o(i, t), N(W(t)));
              },
              h = function (i) {
                const { groups: t, validLanguages: s } = i,
                  f = new Set(t.map((S) => S.groupid));
                return ye.superRefine((S, F) => {
                  function R(O, re) {
                    F.addIssue({
                      code: "custom",
                      path: [O],
                      input: S[O],
                      message: re,
                    });
                  }
                  S.setid == _.z0
                    ? R(
                        "setid",
                        (0, V.we)(
                          "#AchievementEditor_GroupCsvImport_Error_DefaultGroup",
                        ),
                      )
                    : f.has(S.setid) ||
                      R(
                        "setid",
                        (0, V.we)(
                          "#AchievementEditor_Validator_Error_GroupDoesNotExist",
                        ),
                      ),
                    Object.keys(S)
                      .filter((O) => O != "setid" && !s.includes(O))
                      .forEach((O) =>
                        R(
                          O,
                          (0, V.we)(
                            "#AchievementEditor_GroupCsvImport_Error_UnknownLanguage",
                            O,
                          ),
                        ),
                      ),
                    S.english ||
                      R(
                        "english",
                        (0, V.we)(
                          "#AchievementEditor_GroupCsvImport_Error_NameRequired",
                        ),
                      );
                });
              },
              x = function (i) {
                const { groups: t } = i;
                return y
                  .YOg(h(i))
                  .superRefine((s, f) =>
                    Z(
                      s,
                      f,
                      "setid",
                      (0, V.we)(
                        "#AchievementEditor_GroupCsvImport_Error_DuplicateGroupID",
                      ),
                    ),
                  )
                  .transform((s) => {
                    const f = s.reduce((F, R) => ((F[R.setid] = R), F), {}),
                      S = de(t);
                    return Object.keys(f).reduce(
                      (F, R) => (
                        r(f[R], S[R])
                          ? F.unmodified.push(R)
                          : F.modified.push(R),
                        F
                      ),
                      { csv: f, groups: S, modified: [], unmodified: [] },
                    );
                  });
              },
              $ = function (i) {
                const t = new Set(i.fields);
                return (
                  Object.keys(ee.shape).every((s) => t.has(s)) &&
                  !t.has("api_name")
                );
              },
              E = function (i, t, s) {
                const S = x({ groups: t, validLanguages: s }).safeParse(i.data);
                return { ...S.data, ...Q(i, S.error?.issues, "setid") };
              },
              K = function (i, t, s) {
                const f = `${i}-achievement-sets-localization.csv`,
                  S = t.map((O) => se(O, s)),
                  { fields: F, rows: R } = ge(
                    S,
                    [...Object.keys(ee.shape), ...s],
                    T(),
                  );
                J.g.WriteCSVToFile(R, f, !0, F);
              };
            n.d(Ne, {
              B6: () => v,
              CD: () => u,
              EO: () => B,
              JP: () => $,
              K1: () => p,
              Lq: () => ue,
              NJ: () => o,
              OB: () => E,
              Rr: () => ce,
              Wk: () => D,
              Yc: () => A,
              f4: () => Y,
              jF: () => K,
              le: () => ie,
              oK: () => m,
              pC: () => z,
            });
            var e = n(33551),
              X = n.n(e),
              y = n(30541),
              k = n(3959),
              J = n(22880),
              V = n(18210),
              _ = n(82006),
              j = n(1421),
              b = d([y, k, _, j]);
            [y, k, _, j] = b.then ? (await b)() : b;
            const G = y.Ikc({
                api_name: y.YjP().min(1),
                setid: y.YjP().optional(),
                permission: y
                  .k5n(Object.keys(k.yu).filter((i) => typeof i == "string"))
                  .transform((i) => k.yu[i]),
                spoiler: y.uEf(),
                archived: y.uEf(),
                progress_stat_name: y.YjP(),
                progress_stat_min: y.auy.number(),
                progress_stat_max: y.auy.number(),
              }),
              a = y.Ikc({
                api_name: y.YjP().min(1),
                field: y.euz(["name", "description"]),
              }),
              g = a.catchall(y.YjP());
            async function D(i) {
              const t = await J.g.ParseCSVFile(i, Ge);
              return t.errors && t.errors.length > 0
                ? {
                    fields: void 0,
                    data: void 0,
                    errors: t.errors.map((s) => s.message),
                  }
                : { fields: t.meta.fields, data: t.data, errors: void 0 };
            }
            const ae = "EXAMPLE_",
              L = [`${ae}FIRST_WIN`, `${ae}HUNDRED_WINS`],
              ee = y.Ikc({ setid: y.YjP().min(1) }),
              ye = ee.catchall(y.YjP());
            H();
          } catch (G) {
            H(G);
          }
        });
      },
      65678: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let G = function (g) {
                const {
                    size: p = 64,
                    achievement: M,
                    achieved: Z = !0,
                    showWarningOnEmpty: q = !0,
                    children: m,
                    className: P,
                  } = g,
                  { cdnRoot: v } = (0, J.L3)(),
                  l = Z ? M?.display?.icon : M?.display?.icon_gray,
                  z = b[p],
                  D = (0, V.A)(
                    z,
                    X.AchievementImageContainer,
                    !l && X.AchievementMissingImage,
                    P,
                  );
                return l
                  ? (0, e.jsxs)("div", {
                      className: D,
                      children: [(0, e.jsx)("img", { src: v + l }), m],
                    })
                  : (0, e.jsx)("div", {
                      className: D,
                      title: (0, _.we)(
                        "#AchievementEditor_AchievementImage_WarningMissingImage",
                      ),
                      children: (0, e.jsx)("div", {
                        children: q && (0, e.jsx)(k.Jru, {}),
                      }),
                    });
              },
              a = function (g) {
                const {
                    size: p = 64,
                    image: M,
                    showNewIcon: Z = !1,
                    children: q,
                    className: m,
                  } = g,
                  P = b[p];
                return (0, e.jsxs)("div", {
                  className: (0, V.A)(P, X.AchievementImageContainer, m),
                  children: [
                    (0, e.jsx)("img", {
                      src: M.image,
                      alt: M.filenameWithoutExtension,
                    }),
                    Z && (0, e.jsx)(k.FEq, { className: X.NewIcon }),
                    q,
                  ],
                });
              };
            n.d(Ne, { O: () => a, T: () => G });
            var e = n(7850),
              X = n(70402),
              y = n.n(X),
              k = n(36118),
              J = n(3959),
              V = n(36707),
              _ = n(18210),
              j = d([J]);
            J = (j.then ? (await j)() : j)[0];
            const b = {
              32: X.Size32,
              64: X.Size64,
              128: X.Size128,
              256: X.Size256,
            };
            H();
          } catch (b) {
            H(b);
          }
        });
      },
      71986: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let fe = function (Q) {
                const {
                    achievements: A,
                    compact: ce = !1,
                    editable: ue = !0,
                    contentBefore: B,
                    headerContentBefore: ee,
                    setBulkMove: ye,
                  } = Q,
                  de = (0, P.A)(
                    z.GroupAchievementList,
                    ce ? z.Compact : void 0,
                    B === void 0 ? void 0 : z.HasBeforeContent,
                  );
                return (0, e.jsxs)("div", {
                  className: de,
                  children: [
                    (0, e.jsxs)("div", {
                      className: z.Headers,
                      children: [
                        B !== void 0 &&
                          (0, e.jsx)("div", {
                            className: z.ContentBefore,
                            children: ee !== void 0 && ee(),
                          }),
                        (0, e.jsx)("div", {
                          children:
                            !ce &&
                            (0, e.jsx)(e.Fragment, {
                              children: (0, e.jsx)(X.$, {
                                size: "1",
                                onClick: ye,
                                children: (0, e.jsxs)(y.s, {
                                  direction: "row",
                                  gap: "2",
                                  align: "center",
                                  children: [
                                    (0, e.jsx)(q.MG, {
                                      width: "1em",
                                      height: "1em",
                                      style: {
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                        outline: "1px solid currentColor",
                                      },
                                    }),
                                    (0, v.we)(
                                      "#AchievementEditor_AchievementsTable_Header_BulkMove",
                                    ),
                                  ],
                                }),
                              }),
                            }),
                        }),
                        (0, e.jsx)("div", {
                          className: z.Name,
                          children: ce
                            ? (0, v.we)(
                                "#AchievementEditor_Achievement_Edit_DisplayName",
                              )
                            : (0, v.we)(
                                "#AchievementEditor_AchievementsTable_Header_NameDescription",
                              ),
                        }),
                        (0, e.jsx)("div", {
                          className: z.ApiName,
                          children: (0, v.we)(
                            "#AchievementEditor_AchievementsTable_Header_ApiName",
                          ),
                        }),
                        !ce &&
                          (0, e.jsx)("div", {
                            children: (0, v.we)(
                              "#AchievementEditor_AchievementsTable_Header_SetBy",
                            ),
                          }),
                        !ce &&
                          (0, e.jsx)("div", {
                            className: z.Availability,
                            children: (0, v.we)(
                              "#AchievementEditor_AchievementsTable_Header_Availability",
                            ),
                          }),
                        (0, e.jsx)("div", {}),
                      ],
                    }),
                    A.map((W) =>
                      (0, e.jsx)(
                        le,
                        {
                          achievement: W,
                          compact: ce,
                          editable: ue,
                          contentBefore: B,
                        },
                        `ach_${W.statID}_${W.bitID}`,
                      ),
                    ),
                  ],
                });
              },
              le = function (Q) {
                const {
                    achievement: A,
                    compact: ce,
                    editable: ue,
                    contentBefore: B,
                  } = Q,
                  { existingAchievement: ee, globalUnlockPercentage: ye } = (0,
                  T.YZ)(A.statID, A.bitID),
                  { appID: de } = (0, a.L3)(),
                  W = (0, a.$j)(de, A.groupid),
                  N = (0, T.fw)(A.groupid, W),
                  [se, o] = g.useState(!1),
                  [r, h] = g.useState(!1),
                  x = () => {
                    o(!1);
                  },
                  $ = () => {
                    o(!1);
                  },
                  E = ce ? 32 : 64;
                return (0, e.jsxs)("div", {
                  children: [
                    se
                      ? (0, e.jsx)(w, {
                          achievement: A,
                          onSave: x,
                          onCancel: $,
                        })
                      : (0, e.jsxs)(e.Fragment, {
                          children: [
                            B !== void 0 &&
                              (0, e.jsxs)("div", {
                                className: z.ContentBefore,
                                children: [B(A), " "],
                              }),
                            (0, e.jsxs)("div", {
                              className: z.Images,
                              children: [
                                (0, e.jsx)(l.T, {
                                  achievement: A,
                                  achieved: !0,
                                  size: E,
                                }),
                                !ce &&
                                  (0, e.jsx)(l.T, {
                                    achievement: A,
                                    achieved: !1,
                                    size: E,
                                  }),
                              ],
                            }),
                            (0, e.jsxs)(y.s, {
                              direction: "column",
                              children: [
                                (0, e.jsx)(k.EY, {
                                  weight: "heavy",
                                  contrast: "title",
                                  children: (0, e.jsx)(C.VU, {
                                    text: A.display?.name,
                                  }),
                                }),
                                !ce &&
                                  (0, e.jsx)(k.EY, {
                                    children: (0, e.jsx)(C.VU, {
                                      text: A.display?.desc,
                                    }),
                                  }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: z.ApiName,
                              children: [
                                (0, e.jsx)("div", { children: A.name }),
                                !ce &&
                                  (0, e.jsx)("div", {
                                    children: A.progress
                                      ? `${A.progress.value.operand1} ${A.progress.min_val} - ${A.progress.max_val}`
                                      : "",
                                  }),
                              ],
                            }),
                            !ce &&
                              (0, e.jsx)("div", {
                                className: z.Permission,
                                children: a.yu[A.permission ?? 0],
                              }),
                            !ce &&
                              (0, e.jsxs)("div", {
                                className: z.Availability,
                                children: [
                                  A.display?.hidden == "1" &&
                                    (0, e.jsx)("div", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Spoiler",
                                      ),
                                    }),
                                  A.archived == "1" &&
                                    (0, e.jsx)("div", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Archived",
                                      ),
                                    }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: z.EditButtons,
                              children: [
                                !ce &&
                                  ue &&
                                  (0, e.jsxs)("div", {
                                    children: [
                                      (0, e.jsx)(T.lg, {
                                        onClick: () => {
                                          o(!0);
                                        },
                                      }),
                                      (0, e.jsx)(T.et, {
                                        onClick: () => {
                                          h(!0);
                                        },
                                      }),
                                    ],
                                  }),
                                (0, e.jsxs)("div", {
                                  className: z.IDText,
                                  children: [
                                    !!ee &&
                                      (0, e.jsx)(e.Fragment, {
                                        children: (0, e.jsxs)(m.he, {
                                          toolTipContent: (0, v.we)(
                                            "#AchievementEditor_AchievementsTable_GlobalRate_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            whiteSpace: "nowrap",
                                          },
                                          children: [
                                            (0, e.jsx)(T.BA, {
                                              className: z.GlobalRateIcon,
                                            }),
                                            (0, T.Z7)(ye ?? 0),
                                          ],
                                        }),
                                      }),
                                    (0, e.jsx)(m.he, {
                                      toolTipContent: (0, e.jsx)(J.az, {
                                        background: "dull-5",
                                        padding: "2",
                                        children: (0, e.jsx)(ae.or, { ...N }),
                                      }),
                                      direction: "bottom",
                                      style: {
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap",
                                      },
                                      children: (0, e.jsx)(ae.C6, {
                                        hidden: !N?.visible,
                                        className: z.GroupVisibility,
                                        omitText: !0,
                                      }),
                                    }),
                                    (0, v.we)(
                                      "#AchievementEditor_AchievementsTable_Header_ID",
                                    ),
                                    ": ",
                                    A.statID,
                                    ".",
                                    A.bitID,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    r &&
                      (0, e.jsx)(ie, {
                        achievement: A,
                        hideModal: () => {
                          h(!1);
                        },
                      }),
                  ],
                });
              },
              ie = function (Q) {
                const { achievement: A, hideModal: ce } = Q,
                  { appID: ue } = (0, a.L3)(),
                  { existingAchievement: B, globalUnlockPercentage: ee } = (0,
                  T.YZ)(A.statID, A.bitID),
                  ye = B && ee > 0,
                  de = (0, a.Bx)(ue, A.statID, A.bitID),
                  W = () => de.mutate(void 0, { onSuccess: ce });
                return (0, e.jsx)(M.EN, {
                  active: !0,
                  children: (0, e.jsx)(M.x_, {
                    onEscKeypress: ce,
                    children: (0, e.jsxs)(p.U9, {
                      className: z.AchievementDeleteDialog,
                      children: [
                        (0, e.jsx)(p.Y9, {
                          children: (0, v.we)(
                            "#AchievementEditor_Achievement_Delete_Dialog_Title",
                          ),
                        }),
                        (0, e.jsxs)(p.nB, {
                          children: [
                            ye &&
                              (0, e.jsxs)(y.s, {
                                direction: "row",
                                gap: "1",
                                align: "center",
                                style: { color: "var(--color-error)" },
                                children: [
                                  (0, e.jsx)(T.id, {}),
                                  (0, v.we)(
                                    "#AchievementEditor_Achievement_Delete_Warn_LiveAchievement",
                                  ),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: z.AchievementBox,
                              children: [
                                (0, e.jsx)("div", {
                                  children: (0, e.jsx)(l.T, {
                                    achievement: A,
                                    achieved: !0,
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_ApiName",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", { children: A.name }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_DisplayName",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children:
                                            (0, C.ZM)(
                                              A.display?.name,
                                              "english",
                                            ) ??
                                            (0, C.ZM)(A.display?.name, "token"),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Description",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children:
                                            (0, C.ZM)(
                                              A.display?.desc,
                                              "english",
                                            ) ??
                                            (0, C.ZM)(A.display?.desc, "token"),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(p.wi, {
                          children: (0, e.jsx)(T.Aj, {
                            saveText: (0, v.we)(
                              "#AchievementEditor_Achievement_Delete_Dialog_Delete",
                            ),
                            saveColor: "red",
                            pending: de.isPending,
                            error: de.error?.message,
                            onCancel: ce,
                            onSave: W,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
              u = function (Q) {
                return (0, e.jsx)(Y, { bNewAchievement: !0, ...Q });
              },
              w = function (Q) {
                return (0, e.jsx)(Y, { bNewAchievement: !1, ...Q });
              },
              Y = function (Q) {
                const {
                    onSave: A,
                    onCancel: ce,
                    bNewAchievement: ue,
                    achievement: B,
                    groupid: ee,
                  } = Q,
                  { appID: ye, cdnRoot: de } = (0, a.L3)(),
                  W = (0, a.J3)(ye) ?? [],
                  N = (0, a.Q4)(ye),
                  { globalUnlockPercentage: se } = (0, T.YZ)(
                    B?.statID,
                    B?.bitID,
                  ),
                  o = (0, a.ts)(ye),
                  r = (0, a.kb)(ye),
                  h = (0, g.useMemo)(
                    () =>
                      new Set(
                        (r ?? [])
                          .filter(
                            (He) =>
                              He.statID != B?.statID || He.bitID != B?.bitID,
                          )
                          .map((He) => He.name?.trim().toUpperCase()),
                      ),
                    [r, B?.statID, B?.bitID],
                  ),
                  x = (0, g.useMemo)(
                    () =>
                      (0, Ge.Cm)(
                        G.YjP()
                          .refine((He) => He.trim().length > 0, {
                            error: (0, v.we)(
                              "#AchievementEditor_Achievement_Edit_ApiName_Error_Required",
                            ),
                          })
                          .refine((He) => !h.has(He.trim().toUpperCase()), {
                            error: (0, v.we)(
                              "#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate",
                            ),
                          }),
                      ),
                    [h],
                  ),
                  {
                    value: $,
                    setValue: E,
                    isValid: K,
                    issues: i,
                  } = (0, Ge.$q)(B?.name, x, !0),
                  [t, s] = g.useState(B?.permission ?? a.yu.Client),
                  [f, S] = g.useState(B?.display?.hidden == "1"),
                  [F, R] = g.useState(B?.archived == "1"),
                  [O, re] = g.useState(B?.groupid ?? ee),
                  [Se, Ve] = g.useState(
                    B?.display?.name ?? { token: `${$}_NAME` },
                  ),
                  [c, U] = g.useState(
                    B?.display?.desc ?? { token: `${$}_DESC` },
                  ),
                  ne = N?.[B?.groupid ?? ee],
                  oe = (0, T.fw)(O, ne),
                  he = (0, T.fw)(O, N?.[O]),
                  [xe, we] = g.useState(B?.progress ?? void 0),
                  me = xe
                    ? W.find((He) => He.name == xe.value.operand1)
                    : void 0,
                  Fe = (0, ve.E)(me),
                  be =
                    !xe ||
                    Fe.validator(
                      G.Ikc({
                        min_val: G.auy.number(),
                        max_val: G.auy.number(),
                      }).safeParse(xe).data,
                    ).success,
                  Qe = K && be,
                  [Je, Ye] = g.useState(
                    B?.display?.icon
                      ? {
                          image: de + B?.display?.icon,
                          imageType: ge.bi,
                          filenameWithoutExtension: B?.name,
                        }
                      : void 0,
                  ),
                  [Ze, $e] = g.useState(void 0),
                  [ke, Ae] = g.useState(
                    B?.display?.icon_gray
                      ? {
                          image: de + B?.display?.icon_gray,
                          imageType: ge.bi,
                          filenameWithoutExtension: B?.name,
                        }
                      : void 0,
                  ),
                  Ce = async (He) => {
                    try {
                      $e(void 0),
                        Ae({
                          image: await (0, ge.I7)(He),
                          imageType: ge.bi,
                          filenameWithoutExtension: $,
                        });
                    } catch {
                      $e(
                        (0, v.we)(
                          "#AchievementEditor_Image_Error_GrayscaleFailed",
                        ),
                      );
                    }
                  },
                  Te = async (He) => {
                    Ye(He), ke || (await Ce(He.image));
                  },
                  Le = () => Ce(Je.image),
                  Re = (He) => {
                    if (He && He.value.operand1) {
                      we(He);
                      const ze = W.find((qe) => qe.name == He.value.operand1);
                      ze && s(ze.permission);
                    } else we(void 0), s(B?.permission ?? a.yu.Client);
                  },
                  je = (0, a.q4)(ye, ue ? null : B.statID, ue ? null : B.bitID),
                  Be = () => {
                    const He = $.trim(),
                      ze = (0, T.EV)(
                        B?.display?.name?.token,
                        B?.name,
                        "name",
                        He,
                      ),
                      qe = (0, T.EV)(
                        B?.display?.desc?.token,
                        B?.name,
                        "desc",
                        He,
                      ),
                      Ue = (0, C.II)(B?.display?.name, o),
                      We = (0, C.II)(B?.display?.desc, o),
                      Ke = (0, C.II)(Se, o),
                      De = (0, C.II)(c, o);
                    let Ie = {
                      ...B,
                      name: He,
                      groupid: O,
                      permission: t,
                      archived: F ? "1" : "0",
                      display: {
                        ...B?.display,
                        name: { ...Ue, ...Ke, token: ze },
                        desc: { ...We, ...De, token: qe },
                        hidden: f ? "1" : "0",
                      },
                      progress: xe,
                    };
                    je.mutate(
                      {
                        achievement: Ie,
                        icon: Je?.image,
                        icon_gray: ke?.image,
                      },
                      {
                        onSuccess: () => {
                          A && A(Ie);
                        },
                      },
                    );
                  };
                let Xe;
                return (
                  ue && he.visible && he.hasprogress
                    ? (Xe = (0, e.jsx)(T.lh, {
                        text: (0, v.we)(
                          "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                        ),
                      }))
                    : oe.visible && !he.visible && (se ?? 0) > 0
                      ? (Xe = (0, e.jsx)(T.lh, {
                          text: (0, v.we)(
                            "#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement",
                          ),
                        }))
                      : B?.groupid != ee &&
                        he.visible &&
                        he.hasprogress &&
                        (Xe = (0, e.jsx)(T.lh, {
                          text: (0, v.we)(
                            "#AchievementEditor_Achievement_Edit_Group_Warn_BreakCompletion",
                          ),
                        })),
                  (0, e.jsx)("div", {
                    className: z.AchievementEditDialog,
                    children: (0, e.jsxs)("form", {
                      children: [
                        (0, e.jsx)("div", {
                          className: z.EditTitle,
                          children: (0, e.jsx)("h1", {
                            children: ue
                              ? (0, v.we)(
                                  "#AchievementEditor_Achievement_Edit_Title_New",
                                )
                              : (0, v.we)(
                                  "#AchievementEditor_Achievement_Edit_Title_Edit",
                                ),
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: z.EditContent,
                          children: [
                            (0, e.jsx)("div", {
                              style: { paddingRight: "10px" },
                              children: (0, e.jsx)("div", {
                                children: (0, e.jsxs)(V.x, {
                                  columns: "repeat(2, max-content)",
                                  gapX: "3",
                                  margin: "0",
                                  padding: "0",
                                  paddingTop: "2",
                                  children: [
                                    (0, e.jsxs)(y.s, {
                                      direction: "column",
                                      gap: "1",
                                      wrap: "wrap",
                                      width: "min-content",
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, e.jsx)(k.EY, {
                                            size: "2",
                                            children: (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Achieved",
                                            ),
                                          }),
                                        }),
                                        (0, e.jsx)(I, {
                                          icon: Je,
                                          setIcon: Te,
                                          achievement: B,
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)(y.s, {
                                      direction: "column",
                                      gap: "1",
                                      wrap: "wrap",
                                      width: "min-content",
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, e.jsx)(k.EY, {
                                            size: "2",
                                            children: (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Unachieved",
                                            ),
                                          }),
                                        }),
                                        (0, e.jsx)(I, {
                                          icon: ke,
                                          setIcon: Ae,
                                          achievement: B,
                                        }),
                                        !!Je &&
                                          (0, e.jsx)(X.$, {
                                            color: "dull",
                                            onClick: Le,
                                            children: (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Button_Generate",
                                            ),
                                          }),
                                        !!Ze && (0, e.jsx)(T.r3, { text: Ze }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)(Ge.WL, {
                                  label: (0, v.we)(
                                    "#AchievementEditor_Achievement_Edit_ApiName",
                                  ),
                                  placeholder: (0, v.we)(
                                    "#AchievementEditor_Achievement_Edit_ApiName_Placeholder",
                                  ),
                                  value: $,
                                  isValid: K,
                                  setValue: E,
                                  issues: i,
                                  autoFocus: B?.name === void 0,
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("h2", {
                                      children: [
                                        (0, v.we)(
                                          "#AchievementEditor_Achievement_Edit_SetBy",
                                        ),
                                        !!xe &&
                                          (0, e.jsxs)(k.EY, {
                                            contrast: "description",
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: z.InlineSVG,
                                                children: (0, e.jsx)(Z.c_I, {}),
                                              }),
                                              (0, v.we)(
                                                "#AchievementEditor_Achievement_Edit_SetByProgressStat",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                    xe
                                      ? (0, e.jsx)(b.j, {
                                          disabled: !0,
                                          children: a.yu[t ?? a.yu.Client],
                                        })
                                      : (0, e.jsx)(_.l6, {
                                          options: Object.values(a.yu).filter(
                                            (He) => typeof He == "number",
                                          ),
                                          getOptionLabel: (He) => a.yu[He],
                                          selectedValue: t,
                                          onSelectionChange: (He) => {
                                            s(He ?? a.yu.Client);
                                          },
                                        }),
                                  ],
                                }),
                                (0, e.jsx)(ve.O, {
                                  appID: ye,
                                  progress: xe,
                                  setProgress: Re,
                                  ...Fe,
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: z.LocHeader,
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_DisplayName",
                                          ),
                                        }),
                                        (0, e.jsx)(C.Mq, { locstring: Se }),
                                      ],
                                    }),
                                    (0, e.jsx)(C.Pk, {
                                      value: Se,
                                      setValue: Ve,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: z.LocHeader,
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_Description",
                                          ),
                                        }),
                                        (0, e.jsx)(C.Mq, { locstring: c }),
                                      ],
                                    }),
                                    (0, e.jsx)(C.Pk, {
                                      multiline: !0,
                                      value: c,
                                      setValue: U,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsx)("h2", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Group",
                                      ),
                                    }),
                                    Xe,
                                    (0, e.jsx)(T.yo, {
                                      selectedValue: O ?? T.z0,
                                      onSelectionChange: re,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsx)("h2", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Status",
                                      ),
                                    }),
                                    (0, e.jsxs)(y.s, {
                                      direction: "column",
                                      gap: "1",
                                      justify: "between",
                                      children: [
                                        (0, e.jsx)(m.he, {
                                          toolTipContent: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_Spoiler_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            maxWidth: "300px",
                                            whiteSpace: "normal",
                                          },
                                          children: (0, e.jsx)(y.s, {
                                            direction: "column",
                                            flexGrow: "1",
                                            padding: "1",
                                            align: "start",
                                            className: z.Cursor,
                                            children: (0, e.jsx)(j.S, {
                                              checked: f,
                                              onChange: S,
                                              align: "start",
                                              children: (0, e.jsxs)(y.s, {
                                                direction: "column",
                                                children: [
                                                  (0, e.jsx)(k.EY, {
                                                    weight: "heavy",
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_Spoiler",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(k.EY, {
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_SpoilerDesc",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                        (0, e.jsx)(m.he, {
                                          toolTipContent: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_Archived_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            maxWidth: "300px",
                                            whiteSpace: "normal",
                                          },
                                          children: (0, e.jsx)(y.s, {
                                            direction: "column",
                                            flexGrow: "1",
                                            padding: "1",
                                            align: "start",
                                            className: z.Cursor,
                                            children: (0, e.jsx)(j.S, {
                                              checked: F,
                                              onChange: R,
                                              align: "start",
                                              children: (0, e.jsxs)(y.s, {
                                                direction: "column",
                                                children: [
                                                  (0, e.jsx)(k.EY, {
                                                    weight: "heavy",
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_Archived",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(k.EY, {
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_ArchivedDesc",
                                                    ),
                                                  }),
                                                ],
                                              }),
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
                        }),
                        (0, e.jsx)(T.Aj, {
                          saveDisabled: !Qe,
                          pending: je.isPending,
                          error: je.error?.message,
                          onSave: Be,
                          onCancel: ce,
                        }),
                      ],
                    }),
                  })
                );
              },
              I = function (Q) {
                const { icon: A, setIcon: ce, achievement: ue } = Q,
                  B = (0, g.useRef)(null),
                  [ee, ye] = g.useState(void 0),
                  de = (W) => {
                    ye(void 0), ce(W);
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ge._Q, {
                      className: z.AchievementUploadBox,
                      onUpload: de,
                      onError: ye,
                      forceSquare: !0,
                      maxDimension: te,
                      fileInputRef: B,
                      children: A
                        ? (0, e.jsx)(l.O, { image: A, size: 128 })
                        : (0, e.jsx)(l.T, {
                            achievement: ue,
                            achieved: !0,
                            size: 128,
                            showWarningOnEmpty: !1,
                          }),
                    }),
                    !!ee && (0, e.jsx)(T.r3, { text: ee }),
                    (0, e.jsx)(k.EY, {
                      color: "accent-7",
                      children: (0, v.we)(
                        "#AchievementEditor_Achievement_Edit_Icons_DragHelp",
                      ),
                    }),
                    (0, e.jsx)(X.$, {
                      color: "dull",
                      onClick: () => B.current.click(),
                      children: (0, v.we)(
                        "#AchievementEditor_Achievement_Edit_Icons_Button_SelectFile",
                      ),
                    }),
                  ],
                });
              };
            n.d(Ne, { i: () => u, p: () => fe });
            var e = n(7850),
              X = n(75083),
              y = n(68031),
              k = n(15252),
              J = n(60351),
              V = n(95994),
              _ = n(58952),
              j = n(85367),
              b = n(86946),
              G = n(30541),
              a = n(3959),
              g = n(90626),
              p = n(58534),
              M = n(2801),
              Z = n(36118),
              q = n(20525),
              m = n(71421),
              P = n(36707),
              v = n(18210),
              l = n(65678),
              z = n(15008),
              D = n.n(z),
              C = n(1421),
              ve = n(79619),
              T = n(82006),
              ge = n(50233),
              Ge = n(30263),
              ae = n(71693),
              L = d([G, a, l, C, ve, T, ae]);
            [G, a, l, C, ve, T, ae] = L.then ? (await L)() : L;
            const te = 256;
            H();
          } catch (fe) {
            H(fe);
          }
        });
      },
      27852: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let T = function (L) {
                const { appId: fe } = L,
                  le = (0, g.Tc)("icon_cdn_root", "application_config"),
                  [ie, u] = (0, _.useState)("english"),
                  [w, Y] = (0, _.useState)(""),
                  [te, I] = (0, _.useState)(!1),
                  [Q, A] = (0, _.useState)(!1),
                  ce = (0, D.On)(fe, { bNoRetryOnError: !0 }),
                  { data: ue } = (0, D.jw)(fe, { bNoRetryOnError: !0 }),
                  B = (0, V.vd)(fe),
                  ee = {
                    appID: fe,
                    cdnRoot: le,
                    localization: {
                      currentLanguage: ie,
                      setCurrentLanguage: u,
                    },
                    filter: w,
                    existingAchievements: ce.data,
                    existingAchievementUnlockPercentages: ue,
                  },
                  [ye, de] = (0, _.useState)(!1),
                  [W, N] = (0, _.useState)(),
                  [se, o] = (0, _.useState)(!1),
                  [r, h] = (0, _.useState)("main"),
                  x = {
                    main: {
                      label: (0, a.we)(
                        "#AchievementEditor_Tab_ManageAchievements",
                      ),
                      render: () =>
                        (0, e.jsx)(P._e, {
                          reordering: te,
                          setReordering: I,
                          creatingNewGroup: Q,
                          setCreatingNewGroup: A,
                        }),
                    },
                    bulk: {
                      label: (0, a.we)(
                        "#AchievementEditor_Tab_BulkImportExport",
                      ),
                      render: () =>
                        (0, e.jsx)(M.V, {
                          onClose: () => h("main"),
                          setHasChanges: o,
                        }),
                    },
                  },
                  $ = (E) => {
                    r == "bulk" && se ? (N(E), de(!0)) : h(E);
                  };
                return (0, e.jsxs)(V.aR, {
                  value: ee,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, G.A)(
                        Z.EditorContainer,
                        "noOpinionatedGlobalStyles",
                      ),
                      children: [
                        (0, e.jsx)(ae, {}),
                        (0, e.jsx)(ge, {
                          options: Object.keys(x),
                          getOptionLabel: (E) => x[E].label,
                          selectedOption: r,
                          onChange: $,
                        }),
                        r == "main" &&
                          (0, e.jsx)(Ge, {
                            filter: w,
                            setFilter: Y,
                            showFilter: r == "main",
                            reordering: te,
                            setReordering: I,
                            showReorder: r == "main",
                            creatingNewGroup: Q,
                            setCreatingNewGroup: A,
                            showCreateNewGroup: r == "main",
                          }),
                        x[r].render(),
                      ],
                    }),
                    ye &&
                      (0, e.jsx)(l.TM, {
                        onCancel: () => de(!1),
                        onOk: () => {
                          de(!1), o(!1), h(W), N(void 0);
                        },
                        okText: (0, a.we)("#Button_Confirm"),
                        children: (0, a.we)(
                          "#AchievementEditor_TabBar_BulkUnsavedConfirm",
                        ),
                      }),
                  ],
                });
              },
              ge = function (L) {
                const {
                  options: fe,
                  getOptionLabel: le,
                  selectedOption: ie,
                  onChange: u,
                } = L;
                return (0, e.jsx)("div", {
                  className: Z.TabBar,
                  children: fe.map((w) =>
                    w == ie
                      ? (0, e.jsx)(
                          "div",
                          { className: Z.Selected, children: le ? le(w) : w },
                          w,
                        )
                      : (0, e.jsx)(
                          "div",
                          { onClick: () => u(w), children: le ? le(w) : w },
                          w,
                        ),
                  ),
                });
              },
              Ge = function (L) {
                const {
                    filter: fe,
                    setFilter: le,
                    showFilter: ie,
                    reordering: u,
                    setReordering: w,
                    showReorder: Y,
                    creatingNewGroup: te,
                    setCreatingNewGroup: I,
                    showCreateNewGroup: Q,
                  } = L,
                  A = (0, v.DG)(),
                  ce = Object.values(A).every((ee) => ee.set == ee.total),
                  [ue, B] = (0, _.useState)(!1);
                return (0, e.jsxs)("div", {
                  className: Z.Toolbar,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        ie &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("h3", {
                              children: (0, a.we)(
                                "#AchievementEditor_Toolbar_Filter_Title",
                              ),
                            }),
                          }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("h3", {
                            children: (0, e.jsxs)(X.s, {
                              direction: "row",
                              gap: "1",
                              align: "center",
                              children: [
                                (0, a.we)("#LanguageTitle"),
                                !ce &&
                                  (0, e.jsx)(C.he, {
                                    toolTipContent: (0, a.we)(
                                      "#AchievementEditor_Toolbar_Localization_WarnIncomplete",
                                    ),
                                    style: { height: "1.2em" },
                                    children: (0, e.jsx)(l.id, {
                                      color: "var(--color-warning)",
                                    }),
                                  }),
                                (0, e.jsx)(C.he, {
                                  toolTipContent: (0, a.we)(
                                    "#AchievementEditor_Toolbar_Localization_Edit",
                                  ),
                                  style: { height: "1.2em" },
                                  children: (0, e.jsx)(l.lg, {
                                    onClick: () => B(!0),
                                    className: Z.LanguageEditButton,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)("div", {}),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        ie &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(y.k, {
                              variant: "inset",
                              placeholder: (0, a.we)(
                                "#AchievementEditor_Toolbar_Filter_Placeholder",
                              ),
                              value: fe,
                              onTextChange: le,
                              clearable: !0,
                            }),
                          }),
                        (0, e.jsx)("div", { children: (0, e.jsx)(v.Mq, {}) }),
                        (0, e.jsxs)(X.s, {
                          direction: "row",
                          gap: "3",
                          justify: "end",
                          children: [
                            Q &&
                              !te &&
                              (0, e.jsx)(C.he, {
                                toolTipContent: (0, a.we)(
                                  "#AchievementEditor_Button_CreateNewGroup_Tooltip",
                                ),
                                style: {
                                  verticalAlign: "middle",
                                  maxWidth: "300px",
                                  whiteSpace: "normal",
                                },
                                children: (0, e.jsxs)(k.$, {
                                  variant: "vibrant",
                                  disabled: u,
                                  onClick: () => I(!0),
                                  children: [
                                    (0, e.jsx)(m.OMN, {
                                      width: "14",
                                      height: "14",
                                      fill: "currentColor",
                                      className: Z.ButtonIcon,
                                    }),
                                    " ",
                                    (0, a.we)(
                                      "#AchievementEditor_Button_CreateNewGroup",
                                    ),
                                  ],
                                }),
                              }),
                            Y &&
                              !u &&
                              (0, e.jsx)(C.he, {
                                toolTipContent: (0, a.we)(
                                  "#AchievementEditor_Reorder_Description",
                                ),
                                style: {
                                  verticalAlign: "middle",
                                  maxWidth: "300px",
                                  whiteSpace: "normal",
                                },
                                children: (0, e.jsx)(l.mc, {
                                  onClick: () => w(!0),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    ue && (0, e.jsx)(v.Jt, { onClose: () => B(!1) }),
                  ],
                });
              },
              ae = function (L) {
                const { appID: fe } = (0, V.L3)(),
                  le = z.iA.steamid,
                  ie = `${p.TS.COMMUNITY_BASE_URL}profiles/${le}/achievements/${fe}`,
                  u = `${p.TS.PARTNER_BASE_URL}doc/features/achievements`,
                  w = `${u}#5`,
                  Y = (0, V.Rz)(fe),
                  te = (0, V.kb)(fe)?.length ?? 0,
                  I = (0, V.GV)(fe);
                return (0, e.jsxs)("div", {
                  className: Z.HeaderContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: b().AdminHeader,
                      children: (0, e.jsxs)("div", {
                        className: b().PageTitleFlexCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: b().PageTitle,
                            children: (0, a.we)("#AchievementEditor_title"),
                          }),
                          (0, e.jsx)(J.Y, {
                            href: u,
                            children: (0, a.we)(
                              "#AssetRequest_General_SeeDocs",
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: Z.Instructions,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Overview",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.we)(
                                "#AchievementEditor_Description_Overview",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Requirements",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: Z.Important,
                              children: (0, a.oW)(
                                "#AchievementEditor_Description_Requirements",
                                (0, e.jsx)("a", {
                                  href: "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B",
                                }),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Design",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.we)(
                                "#AchievementEditor_Description_Design",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Header_GroupList",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.we)(
                                "#AchievementEditor_Description_GroupList",
                              ),
                            }),
                          ],
                        }),
                        !!Y &&
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, a.we)(
                                    "#AchievementEditor_Description_Title_Limit",
                                  ),
                                  ":",
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, a.we)(
                                    "#AchievementEditor_Description_Limit",
                                    te,
                                    Y.max_achievements,
                                  ),
                                  !Y.vetted &&
                                    (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        " ",
                                        (0, a.uH)(
                                          (0, a.we)(
                                            "#AchievementEditor_Description_Limit_Unvetted",
                                            Y.max_achievements,
                                          ),
                                          (0, e.jsx)("a", { href: w }),
                                        ),
                                      ],
                                    }),
                                  " ",
                                  (0, a.we)(
                                    "#AchievementEditor_Description_Limit_Groups",
                                    I,
                                    Y.max_groups,
                                  ),
                                ],
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Testing",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.oW)(
                                "#AchievementEditor_Description_Testing",
                                (0, e.jsx)("a", { href: ie }),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Releasing",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.oW)(
                                "#AchievementEditor_Description_Releasing",
                                (0, e.jsx)("a", {
                                  href: `${p.TS.PARTNER_BASE_URL}admin/game/editbyappid/${fe}?activetab=tab_basic#feature_section`,
                                }),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              };
            n.r(Ne), n.d(Ne, { default: () => T });
            var e = n(7850),
              X = n(68031),
              y = n(7125),
              k = n(75083),
              J = n(86336),
              V = n(3959),
              _ = n(90626),
              j = n(45737),
              b = n.n(j),
              G = n(36707),
              a = n(18210),
              g = n(3166),
              p = n(98609),
              M = n(45037),
              Z = n(5088),
              q = n.n(Z),
              m = n(249),
              P = n(71693),
              v = n(1421),
              l = n(82006),
              z = n(72609),
              D = n(24541),
              C = n(71421),
              ve = d([V, M, P, v, l]);
            ([V, M, P, v, l] = ve.then ? (await ve)() : ve), H();
          } catch (T) {
            H(T);
          }
        });
      },
      71693: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let T = function (W, N, se) {
                if (!N) return { included: W, excluded: [] };
                const o = N.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"),
                  r = new RegExp(`.*${o ?? ""}.*`, "i"),
                  h = (x) => {
                    const $ = (0, D.ZM)(x.display?.name, se ?? "english"),
                      E = (0, D.ZM)(x.display?.desc, se ?? "english");
                    return (
                      !o ||
                      o === "" ||
                      !!x.name.match(r) ||
                      !!$?.match(r) ||
                      !!E?.match(r)
                    );
                  };
                return (W ?? []).reduce(
                  (x, $) => (h($) ? x.included.push($) : x.excluded.push($), x),
                  { included: [], excluded: [] },
                );
              },
              ge = function (W) {
                const {
                    reordering: N,
                    setReordering: se,
                    creatingNewGroup: o,
                    setCreatingNewGroup: r,
                  } = W,
                  { appID: h } = (0, G.L3)(),
                  x = (0, G.kb)(h),
                  $ = (0, G.FM)(h),
                  E = (0, G.JI)(h);
                return N
                  ? (0, e.jsx)("div", {
                      children: (0, e.jsxs)("div", {
                        className: l.GroupList,
                        children: [
                          (0, e.jsx)("div", {
                            className: l.GroupReorderDescription,
                            children: (0, m.we)(
                              "#AchievementEditor_Reorder_Description",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: l.SortDefaultGroup,
                            children: [
                              (0, e.jsx)(L, { groupid: null, group: null }),
                              (0, e.jsx)("div", {
                                className: l.OverlayContent,
                                children: (0, e.jsx)("h2", {
                                  children: (0, m.we)(
                                    "#AchievementEditor_Reorder_NotDefault",
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsx)(Ge, {
                            groups: $,
                            onSave: () => se(!1),
                            onCancel: () => se(!1),
                          }),
                        ],
                      }),
                    })
                  : (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          className: l.GroupList,
                          children: [
                            !!x &&
                              (0, e.jsx)(ae, { groupid: null, group: null }),
                            !!$ &&
                              $.map((K) =>
                                (0, e.jsx)(
                                  ae,
                                  { groupid: K.groupid, group: K },
                                  K.groupid,
                                ),
                              ),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          children: o
                            ? (0, e.jsx)(
                                ae,
                                {
                                  groupid: "",
                                  group: null,
                                  bNewGroup: !0,
                                  onSave: () => r(!1),
                                  onCancel: () => r(!1),
                                },
                                "kg_newgroup",
                              )
                            : !N &&
                              (0, e.jsxs)(y.s, {
                                direction: "row",
                                gap: "2",
                                align: "center",
                                children: [
                                  (0, e.jsxs)(k.$, {
                                    variant: "vibrant",
                                    disabled: !E,
                                    onClick: () => r(!0),
                                    children: [
                                      (0, e.jsx)(p.OMN, {
                                        width: "14",
                                        height: "14",
                                        fill: "currentColor",
                                        className: l.Icon,
                                      }),
                                      " ",
                                      (0, m.we)(
                                        "#AchievementEditor_Button_CreateNewGroup",
                                      ),
                                    ],
                                  }),
                                  !E &&
                                    (0, e.jsx)(J.EY, {
                                      contrast: "description",
                                      children: (0, m.we)(
                                        "#AchievementEditor_Group_LimitReached",
                                      ),
                                    }),
                                ],
                              }),
                        }),
                      ],
                    });
              },
              Ge = function (W) {
                const { groups: N, onSave: se, onCancel: o } = W,
                  { appID: r } = (0, G.L3)(),
                  [h, x] = a.useState(N),
                  $ = (0, G.iF)(r),
                  E = () =>
                    $.mutate(
                      h.map((i) => i.groupid),
                      { onSuccess: se },
                    ),
                  K = function (i) {
                    if (!i.destination) return;
                    let t = [...h];
                    const [s] = t.splice(i.source.index, 1);
                    t.splice(i.destination.index, 0, s), x(t);
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(X.JY, {
                      onDragEnd: K,
                      children: (0, e.jsx)(X.gL, {
                        droppableId: "droppable",
                        isDropDisabled: !1,
                        isCombineEnabled: !1,
                        ignoreContainerClipping: !1,
                        direction: "vertical",
                        children: (i) =>
                          (0, e.jsxs)("div", {
                            className: l.GroupSorter,
                            ...i.droppableProps,
                            ref: i.innerRef,
                            children: [
                              h.map((t, s) =>
                                (0, e.jsx)(
                                  X.sx,
                                  {
                                    draggableId: t.groupid,
                                    index: s,
                                    children: (f) =>
                                      (0, e.jsx)(L, {
                                        groupid: t.groupid,
                                        group: t,
                                        ref: f?.innerRef,
                                        ...f?.draggableProps,
                                        ...f?.dragHandleProps,
                                      }),
                                  },
                                  t.groupid,
                                ),
                              ),
                              i.placeholder,
                            ],
                          }),
                      }),
                    }),
                    (0, e.jsx)(C.Aj, {
                      pending: $.isPending,
                      error: $.error?.message,
                      onSave: E,
                      onCancel: o,
                    }),
                  ],
                });
              },
              ae = function (W) {
                const {
                    groupid: N,
                    group: se,
                    bNewGroup: o,
                    onSave: r,
                    onCancel: h,
                  } = W,
                  { appID: x, filter: $, localization: E } = (0, G.L3)(),
                  { currentLanguage: K } = E,
                  i = (0, G.FK)(x, N),
                  t = (0, C.fw)(N, se),
                  s = (0, C.$P)(),
                  f =
                    t.visible &&
                    Object.values(s ?? {}).some(
                      (me) => (me.globalUnlockPercentage ?? 0) > 0,
                    ),
                  [S, F] = a.useState(o),
                  [R, O] = a.useState(!1),
                  [re, Se] = a.useState(!1),
                  [Ve, c] = a.useState(!1),
                  [U, ne] = a.useState(!1),
                  oe = re
                    ? void 0
                    : [
                        {
                          key: "edit",
                          label: (0, m.we)(
                            "#AchievementEditor_Group_Tools_Edit",
                          ),
                          icon: () => (0, e.jsx)(Z.ffu, {}),
                          action: () => F(!0),
                        },
                        {
                          key: "delete",
                          label: (0, m.we)(
                            "#AchievementEditor_Group_Tools_Delete",
                          ),
                          icon: () => (0, e.jsx)(Z.X, {}),
                          action: () => O(!0),
                        },
                      ].filter((me) =>
                        me.key == "edit" || me.key == "delete" ? !!N : !0,
                      ),
                  he = async () => {
                    F(!1), r && r();
                  },
                  xe = () => {
                    F(!1), h && h();
                  };
                let we = (0, e.jsx)(k.$, {
                  variant: "vibrant",
                  onClick: () => c(!0),
                  children: (0, e.jsxs)(y.s, {
                    children: [
                      (0, e.jsx)(p.OMN, {
                        width: "14",
                        height: "14",
                        fill: "currentColor",
                        className: l.Icon,
                      }),
                      " ",
                      (0, m.we)("#AchievementEditor_Group_CreateAchievement"),
                    ],
                  }),
                });
                return (
                  f &&
                    (we = (0, e.jsxs)(y.s, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      children: [
                        we,
                        (0, e.jsxs)(y.s, {
                          align: "center",
                          gap: "1",
                          children: [
                            (0, e.jsx)(C.id, { color: "var(--color-amber-9)" }),
                            (0, e.jsxs)(J.EY, {
                              color: "amber-9",
                              children: [
                                " ",
                                (0, m.we)(
                                  "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })),
                  S
                    ? o
                      ? (0, e.jsx)(A, { onSave: he, onCancel: xe })
                      : (0, e.jsx)(ce, {
                          groupid: N,
                          group: se,
                          onSave: he,
                          onCancel: xe,
                        })
                    : (0, e.jsxs)(le, {
                        groupid: N,
                        group: se,
                        actions: oe,
                        collapsed: U,
                        setCollapsed: ne,
                        children: [
                          !U &&
                            (0, e.jsx)("div", {
                              className: l.AchievementsFullDisplay,
                              children: re
                                ? (0, e.jsx)(w, {
                                    groupid: N,
                                    achievements: i,
                                    filter: $,
                                    currentLanguage: K,
                                    onClose: () => Se(!1),
                                  })
                                : (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsx)(u, {
                                        achievements: i,
                                        filter: $,
                                        currentLanguage: K,
                                        setBulkMove: () => Se(!0),
                                      }),
                                      (0, e.jsx)("div", {
                                        children: Ve
                                          ? (0, e.jsx)(v.i, {
                                              achievement: null,
                                              groupid: N,
                                              onSave: (me) => c(!1),
                                              onCancel: () => c(!1),
                                            })
                                          : we,
                                      }),
                                    ],
                                  }),
                            }),
                          R &&
                            (0, e.jsx)(de, {
                              groupid: N,
                              group: se,
                              hideModal: () => {
                                O(!1);
                              },
                            }),
                        ],
                      })
                );
              },
              L = function (W) {
                const { className: N, ...se } = W;
                return (0, e.jsx)(le, {
                  className: (0, q.A)(l.CompactGroupContainer, N),
                  ...se,
                });
              },
              fe = function (W) {
                return `group-${W}`;
              },
              le = function (W) {
                const {
                    groupid: N,
                    group: se,
                    actions: o,
                    children: r,
                    className: h,
                    collapsed: x,
                    setCollapsed: $,
                    ...E
                  } = W,
                  i = (0, C.fw)(N, se).visible ? l.Released : l.Unreleased;
                return (0, e.jsx)("div", {
                  id: fe(N),
                  className: (0, q.A)(l.Group, h, i),
                  ...E,
                  children: (0, e.jsxs)("div", {
                    className: l.GroupDisplay,
                    children: [
                      (0, e.jsx)(ie, {
                        groupid: N,
                        group: se,
                        actions: o,
                        collapsed: x,
                        setCollapsed: $,
                      }),
                      r,
                    ],
                  }),
                });
              },
              ie = function (W) {
                const {
                    groupid: N,
                    group: se,
                    actions: o,
                    collapsed: r,
                    setCollapsed: h,
                  } = W,
                  x = (0, C.fw)(N, se);
                return (0, e.jsxs)("div", {
                  className: l.GroupHeader,
                  children: [
                    (0, e.jsx)(te, { ...x }),
                    (0, e.jsxs)("div", {
                      className: l.GroupHeaderContent,
                      children: [
                        !N &&
                          (0, e.jsxs)("div", {
                            className: l.CoreGroup,
                            children: [
                              (0, e.jsx)("h1", {
                                children: (0, m.we)(
                                  "#AchievementEditor_Group_CoreGameAchievements_Heading",
                                ),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, m.we)(
                                  "#AchievementEditor_Group_CoreGameAchievements_Description",
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: l.GroupData,
                          children: [
                            !!N &&
                              (0, e.jsx)("div", {
                                children: (0, e.jsx)("h2", {
                                  children: (0, e.jsx)(D.VU, {
                                    text: se?.name,
                                    missingStringLocToken:
                                      "#AchievementEditor_Group_MissingName",
                                  }),
                                }),
                              }),
                            (0, e.jsx)(Q, { ...x }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: l.EditButtons,
                      children: [
                        (0, e.jsxs)(y.s, {
                          direction: "row",
                          gap: "3",
                          children: [
                            !!o &&
                              o.length > 0 &&
                              (0, e.jsx)(Y, { actions: o }),
                            r !== void 0 &&
                              h &&
                              (0, e.jsx)(V.az, {
                                className: l.CollapseButton,
                                onClick: () => h(!r),
                                children: (0, e.jsx)(Z.F2T, {
                                  fill: "currentColor",
                                  angle: r ? 0 : -90,
                                }),
                              }),
                          ],
                        }),
                        !!N &&
                          (0, e.jsxs)("div", {
                            className: l.IDText,
                            children: ["ID: ", N],
                          }),
                      ],
                    }),
                  ],
                });
              },
              u = function (W) {
                const {
                    achievements: N,
                    filter: se,
                    currentLanguage: o,
                    setBulkMove: r,
                  } = W,
                  h = T(N, se, o);
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    h.included.length > 0 &&
                      (0, e.jsx)(v.p, {
                        achievements: h.included,
                        setBulkMove: r,
                      }),
                    h.excluded.length > 0 &&
                      (0, e.jsxs)("div", {
                        className: l.FilterFooter,
                        children: [
                          (0, e.jsx)(Z.dJT, {}),
                          (0, m.Yp)(
                            "#AchievementEditor_Group_Filtered_Achievements",
                            h.excluded.length,
                          ),
                        ],
                      }),
                    (!N || N.length == 0) &&
                      (0, e.jsx)("div", {
                        className: l.Empty,
                        children: (0, m.we)(
                          "#AchievementEditor_Group_EmptyGroup_Description",
                        ),
                      }),
                  ],
                });
              },
              w = function (W) {
                const {
                    groupid: N,
                    onClose: se,
                    achievements: o,
                    filter: r,
                    currentLanguage: h,
                  } = W,
                  { appID: x } = (0, G.L3)(),
                  $ = T(o, r, h),
                  [E, K] = (0, a.useState)(void 0),
                  [i, t] = (0, a.useState)([]),
                  s = (0, G.Q4)(x) || {},
                  f = (0, G.JI)(x);
                let S = new Set(i);
                const F = E === C.Gl,
                  R = ue(void 0, void 0, !0),
                  O = s[N],
                  re = s[E],
                  Se = (0, C.fw)(N, O);
                let Ve = (0, C.fw)(E, re);
                F && (Ve = R.visibility);
                let c;
                Se.visible && !Ve.visible
                  ? (c = (0, e.jsx)(C.lh, {
                      text: (0, m.we)(
                        "#AchievementEditor_Group_MoveAchievements_Warn_HidingAchievements",
                      ),
                    }))
                  : O?.dlcappid != (F ? R.editAppID : re?.dlcappid) &&
                    Ve.visible &&
                    Ve.hasprogress &&
                    (c = (0, e.jsx)(C.lh, {
                      text: (0, m.we)(
                        "#AchievementEditor_Group_MoveAchievements_Warn_BreakCompletion",
                      ),
                    }));
                const [U, ne] = a.useState($.included.length == i.length),
                  oe = (0, G.zG)(x),
                  he = (me, Fe) => {
                    Fe ? S.add(me) : S.delete(me), t([...S]);
                    const be = S.size == $.included.length;
                    (S.size == $.included.length) != U && ne(!U);
                  },
                  xe = (me) => {
                    for (const Fe of $.included) {
                      const be = (0, G.nf)(Fe);
                      me ? S.add(be) : S.delete(be);
                    }
                    t([...S]), ne(me);
                  },
                  we = async () => {
                    try {
                      const me = F ? await R.save() : E,
                        Fe = {
                          groupid: me,
                          api_names: o
                            .filter((be) => S.has((0, G.nf)(be)))
                            .map((be) => be.name),
                        };
                      await oe.mutateAsync(Fe),
                        setTimeout(() => {
                          document
                            .getElementById(fe(me))
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                            });
                        }, 200),
                        se();
                    } catch {}
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    $.included.length > 0 &&
                      (0, e.jsx)(v.p, {
                        achievements: $.included,
                        compact: !0,
                        editable: !1,
                        headerContentBefore: () =>
                          (0, e.jsx)("div", {
                            className: l.MoveAchievementCheckbox,
                            children: (0, e.jsx)(_.S, {
                              checked: U,
                              onChange: xe,
                            }),
                          }),
                        contentBefore: (me) => {
                          const Fe = (0, G.nf)(me);
                          return (0, e.jsx)("div", {
                            className: l.MoveAchievementCheckbox,
                            children: (0, e.jsx)(_.S, {
                              checked: S.has(Fe),
                              onChange: (be) => he(Fe, be),
                            }),
                          });
                        },
                      }),
                    $.excluded.length > 0 &&
                      (0, e.jsxs)("div", {
                        className: l.FilterFooter,
                        children: [
                          (0, e.jsx)(Z.dJT, {}),
                          (0, m.Yp)(
                            "#AchievementEditor_Group_Filtered_Achievements",
                            $.excluded.length,
                          ),
                        ],
                      }),
                    (!o || o.length == 0) &&
                      (0, e.jsx)("div", {
                        className: l.Empty,
                        children: (0, m.we)(
                          "#AchievementEditor_Group_EmptyGroup_Description",
                        ),
                      }),
                    (0, e.jsxs)(y.s, {
                      direction: F ? "column" : "row",
                      justify: F ? void 0 : "between",
                      align: F ? void 0 : "end",
                      gap: "1",
                      className: l.MoveFooter,
                      children: [
                        (0, e.jsxs)(y.s, {
                          direction: "column",
                          gap: "1",
                          children: [
                            (0, m.we)(
                              "#AchievementEditor_Group_MoveAchievements_GroupSelect_Label",
                              S.size,
                            ),
                            ":",
                            (0, e.jsx)(y.s, {
                              direction: "column",
                              align: "baseline",
                              gap: "1",
                              children: (0, e.jsx)(C.yo, {
                                variant: "inset",
                                selectedValue: E,
                                filter: (0, C.zy)(N),
                                onSelectionChange: K,
                                allowCreate: f,
                              }),
                            }),
                            F &&
                              (0, e.jsx)(ye, {
                                bHideSaveCancelButtons: !0,
                                onCancel: () => {},
                                onSave: () => {},
                                state: R,
                              }),
                          ],
                        }),
                        (0, e.jsxs)(y.s, {
                          direction: "row",
                          gap: "1",
                          justify: "end",
                          children: [
                            c,
                            (0, e.jsx)(C.VZ, {
                              saveDisabled: i.length == 0 || E == null,
                              saveText: (0, m.we)(
                                "#AchievementEditor_Group_MoveAchievements_MoveButton",
                              ),
                              onCancel: se,
                              onSave: we,
                              pending: oe.isPending || R.isPending,
                              error: oe.error?.message ?? R.error,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              },
              Y = function (W) {
                const { actions: N } = W,
                  se = (0, j.WM)({
                    rgOptions: N.map((o, r) => r),
                    selectedValue: void 0,
                    onSelectionChange: (o) => {
                      o !== void 0 && N[o].action();
                    },
                  });
                return (0, e.jsxs)(j.l6.Root, {
                  state: se,
                  children: [
                    (0, e.jsx)(j.l6.Trigger, {
                      render: (o) =>
                        (0, e.jsxs)("div", {
                          className: (0, q.A)(l.EditButton),
                          ...o,
                          children: [
                            (0, m.we)("#AchievementEditor_Options"),
                            "\xA0",
                            (0, e.jsx)("div", {
                              className: (0, q.A)(
                                l.SmallIconButton,
                                l.OptionsSVG,
                              ),
                              children: (0, e.jsx)(Z.GB9, {}),
                            }),
                          ],
                        }),
                    }),
                    (0, e.jsx)(j.l6.Options, {
                      children: N.map((o, r) =>
                        (0, e.jsx)(
                          j.l6.Option,
                          {
                            value: r,
                            children: (0, e.jsxs)("div", {
                              className: l.SelectIconOption,
                              children: [o?.icon(), o.label],
                            }),
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                });
              },
              te = function (W) {
                const { app: N, baseApp: se } = W,
                  { type: o, releasestate: r, name: h } = N || {},
                  x = N?.image || se?.image,
                  $ = {
                    ...N,
                    appid: N?.appid ? parseInt(N.appid) : 0,
                    releasestate: r,
                  };
                return (0, e.jsxs)("div", {
                  className: l.AppTile,
                  children: [
                    (0, e.jsx)("div", {
                      className: l.AppTileImage,
                      children: x
                        ? (0, e.jsx)("img", { src: x })
                        : (0, e.jsx)("div", { children: h }),
                    }),
                    o && r && (0, e.jsx)(P.b, { app: $ }),
                  ],
                });
              },
              I = function (W) {
                const { hidden: N, className: se, omitText: o = !1 } = W;
                return (0, e.jsx)("div", {
                  className: (0, q.A)(
                    l.GroupVisibilitySummary,
                    N ? l.UnreleasedText : l.ReleasedText,
                    se,
                  ),
                  children: N
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(p.ZyV, {}),
                          !o &&
                            (0, m.we)(
                              "#AchievementEditor_Group_Field_Visibility_Value_Hidden",
                            ),
                        ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(p.rxV, {}),
                          !o &&
                            (0, m.we)(
                              "#AchievementEditor_Group_Field_Visibility_Value_Visible",
                            ),
                        ],
                      }),
                });
              },
              Q = function (W) {
                const {
                    archived: N,
                    developeronly: se,
                    app: o,
                    baseApp: r,
                    noStorePage: h,
                    notDLCOfApp: x,
                    dlcappid: $,
                  } = W,
                  E = N || se || !o?.is_released_somewhere,
                  K = (0, q.A)(l.Unreleased, l.Label);
                return (0, e.jsxs)("div", {
                  className: l.GroupVisibilityInfo,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, q.A)(
                        l.GroupVisibilitySummary,
                        E ? l.UnreleasedText : l.ReleasedText,
                      ),
                      children: (0, e.jsx)(I, { hidden: E }),
                    }),
                    E &&
                      (0, e.jsxs)("div", {
                        className: l.GroupVisibilityLabels,
                        children: [
                          !o?.is_released_somewhere &&
                            (0, e.jsx)("div", {
                              className: K,
                              children: (0, m.PP)(
                                "#AchievementEditor_Group_Field_Restrictions_Value_OwnersReleaseStatus",
                                (0, e.jsx)("strong", {
                                  children: o?.name ?? "",
                                }),
                                (0, m.we)(
                                  "#AchievementEditor_Group_Field_Restrictions_App_Unreleased",
                                ),
                              ),
                            }),
                          N &&
                            (0, e.jsxs)("div", {
                              className: K,
                              children: [
                                (0, e.jsx)(Z.KVe, {}),
                                " ",
                                (0, m.we)(
                                  "#AchievementEditor_Group_Field_IsArchived",
                                ),
                                " ",
                                (0, e.jsx)(C.NT, {
                                  helpText: (0, m.we)(
                                    "#AchievementEditor_Group_Tooltip_Archived",
                                  ),
                                }),
                              ],
                            }),
                          se &&
                            (0, e.jsxs)("div", {
                              className: K,
                              children: [
                                (0, e.jsx)(p.bmT, {}),
                                " ",
                                (0, m.we)(
                                  "#AchievementEditor_Group_Field_DeveloperOnly",
                                ),
                                " ",
                                (0, e.jsx)(C.NT, {
                                  helpText: (0, m.we)(
                                    "#AchievementEditor_Group_Tooltip_DeveloperOnly",
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                    h &&
                      (0, e.jsx)(C.lh, {
                        text: (0, m.we)(
                          "#AchievementEditor_Group_Warn_NoStorePage",
                          o?.name ?? "",
                          r?.name ?? "",
                        ),
                      }),
                    x &&
                      (0, e.jsx)(C.lh, {
                        text: (0, m.we)(
                          "#AchievementEditor_Group_Warn_NotDLCOfApp",
                          $ ?? "",
                          r?.name ?? "",
                        ),
                      }),
                  ],
                });
              },
              A = function (W) {
                return (0, e.jsx)(B, { bNewGroup: !0, ...W });
              },
              ce = function (W) {
                return (0, e.jsx)(B, { bNewGroup: !1, ...W });
              },
              ue = function (W, N, se) {
                const { appID: o } = (0, G.L3)(),
                  [r, h] = a.useState(N?.name ?? {}),
                  [x, $] = a.useState(N?.dlcappid),
                  [E, K] = a.useState(N?.archived == "1"),
                  [i, t] = a.useState(se || N?.developeronly == "1"),
                  s = (0, a.useMemo)(
                    () => ({
                      ...N,
                      name: r,
                      dlcappid: x,
                      archived: E ? "1" : "0",
                      developeronly: i ? "1" : "0",
                    }),
                    [r, x, E, i, N],
                  ),
                  f = (0, G.mb)(o, se ? "0" : W),
                  S = (0, C.fw)(W, s),
                  F = () => {
                    h(N?.name),
                      $(N?.dlcappid),
                      K(N?.archived == "1"),
                      t(se || N?.developeronly == "1");
                  },
                  R = async () => await f.mutateAsync(s),
                  O = f.isPending;
                return {
                  editGroupName: r,
                  setEditGroupName: h,
                  editAppID: x,
                  setEditAppID: $,
                  editIsArchived: E,
                  setEditIsArchived: K,
                  editDeveloperOnly: i,
                  setEditDeveloperOnly: t,
                  isNewGroup: se ?? !1,
                  visibility: S,
                  reset: F,
                  save: R,
                  isPending: O,
                  error: f.error?.message,
                };
              },
              B = function (W) {
                const { groupid: N, group: se, bNewGroup: o } = W,
                  r = ue(N, se, o),
                  h = (0, a.useRef)(null);
                return (
                  (0, a.useEffect)(() => {
                    h?.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }, []),
                  (0, e.jsx)(ye, { ref: h, ...W, state: r })
                );
              },
              ee = function (W) {
                const { value: N, setValue: se } = W,
                  { appID: o } = (0, G.L3)(),
                  r = (0, G.sJ)(o),
                  h = (0, a.useMemo)(
                    () => new Map(r.map((K) => [K.appid, K.name])),
                    [r],
                  ),
                  x = (0, a.useCallback)(
                    (K) =>
                      (K ?? "0") == "0"
                        ? `(${o}) ${(0, m.we)("#AchievementEditor_Group_Field_Restrictions_Value_AllPlayers")}`
                        : `(${K}) ${h.get(K)}`,
                    [h, o],
                  ),
                  $ = Array.from(
                    new Set(
                      r
                        .sort((K, i) =>
                          (K.name ?? "").localeCompare(i.name ?? ""),
                        )
                        .map((K) => K.appid),
                    ),
                  ),
                  E = ["0"].concat($);
                return r.length < 20
                  ? (0, e.jsx)(j.l6, {
                      options: E,
                      getOptionLabel: x,
                      selectedValue: N ?? "0",
                      onSelectionChange: se,
                    })
                  : (0, e.jsx)(b.G3, {
                      options: E,
                      getOptionLabel: x,
                      selectedValue: N ?? "0",
                      onSelectionChange: se,
                      placeholder: "",
                      filterPlaceholder: "",
                    });
              },
              ye = function (W) {
                const {
                    state: N,
                    groupid: se,
                    bHideSaveCancelButtons: o,
                    onSave: r,
                    onCancel: h,
                    ref: x,
                  } = W,
                  { appID: $ } = (0, G.L3)(),
                  E = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                  E?.current?.focus();
                }, []);
                const {
                    editGroupName: K,
                    setEditGroupName: i,
                    editAppID: t,
                    setEditAppID: s,
                    editIsArchived: f,
                    setEditIsArchived: S,
                    editDeveloperOnly: F,
                    setEditDeveloperOnly: R,
                    isNewGroup: O,
                    visibility: re,
                    isPending: Se,
                  } = N,
                  Ve = N.editAppID !== void 0,
                  c = async () => {
                    try {
                      await N.save(), r && r();
                    } catch {}
                  },
                  U = () => {
                    N.reset(), h && h();
                  },
                  ne = re.visible ? l.Released : l.Unreleased;
                return (0, e.jsxs)("div", {
                  ref: x,
                  className: (0, q.A)(l.Group, l.Editing, ne),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, q.A)(l.ReleaseStatusBar, ne),
                    }),
                    (0, e.jsx)("div", {
                      className: l.GroupDisplay,
                      children: (0, e.jsx)("div", {
                        className: l.GroupHeader,
                        children: (0, e.jsxs)("div", {
                          className: l.GroupHeaderContent,
                          children: [
                            !se &&
                              !O &&
                              (0, e.jsxs)("div", {
                                className: l.CoreGroup,
                                children: [
                                  (0, e.jsx)("h1", {
                                    children: (0, m.we)(
                                      "#AchievementEditor_Group_CoreGameAchievements_Heading",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    children: (0, m.we)(
                                      "#AchievementEditor_Group_CoreGameAchievements_Description",
                                    ),
                                  }),
                                ],
                              }),
                            (0, e.jsx)("div", {
                              children: O
                                ? (0, e.jsx)("div", {
                                    className: l.EditTitle,
                                    children: (0, e.jsx)("h1", {
                                      children: (0, m.we)(
                                        "#AchievementEditor_AchievementsTable_Header_CreateGroup",
                                      ),
                                    }),
                                  })
                                : (0, e.jsx)("div", {
                                    className: l.EditTitle,
                                    children: (0, e.jsx)("h1", {
                                      children: (0, m.we)(
                                        "#AchievementEditor_Group_Tools_Edit",
                                      ),
                                    }),
                                  }),
                            }),
                            (0, e.jsxs)("div", {
                              className: l.GroupData,
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, m.we)(
                                          "#AchievementEditor_Group_Field_Restrictions",
                                        ),
                                        ":",
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, m.we)(
                                              "#AchievementEditor_Group_Edit_Field_Restrictions_Description",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)(ee, {
                                          value: t,
                                          setValue: s,
                                        }),
                                        (0, e.jsx)(te, { ...re }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: l.VisibilityColumn,
                                  children: [
                                    (!!se || O) &&
                                      (0, e.jsxs)("div", {
                                        children: [
                                          (0, e.jsxs)(y.s, {
                                            children: [
                                              (0, e.jsxs)(y.s, {
                                                flexGrow: "1",
                                                children: [
                                                  (0, m.we)(
                                                    "#AchievementEditor_Group_Field_Name",
                                                  ),
                                                  ":",
                                                ],
                                              }),
                                              Ve &&
                                                (0, e.jsx)(y.s, {
                                                  children: (0, e.jsx)("p", {
                                                    children: (0, m.we)(
                                                      "#AchievementEditor_Group_Edit_Field_Name_DlcPrefix",
                                                    ),
                                                  }),
                                                }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            children: [
                                              (0, e.jsxs)("div", {
                                                children: [
                                                  (0, m.we)(
                                                    "#AchievementEditor_Group_Edit_Field_Name_Description",
                                                  ),
                                                  " ",
                                                  (0, e.jsx)(D.Mq, {
                                                    locstring: K,
                                                  }),
                                                ],
                                              }),
                                              (0, e.jsx)(D.Pk, {
                                                autofocus: !0,
                                                value: K,
                                                setValue: i,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsx)("div", {
                                          children: (0, m.we)(
                                            "#AchievementEditor_Group_Field_DeveloperOnly",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          children: (0, e.jsx)(V.az, {
                                            background: "dull-9",
                                            flexGrow: "1",
                                            padding: "1",
                                            radius: "sm",
                                            children: (0, e.jsx)(_.S, {
                                              checked: F,
                                              onChange: R,
                                              children: (0, m.we)(
                                                "#AchievementEditor_Group_Field_DeveloperOnly",
                                              ),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    !O &&
                                      (0, e.jsxs)("div", {
                                        children: [
                                          (0, e.jsxs)("div", {
                                            children: [
                                              (0, m.we)(
                                                "#AchievementEditor_Group_Field_Archive",
                                              ),
                                              ":",
                                            ],
                                          }),
                                          (0, e.jsx)("div", {
                                            children: (0, e.jsx)(V.az, {
                                              background: "dull-9",
                                              flexGrow: "1",
                                              padding: "1",
                                              radius: "sm",
                                              children: (0, e.jsx)(_.S, {
                                                checked: f,
                                                onChange: S,
                                                children: (0, m.we)(
                                                  "#AchievementEditor_Group_Field_IsArchived",
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, e.jsxs)("div", {
                                      className: l.VisibilitySection,
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, m.we)(
                                              "#AchievementEditor_Group_Field_Visibility",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children: (0, e.jsx)(Q, { ...re }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !o &&
                              (0, e.jsx)(C.Aj, {
                                onSave: c,
                                onCancel: U,
                                pending: Se,
                                error: N.error,
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                });
              },
              de = function (W) {
                const { groupid: N, group: se, hideModal: o } = W,
                  { appID: r } = (0, G.L3)(),
                  h = (0, G.F0)(r, N),
                  x = (0, G.FK)(r, N),
                  $ = (0, C.fw)(N, se),
                  E = !x || x.length === 0,
                  K = () => h.mutate(void 0, { onSuccess: o });
                return (0, e.jsx)(M.EN, {
                  active: !0,
                  children: (0, e.jsx)(M.x_, {
                    onEscKeypress: o,
                    children: (0, e.jsxs)(g.U9, {
                      className: l.GroupDeleteDialog,
                      children: [
                        (0, e.jsx)(g.Y9, {
                          children: (0, m.we)(
                            "#AchievementEditor_Group_Delete_Dialog_Title",
                          ),
                        }),
                        (0, e.jsxs)(g.nB, {
                          children: [
                            !E &&
                              (0, e.jsxs)(y.s, {
                                direction: "row",
                                gap: "2",
                                padding: "2",
                                align: "center",
                                background: "red-7",
                                style: {
                                  color: "var(--color-text-light-title)",
                                },
                                children: [
                                  (0, e.jsx)(C.id, {}),
                                  (0, e.jsx)(J.EY, {
                                    contrast: "title",
                                    children: (0, m.we)(
                                      "#AchievementEditor_Group_Delete_Dialog_WarnNonEmptyGroup",
                                    ),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)(y.s, {
                              direction: "column",
                              gap: "1",
                              padding: "2",
                              className: l.GroupBox,
                              children: [
                                (0, e.jsxs)(J.EY, {
                                  children: [
                                    (0, m.we)(
                                      "#AchievementEditor_Group_Field_Name",
                                    ),
                                    ": ",
                                    (0, D.ZM)(se?.name, "english") ??
                                      se?.name.token,
                                  ],
                                }),
                                (0, e.jsx)(Q, { ...$ }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(g.wi, {
                          children: (0, e.jsx)(C.Aj, {
                            saveText: (0, m.we)(
                              "#AchievementEditor_Group_Delete_Dialog_Delete",
                            ),
                            saveColor: "red",
                            saveDisabled: !E,
                            pending: h.isPending,
                            error: h.error?.message,
                            onCancel: o,
                            onSave: K,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              };
            n.d(Ne, { C6: () => I, _e: () => ge, or: () => Q });
            var e = n(7850),
              X = n(89558),
              y = n(68031),
              k = n(75083),
              J = n(15252),
              V = n(60351),
              _ = n(85367),
              j = n(58952),
              b = n(74769),
              G = n(3959),
              a = n(90626),
              g = n(58534),
              p = n(249),
              M = n(2801),
              Z = n(36118),
              q = n(36707),
              m = n(18210),
              P = n(77959),
              v = n(71986),
              l = n(1103),
              z = n.n(l),
              D = n(1421),
              C = n(82006),
              ve = d([G, v, D, C]);
            ([G, v, D, C] = ve.then ? (await ve)() : ve), H();
          } catch (T) {
            H(T);
          }
        });
      },
      1421: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let z = function () {
                const { appID: ae } = (0, a.L3)(),
                  L = (0, a.ts)(ae),
                  fe = (0, a.Q4)(ae) || {},
                  le = (0, a.kb)(ae) || [];
                return [
                  ...le.map((w) => w.display?.name),
                  ...le.map((w) => w.display?.desc),
                  ...Object.keys(fe).map((w) => fe[w].name),
                ].reduce(
                  (w, Y) => (
                    Object.keys(w).forEach((te) => {
                      const I = w[te];
                      (I.total = I.total + 1),
                        (T(Y, te)?.length ?? 0) > 0 && (I.set = I.set + 1),
                        (w[te] = I);
                    }),
                    w
                  ),
                  L.reduce((w, Y) => ((w[Y] = { set: 0, total: 0 }), w), {}),
                );
              },
              D = function (ae) {
                const { locstring: L } = ae,
                  { appID: fe, localization: le } = (0, a.L3)(),
                  { currentLanguage: ie, setCurrentLanguage: u } = le,
                  w = (0, a.ts)(fe),
                  Y = L === void 0,
                  te = z(),
                  I = Y ? te : {},
                  Q = (0, X.WM)({
                    rgOptions: w,
                    selectedValue: ie,
                    onSelectionChange: u,
                  }),
                  A = (ce, ue = !1) => {
                    const B = Y
                        ? I[ce].set === I[ce].total
                        : (T(L, ce)?.length ?? 0) > 0,
                      ee = B ? m.Provided : m.Missing,
                      ye = Y ? ` (${I[ce].set} / ${I[ce].total})` : "";
                    return (0, e.jsxs)("span", {
                      className: ee,
                      children: [
                        ue &&
                          (B
                            ? (0, e.jsx)(M.Jlk, { color: "var(--text-color)" })
                            : (0, e.jsx)(p.eTF, {
                                color: "var(--text-color)",
                              })),
                        " ",
                        (0, q.we)(`#Language_${ce}`),
                        ye,
                      ],
                    });
                  };
                return (0, e.jsx)("div", {
                  className: (0, Z.A)(m.LocSelect, L ? m.Inline : null),
                  children: (0, e.jsxs)(X.l6.Root, {
                    variant: L ? "underline" : "default",
                    size: "2",
                    state: Q,
                    children: [
                      (0, e.jsx)(X.l6.Trigger, { children: A(ie) }),
                      (0, e.jsx)(X.l6.Options, {
                        children: Q.rgOptions.map((ce) =>
                          (0, e.jsx)(
                            X.l6.Option,
                            { value: ce, children: A(ce.toString(), !0) },
                            ce.toString(),
                          ),
                        ),
                      }),
                    ],
                  }),
                });
              },
              C = function (ae, L) {
                return ae
                  ? typeof ae == "string"
                    ? { english: ae }
                    : Object.keys(ae).reduce(
                        (le, ie) => (
                          (ie == "token" || L.includes(ie)) &&
                            (le[ie] = ae[ie]),
                          le
                        ),
                        {},
                      )
                  : {};
              },
              ve = function (ae) {
                const {
                    value: L,
                    setValue: fe,
                    multiline: le = !1,
                    autofocus: ie = !1,
                  } = ae,
                  { currentLanguage: u } = (0, a.L3)().localization,
                  { appID: w } = (0, a.L3)(),
                  Y = (0, a.ts)(w),
                  te = C(L, Y),
                  I = (Q) => {
                    const A = { ...te, [u]: Q };
                    fe(A);
                  };
                return (0, e.jsx)("div", {
                  className: (0, Z.A)(m.LocTextInput, te[u] ? void 0 : m.Empty),
                  children: le
                    ? (0, e.jsx)(y.f, {
                        autoFocus: ie,
                        resize: "vertical",
                        value: te[u],
                        onTextChange: I,
                      })
                    : (0, e.jsx)(k.k, {
                        autoFocus: ie,
                        value: te[u],
                        onTextChange: I,
                      }),
                });
              },
              T = function (ae, L) {
                if (ae !== void 0)
                  return typeof ae == "string"
                    ? L === "english"
                      ? ae
                      : void 0
                    : ae && L in ae && ae[L] != ""
                      ? ae[L]
                      : void 0;
              },
              ge = function (ae) {
                const { text: L, missingStringLocToken: fe } = ae,
                  { currentLanguage: le } = (0, a.L3)().localization,
                  ie = T(L, le);
                return (
                  ie ||
                  (0, e.jsxs)("span", {
                    className: (0, Z.A)(m.Missing, m.LocText),
                    children: [
                      (0, e.jsx)(p.eTF, { color: "var(--text-color)" }),
                      " ",
                      (0, q.we)(
                        fe ?? "#AchievementEditor_Localization_MissingString",
                        (0, q.we)(`#Language_${le}`),
                      ),
                    ],
                  })
                );
              },
              Ge = function (ae) {
                const { onClose: L } = ae,
                  { appID: fe } = (0, a.L3)(),
                  le = (0, a.ts)(fe),
                  ie = (0, a.vd)(fe),
                  u = (0, a.kk)(fe),
                  [w, Y] = (0, g.useState)(new Set(le)),
                  te = ie.reduce(
                    (B, ee) => ((B[ee] = (0, q.we)(`#Language_${ee}`)), B),
                    {},
                  ),
                  I = [...ie].sort((B, ee) => te[B].localeCompare(te[ee])),
                  Q = (0, g.useCallback)(() => {
                    u.mutate(Array.from(w), { onSuccess: L });
                  }, [u, L, w]),
                  A = I.slice(0, Math.round(I.length / 2)),
                  ce = I.slice(A.length),
                  ue = (B, ee) => {
                    Y((ye) =>
                      ee
                        ? new Set(Array.from([...ye, B]))
                        : new Set(Array.from(ye).filter((de) => de != B)),
                    );
                  };
                return (0, e.jsxs)(G.s, {
                  onClose: L,
                  strTitle: (0, q.we)(
                    "#AchievementEditor_AppLanguageEdit_Title",
                  ),
                  children: [
                    (0, e.jsxs)(J.x, {
                      columns: "repeat(2, 1fr)",
                      gap: "3",
                      paddingY: "3",
                      children: [
                        (0, e.jsx)(V.az, {
                          gridColumn: "1/-1",
                          minWidth: "100%",
                          width: "0",
                          children: (0, e.jsx)(_.EY, {
                            contrast: "description",
                            children: (0, q.we)(
                              "#AchievementEditor_AppLanguageEdit_Description",
                            ),
                          }),
                        }),
                        [A, ce].map((B, ee) =>
                          (0, e.jsx)(
                            j.s,
                            {
                              direction: "column",
                              gap: "2",
                              children: B.map((ye) =>
                                (0, e.jsx)(
                                  b.S,
                                  {
                                    disabled: ye == "english",
                                    checked: ye == "english" || w.has(ye),
                                    onChange: (de) => ue(ye, de),
                                    children: te[ye],
                                  },
                                  ye,
                                ),
                              ),
                            },
                            ee,
                          ),
                        ),
                      ],
                    }),
                    (0, e.jsx)(v.VZ, {
                      pending: u.isPending,
                      error: u.error?.message,
                      onSave: Q,
                      onCancel: L,
                    }),
                  ],
                });
              };
            n.d(Ne, {
              DG: () => z,
              II: () => C,
              Jt: () => Ge,
              Mq: () => D,
              Pk: () => ve,
              VU: () => ge,
              ZM: () => T,
            });
            var e = n(7850),
              X = n(58952),
              y = n(1522),
              k = n(7125),
              J = n(95994),
              V = n(60351),
              _ = n(15252),
              j = n(68031),
              b = n(85367),
              G = n(47604),
              a = n(3959),
              g = n(90626),
              p = n(249),
              M = n(36118),
              Z = n(36707),
              q = n(18210),
              m = n(6629),
              P = n.n(m),
              v = n(82006),
              l = d([a, v]);
            ([a, v] = l.then ? (await l)() : l), H();
          } catch (z) {
            H(z);
          }
        });
      },
      79619: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let l = function (ge) {
                const Ge =
                    ge?.type == "INT"
                      ? m.transform(P.decode)
                      : M.transform(Z.decode),
                  ae =
                    ge?.type == "INT"
                      ? [0, V.ZSL.zH.int32[1]]
                      : [0, V.ZSL.zH.float32[1]],
                  L = Ge.default(0).parse(ge?.min),
                  fe = Ge.default(ae[1]).parse(ge?.max),
                  le = ge?.type == "INT" ? V.aig().int() : V.aig(),
                  ie = (0, g.Cm)(
                    V.Ikc({ min_val: le.min(L), max_val: le.max(fe) })
                      .optional()
                      .refine((u) => u === void 0 || u.min_val < u.max_val, {
                        error: (0, b.we)(
                          "#AchievementEditor_Validator_Error_MinGreaterThanMax",
                        ),
                      }),
                  );
                return {
                  hasStat: ge !== void 0,
                  hasMin: ge?.min !== void 0,
                  hasMax: ge?.max !== void 0,
                  min: L,
                  max: fe,
                  type: ge?.type,
                  validator: ie,
                };
              },
              z = function (ge) {
                const {
                    appID: Ge,
                    progress: ae,
                    setProgress: L,
                    hasStat: fe,
                    hasMin: le,
                    hasMax: ie,
                    min: u,
                    max: w,
                    type: Y = "FLOAT",
                    validator: te,
                  } = ge,
                  I = (0, j.useId)(),
                  Q = (0, _.J3)(Ge) ?? [];
                function A(B) {
                  if (B === void 0) {
                    L(void 0);
                    return;
                  }
                  const ee = Q.find((ye) => ye.name == B);
                  L({
                    min_val: ee?.min,
                    max_val: ee?.max,
                    value: { operand1: B, operation: "statvalue" },
                  });
                }
                function ce(B) {
                  const ee = {
                    value: ae.value,
                    min_val: B[0].toString(),
                    max_val: B[1].toString(),
                  };
                  L(ee);
                }
                function ue(B) {
                  if (!B) return;
                  const ee = "\u221E",
                    ye = Q.find((de) => de.name == B);
                  return `${ye.name} (${ye.type} ${ye.min ?? 0} - ${ye.max ?? ee})`;
                }
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.ox, {
                      labelId: I,
                      label: (0, b.we)(
                        "#AchievementEditor_Achievement_Edit_ProgressStat",
                      ),
                      description: (0, b.we)(
                        "#AchievementEditor_Achievement_Edit_ProgressStat_Description",
                      ),
                      children: (0, e.jsx)(X.G3, {
                        "aria-labelledby": I,
                        options: Q.map((B) => B.name),
                        getOptionLabel: ue,
                        selectedValue: ae?.value?.operand1,
                        onSelectionChange: A,
                        placeholder: "",
                        filterPlaceholder: "",
                        clearable: !0,
                      }),
                    }),
                    fe &&
                      (0, e.jsx)(D, {
                        showSlider: le && ie,
                        min: u,
                        max: w,
                        integer: Y == "INT",
                        validator: te,
                        value: [
                          V.auy.number().default(u).parse(ae?.min_val),
                          V.auy.number().default(w).parse(ae?.max_val),
                        ],
                        setValue: ce,
                      }),
                  ],
                });
              },
              D = function (ge) {
                const {
                    showSlider: Ge = !1,
                    min: ae,
                    max: L,
                    validator: fe,
                    integer: le,
                    value: ie,
                  } = ge,
                  u = (0, j.useId)(),
                  w = le ? V.aig().int() : V.aig(),
                  Y = fe({ min_val: ie[0], max_val: ie[1] });
                return (0, e.jsx)(g.qF, {
                  labelId: u,
                  label: (0, b.we)(
                    "#AchievementEditor_Achievement_Edit_ProgressStatRange",
                  ),
                  isValid: Y.success,
                  issues: Y.success ? void 0 : Y.issues?.map((te) => te),
                  children: Ge
                    ? (0, e.jsx)(C, { ...ge })
                    : (0, e.jsx)(ve, { ...ge }),
                });
              },
              C = function (ge) {
                const {
                    min: Ge,
                    max: ae,
                    integer: L,
                    value: fe,
                    setValue: le,
                  } = ge,
                  ie = L ? 1 : 0.1,
                  u = [J.OQ(fe[0], Ge, ae), J.OQ(fe[1], Ge, ae)];
                return (0, e.jsxs)("div", {
                  className: G.MinMaxRangeContainer,
                  children: [
                    (0, e.jsx)(ve, { ...ge }),
                    (0, e.jsx)(y.F, {
                      value: u,
                      onValueChange: le,
                      min: Ge,
                      max: ae,
                      step: ie,
                    }),
                  ],
                });
              },
              ve = function (ge) {
                const { value: Ge, setValue: ae, integer: L } = ge;
                return (0, e.jsxs)("div", {
                  className: G.MinMax,
                  children: [
                    (0, e.jsx)(g.wI, {
                      children: (0, e.jsx)(T, {
                        placeholder: (0, b.we)(
                          "#AchievementEditor_Achievement_Edit_Stat_Min_Placeholder",
                        ),
                        value: Ge[0],
                        integer: L,
                        onValueChange: (fe) => ae([fe, Ge[1]]),
                      }),
                    }),
                    (0, e.jsx)("span", { children: " - " }),
                    (0, e.jsx)(g.wI, {
                      children: (0, e.jsx)(T, {
                        placeholder: (0, b.we)(
                          "#AchievementEditor_Achievement_Edit_Stat_Max_Placeholder",
                        ),
                        value: Ge[1],
                        integer: L,
                        onValueChange: (fe) => ae([Ge[0], fe]),
                      }),
                    }),
                  ],
                });
              },
              T = function (ge) {
                const { defaultValue: Ge = 0, integer: ae = !1, ...L } = ge,
                  fe = ae ? v : q;
                function le(u) {
                  const w = fe.safeDecode(u);
                  return w.success ? w.data : void 0;
                }
                const ie = (u, w) => !u || (w !== k.C && !isNaN(w));
                return (0, e.jsx)(k.I, {
                  valueToString: (u) => fe.safeEncode(u).data,
                  valueFromString: le,
                  checkValidText: ie,
                  ...L,
                });
              };
            n.d(Ne, { E: () => l, O: () => z });
            var e = n(7850),
              X = n(74769),
              y = n(9656),
              k = n(99631),
              J = n(13854),
              V = n(30541),
              _ = n(3959),
              j = n(90626),
              b = n(18210),
              G = n(14223),
              a = n.n(G),
              g = n(30263),
              p = d([V, _]);
            [V, _] = p.then ? (await p)() : p;
            const M = V.YjP().regex(/^-?\d+(?:\.\d*)?$/),
              Z = {
                decode: (ge) => Number.parseFloat(ge),
                encode: (ge) => ge.toString(),
              },
              q = V.rLB(M, V.aig(), Z),
              m = V.YjP().regex(V.A$I.nd),
              P = {
                decode: (ge) => Number.parseInt(ge, 10),
                encode: (ge) => ge.toString(),
              },
              v = V.rLB(m, V.Whr(), P);
            H();
          } catch (M) {
            H(M);
          }
        });
      },
      82006: (pe, Ne, n) => {
        "use strict";
        n.a(pe, async (d, H) => {
          try {
            let ve = function (o) {
                const { progress: r, pending: h } = o,
                  { step: x, name: $, completed: E, total: K } = r,
                  i = K > 0 ? Math.round((100 * E) / K) : 0,
                  t = (0, j.we)(
                    h
                      ? "#AchievementEditor_Bulk_Save_Progress"
                      : "#AchievementEditor_Bulk_Save_Stopped",
                    E + 1,
                    K,
                  );
                return (0, e.jsxs)("div", {
                  className: b.SaveProgress,
                  children: [
                    (0, e.jsx)("div", {
                      className: b.SaveProgressBar,
                      role: "progressbar",
                      "aria-valuenow": E,
                      "aria-valuemax": K,
                      children: (0, e.jsx)("div", {
                        style: { width: `${i}%` },
                      }),
                    }),
                    (0, e.jsxs)(X.s, {
                      direction: "row",
                      gap: "2",
                      children: [
                        (0, e.jsx)(y.EY, { contrast: "title", children: t }),
                        (0, e.jsx)("span", {
                          className: b.SaveProgressLabel,
                          children: (0, e.jsx)(y.EY, {
                            contrast: "description",
                            children: (0, j.we)(C[x], $),
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
              T = function (o) {
                const {
                  saveText: r,
                  saveColor: h,
                  cancelText: x,
                  onSave: $,
                  onCancel: E,
                  pending: K,
                  progress: i,
                  error: t,
                  saveDisabled: s = !1,
                  hideCancel: f = !1,
                } = o;
                return (0, e.jsxs)("div", {
                  className: b.SaveCloseButtons,
                  children: [
                    !!i &&
                      (K || !!t) &&
                      (0, e.jsx)(ve, { progress: i, pending: K }),
                    !!t && (0, e.jsx)(te, { text: t }),
                    (0, e.jsx)(k.$, {
                      color: h ?? "green",
                      variant: "vibrant",
                      onClick: $,
                      loading: K,
                      disabled: s || K,
                      children: (0, e.jsx)("span", {
                        children: r || (0, j.we)("#Button_Save"),
                      }),
                    }),
                    !f &&
                      (0, e.jsx)(k.$, {
                        color: "dull",
                        onClick: E,
                        disabled: K,
                        children: (0, e.jsx)("span", {
                          children: x || (0, j.we)("#Button_Cancel"),
                        }),
                      }),
                  ],
                });
              },
              ge = function (o) {
                const { className: r } = o;
                return (0, e.jsx)(J.az, {
                  className: (0, p.A)(b.Icon, r),
                  children: (0, e.jsx)(a.qzq, {}),
                });
              },
              Ge = function (o) {
                const { color: r = "currentColor" } = o;
                return (0, e.jsx)(J.az, {
                  className: b.Icon,
                  children: (0, e.jsx)(g.eTF, { color: r }),
                });
              },
              ae = function (o) {
                const { color: r = "var(--color-unreleased)" } = o;
                return (0, e.jsx)(J.az, {
                  className: b.Icon,
                  children: (0, e.jsx)(g.ZyV, { color: r }),
                });
              },
              L = function (o) {
                return (0, e.jsx)("div", {
                  className: b.ButtonContainer,
                  children: (0, e.jsx)(T, { ...o }),
                });
              },
              fe = function (o) {
                const { onClick: r } = o;
                return (0, e.jsxs)(k.$, {
                  color: "dull",
                  icon: !0,
                  onClick: r,
                  children: [
                    (0, e.jsx)("div", {
                      className: b.ButtonIcon,
                      children: (0, e.jsx)(le, { width: "18", height: "18" }),
                    }),
                    (0, j.we)("#AchievementEditor_ReorderGroups"),
                  ],
                });
              },
              le = function (o) {
                return (0, e.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  ...o,
                  children: (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M17 10.3477L14.7471 12.5557L11.0938 8.97559V27.0244L14.7471 23.4443L17 25.6523L9.5 33L2 25.6523L4.25293 23.4443L7.90625 27.0234V8.97656L4.25293 12.5557L2 10.3477L9.5 3L17 10.3477ZM34 30L21.0303 30.0303V26.0303L34 26V30ZM34 16V20H21V16H34ZM34 10H21V6H34V10Z",
                  }),
                });
              },
              ie = function (o) {
                const { title: r, onClick: h, className: x } = o;
                return (0, e.jsx)("div", {
                  title: r,
                  className: (0, p.A)(b.SmallIconButton, b.EditButton, x),
                  children: (0, e.jsx)(k.$, {
                    variant: "ghost",
                    icon: !0,
                    onClick: h,
                    children: (0, e.jsx)(a.ffu, {}),
                  }),
                });
              },
              u = function (o) {
                const { title: r, onClick: h } = o;
                return (0, e.jsx)("div", {
                  title: r,
                  className: (0, p.A)(b.SmallIconButton, b.DeleteButton),
                  children: (0, e.jsx)(k.$, {
                    variant: "ghost",
                    icon: !0,
                    onClick: h,
                    children: (0, e.jsx)(a.X, {}),
                  }),
                });
              },
              w = function (o) {
                const { helpText: r } = o;
                return (0, e.jsx)(Z.he, {
                  toolTipContent: r,
                  children: (0, e.jsx)(a._VW, {}),
                });
              },
              Y = function (o) {
                const { text: r } = o;
                return (0, e.jsxs)(X.s, {
                  direction: "row",
                  gap: "1",
                  align: "center",
                  style: { color: "var(--color-warning)" },
                  children: [(0, e.jsx)(Ge, {}), " ", r],
                });
              },
              te = function (o) {
                const { text: r } = o;
                return (0, e.jsxs)(X.s, {
                  direction: "row",
                  gap: "1",
                  align: "center",
                  style: { color: "var(--color-error)" },
                  children: [(0, e.jsx)(Ge, {}), " ", r],
                });
              },
              Q = function (o) {
                const { groupID: r, group: h, showVisibility: x = !1 } = o,
                  { visible: $ } = ye(r, h),
                  {
                    existingAchievements: E,
                    existingAchievementUnlockPercentages: K,
                  } = (0, M.L3)(),
                  i =
                    r === I || r === void 0
                      ? (0, j.we)(
                          "#AchievementEditor_Group_CoreGameAchievements_Heading",
                        )
                      : ((0, z.ZM)(h?.name, "english") ?? h?.name?.token),
                  s =
                    E?.groups
                      .find((S) => S.id.toString() == r)
                      ?.achievements.some(
                        (S) => (K?.percentages?.[S.internal_key] ?? 0) > 0,
                      ) ?? !1;
                let f;
                return (
                  x &&
                    ($
                      ? s && (f = (0, e.jsx)(ge, {}))
                      : (f = (0, e.jsx)(ae, {}))),
                  (0, e.jsxs)(X.s, {
                    direction: "row",
                    gap: "1",
                    align: "center",
                    children: [f, i],
                  })
                );
              },
              ce = function (o) {
                const {
                    selectedValue: r,
                    onSelectionChange: h,
                    filter: x,
                    allowCreate: $,
                    variant: E,
                    placeholder: K = (0, j.we)(
                      "#AchievementEditor_Group_SelectGroupPlaceholder",
                    ),
                  } = o,
                  { appID: i } = (0, M.L3)(),
                  t = (0, M.Q4)(i) || {},
                  s = [I, ...Object.keys(t)],
                  f = x === void 0 ? s : s.filter(x);
                $ && f.splice(0, 0, A);
                const S = (F) =>
                  F == A
                    ? (0, j.we)("#AchievementEditor_Group_SelectGroup_Create")
                    : (0, e.jsx)(Q, {
                        groupID: F,
                        group: t[F],
                        showVisibility: !0,
                      });
                return (0, e.jsx)(V.l6, {
                  selectedValue: r,
                  variant: E,
                  onSelectionChange: h,
                  options: f,
                  placeholder: K,
                  getOptionLabel: S,
                });
              },
              ue = function (o) {
                return (r) => r != o && (!!o || r != I);
              },
              B = function (o, r, h, x) {
                const $ = h == "name" ? "NAME" : "DESC";
                return !o || o == `${r}_${$}` ? `${x}_${$}` : o;
              },
              ee = function (o) {
                const {
                  okText: r,
                  cancelText: h,
                  onOk: x,
                  onCancel: $,
                  okColor: E,
                  hideCancelButton: K = !1,
                  children: i,
                } = o;
                return (0, e.jsx)(q.EN, {
                  active: !0,
                  children: (0, e.jsx)(q.x_, {
                    bHideCloseIcon: !0,
                    children: (0, e.jsxs)(m.U9, {
                      children: [
                        (0, e.jsx)(m.nB, { children: i }),
                        (0, e.jsx)(m.wi, {
                          children: (0, e.jsx)(L, {
                            saveText: r ?? (0, j.we)("#Button_OK"),
                            saveColor: E,
                            onSave: x,
                            cancelText: h,
                            onCancel: $,
                            hideCancel: K,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
              ye = function (o, r) {
                const {
                    appID: h,
                    existingAchievements: x,
                    existingAchievementUnlockPercentages: $,
                  } = (0, M.L3)(),
                  E = r?.dlcappid,
                  K = (0, M.Xe)(h),
                  { data: i } = (0, M.Wu)(h),
                  t = i?.find((Se) => E == Se.appid),
                  s = !!Number(E),
                  { data: f } = (0, v.J$)(s ? { appid: Number(E) } : void 0),
                  S = r?.archived == "1",
                  F = r?.developeronly == "1",
                  R = (t ?? K)?.is_released_somewhere,
                  re =
                    x?.groups
                      .find((Se) => Se.id.toString() == (o ?? I))
                      ?.achievements.some(
                        (Se) => ($?.percentages?.[Se.internal_key] ?? 0) > 0,
                      ) ?? !1;
                return {
                  archived: S,
                  developeronly: F,
                  is_released_somewhere: R,
                  hasprogress: re,
                  app: t ?? K,
                  baseApp: K,
                  noStorePage: !!f && f.success != l.R,
                  notDLCOfApp: s && !!i && !t,
                  dlcappid: E,
                  visible: !S && !F && R,
                };
              },
              de = function () {
                const {
                  existingAchievements: o,
                  existingAchievementUnlockPercentages: r,
                } = (0, M.L3)();
                return (0, _.useMemo)(
                  () =>
                    o
                      ? o.groups.reduce(
                          (x, $) => (
                            $.achievements.forEach((E) => {
                              x[E.internal_key] = {
                                existingAchievement: E,
                                globalUnlockPercentage:
                                  r?.percentages?.[E.internal_key],
                              };
                            }),
                            x
                          ),
                          {},
                        )
                      : {},
                  [o, r],
                );
              },
              W = function (o, r) {
                const h = de();
                if (h === void 0) return {};
                if (o === void 0 || r === void 0) return {};
                const x = N(o, r);
                return h[x] ?? {};
              },
              N = function (o, r) {
                const h = typeof o == "string" ? Number.parseInt(o) : o,
                  x = typeof r == "string" ? Number.parseInt(r) : r;
                return (h << 8) | x;
              },
              se = function (o) {
                return ((o ?? 0) / 100).toLocaleString((0, P.J)(), {
                  style: "percent",
                  maximumFractionDigits: 1,
                });
              };
            n.d(Ne, {
              $P: () => de,
              Aj: () => L,
              BA: () => ge,
              EV: () => B,
              Gl: () => A,
              NT: () => w,
              TM: () => ee,
              VZ: () => T,
              YZ: () => W,
              Z7: () => se,
              et: () => u,
              fw: () => ye,
              id: () => Ge,
              lg: () => ie,
              lh: () => Y,
              mc: () => fe,
              r3: () => te,
              yo: () => ce,
              z0: () => I,
              zy: () => ue,
            });
            var e = n(7850),
              X = n(68031),
              y = n(15252),
              k = n(75083),
              J = n(60351),
              V = n(58952),
              _ = n(90626),
              j = n(18210),
              b = n(79964),
              G = n.n(b),
              a = n(36118),
              g = n(249),
              p = n(36707),
              M = n(3959),
              Z = n(71421),
              q = n(2801),
              m = n(58534),
              P = n(84346),
              v = n(40358),
              l = n(72604),
              z = n(1421),
              D = d([M, z]);
            [M, z] = D.then ? (await D)() : D;
            const C = {
                group: "#AchievementEditor_Bulk_Save_Step_Group",
                achievement: "#AchievementEditor_Bulk_Save_Step_Achievement",
                icon: "#AchievementEditor_Bulk_Save_Step_Icon",
                icon_gray: "#AchievementEditor_Bulk_Save_Step_IconGray",
                delete: "#AchievementEditor_Bulk_Save_Step_Delete",
              },
              I = "0",
              A = "newgroup";
            H();
          } catch (C) {
            H(C);
          }
        });
      },
      91988: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { z: () => J });
        var d = n(7850),
          H = n(90626),
          e = n(3952),
          X = n.n(e),
          y = n(36707),
          k = n(18210);
        function J(V) {
          const {
              className: _,
              onUpload: j,
              accept: b,
              multiple: G = !1,
              fileInputRef: a,
              onError: g,
              children: p,
            } = V,
            [M, Z] = (0, H.useState)(!1),
            [q, m] = (0, H.useState)(!1),
            P = (T) =>
              !G && T.length > 1
                ? !1
                : Array.from(T).every((ge) => b.includes(ge.type)),
            v = (T) => {
              g &&
                g(
                  !G && T.length > 1
                    ? (0, k.we)(
                        "#AchievementEditor_Upload_Error_SingleFileOnly",
                      )
                    : (0, k.we)(
                        "#AchievementEditor_Image_Error_UnknownContentType",
                      ),
                );
            },
            l = (T) => {
              T.preventDefault(), Z(!0);
              const ge = [...T.dataTransfer.items];
              if (!G && ge.length > 1) {
                m(!0), (T.dataTransfer.effectAllowed = "none");
                return;
              }
              for (const Ge of ge)
                if (!b.includes(Ge.type)) {
                  m(!0),
                    (T.dataTransfer.effectAllowed = "none"),
                    console.log(Ge.type);
                  return;
                }
            },
            z = (T) => {
              q && (T.dataTransfer.dropEffect = "none"), T.preventDefault();
            },
            D = () => {
              Z(!1), m(!1);
            },
            C = async (T) => {
              T.preventDefault(), Z(!1);
              let ge = q;
              if ((m(!1), ge)) {
                v(T.dataTransfer.files);
                return;
              }
              j(T.dataTransfer.files);
            },
            ve = async (T) => {
              if (!P(T.target.files)) {
                v(T.target.files);
                return;
              }
              j(T.target.files);
            };
          return (0, d.jsxs)("div", {
            className: (0, y.A)(e.DragBox, M && e.Dragging, q && e.Invalid, _),
            onDragEnter: l,
            onDragOver: z,
            onDragLeave: D,
            onDrop: C,
            children: [
              p,
              a &&
                (0, d.jsx)("input", {
                  type: "file",
                  style: { display: "none" },
                  name: "upload",
                  accept: b.join(","),
                  multiple: G,
                  ref: a,
                  onChange: ve,
                }),
            ],
          });
        }
      },
      50233: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { I7: () => y, Tc: () => _, _Q: () => j, bi: () => X });
        var d = n(7850),
          H = n(18210),
          e = n(91988);
        const X = 1;
        async function y(b) {
          return new Promise((G, a) => {
            const g = new Image();
            (g.onerror = () =>
              a(new Error("failed to decode image for grayscale conversion"))),
              (g.onload = () => {
                const p = document.createElement("canvas");
                (p.width = g.width), (p.height = g.height);
                const M = p.getContext("2d");
                (M.filter = "grayscale(100%)"),
                  M.drawImage(g, 0, 0, g.width, g.height);
                const Z = p.toDataURL("image/png");
                G(Z);
              }),
              (g.src = b);
          });
        }
        function k(b, G, a, g, p) {
          const M = new FileReader();
          (M.onerror = p),
            (M.onload = (Z) => {
              const q = new Image();
              (q.onerror = p),
                (q.onload = () => {
                  const m = document.createElement("canvas");
                  let P = q.width,
                    v = q.height;
                  P > v
                    ? P > G && ((v *= G / P), (P = G))
                    : v > a && ((P *= a / v), (v = a)),
                    (m.width = P),
                    (m.height = v),
                    m.getContext("2d").drawImage(q, 0, 0, P, v);
                  const z = m.toDataURL(b.type);
                  g(z);
                }),
                (q.src = Z.target?.result);
            }),
            M.readAsDataURL(b);
        }
        function J(b) {
          const G = b.lastIndexOf(".");
          return G !== -1 && G > b.lastIndexOf("/") ? b.slice(0, G) : b;
        }
        async function V(b, G = 0, a = 0, g = !1) {
          return new Promise((p, M) => {
            if (!b) {
              p({
                success: !1,
                filename: "",
                error: (0, H.we)("#AchievementEditor_Image_Error_ReadFailed"),
              });
              return;
            }
            const Z = () =>
                p({
                  success: !1,
                  filename: b.name,
                  error: (0, H.we)("#AchievementEditor_Image_Error_ReadFailed"),
                }),
              q = new FileReader();
            (q.onerror = Z),
              (q.onloadend = () => {
                const m = b.type,
                  P = b.name;
                if (
                  ((m === "image/png" || P.endsWith(".png")) &&
                    q.result.toString().startsWith("data:image/png;base64,")) ||
                  ((m === "image/jpeg" ||
                    P.endsWith(".jpg") ||
                    P.endsWith(".jpeg")) &&
                    (q.result
                      .toString()
                      .startsWith("data:image/jpeg;base64,") ||
                      q.result.toString().startsWith("data:image/jpg;base64,")))
                ) {
                  const v = new Image();
                  (v.onerror = Z),
                    (v.onload = () => {
                      g && v.width != v.height
                        ? (console.error(
                            "Image width and height don't match, must be square",
                          ),
                          p({
                            success: !1,
                            filename: b.name,
                            error: (0, H.we)(
                              "#AchievementEditor_Image_Error_NotSquare",
                            ),
                            image: {
                              image: v.src,
                              imageType: X,
                              filenameWithoutExtension: J(P),
                            },
                          }))
                        : G > 0 && (v.width < G || v.height < G)
                          ? (console.error("Image too small"),
                            p({
                              success: !1,
                              filename: b.name,
                              error: (0, H.we)(
                                "#AchievementEditor_Image_Error_TooSmall",
                              ),
                              image: {
                                image: v.src,
                                imageType: X,
                                filenameWithoutExtension: J(P),
                              },
                            }))
                          : a > 0 && (v.width > a || v.height > a)
                            ? k(
                                b,
                                a,
                                a,
                                (l) => {
                                  p({
                                    success: !0,
                                    filename: b.name,
                                    image: {
                                      image: l,
                                      imageType: X,
                                      filenameWithoutExtension: J(P),
                                    },
                                  });
                                },
                                Z,
                              )
                            : p({
                                success: !0,
                                filename: b.name,
                                image: {
                                  image: q.result,
                                  imageType: X,
                                  filenameWithoutExtension: J(P),
                                },
                              });
                    }),
                    (v.src = q.result);
                } else
                  console.error("unknown content types: " + m),
                    p({
                      success: !1,
                      filename: b.name,
                      error: (0, H.we)(
                        "#AchievementEditor_Image_Error_UnknownContentType",
                      ),
                    });
              }),
              q.readAsDataURL(b);
          });
        }
        async function _(b) {
          const {
            files: G,
            forceSquare: a,
            maxDimension: g,
            minDimension: p,
          } = b;
          return await Promise.all(G.map((Z) => V(Z, p, g, a)));
        }
        function j(b) {
          const {
              className: G,
              allowMultiple: a,
              fileInputRef: g,
              onUpload: p,
              onBulkUpload: M,
              onError: Z,
              children: q,
            } = b,
            m = async (v) => {
              const l = await _({ ...b, files: Array.from(v) }),
                z = l.filter((D) => !D.success);
              z.length > 0 &&
                Z &&
                Z(
                  z
                    .map((D) => D.error)
                    .filter((D) => !!D)
                    .join(" ") ||
                    (0, H.we)("#AchievementEditor_Image_Error_ReadFailed"),
                ),
                p
                  ? l[0].success && p(l[0].image)
                  : M(l.filter((D) => D.success).map((D) => D.image));
            },
            P = ["image/png", "image/jpeg"];
          return (0, d.jsx)(e.z, {
            onUpload: m,
            className: G,
            accept: P,
            multiple: a,
            fileInputRef: g,
            onError: Z,
            children: q,
          });
        }
      },
      30263: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, {
          $q: () => _,
          Cm: () => j,
          WL: () => b,
          ox: () => a,
          qF: () => g,
          wI: () => G,
        });
        var d = n(7850),
          H = n(7125),
          e = n(15252),
          X = n(90626),
          y = n(36118),
          k = n(36707),
          J = n(95415),
          V = n.n(J);
        function _(p, M, Z) {
          const [q, m] = (0, X.useState)(M(p)),
            P = (v) => {
              const l = M(v);
              (Z || l.success) && m(l);
            };
          return {
            value: q.success ? q.data : q.input,
            setValue: P,
            isValid: q.success,
            issues: q.issues,
          };
        }
        function j(p) {
          return (M) => {
            const Z = p.safeParse(M);
            return {
              success: Z.success,
              data: Z.data,
              input: M,
              issues: Z.success
                ? void 0
                : Z.error?.issues.map((q) => q.message),
            };
          };
        }
        function b(p) {
          const {
              label: M,
              value: Z,
              setValue: q,
              isValid: m,
              issues: P,
              ...v
            } = p,
            l = (0, X.useId)(),
            [z, D] = (0, X.useState)(!1),
            C = (T) => {
              D(!0), q(T);
            },
            ve = () => {
              D(!0);
            };
          return (0, d.jsx)(g, {
            labelId: l,
            label: M,
            isValid: !z || m,
            issues: P,
            children: (0, d.jsx)(G, {
              children: (0, d.jsx)(H.k, {
                value: Z,
                onTextChange: C,
                onBlur: ve,
                "aria-labelledby": l,
                ...v,
              }),
            }),
          });
        }
        function G(p) {
          const { children: M } = p;
          return (0, d.jsx)("div", {
            className: J.ValidatedControl,
            children: M,
          });
        }
        function a(p) {
          const { label: M, description: Z, labelId: q, children: m } = p;
          return (0, d.jsxs)("div", {
            children: [
              M && (0, d.jsx)("h2", { id: q, children: M }),
              Z && (0, d.jsx)(e.EY, { contrast: "description", children: Z }),
              m,
            ],
          });
        }
        function g(p) {
          const {
            label: M,
            description: Z,
            labelId: q,
            issues: m,
            isValid: P,
            children: v,
          } = p;
          return (0, d.jsxs)("div", {
            className: (0, k.A)(
              J.ValidatedInputContainer,
              P ? void 0 : J.Invalid,
            ),
            children: [
              (0, d.jsx)(a, {
                label: M,
                description: Z,
                labelId: q,
                children: v,
              }),
              !P &&
                m !== void 0 &&
                (typeof m == "string"
                  ? (0, d.jsxs)("span", {
                      className: J.ErrorDetail,
                      children: [
                        (0, d.jsx)(y.eTF, { color: "var(--color-invalid)" }),
                        " ",
                        m,
                      ],
                    })
                  : m.map((l, z) =>
                      (0, d.jsxs)(
                        "span",
                        {
                          className: J.ErrorDetail,
                          children: [
                            (0, d.jsx)(y.eTF, {
                              color: "var(--color-invalid)",
                            }),
                            " ",
                            l,
                          ],
                        },
                        z,
                      ),
                    )),
            ],
          });
        }
      },
      33654: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, {
          Gx: () => y,
          _w: () => _,
          ap: () => e,
          cG: () => V,
          iN: () => k,
          pc: () => J,
          sq: () => X,
        });
        var d = n(7850),
          H = n(18210);
        function e(j) {
          if (!j || j.trim().length == 0) return null;
          try {
            return JSON.parse(j);
          } catch {
            return null;
          }
        }
        function X(j, b) {
          const G = new Set();
          return j.filter((a) => {
            const g = b(a);
            return G.has(g) ? !1 : (G.add(g), !0);
          });
        }
        function y(...j) {
          return [...new Set(j.flat())];
        }
        function k(j) {
          const { href: b, children: G } = j;
          return b
            ? (0, d.jsx)("a", { ...j, children: G })
            : (0, d.jsx)(d.Fragment, { children: G });
        }
        function J(j, b) {
          const G = {
              sText: (0, H.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, H.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            a = {
              sText: (0, H.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            g = {
              released: {
                sText: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, H.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let p = G;
          return j in g ? (p = g[j]) : b || (p = a), p;
        }
        function V(j) {
          if (j.type == "seasonalsale") {
            const b = j.name.toLowerCase();
            if (b.includes("spring")) return "#dd71d4";
            if (b.includes("summer")) return "#29c6ec";
            if (b.includes("autumn")) return "#ac240c";
            if (b.includes("winter")) return "#01704f";
          }
        }
        function _(j) {
          let b = 0;
          for (let p = 0; p < j.length; p++)
            b = j.charCodeAt(p) + ((b << 5) - b);
          const G = b % 360,
            a = 50 + (b % 50),
            g = 40 + (b % 30);
          return `hsl(${G}, ${a}%, ${g}%, 0.25)`;
        }
      },
      77959: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { b: () => Z, a: () => a });
        var d = n(7850),
          H = n(40358),
          e = n(90626),
          X = n(98609);
        function y(v, l) {
          if (!(!v?.asset_url_format || typeof v[l] != "string"))
            return (
              X.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              v.asset_url_format.replace("${FILENAME}", v[l])
            );
        }
        var k = n(71421),
          J = n(36707),
          V = n(18210),
          _ = n(3166),
          j = n(28325),
          b = n(6777),
          G = n(33654);
        function a(v) {
          const l = e.useMemo(() => P(), []);
          return (0, d.jsx)(b.$, {
            title: (0, V.we)("#Dashboard_RecentApps_Title"),
            headerElement: (0, d.jsx)(p, {}),
            children: (0, d.jsxs)("div", {
              className: j.AppTileContainer,
              children: [
                !l.length && (0, d.jsx)(g, {}),
                l.map((z) => (0, d.jsx)(M, { app: z }, z.appid)),
              ],
            }),
          });
        }
        function g(v) {
          const l = _.TS.PARTNER_BASE_URL + "apps/";
          return (0, d.jsxs)("div", {
            className: j.NoRecentApps,
            children: [
              (0, V.we)("#Dashboard_RecentApps_NoRecent"),
              " ",
              (0, d.jsxs)("a", {
                href: l,
                target: "_blank",
                children: [" ", (0, V.we)("#Dashboard_RecentApps_ViewAll")],
              }),
            ],
          });
        }
        function p(v) {
          const l = _.TS.PARTNER_BASE_URL + "apps/";
          return (0, d.jsx)("div", {
            className: j.ViewAppsContainer,
            children: (0, d.jsx)("div", {
              className: j.ViewAppsLink,
              children: (0, d.jsx)("a", {
                href: l,
                children: (0, V.we)("#Dashboard_RecentApps_ViewAllShort"),
              }),
            }),
          });
        }
        function M(v) {
          const { app: l } = v,
            z = l.appid,
            { data: D } = (0, H.lv)({ appid: z }),
            C = _.TS.PARTNER_BASE_URL + "apps/landing/" + z,
            ve = y(D, "header");
          return (0, d.jsxs)("div", {
            className: j.AppTile,
            children: [
              ve &&
                (0, d.jsx)(k.he, {
                  toolTipContent: l.name,
                  children: (0, d.jsx)("div", {
                    className: j.AppTileImage,
                    children: (0, d.jsx)("a", {
                      href: C,
                      target: "_blank",
                      children: (0, d.jsx)("img", { src: ve }),
                    }),
                  }),
                }),
              !ve &&
                (0, d.jsx)("div", {
                  className: j.AppTileImagePlaceholder,
                  children: (0, d.jsx)("a", {
                    href: C,
                    target: "_blank",
                    children: l.name,
                  }),
                }),
              (0, d.jsx)(Z, { app: l }),
            ],
          });
        }
        function Z(v) {
          const { app: l } = v,
            z = l.appid,
            { data: D } = (0, H.J$)({ appid: z });
          return (0, d.jsxs)("div", {
            className: j.AppLabels,
            children: [
              (0, d.jsx)(q, { appType: l.type }),
              (0, d.jsx)(m, {
                releaseState: l.releasestate,
                hasStoreItem: D?.visible,
              }),
            ],
          });
        }
        function q(v) {
          const { appType: l } = v;
          let z = null,
            D = null;
          return (
            l == "Game"
              ? (z = (0, V.we)("#Dashboard_RecentApps_Game"))
              : l == "DLC"
                ? ((z = (0, V.we)("#Dashboard_RecentApps_DLC")), (D = j.DLC))
                : l == "Beta"
                  ? ((z = (0, V.we)("#Dashboard_RecentApps_Playtest")),
                    (D = j.Playtest))
                  : l == "Demo"
                    ? ((z = (0, V.we)("#Dashboard_RecentApps_Demo")),
                      (D = j.Demo))
                    : l == "Music" &&
                      ((z = (0, V.we)("#Dashboard_RecentApps_Music")),
                      (D = j.Music)),
            !!z &&
              (0, d.jsx)("div", {
                className: (0, J.A)(j.AppType, D),
                children: z,
              })
          );
        }
        function m(v) {
          const { releaseState: l, hasStoreItem: z } = v,
            D = (0, G.pc)(l, z);
          return (
            l != "released" &&
            (0, d.jsx)("div", {
              className: (0, J.A)(j.AppRelease),
              children: D.sText,
            })
          );
        }
        function P() {
          const v = (0, _.Tc)("rgRecentApps", "application_config"),
            l = v ? Object.keys(v).map((ve) => v[ve]) : [],
            z = (0, _.Tc)("rgRecentUnreleasedApps", "application_config"),
            D = z ? Object.keys(z).map((ve) => z[ve]) : [],
            C = (0, G.Gx)(l, D);
          return C.sort((ve, T) => ve.nOrder - T.nOrder), C;
        }
      },
      6777: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { $: () => k });
        var d = n(7850),
          H = n(90626),
          e = n(18210),
          X = n(6853),
          y = n.n(X);
        const k = H.forwardRef((J, V) => {
          const {
            title: _,
            count: j,
            description: b,
            children: G,
            beta: a,
            headerElement: g,
          } = J;
          return (0, d.jsxs)("div", {
            className: X.Section,
            ref: V,
            children: [
              (0, d.jsxs)("div", {
                className: X.Header,
                children: [
                  (0, d.jsxs)("div", {
                    className: X.Title,
                    children: [
                      _,
                      j != null &&
                        (0, d.jsx)("span", { className: X.Count, children: j }),
                      a &&
                        (0, d.jsx)("span", {
                          className: X.BetaCallout,
                          children: (0, e.we)("#NewToolTitleSuffix_Beta"),
                        }),
                    ],
                  }),
                  g,
                ],
              }),
              b && (0, d.jsx)("div", { className: X.Body, children: b }),
              G,
            ],
          });
        });
      },
      24541: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { On: () => Y, jw: () => I });
        var d = n(72609),
          H = n(20194),
          e = n(90626);
        const X = "steamQueryPersist";
        function y(o) {
          return o.meta?.[X];
        }
        const k = e.createContext(void 0),
          J = k.Provider;
        function V(o) {
          const { area: r, maxAgeSeconds: h, meta: x, ...$ } = o,
            E = e.useContext(k),
            K = e.useMemo(() => j(x, r, h), [x, r, h]);
          return (0, H.I)({ ...$, meta: K, persister: E?.GetPersister(r) });
        }
        function _(o) {
          const r = React.useContext(k),
            h = React.useMemo(
              () =>
                o.queries.map((x) => {
                  const { area: $, maxAgeSeconds: E, meta: K, ...i } = x;
                  return {
                    ...i,
                    meta: j(K, $, E),
                    persister: r?.GetPersister($),
                  };
                }),
              [o.queries, r],
            );
          return useQueries({ queries: h, combine: o.combine });
        }
        function j(o, r, h) {
          return { ...o, [X]: { area: r, maxAgeSeconds: h } };
        }
        async function b(o, r) {
          const { area: h, maxAgeSeconds: x, meta: $, ...E } = r,
            K = { ...E, meta: j($, h, x), staleTime: 0 },
            i = o.getQueryState(E.queryKey);
          i &&
            i.fetchStatus !== "idle" &&
            (await o.fetchQuery(K).catch(() => {})),
            await o.fetchQuery(K);
        }
        const G = Date.now();
        function a(o) {
          return o > 0 && o < G;
        }
        var g = n(68312),
          p = n(72604),
          M = n(27386);
        const Z = 0;
        function q(o, ...r) {
          return ["achievements", o, ...r];
        }
        const m = (o) => q(o, "schema");
        function P(o, r) {
          if (!(r === void 0 || r === ""))
            return `${d.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${o}/${r}`;
        }
        async function v(o, r, h) {
          const x = await M.xtC.GetGameAchievements(o, {
            appid: r,
            language: h,
          });
          if (x.GetEResult() === p.p)
            return {
              appid: r,
              language: h,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (x.GetEResult() !== p.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                x.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${x.GetEResult()}`))
            );
          const $ = {};
          $[Z] = {
            id: Z,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const E = x.Body().groups().toString();
          x
            .Body()
            .groups()
            .forEach((t) => {
              const s = t.groupid();
              $[s] = {
                id: s,
                name: t.localized_name(),
                archived: t.archived() ?? !1,
                ispublic: t.ispublic() ?? !0,
                developeronly: t.developeronly() ?? !1,
                dlcappid: t.dlcappid() ?? 0,
                order: t.order() ?? 0,
                achievements: [],
              };
            }),
            x
              .Body()
              .toObject()
              ?.achievements?.forEach((t) => {
                const s = t.groupid ?? Z;
                $[s].achievements.push({
                  internal_key: t.internal_key ?? 0,
                  api_name: t.internal_name ?? "",
                  name: t.localized_name,
                  description: t.localized_desc,
                  hidden: t.hidden ?? !1,
                  archived: t.archived ?? !1,
                  icon_achieved: P(r, t.icon),
                  icon_unachieved: P(r, t.icon_gray),
                  groupid: t.groupid ?? Z,
                  min_progress: t.min_progress_int ?? t.min_progress_float,
                  max_progress: t.max_progress_int ?? t.max_progress_float,
                });
              });
          const K = Object.values($)
            .filter((t) => t.achievements.length > 0)
            .sort((t, s) => t.order - s.order);
          return {
            appid: r,
            language: h,
            groups: K,
            schema_hash: x.Body()?.schema_hash() ?? 0,
            schema_version: x.Body()?.schema_version() ?? 0,
          };
        }
        const l = (o) => q(o, "globalpercentages");
        async function z(o, r) {
          const h = await M.xtC.GetGlobalAchievementPercentages(o, {
            appid: r,
          });
          if (h.GetEResult() === p.p) return { percentages: {} };
          if (h.GetEResult() !== p.R)
            throw (
              (console.error(
                "Received error from GetGlobalAchievementPercentages",
                h.GetEResult(),
              ),
              new Error(
                `Error from GetGlobalAchievementPercentages: ${h.GetEResult()}`,
              ))
            );
          return {
            percentages: h
              .Body()
              .achievements()
              .reduce(($, E) => {
                const K = E.internal_key();
                return (
                  K === void 0 || ($[K] = E.player_percent_unlocked() ?? 0.1), $
                );
              }, {}),
          };
        }
        function D(o, r) {
          return q(o, "user_achievements", r);
        }
        function C(o, r, h, x) {
          const $ = (h?.achievements() ?? []).reduce((K, i) => {
              const t = i.internal_key();
              return (
                (K[t] = {
                  internal_key: t,
                  unlocked: i.unlocked(),
                  unlock_time: i.unlock_time(),
                  progress: i.progress_int() ?? i.progress_float(),
                }),
                K
              );
            }, {}),
            E = (h?.groups() ?? []).reduce((K, i) => {
              const t = i.groupid(),
                s = i.is_completed(),
                f = i.time_completed();
              return (
                (K[t] = {
                  groupid: t,
                  is_achievable: i.is_achievable(),
                  completed_achievements: i.completed_achievements() ?? 0,
                  is_completed: s === void 0 ? !1 : s,
                  time_completed: f || void 0,
                }),
                K
              );
            }, {});
          return {
            appid: o,
            steamid: r,
            achievements: $,
            groups: E,
            schema_hash: x,
          };
        }
        function ve(o, r) {
          if (!o) return r;
          const h = { ...o.groups };
          for (const x of Object.values(r.groups)) {
            const $ = o.groups[x.groupid];
            h[x.groupid] = {
              ...x,
              is_completed: ($?.is_completed ?? !1) || x.is_completed,
              time_completed: $?.time_completed ?? x.time_completed,
            };
          }
          return {
            ...o,
            achievements: { ...o.achievements, ...r.achievements },
            groups: h,
          };
        }
        class T extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function ge(o) {
          const r = o.Hdr().transport_error();
          return r === k_ETransportError_RequestNotSent ||
            r === k_ETransportError_ResponseNotReceived
            ? !0
            : o.GetEResult() === k_EResultNoConnection ||
                o.GetEResult() === k_EResultTimeout;
        }
        async function Ge(o, r, h) {
          if (h == "" || h == "0") return C(r, h, void 0, 0);
          const x = await PlayerService.GetUserAchievements(o, {
            appid: r,
            steamid: h,
          });
          if (
            x.GetEResult() === k_EResultAccessDenied ||
            x.GetEResult() === k_EResultAccountNotFound
          )
            return C(r, h, void 0, 0);
          if (ge(x)) throw new T();
          if (x.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                x.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${x.GetEResult()}`))
            );
          return C(r, h, x.Body(), x.Body()?.schema_hash() ?? 0);
        }
        var ae = n(37901);
        const L = {};
        (L.arabic = () => n.e(94507).then(n.t.bind(n, 94507, 19))),
          (L.brazilian = () => n.e(29815).then(n.t.bind(n, 29815, 19))),
          (L.bulgarian = () => n.e(79200).then(n.t.bind(n, 79200, 19))),
          (L.czech = () => n.e(81142).then(n.t.bind(n, 81142, 19))),
          (L.danish = () => n.e(42394).then(n.t.bind(n, 42394, 19))),
          (L.dutch = () => n.e(80559).then(n.t.bind(n, 80559, 19))),
          (L.english = () => n.e(92885).then(n.t.bind(n, 92885, 19))),
          (L.finnish = () => n.e(22754).then(n.t.bind(n, 22754, 19))),
          (L.french = () => n.e(89627).then(n.t.bind(n, 89627, 19))),
          (L.german = () => n.e(8281).then(n.t.bind(n, 8281, 19))),
          (L.greek = () => n.e(53749).then(n.t.bind(n, 53749, 19))),
          (L.hungarian = () => n.e(88180).then(n.t.bind(n, 88180, 19))),
          (L.indonesian = () => n.e(13303).then(n.t.bind(n, 13303, 19))),
          (L.italian = () => n.e(28757).then(n.t.bind(n, 28757, 19))),
          (L.japanese = () => n.e(88468).then(n.t.bind(n, 88468, 19))),
          (L.koreana = () => n.e(82558).then(n.t.bind(n, 82558, 19))),
          (L.latam = () => n.e(3894).then(n.t.bind(n, 3894, 19))),
          (L.malay = () => n.e(35957).then(n.t.bind(n, 35957, 19))),
          (L.norwegian = () => n.e(43081).then(n.t.bind(n, 43081, 19))),
          (L.polish = () => n.e(63822).then(n.t.bind(n, 63822, 19))),
          (L.portuguese = () => n.e(16470).then(n.t.bind(n, 16470, 19))),
          (L.romanian = () => n.e(46488).then(n.t.bind(n, 46488, 19))),
          (L.russian = () => n.e(50272).then(n.t.bind(n, 50272, 19))),
          (L.sc_schinese = () => n.e(88794).then(n.t.bind(n, 88794, 19))),
          (L.schinese = () => n.e(15171).then(n.t.bind(n, 15171, 19))),
          (L.spanish = () => n.e(34341).then(n.t.bind(n, 34341, 19))),
          (L.swedish = () => n.e(61844).then(n.t.bind(n, 61844, 19))),
          (L.tchinese = () => n.e(71088).then(n.t.bind(n, 71088, 19))),
          (L.thai = () => n.e(49829).then(n.t.bind(n, 49829, 19))),
          (L.turkish = () => n.e(95917).then(n.t.bind(n, 95917, 19))),
          (L.ukrainian = () => n.e(15151).then(n.t.bind(n, 15151, 19))),
          (L.vietnamese = () => n.e(53460).then(n.t.bind(n, 53460, 19)));
        async function fe(o) {
          if (L[o]) return L[o]();
        }
        const le = (0, ae.l)(fe);
        function ie(o) {
          return o?.bNoRetryOnError
            ? {
                retry: !1,
                retryOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1,
              }
            : {};
        }
        function u(o) {
          return {
            ...o,
            groups: o.groups.map((r) =>
              r.id === Z
                ? { ...r, name: le.Localize("#Achievements_Set_BaseGame") }
                : r,
            ),
          };
        }
        function w(o, r) {
          return {
            queryKey: m(r),
            queryFn: async () => {
              const h = d.TS.LANGUAGE;
              return v(o, r, h);
            },
            select: u,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function Y(o, r) {
          const h = (0, g.KV)();
          return V({ ...w(h, o), ...ie(r) });
        }
        function te(o, r) {
          return {
            queryKey: l(r),
            queryFn: async () => z(o, r),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function I(o, r) {
          const h = (0, g.KV)();
          return V({ ...te(h, o), ...ie(r) });
        }
        function Q(o, r) {
          const { data: h } = I(o);
          if (h) return h.percentages[r] ?? void 0;
        }
        function A(o, r) {
          const h = Y(o),
            x = I(o),
            $ = h.data,
            E = x.data;
          if (!$ || !E)
            return { data: void 0, isPending: h.isPending || x.isPending };
          const K = r ? GetAchievementInternalKeyByApiName($, r) : void 0;
          return {
            data: K === void 0 ? void 0 : (E.percentages[K] ?? void 0),
            isPending: !1,
          };
        }
        function ce(o, r, h) {
          return {
            queryKey: GetUserAchievementsQueryKey(r, h),
            queryFn: async () => GetUserAchievements(o, r, h),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function ue(o, r, h) {
          const { fnFetchLocalUserAchievements: x } = useAchievementsHost(),
            $ = !!x && !!r && h.error instanceof ServerUnreachableError,
            E = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                o,
                "local_user_achievements",
                r,
                h.errorUpdatedAt,
              ),
              queryFn: async () => (await x(o, r)) ?? null,
              enabled: $,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
            }),
            K = $ ? E.data : void 0,
            i = E.dataUpdatedAt;
          return useMemo(
            () =>
              K
                ? {
                    ...h,
                    data: MergeLocalUserAchievements(h.data, K),
                    dataUpdatedAt: Math.max(h.dataUpdatedAt, i),
                  }
                : h,
            [h, K, i],
          );
        }
        function B(o, r) {
          const h = useActiveServiceTransport(),
            x = usePersistedQuery(ce(h, o, r));
          return ue(o, r, x);
        }
        function ee(o) {
          return o.map((r) => r.data);
        }
        function ye(o, r) {
          const h = useActiveServiceTransport(),
            x = useMemo(() => r.map(($) => ce(h, o, $)), [h, o, r]);
          return usePersistedQueries({ queries: x, combine: ee });
        }
        function de(o, r) {
          const h = useActiveServiceTransport(),
            x = Y(o),
            $ = I(o),
            E = usePersistedQuery({ ...ce(h, o, r ?? ""), enabled: !!r }),
            K = ue(o, r ?? "", E),
            i = !!r,
            t = x.data,
            s = i ? K.data : void 0,
            f = t != null && (!i || s !== void 0),
            S = () => (f ? GetAchievementsSummary(t, $.data, s) : void 0),
            F = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                o,
                "summary",
                r ?? "",
                x.dataUpdatedAt,
                $.dataUpdatedAt,
                i ? K.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const c = S();
                if (c === void 0)
                  throw new Error("No achievements schema to summarize");
                return c;
              },
              initialData: S,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: f,
            }),
            R = i ? [x, K] : [x],
            O = R.find((c) => c.data === void 0),
            re = O?.isPending ?? !1,
            Se = R.find((c) => c.isError),
            Ve = O ? void 0 : F.data;
          return {
            isPending: re,
            isError: !re && Ve === void 0,
            error: Se?.error ?? null,
            data: Ve,
          };
        }
        function W(o, r) {
          const h = Y(o),
            x = I(o),
            $ = B(o, r),
            E = h.data,
            K = $.data,
            i = !!E && !!K,
            t = () => (i ? GetAchievementsByStatus(E, x.data, K) : void 0),
            s = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                o,
                "by_status",
                r,
                h.dataUpdatedAt,
                x.dataUpdatedAt,
                $.dataUpdatedAt,
              ),
              queryFn: () => {
                const f = t();
                if (f === void 0)
                  throw new Error("No achievements to split by status");
                return f;
              },
              initialData: t,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: i,
            });
          return {
            data: i ? s.data : void 0,
            isPending: !i && (h.isPending || $.isPending),
          };
        }
        async function N(o, r, h, x) {
          await FetchPersistedQuery(o, ce(r, h, x));
        }
        async function se(o, r, h) {
          await FetchPersistedQuery(o, w(r, h));
        }
      },
      75083: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { $: () => Z, v: () => q });
        var d = n(7850),
          H = n(64238),
          e = n.n(H),
          X = n(69041),
          y = n(8928),
          k = n(69289),
          J = n(3877),
          V = n(86668),
          _ = n(24660),
          j = n(80549),
          b = n(3166),
          G = n(2333);
        function a(m) {
          const {
              variant: P,
              size: v = "2",
              minWidth: l = "fit-content",
              color: z,
              loading: D,
              children: C,
              onClick: ve,
              icon: T,
              focusable: ge,
              navProps: Ge,
              ...ae
            } = m,
            L = (0, b.Qn)(),
            fe = D
              ? (0, d.jsx)(V.k, {
                  size: v,
                  color: z,
                  variant: "bright",
                  children: C,
                })
              : C,
            le = D ? void 0 : ve,
            ie = ge ?? Ge?.focusable ?? !!le,
            u = (0, j.f)("Button", P),
            w = {
              type: "button",
              ...(0, k.mz)(
                {
                  ...ae,
                  variant: u,
                  size: v,
                  minWidth: l,
                  color: z,
                  className: e()(X.Button, T && X.Icon),
                  onClick: le,
                },
                M,
              ),
              children: fe,
            };
          return L && (ie || Ge)
            ? (0, d.jsx)(_.fu, { ...w, ...(Ge || {}), focusable: ie })
            : (0, d.jsx)("button", { ...w });
        }
        function g(m) {
          const {
              variant: P,
              size: v = "2",
              minWidth: l = "fit-content",
              disabled: z,
              icon: D,
              ...C
            } = m,
            ve = (0, j.f)("Button", P),
            T = z ? p : void 0,
            ge = (0, k.mz)(
              {
                onClick: T,
                "aria-disabled": z,
                ...C,
                variant: ve,
                size: v,
                minWidth: l,
                className: e()(X.Button, D && X.Icon, (0, J.T)()),
              },
              M,
            );
          return (0, d.jsx)(G.o, { ...ge });
        }
        function p(m) {
          m.preventDefault();
        }
        const M = [
            ...y.L,
            { prop: "size", responsive: !0, className: (m) => X[`Size-${m}`] },
            { prop: "variant", className: (m) => X[`Variant-${m}`] },
            { prop: "color", dataProperty: (m) => ["accent-color", `${m}`] },
            {
              prop: "width",
              className: X.Width,
              cssProperty: "--width",
              responsive: !0,
            },
            {
              prop: "minWidth",
              className: X.MinWidth,
              cssProperty: "--min-width",
              responsive: !0,
            },
          ],
          Z = a,
          q = g;
      },
      99631: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { C: () => X, I: () => y });
        var d = n(7850),
          H = n(90626),
          e = n(7125);
        const X = Symbol("CoercingTextInputNotParseable");
        function y(k) {
          const {
              value: J,
              onValueChange: V,
              valueToString: _,
              valueFromString: j,
              checkValidText: b,
              onBlur: G,
              onKeyDown: a,
              ...g
            } = k,
            [p, M] = (0, H.useState)(null),
            Z = p ?? (J === void 0 ? "" : _(J)),
            q = (l) => {
              const z = j(l);
              z !== X && l === _(z) ? (M(null), V(z)) : (!b || b(l, z)) && M(l);
            },
            m = () => {
              if (p !== null) {
                const l = j(p);
                l !== X && V(l), M(null);
              }
            },
            P = (l) => {
              m(), G && G(l);
            },
            v = (l) => {
              l.key === "Enter" && m(), a && a(l);
            };
          return (0, d.jsx)(e.k, {
            value: Z,
            onTextChange: q,
            onKeyDown: v,
            onBlur: P,
            ...g,
          });
        }
      },
      74769: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { G3: () => A, PT: () => B });
        var d = n(7850),
          H = n(90626),
          e = n(86946),
          X = n(12204),
          y = n(15252),
          k = n(7125),
          J = n(63029),
          V = n(92142),
          _ = n(92148),
          j = n(59366),
          b = n(60351),
          G = n(76854),
          a = n(68031),
          g = n(36707),
          p = n(39790),
          M = n(85367),
          Z = n(71742),
          q = n(82277),
          m = n.n(q),
          P = n(80549),
          v = n(3166),
          l = n(58017),
          z = n(64415);
        function D(de) {
          const {
              children: W,
              state: N,
              placement: se = "bottom-end",
              popoverWidth: o = "dropdown",
              popoverMaxHeight: r,
              popoverPresentation: h,
              popoverLabel: x,
              ...$
            } = de,
            [E, K] = (0, H.useState)(void 0);
          (0, H.useEffect)(() => K(void 0), [N.bOpen]);
          const i = (0, v.Qn)(),
            t = (0, H.useRef)(null),
            s = (0, H.useRef)(null),
            f = (0, H.useMemo)(
              () => N.rgFilteredOptions.findIndex((R) => R === N.selectedValue),
              [N.selectedValue, N.rgFilteredOptions],
            ),
            S = (0, V.T)({
              open: N.bOpen,
              onOpenChange: N.setOpen,
              width: o,
              maxHeight: r,
              placement: se,
              presentation: h,
              gutter: "4",
              activeIndex: N.activeIndex,
              setActiveIndex: N.setActiveIndex,
              selectedIndex: f,
              setSelectedIndex: (R) =>
                N.onItemSelectionChange(N.rgFilteredOptions[R]),
              interactions: { click: !0, virtualItemFocus: !i },
              role: "combobox",
              scroll: !1,
            }),
            F = {
              ...N,
              ...$,
              focusedValue: E,
              onFocusChange: K,
              refPopover: t,
              refScrollElement: s,
              setOpen: (R) => {
                if (R) {
                  let O = null;
                  N.multiselect
                    ? (O = Array.isArray(N.selectedValue)
                        ? N.selectedValue[0]
                        : null)
                    : (O = N.selectedValue),
                    K(O),
                    N.onInputChange("");
                }
                N.setOpen(R);
              },
              onIndexSelected: (R) => {
                const O = S.elementsRef.current;
                O && O[R] && O[R].click();
              },
              popoverPlacement: S.floating.placement,
              popoverPresentation: S.presentation,
              popoverLabel: x,
            };
          return (0, d.jsx)(ee.Provider, {
            value: F,
            children: (0, d.jsx)(V.k.Root, { state: S, children: W }),
          });
        }
        function C(de) {
          const {
              refPopover: W,
              inputValue: N,
              onInputChange: se,
              activeIndex: o,
              popoverPlacement: r,
              popoverPresentation: h,
              popoverLabel: x,
              multiselect: $,
              setActiveIndex: E,
              setOpen: K,
              filterPlaceholder: i,
              onIndexSelected: t,
              refScrollElement: s,
            } = ye("<Combobox.Options>"),
            f = (re) => {
              re && re.focus({ preventScroll: !0 });
            },
            S = (re) => {
              re.key === "Enter" &&
                o !== null &&
                (t(o),
                $ || (E(null), K(!1)),
                re.preventDefault(),
                re.stopPropagation());
            },
            F = h === "anchor" && r.startsWith("top"),
            R = (0, d.jsx)(b.az, {
              overflow: "auto",
              ref: s,
              style: { overscrollBehavior: "contain" },
              children: de.children,
            }),
            O = (re) => {
              (re.key === "Home" || re.key === "End") && re.stopPropagation();
            };
          return (0, d.jsx)(V.k.Positioner, {
            ref: W,
            label: x,
            children: (0, d.jsxs)(a.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                F && R,
                (0, d.jsx)(b.az, {
                  flexShrink: "0",
                  className: (0, g.A)(q.FilterBorder, F ? q.Top : q.Bottom),
                  children: (0, d.jsx)(k.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: N,
                    onTextChange: se,
                    onKeyDown: S,
                    onKeyDownCapture: O,
                    placeholder: i,
                    inputRef: f,
                    autoComplete: "off",
                  }),
                }),
                !F && R,
              ],
            }),
          });
        }
        const ve = (0, H.createContext)(null);
        function T(de) {
          const { items: W, renderItem: N, overscan: se = 5, ...o } = de,
            {
              bOpen: r,
              refPopover: h,
              refScrollElement: x,
            } = ye("<ComboboxVirtualizedOptions>"),
            [$, E] = (0, H.useState)(!1),
            K = r && !!h.current && !!x.current;
          (0, H.useEffect)(() => {
            K !== $ && E(K);
          }, [K, $]);
          const i = (0, _.Te)({
            count: $ ? W.length : Math.min(W.length, 3),
            getScrollElement: () => x.current,
            enabled: r,
            measureElement: j.ZO,
            ...o,
          });
          return (0, d.jsx)(C, {
            children: (0, d.jsx)(ve, {
              value: i,
              children: (0, d.jsx)(b.az, {
                height: `${i.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: i.getVirtualItems().map((t) => N(W[t.index], t, i)),
              }),
            }),
          });
        }
        function ge(de) {
          const { virtualItem: W, children: N } = de,
            se = (0, H.useContext)(ve);
          return (
            (0, Z.wT)(se, "Virtual item rendered outside of a virtualizer!"),
            (0, d.jsx)(b.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${W.start}px)` },
              ref: se.measureElement,
              "data-index": W.index,
              children: N,
            })
          );
        }
        function Ge(de) {
          const { virtualItem: W, ...N } = de;
          return (0, d.jsx)(ge, {
            virtualItem: W,
            children: (0, d.jsx)(L, { ...N }),
          });
        }
        function ae(de) {
          const { virtualItem: W, children: N } = de;
          return (0, d.jsx)(ge, { virtualItem: W, children: N });
        }
        function L(de) {
          const { value: W, children: N, disabled: se } = de,
            {
              onItemSelectionChange: o,
              selectedValue: r,
              multiselect: h,
              maxSelected: x,
            } = ye("<ComboboxTrigger>");
          let $ = !1,
            E = !1;
          h
            ? (($ = Array.isArray(r) && r.includes(W)),
              (E = !!x && Array.isArray(r) && r.length >= x))
            : ($ = W === r);
          const K = se || (E && !$);
          return (0, d.jsxs)(V.k.Item, {
            onSelect: () => o(W),
            selected: $,
            disabled: K,
            children: [
              h &&
                (0, d.jsxs)(a.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, d.jsx)(M.S, { checked: $, variant: "dark" }),
                    N,
                  ],
                }),
              !h && N,
            ],
          });
        }
        function fe(de) {
          const { children: W, beforeContent: N, render: se } = de,
            {
              bOpen: o,
              setOpen: r,
              inputValue: h,
              onInputChange: x,
              selectedValue: $,
              focusedValue: E,
              refScrollElement: K,
              onItemSelectionChange: i,
              activeIndex: t,
              setActiveIndex: s,
              onFocusChange: f,
              rgFilteredOptions: S,
              onSelectionChange: F,
              multiselect: R,
              onClear: O,
              refPopover: re,
              clearable: Se,
              filterPlaceholder: Ve,
              onIndexSelected: c,
              popoverPlacement: U,
              popoverPresentation: ne,
              popoverLabel: oe,
              maxSelected: he,
              variant: xe,
              ...we
            } = ye("<ComboboxTrigger>"),
            me = { tabIndex: 0, children: W },
            Fe = R ? Array.isArray($) && $.length > 0 : !!$,
            be = Fe && Se,
            Qe = be
              ? (0, d.jsx)(J.g, { onClick: O, cursor: "pointer", hitSlop: !0 })
              : (0, d.jsx)(X.V, {}),
            Je = be
              ? {
                  onSecondaryButton: O,
                  actionDescriptionMap: {
                    [z.pR.SECONDARY]: l.T.Localize("#Clear"),
                  },
                }
              : void 0,
            Ye = (0, P.f)("Combobox", xe),
            Ze = (0, d.jsx)(e.j, {
              beforeContent: N,
              afterContent: Qe,
              hasValue: Fe,
              cursor: "pointer",
              tabIndex: 0,
              variant: Ye,
              navProps: Je,
              ...we,
            }),
            $e = (0, G.Q)(se, Ze, me, void 0);
          return (0, d.jsx)(V.k.Anchor, { children: $e });
        }
        function le(de) {
          return (0, d.jsx)(y.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...de,
          });
        }
        function ie(de) {
          return (0, d.jsx)(y.EY, {
            contrast: "description",
            truncate: !0,
            ...de,
          });
        }
        function u(de, W) {
          if (typeof W == "string")
            return W.toLocaleLowerCase().includes(de.toLocaleLowerCase());
          try {
            return JSON.stringify(W)
              .toLocaleLowerCase()
              .includes(de.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function w(de) {
          return Y(de, !1);
        }
        function Y(de, W) {
          const {
              rgOptions: N,
              filter: se = u,
              filterPlaceholder: o,
              selectedValue: r,
              onSelectionChange: h,
              maxSelected: x,
            } = de,
            [$, E] = (0, H.useState)(""),
            [K, i] = (0, H.useState)(!1),
            [t, s] = (0, H.useState)(null),
            f = (0, H.useMemo)(() => N.filter((c) => se($, c)), [$, N, se]),
            S = typeof t == "number",
            F = f.length > 0,
            R = (0, H.useCallback)(
              (c) => {
                c && !S && F && s(0), E(c);
              },
              [S, F],
            ),
            O = (0, H.useCallback)(
              (c) => {
                c || R(""), i(c);
              },
              [R],
            ),
            re = (0, H.useCallback)(
              (c) => {
                h(c), W || O(!1);
              },
              [W, h, O],
            ),
            Se = (c) => {
              re(W ? [] : null), c?.stopPropagation(), c?.preventDefault();
            },
            Ve = (0, H.useCallback)(
              (c) => {
                if (!W) re(c);
                else if (!r) re([c]);
                else {
                  const U = r,
                    ne = U.indexOf(c);
                  if (ne === -1) re(U.concat(c));
                  else return re(U.slice(0, ne).concat(U.slice(ne + 1)));
                }
              },
              [re, r, W],
            );
          return {
            activeIndex: t,
            setActiveIndex: s,
            rgFilteredOptions: f,
            selectedValue: r,
            onSelectionChange: re,
            onItemSelectionChange: Ve,
            onClear: Se,
            inputValue: $,
            onInputChange: R,
            bOpen: K,
            setOpen: O,
            filterPlaceholder: o,
            multiselect: W,
            maxSelected: x,
          };
        }
        const te = {
          Root: D,
          Option: L,
          Options: C,
          VirtualizedOptions: T,
          VirtualizedOption: Ge,
          VirtualizedContent: ae,
          Trigger: fe,
          DefaultOptionFilter: u,
          Value: le,
          Placeholder: ie,
        };
        function I(de) {
          return de
            ? typeof de == "string"
              ? de
              : typeof de == "number"
                ? de.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    de,
                  ),
                  "")
            : "";
        }
        function Q(de) {
          const {
              selectedValue: W,
              onSelectionChange: N,
              options: se,
              filter: o,
              filterPlaceholder: r,
              placeholder: h,
              getOptionLabel: x = I,
              ...$
            } = de,
            E = (0, H.useCallback)(
              (t, s) => (o ? o(t, s) : u(t, x(s))),
              [o, x],
            ),
            K = w({
              onSelectionChange: N,
              selectedValue: W,
              rgOptions: se,
              filter: E,
              filterPlaceholder: r,
            }),
            i = W != null;
          return (0, d.jsxs)(A.Root, {
            state: K,
            ...$,
            children: [
              (0, d.jsxs)(A.Trigger, {
                children: [
                  i && (0, d.jsx)(A.Value, { children: x(W) }),
                  !i && (0, d.jsx)(A.Placeholder, { children: h }),
                ],
              }),
              (0, d.jsx)(A.Options, {
                children: K.rgFilteredOptions.map((t) =>
                  (0, d.jsx)(L, { value: t, children: x(t) }, x(t)),
                ),
              }),
            ],
          });
        }
        const A = Object.assign(Q, te);
        function ce(de) {
          return Y(de, !0);
        }
        function ue(de) {
          const {
              selectedValue: W,
              onSelectionChange: N,
              options: se,
              filter: o,
              filterPlaceholder: r,
              placeholder: h,
              getOptionLabel: x = I,
              maxSelected: $,
              ...E
            } = de,
            K = (0, H.useCallback)(
              (f, S) => (o ? o(f, S) : u(f, x(S))),
              [o, x],
            ),
            i = ce({
              onSelectionChange: N,
              selectedValue: W,
              rgOptions: se,
              filter: K,
              filterPlaceholder: r,
              maxSelected: $,
            }),
            t = Array.isArray(W) && W.length > 0;
          let s = "";
          if (t) {
            const f = W.map((S) => x(S));
            "ListFormat" in Intl
              ? (s = new Intl.ListFormat((0, p.ZO)().strISOCode).format(f))
              : (s = f.join(", "));
          }
          return (0, d.jsxs)(A.Root, {
            state: i,
            ...E,
            children: [
              (0, d.jsxs)(A.Trigger, {
                children: [
                  t && (0, d.jsx)(A.Value, { children: s }),
                  !t && (0, d.jsx)(A.Placeholder, { children: h }),
                ],
              }),
              (0, d.jsx)(A.Options, {
                children: i.rgFilteredOptions.map((f) =>
                  (0, d.jsx)(A.Option, { value: f, children: x(f) }, x(f)),
                ),
              }),
            ],
          });
        }
        const B = Object.assign(ue, te),
          ee = (0, H.createContext)(null);
        function ye(de) {
          const W = (0, H.useContext)(ee);
          return (
            W || console.error(`${de} must be used within a <Combobox>!`), W
          );
        }
      },
      2333: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { o: () => j });
        var d = n(7850),
          H = n(3166),
          e = n(24660),
          X = n(72865),
          y = n(71742),
          k = n(90626);
        const J = k.createContext(!1);
        function V(G) {
          return jsx(J.Provider, { value: !0, children: G.children });
        }
        function _() {
          return k.useContext(J);
        }
        function j(G) {
          const {
            snr: a,
            focusable: g,
            navProps: p,
            href: M,
            openInNewWindow: Z,
            target: q,
            rel: m,
            ...P
          } = G;
          (0, y.wT)(
            !(Z && q),
            "Link: pass either openInNewWindow or target, not both",
          );
          const v = (0, H.Qn)(),
            l = _(),
            z = b(M, a),
            D = g ?? p?.focusable ?? !!z;
          let C = Z ? "_blank" : q;
          !C && l && (C = "_top");
          let ve = m;
          !ve && Z && (ve = "noreferrer noopener");
          const T = { href: z, target: C, rel: ve, ...P };
          return v && (D || p)
            ? (0, d.jsx)(e.Ii, { ...p, focusable: D, ...T })
            : (0, d.jsx)("a", { ...T });
        }
        function b(G, a) {
          const g = (0, X.n9)();
          return !G || !a
            ? G
            : a === !0
              ? (0, X.bV)(g, G)
              : (0, X.bV)({ ...g, ...a }, G);
        }
      },
      98929: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { F: () => e });
        var d = n(24089),
          H = n.n(d);
        function e() {
          return d.TextEntry;
        }
      },
      86668: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { k: () => b });
        var d = n(7850),
          H = n(73406),
          e = n.n(H),
          X = n(69289),
          y = n(60351),
          k = n(64238),
          J = n.n(k),
          V = n(68031),
          _ = n(8928),
          j = n(80549);
        function b(g) {
          const {
              size: p = "3",
              loading: M = !0,
              children: Z,
              color: q,
              variant: m,
              ...P
            } = g,
            v = (0, j.f)("LoadingSpinner", m);
          return Z || !M
            ? (0, d.jsxs)(y.az, {
                position: "relative",
                ...P,
                width: "fit-content",
                children: [
                  (0, d.jsx)("div", {
                    "data-visibility": !M,
                    className: H.ChildContainer,
                    children: Z,
                  }),
                  M &&
                    (0, d.jsx)(V.s, {
                      position: "absolute",
                      inset: "0",
                      justify: "center",
                      align: "center",
                      children: (0, d.jsx)(G, {
                        size: p,
                        color: q,
                        variant: v,
                      }),
                    }),
                ],
              })
            : (0, d.jsx)(G, { size: p, color: q, variant: v, ...P });
        }
        function G(g) {
          const { className: p, color: M, ...Z } = (0, X.mz)(g, a);
          return (0, d.jsx)("div", {
            "data-accent-color": M,
            className: J()(p, H.Spinner),
            ...Z,
          });
        }
        const a = [
          ..._.L,
          { prop: "size", responsive: !0, className: (g) => H[`Size-${g}`] },
          { prop: "variant", className: (g) => H[`Variant-${g}`] },
        ];
      },
      58952: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { WM: () => v, l6: () => ve, uh: () => ae });
        var d = n(7850),
          H = n(90626),
          e = n(92142),
          X = n(86946),
          y = n(12204),
          k = n(15252),
          J = n(63029),
          V = n(76854),
          _ = n(39790),
          j = n(85367),
          b = n(68031),
          G = n(80549),
          a = n(58017),
          g = n(64415);
        function p(le) {
          const {
              children: ie,
              state: u,
              placement: w = "bottom-end",
              popoverWidth: Y = "dropdown",
              popoverMaxHeight: te,
              popoverPresentation: I,
              popoverLabel: Q,
              ...A
            } = le,
            [ce, ue] = (0, H.useState)(null),
            [B, ee] = (0, H.useState)(null),
            ye = (0, H.useMemo)(
              () =>
                u.rgOptions.findIndex((se) =>
                  u.multiselect
                    ? u.selectedValue.includes(se)
                    : se === u.selectedValue,
                ),
              [u.selectedValue, u.rgOptions, u.multiselect],
            ),
            de = (0, H.useRef)(null),
            W = {
              ...u,
              ...A,
              focusedValue: ce,
              onFocusChange: ue,
              refPopover: de,
              popoverLabel: Q,
              setOpen: (se) => {
                se && ue(u.multiselect ? u.selectedValue[0] : u.selectedValue),
                  u.setOpen(se);
              },
              focusedIndex: B,
              onFocusedIndexChange: ee,
            },
            N = (0, e.T)({
              open: u.bOpen,
              onOpenChange: u.setOpen,
              width: Y,
              maxHeight: te,
              placement: w,
              presentation: I,
              selectedIndex: ye,
              setSelectedIndex: (se) =>
                u.onItemSelectionChange(u.rgOptions[se]),
              activeIndex: B,
              setActiveIndex: ee,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, d.jsx)(L.Provider, {
            value: W,
            children: (0, d.jsx)(e.k.Root, { state: N, children: ie }),
          });
        }
        function M(le) {
          const { refPopover: ie, popoverLabel: u } = fe("<Select.Options>");
          return (0, d.jsx)(e.k.Positioner, {
            ref: ie,
            label: u,
            children: le.children,
          });
        }
        function Z(le) {
          const { value: ie, children: u, disabled: w, ...Y } = le,
            {
              onItemSelectionChange: te,
              multiselect: I,
              selectedValue: Q,
              maxSelected: A,
            } = fe("<SelectTrigger>"),
            ce = typeof ie == "string" ? ie : void 0;
          let ue = !1,
            B = !1;
          I
            ? ((ue = Array.isArray(Q) && Q.includes(ie)),
              (B = !!A && Array.isArray(Q) && Q.length >= A))
            : (ue = ie === Q);
          const ee = w || (B && !ue);
          return (0, d.jsxs)(e.k.Item, {
            label: ce,
            onSelect: () => te(ie),
            selected: ue,
            disabled: ee,
            ...Y,
            children: [
              I &&
                (0, d.jsxs)(b.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, d.jsx)(j.S, { checked: ue, variant: "dark" }),
                    u,
                  ],
                }),
              !I && u,
            ],
          });
        }
        function q(le) {
          const { children: ie, render: u } = le,
            {
              bOpen: w,
              setOpen: Y,
              selectedValue: te,
              variant: I,
              size: Q,
              radius: A,
              status: ce,
              color: ue,
              rgOptions: B,
              multiselect: ee,
              onClear: ye,
              focusedValue: de,
              onFocusChange: W,
              onSelectionChange: N,
              clearable: se,
              focusedIndex: o,
              onItemSelectionChange: r,
              onFocusedIndexChange: h,
              refPopover: x,
              popoverLabel: $,
              placeholder: E,
              maxSelected: K,
              ...i
            } = fe("<SelectTrigger>"),
            t = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => Y(!w),
              children: ie,
            },
            s = ee ? Array.isArray(te) && te.length > 0 : !!te,
            f = s && se,
            S = f
              ? (0, d.jsx)(J.g, { onClick: ye, cursor: "pointer", hitSlop: !0 })
              : (0, d.jsx)(y.V, {}),
            F = f
              ? {
                  onSecondaryButton: ye,
                  actionDescriptionMap: {
                    [g.pR.SECONDARY]: a.T.Localize("#Clear"),
                  },
                }
              : void 0,
            R = (0, G.f)("Select", I),
            O = (0, d.jsx)(X.j, {
              afterContent: S,
              variant: R,
              size: Q,
              radius: A,
              status: ce,
              color: ue,
              hasValue: s,
              tabIndex: 0,
              cursor: "pointer",
              navProps: F,
              ...i,
            }),
            re = (0, V.Q)(u, O, t, void 0);
          return (0, d.jsx)(e.k.Anchor, { children: re });
        }
        function m(le) {
          return (0, d.jsx)(k.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: le.children,
          });
        }
        function P(le) {
          return (0, d.jsx)(k.EY, {
            contrast: "description",
            truncate: !0,
            children: le.children,
          });
        }
        function v(le) {
          return l(le, !1);
        }
        function l(le, ie) {
          const { onSelectionChange: u, selectedValue: w, ...Y } = le,
            [te, I] = (0, H.useState)(!1),
            Q = (0, H.useCallback)(
              (ue) => {
                u(ue), ie || I(!1);
              },
              [u, ie],
            ),
            A = (0, H.useCallback)(
              (ue) => {
                Q(ie ? [] : null), ue?.stopPropagation(), ue?.preventDefault();
              },
              [Q, ie],
            ),
            ce = (0, H.useCallback)(
              (ue) => {
                if (!ie) Q(ue);
                else {
                  const B = w,
                    ee = B.indexOf(ue);
                  if (ee === -1) Q(B.concat(ue));
                  else return Q(B.slice(0, ee).concat(B.slice(ee + 1)));
                }
              },
              [Q, w, ie],
            );
          return {
            onSelectionChange: Q,
            onItemSelectionChange: ce,
            onClear: A,
            bOpen: te,
            setOpen: I,
            multiselect: ie,
            selectedValue: w,
            ...Y,
          };
        }
        const z = {
          Root: p,
          Option: Z,
          Options: M,
          Trigger: q,
          Value: m,
          Placeholder: P,
        };
        function D(le) {
          return typeof le == "string"
            ? le
            : typeof le == "number"
              ? le.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  le,
                ),
                "");
        }
        function C(le) {
          const {
              selectedValue: ie,
              onSelectionChange: u,
              options: w,
              placeholder: Y,
              getOptionLabel: te = D,
              ...I
            } = le,
            Q = v({
              onSelectionChange: u,
              selectedValue: ie,
              rgOptions: w,
              placeholder: Y,
            }),
            A = ie != null,
            ce = A ? te(ie) : "";
          return (0, d.jsxs)(ve.Root, {
            state: Q,
            ...I,
            children: [
              (0, d.jsxs)(ve.Trigger, {
                children: [
                  A && (0, d.jsx)(ve.Value, { children: ce }),
                  !A && (0, d.jsx)(ve.Placeholder, { children: Y }),
                ],
              }),
              (0, d.jsx)(ve.Options, {
                children: Q.rgOptions.map((ue, B) =>
                  (0, d.jsx)(ve.Option, { value: ue, children: te(ue) }, B),
                ),
              }),
            ],
          });
        }
        const ve = Object.assign(C, z);
        function T(le) {
          return l(le, !0);
        }
        const ge = z;
        function Ge(le) {
          const {
              selectedValue: ie,
              onSelectionChange: u,
              options: w,
              placeholder: Y,
              getOptionLabel: te = D,
              maxSelected: I,
              ...Q
            } = le,
            A = T({
              onSelectionChange: u,
              selectedValue: ie,
              rgOptions: w,
              placeholder: Y,
              maxSelected: I,
            }),
            ce = Array.isArray(ie) && ie.length > 0;
          let ue = "";
          if (ce) {
            const B = ie.map((ee) => te(ee));
            "ListFormat" in Intl
              ? (ue = new Intl.ListFormat((0, _.ZO)().strISOCode).format(B))
              : (ue = B.join(", "));
          }
          return (0, d.jsxs)(ae.Root, {
            state: A,
            ...Q,
            children: [
              (0, d.jsxs)(ae.Trigger, {
                children: [
                  ce && (0, d.jsx)(ae.Value, { children: ue }),
                  !ce && (0, d.jsx)(ae.Placeholder, { children: Y }),
                ],
              }),
              (0, d.jsx)(ae.Options, {
                children: A.rgOptions.map((B, ee) =>
                  (0, d.jsx)(ae.Option, { value: B, children: te(B) }, ee),
                ),
              }),
            ],
          });
        }
        const ae = Object.assign(Ge, ge),
          L = (0, H.createContext)(null);
        function fe(le) {
          const ie = (0, H.useContext)(L);
          return (
            ie || console.error(`${le} must be used within a <Select>!`), ie
          );
        }
      },
      9656: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { F: () => j });
        var d = n(7850),
          H = n(90626),
          e = n(71742),
          X = n(13854),
          y = n(75),
          k = n.n(y),
          J = n(76854);
        const V = Object.assign(_, { Root: G, Track: g, Range: p, Handle: M });
        function _(P) {
          const {
              value: v,
              onValueChange: l,
              onValueSettled: z,
              min: D,
              ...C
            } = P,
            ve = [v],
            T = (0, H.useCallback)((Ge) => l(Ge[0]), [l]),
            ge = (0, H.useCallback)((Ge) => z?.(Ge[0]), [z]);
          return (0, d.jsxs)(G, {
            ...C,
            min: D,
            onValueChange: T,
            onValueSettled: ge,
            value: ve,
            children: [
              (0, d.jsx)(g, { children: (0, d.jsx)(p, { start: D, end: v }) }),
              (0, d.jsx)(M, {}),
            ],
          });
        }
        function j(P) {
          const { value: v } = P;
          return (0, d.jsxs)(G, {
            ...P,
            children: [
              (0, d.jsx)(g, {
                children: (0, d.jsx)(p, { start: v[0], end: v[1] }),
              }),
              (0, d.jsx)(M, {}),
              (0, d.jsx)(M, {}),
            ],
          });
        }
        const b = (0, H.createContext)(null);
        function G(P) {
          const { children: v, color: l, ...z } = P,
            {
              min: D,
              max: C,
              onValueChange: ve,
              value: T,
              step: ge = 1,
              onValueSettled: Ge,
            } = P,
            ae = (0, H.useRef)(null),
            L = (0, H.useRef)(null),
            [fe] = (0, H.useState)(() => new Set()),
            [le, ie] = (0, H.useState)(!1);
          return (0, d.jsx)(b.Provider, {
            value: { ...z, handles: fe, bDragActive: le },
            children: (0, d.jsx)("div", {
              className: y.SliderRoot,
              "data-accent-color": l,
              ref: ae,
              onPointerDown: (u) => {
                if (ae.current) {
                  if (
                    (u.target.setPointerCapture(u.pointerId),
                    typeof T != "number")
                  ) {
                    const w = ae.current.getBoundingClientRect(),
                      Y = Z(u.clientX - w.left, [0, w.width], [D, C]);
                    L.current = { activeValueIndex: a(T, Y), bMoved: !1 };
                  } else L.current = { activeValueIndex: 0, bMoved: !1 };
                  ie(!0);
                }
              },
              onPointerUp: (u) => {
                const w = u.target;
                w.hasPointerCapture(u.pointerId) &&
                  (w.releasePointerCapture(u.pointerId),
                  Ge && L.current?.bMoved && Ge(T),
                  ie(!1));
              },
              onPointerMove: (u) => {
                if (
                  u.target.hasPointerCapture(u.pointerId) &&
                  ae.current &&
                  L.current
                ) {
                  const Y = ae.current.getBoundingClientRect(),
                    te = Z(u.clientX - Y.left, [0, Y.width], [D, C]),
                    I = q({ value: te, min: D, max: C, step: ge }),
                    Q = [...T];
                  (Q[L.current.activeValueIndex] = I),
                    Q.sort((A, ce) => A - ce),
                    (L.current.activeValueIndex = Q.indexOf(I)),
                    (L.current.bMoved = !0),
                    ve(Q);
                }
              },
              onClick: (u) => {
                if (!ae.current || L.current?.bMoved) return;
                const w = ae.current.getBoundingClientRect(),
                  Y = Z(u.clientX - w.left, [0, w.width], [D, C]),
                  te = q({ value: Y, min: D, max: C, step: ge }),
                  I = a(T, Y),
                  Q = [...T];
                (Q[I] = te), ve(Q), Ge && Ge(Q);
              },
              children: (0, d.jsx)("div", { className: y.Inner, children: v }),
            }),
          });
        }
        function a(P, v) {
          if (P.length <= 1) return P.length - 1;
          let l = 0,
            z = Math.abs(v - P[0]);
          for (let D = 1; D < P.length; D++) {
            const C = Math.abs(P[D] - v);
            C < z && ((l = D), (z = C));
          }
          return l;
        }
        function g(P) {
          const { render: v, ...l } = P;
          return (0, J.Q)(
            v,
            (0, d.jsx)("div", { className: y.SliderTrack }),
            l,
            void 0,
          );
        }
        function p(P) {
          const { start: v, end: l, render: z } = P,
            D = (0, H.useContext)(b);
          (0, e.wT)(D, "SliderRange must be used within a SliderRoot!");
          const { min: C, max: ve } = D,
            T = m(v, C, ve),
            ge = 100 - m(l, C, ve);
          return (0, J.Q)(
            z,
            (0, d.jsx)("div", {
              className: y.SliderRange,
              style: { "--pct-left": `${T}%`, "--pct-right": `${ge}%` },
            }),
            {},
            void 0,
          );
        }
        function M(P) {
          const { render: v } = P,
            l = (0, H.useContext)(b);
          (0, e.wT)(l, "SliderHandle must be used within a SliderRoot!");
          const {
              min: z,
              max: D,
              handles: C,
              value: ve,
              step: T = 1,
              onValueChange: ge,
              onValueSettled: Ge,
            } = l,
            [ae, L] = (0, H.useState)(null),
            [fe, le] = (0, H.useState)(-1);
          (0, H.useEffect)(
            () =>
              ae ? (C.add(ae), le(C.size - 1), () => C.delete(ae)) : () => {},
            [ae, C],
          );
          const ie = fe > -1,
            w = { "--handle-pct": `${m(ie ? ve[fe] : z, z, D)}%` },
            Y = (I) => {
              switch (I.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const Q = I.key === "ArrowRight" || I.key === "ArrowUp",
                    A = T * (Q ? 1 : -1),
                    ce = q({ value: ve[fe] + A, min: z, max: D, step: T }),
                    ue = [...ve];
                  (ue[fe] = ce),
                    ge(ue),
                    Ge && Ge(ue),
                    I.preventDefault(),
                    I.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const Q = I.key === "PageUp",
                    A = Math.round((D - z) / 10) * (Q ? 1 : -1),
                    ce = q({ value: ve[fe] + A, min: z, max: D, step: T }),
                    ue = [...ve];
                  (ue[fe] = ce),
                    ge(ue),
                    Ge && Ge(ue),
                    I.preventDefault(),
                    I.stopPropagation();
                  break;
                }
              }
            };
          ie || (w.display = "none");
          const te = {
            ref: L,
            role: "slider",
            "aria-valuenow": ve[fe],
            "aria-valuemin": z,
            "aria-valuemax": D,
            tabIndex: 0,
            onKeyDown: Y,
          };
          return (0, J.Q)(
            v,
            (0, d.jsx)("span", { className: y.SliderHandle, style: w }),
            te,
            { value: ve[fe], bDragActive: l.bDragActive },
          );
        }
        function Z(P, v, l) {
          if (v[0] === v[1] || l[0] === l[1]) return l[0];
          const D = ((l[1] - l[0]) / (v[1] - v[0])) * (P - v[0]) + l[0];
          return X.OQ(D, l[0], l[1]);
        }
        function q(P) {
          const { value: v, min: l, max: z, step: D } = P,
            ve = Math.round((v - l) / D) / (1 / D);
          return X.OQ(ve + l, l, z);
        }
        function m(P, v, l) {
          return ((P - v) / (l - v)) * 100;
        }
      },
      1522: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { f: () => j });
        var d = n(7850),
          H = n(3877),
          e = n(98929),
          X = n(86946),
          y = n(64238),
          k = n.n(y),
          J = n(80549),
          V = n(24660),
          _ = n(3166);
        function j(G) {
          const {
              rows: a = 3,
              resize: g = "none",
              ref: p,
              value: M,
              onTextChange: Z,
              onChange: q,
              disabled: m,
              variant: P,
              ...v
            } = G,
            l = (T) => {
              m || (Z(T.target.value), q && q(T));
            },
            z = (0, J.f)("TextArea", P),
            D = (0, _.Qn)(),
            C = (0, X.w)({
              ...v,
              className: k()((0, H.T)(), (0, e.F)()),
              style: { resize: g },
              cursor: "text",
              disabled: m,
              variant: z,
            }),
            ve = D ? b : "textarea";
          return (0, d.jsx)(ve, {
            ref: p,
            ...C,
            value: M || "",
            onChange: l,
            rows: a,
            readOnly: m,
            "aria-disabled": m,
          });
        }
        function b(G) {
          return (0, d.jsx)(V.dO, { noFocusRing: !0, ...G });
        }
      },
      7125: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { k: () => M });
        var d = n(7850),
          H = n(90626),
          e = n(64238),
          X = n.n(e),
          y = n(3877),
          k = n(98929),
          J = n(60351),
          V = n(86946),
          _ = n(63029),
          j = n(18938),
          b = n(24660),
          G = n(80549),
          a = n(3166),
          g = n(58017),
          p = n(64415);
        function M(q) {
          const { extracted: m, remaining: P } = (0, J.A4)(q),
            {
              value: v,
              onTextChange: l,
              onTextClear: z,
              clearable: D,
              onChange: C,
              radius: ve,
              variant: T,
              size: ge,
              beforeContent: Ge,
              afterContent: ae,
              inputRef: L,
              ref: fe,
              disabled: le,
              gamepadFocusable: ie = !0,
              status: u,
              ...w
            } = P,
            Y = (0, a.Qn)(),
            te = (se) => {
              le || (l(se.target.value), C && C(se));
            },
            I = () => {
              l(""), z && z();
            },
            Q = !!v && D,
            A = Q
              ? (0, d.jsx)(_.g, { onClick: I, cursor: "pointer", hitSlop: !0 })
              : ae,
            ce = (0, G.f)("TextInput", T),
            ue = {
              ...m,
              variant: ce,
              size: ge,
              radius: ve,
              status: u,
              beforeContent: Ge,
              afterContent: A,
              ref: fe,
              disabled: le,
            },
            B = (0, H.useRef)(null),
            ee = (se) => {
              B.current && se.target !== B.current && B.current.focus();
            },
            ye = ie && Y,
            de = ye ? Z : "input",
            N =
              ye && Q && !le
                ? {
                    onSecondaryButton: I,
                    actionDescriptionMap: {
                      [p.pR.SECONDARY]: g.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, d.jsx)(V.j, {
            cursor: "text",
            ...ue,
            onClick: ee,
            children: (0, d.jsx)(de, {
              ref: (0, j.Ue)(L, B),
              type: "text",
              "aria-disabled": le,
              readOnly: le,
              className: X()((0, y.T)(), (0, k.F)()),
              value: v || "",
              onChange: te,
              ...N,
              ...w,
            }),
          });
        }
        function Z(q) {
          return (0, d.jsx)(b.BA, { noFocusRing: !0, ...q });
        }
      },
      95994: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { x: () => j });
        var d = n(7850),
          H = n(70182),
          e = n(64238),
          X = n.n(e),
          y = n(8928),
          k = n(69289),
          J = n(75180),
          V = n.n(J),
          _ = n(3166);
        function j(G) {
          const { as: a = "div", ref: g, focusable: p, navProps: M, ...Z } = G,
            q = (0, _.Qn)(),
            m = (0, k.mz)({ ...Z, className: X()(J.Grid, G.className) }, b),
            P = p ?? M?.focusable ?? !!Z.onClick,
            v = (0, d.jsx)(a, { ref: g, ...m });
          return q
            ? (0, d.jsx)(H.J, {
                "flow-children": "grid",
                ...(M || {}),
                focusable: P,
                children: v,
              })
            : v;
        }
        const b = [
          ...y.h,
          {
            prop: "display",
            responsive: !0,
            className: J.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: J.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: J.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: J.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: J.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: J.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: J.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: J.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: J.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: J.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: J.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: J.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: J.Gap,
            cssProperty: (G) => ["--grid-gap", `var(--spacing-${G})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: J.Gap,
            cssProperty: (G) => ["--grid-gap-x", `var(--spacing-${G})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: J.Gap,
            cssProperty: (G) => ["--grid-gap-y", `var(--spacing-${G})`],
          },
        ];
      },
      86336: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { W: () => b, Y: () => _ });
        var d = n(7850),
          H = n(50122),
          e = n.n(H),
          X = n(15252),
          y = n(69289),
          k = n(70182),
          J = n(3166),
          V = n(2333);
        function _(G) {
          const { underline: a = "auto", ...g } = G,
            p = (0, y.mz)({ ...g, underline: a, className: H.TextLink }, j);
          return (0, d.jsx)(V.o, { ...p });
        }
        const j = [
          ...X.Ae,
          { prop: "underline", className: (G) => H[`Underline-${G}`] },
        ];
        function b(G) {
          const { underline: a = "auto", focusable: g, navProps: p, ...M } = G,
            Z = (0, J.Qn)(),
            q = g ?? p?.focusable ?? !!M.onClick,
            m = (0, d.jsx)("span", {
              role: "button",
              ...(0, y.mz)(
                { ...M, underline: a, className: H.TextLinkButton },
                j,
              ),
            });
          return Z && (q || p)
            ? (0, d.jsx)(k.J, { ...(p || {}), focusable: q, children: m })
            : m;
        }
      },
      76962: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { y: () => b });
        var d = n(7850),
          H = n(24660),
          e = n(38566),
          X = n(54130),
          y = n(64238),
          k = n.n(y),
          J = n(90626),
          V = n(3166),
          _ = n(88208),
          j = n.n(_);
        const b = Object.assign(G, { Root: a, Content: p });
        function G(M) {
          const { children: Z, className: q, ...m } = M;
          return (0, d.jsx)(b.Root, {
            ...m,
            children: (0, d.jsx)(b.Content, { className: q, children: Z }),
          });
        }
        function a(M) {
          const {
              onClose: Z,
              className: q,
              navID: m,
              children: P,
              allowScrollBehind: v,
              ...l
            } = M,
            [z, D] = J.useState(!1),
            C = J.useCallback((T) => {
              T &&
                (T.showModal(),
                T.ownerDocument.defaultView &&
                  D(
                    T.ownerDocument.body.scrollHeight >
                      T.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            ve = J.useCallback(
              (T) => {
                T.target == T.currentTarget && Z("backdropclick");
              },
              [Z],
            );
          return (0, d.jsx)(g, {
            navID: m ?? "ModalDialog",
            onClose: Z,
            children: (0, d.jsx)("dialog", {
              ref: C,
              className: k()(_.ModalDialog, !v && z && _.PreventScroll, q),
              onClose: () => Z("onclose"),
              onClick: ve,
              ...l,
              children: (0, d.jsx)(X.q, { children: P }),
            }),
          });
        }
        function g(M) {
          const { navID: Z, onClose: q, children: m } = M,
            P = J.useCallback(() => q("cancelbutton"), [q]),
            v = J.useRef(void 0);
          return (
            (0, H.O7)(v, !0, !0),
            (0, V.Qn)()
              ? (0, d.jsx)(e.D6, {
                  navID: Z ?? "ModalDialog",
                  onCancelButton: P,
                  modal: !0,
                  navTreeRef: v,
                  children: m,
                })
              : (0, d.jsx)(d.Fragment, { children: m })
          );
        }
        function p(M) {
          const { className: Z, children: q } = M;
          return (0, d.jsx)("div", {
            className: k()(_.ModalDialogContent, Z),
            onClick: (m) => m.stopPropagation(),
            children: q,
          });
        }
      },
      47604: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { s: () => _ });
        var d = n(7850),
          H = n(19298),
          e = n(64238),
          X = n.n(e),
          y = n(36118),
          k = n(76962),
          J = n(83217),
          V = n.n(J);
        function _(j) {
          const {
            onClose: b,
            className: G,
            navID: a,
            children: g,
            strTitle: p,
            wideMode: M,
            ...Z
          } = j;
          return (0, d.jsx)(k.y, {
            onClose: b,
            navID: a ?? "SimpleModalDialog",
            ...Z,
            children: (0, d.jsxs)("div", {
              className: X()(G, V().SimpleModalDialog, M && V().WideMode),
              children: [
                " ",
                (0, d.jsxs)(H.Z, {
                  className: V().SimpleModalDialogHeader,
                  children: [
                    p &&
                      (0, d.jsx)("div", {
                        className: V().SimpleModalDialogTitle,
                        children: p,
                      }),
                    (0, d.jsx)("button", {
                      onClick: (q) => (b("xclick"), q.preventDefault(), !1),
                      className: V().XButton,
                      children: (0, d.jsx)(y.tmm, {}),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: V().SimpleModalContentCtn,
                  children: g,
                }),
              ],
            }),
          });
        }
      },
      22880: (pe, Ne, n) => {
        "use strict";
        n.d(Ne, { g: () => e });
        var d = n(40323),
          H = n.n(d);
        class e {
          static ParseCSVFile(y, k) {
            return new Promise((J, V) => {
              const j = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: J,
                error: (b) => V({ errors: [b] }),
                transformHeader: k,
              };
              H().parse(y, j);
            });
          }
          static ReadFile(y) {
            return new Promise((k, J) => {
              const V = new FileReader();
              (V.onload = () => k(V.result ?? "")), V.readAsText(y);
            });
          }
          static WriteFile(y, k) {
            let J = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(y, k);
            else {
              const V = window.URL.createObjectURL(y);
              J.href = V;
            }
            J.setAttribute("download", k), J.click();
            try {
              document.removeChild(J);
            } catch {}
          }
          static WriteCSVToFile(y, k, J, V) {
            const _ = V
                ? H().unparse({ fields: V, data: y }, { header: !0 })
                : H().unparse(y, { header: !0 }),
              j = J == !0 ? ["\uFEFF" + _] : [_];
            e.WriteFile(new Blob(j, { type: "text/csv:charset=utf-8;" }), k);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(y, k) {
            const J = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let V =
              "<" +
              J() +
              'xml version="1.0" encoding="UTF-8" ' +
              J() +
              `>
`;
            (V += new XMLSerializer().serializeToString(y)),
              e.WriteFile(
                new Blob([V], { type: "application/xml:charset=utf-8;" }),
                k,
              );
          }
        }
      },
      70427: (pe) => {
        pe.exports = {
          Released: "_5b1xKr2_wu1RuYuKMpr5D",
          ReleasedText: "_24itkeC4MEtyYRSpkJhaTL",
          Unreleased: "_3d8pNQbbaqjir817UiFN9G",
          UnreleasedText: "_2hifQgWDFIPCQTwebxuSTt",
          Warning: "_3QXTpGdlOK6E2gIpBmEFvF",
          Label: "_2CGFBQM2BThCLLPAoi4KIU",
          Important: "PXEH2634ebAHlFY4wcpCy",
          InlineSVG: "_3lh66ob7v6HY7TlxewVQ_b",
          TableHeader: "_6J8I921VyOxZPGLwYPLgy",
          SmallIconButton: "_2h2JK9tl2XKZk0tSncTAxp",
          EditButton: "_31NhGmT7TwTCM8J1HborFs",
          DeleteButton: "_2uGkwmOWceCBc--Z9q_75P",
          BulkMoveButton: "DcuEUbDC3fqQVZKzyaak3",
          SelectIconOption: "_2r3i0WyJ-gSpifyD0JQdZE",
          Takeover: "_9JFhB-CMLoXAyliexUHye",
          TakeoverBody: "_3MCO1BiXD95WdYgL9UTlSJ",
          Instructions: "s_iKU1jabRu1BJhz_7kb7",
          BulkEdit: "fkI7RYiO0vj6PTFql_JPy",
          BulkEditSection: "_3KKYVr6HVCNs5nzc_l522O",
          BulkEditHeader: "_2BivQamb3LEiQtwiyru4SU",
          BulkEditInstructions: "_196W2uTFyW8D5dFhidIkKr",
          FileTypesList: "_34PNksp_-K8y5qELr6Dz5U",
          BulkUploadFileDropBox: "_1x4OSiQxHCdtZVbOLKjgWY",
          ErrorsList: "G15vfap5Kp-eARgDZ_OGa",
          CsvErrorsTable: "_2HbwaZmNxM1yrWcVtuno3I",
          AchievementDetailIcon: "uZ3AltKSgLFNl_vfmvtna",
          ResultsContainer: "_2R-UIx-iBQjZAPggwvsZsZ",
          ImportedAchievements: "_3YMlJi-OOV8U7qQqGec18o",
          UnmodifiedIcon: "_2GKTn3FXf_DNKDbE4lmIaQ",
          ModifiedIcon: "_3rGiZ9Ykx3rDc8tyqpQAuO",
          ImportedAchievementsTableContainer: "_29B0fvUdb5aMIGyBKtnoVK",
          ChangeBorder: "_13i9BnOWIUGsO_L68Gmt4p",
          Added: "_3vUV2Z3AOriQUG64lctFyh",
          Deleted: "_2anivdc364kdpefGcYSHFi",
          Modified: "_3CMPqgjXysD-rlMrso3bS4",
          ModifiedField: "_3Qegweoddsf3tPpZrKM4sl",
          ImportedAchievementsTableHeader: "_2_AZ5DRLMDtCiLw-Dpo7F2",
          CollapsibleAchievementsTableHeader: "_2vSQTVO4_EZVJsY1ryu3Ts",
          ExpandButton: "_366gKECQVM1IOrdNaXX8dj",
          ImportedAchievementsTable: "_2eA_FYkORP-3wyqAIW4vVh",
          Collapsed: "_1dW017rmGGPV_eyahtHPFb",
          ImportedAchievementsTableGroup: "mPnD0No4hBce3faVedeiE",
          CompactAchievementRow: "_1Rfc1BDhzcC9knHNObmDyL",
          NameColumn: "ggNtyLN5jtwfSzQLEelNQ",
          ApiColumn: "_1tteA0CuHUJMKITKjbveBL",
          VisibilityColumn: "GlevOmet6O5-XYWcl9KHj",
          ProgressColumn: "_2woZ5CfAS4IuiI13yjBHeo",
          ImportedGroups: "_2z7MVqbC7xWxdhcBzYoVW8",
          ResultsSection: "_3BY0cyaNahGJISKkPcBei0",
          ResultsSectionHeader: "_2S3eJxNKMFeGae4Xt7aY1j",
          CollapsibleResultsSectionHeader: "JhQowPYpM0hwJNlXGUOgC",
          ResultsSectionBody: "_1j-e5L24aKdIk0A-K4lL9v",
          FileSuccessRow: "_3yDR_m8Cyv6_3PCJlNJlnH",
          FileImage: "_3Dige9dJ-b_rIXDViZ_Lll",
          FileErrorList: "_2taJcQaC6hSr1mlv2Mh46K",
          FileError: "_1ZSVlHQLDXbW7IhdEUp8eZ",
          WarningGlobeIcon: "F-0UNlG8kZ7QyEHZjAAI9",
          LegendContainer: "_1rNyRSz-GRGqRSKgm_hwu1",
          LegendChangeIcon: "Wr-XyB_FGwAFKOZRpMUIm",
          LanguageSelect: "inmRcjCWNUMxS_66r2X_f",
        };
      },
      70402: (pe) => {
        pe.exports = {
          Size32: "agHuyuV8ihlarNHATSszd",
          Size64: "_1uacLAj2YkREOmwRZ9R4bJ",
          Size128: "_2Wyg29PZJAdWb-Nlktyn0c",
          Size256: "P3dp1clsVi3M-AJL4J1T1",
          AchievementImageContainer: "_tQ4WDxUJeDoCXy59CF0I",
          NewIcon: "_2ovKL6EYPJO2z_M2YLgW0I",
          AchievementMissingImage: "_1hswY_5QcX-V-2WWGdc2P1",
        };
      },
      15008: (pe) => {
        pe.exports = {
          Released: "_2myyMAPhlMVaP37uxzXPFh",
          ReleasedText: "_2wL3wVC8JBbKMp7KF2PXX4",
          Unreleased: "h_BAL7y4NWxuSLNi51Bdt",
          UnreleasedText: "_36D99ASWP_P55MxbH5eyrP",
          Warning: "WvjS8fOiimkyfAlD43BAk",
          Label: "xo89MsO29kFQlnicz39nG",
          Important: "ii6EuMR7ADM4km0wBwC3N",
          InlineSVG: "_1gUqgXwJuV7eO_WtGSV5CS",
          TableHeader: "fkR3gwqgDvl_OI1NEuRe4",
          SmallIconButton: "_1WNIpnHPVGaIL4bRPDGZa5",
          EditButton: "_1xyTWpK8dMDIPdki40c4Q2",
          DeleteButton: "bjJujKkRt26gFHJ7ba-12",
          BulkMoveButton: "wua99I6nKE07YMn330SMV",
          SelectIconOption: "_1Ru87SimSXGrkpXkGPm0po",
          Takeover: "_2MCVWN_XpYpuFPa7NBBJya",
          TakeoverBody: "_36dlzt5NDXjQPWSOrNgK2L",
          Instructions: "_2potsZFPVY9tpE13ZrMpD4",
          GroupAchievementList: "_24OXR8ODkE5_gIR9MluOTZ",
          Compact: "vhTsl79uucCDx2Rs8c6vK",
          HasBeforeContent: "_2zQgs8oZJj726ax21e051Q",
          Name: "_3as6l-1WenMIjKiwCkLyeS",
          ApiName: "_3KIkxnhAh4xUSxucqbADHU",
          Availability: "_6_ZxB9gKyG20K_v_arYOz",
          ContentBefore: "_3xohUhLFi80Phvy5GoRljY",
          Images: "_3zVaxk4w57ttDqxvmiLrvm",
          Headers: "_21ihIUY5vYGxUEcrRYH5Ow",
          EditButtons: "_3_xATs245DMwG7jA8qTt9Q",
          IDText: "GEY1k-Qg6R9inQ7uidoBe",
          GroupVisibility: "_1pH7AJYw2zDYNUtdjc9QXv",
          AchievementEditDialog: "_1suW2rIqGtLWvdODlYsDrz",
          LocHeader: "_1F8CuRc2_T8-qbSTO9epBe",
          EditTitle: "_3wcUOx2qFE6nCRZ0cTB4Pf",
          EditContent: "_17VemE-e07xa1qfKTqnO3m",
          ButtonContainer: "_3yLE--noGD7Nrc4cG-8ASM",
          AchievementUploadBox: "mzXNhdj-spC15x3Eabw8p",
          AchievementDeleteDialog: "_l7sGBNB-aDG-B5Jw7K1c",
          AchievementBox: "_8DGXBBq00n5OrVKY4BxD3",
          InputWarning: "_1DsXtf0Yk0QV0MTZmNk_uT",
          GlobalRateIcon: "_2a7iS6INx62SSIlGvDrrK5",
          Cursor: "_3EMS8PhXqW2iLmobbD568y",
        };
      },
      5088: (pe) => {
        pe.exports = {
          Released: "_2uSJKNuBtUiaxyhtcvMIOP",
          ReleasedText: "_2nsqWrMNFHfdnV_JR37Qz3",
          Unreleased: "ZrKv3Jpr1tv8Z-ddi2Ml4",
          UnreleasedText: "_1GHiTH8wcPz8Pp0ti5sSem",
          Warning: "_1urY34zRwFShpEXjEqz3yY",
          Label: "_1yqsZdWQQKHh-nVlD4RuHM",
          Important: "_3X7HnN1pd0Dve8N5WGOFLD",
          InlineSVG: "_1HDzIgBxfTcuAqvk3X2ou5",
          TableHeader: "_2Tj9T5bd5VTxy21HJSsWxq",
          SmallIconButton: "qr0Fn0pmV_AU-X9lGjb7g",
          EditButton: "_3CccEH3mgAEi7wd48Nv-D9",
          DeleteButton: "_10H-EFN3Y_b80x82UwHj90",
          BulkMoveButton: "_1JSynpUkik7wyhh2ReMEQI",
          SelectIconOption: "_1qy3rjwuEUbQYxmvqgHIZm",
          Takeover: "_2hajWPJV98X6WZLcqmyldQ",
          TakeoverBody: "vHZ497nDU70y8xqvcJJ9i",
          Instructions: "_1p4PRHywBY_78rJ_89ODEY",
          EditorContainer: "_1Y8MzNAzO2fYkQQLmKU23O",
          HeaderContainer: "_3JPMXufgr4HTWfhvx6RXO1",
          Row: "_3uUyyKq85EF3g5m-3pBIc-",
          TabBar: "_3aA6Vxi9DRE2IdK93yFA3C",
          Selected: "BLpJ58J_SRVopLwSD1GZ2",
          Toolbar: "_1Dx_RICsqtiKMqlPr9e3WN",
          LanguageEditButton: "_2fJWKYmTd_QiqIL2_09a08",
          ButtonIcon: "_2k0lzahcD_wnNfW562LQf0",
        };
      },
      1103: (pe) => {
        pe.exports = {
          Released: "YrlnFZjNdzi5sAVb03V3r",
          ReleasedText: "C_ilbe1AoCgQRhk3Or3cU",
          Unreleased: "_2axtmxoCK6-gr-VwYd680F",
          UnreleasedText: "_1VEAMlvcbQltLTYY5eewMe",
          Warning: "_3AbDXec2ZVLz9gzx6YCH2B",
          Label: "_323hRrta7M4brbA6-T-FxA",
          Important: "ndOUWno5iHsnuw2IehBdd",
          InlineSVG: "_2XPjwd8pTShKzyXGrIeN5K",
          TableHeader: "P8FcDLDEE8LjMuln3wTRV",
          SmallIconButton: "_13Dy_lYbx9GKY97H0Z0VRS",
          EditButton: "_1vJU-v-MdIHvGoyC2ouWuV",
          DeleteButton: "_3vYNLqs7OzjdSMR4BijB3a",
          BulkMoveButton: "_1eucWqWTvU9_oEjWLMcKyk",
          SelectIconOption: "qvE8GQimc5jM3jGeS7Dr6",
          Takeover: "_1G66x2o26KxUMxjuSbnLRT",
          TakeoverBody: "at6q3fO5Pc98CzmEb9sO-",
          Instructions: "_2xkc5FGu7Qlt7LKZ0vAWDB",
          GroupListHeader: "lFtceEyCwIEO3Uh6cEuvx",
          GroupList: "_2rfxqsYitjPSqjcTsieQLV",
          GroupReorderDescription: "_1GUStLzFY9avHmQhd0GvjN",
          Group: "_3Wi_4KlXvz6XqQ9Eg4o8U2",
          GroupDisplay: "_2xUrpbUetPu_MBp2z2AFPk",
          GroupHeader: "_31oxiagAYavjr3pwhQnTyn",
          GroupHeaderContent: "_27Q-5fUh7F-AvKSLkmOMss",
          CoreGroup: "_33h8RC_ZyCJf7OE_7iHknu",
          GroupData: "_2VO17QYJ-mx0n1B5fClDfH",
          VisibilityColumn: "TYq2UKq6LmmuRtgPF_-ft",
          AchievementsFullDisplay: "CdBuxY_onNFkC-CJ4bMaC",
          Empty: "_3jkarZ1defJBltm_KLno5u",
          FilterFooter: "_14zPIalACsYKc75ohmDaZe",
          EditButtons: "_1Iho_oTyoIDN_OHsokhh2b",
          OptionsSVG: "PC1p1HVohvNpcoMQChMF9",
          IDText: "_2hJNPvKiT4GAJTLrOmqw0R",
          CollapseButton: "_3UgyfxPI8Sx0_tZ5DHBmRw",
          Editing: "_1Z3AkRTZ1ymTd8ejFjCMEq",
          AppTile: "_2mS-8XCLvIEU5uJNNB_eIi",
          GroupDeleteDialog: "_1meAV_A7H1u-BOHuUOgvta",
          GroupBox: "_2vt6Rs0bsDqVWnt0NE4lHT",
          AppTileImage: "_39_z7QweFoM7AfK_rrz02w",
          CompactGroupContainer: "_17NgH12KX6VldCenSGzQzl",
          GroupVisibilityInfo: "_9oQFplYy1CtRPv1h4400D",
          GroupVisibilitySummary: "hZ5rFKz1Ej1FhqyJtXteo",
          GroupVisibilityLabels: "kdJnVL3L2ta5clKt13XUH",
          MoveAchievementCheckbox: "_2gU98I05EZySaD8ipPKCto",
          MoveFooter: "_2ZAFBsrmvOlqT5KUdeOosO",
          GroupSorter: "x39ze-8f6OLf1lmi6xuSW",
          SortDefaultGroup: "_3T8K-SuIo-g8jM0psyX-eQ",
          OverlayContent: "_2pyLhJpZ61hXnV53X8_7nh",
          Icon: "_2gSsq-BEbcewxMLBg2h3Q8",
        };
      },
      6629: (pe) => {
        pe.exports = {
          Released: "W2UOJRTbrQzIu4RVJhj3_",
          ReleasedText: "_7YtUjVGRcByb2QHzL0VNp",
          Unreleased: "_3IiZE43dxAAkINf1FDiROM",
          UnreleasedText: "_1UDJsVP7Mb21EofVQKaw4h",
          Warning: "_1w_obF0lJq6izY8p5YY0RB",
          Label: "_3GQSHzQ_gLmxZXo_aRkgdu",
          Important: "M4CM-P-C9zxQOph-Ljy9k",
          InlineSVG: "_3AsL050udcay1HQYAdYH_X",
          TableHeader: "_4a7Mbpiw-nGsnrWwj3j0N",
          SmallIconButton: "_1VQU-cFK0lIxW8DdkpZDmZ",
          EditButton: "_3VRAarQMFwczpzi64b1kEP",
          DeleteButton: "_2AmnzUv21VRcxx6uQ-d8id",
          BulkMoveButton: "_2rmn-imVQyuyoCM7fQmMbV",
          SelectIconOption: "_10emwGGd6LIPdDUvJ94Kg9",
          Takeover: "_fJaaZ6kzhOOltlMqxW_N",
          TakeoverBody: "_9TSQV7FXR0Qb0do280FrI",
          Instructions: "_1MkTPp9nMtbWVM9ySp94xd",
          LocSelect: "TNP9N4Dpc8eyOwAINe5-q",
          Inline: "_22HVkYuDuat76NjKLWOEDu",
          LocText: "gcoVWF-iK2MXpCZRh7Tdm",
          LocTextInput: "fCEO0bgrLbLsl5AvbLWyF",
          Empty: "M_WD8ZjV0lCec6qL6D-fQ",
          Provided: "_1JFKP_q6whflboP72Ao52C",
          Missing: "_2AjU0CzoHHx3v0pwwr8le5",
          TextArea: "_3Nf1J7fM9X1bh9FPxaVC4_",
        };
      },
      14223: (pe) => {
        pe.exports = {
          MinMaxRangeContainer: "_BuNcDG_B3ZZqi9CJOn2r",
          MinMax: "_3zQd26Cgraf05sScvTPJ2F",
        };
      },
      79964: (pe) => {
        pe.exports = {
          Released: "_3dNgW7s9N5tXlrurCsF8dN",
          ReleasedText: "_1puXb3u61mMgIxUhdtr8y2",
          Unreleased: "_3rObkp4Qes5euhPZv3ZVZO",
          UnreleasedText: "AA-uAorKWF4I29mjLQVYs",
          Warning: "_3c7sBfF_5ZpNqKiDKOjnkP",
          Label: "_2w5GFz3RUKwVtQNXyTGkVj",
          Important: "dgn7GTx1UxcvhzdaBSmn_",
          InlineSVG: "_3XJbWGJZRS1RwvCv4_Uti5",
          TableHeader: "aa1fgxLMgEjs8mpSxDPbd",
          SmallIconButton: "_3u5DO-tRdDT90bK4xIe0mz",
          EditButton: "_2xJIwMB6gTGMKvvfrYUu7S",
          DeleteButton: "_9MxByVWXqoqAQD8-vFH_5",
          BulkMoveButton: "Dc4UN9b6GhIoCu38gxy8X",
          SelectIconOption: "_3sq_D2e-CrPG4EXpoCyo8X",
          Takeover: "CU3sRAdQTQgUdN19YohyI",
          TakeoverBody: "_1u619xZ85jz0jbmPAj3Fkk",
          Instructions: "eAXCYyP4Yo_obxJtxkQDw",
          SaveCloseButtons: "_3D4enyVLBjzX5hIkYjGqHt",
          ButtonContainer: "mxve6PMrinRTttvrTp7jw",
          SaveProgress: "xq00fRu498bnrRYyPbfn4",
          SaveProgressLabel: "_20Kbw-BaMeTvYXD2oo1rW",
          SaveProgressBar: "_3z_I3jZi6PmDRLzjkzKL7_",
          Icon: "_3MrFpvB3KKnTm85gb6oa6Z",
          ButtonIcon: "_1YhOgpne8YpIF6j3GsUyCf",
        };
      },
      3952: (pe) => {
        pe.exports = {
          DragBox: "_3ap_hrz6rd5dEZsu8cnXJ0",
          Dragging: "_2ZYfPxfw7ufPbPAb6bZOcq",
          Invalid: "_2xMKMSvFqnwUlpit8WK4B8",
        };
      },
      95415: (pe) => {
        pe.exports = {
          ValidatedInputContainer: "_22dxHS1peKgjat8FzJHd2x",
          Invalid: "_2riY6QZ83fjIFiYdBYGtcp",
          Warning: "qpy-N0lAR2xK3KsCbFdUf",
          ValidatedControl: "_3FBZTFD4pgCIfMtwDzXOxt",
          ErrorDetail: "_2sRzko2FZ5TO_QeLm3qqYT",
        };
      },
      28325: (pe) => {
        pe.exports = {
          AppTileContainer: "_1MNwvHXvTQh_nlTEGVL-9G",
          NoRecentApps: "l73IMu5N0BMAEv5-wk3NU",
          ViewAppsContainer: "_3bhAuHTe2QDmn7qVPrbhTn",
          ViewAppsLink: "_1DXsI6kGhs4saDdMEB5Zhp",
          AppTile: "_1ET9Is2SXz9L6oBuMGkhyc",
          AppTileImage: "_2ib4C2NrFHUrt3df5FaIkA",
          AppTileImagePlaceholder: "_1v97yYXETM1gTfYqCF1MYJ",
          AppLabels: "_1gCoNWQfTPQf4Oo6uJLX9",
          AppType: "_2ZrhAQm3GQlhhKkqzdGwsF",
          DLC: "_3joD2YzY0xQ4OQFjl8vTK1",
          Playtest: "_2BpsHGvYJ2BpGraZ66oN_-",
          Demo: "_2RgXBp9gOVTZDwSY533Aiz",
          Music: "_1yUcqupOCPqJJkEMvpmNyu",
          AppRelease: "_1XsM2jNRjoVa7SfxlYIXAb",
        };
      },
      6853: (pe) => {
        pe.exports = {
          Section: "_1FrGxLLJNyWZswyE9TGS3N",
          Body: "_1CaApUvC8ichAOgldt6XZm",
          Header: "WnpaUxHTbHM6dHV4JNyog",
          Title: "f3pCBilbcCpf8q3EUD2fp",
          Count: "tYEaq1iQcl91w3W4gzbeX",
          BetaCallout: "_3F09B-c90Mi_ABQSFt8qlI",
        };
      },
      82277: (pe) => {
        pe.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      69041: (pe) => {
        pe.exports = {
          Button: "_0BH1ydyFmSnUvoVK2hIc",
          "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
          Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
          "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
          "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
          "Variant-basic": "AjHMNGqS56A5oRpfyYhEz",
          "Variant-dark": "_29OIX_G3reF-rRPFaaV2mW",
          "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
          "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
          "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
          "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
          Width: "_3sJrbUPuxxtvf7RM9OYpwU",
          MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
        };
      },
      24089: (pe) => {
        pe.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      73406: (pe) => {
        pe.exports = {
          Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
          LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
          "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
          "Size-2": "_4YMNfb67K5DdLQo1iUILX",
          "Size-3": "_389OPmdZoebw42_AlsUFxi",
          "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
          "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
          "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
          "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
          ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
        };
      },
      75: (pe) => {
        pe.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      75180: (pe) => {
        pe.exports = {
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
      50122: (pe) => {
        pe.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      88208: (pe) => {
        pe.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      83217: (pe) => {
        pe.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      45737: (pe) => {
        pe.exports = {
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
    },
  ]);
})();

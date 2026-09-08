/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [70351],
  {
    20019: (e, t, n) => {
      n.d(t, { U: () => a });
      var o = n(95578);
      function a(e) {
        switch (e) {
          case o.uE.HT:
            return "game";
          case o.uE.Sv:
            return "software";
          case o.uE.ue:
            return "demo";
          case o.uE._i:
            return "dlc";
          case o.uE.Wz:
          case o.uE.FS:
            return "video";
          case o.uE.Ov:
            return "music";
          case o.uE.Vi:
            return "beta";
          case o.uE.RA:
            return "mod";
        }
        return "invalid";
      }
    },
    2677: (e, t, n) => {
      n.d(t, {
        Ig: () => p,
        Jz: () => g,
        LM: () => S,
        LS: () => m,
        P9: () => h,
        VX: () => C,
        Z$: () => f,
        fp: () => u,
        xN: () => _,
        xe: () => D,
      });
      var o = n(80902),
        a = n(75233),
        s = n(51614),
        r = n(90626),
        i = n(56055);
      const l = 64,
        c = [];
      function d(e) {
        return ["SaleQuizAnswers", e];
      }
      function u(e) {
        const { data: t } = (0, o.I)(
          (function (e) {
            return {
              queryKey: d(e),
              queryFn: () => c,
              initialData: c,
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            };
          })(e),
        );
        return t ?? c;
      }
      function m(e, t) {
        return u(e)[t];
      }
      function h(e) {
        for (let t = e.length - 1; t >= 0; --t) if (e[t]?.answer) return t + 1;
        return 0;
      }
      function p(e) {
        return e.map((e) => e?.answer).filter((e) => Boolean(e));
      }
      function g(e) {
        return e.flatMap((e) => e?.rgCategoryIDs?.filter(Boolean) ?? []);
      }
      function D(e) {
        return e.some((e) => e?.answer?.reveal_question_id == i.b2);
      }
      function _(e, t, n, o) {
        I(e, t, n, { answer: o });
      }
      function C(e, t, n, o) {
        I(e, t, n, { rgCategoryIDs: o?.length ? o : void 0 });
      }
      function S(e, t) {
        e.setQueryData(d(t), c);
      }
      function I(e, t, n, o) {
        const a = Math.min(Math.max(n, 0), l);
        e.setQueryData(d(t), (e) => {
          const t = (e ?? c).slice();
          for (; t.length <= a; ) t.push(void 0);
          return (t[a] = { ...t[a], ...o }), t;
        });
      }
      function f(e) {
        const t = (0, a.jE)(),
          { mutate: n } = (0, s.n)({
            mutationFn: async (n) => {
              switch (n.type) {
                case "answer":
                  _(t, e, n.iQuestionIndex, n.answer);
                  break;
                case "categories":
                  C(t, e, n.iQuestionIndex, n.rgCategoryIDs);
                  break;
                case "clear":
                  S(t, e);
              }
            },
          });
        return (0, r.useMemo)(
          () => ({
            fnSetAnswer: (e, t) =>
              n({ type: "answer", iQuestionIndex: e, answer: t }),
            fnSetAnswerCategories: (e, t) =>
              n({ type: "categories", iQuestionIndex: e, rgCategoryIDs: t }),
            fnClearAnswers: () => n({ type: "clear" }),
          }),
          [n],
        );
      }
    },
    56055: (e, t, n) => {
      n.d(t, { b2: () => o, nx: () => a });
      const o = "terminal";
      var a;
      !(function (e) {
        (e[(e.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (e[(e.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(a || (a = {}));
    },
    39733: (e, t, n) => {
      n.d(t, { Du: () => p, fy: () => h, pt: () => g });
      var o = n(68797),
        a = n(78327),
        s = n(41735),
        r = n.n(s),
        i = n(37085),
        l = n(90626),
        c = n(6144),
        d = n(84933),
        u = n(81393);
      class m {
        m_mapBadgeInfo = new Map();
        m_mapBadgeLoadPromises = new Map();
        m_eventBadgehangeCallback = new Map();
        m_mapInitialBadgeInfo = new Map();
        GetBadgeInfo(e) {
          return this.m_mapBadgeInfo.get(e);
        }
        GetInitialBadgeInfo(e) {
          return this.m_mapInitialBadgeInfo.get(e);
        }
        GetBadgeInfoChangeCallback(e) {
          return (
            this.m_eventBadgehangeCallback.has(e) ||
              this.m_eventBadgehangeCallback.set(e, new c.lu()),
            this.m_eventBadgehangeCallback.get(e)
          );
        }
        Test_SetBadgeInfo(e) {
          e.badgeid &&
            (this.m_mapBadgeInfo.set(e.badgeid, e),
            this.GetBadgeInfoChangeCallback(e.badgeid).Dispatch(e));
        }
        async LoadBadgeInfo(e) {
          return this.m_mapBadgeInfo.has(e)
            ? this.m_mapBadgeInfo.get(e)
            : (this.m_mapBadgeLoadPromises.has(e) ||
                this.m_mapBadgeLoadPromises.set(
                  e,
                  this.InternalLoadBadgeInfo(e),
                ),
              this.m_mapBadgeLoadPromises.get(e));
        }
        async InternalLoadBadgeInfo(e) {
          if (!e || !Number.isInteger(e)) return { badgeid: e, level: 0 };
          let t = null;
          try {
            const n = (0, a.xv)();
            (0, u.wT)(
              n == a.TS.STORE_BASE_URL || n == a.TS.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + n,
            );
            const s = n + "actions/ajaxgetbadgeinfo",
              l = { badgeid: e },
              c = await r().get(s, { params: l, withCredentials: !0 });
            if (
              200 == c.status &&
              (c.data?.success == i.R || c.data?.success == i.p)
            ) {
              const t = {
                badgeid: c.data.badgeid,
                level: c.data.level,
                xp: c.data.xp,
                completion_time: c.data.completion_time,
              };
              return (
                this.m_mapBadgeInfo.set(e, t),
                this.m_mapInitialBadgeInfo.has(e) ||
                  this.m_mapInitialBadgeInfo.set(e, t),
                t
              );
            }
            t = (0, o.H)(c);
          } catch (e) {
            t = (0, o.H)(e);
          }
          console.error("useEventBadge: " + t?.strErrorMsg, t);
          const n = { badgeid: e, level: 0 };
          return this.m_mapBadgeInfo.set(e, n), n;
        }
        static s_Singleton;
        static Get() {
          return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
        }
        constructor() {}
      }
      function h(e) {
        const [t, n] = (0, l.useState)(e ? m.Get().GetBadgeInfo(e) : void 0);
        return (
          (0, l.useEffect)(() => {
            !t &&
              e &&
              m
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, d.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, n),
          t
        );
      }
      function p(e) {
        m.Get().Test_SetBadgeInfo(e);
      }
      function g(e) {
        const [t, n] = (0, l.useState)(
          e ? m.Get().GetInitialBadgeInfo(e) : void 0,
        );
        return (
          (0, l.useEffect)(() => {
            !t && e && m.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, d.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, () =>
            n(e ? m.Get().GetInitialBadgeInfo(e) : void 0),
          ),
          t
        );
      }
    },
    35400: (e, t, n) => {
      n.d(t, {
        DV: () => _,
        OC: () => D,
        OM: () => C,
        Sp: () => f,
        Tn: () => S,
        W3: () => I,
        hH: () => g,
        my: () => b,
      });
      var o = n(34629),
        a = n(41735),
        s = n.n(a),
        r = n(14947),
        i = n(90626),
        l = n(37085),
        c = n(68797),
        d = n(6144),
        u = n(84933),
        m = n(78327),
        h = n(44165);
      const p = -1;
      class g {
        m_userData;
        m_bLoadedDuringInit = !1;
        m_strLastDoorOpenKey = "video_noneset";
        m_bIsAnyDoorOpened = !1;
        m_nHighestDoorOpened = p;
        m_initialLoadPromise;
        m_mapDoorOpenPromise = new Map();
        m_mapChangeCallback = new Map();
        m_doorInitializedChangedCallback = new d.lu();
        m_largestDoorChangeCallback = new d.lu();
        m_bIsAnyDoorOpenChangeCallback = new d.lu();
        m_doorOpenedCallback = new d.lu();
        GetLastDoorOpen() {
          return this.m_strLastDoorOpenKey;
        }
        GetRawDoorData() {
          return this.m_userData;
        }
        BIsDoorOpened(e) {
          return (
            null != e &&
            null != e &&
            !!this.m_userData &&
            Boolean(e < this.m_userData.length && this.m_userData[e].opened)
          );
        }
        BCanUserOpenDoor(e) {
          let t = h.HD.GetTimeNowWithOverride();
          return (
            m.iA.logged_in &&
            this.m_userData &&
            e < this.m_userData.length &&
            t >= this.m_userData[e].rtime_start &&
            t <= this.m_userData[e].rtime_end
          );
        }
        GetDoorCount() {
          return this.m_userData ? this.m_userData.length : 0;
        }
        BIsAnyDoorOpened() {
          return this.m_bIsAnyDoorOpened;
        }
        GetIsAnyDoorOpenChange() {
          return this.m_bIsAnyDoorOpenChangeCallback;
        }
        GetLargestDoorOpenIndex() {
          return this.m_nHighestDoorOpened;
        }
        GetLargestDoorIndexChange() {
          return this.m_largestDoorChangeCallback;
        }
        GetDoorStateChangeCallback(e) {
          return (
            this.m_mapChangeCallback.has(e) ||
              this.m_mapChangeCallback.set(e, new d.lu()),
            this.m_mapChangeCallback.get(e)
          );
        }
        GetDoorStateInitializedChangeCallback() {
          return this.m_doorInitializedChangedCallback;
        }
        GetDoorOpenedCallback() {
          return this.m_doorOpenedCallback;
        }
        BIsInitialized() {
          return this.m_bLoadedDuringInit;
        }
        GetMaxDoor() {
          return 7;
        }
        SetInMemoryUpdateDoorOpenUpto(e) {
          for (let t = 0; t < 7; ++t) {
            const n = t <= e;
            this.m_userData[t].opened != n &&
              ((this.m_userData[t].opened = n),
              this.GetDoorStateChangeCallback(t).Dispatch(n));
          }
          this.RecomputeState();
        }
        SetInMemorySpecificDoorState(e, t) {
          e < 7
            ? this.m_userData[e].opened != t &&
              ((this.m_userData[e].opened = t),
              this.GetDoorStateChangeCallback(e).Dispatch(t),
              this.RecomputeState())
            : console.error("CDoorStore: Wrong door being set " + e);
        }
        RecomputeState() {
          let e = p;
          this.m_userData?.forEach((t) => {
            t.opened && t.day > e && (e = t.day);
          });
          const t = e != p;
          t != this.m_bIsAnyDoorOpened &&
            ((this.m_bIsAnyDoorOpened = t),
            this.GetIsAnyDoorOpenChange().Dispatch(t)),
            e != this.m_nHighestDoorOpened &&
              ((this.m_nHighestDoorOpened = e),
              this.GetLargestDoorIndexChange().Dispatch(e));
        }
        async OpenDoor(e, t = !0, n = "", o = !1) {
          return !m.iA.logged_in ||
            !this.m_userData ||
            e > this.m_userData.length ||
            e < 0
            ? null
            : this.m_mapDoorOpenPromise.has(e)
              ? this.m_mapDoorOpenPromise.get(e)
              : this.m_userData[e].opened == t
                ? {}
                : (this.m_mapDoorOpenPromise.has(e) ||
                    this.m_mapDoorOpenPromise.set(
                      e,
                      this.InternalOpenDoor(e, t, n, o),
                    ),
                  this.m_mapDoorOpenPromise.get(e));
        }
        async InternalOpenDoor(e, t = !0, n, o = !1) {
          let a = m.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const r = new FormData();
          r.append("sessionid", (0, m.KC)()),
            n && r.append("datarecord", n),
            o && r.append("fake_open", "" + o),
            r.append("door_index", "" + e),
            r.append("clan_accountid", "" + m.UF.CLANACCOUNTID),
            t || r.append("open_door", "0");
          let i = null;
          try {
            let n = await s().post(a, r, { withCredentials: !0 });
            if (200 == n?.status && n?.data?.success == l.R)
              return (
                (this.m_userData[e].opened = t),
                (this.m_strLastDoorOpenKey = "door_" + (t ? e : e - 1)),
                this.GetDoorStateChangeCallback(e).Dispatch(t),
                this.RecomputeState(),
                t && !o && this.GetDoorOpenedCallback().Dispatch(e),
                n.data
              );
            i = (0, c.H)(n);
          } catch (e) {
            i = (0, c.H)(e);
          }
          return (
            this.m_mapDoorOpenPromise.delete(e),
            console.error("OpenDoor hit error: " + i.strErrorMsg, i),
            null
          );
        }
        async LoadDoorData() {
          return this.m_bLoadedDuringInit
            ? this.m_userData
            : (this.m_initialLoadPromise ||
                (this.m_initialLoadPromise = this.InternalLoadDoorData()),
              this.m_initialLoadPromise);
        }
        async InternalLoadDoorData() {
          const e = m.TS.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
          let t = null;
          try {
            const n = await s().get(e, { withCredentials: !0 });
            if (200 == n.status && n.data?.doordata) {
              (this.m_userData = n.data.doordata),
                (this.m_bLoadedDuringInit = !0);
              for (let e = 0; e < 7; ++e)
                this.GetDoorStateChangeCallback(e).Dispatch(
                  this.m_userData[e].opened,
                );
              return (
                this.GetDoorStateInitializedChangeCallback().Dispatch(
                  this.m_bLoadedDuringInit,
                ),
                this.RecomputeState(),
                this.m_userData
              );
            }
            t = (0, c.H)(n);
          } catch (e) {
            t = (0, c.H)(e);
          }
          return (
            console.error(
              "CDoorStore.LoadDoorData failed: " + t?.strErrorMsg,
              t,
            ),
            null
          );
        }
        async CloseAllDoors(e) {
          let t = m.TS.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
          const n = new FormData();
          n.append("sessionid", (0, m.KC)()),
            n.append("clan_accountid", "" + e);
          let o = null;
          try {
            let e = await s().post(t, n, { withCredentials: !0 });
            if (200 == e.status && e?.data?.success == l.R) {
              console.log("CDoorStore - closed " + e.data.count);
              for (let e = 0; e < 7; ++e)
                (this.m_userData[e].opened = !1),
                  this.GetDoorStateChangeCallback(e).Dispatch(
                    this.m_userData[e].opened,
                  );
              return this.RecomputeState(), !0;
            }
            o = (0, c.H)(e);
          } catch (e) {
            o = (0, c.H)(e);
          }
          return (
            console.error(
              "CDoorStore.CloseAllDoors failed: " + o?.strErrorMsg,
              o,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
        Init() {
          (this.m_userData = (0, m.Tc)("doorinfo", "application_config")),
            this.m_userData &&
              ((this.m_bLoadedDuringInit = !0), this.RecomputeState());
        }
      }
      function D() {
        return { fnOpenDoor: g.Get().OpenDoor };
      }
      function _() {
        const [e, t] = (0, i.useState)(g.Get().BIsInitialized());
        return (
          (0, i.useEffect)(() => {
            e || g.Get().LoadDoorData();
          }, [e]),
          (0, u.hL)(g.Get().GetDoorStateInitializedChangeCallback(), t),
          e
        );
      }
      function C(e) {
        const t = _(),
          [n, o] = (0, i.useState)(t ? g.Get().BIsDoorOpened(e) : void 0);
        return (0, u.hL)(g.Get().GetDoorStateChangeCallback(e), o), n;
      }
      function S() {
        const e = _(),
          [t, n] = (0, i.useState)(e ? g.Get().GetLargestDoorOpenIndex() : p);
        return (0, u.hL)(g.Get().GetLargestDoorIndexChange(), n), t;
      }
      function I() {
        const e = _(),
          [t, n] = (0, i.useState)(!!e && g.Get().BIsAnyDoorOpened());
        return (0, u.hL)(g.Get().GetIsAnyDoorOpenChange(), n), t;
      }
      function f(e) {
        g.Get().SetInMemoryUpdateDoorOpenUpto(e);
      }
      function b(e, t) {
        g.Get().SetInMemorySpecificDoorState(e, t);
      }
      (0, o.Cg)([r.sH], g.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, o.Cg)([r.sH], g.prototype, "m_nHighestDoorOpened", void 0),
        (0, o.Cg)([u.oI], g.prototype, "BIsDoorOpened", null),
        (0, o.Cg)([u.oI], g.prototype, "OpenDoor", null);
    },
    94333: (e, t, n) => {
      n.d(t, { hA: () => B, LG: () => x });
      var o = n(7850),
        a = n(67165),
        s = n(30894),
        r = n(61859),
        i = n(78327),
        l = n(84811),
        c = n(22797),
        d = n(45699),
        u = n(66407),
        m = n(39777),
        h = n(14987),
        p = n(90626),
        g = n(56524),
        D = n.n(g),
        _ = n(76217),
        C = n(95695),
        S = n.n(C),
        I = n(32630),
        f = n(17289),
        b = n(52038),
        v = n(82227),
        w = n(61336);
      function O(e) {
        const {
          strURL: t,
          strName: n,
          strAvatarURL: a,
          nFollowers: s,
          strCreatorType: i,
          strTagLine: l,
          strMemberListURL: c,
          followButton: d,
          bSmallFormat: u,
          bMinimalDisplay: m,
        } = e;
        return (0, o.jsx)(I.Ay, {
          feature: "salecreatorhome",
          children: (0, o.jsxs)(_.Z, {
            className: (0, b.A)(
              D().DevSummaryCtn,
              u ? D().SmallFormat : D().LargeFormat,
              m ? D().MinimalDisplay : "",
            ),
            "flow-children": "row",
            children: [
              Boolean(i) &&
                (0, o.jsx)("span", { className: D().Title, children: i }),
              (0, o.jsxs)("div", {
                className: D().DevSummaryWidgetCtn,
                children: [
                  (0, o.jsx)("div", {
                    className: D().DevSummaryBackground,
                    style: { backgroundImage: `url(${a} )` },
                  }),
                  (0, o.jsxs)("div", {
                    className: (0, b.A)(D().DevSummaryContent),
                    children: [
                      (0, o.jsxs)("div", {
                        className: S().FlexRowContainer,
                        children: [
                          (0, o.jsx)(f.m, {
                            href: (0, w.k2)(t),
                            className: D().AvatarLink,
                            bAllowFocuseableAnchor: !0,
                            children: (0, o.jsx)("img", {
                              className: (0, b.A)(D().Avatar, "Avatar_Trgt"),
                              src: a,
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            className: (0, b.A)(
                              S().FlexColumnContainer,
                              D().CreatorDescCtn,
                            ),
                            children: [
                              (0, o.jsxs)("div", {
                                className: (0, b.A)(
                                  D().CreatorTitleCtn,
                                  S().FlexColumnContainer,
                                ),
                                children: [
                                  (0, o.jsx)(f.m, {
                                    href: (0, w.k2)(t),
                                    className: D().CreatorNameName,
                                    children: n,
                                  }),
                                  Boolean(l) &&
                                    (0, o.jsx)("div", {
                                      className: (0, b.A)(
                                        S().FlexColumnContainer,
                                        D().CreatorTagline,
                                      ),
                                      children: l,
                                    }),
                                ],
                              }),
                              (0, o.jsx)("div", {
                                className: (0, b.A)({
                                  [S().FlexColumnContainer]: u,
                                  [S().FlexRowContainer]: !u,
                                  [D().SocialFollowersCtn]: !0,
                                }),
                                children: (0, o.jsxs)("div", {
                                  className: (0, b.A)(D().FollowBtnCtn),
                                  children: [
                                    d,
                                    (0, o.jsxs)("div", {
                                      className: (0, b.A)({
                                        [D().Followers]: !0,
                                      }),
                                      children: [
                                        (0, o.jsx)("span", {
                                          children: (0, r.we)(
                                            "#CreatorHome_JustFollowers",
                                          ),
                                        }),
                                        (0, o.jsx)("span", {
                                          className: D().FollowerCount,
                                          children: (0, v.Dq)(s),
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
                      Boolean(c) &&
                        (0, o.jsx)("a", {
                          href: c,
                          target: "_blank",
                          className: D().MembersListLink,
                          children: (0, r.we)("#ClanMembershipList"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var y = n(28372);
      function M(e) {
        const { data: t } = (0, m.wl)(e ? { appid: e } : void 0);
        return p.useMemo(() => {
          if (!e) return [];
          if (!t) return;
          const n = [],
            o = new Set(),
            a = [
              ["developer", (0, h.Qm)(t.developers)],
              ["publisher", (0, h.Qm)(t.publishers)],
              ["franchise", (0, h.Qm)(t.franchises)],
            ];
          for (const [t, s] of a)
            for (const a of s)
              o.has(a) ||
                (o.add(a),
                n.push({ appid: e, name: "", clan_account_id: a, type: t }));
          return n;
        }, [e, t]);
      }
      function G(e) {
        const { rgCreators: t, renderCreator: n } = e,
          [a, s] = p.useState(0);
        if (!t.length) return null;
        if (1 == t.length) return (0, o.jsx)(o.Fragment, { children: n(t[0]) });
        const r = a % t.length;
        return (0, o.jsxs)("div", {
          className: D().CreatorCarouselCtn,
          children: [
            n(t[r]),
            (0, o.jsx)("div", {
              className: D().CreatorCarouselCrumbs,
              children: t.map((e, t) =>
                (0, o.jsx)(
                  d.ml,
                  {
                    className: D().CreatorCarouselCrumb,
                    onClick: () => s(t),
                    "aria-label": L(e.type),
                    children: (0, o.jsx)(u.U, { bIsActive: t == r }),
                  },
                  e.clan_account_id,
                ),
              ),
            }),
          ],
        });
      }
      function L(e) {
        switch (e) {
          case "publisher":
            return (0, r.we)("#CreatorHome_PublishedBy");
          case "franchise":
            return (0, r.we)("#CreatorHome_InFranchise");
        }
        return (0, r.we)("#CreatorHome_DevelopedBy");
      }
      function B(e) {
        const {
            creatorID: t,
            bShowTagline: n,
            bHideCreatorType: d,
            bSmallFormat: u,
            bHideFollowButton: m,
            bAddLinkToMemberList: h,
            bMinimalDisplay: p,
          } = e,
          { creatorHome: D } = (0, a.FV)(t.clan_account_id),
          [_] = (0, s.L2)();
        return _ || !D
          ? (0, o.jsx)("div", {
              className: g.DevSummaryWidgetCtn,
              children: (0, o.jsx)(c.t, {
                string: (0, r.we)("#Loading"),
                size: "medium",
                position: "center",
              }),
            })
          : (0, o.jsx)(l.tH, {
              children: (0, o.jsx)(O, {
                strURL: D.GetCreatorHomeURL(t.type),
                strName: D.GetName(),
                strAvatarURL: D.GetAvatarURLFullSize(),
                nFollowers: D.GetNumFollowers(),
                strCreatorType: d ? void 0 : L(t.type),
                strTagLine: n ? D.GetTagLine() : void 0,
                strMemberListURL: h
                  ? i.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    D.GetClanSteamID().ConvertTo64BitString() +
                    "/members/"
                  : void 0,
                followButton: m
                  ? void 0
                  : (0, o.jsx)(y.of, {
                      clanAccountID: t.clan_account_id,
                      creatorID: t,
                    }),
                bSmallFormat: u,
                bMinimalDisplay: p,
              }),
            });
      }
      function x(e) {
        const { appid: t, bSmallFormat: n } = e,
          a = M(t);
        return a
          ? (0, o.jsx)(l.tH, {
              children: (0, o.jsx)(G, {
                rgCreators: a,
                renderCreator: (e) =>
                  (0, o.jsx)(B, { creatorID: e, bSmallFormat: n }),
              }),
            })
          : (0, o.jsx)("div", {
              className: g.DevSummaryWidgetCtn,
              children: (0, o.jsx)(c.t, {}),
            });
      }
    },
    77021: (e, t, n) => {
      n.d(t, { PM: () => m, TU: () => c, lM: () => u, ty: () => d });
      var o = n(34629),
        a = n(90626),
        s = n(84933),
        r = n(14947),
        i = n(95034),
        l = n(65946);
      class c {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = r.sH.set();
        m_setMouseOverSubsectionID = r.sH.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return c.s_Singleton || (c.s_Singleton = new c()), c.s_Singleton;
        }
        constructor() {
          (0, r.Gn)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, i.f3)(
                location.search,
                "parentOrigin",
              )),
              window.addEventListener("message", this.HandleMessage),
              window.addEventListener("beforeunload", () =>
                window.opener.postMessage(
                  { message: "PartnerEventEditor_ClientUnready" },
                  this.m_sParentOrigin,
                ),
              ),
              window.opener.postMessage(
                { message: "PartnerEventEditor_ClientReady" },
                this.m_sParentOrigin,
              ));
        }
        BIsConnected() {
          return !(!window.opener || !this.m_eventModelJson);
        }
        GetEventModelJson() {
          return this.m_eventModelJson;
        }
        GetMouseOverSectionID() {
          return this.m_setMouseOverSectionID.size > 0
            ? this.m_setMouseOverSectionID.values().next().value
            : void 0;
        }
        GetMouseOverSubsectionID() {
          return this.m_setMouseOverSubsectionID.size > 0
            ? this.m_setMouseOverSubsectionID.values().next().value
            : void 0;
        }
        GetJumpToSectionID() {
          return this.m_jumpToSection;
        }
        GetJumpToSubsectionIDs() {
          return this.m_jumpToSubsection;
        }
        ClearJumpToSectionID() {
          (0, r.h5)(() => (this.m_jumpToSection = void 0));
        }
        ClearJumpToSubectionID() {
          (0, r.h5)(() => (this.m_jumpToSubsection = void 0));
        }
        PostMessage(e) {
          window.opener &&
            this.m_sParentOrigin &&
            window.opener.postMessage(e, this.m_sParentOrigin);
        }
        SetMouseOverSection(e, t) {
          if (!this.BIsConnected()) return;
          const n = {
            message: "PartnerEventEditor_MouseOverViewSection",
            nSectionID: e,
            bMouseOver: t,
          };
          this.PostMessage(n);
        }
        SetMouseOverSubsection(e, t) {
          if (!this.BIsConnected()) return;
          const n = {
            message: "PartnerEventEditor_MouseOverViewSubsection",
            strSubsectionID: e,
            bMouseOver: t,
          };
          this.PostMessage(n);
        }
        JumpToSection(e) {
          if (!this.BIsConnected()) return;
          const t = {
            message: "PartnerEventEditor_JumpToViewSection",
            nSectionID: e,
          };
          this.PostMessage(t);
        }
        HandleMessage(e) {
          if (e.origin != this.m_sParentOrigin) return;
          const t =
            e.data && "object" == typeof e.data && "message" in e.data
              ? e.data
              : null;
          if (t)
            switch (t.message) {
              case "PartnerEventEditor_Update":
                if ("eventModelJson" in t && t.eventModelJson) {
                  const e = t;
                  (0, r.h5)(() => (this.m_eventModelJson = e.eventModelJson));
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, r.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSectionID.add(e.nSectionID)
                      : this.m_setMouseOverSectionID.delete(e.nSectionID);
                  });
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSubsection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, r.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSubsectionID.add(e.strSubsectionID)
                      : this.m_setMouseOverSubsectionID.delete(
                          e.strSubsectionID,
                        );
                  });
                }
                break;
              case "PartnerEventEditor_JumpToEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, r.h5)(() => (this.m_jumpToSection = e.nSectionID));
                }
                break;
              case "PartnerEventEditor_JumpToEditorSubection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, r.h5)(() => {
                    (this.m_jumpToSection = e.nSectionID),
                      (this.m_jumpToSubsection = {
                        nSectionID: e.nSectionID,
                        strSubsectionID: e.strSubsectionID,
                      });
                  });
                }
            }
        }
      }
      function d() {
        return (0, l.q3)(() => c.Get().BIsConnected());
      }
      function u(e) {
        const t = (0, l.q3)(() => c.Get().GetJumpToSectionID());
        a.useEffect(() => {
          if (!c.Get().BIsConnected() || !t) return;
          e(t) && c.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function m(e) {
        const t = (0, l.q3)(() => c.Get().GetJumpToSubsectionIDs());
        a.useEffect(() => {
          if (!c.Get().BIsConnected() || !t) return;
          e(t.nSectionID, t.strSubsectionID) &&
            c.Get().ClearJumpToSubectionID();
        }, [e, t]);
      }
      (0, o.Cg)([r.sH], c.prototype, "m_eventModelJson", void 0),
        (0, o.Cg)([r.sH], c.prototype, "m_setMouseOverSectionID", void 0),
        (0, o.Cg)([r.sH], c.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, o.Cg)([r.sH], c.prototype, "m_jumpToSection", void 0),
        (0, o.Cg)([r.sH], c.prototype, "m_jumpToSubsection", void 0),
        (0, o.Cg)([s.oI], c.prototype, "HandleMessage", null);
    },
    17289: (e, t, n) => {
      n.d(t, { m: () => i });
      var o = n(7850),
        a = n(45699),
        s = n(66418),
        r = n(2160);
      function i(e) {
        const { href: t, children: n, bAllowFocuseableAnchor: i, ...l } = e;
        return s.TS.EREALM === r.TU.k_ESteamRealmChina
          ? (0, o.jsx)("div", { ...l, children: n })
          : i
            ? (0, o.jsx)(a.Ii, { href: t, ...l, children: n })
            : (0, o.jsx)("a", { href: t, ...l, children: n });
      }
    },
  },
]);

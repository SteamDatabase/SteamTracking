/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [351],
  {
    91291: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
      };
    },
    56055: (e, t, n) => {
      "use strict";
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
      "use strict";
      n.d(t, { Du: () => h, fy: () => p, pt: () => _ });
      var o = n(68797),
        a = n(78327),
        r = n(41735),
        s = n.n(r),
        i = n(37085),
        l = n(90626),
        c = n(6144),
        m = n(84933),
        u = n(81393);
      class d {
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
            const r = n + "actions/ajaxgetbadgeinfo",
              l = { badgeid: e },
              c = await s().get(r, { params: l, withCredentials: !0 });
            if (
              200 == c.status &&
              (c.data?.success == i.d.k_EResultOK ||
                c.data?.success == i.d.k_EResultNoMatch)
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
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              "dev" == a.TS.WEB_UNIVERSE &&
                (window.g_UserBadgeForEventStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {}
      }
      function p(e) {
        const [t, n] = (0, l.useState)(e ? d.Get().GetBadgeInfo(e) : void 0);
        return (
          (0, l.useEffect)(() => {
            !t &&
              e &&
              d
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, m.hL)(e ? d.Get().GetBadgeInfoChangeCallback(e) : void 0, n),
          t
        );
      }
      function h(e) {
        d.Get().Test_SetBadgeInfo(e);
      }
      function _(e) {
        const [t, n] = (0, l.useState)(
          e ? d.Get().GetInitialBadgeInfo(e) : void 0,
        );
        return (
          (0, l.useEffect)(() => {
            !t && e && d.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, m.hL)(e ? d.Get().GetBadgeInfoChangeCallback(e) : void 0, () =>
            n(e ? d.Get().GetInitialBadgeInfo(e) : void 0),
          ),
          t
        );
      }
    },
    1501: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => l });
      var o = n(34629),
        a = n(14947),
        r = n(56055),
        s = n(62490),
        i = n(78327);
      class l {
        m_rgAnswerToCategoryID = Array();
        m_rgAnswerChosen = Array();
        SetAnswerCategory(e, t) {
          const n = Math.min(e, 64);
          (this.m_rgAnswerToCategoryID = (0, s.$Y)(
            this.m_rgAnswerToCategoryID,
            n + 1,
            null,
          )),
            (this.m_rgAnswerToCategoryID[n] = t?.length > 0 ? t : null);
        }
        GetAnswerCategoryForQuestion(e) {
          return this.BHasAnsweredQuestion(e)
            ? this.m_rgAnswerToCategoryID[e]
            : null;
        }
        SetAnswer(e, t) {
          const n = Math.min(e, 64);
          (this.m_rgAnswerChosen = (0, s.$Y)(
            this.m_rgAnswerChosen,
            n + 1,
            null,
          )),
            (this.m_rgAnswerChosen[n] = t);
        }
        GetAnswer(e) {
          return this.BHasAnsweredQuestion(e) ? this.m_rgAnswerChosen[e] : null;
        }
        BHasAnsweredQuestion(e) {
          return (
            e < this.m_rgAnswerChosen?.length &&
            Boolean(this.m_rgAnswerChosen[e])
          );
        }
        GetAnswerCategories() {
          const e = new Array();
          return (
            this.m_rgAnswerToCategoryID.forEach((t) => {
              t?.length > 0 && t.filter(Boolean).forEach((t) => e.push(t));
            }),
            e
          );
        }
        GetAnswers() {
          return this.m_rgAnswerChosen;
        }
        GetLargestAnswerQuestion() {
          return this?.m_rgAnswerChosen.length || 0;
        }
        ClearAnswersAndCategories() {
          (this.m_rgAnswerToCategoryID = Array()),
            (this.m_rgAnswerChosen = Array());
        }
        BHasTerminalAnswerChosen() {
          return this.m_rgAnswerChosen.some(
            (e) => e.reveal_question_id == r.b2,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            l.s_Singleton ||
              ((l.s_Singleton = new l()),
              "dev" == i.TS.WEB_UNIVERSE &&
                (window.g_SaleQuizAnswerStore = l.s_Singleton)),
            l.s_Singleton
          );
        }
        constructor() {
          (0, a.Gn)(this);
        }
      }
      (0, o.Cg)([a.sH], l.prototype, "m_rgAnswerToCategoryID", void 0),
        (0, o.Cg)([a.sH], l.prototype, "m_rgAnswerChosen", void 0);
    },
    35400: (e, t, n) => {
      "use strict";
      n.d(t, {
        DV: () => S,
        Fq: () => _,
        OC: () => D,
        OM: () => C,
        Sp: () => f,
        Tn: () => b,
        W3: () => E,
        hH: () => I,
        my: () => v,
      });
      var o = n(34629),
        a = n(41735),
        r = n.n(a),
        s = n(14947),
        i = n(90626),
        l = n(37085),
        c = n(68797),
        m = n(6144),
        u = n(84933),
        d = n(78327),
        p = n(44165),
        h = n(34824);
      const _ = 7,
        g = -1;
      class I {
        m_userData;
        m_bLoadedDuringInit = !1;
        m_strLastDoorOpenKey = "video_noneset";
        m_bIsAnyDoorOpened = !1;
        m_nHighestDoorOpened = g;
        m_initialLoadPromise;
        m_mapDoorOpenPromise = new Map();
        m_mapChangeCallback = new Map();
        m_doorInitializedChangedCallback = new m.lu();
        m_largestDoorChangeCallback = new m.lu();
        m_bIsAnyDoorOpenChangeCallback = new m.lu();
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
          let t = p.HD.GetTimeNowWithOverride();
          return (
            d.iA.logged_in &&
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
              this.m_mapChangeCallback.set(e, new m.lu()),
            this.m_mapChangeCallback.get(e)
          );
        }
        GetDoorStateInitializedChangeCallback() {
          return this.m_doorInitializedChangedCallback;
        }
        BIsInitialized() {
          return this.m_bLoadedDuringInit;
        }
        GetMaxDoor() {
          return _;
        }
        SetInMemoryUpdateDoorOpenUpto(e) {
          for (let t = 0; t < _; ++t) {
            const n = t <= e;
            this.m_userData[t].opened != n &&
              ((this.m_userData[t].opened = n),
              this.GetDoorStateChangeCallback(t).Dispatch(n));
          }
          this.RecomputeState();
        }
        SetInMemorySpecificDoorState(e, t) {
          e < _
            ? this.m_userData[e].opened != t &&
              ((this.m_userData[e].opened = t),
              this.GetDoorStateChangeCallback(e).Dispatch(t),
              this.RecomputeState())
            : console.error("CDoorStore: Wrong door being set " + e);
        }
        RecomputeState() {
          let e = g;
          this.m_userData?.forEach((t) => {
            t.opened && t.day > e && (e = t.day);
          });
          const t = e != g;
          t != this.m_bIsAnyDoorOpened &&
            ((this.m_bIsAnyDoorOpened = t),
            this.GetIsAnyDoorOpenChange().Dispatch(t)),
            e != this.m_nHighestDoorOpened &&
              ((this.m_nHighestDoorOpened = e),
              this.GetLargestDoorIndexChange().Dispatch(e));
        }
        async OpenDoor(e, t = !0, n = "", o = !1) {
          return !d.iA.logged_in ||
            !this.m_userData ||
            e > this.m_userData.length ||
            e < 0
            ? ("dev" == d.TS.WEB_UNIVERSE &&
                console.log(
                  "CDoorStore.OpenDoor Early fail settings:",
                  d.iA.logged_in,
                  this.m_userData,
                  e,
                  this.m_userData?.length,
                ),
              null)
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
          let a = d.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const s = new FormData();
          s.append("sessionid", d.TS.SESSIONID),
            n && s.append("datarecord", n),
            o && s.append("fake_open", "" + o),
            s.append("door_index", "" + e),
            s.append("clan_accountid", "" + d.UF.CLANACCOUNTID),
            t || s.append("open_door", "0");
          let i = null;
          try {
            let n = await r().post(a, s, { withCredentials: !0 });
            if (200 == n?.status && n?.data?.success == l.d.k_EResultOK)
              return (
                (this.m_userData[e].opened = t),
                (this.m_strLastDoorOpenKey = "door_" + (t ? e : e - 1)),
                n.data.capsuleinsert && (0, h.YH)([n.data.capsuleinsert]),
                this.GetDoorStateChangeCallback(e).Dispatch(t),
                this.RecomputeState(),
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
          const e = d.TS.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
          let t = null;
          try {
            const n = await r().get(e, { withCredentials: !0 });
            if (200 == n.status && n.data?.doordata) {
              (this.m_userData = n.data.doordata),
                (this.m_bLoadedDuringInit = !0);
              for (let e = 0; e < _; ++e)
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
          let t = d.TS.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
          const n = new FormData();
          n.append("sessionid", d.TS.SESSIONID),
            n.append("clan_accountid", "" + e);
          let o = null;
          try {
            let e = await r().post(t, n, { withCredentials: !0 });
            if (200 == e.status && e?.data?.success == l.d.k_EResultOK) {
              console.log("CDoorStore - closed " + e.data.count);
              for (let e = 0; e < _; ++e)
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
            I.s_Singleton ||
              ((I.s_Singleton = new I()),
              I.s_Singleton.Init(),
              "dev" == d.TS.WEB_UNIVERSE &&
                (window.g_EventDoorStore = I.s_Singleton)),
            I.s_Singleton
          );
        }
        constructor() {
          (0, s.Gn)(this);
        }
        Init() {
          (this.m_userData = (0, d.Tc)("doorinfo", "application_config")),
            this.m_userData &&
              ((this.m_bLoadedDuringInit = !0),
              this.RecomputeState(),
              "dev" == d.TS.WEB_UNIVERSE &&
                console.log("CDoorStore Loading - ", this.m_userData));
        }
      }
      function D() {
        return { fnOpenDoor: I.Get().OpenDoor };
      }
      function S() {
        const [e, t] = (0, i.useState)(I.Get().BIsInitialized());
        return (
          (0, i.useEffect)(() => {
            e || I.Get().LoadDoorData();
          }, [e]),
          (0, u.hL)(I.Get().GetDoorStateInitializedChangeCallback(), t),
          e
        );
      }
      function C(e) {
        const t = S(),
          [n, o] = (0, i.useState)(t ? I.Get().BIsDoorOpened(e) : void 0);
        return (0, u.hL)(I.Get().GetDoorStateChangeCallback(e), o), n;
      }
      function b() {
        const e = S(),
          [t, n] = (0, i.useState)(e ? I.Get().GetLargestDoorOpenIndex() : g);
        return (0, u.hL)(I.Get().GetLargestDoorIndexChange(), n), t;
      }
      function E() {
        const e = S(),
          [t, n] = (0, i.useState)(!!e && I.Get().BIsAnyDoorOpened());
        return (0, u.hL)(I.Get().GetIsAnyDoorOpenChange(), n), t;
      }
      function f(e) {
        I.Get().SetInMemoryUpdateDoorOpenUpto(e);
      }
      function v(e, t) {
        I.Get().SetInMemorySpecificDoorState(e, t);
      }
      (0, o.Cg)([s.sH], I.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, o.Cg)([s.sH], I.prototype, "m_nHighestDoorOpened", void 0),
        (0, o.Cg)([u.oI], I.prototype, "BIsDoorOpened", null),
        (0, o.Cg)([u.oI], I.prototype, "OpenDoor", null);
    },
    34824: (e, t, n) => {
      "use strict";
      n.d(t, {
        Fb: () => S,
        Jz: () => C,
        M$: () => I,
        Tb: () => g,
        YH: () => _,
        tO: () => D,
      });
      var o,
        a = n(34629),
        r = n(14947),
        s = (n(90626), n(89128)),
        i = n(81393),
        l = n(6144),
        c = n(84933),
        m = n(78327),
        u = n(6379),
        d = n(82097),
        p = n(3967);
      !(function (e) {
        (e[(e.k_EDiscoveryAction_Invalid = 0)] = "k_EDiscoveryAction_Invalid"),
          (e[(e.k_EDiscoveryAction_OpenStorePage = 1)] =
            "k_EDiscoveryAction_OpenStorePage"),
          (e[(e.k_EDiscoveryAction_OpenDoor = 2)] =
            "k_EDiscoveryAction_OpenDoor");
      })(o || (o = {}));
      class h {
        m_mapMaterializedInsertion = new Map();
        m_mapInsertCallback = new Map();
        m_rgFutureInsertions = new Array();
        GetMatchingInsertion(e, t) {
          return this.m_mapMaterializedInsertion.get(this.GetKeyFromID(e, t));
        }
        GetChangeCallback(e, t) {
          const n = this.GetKey({ sectionID: e, tabID: t });
          return this.GetChangeCallbackByKey(n);
        }
        GetChangeCallbackByKey(e) {
          return (
            this.m_mapInsertCallback.has(e) ||
              this.m_mapInsertCallback.set(e, new l.lu()),
            this.m_mapInsertCallback.get(e)
          );
        }
        GetKey(e) {
          return e ? e.sectionID + "_" + (e.tabID || "-1") : null;
        }
        GetKeyFromID(e, t) {
          return e + "_" + (t || "-1");
        }
        ReplaceInsertion(e) {
          e.forEach((e) => {
            const t = this.GetKey(e);
            this.m_mapMaterializedInsertion.forEach((e) => {
              const n = this.GetKey(e);
              n && n != t && this.DispatchInsertion(e, !0);
            }),
              this.m_mapMaterializedInsertion.clear(),
              (this.m_rgFutureInsertions = Array()),
              this.AppendInsertion(e);
          });
        }
        AppendInsertion(e) {
          e?.sectionID
            ? (this.m_mapMaterializedInsertion.set(this.GetKey(e), e),
              this.DispatchInsertion(e))
            : this.m_rgFutureInsertions.push(e);
        }
        DispatchInsertion(e, t) {
          e.sectionID &&
            this.GetChangeCallback(e.sectionID, e.tabID).Dispatch(t ? null : e);
        }
        AppCapsuleFound(e) {
          this.m_rgFutureInsertions = this.m_rgFutureInsertions.filter(
            (t) => !(!t.sectionID && t.insertion_requirement && t.appid == e),
          );
        }
        GetAnyNonMaterializedInsertionRequest() {
          const e = this.m_rgFutureInsertions.length;
          return e > 0
            ? this.m_rgFutureInsertions[Math.floor(e * Math.random())]
            : null;
        }
        SaleInteractionCallback(e, t) {
          if (this.m_rgFutureInsertions.length > 0)
            for (let n = 0; n < this.m_rgFutureInsertions.length; ++n)
              if (this.AreWeAllowedToDeploy(this.m_rgFutureInsertions[n], t)) {
                const t = this.DeployCapsuleIfPossible(
                  e,
                  this.m_rgFutureInsertions[n],
                );
                t &&
                  ((0, i.wT)(
                    Boolean(t.sectionID),
                    "Expected to have a materialized insertion at this poiunt: " +
                      t.sectionID,
                  ),
                  this.AppendInsertion(t));
              }
        }
        AreWeAllowedToDeploy(e, t) {
          if (
            !e.sectionID &&
            e.insertion_requirement &&
            t.size >= e.insertion_requirement.min_interactions
          ) {
            if (t.size >= e.insertion_requirement.max_interactions) return !0;
            const n =
              e.insertion_requirement.max_interactions -
              e.insertion_requirement.min_interactions;
            return 0 == Math.floor(n * Math.random());
          }
          return !1;
        }
        BIsInsertableSectionType(e) {
          if (e) {
            if ("sale_item_browser" == e.section_type) return !0;
            if ((0, s.ye)(e.section_type))
              return (
                !(0, s.CU)(e) ||
                ("wishlist" != (0, s.Pm)(e) &&
                  "wishlist_onsale" != (0, s.Pm)(e))
              );
          }
          return !1;
        }
        BHasExistingInsertion(e) {
          return Boolean(this.GetMatchingInsertion(e.sectionid, e.tabid));
        }
        DeployCapsuleIfPossible(e, t) {
          if (this.BHasExistingInsertion(e)) return null;
          if (m.P9.ANNOUNCEMENT_GID) {
            const n = u.O3.GetClanEventFromAnnouncementGID(
                m.P9.ANNOUNCEMENT_GID,
              ),
              o = n?.GetSaleSectionByID(e.sectionid);
            if (this.BIsInsertableSectionType(o)) {
              if (
                t.insertion_requirement.additional_adds > 0 &&
                t.insertion_requirement.delta_interactions > 0
              ) {
                const e = { ...t };
                (e.insertion_requirement = { ...t.insertion_requirement }),
                  (e.insertion_requirement.additional_adds -= 1),
                  (e.insertion_requirement.max_interactions +=
                    t.insertion_requirement.delta_interactions),
                  (e.insertion_requirement.min_interactions +=
                    t.insertion_requirement.delta_interactions),
                  this.AppendInsertion(e);
              }
              return (
                (t.sectionID = e.sectionid),
                (t.tabID = e.tabid),
                (t.insertionIndex = e.elementIndex),
                t
              );
            }
          }
          return null;
        }
        static s_Singleton;
        static Get() {
          return (
            h.s_Singleton ||
              ((h.s_Singleton = new h()),
              h.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_DynamicCapsuleInsertStore = h.s_Singleton)),
            h.s_Singleton
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
        Init() {
          const e = (0, m.Fd)("capsuleinsert", "application_config");
          h.ValidateData(e) &&
            (e.sectionID
              ? this.m_mapMaterializedInsertion.set(this.GetKey(e), e)
              : e.insertion_requirement
                ? (this.m_rgFutureInsertions.push(e),
                  e?.appid &&
                    d.A.Get()
                      .QueueAppRequest(e.appid, {
                        include_assets: !0,
                        include_release: !0,
                        include_trailers: !0,
                      })
                      .then(() => {
                        const t = d.A.Get().GetApp(e.appid);
                        !t ||
                          t.GetBestPurchaseOption()?.formatted_final_price
                            ?.length > 0 ||
                          t.ReplaceBestPurchaseOption({
                            packageid: 0,
                            bundleid: 0,
                            formatted_original_price: "CL.0R",
                            formatted_final_price: "TH.4X",
                            discount_pct: 50,
                          });
                      }))
                : "dev" == m.TS.WEB_UNIVERSE &&
                  console.error(
                    "CDynamicCapsuleInsertStore: Payload not material and missing instructions.",
                    e,
                  ),
            "dev" == m.TS.WEB_UNIVERSE &&
              console.log("CDynamicCapsuleInsertStore loaded ", e)),
            p.I.Get()
              .GetNewInteractionCallback()
              .Register(this.SaleInteractionCallback);
        }
        static ValidateData(e) {
          const t = e;
          return (
            t &&
            ("number" == typeof t.sectionID ||
              "object" == typeof t.insertion_requirement) &&
            "number" == typeof t.appid &&
            "number" == typeof t.action
          );
        }
      }
      function _(e) {
        h.Get().ReplaceInsertion(e);
      }
      function g(e, t) {
        return h.Get().GetMatchingInsertion(e, t);
      }
      function I(e, t) {
        return h.Get().GetChangeCallback(e, t);
      }
      function D(e) {
        h.Get().AppCapsuleFound(e);
      }
      function S() {
        return h.Get().GetAnyNonMaterializedInsertionRequest();
      }
      function C(e) {
        return h.Get().BIsInsertableSectionType(e);
      }
      (0, a.Cg)([c.oI], h.prototype, "SaleInteractionCallback", null),
        (0, a.Cg)([r.XI], h.prototype, "DeployCapsuleIfPossible", null);
    },
    3967: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => r });
      var o = n(6144),
        a = n(78327);
      class r {
        m_setInteractions = new Set();
        m_nActiveTabID = -1;
        m_interactionCallback = new o.lu();
        m_bDebugMode = !0;
        GetNewInteractionCallback() {
          return this.m_interactionCallback;
        }
        AddInteraction(e, t) {
          const n = `${this.m_nActiveTabID}_${e}_${t}`,
            o = !this.m_setInteractions.has(n);
          this.m_setInteractions.add(n),
            o &&
              ("dev" == a.TS.WEB_UNIVERSE &&
                this.m_bDebugMode &&
                console.log(
                  "CSaleInteractionStore new: " +
                    n +
                    " count: " +
                    this.m_setInteractions.size,
                ),
              this.m_interactionCallback.Dispatch(
                { tabid: this.m_nActiveTabID, sectionid: e, elementIndex: t },
                this.m_setInteractions,
              ));
        }
        SetActiveTab(e) {
          this.m_nActiveTabID = e;
        }
        static s_Singleton;
        static Get() {
          return (
            r.s_Singleton ||
              ((r.s_Singleton = new r()),
              r.s_Singleton.Init(),
              "dev" == a.TS.WEB_UNIVERSE &&
                (window.g_SaleInteractionStore = r.s_Singleton)),
            r.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
    },
    32541: (e, t, n) => {
      "use strict";
      n.d(t, { LG: () => b, hA: () => C });
      var o = n(90626),
        a = n(76217),
        r = n(67165),
        s = n(30894),
        i = n(55263),
        l = n(17289),
        c = n(52038),
        m = n(61859),
        u = n(82227),
        d = n(61336),
        p = n(78327),
        h = n(84811),
        _ = n(32630),
        g = n(22797),
        I = n(56524),
        D = n(48838),
        S = n(95695);
      function C(e) {
        const {
            creatorID: t,
            bShowTagline: n,
            bHideCreatorType: i,
            bSmallFormat: C,
            bHideFollowButton: b,
            bAddLinkToMemberList: E,
            bMinimalDisplay: f,
          } = e,
          { creatorHome: v } = (0, r.FV)(t.clan_account_id),
          [w] = (0, s.L2)();
        if (w || !v)
          return o.createElement(
            "div",
            { className: I.DevSummaryWidgetCtn },
            o.createElement(g.t, {
              string: (0, m.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const y = t.type,
          A =
            "developer" == t.type
              ? (0, m.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, m.we)("#CreatorHome_PublishedBy")
                : (0, m.we)("#CreatorHome_InFranchise"),
          G = v.GetCreatorHomeURL(y),
          T = v.GetNumFollowers();
        return o.createElement(
          h.tH,
          null,
          o.createElement(
            _.Ay,
            { feature: "salecreatorhome" },
            o.createElement(
              a.Z,
              {
                className: (0, c.A)(
                  I.DevSummaryCtn,
                  C ? I.SmallFormat : I.LargeFormat,
                  f ? I.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !i && o.createElement("span", { className: I.Title }, A),
              o.createElement(
                "div",
                { className: I.DevSummaryWidgetCtn },
                o.createElement("div", {
                  className: I.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${v.GetAvatarURLFullSize()} )`,
                  },
                }),
                o.createElement(
                  "div",
                  { className: (0, c.A)(I.DevSummaryContent) },
                  o.createElement(
                    "div",
                    { className: S.FlexRowContainer },
                    o.createElement(
                      l.m,
                      {
                        href: (0, d.k2)(G),
                        className: I.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      o.createElement("img", {
                        className: (0, c.A)(I.Avatar, "Avatar_Trgt"),
                        src: v.GetAvatarURLFullSize(),
                      }),
                    ),
                    o.createElement(
                      "div",
                      {
                        className: (0, c.A)(
                          S.FlexColumnContainer,
                          I.CreatorDescCtn,
                        ),
                      },
                      o.createElement(
                        "div",
                        {
                          className: (0, c.A)(
                            I.CreatorTitleCtn,
                            S.FlexColumnContainer,
                          ),
                        },
                        o.createElement(
                          l.m,
                          { href: (0, d.k2)(G), className: I.CreatorNameName },
                          v.GetName(),
                        ),
                        Boolean(n) &&
                          o.createElement(
                            "div",
                            {
                              className: (0, c.A)(
                                S.FlexColumnContainer,
                                I.CreatorTagline,
                              ),
                            },
                            v.GetTagLine(),
                          ),
                      ),
                      o.createElement(
                        "div",
                        {
                          className: (0, c.A)({
                            [S.FlexColumnContainer]: C,
                            [S.FlexRowContainer]: !C,
                            [I.SocialFollowersCtn]: !0,
                          }),
                        },
                        o.createElement(
                          "div",
                          { className: (0, c.A)(I.FollowBtnCtn) },
                          Boolean(!b) &&
                            o.createElement(D.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          o.createElement(
                            "div",
                            { className: (0, c.A)({ [I.Followers]: !0 }) },
                            o.createElement(
                              "span",
                              null,
                              (0, m.we)("#CreatorHome_JustFollowers"),
                            ),
                            o.createElement(
                              "span",
                              { className: I.FollowerCount },
                              (0, u.Dq)(T),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(E) &&
                    o.createElement(
                      "a",
                      {
                        href:
                          p.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          v.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: I.MembersListLink,
                      },
                      (0, m.we)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function b(e) {
        const { appid: t, bSmallFormat: n } = e,
          [a] = (0, i.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!a)
          return o.createElement(
            "div",
            { className: I.DevSummaryWidgetCtn },
            o.createElement(g.t, null),
          );
        let r;
        const s = a.GetAllDeveloperCreatorClans();
        if (s?.length > 0)
          r = { appid: t, name: "", clan_account_id: s[0], type: "developer" };
        else {
          const e = a.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            r = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = a.GetAllFranchiseCreatorClans();
            e?.length > 0 &&
              (r = {
                appid: t,
                name: "",
                clan_account_id: e[0],
                type: "franchise",
              });
          }
        }
        return r
          ? o.createElement(
              h.tH,
              null,
              o.createElement(C, { creatorID: r, bSmallFormat: n }),
            )
          : null;
      }
    },
    77021: (e, t, n) => {
      "use strict";
      n.d(t, { PM: () => p, TU: () => m, lM: () => d, ty: () => u });
      var o = n(34629),
        a = n(90626),
        r = n(78327),
        s = n(84933),
        i = n(14947),
        l = n(95034),
        c = n(65946);
      class m {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = i.sH.set();
        m_setMouseOverSubsectionID = i.sH.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return (
            m.s_Singleton ||
              ((m.s_Singleton = new m()),
              "dev" == r.TS.WEB_UNIVERSE &&
                (window.g_PartnerSaleLivePreviewClient = m.s_Singleton)),
            m.s_Singleton
          );
        }
        constructor() {
          (0, i.Gn)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, l.f3)(
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
          (0, i.h5)(() => (this.m_jumpToSection = void 0));
        }
        ClearJumpToSubectionID() {
          (0, i.h5)(() => (this.m_jumpToSubsection = void 0));
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
                  (0, i.h5)(() => (this.m_eventModelJson = e.eventModelJson));
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSectionID.add(e.nSectionID)
                      : this.m_setMouseOverSectionID.delete(e.nSectionID);
                  });
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSubsection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => {
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
                  (0, i.h5)(() => (this.m_jumpToSection = e.nSectionID));
                }
                break;
              case "PartnerEventEditor_JumpToEditorSubection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, i.h5)(() => {
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
      function u() {
        return (0, c.q3)(() => m.Get().BIsConnected());
      }
      function d(e) {
        const t = (0, c.q3)(() => m.Get().GetJumpToSectionID());
        a.useEffect(() => {
          if (!m.Get().BIsConnected() || !t) return;
          e(t) && m.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function p(e) {
        const t = (0, c.q3)(() => m.Get().GetJumpToSubsectionIDs());
        a.useEffect(() => {
          if (!m.Get().BIsConnected() || !t) return;
          e(t.nSectionID, t.strSubsectionID) &&
            m.Get().ClearJumpToSubectionID();
        }, [e, t]);
      }
      (0, o.Cg)([i.sH], m.prototype, "m_eventModelJson", void 0),
        (0, o.Cg)([i.sH], m.prototype, "m_setMouseOverSectionID", void 0),
        (0, o.Cg)([i.sH], m.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, o.Cg)([i.sH], m.prototype, "m_jumpToSection", void 0),
        (0, o.Cg)([i.sH], m.prototype, "m_jumpToSubsection", void 0),
        (0, o.Cg)([s.oI], m.prototype, "HandleMessage", null);
    },
    46416: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => k, W: () => L });
      var o = n(90626),
        a = n(57876),
        r = n(45699),
        s = n(76217),
        i = n(23310),
        l = n(55963),
        c = n(15161),
        m = n(30894),
        u = n(62792),
        d = n(55263),
        p = n(33924),
        h = n(26101),
        _ = n(45359),
        g = n(18654),
        I = n.n(g),
        D = n(3661),
        S = n(37346),
        C = n(72860),
        b = n(70300),
        E = n(47235),
        f = n(37076),
        v = n(54492),
        w = n(60014),
        y = n(52038),
        A = n(61859),
        G = n(61336),
        T = n(78327),
        B = n(91291),
        O = n.n(B),
        M = n(99956),
        P = n(49411);
      const k = "capsule_index_";
      function L(e) {
        const {
            capsule: t,
            bShowParentApp: n,
            elElementToAppendToHover: r,
            index: l,
            navKey: c,
            bHideStoreHover: m,
            onlyOneDiscountPct: p,
            bPreferDemoStorePage: _,
            bShowEarlyAccessBanner: g,
          } = e,
          [D, S] = o.useState(!1),
          [C] = (0, d.G6)(t.id, (0, u.SW)(t.type), a.Xh),
          [E] = (0, d.t7)(n && C?.GetParentAppID(), a.Xh);
        if (!C) return null;
        const f = Boolean(E),
          v = o.createElement(H, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: D,
            bHasParentAppToDisplay: f,
            onlyOneDiscountPct: p,
            bShowEarlyAccessBanner: g,
          });
        return o.createElement(
          s.Z,
          {
            className: (0, y.A)({
              [I().OuterCapsuleContainer]: !0,
              [k + l]: 0 == l,
            }),
            navEntryPreferPosition: i.iU.PREFERRED_CHILD,
            navKey: c,
          },
          o.createElement(
            b.oj,
            { appid: C.GetAppID() },
            Boolean(m)
              ? o.createElement(
                  "div",
                  { onMouseEnter: () => S(!0), onMouseLeave: () => S(!1) },
                  v,
                )
              : o.createElement(
                  h.Qf,
                  {
                    className: I().CapsuleContainer,
                    item: t,
                    elElementToAppend: e.elElementToAppendToHover,
                    bShowDemoButton: e.bShowDemoButton,
                    bPreferDemoStorePage: e.bPreferDemoStorePage,
                    bShowDeckCompatibilityDialog:
                      e.bShowDeckCompatibilityDialog,
                    bHidePrice: e.bHidePrice,
                    bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                    strExtraParams: e.strExtraParams,
                    nCreatorAccountID: e.creatorAccountID,
                    nWidthMultiplier: e.nWidthMultiplier,
                    bShowIgnoreButton: e.bShowIgnoreButton,
                    bShowDescription: e.bShowDescriptionInHover,
                  },
                  v,
                ),
            Boolean(r) && o.createElement(o.Fragment, null, r),
          ),
          f &&
            o.createElement(N, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: E,
              childAppType: C.GetAppType(),
              bPreferDemoStorePage: _,
            }),
        );
      }
      function N(e) {
        const {
            strExtraParams: t,
            parentStoreItem: n,
            childAppType: s,
            bPreferDemoStorePage: i,
          } = e,
          l = (0, w.n9)(),
          m = (0, T.Qn)();
        return o.createElement(
          r.ml,
          { className: I().CapsuleParentInfo, ...(0, C.S)(n, l, m, i, t) },
          o.createElement(
            b.oj,
            { appid: n.GetAppID() },
            o.createElement(
              "div",
              { className: I().ParentType },
              (0, A.we)(
                s == c.uE.k_EStoreAppType_Music
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            o.createElement(
              f.u,
              { type: "app", id: n.GetAppID(), strExtraParams: t },
              o.createElement("img", {
                loading: "lazy",
                className: p.AppCapsuleImage,
                alt: n.GetName(),
                src: n.GetAssets().GetSmallCapsuleURL(),
                ...(0, a.Jw)(),
              }),
            ),
          ),
        );
      }
      function H(e) {
        const {
            info: t,
            bHideStatusBanners: n,
            strExtraParams: s,
            index: i,
            imageType: c,
            bHasParentAppToDisplay: m,
            bIsHovered: p,
            strDoubleCapsuleMessage: h,
            bPreferDemoStorePage: g,
            bShowEarlyAccessBanner: I,
          } = e,
          [C] = (0, d.G6)(t.id, (0, u.SW)(t.type), a.Xh),
          b = (0, w.n9)(),
          E = (0, P.w)(),
          f = (0, o.useMemo)(() => C?.GetIncludedAppIDsOrSelf(), [C]);
        if (!C) return null;
        const A = (0, G.NT)(
          (0, l.It)(`${C.GetStorePageURL(g)}${s ? `?${s}` : ""}`, b, E),
        );
        let T;
        "overrideNavigation" in t &&
          (T = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const B = Boolean(h);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: (0, y.A)({ [O().TwoWidthCtn]: B }) },
            o.createElement(
              r.Ii,
              {
                href: T ? void 0 : A,
                style: { display: "block", cursor: "pointer" },
                className: (0, y.A)({ [O().TwoWidthCapsule]: B }),
                preferredFocus: m,
                onClick: T,
              },
              o.createElement(S.V, {
                appids: f,
                hide_status_banners: n,
                show_early_access: e.bShowEarlyAccessBanner,
              }),
              "none" != c && o.createElement(_.aU, { imageType: c, info: t }),
              o.createElement(v.J, { storeItem: C }),
              Boolean(p) &&
                o.createElement(D.m, { appInfo: t, bIsHoverMode: !0 }),
            ),
            B &&
              o.createElement(
                "div",
                {
                  className: (0, y.A)(O().TwoWidthSideInfo, "TwoWidthSideInfo"),
                },
                o.createElement("div", { className: O().Reason }, h),
                o.createElement(
                  "div",
                  { className: O().StoreSaleItemRelease },
                  o.createElement(
                    "span",
                    null,
                    C.GetFormattedSteamReleaseDate(),
                  ),
                ),
                o.createElement(M.n, {
                  bHideTitle: !0,
                  rgTagIDs: C.GetTagIDs(),
                  instanceNum: i,
                }),
              ),
          ),
          o.createElement(F, { ...e }),
        );
      }
      function F(e) {
        const {
            info: t,
            bHidePriceIfOwned: n,
            bHideStatusBanners: r,
            bUseSubscriptionLayout: s,
            elElementToAppendToHover: i,
            bHidePrice: l,
            bHidePlatforms: p,
            creatorAccountID: h,
            bIsHovered: g,
            onlyOneDiscountPct: I,
            strDoubleCapsuleMessage: D,
          } = e,
          [S] = (0, d.G6)(t.id, (0, u.SW)(t.type), a.Xh),
          C =
            S &&
            S?.GetIncludedAppIDsOrSelf().length > 0 &&
            S?.GetIncludedAppIDsOrSelf().every((e) => m.Fm.Get().BOwnsApp(e)),
          b = C && !r;
        if (s && S?.GetStoreItemType() == c.c6.k_EStoreItemType_App)
          return o.createElement(E.E, { appid: S.GetAppID(), bIsMuted: g });
        if (i) return null;
        const f = C && n,
          v = b;
        return o.createElement(_.qn, {
          info: t,
          bShowAsMuted: v,
          bHidePrice: l,
          bShowInLibraryInsteadOfPrice: f,
          bHidePlatforms: p,
          creatorAccountID: h,
          bShowName: e.bShowName,
          onlyOneDiscountPct: I,
          bShowWishlistButton: Boolean(D),
        });
      }
    },
    17289: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => s });
      var o = n(45699),
        a = n(90626),
        r = n(78327);
      function s(e) {
        const { href: t, children: n, bAllowFocuseableAnchor: s, ...i } = e;
        return (0, r.Y2)()
          ? a.createElement("div", { ...i }, n)
          : s
            ? a.createElement(o.Ii, { href: t, ...i }, n)
            : a.createElement("a", { href: t, ...i }, n);
      }
    },
  },
]);

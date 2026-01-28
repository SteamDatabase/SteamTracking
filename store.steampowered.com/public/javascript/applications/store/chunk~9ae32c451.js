/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [351],
  {
    20019: (e, t, n) => {
      function o(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      n.d(t, { U: () => o });
    },
    56055: (e, t, n) => {
      n.d(t, { b2: () => o, nx: () => s });
      const o = "terminal";
      var s;
      !(function (e) {
        (e[(e.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (e[(e.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(s || (s = {}));
    },
    39733: (e, t, n) => {
      n.d(t, { Du: () => h, fy: () => d, pt: () => _ });
      var o = n(68797),
        s = n(78327),
        a = n(41735),
        r = n.n(a),
        i = n(90626),
        l = n(6144),
        c = n(84933),
        m = n(81393);
      class u {
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
              this.m_eventBadgehangeCallback.set(e, new l.lu()),
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
            const n = (0, s.xv)();
            (0, m.wT)(
              n == s.TS.STORE_BASE_URL || n == s.TS.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + n,
            );
            const a = n + "actions/ajaxgetbadgeinfo",
              i = { badgeid: e },
              l = await r().get(a, { params: i, withCredentials: !0 });
            if (
              200 == l.status &&
              (1 == l.data?.success || 42 == l.data?.success)
            ) {
              const t = {
                badgeid: l.data.badgeid,
                level: l.data.level,
                xp: l.data.xp,
                completion_time: l.data.completion_time,
              };
              return (
                this.m_mapBadgeInfo.set(e, t),
                this.m_mapInitialBadgeInfo.has(e) ||
                  this.m_mapInitialBadgeInfo.set(e, t),
                t
              );
            }
            t = (0, o.H)(l);
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
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              "dev" == s.TS.WEB_UNIVERSE &&
                (window.g_UserBadgeForEventStore = u.s_Singleton)),
            u.s_Singleton
          );
        }
        constructor() {}
      }
      function d(e) {
        const [t, n] = (0, i.useState)(e ? u.Get().GetBadgeInfo(e) : void 0);
        return (
          (0, i.useEffect)(() => {
            !t &&
              e &&
              u
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, c.hL)(e ? u.Get().GetBadgeInfoChangeCallback(e) : void 0, n),
          t
        );
      }
      function h(e) {
        u.Get().Test_SetBadgeInfo(e);
      }
      function _(e) {
        const [t, n] = (0, i.useState)(
          e ? u.Get().GetInitialBadgeInfo(e) : void 0,
        );
        return (
          (0, i.useEffect)(() => {
            !t && e && u.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, c.hL)(e ? u.Get().GetBadgeInfoChangeCallback(e) : void 0, () =>
            n(e ? u.Get().GetInitialBadgeInfo(e) : void 0),
          ),
          t
        );
      }
    },
    1501: (e, t, n) => {
      n.d(t, { N: () => l });
      var o = n(34629),
        s = n(14947),
        a = n(56055),
        r = n(62490),
        i = n(78327);
      class l {
        m_rgAnswerToCategoryID = Array();
        m_rgAnswerChosen = Array();
        SetAnswerCategory(e, t) {
          const n = Math.min(e, 64);
          (this.m_rgAnswerToCategoryID = (0, r.$Y)(
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
          (this.m_rgAnswerChosen = (0, r.$Y)(
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
            (e) => e.reveal_question_id == a.b2,
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
          (0, s.Gn)(this);
        }
      }
      (0, o.Cg)([s.sH], l.prototype, "m_rgAnswerToCategoryID", void 0),
        (0, o.Cg)([s.sH], l.prototype, "m_rgAnswerChosen", void 0);
    },
    35400: (e, t, n) => {
      n.d(t, {
        DV: () => D,
        Fq: () => _,
        OC: () => I,
        OM: () => S,
        Sp: () => v,
        Tn: () => C,
        W3: () => b,
        hH: () => g,
        my: () => f,
      });
      var o = n(34629),
        s = n(41735),
        a = n.n(s),
        r = n(14947),
        i = n(90626),
        l = n(68797),
        c = n(6144),
        m = n(84933),
        u = n(78327),
        d = n(44165),
        h = n(34824);
      const _ = 7,
        p = -1;
      class g {
        m_userData;
        m_bLoadedDuringInit = !1;
        m_strLastDoorOpenKey = "video_noneset";
        m_bIsAnyDoorOpened = !1;
        m_nHighestDoorOpened = p;
        m_initialLoadPromise;
        m_mapDoorOpenPromise = new Map();
        m_mapChangeCallback = new Map();
        m_doorInitializedChangedCallback = new c.lu();
        m_largestDoorChangeCallback = new c.lu();
        m_bIsAnyDoorOpenChangeCallback = new c.lu();
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
          let t = d.HD.GetTimeNowWithOverride();
          return (
            u.iA.logged_in &&
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
              this.m_mapChangeCallback.set(e, new c.lu()),
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
          return !u.iA.logged_in ||
            !this.m_userData ||
            e > this.m_userData.length ||
            e < 0
            ? ("dev" == u.TS.WEB_UNIVERSE &&
                console.log(
                  "CDoorStore.OpenDoor Early fail settings:",
                  u.iA.logged_in,
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
          let s = u.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const r = new FormData();
          r.append("sessionid", u.TS.SESSIONID),
            n && r.append("datarecord", n),
            o && r.append("fake_open", "" + o),
            r.append("door_index", "" + e),
            r.append("clan_accountid", "" + u.UF.CLANACCOUNTID),
            t || r.append("open_door", "0");
          let i = null;
          try {
            let n = await a().post(s, r, { withCredentials: !0 });
            if (200 == n?.status && 1 == n?.data?.success)
              return (
                (this.m_userData[e].opened = t),
                (this.m_strLastDoorOpenKey = "door_" + (t ? e : e - 1)),
                n.data.capsuleinsert && (0, h.YH)([n.data.capsuleinsert]),
                this.GetDoorStateChangeCallback(e).Dispatch(t),
                this.RecomputeState(),
                n.data
              );
            i = (0, l.H)(n);
          } catch (e) {
            i = (0, l.H)(e);
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
          const e = u.TS.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
          let t = null;
          try {
            const n = await a().get(e, { withCredentials: !0 });
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
            t = (0, l.H)(n);
          } catch (e) {
            t = (0, l.H)(e);
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
          let t = u.TS.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
          const n = new FormData();
          n.append("sessionid", u.TS.SESSIONID),
            n.append("clan_accountid", "" + e);
          let o = null;
          try {
            let e = await a().post(t, n, { withCredentials: !0 });
            if (200 == e.status && 1 == e?.data?.success) {
              console.log("CDoorStore - closed " + e.data.count);
              for (let e = 0; e < _; ++e)
                (this.m_userData[e].opened = !1),
                  this.GetDoorStateChangeCallback(e).Dispatch(
                    this.m_userData[e].opened,
                  );
              return this.RecomputeState(), !0;
            }
            o = (0, l.H)(e);
          } catch (e) {
            o = (0, l.H)(e);
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
            g.s_Singleton ||
              ((g.s_Singleton = new g()),
              g.s_Singleton.Init(),
              "dev" == u.TS.WEB_UNIVERSE &&
                (window.g_EventDoorStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
        Init() {
          (this.m_userData = (0, u.Tc)("doorinfo", "application_config")),
            this.m_userData &&
              ((this.m_bLoadedDuringInit = !0),
              this.RecomputeState(),
              "dev" == u.TS.WEB_UNIVERSE &&
                console.log("CDoorStore Loading - ", this.m_userData));
        }
      }
      function I() {
        return { fnOpenDoor: g.Get().OpenDoor };
      }
      function D() {
        const [e, t] = (0, i.useState)(g.Get().BIsInitialized());
        return (
          (0, i.useEffect)(() => {
            e || g.Get().LoadDoorData();
          }, [e]),
          (0, m.hL)(g.Get().GetDoorStateInitializedChangeCallback(), t),
          e
        );
      }
      function S(e) {
        const t = D(),
          [n, o] = (0, i.useState)(t ? g.Get().BIsDoorOpened(e) : void 0);
        return (0, m.hL)(g.Get().GetDoorStateChangeCallback(e), o), n;
      }
      function C() {
        const e = D(),
          [t, n] = (0, i.useState)(e ? g.Get().GetLargestDoorOpenIndex() : p);
        return (0, m.hL)(g.Get().GetLargestDoorIndexChange(), n), t;
      }
      function b() {
        const e = D(),
          [t, n] = (0, i.useState)(!!e && g.Get().BIsAnyDoorOpened());
        return (0, m.hL)(g.Get().GetIsAnyDoorOpenChange(), n), t;
      }
      function v(e) {
        g.Get().SetInMemoryUpdateDoorOpenUpto(e);
      }
      function f(e, t) {
        g.Get().SetInMemorySpecificDoorState(e, t);
      }
      (0, o.Cg)([r.sH], g.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, o.Cg)([r.sH], g.prototype, "m_nHighestDoorOpened", void 0),
        (0, o.Cg)([m.oI], g.prototype, "BIsDoorOpened", null),
        (0, o.Cg)([m.oI], g.prototype, "OpenDoor", null);
    },
    34824: (e, t, n) => {
      n.d(t, {
        Fb: () => S,
        Jz: () => C,
        M$: () => I,
        Tb: () => g,
        YH: () => p,
        tO: () => D,
      });
      var o,
        s = n(34629),
        a = n(14947),
        r = (n(90626), n(89128)),
        i = n(81393),
        l = n(6144),
        c = n(84933),
        m = n(78327),
        u = n(6379),
        d = n(16021),
        h = n(3967);
      !(function (e) {
        (e[(e.k_EDiscoveryAction_Invalid = 0)] = "k_EDiscoveryAction_Invalid"),
          (e[(e.k_EDiscoveryAction_OpenStorePage = 1)] =
            "k_EDiscoveryAction_OpenStorePage"),
          (e[(e.k_EDiscoveryAction_OpenDoor = 2)] =
            "k_EDiscoveryAction_OpenDoor");
      })(o || (o = {}));
      class _ {
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
            if ((0, r.ye)(e.section_type))
              return (
                !(0, r.CU)(e) ||
                ("wishlist" != (0, r.Pm)(e) &&
                  "wishlist_onsale" != (0, r.Pm)(e))
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
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_DynamicCapsuleInsertStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          (0, a.Gn)(this);
        }
        Init() {
          const e = (0, m.Fd)("capsuleinsert", "application_config");
          _.ValidateData(e) &&
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
            h.I.Get()
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
      function p(e) {
        _.Get().ReplaceInsertion(e);
      }
      function g(e, t) {
        return _.Get().GetMatchingInsertion(e, t);
      }
      function I(e, t) {
        return _.Get().GetChangeCallback(e, t);
      }
      function D(e) {
        _.Get().AppCapsuleFound(e);
      }
      function S() {
        return _.Get().GetAnyNonMaterializedInsertionRequest();
      }
      function C(e) {
        return _.Get().BIsInsertableSectionType(e);
      }
      (0, s.Cg)([c.oI], _.prototype, "SaleInteractionCallback", null),
        (0, s.Cg)([a.XI], _.prototype, "DeployCapsuleIfPossible", null);
    },
    3967: (e, t, n) => {
      n.d(t, { I: () => a });
      var o = n(6144),
        s = n(78327);
      class a {
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
              ("dev" == s.TS.WEB_UNIVERSE &&
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
            a.s_Singleton ||
              ((a.s_Singleton = new a()),
              a.s_Singleton.Init(),
              "dev" == s.TS.WEB_UNIVERSE &&
                (window.g_SaleInteractionStore = a.s_Singleton)),
            a.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
    },
    32541: (e, t, n) => {
      n.d(t, { LG: () => b, hA: () => C });
      var o = n(90626),
        s = n(76217),
        a = n(8092),
        r = n(30894),
        i = n(55263),
        l = n(17289),
        c = n(52038),
        m = n(61859),
        u = n(82227),
        d = n(61336),
        h = n(78327),
        _ = n(84811),
        p = n(32630),
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
            bAddLinkToMemberList: v,
            bMinimalDisplay: f,
          } = e,
          { creatorHome: w } = (0, a.FV)(t.clan_account_id),
          [E] = (0, r.L2)();
        if (E || !w)
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
          G =
            "developer" == t.type
              ? (0, m.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, m.we)("#CreatorHome_PublishedBy")
                : (0, m.we)("#CreatorHome_InFranchise"),
          A = w.GetCreatorHomeURL(y),
          O = w.GetNumFollowers();
        return o.createElement(
          _.tH,
          null,
          o.createElement(
            p.Ay,
            { feature: "salecreatorhome" },
            o.createElement(
              s.Z,
              {
                className: (0, c.A)(
                  I.DevSummaryCtn,
                  C ? I.SmallFormat : I.LargeFormat,
                  f ? I.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !i && o.createElement("span", { className: I.Title }, G),
              o.createElement(
                "div",
                { className: I.DevSummaryWidgetCtn },
                o.createElement("div", {
                  className: I.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${w.GetAvatarURLFullSize()} )`,
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
                        href: (0, d.k2)(A),
                        className: I.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      o.createElement("img", {
                        className: (0, c.A)(I.Avatar, "Avatar_Trgt"),
                        src: w.GetAvatarURLFullSize(),
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
                          { href: (0, d.k2)(A), className: I.CreatorNameName },
                          w.GetName(),
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
                            w.GetTagLine(),
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
                              (0, u.Dq)(O),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(v) &&
                    o.createElement(
                      "a",
                      {
                        href:
                          h.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          w.GetClanSteamID().ConvertTo64BitString() +
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
          [s] = (0, i.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!s)
          return o.createElement(
            "div",
            { className: I.DevSummaryWidgetCtn },
            o.createElement(g.t, null),
          );
        let a;
        const r = s.GetAllDeveloperCreatorClans();
        if (r?.length > 0)
          a = { appid: t, name: "", clan_account_id: r[0], type: "developer" };
        else {
          const e = s.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            a = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = s.GetAllFranchiseCreatorClans();
            e?.length > 0 &&
              (a = {
                appid: t,
                name: "",
                clan_account_id: e[0],
                type: "franchise",
              });
          }
        }
        return a
          ? o.createElement(
              _.tH,
              null,
              o.createElement(C, { creatorID: a, bSmallFormat: n }),
            )
          : null;
      }
    },
    77021: (e, t, n) => {
      n.d(t, { PM: () => h, TU: () => m, lM: () => d, ty: () => u });
      var o = n(34629),
        s = n(90626),
        a = n(78327),
        r = n(84933),
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
              "dev" == a.TS.WEB_UNIVERSE &&
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
        s.useEffect(() => {
          if (!m.Get().BIsConnected() || !t) return;
          e(t) && m.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function h(e) {
        const t = (0, c.q3)(() => m.Get().GetJumpToSubsectionIDs());
        s.useEffect(() => {
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
        (0, o.Cg)([r.oI], m.prototype, "HandleMessage", null);
    },
    17289: (e, t, n) => {
      n.d(t, { m: () => r });
      var o = n(45699),
        s = n(90626),
        a = n(78327);
      function r(e) {
        const { href: t, children: n, bAllowFocuseableAnchor: r, ...i } = e;
        return (0, a.Y2)()
          ? s.createElement("div", { ...i }, n)
          : r
            ? s.createElement(o.Ii, { href: t, ...i }, n)
            : s.createElement("a", { href: t, ...i }, n);
      }
    },
  },
]);

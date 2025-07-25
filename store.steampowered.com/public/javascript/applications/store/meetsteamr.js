/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8620],
  {
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    15588: (e) => {
      e.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        Row: "yueujW6bRizgc-buB29Dw",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        Expanded: "mJXTRr0gd2yNafeFp9NOr",
      };
    },
    20019: (e, t, n) => {
      "use strict";
      function s(e) {
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
      n.d(t, { U: () => s });
    },
    56055: (e, t, n) => {
      "use strict";
      n.d(t, { b2: () => s, nx: () => a });
      const s = "terminal";
      var a;
      !(function (e) {
        (e[(e.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (e[(e.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(a || (a = {}));
    },
    39733: (e, t, n) => {
      "use strict";
      n.d(t, { Du: () => _, fy: () => m, pt: () => g });
      var s = n(68797),
        a = n(78327),
        o = n(41735),
        r = n.n(o),
        i = n(90626),
        l = n(6144),
        c = n(84933),
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
              this.m_eventBadgehangeCallback.set(e, new l.lu()),
            this.m_eventBadgehangeCallback.get(e)
          );
        }
        Test_SetBadgeInfo(e) {
          this.m_mapBadgeInfo.set(e.badgeid, e),
            this.GetBadgeInfoChangeCallback(e.badgeid).Dispatch(e);
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
            const o = n + "actions/ajaxgetbadgeinfo",
              i = { badgeid: e },
              l = await r().get(o, { params: i, withCredentials: !0 });
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
            t = (0, s.H)(l);
          } catch (e) {
            t = (0, s.H)(e);
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
      function m(e) {
        const [t, n] = (0, i.useState)(d.Get().GetBadgeInfo(e));
        return (
          (0, i.useEffect)(() => {
            !t &&
              e &&
              d
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, c.hL)(d.Get().GetBadgeInfoChangeCallback(e), n),
          t
        );
      }
      function _(e) {
        d.Get().Test_SetBadgeInfo(e);
      }
      function g(e) {
        const [t, n] = (0, i.useState)(d.Get().GetInitialBadgeInfo(e));
        return (
          (0, i.useEffect)(() => {
            !t && e && d.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, c.hL)(d.Get().GetBadgeInfoChangeCallback(e), () =>
            n(d.Get().GetInitialBadgeInfo(e)),
          ),
          t
        );
      }
    },
    1501: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => l });
      var s = n(34629),
        a = n(14947),
        o = n(56055),
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
            (e) => e.reveal_question_id == o.b2,
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
      (0, s.Cg)([a.sH], l.prototype, "m_rgAnswerToCategoryID", void 0),
        (0, s.Cg)([a.sH], l.prototype, "m_rgAnswerChosen", void 0);
    },
    35400: (e, t, n) => {
      "use strict";
      n.d(t, {
        DV: () => S,
        Fq: () => g,
        OC: () => I,
        OM: () => D,
        Sp: () => b,
        Tn: () => E,
        W3: () => f,
        hH: () => h,
        my: () => C,
      });
      var s = n(34629),
        a = n(41735),
        o = n.n(a),
        r = n(14947),
        i = n(90626),
        l = n(68797),
        c = n(6144),
        u = n(84933),
        d = n(78327),
        m = n(44165),
        _ = n(34824);
      const g = 7,
        p = -1;
      class h {
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
          let t = m.HD.GetTimeNowWithOverride();
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
          return g;
        }
        SetInMemoryUpdateDoorOpenUpto(e) {
          for (let t = 0; t < g; ++t) {
            const n = t <= e;
            this.m_userData[t].opened != n &&
              ((this.m_userData[t].opened = n),
              this.GetDoorStateChangeCallback(t).Dispatch(n));
          }
          this.RecomputeState();
        }
        SetInMemorySpecificDoorState(e, t) {
          e < g
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
        async OpenDoor(e, t = !0, n = "", s = !1) {
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
                      this.InternalOpenDoor(e, t, n, s),
                    ),
                  this.m_mapDoorOpenPromise.get(e));
        }
        async InternalOpenDoor(e, t = !0, n, s = !1) {
          let a = d.TS.STORE_BASE_URL + "saleaction/ajaxopendoor";
          const r = new FormData();
          r.append("sessionid", d.TS.SESSIONID),
            n && r.append("datarecord", n),
            s && r.append("fake_open", "" + s),
            r.append("door_index", "" + e),
            r.append("clan_accountid", "" + d.UF.CLANACCOUNTID),
            t || r.append("open_door", "0");
          let i = null;
          try {
            let n = await o().post(a, r, { withCredentials: !0 });
            if (200 == n?.status && 1 == n?.data?.success)
              return (
                (this.m_userData[e].opened = t),
                (this.m_strLastDoorOpenKey = "door_" + (t ? e : e - 1)),
                n.data.capsuleinsert && (0, _.YH)([n.data.capsuleinsert]),
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
          const e = d.TS.STORE_BASE_URL + "saleaction/ajaxgetopendoor";
          let t = null;
          try {
            const n = await o().get(e, { withCredentials: !0 });
            if (200 == n.status && n.data?.doordata) {
              (this.m_userData = n.data.doordata),
                (this.m_bLoadedDuringInit = !0);
              for (let e = 0; e < g; ++e)
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
          let t = d.TS.STORE_BASE_URL + "saleaction/ajaxclosealldoor";
          const n = new FormData();
          n.append("sessionid", d.TS.SESSIONID),
            n.append("clan_accountid", "" + e);
          let s = null;
          try {
            let e = await o().post(t, n, { withCredentials: !0 });
            if (200 == e.status && 1 == e?.data?.success) {
              console.log("CDoorStore - closed " + e.data.count);
              for (let e = 0; e < g; ++e)
                (this.m_userData[e].opened = !1),
                  this.GetDoorStateChangeCallback(e).Dispatch(
                    this.m_userData[e].opened,
                  );
              return this.RecomputeState(), !0;
            }
            s = (0, l.H)(e);
          } catch (e) {
            s = (0, l.H)(e);
          }
          return (
            console.error(
              "CDoorStore.CloseAllDoors failed: " + s?.strErrorMsg,
              s,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            h.s_Singleton ||
              ((h.s_Singleton = new h()),
              h.s_Singleton.Init(),
              "dev" == d.TS.WEB_UNIVERSE &&
                (window.g_EventDoorStore = h.s_Singleton)),
            h.s_Singleton
          );
        }
        constructor() {
          (0, r.Gn)(this);
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
      function I() {
        return { fnOpenDoor: h.Get().OpenDoor };
      }
      function S() {
        const [e, t] = (0, i.useState)(h.Get().BIsInitialized());
        return (
          (0, i.useEffect)(() => {
            e || h.Get().LoadDoorData();
          }, [e]),
          (0, u.hL)(h.Get().GetDoorStateInitializedChangeCallback(), t),
          e
        );
      }
      function D(e) {
        const t = S(),
          [n, s] = (0, i.useState)(t ? h.Get().BIsDoorOpened(e) : void 0);
        return (0, u.hL)(h.Get().GetDoorStateChangeCallback(e), s), n;
      }
      function E() {
        const e = S(),
          [t, n] = (0, i.useState)(e ? h.Get().GetLargestDoorOpenIndex() : p);
        return (0, u.hL)(h.Get().GetLargestDoorIndexChange(), n), t;
      }
      function f() {
        const e = S(),
          [t, n] = (0, i.useState)(!!e && h.Get().BIsAnyDoorOpened());
        return (0, u.hL)(h.Get().GetIsAnyDoorOpenChange(), n), t;
      }
      function b(e) {
        h.Get().SetInMemoryUpdateDoorOpenUpto(e);
      }
      function C(e, t) {
        h.Get().SetInMemorySpecificDoorState(e, t);
      }
      (0, s.Cg)([r.sH], h.prototype, "m_bIsAnyDoorOpened", void 0),
        (0, s.Cg)([r.sH], h.prototype, "m_nHighestDoorOpened", void 0),
        (0, s.Cg)([u.oI], h.prototype, "BIsDoorOpened", null),
        (0, s.Cg)([u.oI], h.prototype, "OpenDoor", null);
    },
    34824: (e, t, n) => {
      "use strict";
      n.d(t, {
        Fb: () => D,
        Jz: () => E,
        M$: () => I,
        Tb: () => h,
        YH: () => p,
        tO: () => S,
      });
      var s,
        a = n(34629),
        o = n(14947),
        r = (n(90626), n(77516)),
        i = n(81393),
        l = n(6144),
        c = n(84933),
        u = n(78327),
        d = n(6379),
        m = n(82097),
        _ = n(3967);
      !(function (e) {
        (e[(e.k_EDiscoveryAction_Invalid = 0)] = "k_EDiscoveryAction_Invalid"),
          (e[(e.k_EDiscoveryAction_OpenStorePage = 1)] =
            "k_EDiscoveryAction_OpenStorePage"),
          (e[(e.k_EDiscoveryAction_OpenDoor = 2)] =
            "k_EDiscoveryAction_OpenDoor");
      })(s || (s = {}));
      class g {
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
                !e.smart_section ||
                ("wishlist" != e.smart_section_type &&
                  "wishlist_onsale" != e.smart_section_type)
              );
          }
          return !1;
        }
        BHasExistingInsertion(e) {
          return Boolean(this.GetMatchingInsertion(e.sectionid, e.tabid));
        }
        DeployCapsuleIfPossible(e, t) {
          if (this.BHasExistingInsertion(e)) return null;
          if (u.P9.ANNOUNCEMENT_GID) {
            const n = d.O3.GetClanEventFromAnnouncementGID(
                u.P9.ANNOUNCEMENT_GID,
              ),
              s = n?.GetSaleSectionByID(e.sectionid);
            if (this.BIsInsertableSectionType(s)) {
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
            g.s_Singleton ||
              ((g.s_Singleton = new g()),
              g.s_Singleton.Init(),
              "dev" == u.TS.WEB_UNIVERSE &&
                (window.g_DynamicCapsuleInsertStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        constructor() {
          (0, o.Gn)(this);
        }
        Init() {
          const e = (0, u.Fd)("capsuleinsert", "application_config");
          g.ValidateData(e) &&
            (e.sectionID
              ? this.m_mapMaterializedInsertion.set(this.GetKey(e), e)
              : e.insertion_requirement
                ? (this.m_rgFutureInsertions.push(e),
                  e?.appid &&
                    m.A.Get()
                      .QueueAppRequest(e.appid, {
                        include_assets: !0,
                        include_release: !0,
                        include_trailers: !0,
                      })
                      .then(() => {
                        const t = m.A.Get().GetApp(e.appid);
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
                : "dev" == u.TS.WEB_UNIVERSE &&
                  console.error(
                    "CDynamicCapsuleInsertStore: Payload not material and missing instructions.",
                    e,
                  ),
            "dev" == u.TS.WEB_UNIVERSE &&
              console.log("CDynamicCapsuleInsertStore loaded ", e)),
            _.I.Get()
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
        g.Get().ReplaceInsertion(e);
      }
      function h(e, t) {
        return g.Get().GetMatchingInsertion(e, t);
      }
      function I(e, t) {
        return g.Get().GetChangeCallback(e, t);
      }
      function S(e) {
        g.Get().AppCapsuleFound(e);
      }
      function D() {
        return g.Get().GetAnyNonMaterializedInsertionRequest();
      }
      function E(e) {
        return g.Get().BIsInsertableSectionType(e);
      }
      (0, a.Cg)([c.oI], g.prototype, "SaleInteractionCallback", null),
        (0, a.Cg)([o.XI], g.prototype, "DeployCapsuleIfPossible", null);
    },
    3967: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => o });
      var s = n(6144),
        a = n(78327);
      class o {
        m_setInteractions = new Set();
        m_nActiveTabID = -1;
        m_interactionCallback = new s.lu();
        m_bDebugMode = !0;
        GetNewInteractionCallback() {
          return this.m_interactionCallback;
        }
        AddInteraction(e, t) {
          const n = `${this.m_nActiveTabID}_${e}_${t}`,
            s = !this.m_setInteractions.has(n);
          this.m_setInteractions.add(n),
            s &&
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
            o.s_Singleton ||
              ((o.s_Singleton = new o()),
              o.s_Singleton.Init(),
              "dev" == a.TS.WEB_UNIVERSE &&
                (window.g_SaleInteractionStore = o.s_Singleton)),
            o.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => f, KM: () => I, KT: () => E });
      var s = n(41735),
        a = n.n(s),
        o = n(58632),
        r = n.n(o),
        i = n(90626),
        l = n(20194),
        c = n(75233),
        u = n(17720),
        d = n(68797),
        m = n(78327),
        _ = n(56545),
        g = n(37735),
        p = n(23809);
      const h = "nicknames";
      function I(e) {
        const t = (0, p.KV)(),
          { data: n, isLoading: s } = (0, l.I)({
            queryKey: [h],
            queryFn: async () => {
              const e = new Map();
              if (m.iA.logged_in) {
                const n = _.w.Init(g.dN),
                  s = (await g.xt.GetNicknameList(t, n)).Body().toObject();
                s?.nicknames &&
                  s.nicknames.length > 0 &&
                  s.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const S = new (r())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, m.yK)()
                  ? m.TS.COMMUNITY_BASE_URL
                  : m.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  s = await a().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !s ||
                  200 != s.status ||
                  1 != s.data?.success ||
                  !s.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(s).strErrorMsg}`;
                return [s.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  s = await a().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !s ||
                  200 != s.status ||
                  1 != s.data?.success ||
                  !s.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(s).strErrorMsg}`;
                const o = new Map();
                return (
                  s.data.userinfos.forEach((e) =>
                    o.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => o.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        D = "avatarandpersonas";
      function E(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: [D, e],
          queryFn: () => S.load(e),
        });
        return [t, n];
      }
      function f(e) {
        const t = (0, c.jE)(),
          { data: n, isLoading: s } = (0, l.I)({
            queryKey: [D, e],
            queryFn: async () => {
              const n = await S.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [D, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          a = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return s ? null : a;
      }
    },
    77021: (e, t, n) => {
      "use strict";
      n.d(t, { PM: () => m, TU: () => u, lM: () => d });
      var s = n(34629),
        a = n(90626),
        o = n(78327),
        r = n(84933),
        i = n(14947),
        l = n(95034),
        c = n(65946);
      class u {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = i.sH.set();
        m_setMouseOverSubsectionID = i.sH.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return (
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              "dev" == o.TS.WEB_UNIVERSE &&
                (window.g_PartnerSaleLivePreviewClient = u.s_Singleton)),
            u.s_Singleton
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
          return !!window.opener && this.m_eventModelJson;
        }
        GetEventModel() {
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
      function d(e) {
        const t = (0, c.q3)(() => u.Get().GetJumpToSectionID());
        a.useEffect(() => {
          if (!u.Get().BIsConnected() || !t) return;
          e(t) && u.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function m(e) {
        const t = (0, c.q3)(() => u.Get().GetJumpToSubsectionIDs());
        a.useEffect(() => {
          if (!u.Get().BIsConnected() || !t) return;
          e(t.nSectionID, t.strSubsectionID) &&
            u.Get().ClearJumpToSubectionID();
        }, [e, t]);
      }
      (0, s.Cg)([i.sH], u.prototype, "m_eventModelJson", void 0),
        (0, s.Cg)([i.sH], u.prototype, "m_setMouseOverSectionID", void 0),
        (0, s.Cg)([i.sH], u.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, s.Cg)([i.sH], u.prototype, "m_jumpToSection", void 0),
        (0, s.Cg)([i.sH], u.prototype, "m_jumpToSubsection", void 0),
        (0, s.Cg)([r.oI], u.prototype, "HandleMessage", null);
    },
    69409: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => m });
      var s = n(90626),
        a = n(22837),
        o = n(38390),
        r = n(52038),
        i = n(61859),
        l = n(61336),
        c = n(78327),
        u = n(15392),
        d = n(27666);
      function m(e) {
        const { gidEvent: t } = e,
          n = (0, o.RR)(t),
          [m, _] = (0, s.useMemo)(() => {
            if (
              n?.jsondata?.localized_sale_product_banner?.length > 0 &&
              n?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, a.sf)(c.TS.LANGUAGE),
                t = i.NT.GetWithFallback(
                  n.jsondata.localized_sale_product_banner,
                  e,
                ),
                s = i.NT.GetWithFallback(
                  n.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && s?.length > 0)
                return [
                  d.z.GenerateURLFromHashAndExt(n.clanSteamID, t),
                  d.z.GenerateURLFromHashAndExt(n.clanSteamID, s),
                ];
            }
            return [null, null];
          }, [n]);
        return m?.length > 0 && _?.length > 0
          ? s.createElement(
              "a",
              { href: (0, l.k2)(n.GetSaleURL()), className: u.Link },
              s.createElement("img", {
                src: m,
                className: (0, r.A)(u.Banner, u.Big),
              }),
              s.createElement("img", {
                src: _,
                className: (0, r.A)(u.Banner, u.Mobile),
              }),
            )
          : null;
      }
    },
    8905: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var s = n(90626),
        a = n(17720),
        o = n(27144),
        r = n(15736),
        i = n(78327);
      function l(e) {
        const { accountID: t, bHideWhenNotAvailable: n, bHideName: l } = e,
          [c] = (0, o.KT)(t),
          u = (0, o.KM)(t),
          d = s.useMemo(() => a.b.InitFromAccountID(t), [t]),
          m = `${i.TS.COMMUNITY_BASE_URL}profiles/${d.ConvertTo64BitString()}`;
        return s.createElement(
          s.Fragment,
          null,
          Boolean(!c)
            ? s.createElement(
                s.Fragment,
                null,
                Boolean(!n) && s.createElement("span", null, t),
              )
            : s.createElement(
                "a",
                { href: m },
                s.createElement("img", {
                  className: r.SmallAvatar,
                  src: c.avatar_url,
                  "data-miniprofile": "s" + d.ConvertTo64BitString(),
                }),
                Boolean(!l) &&
                  s.createElement(
                    "span",
                    null,
                    u ? `${u} (${c.persona_name})` : c.persona_name,
                  ),
              ),
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { qx: () => g });
      var s = n(10981),
        a = n(61859),
        o = n(12155),
        r = n(90626),
        i = n(52038),
        l = n(95695),
        c = n(84811),
        u = n(64734),
        d = n(65946),
        m = n(26408);
      function _(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: s,
            toggleMinimized: a,
            className: o,
            children: _,
            elAdditionalButtons: g,
          } = e,
          h = (0, d.q3)(() => s());
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, i.A)(
                o,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, i.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && r.createElement(m.o, { tooltip: n }),
            ),
            r.createElement(
              "div",
              { className: u.SectionTitleButtons },
              g,
              r.createElement(p, { bIsMinimized: h, fnToggleMinimize: a }),
            ),
          ),
          !h && r.createElement(c.tH, null, _),
        );
      }
      function g(e) {
        const [t, n] = r.useState(Boolean(e.bStartMinimized));
        return r.createElement(
          _,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return r.createElement(
          s.$n,
          { "data-tooltip-text": (0, a.we)(i), onClick: n },
          e.bIsMinimized
            ? r.createElement(o.hz4, null)
            : r.createElement(o.Xjb, null),
        );
      }
    },
    68541: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => W, default: () => J });
      var s = n(90626),
        a = n(43527),
        o = n(92757),
        r = n(82715),
        i = n(22837),
        l = n(2160),
        c = n(8527),
        u = n(60746),
        d = n(6379),
        m = n(30756),
        _ = n(92557),
        g = n(22797),
        p = n(61859),
        h = n(43068);
      function I(e) {
        const { gid: t } = (0, o.g)(),
          [n, a] = (0, s.useState)(!0);
        if (
          (s.useEffect(() => {
            n &&
              (d.O3.Init(), Promise.all([u.KN.InitGlobal()]).then(() => a(!1)));
          }, [n]),
          n)
        )
          return s.createElement(g.t, {
            string: (0, p.we)("#Loading"),
            position: "center",
          });
        const I = d.O3.GetClanEventModel(t);
        return I
          ? s.createElement(
              r.tH,
              null,
              !I.BIsUnlistedEvent() &&
                s.createElement(
                  "div",
                  null,
                  "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                ),
              s.createElement(_.jA, {
                lang: (0, i.sf)(c.TS.LANGUAGE),
                event: I,
                adminPanel:
                  c.TS.EREALM === l.TU.k_ESteamRealmChina
                    ? s.createElement(h.P, { eventModel: I })
                    : s.createElement(m.g, {
                        eventModel: I,
                        bSupportsSticky: !0,
                      }),
              }),
            )
          : null;
      }
      var S = n(51614),
        D = n(41735),
        E = n.n(D),
        f = n(38390),
        b = n(44165),
        C = n(27144),
        v = n(10981),
        w = n(71298),
        y = n(95034),
        M = n(8905),
        A = n(78395),
        G = n(21869),
        T = n(48479),
        B = n(91675),
        O = n(84933),
        k = n(30470),
        L = n(24484),
        R = n(15588),
        N = n.n(R),
        H = n(52038);
      function U(e) {
        const [t] = (0, y.QD)("gid"),
          n = (0, f.RR)(t),
          a = (0, i.sf)(k.TS.LANGUAGE);
        return n
          ? s.createElement(
              "div",
              { className: N().Ctn },
              s.createElement(
                "div",
                { className: N().Row },
                s.createElement("h2", null, n.GetNameWithFallback(a)),
                s.createElement(
                  "a",
                  {
                    href: `${k.TS.STORE_BASE_URL}meetsteam/${t}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              s.createElement(P, { eventModel: n }),
            )
          : s.createElement(g.t, { string: (0, p.we)("#Loading") });
      }
      function P(e) {
        const { eventModel: t } = e,
          n = (function (e) {
            const t = (0, b.f1)(),
              [n] = (0, s.useState)(() =>
                (0, L.Tc)("registrations", "application_config")
                  .sort((t, n) => {
                    const s = K(
                        e.jsondata.meet_steam_groups,
                        t.group_id,
                        t.session_id,
                      ),
                      a = K(
                        e.jsondata.meet_steam_groups,
                        n.group_id,
                        n.session_id,
                      );
                    return (
                      (a?.session?.rtime_start || 0) -
                      (s?.session?.rtime_start || 0)
                    );
                  })
                  .map((n) => {
                    const s = K(
                      e.jsondata.meet_steam_groups,
                      n.group_id,
                      n.session_id,
                    );
                    return (
                      (n.relativeToToday = (function (e, t) {
                        const n = new Date(1e3 * e),
                          s = void 0 !== t ? new Date(1e3 * t) : new Date(),
                          a = new Date(
                            s.getFullYear(),
                            s.getMonth(),
                            s.getDate(),
                          ),
                          o = new Date(
                            s.getFullYear(),
                            s.getMonth(),
                            s.getDate() + 1,
                          );
                        return n >= a && n < o
                          ? "today"
                          : n < a
                            ? "past"
                            : "future";
                      })(s?.session?.rtime_start || 0, t)),
                      n
                    );
                  }),
              );
            return (0, s.useMemo)(
              () =>
                n.reduce(
                  (e, t) => (
                    e[t.relativeToToday] || (e[t.relativeToToday] = []),
                    e[t.relativeToToday].push(t),
                    e
                  ),
                  { today: [], past: [], future: [] },
                ),
              [n],
            );
          })(t),
          [a] = (0, y.QD)("accountid"),
          o = (0, b.f1)();
        return s.createElement(
          "div",
          null,
          s.createElement(M.p, { accountID: a }),
          s.createElement("br", null),
          s.createElement("br", null),
          s.createElement("br", null),
          s.createElement(F, {
            eventModel: t,
            rgUserRegs: n.today,
            strTitle: "Today " + (0, B.$z)(o),
          }),
          s.createElement(F, {
            eventModel: t,
            rgUserRegs: n.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          s.createElement(F, {
            eventModel: t,
            rgUserRegs: n.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function F(e) {
        const {
          eventModel: t,
          rgUserRegs: n,
          bHideIfEmpty: a,
          strTitle: o,
        } = e;
        return 0 == n.length && a
          ? null
          : s.createElement(
              T.qx,
              { title: `${o} (${n.length})`, bStartMinimized: a },
              Boolean(!n || 0 == n.length)
                ? s.createElement("div", null, a ? "" : "No registrations")
                : s.createElement(
                    "div",
                    null,
                    n.map((e) =>
                      s.createElement(x, {
                        key: `${e.group_id}_${e.session_id}`,
                        eventModel: t,
                        reg: e,
                      }),
                    ),
                  ),
            );
      }
      function z(e) {
        const { desc: t } = e,
          [n, a] = (0, s.useState)(!1),
          o = (0, s.useCallback)(() => a((e) => !e), []);
        return s.createElement(
          "div",
          {
            className: (0, H.A)({
              [N().DescriptionWrapper]: !0,
              [N().Expanded]: n,
            }),
            onClick: o,
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
          },
          t,
        );
      }
      function x(e) {
        const { reg: t, eventModel: n } = e,
          [a] = (0, y.QD)("accountid"),
          [o] = (0, C.KT)(a),
          [i, l] = (0, s.useState)([]),
          [c, u] = (0, s.useState)(!1),
          d = (0, s.useMemo)(() => JSON.parse(t.jsondata), [t]),
          { group: m, session: _ } = K(
            n.jsondata.meet_steam_groups,
            t.group_id,
            t.session_id,
          ),
          [g, h, I] = (0, O.uD)(),
          D =
            ((f = n.GID),
            (b = a),
            (w = t.group_id),
            (M = t.session_id),
            (0, S.n)({
              mutationFn: async ({ rgGuests: e }) => {
                const t = new FormData();
                t.append("sessionid", k.TS.SESSIONID),
                  t.append("gid", f),
                  t.append("accountid", "" + b),
                  t.append("meetsteam_group_id", "" + w),
                  t.append("meetsteam_session_id", "" + M),
                  e?.length && t.append("guests", e.join("|"));
                const n = `${k.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  s = await E().post(n, t, { withCredentials: !0 });
                return 1 == s?.data?.success;
              },
            }));
        var f, b, w, M;
        return s.createElement(
          "div",
          null,
          s.createElement(q, { group: m, session: _ }),
          Boolean(c)
            ? s.createElement(
                "div",
                null,
                s.createElement("br", null),
                s.createElement("b", null, "Successful Attendance Registered"),
              )
            : s.createElement(
                s.Fragment,
                null,
                s.createElement(v.Yh, {
                  label: "Attendee: " + d.name || 0,
                  checked: !0,
                  onChange: (e) => {},
                }),
                Boolean(d.guest_names?.length > 0) &&
                  s.createElement(
                    s.Fragment,
                    null,
                    d.guest_names.map((e) =>
                      s.createElement(v.Yh, {
                        key: t.group_id + "_" + t.session_id + "_" + e,
                        label: "Guest Name: " + e,
                        checked: i.includes(e),
                        onChange: (t) => {
                          l((n) =>
                            t
                              ? n.includes(e)
                                ? n
                                : [...n, e]
                              : n.filter((t) => t !== e),
                          );
                        },
                      }),
                    ),
                  ),
                s.createElement(
                  v.jn,
                  { onClick: h },
                  (0, p.we)("#Button_Submit"),
                ),
              ),
          s.createElement(
            G.E,
            { active: g },
            s.createElement(
              r.tH,
              null,
              s.createElement(j, {
                closeModal: I,
                rgGuestsAttending: i,
                fnMarkAttendance: D,
                fnOnSuccess: () => u(!0),
              }),
            ),
          ),
        );
      }
      function j(e) {
        const {
            closeModal: t,
            rgGuestsAttending: n,
            fnMarkAttendance: a,
            fnOnSuccess: o,
          } = e,
          r = (0, w.vs)();
        return r.bLoading
          ? s.createElement(w.Hh, {
              state: r,
              strDialogTitle: (0, p.we)("#Saving"),
              closeModal: t,
            })
          : s.createElement(
              A.o0,
              {
                onCancel: t,
                strTitle: (0, p.we)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  r.fnSetLoading(!0),
                    a
                      .mutateAsync({ rgGuests: n })
                      .then((e) => {
                        e
                          ? (o(),
                            r.fnSetStrSuccess("Success! Attendance Marked."))
                          : r.fnSetStrError(
                              (0, p.we)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        r.fnSetStrError(
                          (0, p.we)("#Login_Error_Network_Description"),
                        ),
                      );
                },
              },
              "Mark Attendance?",
            );
      }
      function q(e) {
        const { session: t, group: n } = e;
        return t && n
          ? s.createElement(
              "div",
              null,
              s.createElement("hr", null),
              s.createElement(
                "div",
                null,
                "Title: ",
                n.localized_session_title[0],
              ),
              s.createElement(
                "div",
                null,
                s.createElement(z, {
                  desc: `Description: ${n.localized_session_description[0] || ""}`,
                }),
              ),
              s.createElement(
                "div",
                null,
                "Time:",
                (0, B._l)(t.rtime_start, !1, !0),
                " @",
                s.createElement(
                  "b",
                  null,
                  (0, B.Vx)(t.rtime_start, t.rtime_end, !0),
                ),
              ),
              "dev" == k.TS.WEB_UNIVERSE &&
                s.createElement(
                  "div",
                  null,
                  "Rtime Start (Dev only): ",
                  t.rtime_start,
                ),
            )
          : s.createElement("div", null, "Session Infomrmation Missing");
      }
      function K(e, t, n) {
        for (const s of e)
          if (s.group_id === t) {
            const e = s.sessions.find((e) => e.id === n);
            if (e) return { group: s, session: e };
          }
        return { group: null, session: null };
      }
      var $ = n(97058);
      const W = {
        MeetSteamAttendance: () => `${a.B.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${a.B.MeetSteamRoute()}:gid(\\d+)`,
      };
      function J(e) {
        return s.createElement(
          o.dO,
          null,
          s.createElement(o.qh, {
            path: W.MeetSteamAttendance(),
            render: (e) => s.createElement(U, { ...e }),
          }),
          s.createElement(o.qh, {
            path: W.MeetSteamEvent(),
            render: (e) => s.createElement(I, { ...e }),
          }),
          s.createElement(o.qh, null, s.createElement($.a, null)),
        );
      }
    },
  },
]);

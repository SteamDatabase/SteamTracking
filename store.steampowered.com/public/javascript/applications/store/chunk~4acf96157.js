/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1979],
  {
    43997: (e) => {
      e.exports = {
        Container: "discussionwidget_Container_3BVe_",
        VoteContainer: "discussionwidget_VoteContainer_1uhQY",
        DiscussContainer: "discussionwidget_DiscussContainer_3tXYJ",
        ShareContainer: "discussionwidget_ShareContainer_cLK_F",
        InnerContainer: "discussionwidget_InnerContainer_3kQsD",
        DiscussionButton: "discussionwidget_DiscussionButton_wnKan",
        DiscussIcon: "discussionwidget_DiscussIcon_3-isH",
        linkField: "discussionwidget_linkField_1mRpV",
        ShareButtonContainer: "discussionwidget_ShareButtonContainer_3tMDZ",
        LinkInputLabel: "discussionwidget_LinkInputLabel_Gaizo",
        LinkButton: "discussionwidget_LinkButton_q5-pg",
        ShareSteamBtn: "discussionwidget_ShareSteamBtn_3Gc7y",
        ClipboardText: "discussionwidget_ClipboardText_3iQp-",
        LinkInput: "discussionwidget_LinkInput_2IeAw",
        ShareIcon: "discussionwidget_ShareIcon_1kFSv",
        ClipboardIcon: "discussionwidget_ClipboardIcon_sEXEi",
        SteamIcon: "discussionwidget_SteamIcon_3ZAOL",
        share_controls_ctn: "discussionwidget_share_controls_ctn_1PRQm",
        ShareLanguagePicker: "discussionwidget_ShareLanguagePicker_c-WS8",
        LanguageLabel: "discussionwidget_LanguageLabel_GHNBo",
        ShareBtn: "discussionwidget_ShareBtn_1qDAn",
        VoteCount: "discussionwidget_VoteCount_2dVe4",
        DiscussionCount: "discussionwidget_DiscussionCount_1GFRK",
        DiscussionButtonText: "discussionwidget_DiscussionButtonText_1qE1y",
        VoteDownIcon: "discussionwidget_VoteDownIcon_3QPkc",
        VoteDownSelectedIcon: "discussionwidget_VoteDownSelectedIcon_3SLkg",
        VoteUpIcon: "discussionwidget_VoteUpIcon_vRT1W",
        VoteUpSelectedIcon: "discussionwidget_VoteUpSelectedIcon_8WczG",
        VoteUpStaticIcon: "discussionwidget_VoteUpStaticIcon_1g-En",
        VoteButtonSelected: "discussionwidget_VoteButtonSelected_2c_5V",
      };
    },
    72775: (e) => {
      e.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    52002: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => d, R: () => c });
      var a = n(33940),
        i = n(50265),
        s = (n(46132), n(84770), n(42770), n(47165)),
        o = (n(91656), n(85651)),
        r = n(10412);
      class c {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map());
        }
        static GetBBCodeParam(e, t, n = "") {
          const a = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return a ? a[1] : n;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            n = new Array();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const i = a[1],
              o = a[2],
              r = c.GetBBCodeParam(i, "steamid"),
              d = {
                steamID: r ? new s.K(r) : void 0,
                name: c.GetBBCodeParam(i, "name"),
                title: c.GetBBCodeParam(i, "title"),
                company: c.GetBBCodeParam(i, "company"),
                photo: c.GetBBCodeParam(i, "photo"),
                bio: o,
              };
            n.push(d);
          }
          return n;
        }
        static ParseEventModelPresenters(e, t) {
          const n = e.GetDescriptionWithFallback(t);
          return c.ParseCalendarEventPresentersFromText(n);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            n = new Set();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const i = a[1];
            n.add(Number(i));
          }
          return n;
        }
        static ParseEventModelAppReferences(e, t) {
          var n;
          const a = e.GetDescriptionWithFallback(t),
            i = c.ParseEventAppReferencesFromText(a);
          if (
            null === (n = e.jsondata) || void 0 === n
              ? void 0
              : n.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) i.add(t);
          return i;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const t = o.JW.GetTimeNowWithOverride(),
              n = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of n.rgCalendarItems)
              r.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const a = n.rgCalendarItems.map((e) =>
                r.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  s.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              i = yield Promise.all(a),
              c = new Map();
            for (const e of i)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  c.has(t) ? c.get(t).push(e) : c.set(t, [e]);
            return c;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const n = this.m_mapBroadcasterSteamIDToEvents.get(e),
            a = n ? n.length : 0;
          if ((t ? t.length : 0) != a) return !1;
          for (let e = 0; e < a; e++) if (n[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let n = new Map();
          for (const a of e) {
            if (!a) continue;
            const e = c.ParseEventModelPresenters(a, t);
            for (const t of e)
              t.steamID && n.set(t.steamID.ConvertTo64BitString(), t);
          }
          return n;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((n, a) => {
            e.has(a) || t.push(a);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const n = new Set();
          for (const a of e) {
            c.ParseEventModelAppReferences(a, t).forEach((e) => n.add(e));
          }
          return Array.from(n);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, n) => {
            if (this.IsBroadcasterAlreadyBound(n, e)) return;
            const a = {
              m_mapPresenters: c.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: c.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(n, a),
              this.m_mapBroadcasterSteamIDToEvents.set(
                n,
                e.map((e) => e.GID)
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const n = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(n),
              this.UpdateCachedDataFromEvents(n, t);
          });
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, a.gn)([i.LO], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const d = new c();
    },
    93883: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => g });
      var a = n(33940),
        i = n(52868),
        s = n.n(i),
        o = n(50265),
        r = n(25125),
        c = n(89526),
        d = (n(42770), n(63403), n(26464)),
        u = n(85246),
        l = n(4306),
        w = n(32765);
      class _ {
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
        clone() {
          const e = new _();
          return (
            (e.giveaway_id = this.giveaway_id),
            (e.seconds_until_drawing = this.seconds_until_drawing),
            (e.rtime_start = this.rtime_start),
            (e.rtime_end = this.rtime_end),
            (e.closed = this.closed),
            (e.winner_count = this.winner_count),
            e
          );
        }
      }
      (0, a.gn)([o.LO], _.prototype, "giveaway_id", void 0),
        (0, a.gn)([o.LO], _.prototype, "seconds_until_drawing", void 0),
        (0, a.gn)([o.LO], _.prototype, "rtime_start", void 0),
        (0, a.gn)([o.LO], _.prototype, "rtime_end", void 0),
        (0, a.gn)([o.LO], _.prototype, "closed", void 0),
        (0, a.gn)([o.LO], _.prototype, "winner_count", void 0);
      class D {
        constructor() {
          (this.m_mapGiveawayIDToNextDrawInfo = new Map()),
            (this.m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (this.m_mapNextDrawChangeCallback = new Map());
        }
        GetKey(e, t) {
          return e + "_" + t;
        }
        GetInfoByInstance(e, t) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, t)
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new u.pB()),
            this.m_mapNextDrawChangeCallback.get(e)
          );
        }
        CopyToGiveaway(e, t) {
          t.closed != e.closed && (t.closed = e.closed),
            t.giveaway_id != e.giveaway_id && (t.giveaway_id = e.giveaway_id),
            t.rtime_start != e.rtime_start && (t.rtime_start = e.rtime_start),
            t.rtime_end != e.rtime_end && (t.rtime_end = e.rtime_end),
            t.winner_count != e.winner_count &&
              (t.winner_count = e.winner_count),
            t.seconds_until_drawing != e.seconds_until_drawing &&
              (t.seconds_until_drawing = e.seconds_until_drawing);
        }
        ReloadGiveaway(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (!e) return null;
            let n = w.De.STORE_BASE_URL + "prizes/nextdraw/" + e,
              a = null,
              i = { origin: self.origin };
            return (
              (a = yield s().get(n, { params: i })),
              (0, o.z)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(e, new _()),
                  this.CopyToGiveaway(
                    a.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(e)
                  ),
                  void 0 !== t)
                ) {
                  const n = this.GetKey(e, t);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(n) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      n,
                      new _()
                    ),
                    this.CopyToGiveaway(
                      a.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n)
                    );
                }
              }),
              this.GetNextDrawChangeCallback(e).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(e)
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(e)
            );
          });
        }
        static Get() {
          return (
            D.s_Singleton ||
              ((D.s_Singleton = new D()),
              D.s_Singleton.Init(),
              "dev" == w.De.WEB_UNIVERSE &&
                (window.g_GiveawayStore = D.s_Singleton)),
            D.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, w.kQ)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new _();
              this.CopyToGiveaway(e, t),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, a.gn)([o.LO], D.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, a.gn)([o.aD], D.prototype, "CopyToGiveaway", null);
      class m {
        constructor() {
          (this.m_myInstanceNumber = 0),
            (this.m_myInstanceNumber = m.s_GlobalInstance),
            (m.s_GlobalInstance += 1);
        }
        ClearRefreshInterval() {
          this.m_intervalID &&
            (window.clearInterval(this.m_intervalID),
            (this.m_intervalID = void 0));
        }
        ClearCountDown() {
          this.m_intervalCountDownID &&
            (window.clearInterval(this.m_intervalCountDownID),
            (this.m_intervalCountDownID = void 0));
        }
        SetupRefreshDataInterval(e, t) {
          if ((this.ClearRefreshInterval(), !e.closed)) {
            let n =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(t, n);
          }
        }
        SetupCountDown(e, t) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(t, 1e3));
        }
      }
      function I(e, t) {
        const n = D.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
        (n.seconds_until_drawing -= 1),
          0 == n.seconds_until_drawing && t.ClearCountDown();
      }
      function g(e) {
        const [t] = (0, c.useState)(new m()),
          n = (0, l.NW)();
        (0, c.useEffect)(
          () => (
            D.Get()
              .ReloadGiveaway(e, t.m_myInstanceNumber)
              .then((a) => {
                t.SetupRefreshDataInterval(a, () =>
                  (function (e, t) {
                    const n = D.Get().GetInfoByInstance(
                      e,
                      t.m_myInstanceNumber
                    );
                    n &&
                      n.BIsValid() &&
                      n.seconds_until_drawing <= 0 &&
                      !n.closed &&
                      (t.ClearCountDown(),
                      D.Get()
                        .ReloadGiveaway(e, t.m_myInstanceNumber)
                        .then((n) => {
                          t.SetupCountDown(n.seconds_until_drawing, () =>
                            I(e, t)
                          );
                        }));
                  })(e, t)
                ),
                  t.SetupCountDown(a.seconds_until_drawing, () => I(e, t)),
                  n();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, n]
        );
        const a = D.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
          [i, s, o] = (0, r.SZ)(() => [
            null == a ? void 0 : a.winner_count,
            null == a ? void 0 : a.closed,
            null == a ? void 0 : a.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !a || null == a.giveaway_id || !a.BStarted() || void 0 === i,
          winner_count: i,
          closed: s,
          seconds_until_drawing: o,
        };
      }
      (m.s_GlobalInstance = 0),
        (0, a.gn)([d.a], m.prototype, "ClearRefreshInterval", null),
        (0, a.gn)([d.a], m.prototype, "ClearCountDown", null),
        (0, a.gn)([d.a], m.prototype, "SetupRefreshDataInterval", null),
        (0, a.gn)([d.a], m.prototype, "SetupCountDown", null);
    },
    55330: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => w });
      var a = n(89526),
        i = n(46132),
        s = n(68818),
        o = n(13345),
        r = n(19304),
        c = n(14826),
        d = n(207),
        u = n(32765),
        l = n(72775);
      function w(e) {
        const { gidEvent: t } = e,
          n = (0, s.XC)(t),
          [w, _] = (0, a.useMemo)(() => {
            var e, t, a, s;
            if (
              (null ===
                (t =
                  null === (e = null == n ? void 0 : n.jsondata) || void 0 === e
                    ? void 0
                    : e.localized_sale_product_banner) || void 0 === t
                ? void 0
                : t.length) > 0 &&
              (null ===
                (s =
                  null === (a = null == n ? void 0 : n.jsondata) || void 0 === a
                    ? void 0
                    : a.localized_sale_product_mobile_banner) || void 0 === s
                ? void 0
                : s.length) > 0
            ) {
              const e = (0, i.jM)(u.De.LANGUAGE),
                t = c.LZ.GetWithFallback(
                  n.jsondata.localized_sale_product_banner,
                  e
                ),
                a = c.LZ.GetWithFallback(
                  n.jsondata.localized_sale_product_mobile_banner,
                  e
                );
              if (
                (null == t ? void 0 : t.length) > 0 &&
                (null == a ? void 0 : a.length) > 0
              ) {
                const e = n.clanSteamID.GetAccountID();
                return [`${(0, o.OL)()}${e}/${t}`, `${(0, o.OL)()}${e}/${a}`];
              }
            }
            return [null, null];
          }, [n]);
        return (null == w ? void 0 : w.length) > 0 &&
          (null == _ ? void 0 : _.length) > 0
          ? a.createElement(
              "a",
              { href: (0, d.OL)(n.GetSaleURL()), className: l.Link },
              a.createElement("img", {
                src: w,
                className: (0, r.Z)(l.Banner, l.Big),
              }),
              a.createElement("img", {
                src: _,
                className: (0, r.Z)(l.Banner, l.Mobile),
              })
            )
          : null;
      }
    },
    37865: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      const a =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjE0MDlweCIgdmlld0JveD0iMCAxODAxLjUgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMTgwMS41IDE0MDAgMTQwOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBpZD0iaWNvbm1vbnN0ci1saW5rLTFfMV8iIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNjIuMzUzLDIzMTAuNTg4YzE0OC4yMzUtMTQ4LjIzNSwzODcuMDYtMTQ4LjIzNSw1MjcuMDYsMA0KCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NA0KCWMtNDEuMTc3LDguMjM1LTc0LjExOCwyNC43MDYtOTguODIzLDQ5LjQxMWwtMjQ3LjA1OSwyNDcuMDZjLTc0LjExOCw3NC4xMTctNzQuMTE4LDE5Ny42NDYsMCwyODANCgljNzQuMTE4LDc0LjExNywxOTcuNjQ3LDc0LjExNywyODAsMGwwLDBsNzQuMTE4LTc0LjExOGM3NC4xMTcsMjQuNzA2LDE0OC4yMzUsNDEuMTc3LDIyMi4zNTMsMzIuOTQxbC0xNzIuOTQsMTcyLjk0MQ0KCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4eg0KCSBNNzU3LjY0NiwxOTA3LjA1OUw1OTIuOTQxLDIwODBjNzQuMTE3LTguMjM1LDE0OC4yMzUsOC4yMzUsMjE0LjExNywzMi45NDFsNzQuMTE4LTc0LjExOGM3NC4xMTctNzQuMTE3LDE5Ny42NDYtNzQuMTE3LDI4MCwwDQoJYzgyLjM1Myw3NC4xMTgsNzQuMTE3LDE5Ny42NDcsMCwyODBsLTI1NS4yOTQsMjQ3LjA2Yy03NC4xMTgsNzQuMTE3LTE5Ny42NDcsNzQuMTE3LTI4MCwwDQoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0Nw0KCWMxNDguMjM1LDE0OC4yMzUsMzg3LjA1OSwxNDguMjM1LDUyNy4wNiwwbDAsMGwyNDcuMDU5LTI0Ny4wNmMxNDguMjM1LTE0OC4yMzUsMTQ4LjIzNS0zODcuMDU5LDAtNTI3LjA1OQ0KCVM5MDUuODgzLDE3NjcuMDU5LDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OUw3NTcuNjQ2LDE5MDcuMDU5eiIvPg0KPC9zdmc+DQo=";
    },
  },
]);

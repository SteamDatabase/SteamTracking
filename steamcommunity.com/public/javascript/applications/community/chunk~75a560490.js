/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [648],
  {
    77723: (e) => {
      e.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    29399: (e) => {
      e.exports = {
        GraphicalAssetsTabs: "tabbar_GraphicalAssetsTabs_36r8g",
        GraphicalAssetsTab: "tabbar_GraphicalAssetsTab_K1_Tp",
        Active: "tabbar_Active_37f6M",
        GraphicalAssetStatus: "tabbar_GraphicalAssetStatus_ojMj8",
        VOWarning: "tabbar_VOWarning_21XR-",
        StatusSuccess: "tabbar_StatusSuccess_1HWSe",
        StatusDanger: "tabbar_StatusDanger_2jgbN",
        StatusCaution: "tabbar_StatusCaution_31Lxu",
      };
    },
    81503: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => l, R: () => c });
      var s = a(70655),
        n = a(22188),
        r = (a(26149), a(49186), a(92398), a(3389)),
        o = (a(35118), a(5525)),
        i = a(7200);
      class c {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map());
        }
        static GetBBCodeParam(e, t, a = "") {
          const s = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return s ? s[1] : a;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const s = t.exec(e);
            if (null === s) break;
            const n = s[1],
              o = s[2],
              i = c.GetBBCodeParam(n, "steamid"),
              l = {
                steamID: i ? new r.K(i) : void 0,
                name: c.GetBBCodeParam(n, "name"),
                title: c.GetBBCodeParam(n, "title"),
                company: c.GetBBCodeParam(n, "company"),
                photo: c.GetBBCodeParam(n, "photo"),
                bio: o,
              };
            a.push(l);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return c.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const s = t.exec(e);
            if (null === s) break;
            const n = s[1];
            a.add(Number(n));
          }
          return a;
        }
        static ParseEventModelAppReferences(e, t) {
          var a;
          const s = e.GetDescriptionWithFallback(t),
            n = c.ParseEventAppReferencesFromText(s);
          if (
            null === (a = e.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) n.add(t);
          return n;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = o.JW.GetTimeNowWithOverride(),
              a = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of a.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const s = a.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  r.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              n = yield Promise.all(s),
              c = new Map();
            for (const e of n)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  c.has(t) ? c.get(t).push(e) : c.set(t, [e]);
            return c;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(e),
            s = a ? a.length : 0;
          if ((t ? t.length : 0) != s) return !1;
          for (let e = 0; e < s; e++) if (a[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let a = new Map();
          for (const s of e) {
            if (!s) continue;
            const e = c.ParseEventModelPresenters(s, t);
            for (const t of e)
              t.steamID && a.set(t.steamID.ConvertTo64BitString(), t);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, s) => {
            e.has(s) || t.push(s);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const a = new Set();
          for (const s of e) {
            c.ParseEventModelAppReferences(s, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const s = {
              m_mapPresenters: c.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: c.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, s),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID)
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const a = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(a),
              this.UpdateCachedDataFromEvents(a, t);
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
      (0, s.gn)([n.LO], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const l = new c();
    },
    93612: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => p });
      var s = a(67294),
        n = a(26149),
        r = a(50153),
        o = a(7573),
        i = a(41311),
        c = a(35092),
        l = a(90666),
        d = a(77723);
      function p(e) {
        const { gidEvent: t } = e,
          a = (0, r.XC)(t),
          [p, m] = (0, s.useMemo)(() => {
            var e, t, s, r;
            if (
              (null ===
                (t =
                  null === (e = null == a ? void 0 : a.jsondata) || void 0 === e
                    ? void 0
                    : e.localized_sale_product_banner) || void 0 === t
                ? void 0
                : t.length) > 0 &&
              (null ===
                (r =
                  null === (s = null == a ? void 0 : a.jsondata) || void 0 === s
                    ? void 0
                    : s.localized_sale_product_mobile_banner) || void 0 === r
                ? void 0
                : r.length) > 0
            ) {
              const e = (0, n.jM)(l.De.LANGUAGE),
                t = i.LZ.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e
                ),
                s = i.LZ.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e
                ),
                r = a.clanSteamID.GetAccountID();
              return [
                l.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${t}`,
                l.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${r}/${s}`,
              ];
            }
            return [null, null];
          }, [a]);
        return p && m
          ? s.createElement(
              "a",
              { href: (0, c.OL)(a.GetSaleURL()), className: d.Link },
              s.createElement("img", {
                src: p,
                className: (0, o.Z)(d.Banner, d.Big),
              }),
              s.createElement("img", {
                src: m,
                className: (0, o.Z)(d.Banner, d.Mobile),
              })
            )
          : null;
      }
    },
    12538: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => u });
      var s = a(67294),
        n = a(78587),
        r = a(7573),
        o = a(41311),
        i = a(31933),
        c = a(29399),
        l = a.n(c),
        d = a(28268),
        p = a(72258);
      class m extends s.Component {
        constructor() {
          super(...arguments), (this.state = { activeTab: "" });
        }
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: (0, i.ks)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(e) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== e.location.key &&
            this.setState({ activeTab: (0, i.ks)(this.props.location, "tab") });
        }
        OnTabClick(e) {
          this.setState({ activeTab: e.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              (0, i.i9)(this.props.history, "tab", e.key),
            e.onClick && e.onClick(e);
        }
        render() {
          const e =
            this.props.tabs.find((e) => e.key === this.state.activeTab) ||
            this.props.tabs[0];
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: l().GraphicalAssetsTabs },
              this.props.tabs.map((t) => {
                if (!t.hidden) {
                  let a = "";
                  return (
                    "success" === t.statusType
                      ? (a = l().StatusSuccess)
                      : "danger" === t.statusType
                      ? (a = l().StatusDanger)
                      : "caution" === t.statusType && (a = l().StatusCaution),
                    s.createElement(
                      p.M2,
                      {
                        key: t.key,
                        condition: Boolean(t.statusToolTip),
                        wrap: (e) =>
                          s.createElement(
                            d.HP,
                            { toolTipContent: t.statusToolTip || t.tooltip },
                            e
                          ),
                      },
                      s.createElement(
                        "div",
                        {
                          key: t.key,
                          className: `${l().GraphicalAssetsTab} ${
                            t.key === e.key ? l().Active : ""
                          }`,
                          onClick: () => this.OnTabClick(t),
                        },
                        Boolean(t.vo_warning) &&
                          s.createElement(
                            d.HP,
                            { toolTipContent: t.vo_warning },
                            s.createElement(
                              "div",
                              { className: l().VOWarning },
                              (0, o.Xx)("#EventEditor_VOWarning")
                            )
                          ),
                        Boolean(t.status) &&
                          s.createElement(
                            "div",
                            {
                              className: (0, r.Z)(l().GraphicalAssetStatus, a),
                            },
                            t.status
                          ),
                        t.name
                      )
                    )
                  );
                }
                return null;
              })
            ),
            s.createElement("div", null, e && e.contents)
          );
        }
      }
      const u = (0, n.EN)(m);
    },
    11539: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => r });
      var s = a(67294),
        n = a(80533);
      const r = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          r = s.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === n.h.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a]
          );
        return s.createElement(
          n.h,
          Object.assign({}, e, { onPositionChange: r })
        );
      };
    },
  },
]);

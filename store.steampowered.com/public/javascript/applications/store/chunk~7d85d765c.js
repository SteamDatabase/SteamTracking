/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [14867],
    {
      6600: (lt, Y, l) => {
        l.d(Y, { td: () => x });
        var M = l(14947),
          F = l(3166),
          d = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          N = (k, o, p, f) => {
            for (
              var y = f > 1 ? void 0 : f ? w(o, p) : o, D = k.length - 1, B;
              D >= 0;
              D--
            )
              (B = k[D]) && (y = (f ? B(o, p, y) : B(y)) || y);
            return f && y && d(o, p, y), y;
          };
        const nt = F.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          q = F.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class E {
          bValid = !1;
          stream = { 0: "#Broadcast_EnglishMain" };
          name = "";
          appName = "";
          appID = 0;
          link = "";
          linkName = "";
          tabIcon = "";
          offlineImage = "";
          gidEvent = "";
          constructor(o) {
            (0, M.Gn)(this), this.init(o);
          }
          init(o) {
            (this.bValid = o.bValid),
              (this.stream = o.stream),
              (this.name = o.name),
              (this.appName = o.appName ?? ""),
              (this.appID = o.appID),
              (this.link = o.link),
              (this.linkName = o.linkName),
              (this.tabIcon = o.tabIcon ?? ""),
              (this.offlineImage = o.offlineImage),
              (this.gidEvent = o.gidEvent ?? "");
          }
        }
        N([M.sH], E.prototype, "bValid", 2),
          N([M.sH], E.prototype, "stream", 2),
          N([M.sH], E.prototype, "name", 2),
          N([M.sH], E.prototype, "appName", 2),
          N([M.sH], E.prototype, "appID", 2),
          N([M.sH], E.prototype, "link", 2),
          N([M.sH], E.prototype, "linkName", 2),
          N([M.sH], E.prototype, "tabIcon", 2),
          N([M.sH], E.prototype, "offlineImage", 2),
          N([M.sH], E.prototype, "gidEvent", 2);
        let x = new E({
          bValid: !1,
          stream: { 0: "#Broadcast_EnglishMain" },
          name: "",
          appName: "",
          appID: 0,
          link: "",
          linkName: "",
          tabIcon: "",
          offlineImage: "",
        });
        function Q(k) {
          (k == "76561198888084799" || k == "76561198910244427") &&
            x.init({
              bValid: !0,
              stream: {
                "76561198888084799": "#Broadcast_Stream1",
                "76561198910244427": "#Broadcast_Stream2",
              },
              name: "Cologne Major 2026",
              appID: 730,
              link: "https://store.steampowered.com/app/730/CounterStrike_2/",
              linkName: "Counter-Strike 2 on Steam",
              tabIcon:
                Config.CHAT_BASE_URL +
                "public/images/broadcast/cs2_major2026_cologne_icon.png",
              offlineImage: "public/images/broadcast/cs2_major2026_cologne.png",
            }),
            k == "76561197960266962" &&
              x.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: q,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (lt, Y, l) => {
        l.d(Y, { J8: () => d, X8: () => F });
        var M = ((w) => (
            (w[(w.Hover = 0)] = "Hover"),
            (w[(w.ClickPopup = 1)] = "ClickPopup"),
            (w[(w.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            w
          ))(M || {}),
          F = ((w) => (
            (w[(w.Chat = 0)] = "Chat"),
            (w[(w.Notification = 1)] = "Notification"),
            (w[(w.Error = 2)] = "Error"),
            w
          ))(F || {});
        class d {}
      },
      25317: (lt, Y, l) => {
        l.d(Y, {
          M5: () => ot,
          MU: () => St,
          MX: () => yt,
          Rt: () => Z,
          U7: () => ut,
          fn: () => j,
          j: () => dt,
        });
        var M = l(10142),
          F = l(41735),
          d = l.n(F),
          w = l(14947),
          N = l(72604),
          nt = l(76559),
          q = l(61639),
          E = l(22950),
          x = l(7582),
          Q = l(28462),
          k = l(71742),
          o = l(34592),
          p = l(3166),
          f = l(34032),
          y = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          B = (V, r, n, h) => {
            for (
              var c = h > 1 ? void 0 : h ? D(r, n) : r, I = V.length - 1, g;
              I >= 0;
              I--
            )
              (g = V[I]) && (c = (h ? g(r, n, c) : g(c)) || c);
            return h && c && y(r, n, c), c;
          };
        let at = !1;
        function j(V) {
          return !!(V && V.thumbnail_http_address);
        }
        function ot(V, r) {
          if (r || V) {
            const n = r || V;
            return !!(n && dt.Get().BIsAppStreaming(n));
          }
          return !1;
        }
        const K = class ct {
          constructor() {
            (0, w.Gn)(this);
          }
          static s_GlobalStore;
          m_inFlightRequests = new Map();
          m_lookupKeyToEmbedStreamDef = new Map();
          m_lookupStreams = new Map();
          m_playReadyStream = new Map();
          m_bMapHasStartedVideo = new Map();
          m_mapBroadcastChecked = new Map();
          m_pageChatStatus = "hide";
          m_streamChatStatus = "hide";
          m_bUserChatExpanded = void 0;
          m_bUserPreferenceHideBroadcastByDefault = void 0;
          m_bCollapsed = void 0;
          m_setStreamChangedListeners = new Set();
          m_bUseFakeData = !1;
          m_onLoadContextCall = new Map();
          BHasStreams(r) {
            const n = this.GetStreams(r);
            return !!(n && n.length > 0);
          }
          AddCallbackOnNewContext(r, n, h) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(r), {
              name: n,
              fnCallback: h,
            });
          }
          ClearCallbackOnNewContext(r) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(r),
              null,
            );
          }
          GetPlayReadyStream(r) {
            let n = this.GetStreamsLookupKeyFromDef(r);
            return this.m_playReadyStream.get(n);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(r) {
            this.m_bCollapsed != r && (this.m_bCollapsed = r);
          }
          GetConcurrentStreams(r) {
            const n = this.GetStreams(r);
            return n ? n.filter((h) => j(h)).length : 0;
          }
          GetChatVisibility() {
            return this.m_pageChatStatus === "remove" ||
              this.m_streamChatStatus === "remove"
              ? "remove"
              : this.m_bUserChatExpanded !== void 0
                ? this.m_bUserChatExpanded
                  ? "show"
                  : "hide"
                : this.m_pageChatStatus === "show"
                  ? "show"
                  : this.m_pageChatStatus === "hide" ||
                      this.m_streamChatStatus === "hide"
                    ? "hide"
                    : "show";
          }
          ToggleChatVisibility() {
            const r = this.GetChatVisibility();
            r !== "remove" && (this.m_bUserChatExpanded = r === "hide");
          }
          DebugDumpContextAndAvailableContext(r) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(r),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((n, h) => {
                console.log(h, n.length);
              });
          }
          GetStreams(r) {
            const n = this.GetStreamsLookupKeyFromDef(r);
            return this.m_lookupStreams.get(n);
          }
          GetBroadcastURL(r) {
            let n;
            return (
              r.steamid
                ? (n = new nt.b(r.steamid))
                : (n = nt.b.InitFromAccountID(r.accountid)),
              p.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                n.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(r) {
            let n = !1;
            return (
              this.m_lookupStreams.forEach((h) => {
                n ||
                  (n =
                    !!h &&
                    h.some(
                      (c) =>
                        E.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID === r,
                    ));
              }),
              n
            );
          }
          GetStreamsForAppID(r) {
            const n = new Array();
            return (
              this.m_lookupStreams.forEach((h) => {
                h?.forEach((c) => {
                  E.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID === r &&
                    n.push(c);
                });
              }),
              n
            );
          }
          AddStreamChangedListener(r) {
            this.m_setStreamChangedListeners.add(r);
          }
          RemoveStreamChangedListener(r) {
            this.m_setStreamChangedListeners.delete(r);
          }
          async LoadBIsEmbeddedBroadcastHidden(r) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let n = (0, p.Tc)("broadcastuser", "application_config");
              if (!n)
                try {
                  let h =
                    p.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  n = (await d().get(h, { params: {}, cancelToken: r.token }))
                    .data;
                } catch (h) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, o.H)(h).strErrorMsg,
                  ),
                    (n = { bHideStoreBroadcast: !1 });
                }
              (0, w.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  n.bHideStoreBroadcast),
                  (this.m_bCollapsed = n.bHideStoreBroadcast);
              });
            }
            return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
          }
          async SetupEmbeddableVOD(r, n) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              (0, k.wT)(
                !!r.nAppIDVOD,
                "SetupEmbeddableVOD requires a VOD appid",
              ),
              await M.A.Get().QueueAppRequest(r.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const h = M.A.Get().GetApp(r.nAppIDVOD),
              c = new f.TT();
            (c.accountid = 0),
              (c.nAppIDVOD = r.nAppIDVOD),
              (c.default_selection_priority = f.mY.k_ePrimary),
              (c.current_selection_priority = f.mY.k_ePrimary),
              (c.thumbnail_http_address = h?.GetAssets()?.GetHeaderURL() || ""),
              (c.title = h?.GetName() || "");
            const I = this.GetStreams(r);
            if (
              ((0, k.wT)(
                !!I,
                "SetupEmbeddableVOD called before the streams loaded",
                r.nAppIDVOD,
              ),
              I.unshift(c),
              n)
            ) {
              const g = this.GetStreamsLookupKeyFromDef(r);
              this.m_playReadyStream.set(g, c);
            }
          }
          async HintLoadEmbeddablePreviewStreams(r) {
            let n = {
              eventid: r.event ? r.event.GID : void 0,
              previewAccounts:
                r.bIsPreview && r.accountIDs
                  ? r.accountIDs.slice().sort().join(",")
                  : void 0,
            };
            try {
              const h = await d().get(
                p.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                { params: n },
              );
              return this.HandleHintLoadBroadcastResponse(r, h.data);
            } catch (h) {
              let c = (0, o.H)(h);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  c.strErrorMsg,
                c,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(r) {
            let n = this.MapEmbeddableStreamToRequest(r),
              h = this.GetStreamsLookupKeyFromParam(n),
              c = this.m_inFlightRequests.get(h);
            return (
              c ||
                (this.m_lookupKeyToEmbedStreamDef.set(h, r),
                (c = this.InternalHintLoadEmbeddableStreams(r, n)),
                this.m_inFlightRequests.set(h, c)),
              c
            );
          }
          async InternalHintLoadEmbeddableStreams(r, n) {
            let h = (0, p.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, f.h7)(h)) return this.HandleHintLoadBroadcastResponse(r, h);
            try {
              const c = await d().get(
                p.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                { params: n },
              );
              return this.HandleHintLoadBroadcastResponse(r, c.data);
            } catch (c) {
              let I = (0, o.H)(c);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + I.strErrorMsg,
                I,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(r, n) {
            (this.m_bUseFakeData = !1),
              r.bIsPreview &&
                (n?.filtered?.length > 0
                  ? ((0, k.wT)(
                      !!r.event,
                      "Broadcast preview requires an event",
                    ),
                    this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      r.event,
                      n.filtered,
                    ))
                  : ((n = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              n.broadcast_chat_visibility &&
                (this.m_pageChatStatus = n.broadcast_chat_visibility);
            const h = new Array();
            (0, w.h5)(() => {
              n.filtered.forEach((g) => {
                if (!g.steamid) {
                  const A = nt.b.InitFromAccountID(g.accountid);
                  g.steamid = A.ConvertTo64BitString();
                }
                const tt = E.es.GetOrCreateBroadcastInfo(g.steamid),
                  v = g.appid ? Number(g.appid) : E.fO;
                (tt.m_nAppID = v),
                  (tt.m_strAppId = "" + v),
                  g.current_selection_priority === void 0 &&
                    (g.current_selection_priority =
                      g.default_selection_priority),
                  v != E.fO && h.push(v);
              });
            });
            const c = this.GetStreamsLookupKeyFromDef(r);
            if (
              (this.m_lookupStreams.set(c, n.filtered),
              this.m_onLoadContextCall.has(c))
            ) {
              const g = this.m_onLoadContextCall.get(c);
              g && g.fnCallback();
            }
            const I = this.GetStreams(r) ?? [];
            return await this.AutoStartVideoStream(r, I), I;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(r, n) {
            const h = Array.from(r.jsondata.broadcast_whitelist ?? []),
              c = Array.from(r.jsondata.broadcast_priority ?? []),
              I = new Map();
            for (let g = 0; g < h.length && !(g >= c.length); g++)
              I.set(h[g], (0, f.PH)(c[g]));
            n.forEach((g) => {
              const tt = Number(g.accountid);
              I.has(tt) && (g.current_selection_priority = I.get(tt));
            });
          }
          async AutoStartVideoStream(r, n) {
            let h = this.GetStreamsLookupKeyFromDef(r);
            if (this.m_bMapHasStartedVideo.get(h)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(h)) {
                const c = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: f.mY.k_eGeneral,
                  current_selection_priority: f.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(h, c);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(r, n);
          }
          async PlayFromAvailableStreams(r, n, h = !1) {
            const c = new Set();
            for (;;) {
              const I = n.filter((v) => !c.has(v) && (!h || !v.nAppIDVOD)),
                g = this.GetAutoStartStream(I);
              if (!g) return null;
              if (await this.AttemptToPlayStream(r, g)) return g;
              c.add(g);
            }
          }
          async AttemptToPlayStream(r, n) {
            let h = this.GetStreamsLookupKeyFromDef(r);
            const c = n.accountid ?? 0;
            if (
              (this.m_bMapHasStartedVideo.set(h, !0),
              this.m_mapBroadcastChecked.has(c) ||
                this.m_mapBroadcastChecked.set(
                  c,
                  this.InternalAttemptToPlayStream(r, n),
                ),
              n.nAppIDVOD)
            )
              this.m_playReadyStream.set(h, n);
            else {
              const I = await this.m_mapBroadcastChecked.get(c);
              if (I?.success == N.R) {
                (n.steamid = I.steamid),
                  this.m_playReadyStream.set(h, n),
                  this.GetConcurrentStreams(r) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus =
                        n.broadcast_chat_visibility ?? null),
                  this.m_setStreamChangedListeners.forEach((tt) => tt(n));
                const g = E.es.GetOrCreateBroadcastInfo(n.steamid).m_nAppID;
                ut(g, q.Mc.iy, n.snr);
              } else return null;
            }
            return n;
          }
          async InternalAttemptToPlayStream(r, n) {
            let h = this.GetStreamsLookupKeyFromDef(r);
            try {
              const c = p.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let I = {
                broadcastaccountid: n.accountid,
                viewer_token: E.es.GetViewerToken(),
                origin: self.origin,
              };
              return (await d().get(c, { params: I })).data;
            } catch (c) {
              let I = (0, o.H)(c);
              console.error(
                "Broadcast.AttemptToPlayStream: " + I.strErrorMsg,
                I,
              );
            }
            return null;
          }
          GetAutoStartStream(r) {
            if (!r) return null;
            const n = r.filter((g) => j(g)),
              h = n.reduce((g, tt) => Math.max(g, Z(tt)), 0),
              c = n.filter((g) => Z(g) === h);
            if (c.length === 0) return null;
            const I = Math.floor(Math.random() * c.length);
            return c[I];
          }
          MapEmbeddableStreamToRequest(r) {
            return {
              appid: r.appid,
              promotionName: r.bIsPreview ? "preview" : r.promotionName,
              clanid: r.clanid
                ? r.clanid
                : r.event
                  ? r.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: r.listid,
              subid: r.subid,
              bundleid: r.bundleid,
              eventid: r.event ? r.event.GID : void 0,
              previewAccounts:
                r.bIsPreview && r.accountIDs
                  ? r.accountIDs.slice().sort().join(",")
                  : void 0,
              test: at,
              cc: p.TS.COUNTRY,
              l: p.TS.LANGUAGE,
              hubtype: r.event?.GetContentHubType(),
              hubcategory: r.event?.GetContentHubCategory(),
              hubtagid: r.event?.GetContentHubTag(),
              tabuniqueid: r.tabuniqueid,
              tabfilter: r.tabfilter,
              rt_now_override_test: x.HD.BHasTimeOverride()
                ? x.HD.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(r) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(r),
            );
          }
          GetStreamsLookupKeyFromParam(r) {
            return JSON.stringify(r);
          }
          static Get() {
            return (
              ct.s_GlobalStore ||
                ((ct.s_GlobalStore = new ct()), ct.s_GlobalStore.Init()),
              ct.s_GlobalStore
            );
          }
          Init() {}
        };
        B([w.sH], K.prototype, "m_lookupStreams", 2),
          B([w.sH], K.prototype, "m_playReadyStream", 2),
          B([w.sH], K.prototype, "m_pageChatStatus", 2),
          B([w.sH], K.prototype, "m_streamChatStatus", 2),
          B([w.sH], K.prototype, "m_bUserChatExpanded", 2),
          B([w.sH], K.prototype, "m_bUserPreferenceHideBroadcastByDefault", 2),
          B([w.sH], K.prototype, "m_bCollapsed", 2),
          B([w.XI], K.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          B([w.XI], K.prototype, "AttemptToPlayStream", 1);
        let dt = K;
        function Z(V) {
          return V.current_selection_priority || f.mY.k_eGeneral;
        }
        function St(V) {
          V.sort((r, n) =>
            Z(r) != Z(n)
              ? Z(n) - Z(r)
              : r.viewer_count != n.viewer_count
                ? (n.viewer_count ?? 0) - (r.viewer_count ?? 0)
                : (n.accountid ?? 0) - (r.accountid ?? 0),
          );
        }
        async function ut(V, r, n) {
          if (V > 0 && V != 7 && n) {
            let h = new URLSearchParams();
            h.append("page_action", "" + r),
              h.append("snr", n),
              d().post(
                p.TS.STORE_BASE_URL + "ajaxreportproductaction/" + V + "/",
                h,
              );
          }
        }
        const yt = new Q.T();
      },
      18614: (lt, Y, l) => {
        l.d(Y, { l: () => Q, m: () => x });
        var M = l(14947),
          F = l(76559),
          d = l(7582),
          w = l(77495),
          N = Object.defineProperty,
          nt = Object.getOwnPropertyDescriptor,
          q = (k, o, p, f) => {
            for (
              var y = f > 1 ? void 0 : f ? nt(o, p) : o, D = k.length - 1, B;
              D >= 0;
              D--
            )
              (B = k[D]) && (y = (f ? B(o, p, y) : B(y)) || y);
            return f && y && N(o, p, y), y;
          };
        const E = class et {
          constructor() {
            (0, M.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(o, p, f = "") {
            const D = new RegExp(`\\W${p}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(o);
            return D ? D[1] : f;
          }
          static ParseCalendarEventPresentersFromText(o) {
            const p =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              f = new Array();
            for (;;) {
              const y = p.exec(o);
              if (y === null) break;
              const D = y[1],
                B = y[2],
                at = et.GetBBCodeParam(D, "steamid"),
                j = {
                  steamID: at ? new F.b(at) : void 0,
                  name: et.GetBBCodeParam(D, "name"),
                  title: et.GetBBCodeParam(D, "title"),
                  company: et.GetBBCodeParam(D, "company"),
                  photo: et.GetBBCodeParam(D, "photo"),
                  bio: B,
                };
              f.push(j);
            }
            return f;
          }
          static ParseEventModelPresenters(o, p) {
            const f = o.GetDescriptionWithFallback(p) ?? "";
            return et.ParseCalendarEventPresentersFromText(f);
          }
          static ParseEventAppReferencesFromText(o) {
            const p = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              f = new Set();
            for (;;) {
              const y = p.exec(o);
              if (y === null) break;
              const D = y[1];
              f.add(Number(D));
            }
            return f;
          }
          static ParseEventModelAppReferences(o, p) {
            const f = o.GetDescriptionWithFallback(p) ?? "",
              y = et.ParseEventAppReferencesFromText(f);
            if (o.jsondata?.referenced_appids)
              for (const D of o.jsondata.referenced_appids) y.add(D);
            return y;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(o) {
            const p = d.HD.GetTimeNowWithOverride(),
              y = o.GetCalendarItemsInTimeRange(p - 3600, p);
            for (const j of y.rgCalendarItems)
              w.O3.QueueLoadPartnerEvent(j.clanid, j.unique_id);
            const D = y.rgCalendarItems.map((j) =>
                w.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  F.b.InitFromClanID(j.clanid),
                  j.unique_id,
                  0,
                ),
              ),
              B = await Promise.all(D),
              at = new Map();
            for (const j of B)
              if (j && !(j.endTime && j.endTime < p))
                for (const ot of j.GetBroadcastWhitelistAsSteamIDs()) {
                  const K = at.get(ot);
                  K ? K.push(j) : at.set(ot, [j]);
                }
            return at;
          }
          IsBroadcasterAlreadyBound(o, p) {
            const f = this.m_mapBroadcasterSteamIDToEvents.get(o) ?? [],
              y = f.length;
            if ((p ? p.length : 0) != y) return !1;
            for (let B = 0; B < y; B++) if (f[B] != p[B].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(o, p) {
            let f = new Map();
            for (const y of o) {
              if (!y) continue;
              const D = et.ParseEventModelPresenters(y, p);
              for (const B of D)
                B.steamID && f.set(B.steamID.ConvertTo64BitString(), B);
            }
            return f;
          }
          RemoveCachedDataIfNotInMap(o) {
            const p = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((f, y) => {
              o.has(y) || p.push(y);
            }),
              p.forEach((f) => {
                this.m_mapBroadcasterSteamIDData.delete(f),
                  this.m_mapBroadcasterSteamIDToEvents.delete(f);
              });
          }
          static BuildAppIDRefsForEventList(o, p) {
            const f = new Set();
            for (const y of o)
              et.ParseEventModelAppReferences(y, p).forEach((B) => f.add(B));
            return Array.from(f);
          }
          UpdateCachedDataFromEvents(o, p) {
            o.forEach((f, y) => {
              if (this.IsBroadcasterAlreadyBound(y, f)) return;
              const D = {
                m_mapPresenters: et.BuildSteamIDToPresenterMapFromEventList(
                  f,
                  p,
                ),
                m_rgAppIDs: et.BuildAppIDRefsForEventList(f, p),
              };
              this.m_mapBroadcasterSteamIDData.set(y, D),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  y,
                  f.map((B) => B.GID ?? ""),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(o, p) {
            const f = await this.BuildBroadcasterSteamIDToActiveEventMap(o);
            this.RemoveCachedDataIfNotInMap(f),
              this.UpdateCachedDataFromEvents(f, p);
          }
          GetPresenterMapForBroadcasterSteamID(o) {
            return this.m_mapBroadcasterSteamIDData.get(o)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(o) {
            return this.m_mapBroadcasterSteamIDData.get(o)?.m_rgAppIDs;
          }
        };
        q([M.sH], E.prototype, "m_mapBroadcasterSteamIDData", 2);
        let x = E;
        const Q = new x();
      },
      22950: (lt, Y, l) => {
        l.d(Y, { es: () => J, fK: () => At, a0: () => vt, fO: () => gt });
        var M = l(41735),
          F = l.n(M),
          d = l(14947),
          w = l(6600),
          N = l(90828);
        function nt(S, t, e) {
          return [S, t, e];
        }
        class q extends Error {}
        class E extends N.J8 {
          m_appid;
          constructor(t) {
            super(), (this.m_appid = t || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(t) {
            if (typeof t != "string" || !t.match(/^#[0-9a-fA-F]{6}$/))
              throw new q("expected color string");
            return [
              parseInt(t.substring(1, 3), 16),
              parseInt(t.substring(3, 5), 16),
              parseInt(t.substring(5, 7), 16),
            ];
          }
          parseString(t) {
            if (typeof t == "string") return t;
            throw new q("expected string");
          }
          parseNumber(t) {
            if (typeof t == "number") return t;
            throw new q("expected number");
          }
          parseDate(t) {
            if (typeof t == "number") return new Date(t);
            throw new q("expected timestamp");
          }
          parseArray(t, e) {
            let a = [];
            if (typeof t != "object" || !Array.isArray(t))
              throw new q("expected array");
            let s = t.length;
            for (let m = 0; m < s; ++m)
              try {
                a.push(e(t[m]));
              } catch (u) {
                throw (
                  ((u.message +=
                    `
...while parsing array element ` + m),
                  u)
                );
              }
            return a;
          }
          parseDict(t, e) {
            let a = new Map();
            if (typeof t != "object" || Array.isArray(t))
              throw new q("expected object");
            for (let s in t)
              try {
                a.set(s, e(t[s]));
              } catch (m) {
                throw (
                  ((m.message +=
                    `
...while parsing dictionary element ` + s),
                  m)
                );
              }
            return a;
          }
          parseBracket(t) {
            let e = {
              name: this.parseString(t.name),
              start: this.parseDate(t.start),
              color: [255, 0, 255],
            };
            return (
              "params" in t &&
                (e.params = this.parseDict(
                  t.params,
                  this.parseString.bind(this),
                )),
              "end" in t && (e.end = this.parseDate(t.end)),
              "color" in t && (e.color = this.parseColor(t.color)),
              e
            );
          }
          parseMarker(t) {
            let e = { time: this.parseDate(t.time), color: [0, 255, 255] };
            return (
              "name" in t && (e.name = this.parseString(t.name)),
              "params" in t &&
                (e.params = this.parseDict(
                  t.params,
                  this.parseString.bind(this),
                )),
              "color" in t && (e.color = this.parseColor(t.color)),
              e
            );
          }
          parseSoundTrack(t) {
            let e = {};
            return (
              "song_title" in t &&
                (e.song_title = this.parseString(t.song_title)),
              "appid" in t && (e.appid = this.parseNumber(t.appid)),
              "song_index" in t &&
                (e.song_index = this.parseNumber(t.song_index)),
              e
            );
          }
          parseBroadcastGameData(t) {
            let e = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in t && (e.appid = this.parseNumber(t.appid)),
              "brackets" in t &&
                (e.brackets = this.parseArray(
                  t.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in t &&
                (e.markers = this.parseArray(
                  t.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in t &&
                (e.soundtrack = this.parseSoundTrack(t.soundtrack)),
              e
            );
          }
          convertTime(t, e) {
            return t - e / 1e3;
          }
          UpdateMarkers(t, e) {
            let a = [],
              s = [];
            for (const m of t)
              m.persistent
                ? (s.length > 0 &&
                    (s[s.length - 1].nTimeEnd = this.convertTime(
                      m.Timestamp,
                      e,
                    )),
                  m.name.length > 0 &&
                    s.push({
                      strTemplateName: m.name,
                      nTimeStart: this.convertTime(m.Timestamp, e),
                      nTimeEnd: -1,
                      color: nt(m.color_r, m.color_g, m.color_b),
                    }))
                : a.push({
                    strTemplateName: m.name,
                    nTime: this.convertTime(m.Timestamp, e),
                    color: nt(m.color_r, m.color_g, m.color_b),
                  });
            return { rgMarkers: a, rgSegments: s };
          }
          UpdateRegions(t) {
            let e = [];
            for (const a of t)
              e.push({
                strTemplateName: a.name,
                min: { x: a.min_x, y: a.min_y },
                max: { x: a.max_x, y: a.max_y },
                behavior: a.behavior,
              });
            return e;
          }
          UpdateSoundtrack(t, e) {}
        }
        var x = l(48937),
          Q = l(89083),
          k = l(13854),
          o = l(3166),
          p = l(27066),
          f = l(7409),
          y = l(14043),
          D = l(8323),
          B = l(72604),
          at = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          ot = (S, t, e, a) => {
            for (
              var s = a > 1 ? void 0 : a ? j(t, e) : t, m = S.length - 1, u;
              m >= 0;
              m--
            )
              (u = S[m]) && (s = (a ? u(t, e, s) : u(s)) || s);
            return a && s && at(t, e, s), s;
          };
        const K = 250,
          dt = 250;
        class Z {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new D.LU();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new D.Ji();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new D.LU();
          m_stats = new f._L();
          constructor(t) {
            (0, d.Gn)(this), (this.m_elVideo = t);
          }
          async PlayMPD(t, e, a) {}
          async PlayWebRTC(t, e, a, s, m) {
            (this.m_strBroadcastSteamID = t),
              (this.m_ulWebRTCSessionID = a),
              (this.m_nHostCandidateGeneration = 0),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "resize",
                this.OnVideoResize,
              );
            let u = { urls: ["stun:" + s] },
              _ = { urls: ["turn:" + s], username: e, credential: a },
              U = { iceServers: [u, _], iceTransportPolicy: "relay" };
            const X = new RTCPeerConnection(U);
            (this.m_peerConnection = X),
              (X.oniceconnectionstatechange = (($) => {
                this.m_peerConnection &&
                  (console.log(
                    "BroadcastWebRTC: ICE connection state changed to " +
                      this.m_peerConnection.iceConnectionState,
                  ),
                  this.m_peerConnection.iceConnectionState === "failed"
                    ? this.OnWebRTCConnectionFailed()
                    : this.m_peerConnection.iceConnectionState ===
                        "disconnected" && this.OnWebRTCConnectionRetry());
              }).bind(this)),
              (X.onicecandidate = (($) => {
                if ($.candidate) {
                  const it = new FormData();
                  it.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    it.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    it.append("sdp_mid", String($.candidate.sdpMid)),
                    it.append(
                      "sdp_mline_index",
                      String($.candidate.sdpMLineIndex),
                    ),
                    it.append("candidate", $.candidate.candidate),
                    F()
                      .post(
                        `${o.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        it,
                      )
                      .then((mt) => {
                        const Bt = mt.data;
                        (Bt.success && Bt.success == B.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(Bt.success),
                          );
                      })
                      .catch((mt) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + mt,
                        ),
                      );
                }
              }).bind(this)),
              (X.ontrack = (($) => {
                $.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = $.streams[0]),
                  this.Play());
              }).bind(this)),
              X.setRemoteDescription({ type: "offer", sdp: m }).then(
                async () => {
                  await X.setLocalDescription(await X.createAnswer());
                  const $ = new FormData();
                  $.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    $.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    $.append("answer", X.localDescription?.sdp ?? "");
                  try {
                    await F()
                      .post(
                        `${o.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        $,
                      )
                      .then((it) => {
                        const mt = it.data;
                        if (!(mt.success && mt.success == B.R))
                          throw new Error(String(mt.success));
                      });
                  } catch (it) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + it,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = K),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                },
              );
          }
          async GetHostCandidates() {
            const t = new FormData();
            t.append("broadcaststeamid", this.m_strBroadcastSteamID),
              t.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              t.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await F()
                .post(
                  `${o.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  t,
                )
                .then((e) => {
                  const a = e.data,
                    s = a.data,
                    m = this.m_peerConnection;
                  if (a.success && a.success == B.R)
                    m &&
                    s.candidate_generation > this.m_nHostCandidateGeneration
                      ? (s.candidates.forEach((u) => {
                          const _ = new RTCIceCandidate({
                            sdpMid: u.sdp_mid,
                            sdpMLineIndex: u.sdp_mline_index,
                            candidate: u.candidate,
                          });
                          m.addIceCandidate(_).catch((U) => console.error(U));
                        }),
                        (this.m_nHostCandidateGeneration =
                          s.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(a.success));
                });
            } catch (e) {
              console.log("Failed to get WebRTC session ICE candidates" + e),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(t, e = null) {
            let a = new CustomEvent(t, {
              cancelable: !0,
              bubbles: !0,
              detail: e,
            });
            this.m_elVideo.dispatchEvent(a);
          }
          OnWebRTCConnectionRetry() {
            this.DispatchEvent("valve-webrtcretry");
          }
          OnWebRTCConnectionFailed() {
            this.DispatchEvent("valve-webrtcfailed");
          }
          Close() {
            this.m_listeners.Unregister(),
              this.m_schCandidateTimer.Cancel(),
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
              this.m_peerConnection &&
                (this.m_peerConnection.close(), (this.m_peerConnection = null)),
              this.m_elVideo.pause(),
              (this.m_elVideo.srcObject = null),
              this.m_stats.GetFPSMonitor().Close(),
              (this.m_bFirstPlay = !0);
          }
          IsBuffering() {
            return !1;
          }
          GetCurrentPlayTime() {
            return 0;
          }
          GetLiveContentStartTime() {
            return new Date(0);
          }
          GetAvailableVideoStartTime() {
            return 0;
          }
          GetBufferedLiveEdgeTime() {
            return 0;
          }
          IsPaused() {
            return this.m_elVideo.paused;
          }
          async Play() {
            const t = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let e = !1;
            const a = () => {
                (e = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              s = (u, _) => !1,
              m = (u, _) => !1;
            try {
              await this.m_elVideo.play(), a();
            } catch (u) {
              u.name === "NotAllowedError"
                ? s("Failed to play video, probably due to auto play policy", u)
                : m("Failed to play video", u);
            }
            !e && t && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(t) {
            return this.Play(), 0;
          }
          Seek(t) {
            return 0;
          }
          JumpTime(t) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(t) {
            this.m_elVideo.muted = t;
          }
          SetVolume(t) {
            (t = k.OQ(t, 0, 1)), (this.m_elVideo.volume = t);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(t) {
            t && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  dt,
                  this.CaptureStatsForDisplay,
                ))
              : !t &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = t);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                dt,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(t) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(t) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let t = [];
            return t.push({ id: y.Y, displayName: "Auto", selected: !0 }), t;
          }
          SetVideoRepresentation(t) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        ot([p.o], Z.prototype, "PlayWebRTC", 1),
          ot([d.XI.bound], Z.prototype, "CaptureStatsForDisplay", 1),
          ot([p.o], Z.prototype, "OnVideoPause", 1),
          ot([p.o], Z.prototype, "OnVideoResize", 1);
        var St = l(99412),
          ut = l(90711),
          yt = l(41635),
          V = l(71742),
          r = l(18210),
          n = l(34592),
          h = l(40497),
          c = l(9032),
          I = l(35038),
          g = l(3685),
          tt = l(60298),
          v = l(80613),
          A = l.n(v),
          i = l(75245);
        function Lt(S) {
          return "unknown ETrailerConvertState ( " + S + " )";
        }
        function Gt(S) {
          return "unknown ETrailerConvertTargetType ( " + S + " )";
        }
        class W extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.video_id || i.Sg(W.M()),
              v.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    video_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    client_cellid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(W.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new W();
            return W.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(W.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(W.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class C extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.video_id || i.Sg(C.M()),
              v.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    video_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    video_url: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(C.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new C();
            return C.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class H extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.encryption_key || i.Sg(H.M()),
              v.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(H.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new H();
            return H.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(H.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(H.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class L extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              L.prototype.app_id || i.Sg(L.M()),
              v.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = i.w0(L.M())), L.sm_mbf;
          }
          toObject(t = !1) {
            return L.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(L.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(L.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new L();
            return L.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(L.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(L.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class G extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.app_id || i.Sg(G.M()),
              v.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    opf_settings: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(G.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new G();
            return G.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(G.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(G.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class P extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.app_id || i.Sg(P.M()),
              v.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    playback_position_in_seconds: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    video_track_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    audio_track_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timedtext_track_id: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    last_modified: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    hide_from_watch_history: {
                      n: 7,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    hide_from_library: {
                      n: 8,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(t = !1) {
            return P.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(P.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(P.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new P();
            return P.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(P.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(P.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class O extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.bookmarks || i.Sg(O.M()),
              v.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { bookmarks: { n: 1, c: P, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(O.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new O();
            return O.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(O.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(O.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class z extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.appids || i.Sg(z.M()),
              v.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    updated_since: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(z.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new z();
            return z.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class R extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.bookmarks || i.Sg(R.M()),
              v.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: { bookmarks: { n: 1, c: P, r: !0, q: !0 } },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(t = !1) {
            return R.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(R.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (A().BinaryReader)(t),
              a = new R();
            return R.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(R.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (A().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(R.M(), t, e);
          }
          serializeBase64String() {
            var t = new (A().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var _t;
        ((S) => {
          function t(s, m, u) {
            return s.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, I.I8)(W, m, u),
              C,
              { ePrivilege: 1 },
            );
          }
          S.ClientGetVideoURL = t;
          function e(s, m) {
            return s.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, I.I8)(O, m),
              { ePrivilege: 1 },
            );
          }
          S.SetVideoBookmark = e;
          function a(s, m, u) {
            return s.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, I.I8)(z, m, u),
              R,
              { ePrivilege: 1 },
            );
          }
          S.GetVideoBookmarks = a;
        })(_t || (_t = {}));
        var Dt;
        ((S) => {
          S.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: H,
          };
        })(Dt || (Dt = {}));
        var wt;
        ((S) => {
          function t(e, a, s) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, I.I8)(L, a, s),
              G,
              { ePrivilege: 1 },
            );
          }
          S.ClientGetOPFSettings = t;
        })(wt || (wt = {}));
        class rt {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(t, e) {
            this.ValidateBookmarkData(e)
              ? this.m_mapBookmarks.set(t, P.fromObject(e))
              : this.InitializeBookmarkForApp(t);
          }
          ValidateBookmarkData(t) {
            const e = t;
            return typeof e == "object"
              ? Number.isInteger(e.playback_position_in_seconds) &&
                  Number.isInteger(e.app_id)
              : !1;
          }
          InitializeBookmarkForApp(t) {
            if (!this.m_mapBookmarks.has(t)) {
              let e = {
                app_id: t,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(t, new P(e));
            }
          }
          GetBookmarkPlayTimeInSeconds(t) {
            let e = this.m_mapBookmarks.get(t);
            if (e) {
              let a = e.playback_position_in_seconds();
              if (Number.isInteger(a)) return a;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(t, e, a, s, m) {
            if (!o.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const u = I.w.Init(O);
            let _ = this.m_mapBookmarks.get(t);
            if (_) {
              let U = !1;
              _.app_id() != t && ((U = !0), _.set_app_id(t)),
                _.playback_position_in_seconds() != e &&
                  ((U = !0), _.set_playback_position_in_seconds(e)),
                (a = a || "0"),
                _.video_track_id() != a && (_.set_video_track_id(a), (U = !0)),
                (s = s || "0"),
                _.audio_track_id() != s && (_.set_audio_track_id(s), (U = !0)),
                (m = m || "0"),
                m != _.timedtext_track_id() &&
                  (_.set_timedtext_track_id(m), (U = !0)),
                U &&
                  (u.Body().add_bookmarks(_),
                  _t.SetVideoBookmark(this.m_transport, u));
            }
          }
          static Get() {
            return (
              rt.s_VODStore ||
                ((rt.s_VODStore = new rt()), rt.s_VODStore.Init()),
              rt.s_VODStore
            );
          }
          Init() {
            o.iA.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const t =
                (0, o.yK)() == "community"
                  ? o.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : o.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              e = {};
            try {
              let a = await F().get(t, { params: e, withCredentials: !0 });
              if (
                a &&
                a.status == 200 &&
                a.data &&
                a.data.success == B.R &&
                a.data.webapi_token
              ) {
                this.m_transport = (0, tt.C)(
                  new g.D(o.TS.WEBAPI_BASE_URL, a.data.webapi_token),
                ).GetServiceTransport();
                return;
              }
            } catch (a) {
              let s = (0, n.H)(a);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  s.strErrorMsg,
                s,
              );
            }
          }
        }
        class Mt {
          m_appid;
          constructor(t) {
            this.m_appid = t;
          }
          async SetBookmark(t, e, a, s) {
            o.iA.logged_in &&
              rt
                .Get()
                .SendBookMarkedTimeToServer(
                  this.m_appid,
                  Math.floor(t),
                  e,
                  a,
                  s,
                );
          }
          GetBeginPlaytime() {
            return o.iA.logged_in
              ? rt.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
        var ft = l(44930),
          Pt = Object.defineProperty,
          Et = Object.getOwnPropertyDescriptor,
          b = (S, t, e, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Et(t, e) : t, m = S.length - 1, u;
              m >= 0;
              m--
            )
              (u = S[m]) && (s = (a ? u(t, e, s) : u(s)) || s);
            return a && s && Pt(t, e, s), s;
          };
        const It = 1800,
          Ot = 1e3,
          Ut = 5 * 1e3,
          gt = 7;
        var At = ((S) => (
          (S[(S.None = 0)] = "None"),
          (S[(S.Unlocking = 1)] = "Unlocking"),
          (S[(S.Loading = 2)] = "Loading"),
          (S[(S.Ready = 3)] = "Ready"),
          (S[(S.Error = 4)] = "Error"),
          S
        ))(At || {});
        async function Wt(S, t, e) {
          if (!t) return;
          let a = new FormData();
          a.append("steamid", S),
            a.append("broadcastid", t),
            a.append("viewertoken", e);
          try {
            await F().post(o.TS.CHAT_BASE_URL + "broadcast/stopwatching", a);
          } catch {}
        }
        class bt {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new D.LU();
          m_broadcast;
          m_video;
          UnlockH264(t, e) {
            this.BCanUnlockH264()
              ? (t.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = t),
                (this.m_video = e),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : t.SetState(4, (0, r.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, ft.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, ft.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, ft.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, ft.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Requesting browserview unlock"),
                  SteamClient.BrowserView.PostMessageToParent(
                    "UnlockH264Request",
                    "CUnlockH264Helper",
                  ))
                : console.log(
                    "Failed to request H.264 unlock: no method supported",
                  );
          }
          CheckUnlockState() {
            if (this.m_broadcast.m_eWatchState != 1) return;
            if ((0, x.Mc)() || (0, x.aM)()) {
              console.log("Unlocking H.264 successful"),
                this.m_broadcast.SetState(0, ""),
                this.m_video.Restart();
              return;
            }
            Date.now() - this.m_rtUnlockTime > 6 * 1e3
              ? (console.log(
                  "Unlocking H.264 timed out (Steam client or servers offline?)",
                ),
                this.m_broadcast.SetState(
                  4,
                  (0, r.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class pt {
          constructor() {
            (0, d.Gn)(this);
          }
          m_steamIDBroadcast = "";
          m_ulBroadcastID = "";
          m_ulViewerToken = "";
          m_strCDNAuthUrlParameters = void 0;
          m_bWebRTC = !1;
          m_data;
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          m_schManifestTimeout = new D.LU();
          m_schHeartbeatTimeout = new D.LU();
          SetState(t, e = "") {
            (this.m_eWatchState = t),
              (this.m_strStateDescription = e),
              t == 4 && console.log(this.m_strStateDescription);
          }
        }
        b([d.sH], pt.prototype, "m_ulBroadcastID", 2),
          b([d.sH], pt.prototype, "m_eWatchState", 2),
          b([d.sH], pt.prototype, "m_strStateDescription", 2),
          b([d.XI], pt.prototype, "SetState", 1);
        class st {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + gt;
          m_nAppID = gt;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new D.LU();
          m_nRefCount = 0;
          constructor(t) {
            (0, d.Gn)(this), (this.m_steamIDBroadcast = t);
          }
        }
        b([d.sH], st.prototype, "m_bInitialized", 2),
          b([d.sH], st.prototype, "m_strTitle", 2),
          b([d.sH], st.prototype, "m_strAppId", 2),
          b([d.sH], st.prototype, "m_nAppID", 2),
          b([d.sH], st.prototype, "m_strAppTitle", 2),
          b([d.sH], st.prototype, "m_strThumbnailUrl", 2),
          b([d.sH], st.prototype, "m_nViewerCount", 2),
          b([d.sH], st.prototype, "m_bIsOnline", 2);
        class ht {
          constructor() {
            (0, d.Gn)(this);
          }
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          SetState(t, e = "") {
            (this.m_eWatchState = t),
              (this.m_strStateDescription = e),
              t == 4 && console.log(this.m_strStateDescription);
          }
        }
        b([d.sH], ht.prototype, "m_eWatchState", 2),
          b([d.sH], ht.prototype, "m_strStateDescription", 2),
          b([d.XI], ht.prototype, "SetState", 1);
        class Ct extends ht {
          m_clipID;
          m_data;
        }
        class Ht extends ht {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class Tt {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: "0" };
          m_schSaveSettings = new D.LU();
          m_broadcastInfos = {};
          constructor() {
            (0, d.Gn)(this), this.LoadBroadcastSettings();
          }
          GetBroadcastState(t) {
            if (t.IsBroadcastClip()) {
              let e = this.m_mapClips.get(t.GetBroadcastClipID());
              return e ? e.m_eWatchState : 0;
            } else if (t.IsBroadcastVOD()) {
              const e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
              return e ? e.m_eWatchState : 0;
            } else {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              return e ? e.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(t) {
            if (t.IsBroadcastClip()) {
              let e = this.m_mapClips.get(t.GetBroadcastClipID());
              return e ? e.m_strStateDescription : "";
            } else if (t.IsBroadcastVOD()) {
              const e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
              return e ? e.m_strStateDescription : "";
            } else {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              return e ? e.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(t, e, a, s) {
            let m = this.GetOrCreateBroadcast(e),
              { nVolume: u, bMuted: _ } = this.m_broadcastSettings,
              U = new T(t, u, _, a);
            return (
              U.SetBroadcastSteamID(e),
              m.m_rgVideos.push(U),
              (m.m_bWebRTC = s),
              !(0, x.Mc)() && !(0, x.aM)() && new bt().UnlockH264(m, U),
              U
            );
          }
          CreateClipVideo(t, e, a) {
            let s = this.GetOrCreateClip(e),
              { nVolume: m, bMuted: u } = this.m_broadcastSettings,
              _ = new T(t, m, u, a);
            return (
              _.SetBroadcastClipID(e),
              s.m_rgVideos.push(_),
              !(0, x.Mc)() && !(0, x.aM)() && new bt().UnlockH264(s, _),
              _
            );
          }
          CreateVODVideo(t, e, a) {
            let s = this.GetOrCreateVOD(e),
              { nVolume: m, bMuted: u } = this.m_broadcastSettings,
              _ = new T(t, m, u, a);
            return (
              _.SetBroadcastAppIDVOD(e),
              s.m_rgVideos.push(_),
              !(0, x.Mc)() && !(0, x.aM)() && new bt().UnlockH264(s, _),
              _
            );
          }
          StartVideo(t) {
            if (t.IsBroadcastClip()) {
              console.log(`Starting clip for ${t.GetBroadcastClipID()}`);
              let e = this.m_mapClips.get(t.GetBroadcastClipID());
              if (!e) return;
              this.SetActiveVideo(t),
                e.m_eWatchState == 0
                  ? this.GetClipManifest(e, t.GetWatchLocation())
                  : e.m_eWatchState == 3 && t.StartClip(e);
            } else if (t.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${t.GetBroadcastAppIDVOD()}`);
              let e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
              if (!e) return;
              this.SetActiveVideo(t),
                e.m_eWatchState == 0
                  ? this.GetVODManifest(e, t.GetWatchLocation())
                  : e.m_eWatchState == 3 && t.StartVOD(e);
            } else {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              if (!e) return;
              this.SetActiveVideo(t),
                e.m_eWatchState == 0
                  ? this.GetBroadcastManifest(e, t.GetWatchLocation())
                  : e.m_eWatchState == 3 && t.StartBroadcast(e);
            }
          }
          SetActiveVideo(t) {
            this.m_mapBroadcasts.forEach((e) => {
              for (let a of e.m_rgVideos)
                a != t && a.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((e) => {
                for (let a of e.m_rgVideos)
                  a != t && a.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = t);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((t) => {
              for (let e of t.m_rgVideos) e.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(t) {
            let e = t.GetBroadcastSteamID(),
              a = this.m_mapBroadcasts.get(e);
            t.Stop(),
              a &&
                (a.m_ulBroadcastID &&
                  Wt(
                    e,
                    a.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                yt.Wp(a.m_rgVideos, (s) => s == t),
                this.RemoveBroadcastIfUnused(a));
          }
          StartInfo(t) {
            const e = this.GetOrCreateBroadcastInfo(t);
            return (
              e.m_nRefCount++,
              (!e.m_bInitialized || !e.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(e),
              e
            );
          }
          StopInfo(t) {
            t.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(t) {
            if (!t) return new st("");
            if (!this.m_broadcastInfos[t]) {
              const e = (0, d.sH)(new st(t));
              this.m_broadcastInfos[t] = e;
            }
            return this.m_broadcastInfos[t];
          }
          GetOrCreateBroadcast(t) {
            let e = this.m_mapBroadcasts.get(t);
            return (
              e ||
              ((e = new pt()),
              (e.m_steamIDBroadcast = t),
              (e.m_eWatchState = 0),
              this.m_mapBroadcasts.set(t, e),
              e)
            );
          }
          GetBroadcast(t) {
            return this.m_mapBroadcasts.get(t);
          }
          GetBroadcastClip(t) {
            return this.m_mapClips.get(t);
          }
          GetBroadcastVOD(t) {
            return this.m_mapVODs.get(t);
          }
          RemoveBroadcastIfUnused(t) {
            t.m_rgVideos.length ||
              (t.m_schHeartbeatTimeout.Cancel(),
              t.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(t.m_steamIDBroadcast));
          }
          GetOrCreateClip(t) {
            let e = this.m_mapClips.get(t);
            return (
              e ||
              ((e = new Ct()),
              (e.m_clipID = t),
              (e.m_eWatchState = 0),
              this.m_mapClips.set(t, e),
              e)
            );
          }
          GetOrCreateVOD(t) {
            let e = this.m_mapVODs.get(t);
            return (
              e ||
              ((e = new Ht()),
              (e.m_nAppIDVOD = t),
              (e.m_eWatchState = 0),
              this.m_mapVODs.set(t, e),
              e)
            );
          }
          async LoadBroadcastInfo(t) {
            let e = "0",
              a = this.m_mapBroadcasts.get(t.m_steamIDBroadcast);
            if ((a && (e = a.m_ulBroadcastID), t.m_nRefCount == 0)) return;
            const s = {
              steamid: t.m_steamIDBroadcast,
              broadcastid: e,
              location:
                a &&
                a.m_rgVideos &&
                a.m_rgVideos[0] &&
                a.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const m = await F().get(
                `${o.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: s },
              );
              if (!m || !m.data || !m.data.success || m.data.success != B.R) {
                t.m_bInitialized = !0;
                return;
              }
              const u = m.data;
              (0, d.h5)(() => {
                (t.m_bInitialized = !0),
                  (t.m_strTitle = u.title),
                  (t.m_strAppId = u.appid),
                  (t.m_nAppID = Number.parseInt(u.appid)),
                  (t.m_strAppTitle = u.app_title),
                  (t.m_strThumbnailUrl = u.thumbnail_url),
                  (t.m_nViewerCount = u.viewer_count),
                  (t.m_bIsOnline = u.is_online),
                  !t.m_strTitle &&
                    w.td &&
                    ((t.m_strTitle = w.td.name),
                    (t.m_strAppTitle = w.td.appName || w.td.name));
                const _ = u.update_interval;
                _ &&
                  typeof _ == "number" &&
                  t.m_schUpdateTimeout.Schedule(_ * 1e3, () =>
                    this.LoadBroadcastInfo(t),
                  );
              });
            } catch (m) {
              console.error(m);
            }
          }
          DelayedGetBroadcastManifest(t, e, a = Date.now()) {
            t.m_schManifestTimeout.Schedule(Ut, () =>
              this.GetBroadcastManifest(t, e, a),
            );
          }
          async GetBroadcastManifest(t, e, a = Date.now()) {
            t.SetState(2, "");
            let s = {
                steamid: t.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: e,
                sessionid: (0, o.KC)(),
                is_webrtc: t.m_bWebRTC,
              },
              m = null;
            try {
              m = await F().get(
                o.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: s, withCredentials: !0 },
              );
            } catch (U) {
              let X = (0, n.H)(U);
              console.error(
                "Failed to get broadcast manifest!" + X.strErrorMsg,
                X,
              );
            }
            if (!m || m.status != 200) {
              t.SetState(4, (0, r.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let u = m.data;
            u.viewertoken && this.SetViewerToken(u.viewertoken);
            let _ = u.success;
            if (_ == "ready")
              t.SetState(3),
                (t.m_ulBroadcastID = u.broadcastid),
                (t.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (t.m_strCDNAuthUrlParameters = u.cdn_auth_url_parameters),
                (t.m_bWebRTC = u.is_webrtc),
                (t.m_data = u),
                this.LoadBroadcast(t),
                setTimeout(() => {
                  t.m_schHeartbeatTimeout.Schedule(
                    t.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(t),
                  );
                }, Math.random() * 3e4);
            else if (_ == "waiting") {
              t.SetState(2, (0, r.we)("#BroadcastWatch_WaitingForResponse"));
              let U = Date.now() - a;
              if (U > 60 * 1e3) {
                t.SetState(4, (0, r.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let X = U > 30 * 1e3 ? u.retry : 5e3;
              t.m_schManifestTimeout.Schedule(X, () =>
                this.GetBroadcastManifest(t, e, a),
              );
            } else
              _ == "waiting_for_start"
                ? (t.SetState(2, (0, r.we)("#BroadcastWatch_WaitingForStart")),
                  t.m_schManifestTimeout.Schedule(u.retry, () =>
                    this.GetBroadcastManifest(t, e, a),
                  ))
                : _ == "waiting_for_reconnect"
                  ? (t.SetState(
                      2,
                      (0, r.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    t.m_schManifestTimeout.Schedule(u.retry, () =>
                      this.GetBroadcastManifest(t, e, a),
                    ))
                  : _ == "end"
                    ? t.SetState(4, (0, r.we)("#BroadcastWatch_NotAvailable"))
                    : _ == "too_many_broadcasts"
                      ? t.SetState(
                          4,
                          (0, r.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : _ == "system_not_supported"
                        ? t.SetState(
                            4,
                            (0, r.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : _ == "user_restricted"
                          ? t.SetState(
                              4,
                              (0, r.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : _ == "poor_upload_quality"
                            ? t.SetState(
                                4,
                                (0, r.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : _ == "request_failed"
                              ? t.SetState(
                                  4,
                                  (0, r.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : _ == "too_many_viewers"
                                ? t.SetState(
                                    4,
                                    (0, r.we)("#BroadcastWatch_TooManyViewers"),
                                  )
                                : t.SetState(
                                    4,
                                    (0, r.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(t, e) {
            t.SetState(2, "");
            let a = {
                clipid: t.m_clipID,
                watchlocation: e,
                sessionid: (0, o.KC)(),
              },
              s = null;
            try {
              s = await F().get(
                o.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: a, withCredentials: !0 },
              );
            } catch (u) {
              console.error(u), console.log("Failed to get clip manifest!");
            }
            if (!s || s.status != 200) {
              t.SetState(4, (0, r.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let m = s.data;
            m.success == B.R
              ? (t.SetState(3), (t.m_data = m), this.LoadClip(t))
              : t.SetState(4, (0, r.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(t, e) {
            t.SetState(2, "");
            let a = await h.L.fetchQuery((0, c.uj)(t.m_nAppIDVOD)).catch(
              (s) => {
                console.error(
                  "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                    t.m_nAppIDVOD,
                  s,
                );
              },
            );
            a
              ? (a.bookmark
                  ? rt.Get().SetBookmarkForApp(t.m_nAppIDVOD, a.bookmark)
                  : rt.Get().InitializeBookmarkForApp(t.m_nAppIDVOD),
                t.SetState(3),
                (t.m_manifestURL = a.video_url),
                this.LoadVOD(t))
              : t.SetState(4, (0, r.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(t) {
            let e = new FormData();
            e.append("steamid", t.m_steamIDBroadcast),
              e.append("broadcastid", t.m_ulBroadcastID),
              e.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              F().post(o.TS.CHAT_BASE_URL + "broadcast/heartbeat/", e),
              t.m_schHeartbeatTimeout.Schedule(
                t.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(t),
              );
          }
          LoadBroadcast(t) {
            const e = this.m_activeVideo;
            e &&
              t.m_rgVideos.findIndex((a) => a == e) >= 0 &&
              e.StartBroadcast(t);
          }
          LoadClip(t) {
            const e = this.m_activeVideo;
            e && t.m_rgVideos.findIndex((a) => a == e) >= 0 && e.StartClip(t);
          }
          LoadVOD(t) {
            const e = this.m_activeVideo;
            e && t.m_rgVideos.findIndex((a) => a == e) >= 0 && e.StartVOD(t);
          }
          BroadcastDownloadFailed(t, e = !0, a = Q.N_.Invalid) {
            t.Stop();
            let s = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            s &&
              s.m_eWatchState != 2 &&
              (s.m_bWebRTC && e && (s.m_bWebRTC = !1),
              a == Q.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(s, t.GetWatchLocation())
                : this.GetBroadcastManifest(s, t.GetWatchLocation()));
          }
          UserInputClickVideo(t) {
            if (
              this.m_activeVideo != t &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = t),
              !t.IsBroadcastClip() && !t.IsBroadcastVOD())
            ) {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              e && this.GetBroadcastManifest(e, t.GetWatchLocation());
            }
            t.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let t = window.localStorage.getItem("broadcastSettings");
            if (!t) return;
            let e = JSON.parse(t);
            if (!e) return;
            Object.assign(this.m_broadcastSettings, e);
            let a = this.m_broadcastSettings;
            (a.bMuted = !!a.bMuted),
              (a.nVolume = k.OQ(a.nVolume, 0, 1)),
              typeof a.ulViewerToken != "string" && (a.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(Ot, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(t) {
            this.m_broadcastSettings.ulViewerToken != t &&
              ((this.m_broadcastSettings.ulViewerToken = t),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(t, e) {
            (this.m_broadcastSettings.nVolume == t &&
              this.m_broadcastSettings.bMuted == e) ||
              ((this.m_broadcastSettings.nVolume = t),
              (this.m_broadcastSettings.bMuted = e),
              this.SaveBroadcastSettings());
          }
        }
        b([d.sH], Tt.prototype, "m_mapBroadcasts", 2);
        var vt = ((S) => (
          (S[(S.Timeline = 1)] = "Timeline"),
          (S[(S.Minimap = 2)] = "Minimap"),
          S
        ))(vt || {});
        class T {
          m_elVideo;
          m_player = null;
          m_listeners = new D.Ji();
          m_gameDataParser = null;
          m_eWatchLocation = ut.nn.Tq;
          m_bStartWithSubtitles = !1;
          m_steamIDBroadcast = "";
          m_BroadcastInfo = null;
          m_broadcastClipID = "";
          m_nBroadcastAppIDVOD = 0;
          m_bPaused = !1;
          m_nPlaybackTime = 0;
          m_bBuffering = !1;
          m_bOnLiveEdge = !1;
          m_nVolume = 0;
          m_bMuted = !1;
          m_bUserInputNeeded = !1;
          m_bIsReplay = !1;
          m_nTimelineDuration = It;
          m_nVideoStartPos = 0;
          m_nVideoEndPos = 0;
          m_editorStartTime = 0;
          m_editorEndTime = 0;
          m_rgMarkers = d.sH.array();
          m_rgSegments = d.sH.array();
          m_rgRegions = d.sH.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(t, e, a, s) {
            (0, d.Gn)(this),
              (this.m_elVideo = t),
              (this.m_nVolume = e),
              (this.m_bMuted = a),
              (this.m_eWatchLocation = s);
          }
          SetBroadcastSteamID(t) {
            this.m_steamIDBroadcast = t;
          }
          GetBroadcastSteamID() {
            return this.m_steamIDBroadcast;
          }
          GetWatchLocation() {
            return this.m_eWatchLocation;
          }
          IsPaused() {
            return this.m_bPaused;
          }
          GetPlaybackTime() {
            return this.m_nPlaybackTime;
          }
          SetStatsViewIsVisible(t) {
            this.m_player && this.m_player.SetStatsViewIsVisible(t);
          }
          GetDASHPlayerStats() {
            return this.m_player?.GetDASHPlayerStats();
          }
          BHasDASHStats() {
            return this.m_player != null;
          }
          IsTimelineMapActive() {
            return !1;
          }
          CanSeek() {
            return this.m_player?.CanSeek() ?? !1;
          }
          IsBuffering() {
            return this.m_bBuffering;
          }
          IsOnLiveEdge() {
            return this.m_bOnLiveEdge;
          }
          GetVideoAvailableStartTime() {
            return this.m_nVideoStartPos;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          IsReplay() {
            return this.m_bIsReplay;
          }
          IsBroadcastClip() {
            return !!this.m_broadcastClipID;
          }
          SetBroadcastClipID(t) {
            this.m_broadcastClipID = t;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(t) {
            this.m_nBroadcastAppIDVOD = t;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(t) {
            this.m_player?.SetVideoRepresentation(t);
          }
          GetBroadcastInfo() {
            return this.m_BroadcastInfo;
          }
          BHasTimedText() {
            return this.m_player?.BHasTimedText() ?? !1;
          }
          BHasPlayer() {
            return !!this.m_player;
          }
          ListSubtitles() {
            return this.m_elVideo.textTracks;
          }
          GetSubtitles() {
            for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
              const e = this.m_elVideo.textTracks[t];
              if (e.mode === "showing") return e;
            }
            return null;
          }
          SetSubtitles(t) {
            let e = t ? r.bi[t] : St.xPp;
            this.m_player.SetSubtitles(e);
          }
          SetStartWithSubtitles(t) {
            this.m_bStartWithSubtitles = t;
          }
          GetBroadcastState() {
            return J.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return J.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(t) {
            this.m_fnOnVideoEnd = t;
          }
          InitPlayer() {
            (0, V.wT)(!this.m_player, "Initialized twice?"),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "playing",
                this.OnVideoPlaying,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "volumechange",
                this.OnVolumeUpdated,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-gamedataupdate",
                this.OnGameDataUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcretry",
                this.OnWebRTCRetry,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcfailed",
                this.OnWebRTCFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              (this.m_bPaused = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_bBuffering = !1),
              (this.m_nTimelineDuration = It),
              (this.m_nVideoStartPos = 0),
              (this.m_nVideoEndPos = 0),
              this.m_rgMarkers.clear(),
              this.m_rgSegments.clear(),
              (this.m_bUserInputNeeded = !1),
              (this.m_bIsReplay = !1);
          }
          Restart() {
            this.IsMuted() ||
              this.IsPaused() ||
              this.GetUserInputNeeded() ||
              this.Play();
          }
          StartBroadcast(t) {
            if ((this.InitPlayer(), t.m_data.url)) {
              let a = new Q.Zn(this.m_elVideo);
              a.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = a),
                a.PlayMPD(
                  t.m_data.url,
                  t.m_data.hls_url,
                  void 0,
                  t.m_strCDNAuthUrlParameters,
                );
            } else {
              let a = new Z(this.m_elVideo);
              (this.m_player = a),
                a.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  t.m_ulViewerToken,
                  t.m_data.webrtc_session_id,
                  t.m_data.webrtc_turn_server,
                  t.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
            let e = this.m_player?.GetDASHPlayerStats();
            e &&
              e.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                o.iA.steamid,
                t.m_ulBroadcastID,
                t.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = J.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(t) {
            this.InitPlayer();
            let e = new Q.Zn(this.m_elVideo);
            e.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = e),
              e.PlayMPD(t.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(t) {
            this.InitPlayer();
            let e = new Q.Zn(this.m_elVideo);
            e.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = e),
              o.iA.logged_in &&
                t.m_nAppIDVOD &&
                e.SetBookmarkAdapter(new Mt(t.m_nAppIDVOD)),
              t.m_manifestURL && e.PlayMPD(t.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (J.StopInfo(this.m_BroadcastInfo),
                (this.m_BroadcastInfo = null)),
              (this.m_gameDataParser = null),
              this.m_player && (this.m_player.Close(), (this.m_player = null));
          }
          TogglePlayPause() {
            !this.m_player || this.m_player.IsPaused()
              ? this.Play()
              : this.Pause();
          }
          Play() {
            const t = this.GetBroadcastState();
            if (t == 0 || this.IsBroadcastClip()) {
              J.StartVideo(this);
              return;
            } else if (t == 3)
              if ((J.SetActiveVideo(this), this.m_player)) this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const e = J.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                e && this.StartVOD(e);
              } else {
                const e = J.GetBroadcast(this.m_steamIDBroadcast);
                e && this.StartBroadcast(e);
              }
          }
          Pause() {
            console.log(
              "Pause ",
              this.m_steamIDBroadcast,
              this.m_nBroadcastAppIDVOD,
              this.m_broadcastClipID,
            ),
              this.m_player && this.m_player.Pause();
          }
          JumpTime(t) {
            this.m_player?.JumpTime(t);
          }
          Seek(t) {
            this.m_player?.Seek(t);
          }
          SeekAndPlay(t) {
            this.m_player?.SeekAndPlay(t);
          }
          JumpToLiveEdge() {
            const t = this.m_player;
            t &&
              (t.IsLiveContent()
                ? this.SeekAndPlay(t.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(t.GetAvailableVideoStartTime()));
          }
          SetVolume(t) {
            this.m_player &&
              (this.m_player.SetVolume(t),
              (this.m_nVolume = this.m_player.GetVolume())),
              J.SaveVolumeChange(t, this.m_bMuted);
          }
          SetMute(t) {
            this.m_player && this.m_player.SetMuted(t),
              (this.m_bMuted = t),
              J.SaveVolumeChange(this.m_nVolume, t);
          }
          IsMuted() {
            return this.m_bMuted;
          }
          OnVideoPlaying() {
            (this.m_bPaused = !1),
              this.m_editorStartTime === 0 &&
                this.m_editorEndTime === 0 &&
                ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
                (this.m_editorEndTime =
                  this.GetVideoAvailableStartTime() +
                  this.GetTimelineDuration()));
          }
          OnVideoPause() {
            this.m_bPaused = !0;
          }
          OnVideoTimeUpdate() {
            window.clearTimeout(this.m_videoEndingTimer);
            const t = this.m_player;
            if (t)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = t.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = t.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = t.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = t.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = t.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = t.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    t.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const e = this.m_fnOnVideoEnd;
                  e &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < Q.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      e();
                    }, 400));
                }
                (this.m_bBuffering = t.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < Q.Br),
                  t.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const t = this.m_player;
            t &&
              ((this.m_nVolume = t.GetVolume()), (this.m_bMuted = t.IsMuted()));
          }
          OnGameDataUpdate(t) {
            let e = t.detail;
            if (!e || typeof e.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != e.gamedata.__appid) &&
              (this.m_gameDataParser = new E(e.gamedata.__appid));
            const a = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in e.gamedata) {
              const s = this.m_gameDataParser.UpdateMarkers(
                e.gamedata.__timelinemarkers,
                a,
              );
              s &&
                (this.m_rgMarkers.replace(s.rgMarkers || []),
                this.m_rgSegments.replace(s.rgSegments || []));
              const m = this.m_gameDataParser.UpdateRegions(
                e.gamedata.__regions,
              );
              m && this.m_rgRegions.replace(m);
            } else
              "soundtrack" in e.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  e.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(t) {
            let e = t.detail || Q.N_.Invalid;
            J.BroadcastDownloadFailed(this, !0, e);
          }
          OnWebRTCRetry() {
            J.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            J.BroadcastDownloadFailed(this, !0);
          }
          OnUserInputNeeded() {
            this.m_bUserInputNeeded = !0;
          }
          UserInputClick() {
            (this.m_bUserInputNeeded = !1),
              this.m_player ? this.JumpToLiveEdge() : this.Play();
          }
          StopPlaybackTillUserInput() {
            this.Stop(), this.OnUserInputNeeded();
          }
          GetTimelineStartPos() {
            return this.m_nVideoEndPos - this.m_nTimelineDuration;
          }
          GetTimelineDuration() {
            return this.m_nTimelineDuration;
          }
          GetTimeAtMousePosition(t, e, a, s) {
            let m = k.Fu(t, e.left, e.right, a, s);
            return Math.floor(m + 0.5);
          }
          GetPercentOffsetFromTime(t, e) {
            let a = 0,
              s = 0;
            return (
              e == 1
                ? ((s = this.m_nVideoEndPos),
                  (a = s - this.m_nTimelineDuration))
                : ((a = 0), (s = 0)),
              k.Fu(t, a, s, 0, 100)
            );
          }
          GetTimelineMarkers() {
            return this.m_rgMarkers;
          }
          GetTimelineSegments() {
            return this.m_rgSegments;
          }
          GetGameDataRegions() {
            return this.m_rgRegions;
          }
          BHasMarkersOrSegments() {
            return this.has_segments || this.has_markers;
          }
          get has_markers() {
            return this.m_rgMarkers.length > 0;
          }
          get has_segments() {
            return this.m_rgSegments.length > 0;
          }
        }
        b([d.sH], T.prototype, "m_player", 2),
          b([d.sH], T.prototype, "m_bPaused", 2),
          b([d.sH], T.prototype, "m_nPlaybackTime", 2),
          b([d.sH], T.prototype, "m_bBuffering", 2),
          b([d.sH], T.prototype, "m_bOnLiveEdge", 2),
          b([d.sH], T.prototype, "m_nVolume", 2),
          b([d.sH], T.prototype, "m_bMuted", 2),
          b([d.sH], T.prototype, "m_bUserInputNeeded", 2),
          b([d.sH], T.prototype, "m_bIsReplay", 2),
          b([d.sH], T.prototype, "m_nTimelineDuration", 2),
          b([d.sH], T.prototype, "m_nVideoStartPos", 2),
          b([d.sH], T.prototype, "m_nVideoEndPos", 2),
          b([d.sH], T.prototype, "m_editorStartTime", 2),
          b([d.sH], T.prototype, "m_editorEndTime", 2),
          b([d.XI.bound], T.prototype, "StartBroadcast", 1),
          b([d.XI.bound], T.prototype, "StartClip", 1),
          b([d.XI.bound], T.prototype, "StartVOD", 1),
          b([p.o], T.prototype, "OnVideoPlaying", 1),
          b([p.o], T.prototype, "OnVideoPause", 1),
          b([d.XI.bound], T.prototype, "OnVideoTimeUpdate", 1),
          b([p.o], T.prototype, "OnVolumeUpdated", 1),
          b([d.XI.bound], T.prototype, "OnGameDataUpdate", 1),
          b([p.o], T.prototype, "OnDownloadFailed", 1),
          b([p.o], T.prototype, "OnWebRTCRetry", 1),
          b([p.o], T.prototype, "OnWebRTCFailed", 1),
          b([p.o], T.prototype, "OnUserInputNeeded", 1);
        const J = new Tt();
        window.uiBroadcastWatchStore = J;
      },
      10886: (lt, Y, l) => {
        l.d(Y, { A: () => M });
        const M =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      3209: (lt, Y, l) => {
        l.d(Y, { A: () => M });
        const M =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();

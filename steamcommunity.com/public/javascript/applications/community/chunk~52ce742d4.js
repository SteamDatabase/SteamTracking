/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [12694],
    {
      6600: (ht, it, p) => {
        p.d(it, { td: () => F });
        var j = p(14947),
          R = p(3166),
          c = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          V = (k, o, d, f) => {
            for (
              var _ = f > 1 ? void 0 : f ? w(o, d) : o, D = k.length - 1, B;
              D >= 0;
              D--
            )
              (B = k[D]) && (_ = (f ? B(o, d, _) : B(_)) || _);
            return f && _ && c(o, d, _), _;
          };
        const nt = R.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          Z = R.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
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
            (0, j.Gn)(this), this.init(o);
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
        V([j.sH], E.prototype, "bValid", 2),
          V([j.sH], E.prototype, "stream", 2),
          V([j.sH], E.prototype, "name", 2),
          V([j.sH], E.prototype, "appName", 2),
          V([j.sH], E.prototype, "appID", 2),
          V([j.sH], E.prototype, "link", 2),
          V([j.sH], E.prototype, "linkName", 2),
          V([j.sH], E.prototype, "tabIcon", 2),
          V([j.sH], E.prototype, "offlineImage", 2),
          V([j.sH], E.prototype, "gidEvent", 2);
        let F = new E({
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
        function Y(k) {
          (k == "76561198888084799" || k == "76561198910244427") &&
            F.init({
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
              F.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: Z,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (ht, it, p) => {
        p.d(it, { J8: () => c, X8: () => R });
        var j = ((w) => (
            (w[(w.Hover = 0)] = "Hover"),
            (w[(w.ClickPopup = 1)] = "ClickPopup"),
            (w[(w.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            w
          ))(j || {}),
          R = ((w) => (
            (w[(w.Chat = 0)] = "Chat"),
            (w[(w.Notification = 1)] = "Notification"),
            (w[(w.Error = 2)] = "Error"),
            w
          ))(R || {});
        class c {}
      },
      25317: (ht, it, p) => {
        p.d(it, {
          M5: () => ot,
          MU: () => St,
          MX: () => _t,
          Rt: () => $,
          U7: () => ut,
          fn: () => x,
          j: () => ct,
        });
        var j = p(10142),
          R = p(41735),
          c = p.n(R),
          w = p(14947),
          V = p(72604),
          nt = p(76559),
          Z = p(61639),
          E = p(22950),
          F = p(7582),
          Y = p(28462),
          k = p(71742),
          o = p(34592),
          d = p(3166),
          f = p(34032),
          _ = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          B = (N, r, n, h) => {
            for (
              var l = h > 1 ? void 0 : h ? D(r, n) : r, I = N.length - 1, b;
              I >= 0;
              I--
            )
              (b = N[I]) && (l = (h ? b(r, n, l) : b(l)) || l);
            return h && l && _(r, n, l), l;
          };
        let et = !1;
        function x(N) {
          return !!(N && N.thumbnail_http_address);
        }
        function ot(N, r) {
          if (r || N) {
            const n = r || N;
            return !!(n && ct.Get().BIsAppStreaming(n));
          }
          return !1;
        }
        const K = class lt {
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
            return n ? n.filter((h) => x(h)).length : 0;
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
              d.TS.COMMUNITY_BASE_URL +
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
                      (l) =>
                        E.es.GetOrCreateBroadcastInfo(l.steamid).m_nAppID === r,
                    ));
              }),
              n
            );
          }
          GetStreamsForAppID(r) {
            const n = new Array();
            return (
              this.m_lookupStreams.forEach((h) => {
                h?.forEach((l) => {
                  E.es.GetOrCreateBroadcastInfo(l.steamid).m_nAppID === r &&
                    n.push(l);
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
              let n = (0, d.Tc)("broadcastuser", "application_config");
              if (!n)
                try {
                  let h =
                    d.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  n = (await c().get(h, { params: {}, cancelToken: r.token }))
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
              await j.A.Get().QueueAppRequest(r.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const h = j.A.Get().GetApp(r.nAppIDVOD),
              l = new f.TT();
            (l.accountid = 0),
              (l.nAppIDVOD = r.nAppIDVOD),
              (l.default_selection_priority = f.mY.k_ePrimary),
              (l.current_selection_priority = f.mY.k_ePrimary),
              (l.thumbnail_http_address = h?.GetAssets()?.GetHeaderURL() || ""),
              (l.title = h?.GetName() || "");
            const I = this.GetStreams(r);
            if (
              ((0, k.wT)(
                !!I,
                "SetupEmbeddableVOD called before the streams loaded",
                r.nAppIDVOD,
              ),
              I.unshift(l),
              n)
            ) {
              const b = this.GetStreamsLookupKeyFromDef(r);
              this.m_playReadyStream.set(b, l);
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
              const h = await c().get(
                d.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                { params: n },
              );
              return this.HandleHintLoadBroadcastResponse(r, h.data);
            } catch (h) {
              let l = (0, o.H)(h);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  l.strErrorMsg,
                l,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(r) {
            let n = this.MapEmbeddableStreamToRequest(r),
              h = this.GetStreamsLookupKeyFromParam(n),
              l = this.m_inFlightRequests.get(h);
            return (
              l ||
                (this.m_lookupKeyToEmbedStreamDef.set(h, r),
                (l = this.InternalHintLoadEmbeddableStreams(r, n)),
                this.m_inFlightRequests.set(h, l)),
              l
            );
          }
          async InternalHintLoadEmbeddableStreams(r, n) {
            let h = (0, d.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, f.h7)(h)) return this.HandleHintLoadBroadcastResponse(r, h);
            try {
              const l = await c().get(
                d.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                { params: n },
              );
              return this.HandleHintLoadBroadcastResponse(r, l.data);
            } catch (l) {
              let I = (0, o.H)(l);
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
              n.filtered.forEach((b) => {
                if (!b.steamid) {
                  const T = nt.b.InitFromAccountID(b.accountid);
                  b.steamid = T.ConvertTo64BitString();
                }
                const q = E.es.GetOrCreateBroadcastInfo(b.steamid),
                  M = b.appid ? Number(b.appid) : E.fO;
                (q.m_nAppID = M),
                  (q.m_strAppId = "" + M),
                  b.current_selection_priority === void 0 &&
                    (b.current_selection_priority =
                      b.default_selection_priority),
                  M != E.fO && h.push(M);
              });
            });
            const l = this.GetStreamsLookupKeyFromDef(r);
            if (
              (this.m_lookupStreams.set(l, n.filtered),
              this.m_onLoadContextCall.has(l))
            ) {
              const b = this.m_onLoadContextCall.get(l);
              b && b.fnCallback();
            }
            const I = this.GetStreams(r) ?? [];
            return await this.AutoStartVideoStream(r, I), I;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(r, n) {
            const h = Array.from(r.jsondata.broadcast_whitelist ?? []),
              l = Array.from(r.jsondata.broadcast_priority ?? []),
              I = new Map();
            for (let b = 0; b < h.length && !(b >= l.length); b++)
              I.set(h[b], (0, f.PH)(l[b]));
            n.forEach((b) => {
              const q = Number(b.accountid);
              I.has(q) && (b.current_selection_priority = I.get(q));
            });
          }
          async AutoStartVideoStream(r, n) {
            let h = this.GetStreamsLookupKeyFromDef(r);
            if (this.m_bMapHasStartedVideo.get(h)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(h)) {
                const l = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: f.mY.k_eGeneral,
                  current_selection_priority: f.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(h, l);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(r, n);
          }
          async PlayFromAvailableStreams(r, n, h = !1) {
            const l = new Set();
            for (;;) {
              const I = n.filter((M) => !l.has(M) && (!h || !M.nAppIDVOD)),
                b = this.GetAutoStartStream(I);
              if (!b) return null;
              if (await this.AttemptToPlayStream(r, b)) return b;
              l.add(b);
            }
          }
          async AttemptToPlayStream(r, n) {
            let h = this.GetStreamsLookupKeyFromDef(r);
            const l = n.accountid ?? 0;
            if (
              (this.m_bMapHasStartedVideo.set(h, !0),
              this.m_mapBroadcastChecked.has(l) ||
                this.m_mapBroadcastChecked.set(
                  l,
                  this.InternalAttemptToPlayStream(r, n),
                ),
              n.nAppIDVOD)
            )
              this.m_playReadyStream.set(h, n);
            else {
              const I = await this.m_mapBroadcastChecked.get(l);
              if (I?.success == V.R) {
                (n.steamid = I.steamid),
                  this.m_playReadyStream.set(h, n),
                  this.GetConcurrentStreams(r) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus =
                        n.broadcast_chat_visibility ?? null),
                  this.m_setStreamChangedListeners.forEach((q) => q(n));
                const b = E.es.GetOrCreateBroadcastInfo(n.steamid).m_nAppID;
                ut(b, Z.Mc.iy, n.snr);
              } else return null;
            }
            return n;
          }
          async InternalAttemptToPlayStream(r, n) {
            let h = this.GetStreamsLookupKeyFromDef(r);
            try {
              const l = d.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let I = {
                broadcastaccountid: n.accountid,
                viewer_token: E.es.GetViewerToken(),
                origin: self.origin,
              };
              return (await c().get(l, { params: I })).data;
            } catch (l) {
              let I = (0, o.H)(l);
              console.error(
                "Broadcast.AttemptToPlayStream: " + I.strErrorMsg,
                I,
              );
            }
            return null;
          }
          GetAutoStartStream(r) {
            if (!r) return null;
            const n = r.filter((b) => x(b)),
              h = n.reduce((b, q) => Math.max(b, $(q)), 0),
              l = n.filter((b) => $(b) === h);
            if (l.length === 0) return null;
            const I = Math.floor(Math.random() * l.length);
            return l[I];
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
              test: et,
              cc: d.TS.COUNTRY,
              l: d.TS.LANGUAGE,
              hubtype: r.event?.GetContentHubType(),
              hubcategory: r.event?.GetContentHubCategory(),
              hubtagid: r.event?.GetContentHubTag(),
              tabuniqueid: r.tabuniqueid,
              tabfilter: r.tabfilter,
              rt_now_override_test: F.HD.BHasTimeOverride()
                ? F.HD.GetTimeNowWithOverride()
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
              lt.s_GlobalStore ||
                ((lt.s_GlobalStore = new lt()), lt.s_GlobalStore.Init()),
              lt.s_GlobalStore
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
        let ct = K;
        function $(N) {
          return N.current_selection_priority || f.mY.k_eGeneral;
        }
        function St(N) {
          N.sort((r, n) =>
            $(r) != $(n)
              ? $(n) - $(r)
              : r.viewer_count != n.viewer_count
                ? (n.viewer_count ?? 0) - (r.viewer_count ?? 0)
                : (n.accountid ?? 0) - (r.accountid ?? 0),
          );
        }
        async function ut(N, r, n) {
          if (N > 0 && N != 7 && n) {
            let h = new URLSearchParams();
            h.append("page_action", "" + r),
              h.append("snr", n),
              c().post(
                d.TS.STORE_BASE_URL + "ajaxreportproductaction/" + N + "/",
                h,
              );
          }
        }
        const _t = new Y.T();
      },
      18614: (ht, it, p) => {
        p.d(it, { l: () => Y, m: () => F });
        var j = p(14947),
          R = p(76559),
          c = p(7582),
          w = p(77495),
          V = Object.defineProperty,
          nt = Object.getOwnPropertyDescriptor,
          Z = (k, o, d, f) => {
            for (
              var _ = f > 1 ? void 0 : f ? nt(o, d) : o, D = k.length - 1, B;
              D >= 0;
              D--
            )
              (B = k[D]) && (_ = (f ? B(o, d, _) : B(_)) || _);
            return f && _ && V(o, d, _), _;
          };
        const E = class tt {
          constructor() {
            (0, j.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(o, d, f = "") {
            const D = new RegExp(`\\W${d}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(o);
            return D ? D[1] : f;
          }
          static ParseCalendarEventPresentersFromText(o) {
            const d =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              f = new Array();
            for (;;) {
              const _ = d.exec(o);
              if (_ === null) break;
              const D = _[1],
                B = _[2],
                et = tt.GetBBCodeParam(D, "steamid"),
                x = {
                  steamID: et ? new R.b(et) : void 0,
                  name: tt.GetBBCodeParam(D, "name"),
                  title: tt.GetBBCodeParam(D, "title"),
                  company: tt.GetBBCodeParam(D, "company"),
                  photo: tt.GetBBCodeParam(D, "photo"),
                  bio: B,
                };
              f.push(x);
            }
            return f;
          }
          static ParseEventModelPresenters(o, d) {
            const f = o.GetDescriptionWithFallback(d) ?? "";
            return tt.ParseCalendarEventPresentersFromText(f);
          }
          static ParseEventAppReferencesFromText(o) {
            const d = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              f = new Set();
            for (;;) {
              const _ = d.exec(o);
              if (_ === null) break;
              const D = _[1];
              f.add(Number(D));
            }
            return f;
          }
          static ParseEventModelAppReferences(o, d) {
            const f = o.GetDescriptionWithFallback(d) ?? "",
              _ = tt.ParseEventAppReferencesFromText(f);
            if (o.jsondata?.referenced_appids)
              for (const D of o.jsondata.referenced_appids) _.add(D);
            return _;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(o) {
            const d = c.HD.GetTimeNowWithOverride(),
              _ = o.GetCalendarItemsInTimeRange(d - 3600, d);
            for (const x of _.rgCalendarItems)
              w.O3.QueueLoadPartnerEvent(x.clanid, x.unique_id);
            const D = _.rgCalendarItems.map((x) =>
                w.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  R.b.InitFromClanID(x.clanid),
                  x.unique_id,
                  0,
                ),
              ),
              B = await Promise.all(D),
              et = new Map();
            for (const x of B)
              if (x && !(x.endTime && x.endTime < d))
                for (const ot of x.GetBroadcastWhitelistAsSteamIDs()) {
                  const K = et.get(ot);
                  K ? K.push(x) : et.set(ot, [x]);
                }
            return et;
          }
          IsBroadcasterAlreadyBound(o, d) {
            const f = this.m_mapBroadcasterSteamIDToEvents.get(o) ?? [],
              _ = f.length;
            if ((d ? d.length : 0) != _) return !1;
            for (let B = 0; B < _; B++) if (f[B] != d[B].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(o, d) {
            let f = new Map();
            for (const _ of o) {
              if (!_) continue;
              const D = tt.ParseEventModelPresenters(_, d);
              for (const B of D)
                B.steamID && f.set(B.steamID.ConvertTo64BitString(), B);
            }
            return f;
          }
          RemoveCachedDataIfNotInMap(o) {
            const d = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((f, _) => {
              o.has(_) || d.push(_);
            }),
              d.forEach((f) => {
                this.m_mapBroadcasterSteamIDData.delete(f),
                  this.m_mapBroadcasterSteamIDToEvents.delete(f);
              });
          }
          static BuildAppIDRefsForEventList(o, d) {
            const f = new Set();
            for (const _ of o)
              tt.ParseEventModelAppReferences(_, d).forEach((B) => f.add(B));
            return Array.from(f);
          }
          UpdateCachedDataFromEvents(o, d) {
            o.forEach((f, _) => {
              if (this.IsBroadcasterAlreadyBound(_, f)) return;
              const D = {
                m_mapPresenters: tt.BuildSteamIDToPresenterMapFromEventList(
                  f,
                  d,
                ),
                m_rgAppIDs: tt.BuildAppIDRefsForEventList(f, d),
              };
              this.m_mapBroadcasterSteamIDData.set(_, D),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  _,
                  f.map((B) => B.GID ?? ""),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(o, d) {
            const f = await this.BuildBroadcasterSteamIDToActiveEventMap(o);
            this.RemoveCachedDataIfNotInMap(f),
              this.UpdateCachedDataFromEvents(f, d);
          }
          GetPresenterMapForBroadcasterSteamID(o) {
            return this.m_mapBroadcasterSteamIDData.get(o)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(o) {
            return this.m_mapBroadcasterSteamIDData.get(o)?.m_rgAppIDs;
          }
        };
        Z([j.sH], E.prototype, "m_mapBroadcasterSteamIDData", 2);
        let F = E;
        const Y = new F();
      },
      22950: (ht, it, p) => {
        p.d(it, { es: () => J, fK: () => Tt, a0: () => Mt, fO: () => bt });
        var j = p(41735),
          R = p.n(j),
          c = p(14947),
          w = p(6600),
          V = p(90828);
        function nt(S, t, e) {
          return [S, t, e];
        }
        class Z extends Error {}
        class E extends V.J8 {
          m_appid;
          constructor(t) {
            super(), (this.m_appid = t || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(t) {
            if (typeof t != "string" || !t.match(/^#[0-9a-fA-F]{6}$/))
              throw new Z("expected color string");
            return [
              parseInt(t.substring(1, 3), 16),
              parseInt(t.substring(3, 5), 16),
              parseInt(t.substring(5, 7), 16),
            ];
          }
          parseString(t) {
            if (typeof t == "string") return t;
            throw new Z("expected string");
          }
          parseNumber(t) {
            if (typeof t == "number") return t;
            throw new Z("expected number");
          }
          parseDate(t) {
            if (typeof t == "number") return new Date(t);
            throw new Z("expected timestamp");
          }
          parseArray(t, e) {
            let a = [];
            if (typeof t != "object" || !Array.isArray(t))
              throw new Z("expected array");
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
              throw new Z("expected object");
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
        var F = p(48937),
          Y = p(89083),
          k = p(13854),
          o = p(3166),
          d = p(27066),
          f = p(7409),
          _ = p(14043),
          D = p(8323),
          B = p(72604),
          et = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          ot = (S, t, e, a) => {
            for (
              var s = a > 1 ? void 0 : a ? x(t, e) : t, m = S.length - 1, u;
              m >= 0;
              m--
            )
              (u = S[m]) && (s = (a ? u(t, e, s) : u(s)) || s);
            return a && s && et(t, e, s), s;
          };
        const K = 250,
          ct = 250;
        class $ {
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
            (0, c.Gn)(this), (this.m_elVideo = t);
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
              y = { urls: ["turn:" + s], username: e, credential: a },
              A = { iceServers: [u, y], iceTransportPolicy: "relay" };
            const X = new RTCPeerConnection(A);
            (this.m_peerConnection = X),
              (X.oniceconnectionstatechange = ((Q) => {
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
              (X.onicecandidate = ((Q) => {
                if (Q.candidate) {
                  const st = new FormData();
                  st.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    st.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    st.append("sdp_mid", String(Q.candidate.sdpMid)),
                    st.append(
                      "sdp_mline_index",
                      String(Q.candidate.sdpMLineIndex),
                    ),
                    st.append("candidate", Q.candidate.candidate),
                    R()
                      .post(
                        `${o.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        st,
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
              (X.ontrack = ((Q) => {
                Q.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = Q.streams[0]),
                  this.Play());
              }).bind(this)),
              X.setRemoteDescription({ type: "offer", sdp: m }).then(
                async () => {
                  await X.setLocalDescription(await X.createAnswer());
                  const Q = new FormData();
                  Q.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    Q.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    Q.append("answer", X.localDescription?.sdp ?? "");
                  try {
                    await R()
                      .post(
                        `${o.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        Q,
                      )
                      .then((st) => {
                        const mt = st.data;
                        if (!(mt.success && mt.success == B.R))
                          throw new Error(String(mt.success));
                      });
                  } catch (st) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + st,
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
              await R()
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
                          const y = new RTCIceCandidate({
                            sdpMid: u.sdp_mid,
                            sdpMLineIndex: u.sdp_mline_index,
                            candidate: u.candidate,
                          });
                          m.addIceCandidate(y).catch((A) => console.error(A));
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
              s = (u, y) => !1,
              m = (u, y) => !1;
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
                  ct,
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
                ct,
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
            return t.push({ id: _.Y, displayName: "Auto", selected: !0 }), t;
          }
          SetVideoRepresentation(t) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        ot([d.o], $.prototype, "PlayWebRTC", 1),
          ot([c.XI.bound], $.prototype, "CaptureStatsForDisplay", 1),
          ot([d.o], $.prototype, "OnVideoPause", 1),
          ot([d.o], $.prototype, "OnVideoResize", 1);
        var St = p(99412),
          ut = p(90711),
          _t = p(41635),
          N = p(71742),
          r = p(18210),
          n = p(34592),
          h = p(40497),
          l = p(9032),
          I = p(35038),
          b = p(77008),
          q = p(60298),
          M = p(80613),
          T = p.n(M),
          i = p(75245);
        function Lt(S) {
          return "unknown ETrailerConvertState ( " + S + " )";
        }
        function zt(S) {
          return "unknown ETrailerConvertTargetType ( " + S + " )";
        }
        class W extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.video_id || i.Sg(W.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (T().BinaryReader)(t),
              a = new W();
            return W.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(W.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(W.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class U extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.video_id || i.Sg(U.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
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
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, e) {
            return i.BT(U.M(), t, e);
          }
          static fromObject(t) {
            return i.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new U();
            return U.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(U.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(U.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class H extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.encryption_key || i.Sg(H.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (T().BinaryReader)(t),
              a = new H();
            return H.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(H.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(H.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class C extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.app_id || i.Sg(C.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
            let e = new (T().BinaryReader)(t),
              a = new C();
            return C.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class L extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              L.prototype.app_id || i.Sg(L.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
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
                    opf_settings: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
            let e = new (T().BinaryReader)(t),
              a = new L();
            return L.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(L.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(L.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class P extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.app_id || i.Sg(P.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
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
            let e = new (T().BinaryReader)(t),
              a = new P();
            return P.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(P.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(P.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class O extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.bookmarks || i.Sg(O.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
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
            let e = new (T().BinaryReader)(t),
              a = new O();
            return O.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(O.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(O.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.appids || i.Sg(z.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
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
            let e = new (T().BinaryReader)(t),
              a = new z();
            return z.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class G extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.bookmarks || i.Sg(G.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { bookmarks: { n: 1, c: P, r: !0, q: !0 } },
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
            let e = new (T().BinaryReader)(t),
              a = new G();
            return G.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return i.zj(G.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            i.i0(G.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var yt;
        ((S) => {
          function t(s, m, u) {
            return s.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, I.I8)(W, m, u),
              U,
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
              G,
              { ePrivilege: 1 },
            );
          }
          S.GetVideoBookmarks = a;
        })(yt || (yt = {}));
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
              (0, I.I8)(C, a, s),
              L,
              { ePrivilege: 1 },
            );
          }
          S.ClientGetOPFSettings = t;
        })(wt || (wt = {}));
        class at {
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
            let y = this.m_mapBookmarks.get(t);
            if (y) {
              let A = !1;
              y.app_id() != t && ((A = !0), y.set_app_id(t)),
                y.playback_position_in_seconds() != e &&
                  ((A = !0), y.set_playback_position_in_seconds(e)),
                (a = a || "0"),
                y.video_track_id() != a && (y.set_video_track_id(a), (A = !0)),
                (s = s || "0"),
                y.audio_track_id() != s && (y.set_audio_track_id(s), (A = !0)),
                (m = m || "0"),
                m != y.timedtext_track_id() &&
                  (y.set_timedtext_track_id(m), (A = !0)),
                A &&
                  (u.Body().add_bookmarks(y),
                  yt.SetVideoBookmark(this.m_transport, u));
            }
          }
          static Get() {
            return (
              at.s_VODStore ||
                ((at.s_VODStore = new at()), at.s_VODStore.Init()),
              at.s_VODStore
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
              let a = await R().get(t, { params: e, withCredentials: !0 });
              if (
                a &&
                a.status == 200 &&
                a.data &&
                a.data.success == B.R &&
                a.data.webapi_token
              ) {
                this.m_transport = (0, q.C)(
                  new b.D(o.TS.WEBAPI_BASE_URL, a.data.webapi_token),
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
        class Pt {
          m_appid;
          constructor(t) {
            this.m_appid = t;
          }
          async SetBookmark(t, e, a, s) {
            o.iA.logged_in &&
              at
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
              ? at.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
        var ft = p(44930),
          Et = Object.defineProperty,
          Ot = Object.getOwnPropertyDescriptor,
          g = (S, t, e, a) => {
            for (
              var s = a > 1 ? void 0 : a ? Ot(t, e) : t, m = S.length - 1, u;
              m >= 0;
              m--
            )
              (u = S[m]) && (s = (a ? u(t, e, s) : u(s)) || s);
            return a && s && Et(t, e, s), s;
          };
        const It = 1800,
          At = 1e3,
          Wt = 5 * 1e3,
          bt = 7;
        var Tt = ((S) => (
          (S[(S.None = 0)] = "None"),
          (S[(S.Unlocking = 1)] = "Unlocking"),
          (S[(S.Loading = 2)] = "Loading"),
          (S[(S.Ready = 3)] = "Ready"),
          (S[(S.Error = 4)] = "Error"),
          S
        ))(Tt || {});
        async function Ut(S, t, e) {
          if (!t) return;
          let a = new FormData();
          a.append("steamid", S),
            a.append("broadcastid", t),
            a.append("viewertoken", e);
          try {
            await R().post(o.TS.CHAT_BASE_URL + "broadcast/stopwatching", a);
          } catch {}
        }
        class gt {
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
            if ((0, F.Mc)() || (0, F.aM)()) {
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
        class dt {
          constructor() {
            (0, c.Gn)(this);
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
        g([c.sH], dt.prototype, "m_ulBroadcastID", 2),
          g([c.sH], dt.prototype, "m_eWatchState", 2),
          g([c.sH], dt.prototype, "m_strStateDescription", 2),
          g([c.XI], dt.prototype, "SetState", 1);
        class rt {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + bt;
          m_nAppID = bt;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new D.LU();
          m_nRefCount = 0;
          constructor(t) {
            (0, c.Gn)(this), (this.m_steamIDBroadcast = t);
          }
        }
        g([c.sH], rt.prototype, "m_bInitialized", 2),
          g([c.sH], rt.prototype, "m_strTitle", 2),
          g([c.sH], rt.prototype, "m_strAppId", 2),
          g([c.sH], rt.prototype, "m_nAppID", 2),
          g([c.sH], rt.prototype, "m_strAppTitle", 2),
          g([c.sH], rt.prototype, "m_strThumbnailUrl", 2),
          g([c.sH], rt.prototype, "m_nViewerCount", 2),
          g([c.sH], rt.prototype, "m_bIsOnline", 2);
        class pt {
          constructor() {
            (0, c.Gn)(this);
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
        g([c.sH], pt.prototype, "m_eWatchState", 2),
          g([c.sH], pt.prototype, "m_strStateDescription", 2),
          g([c.XI], pt.prototype, "SetState", 1);
        class Ht extends pt {
          m_clipID;
          m_data;
        }
        class Ct extends pt {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class vt {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: "0" };
          m_schSaveSettings = new D.LU();
          m_broadcastInfos = {};
          constructor() {
            (0, c.Gn)(this), this.LoadBroadcastSettings();
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
              { nVolume: u, bMuted: y } = this.m_broadcastSettings,
              A = new v(t, u, y, a);
            return (
              A.SetBroadcastSteamID(e),
              m.m_rgVideos.push(A),
              (m.m_bWebRTC = s),
              !(0, F.Mc)() && !(0, F.aM)() && new gt().UnlockH264(m, A),
              A
            );
          }
          CreateClipVideo(t, e, a) {
            let s = this.GetOrCreateClip(e),
              { nVolume: m, bMuted: u } = this.m_broadcastSettings,
              y = new v(t, m, u, a);
            return (
              y.SetBroadcastClipID(e),
              s.m_rgVideos.push(y),
              !(0, F.Mc)() && !(0, F.aM)() && new gt().UnlockH264(s, y),
              y
            );
          }
          CreateVODVideo(t, e, a) {
            let s = this.GetOrCreateVOD(e),
              { nVolume: m, bMuted: u } = this.m_broadcastSettings,
              y = new v(t, m, u, a);
            return (
              y.SetBroadcastAppIDVOD(e),
              s.m_rgVideos.push(y),
              !(0, F.Mc)() && !(0, F.aM)() && new gt().UnlockH264(s, y),
              y
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
                  Ut(
                    e,
                    a.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                _t.Wp(a.m_rgVideos, (s) => s == t),
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
            if (!t) return new rt("");
            if (!this.m_broadcastInfos[t]) {
              const e = (0, c.sH)(new rt(t));
              this.m_broadcastInfos[t] = e;
            }
            return this.m_broadcastInfos[t];
          }
          GetOrCreateBroadcast(t) {
            let e = this.m_mapBroadcasts.get(t);
            return (
              e ||
              ((e = new dt()),
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
              ((e = new Ht()),
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
              ((e = new Ct()),
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
              const m = await R().get(
                `${o.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: s },
              );
              if (!m || !m.data || !m.data.success || m.data.success != B.R) {
                t.m_bInitialized = !0;
                return;
              }
              const u = m.data;
              (0, c.h5)(() => {
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
                const y = u.update_interval;
                y &&
                  typeof y == "number" &&
                  t.m_schUpdateTimeout.Schedule(y * 1e3, () =>
                    this.LoadBroadcastInfo(t),
                  );
              });
            } catch (m) {
              console.error(m);
            }
          }
          DelayedGetBroadcastManifest(t, e, a = Date.now()) {
            t.m_schManifestTimeout.Schedule(Wt, () =>
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
              m = await R().get(
                o.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: s, withCredentials: !0 },
              );
            } catch (A) {
              let X = (0, n.H)(A);
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
            let y = u.success;
            if (y == "ready")
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
            else if (y == "waiting") {
              t.SetState(2, (0, r.we)("#BroadcastWatch_WaitingForResponse"));
              let A = Date.now() - a;
              if (A > 60 * 1e3) {
                t.SetState(4, (0, r.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let X = A > 30 * 1e3 ? u.retry : 5e3;
              t.m_schManifestTimeout.Schedule(X, () =>
                this.GetBroadcastManifest(t, e, a),
              );
            } else
              y == "waiting_for_start"
                ? (t.SetState(2, (0, r.we)("#BroadcastWatch_WaitingForStart")),
                  t.m_schManifestTimeout.Schedule(u.retry, () =>
                    this.GetBroadcastManifest(t, e, a),
                  ))
                : y == "waiting_for_reconnect"
                  ? (t.SetState(
                      2,
                      (0, r.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    t.m_schManifestTimeout.Schedule(u.retry, () =>
                      this.GetBroadcastManifest(t, e, a),
                    ))
                  : y == "end"
                    ? t.SetState(4, (0, r.we)("#BroadcastWatch_NotAvailable"))
                    : y == "too_many_broadcasts"
                      ? t.SetState(
                          4,
                          (0, r.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : y == "system_not_supported"
                        ? t.SetState(
                            4,
                            (0, r.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : y == "user_restricted"
                          ? t.SetState(
                              4,
                              (0, r.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : y == "poor_upload_quality"
                            ? t.SetState(
                                4,
                                (0, r.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : y == "request_failed"
                              ? t.SetState(
                                  4,
                                  (0, r.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : y == "too_many_viewers"
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
              s = await R().get(
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
            let a = await h.L.fetchQuery((0, l.uj)(t.m_nAppIDVOD)).catch(
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
                  ? at.Get().SetBookmarkForApp(t.m_nAppIDVOD, a.bookmark)
                  : at.Get().InitializeBookmarkForApp(t.m_nAppIDVOD),
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
              R().post(o.TS.CHAT_BASE_URL + "broadcast/heartbeat/", e),
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
          BroadcastDownloadFailed(t, e = !0, a = Y.N_.Invalid) {
            t.Stop();
            let s = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            s &&
              s.m_eWatchState != 2 &&
              (s.m_bWebRTC && e && (s.m_bWebRTC = !1),
              a == Y.N_.StreamGone
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
              this.m_schSaveSettings.Schedule(At, () => {
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
        g([c.sH], vt.prototype, "m_mapBroadcasts", 2);
        var Mt = ((S) => (
          (S[(S.Timeline = 1)] = "Timeline"),
          (S[(S.Minimap = 2)] = "Minimap"),
          S
        ))(Mt || {});
        class v {
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
          m_rgMarkers = c.sH.array();
          m_rgSegments = c.sH.array();
          m_rgRegions = c.sH.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(t, e, a, s) {
            (0, c.Gn)(this),
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
            (0, N.wT)(!this.m_player, "Initialized twice?"),
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
              let a = new Y.Zn(this.m_elVideo);
              a.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = a),
                a.PlayMPD(
                  t.m_data.url,
                  t.m_data.hls_url,
                  void 0,
                  t.m_strCDNAuthUrlParameters,
                );
            } else {
              let a = new $(this.m_elVideo);
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
            let e = new Y.Zn(this.m_elVideo);
            e.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = e),
              e.PlayMPD(t.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(t) {
            this.InitPlayer();
            let e = new Y.Zn(this.m_elVideo);
            e.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = e),
              o.iA.logged_in &&
                t.m_nAppIDVOD &&
                e.SetBookmarkAdapter(new Pt(t.m_nAppIDVOD)),
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
                    this.m_nVideoEndPos - this.m_nPlaybackTime < Y.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      e();
                    }, 400));
                }
                (this.m_bBuffering = t.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < Y.Br),
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
            let e = t.detail || Y.N_.Invalid;
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
        g([c.sH], v.prototype, "m_player", 2),
          g([c.sH], v.prototype, "m_bPaused", 2),
          g([c.sH], v.prototype, "m_nPlaybackTime", 2),
          g([c.sH], v.prototype, "m_bBuffering", 2),
          g([c.sH], v.prototype, "m_bOnLiveEdge", 2),
          g([c.sH], v.prototype, "m_nVolume", 2),
          g([c.sH], v.prototype, "m_bMuted", 2),
          g([c.sH], v.prototype, "m_bUserInputNeeded", 2),
          g([c.sH], v.prototype, "m_bIsReplay", 2),
          g([c.sH], v.prototype, "m_nTimelineDuration", 2),
          g([c.sH], v.prototype, "m_nVideoStartPos", 2),
          g([c.sH], v.prototype, "m_nVideoEndPos", 2),
          g([c.sH], v.prototype, "m_editorStartTime", 2),
          g([c.sH], v.prototype, "m_editorEndTime", 2),
          g([c.XI.bound], v.prototype, "StartBroadcast", 1),
          g([c.XI.bound], v.prototype, "StartClip", 1),
          g([c.XI.bound], v.prototype, "StartVOD", 1),
          g([d.o], v.prototype, "OnVideoPlaying", 1),
          g([d.o], v.prototype, "OnVideoPause", 1),
          g([c.XI.bound], v.prototype, "OnVideoTimeUpdate", 1),
          g([d.o], v.prototype, "OnVolumeUpdated", 1),
          g([c.XI.bound], v.prototype, "OnGameDataUpdate", 1),
          g([d.o], v.prototype, "OnDownloadFailed", 1),
          g([d.o], v.prototype, "OnWebRTCRetry", 1),
          g([d.o], v.prototype, "OnWebRTCFailed", 1),
          g([d.o], v.prototype, "OnUserInputNeeded", 1);
        const J = new vt();
        window.uiBroadcastWatchStore = J;
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [14867],
    {
      6600: (ct, Y, m) => {
        m.d(Y, { td: () => x });
        var v = m(14947),
          F = m(3166),
          c = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          K = (k, o, d, y) => {
            for (
              var _ = y > 1 ? void 0 : y ? D(o, d) : o, g = k.length - 1, w;
              g >= 0;
              g--
            )
              (w = k[g]) && (_ = (y ? w(o, d, _) : w(_)) || _);
            return y && _ && c(o, d, _), _;
          };
        const nt = F.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          q = F.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class P {
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
            (0, v.Gn)(this), this.init(o);
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
        K([v.sH], P.prototype, "bValid", 2),
          K([v.sH], P.prototype, "stream", 2),
          K([v.sH], P.prototype, "name", 2),
          K([v.sH], P.prototype, "appName", 2),
          K([v.sH], P.prototype, "appID", 2),
          K([v.sH], P.prototype, "link", 2),
          K([v.sH], P.prototype, "linkName", 2),
          K([v.sH], P.prototype, "tabIcon", 2),
          K([v.sH], P.prototype, "offlineImage", 2),
          K([v.sH], P.prototype, "gidEvent", 2);
        let x = new P({
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
      90828: (ct, Y, m) => {
        m.d(Y, { J8: () => c, X8: () => F });
        var v = ((D) => (
            (D[(D.Hover = 0)] = "Hover"),
            (D[(D.ClickPopup = 1)] = "ClickPopup"),
            (D[(D.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            D
          ))(v || {}),
          F = ((D) => (
            (D[(D.Chat = 0)] = "Chat"),
            (D[(D.Notification = 1)] = "Notification"),
            (D[(D.Error = 2)] = "Error"),
            D
          ))(F || {});
        class c {}
      },
      25317: (ct, Y, m) => {
        m.d(Y, {
          M5: () => N,
          MU: () => lt,
          MX: () => yt,
          Rt: () => et,
          U7: () => ft,
          fn: () => Z,
          j: () => ut,
        });
        var v = m(10142),
          F = m(41735),
          c = m.n(F),
          D = m(14947),
          K = m(72604),
          nt = m(76559),
          q = m(61639),
          P = m(22950),
          x = m(7582),
          Q = m(28462),
          k = m(34592),
          o = m(3166),
          d = m(34032),
          y = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          g = (V, r, s, p) => {
            for (
              var u = p > 1 ? void 0 : p ? _(r, s) : r, I = V.length - 1, S;
              I >= 0;
              I--
            )
              (S = V[I]) && (u = (p ? S(r, s, u) : S(u)) || u);
            return p && u && y(r, s, u), u;
          };
        let w = !1;
        function Z(V) {
          return !!(V && V.thumbnail_http_address);
        }
        function N(V, r) {
          if (r || V) {
            const s = r || V;
            return !!(s && ut.Get().BIsAppStreaming(s));
          }
          return !1;
        }
        const j = class dt {
          constructor() {
            (0, D.Gn)(this);
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
            const s = this.GetStreams(r);
            return !!(s && s.length > 0);
          }
          AddCallbackOnNewContext(r, s, p) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(r), {
              name: s,
              fnCallback: p,
            });
          }
          ClearCallbackOnNewContext(r) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(r),
              null,
            );
          }
          GetPlayReadyStream(r) {
            let s = this.GetStreamsLookupKeyFromDef(r);
            return this.m_playReadyStream.get(s);
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
            const s = this.GetStreams(r);
            return s ? s.filter((p) => Z(p)).length : 0;
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
              this.m_lookupStreams.forEach((s, p) => {
                console.log(p, s.length);
              });
          }
          GetStreams(r) {
            const s = this.GetStreamsLookupKeyFromDef(r);
            return this.m_lookupStreams.get(s);
          }
          GetBroadcastURL(r) {
            let s = null;
            return (
              r.steamid
                ? (s = new nt.b(r.steamid))
                : (s = nt.b.InitFromAccountID(r.accountid)),
              o.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                s.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(r) {
            let s = !1;
            return (
              this.m_lookupStreams.forEach((p) => {
                s ||
                  (s =
                    !!p &&
                    p.some(
                      (u) =>
                        P.es.GetOrCreateBroadcastInfo(u.steamid).m_nAppID === r,
                    ));
              }),
              s
            );
          }
          GetStreamsForAppID(r) {
            const s = new Array();
            return (
              this.m_lookupStreams.forEach((p) => {
                p?.forEach((u) => {
                  P.es.GetOrCreateBroadcastInfo(u.steamid).m_nAppID === r &&
                    s.push(u);
                });
              }),
              s
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
              let s = (0, o.Tc)("broadcastuser", "application_config");
              if (!s)
                try {
                  let p =
                    o.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  s = (await c().get(p, { params: {}, cancelToken: r.token }))
                    .data;
                } catch (p) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, k.H)(p).strErrorMsg,
                  ),
                    (s = { bHideStoreBroadcast: !1 });
                }
              (0, D.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  s.bHideStoreBroadcast),
                  (this.m_bCollapsed = s.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          }
          async SetupEmbeddableVOD(r, s) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              await v.A.Get().QueueAppRequest(r.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const p = v.A.Get().GetApp(r.nAppIDVOD),
              u = new d.TT();
            if (
              ((u.accountid = 0),
              (u.nAppIDVOD = r.nAppIDVOD),
              (u.default_selection_priority = d.mY.k_ePrimary),
              (u.current_selection_priority = d.mY.k_ePrimary),
              (u.thumbnail_http_address = p?.GetAssets().GetHeaderURL() || ""),
              (u.title = p?.GetName() || ""),
              this.GetStreams(r).unshift(u),
              s)
            ) {
              const I = this.GetStreamsLookupKeyFromDef(r);
              this.m_playReadyStream.set(I, u);
            }
          }
          async HintLoadEmbeddablePreviewStreams(r) {
            let s = null,
              p = {
                eventid: r.event ? r.event.GID : void 0,
                previewAccounts:
                  r.bIsPreview && r.accountIDs
                    ? r.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (s = await c().get(
                  o.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: p },
                )),
                this.HandleHintLoadBroadcastResponse(r, s.data)
              );
            } catch (u) {
              let I = (0, k.H)(u);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  I.strErrorMsg,
                I,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(r) {
            let s = this.MapEmbeddableStreamToRequest(r),
              p = this.GetStreamsLookupKeyFromParam(s);
            if (!this.m_inFlightRequests.has(p)) {
              this.m_lookupKeyToEmbedStreamDef.set(p, r);
              const u = this.InternalHintLoadEmbeddableStreams(r, s);
              this.m_inFlightRequests.set(p, u);
            }
            return this.m_inFlightRequests.get(p);
          }
          async InternalHintLoadEmbeddableStreams(r, s) {
            let p = (0, o.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, d.h7)(p)) return this.HandleHintLoadBroadcastResponse(r, p);
            try {
              let u = null;
              return (
                (u = await c().get(
                  o.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: s },
                )),
                this.HandleHintLoadBroadcastResponse(r, u.data)
              );
            } catch (u) {
              let I = (0, k.H)(u);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + I.strErrorMsg,
                I,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(r, s) {
            (this.m_bUseFakeData = !1),
              r.bIsPreview &&
                (s?.filtered?.length > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      r.event,
                      s.filtered,
                    )
                  : ((s = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              s.broadcast_chat_visibility &&
                (this.m_pageChatStatus = s.broadcast_chat_visibility);
            const p = new Array();
            (0, D.h5)(() => {
              s.filtered.forEach((S) => {
                if (!S.steamid) {
                  const R = nt.b.InitFromAccountID(S.accountid);
                  S.steamid = R.ConvertTo64BitString();
                }
                const at = P.es.GetOrCreateBroadcastInfo(S.steamid),
                  ot = S.appid ? Number(S.appid) : P.fO;
                (at.m_nAppID = ot),
                  (at.m_strAppId = "" + ot),
                  S.current_selection_priority === void 0 &&
                    (S.current_selection_priority =
                      S.default_selection_priority),
                  ot != P.fO && p.push(ot);
              });
            });
            const u = this.GetStreamsLookupKeyFromDef(r);
            if (
              (this.m_lookupStreams.set(u, s.filtered),
              this.m_onLoadContextCall.has(u))
            ) {
              const S = this.m_onLoadContextCall.get(u);
              S && S.fnCallback();
            }
            const I = this.GetStreams(r);
            return await this.AutoStartVideoStream(r, I), I;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(r, s) {
            const p = Array.from(r.jsondata.broadcast_whitelist ?? []),
              u = Array.from(r.jsondata.broadcast_priority ?? []),
              I = new Map();
            for (let S = 0; S < p.length && !(S >= u.length); S++)
              I.set(p[S], (0, d.PH)(u[S]));
            s.forEach((S) => {
              const at = Number(S.accountid);
              I.has(at) && (S.current_selection_priority = I.get(at));
            });
          }
          async AutoStartVideoStream(r, s) {
            let p = this.GetStreamsLookupKeyFromDef(r);
            if (this.m_bMapHasStartedVideo.get(p)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(p)) {
                const u = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: d.mY.k_eGeneral,
                  current_selection_priority: d.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(p, u);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(r, s);
          }
          async PlayFromAvailableStreams(r, s, p = !1) {
            const u = new Set();
            for (;;) {
              const I = s.filter((ot) => !u.has(ot) && (!p || !ot.nAppIDVOD)),
                S = this.GetAutoStartStream(I);
              if (!S) return null;
              if (await this.AttemptToPlayStream(r, S)) return S;
              u.add(S);
            }
          }
          async AttemptToPlayStream(r, s) {
            let p = this.GetStreamsLookupKeyFromDef(r);
            if (
              (this.m_bMapHasStartedVideo.set(p, !0),
              this.m_mapBroadcastChecked.has(s.accountid) ||
                this.m_mapBroadcastChecked.set(
                  s.accountid,
                  this.InternalAttemptToPlayStream(r, s),
                ),
              s.nAppIDVOD)
            )
              this.m_playReadyStream.set(p, s);
            else {
              const u = await this.m_mapBroadcastChecked.get(s.accountid);
              if (u?.success == K.R) {
                (s.steamid = u.steamid),
                  this.m_playReadyStream.set(p, s),
                  this.GetConcurrentStreams(r) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = s.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((S) => S(s));
                const I = P.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID;
                ft(I, q.Mc.iy, s.snr);
              } else return null;
            }
            return s;
          }
          async InternalAttemptToPlayStream(r, s) {
            let p = this.GetStreamsLookupKeyFromDef(r),
              u = null;
            try {
              const I = o.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let S = {
                broadcastaccountid: s.accountid,
                viewer_token: P.es.GetViewerToken(),
                origin: self.origin,
              };
              return (u = await c().get(I, { params: S })), u.data;
            } catch (I) {
              let S = (0, k.H)(I);
              console.error(
                "Broadcast.AttemptToPlayStream: " + S.strErrorMsg,
                S,
              );
            }
            return null;
          }
          GetAutoStartStream(r) {
            if (!r) return null;
            const s = r.filter((S) => Z(S)),
              p = s.reduce((S, at) => Math.max(S, et(at)), 0),
              u = s.filter((S) => et(S) === p);
            if (u.length === 0) return null;
            const I = Math.floor(Math.random() * u.length);
            return u[I];
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
              test: w,
              cc: o.TS.COUNTRY,
              l: o.TS.LANGUAGE,
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
              dt.s_GlobalStore ||
                ((dt.s_GlobalStore = new dt()), dt.s_GlobalStore.Init()),
              dt.s_GlobalStore
            );
          }
          Init() {}
        };
        g([D.sH], j.prototype, "m_lookupStreams", 2),
          g([D.sH], j.prototype, "m_playReadyStream", 2),
          g([D.sH], j.prototype, "m_pageChatStatus", 2),
          g([D.sH], j.prototype, "m_streamChatStatus", 2),
          g([D.sH], j.prototype, "m_bUserChatExpanded", 2),
          g([D.sH], j.prototype, "m_bUserPreferenceHideBroadcastByDefault", 2),
          g([D.sH], j.prototype, "m_bCollapsed", 2),
          g([D.XI], j.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          g([D.XI], j.prototype, "AttemptToPlayStream", 1);
        let ut = j;
        function et(V) {
          return V.current_selection_priority || d.mY.k_eGeneral;
        }
        function lt(V) {
          V.sort((r, s) =>
            et(r) != et(s)
              ? et(s) - et(r)
              : r.viewer_count != s.viewer_count
                ? s.viewer_count - r.viewer_count
                : s.accountid - r.accountid,
          );
        }
        async function ft(V, r, s) {
          if (V > 0 && V != 7 && s) {
            let p = new URLSearchParams();
            p.append("page_action", "" + r),
              p.append("snr", s),
              c().post(
                o.TS.STORE_BASE_URL + "ajaxreportproductaction/" + V + "/",
                p,
              );
          }
        }
        const yt = new Q.T();
      },
      18614: (ct, Y, m) => {
        m.d(Y, { l: () => Q, m: () => x });
        var v = m(14947),
          F = m(76559),
          c = m(7582),
          D = m(77495),
          K = Object.defineProperty,
          nt = Object.getOwnPropertyDescriptor,
          q = (k, o, d, y) => {
            for (
              var _ = y > 1 ? void 0 : y ? nt(o, d) : o, g = k.length - 1, w;
              g >= 0;
              g--
            )
              (w = k[g]) && (_ = (y ? w(o, d, _) : w(_)) || _);
            return y && _ && K(o, d, _), _;
          };
        const P = class tt {
          constructor() {
            (0, v.Gn)(this);
          }
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(o, d, y = "") {
            const g = new RegExp(`\\W${d}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(o);
            return g ? g[1] : y;
          }
          static ParseCalendarEventPresentersFromText(o) {
            const d =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              y = new Array();
            for (;;) {
              const _ = d.exec(o);
              if (_ === null) break;
              const g = _[1],
                w = _[2],
                Z = tt.GetBBCodeParam(g, "steamid"),
                N = {
                  steamID: Z ? new F.b(Z) : void 0,
                  name: tt.GetBBCodeParam(g, "name"),
                  title: tt.GetBBCodeParam(g, "title"),
                  company: tt.GetBBCodeParam(g, "company"),
                  photo: tt.GetBBCodeParam(g, "photo"),
                  bio: w,
                };
              y.push(N);
            }
            return y;
          }
          static ParseEventModelPresenters(o, d) {
            const y = o.GetDescriptionWithFallback(d);
            return tt.ParseCalendarEventPresentersFromText(y);
          }
          static ParseEventAppReferencesFromText(o) {
            const d = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              y = new Set();
            for (;;) {
              const _ = d.exec(o);
              if (_ === null) break;
              const g = _[1];
              y.add(Number(g));
            }
            return y;
          }
          static ParseEventModelAppReferences(o, d) {
            const y = o.GetDescriptionWithFallback(d),
              _ = tt.ParseEventAppReferencesFromText(y);
            if (o.jsondata?.referenced_appids)
              for (const g of o.jsondata.referenced_appids) _.add(g);
            return _;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(o) {
            const d = c.HD.GetTimeNowWithOverride(),
              _ = o.GetCalendarItemsInTimeRange(d - 3600, d);
            for (const N of _.rgCalendarItems)
              D.O3.QueueLoadPartnerEvent(N.clanid, N.unique_id);
            const g = _.rgCalendarItems.map((N) =>
                D.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  F.b.InitFromClanID(N.clanid),
                  N.unique_id,
                  0,
                ),
              ),
              w = await Promise.all(g),
              Z = new Map();
            for (const N of w)
              if (N && !(N.endTime && N.endTime < d))
                for (const j of N.GetBroadcastWhitelistAsSteamIDs())
                  Z.has(j) ? Z.get(j).push(N) : Z.set(j, [N]);
            return Z;
          }
          IsBroadcasterAlreadyBound(o, d) {
            const y = this.m_mapBroadcasterSteamIDToEvents.get(o),
              _ = y ? y.length : 0;
            if ((d ? d.length : 0) != _) return !1;
            for (let w = 0; w < _; w++) if (y[w] != d[w].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(o, d) {
            let y = new Map();
            for (const _ of o) {
              if (!_) continue;
              const g = tt.ParseEventModelPresenters(_, d);
              for (const w of g)
                w.steamID && y.set(w.steamID.ConvertTo64BitString(), w);
            }
            return y;
          }
          RemoveCachedDataIfNotInMap(o) {
            const d = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((y, _) => {
              o.has(_) || d.push(_);
            }),
              d.forEach((y) => {
                this.m_mapBroadcasterSteamIDData.delete(y),
                  this.m_mapBroadcasterSteamIDToEvents.delete(y);
              });
          }
          static BuildAppIDRefsForEventList(o, d) {
            const y = new Set();
            for (const _ of o)
              tt.ParseEventModelAppReferences(_, d).forEach((w) => y.add(w));
            return Array.from(y);
          }
          UpdateCachedDataFromEvents(o, d) {
            o.forEach((y, _) => {
              if (this.IsBroadcasterAlreadyBound(_, y)) return;
              const g = {
                m_mapPresenters: tt.BuildSteamIDToPresenterMapFromEventList(
                  y,
                  d,
                ),
                m_rgAppIDs: tt.BuildAppIDRefsForEventList(y, d),
              };
              this.m_mapBroadcasterSteamIDData.set(_, g),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  _,
                  y.map((w) => w.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(o, d) {
            const y = await this.BuildBroadcasterSteamIDToActiveEventMap(o);
            this.RemoveCachedDataIfNotInMap(y),
              this.UpdateCachedDataFromEvents(y, d);
          }
          GetPresenterMapForBroadcasterSteamID(o) {
            return this.m_mapBroadcasterSteamIDData.get(o)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(o) {
            return this.m_mapBroadcasterSteamIDData.get(o)?.m_rgAppIDs;
          }
        };
        q([v.sH], P.prototype, "m_mapBroadcasterSteamIDData", 2);
        let x = P;
        const Q = new x();
      },
      22950: (ct, Y, m) => {
        m.d(Y, { es: () => J, fK: () => At, a0: () => vt, fO: () => gt });
        var v = m(41735),
          F = m.n(v),
          c = m(14947),
          D = m(6600),
          K = m(90828);
        function nt(f, t, e) {
          return [f, t, e];
        }
        class q extends Error {}
        class P extends K.J8 {
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
            let i = t.length;
            for (let l = 0; l < i; ++l)
              try {
                a.push(e(t[l]));
              } catch (h) {
                throw (
                  ((h.message +=
                    `
...while parsing array element ` + l),
                  h)
                );
              }
            return a;
          }
          parseDict(t, e) {
            let a = new Map();
            if (typeof t != "object" || Array.isArray(t))
              throw new q("expected object");
            for (let i in t)
              try {
                a.set(i, e(t[i]));
              } catch (l) {
                throw (
                  ((l.message +=
                    `
...while parsing dictionary element ` + i),
                  l)
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
              i = [];
            for (const l of t)
              l.persistent
                ? (i.length > 0 &&
                    (i[i.length - 1].nTimeEnd = this.convertTime(
                      l.Timestamp,
                      e,
                    )),
                  l.name.length > 0 &&
                    i.push({
                      strTemplateName: l.name,
                      nTimeStart: this.convertTime(l.Timestamp, e),
                      nTimeEnd: -1,
                      color: nt(l.color_r, l.color_g, l.color_b),
                    }))
                : a.push({
                    strTemplateName: l.name,
                    nTime: this.convertTime(l.Timestamp, e),
                    color: nt(l.color_r, l.color_g, l.color_b),
                  });
            return { rgMarkers: a, rgSegments: i };
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
        var x = m(48937),
          Q = m(89083),
          k = m(13854),
          o = m(3166),
          d = m(27066),
          y = m(7409),
          _ = m(14043),
          g = m(8323),
          w = m(72604),
          Z = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          j = (f, t, e, a) => {
            for (
              var i = a > 1 ? void 0 : a ? N(t, e) : t, l = f.length - 1, h;
              l >= 0;
              l--
            )
              (h = f[l]) && (i = (a ? h(t, e, i) : h(i)) || i);
            return a && i && Z(t, e, i), i;
          };
        const ut = 250,
          et = 250;
        class lt {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new g.LU();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new g.Ji();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new g.LU();
          m_stats = new y._L();
          constructor(t) {
            (0, c.Gn)(this), (this.m_elVideo = t);
          }
          async PlayMPD(t, e, a) {}
          async PlayWebRTC(t, e, a, i, l) {
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
            let h = { urls: ["stun:" + i] },
              b = { urls: ["turn:" + i], username: e, credential: a },
              O = { iceServers: [h, b], iceTransportPolicy: "relay" };
            const X = new RTCPeerConnection(O);
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
                        (Bt.success && Bt.success == w.R) ||
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
              X.setRemoteDescription({ type: "offer", sdp: l }).then(
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
                        if (!(mt.success && mt.success == w.R))
                          throw new Error(String(mt.success));
                      });
                  } catch (it) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + it,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = ut),
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
                    i = a.data,
                    l = this.m_peerConnection;
                  if (a.success && a.success == w.R)
                    l &&
                    i.candidate_generation > this.m_nHostCandidateGeneration
                      ? (i.candidates.forEach((h) => {
                          const b = new RTCIceCandidate({
                            sdpMid: h.sdp_mid,
                            sdpMLineIndex: h.sdp_mline_index,
                            candidate: h.candidate,
                          });
                          l.addIceCandidate(b).catch((O) => console.error(O));
                        }),
                        (this.m_nHostCandidateGeneration =
                          i.candidate_generation))
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
              i = (h, b) => !1,
              l = (h, b) => !1;
            try {
              await this.m_elVideo.play(), a();
            } catch (h) {
              h.name === "NotAllowedError"
                ? i("Failed to play video, probably due to auto play policy", h)
                : l("Failed to play video", h);
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
                  et,
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
                et,
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
        j([d.o], lt.prototype, "PlayWebRTC", 1),
          j([c.XI.bound], lt.prototype, "CaptureStatsForDisplay", 1),
          j([d.o], lt.prototype, "OnVideoPause", 1),
          j([d.o], lt.prototype, "OnVideoResize", 1);
        var ft = m(99412),
          yt = m(90711),
          V = m(41635),
          r = m(71742),
          s = m(18210),
          p = m(34592),
          u = m(40497),
          I = m(9032),
          S = m(35038),
          at = m(3685),
          ot = m(60298),
          R = m(80613),
          T = m.n(R),
          n = m(75245);
        function Lt(f) {
          return "unknown ETrailerConvertState ( " + f + " )";
        }
        function Gt(f) {
          return "unknown ETrailerConvertTargetType ( " + f + " )";
        }
        class U extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.video_id || n.Sg(U.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    client_cellid: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(U.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new U();
            return U.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(U.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(U.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class W extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.video_id || n.Sg(W.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
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
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    video_url: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = n.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(W.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new W();
            return W.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(W.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(W.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class C extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.encryption_key || n.Sg(C.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: n.qM.readBytes,
                      bw: n.gp.writeBytes,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = n.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(C.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new C();
            return C.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(C.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(C.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class H extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.app_id || n.Sg(H.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    app_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = n.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(H.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new H();
            return H.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(H.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(H.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class L extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              L.prototype.app_id || n.Sg(L.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    app_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    opf_settings: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
          }
          toObject(t = !1) {
            return L.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(L.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(L.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new L();
            return L.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(L.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(L.M(), t, e);
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
        class M extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.app_id || n.Sg(M.M()),
              R.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    app_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    playback_position_in_seconds: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    video_track_id: {
                      n: 3,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    audio_track_id: {
                      n: 4,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    timedtext_track_id: {
                      n: 5,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    last_modified: {
                      n: 6,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    hide_from_watch_history: {
                      n: 7,
                      d: !1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    hide_from_library: {
                      n: 8,
                      d: !1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(M.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new M();
            return M.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(M.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(M.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class E extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              E.prototype.bookmarks || n.Sg(E.M()),
              R.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: { bookmarks: { n: 1, c: M, r: !0, q: !0 } },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
          }
          toObject(t = !1) {
            return E.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(E.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(E.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new E();
            return E.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(E.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return E.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(E.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class G extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.appids || n.Sg(G.M()),
              R.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    updated_since: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = n.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(G.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new G();
            return G.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(G.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(G.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class z extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.bookmarks || n.Sg(z.M()),
              R.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: { bookmarks: { n: 1, c: M, r: !0, q: !0 } },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, e) {
            return n.BT(z.M(), t, e);
          }
          static fromObject(t) {
            return n.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let e = new (T().BinaryReader)(t),
              a = new z();
            return z.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(t, e) {
            return n.zj(z.MBF(), t, e);
          }
          serializeBinary() {
            var t = new (T().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, e) {
            n.i0(z.M(), t, e);
          }
          serializeBase64String() {
            var t = new (T().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var _t;
        ((f) => {
          function t(i, l, h) {
            return i.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, S.I8)(U, l, h),
              W,
              { ePrivilege: 1 },
            );
          }
          f.ClientGetVideoURL = t;
          function e(i, l) {
            return i.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, S.I8)(E, l),
              { ePrivilege: 1 },
            );
          }
          f.SetVideoBookmark = e;
          function a(i, l, h) {
            return i.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, S.I8)(G, l, h),
              z,
              { ePrivilege: 1 },
            );
          }
          f.GetVideoBookmarks = a;
        })(_t || (_t = {}));
        var Dt;
        ((f) => {
          f.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: C,
          };
        })(Dt || (Dt = {}));
        var wt;
        ((f) => {
          function t(e, a, i) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, S.I8)(H, a, i),
              L,
              { ePrivilege: 1 },
            );
          }
          f.ClientGetOPFSettings = t;
        })(wt || (wt = {}));
        class rt {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(t, e) {
            this.ValidateBookmarkData(e)
              ? this.m_mapBookmarks.set(t, M.fromObject(e))
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
              this.m_mapBookmarks.set(t, new M(e));
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
          async SendBookMarkedTimeToServer(t, e, a, i, l) {
            if (!o.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const h = S.w.Init(E);
            let b = this.m_mapBookmarks.get(t);
            if (b) {
              let O = !1;
              b.app_id() != t && ((O = !0), b.set_app_id(t)),
                b.playback_position_in_seconds() != e &&
                  ((O = !0), b.set_playback_position_in_seconds(e)),
                (a = a || "0"),
                b.video_track_id() != a && (b.set_video_track_id(a), (O = !0)),
                (i = i || "0"),
                b.audio_track_id() != i && (b.set_audio_track_id(i), (O = !0)),
                (l = l || "0"),
                l != b.timedtext_track_id() &&
                  (b.set_timedtext_track_id(l), (O = !0)),
                O &&
                  (h.Body().add_bookmarks(b),
                  _t.SetVideoBookmark(this.m_transport, h));
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
                a.data.success == w.R &&
                a.data.webapi_token
              ) {
                this.m_transport = (0, ot.C)(
                  new at.D(o.TS.WEBAPI_BASE_URL, a.data.webapi_token),
                ).GetServiceTransport();
                return;
              }
            } catch (a) {
              let i = (0, p.H)(a);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  i.strErrorMsg,
                i,
              );
            }
          }
        }
        class Mt {
          m_appid;
          constructor(t) {
            this.m_appid = t;
          }
          async SetBookmark(t, e, a, i) {
            o.iA.logged_in &&
              rt
                .Get()
                .SendBookMarkedTimeToServer(
                  this.m_appid,
                  Math.floor(t),
                  e,
                  a,
                  i,
                );
          }
          GetBeginPlaytime() {
            return o.iA.logged_in
              ? rt.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
        var St = m(44930),
          Pt = Object.defineProperty,
          Et = Object.getOwnPropertyDescriptor,
          B = (f, t, e, a) => {
            for (
              var i = a > 1 ? void 0 : a ? Et(t, e) : t, l = f.length - 1, h;
              l >= 0;
              l--
            )
              (h = f[l]) && (i = (a ? h(t, e, i) : h(i)) || i);
            return a && i && Pt(t, e, i), i;
          };
        const It = 1800,
          Ot = 1e3,
          Ut = 5 * 1e3,
          gt = 7;
        var At = ((f) => (
          (f[(f.None = 0)] = "None"),
          (f[(f.Unlocking = 1)] = "Unlocking"),
          (f[(f.Loading = 2)] = "Loading"),
          (f[(f.Ready = 3)] = "Ready"),
          (f[(f.Error = 4)] = "Error"),
          f
        ))(At || {});
        async function Wt(f, t, e) {
          if (!t) return;
          let a = new FormData();
          a.append("steamid", f),
            a.append("broadcastid", t),
            a.append("viewertoken", e);
          try {
            await F().post(o.TS.CHAT_BASE_URL + "broadcast/stopwatching", a);
          } catch {}
        }
        class bt {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new g.LU();
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
              : t.SetState(4, (0, s.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, St.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, St.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, St.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, St.Dp)("BrowserView.PostMessageToParent")
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
                  (0, s.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class pt {
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
          m_schManifestTimeout = new g.LU();
          m_schHeartbeatTimeout = new g.LU();
          SetState(t, e = "") {
            (this.m_eWatchState = t),
              (this.m_strStateDescription = e),
              t == 4 && console.log(this.m_strStateDescription);
          }
        }
        B([c.sH], pt.prototype, "m_ulBroadcastID", 2),
          B([c.sH], pt.prototype, "m_eWatchState", 2),
          B([c.sH], pt.prototype, "m_strStateDescription", 2),
          B([c.XI], pt.prototype, "SetState", 1);
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
          m_schUpdateTimeout = new g.LU();
          m_nRefCount = 0;
          constructor(t) {
            (0, c.Gn)(this), (this.m_steamIDBroadcast = t);
          }
        }
        B([c.sH], st.prototype, "m_bInitialized", 2),
          B([c.sH], st.prototype, "m_strTitle", 2),
          B([c.sH], st.prototype, "m_strAppId", 2),
          B([c.sH], st.prototype, "m_nAppID", 2),
          B([c.sH], st.prototype, "m_strAppTitle", 2),
          B([c.sH], st.prototype, "m_strThumbnailUrl", 2),
          B([c.sH], st.prototype, "m_nViewerCount", 2),
          B([c.sH], st.prototype, "m_bIsOnline", 2);
        class ht {
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
        B([c.sH], ht.prototype, "m_eWatchState", 2),
          B([c.sH], ht.prototype, "m_strStateDescription", 2),
          B([c.XI], ht.prototype, "SetState", 1);
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
          m_schSaveSettings = new g.LU();
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
          CreateBroadcastVideo(t, e, a, i) {
            let l = this.GetOrCreateBroadcast(e),
              { nVolume: h, bMuted: b } = this.m_broadcastSettings,
              O = new A(t, h, b, a);
            return (
              O.SetBroadcastSteamID(e),
              l.m_rgVideos.push(O),
              (l.m_bWebRTC = i),
              !(0, x.Mc)() && !(0, x.aM)() && new bt().UnlockH264(l, O),
              O
            );
          }
          CreateClipVideo(t, e, a) {
            let i = this.GetOrCreateClip(e),
              { nVolume: l, bMuted: h } = this.m_broadcastSettings,
              b = new A(t, l, h, a);
            return (
              b.SetBroadcastClipID(e),
              i.m_rgVideos.push(b),
              !(0, x.Mc)() && !(0, x.aM)() && new bt().UnlockH264(i, b),
              b
            );
          }
          CreateVODVideo(t, e, a) {
            let i = this.GetOrCreateVOD(e),
              { nVolume: l, bMuted: h } = this.m_broadcastSettings,
              b = new A(t, l, h, a);
            return (
              b.SetBroadcastAppIDVOD(e),
              i.m_rgVideos.push(b),
              !(0, x.Mc)() && !(0, x.aM)() && new bt().UnlockH264(i, b),
              b
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
                V.Wp(a.m_rgVideos, (i) => i == t),
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
              const e = (0, c.sH)(new st(t));
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
            const i = {
              steamid: t.m_steamIDBroadcast,
              broadcastid: e,
              location:
                a &&
                a.m_rgVideos &&
                a.m_rgVideos[0] &&
                a.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const l = await F().get(
                `${o.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: i },
              );
              if (!l || !l.data || !l.data.success || l.data.success != w.R) {
                t.m_bInitialized = !0;
                return;
              }
              const h = l.data;
              (0, c.h5)(() => {
                (t.m_bInitialized = !0),
                  (t.m_strTitle = h.title),
                  (t.m_strAppId = h.appid),
                  (t.m_nAppID = Number.parseInt(h.appid)),
                  (t.m_strAppTitle = h.app_title),
                  (t.m_strThumbnailUrl = h.thumbnail_url),
                  (t.m_nViewerCount = h.viewer_count),
                  (t.m_bIsOnline = h.is_online),
                  !t.m_strTitle &&
                    D.td &&
                    ((t.m_strTitle = D.td.name),
                    (t.m_strAppTitle = D.td.appName || D.td.name));
                const b = h.update_interval;
                b &&
                  typeof b == "number" &&
                  t.m_schUpdateTimeout.Schedule(b * 1e3, () =>
                    this.LoadBroadcastInfo(t),
                  );
              });
            } catch (l) {
              console.error(l);
            }
          }
          DelayedGetBroadcastManifest(t, e, a = Date.now()) {
            t.m_schManifestTimeout.Schedule(Ut, () =>
              this.GetBroadcastManifest(t, e, a),
            );
          }
          async GetBroadcastManifest(t, e, a = Date.now()) {
            t.SetState(2, "");
            let i = {
                steamid: t.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: e,
                sessionid: (0, o.KC)(),
                is_webrtc: t.m_bWebRTC,
              },
              l = null;
            try {
              l = await F().get(
                o.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: i, withCredentials: !0 },
              );
            } catch (O) {
              let X = (0, p.H)(O);
              console.error(
                "Failed to get broadcast manifest!" + X.strErrorMsg,
                X,
              );
            }
            if (!l || l.status != 200) {
              t.SetState(4, (0, s.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let h = l.data;
            h.viewertoken && this.SetViewerToken(h.viewertoken);
            let b = h.success;
            if (b == "ready")
              t.SetState(3),
                (t.m_ulBroadcastID = h.broadcastid),
                (t.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (t.m_strCDNAuthUrlParameters = h.cdn_auth_url_parameters),
                (t.m_bWebRTC = h.is_webrtc),
                (t.m_data = h),
                this.LoadBroadcast(t),
                setTimeout(() => {
                  t.m_schHeartbeatTimeout.Schedule(
                    t.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(t),
                  );
                }, Math.random() * 3e4);
            else if (b == "waiting") {
              t.SetState(2, (0, s.we)("#BroadcastWatch_WaitingForResponse"));
              let O = Date.now() - a;
              if (O > 60 * 1e3) {
                t.SetState(4, (0, s.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let X = O > 30 * 1e3 ? h.retry : 5e3;
              t.m_schManifestTimeout.Schedule(X, () =>
                this.GetBroadcastManifest(t, e, a),
              );
            } else
              b == "waiting_for_start"
                ? (t.SetState(2, (0, s.we)("#BroadcastWatch_WaitingForStart")),
                  t.m_schManifestTimeout.Schedule(h.retry, () =>
                    this.GetBroadcastManifest(t, e, a),
                  ))
                : b == "waiting_for_reconnect"
                  ? (t.SetState(
                      2,
                      (0, s.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    t.m_schManifestTimeout.Schedule(h.retry, () =>
                      this.GetBroadcastManifest(t, e, a),
                    ))
                  : b == "end"
                    ? t.SetState(4, (0, s.we)("#BroadcastWatch_NotAvailable"))
                    : b == "too_many_broadcasts"
                      ? t.SetState(
                          4,
                          (0, s.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : b == "system_not_supported"
                        ? t.SetState(
                            4,
                            (0, s.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : b == "user_restricted"
                          ? t.SetState(
                              4,
                              (0, s.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : b == "poor_upload_quality"
                            ? t.SetState(
                                4,
                                (0, s.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : b == "request_failed"
                              ? t.SetState(
                                  4,
                                  (0, s.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : b == "too_many_viewers"
                                ? t.SetState(
                                    4,
                                    (0, s.we)("#BroadcastWatch_TooManyViewers"),
                                  )
                                : t.SetState(
                                    4,
                                    (0, s.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(t, e) {
            t.SetState(2, "");
            let a = {
                clipid: t.m_clipID,
                watchlocation: e,
                sessionid: (0, o.KC)(),
              },
              i = null;
            try {
              i = await F().get(
                o.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: a, withCredentials: !0 },
              );
            } catch (h) {
              console.error(h), console.log("Failed to get clip manifest!");
            }
            if (!i || i.status != 200) {
              t.SetState(4, (0, s.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let l = i.data;
            l.success == w.R
              ? (t.SetState(3), (t.m_data = l), this.LoadClip(t))
              : t.SetState(4, (0, s.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(t, e) {
            t.SetState(2, "");
            let a = await u.L.fetchQuery((0, I.uj)(t.m_nAppIDVOD)).catch(
              (i) => {
                console.error(
                  "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                    t.m_nAppIDVOD,
                  i,
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
              : t.SetState(4, (0, s.we)("#BroadcastWatch_RequestFailed"));
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
            let i = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            i &&
              i.m_eWatchState != 2 &&
              (i.m_bWebRTC && e && (i.m_bWebRTC = !1),
              a == Q.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(i, t.GetWatchLocation())
                : this.GetBroadcastManifest(i, t.GetWatchLocation()));
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
        B([c.sH], Tt.prototype, "m_mapBroadcasts", 2);
        var vt = ((f) => (
          (f[(f.Timeline = 1)] = "Timeline"),
          (f[(f.Minimap = 2)] = "Minimap"),
          f
        ))(vt || {});
        class A {
          m_elVideo;
          m_player = null;
          m_listeners = new g.Ji();
          m_gameDataParser = null;
          m_eWatchLocation = yt.nn.Tq;
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
          constructor(t, e, a, i) {
            (0, c.Gn)(this),
              (this.m_elVideo = t),
              (this.m_nVolume = e),
              (this.m_bMuted = a),
              (this.m_eWatchLocation = i);
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
            let e = t ? s.bi[t] : ft.xPp;
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
            (0, r.wT)(!this.m_player, "Initialized twice?"),
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
              let a = new lt(this.m_elVideo);
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
              (this.m_gameDataParser = new P(e.gamedata.__appid));
            const a = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in e.gamedata) {
              const i = this.m_gameDataParser.UpdateMarkers(
                e.gamedata.__timelinemarkers,
                a,
              );
              i &&
                (this.m_rgMarkers.replace(i.rgMarkers || []),
                this.m_rgSegments.replace(i.rgSegments || []));
              const l = this.m_gameDataParser.UpdateRegions(
                e.gamedata.__regions,
              );
              l && this.m_rgRegions.replace(l);
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
          GetTimeAtMousePosition(t, e, a, i) {
            let l = k.Fu(t, e.left, e.right, a, i);
            return Math.floor(l + 0.5);
          }
          GetPercentOffsetFromTime(t, e) {
            let a = 0,
              i = 0;
            return (
              e == 1
                ? ((i = this.m_nVideoEndPos),
                  (a = i - this.m_nTimelineDuration))
                : ((a = 0), (i = 0)),
              k.Fu(t, a, i, 0, 100)
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
        B([c.sH], A.prototype, "m_player", 2),
          B([c.sH], A.prototype, "m_bPaused", 2),
          B([c.sH], A.prototype, "m_nPlaybackTime", 2),
          B([c.sH], A.prototype, "m_bBuffering", 2),
          B([c.sH], A.prototype, "m_bOnLiveEdge", 2),
          B([c.sH], A.prototype, "m_nVolume", 2),
          B([c.sH], A.prototype, "m_bMuted", 2),
          B([c.sH], A.prototype, "m_bUserInputNeeded", 2),
          B([c.sH], A.prototype, "m_bIsReplay", 2),
          B([c.sH], A.prototype, "m_nTimelineDuration", 2),
          B([c.sH], A.prototype, "m_nVideoStartPos", 2),
          B([c.sH], A.prototype, "m_nVideoEndPos", 2),
          B([c.sH], A.prototype, "m_editorStartTime", 2),
          B([c.sH], A.prototype, "m_editorEndTime", 2),
          B([c.XI.bound], A.prototype, "StartBroadcast", 1),
          B([c.XI.bound], A.prototype, "StartClip", 1),
          B([c.XI.bound], A.prototype, "StartVOD", 1),
          B([d.o], A.prototype, "OnVideoPlaying", 1),
          B([d.o], A.prototype, "OnVideoPause", 1),
          B([c.XI.bound], A.prototype, "OnVideoTimeUpdate", 1),
          B([d.o], A.prototype, "OnVolumeUpdated", 1),
          B([c.XI.bound], A.prototype, "OnGameDataUpdate", 1),
          B([d.o], A.prototype, "OnDownloadFailed", 1),
          B([d.o], A.prototype, "OnWebRTCRetry", 1),
          B([d.o], A.prototype, "OnWebRTCFailed", 1),
          B([d.o], A.prototype, "OnUserInputNeeded", 1);
        const J = new Tt();
        window.uiBroadcastWatchStore = J;
      },
      10886: (ct, Y, m) => {
        m.d(Y, { A: () => v });
        const v =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      3209: (ct, Y, m) => {
        m.d(Y, { A: () => v });
        const v =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();

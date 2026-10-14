/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2694],
    {
      6600: (be, de, S) => {
        S.d(de, { td: () => ae });
        var k = S(14947),
          x = S(3166),
          _ = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          pe = (C, d, m) =>
            d in C
              ? _(C, d, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: m,
                })
              : (C[d] = m),
          q = (C, d, m, u) => {
            for (
              var f = u > 1 ? void 0 : u ? w(d, m) : d, B = C.length - 1, D;
              B >= 0;
              B--
            )
              (D = C[B]) && (f = (u ? D(d, m, f) : D(f)) || f);
            return u && f && _(d, m, f), f;
          },
          $ = (C, d, m) => pe(C, typeof d != "symbol" ? d + "" : d, m);
        const re = x.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          le = x.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class P {
          constructor(d) {
            $(this, "bValid", !1),
              $(this, "stream", { 0: "#Broadcast_EnglishMain" }),
              $(this, "name", ""),
              $(this, "appName", ""),
              $(this, "appID", 0),
              $(this, "link", ""),
              $(this, "linkName", ""),
              $(this, "tabIcon", ""),
              $(this, "offlineImage", ""),
              $(this, "gidEvent", ""),
              (0, k.Gn)(this),
              this.init(d);
          }
          init(d) {
            var m, u, f;
            (this.bValid = d.bValid),
              (this.stream = d.stream),
              (this.name = d.name),
              (this.appName = (m = d.appName) != null ? m : ""),
              (this.appID = d.appID),
              (this.link = d.link),
              (this.linkName = d.linkName),
              (this.tabIcon = (u = d.tabIcon) != null ? u : ""),
              (this.offlineImage = d.offlineImage),
              (this.gidEvent = (f = d.gidEvent) != null ? f : "");
          }
        }
        q([k.sH], P.prototype, "bValid", 2),
          q([k.sH], P.prototype, "stream", 2),
          q([k.sH], P.prototype, "name", 2),
          q([k.sH], P.prototype, "appName", 2),
          q([k.sH], P.prototype, "appID", 2),
          q([k.sH], P.prototype, "link", 2),
          q([k.sH], P.prototype, "linkName", 2),
          q([k.sH], P.prototype, "tabIcon", 2),
          q([k.sH], P.prototype, "offlineImage", 2),
          q([k.sH], P.prototype, "gidEvent", 2);
        let ae = new P({
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
        function R(C) {
          (C == "76561198888084799" || C == "76561198910244427") &&
            ae.init({
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
            C == "76561197960266962" &&
              ae.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: le,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (be, de, S) => {
        S.d(de, { J8: () => _, X8: () => x });
        var k = ((w) => (
            (w[(w.Hover = 0)] = "Hover"),
            (w[(w.ClickPopup = 1)] = "ClickPopup"),
            (w[(w.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            w
          ))(k || {}),
          x = ((w) => (
            (w[(w.Chat = 0)] = "Chat"),
            (w[(w.Notification = 1)] = "Notification"),
            (w[(w.Error = 2)] = "Error"),
            w
          ))(x || {});
        class _ {}
      },
      25317: (be, de, S) => {
        S.d(de, {
          M5: () => j,
          MU: () => ee,
          MX: () => ve,
          Rt: () => ie,
          U7: () => Be,
          fn: () => J,
          j: () => ye,
        });
        var k = S(10142),
          x = S(41735),
          _ = S.n(x),
          w = S(14947),
          pe = S(72604),
          q = S(76559),
          $ = S(61639),
          re = S(22950),
          le = S(7582),
          P = S(28462),
          ae = S(34592),
          R = S(3166),
          C = S(34032),
          d = Object.defineProperty,
          m = Object.getOwnPropertyDescriptor,
          u = (T, s, i) =>
            s in T
              ? d(T, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (T[s] = i),
          f = (T, s, i, p) => {
            for (
              var g = p > 1 ? void 0 : p ? m(s, i) : s, b = T.length - 1, I;
              b >= 0;
              b--
            )
              (I = T[b]) && (g = (p ? I(s, i, g) : I(g)) || g);
            return p && g && d(s, i, g), g;
          },
          B = (T, s, i) => u(T, typeof s != "symbol" ? s + "" : s, i);
        let D = !1;
        function J(T) {
          return !!(T && T.thumbnail_http_address);
        }
        function j(T, s) {
          if (s || T) {
            const i = s || T;
            return !!(i && ye.Get().BIsAppStreaming(i));
          }
          return !1;
        }
        const Y = class _e {
          constructor() {
            B(this, "m_inFlightRequests", new Map()),
              B(this, "m_lookupKeyToEmbedStreamDef", new Map()),
              B(this, "m_lookupStreams", new Map()),
              B(this, "m_playReadyStream", new Map()),
              B(this, "m_bMapHasStartedVideo", new Map()),
              B(this, "m_mapBroadcastChecked", new Map()),
              B(this, "m_pageChatStatus", "hide"),
              B(this, "m_streamChatStatus", "hide"),
              B(this, "m_bUserChatExpanded"),
              B(this, "m_bUserPreferenceHideBroadcastByDefault"),
              B(this, "m_bCollapsed"),
              B(this, "m_setStreamChangedListeners", new Set()),
              B(this, "m_bUseFakeData", !1),
              B(this, "m_onLoadContextCall", new Map()),
              (0, w.Gn)(this);
          }
          BHasStreams(s) {
            const i = this.GetStreams(s);
            return !!(i && i.length > 0);
          }
          AddCallbackOnNewContext(s, i, p) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(s), {
              name: i,
              fnCallback: p,
            });
          }
          ClearCallbackOnNewContext(s) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(s),
              null,
            );
          }
          GetPlayReadyStream(s) {
            let i = this.GetStreamsLookupKeyFromDef(s);
            return this.m_playReadyStream.get(i);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(s) {
            this.m_bCollapsed != s && (this.m_bCollapsed = s);
          }
          GetConcurrentStreams(s) {
            const i = this.GetStreams(s);
            return i ? i.filter((p) => J(p)).length : 0;
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
            const s = this.GetChatVisibility();
            s !== "remove" && (this.m_bUserChatExpanded = s === "hide");
          }
          DebugDumpContextAndAvailableContext(s) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(s),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((i, p) => {
                console.log(p, i.length);
              });
          }
          GetStreams(s) {
            const i = this.GetStreamsLookupKeyFromDef(s);
            return this.m_lookupStreams.get(i);
          }
          GetBroadcastURL(s) {
            let i = null;
            return (
              s.steamid
                ? (i = new q.b(s.steamid))
                : (i = q.b.InitFromAccountID(s.accountid)),
              R.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                i.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(s) {
            let i = !1;
            return (
              this.m_lookupStreams.forEach((p) => {
                i ||
                  (i =
                    !!p &&
                    p.some(
                      (g) =>
                        re.es.GetOrCreateBroadcastInfo(g.steamid).m_nAppID ===
                        s,
                    ));
              }),
              i
            );
          }
          GetStreamsForAppID(s) {
            const i = new Array();
            return (
              this.m_lookupStreams.forEach((p) => {
                p == null ||
                  p.forEach((g) => {
                    re.es.GetOrCreateBroadcastInfo(g.steamid).m_nAppID === s &&
                      i.push(g);
                  });
              }),
              i
            );
          }
          AddStreamChangedListener(s) {
            this.m_setStreamChangedListeners.add(s);
          }
          RemoveStreamChangedListener(s) {
            this.m_setStreamChangedListeners.delete(s);
          }
          async LoadBIsEmbeddedBroadcastHidden(s) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let i = (0, R.Tc)("broadcastuser", "application_config");
              if (!i)
                try {
                  let p =
                    R.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  i = (await _().get(p, { params: {}, cancelToken: s.token }))
                    .data;
                } catch (p) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, ae.H)(p).strErrorMsg,
                  ),
                    (i = { bHideStoreBroadcast: !1 });
                }
              (0, w.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  i.bHideStoreBroadcast),
                  (this.m_bCollapsed = i.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          }
          async SetupEmbeddableVOD(s, i) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              await k.A.Get().QueueAppRequest(s.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const p = k.A.Get().GetApp(s.nAppIDVOD),
              g = new C.TT();
            if (
              ((g.accountid = 0),
              (g.nAppIDVOD = s.nAppIDVOD),
              (g.default_selection_priority = C.mY.k_ePrimary),
              (g.current_selection_priority = C.mY.k_ePrimary),
              (g.thumbnail_http_address =
                (p == null ? void 0 : p.GetAssets().GetHeaderURL()) || ""),
              (g.title = (p == null ? void 0 : p.GetName()) || ""),
              this.GetStreams(s).unshift(g),
              i)
            ) {
              const b = this.GetStreamsLookupKeyFromDef(s);
              this.m_playReadyStream.set(b, g);
            }
          }
          async HintLoadEmbeddablePreviewStreams(s) {
            let i = null,
              p = {
                eventid: s.event ? s.event.GID : void 0,
                previewAccounts:
                  s.bIsPreview && s.accountIDs
                    ? s.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (i = await _().get(
                  R.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: p },
                )),
                this.HandleHintLoadBroadcastResponse(s, i.data)
              );
            } catch (g) {
              let b = (0, ae.H)(g);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  b.strErrorMsg,
                b,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(s) {
            let i = this.MapEmbeddableStreamToRequest(s),
              p = this.GetStreamsLookupKeyFromParam(i);
            if (!this.m_inFlightRequests.has(p)) {
              this.m_lookupKeyToEmbedStreamDef.set(p, s);
              const g = this.InternalHintLoadEmbeddableStreams(s, i);
              this.m_inFlightRequests.set(p, g);
            }
            return this.m_inFlightRequests.get(p);
          }
          async InternalHintLoadEmbeddableStreams(s, i) {
            let p = (0, R.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, C.h7)(p)) return this.HandleHintLoadBroadcastResponse(s, p);
            try {
              let g = null;
              return (
                (g = await _().get(
                  R.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: i },
                )),
                this.HandleHintLoadBroadcastResponse(s, g.data)
              );
            } catch (g) {
              let b = (0, ae.H)(g);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + b.strErrorMsg,
                b,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(s, i) {
            var p;
            (this.m_bUseFakeData = !1),
              s.bIsPreview &&
                (((p = i == null ? void 0 : i.filtered) == null
                  ? void 0
                  : p.length) > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      s.event,
                      i.filtered,
                    )
                  : ((i = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              i.broadcast_chat_visibility &&
                (this.m_pageChatStatus = i.broadcast_chat_visibility);
            const g = new Array();
            (0, w.h5)(() => {
              i.filtered.forEach((G) => {
                if (!G.steamid) {
                  const Ve = q.b.InitFromAccountID(G.accountid);
                  G.steamid = Ve.ConvertTo64BitString();
                }
                const Q = re.es.GetOrCreateBroadcastInfo(G.steamid),
                  se = G.appid ? Number(G.appid) : re.fO;
                (Q.m_nAppID = se),
                  (Q.m_strAppId = "" + se),
                  G.current_selection_priority === void 0 &&
                    (G.current_selection_priority =
                      G.default_selection_priority),
                  se != re.fO && g.push(se);
              });
            });
            const b = this.GetStreamsLookupKeyFromDef(s);
            if (
              (this.m_lookupStreams.set(b, i.filtered),
              this.m_onLoadContextCall.has(b))
            ) {
              const G = this.m_onLoadContextCall.get(b);
              G && G.fnCallback();
            }
            const I = this.GetStreams(s);
            return await this.AutoStartVideoStream(s, I), I;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(s, i) {
            var p, g;
            const b = Array.from(
                (p = s.jsondata.broadcast_whitelist) != null ? p : [],
              ),
              I = Array.from(
                (g = s.jsondata.broadcast_priority) != null ? g : [],
              ),
              G = new Map();
            for (let Q = 0; Q < b.length && !(Q >= I.length); Q++)
              G.set(b[Q], (0, C.PH)(I[Q]));
            i.forEach((Q) => {
              const se = Number(Q.accountid);
              G.has(se) && (Q.current_selection_priority = G.get(se));
            });
          }
          async AutoStartVideoStream(s, i) {
            let p = this.GetStreamsLookupKeyFromDef(s);
            if (this.m_bMapHasStartedVideo.get(p)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(p)) {
                const g = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: C.mY.k_eGeneral,
                  current_selection_priority: C.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(p, g);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(s, i);
          }
          async PlayFromAvailableStreams(s, i, p = !1) {
            const g = new Set();
            for (;;) {
              const b = i.filter((Q) => !g.has(Q) && (!p || !Q.nAppIDVOD)),
                I = this.GetAutoStartStream(b);
              if (!I) return null;
              if (await this.AttemptToPlayStream(s, I)) return I;
              g.add(I);
            }
          }
          async AttemptToPlayStream(s, i) {
            let p = this.GetStreamsLookupKeyFromDef(s);
            if (
              (this.m_bMapHasStartedVideo.set(p, !0),
              this.m_mapBroadcastChecked.has(i.accountid) ||
                this.m_mapBroadcastChecked.set(
                  i.accountid,
                  this.InternalAttemptToPlayStream(s, i),
                ),
              i.nAppIDVOD)
            )
              this.m_playReadyStream.set(p, i);
            else {
              const g = await this.m_mapBroadcastChecked.get(i.accountid);
              if ((g == null ? void 0 : g.success) == pe.R) {
                (i.steamid = g.steamid),
                  this.m_playReadyStream.set(p, i),
                  this.GetConcurrentStreams(s) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = i.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((I) => I(i));
                const b = re.es.GetOrCreateBroadcastInfo(i.steamid).m_nAppID;
                Be(b, $.Mc.iy, i.snr);
              } else return null;
            }
            return i;
          }
          async InternalAttemptToPlayStream(s, i) {
            let p = this.GetStreamsLookupKeyFromDef(s),
              g = null;
            try {
              const b = R.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let I = {
                broadcastaccountid: i.accountid,
                viewer_token: re.es.GetViewerToken(),
                origin: self.origin,
              };
              return (g = await _().get(b, { params: I })), g.data;
            } catch (b) {
              let I = (0, ae.H)(b);
              console.error(
                "Broadcast.AttemptToPlayStream: " + I.strErrorMsg,
                I,
              );
            }
            return null;
          }
          GetAutoStartStream(s) {
            if (!s) return null;
            const i = s.filter((I) => J(I)),
              p = i.reduce((I, G) => Math.max(I, ie(G)), 0),
              g = i.filter((I) => ie(I) === p);
            if (g.length === 0) return null;
            const b = Math.floor(Math.random() * g.length);
            return g[b];
          }
          MapEmbeddableStreamToRequest(s) {
            var i, p, g;
            return {
              appid: s.appid,
              promotionName: s.bIsPreview ? "preview" : s.promotionName,
              clanid: s.clanid
                ? s.clanid
                : s.event
                  ? s.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: s.listid,
              subid: s.subid,
              bundleid: s.bundleid,
              eventid: s.event ? s.event.GID : void 0,
              previewAccounts:
                s.bIsPreview && s.accountIDs
                  ? s.accountIDs.slice().sort().join(",")
                  : void 0,
              test: D,
              cc: R.TS.COUNTRY,
              l: R.TS.LANGUAGE,
              hubtype: (i = s.event) == null ? void 0 : i.GetContentHubType(),
              hubcategory:
                (p = s.event) == null ? void 0 : p.GetContentHubCategory(),
              hubtagid: (g = s.event) == null ? void 0 : g.GetContentHubTag(),
              tabuniqueid: s.tabuniqueid,
              tabfilter: s.tabfilter,
              rt_now_override_test: le.HD.BHasTimeOverride()
                ? le.HD.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(s) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(s),
            );
          }
          GetStreamsLookupKeyFromParam(s) {
            return JSON.stringify(s);
          }
          static Get() {
            return (
              _e.s_GlobalStore ||
                ((_e.s_GlobalStore = new _e()), _e.s_GlobalStore.Init()),
              _e.s_GlobalStore
            );
          }
          Init() {}
        };
        B(Y, "s_GlobalStore"),
          f([w.sH], Y.prototype, "m_lookupStreams", 2),
          f([w.sH], Y.prototype, "m_playReadyStream", 2),
          f([w.sH], Y.prototype, "m_pageChatStatus", 2),
          f([w.sH], Y.prototype, "m_streamChatStatus", 2),
          f([w.sH], Y.prototype, "m_bUserChatExpanded", 2),
          f([w.sH], Y.prototype, "m_bUserPreferenceHideBroadcastByDefault", 2),
          f([w.sH], Y.prototype, "m_bCollapsed", 2),
          f([w.XI], Y.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          f([w.XI], Y.prototype, "AttemptToPlayStream", 1);
        let ye = Y;
        function ie(T) {
          return T.current_selection_priority || C.mY.k_eGeneral;
        }
        function ee(T) {
          T.sort((s, i) =>
            ie(s) != ie(i)
              ? ie(i) - ie(s)
              : s.viewer_count != i.viewer_count
                ? i.viewer_count - s.viewer_count
                : i.accountid - s.accountid,
          );
        }
        async function Be(T, s, i) {
          if (T > 0 && T != 7 && i) {
            let p = new URLSearchParams();
            p.append("page_action", "" + s),
              p.append("snr", i),
              _().post(
                R.TS.STORE_BASE_URL + "ajaxreportproductaction/" + T + "/",
                p,
              );
          }
        }
        const ve = new P.T();
      },
      18614: (be, de, S) => {
        S.d(de, { l: () => R, m: () => ae });
        var k = S(14947),
          x = S(76559),
          _ = S(7582),
          w = S(77495),
          pe = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          $ = (C, d, m) =>
            d in C
              ? pe(C, d, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: m,
                })
              : (C[d] = m),
          re = (C, d, m, u) => {
            for (
              var f = u > 1 ? void 0 : u ? q(d, m) : d, B = C.length - 1, D;
              B >= 0;
              B--
            )
              (D = C[B]) && (f = (u ? D(d, m, f) : D(f)) || f);
            return u && f && pe(d, m, f), f;
          },
          le = (C, d, m) => $(C, typeof d != "symbol" ? d + "" : d, m);
        const P = class ne {
          constructor() {
            le(this, "m_mapBroadcasterSteamIDToEvents", new Map()),
              le(this, "m_mapBroadcasterSteamIDData", new Map()),
              (0, k.Gn)(this);
          }
          static GetBBCodeParam(d, m, u = "") {
            const B = new RegExp(`\\W${m}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(d);
            return B ? B[1] : u;
          }
          static ParseCalendarEventPresentersFromText(d) {
            const m =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              u = new Array();
            for (;;) {
              const f = m.exec(d);
              if (f === null) break;
              const B = f[1],
                D = f[2],
                J = ne.GetBBCodeParam(B, "steamid"),
                j = {
                  steamID: J ? new x.b(J) : void 0,
                  name: ne.GetBBCodeParam(B, "name"),
                  title: ne.GetBBCodeParam(B, "title"),
                  company: ne.GetBBCodeParam(B, "company"),
                  photo: ne.GetBBCodeParam(B, "photo"),
                  bio: D,
                };
              u.push(j);
            }
            return u;
          }
          static ParseEventModelPresenters(d, m) {
            const u = d.GetDescriptionWithFallback(m);
            return ne.ParseCalendarEventPresentersFromText(u);
          }
          static ParseEventAppReferencesFromText(d) {
            const m = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              u = new Set();
            for (;;) {
              const f = m.exec(d);
              if (f === null) break;
              const B = f[1];
              u.add(Number(B));
            }
            return u;
          }
          static ParseEventModelAppReferences(d, m) {
            var u;
            const f = d.GetDescriptionWithFallback(m),
              B = ne.ParseEventAppReferencesFromText(f);
            if ((u = d.jsondata) != null && u.referenced_appids)
              for (const D of d.jsondata.referenced_appids) B.add(D);
            return B;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(d) {
            const m = _.HD.GetTimeNowWithOverride(),
              f = d.GetCalendarItemsInTimeRange(m - 3600, m);
            for (const j of f.rgCalendarItems)
              w.O3.QueueLoadPartnerEvent(j.clanid, j.unique_id);
            const B = f.rgCalendarItems.map((j) =>
                w.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  x.b.InitFromClanID(j.clanid),
                  j.unique_id,
                  0,
                ),
              ),
              D = await Promise.all(B),
              J = new Map();
            for (const j of D)
              if (j && !(j.endTime && j.endTime < m))
                for (const Y of j.GetBroadcastWhitelistAsSteamIDs())
                  J.has(Y) ? J.get(Y).push(j) : J.set(Y, [j]);
            return J;
          }
          IsBroadcasterAlreadyBound(d, m) {
            const u = this.m_mapBroadcasterSteamIDToEvents.get(d),
              f = u ? u.length : 0;
            if ((m ? m.length : 0) != f) return !1;
            for (let D = 0; D < f; D++) if (u[D] != m[D].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(d, m) {
            let u = new Map();
            for (const f of d) {
              if (!f) continue;
              const B = ne.ParseEventModelPresenters(f, m);
              for (const D of B)
                D.steamID && u.set(D.steamID.ConvertTo64BitString(), D);
            }
            return u;
          }
          RemoveCachedDataIfNotInMap(d) {
            const m = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((u, f) => {
              d.has(f) || m.push(f);
            }),
              m.forEach((u) => {
                this.m_mapBroadcasterSteamIDData.delete(u),
                  this.m_mapBroadcasterSteamIDToEvents.delete(u);
              });
          }
          static BuildAppIDRefsForEventList(d, m) {
            const u = new Set();
            for (const f of d)
              ne.ParseEventModelAppReferences(f, m).forEach((D) => u.add(D));
            return Array.from(u);
          }
          UpdateCachedDataFromEvents(d, m) {
            d.forEach((u, f) => {
              if (this.IsBroadcasterAlreadyBound(f, u)) return;
              const B = {
                m_mapPresenters: ne.BuildSteamIDToPresenterMapFromEventList(
                  u,
                  m,
                ),
                m_rgAppIDs: ne.BuildAppIDRefsForEventList(u, m),
              };
              this.m_mapBroadcasterSteamIDData.set(f, B),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  f,
                  u.map((D) => D.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(d, m) {
            const u = await this.BuildBroadcasterSteamIDToActiveEventMap(d);
            this.RemoveCachedDataIfNotInMap(u),
              this.UpdateCachedDataFromEvents(u, m);
          }
          GetPresenterMapForBroadcasterSteamID(d) {
            var m;
            return (m = this.m_mapBroadcasterSteamIDData.get(d)) == null
              ? void 0
              : m.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(d) {
            var m;
            return (m = this.m_mapBroadcasterSteamIDData.get(d)) == null
              ? void 0
              : m.m_rgAppIDs;
          }
        };
        re([k.sH], P.prototype, "m_mapBroadcasterSteamIDData", 2);
        let ae = P;
        const R = new ae();
      },
      22950: (be, de, S) => {
        S.d(de, { es: () => Z, fK: () => qe, a0: () => Xe, fO: () => Le });
        var k = S(41735),
          x = S.n(k),
          _ = S(14947),
          w = S(6600),
          pe = S(90828),
          q = Object.defineProperty,
          $ = (l, e, t) =>
            e in l
              ? q(l, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (l[e] = t),
          re = (l, e, t) => $(l, typeof e != "symbol" ? e + "" : e, t);
        function le(l, e, t) {
          return [l, e, t];
        }
        class P extends Error {}
        class ae extends pe.J8 {
          constructor(e) {
            super(), re(this, "m_appid"), (this.m_appid = e || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(e) {
            if (typeof e != "string" || !e.match(/^#[0-9a-fA-F]{6}$/))
              throw new P("expected color string");
            return [
              parseInt(e.substring(1, 3), 16),
              parseInt(e.substring(3, 5), 16),
              parseInt(e.substring(5, 7), 16),
            ];
          }
          parseString(e) {
            if (typeof e == "string") return e;
            throw new P("expected string");
          }
          parseNumber(e) {
            if (typeof e == "number") return e;
            throw new P("expected number");
          }
          parseDate(e) {
            if (typeof e == "number") return new Date(e);
            throw new P("expected timestamp");
          }
          parseArray(e, t) {
            let a = [];
            if (typeof e != "object" || !Array.isArray(e))
              throw new P("expected array");
            let r = e.length;
            for (let o = 0; o < r; ++o)
              try {
                a.push(t(e[o]));
              } catch (h) {
                throw (
                  ((h.message +=
                    `
...while parsing array element ` + o),
                  h)
                );
              }
            return a;
          }
          parseDict(e, t) {
            let a = new Map();
            if (typeof e != "object" || Array.isArray(e))
              throw new P("expected object");
            for (let r in e)
              try {
                a.set(r, t(e[r]));
              } catch (o) {
                throw (
                  ((o.message +=
                    `
...while parsing dictionary element ` + r),
                  o)
                );
              }
            return a;
          }
          parseBracket(e) {
            let t = {
              name: this.parseString(e.name),
              start: this.parseDate(e.start),
              color: [255, 0, 255],
            };
            return (
              "params" in e &&
                (t.params = this.parseDict(
                  e.params,
                  this.parseString.bind(this),
                )),
              "end" in e && (t.end = this.parseDate(e.end)),
              "color" in e && (t.color = this.parseColor(e.color)),
              t
            );
          }
          parseMarker(e) {
            let t = { time: this.parseDate(e.time), color: [0, 255, 255] };
            return (
              "name" in e && (t.name = this.parseString(e.name)),
              "params" in e &&
                (t.params = this.parseDict(
                  e.params,
                  this.parseString.bind(this),
                )),
              "color" in e && (t.color = this.parseColor(e.color)),
              t
            );
          }
          parseSoundTrack(e) {
            let t = {};
            return (
              "song_title" in e &&
                (t.song_title = this.parseString(e.song_title)),
              "appid" in e && (t.appid = this.parseNumber(e.appid)),
              "song_index" in e &&
                (t.song_index = this.parseNumber(e.song_index)),
              t
            );
          }
          parseBroadcastGameData(e) {
            let t = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in e && (t.appid = this.parseNumber(e.appid)),
              "brackets" in e &&
                (t.brackets = this.parseArray(
                  e.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in e &&
                (t.markers = this.parseArray(
                  e.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in e &&
                (t.soundtrack = this.parseSoundTrack(e.soundtrack)),
              t
            );
          }
          convertTime(e, t) {
            return e - t / 1e3;
          }
          UpdateMarkers(e, t) {
            let a = [],
              r = [];
            for (const o of e)
              o.persistent
                ? (r.length > 0 &&
                    (r[r.length - 1].nTimeEnd = this.convertTime(
                      o.Timestamp,
                      t,
                    )),
                  o.name.length > 0 &&
                    r.push({
                      strTemplateName: o.name,
                      nTimeStart: this.convertTime(o.Timestamp, t),
                      nTimeEnd: -1,
                      color: le(o.color_r, o.color_g, o.color_b),
                    }))
                : a.push({
                    strTemplateName: o.name,
                    nTime: this.convertTime(o.Timestamp, t),
                    color: le(o.color_r, o.color_g, o.color_b),
                  });
            return { rgMarkers: a, rgSegments: r };
          }
          UpdateRegions(e) {
            let t = [];
            for (const a of e)
              t.push({
                strTemplateName: a.name,
                min: { x: a.min_x, y: a.min_y },
                max: { x: a.max_x, y: a.max_y },
                behavior: a.behavior,
              });
            return t;
          }
          UpdateSoundtrack(e, t) {}
        }
        var R = S(48937),
          C = S(89083),
          d = S(13854),
          m = S(3166),
          u = S(27066),
          f = S(7409),
          B = S(14043),
          D = S(8323),
          J = S(72604),
          j = Object.defineProperty,
          Y = Object.getOwnPropertyDescriptor,
          ye = (l, e, t) =>
            e in l
              ? j(l, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (l[e] = t),
          ie = (l, e, t, a) => {
            for (
              var r = a > 1 ? void 0 : a ? Y(e, t) : e, o = l.length - 1, h;
              o >= 0;
              o--
            )
              (h = l[o]) && (r = (a ? h(e, t, r) : h(r)) || r);
            return a && r && j(e, t, r), r;
          },
          ee = (l, e, t) => ye(l, typeof e != "symbol" ? e + "" : e, t);
        const Be = 250,
          ve = 250;
        class T {
          constructor(e) {
            ee(this, "m_elVideo"),
              ee(this, "m_peerConnection", null),
              ee(this, "m_strBroadcastSteamID", ""),
              ee(this, "m_ulWebRTCSessionID", ""),
              ee(this, "m_schCandidateTimer", new D.LU()),
              ee(this, "m_nHostCandidateGeneration", 0),
              ee(this, "m_nCandidateUpdateIntervalMS", 0),
              ee(this, "m_listeners", new D.Ji()),
              ee(this, "m_bFirstPlay", !0),
              ee(this, "m_bStatsViewVisible", !1),
              ee(this, "m_schCaptureDisplayStatsTrigger", new D.LU()),
              ee(this, "m_stats", new f._L()),
              (0, _.Gn)(this),
              (this.m_elVideo = e);
          }
          async PlayMPD(e, t, a) {}
          async PlayWebRTC(e, t, a, r, o) {
            (this.m_strBroadcastSteamID = e),
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
            let h = { urls: ["stun:" + r] },
              y = { urls: ["turn:" + r], username: t, credential: a },
              O = { iceServers: [h, y], iceTransportPolicy: "relay" };
            const te = new RTCPeerConnection(O);
            (this.m_peerConnection = te),
              (te.oniceconnectionstatechange = ((oe) => {
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
              (te.onicecandidate = ((oe) => {
                if (oe.candidate) {
                  const ce = new FormData();
                  ce.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    ce.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    ce.append("sdp_mid", String(oe.candidate.sdpMid)),
                    ce.append(
                      "sdp_mline_index",
                      String(oe.candidate.sdpMLineIndex),
                    ),
                    ce.append("candidate", oe.candidate.candidate),
                    x()
                      .post(
                        `${m.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        ce,
                      )
                      .then((ue) => {
                        const he = ue.data;
                        (he.success && he.success == J.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(he.success),
                          );
                      })
                      .catch((ue) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + ue,
                        ),
                      );
                }
              }).bind(this)),
              (te.ontrack = ((oe) => {
                oe.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = oe.streams[0]),
                  this.Play());
              }).bind(this)),
              te
                .setRemoteDescription({ type: "offer", sdp: o })
                .then(async () => {
                  var oe, ce;
                  await te.setLocalDescription(await te.createAnswer());
                  const ue = new FormData();
                  ue.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    ue.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    ue.append(
                      "answer",
                      (ce =
                        (oe = te.localDescription) == null ? void 0 : oe.sdp) !=
                        null
                        ? ce
                        : "",
                    );
                  try {
                    await x()
                      .post(
                        `${m.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        ue,
                      )
                      .then((he) => {
                        const Fe = he.data;
                        if (!(Fe.success && Fe.success == J.R))
                          throw new Error(String(Fe.success));
                      });
                  } catch (he) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + he,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = Be),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                });
          }
          async GetHostCandidates() {
            const e = new FormData();
            e.append("broadcaststeamid", this.m_strBroadcastSteamID),
              e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              e.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await x()
                .post(
                  `${m.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  e,
                )
                .then((t) => {
                  const a = t.data,
                    r = a.data,
                    o = this.m_peerConnection;
                  if (a.success && a.success == J.R)
                    o &&
                    r.candidate_generation > this.m_nHostCandidateGeneration
                      ? (r.candidates.forEach((h) => {
                          const y = new RTCIceCandidate({
                            sdpMid: h.sdp_mid,
                            sdpMLineIndex: h.sdp_mline_index,
                            candidate: h.candidate,
                          });
                          o.addIceCandidate(y).catch((O) => console.error(O));
                        }),
                        (this.m_nHostCandidateGeneration =
                          r.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(a.success));
                });
            } catch (t) {
              console.log("Failed to get WebRTC session ICE candidates" + t),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(e, t = null) {
            let a = new CustomEvent(e, {
              cancelable: !0,
              bubbles: !0,
              detail: t,
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
            const e = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let t = !1;
            const a = () => {
                (t = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              r = (h, y) => !1,
              o = (h, y) => !1;
            try {
              await this.m_elVideo.play(), a();
            } catch (h) {
              h.name === "NotAllowedError"
                ? r("Failed to play video, probably due to auto play policy", h)
                : o("Failed to play video", h);
            }
            !t && e && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(e) {
            return this.Play(), 0;
          }
          Seek(e) {
            return 0;
          }
          JumpTime(e) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(e) {
            this.m_elVideo.muted = e;
          }
          SetVolume(e) {
            (e = d.OQ(e, 0, 1)), (this.m_elVideo.volume = e);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(e) {
            e && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  ve,
                  this.CaptureStatsForDisplay,
                ))
              : !e &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = e);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                ve,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(e) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(e) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let e = [];
            return e.push({ id: B.Y, displayName: "Auto", selected: !0 }), e;
          }
          SetVideoRepresentation(e) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        ie([u.o], T.prototype, "PlayWebRTC", 1),
          ie([_.XI.bound], T.prototype, "CaptureStatsForDisplay", 1),
          ie([u.o], T.prototype, "OnVideoPause", 1),
          ie([u.o], T.prototype, "OnVideoResize", 1);
        var s = S(99412),
          i = S(90711),
          p = S(41635),
          g = S(71742),
          b = S(18210),
          I = S(34592),
          G = S(40497),
          Q = S(9032),
          se = S(35038),
          Ve = S(77008),
          Ye = S(60298),
          K = S(80613),
          M = S.n(K),
          n = S(75245),
          $e = Object.defineProperty,
          Qe = (l, e, t) =>
            e in l
              ? $e(l, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (l[e] = t),
          X = (l, e, t) => Qe(l, typeof e != "symbol" ? e + "" : e, t);
        function ft(l) {
          return "unknown ETrailerConvertState ( " + l + " )";
        }
        function St(l) {
          return "unknown ETrailerConvertTargetType ( " + l + " )";
        }
        const Te = class E extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.video_id || n.Sg(E.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
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
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(E.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new E();
            return E.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(E.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(E.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        };
        X(Te, "sm_m"), X(Te, "sm_mbf");
        let Ze = Te;
        const Me = class A extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.video_id || n.Sg(A.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
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
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(A.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new A();
            return A.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(A.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(A.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        };
        X(Me, "sm_m"), X(Me, "sm_mbf");
        let et = Me;
        const Pe = class U extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.encryption_key || n.Sg(U.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    encryption_key: {
                      n: 1,
                      br: n.qM.readBytes,
                      bw: n.gp.writeBytes,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(U.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new U();
            return U.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(U.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(U.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        };
        X(Pe, "sm_m"), X(Pe, "sm_mbf");
        let tt = Pe;
        const Oe = class L extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.app_id || n.Sg(L.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    app_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    client_cellid: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(L.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new L();
            return L.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(L.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(L.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        };
        X(Oe, "sm_m"), X(Oe, "sm_mbf");
        let at = Oe;
        const Re = class W extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.app_id || n.Sg(W.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    app_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    opf_settings: {
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
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(W.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new W();
            return W.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(W.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(W.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        };
        X(Re, "sm_m"), X(Re, "sm_mbf");
        let st = Re;
        const ke = class F extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.app_id || n.Sg(F.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
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
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(F.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new F();
            return F.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(F.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(F.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        };
        X(ke, "sm_m"), X(ke, "sm_mbf");
        let Ce = ke;
        const Ge = class H extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.bookmarks || n.Sg(H.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: { bookmarks: { n: 1, c: Ce, r: !0, q: !0 } },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = n.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(H.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new H();
            return H.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(H.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(H.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        };
        X(Ge, "sm_m"), X(Ge, "sm_mbf");
        let He = Ge;
        const Ee = class z extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.appids || n.Sg(z.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
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
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(z.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new z();
            return z.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(z.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(z.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        };
        X(Ee, "sm_m"), X(Ee, "sm_mbf");
        let rt = Ee;
        const Ae = class N extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.bookmarks || n.Sg(N.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: { bookmarks: { n: 1, c: Ce, r: !0, q: !0 } },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = n.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, t) {
            return n.BT(N.M(), e, t);
          }
          static fromObject(e) {
            return n.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (M().BinaryReader)(e),
              a = new N();
            return N.deserializeBinaryFromReader(a, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return n.zj(N.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (M().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            n.i0(N.M(), e, t);
          }
          serializeBase64String() {
            var e = new (M().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        };
        X(Ae, "sm_m"), X(Ae, "sm_mbf");
        let it = Ae;
        var Ue;
        ((l) => {
          function e(r, o, h) {
            return r.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, se.I8)(Ze, o, h),
              et,
              { ePrivilege: 1 },
            );
          }
          l.ClientGetVideoURL = e;
          function t(r, o) {
            return r.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, se.I8)(He, o),
              { ePrivilege: 1 },
            );
          }
          l.SetVideoBookmark = t;
          function a(r, o, h) {
            return r.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, se.I8)(rt, o, h),
              it,
              { ePrivilege: 1 },
            );
          }
          l.GetVideoBookmarks = a;
        })(Ue || (Ue = {}));
        var ze;
        ((l) => {
          l.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: tt,
          };
        })(ze || (ze = {}));
        var Ne;
        ((l) => {
          function e(t, a, r) {
            return t.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, se.I8)(at, a, r),
              st,
              { ePrivilege: 1 },
            );
          }
          l.ClientGetOPFSettings = e;
        })(Ne || (Ne = {}));
        var nt = Object.defineProperty,
          ot = (l, e, t) =>
            e in l
              ? nt(l, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (l[e] = t),
          we = (l, e, t) => ot(l, typeof e != "symbol" ? e + "" : e, t);
        const xe = class fe {
          constructor() {
            we(this, "m_transport", null),
              we(this, "m_mapBookmarks", new Map());
          }
          SetBookmarkForApp(e, t) {
            this.ValidateBookmarkData(t)
              ? this.m_mapBookmarks.set(e, Ce.fromObject(t))
              : this.InitializeBookmarkForApp(e);
          }
          ValidateBookmarkData(e) {
            const t = e;
            return typeof t == "object"
              ? Number.isInteger(t.playback_position_in_seconds) &&
                  Number.isInteger(t.app_id)
              : !1;
          }
          InitializeBookmarkForApp(e) {
            if (!this.m_mapBookmarks.has(e)) {
              let t = {
                app_id: e,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(e, new Ce(t));
            }
          }
          GetBookmarkPlayTimeInSeconds(e) {
            let t = this.m_mapBookmarks.get(e);
            if (t) {
              let a = t.playback_position_in_seconds();
              if (Number.isInteger(a)) return a;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(e, t, a, r, o) {
            if (!m.iA.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const h = se.w.Init(He);
            let y = this.m_mapBookmarks.get(e);
            if (y) {
              let O = !1;
              y.app_id() != e && ((O = !0), y.set_app_id(e)),
                y.playback_position_in_seconds() != t &&
                  ((O = !0), y.set_playback_position_in_seconds(t)),
                (a = a || "0"),
                y.video_track_id() != a && (y.set_video_track_id(a), (O = !0)),
                (r = r || "0"),
                y.audio_track_id() != r && (y.set_audio_track_id(r), (O = !0)),
                (o = o || "0"),
                o != y.timedtext_track_id() &&
                  (y.set_timedtext_track_id(o), (O = !0)),
                O &&
                  (h.Body().add_bookmarks(y),
                  Ue.SetVideoBookmark(this.m_transport, h));
            }
          }
          static Get() {
            return (
              fe.s_VODStore ||
                ((fe.s_VODStore = new fe()), fe.s_VODStore.Init()),
              fe.s_VODStore
            );
          }
          Init() {
            m.iA.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const e =
                (0, m.yK)() == "community"
                  ? m.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : m.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              t = {};
            try {
              let a = await x().get(e, { params: t, withCredentials: !0 });
              if (
                a &&
                a.status == 200 &&
                a.data &&
                a.data.success == J.R &&
                a.data.webapi_token
              ) {
                this.m_transport = (0, Ye.C)(
                  new Ve.D(m.TS.WEBAPI_BASE_URL, a.data.webapi_token),
                ).GetServiceTransport();
                return;
              }
            } catch (a) {
              let r = (0, I.H)(a);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  r.strErrorMsg,
                r,
              );
            }
          }
        };
        we(xe, "s_VODStore");
        let De = xe;
        class lt {
          constructor(e) {
            we(this, "m_appid"), (this.m_appid = e);
          }
          async SetBookmark(e, t, a, r) {
            m.iA.logged_in &&
              De.Get().SendBookMarkedTimeToServer(
                this.m_appid,
                Math.floor(e),
                t,
                a,
                r,
              );
          }
          GetBeginPlaytime() {
            return m.iA.logged_in
              ? De.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
        var Ie = S(44930),
          je = Object.defineProperty,
          mt = Object.getOwnPropertyDescriptor,
          dt = (l, e, t) =>
            e in l
              ? je(l, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (l[e] = t),
          v = (l, e, t, a) => {
            for (
              var r = a > 1 ? void 0 : a ? mt(e, t) : e, o = l.length - 1, h;
              o >= 0;
              o--
            )
              (h = l[o]) && (r = (a ? h(e, t, r) : h(r)) || r);
            return a && r && je(e, t, r), r;
          },
          c = (l, e, t) => dt(l, typeof e != "symbol" ? e + "" : e, t);
        const Ke = 1800,
          ct = 1e3,
          pt = 5 * 1e3,
          Le = 7;
        var qe = ((l) => (
          (l[(l.None = 0)] = "None"),
          (l[(l.Unlocking = 1)] = "Unlocking"),
          (l[(l.Loading = 2)] = "Loading"),
          (l[(l.Ready = 3)] = "Ready"),
          (l[(l.Error = 4)] = "Error"),
          l
        ))(qe || {});
        async function ut(l, e, t) {
          if (!e) return;
          let a = new FormData();
          a.append("steamid", l),
            a.append("broadcastid", e),
            a.append("viewertoken", t);
          try {
            await x().post(m.TS.CHAT_BASE_URL + "broadcast/stopwatching", a);
          } catch {}
        }
        class We {
          constructor() {
            c(this, "m_rtUnlockTime", 0),
              c(this, "m_schUnlockTimeout", new D.LU()),
              c(this, "m_broadcast"),
              c(this, "m_video");
          }
          UnlockH264(e, t) {
            this.BCanUnlockH264()
              ? (e.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = e),
                (this.m_video = t),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : e.SetState(4, (0, b.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, Ie.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, Ie.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, Ie.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, Ie.Dp)("BrowserView.PostMessageToParent")
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
            if ((0, R.Mc)() || (0, R.aM)()) {
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
                  (0, b.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class Se {
          constructor() {
            c(this, "m_steamIDBroadcast", ""),
              c(this, "m_ulBroadcastID", ""),
              c(this, "m_ulViewerToken", ""),
              c(this, "m_strCDNAuthUrlParameters"),
              c(this, "m_bWebRTC", !1),
              c(this, "m_data"),
              c(this, "m_eWatchState", 0),
              c(this, "m_strStateDescription", ""),
              c(this, "m_rgVideos", []),
              c(this, "m_schManifestTimeout", new D.LU()),
              c(this, "m_schHeartbeatTimeout", new D.LU()),
              (0, _.Gn)(this);
          }
          SetState(e, t = "") {
            (this.m_eWatchState = e),
              (this.m_strStateDescription = t),
              e == 4 && console.log(this.m_strStateDescription);
          }
        }
        v([_.sH], Se.prototype, "m_ulBroadcastID", 2),
          v([_.sH], Se.prototype, "m_eWatchState", 2),
          v([_.sH], Se.prototype, "m_strStateDescription", 2),
          v([_.XI], Se.prototype, "SetState", 1);
        class me {
          constructor(e) {
            c(this, "m_steamIDBroadcast", ""),
              c(this, "m_bInitialized", !1),
              c(this, "m_strTitle", ""),
              c(this, "m_strAppId", "" + Le),
              c(this, "m_nAppID", Le),
              c(this, "m_strAppTitle", ""),
              c(this, "m_strThumbnailUrl", ""),
              c(this, "m_nViewerCount", 0),
              c(this, "m_bIsOnline", !1),
              c(this, "m_schUpdateTimeout", new D.LU()),
              c(this, "m_nRefCount", 0),
              (0, _.Gn)(this),
              (this.m_steamIDBroadcast = e);
          }
        }
        v([_.sH], me.prototype, "m_bInitialized", 2),
          v([_.sH], me.prototype, "m_strTitle", 2),
          v([_.sH], me.prototype, "m_strAppId", 2),
          v([_.sH], me.prototype, "m_nAppID", 2),
          v([_.sH], me.prototype, "m_strAppTitle", 2),
          v([_.sH], me.prototype, "m_strThumbnailUrl", 2),
          v([_.sH], me.prototype, "m_nViewerCount", 2),
          v([_.sH], me.prototype, "m_bIsOnline", 2);
        class ge {
          constructor() {
            c(this, "m_eWatchState", 0),
              c(this, "m_strStateDescription", ""),
              c(this, "m_rgVideos", []),
              (0, _.Gn)(this);
          }
          SetState(e, t = "") {
            (this.m_eWatchState = e),
              (this.m_strStateDescription = t),
              e == 4 && console.log(this.m_strStateDescription);
          }
        }
        v([_.sH], ge.prototype, "m_eWatchState", 2),
          v([_.sH], ge.prototype, "m_strStateDescription", 2),
          v([_.XI], ge.prototype, "SetState", 1);
        class ht extends ge {
          constructor() {
            super(...arguments), c(this, "m_clipID"), c(this, "m_data");
          }
        }
        class _t extends ge {
          constructor() {
            super(...arguments),
              c(this, "m_nAppIDVOD"),
              c(this, "m_manifestURL");
          }
        }
        class Je {
          constructor() {
            c(this, "m_mapBroadcasts", new Map()),
              c(this, "m_mapClips", new Map()),
              c(this, "m_mapVODs", new Map()),
              c(this, "m_activeVideo", null),
              c(this, "m_broadcastSettings", {
                nVolume: 1,
                bMuted: !1,
                ulViewerToken: "0",
              }),
              c(this, "m_schSaveSettings", new D.LU()),
              c(this, "m_broadcastInfos", {}),
              (0, _.Gn)(this),
              this.LoadBroadcastSettings();
          }
          GetBroadcastState(e) {
            if (e.IsBroadcastClip()) {
              let t = this.m_mapClips.get(e.GetBroadcastClipID());
              return t ? t.m_eWatchState : 0;
            } else if (e.IsBroadcastVOD()) {
              const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
              return t ? t.m_eWatchState : 0;
            } else {
              let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
              return t ? t.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(e) {
            if (e.IsBroadcastClip()) {
              let t = this.m_mapClips.get(e.GetBroadcastClipID());
              return t ? t.m_strStateDescription : "";
            } else if (e.IsBroadcastVOD()) {
              const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
              return t ? t.m_strStateDescription : "";
            } else {
              let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
              return t ? t.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(e, t, a, r) {
            let o = this.GetOrCreateBroadcast(t),
              { nVolume: h, bMuted: y } = this.m_broadcastSettings,
              O = new V(e, h, y, a);
            return (
              O.SetBroadcastSteamID(t),
              o.m_rgVideos.push(O),
              (o.m_bWebRTC = r),
              !(0, R.Mc)() && !(0, R.aM)() && new We().UnlockH264(o, O),
              O
            );
          }
          CreateClipVideo(e, t, a) {
            let r = this.GetOrCreateClip(t),
              { nVolume: o, bMuted: h } = this.m_broadcastSettings,
              y = new V(e, o, h, a);
            return (
              y.SetBroadcastClipID(t),
              r.m_rgVideos.push(y),
              !(0, R.Mc)() && !(0, R.aM)() && new We().UnlockH264(r, y),
              y
            );
          }
          CreateVODVideo(e, t, a) {
            let r = this.GetOrCreateVOD(t),
              { nVolume: o, bMuted: h } = this.m_broadcastSettings,
              y = new V(e, o, h, a);
            return (
              y.SetBroadcastAppIDVOD(t),
              r.m_rgVideos.push(y),
              !(0, R.Mc)() && !(0, R.aM)() && new We().UnlockH264(r, y),
              y
            );
          }
          StartVideo(e) {
            if (e.IsBroadcastClip()) {
              console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
              let t = this.m_mapClips.get(e.GetBroadcastClipID());
              if (!t) return;
              this.SetActiveVideo(e),
                t.m_eWatchState == 0
                  ? this.GetClipManifest(t, e.GetWatchLocation())
                  : t.m_eWatchState == 3 && e.StartClip(t);
            } else if (e.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
              let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
              if (!t) return;
              this.SetActiveVideo(e),
                t.m_eWatchState == 0
                  ? this.GetVODManifest(t, e.GetWatchLocation())
                  : t.m_eWatchState == 3 && e.StartVOD(t);
            } else {
              let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
              if (!t) return;
              this.SetActiveVideo(e),
                t.m_eWatchState == 0
                  ? this.GetBroadcastManifest(t, e.GetWatchLocation())
                  : t.m_eWatchState == 3 && e.StartBroadcast(t);
            }
          }
          SetActiveVideo(e) {
            this.m_mapBroadcasts.forEach((t) => {
              for (let a of t.m_rgVideos)
                a != e && a.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((t) => {
                for (let a of t.m_rgVideos)
                  a != e && a.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = e);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((e) => {
              for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(e) {
            let t = e.GetBroadcastSteamID(),
              a = this.m_mapBroadcasts.get(t);
            e.Stop(),
              a &&
                (a.m_ulBroadcastID &&
                  ut(
                    t,
                    a.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                p.Wp(a.m_rgVideos, (r) => r == e),
                this.RemoveBroadcastIfUnused(a));
          }
          StartInfo(e) {
            const t = this.GetOrCreateBroadcastInfo(e);
            return (
              t.m_nRefCount++,
              (!t.m_bInitialized || !t.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(t),
              t
            );
          }
          StopInfo(e) {
            e.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(e) {
            if (!e) return new me("");
            if (!this.m_broadcastInfos[e]) {
              const t = (0, _.sH)(new me(e));
              this.m_broadcastInfos[e] = t;
            }
            return this.m_broadcastInfos[e];
          }
          GetOrCreateBroadcast(e) {
            let t = this.m_mapBroadcasts.get(e);
            return (
              t ||
              ((t = new Se()),
              (t.m_steamIDBroadcast = e),
              (t.m_eWatchState = 0),
              this.m_mapBroadcasts.set(e, t),
              t)
            );
          }
          GetBroadcast(e) {
            return this.m_mapBroadcasts.get(e);
          }
          GetBroadcastClip(e) {
            return this.m_mapClips.get(e);
          }
          GetBroadcastVOD(e) {
            return this.m_mapVODs.get(e);
          }
          RemoveBroadcastIfUnused(e) {
            e.m_rgVideos.length ||
              (e.m_schHeartbeatTimeout.Cancel(),
              e.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(e.m_steamIDBroadcast));
          }
          GetOrCreateClip(e) {
            let t = this.m_mapClips.get(e);
            return (
              t ||
              ((t = new ht()),
              (t.m_clipID = e),
              (t.m_eWatchState = 0),
              this.m_mapClips.set(e, t),
              t)
            );
          }
          GetOrCreateVOD(e) {
            let t = this.m_mapVODs.get(e);
            return (
              t ||
              ((t = new _t()),
              (t.m_nAppIDVOD = e),
              (t.m_eWatchState = 0),
              this.m_mapVODs.set(e, t),
              t)
            );
          }
          async LoadBroadcastInfo(e) {
            let t = "0",
              a = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
            if ((a && (t = a.m_ulBroadcastID), e.m_nRefCount == 0)) return;
            const r = {
              steamid: e.m_steamIDBroadcast,
              broadcastid: t,
              location:
                a &&
                a.m_rgVideos &&
                a.m_rgVideos[0] &&
                a.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const o = await x().get(
                `${m.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: r },
              );
              if (!o || !o.data || !o.data.success || o.data.success != J.R) {
                e.m_bInitialized = !0;
                return;
              }
              const h = o.data;
              (0, _.h5)(() => {
                (e.m_bInitialized = !0),
                  (e.m_strTitle = h.title),
                  (e.m_strAppId = h.appid),
                  (e.m_nAppID = Number.parseInt(h.appid)),
                  (e.m_strAppTitle = h.app_title),
                  (e.m_strThumbnailUrl = h.thumbnail_url),
                  (e.m_nViewerCount = h.viewer_count),
                  (e.m_bIsOnline = h.is_online),
                  !e.m_strTitle &&
                    w.td &&
                    ((e.m_strTitle = w.td.name),
                    (e.m_strAppTitle = w.td.appName || w.td.name));
                const y = h.update_interval;
                y &&
                  typeof y == "number" &&
                  e.m_schUpdateTimeout.Schedule(y * 1e3, () =>
                    this.LoadBroadcastInfo(e),
                  );
              });
            } catch (o) {
              console.error(o);
            }
          }
          DelayedGetBroadcastManifest(e, t, a = Date.now()) {
            e.m_schManifestTimeout.Schedule(pt, () =>
              this.GetBroadcastManifest(e, t, a),
            );
          }
          async GetBroadcastManifest(e, t, a = Date.now()) {
            e.SetState(2, "");
            let r = {
                steamid: e.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: t,
                sessionid: (0, m.KC)(),
                is_webrtc: e.m_bWebRTC,
              },
              o = null;
            try {
              o = await x().get(
                m.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: r, withCredentials: !0 },
              );
            } catch (O) {
              let te = (0, I.H)(O);
              console.error(
                "Failed to get broadcast manifest!" + te.strErrorMsg,
                te,
              );
            }
            if (!o || o.status != 200) {
              e.SetState(4, (0, b.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let h = o.data;
            h.viewertoken && this.SetViewerToken(h.viewertoken);
            let y = h.success;
            if (y == "ready")
              e.SetState(3),
                (e.m_ulBroadcastID = h.broadcastid),
                (e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (e.m_strCDNAuthUrlParameters = h.cdn_auth_url_parameters),
                (e.m_bWebRTC = h.is_webrtc),
                (e.m_data = h),
                this.LoadBroadcast(e),
                setTimeout(() => {
                  e.m_schHeartbeatTimeout.Schedule(
                    e.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(e),
                  );
                }, Math.random() * 3e4);
            else if (y == "waiting") {
              e.SetState(2, (0, b.we)("#BroadcastWatch_WaitingForResponse"));
              let O = Date.now() - a;
              if (O > 60 * 1e3) {
                e.SetState(4, (0, b.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let te = O > 30 * 1e3 ? h.retry : 5e3;
              e.m_schManifestTimeout.Schedule(te, () =>
                this.GetBroadcastManifest(e, t, a),
              );
            } else
              y == "waiting_for_start"
                ? (e.SetState(2, (0, b.we)("#BroadcastWatch_WaitingForStart")),
                  e.m_schManifestTimeout.Schedule(h.retry, () =>
                    this.GetBroadcastManifest(e, t, a),
                  ))
                : y == "waiting_for_reconnect"
                  ? (e.SetState(
                      2,
                      (0, b.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    e.m_schManifestTimeout.Schedule(h.retry, () =>
                      this.GetBroadcastManifest(e, t, a),
                    ))
                  : y == "end"
                    ? e.SetState(4, (0, b.we)("#BroadcastWatch_NotAvailable"))
                    : y == "too_many_broadcasts"
                      ? e.SetState(
                          4,
                          (0, b.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : y == "system_not_supported"
                        ? e.SetState(
                            4,
                            (0, b.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : y == "user_restricted"
                          ? e.SetState(
                              4,
                              (0, b.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : y == "poor_upload_quality"
                            ? e.SetState(
                                4,
                                (0, b.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : y == "request_failed"
                              ? e.SetState(
                                  4,
                                  (0, b.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : y == "too_many_viewers"
                                ? e.SetState(
                                    4,
                                    (0, b.we)("#BroadcastWatch_TooManyViewers"),
                                  )
                                : e.SetState(
                                    4,
                                    (0, b.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(e, t) {
            e.SetState(2, "");
            let a = {
                clipid: e.m_clipID,
                watchlocation: t,
                sessionid: (0, m.KC)(),
              },
              r = null;
            try {
              r = await x().get(
                m.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: a, withCredentials: !0 },
              );
            } catch (h) {
              console.error(h), console.log("Failed to get clip manifest!");
            }
            if (!r || r.status != 200) {
              e.SetState(4, (0, b.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let o = r.data;
            o.success == J.R
              ? (e.SetState(3), (e.m_data = o), this.LoadClip(e))
              : e.SetState(4, (0, b.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(e, t) {
            e.SetState(2, "");
            let a = await G.L.fetchQuery((0, Q.uj)(e.m_nAppIDVOD)).catch(
              (r) => {
                console.error(
                  "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                    e.m_nAppIDVOD,
                  r,
                );
              },
            );
            a
              ? (a.bookmark
                  ? De.Get().SetBookmarkForApp(e.m_nAppIDVOD, a.bookmark)
                  : De.Get().InitializeBookmarkForApp(e.m_nAppIDVOD),
                e.SetState(3),
                (e.m_manifestURL = a.video_url),
                this.LoadVOD(e))
              : e.SetState(4, (0, b.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(e) {
            let t = new FormData();
            t.append("steamid", e.m_steamIDBroadcast),
              t.append("broadcastid", e.m_ulBroadcastID),
              t.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              x().post(m.TS.CHAT_BASE_URL + "broadcast/heartbeat/", t),
              e.m_schHeartbeatTimeout.Schedule(
                e.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(e),
              );
          }
          LoadBroadcast(e) {
            const t = this.m_activeVideo;
            t &&
              e.m_rgVideos.findIndex((a) => a == t) >= 0 &&
              t.StartBroadcast(e);
          }
          LoadClip(e) {
            const t = this.m_activeVideo;
            t && e.m_rgVideos.findIndex((a) => a == t) >= 0 && t.StartClip(e);
          }
          LoadVOD(e) {
            const t = this.m_activeVideo;
            t && e.m_rgVideos.findIndex((a) => a == t) >= 0 && t.StartVOD(e);
          }
          BroadcastDownloadFailed(e, t = !0, a = C.N_.Invalid) {
            e.Stop();
            let r = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            r &&
              r.m_eWatchState != 2 &&
              (r.m_bWebRTC && t && (r.m_bWebRTC = !1),
              a == C.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(r, e.GetWatchLocation())
                : this.GetBroadcastManifest(r, e.GetWatchLocation()));
          }
          UserInputClickVideo(e) {
            if (
              this.m_activeVideo != e &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = e),
              !e.IsBroadcastClip() && !e.IsBroadcastVOD())
            ) {
              let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
              t && this.GetBroadcastManifest(t, e.GetWatchLocation());
            }
            e.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let e = window.localStorage.getItem("broadcastSettings");
            if (!e) return;
            let t = JSON.parse(e);
            if (!t) return;
            Object.assign(this.m_broadcastSettings, t);
            let a = this.m_broadcastSettings;
            (a.bMuted = !!a.bMuted),
              (a.nVolume = d.OQ(a.nVolume, 0, 1)),
              typeof a.ulViewerToken != "string" && (a.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(ct, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(e) {
            this.m_broadcastSettings.ulViewerToken != e &&
              ((this.m_broadcastSettings.ulViewerToken = e),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(e, t) {
            (this.m_broadcastSettings.nVolume == e &&
              this.m_broadcastSettings.bMuted == t) ||
              ((this.m_broadcastSettings.nVolume = e),
              (this.m_broadcastSettings.bMuted = t),
              this.SaveBroadcastSettings());
          }
        }
        v([_.sH], Je.prototype, "m_mapBroadcasts", 2);
        var Xe = ((l) => (
          (l[(l.Timeline = 1)] = "Timeline"),
          (l[(l.Minimap = 2)] = "Minimap"),
          l
        ))(Xe || {});
        class V {
          constructor(e, t, a, r) {
            c(this, "m_elVideo"),
              c(this, "m_player", null),
              c(this, "m_listeners", new D.Ji()),
              c(this, "m_gameDataParser", null),
              c(this, "m_eWatchLocation", i.nn.Tq),
              c(this, "m_bStartWithSubtitles", !1),
              c(this, "m_steamIDBroadcast", ""),
              c(this, "m_BroadcastInfo", null),
              c(this, "m_broadcastClipID", ""),
              c(this, "m_nBroadcastAppIDVOD", 0),
              c(this, "m_bPaused", !1),
              c(this, "m_nPlaybackTime", 0),
              c(this, "m_bBuffering", !1),
              c(this, "m_bOnLiveEdge", !1),
              c(this, "m_nVolume", 0),
              c(this, "m_bMuted", !1),
              c(this, "m_bUserInputNeeded", !1),
              c(this, "m_bIsReplay", !1),
              c(this, "m_nTimelineDuration", Ke),
              c(this, "m_nVideoStartPos", 0),
              c(this, "m_nVideoEndPos", 0),
              c(this, "m_editorStartTime", 0),
              c(this, "m_editorEndTime", 0),
              c(this, "m_rgMarkers", _.sH.array()),
              c(this, "m_rgSegments", _.sH.array()),
              c(this, "m_rgRegions", _.sH.array()),
              c(this, "m_fnOnVideoEnd"),
              c(this, "m_videoEndingTimer"),
              (0, _.Gn)(this),
              (this.m_elVideo = e),
              (this.m_nVolume = t),
              (this.m_bMuted = a),
              (this.m_eWatchLocation = r);
          }
          SetBroadcastSteamID(e) {
            this.m_steamIDBroadcast = e;
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
          SetStatsViewIsVisible(e) {
            this.m_player && this.m_player.SetStatsViewIsVisible(e);
          }
          GetDASHPlayerStats() {
            var e;
            return (e = this.m_player) == null
              ? void 0
              : e.GetDASHPlayerStats();
          }
          BHasDASHStats() {
            return this.m_player != null;
          }
          IsTimelineMapActive() {
            return !1;
          }
          CanSeek() {
            var e, t;
            return (t = (e = this.m_player) == null ? void 0 : e.CanSeek()) !=
              null
              ? t
              : !1;
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
          SetBroadcastClipID(e) {
            this.m_broadcastClipID = e;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(e) {
            this.m_nBroadcastAppIDVOD = e;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(e) {
            var t;
            (t = this.m_player) == null || t.SetVideoRepresentation(e);
          }
          GetBroadcastInfo() {
            return this.m_BroadcastInfo;
          }
          BHasTimedText() {
            var e, t;
            return (t =
              (e = this.m_player) == null ? void 0 : e.BHasTimedText()) != null
              ? t
              : !1;
          }
          BHasPlayer() {
            return !!this.m_player;
          }
          ListSubtitles() {
            return this.m_elVideo.textTracks;
          }
          GetSubtitles() {
            for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
              const t = this.m_elVideo.textTracks[e];
              if (t.mode === "showing") return t;
            }
            return null;
          }
          SetSubtitles(e) {
            let t = e ? b.bi[e] : s.xPp;
            this.m_player.SetSubtitles(t);
          }
          SetStartWithSubtitles(e) {
            this.m_bStartWithSubtitles = e;
          }
          GetBroadcastState() {
            return Z.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return Z.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(e) {
            this.m_fnOnVideoEnd = e;
          }
          InitPlayer() {
            (0, g.wT)(!this.m_player, "Initialized twice?"),
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
              (this.m_nTimelineDuration = Ke),
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
          StartBroadcast(e) {
            var t, a;
            if ((this.InitPlayer(), e.m_data.url)) {
              let o = new C.Zn(this.m_elVideo);
              o.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = o),
                o.PlayMPD(
                  e.m_data.url,
                  e.m_data.hls_url,
                  void 0,
                  e.m_strCDNAuthUrlParameters,
                );
            } else {
              let o = new T(this.m_elVideo);
              (this.m_player = o),
                o.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  e.m_ulViewerToken,
                  e.m_data.webrtc_session_id,
                  e.m_data.webrtc_turn_server,
                  e.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              (t = this.m_player) == null || t.SetMuted(this.m_bMuted);
            let r =
              (a = this.m_player) == null ? void 0 : a.GetDASHPlayerStats();
            r &&
              r.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                m.iA.steamid,
                e.m_ulBroadcastID,
                e.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = Z.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(e) {
            var t;
            this.InitPlayer();
            let a = new C.Zn(this.m_elVideo);
            a.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = a),
              a.PlayMPD(e.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              (t = this.m_player) == null || t.SetMuted(this.m_bMuted);
          }
          StartVOD(e) {
            var t;
            this.InitPlayer();
            let a = new C.Zn(this.m_elVideo);
            a.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = a),
              m.iA.logged_in &&
                e.m_nAppIDVOD &&
                a.SetBookmarkAdapter(new lt(e.m_nAppIDVOD)),
              e.m_manifestURL && a.PlayMPD(e.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              (t = this.m_player) == null || t.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (Z.StopInfo(this.m_BroadcastInfo),
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
            const e = this.GetBroadcastState();
            if (e == 0 || this.IsBroadcastClip()) {
              Z.StartVideo(this);
              return;
            } else if (e == 3)
              if ((Z.SetActiveVideo(this), this.m_player)) this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const t = Z.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                t && this.StartVOD(t);
              } else {
                const t = Z.GetBroadcast(this.m_steamIDBroadcast);
                t && this.StartBroadcast(t);
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
          JumpTime(e) {
            var t;
            (t = this.m_player) == null || t.JumpTime(e);
          }
          Seek(e) {
            var t;
            (t = this.m_player) == null || t.Seek(e);
          }
          SeekAndPlay(e) {
            var t;
            (t = this.m_player) == null || t.SeekAndPlay(e);
          }
          JumpToLiveEdge() {
            const e = this.m_player;
            e &&
              (e.IsLiveContent()
                ? this.SeekAndPlay(e.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(e.GetAvailableVideoStartTime()));
          }
          SetVolume(e) {
            this.m_player &&
              (this.m_player.SetVolume(e),
              (this.m_nVolume = this.m_player.GetVolume())),
              Z.SaveVolumeChange(e, this.m_bMuted);
          }
          SetMute(e) {
            this.m_player && this.m_player.SetMuted(e),
              (this.m_bMuted = e),
              Z.SaveVolumeChange(this.m_nVolume, e);
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
            const e = this.m_player;
            if (e)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = e.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = e.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = e.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = e.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = e.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = e.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    e.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const t = this.m_fnOnVideoEnd;
                  t &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < C.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      t();
                    }, 400));
                }
                (this.m_bBuffering = e.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < C.Br),
                  e.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const e = this.m_player;
            e &&
              ((this.m_nVolume = e.GetVolume()), (this.m_bMuted = e.IsMuted()));
          }
          OnGameDataUpdate(e) {
            var t, a;
            let r = e.detail;
            if (!r || typeof r.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != r.gamedata.__appid) &&
              (this.m_gameDataParser = new ae(r.gamedata.__appid));
            const o =
              (a =
                (t = this.m_player) == null
                  ? void 0
                  : t.GetLiveContentStartTime().getTime()) != null
                ? a
                : 0;
            if ("timelinemarkers" in r.gamedata) {
              const h = this.m_gameDataParser.UpdateMarkers(
                r.gamedata.__timelinemarkers,
                o,
              );
              h &&
                (this.m_rgMarkers.replace(h.rgMarkers || []),
                this.m_rgSegments.replace(h.rgSegments || []));
              const y = this.m_gameDataParser.UpdateRegions(
                r.gamedata.__regions,
              );
              y && this.m_rgRegions.replace(y);
            } else
              "soundtrack" in r.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  r.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(e) {
            let t = e.detail || C.N_.Invalid;
            Z.BroadcastDownloadFailed(this, !0, t);
          }
          OnWebRTCRetry() {
            Z.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            Z.BroadcastDownloadFailed(this, !0);
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
          GetTimeAtMousePosition(e, t, a, r) {
            let o = d.Fu(e, t.left, t.right, a, r);
            return Math.floor(o + 0.5);
          }
          GetPercentOffsetFromTime(e, t) {
            let a = 0,
              r = 0;
            return (
              t == 1
                ? ((r = this.m_nVideoEndPos),
                  (a = r - this.m_nTimelineDuration))
                : ((a = 0), (r = 0)),
              d.Fu(e, a, r, 0, 100)
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
        v([_.sH], V.prototype, "m_player", 2),
          v([_.sH], V.prototype, "m_bPaused", 2),
          v([_.sH], V.prototype, "m_nPlaybackTime", 2),
          v([_.sH], V.prototype, "m_bBuffering", 2),
          v([_.sH], V.prototype, "m_bOnLiveEdge", 2),
          v([_.sH], V.prototype, "m_nVolume", 2),
          v([_.sH], V.prototype, "m_bMuted", 2),
          v([_.sH], V.prototype, "m_bUserInputNeeded", 2),
          v([_.sH], V.prototype, "m_bIsReplay", 2),
          v([_.sH], V.prototype, "m_nTimelineDuration", 2),
          v([_.sH], V.prototype, "m_nVideoStartPos", 2),
          v([_.sH], V.prototype, "m_nVideoEndPos", 2),
          v([_.sH], V.prototype, "m_editorStartTime", 2),
          v([_.sH], V.prototype, "m_editorEndTime", 2),
          v([_.XI.bound], V.prototype, "StartBroadcast", 1),
          v([_.XI.bound], V.prototype, "StartClip", 1),
          v([_.XI.bound], V.prototype, "StartVOD", 1),
          v([u.o], V.prototype, "OnVideoPlaying", 1),
          v([u.o], V.prototype, "OnVideoPause", 1),
          v([_.XI.bound], V.prototype, "OnVideoTimeUpdate", 1),
          v([u.o], V.prototype, "OnVolumeUpdated", 1),
          v([_.XI.bound], V.prototype, "OnGameDataUpdate", 1),
          v([u.o], V.prototype, "OnDownloadFailed", 1),
          v([u.o], V.prototype, "OnWebRTCRetry", 1),
          v([u.o], V.prototype, "OnWebRTCFailed", 1),
          v([u.o], V.prototype, "OnUserInputNeeded", 1);
        const Z = new Je();
        window.uiBroadcastWatchStore = Z;
      },
    },
  ]);
})();

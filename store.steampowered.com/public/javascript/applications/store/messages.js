/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [35871],
    {
      68266: (F, V, s) => {
        "use strict";
        s.d(V, { lx: () => W, m0: () => K });
        var e = s(9046),
          I = s(55483),
          l = s(72609),
          T = s(21721),
          A = s(5827),
          m = s(40358),
          v = s(75233),
          d = s(80902),
          b = s(18210),
          U = s(53113),
          S = s(85741);
        function K(N, k, g, B = e.wI.full, R = !0) {
          const x = (0, v.jE)(),
            Q = (0, A.eG)();
          return (0, d.I)(W(x, Q, N, k, g, B, R)).data ?? void 0;
        }
        function _(N, k, g, B = e.wI.full, R = !0) {
          return ["useEventImageURLWithFallback", N?.GID, k, g, B, R];
        }
        function W(N, k, g, B, R, x = e.wI.full, Q = !0) {
          return {
            queryKey: _(g, B, R, x, Q),
            enabled: !!g?.GID,
            initialData: () => H(g, B, R, x, Q),
            queryFn: async () => {
              if (!g) return null;
              let Z = H(g, B, R, x, Q);
              if (Z) return Z;
              const G = await N.ensureQueryData(
                (0, I.ec)(g.clanSteamID.GetAccountID(), N),
              );
              if (B == "capsule") {
                let C = g.appid;
                if (
                  !C &&
                  G &&
                  ((G.is_creator_home && !G.is_ogg) || G.is_curator)
                )
                  if (g.jsondata?.referenced_appids?.length)
                    C = g.jsondata.referenced_appids[0];
                  else return G.avatar_full_url ?? null;
                const E = await N.ensureQueryData((0, m.AQ)(k, { appid: C }));
                return E
                  ? ((0, T.b0)(E, "main_capsule") ?? null)
                  : G?.avatar_full_url
                    ? G.avatar_full_url
                    : `${l.TS.STORE_ITEM_BASE_URL}steam/apps/${C}/header.jpg`;
              }
              return B == "background" &&
                G &&
                ((G.is_creator_home && !G.is_ogg) || G.is_curator)
                ? (G.creator_page_bg_url ?? null)
                : await N.ensureQueryData((0, S.dO)(N, k, g));
            },
          };
        }
        function H(N, k, g, B = e.wI.full, R = !0) {
          if (!N) return;
          const x = N.GetImageURL(k, g, B);
          if (x && x.trim().length > 0) return x;
          const Q = b.A0.GetELanguageFallback(g);
          if (g != Q) {
            const G = N.GetImageURL(k, Q, B);
            if (G && G.trim().length > 0) return G;
          }
          if (k == "capsule") {
            let G = N.GetImageFromBeginningOfDescription(g, Number.MAX_VALUE);
            if (G && (R || (0, U.ZF)(G))) return G;
          }
        }
      },
      85741: (F, V, s) => {
        "use strict";
        s.d(V, { Mg: () => d, dO: () => b });
        var e = s(55483),
          I = s(99412),
          l = s(72609),
          T = s(5827),
          A = s(40358),
          m = s(75233),
          v = s(80902);
        function d(S) {
          const K = (0, m.jE)(),
            _ = (0, T.eG)();
          return (0, v.I)(b(K, _, S)).data ?? void 0;
        }
        function b(S, K, _) {
          return {
            queryKey: U(_),
            enabled: !!_?.GID,
            queryFn: async () => {
              if (!_) return null;
              const W = _.appid
                  ? await S.ensureQueryData((0, A.OE)(K, { appid: _.appid }))
                  : null,
                H = await S.ensureQueryData(
                  (0, e.ec)(_.clanSteamID.GetAccountID(), S),
                );
              if (_.appid)
                if (W) {
                  if (
                    W.all_ages_screenshots &&
                    W.all_ages_screenshots.length > 0
                  ) {
                    let N = Number(
                      _.bOldAnnouncement
                        ? _.AnnouncementGID
                        : _.GID == null
                          ? 0
                          : _.GID,
                    );
                    return (
                      (N = N % W.all_ages_screenshots.length),
                      `${l.TS.STORE_ITEM_BASE_URL}${W.all_ages_screenshots[N].filename}`
                    );
                  }
                } else return "";
              return _.GetEventType() != I.ajI &&
                H &&
                ((H.is_creator_home && !H.is_ogg) || H.is_curator)
                ? (H.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function U(S) {
          return ["useFallbackArtworkScreenshot", S?.GID];
        }
      },
      64457: (F, V, s) => {
        "use strict";
        s.d(V, { PE: () => Z, Yg: () => R, _t: () => x, gO: () => w });
        var e = s(7850),
          I = s(21721),
          l = s(25046),
          T = s(40358),
          A = s(68094),
          m = s(41032),
          v = s(90626),
          d = s(62571),
          b = s(40426),
          U = s(36118),
          S = s(36707),
          K = s(18210),
          _ = s(72609),
          W = s(96538),
          H = s(85599),
          N = s(64271),
          k = s(48963),
          g = s.n(k),
          B = s(50573);
        function R(E) {
          const { id: M, bPopOutTrailerPlayback: j } = E,
            { data: o } = (0, T.Yo)(M),
            { data: a } = (0, T.j4)(M),
            { data: c } = (0, T.J$)(M),
            [p, h] = (0, v.useState)(!1),
            [L, O] = (0, v.useState)(!1),
            Y = (0, m.dy)(),
            $ = o?.highlights?.filter((J) => !Y || J.all_ages),
            y = $ && $?.length > 0 ? $[0] : void 0,
            ee = v.useCallback(() => {
              y && (j ? O(!0) : h((J) => !J));
            }, [y, j]);
          if (!c)
            return (0, e.jsx)("div", {
              className: (0, S.A)(g().HilightGrid, g().MediaContainer),
              children: (0, e.jsx)(H.t, { size: "medium" }),
            });
          const z = y
            ? (0, e.jsx)(C, {
                trailer: y,
                bPlayVideo: p,
                fnTogglePlayTrailer: ee,
              })
            : null;
          return !y &&
            !(a && a.all_ages_screenshots && a.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, S.A)(g().HilightGrid, g().MediaContainer),
                children: [
                  (0, e.jsx)(x, {
                    elFeaturedInCenter: z,
                    storeItemScreenshots: a,
                    trailer: y,
                    id: M,
                    name: c.name || "",
                  }),
                  j
                    ? (0, e.jsx)(Z, {
                        id: M,
                        bShowModal: L,
                        hideModal: () => O(!1),
                      })
                    : (0, e.jsx)(Q, {
                        name: c.name || "",
                        trailer: y,
                        bPlayVideo: p,
                        fnTogglePlayTrailer: ee,
                        bControls: !0,
                      }),
                ],
              });
        }
        function x(E) {
          const {
              elFeaturedInCenter: M,
              id: j,
              name: o,
              trailer: a,
              storeItemScreenshots: c,
              featureElementclassName: p,
              bUseTrailerAsFirstThumb: h,
              bNoScreenShotModals: L,
            } = E,
            [O, Y] = v.useState(void 0),
            [$, y] = (0, b.XC)(),
            ee = (0, m.dy)(),
            z = (0, v.useRef)(null),
            [J, ye] = (0, v.useState)(0);
          if (!j) return null;
          const ie = M || (O !== void 0 && O !== -1) ? O : 0,
            oe = new Array(),
            le = new Array();
          h &&
            a &&
            (oe.push(
              (0, e.jsx)(
                C,
                {
                  trailer: a,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => Y(0),
                  onMouseLeave: () => {
                    const ue = z.current;
                    ue && ye(ue.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            le.push(
              (0, e.jsx)(
                Q,
                {
                  ref: z,
                  name: o,
                  trailer: a,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: J,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const ve = (
            ee ? c?.all_ages_screenshots : c?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (ve?.forEach((ue, me) => {
              if ((M || me > 0) && oe.length < 3) {
                const de = (0, I.bu)(ue, "thumb"),
                  je = (0, I.bu)(ue, "600x338"),
                  De = oe.length;
                oe.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, S.A)({
                        [g().ThumbnailCtn]: !0,
                        [g().ThumbnialClickable]: !L,
                      }),
                      onMouseEnter: () => Y(De),
                      children: L
                        ? (0, e.jsx)("img", { src: de, alt: o })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: g().ThumbnailButton,
                            onClick: () => {
                              const _e = [...(ve || [])];
                              if (_e.length > 0) {
                                for (let he = 0; he < me; ++he) {
                                  const Ae = _e.shift();
                                  Ae && _e.push(Ae);
                                }
                                $(_e.map((he) => (0, I.bu)(he, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: de, alt: o }),
                          }),
                    },
                    me + "_small_" + de,
                  ),
                ),
                  le.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: g().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: je, alt: o }),
                      },
                      me + "_big_" + de,
                    ),
                  );
              }
            }),
            !M && (!le || le.length == 0))
          )
            return null;
          const ce = oe.slice(0, 3),
            Me = Array.from({ length: Math.max(0, 3 - ce.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              y,
              (0, e.jsx)("div", {
                className: p || g().MainMediaCtn,
                children:
                  M && (ie === -1 || ie === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: M })
                    : (0, e.jsx)(e.Fragment, {
                        children: ie !== void 0 && le[ie],
                      }),
              }),
              ce.length > 0 &&
                (0, e.jsxs)("div", {
                  className: g().ScreenshotThumbnailRow,
                  onMouseLeave: () => Y(-1),
                  children: [
                    ce,
                    Me.map((ue, me) =>
                      (0, e.jsx)(
                        "div",
                        { className: g().ThumbnailCtn },
                        `app_${(0, A.ER)(j)}_${me}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function Q(E) {
          const {
            ref: M,
            name: j,
            trailer: o,
            bControls: a,
            bPlayVideo: c,
            fnTogglePlayTrailer: p,
            startTime: h,
          } = E;
          if (
            ((0, v.useEffect)(() => {
              const O = M?.current;
              if (h != null && h > 0 && O) {
                const Y = () => {
                  O.currentTime = h || 0;
                };
                return (
                  O.addEventListener("loadedmetadata", Y),
                  () => {
                    O.removeEventListener("loadedmetadata", Y);
                  }
                );
              }
            }, [M, h]),
            !o)
          )
            return null;
          let L = (0, S.A)(g().VideoLargeContainer, c && g().videoPlaying);
          return (0, e.jsxs)("div", {
            className: L,
            onClick: p,
            role: "presentation",
            children: [
              (0, e.jsx)(B.hj, {
                name: j,
                trailerCategory: o.trailer_category,
                trailerDisplay: B.g,
                mouseOver: !1,
              }),
              !!(c && o.microtrailer) &&
                (0, e.jsx)("video", {
                  className: g().VideoLarge,
                  ref: M,
                  controls: a,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: h != null && h > 0 ? void 0 : o.screenshot_full,
                  children: o.microtrailer?.map((O) =>
                    _.TS.IN_CLIENT && O.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, l.M4)(o, O.filename || ""), type: O.type },
                          O.filename,
                        ),
                  ),
                }),
              a &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: g().CloseButton,
                  "aria-label": (0, K.we)("#Button_Close"),
                  children: (0, e.jsx)(U.sED, {}),
                }),
            ],
          });
        }
        function Z(E) {
          return E.bShowModal ? (0, e.jsx)(G, { ...E }) : null;
        }
        function G(E) {
          const { id: M, bShowModal: j, trailerBaseID: o, hideModal: a } = E,
            { data: c } = (0, T.J$)(M),
            p = (0, l.kB)(M),
            h = (0, v.useMemo)(() => {
              if (!(!p || p.length == 0)) {
                if (o) {
                  const z = p.find((J) => J.trailer_base_id == o);
                  if (z) return z;
                }
                return p[0];
              }
            }, [p, o]),
            L = v.useId(),
            O = v.useId(),
            {
              rgDashTrailers: Y,
              rgHlsTrailers: $,
              strCaptionManufest: y,
              strScreenshot: ee,
            } = (0, v.useMemo)(() => {
              if (!h)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: z, rgHlsTrailers: J } = (0, l.hg)(h);
              return {
                rgDashTrailers: z,
                rgHlsTrailers: J,
                strCaptionManufest: (0, l.Wv)(h),
                strScreenshot: (0, l.hl)(h),
              };
            }, [h]);
          return !h || !h.adaptive_trailers || Y.length == 0
            ? null
            : (0, e.jsx)(W.EN, {
                active: j,
                children: (0, e.jsxs)(W.eV, {
                  "aria-labelledby": (0, d.q)(L, O),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: a,
                  children: [
                    (0, e.jsx)("div", {
                      className: g().VideoPopupContainers,
                      children: (0, e.jsx)(N.P, {
                        dashManifests: Y,
                        hlsManifest: $[0] || "",
                        screenshot: ee,
                        altText: h.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: y,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: L,
                      style: { display: "none" },
                      children: c?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: O,
                      style: { display: "none" },
                      children: h.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function w(E) {
          const { appid: M, trailerBaseID: j, bShowModal: o, hideModal: a } = E,
            c = (0, v.useMemo)(() => ({ appid: M }), [M]);
          return (0, e.jsx)(Z, {
            id: c,
            trailerBaseID: j,
            bShowModal: o,
            hideModal: a,
          });
        }
        function C(E) {
          const {
            trailer: M,
            fnTogglePlayTrailer: j,
            bPlayVideo: o,
            onMouseEnter: a,
            onMouseLeave: c,
          } = E;
          return (0, e.jsxs)("div", {
            className: (0, S.A)({
              [g().VideoThumbnail]: !o,
              [g().videoPlaying]: o,
              [g().ThumbnailCtn]: !0,
            }),
            onClick: j,
            onMouseEnter: a,
            onMouseLeave: c,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, l.hl)(M), alt: M.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: g().VideoPlayButton,
                "aria-label": (0, K.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(U.jGG, {}),
              }),
            ],
          });
        }
      },
      97743: (F, V, s) => {
        "use strict";
        s.d(V, {
          $I: () => G,
          AP: () => j,
          Nt: () => g,
          XW: () => C,
          dr: () => M,
          fL: () => Z,
          rK: () => k,
          rT: () => x,
        });
        var e = s(80902),
          I = s(90626),
          l = s(99412),
          T = s(72604),
          A = s(35038),
          m = s(86174),
          v = s(3166),
          d = s(84192),
          b = s(68094),
          U = s(5827),
          S = s(71742),
          K = s(14947),
          _ = s(18210),
          W = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          N = (o, a, c, p) => {
            for (
              var h = p > 1 ? void 0 : p ? H(a, c) : a, L = o.length - 1, O;
              L >= 0;
              L--
            )
              (O = o[L]) && (h = (p ? O(a, c, h) : O(h)) || h);
            return p && h && W(a, c, h), h;
          };
        const k = 4;
        class g {
          m_SteamInterface;
          m_setMessagesSeen = new Set();
          static sm_DefaultDataRequest = {
            include_release: !0,
            include_assets: !0,
          };
          constructor(a) {
            this.m_SteamInterface = a;
          }
          static sm_Instance;
          static Init(a) {
            g.sm_Instance = new g(a);
          }
          static Get() {
            return (
              (0, S.wT)(
                g.sm_Instance,
                "MarketingMessages store not initialized",
              ),
              g.sm_Instance
            );
          }
          async GetMessageList(a, c = !1) {
            if (!v.iA.logged_in) return [];
            const p = A.w.Init(m.LK);
            p.Body().set_country_code(v.TS.COUNTRY),
              p.Body().set_elanguage((0, l.sfN)(v.TS.LANGUAGE)),
              p.Body().set_client_package_version(a.nClientPackageVersion),
              p.Body().set_operating_system(a.eOSType),
              c && p.Body().set_include_seen_messages(!0),
              (0, d.rV)(p),
              (0, d.Bn)(p, g.sm_DefaultDataRequest);
            const h = await m.EO.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              p,
            );
            if (h.GetEResult() != T.R)
              throw `Error loading marketing messages: ${h.GetEResult()}`;
            if (c)
              for (const L of h.Body().messages())
                L.already_seen() &&
                  this.m_setMessagesSeen.add(L.message().gid());
            return h.Body().messages();
          }
          async GetSingleMessage(a, c) {
            const p = A.w.Init(m.e6);
            p.Body().set_gid(a),
              (0, d.rV)(p),
              (0, d.Bn)(p, g.sm_DefaultDataRequest);
            let h;
            if (
              (c || v.iA.logged_in
                ? (h = await m.EO.GetDisplayMarketingMessageForUser(
                    this.m_SteamInterface.GetServiceTransport(),
                    p,
                  ))
                : (h = await m.EO.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    p,
                  )),
              h.GetEResult() != T.R)
            )
              throw `Error loading marketing messages: ${h.GetEResult()}`;
            return h.Body().message();
          }
          MarkMessageSeen(a, c, p) {
            if (this.m_setMessagesSeen.has(a)) return;
            const h = A.w.Init(m.S4);
            h.Body().set_gid(a),
              h.Body().set_display_index(c),
              h.Body().set_template_type(p),
              m.EO.MarkMessageSeen(
                this.m_SteamInterface.GetServiceTransport(),
                h,
              ),
              this.m_setMessagesSeen.add(a);
          }
          BIsMessageSeen(a) {
            return this.m_setMessagesSeen.has(a);
          }
        }
        function B(o) {
          if (!o) return null;
          try {
            const a = JSON.parse(o);
            return (
              a.use_additional_fields &&
                (a.use_additional_fields =
                  a.use_additional_fields === "true" ||
                  a.use_additional_fields === 1),
              a.use_custom_legal_text &&
                (a.use_custom_legal_text =
                  a.use_custom_legal_text === "true" ||
                  a.use_custom_legal_text === 1),
              a.last_asset_mtime &&
                (a.last_asset_mtime = parseInt(a.last_asset_mtime)),
              (a.ll_image = a.ll_image || {}),
              a
            );
          } catch {}
          return null;
        }
        function R(o) {
          return `\xA9 ${new Date().getFullYear()} Valve Corporation${o ? " and " + o : ""}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
        }
        class x {
          m_message;
          m_templateVars = void 0;
          m_associatedItemKey;
          m_rgRecommendedAppIDs;
          m_nSaleItemCount;
          constructor(a) {
            (0, K.Gn)(this),
              (this.m_message = a),
              (this.m_templateVars = B(a.template_vars_json()));
            const c = a.associated_item(!1);
            (this.m_associatedItemKey = c
              ? (0, b.Jz)({ item_type: c.item_type(), id: c.id() })
              : void 0),
              (this.m_rgRecommendedAppIDs = a
                .recommended_items()
                .map((p) => p.appid())
                .filter(Boolean)),
              (this.m_nSaleItemCount = a.sale_item_count());
          }
          get id() {
            return this.m_message.gid();
          }
          GetType() {
            return this.m_message.type();
          }
          static GetTypeAsLocalizedString(a) {
            switch (a) {
              case m.D4.QJ:
                return (0, _.we)("#spotlight_weekend_deal");
              case m.D4.xl:
                return (0, _.we)("#spotlight_midweek_madness");
              case m.D4.Sk:
                return (0, _.we)("#spotlight_daily_deal");
              case m.D4.OD:
                return (0, _.we)("#msg_available_everywhere");
              case m.D4.RV:
                return (0, _.we)("#msg_new_game");
              case m.D4.IT:
                return (0, _.we)("#msg_prepurchase_now");
              case m.D4.T9:
                return (0, _.we)("#msg_play_now");
              case m.D4.QY:
                return (0, _.we)("#label_pre_load_now");
              case m.D4.W8:
                return (0, _.we)("#label_just_updated");
              case m.D4.eV:
                return (0, _.we)("#label_new_dlc_available");
              case m.D4.SK:
                return (0, _.we)("#label_free_weekend");
              case m.D4.eH:
                return (0, _.we)("#msg_on_sale_now");
              case m.D4.k6:
                return (0, _.we)("#msg_play_beta_now");
            }
            return null;
          }
          GetTemplateType() {
            return this.m_message.template_type();
          }
          GetTemplateTypeForReporting() {
            if (
              this.GetTemplateVars().custom_display &&
              this.GetTemplateVars().custom_display.startsWith("replay")
            )
              return m.rj.TO;
            switch (this.GetTemplateVars().custom_display) {
              case "dlc_override":
                return m.rj.k2;
              case "mm_auto_render":
                return m.rj.H;
              case "partner_event":
                return m.rj.GS;
              case "featured_video":
                return m.rj.CT;
            }
            return this.BShouldShowSaleItems() ? m.rj.np : m.rj.BA;
          }
          GetTemplateVars() {
            return this.m_templateVars;
          }
          GetLocalizedAltText(a) {
            return (
              this.m_templateVars?.localized_alt_text?.[a] ||
              this.m_templateVars?.localized_alt_text?.[
                _.A0.GetELanguageFallback(a)
              ] ||
              void 0
            );
          }
          GetTemplateImage() {
            let a = this.m_templateVars.ll_image[v.TS.LANGUAGE],
              c = (0, l.sfN)(v.TS.LANGUAGE);
            return (
              !a &&
                v.TS.LANGUAGE == (0, l.LgB)(l.FHN) &&
                ((a = this.m_templateVars.ll_image.LATAM), (c = l.FHN)),
              a || ((a = this.m_templateVars.ll_image.english), (c = l.Bhc)),
              [a?.path, c]
            );
          }
          GetTemplateBackgroundImage() {
            let a = this.m_templateVars.background[v.TS.LANGUAGE],
              c = (0, l.sfN)(v.TS.LANGUAGE);
            return (
              a || ((a = this.m_templateVars.background.english), (c = l.Bhc)),
              [a?.path, c]
            );
          }
          GetFeaturedVideoMP4URL() {
            return this.m_templateVars.featured_video_mp4;
          }
          GetFeaturedVideoWebMURL() {
            return this.m_templateVars.featured_video_webm;
          }
          GetFeaturedVideoAutoPlay() {
            return this.m_templateVars.featured_video_autoplay;
          }
          GetFeaturedVideoLoop() {
            return this.m_templateVars.featured_video_loop;
          }
          GetPosterImage() {
            let a = this.m_templateVars.poster[v.TS.LANGUAGE],
              c = (0, l.sfN)(v.TS.LANGUAGE);
            return (
              a || ((a = this.m_templateVars.poster.english), (c = l.Bhc)),
              [a?.path, c]
            );
          }
          GetSubtitleObj() {
            return this.m_templateVars.subtitles;
          }
          GetDLCAppIDs() {
            return this.m_templateVars.additional_featuring
              .filter((a) => !!a.appid)
              .map((a) => a.appid);
          }
          GetAutoRenderWithoutAssetOverrides() {
            return !!this.m_templateVars.autorender_assets_without_overrides;
          }
          GetGID() {
            return this.m_message.gid();
          }
          SetDLCAppIDOverride(a) {
            (this.m_templateVars.additional_featuring = a.map((c) => ({
              appid: c,
            }))),
              (this.m_templateVars.custom_display = "dlc_override");
          }
          GetRecommendedAppIDs() {
            return this.m_rgRecommendedAppIDs;
          }
          GetSaleItemCount() {
            return this.m_nSaleItemCount;
          }
          BShouldShowSaleItems() {
            const a = !this.GetTemplateVars().custom_display,
              c = !!this.GetTemplateVars().sale_clan_event_gid,
              p = this.m_rgRecommendedAppIDs.length >= k;
            return a && c && p;
          }
          SetRecommendedAppIDsOverride(a) {
            this.m_rgRecommendedAppIDs = a;
          }
          OverrideCustomText(a) {
            this.m_templateVars.button_text_custom = a;
          }
          OverrideURL(a) {
            this.m_templateVars.linkurl = a;
          }
          BHasTemplateAnimatedAssets() {
            return this.m_templateVars.has_animated_assets;
          }
          BHasTemplateAnimatedAssetForLanguage(a) {
            const c = (0, l.LgB)(a);
            return !!this.m_templateVars.mp4[c];
          }
          GetTemplateWebM(a) {
            const c = (0, l.LgB)(a);
            return this.m_templateVars.webm[c]?.path;
          }
          GetTemplateWebMWithFallback(a) {
            const c = (0, l.LgB)(a);
            if (this.m_templateVars.webm[c]?.path)
              return [this.m_templateVars.webm[c].path, a];
            const p = _.A0.GetELanguageFallback(a),
              h = (0, l.LgB)(p);
            return [this.m_templateVars.webm[h]?.path, p];
          }
          GetTemplateMP4(a) {
            const c = (0, l.LgB)(a);
            return this.m_templateVars.mp4[c]?.path;
          }
          GetTemplateMP4WithFallback(a) {
            const c = (0, l.LgB)(a);
            if (this.m_templateVars.mp4[c]?.path)
              return [this.m_templateVars.mp4[c].path, a];
            const p = _.A0.GetELanguageFallback(a),
              h = (0, l.LgB)(p);
            return [this.m_templateVars.mp4[h]?.path, p];
          }
          GetLegalHTML() {
            return this.GetTemplateVars().use_custom_legal_text
              ? this.GetTemplateVars().custom_legal_text
              : R(this.GetTemplateVars().partner);
          }
          get associated_item_key() {
            return this.m_associatedItemKey;
          }
          get associated_item_appid() {
            return this.m_message.associated_item(!1)?.appid();
          }
          GetAssociatedItemProto() {
            return this.m_message.associated_item(!1);
          }
        }
        N([K.sH], x.prototype, "m_templateVars", 2);
        const Q = "^(replay)([0-9]{4})";
        function Z(o) {
          return o.match(Q)?.[2];
        }
        function G(o) {
          if (o) {
            const a = o.match(Q);
            return a?.[2] && !isNaN(Number(a?.[2]));
          }
          return !1;
        }
        function w(o) {
          return o == "mm_auto_render";
        }
        function C(o, a, c) {
          const { bIncludeSeenMessages: p, ...h } = a,
            {
              data: L,
              isLoading: O,
              isError: Y,
            } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                "List",
                h,
                { bIncludeSeenMessages: !!p },
              ],
              queryFn: () => o.GetMessageList(h, p),
              ...c,
            }),
            $ = I.useMemo(() => L?.map((z) => new x(z.message())), [L]),
            y = (0, U.cv)(),
            ee = I.useRef(new Set());
          return (
            y &&
              $?.forEach((z) => {
                if (ee.current.has(z.id)) return;
                const J = z.GetAssociatedItemProto();
                J && (y(J, g.sm_DefaultDataRequest), ee.current.add(z.id));
              }),
            { rgMessages: O ? null : $, isError: Y }
          );
        }
        function E(o, a, c) {
          const p = c?.enabled !== !1,
            { data: h } = useQuery({
              queryKey: ["MarketingMessages", "ClientParameters"],
              queryFn: async () => ({
                eOSType: await SteamClient.System.GetOSType(),
                nClientPackageVersion: GetClientPackageVersion(),
              }),
              enabled: p,
            });
          return C(o, { ...h, ...a }, { ...c, enabled: !!h && p });
        }
        function M(o, a, c) {
          const { data: p, isError: h } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                c ? "SinglePreivew" : "Single",
                a,
              ],
              queryFn: () => o.GetSingleMessage(a, c),
              enabled: !!a,
            }),
            L = I.useMemo(() => {
              if (p) {
                const $ = new x(p);
                if (c) {
                  const y = (0, v.Tc)(
                    "marketingmessage_preview_config",
                    "application_config",
                  );
                  y?.dlc_appid_overrides?.length > 0 &&
                    $.SetDLCAppIDOverride(y.dlc_appid_overrides),
                    y?.recommended_appid_overrides?.length > 0 &&
                      $.SetRecommendedAppIDsOverride(
                        y.recommended_appid_overrides,
                      );
                }
                return $;
              }
            }, [p, c]),
            O = (0, U.cv)(),
            Y = I.useRef(new Set());
          if (O && L && !Y.current.has(L.id)) {
            const $ = L.GetAssociatedItemProto();
            $ && (O($, g.sm_DefaultDataRequest), Y.current.add(L.id));
          }
          return { message: L, isError: h };
        }
        function j(o, a, c, p, h) {
          const L = A.w.Init(m.cX);
          L.Body().set_gid(a),
            L.Body().set_display_index(c),
            L.Body().set_template_type(p),
            L.Body().set_click_location(h),
            m.EO.MarkMessageClicked(o, L);
        }
      },
      32738: (F, V, s) => {
        "use strict";
        s.d(V, { NZ: () => v, g1: () => d, ho: () => m });
        var e = s(7850),
          I = s(90626),
          l = s(44930),
          T = s(3166);
        const A = I.createContext({ setLegalText: void 0 });
        function m() {
          return !!I.useContext(A).setLegalText;
        }
        function v() {
          return I.useContext(A).setLegalText || function (S) {};
        }
        function d(U) {
          const [S, K] = I.useState(),
            _ = (0, l.Dp)("BrowserView.RegisterForMessageFromParent"),
            W = (0, T.Qn)(),
            H = I.useMemo(
              () => ({ setLegalText: _ && !W ? K : void 0 }),
              [_, K, W],
            );
          return (0, e.jsxs)(A.Provider, {
            value: H,
            children: [_ && (0, e.jsx)(b, { strLegalText: S }), U.children],
          });
        }
        function b(U) {
          const { strLegalText: S } = U,
            K = I.useRef(void 0);
          return (
            I.useEffect(() => {
              (K.current = S),
                SteamClient.BrowserView.PostMessageToParent(
                  "MarketingMessageLegal",
                  S || "",
                );
            }, [S]),
            I.useEffect(
              () =>
                SteamClient.BrowserView.RegisterForMessageFromParent((_) => {
                  _ == "MarketingMessageDialogReady" &&
                    SteamClient.BrowserView.PostMessageToParent(
                      "MarketingMessageLegal",
                      K.current,
                    );
                }).unregister,
              [],
            ),
            null
          );
        }
      },
      27638: (F, V, s) => {
        "use strict";
        s.d(V, { Y: () => l });
        var e = s(90626);
        function I(T) {
          const { title: A, bodyClassName: m, children: v } = T;
          return (
            React.useEffect(() => {
              const d = document.title;
              return (
                (document.title = A),
                () => {
                  document.title = d;
                }
              );
            }, [A]),
            l(m),
            v
          );
        }
        function l(T) {
          e.useEffect(() => {
            if (!T) return;
            const A = [];
            for (const m of T.split(/ /))
              document.body.classList.contains(m) || A.push(m);
            return (
              document.body.classList.add(...A),
              () => document.body.classList.remove(...A)
            );
          }, [T]);
        }
      },
      8736: (F, V, s) => {
        "use strict";
        s.d(V, { l: () => I });
        var e = s(18210);
        function I(l, T = "#Played_", A = !1) {
          if (l >= 120) {
            let m = l / 60;
            m = Math.round(m * 10) / 10;
            let v = e.pf.GetPreferredLocales(),
              d = m.toLocaleString(v, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              });
            return (0, e.we)(T + "Hours", d);
          } else
            return A && l == 1
              ? (0, e.we)(T + "Minute", l)
              : (0, e.we)(T + "Minutes", l);
        }
      },
      9519: (F, V, s) => {
        "use strict";
        s.d(V, { q: () => T });
        var e = s(90626),
          I = s(30096);
        const l = 2e4;
        function T(A) {
          const m = (0, e.useRef)(!1),
            v = (0, e.useRef)(null),
            d = (0, e.useCallback)(() => {
              v.current = setTimeout(() => {
                A.current &&
                  !A.current.paused &&
                  (A.current.pause(), (m.current = !0));
              }, l);
            }, [A]),
            b = (0, e.useCallback)(() => {
              v.current && (clearTimeout(v.current), (v.current = null)),
                A.current && m.current && (A.current.play(), (m.current = !1));
            }, [A]);
          (0, I.l6)(window, "blur", d), (0, I.l6)(window, "focus", b);
        }
      },
      53617: (F, V, s) => {
        "use strict";
        s.d(V, { FS: () => G, WN: () => Z, lS: () => B, xf: () => x });
        var e = s(80902),
          I = s(35038),
          l = s(68312),
          T = s(67529),
          A = s(27386),
          m = s(98609),
          v = s(3166),
          d = s(82734),
          b = s(90626),
          U = s(68094),
          S = s(40358),
          K = s(47875),
          _ = s(72865),
          W = s(10349),
          H = s(97743),
          N = s(2546),
          k = s(86174),
          g = s(70537);
        function B(w) {
          const C = (0, l.KV)();
          let E = (0, e.I)({
            queryKey: ["useGamePlaytimeInfo", w],
            queryFn: async () => R(w, C),
            enabled: !!(w && w != T.sc),
          });
          return E.isSuccess ? E.data : null;
        }
        async function R(w, C) {
          const E = I.w.Init(A.G9h);
          E.Body().set_steamid(m.iA.steamid),
            E.Body().set_appids_filter([w]),
            E.Body().set_include_played_free_games(!0),
            E.Body().set_language(m.TS.LANGUAGE);
          const M = await A.xtC.GetOwnedGames(C, E);
          return M.Body().games().length > 0
            ? M.Body().games()[0].toObject()
            : {};
        }
        function x(w) {
          return (0, v.Y2)() && w?.startsWith("https://store.steampowered.com/")
            ? w.replace("https://store.steampowered.com/", m.TS.STORE_BASE_URL)
            : w;
        }
        function Q(w) {
          let C = (0, l.KV)(),
            E = (0, N.J)(),
            M = (0, g.Ng)();
          return (
            (M = M !== null ? M + 1 : 0),
            (0, b.useCallback)(() => {
              (0, H.AP)(C, E.id, M, E.GetTemplateTypeForReporting(), w);
            }, [C, E, M, w])
          );
        }
        function Z(w, C, E = !1) {
          let M = Q(C),
            j;
          C == k.cU.wY
            ? (j = "image")
            : C == k.cU.xe
              ? (j = "button")
              : C == k.cU.FQ
                ? (j = "dlc_capsule")
                : C == k.cU.vx
                  ? (j = "header_area")
                  : C == k.cU.C1
                    ? (j = "game_capsule")
                    : C == k.cU.vm && (j = "partner_event");
          let o = (0, _.aL)(x(w), j);
          return (
            E && (o = w),
            o.startsWith("steam://") || (o = `steam://openurl/${o}`),
            (0, b.useCallback)(
              (c) => {
                M();
                let p = (0, d.uX)(c);
                p.location.href = o;
              },
              [o, M],
            )
          );
        }
        function G(w, C, E) {
          const M = (0, U.Jz)({ item_type: (0, W.SW)(C), id: w }),
            { data: j } = (0, S.J$)(M);
          return Z((0, K._)(j) ?? m.TS.STORE_BASE_URL, E);
        }
      },
      2546: (F, V, s) => {
        "use strict";
        s.d(V, { Q: () => Ts, J: () => se });
        var e = s(7850),
          I = s(99412),
          l = s(90626),
          T = s(97743),
          A = s(32738),
          m = s(3166),
          v = s(32858),
          d = s(72865),
          b = s(53617),
          U = s(19298),
          S = s(48421),
          K = s(24179),
          _ = s(98609);
        function W(i, t, n, r) {
          if (!r || !r.path) return null;
          const u = n ? "?t=" + n : "";
          return r.path.startsWith("images")
            ? `${_.TS.MEDIA_CDN_URL}steam/marketing/${i}/${r.path}${u}`
            : `${_.TS.BASE_URL_SHARED_CDN}store_item_assets/mm/${i}/${t}/${r.path}${u}`;
        }
        var H = s(30096),
          N = s(9519);
        function k(i) {
          const { path: t, message: n, eLanguage: r, ...u } = i,
            f = n.GetTemplateVars()?.last_asset_mtime,
            D = W(n.id, r, f, { type: "file", path: t }),
            P = n.GetLocalizedAltText(r);
          return (0, e.jsx)("img", { alt: P, ...u, src: D });
        }
        function g(i) {
          const { message: t, mp4Path: n, webmPath: r, language: u, ...f } = i,
            D = t.GetTemplateVars()?.last_asset_mtime,
            P = W(t.id, u, D, { type: "file", path: r }),
            X = W(t.id, u, D, { type: "file", path: n }),
            q = (0, l.useRef)(null);
          (0, N.q)(q);
          const ae = (0, l.useRef)(!1),
            ne = (0, l.useCallback)(() => {
              q.current &&
                (document.visibilityState === "visible"
                  ? ae.current && (q.current.play(), (ae.current = !1))
                  : q.current.paused || (q.current.pause(), (ae.current = !0)));
            }, []);
          return (
            (0, H.l6)(document, "visibilitychange", ne),
            (0, l.useEffect)(() => ne(), [ne]),
            (0, e.jsxs)("video", {
              ...f,
              ref: q,
              children: [
                (0, e.jsx)("source", { src: P, type: "video/webm" }),
                (0, e.jsx)("source", { src: X, type: "video/mp4" }),
              ],
            })
          );
        }
        var B = s(51079),
          R = s(36707),
          x = s(18210),
          Q = s(720),
          Z = s.n(Q),
          G = s(24660),
          w = s(71742),
          C = s(86174),
          E = s(11996),
          M = s(54528),
          j = s(65946),
          o = s(40358),
          a = s(21721),
          c = s(47875),
          p = s(72838),
          h = s(48357),
          L = s(61431),
          O = s(96117),
          Y = s(25792),
          $ = s(8736),
          y = s(22329);
        function ee(i) {
          return (0, e.jsx)("div", {
            className: y.All,
            children: (0, e.jsx)("div", {
              className: y.MessageContent,
              children: i.children,
            }),
          });
        }
        function z(i) {
          return (0, e.jsx)("div", {
            className: y.MessageBody,
            children: i.children,
          });
        }
        function J(i) {
          const { isBackgroundBlur: t, bOverrideUseBackgroundImage: n } = i,
            r = se(),
            u = (0, b.WN)(r.GetTemplateVars().linkurl, C.cU.wY),
            [f, D] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
          return (0, e.jsx)(U.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: (0, R.A)(y.MessageImage, t && y.IsBlur),
            onActivate: u,
            children: f && (0, e.jsx)(k, { message: r, path: f, eLanguage: D }),
          });
        }
        function ye(i) {
          const { fnOnClick: t } = i,
            n = se(),
            r = (0, I.sfN)(m.TS.LANGUAGE),
            [u, f] = n.GetTemplateMP4WithFallback(r),
            [D, P] = n.GetTemplateWebMWithFallback(r);
          return (
            (0, w.wT)(
              f == P,
              `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${f} webm ${P}`,
            ),
            (0, e.jsx)("div", {
              className: y.VideoImageContainer,
              children: (0, e.jsx)(U.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, R.A)(y.MessageImage),
                onActivate: t,
                children: (0, e.jsx)(g, {
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  loop: !0,
                  mp4Path: u,
                  message: n,
                  webmPath: D,
                  language: m.TS.IN_CLIENT ? P : f,
                }),
              }),
            })
          );
        }
        function ie(i) {
          const { id: t } = i,
            { data: n } = (0, o.lv)(t),
            r = n ? (0, a.b0)(n, "main_capsule") : void 0;
          return r ? (0, e.jsx)(oe, { strImageURL: r }) : null;
        }
        function oe(i) {
          return (0, e.jsx)("div", {
            className: (0, R.A)(y.MessageImage, y.GameImage, y.IsBlur),
            children: (0, e.jsx)("img", { src: i.strImageURL }),
          });
        }
        function le(i) {
          const { strType: t, strTitle: n, bSmallTitle: r } = i;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: y.EventType, children: t }),
              (0, e.jsx)("div", {
                className: (0, R.A)(y.EventTitle, r && y.SmallTitle),
                children: n,
              }),
            ],
          });
        }
        function ve(i) {
          const { id: t, bPreview: n, bPreferAssetWithoutOverride: r } = i,
            { data: u } = (0, o.J$)(t),
            f = u?.appid,
            D = (0, m.Qn)(),
            { bIsOwned: P } = (0, K.ZJ)(t),
            X = (0, M.bB)(f),
            q = (0, E.Fh)(f),
            ae = (0, b.lS)(f ?? 0),
            ne = (0, l.useMemo)(
              () =>
                n && (!ae?.playtime_forever || !ae?.rtime_last_played)
                  ? {
                      playtime_forever: 300,
                      rtime_last_played:
                        Math.floor(Date.now() / 1e3) - 7200 * 60,
                    }
                  : ae,
              [ae, n],
            );
          let pe = "steam://openurl/" + ((0, c._)(u) ?? "");
          P &&
            f &&
            (D
              ? (pe = `steam://open/games/details/${f}`)
              : (pe = `steam://nav/games/details/${f}`));
          const Te = (0, b.WN)(pe, C.cU.vx, P);
          return (0, e.jsxs)("div", {
            className: y.BaseCtn,
            children: [
              (0, e.jsx)(G.Ii, {
                className: y.CapsuleCtn,
                onClick: Te,
                children: (0, e.jsx)(p.G, {
                  id: t,
                  bPreferLibrary: !0,
                  bPreferAssetWithoutOverride: r,
                }),
              }),
              (0, e.jsxs)("div", {
                className: y.DescCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: y.GameNameCtn,
                    children: (0, e.jsx)(G.Ii, {
                      className: y.GameName,
                      onClick: Te,
                      children: u?.name,
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: y.LibraryDetails,
                    children: [
                      (0, e.jsx)(G.Ii, {
                        onClick: Te,
                        className: (0, R.A)(y.Button, y.ViewInLibrary),
                        children: (0, x.we)(
                          P
                            ? "#EventDisplay_ViewInLibrary"
                            : "#EventDisplay_ViewStorePage",
                        ),
                      }),
                      !P &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsxs)("div", {
                            className: y.PlayDetailCtn,
                            children: [
                              X &&
                                (0, e.jsx)("span", {
                                  children: (0, x.we)(
                                    "#EventDisplay_OnWishlist",
                                  ),
                                }),
                              !X &&
                                q &&
                                (0, e.jsx)("span", {
                                  children: (0, x.we)("#EventDisplay_Follow"),
                                }),
                            ],
                          }),
                        }),
                      P &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            !!ne?.rtime_last_played &&
                              (0, e.jsxs)("div", {
                                className: y.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, x.we)(
                                      "#MarketingMessages_DLC_lastplayed",
                                    ),
                                  }),
                                  (0, x._l)(ne.rtime_last_played),
                                ],
                              }),
                            !!ne?.playtime_forever &&
                              (0, e.jsxs)("div", {
                                className: y.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, x.we)(
                                      "#MarketingMessages_DLC_hours",
                                    ),
                                  }),
                                  (0, $.l)(ne.playtime_forever),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function ce(i) {
          const t = se(),
            n = (0, b.WN)(t.GetTemplateVars().linkurl, C.cU.xe);
          return (0, e.jsx)(Me, {
            bHidePrice: i.bHidePrice,
            fnOnClickButton: n,
          });
        }
        function Me(i) {
          const { bHidePrice: t, fnOnClickButton: n } = i,
            r = se(),
            u = !0,
            [f, D] = (0, j.q3)(() => [
              r.GetTemplateVars().button_text_custom ||
                r.GetTemplateVars().button_text,
              !!r.GetTemplateVars().hide_price,
            ]),
            P = !!(t || D);
          return (0, e.jsxs)("div", {
            className: (0, R.A)(y.MessageFooter, !u && y.NoButton),
            children: [
              (0, e.jsxs)("div", {
                className: y.ButtonAndPriceCtn,
                children: [
                  u &&
                    (0, e.jsx)(U.Z, {
                      focusable: !0,
                      noFocusRing: !0,
                      className: y.Btn,
                      onActivate: n,
                      children: f,
                    }),
                  !P && (0, e.jsx)(Y.tH, { children: (0, e.jsx)(ue, {}) }),
                ],
              }),
              (0, e.jsx)(me, {}),
            ],
          });
        }
        function ue() {
          const t = se().associated_item_key,
            { data: n } = (0, o.Q_)(t);
          return !n || !n.formatted_final_price
            ? (0, e.jsx)("div", { className: y.NoPrice })
            : (0, e.jsx)("div", {
                className: y.MessagePriceCtn,
                children: (0, e.jsx)(h.NF, { id: t }),
              });
        }
        function me(i) {
          const t = se();
          return (0, A.ho)()
            ? null
            : (0, e.jsx)("div", {
                className: y.Legal,
                dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
              });
        }
        function de(i) {
          const { id: t, type: n, eClickLocation: r } = i,
            u = (0, b.FS)(t, n, r);
          return (0, e.jsx)(L.p, {
            id: t,
            type: n,
            fnOnClickOverride: u,
            bIsMarketingMessage: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function je(i) {
          const { capsule: t, imageType: n, eClickLocation: r } = i,
            u = (0, b.FS)(t.id, t.type, r),
            f = (D) => {
              D.preventDefault(), u(D);
            };
          return (0, e.jsx)("div", {
            onClick: f,
            children: (0, e.jsx)(O.W, {
              capsule: t,
              imageType: n,
              bShowParentApp: !1,
              bHideStoreHover: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        var De = s(94162);
        function _e(i) {
          const t = se();
          let n = t.GetTemplateVars().update_event_clan_accountid,
            r = t.GetTemplateVars().update_event_gid;
          const {
            eventModel: u,
            bLoading: f,
            sErrorMessage: D,
          } = (0, S.B9)(n, r, i);
          return { message: t, eventModel: u };
        }
        function he(i) {
          const { bPreview: t, bUseAnimated: n } = i,
            { message: r, eventModel: u } = _e(t),
            { data: f } = (0, o.J$)(r.associated_item_key),
            D = (0, c._)(f) ?? "",
            P = Oe(u, D, C.cU.wY),
            X = Oe(u, D, C.cU.xe);
          return (0, e.jsx)(B.Ay, {
            submethod: "partner_event",
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(ie, { id: r.associated_item_key }),
                (0, e.jsxs)(z, {
                  children: [
                    (0, e.jsx)(ve, {
                      id: r.associated_item_key,
                      bPreview: t,
                      bPreferAssetWithoutOverride: !1,
                    }),
                    (0, e.jsx)(Ae, {
                      message: r,
                      eventModel: u,
                      fnOnClickButton: P,
                      bUseAnimated: n,
                    }),
                  ],
                }),
                (0, e.jsx)(Me, { bHidePrice: !0, fnOnClickButton: X }),
              ],
            }),
          });
        }
        function Ae(i) {
          const {
              message: t,
              fnOnClickButton: n,
              eventModel: r,
              bUseAnimated: u,
            } = i,
            [f, D] = t.GetTemplateImage(),
            P = (0, I.sfN)(_.TS.LANGUAGE);
          return (0, e.jsxs)("div", {
            className: Z().UpdateEventCtn,
            children: [
              (0, e.jsx)(le, {
                strType: (0, x.we)("#MarketingMessages_MajorUpdate"),
                strTitle: r?.GetNameWithFallback(P),
              }),
              (0, e.jsxs)(U.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, R.A)(Z().EventImage),
                onActivate: n,
                children: [
                  f &&
                    !u &&
                    (0, e.jsx)(k, { message: t, path: f, eLanguage: D }),
                  u && (0, e.jsx)(ye, { fnOnClick: n }),
                ],
              }),
            ],
          });
        }
        function Oe(i, t, n) {
          let r = (0, K.S6)(i?.appid),
            u = (0, d.aL)((0, b.xf)(t), "partner_event");
          if (i?.BIsVisibleEvent() && r && i.BIsValidForRealm(_.TS.EREALM)) {
            const P = (0, De.MP)();
            _.TS.IN_CLIENT && (P > 1726604483 || P == 0)
              ? (t = `steam://open/library/event/${i.appid}|${i.GID}`)
              : ((t = `${_.TS.STORE_BASE_URL}news/app/${i.appid}?emclan=${i.clanSteamID.ConvertTo64BitString()}&emgid=${i.GID}`),
                _.TS.IN_CLIENT && (t = `steam://openurl/${t}`));
          } else
            (t = u),
              i && (t += `${u.includes("?") ? "&" : "?"}emgid=${i.GID}`),
              _.TS.IN_CLIENT && (t = `steam://openurl/${t}`);
          return (0, b.WN)(t, n, !0);
        }
        var Ne = s(41735),
          Fe = s.n(Ne),
          ke = s(80902),
          We = s(72604),
          Ve = s(67529);
        function Ke(i) {
          const {
            isLoading: t,
            isError: n,
            data: r,
          } = (0, ke.I)({
            queryKey: ["useDLCHubCount", i],
            queryFn: async () => we(i),
            enabled: !!(i && i != Ve.sc),
          });
          return t || n ? null : r;
        }
        async function we(i) {
          const t = `${_.TS.STORE_BASE_URL}dlc/${i}/ajaxgetdlccount`,
            n = { origin: self.origin },
            r = await Fe().get(t, { params: n, withCredentials: !1 });
          if (r.status !== 200 || r.data.success !== We.R)
            throw new Error(
              `FetchDLCCount failed: status == ${r.status}, eresult == ${r.data?.success}, err_msg == ${r.data?.err_msg}`,
            );
          return r.data.count;
        }
        var te = s(16205);
        function He(i) {
          const { bPreview: t } = i,
            n = se(),
            r = (0, l.useMemo)(
              () => n.GetDLCAppIDs().map((f) => ({ id: f, type: "game" })),
              [n],
            ),
            u = Ke(n.associated_item_appid);
          return (
            (0, l.useEffect)(() => {
              if (n) {
                const f = u
                  ? (0, x.Yp)("#MarketingMessages_See_Count_Items", u)
                  : (0, x.we)("#MarketingMessages_See_All_Items");
                n.OverrideCustomText(f),
                  n.OverrideURL(
                    `${_.TS.STORE_BASE_URL}dlc/${n.associated_item_appid}`,
                  );
              }
            }, [n, u]),
            (0, e.jsx)(B.Ay, {
              submethod: "dlc_override",
              children: (0, e.jsxs)(ee, {
                children: [
                  (0, e.jsx)(ie, { id: n.associated_item_key }),
                  (0, e.jsxs)(z, {
                    children: [
                      (0, e.jsx)(ve, {
                        id: n.associated_item_key,
                        bPreview: t,
                        bPreferAssetWithoutOverride: !1,
                      }),
                      (0, e.jsx)(Qe, {
                        rgDLCSaleCapsules: r,
                        messageType: n.GetType(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(ce, { bHidePrice: !0 }),
                ],
              }),
            })
          );
        }
        function xe(i) {
          const { messageType: t, itemCount: n } = i,
            r = T.rT.GetTypeAsLocalizedString(t);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !!r && (0, e.jsx)("div", { className: te.Type, children: r }),
              n == 1
                ? (0, e.jsx)(Ce, {
                    strDesc: (0, x.we)("#MarketingMessages_DLC_desc_singular"),
                  })
                : (0, e.jsx)(Ce, {
                    strDesc: (0, x.we)("#MarketingMessages_DLC_desc"),
                  }),
            ],
          });
        }
        function Qe(i) {
          const { rgDLCSaleCapsules: t, messageType: n } = i;
          return t.length >= 4
            ? (0, e.jsx)(Be, {
                rgSaleCapsules: t,
                eClickLocation: C.cU.FQ,
                children: (0, e.jsx)(xe, { messageType: n }),
              })
            : t.length >= 3
              ? (0, e.jsxs)("div", {
                  className: te.DlcCtn,
                  children: [
                    (0, e.jsx)(xe, { messageType: n }),
                    (0, e.jsx)("div", {
                      className: te.OneItemRow,
                      children: (0, e.jsx)(de, {
                        id: t[0].id,
                        type: t[0].type,
                        eClickLocation: C.cU.FQ,
                      }),
                    }),
                    (0, e.jsx)(Pe, {
                      first: t[1],
                      second: t[2],
                      eClickLocation: C.cU.FQ,
                    }),
                  ],
                })
              : t.length >= 2
                ? (0, e.jsxs)("div", {
                    className: te.DlcCtn,
                    children: [
                      (0, e.jsx)(xe, { messageType: n }),
                      (0, e.jsx)("div", {
                        className: te.OneItemRow,
                        children: (0, e.jsx)(de, {
                          id: t[0].id,
                          type: t[0].type,
                          eClickLocation: C.cU.FQ,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: te.OneItemRow,
                        children: (0, e.jsx)(de, {
                          id: t[1].id,
                          type: t[1].type,
                          eClickLocation: C.cU.FQ,
                        }),
                      }),
                    ],
                  })
                : t.length >= 1
                  ? (0, e.jsxs)("div", {
                      className: te.DlcCtn,
                      children: [
                        (0, e.jsx)(xe, { messageType: n, itemCount: t.length }),
                        (0, e.jsx)("div", {
                          className: te.OneBigItem,
                          children: (0, e.jsx)(je, {
                            capsule: t[0],
                            imageType: "main",
                            eClickLocation: C.cU.FQ,
                          }),
                        }),
                      ],
                    })
                  : null;
        }
        function Be(i) {
          const { rgSaleCapsules: t, eClickLocation: n, children: r } = i;
          return (0, e.jsxs)("div", {
            className: te.DlcCtn,
            children: [
              r,
              (0, e.jsx)(Pe, { first: t[0], second: t[1], eClickLocation: n }),
              (0, e.jsx)(Pe, { first: t[2], second: t[3], eClickLocation: n }),
            ],
          });
        }
        function Ce(i) {
          return (0, e.jsx)("div", {
            className: te.DealDesc,
            children: i.strDesc,
          });
        }
        function Pe(i) {
          const { first: t, second: n, eClickLocation: r } = i;
          return (0, e.jsxs)("div", {
            className: te.TwoCapsuleRow,
            children: [
              (0, e.jsx)("div", {
                className: te.DlcCtn,
                children: (0, e.jsx)(je, {
                  capsule: t,
                  imageType: "header",
                  eClickLocation: r,
                }),
              }),
              (0, e.jsx)("div", {
                className: te.DlcCtn,
                children: (0, e.jsx)(je, {
                  capsule: n,
                  imageType: "header",
                  eClickLocation: r,
                }),
              }),
            ],
          });
        }
        var ze = s(36118),
          Se = s(53113),
          Le = s(31343);
        function Ye(i) {
          const t = se(),
            [n, r] = (0, l.useState)(() => t.GetFeaturedVideoAutoPlay()),
            u = (0, l.useRef)(null);
          (0, N.q)(u);
          const f = (0, b.WN)(t.GetTemplateVars().linkurl, C.cU.wY),
            D = (0, m.Qn)();
          return (0, e.jsx)(U.Z, {
            focusable: !0,
            noFocusRing: !0,
            onActivate: (P) =>
              !D && t.GetFeaturedVideoAutoPlay() ? f(P) : r(!0),
            className: Le.PosterCtn,
            children: n
              ? (0, e.jsxs)("video", {
                  controls: !t.GetFeaturedVideoLoop(),
                  ref: u,
                  muted: !0,
                  autoPlay: !0,
                  className: Le.Video,
                  loop: t.GetFeaturedVideoLoop(),
                  crossOrigin: "anonymous",
                  children: [
                    (0, e.jsx)("source", {
                      src: (0, Se.L$)(t.GetFeaturedVideoWebMURL()),
                      type: "video/webm",
                    }),
                    !_.TS.IN_CLIENT &&
                      (0, e.jsx)("source", {
                        src: (0, Se.L$)(t.GetFeaturedVideoMP4URL()),
                        type: "video/mp4",
                      }),
                    (0, e.jsx)($e, { message: t }),
                  ],
                })
              : (0, e.jsx)(Ze, { message: t }),
          });
        }
        function Ze(i) {
          const { message: t } = i,
            n = t.GetTemplateVars()?.last_asset_mtime,
            [r, u] = t.GetPosterImage(),
            f = W(t.id, u, n, { type: "file", path: r });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("img", { src: f, className: Le.Poster }),
              (0, e.jsx)(ze.IOc, {}),
            ],
          });
        }
        function $e(i) {
          const { message: t } = i,
            n = (0, l.useMemo)(() => {
              const r = t.GetSubtitleObj(),
                u = t.GetTemplateVars()?.last_asset_mtime,
                f = new Array();
              for (let D = I.Bhc; D < I.bP9; ++D) {
                if (!x.A0.IsELanguageValidInRealm(D, _.TS.EREALM)) continue;
                const P = (0, I.LgB)(D);
                if (r && r[P]) {
                  const X = r[P].path,
                    q = W(t.id, D, u, { type: "file", path: X });
                  f.push(
                    (0, e.jsx)(
                      "track",
                      {
                        src: q,
                        kind: "subtitles",
                        srcLang: (0, I.wwZ)(D),
                        default: _.TS.LANGUAGE == P,
                        label: (0, x.we)(
                          "#language_selection_" + (0, I.LgB)(D),
                        ),
                      },
                      t.id + " " + D,
                    ),
                  );
                }
              }
              return f;
            }, [t]);
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Je(i) {
          const { bLowBandwidthMode: t } = i,
            n = se(),
            r = !t && n.GetTemplateVars().custom_display === "featured_video";
          return (0, e.jsx)(B.Ay, {
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(J, {
                  isBackgroundBlur: !0,
                  bOverrideUseBackgroundImage: r,
                }),
                (0, e.jsxs)(z, {
                  children: [
                    (0, e.jsx)(J, { bOverrideUseBackgroundImage: r }),
                    !!r && (0, e.jsx)(Ye, {}),
                  ],
                }),
                (0, e.jsx)(ce, {}),
              ],
            }),
          });
        }
        function Xe(i) {
          const t = se(),
            n = (0, b.WN)(t.GetTemplateVars().linkurl, C.cU.vm);
          return (0, e.jsx)(B.Ay, {
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(J, { isBackgroundBlur: !0 }),
                (0, e.jsx)(z, { children: (0, e.jsx)(ye, { fnOnClick: n }) }),
                (0, e.jsx)(ce, {}),
              ],
            }),
          });
        }
        var Re = s(87937),
          qe = s(86048),
          es = s(41188),
          ss = s(64457),
          ts = s(48963),
          re = s.n(ts),
          as = s(25046),
          ns = s(85599),
          rs = s(76532),
          Ie = s.n(rs),
          is = s(71421),
          os = s(67705);
        function ls(i) {
          const { id: t } = i,
            { data: n } = (0, o.J$)(t),
            r = (0, l.useMemo)(() => {
              if (!n) return [];
              const u =
                n.categories?.supported_player_categoryids?.slice(0, 1) || [];
              return (
                n.categories?.feature_categoryids?.forEach((f) => u.push(f)),
                n.categories?.controller_categoryids?.forEach((f) => u.push(f)),
                n.categories?.supported_player_categoryids
                  ?.slice(1)
                  .forEach((f) => u.push(f)),
                u
              );
            }, [n]);
          return !r || r.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: (0, R.A)(Ie().SaleTagBlockCtn, "SaleTagBlockCtn"),
                children:
                  r?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, R.A)(Ie().TagBox, Ie().Categories),
                        children: r.map((u) =>
                          (0, e.jsx)(cs, { categoryID: u }, "cat_" + u),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: (0, x.we)("#Broadcast_None"),
                      }),
              });
        }
        class fe {
          m_rgCategories;
          constructor() {
            this.m_rgCategories = (0, os.Tc)(
              "feature_categories",
              "application_config",
            );
          }
          static g_Self = null;
          static Get() {
            return fe.g_Self || (fe.g_Self = new fe()), fe.g_Self;
          }
        }
        function cs(i) {
          const { categoryID: t } = i,
            n = fe.Get().m_rgCategories.find((r) => r.categoryid == t);
          return n
            ? (0, e.jsx)("div", {
                className: Ie().Category,
                children: (0, e.jsx)(is.he, {
                  toolTipContent: n.name,
                  children: (0, e.jsx)("div", {
                    className: Ie().CategoryIcon,
                    style: {
                      background: `url(${_.TS.STORE_CDN_URL}/public/images/${n.image_path}) no-repeat center center/cover`,
                    },
                  }),
                }),
              })
            : null;
        }
        function us(i) {
          const {
              id: t,
              fnOnClickButton: n,
              bLowBandwidthMode: r,
              bUseAssetWithoutOverride: u,
            } = i,
            { data: f } = (0, o.j4)(t),
            { data: D } = (0, o.J$)(t),
            P = (0, as.kB)(t);
          return !f || !D
            ? (0, e.jsx)("div", {
                className: (0, R.A)(re().HilightGrid, re().MediaContainerMM),
                children: (0, e.jsx)(ns.t, { size: "medium" }),
              })
            : (0, e.jsx)("div", {
                className: (0, R.A)(re().HilightGrid, re().MediaContainerMM),
                children: (0, e.jsx)(ss._t, {
                  id: t,
                  elFeaturedInCenter: (0, e.jsx)(ms, {
                    id: t,
                    bUseAssetWithoutOverride: !!u,
                    fnOnClickButton: n,
                  }),
                  trailer: P && P.length > 0 ? P[0] : void 0,
                  storeItemScreenshots: f,
                  bUseTrailerAsFirstThumb: !r,
                  bNoScreenShotModals: !0,
                  name: D.name || "",
                }),
              });
        }
        function ms(i) {
          const { id: t, fnOnClickButton: n, bUseAssetWithoutOverride: r } = i,
            [, u] = (0, qe.OP)(),
            { data: f } = (0, o.lv)(t, r),
            { data: D } = (0, o.J$)(t),
            { data: P } = (0, o.wl)(t),
            { data: X } = (0, o.xz)(t);
          if (!f || !P || !D) return null;
          const q = (0, a.b0)(f, "main_capsule");
          return (0, e.jsxs)(U.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: re().MainCapsuleWithHover,
            ...u,
            onActivate: n,
            children: [
              (0, e.jsx)("img", {
                className: re().MainCapsule,
                src: q,
                alt: D.name || "",
              }),
              (0, e.jsxs)("div", {
                className: re().AppDetails,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, R.A)(re().GameName),
                    children: D.name || "",
                  }),
                  (0, e.jsxs)("div", {
                    className: re().ShortDesc,
                    children: [P.short_description, " "],
                  }),
                  (0, e.jsx)(es.n, {
                    rgTagIDs: X
                      ? X.slice(0, 10).map((ae) => ae.tagid || 0)
                      : [],
                    instanceNum: 0,
                    bLargeText: !0,
                    bHideTitle: !0,
                    bNoStoreLinks: !0,
                  }),
                  (0, e.jsx)(ls, { id: t }),
                ],
              }),
            ],
          });
        }
        var ds = s(6698),
          gs = s(92264),
          ge = s(92609),
          Ge = s(179);
        function _s(i) {
          const { bPreview: t, bLowBandwidthMode: n } = i,
            r = se(),
            u = (0, b.WN)(r.GetTemplateVars().linkurl, C.cU.C1),
            f = r.associated_item_key;
          return (0, e.jsx)(B.Ay, {
            submethod: "mm-auto-render",
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(ie, { id: f }),
                (0, e.jsx)(z, {
                  children: (0, e.jsxs)("div", {
                    className: ge.AutoRenderContents,
                    children: [
                      (0, e.jsxs)("div", {
                        className: ge.TitleContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: ge.TypeTitle,
                            children: T.rT.GetTypeAsLocalizedString(
                              r.GetType(),
                            ),
                          }),
                          (0, e.jsx)(hs, { message: r, id: f }),
                        ],
                      }),
                      (0, e.jsx)(ds.oj, {
                        appid: r.associated_item_appid,
                        children: (0, e.jsx)(us, {
                          id: f,
                          fnOnClickButton: u,
                          bLowBandwidthMode: n,
                          bUseAssetWithoutOverride:
                            r.GetAutoRenderWithoutAssetOverrides(),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(Me, {
                  bHidePrice: r.GetTemplateVars().hide_price,
                  fnOnClickButton: u,
                }),
              ],
            }),
          });
        }
        function hs(i) {
          const { message: t, id: n } = i,
            { data: r } = (0, o.J$)(n),
            u = r?.free_weekend,
            [f] = (0, Ge.QD)("timezone"),
            [D] = (0, Ge.QD)("locale");
          if (t.GetType() == C.D4.SK) {
            if (u?.text)
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: u.text,
              });
            if (u?.end_time) {
              D && x.pf.SetPreferredLocales([D]);
              const q = f || Intl.DateTimeFormat().resolvedOptions().timeZone,
                ae = u.end_time,
                ne = Re.unix(ae).tz(q),
                pe = ne.format("z"),
                Te = pe.match(/^-?\d/)
                  ? `UTC${Re.unix(ae).tz(q).format("Z").replace(":00", "")}`
                  : pe,
                Ue = (0, gs.P0)(ne.unix(), !1, Te, f);
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, x.we)("#msg_free_play_until", Ue),
              });
            } else
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, x.we)("#msg_free_play_weekend"),
              });
          }
          const X = t.GetTemplateVars()?.autorender_subtitle_token;
          return X
            ? (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, x.we)(X),
              })
            : null;
        }
        var fs = s(24642),
          ps = s(68266),
          vs = s(36174),
          Ee = s(23871);
        const Ms = [20, 50, 100, 200, 500, 1e3, 2e3, 5e3];
        function js() {
          const i = se(),
            { sale_clan_account: t, sale_clan_event_gid: n } =
              i.GetTemplateVars(),
            { eventModel: r, bLoading: u } = (0, S.B9)(
              t ? Number(t) : void 0,
              n,
            ),
            f = (0, ps.m0)(r, "capsule", (0, I.sfN)(_.TS.LANGUAGE)),
            D = (0, l.useMemo)(
              () =>
                i
                  .GetRecommendedAppIDs()
                  .slice(0, T.rK)
                  .map((P) => ({ id: P, type: "game" })),
              [i],
            );
          return (
            (0, l.useEffect)(() => {
              const P = Is(i.GetSaleItemCount());
              P &&
                i.OverrideCustomText(
                  (0, x.we)(
                    "#MarketingMessages_See_AtLeast_Items",
                    (0, fs.D)(P),
                  ),
                );
            }, [i]),
            (0, e.jsx)(B.Ay, {
              submethod: "sale_items",
              children: (0, e.jsxs)(ee, {
                children: [
                  f
                    ? (0, e.jsx)(oe, { strImageURL: f })
                    : (0, e.jsx)(J, { isBackgroundBlur: !0 }),
                  (0, e.jsxs)(z, {
                    children: [
                      (0, e.jsx)(Es, {
                        eventModel: r,
                        strCapsuleURL: f,
                        bLoading: u,
                      }),
                      (0, e.jsx)(Be, {
                        rgSaleCapsules: D,
                        eClickLocation: C.cU.C1,
                        children: (0, e.jsx)(Ce, {
                          strDesc: (0, x.we)(
                            "#MarketingMessages_SaleItems_Label",
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(ce, { bHidePrice: !0 }),
                ],
              }),
            })
          );
        }
        function Is(i) {
          return Ms.filter((t) => t <= (i ?? 0)).pop();
        }
        function Es(i) {
          const { eventModel: t, strCapsuleURL: n, bLoading: r } = i,
            u = se(),
            { linkurl: f } = u.GetTemplateVars(),
            D = (0, b.WN)(f, C.cU.wY);
          if (r) return (0, e.jsx)("div", { className: Ee.Header });
          if (!t || !n) return (0, e.jsx)(J, {});
          const P = t.GetNameWithFallback((0, I.sfN)(_.TS.LANGUAGE)),
            X = t.endTime,
            q = !!X && X > (0, vs._2)();
          return (0, e.jsxs)(U.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: Ee.Header,
            onActivate: D,
            children: [
              (0, e.jsx)("img", { className: Ee.Capsule, src: n, alt: P }),
              (0, e.jsxs)("div", {
                className: Ee.HeaderText,
                children: [
                  (0, e.jsx)(le, {
                    strType: (0, x.we)("#MarketingMessages_SaleEvent"),
                    strTitle: P,
                    bSmallTitle: !0,
                  }),
                  q &&
                    (0, e.jsx)("div", {
                      className: Ee.Dates,
                      children: (0, x.we)(
                        "#MarketingMessages_SaleEvent_Through",
                        (0, x._l)(X, !1, !1, !1),
                      ),
                    }),
                ],
              }),
            ],
          });
        }
        const be = l.createContext(null);
        function se() {
          return l.useContext(be);
        }
        function Ts(i) {
          const { message: t, preview: n } = i,
            r = i.active !== !1,
            u = (0, A.NZ)();
          return (
            l.useEffect(() => {
              r && u(t.GetLegalHTML());
            }, [r, t, u]),
            (0, e.jsx)(be.Provider, {
              value: t,
              children: (0, e.jsx)(l.Suspense, {
                fallback: null,
                children: (0, e.jsx)(As, { message: t, active: r, preview: n }),
              }),
            })
          );
        }
        const ys = l.lazy(() =>
          Promise.all([s.e(75976), s.e(8287)]).then(s.bind(s, 72795)),
        );
        function As(i) {
          const { message: t, active: n, preview: r } = i,
            u = (0, I.sfN)(m.TS.LANGUAGE),
            { bLowBandwidthMode: f } = (0, v.ri)();
          if (
            (0, T.$I)(t.GetTemplateVars().custom_display || "") &&
            m.iA.logged_in
          ) {
            const P = Number(
              (0, T.fL)(t.GetTemplateVars().custom_display || ""),
            );
            return isNaN(P) ? null : (0, e.jsx)(ys, { active: n, year: P });
          }
          switch (t.GetTemplateVars().custom_display) {
            case "dlc_override":
              return (0, e.jsx)(He, { bPreview: r });
            case "partner_event":
              return (0, e.jsx)(he, {
                bPreview: r,
                bUseAnimated: (0, v.vn)(t, u, f),
              });
            case "mm_auto_render":
              return (0, e.jsx)(_s, { bPreview: r, bLowBandwidthMode: f });
          }
          return t.BShouldShowSaleItems()
            ? (0, e.jsx)(js, {})
            : t.GetTemplateType() === "image"
              ? (0, v.vn)(t, u, f)
                ? (0, e.jsx)(Xe, {})
                : (0, e.jsx)(Je, { bLowBandwidthMode: f })
              : null;
        }
      },
      70537: (F, V, s) => {
        "use strict";
        s.d(V, { Mf: () => B, Ng: () => g, eI: () => Z });
        var e = s(7850),
          I = s(97743),
          l = s(90626),
          T = s(92757),
          A = s(16412),
          m = s(18210),
          v = s(32858),
          d = s(84121),
          b = s.n(d),
          U = s(36118),
          S = s(36707),
          K = s(90740),
          _ = s(27638),
          W = s(85599),
          H = s(2546);
        const N = 8,
          k = l.createContext(null);
        function g() {
          return l.useContext(k);
        }
        function B(E) {
          const { MarketingMessagesStore: M } = E,
            j = (0, v.ri)(),
            { rgMessages: o, isError: a } = (0, I.XW)(M, j),
            [c, p] = l.useState(!1),
            [h, L] = l.useState(0);
          (0, _.Y)(d.MarketingMessagePage);
          const O = (0, T.W6)();
          if (
            (l.useEffect(() => {
              o &&
                !o.length &&
                !a &&
                (j.bIncludeSeenMessages
                  ? p(!0)
                  : O.replace({
                      ...O.location,
                      search: (0, v.GY)({ ...j, bIncludeSeenMessages: !0 }),
                    }));
            }, [o, j, O, a]),
            a)
          )
            return (0, e.jsx)(G, {
              children: (0, m.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (c)
            return (0, e.jsx)(G, {
              children: (0, m.we)("#MarketingMessages_NoneAvailable"),
            });
          const Y = j.bIncludeSeenMessages ? o : o?.slice(0, N);
          return (0, e.jsxs)("div", {
            className: d.MessageListPage,
            children: [
              (0, e.jsx)("div", {
                className: d.MessageListScroll,
                children: (0, e.jsx)(R, {
                  MarketingMessagesStore: M,
                  rgMessages: Y,
                  iActiveMessage: h,
                }),
              }),
              (0, e.jsx)(x, {
                cMessages: Y?.length,
                iMessage: h,
                setMessage: L,
              }),
            ],
          });
        }
        function R(E) {
          const {
            MarketingMessagesStore: M,
            rgMessages: j,
            iActiveMessage: o,
          } = E;
          return j
            ? (0, e.jsx)("div", {
                className: d.MessageListContainer,
                children: j?.map((a, c) =>
                  (0, e.jsx)(
                    C,
                    {
                      displayIndex: c,
                      message: a,
                      MarketingMessagesStore: M,
                      active: c == o,
                      next: c == o + 1 || c == o - 1,
                    },
                    a.id,
                  ),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, S.A)(d.MessageListContainer, d.Loading),
                children: (0, e.jsx)(W.t, {
                  size: "xxlarge",
                  msDelayAppear: 500,
                }),
              });
        }
        function x(E) {
          const { cMessages: M, iMessage: j, setMessage: o } = E,
            a = l.useCallback(() => o(j - 1), [o, j]),
            c = l.useCallback(() => o(j + 1), [o, j]),
            p = [];
          for (let O = 0; O < M; O++)
            p.push(
              (0, e.jsx)(Q, { active: O == j, iMessage: O, setMessage: o }, O),
            );
          const h = j > 0 ? a : void 0,
            L = j < M - 1 ? c : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: d.CarouselSpacer }),
              (0, e.jsx)("div", {
                className: d.CarouselBar,
                children: (0, e.jsxs)("div", {
                  className: d.Content,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, S.A)(d.LeftArrow, h && d.Active),
                      onClick: h,
                      children: (0, e.jsx)(U.l8x, { angle: 180 }),
                    }),
                    (0, e.jsx)("div", { className: d.Spacer }),
                    (0, e.jsx)("div", {
                      className: d.PipContainer,
                      children: (0, e.jsx)("div", {
                        className: d.Pips,
                        children: p,
                      }),
                    }),
                    (0, e.jsx)("div", { className: d.Spacer }),
                    (0, e.jsx)("div", {
                      className: (0, S.A)(d.LeftArrow, L && d.Active),
                      onClick: L,
                      children: (0, e.jsx)(U.l8x, { angle: 0 }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Q(E) {
          const { active: M, iMessage: j, setMessage: o } = E,
            a = l.useCallback(() => o(j), [o, j]);
          return (0, e.jsx)("div", {
            className: (0, S.A)(d.Pip, M && d.Active),
            onClick: a,
          });
        }
        function Z(E) {
          const { MarketingMessagesStore: M, preview: j } = E,
            o = (0, T.W5)(),
            { message: a, isError: c } = (0, I.dr)(M, o.params.messageid, j);
          return (
            (0, _.Y)(d.MarketingMessagePage),
            c
              ? (0, e.jsx)(G, {
                  children: (0, m.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : o.params.messageid
                ? a
                  ? (0, e.jsx)(H.Q, { message: a, preview: j })
                  : null
                : (0, e.jsx)(G, {
                    children: (0, m.we)("#MarketingMessages_NoneAvailable"),
                  })
          );
        }
        function G(E) {
          return (0, e.jsxs)(A.UC, {
            style: { maxWidth: "400px", margin: "0 auto" },
            children: [
              (0, e.jsxs)(A.Y9, {
                children: [(0, m.we)("#Error_Generic"), " "],
              }),
              (0, e.jsx)(A.nB, { children: E.children }),
            ],
          });
        }
        function w(E, M, j) {
          l.useEffect(() => {
            M &&
              E.MarkMessageSeen(M.id, j + 1, M.GetTemplateTypeForReporting());
          }, [M, E, j]);
        }
        function C(E) {
          const {
              message: M,
              MarketingMessagesStore: j,
              active: o,
              next: a,
              displayIndex: c,
            } = E,
            p = l.useRef(void 0),
            h = l.useRef(o || a);
          if ((w(j, o ? M : null, c), (o || a) && (h.current = !0), !h.current))
            return null;
          let L = {
            enter: d.Enter,
            enterActive: d.EnterActive,
            enterDone: d.EnterDone,
            exit: d.Exit,
            exitActive: d.ExitActive,
            exitDone: d.ExitDone,
          };
          return (0, e.jsx)(K.A, {
            in: o,
            nodeRef: p,
            classNames: L,
            timeout: 300,
            mountOnEnter: !a,
            unmountOnExit: !a,
            children: (0, e.jsx)(k.Provider, {
              value: c,
              children: (0, e.jsx)("div", {
                className: (0, S.A)(d.MessageWrapper, o && d.Active),
                ref: p,
                children: (0, e.jsx)(H.Q, { message: M, active: o }),
              }),
            }),
          });
        }
      },
      32858: (F, V, s) => {
        "use strict";
        s.d(V, { GY: () => A, ri: () => T, vn: () => m });
        var e = s(90626),
          I = s(92757),
          l = s(18210);
        function T() {
          const v = (0, I.zy)();
          return e.useMemo(() => {
            const d = new URLSearchParams(v.search);
            return {
              bIncludeSeenMessages: !!d.get("include_seen"),
              nClientPackageVersion: parseInt(
                d.get("client_package_version") || "0",
              ),
              eOSType: parseInt(d.get("os_type") || "0"),
              bLowBandwidthMode: !!d.get("low_bandwidth"),
            };
          }, [v.search]);
        }
        function A(v) {
          const d = new URLSearchParams();
          return (
            v.bIncludeSeenMessages && d.append("include_seen", "1"),
            v.nClientPackageVersion &&
              d.append(
                "client_package_version",
                v.nClientPackageVersion.toString(),
              ),
            v.eOSType && d.append("os_type", v.eOSType.toString()),
            v.bLowBandwidthMode && d.append("low_bandwidth", "1"),
            d.toString()
          );
        }
        function m(v, d, b) {
          if (!b && v.BHasTemplateAnimatedAssets()) {
            const U = l.A0.GetELanguageFallback(d);
            return (
              v.BHasTemplateAnimatedAssetForLanguage(d) ||
              v.BHasTemplateAnimatedAssetForLanguage(U)
            );
          }
          return !1;
        }
      },
      35330: (F, V, s) => {
        "use strict";
        s.r(V), s.d(V, { MarketingMessageRoutes: () => _, default: () => W });
        var e = s(7850),
          I = s(58732),
          l = s(90626),
          T = s(92757),
          A = s(67705);
        const m = l.createContext({ prioritized_list: !1 });
        function v(g) {
          const [B, R] = l.useState(),
            x = (0, T.zy)(),
            Q = l.useMemo(() => {
              const Z = new URLSearchParams(x.search);
              return {};
            }, [x.search]);
          return (
            l.useEffect(() => {
              const Z = (0, A.Tc)(
                "marketingmessage_config",
                "application_config",
              );
              R({});
            }, [Q]),
            B
              ? (0, e.jsxs)(m.Provider, {
                  value: B,
                  children: [g.children, " "],
                })
              : null
          );
        }
        var d = s(70537),
          b = s(68312),
          U = s(97743),
          S = s(32738),
          K = s(51079);
        const _ = {
          List: () => `${I.B.MarketingMessages()}list/`,
          Message: (g) => `${I.B.MarketingMessages()}${g}`,
          MessagePreview: (g) => `${I.B.MarketingMessages()}preview/${g}`,
        };
        function W(g) {
          const B = k();
          return B
            ? (0, e.jsx)(K.Ay, {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
                children: (0, e.jsx)(v, {
                  children: (0, e.jsx)(S.g1, {
                    children: (0, e.jsxs)(T.dO, {
                      children: [
                        (0, e.jsx)(T.qh, {
                          path: `${_.List()}`,
                          children: (0, e.jsx)(d.Mf, {
                            MarketingMessagesStore: B,
                          }),
                        }),
                        (0, e.jsx)(T.qh, {
                          path: `${_.MessagePreview(":messageid")}`,
                          children: (0, e.jsx)(d.eI, {
                            MarketingMessagesStore: B,
                            preview: !0,
                          }),
                        }),
                        (0, e.jsx)(T.qh, {
                          path: `${_.Message(":messageid")}`,
                          children: (0, e.jsx)(d.eI, {
                            MarketingMessagesStore: B,
                          }),
                        }),
                        (0, e.jsx)(T.qh, {
                          children: (0, e.jsx)(T.rd, { to: `${_.List()}` }),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null;
        }
        let H;
        function N(g) {
          return H || (H = new U.Nt(g)), H;
        }
        function k() {
          const [g, B] = l.useState(null),
            R = (0, b.TR)();
          return (
            l.useEffect(() => {
              g || B(N(R));
            }, [g, R]),
            g
          );
        }
      },
      48963: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
      84121: (F) => {
        F.exports = {
          MarketingMessagePage: "_1HVoKfdcaouK3kHKX2kH5t",
          MessageListPage: "_1N7O3VXbkpN2z55HsSDZsi",
          MessageListScroll: "_2RW7G8Bi-8k-29anQh8Ie8",
          CarouselBar: "O7VJKyPtoS7TXCr6mrwCr",
          Content: "_1qtg3ASXX4ClYiTHPq9Tkl",
          LeftArrow: "_3ZyZUkBq73dLvZ6zKdM9PQ",
          RightArrow: "_2WuPusSmjw_B4rfkgb-NV8",
          Active: "cwA5j4AsP5OB7WjWuOlFv",
          Spacer: "COvXCP3wZxk_s1ho7e3WO",
          PipContainer: "_3ASpk2zuTuDhIXKorFGF_L",
          Pips: "_1rpuGJtVR-xrddd9ui6IWu",
          Pip: "ZQrtMhZB1tpkd2bgBXyIF",
          MessageListContainer: "_33cf4TnmCK5XdTjanW9bVf",
          Loading: "_1xSKZdDmIvXYCmFif6fSAq",
          MessageWrapper: "_152h7KWYvm_9hIyzRzh8kl",
          Enter: "DZICERQkVmyCBP2E-PwlH",
          EnterActive: "RU-xm1VaMHf9H7o1TFkVO",
          EnterDone: "_3AP2YQ_mKZF-H78sMt3rKC",
          Exit: "_2xmDIRYN5Pu_eHRMjWop63",
          ExitActive: "_32DFHj9NmyNtEK-3K3nKuX",
          ExitDone: "_3cFXRpyI9jrZ2qCySg3fiT",
        };
      },
      92609: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          AutoRenderContents: "_1H1L2spV-tto6AJmQMSfsA",
          TitleContainer: "_2iA76-Eh1ID-HXFGGR5BoH",
          TypeTitle: "klzItvORTtJ0Eeg8ArDrN",
          TypeSubTitle: "QPZq6bu7lf50YpRKZgPCc",
          BackgroundAnimation: "_13qwvch-5kbKbOaRivhMXc",
          "ItemFocusAnim-darkerGrey-nocolor": "_3DNhNNrE4iKRi60PdXWepo",
          "ItemFocusAnim-darkerGrey": "_15lW83rYVxUKmbx_X2Huiw",
          "ItemFocusAnim-darkGreySettings": "_2-gDTKZjm9Ajq5sJ9tSPUR",
          "ItemFocusAnim-darkGrey": "_3HGF0obZAs6s2bNbYpM7qW",
          "ItemFocusAnim-grey": "_3YpbyrBpBdoe0gBRw1Hbqx",
          "ItemFocusAnim-translucent-white-10": "_30y8LayXh8jUHdaxQlL0ZS",
          "ItemFocusAnim-translucent-white-20": "_27U6YkfThQDFTGvax-gmlu",
          "ItemFocusAnimBorder-darkGrey": "_2JbY6SYVtLg0XfAcDsFaMR",
          "ItemFocusAnim-green": "_3976kBFFMdgKDnNELLMM6G",
          focusAnimation: "SzNeb_49-6eaLunS7L3C",
          hoverAnimation: "_1ji7N9JSTyeK_qtueFlYQi",
        };
      },
      720: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          UpdateEventCtn: "_3ICxVDu3-Bkx9aqyLehGGP",
          EventImage: "zDfA0bzAjCUkfaQx_KvS7",
          BackgroundAnimation: "OTs9Tg4QxhQ0Y_QNGDDt9",
          "ItemFocusAnim-darkerGrey-nocolor": "_1NdRyUGS8v6vgPO4so1xTw",
          "ItemFocusAnim-darkerGrey": "_2pygTjxugmVCyf_AACiIV9",
          "ItemFocusAnim-darkGreySettings": "_2k7FRzOjQym6IuES_SDcJs",
          "ItemFocusAnim-darkGrey": "_3znWC1DynbIfoAl5wwBaoo",
          "ItemFocusAnim-grey": "_2oa-LIlworjV0-bg_CQfoy",
          "ItemFocusAnim-translucent-white-10": "i9BFCko5sTUsKunkoSgIG",
          "ItemFocusAnim-translucent-white-20": "_2XDvVDTKofCXGIqRPg15Bt",
          "ItemFocusAnimBorder-darkGrey": "_3rZ3pu0VIsvlLePQQSHFLd",
          "ItemFocusAnim-green": "_2vAKcsXEpb9snlDyeK82te",
          focusAnimation: "_2I7fW0qyN3vk4sB9-UXHBH",
          hoverAnimation: "_1TlYxkxN-WZNFNjoM2t3Ha",
        };
      },
      16205: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          BackgroundImage: "_3vQ5a1hrg4SbTU1Uw3351z",
          DlcCtn: "_3H7i0ChQjoGWieNRcKmYea",
          Type: "HmoaKPBZvHxysTOtEt6I_",
          DealDesc: "_3fPQtBXFQwL3xrK4zmpmyq",
          OneItemRow: "_6a9d-uI8VyQTmWHS3vFI-",
          OneBigItem: "_2lKQioAzojICHeg5SX6fhc",
          TwoCapsuleRow: "_1s9-9e_1KjO0xTTJNj-KuT",
          BackgroundAnimation: "MAJyK9QcMypCZbMYmoLHu",
          "ItemFocusAnim-darkerGrey-nocolor": "_2IE90ljBHRp1SITs86XIYT",
          "ItemFocusAnim-darkerGrey": "_3Izi4xp4tar8pwj5nAAAJx",
          "ItemFocusAnim-darkGreySettings": "_1AXb9HQ7EwT6k-c4TWuD6b",
          "ItemFocusAnim-darkGrey": "_17XlJo9wQvFGnl_mC2sDDP",
          "ItemFocusAnim-grey": "_2_GD3bdKzrHkm2Ldb6tVut",
          "ItemFocusAnim-translucent-white-10": "_31VDSRuwtIPGNRsMsAiiuS",
          "ItemFocusAnim-translucent-white-20": "RpA2APZ8BdkDDu88M1t99",
          "ItemFocusAnimBorder-darkGrey": "_1JoYgnM2uNiTB2PbeAfe-S",
          "ItemFocusAnim-green": "_2cI4C5AH9C-VNLXQyhLoZE",
          focusAnimation: "_1kz2gc1Q6nZYfgugTIMxpo",
          hoverAnimation: "_2Kc7YeIDyVeYMtcdglCErh",
        };
      },
      31343: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          PosterCtn: "_24bJJZ8-xr8Et4DVUrr17J",
          Poster: "_3LbyxomxMvYMy7cLThkkIf",
          Video: "_2bH_Jxh-T2YFCPBCW_pvQB",
          BackgroundAnimation: "fmJwkjLpps2lTYiDhuZaS",
          "ItemFocusAnim-darkerGrey-nocolor": "_3P7eXvQeL41e2U1Dlf-o3y",
          "ItemFocusAnim-darkerGrey": "_1ox1csOfGebwxpQWCIrD8r",
          "ItemFocusAnim-darkGreySettings": "_1edLKf573MLIIzXMGDJQuk",
          "ItemFocusAnim-darkGrey": "_20nB-hQDWUFRiLXleHcpCi",
          "ItemFocusAnim-grey": "_3izRpxwl4_d_Vxa1pgYMiA",
          "ItemFocusAnim-translucent-white-10": "_1hhQO02787EOl9eQ9AMGYY",
          "ItemFocusAnim-translucent-white-20": "Y9TgOYN31D-9Nr_0YqCTN",
          "ItemFocusAnimBorder-darkGrey": "_3vZR4wYNZIWMbiwF5nGGUP",
          "ItemFocusAnim-green": "_1rcnmgd1hOIPA9f3ngfevA",
          focusAnimation: "_3uCspaHoybU11f9AiHQU-o",
          hoverAnimation: "fLko22pxQFa4_xcoc8AEf",
        };
      },
      23871: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          Header: "_2m3RxInRYd11y5ewu7kLxr",
          Capsule: "_1NQIYI_yPkSh0ZnjIjOb6w",
          HeaderText: "_38qIDuTcZeQsAF13tF8lDi",
          Dates: "_1eCCPp6vyvsBDfuTm0BZcD",
          BackgroundAnimation: "_1EzScJ5OD3gGXn-0v81Mv2",
          "ItemFocusAnim-darkerGrey-nocolor": "_2UvQorHrCjIq7P6EXRWm8i",
          "ItemFocusAnim-darkerGrey": "_3AW-8WgVS3LoJefCcZEwEB",
          "ItemFocusAnim-darkGreySettings": "Sm57uldLjwZAeFPp4rnOh",
          "ItemFocusAnim-darkGrey": "ij9wCUcSCRfn3Zelf5tVn",
          "ItemFocusAnim-grey": "nn7bODQXxrqm5vi65_Ghn",
          "ItemFocusAnim-translucent-white-10": "aGQ816L9HVOe1yWXJxFbO",
          "ItemFocusAnim-translucent-white-20": "EmgJ1FmL5KJswxAziYq02",
          "ItemFocusAnimBorder-darkGrey": "Sd78C1xqBFwA6oDwNItn4",
          "ItemFocusAnim-green": "_3kv1KnzqHXR-3c0S-AUI21",
          focusAnimation: "_3KrQ3h-n6RWIC439NendKo",
          hoverAnimation: "_2dE1gFZy2MzMZbRPHZfDIU",
        };
      },
      22329: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          All: "_1Ihp0wKLvNYkePQe0VrHnC",
          MessageFooter: "_3t5WMbFCdjhi0jY_LsEmHU",
          ButtonAndPriceCtn: "_1ZbewdWkMfyxa_PdVDMoDU",
          Legal: "_2_eDs58X0eEznR-ukDC_qt",
          NoButton: "_3IuUvJa9v9WI7_4WCI8-5t",
          Btn: "_3J3L60oPKSSmfBrQoNzGka",
          MessagePriceCtn: "_2g5STEIbDalv8hDLrPF3f-",
          Price: "G3m3RKwAqO-NG8_dvnifU",
          NoPrice: "_3fIuqvgfN6oD_bvpdHWEl8",
          PriceReal: "_14BApLFAAyKDCTSv-FU3cM",
          PriceRealShort: "_1E4sfQ48HHNa1aVRVPso3t",
          PriceRegular: "lhwy7sGWsQ0H-qiGzBfVO",
          Strike: "_3zM6T8KcphlmjOBnyqYGi0",
          MessageContent: "_2OxhXhvrpr4BL-kq6s7Eov",
          IsBlur: "_1M-oJo6Qwi_taE9-LcUQXw",
          MessageBody: "yNkHDKSU1gO-i7O8pRwGb",
          MessageImage: "_3R5wv6ya3QU6VH7qq2819z",
          VideoImageContainer: "_2yR5YNB4D48KDMaHJC7ELs",
          GameImage: "_1YhdlZrF81fOxpD5J2tD7o",
          EventType: "_1kBtSqsFkkixOn9MlYuuTa",
          EventTitle: "_2WtqvOJO09bKKgVvJYV_7q",
          SmallTitle: "M0i1HNwFwWUb2fshnV5cu",
          BaseCtn: "_6Tfttc004NhLDjbTDS9PC",
          CapsuleCtn: "bSrl3b6Qz1HKSithRsqvM",
          DescCtn: "_20PKe9KJTJC5SAbLi4Dy-Y",
          GameNameCtn: "kgQI2KVBs-Y3neqiTpbvQ",
          GameName: "QFFkjL-A27JtOIgIqO5dH",
          LibraryDetails: "_1ddC4grHqe7uggEE2cihEv",
          Button: "_2T5KnJO7YB00MG9YIyfImx",
          ViewInLibrary: "_3he9kmZ7_zW9VD6jkZAb1N",
          PlayDetailCtn: "J3BmO963EVK__A5VRDAQM",
          TextTop: "_3eCgYrG63hATLNUS2prQdu",
          TextBottom: "_3-KPIEC01O5ncvCQdfuTum",
          ButtonContainer: "_10sC9pDV-gUZWLDMtbWFpZ",
          BackgroundAnimation: "iazxtC_6xsy3ZAlQoiLly",
          "ItemFocusAnim-darkerGrey-nocolor": "_2cB4L3LYRmW8ZPhM1KmIiK",
          "ItemFocusAnim-darkerGrey": "ydW4ABxqu6OYOVnY28tB8",
          "ItemFocusAnim-darkGreySettings": "_4i8hDH1Gg-f_tUZZ4Zp5",
          "ItemFocusAnim-darkGrey": "_2IeQuqKv4kC7vVDREUnVXJ",
          "ItemFocusAnim-grey": "X3U1lQ94969mdo-OyDB4r",
          "ItemFocusAnim-translucent-white-10": "_3I9H7g6vFex4f-XocVTj-X",
          "ItemFocusAnim-translucent-white-20": "_2_i92FJitTDXOf5j2qHIAl",
          "ItemFocusAnimBorder-darkGrey": "_3ptMvwESzMu4HLigXQtQOm",
          "ItemFocusAnim-green": "jkn_IZFEGtZHxdFRc6KON",
          focusAnimation: "_38aC9CNFSq3FVlwkvehRI-",
          hoverAnimation: "_2a2hzvLCbR64ODBqWR_ARQ",
        };
      },
      61738: (F, V, s) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function I(T) {
          var A = l(T);
          return s(A);
        }
        function l(T) {
          if (!s.o(e, T)) {
            var A = new Error("Cannot find module '" + T + "'");
            throw ((A.code = "MODULE_NOT_FOUND"), A);
          }
          return e[T];
        }
        (I.keys = function () {
          return Object.keys(e);
        }),
          (I.resolve = l),
          (F.exports = I),
          (I.id = 61738);
      },
    },
  ]);
})();

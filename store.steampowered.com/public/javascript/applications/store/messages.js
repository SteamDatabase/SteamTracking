/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [35871],
    {
      68266: (W, K, s) => {
        "use strict";
        s.d(K, { lx: () => k, m0: () => F });
        var e = s(9046),
          E = s(55483),
          l = s(72609),
          x = s(21721),
          C = s(5827),
          d = s(40358),
          v = s(75233),
          m = s(80902),
          U = s(18210),
          G = s(53113),
          S = s(85741);
        function F(N, V, g, B = e.wI.full, R = !0) {
          const y = (0, v.jE)(),
            z = (0, C.eG)();
          return (0, m.I)(k(y, z, N, V, g, B, R)).data ?? void 0;
        }
        function _(N, V, g, B = e.wI.full, R = !0) {
          return ["useEventImageURLWithFallback", N?.GID, V, g, B, R];
        }
        function k(N, V, g, B, R, y = e.wI.full, z = !0) {
          return {
            queryKey: _(g, B, R, y, z),
            enabled: !!g?.GID,
            initialData: () => H(g, B, R, y, z),
            queryFn: async () => {
              if (!g) return null;
              let Y = H(g, B, R, y, z);
              if (Y) return Y;
              const b = await N.ensureQueryData(
                (0, E.ec)(g.clanSteamID.GetAccountID(), N),
              );
              if (B == "capsule") {
                let I = g.appid;
                if (
                  !I &&
                  b &&
                  ((b.is_creator_home && !b.is_ogg) || b.is_curator)
                )
                  if (g.jsondata?.referenced_appids?.length)
                    I = g.jsondata.referenced_appids[0];
                  else return b.avatar_full_url ?? null;
                const T = await N.ensureQueryData((0, d.AQ)(V, { appid: I }));
                return T
                  ? ((0, x.b0)(T, "main_capsule") ?? null)
                  : b?.avatar_full_url
                    ? b.avatar_full_url
                    : `${l.TS.STORE_ITEM_BASE_URL}steam/apps/${I}/header.jpg`;
              }
              return B == "background" &&
                b &&
                ((b.is_creator_home && !b.is_ogg) || b.is_curator)
                ? (b.creator_page_bg_url ?? null)
                : await N.ensureQueryData((0, S.dO)(N, V, g));
            },
          };
        }
        function H(N, V, g, B = e.wI.full, R = !0) {
          if (!N) return;
          const y = N.GetImageURL(V, g, B);
          if (y && y.trim().length > 0) return y;
          const z = U.A0.GetELanguageFallback(g);
          if (g != z) {
            const b = N.GetImageURL(V, z, B);
            if (b && b.trim().length > 0) return b;
          }
          if (V == "capsule") {
            let b = N.GetImageFromBeginningOfDescription(g, Number.MAX_VALUE);
            if (b && (R || (0, G.ZF)(b))) return b;
          }
        }
      },
      85741: (W, K, s) => {
        "use strict";
        s.d(K, { Mg: () => m, dO: () => U });
        var e = s(55483),
          E = s(99412),
          l = s(72609),
          x = s(5827),
          C = s(40358),
          d = s(75233),
          v = s(80902);
        function m(S) {
          const F = (0, d.jE)(),
            _ = (0, x.eG)();
          return (0, v.I)(U(F, _, S)).data ?? void 0;
        }
        function U(S, F, _) {
          return {
            queryKey: G(_),
            enabled: !!_?.GID,
            queryFn: async () => {
              if (!_) return null;
              const k = _.appid
                  ? await S.ensureQueryData((0, C.OE)(F, { appid: _.appid }))
                  : null,
                H = await S.ensureQueryData(
                  (0, e.ec)(_.clanSteamID.GetAccountID(), S),
                );
              if (_.appid)
                if (k) {
                  if (
                    k.all_ages_screenshots &&
                    k.all_ages_screenshots.length > 0
                  ) {
                    let N = Number(
                      _.bOldAnnouncement
                        ? _.AnnouncementGID
                        : _.GID == null
                          ? 0
                          : _.GID,
                    );
                    return (
                      (N = N % k.all_ages_screenshots.length),
                      `${l.TS.STORE_ITEM_BASE_URL}${k.all_ages_screenshots[N].filename}`
                    );
                  }
                } else return "";
              return _.GetEventType() != E.ajI &&
                H &&
                ((H.is_creator_home && !H.is_ogg) || H.is_curator)
                ? (H.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function G(S) {
          return ["useFallbackArtworkScreenshot", S?.GID];
        }
      },
      64457: (W, K, s) => {
        "use strict";
        s.d(K, { PE: () => Y, Yg: () => R, _t: () => y, gO: () => w });
        var e = s(7850),
          E = s(21721),
          l = s(25046),
          x = s(40358),
          C = s(68094),
          d = s(41032),
          v = s(90626),
          m = s(62571),
          U = s(40426),
          G = s(36118),
          S = s(36707),
          F = s(18210),
          _ = s(72609),
          k = s(96538),
          H = s(85599),
          N = s(64271),
          V = s(48963),
          g = s.n(V),
          B = s(50573);
        function R(T) {
          const { id: M, bPopOutTrailerPlayback: j } = T,
            { data: o } = (0, x.Yo)(M),
            { data: a } = (0, x.j4)(M),
            { data: c } = (0, x.J$)(M),
            [p, h] = (0, v.useState)(!1),
            [A, O] = (0, v.useState)(!1),
            $ = (0, d.dy)(),
            J = o?.highlights?.filter((Z) => !$ || Z.all_ages),
            D = J && J?.length > 0 ? J[0] : void 0,
            ee = v.useCallback(() => {
              D && (j ? O(!0) : h((Z) => !Z));
            }, [D, j]);
          if (!c)
            return (0, e.jsx)("div", {
              className: (0, S.A)(g().HilightGrid, g().MediaContainer),
              children: (0, e.jsx)(H.t, { size: "medium" }),
            });
          const Q = D
            ? (0, e.jsx)(I, {
                trailer: D,
                bPlayVideo: p,
                fnTogglePlayTrailer: ee,
              })
            : null;
          return !D &&
            !(a && a.all_ages_screenshots && a.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, S.A)(g().HilightGrid, g().MediaContainer),
                children: [
                  (0, e.jsx)(y, {
                    elFeaturedInCenter: Q,
                    storeItemScreenshots: a,
                    trailer: D,
                    id: M,
                    name: c.name || "",
                  }),
                  j
                    ? (0, e.jsx)(Y, {
                        id: M,
                        bShowModal: A,
                        hideModal: () => O(!1),
                      })
                    : (0, e.jsx)(z, {
                        name: c.name || "",
                        trailer: D,
                        bPlayVideo: p,
                        fnTogglePlayTrailer: ee,
                        bControls: !0,
                      }),
                ],
              });
        }
        function y(T) {
          const {
              elFeaturedInCenter: M,
              id: j,
              name: o,
              trailer: a,
              storeItemScreenshots: c,
              featureElementclassName: p,
              bUseTrailerAsFirstThumb: h,
              bNoScreenShotModals: A,
            } = T,
            [O, $] = v.useState(void 0),
            [J, D] = (0, U.XC)(),
            ee = (0, d.dy)(),
            Q = (0, v.useRef)(null),
            [Z, De] = (0, v.useState)(0);
          if (!j) return null;
          const ie = M || (O !== void 0 && O !== -1) ? O : 0,
            oe = new Array(),
            le = new Array();
          h &&
            a &&
            (oe.push(
              (0, e.jsx)(
                I,
                {
                  trailer: a,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => $(0),
                  onMouseLeave: () => {
                    const ue = Q.current;
                    ue && De(ue.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            le.push(
              (0, e.jsx)(
                z,
                {
                  ref: Q,
                  name: o,
                  trailer: a,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: Z,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const ve = (
            ee ? c?.all_ages_screenshots : c?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (ve?.forEach((ue, de) => {
              if ((M || de > 0) && oe.length < 3) {
                const me = (0, E.bu)(ue, "thumb"),
                  je = (0, E.bu)(ue, "600x338"),
                  Pe = oe.length;
                oe.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, S.A)({
                        [g().ThumbnailCtn]: !0,
                        [g().ThumbnialClickable]: !A,
                      }),
                      onMouseEnter: () => $(Pe),
                      children: A
                        ? (0, e.jsx)("img", { src: me, alt: o })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: g().ThumbnailButton,
                            onClick: () => {
                              const _e = [...(ve || [])];
                              if (_e.length > 0) {
                                for (let he = 0; he < de; ++he) {
                                  const Ce = _e.shift();
                                  Ce && _e.push(Ce);
                                }
                                J(_e.map((he) => (0, E.bu)(he, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: me, alt: o }),
                          }),
                    },
                    de + "_small_" + me,
                  ),
                ),
                  le.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: g().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: je, alt: o }),
                      },
                      de + "_big_" + me,
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
              D,
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
                  onMouseLeave: () => $(-1),
                  children: [
                    ce,
                    Me.map((ue, de) =>
                      (0, e.jsx)(
                        "div",
                        { className: g().ThumbnailCtn },
                        `app_${(0, C.ER)(j)}_${de}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function z(T) {
          const {
            ref: M,
            name: j,
            trailer: o,
            bControls: a,
            bPlayVideo: c,
            fnTogglePlayTrailer: p,
            startTime: h,
          } = T;
          if (
            ((0, v.useEffect)(() => {
              const O = M?.current;
              if (h != null && h > 0 && O) {
                const $ = () => {
                  O.currentTime = h || 0;
                };
                return (
                  O.addEventListener("loadedmetadata", $),
                  () => {
                    O.removeEventListener("loadedmetadata", $);
                  }
                );
              }
            }, [M, h]),
            !o)
          )
            return null;
          let A = (0, S.A)(g().VideoLargeContainer, c && g().videoPlaying);
          return (0, e.jsxs)("div", {
            className: A,
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
                  "aria-label": (0, F.we)("#Button_Close"),
                  children: (0, e.jsx)(G.sED, {}),
                }),
            ],
          });
        }
        function Y(T) {
          return T.bShowModal ? (0, e.jsx)(b, { ...T }) : null;
        }
        function b(T) {
          const { id: M, bShowModal: j, trailerBaseID: o, hideModal: a } = T,
            { data: c } = (0, x.J$)(M),
            p = (0, l.kB)(M),
            h = (0, v.useMemo)(() => {
              if (!(!p || p.length == 0)) {
                if (o) {
                  const Q = p.find((Z) => Z.trailer_base_id == o);
                  if (Q) return Q;
                }
                return p[0];
              }
            }, [p, o]),
            A = v.useId(),
            O = v.useId(),
            {
              rgDashTrailers: $,
              rgHlsTrailers: J,
              strCaptionManufest: D,
              strScreenshot: ee,
            } = (0, v.useMemo)(() => {
              if (!h)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: Q, rgHlsTrailers: Z } = (0, l.hg)(h);
              return {
                rgDashTrailers: Q,
                rgHlsTrailers: Z,
                strCaptionManufest: (0, l.Wv)(h),
                strScreenshot: (0, l.hl)(h),
              };
            }, [h]);
          return !h || !h.adaptive_trailers || $.length == 0
            ? null
            : (0, e.jsx)(k.EN, {
                active: j,
                children: (0, e.jsxs)(k.eV, {
                  "aria-labelledby": (0, m.q)(A, O),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: a,
                  children: [
                    (0, e.jsx)("div", {
                      className: g().VideoPopupContainers,
                      children: (0, e.jsx)(N.P, {
                        dashManifests: $,
                        hlsManifest: J[0] || "",
                        screenshot: ee,
                        altText: h.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: D,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: A,
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
        function w(T) {
          const { appid: M, trailerBaseID: j, bShowModal: o, hideModal: a } = T,
            c = (0, v.useMemo)(() => ({ appid: M }), [M]);
          return (0, e.jsx)(Y, {
            id: c,
            trailerBaseID: j,
            bShowModal: o,
            hideModal: a,
          });
        }
        function I(T) {
          const {
            trailer: M,
            fnTogglePlayTrailer: j,
            bPlayVideo: o,
            onMouseEnter: a,
            onMouseLeave: c,
          } = T;
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
                "aria-label": (0, F.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(G.jGG, {}),
              }),
            ],
          });
        }
      },
      97743: (W, K, s) => {
        "use strict";
        s.d(K, {
          $I: () => b,
          AP: () => j,
          Nt: () => g,
          XW: () => I,
          dr: () => M,
          fL: () => Y,
          rK: () => V,
          rT: () => y,
        });
        var e = s(80902),
          E = s(90626),
          l = s(99412),
          x = s(72604),
          C = s(35038),
          d = s(86174),
          v = s(3166),
          m = s(84192),
          U = s(68094),
          G = s(5827),
          S = s(71742),
          F = s(14947),
          _ = s(18210),
          k = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          N = (o, a, c, p) => {
            for (
              var h = p > 1 ? void 0 : p ? H(a, c) : a, A = o.length - 1, O;
              A >= 0;
              A--
            )
              (O = o[A]) && (h = (p ? O(a, c, h) : O(h)) || h);
            return p && h && k(a, c, h), h;
          };
        const V = 4;
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
            const p = C.w.Init(d.LK);
            p.Body().set_country_code(v.TS.COUNTRY),
              p.Body().set_elanguage((0, l.sfN)(v.TS.LANGUAGE)),
              p.Body().set_client_package_version(a.nClientPackageVersion),
              p.Body().set_operating_system(a.eOSType),
              c && p.Body().set_include_seen_messages(!0),
              (0, m.rV)(p),
              (0, m.Bn)(p, g.sm_DefaultDataRequest);
            const h = await d.EO.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              p,
            );
            if (h.GetEResult() != x.R)
              throw `Error loading marketing messages: ${h.GetEResult()}`;
            if (c)
              for (const A of h.Body().messages())
                A.already_seen() &&
                  this.m_setMessagesSeen.add(A.message().gid());
            return h.Body().messages();
          }
          async GetSingleMessage(a, c) {
            const p = C.w.Init(d.e6);
            p.Body().set_gid(a),
              (0, m.rV)(p),
              (0, m.Bn)(p, g.sm_DefaultDataRequest);
            let h;
            if (
              (c || v.iA.logged_in
                ? (h = await d.EO.GetDisplayMarketingMessageForUser(
                    this.m_SteamInterface.GetServiceTransport(),
                    p,
                  ))
                : (h = await d.EO.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    p,
                  )),
              h.GetEResult() != x.R)
            )
              throw `Error loading marketing messages: ${h.GetEResult()}`;
            return h.Body().message();
          }
          MarkMessageSeen(a, c, p) {
            if (this.m_setMessagesSeen.has(a)) return;
            const h = C.w.Init(d.S4);
            h.Body().set_gid(a),
              h.Body().set_display_index(c),
              h.Body().set_template_type(p),
              d.EO.MarkMessageSeen(
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
        class y {
          m_message;
          m_templateVars = void 0;
          m_associatedItemKey;
          m_rgRecommendedAppIDs;
          m_nSaleItemCount;
          constructor(a) {
            (0, F.Gn)(this),
              (this.m_message = a),
              (this.m_templateVars = B(a.template_vars_json()));
            const c = a.associated_item(!1);
            (this.m_associatedItemKey = c
              ? (0, U.Jz)({ item_type: c.item_type(), id: c.id() })
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
              case d.D4.QJ:
                return (0, _.we)("#spotlight_weekend_deal");
              case d.D4.xl:
                return (0, _.we)("#spotlight_midweek_madness");
              case d.D4.Sk:
                return (0, _.we)("#spotlight_daily_deal");
              case d.D4.OD:
                return (0, _.we)("#msg_available_everywhere");
              case d.D4.RV:
                return (0, _.we)("#msg_new_game");
              case d.D4.IT:
                return (0, _.we)("#msg_prepurchase_now");
              case d.D4.T9:
                return (0, _.we)("#msg_play_now");
              case d.D4.QY:
                return (0, _.we)("#label_pre_load_now");
              case d.D4.W8:
                return (0, _.we)("#label_just_updated");
              case d.D4.eV:
                return (0, _.we)("#label_new_dlc_available");
              case d.D4.SK:
                return (0, _.we)("#label_free_weekend");
              case d.D4.eH:
                return (0, _.we)("#msg_on_sale_now");
              case d.D4.k6:
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
              return d.rj.TO;
            switch (this.GetTemplateVars().custom_display) {
              case "dlc_override":
                return d.rj.k2;
              case "mm_auto_render":
                return d.rj.H;
              case "partner_event":
                return d.rj.GS;
              case "featured_video":
                return d.rj.CT;
            }
            return this.BShouldShowSaleItems() ? d.rj.np : d.rj.BA;
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
              p = this.m_rgRecommendedAppIDs.length >= V;
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
        N([F.sH], y.prototype, "m_templateVars", 2);
        const z = "^(replay)([0-9]{4})";
        function Y(o) {
          return o.match(z)?.[2];
        }
        function b(o) {
          if (o) {
            const a = o.match(z);
            return a?.[2] && !isNaN(Number(a?.[2]));
          }
          return !1;
        }
        function w(o) {
          return o == "mm_auto_render";
        }
        function I(o, a, c) {
          const { bIncludeSeenMessages: p, ...h } = a,
            {
              data: A,
              isLoading: O,
              isError: $,
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
            J = E.useMemo(() => A?.map((Q) => new y(Q.message())), [A]),
            D = (0, G.cv)(),
            ee = E.useRef(new Set());
          return (
            D &&
              J?.forEach((Q) => {
                if (ee.current.has(Q.id)) return;
                const Z = Q.GetAssociatedItemProto();
                Z && (D(Z, g.sm_DefaultDataRequest), ee.current.add(Q.id));
              }),
            { rgMessages: O ? null : J, isError: $ }
          );
        }
        function T(o, a, c) {
          const p = c?.enabled !== !1,
            { data: h } = useQuery({
              queryKey: ["MarketingMessages", "ClientParameters"],
              queryFn: async () => ({
                eOSType: await SteamClient.System.GetOSType(),
                nClientPackageVersion: GetClientPackageVersion(),
              }),
              enabled: p,
            });
          return I(o, { ...h, ...a }, { ...c, enabled: !!h && p });
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
            A = E.useMemo(() => {
              if (p) {
                const J = new y(p);
                if (c) {
                  const D = (0, v.Tc)(
                    "marketingmessage_preview_config",
                    "application_config",
                  );
                  D?.dlc_appid_overrides?.length > 0 &&
                    J.SetDLCAppIDOverride(D.dlc_appid_overrides),
                    D?.recommended_appid_overrides?.length > 0 &&
                      J.SetRecommendedAppIDsOverride(
                        D.recommended_appid_overrides,
                      );
                }
                return J;
              }
            }, [p, c]),
            O = (0, G.cv)(),
            $ = E.useRef(new Set());
          if (O && A && !$.current.has(A.id)) {
            const J = A.GetAssociatedItemProto();
            J && (O(J, g.sm_DefaultDataRequest), $.current.add(A.id));
          }
          return { message: A, isError: h };
        }
        function j(o, a, c, p, h) {
          const A = C.w.Init(d.cX);
          A.Body().set_gid(a),
            A.Body().set_display_index(c),
            A.Body().set_template_type(p),
            A.Body().set_click_location(h),
            d.EO.MarkMessageClicked(o, A);
        }
      },
      32738: (W, K, s) => {
        "use strict";
        s.d(K, { NZ: () => v, g1: () => m, ho: () => d });
        var e = s(7850),
          E = s(90626),
          l = s(44930),
          x = s(3166);
        const C = E.createContext({ setLegalText: void 0 });
        function d() {
          return !!E.useContext(C).setLegalText;
        }
        function v() {
          return E.useContext(C).setLegalText || function (S) {};
        }
        function m(G) {
          const [S, F] = E.useState(),
            _ = (0, l.Dp)("BrowserView.RegisterForMessageFromParent"),
            k = (0, x.Qn)(),
            H = E.useMemo(
              () => ({ setLegalText: _ && !k ? F : void 0 }),
              [_, F, k],
            );
          return (0, e.jsxs)(C.Provider, {
            value: H,
            children: [_ && (0, e.jsx)(U, { strLegalText: S }), G.children],
          });
        }
        function U(G) {
          const { strLegalText: S } = G,
            F = E.useRef(void 0);
          return (
            E.useEffect(() => {
              (F.current = S),
                SteamClient.BrowserView.PostMessageToParent(
                  "MarketingMessageLegal",
                  S || "",
                );
            }, [S]),
            E.useEffect(
              () =>
                SteamClient.BrowserView.RegisterForMessageFromParent((_) => {
                  _ == "MarketingMessageDialogReady" &&
                    SteamClient.BrowserView.PostMessageToParent(
                      "MarketingMessageLegal",
                      F.current,
                    );
                }).unregister,
              [],
            ),
            null
          );
        }
      },
      27638: (W, K, s) => {
        "use strict";
        s.d(K, { Y: () => l });
        var e = s(90626);
        function E(x) {
          const { title: C, bodyClassName: d, children: v } = x;
          return (
            React.useEffect(() => {
              const m = document.title;
              return (
                (document.title = C),
                () => {
                  document.title = m;
                }
              );
            }, [C]),
            l(d),
            v
          );
        }
        function l(x) {
          e.useEffect(() => {
            if (!x) return;
            const C = [];
            for (const d of x.split(/ /))
              document.body.classList.contains(d) || C.push(d);
            return (
              document.body.classList.add(...C),
              () => document.body.classList.remove(...C)
            );
          }, [x]);
        }
      },
      8736: (W, K, s) => {
        "use strict";
        s.d(K, { l: () => E });
        var e = s(18210);
        function E(l, x = "#Played_", C = !1) {
          if (l >= 120) {
            let d = l / 60;
            d = Math.round(d * 10) / 10;
            let v = e.pf.GetPreferredLocales(),
              m = d.toLocaleString(v, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              });
            return (0, e.we)(x + "Hours", m);
          } else
            return C && l == 1
              ? (0, e.we)(x + "Minute", l)
              : (0, e.we)(x + "Minutes", l);
        }
      },
      9519: (W, K, s) => {
        "use strict";
        s.d(K, { q: () => x });
        var e = s(90626),
          E = s(30096);
        const l = 2e4;
        function x(C) {
          const d = (0, e.useRef)(!1),
            v = (0, e.useRef)(null),
            m = (0, e.useCallback)(() => {
              v.current = setTimeout(() => {
                C.current &&
                  !C.current.paused &&
                  (C.current.pause(), (d.current = !0));
              }, l);
            }, [C]),
            U = (0, e.useCallback)(() => {
              v.current && (clearTimeout(v.current), (v.current = null)),
                C.current && d.current && (C.current.play(), (d.current = !1));
            }, [C]);
          (0, E.l6)(window, "blur", m), (0, E.l6)(window, "focus", U);
        }
      },
      53617: (W, K, s) => {
        "use strict";
        s.d(K, { FS: () => b, WN: () => Y, lS: () => B, xf: () => y });
        var e = s(80902),
          E = s(35038),
          l = s(68312),
          x = s(67529),
          C = s(27386),
          d = s(98609),
          v = s(3166),
          m = s(82734),
          U = s(90626),
          G = s(68094),
          S = s(40358),
          F = s(47875),
          _ = s(72865),
          k = s(10349),
          H = s(97743),
          N = s(2546),
          V = s(86174),
          g = s(70537);
        function B(w) {
          const I = (0, l.KV)();
          let T = (0, e.I)({
            queryKey: ["useGamePlaytimeInfo", w],
            queryFn: async () => R(w, I),
            enabled: !!(w && w != x.sc),
          });
          return T.isSuccess ? T.data : null;
        }
        async function R(w, I) {
          const T = E.w.Init(C.G9h);
          T.Body().set_steamid(d.iA.steamid),
            T.Body().set_appids_filter([w]),
            T.Body().set_include_played_free_games(!0),
            T.Body().set_language(d.TS.LANGUAGE);
          const M = await C.xtC.GetOwnedGames(I, T);
          return M.Body().games().length > 0
            ? M.Body().games()[0].toObject()
            : {};
        }
        function y(w) {
          return (0, v.Y2)() && w?.startsWith("https://store.steampowered.com/")
            ? w.replace("https://store.steampowered.com/", d.TS.STORE_BASE_URL)
            : w;
        }
        function z(w) {
          let I = (0, l.KV)(),
            T = (0, N.J)(),
            M = (0, g.Ng)();
          return (
            (M = M !== null ? M + 1 : 0),
            (0, U.useCallback)(() => {
              (0, H.AP)(I, T.id, M, T.GetTemplateTypeForReporting(), w);
            }, [I, T, M, w])
          );
        }
        function Y(w, I, T = !1) {
          let M = z(I),
            j;
          I == V.cU.wY
            ? (j = "image")
            : I == V.cU.xe
              ? (j = "button")
              : I == V.cU.FQ
                ? (j = "dlc_capsule")
                : I == V.cU.vx
                  ? (j = "header_area")
                  : I == V.cU.C1
                    ? (j = "game_capsule")
                    : I == V.cU.vm && (j = "partner_event");
          let o = (0, _.aL)(y(w), j);
          return (
            T && (o = w),
            o.startsWith("steam://") || (o = `steam://openurl/${o}`),
            (0, U.useCallback)(
              (c) => {
                M();
                let p = (0, m.uX)(c);
                p.location.href = o;
              },
              [o, M],
            )
          );
        }
        function b(w, I, T) {
          const M = (0, G.Jz)({ item_type: (0, k.SW)(I), id: w }),
            { data: j } = (0, S.J$)(M);
          return Y((0, F._)(j) ?? d.TS.STORE_BASE_URL, T);
        }
      },
      2546: (W, K, s) => {
        "use strict";
        s.d(K, { Q: () => xs, J: () => se });
        var e = s(7850),
          E = s(99412),
          l = s(90626),
          x = s(97743),
          C = s(32738),
          d = s(3166),
          v = s(32858),
          m = s(72865),
          U = s(53617),
          G = s(19298),
          S = s(48421),
          F = s(24179),
          _ = s(98609);
        function k(i, t, n, r) {
          if (!r || !r.path) return null;
          const u = n ? "?t=" + n : "";
          return r.path.startsWith("images")
            ? `${_.TS.MEDIA_CDN_URL}steam/marketing/${i}/${r.path}${u}`
            : `${_.TS.BASE_URL_SHARED_CDN}store_item_assets/mm/${i}/${t}/${r.path}${u}`;
        }
        var H = s(30096),
          N = s(9519);
        function V(i) {
          const { path: t, message: n, eLanguage: r, ...u } = i,
            f = n.GetTemplateVars()?.last_asset_mtime,
            P = k(n.id, r, f, { type: "file", path: t }),
            L = n.GetLocalizedAltText(r);
          return (0, e.jsx)("img", { alt: L, ...u, src: P });
        }
        function g(i) {
          const { message: t, mp4Path: n, webmPath: r, language: u, ...f } = i,
            P = t.GetTemplateVars()?.last_asset_mtime,
            L = k(t.id, u, P, { type: "file", path: r }),
            X = k(t.id, u, P, { type: "file", path: n }),
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
                (0, e.jsx)("source", { src: L, type: "video/webm" }),
                (0, e.jsx)("source", { src: X, type: "video/mp4" }),
              ],
            })
          );
        }
        var B = s(51079),
          R = s(36707),
          y = s(18210),
          z = s(720),
          Y = s.n(z),
          b = s(24660),
          w = s(71742),
          I = s(86174),
          T = s(11996),
          M = s(54528),
          j = s(65946),
          o = s(40358),
          a = s(21721),
          c = s(47875),
          p = s(72838),
          h = s(48357),
          A = s(61431),
          O = s(96117),
          $ = s(25792),
          J = s(8736),
          D = s(22329);
        function ee(i) {
          return (0, e.jsx)("div", {
            className: D.All,
            children: (0, e.jsx)("div", {
              className: D.MessageContent,
              children: i.children,
            }),
          });
        }
        function Q(i) {
          return (0, e.jsx)("div", {
            className: D.MessageBody,
            children: i.children,
          });
        }
        function Z(i) {
          const { isBackgroundBlur: t, bOverrideUseBackgroundImage: n } = i,
            r = se(),
            u = (0, U.WN)(r.GetTemplateVars().linkurl, I.cU.wY),
            [f, P] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
          return (0, e.jsx)(G.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: (0, R.A)(D.MessageImage, t && D.IsBlur),
            onActivate: u,
            children: f && (0, e.jsx)(V, { message: r, path: f, eLanguage: P }),
          });
        }
        function De(i) {
          const { fnOnClick: t } = i,
            n = se(),
            r = (0, E.sfN)(d.TS.LANGUAGE),
            [u, f] = n.GetTemplateMP4WithFallback(r),
            [P, L] = n.GetTemplateWebMWithFallback(r);
          return (
            (0, w.wT)(
              f == L,
              `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${f} webm ${L}`,
            ),
            (0, e.jsx)("div", {
              className: D.VideoImageContainer,
              children: (0, e.jsx)(G.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, R.A)(D.MessageImage),
                onActivate: t,
                children: (0, e.jsx)(g, {
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  loop: !0,
                  mp4Path: u,
                  message: n,
                  webmPath: P,
                  language: d.TS.IN_CLIENT ? L : f,
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
            className: (0, R.A)(D.MessageImage, D.GameImage, D.IsBlur),
            children: (0, e.jsx)("img", { src: i.strImageURL }),
          });
        }
        function le(i) {
          const { strType: t, strTitle: n, bSmallTitle: r } = i;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: D.EventType, children: t }),
              (0, e.jsx)("div", {
                className: (0, R.A)(D.EventTitle, r && D.SmallTitle),
                children: n,
              }),
            ],
          });
        }
        function ve(i) {
          const { id: t, bPreview: n, bPreferAssetWithoutOverride: r } = i,
            { data: u } = (0, o.J$)(t),
            f = u?.appid,
            P = (0, d.Qn)(),
            { bIsOwned: L } = (0, F.ZJ)(t),
            X = (0, M.bB)(f),
            q = (0, T.Fh)(f),
            ae = (0, U.lS)(f ?? 0),
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
          L &&
            f &&
            (P
              ? (pe = `steam://open/games/details/${f}`)
              : (pe = `steam://nav/games/details/${f}`));
          const xe = (0, U.WN)(pe, I.cU.vx, L);
          return (0, e.jsxs)("div", {
            className: D.BaseCtn,
            children: [
              (0, e.jsx)(b.Ii, {
                className: D.CapsuleCtn,
                onClick: xe,
                children: (0, e.jsx)(p.G, {
                  id: t,
                  bPreferLibrary: !0,
                  bPreferAssetWithoutOverride: r,
                }),
              }),
              (0, e.jsxs)("div", {
                className: D.DescCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: D.GameNameCtn,
                    children: (0, e.jsx)(b.Ii, {
                      className: D.GameName,
                      onClick: xe,
                      children: u?.name,
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: D.LibraryDetails,
                    children: [
                      (0, e.jsx)(b.Ii, {
                        onClick: xe,
                        className: (0, R.A)(D.Button, D.ViewInLibrary),
                        children: (0, y.we)(
                          L
                            ? "#EventDisplay_ViewInLibrary"
                            : "#EventDisplay_ViewStorePage",
                        ),
                      }),
                      !L &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsxs)("div", {
                            className: D.PlayDetailCtn,
                            children: [
                              X &&
                                (0, e.jsx)("span", {
                                  children: (0, y.we)(
                                    "#EventDisplay_OnWishlist",
                                  ),
                                }),
                              !X &&
                                q &&
                                (0, e.jsx)("span", {
                                  children: (0, y.we)("#EventDisplay_Follow"),
                                }),
                            ],
                          }),
                        }),
                      L &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            !!ne?.rtime_last_played &&
                              (0, e.jsxs)("div", {
                                className: D.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, y.we)(
                                      "#MarketingMessages_DLC_lastplayed",
                                    ),
                                  }),
                                  (0, y._l)(ne.rtime_last_played),
                                ],
                              }),
                            !!ne?.playtime_forever &&
                              (0, e.jsxs)("div", {
                                className: D.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, y.we)(
                                      "#MarketingMessages_DLC_hours",
                                    ),
                                  }),
                                  (0, J.l)(ne.playtime_forever),
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
            n = (0, U.WN)(t.GetTemplateVars().linkurl, I.cU.xe);
          return (0, e.jsx)(Me, {
            bHidePrice: i.bHidePrice,
            fnOnClickButton: n,
          });
        }
        function Me(i) {
          const { bHidePrice: t, fnOnClickButton: n } = i,
            r = se(),
            u = !0,
            [f, P] = (0, j.q3)(() => [
              r.GetTemplateVars().button_text_custom ||
                r.GetTemplateVars().button_text,
              !!r.GetTemplateVars().hide_price,
            ]),
            L = !!(t || P);
          return (0, e.jsxs)("div", {
            className: (0, R.A)(D.MessageFooter, !u && D.NoButton),
            children: [
              (0, e.jsxs)("div", {
                className: D.ButtonAndPriceCtn,
                children: [
                  u &&
                    (0, e.jsx)(G.Z, {
                      focusable: !0,
                      noFocusRing: !0,
                      className: D.Btn,
                      onActivate: n,
                      children: f,
                    }),
                  !L && (0, e.jsx)($.tH, { children: (0, e.jsx)(ue, {}) }),
                ],
              }),
              (0, e.jsx)(de, {}),
            ],
          });
        }
        function ue() {
          const t = se().associated_item_key,
            { data: n } = (0, o.Q_)(t);
          return !n || !n.formatted_final_price
            ? (0, e.jsx)("div", { className: D.NoPrice })
            : (0, e.jsx)("div", {
                className: D.MessagePriceCtn,
                children: (0, e.jsx)(h.NF, { id: t }),
              });
        }
        function de(i) {
          const t = se();
          return (0, C.ho)()
            ? null
            : (0, e.jsx)("div", {
                className: D.Legal,
                dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
              });
        }
        function me(i) {
          const { id: t, type: n, eClickLocation: r } = i,
            u = (0, U.FS)(t, n, r);
          return (0, e.jsx)(A.p, {
            id: t,
            type: n,
            fnOnClickOverride: u,
            bIsMarketingMessage: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function je(i) {
          const { capsule: t, imageType: n, eClickLocation: r } = i,
            u = (0, U.FS)(t.id, t.type, r),
            f = (P) => {
              P.preventDefault(), u(P);
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
        var Pe = s(94162);
        function _e(i) {
          const t = se();
          let n = t.GetTemplateVars().update_event_clan_accountid,
            r = t.GetTemplateVars().update_event_gid;
          const {
            eventModel: u,
            bLoading: f,
            sErrorMessage: P,
          } = (0, S.B9)(n, r, i);
          return { message: t, eventModel: u };
        }
        function he(i) {
          const { bPreview: t, bUseAnimated: n } = i,
            { message: r, eventModel: u } = _e(t),
            { data: f } = (0, o.J$)(r.associated_item_key),
            P = (0, c._)(f) ?? "",
            L = Oe(u, P, I.cU.wY),
            X = Oe(u, P, I.cU.xe);
          return (0, e.jsx)(B.Ay, {
            submethod: "partner_event",
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(ie, { id: r.associated_item_key }),
                (0, e.jsxs)(Q, {
                  children: [
                    (0, e.jsx)(ve, {
                      id: r.associated_item_key,
                      bPreview: t,
                      bPreferAssetWithoutOverride: !1,
                    }),
                    (0, e.jsx)(Ce, {
                      message: r,
                      eventModel: u,
                      fnOnClickButton: L,
                      bUseAnimated: n,
                    }),
                  ],
                }),
                (0, e.jsx)(Me, { bHidePrice: !0, fnOnClickButton: X }),
              ],
            }),
          });
        }
        function Ce(i) {
          const {
              message: t,
              fnOnClickButton: n,
              eventModel: r,
              bUseAnimated: u,
            } = i,
            [f, P] = t.GetTemplateImage(),
            L = (0, E.sfN)(_.TS.LANGUAGE);
          return (0, e.jsxs)("div", {
            className: Y().UpdateEventCtn,
            children: [
              (0, e.jsx)(le, {
                strType: (0, y.we)("#MarketingMessages_MajorUpdate"),
                strTitle: r?.GetNameWithFallback(L),
              }),
              (0, e.jsxs)(G.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, R.A)(Y().EventImage),
                onActivate: n,
                children: [
                  f &&
                    !u &&
                    (0, e.jsx)(V, { message: t, path: f, eLanguage: P }),
                  u && (0, e.jsx)(De, { fnOnClick: n }),
                ],
              }),
            ],
          });
        }
        function Oe(i, t, n) {
          let r = (0, F.S6)(i?.appid),
            u = (0, m.aL)((0, U.xf)(t), "partner_event");
          if (i?.BIsVisibleEvent() && r && i.BIsValidForRealm(_.TS.EREALM)) {
            const L = (0, Pe.MP)();
            _.TS.IN_CLIENT && (L > 1726604483 || L == 0)
              ? (t = `steam://open/library/event/${i.appid}|${i.GID}`)
              : ((t = `${_.TS.STORE_BASE_URL}news/app/${i.appid}?emclan=${i.clanSteamID.ConvertTo64BitString()}&emgid=${i.GID}`),
                _.TS.IN_CLIENT && (t = `steam://openurl/${t}`));
          } else
            (t = u),
              i && (t += `${u.includes("?") ? "&" : "?"}emgid=${i.GID}`),
              _.TS.IN_CLIENT && (t = `steam://openurl/${t}`);
          return (0, U.WN)(t, n, !0);
        }
        var Ne = s(41735),
          We = s.n(Ne),
          Ve = s(80902),
          ke = s(72604),
          Ke = s(67529);
        function Fe(i) {
          const {
            isLoading: t,
            isError: n,
            data: r,
          } = (0, Ve.I)({
            queryKey: ["useDLCHubCount", i],
            queryFn: async () => we(i),
            enabled: !!(i && i != Ke.sc),
          });
          return t || n ? null : r;
        }
        async function we(i) {
          const t = `${_.TS.STORE_BASE_URL}dlc/${i}/ajaxgetdlccount`,
            n = { origin: self.origin },
            r = await We().get(t, { params: n, withCredentials: !1 });
          if (r.status !== 200 || r.data.success !== ke.R)
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
            u = Fe(n.associated_item_appid);
          return (
            (0, l.useEffect)(() => {
              if (n) {
                const f = u
                  ? (0, y.Yp)("#MarketingMessages_See_Count_Items", u)
                  : (0, y.we)("#MarketingMessages_See_All_Items");
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
                  (0, e.jsxs)(Q, {
                    children: [
                      (0, e.jsx)(ve, {
                        id: n.associated_item_key,
                        bPreview: t,
                        bPreferAssetWithoutOverride: !1,
                      }),
                      (0, e.jsx)(ze, {
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
        function ye(i) {
          const { messageType: t, itemCount: n } = i,
            r = x.rT.GetTypeAsLocalizedString(t);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !!r && (0, e.jsx)("div", { className: te.Type, children: r }),
              n == 1
                ? (0, e.jsx)(Ie, {
                    strDesc: (0, y.we)("#MarketingMessages_DLC_desc_singular"),
                  })
                : (0, e.jsx)(Ie, {
                    strDesc: (0, y.we)("#MarketingMessages_DLC_desc"),
                  }),
            ],
          });
        }
        function ze(i) {
          const { rgDLCSaleCapsules: t, messageType: n } = i;
          return t.length >= 4
            ? (0, e.jsx)(Be, {
                rgSaleCapsules: t,
                eClickLocation: I.cU.FQ,
                children: (0, e.jsx)(ye, { messageType: n }),
              })
            : t.length >= 3
              ? (0, e.jsxs)("div", {
                  className: te.DlcCtn,
                  children: [
                    (0, e.jsx)(ye, { messageType: n }),
                    (0, e.jsx)("div", {
                      className: te.OneItemRow,
                      children: (0, e.jsx)(me, {
                        id: t[0].id,
                        type: t[0].type,
                        eClickLocation: I.cU.FQ,
                      }),
                    }),
                    (0, e.jsx)(Le, {
                      first: t[1],
                      second: t[2],
                      eClickLocation: I.cU.FQ,
                    }),
                  ],
                })
              : t.length >= 2
                ? (0, e.jsxs)("div", {
                    className: te.DlcCtn,
                    children: [
                      (0, e.jsx)(ye, { messageType: n }),
                      (0, e.jsx)("div", {
                        className: te.OneItemRow,
                        children: (0, e.jsx)(me, {
                          id: t[0].id,
                          type: t[0].type,
                          eClickLocation: I.cU.FQ,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: te.OneItemRow,
                        children: (0, e.jsx)(me, {
                          id: t[1].id,
                          type: t[1].type,
                          eClickLocation: I.cU.FQ,
                        }),
                      }),
                    ],
                  })
                : t.length >= 1
                  ? (0, e.jsxs)("div", {
                      className: te.DlcCtn,
                      children: [
                        (0, e.jsx)(ye, { messageType: n, itemCount: t.length }),
                        (0, e.jsx)("div", {
                          className: te.OneBigItem,
                          children: (0, e.jsx)(je, {
                            capsule: t[0],
                            imageType: "main",
                            eClickLocation: I.cU.FQ,
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
              (0, e.jsx)(Le, { first: t[0], second: t[1], eClickLocation: n }),
              (0, e.jsx)(Le, { first: t[2], second: t[3], eClickLocation: n }),
            ],
          });
        }
        function Ie(i) {
          return (0, e.jsx)("div", {
            className: te.DealDesc,
            children: i.strDesc,
          });
        }
        function Le(i) {
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
        var Qe = s(36118),
          Se = s(53113),
          Ae = s(31343);
        function $e(i) {
          const t = se(),
            [n, r] = (0, l.useState)(() => t.GetFeaturedVideoAutoPlay()),
            u = (0, l.useRef)(null);
          (0, N.q)(u);
          const f = (0, U.WN)(t.GetTemplateVars().linkurl, I.cU.wY),
            P = (0, d.Qn)();
          return (0, e.jsx)(G.Z, {
            focusable: !0,
            noFocusRing: !0,
            onActivate: (L) =>
              !P && t.GetFeaturedVideoAutoPlay() ? f(L) : r(!0),
            className: Ae.PosterCtn,
            children: n
              ? (0, e.jsxs)("video", {
                  controls: !t.GetFeaturedVideoLoop(),
                  ref: u,
                  muted: !0,
                  autoPlay: !0,
                  className: Ae.Video,
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
                    (0, e.jsx)(Je, { message: t }),
                  ],
                })
              : (0, e.jsx)(Ye, { message: t }),
          });
        }
        function Ye(i) {
          const { message: t } = i,
            n = t.GetTemplateVars()?.last_asset_mtime,
            [r, u] = t.GetPosterImage(),
            f = k(t.id, u, n, { type: "file", path: r });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("img", { src: f, className: Ae.Poster }),
              (0, e.jsx)(Qe.IOc, {}),
            ],
          });
        }
        function Je(i) {
          const { message: t } = i,
            n = (0, l.useMemo)(() => {
              const r = t.GetSubtitleObj(),
                u = t.GetTemplateVars()?.last_asset_mtime,
                f = new Array();
              for (let P = E.Bhc; P < E.bP9; ++P) {
                if (!y.A0.IsELanguageValidInRealm(P, _.TS.EREALM)) continue;
                const L = (0, E.LgB)(P);
                if (r && r[L]) {
                  const X = r[L].path,
                    q = k(t.id, P, u, { type: "file", path: X });
                  f.push(
                    (0, e.jsx)(
                      "track",
                      {
                        src: q,
                        kind: "subtitles",
                        srcLang: (0, E.wwZ)(P),
                        default: _.TS.LANGUAGE == L,
                        label: (0, y.we)(
                          "#language_selection_" + (0, E.LgB)(P),
                        ),
                      },
                      t.id + " " + P,
                    ),
                  );
                }
              }
              return f;
            }, [t]);
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Ze(i) {
          const { bLowBandwidthMode: t } = i,
            n = se(),
            r = !t && n.GetTemplateVars().custom_display === "featured_video";
          return (0, e.jsx)(B.Ay, {
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(Z, {
                  isBackgroundBlur: !0,
                  bOverrideUseBackgroundImage: r,
                }),
                (0, e.jsxs)(Q, {
                  children: [
                    (0, e.jsx)(Z, { bOverrideUseBackgroundImage: r }),
                    !!r && (0, e.jsx)($e, {}),
                  ],
                }),
                (0, e.jsx)(ce, {}),
              ],
            }),
          });
        }
        function Xe(i) {
          const t = se(),
            n = (0, U.WN)(t.GetTemplateVars().linkurl, I.cU.vm);
          return (0, e.jsx)(B.Ay, {
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(Z, { isBackgroundBlur: !0 }),
                (0, e.jsx)(Q, { children: (0, e.jsx)(De, { fnOnClick: n }) }),
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
          Ee = s.n(rs),
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
                className: (0, R.A)(Ee().SaleTagBlockCtn, "SaleTagBlockCtn"),
                children:
                  r?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, R.A)(Ee().TagBox, Ee().Categories),
                        children: r.map((u) =>
                          (0, e.jsx)(cs, { categoryID: u }, "cat_" + u),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: (0, y.we)("#Broadcast_None"),
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
                className: Ee().Category,
                children: (0, e.jsx)(is.he, {
                  toolTipContent: n.name,
                  children: (0, e.jsx)("div", {
                    className: Ee().CategoryIcon,
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
            { data: P } = (0, o.J$)(t),
            L = (0, as.kB)(t);
          return !f || !P
            ? (0, e.jsx)("div", {
                className: (0, R.A)(re().HilightGrid, re().MediaContainerMM),
                children: (0, e.jsx)(ns.t, { size: "medium" }),
              })
            : (0, e.jsx)("div", {
                className: (0, R.A)(re().HilightGrid, re().MediaContainerMM),
                children: (0, e.jsx)(ss._t, {
                  id: t,
                  elFeaturedInCenter: (0, e.jsx)(ds, {
                    id: t,
                    bUseAssetWithoutOverride: !!u,
                    fnOnClickButton: n,
                  }),
                  trailer: L && L.length > 0 ? L[0] : void 0,
                  storeItemScreenshots: f,
                  bUseTrailerAsFirstThumb: !r,
                  bNoScreenShotModals: !0,
                  name: P.name || "",
                }),
              });
        }
        function ds(i) {
          const { id: t, fnOnClickButton: n, bUseAssetWithoutOverride: r } = i,
            [, u] = (0, qe.OP)(),
            { data: f } = (0, o.lv)(t, r),
            { data: P } = (0, o.J$)(t),
            { data: L } = (0, o.wl)(t),
            { data: X } = (0, o.xz)(t);
          if (!f || !L || !P) return null;
          const q = (0, a.b0)(f, "main_capsule");
          return (0, e.jsxs)(G.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: re().MainCapsuleWithHover,
            ...u,
            onActivate: n,
            children: [
              (0, e.jsx)("img", {
                className: re().MainCapsule,
                src: q,
                alt: P.name || "",
              }),
              (0, e.jsxs)("div", {
                className: re().AppDetails,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, R.A)(re().GameName),
                    children: P.name || "",
                  }),
                  (0, e.jsxs)("div", {
                    className: re().ShortDesc,
                    children: [L.short_description, " "],
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
        var ms = s(6698),
          gs = s(92264),
          ge = s(92609),
          be = s(179);
        function _s(i) {
          const { bPreview: t, bLowBandwidthMode: n } = i,
            r = se(),
            u = (0, U.WN)(r.GetTemplateVars().linkurl, I.cU.C1),
            f = r.associated_item_key;
          return (0, e.jsx)(B.Ay, {
            submethod: "mm-auto-render",
            children: (0, e.jsxs)(ee, {
              children: [
                (0, e.jsx)(ie, { id: f }),
                (0, e.jsx)(Q, {
                  children: (0, e.jsxs)("div", {
                    className: ge.AutoRenderContents,
                    children: [
                      (0, e.jsxs)("div", {
                        className: ge.TitleContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: ge.TypeTitle,
                            children: x.rT.GetTypeAsLocalizedString(
                              r.GetType(),
                            ),
                          }),
                          (0, e.jsx)(hs, { message: r, id: f }),
                        ],
                      }),
                      (0, e.jsx)(ms.oj, {
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
            [f] = (0, be.QD)("timezone"),
            [P] = (0, be.QD)("locale");
          if (t.GetType() == I.D4.SK) {
            if (u?.text)
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: u.text,
              });
            if (u?.end_time) {
              P && y.pf.SetPreferredLocales([P]);
              const q = f || Intl.DateTimeFormat().resolvedOptions().timeZone,
                ae = u.end_time,
                ne = Re.unix(ae).tz(q),
                pe = ne.format("z"),
                xe = pe.match(/^-?\d/)
                  ? `UTC${Re.unix(ae).tz(q).format("Z").replace(":00", "")}`
                  : pe,
                Ge = (0, gs.P0)(ne.unix(), !1, xe, f);
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, y.we)("#msg_free_play_until", Ge),
              });
            } else
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, y.we)("#msg_free_play_weekend"),
              });
          }
          const X = t.GetTemplateVars()?.autorender_subtitle_token;
          return X
            ? (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, y.we)(X),
              })
            : null;
        }
        var fs = s(24642),
          ps = s(68266),
          vs = s(36174),
          Te = s(23871);
        const Ms = [20, 50, 100, 200, 500, 1e3, 2e3, 5e3];
        function js() {
          const i = se(),
            { sale_clan_account: t, sale_clan_event_gid: n } =
              i.GetTemplateVars(),
            { eventModel: r, bLoading: u } = (0, S.B9)(
              t ? Number(t) : void 0,
              n,
            ),
            f = (0, ps.m0)(r, "capsule", (0, E.sfN)(_.TS.LANGUAGE)),
            P = (0, l.useMemo)(
              () =>
                i
                  .GetRecommendedAppIDs()
                  .slice(0, x.rK)
                  .map((L) => ({ id: L, type: "game" })),
              [i],
            );
          return (
            (0, l.useEffect)(() => {
              const L = Es(i.GetSaleItemCount());
              L &&
                i.OverrideCustomText(
                  (0, y.we)(
                    "#MarketingMessages_See_AtLeast_Items",
                    (0, fs.D)(L),
                  ),
                );
            }, [i]),
            (0, e.jsx)(B.Ay, {
              submethod: "sale_items",
              children: (0, e.jsxs)(ee, {
                children: [
                  f
                    ? (0, e.jsx)(oe, { strImageURL: f })
                    : (0, e.jsx)(Z, { isBackgroundBlur: !0 }),
                  (0, e.jsxs)(Q, {
                    children: [
                      (0, e.jsx)(Ts, {
                        eventModel: r,
                        strCapsuleURL: f,
                        bLoading: u,
                      }),
                      (0, e.jsx)(Be, {
                        rgSaleCapsules: P,
                        eClickLocation: I.cU.C1,
                        children: (0, e.jsx)(Ie, {
                          strDesc: (0, y.we)(
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
        function Es(i) {
          return Ms.filter((t) => t <= (i ?? 0)).pop();
        }
        function Ts(i) {
          const { eventModel: t, strCapsuleURL: n, bLoading: r } = i,
            u = se(),
            { linkurl: f } = u.GetTemplateVars(),
            P = (0, U.WN)(f, I.cU.wY);
          if (r) return (0, e.jsx)("div", { className: Te.Header });
          if (!t || !n) return (0, e.jsx)(Z, {});
          const L = t.GetNameWithFallback((0, E.sfN)(_.TS.LANGUAGE)),
            X = t.endTime,
            q = !!X && X > (0, vs._2)();
          return (0, e.jsxs)(G.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: Te.Header,
            onActivate: P,
            children: [
              (0, e.jsx)("img", { className: Te.Capsule, src: n, alt: L }),
              (0, e.jsxs)("div", {
                className: Te.HeaderText,
                children: [
                  (0, e.jsx)(le, {
                    strType: (0, y.we)("#MarketingMessages_SaleEvent"),
                    strTitle: L,
                    bSmallTitle: !0,
                  }),
                  q &&
                    (0, e.jsx)("div", {
                      className: Te.Dates,
                      children: (0, y.we)(
                        "#MarketingMessages_SaleEvent_Through",
                        (0, y._l)(X, !1, !1, !1),
                      ),
                    }),
                ],
              }),
            ],
          });
        }
        const Ue = l.createContext(null);
        function se() {
          return l.useContext(Ue);
        }
        function xs(i) {
          const { message: t, preview: n } = i,
            r = i.active !== !1,
            u = (0, C.NZ)();
          return (
            l.useEffect(() => {
              r && u(t.GetLegalHTML());
            }, [r, t, u]),
            (0, e.jsx)(Ue.Provider, {
              value: t,
              children: (0, e.jsx)(l.Suspense, {
                fallback: null,
                children: (0, e.jsx)(Cs, { message: t, active: r, preview: n }),
              }),
            })
          );
        }
        const Ds = l.lazy(() =>
          Promise.all([s.e(75976), s.e(8287)]).then(s.bind(s, 72795)),
        );
        function Cs(i) {
          const { message: t, active: n, preview: r } = i,
            u = (0, E.sfN)(d.TS.LANGUAGE),
            { bLowBandwidthMode: f } = (0, v.ri)();
          if (
            (0, x.$I)(t.GetTemplateVars().custom_display || "") &&
            d.iA.logged_in
          ) {
            const L = Number(
              (0, x.fL)(t.GetTemplateVars().custom_display || ""),
            );
            return isNaN(L) ? null : (0, e.jsx)(Ds, { active: n, year: L });
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
                : (0, e.jsx)(Ze, { bLowBandwidthMode: f })
              : null;
        }
      },
      70537: (W, K, s) => {
        "use strict";
        s.d(K, { Mf: () => B, Ng: () => g, eI: () => Y });
        var e = s(7850),
          E = s(97743),
          l = s(90626),
          x = s(92757),
          C = s(16412),
          d = s(18210),
          v = s(32858),
          m = s(84121),
          U = s.n(m),
          G = s(36118),
          S = s(36707),
          F = s(90740),
          _ = s(27638),
          k = s(85599),
          H = s(2546);
        const N = 8,
          V = l.createContext(null);
        function g() {
          return l.useContext(V);
        }
        function B(T) {
          const { MarketingMessagesStore: M } = T,
            j = (0, v.ri)(),
            { rgMessages: o, isError: a } = (0, E.XW)(M, j),
            [c, p] = l.useState(!1),
            [h, A] = l.useState(0);
          (0, _.Y)(m.MarketingMessagePage);
          const O = (0, x.W6)();
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
            return (0, e.jsx)(b, {
              children: (0, d.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (c)
            return (0, e.jsx)(b, {
              children: (0, d.we)("#MarketingMessages_NoneAvailable"),
            });
          const $ = j.bIncludeSeenMessages ? o : o?.slice(0, N);
          return (0, e.jsxs)("div", {
            className: m.MessageListPage,
            children: [
              (0, e.jsx)("div", {
                className: m.MessageListScroll,
                children: (0, e.jsx)(R, {
                  MarketingMessagesStore: M,
                  rgMessages: $,
                  iActiveMessage: h,
                }),
              }),
              (0, e.jsx)(y, {
                cMessages: $?.length,
                iMessage: h,
                setMessage: A,
              }),
            ],
          });
        }
        function R(T) {
          const {
            MarketingMessagesStore: M,
            rgMessages: j,
            iActiveMessage: o,
          } = T;
          return j
            ? (0, e.jsx)("div", {
                className: m.MessageListContainer,
                children: j?.map((a, c) =>
                  (0, e.jsx)(
                    I,
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
                className: (0, S.A)(m.MessageListContainer, m.Loading),
                children: (0, e.jsx)(k.t, {
                  size: "xxlarge",
                  msDelayAppear: 500,
                }),
              });
        }
        function y(T) {
          const { cMessages: M, iMessage: j, setMessage: o } = T,
            a = l.useCallback(() => o(j - 1), [o, j]),
            c = l.useCallback(() => o(j + 1), [o, j]),
            p = [];
          for (let O = 0; O < M; O++)
            p.push(
              (0, e.jsx)(z, { active: O == j, iMessage: O, setMessage: o }, O),
            );
          const h = j > 0 ? a : void 0,
            A = j < M - 1 ? c : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: m.CarouselSpacer }),
              (0, e.jsx)("div", {
                className: m.CarouselBar,
                children: (0, e.jsxs)("div", {
                  className: m.Content,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, S.A)(m.LeftArrow, h && m.Active),
                      onClick: h,
                      children: (0, e.jsx)(G.l8x, { angle: 180 }),
                    }),
                    (0, e.jsx)("div", { className: m.Spacer }),
                    (0, e.jsx)("div", {
                      className: m.PipContainer,
                      children: (0, e.jsx)("div", {
                        className: m.Pips,
                        children: p,
                      }),
                    }),
                    (0, e.jsx)("div", { className: m.Spacer }),
                    (0, e.jsx)("div", {
                      className: (0, S.A)(m.LeftArrow, A && m.Active),
                      onClick: A,
                      children: (0, e.jsx)(G.l8x, { angle: 0 }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function z(T) {
          const { active: M, iMessage: j, setMessage: o } = T,
            a = l.useCallback(() => o(j), [o, j]);
          return (0, e.jsx)("div", {
            className: (0, S.A)(m.Pip, M && m.Active),
            onClick: a,
          });
        }
        function Y(T) {
          const { MarketingMessagesStore: M, preview: j } = T,
            o = (0, x.W5)(),
            { message: a, isError: c } = (0, E.dr)(M, o.params.messageid, j);
          return (
            (0, _.Y)(m.MarketingMessagePage),
            c
              ? (0, e.jsx)(b, {
                  children: (0, d.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : o.params.messageid
                ? a
                  ? (0, e.jsx)(H.Q, { message: a, preview: j })
                  : null
                : (0, e.jsx)(b, {
                    children: (0, d.we)("#MarketingMessages_NoneAvailable"),
                  })
          );
        }
        function b(T) {
          return (0, e.jsxs)(C.UC, {
            style: { maxWidth: "400px", margin: "0 auto" },
            children: [
              (0, e.jsxs)(C.Y9, {
                children: [(0, d.we)("#Error_Generic"), " "],
              }),
              (0, e.jsx)(C.nB, { children: T.children }),
            ],
          });
        }
        function w(T, M, j) {
          l.useEffect(() => {
            M &&
              T.MarkMessageSeen(M.id, j + 1, M.GetTemplateTypeForReporting());
          }, [M, T, j]);
        }
        function I(T) {
          const {
              message: M,
              MarketingMessagesStore: j,
              active: o,
              next: a,
              displayIndex: c,
            } = T,
            p = l.useRef(void 0),
            h = l.useRef(o || a);
          if ((w(j, o ? M : null, c), (o || a) && (h.current = !0), !h.current))
            return null;
          let A = {
            enter: m.Enter,
            enterActive: m.EnterActive,
            enterDone: m.EnterDone,
            exit: m.Exit,
            exitActive: m.ExitActive,
            exitDone: m.ExitDone,
          };
          return (0, e.jsx)(F.A, {
            in: o,
            nodeRef: p,
            classNames: A,
            timeout: 300,
            mountOnEnter: !a,
            unmountOnExit: !a,
            children: (0, e.jsx)(V.Provider, {
              value: c,
              children: (0, e.jsx)("div", {
                className: (0, S.A)(m.MessageWrapper, o && m.Active),
                ref: p,
                children: (0, e.jsx)(H.Q, { message: M, active: o }),
              }),
            }),
          });
        }
      },
      32858: (W, K, s) => {
        "use strict";
        s.d(K, { GY: () => C, ri: () => x, vn: () => d });
        var e = s(90626),
          E = s(92757),
          l = s(18210);
        function x() {
          const v = (0, E.zy)();
          return e.useMemo(() => {
            const m = new URLSearchParams(v.search);
            return {
              bIncludeSeenMessages: !!m.get("include_seen"),
              nClientPackageVersion: parseInt(
                m.get("client_package_version") || "0",
              ),
              eOSType: parseInt(m.get("os_type") || "0"),
              bLowBandwidthMode: !!m.get("low_bandwidth"),
            };
          }, [v.search]);
        }
        function C(v) {
          const m = new URLSearchParams();
          return (
            v.bIncludeSeenMessages && m.append("include_seen", "1"),
            v.nClientPackageVersion &&
              m.append(
                "client_package_version",
                v.nClientPackageVersion.toString(),
              ),
            v.eOSType && m.append("os_type", v.eOSType.toString()),
            v.bLowBandwidthMode && m.append("low_bandwidth", "1"),
            m.toString()
          );
        }
        function d(v, m, U) {
          if (!U && v.BHasTemplateAnimatedAssets()) {
            const G = l.A0.GetELanguageFallback(m);
            return (
              v.BHasTemplateAnimatedAssetForLanguage(m) ||
              v.BHasTemplateAnimatedAssetForLanguage(G)
            );
          }
          return !1;
        }
      },
      35330: (W, K, s) => {
        "use strict";
        s.r(K), s.d(K, { MarketingMessageRoutes: () => _, default: () => k });
        var e = s(7850),
          E = s(58732),
          l = s(90626),
          x = s(92757),
          C = s(67705);
        const d = l.createContext({ prioritized_list: !1 });
        function v(g) {
          const [B, R] = l.useState(),
            y = (0, x.zy)(),
            z = l.useMemo(() => {
              const Y = new URLSearchParams(y.search);
              return {};
            }, [y.search]);
          return (
            l.useEffect(() => {
              const Y = (0, C.Tc)(
                "marketingmessage_config",
                "application_config",
              );
              R({});
            }, [z]),
            B
              ? (0, e.jsxs)(d.Provider, {
                  value: B,
                  children: [g.children, " "],
                })
              : null
          );
        }
        var m = s(70537),
          U = s(68312),
          G = s(97743),
          S = s(32738),
          F = s(51079);
        const _ = {
          List: () => `${E.B.MarketingMessages()}list/`,
          Message: (g) => `${E.B.MarketingMessages()}${g}`,
          MessagePreview: (g) => `${E.B.MarketingMessages()}preview/${g}`,
        };
        function k(g) {
          const B = V();
          return B
            ? (0, e.jsx)(F.Ay, {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
                children: (0, e.jsx)(v, {
                  children: (0, e.jsx)(S.g1, {
                    children: (0, e.jsxs)(x.dO, {
                      children: [
                        (0, e.jsx)(x.qh, {
                          path: `${_.List()}`,
                          children: (0, e.jsx)(m.Mf, {
                            MarketingMessagesStore: B,
                          }),
                        }),
                        (0, e.jsx)(x.qh, {
                          path: `${_.MessagePreview(":messageid")}`,
                          children: (0, e.jsx)(m.eI, {
                            MarketingMessagesStore: B,
                            preview: !0,
                          }),
                        }),
                        (0, e.jsx)(x.qh, {
                          path: `${_.Message(":messageid")}`,
                          children: (0, e.jsx)(m.eI, {
                            MarketingMessagesStore: B,
                          }),
                        }),
                        (0, e.jsx)(x.qh, {
                          children: (0, e.jsx)(x.rd, { to: `${_.List()}` }),
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
          return H || (H = new G.Nt(g)), H;
        }
        function V() {
          const [g, B] = l.useState(null),
            R = (0, U.TR)();
          return (
            l.useEffect(() => {
              g || B(N(R));
            }, [g, R]),
            g
          );
        }
      },
      48963: (W) => {
        W.exports = {
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
        };
      },
      84121: (W) => {
        W.exports = {
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
      92609: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          AutoRenderContents: "_1H1L2spV-tto6AJmQMSfsA",
          TitleContainer: "_2iA76-Eh1ID-HXFGGR5BoH",
          TypeTitle: "klzItvORTtJ0Eeg8ArDrN",
          TypeSubTitle: "QPZq6bu7lf50YpRKZgPCc",
        };
      },
      720: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          UpdateEventCtn: "_3ICxVDu3-Bkx9aqyLehGGP",
          EventImage: "zDfA0bzAjCUkfaQx_KvS7",
        };
      },
      16205: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          BackgroundImage: "_3vQ5a1hrg4SbTU1Uw3351z",
          DlcCtn: "_3H7i0ChQjoGWieNRcKmYea",
          Type: "HmoaKPBZvHxysTOtEt6I_",
          DealDesc: "_3fPQtBXFQwL3xrK4zmpmyq",
          OneItemRow: "_6a9d-uI8VyQTmWHS3vFI-",
          OneBigItem: "_2lKQioAzojICHeg5SX6fhc",
          TwoCapsuleRow: "_1s9-9e_1KjO0xTTJNj-KuT",
        };
      },
      31343: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          PosterCtn: "_24bJJZ8-xr8Et4DVUrr17J",
          Poster: "_3LbyxomxMvYMy7cLThkkIf",
          Video: "_2bH_Jxh-T2YFCPBCW_pvQB",
        };
      },
      23871: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          Header: "_2m3RxInRYd11y5ewu7kLxr",
          Capsule: "_1NQIYI_yPkSh0ZnjIjOb6w",
          HeaderText: "_38qIDuTcZeQsAF13tF8lDi",
          Dates: "_1eCCPp6vyvsBDfuTm0BZcD",
        };
      },
      22329: (W) => {
        W.exports = {
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
        };
      },
      61738: (W, K, s) => {
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
        function E(x) {
          var C = l(x);
          return s(C);
        }
        function l(x) {
          if (!s.o(e, x)) {
            var C = new Error("Cannot find module '" + x + "'");
            throw ((C.code = "MODULE_NOT_FOUND"), C);
          }
          return e[x];
        }
        (E.keys = function () {
          return Object.keys(e);
        }),
          (E.resolve = l),
          (W.exports = E),
          (E.id = 61738);
      },
    },
  ]);
})();

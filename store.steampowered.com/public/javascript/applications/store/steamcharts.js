/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2414],
    {
      50109: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { E: () => ae, O: () => J });
        var e = r(14947),
          W = r(65946),
          X = r(99412),
          de = r(41635),
          oe = r(27066),
          se = r(3166),
          he = r(38585),
          Q = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          v = (D, N, O, G) => {
            for (
              var $ = G > 1 ? void 0 : G ? _(N, O) : N, Ce = D.length - 1, Y;
              Ce >= 0;
              Ce--
            )
              (Y = D[Ce]) && ($ = (G ? Y(N, O, $) : Y($)) || $);
            return G && $ && Q(N, O, $), $;
          };
        const Z = class sa {
          m_eCurLang = (0, X.sfN)(se.TS.LANGUAGE);
          m_rgHasData = (0, de.$Y)([], X.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new he.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(N) {
            return this.m_eCurLang != N
              ? ((this.m_eCurLang = N), this.GetCallback().Dispatch(N), !0)
              : !1;
          }
          SetHasLanguage(N) {
            N.forEach((O, G) => {
              this.m_rgHasData[G] != O && (this.m_rgHasData[G] = O);
            });
          }
          BHasLanguageData(N) {
            return this.m_rgHasData[N];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(N) {
            N != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = N);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              sa.s_globalSingletonStore ||
                (sa.s_globalSingletonStore = new sa()),
              sa.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        v([e.sH], Z.prototype, "m_eCurLang", 2),
          v([e.sH], Z.prototype, "m_rgHasData", 2),
          v([e.sH], Z.prototype, "m_bHasLocalizationContext", 2),
          v([oe.o], Z.prototype, "GetCurEditLanguage", 1),
          v([oe.o], Z.prototype, "SetCurEditLanguage", 1),
          v([e.XI.bound], Z.prototype, "SetHasLanguage", 1),
          v([oe.o], Z.prototype, "BHasLanguageData", 1);
        let J = Z;
        function ae() {
          return (0, W.q3)(() => J.Get().GetCurEditLanguage());
        }
      },
      21042: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { Sm: () => he, U: () => oe, r3: () => _ });
        var e = r(99412),
          W = r(72609),
          X = r(73259),
          de = r(76559);
        function oe(v, Z, J, ae) {
          const D = new X.lh();
          return (
            (D.type = Z),
            (D.clanSteamID = new de.b(v, W.TS.EUNIVERSE, e.P3F, 0)),
            (D.GID = "fakeevent_" + se++),
            (D.visibility_state = X.zv.k_EEventStateUnlisted),
            (D.visibilityStartTime = ae - 1),
            (D.jsondata.bSaleEnabled = !0),
            (D.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (D.jsondata.sale_vanity_id = J),
            (D.jsondata.sale_header_offset = 0),
            (D.jsondata.sale_header_disable_top_margin = !1),
            D
          );
        }
        let se = 1234;
        function he(v, Z) {
          return {
            unique_id: se++,
            capsules: [],
            events: [],
            links: [],
            section_type: v,
            localized_label: [],
            default_label: Z,
          };
        }
        const Q = "socialcontent_";
        function _() {
          return {
            platforms: [
              { label: X.Zf.Steam, checked: !0 },
              { label: X.Zf.Facebook, checked: !0 },
              { label: X.Zf.Twitter, checked: !0 },
              { label: X.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: Q + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: X.jR.SummaryLargeImage,
                localized_option_fields: {
                  localized_header: [],
                  title: [],
                  description: [],
                  image: [],
                },
              },
            ],
          };
        }
      },
      55436: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { r: () => ae, z: () => Z });
        var e = r(7850),
          W = r(90626),
          X = r(16412),
          de = r(25792),
          oe = r(96538),
          se = r(18210),
          he = r(85599),
          Q = r(17618),
          _ = r.n(Q),
          v = r(53424);
        const Z = (D) => {
            const { clanSteamID: N, fnImageSelectCallBack: O } = D,
              [G, $] = (0, W.useState)(""),
              Ce = (0, v.mr)(D.clanSteamID.GetAccountID()),
              Y = () => D.closeModal && D.closeModal(),
              ue = v.pU.GetFilteredClanImages(N, G),
              xe = (fe) => {
                O(fe), Y();
              };
            return (0, e.jsx)(de.tH, {
              children: (0, e.jsx)(oe.x_, {
                onEscKeypress: Y,
                children: (0, e.jsxs)(X.UC, {
                  children: [
                    (0, e.jsx)(X.Y9, {
                      children: (0, se.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(X.nB, {
                      children: (0, e.jsxs)(X.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, se.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(X.pd, {
                            placeholder: (0, se.we)("#ClanImageChooser_Search"),
                            value: G,
                            onChange: (fe) => $(fe.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: Q.ImagesOuterContainer,
                            children: Ce
                              ? (0, e.jsx)(he.t, {
                                  size: "medium",
                                  string: (0, se.we)("#Loading"),
                                })
                              : ue.length > 0
                                ? ue.map((fe) =>
                                    (0, e.jsx)(
                                      J,
                                      {
                                        clanImage: fe,
                                        searchStringHilight: G,
                                        fnImageClick: xe,
                                      },
                                      "ci" + fe.image_hash,
                                    ),
                                  )
                                : G.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, se.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, se.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(X.wi, {
                      children: (0, e.jsx)(X.$n, {
                        onClick: Y,
                        children: (0, se.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          J = (D) => {
            const { clanImage: N, searchStringHilight: O, fnImageClick: G } = D;
            let $ = N.file_name ? N.file_name : "",
              Ce = ae(O, $, String(N.imageid), Q.Hilight);
            return (0, e.jsxs)("div", {
              className: Q.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: Q.Image,
                  style: { backgroundImage: `url( '${N.thumb_url}' )` },
                  onDoubleClick: () => G(N),
                }),
                (0, e.jsx)("div", {
                  className: Q.ImageFilename,
                  title: $,
                  children: Ce,
                }),
              ],
            });
          };
        function ae(D, N, O, G) {
          let $ = [];
          if (D.length > 0) {
            let Ce = N.toLocaleLowerCase();
            for (let Y = 0; Y < N.length; ) {
              let ue = Ce.indexOf(D, Y);
              if (ue < 0) {
                $.push(
                  (0, e.jsx)(
                    "span",
                    { children: N.substring(Y) },
                    O + "_" + String(Y),
                  ),
                );
                break;
              } else
                Y < ue &&
                  $.push(
                    (0, e.jsx)(
                      "span",
                      { children: N.substring(Y, ue) },
                      O + "_" + String(Y),
                    ),
                  ),
                  $.push(
                    (0, e.jsx)(
                      "span",
                      { className: G, children: N.substr(ue, D.length) },
                      O + "_" + String(Y),
                    ),
                  ),
                  (Y = ue + D.length);
            }
          } else $.push((0, e.jsx)("span", { children: N }, O + "_null"));
          return $;
        }
      },
      24806: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { Ng: () => G });
        var e = r(7850),
          W = r(75844),
          X = r(90626),
          de = r(99412),
          oe = r(32093),
          se = r(50109),
          he = r(95695),
          Q = r.n(he),
          _ = r(36707),
          v = r(18210),
          Z = r(92264),
          J = r(30096),
          ae = r(71421),
          D = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          O = (Y, ue, xe, fe) => {
            for (
              var M = fe > 1 ? void 0 : fe ? N(ue, xe) : ue,
                ee = Y.length - 1,
                q;
              ee >= 0;
              ee--
            )
              (q = Y[ee]) && (M = (fe ? q(ue, xe, M) : q(M)) || M);
            return fe && M && D(ue, xe, M), M;
          };
        let G = class extends X.Component {
          GenerateLanguageOptions() {
            let Y = [];
            const {
              fnFilterLanguage: ue,
              fnLangHasData: xe,
              fnLastUpdateRTime: fe,
              fnIsLangSupported: M,
            } = this.props;
            this.props.bAllowUnsetOption &&
              Y.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: de.xPp,
                    children: (0, v.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let ee = new Array();
            const q = this.props.realms || [oe.TU.k_ESteamRealmGlobal];
            for (const le of v.A0.GetLanguageListForRealms(q)) {
              if (ue && !ue(le)) continue;
              const be = (0, de.LgB)(le),
                c = (0, v.we)("#Language_" + be),
                Me = !!(M && M(le));
              ee.push({ eLang: le, sLocName: c, bSupported: Me });
            }
            ee.sort((le, be) =>
              le.bSupported != be.bSupported
                ? le.bSupported
                  ? -1
                  : 1
                : le.sLocName.localeCompare(be.sLocName),
            );
            let Ie = !1;
            for (const le of ee) {
              le.bSupported != Ie &&
                (Y.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: Q().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, v.we)(
                        le.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    le.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Ie = le.bSupported));
              const be = xe && xe(le.eLang),
                c = fe && fe(le.eLang);
              let Me = le.sLocName;
              c &&
                c !== 0 &&
                ((Me += " "),
                (Me += (0, v.we)(
                  "#Language_Last_Update",
                  (0, v.$z)(c) +
                    " @ " +
                    (0, Z.KC)(c, { bForce24HourClock: !1 }),
                ))),
                Y.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: le.eLang,
                      className: (0, _.A)(
                        { [Q().LanguageWithContent]: be },
                        le.bSupported
                          ? Q().SupportedLanguage
                          : Q().UnsupportedLanguage,
                      ),
                      children: Me,
                    },
                    "langpicker" + le.eLang + (be ? "_hasdata" : ""),
                  ),
                );
            }
            return Y;
          }
          OnLanguageChange(Y) {
            const { fnOnLanguageChanged: ue, selectedLang: xe } = this.props;
            let fe = Number.parseInt(Y.currentTarget.value);
            fe != xe && ue && ue(fe);
          }
          render() {
            const {
              selectedLang: Y,
              bDisabled: ue,
              strTooltip: xe,
            } = this.props;
            let fe = this.GenerateLanguageOptions();
            return (0, e.jsx)(ae.he, {
              toolTipContent: xe,
              children: (0, e.jsx)("select", {
                value: Y,
                onChange: this.OnLanguageChange,
                disabled: ue,
                children: fe,
              }),
            });
          }
        };
        O([J.oI], G.prototype, "OnLanguageChange", 1), (G = O([W.PA], G));
        function $(Y) {
          const [ue, xe] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(G, {
            selectedLang: xe,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !ue,
            strTooltip: ue
              ? void 0
              : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function Ce(Y) {
          const { fnLangHasData: ue } = Y;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const xe = useObserver(() => {
            const fe = [];
            for (let M = k_ELanguage_English; M < k_ELanguage_MAX; ++M)
              fe[M] = !!(ue && ue(M));
            return fe;
          });
          return (
            React.useEffect(
              () => CEditorLocStore.Get().SetHasLanguage(xe),
              [xe],
            ),
            jsx(Fragment, {})
          );
        }
      },
      14069: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { _: () => ps });
        var e = r(7850),
          W = r(99412),
          X = r(19298),
          de = r(20169),
          oe = r(28604),
          se = r(36631),
          he = r(64387);
        function Q(s) {
          const { strURL: t } = s;
          return t
            ? (0, e.jsx)("div", {
                className: he.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var _ = r(65946),
          v = r(90626),
          Z = r(73259),
          J = r(25792),
          ae = r(52393),
          D = r.n(ae),
          N = r(95695),
          O = r.n(N),
          G = r(36707),
          $ = r(3166),
          Ce = r(82054),
          Y = r(68266);
        function ue(s) {
          const { event: t, bIsPreview: a } = s;
          let o = t.jsondata.sale_background_video_webm,
            i = t.jsondata.sale_background_video_mp4;
          return i || o
            ? (0, e.jsx)(J.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, G.A)(
                    D().SaleBackground,
                    D()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    D().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: a
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    o && (0, e.jsx)("source", { src: o, type: "video/webm" }),
                    i &&
                      !$.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: i, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function xe(s) {
          const { event: t, language: a, children: o, bIsPreview: i } = s,
            l = v.useRef(null),
            u = (0, Y.m0)(t, "sale_header", a),
            [x] = (0, _.q3)(() => [t.jsondata.sale_sub_menu]);
          v.useEffect(() => {
            if (!u) return;
            const C = new Image();
            (C.onload = () => {
              const y = (100 * C.width) / 950 + "%";
              l.current && l.current.style.setProperty("--background-scale", y);
            }),
              (C.src = u);
          }, [u]);
          const p = t.jsondata.sale_sections?.some(
              (C) => C.section_type === "contenthubmaincarousel",
            ),
            I =
              t.jsondata.item_source_type === Z.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                p),
            b = u ? `url(${u})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              x
                ? (0, e.jsx)(Ce.j, {
                    event: t,
                    language: a,
                    bIsPreview: i,
                    subMenu: x,
                    styleVariation: Ce.g.k_SubMenu,
                  })
                : (0, e.jsx)(Q, { strURL: u }),
              (0, e.jsx)("div", {
                className: (0, G.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: I,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, G.A)(
                    D()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    D().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: l,
                  children: [
                    u && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, G.A)(
                            O().SalePageBackground,
                            O().BackgroundImage,
                            O().Blur,
                          ),
                          src: u,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, G.A)(
                            O().SalePageBackground,
                            O().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: b,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(ue, { event: t, bIsPreview: i }),
                    (0, e.jsx)(e.Fragment, { children: o }),
                  ],
                }),
              }),
            ],
          });
        }
        var fe = r(26589),
          M = r(39905),
          ee = r(50909),
          q = r.n(ee);
        function Ie(s) {
          const { eventModel: t } = s,
            { data: a } = (0, fe.hM)(t.clanSteamID.GetAccountID());
          if (
            !a ||
            (!a.can_edit && !a.support_user) ||
            (0, $.yK)() == "community"
          )
            return;
          const o = t.GetAllTags(),
            i = [];
          if (
            (o.includes("hide_store") &&
              i.push(
                M.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            o.includes("mod_hide_store") &&
              a.support_user &&
              i.push(M.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              o.includes("contenthub") &&
              i.push(
                M.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && i.length == 0))
          )
            return (0, e.jsx)("div", {
              className: q().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: q().WarningText,
                      children: M.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  i.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: q().WarningText,
                      children: [
                        M.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          i.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: i.map((l) =>
                            (0, e.jsx)("li", { children: l }, l),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var le = r(76789),
          be = r.n(le),
          c = r(18210);
        function Me(s) {
          const { eventModel: t, language: a } = s,
            [o, i] = (0, _.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, a),
            ]);
          return i && i?.length > 0
            ? o
              ? (0, e.jsx)("a", {
                  className: be().SalePageLogoCtn,
                  href: $.TS.STORE_BASE_URL + o,
                  children: (0, e.jsx)(We, { ...s }),
                })
              : (0, e.jsx)("div", {
                  className: (0, G.A)(be().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(We, { ...s }),
                })
            : null;
        }
        function We(s) {
          const { eventModel: t, language: a } = s,
            o = (0, Y.m0)(t, "sale_logo", a);
          return (0, e.jsx)("img", { src: o, alt: "logo" });
        }
        var Ge = r(72865),
          tt = r(71347),
          ot = r.n(tt),
          it = r(53107);
        function ht(s) {
          const { rgPresenters: t } = s;
          if (!t || t.length == 0) return null;
          const a = (0, W.sfN)($.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, G.A)(
                  ot().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: M.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(at, { presentor: t[0], lang: a }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, G.A)(
                  ot().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: M.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((o, i) =>
                      (0, e.jsxs)(
                        v.Fragment,
                        {
                          children: [
                            (0, e.jsx)(at, { presentor: o, lang: a }),
                            t.length > 2 && ", ",
                          ],
                        },
                        o.url,
                      ),
                    ),
                  (0, e.jsx)(at, { presentor: t[t.length - 1], lang: a }),
                ),
              });
        }
        function at(s) {
          const { presentor: t, lang: a } = s,
            o = (0, Ge.aL)(t.url);
          return (0, e.jsx)(it.uU, {
            href: o,
            bUseLinkFilter: !0,
            className: ot().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, a),
          });
        }
        var Ue = r(60480),
          pt = r(92757),
          w = r(18994),
          re = r(56412),
          lt = r(86515),
          Ye = r(39153),
          Et = r(61478);
        function Oe(s) {
          const { event: t, broadcastEmbedContext: a } = s,
            o = !!t?.jsondata?.broadcast_display_wide_player,
            i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Et.B, {
                event: t,
                broadcastEmbedContext: a,
                bWideBroadcastDisplay: o,
                bWideBroadcastPermitChat: i,
              }),
          });
        }
        var Fe = r(85671),
          Ve = r(24660),
          yt = r(71157),
          ct = r(15181),
          Ba = r(24805),
          At = r(10142),
          Ht = r(84676),
          ra = r(14560),
          Wt = r(9807),
          oa = r(20860),
          ye = r.n(oa);
        function _e(s, t) {
          return s
            ? t
              ? !!s.valve_admin
              : !!(s.valve_admin || s.support_user)
            : !1;
        }
        function ge(s, t) {
          const a = !!(s && s.BIsClanAccount()),
            { data: o } = (0, fe.hM)(a ? s.GetAccountID() : 0);
          return a && _e(o, t);
        }
        function Yt(s) {
          const { clanSteamID: t, id: a } = s;
          return ge(t, s.requireAdmin)
            ? (0, e.jsx)("div", {
                id: a,
                className: (0, G.A)(
                  s.className,
                  s.requireAdmin
                    ? N.ValveOnlyAdminBackground
                    : N.ValveOnlyBackground,
                ),
                children: s.children,
              })
            : null;
        }
        var ne = r(16412);
        const Nt = 12,
          ia = 240;
        function la(s) {
          const { event: t } = s,
            [a] = (0, yt.Q)(w.QS, void 0),
            [o, i] = v.useState(!1),
            l = (0, $.Tc)("rgMLRecommenderWishlist", "application_config"),
            u = Array.isArray(l) && l.length > 0 && Number.isInteger(l[0]);
          return !t.BIsNextFest() || !u || a == w.sQ.Random || (0, Z.UR)(t) > 0
            ? null
            : (0, e.jsxs)(Yt, {
                clanSteamID: t.clanSteamID,
                className: ye().Ctn,
                children: [
                  (0, e.jsxs)(Ve.ml, {
                    className: ye().Header,
                    onClick: () => i(!o),
                    children: [
                      o ? "\u25BC" : "\u25B6",
                      " Next Fest personalized order (VO)",
                    ],
                  }),
                  o && (0, e.jsx)(ca, { event: t, rgRecommendedAppIDs: l }),
                ],
              });
        }
        function ca(s) {
          const { event: t, rgRecommendedAppIDs: a } = s,
            [o, i] = v.useState(void 0);
          (0, Ht.zX)(a, Ba.Xh);
          const [l, u] = v.useState(void 0),
            [x, p] = v.useState(""),
            I = t.jsondata.sale_ml_recommender_weight_exponent || Z.ld,
            b = parseFloat(x),
            C = l ?? (0, ra.JE)(t),
            S = b || I,
            y = v.useMemo(() => (0, Wt.a0)(a, a, (T) => T, C, S), [a, C, S]),
            k = v.useMemo(() => new Map(a.map((T, te) => [T, te])), [a]),
            R = v.useMemo(() => new Map(y.map((T, te) => [T, te])), [y]),
            L = a.length,
            B = (T) => At.A.Get().GetApp(T)?.GetName() ?? `App ${T}`,
            H = (T) => `hsl(${Math.round((240 * k.get(T)) / L)}, 80%, 65%)`,
            U = (T, te) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, G.A)(ye().Row, o == T && ye().Highlighted),
                  style: { height: Nt, color: H(T) },
                  title: `${B(T)} (${T}): recommended #${k.get(T) + 1}, shuffled to #${R.get(T) + 1}`,
                  onMouseEnter: () => i(T),
                  children: te,
                },
                T,
              ),
            K = (T, te) =>
              (0, e.jsx)(
                "line",
                {
                  x1: 0,
                  y1: (k.get(T) + 0.5) * Nt,
                  x2: ia,
                  y2: (R.get(T) + 0.5) * Nt,
                  stroke: te ? "white" : H(T),
                  strokeWidth: te ? 2 : 1,
                  strokeOpacity: te ? 1 : o === void 0 ? 0.6 : 0.15,
                },
                T,
              );
          return (0, e.jsxs)("div", {
            className: ye().Body,
            children: [
              (0, e.jsxs)("div", {
                className: ye().Summary,
                children: [
                  L,
                  " recommendations, exponent ",
                  S,
                  S < 0 && " (shuffle disabled)",
                  ", seed ",
                  C,
                  ". Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.",
                ],
              }),
              (0, e.jsxs)("div", {
                className: ye().Controls,
                children: [
                  (0, e.jsx)(ne.$n, {
                    className: ye().ControlButton,
                    onClick: () => u(ct.m()),
                    children: "Reshuffle",
                  }),
                  (0, e.jsxs)("label", {
                    children: [
                      "Exponent",
                      " ",
                      (0, e.jsx)("input", {
                        type: "number",
                        min: -1,
                        step: 0.1,
                        className: ye().ExponentInput,
                        placeholder: String(I),
                        value: x,
                        onChange: (T) => p(T.target.value),
                      }),
                    ],
                  }),
                  (l !== void 0 || x != "") &&
                    (0, e.jsx)(ne.$n, {
                      className: ye().ControlButton,
                      onClick: () => {
                        u(void 0), p("");
                      },
                      children: "Reset to page's order",
                    }),
                  (0, e.jsx)("span", {
                    children: "Only affects this chart, not the page",
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: ye().Chart,
                onMouseLeave: () => i(void 0),
                children: [
                  (0, e.jsxs)("div", {
                    className: ye().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: ye().ColumnTitle,
                        children: "Recommended order",
                      }),
                      a.map((T, te) => U(T, `#${te + 1} ${B(T)}`)),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: ye().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: ye().ColumnTitle,
                        children: "\xA0",
                      }),
                      (0, e.jsxs)("svg", {
                        width: ia,
                        height: L * Nt,
                        children: [
                          a.filter((T) => T != o).map((T) => K(T, !1)),
                          o !== void 0 && k.has(o) && K(o, !0),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: ye().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: ye().ColumnTitle,
                        children: "Shuffled order",
                      }),
                      y.map((T) => U(T, `#${k.get(T) + 1} ${B(T)}`)),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Pt(s) {
          const {
            event: t,
            fnOnChangeDayIndex: a,
            addtionalAdminButtons: o,
          } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(la, { event: t }),
              (0, e.jsx)(Fe.g, {
                eventModel: t,
                fnOnUpdateSaleDayIndex: a,
                addtionalAdminButtons: o,
                bSupportsSticky: !0,
              }),
            ],
          });
        }
        var Ke = r(179),
          dt = r(50109),
          Pe = r(30096),
          Ma = r(98609),
          St = r(57673);
        const kt = new Map();
        function La(s, t) {
          const a = s.findIndex((o) => o.section_type === "tabs");
          if (a >= 0 && t !== void 0) {
            const o = s[a],
              i = o.tabs?.findIndex((l) => l.unique_id === t);
            if (i !== void 0 && i >= 0 && o.tabs)
              return {
                selectedTabBackgroundDef: o.tabs[i].tab_background_img_groups,
                nTabSaleSectionIndex: a,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function Gt(s, t, a) {
          const o = new Map(),
            i = new Map(),
            l = new Map();
          let u,
            x,
            p = 0;
          const { selectedTabBackgroundDef: I, nTabSaleSectionIndex: b } = La(
            t,
            a,
          );
          if (s?.enabled) {
            const C = s.groups?.length;
            if (
              (s.groups?.forEach((S, y) => {
                if (p >= t.length || t[p].section_type == "tabs") return;
                const k = new Array();
                for (
                  let L = 0;
                  L < (S?.num_sections || 0) &&
                  p < t.length &&
                  t[p].section_type != "tabs";
                  ++L, ++p
                ) {
                  const H = t[p].unique_id;
                  k.push(H),
                    i.set(H, S.background_id),
                    L === 0 && l.set(H, S.background_id);
                }
                if (
                  (o.set(S.background_id, {
                    nBackgroundGroupID: S.background_id,
                    sectionUniqueIDs: k,
                    nSaleSectionLastIndex: p - 1,
                    nUniqueIDNextSaleSection:
                      p < t.length && (b === void 0 || p < b)
                        ? t[p].unique_id
                        : void 0,
                  }),
                  y + 1 == C && s.last_group_until_cover_section_until_end)
                )
                  for (
                    let L = p;
                    L < t.length &&
                    (!I || !I.enabled || L < b) &&
                    !(t[L].section_type == "tabs" && I?.enabled);
                    ++L
                  ) {
                    const H = t[L].unique_id;
                    i.set(H, S.background_id);
                  }
              }),
              p < t.length && (b === void 0 || p < b) && (u = t[p].unique_id),
              I?.enabled && b !== void 0)
            ) {
              let S = b;
              const y = I.groups.length;
              for (
                I.groups.forEach((k, R) => {
                  if (S >= t.length) return;
                  const L = new Array();
                  for (
                    let U = 0;
                    U < k.num_sections && S < t.length;
                    ++U, ++S
                  ) {
                    const K = t[S],
                      T = K.unique_id;
                    (0, St.bF)(a, K)
                      ? (L.push(T),
                        i.set(T, k.background_id),
                        U === 0 && l.set(T, k.background_id))
                      : --U;
                  }
                  let B = S;
                  for (; B < t.length && !(0, St.bF)(a, t[B]); ) B += 1;
                  if (
                    (o.set(k.background_id, {
                      nBackgroundGroupID: k.background_id,
                      sectionUniqueIDs: L,
                      nSaleSectionLastIndex: S - 1,
                      nUniqueIDNextSaleSection:
                        B < t.length ? t[B].unique_id : void 0,
                    }),
                    R + 1 == y && I.last_group_until_cover_section_until_end)
                  )
                    for (let U = S; U < t.length; ++U) {
                      const K = t[U];
                      if (K.section_type == "tabs" && I?.enabled) break;
                      (0, St.bF)(a, K) && i.set(K.unique_id, k.background_id);
                    }
                });
                S < t.length && !(0, St.bF)(a, t[S]);
              )
                S++;
              S < t.length && (x = t[S].unique_id);
            }
          } else t?.length > 0 && (u = t[0].unique_id);
          return {
            mapGroupToSections: o,
            nFirstSaleSectionIDWithoutGroup: u,
            mapSectionToGroup: i,
            mapFirstSectionToGroup: l,
            selectedTabBackgroundDef: I,
            nTabSaleSectionIndex: b,
            nFirstTabSectionIDWithoutGroup: x,
          };
        }
        var ie = r(29630),
          da = r(68434),
          Ot = r(41635),
          Ze = r(81416);
        function ft(s, t, a, o) {
          let l = s.jsondata.sale_background_img_groups.groups.find(
            (u) => u.background_id === t.groupID,
          );
          return (
            !l &&
              o >= 0 &&
              (l = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((p) => p.unique_id == o)
                ?.tab_background_img_groups?.groups?.find(
                  (p) => p.background_id == t.groupID,
                )),
            (0, e.jsx)(
              Dt,
              {
                eventModel: s,
                displayDef: l,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  l &&
                  l.randomize_section_order &&
                  a !== Ze.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Ta, {
                        clanEventGID: s.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Ta(s) {
          const { clanEventGID: t, elSaleSections: a } = s,
            [o, i] = (0, da.M)(`sale_section_seed_${t}`, (0, ct.m)());
          if (!a || a.length === 0) return null;
          if (a.length > 1 && o !== void 0) {
            const l = (0, ct.A)(o);
            return (0, e.jsx)(e.Fragment, { children: Ot.fW(a, 0, l) });
          }
          return (0, e.jsx)(e.Fragment, { children: a });
        }
        function Dt(s) {
          const {
              displayDef: t,
              children: a,
              eventModel: o,
              derivedGroupInfo: i,
            } = s,
            l = (0, dt.E)(),
            u = v.useCallback(
              (y, k) => {
                kt.set(i.nBackgroundGroupID, k);
              },
              [i],
            ),
            x = (0, Pe.w6)(u);
          if (!a || (Array.isArray(a) && a.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: a });
          let p;
          if (t.localized_background_art) {
            const y = (0, W.LgB)(l),
              k =
                y in t.localized_background_art
                  ? y
                  : c.A0.GetLanguageFallback(Ma.TS.LANGUAGE),
              R = t.localized_background_art[k];
            R && (p = ie.zU.GenerateURLFromHashAndExt(o.clanSteamID, R));
          }
          let I = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              I += "to bottom,";
              break;
            case "left-to-right":
              I += "to right,";
              break;
            case "top-left-to-bottom-right":
              I += "to bottom right,";
              break;
            case "single-color":
              I = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((I += " " + t.background_color1),
              (I += ", " + t.background_color2),
              (I += ")"))
            : (I = null);
          const b =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            C = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            S = {
              backgroundImage: I ? `url(${p}), ${I}` : `url(${p})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: C ? t.position_setting : void 0,
              backgroundColor: b ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: x,
            style: S,
            id: "background_group_" + t.background_id,
            children: a,
          });
        }
        var Rt = r(4720),
          ua = r(64641),
          Vt = r.n(ua),
          wt = r(85599);
        function ga(s) {
          return typeof s == "string" || typeof s == "number"
            ? s
            : JSON.stringify(s);
        }
        class ma {
          Keyify = (t) => ga(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, a) {
            const o = this.m_mapVisible.get(this.Keyify(t)) || 0,
              i = this.m_mapVisible.get(this.Keyify(a)) || 0;
            return o - i;
          }
          BMarkAppVisibile(t, a) {
            const o = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return (
              o.add(i),
              this.IsAlreadyVisible(a)
                ? (this.m_mapVisible.set(
                    i,
                    (this.m_mapVisible.get(i) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(i, 1), !0)
            );
          }
          BMarkAppNotVisible(t, a) {
            if (!this.IsAlreadyVisible(a)) return !1;
            const o = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return o.has(i) ? (this.DecrementAppVisibility(i), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let a = this.m_mapOwners.get(t);
            return (
              a ||
                (this.m_mapOwners.set(t, new Set()),
                (a = this.m_mapOwners.get(t))),
              a
            );
          }
          DecrementAppVisibility(t) {
            const a = (this.m_mapVisible.get(t) ?? 0) - 1;
            a > 0 ? this.m_mapVisible.set(t, a) : this.m_mapVisible.delete(t);
          }
        }
        var Bt = r(71742),
          Na = r(53113),
          ha = r(90405),
          Ee = r(96538),
          Qe = r(88003),
          we = r(12932),
          nt = r(46777),
          Pa = r(77495),
          pa = r(16346),
          Ut = r(61257),
          Kt = r(56718),
          st = r(71421),
          fa = r(27828),
          Mt = r.n(fa);
        function ka(s) {
          return `rgba(${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}, ${s.rgb.a})`;
        }
        function vt(s) {
          const t = parseInt(s.slice(1), 16),
            a = (t >> 16) & 255,
            o = (t >> 8) & 255,
            i = t & 255;
          return `rgba(${a}, ${o}, ${i}, 1)`;
        }
        function Lt(s) {
          const { color: t, onChange: a, strTitle: o, disableAlpha: i } = s,
            [l, u] = (0, v.useState)(() => t || "rgba(255, 255, 255, 1)"),
            x = (0, v.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(M.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const b = (await new window.EyeDropper().open()).sRGBHex,
                  C = vt(b);
                u(C), a(C);
              } catch (p) {
                console.warn(M.Z.Localize("#Sale_EyeDropperFailed"), p);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: Mt().ColorPickerDialog,
            children: [
              !!o && (0, e.jsx)(ne.JU, { children: o }),
              (0, e.jsx)(Ut.xk, {
                onChange: (p) => {
                  const I = ka(p);
                  u(I), a(I);
                },
                color: l,
                disableAlpha: i,
                className: Mt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: Mt().EyeDropperCtn,
                children: (0, e.jsx)(st.Gq, {
                  toolTipContent: M.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(ne.$n, {
                    className: Mt().EyeDropperBtn,
                    onClick: x,
                    children: (0, e.jsx)(Kt.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function Ga(s) {
          const {
              color: t,
              onChange: a,
              onRequestClose: o,
              disableAlpha: i,
              strTitle: l,
            } = s,
            u = (0, v.useRef)(null);
          return (
            (0, v.useEffect)(() => {
              const x = u.current?.ownerDocument ?? document,
                p = (b) => {
                  u.current && !u.current.contains(b.target) && o();
                },
                I = (b) => {
                  b.key === "Escape" && o();
                };
              return (
                x.addEventListener("pointerdown", p, !0),
                x.addEventListener("keydown", I, !0),
                () => {
                  x.removeEventListener("pointerdown", p, !0),
                    x.removeEventListener("keydown", I, !0);
                }
              );
            }, [o]),
            (0, e.jsx)("div", {
              ref: u,
              children: (0, e.jsx)(Lt, {
                color: t,
                disableAlpha: i,
                strTitle: l ?? M.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function Oa() {
          return {
            openColorPicker: (0, v.useCallback)((t, a) => {
              let o = null;
              const i = () => o?.Hide();
              o = (0, pa.lX)(
                (0, e.jsx)(Ga, {
                  color: a.color,
                  disableAlpha: a.disableAlpha,
                  strTitle: a.strTitle,
                  onChange: a.onChange,
                  onRequestClose: i,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var Ra = r(13447),
          et = r.n(Ra),
          Zt = r(32190),
          Ft = r.n(Zt),
          $e = r(76559),
          va = r(75909),
          Re = r(53424),
          xa = r(72604),
          Ua = r(41735),
          ut = r.n(Ua),
          zt = r(14947),
          rt = r(9046),
          Fa = Object.defineProperty,
          za = Object.getOwnPropertyDescriptor,
          Ha = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? za(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Fa(t, a, i), i;
          };
        const Qt = class hn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, zt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, a, o, i) {
            let l =
                $.TS.COMMUNITY_BASE_URL +
                "gid/" +
                a.ConvertTo64BitString() +
                "/hasclanimagefile",
              u = { image_hash_and_ext: o, lang: "" + i };
            return (
              (await ut().get(l, { params: u, cancelToken: t && t.token })).data
                .success == xa.R
            );
          }
          SetPrimaryImageForImageGroup(t, a) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              a != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = a),
              (this.m_curLocImageGroup.localized_images = (0, Ot.$Y)(
                this.m_curLocImageGroup.localized_images,
                W.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(t, a) {
            if (this.m_curLocImageGroup) {
              let o = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[a]
                ? this.m_curLocImageGroup.localized_images[a]
                : ie.zU.GenerateURLFromHashAndExt(
                    t,
                    ie.zU.GetHashAndExt(o) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const a = this.m_curLocImageGroup.primaryImage,
              o = $e.b.InitFromClanID(a.clanAccountID),
              i = ie.zU.GetHashAndExt(a) ?? "",
              l = [];
            for (let x = W.Bhc; x < W.bP9; ++x)
              l.push(hn.BDoesClanImageFileExistsOnCDNOrOrigin(t, o, i, x));
            const u = await Promise.all(l);
            (0, zt.h5)(() => {
              for (let x = W.Bhc; x < W.bP9; ++x)
                u[x] &&
                  (this.m_curLocImageGroup.localized_images[x] =
                    ie.zU.GenerateURLFromHashAndExtAndLang(
                      o,
                      i,
                      rt.wI.full,
                      x,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, a, o) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = o
                ? ie.zU.GenerateURLFromHashAndExtAndLang(
                    a,
                    o,
                    rt.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, a) {
            if (!this.m_curLocImageGroup) return;
            let o = this.m_curLocImageGroup.primaryImage;
            if (o?.image_hash == t) {
              const i = $e.b.InitFromClanID(o.clanAccountID),
                l = ie.zU.GetHashAndExt(o);
              l &&
                (this.m_curLocImageGroup.localized_images[a] =
                  ie.zU.GenerateURLFromHashAndExtAndLang(
                    i,
                    l,
                    rt.wI.full,
                    a,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((o) => ie.zU.GetHashAndExtFromURL(o));
          }
        };
        Ha([zt.sH], Qt.prototype, "m_curLocImageGroup", 2);
        let Ia = Qt;
        const Ne = new Ia();
        var xt = r(38410),
          It = r(34592),
          ja = r(75844),
          Xt = r(32093),
          Jt = r(72849),
          Wa = r(64),
          Ya = r(72739),
          Tt = r(82734);
        function ba(s, t) {
          const a = v.useRef(void 0),
            o = v.useCallback(
              (u) => {
                u.currentTarget.files.length > 0 &&
                  (s(u.currentTarget.files), (u.currentTarget.value = ""));
              },
              [s],
            ),
            i = v.useCallback(() => a.current.click(), []);
          return [
            Ya.createPortal(
              (0, e.jsx)("form", {
                onSubmit: Ca,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: a,
                  onChange: o,
                }),
              }),
              window.document.body,
            ),
            i,
          ];
        }
        function $t(s) {
          const [t, a] = v.useState(!1),
            o = v.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            i = v.useCallback((p) => {
              Tt.NO(p) && a(!1);
            }, []),
            l = v.useCallback(() => a(!1), []),
            u = t ? Ca : void 0,
            x = v.useCallback(
              (p) => {
                p.dataTransfer.files?.length &&
                  (s(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
                  a(!1);
              },
              [s],
            );
          return [
            {
              onDragEnter: o,
              onDragLeave: i,
              onDragEnd: l,
              onDragOver: u,
              onDrop: x,
            },
            t,
          ];
        }
        async function an(s, t = 1e3) {
          return await new Promise((a, o) => {
            const i = new Image();
            (i.src = s),
              (i.onload = () => a("success")),
              (i.onerror = () => a("error")),
              t > 0 && window.setTimeout(() => a("timeout"), t);
          });
        }
        function Ca(s) {
          s.preventDefault();
        }
        function nn(s) {
          switch (s.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = s.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var Va = r(71647),
          jt = r.n(Va);
        function Ka(s) {
          const {
              onDropFiles: t,
              renderDesciption: a,
              elAdditonalButtons: o,
              elOverrideDragAndDropText: i,
            } = s,
            [l, u] = $t(t),
            [x, p] = ba(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...l,
            className: (0, G.A)(
              u ? jt().DragAndDropContainerDragging : jt().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!a && a(),
              (0, e.jsx)("div", {
                children: i || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: jt().ImageUploadBar,
                children: [
                  x,
                  (0, e.jsxs)("label", {
                    onClick: p,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: jt().SelectImageButton,
                        children: (0, c.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              o,
              s.children,
            ],
          });
        }
        var qe = r(36118),
          _a = r(21254),
          Za = r(27344),
          ke = r.n(Za),
          qt = r(9472);
        function Qa(s) {
          const {
              imageUploader: t,
              fnUploadComplete: a,
              elOverrideDragAndDropText: o,
              forceResolution: i,
              elAdditonalButtons: l,
              rgRealmList: u,
            } = s,
            [x, p] = (0, _.q3)(() => [
              t.GetUploadImages(),
              dt.O.Get().GetCurEditLanguage(),
            ]),
            I = v.useCallback(
              async (S) => {
                let y = Array.from(S),
                  k = !0;
                for (let R = 0; R < y.length; R++) {
                  const L = y[R],
                    { language: B } = (0, xt.jj)(L?.name, p);
                  try {
                    const H = (0, xt.PD)(B, p, u);
                    (k = await t.AddImageForLanguage(L, H)),
                      k ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            R +
                            " file=" +
                            L.name,
                        ),
                        (0, Qe.pg)(
                          (0, e.jsx)(Ee.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              L.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (H) {
                    let U = (0, It.H)(H);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + U.strErrorMsg,
                      U,
                    ),
                      (0, Qe.pg)(
                        (0, e.jsx)(Ee.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            U.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return k;
              },
              [p, t, u],
            ),
            b = v.useMemo(
              () =>
                l instanceof Array
                  ? l
                  : [
                      (0, e.jsx)(
                        v.Fragment,
                        { children: l },
                        "elAdditonalButtons",
                      ),
                    ],
              [l],
            );
          (0, _.q3)(() =>
            x.map((S) => ({ a: S.GetCurrentImageOption(), b: S.language })),
          );
          const C = async () => {
            const S = await t.UploadAllImages(i);
            a?.(S);
          };
          return (0, e.jsxs)(Ka, {
            onDropFiles: I,
            elAdditonalButtons: b,
            elOverrideDragAndDropText: o,
            children: [
              (0, e.jsx)(v.Fragment, {
                children: (0, e.jsx)("div", {
                  className: ke().UploadPreviewCtn,
                  children: x.map((S) =>
                    (0, e.jsx)(
                      Ea,
                      {
                        asset: S,
                        forceResolution: i,
                        fnOnRemove: () => t.DeleteUploadImage(S),
                        languageRealms: u,
                      },
                      "arttabupload_" + S.filename + "_" + S.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Be, { imageUploader: t, fnOnUploadImageRequested: C }),
            ],
          });
        }
        function Be(s) {
          const { imageUploader: t, fnOnUploadImageRequested: a } = s,
            [o] = (0, _.q3)(() => [t.GetUploadImages()]),
            i = o.some((u) => u.status == "pending"),
            l = o.some(
              (u) =>
                u.status == "waiting" ||
                u.status == "uploading" ||
                u.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: ke().UploadPreviewButtonsCtn,
            children: [
              !!o.length &&
                (0, e.jsx)(ne.$n, {
                  style: { margin: "8px" },
                  onClick: a,
                  disabled: !i,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!o.length &&
                (0, e.jsx)(ne.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: l,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function sn(s, t, a, o, i) {
          let l = new Array();
          return (
            s.GetUploadImages().forEach((u) => {
              l.push(
                jsx(
                  Ea,
                  {
                    asset: u,
                    forceResolution: a,
                    forceFileType: o,
                    fnOnRemove: () => s.DeleteUploadImage(u),
                    languageRealms: i,
                  },
                  t + u.file + "_" + u.uploadTime,
                ),
              );
            }),
            l
          );
        }
        const Ea = (0, ja.PA)(Xa);
        function Xa(s) {
          const t = (y) => {
              if (y instanceof Wa.M7) {
                y.ResetImage();
                const k = window,
                  R = (0, e.jsx)(_a.q, {
                    ownerWin: k,
                    uploadFile: y,
                    forceResolution: s.forceResolution,
                    fileType: s.forceFileType || Jt.bg.dU,
                  });
                (0, Qe.HT)(R, k, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  y.fileType,
                  JSON.stringify(y.GetCurrentImageOption()),
                );
            },
            { asset: a, fnOnRemove: o, languageRealms: i } = s,
            l = a.ImageOptions?.map((y) => {
              let k = y?.fnGetLabelText(),
                R;
              y.bEnforceDimensions && (k += ` - ${y.width}x${y.height}`),
                y.bDeprecated &&
                  ((k += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (R = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let L;
              return (
                (a.BIsOriginalMinimumDimensions(y) &&
                  a.FileTypeMatchesImageTypes(y)) ||
                  (L = ke().ImageDimensionTooSmall),
                { label: k, data: y, strOptionClass: L, tooltip: R }
              );
            }).filter((y) => !y.data.bHiddenFromDropdown),
            u = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            x = a.BSupportsLanguages()
              ? d(
                  c.A0.GetLanguageListForRealms(
                    i ?? [Xt.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            p = a.IsValidAssetType(s.forceResolution, s.forceFileType),
            I = a.status == "pending";
          let b = u[a.status];
          a.status == "pending" &&
            (p.needsCrop
              ? (b = (0, c.we)("#ImageUpload_NeedsCrop"))
              : p.error && (b = (0, c.we)("#ImageUpload_Invalid")));
          let C;
          const S = a.GetCurrentImageOption();
          return (
            S && (C = l?.find((y) => y.data.sKey == S.sKey)?.data),
            C || (C = l?.[0]?.data),
            (0, e.jsxs)("div", {
              className: ke().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: ke().UploadPreviewDelete,
                  onClick: () => o(a),
                  children: (0, e.jsx)(qe.sED, {}),
                }),
                (0, e.jsx)(m, { asset: a }),
                x &&
                  (0, e.jsx)(ne.m, {
                    strDropDownClassName: O().DropDownScroll,
                    rgOptions: x,
                    selectedOption: a.language,
                    onChange: (y) => (a.language = y.data),
                    disabled: !I,
                  }),
                l &&
                  l?.length > 1 &&
                  (0, e.jsx)(ne.m, {
                    label: a.GetImageOptionLabel(),
                    rgOptions: l,
                    selectedOption: C,
                    onChange: (y) => a.SetCurrentImageOption(y.data),
                    disabled: !I,
                  }),
                I &&
                  p.warnings?.map((y, k) =>
                    (0, e.jsx)(
                      "div",
                      { className: ke().UploadPreviewWarning, children: y },
                      `warning${k}`,
                    ),
                  ),
                I &&
                  p.messages?.map((y, k) =>
                    (0, e.jsx)(
                      "div",
                      { className: ke().UploadPreviewMessage, children: y },
                      `message${k}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, G.A)({
                    [O().FlexColumnContainer]: !0,
                    [ke().UploadPreviewError]: a.status == "failed",
                  }),
                  children: [
                    b,
                    (0, qt.o)(a.status) &&
                      (0, e.jsx)("div", {
                        className: Vt().FlexCenter,
                        children: (0, e.jsx)(wt.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: ke().UploadPreviewError,
                  children: a.message,
                }),
                I &&
                  p.error &&
                  (0, e.jsx)("div", {
                    className: ke().UploadPreviewError,
                    children: p.error,
                  }),
                I &&
                  p.needsCrop &&
                  (0, e.jsx)(ne.jn, {
                    onClick: () => t(a),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function m(s) {
          const { asset: t } = s;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: ke().PreviewImgCtn,
                onClick: (a) =>
                  (0, Qe.pg)((0, e.jsx)(n, { asset: t }), (0, Tt.uX)(a)),
                children: [
                  (0, e.jsxs)("span", {
                    className: ke().PreviewImgInfo,
                    children: [t.width, " x ", t.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: t.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: ke().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: ke().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function n(s) {
          const { asset: t, closeModal: a } = s;
          return (0, e.jsx)(Ee.o0, {
            bAlertDialog: !0,
            closeModal: a,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: t.dataUrl }),
            }),
          });
        }
        function d(s) {
          const t = [],
            a = new Array();
          for (const o of s) {
            if (o == W.X51) continue;
            const i = (0, c.we)("#Language_" + (0, W.LgB)(o));
            a.push({ label: i, data: o });
          }
          return (
            a.sort((o, i) => o.label.localeCompare(i.label)),
            a.forEach((o) => t.push({ label: o.label, data: o.data })),
            a
          );
        }
        var g = ((s) => (
          (s[(s.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (s[(s.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (s[(s.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (s[(s.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          s
        ))(g || {});
        function h(s, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(s)}`
            : `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetHashAndExt(s)}`;
        }
        function f(s, t, a) {
          let o = "";
          const i = h(t);
          if (a == 4)
            (o = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (o += i),
              (o += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (o += i),
              (o += " autoplay=true controls=false][/video]");
          else if (a == 2) o = "[img]" + i + "[/img]";
          else {
            const l = h(t, !0);
            o = "[url=" + i + "][img]" + l + "[/img][/url]";
          }
          s.InsertText(o);
        }
        var j = r(55436),
          A = r(53732),
          E = r.n(A),
          V = r(49460);
        function P(s) {
          const { fnSetImageSearch: t } = s,
            a = (0, v.useRef)(null);
          return (0, e.jsx)("div", {
            className: V.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: a,
              className: V.SearchInput,
              type: "text",
              placeholder: (0, c.we)("#ImagePicker_Search"),
              onChange: (o) => t(o.currentTarget.value),
              onKeyDown: (o) => {
                o.key == "Escape" &&
                  (t(""), a.current && (a.current.value = ""));
              },
            }),
          });
        }
        const z = v.memo(function (t) {
          const {
            fileNameSearch: a,
            clanAccountID: o,
            imageInsertCallBack: i,
            fnOnExpandImage: l,
            showImageActions: u = !0,
            InternalOpenLocalizeImageGroup: x,
          } = t;
          return (0, e.jsx)(ve, {
            clanAccountID: o,
            fileNameSearch: a,
            children: (p, I) =>
              p.map((b) =>
                (0, e.jsx)(
                  me,
                  {
                    clanImage: b,
                    searchStringHilight: I,
                    imageInsertCallBack: i,
                    showImageActions: u,
                    fnOnOpenLocalizedImageGroup: x,
                    OnImageClick: l,
                  },
                  b.imageid,
                ),
              ),
          });
        });
        function ve(s) {
          const { clanAccountID: t, fileNameSearch: a, children: o } = s,
            i = (0, Re.n9)(t),
            l = a.trim().toLowerCase() || "",
            u = Re.pU.GetFilteredClanImagesList(i, l);
          if (u.length == 0) {
            const x = $e.b.InitFromClanID(t);
            let p = Re.pU.GetLoadState(x);
            return p && p.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: E().ResultNotification,
                    children:
                      l.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : p && p.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: E().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", p.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: E().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(u, l);
        }
        function pe(s) {
          const {
            clanAccountID: t,
            fileNameSearch: a,
            onImageSelected: o,
            selectedItem: i,
          } = s;
          return jsx(ve, {
            clanAccountID: t,
            fileNameSearch: a,
            children: (l) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: l.map((u) =>
                  jsx(
                    ya,
                    { clanImage: u, selected: u == i, onImageSelected: o },
                    u.imageid,
                  ),
                ),
              }),
          });
        }
        function me(s) {
          const {
              clanImage: t,
              searchStringHilight: a,
              imageInsertCallBack: o,
              OnImageClick: i,
              showImageActions: l,
              fnOnOpenLocalizedImageGroup: u,
            } = s,
            [x, p] = v.useState(!1),
            I = () => o(t, g.k_eInsertFullImage),
            b = () => o(t, g.k_eInsertVideo),
            C = () => o(t, g.k_eInsertThumbnail),
            S = (ce) => {
              t.url &&
                (ce.dataTransfer.setData("text", t.url),
                Re.pU.GetClanImageDragListener().forEach((je) => {
                  let He = $e.b.InitFromClanID(t.clanAccountID);
                  je(He, !0);
                }));
            },
            y = (ce) => {
              t.url &&
                Re.pU.GetClanImageDragListener().forEach((je) => {
                  let He = $e.b.InitFromClanID(t.clanAccountID);
                  je(He, !1);
                });
            },
            k = (ce) => {
              (0, Qe.pg)(
                (0, e.jsx)(Ee.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: L,
                  onCancel: B,
                  closeModal: B,
                  children: (0, e.jsxs)(v.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, Tt.uX)(ce) ?? window,
              );
            },
            R = (ce) => {
              console.log("ClanImageWrapper on delete error: " + ce),
                (0, Qe.pg)(
                  (0, e.jsx)(Ee.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ce }),
                  }),
                  window,
                );
            },
            L = () => {
              p(!0);
              let ce = $e.b.InitFromClanID(t.clanAccountID);
              Re.pU
                .DeleteClanImage(ce, t)
                .then((je) => {
                  je.success != xa.R && R((0, It.H)(je).strErrorMsg), p(!1);
                })
                .catch((je) => {
                  R((0, It.H)(je).strErrorMsg), p(!1);
                }),
                B();
            },
            B = () => {},
            H = () => {
              i && i(t);
            },
            U = t.file_name ? t.file_name : "",
            K = (0, j.r)(a, U, String(t.imageid), E().Hilight),
            T = ie.zU.BIsClanImageVideo(t),
            te = l && !x && !T,
            De = l && !x && !T,
            Je = l && !x && T,
            gt = l && !x && !T;
          return (0, e.jsx)(ha.K, {
            placeholderHeight: "100vh",
            className: E().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: E().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: E().ImageWrapper,
                  style: {
                    backgroundImage: T ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: S,
                  onDragEnd: y,
                  onDoubleClick: I,
                  onClick: H,
                  children: (0, e.jsx)(Xe, {
                    clanImage: t,
                    className: E().VideoBackground,
                  }),
                }),
                te &&
                  (0, e.jsx)("span", {
                    className: E().Full,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                x &&
                  (0, e.jsx)(wt.t, {
                    size: "medium",
                    className: E().FloatingThrobber,
                  }),
                De &&
                  (0, e.jsx)("span", {
                    className: E().Thumb,
                    onClick: C,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                gt &&
                  u &&
                  (0, e.jsx)(Le, {
                    bDeleting: x,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: u,
                  }),
                Je &&
                  (0, e.jsx)("span", {
                    className: E().Full,
                    onClick: b,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !x &&
                  (0, e.jsx)("span", {
                    className: E().Delete,
                    onClick: k,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: E().ImageWrapperFilename,
                  title: U,
                  children: K,
                }),
              ],
            }),
          });
        }
        function Le(s) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: a,
              bDeleting: o,
            } = s,
            { data: i } = (0, fe.hM)(t.clanAccountID);
          return o || !i?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, G.A)(E().Localized, O().ValveOnlyBackground),
                onClick: () => a?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function Xe(s) {
          const { clanImage: t, className: a } = s;
          return ie.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: a,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == Jt.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function ya(s) {
          const { clanImage: t, onImageSelected: a, selected: o } = s;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              o && styles.Selected,
            ),
            onClick: () => a(t, !1),
            onDoubleClick: () => a(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(Xe, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function Ja(s) {
          const { clanSteamID: t, closeModal: a, OnClanImageSelected: o } = s,
            i = v.useCallback(
              (x, p) => {
                o?.(x, p), a?.();
              },
              [o, a],
            ),
            [l, u] = v.useState("");
          return (0, e.jsxs)(Ee.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: a,
            onCancel: a,
            children: [
              (0, e.jsx)(P, { fnSetImageSearch: u }),
              (0, e.jsx)(z, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: l,
                imageInsertCallBack: i,
                showImageActions: !1,
              }),
            ],
          });
        }
        function pn(s) {
          const { clanSteamID: t, OnClanImageSelected: a } = s;
          return (0, e.jsxs)("div", {
            className: jt().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: jt().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  (0, Qe.pg)(
                    (0, e.jsx)(Ja, { clanSteamID: t, OnClanImageSelected: a }),
                    (0, Tt.uX)(o) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function fn(s) {
          const {
              clanSteamID: t,
              rgSupportArtwork: a,
              localizedPrimaryImage: o,
              bAllowPreviousClanImageSelection: i,
              fnSetImageURL: l,
              rgRealmList: u,
            } = s,
            [x] = (0, _.q3)(() => [dt.O.Get().GetCurEditLanguage()]),
            p = (0, va.zO)(t, a, o),
            I = s.uploaderOverride || p,
            [b, C] = v.useState(!1),
            S = v.useCallback(
              async (R, L) => {
                if (!b) {
                  C(!0);
                  try {
                    const { language: B } = (0, xt.jj)(R.file_name ?? "", x),
                      H = (0, xt.PD)(B, x, u);
                    await I.AddExistingClanImage(R, H);
                  } catch (B) {
                    let H = (0, It.H)(B);
                    console.error("AddExistingClanImage: " + H.strErrorMsg, H),
                      (0, Qe.pg)(
                        (0, e.jsx)(Ee.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            H.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  C(!1);
                }
              },
              [b, I, x, u],
            ),
            y = v.useMemo(
              () =>
                i
                  ? [
                      [
                        (0, e.jsx)(
                          pn,
                          { clanSteamID: t, OnClanImageSelected: S },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [S, i, t],
            ),
            k = (R) => {
              for (const L of R) {
                const B = L.uploadResult;
                if (B?.origimagehash) {
                  const H = (0, xt.PD)(B.language, x, u);
                  Ne.AddLocalizeImageUploaded(B.origimagehash, H);
                } else {
                  const H = Re.pU.GetClanImageByImageHash(
                      t,
                      B?.image_hash ?? "",
                    ),
                    U = L.image.GetCurrentImageOption();
                  if (H && U) {
                    const K = (0, xt.PD)(L.image.language, x, u);
                    l(U.artworkType, H, K);
                  }
                }
              }
            };
          return (0, e.jsx)(Qa, {
            ...s,
            imageUploader: I,
            rgRealmList: u,
            elAdditonalButtons: b
              ? [
                  (0, e.jsx)(
                    wt.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : y,
            fnUploadComplete: k,
          });
        }
        var ea = r(25279),
          vn = r(25359),
          Se = r.n(vn),
          xn = r(24806);
        function rn(s) {
          const {
              clanImage: t,
              closeModal: a,
              lang: o,
              fnOnArtworkLangChange: i,
              realms: l,
              fnLangHasData: u,
            } = s,
            [x, p] = (0, v.useState)(o),
            I = $e.b.InitFromClanID(t.clanAccountID),
            b = (0, _.q3)(() =>
              ie.zU.GenerateURLFromHashAndExt(I, ie.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(Ee.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => i?.(t, o, x),
            onCancel: a,
            closeModal: a,
            children: (0, e.jsxs)("div", {
              className: (0, G.A)(O().FlexColumnContainer, Se().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: Se().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: Se().ArtworkPreview,
                    src: b,
                  }),
                }),
                (0, e.jsx)(xn.Ng, {
                  selectedLang: x,
                  fnLangHasData: u,
                  fnOnLanguageChanged: p,
                  realms: l,
                }),
              ],
            }),
          });
        }
        var Aa = r(56330);
        function $a(s) {
          if (!s) return s;
          const t = s.lastIndexOf(".");
          return t === -1 ? s : s.substring(0, t);
        }
        var In = r(58483),
          jn = r(82385),
          bn = r(94520),
          Cn = r(95174),
          _n = r(9709),
          qa = r(64868),
          En = r(44894);
        const yn =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var An = r(11243);
        function Sn(s) {
          const {
            clanSteamID: t,
            fnGetImageHash: a,
            fnLangHasData: o,
            fnOnRemoveImage: i,
          } = s;
          (0, Re.mr)(t.GetAccountID());
          const l = v.useMemo(() => {
              let I = new Array();
              const b = c.A0.GetLanguageListForRealms([
                Xt.TU.k_ESteamRealmGlobal,
                Xt.TU.k_ESteamRealmChina,
              ]);
              for (const C of b) {
                const S = a(C);
                if (S) {
                  const y = (0, W.LgB)(C),
                    k = (0, c.we)("#Language_" + y);
                  I.push({ lang: C, strLang: y, locLang: k, imgHash: S });
                }
              }
              return (
                (I = I.sort((C, S) =>
                  C.locLang > S.locLang ? 1 : C.locLang < S.locLang ? -1 : 0,
                )),
                I
              );
            }, [a]),
            [u, x, p] = (0, qa.uD)();
          return (0, e.jsxs)("div", {
            className: Se().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: Se().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: Se().LanguageListContainer,
                children: l.map((I) =>
                  (0, e.jsx)(
                    Dn,
                    { langData: I, ...s },
                    "lang_select_" + t.GetAccountID() + " " + I.strLang,
                  ),
                ),
              }),
              !!i &&
                (0, e.jsxs)(ne.$n, {
                  onClick: x,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(An.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(Ee.EN, {
                active: u,
                children: (0, e.jsx)(Ee.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: p,
                  onOK: () => {
                    for (let I = 0; I < W.bP9; I++) o && i && o(I) && i(I);
                  },
                }),
              }),
            ],
          });
        }
        function Dn(s) {
          const {
              clanSteamID: t,
              langData: a,
              langOverride: o,
              fnOnLanguagePreviewChange: i,
              fnOnArtworkLangChange: l,
              fnOnRemoveImage: u,
            } = s,
            [x, p] = (0, _.q3)(() => {
              const I = Re.pU.GetClanImageByImageHash(t, a.imgHash);
              let b = "";
              I &&
                (b = ie.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  ie.zU.GetHashAndExt(I),
                  rt.wI.full,
                  a.lang,
                ));
              let C = Se().LanguageSelectorSelected;
              return (
                o != a.lang &&
                  (C = a.imgHash
                    ? Se().LanguageSelector
                    : Se().LanguageSelectorNoData),
                [b, C]
              );
            });
          return (0, e.jsxs)("div", {
            id: a.strLang,
            className: Se().LanguageContainer,
            onClick: (I) => {
              let b = (0, W.sfN)(I.currentTarget.id);
              i(b);
            },
            children: [
              (0, e.jsx)("div", { className: p, children: a.locLang }),
              (0, e.jsxs)("span", {
                className: Se().LanguageOptions,
                children: [
                  !!x &&
                    (0, e.jsx)("a", {
                      href: x,
                      target: "_blank",
                      children: (0, e.jsx)(st.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: qe.YNO(),
                      }),
                    }),
                  !!l && (0, e.jsx)(wn, { ...s }),
                  !!u && (0, e.jsx)(Bn, { fnOnRemoveImage: u, langData: a }),
                ],
              }),
            ],
          });
        }
        function wn(s) {
          const {
              clanSteamID: t,
              langData: a,
              fnOnArtworkLangChange: o,
              fnGetImageHash: i,
              fnLangHasData: l,
              realms: u,
            } = s,
            [x, p, I] = (0, qa.uD)(),
            b = (0, _.q3)(() => {
              const C = i(a.lang);
              return (
                (0, Bt.wT)(
                  !C || !C.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + C,
                ),
                Re.pU.GetClanImageByImageHash(t, C)
              );
            });
          if (!b) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(st.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: yn,
                  onClick: () => p(),
                }),
              }),
              (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(Ee.EN, {
                  active: x,
                  children: (0, e.jsx)(rn, {
                    clanImage: b,
                    lang: a.lang,
                    fnOnArtworkLangChange: o,
                    fnLangHasData: l,
                    realms: u,
                    closeModal: I,
                  }),
                }),
              }),
            ],
          });
        }
        function Bn(s) {
          const { fnOnRemoveImage: t, langData: a } = s,
            [o, i, l] = (0, qa.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(st.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: En.A,
                  onClick: i,
                }),
              }),
              (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(Ee.EN, {
                  active: o,
                  children: (0, e.jsx)(Ee.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, W.LgB)(a.lang)),
                    ),
                    onOK: () => {
                      t(a.lang);
                    },
                    closeModal: l,
                  }),
                }),
              }),
            ],
          });
        }
        var en = r(13465),
          Mn = r(21659),
          Ln = r(15496),
          ze = r.n(Ln),
          Tn = r(88812);
        function Nn(s) {
          const {
              event: t,
              spotlightURLOverride: a,
              fnHandleOpenEvent: o,
              fnImageFailureCallback: i,
              fnFilterImageURLsForKnownFailures: l,
              langOverride: u,
            } = s,
            x = (0, Mn.c5)(),
            p = v.useCallback(
              (B) => {
                B.preventDefault(), o && o(t);
              },
              [t, o],
            ),
            I = u || (0, W.sfN)($.TS.LANGUAGE),
            [b, C, S] = (0, _.q3)(() => [
              t.GetSummaryWithFallback(I),
              t.GetNameWithFallback(I),
              t.BShowLibrarySpotlightText(),
            ]);
          let y = "spotlight",
            k = rt.wI.spotlight_main;
          (t.appid == 2434320 || $.TS.EUNIVERSE == W.Rv) &&
            ((y = x
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (k = rt.wI.full));
          let R =
            (0, Tn.WC)(a !== void 0 ? void 0 : t, y, I, k) ??
            (a !== void 0 ? [a] : []);
          l && R && (R = l(R));
          const L = b.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(v.Fragment, {
            children: (0, e.jsx)("div", {
              className: ze().MajorEvent_Ctn,
              ref: s.containerRef,
              children: (0, e.jsxs)(X.Z, {
                className: (0, G.A)(
                  ze().AppDetailsSpotlightContainer,
                  ze().MajorEventContainer,
                ),
                onActivate: p,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: ze().MajorEventBackground,
                    children: (0, e.jsx)(en.c, {
                      className: ze().MajorEventImageBackgroundBlur,
                      rgSources: R,
                      onIncrementalError: (B, H, U) => i && i(H),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: ze().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(en.c, {
                        className: ze().MajorEventImage,
                        rgSources: R,
                        onIncrementalError: (B, H, U) => i && i(H),
                      }),
                      (0, e.jsx)("div", {
                        className: ze().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: ze().MajoreEventImageContentContainer,
                        children:
                          S &&
                          (0, e.jsxs)("div", {
                            className: ze().MajorEventContent,
                            children: [
                              (0, e.jsx)(en.c, {
                                className: ze().MajorEventSpotlightBackground,
                                rgSources: R,
                                onIncrementalError: (B, H, U) => i && i(H),
                              }),
                              (0, e.jsxs)("div", {
                                className: ze().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: ze().MajorEventTitle,
                                    children: C,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: ze().MajorEventSummary,
                                    children: L,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: ze().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Pn = r(79949),
          Te = r.n(Pn);
        function kn(s) {
          const {
              langOverride: t,
              artworkType: a,
              fnOnLanguagePreviewChange: o,
              clanSteamID: i,
              eventModel: l,
              partnerEventStore: u,
              fnOnRemoveImage: x,
              fnOnArtworkLangChange: p,
              realms: I,
              fnLangHasData: b,
              fnGetImageHashAndExt: C,
            } = s,
            S = C(a, t),
            y = S
              ? ie.zU.GenerateURLFromHashAndExtAndLang(i, S, rt.wI.full, t)
              : "",
            [k] = (0, _.q3)(() => [zn(a, C)]);
          return k == 0
            ? (0, e.jsxs)("div", {
                className: Se().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(on, {
                      imgURL:
                        $.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: l,
                    }),
                  a === "background" &&
                    (0, e.jsx)(ln, {
                      imgURL:
                        $.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(a) &&
                    (0, e.jsx)(Gn, {
                      langOverride: t,
                      artworkType: a,
                      eventModel: l,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: Se().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(on, {
                      imgURL: y,
                      eventModel: l,
                      langOverride: t,
                    }),
                  a === "background" &&
                    (0, e.jsx)(ln, {
                      imgURL: y,
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  a === "spotlight" &&
                    (0, e.jsx)(Sa, { imgURL: y, event: l, lang: t }),
                  a === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Sa, { imgURL: y, event: l, lang: t }),
                  a === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Sa, { imgURL: y, event: l, lang: t }),
                  (a === "broadcast_left" || a === "broadcast_right") &&
                    (0, e.jsx)(Rn, {
                      imgURL: y,
                      side: a === "broadcast_right" ? "right" : "left",
                    }),
                  a === "sale_header" && (0, e.jsx)(Un, { imgURL: y }),
                  a === "sale_overlay" && (0, e.jsx)(Fn, { imgURL: y }),
                  rt.pb.includes(a) &&
                    (0, e.jsx)("img", {
                      className: _n.PreviewImg,
                      src:
                        Ne.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
                    }),
                  a === "product_banner" && (0, e.jsx)(ta, { imgURL: y }),
                  a === "product_mobile_banner" &&
                    (0, e.jsx)(ta, { imgURL: y }),
                  a === "sale_logo" && (0, e.jsx)(ta, { imgURL: y }),
                  a === "bestofyear_banner" && (0, e.jsx)(ta, { imgURL: y }),
                  a === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(ta, { imgURL: y }),
                  (0, e.jsx)(Sn, {
                    langOverride: t,
                    clanSteamID: i,
                    fnOnLanguagePreviewChange: o,
                    fnOnRemoveImage: x,
                    fnOnArtworkLangChange: p,
                    realms: I,
                    fnLangHasData: b,
                    fnGetImageHash: (R) => $a(C(a, R) ?? ""),
                  }),
                ],
              });
        }
        function Es(s) {
          const { artworkType: t } = s,
            a = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [a.width, " X ", a.height],
              }),
            ],
          });
        }
        function Gn(s) {
          const { artworkType: t, langOverride: a, eventModel: o } = s,
            i = ea.Fj[t],
            l = v.useMemo(
              () =>
                On(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${i.width} X ${i.height}`,
                ),
              [i.height, i.width, t],
            );
          return (0, e.jsx)(Sa, { lang: a, imgURL: l, event: o });
        }
        function On(s, t) {
          const i = document.createElement("canvas");
          (i.width = 780), (i.height = 200);
          const l = i.getContext("2d"),
            u = 20;
          for (let I = 0; I < 200; I += u)
            for (let b = 0; b < 780; b += u)
              (l.fillStyle =
                (b / u + I / u) % 2 === 0 ? "#a405e3ff" : "#000000"),
                l.fillRect(b, I, u, u);
          const x = l.createLinearGradient(0, 0, 780, 0);
          x.addColorStop(0, "rgba(32,32,32,0.8)"),
            x.addColorStop(1, "rgba(60,60,60,0.8)"),
            (l.fillStyle = x),
            l.fillRect(0, 0, 780, 200);
          const p = l.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            p.addColorStop(0, "rgba(0,0,0,0)"),
            p.addColorStop(1, "rgba(0,0,0,0.6)"),
            (l.fillStyle = p),
            l.fillRect(0, 0, 780, 200),
            (l.fillStyle = "#fff"),
            (l.font = "32px Arial"),
            (l.textAlign = "center"),
            (l.textBaseline = "middle"),
            l.fillText(s, 780 / 2, 200 / 2 - 20),
            t &&
              ((l.font = "18px Arial"), l.fillText(t, 780 / 2, 200 / 2 + 25)),
            i.toDataURL("image/png")
          );
        }
        function on(s) {
          const { imgURL: t, eventModel: a, langOverride: o } = s,
            i = (0, dt.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(Cn.u, {
              event: a,
              imageURLOverride: t,
              langOverride: o ?? i,
            }),
          });
        }
        function ln(s) {
          const { lang: t, eventModel: a, partnerEventStore: o } = s,
            i = (0, In.LJ)(),
            [l, u, x, p, I] = (0, _.q3)(() => [
              a.GetNameWithFallback(t),
              a.GetDescriptionWithFallback(t),
              a.GetSubTitleWithLanguageFallback(t),
              a.type,
              a.AnnouncementGID,
            ]);
          let b = u
            ? (0, e.jsx)(bn.fh, {
                text: u || "",
                showErrorInfo: !1,
                event: a,
                languageOverride: dt.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Te().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Te().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, G.A)(
                  Te().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Te().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Te().MainImageCtn,
                      children: (0, e.jsx)("img", { src: s.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Te().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Te().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Te().TextTitle,
                            children:
                              l ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Te().TextSubTitle,
                            children:
                              x ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Te().TextBody,
                            children: b,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              p != W.Fwr &&
                (0, e.jsxs)(v.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Te().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Te().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, G.A)(
                        Te().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Te().DetailExample2,
                        children: (0, e.jsx)(
                          jn.He,
                          {
                            event: a,
                            emoticonStore: i,
                            partnerEventStore: o,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          I,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Sa = (s) => {
            const [t] = (0, Ht.t7)(s.event.appid, { include_assets: !0 });
            if (!t) return null;
            const a = t.GetName(),
              o = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Te().SpotlightExample,
              children: (0, e.jsx)(Nn, {
                event: s.event,
                strDisplayName: a ?? "",
                gameIconUrl: o,
                spotlightURLOverride: s.imgURL,
                langOverride: s.lang,
              }),
            });
          },
          Rn = (s) => {
            const t = [
              (0, e.jsx)("img", { src: s.imgURL }, "img"),
              (0, e.jsx)("div", { className: Se().BroadcastPreview }, "video"),
            ];
            return (
              s.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Te().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Un = (s) =>
            (0, e.jsx)("div", {
              className: Te().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Fn = (s) =>
            (0, e.jsx)("div", {
              className: Te().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          ta = (s) =>
            (0, e.jsx)("div", {
              className: Te().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            });
        function zn(s, t) {
          let a = 0;
          for (let o = W.Bhc; o < W.bP9; ++o)
            (t(s, o)?.length ?? 0) > 0 && (a += 1);
          return a;
        }
        var Hn = Object.defineProperty,
          Wn = Object.getOwnPropertyDescriptor,
          cn = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Wn(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Hn(t, a, i), i;
          };
        const Yn =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Vn = ((s) => (
          (s[(s.k_None = 0)] = "k_None"),
          (s[(s.k_Suggested = 1)] = "k_Suggested"),
          (s[(s.k_Required = 2)] = "k_Required"),
          (s[(s.k_Requested = 3)] = "k_Requested"),
          s
        ))(Vn || {});
        function Kn(s) {
          const {
              artworkType: t,
              headerHint: a,
              appid: o,
              fnToggleMinimize: i,
              realms: l,
              eventModel: u,
              fnLangHasData: x,
              fnGetImageHashAndExt: p,
              fnSetImageURL: I,
              partnerEventStore: b,
            } = s,
            [C] = (0, Ht.t7)(o, { include_assets: !0 }),
            [S, y] = (0, _.q3)(() => [
              u?.GetEventType(),
              u?.BHasTag("vo_marketing_message"),
            ]),
            k = S == W.ajI;
          let R = null;
          a === 2
            ? (R = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : a === 1
              ? (R = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : a === 3 &&
                (R = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let L = null;
          t === "capsule"
            ? k
              ? (L = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (L = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!y &&
                      (0, e.jsxs)("div", {
                        className: Se().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${$.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, c.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (L = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, c.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, c.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (L = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (L = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, c.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, c.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (L = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (L = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: O().EventElementRequired,
                              children: (0, c.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, c.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, c.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? C &&
                          (L = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !C.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Aa.ErrorStylesBackground,
                                  children: (0, c.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : t === "localized_image_group" ||
                            t === "link_capsule" ||
                            t === "sale_section_title" ||
                            t === "schedule_track_art" ||
                            t === "localized_background_art"
                          ? (L = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Yn,
                                      target: $.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, c.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (L = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: O().EventElementOptional,
                                    children: (0, c.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, c.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, c.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (L = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: O().EventElementOptional,
                                      children: (0, c.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, c.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, c.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, c.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (L = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (L = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: O().EventElementOptional,
                                          children: (0, c.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (L = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: O().EventElementRequired,
                                          children: (0, c.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const B = ea.Fj[s.artworkType].width,
            H = ea.Fj[s.artworkType].height;
          return (0, e.jsxs)("div", {
            id: s.id,
            className: Se().ArtworkSelectorContainer,
            children: [
              !!s.title &&
                (0, e.jsxs)("div", {
                  className: Se().Title,
                  onDoubleClick: i,
                  children: [
                    s.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    R,
                    i &&
                      (0, e.jsx)(ne.$n, {
                        onClick: i,
                        children: (0, e.jsx)(st.he, {
                          toolTipContent: (0, c.we)(
                            s.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: s.bIsMinimized
                            ? (0, e.jsx)(qe.hz4, {})
                            : (0, e.jsx)(qe.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, G.A)(Se().SelectImageBlock, Se().Tips),
                  children: [
                    L,
                    !!(B && H) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, c.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, c.PP)(
                            "#selectimage_tip1",
                            (0, ea.qj)(B),
                            (0, ea.qj)(H),
                          ),
                        ],
                      }),
                    !!s.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Aa.WarningStylesWithIcon,
                          children: s.strWarning,
                        }),
                      }),
                    s.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    s.elAdditionalControls,
                    !!s.fnRemoveAllArtwork &&
                      (0, e.jsx)(ne.$n, {
                        onClick: (U) => {
                          (0, Qe.pg)(
                            (0, e.jsx)(Zn, {
                              fnRemoveAllArtwork: s.fnRemoveAllArtwork,
                            }),
                            (0, Tt.uX)(U) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsx)(Qn, {
                  clanSteamID: s.clanSteamID,
                  title: s.title ?? "",
                  eventModel: u,
                  artworkType: s.artworkType,
                  realms: l,
                  appid: o,
                  fnGetImageHashAndExt: p,
                  fnSetImageURL: I,
                  fnLangHasData: x,
                  partnerEventStore: b,
                }),
            ],
          });
        }
        function Zn(s) {
          const { fnRemoveAllArtwork: t, closeModal: a } = s;
          return (0, e.jsx)(Ee.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), a?.();
            },
            onCancel: a,
          });
        }
        function Qn(s) {
          const {
              artworkType: t,
              realms: a,
              clanSteamID: o,
              fnLangHasData: i,
              fnGetImageHashAndExt: l,
              fnSetImageURL: u,
              eventModel: x,
              appid: p,
              partnerEventStore: I,
            } = s,
            b = t === "localized_image_group",
            [C, S] = v.useState((0, dt.E)()),
            [y, k] = v.useState(new Array()),
            R = v.useCallback(
              (B, H, U) => {
                let K = [];
                y.find((te) => te.clanImage.imageid == B.imageid)
                  ? (K = y.map((te) =>
                      te.clanImage.imageid == B.imageid
                        ? { clanImage: B, lang: H }
                        : te,
                    ))
                  : U && (K = y.concat({ clanImage: B, lang: H })),
                  k(K);
              },
              [y],
            ),
            L = v.useCallback(
              (B, H, U) => {
                (0, zt.h5)(() => {
                  $a(l(t, H) ?? "") == B.image_hash && u(t, null, H),
                    u(t, B, U),
                    R(B, U, !1);
                });
              },
              [l, t, u, R],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(ne.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${$.TS.PARTNER_BASE_URL}admin/game/editbyappid/${p}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Da, {
                    list: y,
                    fnOnArtworkLanguageChange: L,
                    realms: a,
                    fnLangHasData: i,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, G.A)(
                        Se().SelectImageBlock,
                        Se().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(kn, {
                        eventModel: x,
                        clanSteamID: o,
                        fnOnLanguagePreviewChange: (B) => {
                          B != C && S(B);
                        },
                        langOverride: C,
                        fnOnArtworkLangChange: b ? null : L,
                        artworkType: t,
                        fnOnRemoveImage: b ? null : (B) => u(t, null, B),
                        realms: a,
                        fnLangHasData: i,
                        fnGetImageHashAndExt: l,
                        partnerEventStore: I,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Da = class extends v.Component {
          ShowLangChangeDialog(s, t) {
            const {
              fnOnArtworkLanguageChange: a,
              realms: o,
              fnLangHasData: i,
            } = this.props;
            (0, Qe.pg)(
              (0, e.jsx)(rn, {
                clanImage: s,
                lang: t,
                fnOnArtworkLangChange: a,
                fnLangHasData: i,
                realms: o,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let s = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((a) => {
                const { clanImage: o, lang: i } = a;
                let l = (0, c.we)("#Language_" + (0, W.LgB)(i));
                s.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: O().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping",
                            o.file_name ?? "",
                            l,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(o, i),
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + a.clanImage.imageid + "_" + i,
                  ),
                );
              }),
              s
            );
          }
          render() {
            const { list: s } = this.props;
            if (!s || s.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: Se().UploadSuccess,
              children: t,
            });
          }
        };
        cn([Pe.oI], Da.prototype, "ShowLangChangeDialog", 1),
          (Da = cn([ja.PA], Da));
        var Xn = r(6658);
        function Jn(s) {
          const {
              clanSteamID: t,
              appid: a,
              eventModel: o,
              realms: i,
              loc_images: l,
              artworkType: u,
              fnLangHasData: x,
              closeModal: p,
              fnSetImageURL: I,
              partnerEventStore: b,
            } = s,
            [C, S] = (0, v.useState)(!1),
            y = (0, va.zO)(t, u),
            k = t.GetAccountID(),
            [R] = (0, _.q3)(() => [
              y.GetFilesToUpload().length - y.GetCompletedFiles(),
            ]);
          (0, v.useEffect)(() => {
            S(!1),
              Ne.ClearImageGroup(),
              l?.forEach((U, K) => {
                const T = $e.b.InitFromClanID(k);
                if (Ne.GetAllLocalizedGroupImages().length == 0) {
                  const te = U && ie.zU.GetHashFromHashAndExt(U),
                    De = te && Re.pU.GetClanImageByImageHash(T, te);
                  De && Ne.SetPrimaryImageForImageGroup(De, u);
                }
                Ne.SetLocalizedImageGroupAtLang(K, T, U ?? null);
              }),
              S(!0);
          }, [l, k, u]);
          const L = (0, v.useCallback)(
              (U, K, T = W.Bhc) => {
                const te = $e.b.InitFromClanID(k),
                  De = ie.zU.GetHashAndExt(K ?? null);
                if (Ne.GetAllLocalizedGroupImages().length == 0) {
                  const Je = De && ie.zU.GetHashFromHashAndExt(De),
                    gt = Je && Re.pU.GetClanImageByImageHash(te, Je);
                  gt && Ne.SetPrimaryImageForImageGroup(gt, U);
                }
                Ne.SetLocalizedImageGroupAtLang(T, te, De);
              },
              [k],
            ),
            B = (0, v.useCallback)((U, K) => {
              const te =
                Ne.GetLocalizedImageGroupForEdit()?.localized_images[K];
              return te && te.split("/").pop();
            }, []),
            H = () => {
              const U = Ne.GetLocalizedImageGroupForEdit();
              for (let K = W.Bhc; K < W.bP9; ++K) {
                const T = U?.localized_images[K];
                if (T) {
                  const te = T.split("/").pop() || "";
                  I(
                    u,
                    {
                      image_hash: $a(te),
                      clanAccountID: k,
                      file_type: (0, Xn.yh)(te) ?? Jt.bg.w3,
                      imageid: 0,
                    },
                    K,
                  );
                } else I(u, null, K);
              }
              Ne.ClearImageGroup(), s.onOK ? s.onOK() : p?.();
            };
          return (0, e.jsxs)(Ee.o0, {
            onCancel: p,
            closeModal: p,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, G.A)(Aa.NotTooWideModal, Aa.ImageManageDialog),
            strTitle: s.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: s.strLocalizedDescription,
            bOKDisabled: R > 0,
            onOK: H,
            strOKButtonText:
              R > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              C
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(fn, {
                        clanSteamID: t,
                        rgSupportArtwork: [u],
                        fnSetImageURL: L,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: i ?? [],
                        uploaderOverride: y,
                      }),
                      (0, e.jsx)(Kn, {
                        clanSteamID: t,
                        eventModel: o,
                        artworkType: u,
                        title: null,
                        appid: a,
                        realms: i,
                        fnRemoveAllArtwork: () => Ne.ClearImageGroup(),
                        fnSetImageURL: L,
                        fnGetImageHashAndExt: B,
                        fnLangHasData: x,
                        partnerEventStore: b,
                      }),
                    ],
                  })
                : (0, e.jsx)(wt.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              s.children,
            ],
          });
        }
        function $n(s) {
          const { setting: t, fnUpdateSetting: a, label: o } = s,
            i = v.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ne.JU, {
                children: o || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(ne.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "no-repeat",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var qn = r(94381);
        function es(s) {
          const {
              closeModal: t,
              imgGroup: a,
              fnUpdateImageGroup: o,
              eventModel: i,
            } = s,
            { openColorPicker: l } = Oa(),
            [u, x] = (0, v.useState)(() => a),
            [p, I, b, C, S, y, k, R] = (0, _.q3)(() => [
              u.repeat_setting,
              u.scaling_setting,
              u.background_color1,
              u.background_color2,
              u.gradient_setting,
              u.position_setting,
              i.GetIncludedRealmList(),
              u.randomize_section_order,
            ]),
            [L] = (0, v.useState)(() => ts(u.localized_background_art ?? {}));
          return (0, e.jsxs)(Jn, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: i.appid,
            eventModel: i,
            clanSteamID: i.clanSteamID,
            closeModal: t,
            partnerEventStore: Pa.O3,
            artworkType: "localized_background_art",
            realms: k,
            loc_images: L,
            fnLangHasData: (B) => !!L[B],
            fnGetImageHash: (B, H) => L[H],
            fnSetImageURL: async (B, H, U) => {
              x((K) => {
                const T = { ...K.localized_background_art },
                  te = ie.zU.GetHashAndExt(H);
                return (
                  te ? (T[(0, W.LgB)(U)] = te) : delete T[(0, W.LgB)(U)],
                  { ...K, localized_background_art: T }
                );
              });
            },
            onOK: () => {
              x((B) => (o(B), t && setTimeout(t, 1), { ...B }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: et().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: et().ImageOptions,
                    children: [
                      (0, e.jsx)($n, {
                        setting: p,
                        fnUpdateSetting: (B) => {
                          x(
                            B !== "no-repeat"
                              ? {
                                  ...u,
                                  repeat_setting: B,
                                  scaling_setting: "auto",
                                }
                              : { ...u, repeat_setting: B },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(as, {
                        scaling_setting: I ?? "contain",
                        disable: p !== "no-repeat",
                        fnUpdateSetting: (B) => x({ ...u, scaling_setting: B }),
                      }),
                      I != "cover" &&
                        (0, e.jsx)(ss, {
                          position_settings: y,
                          fnUpdateSetting: (B) =>
                            x({ ...u, position_setting: B }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: et().ColorOptions,
                    children: [
                      (0, e.jsx)(ne.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ft().ColorCtn,
                        children: [
                          (0, e.jsx)(ne.$n, {
                            style: { backgroundColor: b },
                            onClick: (B) =>
                              l(B, {
                                color: b ?? "",
                                onChange: (H) =>
                                  x({ ...u, background_color1: H }),
                              }),
                            children: (0, c.we)(
                              b === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(ne.$n, {
                            onClick: () =>
                              x({ ...u, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: et().SwapColorsCtn,
                        children: (0, e.jsx)(ne.$n, {
                          onClick: () =>
                            x({
                              ...u,
                              background_color1: C,
                              background_color2: b,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      S !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Ft().ColorCtn,
                          children: [
                            (0, e.jsx)(ne.$n, {
                              style: { backgroundColor: C },
                              onClick: (B) =>
                                l(B, {
                                  color: C ?? "",
                                  onChange: (H) =>
                                    x({ ...u, background_color2: H }),
                                }),
                              children: (0, c.we)(
                                C === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(ne.$n, {
                              onClick: () =>
                                x({ ...u, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(ns, {
                        gradient: S ?? "top-to-bottom",
                        fnUpdateSetting: (B) =>
                          x({ ...u, gradient_setting: B }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Yt, {
                clanSteamID: i.clanSteamID,
                children: (0, e.jsx)(qn.S, {
                  checked: !!R,
                  onChange: (B) => {
                    u.randomize_section_order = B;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function ts(s) {
          const t = Ot.$Y([], W.bP9, null);
          for (const a in s) {
            const o = (0, W.sfN)(a);
            o != W.xPp && (t[o] = s[a]);
          }
          return t;
        }
        function as(s) {
          const {
              scaling_setting: t,
              fnUpdateSetting: a,
              label: o,
              disable: i,
            } = s,
            l = v.useMemo(() => {
              const u = [];
              return (
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                u
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ne.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(ne.m, {
                strDropDownClassName: N.DropDownScroll,
                disabled: i,
                rgOptions: l,
                selectedOption: t || "cover",
                onChange: (u) => a(u.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function ns(s) {
          const { gradient: t, fnUpdateSetting: a, label: o } = s,
            i = v.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ne.JU, {
                children: o || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(ne.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "top-to-bottom",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function ss(s) {
          const { position_settings: t, fnUpdateSetting: a, label: o } = s,
            i = v.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ne.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(ne.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "unset",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function rs(s) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: a,
              fnSetBackgroundImgGroupEditMode: o,
              bShowAsValveOnly: i,
            } = s,
            [l, u] = (0, v.useState)(t.BIsBackgroundImageEnabled()),
            [x, p, I] = (0, Pe.uD)(),
            b = (0, _.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, G.A)(et().Ctn, i && N.ValveOnlyBackground),
            children: (0, e.jsxs)(J.tH, {
              children: [
                (0, e.jsx)(ne.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: l,
                  onChange: (C) => {
                    u(C), t.SetBackgroundImageEnabled(C);
                  },
                }),
                l
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(ne.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: a,
                          onChange: o,
                        }),
                        (0, e.jsx)(ne.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: b,
                          onChange: (C) =>
                            t.SetSalePageLastCoverSectionUntilEnd(C),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(ne.$n, {
                          onClick: p,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(Ee.EN, {
                          active: x,
                          children: (0, e.jsx)(Ee.o0, {
                            strTitle: (0, c.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, c.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), u(!1);
                            },
                            closeModal: I,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${Ma.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const tn = v.forwardRef(function (t, a) {
          const {
              imgGroupDerivedMapping: o,
              backgroundImageEditModel: i,
              groupIndex: l,
              imgGroup: u,
              eventModel: x,
              nTabIndex: p,
            } = t,
            I = (0, dt.E)(),
            [b, C, S, y] = (0, _.q3)(() => [
              u && o.mapGroupToSections.get(u.background_id),
              (u &&
                o.mapGroupToSections.get(u.background_id)?.sectionUniqueIDs) ??
                [],
              p != null
                ? i?.GetTabLastCoverSectionUntilEnd(p)
                : i?.GetSalePageLastCoverSectionUntilEnd(),
              p != null ? i?.GetTabGroupCount(p) : i?.GetSalePageGroupCount(),
            ]),
            k = S && l + 1 === y,
            [R, L, B] = (0, Pe.uD)(),
            [H, U, K] = (0, Pe.uD)();
          let T;
          b?.nUniqueIDNextSaleSection &&
            (T = (0, nt.h_)(
              se.HY,
              i.GetSaleSectionByID(b?.nUniqueIDNextSaleSection),
              I,
              x,
              b.nSaleSectionLastIndex + 1,
            ));
          let te;
          if (b && C?.length > 1) {
            const De = C[C.length - 1];
            te = (0, nt.h_)(
              se.HY,
              i?.GetSaleSectionByID(De),
              I,
              x,
              b.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(we.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              p != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              l + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: a,
              children: [
                (0, e.jsx)(ne.$n, {
                  onClick: L,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(Ee.EN, {
                  active: R,
                  children: (0, e.jsx)(es, {
                    imgGroup: u,
                    closeModal: B,
                    eventModel: x,
                    fnUpdateImageGroup: (De) =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, De)
                        : i.SetSalePageBackgroundGroup(l, De),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: et().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    C.map((De) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, nt.h_)(
                            se.W3,
                            i.GetSaleSectionByID(De),
                            I,
                            x,
                            i.GetSaleSectionIndexByID(De, !0),
                          ),
                        },
                        "li_" + De,
                      ),
                    ),
                    !!k &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!te &&
                  (0, e.jsx)(ne.$n, {
                    onClick: () =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Reduce", te),
                  }),
                !!T &&
                  (0, e.jsx)(ne.$n, {
                    onClick: () =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Extend", T),
                  }),
                l > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(ne.$n, {
                        onClick: U,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(Ee.EN, {
                        active: H,
                        children: (0, e.jsx)(Ee.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            p != null
                              ? i.RemoveTabBackgroundGroup(p, l)
                              : i.RemoveSalePageBackgroundGroup(l),
                          closeModal: K,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function os(s) {
          const { backgroundImageEditModel: t, nTabID: a } = s;
          return (0, e.jsx)("div", {
            className: et().CtnEditor,
            children: (0, e.jsx)(ne.$n, {
              onClick: (o) =>
                a !== void 0 && a >= 0
                  ? t?.AddTabBackgroundGroup(a)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, c.we)(
                a !== void 0 && a >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function is(s) {
          const {
              nTabID: t,
              nSectionUniqueID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l = o.mapFirstSectionToGroup.get(a);
          return a == o.nFirstSaleSectionIDWithoutGroup ||
            a == o.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(os, { backgroundImageEditModel: i, nTabID: t })
            : l
              ? (0, e.jsx)(ls, { ...s, groupID: l })
              : null;
        }
        function ls(s) {
          const {
              groupID: t,
              nTabID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l =
              a && a >= 0
                ? o.selectedTabBackgroundDef.groups
                : i.GetSalePageGroupDefinition().groups,
            u = l.findIndex((R) => R.background_id === t),
            x = l[u],
            [p, I] = (0, v.useState)(!1);
          (0, v.useEffect)(() => {
            if (!p) return;
            const R = (0, Qe.pg)(
              (0, e.jsx)(Ee.o0, {
                bAlertDialog: !0,
                closeModal: () => I(!1),
                children: (0, e.jsx)(tn, {
                  backgroundImageEditModel: i,
                  groupIndex: u,
                  imgGroup: x,
                  imgGroupDerivedMapping: o,
                  eventModel: i.GetEventModel(),
                  nTabIndex: a,
                }),
              }),
              window,
            );
            return () => {
              R.then((L) => L.Close());
            };
          }, [p, i, x, u, a, o]);
          const b = (0, _.q3)(() => kt.get(t)),
            [C, S] = (0, v.useState)(null),
            y = v.useCallback((R, L) => {
              S(L);
            }, []),
            k = (0, Pe.w6)(y);
          return (0, e.jsxs)("div", {
            className: et().CtnEditor,
            ref: k,
            children: [
              !!(b && C && C > b) &&
                (0, e.jsx)(ne.$n, {
                  onClick: (R) => I(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(tn, {
                backgroundImageEditModel: i,
                groupIndex: u,
                imgGroup: x,
                imgGroupDerivedMapping: o,
                eventModel: i.GetEventModel(),
                nTabIndex: a,
              }),
            ],
          });
        }
        var cs = r(81557),
          dn = r.n(cs);
        function ds(s) {
          const { imgGroupDerivedMapping: t } = s,
            [a, o] = (0, v.useState)(!1);
          (0, v.useEffect)(() => {
            if (!a) return;
            const b = (0, Qe.pg)(
              (0, e.jsx)(Ee.o0, {
                bAlertDialog: !0,
                closeModal: () => o(!1),
                children: (0, e.jsx)(un, { ...s }),
              }),
              window,
            );
            return () => {
              b.then((C) => C.Close());
            };
          }, [a, s]);
          const i = (0, _.q3)(() => {
              const b = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (b) {
                const C = t.mapGroupToSections.get(b);
                if (C) return kt.get(C?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [l, u] = (0, v.useState)(null),
            x = v.useCallback((b, C) => {
              u(C);
            }, []),
            p = (0, Pe.w6)(x),
            I = !!(i >= 0 && l && l > i);
          return (0, e.jsxs)("div", {
            className: (0, G.A)(et().CtnEditor, dn().TabCtn),
            ref: p,
            children: [
              I &&
                (0, e.jsx)(ne.$n, {
                  onClick: (b) => o(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(un, { ...s }),
            ],
          });
        }
        function un(s) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: a,
              nTabID: o,
            } = s,
            [i, l] = (0, v.useState)(null),
            [u, x, p, I] = (0, _.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(o),
              t?.BIsTabEnabled(o),
              a.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(J.tH, {
            children: [
              (0, e.jsx)(ne.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: x,
                onChange: (b) => {
                  if (
                    ((0, Bt.wT)(t, "edit model mising"),
                    (0, Bt.wT)(o !== void 0, "tab setting missing"),
                    o !== void 0 && t)
                  ) {
                    const C = t.SetTabEnabled(o, b);
                    (0, Bt.wT)(
                      !!C,
                      `Failed to create model TabID ${o}backgroundModel`,
                    ),
                      l(C);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${o}.`,
                    );
                },
              }),
              !!x &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ne.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: u,
                      onChange: (b) => t.SetTabLastCoverSectionUntilEnd(o, b),
                    }),
                    (0, e.jsx)(tn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (p || i)?.groups[0],
                      imgGroupDerivedMapping: a,
                      eventModel: I,
                      nTabIndex: o,
                      classNameHeader: dn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var aa = r(85692);
        function us(s) {
          const { nSectionID: t, children: a } = s,
            [o, i] = v.useState(!1),
            [l, u] = v.useState(!1);
          v.useEffect(() => {
            aa.TU.Get().SetMouseOverSection(t, o);
          }, [t, o]);
          const x = (0, _.q3)(() => aa.TU.Get().GetMouseOverSectionID()),
            p = t && t == x,
            I = () => aa.TU.Get().JumpToSection(t),
            b = v.useRef(null);
          return (
            (0, aa.lM)((C) =>
              t != C ? !1 : (b.current?.scrollIntoView(), u(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: b,
              className: (0, G.A)({
                [D().SaleSectionLivePreview]: !0,
                [D().Hover]: !!p,
                [D().JumpedTo]: !!l,
              }),
              onAnimationEnd: () => u(!1),
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              children: [
                o &&
                  (0, e.jsx)(st.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: D().JumpToButton,
                      onClick: I,
                      children: (0, e.jsx)(qe.ffu, {}),
                    }),
                  }),
                a,
              ],
            })
          );
        }
        var gs = r(76281),
          ms = r(20557),
          hs = r(64286);
        function ps(s) {
          const {
              promotionName: t,
              eventModel: a,
              bIsPreview: o,
              language: i,
              backgroundImageEditModel: l,
              addtionalAdminButtons: u,
              bDynamicallyCreatedSale: x,
            } = s,
            [p, I] = v.useState(a?.GetDayIndexFromEventStart()),
            [b, C] = v.useState(null),
            S = (0, _.q3)(() => a.jsondata.sale_header_disable_top_margin),
            y = fs(a, p, (0, ms.TC)(!!o)),
            [k, R] = (0, v.useState)(!1);
          v.useEffect(() => {
            if (
              a.jsondata.sale_custom_css &&
              !b &&
              o &&
              a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, $.yK)() == "community"
            ) {
              const T = document.getElementsByTagName("HEAD")[0],
                te = document.createElement("style");
              (te.innerText = (0, Na.L$)(a.jsondata.sale_custom_css)),
                C(te),
                T.appendChild(te);
            }
            const K = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Bt.wT)(
                K.length <= 1,
                "Must have at most one react_landing_background",
              ),
              K.length >= 1 && (K[0].style.backgroundImage = ""),
              () => {
                b && (b.remove(), C(null));
              }
            );
          }, [a, b, o]);
          const L = a?.jsondata,
            B = v.useMemo(
              () => ({
                promotionName: t,
                clanid: Number($.UF.CLANACCOUNTID),
                nAppIDVOD: Number(L?.broadcast_preroll_vod_appid),
                event: a,
                bIsPreview: o,
                language: i,
                accountIDs: o ? L?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  L?.broadcast_chat_announcement_giveaway,
              }),
              [o, a, L, i, t],
            ),
            H = (0, _.q3)(() => l?.BIsBackgroundImageEnabled() ?? !1),
            U = ge(a?.clanSteamID);
          if (!a || p === void 0)
            return (0, e.jsx)("div", {
              className: Vt().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(wt.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const K =
                a.jsondata.localized_sale_logo &&
                a.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              T = a.BUsesContentHubForItemSource(),
              te = a
                .GetSaleSections()
                .some((_t) => _t.section_type === "contenthubtitle"),
              De = T && te;
            let Je,
              gt = !0;
            K
              ? (Je = 0)
              : a.BUsesContentHubForItemSource()
                ? (Je = 20)
                : a.GetEventType() == W.ajI
                  ? ((Je = 0), (gt = !1))
                  : (Je = a.jsondata.sale_header_offset || 0);
            const ce = gt && a.jsondata.sale_header_offset === 530,
              He = !lt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  a.GetContentHubType(),
                  a.GetContentHubCategory(),
                  a.GetContentHubTag(),
                ),
              bt = o
                ? !k && l?.BIsBackgroundImageEnabled()
                  ? Ze.S.EPreviewMode_EditBackground
                  : Ze.S.EPreviewMode_Enabled
                : Ze.S.EPreviewMode_Disabled,
              Ct = H || a.GetEventType() != W.ajI,
              mt = T ? de.Yo.NoTransform : de.Yo.NoTransformSparseContent,
              na = (0, G.A)(
                D().SaleOuterContainer,
                S && D().SaleOuterTopMargin,
                ce && D().SaleNewSizing,
                D()[`CustomStyle_${a.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                K && D().SalePageLogoSet,
                De && D().ContentHub,
              );
            return (0, e.jsx)(J.tH, {
              children: (0, e.jsx)(oe.EU, {
                eventModel: a,
                language: i,
                children: (0, e.jsx)(se.Cs, {
                  location: o ? se.HY : se.bs,
                  children: (0, e.jsxs)(xe, {
                    event: a,
                    language: i,
                    bIsPreview: !!o,
                    children: [
                      He && (0, e.jsx)(oe.Sn, {}),
                      (0, e.jsx)(Ie, { eventModel: a }),
                      !!l &&
                        (Ct || U) &&
                        (0, e.jsx)(rs, {
                          backgroundImageEditModel: l,
                          bBackgroundImgGroupEditMode: k,
                          fnSetBackgroundImgGroupEditMode: R,
                          bShowAsValveOnly: !Ct,
                        }),
                      (0, e.jsxs)(X.Z, {
                        style: De ? void 0 : { marginTop: `${Je || 0}px` },
                        className: na,
                        scrollIntoViewType: mt,
                        children: [
                          (0, e.jsx)(Me, { eventModel: a, language: i }),
                          (0, e.jsx)(ht, {
                            rgPresenters: a.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Oe, {
                            event: a,
                            broadcastEmbedContext: B,
                          }),
                          (0, e.jsx)(xs, {
                            ePreviewMode: bt,
                            event: a,
                            backgroundImageEditModel: l,
                            language: i,
                            promotionName: t,
                            nSaleDayIndex: p,
                            broadcastEmbedContext: B,
                            selectedTab: y,
                            tagSelection: y?.GetTagSelection(),
                          }),
                          !x &&
                            (0, e.jsx)(Pt, {
                              event: a,
                              addtionalAdminButtons: u,
                              fnOnChangeDayIndex: (_t) => {
                                _t != p &&
                                  ((a.m_overrideCurrentDay = _t), I(_t));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function fs(s, t, a) {
          const [o] = (0, Ke.QD)(w.jD, void 0),
            [i] = (0, Ke.QD)(re.dk, void 0),
            [l] = (0, Ke.QD)(re.NV, void 0),
            u = v.useMemo(() => {
              const C = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((S) => !S.hide);
              if (C && C.length > 0) {
                let S = o > 0 ? C.find((k) => k.unique_id == o) : void 0;
                S || (S = C[0]);
                const y = S === C[0];
                return { selTab: S, bIsDefaultTab: y };
              }
            }, [s, o]),
            x = (0, re.U9)((0, re.XL)(i, l), u?.selTab.tab_tag_filter, a),
            p = x?.strParentKey,
            I = x?.strChildKey;
          return v.useMemo(() => {
            if (!u) return;
            let b;
            p && (b = { strParentKey: p, strChildKey: I });
            const C =
              s.jsondata.sale_opt_in_page_name ||
              s.jsondata.prune_list_optin_name;
            return new Rt.y(u.selTab, t, u.bIsDefaultTab, b, C);
          }, [s, t, u, p, I]);
        }
        function gn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function vs(s) {
          const {
              event: t,
              language: a,
              nSaleDayIndex: o,
              ePreviewMode: i,
              selectedTab: l,
              backgroundImageEditModel: u,
            } = s,
            [x, p] = v.useState((0, w.rp)()),
            I = v.useMemo(() => new ma(), []),
            b = v.useCallback(() => p((0, w.rp)()), []);
          v.useEffect(
            () => (
              window.addEventListener("resize", b),
              () => window.removeEventListener("resize", b)
            ),
            [b],
          ),
            v.useEffect(() => {
              let ce = "";
              const je = () => {
                  const bt = gn();
                  if (bt && bt != ce) {
                    const Ct = document.getElementById(bt);
                    Ct && ((ce = bt), Ct.scrollIntoView({ block: "start" }));
                  }
                },
                He = setTimeout(() => je(), 150);
              return (
                window.addEventListener("hashchange", je),
                () => {
                  clearTimeout(He),
                    window.removeEventListener("hashchange", je);
                }
              );
            }, []);
          const C = (0, pt.W6)(),
            S = (ce, je) => {
              (0, Ke.ip)(C, { ...(je || {}), [w.jD]: ce.toString() });
            },
            [y, k] = (0, Ke.QD)("controller"),
            [R, L] = (0, _.q3)(() => {
              const ce =
                  Ue.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                je = t.GetSaleSectionIncludingFooterSections(ce);
              return [
                Gt(
                  t.jsondata.sale_background_img_groups,
                  je,
                  l && l.GetActiveTabUniqueID(),
                ),
                je,
              ];
            });
          let B = !1;
          const H = new Rt.y(void 0, o),
            U = [{ elements: [], activeTab: H }];
          let K = null;
          const T = (0, $.Qn)(),
            te = (0, aa.ty)(),
            De = (0, hs.h)(t),
            Je = v.useMemo(() => {
              const ce = gn();
              if (!ce) return;
              const je = L.findIndex((He) => He.section_anchor === ce);
              return je > -1 ? je : void 0;
            }, [L]);
          L.forEach((ce, je) => {
            const He = U[U.length - 1].activeTab;
            if (He && !He.ShouldShowSection(ce)) return;
            const bt = lt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Ct = x && !bt && !t.jsondata.content_hub_restricted_width;
            let mt = (0, Ze.I)(ce, i, t, a, T, De);
            if (mt === void 0) return;
            if (!mt)
              if ((0, Wt.su)(ce) && !$.iA.logged_in)
                B ||
                  ((mt = (0, e.jsx)(Wt.CC, {
                    section: ce,
                    event: t,
                    language: a,
                  })),
                  (B = !0));
              else {
                const Cs = ce.diable_tab_id_filtering
                  ? new Rt.y(void 0, He && He.GetSaleDay())
                  : He;
                ce.section_type == "tabs" &&
                  ce.tabs?.some(
                    (_s) => _s.unique_id == l?.GetActiveTabUniqueID(),
                  ) &&
                  U.push({ activeTab: l, elements: [] }),
                  (mt = (0, e.jsx)(gs.H, {
                    ...s,
                    section: ce,
                    activeTab: Cs,
                    appVisibilityTracker: I,
                    selectedTab: l,
                    setTabUniqueIDQueryParam: S,
                    expanded: Ct,
                    controllerCategory: y,
                    setControllerCategory: k,
                  }));
              }
            te &&
              (mt = (0, e.jsx)(us, { nSectionID: ce.unique_id, children: mt }));
            const na = U && U.length && U[U.length - 1];
            let _t = (0, e.jsx)(
              bs,
              {
                section: ce,
                nActiveTabID:
                  na && na.activeTab && na.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: je,
                ePreviewMode: i,
                salePageBackgroundDerivedConfig: R,
                backgroundImageEditModel: u,
                bExpanded: Ct,
                children: (0, e.jsx)(ha._, {
                  enabled: !Je || je > Je,
                  children: mt,
                }),
              },
              "SaleSectionIndex_" + ce.unique_id + "_" + je,
            );
            const wa = R.mapSectionToGroup.get(ce.unique_id);
            K &&
              K.groupID != wa &&
              (U[U.length - 1].elements.push(
                ft(t, K, i, l && l?.GetActiveTabUniqueID()),
              ),
              (K = null)),
              wa
                ? (K ||
                    (K = {
                      groupID: wa,
                      elSaleSections: [],
                      derivedGroupInfo: R.mapGroupToSections.get(wa),
                    }),
                  K.elSaleSections.push(_t))
                : U[U.length - 1].elements.push(_t);
          }),
            K &&
              (U[U.length - 1].elements.push(
                ft(t, K, i, l && l?.GetActiveTabUniqueID()),
              ),
              (K = null));
          const gt = U.map((ce, je) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, G.A)(
                  D().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ce.elements,
              },
              "TabSection_" + je,
            ),
          );
          return (0, e.jsx)(X.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: gt,
          });
        }
        const xs = (0, pt.y)(vs);
        function Is(s) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: a,
            children: o,
          } = s;
          return t && a != null
            ? (0, e.jsx)(js, {
                visibility_by_door_index_state: t,
                door_index_visibility: a,
                children: o,
              })
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function js(s) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: a,
              children: o,
            } = s,
            i = (0, Ye.OM)(a);
          return (t == "hide_when_open_door_index" && i) ||
            (t == "show_when_open_door_index" && !i)
            ? null
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function mn({ children: s, onChange: t }) {
          const a = v.useRef(null);
          return (
            (0, v.useEffect)(() => {
              t(!!v.Children.toArray(s).filter(Boolean).length);
            }, [s, t]),
            s
          );
        }
        function bs(s) {
          const {
              section: t,
              saleSectionIndex: a,
              nActiveTabID: o,
              ePreviewMode: i,
              salePageBackgroundDerivedConfig: l,
              backgroundImageEditModel: u,
              bExpanded: x,
              children: p,
            } = s,
            I = t.section_anchor ? t.section_anchor : w.mj + (t.unique_id || a),
            b = t.section_type != "tabs",
            [C, S] = (0, v.useState)(!0);
          return C
            ? (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(Is, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: b
                    ? (0, e.jsx)(X.Z, {
                        navKey: I,
                        id: I,
                        className: (0, G.A)({
                          [D().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: x,
                          [t.single_item_style || ""]: !0,
                          [D().SaleSectionBackgroundImageGroupEdit]:
                            i == Ze.S.EPreviewMode_EditBackground,
                          [D().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          i === Ze.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  p,
                                  (0, e.jsx)(is, {
                                    nSectionUniqueID: t.unique_id || a,
                                    nTabID: o,
                                    salePageBackgroundDerivedConfig: l,
                                    backgroundImageEditModel: u,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(mn, { onChange: S, children: p }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          i === Ze.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: I,
                                className: (0, G.A)({
                                  [D().SaleSectionCtn]: !0,
                                  [D().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [D().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  p,
                                  (0, e.jsx)(ds, {
                                    backgroundImageEditModel: u,
                                    nTabID: o,
                                    imgGroupDerivedMapping: l,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(mn, { onChange: S, children: p }),
                      }),
                }),
              })
            : null;
        }
      },
      4370: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { A: () => se, X: () => he });
        var e = r(7850),
          W = r(17083),
          X = r(24660);
        function de(Q) {
          return !!(Q.metaKey || Q.altKey || Q.ctrlKey || Q.shiftKey);
        }
        function oe(Q) {
          const { navigate: _, onClick: v, ...Z } = Q,
            { target: J } = Z,
            ae = (D) => {
              try {
                v && v(D);
              } catch (N) {
                throw (D.preventDefault(), N);
              }
              !D.defaultPrevented &&
                D.button === 0 &&
                (!J || J === "_self") &&
                !de(D) &&
                (D.preventDefault(), _());
            };
          return (0, e.jsx)(X.Ii, { ...Z, onClick: ae });
        }
        function se(Q) {
          return (0, e.jsx)(W.k2, { component: oe, ...Q });
        }
        function he(Q) {
          return (0, e.jsx)(W.N_, { component: oe, ...Q });
        }
      },
      12932: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { qx: () => N });
        var e = r(7850),
          W = r(16412),
          X = r(18210),
          de = r(36118),
          oe = r(90626),
          se = r(36707),
          he = r(95695),
          Q = r.n(he),
          _ = r(25792),
          v = r(64734),
          Z = r.n(v),
          J = r(65946),
          ae = r(11243);
        function D(G) {
          const {
              title: $,
              tooltip: Ce,
              getMinimized: Y,
              toggleMinimized: ue,
              className: xe,
              children: fe,
              elAdditionalButtons: M,
            } = G,
            ee = (0, J.q3)(() => Y());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, se.A)(
                  xe,
                  v.SectionTitleHeader,
                  v.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, se.A)(
                      he.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [$, !!Ce && (0, e.jsx)(ae.o, { tooltip: Ce })],
                  }),
                  (0, e.jsxs)("div", {
                    className: v.SectionTitleButtons,
                    children: [
                      M,
                      (0, e.jsx)(O, { bIsMinimized: ee, fnToggleMinimize: ue }),
                    ],
                  }),
                ],
              }),
              !ee && (0, e.jsx)(_.tH, { children: fe }),
            ],
          });
        }
        function N(G) {
          const [$, Ce] = oe.useState(!!G.bStartMinimized);
          return (0, e.jsx)(D, {
            ...G,
            getMinimized: () => $,
            toggleMinimized: () => Ce(!$),
            children: G.children,
          });
        }
        function O(G) {
          const { bIsMinimized: $, fnToggleMinimize: Ce } = G,
            Y = $ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(W.$n, {
            "data-tooltip-text": (0, X.we)(Y),
            onClick: Ce,
            children: G.bIsMinimized
              ? (0, e.jsx)(de.hz4, {})
              : (0, e.jsx)(de.Xjb, {}),
          });
        }
      },
      27638: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { Y: () => X });
        var e = r(90626);
        function W(de) {
          const { title: oe, bodyClassName: se, children: he } = de;
          return (
            React.useEffect(() => {
              const Q = document.title;
              return (
                (document.title = oe),
                () => {
                  document.title = Q;
                }
              );
            }, [oe]),
            X(se),
            he
          );
        }
        function X(de) {
          e.useEffect(() => {
            if (!de) return;
            const oe = [];
            for (const se of de.split(/ /))
              document.body.classList.contains(se) || oe.push(se);
            return (
              document.body.classList.add(...oe),
              () => document.body.classList.remove(...oe)
            );
          }, [de]);
        }
      },
      6479: (F, Ae, r) => {
        "use strict";
        r.r(Ae), r.d(Ae, { SteamChartsRoutes: () => Be, default: () => Ea });
        var e = r(7850),
          W = r(58732),
          X = r(80902),
          de = r(99412),
          oe = r(72604),
          se = r(35038),
          he = r(80613),
          Q = r.n(he),
          _ = r(75245),
          v = r(48156);
        class Z extends he.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Z.prototype.country_code || _.Sg(Z.M()),
              he.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    country_code: {
                      n: 1,
                      br: _.qM.readString,
                      bw: _.gp.writeString,
                    },
                    context: { n: 2, c: v.TS },
                    data_request: { n: 3, c: v.gn },
                    start_date: {
                      n: 4,
                      br: _.qM.readUint32,
                      bw: _.gp.writeUint32,
                    },
                    page_start: {
                      n: 5,
                      br: _.qM.readInt32,
                      bw: _.gp.writeInt32,
                    },
                    page_count: {
                      n: 6,
                      d: 20,
                      br: _.qM.readInt32,
                      bw: _.gp.writeInt32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = _.w0(Z.M())), Z.sm_mbf;
          }
          toObject(n = !1) {
            return Z.toObject(n, this);
          }
          static toObject(n, d) {
            return _.BT(Z.M(), n, d);
          }
          static fromObject(n) {
            return _.Uq(Z.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (Q().BinaryReader)(n),
              g = new Z();
            return Z.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return _.zj(Z.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (Q().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            _.i0(Z.M(), n, d);
          }
          serializeBase64String() {
            var n = new (Q().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Request";
          }
        }
        class J extends he.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              J.prototype.start_date || _.Sg(J.M()),
              he.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    start_date: {
                      n: 1,
                      br: _.qM.readUint32,
                      bw: _.gp.writeUint32,
                    },
                    ranks: { n: 2, c: ae, r: !0, q: !0 },
                    next_page_start: {
                      n: 3,
                      br: _.qM.readInt32,
                      bw: _.gp.writeInt32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = _.w0(J.M())), J.sm_mbf;
          }
          toObject(n = !1) {
            return J.toObject(n, this);
          }
          static toObject(n, d) {
            return _.BT(J.M(), n, d);
          }
          static fromObject(n) {
            return _.Uq(J.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (Q().BinaryReader)(n),
              g = new J();
            return J.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return _.zj(J.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (Q().BinaryWriter)();
            return J.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            _.i0(J.M(), n, d);
          }
          serializeBase64String() {
            var n = new (Q().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response";
          }
        }
        class ae extends he.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              ae.prototype.rank || _.Sg(ae.M()),
              he.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    rank: { n: 1, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                    appid: { n: 2, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                    item: { n: 3, c: v.vB },
                    last_week_rank: {
                      n: 4,
                      br: _.qM.readInt32,
                      bw: _.gp.writeInt32,
                    },
                    consecutive_weeks: {
                      n: 5,
                      br: _.qM.readInt32,
                      bw: _.gp.writeInt32,
                    },
                    first_top100: {
                      n: 6,
                      br: _.qM.readBool,
                      bw: _.gp.writeBool,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = _.w0(ae.M())), ae.sm_mbf;
          }
          toObject(n = !1) {
            return ae.toObject(n, this);
          }
          static toObject(n, d) {
            return _.BT(ae.M(), n, d);
          }
          static fromObject(n) {
            return _.Uq(ae.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (Q().BinaryReader)(n),
              g = new ae();
            return ae.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return _.zj(ae.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (Q().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            _.i0(ae.M(), n, d);
          }
          serializeBase64String() {
            var n = new (Q().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank";
          }
        }
        class D extends he.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              D.prototype.language || _.Sg(D.M()),
              he.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    language: {
                      n: 1,
                      br: _.qM.readString,
                      bw: _.gp.writeString,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = _.w0(D.M())), D.sm_mbf;
          }
          toObject(n = !1) {
            return D.toObject(n, this);
          }
          static toObject(n, d) {
            return _.BT(D.M(), n, d);
          }
          static fromObject(n) {
            return _.Uq(D.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (Q().BinaryReader)(n),
              g = new D();
            return D.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return _.zj(D.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (Q().BinaryWriter)();
            return D.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            _.i0(D.M(), n, d);
          }
          serializeBase64String() {
            var n = new (Q().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Request";
          }
        }
        class N extends he.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              N.prototype.countries || _.Sg(N.M()),
              he.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: { countries: { n: 1, c: O, r: !0, q: !0 } },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = _.w0(N.M())), N.sm_mbf;
          }
          toObject(n = !1) {
            return N.toObject(n, this);
          }
          static toObject(n, d) {
            return _.BT(N.M(), n, d);
          }
          static fromObject(n) {
            return _.Uq(N.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (Q().BinaryReader)(n),
              g = new N();
            return N.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return _.zj(N.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (Q().BinaryWriter)();
            return N.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            _.i0(N.M(), n, d);
          }
          serializeBase64String() {
            var n = new (Q().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response";
          }
        }
        class O extends he.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              O.prototype.country_code || _.Sg(O.M()),
              he.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    country_code: {
                      n: 1,
                      br: _.qM.readString,
                      bw: _.gp.writeString,
                    },
                    name: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = _.w0(O.M())), O.sm_mbf;
          }
          toObject(n = !1) {
            return O.toObject(n, this);
          }
          static toObject(n, d) {
            return _.BT(O.M(), n, d);
          }
          static fromObject(n) {
            return _.Uq(O.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (Q().BinaryReader)(n),
              g = new O();
            return O.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return _.zj(O.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (Q().BinaryWriter)();
            return O.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            _.i0(O.M(), n, d);
          }
          serializeBase64String() {
            var n = new (Q().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response_Country";
          }
        }
        var G;
        ((m) => {
          function n(g, h, f) {
            return g.SendMsg(
              "StoreTopSellers.GetWeeklyTopSellers#1",
              (0, se.I8)(Z, h, f),
              J,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetWeeklyTopSellers = n;
          function d(g, h, f) {
            return g.SendMsg(
              "StoreTopSellers.GetCountryList#1",
              (0, se.I8)(D, h, f),
              N,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCountryList = d;
        })(G || (G = {}));
        var $ = r(84192),
          Ce = r(71742),
          Y = r(3166);
        const ue = 20;
        class xe {
          m_WebAPI;
          m_Storage;
          m_promiseInitialize;
          m_rtCurrentWeek;
          constructor(n, d) {
            (this.m_WebAPI = n), (this.m_Storage = d);
          }
          async Initialize(n) {
            return (
              this.m_promiseInitialize ||
                (this.m_promiseInitialize = new Promise((d, g) => {
                  let h;
                  (Y.TS.EUNIVERSE == de.Rv || Y.TS.EUNIVERSE == de.CII) &&
                    (h = 1539068400),
                    this.LoadCountryList()
                      .then(() =>
                        this.LoadCurrentWeekStart(h, n).then((f) => {
                          (this.m_rtCurrentWeek = f), d();
                        }),
                      )
                      .catch(g);
                })),
              this.m_promiseInitialize
            );
          }
          m_rgCountryList;
          static k_nCountryListMaxCacheTime = 1e3 * 60 * 60 * 24;
          async LoadCountryList() {
            if (!this.m_rgCountryList) {
              const n = "TopSellersCountryList_" + Y.TS.LANGUAGE;
              if (
                ((this.m_rgCountryList = await this.m_Storage.GetObject(n)),
                !this.m_rgCountryList ||
                  this.m_rgCountryList.dtTimeStored +
                    xe.k_nCountryListMaxCacheTime <
                    Date.now())
              ) {
                const d = se.w.Init(D);
                d.Body().set_language(Y.TS.LANGUAGE);
                const g = await G.GetCountryList(
                  this.m_WebAPI.GetServiceTransport(),
                  d,
                );
                if (g.GetEResult() == oe.R) {
                  let h = g
                    .Body()
                    .countries()
                    .map((f) => f.toObject());
                  h.sort((f, j) => (f.name < j.name ? -1 : 1)),
                    (this.m_rgCountryList = {
                      rgCountryCodes: h,
                      dtTimeStored: Date.now(),
                    }),
                    this.m_Storage.StoreObject(n, this.m_rgCountryList);
                } else
                  this.m_rgCountryList = {
                    rgCountryCodes: [
                      { country_code: "US", name: "United States" },
                    ],
                    dtTimeStored: 0,
                  };
              }
            }
            return this.m_rgCountryList;
          }
          BIsValidTopSellersCountry(n) {
            return !!this.ValidateCountryCode(n);
          }
          ValidateCountryCode(n) {
            return (
              (0, Ce.wT)(
                this.m_rgCountryList,
                "Country list should already be loaded",
              ),
              this.m_rgCountryList.rgCountryCodes.find(
                (d) => d.country_code == n,
              )
                ? n
                : ""
            );
          }
          GetCurrentWeek() {
            return this.m_rtCurrentWeek;
          }
          async LoadCurrentWeekStart(n, d) {
            const g = this.ValidateCountryCode(d);
            let h = se.w.Init(Z);
            (0, $.rV)(h),
              (0, $.Bn)(h, ht),
              g && h.Body().set_country_code(g),
              n && h.Body().set_start_date(n),
              h.Body().set_page_count(ue);
            let f = await G.GetWeeklyTopSellers(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              h,
            );
            if (f.GetEResult() != oe.R) throw "error loading top sellers";
            return f.Body().start_date();
          }
        }
        const fe = "TopSellers";
        function M(m, n) {
          const { data: d } = (0, X.I)({
            queryKey: [fe, "Initialization"],
            queryFn: () =>
              m
                .Initialize(n)
                .then(() => ({
                  rtCurrentWeek: m.GetCurrentWeek(),
                  bCountryListInitialized: !0,
                })),
            staleTime: 1 / 0,
          });
          return d || { rtCurrentWeek: void 0, bCountryListInitialized: !1 };
        }
        var ee = r(6469),
          q = r(79809);
        function Ie(m) {
          let n = 50;
          return (
            m < 2009 ? (n = 5) : m < 2014 ? (n = 10) : m < 2018 && (n = 25), n
          );
        }
        class le {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopMonthlyReleases(n, d) {
            let g = se.w.Init(q.GM);
            const h = new Date(n, d, 15);
            g.Body().set_rtime_month(Math.floor(h.getTime() / 1e3)),
              g.Body().set_include_dlc(!0);
            const f = Ie(n);
            g.Body().set_top_results_limit(f);
            let j = await q.ZG.GetMonthTopAppReleases(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              g,
            );
            if (j.GetEResult() != oe.R) {
              if (j.GetEResult() == oe.S7) return { bSQLError: !0 };
              if (j.GetEResult() == oe.p) return {};
              throw "error loading top releases";
            }
            return j.Body().toObject();
          }
        }
        const be = "useMonthlyTopRelease";
        function c(m, n, d) {
          const { data: g } = (0, X.I)({
            queryKey: [be, n, d],
            queryFn: () => m.LoadTopMonthlyReleases(n, d),
          });
          return g;
        }
        var Me = r(72609);
        class We {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopYearlyReleases(n) {
            let d = se.w.Init(q.FN);
            const g = new Date(n, 1, 15);
            d.Body().set_rtime_year(Math.floor(g.getTime() / 1e3)),
              d.Body().set_include_dlc(!0);
            const h =
              (Me.iA.is_support, this.m_WebAPI.GetAnonymousServiceTransport());
            let f = await q.ZG.GetYearTopAppReleases(h, d);
            if (f.GetEResult() != oe.R) {
              if (f.GetEResult() == oe.S7) return { bSQLError: !0 };
              if (f.GetEResult() == oe.p) return {};
              throw "error loading top releases";
            }
            const j = f.Body().toObject();
            return Me.iA.is_support && j.top_app_list.length == 0, j;
          }
        }
        function Ge() {
          const m = {
              top_app_list: [],
              top_combined_app_and_dlc_releases: [],
              top_dlc_releases: [],
            },
            n = [
              EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Gold,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Silver,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Bronze,
            ],
            d = [
              {
                appid: 400,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Sellers,
              },
              {
                appid: 440,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Played,
              },
              {
                appid: 620,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_SteamDeck_Played,
              },
              {
                appid: 583950,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Controller_Played,
              },
              {
                appid: 546560,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_VR_Played,
              },
            ];
          for (const h of d)
            for (const f of n)
              m.top_app_list.push({ ...h, app_release_rank: f }),
                m.top_app_list.push({ ...h, appid: 730, app_release_rank: f }),
                m.top_app_list.push({ ...h, appid: 540, app_release_rank: f });
          const g = Math.round(new Date().getTime() / 1e3);
          for (const h of n)
            m.top_combined_app_and_dlc_releases.push(
              { appid: 400, app_release_rank: h, rtime_release: g },
              { appid: 440, app_release_rank: h, rtime_release: g },
              { appid: 620, app_release_rank: h, rtime_release: g },
              { appid: 583950, app_release_rank: h, rtime_release: g },
            );
          return m;
        }
        const tt = "useYearlyTopRelease";
        function ot(m, n) {
          const { data: d } = (0, X.I)({
            queryKey: [tt, n],
            queryFn: () => m.LoadTopYearlyReleases(n),
          });
          return d;
        }
        class it {
          m_DynamicUserStore;
          m_TopSellersStore;
          m_TopMonthlyReleasesStore;
          m_TopYearlyReleasesStore;
          m_WebAPI;
          async Initialize(n, d) {
            (this.m_WebAPI = n),
              (this.m_TopSellersStore = new xe(this.m_WebAPI, d)),
              (this.m_TopMonthlyReleasesStore = new le(this.m_WebAPI)),
              (this.m_TopYearlyReleasesStore = new We(this.m_WebAPI)),
              (this.m_DynamicUserStore = await ee.Fm.Get().HintLoad());
          }
          get TopSellersStore() {
            return this.m_TopSellersStore;
          }
          get TopMonthlyReleasesStore() {
            return this.m_TopMonthlyReleasesStore;
          }
          get TopYearlyReleasesStore() {
            return this.m_TopYearlyReleasesStore;
          }
          get DynamicUserStore() {
            return this.m_DynamicUserStore;
          }
        }
        const ht = {
          include_basic_info: !0,
          include_assets: !0,
          include_trailers: !0,
          include_release: !0,
          include_reviews: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_tag_count: 20,
        };
        var at = r(89921),
          Ue = r.n(at),
          pt = r(74812),
          w = r.n(pt),
          re = r(90626),
          lt = r(24805),
          Ye = r(7582),
          Et = r(29057),
          Oe = r(10142),
          Fe = r(84676),
          Ve = r(36118),
          yt = r(92298),
          ct = r.n(yt),
          Ba = r(19367),
          At = r.n(Ba),
          Ht = r(16346),
          ra = r(34360),
          Wt = r(95863),
          oa = r.n(Wt),
          ye = r(71421),
          _e = r(36707),
          ge = r(18210),
          Yt = r(92264);
        function ne(m) {
          const { toolTipContent: n } = m,
            d = Nt({ ...m });
          return (0, e.jsx)(ye.Gq, {
            toolTipContent: n,
            children: (0, e.jsx)("div", {
              className: (0, _e.A)(oa().CalendarBtn),
              onClick: (g) =>
                d(g, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
              children: (0, e.jsx)(Ve.VvS, { color: "#c6d4df" }),
            }),
          });
        }
        function Nt(m) {
          return (0, re.useCallback)(
            (d, g) => {
              const h = (0, e.jsx)(ia, { ...m });
              (0, Ht.lX)(h, d, g);
            },
            [m],
          );
        }
        function ia(m) {
          const { value: n, fnOnUpdate: d, minDate: g, maxDate: h } = m,
            f = (0, re.useRef)(void 0),
            j = (0, re.useRef)(null),
            A = (0, re.useCallback)(
              (P) => {
                const z = At().unix(g),
                  ve = At().unix(h);
                return (
                  P.isSameOrAfter(z, "month") && P.isSameOrBefore(ve, "month")
                );
              },
              [g, h],
            ),
            E = (0, re.useCallback)(
              (P) => {
                d(P.unix()), f.current.Hide();
              },
              [d],
            ),
            V = (0, re.useMemo)(() => {
              if (!At().locales().includes("YearMonthPickerContextMenu")) {
                const P = Array.from({ length: 12 }, (ve, pe) =>
                    (0, ge.Gj)(new Date(2020, pe, 1)),
                  ),
                  z = Array.from({ length: 12 }, (ve, pe) =>
                    (0, Yt.oL)(new Date(2020, pe, 1)),
                  );
                At().defineLocale("YearMonthPickerContextMenu", {
                  months: P,
                  monthsShort: z,
                });
              }
              return At()().clone().locale("YearMonthPickerContextMenu");
            }, []);
          return (0, e.jsx)(ra.tz, {
            refInstance: f,
            children: (0, e.jsx)(ra.kt, {
              onSelected: () => {},
              className: oa().PickerContainer,
              children: (0, e.jsx)("div", {
                onClick: (P) => {
                  P.preventDefault(), P.stopPropagation();
                },
                children: (0, e.jsx)(ct(), {
                  ref: j,
                  value: V,
                  onChange: E,
                  dateFormat: "YYYY-MM",
                  timeFormat: !1,
                  closeOnSelect: !0,
                  isValidDate: A,
                  input: !1,
                  locale: "YearMonthPickerContextMenu",
                }),
              }),
            }),
          });
        }
        var la = r(31032),
          ca = r(47515),
          Pt = r(85599),
          Ke = r(41672),
          dt = r(27221),
          Pe = r.n(dt);
        const Ma = 25;
        function St(m) {
          const {
              rgAppIDs: n,
              children: d,
              nMonth: g,
              bTallCapsule: h,
              bBlurCapsules: f,
            } = m,
            j = (0, re.useMemo)(() => {
              let A = 0,
                E = [...n];
              for (; E.length < 25; ) E.push(n[A % n.length]), A++;
              return E.map((V) => Oe.A.Get().GetApp(V)).filter(Boolean);
            }, [n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, _e.A)({
                  [Pe().ImagesCtn]: !0,
                  [Pe().TallCapsules]: h,
                  [Pe().BlurCapsules]: f,
                  [Pe().AnnualChart]: !g,
                }),
                children: (0, e.jsx)("div", {
                  className: Pe().AllImagesCtn,
                  children: (0, e.jsx)("div", {
                    className: Pe().AllImages,
                    children: (0, e.jsx)("div", {
                      className: (0, _e.A)({
                        [Pe().ImageTint]: !0,
                        [`Month${g}`]: !0,
                        [Pe().Wide2]: j.length <= 10,
                        [Pe().Wide3]: j.length <= 20,
                      }),
                      children: j.map((A, E) =>
                        h
                          ? (0, e.jsx)(
                              "img",
                              { src: A.GetAssets().GetHeroCapsuleURL() },
                              "bg_" + A.GetAppID() + "+" + E,
                            )
                          : (0, e.jsx)(
                              "img",
                              { src: A.GetAssets().GetHeaderURL() },
                              "bg_" + A.GetAppID() + "+" + E,
                            ),
                      ),
                    }),
                  }),
                }),
              }),
              d,
            ],
          });
        }
        function kt(m) {
          const n = m > 1e12,
            d = new Date(n ? m : m * 1e3),
            g = {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
            h = new Intl.DateTimeFormat("en-US", g).format(d),
            f = new Date(
              d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            ),
            j = f.getMonth(),
            A = f.getFullYear(),
            E = f.getDate(),
            V = f.getHours();
          let P, z;
          for (
            E > 15 || (E === 15 && V >= 10) ? (P = j - 1) : (P = j - 2);
            P < 0;
          )
            (P += 12), (z = (z ?? A) - 1);
          z = z ?? A;
          const ve = new Date(Date.UTC(z, P, 15, 17, 0));
          return Math.floor(ve.getTime() / 1e3);
        }
        function La(m) {
          const [n, d] = m.split("_");
          let g = parseInt(d, 10),
            f = {
              january: 0,
              february: 1,
              march: 2,
              april: 3,
              may: 4,
              june: 5,
              july: 6,
              august: 7,
              september: 8,
              october: 9,
              november: 10,
              december: 11,
            }[n.toLowerCase()];
          if (f === void 0) return { dtMidMonth: null, dtTestMonth: null };
          let j = f,
            A = g;
          return (
            f == 11 ? ((j = 0), (A += 1)) : (j += 1),
            { dtMidMonth: new Date(g, f, 15), dtTestMonth: new Date(A, j, 15) }
          );
        }
        function Gt(m, n) {
          const d = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
          ];
          if (n < 0 || n > 11)
            throw new Error("Invalid month index. Must be between 0 and 11.");
          return `${d[n]}_${m}`;
        }
        var ie = r(21042),
          da = r(56330),
          Ot = r(14069),
          Ze = r(98609),
          ft = r(41635),
          Ta = r(87853),
          Dt = r.n(Ta);
        function Rt(m) {
          let n = Dt().PlatinumSection;
          switch (m) {
            case q.s4.NH:
              n = Dt().GoldSection;
              break;
            case q.s4.U1:
              n = Dt().SilverSection;
              break;
            case q.s4.DB:
              n = Dt().BronzeSection;
              break;
          }
          return n;
        }
        function ua(m, n, d, g, h, f, j, A) {
          n?.length > 25 &&
            m.jsondata.sale_sections.push({
              ...(0, ie.Sm)("items", "#Sale_default_label_148"),
              capsules: n.map((E) => ({
                id: E,
                type: g.has(E) ? "dlc" : "game",
              })),
              capsules_per_row_array: [1],
              show_as_carousel: !1,
              carousel_rows: 1,
              single_item_style: "library",
              use_random_order: !0,
              cap_section_content: !1,
              cap_section_row_count: n.length,
              disable_background: !0,
              enable_faceted_browsing: !0,
              min_capsule_matches_for_facet_values: 5,
              max_facet_values_for_facet: 5,
              facet_sort_order: 1,
              cap_item_count: 0,
              facets: d,
              show_on_tabs: f ? [f] : void 0,
              prefer_assets_without_overrides: h,
              show_deck_compability_details: !!j,
              show_as_demos: !!A,
              prefer_demo_store_page: !!A,
            });
        }
        function Vt(m, n, d, g, h, f, j, A) {
          if (Ze.iA.logged_in) {
            const E = ee.Fm.Get(),
              V = n.filter((z) => E.BIsGameWishlisted(z));
            V?.length > 0 &&
              m.jsondata.sale_sections.push({
                ...(0, ie.Sm)("items", "#Sale_OnWishlist"),
                capsules: V.map((z) => ({
                  id: z,
                  type: g.has(z) ? "dlc" : "game",
                })),
                capsules_per_row_array: V.length < 3 ? [2] : [5],
                carousel_rows: 1,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array: V.length < 3 ? ["grid"] : ["tall"],
                random_from_entire_set: !0,
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!j,
                show_as_demos: !!A,
                prefer_demo_store_page: !!A,
              });
            const P = n.filter(
              (z) => E.BIsGameRecommended(z) && !E.BIsGameIgnored(z),
            );
            if (P?.length > 0) {
              const z = P.length;
              m.jsondata.sale_sections.push({
                ...(0, ie.Sm)("items", "#Sale_default_label_RecommendedForYou"),
                capsules: P.map((ve) => ({
                  id: ve,
                  type: g.has(ve) ? "dlc" : "game",
                })),
                capsules_per_row_array: z == 2 ? [2] : [3, 2],
                carousel_rows: 2,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array:
                  z == 2 ? ["grid"] : ["tall", "grid"],
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!j,
                show_as_demos: !!A,
                prefer_demo_store_page: !!A,
              });
            }
            if (!A) {
              const z = d.filter((ve) => {
                if (!E.BIsGameOwned(ve)) {
                  const pe = Oe.A.Get().GetApp(ve);
                  return E.BIsGameOwned(pe.GetParentAppID());
                }
                return !1;
              });
              z.length > 0 &&
                m.jsondata.sale_sections.push({
                  ...(0, ie.Sm)("dlc_for_you", "#Sale_default_label_246"),
                  capsules: z.map((ve) => ({ id: ve, type: "dlc" })),
                  dlc_for_you_data: {
                    group_by_parent_app: !0,
                    hide_dlc_stats: !0,
                    parent_app_page_size: 5,
                    hide_dlc_grouping: !0,
                  },
                  capsules_per_row_array: [3],
                  show_as_carousel: !0,
                  disable_background: !0,
                  show_on_tabs: f ? [f] : void 0,
                  prefer_assets_without_overrides: h,
                });
            }
          }
        }
        function wt(m, n) {
          const d = ee.Fm.Get(),
            g = [],
            h = [],
            f = [],
            j = [],
            A = [];
          for (const E of m)
            d.BIsGameIgnored(E) ||
              (d.BIsGameRecommended(E)
                ? g.push(E)
                : d.BIsGameWishlisted(E)
                  ? h.push(E)
                  : n[1]?.includes(E)
                    ? f.push(E)
                    : n[2]?.includes(E)
                      ? j.push(E)
                      : A.push(E));
          return [
            ...(0, ft.fW)(g),
            ...(0, ft.fW)(h),
            ...(0, ft.fW)(f),
            ...(0, ft.fW)(j),
            ...(0, ft.fW)(A),
          ];
        }
        function ga(m, n, d, g, h, f, j, A) {
          m.jsondata.sale_sections.push({
            ...(0, ie.Sm)("trailercarousel", ""),
            capsules: wt(n, d).map((E) => ({
              id: E,
              type: g.has(E) ? "dlc" : "game",
            })),
            use_random_order: !1,
            disable_background: !0,
            trailer_carousel_auto_advance_msec: 1e4,
            show_on_tabs: f ? [f] : void 0,
            prefer_assets_without_overrides: h,
            show_deck_compability_details: !!j,
            show_as_demos: !!A,
            prefer_demo_store_page: !!A,
          });
        }
        var ma = r(50974);
        function Bt(m, n, d, g, h) {
          const f = (0, ie.U)(ma.wv, de.DRF, m, (0, Ye.sB)()),
            j = !1,
            A = [...h, ...d],
            E = new Set(h);
          if (
            ((f.jsondata.sale_sections = []),
            d.length > 9 && ga(f, d, g, E, j),
            d?.length > 25)
          )
            for (let V in g) {
              const P = g[V];
              f.jsondata.sale_sections.push({
                ...(0, ie.Sm)("items", "#SteamCharts_Monthly_Rank_" + V),
                capsules: P.map((z) => ({
                  id: z,
                  type: E.has(z) ? "dlc" : "game",
                })),
                capsules_per_row_array: [4],
                capsule_style_per_row_array: V == "1" ? ["tall"] : ["grid"],
                show_as_carousel: !1,
                use_random_order: !0,
                border_width: 1,
                default_subtitle:
                  "#SteamCharts_Monthly_Rank_" + V + "_subtitle",
                sale_section_classname: Rt(Number.parseInt(V)),
                prefer_assets_without_overrides: j,
              });
            }
          else {
            const V = Object.values(d).flat();
            f.jsondata.sale_sections.push({
              ...(0, ie.Sm)("items", "#SteamCharts_Monthly_Rank_All"),
              capsules: V.map((P) => ({
                id: P,
                type: E.has(P) ? "dlc" : "game",
              })),
              capsules_per_row_array:
                d?.length > 9 ? (d?.length > 15 ? [3] : [2]) : [1],
              single_item_style: d?.length < 9 ? "library" : "bordered",
              show_as_carousel: !1,
              use_random_order: !0,
              sale_section_classname: Dt().AllTiers,
              prefer_assets_without_overrides: j,
            });
          }
          return (
            Vt(f, A, h, E, j),
            ua(f, d, n, E, j),
            f.jsondata.sale_sections.push({
              ...(0, ie.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, ie.r3)(),
            }),
            f
          );
        }
        function Na(m, n, d, g, h) {
          const { data: f } = (0, X.I)({
            queryKey: ["useMonthEventModel", m],
            queryFn: () => {
              try {
                return Bt(m, n, d, g, h);
              } catch (j) {
                return (
                  console.error(`Montly new release: ${m} failed: `, j), null
                );
              }
            },
          });
          return f;
        }
        function ha(m) {
          const {
              rgFilteredDLCsAppIDs: n,
              rgFilteredCombinedAppsAndDLC: d,
              promotionName: g,
              rgFilteredAppIDByTier: h,
              facets: f,
            } = m,
            j = Na(g, f, d, h, n),
            A = (0, de.sfN)(Ze.TS.LANGUAGE);
          return j
            ? (0, e.jsx)(Ot._, {
                eventModel: j,
                language: A,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : j === null
              ? (0, e.jsx)("div", {
                  className: da.ErrorStylesWithIcon,
                  children: (0, ge.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Pt.t, {
                  string: (0, ge.we)("#Loading"),
                  position: "center",
                });
        }
        function Ee(m, n, d, g) {
          (0, re.useEffect)(() => {
            if (m == null && g != Fe.Sq && d) {
              const h = Qe(d);
              h?.length > 0
                ? Oe.A.Get()
                    .HintLoadStoreApps(h, lt.Xh)
                    .then(() => n(h))
                : n([]);
            }
          }, [g, d, m, n]);
        }
        function Qe(m) {
          const n = ee.Fm.Get(),
            d = m
              .filter((g) => {
                if (!n.BIsGameOwned(g)) {
                  const h = Oe.A.Get().GetApp(g);
                  return (
                    h && h.BIsVisible() && n.BIsGameOwned(h.GetParentAppID())
                  );
                }
                return !1;
              })
              .map((g) => Oe.A.Get().GetApp(g).GetParentAppID())
              .filter(Boolean);
          return Array.from(new Set(d));
        }
        var we = r(19298),
          nt = r(92757);
        const Pa = ["topnewreleases", "bestofyear"];
        function pa(m) {
          return m.split(/[?#]/)[0];
        }
        function Ut(m) {
          const n = pa(m);
          return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
        }
        function Kt(m) {
          if (!m) return !1;
          const n = W.B.SteamCharts(),
            d = pa(m);
          if (Ut(d) == Ut(n)) return !0;
          if (!d.startsWith(n)) return !1;
          const g = d.slice(n.length).split("/")[0];
          return !Pa.includes(g);
        }
        function st() {
          const m = (0, nt.W6)();
          return re.useCallback(
            (n, d) => {
              if (Kt(n)) {
                d?.bReplace
                  ? window.location.replace(n)
                  : window.location.assign(n);
                return;
              }
              d?.bReplace ? m.replace(n, d?.state) : m.push(n, d?.state);
            },
            [m],
          );
        }
        var fa = r(24660),
          Mt = r(4370);
        function ka(m, n) {
          const d = Ut(window.location.pathname),
            g = Ut(m);
          return n ? d == g : d == g || d.startsWith(g + "/");
        }
        function vt(m) {
          const {
              to: n,
              exact: d,
              activeClassName: g,
              className: h,
              children: f,
              ...j
            } = m,
            A = typeof n == "string" ? n : void 0;
          return Kt(A)
            ? (0, e.jsx)(fa.Ii, {
                href: A,
                className: (0, _e.A)(h, ka(A, !!d) ? g : void 0),
                ...j,
                children: f,
              })
            : (0, e.jsx)(Mt.A, {
                to: n,
                exact: d,
                activeClassName: g,
                className: h,
                ...j,
                children: f,
              });
        }
        function Lt(m) {
          const { to: n, children: d, ...g } = m,
            h = typeof n == "string" ? n : void 0;
          return Kt(h)
            ? (0, e.jsx)(fa.Ii, { href: h, ...g, children: d })
            : (0, e.jsx)(Mt.X, { to: n, ...g, children: d });
        }
        function Ga(m) {
          const { salePageName: n, TopMonthlyReleasesStore: d } = m,
            g = (0, Ye.f1)(),
            { dtMidMonth: h, dtTestMonth: f } = La(n);
          return !h ||
            Math.floor(f.getTime() / 1e3) > g ||
            h.getFullYear() < Ft ||
            (h.getFullYear() == Ft && h.getMonth() < $e)
            ? (0, e.jsx)("div", {
                children: (0, ge.we)(
                  "#DateTimePicker_Fallback_Invalid_DateTime",
                ),
              })
            : (0, e.jsx)(et, {
                TopMonthlyReleasesStore: d,
                nMonth: h.getMonth(),
                nYear: h.getFullYear(),
                promotionName: n,
              });
        }
        const Oa = { ...lt.Xh, apply_user_filters: !0 };
        function Ra(m, n, d, g) {
          const h = c(m, n, d),
            f = (0, re.useMemo)(
              () =>
                h
                  ? Array.from(
                      new Set([
                        ...(h.top_dlc_releases?.map((P) => P.appid) || []),
                        ...(h.top_combined_app_and_dlc_releases?.map(
                          (P) => P.appid,
                        ) || []),
                      ]),
                    )
                  : (g && g(null), []),
              [h, g],
            ),
            j = (0, Fe.zX)(f, Oa),
            A = (0, re.useMemo)(
              () =>
                !h || j == Fe.Sq
                  ? []
                  : h.top_dlc_releases
                      ?.filter((P) => !Oe.A.Get().BIsAppMissing(P.appid))
                      .map((P) => P.appid),
              [h, j],
            ),
            { rgFilteredCombinedAppsAndDLC: E, rgFilteredAppIDByTier: V } = (0,
            re.useMemo)(() => {
              if (!h || j == Fe.Sq)
                return {
                  rgFilteredCombinedAppsAndDLC: [],
                  rgFilteredAppIDByTier: [],
                };
              const P = h?.top_combined_app_and_dlc_releases || [],
                z = [];
              return {
                rgFilteredCombinedAppsAndDLC: P.filter(
                  (pe) => !Oe.A.Get().BIsAppMissing(pe.appid),
                ).map((pe) => {
                  const me = pe.app_release_rank;
                  return z[me] || (z[me] = []), z[me].push(pe.appid), pe.appid;
                }),
                rgFilteredAppIDByTier: z,
              };
            }, [j, h]);
          return {
            rgAppIDs: f,
            rgMonthlyReleases: h,
            rgFilteredAppIDByTier: V,
            rgFilteredCombinedAppsAndDLC: E,
            rgFilteredDLCsAppIDs: A,
            loadState: j,
          };
        }
        function et(m) {
          const {
              TopMonthlyReleasesStore: n,
              nYear: d,
              nMonth: g,
              promotionName: h,
            } = m,
            [f, j] = (0, re.useState)(null),
            [A, E] = (0, re.useState)(null),
            {
              rgAppIDs: V,
              rgMonthlyReleases: P,
              rgFilteredAppIDByTier: z,
              rgFilteredCombinedAppsAndDLC: ve,
              rgFilteredDLCsAppIDs: pe,
              loadState: me,
            } = Ra(n, d, g);
          return (
            (0, re.useEffect)(() => {
              f ||
                (0, Et.$R)({ bForceFeatureTagForFullController: !1 }).then(j);
            }, [f]),
            Ee(A, E, pe, me),
            !P || me == Fe.Sq || !f || A == null || !V
              ? (0, e.jsxs)(we.Z, {
                  className: Ue().ChartPage,
                  children: [
                    (0, e.jsx)(Re, { nMonth: g, nYear: d }),
                    (0, e.jsx)(Pt.t, {
                      string: (0, ge.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : V.length == 0
                ? (0, e.jsxs)(we.Z, {
                    className: Ue().ChartPage,
                    children: [
                      (0, e.jsx)(Re, { nMonth: g, nYear: d }),
                      (0, e.jsx)("div", {
                        className: Ue().NoticeBox,
                        children: (0, ge.we)(
                          P.bSQLError
                            ? "#Error_ErrorCommunicatingWithNetwork"
                            : "#SteamCharts_NewMonth_NoRelease",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(we.Z, {
                    className: Ue().ChartPage,
                    children: [
                      (0, e.jsx)(St, {
                        rgAppIDs: ve,
                        nMonth: g,
                        bBlurCapsules: !0,
                        children: (0, e.jsx)(Re, { nMonth: g, nYear: d }),
                      }),
                      (0, e.jsx)(ha, {
                        promotionName: h,
                        rgFilteredCombinedAppsAndDLC: ve,
                        rgFilteredAppIDByTier: z,
                        rgFilteredDLCsAppIDs: pe,
                        facets: f,
                      }),
                    ],
                  })
          );
        }
        function Zt(m, n) {
          return (0, ge.we)(
            "#SteamCharts_Monthly_Title_wMonthAndYear",
            (0, ge.we)("#Sale_Reservation_MonthNoun_" + (m + 1)),
            n,
          );
        }
        const Ft = 2003,
          $e = 8,
          va = 1063584e3;
        function Re(m) {
          const { nMonth: n, nYear: d } = m,
            g = st(),
            h = (0, la.yk)() || (0, ca.tx)(window),
            f = (0, Ye.f1)(),
            j = n > 0 ? d : d - 1,
            A = n > 0 ? n - 1 : 11,
            E = Gt(j, A),
            V = d > Ft || n > $e,
            P = n < 11 ? d : d + 1,
            z = n < 11 ? n + 1 : 0,
            ve = Gt(P, z),
            pe = new Date(z == 11 ? d + 1 : d, z == 11 ? 0 : z + 1, 15),
            me = Math.floor(pe.getTime() / 1e3) < f,
            Le = (0, re.useCallback)(
              (Xe) => {
                h.active_modal ||
                  (Xe && me
                    ? g(Be.TopNewReleases(ve))
                    : !Xe && V && g(Be.TopNewReleases(E)));
              },
              [h.active_modal, me, V, g, ve, E],
            );
          return (
            (0, Ke.E)("ArrowLeft", () => Le(!1), !0, !0),
            (0, Ke.E)("Left", () => Le(!1), !0, !0),
            (0, Ke.E)("ArrowRight", () => Le(!0), !0, !0),
            (0, Ke.E)("Right", () => Le(!0), !0, !0),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, _e.A)(w().HeaderCtn, w().WithSubtitle),
                  children: (0, e.jsx)("h1", { children: Zt(n, d) }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, _e.A)(w().PageSubtitle),
                  children: [
                    (0, ge.we)("#SteamCharts_Monthly_SubTitle", Ie(d)),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("span", {
                      children: (0, ge.we)(
                        "#SteamCharts_Monthly_PublishSchedule",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)(we.Z, {
                  className: (0, _e.A)(w().ChartRangeCtn),
                  children: [
                    (0, e.jsx)(ye.Gq, {
                      toolTipContent: Zt(A, j),
                      children: (0, e.jsx)("div", {
                        className: (0, _e.A)({
                          [w().ChartNavCtn]: !0,
                          [w().Disabled]: !V,
                        }),
                        children: V
                          ? (0, e.jsx)(Lt, {
                              to: V ? Be.TopNewReleases(E) : void 0,
                              className: w().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: w().ChartNavPrev,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: w().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: w().ChartNavPrev,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(ye.Gq, {
                      toolTipContent: Zt(z, P),
                      children: (0, e.jsx)("div", {
                        className: (0, _e.A)({
                          [w().ChartNavCtn]: !0,
                          [w().Disabled]: !me,
                        }),
                        children: me
                          ? (0, e.jsx)(Lt, {
                              to: Be.TopNewReleases(ve),
                              className: w().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: w().ChartNavNext,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: w().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: w().ChartNavNext,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(ne, {
                      toolTipContent: (0, ge.we)(
                        "#SteamCharts_Monthly_Calendar",
                      ),
                      minDate: va,
                      maxDate: kt(f),
                      value: Math.floor(
                        new Date(d, n, 15, 12, 0, 0).getTime() / 1e3,
                      ),
                      fnOnUpdate: (Xe) => {
                        const ya = new Date(Xe * 1e3),
                          Ja = Gt(ya.getFullYear(), ya.getMonth());
                        g(Be.TopNewReleases(Ja));
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function xa(m) {
          if (!m) return "";
          const n = new Date(m * 1e3);
          return `${n.getUTCFullYear()}-${n.getUTCMonth() + 1}-${n.getUTCDate()}`;
        }
        function Ua(m) {
          return m || "global";
        }
        var ut = r(25792),
          zt = r(27638),
          rt = r(77187),
          Fa = r(65946);
        const za = 2,
          Ha = 60,
          Qt = 2022;
        function Ia(m, n) {
          const d = new Date(m * 1e3),
            g = "America/Los_Angeles",
            h = Number(
              new Intl.DateTimeFormat("en-US", {
                timeZone: g,
                year: "numeric",
              }).format(d),
            ),
            j =
              new Date(
                new Intl.DateTimeFormat("en-US", {
                  timeZone: g,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                  .formatToParts(new Date(Date.UTC(h, 11, 31)))
                  .reduce((A, E) => ((A[E.type] = E.value), A), {}).year +
                  "-12-31T10:00:00",
              ).getTime() -
              n * 24 * 60 * 60 * 1e3;
          return d.getTime() >= j;
        }
        function Ne(m, n, d) {
          const g = n * 1e3,
            f = new Date(g).getUTCFullYear();
          return (
            m >= Qt &&
            m < f + 1 &&
            (m != f || (d && Ze.iA.is_support && Ia(n, Ha)) || Ia(n, za))
          );
        }
        function xt(m, n) {
          const d = new Date().getUTCFullYear(),
            g = [];
          for (let h = d, f = 0; h >= Qt && f < n; h--, f++)
            Ne(h, m, !1) ? g.push(h) : f--;
          return g;
        }
        var It = r(22275);
        function ja(m) {
          const {
            TopSellersStore: n,
            TopMonthlyReleasesStore: d,
            DynamicUserStore: g,
            children: h,
          } = m;
          (0, zt.Y)(w().SteamChartsPage);
          const f = Xt(g);
          let j = re.useMemo(() => ({ content_descriptors_excluded: f }), [f]);
          const A = re.useRef(null);
          return (
            re.useEffect(() => {
              A.current && A.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsxs)(we.Z, {
              className: w().SteamChartsRootPanel,
              navRef: A,
              children: [
                (0, e.jsx)("div", {
                  className: w().SteamChartsRootPosition,
                  children: (0, e.jsx)("div", {
                    className: w().AlignWithMenu,
                    children: (0, e.jsxs)(we.Z, {
                      className: w().SteamChartsMenu,
                      children: [
                        (0, e.jsx)(we.Z, {
                          className: w().MenuGroup,
                          children: (0, e.jsx)("div", {
                            className: w().MenuLinks,
                            children: (0, e.jsxs)(vt, {
                              to: Be.Overview(),
                              exact: !0,
                              activeClassName: w().ActiveLink,
                              children: [
                                (0, e.jsx)("span", {
                                  className: (0, _e.A)(w().MenuItemIcon),
                                  children: (0, e.jsx)(Ve.ww0, {}),
                                }),
                                (0, ge.we)("#SteamCharts_Menu_Overview"),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)(ut.tH, { children: (0, e.jsx)(Jt, {}) }),
                        (0, e.jsx)(ut.tH, {
                          children: (0, e.jsx)(Wa, { TopSellersStore: n }),
                        }),
                        (0, e.jsx)(ut.tH, {
                          children: (0, e.jsx)(Ya, {
                            TopMonthlyReleasesStore: d,
                          }),
                        }),
                        (0, e.jsx)(ut.tH, { children: (0, e.jsx)(Tt, {}) }),
                      ],
                    }),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _e.A)(
                    w().SteamChartsShell,
                    "SteamChartsShell",
                  ),
                  children: (0, e.jsx)("div", {
                    className: w().SteamChartsContent,
                    children: (0, e.jsx)(rt.E2, {
                      defaultOptions: j,
                      children: (0, e.jsx)(ut.tH, { children: h }),
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function Xt(m) {
          return (0, Fa.q3)(() => m.ExcludedContentDescriptor);
        }
        function Jt() {
          return (0, e.jsxs)(we.Z, {
            className: w().MenuGroup,
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_LiveCharts"),
              }),
              (0, e.jsxs)(we.Z, {
                className: w().MenuLinks,
                children: [
                  (0, e.jsxs)(vt, {
                    className: w().MenuItemIcon,
                    to: Be.TopSelling(Y.TS.COUNTRY),
                    activeClassName: w().ActiveLink,
                    children: [
                      (0, e.jsx)(Ve.t1X, {}),
                      (0, ge.we)("#SteamCharts_Menu_TopSelling"),
                    ],
                  }),
                  (0, e.jsxs)(vt, {
                    className: w().MenuItemIcon,
                    to: Be.MostPlayed(),
                    activeClassName: w().ActiveLink,
                    children: [
                      (0, e.jsx)(Ve.N3h, {}),
                      (0, ge.we)("#SteamCharts_Menu_MostPlayed"),
                    ],
                  }),
                  (0, e.jsxs)(vt, {
                    className: w().MenuItemIcon,
                    to: Be.MostPlayedOnSteamDeck(),
                    activeClassName: w().ActiveLink,
                    children: [
                      (0, e.jsx)(Ve.lRD, {}),
                      (0, ge.we)("#SteamCharts_Menu_MostPlayedOnDeck"),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Wa(m) {
          const { TopSellersStore: n } = m,
            { rtCurrentWeek: d, bCountryListInitialized: g } = M(
              n,
              Y.TS.COUNTRY,
            );
          if (!d || !g) return null;
          const h = Ua(
            n.BIsValidTopSellersCountry(Y.TS.COUNTRY) ? Y.TS.COUNTRY : "",
          );
          let f = [];
          for (let j = 0; j < 3; j++) {
            const A = d - j * 60 * 60 * 24 * 7;
            f.push(
              (0, e.jsxs)(
                vt,
                {
                  to: Be.TopSellers(h, xa(A)),
                  activeClassName: w().ActiveLink,
                  fnCanTakeFocus: It.Nw,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, _e.A)(w().MenuItemIcon),
                      children: (0, e.jsx)(Ve.VvS, { color: "#C3D3D8" }),
                    }),
                    (0, ge.$z)(A, { timeZone: "UTC" }),
                  ],
                },
                A,
              ),
            );
          }
          return (0, e.jsxs)(we.Z, {
            className: (0, _e.A)(w().MenuGroup, w().Weekly),
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_WeeklyCharts"),
              }),
              (0, e.jsx)(we.Z, { className: w().MenuLinks, children: f }),
            ],
          });
        }
        function Ya(m) {
          const n = (0, Ye.f1)(),
            d = kt(n),
            g = [d, d - 720 * 60 * 60, d - 1440 * 60 * 60];
          return (0, e.jsxs)(we.Z, {
            className: (0, _e.A)(w().MenuGroup, w().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_MonthlyCharts"),
              }),
              (0, e.jsx)(we.Z, {
                className: w().MenuLinks,
                children: g.map((h) => {
                  const f = new Date(h * 1e3),
                    j = Gt(f.getFullYear(), f.getMonth()),
                    A = Be.TopNewReleases(j),
                    E = window.location.pathname === A;
                  return (0, e.jsxs)(
                    vt,
                    {
                      className: E ? w().ActiveLink : "",
                      to: A,
                      fnCanTakeFocus: It.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, _e.A)(w().MenuItemIcon),
                          children: (0, e.jsx)(Ve.VvS, { color: "#C3D3D8" }),
                        }),
                        (0, Yt.CC)(h),
                      ],
                    },
                    "month_" + h,
                  );
                }),
              }),
            ],
          });
        }
        function Tt(m) {
          const n = (0, Ye.f1)(),
            d = (0, re.useMemo)(() => xt(n, 3), [n]);
          return (0, e.jsxs)(we.Z, {
            className: (0, _e.A)(w().MenuGroup, w().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_YearlyCharts"),
              }),
              (0, e.jsx)(we.Z, {
                className: w().MenuLinks,
                children: d.map((g) => {
                  const h = Be.BestOfYear("" + g),
                    f = window.location.pathname === h;
                  return (0, e.jsxs)(
                    Lt,
                    {
                      className: (0, _e.A)(f ? w().ActiveLink : ""),
                      to: h,
                      fnCanTakeFocus: It.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, _e.A)(w().MenuItemIcon),
                          children: (0, e.jsx)(Ve.VvS, { color: "#C3D3D8" }),
                        }),
                        g,
                      ],
                    },
                    g,
                  );
                }),
              }),
            ],
          });
        }
        var ba = r(68312),
          $t = r(51079),
          an = r(179);
        function Ca(m, n, d) {
          const g = (0, ie.U)(ma.yT, de.DRF, "" + m, (0, Ye.sB)()),
            h = !0,
            f = { ...(0, ie.Sm)("tabs", ""), tabs: [] };
          return (
            d.forEach((j, A) => {
              f.tabs.push({
                unique_id: A + 1,
                default_label: j.strTabTitleToken,
                localized_label: [],
                capsules: [],
              });
            }),
            (g.jsondata.sale_sections = [f]),
            d.forEach((j, A) => {
              const {
                  rgFilteredCombinedAppsAndDLC: E,
                  rgFilteredAppIDByTier: V,
                  rgFilteredDLCsAppIDs: P,
                } = j,
                z = new Set(P),
                ve = [...P, ...E];
              g.jsondata.sale_sections.push({
                ...(0, ie.Sm)("text_section", ""),
                text_section_contents: [
                  (0, ge.we)(j.strTabSubTitleToken, m, m + 1),
                ],
                show_on_tabs: [A + 1],
                show_deck_compability_details: !!j.bShowDeckCompat,
                prefer_assets_without_overrides: h,
              });
              for (let pe in V) {
                const me = V[pe];
                g.jsondata.sale_sections.push({
                  ...(0, ie.Sm)("items", "#SteamCharts_Yearly_Rank_" + pe),
                  capsules: me.map((Le) => ({
                    id: Le,
                    type: z.has(Le) ? "dlc" : "game",
                  })),
                  capsules_per_row_array:
                    pe == "3" ? [4] : pe == "0" ? [4] : [3],
                  capsule_style_per_row_array: pe == "0" ? ["tall"] : ["grid"],
                  show_as_carousel: !1,
                  use_random_order: !0,
                  border_width: 1,
                  default_subtitle:
                    "#SteamCharts_Yearly_Rank_" + pe + "_subtitle",
                  show_on_tabs: [f.tabs[A].unique_id],
                  sale_section_classname: Rt(Number.parseInt(pe)),
                  prefer_assets_without_overrides: h,
                  show_deck_compability_details: !!j.bShowDeckCompat,
                  show_as_demos: !!j.bShowDemoInfo,
                  prefer_demo_store_page: !!j.bShowDemoInfo,
                });
              }
              Vt(
                g,
                ve,
                P,
                z,
                h,
                f.tabs[A].unique_id,
                !!j.bShowDeckCompat,
                !!j.bShowDemoInfo,
              ),
                ga(
                  g,
                  E,
                  V,
                  z,
                  h,
                  f.tabs[A].unique_id,
                  !!j.bShowDeckCompat,
                  !!j.bShowDemoInfo,
                ),
                ua(
                  g,
                  E,
                  n,
                  z,
                  h,
                  f.tabs[A].unique_id,
                  !!j.bShowDeckCompat,
                  !!j.bShowDemoInfo,
                );
            }),
            g.jsondata.sale_sections.push({
              ...(0, ie.Sm)("text_section", ""),
              text_section_contents: [
                (0, ge.we)("#SteamCharts_Yearly_FAQ") +
                  `
[url=${Ze.TS.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${(0, ge.we)("#SteamCharts_Yearly_FAQ_link")}[/url]`,
              ],
            }),
            g.jsondata.sale_sections.push({
              ...(0, ie.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, ie.r3)(),
            }),
            g
          );
        }
        function nn(m, n, d) {
          const { data: g } = (0, X.I)({
            queryKey: ["useYearEventModel", m],
            queryFn: () => {
              try {
                return Ca(m, n, d);
              } catch (h) {
                return (
                  console.error(`Yearly new release: ${m} failed: `, h), null
                );
              }
            },
          });
          return g;
        }
        function Va(m) {
          const { rgTabsData: n, nYear: d, facets: g } = m,
            h = nn(d, g, n),
            f = (0, de.sfN)(Ze.TS.LANGUAGE);
          return h
            ? (0, e.jsx)(Ot._, {
                eventModel: h,
                language: f,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : h === null
              ? (0, e.jsx)("div", {
                  className: da.ErrorStylesWithIcon,
                  children: (0, ge.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Pt.t, {
                  string: (0, ge.we)("#Loading"),
                  position: "center",
                });
        }
        function jt(m) {
          const { salePageName: n, TopYearlyReleasesStore: d } = m,
            g = (0, Ye.f1)(),
            h = Number.parseInt(n),
            f = st();
          return Ne(h, g, !0)
            ? (0, e.jsx)(ke, { nYear: h, TopYearlyReleasesStore: d })
            : (f(Be.Overview(), { bReplace: !0 }),
              (0, e.jsx)("div", {
                children: (0, ge.we)("#SteamCharts_Yearly_Unavailable"),
              }));
        }
        const Ka = {
          ...lt.Xh,
          apply_user_filters: !0,
          include_assets_without_overrides: !0,
        };
        function qe(m, n, d, g) {
          const h = g?.filter((E) => E.type == m),
            f = [],
            j = [],
            A = h
              ?.filter((E) => !Oe.A.Get().BIsAppMissing(E.appid))
              .map((E) => {
                let V = E.app_release_rank;
                return (
                  V == q.s4.xE && (V = 0),
                  f[V] || (f[V] = []),
                  f[V].push(E.appid),
                  Oe.A.Get().GetApp(E.appid)?.GetAppType() == v.uE._i &&
                    j.push(E.appid),
                  E.appid
                );
              });
          return {
            strTabTitleToken: n,
            strTabSubTitleToken: d,
            rgFilteredCombinedAppsAndDLC: A,
            rgFilteredAppIDByTier: f,
            rgFilteredDLCsAppIDs: j,
          };
        }
        function _a(m, n) {
          const d = m + 1,
            g = new Date(Date.UTC(d, 0, n, 1, 0, 0)),
            h = new Intl.DateTimeFormat("en-US", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1,
            }).formatToParts(g),
            f = (A) => Number(h.find((E) => E.type === A).value),
            j = Date.UTC(
              f("year"),
              f("month") - 1,
              f("day"),
              f("hour"),
              f("minute"),
              f("second"),
            );
          return Math.floor(j / 1e3);
        }
        function Za(m, n, d) {
          const g = (0, Ye.f1)(),
            h = g < _a(n, 1),
            f = g < _a(n, 15),
            j = ot(m, n),
            A = (0, re.useMemo)(
              () =>
                j
                  ? Array.from(
                      new Set([
                        ...(j.top_dlc_releases?.map((P) => P.appid) || []),
                        ...(j.top_combined_app_and_dlc_releases?.map(
                          (P) => P.appid,
                        ) || []),
                        ...(j.top_app_list?.map((P) => P.appid) || []),
                      ]),
                    )
                  : (d && d(null), []),
              [j, d],
            ),
            E = (0, Fe.zX)(A, Ka),
            V = (0, re.useMemo)(() => {
              if (!j || E == Fe.Sq) return [];
              const P = j?.top_combined_app_and_dlc_releases || [],
                z = [],
                ve = P.filter((Le) => !Oe.A.Get().BIsAppMissing(Le.appid)).map(
                  (Le) => {
                    let Xe = Le.app_release_rank;
                    return (
                      Xe == q.s4.xE && (Xe = 0),
                      z[Xe] || (z[Xe] = []),
                      z[Xe].push(Le.appid),
                      Le.appid
                    );
                  },
                );
              let pe = [
                  {
                    strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                    strTabSubTitleToken: f
                      ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                      : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                    rgFilteredDLCsAppIDs:
                      j.top_dlc_releases
                        ?.filter((Le) => !Oe.A.Get().BIsAppMissing(Le.appid))
                        .map((Le) => Le.appid) || [],
                    rgFilteredCombinedAppsAndDLC: ve,
                    rgFilteredAppIDByTier: z,
                  },
                ],
                me = qe(
                  q.Cm.Hm,
                  "#SteamCharts_Yearly_Tab_TopSellers",
                  h
                    ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                    : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                  j.top_app_list,
                );
              return (
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && pe.push(me),
                (me = qe(
                  q.Cm.UM,
                  "#SteamCharts_Yearly_Tab_MostPlayed",
                  "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                  j.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && pe.push(me),
                (me = qe(
                  q.Cm.IJ,
                  "#SteamCharts_Yearly_Tab_SteamDeck",
                  "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                  j.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((me.bShowDeckCompat = !0), pe.push(me)),
                (me = qe(
                  q.Cm.lu,
                  "#SteamCharts_Yearly_Tab_Controller",
                  "#SteamCharts_Yearly_Tab_Controller_desc",
                  j.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && pe.push(me),
                (me = qe(
                  q.Cm.$L,
                  "#SteamCharts_Yearly_Tab_VR",
                  "#SteamCharts_Yearly_Tab_VR_desc",
                  j.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && pe.push(me),
                (me = qe(
                  q.Cm.e,
                  "#SteamCharts_Yearly_Tab_Demo",
                  "#SteamCharts_Yearly_Tab_Demo_desc",
                  j.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((me.bShowDemoInfo = !0), pe.push(me)),
                pe
              );
            }, [j, E, h, f]);
          return {
            rgAppIDs: A,
            rgYearlyReleases: j,
            rgTabsData: V,
            loadState: E,
          };
        }
        function ke(m) {
          const { nYear: n, TopYearlyReleasesStore: d } = m,
            [g, h] = (0, re.useState)(null),
            [f, j] = (0, re.useState)(null),
            {
              rgAppIDs: A,
              rgYearlyReleases: E,
              rgTabsData: V,
              loadState: P,
            } = Za(d, n);
          return (
            (0, re.useEffect)(() => {
              f ||
                (0, Et.$R)({ bForceFeatureTagForFullController: !1 }).then(j);
            }, [f]),
            Ee(g, h, V?.[0]?.rgFilteredDLCsAppIDs, P),
            !E || P == Fe.Sq || !f || g == null || !A
              ? (0, e.jsxs)(we.Z, {
                  className: Ue().ChartPage,
                  children: [
                    (0, e.jsx)(qt, { nYear: n }),
                    (0, e.jsx)(Pt.t, {
                      string: (0, ge.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : A.length == 0
                ? (0, e.jsxs)(we.Z, {
                    className: Ue().ChartPage,
                    children: [
                      (0, e.jsx)(qt, { nYear: n }),
                      (0, e.jsx)("div", {
                        className: Ue().NoticeBox,
                        children: (0, ge.we)(
                          "#Error_ErrorCommunicatingWithNetwork",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(we.Z, {
                    className: Ue().ChartPage,
                    children: [
                      (0, e.jsx)(St, {
                        rgAppIDs: V[0].rgFilteredCombinedAppsAndDLC,
                        bTallCapsule: !0,
                        bBlurCapsules: !1,
                        children: (0, e.jsx)(qt, { nYear: n }),
                      }),
                      (0, e.jsx)(Va, { facets: f, nYear: n, rgTabsData: V }),
                    ],
                  })
          );
        }
        function qt(m) {
          const { nYear: n } = m,
            d = st(),
            g = (0, Ye.f1)(),
            [h] = (0, an.QD)("tab", 1),
            f = n + 1,
            j = Ne(f, g, !0),
            A = n - 1,
            E = Ne(A, g, !0),
            V = (0, la.yk)() || (0, ca.tx)(window),
            P = (0, re.useCallback)(
              (ve) => {
                V.active_modal ||
                  (ve && j
                    ? d(Be.BestOfYear("" + f))
                    : !ve && E && d(Be.BestOfYear("" + A)));
              },
              [V.active_modal, j, E, d, f, A],
            );
          (0, Ke.E)("ArrowLeft", () => P(!1), !0, !0),
            (0, Ke.E)("Left", () => P(!1), !0, !0),
            (0, Ke.E)("ArrowRight", () => P(!0), !0, !0),
            (0, Ke.E)("Right", () => P(!0), !0, !0);
          const z = h != 1 ? `?tab=${h}` : "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: w().YearlyHeaderCtn,
                children: [
                  (0, e.jsx)("svg", {
                    viewBox: "0 0 100 100",
                    className: w().Triangle,
                    children: (0, e.jsx)("polygon", {
                      points: "50,35 100,100 0,100",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, _e.A)(w().HeaderCtn, w().WithSubtitle),
                    children: (0, e.jsx)("h1", {
                      children: (0, ge.we)("#SteamCharts_Yearly_Title", n),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, _e.A)(w().PageSubtitle),
                    children: [
                      (0, ge.we)("#SteamCharts_Yearly_SubTitle", 100),
                      (0, e.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(we.Z, {
                className: (0, _e.A)(w().ChartRangeCtn, w().AnnualChart),
                children: [
                  (0, e.jsx)(ye.Gq, {
                    toolTipContent: (0, ge.we)("#SteamCharts_Yearly_Title", A),
                    children: (0, e.jsx)("div", {
                      className: (0, _e.A)({
                        [w().ChartNavCtn]: !0,
                        [w().Disabled]: !E,
                      }),
                      children: E
                        ? (0, e.jsx)(Lt, {
                            to: Be.BestOfYear("" + A) + z,
                            className: w().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: w().ChartNavPrev,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: w().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: w().ChartNavPrev,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                  (0, e.jsx)(ye.Gq, {
                    toolTipContent: (0, ge.we)("#SteamCharts_Yearly_Title", f),
                    children: (0, e.jsx)("div", {
                      className: (0, _e.A)({
                        [w().ChartNavCtn]: !0,
                        [w().Disabled]: !j,
                      }),
                      children: j
                        ? (0, e.jsx)(Lt, {
                            to: Be.BestOfYear("" + f) + z,
                            className: w().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: w().ChartNavNext,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: w().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: w().ChartNavNext,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        var Qa = r(90783);
        const Be = {
          Overview: () => `${W.B.SteamCharts()}`,
          MostPlayed: () => `${W.B.SteamCharts()}mostplayed`,
          MostPlayedOnSteamDeck: (m) =>
            `${W.B.SteamCharts()}steamdecktopplayed${m ? "/" + m : ""}`,
          TopSelling: (m) => `${W.B.SteamCharts()}topselling/${m}`,
          TopSellers: (m, n) =>
            `${W.B.SteamCharts()}topsellers/${m}${n ? "/" + n : ""}`,
          TopNewReleases: (m) => `${W.B.SteamCharts()}topnewreleases/${m}`,
          BestOfYear: (m) => `${W.B.SteamCharts()}bestofyear/${m}`,
        };
        async function sn(m, n) {
          const d = new it();
          return await d.Initialize(m, n), d;
        }
        function Ea(m) {
          const [n, d] = (0, re.useState)(void 0),
            g = (0, ba.TR)(),
            h = (0, ba.rX)();
          if (
            ((0, re.useEffect)(() => {
              sn(g, h).then((P) => d(P));
            }, [g, h]),
            !n)
          )
            return null;
          const f = Be,
            {
              TopSellersStore: j,
              DynamicUserStore: A,
              TopMonthlyReleasesStore: E,
              TopYearlyReleasesStore: V,
            } = n;
          return (0, e.jsxs)(ja, {
            TopSellersStore: j,
            DynamicUserStore: A,
            TopMonthlyReleasesStore: E,
            children: [
              (0, e.jsx)(Xa, {}),
              (0, e.jsx)($t.Ay, {
                domain: "store.steampowered.com",
                controller: "steamcharts",
                children: (0, e.jsx)(re.Suspense, {
                  fallback: null,
                  children: (0, e.jsxs)(nt.dO, {
                    children: [
                      (0, e.jsx)(nt.qh, {
                        path: `${f.TopNewReleases(":salePagename")}`,
                        render: (P) => {
                          const {
                            match: {
                              params: { salePagename: z },
                            },
                          } = P;
                          return (0, e.jsx)($t.Ay, {
                            method: "monthlytopreleases",
                            children: (0, e.jsx)(ut.tH, {
                              children: (0, e.jsx)(Ga, {
                                salePageName: z,
                                TopMonthlyReleasesStore: E,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(nt.qh, {
                        path: `${f.BestOfYear(":salePagename")}`,
                        render: (P) => {
                          const {
                            match: {
                              params: { salePagename: z },
                            },
                          } = P;
                          return (0, e.jsx)($t.Ay, {
                            method: "bestofyear",
                            children: (0, e.jsx)(ut.tH, {
                              children: (0, e.jsx)(jt, {
                                salePageName: z,
                                TopYearlyReleasesStore: V,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(nt.qh, { children: (0, e.jsx)(Qa.a, {}) }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Xa() {
          const { pathname: m } = (0, nt.zy)();
          return (
            re.useEffect(() => {
              typeof window.ScrollToTopStoreMobileAware < "u"
                ? window.ScrollToTopStoreMobileAware()
                : window.scrollTo(0, 0);
            }, [m]),
            null
          );
        }
      },
      50909: (F) => {
        F.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
          BackgroundAnimation: "_1xc_h6g1jbrfqXQXHDA2eY",
          "ItemFocusAnim-darkerGrey-nocolor": "_32Qiunpe7Bq8tRMP7zANIV",
          "ItemFocusAnim-darkerGrey": "_1jLvKsCp-1NNukUKFcJBiF",
          "ItemFocusAnim-darkGreySettings": "_2oonpIg6GiNC1fFwAuTeY1",
          "ItemFocusAnim-darkGrey": "_25MzDFkbrWeDNWxcpYDDqL",
          "ItemFocusAnim-grey": "_24xCtEhvscRzLJyaNWLeUa",
          "ItemFocusAnim-translucent-white-10": "_191r_XeIDZJjVtYMrw4vZN",
          "ItemFocusAnim-translucent-white-20": "_3PT6d0B4zsV60BfrKuIA1r",
          "ItemFocusAnimBorder-darkGrey": "_1Z9KMCmIY9huHpqwfwRypj",
          "ItemFocusAnim-green": "_1WZWN5W96O7pMURRF2eleh",
          focusAnimation: "_2hRoGMM5UsM8oeV-txHPNu",
          hoverAnimation: "_1YMbPvrOkuzyOJDFmv_N8s",
        };
      },
      71347: (F) => {
        F.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (F) => {
        F.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (F) => {
        F.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      95863: (F) => {
        F.exports = {
          narrowWidth: "500px",
          CalendarBtn: "_6LCq5awwJWbT0WLusE-as",
          PickerContainer: "_3YV5gmu_9QoN0IYGWX7N0E",
        };
      },
      17618: (F) => {
        F.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      32190: (F) => {
        F.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (F) => {
        F.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (F) => {
        F.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (F) => {
        F.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (F) => {
        F.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (F) => {
        F.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (F) => {
        F.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (F) => {
        F.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      25359: (F) => {
        F.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (F) => {
        F.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      20860: (F) => {
        F.exports = {
          Ctn: "_1fmjHmozlsZ8ZXlDnql4Pe",
          Header: "_1gKvHUxWanEHu-0GbjB4KV",
          Body: "_3tPVeOGZDIVgS7KGdpTsXB",
          Summary: "_3hyLqEQDWP9Sck6GY2mO9_",
          Controls: "_2GkioR72RQBbHku00uxt47",
          ControlButton: "_3ObP_u1dEak3ra2LLM7GVb",
          ExponentInput: "_3a0Hx5NOSuPBHi9gp7kT2I",
          Chart: "_2F7VrAMPKV6N4hhdOm4v6B",
          Column: "FhDnO3NBSjZkWQv3No3N3",
          ColumnTitle: "_2SG3j7hLVHdpo3WooeBJiv",
          Row: "_2-m8vjFf_-iwN09EHqQm7c",
          Highlighted: "kWJDRycQPH53McjlfFjQ-",
        };
      },
      15496: (F) => {
        F.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      64734: (F) => {
        F.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      89921: (F) => {
        F.exports = {
          ChartPage: "_1A7NagdRz58_o8HPHMa3eE",
          NoticeBox: "Wz_vOPow_bEtEb4cgCPEi",
        };
      },
      27221: (F) => {
        F.exports = {
          narrowWidth: "500px",
          ImagesCtn: "_3C3Hy1Ldb_j8FpXikuio9T",
          BlurCapsules: "ZhjPEOG0gzrTqrcqmNZsY",
          AllImages: "_1DF4gfqbWS61FaehmUYkuU",
          AnnualChart: "RLK6pXS_oOr0O7-PifqTy",
          ImageTint: "_1uXifcwYEEZepZq9GX0pf0",
          AllImagesCtn: "Y8NVLbtTPQh9gVfG4V_tl",
          FadeInTiles: "_3HscHWkOLtsK-kzGBMVI2Y",
          TallCapsules: "_3KtoWhNtwhnMPl7e0OxGBj",
          Wide2: "_11TDFqeudgrq4D6KFL1Hs3",
        };
      },
      87853: (F) => {
        F.exports = {
          PlatinumSection: "_2M6w2tE1mq1K57VNXnkzkT",
          GoldSection: "_2XQYX2jtslkhZFeU8dsDIp",
          SilverSection: "_2KzJEuTfwQGu9Qw4v4HY7R",
          BronzeSection: "aAu4zZKXrAiL6gzPT_bZG",
          AllTiers: "_3MBqFIUsuhw30AtrWEE_mX",
        };
      },
      74812: (F) => {
        F.exports = {
          SteamChartsPage: "_2aYDMWWN9bAVaHmPfFHXWA",
          SteamChartsRootPanel: "_3GQ1HSHen1-JyKYkhmWt9a",
          SteamChartsShell: "_2rArjHHk-sJxtm0AQK-ifY",
          SteamChartsContent: "_2uKyXTgmlwRhfDB9pAKD76",
          PageSubtitle: "_3wxTKWJdN8vIdXKlu-ZHZX",
          TopDeckSubtitle: "_1l72-mnPYU9Ton0UyCrTgL",
          HeaderCtn: "_1kLTg9HHfMgVo8gDstT8uR",
          WithSubtitle: "_kbFJdSwEh7bc98Yq_gZ2",
          YearlyHeaderCtn: "_23MzHKxNYqVS4XAaaE8YQK",
          Triangle: "_3022w3NEiudslTNnPMWd8Z",
          SteamChartsRootPosition: "_2tAk2uCRwLsaOcFMF0VAr9",
          AlignWithMenu: "_2-hIBICcMkAAkFzWEvp5uM",
          SteamChartsMenu: "KSZ9hmL_XbHI_tlSUQylO",
          SteamLogo: "_3qWYYrOe1bQhTJwm0zc4E3",
          MenuGroup: "_2X7eT07iC6SQRu_uj4Web3",
          Weekly: "jC5Vq_nM-w0wUMREt340Y",
          MenuLinks: "Lj-O1sumeRPMtyePxydGf",
          Monthly: "_2mbn0MybOi1zQDV9iYg5X-",
          MenuHeader: "_19bojcj07vGvbhrAJ4T55c",
          ActiveLink: "_3kEWJGuSEOp09T1ZND24zk",
          ChartRangeCtn: "wLFBOAfa7yijnxFGxj9xs",
          AnnualChart: "_2HgYqWURygpji4_HPSk_sw",
          ChartRangeText: "vlHd8EhkUPvzcN2Xn4Y0j",
          ShortDate: "_2AQqwf9WZKu7d8zUGYJ5VR",
          LongDate: "_1V5zBbE55eaOW2YYdG-bDd",
          ChartNavCtn: "_1tUsAmcZXj8lDhFYLPtWSX",
          ChartNavHitArea: "_1PJCAo5GkI9HNCJX88goY5",
          Disabled: "_2VVBwS-S1js1QLzT90jv1S",
          ChartNavPrev: "PFs4U4cBAxm-GI1zMSV7q",
          ChartNavNext: "_27ASBphHd61RCZhLfsKIZ5",
        };
      },
      17083: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { N_: () => O, k2: () => xe });
        var e = r(92757),
          W = r(42891),
          X = r(90626),
          de = r(29248),
          oe = r(58584),
          se = r(81115),
          he = r(68841),
          Q = (function (M) {
            (0, W.A)(ee, M);
            function ee() {
              for (
                var Ie, le = arguments.length, be = new Array(le), c = 0;
                c < le;
                c++
              )
                be[c] = arguments[c];
              return (
                (Ie = M.call.apply(M, [this].concat(be)) || this),
                (Ie.history = (0, de.zR)(Ie.props)),
                Ie
              );
            }
            var q = ee.prototype;
            return (
              (q.render = function () {
                return X.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              ee
            );
          })(X.Component),
          _ = (function (M) {
            (0, W.A)(ee, M);
            function ee() {
              for (
                var Ie, le = arguments.length, be = new Array(le), c = 0;
                c < le;
                c++
              )
                be[c] = arguments[c];
              return (
                (Ie = M.call.apply(M, [this].concat(be)) || this),
                (Ie.history = (0, de.TM)(Ie.props)),
                Ie
              );
            }
            var q = ee.prototype;
            return (
              (q.render = function () {
                return X.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              ee
            );
          })(X.Component),
          v = function (ee, q) {
            return typeof ee == "function" ? ee(q) : ee;
          },
          Z = function (ee, q) {
            return typeof ee == "string" ? (0, de.yJ)(ee, null, null, q) : ee;
          },
          J = function (ee) {
            return ee;
          },
          ae = X.forwardRef;
        typeof ae > "u" && (ae = J);
        function D(M) {
          return !!(M.metaKey || M.altKey || M.ctrlKey || M.shiftKey);
        }
        var N = ae(function (M, ee) {
            var q = M.innerRef,
              Ie = M.navigate,
              le = M.onClick,
              be = (0, se.A)(M, ["innerRef", "navigate", "onClick"]),
              c = be.target,
              Me = (0, oe.A)({}, be, {
                onClick: function (Ge) {
                  try {
                    le && le(Ge);
                  } catch (tt) {
                    throw (Ge.preventDefault(), tt);
                  }
                  !Ge.defaultPrevented &&
                    Ge.button === 0 &&
                    (!c || c === "_self") &&
                    !D(Ge) &&
                    (Ge.preventDefault(), Ie());
                },
              });
            return (
              J !== ae ? (Me.ref = ee || q) : (Me.ref = q),
              X.createElement("a", Me)
            );
          }),
          O = ae(function (M, ee) {
            var q = M.component,
              Ie = q === void 0 ? N : q,
              le = M.replace,
              be = M.to,
              c = M.innerRef,
              Me = (0, se.A)(M, ["component", "replace", "to", "innerRef"]);
            return X.createElement(e.XZ.Consumer, null, function (We) {
              We || (0, he.A)(!1);
              var Ge = We.history,
                tt = Z(v(be, We.location), We.location),
                ot = tt ? Ge.createHref(tt) : "",
                it = (0, oe.A)({}, Me, {
                  href: ot,
                  navigate: function () {
                    var at = v(be, We.location),
                      Ue = (0, de.AO)(We.location) === (0, de.AO)(Z(at)),
                      pt = le || Ue ? Ge.replace : Ge.push;
                    pt(at);
                  },
                });
              return (
                J !== ae ? (it.ref = ee || c) : (it.innerRef = c),
                X.createElement(Ie, it)
              );
            });
          });
        if (0) var G, $;
        var Ce = function (ee) {
            return ee;
          },
          Y = X.forwardRef;
        typeof Y > "u" && (Y = Ce);
        function ue() {
          for (var M = arguments.length, ee = new Array(M), q = 0; q < M; q++)
            ee[q] = arguments[q];
          return ee
            .filter(function (Ie) {
              return Ie;
            })
            .join(" ");
        }
        var xe = Y(function (M, ee) {
          var q = M["aria-current"],
            Ie = q === void 0 ? "page" : q,
            le = M.activeClassName,
            be = le === void 0 ? "active" : le,
            c = M.activeStyle,
            Me = M.className,
            We = M.exact,
            Ge = M.isActive,
            tt = M.location,
            ot = M.sensitive,
            it = M.strict,
            ht = M.style,
            at = M.to,
            Ue = M.innerRef,
            pt = (0, se.A)(M, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return X.createElement(e.XZ.Consumer, null, function (w) {
            w || (0, he.A)(!1);
            var re = tt || w.location,
              lt = Z(v(at, re), re),
              Ye = lt.pathname,
              Et = Ye && Ye.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              Oe = Et
                ? (0, e.B6)(re.pathname, {
                    path: Et,
                    exact: We,
                    sensitive: ot,
                    strict: it,
                  })
                : null,
              Fe = !!(Ge ? Ge(Oe, re) : Oe),
              Ve = typeof Me == "function" ? Me(Fe) : Me,
              yt = typeof ht == "function" ? ht(Fe) : ht;
            Fe && ((Ve = ue(Ve, be)), (yt = (0, oe.A)({}, yt, c)));
            var ct = (0, oe.A)(
              {
                "aria-current": (Fe && Ie) || null,
                className: Ve,
                style: yt,
                to: lt,
              },
              pt,
            );
            return (
              Ce !== Y ? (ct.ref = ee || Ue) : (ct.innerRef = Ue),
              X.createElement(O, ct)
            );
          });
        });
        if (0) var fe;
      },
      44894: (F, Ae, r) => {
        "use strict";
        r.d(Ae, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

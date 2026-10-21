/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2414],
    {
      50109: (F, Se, r) => {
        "use strict";
        r.d(Se, { E: () => ae, O: () => se });
        var e = r(14947),
          W = r(65946),
          X = r(99412),
          he = r(41635),
          R = r(27066),
          ge = r(3166),
          pe = r(38585),
          B = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          Y = (N, k, K, le) => {
            for (
              var ve = le > 1 ? void 0 : le ? i(k, K) : k, j = N.length - 1, V;
              j >= 0;
              j--
            )
              (V = N[j]) && (ve = (le ? V(k, K, ve) : V(ve)) || ve);
            return le && ve && B(k, K, ve), ve;
          };
        const Q = class aa {
          m_eCurLang = (0, X.sfN)(ge.TS.LANGUAGE);
          m_rgHasData = (0, he.$Y)([], X.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new pe.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(k) {
            return this.m_eCurLang != k
              ? ((this.m_eCurLang = k), this.GetCallback().Dispatch(k), !0)
              : !1;
          }
          SetHasLanguage(k) {
            k.forEach((K, le) => {
              this.m_rgHasData[le] != K && (this.m_rgHasData[le] = K);
            });
          }
          BHasLanguageData(k) {
            return this.m_rgHasData[k];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(k) {
            k != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = k);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              aa.s_globalSingletonStore ||
                (aa.s_globalSingletonStore = new aa()),
              aa.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        Y([e.sH], Q.prototype, "m_eCurLang", 2),
          Y([e.sH], Q.prototype, "m_rgHasData", 2),
          Y([e.sH], Q.prototype, "m_bHasLocalizationContext", 2),
          Y([R.o], Q.prototype, "GetCurEditLanguage", 1),
          Y([R.o], Q.prototype, "SetCurEditLanguage", 1),
          Y([e.XI.bound], Q.prototype, "SetHasLanguage", 1),
          Y([R.o], Q.prototype, "BHasLanguageData", 1);
        let se = Q;
        function ae() {
          return (0, W.q3)(() => se.Get().GetCurEditLanguage());
        }
      },
      21042: (F, Se, r) => {
        "use strict";
        r.d(Se, { Sm: () => pe, U: () => R, r3: () => i });
        var e = r(99412),
          W = r(72609),
          X = r(73259),
          he = r(76559);
        function R(Y, Q, se, ae) {
          const N = new X.lh();
          return (
            (N.type = Q),
            (N.clanSteamID = new he.b(Y, W.TS.EUNIVERSE, e.P3F, 0)),
            (N.GID = "fakeevent_" + ge++),
            (N.visibility_state = X.zv.k_EEventStateUnlisted),
            (N.visibilityStartTime = ae - 1),
            (N.jsondata.bSaleEnabled = !0),
            (N.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (N.jsondata.sale_vanity_id = se),
            (N.jsondata.sale_header_offset = 0),
            (N.jsondata.sale_header_disable_top_margin = !1),
            N
          );
        }
        let ge = 1234;
        function pe(Y, Q) {
          return {
            unique_id: ge++,
            capsules: [],
            events: [],
            links: [],
            section_type: Y,
            localized_label: [],
            default_label: Q,
          };
        }
        const B = "socialcontent_";
        function i() {
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
                unique_id: B + Math.floor(Math.random() * 1e6),
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
      55436: (F, Se, r) => {
        "use strict";
        r.d(Se, { r: () => ae, z: () => Q });
        var e = r(7850),
          W = r(90626),
          X = r(16412),
          he = r(25792),
          R = r(96538),
          ge = r(18210),
          pe = r(85599),
          B = r(17618),
          i = r.n(B),
          Y = r(53424);
        const Q = (N) => {
            const { clanSteamID: k, fnImageSelectCallBack: K } = N,
              [le, ve] = (0, W.useState)(""),
              j = (0, Y.mr)(N.clanSteamID.GetAccountID()),
              V = () => N.closeModal && N.closeModal(),
              ie = Y.pU.GetFilteredClanImages(k, le),
              je = (J) => {
                K(J), V();
              };
            return (0, e.jsx)(he.tH, {
              children: (0, e.jsx)(R.x_, {
                onEscKeypress: V,
                children: (0, e.jsxs)(X.UC, {
                  children: [
                    (0, e.jsx)(X.Y9, {
                      children: (0, ge.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(X.nB, {
                      children: (0, e.jsxs)(X.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ge.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(X.pd, {
                            placeholder: (0, ge.we)("#ClanImageChooser_Search"),
                            value: le,
                            onChange: (J) => ve(J.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: B.ImagesOuterContainer,
                            children: j
                              ? (0, e.jsx)(pe.t, {
                                  size: "medium",
                                  string: (0, ge.we)("#Loading"),
                                })
                              : ie.length > 0
                                ? ie.map((J) =>
                                    (0, e.jsx)(
                                      se,
                                      {
                                        clanImage: J,
                                        searchStringHilight: le,
                                        fnImageClick: je,
                                      },
                                      "ci" + J.image_hash,
                                    ),
                                  )
                                : le.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, ge.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, ge.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(X.wi, {
                      children: (0, e.jsx)(X.$n, {
                        onClick: V,
                        children: (0, ge.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          se = (N) => {
            const {
              clanImage: k,
              searchStringHilight: K,
              fnImageClick: le,
            } = N;
            let ve = k.file_name ? k.file_name : "",
              j = ae(K, ve, String(k.imageid), B.Hilight);
            return (0, e.jsxs)("div", {
              className: B.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: B.Image,
                  style: { backgroundImage: `url( '${k.thumb_url}' )` },
                  onDoubleClick: () => le(k),
                }),
                (0, e.jsx)("div", {
                  className: B.ImageFilename,
                  title: ve,
                  children: j,
                }),
              ],
            });
          };
        function ae(N, k, K, le) {
          let ve = [];
          if (N.length > 0) {
            let j = k.toLocaleLowerCase();
            for (let V = 0; V < k.length; ) {
              let ie = j.indexOf(N, V);
              if (ie < 0) {
                ve.push(
                  (0, e.jsx)(
                    "span",
                    { children: k.substring(V) },
                    K + "_" + String(V),
                  ),
                );
                break;
              } else
                V < ie &&
                  ve.push(
                    (0, e.jsx)(
                      "span",
                      { children: k.substring(V, ie) },
                      K + "_" + String(V),
                    ),
                  ),
                  ve.push(
                    (0, e.jsx)(
                      "span",
                      { className: le, children: k.substr(ie, N.length) },
                      K + "_" + String(V),
                    ),
                  ),
                  (V = ie + N.length);
            }
          } else ve.push((0, e.jsx)("span", { children: k }, K + "_null"));
          return ve;
        }
      },
      24806: (F, Se, r) => {
        "use strict";
        r.d(Se, { Ng: () => le });
        var e = r(7850),
          W = r(75844),
          X = r(90626),
          he = r(99412),
          R = r(32093),
          ge = r(50109),
          pe = r(95695),
          B = r.n(pe),
          i = r(36707),
          Y = r(18210),
          Q = r(92264),
          se = r(30096),
          ae = r(71421),
          N = Object.defineProperty,
          k = Object.getOwnPropertyDescriptor,
          K = (V, ie, je, J) => {
            for (
              var L = J > 1 ? void 0 : J ? k(ie, je) : ie, U = V.length - 1, ee;
              U >= 0;
              U--
            )
              (ee = V[U]) && (L = (J ? ee(ie, je, L) : ee(L)) || L);
            return J && L && N(ie, je, L), L;
          };
        let le = class extends X.Component {
          GenerateLanguageOptions() {
            let V = [];
            const {
              fnFilterLanguage: ie,
              fnLangHasData: je,
              fnLastUpdateRTime: J,
              fnIsLangSupported: L,
            } = this.props;
            this.props.bAllowUnsetOption &&
              V.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: he.xPp,
                    children: (0, Y.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let U = new Array();
            const ee = this.props.realms || [R.TU.k_ESteamRealmGlobal];
            for (const de of Y.A0.GetLanguageListForRealms(ee)) {
              if (ie && !ie(de)) continue;
              const Ce = (0, he.LgB)(de),
                ce = (0, Y.we)("#Language_" + Ce),
                we = !!(L && L(de));
              U.push({ eLang: de, sLocName: ce, bSupported: we });
            }
            U.sort((de, Ce) =>
              de.bSupported != Ce.bSupported
                ? de.bSupported
                  ? -1
                  : 1
                : de.sLocName.localeCompare(Ce.sLocName),
            );
            let be = !1;
            for (const de of U) {
              de.bSupported != be &&
                (V.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: B().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, Y.we)(
                        de.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    de.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (be = de.bSupported));
              const Ce = je && je(de.eLang),
                ce = J && J(de.eLang);
              let we = de.sLocName;
              ce &&
                ce !== 0 &&
                ((we += " "),
                (we += (0, Y.we)(
                  "#Language_Last_Update",
                  (0, Y.$z)(ce) +
                    " @ " +
                    (0, Q.KC)(ce, { bForce24HourClock: !1 }),
                ))),
                V.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: de.eLang,
                      className: (0, i.A)(
                        { [B().LanguageWithContent]: Ce },
                        de.bSupported
                          ? B().SupportedLanguage
                          : B().UnsupportedLanguage,
                      ),
                      children: we,
                    },
                    "langpicker" + de.eLang + (Ce ? "_hasdata" : ""),
                  ),
                );
            }
            return V;
          }
          OnLanguageChange(V) {
            const { fnOnLanguageChanged: ie, selectedLang: je } = this.props;
            let J = Number.parseInt(V.currentTarget.value);
            J != je && ie && ie(J);
          }
          render() {
            const {
              selectedLang: V,
              bDisabled: ie,
              strTooltip: je,
            } = this.props;
            let J = this.GenerateLanguageOptions();
            return (0, e.jsx)(ae.he, {
              toolTipContent: je,
              children: (0, e.jsx)("select", {
                value: V,
                onChange: this.OnLanguageChange,
                disabled: ie,
                children: J,
              }),
            });
          }
        };
        K([se.oI], le.prototype, "OnLanguageChange", 1), (le = K([W.PA], le));
        function ve(V) {
          const [ie, je] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(le, {
            selectedLang: je,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !ie,
            strTooltip: ie
              ? void 0
              : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function j(V) {
          const { fnLangHasData: ie } = V;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const je = useObserver(() => {
            const J = [];
            for (let L = k_ELanguage_English; L < k_ELanguage_MAX; ++L)
              J[L] = !!(ie && ie(L));
            return J;
          });
          return (
            React.useEffect(
              () => CEditorLocStore.Get().SetHasLanguage(je),
              [je],
            ),
            jsx(Fragment, {})
          );
        }
      },
      14069: (F, Se, r) => {
        "use strict";
        r.d(Se, { _: () => xs });
        var e = r(7850),
          W = r(99412),
          X = r(19298),
          he = r(20169),
          R = r(65946),
          ge = r(76789),
          pe = r.n(ge),
          B = r(36707),
          i = r(18210),
          Y = r(3166),
          Q = r(68266);
        function se(s) {
          return s.jsondata.sale_logo_cross_promo_only
            ? !1
            : (s.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0;
        }
        function ae(s) {
          const { eventModel: t, language: a } = s,
            [o, l] = (0, R.q3)(() => [
              t.jsondata.sale_logo_url,
              i.NT.GetWithFallback(t.jsondata.localized_sale_logo, a),
            ]);
          return l && l?.length > 0
            ? o
              ? (0, e.jsx)("a", {
                  className: pe().SalePageLogoCtn,
                  href: Y.TS.STORE_BASE_URL + o,
                  children: (0, e.jsx)(N, { ...s }),
                })
              : (0, e.jsx)("div", {
                  className: (0, B.A)(pe().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(N, { ...s }),
                })
            : null;
        }
        function N(s) {
          const { eventModel: t, language: a } = s,
            o = (0, Q.m0)(t, "sale_logo", a);
          return (0, e.jsx)("img", { src: o, alt: "logo" });
        }
        var k = r(28604),
          K = r(36631),
          le = r(64387);
        function ve(s) {
          const { strURL: t } = s;
          return t
            ? (0, e.jsx)("div", {
                className: le.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var j = r(90626),
          V = r(73259),
          ie = r(25792),
          je = r(52393),
          J = r.n(je),
          L = r(95695),
          U = r.n(L),
          ee = r(82054);
        function be(s) {
          const { event: t, bIsPreview: a } = s;
          let o = t.jsondata.sale_background_video_webm,
            l = t.jsondata.sale_background_video_mp4;
          return l || o
            ? (0, e.jsx)(ie.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, B.A)(
                    J().SaleBackground,
                    J()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    J().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: a
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    o && (0, e.jsx)("source", { src: o, type: "video/webm" }),
                    l &&
                      !Y.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: l, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function de(s) {
          const {
              event: t,
              language: a,
              children: o,
              bIsPreview: l,
              personalizedCarousels: c,
            } = s,
            u = j.useRef(null),
            v = (0, Q.m0)(t, "sale_header", a),
            [h] = (0, R.q3)(() => [t.jsondata.sale_sub_menu]);
          j.useEffect(() => {
            if (!v) return;
            const _ = new Image();
            (_.onload = () => {
              const P = (100 * _.width) / 950 + "%";
              u.current && u.current.style.setProperty("--background-scale", P);
            }),
              (_.src = v);
          }, [v]);
          const x = t.jsondata.sale_sections?.some(
              (_) => _.section_type === "contenthubmaincarousel",
            ),
            b =
              t.jsondata.item_source_type === V.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                x),
            C = v ? `url(${v})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              h
                ? (0, e.jsx)(ee.j, {
                    event: t,
                    language: a,
                    bIsPreview: l,
                    subMenu: h,
                    styleVariation: ee.g.k_SubMenu,
                    personalizedCarousels: c,
                  })
                : (0, e.jsx)(ve, { strURL: v }),
              (0, e.jsx)("div", {
                className: (0, B.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: b,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, B.A)(
                    J()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    J().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: u,
                  children: [
                    v && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, B.A)(
                            U().SalePageBackground,
                            U().BackgroundImage,
                            U().Blur,
                          ),
                          src: v,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, B.A)(
                            U().SalePageBackground,
                            U().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: C,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(be, { event: t, bIsPreview: l }),
                    (0, e.jsx)(e.Fragment, { children: o }),
                  ],
                }),
              }),
            ],
          });
        }
        var Ce = r(26589),
          ce = r(39905),
          we = r(50909),
          Re = r.n(we);
        function Ge(s) {
          const { eventModel: t } = s,
            { data: a } = (0, Ce.hM)(t.clanSteamID.GetAccountID());
          if (
            !a ||
            (!a.can_edit && !a.support_user) ||
            (0, Y.yK)() == "community"
          )
            return;
          const o = t.GetAllTags(),
            l = [];
          if (
            (o.includes("hide_store") &&
              l.push(
                ce.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            o.includes("mod_hide_store") &&
              a.support_user &&
              l.push(ce.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              o.includes("contenthub") &&
              l.push(
                ce.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && l.length == 0))
          )
            return (0, e.jsx)("div", {
              className: Re().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: Re().WarningText,
                      children: ce.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  l.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: Re().WarningText,
                      children: [
                        ce.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          l.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: l.map((c) =>
                            (0, e.jsx)("li", { children: c }, c),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var tt = r(72865),
          _t = r(71347),
          $e = r.n(_t),
          pt = r(53107);
        function ft(s) {
          const { rgPresenters: t } = s;
          if (!t || t.length == 0) return null;
          const a = (0, W.sfN)(Y.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, B.A)(
                  $e().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: ce.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(Pe, { presentor: t[0], lang: a }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, B.A)(
                  $e().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: ce.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((o, l) =>
                      (0, e.jsxs)(
                        j.Fragment,
                        {
                          children: [
                            (0, e.jsx)(Pe, { presentor: o, lang: a }),
                            t.length > 2 && ", ",
                          ],
                        },
                        o.url,
                      ),
                    ),
                  (0, e.jsx)(Pe, { presentor: t[t.length - 1], lang: a }),
                ),
              });
        }
        function Pe(s) {
          const { presentor: t, lang: a } = s,
            o = (0, tt.aL)(t.url);
          return (0, e.jsx)(pt.uU, {
            href: o,
            bUseLinkFilter: !0,
            className: $e().PresenterLabel,
            children: i.NT.GetWithFallback(t.localized_presenter_name, a),
          });
        }
        var Et = r(60480),
          w = r(92757),
          ne = r(18994),
          qe = r(56412),
          Ue = r(86515),
          yt = r(32279),
          Oe = r(39153),
          ze = r(61478);
        function We(s) {
          const { event: t, broadcastEmbedContext: a } = s,
            o = !!t?.jsondata?.broadcast_display_wide_player,
            l = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(ze.B, {
                event: t,
                broadcastEmbedContext: a,
                bWideBroadcastDisplay: o,
                bWideBroadcastPermitChat: l,
              }),
          });
        }
        var St = r(85671),
          At = r(24660),
          wa = r(71157),
          dt = r(15181),
          Ba = r(24805),
          na = r(10142),
          Ft = r(84676),
          sa = r(14560),
          ut = r(9807),
          _e = r(20860),
          $ = r.n(_e);
        function ra(s, t) {
          return s
            ? t
              ? !!s.valve_admin
              : !!(s.valve_admin || s.support_user)
            : !1;
        }
        function oa(s, t) {
          const a = !!(s && s.BIsClanAccount()),
            { data: o } = (0, Ce.hM)(a ? s.GetAccountID() : 0);
          return a && ra(o, t);
        }
        function ia(s) {
          const { clanSteamID: t, id: a } = s;
          return oa(t, s.requireAdmin)
            ? (0, e.jsx)("div", {
                id: a,
                className: (0, B.A)(
                  s.className,
                  s.requireAdmin
                    ? L.ValveOnlyAdminBackground
                    : L.ValveOnlyBackground,
                ),
                children: s.children,
              })
            : null;
        }
        var re = r(16412);
        const Dt = 12,
          Ht = 240;
        function Nt(s) {
          const { event: t } = s,
            [a] = (0, wa.Q)(ne.QS, void 0),
            [o, l] = j.useState(!1),
            c = (0, Y.Tc)("rgMLRecommenderWishlist", "application_config"),
            u = Array.isArray(c) && c.length > 0 && Number.isInteger(c[0]);
          return !t.BIsNextFest() || !u || a == ne.sQ.Random || (0, V.UR)(t) > 0
            ? null
            : (0, e.jsxs)(ia, {
                clanSteamID: t.clanSteamID,
                className: $().Ctn,
                children: [
                  (0, e.jsxs)(At.ml, {
                    className: $().Header,
                    onClick: () => l(!o),
                    children: [
                      o ? "\u25BC" : "\u25B6",
                      " Next Fest personalized order (VO)",
                    ],
                  }),
                  o && (0, e.jsx)(at, { event: t, rgRecommendedAppIDs: c }),
                ],
              });
        }
        function at(s) {
          const { event: t, rgRecommendedAppIDs: a } = s,
            [o, l] = j.useState(void 0);
          (0, Ft.zX)(a, Ba.Xh);
          const [c, u] = j.useState(void 0),
            [v, h] = j.useState(""),
            x = t.jsondata.sale_ml_recommender_weight_exponent || V.ld,
            b = parseFloat(v),
            C = c ?? (0, sa.JE)(t),
            _ = b || x,
            E = j.useMemo(() => (0, ut.a0)(a, a, (M) => M, C, _), [a, C, _]),
            P = j.useMemo(() => new Map(a.map((M, te) => [M, te])), [a]),
            G = j.useMemo(() => new Map(E.map((M, te) => [M, te])), [E]),
            T = a.length,
            A = (M) => na.A.Get().GetApp(M)?.GetName() ?? `App ${M}`,
            H = (M) => `hsl(${Math.round((240 * P.get(M)) / T)}, 80%, 65%)`,
            O = (M, te) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, B.A)($().Row, o == M && $().Highlighted),
                  style: { height: Dt, color: H(M) },
                  title: `${A(M)} (${M}): recommended #${P.get(M) + 1}, shuffled to #${G.get(M) + 1}`,
                  onMouseEnter: () => l(M),
                  children: te,
                },
                M,
              ),
            q = (M, te) =>
              (0, e.jsx)(
                "line",
                {
                  x1: 0,
                  y1: (P.get(M) + 0.5) * Dt,
                  x2: Ht,
                  y2: (G.get(M) + 0.5) * Dt,
                  stroke: te ? "white" : H(M),
                  strokeWidth: te ? 2 : 1,
                  strokeOpacity: te ? 1 : o === void 0 ? 0.6 : 0.15,
                },
                M,
              );
          return (0, e.jsxs)("div", {
            className: $().Body,
            children: [
              (0, e.jsxs)("div", {
                className: $().Summary,
                children: [
                  T,
                  " recommendations, exponent ",
                  _,
                  _ < 0 && " (shuffle disabled)",
                  ", seed ",
                  C,
                  ". Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.",
                ],
              }),
              (0, e.jsxs)("div", {
                className: $().Controls,
                children: [
                  (0, e.jsx)(re.$n, {
                    className: $().ControlButton,
                    onClick: () => u(dt.m()),
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
                        className: $().ExponentInput,
                        placeholder: String(x),
                        value: v,
                        onChange: (M) => h(M.target.value),
                      }),
                    ],
                  }),
                  (c !== void 0 || v != "") &&
                    (0, e.jsx)(re.$n, {
                      className: $().ControlButton,
                      onClick: () => {
                        u(void 0), h("");
                      },
                      children: "Reset to page's order",
                    }),
                  (0, e.jsx)("span", {
                    children: "Only affects this chart, not the page",
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: $().Chart,
                onMouseLeave: () => l(void 0),
                children: [
                  (0, e.jsxs)("div", {
                    className: $().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: $().ColumnTitle,
                        children: "Recommended order",
                      }),
                      a.map((M, te) => O(M, `#${te + 1} ${A(M)}`)),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: $().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: $().ColumnTitle,
                        children: "\xA0",
                      }),
                      (0, e.jsxs)("svg", {
                        width: Ht,
                        height: T * Dt,
                        children: [
                          a.filter((M) => M != o).map((M) => q(M, !1)),
                          o !== void 0 && P.has(o) && q(o, !0),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: $().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: $().ColumnTitle,
                        children: "Shuffled order",
                      }),
                      E.map((M) => O(M, `#${P.get(M) + 1} ${A(M)}`)),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ma(s) {
          const {
            event: t,
            fnOnChangeDayIndex: a,
            addtionalAdminButtons: o,
          } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Nt, { event: t }),
              (0, e.jsx)(St.g, {
                eventModel: t,
                fnOnUpdateSaleDayIndex: a,
                addtionalAdminButtons: o,
                bSupportsSticky: !0,
              }),
            ],
          });
        }
        var Fe = r(179),
          vt = r(50109),
          nt = r(30096),
          Wt = r(98609),
          kt = r(57673);
        const xt = new Map();
        function Be(s, t) {
          const a = s.findIndex((o) => o.section_type === "tabs");
          if (a >= 0 && t !== void 0) {
            const o = s[a],
              l = o.tabs?.findIndex((c) => c.unique_id === t);
            if (l !== void 0 && l >= 0 && o.tabs)
              return {
                selectedTabBackgroundDef: o.tabs[l].tab_background_img_groups,
                nTabSaleSectionIndex: a,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function la(s, t, a) {
          const o = new Map(),
            l = new Map(),
            c = new Map();
          let u,
            v,
            h = 0;
          const { selectedTabBackgroundDef: x, nTabSaleSectionIndex: b } = Be(
            t,
            a,
          );
          if (s?.enabled) {
            const C = s.groups?.length;
            if (
              (s.groups?.forEach((_, E) => {
                if (h >= t.length || t[h].section_type == "tabs") return;
                const P = new Array();
                for (
                  let T = 0;
                  T < (_?.num_sections || 0) &&
                  h < t.length &&
                  t[h].section_type != "tabs";
                  ++T, ++h
                ) {
                  const H = t[h].unique_id;
                  P.push(H),
                    l.set(H, _.background_id),
                    T === 0 && c.set(H, _.background_id);
                }
                if (
                  (o.set(_.background_id, {
                    nBackgroundGroupID: _.background_id,
                    sectionUniqueIDs: P,
                    nSaleSectionLastIndex: h - 1,
                    nUniqueIDNextSaleSection:
                      h < t.length && (b === void 0 || h < b)
                        ? t[h].unique_id
                        : void 0,
                  }),
                  E + 1 == C && s.last_group_until_cover_section_until_end)
                )
                  for (
                    let T = h;
                    T < t.length &&
                    (!x || !x.enabled || T < b) &&
                    !(t[T].section_type == "tabs" && x?.enabled);
                    ++T
                  ) {
                    const H = t[T].unique_id;
                    l.set(H, _.background_id);
                  }
              }),
              h < t.length && (b === void 0 || h < b) && (u = t[h].unique_id),
              x?.enabled && b !== void 0)
            ) {
              let _ = b;
              const E = x.groups.length;
              for (
                x.groups.forEach((P, G) => {
                  if (_ >= t.length) return;
                  const T = new Array();
                  for (
                    let O = 0;
                    O < P.num_sections && _ < t.length;
                    ++O, ++_
                  ) {
                    const q = t[_],
                      M = q.unique_id;
                    (0, kt.bF)(a, q)
                      ? (T.push(M),
                        l.set(M, P.background_id),
                        O === 0 && c.set(M, P.background_id))
                      : --O;
                  }
                  let A = _;
                  for (; A < t.length && !(0, kt.bF)(a, t[A]); ) A += 1;
                  if (
                    (o.set(P.background_id, {
                      nBackgroundGroupID: P.background_id,
                      sectionUniqueIDs: T,
                      nSaleSectionLastIndex: _ - 1,
                      nUniqueIDNextSaleSection:
                        A < t.length ? t[A].unique_id : void 0,
                    }),
                    G + 1 == E && x.last_group_until_cover_section_until_end)
                  )
                    for (let O = _; O < t.length; ++O) {
                      const q = t[O];
                      if (q.section_type == "tabs" && x?.enabled) break;
                      (0, kt.bF)(a, q) && l.set(q.unique_id, P.background_id);
                    }
                });
                _ < t.length && !(0, kt.bF)(a, t[_]);
              )
                _++;
              _ < t.length && (v = t[_].unique_id);
            }
          } else t?.length > 0 && (u = t[0].unique_id);
          return {
            mapGroupToSections: o,
            nFirstSaleSectionIDWithoutGroup: u,
            mapSectionToGroup: l,
            mapFirstSectionToGroup: c,
            selectedTabBackgroundDef: x,
            nTabSaleSectionIndex: b,
            nFirstTabSectionIDWithoutGroup: v,
          };
        }
        var ye = r(29630),
          wt = r(68434),
          gt = r(41635),
          st = r(81416);
        function It(s, t, a, o) {
          let c = s.jsondata.sale_background_img_groups.groups.find(
            (u) => u.background_id === t.groupID,
          );
          return (
            !c &&
              o >= 0 &&
              (c = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((h) => h.unique_id == o)
                ?.tab_background_img_groups?.groups?.find(
                  (h) => h.background_id == t.groupID,
                )),
            (0, e.jsx)(
              da,
              {
                eventModel: s,
                displayDef: c,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  c &&
                  c.randomize_section_order &&
                  a !== st.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(ca, {
                        clanEventGID: s.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function ca(s) {
          const { clanEventGID: t, elSaleSections: a } = s,
            [o, l] = (0, wt.M)(`sale_section_seed_${t}`, (0, dt.m)());
          if (!a || a.length === 0) return null;
          if (a.length > 1 && o !== void 0) {
            const c = (0, dt.A)(o);
            return (0, e.jsx)(e.Fragment, { children: gt.fW(a, 0, c) });
          }
          return (0, e.jsx)(e.Fragment, { children: a });
        }
        function da(s) {
          const {
              displayDef: t,
              children: a,
              eventModel: o,
              derivedGroupInfo: l,
            } = s,
            c = (0, vt.E)(),
            u = j.useCallback(
              (E, P) => {
                xt.set(l.nBackgroundGroupID, P);
              },
              [l],
            ),
            v = (0, nt.w6)(u);
          if (!a || (Array.isArray(a) && a.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: a });
          let h;
          if (t.localized_background_art) {
            const E = (0, W.LgB)(c),
              P =
                E in t.localized_background_art
                  ? E
                  : i.A0.GetLanguageFallback(Wt.TS.LANGUAGE),
              G = t.localized_background_art[P];
            G && (h = ye.zU.GenerateURLFromHashAndExt(o.clanSteamID, G));
          }
          let x = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              x += "to bottom,";
              break;
            case "left-to-right":
              x += "to right,";
              break;
            case "top-left-to-bottom-right":
              x += "to bottom right,";
              break;
            case "single-color":
              x = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((x += " " + t.background_color1),
              (x += ", " + t.background_color2),
              (x += ")"))
            : (x = null);
          const b =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            C = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            _ = {
              backgroundImage: x ? `url(${h}), ${x}` : `url(${h})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: C ? t.position_setting : void 0,
              backgroundColor: b ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: v,
            style: _,
            id: "background_group_" + t.background_id,
            children: a,
          });
        }
        var Gt = r(4720),
          La = r(64641),
          Yt = r.n(La),
          jt = r(85599);
        function Ta(s) {
          return typeof s == "string" || typeof s == "number"
            ? s
            : JSON.stringify(s);
        }
        class Pa {
          Keyify = (t) => Ta(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, a) {
            const o = this.m_mapVisible.get(this.Keyify(t)) || 0,
              l = this.m_mapVisible.get(this.Keyify(a)) || 0;
            return o - l;
          }
          BMarkAppVisibile(t, a) {
            const o = this.EnsureOwnerSetExists(t),
              l = this.Keyify(a);
            return (
              o.add(l),
              this.IsAlreadyVisible(a)
                ? (this.m_mapVisible.set(
                    l,
                    (this.m_mapVisible.get(l) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(l, 1), !0)
            );
          }
          BMarkAppNotVisible(t, a) {
            if (!this.IsAlreadyVisible(a)) return !1;
            const o = this.EnsureOwnerSetExists(t),
              l = this.Keyify(a);
            return o.has(l) ? (this.DecrementAppVisibility(l), !0) : !1;
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
          ua = r(53113),
          ga = r(90405),
          oe = r(96538),
          Me = r(88003),
          Na = r(12932),
          Ot = r(46777),
          Rt = r(77495),
          Vt = r(16346),
          Kt = r(61257),
          ma = r(56718),
          mt = r(71421),
          ka = r(27828),
          et = r.n(ka);
        function Mt(s) {
          return `rgba(${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}, ${s.rgb.a})`;
        }
        function Ga(s) {
          const t = parseInt(s.slice(1), 16),
            a = (t >> 16) & 255,
            o = (t >> 8) & 255,
            l = t & 255;
          return `rgba(${a}, ${o}, ${l}, 1)`;
        }
        function Oa(s) {
          const { color: t, onChange: a, strTitle: o, disableAlpha: l } = s,
            [c, u] = (0, j.useState)(() => t || "rgba(255, 255, 255, 1)"),
            v = (0, j.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(ce.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const b = (await new window.EyeDropper().open()).sRGBHex,
                  C = Ga(b);
                u(C), a(C);
              } catch (h) {
                console.warn(ce.Z.Localize("#Sale_EyeDropperFailed"), h);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: et().ColorPickerDialog,
            children: [
              !!o && (0, e.jsx)(re.JU, { children: o }),
              (0, e.jsx)(Kt.xk, {
                onChange: (h) => {
                  const x = Mt(h);
                  u(x), a(x);
                },
                color: c,
                disableAlpha: l,
                className: et().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: et().EyeDropperCtn,
                children: (0, e.jsx)(mt.Gq, {
                  toolTipContent: ce.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(re.$n, {
                    className: et().EyeDropperBtn,
                    onClick: v,
                    children: (0, e.jsx)(ma.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function Ra(s) {
          const {
              color: t,
              onChange: a,
              onRequestClose: o,
              disableAlpha: l,
              strTitle: c,
            } = s,
            u = (0, j.useRef)(null);
          return (
            (0, j.useEffect)(() => {
              const v = u.current?.ownerDocument ?? document,
                h = (b) => {
                  u.current && !u.current.contains(b.target) && o();
                },
                x = (b) => {
                  b.key === "Escape" && o();
                };
              return (
                v.addEventListener("pointerdown", h, !0),
                v.addEventListener("keydown", x, !0),
                () => {
                  v.removeEventListener("pointerdown", h, !0),
                    v.removeEventListener("keydown", x, !0);
                }
              );
            }, [o]),
            (0, e.jsx)("div", {
              ref: u,
              children: (0, e.jsx)(Oa, {
                color: t,
                disableAlpha: l,
                strTitle: c ?? ce.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function Ua() {
          return {
            openColorPicker: (0, j.useCallback)((t, a) => {
              let o = null;
              const l = () => o?.Hide();
              o = (0, Vt.lX)(
                (0, e.jsx)(Ra, {
                  color: a.color,
                  disableAlpha: a.disableAlpha,
                  strTitle: a.strTitle,
                  onChange: a.onChange,
                  onRequestClose: l,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var Zt = r(13447),
          Ke = r.n(Zt),
          ha = r(32190),
          pa = r.n(ha),
          Ze = r(76559),
          fa = r(75909),
          Ye = r(53424),
          rt = r(72604),
          za = r(41735),
          Fa = r.n(za),
          Ut = r(14947),
          ot = r(9046),
          Ha = Object.defineProperty,
          va = Object.getOwnPropertyDescriptor,
          xa = (s, t, a, o) => {
            for (
              var l = o > 1 ? void 0 : o ? va(t, a) : t, c = s.length - 1, u;
              c >= 0;
              c--
            )
              (u = s[c]) && (l = (o ? u(t, a, l) : u(l)) || l);
            return o && l && Ha(t, a, l), l;
          };
        const Lt = class hn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, Ut.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, a, o, l) {
            let c =
                Y.TS.COMMUNITY_BASE_URL +
                "gid/" +
                a.ConvertTo64BitString() +
                "/hasclanimagefile",
              u = { image_hash_and_ext: o, lang: "" + l };
            return (
              (await Fa().get(c, { params: u, cancelToken: t && t.token })).data
                .success == rt.R
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
              (this.m_curLocImageGroup.localized_images = (0, gt.$Y)(
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
                : ye.zU.GenerateURLFromHashAndExt(
                    t,
                    ye.zU.GetHashAndExt(o) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const a = this.m_curLocImageGroup.primaryImage,
              o = Ze.b.InitFromClanID(a.clanAccountID),
              l = ye.zU.GetHashAndExt(a) ?? "",
              c = [];
            for (let v = W.Bhc; v < W.bP9; ++v)
              c.push(hn.BDoesClanImageFileExistsOnCDNOrOrigin(t, o, l, v));
            const u = await Promise.all(c);
            (0, Ut.h5)(() => {
              for (let v = W.Bhc; v < W.bP9; ++v)
                u[v] &&
                  (this.m_curLocImageGroup.localized_images[v] =
                    ye.zU.GenerateURLFromHashAndExtAndLang(
                      o,
                      l,
                      ot.wI.full,
                      v,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, a, o) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = o
                ? ye.zU.GenerateURLFromHashAndExtAndLang(
                    a,
                    o,
                    ot.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, a) {
            if (!this.m_curLocImageGroup) return;
            let o = this.m_curLocImageGroup.primaryImage;
            if (o?.image_hash == t) {
              const l = Ze.b.InitFromClanID(o.clanAccountID),
                c = ye.zU.GetHashAndExt(o);
              c &&
                (this.m_curLocImageGroup.localized_images[a] =
                  ye.zU.GenerateURLFromHashAndExtAndLang(
                    l,
                    c,
                    ot.wI.full,
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
              .map((o) => ye.zU.GetHashAndExtFromURL(o));
          }
        };
        xa([Ut.sH], Lt.prototype, "m_curLocImageGroup", 2);
        let Wa = Lt;
        const Ne = new Wa();
        var bt = r(38410),
          zt = r(34592),
          Ia = r(75844),
          Qt = r(32093),
          Xt = r(72849),
          Ya = r(64),
          ja = r(72739),
          ht = r(82734);
        function Va(s, t) {
          const a = j.useRef(void 0),
            o = j.useCallback(
              (u) => {
                u.currentTarget.files.length > 0 &&
                  (s(u.currentTarget.files), (u.currentTarget.value = ""));
              },
              [s],
            ),
            l = j.useCallback(() => a.current.click(), []);
          return [
            ja.createPortal(
              (0, e.jsx)("form", {
                onSubmit: ba,
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
            l,
          ];
        }
        function Ka(s) {
          const [t, a] = j.useState(!1),
            o = j.useCallback((h) => {
              ((h.dataTransfer.files && h.dataTransfer.files[0]) ||
                (h.dataTransfer.types && h.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            l = j.useCallback((h) => {
              ht.NO(h) && a(!1);
            }, []),
            c = j.useCallback(() => a(!1), []),
            u = t ? ba : void 0,
            v = j.useCallback(
              (h) => {
                h.dataTransfer.files?.length &&
                  (s(h.dataTransfer.files, h),
                  h.preventDefault(),
                  h.stopPropagation()),
                  a(!1);
              },
              [s],
            );
          return [
            {
              onDragEnter: o,
              onDragLeave: l,
              onDragEnd: c,
              onDragOver: u,
              onDrop: v,
            },
            t,
          ];
        }
        async function an(s, t = 1e3) {
          return await new Promise((a, o) => {
            const l = new Image();
            (l.src = s),
              (l.onload = () => a("success")),
              (l.onerror = () => a("error")),
              t > 0 && window.setTimeout(() => a("timeout"), t);
          });
        }
        function ba(s) {
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
        var Za = r(71647),
          Qe = r.n(Za);
        function Ca(s) {
          const {
              onDropFiles: t,
              renderDesciption: a,
              elAdditonalButtons: o,
              elOverrideDragAndDropText: l,
            } = s,
            [c, u] = Ka(t),
            [v, h] = Va(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...c,
            className: (0, B.A)(
              u ? Qe().DragAndDropContainerDragging : Qe().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!a && a(),
              (0, e.jsx)("div", {
                children: l || (0, i.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: Qe().ImageUploadBar,
                children: [
                  v,
                  (0, e.jsxs)("label", {
                    onClick: h,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, i.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: Qe().SelectImageButton,
                        children: (0, i.we)("#selectimage_select_file"),
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
        var Tt = r(36118),
          Qa = r(21254),
          Jt = r(27344),
          ke = r.n(Jt),
          De = r(9472);
        function Xa(s) {
          const {
              imageUploader: t,
              fnUploadComplete: a,
              elOverrideDragAndDropText: o,
              forceResolution: l,
              elAdditonalButtons: c,
              rgRealmList: u,
            } = s,
            [v, h] = (0, R.q3)(() => [
              t.GetUploadImages(),
              vt.O.Get().GetCurEditLanguage(),
            ]),
            x = j.useCallback(
              async (_) => {
                let E = Array.from(_),
                  P = !0;
                for (let G = 0; G < E.length; G++) {
                  const T = E[G],
                    { language: A } = (0, bt.jj)(T?.name, h);
                  try {
                    const H = (0, bt.PD)(A, h, u);
                    (P = await t.AddImageForLanguage(T, H)),
                      P ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            G +
                            " file=" +
                            T.name,
                        ),
                        (0, Me.pg)(
                          (0, e.jsx)(oe.KG, {
                            strDescription: (0, i.we)(
                              "#ImagePicker_Error",
                              T.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (H) {
                    let O = (0, zt.H)(H);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + O.strErrorMsg,
                      O,
                    ),
                      (0, Me.pg)(
                        (0, e.jsx)(oe.KG, {
                          strDescription: (0, i.we)(
                            "#EventError_Code",
                            O.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return P;
              },
              [h, t, u],
            ),
            b = j.useMemo(
              () =>
                c instanceof Array
                  ? c
                  : [
                      (0, e.jsx)(
                        j.Fragment,
                        { children: c },
                        "elAdditonalButtons",
                      ),
                    ],
              [c],
            );
          (0, R.q3)(() =>
            v.map((_) => ({ a: _.GetCurrentImageOption(), b: _.language })),
          );
          const C = async () => {
            const _ = await t.UploadAllImages(l);
            a?.(_);
          };
          return (0, e.jsxs)(Ca, {
            onDropFiles: x,
            elAdditonalButtons: b,
            elOverrideDragAndDropText: o,
            children: [
              (0, e.jsx)(j.Fragment, {
                children: (0, e.jsx)("div", {
                  className: ke().UploadPreviewCtn,
                  children: v.map((_) =>
                    (0, e.jsx)(
                      m,
                      {
                        asset: _,
                        forceResolution: l,
                        fnOnRemove: () => t.DeleteUploadImage(_),
                        languageRealms: u,
                      },
                      "arttabupload_" + _.filename + "_" + _.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Ja, { imageUploader: t, fnOnUploadImageRequested: C }),
            ],
          });
        }
        function Ja(s) {
          const { imageUploader: t, fnOnUploadImageRequested: a } = s,
            [o] = (0, R.q3)(() => [t.GetUploadImages()]),
            l = o.some((u) => u.status == "pending"),
            c = o.some(
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
                (0, e.jsx)(re.$n, {
                  style: { margin: "8px" },
                  onClick: a,
                  disabled: !l,
                  children: (0, i.we)("#ImageUpload_Upload"),
                }),
              !!o.length &&
                (0, e.jsx)(re.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: c,
                  children: (0, i.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function sn(s, t, a, o, l) {
          let c = new Array();
          return (
            s.GetUploadImages().forEach((u) => {
              c.push(
                jsx(
                  m,
                  {
                    asset: u,
                    forceResolution: a,
                    forceFileType: o,
                    fnOnRemove: () => s.DeleteUploadImage(u),
                    languageRealms: l,
                  },
                  t + u.file + "_" + u.uploadTime,
                ),
              );
            }),
            c
          );
        }
        const m = (0, Ia.PA)(n);
        function n(s) {
          const t = (E) => {
              if (E instanceof Ya.M7) {
                E.ResetImage();
                const P = window,
                  G = (0, e.jsx)(Qa.q, {
                    ownerWin: P,
                    uploadFile: E,
                    forceResolution: s.forceResolution,
                    fileType: s.forceFileType || Xt.bg.dU,
                  });
                (0, Me.HT)(G, P, "CropModal", {
                  strTitle: (0, i.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  E.fileType,
                  JSON.stringify(E.GetCurrentImageOption()),
                );
            },
            { asset: a, fnOnRemove: o, languageRealms: l } = s,
            c = a.ImageOptions?.map((E) => {
              let P = E?.fnGetLabelText(),
                G;
              E.bEnforceDimensions && (P += ` - ${E.width}x${E.height}`),
                E.bDeprecated &&
                  ((P += ` ${(0, i.we)("#ImageUpload_Deprecated")}`),
                  (G = (0, i.we)("#ImageUpload_Deprecated_ttip")));
              let T;
              return (
                (a.BIsOriginalMinimumDimensions(E) &&
                  a.FileTypeMatchesImageTypes(E)) ||
                  (T = ke().ImageDimensionTooSmall),
                { label: P, data: E, strOptionClass: T, tooltip: G }
              );
            }).filter((E) => !E.data.bHiddenFromDropdown),
            u = {
              pending: (0, i.we)("#ImageUpload_Pending"),
              waiting: (0, i.we)("#ImageUpload_Waiting"),
              uploading: (0, i.we)("#ImageUpload_Uploading"),
              processing: (0, i.we)("#ImageUpload_Processing"),
              success: (0, i.we)("#ImageUpload_SuccessCard"),
              failed: (0, i.we)("#ImageUpload_Failed"),
            },
            v = a.BSupportsLanguages()
              ? p(
                  i.A0.GetLanguageListForRealms(
                    l ?? [Qt.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            h = a.IsValidAssetType(s.forceResolution, s.forceFileType),
            x = a.status == "pending";
          let b = u[a.status];
          a.status == "pending" &&
            (h.needsCrop
              ? (b = (0, i.we)("#ImageUpload_NeedsCrop"))
              : h.error && (b = (0, i.we)("#ImageUpload_Invalid")));
          let C;
          const _ = a.GetCurrentImageOption();
          return (
            _ && (C = c?.find((E) => E.data.sKey == _.sKey)?.data),
            C || (C = c?.[0]?.data),
            (0, e.jsxs)("div", {
              className: ke().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: ke().UploadPreviewDelete,
                  onClick: () => o(a),
                  children: (0, e.jsx)(Tt.sED, {}),
                }),
                (0, e.jsx)(d, { asset: a }),
                v &&
                  (0, e.jsx)(re.m, {
                    strDropDownClassName: U().DropDownScroll,
                    rgOptions: v,
                    selectedOption: a.language,
                    onChange: (E) => (a.language = E.data),
                    disabled: !x,
                  }),
                c &&
                  c?.length > 1 &&
                  (0, e.jsx)(re.m, {
                    label: a.GetImageOptionLabel(),
                    rgOptions: c,
                    selectedOption: C,
                    onChange: (E) => a.SetCurrentImageOption(E.data),
                    disabled: !x,
                  }),
                x &&
                  h.warnings?.map((E, P) =>
                    (0, e.jsx)(
                      "div",
                      { className: ke().UploadPreviewWarning, children: E },
                      `warning${P}`,
                    ),
                  ),
                x &&
                  h.messages?.map((E, P) =>
                    (0, e.jsx)(
                      "div",
                      { className: ke().UploadPreviewMessage, children: E },
                      `message${P}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, B.A)({
                    [U().FlexColumnContainer]: !0,
                    [ke().UploadPreviewError]: a.status == "failed",
                  }),
                  children: [
                    b,
                    (0, De.o)(a.status) &&
                      (0, e.jsx)("div", {
                        className: Yt().FlexCenter,
                        children: (0, e.jsx)(jt.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: ke().UploadPreviewError,
                  children: a.message,
                }),
                x &&
                  h.error &&
                  (0, e.jsx)("div", {
                    className: ke().UploadPreviewError,
                    children: h.error,
                  }),
                x &&
                  h.needsCrop &&
                  (0, e.jsx)(re.jn, {
                    onClick: () => t(a),
                    children: (0, i.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function d(s) {
          const { asset: t } = s;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: ke().PreviewImgCtn,
                onClick: (a) =>
                  (0, Me.pg)((0, e.jsx)(g, { asset: t }), (0, ht.uX)(a)),
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
        function g(s) {
          const { asset: t, closeModal: a } = s;
          return (0, e.jsx)(oe.o0, {
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
        function p(s) {
          const t = [],
            a = new Array();
          for (const o of s) {
            if (o == W.X51) continue;
            const l = (0, i.we)("#Language_" + (0, W.LgB)(o));
            a.push({ label: l, data: o });
          }
          return (
            a.sort((o, l) => o.label.localeCompare(l.label)),
            a.forEach((o) => t.push({ label: o.label, data: o.data })),
            a
          );
        }
        var f = ((s) => (
          (s[(s.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (s[(s.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (s[(s.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (s[(s.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          s
        ))(f || {});
        function I(s, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(s)}`
            : `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetHashAndExt(s)}`;
        }
        function y(s, t, a) {
          let o = "";
          const l = I(t);
          if (a == 4)
            (o = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (o += l),
              (o += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (o += l),
              (o += " autoplay=true controls=false][/video]");
          else if (a == 2) o = "[img]" + l + "[/img]";
          else {
            const c = I(t, !0);
            o = "[url=" + l + "][img]" + c + "[/img][/url]";
          }
          s.InsertText(o);
        }
        var S = r(55436),
          Z = r(53732),
          D = r.n(Z),
          z = r(49460);
        function xe(s) {
          const { fnSetImageSearch: t } = s,
            a = (0, j.useRef)(null);
          return (0, e.jsx)("div", {
            className: z.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: a,
              className: z.SearchInput,
              type: "text",
              placeholder: (0, i.we)("#ImagePicker_Search"),
              onChange: (o) => t(o.currentTarget.value),
              onKeyDown: (o) => {
                o.key == "Escape" &&
                  (t(""), a.current && (a.current.value = ""));
              },
            }),
          });
        }
        const fe = j.memo(function (t) {
          const {
            fileNameSearch: a,
            clanAccountID: o,
            imageInsertCallBack: l,
            fnOnExpandImage: c,
            showImageActions: u = !0,
            InternalOpenLocalizeImageGroup: v,
          } = t;
          return (0, e.jsx)(me, {
            clanAccountID: o,
            fileNameSearch: a,
            children: (h, x) =>
              h.map((b) =>
                (0, e.jsx)(
                  Xe,
                  {
                    clanImage: b,
                    searchStringHilight: x,
                    imageInsertCallBack: l,
                    showImageActions: u,
                    fnOnOpenLocalizedImageGroup: v,
                    OnImageClick: c,
                  },
                  b.imageid,
                ),
              ),
          });
        });
        function me(s) {
          const { clanAccountID: t, fileNameSearch: a, children: o } = s,
            l = (0, Ye.n9)(t),
            c = a.trim().toLowerCase() || "",
            u = Ye.pU.GetFilteredClanImagesList(l, c);
          if (u.length == 0) {
            const v = Ze.b.InitFromClanID(t);
            let h = Ye.pU.GetLoadState(v);
            return h && h.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: D().ResultNotification,
                    children:
                      c.length > 0
                        ? (0, i.we)("#ImagePicker_EmptySearch")
                        : (0, i.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : h && h.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: D().ErrorCode,
                      children: (0, i.we)("#ImagePicker_Error", h.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: D().ResultNotification,
                      children: (0, i.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(u, c);
        }
        function Te(s) {
          const {
            clanAccountID: t,
            fileNameSearch: a,
            onImageSelected: o,
            selectedItem: l,
          } = s;
          return jsx(me, {
            clanAccountID: t,
            fileNameSearch: a,
            children: (c) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: c.map((u) =>
                  jsx(
                    pn,
                    { clanImage: u, selected: u == l, onImageSelected: o },
                    u.imageid,
                  ),
                ),
              }),
          });
        }
        function Xe(s) {
          const {
              clanImage: t,
              searchStringHilight: a,
              imageInsertCallBack: o,
              OnImageClick: l,
              showImageActions: c,
              fnOnOpenLocalizedImageGroup: u,
            } = s,
            [v, h] = j.useState(!1),
            x = () => o(t, f.k_eInsertFullImage),
            b = () => o(t, f.k_eInsertVideo),
            C = () => o(t, f.k_eInsertThumbnail),
            _ = (ue) => {
              t.url &&
                (ue.dataTransfer.setData("text", t.url),
                Ye.pU.GetClanImageDragListener().forEach((Ie) => {
                  let Ve = Ze.b.InitFromClanID(t.clanAccountID);
                  Ie(Ve, !0);
                }));
            },
            E = (ue) => {
              t.url &&
                Ye.pU.GetClanImageDragListener().forEach((Ie) => {
                  let Ve = Ze.b.InitFromClanID(t.clanAccountID);
                  Ie(Ve, !1);
                });
            },
            P = (ue) => {
              (0, Me.pg)(
                (0, e.jsx)(oe.o0, {
                  strTitle: (0, i.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: T,
                  onCancel: A,
                  closeModal: A,
                  children: (0, e.jsxs)(j.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, i.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, i.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, ht.uX)(ue) ?? window,
              );
            },
            G = (ue) => {
              console.log("ClanImageWrapper on delete error: " + ue),
                (0, Me.pg)(
                  (0, e.jsx)(oe.KG, {
                    strTitle: (0, i.we)("#Error_FailureNotice"),
                    strDescription: (0, i.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ue }),
                  }),
                  window,
                );
            },
            T = () => {
              h(!0);
              let ue = Ze.b.InitFromClanID(t.clanAccountID);
              Ye.pU
                .DeleteClanImage(ue, t)
                .then((Ie) => {
                  Ie.success != rt.R && G((0, zt.H)(Ie).strErrorMsg), h(!1);
                })
                .catch((Ie) => {
                  G((0, zt.H)(Ie).strErrorMsg), h(!1);
                }),
                A();
            },
            A = () => {},
            H = () => {
              l && l(t);
            },
            O = t.file_name ? t.file_name : "",
            q = (0, S.r)(a, O, String(t.imageid), D().Hilight),
            M = ye.zU.BIsClanImageVideo(t),
            te = c && !v && !M,
            Ee = c && !v && !M,
            it = c && !v && M,
            Je = c && !v && !M;
          return (0, e.jsx)(ga.K, {
            placeholderHeight: "100vh",
            className: D().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: D().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: D().ImageWrapper,
                  style: {
                    backgroundImage: M ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: _,
                  onDragEnd: E,
                  onDoubleClick: x,
                  onClick: H,
                  children: (0, e.jsx)(Ea, {
                    clanImage: t,
                    className: D().VideoBackground,
                  }),
                }),
                te &&
                  (0, e.jsx)("span", {
                    className: D().Full,
                    onClick: x,
                    children: (0, i.we)("#ImagePicker_FullSize"),
                  }),
                v &&
                  (0, e.jsx)(jt.t, {
                    size: "medium",
                    className: D().FloatingThrobber,
                  }),
                Ee &&
                  (0, e.jsx)("span", {
                    className: D().Thumb,
                    onClick: C,
                    children: (0, i.we)("#ImagePicker_Thumbnail"),
                  }),
                Je &&
                  u &&
                  (0, e.jsx)(_a, {
                    bDeleting: v,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: u,
                  }),
                it &&
                  (0, e.jsx)("span", {
                    className: D().Full,
                    onClick: b,
                    children: (0, i.we)("#ImagePicker_Video"),
                  }),
                !v &&
                  (0, e.jsx)("span", {
                    className: D().Delete,
                    onClick: P,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: D().ImageWrapperFilename,
                  title: O,
                  children: q,
                }),
              ],
            }),
          });
        }
        function _a(s) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: a,
              bDeleting: o,
            } = s,
            { data: l } = (0, Ce.hM)(t.clanAccountID);
          return o || !l?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, B.A)(D().Localized, U().ValveOnlyBackground),
                onClick: () => a?.(t),
                children: "(VO) " + (0, i.we)("#ImagePicker_Localized"),
              });
        }
        function Ea(s) {
          const { clanImage: t, className: a } = s;
          return ye.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: a,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == Xt.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function pn(s) {
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
                  ? jsx(Ea, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function fn(s) {
          const { clanSteamID: t, closeModal: a, OnClanImageSelected: o } = s,
            l = j.useCallback(
              (v, h) => {
                o?.(v, h), a?.();
              },
              [o, a],
            ),
            [c, u] = j.useState("");
          return (0, e.jsxs)(oe.o0, {
            strTitle: (0, i.we)("#ImagePicker_Images"),
            strDescription: (0, i.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: a,
            onCancel: a,
            children: [
              (0, e.jsx)(xe, { fnSetImageSearch: u }),
              (0, e.jsx)(fe, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: c,
                imageInsertCallBack: l,
                showImageActions: !1,
              }),
            ],
          });
        }
        function vn(s) {
          const { clanSteamID: t, OnClanImageSelected: a } = s;
          return (0, e.jsxs)("div", {
            className: Qe().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, i.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: Qe().SelectImageButton,
                    children: (0, i.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  (0, Me.pg)(
                    (0, e.jsx)(fn, { clanSteamID: t, OnClanImageSelected: a }),
                    (0, ht.uX)(o) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function xn(s) {
          const {
              clanSteamID: t,
              rgSupportArtwork: a,
              localizedPrimaryImage: o,
              bAllowPreviousClanImageSelection: l,
              fnSetImageURL: c,
              rgRealmList: u,
            } = s,
            [v] = (0, R.q3)(() => [vt.O.Get().GetCurEditLanguage()]),
            h = (0, fa.zO)(t, a, o),
            x = s.uploaderOverride || h,
            [b, C] = j.useState(!1),
            _ = j.useCallback(
              async (G, T) => {
                if (!b) {
                  C(!0);
                  try {
                    const { language: A } = (0, bt.jj)(G.file_name ?? "", v),
                      H = (0, bt.PD)(A, v, u);
                    await x.AddExistingClanImage(G, H);
                  } catch (A) {
                    let H = (0, zt.H)(A);
                    console.error("AddExistingClanImage: " + H.strErrorMsg, H),
                      (0, Me.pg)(
                        (0, e.jsx)(oe.KG, {
                          strDescription: (0, i.we)(
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
              [b, x, v, u],
            ),
            E = j.useMemo(
              () =>
                l
                  ? [
                      [
                        (0, e.jsx)(
                          vn,
                          { clanSteamID: t, OnClanImageSelected: _ },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [_, l, t],
            ),
            P = (G) => {
              for (const T of G) {
                const A = T.uploadResult;
                if (A?.origimagehash) {
                  const H = (0, bt.PD)(A.language, v, u);
                  Ne.AddLocalizeImageUploaded(A.origimagehash, H);
                } else {
                  const H = Ye.pU.GetClanImageByImageHash(
                      t,
                      A?.image_hash ?? "",
                    ),
                    O = T.image.GetCurrentImageOption();
                  if (H && O) {
                    const q = (0, bt.PD)(T.image.language, v, u);
                    c(O.artworkType, H, q);
                  }
                }
              }
            };
          return (0, e.jsx)(Xa, {
            ...s,
            imageUploader: x,
            rgRealmList: u,
            elAdditonalButtons: b
              ? [
                  (0, e.jsx)(
                    jt.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, i.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : E,
            fnUploadComplete: P,
          });
        }
        var $t = r(87498),
          In = r(25359),
          Ae = r.n(In),
          jn = r(24806);
        function rn(s) {
          const {
              clanImage: t,
              closeModal: a,
              lang: o,
              fnOnArtworkLangChange: l,
              realms: c,
              fnLangHasData: u,
            } = s,
            [v, h] = (0, j.useState)(o),
            x = Ze.b.InitFromClanID(t.clanAccountID),
            b = (0, R.q3)(() =>
              ye.zU.GenerateURLFromHashAndExt(x, ye.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(oe.o0, {
            strTitle: (0, i.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, i.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => l?.(t, o, v),
            onCancel: a,
            closeModal: a,
            children: (0, e.jsxs)("div", {
              className: (0, B.A)(U().FlexColumnContainer, Ae().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: Ae().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: Ae().ArtworkPreview,
                    src: b,
                  }),
                }),
                (0, e.jsx)(jn.Ng, {
                  selectedLang: v,
                  fnLangHasData: u,
                  fnOnLanguageChanged: h,
                  realms: c,
                }),
              ],
            }),
          });
        }
        var ya = r(56330);
        function $a(s) {
          if (!s) return s;
          const t = s.lastIndexOf(".");
          return t === -1 ? s : s.substring(0, t);
        }
        var bn = r(58483),
          Cn = r(82385),
          _n = r(94520),
          En = r(95174),
          yn = r(9709),
          qa = r(64868),
          Sn = r(44894);
        const An =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var Dn = r(11243);
        function wn(s) {
          const {
            clanSteamID: t,
            fnGetImageHash: a,
            fnLangHasData: o,
            fnOnRemoveImage: l,
          } = s;
          (0, Ye.mr)(t.GetAccountID());
          const c = j.useMemo(() => {
              let x = new Array();
              const b = i.A0.GetLanguageListForRealms([
                Qt.TU.k_ESteamRealmGlobal,
                Qt.TU.k_ESteamRealmChina,
              ]);
              for (const C of b) {
                const _ = a(C);
                if (_) {
                  const E = (0, W.LgB)(C),
                    P = (0, i.we)("#Language_" + E);
                  x.push({ lang: C, strLang: E, locLang: P, imgHash: _ });
                }
              }
              return (
                (x = x.sort((C, _) =>
                  C.locLang > _.locLang ? 1 : C.locLang < _.locLang ? -1 : 0,
                )),
                x
              );
            }, [a]),
            [u, v, h] = (0, qa.uD)();
          return (0, e.jsxs)("div", {
            className: Ae().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ae().SelectImageTitle,
                children: (0, i.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: Ae().LanguageListContainer,
                children: c.map((x) =>
                  (0, e.jsx)(
                    Bn,
                    { langData: x, ...s },
                    "lang_select_" + t.GetAccountID() + " " + x.strLang,
                  ),
                ),
              }),
              !!l &&
                (0, e.jsxs)(re.$n, {
                  onClick: v,
                  children: [
                    (0, i.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(Dn.o, {
                      tooltip: (0, i.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(oe.EN, {
                active: u,
                children: (0, e.jsx)(oe.o0, {
                  strTitle: (0, i.we)("#Dialog_AreYouSure"),
                  strDescription: (0, i.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: h,
                  onOK: () => {
                    for (let x = 0; x < W.bP9; x++) o && l && o(x) && l(x);
                  },
                }),
              }),
            ],
          });
        }
        function Bn(s) {
          const {
              clanSteamID: t,
              langData: a,
              langOverride: o,
              fnOnLanguagePreviewChange: l,
              fnOnArtworkLangChange: c,
              fnOnRemoveImage: u,
            } = s,
            [v, h] = (0, R.q3)(() => {
              const x = Ye.pU.GetClanImageByImageHash(t, a.imgHash);
              let b = "";
              x &&
                (b = ye.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  ye.zU.GetHashAndExt(x),
                  ot.wI.full,
                  a.lang,
                ));
              let C = Ae().LanguageSelectorSelected;
              return (
                o != a.lang &&
                  (C = a.imgHash
                    ? Ae().LanguageSelector
                    : Ae().LanguageSelectorNoData),
                [b, C]
              );
            });
          return (0, e.jsxs)("div", {
            id: a.strLang,
            className: Ae().LanguageContainer,
            onClick: (x) => {
              let b = (0, W.sfN)(x.currentTarget.id);
              l(b);
            },
            children: [
              (0, e.jsx)("div", { className: h, children: a.locLang }),
              (0, e.jsxs)("span", {
                className: Ae().LanguageOptions,
                children: [
                  !!v &&
                    (0, e.jsx)("a", {
                      href: v,
                      target: "_blank",
                      children: (0, e.jsx)(mt.he, {
                        toolTipContent: (0, i.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: Tt.YNO(),
                      }),
                    }),
                  !!c && (0, e.jsx)(Mn, { ...s }),
                  !!u && (0, e.jsx)(Ln, { fnOnRemoveImage: u, langData: a }),
                ],
              }),
            ],
          });
        }
        function Mn(s) {
          const {
              clanSteamID: t,
              langData: a,
              fnOnArtworkLangChange: o,
              fnGetImageHash: l,
              fnLangHasData: c,
              realms: u,
            } = s,
            [v, h, x] = (0, qa.uD)(),
            b = (0, R.q3)(() => {
              const C = l(a.lang);
              return (
                (0, Bt.wT)(
                  !C || !C.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + C,
                ),
                Ye.pU.GetClanImageByImageHash(t, C)
              );
            });
          if (!b) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(mt.he, {
                toolTipContent: (0, i.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: An,
                  onClick: () => h(),
                }),
              }),
              (0, e.jsx)(ie.tH, {
                children: (0, e.jsx)(oe.EN, {
                  active: v,
                  children: (0, e.jsx)(rn, {
                    clanImage: b,
                    lang: a.lang,
                    fnOnArtworkLangChange: o,
                    fnLangHasData: c,
                    realms: u,
                    closeModal: x,
                  }),
                }),
              }),
            ],
          });
        }
        function Ln(s) {
          const { fnOnRemoveImage: t, langData: a } = s,
            [o, l, c] = (0, qa.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(mt.he, {
                toolTipContent: (0, i.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: Sn.A,
                  onClick: l,
                }),
              }),
              (0, e.jsx)(ie.tH, {
                children: (0, e.jsx)(oe.EN, {
                  active: o,
                  children: (0, e.jsx)(oe.o0, {
                    strTitle: (0, i.we)("#selectimage_remove_image"),
                    strDescription: (0, i.we)(
                      "#selectimage_remove_details",
                      (0, i.we)("#Language_" + (0, W.LgB)(a.lang)),
                    ),
                    onOK: () => {
                      t(a.lang);
                    },
                    closeModal: c,
                  }),
                }),
              }),
            ],
          });
        }
        var en = r(13465),
          Tn = r(21659),
          Pn = r(15496),
          He = r.n(Pn),
          Nn = r(88812);
        function kn(s) {
          const {
              event: t,
              spotlightURLOverride: a,
              fnHandleOpenEvent: o,
              fnImageFailureCallback: l,
              fnFilterImageURLsForKnownFailures: c,
              langOverride: u,
            } = s,
            v = (0, Tn.c5)(),
            h = j.useCallback(
              (A) => {
                A.preventDefault(), o && o(t);
              },
              [t, o],
            ),
            x = u || (0, W.sfN)(Y.TS.LANGUAGE),
            [b, C, _] = (0, R.q3)(() => [
              t.GetSummaryWithFallback(x),
              t.GetNameWithFallback(x),
              t.BShowLibrarySpotlightText(),
            ]);
          let E = "spotlight",
            P = ot.wI.spotlight_main;
          (t.appid == 2434320 || Y.TS.EUNIVERSE == W.Rv) &&
            ((E = v
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (P = ot.wI.full));
          let G =
            (0, Nn.WC)(a !== void 0 ? void 0 : t, E, x, P) ??
            (a !== void 0 ? [a] : []);
          c && G && (G = c(G));
          const T = b.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(j.Fragment, {
            children: (0, e.jsx)("div", {
              className: He().MajorEvent_Ctn,
              ref: s.containerRef,
              children: (0, e.jsxs)(X.Z, {
                className: (0, B.A)(
                  He().AppDetailsSpotlightContainer,
                  He().MajorEventContainer,
                ),
                onActivate: h,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: He().MajorEventBackground,
                    children: (0, e.jsx)(en.c, {
                      className: He().MajorEventImageBackgroundBlur,
                      rgSources: G,
                      onIncrementalError: (A, H, O) => l && l(H),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: He().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(en.c, {
                        className: He().MajorEventImage,
                        rgSources: G,
                        onIncrementalError: (A, H, O) => l && l(H),
                      }),
                      (0, e.jsx)("div", {
                        className: He().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: He().MajoreEventImageContentContainer,
                        children:
                          _ &&
                          (0, e.jsxs)("div", {
                            className: He().MajorEventContent,
                            children: [
                              (0, e.jsx)(en.c, {
                                className: He().MajorEventSpotlightBackground,
                                rgSources: G,
                                onIncrementalError: (A, H, O) => l && l(H),
                              }),
                              (0, e.jsxs)("div", {
                                className: He().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: He().MajorEventTitle,
                                    children: C,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: He().MajorEventSummary,
                                    children: T,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: He().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Gn = r(79949),
          Le = r.n(Gn);
        function On(s) {
          const {
              langOverride: t,
              artworkType: a,
              fnOnLanguagePreviewChange: o,
              clanSteamID: l,
              eventModel: c,
              partnerEventStore: u,
              fnOnRemoveImage: v,
              fnOnArtworkLangChange: h,
              realms: x,
              fnLangHasData: b,
              fnGetImageHashAndExt: C,
            } = s,
            _ = C(a, t),
            E = _
              ? ye.zU.GenerateURLFromHashAndExtAndLang(l, _, ot.wI.full, t)
              : "",
            [P] = (0, R.q3)(() => [Wn(a, C)]);
          return P == 0
            ? (0, e.jsxs)("div", {
                className: Ae().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(on, {
                      imgURL:
                        Y.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: c,
                    }),
                  a === "background" &&
                    (0, e.jsx)(ln, {
                      imgURL:
                        Y.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: c,
                      partnerEventStore: u,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(a) &&
                    (0, e.jsx)(Rn, {
                      langOverride: t,
                      artworkType: a,
                      eventModel: c,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, i.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: Ae().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(on, {
                      imgURL: E,
                      eventModel: c,
                      langOverride: t,
                    }),
                  a === "background" &&
                    (0, e.jsx)(ln, {
                      imgURL: E,
                      lang: t,
                      eventModel: c,
                      partnerEventStore: u,
                    }),
                  a === "spotlight" &&
                    (0, e.jsx)(Sa, { imgURL: E, event: c, lang: t }),
                  a === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Sa, { imgURL: E, event: c, lang: t }),
                  a === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Sa, { imgURL: E, event: c, lang: t }),
                  (a === "broadcast_left" || a === "broadcast_right") &&
                    (0, e.jsx)(zn, {
                      imgURL: E,
                      side: a === "broadcast_right" ? "right" : "left",
                    }),
                  a === "sale_header" && (0, e.jsx)(Fn, { imgURL: E }),
                  a === "sale_overlay" && (0, e.jsx)(Hn, { imgURL: E }),
                  ot.pb.includes(a) &&
                    (0, e.jsx)("img", {
                      className: yn.PreviewImg,
                      src:
                        Ne.GetLocalizedImageGroupForEditAsURL(l, t) ?? void 0,
                    }),
                  a === "product_banner" && (0, e.jsx)(qt, { imgURL: E }),
                  a === "product_mobile_banner" &&
                    (0, e.jsx)(qt, { imgURL: E }),
                  a === "sale_logo" && (0, e.jsx)(qt, { imgURL: E }),
                  a === "bestofyear_banner" && (0, e.jsx)(qt, { imgURL: E }),
                  a === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(qt, { imgURL: E }),
                  (0, e.jsx)(wn, {
                    langOverride: t,
                    clanSteamID: l,
                    fnOnLanguagePreviewChange: o,
                    fnOnRemoveImage: v,
                    fnOnArtworkLangChange: h,
                    realms: x,
                    fnLangHasData: b,
                    fnGetImageHash: (G) => $a(C(a, G) ?? ""),
                  }),
                ],
              });
        }
        function As(s) {
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
        function Rn(s) {
          const { artworkType: t, langOverride: a, eventModel: o } = s,
            l = $t.Fj[t],
            c = j.useMemo(
              () =>
                Un(
                  (0, i.we)("#EventEditor_ArtworkType_" + t),
                  `${l.width} X ${l.height}`,
                ),
              [l.height, l.width, t],
            );
          return (0, e.jsx)(Sa, { lang: a, imgURL: c, event: o });
        }
        function Un(s, t) {
          const l = document.createElement("canvas");
          (l.width = 780), (l.height = 200);
          const c = l.getContext("2d"),
            u = 20;
          for (let x = 0; x < 200; x += u)
            for (let b = 0; b < 780; b += u)
              (c.fillStyle =
                (b / u + x / u) % 2 === 0 ? "#a405e3ff" : "#000000"),
                c.fillRect(b, x, u, u);
          const v = c.createLinearGradient(0, 0, 780, 0);
          v.addColorStop(0, "rgba(32,32,32,0.8)"),
            v.addColorStop(1, "rgba(60,60,60,0.8)"),
            (c.fillStyle = v),
            c.fillRect(0, 0, 780, 200);
          const h = c.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            h.addColorStop(0, "rgba(0,0,0,0)"),
            h.addColorStop(1, "rgba(0,0,0,0.6)"),
            (c.fillStyle = h),
            c.fillRect(0, 0, 780, 200),
            (c.fillStyle = "#fff"),
            (c.font = "32px Arial"),
            (c.textAlign = "center"),
            (c.textBaseline = "middle"),
            c.fillText(s, 780 / 2, 200 / 2 - 20),
            t &&
              ((c.font = "18px Arial"), c.fillText(t, 780 / 2, 200 / 2 + 25)),
            l.toDataURL("image/png")
          );
        }
        function on(s) {
          const { imgURL: t, eventModel: a, langOverride: o } = s,
            l = (0, vt.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(En.u, {
              event: a,
              imageURLOverride: t,
              langOverride: o ?? l,
            }),
          });
        }
        function ln(s) {
          const { lang: t, eventModel: a, partnerEventStore: o } = s,
            l = (0, bn.LJ)(),
            [c, u, v, h, x] = (0, R.q3)(() => [
              a.GetNameWithFallback(t),
              a.GetDescriptionWithFallback(t),
              a.GetSubTitleWithLanguageFallback(t),
              a.type,
              a.AnnouncementGID,
            ]);
          let b = u
            ? (0, e.jsx)(_n.fh, {
                text: u || "",
                showErrorInfo: !1,
                event: a,
                languageOverride: vt.O.Get().GetCurEditLanguage(),
              })
            : (0, i.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Le().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Le().ExampleSectionTitle,
                children: (0, i.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, B.A)(
                  Le().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Le().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Le().MainImageCtn,
                      children: (0, e.jsx)("img", { src: s.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Le().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Le().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Le().TextTitle,
                            children:
                              c ||
                              (0, i.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Le().TextSubTitle,
                            children:
                              v ||
                              (0, i.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Le().TextBody,
                            children: b,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              h != W.Fwr &&
                (0, e.jsxs)(j.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Le().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Le().ExampleSectionTitle,
                      children: (0, i.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, B.A)(
                        Le().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Le().DetailExample2,
                        children: (0, e.jsx)(
                          Cn.He,
                          {
                            event: a,
                            emoticonStore: l,
                            partnerEventStore: o,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          x,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Sa = (s) => {
            const [t] = (0, Ft.t7)(s.event.appid, { include_assets: !0 });
            if (!t) return null;
            const a = t.GetName(),
              o = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Le().SpotlightExample,
              children: (0, e.jsx)(kn, {
                event: s.event,
                strDisplayName: a ?? "",
                gameIconUrl: o,
                spotlightURLOverride: s.imgURL,
                langOverride: s.lang,
              }),
            });
          },
          zn = (s) => {
            const t = [
              (0, e.jsx)("img", { src: s.imgURL }, "img"),
              (0, e.jsx)("div", { className: Ae().BroadcastPreview }, "video"),
            ];
            return (
              s.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Le().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Fn = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Hn = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          qt = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            });
        function Wn(s, t) {
          let a = 0;
          for (let o = W.Bhc; o < W.bP9; ++o)
            (t(s, o)?.length ?? 0) > 0 && (a += 1);
          return a;
        }
        var Yn = Object.defineProperty,
          Vn = Object.getOwnPropertyDescriptor,
          cn = (s, t, a, o) => {
            for (
              var l = o > 1 ? void 0 : o ? Vn(t, a) : t, c = s.length - 1, u;
              c >= 0;
              c--
            )
              (u = s[c]) && (l = (o ? u(t, a, l) : u(l)) || l);
            return o && l && Yn(t, a, l), l;
          };
        const Kn =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Zn = ((s) => (
          (s[(s.k_None = 0)] = "k_None"),
          (s[(s.k_Suggested = 1)] = "k_Suggested"),
          (s[(s.k_Required = 2)] = "k_Required"),
          (s[(s.k_Requested = 3)] = "k_Requested"),
          s
        ))(Zn || {});
        function Qn(s) {
          const {
              artworkType: t,
              headerHint: a,
              appid: o,
              fnToggleMinimize: l,
              realms: c,
              eventModel: u,
              fnLangHasData: v,
              fnGetImageHashAndExt: h,
              fnSetImageURL: x,
              partnerEventStore: b,
            } = s,
            [C] = (0, Ft.t7)(o, { include_assets: !0 }),
            [_, E] = (0, R.q3)(() => [
              u?.GetEventType(),
              u?.BHasTag("vo_marketing_message"),
            ]),
            P = _ == W.ajI;
          let G = null;
          a === 2
            ? (G = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, i.we)("#EventEditor_Required"),
              }))
            : a === 1
              ? (G = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, i.we)("#EventEditor_Suggested"),
                }))
              : a === 3 &&
                (G = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, i.we)("#EventEditor_Requested"),
                }));
          let T = null;
          t === "capsule"
            ? P
              ? (T = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, i.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, i.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, i.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, i.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (T = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!E &&
                      (0, e.jsxs)("div", {
                        className: Ae().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, i.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${Y.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, i.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, i.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, i.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, i.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, i.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (T = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, i.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, i.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (T = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, i.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, i.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (T = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, i.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, i.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (T = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, i.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (T = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: U().EventElementRequired,
                              children: (0, i.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, i.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, i.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, i.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, i.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, i.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, i.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, i.we)(
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
                          (T = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, i.we)("#selectimage_tip_hero_1"),
                              }),
                              !C.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: ya.ErrorStylesBackground,
                                  children: (0, i.we)(
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
                          ? (T = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, i.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, i.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Kn,
                                      target: Y.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, i.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (T = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: U().EventElementOptional,
                                    children: (0, i.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, i.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, i.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (T = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: U().EventElementOptional,
                                      children: (0, i.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, i.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, i.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, i.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (T = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, i.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, i.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, i.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, i.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (T = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: U().EventElementOptional,
                                          children: (0, i.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, i.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, i.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (T = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: U().EventElementRequired,
                                          children: (0, i.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, i.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, i.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const A = $t.Fj[s.artworkType].width,
            H = $t.Fj[s.artworkType].height;
          return (0, e.jsxs)("div", {
            id: s.id,
            className: Ae().ArtworkSelectorContainer,
            children: [
              !!s.title &&
                (0, e.jsxs)("div", {
                  className: Ae().Title,
                  onDoubleClick: l,
                  children: [
                    s.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    G,
                    l &&
                      (0, e.jsx)(re.$n, {
                        onClick: l,
                        children: (0, e.jsx)(mt.he, {
                          toolTipContent: (0, i.we)(
                            s.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: s.bIsMinimized
                            ? (0, e.jsx)(Tt.hz4, {})
                            : (0, e.jsx)(Tt.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, B.A)(Ae().SelectImageBlock, Ae().Tips),
                  children: [
                    T,
                    !!(A && H) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, i.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, i.PP)(
                            "#selectimage_tip1",
                            (0, $t.qj)(A),
                            (0, $t.qj)(H),
                          ),
                        ],
                      }),
                    !!s.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: ya.WarningStylesWithIcon,
                          children: s.strWarning,
                        }),
                      }),
                    s.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    s.elAdditionalControls,
                    !!s.fnRemoveAllArtwork &&
                      (0, e.jsx)(re.$n, {
                        onClick: (O) => {
                          (0, Me.pg)(
                            (0, e.jsx)(Xn, {
                              fnRemoveAllArtwork: s.fnRemoveAllArtwork,
                            }),
                            (0, ht.uX)(O) ?? window,
                          );
                        },
                        children: (0, i.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsx)(Jn, {
                  clanSteamID: s.clanSteamID,
                  title: s.title ?? "",
                  eventModel: u,
                  artworkType: s.artworkType,
                  realms: c,
                  appid: o,
                  fnGetImageHashAndExt: h,
                  fnSetImageURL: x,
                  fnLangHasData: v,
                  partnerEventStore: b,
                }),
            ],
          });
        }
        function Xn(s) {
          const { fnRemoveAllArtwork: t, closeModal: a } = s;
          return (0, e.jsx)(oe.o0, {
            strTitle: (0, i.we)("#Sale_RemoveAll"),
            strDescription: (0, i.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), a?.();
            },
            onCancel: a,
          });
        }
        function Jn(s) {
          const {
              artworkType: t,
              realms: a,
              clanSteamID: o,
              fnLangHasData: l,
              fnGetImageHashAndExt: c,
              fnSetImageURL: u,
              eventModel: v,
              appid: h,
              partnerEventStore: x,
            } = s,
            b = t === "localized_image_group",
            [C, _] = j.useState((0, vt.E)()),
            [E, P] = j.useState(new Array()),
            G = j.useCallback(
              (A, H, O) => {
                let q = [];
                E.find((te) => te.clanImage.imageid == A.imageid)
                  ? (q = E.map((te) =>
                      te.clanImage.imageid == A.imageid
                        ? { clanImage: A, lang: H }
                        : te,
                    ))
                  : O && (q = E.concat({ clanImage: A, lang: H })),
                  P(q);
              },
              [E],
            ),
            T = j.useCallback(
              (A, H, O) => {
                (0, Ut.h5)(() => {
                  $a(c(t, H) ?? "") == A.image_hash && u(t, null, H),
                    u(t, A, O),
                    G(A, O, !1);
                });
              },
              [c, t, u, G],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(re.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${Y.TS.PARTNER_BASE_URL}admin/game/editbyappid/${h}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, i.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Aa, {
                    list: E,
                    fnOnArtworkLanguageChange: T,
                    realms: a,
                    fnLangHasData: l,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, B.A)(
                        Ae().SelectImageBlock,
                        Ae().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(On, {
                        eventModel: v,
                        clanSteamID: o,
                        fnOnLanguagePreviewChange: (A) => {
                          A != C && _(A);
                        },
                        langOverride: C,
                        fnOnArtworkLangChange: b ? null : T,
                        artworkType: t,
                        fnOnRemoveImage: b ? null : (A) => u(t, null, A),
                        realms: a,
                        fnLangHasData: l,
                        fnGetImageHashAndExt: c,
                        partnerEventStore: x,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Aa = class extends j.Component {
          ShowLangChangeDialog(s, t) {
            const {
              fnOnArtworkLanguageChange: a,
              realms: o,
              fnLangHasData: l,
            } = this.props;
            (0, Me.pg)(
              (0, e.jsx)(rn, {
                clanImage: s,
                lang: t,
                fnOnArtworkLangChange: a,
                fnLangHasData: l,
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
                const { clanImage: o, lang: l } = a;
                let c = (0, i.we)("#Language_" + (0, W.LgB)(l));
                s.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: U().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, i.we)(
                            "#ImageUpload_Success_Mapping",
                            o.file_name ?? "",
                            c,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(o, l),
                          children: (0, i.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + a.clanImage.imageid + "_" + l,
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
              className: Ae().UploadSuccess,
              children: t,
            });
          }
        };
        cn([nt.oI], Aa.prototype, "ShowLangChangeDialog", 1),
          (Aa = cn([Ia.PA], Aa));
        var $n = r(6658);
        function qn(s) {
          const {
              clanSteamID: t,
              appid: a,
              eventModel: o,
              realms: l,
              loc_images: c,
              artworkType: u,
              fnLangHasData: v,
              closeModal: h,
              fnSetImageURL: x,
              partnerEventStore: b,
            } = s,
            [C, _] = (0, j.useState)(!1),
            E = (0, fa.zO)(t, u),
            P = t.GetAccountID(),
            [G] = (0, R.q3)(() => [
              E.GetFilesToUpload().length - E.GetCompletedFiles(),
            ]);
          (0, j.useEffect)(() => {
            _(!1),
              Ne.ClearImageGroup(),
              c?.forEach((O, q) => {
                const M = Ze.b.InitFromClanID(P);
                if (Ne.GetAllLocalizedGroupImages().length == 0) {
                  const te = O && ye.zU.GetHashFromHashAndExt(O),
                    Ee = te && Ye.pU.GetClanImageByImageHash(M, te);
                  Ee && Ne.SetPrimaryImageForImageGroup(Ee, u);
                }
                Ne.SetLocalizedImageGroupAtLang(q, M, O ?? null);
              }),
              _(!0);
          }, [c, P, u]);
          const T = (0, j.useCallback)(
              (O, q, M = W.Bhc) => {
                const te = Ze.b.InitFromClanID(P),
                  Ee = ye.zU.GetHashAndExt(q ?? null);
                if (Ne.GetAllLocalizedGroupImages().length == 0) {
                  const it = Ee && ye.zU.GetHashFromHashAndExt(Ee),
                    Je = it && Ye.pU.GetClanImageByImageHash(te, it);
                  Je && Ne.SetPrimaryImageForImageGroup(Je, O);
                }
                Ne.SetLocalizedImageGroupAtLang(M, te, Ee);
              },
              [P],
            ),
            A = (0, j.useCallback)((O, q) => {
              const te =
                Ne.GetLocalizedImageGroupForEdit()?.localized_images[q];
              return te && te.split("/").pop();
            }, []),
            H = () => {
              const O = Ne.GetLocalizedImageGroupForEdit();
              for (let q = W.Bhc; q < W.bP9; ++q) {
                const M = O?.localized_images[q];
                if (M) {
                  const te = M.split("/").pop() || "";
                  x(
                    u,
                    {
                      image_hash: $a(te),
                      clanAccountID: P,
                      file_type: (0, $n.yh)(te) ?? Xt.bg.w3,
                      imageid: 0,
                    },
                    q,
                  );
                } else x(u, null, q);
              }
              Ne.ClearImageGroup(), s.onOK ? s.onOK() : h?.();
            };
          return (0, e.jsxs)(oe.o0, {
            onCancel: h,
            closeModal: h,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, B.A)(ya.NotTooWideModal, ya.ImageManageDialog),
            strTitle: s.strLocalizedTitle || (0, i.we)("#ImagePickerLoc_Title"),
            strDescription: s.strLocalizedDescription,
            bOKDisabled: G > 0,
            onOK: H,
            strOKButtonText:
              G > 0 ? (0, i.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              C
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(xn, {
                        clanSteamID: t,
                        rgSupportArtwork: [u],
                        fnSetImageURL: T,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: l ?? [],
                        uploaderOverride: E,
                      }),
                      (0, e.jsx)(Qn, {
                        clanSteamID: t,
                        eventModel: o,
                        artworkType: u,
                        title: null,
                        appid: a,
                        realms: l,
                        fnRemoveAllArtwork: () => Ne.ClearImageGroup(),
                        fnSetImageURL: T,
                        fnGetImageHashAndExt: A,
                        fnLangHasData: v,
                        partnerEventStore: b,
                      }),
                    ],
                  })
                : (0, e.jsx)(jt.t, {
                    size: "medium",
                    position: "center",
                    string: (0, i.we)("#Loading"),
                  }),
              s.children,
            ],
          });
        }
        function es(s) {
          const { setting: t, fnUpdateSetting: a, label: o } = s,
            l = j.useMemo(() => {
              const c = [];
              return (
                c.push({
                  label: (0, i.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                c.push({
                  label: (0, i.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                c.push({
                  label: (0, i.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                c.push({
                  label: (0, i.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                c.push({
                  label: (0, i.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                c
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, i.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: L.DropDownScroll,
                rgOptions: l,
                selectedOption: t || "no-repeat",
                onChange: (c) => a(c.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var ts = r(94381);
        function as(s) {
          const {
              closeModal: t,
              imgGroup: a,
              fnUpdateImageGroup: o,
              eventModel: l,
            } = s,
            { openColorPicker: c } = Ua(),
            [u, v] = (0, j.useState)(() => a),
            [h, x, b, C, _, E, P, G] = (0, R.q3)(() => [
              u.repeat_setting,
              u.scaling_setting,
              u.background_color1,
              u.background_color2,
              u.gradient_setting,
              u.position_setting,
              l.GetIncludedRealmList(),
              u.randomize_section_order,
            ]),
            [T] = (0, j.useState)(() => ns(u.localized_background_art ?? {}));
          return (0, e.jsxs)(qn, {
            strLocalizedTitle: (0, i.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, i.we)("#BackgroundGroups_DialogDesc"),
            appid: l.appid,
            eventModel: l,
            clanSteamID: l.clanSteamID,
            closeModal: t,
            partnerEventStore: Rt.O3,
            artworkType: "localized_background_art",
            realms: P,
            loc_images: T,
            fnLangHasData: (A) => !!T[A],
            fnGetImageHash: (A, H) => T[H],
            fnSetImageURL: async (A, H, O) => {
              v((q) => {
                const M = { ...q.localized_background_art },
                  te = ye.zU.GetHashAndExt(H);
                return (
                  te ? (M[(0, W.LgB)(O)] = te) : delete M[(0, W.LgB)(O)],
                  { ...q, localized_background_art: M }
                );
              });
            },
            onOK: () => {
              v((A) => (o(A), t && setTimeout(t, 1), { ...A }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Ke().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ke().ImageOptions,
                    children: [
                      (0, e.jsx)(es, {
                        setting: h,
                        fnUpdateSetting: (A) => {
                          v(
                            A !== "no-repeat"
                              ? {
                                  ...u,
                                  repeat_setting: A,
                                  scaling_setting: "auto",
                                }
                              : { ...u, repeat_setting: A },
                          );
                        },
                        label: (0, i.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(ss, {
                        scaling_setting: x ?? "contain",
                        disable: h !== "no-repeat",
                        fnUpdateSetting: (A) => v({ ...u, scaling_setting: A }),
                      }),
                      x != "cover" &&
                        (0, e.jsx)(os, {
                          position_settings: E,
                          fnUpdateSetting: (A) =>
                            v({ ...u, position_setting: A }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Ke().ColorOptions,
                    children: [
                      (0, e.jsx)(re.JU, {
                        children: (0, i.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: pa().ColorCtn,
                        children: [
                          (0, e.jsx)(re.$n, {
                            style: { backgroundColor: b },
                            onClick: (A) =>
                              c(A, {
                                color: b ?? "",
                                onChange: (H) =>
                                  v({ ...u, background_color1: H }),
                              }),
                            children: (0, i.we)(
                              b === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(re.$n, {
                            onClick: () =>
                              v({ ...u, background_color1: void 0 }),
                            children: (0, i.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Ke().SwapColorsCtn,
                        children: (0, e.jsx)(re.$n, {
                          onClick: () =>
                            v({
                              ...u,
                              background_color1: C,
                              background_color2: b,
                            }),
                          children: (0, i.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      _ !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: pa().ColorCtn,
                          children: [
                            (0, e.jsx)(re.$n, {
                              style: { backgroundColor: C },
                              onClick: (A) =>
                                c(A, {
                                  color: C ?? "",
                                  onChange: (H) =>
                                    v({ ...u, background_color2: H }),
                                }),
                              children: (0, i.we)(
                                C === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(re.$n, {
                              onClick: () =>
                                v({ ...u, background_color2: void 0 }),
                              children: (0, i.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(rs, {
                        gradient: _ ?? "top-to-bottom",
                        fnUpdateSetting: (A) =>
                          v({ ...u, gradient_setting: A }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(ia, {
                clanSteamID: l.clanSteamID,
                children: (0, e.jsx)(ts.S, {
                  checked: !!G,
                  onChange: (A) => {
                    u.randomize_section_order = A;
                  },
                  children: (0, i.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function ns(s) {
          const t = gt.$Y([], W.bP9, null);
          for (const a in s) {
            const o = (0, W.sfN)(a);
            o != W.xPp && (t[o] = s[a]);
          }
          return t;
        }
        function ss(s) {
          const {
              scaling_setting: t,
              fnUpdateSetting: a,
              label: o,
              disable: l,
            } = s,
            c = j.useMemo(() => {
              const u = [];
              return (
                u.push({
                  label: (0, i.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                u.push({
                  label: (0, i.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                u.push({
                  label: (0, i.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                u
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, i.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: L.DropDownScroll,
                disabled: l,
                rgOptions: c,
                selectedOption: t || "cover",
                onChange: (u) => a(u.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function rs(s) {
          const { gradient: t, fnUpdateSetting: a, label: o } = s,
            l = j.useMemo(() => {
              const c = [];
              return (
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                c
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, i.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: L.DropDownScroll,
                rgOptions: l,
                selectedOption: t || "top-to-bottom",
                onChange: (c) => a(c.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function os(s) {
          const { position_settings: t, fnUpdateSetting: a, label: o } = s,
            l = j.useMemo(() => {
              const c = [];
              return (
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                c.push({
                  label: (0, i.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                c
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, i.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: L.DropDownScroll,
                rgOptions: l,
                selectedOption: t || "unset",
                onChange: (c) => a(c.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function is(s) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: a,
              fnSetBackgroundImgGroupEditMode: o,
              bShowAsValveOnly: l,
            } = s,
            [c, u] = (0, j.useState)(t.BIsBackgroundImageEnabled()),
            [v, h, x] = (0, nt.uD)(),
            b = (0, R.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, B.A)(Ke().Ctn, l && L.ValveOnlyBackground),
            children: (0, e.jsxs)(ie.tH, {
              children: [
                (0, e.jsx)(re.Yh, {
                  label: (0, i.we)("#BackgroundGroups_Setting"),
                  checked: c,
                  onChange: (C) => {
                    u(C), t.SetBackgroundImageEnabled(C);
                  },
                }),
                c
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(re.Yh, {
                          label: (0, i.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, i.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: a,
                          onChange: o,
                        }),
                        (0, e.jsx)(re.Yh, {
                          label: (0, i.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, i.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: b,
                          onChange: (C) =>
                            t.SetSalePageLastCoverSectionUntilEnd(C),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(re.$n, {
                          onClick: h,
                          children: (0, i.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(oe.EN, {
                          active: v,
                          children: (0, e.jsx)(oe.o0, {
                            strTitle: (0, i.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, i.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), u(!1);
                            },
                            closeModal: x,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, i.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${Wt.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, i.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const tn = j.forwardRef(function (t, a) {
          const {
              imgGroupDerivedMapping: o,
              backgroundImageEditModel: l,
              groupIndex: c,
              imgGroup: u,
              eventModel: v,
              nTabIndex: h,
            } = t,
            x = (0, vt.E)(),
            [b, C, _, E] = (0, R.q3)(() => [
              u && o.mapGroupToSections.get(u.background_id),
              (u &&
                o.mapGroupToSections.get(u.background_id)?.sectionUniqueIDs) ??
                [],
              h != null
                ? l?.GetTabLastCoverSectionUntilEnd(h)
                : l?.GetSalePageLastCoverSectionUntilEnd(),
              h != null ? l?.GetTabGroupCount(h) : l?.GetSalePageGroupCount(),
            ]),
            P = _ && c + 1 === E,
            [G, T, A] = (0, nt.uD)(),
            [H, O, q] = (0, nt.uD)();
          let M;
          b?.nUniqueIDNextSaleSection &&
            (M = (0, Ot.h_)(
              K.HY,
              l.GetSaleSectionByID(b?.nUniqueIDNextSaleSection),
              x,
              v,
              b.nSaleSectionLastIndex + 1,
            ));
          let te;
          if (b && C?.length > 1) {
            const Ee = C[C.length - 1];
            te = (0, Ot.h_)(
              K.HY,
              l?.GetSaleSectionByID(Ee),
              x,
              v,
              b.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(Na.qx, {
            bStartMinimized: !1,
            title: (0, i.we)(
              h != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              c + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: a,
              children: [
                (0, e.jsx)(re.$n, {
                  onClick: T,
                  children: (0, i.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(oe.EN, {
                  active: G,
                  children: (0, e.jsx)(as, {
                    imgGroup: u,
                    closeModal: A,
                    eventModel: v,
                    fnUpdateImageGroup: (Ee) =>
                      h != null
                        ? l.SetTabBackgroundGroup(h, c, Ee)
                        : l.SetSalePageBackgroundGroup(c, Ee),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Ke().EditorTitle,
                  children: (0, i.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    C.map((Ee) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, Ot.h_)(
                            K.W3,
                            l.GetSaleSectionByID(Ee),
                            x,
                            v,
                            l.GetSaleSectionIndexByID(Ee, !0),
                          ),
                        },
                        "li_" + Ee,
                      ),
                    ),
                    !!P &&
                      (0, e.jsx)("li", {
                        children: (0, i.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!te &&
                  (0, e.jsx)(re.$n, {
                    onClick: () =>
                      h != null
                        ? l.SetTabBackgroundGroup(h, c, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          })
                        : l.SetSalePageBackgroundGroup(c, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          }),
                    children: (0, i.we)("#BackgroundGroups_Reduce", te),
                  }),
                !!M &&
                  (0, e.jsx)(re.$n, {
                    onClick: () =>
                      h != null
                        ? l.SetTabBackgroundGroup(h, c, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          })
                        : l.SetSalePageBackgroundGroup(c, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          }),
                    children: (0, i.we)("#BackgroundGroups_Extend", M),
                  }),
                c > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(re.$n, {
                        onClick: O,
                        children: (0, i.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(oe.EN, {
                        active: H,
                        children: (0, e.jsx)(oe.o0, {
                          strTitle: (0, i.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, i.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            h != null
                              ? l.RemoveTabBackgroundGroup(h, c)
                              : l.RemoveSalePageBackgroundGroup(c),
                          closeModal: q,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function ls(s) {
          const { backgroundImageEditModel: t, nTabID: a } = s;
          return (0, e.jsx)("div", {
            className: Ke().CtnEditor,
            children: (0, e.jsx)(re.$n, {
              onClick: (o) =>
                a !== void 0 && a >= 0
                  ? t?.AddTabBackgroundGroup(a)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, i.we)(
                a !== void 0 && a >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function cs(s) {
          const {
              nTabID: t,
              nSectionUniqueID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: l,
            } = s,
            c = o.mapFirstSectionToGroup.get(a);
          return a == o.nFirstSaleSectionIDWithoutGroup ||
            a == o.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(ls, { backgroundImageEditModel: l, nTabID: t })
            : c
              ? (0, e.jsx)(ds, { ...s, groupID: c })
              : null;
        }
        function ds(s) {
          const {
              groupID: t,
              nTabID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: l,
            } = s,
            c =
              a && a >= 0
                ? o.selectedTabBackgroundDef.groups
                : l.GetSalePageGroupDefinition().groups,
            u = c.findIndex((G) => G.background_id === t),
            v = c[u],
            [h, x] = (0, j.useState)(!1);
          (0, j.useEffect)(() => {
            if (!h) return;
            const G = (0, Me.pg)(
              (0, e.jsx)(oe.o0, {
                bAlertDialog: !0,
                closeModal: () => x(!1),
                children: (0, e.jsx)(tn, {
                  backgroundImageEditModel: l,
                  groupIndex: u,
                  imgGroup: v,
                  imgGroupDerivedMapping: o,
                  eventModel: l.GetEventModel(),
                  nTabIndex: a,
                }),
              }),
              window,
            );
            return () => {
              G.then((T) => T.Close());
            };
          }, [h, l, v, u, a, o]);
          const b = (0, R.q3)(() => xt.get(t)),
            [C, _] = (0, j.useState)(null),
            E = j.useCallback((G, T) => {
              _(T);
            }, []),
            P = (0, nt.w6)(E);
          return (0, e.jsxs)("div", {
            className: Ke().CtnEditor,
            ref: P,
            children: [
              !!(b && C && C > b) &&
                (0, e.jsx)(re.$n, {
                  onClick: (G) => x(!0),
                  children: (0, i.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(tn, {
                backgroundImageEditModel: l,
                groupIndex: u,
                imgGroup: v,
                imgGroupDerivedMapping: o,
                eventModel: l.GetEventModel(),
                nTabIndex: a,
              }),
            ],
          });
        }
        var us = r(81557),
          dn = r.n(us);
        function gs(s) {
          const { imgGroupDerivedMapping: t } = s,
            [a, o] = (0, j.useState)(!1);
          (0, j.useEffect)(() => {
            if (!a) return;
            const b = (0, Me.pg)(
              (0, e.jsx)(oe.o0, {
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
          const l = (0, R.q3)(() => {
              const b = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (b) {
                const C = t.mapGroupToSections.get(b);
                if (C) return xt.get(C?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [c, u] = (0, j.useState)(null),
            v = j.useCallback((b, C) => {
              u(C);
            }, []),
            h = (0, nt.w6)(v),
            x = !!(l >= 0 && c && c > l);
          return (0, e.jsxs)("div", {
            className: (0, B.A)(Ke().CtnEditor, dn().TabCtn),
            ref: h,
            children: [
              x &&
                (0, e.jsx)(re.$n, {
                  onClick: (b) => o(!0),
                  children: (0, i.we)("#BackgroundGroups_EditBackgroundGroup"),
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
            [l, c] = (0, j.useState)(null),
            [u, v, h, x] = (0, R.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(o),
              t?.BIsTabEnabled(o),
              a.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(ie.tH, {
            children: [
              (0, e.jsx)(re.Yh, {
                label: (0, i.we)("#BackgroundGroups_TaSetting"),
                checked: v,
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
                      c(C);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${o}.`,
                    );
                },
              }),
              !!v &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(re.Yh, {
                      label: (0, i.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, i.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: u,
                      onChange: (b) => t.SetTabLastCoverSectionUntilEnd(o, b),
                    }),
                    (0, e.jsx)(tn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (h || l)?.groups[0],
                      imgGroupDerivedMapping: a,
                      eventModel: x,
                      nTabIndex: o,
                      classNameHeader: dn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var ea = r(85692);
        function ms(s) {
          const { nSectionID: t, children: a } = s,
            [o, l] = j.useState(!1),
            [c, u] = j.useState(!1);
          j.useEffect(() => {
            ea.TU.Get().SetMouseOverSection(t, o);
          }, [t, o]);
          const v = (0, R.q3)(() => ea.TU.Get().GetMouseOverSectionID()),
            h = t && t == v,
            x = () => ea.TU.Get().JumpToSection(t),
            b = j.useRef(null);
          return (
            (0, ea.lM)((C) =>
              t != C ? !1 : (b.current?.scrollIntoView(), u(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: b,
              className: (0, B.A)({
                [J().SaleSectionLivePreview]: !0,
                [J().Hover]: !!h,
                [J().JumpedTo]: !!c,
              }),
              onAnimationEnd: () => u(!1),
              onMouseEnter: () => l(!0),
              onMouseLeave: () => l(!1),
              children: [
                o &&
                  (0, e.jsx)(mt.Gq, {
                    toolTipContent: (0, i.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: J().JumpToButton,
                      onClick: x,
                      children: (0, e.jsx)(Tt.ffu, {}),
                    }),
                  }),
                a,
              ],
            })
          );
        }
        var hs = r(76281),
          ps = r(20557),
          fs = r(64286),
          vs = r(16574);
        function xs(s) {
          const {
              promotionName: t,
              eventModel: a,
              bIsPreview: o,
              language: l,
              backgroundImageEditModel: c,
              addtionalAdminButtons: u,
              bDynamicallyCreatedSale: v,
            } = s,
            [h, x] = j.useState(a?.GetDayIndexFromEventStart()),
            [b, C] = j.useState(null),
            _ = (0, R.q3)(() => a.jsondata.sale_header_disable_top_margin),
            E = (0, vs.P)(a, !!(0, yt.Yu)(a)),
            P = Is(a, h, (0, ps.TC)(!!o)),
            [G, T] = (0, j.useState)(!1);
          j.useEffect(() => {
            if (
              a.jsondata.sale_custom_css &&
              !b &&
              o &&
              a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, Y.yK)() == "community"
            ) {
              const te = document.getElementsByTagName("HEAD")[0],
                Ee = document.createElement("style");
              (Ee.innerText = (0, ua.L$)(a.jsondata.sale_custom_css)),
                C(Ee),
                te.appendChild(Ee);
            }
            const M = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Bt.wT)(
                M.length <= 1,
                "Must have at most one react_landing_background",
              ),
              M.length >= 1 && (M[0].style.backgroundImage = ""),
              () => {
                b && (b.remove(), C(null));
              }
            );
          }, [a, b, o]);
          const A = a?.jsondata,
            H = j.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(Y.UF.CLANACCOUNTID),
                nAppIDVOD: Number(A?.broadcast_preroll_vod_appid),
                event: a,
                bIsPreview: o,
                language: l,
                accountIDs: o ? A?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  A?.broadcast_chat_announcement_giveaway,
              }),
              [o, a, A, l, t],
            ),
            O = (0, R.q3)(() => c?.BIsBackgroundImageEnabled() ?? !1),
            q = oa(a?.clanSteamID);
          if (!a || h === void 0)
            return (0, e.jsx)("div", {
              className: Yt().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(jt.t, {
                size: "medium",
                string: (0, i.we)("#Loading"),
              }),
            });
          {
            const M = se(a),
              te = a.BUsesContentHubForItemSource(),
              Ee = a
                .GetSaleSections()
                .some((ct) => ct.section_type === "contenthubtitle"),
              it = te && Ee;
            let Je,
              ue = !0;
            M
              ? (Je = 0)
              : a.BUsesContentHubForItemSource()
                ? (Je = 20)
                : a.GetEventType() == W.ajI
                  ? ((Je = 0), (ue = !1))
                  : (Je = a.jsondata.sale_header_offset || 0);
            const Ie = ue && a.jsondata.sale_header_offset === 530,
              Ct = !Ue.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  a.GetContentHubType(),
                  a.GetContentHubCategory(),
                  a.GetContentHubTag(),
                ),
              Pt = o
                ? !G && c?.BIsBackgroundImageEnabled()
                  ? st.S.EPreviewMode_EditBackground
                  : st.S.EPreviewMode_Enabled
                : st.S.EPreviewMode_Disabled,
              lt = O || a.GetEventType() != W.ajI,
              ta = te ? he.Yo.NoTransform : he.Yo.NoTransformSparseContent,
              Da = (0, B.A)(
                J().SaleOuterContainer,
                _ && J().SaleOuterTopMargin,
                Ie && J().SaleNewSizing,
                J()[`CustomStyle_${a.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                M && J().SalePageLogoSet,
                it && J().ContentHub,
              );
            return (0, e.jsx)(ie.tH, {
              children: (0, e.jsx)(k.EU, {
                eventModel: a,
                language: l,
                children: (0, e.jsx)(K.Cs, {
                  location: o ? K.HY : K.bs,
                  children: (0, e.jsxs)(de, {
                    event: a,
                    language: l,
                    bIsPreview: !!o,
                    personalizedCarousels: E,
                    children: [
                      Ct && (0, e.jsx)(k.Sn, {}),
                      (0, e.jsx)(Ge, { eventModel: a }),
                      !!c &&
                        (lt || q) &&
                        (0, e.jsx)(is, {
                          backgroundImageEditModel: c,
                          bBackgroundImgGroupEditMode: G,
                          fnSetBackgroundImgGroupEditMode: T,
                          bShowAsValveOnly: !lt,
                        }),
                      (0, e.jsxs)(X.Z, {
                        style: it ? void 0 : { marginTop: `${Je || 0}px` },
                        className: Da,
                        scrollIntoViewType: ta,
                        children: [
                          M && (0, e.jsx)(ae, { eventModel: a, language: l }),
                          (0, e.jsx)(ft, {
                            rgPresenters: a.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(We, {
                            event: a,
                            broadcastEmbedContext: H,
                          }),
                          (0, e.jsx)(bs, {
                            ePreviewMode: Pt,
                            event: a,
                            backgroundImageEditModel: c,
                            language: l,
                            promotionName: t,
                            nSaleDayIndex: h,
                            broadcastEmbedContext: H,
                            selectedTab: P,
                            tagSelection: P?.GetTagSelection(),
                          }),
                          !v &&
                            (0, e.jsx)(Ma, {
                              event: a,
                              addtionalAdminButtons: u,
                              fnOnChangeDayIndex: (ct) => {
                                ct != h &&
                                  ((a.m_overrideCurrentDay = ct), x(ct));
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
        function Is(s, t, a) {
          const [o] = (0, Fe.QD)(ne.jD, void 0),
            [l] = (0, Fe.QD)(qe.dk, void 0),
            [c] = (0, Fe.QD)(qe.NV, void 0),
            u = j.useMemo(() => {
              const C = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((_) => !_.hide);
              if (C && C.length > 0) {
                let _ = o > 0 ? C.find((P) => P.unique_id == o) : void 0;
                _ || (_ = C[0]);
                const E = _ === C[0];
                return { selTab: _, bIsDefaultTab: E };
              }
            }, [s, o]),
            v = (0, qe.U9)((0, qe.XL)(l, c), u?.selTab.tab_tag_filter, a),
            h = v?.strParentKey,
            x = v?.strChildKey;
          return j.useMemo(() => {
            if (!u) return;
            let b;
            h && (b = { strParentKey: h, strChildKey: x });
            const C =
              s.jsondata.sale_opt_in_page_name ||
              s.jsondata.prune_list_optin_name;
            return new Gt.y(u.selTab, t, u.bIsDefaultTab, b, C);
          }, [s, t, u, h, x]);
        }
        function gn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function js(s) {
          const {
              event: t,
              language: a,
              nSaleDayIndex: o,
              ePreviewMode: l,
              selectedTab: c,
              backgroundImageEditModel: u,
            } = s,
            [v, h] = j.useState((0, ne.rp)()),
            x = j.useMemo(() => new Pa(), []),
            b = j.useCallback(() => h((0, ne.rp)()), []);
          j.useEffect(
            () => (
              window.addEventListener("resize", b),
              () => window.removeEventListener("resize", b)
            ),
            [b],
          ),
            j.useEffect(() => {
              let ue = "";
              const Ie = () => {
                  const Ct = gn();
                  if (Ct && Ct != ue) {
                    const Pt = document.getElementById(Ct);
                    Pt && ((ue = Ct), Pt.scrollIntoView({ block: "start" }));
                  }
                },
                Ve = setTimeout(() => Ie(), 150);
              return (
                window.addEventListener("hashchange", Ie),
                () => {
                  clearTimeout(Ve),
                    window.removeEventListener("hashchange", Ie);
                }
              );
            }, []);
          const C = (0, w.W6)(),
            _ = (ue, Ie) => {
              (0, Fe.ip)(C, { ...(Ie || {}), [ne.jD]: ue.toString() });
            },
            [E, P] = (0, Fe.QD)("controller"),
            [G, T] = (0, R.q3)(() => {
              const ue =
                  Et.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                Ie = t.GetSaleSectionIncludingFooterSections(ue);
              return [
                la(
                  t.jsondata.sale_background_img_groups,
                  Ie,
                  c && c.GetActiveTabUniqueID(),
                ),
                Ie,
              ];
            });
          let A = !1;
          const H = new Gt.y(void 0, o),
            O = [{ elements: [], activeTab: H }];
          let q = null;
          const M = (0, Y.Qn)(),
            te = (0, ea.ty)(),
            Ee = (0, fs.h)(t),
            it = j.useMemo(() => {
              const ue = gn();
              if (!ue) return;
              const Ie = T.findIndex((Ve) => Ve.section_anchor === ue);
              return Ie > -1 ? Ie : void 0;
            }, [T]);
          T.forEach((ue, Ie) => {
            const Ve = O[O.length - 1].activeTab;
            if (Ve && !Ve.ShouldShowSection(ue)) return;
            const Ct = Ue.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Pt = v && !Ct && !t.jsondata.content_hub_restricted_width;
            let lt = (0, st.I)(ue, l, t, a, M, Ee);
            if (lt === void 0) return;
            if (!lt)
              if ((0, ut.su)(ue) && !Y.iA.logged_in)
                A ||
                  ((lt = (0, e.jsx)(ut.CC, {
                    section: ue,
                    event: t,
                    language: a,
                  })),
                  (A = !0));
              else {
                const ys = ue.diable_tab_id_filtering
                  ? new Gt.y(void 0, Ve && Ve.GetSaleDay())
                  : Ve;
                ue.section_type == "tabs" &&
                  ue.tabs?.some(
                    (Ss) => Ss.unique_id == c?.GetActiveTabUniqueID(),
                  ) &&
                  O.push({ activeTab: c, elements: [] }),
                  (lt = (0, e.jsx)(hs.H, {
                    ...s,
                    section: ue,
                    activeTab: ys,
                    appVisibilityTracker: x,
                    selectedTab: c,
                    setTabUniqueIDQueryParam: _,
                    expanded: Pt,
                    controllerCategory: E,
                    setControllerCategory: P,
                  }));
              }
            te &&
              (lt = (0, e.jsx)(ms, { nSectionID: ue.unique_id, children: lt }));
            const ta = O && O.length && O[O.length - 1];
            let Da = (0, e.jsx)(
              Es,
              {
                section: ue,
                nActiveTabID:
                  ta && ta.activeTab && ta.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: Ie,
                ePreviewMode: l,
                salePageBackgroundDerivedConfig: G,
                backgroundImageEditModel: u,
                bExpanded: Pt,
                children: (0, e.jsx)(ga._, {
                  enabled: !it || Ie > it,
                  children: lt,
                }),
              },
              "SaleSectionIndex_" + ue.unique_id + "_" + Ie,
            );
            const ct = G.mapSectionToGroup.get(ue.unique_id);
            q &&
              q.groupID != ct &&
              (O[O.length - 1].elements.push(
                It(t, q, l, c && c?.GetActiveTabUniqueID()),
              ),
              (q = null)),
              ct
                ? (q ||
                    (q = {
                      groupID: ct,
                      elSaleSections: [],
                      derivedGroupInfo: G.mapGroupToSections.get(ct),
                    }),
                  q.elSaleSections.push(Da))
                : O[O.length - 1].elements.push(Da);
          }),
            q &&
              (O[O.length - 1].elements.push(
                It(t, q, l, c && c?.GetActiveTabUniqueID()),
              ),
              (q = null));
          const Je = O.map((ue, Ie) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, B.A)(
                  J().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ue.elements,
              },
              "TabSection_" + Ie,
            ),
          );
          return (0, e.jsx)(X.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Je,
          });
        }
        const bs = (0, w.y)(js);
        function Cs(s) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: a,
            children: o,
          } = s;
          return t && a != null
            ? (0, e.jsx)(_s, {
                visibility_by_door_index_state: t,
                door_index_visibility: a,
                children: o,
              })
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function _s(s) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: a,
              children: o,
            } = s,
            l = (0, Oe.OM)(a);
          return (t == "hide_when_open_door_index" && l) ||
            (t == "show_when_open_door_index" && !l)
            ? null
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function mn({ children: s, onChange: t }) {
          const a = j.useRef(null);
          return (
            (0, j.useEffect)(() => {
              t(!!j.Children.toArray(s).filter(Boolean).length);
            }, [s, t]),
            s
          );
        }
        function Es(s) {
          const {
              section: t,
              saleSectionIndex: a,
              nActiveTabID: o,
              ePreviewMode: l,
              salePageBackgroundDerivedConfig: c,
              backgroundImageEditModel: u,
              bExpanded: v,
              children: h,
            } = s,
            x = t.section_anchor
              ? t.section_anchor
              : ne.mj + (t.unique_id || a),
            b = t.section_type != "tabs",
            [C, _] = (0, j.useState)(!0);
          return C
            ? (0, e.jsx)(ie.tH, {
                children: (0, e.jsx)(Cs, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: b
                    ? (0, e.jsx)(X.Z, {
                        navKey: x,
                        id: x,
                        className: (0, B.A)({
                          [J().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: v,
                          [t.single_item_style || ""]: !0,
                          [J().SaleSectionBackgroundImageGroupEdit]:
                            l == st.S.EPreviewMode_EditBackground,
                          [J().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          l === st.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  h,
                                  (0, e.jsx)(cs, {
                                    nSectionUniqueID: t.unique_id || a,
                                    nTabID: o,
                                    salePageBackgroundDerivedConfig: c,
                                    backgroundImageEditModel: u,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(mn, { onChange: _, children: h }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          l === st.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: x,
                                className: (0, B.A)({
                                  [J().SaleSectionCtn]: !0,
                                  [J().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [J().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  h,
                                  (0, e.jsx)(gs, {
                                    backgroundImageEditModel: u,
                                    nTabID: o,
                                    imgGroupDerivedMapping: c,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(mn, { onChange: _, children: h }),
                      }),
                }),
              })
            : null;
        }
      },
      4370: (F, Se, r) => {
        "use strict";
        r.d(Se, { A: () => ge, X: () => pe });
        var e = r(7850),
          W = r(17083),
          X = r(24660);
        function he(B) {
          return !!(B.metaKey || B.altKey || B.ctrlKey || B.shiftKey);
        }
        function R(B) {
          const { navigate: i, onClick: Y, ...Q } = B,
            { target: se } = Q,
            ae = (N) => {
              try {
                Y && Y(N);
              } catch (k) {
                throw (N.preventDefault(), k);
              }
              !N.defaultPrevented &&
                N.button === 0 &&
                (!se || se === "_self") &&
                !he(N) &&
                (N.preventDefault(), i());
            };
          return (0, e.jsx)(X.Ii, { ...Q, onClick: ae });
        }
        function ge(B) {
          return (0, e.jsx)(W.k2, { component: R, ...B });
        }
        function pe(B) {
          return (0, e.jsx)(W.N_, { component: R, ...B });
        }
      },
      12932: (F, Se, r) => {
        "use strict";
        r.d(Se, { qx: () => k });
        var e = r(7850),
          W = r(16412),
          X = r(18210),
          he = r(36118),
          R = r(90626),
          ge = r(36707),
          pe = r(95695),
          B = r.n(pe),
          i = r(25792),
          Y = r(64734),
          Q = r.n(Y),
          se = r(65946),
          ae = r(11243);
        function N(le) {
          const {
              title: ve,
              tooltip: j,
              getMinimized: V,
              toggleMinimized: ie,
              className: je,
              children: J,
              elAdditionalButtons: L,
            } = le,
            U = (0, se.q3)(() => V());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, ge.A)(
                  je,
                  Y.SectionTitleHeader,
                  Y.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, ge.A)(
                      pe.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [ve, !!j && (0, e.jsx)(ae.o, { tooltip: j })],
                  }),
                  (0, e.jsxs)("div", {
                    className: Y.SectionTitleButtons,
                    children: [
                      L,
                      (0, e.jsx)(K, { bIsMinimized: U, fnToggleMinimize: ie }),
                    ],
                  }),
                ],
              }),
              !U && (0, e.jsx)(i.tH, { children: J }),
            ],
          });
        }
        function k(le) {
          const [ve, j] = R.useState(!!le.bStartMinimized);
          return (0, e.jsx)(N, {
            ...le,
            getMinimized: () => ve,
            toggleMinimized: () => j(!ve),
            children: le.children,
          });
        }
        function K(le) {
          const { bIsMinimized: ve, fnToggleMinimize: j } = le,
            V = ve ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(W.$n, {
            "data-tooltip-text": (0, X.we)(V),
            onClick: j,
            children: le.bIsMinimized
              ? (0, e.jsx)(he.hz4, {})
              : (0, e.jsx)(he.Xjb, {}),
          });
        }
      },
      27638: (F, Se, r) => {
        "use strict";
        r.d(Se, { Y: () => X });
        var e = r(90626);
        function W(he) {
          const { title: R, bodyClassName: ge, children: pe } = he;
          return (
            React.useEffect(() => {
              const B = document.title;
              return (
                (document.title = R),
                () => {
                  document.title = B;
                }
              );
            }, [R]),
            X(ge),
            pe
          );
        }
        function X(he) {
          e.useEffect(() => {
            if (!he) return;
            const R = [];
            for (const ge of he.split(/ /))
              document.body.classList.contains(ge) || R.push(ge);
            return (
              document.body.classList.add(...R),
              () => document.body.classList.remove(...R)
            );
          }, [he]);
        }
      },
      6479: (F, Se, r) => {
        "use strict";
        r.r(Se), r.d(Se, { SteamChartsRoutes: () => De, default: () => Ja });
        var e = r(7850),
          W = r(58732),
          X = r(80902),
          he = r(99412),
          R = r(72604),
          ge = r(35038),
          pe = r(80613),
          B = r.n(pe),
          i = r(75245),
          Y = r(48156);
        class Q extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Q.prototype.country_code || i.Sg(Q.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    country_code: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    context: { n: 2, c: Y.TS },
                    data_request: { n: 3, c: Y.gn },
                    start_date: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    page_start: {
                      n: 5,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    page_count: {
                      n: 6,
                      d: 20,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(n = !1) {
            return Q.toObject(n, this);
          }
          static toObject(n, d) {
            return i.BT(Q.M(), n, d);
          }
          static fromObject(n) {
            return i.Uq(Q.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (B().BinaryReader)(n),
              g = new Q();
            return Q.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return i.zj(Q.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (B().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            i.i0(Q.M(), n, d);
          }
          serializeBase64String() {
            var n = new (B().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Request";
          }
        }
        class se extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              se.prototype.start_date || i.Sg(se.M()),
              pe.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    start_date: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    ranks: { n: 2, c: ae, r: !0, q: !0 },
                    next_page_start: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = i.w0(se.M())), se.sm_mbf;
          }
          toObject(n = !1) {
            return se.toObject(n, this);
          }
          static toObject(n, d) {
            return i.BT(se.M(), n, d);
          }
          static fromObject(n) {
            return i.Uq(se.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (B().BinaryReader)(n),
              g = new se();
            return se.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return i.zj(se.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (B().BinaryWriter)();
            return se.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            i.i0(se.M(), n, d);
          }
          serializeBase64String() {
            var n = new (B().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response";
          }
        }
        class ae extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              ae.prototype.rank || i.Sg(ae.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    rank: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    appid: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    item: { n: 3, c: Y.vB },
                    last_week_rank: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    consecutive_weeks: {
                      n: 5,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    first_top100: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = i.w0(ae.M())), ae.sm_mbf;
          }
          toObject(n = !1) {
            return ae.toObject(n, this);
          }
          static toObject(n, d) {
            return i.BT(ae.M(), n, d);
          }
          static fromObject(n) {
            return i.Uq(ae.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (B().BinaryReader)(n),
              g = new ae();
            return ae.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return i.zj(ae.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (B().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            i.i0(ae.M(), n, d);
          }
          serializeBase64String() {
            var n = new (B().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank";
          }
        }
        class N extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              N.prototype.language || i.Sg(N.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = i.w0(N.M())), N.sm_mbf;
          }
          toObject(n = !1) {
            return N.toObject(n, this);
          }
          static toObject(n, d) {
            return i.BT(N.M(), n, d);
          }
          static fromObject(n) {
            return i.Uq(N.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (B().BinaryReader)(n),
              g = new N();
            return N.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return i.zj(N.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (B().BinaryWriter)();
            return N.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            i.i0(N.M(), n, d);
          }
          serializeBase64String() {
            var n = new (B().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Request";
          }
        }
        class k extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              k.prototype.countries || i.Sg(k.M()),
              pe.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: { countries: { n: 1, c: K, r: !0, q: !0 } },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(n = !1) {
            return k.toObject(n, this);
          }
          static toObject(n, d) {
            return i.BT(k.M(), n, d);
          }
          static fromObject(n) {
            return i.Uq(k.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (B().BinaryReader)(n),
              g = new k();
            return k.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return i.zj(k.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (B().BinaryWriter)();
            return k.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            i.i0(k.M(), n, d);
          }
          serializeBase64String() {
            var n = new (B().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response";
          }
        }
        class K extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              K.prototype.country_code || i.Sg(K.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    country_code: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(n = !1) {
            return K.toObject(n, this);
          }
          static toObject(n, d) {
            return i.BT(K.M(), n, d);
          }
          static fromObject(n) {
            return i.Uq(K.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (B().BinaryReader)(n),
              g = new K();
            return K.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return i.zj(K.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (B().BinaryWriter)();
            return K.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            i.i0(K.M(), n, d);
          }
          serializeBase64String() {
            var n = new (B().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response_Country";
          }
        }
        var le;
        ((m) => {
          function n(g, p, f) {
            return g.SendMsg(
              "StoreTopSellers.GetWeeklyTopSellers#1",
              (0, ge.I8)(Q, p, f),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetWeeklyTopSellers = n;
          function d(g, p, f) {
            return g.SendMsg(
              "StoreTopSellers.GetCountryList#1",
              (0, ge.I8)(N, p, f),
              k,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCountryList = d;
        })(le || (le = {}));
        var ve = r(84192),
          j = r(71742),
          V = r(3166);
        const ie = 20;
        class je {
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
                  let p;
                  (V.TS.EUNIVERSE == he.Rv || V.TS.EUNIVERSE == he.CII) &&
                    (p = 1539068400),
                    this.LoadCountryList()
                      .then(() =>
                        this.LoadCurrentWeekStart(p, n).then((f) => {
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
              const n = "TopSellersCountryList_" + V.TS.LANGUAGE;
              if (
                ((this.m_rgCountryList = await this.m_Storage.GetObject(n)),
                !this.m_rgCountryList ||
                  this.m_rgCountryList.dtTimeStored +
                    je.k_nCountryListMaxCacheTime <
                    Date.now())
              ) {
                const d = ge.w.Init(N);
                d.Body().set_language(V.TS.LANGUAGE);
                const g = await le.GetCountryList(
                  this.m_WebAPI.GetServiceTransport(),
                  d,
                );
                if (g.GetEResult() == R.R) {
                  let p = g
                    .Body()
                    .countries()
                    .map((f) => f.toObject());
                  p.sort((f, I) => (f.name < I.name ? -1 : 1)),
                    (this.m_rgCountryList = {
                      rgCountryCodes: p,
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
              (0, j.wT)(
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
            let p = ge.w.Init(Q);
            (0, ve.rV)(p),
              (0, ve.Bn)(p, pt),
              g && p.Body().set_country_code(g),
              n && p.Body().set_start_date(n),
              p.Body().set_page_count(ie);
            let f = await le.GetWeeklyTopSellers(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              p,
            );
            if (f.GetEResult() != R.R) throw "error loading top sellers";
            return f.Body().start_date();
          }
        }
        const J = "TopSellers";
        function L(m, n) {
          const { data: d } = (0, X.I)({
            queryKey: [J, "Initialization"],
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
        var U = r(6469),
          ee = r(79809);
        function be(m) {
          let n = 50;
          return (
            m < 2009 ? (n = 5) : m < 2014 ? (n = 10) : m < 2018 && (n = 25), n
          );
        }
        class de {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopMonthlyReleases(n, d) {
            let g = ge.w.Init(ee.GM);
            const p = new Date(n, d, 15);
            g.Body().set_rtime_month(Math.floor(p.getTime() / 1e3)),
              g.Body().set_include_dlc(!0);
            const f = be(n);
            g.Body().set_top_results_limit(f);
            let I = await ee.ZG.GetMonthTopAppReleases(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              g,
            );
            if (I.GetEResult() != R.R) {
              if (I.GetEResult() == R.S7) return { bSQLError: !0 };
              if (I.GetEResult() == R.p) return {};
              throw "error loading top releases";
            }
            return I.Body().toObject();
          }
        }
        const Ce = "useMonthlyTopRelease";
        function ce(m, n, d) {
          const { data: g } = (0, X.I)({
            queryKey: [Ce, n, d],
            queryFn: () => m.LoadTopMonthlyReleases(n, d),
          });
          return g;
        }
        var we = r(72609);
        class Re {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopYearlyReleases(n) {
            let d = ge.w.Init(ee.FN);
            const g = new Date(n, 1, 15);
            d.Body().set_rtime_year(Math.floor(g.getTime() / 1e3)),
              d.Body().set_include_dlc(!0);
            const p =
              (we.iA.is_support, this.m_WebAPI.GetAnonymousServiceTransport());
            let f = await ee.ZG.GetYearTopAppReleases(p, d);
            if (f.GetEResult() != R.R) {
              if (f.GetEResult() == R.S7) return { bSQLError: !0 };
              if (f.GetEResult() == R.p) return {};
              throw "error loading top releases";
            }
            const I = f.Body().toObject();
            return we.iA.is_support && I.top_app_list.length == 0, I;
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
          for (const p of d)
            for (const f of n)
              m.top_app_list.push({ ...p, app_release_rank: f }),
                m.top_app_list.push({ ...p, appid: 730, app_release_rank: f }),
                m.top_app_list.push({ ...p, appid: 540, app_release_rank: f });
          const g = Math.round(new Date().getTime() / 1e3);
          for (const p of n)
            m.top_combined_app_and_dlc_releases.push(
              { appid: 400, app_release_rank: p, rtime_release: g },
              { appid: 440, app_release_rank: p, rtime_release: g },
              { appid: 620, app_release_rank: p, rtime_release: g },
              { appid: 583950, app_release_rank: p, rtime_release: g },
            );
          return m;
        }
        const tt = "useYearlyTopRelease";
        function _t(m, n) {
          const { data: d } = (0, X.I)({
            queryKey: [tt, n],
            queryFn: () => m.LoadTopYearlyReleases(n),
          });
          return d;
        }
        class $e {
          m_DynamicUserStore;
          m_TopSellersStore;
          m_TopMonthlyReleasesStore;
          m_TopYearlyReleasesStore;
          m_WebAPI;
          async Initialize(n, d) {
            (this.m_WebAPI = n),
              (this.m_TopSellersStore = new je(this.m_WebAPI, d)),
              (this.m_TopMonthlyReleasesStore = new de(this.m_WebAPI)),
              (this.m_TopYearlyReleasesStore = new Re(this.m_WebAPI)),
              (this.m_DynamicUserStore = await U.Fm.Get().HintLoad());
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
        const pt = {
          include_basic_info: !0,
          include_assets: !0,
          include_trailers: !0,
          include_release: !0,
          include_reviews: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_tag_count: 20,
        };
        var ft = r(89921),
          Pe = r.n(ft),
          Et = r(74812),
          w = r.n(Et),
          ne = r(90626),
          qe = r(24805),
          Ue = r(7582),
          yt = r(29057),
          Oe = r(10142),
          ze = r(84676),
          We = r(36118),
          St = r(92298),
          At = r.n(St),
          wa = r(19367),
          dt = r.n(wa),
          Ba = r(16346),
          na = r(34360),
          Ft = r(95863),
          sa = r.n(Ft),
          ut = r(71421),
          _e = r(36707),
          $ = r(18210),
          ra = r(92264);
        function oa(m) {
          const { toolTipContent: n } = m,
            d = ia({ ...m });
          return (0, e.jsx)(ut.Gq, {
            toolTipContent: n,
            children: (0, e.jsx)("div", {
              className: (0, _e.A)(sa().CalendarBtn),
              onClick: (g) =>
                d(g, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
              children: (0, e.jsx)(We.VvS, { color: "#c6d4df" }),
            }),
          });
        }
        function ia(m) {
          return (0, ne.useCallback)(
            (d, g) => {
              const p = (0, e.jsx)(re, { ...m });
              (0, Ba.lX)(p, d, g);
            },
            [m],
          );
        }
        function re(m) {
          const { value: n, fnOnUpdate: d, minDate: g, maxDate: p } = m,
            f = (0, ne.useRef)(void 0),
            I = (0, ne.useRef)(null),
            y = (0, ne.useCallback)(
              (D) => {
                const z = dt().unix(g),
                  xe = dt().unix(p);
                return (
                  D.isSameOrAfter(z, "month") && D.isSameOrBefore(xe, "month")
                );
              },
              [g, p],
            ),
            S = (0, ne.useCallback)(
              (D) => {
                d(D.unix()), f.current.Hide();
              },
              [d],
            ),
            Z = (0, ne.useMemo)(() => {
              if (!dt().locales().includes("YearMonthPickerContextMenu")) {
                const D = Array.from({ length: 12 }, (xe, fe) =>
                    (0, $.Gj)(new Date(2020, fe, 1)),
                  ),
                  z = Array.from({ length: 12 }, (xe, fe) =>
                    (0, ra.oL)(new Date(2020, fe, 1)),
                  );
                dt().defineLocale("YearMonthPickerContextMenu", {
                  months: D,
                  monthsShort: z,
                });
              }
              return dt()().clone().locale("YearMonthPickerContextMenu");
            }, []);
          return (0, e.jsx)(na.tz, {
            refInstance: f,
            children: (0, e.jsx)(na.kt, {
              onSelected: () => {},
              className: sa().PickerContainer,
              children: (0, e.jsx)("div", {
                onClick: (D) => {
                  D.preventDefault(), D.stopPropagation();
                },
                children: (0, e.jsx)(At(), {
                  ref: I,
                  value: Z,
                  onChange: S,
                  dateFormat: "YYYY-MM",
                  timeFormat: !1,
                  closeOnSelect: !0,
                  isValidDate: y,
                  input: !1,
                  locale: "YearMonthPickerContextMenu",
                }),
              }),
            }),
          });
        }
        var Dt = r(31032),
          Ht = r(47515),
          Nt = r(85599),
          at = r(41672),
          Ma = r(27221),
          Fe = r.n(Ma);
        const vt = 25;
        function nt(m) {
          const {
              rgAppIDs: n,
              children: d,
              nMonth: g,
              bTallCapsule: p,
              bBlurCapsules: f,
            } = m,
            I = (0, ne.useMemo)(() => {
              let y = 0,
                S = [...n];
              for (; S.length < 25; ) S.push(n[y % n.length]), y++;
              return S.map((Z) => Oe.A.Get().GetApp(Z)).filter(Boolean);
            }, [n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, _e.A)({
                  [Fe().ImagesCtn]: !0,
                  [Fe().TallCapsules]: p,
                  [Fe().BlurCapsules]: f,
                  [Fe().AnnualChart]: !g,
                }),
                children: (0, e.jsx)("div", {
                  className: Fe().AllImagesCtn,
                  children: (0, e.jsx)("div", {
                    className: Fe().AllImages,
                    children: (0, e.jsx)("div", {
                      className: (0, _e.A)({
                        [Fe().ImageTint]: !0,
                        [`Month${g}`]: !0,
                        [Fe().Wide2]: I.length <= 10,
                        [Fe().Wide3]: I.length <= 20,
                      }),
                      children: I.map((y, S) =>
                        p
                          ? (0, e.jsx)(
                              "img",
                              { src: y.GetAssets().GetHeroCapsuleURL() },
                              "bg_" + y.GetAppID() + "+" + S,
                            )
                          : (0, e.jsx)(
                              "img",
                              { src: y.GetAssets().GetHeaderURL() },
                              "bg_" + y.GetAppID() + "+" + S,
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
        function Wt(m) {
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
            p = new Intl.DateTimeFormat("en-US", g).format(d),
            f = new Date(
              d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            ),
            I = f.getMonth(),
            y = f.getFullYear(),
            S = f.getDate(),
            Z = f.getHours();
          let D, z;
          for (
            S > 15 || (S === 15 && Z >= 10) ? (D = I - 1) : (D = I - 2);
            D < 0;
          )
            (D += 12), (z = (z ?? y) - 1);
          z = z ?? y;
          const xe = new Date(Date.UTC(z, D, 15, 17, 0));
          return Math.floor(xe.getTime() / 1e3);
        }
        function kt(m) {
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
          let I = f,
            y = g;
          return (
            f == 11 ? ((I = 0), (y += 1)) : (I += 1),
            { dtMidMonth: new Date(g, f, 15), dtTestMonth: new Date(y, I, 15) }
          );
        }
        function xt(m, n) {
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
        var Be = r(21042),
          la = r(56330),
          ye = r(14069),
          wt = r(98609),
          gt = r(41635),
          st = r(87853),
          It = r.n(st);
        function ca(m) {
          let n = It().PlatinumSection;
          switch (m) {
            case ee.s4.NH:
              n = It().GoldSection;
              break;
            case ee.s4.U1:
              n = It().SilverSection;
              break;
            case ee.s4.DB:
              n = It().BronzeSection;
              break;
          }
          return n;
        }
        function da(m, n, d, g, p, f, I, y) {
          n?.length > 25 &&
            m.jsondata.sale_sections.push({
              ...(0, Be.Sm)("items", "#Sale_default_label_148"),
              capsules: n.map((S) => ({
                id: S,
                type: g.has(S) ? "dlc" : "game",
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
              prefer_assets_without_overrides: p,
              show_deck_compability_details: !!I,
              show_as_demos: !!y,
              prefer_demo_store_page: !!y,
            });
        }
        function Gt(m, n, d, g, p, f, I, y) {
          if (wt.iA.logged_in) {
            const S = U.Fm.Get(),
              Z = n.filter((z) => S.BIsGameWishlisted(z));
            Z?.length > 0 &&
              m.jsondata.sale_sections.push({
                ...(0, Be.Sm)("items", "#Sale_OnWishlist"),
                capsules: Z.map((z) => ({
                  id: z,
                  type: g.has(z) ? "dlc" : "game",
                })),
                capsules_per_row_array: Z.length < 3 ? [2] : [5],
                carousel_rows: 1,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array: Z.length < 3 ? ["grid"] : ["tall"],
                random_from_entire_set: !0,
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: p,
                show_deck_compability_details: !!I,
                show_as_demos: !!y,
                prefer_demo_store_page: !!y,
              });
            const D = n.filter(
              (z) => S.BIsGameRecommended(z) && !S.BIsGameIgnored(z),
            );
            if (D?.length > 0) {
              const z = D.length;
              m.jsondata.sale_sections.push({
                ...(0, Be.Sm)("items", "#Sale_default_label_RecommendedForYou"),
                capsules: D.map((xe) => ({
                  id: xe,
                  type: g.has(xe) ? "dlc" : "game",
                })),
                capsules_per_row_array: z == 2 ? [2] : [3, 2],
                carousel_rows: 2,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array:
                  z == 2 ? ["grid"] : ["tall", "grid"],
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: p,
                show_deck_compability_details: !!I,
                show_as_demos: !!y,
                prefer_demo_store_page: !!y,
              });
            }
            if (!y) {
              const z = d.filter((xe) => {
                if (!S.BIsGameOwned(xe)) {
                  const fe = Oe.A.Get().GetApp(xe);
                  return S.BIsGameOwned(fe.GetParentAppID());
                }
                return !1;
              });
              z.length > 0 &&
                m.jsondata.sale_sections.push({
                  ...(0, Be.Sm)("dlc_for_you", "#Sale_default_label_246"),
                  capsules: z.map((xe) => ({ id: xe, type: "dlc" })),
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
                  prefer_assets_without_overrides: p,
                });
            }
          }
        }
        function La(m, n) {
          const d = U.Fm.Get(),
            g = [],
            p = [],
            f = [],
            I = [],
            y = [];
          for (const S of m)
            d.BIsGameIgnored(S) ||
              (d.BIsGameRecommended(S)
                ? g.push(S)
                : d.BIsGameWishlisted(S)
                  ? p.push(S)
                  : n[1]?.includes(S)
                    ? f.push(S)
                    : n[2]?.includes(S)
                      ? I.push(S)
                      : y.push(S));
          return [
            ...(0, gt.fW)(g),
            ...(0, gt.fW)(p),
            ...(0, gt.fW)(f),
            ...(0, gt.fW)(I),
            ...(0, gt.fW)(y),
          ];
        }
        function Yt(m, n, d, g, p, f, I, y) {
          m.jsondata.sale_sections.push({
            ...(0, Be.Sm)("trailercarousel", ""),
            capsules: La(n, d).map((S) => ({
              id: S,
              type: g.has(S) ? "dlc" : "game",
            })),
            use_random_order: !1,
            disable_background: !0,
            trailer_carousel_auto_advance_msec: 1e4,
            show_on_tabs: f ? [f] : void 0,
            prefer_assets_without_overrides: p,
            show_deck_compability_details: !!I,
            show_as_demos: !!y,
            prefer_demo_store_page: !!y,
          });
        }
        var jt = r(50974);
        function Ta(m, n, d, g, p) {
          const f = (0, Be.U)(jt.wv, he.DRF, m, (0, Ue.sB)()),
            I = !1,
            y = [...p, ...d],
            S = new Set(p);
          if (
            ((f.jsondata.sale_sections = []),
            d.length > 9 && Yt(f, d, g, S, I),
            d?.length > 25)
          )
            for (let Z in g) {
              const D = g[Z];
              f.jsondata.sale_sections.push({
                ...(0, Be.Sm)("items", "#SteamCharts_Monthly_Rank_" + Z),
                capsules: D.map((z) => ({
                  id: z,
                  type: S.has(z) ? "dlc" : "game",
                })),
                capsules_per_row_array: [4],
                capsule_style_per_row_array: Z == "1" ? ["tall"] : ["grid"],
                show_as_carousel: !1,
                use_random_order: !0,
                border_width: 1,
                default_subtitle:
                  "#SteamCharts_Monthly_Rank_" + Z + "_subtitle",
                sale_section_classname: ca(Number.parseInt(Z)),
                prefer_assets_without_overrides: I,
              });
            }
          else {
            const Z = Object.values(d).flat();
            f.jsondata.sale_sections.push({
              ...(0, Be.Sm)("items", "#SteamCharts_Monthly_Rank_All"),
              capsules: Z.map((D) => ({
                id: D,
                type: S.has(D) ? "dlc" : "game",
              })),
              capsules_per_row_array:
                d?.length > 9 ? (d?.length > 15 ? [3] : [2]) : [1],
              single_item_style: d?.length < 9 ? "library" : "bordered",
              show_as_carousel: !1,
              use_random_order: !0,
              sale_section_classname: It().AllTiers,
              prefer_assets_without_overrides: I,
            });
          }
          return (
            Gt(f, y, p, S, I),
            da(f, d, n, S, I),
            f.jsondata.sale_sections.push({
              ...(0, Be.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Be.r3)(),
            }),
            f
          );
        }
        function Pa(m, n, d, g, p) {
          const { data: f } = (0, X.I)({
            queryKey: ["useMonthEventModel", m],
            queryFn: () => {
              try {
                return Ta(m, n, d, g, p);
              } catch (I) {
                return (
                  console.error(`Montly new release: ${m} failed: `, I), null
                );
              }
            },
          });
          return f;
        }
        function Bt(m) {
          const {
              rgFilteredDLCsAppIDs: n,
              rgFilteredCombinedAppsAndDLC: d,
              promotionName: g,
              rgFilteredAppIDByTier: p,
              facets: f,
            } = m,
            I = Pa(g, f, d, p, n),
            y = (0, he.sfN)(wt.TS.LANGUAGE);
          return I
            ? (0, e.jsx)(ye._, {
                eventModel: I,
                language: y,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : I === null
              ? (0, e.jsx)("div", {
                  className: la.ErrorStylesWithIcon,
                  children: (0, $.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Nt.t, {
                  string: (0, $.we)("#Loading"),
                  position: "center",
                });
        }
        function ua(m, n, d, g) {
          (0, ne.useEffect)(() => {
            if (m == null && g != ze.Sq && d) {
              const p = ga(d);
              p?.length > 0
                ? Oe.A.Get()
                    .HintLoadStoreApps(p, qe.Xh)
                    .then(() => n(p))
                : n([]);
            }
          }, [g, d, m, n]);
        }
        function ga(m) {
          const n = U.Fm.Get(),
            d = m
              .filter((g) => {
                if (!n.BIsGameOwned(g)) {
                  const p = Oe.A.Get().GetApp(g);
                  return (
                    p && p.BIsVisible() && n.BIsGameOwned(p.GetParentAppID())
                  );
                }
                return !1;
              })
              .map((g) => Oe.A.Get().GetApp(g).GetParentAppID())
              .filter(Boolean);
          return Array.from(new Set(d));
        }
        var oe = r(19298),
          Me = r(92757);
        const Na = ["topnewreleases", "bestofyear"];
        function Ot(m) {
          return m.split(/[?#]/)[0];
        }
        function Rt(m) {
          const n = Ot(m);
          return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
        }
        function Vt(m) {
          if (!m) return !1;
          const n = W.B.SteamCharts(),
            d = Ot(m);
          if (Rt(d) == Rt(n)) return !0;
          if (!d.startsWith(n)) return !1;
          const g = d.slice(n.length).split("/")[0];
          return !Na.includes(g);
        }
        function Kt() {
          const m = (0, Me.W6)();
          return ne.useCallback(
            (n, d) => {
              if (Vt(n)) {
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
        var ma = r(24660),
          mt = r(4370);
        function ka(m, n) {
          const d = Rt(window.location.pathname),
            g = Rt(m);
          return n ? d == g : d == g || d.startsWith(g + "/");
        }
        function et(m) {
          const {
              to: n,
              exact: d,
              activeClassName: g,
              className: p,
              children: f,
              ...I
            } = m,
            y = typeof n == "string" ? n : void 0;
          return Vt(y)
            ? (0, e.jsx)(ma.Ii, {
                href: y,
                className: (0, _e.A)(p, ka(y, !!d) ? g : void 0),
                ...I,
                children: f,
              })
            : (0, e.jsx)(mt.A, {
                to: n,
                exact: d,
                activeClassName: g,
                className: p,
                ...I,
                children: f,
              });
        }
        function Mt(m) {
          const { to: n, children: d, ...g } = m,
            p = typeof n == "string" ? n : void 0;
          return Vt(p)
            ? (0, e.jsx)(ma.Ii, { href: p, ...g, children: d })
            : (0, e.jsx)(mt.X, { to: n, ...g, children: d });
        }
        function Ga(m) {
          const { salePageName: n, TopMonthlyReleasesStore: d } = m,
            g = (0, Ue.f1)(),
            { dtMidMonth: p, dtTestMonth: f } = kt(n);
          return !p ||
            Math.floor(f.getTime() / 1e3) > g ||
            p.getFullYear() < Ke ||
            (p.getFullYear() == Ke && p.getMonth() < ha)
            ? (0, e.jsx)("div", {
                children: (0, $.we)(
                  "#DateTimePicker_Fallback_Invalid_DateTime",
                ),
              })
            : (0, e.jsx)(Ua, {
                TopMonthlyReleasesStore: d,
                nMonth: p.getMonth(),
                nYear: p.getFullYear(),
                promotionName: n,
              });
        }
        const Oa = { ...qe.Xh, apply_user_filters: !0 };
        function Ra(m, n, d, g) {
          const p = ce(m, n, d),
            f = (0, ne.useMemo)(
              () =>
                p
                  ? Array.from(
                      new Set([
                        ...(p.top_dlc_releases?.map((D) => D.appid) || []),
                        ...(p.top_combined_app_and_dlc_releases?.map(
                          (D) => D.appid,
                        ) || []),
                      ]),
                    )
                  : (g && g(null), []),
              [p, g],
            ),
            I = (0, ze.zX)(f, Oa),
            y = (0, ne.useMemo)(
              () =>
                !p || I == ze.Sq
                  ? []
                  : p.top_dlc_releases
                      ?.filter((D) => !Oe.A.Get().BIsAppMissing(D.appid))
                      .map((D) => D.appid),
              [p, I],
            ),
            { rgFilteredCombinedAppsAndDLC: S, rgFilteredAppIDByTier: Z } = (0,
            ne.useMemo)(() => {
              if (!p || I == ze.Sq)
                return {
                  rgFilteredCombinedAppsAndDLC: [],
                  rgFilteredAppIDByTier: [],
                };
              const D = p?.top_combined_app_and_dlc_releases || [],
                z = [];
              return {
                rgFilteredCombinedAppsAndDLC: D.filter(
                  (fe) => !Oe.A.Get().BIsAppMissing(fe.appid),
                ).map((fe) => {
                  const me = fe.app_release_rank;
                  return z[me] || (z[me] = []), z[me].push(fe.appid), fe.appid;
                }),
                rgFilteredAppIDByTier: z,
              };
            }, [I, p]);
          return {
            rgAppIDs: f,
            rgMonthlyReleases: p,
            rgFilteredAppIDByTier: Z,
            rgFilteredCombinedAppsAndDLC: S,
            rgFilteredDLCsAppIDs: y,
            loadState: I,
          };
        }
        function Ua(m) {
          const {
              TopMonthlyReleasesStore: n,
              nYear: d,
              nMonth: g,
              promotionName: p,
            } = m,
            [f, I] = (0, ne.useState)(null),
            [y, S] = (0, ne.useState)(null),
            {
              rgAppIDs: Z,
              rgMonthlyReleases: D,
              rgFilteredAppIDByTier: z,
              rgFilteredCombinedAppsAndDLC: xe,
              rgFilteredDLCsAppIDs: fe,
              loadState: me,
            } = Ra(n, d, g);
          return (
            (0, ne.useEffect)(() => {
              f ||
                (0, yt.$R)({ bForceFeatureTagForFullController: !1 }).then(I);
            }, [f]),
            ua(y, S, fe, me),
            !D || me == ze.Sq || !f || y == null || !Z
              ? (0, e.jsxs)(oe.Z, {
                  className: Pe().ChartPage,
                  children: [
                    (0, e.jsx)(Ze, { nMonth: g, nYear: d }),
                    (0, e.jsx)(Nt.t, {
                      string: (0, $.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : Z.length == 0
                ? (0, e.jsxs)(oe.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(Ze, { nMonth: g, nYear: d }),
                      (0, e.jsx)("div", {
                        className: Pe().NoticeBox,
                        children: (0, $.we)(
                          D.bSQLError
                            ? "#Error_ErrorCommunicatingWithNetwork"
                            : "#SteamCharts_NewMonth_NoRelease",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(oe.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(nt, {
                        rgAppIDs: xe,
                        nMonth: g,
                        bBlurCapsules: !0,
                        children: (0, e.jsx)(Ze, { nMonth: g, nYear: d }),
                      }),
                      (0, e.jsx)(Bt, {
                        promotionName: p,
                        rgFilteredCombinedAppsAndDLC: xe,
                        rgFilteredAppIDByTier: z,
                        rgFilteredDLCsAppIDs: fe,
                        facets: f,
                      }),
                    ],
                  })
          );
        }
        function Zt(m, n) {
          return (0, $.we)(
            "#SteamCharts_Monthly_Title_wMonthAndYear",
            (0, $.we)("#Sale_Reservation_MonthNoun_" + (m + 1)),
            n,
          );
        }
        const Ke = 2003,
          ha = 8,
          pa = 1063584e3;
        function Ze(m) {
          const { nMonth: n, nYear: d } = m,
            g = Kt(),
            p = (0, Dt.yk)() || (0, Ht.tx)(window),
            f = (0, Ue.f1)(),
            I = n > 0 ? d : d - 1,
            y = n > 0 ? n - 1 : 11,
            S = xt(I, y),
            Z = d > Ke || n > ha,
            D = n < 11 ? d : d + 1,
            z = n < 11 ? n + 1 : 0,
            xe = xt(D, z),
            fe = new Date(z == 11 ? d + 1 : d, z == 11 ? 0 : z + 1, 15),
            me = Math.floor(fe.getTime() / 1e3) < f,
            Te = (0, ne.useCallback)(
              (Xe) => {
                p.active_modal ||
                  (Xe && me
                    ? g(De.TopNewReleases(xe))
                    : !Xe && Z && g(De.TopNewReleases(S)));
              },
              [p.active_modal, me, Z, g, xe, S],
            );
          return (
            (0, at.E)("ArrowLeft", () => Te(!1), !0, !0),
            (0, at.E)("Left", () => Te(!1), !0, !0),
            (0, at.E)("ArrowRight", () => Te(!0), !0, !0),
            (0, at.E)("Right", () => Te(!0), !0, !0),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, _e.A)(w().HeaderCtn, w().WithSubtitle),
                  children: (0, e.jsx)("h1", { children: Zt(n, d) }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, _e.A)(w().PageSubtitle),
                  children: [
                    (0, $.we)("#SteamCharts_Monthly_SubTitle", be(d)),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("span", {
                      children: (0, $.we)(
                        "#SteamCharts_Monthly_PublishSchedule",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)(oe.Z, {
                  className: (0, _e.A)(w().ChartRangeCtn),
                  children: [
                    (0, e.jsx)(ut.Gq, {
                      toolTipContent: Zt(y, I),
                      children: (0, e.jsx)("div", {
                        className: (0, _e.A)({
                          [w().ChartNavCtn]: !0,
                          [w().Disabled]: !Z,
                        }),
                        children: Z
                          ? (0, e.jsx)(Mt, {
                              to: Z ? De.TopNewReleases(S) : void 0,
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
                    (0, e.jsx)(ut.Gq, {
                      toolTipContent: Zt(z, D),
                      children: (0, e.jsx)("div", {
                        className: (0, _e.A)({
                          [w().ChartNavCtn]: !0,
                          [w().Disabled]: !me,
                        }),
                        children: me
                          ? (0, e.jsx)(Mt, {
                              to: De.TopNewReleases(xe),
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
                    (0, e.jsx)(oa, {
                      toolTipContent: (0, $.we)(
                        "#SteamCharts_Monthly_Calendar",
                      ),
                      minDate: pa,
                      maxDate: Wt(f),
                      value: Math.floor(
                        new Date(d, n, 15, 12, 0, 0).getTime() / 1e3,
                      ),
                      fnOnUpdate: (Xe) => {
                        const _a = new Date(Xe * 1e3),
                          Ea = xt(_a.getFullYear(), _a.getMonth());
                        g(De.TopNewReleases(Ea));
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function fa(m) {
          if (!m) return "";
          const n = new Date(m * 1e3);
          return `${n.getUTCFullYear()}-${n.getUTCMonth() + 1}-${n.getUTCDate()}`;
        }
        function Ye(m) {
          return m || "global";
        }
        var rt = r(25792),
          za = r(27638),
          Fa = r(77187),
          Ut = r(65946);
        const ot = 2,
          Ha = 60,
          va = 2022;
        function xa(m, n) {
          const d = new Date(m * 1e3),
            g = "America/Los_Angeles",
            p = Number(
              new Intl.DateTimeFormat("en-US", {
                timeZone: g,
                year: "numeric",
              }).format(d),
            ),
            I =
              new Date(
                new Intl.DateTimeFormat("en-US", {
                  timeZone: g,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                  .formatToParts(new Date(Date.UTC(p, 11, 31)))
                  .reduce((y, S) => ((y[S.type] = S.value), y), {}).year +
                  "-12-31T10:00:00",
              ).getTime() -
              n * 24 * 60 * 60 * 1e3;
          return d.getTime() >= I;
        }
        function Lt(m, n, d) {
          const g = n * 1e3,
            f = new Date(g).getUTCFullYear();
          return (
            m >= va &&
            m < f + 1 &&
            (m != f || (d && wt.iA.is_support && xa(n, Ha)) || xa(n, ot))
          );
        }
        function Wa(m, n) {
          const d = new Date().getUTCFullYear(),
            g = [];
          for (let p = d, f = 0; p >= va && f < n; p--, f++)
            Lt(p, m, !1) ? g.push(p) : f--;
          return g;
        }
        var Ne = r(22275);
        function bt(m) {
          const {
            TopSellersStore: n,
            TopMonthlyReleasesStore: d,
            DynamicUserStore: g,
            children: p,
          } = m;
          (0, za.Y)(w().SteamChartsPage);
          const f = zt(g);
          let I = ne.useMemo(() => ({ content_descriptors_excluded: f }), [f]);
          const y = ne.useRef(null);
          return (
            ne.useEffect(() => {
              y.current && y.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsxs)(oe.Z, {
              className: w().SteamChartsRootPanel,
              navRef: y,
              children: [
                (0, e.jsx)("div", {
                  className: w().SteamChartsRootPosition,
                  children: (0, e.jsx)("div", {
                    className: w().AlignWithMenu,
                    children: (0, e.jsxs)(oe.Z, {
                      className: w().SteamChartsMenu,
                      children: [
                        (0, e.jsx)(oe.Z, {
                          className: w().MenuGroup,
                          children: (0, e.jsx)("div", {
                            className: w().MenuLinks,
                            children: (0, e.jsxs)(et, {
                              to: De.Overview(),
                              exact: !0,
                              activeClassName: w().ActiveLink,
                              children: [
                                (0, e.jsx)("span", {
                                  className: (0, _e.A)(w().MenuItemIcon),
                                  children: (0, e.jsx)(We.ww0, {}),
                                }),
                                (0, $.we)("#SteamCharts_Menu_Overview"),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)(rt.tH, { children: (0, e.jsx)(Ia, {}) }),
                        (0, e.jsx)(rt.tH, {
                          children: (0, e.jsx)(Qt, { TopSellersStore: n }),
                        }),
                        (0, e.jsx)(rt.tH, {
                          children: (0, e.jsx)(Xt, {
                            TopMonthlyReleasesStore: d,
                          }),
                        }),
                        (0, e.jsx)(rt.tH, { children: (0, e.jsx)(Ya, {}) }),
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
                    children: (0, e.jsx)(Fa.E2, {
                      defaultOptions: I,
                      children: (0, e.jsx)(rt.tH, { children: p }),
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function zt(m) {
          return (0, Ut.q3)(() => m.ExcludedContentDescriptor);
        }
        function Ia() {
          return (0, e.jsxs)(oe.Z, {
            className: w().MenuGroup,
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, $.we)("#SteamCharts_Menu_LiveCharts"),
              }),
              (0, e.jsxs)(oe.Z, {
                className: w().MenuLinks,
                children: [
                  (0, e.jsxs)(et, {
                    className: w().MenuItemIcon,
                    to: De.TopSelling(V.TS.COUNTRY),
                    activeClassName: w().ActiveLink,
                    children: [
                      (0, e.jsx)(We.t1X, {}),
                      (0, $.we)("#SteamCharts_Menu_TopSelling"),
                    ],
                  }),
                  (0, e.jsxs)(et, {
                    className: w().MenuItemIcon,
                    to: De.MostPlayed(),
                    activeClassName: w().ActiveLink,
                    children: [
                      (0, e.jsx)(We.N3h, {}),
                      (0, $.we)("#SteamCharts_Menu_MostPlayed"),
                    ],
                  }),
                  (0, e.jsxs)(et, {
                    className: w().MenuItemIcon,
                    to: De.MostPlayedOnSteamDeck(),
                    activeClassName: w().ActiveLink,
                    children: [
                      (0, e.jsx)(We.lRD, {}),
                      (0, $.we)("#SteamCharts_Menu_MostPlayedOnDeck"),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Qt(m) {
          const { TopSellersStore: n } = m,
            { rtCurrentWeek: d, bCountryListInitialized: g } = L(
              n,
              V.TS.COUNTRY,
            );
          if (!d || !g) return null;
          const p = Ye(
            n.BIsValidTopSellersCountry(V.TS.COUNTRY) ? V.TS.COUNTRY : "",
          );
          let f = [];
          for (let I = 0; I < 3; I++) {
            const y = d - I * 60 * 60 * 24 * 7;
            f.push(
              (0, e.jsxs)(
                et,
                {
                  to: De.TopSellers(p, fa(y)),
                  activeClassName: w().ActiveLink,
                  fnCanTakeFocus: Ne.Nw,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, _e.A)(w().MenuItemIcon),
                      children: (0, e.jsx)(We.VvS, { color: "#C3D3D8" }),
                    }),
                    (0, $.$z)(y, { timeZone: "UTC" }),
                  ],
                },
                y,
              ),
            );
          }
          return (0, e.jsxs)(oe.Z, {
            className: (0, _e.A)(w().MenuGroup, w().Weekly),
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, $.we)("#SteamCharts_Menu_WeeklyCharts"),
              }),
              (0, e.jsx)(oe.Z, { className: w().MenuLinks, children: f }),
            ],
          });
        }
        function Xt(m) {
          const n = (0, Ue.f1)(),
            d = Wt(n),
            g = [d, d - 720 * 60 * 60, d - 1440 * 60 * 60];
          return (0, e.jsxs)(oe.Z, {
            className: (0, _e.A)(w().MenuGroup, w().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, $.we)("#SteamCharts_Menu_MonthlyCharts"),
              }),
              (0, e.jsx)(oe.Z, {
                className: w().MenuLinks,
                children: g.map((p) => {
                  const f = new Date(p * 1e3),
                    I = xt(f.getFullYear(), f.getMonth()),
                    y = De.TopNewReleases(I),
                    S = window.location.pathname === y;
                  return (0, e.jsxs)(
                    et,
                    {
                      className: S ? w().ActiveLink : "",
                      to: y,
                      fnCanTakeFocus: Ne.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, _e.A)(w().MenuItemIcon),
                          children: (0, e.jsx)(We.VvS, { color: "#C3D3D8" }),
                        }),
                        (0, ra.CC)(p),
                      ],
                    },
                    "month_" + p,
                  );
                }),
              }),
            ],
          });
        }
        function Ya(m) {
          const n = (0, Ue.f1)(),
            d = (0, ne.useMemo)(() => Wa(n, 3), [n]);
          return (0, e.jsxs)(oe.Z, {
            className: (0, _e.A)(w().MenuGroup, w().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: w().MenuHeader,
                children: (0, $.we)("#SteamCharts_Menu_YearlyCharts"),
              }),
              (0, e.jsx)(oe.Z, {
                className: w().MenuLinks,
                children: d.map((g) => {
                  const p = De.BestOfYear("" + g),
                    f = window.location.pathname === p;
                  return (0, e.jsxs)(
                    Mt,
                    {
                      className: (0, _e.A)(f ? w().ActiveLink : ""),
                      to: p,
                      fnCanTakeFocus: Ne.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, _e.A)(w().MenuItemIcon),
                          children: (0, e.jsx)(We.VvS, { color: "#C3D3D8" }),
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
        var ja = r(68312),
          ht = r(51079),
          Va = r(179);
        function Ka(m, n, d) {
          const g = (0, Be.U)(jt.yT, he.DRF, "" + m, (0, Ue.sB)()),
            p = !0,
            f = { ...(0, Be.Sm)("tabs", ""), tabs: [] };
          return (
            d.forEach((I, y) => {
              f.tabs.push({
                unique_id: y + 1,
                default_label: I.strTabTitleToken,
                localized_label: [],
                capsules: [],
              });
            }),
            (g.jsondata.sale_sections = [f]),
            d.forEach((I, y) => {
              const {
                  rgFilteredCombinedAppsAndDLC: S,
                  rgFilteredAppIDByTier: Z,
                  rgFilteredDLCsAppIDs: D,
                } = I,
                z = new Set(D),
                xe = [...D, ...S];
              g.jsondata.sale_sections.push({
                ...(0, Be.Sm)("text_section", ""),
                text_section_contents: [
                  (0, $.we)(I.strTabSubTitleToken, m, m + 1),
                ],
                show_on_tabs: [y + 1],
                show_deck_compability_details: !!I.bShowDeckCompat,
                prefer_assets_without_overrides: p,
              });
              for (let fe in Z) {
                const me = Z[fe];
                g.jsondata.sale_sections.push({
                  ...(0, Be.Sm)("items", "#SteamCharts_Yearly_Rank_" + fe),
                  capsules: me.map((Te) => ({
                    id: Te,
                    type: z.has(Te) ? "dlc" : "game",
                  })),
                  capsules_per_row_array:
                    fe == "3" ? [4] : fe == "0" ? [4] : [3],
                  capsule_style_per_row_array: fe == "0" ? ["tall"] : ["grid"],
                  show_as_carousel: !1,
                  use_random_order: !0,
                  border_width: 1,
                  default_subtitle:
                    "#SteamCharts_Yearly_Rank_" + fe + "_subtitle",
                  show_on_tabs: [f.tabs[y].unique_id],
                  sale_section_classname: ca(Number.parseInt(fe)),
                  prefer_assets_without_overrides: p,
                  show_deck_compability_details: !!I.bShowDeckCompat,
                  show_as_demos: !!I.bShowDemoInfo,
                  prefer_demo_store_page: !!I.bShowDemoInfo,
                });
              }
              Gt(
                g,
                xe,
                D,
                z,
                p,
                f.tabs[y].unique_id,
                !!I.bShowDeckCompat,
                !!I.bShowDemoInfo,
              ),
                Yt(
                  g,
                  S,
                  Z,
                  z,
                  p,
                  f.tabs[y].unique_id,
                  !!I.bShowDeckCompat,
                  !!I.bShowDemoInfo,
                ),
                da(
                  g,
                  S,
                  n,
                  z,
                  p,
                  f.tabs[y].unique_id,
                  !!I.bShowDeckCompat,
                  !!I.bShowDemoInfo,
                );
            }),
            g.jsondata.sale_sections.push({
              ...(0, Be.Sm)("text_section", ""),
              text_section_contents: [
                (0, $.we)("#SteamCharts_Yearly_FAQ") +
                  `
[url=${wt.TS.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${(0, $.we)("#SteamCharts_Yearly_FAQ_link")}[/url]`,
              ],
            }),
            g.jsondata.sale_sections.push({
              ...(0, Be.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Be.r3)(),
            }),
            g
          );
        }
        function an(m, n, d) {
          const { data: g } = (0, X.I)({
            queryKey: ["useYearEventModel", m],
            queryFn: () => {
              try {
                return Ka(m, n, d);
              } catch (p) {
                return (
                  console.error(`Yearly new release: ${m} failed: `, p), null
                );
              }
            },
          });
          return g;
        }
        function ba(m) {
          const { rgTabsData: n, nYear: d, facets: g } = m,
            p = an(d, g, n),
            f = (0, he.sfN)(wt.TS.LANGUAGE);
          return p
            ? (0, e.jsx)(ye._, {
                eventModel: p,
                language: f,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : p === null
              ? (0, e.jsx)("div", {
                  className: la.ErrorStylesWithIcon,
                  children: (0, $.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Nt.t, {
                  string: (0, $.we)("#Loading"),
                  position: "center",
                });
        }
        function nn(m) {
          const { salePageName: n, TopYearlyReleasesStore: d } = m,
            g = (0, Ue.f1)(),
            p = Number.parseInt(n),
            f = Kt();
          return Lt(p, g, !0)
            ? (0, e.jsx)(Qa, { nYear: p, TopYearlyReleasesStore: d })
            : (f(De.Overview(), { bReplace: !0 }),
              (0, e.jsx)("div", {
                children: (0, $.we)("#SteamCharts_Yearly_Unavailable"),
              }));
        }
        const Za = {
          ...qe.Xh,
          apply_user_filters: !0,
          include_assets_without_overrides: !0,
        };
        function Qe(m, n, d, g) {
          const p = g?.filter((S) => S.type == m),
            f = [],
            I = [],
            y = p
              ?.filter((S) => !Oe.A.Get().BIsAppMissing(S.appid))
              .map((S) => {
                let Z = S.app_release_rank;
                return (
                  Z == ee.s4.xE && (Z = 0),
                  f[Z] || (f[Z] = []),
                  f[Z].push(S.appid),
                  Oe.A.Get().GetApp(S.appid)?.GetAppType() == Y.uE._i &&
                    I.push(S.appid),
                  S.appid
                );
              });
          return {
            strTabTitleToken: n,
            strTabSubTitleToken: d,
            rgFilteredCombinedAppsAndDLC: y,
            rgFilteredAppIDByTier: f,
            rgFilteredDLCsAppIDs: I,
          };
        }
        function Ca(m, n) {
          const d = m + 1,
            g = new Date(Date.UTC(d, 0, n, 1, 0, 0)),
            p = new Intl.DateTimeFormat("en-US", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1,
            }).formatToParts(g),
            f = (y) => Number(p.find((S) => S.type === y).value),
            I = Date.UTC(
              f("year"),
              f("month") - 1,
              f("day"),
              f("hour"),
              f("minute"),
              f("second"),
            );
          return Math.floor(I / 1e3);
        }
        function Tt(m, n, d) {
          const g = (0, Ue.f1)(),
            p = g < Ca(n, 1),
            f = g < Ca(n, 15),
            I = _t(m, n),
            y = (0, ne.useMemo)(
              () =>
                I
                  ? Array.from(
                      new Set([
                        ...(I.top_dlc_releases?.map((D) => D.appid) || []),
                        ...(I.top_combined_app_and_dlc_releases?.map(
                          (D) => D.appid,
                        ) || []),
                        ...(I.top_app_list?.map((D) => D.appid) || []),
                      ]),
                    )
                  : (d && d(null), []),
              [I, d],
            ),
            S = (0, ze.zX)(y, Za),
            Z = (0, ne.useMemo)(() => {
              if (!I || S == ze.Sq) return [];
              const D = I?.top_combined_app_and_dlc_releases || [],
                z = [],
                xe = D.filter((Te) => !Oe.A.Get().BIsAppMissing(Te.appid)).map(
                  (Te) => {
                    let Xe = Te.app_release_rank;
                    return (
                      Xe == ee.s4.xE && (Xe = 0),
                      z[Xe] || (z[Xe] = []),
                      z[Xe].push(Te.appid),
                      Te.appid
                    );
                  },
                );
              let fe = [
                  {
                    strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                    strTabSubTitleToken: f
                      ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                      : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                    rgFilteredDLCsAppIDs:
                      I.top_dlc_releases
                        ?.filter((Te) => !Oe.A.Get().BIsAppMissing(Te.appid))
                        .map((Te) => Te.appid) || [],
                    rgFilteredCombinedAppsAndDLC: xe,
                    rgFilteredAppIDByTier: z,
                  },
                ],
                me = Qe(
                  ee.Cm.Hm,
                  "#SteamCharts_Yearly_Tab_TopSellers",
                  p
                    ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                    : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                  I.top_app_list,
                );
              return (
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && fe.push(me),
                (me = Qe(
                  ee.Cm.UM,
                  "#SteamCharts_Yearly_Tab_MostPlayed",
                  "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                  I.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && fe.push(me),
                (me = Qe(
                  ee.Cm.IJ,
                  "#SteamCharts_Yearly_Tab_SteamDeck",
                  "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                  I.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((me.bShowDeckCompat = !0), fe.push(me)),
                (me = Qe(
                  ee.Cm.lu,
                  "#SteamCharts_Yearly_Tab_Controller",
                  "#SteamCharts_Yearly_Tab_Controller_desc",
                  I.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && fe.push(me),
                (me = Qe(
                  ee.Cm.$L,
                  "#SteamCharts_Yearly_Tab_VR",
                  "#SteamCharts_Yearly_Tab_VR_desc",
                  I.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 && fe.push(me),
                (me = Qe(
                  ee.Cm.e,
                  "#SteamCharts_Yearly_Tab_Demo",
                  "#SteamCharts_Yearly_Tab_Demo_desc",
                  I.top_app_list,
                )),
                me.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((me.bShowDemoInfo = !0), fe.push(me)),
                fe
              );
            }, [I, S, p, f]);
          return {
            rgAppIDs: y,
            rgYearlyReleases: I,
            rgTabsData: Z,
            loadState: S,
          };
        }
        function Qa(m) {
          const { nYear: n, TopYearlyReleasesStore: d } = m,
            [g, p] = (0, ne.useState)(null),
            [f, I] = (0, ne.useState)(null),
            {
              rgAppIDs: y,
              rgYearlyReleases: S,
              rgTabsData: Z,
              loadState: D,
            } = Tt(d, n);
          return (
            (0, ne.useEffect)(() => {
              f ||
                (0, yt.$R)({ bForceFeatureTagForFullController: !1 }).then(I);
            }, [f]),
            ua(g, p, Z?.[0]?.rgFilteredDLCsAppIDs, D),
            !S || D == ze.Sq || !f || g == null || !y
              ? (0, e.jsxs)(oe.Z, {
                  className: Pe().ChartPage,
                  children: [
                    (0, e.jsx)(Jt, { nYear: n }),
                    (0, e.jsx)(Nt.t, {
                      string: (0, $.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : y.length == 0
                ? (0, e.jsxs)(oe.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(Jt, { nYear: n }),
                      (0, e.jsx)("div", {
                        className: Pe().NoticeBox,
                        children: (0, $.we)(
                          "#Error_ErrorCommunicatingWithNetwork",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(oe.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(nt, {
                        rgAppIDs: Z[0].rgFilteredCombinedAppsAndDLC,
                        bTallCapsule: !0,
                        bBlurCapsules: !1,
                        children: (0, e.jsx)(Jt, { nYear: n }),
                      }),
                      (0, e.jsx)(ba, { facets: f, nYear: n, rgTabsData: Z }),
                    ],
                  })
          );
        }
        function Jt(m) {
          const { nYear: n } = m,
            d = Kt(),
            g = (0, Ue.f1)(),
            [p] = (0, Va.QD)("tab", 1),
            f = n + 1,
            I = Lt(f, g, !0),
            y = n - 1,
            S = Lt(y, g, !0),
            Z = (0, Dt.yk)() || (0, Ht.tx)(window),
            D = (0, ne.useCallback)(
              (xe) => {
                Z.active_modal ||
                  (xe && I
                    ? d(De.BestOfYear("" + f))
                    : !xe && S && d(De.BestOfYear("" + y)));
              },
              [Z.active_modal, I, S, d, f, y],
            );
          (0, at.E)("ArrowLeft", () => D(!1), !0, !0),
            (0, at.E)("Left", () => D(!1), !0, !0),
            (0, at.E)("ArrowRight", () => D(!0), !0, !0),
            (0, at.E)("Right", () => D(!0), !0, !0);
          const z = p != 1 ? `?tab=${p}` : "";
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
                      children: (0, $.we)("#SteamCharts_Yearly_Title", n),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, _e.A)(w().PageSubtitle),
                    children: [
                      (0, $.we)("#SteamCharts_Yearly_SubTitle", 100),
                      (0, e.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(oe.Z, {
                className: (0, _e.A)(w().ChartRangeCtn, w().AnnualChart),
                children: [
                  (0, e.jsx)(ut.Gq, {
                    toolTipContent: (0, $.we)("#SteamCharts_Yearly_Title", y),
                    children: (0, e.jsx)("div", {
                      className: (0, _e.A)({
                        [w().ChartNavCtn]: !0,
                        [w().Disabled]: !S,
                      }),
                      children: S
                        ? (0, e.jsx)(Mt, {
                            to: De.BestOfYear("" + y) + z,
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
                  (0, e.jsx)(ut.Gq, {
                    toolTipContent: (0, $.we)("#SteamCharts_Yearly_Title", f),
                    children: (0, e.jsx)("div", {
                      className: (0, _e.A)({
                        [w().ChartNavCtn]: !0,
                        [w().Disabled]: !I,
                      }),
                      children: I
                        ? (0, e.jsx)(Mt, {
                            to: De.BestOfYear("" + f) + z,
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
        var ke = r(90783);
        const De = {
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
        async function Xa(m, n) {
          const d = new $e();
          return await d.Initialize(m, n), d;
        }
        function Ja(m) {
          const [n, d] = (0, ne.useState)(void 0),
            g = (0, ja.TR)(),
            p = (0, ja.rX)();
          if (
            ((0, ne.useEffect)(() => {
              Xa(g, p).then((D) => d(D));
            }, [g, p]),
            !n)
          )
            return null;
          const f = De,
            {
              TopSellersStore: I,
              DynamicUserStore: y,
              TopMonthlyReleasesStore: S,
              TopYearlyReleasesStore: Z,
            } = n;
          return (0, e.jsxs)(bt, {
            TopSellersStore: I,
            DynamicUserStore: y,
            TopMonthlyReleasesStore: S,
            children: [
              (0, e.jsx)(sn, {}),
              (0, e.jsx)(ht.Ay, {
                domain: "store.steampowered.com",
                controller: "steamcharts",
                children: (0, e.jsx)(ne.Suspense, {
                  fallback: null,
                  children: (0, e.jsxs)(Me.dO, {
                    children: [
                      (0, e.jsx)(Me.qh, {
                        path: `${f.TopNewReleases(":salePagename")}`,
                        render: (D) => {
                          const {
                            match: {
                              params: { salePagename: z },
                            },
                          } = D;
                          return (0, e.jsx)(ht.Ay, {
                            method: "monthlytopreleases",
                            children: (0, e.jsx)(rt.tH, {
                              children: (0, e.jsx)(Ga, {
                                salePageName: z,
                                TopMonthlyReleasesStore: S,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(Me.qh, {
                        path: `${f.BestOfYear(":salePagename")}`,
                        render: (D) => {
                          const {
                            match: {
                              params: { salePagename: z },
                            },
                          } = D;
                          return (0, e.jsx)(ht.Ay, {
                            method: "bestofyear",
                            children: (0, e.jsx)(rt.tH, {
                              children: (0, e.jsx)(nn, {
                                salePageName: z,
                                TopYearlyReleasesStore: Z,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(Me.qh, { children: (0, e.jsx)(ke.a, {}) }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function sn() {
          const { pathname: m } = (0, Me.zy)();
          return (
            ne.useEffect(() => {
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
      17083: (F, Se, r) => {
        "use strict";
        r.d(Se, { N_: () => K, k2: () => je });
        var e = r(92757),
          W = r(42891),
          X = r(90626),
          he = r(29248),
          R = r(58584),
          ge = r(81115),
          pe = r(68841),
          B = (function (L) {
            (0, W.A)(U, L);
            function U() {
              for (
                var be, de = arguments.length, Ce = new Array(de), ce = 0;
                ce < de;
                ce++
              )
                Ce[ce] = arguments[ce];
              return (
                (be = L.call.apply(L, [this].concat(Ce)) || this),
                (be.history = (0, he.zR)(be.props)),
                be
              );
            }
            var ee = U.prototype;
            return (
              (ee.render = function () {
                return X.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              U
            );
          })(X.Component),
          i = (function (L) {
            (0, W.A)(U, L);
            function U() {
              for (
                var be, de = arguments.length, Ce = new Array(de), ce = 0;
                ce < de;
                ce++
              )
                Ce[ce] = arguments[ce];
              return (
                (be = L.call.apply(L, [this].concat(Ce)) || this),
                (be.history = (0, he.TM)(be.props)),
                be
              );
            }
            var ee = U.prototype;
            return (
              (ee.render = function () {
                return X.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              U
            );
          })(X.Component),
          Y = function (U, ee) {
            return typeof U == "function" ? U(ee) : U;
          },
          Q = function (U, ee) {
            return typeof U == "string" ? (0, he.yJ)(U, null, null, ee) : U;
          },
          se = function (U) {
            return U;
          },
          ae = X.forwardRef;
        typeof ae > "u" && (ae = se);
        function N(L) {
          return !!(L.metaKey || L.altKey || L.ctrlKey || L.shiftKey);
        }
        var k = ae(function (L, U) {
            var ee = L.innerRef,
              be = L.navigate,
              de = L.onClick,
              Ce = (0, ge.A)(L, ["innerRef", "navigate", "onClick"]),
              ce = Ce.target,
              we = (0, R.A)({}, Ce, {
                onClick: function (Ge) {
                  try {
                    de && de(Ge);
                  } catch (tt) {
                    throw (Ge.preventDefault(), tt);
                  }
                  !Ge.defaultPrevented &&
                    Ge.button === 0 &&
                    (!ce || ce === "_self") &&
                    !N(Ge) &&
                    (Ge.preventDefault(), be());
                },
              });
            return (
              se !== ae ? (we.ref = U || ee) : (we.ref = ee),
              X.createElement("a", we)
            );
          }),
          K = ae(function (L, U) {
            var ee = L.component,
              be = ee === void 0 ? k : ee,
              de = L.replace,
              Ce = L.to,
              ce = L.innerRef,
              we = (0, ge.A)(L, ["component", "replace", "to", "innerRef"]);
            return X.createElement(e.XZ.Consumer, null, function (Re) {
              Re || (0, pe.A)(!1);
              var Ge = Re.history,
                tt = Q(Y(Ce, Re.location), Re.location),
                _t = tt ? Ge.createHref(tt) : "",
                $e = (0, R.A)({}, we, {
                  href: _t,
                  navigate: function () {
                    var ft = Y(Ce, Re.location),
                      Pe = (0, he.AO)(Re.location) === (0, he.AO)(Q(ft)),
                      Et = de || Pe ? Ge.replace : Ge.push;
                    Et(ft);
                  },
                });
              return (
                se !== ae ? ($e.ref = U || ce) : ($e.innerRef = ce),
                X.createElement(be, $e)
              );
            });
          });
        if (0) var le, ve;
        var j = function (U) {
            return U;
          },
          V = X.forwardRef;
        typeof V > "u" && (V = j);
        function ie() {
          for (var L = arguments.length, U = new Array(L), ee = 0; ee < L; ee++)
            U[ee] = arguments[ee];
          return U.filter(function (be) {
            return be;
          }).join(" ");
        }
        var je = V(function (L, U) {
          var ee = L["aria-current"],
            be = ee === void 0 ? "page" : ee,
            de = L.activeClassName,
            Ce = de === void 0 ? "active" : de,
            ce = L.activeStyle,
            we = L.className,
            Re = L.exact,
            Ge = L.isActive,
            tt = L.location,
            _t = L.sensitive,
            $e = L.strict,
            pt = L.style,
            ft = L.to,
            Pe = L.innerRef,
            Et = (0, ge.A)(L, [
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
            w || (0, pe.A)(!1);
            var ne = tt || w.location,
              qe = Q(Y(ft, ne), ne),
              Ue = qe.pathname,
              yt = Ue && Ue.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              Oe = yt
                ? (0, e.B6)(ne.pathname, {
                    path: yt,
                    exact: Re,
                    sensitive: _t,
                    strict: $e,
                  })
                : null,
              ze = !!(Ge ? Ge(Oe, ne) : Oe),
              We = typeof we == "function" ? we(ze) : we,
              St = typeof pt == "function" ? pt(ze) : pt;
            ze && ((We = ie(We, Ce)), (St = (0, R.A)({}, St, ce)));
            var At = (0, R.A)(
              {
                "aria-current": (ze && be) || null,
                className: We,
                style: St,
                to: qe,
              },
              Et,
            );
            return (
              j !== V ? (At.ref = U || Pe) : (At.innerRef = Pe),
              X.createElement(K, At)
            );
          });
        });
        if (0) var J;
      },
      44894: (F, Se, r) => {
        "use strict";
        r.d(Se, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
